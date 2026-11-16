// Topic 12 Subunit 7 Quiz Data: Space Exploration & Space Junk 太空探索與太空垃圾
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S07 - Space Exploration & Space Junk 太空探索與太空垃圾",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "space exploration",
    "pos": "n.phr.",
    "cn_def": "太空探索",
    "en_def": "travelling into space to learn about it",
    "sentence": "{{BLANK}} is very expensive, but it has given us many useful inventions, such as better weather forecasts and GPS.",
    "cn": "太空探索非常昂貴，但它為我們帶來許多有用的發明，例如更好的天氣預報和衛星定位。"
  },
  {
    "word": "astronaut",
    "pos": "n.",
    "cn_def": "太空人",
    "en_def": "a person trained to travel in space",
    "sentence": "The {{BLANK}} trained for years before her mission, and she said the hardest part was being away from her family.",
    "cn": "那位太空人在任務前接受了多年訓練，而她說最困難的部分是離開家人。"
  },
  {
    "word": "spacecraft",
    "pos": "n.",
    "cn_def": "太空船",
    "en_def": "a vehicle that travels in space",
    "sentence": "The {{BLANK}} took seven months to reach Mars, so engineers had to plan every detail of the journey very carefully.",
    "cn": "那艘太空船花了七個月才抵達火星，所以工程師必須非常仔細地規劃旅程的每個細節。"
  },
  {
    "word": "space station",
    "pos": "n.phr.",
    "cn_def": "太空站",
    "en_def": "a large spacecraft where people live and work in orbit",
    "sentence": "Astronauts on the {{BLANK}} grow vegetables in space, and they also do experiments that cannot be done on Earth.",
    "cn": "太空站上的太空人在太空中種植蔬菜，而且他們也進行在地球上無法做的實驗。"
  },
  {
    "word": "rocket",
    "pos": "n.",
    "cn_def": "火箭",
    "en_def": "a vehicle pushed upward by burning fuel",
    "sentence": "The {{BLANK}} shook the ground as it rose into the sky, and the crowd cheered until it disappeared into the clouds.",
    "cn": "火箭升空時震動了地面，而群眾一直歡呼直到它消失在雲層中。"
  },
  {
    "word": "launch pad",
    "pos": "n.phr.",
    "cn_def": "發射臺",
    "en_def": "the place from which a rocket takes off",
    "sentence": "The rocket stood on the {{BLANK}} for hours, but the launch was cancelled because of strong winds.",
    "cn": "火箭在發射臺上矗立了好幾個小時，但發射因為強風而取消了。"
  },
  {
    "word": "countdown",
    "pos": "n.",
    "cn_def": "倒數計時",
    "en_def": "counting backwards to zero before something starts",
    "sentence": "The {{BLANK}} reached zero and the engines roared, so everyone in the control room held their breath.",
    "cn": "倒數計時歸零、引擎轟鳴，所以控制室裡的每個人都屏住了呼吸。"
  },
  {
    "word": "lift-off",
    "pos": "n.",
    "cn_def": "升空",
    "en_def": "the moment a rocket leaves the ground",
    "sentence": "Just seconds after {{BLANK}}, the rocket was moving faster than a plane, and soon it was only a bright dot in the sky.",
    "cn": "升空後短短幾秒，火箭的速度就比飛機還快，而很快它就只是天空中的一個亮點。"
  },
  {
    "word": "mission control",
    "pos": "n.phr.",
    "cn_def": "任務控制中心",
    "en_def": "the team on Earth that guides a space flight",
    "sentence": "The astronauts talked to {{BLANK}} every day, and the engineers on the ground helped them fix problems with the equipment.",
    "cn": "太空人每天和任務控制中心通話，而地面上的工程師幫助他們修理設備的問題。"
  },
  {
    "word": "spacesuit",
    "pos": "n.",
    "cn_def": "太空衣",
    "en_def": "special clothing that protects astronauts in space",
    "sentence": "A {{BLANK}} is very heavy on Earth, but in space it protects astronauts from extreme heat, cold and radiation.",
    "cn": "太空衣在地球上非常重，但在太空中它保護太空人免受極端的高溫、低溫和輻射傷害。"
  },
  {
    "word": "spacewalk",
    "pos": "n.",
    "cn_def": "太空漫步",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "sentence": "During the six-hour {{BLANK}}, the astronauts repaired a solar panel, and millions of people watched the live video online.",
    "cn": "在六小時的太空漫步期間，太空人修理了一片太陽能板，而數百萬人在網路上觀看直播影片。"
  },
  {
    "word": "zero gravity",
    "pos": "n.phr.",
    "cn_def": "零重力",
    "en_def": "a state where things float because they seem to have no weight",
    "sentence": "In {{BLANK}}, water forms floating balls instead of pouring, so astronauts drink through special straws.",
    "cn": "在零重力狀態下，水會形成漂浮的水球而不會倒出來，所以太空人用特殊的吸管喝水。"
  },
  {
    "word": "weightless",
    "pos": "adj.",
    "cn_def": "失重的",
    "en_def": "having no weight, so you float",
    "sentence": "The astronauts felt {{BLANK}} as soon as they reached orbit, and their pens and notebooks floated around the cabin.",
    "cn": "太空人一進入軌道就感到失重，而他們的筆和筆記本在艙內四處漂浮。"
  },
  {
    "word": "microgravity",
    "pos": "n.",
    "cn_def": "微重力",
    "en_def": "very weak gravity, like inside an orbiting spacecraft",
    "sentence": "Long stays in {{BLANK}} make astronauts' bones and muscles weaker, so they must exercise for two hours every day.",
    "cn": "長時間待在微重力環境會讓太空人的骨骼和肌肉變弱，所以他們每天必須運動兩小時。"
  },
  {
    "word": "re-entry",
    "pos": "n.",
    "cn_def": "重返大氣層",
    "en_def": "the return of a spacecraft into the Earth's atmosphere",
    "sentence": "{{BLANK}} is one of the most dangerous parts of a mission, because the spacecraft becomes extremely hot as it falls through the air.",
    "cn": "重返大氣層是任務中最危險的部分之一，因為太空船穿過空氣墜落時會變得極度灼熱。"
  },
  {
    "word": "heat shield",
    "pos": "n.phr.",
    "cn_def": "隔熱罩",
    "en_def": "a cover that protects a spacecraft from extreme heat",
    "sentence": "The capsule has a thick {{BLANK}} on the bottom, so the astronauts inside stay cool while the outside glows red.",
    "cn": "太空艙底部有一層厚厚的隔熱罩，所以外部燒得通紅時，裡面的太空人仍然保持涼爽。"
  },
  {
    "word": "rover",
    "pos": "n.",
    "cn_def": "探測車",
    "en_def": "a vehicle that drives on the surface of another planet",
    "sentence": "The {{BLANK}} has been driving across Mars for years, and it sends back photos that look surprisingly like deserts on Earth.",
    "cn": "那輛探測車已經在火星上行駛多年，而它傳回的照片看起來出奇地像地球上的沙漠。"
  },
  {
    "word": "lander",
    "pos": "n.",
    "cn_def": "登陸器",
    "en_def": "a spacecraft designed to land on a planet or moon",
    "sentence": "The {{BLANK}} touched down gently on the moon, and the scientists in the control room jumped up and hugged each other.",
    "cn": "登陸器輕輕地降落在月球上，而控制室裡的科學家們跳起來互相擁抱。"
  },
  {
    "word": "space probe",
    "pos": "n.phr.",
    "cn_def": "太空探測器",
    "en_def": "a robot spacecraft sent to explore space",
    "sentence": "The {{BLANK}} has travelled for over forty years, but it is still sending information back to scientists on Earth.",
    "cn": "那個太空探測器已經航行了四十多年，但它仍然把資訊傳回給地球上的科學家。"
  },
  {
    "word": "space agency",
    "pos": "n.phr.",
    "cn_def": "太空總署；太空機構",
    "en_def": "a government organisation that runs space programmes",
    "sentence": "Taiwan's {{BLANK}} has launched several satellites, and it hopes to train more young engineers in the next ten years.",
    "cn": "臺灣的太空機構已經發射了好幾顆人造衛星，而且它希望在未來十年培育更多年輕工程師。"
  },
  {
    "word": "space race",
    "pos": "n.phr.",
    "cn_def": "太空競賽",
    "en_def": "the competition between countries to explore space first",
    "sentence": "During the {{BLANK}}, the USA and the Soviet Union competed fiercely, and both countries spent huge amounts of money.",
    "cn": "在太空競賽期間，美國和蘇聯激烈競爭，而兩國都花費了鉅額資金。"
  },
  {
    "word": "moon landing",
    "pos": "n.phr.",
    "cn_def": "登月",
    "en_def": "the event of a spacecraft or people landing on the moon",
    "sentence": "My grandparents watched the first {{BLANK}} on a small black-and-white TV, and they still remember that exciting night.",
    "cn": "我的祖父母在一臺小小的黑白電視上看了第一次登月，而他們至今仍記得那個令人興奮的夜晚。"
  },
  {
    "word": "space junk",
    "pos": "n.phr.",
    "cn_def": "太空垃圾",
    "en_def": "old, broken objects left floating in orbit",
    "sentence": "There are millions of pieces of {{BLANK}} around the Earth, and even a tiny piece can damage a working satellite.",
    "cn": "地球周圍有數百萬片太空垃圾，而即使是很小的一片也能損壞運作中的人造衛星。"
  },
  {
    "word": "low Earth orbit",
    "pos": "n.phr.",
    "cn_def": "低地球軌道",
    "en_def": "the area of space close above the Earth's atmosphere",
    "sentence": "Most satellites travel in {{BLANK}}, so this area is becoming crowded, and collisions are a growing risk.",
    "cn": "大多數人造衛星在低地球軌道上運行，所以這個區域變得越來越擁擠，而碰撞的風險也日益增加。"
  },
  {
    "word": "space tourism",
    "pos": "n.phr.",
    "cn_def": "太空旅遊",
    "en_def": "travelling to space for fun as a paying passenger",
    "sentence": "{{BLANK}} is still extremely expensive, but some companies believe ordinary people will be able to afford it one day.",
    "cn": "太空旅遊仍然極其昂貴，但有些公司相信有一天普通人也能負擔得起。"
  },
  {
    "word": "reusable rocket",
    "pos": "n.phr.",
    "cn_def": "可重複使用火箭",
    "en_def": "a rocket that can be flown more than once",
    "sentence": "A {{BLANK}} lands back on Earth after each flight, so it greatly reduces the cost of sending satellites into space.",
    "cn": "可重複使用火箭每次飛行後都會降落回地球，所以它大幅降低了發射人造衛星的成本。"
  },
  {
    "word": "thruster",
    "pos": "n.",
    "cn_def": "推進器",
    "en_def": "a small engine used to move or turn a spacecraft",
    "sentence": "One {{BLANK}} stopped working during the mission, so the team on the ground had to find another way to turn the spacecraft.",
    "cn": "一具推進器在任務中停止運作，所以地面團隊必須找到另一種方法來轉動太空船。"
  },
  {
    "word": "propulsion",
    "pos": "n.",
    "cn_def": "推進力；推進系統",
    "en_def": "the force that pushes something forward",
    "sentence": "Engineers are testing new kinds of {{BLANK}} for spacecraft, because chemical rockets are too slow for long journeys.",
    "cn": "工程師正在測試新型的太空船推進系統，因為化學火箭對長途旅行來說太慢了。"
  },
  {
    "word": "extraterrestrial",
    "pos": "adj.",
    "cn_def": "外星的",
    "en_def": "coming from outside the Earth",
    "sentence": "Scientists have not found any {{BLANK}} life yet, but many believe simple living things may exist on other worlds.",
    "cn": "科學家還沒有發現任何外星生命，但許多人相信簡單的生物可能存在於其他星球上。"
  },
  {
    "word": "airlock",
    "pos": "n.",
    "cn_def": "氣閘艙",
    "en_def": "a small sealed room for moving between areas with different air pressure",
    "sentence": "The astronauts waited inside the {{BLANK}} while the air was pumped out, and then they opened the door to space.",
    "cn": "太空人在氣閘艙裡等待空氣被抽出，然後他們打開了通往太空的門。"
  }
];

