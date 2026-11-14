"""Teacher handouts for TOEIC topics: python3 tools/toeic_docs.py <outdir> <topic> [<topic> ...]
For each topic in tools/toeic/topics.json writes into <outdir>:
  TOEIC_TopicNN_<Name>_Grid.docx  — A4 landscape, 7-column grid (widths WID) (word | POS | English | 中文 | dialogue with blank | 中譯 | collocation),
                                     then the 30 MCQs and the answer key
  TOEIC_TopicNN_<Name>_Grid.pdf   — same, via LibreOffice (if soffice is installed)
  TOEIC_TopicNN_<Name>_GoogleDoc.html — same content as HTML, for uploading to Google Drive as a Google Doc (text/html converts; @page = A4 landscape, fixed column widths)"""
import json, os, re, sys, html, subprocess
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.section import WD_ORIENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = json.load(open(os.path.join(ROOT, "tools", "toeic", "topics.json"), encoding="utf8"))
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
L = "ABCD"
HD = ["Word / Phrase", "POS", "English Definition", "中文意思", "Sample Dialogue (fill in the blank)", "中文翻譯（【 】內為目標字）", "TOEIC Collocation 搭配詞"]
WID = [2.8, 1.2, 3.6, 2.4, 7.8, 5.9, 3.6]  # cm, sums to 27.3 = A4 landscape minus 1.2 cm margins


def lines(s, sep):  # "A: ... B: ..." -> two lines
    return re.sub(r"\s+B" + sep, "\nB" + sep, s, count=1)


def rows(G):
    for i, e in enumerate(G["VOCAB"], 1):
        yield (f"{i}. {e.get('forms') or e['word']}", f"({e['pos']})", e["en_def"], e["cn_def"],
               lines(e["sentence"], ":").replace("{{BLANK}}", "________"), lines(e["cn"], "："), e["collocation"])


def shade(c, fill):
    p = c._tc.get_or_add_tcPr(); sh = OxmlElement("w:shd")
    sh.set(qn("w:val"), "clear"); sh.set(qn("w:fill"), fill); p.append(sh)


for k in sys.argv[2:]:
    G = T[str(int(k))]
    name = re.match(r"[A-Za-z0-9&' -]+", G["theme"]).group().strip().replace(" ", "_").replace("&", "and")
    stem = os.path.join(OUT, f"TOEIC_Topic{int(k):02d}_{name}_Grid")
    title = f"TOEIC Vocabulary by Topic — Topic {int(k)}: {G['theme']}"
    src = f"Source word list: {G['source']} ({len(G['VOCAB'])} words) · CEFR B1–pre-B2"
    # ---- docx
    doc = Document()
    s = doc.sections[0]; s.orientation = WD_ORIENT.LANDSCAPE; s.page_width, s.page_height = Cm(29.7), Cm(21)
    for m in ("left_margin", "right_margin", "top_margin", "bottom_margin"):
        setattr(s, m, Cm(1.2))
    st = doc.styles["Normal"]; st.font.name = "Arial"; st.font.size = Pt(9.5)
    st.element.rPr.rFonts.set(qn("w:eastAsia"), "Microsoft JhengHei")
    doc.add_heading(title, 1); doc.add_paragraph(src); doc.add_heading("Part 1 · Vocabulary Grid 單字表", 2)
    t = doc.add_table(rows=1, cols=7); t.style = "Table Grid"; t.autofit = False
    for i, h in enumerate(HD):
        c = t.rows[0].cells[i]; r = c.paragraphs[0].add_run(h); r.bold = True; r.font.color.rgb = RGBColor(255, 255, 255); shade(c, "1F4E79")
    th = OxmlElement("w:tblHeader"); th.set(qn("w:val"), "true"); t.rows[0]._tr.get_or_add_trPr().append(th)
    for n, row in enumerate(rows(G), 1):
        cells = t.add_row().cells
        cells[0].paragraphs[0].add_run(row[0]).bold = True
        for c, v in zip(cells[1:], row[1:]):
            c.text = v
        if n % 2 == 0:
            for c in cells:
                shade(c, "EEF3F8")
    for col, w in zip(t.columns, WID):
        col.width = Cm(w)
    for r in t.rows:
        for c, w in zip(r.cells, WID):
            c.width = Cm(w)
    doc.add_page_break(); doc.add_heading(f"Part 2 · {len(G['MCQS'])} Vocabulary MCQs 單字選擇題", 2)
    for n, q in enumerate(G["MCQS"], 1):
        p = doc.add_paragraph(); p.add_run(f"{n}. ").bold = True; p.add_run(q["q"])
        doc.add_paragraph("    " + "      ".join(f"({L[j]}) {o}" for j, o in enumerate(q["options"])))
    doc.add_heading("Answer Key 解答", 3)
    doc.add_paragraph("   ".join(f"{n}.{L[q['answer']]}" for n, q in enumerate(G["MCQS"], 1)))
    doc.save(stem + ".docx")
    try:
        subprocess.run(["soffice", "--headless", "--convert-to", "pdf", "--outdir", OUT, stem + ".docx"], check=True, capture_output=True, timeout=180)
    except Exception as ex:
        print("pdf skipped:", ex)
    # ---- Google Doc HTML
    e = html.escape
    W = lambda j: f' style="width:{WID[j]}cm"'
    trs = "".join("<tr>" + f"<td{W(0)}><b>{e(r[0])}</b></td>" + "".join(f"<td{W(j)}>{e(v).replace(chr(10), '<br>')}</td>" for j, v in enumerate(r[1:], 1)) + "</tr>\n" for r in rows(G))
    qs = "".join(f"<p><b>{n}.</b> {e(q['q'])}<br>" + "&nbsp;&nbsp;&nbsp;".join(f"({L[j]}) {e(o)}" for j, o in enumerate(q["options"])) + "</p>\n"
                 for n, q in enumerate(G["MCQS"], 1))
    key = "&nbsp;&nbsp; ".join(f"{n}.{L[q['answer']]}" for n, q in enumerate(G["MCQS"], 1))
    open(stem.replace("_Grid", "_GoogleDoc") + ".html", "w", encoding="utf8").write(
        f"""<html><head><meta charset="utf-8"><style>@page{{size:29.7cm 21cm;margin:1.2cm}}body{{font-family:Arial;font-size:10pt}}table{{border-collapse:collapse;width:27.3cm;table-layout:fixed}}
td,th{{border:1px solid #999;padding:4px;vertical-align:top;font-size:9.5pt}}th{{background:#1F4E79;color:#fff}}</style></head><body>
<h1>{e(title)}</h1><p>{e(src)}</p><h2>Part 1 · Vocabulary Grid 單字表</h2>
<table width="100%"><colgroup>{''.join(f'<col style="width:{w}cm">' for w in WID)}</colgroup><tr>{''.join(f'<th{W(j)}>{e(h)}</th>' for j, h in enumerate(HD))}</tr>
{trs}</table><h2>Part 2 · {len(G['MCQS'])} Vocabulary MCQs 單字選擇題</h2>
{qs}<h3>Answer Key 解答</h3><p>{key}</p></body></html>""")
    print("wrote", stem)
