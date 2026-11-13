// Part 1 Quiz Data: accommodate – on behalf of
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 9 Part 1 - accommodate – on behalf of",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "accommodate",
    "pos": "v.",
    "cn_def": "容納",
    "en_def": "to have enough space for people or things",
    "sentence": "The hall can {{BLANK}} up to 300 guests.",
    "cn": "這個大廳可以容納多達300名賓客。"
  },
  {
    "word": "accommodate",
    "pos": "v.",
    "cn_def": "照顧到，考慮",
    "en_def": "to give people what they need",
    "sentence": "We will {{BLANK}} your dietary restrictions during the dinner event.",
    "cn": "我們會在晚宴活動期間考慮您的飲食限制。"
  },
  {
    "word": "accommodation",
    "pos": "n.",
    "cn_def": "住宿",
    "en_def": "a place to stay or live",
    "sentence": "They booked their {{BLANK}} in advance to ensure a place to stay during the trip.",
    "cn": "他們提前預訂了住宿，以確保在旅行期間有地方住。"
  },
  {
    "word": "analogy",
    "pos": "n.",
    "cn_def": "類比",
    "en_def": "a comparison that shows how two things are alike",
    "sentence": "He made an {{BLANK}} between the human heart and a pump to explain its function.",
    "cn": "他通過將人類的心臟和泵進行類比來解釋其功能。"
  },
  {
    "word": "analogous",
    "pos": "adj.",
    "cn_def": "類似的",
    "en_def": "similar in some way",
    "sentence": "The structure of an atom is somewhat {{BLANK}} to that of a solar system.",
    "cn": "原子的結構在某程度上類似於太陽系的結構。"
  },
  {
    "word": "anticipate",
    "pos": "v.",
    "cn_def": "預期",
    "en_def": "to expect something to happen",
    "sentence": "We {{BLANK}} a high turnout for the event given the level of interest.",
    "cn": "鑑於興趣的程度，我們預期此次活動的參與人數會很高。"
  },
  {
    "word": "anticipated",
    "pos": "adj.",
    "cn_def": "預期的",
    "en_def": "expected",
    "sentence": "The {{BLANK}} challenges were well-managed by the team.",
    "cn": "團隊很好地管理了預期的挑戰。"
  },
  {
    "word": "anticipation",
    "pos": "n.",
    "cn_def": "預期",
    "en_def": "the feeling of waiting for something exciting",
    "sentence": "The {{BLANK}} for the new product release is building up.",
    "cn": "新產品發布的預期正在積聚。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "保證",
    "en_def": "to tell someone something is true so they don't worry",
    "sentence": "I can {{BLANK}} you that your concerns will be addressed promptly.",
    "cn": "我可以保證您的疑慮將得到及時解決。"
  },
  {
    "word": "reassure",
    "pos": "v.",
    "cn_def": "再保證",
    "en_def": "to make someone feel less worried again",
    "sentence": "The manager tried to {{BLANK}} the team after a series of losses.",
    "cn": "經理試圖在一系列失敗後再次保證團隊。"
  },
  {
    "word": "reassured",
    "pos": "adj.",
    "cn_def": "放心的",
    "en_def": "feeling less worried",
    "sentence": "She felt {{BLANK}} after talking to the doctor about her symptoms.",
    "cn": "在與醫生談談她的症狀後，她感到放心。"
  },
  {
    "word": "assurance",
    "pos": "n.",
    "cn_def": "保證",
    "en_def": "a promise that something is true or will happen",
    "sentence": "His {{BLANK}} of support gave us the confidence to proceed.",
    "cn": "他對支持的保證給了我們繼續的信心。"
  },
  {
    "word": "ensure",
    "pos": "v.",
    "cn_def": "確保",
    "en_def": "to make sure something happens",
    "sentence": "We need to {{BLANK}} that all attendees have a clear understanding of the agenda.",
    "cn": "我們需要確保所有與會者對議程有清晰的理解。"
  },
  {
    "word": "insure",
    "pos": "v.",
    "cn_def": "保險",
    "en_def": "to buy protection against loss or damage",
    "sentence": "It's wise to {{BLANK}} your property against theft and damage.",
    "cn": "對防盜和損壞保險您的財產是明智的。"
  },
  {
    "word": "insurance",
    "pos": "n.",
    "cn_def": "保險",
    "en_def": "money paid for protection against loss",
    "sentence": "Health {{BLANK}} can provide financial protection against medical expenses.",
    "cn": "健康保險可以提供對醫療費用的財務保護。"
  },
  {
    "word": "attain",
    "pos": "v.",
    "cn_def": "獲得",
    "en_def": "to reach or achieve something",
    "sentence": "With hard work, you can {{BLANK}} your goals.",
    "cn": "通過努力工作，您可以實現您的目標。"
  },
  {
    "word": "attained",
    "pos": "adj.",
    "cn_def": "達到的",
    "en_def": "reached or achieved",
    "sentence": "The {{BLANK}} level of success was beyond our expectations.",
    "cn": "達到的成功水平超出了我們的期望。"
  },
  {
    "word": "attainment",
    "pos": "n.",
    "cn_def": "獲得",
    "en_def": "the act of achieving something",
    "sentence": "His {{BLANK}} in the field of physics is remarkable.",
    "cn": "他在物理領域的成就非常顯著。"
  },
  {
    "word": "behalf",
    "pos": "n.",
    "cn_def": "代表",
    "en_def": "for someone else",
    "sentence": "She spoke on {{BLANK}} of the entire committee.",
    "cn": "她代表整個委員會發言。"
  },
  {
    "word": "on behalf of",
    "pos": "phr.",
    "cn_def": "代表",
    "en_def": "speaking or acting for someone else",
    "sentence": "He accepted the award {{BLANK}} his team.",
    "cn": "他代表他的團隊接受了這個獎項。"
  }
];

