// Lesson 15 Quiz Data: Stationery, Office Supplies & Materials
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 15 - Stationery, Office Supplies & Materials",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cotton",
    "pos": "n.",
    "cn_def": "棉花；純棉",
    "en_def": "a soft white fibrous substance used for making clothes and thread",
    "sentence": "People living in tropical climates prefer wearing light clothes made of pure {{BLANK}} because it absorbs sweat well.",
    "cn": "生活在熱帶氣候的人們更喜歡穿著純棉製成的輕便衣服，因為它吸汗效果好。"
  },
  {
    "word": "pipe",
    "pos": "n.",
    "cn_def": "管子；煙斗",
    "en_def": "a tube through which liquids or gases flow; a smoking device",
    "sentence": "The plumber had to replace a leaking copper {{BLANK}} under the kitchen sink to prevent further water damage.",
    "cn": "水電工必須更換廚房水槽下一根漏水的銅管，以防止水災進一步擴大。"
  },
  {
    "word": "tape",
    "pos": "n. / v.",
    "cn_def": "膠帶；磁帶；用膠帶黏貼；錄製",
    "en_def": "a narrow strip of sticky material; to record audio/video",
    "sentence": "Before moving to the new apartment, father used strong packaging {{BLANK}} to seal all the cardboard boxes.",
    "cn": "在搬到新公寓之前，父親用強韌的封箱膠帶把所有的紙箱都密封好。"
  },
  {
    "word": "CD",
    "pos": "n.",
    "cn_def": "光碟；雷射唱片",
    "en_def": "a compact disc used for storing digital audio, video, or data",
    "sentence": "My uncle has an impressive music collection with over five hundred jazz albums stored on original {{BLANK}}.",
    "cn": "我叔叔擁有令人印象深刻的音樂收藏，有超過五百張爵士專輯保存在原版光碟上。"
  },
  {
    "word": "envelope",
    "pos": "n.",
    "cn_def": "信封",
    "en_def": "a flat paper container used especially for enclosing a letter",
    "sentence": "After writing a heartfelt thank-you letter to her teacher, Maria slipped it into a clean white {{BLANK}}.",
    "cn": "在給她的老師寫了一封由衷的感謝信之後，瑪麗亞將信滑入一個乾淨的白色信封中。"
  },
  {
    "word": "glue",
    "pos": "n. / v.",
    "cn_def": "膠水；黏貼",
    "en_def": "a sticky substance used for joining things together",
    "sentence": "The little girl made a colorful paper lantern for the festival, and she used liquid {{BLANK}} to stick the parts.",
    "cn": "小女孩為節日做了一個色彩繽紛的紙燈籠，她用液態膠水將各個部分黏合在一起。"
  },
  {
    "word": "ink",
    "pos": "n.",
    "cn_def": "墨水；油墨",
    "en_def": "a colored liquid used for writing, drawing, or printing",
    "sentence": "The office printer stopped working suddenly because the black {{BLANK}} cartridge ran completely dry.",
    "cn": "辦公室印表機突然停止運作，因為黑色墨水匣裡面的墨水已經徹底用乾了。"
  },
  {
    "word": "marker",
    "pos": "n.",
    "cn_def": "麥克筆；彩色筆",
    "en_def": "a felt-tipped pen used for writing bold lines or highlighting",
    "sentence": "The English teacher picked up a red dry-erase {{BLANK}} and wrote three important grammar rules on the whiteboard.",
    "cn": "英文老師拿起一支給白板用的紅色乾擦麥克筆，在白板上寫了三條重要的文法規則。"
  },
  {
    "word": "paste",
    "pos": "n. / v.",
    "cn_def": "糊狀物；漿糊；張貼",
    "en_def": "a thick wet mixture used for sticking paper; to glue",
    "sentence": "The students spread homemade wheat {{BLANK}} evenly over the wall to hang their artistic campaign posters.",
    "cn": "學生們將自製的麵粉漿糊均勻塗抹在牆上，以張貼他們的藝術宣傳海報。"
  },
  {
    "word": "textbook",
    "pos": "n.",
    "cn_def": "教科書；課本",
    "en_def": "a comprehensive book used for the formal study of a subject",
    "sentence": "Every student must bring their science {{BLANK}} to class every morning so that we can read chapter four together.",
    "cn": "每位學生每天早上都必須帶他們的自然教科書來上課，這樣我們才能一起閱讀第四章。"
  }
];

