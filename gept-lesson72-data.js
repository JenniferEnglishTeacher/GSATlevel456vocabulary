// Lesson 72 Quiz Data: Actions, Financial Earnings, Loss & Discovery
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 72 - Actions, Financial Earnings, Loss & Discovery",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "roll",
    "pos": "v. / n.",
    "cn_def": "滾動；捲；麵包捲",
    "en_def": "to move along by turning over and over; a small bread roll",
    "sentence": "The cheerful children ran up the grassy green hill, and then they giggled happily as they began to {{BLANK}} down together.",
    "cn": "活潑的孩子們跑上長滿青草的山丘，然後當他們開始一起往下【滾動】時開心地咯咯笑了起來。"
  },
  {
    "word": "earn",
    "pos": "v.",
    "cn_def": "賺取；賺得；贏得",
    "en_def": "to obtain money in return for labor or services",
    "sentence": "Although Brian is only a university student, he works hard at night to {{BLANK}} enough money for his living expenses.",
    "cn": "雖然布萊恩只是一名大學生，但他晚上努力工作以【賺取】足夠的生活費用。"
  },
  {
    "word": "gain",
    "pos": "v. / n.",
    "cn_def": "獲得；增加；獲利",
    "en_def": "to obtain or acquire something desirable; an increase",
    "sentence": "Working on the international volunteer team helped Linda {{BLANK}} valuable life experience and improved her spoken English significantly.",
    "cn": "在國際志工團隊工作幫助琳達【獲得】了寶貴的人生經驗，並顯著提升了她的英語口說能力。"
  },
  {
    "word": "provide",
    "pos": "v.",
    "cn_def": "提供；供應",
    "en_def": "to make available for use; to supply",
    "sentence": "The local community center decided to {{BLANK}} free warm meals and temporary blankets for homeless people during the cold winter.",
    "cn": "當地社區中心決定在寒冬期間為無家可歸者【提供】免費熱食與臨時保暖毛毯。"
  },
  {
    "word": "offer",
    "pos": "v. / n.",
    "cn_def": "提議；提供；出價",
    "en_def": "to present something for acceptance or refusal; a proposal",
    "sentence": "The tech company was deeply impressed by Kevin's computer skills, so the manager decided to {{BLANK}} him a high-paying job.",
    "cn": "這家科技公司對凱文的電腦技術留下了深刻印象，因此經理決定向他【提供】一份高薪工作。"
  },
  {
    "word": "missing",
    "pos": "adj.",
    "cn_def": "失蹤的；找不到的",
    "en_def": "not present or unable to be found; lost",
    "sentence": "The worried family searched everywhere across the neighborhood, but their {{BLANK}} pet dog was nowhere to be found until morning.",
    "cn": "焦急的家人在社區裡四處尋找，但直到早晨他們那隻【失蹤的】寵物狗依然無影無蹤。"
  },
  {
    "word": "disappear",
    "pos": "v.",
    "cn_def": "消失；不見",
    "en_def": "to cease to be visible; to vanish from sight",
    "sentence": "The huge ship sailed slowly toward the distant horizon, and it finally seemed to {{BLANK}} completely into the thick coastal fog.",
    "cn": "那艘巨大的輪船緩緩駛向遠方的地平線，最後似乎完全【消失】在濃厚的沿海霧氣之中。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現；發掘",
    "en_def": "to find or learn something unexpectedly or in the course of a search",
    "sentence": "Archaeologists traveled deep into the jungle last summer, and they were amazed to {{BLANK}} an ancient stone temple hidden by vines.",
    "cn": "考古學家去年夏天深入叢林，驚訝地【發現】了一座被藤蔓掩蓋的古代石造神廟。"
  },
  {
    "word": "raise",
    "pos": "v. / n.",
    "cn_def": "舉起；提高；加薪",
    "en_def": "to lift or move to a higher position; an increase in salary",
    "sentence": "If any student knows the correct answer to this grammar question, please {{BLANK}} your right hand and speak clearly.",
    "cn": "如果任何學生知道這個文法題目的正確答案，請【舉起】你的右手並清晰發言。"
  },
  {
    "word": "lift",
    "pos": "v. / n.",
    "cn_def": "舉起；抬起；搭便車",
    "en_def": "to raise to a higher position; a ride in a car",
    "sentence": "The wooden carton was packed with heavy science textbooks, so Jonathan asked his brother to help him {{BLANK}} it into the truck.",
    "cn": "木箱裡裝滿了沉重的科學教科書，因此強納森請他弟弟幫忙一起將它【抬起】搬上卡車。"
  }
];

