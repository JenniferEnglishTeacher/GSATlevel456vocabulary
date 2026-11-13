// Unit 8 Quiz Data: efficient – regulate
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U8 - efficient – regulate",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "effective and able to produce good results without wasting time or resources.",
    "sentence": "The new production process is much more {{BLANK}}, allowing us to manufacture products faster and with fewer resources.",
    "cn": "新的生產過程更加有效，使我們能夠更快速地製造產品並使用更少的資源。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the ability to do something well without wasting time or resources.",
    "sentence": "The {{BLANK}} of our customer service department has improved significantly, resulting in shorter response times and happier customers.",
    "cn": "我們的客戶服務部門的效率有了顯著的提高，使反應時間縮短，客戶更加滿意。"
  },
  {
    "word": "objects",
    "pos": "n.",
    "cn_def": "物體",
    "en_def": "a thing that can be seen or touched.",
    "sentence": "The museum features a wide range of historical {{BLANK}}, including ancient artifacts and artworks.",
    "cn": "博物館展示了各種歷史物體，包括古代文物和藝術品。"
  },
  {
    "word": "object to",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with or oppose something.",
    "sentence": "Some employees may {{BLANK}} the new policy, but it was implemented to improve workplace safety.",
    "cn": "一些員工可能會反對新政策，但它是為了提高工作場所的安全性而實施的。"
  },
  {
    "word": "objective",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "a goal or purpose that someone is trying to achieve.",
    "sentence": "The main {{BLANK}} of the project is to reduce energy consumption and minimize environmental impact.",
    "cn": "該項目的主要目標是減少能源消耗並最小化環境影響。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "based on facts rather than feelings or personal opinions.",
    "sentence": "The report provides an {{BLANK}} analysis of the current market conditions, free from personal bias.",
    "cn": "這份報告對當前的市場狀況進行了客觀分析，不帶個人偏見。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延遲",
    "en_def": "a period of waiting or being late.",
    "sentence": "The {{BLANK}} in the delivery of materials has caused a setback in the construction project schedule.",
    "cn": "材料交付的延遲導致了建設項目進度的挫折。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延遲",
    "en_def": "to make something happen later than expected.",
    "sentence": "Bad weather conditions may {{BLANK}} our flight, so please check for updates at the airport.",
    "cn": "惡劣的天氣條件可能會延遲我們的航班，請在機場查看最新信息。"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "cn_def": "嗡嗡聲",
    "en_def": "a low continuous sound, like the sound of many people talking or insects flying.",
    "sentence": "The {{BLANK}} of conversation filled the room as guests mingled and shared stories during the party.",
    "cn": "在派對上，客人們交往並分享故事，嗡嗡聲充滿了整個房間。"
  },
  {
    "word": "buzz",
    "pos": "v.",
    "cn_def": "嗡嗡作響",
    "en_def": "to make a low continuous sound.",
    "sentence": "Bees {{BLANK}} around the flowers, collecting nectar for their hive.",
    "cn": "蜜蜂在花朵周圍嗡嗡作響，收集花蜜回巢。"
  },
  {
    "word": "period",
    "pos": "n.",
    "cn_def": "時期",
    "en_def": "a length of time with a beginning and an end.",
    "sentence": "The Renaissance was a {{BLANK}} of great cultural and artistic achievements in Europe.",
    "cn": "文藝復興時期是歐洲文化和藝術偉大成就的時期。"
  },
  {
    "word": "a period of time",
    "pos": "phr.",
    "cn_def": "一段時間",
    "en_def": "an amount or stretch of time.",
    "sentence": "She spent {{BLANK}} traveling through Asia, exploring diverse cultures and cuisines.",
    "cn": "她花了一段時間在亞洲旅行，探索多元文化和美食。"
  },
  {
    "word": "periodical",
    "pos": "n.",
    "cn_def": "期刊",
    "en_def": "a magazine or journal that is published regularly.",
    "sentence": "He reads a monthly {{BLANK}} to stay updated on the latest scientific research and discoveries.",
    "cn": "他閱讀一份月刊，以便隨時獲取最新的科學研究和發現信息。"
  },
  {
    "word": "extend",
    "pos": "v.",
    "cn_def": "延伸；擴展",
    "en_def": "to make something longer, larger, or wider in area or influence.",
    "sentence": "The company plans to {{BLANK}} its operations to international markets in the coming year.",
    "cn": "公司計劃在未來一年擴展其國際市場業務。"
  },
  {
    "word": "extended",
    "pos": "adj.",
    "cn_def": "延長的",
    "en_def": "made longer in time or space.",
    "sentence": "Due to the {{BLANK}} winter weather, the school decided to extend the holiday break by one week.",
    "cn": "由於漫長的冬季天氣，學校決定將假期延長一週。"
  },
  {
    "word": "extensive",
    "pos": "adj.",
    "cn_def": "廣泛的",
    "en_def": "covering a large area, amount, or range.",
    "sentence": "Her {{BLANK}} knowledge of history allowed her to teach a wide range of historical topics.",
    "cn": "她廣泛的歷史知識使她能夠教授各種歷史主題。"
  },
  {
    "word": "Extensive reading",
    "pos": "n.",
    "cn_def": "泛讀",
    "en_def": "reading a lot of material for general understanding and language growth.",
    "sentence": "{{BLANK}} is an effective way to improve language skills and gain exposure to various writing styles.",
    "cn": "泛讀是提高語言技能並接觸各種寫作風格的有效方式。"
  },
  {
    "word": "extension",
    "pos": "n.",
    "cn_def": "擴展",
    "en_def": "an addition that makes something larger or longer.",
    "sentence": "The company is planning an {{BLANK}} of its product line to include more eco-friendly options.",
    "cn": "公司計劃擴展其產品線，包括更多環保選擇。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改進",
    "en_def": "to make something better.",
    "sentence": "Regular practice can help you {{BLANK}} your skills and become more proficient in any area.",
    "cn": "定期練習可以幫助你改進你的技能，並在任何領域變得更加熟練。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改進；改善",
    "en_def": "a change that makes something better.",
    "sentence": "The recent {{BLANK}} in our manufacturing process has resulted in higher product quality and customer satisfaction.",
    "cn": "我們最近在製造過程中的改進使產品質量提高，客戶滿意度提高。"
  },
  {
    "word": "make improvements",
    "pos": "phr.",
    "cn_def": "作出改進",
    "en_def": "to make changes that improve something.",
    "sentence": "The company is always looking for ways to {{BLANK}} in its products and services.",
    "cn": "公司始終尋找在其產品和服務中作出改進的方法。"
  },
  {
    "word": "system",
    "pos": "n.",
    "cn_def": "系統",
    "en_def": "a set of connected parts that work together.",
    "sentence": "The new operating {{BLANK}} is designed to streamline processes and improve overall efficiency.",
    "cn": "新的操作系統旨在簡化流程並提高整體效率。"
  },
  {
    "word": "the immune system",
    "pos": "phr.",
    "cn_def": "免疫系統",
    "en_def": "the body system that protects against disease and infection.",
    "sentence": "A healthy lifestyle can strengthen {{BLANK}} and help the body fight off infections and illnesses.",
    "cn": "健康的生活方式可以增強免疫系統，幫助身體抵抗感染和疾病。"
  },
  {
    "word": "track",
    "pos": "n.",
    "cn_def": "軌道",
    "en_def": "a path or set of rails that a train or vehicle follows.",
    "sentence": "The train runs on a {{BLANK}} that stretches for hundreds of miles, connecting cities across the country.",
    "cn": "火車行駛在數百英里長的軌道上，連接著全國各地的城市。"
  },
  {
    "word": "track",
    "pos": "v.",
    "cn_def": "追蹤",
    "en_def": "to follow or record the progress or movement of something.",
    "sentence": "It is important to {{BLANK}} your expenses to ensure you stay within your budget each month.",
    "cn": "追蹤你的開支很重要，以確保每個月保持在預算內。"
  },
  {
    "word": "keep track of",
    "pos": "phr.",
    "cn_def": "追蹤；掌握",
    "en_def": "to continue to know or record what is happening to someone or something.",
    "sentence": "You should {{BLANK}} your progress in achieving your fitness goals by recording your workouts and diet.",
    "cn": "你應該通過記錄你的運動和飲食來追蹤實現健身目標的進展。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估",
    "en_def": "to judge or calculate the quality, importance, or value of something.",
    "sentence": "The teacher will {{BLANK}} the students' performance based on their understanding of the subject matter and participation in class.",
    "cn": "老師將根據學生對科目的理解和課堂參與來評估他們的表現。"
  },
  {
    "word": "evaluation",
    "pos": "n.",
    "cn_def": "評估",
    "en_def": "the act of judging the quality, importance, or value of something.",
    "sentence": "The annual {{BLANK}} of employees helps the company identify areas for improvement and recognize outstanding contributions.",
    "cn": "員工的年度評估有助於公司識別改進的領域並表揚優秀的貢獻。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展",
    "en_def": "development or movement toward a better or more complete state.",
    "sentence": "The project has made significant {{BLANK}} in recent months, and we are on track to meet our deadlines.",
    "cn": "該項目在最近幾個月取得了顯著的進展，我們正按計劃完成截止日期。"
  },
  {
    "word": "make progress on",
    "pos": "phr.",
    "cn_def": "在……上取得進展",
    "en_def": "to move forward or improve in work on something.",
    "sentence": "The team continues to {{BLANK}} the development of the new software, aiming for a flawless release.",
    "cn": "團隊繼續在新軟件的開發上取得進展，力爭推出無瑕疵的版本。"
  },
  {
    "word": "regulate",
    "pos": "v.",
    "cn_def": "規定；管制",
    "en_def": "to control something by rules or laws.",
    "sentence": "The government has implemented new policies to {{BLANK}} the use of plastic bags in an effort to reduce environmental impact.",
    "cn": "政府已經實施了新政策，以規定使用塑料袋，以減少對環境的影響。"
  }
];

