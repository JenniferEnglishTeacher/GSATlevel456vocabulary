// Topic 21 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "run on",
    "pos": "v.phr.",
    "cn_def": "以…為動力",
    "en_def": "to use something as fuel or power",
    "sentence": "Our new school bus {{BLANK}} electricity, so it is much quieter and the students no longer breathe in diesel smoke.",
    "cn": "我們的新校車以電力為動力，所以安靜許多，學生也不再吸到柴油廢氣。"
  },
  {
    "word": "keep the lights on",
    "pos": "v.phr.",
    "cn_def": "維持供電；維持運作",
    "en_def": "to keep the power supply or a business running",
    "sentence": "During the storm, engineers worked all night to {{BLANK}}, and the city did not lose power.",
    "cn": "暴風雨期間，工程師整夜工作以維持供電，所以城市沒有停電。"
  },
  {
    "word": "tap into",
    "pos": "v.phr.",
    "cn_def": "利用；開發",
    "en_def": "to make use of a supply of something",
    "sentence": "Many countries want to {{BLANK}} the strong winds at sea, so they are building large offshore wind farms.",
    "cn": "許多國家想要利用海上的強風，所以它們正在興建大型離岸風場。"
  },
  {
    "word": "a drain on",
    "pos": "n.phr.",
    "cn_def": "消耗；負擔",
    "en_def": "something that uses up money or resources",
    "sentence": "The old air conditioner is {{BLANK}} our money, so we have decided to replace it with a more efficient one.",
    "cn": "那台舊冷氣是我們金錢上的一大負擔，所以我們決定換一台更省電的。"
  },
  {
    "word": "run dry",
    "pos": "v.phr.",
    "cn_def": "乾涸；耗盡",
    "en_def": "to have no water or supply left",
    "sentence": "The wells in the village began to {{BLANK}} during the long drought, so families had to buy water from trucks.",
    "cn": "長期乾旱期間村裡的井開始乾涸，所以家家戶戶只好向水車買水。"
  },
  {
    "word": "add fuel to the fire",
    "pos": "v.phr.",
    "cn_def": "火上加油",
    "en_def": "to make a bad situation even worse",
    "sentence": "The minister's rude comment about protesters only {{BLANK}}, and even more people joined the march.",
    "cn": "部長對抗議者的無禮言論只是火上加油，結果更多人加入遊行。"
  },
  {
    "word": "run low on",
    "pos": "v.phr.",
    "cn_def": "快用完",
    "en_def": "to have only a small amount of something left",
    "sentence": "We were {{BLANK}} petrol in the mountains, so we drove slowly and looked anxiously for a station.",
    "cn": "我們在山區時汽油快用完了，所以我們慢慢開，焦急地尋找加油站。"
  },
  {
    "word": "strike gold",
    "pos": "v.phr.",
    "cn_def": "挖到寶；大獲成功",
    "en_def": "to suddenly find something very valuable or successful",
    "sentence": "The small company {{BLANK}} with its cheap solar lamp, because millions of families without electricity wanted one.",
    "cn": "這家小公司以便宜的太陽能燈大獲成功，因為數百萬個沒有電的家庭都想要一盞。"
  },
  {
    "word": "recharge one's batteries",
    "pos": "v.phr.",
    "cn_def": "養精蓄銳；充電",
    "en_def": "to rest so you have energy again",
    "sentence": "I spent the weekend in the mountains to {{BLANK}}, and I felt ready to study hard again on Monday.",
    "cn": "我週末去山上養精蓄銳，星期一就覺得準備好再次努力讀書了。"
  },
  {
    "word": "make the switch to",
    "pos": "v.phr.",
    "cn_def": "改用；轉換到",
    "en_def": "to change from one thing to another",
    "sentence": "Our family decided to {{BLANK}} an electric scooter, because petrol was getting too expensive.",
    "cn": "我們家決定改用電動機車，因為汽油變得太貴了。"
  },
  {
    "word": "low-hanging fruit",
    "pos": "n.phr.",
    "cn_def": "容易達成的目標",
    "en_def": "the easiest things to do or achieve first",
    "sentence": "Turning off unused lights is {{BLANK}}, so our school started with that before installing solar panels.",
    "cn": "關掉沒在用的燈是容易達成的目標，所以我們學校在安裝太陽能板前先從這件事做起。"
  },
  {
    "word": "scrape the bottom of the barrel",
    "pos": "v.phr.",
    "cn_def": "退而求其次；別無選擇只能用最差的",
    "en_def": "to use the worst things because nothing better is left",
    "sentence": "The country was {{BLANK}} by burning dirty coal, because it had run out of cleaner fuels.",
    "cn": "這個國家只能退而求其次燃燒骯髒的煤，因為它已經用光了更乾淨的燃料。"
  },
  {
    "word": "burn the candle at both ends",
    "pos": "v.phr.",
    "cn_def": "蠟燭兩頭燒",
    "en_def": "to work very hard and sleep too little",
    "sentence": "My sister has been {{BLANK}} before her exams, so she looks tired and often gets headaches.",
    "cn": "我姊姊考試前一直蠟燭兩頭燒，所以她看起來很疲倦，常常頭痛。"
  },
  {
    "word": "pull the plug on",
    "pos": "v.phr.",
    "cn_def": "叫停；終止",
    "en_def": "to stop an activity or project",
    "sentence": "The government decided to {{BLANK}} the new coal plant, because the costs were too high and many people opposed it.",
    "cn": "政府決定叫停新的燃煤電廠，因為成本太高，而且許多人反對。"
  },
  {
    "word": "running on empty",
    "pos": "adj.phr.",
    "cn_def": "筋疲力盡；油盡燈枯",
    "en_def": "having no energy or resources left",
    "sentence": "After working three night shifts in a row, the nurse was {{BLANK}}, so she went straight to bed.",
    "cn": "連續上了三個夜班之後，那位護理師已經筋疲力盡，所以她直接上床睡覺。"
  },
  {
    "word": "worth its weight in gold",
    "pos": "adj.phr.",
    "cn_def": "非常珍貴",
    "en_def": "extremely useful or valuable",
    "sentence": "During the typhoon our small generator was {{BLANK}}, because it kept the fridge and lights working.",
    "cn": "颱風期間我們的小發電機非常珍貴，因為它讓冰箱和電燈持續運作。"
  },
  {
    "word": "dig deep",
    "pos": "v.phr.",
    "cn_def": "竭盡全力；慷慨解囊",
    "en_def": "to use all your strength or money for something",
    "sentence": "Residents had to {{BLANK}} to pay for repairs after the flood, but neighbours also helped each other generously.",
    "cn": "水災後居民必須竭盡全力支付修繕費用，但鄰居之間也慷慨地互相幫忙。"
  },
  {
    "word": "go up in smoke",
    "pos": "v.phr.",
    "cn_def": "化為泡影；付之一炬",
    "en_def": "to fail or be destroyed completely",
    "sentence": "Our plans for a beach holiday {{BLANK}} when petrol prices doubled, so we stayed home instead.",
    "cn": "當油價翻倍時，我們去海邊度假的計畫化為泡影，所以我們改成待在家裡。"
  },
  {
    "word": "plug the gap",
    "pos": "v.phr.",
    "cn_def": "填補缺口",
    "en_def": "to provide something that is missing",
    "sentence": "When the nuclear plant closed, gas power was used to {{BLANK}}, but it made electricity more expensive.",
    "cn": "核電廠關閉時，燃氣發電被用來填補缺口，但這讓電價變得更貴。"
  },
  {
    "word": "at full blast",
    "pos": "phr.",
    "cn_def": "開到最大",
    "en_def": "as strongly or loudly as possible",
    "sentence": "My brother had the air conditioner {{BLANK}} all afternoon, so my parents were shocked when the electricity bill arrived.",
    "cn": "我弟弟整個下午把冷氣開到最大，所以電費帳單寄來時我父母都嚇了一跳。"
  }
];

