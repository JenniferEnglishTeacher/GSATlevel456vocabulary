// Unit 11 Quiz Data: wonder – dare to V
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U11 - wonder – dare to V",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wonder",
    "pos": "n.",
    "cn_def": "奇蹟",
    "en_def": "something that fills you with surprise and admiration",
    "sentence": "The Great Wall of China is a {{BLANK}} of engineering.",
    "cn": "中國的長城是工程學上的一個奇蹟。"
  },
  {
    "word": "wonder",
    "pos": "v.",
    "cn_def": "感到驚奇",
    "en_def": "to feel great surprise and admiration",
    "sentence": "I often {{BLANK}} about the mysteries of the universe.",
    "cn": "我常常對宇宙的神秘事物感到驚奇。"
  },
  {
    "word": "wonder",
    "pos": "v.",
    "cn_def": "想知道",
    "en_def": "to want to know something; to ask yourself a question",
    "sentence": "I {{BLANK}} why the eggs are in short supply.",
    "cn": "我想知道為什麼雞蛋供應量不足短缺。"
  },
  {
    "word": "tropical",
    "pos": "adj.",
    "cn_def": "熱帶的",
    "en_def": "from or in the hottest parts of the world",
    "sentence": "The {{BLANK}} climate is characterized by high humidity.",
    "cn": "熱帶氣候的特點是高濕度。"
  },
  {
    "word": "subtropical",
    "pos": "adj.",
    "cn_def": "亞熱帶的",
    "en_def": "in or from regions next to the tropics, which are warm but not as hot",
    "sentence": "This region has a {{BLANK}} environment, suitable for diverse flora.",
    "cn": "這個區域有著亞熱帶的環境，適合各種植物生長。"
  },
  {
    "word": "temperate",
    "pos": "adj.",
    "cn_def": "溫帶的",
    "en_def": "(of a climate or region) never very hot or very cold",
    "sentence": "The {{BLANK}} zone experiences four distinct seasons.",
    "cn": "溫帶地區經歷四個不同的季節。"
  },
  {
    "word": "tend to",
    "pos": "phr.",
    "cn_def": "傾向於",
    "en_def": "to be likely to do something or to do it often",
    "sentence": "People {{BLANK}} prefer stability over uncertainty.",
    "cn": "人們傾向於偏好穩定超過不確定性。"
  },
  {
    "word": "tendency",
    "pos": "n.",
    "cn_def": "傾向",
    "en_def": "the fact that something usually happens or someone usually behaves in a certain way",
    "sentence": "There is a {{BLANK}} for younger generations to embrace technology.",
    "cn": "年輕一代有傾向於接受技術。"
  },
  {
    "word": "intend to",
    "pos": "phr.",
    "cn_def": "打算",
    "en_def": "to plan to do something",
    "sentence": "I {{BLANK}} travel to Europe next summer.",
    "cn": "我打算明年夏天去歐洲旅行。"
  },
  {
    "word": "intension",
    "pos": "n.",
    "cn_def": "意圖",
    "en_def": "what you plan or mean to do; a purpose",
    "sentence": "His {{BLANK}} behind the decision was unclear.",
    "cn": "他做出這個決定的意圖不明朗。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論",
    "en_def": "a set of ideas that explains why something happens",
    "sentence": "Einstein's {{BLANK}} of relativity revolutionized physics.",
    "cn": "愛因斯坦的相對論理論顛覆了物理學。"
  },
  {
    "word": "theorize",
    "pos": "v.",
    "cn_def": "理論化",
    "en_def": "to suggest ideas that may explain something",
    "sentence": "Scientists often {{BLANK}} to explain natural phenomena.",
    "cn": "科學家們經常理論化來解釋自然現象。"
  },
  {
    "word": "theoretical",
    "pos": "adj.",
    "cn_def": "理論上的",
    "en_def": "based on ideas rather than on practice or experience",
    "sentence": "The {{BLANK}} aspects of this study are challenging.",
    "cn": "這項研究的理論方面是有挑戰性的。"
  },
  {
    "word": "sweat",
    "pos": "n.",
    "cn_def": "汗",
    "en_def": "the liquid that comes out of your skin when you are hot or nervous",
    "sentence": "After a long run, he was covered in {{BLANK}}.",
    "cn": "長時間跑步後，他滿身是汗。"
  },
  {
    "word": "focus on",
    "pos": "phr.",
    "cn_def": "專注於",
    "en_def": "to give all your attention to one thing",
    "sentence": "It's important to {{BLANK}} the task at hand.",
    "cn": "關注手頭的任務是很重要的。"
  },
  {
    "word": "vary",
    "pos": "v.",
    "cn_def": "(使)不同 / 改變",
    "en_def": "to be different from each other; to change something",
    "sentence": "The cost of living can {{BLANK}} significantly from one city to another, depending on local taxes and housing demands.",
    "cn": "生活成本在不同城市之間可能會有顯著差異，這取決於當地的稅收和住房需求。"
  },
  {
    "word": "a variety of",
    "pos": "phr.",
    "cn_def": "各種各樣的",
    "en_def": "many different types of something",
    "sentence": "The festival featured {{BLANK}} cultural performances.",
    "cn": "節日展示了各種各樣的文化表演。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種不同的",
    "en_def": "several different",
    "sentence": "There were {{BLANK}} opinions on the matter.",
    "cn": "對這件事有各種意見"
  },
  {
    "word": "varied",
    "pos": "adj.",
    "cn_def": "多變的",
    "en_def": "including many different types or things",
    "sentence": "The exhibition displayed a {{BLANK}} collection of artworks.",
    "cn": "展覽展示了多變的藝術作品收藏。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可用的",
    "en_def": "able to be used or obtained",
    "sentence": "The information is readily {{BLANK}} online.",
    "cn": "資訊在線上容易取得。"
  },
  {
    "word": "grain",
    "pos": "n.",
    "cn_def": "穀物",
    "en_def": "the seeds of crops such as rice, wheat or corn",
    "sentence": "Rice is a staple {{BLANK}} in many countries.",
    "cn": "在許多國家，米是主要的穀物。"
  },
  {
    "word": "source",
    "pos": "n.",
    "cn_def": "來源",
    "en_def": "the place, person or thing that something comes from",
    "sentence": "The river is the main {{BLANK}} of water for the region.",
    "cn": "這條河是該地區主要的水源。"
  },
  {
    "word": "source out",
    "pos": "phr.",
    "cn_def": "尋找來源",
    "en_def": "to look for and find a supplier of something you need",
    "sentence": "We need to {{BLANK}} quality materials for our new product.",
    "cn": "我們需要為我們的新產品尋找優質材料。"
  },
  {
    "word": "origin",
    "pos": "n.",
    "cn_def": "起源",
    "en_def": "the point or place where something begins",
    "sentence": "The {{BLANK}} of the festival dates back to ancient times.",
    "cn": "節日的起源可以追溯到古代。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原本的",
    "en_def": "existing at the beginning; first, before any changes",
    "sentence": "The painting was restored to its {{BLANK}} state.",
    "cn": "這幅畫被恢復到其原本的狀態。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的",
    "en_def": "new and different from anything before; not copied",
    "sentence": "She is known for her {{BLANK}} ideas in design.",
    "cn": "她以她在設計上的原創想法而聞名。"
  },
  {
    "word": "originates from",
    "pos": "phr.",
    "cn_def": "起源於",
    "en_def": "to start in a particular place or from a particular thing",
    "sentence": "The cuisine {{BLANK}} the Mediterranean region.",
    "cn": "這種美食起源於地中海地區。"
  },
  {
    "word": "range from $50 to",
    "pos": "phr.",
    "cn_def": "範圍從A到B",
    "en_def": "to include a variety of things between two limits",
    "sentence": "Prices {{BLANK}} $200.",
    "cn": "價格範圍從50美元到200美元。"
  },
  {
    "word": "ranging from clothing to",
    "pos": "phr.",
    "cn_def": "範圍從…到…",
    "en_def": "including everything between two stated limits",
    "sentence": "The store offers products {{BLANK}} electronics.",
    "cn": "這家商店提供的產品範圍從服裝到電子產品。"
  },
  {
    "word": "range",
    "pos": "n.",
    "cn_def": "範圍",
    "en_def": "a number of different things of the same general type; the limits between which something changes",
    "sentence": "The hotel offers a wide {{BLANK}} of services.",
    "cn": "這家酒店提供廣泛的服務範圍。"
  },
  {
    "word": "mixed",
    "pos": "adj.",
    "cn_def": "混合的",
    "en_def": "made of different things or kinds combined together",
    "sentence": "The team is {{BLANK}} in terms of skills and experience.",
    "cn": "這支隊伍在技能和經驗方面是混合的。"
  },
  {
    "word": "mixture",
    "pos": "n.",
    "cn_def": "混合物",
    "en_def": "a combination of two or more different things",
    "sentence": "The recipe calls for a {{BLANK}} of spices.",
    "cn": "食譜要求使用一種香料混合物。"
  },
  {
    "word": "beside",
    "pos": "n.",
    "cn_def": "在...旁邊",
    "en_def": "next to or at the side of someone or something",
    "sentence": "She sat {{BLANK}} her friend during the concert.",
    "cn": "她在音樂會期間坐在她朋友旁邊。"
  },
  {
    "word": "deny",
    "pos": "v.",
    "cn_def": "否認",
    "en_def": "to say that something is not true",
    "sentence": "He tried to {{BLANK}} any involvement in the scandal.",
    "cn": "他試圖否認在醜聞中的任何牽連。"
  },
  {
    "word": "denial",
    "pos": "n.",
    "cn_def": "否認",
    "en_def": "a statement that something is not true",
    "sentence": "His {{BLANK}} of the charges was expected.",
    "cn": "他對指控的否認是預料之中的。"
  },
  {
    "word": "There is no denying that",
    "pos": "phr.",
    "cn_def": "不可否認",
    "en_def": "it is clearly true that",
    "sentence": "{{BLANK}} technology has changed our lives.",
    "cn": "不可否認科技改變了我們的生活。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認",
    "en_def": "to agree, often unwillingly, that something is true",
    "sentence": "After hours of questioning, the suspect finally decided to {{BLANK}} that he had been at the scene of the crime.",
    "cn": "經過數小時的審問，嫌疑人最終決定承認他曾出現在犯罪現場。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "錄取",
    "en_def": "to allow someone to enter a place or join a school",
    "sentence": "The prestigious university will only {{BLANK}} a small percentage of applicants each year to maintain its high academic standards.",
    "cn": "這所名牌大學每年僅錄取極少數比例的申請者，以維持其高水準的學術要求。"
  },
  {
    "word": "been admitted to",
    "pos": "phr.",
    "cn_def": "被錄取 / 獲准進入",
    "en_def": "to be accepted as a student at a school or allowed to enter a place",
    "sentence": "She was overjoyed to find out that she had {{BLANK}} her first-choice medical school after a rigorous interview process.",
    "cn": "在經過嚴格的面試過程後，她欣喜若狂地發現自己被第一志願的醫學院錄取了。"
  },
  {
    "word": "admissions",
    "pos": "n.",
    "cn_def": "入學許可 / 入學人數",
    "en_def": "the process of accepting students into a school; the number of people accepted",
    "sentence": "The university's {{BLANK}} office is responsible for reviewing thousands of personal statements and recommendation letters annually.",
    "cn": "該大學的招生辦公室負責每年審查數千份的個人陳述與推薦信。"
  },
  {
    "word": "admission",
    "pos": "n.",
    "cn_def": "承認 / 入場費",
    "en_def": "a statement that something bad is true; the money paid to enter a place",
    "sentence": "His sudden {{BLANK}} of guilt surprised everyone in the courtroom, as he had previously claimed total innocence.",
    "cn": "他突然承認有罪讓法庭上的每個人都感到驚訝，因為他之前聲稱完全清白。"
  },
  {
    "word": "dare to",
    "pos": "phr.",
    "cn_def": "敢於做某事",
    "en_def": "to be brave enough to do something",
    "sentence": "Few people {{BLANK}} challenge the established norms.",
    "cn": "很少有人敢於挑戰既定的規範。"
  }
];

