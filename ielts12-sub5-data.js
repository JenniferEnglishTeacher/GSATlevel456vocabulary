// Topic 12 Subunit 5 Quiz Data: The Solar System 太陽系
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S05 - The Solar System 太陽系",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "solar system",
    "pos": "n.phr.",
    "cn_def": "太陽系",
    "en_def": "the sun and all the planets and objects that go around it",
    "sentence": "Our {{BLANK}} has eight planets, but scientists keep discovering new moons and small icy worlds at its edge.",
    "cn": "我們的太陽系有八顆行星，但科學家不斷在它的邊緣發現新的衛星和冰冷的小天體。"
  },
  {
    "word": "planet",
    "pos": "n.",
    "cn_def": "行星",
    "en_def": "a large round object that moves around a star",
    "sentence": "Earth is the only {{BLANK}} that we know has life, so scientists are excited whenever they find water somewhere else.",
    "cn": "地球是我們所知唯一有生命的行星，所以每當科學家在其他地方發現水時都會很興奮。"
  },
  {
    "word": "planetary",
    "pos": "adj.",
    "cn_def": "行星的",
    "en_def": "related to planets",
    "sentence": "She works as a {{BLANK}} scientist, and her team studies the weather on Mars to prepare for future human visits.",
    "cn": "她是一名行星科學家，而她的團隊研究火星上的天氣，為未來人類登陸做準備。"
  },
  {
    "word": "orbit",
    "pos": "v.",
    "cn_def": "繞軌道運行",
    "en_def": "to move around a planet or star in a curved path",
    "sentence": "The International Space Station {{BLANK}} the Earth about sixteen times a day, so the astronauts see many sunrises.",
    "cn": "國際太空站每天繞地球運行大約十六圈，所以太空人能看到許多次日出。"
  },
  {
    "word": "orbital",
    "pos": "adj.",
    "cn_def": "軌道的",
    "en_def": "related to the path of an object around a planet or star",
    "sentence": "Mars has a longer {{BLANK}} path than Earth, so one year on Mars lasts almost twice as long as ours.",
    "cn": "火星的軌道路徑比地球長，所以火星上的一年幾乎是我們的兩倍長。"
  },
  {
    "word": "Venus",
    "pos": "n.",
    "cn_def": "金星",
    "en_def": "the second planet from the sun, very hot and cloudy",
    "sentence": "{{BLANK}} is often called Earth's sister planet because of its size, but its surface is hot enough to melt lead.",
    "cn": "金星因為大小相近常被稱為地球的姊妹星，但它的表面熱到足以熔化鉛。"
  },
  {
    "word": "Mars",
    "pos": "n.",
    "cn_def": "火星",
    "en_def": "the red planet, fourth from the sun",
    "sentence": "Several countries have sent robots to {{BLANK}}, and some companies hope to send people there within the next twenty years.",
    "cn": "好幾個國家已經送機器人到火星，而有些公司希望在未來二十年內把人送到那裡。"
  },
  {
    "word": "Jupiter",
    "pos": "n.",
    "cn_def": "木星",
    "en_def": "the largest planet in our solar system",
    "sentence": "{{BLANK}} is so big that all the other planets could fit inside it, and it has a giant storm that has lasted for centuries.",
    "cn": "木星大到其他所有行星都能裝進去，而且它有一個已經持續了好幾個世紀的巨大風暴。"
  },
  {
    "word": "Saturn",
    "pos": "n.",
    "cn_def": "土星",
    "en_def": "the sixth planet, famous for its rings",
    "sentence": "Through the telescope we could clearly see {{BLANK}} and its beautiful rings, so everyone in the class wanted another look.",
    "cn": "透過望遠鏡我們能清楚看到土星和它美麗的光環，所以班上每個人都想再看一次。"
  },
  {
    "word": "Neptune",
    "pos": "n.",
    "cn_def": "海王星",
    "en_def": "the eighth and farthest planet from the sun",
    "sentence": "{{BLANK}} is so far away that sunlight takes about four hours to reach it, and its winds are the fastest in the solar system.",
    "cn": "海王星遠到陽光要大約四小時才能抵達，而且它的風速是太陽系中最快的。"
  },
  {
    "word": "dwarf planet",
    "pos": "n.phr.",
    "cn_def": "矮行星",
    "en_def": "a small round object that orbits the sun but is not a full planet",
    "sentence": "Pluto is now called a {{BLANK}}, but many people still think of it as the ninth planet because they learned that at school.",
    "cn": "冥王星現在被稱為矮行星，但許多人仍然把它當成第九顆行星，因為他們在學校是這樣學的。"
  },
  {
    "word": "Pluto",
    "pos": "n.",
    "cn_def": "冥王星",
    "en_def": "a small icy dwarf planet far from the sun",
    "sentence": "A spacecraft flew past {{BLANK}} in 2015, and its photos showed a giant heart-shaped area of ice on the surface.",
    "cn": "一艘太空船在2015年飛越冥王星，而它拍的照片顯示表面上有一大片心形的冰原。"
  },
  {
    "word": "moon",
    "pos": "n.",
    "cn_def": "衛星；月球",
    "en_def": "a natural object that moves around a planet",
    "sentence": "Jupiter has dozens of {{BLANK}}, and scientists think one of them may hide a salty ocean under its icy surface.",
    "cn": "木星有數十顆衛星，而科學家認為其中一顆可能在冰冷表面下藏著一片鹹水海洋。"
  },
  {
    "word": "lunar",
    "pos": "adj.",
    "cn_def": "月球的；陰曆的",
    "en_def": "related to the moon",
    "sentence": "Many Asian festivals follow the {{BLANK}} calendar, so the date of Chinese New Year changes every year.",
    "cn": "許多亞洲節慶依循陰曆，所以農曆新年的日期每年都不一樣。"
  },
  {
    "word": "crescent",
    "pos": "n.",
    "cn_def": "新月形；彎月",
    "en_def": "the curved shape of the moon when only a thin part is lit",
    "sentence": "A thin {{BLANK}} appeared in the western sky after sunset, and my grandmother said it looked like a smile.",
    "cn": "日落後西方天空出現一彎細細的新月，而我奶奶說它看起來像一個微笑。"
  },
  {
    "word": "full moon",
    "pos": "n.phr.",
    "cn_def": "滿月",
    "en_def": "the moon when it looks completely round and bright",
    "sentence": "Families in Taiwan eat mooncakes under the {{BLANK}} during the Mid-Autumn Festival, and many also have barbecues outdoors.",
    "cn": "臺灣的家庭在中秋節時於滿月下吃月餅，而且許多人也會在戶外烤肉。"
  },
  {
    "word": "solar eclipse",
    "pos": "n.phr.",
    "cn_def": "日蝕",
    "en_def": "when the moon blocks the sun's light from Earth",
    "sentence": "We watched the {{BLANK}} through special glasses, because looking directly at the sun can damage your eyes.",
    "cn": "我們透過特殊眼鏡觀看日蝕，因為直視太陽會傷害眼睛。"
  },
  {
    "word": "lunar eclipse",
    "pos": "n.phr.",
    "cn_def": "月蝕",
    "en_def": "when the Earth's shadow falls on the moon",
    "sentence": "During the {{BLANK}}, the moon turned a dark red colour, so people called it a \"blood moon\" on social media.",
    "cn": "月蝕期間，月亮變成暗紅色，所以人們在社群媒體上稱它為「血月」。"
  },
  {
    "word": "asteroid",
    "pos": "n.",
    "cn_def": "小行星",
    "en_def": "a large rock that moves around the sun",
    "sentence": "Scientists track every large {{BLANK}} near Earth, so they would have years of warning if one were heading toward us.",
    "cn": "科學家追蹤地球附近每一顆大型小行星，所以如果有一顆朝我們飛來，他們會提前好幾年得到警告。"
  },
  {
    "word": "asteroid belt",
    "pos": "n.phr.",
    "cn_def": "小行星帶",
    "en_def": "the area between Mars and Jupiter with many asteroids",
    "sentence": "The {{BLANK}} lies between Mars and Jupiter, but the rocks are so far apart that spacecraft can pass through safely.",
    "cn": "小行星帶位於火星和木星之間，但那些岩石彼此相距非常遠，所以太空船可以安全通過。"
  },
  {
    "word": "comet",
    "pos": "n.",
    "cn_def": "彗星",
    "en_def": "an icy object with a bright tail that travels around the sun",
    "sentence": "Halley's {{BLANK}} returns about every 76 years, so most people can see it only once in their lifetime.",
    "cn": "哈雷彗星大約每七十六年回來一次，所以大多數人一生中只能看到它一次。"
  },
  {
    "word": "meteor",
    "pos": "n.",
    "cn_def": "流星",
    "en_def": "a piece of space rock that burns up in the sky",
    "sentence": "A bright {{BLANK}} flashed across the sky while we were camping, and everyone quickly made a wish.",
    "cn": "我們露營時一顆明亮的流星劃過天空，而每個人都趕快許了願。"
  },
  {
    "word": "meteor shower",
    "pos": "n.phr.",
    "cn_def": "流星雨",
    "en_def": "a time when many meteors can be seen in the sky",
    "sentence": "We drove up the mountain to watch the {{BLANK}}, because the city lights make it hard to see anything at home.",
    "cn": "我們開車上山去看流星雨，因為城市的燈光讓我們在家裡很難看到任何東西。"
  },
  {
    "word": "shooting star",
    "pos": "n.phr.",
    "cn_def": "流星（口語）",
    "en_def": "an everyday name for a meteor",
    "sentence": "My little sister saw her first {{BLANK}} last night, and she still will not tell anyone what she wished for.",
    "cn": "我妹妹昨晚看到她人生的第一顆流星，而她到現在仍不肯告訴任何人她許了什麼願。"
  },
  {
    "word": "rotation",
    "pos": "n.",
    "cn_def": "自轉",
    "en_def": "the act of spinning around a centre",
    "sentence": "The Earth's {{BLANK}} gives us day and night, and one complete turn takes about twenty-four hours.",
    "cn": "地球的自轉帶給我們白天和黑夜，而轉一整圈大約需要二十四小時。"
  },
  {
    "word": "axis",
    "pos": "n.",
    "cn_def": "地軸；軸",
    "en_def": "an imaginary line that a planet spins around",
    "sentence": "The Earth's {{BLANK}} is tilted, so different parts of the world receive more sunlight at different times of the year.",
    "cn": "地球的地軸是傾斜的，所以世界上不同地區在一年中不同時間接收到較多的陽光。"
  },
  {
    "word": "equator",
    "pos": "n.",
    "cn_def": "赤道",
    "en_def": "an imaginary line around the middle of the Earth",
    "sentence": "Countries near the {{BLANK}} are hot all year round, and they usually have only a wet season and a dry season.",
    "cn": "靠近赤道的國家一年到頭都很熱，而且它們通常只有雨季和乾季。"
  },
  {
    "word": "gas giant",
    "pos": "n.phr.",
    "cn_def": "氣態巨行星",
    "en_def": "a huge planet made mostly of gas",
    "sentence": "Jupiter is a {{BLANK}}, so a spacecraft could never land on it, because it has no solid surface.",
    "cn": "木星是一顆氣態巨行星，所以太空船永遠無法在上面降落，因為它沒有固體表面。"
  },
  {
    "word": "rocky planet",
    "pos": "n.phr.",
    "cn_def": "岩質行星",
    "en_def": "a planet with a hard surface made of rock and metal",
    "sentence": "Earth is a {{BLANK}} like Mars, but our thick atmosphere and liquid water make it much friendlier to life.",
    "cn": "地球和火星一樣是岩質行星，但我們厚厚的大氣層和液態水讓它對生命友善得多。"
  },
  {
    "word": "sunspot",
    "pos": "n.",
    "cn_def": "太陽黑子",
    "en_def": "a dark, cooler area on the surface of the sun",
    "sentence": "Each {{BLANK}} looks small in photos, but many of them are actually larger than the whole Earth.",
    "cn": "每個太陽黑子在照片中看起來很小，但其中許多其實比整個地球還大。"
  },
  {
    "word": "solar flare",
    "pos": "n.phr.",
    "cn_def": "太陽閃焰",
    "en_def": "a sudden burst of energy from the sun",
    "sentence": "A strong {{BLANK}} can disturb radio signals, so airlines sometimes change their routes when one is expected.",
    "cn": "強烈的太陽閃焰會干擾無線電訊號，所以預期會發生時，航空公司有時會更改航線。"
  },
  {
    "word": "solar wind",
    "pos": "n.phr.",
    "cn_def": "太陽風",
    "en_def": "a stream of particles flowing out from the sun",
    "sentence": "The {{BLANK}} never stops blowing, but the Earth's magnetic field protects us from most of its harmful particles.",
    "cn": "太陽風從未停止吹拂，但地球的磁場保護我們免受其中大部分有害粒子的傷害。"
  },
  {
    "word": "aurora",
    "pos": "n.",
    "cn_def": "極光",
    "en_def": "colourful lights in the night sky near the poles",
    "sentence": "We travelled to northern Norway to see the {{BLANK}}, and the green lights dancing across the sky were unforgettable.",
    "cn": "我們到挪威北部去看極光，而在天空中舞動的綠色光芒令人難忘。"
  },
  {
    "word": "Kuiper Belt",
    "pos": "n.phr.",
    "cn_def": "古柏帶",
    "en_def": "an area of icy objects beyond Neptune",
    "sentence": "Pluto lives in the {{BLANK}}, which is a cold region full of icy objects, so it is very hard to study.",
    "cn": "冥王星位於古柏帶，那是一個充滿冰冷天體的寒冷區域，所以很難研究。"
  }
];

