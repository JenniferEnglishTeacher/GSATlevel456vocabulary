// Topic 9 Subunit 13 Quiz Data: Academic Words 學術單字 6 (compound – leisure)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S13 - Academic Words 學術單字 6 (compound – leisure)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "compound",
    "pos": "n.",
    "cn_def": "化合物",
    "en_def": "a substance made of two or more elements",
    "sentence": "Water is a {{BLANK}} of hydrogen and oxygen, but each of these gases behaves very differently alone.",
    "cn": "水是氫和氧的化合物,但這兩種氣體單獨存在時的性質非常不同。"
  },
  {
    "word": "composition",
    "pos": "n.",
    "cn_def": "成分;組成",
    "en_def": "the parts or substances that something is made of",
    "sentence": "Scientists studied the {{BLANK}} of the metal, and they found that a little carbon made it much stronger.",
    "cn": "科學家研究這種金屬的成分,而他們發現少量的碳讓它堅固許多。"
  },
  {
    "word": "fraction",
    "pos": "n.",
    "cn_def": "一小部分",
    "en_def": "a small part of something",
    "sentence": "The new machine used only a {{BLANK}} of the coal, so the factory saved a lot of money every year.",
    "cn": "新機器只用了一小部分的煤,所以工廠每年省下很多錢。"
  },
  {
    "word": "proof",
    "pos": "n.",
    "cn_def": "證據;證明",
    "en_def": "facts that show something is true",
    "sentence": "The inventor needed {{BLANK}} that he had the idea first, so he showed the court his dated notebooks.",
    "cn": "發明家需要證據證明是他先有這個點子的,所以他向法庭出示了標有日期的筆記本。"
  },
  {
    "word": "counterargument",
    "pos": "n.",
    "cn_def": "反論;反駁論點",
    "en_def": "an argument against another argument",
    "sentence": "Write one {{BLANK}} in your essay, and then explain why you still believe your own view is stronger.",
    "cn": "在你的文章中寫出一個反駁論點,然後解釋為什麼你仍然認為自己的觀點比較有力。"
  },
  {
    "word": "simplicity",
    "pos": "n.",
    "cn_def": "簡單;簡潔",
    "en_def": "the quality of being easy to understand or use",
    "sentence": "The bicycle became popular because of its {{BLANK}}, and almost anyone could learn to ride it in a day.",
    "cn": "腳踏車因為它的簡單而受歡迎,而幾乎任何人都能在一天內學會騎。"
  },
  {
    "word": "covert",
    "pos": "adj.",
    "cn_def": "祕密的;隱蔽的",
    "en_def": "secret or hidden",
    "sentence": "Some companies used {{BLANK}} methods to copy foreign machines, while others paid for the right to use them.",
    "cn": "有些公司用祕密的手段仿造外國機器,而其他公司則付費取得使用權。"
  },
  {
    "word": "noticeable",
    "pos": "adj.",
    "cn_def": "明顯的",
    "en_def": "easy to see or notice",
    "sentence": "There was a {{BLANK}} drop in pollution after the factory closed, and people could see the stars again.",
    "cn": "工廠關閉後污染有了明顯的下降,而人們又能看見星星了。"
  },
  {
    "word": "measurable",
    "pos": "adj.",
    "cn_def": "可衡量的;顯著的",
    "en_def": "large enough to be measured",
    "sentence": "Street lights led to a {{BLANK}} fall in crime, so other towns quickly installed them too.",
    "cn": "路燈帶來了可衡量的犯罪率下降,所以其他城鎮也很快裝設了路燈。"
  },
  {
    "word": "restructure",
    "pos": "v.",
    "cn_def": "重組;改組",
    "en_def": "to organise a company or system in a new way",
    "sentence": "The car company had to {{BLANK}} after losing money, and several factories were closed or sold.",
    "cn": "這家汽車公司虧損後不得不重組,而好幾間工廠被關閉或出售。"
  },
  {
    "word": "reorganise",
    "pos": "v.",
    "cn_def": "重新安排;改組",
    "en_def": "to arrange something in a new way",
    "sentence": "Henry Ford decided to {{BLANK}} his factory around a moving line, so each worker did only one simple task.",
    "cn": "亨利·福特決定圍繞著移動生產線重新安排他的工廠,所以每位工人只做一項簡單的工作。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "引進;推出",
    "en_def": "to bring something into use for the first time",
    "sentence": "The city {{BLANK}} electric trams in 1900, and people could travel across town for a few pennies.",
    "cn": "這座城市在1900年引進了電車,而人們只要幾便士就能橫越城鎮。"
  },
  {
    "word": "launch",
    "pos": "v.",
    "cn_def": "推出;發行",
    "en_def": "to start selling a new product",
    "sentence": "The company will {{BLANK}} its new electric bike next month, but the price has not been announced yet.",
    "cn": "這家公司下個月將推出新款電動腳踏車,但價格還沒有公布。"
  },
  {
    "word": "recession",
    "pos": "n.",
    "cn_def": "經濟衰退",
    "en_def": "a period when the economy is doing badly",
    "sentence": "Many factories closed during the {{BLANK}}, and thousands of workers had to look for new jobs.",
    "cn": "許多工廠在經濟衰退期間關閉,而數千名工人必須另找工作。"
  },
  {
    "word": "boom",
    "pos": "n.",
    "cn_def": "繁榮期;熱潮",
    "en_def": "a period of fast economic growth",
    "sentence": "There was a railway {{BLANK}} in the 1840s, and thousands of people invested their savings in new lines.",
    "cn": "1840年代出現了一股鐵路熱潮,而成千上萬的人把積蓄投資在新路線上。"
  },
  {
    "word": "slump",
    "pos": "n.",
    "cn_def": "暴跌;不景氣",
    "en_def": "a sudden fall in prices or business",
    "sentence": "After the {{BLANK}} in cotton prices, many mill owners lost everything, and their workers lost their jobs.",
    "cn": "棉花價格暴跌之後,許多工廠主失去了一切,而他們的工人也丟了工作。"
  },
  {
    "word": "downturn",
    "pos": "n.",
    "cn_def": "下滑;衰退",
    "en_def": "a fall in business or economic activity",
    "sentence": "The {{BLANK}} in steel sales hit the town hard, so the council started training people for other work.",
    "cn": "鋼鐵銷售的下滑重創了這個小鎮,所以議會開始培訓人們從事其他工作。"
  },
  {
    "word": "inflation",
    "pos": "n.",
    "cn_def": "通貨膨脹",
    "en_def": "a general rise in prices",
    "sentence": "{{BLANK}} has made food much more expensive this year, so my family buys fewer snacks now.",
    "cn": "通貨膨脹讓今年的食物貴了很多,所以我家現在比較少買零食。"
  },
  {
    "word": "benefactor",
    "pos": "n.",
    "cn_def": "捐助者;恩人",
    "en_def": "a person who gives money to help others",
    "sentence": "A rich {{BLANK}} paid for the town's first public library, and workers could borrow books for free.",
    "cn": "一位富有的捐助者出資興建了小鎮的第一座公共圖書館,而工人們可以免費借書。"
  },
  {
    "word": "philanthropist",
    "pos": "n.",
    "cn_def": "慈善家",
    "en_def": "a rich person who gives money to help people",
    "sentence": "Andrew Carnegie made a fortune from steel, but he became a {{BLANK}} and gave most of it away.",
    "cn": "安德魯·卡內基靠鋼鐵賺了大錢,但他成為一位慈善家並把大部分財富捐了出去。"
  },
  {
    "word": "consumerism",
    "pos": "n.",
    "cn_def": "消費主義",
    "en_def": "the idea that buying lots of goods is good",
    "sentence": "Cheap factory goods led to {{BLANK}}, and today many people buy things they do not really need.",
    "cn": "便宜的工廠商品導致了消費主義,而今天許多人購買並非真正需要的東西。"
  },
  {
    "word": "conglomerate",
    "pos": "n.",
    "cn_def": "企業集團",
    "en_def": "a large company made of many different businesses",
    "sentence": "The {{BLANK}} owns car factories, hotels and a bank, so its decisions affect millions of people.",
    "cn": "這家企業集團擁有汽車工廠、飯店和一家銀行,所以它的決策影響數百萬人。"
  },
  {
    "word": "dividend",
    "pos": "n.",
    "cn_def": "股利;股息",
    "en_def": "a share of a company's profit paid to its owners",
    "sentence": "The railway company paid a large {{BLANK}} every year, so many middle-class families bought its shares.",
    "cn": "鐵路公司每年都發放豐厚的股利,所以許多中產階級家庭買了它的股票。"
  },
  {
    "word": "shareholder",
    "pos": "n.",
    "cn_def": "股東",
    "en_def": "a person who owns part of a company",
    "sentence": "Every {{BLANK}} can vote at the annual meeting, but the biggest owners usually make the decisions.",
    "cn": "每位股東都可以在年度大會上投票,但通常是最大的股東做決定。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇;休閒",
    "en_def": "free time when you are not working",
    "sentence": "Workers had very little {{BLANK}} in the 1800s, but later laws gave them Saturday afternoons off.",
    "cn": "1800年代的工人幾乎沒有閒暇時間,但後來的法律讓他們週六下午可以休息。"
  }
];

