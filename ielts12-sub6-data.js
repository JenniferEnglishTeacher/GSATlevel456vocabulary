// Topic 12 Subunit 6 Quiz Data: Stars, Galaxies & the Universe 恆星、星系與宇宙
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S06 - Stars, Galaxies & the Universe 恆星、星系與宇宙",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "star",
    "pos": "n.",
    "cn_def": "恆星",
    "en_def": "a huge ball of burning gas in space, like the sun",
    "sentence": "The sun is actually an ordinary {{BLANK}}, but it looks much bigger and brighter because it is so close to us.",
    "cn": "太陽其實是一顆普通的恆星，但因為它離我們非常近，所以看起來大得多也亮得多。"
  },
  {
    "word": "galaxy",
    "pos": "n.",
    "cn_def": "星系",
    "en_def": "a huge group of billions of stars",
    "sentence": "Our {{BLANK}} contains hundreds of billions of stars, and astronomers think there are billions of other galaxies too.",
    "cn": "我們的星系包含數千億顆恆星，而天文學家認為還有數十億個其他星系。"
  },
  {
    "word": "Milky Way",
    "pos": "n.phr.",
    "cn_def": "銀河",
    "en_def": "the galaxy that contains our solar system",
    "sentence": "On a clear night in the mountains, you can see the {{BLANK}} as a bright band across the sky, but it is invisible in the city.",
    "cn": "在山上晴朗的夜晚，你可以看到銀河像一條明亮的光帶橫跨天空，但在城市裡卻看不見。"
  },
  {
    "word": "constellation",
    "pos": "n.",
    "cn_def": "星座",
    "en_def": "a group of stars that forms a pattern",
    "sentence": "Orion is an easy {{BLANK}} to find in winter, because three bright stars form his belt in a straight line.",
    "cn": "獵戶座是冬天很容易找到的星座，因為三顆明亮的星星排成一直線構成他的腰帶。"
  },
  {
    "word": "nebula",
    "pos": "n.",
    "cn_def": "星雲",
    "en_def": "a huge cloud of gas and dust in space",
    "sentence": "New stars are born inside a {{BLANK}}, and space telescopes have taken amazing colourful photos of these clouds.",
    "cn": "新的恆星在星雲中誕生，而太空望遠鏡已經拍下這些雲氣令人驚嘆的彩色照片。"
  },
  {
    "word": "supernova",
    "pos": "n.",
    "cn_def": "超新星",
    "en_def": "the huge explosion of a dying star",
    "sentence": "When a giant star dies in a {{BLANK}}, it can shine brighter than a whole galaxy for several weeks.",
    "cn": "當一顆巨大的恆星在超新星爆炸中死亡時，它可以在幾週內比整個星系還亮。"
  },
  {
    "word": "black hole",
    "pos": "n.phr.",
    "cn_def": "黑洞",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "sentence": "Nothing can escape from a {{BLANK}}, so scientists could not photograph one directly until 2019.",
    "cn": "沒有任何東西能逃離黑洞，所以科學家直到2019年才能直接拍攝到一個黑洞。"
  },
  {
    "word": "neutron star",
    "pos": "n.phr.",
    "cn_def": "中子星",
    "en_def": "a very small, very heavy dead star",
    "sentence": "A {{BLANK}} is only about twenty kilometres wide, but a single spoonful of it would weigh more than a mountain.",
    "cn": "中子星只有大約二十公里寬，但它的一小匙物質就比一座山還重。"
  },
  {
    "word": "red giant",
    "pos": "n.phr.",
    "cn_def": "紅巨星",
    "en_def": "a large, old star that has grown cooler and redder",
    "sentence": "In about five billion years, the sun will become a {{BLANK}}, and it may grow big enough to swallow the Earth.",
    "cn": "大約五十億年後，太陽將變成一顆紅巨星，而且它可能會膨脹到足以吞噬地球。"
  },
  {
    "word": "white dwarf",
    "pos": "n.phr.",
    "cn_def": "白矮星",
    "en_def": "a small, hot, dense star near the end of its life",
    "sentence": "After it stops burning fuel, the sun will shrink into a {{BLANK}}, and it will slowly cool down for billions of years.",
    "cn": "停止燃燒燃料後，太陽會縮小成一顆白矮星，而它會在數十億年間慢慢冷卻。"
  },
  {
    "word": "light-year",
    "pos": "n.",
    "cn_def": "光年",
    "en_def": "the distance light travels in one year",
    "sentence": "The nearest star is over four {{BLANK}} away, so even our fastest spacecraft would need thousands of years to get there.",
    "cn": "最近的恆星距離我們超過四光年，所以即使是我們最快的太空船也需要數千年才能抵達。"
  },
  {
    "word": "astronomer",
    "pos": "n.",
    "cn_def": "天文學家",
    "en_def": "a scientist who studies stars and planets",
    "sentence": "The {{BLANK}} stayed awake all night at the observatory, and she finally spotted the faint comet just before dawn.",
    "cn": "那位天文學家在天文臺整夜沒睡，而她終於在黎明前發現了那顆暗淡的彗星。"
  },
  {
    "word": "astrophysics",
    "pos": "n.",
    "cn_def": "天體物理學",
    "en_def": "the science of how stars and galaxies work",
    "sentence": "He wants to study {{BLANK}} at university, because he has loved reading about black holes since he was a child.",
    "cn": "他想在大學念天體物理學，因為他從小就喜歡閱讀關於黑洞的資料。"
  },
  {
    "word": "cosmos",
    "pos": "n.",
    "cn_def": "宇宙",
    "en_def": "the whole universe, seen as an ordered system",
    "sentence": "Looking at the night sky makes me feel tiny, but it also makes me curious about our place in the {{BLANK}}.",
    "cn": "仰望夜空讓我覺得自己很渺小，但也讓我對我們在宇宙中的位置感到好奇。"
  },
  {
    "word": "cosmic",
    "pos": "adj.",
    "cn_def": "宇宙的",
    "en_def": "related to the universe or outer space",
    "sentence": "Astronauts on long missions face {{BLANK}} rays from space, so engineers design special shields for their spacecraft.",
    "cn": "執行長期任務的太空人會面臨來自太空的宇宙射線，所以工程師為他們的太空船設計特殊的防護罩。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙",
    "en_def": "everything that exists, including all stars and space",
    "sentence": "The {{BLANK}} is about 13.8 billion years old, and it is still getting bigger every second.",
    "cn": "宇宙大約有一百三十八億年歷史，而且它每一秒都還在變大。"
  },
  {
    "word": "Big Bang",
    "pos": "n.phr.",
    "cn_def": "大霹靂",
    "en_def": "the event that most scientists think started the universe",
    "sentence": "Most scientists believe the universe began with the {{BLANK}}, although nobody knows what existed before it.",
    "cn": "大多數科學家相信宇宙起源於大霹靂，雖然沒有人知道在那之前存在著什麼。"
  },
  {
    "word": "dark matter",
    "pos": "n.phr.",
    "cn_def": "暗物質",
    "en_def": "invisible material that we know exists because of its gravity",
    "sentence": "We cannot see {{BLANK}}, but scientists know it is there because it pulls on stars and galaxies.",
    "cn": "我們看不見暗物質，但科學家知道它存在，因為它會拉扯恆星和星系。"
  },
  {
    "word": "dark energy",
    "pos": "n.phr.",
    "cn_def": "暗能量",
    "en_def": "a mysterious force that makes the universe expand faster",
    "sentence": "{{BLANK}} is pushing galaxies apart faster and faster, but nobody yet understands what it really is.",
    "cn": "暗能量正把星系推得越來越快地分開，但至今還沒有人了解它到底是什麼。"
  },
  {
    "word": "observatory",
    "pos": "n.",
    "cn_def": "天文臺",
    "en_def": "a building with large telescopes for watching the sky",
    "sentence": "The {{BLANK}} is built on the top of a high mountain, because the air there is clear and there is very little light pollution.",
    "cn": "那座天文臺建在高山頂上，因為那裡空氣清澈而且光害很少。"
  },
  {
    "word": "telescope",
    "pos": "n.",
    "cn_def": "望遠鏡",
    "en_def": "a tool that makes faraway objects look closer",
    "sentence": "I got a small {{BLANK}} for my birthday, and now I go up to the roof every clear night to look at the moon.",
    "cn": "我生日時收到一架小望遠鏡，而現在每個晴朗的夜晚我都會到屋頂上看月亮。"
  },
  {
    "word": "space telescope",
    "pos": "n.phr.",
    "cn_def": "太空望遠鏡",
    "en_def": "a telescope that orbits above the Earth's atmosphere",
    "sentence": "A {{BLANK}} takes much clearer pictures than one on the ground, because the air does not blur its view.",
    "cn": "太空望遠鏡拍的照片比地面上的清晰得多，因為空氣不會讓它的視野變模糊。"
  },
  {
    "word": "exoplanet",
    "pos": "n.",
    "cn_def": "系外行星",
    "en_def": "a planet that moves around a star other than the sun",
    "sentence": "Astronomers have found thousands of {{BLANK}}, and a few of them might have the right temperature for liquid water.",
    "cn": "天文學家已經發現了數千顆系外行星，而其中少數可能有適合液態水存在的溫度。"
  },
  {
    "word": "habitable zone",
    "pos": "n.phr.",
    "cn_def": "適居帶",
    "en_def": "the area around a star where water can stay liquid",
    "sentence": "Earth lies in the sun's {{BLANK}}, so it is neither too hot nor too cold for oceans to exist.",
    "cn": "地球位於太陽的適居帶內，所以對海洋的存在而言既不太熱也不太冷。"
  },
  {
    "word": "interstellar",
    "pos": "adj.",
    "cn_def": "星際的",
    "en_def": "between the stars",
    "sentence": "Two spacecraft launched in the 1970s have now entered {{BLANK}} space, but they still send weak signals back to Earth.",
    "cn": "1970年代發射的兩艘太空船現在已經進入星際空間，但它們仍然把微弱的訊號傳回地球。"
  },
  {
    "word": "celestial",
    "pos": "adj.",
    "cn_def": "天體的；天空的",
    "en_def": "in or related to the sky or outer space",
    "sentence": "Ancient sailors used {{BLANK}} objects like the stars to find their way, because they had no maps or GPS.",
    "cn": "古代水手利用星星之類的天體來辨別方向，因為他們沒有地圖或衛星定位。"
  },
  {
    "word": "stargazing",
    "pos": "n.",
    "cn_def": "觀星",
    "en_def": "the activity of looking at the stars",
    "sentence": "{{BLANK}} is popular in Hehuanshan, so on weekends many families drive up the mountain with blankets and hot drinks.",
    "cn": "在合歡山觀星很受歡迎，所以每到週末許多家庭會帶著毯子和熱飲開車上山。"
  },
  {
    "word": "quasar",
    "pos": "n.",
    "cn_def": "類星體",
    "en_def": "an extremely bright and distant object powered by a black hole",
    "sentence": "A {{BLANK}} can be brighter than a thousand galaxies, but it looks like a faint dot because it is so far away.",
    "cn": "一個類星體可能比一千個星系還亮，但因為它非常遙遠，所以看起來只是一個暗淡的小點。"
  },
  {
    "word": "radio telescope",
    "pos": "n.phr.",
    "cn_def": "電波望遠鏡",
    "en_def": "a telescope that collects radio waves from space",
    "sentence": "China built a huge {{BLANK}} in a mountain valley, and it listens for faint signals from distant stars.",
    "cn": "中國在一處山谷中建造了一座巨大的電波望遠鏡，而它聆聽來自遙遠恆星的微弱訊號。"
  },
  {
    "word": "star cluster",
    "pos": "n.phr.",
    "cn_def": "星團",
    "en_def": "a group of stars that are close together",
    "sentence": "The Pleiades is a beautiful {{BLANK}}, and on a dark night you can see six or seven of its stars without a telescope.",
    "cn": "昴宿星團是一個美麗的星團，而在黑暗的夜晚不用望遠鏡就能看到其中六、七顆星。"
  }
];