const MCQS = [
  {
    "q": "The new production process is much more ______, allowing us to manufacture products faster and with fewer resources.",
    "options": [
      "extensive",
      "objective",
      "extended",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The ______ of our customer service department has improved significantly, resulting in shorter response times and happier customers.",
    "options": [
      "objective",
      "evaluation",
      "efficiency",
      "track"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The museum features a wide range of historical ______, including ancient artifacts and artworks.",
    "options": [
      "periodical",
      "objects",
      "extension",
      "progress"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Some employees may ______ the new policy, but it was implemented to improve workplace safety.",
    "options": [
      "object to",
      "regulate",
      "improve",
      "extend"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The main ______ of the project is to reduce energy consumption and minimize environmental impact.",
    "options": [
      "progress",
      "extension",
      "delay",
      "objective"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The report provides an ______ analysis of the current market conditions, free from personal bias.",
    "options": [
      "efficient",
      "objective",
      "extensive",
      "extended"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The ______ in the delivery of materials has caused a setback in the construction project schedule.",
    "options": [
      "delay",
      "efficiency",
      "buzz",
      "periodical"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Bad weather conditions may ______ our flight, so please check for updates at the airport.",
    "options": [
      "extend",
      "evaluate",
      "delay",
      "improve"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The ______ of conversation filled the room as guests mingled and shared stories during the party.",
    "options": [
      "buzz",
      "objective",
      "progress",
      "extension"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Bees ______ around the flowers, collecting nectar for their hive.",
    "options": [
      "track",
      "regulate",
      "buzz",
      "delay"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The Renaissance was a ______ of great cultural and artistic achievements in Europe.",
    "options": [
      "evaluation",
      "period",
      "buzz",
      "Extensive reading"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "She spent ______ traveling through Asia, exploring diverse cultures and cuisines.",
    "options": [
      "make improvements",
      "make progress on",
      "the immune system",
      "a period of time"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "He reads a monthly ______ to stay updated on the latest scientific research and discoveries.",
    "options": [
      "extension",
      "periodical",
      "track",
      "progress"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The company plans to ______ its operations to international markets in the coming year.",
    "options": [
      "delay",
      "improve",
      "evaluate",
      "extend"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Due to the ______ winter weather, the school decided to extend the holiday break by one week.",
    "options": [
      "extensive",
      "objective",
      "extended",
      "efficient"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Her ______ knowledge of history allowed her to teach a wide range of historical topics.",
    "options": [
      "extensive",
      "efficient",
      "extended",
      "objective"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "______ is an effective way to improve language skills and gain exposure to various writing styles.",
    "options": [
      "period",
      "delay",
      "Extensive reading",
      "objective"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The company is planning an ______ of its product line to include more eco-friendly options.",
    "options": [
      "extension",
      "delay",
      "track",
      "Extensive reading"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Regular practice can help you ______ your skills and become more proficient in any area.",
    "options": [
      "object to",
      "improve",
      "evaluate",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The recent ______ in our manufacturing process has resulted in higher product quality and customer satisfaction.",
    "options": [
      "system",
      "periodical",
      "period",
      "improvement"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The company is always looking for ways to ______ in its products and services.",
    "options": [
      "make progress on",
      "a period of time",
      "make improvements",
      "the immune system"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new operating ______ is designed to streamline processes and improve overall efficiency.",
    "options": [
      "system",
      "extension",
      "Extensive reading",
      "objects"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A healthy lifestyle can strengthen ______ and help the body fight off infections and illnesses.",
    "options": [
      "make progress on",
      "the immune system",
      "a period of time",
      "keep track of"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The train runs on a ______ that stretches for hundreds of miles, connecting cities across the country.",
    "options": [
      "periodical",
      "period",
      "improvement",
      "track"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "It is important to ______ your expenses to ensure you stay within your budget each month.",
    "options": [
      "track",
      "improve",
      "extend",
      "object to"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "You should ______ your progress in achieving your fitness goals by recording your workouts and diet.",
    "options": [
      "make improvements",
      "a period of time",
      "make progress on",
      "keep track of"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The teacher will ______ the students' performance based on their understanding of the subject matter and participation in class.",
    "options": [
      "improve",
      "evaluate",
      "buzz",
      "object to"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The annual ______ of employees helps the company identify areas for improvement and recognize outstanding contributions.",
    "options": [
      "period",
      "progress",
      "evaluation",
      "system"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The project has made significant ______ in recent months, and we are on track to meet our deadlines.",
    "options": [
      "extension",
      "progress",
      "efficiency",
      "improvement"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The team continues to ______ the development of the new software, aiming for a flawless release.",
    "options": [
      "make progress on",
      "a period of time",
      "keep track of",
      "make improvements"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The government has implemented new policies to ______ the use of plastic bags in an effort to reduce environmental impact.",
    "options": [
      "delay",
      "track",
      "regulate",
      "buzz"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "efficient": {
    "pos": "adj.",
    "en_def": "effective and able to produce good results without wasting time or resources.",
    "cn_def": "有效的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "effective and able to produce good results without wasting time or resources.",
        "cn_def": "有效的"
      }
    ]
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the ability to do something well without wasting time or resources.",
    "cn_def": "效率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to do something well without wasting time or resources.",
        "cn_def": "效率"
      }
    ]
  },
  "objects": {
    "pos": "n.",
    "en_def": "a thing that can be seen or touched.",
    "cn_def": "物體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that can be seen or touched.",
        "cn_def": "物體"
      }
    ]
  },
  "object": {
    "pos": "n.",
    "en_def": "a thing that can be seen or touched.",
    "cn_def": "物體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that can be seen or touched.",
        "cn_def": "物體"
      }
    ]
  },
  "object to": {
    "pos": "v.",
    "en_def": "to disagree with or oppose something.",
    "cn_def": "反對",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to disagree with or oppose something.",
        "cn_def": "反對"
      }
    ]
  },
  "objective": {
    "pos": "n.",
    "en_def": "a goal or purpose that someone is trying to achieve.",
    "cn_def": "目標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a goal or purpose that someone is trying to achieve.",
        "cn_def": "目標"
      },
      {
        "pos": "adj.",
        "en_def": "based on facts rather than feelings or personal opinions.",
        "cn_def": "客觀的"
      }
    ]
  },
  "delay": {
    "pos": "n.",
    "en_def": "a period of waiting or being late.",
    "cn_def": "延遲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of waiting or being late.",
        "cn_def": "延遲"
      },
      {
        "pos": "v.",
        "en_def": "to make something happen later than expected.",
        "cn_def": "延遲"
      }
    ]
  },
  "buzz": {
    "pos": "n.",
    "en_def": "a low continuous sound, like the sound of many people talking or insects flying.",
    "cn_def": "嗡嗡聲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a low continuous sound, like the sound of many people talking or insects flying.",
        "cn_def": "嗡嗡聲"
      },
      {
        "pos": "v.",
        "en_def": "to make a low continuous sound.",
        "cn_def": "嗡嗡作響"
      }
    ]
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time with a beginning and an end.",
    "cn_def": "時期",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a length of time with a beginning and an end.",
        "cn_def": "時期"
      }
    ]
  },
  "a period of time": {
    "pos": "phr.",
    "en_def": "an amount or stretch of time.",
    "cn_def": "一段時間",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an amount or stretch of time.",
        "cn_def": "一段時間"
      }
    ]
  },
  "periodical": {
    "pos": "n.",
    "en_def": "a magazine or journal that is published regularly.",
    "cn_def": "期刊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a magazine or journal that is published regularly.",
        "cn_def": "期刊"
      }
    ]
  },
  "extend": {
    "pos": "v.",
    "en_def": "to make something longer, larger, or wider in area or influence.",
    "cn_def": "延伸；擴展",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something longer, larger, or wider in area or influence.",
        "cn_def": "延伸；擴展"
      }
    ]
  },
  "extended": {
    "pos": "adj.",
    "en_def": "made longer in time or space.",
    "cn_def": "延長的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made longer in time or space.",
        "cn_def": "延長的"
      }
    ]
  },
  "extensive": {
    "pos": "adj.",
    "en_def": "covering a large area, amount, or range.",
    "cn_def": "廣泛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covering a large area, amount, or range.",
        "cn_def": "廣泛的"
      }
    ]
  },
  "extensive reading": {
    "pos": "n.",
    "en_def": "reading a lot of material for general understanding and language growth.",
    "cn_def": "泛讀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "reading a lot of material for general understanding and language growth.",
        "cn_def": "泛讀"
      }
    ]
  },
  "extension": {
    "pos": "n.",
    "en_def": "an addition that makes something larger or longer.",
    "cn_def": "擴展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an addition that makes something larger or longer.",
        "cn_def": "擴展"
      }
    ]
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better.",
    "cn_def": "改進",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something better.",
        "cn_def": "改進"
      }
    ]
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better.",
    "cn_def": "改進；改善",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a change that makes something better.",
        "cn_def": "改進；改善"
      }
    ]
  },
  "make improvements": {
    "pos": "phr.",
    "en_def": "to make changes that improve something.",
    "cn_def": "作出改進",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make changes that improve something.",
        "cn_def": "作出改進"
      }
    ]
  },
  "system": {
    "pos": "n.",
    "en_def": "a set of connected parts that work together.",
    "cn_def": "系統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a set of connected parts that work together.",
        "cn_def": "系統"
      }
    ]
  },
  "the immune system": {
    "pos": "phr.",
    "en_def": "the body system that protects against disease and infection.",
    "cn_def": "免疫系統",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the body system that protects against disease and infection.",
        "cn_def": "免疫系統"
      }
    ]
  },
  "track": {
    "pos": "n.",
    "en_def": "a path or set of rails that a train or vehicle follows.",
    "cn_def": "軌道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a path or set of rails that a train or vehicle follows.",
        "cn_def": "軌道"
      },
      {
        "pos": "v.",
        "en_def": "to follow or record the progress or movement of something.",
        "cn_def": "追蹤"
      }
    ]
  },
  "keep track of": {
    "pos": "phr.",
    "en_def": "to continue to know or record what is happening to someone or something.",
    "cn_def": "追蹤；掌握",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to continue to know or record what is happening to someone or something.",
        "cn_def": "追蹤；掌握"
      }
    ]
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge or calculate the quality, importance, or value of something.",
    "cn_def": "評估",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to judge or calculate the quality, importance, or value of something.",
        "cn_def": "評估"
      }
    ]
  },
  "evaluation": {
    "pos": "n.",
    "en_def": "the act of judging the quality, importance, or value of something.",
    "cn_def": "評估",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of judging the quality, importance, or value of something.",
        "cn_def": "評估"
      }
    ]
  },
  "progress": {
    "pos": "n.",
    "en_def": "development or movement toward a better or more complete state.",
    "cn_def": "進展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "development or movement toward a better or more complete state.",
        "cn_def": "進展"
      }
    ]
  },
  "make progress on": {
    "pos": "phr.",
    "en_def": "to move forward or improve in work on something.",
    "cn_def": "在……上取得進展",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to move forward or improve in work on something.",
        "cn_def": "在……上取得進展"
      }
    ]
  },
  "regulate": {
    "pos": "v.",
    "en_def": "to control something by rules or laws.",
    "cn_def": "規定；管制",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to control something by rules or laws.",
        "cn_def": "規定；管制"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
