// Part 3 Quiz Data: demonstrate = display, explain – exclusive
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 3 Part 3 - demonstrate = display, explain – exclusive",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "展示，解釋",
    "en_def": "to show or explain how something works",
    "sentence": "She used a chart to {{BLANK}} the sales growth.",
    "cn": "她使用圖表來展示銷售增長。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "抗議",
    "en_def": "to protest in public",
    "sentence": "The citizens will {{BLANK}} against the new law.",
    "cn": "公民將抗議新法律。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "抗議活動",
    "en_def": "a public protest",
    "sentence": "The {{BLANK}} was peaceful, with thousands marching in the streets.",
    "cn": "抗議活動是和平的，數千人在街上遊行。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "展示",
    "en_def": "showing how something works",
    "sentence": "His {{BLANK}} of the software's capabilities was very informative.",
    "cn": "他對軟件功能的展示非常有用。"
  },
  {
    "word": "document",
    "pos": "n.",
    "cn_def": "文件",
    "en_def": "an official paper",
    "sentence": "All the relevant {{BLANK}} should be submitted by Friday.",
    "cn": "所有相關文件應在星期五之前提交。"
  },
  {
    "word": "document",
    "pos": "v.",
    "cn_def": "紀錄",
    "en_def": "to write down a record of something",
    "sentence": "It's essential to {{BLANK}} any changes made to the project.",
    "cn": "對項目進行的任何更改進行記錄至關重要。"
  },
  {
    "word": "dominate",
    "pos": "v.",
    "cn_def": "主宰，佔優勢",
    "en_def": "to have power or control over others",
    "sentence": "The company continues to {{BLANK}} in the tech industry.",
    "cn": "該公司繼續在科技行業佔據主導地位。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "佔優勢的",
    "en_def": "most important or powerful",
    "sentence": "The {{BLANK}} theme of the conference was sustainability.",
    "cn": "會議的主要主題是可持續性。"
  },
  {
    "word": "dominating",
    "pos": "adj.",
    "cn_def": "主導的",
    "en_def": "controlling or most powerful",
    "sentence": "The {{BLANK}} force in the market right now is consumer demand.",
    "cn": "市場上現在的主要力量是消費者需求。"
  },
  {
    "word": "male-dominating",
    "pos": "adj.",
    "cn_def": "男性主宰的",
    "en_def": "controlled by men",
    "sentence": "The engineering field has long been considered a {{BLANK}} profession.",
    "cn": "長期以來，工程領域一直被認為是男性主宰的職業。"
  },
  {
    "word": "domination",
    "pos": "n.",
    "cn_def": "主宰",
    "en_def": "power or control over others",
    "sentence": "The team's {{BLANK}} of the league lasted for several years.",
    "cn": "該隊在聯盟的主宰地位持續了好幾年。"
  },
  {
    "word": "emphasize on",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is important",
    "sentence": "The teacher will {{BLANK}} the importance of regular practice.",
    "cn": "老師會強調定期練習的重要性。"
  },
  {
    "word": "emphasis on",
    "pos": "phr.",
    "cn_def": "強調",
    "en_def": "to show that something is important",
    "sentence": "The teacher always puts {{BLANK}} understanding the basics before moving on.",
    "cn": "老師總是強調在繼續之前要先理解基礎知識。"
  },
  {
    "word": "ensure that",
    "pos": "phr.",
    "cn_def": "確保",
    "en_def": "to make sure that something happens",
    "sentence": "Please {{BLANK}} all the devices are turned off after use.",
    "cn": "請確保使用後所有設備都已關閉。"
  },
  {
    "word": "ensure",
    "pos": "phr.",
    "cn_def": "確保",
    "en_def": "to make sure of something",
    "sentence": "This method will {{BLANK}} accuracy in our results.",
    "cn": "這種方法將確保我們結果的準確性。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "保證",
    "en_def": "to tell someone something is true so they don't worry",
    "sentence": "I can {{BLANK}} you that everything will be ready on time.",
    "cn": ""
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "再保證",
    "en_def": "to make someone feel less worried again",
    "sentence": "The captain tried to {{BLANK}} passengers that the turbulence was normal.",
    "cn": "機長試圖再次保證乘客這是正常的亂流。"
  },
  {
    "word": "exclude",
    "pos": "v.",
    "cn_def": "排除",
    "en_def": "to leave out or keep out",
    "sentence": "Please {{BLANK}} any non-relevant information from the report.",
    "cn": "請從報告中排除任何不相關的信息。"
  },
  {
    "word": "excluded",
    "pos": "adj.",
    "cn_def": "被排除的",
    "en_def": "left out",
    "sentence": "The {{BLANK}} participants were given feedback on their performance.",
    "cn": "被排除的參與者收到了關於他們表現的反饋。"
  },
  {
    "word": "exclusive",
    "pos": "adj.",
    "cn_def": "獨家的",
    "en_def": "only for some people; not shared",
    "sentence": "This offer is {{BLANK}} to our premium members.",
    "cn": "此優惠僅限於我們的高級會員。"
  }
];