const MCQS = [
  {
    "q": "_____ is very expensive, but it has given us many useful inventions, such as better weather forecasts and GPS.",
    "options": [
      "Kuiper Belt",
      "ice core",
      "space exploration",
      "star cluster"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ trained for years before her mission, and she said the hardest part was being away from her family.",
    "options": [
      "Mars",
      "astronaut",
      "crust",
      "geology"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ took seven months to reach Mars, so engineers had to plan every detail of the journey very carefully.",
    "options": [
      "spacecraft",
      "curvature",
      "crescent",
      "instability"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Astronauts on the _____ grow vegetables in space, and they also do experiments that cannot be done on Earth.",
    "options": [
      "red giant",
      "asteroid belt",
      "rock formation",
      "space station"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ shook the ground as it rose into the sky, and the crowd cheered until it disappeared into the clouds.",
    "options": [
      "rocket",
      "valley",
      "exoplanet",
      "asthenosphere"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The rocket stood on the _____ for hours, but the launch was cancelled because of strong winds.",
    "options": [
      "Richter scale",
      "seafloor spreading",
      "black hole",
      "launch pad"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The _____ reached zero and the engines roared, so everyone in the control room held their breath.",
    "options": [
      "coherence",
      "supernova",
      "countdown",
      "credibility"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Just seconds after _____, the rocket was moving faster than a plane, and soon it was only a bright dot in the sky.",
    "options": [
      "exoplanet",
      "lift-off",
      "relevance",
      "indication"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The astronauts talked to _____ every day, and the engineers on the ground helped them fix problems with the equipment.",
    "options": [
      "star cluster",
      "full moon",
      "mission control",
      "inner core"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "A _____ is very heavy on Earth, but in space it protects astronauts from extreme heat, cold and radiation.",
    "options": [
      "spacesuit",
      "void",
      "modification",
      "uplift"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "During the six-hour _____, the astronauts repaired a solar panel, and millions of people watched the live video online.",
    "options": [
      "distribution",
      "constellation",
      "deduction",
      "spacewalk"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "In _____, water forms floating balls instead of pouring, so astronauts drink through special straws.",
    "options": [
      "black hole",
      "zero gravity",
      "active volcano",
      "mid-ocean ridge"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The astronauts felt _____ as soon as they reached orbit, and their pens and notebooks floated around the cabin.",
    "options": [
      "supplementary",
      "convincing",
      "weightless",
      "inaccurate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Long stays in _____ make astronauts' bones and muscles weaker, so they must exercise for two hours every day.",
    "options": [
      "microgravity",
      "geology",
      "validation",
      "requirement"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "_____ is one of the most dangerous parts of a mission, because the spacecraft becomes extremely hot as it falls through the air.",
    "options": [
      "computation",
      "re-entry",
      "adjustment",
      "riverbed"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The capsule has a thick _____ on the bottom, so the astronauts inside stay cool while the outside glows red.",
    "options": [
      "star cluster",
      "full moon",
      "shooting star",
      "heat shield"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The _____ has been driving across Mars for years, and it sends back photos that look surprisingly like deserts on Earth.",
    "options": [
      "rover",
      "cavern",
      "cosmos",
      "modification"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The _____ touched down gently on the moon, and the scientists in the control room jumped up and hugged each other.",
    "options": [
      "topography",
      "lander",
      "alteration",
      "crystal"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The _____ has travelled for over forty years, but it is still sending information back to scientists on Earth.",
    "options": [
      "Milky Way",
      "asteroid impact",
      "pyroclastic flow",
      "space probe"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Taiwan's _____ has launched several satellites, and it hopes to train more young engineers in the next ten years.",
    "options": [
      "oceanic crust",
      "mountain range",
      "space agency",
      "radio telescope"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "During the _____, the USA and the Soviet Union competed fiercely, and both countries spent huge amounts of money.",
    "options": [
      "ice core",
      "space race",
      "the centre of the universe",
      "rift valley"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "My grandparents watched the first _____ on a small black-and-white TV, and they still remember that exciting night.",
    "options": [
      "moon landing",
      "tectonic plate",
      "mid-ocean ridge",
      "Richter scale"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "There are millions of pieces of _____ around the Earth, and even a tiny piece can damage a working satellite.",
    "options": [
      "mountain range",
      "solar eclipse",
      "inner core",
      "space junk"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Most satellites travel in _____, so this area is becoming crowded, and collisions are a growing risk.",
    "options": [
      "asteroid impact",
      "fault zone",
      "low Earth orbit",
      "continental drift"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "_____ is still extremely expensive, but some companies believe ordinary people will be able to afford it one day.",
    "options": [
      "pyroclastic flow",
      "habitable zone",
      "Big Bang",
      "space tourism"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "A _____ lands back on Earth after each flight, so it greatly reduces the cost of sending satellites into space.",
    "options": [
      "rock formation",
      "reusable rocket",
      "geologic time scale",
      "hot spring"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "One _____ stopped working during the mission, so the team on the ground had to find another way to turn the spacecraft.",
    "options": [
      "complexity",
      "galaxy",
      "thruster",
      "stalagmite"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Engineers are testing new kinds of _____ for spacecraft, because chemical rockets are too slow for long journeys.",
    "options": [
      "propulsion",
      "confirmation",
      "stalagmite",
      "stalactite"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Scientists have not found any _____ life yet, but many believe simple living things may exist on other worlds.",
    "options": [
      "eventual",
      "mathematical",
      "celestial",
      "extraterrestrial"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The astronauts waited inside the _____ while the air was pumped out, and then they opened the door to space.",
    "options": [
      "gorge",
      "airlock",
      "resemblance",
      "sinkhole"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "space exploration": {
    "pos": "n.phr.",
    "en_def": "travelling into space to learn about it",
    "cn_def": "太空探索"
  },
  "astronaut": {
    "pos": "n.",
    "en_def": "a person trained to travel in space",
    "cn_def": "太空人"
  },
  "spacecraft": {
    "pos": "n.",
    "en_def": "a vehicle that travels in space",
    "cn_def": "太空船"
  },
  "space station": {
    "pos": "n.phr.",
    "en_def": "a large spacecraft where people live and work in orbit",
    "cn_def": "太空站"
  },
  "rocket": {
    "pos": "n.",
    "en_def": "a vehicle pushed upward by burning fuel",
    "cn_def": "火箭"
  },
  "launch pad": {
    "pos": "n.phr.",
    "en_def": "the place from which a rocket takes off",
    "cn_def": "發射臺"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "lift-off": {
    "pos": "n.",
    "en_def": "the moment a rocket leaves the ground",
    "cn_def": "升空"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "spacesuit": {
    "pos": "n.",
    "en_def": "special clothing that protects astronauts in space",
    "cn_def": "太空衣"
  },
  "spacewalk": {
    "pos": "n.",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "cn_def": "太空漫步"
  },
  "zero gravity": {
    "pos": "n.phr.",
    "en_def": "a state where things float because they seem to have no weight",
    "cn_def": "零重力"
  },
  "weightless": {
    "pos": "adj.",
    "en_def": "having no weight, so you float",
    "cn_def": "失重的"
  },
  "microgravity": {
    "pos": "n.",
    "en_def": "very weak gravity, like inside an orbiting spacecraft",
    "cn_def": "微重力"
  },
  "re-entry": {
    "pos": "n.",
    "en_def": "the return of a spacecraft into the Earth's atmosphere",
    "cn_def": "重返大氣層"
  },
  "heat shield": {
    "pos": "n.phr.",
    "en_def": "a cover that protects a spacecraft from extreme heat",
    "cn_def": "隔熱罩"
  },
  "rover": {
    "pos": "n.",
    "en_def": "a vehicle that drives on the surface of another planet",
    "cn_def": "探測車"
  },
  "lander": {
    "pos": "n.",
    "en_def": "a spacecraft designed to land on a planet or moon",
    "cn_def": "登陸器"
  },
  "space probe": {
    "pos": "n.phr.",
    "en_def": "a robot spacecraft sent to explore space",
    "cn_def": "太空探測器"
  },
  "space agency": {
    "pos": "n.phr.",
    "en_def": "a government organisation that runs space programmes",
    "cn_def": "太空總署；太空機構"
  },
  "space race": {
    "pos": "n.phr.",
    "en_def": "the competition between countries to explore space first",
    "cn_def": "太空競賽"
  },
  "moon landing": {
    "pos": "n.phr.",
    "en_def": "the event of a spacecraft or people landing on the moon",
    "cn_def": "登月"
  },
  "space junk": {
    "pos": "n.phr.",
    "en_def": "old, broken objects left floating in orbit",
    "cn_def": "太空垃圾"
  },
  "low earth orbit": {
    "pos": "n.phr.",
    "en_def": "the area of space close above the Earth's atmosphere",
    "cn_def": "低地球軌道"
  },
  "space tourism": {
    "pos": "n.phr.",
    "en_def": "travelling to space for fun as a paying passenger",
    "cn_def": "太空旅遊"
  },
  "reusable rocket": {
    "pos": "n.phr.",
    "en_def": "a rocket that can be flown more than once",
    "cn_def": "可重複使用火箭"
  },
  "thruster": {
    "pos": "n.",
    "en_def": "a small engine used to move or turn a spacecraft",
    "cn_def": "推進器"
  },
  "propulsion": {
    "pos": "n.",
    "en_def": "the force that pushes something forward",
    "cn_def": "推進力；推進系統"
  },
  "extraterrestrial": {
    "pos": "adj.",
    "en_def": "coming from outside the Earth",
    "cn_def": "外星的"
  },
  "airlock": {
    "pos": "n.",
    "en_def": "a small sealed room for moving between areas with different air pressure",
    "cn_def": "氣閘艙"
  },
  "kuiper belt": {
    "pos": "n.phr.",
    "en_def": "an area of icy objects beyond Neptune",
    "cn_def": "古柏帶"
  },
  "ice core": {
    "pos": "n.phr.",
    "en_def": "a long tube of ice drilled out to study the past",
    "cn_def": "冰芯"
  },
  "star cluster": {
    "pos": "n.phr.",
    "en_def": "a group of stars that are close together",
    "cn_def": "星團"
  },
  "mars": {
    "pos": "n.",
    "en_def": "the red planet, fourth from the sun",
    "cn_def": "火星"
  },
  "crust": {
    "pos": "n.",
    "en_def": "the hard outer layer of the Earth",
    "cn_def": "地殼"
  },
  "geology": {
    "pos": "n.",
    "en_def": "the study of rocks and the Earth's history",
    "cn_def": "地質學"
  },
  "curvature": {
    "pos": "n.",
    "en_def": "the amount that something is curved",
    "cn_def": "曲率；彎曲度"
  },
  "crescent": {
    "pos": "n.",
    "en_def": "the curved shape of the moon when only a thin part is lit",
    "cn_def": "新月形；彎月"
  },
  "instability": {
    "pos": "n.",
    "en_def": "the state of being likely to change or fall",
    "cn_def": "不穩定"
  },
  "red giant": {
    "pos": "n.phr.",
    "en_def": "a large, old star that has grown cooler and redder",
    "cn_def": "紅巨星"
  },
  "asteroid belt": {
    "pos": "n.phr.",
    "en_def": "the area between Mars and Jupiter with many asteroids",
    "cn_def": "小行星帶"
  },
  "rock formation": {
    "pos": "n.phr.",
    "en_def": "a natural shape made of rock",
    "cn_def": "岩石地形；奇岩"
  },
  "valley": {
    "pos": "n.",
    "en_def": "low land between hills or mountains",
    "cn_def": "山谷"
  },
  "exoplanet": {
    "pos": "n.",
    "en_def": "a planet that moves around a star other than the sun",
    "cn_def": "系外行星"
  },
  "asthenosphere": {
    "pos": "n.",
    "en_def": "the soft, partly melted layer under the lithosphere",
    "cn_def": "軟流圈"
  },
  "richter scale": {
    "pos": "n.phr.",
    "en_def": "a scale that measures the strength of an earthquake",
    "cn_def": "芮氏規模"
  },
  "seafloor spreading": {
    "pos": "n.phr.",
    "en_def": "the process where new ocean floor forms and moves apart",
    "cn_def": "海底擴張"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "cn_def": "黑洞"
  },
  "coherence": {
    "pos": "n.",
    "en_def": "the quality of being logical and well organised",
    "cn_def": "連貫性"
  },
  "supernova": {
    "pos": "n.",
    "en_def": "the huge explosion of a dying star",
    "cn_def": "超新星"
  },
  "credibility": {
    "pos": "n.",
    "en_def": "the quality of being trusted and believed",
    "cn_def": "可信度"
  },
  "relevance": {
    "pos": "n.",
    "en_def": "the quality of being connected to what is happening",
    "cn_def": "關聯性"
  },
  "indication": {
    "pos": "n.",
    "en_def": "a sign that shows something is happening",
    "cn_def": "跡象"
  },
  "full moon": {
    "pos": "n.phr.",
    "en_def": "the moon when it looks completely round and bright",
    "cn_def": "滿月"
  },
  "inner core": {
    "pos": "n.phr.",
    "en_def": "the solid metal ball at the very centre of the Earth",
    "cn_def": "內核"
  },
  "void": {
    "pos": "n.",
    "en_def": "a large empty space",
    "cn_def": "空無；真空"
  },
  "modification": {
    "pos": "n.",
    "en_def": "a small change to improve something",
    "cn_def": "修改；改良"
  },
  "uplift": {
    "pos": "n.",
    "en_def": "the rising of land caused by forces inside the Earth",
    "cn_def": "抬升"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread over an area",
    "cn_def": "分布"
  },
  "constellation": {
    "pos": "n.",
    "en_def": "a group of stars that forms a pattern",
    "cn_def": "星座"
  },
  "deduction": {
    "pos": "n.",
    "en_def": "reaching a conclusion by careful reasoning",
    "cn_def": "推論"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "mid-ocean ridge": {
    "pos": "n.phr.",
    "en_def": "a long underwater mountain chain where new crust forms",
    "cn_def": "中洋脊"
  },
  "supplementary": {
    "pos": "adj.",
    "en_def": "added to something to make it complete",
    "cn_def": "補充的"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe that something is true",
    "cn_def": "令人信服的"
  },
  "inaccurate": {
    "pos": "adj.",
    "en_def": "not correct or exact",
    "cn_def": "不準確的"
  },
  "validation": {
    "pos": "n.",
    "en_def": "proof that something is correct or true",
    "cn_def": "驗證"
  },
  "requirement": {
    "pos": "n.",
    "en_def": "something that is needed or necessary",
    "cn_def": "必要條件；要求"
  },
  "computation": {
    "pos": "n.",
    "en_def": "the process of calculating",
    "cn_def": "計算"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "調整"
  },
  "riverbed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of a river",
    "cn_def": "河床"
  },
  "shooting star": {
    "pos": "n.phr.",
    "en_def": "an everyday name for a meteor",
    "cn_def": "流星（口語）"
  },
  "cavern": {
    "pos": "n.",
    "en_def": "a large cave",
    "cn_def": "大洞穴"
  },
  "cosmos": {
    "pos": "n.",
    "en_def": "the whole universe, seen as an ordered system",
    "cn_def": "宇宙"
  },
  "topography": {
    "pos": "n.",
    "en_def": "the shape and height of the land in an area",
    "cn_def": "地形（起伏）"
  },
  "alteration": {
    "pos": "n.",
    "en_def": "a change in something",
    "cn_def": "改變；修改"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a solid with a regular shape and flat sides",
    "cn_def": "晶體；水晶"
  },
  "milky way": {
    "pos": "n.phr.",
    "en_def": "the galaxy that contains our solar system",
    "cn_def": "銀河"
  },
  "asteroid impact": {
    "pos": "n.phr.",
    "en_def": "when a space rock hits a planet",
    "cn_def": "小行星撞擊"
  },
  "pyroclastic flow": {
    "pos": "n.phr.",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "cn_def": "火山碎屑流"
  },
  "oceanic crust": {
    "pos": "n.phr.",
    "en_def": "the thin, heavy crust under the oceans",
    "cn_def": "海洋地殼"
  },
  "mountain range": {
    "pos": "n.phr.",
    "en_def": "a long line of mountains",
    "cn_def": "山脈"
  },
  "radio telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that collects radio waves from space",
    "cn_def": "電波望遠鏡"
  },
  "the centre of the universe": {
    "pos": "n.phr.",
    "en_def": "the most important person or thing (often used critically)",
    "cn_def": "宇宙的中心；自以為最重要"
  },
  "rift valley": {
    "pos": "n.phr.",
    "en_def": "a long valley formed when the land splits apart",
    "cn_def": "裂谷"
  },
  "tectonic plate": {
    "pos": "n.phr.",
    "en_def": "a huge moving piece of the Earth's outer shell",
    "cn_def": "構造板塊"
  },
  "solar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the moon blocks the sun's light from Earth",
    "cn_def": "日蝕"
  },
  "fault zone": {
    "pos": "n.phr.",
    "en_def": "an area with many cracks where rocks move",
    "cn_def": "斷層帶"
  },
  "continental drift": {
    "pos": "n.phr.",
    "en_def": "the slow movement of continents across the Earth",
    "cn_def": "大陸漂移"
  },
  "habitable zone": {
    "pos": "n.phr.",
    "en_def": "the area around a star where water can stay liquid",
    "cn_def": "適居帶"
  },
  "big bang": {
    "pos": "n.phr.",
    "en_def": "the event that most scientists think started the universe",
    "cn_def": "大霹靂"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "hot spring": {
    "pos": "n.phr.",
    "en_def": "a natural pool of water heated underground",
    "cn_def": "溫泉"
  },
  "complexity": {
    "pos": "n.",
    "en_def": "the state of having many connected parts",
    "cn_def": "複雜性"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a huge group of billions of stars",
    "cn_def": "星系"
  },
  "stalagmite": {
    "pos": "n.",
    "en_def": "a rock shape that grows up from the floor of a cave",
    "cn_def": "石筍"
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a statement or proof that something is true",
    "cn_def": "證實"
  },
  "stalactite": {
    "pos": "n.",
    "en_def": "a rock shape that hangs down from the roof of a cave",
    "cn_def": "鐘乳石"
  },
  "eventual": {
    "pos": "adj.",
    "en_def": "happening at the end of a long process",
    "cn_def": "最終的"
  },
  "mathematical": {
    "pos": "adj.",
    "en_def": "related to numbers and calculations",
    "cn_def": "數學的"
  },
  "celestial": {
    "pos": "adj.",
    "en_def": "in or related to the sky or outer space",
    "cn_def": "天體的；天空的"
  },
  "gorge": {
    "pos": "n.",
    "en_def": "a narrow valley with steep rocky walls",
    "cn_def": "峽谷；山峽"
  },
  "resemblance": {
    "pos": "n.",
    "en_def": "the state of looking similar to something",
    "cn_def": "相似"
  },
  "sinkhole": {
    "pos": "n.",
    "en_def": "a hole that suddenly opens in the ground",
    "cn_def": "天坑；地陷"
  }
};

const EXTRA_GLOSSES = {};
