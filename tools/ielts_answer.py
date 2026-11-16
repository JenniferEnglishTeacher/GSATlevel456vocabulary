"""Work out the text that fills the blank(s) of an IELTS topic sentence from the grid word."""
import re
BL = re.compile(r"_{3,}")


def runs(s):
    """Blank runs: consecutive blanks separated only by spaces form one run."""
    return [m.group(0) for m in re.finditer(r"_{3,}(?:\s+_{3,})*", s)]


def answer(w, s):
    """-> (answer, None) or (None, reason)."""
    w0 = re.sub(r"\s*\(.*?\)", "", w).strip()
    if len(runs(s)) == 2 and "," in w0:     # sayings: "like father, like son" -> one blank
        return w0, None
    w0 = re.sub(r"\s*/\s*", "/", w0)
    toks = w0.split()
    nb = len(BL.findall(s))
    words = re.findall(r"[A-Za-z'’-]+|_{3,}", s)
    if len(runs(s)) != 1 and "," not in w0:
        return None, f"{len(runs(s))} blank runs"
    i = words.index(next(x for x in words if x.startswith("___")))
    before = [x.lower() for x in words[:i]]
    after = [x.lower() for x in words[i + nb:]]
    t = list(toks)
    if len(t) > nb and t[0].lower() in ("be", "sb", "sth", "one's", "oneself"):
        t = t[1:]
    while len(t) > nb and after and t[-1].lower() in (after[0], "sth", "sb", "something", "someone", "doing", "n"):
        if t[-1].lower() == after[0]:
            after = after[1:]
        t = t[:-1]
    while len(t) > nb and before and t[0].lower() == before[-1]:
        t = t[1:]; before = before[:-1]
    if nb == 1 and len(t) > 1:          # a compound printed as one blank (steam engine, 3D food printing)
        t = [" ".join(t)]
    if len(t) != nb:
        return None, f"{len(toks)} words / {nb} blanks"
    a = " ".join(t)
    if "/" in a:
        a = a.split("/")[0]
    return a, None
