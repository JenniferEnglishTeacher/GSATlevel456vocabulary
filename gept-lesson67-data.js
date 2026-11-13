// Lesson 67 Quiz Data: Academic Review, Revision, Decision-Making & Interpersonal Attitudes
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 67 - Academic Review, Revision, Decision-Making & Interpersonal Attitudes",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "review",
    "pos": "v. / n.",
    "cn_def": "複習；審查；評論",
    "en_def": "to examine or study again; a formal assessment",
    "sentence": "The teacher advised students to {{BLANK}} chapter five thoroughly before taking the monthly English examination.",
    "cn": "老師建議學生在參加每月英文測驗之前，徹底複習第五章。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修訂；校訂",
    "en_def": "to alter or edit something to make it better",
    "sentence": "The author spent two weeks to {{BLANK}} her short story, making the ending much more dramatic and touching.",
    "cn": "作者花了兩週時間修改她的小說，使結局更加戲劇化且感人。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改進；提高",
    "en_def": "to make or become better in quality or performance",
    "sentence": "If you practice writing short essays every evening, your English vocabulary and grammatical accuracy will certainly {{BLANK}}.",
    "cn": "如果你每天晚上練習寫短文，你的英文詞彙量與文法準確性肯定會有所提升。"
  },
  {
    "word": "progress",
    "pos": "n. / v.",
    "cn_def": "進步；進展",
    "en_def": "forward movement toward a destination or goal",
    "sentence": "With patient guidance from his violin tutor, the young musician has made remarkable {{BLANK}} this semester.",
    "cn": "在小提琴家教的耐心指導下，這位年輕音樂家本學期取得了顯著的進步。"
  },
  {
    "word": "refuse",
    "pos": "v.",
    "cn_def": "拒絕",
    "en_def": "to indicate that one is not willing to do something",
    "sentence": "Although the salary was very attractive, Mr. Huang had to {{BLANK}} the foreign job offer because his parents were sick.",
    "cn": "儘管薪水非常誘人，黃先生不得不拒絕國外的工作邀請，因為他的雙親生病了。"
  },
  {
    "word": "reject",
    "pos": "v.",
    "cn_def": "駁回；摒棄",
    "en_def": "to dismiss or refuse to agree to a proposal or idea",
    "sentence": "The city planning board voted to {{BLANK}} the controversial highway expansion proposal due to strong environmental concerns.",
    "cn": "由於強烈的環境顧慮，城市規劃委員會投票否決了那項有爭議的公路擴建提案。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受；贊同",
    "en_def": "to consent to receive a thing offered; to agree to",
    "sentence": "After considering all possible alternatives, the research committee decided to {{BLANK}} the professor's innovative proposal.",
    "cn": "在考量了所有可能的替代方案後，研究委員會決定採納教授創新的提案。"
  },
  {
    "word": "doubt",
    "pos": "n. / v.",
    "cn_def": "懷疑；不確定",
    "en_def": "a feeling of uncertainty or lack of conviction",
    "sentence": "Because she has practiced rigorously every day, I have no {{BLANK}} that she will pass the difficult piano certification.",
    "cn": "因為她每天嚴格練習，我毫不懷疑她一定會通過那場難度極高的小提琴認證考試。"
  },
  {
    "word": "trust",
    "pos": "n. / v.",
    "cn_def": "信任；信賴",
    "en_def": "firm belief in the reliability, truth, or ability of someone",
    "sentence": "A lasting friendship must be built on mutual {{BLANK}}, honest communication, and deep shared respect.",
    "cn": "持久的友誼必須建立在相互信任、坦誠溝通和深厚共同尊重的基礎之上。"
  },
  {
    "word": "respect",
    "pos": "n. / v.",
    "cn_def": "尊重；敬重",
    "en_def": "a feeling of deep admiration for someone elicited by their abilities",
    "sentence": "Students should always show sincere {{BLANK}} for their teachers and listen attentively during class discussions.",
    "cn": "學生應始終對老師表示由衷的敬意，並在課堂討論中全神貫注地傾聽。"
  }
];