const MCQS = [
  {
    "q": "Because the summer heat in southern Taiwan is intense, I only buy casual shirts tailored from breathable natural ______.",
    "options": [
      "cotton",
      "CD",
      "envelope",
      "pipe"
    ],
    "answer": 0,
    "cn": "因為南台灣夏季炎熱難耐，我只購買透氣天然純棉剪裁的休閒襯衫。 【選項解析】(A) cotton 棉花/純棉  (B) CD 光碟  (C) envelope 信封  (D) pipe 管子。透氣布料為 natural cotton。",
    "vocabIndex": 0
  },
  {
    "q": "The heavy freeze caused a burst water ______ in the garden, and cold water flooded the lawn.",
    "options": [
      "envelope",
      "paste",
      "marker",
      "pipe"
    ],
    "answer": 3,
    "cn": "嚴重的冰凍導致花園裡的一根水管爆裂，冰水淹沒了整個草坪。 【選項解析】(A) envelope 信封  (B) pipe 水管  (C) marker 麥克筆  (D) paste 漿糊。burst water pipe（爆裂水管）。",
    "vocabIndex": 1
  },
  {
    "q": "Mother securely fastened the edges of the parcel using three layers of brown packing ______.",
    "options": [
      "textbook",
      "ink",
      "tape",
      "CD"
    ],
    "answer": 2,
    "cn": "母親用三層棕色封箱膠帶將包裹的邊緣牢固地封合起來。 【選項解析】(A) textbook 教科書  (B) ink 墨水  (C) tape 膠帶  (D) CD 光碟。封箱使用 packing tape。",
    "vocabIndex": 2
  },
  {
    "q": "Before digital streaming became popular worldwide, people bought music tracks on shiny round ______.",
    "options": [
      "pipes",
      "CDs",
      "envelopes",
      "cottons"
    ],
    "answer": 1,
    "cn": "在數位串流風靡全球之前，人們都在閃亮圓形光碟上購買音樂曲目。 【選項解析】(A) pipes 管子  (B) cottons 棉花  (C) envelopes 信封  (D) CDs 光碟。音樂載體為 shiny round CDs。",
    "vocabIndex": 3
  },
  {
    "q": "Please remember to moisten the flap of the ______ and press it firmly before putting it in the mailbox.",
    "options": [
      "CD",
      "pipe",
      "envelope",
      "textbook"
    ],
    "answer": 2,
    "cn": "在把信投入郵筒前，請記得將信封封口沾濕並用力按緊。 【選項解析】(A) envelope 信封  (B) pipe 管子  (C) CD 光碟  (D) textbook 教科書。信件封口為 flap of the envelope。",
    "vocabIndex": 4
  },
  {
    "q": "When Billy dropped his toy airplane, its plastic wing snapped off, but he fixed it with model ______.",
    "options": [
      "pipe",
      "CD",
      "cotton",
      "glue"
    ],
    "answer": 3,
    "cn": "當比利把玩具飛機掉在地上時，塑膠機翼斷了，但他用模型膠水修好了它。 【選項解析】(A) pipe 管子  (B) glue 膠水  (C) cotton 棉花  (D) CD 光碟。修復塑膠模型使用 model glue。",
    "vocabIndex": 5
  },
  {
    "q": "Be careful when refilling the calligraphy pen, or dark blue ______ will splash across your desk.",
    "options": [
      "pipe",
      "ink",
      "envelope",
      "textbook"
    ],
    "answer": 1,
    "cn": "在補充鋼筆墨水時要小心，否則深藍色墨水會濺得整個書桌都是。 【選項解析】(A) pipe 管子  (B) envelope 信封  (C) ink 墨水  (D) textbook 教科書。鋼筆內部液體為 dark blue ink。",
    "vocabIndex": 6
  },
  {
    "q": "The lecturer used a bold black ______ to draw a clear diagram on the whiteboard during the seminar.",
    "options": [
      "marker",
      "pipe",
      "CD",
      "envelope"
    ],
    "answer": 0,
    "cn": "演講者在研討會期間用一支粗黑色麥克筆在白板上畫了一個清晰的圖表。 【選項解析】(A) envelope 信封  (B) pipe 管子  (C) CD 光碟  (D) marker 麥克筆。白板書寫工具為 dry-erase marker。",
    "vocabIndex": 7
  },
  {
    "q": "In art class, the children used sticky wallpaper ______ to assemble papier-mâché sculptures.",
    "options": [
      "CD",
      "pipe",
      "paste",
      "envelope"
    ],
    "answer": 2,
    "cn": "在美術課上，孩子們使用具黏性的壁紙漿糊來組裝紙黏土雕塑。 【選項解析】(A) paste 漿糊  (B) pipe 管子  (C) CD 光碟  (D) envelope 信封。黏合紙雕使用 wallpaper paste。",
    "vocabIndex": 8
  },
  {
    "q": "Turn to page ninety in your biology ______ and answer the three questions printed at the bottom.",
    "options": [
      "pipe",
      "tape",
      "envelope",
      "textbook"
    ],
    "answer": 3,
    "cn": "翻開自然教科書第九十頁，並回答印在最底部的三個問題。 【選項解析】(A) pipe 管子  (B) textbook 教科書  (C) envelope 信封  (D) tape 膠帶。課堂教材翻到某頁用 textbook。",
    "vocabIndex": 9
  },
  {
    "q": "Hospital bandages are made of sterilized ______ gauze to protect sensitive wounds from external infection.",
    "options": [
      "pipe",
      "cotton",
      "CD",
      "envelope"
    ],
    "answer": 1,
    "cn": "醫院繃帶由滅菌棉紗布製成，以保護敏感傷口免受外部感染。 【選項解析】(A) pipe 管子  (B) CD 光碟  (C) cotton 棉花/純棉  (D) envelope 信封。醫用棉紗為 cotton gauze。",
    "vocabIndex": 0
  },
  {
    "q": "An experienced plumber climbed into the crawlspace to inspect the main drainage ______ of the apartment.",
    "options": [
      "pipe",
      "envelope",
      "CD",
      "marker"
    ],
    "answer": 0,
    "cn": "經驗豐富的水電工爬進管道夾層，檢查公寓的主要排水管。 【選項解析】(A) marker 麥克筆  (B) envelope 信封  (C) CD 光碟  (D) pipe 管線。主排水管為 main drainage pipe。",
    "vocabIndex": 1
  },
  {
    "q": "The detective carefully wrapped a piece of transparent adhesive ______ around the suspect's drinking glass.",
    "options": [
      "textbook",
      "pipe",
      "CD",
      "tape"
    ],
    "answer": 3,
    "cn": "刑警小心翼翼地在嫌疑犯喝水的水杯周圍纏上一條透明膠帶以採集指紋。 【選項解析】(A) tape 膠帶  (B) pipe 管子  (C) CD 光碟  (D) textbook 教科書。透明膠帶為 transparent adhesive tape。",
    "vocabIndex": 2
  },
  {
    "q": "My older sister still enjoys collecting physical albums, so she bought a classic rock ______ at the music store.",
    "options": [
      "CD",
      "pipe",
      "cotton",
      "envelope"
    ],
    "answer": 0,
    "cn": "我姊姊仍然喜歡收藏實體專輯，所以她在唱片行買了一張經典搖滾CD。 【選項解析】(A) pipe 管子  (B) CD 唱片光碟  (C) cotton 棉花  (D) envelope 信封。實體音樂專輯為 classic rock CD。",
    "vocabIndex": 3
  },
  {
    "q": "Don't forget to affix a valid postage stamp to the top right corner of the paper ______ before mailing.",
    "options": [
      "pipe",
      "envelope",
      "CD",
      "marker"
    ],
    "answer": 1,
    "cn": "寄出信件前，不要忘記在紙信封的右上角貼上一張有效的郵票。 【選項解析】(A) pipe 管子  (B) CD 光碟  (C) envelope 信封  (D) marker 麥克筆。信封右上角貼郵票為 paper envelope。",
    "vocabIndex": 4
  },
  {
    "q": "The wooden chair leg became loose after years of use, so grandpa repaired it with strong wood ______.",
    "options": [
      "pipe",
      "envelope",
      "glue",
      "CD"
    ],
    "answer": 2,
    "cn": "木椅腳經過多年使用變鬆了，所以祖父用強效木工膠將其修復好。 【選項解析】(A) pipe 管子  (B) envelope 信封  (C) CD 光碟  (D) glue 膠水。修補木椅用 strong wood glue。",
    "vocabIndex": 5
  },
  {
    "q": "Medieval scribes dipped pointed bird feathers into dark squid ______ to write historical manuscripts.",
    "options": [
      "pipe",
      "ink",
      "CD",
      "envelope"
    ],
    "answer": 1,
    "cn": "中世紀的抄寫員將削尖的鳥羽毛浸入深色墨水之中來書寫歷史手稿。 【選項解析】(A) ink 墨水  (B) pipe 管子  (C) CD 光碟  (D) envelope 信封。沾水筆書寫用 dark squid ink。",
    "vocabIndex": 6
  },
  {
    "q": "Make sure to put the cap back on the highlighter ______ tightly, or the tip will dry out completely overnight.",
    "options": [
      "CD",
      "envelope",
      "marker",
      "pipe"
    ],
    "answer": 2,
    "cn": "務必把螢光麥克筆的筆蓋蓋緊，否則筆尖隔夜就會徹底乾掉。 【選項解析】(A) CD 光碟  (B) marker 麥克筆  (C) envelope 信封  (D) pipe 管子。螢光筆為 highlighter marker。",
    "vocabIndex": 7
  },
  {
    "q": "Before computers existed, editors used scissors and starch ______ to lay out newspaper columns by hand.",
    "options": [
      "paste",
      "CD",
      "pipe",
      "envelope"
    ],
    "answer": 0,
    "cn": "在電腦出現之前，編輯們用剪刀和澱粉漿糊手工排版報紙專欄版面。 【選項解析】(A) pipe 管子  (B) CD 光碟  (C) paste 漿糊  (D) envelope 信封。黏貼排版使用 starch paste。",
    "vocabIndex": 8
  },
  {
    "q": "The high school principal announced that all students would receive their new history ______ next Monday morning.",
    "options": [
      "envelopes",
      "pipes",
      "CDs",
      "textbooks"
    ],
    "answer": 3,
    "cn": "高中校長宣布，全體學生將在下星期一早晨領取他們的新歷史教科書。 【選項解析】(A) envelopes 信封  (B) pipes 管子  (C) CDs 光碟  (D) textbooks 教科書。學期發放教材為 history textbooks。",
    "vocabIndex": 9
  },
  {
    "q": "High-quality bedding sheets made from organic Egyptian ______ provide a remarkably comfortable night of rest.",
    "options": [
      "pipe",
      "cotton",
      "envelope",
      "CD"
    ],
    "answer": 1,
    "cn": "由有機埃及棉製成的高品質床單，能提供格外舒適的夜間睡眠休憩。 【選項解析】(A) cotton 純棉  (B) pipe 管子  (C) envelope 信封  (D) CD 光碟。埃及純棉為 Egyptian cotton。",
    "vocabIndex": 0
  },
  {
    "q": "Factory emissions travel through a tall exhaust ______ high into the sky above the industrial park.",
    "options": [
      "pipe",
      "CD",
      "envelope",
      "textbook"
    ],
    "answer": 0,
    "cn": "工廠廢氣穿過工業區上方高聳的排氣管排放到遙遠的高空之中。 【選項解析】(A) CD 光碟  (B) pipe 排氣管  (C) envelope 信封  (D) textbook 教科書。廢氣排放管道為 tall exhaust pipe。",
    "vocabIndex": 1
  },
  {
    "q": "The athlete wrapped athletic ______ around his sprained ankle to give it extra stability during the race.",
    "options": [
      "CD",
      "pipe",
      "tape",
      "textbook"
    ],
    "answer": 2,
    "cn": "運動員在他扭傷的腳踝上纏繞運動白貼膠帶，以在比賽中增加穩定度。 【選項解析】(A) CD 光碟  (B) pipe 管子  (C) tape 膠帶  (D) textbook 教科書。運動防護貼紮為 athletic tape。",
    "vocabIndex": 2
  },
  {
    "q": "Put the installation ______ into your computer's optical drive and follow the instructions on the screen.",
    "options": [
      "pipe",
      "envelope",
      "textbook",
      "CD"
    ],
    "answer": 3,
    "cn": "將安裝光碟放入電腦的光碟機中，並依照螢幕上的操作指示進行。 【選項解析】(A) pipe 管子  (B) envelope 信封  (C) textbook 教科書  (D) CD 安裝光碟。電腦光碟機放入 installation CD。",
    "vocabIndex": 3
  },
  {
    "q": "When the confidential document arrived, the red wax seal on the back of the parchment ______ was unbroken.",
    "options": [
      "pipe",
      "envelope",
      "CD",
      "tape"
    ],
    "answer": 1,
    "cn": "當機密文件送達時，羊皮紙信封背面的紅色火漆印章完好無損。 【選項解析】(A) envelope 信封  (B) pipe 管子  (C) CD 光碟  (D) tape 膠帶。附有火漆印章的信件容器為 parchment envelope。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "cotton": {
    "pos": "n.",
    "en_def": "a soft white fibrous substance used for making clothes and thread",
    "cn_def": "棉花；純棉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a soft white fibrous substance used for making clothes and thread",
        "cn_def": "棉花；純棉"
      }
    ]
  },
  "pipe": {
    "pos": "n.",
    "en_def": "a tube through which liquids or gases flow; a smoking device",
    "cn_def": "管子；煙斗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tube through which liquids or gases flow; a smoking device",
        "cn_def": "管子；煙斗"
      }
    ]
  },
  "tape": {
    "pos": "n. / v.",
    "en_def": "a narrow strip of sticky material; to record audio/video",
    "cn_def": "膠帶；磁帶；用膠帶黏貼；錄製",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a narrow strip of sticky material; to record audio/video",
        "cn_def": "膠帶；磁帶；用膠帶黏貼；錄製"
      }
    ]
  },
  "cd": {
    "pos": "n.",
    "en_def": "a compact disc used for storing digital audio, video, or data",
    "cn_def": "光碟；雷射唱片",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a compact disc used for storing digital audio, video, or data",
        "cn_def": "光碟；雷射唱片"
      }
    ]
  },
  "envelope": {
    "pos": "n.",
    "en_def": "a flat paper container used especially for enclosing a letter",
    "cn_def": "信封",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a flat paper container used especially for enclosing a letter",
        "cn_def": "信封"
      }
    ]
  },
  "glue": {
    "pos": "n. / v.",
    "en_def": "a sticky substance used for joining things together",
    "cn_def": "膠水；黏貼",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a sticky substance used for joining things together",
        "cn_def": "膠水；黏貼"
      }
    ]
  },
  "ink": {
    "pos": "n.",
    "en_def": "a colored liquid used for writing, drawing, or printing",
    "cn_def": "墨水；油墨",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a colored liquid used for writing, drawing, or printing",
        "cn_def": "墨水；油墨"
      }
    ]
  },
  "marker": {
    "pos": "n.",
    "en_def": "a felt-tipped pen used for writing bold lines or highlighting",
    "cn_def": "麥克筆；彩色筆",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a felt-tipped pen used for writing bold lines or highlighting",
        "cn_def": "麥克筆；彩色筆"
      }
    ]
  },
  "paste": {
    "pos": "n. / v.",
    "en_def": "a thick wet mixture used for sticking paper; to glue",
    "cn_def": "糊狀物；漿糊；張貼",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a thick wet mixture used for sticking paper; to glue",
        "cn_def": "糊狀物；漿糊；張貼"
      }
    ]
  },
  "textbook": {
    "pos": "n.",
    "en_def": "a comprehensive book used for the formal study of a subject",
    "cn_def": "教科書；課本",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a comprehensive book used for the formal study of a subject",
        "cn_def": "教科書；課本"
      }
    ]
  },
  "pipes": {
    "pos": "",
    "en_def": "",
    "cn_def": "管子",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "管子"
      }
    ]
  },
  "cds": {
    "pos": "",
    "en_def": "",
    "cn_def": "光碟",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "光碟"
      }
    ]
  },
  "envelopes": {
    "pos": "",
    "en_def": "",
    "cn_def": "信封",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "信封"
      }
    ]
  },
  "cottons": {
    "pos": "",
    "en_def": "",
    "cn_def": "棉花",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "棉花"
      }
    ]
  },
  "textbooks": {
    "pos": "",
    "en_def": "",
    "cn_def": "教科書",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "教科書"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