const MCQS = [
  {
    "q": "Water is a _____ of hydrogen and oxygen, but each of these gases behaves very differently alone.",
    "options": [
      "observation",
      "telephone",
      "compound",
      "imitation"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Scientists studied the _____ of the metal, and they found that a little carbon made it much stronger.",
    "options": [
      "engineering",
      "composition",
      "viaduct",
      "period"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new machine used only a _____ of the coal, so the factory saved a lot of money every year.",
    "options": [
      "fraction",
      "assistance",
      "statute",
      "wool"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The inventor needed _____ that he had the idea first, so he showed the court his dated notebooks.",
    "options": [
      "rate",
      "barge",
      "canal",
      "proof"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Write one _____ in your essay, and then explain why you still believe your own view is stronger.",
    "options": [
      "automobile",
      "adoption",
      "counterargument",
      "ministry"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The bicycle became popular because of its _____, and almost anyone could learn to ride it in a day.",
    "options": [
      "simplicity",
      "landlord",
      "wealth",
      "engineering"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Some companies used _____ methods to copy foreign machines, while others paid for the right to use them.",
    "options": [
      "molten",
      "scientific",
      "rural",
      "covert"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "There was a _____ drop in pollution after the factory closed, and people could see the stars again.",
    "options": [
      "theoretical",
      "noticeable",
      "inexhaustible",
      "coal-fired"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Street lights led to a _____ fall in crime, so other towns quickly installed them too.",
    "options": [
      "theoretical",
      "positive",
      "cultural",
      "measurable"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The car company had to _____ after losing money, and several factories were closed or sold.",
    "options": [
      "achieve",
      "restructure",
      "consist",
      "mechanise"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Henry Ford decided to _____ his factory around a moving line, so each worker did only one simple task.",
    "options": [
      "select",
      "overheat",
      "reorganise",
      "perfect"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The city _____ electric trams in 1900, and people could travel across town for a few pennies.",
    "options": [
      "introduce",
      "consume",
      "found",
      "rust"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The company will _____ its new electric bike next month, but the price has not been announced yet.",
    "options": [
      "found",
      "overheat",
      "outlaw",
      "launch"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Many factories closed during the _____, and thousands of workers had to look for new jobs.",
    "options": [
      "recession",
      "rivalry",
      "origin",
      "signal"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "There was a railway _____ in the 1840s, and thousands of people invested their savings in new lines.",
    "options": [
      "revolution",
      "boom",
      "ministry",
      "graphite"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "After the _____ in cotton prices, many mill owners lost everything, and their workers lost their jobs.",
    "options": [
      "publication",
      "downside",
      "slump",
      "marketplace"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ in steel sales hit the town hard, so the council started training people for other work.",
    "options": [
      "downturn",
      "towpath",
      "category",
      "turbine"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "_____ has made food much more expensive this year, so my family buys fewer snacks now.",
    "options": [
      "uptake",
      "inflation",
      "crankshaft",
      "tragedy"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "A rich _____ paid for the town's first public library, and workers could borrow books for free.",
    "options": [
      "subordinate",
      "workshop",
      "benefactor",
      "gramophone"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Andrew Carnegie made a fortune from steel, but he became a _____ and gave most of it away.",
    "options": [
      "manufacturer",
      "rivet",
      "superpower",
      "philanthropist"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Cheap factory goods led to _____, and today many people buy things they do not really need.",
    "options": [
      "consumerism",
      "superpower",
      "gizmo",
      "epidemic"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The _____ owns car factories, hotels and a bank, so its decisions affect millions of people.",
    "options": [
      "wagon",
      "demand",
      "uptake",
      "conglomerate"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The railway company paid a large _____ every year, so many middle-class families bought its shares.",
    "options": [
      "wealth",
      "dividend",
      "tyre",
      "industrialisation"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Every _____ can vote at the annual meeting, but the biggest owners usually make the decisions.",
    "options": [
      "landlord",
      "riot",
      "shareholder",
      "girder"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Workers had very little _____ in the 1800s, but later laws gave them Saturday afternoons off.",
    "options": [
      "windmill",
      "revolution",
      "gravity",
      "leisure"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "compound": {
    "pos": "n.",
    "en_def": "a substance made of two or more elements",
    "cn_def": "化合物"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the parts or substances that something is made of",
    "cn_def": "成分;組成"
  },
  "fraction": {
    "pos": "n.",
    "en_def": "a small part of something",
    "cn_def": "一小部分"
  },
  "proof": {
    "pos": "n.",
    "en_def": "facts that show something is true",
    "cn_def": "證據;證明"
  },
  "counterargument": {
    "pos": "n.",
    "en_def": "an argument against another argument",
    "cn_def": "反論;反駁論點"
  },
  "simplicity": {
    "pos": "n.",
    "en_def": "the quality of being easy to understand or use",
    "cn_def": "簡單;簡潔"
  },
  "covert": {
    "pos": "adj.",
    "en_def": "secret or hidden",
    "cn_def": "祕密的;隱蔽的"
  },
  "noticeable": {
    "pos": "adj.",
    "en_def": "easy to see or notice",
    "cn_def": "明顯的"
  },
  "measurable": {
    "pos": "adj.",
    "en_def": "large enough to be measured",
    "cn_def": "可衡量的;顯著的"
  },
  "restructure": {
    "pos": "v.",
    "en_def": "to organise a company or system in a new way",
    "cn_def": "重組;改組"
  },
  "reorganise": {
    "pos": "v.",
    "en_def": "to arrange something in a new way",
    "cn_def": "重新安排;改組"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to bring something into use for the first time",
    "cn_def": "引進;推出"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to start selling a new product",
    "cn_def": "推出;發行"
  },
  "recession": {
    "pos": "n.",
    "en_def": "a period when the economy is doing badly",
    "cn_def": "經濟衰退"
  },
  "boom": {
    "pos": "n.",
    "en_def": "a period of fast economic growth",
    "cn_def": "繁榮期;熱潮"
  },
  "slump": {
    "pos": "n.",
    "en_def": "a sudden fall in prices or business",
    "cn_def": "暴跌;不景氣"
  },
  "downturn": {
    "pos": "n.",
    "en_def": "a fall in business or economic activity",
    "cn_def": "下滑;衰退"
  },
  "inflation": {
    "pos": "n.",
    "en_def": "a general rise in prices",
    "cn_def": "通貨膨脹"
  },
  "benefactor": {
    "pos": "n.",
    "en_def": "a person who gives money to help others",
    "cn_def": "捐助者;恩人"
  },
  "philanthropist": {
    "pos": "n.",
    "en_def": "a rich person who gives money to help people",
    "cn_def": "慈善家"
  },
  "consumerism": {
    "pos": "n.",
    "en_def": "the idea that buying lots of goods is good",
    "cn_def": "消費主義"
  },
  "conglomerate": {
    "pos": "n.",
    "en_def": "a large company made of many different businesses",
    "cn_def": "企業集團"
  },
  "dividend": {
    "pos": "n.",
    "en_def": "a share of a company's profit paid to its owners",
    "cn_def": "股利;股息"
  },
  "shareholder": {
    "pos": "n.",
    "en_def": "a person who owns part of a company",
    "cn_def": "股東"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "閒暇;休閒"
  },
  "observation": {
    "pos": "n.",
    "en_def": "the act of watching something carefully",
    "cn_def": "觀察"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a device for talking to someone far away",
    "cn_def": "電話"
  },
  "imitation": {
    "pos": "n.",
    "en_def": "a copy of something",
    "cn_def": "仿製品;模仿"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "viaduct": {
    "pos": "n.",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "cn_def": "高架橋"
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time in history",
    "cn_def": "時期"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help or support",
    "cn_def": "協助;幫助"
  },
  "statute": {
    "pos": "n.",
    "en_def": "a written law made by a government",
    "cn_def": "法令;法規"
  },
  "wool": {
    "pos": "n.",
    "en_def": "the soft hair of sheep, used to make cloth",
    "cn_def": "羊毛"
  },
  "rate": {
    "pos": "n.",
    "en_def": "the speed or frequency of something",
    "cn_def": "速度;比率"
  },
  "barge": {
    "pos": "n.",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "cn_def": "駁船"
  },
  "canal": {
    "pos": "n.",
    "en_def": "a man-made river for boats",
    "cn_def": "運河"
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車"
  },
  "adoption": {
    "pos": "n.",
    "en_def": "the act of starting to use something new",
    "cn_def": "採用"
  },
  "ministry": {
    "pos": "n.",
    "en_def": "a government department",
    "cn_def": "(政府)部會"
  },
  "landlord": {
    "pos": "n.",
    "en_def": "a person who rents a house or room to others",
    "cn_def": "房東"
  },
  "wealth": {
    "pos": "n.",
    "en_def": "a large amount of money or property",
    "cn_def": "財富"
  },
  "molten": {
    "pos": "adj.",
    "en_def": "melted by very great heat",
    "cn_def": "熔化的"
  },
  "scientific": {
    "pos": "adj.",
    "en_def": "connected with science",
    "cn_def": "科學的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "connected with the countryside",
    "cn_def": "鄉村的;農村的"
  },
  "theoretical": {
    "pos": "adj.",
    "en_def": "based on ideas rather than practice",
    "cn_def": "理論上的"
  },
  "inexhaustible": {
    "pos": "adj.",
    "en_def": "so large that it can never be used up",
    "cn_def": "取之不盡的"
  },
  "coal-fired": {
    "pos": "adj.",
    "en_def": "using coal as the fuel to produce heat or power",
    "cn_def": "燃煤的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good or helpful",
    "cn_def": "正面的;積極的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "connected with the art, ideas and customs of a society",
    "cn_def": "文化的"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing something after effort",
    "cn_def": "達成;實現"
  },
  "consist": {
    "pos": "v.",
    "en_def": "to be made of (with \"of\")",
    "cn_def": "由……組成"
  },
  "mechanise": {
    "pos": "v.",
    "en_def": "to start using machines to do work",
    "cn_def": "使機械化"
  },
  "select": {
    "pos": "v.",
    "en_def": "to choose carefully from a group",
    "cn_def": "挑選;選擇"
  },
  "overheat": {
    "pos": "v.",
    "en_def": "to become too hot",
    "cn_def": "過熱"
  },
  "perfect": {
    "pos": "v.",
    "en_def": "to make something as good as possible",
    "cn_def": "使完美;改進到完善"
  },
  "consume": {
    "pos": "v.",
    "en_def": "to use up fuel, energy or time",
    "cn_def": "消耗;耗費"
  },
  "found": {
    "pos": "v.",
    "en_def": "to start an organisation or company",
    "cn_def": "創立;建立"
  },
  "rust": {
    "pos": "v.",
    "en_def": "to become covered with a reddish layer when iron gets wet",
    "cn_def": "生鏽"
  },
  "outlaw": {
    "pos": "v.",
    "en_def": "to make something illegal",
    "cn_def": "宣布……為非法;禁止"
  },
  "rivalry": {
    "pos": "n.",
    "en_def": "competition between people or groups",
    "cn_def": "競爭;對抗"
  },
  "origin": {
    "pos": "n.",
    "en_def": "the place or point where something begins",
    "cn_def": "起源"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, light or wave that carries information",
    "cn_def": "訊號;信號"
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a huge change in the way people live or work",
    "cn_def": "革命;重大變革"
  },
  "graphite": {
    "pos": "n.",
    "en_def": "a soft black form of carbon used in pencils and sports equipment",
    "cn_def": "石墨"
  },
  "publication": {
    "pos": "n.",
    "en_def": "the act of printing a book or article for the public",
    "cn_def": "出版;刊物"
  },
  "downside": {
    "pos": "n.",
    "en_def": "a disadvantage",
    "cn_def": "缺點;壞處"
  },
  "marketplace": {
    "pos": "n.",
    "en_def": "the world of buying and selling",
    "cn_def": "市場"
  },
  "towpath": {
    "pos": "n.",
    "en_def": "a path beside a canal where horses once pulled boats",
    "cn_def": "(運河邊的)縴道"
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things that share the same features",
    "cn_def": "類別;種類"
  },
  "turbine": {
    "pos": "n.",
    "en_def": "a machine with blades that spin to produce power",
    "cn_def": "渦輪機"
  },
  "uptake": {
    "pos": "n.",
    "en_def": "the rate at which people start using something",
    "cn_def": "採用率;接受程度"
  },
  "crankshaft": {
    "pos": "n.",
    "en_def": "a rod in an engine that turns up-and-down movement into turning",
    "cn_def": "曲軸"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a very sad event, often with death",
    "cn_def": "悲劇;慘劇"
  },
  "subordinate": {
    "pos": "n.",
    "en_def": "a person with a lower position at work",
    "cn_def": "下屬;部屬"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a room or building where things are made or repaired",
    "cn_def": "工作坊;作坊"
  },
  "gramophone": {
    "pos": "n.",
    "en_def": "an old machine that plays music from flat discs",
    "cn_def": "唱機;留聲機"
  },
  "manufacturer": {
    "pos": "n.",
    "en_def": "a company that makes goods in large amounts",
    "cn_def": "製造商"
  },
  "rivet": {
    "pos": "n.",
    "en_def": "a short metal pin used to join metal sheets together",
    "cn_def": "鉚釘"
  },
  "superpower": {
    "pos": "n.",
    "en_def": "an extremely powerful country",
    "cn_def": "超級強國"
  },
  "gizmo": {
    "pos": "n.",
    "en_def": "a small clever device (informal)",
    "cn_def": "小玩意兒;小裝置"
  },
  "epidemic": {
    "pos": "n.",
    "en_def": "a disease that spreads to many people quickly",
    "cn_def": "流行病;疫情"
  },
  "wagon": {
    "pos": "n.",
    "en_def": "a part of a train for carrying goods",
    "cn_def": "貨車車廂"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or wish of people to buy something",
    "cn_def": "需求"
  },
  "tyre": {
    "pos": "n.",
    "en_def": "a rubber ring filled with air around a wheel",
    "cn_def": "輪胎"
  },
  "industrialisation": {
    "pos": "n.",
    "en_def": "the growth of factories and industry in a country",
    "cn_def": "工業化"
  },
  "riot": {
    "pos": "n.",
    "en_def": "a violent protest by a crowd of people",
    "cn_def": "暴動"
  },
  "girder": {
    "pos": "n.",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "cn_def": "大樑;鋼樑"
  },
  "windmill": {
    "pos": "n.",
    "en_def": "a building with sails that the wind turns to make power",
    "cn_def": "風車"
  },
  "gravity": {
    "pos": "n.",
    "en_def": "the force that pulls things towards the earth",
    "cn_def": "重力;地心引力"
  }
};

const EXTRA_GLOSSES = {};
