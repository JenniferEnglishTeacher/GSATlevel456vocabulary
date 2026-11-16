// Topic 12 Subunit 4 Quiz Data: Rivers, Landscapes & Deep Time 河流、地貌與地質年代
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S04 - Rivers, Landscapes & Deep Time 河流、地貌與地質年代",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tributary",
    "pos": "n.",
    "cn_def": "支流",
    "en_def": "a small river that flows into a bigger river",
    "sentence": "The small stream behind our school is a {{BLANK}} of the Tamsui River, so rubbish thrown into it can end up in the sea.",
    "cn": "我們學校後面的小溪是淡水河的一條支流，所以丟進去的垃圾最後可能會流到海裡。"
  },
  {
    "word": "meander",
    "pos": "v.",
    "cn_def": "蜿蜒流動",
    "en_def": "to follow a slow, winding course",
    "sentence": "The river {{BLANK}} through the flat farmland, so it takes much longer to reach the sea than a straight river would.",
    "cn": "那條河蜿蜒流過平坦的農田，所以它流到海的時間比一條筆直的河長得多。"
  },
  {
    "word": "floodplain",
    "pos": "n.",
    "cn_def": "氾濫平原",
    "en_def": "flat land next to a river that floods sometimes",
    "sentence": "Farmers like the {{BLANK}} because the soil is very rich, but their fields are often covered with water after typhoons.",
    "cn": "農民喜歡氾濫平原，因為那裡的土壤非常肥沃，但颱風過後他們的田地常常被水淹沒。"
  },
  {
    "word": "waterfall",
    "pos": "n.",
    "cn_def": "瀑布",
    "en_def": "water falling from a high place, such as a cliff",
    "sentence": "We could hear the {{BLANK}} long before we saw it, and the cold spray felt wonderful on such a hot day.",
    "cn": "我們在看到瀑布之前很久就聽到了它的聲音，而在那麼熱的天氣裡，冰涼的水霧讓人覺得很舒服。"
  },
  {
    "word": "rapids",
    "pos": "n.",
    "cn_def": "急流",
    "en_def": "part of a river where water flows fast over rocks",
    "sentence": "Our raft bounced wildly through the {{BLANK}}, and everyone screamed and laughed at the same time.",
    "cn": "我們的橡皮艇在急流中劇烈顛簸，而每個人都同時尖叫又大笑。"
  },
  {
    "word": "oxbow lake",
    "pos": "n.phr.",
    "cn_def": "牛軛湖",
    "en_def": "a curved lake formed when a river changes its course",
    "sentence": "Over many years, the river changed direction and left behind an {{BLANK}}, which is now a home for many birds.",
    "cn": "經過許多年，河流改變了方向，留下了一座牛軛湖，而它現在是許多鳥類的家。"
  },
  {
    "word": "hydrology",
    "pos": "n.",
    "cn_def": "水文學",
    "en_def": "the study of water on and under the Earth's surface",
    "sentence": "Experts in {{BLANK}} studied the river for years, so they could warn the city before dangerous floods arrived.",
    "cn": "水文學專家研究這條河流多年，所以他們能在危險的洪水來臨前向城市發出警告。"
  },
  {
    "word": "river mouth",
    "pos": "n.phr.",
    "cn_def": "河口",
    "en_def": "the place where a river flows into the sea",
    "sentence": "Many birds gather at the {{BLANK}} in winter, because the water there is full of small fish and crabs.",
    "cn": "許多鳥類冬天聚集在河口，因為那裡的水域充滿小魚和螃蟹。"
  },
  {
    "word": "geologic time scale",
    "pos": "n.phr.",
    "cn_def": "地質年代表",
    "en_def": "a system that divides Earth's long history into periods",
    "sentence": "The {{BLANK}} shows that humans appeared very recently, while dinosaurs lived for more than 160 million years.",
    "cn": "地質年代表顯示人類出現得非常晚，而恐龍則存活了超過一億六千萬年。"
  },
  {
    "word": "billion",
    "pos": "n.",
    "cn_def": "十億",
    "en_def": "the number 1,000,000,000",
    "sentence": "Scientists believe the Earth is about 4.5 {{BLANK}} years old, but life on land appeared much later than life in the sea.",
    "cn": "科學家相信地球大約有四十五億年歷史，但陸地上的生命出現得比海洋生命晚得多。"
  },
  {
    "word": "fossil record",
    "pos": "n.phr.",
    "cn_def": "化石紀錄",
    "en_def": "all the fossils found and what they tell us about past life",
    "sentence": "The {{BLANK}} is incomplete, because soft animals rarely leave fossils, so scientists still have many unanswered questions.",
    "cn": "化石紀錄並不完整，因為軟體動物很少留下化石，所以科學家仍有許多未解的問題。"
  },
  {
    "word": "mass extinction",
    "pos": "n.phr.",
    "cn_def": "大滅絕",
    "en_def": "when a very large number of species die out in a short time",
    "sentence": "A {{BLANK}} happened about 66 million years ago, and most scientists think a giant space rock caused it.",
    "cn": "大約六千六百萬年前發生了一次大滅絕，而大多數科學家認為是一顆巨大的太空岩石造成的。"
  },
  {
    "word": "dinosaur",
    "pos": "n.",
    "cn_def": "恐龍",
    "en_def": "a large reptile that lived millions of years ago",
    "sentence": "My nephew loves every {{BLANK}} in the museum, and he can name more kinds than most adults can.",
    "cn": "我的姪子喜愛博物館裡的每一隻恐龍，而且他能說出的種類比大多數大人還多。"
  },
  {
    "word": "asteroid impact",
    "pos": "n.phr.",
    "cn_def": "小行星撞擊",
    "en_def": "when a space rock hits a planet",
    "sentence": "The huge {{BLANK}} threw dust into the sky and blocked sunlight, so many plants and animals could not survive.",
    "cn": "那次巨大的小行星撞擊把塵埃拋向天空並遮蔽陽光，所以許多動植物無法存活。"
  },
  {
    "word": "meteorite",
    "pos": "n.",
    "cn_def": "隕石",
    "en_def": "a piece of rock from space that lands on Earth",
    "sentence": "The museum lets visitors touch a real {{BLANK}}, and children are amazed that it travelled through space for millions of years.",
    "cn": "博物館讓參觀者觸摸一顆真正的隕石，而孩子們很驚訝它在太空中旅行了數百萬年。"
  },
  {
    "word": "glaciation",
    "pos": "n.",
    "cn_def": "冰河作用；冰川期",
    "en_def": "a time when large areas are covered by ice",
    "sentence": "The last {{BLANK}} shaped many valleys in Europe, and the ice left behind lakes that people still visit today.",
    "cn": "最近一次冰河作用塑造了歐洲的許多山谷，而冰留下的湖泊至今仍有人去造訪。"
  },
  {
    "word": "landmass",
    "pos": "n.",
    "cn_def": "陸塊",
    "en_def": "a large area of land, such as a continent",
    "sentence": "Australia is the smallest continental {{BLANK}}, but it still has deserts, rainforests and snowy mountains.",
    "cn": "澳洲是最小的大陸陸塊，但它仍然擁有沙漠、雨林和積雪的山脈。"
  },
  {
    "word": "topography",
    "pos": "n.",
    "cn_def": "地形（起伏）",
    "en_def": "the shape and height of the land in an area",
    "sentence": "Taiwan's {{BLANK}} is very steep, so rivers flow quickly to the sea, and heavy rain often causes landslides.",
    "cn": "臺灣的地形非常陡峭，所以河流很快就流入大海，而且大雨常常造成山崩。"
  },
  {
    "word": "topographic map",
    "pos": "n.phr.",
    "cn_def": "地形圖",
    "en_def": "a map that shows the height and shape of the land",
    "sentence": "Before the hike, our leader studied a {{BLANK}} carefully, because she wanted to avoid the steepest parts of the trail.",
    "cn": "健行前，我們的領隊仔細研究了一張地形圖，因為她想避開步道最陡的部分。"
  },
  {
    "word": "riverbed",
    "pos": "n.",
    "cn_def": "河床",
    "en_def": "the ground at the bottom of a river",
    "sentence": "The {{BLANK}} was completely dry after months without rain, so the children walked across it and collected smooth stones.",
    "cn": "好幾個月沒下雨後，河床完全乾涸了，所以孩子們走過河床並撿拾光滑的石頭。"
  },
  {
    "word": "water cycle",
    "pos": "n.phr.",
    "cn_def": "水循環",
    "en_def": "the movement of water between the sea, air and land",
    "sentence": "In the {{BLANK}}, water rises from the ocean as vapour, and it later falls back to the ground as rain.",
    "cn": "在水循環中，水以水蒸氣的形式從海洋上升，之後又以雨的形式落回地面。"
  },
  {
    "word": "ice core",
    "pos": "n.phr.",
    "cn_def": "冰芯",
    "en_def": "a long tube of ice drilled out to study the past",
    "sentence": "Each {{BLANK}} holds tiny air bubbles from long ago, so scientists can learn what the air was like thousands of years ago.",
    "cn": "每一根冰芯都含有很久以前的微小氣泡，所以科學家可以了解數千年前的空氣是什麼樣子。"
  }
];