const MCQS = [
  {
    "q": "The Great Wall of China is a ______ of engineering.",
    "options": [
      "admissions",
      "admission",
      "wonder",
      "grain"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "I often ______ about the mysteries of the universe.",
    "options": [
      "wonder",
      "admit",
      "vary",
      "theorize"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "I ______ why the eggs are in short supply.",
    "options": [
      "admit",
      "deny",
      "theorize",
      "wonder"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The ______ climate is characterized by high humidity.",
    "options": [
      "mixed",
      "tropical",
      "varied",
      "temperate"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "This region has a ______ environment, suitable for diverse flora.",
    "options": [
      "theoretical",
      "available",
      "subtropical",
      "various"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The ______ zone experiences four distinct seasons.",
    "options": [
      "temperate",
      "subtropical",
      "various",
      "available"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "People ______ prefer stability over uncertainty.",
    "options": [
      "originates from",
      "source out",
      "There is no denying that",
      "tend to"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "There is a ______ for younger generations to embrace technology.",
    "options": [
      "range",
      "tendency",
      "source",
      "grain"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "I ______ travel to Europe next summer.",
    "options": [
      "focus on",
      "been admitted to",
      "intend to",
      "ranging from clothing to"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "His ______ behind the decision was unclear.",
    "options": [
      "source",
      "intension",
      "admission",
      "theory"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Einstein's ______ of relativity revolutionized physics.",
    "options": [
      "range",
      "wonder",
      "admissions",
      "theory"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Scientists often ______ to explain natural phenomena.",
    "options": [
      "theorize",
      "deny",
      "admit",
      "wonder"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The ______ aspects of this study are challenging.",
    "options": [
      "various",
      "subtropical",
      "available",
      "theoretical"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "After a long run, he was covered in ______.",
    "options": [
      "grain",
      "source",
      "sweat",
      "beside"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "It's important to ______ the task at hand.",
    "options": [
      "intend to",
      "focus on",
      "source out",
      "dare to"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The cost of living can ______ significantly from one city to another, depending on local taxes and housing demands.",
    "options": [
      "vary",
      "wonder",
      "theorize",
      "deny"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The festival featured ______ cultural performances.",
    "options": [
      "dare to",
      "been admitted to",
      "range from $50 to",
      "a variety of"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "There were ______ opinions on the matter.",
    "options": [
      "subtropical",
      "various",
      "original",
      "mixed"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The exhibition displayed a ______ collection of artworks.",
    "options": [
      "varied",
      "theoretical",
      "available",
      "mixed"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The information is readily ______ online.",
    "options": [
      "theoretical",
      "temperate",
      "available",
      "tropical"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Rice is a staple ______ in many countries.",
    "options": [
      "range",
      "grain",
      "origin",
      "admissions"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The river is the main ______ of water for the region.",
    "options": [
      "denial",
      "tendency",
      "theory",
      "source"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "We need to ______ quality materials for our new product.",
    "options": [
      "There is no denying that",
      "tend to",
      "source out",
      "focus on"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The ______ of the festival dates back to ancient times.",
    "options": [
      "origin",
      "beside",
      "intension",
      "admission"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The painting was restored to its ______ state.",
    "options": [
      "tropical",
      "varied",
      "original",
      "various"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "She is known for her ______ ideas in design.",
    "options": [
      "original",
      "tropical",
      "various",
      "varied"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The cuisine ______ the Mediterranean region.",
    "options": [
      "There is no denying that",
      "intend to",
      "a variety of",
      "originates from"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Prices ______ $200.",
    "options": [
      "source out",
      "range from $50 to",
      "intend to",
      "focus on"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The store offers products ______ electronics.",
    "options": [
      "focus on",
      "originates from",
      "dare to",
      "ranging from clothing to"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The hotel offers a wide ______ of services.",
    "options": [
      "theory",
      "range",
      "denial",
      "admission"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The team is ______ in terms of skills and experience.",
    "options": [
      "mixed",
      "varied",
      "tropical",
      "subtropical"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The recipe calls for a ______ of spices.",
    "options": [
      "tendency",
      "theory",
      "mixture",
      "grain"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "She sat ______ her friend during the concert.",
    "options": [
      "beside",
      "source",
      "sweat",
      "admissions"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "He tried to ______ any involvement in the scandal.",
    "options": [
      "theorize",
      "admit",
      "wonder",
      "deny"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "His ______ of the charges was expected.",
    "options": [
      "intension",
      "beside",
      "denial",
      "theory"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "______ technology has changed our lives.",
    "options": [
      "a variety of",
      "There is no denying that",
      "source out",
      "originates from"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "After hours of questioning, the suspect finally decided to ______ that he had been at the scene of the crime.",
    "options": [
      "theorize",
      "vary",
      "admit",
      "deny"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The prestigious university will only ______ a small percentage of applicants each year to maintain its high academic standards.",
    "options": [
      "admit",
      "deny",
      "theorize",
      "vary"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "She was overjoyed to find out that she had ______ her first-choice medical school after a rigorous interview process.",
    "options": [
      "intend to",
      "There is no denying that",
      "ranging from clothing to",
      "been admitted to"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The university's ______ office is responsible for reviewing thousands of personal statements and recommendation letters annually.",
    "options": [
      "beside",
      "admissions",
      "mixture",
      "source"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "His sudden ______ of guilt surprised everyone in the courtroom, as he had previously claimed total innocence.",
    "options": [
      "grain",
      "denial",
      "admission",
      "source"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "Few people ______ challenge the established norms.",
    "options": [
      "source out",
      "dare to",
      "been admitted to",
      "ranging from clothing to"
    ],
    "answer": 1,
    "vocabIndex": 41
  }
];

const LOOKUP = {
  "wonder": {
    "pos": "n.",
    "en_def": "something that fills you with surprise and admiration",
    "cn_def": "奇蹟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that fills you with surprise and admiration",
        "cn_def": "奇蹟"
      },
      {
        "pos": "v.",
        "en_def": "to feel great surprise and admiration",
        "cn_def": "感到驚奇"
      },
      {
        "pos": "v.",
        "en_def": "to want to know something; to ask yourself a question",
        "cn_def": "想知道"
      }
    ]
  },
  "tropical": {
    "pos": "adj.",
    "en_def": "from or in the hottest parts of the world",
    "cn_def": "熱帶的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "from or in the hottest parts of the world",
        "cn_def": "熱帶的"
      }
    ]
  },
  "subtropical": {
    "pos": "adj.",
    "en_def": "in or from regions next to the tropics, which are warm but not as hot",
    "cn_def": "亞熱帶的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "in or from regions next to the tropics, which are warm but not as hot",
        "cn_def": "亞熱帶的"
      }
    ]
  },
  "temperate": {
    "pos": "adj.",
    "en_def": "(of a climate or region) never very hot or very cold",
    "cn_def": "溫帶的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(of a climate or region) never very hot or very cold",
        "cn_def": "溫帶的"
      }
    ]
  },
  "tend to": {
    "pos": "phr.",
    "en_def": "to be likely to do something or to do it often",
    "cn_def": "傾向於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be likely to do something or to do it often",
        "cn_def": "傾向於"
      }
    ]
  },
  "tendency": {
    "pos": "n.",
    "en_def": "the fact that something usually happens or someone usually behaves in a certain way",
    "cn_def": "傾向",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact that something usually happens or someone usually behaves in a certain way",
        "cn_def": "傾向"
      }
    ]
  },
  "intend to v": {
    "pos": "phr.",
    "en_def": "to plan to do something",
    "cn_def": "打算",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to plan to do something",
        "cn_def": "打算"
      }
    ]
  },
  "intend to": {
    "pos": "phr.",
    "en_def": "to plan to do something",
    "cn_def": "打算",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to plan to do something",
        "cn_def": "打算"
      }
    ]
  },
  "intension": {
    "pos": "n.",
    "en_def": "what you plan or mean to do; a purpose",
    "cn_def": "意圖",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what you plan or mean to do; a purpose",
        "cn_def": "意圖"
      }
    ]
  },
  "theory": {
    "pos": "n.",
    "en_def": "a set of ideas that explains why something happens",
    "cn_def": "理論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of ideas that explains why something happens",
        "cn_def": "理論"
      }
    ]
  },
  "theorize": {
    "pos": "v.",
    "en_def": "to suggest ideas that may explain something",
    "cn_def": "理論化",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest ideas that may explain something",
        "cn_def": "理論化"
      }
    ]
  },
  "theoretical": {
    "pos": "adj.",
    "en_def": "based on ideas rather than on practice or experience",
    "cn_def": "理論上的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "based on ideas rather than on practice or experience",
        "cn_def": "理論上的"
      }
    ]
  },
  "sweat": {
    "pos": "n.",
    "en_def": "the liquid that comes out of your skin when you are hot or nervous",
    "cn_def": "汗",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the liquid that comes out of your skin when you are hot or nervous",
        "cn_def": "汗"
      }
    ]
  },
  "focus on / concentrate on": {
    "pos": "phr.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give all your attention to one thing",
        "cn_def": "專注於"
      }
    ]
  },
  "focus on": {
    "pos": "phr.",
    "en_def": "to give all your attention to one thing",
    "cn_def": "專注於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to give all your attention to one thing",
        "cn_def": "專注於"
      }
    ]
  },
  "vary": {
    "pos": "v.",
    "en_def": "to be different from each other; to change something",
    "cn_def": "(使)不同 / 改變",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be different from each other; to change something",
        "cn_def": "(使)不同 / 改變"
      }
    ]
  },
  "a variety of": {
    "pos": "phr.",
    "en_def": "many different types of something",
    "cn_def": "各種各樣的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "many different types of something",
        "cn_def": "各種各樣的"
      }
    ]
  },
  "various": {
    "pos": "adj.",
    "en_def": "several different",
    "cn_def": "各種不同的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "several different",
        "cn_def": "各種不同的"
      }
    ]
  },
  "varied": {
    "pos": "adj.",
    "en_def": "including many different types or things",
    "cn_def": "多變的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "including many different types or things",
        "cn_def": "多變的"
      }
    ]
  },
  "available": {
    "pos": "adj.",
    "en_def": "able to be used or obtained",
    "cn_def": "可用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be used or obtained",
        "cn_def": "可用的"
      }
    ]
  },
  "grain": {
    "pos": "n.",
    "en_def": "the seeds of crops such as rice, wheat or corn",
    "cn_def": "穀物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the seeds of crops such as rice, wheat or corn",
        "cn_def": "穀物"
      }
    ]
  },
  "source": {
    "pos": "n.",
    "en_def": "the place, person or thing that something comes from",
    "cn_def": "來源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the place, person or thing that something comes from",
        "cn_def": "來源"
      }
    ]
  },
  "source out": {
    "pos": "phr.",
    "en_def": "to look for and find a supplier of something you need",
    "cn_def": "尋找來源",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to look for and find a supplier of something you need",
        "cn_def": "尋找來源"
      }
    ]
  },
  "origin": {
    "pos": "n.",
    "en_def": "the point or place where something begins",
    "cn_def": "起源",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the point or place where something begins",
        "cn_def": "起源"
      }
    ]
  },
  "original": {
    "pos": "adj.",
    "en_def": "existing at the beginning; first, before any changes",
    "cn_def": "原本的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing at the beginning; first, before any changes",
        "cn_def": "原本的"
      },
      {
        "pos": "adj.",
        "en_def": "new and different from anything before; not copied",
        "cn_def": "原創的"
      }
    ]
  },
  "originate from": {
    "pos": "phr.",
    "en_def": "to start in a particular place or from a particular thing",
    "cn_def": "起源於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start in a particular place or from a particular thing",
        "cn_def": "起源於"
      }
    ]
  },
  "originates from": {
    "pos": "phr.",
    "en_def": "to start in a particular place or from a particular thing",
    "cn_def": "起源於",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start in a particular place or from a particular thing",
        "cn_def": "起源於"
      }
    ]
  },
  "range from a to b": {
    "pos": "phr.",
    "en_def": "to include a variety of things between two limits",
    "cn_def": "範圍從A到B",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to include a variety of things between two limits",
        "cn_def": "範圍從A到B"
      }
    ]
  },
  "range from $50 to": {
    "pos": "phr.",
    "en_def": "to include a variety of things between two limits",
    "cn_def": "範圍從A到B",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to include a variety of things between two limits",
        "cn_def": "範圍從A到B"
      }
    ]
  },
  "ranging from clothing to": {
    "pos": "phr.",
    "en_def": "including everything between two stated limits",
    "cn_def": "範圍從…到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "including everything between two stated limits",
        "cn_def": "範圍從…到…"
      }
    ]
  },
  "ranging from": {
    "pos": "phr.",
    "en_def": "including everything between two stated limits",
    "cn_def": "範圍從…到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "including everything between two stated limits",
        "cn_def": "範圍從…到…"
      }
    ]
  },
  "range": {
    "pos": "n.",
    "en_def": "a number of different things of the same general type; the limits between which something changes",
    "cn_def": "範圍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a number of different things of the same general type; the limits between which something changes",
        "cn_def": "範圍"
      }
    ]
  },
  "mixed": {
    "pos": "adj.",
    "en_def": "made of different things or kinds combined together",
    "cn_def": "混合的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made of different things or kinds combined together",
        "cn_def": "混合的"
      }
    ]
  },
  "mixture": {
    "pos": "n.",
    "en_def": "a combination of two or more different things",
    "cn_def": "混合物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a combination of two or more different things",
        "cn_def": "混合物"
      }
    ]
  },
  "beside": {
    "pos": "n.",
    "en_def": "next to or at the side of someone or something",
    "cn_def": "在...旁邊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "next to or at the side of someone or something",
        "cn_def": "在...旁邊"
      }
    ]
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say that something is not true",
        "cn_def": "否認"
      }
    ]
  },
  "denial": {
    "pos": "n.",
    "en_def": "a statement that something is not true",
    "cn_def": "否認",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement that something is not true",
        "cn_def": "否認"
      }
    ]
  },
  "there is no denying that": {
    "pos": "phr.",
    "en_def": "it is clearly true that",
    "cn_def": "不可否認",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "it is clearly true that",
        "cn_def": "不可否認"
      }
    ]
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree, often unwillingly, that something is true",
    "cn_def": "承認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to agree, often unwillingly, that something is true",
        "cn_def": "承認"
      },
      {
        "pos": "v.",
        "en_def": "to allow someone to enter a place or join a school",
        "cn_def": "錄取"
      }
    ]
  },
  "be admitted to": {
    "pos": "phr.",
    "en_def": "to be accepted as a student at a school or allowed to enter a place",
    "cn_def": "被錄取 / 獲准進入",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be accepted as a student at a school or allowed to enter a place",
        "cn_def": "被錄取 / 獲准進入"
      }
    ]
  },
  "been admitted to": {
    "pos": "phr.",
    "en_def": "to be accepted as a student at a school or allowed to enter a place",
    "cn_def": "被錄取 / 獲准進入",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be accepted as a student at a school or allowed to enter a place",
        "cn_def": "被錄取 / 獲准進入"
      }
    ]
  },
  "admissions": {
    "pos": "n.",
    "en_def": "the process of accepting students into a school; the number of people accepted",
    "cn_def": "入學許可 / 入學人數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of accepting students into a school; the number of people accepted",
        "cn_def": "入學許可 / 入學人數"
      }
    ]
  },
  "admission": {
    "pos": "n.",
    "en_def": "a statement that something bad is true; the money paid to enter a place",
    "cn_def": "承認 / 入場費",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement that something bad is true; the money paid to enter a place",
        "cn_def": "承認 / 入場費"
      }
    ]
  },
  "dare to": {
    "pos": "phr.",
    "en_def": "to be brave enough to do something",
    "cn_def": "敢於做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be brave enough to do something",
        "cn_def": "敢於做某事"
      }
    ]
  },
  "dare to v": {
    "pos": "phr.",
    "en_def": "to be brave enough to do something",
    "cn_def": "敢於做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be brave enough to do something",
        "cn_def": "敢於做某事"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
