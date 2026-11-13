// Part 2 Quiz Data: attachment (email) – cooperative
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 6 Part 2 - attachment (email) – cooperative",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件",
    "en_def": "a file sent with an email",
    "sentence": "Ensure you check the {{BLANK}} for the detailed instructions on the project.",
    "cn": "確保你檢查附件以獲得有關項目的詳細指南。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "感情依戀",
    "en_def": "a feeling of love for someone or something",
    "sentence": "His {{BLANK}} to his childhood home was evident when he decided to buy it and restore it.",
    "cn": "當他決定購買並恢復它時，他對童年家園的感情依戀顯而易見。"
  },
  {
    "word": "author",
    "pos": "n.",
    "cn_def": "作者",
    "en_def": "a person who writes a book",
    "sentence": "The {{BLANK}} of this critically acclaimed novel will be visiting our city next month for a book signing event.",
    "cn": "這本廣受好評的小說的作者將在下個月訪問我們的城市參加簽書會。"
  },
  {
    "word": "authorize",
    "pos": "v.",
    "cn_def": "授權",
    "en_def": "to give official permission",
    "sentence": "The board will {{BLANK}} the new policy once all members agree on the proposed changes.",
    "cn": "一旦所有成員同意建議的更改，董事會將授權新政策。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權威",
    "en_def": "power to control people; an expert",
    "sentence": "The book is considered an {{BLANK}} on the subject, and many scholars refer to it in their work.",
    "cn": "這本書被認為是該主題的權威，許多學者在他們的工作中參考它。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "債券",
    "en_def": "a paper you buy from a government",
    "sentence": "Investing in government {{BLANK}} is seen as a safe option during economic instability.",
    "cn": "在經濟不穩定時，投資政府債券被視為一個安全的選擇。"
  },
  {
    "word": "bond",
    "pos": "v.",
    "cn_def": "結合",
    "en_def": "to form a close relationship",
    "sentence": "The team {{BLANK}} well during the retreat, which helped improve their collaborative efforts.",
    "cn": "在撤退期間，團隊很好地結合在一起，這有助於提高他們的協作努力。"
  },
  {
    "word": "bonding",
    "pos": "n.",
    "cn_def": "結合",
    "en_def": "forming a close relationship",
    "sentence": "The {{BLANK}} experience helped them understand each other better.",
    "cn": "結合的經驗幫助他們更好地理解了彼此。"
  },
  {
    "word": "brief",
    "pos": "v.",
    "cn_def": "簡報",
    "en_def": "to give someone information before a task",
    "sentence": "The officer will {{BLANK}} the team on the new security protocols tomorrow morning.",
    "cn": "該官員將在明天早上向團隊簡報新的安全協議。"
  },
  {
    "word": "brief",
    "pos": "adj.",
    "cn_def": "簡短的",
    "en_def": "short",
    "sentence": "Despite its {{BLANK}} length, the essay conveyed a powerful message.",
    "cn": "儘管篇幅簡短，但論文傳達了一個強有力的信息。"
  },
  {
    "word": "briefing",
    "pos": "n.",
    "cn_def": "簡報會",
    "en_def": "a meeting to give information",
    "sentence": "The morning {{BLANK}} is crucial for understanding the day's agenda.",
    "cn": "早晨的簡報會對於理解當天的議程至關重要。"
  },
  {
    "word": "be capable of",
    "pos": "phr.",
    "cn_def": "有能力的",
    "en_def": "having the ability to do something",
    "sentence": "With the proper training, she will {{BLANK}} handling even the most challenging situations.",
    "cn": "通過適當的培訓，她將能夠處理甚至是最具挑戰性的情況。"
  },
  {
    "word": "capability",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the ability to do something",
    "sentence": "His {{BLANK}} to solve complex problems quickly impressed his supervisors.",
    "cn": "他快速解決複雜問題的能力給他的主管留下了深刻的印象。"
  },
  {
    "word": "cite",
    "pos": "v.",
    "cn_def": "引用",
    "en_def": "to mention words from a book or person",
    "sentence": "Researchers must {{BLANK}} their sources accurately to maintain the integrity of their work.",
    "cn": "研究人員必須準確引用他們的來源，以保持其工作的完整性。"
  },
  {
    "word": "cited",
    "pos": "adj.",
    "cn_def": "被引用的",
    "en_def": "mentioned or quoted",
    "sentence": "The {{BLANK}} studies provide a solid foundation for the argument.",
    "cn": "被引用的研究為論點提供了堅實的基礎。"
  },
  {
    "word": "uncited",
    "pos": "adj.",
    "cn_def": "未引用的",
    "en_def": "not mentioned as a source",
    "sentence": "The paper contained several {{BLANK}} claims, which raised concerns about its credibility.",
    "cn": "論文中包含了幾個未引用的聲明，這引起了人們對其可信度的擔憂。"
  },
  {
    "word": "citation",
    "pos": "n.",
    "cn_def": "引文",
    "en_def": "a mention of a book or writer",
    "sentence": "Each {{BLANK}} should correspond to a reference at the end of the paper.",
    "cn": "每個引文應對應於論文末尾的參考文獻。"
  },
  {
    "word": "cooperate with",
    "pos": "phr.",
    "cn_def": "與...合作",
    "en_def": "to work together with someone",
    "sentence": "To complete the project on time, our team must {{BLANK}} the other departments efficiently.",
    "cn": "為了按時完成項目，我們的團隊必須高效地與其他部門合作。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作",
    "en_def": "working together",
    "sentence": "{{BLANK}} between various stakeholders is crucial for the success of the initiative.",
    "cn": "各利益相關者之間的合作對於該倡議的成功至關重要。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的",
    "en_def": "willing to work together",
    "sentence": "The {{BLANK}} attitude of all team members contributed to the project's success.",
    "cn": "所有團隊成員的合作態度促成了項目的成功。"
  }
];