const MCQS = [
  {
    "q": "Although Brian is only a university student, he works hard at night to ______ enough money for his living expenses.",
    "options": [
      "roll",
      "disappear",
      "earn",
      "discover"
    ],
    "answer": 2,
    "cn": "雖然布萊恩只是一名大學生，但他晚上努力工作以賺取足夠的生活費用。 【選項解析】(A) roll 滾動  (B) earn 賺取  (C) disappear 消失  (D) discover 發現。earn money 為「賺錢」。",
    "vocabIndex": 1
  },
  {
    "q": "Working on the volunteer project allowed Samuel to ______ valuable leadership skills and make many wonderful new friends.",
    "options": [
      "lift",
      "roll",
      "disappear",
      "gain"
    ],
    "answer": 3,
    "cn": "參與志工專案讓塞繆爾獲得了寶貴的領導技能，並結識了許多美好的新朋友。 【選項解析】(A) gain 獲得  (B) roll 滾動  (C) disappear 消失  (D) lift 抬起。gain skills 表「獲得技能」。",
    "vocabIndex": 2
  },
  {
    "q": "The humanitarian charity aims to ______ clean drinking water and medical supplies to villages affected by the storm.",
    "options": [
      "disappear",
      "provide",
      "roll",
      "discover"
    ],
    "answer": 1,
    "cn": "這家人道慈善機構旨在為受風暴影響的村莊提供乾淨的飲用水與醫療物資。 【選項解析】(A) disappear 消失  (B) roll 滾動  (C) provide 提供  (D) discover 發現。provide something to/for 指「提供某物給…」。",
    "vocabIndex": 3
  },
  {
    "q": "The IT manager was very satisfied with Susan's interview, so he decided to ______ her a full-time engineering position.",
    "options": [
      "offer",
      "disappear",
      "roll",
      "gain"
    ],
    "answer": 0,
    "cn": "資訊主管對蘇珊的面試非常滿意，因此決定向她提供一份全職工程師工作。 【選項解析】(A) offer 提供  (B) disappear 消失  (C) roll 滾動  (D) gain 獲得。offer a job 指「提供工作」。",
    "vocabIndex": 4
  },
  {
    "q": "The police posted photographs around the downtown train station in order to locate the ______ nine-year-old child.",
    "options": [
      "ancient",
      "heavy",
      "missing",
      "recent"
    ],
    "answer": 2,
    "cn": "警方在市中心火車站周圍張貼照片，以尋找失蹤的九歲孩童。 【選項解析】(A) missing 失蹤的  (B) heavy 沉重的  (C) ancient 古代的  (D) recent 最近的。missing child 表「失蹤兒童」。",
    "vocabIndex": 5
  },
  {
    "q": "As the morning sun climbed above the green mountain peak, the thick white clouds began to ______ rapidly.",
    "options": [
      "disappear",
      "provide",
      "earn",
      "raise"
    ],
    "answer": 0,
    "cn": "當晨陽升上綠色山峰時，濃密的白雲開始迅速消散。 【選項解析】(A) earn 賺取  (B) provide 提供  (C) disappear 消失  (D) raise 舉起。雲霧散去用 disappear。",
    "vocabIndex": 6
  },
  {
    "q": "Scientists were thrilled when they managed to ______ a completely new species of deep-sea fish in the Pacific Ocean.",
    "options": [
      "disappear",
      "discover",
      "roll",
      "earn"
    ],
    "answer": 1,
    "cn": "當科學家們在太平洋成功發現一種全新的深海魚類物種時，感到無比興奮。 【選項解析】(A) discover 發現  (B) disappear 消失  (C) roll 滾動  (D) earn 賺取。discover a new species 指「發現新物種」。",
    "vocabIndex": 7
  },
  {
    "q": "Whenever the school principal asks a question during assembly, students should politely ______ their hands before speaking.",
    "options": [
      "roll",
      "disappear",
      "earn",
      "raise"
    ],
    "answer": 3,
    "cn": "每當校長在集會上提問時，學生發言前應該有禮貌地舉手。 【選項解析】(A) roll 滾動  (B) disappear 消失  (C) earn 賺取  (D) raise 舉起。raise your hand 表「舉手」。",
    "vocabIndex": 8
  },
  {
    "q": "The heavy metal safe was far too heavy for one person to move, so two strong movers had to ______ it together.",
    "options": [
      "disappear",
      "lift",
      "earn",
      "gain"
    ],
    "answer": 1,
    "cn": "沉重的金屬保險箱太重了一個人搬不動，所以兩名強壯的搬運工必須一起將它抬起。 【選項解析】(A) disappear 消失  (B) lift 抬起  (C) earn 賺取  (D) gain 獲得。抬起重物用 lift。",
    "vocabIndex": 9
  },
  {
    "q": "The energetic puppy loved to ______ across the grass in the backyard until its white fur was covered with mud.",
    "options": [
      "disappear",
      "earn",
      "gain",
      "roll"
    ],
    "answer": 3,
    "cn": "充滿活力的幼犬喜歡在後院草地上打滾，直到白色毛皮沾滿了泥巴。 【選項解析】(A) roll 打滾  (B) earn 賺取  (C) gain 獲得  (D) disappear 消失。roll across the grass 指「在草地上打滾」。",
    "vocabIndex": 0
  },
  {
    "q": "Hardworking employees who consistently meet their sales targets hope that the company will ______ their monthly wages soon.",
    "options": [
      "raise",
      "roll",
      "disappear",
      "discover"
    ],
    "answer": 0,
    "cn": "持續達到銷售目標的勤奮員工希望公司能盡快調升他們的每月薪資。 【選項解析】(A) disappear 消失  (B) roll 滾動  (C) raise 提高  (D) discover 發現。raise wages 指「調薪」。",
    "vocabIndex": 8
  },
  {
    "q": "If you miss the final evening bus to the village, my father can easily give you a free ______ in his car.",
    "options": [
      "roll",
      "gain",
      "lift",
      "offer"
    ],
    "answer": 2,
    "cn": "如果你錯過了開往村莊的末班公車，我父親可以順便開車免費載你一程。 【選項解析】(A) roll 滾動  (B) lift 便車  (C) gain 利益  (D) offer 提議。give someone a lift 為「讓某人搭便車」。",
    "vocabIndex": 9
  },
  {
    "q": "Travelers who visit foreign countries often ______ a deeper understanding of diverse cultural customs and international traditions.",
    "options": [
      "lift",
      "disappear",
      "roll",
      "gain"
    ],
    "answer": 3,
    "cn": "造訪外國的旅客往往能對多元文化習俗與國際傳統獲得更深入的了解。 【選項解析】(A) gain 獲得  (B) disappear 消失  (C) roll 滾動  (D) lift 抬起。gain an understanding 表「獲得理解」。",
    "vocabIndex": 2
  },
  {
    "q": "The university website states clearly that the dormitories will ______ free high-speed wireless internet for every resident student.",
    "options": [
      "provide",
      "disappear",
      "roll",
      "earn"
    ],
    "answer": 0,
    "cn": "大學網站明確指出，宿舍將為每位住宿生提供免費的高速無線網路。 【選項解析】(A) disappear 消失  (B) provide 提供  (C) roll 滾動  (D) earn 賺取。provide internet 表「提供網路」。",
    "vocabIndex": 3
  },
  {
    "q": "Mr. Davis received a very attractive job ______ from a rival law firm, but he chose to stay with his current team.",
    "options": [
      "roll",
      "lift",
      "offer",
      "gain"
    ],
    "answer": 2,
    "cn": "戴維斯先生收到了競爭對手律師事務所極具吸引力的工作邀約，但他選擇留在目前的團隊。 【選項解析】(A) roll 麵包捲  (B) lift 電梯  (C) offer 邀約  (D) gain 利益。job offer 指「工作錄取邀約」。",
    "vocabIndex": 4
  },
  {
    "q": "After walking through the busy night market, Emily was horrified to realize that her leather purse was ______.",
    "options": [
      "ancient",
      "missing",
      "recent",
      "heavy"
    ],
    "answer": 1,
    "cn": "逛完繁忙的夜市後，艾莉驚恐地發現她的皮夾不見了。 【選項解析】(A) missing 不見的  (B) ancient 古代的  (C) recent 最近的  (D) heavy 沉重的。purse is missing 表「錢包不見了」。",
    "vocabIndex": 5
  },
  {
    "q": "The magician covered the shiny gold coin with a black cloth, and within seconds, it seemed to ______ into thin air.",
    "options": [
      "provide",
      "earn",
      "disappear",
      "raise"
    ],
    "answer": 2,
    "cn": "魔術師用黑布蓋住閃亮的金幣，幾秒鐘之內它似乎憑空消失了。 【選項解析】(A) disappear 消失  (B) earn 賺取  (C) provide 提供  (D) raise 舉起。disappear into thin air 表「憑空消失」。",
    "vocabIndex": 6
  },
  {
    "q": "While cleaning the dusty attic yesterday afternoon, the grandfather was surprised to ______ his grandfather's old military diary.",
    "options": [
      "earn",
      "discover",
      "disappear",
      "roll"
    ],
    "answer": 1,
    "cn": "昨天下午打掃滿是灰塵的閣樓時，祖父驚喜地發現了他祖父的舊軍事日記。 【選項解析】(A) earn 賺取  (B) discover 發現  (C) disappear 消失  (D) roll 滾動。意外找到古物用 discover。",
    "vocabIndex": 7
  },
  {
    "q": "To pay for his expensive tuition and textbooks, young David had to ______ wages by delivering morning newspapers.",
    "options": [
      "lift",
      "disappear",
      "roll",
      "earn"
    ],
    "answer": 3,
    "cn": "為了支付昂貴的學費與教科書，年輕的大衛必須靠送早報來賺取薪資。 【選項解析】(A) earn 賺取  (B) disappear 消失  (C) roll 滾動  (D) lift 抬起。earn wages 表「賺取工資」。",
    "vocabIndex": 1
  },
  {
    "q": "The tennis coach instructed the young players to bend their knees properly whenever they prepare to ______ the heavy equipment.",
    "options": [
      "lift",
      "roll",
      "earn",
      "disappear"
    ],
    "answer": 0,
    "cn": "網球教練指導年輕球員在準備搬起沉重的設備時要適當彎曲膝蓋以防受傷。 【選項解析】(A) disappear 消失  (B) roll 滾動  (C) earn 賺取  (D) lift 抬起。搬起重物用 lift。",
    "vocabIndex": 9
  },
  {
    "q": "The heavy round basketball began to ______ down the steep driveway, and Tommy chased after it before it reached the street.",
    "options": [
      "disappear",
      "earn",
      "gain",
      "roll"
    ],
    "answer": 3,
    "cn": "沉重圓滾的籃球開始沿著陡峭的車道滾下去，湯米在它滾到馬路前追了上去。 【選項解析】(A) roll 滾動  (B) earn 賺取  (C) gain 獲得  (D) disappear 消失。球類滾動用 roll down。",
    "vocabIndex": 0
  },
  {
    "q": "Public schools must ______ equal learning opportunities and supportive environments for children of all cultural backgrounds.",
    "options": [
      "disappear",
      "roll",
      "provide",
      "earn"
    ],
    "answer": 2,
    "cn": "公立學校必須為各種文化背景的孩子提供平等的學習機會與支持性環境。 【選項解析】(A) disappear 消失  (B) provide 提供  (C) roll 滾動  (D) earn 賺取。provide opportunities 表「提供機會」。",
    "vocabIndex": 3
  },
  {
    "q": "If you want to ______ the respect of your coworkers, you must demonstrate consistent responsibility and honest teamwork.",
    "options": [
      "earn",
      "disappear",
      "roll",
      "lift"
    ],
    "answer": 0,
    "cn": "如果你想贏得同事的尊敬，你必須展現出始終如一的責任感與坦誠的團隊合作。 【選項解析】(A) earn 贏得  (B) disappear 消失  (C) roll 滾動  (D) lift 抬起。earn respect 指「贏得尊敬」。",
    "vocabIndex": 1
  },
  {
    "q": "Due to rising inflation and higher costs of living, the workers organized a peaceful protest to demand a significant pay ______.",
    "options": [
      "roll",
      "raise",
      "disappear",
      "lift"
    ],
    "answer": 1,
    "cn": "由於通膨上升與生活成本提高，工人們發起和平抗議以要求顯著加薪。 【選項解析】(A) roll 滾動  (B) raise 加薪  (C) disappear 消失  (D) lift 便車。pay raise 表「加薪」。",
    "vocabIndex": 8
  },
  {
    "q": "Through years of rigorous scientific practice, the young medical researcher began to ______ international recognition.",
    "options": [
      "roll",
      "disappear",
      "gain",
      "lift"
    ],
    "answer": 2,
    "cn": "經過多年嚴謹的科學實踐，這位年輕的醫學研究員開始贏得國際認可。 【選項解析】(A) gain 獲得  (B) disappear 消失  (C) roll 滾動  (D) lift 抬起。gain recognition 表「獲得認可」。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "roll": {
    "pos": "v. / n.",
    "en_def": "to move along by turning over and over; a small bread roll",
    "cn_def": "滾動；捲；麵包捲",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to move along by turning over and over; a small bread roll",
        "cn_def": "滾動；捲；麵包捲"
      }
    ]
  },
  "earn": {
    "pos": "v.",
    "en_def": "to obtain money in return for labor or services",
    "cn_def": "賺取；賺得；贏得",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to obtain money in return for labor or services",
        "cn_def": "賺取；賺得；贏得"
      }
    ]
  },
  "gain": {
    "pos": "v. / n.",
    "en_def": "to obtain or acquire something desirable; an increase",
    "cn_def": "獲得；增加；獲利",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to obtain or acquire something desirable; an increase",
        "cn_def": "獲得；增加；獲利"
      }
    ]
  },
  "provide": {
    "pos": "v.",
    "en_def": "to make available for use; to supply",
    "cn_def": "提供；供應",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make available for use; to supply",
        "cn_def": "提供；供應"
      }
    ]
  },
  "offer": {
    "pos": "v. / n.",
    "en_def": "to present something for acceptance or refusal; a proposal",
    "cn_def": "提議；提供；出價",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to present something for acceptance or refusal; a proposal",
        "cn_def": "提議；提供；出價"
      }
    ]
  },
  "missing": {
    "pos": "adj.",
    "en_def": "not present or unable to be found; lost",
    "cn_def": "失蹤的；找不到的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not present or unable to be found; lost",
        "cn_def": "失蹤的；找不到的"
      }
    ]
  },
  "disappear": {
    "pos": "v.",
    "en_def": "to cease to be visible; to vanish from sight",
    "cn_def": "消失；不見",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cease to be visible; to vanish from sight",
        "cn_def": "消失；不見"
      }
    ]
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find or learn something unexpectedly or in the course of a search",
    "cn_def": "發現；發掘",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find or learn something unexpectedly or in the course of a search",
        "cn_def": "發現；發掘"
      }
    ]
  },
  "raise": {
    "pos": "v. / n.",
    "en_def": "to lift or move to a higher position; an increase in salary",
    "cn_def": "舉起；提高；加薪",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to lift or move to a higher position; an increase in salary",
        "cn_def": "舉起；提高；加薪"
      }
    ]
  },
  "lift": {
    "pos": "v. / n.",
    "en_def": "to raise to a higher position; a ride in a car",
    "cn_def": "舉起；抬起；搭便車",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to raise to a higher position; a ride in a car",
        "cn_def": "舉起；抬起；搭便車"
      }
    ]
  },
  "ancient": {
    "pos": "",
    "en_def": "",
    "cn_def": "古代的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "古代的"
      }
    ]
  },
  "heavy": {
    "pos": "",
    "en_def": "",
    "cn_def": "沉重的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "沉重的"
      }
    ]
  },
  "recent": {
    "pos": "",
    "en_def": "",
    "cn_def": "最近的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "最近的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