const MCQS = [
  {
    "q": "You should ______ all your lecture notes tonight, for the midterm history exam will begin tomorrow morning.",
    "options": [
      "review",
      "refuse",
      "reject",
      "doubt"
    ],
    "answer": 0,
    "cn": "你今晚應該複習所有的課堂筆記，因為歷史期中考試將在明天早晨開始。 【選項解析】(A) review 複習  (B) refuse 拒絕  (C) reject 駁回  (D) doubt 懷疑。考前重溫知識用 review。",
    "vocabIndex": 0
  },
  {
    "q": "The editor asked the journalist to ______ the second paragraph to clarify the timeline of the accident.",
    "options": [
      "doubt",
      "trust",
      "refuse",
      "revise"
    ],
    "answer": 3,
    "cn": "編輯請記者修改第二段，以釐清意外事故發生的時間表。 【選項解析】(A) doubt 懷疑  (B) revise 修改  (C) refuse 拒絕  (D) trust 信任。修改文章用 revise。",
    "vocabIndex": 1
  },
  {
    "q": "Regular physical exercise and healthy eating habits will greatly ______ your immune system and overall stamina.",
    "options": [
      "doubt",
      "refuse",
      "improve",
      "reject"
    ],
    "answer": 2,
    "cn": "規律的體能鍛鍊和健康的飲食習慣將極大改善你的免疫系統與整體耐力。 【選項解析】(A) doubt 懷疑  (B) refuse 拒絕  (C) improve 改善  (D) reject 摒棄。增強體質為 improve。",
    "vocabIndex": 2
  },
  {
    "q": "The construction company has made steady ______ on building the new library, and it will open next spring.",
    "options": [
      "review",
      "progress",
      "doubt",
      "trust"
    ],
    "answer": 1,
    "cn": "這家建築公司在建造新圖書館方面取得了穩步進展，新館將於明年春天開放。 【選項解析】(A) review 複習  (B) progress 進展  (C) doubt 懷疑  (D) trust 信任。make steady progress 指「取得穩定進展」。",
    "vocabIndex": 3
  },
  {
    "q": "The honest bank teller chose to ______ the illegal bribe offered by the corrupt businessman.",
    "options": [
      "review",
      "revise",
      "accept",
      "refuse"
    ],
    "answer": 3,
    "cn": "誠實的銀行行員選擇拒絕不良商人所提供的非法賄賂。 【選項解析】(A) review 審查  (B) revise 修訂  (C) accept 接受  (D) refuse 拒絕。不收賄賂為 refuse the bribe。",
    "vocabIndex": 4
  },
  {
    "q": "The editorial board decided to ______ the poorly written article because it contained multiple factual errors.",
    "options": [
      "accept",
      "improve",
      "reject",
      "trust"
    ],
    "answer": 2,
    "cn": "編輯委員會決定退回這篇劣質文章，因為它包含多處事實錯誤。 【選項解析】(A) accept 接受  (B) reject 退件；駁回  (C) improve 改善  (D) trust 信任。退稿用 reject。",
    "vocabIndex": 5
  },
  {
    "q": "The young graduate was thrilled to ______ an internship position at the prestigious international technology firm.",
    "options": [
      "accept",
      "refuse",
      "reject",
      "doubt"
    ],
    "answer": 0,
    "cn": "這位年輕畢業生興奮地接受了著名國際科技公司的實習職位。 【選項解析】(A) reject 駁回  (B) refuse 拒絕  (C) accept 接受  (D) doubt 懷疑。同意就職為 accept an internship。",
    "vocabIndex": 6
  },
  {
    "q": "There is little ______ that renewable clean energy will play a dominant role in our future power supply.",
    "options": [
      "review",
      "doubt",
      "progress",
      "respect"
    ],
    "answer": 1,
    "cn": "毫無疑問，再生清潔能源將在我們未來的電力供應中扮演主導角色。 【選項解析】(A) review 審查  (B) doubt 懷疑  (C) progress 進展  (D) respect 敬重。there is little doubt that 指「毫無疑問」。",
    "vocabIndex": 7
  },
  {
    "q": "In order to lead a successful project team, a manager must earn the ______ and confidence of all members.",
    "options": [
      "trust",
      "doubt",
      "progress",
      "review"
    ],
    "answer": 0,
    "cn": "為了領導成功的專案團隊，經理必須贏得所有成員的信任與信心。 【選項解析】(A) doubt 懷疑  (B) trust 信任  (C) progress 進步  (D) review 審核。贏得信賴為 earn the trust。",
    "vocabIndex": 8
  },
  {
    "q": "We have great ______ for Dr. Wilson because he has dedicated his life to treating underprivileged patients.",
    "options": [
      "doubt",
      "respect",
      "progress",
      "review"
    ],
    "answer": 1,
    "cn": "我們對威爾遜醫生懷有崇高敬意，因為他畢生致力於醫治弱勢病患。 【選項解析】(A) doubt 懷疑  (B) progress 進展  (C) respect 敬重  (D) review 複習。have great respect for 指「對…深感敬佩」。",
    "vocabIndex": 9
  },
  {
    "q": "Our class scheduled a group study session to ______ key mathematics formulas before the final test.",
    "options": [
      "refuse",
      "reject",
      "review",
      "doubt"
    ],
    "answer": 2,
    "cn": "我們班安排了一次小組研習會，以便在期末考前複習重點數學公式。 【選項解析】(A) refuse 拒絕  (B) reject 駁回  (C) doubt 懷疑  (D) review 溫習。考前看公式為 review formulas。",
    "vocabIndex": 0
  },
  {
    "q": "The committee asked the architect to ______ the blueprint to include wider wheelchair access ramps.",
    "options": [
      "reject",
      "doubt",
      "refuse",
      "revise"
    ],
    "answer": 3,
    "cn": "委員會要求建築師修改藍圖，以納入更寬的輪椅無障礙坡道。 【選項解析】(A) revise 修改  (B) doubt 懷疑  (C) refuse 拒絕  (D) reject 否決。改動圖紙為 revise the blueprint。",
    "vocabIndex": 1
  },
  {
    "q": "Taking part in extracurricular club activities can help shy students ______ their public speaking skills.",
    "options": [
      "improve",
      "reject",
      "refuse",
      "doubt"
    ],
    "answer": 0,
    "cn": "參加課外社團活動可以幫助害羞的學生提昇他們的公開演講技巧。 【選項解析】(A) reject 駁回  (B) improve 提昇  (C) refuse 拒絕  (D) doubt 懷疑。增長能力為 improve skills。",
    "vocabIndex": 2
  },
  {
    "q": "The doctor examined the recovering patient and noted that his health had made significant ______ over the week.",
    "options": [
      "review",
      "progress",
      "doubt",
      "respect"
    ],
    "answer": 1,
    "cn": "醫生檢查了康復中的病人，並指出他這一週的健康狀況有了顯著進步。 【選項解析】(A) review 審核  (B) doubt 懷疑  (C) progress 進步  (D) respect 尊重。病情好轉為 made significant progress。",
    "vocabIndex": 3
  },
  {
    "q": "David had to ______ the invitation to the concert because he had already promised to babysit his nephew.",
    "options": [
      "accept",
      "improve",
      "refuse",
      "revise"
    ],
    "answer": 2,
    "cn": "戴維不得不謝絕參加音樂會的邀請，因為他已經答應照顧他的姪子。 【選項解析】(A) accept 接受  (B) refuse 謝絕  (C) improve 改善  (D) revise 修訂。推辭邀約為 refuse the invitation。",
    "vocabIndex": 4
  },
  {
    "q": "The university admissions office will unfortunately ______ applications that arrive after the strict deadline.",
    "options": [
      "improve",
      "accept",
      "revise",
      "reject"
    ],
    "answer": 3,
    "cn": "大學招生辦公室將遺憾地拒絕受理在嚴格截止日期之後寄達的申請件。 【選項解析】(A) reject 拒絕受理  (B) accept 接受  (C) revise 修改  (D) improve 改善。逾期不收為 reject applications。",
    "vocabIndex": 5
  },
  {
    "q": "After careful deliberation, the employee decided to ______ the promotion, even though it required relocating abroad.",
    "options": [
      "refuse",
      "reject",
      "accept",
      "doubt"
    ],
    "answer": 2,
    "cn": "經過深思熟慮，該員工決定接受晉升，即使這需要調動至國外。 【選項解析】(A) refuse 拒絕  (B) reject 駁回  (C) accept 接受  (D) doubt 懷疑。同意升遷為 accept the promotion。",
    "vocabIndex": 6
  },
  {
    "q": "I have serious ______ about whether the old wooden bridge can withstand the weight of loaded logging trucks.",
    "options": [
      "doubts",
      "respect",
      "review",
      "progress"
    ],
    "answer": 0,
    "cn": "我對那座老舊木橋是否能承受滿載伐木卡車的重量存有嚴重的疑慮。 【選項解析】(A) progress 進步  (B) respect 敬重  (C) review 複習  (D) doubts 疑慮。存有懷疑為 have serious doubts。",
    "vocabIndex": 7
  },
  {
    "q": "Once you break someone's ______, it takes months or even years of consistent honesty to rebuild it.",
    "options": [
      "progress",
      "trust",
      "review",
      "doubt"
    ],
    "answer": 1,
    "cn": "一旦你打破了某人的信任，需要長達數月甚至數年持續的誠實才能重建。 【選項解析】(A) progress 進步  (B) trust 信任  (C) review 審核  (D) doubt 懷疑。破壞信賴為 break someone's trust。",
    "vocabIndex": 8
  },
  {
    "q": "Professional athletes should always treat their opponents and game referees with sincere ______.",
    "options": [
      "progress",
      "doubt",
      "review",
      "respect"
    ],
    "answer": 3,
    "cn": "職業運動員應始終以由衷的敬意對待他們的對手和比賽裁判。 【選項解析】(A) respect 尊重  (B) doubt 懷疑  (C) review 複習  (D) progress 進步。體育精神尊重他人為 treat with sincere respect。",
    "vocabIndex": 9
  },
  {
    "q": "At the end of every semester, the principal holds a meeting to ______ the school's academic achievements.",
    "options": [
      "refuse",
      "review",
      "reject",
      "doubt"
    ],
    "answer": 1,
    "cn": "每學期末，校長都會召開會議檢視學校的各項學術成就。 【選項解析】(A) refuse 拒絕  (B) reject 駁回  (C) review 檢討；檢視  (D) doubt 懷疑。回顧成效為 review achievements。",
    "vocabIndex": 0
  },
  {
    "q": "The author was requested to ______ the draft of the textbook according to updated educational standards.",
    "options": [
      "doubt",
      "refuse",
      "revise",
      "reject"
    ],
    "answer": 2,
    "cn": "作者被要求根據最新的教育標準修訂教科書初稿。 【選項解析】(A) doubt 懷疑  (B) revise 修訂  (C) refuse 拒絕  (D) reject 駁回。修訂草稿為 revise the draft。",
    "vocabIndex": 1
  },
  {
    "q": "Investing in public transportation will drastically ______ urban air quality and reduce highway congestion.",
    "options": [
      "improve",
      "doubt",
      "refuse",
      "reject"
    ],
    "answer": 0,
    "cn": "投資大眾運輸將大幅改善都市空氣品質並減少公路壅塞。 【選項解析】(A) doubt 懷疑  (B) improve 改善  (C) refuse 拒絕  (D) reject 否決。提升空氣品質為 improve air quality。",
    "vocabIndex": 2
  },
  {
    "q": "The town council expressed strong ______ regarding the chemical company's safety record near the drinking water reservoir.",
    "options": [
      "progress",
      "review",
      "respect",
      "doubts"
    ],
    "answer": 3,
    "cn": "鎮議會對這家化學公司在飲用水水庫附近的安全記錄表達了強烈疑慮。 【選項解析】(A) progress 進展  (B) review 複習  (C) respect 敬重  (D) doubts 疑慮。express strong doubts 表示「表達強烈疑慮」。",
    "vocabIndex": 7
  },
  {
    "q": "True friends always ______ each other's opinions, even when they disagree on certain political matters.",
    "options": [
      "respect",
      "doubt",
      "refuse",
      "reject"
    ],
    "answer": 0,
    "cn": "真正的朋友總是尊重彼此的觀點，即使他們在某些政治議題上意見相左。 【選項解析】(A) respect 尊重  (B) doubt 懷疑  (C) refuse 拒絕  (D) reject 駁回。尊重觀點為 respect each other's opinions。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "review": {
    "pos": "v. / n.",
    "en_def": "to examine or study again; a formal assessment",
    "cn_def": "複習；審查；評論",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to examine or study again; a formal assessment",
        "cn_def": "複習；審查；評論"
      }
    ]
  },
  "revise": {
    "pos": "v.",
    "en_def": "to alter or edit something to make it better",
    "cn_def": "修訂；校訂",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to alter or edit something to make it better",
        "cn_def": "修訂；校訂"
      }
    ]
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make or become better in quality or performance",
    "cn_def": "改進；提高",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become better in quality or performance",
        "cn_def": "改進；提高"
      }
    ]
  },
  "progress": {
    "pos": "n. / v.",
    "en_def": "forward movement toward a destination or goal",
    "cn_def": "進步；進展",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "forward movement toward a destination or goal",
        "cn_def": "進步；進展"
      }
    ]
  },
  "refuse": {
    "pos": "v.",
    "en_def": "to indicate that one is not willing to do something",
    "cn_def": "拒絕",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to indicate that one is not willing to do something",
        "cn_def": "拒絕"
      }
    ]
  },
  "reject": {
    "pos": "v.",
    "en_def": "to dismiss or refuse to agree to a proposal or idea",
    "cn_def": "駁回；摒棄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to dismiss or refuse to agree to a proposal or idea",
        "cn_def": "駁回；摒棄"
      }
    ]
  },
  "accept": {
    "pos": "v.",
    "en_def": "to consent to receive a thing offered; to agree to",
    "cn_def": "接受；贊同",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to consent to receive a thing offered; to agree to",
        "cn_def": "接受；贊同"
      }
    ]
  },
  "doubt": {
    "pos": "n. / v.",
    "en_def": "a feeling of uncertainty or lack of conviction",
    "cn_def": "懷疑；不確定",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a feeling of uncertainty or lack of conviction",
        "cn_def": "懷疑；不確定"
      }
    ]
  },
  "trust": {
    "pos": "n. / v.",
    "en_def": "firm belief in the reliability, truth, or ability of someone",
    "cn_def": "信任；信賴",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "firm belief in the reliability, truth, or ability of someone",
        "cn_def": "信任；信賴"
      }
    ]
  },
  "respect": {
    "pos": "n. / v.",
    "en_def": "a feeling of deep admiration for someone elicited by their abilities",
    "cn_def": "尊重；敬重",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a feeling of deep admiration for someone elicited by their abilities",
        "cn_def": "尊重；敬重"
      }
    ]
  },
  "doubts": {
    "pos": "",
    "en_def": "",
    "cn_def": "疑慮",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "疑慮"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