const MCQS = [
  {
    "q": "The small stream behind our school is a _____ of the Tamsui River, so rubbish thrown into it can end up in the sea.",
    "options": [
      "tributary",
      "crystal",
      "nebula",
      "consistency"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The river _____ through the flat farmland, so it takes much longer to reach the sea than a straight river would.",
    "options": [
      "radiate",
      "vibrate",
      "theorise",
      "meander"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Farmers like the _____ because the soil is very rich, but their fields are often covered with water after typhoons.",
    "options": [
      "attraction",
      "floodplain",
      "universe",
      "contour"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "We could hear the _____ long before we saw it, and the cold spray felt wonderful on such a hot day.",
    "options": [
      "coherence",
      "calculation",
      "waterfall",
      "culmination"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Our raft bounced wildly through the _____, and everyone screamed and laughed at the same time.",
    "options": [
      "rapids",
      "ravine",
      "shockwave",
      "axis"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Over many years, the river changed direction and left behind an _____, which is now a home for many birds.",
    "options": [
      "active volcano",
      "solar flare",
      "oxbow lake",
      "mission control"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Experts in _____ studied the river for years, so they could warn the city before dangerous floods arrived.",
    "options": [
      "assertion",
      "rotation",
      "quasar",
      "hydrology"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Many birds gather at the _____ in winter, because the water there is full of small fish and crabs.",
    "options": [
      "habitable zone",
      "river mouth",
      "ash cloud",
      "oceanic crust"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The _____ shows that humans appeared very recently, while dinosaurs lived for more than 160 million years.",
    "options": [
      "rock formation",
      "radio telescope",
      "geologic time scale",
      "fault zone"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Scientists believe the Earth is about 4.5 _____ years old, but life on land appeared much later than life in the sea.",
    "options": [
      "planet",
      "billion",
      "deviation",
      "criterion"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The _____ is incomplete, because soft animals rarely leave fossils, so scientists still have many unanswered questions.",
    "options": [
      "fossil record",
      "mission control",
      "white dwarf",
      "black hole"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A _____ happened about 66 million years ago, and most scientists think a giant space rock caused it.",
    "options": [
      "inner core",
      "Milky Way",
      "Kuiper Belt",
      "mass extinction"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "My nephew loves every _____ in the museum, and he can name more kinds than most adults can.",
    "options": [
      "dinosaur",
      "instability",
      "telescope",
      "comet"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The huge _____ threw dust into the sky and blocked sunlight, so many plants and animals could not survive.",
    "options": [
      "the centre of the universe",
      "solar wind",
      "rock formation",
      "asteroid impact"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The museum lets visitors touch a real _____, and children are amazed that it travelled through space for millions of years.",
    "options": [
      "quake",
      "meteorite",
      "foreshock",
      "stalagmite"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The last _____ shaped many valleys in Europe, and the ice left behind lakes that people still visit today.",
    "options": [
      "confirmation",
      "subduction",
      "glaciation",
      "reluctance"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Australia is the smallest continental _____, but it still has deserts, rainforests and snowy mountains.",
    "options": [
      "landmass",
      "seismologist",
      "criterion",
      "speculation"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Taiwan's _____ is very steep, so rivers flow quickly to the sea, and heavy rain often causes landslides.",
    "options": [
      "re-entry",
      "equation",
      "topography",
      "nebula"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Before the hike, our leader studied a _____ carefully, because she wanted to avoid the steepest parts of the trail.",
    "options": [
      "Kuiper Belt",
      "mission control",
      "shooting star",
      "topographic map"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ was completely dry after months without rain, so the children walked across it and collected smooth stones.",
    "options": [
      "conversion",
      "riverbed",
      "precision",
      "spacewalk"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "In the _____, water rises from the ocean as vapour, and it later falls back to the ground as rain.",
    "options": [
      "water cycle",
      "magnetic field",
      "inner core",
      "Kuiper Belt"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Each _____ holds tiny air bubbles from long ago, so scientists can learn what the air was like thousands of years ago.",
    "options": [
      "hot spring",
      "lunar eclipse",
      "ice core",
      "space tourism"
    ],
    "answer": 2,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "tributary": {
    "pos": "n.",
    "en_def": "a small river that flows into a bigger river",
    "cn_def": "支流"
  },
  "meander": {
    "pos": "v.",
    "en_def": "to follow a slow, winding course",
    "cn_def": "蜿蜒流動"
  },
  "floodplain": {
    "pos": "n.",
    "en_def": "flat land next to a river that floods sometimes",
    "cn_def": "氾濫平原"
  },
  "waterfall": {
    "pos": "n.",
    "en_def": "water falling from a high place, such as a cliff",
    "cn_def": "瀑布"
  },
  "rapids": {
    "pos": "n.",
    "en_def": "part of a river where water flows fast over rocks",
    "cn_def": "急流"
  },
  "oxbow lake": {
    "pos": "n.phr.",
    "en_def": "a curved lake formed when a river changes its course",
    "cn_def": "牛軛湖"
  },
  "hydrology": {
    "pos": "n.",
    "en_def": "the study of water on and under the Earth's surface",
    "cn_def": "水文學"
  },
  "river mouth": {
    "pos": "n.phr.",
    "en_def": "the place where a river flows into the sea",
    "cn_def": "河口"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "billion": {
    "pos": "n.",
    "en_def": "the number 1,000,000,000",
    "cn_def": "十億"
  },
  "fossil record": {
    "pos": "n.phr.",
    "en_def": "all the fossils found and what they tell us about past life",
    "cn_def": "化石紀錄"
  },
  "mass extinction": {
    "pos": "n.phr.",
    "en_def": "when a very large number of species die out in a short time",
    "cn_def": "大滅絕"
  },
  "dinosaur": {
    "pos": "n.",
    "en_def": "a large reptile that lived millions of years ago",
    "cn_def": "恐龍"
  },
  "asteroid impact": {
    "pos": "n.phr.",
    "en_def": "when a space rock hits a planet",
    "cn_def": "小行星撞擊"
  },
  "meteorite": {
    "pos": "n.",
    "en_def": "a piece of rock from space that lands on Earth",
    "cn_def": "隕石"
  },
  "glaciation": {
    "pos": "n.",
    "en_def": "a time when large areas are covered by ice",
    "cn_def": "冰河作用；冰川期"
  },
  "landmass": {
    "pos": "n.",
    "en_def": "a large area of land, such as a continent",
    "cn_def": "陸塊"
  },
  "topography": {
    "pos": "n.",
    "en_def": "the shape and height of the land in an area",
    "cn_def": "地形（起伏）"
  },
  "topographic map": {
    "pos": "n.phr.",
    "en_def": "a map that shows the height and shape of the land",
    "cn_def": "地形圖"
  },
  "riverbed": {
    "pos": "n.",
    "en_def": "the ground at the bottom of a river",
    "cn_def": "河床"
  },
  "water cycle": {
    "pos": "n.phr.",
    "en_def": "the movement of water between the sea, air and land",
    "cn_def": "水循環"
  },
  "ice core": {
    "pos": "n.phr.",
    "en_def": "a long tube of ice drilled out to study the past",
    "cn_def": "冰芯"
  },
  "crystal": {
    "pos": "n.",
    "en_def": "a solid with a regular shape and flat sides",
    "cn_def": "晶體；水晶"
  },
  "nebula": {
    "pos": "n.",
    "en_def": "a huge cloud of gas and dust in space",
    "cn_def": "星雲"
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always behaving or performing in the same way",
    "cn_def": "一致性"
  },
  "radiate": {
    "pos": "v.",
    "en_def": "to send out heat or light in all directions",
    "cn_def": "散發；輻射"
  },
  "vibrate": {
    "pos": "v.",
    "en_def": "to shake with small fast movements",
    "cn_def": "震動"
  },
  "theorise": {
    "pos": "v.",
    "en_def": "to form an idea to explain something",
    "cn_def": "建立理論；推論"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a force that pulls things toward each other",
    "cn_def": "吸引力"
  },
  "universe": {
    "pos": "n.",
    "en_def": "everything that exists, including all stars and space",
    "cn_def": "宇宙"
  },
  "contour": {
    "pos": "n.",
    "en_def": "the outline or shape of something",
    "cn_def": "輪廓"
  },
  "coherence": {
    "pos": "n.",
    "en_def": "the quality of being logical and well organised",
    "cn_def": "連貫性"
  },
  "calculation": {
    "pos": "n.",
    "en_def": "the process of using numbers to find an answer",
    "cn_def": "計算"
  },
  "culmination": {
    "pos": "n.",
    "en_def": "the final result of a long process",
    "cn_def": "頂點；成果"
  },
  "ravine": {
    "pos": "n.",
    "en_def": "a deep narrow valley with steep sides",
    "cn_def": "深谷；溝壑"
  },
  "shockwave": {
    "pos": "n.",
    "en_def": "a strong wave of energy that travels through the ground or air",
    "cn_def": "震波"
  },
  "axis": {
    "pos": "n.",
    "en_def": "an imaginary line that a planet spins around",
    "cn_def": "地軸；軸"
  },
  "active volcano": {
    "pos": "n.phr.",
    "en_def": "a volcano that has erupted recently or may erupt soon",
    "cn_def": "活火山"
  },
  "solar flare": {
    "pos": "n.phr.",
    "en_def": "a sudden burst of energy from the sun",
    "cn_def": "太陽閃焰"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "assertion": {
    "pos": "n.",
    "en_def": "a strong statement that something is true",
    "cn_def": "主張；斷言"
  },
  "rotation": {
    "pos": "n.",
    "en_def": "the act of spinning around a centre",
    "cn_def": "自轉"
  },
  "quasar": {
    "pos": "n.",
    "en_def": "an extremely bright and distant object powered by a black hole",
    "cn_def": "類星體"
  },
  "habitable zone": {
    "pos": "n.phr.",
    "en_def": "the area around a star where water can stay liquid",
    "cn_def": "適居帶"
  },
  "ash cloud": {
    "pos": "n.phr.",
    "en_def": "a huge cloud of tiny rock pieces from a volcano",
    "cn_def": "火山灰雲"
  },
  "oceanic crust": {
    "pos": "n.phr.",
    "en_def": "the thin, heavy crust under the oceans",
    "cn_def": "海洋地殼"
  },
  "rock formation": {
    "pos": "n.phr.",
    "en_def": "a natural shape made of rock",
    "cn_def": "岩石地形；奇岩"
  },
  "radio telescope": {
    "pos": "n.phr.",
    "en_def": "a telescope that collects radio waves from space",
    "cn_def": "電波望遠鏡"
  },
  "fault zone": {
    "pos": "n.phr.",
    "en_def": "an area with many cracks where rocks move",
    "cn_def": "斷層帶"
  },
  "planet": {
    "pos": "n.",
    "en_def": "a large round object that moves around a star",
    "cn_def": "行星"
  },
  "deviation": {
    "pos": "n.",
    "en_def": "a change from the usual or expected path",
    "cn_def": "偏離；偏差"
  },
  "criterion": {
    "pos": "n.",
    "en_def": "a standard used to judge something",
    "cn_def": "標準；準則"
  },
  "white dwarf": {
    "pos": "n.phr.",
    "en_def": "a small, hot, dense star near the end of its life",
    "cn_def": "白矮星"
  },
  "black hole": {
    "pos": "n.phr.",
    "en_def": "an area in space where gravity is so strong that light cannot escape",
    "cn_def": "黑洞"
  },
  "inner core": {
    "pos": "n.phr.",
    "en_def": "the solid metal ball at the very centre of the Earth",
    "cn_def": "內核"
  },
  "milky way": {
    "pos": "n.phr.",
    "en_def": "the galaxy that contains our solar system",
    "cn_def": "銀河"
  },
  "kuiper belt": {
    "pos": "n.phr.",
    "en_def": "an area of icy objects beyond Neptune",
    "cn_def": "古柏帶"
  },
  "instability": {
    "pos": "n.",
    "en_def": "the state of being likely to change or fall",
    "cn_def": "不穩定"
  },
  "telescope": {
    "pos": "n.",
    "en_def": "a tool that makes faraway objects look closer",
    "cn_def": "望遠鏡"
  },
  "comet": {
    "pos": "n.",
    "en_def": "an icy object with a bright tail that travels around the sun",
    "cn_def": "彗星"
  },
  "the centre of the universe": {
    "pos": "n.phr.",
    "en_def": "the most important person or thing (often used critically)",
    "cn_def": "宇宙的中心；自以為最重要"
  },
  "solar wind": {
    "pos": "n.phr.",
    "en_def": "a stream of particles flowing out from the sun",
    "cn_def": "太陽風"
  },
  "quake": {
    "pos": "n.",
    "en_def": "an informal word for an earthquake",
    "cn_def": "地震（口語）"
  },
  "foreshock": {
    "pos": "n.",
    "en_def": "a smaller earthquake that comes before a bigger one",
    "cn_def": "前震"
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
  "subduction": {
    "pos": "n.",
    "en_def": "when one plate slides under another plate",
    "cn_def": "隱沒作用"
  },
  "reluctance": {
    "pos": "n.",
    "en_def": "not wanting to do something",
    "cn_def": "不情願"
  },
  "seismologist": {
    "pos": "n.",
    "en_def": "a scientist who studies earthquakes",
    "cn_def": "地震學家"
  },
  "speculation": {
    "pos": "n.",
    "en_def": "guesses made without enough information",
    "cn_def": "推測；臆測"
  },
  "re-entry": {
    "pos": "n.",
    "en_def": "the return of a spacecraft into the Earth's atmosphere",
    "cn_def": "重返大氣層"
  },
  "equation": {
    "pos": "n.",
    "en_def": "a mathematical statement that two things are equal",
    "cn_def": "方程式"
  },
  "shooting star": {
    "pos": "n.phr.",
    "en_def": "an everyday name for a meteor",
    "cn_def": "流星（口語）"
  },
  "conversion": {
    "pos": "n.",
    "en_def": "the act of changing something into another form",
    "cn_def": "轉換"
  },
  "precision": {
    "pos": "n.",
    "en_def": "the quality of being very exact",
    "cn_def": "精確"
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
  "hot spring": {
    "pos": "n.phr.",
    "en_def": "a natural pool of water heated underground",
    "cn_def": "溫泉"
  },
  "lunar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the Earth's shadow falls on the moon",
    "cn_def": "月蝕"
  },
  "space tourism": {
    "pos": "n.phr.",
    "en_def": "travelling to space for fun as a paying passenger",
    "cn_def": "太空旅遊"
  }
};

const EXTRA_GLOSSES = {};
