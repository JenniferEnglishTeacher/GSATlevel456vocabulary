// Lesson 46 Quiz Data: Success, Failure, Peace & Moral Courage
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 46 - Success, Failure, Peace & Moral Courage",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "succeed",
    "pos": "v.",
    "cn_def": "成功；達到目的",
    "en_def": "to achieve a desired aim or result; to follow",
    "sentence": "If you work diligently every day and never give up, you will definitely {{BLANK}} in reaching your career goals.",
    "cn": "如果你每天勤勉工作且永不放棄，你一定會成功實現你的職業目標。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功；成就",
    "en_def": "the accomplishment of an aim; favorable outcome",
    "sentence": "Her new English novel was a tremendous commercial {{BLANK}}, selling over one million copies in just three months.",
    "cn": "她的新英文小說獲得了巨大的商業成功，在短短三個月內就售出了超過一百萬冊。"
  },
  {
    "word": "fail",
    "pos": "v.",
    "cn_def": "失敗；不及格",
    "en_def": "to be unsuccessful in achieving a goal or passing a test",
    "sentence": "Peter didn't study for the driving test, so he was not surprised to {{BLANK}} the examination on his first attempt.",
    "cn": "彼得沒有為駕照考試讀書，所以他在第一次嘗試中沒有通過考試並不感到驚訝。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗；挫折",
    "en_def": "lack of success; an unsuccessful person or thing",
    "sentence": "Wise teachers remind students that {{BLANK}} is the mother of success, teaching us valuable lessons for future attempts.",
    "cn": "有智慧的老師提醒學生失敗是成功之母，為我們未來的嘗試提供了寶貴的教訓。"
  },
  {
    "word": "peace",
    "pos": "n.",
    "cn_def": "和平；平靜；安寧",
    "en_def": "freedom from disturbance; tranquility; state of no war",
    "sentence": "After decades of violent border conflict, both nations finally signed a treaty and achieved lasting {{BLANK}}.",
    "cn": "在經歷了數十年的激烈邊界衝突後，兩國終於簽署了條約並實現了持久和平。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "和平的；安詳寧靜的",
    "en_def": "free from disturbance; calm and quiet; not involving war",
    "sentence": "We rented a wooden cottage beside a {{BLANK}} mountain lake, where we spent relaxing mornings watching the birds.",
    "cn": "我們在一座寧靜的高山湖泊旁租了一間木屋，在那裡我們度過了放鬆的早晨並觀賞鳥類。"
  },
  {
    "word": "courage",
    "pos": "n.",
    "cn_def": "勇氣；膽識",
    "en_def": "the ability to do something that frightens one; bravery",
    "sentence": "It took immense personal {{BLANK}} for the whistleblower to step forward and expose corruption within the firm.",
    "cn": "舉報人鼓起了巨大的個人勇氣挺身而出，揭露了公司內部的腐敗。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵；激勵",
    "en_def": "to give support, confidence, or hope to someone",
    "sentence": "Good parents always {{BLANK}} their children to try new hobbies and express their creative ideas freely.",
    "cn": "優秀的父母總是鼓勵他們的孩子嘗試新的嗜好並自由表達創造性的想法。"
  },
  {
    "word": "hero",
    "pos": "n.",
    "cn_def": "英雄；受景仰的人物",
    "en_def": "a person admired for courage, outstanding achievements, or noble qualities",
    "sentence": "The brave firefighter who entered the burning apartment to rescue the trapped baby was hailed as a local {{BLANK}}.",
    "cn": "進入燃燒公寓營救受困嬰兒的英勇消防員被譽為當地的英雄。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護；守護",
    "en_def": "to keep safe from harm, injury, or damage",
    "sentence": "Wearing a strong safety helmet while riding a motorcycle will effectively {{BLANK}} your head during an unexpected fall.",
    "cn": "騎摩托車時配戴牢固的安全帽，將在發生意外摔倒時有效保護你的頭部。"
  }
];