const MCQS = [
  {
    "q": "Our _____ has eight planets, but scientists keep discovering new moons and small icy worlds at its edge.",
    "options": [
      "rock cycle",
      "white dwarf",
      "solar system",
      "mountain range"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Earth is the only _____ that we know has life, so scientists are excited whenever they find water somewhere else.",
    "options": [
      "conception",
      "planet",
      "lander",
      "convergence"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "She works as a _____ scientist, and her team studies the weather on Mars to prepare for future human visits.",
    "options": [
      "planetary",
      "exploratory",
      "evolutionary",
      "intriguing"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The International Space Station _____ the Earth about sixteen times a day, so the astronauts see many sunrises.",
    "options": [
      "oscillate",
      "invert",
      "classify",
      "orbit"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mars has a longer _____ path than Earth, so one year on Mars lasts almost twice as long as ours.",
    "options": [
      "limitless",
      "horizontal",
      "orbital",
      "uneven"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "_____ is often called Earth's sister planet because of its size, but its surface is hot enough to melt lead.",
    "options": [
      "compression",
      "Venus",
      "alteration",
      "shockwave"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Several countries have sent robots to _____, and some companies hope to send people there within the next twenty years.",
    "options": [
      "contradiction",
      "glaciation",
      "star",
      "Mars"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "_____ is so big that all the other planets could fit inside it, and it has a giant storm that has lasted for centuries.",
    "options": [
      "Jupiter",
      "incline",
      "verification",
      "aftershock"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Through the telescope we could clearly see _____ and its beautiful rings, so everyone in the class wanted another look.",
    "options": [
      "outcrop",
      "tremor",
      "Saturn",
      "durability"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "_____ is so far away that sunlight takes about four hours to reach it, and its winds are the fastest in the solar system.",
    "options": [
      "deviation",
      "revelation",
      "disposal",
      "Neptune"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Pluto is now called a _____, but many people still think of it as the ninth planet because they learned that at school.",
    "options": [
      "dwarf planet",
      "continental drift",
      "dark matter",
      "space junk"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A spacecraft flew past _____ in 2015, and its photos showed a giant heart-shaped area of ice on the surface.",
    "options": [
      "countdown",
      "Pluto",
      "persistence",
      "deduction"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Jupiter has dozens of _____, and scientists think one of them may hide a salty ocean under its icy surface.",
    "options": [
      "geophysicist",
      "aberration",
      "consistency",
      "moon"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Many Asian festivals follow the _____ calendar, so the date of Chinese New Year changes every year.",
    "options": [
      "lunar",
      "geological",
      "perpendicular",
      "indefinite"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "A thin _____ appeared in the western sky after sunset, and my grandmother said it looked like a smile.",
    "options": [
      "consistency",
      "disposal",
      "crescent",
      "validity"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Families in Taiwan eat mooncakes under the _____ during the Mid-Autumn Festival, and many also have barbecues outdoors.",
    "options": [
      "continental crust",
      "full moon",
      "fault line",
      "ash cloud"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "We watched the _____ through special glasses, because looking directly at the sun can damage your eyes.",
    "options": [
      "active volcano",
      "plate boundary",
      "solar eclipse",
      "space station"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "During the _____, the moon turned a dark red colour, so people called it a \"blood moon\" on social media.",
    "options": [
      "mass extinction",
      "lunar eclipse",
      "mid-ocean ridge",
      "metamorphic rock"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Scientists track every large _____ near Earth, so they would have years of warning if one were heading toward us.",
    "options": [
      "conversion",
      "star",
      "sinkhole",
      "asteroid"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ lies between Mars and Jupiter, but the rocks are so far apart that spacecraft can pass through safely.",
    "options": [
      "asteroid belt",
      "space telescope",
      "white dwarf",
      "mountain range"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Halley's _____ returns about every 76 years, so most people can see it only once in their lifetime.",
    "options": [
      "interpretation",
      "comet",
      "curvature",
      "adjustment"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A bright _____ flashed across the sky while we were camping, and everyone quickly made a wish.",
    "options": [
      "resolution",
      "topography",
      "culmination",
      "meteor"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "We drove up the mountain to watch the _____, because the city lights make it hard to see anything at home.",
    "options": [
      "tectonic plate",
      "plate tectonics",
      "meteor shower",
      "pyroclastic flow"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "My little sister saw her first _____ last night, and she still will not tell anyone what she wished for.",
    "options": [
      "shooting star",
      "asteroid impact",
      "rift valley",
      "neutron star"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The Earth's _____ gives us day and night, and one complete turn takes about twenty-four hours.",
    "options": [
      "precision",
      "rotation",
      "geology",
      "mantle"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The Earth's _____ is tilted, so different parts of the world receive more sunlight at different times of the year.",
    "options": [
      "spacecraft",
      "credibility",
      "axis",
      "observatory"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Countries near the _____ are hot all year round, and they usually have only a wet season and a dry season.",
    "options": [
      "airlock",
      "astrophysics",
      "seismologist",
      "equator"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Jupiter is a _____, so a spacecraft could never land on it, because it has no solid surface.",
    "options": [
      "gas giant",
      "mission control",
      "space agency",
      "sedimentary rock"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Earth is a _____ like Mars, but our thick atmosphere and liquid water make it much friendlier to life.",
    "options": [
      "star cluster",
      "water cycle",
      "active volcano",
      "rocky planet"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Each _____ looks small in photos, but many of them are actually larger than the whole Earth.",
    "options": [
      "sunspot",
      "exploitation",
      "slope",
      "durability"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "A strong _____ can disturb radio signals, so airlines sometimes change their routes when one is expected.",
    "options": [
      "sedimentary rock",
      "solar flare",
      "Richter scale",
      "launch pad"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The _____ never stops blowing, but the Earth's magnetic field protects us from most of its harmful particles.",
    "options": [
      "white dwarf",
      "geologic time scale",
      "solar wind",
      "mountain range"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "We travelled to northern Norway to see the _____, and the green lights dancing across the sky were unforgettable.",
    "options": [
      "aurora",
      "seismologist",
      "propulsion",
      "lithosphere"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Pluto lives in the _____, which is a cold region full of icy objects, so it is very hard to study.",
    "options": [
      "habitable zone",
      "Kuiper Belt",
      "sedimentary rock",
      "oxbow lake"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "solar system": {
    "pos": "n.phr.",
    "en_def": "the sun and all the planets and objects that go around it",
    "cn_def": "太陽系"
  },
  "planet": {
    "pos": "n.",
    "en_def": "a large round object that moves around a star",
    "cn_def": "行星"
  },
  "planetary": {
    "pos": "adj.",
    "en_def": "related to planets",
    "cn_def": "行星的"
  },
  "orbit": {
    "pos": "v.",
    "en_def": "to move around a planet or star in a curved path",
    "cn_def": "繞軌道運行"
  },
  "orbital": {
    "pos": "adj.",
    "en_def": "related to the path of an object around a planet or star",
    "cn_def": "軌道的"
  },
  "venus": {
    "pos": "n.",
    "en_def": "the second planet from the sun, very hot and cloudy",
    "cn_def": "金星"
  },
  "mars": {
    "pos": "n.",
    "en_def": "the red planet, fourth from the sun",
    "cn_def": "火星"
  },
  "jupiter": {
    "pos": "n.",
    "en_def": "the largest planet in our solar system",
    "cn_def": "木星"
  },
  "saturn": {
    "pos": "n.",
    "en_def": "the sixth planet, famous for its rings",
    "cn_def": "土星"
  },
  "neptune": {
    "pos": "n.",
    "en_def": "the eighth and farthest planet from the sun",
    "cn_def": "海王星"
  },
  "dwarf planet": {
    "pos": "n.phr.",
    "en_def": "a small round object that orbits the sun but is not a full planet",
    "cn_def": "矮行星"
  },
  "pluto": {
    "pos": "n.",
    "en_def": "a small icy dwarf planet far from the sun",
    "cn_def": "冥王星"
  },
  "moon": {
    "pos": "n.",
    "en_def": "a natural object that moves around a planet",
    "cn_def": "衛星；月球"
  },
  "lunar": {
    "pos": "adj.",
    "en_def": "related to the moon",
    "cn_def": "月球的；陰曆的"
  },
  "crescent": {
    "pos": "n.",
    "en_def": "the curved shape of the moon when only a thin part is lit",
    "cn_def": "新月形；彎月"
  },
  "full moon": {
    "pos": "n.phr.",
    "en_def": "the moon when it looks completely round and bright",
    "cn_def": "滿月"
  },
  "solar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the moon blocks the sun's light from Earth",
    "cn_def": "日蝕"
  },
  "lunar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the Earth's shadow falls on the moon",
    "cn_def": "月蝕"
  },
  "asteroid": {
    "pos": "n.",
    "en_def": "a large rock that moves around the sun",
    "cn_def": "小行星"
  },
  "asteroid belt": {
    "pos": "n.phr.",
    "en_def": "the area between Mars and Jupiter with many asteroids",
    "cn_def": "小行星帶"
  },
  "comet": {
    "pos": "n.",
    "en_def": "an icy object with a bright tail that travels around the sun",
    "cn_def": "彗星"
  },
  "meteor": {
    "pos": "n.",
    "en_def": "a piece of space rock that burns up in the sky",
    "cn_def": "流星"
  },
  "meteor shower": {
    "pos": "n.phr.",
    "en_def": "a time when many meteors can be seen in the sky",
    "cn_def": "流星雨"
  },
  "shooting star": {
    "pos": "n.phr.",
    "en_def": "an everyday name for a meteor",
    "cn_def": "流星（口語）"
  },
  "rotation": {
    "pos": "n.",
    "en_def": "the act of spinning around a centre",
    "cn_def": "自轉"
  },
  "axis": {
    "pos": "n.",
    "en_def": "an imaginary line that a planet spins around",
    "cn_def": "地軸；軸"
  },
  "equator": {
    "pos": "n.",
    "en_def": "an imaginary line around the middle of the Earth",
    "cn_def": "赤道"
  },
  "gas giant": {
    "pos": "n.phr.",
    "en_def": "a huge planet made mostly of gas",
    "cn_def": "氣態巨行星"
  },
  "rocky planet": {
    "pos": "n.phr.",
    "en_def": "a planet with a hard surface made of rock and metal",
    "cn_def": "岩質行星"
  },
  "sunspot": {
    "pos": "n.",
    "en_def": "a dark, cooler area on the surface of the sun",
    "cn_def": "太陽黑子"
  },
  "solar flare": {
    "pos": "n.phr.",
    "en_def": "a sudden burst of energy from the sun",
    "cn_def": "太陽閃焰"
  },
  "solar wind": {
    "pos": "n.phr.",
    "en_def": "a stream of particles flowing out from the sun",
    "cn_def": "太陽風"
  },
  "aurora": {
    "pos": "n.",
    "en_def": "colourful lights in the night sky near the poles",
    "cn_def": "極光"
  },
  "kuiper belt": {
    "pos": "n.phr.",
    "en_def": "an area of icy objects beyond Neptune",
    "cn_def": "古柏帶"
  },
  "rock cycle": {
    "pos": "n.phr.",
    "en_def": "the slow process in which rocks change from one type to another",
    "cn_def": "岩石循環"
  },
  "white dwarf": {
    "pos": "n.phr.",
    "en_def": "a small, hot, dense star near the end of its life",
    "cn_def": "白矮星"
  },
  "mountain range": {
    "pos": "n.phr.",
    "en_def": "a long line of mountains",
    "cn_def": "山脈"
  },
  "conception": {
    "pos": "n.",
    "en_def": "an idea or understanding of something",
    "cn_def": "概念；觀念"
  },
  "lander": {
    "pos": "n.",
    "en_def": "a spacecraft designed to land on a planet or moon",
    "cn_def": "登陸器"
  },
  "convergence": {
    "pos": "n.",
    "en_def": "the act of moving toward the same point",
    "cn_def": "匯聚；聚合"
  },
  "exploratory": {
    "pos": "adj.",
    "en_def": "done to find out more about something",
    "cn_def": "探索性的；勘查的"
  },
  "evolutionary": {
    "pos": "adj.",
    "en_def": "related to the slow development of living things",
    "cn_def": "演化的"
  },
  "intriguing": {
    "pos": "adj.",
    "en_def": "very interesting because it is unusual",
    "cn_def": "引人入勝的；耐人尋味的"
  },
  "oscillate": {
    "pos": "v.",
    "en_def": "to move backwards and forwards regularly",
    "cn_def": "擺動；振盪"
  },
  "invert": {
    "pos": "v.",
    "en_def": "to turn something upside down",
    "cn_def": "倒轉；顛倒"
  },
  "classify": {
    "pos": "v.",
    "en_def": "to put things into groups by type",
    "cn_def": "分類"
  },
  "limitless": {
    "pos": "adj.",
    "en_def": "without any limit",
    "cn_def": "無限的"
  },
  "horizontal": {
    "pos": "adj.",
    "en_def": "flat and level, parallel to the ground",
    "cn_def": "水平的"
  },
  "uneven": {
    "pos": "adj.",
    "en_def": "not flat or smooth",
    "cn_def": "不平坦的"
  },
  "compression": {
    "pos": "n.",
    "en_def": "the act of pressing something into a smaller space",
    "cn_def": "壓縮"
  },
  "alteration": {
    "pos": "n.",
    "en_def": "a change in something",
    "cn_def": "改變；修改"
  },
  "shockwave": {
    "pos": "n.",
    "en_def": "a strong wave of energy that travels through the ground or air",
    "cn_def": "震波"
  },
  "contradiction": {
    "pos": "n.",
    "en_def": "a situation where two facts cannot both be true",
    "cn_def": "矛盾"
  },
  "glaciation": {
    "pos": "n.",
    "en_def": "a time when large areas are covered by ice",
    "cn_def": "冰河作用；冰川期"
  },
  "star": {
    "pos": "n.",
    "en_def": "a huge ball of burning gas in space, like the sun",
    "cn_def": "恆星"
  },
  "incline": {
    "pos": "n.",
    "en_def": "a slope",
    "cn_def": "斜坡"
  },
  "verification": {
    "pos": "n.",
    "en_def": "the process of checking that something is true",
    "cn_def": "核實；查證"
  },
  "aftershock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that follows a big one",
    "cn_def": "餘震"
  },
  "outcrop": {
    "pos": "n.",
    "en_def": "a large rock that sticks out of the ground",
    "cn_def": "露頭；突出的岩層"
  },
  "tremor": {
    "pos": "n.",
    "en_def": "a small shaking of the ground",
    "cn_def": "輕微震動"
  },
  "durability": {
    "pos": "n.",
    "en_def": "the ability to last a long time without breaking",
    "cn_def": "耐用性"
  },
  "deviation": {
    "pos": "n.",
    "en_def": "a change from the usual or expected path",
    "cn_def": "偏離；偏差"
  },
  "revelation": {
    "pos": "n.",
    "en_def": "a surprising fact that is made known",
    "cn_def": "揭露；驚人的發現"
  },
  "disposal": {
    "pos": "n.",
    "en_def": "the act of getting rid of something",
    "cn_def": "處置；處理"
  },
  "continental drift": {
    "pos": "n.phr.",
    "en_def": "the slow movement of continents across the Earth",
    "cn_def": "大陸漂移"
  },
  "dark matter": {
    "pos": "n.phr.",
    "en_def": "invisible material that we know exists because of its gravity",
    "cn_def": "暗物質"
  },
  "space junk": {
    "pos": "n.phr.",
    "en_def": "old, broken objects left floating in orbit",
    "cn_def": "太空垃圾"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "persistence": {
    "pos": "n.",
    "en_def": "continuing to try even when things are difficult",
    "cn_def": "堅持"
  },
  "deduction": {
    "pos": "n.",
    "en_def": "reaching a conclusion by careful reasoning",
    "cn_def": "推論"
  },
  "geophysicist": {
    "pos": "n.",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "cn_def": "地球物理學家"
  },
  "aberration": {
    "pos": "n.",
    "en_def": "something unusual that is different from what is normal",
    "cn_def": "異常；偏差"
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always behaving or performing in the same way",
    "cn_def": "一致性"
  },
  "geological": {
    "pos": "adj.",
    "en_def": "related to rocks and the history of the Earth",
    "cn_def": "地質的"
  },
  "perpendicular": {
    "pos": "adj.",
    "en_def": "at an angle of 90 degrees to something",
    "cn_def": "垂直的"
  },
  "indefinite": {
    "pos": "adj.",
    "en_def": "without a fixed end or limit",
    "cn_def": "無限期的"
  },
  "validity": {
    "pos": "n.",
    "en_def": "the quality of being correct or acceptable",
    "cn_def": "正確性；有效性"
  },
  "continental crust": {
    "pos": "n.phr.",
    "en_def": "the thick, lighter crust that forms the land",
    "cn_def": "大陸地殼"
  },
  "fault line": {
    "pos": "n.phr.",
    "en_def": "a long crack in the Earth's crust where rocks move",
    "cn_def": "斷層線"
  },
  "ash cloud": {
    "pos": "n.phr.",
    "en_def": "a huge cloud of tiny rock pieces from a volcano",
    "cn_def": "火山灰雲"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "plate boundary": {
    "pos": "n.phr.",
    "en_def": "the edge where two tectonic plates meet",
    "cn_def": "板塊邊界"
  },
  "space station": {
    "pos": "n.phr.",
    "en_def": "a large spacecraft where people live and work in orbit",
    "cn_def": "太空站"
  },
  "mass extinction": {
    "pos": "n.phr.",
    "en_def": "when a very large number of species die out in a short time",
    "cn_def": "大滅絕"
  },
  "mid-ocean ridge": {
    "pos": "n.phr.",
    "en_def": "a long underwater mountain chain where new crust forms",
    "cn_def": "中洋脊"
  },
  "metamorphic rock": {
    "pos": "n.phr.",
    "en_def": "rock changed by heat and pressure",
    "cn_def": "變質岩"
  },
  "conversion": {
    "pos": "n.",
    "en_def": "the act of changing something into another form",
    "cn_def": "轉換"
  },
  "sinkhole": {
    "pos": "n.",
    "en_def": "a hole that suddenly opens in the ground",
    "cn_def": "天坑；地陷"
  },
  "space telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that orbits above the Earth's atmosphere",
    "cn_def": "太空望遠鏡"
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation of the meaning of something",
    "cn_def": "解讀；詮釋"
  },
  "curvature": {
    "pos": "n.",
    "en_def": "the amount that something is curved",
    "cn_def": "曲率；彎曲度"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to improve something",
    "cn_def": "調整"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "the amount of detail an image can show",
    "cn_def": "解析度"
  },
  "topography": {
    "pos": "n.",
    "en_def": "the shape and height of the land in an area",
    "cn_def": "地形（起伏）"
  },
  "culmination": {
    "pos": "n.",
    "en_def": "the final result of a long process",
    "cn_def": "頂點；成果"
  },
  "tectonic plate": {
    "pos": "n.phr.",
    "en_def": "a huge moving piece of the Earth's outer shell",
    "cn_def": "構造板塊"
  },
  "plate tectonics": {
    "pos": "n.phr.",
    "en_def": "the theory that the Earth's surface is made of moving plates",
    "cn_def": "板塊構造論"
  },
  "pyroclastic flow": {
    "pos": "n.phr.",
    "en_def": "a fast, deadly cloud of hot gas and rock",
    "cn_def": "火山碎屑流"
  },
  "asteroid impact": {
    "pos": "n.phr.",
    "en_def": "when a space rock hits a planet",
    "cn_def": "小行星撞擊"
  },
  "rift valley": {
    "pos": "n.phr.",
    "en_def": "a long valley formed when the land splits apart",
    "cn_def": "裂谷"
  },
  "neutron star": {
    "pos": "n.phr.",
    "en_def": "a very small, very heavy dead star",
    "cn_def": "中子星"
  },
  "precision": {
    "pos": "n.",
    "en_def": "the quality of being very exact",
    "cn_def": "精確"
  },
  "geology": {
    "pos": "n.",
    "en_def": "the study of rocks and the Earth's history",
    "cn_def": "地質學"
  },
  "mantle": {
    "pos": "n.",
    "en_def": "the thick hot layer between the crust and the core",
    "cn_def": "地函"
  },
  "spacecraft": {
    "pos": "n.",
    "en_def": "a vehicle that travels in space",
    "cn_def": "太空船"
  },
  "credibility": {
    "pos": "n.",
    "en_def": "the quality of being trusted and believed",
    "cn_def": "可信度"
  },
  "observatory": {
    "pos": "n.",
    "en_def": "a building with large telescopes for watching the sky",
    "cn_def": "天文臺"
  },
  "airlock": {
    "pos": "n.",
    "en_def": "a small sealed room for moving between areas with different air pressure",
    "cn_def": "氣閘艙"
  },
  "astrophysics": {
    "pos": "n.",
    "en_def": "the science of how stars and galaxies work",
    "cn_def": "天體物理學"
  },
  "seismologist": {
    "pos": "n.",
    "en_def": "a scientist who studies earthquakes",
    "cn_def": "地震學家"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "space agency": {
    "pos": "n.phr.",
    "en_def": "a government organisation that runs space programmes",
    "cn_def": "太空總署；太空機構"
  },
  "sedimentary rock": {
    "pos": "n.phr.",
    "en_def": "rock made from layers of sand, mud or shells pressed together",
    "cn_def": "沉積岩"
  },
  "star cluster": {
    "pos": "n.phr.",
    "en_def": "a group of stars that are close together",
    "cn_def": "星團"
  },
  "water cycle": {
    "pos": "n.phr.",
    "en_def": "the movement of water between the sea, air and land",
    "cn_def": "水循環"
  },
  "exploitation": {
    "pos": "n.",
    "en_def": "using something, sometimes unfairly, for profit",
    "cn_def": "開採；剝削"
  },
  "slope": {
    "pos": "n.",
    "en_def": "ground that goes up or down at an angle",
    "cn_def": "斜坡"
  },
  "richter scale": {
    "pos": "n.phr.",
    "en_def": "a scale that measures the strength of an earthquake",
    "cn_def": "芮氏規模"
  },
  "launch pad": {
    "pos": "n.phr.",
    "en_def": "the place from which a rocket takes off",
    "cn_def": "發射臺"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "propulsion": {
    "pos": "n.",
    "en_def": "the force that pushes something forward",
    "cn_def": "推進力；推進系統"
  },
  "lithosphere": {
    "pos": "n.",
    "en_def": "the rigid outer shell made of crust and upper mantle",
    "cn_def": "岩石圈"
  },
  "habitable zone": {
    "pos": "n.phr.",
    "en_def": "the area around a star where water can stay liquid",
    "cn_def": "適居帶"
  },
  "oxbow lake": {
    "pos": "n.phr.",
    "en_def": "a curved lake formed when a river changes its course",
    "cn_def": "牛軛湖"
  }
};

const EXTRA_GLOSSES = {};