const MCQS = [
  {
    "q": "The hall can ______ up to 300 guests.",
    "options": [
      "dedicate to",
      "accommodate",
      "dedication to",
      "devotion to"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "We will ______ your dietary restrictions during the dinner event.",
    "options": [
      "depreciation of currency",
      "be committed to",
      "qualitative research",
      "accommodate"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "They booked their ______ in advance to ensure a place to stay during the trip.",
    "options": [
      "accommodation",
      "erosion",
      "current",
      "media"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "He made an ______ between the human heart and a pump to explain its function.",
    "options": [
      "scene",
      "inheritance",
      "analogy",
      "norms"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The structure of an atom is somewhat ______ to that of a solar system.",
    "options": [
      "compatible",
      "analogous",
      "voluntary",
      "widespread"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "We ______ a high turnout for the event given the level of interest.",
    "options": [
      "revolve",
      "confine",
      "anticipate",
      "unify"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The ______ challenges were well-managed by the team.",
    "options": [
      "erosive",
      "rigid",
      "visual",
      "anticipated"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ for the new product release is building up.",
    "options": [
      "anticipation",
      "maturity",
      "relaxation",
      "manual"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "I can ______ you that your concerns will be addressed promptly.",
    "options": [
      "revolve",
      "unify",
      "assure",
      "devise"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The manager tried to ______ the team after a series of losses.",
    "options": [
      "insure",
      "reassure",
      "ensure",
      "vision"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "She felt ______ after talking to the doctor about her symptoms.",
    "options": [
      "reassured",
      "erosive",
      "coherent",
      "visual"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "His ______ of support gave us the confidence to proceed.",
    "options": [
      "behalf",
      "violation",
      "volunteer",
      "assurance"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "We need to ______ that all attendees have a clear understanding of the agenda.",
    "options": [
      "trigger",
      "ensure",
      "vision",
      "confine"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "It's wise to ______ your property against theft and damage.",
    "options": [
      "insure",
      "erode",
      "vision",
      "visualize"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Health ______ can provide financial protection against medical expenses.",
    "options": [
      "route",
      "controversy",
      "analogy",
      "insurance"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "With hard work, you can ______ your goals.",
    "options": [
      "reassure",
      "violate",
      "attain",
      "unite"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The ______ level of success was beyond our expectations.",
    "options": [
      "visual",
      "attained",
      "suspended",
      "integrated"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "His ______ in the field of physics is remarkable.",
    "options": [
      "attainment",
      "format",
      "suspense",
      "quality"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "She spoke on ______ of the entire committee.",
    "options": [
      "quantity",
      "commencement",
      "behalf",
      "manual"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "He accepted the award ______ his team.",
    "options": [
      "devotion to",
      "quantitative research",
      "dedication to",
      "on behalf of"
    ],
    "answer": 3,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "accommodate": {
    "pos": "v.",
    "en_def": "to have enough space for people or things",
    "cn_def": "容納",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have enough space for people or things",
        "cn_def": "容納"
      },
      {
        "pos": "v.",
        "en_def": "to give people what they need",
        "cn_def": "照顧到，考慮"
      }
    ]
  },
  "accommodation": {
    "pos": "n.",
    "en_def": "a place to stay or live",
    "cn_def": "住宿",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place to stay or live",
        "cn_def": "住宿"
      }
    ]
  },
  "analogy": {
    "pos": "n.",
    "en_def": "a comparison that shows how two things are alike",
    "cn_def": "類比",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a comparison that shows how two things are alike",
        "cn_def": "類比"
      }
    ]
  },
  "analogous": {
    "pos": "adj.",
    "en_def": "similar in some way",
    "cn_def": "類似的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "similar in some way",
        "cn_def": "類似的"
      }
    ]
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something to happen",
    "cn_def": "預期",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to expect something to happen",
        "cn_def": "預期"
      }
    ]
  },
  "anticipated": {
    "pos": "adj.",
    "en_def": "expected",
    "cn_def": "預期的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expected",
        "cn_def": "預期的"
      }
    ]
  },
  "anticipation": {
    "pos": "n.",
    "en_def": "the feeling of waiting for something exciting",
    "cn_def": "預期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the feeling of waiting for something exciting",
        "cn_def": "預期"
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
  "reassured": {
    "pos": "adj.",
    "en_def": "feeling less worried",
    "cn_def": "放心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling less worried",
        "cn_def": "放心的"
      }
    ]
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a promise that something is true or will happen",
    "cn_def": "保證",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a promise that something is true or will happen",
        "cn_def": "保證"
      }
    ]
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make sure something happens",
    "cn_def": "確保",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make sure something happens",
        "cn_def": "確保"
      }
    ]
  },
  "insure": {
    "pos": "v.",
    "en_def": "to buy protection against loss or damage",
    "cn_def": "保險",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to buy protection against loss or damage",
        "cn_def": "保險"
      }
    ]
  },
  "insurance": {
    "pos": "n.",
    "en_def": "money paid for protection against loss",
    "cn_def": "保險",
    "combined": [
      {
        "pos": "n.",
        "en_def": "money paid for protection against loss",
        "cn_def": "保險"
      }
    ]
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach or achieve something",
    "cn_def": "獲得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to reach or achieve something",
        "cn_def": "獲得"
      }
    ]
  },
  "attained": {
    "pos": "adj.",
    "en_def": "reached or achieved",
    "cn_def": "達到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "reached or achieved",
        "cn_def": "達到的"
      }
    ]
  },
  "attainment": {
    "pos": "n.",
    "en_def": "the act of achieving something",
    "cn_def": "獲得",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of achieving something",
        "cn_def": "獲得"
      }
    ]
  },
  "behalf": {
    "pos": "n.",
    "en_def": "for someone else",
    "cn_def": "代表",
    "combined": [
      {
        "pos": "n.",
        "en_def": "for someone else",
        "cn_def": "代表"
      }
    ]
  },
  "on behalf of": {
    "pos": "phr.",
    "en_def": "speaking or acting for someone else",
    "cn_def": "代表",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "speaking or acting for someone else",
        "cn_def": "代表"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
