// Part 2 Quiz Data: gasoline – lemonade
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 21-2 - gasoline – lemonade",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gasoline",
    "pos": "n.",
    "cn_def": "汽油 (縮寫為 gas)",
    "en_def": "a refined petroleum liquid used as fuel for motor vehicles",
    "sentence": "Drivers should fill the tank with {{BLANK}} before embarking on a long journey across the desert.",
    "cn": "在橫越沙漠的長途旅行之前，駕駛人應該先把油箱加滿汽油。"
  },
  {
    "word": "grasp",
    "pos": "v./n.",
    "cn_def": "抓緊；握住；理解 (v.)；緊握；掌握 (n.)",
    "en_def": "to seize and hold firmly; to comprehend or understand fully",
    "sentence": "New students often struggle to {{BLANK}} the complicated concepts introduced in advanced physics.",
    "cn": "新生往往很難理解／掌握高等物理學中介紹的複雜抽象概念。"
  },
  {
    "word": "horrible",
    "pos": "adj.",
    "cn_def": "可怕的；糟糕的；極令人討厭的",
    "en_def": "causing horror; very unpleasant, shocking, or disagreeable",
    "sentence": "Because the violent crime was so {{BLANK}}, the judge sentenced the defendant to life imprisonment.",
    "cn": "因為那起暴力罪行極其駭人殘暴，法官判處被告終身監禁。"
  },
  {
    "word": "immediate",
    "pos": "adj.",
    "cn_def": "立即的；直接的；刻不容緩的",
    "en_def": "occurring or done at once; direct and without delay",
    "sentence": "The powerful painkiller had an {{BLANK}} effect on the patient, bringing relief within minutes.",
    "cn": "這款強力止痛藥對病患產生了立竿見影的療效，數分鐘內便帶來舒緩。"
  },
  {
    "word": "inner",
    "pos": "adj.",
    "cn_def": "內部的；內心的",
    "en_def": "situated inside or further in; relating to the mind or spirit",
    "sentence": "The soft {{BLANK}} lining of the winter jacket provides excellent insulation against icy winds.",
    "cn": "這件冬季夾克柔軟的內襯提供了絕佳的隔熱保暖效果，可抵禦刺骨寒風。"
  },
  {
    "word": "innocent",
    "pos": "adj.",
    "cn_def": "清白的；無罪的；純真的",
    "en_def": "not guilty of a crime or offense; simple and harmless",
    "sentence": "Although the suspect was questioned for hours, convincing evidence proved he was completely {{BLANK}}.",
    "cn": "儘管嫌犯被訊問了數小時，確鑿的證據證明他是完全清白無罪的。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "休閒；空閒；悠閒",
    "en_def": "time free from work or duties, spent in relaxation or hobbies",
    "sentence": "After forty years of tireless corporate work, the executive plans to retire to a life of {{BLANK}}.",
    "cn": "在企業不知疲倦地工作四十年後，這位高階主管打算退休享受悠閒的慢活人生。"
  },
  {
    "word": "lemonade",
    "pos": "n.",
    "cn_def": "檸檬水",
    "en_def": "a refreshing drink made from lemon juice, sugar, and water",
    "sentence": "On a sweltering summer afternoon, nothing is more refreshing than a tall glass of icy {{BLANK}}.",
    "cn": "在悶熱潮濕的炎炎夏日午後，沒有什麼比一大杯冰涼的檸檬水更能消暑解渴了。"
  }
];