const MCQS = [
  {
    "q": "The sun is actually an ordinary _____, but it looks much bigger and brighter because it is so close to us.",
    "options": [
      "star",
      "cavern",
      "interpretation",
      "assertion"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our _____ contains hundreds of billions of stars, and astronomers think there are billions of other galaxies too.",
    "options": [
      "contingency",
      "durability",
      "galaxy",
      "dominance"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "On a clear night in the mountains, you can see the _____ as a bright band across the sky, but it is invisible in the city.",
    "options": [
      "oxbow lake",
      "sedimentary rock",
      "igneous rock",
      "Milky Way"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Orion is an easy _____ to find in winter, because three bright stars form his belt in a straight line.",
    "options": [
      "alignment",
      "constellation",
      "deviation",
      "inference"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "New stars are born inside a _____, and space telescopes have taken amazing colourful photos of these clouds.",
    "options": [
      "crust",
      "durability",
      "nebula",
      "eruption"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "When a giant star dies in a _____, it can shine brighter than a whole galaxy for several weeks.",
    "options": [
      "supernova",
      "lander",
      "amplitude",
      "countdown"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Nothing can escape from a _____, so scientists could not photograph one directly until 2019.",
    "options": [
      "gas giant",
      "ice core",
      "fault zone",
      "black hole"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "A _____ is only about twenty kilometres wide, but a single spoonful of it would weigh more than a mountain.",
    "options": [
      "mass extinction",
      "neutron star",
      "moon landing",
      "heat shield"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "In about five billion years, the sun will become a _____, and it may grow big enough to swallow the Earth.",
    "options": [
      "extinct volcano",
      "space probe",
      "red giant",
      "river mouth"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "After it stops burning fuel, the sun will shrink into a _____, and it will slowly cool down for billions of years.",
    "options": [
      "white dwarf",
      "zero gravity",
      "asteroid impact",
      "convection current"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The nearest star is over four _____ away, so even our fastest spacecraft would need thousands of years to get there.",
    "options": [
      "geophysicist",
      "Pluto",
      "similarity",
      "light-year"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The _____ stayed awake all night at the observatory, and she finally spotted the faint comet just before dawn.",
    "options": [
      "meteor",
      "astronomer",
      "Mars",
      "volcano"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "He wants to study _____ at university, because he has loved reading about black holes since he was a child.",
    "options": [
      "landmass",
      "geophysicist",
      "astrophysics",
      "subduction"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Looking at the night sky makes me feel tiny, but it also makes me curious about our place in the _____.",
    "options": [
      "crescent",
      "cosmos",
      "asthenosphere",
      "geophysicist"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Astronauts on long missions face _____ rays from space, so engineers design special shields for their spacecraft.",
    "options": [
      "geological",
      "intangible",
      "solid",
      "cosmic"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The _____ is about 13.8 billion years old, and it is still getting bigger every second.",
    "options": [
      "universe",
      "coherence",
      "rocket",
      "spacewalk"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Most scientists believe the universe began with the _____, although nobody knows what existed before it.",
    "options": [
      "magnetic field",
      "extinct volcano",
      "Big Bang",
      "asteroid impact"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "We cannot see _____, but scientists know it is there because it pulls on stars and galaxies.",
    "options": [
      "sedimentary rock",
      "dark matter",
      "fault line",
      "active volcano"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "_____ is pushing galaxies apart faster and faster, but nobody yet understands what it really is.",
    "options": [
      "dark energy",
      "solar system",
      "asteroid impact",
      "rift valley"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The _____ is built on the top of a high mountain, because the air there is clear and there is very little light pollution.",
    "options": [
      "seismograph",
      "lithosphere",
      "crescent",
      "observatory"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "I got a small _____ for my birthday, and now I go up to the roof every clear night to look at the moon.",
    "options": [
      "presence",
      "sandstone",
      "telescope",
      "formation"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "A _____ takes much clearer pictures than one on the ground, because the air does not blur its view.",
    "options": [
      "space telescope",
      "rock cycle",
      "evacuation drill",
      "active volcano"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Astronomers have found thousands of _____, and a few of them might have the right temperature for liquid water.",
    "options": [
      "weathering",
      "assertion",
      "alignment",
      "exoplanet"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Earth lies in the sun's _____, so it is neither too hot nor too cold for oceans to exist.",
    "options": [
      "asteroid impact",
      "habitable zone",
      "meteor shower",
      "full moon"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Two spacecraft launched in the 1970s have now entered _____ space, but they still send weak signals back to Earth.",
    "options": [
      "molecular",
      "demonstrable",
      "interstellar",
      "contradictory"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Ancient sailors used _____ objects like the stars to find their way, because they had no maps or GPS.",
    "options": [
      "microscopic",
      "celestial",
      "occasional",
      "stationary"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "_____ is popular in Hehuanshan, so on weekends many families drive up the mountain with blankets and hot drinks.",
    "options": [
      "aurora",
      "reluctance",
      "contribution",
      "stargazing"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "A _____ can be brighter than a thousand galaxies, but it looks like a faint dot because it is so far away.",
    "options": [
      "quasar",
      "conception",
      "spacewalk",
      "formation"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "China built a huge _____ in a mountain valley, and it listens for faint signals from distant stars.",
    "options": [
      "continental crust",
      "geologic time scale",
      "radio telescope",
      "active volcano"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The Pleiades is a beautiful _____, and on a dark night you can see six or seven of its stars without a telescope.",
    "options": [
      "reusable rocket",
      "geologic time scale",
      "lunar eclipse",
      "star cluster"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "star": {
    "pos": "n.",
    "en_def": "a huge ball of burning gas in space, like the sun",
    "cn_def": "恆星"
  },
  "galaxy": {
    "pos": "n.",
    "en_def": "a huge group of billions of stars",
    "cn_def": "星系"
  },
  "milky way": {
    "pos": "n.phr.",
    "en_def": "the galaxy that contains our solar system",
    "cn_def": "銀河"
  },
  "constellation": {
    "pos": "n.",
    "en_def": "a group of stars that forms a pattern",
    "cn_def": "星座"
  },
  "nebula": {
    "pos": "n.",
    "en_def": "a huge cloud of gas and dust in space",
    "cn_def": "星雲"
  },
  "supernova": {
    "pos": "n.",
    "en_def": "the huge explosion of a dying star",
    "cn_def": "超新星"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "cn_def": "黑洞"
  },
  "neutron star": {
    "pos": "n.phr.",
    "en_def": "a very small, very heavy dead star",
    "cn_def": "中子星"
  },
  "red giant": {
    "pos": "n.phr.",
    "en_def": "a large, old star that has grown cooler and redder",
    "cn_def": "紅巨星"
  },
  "white dwarf": {
    "pos": "n.phr.",
    "en_def": "a small, hot, dense star near the end of its life",
    "cn_def": "白矮星"
  },
  "light-year": {
    "pos": "n.",
    "en_def": "the distance light travels in one year",
    "cn_def": "光年"
  },
  "astronomer": {
    "pos": "n.",
    "en_def": "a scientist who studies stars and planets",
    "cn_def": "天文學家"
  },
  "astrophysics": {
    "pos": "n.",
    "en_def": "the science of how stars and galaxies work",
    "cn_def": "天體物理學"
  },
  "cosmos": {
    "pos": "n.",
    "en_def": "the whole universe, seen as an ordered system",
    "cn_def": "宇宙"
  },
  "cosmic": {
    "pos": "adj.",
    "en_def": "related to the universe or outer space",
    "cn_def": "宇宙的"
  },
  "universe": {
    "pos": "n.",
    "en_def": "everything that exists, including all stars and space",
    "cn_def": "宇宙"
  },
  "big bang": {
    "pos": "n.phr.",
    "en_def": "the event that most scientists think started the universe",
    "cn_def": "大霹靂"
  },
  "dark matter": {
    "pos": "n.phr.",
    "en_def": "invisible material that we know exists because of its gravity",
    "cn_def": "暗物質"
  },
  "dark energy": {
    "pos": "n.phr.",
    "en_def": "a mysterious force that makes the universe expand faster",
    "cn_def": "暗能量"
  },
  "observatory": {
    "pos": "n.",
    "en_def": "a building with large telescopes for watching the sky",
    "cn_def": "天文臺"
  },
  "telescope": {
    "pos": "n.",
    "en_def": "a tool that makes faraway objects look closer",
    "cn_def": "望遠鏡"
  },
  "space telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that orbits above the Earth's atmosphere",
    "cn_def": "太空望遠鏡"
  },
  "exoplanet": {
    "pos": "n.",
    "en_def": "a planet that moves around a star other than the sun",
    "cn_def": "系外行星"
  },
  "habitable zone": {
    "pos": "n.phr.",
    "en_def": "the area around a star where water can stay liquid",
    "cn_def": "適居帶"
  },
  "interstellar": {
    "pos": "adj.",
    "en_def": "between the stars",
    "cn_def": "星際的"
  },
  "celestial": {
    "pos": "adj.",
    "en_def": "in or related to the sky or outer space",
    "cn_def": "天體的；天空的"
  },
  "stargazing": {
    "pos": "n.",
    "en_def": "the activity of looking at the stars",
    "cn_def": "觀星"
  },
  "quasar": {
    "pos": "n.",
    "en_def": "an extremely bright and distant object powered by a black hole",
    "cn_def": "類星體"
  },
  "radio telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that collects radio waves from space",
    "cn_def": "電波望遠鏡"
  },
  "star cluster": {
    "pos": "n.phr.",
    "en_def": "a group of stars that are close together",
    "cn_def": "星團"
  },
  "cavern": {
    "pos": "n.",
    "en_def": "a large cave",
    "cn_def": "大洞穴"
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation of the meaning of something",
    "cn_def": "解讀；詮釋"
  },
  "assertion": {
    "pos": "n.",
    "en_def": "a strong statement that something is true",
    "cn_def": "主張；斷言"
  },
  "contingency": {
    "pos": "n.",
    "en_def": "a possible future event that you must plan for",
    "cn_def": "意外情況；應變"
  },
  "durability": {
    "pos": "n.",
    "en_def": "the ability to last a long time without breaking",
    "cn_def": "耐用性"
  },
  "dominance": {
    "pos": "n.",
    "en_def": "the state of being the most powerful",
    "cn_def": "主導地位；優勢"
  },
  "oxbow lake": {
    "pos": "n.phr.",
    "en_def": "a curved lake formed when a river changes its course",
    "cn_def": "牛軛湖"
  },
  "sedimentary rock": {
    "pos": "n.phr.",
    "en_def": "rock made from layers of sand, mud or shells pressed together",
    "cn_def": "沉積岩"
  },
  "igneous rock": {
    "pos": "n.phr.",
    "en_def": "rock formed when hot melted rock cools",
    "cn_def": "火成岩"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the arrangement of things in a straight line",
    "cn_def": "排成一直線；對齊"
  },
  "deviation": {
    "pos": "n.",
    "en_def": "a change from the usual or expected path",
    "cn_def": "偏離；偏差"
  },
  "inference": {
    "pos": "n.",
    "en_def": "a conclusion based on evidence",
    "cn_def": "推論；推斷"
  },
  "crust": {
    "pos": "n.",
    "en_def": "the hard outer layer of the Earth",
    "cn_def": "地殼"
  },
  "eruption": {
    "pos": "n.",
    "en_def": "when a volcano suddenly throws out lava, ash and gas",
    "cn_def": "噴發"
  },
  "lander": {
    "pos": "n.",
    "en_def": "a spacecraft designed to land on a planet or moon",
    "cn_def": "登陸器"
  },
  "amplitude": {
    "pos": "n.",
    "en_def": "the size of a wave from its middle to its top",
    "cn_def": "振幅"
  },
  "countdown": {
    "pos": "n.",
    "en_def": "counting backwards to zero before something starts",
    "cn_def": "倒數計時"
  },
  "gas giant": {
    "pos": "n.phr.",
    "en_def": "a huge planet made mostly of gas",
    "cn_def": "氣態巨行星"
  },
  "ice core": {
    "pos": "n.phr.",
    "en_def": "a long tube of ice drilled out to study the past",
    "cn_def": "冰芯"
  },
  "fault zone": {
    "pos": "n.phr.",
    "en_def": "an area with many cracks where rocks move",
    "cn_def": "斷層帶"
  },
  "mass extinction": {
    "pos": "n.phr.",
    "en_def": "when a very large number of species die out in a short time",
    "cn_def": "大滅絕"
  },
  "moon landing": {
    "pos": "n.phr.",
    "en_def": "the event of a spacecraft or people landing on the moon",
    "cn_def": "登月"
  },
  "heat shield": {
    "pos": "n.phr.",
    "en_def": "a cover that protects a spacecraft from extreme heat",
    "cn_def": "隔熱罩"
  },
  "extinct volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that will never erupt again",
    "cn_def": "死火山"
  },
  "space probe": {
    "pos": "n.phr.",
    "en_def": "a robot spacecraft sent to explore space",
    "cn_def": "太空探測器"
  },
  "river mouth": {
    "pos": "n.phr.",
    "en_def": "the place where a river flows into the sea",
    "cn_def": "河口"
  },
  "zero gravity": {
    "pos": "n.phr.",
    "en_def": "a state where things float because they seem to have no weight",
    "cn_def": "零重力"
  },
  "asteroid impact": {
    "pos": "n.phr.",
    "en_def": "when a space rock hits a planet",
    "cn_def": "小行星撞擊"
  },
  "convection current": {
    "pos": "n.phr.",
    "en_def": "a circular flow of heat in a liquid or soft solid",
    "cn_def": "對流"
  },
  "geophysicist": {
    "pos": "n.",
    "en_def": "a scientist who studies the physical processes of the Earth",
    "cn_def": "地球物理學家"
  },
  "pluto": {
    "pos": "n.",
    "en_def": "a small icy dwarf planet far from the sun",
    "cn_def": "冥王星"
  },
  "similarity": {
    "pos": "n.",
    "en_def": "the way in which things are alike",
    "cn_def": "相似之處"
  },
  "meteor": {
    "pos": "n.",
    "en_def": "a piece of space rock that burns up in the sky",
    "cn_def": "流星"
  },
  "mars": {
    "pos": "n.",
    "en_def": "the red planet, fourth from the sun",
    "cn_def": "火星"
  },
  "volcano": {
    "pos": "n.",
    "en_def": "a mountain that can send out hot rock, gas and ash",
    "cn_def": "火山"
  },
  "landmass": {
    "pos": "n.",
    "en_def": "a large area of land, such as a continent",
    "cn_def": "陸塊"
  },
  "subduction": {
    "pos": "n.",
    "en_def": "when one plate slides under another plate",
    "cn_def": "隱沒作用"
  },
  "crescent": {
    "pos": "n.",
    "en_def": "the curved shape of the moon when only a thin part is lit",
    "cn_def": "新月形；彎月"
  },
  "asthenosphere": {
    "pos": "n.",
    "en_def": "the soft, partly melted layer under the lithosphere",
    "cn_def": "軟流圈"
  },
  "geological": {
    "pos": "adj.",
    "en_def": "related to rocks and the history of the Earth",
    "cn_def": "地質的"
  },
  "intangible": {
    "pos": "adj.",
    "en_def": "not physical, but still real",
    "cn_def": "無形的"
  },
  "solid": {
    "pos": "adj.",
    "en_def": "hard and firm, not liquid or gas",
    "cn_def": "固態的"
  },
  "coherence": {
    "pos": "n.",
    "en_def": "the quality of being logical and well organised",
    "cn_def": "連貫性"
  },
  "rocket": {
    "pos": "n.",
    "en_def": "a vehicle pushed upward by burning fuel",
    "cn_def": "火箭"
  },
  "spacewalk": {
    "pos": "n.",
    "en_def": "time an astronaut spends working outside a spacecraft",
    "cn_def": "太空漫步"
  },
  "magnetic field": {
    "pos": "n.phr.",
    "en_def": "the invisible area of magnetic force around the Earth",
    "cn_def": "磁場"
  },
  "fault line": {
    "pos": "n.phr.",
    "en_def": "a long crack in the Earth's crust where rocks move",
    "cn_def": "斷層線"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "solar system": {
    "pos": "n.phr.",
    "en_def": "the sun and all the planets and objects that go around it",
    "cn_def": "太陽系"
  },
  "rift valley": {
    "pos": "n.phr.",
    "en_def": "a long valley formed when the land splits apart",
    "cn_def": "裂谷"
  },
  "seismograph": {
    "pos": "n.",
    "en_def": "a machine that measures and records earthquakes",
    "cn_def": "地震儀"
  },
  "lithosphere": {
    "pos": "n.",
    "en_def": "the rigid outer shell made of crust and upper mantle",
    "cn_def": "岩石圈"
  },
  "presence": {
    "pos": "n.",
    "en_def": "the fact of being in a place",
    "cn_def": "存在"
  },
  "sandstone": {
    "pos": "n.",
    "en_def": "rock made of sand pressed together",
    "cn_def": "砂岩"
  },
  "formation": {
    "pos": "n.",
    "en_def": "the process by which something is made",
    "cn_def": "形成"
  },
  "rock cycle": {
    "pos": "n.phr.",
    "en_def": "the slow process in which rocks change from one type to another",
    "cn_def": "岩石循環"
  },
  "evacuation drill": {
    "pos": "n.phr.",
    "en_def": "a practice of leaving a building quickly in an emergency",
    "cn_def": "疏散演練"
  },
  "weathering": {
    "pos": "n.",
    "en_def": "the breaking down of rock by weather, water or plants",
    "cn_def": "風化作用"
  },
  "meteor shower": {
    "pos": "n.phr.",
    "en_def": "a time when many meteors can be seen in the sky",
    "cn_def": "流星雨"
  },
  "full moon": {
    "pos": "n.phr.",
    "en_def": "the moon when it looks completely round and bright",
    "cn_def": "滿月"
  },
  "molecular": {
    "pos": "adj.",
    "en_def": "related to molecules",
    "cn_def": "分子的"
  },
  "demonstrable": {
    "pos": "adj.",
    "en_def": "able to be shown or proved clearly",
    "cn_def": "可證明的"
  },
  "contradictory": {
    "pos": "adj.",
    "en_def": "disagreeing with each other",
    "cn_def": "互相矛盾的"
  },
  "microscopic": {
    "pos": "adj.",
    "en_def": "so small that it can only be seen with a microscope",
    "cn_def": "微小的；顯微鏡才能看見的"
  },
  "occasional": {
    "pos": "adj.",
    "en_def": "happening sometimes but not often",
    "cn_def": "偶爾的"
  },
  "stationary": {
    "pos": "adj.",
    "en_def": "not moving",
    "cn_def": "靜止的"
  },
  "aurora": {
    "pos": "n.",
    "en_def": "colourful lights in the night sky near the poles",
    "cn_def": "極光"
  },
  "reluctance": {
    "pos": "n.",
    "en_def": "not wanting to do something",
    "cn_def": "不情願"
  },
  "contribution": {
    "pos": "n.",
    "en_def": "something you give or do to help",
    "cn_def": "貢獻"
  },
  "conception": {
    "pos": "n.",
    "en_def": "an idea or understanding of something",
    "cn_def": "概念；觀念"
  },
  "continental crust": {
    "pos": "n.phr.",
    "en_def": "the thick, lighter crust that forms the land",
    "cn_def": "大陸地殼"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "reusable rocket": {
    "pos": "n.phr.",
    "en_def": "a rocket that can be flown more than once",
    "cn_def": "可重複使用火箭"
  },
  "lunar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the Earth's shadow falls on the moon",
    "cn_def": "月蝕"
  }
};

const EXTRA_GLOSSES = {};