const MCQS = [
  {
    "q": "She used a chart to ______ the sales growth.",
    "options": [
      "in sequence",
      "core value",
      "the minority group",
      "demonstrate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The citizens will ______ against the new law.",
    "options": [
      "make a comment on",
      "demonstrate",
      "for instance",
      "react with"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The ______ was peaceful, with thousands marching in the streets.",
    "options": [
      "demonstration",
      "under the circumstance",
      "take...into consideration",
      "emphasize on"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "His ______ of the software's capabilities was very informative.",
    "options": [
      "illustrate",
      "in sequence",
      "demonstration",
      "take...into consideration"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "All the relevant ______ should be submitted by Friday.",
    "options": [
      "document",
      "technology",
      "immigration",
      "partnership"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "It's essential to ______ any changes made to the project.",
    "options": [
      "constrain",
      "exclude",
      "shift",
      "document"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The company continues to ______ in the tech industry.",
    "options": [
      "task",
      "consider",
      "dominate",
      "exclude"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The ______ theme of the conference was sustainability.",
    "options": [
      "expired",
      "dominant",
      "sequent",
      "excluded"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The ______ force in the market right now is consumer demand.",
    "options": [
      "inclusive",
      "valid",
      "dominating",
      "initial"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The engineering field has long been considered a ______ profession.",
    "options": [
      "sexual",
      "male-dominating",
      "corresponding",
      "maximum"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The team's ______ of the league lasted for several years.",
    "options": [
      "domination",
      "removal",
      "registration",
      "exclusion"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The teacher will ______ the importance of regular practice.",
    "options": [
      "the minority group",
      "react to",
      "remove from",
      "emphasize on"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The teacher always puts ______ understanding the basics before moving on.",
    "options": [
      "take...into consideration",
      "lay/put emphasis on",
      "demonstration",
      "contribute to"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please ______ all the devices are turned off after use.",
    "options": [
      "ensure that",
      "interact with",
      "in sequence",
      "illustrate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "This method will ______ accuracy in our results.",
    "options": [
      "correspond with",
      "core value",
      "interact with",
      "ensure"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "I can ______ you that everything will be ready on time.",
    "options": [
      "include",
      "coordinate",
      "assure",
      "immigrate"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The captain tried to ______ passengers that the turbulence was normal.",
    "options": [
      "reassure",
      "task",
      "initiate",
      "immigrate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please ______ any non-relevant information from the report.",
    "options": [
      "deduct",
      "coordinate",
      "exclude",
      "dominate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The ______ participants were given feedback on their performance.",
    "options": [
      "reliable",
      "excluded",
      "considerable",
      "inclusive"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "This offer is ______ to our premium members.",
    "options": [
      "proportional",
      "major",
      "specified",
      "exclusive"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "demonstrate = display, explain": {
    "pos": "v.",
    "en_def": "to show or explain how something works",
    "cn_def": "展示，解釋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show or explain how something works",
        "cn_def": "展示，解釋"
      }
    ]
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show or explain how something works",
    "cn_def": "展示，解釋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show or explain how something works",
        "cn_def": "展示，解釋"
      },
      {
        "pos": "v.",
        "en_def": "to protest in public",
        "cn_def": "抗議"
      }
    ]
  },
  "demonstrate = protest": {
    "pos": "v.",
    "en_def": "to protest in public",
    "cn_def": "抗議",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to protest in public",
        "cn_def": "抗議"
      }
    ]
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "a public protest",
    "cn_def": "抗議活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public protest",
        "cn_def": "抗議活動"
      },
      {
        "pos": "n.",
        "en_def": "showing how something works",
        "cn_def": "展示"
      }
    ]
  },
  "demonstration = protest": {
    "pos": "n.",
    "en_def": "a public protest",
    "cn_def": "抗議活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public protest",
        "cn_def": "抗議活動"
      }
    ]
  },
  "demonstration = illustration": {
    "pos": "n.",
    "en_def": "showing how something works",
    "cn_def": "展示",
    "combined": [
      {
        "pos": "n.",
        "en_def": "showing how something works",
        "cn_def": "展示"
      }
    ]
  },
  "document": {
    "pos": "n.",
    "en_def": "an official paper",
    "cn_def": "文件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official paper",
        "cn_def": "文件"
      },
      {
        "pos": "v.",
        "en_def": "to write down a record of something",
        "cn_def": "紀錄"
      }
    ]
  },
  "dominate": {
    "pos": "v.",
    "en_def": "to have power or control over others",
    "cn_def": "主宰，佔優勢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have power or control over others",
        "cn_def": "主宰，佔優勢"
      }
    ]
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "most important or powerful",
    "cn_def": "佔優勢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "most important or powerful",
        "cn_def": "佔優勢的"
      }
    ]
  },
  "dominating": {
    "pos": "adj.",
    "en_def": "controlling or most powerful",
    "cn_def": "主導的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "controlling or most powerful",
        "cn_def": "主導的"
      }
    ]
  },
  "male-dominating": {
    "pos": "adj.",
    "en_def": "controlled by men",
    "cn_def": "男性主宰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "controlled by men",
        "cn_def": "男性主宰的"
      }
    ]
  },
  "domination": {
    "pos": "n.",
    "en_def": "power or control over others",
    "cn_def": "主宰",
    "combined": [
      {
        "pos": "n.",
        "en_def": "power or control over others",
        "cn_def": "主宰"
      }
    ]
  },
  "emphasize on": {
    "pos": "v.",
    "en_def": "to show that something is important",
    "cn_def": "強調",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show that something is important",
        "cn_def": "強調"
      }
    ]
  },
  "lay/put emphasis on": {
    "pos": "phr.",
    "en_def": "to show that something is important",
    "cn_def": "強調",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show that something is important",
        "cn_def": "強調"
      }
    ]
  },
  "emphasis on": {
    "pos": "phr.",
    "en_def": "to show that something is important",
    "cn_def": "強調",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to show that something is important",
        "cn_def": "強調"
      }
    ]
  },
  "ensure that": {
    "pos": "phr.",
    "en_def": "to make sure that something happens",
    "cn_def": "確保",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make sure that something happens",
        "cn_def": "確保"
      }
    ]
  },
  "ensure +n": {
    "pos": "phr.",
    "en_def": "to make sure of something",
    "cn_def": "確保",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make sure of something",
        "cn_def": "確保"
      }
    ]
  },
  "ensure": {
    "pos": "phr.",
    "en_def": "to make sure of something",
    "cn_def": "確保",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make sure of something",
        "cn_def": "確保"
      }
    ]
  },
  "assure": {
    "pos": "v.",
    "en_def": "to tell someone something is true so they don't worry",
    "cn_def": "保證",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tell someone something is true so they don't worry",
        "cn_def": "保證"
      }
    ]
  },
  "reassure": {
    "pos": "v.",
    "en_def": "to make someone feel less worried again",
    "cn_def": "再保證",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel less worried again",
        "cn_def": "再保證"
      }
    ]
  },
  "exclude": {
    "pos": "v.",
    "en_def": "to leave out or keep out",
    "cn_def": "排除",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to leave out or keep out",
        "cn_def": "排除"
      }
    ]
  },
  "excluded": {
    "pos": "adj.",
    "en_def": "left out",
    "cn_def": "被排除的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "left out",
        "cn_def": "被排除的"
      }
    ]
  },
  "exclusive": {
    "pos": "adj.",
    "en_def": "only for some people; not shared",
    "cn_def": "獨家的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "only for some people; not shared",
        "cn_def": "獨家的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