const MCQS = [
  {
    "q": "Our new school bus _____ electricity, so it is much quieter and the students no longer breathe in diesel smoke.",
    "options": [
      "pull the plug on",
      "run on",
      "run low on",
      "scrape the bottom of the barrel"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "During the storm, engineers worked all night to _____, and the city did not lose power.",
    "options": [
      "keep the lights on",
      "go up in smoke",
      "burn the candle at both ends",
      "make the switch to"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Many countries want to _____ the strong winds at sea, so they are building large offshore wind farms.",
    "options": [
      "dig deep",
      "run on",
      "tap into",
      "switch off"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The old air conditioner is _____ our money, so we have decided to replace it with a more efficient one.",
    "options": [
      "tar sands",
      "energy consumption",
      "short circuit",
      "a drain on"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The wells in the village began to _____ during the long drought, so families had to buy water from trucks.",
    "options": [
      "run low on",
      "recharge one's batteries",
      "run dry",
      "plug the gap"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The minister's rude comment about protesters only _____, and even more people joined the march.",
    "options": [
      "add fuel to the fire",
      "scrape the bottom of the barrel",
      "go up in smoke",
      "run dry"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "We were _____ petrol in the mountains, so we drove slowly and looked anxiously for a station.",
    "options": [
      "strike gold",
      "make the switch to",
      "keep the lights on",
      "run low on"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The small company _____ with its cheap solar lamp, because millions of families without electricity wanted one.",
    "options": [
      "switch off",
      "strike gold",
      "run on",
      "tap into"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "I spent the weekend in the mountains to _____, and I felt ready to study hard again on Monday.",
    "options": [
      "recharge one's batteries",
      "run on",
      "make the switch to",
      "strike gold"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our family decided to _____ an electric scooter, because petrol was getting too expensive.",
    "options": [
      "run low on",
      "make the switch to",
      "pull the plug on",
      "plug the gap"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Turning off unused lights is _____, so our school started with that before installing solar panels.",
    "options": [
      "smart thermostat",
      "extension cord",
      "electric car",
      "low-hanging fruit"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The country was _____ by burning dirty coal, because it had run out of cleaner fuels.",
    "options": [
      "recharge one's batteries",
      "plug the gap",
      "scrape the bottom of the barrel",
      "run dry"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "My sister has been _____ before her exams, so she looks tired and often gets headaches.",
    "options": [
      "burn the candle at both ends",
      "recharge one's batteries",
      "run dry",
      "add fuel to the fire"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The government decided to _____ the new coal plant, because the costs were too high and many people opposed it.",
    "options": [
      "run low on",
      "keep the lights on",
      "pull the plug on",
      "plug the gap"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "After working three night shifts in a row, the nurse was _____, so she went straight to bed.",
    "options": [
      "recharge one's batteries",
      "energy security",
      "scrap metal",
      "running on empty"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "During the typhoon our small generator was _____, because it kept the fridge and lights working.",
    "options": [
      "petrol station",
      "worth its weight in gold",
      "vested interest",
      "spent fuel"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Residents had to _____ to pay for repairs after the flood, but neighbours also helped each other generously.",
    "options": [
      "tap into",
      "plug the gap",
      "dig deep",
      "pull the plug on"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Our plans for a beach holiday _____ when petrol prices doubled, so we stayed home instead.",
    "options": [
      "plug the gap",
      "run on",
      "scrape the bottom of the barrel",
      "go up in smoke"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "When the nuclear plant closed, gas power was used to _____, but it made electricity more expensive.",
    "options": [
      "plug the gap",
      "tap into",
      "make the switch to",
      "recharge one's batteries"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "My brother had the air conditioner _____ all afternoon, so my parents were shocked when the electricity bill arrived.",
    "options": [
      "plug the gap",
      "at full blast",
      "energy security",
      "energy transition"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "run on": {
    "pos": "v.phr.",
    "en_def": "to use something as fuel or power",
    "cn_def": "以…為動力"
  },
  "keep the lights on": {
    "pos": "v.phr.",
    "en_def": "to keep the power supply or a business running",
    "cn_def": "維持供電；維持運作"
  },
  "tap into": {
    "pos": "v.phr.",
    "en_def": "to make use of a supply of something",
    "cn_def": "利用；開發"
  },
  "a drain on": {
    "pos": "n.phr.",
    "en_def": "something that uses up money or resources",
    "cn_def": "消耗；負擔"
  },
  "run dry": {
    "pos": "v.phr.",
    "en_def": "to have no water or supply left",
    "cn_def": "乾涸；耗盡"
  },
  "add fuel to the fire": {
    "pos": "v.phr.",
    "en_def": "to make a bad situation even worse",
    "cn_def": "火上加油"
  },
  "run low on": {
    "pos": "v.phr.",
    "en_def": "to have only a small amount of something left",
    "cn_def": "快用完"
  },
  "strike gold": {
    "pos": "v.phr.",
    "en_def": "to suddenly find something very valuable or successful",
    "cn_def": "挖到寶；大獲成功"
  },
  "recharge one's batteries": {
    "pos": "v.phr.",
    "en_def": "to rest so you have energy again",
    "cn_def": "養精蓄銳；充電"
  },
  "make the switch to": {
    "pos": "v.phr.",
    "en_def": "to change from one thing to another",
    "cn_def": "改用；轉換到"
  },
  "low-hanging fruit": {
    "pos": "n.phr.",
    "en_def": "the easiest things to do or achieve first",
    "cn_def": "容易達成的目標"
  },
  "scrape the bottom of the barrel": {
    "pos": "v.phr.",
    "en_def": "to use the worst things because nothing better is left",
    "cn_def": "退而求其次；別無選擇只能用最差的"
  },
  "burn the candle at both ends": {
    "pos": "v.phr.",
    "en_def": "to work very hard and sleep too little",
    "cn_def": "蠟燭兩頭燒"
  },
  "pull the plug on": {
    "pos": "v.phr.",
    "en_def": "to stop an activity or project",
    "cn_def": "叫停；終止"
  },
  "running on empty": {
    "pos": "adj.phr.",
    "en_def": "having no energy or resources left",
    "cn_def": "筋疲力盡；油盡燈枯"
  },
  "worth its weight in gold": {
    "pos": "adj.phr.",
    "en_def": "extremely useful or valuable",
    "cn_def": "非常珍貴"
  },
  "dig deep": {
    "pos": "v.phr.",
    "en_def": "to use all your strength or money for something",
    "cn_def": "竭盡全力；慷慨解囊"
  },
  "go up in smoke": {
    "pos": "v.phr.",
    "en_def": "to fail or be destroyed completely",
    "cn_def": "化為泡影；付之一炬"
  },
  "plug the gap": {
    "pos": "v.phr.",
    "en_def": "to provide something that is missing",
    "cn_def": "填補缺口"
  },
  "at full blast": {
    "pos": "phr.",
    "en_def": "as strongly or loudly as possible",
    "cn_def": "開到最大"
  },
  "switch off": {
    "pos": "v.phr.",
    "en_def": "to turn off a machine or light",
    "cn_def": "關掉"
  },
  "tar sands": {
    "pos": "n.phr.",
    "en_def": "sand mixed with thick, sticky oil",
    "cn_def": "油砂"
  },
  "energy consumption": {
    "pos": "n.phr.",
    "en_def": "the amount of energy used",
    "cn_def": "能源消耗；耗能"
  },
  "short circuit": {
    "pos": "n.phr.",
    "en_def": "a fault where electricity takes the wrong path",
    "cn_def": "短路"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "extension cord": {
    "pos": "n.phr.",
    "en_def": "a long wire that lets you plug in things far from a socket",
    "cn_def": "延長線"
  },
  "electric car": {
    "pos": "n.phr.",
    "en_def": "a car that runs only on electricity from batteries",
    "cn_def": "電動車"
  },
  "energy security": {
    "pos": "n.phr.",
    "en_def": "having a reliable supply of energy at a fair price",
    "cn_def": "能源安全"
  },
  "scrap metal": {
    "pos": "n.phr.",
    "en_def": "old metal that can be melted and used again",
    "cn_def": "廢金屬"
  },
  "petrol station": {
    "pos": "n.phr.",
    "en_def": "a place where you buy fuel for your car",
    "cn_def": "加油站"
  },
  "vested interest": {
    "pos": "n.phr.",
    "en_def": "a personal reason for wanting something to happen",
    "cn_def": "既得利益"
  },
  "spent fuel": {
    "pos": "n.phr.",
    "en_def": "used nuclear fuel that is still very dangerous",
    "cn_def": "用過核燃料"
  },
  "energy transition": {
    "pos": "n.phr.",
    "en_def": "the change from fossil fuels to clean energy",
    "cn_def": "能源轉型"
  }
};

const EXTRA_GLOSSES = {};