const MCQS = [
  {
    "q": "Remember to fill the vehicle with ______ before heading into the remote mountain regions.",
    "options": [
      "lemonade",
      "gasoline",
      "leisure",
      "grasp"
    ],
    "answer": 1,
    "cn": "在進入偏遠山區之前，請記得將車輛加滿汽油。",
    "vocabIndex": 0
  },
  {
    "q": "The student has a remarkably thorough ______ of both classical Chinese and modern linguistics.",
    "options": [
      "leisure",
      "lemonade",
      "grasp",
      "gasoline"
    ],
    "answer": 2,
    "cn": "這位學生對中國古典文學和現代語言學都有著極為透徹的理解與掌握。",
    "vocabIndex": 1
  },
  {
    "q": "The earthquake caused ______ damage to hundreds of residential brick buildings across the county.",
    "options": [
      "innocent",
      "inner",
      "immediate",
      "horrible"
    ],
    "answer": 3,
    "cn": "地震對全縣數百棟住宅磚房造成了可怕的損害。",
    "vocabIndex": 2
  },
  {
    "q": "Following the chemical spill, the emergency response team ordered an ______ evacuation of the plant.",
    "options": [
      "immediate",
      "inner",
      "innocent",
      "horrible"
    ],
    "answer": 0,
    "cn": "化學品洩漏後，應急小組下令立即疏散工廠人員。",
    "vocabIndex": 3
  },
  {
    "q": "Meditation techniques allow practitioners to explore their ______ thoughts and cultivate tranquility.",
    "options": [
      "innocent",
      "immediate",
      "horrible",
      "inner"
    ],
    "answer": 3,
    "cn": "冥想技巧讓修行者得以探索內心深處的想法，並培養內在平靜。",
    "vocabIndex": 4
  },
  {
    "q": "Security surveillance footage provided clear proof that the accused cashier was entirely ______.",
    "options": [
      "innocent",
      "inner",
      "immediate",
      "horrible"
    ],
    "answer": 0,
    "cn": "安全監控錄影提供了明確證據，證明受指控的收銀員完全是清白無辜的。",
    "vocabIndex": 5
  },
  {
    "q": "In his ______ time, the high school teacher enjoys restoring vintage motorcycles and gardening.",
    "options": [
      "lemonade",
      "leisure",
      "gasoline",
      "grasp"
    ],
    "answer": 1,
    "cn": "在閒暇時間，這位高中老師喜歡修復老式摩托車和做園藝。",
    "vocabIndex": 6
  },
  {
    "q": "The host served chilled sparkling ______ infused with fresh mint leaves and juicy strawberries.",
    "options": [
      "grasp",
      "gasoline",
      "lemonade",
      "leisure"
    ],
    "answer": 2,
    "cn": "主人端上了加入新鮮薄荷葉和多汁草莓的冰鎮氣泡檸檬水。",
    "vocabIndex": 7
  },
  {
    "q": "Hybrid vehicles use battery electric power at slow speeds to save expensive ______ during city commutes.",
    "options": [
      "leisure",
      "gasoline",
      "lemonade",
      "grasp"
    ],
    "answer": 1,
    "cn": "油電混合車在低速行駛時使用電池電力，以在市區通勤中節省昂貴的汽油。",
    "vocabIndex": 0
  },
  {
    "q": "He firmly ______ed his daughter's hand as they navigated through the bustling weekend market.",
    "options": [
      "innocented",
      "leisured",
      "gasolined",
      "grasped"
    ],
    "answer": 3,
    "cn": "當他們穿梭於熙熙攘攘的週末市集時，他緊緊牽著女兒的手。",
    "vocabIndex": 1
  },
  {
    "q": "Waking up from a ______ nightmare, the little boy ran into his parents' bedroom for comfort.",
    "options": [
      "horrible",
      "innocent",
      "immediate",
      "inner"
    ],
    "answer": 0,
    "cn": "從一場可怕的噩夢中驚醒後，小男孩跑進父母的臥室尋求安慰。",
    "vocabIndex": 2
  },
  {
    "q": "Sending email allows for almost ______ transmission of documents across continents worldwide.",
    "options": [
      "horrible",
      "innocent",
      "immediate",
      "inner"
    ],
    "answer": 2,
    "cn": "發送電子郵件可以實現全球各大洲之間文件幾近即時的傳輸。",
    "vocabIndex": 3
  },
  {
    "q": "A good coat often features a waterproof outer shell and a warm, fleece-lined ______ jacket.",
    "options": [
      "inner",
      "immediate",
      "horrible",
      "innocent"
    ],
    "answer": 0,
    "cn": "一件好的大衣通常配備防水外殼和保暖抓絨內膽夾克。",
    "vocabIndex": 4
  },
  {
    "q": "The jury agreed that the defendant was an ______ bystander who had no connection to the robbery.",
    "options": [
      "horrible",
      "immediate",
      "inner",
      "innocent"
    ],
    "answer": 3,
    "cn": "陪審團認定被告是一名無辜的旁觀者，與搶案毫無關聯。",
    "vocabIndex": 5
  },
  {
    "q": "The countryside resort offers countless outdoor ______ facilities, including tennis courts and heated pools.",
    "options": [
      "grasp",
      "gasoline",
      "leisure",
      "lemonade"
    ],
    "answer": 2,
    "cn": "這座鄉村度假村提供無數戶外休閒設施，包括網球場和溫水游泳池。",
    "vocabIndex": 6
  },
  {
    "q": "During the hot summer fair, the ice-cold ______ stand attracted long queues of thirsty patrons.",
    "options": [
      "gasoline",
      "lemonade",
      "grasp",
      "leisure"
    ],
    "answer": 1,
    "cn": "在炎熱的夏季市集期間，冰涼的檸檬水攤位吸引了排長隊的口渴顧客。",
    "vocabIndex": 7
  },
  {
    "q": "Prices at the local ______ pump dropped slightly following the international agreement on crude oil.",
    "options": [
      "gasoline",
      "leisure",
      "grasp",
      "lemonade"
    ],
    "answer": 0,
    "cn": "在國際達成原油協議後，當地加油機的汽油價格略有下降。",
    "vocabIndex": 0
  },
  {
    "q": "Despite complex formulas, she quickly ______ed the core principles of quantum mechanics.",
    "options": [
      "leisured",
      "grasped",
      "gasolined",
      "horribled"
    ],
    "answer": 1,
    "cn": "儘管公式繁複，她還是迅速掌握了量子力學的核心原理。",
    "vocabIndex": 1
  },
  {
    "q": "The smell coming from the abandoned trash dump was utterly ______ and nauseating.",
    "options": [
      "immediate",
      "inner",
      "innocent",
      "horrible"
    ],
    "answer": 3,
    "cn": "廢棄垃圾場散發出的氣味極其難聞，令人作嘔。",
    "vocabIndex": 2
  },
  {
    "q": "The patient experienced ______ relief from chest tightness as soon as the oxygen mask was applied.",
    "options": [
      "horrible",
      "inner",
      "immediate",
      "innocent"
    ],
    "answer": 2,
    "cn": "戴上氧氣面罩後，病患的胸悶立刻獲得了緩解。",
    "vocabIndex": 3
  },
  {
    "q": "Many psychological therapies aim to help individuals reconcile with their wounded ______ child.",
    "options": [
      "innocent",
      "immediate",
      "horrible",
      "inner"
    ],
    "answer": 3,
    "cn": "許多心理療法旨在幫助個人與自己內心受傷的「內在小孩」達成和解。",
    "vocabIndex": 4
  },
  {
    "q": "The law operates under the fundamental premise that a defendant is ______ until proven guilty.",
    "options": [
      "horrible",
      "innocent",
      "inner",
      "immediate"
    ],
    "answer": 1,
    "cn": "法律依據「在被證明有罪之前，被告一律視為無罪」的基本前提運作。",
    "vocabIndex": 5
  },
  {
    "q": "Reading classic novels at a cozy coffee shop is one of her favorite weekend ______ pursuits.",
    "options": [
      "leisure",
      "gasoline",
      "grasp",
      "lemonade"
    ],
    "answer": 0,
    "cn": "在溫馨的咖啡館閱讀經典小說是她最喜歡的週末休閒愛好之一。",
    "vocabIndex": 6
  },
  {
    "q": "Children were laughing happily as they squeezed yellow lemons to make sweet ______.",
    "options": [
      "gasoline",
      "grasp",
      "lemonade",
      "leisure"
    ],
    "answer": 2,
    "cn": "孩子們擠著黃檸檬製作香甜的檸檬水，開心得哈哈大笑。",
    "vocabIndex": 7
  },
  {
    "q": "He could not ______ why his best friend suddenly refused to return his urgent phone calls.",
    "options": [
      "grasp",
      "leisure",
      "gasoline",
      "lemonade"
    ],
    "answer": 0,
    "cn": "他無法理解為什麼他最好的朋友突然拒絕回覆他的緊急電話。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "gasoline": {
    "pos": "n.",
    "en_def": "a refined petroleum liquid used as fuel for motor vehicles",
    "cn_def": "汽油 (縮寫為 gas)",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a refined petroleum liquid used as fuel for motor vehicles",
        "cn_def": "汽油 (縮寫為 gas)"
      }
    ]
  },
  "grasp": {
    "pos": "v./n.",
    "en_def": "to seize and hold firmly; to comprehend or understand fully",
    "cn_def": "抓緊；握住；理解 (v.)；緊握；掌握 (n.)",
    "combined": [
      {
        "pos": "v./n.",
        "en_def": "to seize and hold firmly; to comprehend or understand fully",
        "cn_def": "抓緊；握住；理解 (v.)；緊握；掌握 (n.)"
      }
    ]
  },
  "horrible": {
    "pos": "adj.",
    "en_def": "causing horror; very unpleasant, shocking, or disagreeable",
    "cn_def": "可怕的；糟糕的；極令人討厭的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing horror; very unpleasant, shocking, or disagreeable",
        "cn_def": "可怕的；糟糕的；極令人討厭的"
      }
    ]
  },
  "immediate": {
    "pos": "adj.",
    "en_def": "occurring or done at once; direct and without delay",
    "cn_def": "立即的；直接的；刻不容緩的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "occurring or done at once; direct and without delay",
        "cn_def": "立即的；直接的；刻不容緩的"
      }
    ]
  },
  "inner": {
    "pos": "adj.",
    "en_def": "situated inside or further in; relating to the mind or spirit",
    "cn_def": "內部的；內心的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "situated inside or further in; relating to the mind or spirit",
        "cn_def": "內部的；內心的"
      }
    ]
  },
  "innocent": {
    "pos": "adj.",
    "en_def": "not guilty of a crime or offense; simple and harmless",
    "cn_def": "清白的；無罪的；純真的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not guilty of a crime or offense; simple and harmless",
        "cn_def": "清白的；無罪的；純真的"
      }
    ]
  },
  "leisure": {
    "pos": "n.",
    "en_def": "time free from work or duties, spent in relaxation or hobbies",
    "cn_def": "休閒；空閒；悠閒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "time free from work or duties, spent in relaxation or hobbies",
        "cn_def": "休閒；空閒；悠閒"
      }
    ]
  },
  "lemonade": {
    "pos": "n.",
    "en_def": "a refreshing drink made from lemon juice, sugar, and water",
    "cn_def": "檸檬水",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a refreshing drink made from lemon juice, sugar, and water",
        "cn_def": "檸檬水"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