const MCQS = [
  {
    "q": "With persistent effort and support from her mentors, Linda managed to ______ in launching her own business.",
    "options": [
      "protect",
      "fail",
      "succeed",
      "encourage"
    ],
    "answer": 2,
    "cn": "在導師的持續努力與支持下，琳達成功創立了自己的企業。 【選項解析】(A) succeed 成功  (B) fail 失敗  (C) protect 保護  (D) encourage 鼓勵。succeed in doing sth.（成功做某事）。",
    "vocabIndex": 0
  },
  {
    "q": "The local government built high sea walls along the coast to ______ the low-lying fishing village from storm surges.",
    "options": [
      "protect",
      "fail",
      "succeed",
      "encourage"
    ],
    "answer": 0,
    "cn": "地方政府沿海岸修建了高大的海堤，以保護地勢低窪的漁村免受風暴潮的侵襲。 【選項解析】(A) protect 保護  (B) fail 失敗  (C) succeed 成功  (D) encourage 激勵。protect A from B（保護A免受B危害）。",
    "vocabIndex": 9
  },
  {
    "q": "The high school teacher tried to ______ all his students to ask questions whenever they encountered difficulties.",
    "options": [
      "protect",
      "succeed",
      "fail",
      "encourage"
    ],
    "answer": 3,
    "cn": "高中老師試圖鼓勵他所有的學生在遇到困難時隨時發問。 【選項解析】(A) encourage 鼓勵  (B) succeed 成功  (C) fail 失敗  (D) protect 保護。encourage sb. to do sth.（鼓勵某人做某事）。",
    "vocabIndex": 7
  },
  {
    "q": "Many entrepreneurs consider an initial business ______ not as an end, but rather as an essential stepping stone.",
    "options": [
      "success",
      "failure",
      "peace",
      "courage"
    ],
    "answer": 1,
    "cn": "許多創業家不將最初的商業失敗視為終點，而是將其視為必不可少的跳板墊腳石。 【選項解析】(A) failure 失敗  (B) success 成功  (C) peace 和平  (D) courage 勇氣。商業初期的挫敗為 initial business failure。",
    "vocabIndex": 3
  },
  {
    "q": "The international peacekeeper was awarded the medal of honor and celebrated by millions as a true national ______.",
    "options": [
      "monster",
      "failure",
      "loser",
      "hero"
    ],
    "answer": 3,
    "cn": "這位國際維和人員榮獲榮譽勳章，並被數百萬人慶祝為真正的國家英雄。 【選項解析】(A) hero 英雄  (B) failure 失敗者  (C) loser 輸家  (D) monster 怪物。受到大眾景仰表彰的人為 hero。",
    "vocabIndex": 8
  },
  {
    "q": "After months of tireless practice, the school orchestra's annual charity concert was an extraordinary ______.",
    "options": [
      "failure",
      "success",
      "war",
      "enemy"
    ],
    "answer": 1,
    "cn": "經過數月不懈的排練，學校管弦樂隊的年度慈善音樂會取得了非凡的成功。 【選項解析】(A) success 成功  (B) failure 失敗  (C) war 戰爭  (D) enemy 敵人。活動圓滿成功為 extraordinary success。",
    "vocabIndex": 1
  },
  {
    "q": "If you do not review these vocabulary words regularly before the test, you might easily ______ the quiz.",
    "options": [
      "encourage",
      "succeed",
      "fail",
      "protect"
    ],
    "answer": 2,
    "cn": "如果你在考前不及時規律複習這些單字，你在測驗中可能會很容易不及格。 【選項解析】(A) fail 不及格  (B) succeed 成功  (C) encourage 鼓勵  (D) protect 防護。測驗未能通過為 fail the quiz。",
    "vocabIndex": 2
  },
  {
    "q": "Taking a deep breath and standing up against an arrogant bully requires a tremendous amount of moral ______.",
    "options": [
      "courage",
      "failure",
      "peace",
      "success"
    ],
    "answer": 0,
    "cn": "深吸一口氣並挺身反抗傲慢的霸凌者，需要巨大的道德勇氣。 【選項解析】(A) courage 勇氣  (B) failure 失敗  (C) peace 和平  (D) success 成功。moral courage（道德勇氣）。",
    "vocabIndex": 6
  },
  {
    "q": "The treaty brought decades of stability and economic growth, allowing both nations to live in harmonious ______.",
    "options": [
      "enemy",
      "failure",
      "war",
      "peace"
    ],
    "answer": 3,
    "cn": "這項條約帶來了數十年的穩定與經濟增長，使兩國能夠和睦共處於和平之中。 【選項解析】(A) peace 和平  (B) failure 失敗  (C) war 戰爭  (D) enemy 敵人。live in harmonious peace（生活在和睦平靜中）。",
    "vocabIndex": 4
  },
  {
    "q": "We spent a very relaxing weekend in a ______ mountain valley, far away from noisy traffic and busy city crowds.",
    "options": [
      "unique",
      "lovely",
      "peaceful",
      "greedy"
    ],
    "answer": 2,
    "cn": "我們在遠離嘈雜交通與繁忙市區人群的寧靜山谷中度過了一個非常放鬆的週末。 【選項解析】(A) peaceful 寧靜的  (B) lovely 美好的  (C) unique 獨特的  (D) greedy 貪婪的。寧靜山谷為 peaceful mountain valley。",
    "vocabIndex": 5
  },
  {
    "q": "You must wear heavy leather gloves to ______ your hands while handling sharp metal tools and hot engines.",
    "options": [
      "protect",
      "encourage",
      "succeed",
      "fail"
    ],
    "answer": 0,
    "cn": "在操作鋒利金屬工具和高溫引擎時，你必須戴上厚皮手套來保護雙手。 【選項解析】(A) protect 保護  (B) encourage 鼓勵  (C) succeed 成功  (D) fail 失敗。protect your hands（保護雙手）。",
    "vocabIndex": 9
  },
  {
    "q": "The young scientist had the ______ to challenge traditional theories, which eventually led to groundbreaking discoveries.",
    "options": [
      "failure",
      "courage",
      "peace",
      "success"
    ],
    "answer": 1,
    "cn": "年輕科學家擁有挑戰傳統理論的勇氣，這最終促成了開創性的重大發現。 【選項解析】(A) courage 勇氣  (B) failure 失敗  (C) peace 平靜  (D) success 成功。have the courage to challenge（有勇氣去挑戰）。",
    "vocabIndex": 6
  },
  {
    "q": "Even if your first attempt results in unexpected ______, analyze your mistakes and try again with renewed determination.",
    "options": [
      "hero",
      "success",
      "failure",
      "courage"
    ],
    "answer": 2,
    "cn": "即使你的第一次嘗試帶來意想不到的失敗，分析你的錯誤並重振旗鼓再試一次。 【選項解析】(A) failure 失敗  (B) success 成功  (C) hero 英雄  (D) courage 勇氣。result in unexpected failure（導致意外失敗）。",
    "vocabIndex": 3
  },
  {
    "q": "The coach gathered the exhausted team during halftime to ______ them with inspiring words of advice.",
    "options": [
      "succeed",
      "fail",
      "protect",
      "encourage"
    ],
    "answer": 3,
    "cn": "教練在中場休息時召集疲憊的隊員，用激勵人心的建議話語鼓勵大家。 【選項解析】(A) encourage 鼓勵  (B) fail 失敗  (C) protect 保護  (D) succeed 成功。激勵球員士氣為 encourage them。",
    "vocabIndex": 7
  },
  {
    "q": "Many people dream about achieving professional ______ in their youth, but it requires patience and continuous learning.",
    "options": [
      "failure",
      "success",
      "enemy",
      "war"
    ],
    "answer": 1,
    "cn": "許多人夢想在年輕時取得職業成功，但這需要耐心與持續學習。 【選項解析】(A) success 成功  (B) failure 失敗  (C) enemy 仇敵  (D) war 戰禍。achieve professional success（取得職業成就）。",
    "vocabIndex": 1
  },
  {
    "q": "The doctor cautioned that if the patient refuses to take his prescribed pills, the therapy will completely ______.",
    "options": [
      "fail",
      "succeed",
      "protect",
      "encourage"
    ],
    "answer": 0,
    "cn": "醫生警告說，如果病人拒絕按醫囑服藥，治療將會完全失敗。 【選項解析】(A) fail 失敗  (B) succeed 成功  (C) protect 保護  (D) encourage 鼓勵。therapy will fail（療法將失效失敗）。",
    "vocabIndex": 2
  },
  {
    "q": "Citizens organized a massive candlelight vigil in the central square to pray for world ______ and mutual understanding.",
    "options": [
      "army",
      "failure",
      "war",
      "peace"
    ],
    "answer": 3,
    "cn": "市民在中央廣場舉行了大規模的燭光守夜活動，為世界和平與相互理解祈禱。 【選項解析】(A) peace 和平  (B) failure 失敗  (C) war 戰爭  (D) army 軍隊。pray for world peace（祈禱世界和平）。",
    "vocabIndex": 4
  },
  {
    "q": "Listening to the gentle murmur of the river created a calm and ______ atmosphere in the outdoor campsite.",
    "options": [
      "unique",
      "peaceful",
      "diligent",
      "selfish"
    ],
    "answer": 1,
    "cn": "聆聽河流輕柔的潺潺水聲，在戶外營地營造出一種平靜而祥和的氛圍。 【選項解析】(A) peaceful 寧靜安詳的  (B) unique 獨特的  (C) diligent 勤奮的  (D) selfish 自私的。calm and peaceful atmosphere（平靜安詳的氣氛）。",
    "vocabIndex": 5
  },
  {
    "q": "To ______ in the international market, export companies must maintain the highest standards of product quality.",
    "options": [
      "protect",
      "fail",
      "succeed",
      "encourage"
    ],
    "answer": 2,
    "cn": "為了在國際市場上獲得成功，出口公司必須維持最高的產品品質標準。 【選項解析】(A) succeed 成功  (B) fail 失敗  (C) protect 守護  (D) encourage 勉勵。succeed in the market（在市場上取得成功）。",
    "vocabIndex": 0
  },
  {
    "q": "The pilot who skillfully landed the damaged plane on the river and saved all passengers was praised as a modern ______.",
    "options": [
      "hero",
      "failure",
      "monster",
      "winner"
    ],
    "answer": 0,
    "cn": "巧妙地將受損飛機迫降在河面上並拯救所有乘客的飛行員，被譽為現代英雄。 【選項解析】(A) hero 英雄  (B) failure 失敗者  (C) monster 怪物  (D) winner 贏家。拯救眾人性命者為 modern hero。",
    "vocabIndex": 8
  },
  {
    "q": "Sunglasses with ultraviolet filters help ______ your eyes from severe damage caused by intense sunlight.",
    "options": [
      "fail",
      "encourage",
      "succeed",
      "protect"
    ],
    "answer": 3,
    "cn": "具有紫外線過濾功能的太陽眼鏡有助於保護你的眼睛免受強烈陽光的嚴重傷害。 【選項解析】(A) protect 保護  (B) encourage 激勵  (C) succeed 成功  (D) fail 失敗。protect eyes from damage（保護眼睛免受傷害）。",
    "vocabIndex": 9
  },
  {
    "q": "Facing an audience of five hundred people takes considerable ______, especially when speaking in a foreign language.",
    "options": [
      "peace",
      "failure",
      "courage",
      "success"
    ],
    "answer": 2,
    "cn": "面對五百名觀眾需要相當大的勇氣，尤其是當使用外語演講時。 【選項解析】(A) courage 勇氣  (B) failure 失敗  (C) peace 平和  (D) success 勝利。takes considerable courage（需要莫大的勇氣）。",
    "vocabIndex": 6
  },
  {
    "q": "Despite their hard work and dedication, the experiment ended in total ______ due to a sudden power outage.",
    "options": [
      "failure",
      "success",
      "hero",
      "peace"
    ],
    "answer": 0,
    "cn": "儘管他們付出了辛勤工作與奉獻，由於突然停電，實驗最終以徹底失敗告終。 【選項解析】(A) failure 失敗  (B) success 成功  (C) hero 英雄  (D) peace 和平。ended in total failure（以徹底失敗收場）。",
    "vocabIndex": 3
  },
  {
    "q": "The grandfather always loved to ______ his grandson whenever the boy practiced playing the violin.",
    "options": [
      "fail",
      "encourage",
      "protect",
      "succeed"
    ],
    "answer": 1,
    "cn": "每當小男孩練習拉小提琴時，祖父總是喜歡鼓勵他的孫子。 【選項解析】(A) encourage 鼓勵  (B) fail 失敗  (C) protect 保護  (D) succeed 成功。長輩支持激勵晚輩為 encourage。",
    "vocabIndex": 7
  },
  {
    "q": "Finding inner ______ through quiet meditation can help reduce daily anxiety and improve emotional wellbeing.",
    "options": [
      "enemy",
      "failure",
      "war",
      "peace"
    ],
    "answer": 3,
    "cn": "透過安靜的冥想尋找內心的平靜，有助於減少日常焦慮並增進身心健康。 【選項解析】(A) peace 平靜  (B) failure 失敗  (C) war 戰爭  (D) enemy 仇家。inner peace（內心平靜）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "succeed": {
    "pos": "v.",
    "en_def": "to achieve a desired aim or result; to follow",
    "cn_def": "成功；達到目的",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to achieve a desired aim or result; to follow",
        "cn_def": "成功；達到目的"
      }
    ]
  },
  "success": {
    "pos": "n.",
    "en_def": "the accomplishment of an aim; favorable outcome",
    "cn_def": "成功；成就",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the accomplishment of an aim; favorable outcome",
        "cn_def": "成功；成就"
      }
    ]
  },
  "fail": {
    "pos": "v.",
    "en_def": "to be unsuccessful in achieving a goal or passing a test",
    "cn_def": "失敗；不及格",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be unsuccessful in achieving a goal or passing a test",
        "cn_def": "失敗；不及格"
      }
    ]
  },
  "failure": {
    "pos": "n.",
    "en_def": "lack of success; an unsuccessful person or thing",
    "cn_def": "失敗；挫折",
    "combined": [
      {
        "pos": "n.",
        "en_def": "lack of success; an unsuccessful person or thing",
        "cn_def": "失敗；挫折"
      }
    ]
  },
  "peace": {
    "pos": "n.",
    "en_def": "freedom from disturbance; tranquility; state of no war",
    "cn_def": "和平；平靜；安寧",
    "combined": [
      {
        "pos": "n.",
        "en_def": "freedom from disturbance; tranquility; state of no war",
        "cn_def": "和平；平靜；安寧"
      }
    ]
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "free from disturbance; calm and quiet; not involving war",
    "cn_def": "和平的；安詳寧靜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "free from disturbance; calm and quiet; not involving war",
        "cn_def": "和平的；安詳寧靜的"
      }
    ]
  },
  "courage": {
    "pos": "n.",
    "en_def": "the ability to do something that frightens one; bravery",
    "cn_def": "勇氣；膽識",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to do something that frightens one; bravery",
        "cn_def": "勇氣；膽識"
      }
    ]
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give support, confidence, or hope to someone",
    "cn_def": "鼓勵；激勵",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give support, confidence, or hope to someone",
        "cn_def": "鼓勵；激勵"
      }
    ]
  },
  "hero": {
    "pos": "n.",
    "en_def": "a person admired for courage, outstanding achievements, or noble qualities",
    "cn_def": "英雄；受景仰的人物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person admired for courage, outstanding achievements, or noble qualities",
        "cn_def": "英雄；受景仰的人物"
      }
    ]
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep safe from harm, injury, or damage",
    "cn_def": "保護；守護",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep safe from harm, injury, or damage",
        "cn_def": "保護；守護"
      }
    ]
  },
  "monster": {
    "pos": "",
    "en_def": "",
    "cn_def": "怪物",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "怪物"
      }
    ]
  },
  "loser": {
    "pos": "",
    "en_def": "",
    "cn_def": "輸家",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "輸家"
      }
    ]
  },
  "war": {
    "pos": "",
    "en_def": "",
    "cn_def": "戰爭",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "戰爭"
      }
    ]
  },
  "enemy": {
    "pos": "",
    "en_def": "",
    "cn_def": "敵人",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "敵人"
      }
    ]
  },
  "unique": {
    "pos": "",
    "en_def": "",
    "cn_def": "獨特的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "獨特的"
      }
    ]
  },
  "lovely": {
    "pos": "",
    "en_def": "",
    "cn_def": "美好的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "美好的"
      }
    ]
  },
  "greedy": {
    "pos": "",
    "en_def": "",
    "cn_def": "貪婪的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "貪婪的"
      }
    ]
  },
  "army": {
    "pos": "",
    "en_def": "",
    "cn_def": "軍隊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "軍隊"
      }
    ]
  },
  "diligent": {
    "pos": "",
    "en_def": "",
    "cn_def": "勤奮的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "勤奮的"
      }
    ]
  },
  "selfish": {
    "pos": "",
    "en_def": "",
    "cn_def": "自私的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "自私的"
      }
    ]
  },
  "winner": {
    "pos": "",
    "en_def": "",
    "cn_def": "贏家",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "贏家"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