const MCQS = [
  {
    "q": "Ensure you check the ______ for the detailed instructions on the project.",
    "options": [
      "incidence",
      "edition",
      "trace",
      "attachment"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "His ______ to his childhood home was evident when he decided to buy it and restore it.",
    "options": [
      "lecture",
      "attachment",
      "trace",
      "acknowledgement"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of this critically acclaimed novel will be visiting our city next month for a book signing event.",
    "options": [
      "revelation",
      "allocation",
      "author",
      "instruction"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The board will ______ the new policy once all members agree on the proposed changes.",
    "options": [
      "authorize",
      "exceed",
      "lecture",
      "precede"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The book is considered an ______ on the subject, and many scholars refer to it in their work.",
    "options": [
      "input",
      "incentive",
      "authority",
      "transport"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Investing in government ______ is seen as a safe option during economic instability.",
    "options": [
      "author",
      "bond",
      "scope",
      "flexibility"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The team ______ well during the retreat, which helped improve their collaborative efforts.",
    "options": [
      "bond",
      "allocate",
      "exceed",
      "lecture"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The ______ experience helped them understand each other better.",
    "options": [
      "transformation",
      "attachment",
      "edition",
      "bonding"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The officer will ______ the team on the new security protocols tomorrow morning.",
    "options": [
      "brief",
      "presume",
      "trace",
      "cite"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Despite its ______ length, the essay conveyed a powerful message.",
    "options": [
      "inaccurate",
      "federal",
      "brief",
      "explicit"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The morning ______ is crucial for understanding the day's agenda.",
    "options": [
      "initiative",
      "briefing",
      "input",
      "discrimination"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "With the proper training, she will ______ handling even the most challenging situations.",
    "options": [
      "racial discrimination",
      "abstract of a thesis",
      "attach ...to",
      "be capable of"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "His ______ to solve complex problems quickly impressed his supervisors.",
    "options": [
      "authority",
      "capability",
      "author",
      "immigrant"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Researchers must ______ their sources accurately to maintain the integrity of their work.",
    "options": [
      "instruct",
      "recover",
      "cite",
      "bond"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ studies provide a solid foundation for the argument.",
    "options": [
      "cited",
      "minimum",
      "flexible",
      "oversea"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The paper contained several ______ claims, which raised concerns about its credibility.",
    "options": [
      "initial",
      "brief",
      "accurate",
      "uncited"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Each ______ should correspond to a reference at the end of the paper.",
    "options": [
      "citation",
      "discrimination",
      "bonding",
      "migration"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "To complete the project on time, our team must ______ the other departments efficiently.",
    "options": [
      "abstract of a thesis",
      "cooperate with",
      "be attached to",
      "attach ...to"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "______ between various stakeholders is crucial for the success of the initiative.",
    "options": [
      "incorporation",
      "expert",
      "estate",
      "cooperation"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The ______ attitude of all team members contributed to the project's success.",
    "options": [
      "uncited",
      "revealed",
      "cooperative",
      "excessive"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "attachment": {
    "pos": "n.",
    "en_def": "a file sent with an email",
    "cn_def": "附件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a file sent with an email",
        "cn_def": "附件"
      },
      {
        "pos": "n.",
        "en_def": "a feeling of love for someone or something",
        "cn_def": "感情依戀"
      }
    ]
  },
  "attachment (email)": {
    "pos": "n.",
    "en_def": "a file sent with an email",
    "cn_def": "附件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a file sent with an email",
        "cn_def": "附件"
      }
    ]
  },
  "attachment (feeling)": {
    "pos": "n.",
    "en_def": "a feeling of love for someone or something",
    "cn_def": "感情依戀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of love for someone or something",
        "cn_def": "感情依戀"
      }
    ]
  },
  "author": {
    "pos": "n.",
    "en_def": "a person who writes a book",
    "cn_def": "作者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who writes a book",
        "cn_def": "作者"
      }
    ]
  },
  "authorize": {
    "pos": "v.",
    "en_def": "to give official permission",
    "cn_def": "授權",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give official permission",
        "cn_def": "授權"
      }
    ]
  },
  "authority": {
    "pos": "n.",
    "en_def": "power to control people; an expert",
    "cn_def": "權威",
    "combined": [
      {
        "pos": "n.",
        "en_def": "power to control people; an expert",
        "cn_def": "權威"
      }
    ]
  },
  "bond": {
    "pos": "n.",
    "en_def": "a paper you buy from a government",
    "cn_def": "債券",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a paper you buy from a government",
        "cn_def": "債券"
      },
      {
        "pos": "v.",
        "en_def": "to form a close relationship",
        "cn_def": "結合"
      }
    ]
  },
  "bonding": {
    "pos": "n.",
    "en_def": "forming a close relationship",
    "cn_def": "結合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "forming a close relationship",
        "cn_def": "結合"
      }
    ]
  },
  "brief": {
    "pos": "v.",
    "en_def": "to give someone information before a task",
    "cn_def": "簡報",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone information before a task",
        "cn_def": "簡報"
      },
      {
        "pos": "adj.",
        "en_def": "short",
        "cn_def": "簡短的"
      }
    ]
  },
  "briefing": {
    "pos": "n.",
    "en_def": "a meeting to give information",
    "cn_def": "簡報會",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a meeting to give information",
        "cn_def": "簡報會"
      }
    ]
  },
  "be capable of": {
    "pos": "phr.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "having the ability to do something",
        "cn_def": "有能力的"
      }
    ]
  },
  "capability": {
    "pos": "n.",
    "en_def": "the ability to do something",
    "cn_def": "能力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to do something",
        "cn_def": "能力"
      }
    ]
  },
  "cite": {
    "pos": "v.",
    "en_def": "to mention words from a book or person",
    "cn_def": "引用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to mention words from a book or person",
        "cn_def": "引用"
      }
    ]
  },
  "cited": {
    "pos": "adj.",
    "en_def": "mentioned or quoted",
    "cn_def": "被引用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "mentioned or quoted",
        "cn_def": "被引用的"
      }
    ]
  },
  "uncited": {
    "pos": "adj.",
    "en_def": "not mentioned as a source",
    "cn_def": "未引用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not mentioned as a source",
        "cn_def": "未引用的"
      }
    ]
  },
  "citation": {
    "pos": "n.",
    "en_def": "a mention of a book or writer",
    "cn_def": "引文",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a mention of a book or writer",
        "cn_def": "引文"
      }
    ]
  },
  "cooperate with": {
    "pos": "phr.",
    "en_def": "to work together with someone",
    "cn_def": "與...合作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to work together with someone",
        "cn_def": "與...合作"
      }
    ]
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "working together",
    "cn_def": "合作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "working together",
        "cn_def": "合作"
      }
    ]
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to work together",
    "cn_def": "合作的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "willing to work together",
        "cn_def": "合作的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
