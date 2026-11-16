// Topic 9 Subunit 1 Quiz Data: Steam Power & Engines 蒸汽動力與引擎
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S01 - Steam Power & Engines 蒸汽動力與引擎",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "steam engine",
    "pos": "n.",
    "cn_def": "蒸汽機",
    "en_def": "a machine that uses steam to make power",
    "sentence": "James Watt improved the {{BLANK}} in the 1760s, and factories soon used his design to run their machines.",
    "cn": "詹姆斯·瓦特在1760年代改良了蒸汽機,而工廠很快就用他的設計來運轉機器。"
  },
  {
    "word": "boiler",
    "pos": "n.",
    "cn_def": "鍋爐",
    "en_def": "a large container where water is heated into steam",
    "sentence": "The workers filled the {{BLANK}} with water every morning, but they had to watch it carefully because it could explode.",
    "cn": "工人們每天早上把鍋爐裝滿水,但他們必須小心看著它,因為它可能會爆炸。"
  },
  {
    "word": "piston",
    "pos": "n.",
    "cn_def": "活塞",
    "en_def": "a part that moves up and down inside a tube in an engine",
    "sentence": "The steam pushed the {{BLANK}} up and down, and this movement turned the big wheel of the machine.",
    "cn": "蒸汽推動活塞上下移動,而這個動作帶動了機器的大輪子轉動。"
  },
  {
    "word": "cylinder",
    "pos": "n.",
    "cn_def": "汽缸",
    "en_def": "a tube-shaped part of an engine where a piston moves",
    "sentence": "Our science teacher showed us a model of an old engine, and we could see the piston moving inside the {{BLANK}}.",
    "cn": "我們的自然老師給我們看了一台舊引擎的模型,而我們可以看到活塞在汽缸裡移動。"
  },
  {
    "word": "valve",
    "pos": "n.",
    "cn_def": "閥門",
    "en_def": "a part that opens and closes to control gas or liquid",
    "sentence": "The engineer opened the {{BLANK}} slowly, so the extra steam could escape safely from the old engine.",
    "cn": "工程師慢慢打開閥門,好讓多餘的蒸汽能安全地從舊引擎中排出。"
  },
  {
    "word": "furnace",
    "pos": "n.",
    "cn_def": "熔爐;火爐",
    "en_def": "a very hot enclosed fire used to heat or melt things",
    "sentence": "The men shovelled coal into the {{BLANK}} all day, and their faces were always black with dust.",
    "cn": "那些男人整天把煤鏟進熔爐裡,而他們的臉總是被灰塵弄得黑黑的。"
  },
  {
    "word": "flywheel",
    "pos": "n.",
    "cn_def": "飛輪",
    "en_def": "a heavy wheel that keeps a machine turning smoothly",
    "sentence": "The heavy {{BLANK}} kept spinning after the steam stopped, so the machine did not suddenly jerk to a halt.",
    "cn": "蒸汽停止後,沉重的飛輪仍持續轉動,所以機器不會突然猛地停下來。"
  },
  {
    "word": "crankshaft",
    "pos": "n.",
    "cn_def": "曲軸",
    "en_def": "a rod in an engine that turns up-and-down movement into turning",
    "sentence": "The mechanic said the {{BLANK}} in my grandfather's old car was broken, and fixing it would cost a lot of money.",
    "cn": "技師說我祖父那輛舊車的曲軸壞了,而修理它要花很多錢。"
  },
  {
    "word": "horsepower",
    "pos": "n.",
    "cn_def": "馬力",
    "en_def": "a unit for measuring the power of an engine",
    "sentence": "Early cars had only a few {{BLANK}}, but people were still amazed because they did not need horses at all.",
    "cn": "早期的汽車只有幾匹馬力,但人們仍然很驚訝,因為它們完全不需要馬。"
  },
  {
    "word": "coal-fired",
    "pos": "adj.",
    "cn_def": "燃煤的",
    "en_def": "using coal as the fuel to produce heat or power",
    "sentence": "The town had a large {{BLANK}} power station, and on windy days the smoke drifted over our school.",
    "cn": "這個鎮上有一座大型燃煤發電廠,而在颳風的日子,煙會飄到我們學校上空。"
  },
  {
    "word": "steam-powered",
    "pos": "adj.",
    "cn_def": "蒸汽動力的",
    "en_def": "driven by the power of steam",
    "sentence": "The museum still runs a {{BLANK}} printing machine on weekends, and children love watching it work.",
    "cn": "博物館在週末仍會運轉一台蒸汽動力的印刷機,而孩子們很喜歡看它運作。"
  },
  {
    "word": "condenser",
    "pos": "n.",
    "cn_def": "冷凝器",
    "en_def": "a part that cools steam and turns it back into water",
    "sentence": "Watt added a separate {{BLANK}} to the engine, so it wasted much less coal than older designs.",
    "cn": "瓦特在引擎上加了一個獨立的冷凝器,所以它比舊設計浪費的煤少得多。"
  },
  {
    "word": "chimney",
    "pos": "n.",
    "cn_def": "煙囪",
    "en_def": "a tall pipe that carries smoke up and out of a building",
    "sentence": "Hundreds of tall {{BLANK}} rose above the city, and thick black smoke poured out of them day and night.",
    "cn": "數以百計高高的煙囪聳立在城市上方,而濃濃的黑煙日夜從裡面冒出來。"
  },
  {
    "word": "water wheel",
    "pos": "n.",
    "cn_def": "水車",
    "en_def": "a large wheel turned by flowing water to power machines",
    "sentence": "Before steam engines, many mills were built next to rivers because they needed a {{BLANK}} for power.",
    "cn": "在蒸汽機出現之前,許多磨坊都建在河邊,因為它們需要水車來提供動力。"
  },
  {
    "word": "windmill",
    "pos": "n.",
    "cn_def": "風車",
    "en_def": "a building with sails that the wind turns to make power",
    "sentence": "The old {{BLANK}} on the hill once ground wheat into flour, but now it is a popular spot for photos.",
    "cn": "山丘上那座古老的風車曾經把小麥磨成麵粉,但現在它是熱門的拍照景點。"
  },
  {
    "word": "turbine",
    "pos": "n.",
    "cn_def": "渦輪機",
    "en_def": "a machine with blades that spin to produce power",
    "sentence": "Steam flows through the {{BLANK}} at high speed, and the spinning blades help produce electricity for the city.",
    "cn": "蒸汽高速流過渦輪機,而旋轉的葉片幫助為城市產生電力。"
  },
  {
    "word": "dynamo",
    "pos": "n.",
    "cn_def": "發電機(直流)",
    "en_def": "a machine that turns movement into electricity",
    "sentence": "My bike has a small {{BLANK}} on the front wheel, so the light comes on when I pedal at night.",
    "cn": "我的腳踏車前輪上有一個小發電機,所以晚上我踩踏板時燈就會亮。"
  },
  {
    "word": "generator",
    "pos": "n.",
    "cn_def": "發電機",
    "en_def": "a machine that produces electricity",
    "sentence": "The power went off during the storm, but the hospital switched on its {{BLANK}} and kept working.",
    "cn": "暴風雨期間停電了,但醫院啟動了發電機並持續運作。"
  },
  {
    "word": "electricity",
    "pos": "n.",
    "cn_def": "電;電力",
    "en_def": "a form of energy used for light, heat and machines",
    "sentence": "Before {{BLANK}} reached their village, families used oil lamps at night, and children did homework by candlelight.",
    "cn": "在電力到達他們的村莊之前,家家戶戶晚上用油燈,而孩子們在燭光下寫功課。"
  },
  {
    "word": "voltage",
    "pos": "n.",
    "cn_def": "電壓",
    "en_def": "the force of an electric current, measured in volts",
    "sentence": "You should check the {{BLANK}} before you plug in your hair dryer abroad, or it may burn out.",
    "cn": "在國外插上吹風機之前你應該檢查電壓,否則它可能會燒壞。"
  },
  {
    "word": "vapour",
    "pos": "n.",
    "cn_def": "蒸氣;水氣",
    "en_def": "tiny drops of water or other liquid in the air",
    "sentence": "When the kettle boiled, white {{BLANK}} rose into the cold kitchen, and the windows quickly became cloudy.",
    "cn": "水壺燒開時,白色的蒸氣升進寒冷的廚房,而窗戶很快就變得霧濛濛的。"
  },
  {
    "word": "internal combustion engine",
    "pos": "n.phr.",
    "cn_def": "內燃機",
    "en_def": "an engine that burns fuel inside it to make power",
    "sentence": "The {{BLANK}} made cars lighter and faster, so steam cars slowly disappeared from the roads.",
    "cn": "內燃機讓汽車更輕更快,所以蒸汽車慢慢從道路上消失了。"
  },
  {
    "word": "spark plug",
    "pos": "n.",
    "cn_def": "火星塞",
    "en_def": "a small part that makes a spark to light fuel in an engine",
    "sentence": "My motorbike would not start this morning, and the mechanic said the {{BLANK}} needed to be replaced.",
    "cn": "我的機車今天早上發不動,而技師說火星塞需要更換。"
  },
  {
    "word": "overheat",
    "pos": "v.",
    "cn_def": "過熱",
    "en_def": "to become too hot",
    "sentence": "The old engine began to {{BLANK}} on the steep hill, so we stopped and waited for it to cool down.",
    "cn": "那台舊引擎在陡坡上開始過熱,所以我們停下來等它冷卻。"
  },
  {
    "word": "lubricate",
    "pos": "v.",
    "cn_def": "潤滑;上油",
    "en_def": "to put oil on parts so they move smoothly",
    "sentence": "Workers had to {{BLANK}} the moving parts every day, because dry metal wore out very quickly.",
    "cn": "工人們每天都必須潤滑那些移動的零件,因為乾燥的金屬磨損得很快。"
  },
  {
    "word": "rust",
    "pos": "v.",
    "cn_def": "生鏽",
    "en_def": "to become covered with a reddish layer when iron gets wet",
    "sentence": "My dad left his tools outside in the rain, and after a week they began to {{BLANK}} badly.",
    "cn": "我爸把他的工具留在外面淋雨,而一週後它們開始嚴重生鏽。"
  },
  {
    "word": "pump",
    "pos": "n.",
    "cn_def": "幫浦;抽水機",
    "en_def": "a machine that pushes liquid or air in or out",
    "sentence": "Water kept flooding the mine, so the owners bought a steam {{BLANK}} to remove it day and night.",
    "cn": "水不斷淹進礦坑,所以礦主買了一台蒸汽抽水機日夜把水抽出。"
  },
  {
    "word": "stoke",
    "pos": "v.",
    "cn_def": "添加燃料;撥旺(火)",
    "en_def": "to add fuel to a fire and keep it burning strongly",
    "sentence": "On the old steam train, one man had to {{BLANK}} the fire all the time, while the driver watched the track.",
    "cn": "在那列老蒸汽火車上,一個人必須一直添煤撥火,而司機則盯著鐵軌。"
  },
  {
    "word": "power station",
    "pos": "n.",
    "cn_def": "發電廠",
    "en_def": "a place where electricity is produced",
    "sentence": "The new {{BLANK}} supplies electricity to the whole county, but some residents worry about the noise.",
    "cn": "新的發電廠供電給整個郡,但一些居民擔心噪音問題。"
  }
];

const MCQS = [
  {
    "q": "James Watt improved the _____ in the 1760s, and factories soon used his design to run their machines.",
    "options": [
      "cast iron",
      "steam engine",
      "mine shaft",
      "coal mine"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The workers filled the _____ with water every morning, but they had to watch it carefully because it could explode.",
    "options": [
      "boiler",
      "thread",
      "refrigerator",
      "hygiene"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The steam pushed the _____ up and down, and this movement turned the big wheel of the machine.",
    "options": [
      "mastermind",
      "mishap",
      "piston",
      "carriage"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our science teacher showed us a model of an old engine, and we could see the piston moving inside the _____.",
    "options": [
      "period",
      "downturn",
      "lock",
      "cylinder"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The engineer opened the _____ slowly, so the extra steam could escape safely from the old engine.",
    "options": [
      "elevator",
      "supply",
      "valve",
      "colony"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The men shovelled coal into the _____ all day, and their faces were always black with dust.",
    "options": [
      "plumbing",
      "furnace",
      "barge",
      "shareholder"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The heavy _____ kept spinning after the steam stopped, so the machine did not suddenly jerk to a halt.",
    "options": [
      "viaduct",
      "demand",
      "tyre",
      "flywheel"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The mechanic said the _____ in my grandfather's old car was broken, and fixing it would cost a lot of money.",
    "options": [
      "crankshaft",
      "injustice",
      "demonstration",
      "chemical"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Early cars had only a few _____, but people were still amazed because they did not need horses at all.",
    "options": [
      "publication",
      "horsepower",
      "marketplace",
      "modernity"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The town had a large _____ power station, and on windy days the smoke drifted over our school.",
    "options": [
      "coal-fired",
      "handmade",
      "overcrowded",
      "civil"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The museum still runs a _____ printing machine on weekends, and children love watching it work.",
    "options": [
      "similar",
      "liberal",
      "inexhaustible",
      "steam-powered"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Watt added a separate _____ to the engine, so it wasted much less coal than older designs.",
    "options": [
      "sponsor",
      "station",
      "condenser",
      "camera"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Hundreds of tall _____ rose above the city, and thick black smoke poured out of them day and night.",
    "options": [
      "chimney",
      "downside",
      "dividend",
      "role"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Before steam engines, many mills were built next to rivers because they needed a _____ for power.",
    "options": [
      "chimney sweep",
      "water wheel",
      "world's fair",
      "printing press"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The old _____ on the hill once ground wheat into flour, but now it is a popular spot for photos.",
    "options": [
      "vaccine",
      "barge",
      "mechanic",
      "windmill"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Steam flows through the _____ at high speed, and the spinning blades help produce electricity for the city.",
    "options": [
      "automobile",
      "injustice",
      "turbine",
      "community"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "My bike has a small _____ on the front wheel, so the light comes on when I pedal at night.",
    "options": [
      "dynamo",
      "carriage",
      "magnet",
      "typewriter"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The power went off during the storm, but the hospital switched on its _____ and kept working.",
    "options": [
      "merchandise",
      "viaduct",
      "sanitation",
      "generator"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Before _____ reached their village, families used oil lamps at night, and children did homework by candlelight.",
    "options": [
      "technology",
      "miner",
      "electricity",
      "consumerism"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "You should check the _____ before you plug in your hair dryer abroad, or it may burn out.",
    "options": [
      "engineering",
      "voltage",
      "compound",
      "subordinate"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "When the kettle boiled, white _____ rose into the cold kitchen, and the windows quickly became cloudy.",
    "options": [
      "vapour",
      "viaduct",
      "camera",
      "yarn"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The _____ made cars lighter and faster, so steam cars slowly disappeared from the roads.",
    "options": [
      "consumer goods",
      "cottage industry",
      "internal combustion engine",
      "mill owner"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "My motorbike would not start this morning, and the mechanic said the _____ needed to be replaced.",
    "options": [
      "mill owner",
      "spark plug",
      "factory worker",
      "steering wheel"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The old engine began to _____ on the steep hill, so we stopped and waited for it to cool down.",
    "options": [
      "extend",
      "reorganise",
      "operate",
      "overheat"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Workers had to _____ the moving parts every day, because dry metal wore out very quickly.",
    "options": [
      "launch",
      "consume",
      "lubricate",
      "found"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My dad left his tools outside in the rain, and after a week they began to _____ badly.",
    "options": [
      "extend",
      "launch",
      "mechanise",
      "rust"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Water kept flooding the mine, so the owners bought a steam _____ to remove it day and night.",
    "options": [
      "pump",
      "locomotive",
      "litigation",
      "leap"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "On the old steam train, one man had to _____ the fire all the time, while the driver watched the track.",
    "options": [
      "launch",
      "stoke",
      "introduce",
      "commercialise"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new _____ supplies electricity to the whole county, but some residents worry about the noise.",
    "options": [
      "power station",
      "tennis racket",
      "power loom",
      "Bessemer process"
    ],
    "answer": 0,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "steam engine": {
    "pos": "n.",
    "en_def": "a machine that uses steam to make power",
    "cn_def": "蒸汽機"
  },
  "boiler": {
    "pos": "n.",
    "en_def": "a large container where water is heated into steam",
    "cn_def": "鍋爐"
  },
  "piston": {
    "pos": "n.",
    "en_def": "a part that moves up and down inside a tube in an engine",
    "cn_def": "活塞"
  },
  "cylinder": {
    "pos": "n.",
    "en_def": "a tube-shaped part of an engine where a piston moves",
    "cn_def": "汽缸"
  },
  "valve": {
    "pos": "n.",
    "en_def": "a part that opens and closes to control gas or liquid",
    "cn_def": "閥門"
  },
  "furnace": {
    "pos": "n.",
    "en_def": "a very hot enclosed fire used to heat or melt things",
    "cn_def": "熔爐;火爐"
  },
  "flywheel": {
    "pos": "n.",
    "en_def": "a heavy wheel that keeps a machine turning smoothly",
    "cn_def": "飛輪"
  },
  "crankshaft": {
    "pos": "n.",
    "en_def": "a rod in an engine that turns up-and-down movement into turning",
    "cn_def": "曲軸"
  },
  "horsepower": {
    "pos": "n.",
    "en_def": "a unit for measuring the power of an engine",
    "cn_def": "馬力"
  },
  "coal-fired": {
    "pos": "adj.",
    "en_def": "using coal as the fuel to produce heat or power",
    "cn_def": "燃煤的"
  },
  "steam-powered": {
    "pos": "adj.",
    "en_def": "driven by the power of steam",
    "cn_def": "蒸汽動力的"
  },
  "condenser": {
    "pos": "n.",
    "en_def": "a part that cools steam and turns it back into water",
    "cn_def": "冷凝器"
  },
  "chimney": {
    "pos": "n.",
    "en_def": "a tall pipe that carries smoke up and out of a building",
    "cn_def": "煙囪"
  },
  "water wheel": {
    "pos": "n.",
    "en_def": "a large wheel turned by flowing water to power machines",
    "cn_def": "水車"
  },
  "windmill": {
    "pos": "n.",
    "en_def": "a building with sails that the wind turns to make power",
    "cn_def": "風車"
  },
  "turbine": {
    "pos": "n.",
    "en_def": "a machine with blades that spin to produce power",
    "cn_def": "渦輪機"
  },
  "dynamo": {
    "pos": "n.",
    "en_def": "a machine that turns movement into electricity",
    "cn_def": "發電機(直流)"
  },
  "generator": {
    "pos": "n.",
    "en_def": "a machine that produces electricity",
    "cn_def": "發電機"
  },
  "electricity": {
    "pos": "n.",
    "en_def": "a form of energy used for light, heat and machines",
    "cn_def": "電;電力"
  },
  "voltage": {
    "pos": "n.",
    "en_def": "the force of an electric current, measured in volts",
    "cn_def": "電壓"
  },
  "vapour": {
    "pos": "n.",
    "en_def": "tiny drops of water or other liquid in the air",
    "cn_def": "蒸氣;水氣"
  },
  "internal combustion engine": {
    "pos": "n.phr.",
    "en_def": "an engine that burns fuel inside it to make power",
    "cn_def": "內燃機"
  },
  "spark plug": {
    "pos": "n.",
    "en_def": "a small part that makes a spark to light fuel in an engine",
    "cn_def": "火星塞"
  },
  "overheat": {
    "pos": "v.",
    "en_def": "to become too hot",
    "cn_def": "過熱"
  },
  "lubricate": {
    "pos": "v.",
    "en_def": "to put oil on parts so they move smoothly",
    "cn_def": "潤滑;上油"
  },
  "rust": {
    "pos": "v.",
    "en_def": "to become covered with a reddish layer when iron gets wet",
    "cn_def": "生鏽"
  },
  "pump": {
    "pos": "n.",
    "en_def": "a machine that pushes liquid or air in or out",
    "cn_def": "幫浦;抽水機"
  },
  "stoke": {
    "pos": "v.",
    "en_def": "to add fuel to a fire and keep it burning strongly",
    "cn_def": "添加燃料;撥旺(火)"
  },
  "power station": {
    "pos": "n.",
    "en_def": "a place where electricity is produced",
    "cn_def": "發電廠"
  },
  "cast iron": {
    "pos": "n.",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "cn_def": "鑄鐵"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "coal mine": {
    "pos": "n.",
    "en_def": "a place underground where coal is dug out",
    "cn_def": "煤礦"
  },
  "thread": {
    "pos": "n.",
    "en_def": "a long thin string of cotton or other material used for sewing",
    "cn_def": "線"
  },
  "refrigerator": {
    "pos": "n.",
    "en_def": "a machine that keeps food cold",
    "cn_def": "冰箱"
  },
  "hygiene": {
    "pos": "n.",
    "en_def": "keeping yourself and places clean to stay healthy",
    "cn_def": "衛生"
  },
  "mastermind": {
    "pos": "n.",
    "en_def": "a very clever person who plans something complex",
    "cn_def": "策劃者;幕後主腦"
  },
  "mishap": {
    "pos": "n.",
    "en_def": "a small accident or bad luck",
    "cn_def": "小意外;不幸事故"
  },
  "carriage": {
    "pos": "n.",
    "en_def": "one of the separate parts of a train where people sit",
    "cn_def": "(火車)車廂"
  },
  "period": {
    "pos": "n.",
    "en_def": "a length of time in history",
    "cn_def": "時期"
  },
  "downturn": {
    "pos": "n.",
    "en_def": "a fall in business or economic activity",
    "cn_def": "下滑;衰退"
  },
  "lock": {
    "pos": "n.",
    "en_def": "a section of a canal with gates to raise or lower boats",
    "cn_def": "(運河)水閘;船閘"
  },
  "elevator": {
    "pos": "n.",
    "en_def": "a machine that carries people up and down in a building",
    "cn_def": "電梯"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is available to use",
    "cn_def": "供應;供給"
  },
  "colony": {
    "pos": "n.",
    "en_def": "a country or area controlled by another country",
    "cn_def": "殖民地"
  },
  "plumbing": {
    "pos": "n.",
    "en_def": "the pipes that carry water in a building",
    "cn_def": "水管系統"
  },
  "barge": {
    "pos": "n.",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "cn_def": "駁船"
  },
  "shareholder": {
    "pos": "n.",
    "en_def": "a person who owns part of a company",
    "cn_def": "股東"
  },
  "viaduct": {
    "pos": "n.",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "cn_def": "高架橋"
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
  "injustice": {
    "pos": "n.",
    "en_def": "a situation that is unfair",
    "cn_def": "不公義;不公平"
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "showing how something works",
    "cn_def": "示範;展示"
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance made by or used in chemistry",
    "cn_def": "化學物質;化學品"
  },
  "publication": {
    "pos": "n.",
    "en_def": "the act of printing a book or article for the public",
    "cn_def": "出版;刊物"
  },
  "marketplace": {
    "pos": "n.",
    "en_def": "the world of buying and selling",
    "cn_def": "市場"
  },
  "modernity": {
    "pos": "n.",
    "en_def": "the quality of being modern",
    "cn_def": "現代性;現代化"
  },
  "handmade": {
    "pos": "adj.",
    "en_def": "made by hand, not by machine",
    "cn_def": "手工製作的"
  },
  "overcrowded": {
    "pos": "adj.",
    "en_def": "having too many people in a space",
    "cn_def": "過度擁擠的"
  },
  "civil": {
    "pos": "adj.",
    "en_def": "connected with ordinary citizens or the government, not the army",
    "cn_def": "公民的;民用的;土木(工程)的"
  },
  "similar": {
    "pos": "adj.",
    "en_def": "almost the same",
    "cn_def": "相似的"
  },
  "liberal": {
    "pos": "adj.",
    "en_def": "supporting freedom and gradual social change",
    "cn_def": "自由主義的;開明的"
  },
  "inexhaustible": {
    "pos": "adj.",
    "en_def": "so large that it can never be used up",
    "cn_def": "取之不盡的"
  },
  "sponsor": {
    "pos": "n.",
    "en_def": "a person or company that gives money to support something",
    "cn_def": "贊助者;贊助商"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains stop for passengers",
    "cn_def": "車站"
  },
  "camera": {
    "pos": "n.",
    "en_def": "a device for taking photographs",
    "cn_def": "相機"
  },
  "downside": {
    "pos": "n.",
    "en_def": "a disadvantage",
    "cn_def": "缺點;壞處"
  },
  "dividend": {
    "pos": "n.",
    "en_def": "a share of a company's profit paid to its owners",
    "cn_def": "股利;股息"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or purpose someone or something has",
    "cn_def": "角色;作用"
  },
  "chimney sweep": {
    "pos": "n.",
    "en_def": "a person who cleans chimneys",
    "cn_def": "掃煙囪工人"
  },
  "world's fair": {
    "pos": "n.",
    "en_def": "a large international exhibition of new products and ideas",
    "cn_def": "世界博覽會"
  },
  "printing press": {
    "pos": "n.",
    "en_def": "a machine for printing books and newspapers",
    "cn_def": "印刷機"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance that protects people from a disease",
    "cn_def": "疫苗"
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a person who repairs engines and machines",
    "cn_def": "技師;修車工"
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區;群體"
  },
  "magnet": {
    "pos": "n.",
    "en_def": "a piece of metal that pulls iron towards it",
    "cn_def": "磁鐵"
  },
  "typewriter": {
    "pos": "n.",
    "en_def": "a machine with keys for printing letters onto paper",
    "cn_def": "打字機"
  },
  "merchandise": {
    "pos": "n.",
    "en_def": "goods that are bought and sold",
    "cn_def": "商品;貨品"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "technology": {
    "pos": "n.",
    "en_def": "scientific knowledge used in practical ways",
    "cn_def": "科技;技術"
  },
  "miner": {
    "pos": "n.",
    "en_def": "a person who works under the ground digging coal or metal",
    "cn_def": "礦工"
  },
  "consumerism": {
    "pos": "n.",
    "en_def": "the idea that buying lots of goods is good",
    "cn_def": "消費主義"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "compound": {
    "pos": "n.",
    "en_def": "a substance made of two or more elements",
    "cn_def": "化合物"
  },
  "subordinate": {
    "pos": "n.",
    "en_def": "a person with a lower position at work",
    "cn_def": "下屬;部屬"
  },
  "yarn": {
    "pos": "n.",
    "en_def": "long thread used for knitting or weaving",
    "cn_def": "紗線;毛線"
  },
  "consumer goods": {
    "pos": "n.",
    "en_def": "products that people buy for their own use",
    "cn_def": "消費品"
  },
  "cottage industry": {
    "pos": "n.phr.",
    "en_def": "work done by people in their own homes",
    "cn_def": "家庭手工業"
  },
  "mill owner": {
    "pos": "n.",
    "en_def": "a person who owns a factory or mill",
    "cn_def": "工廠主;磨坊主"
  },
  "factory worker": {
    "pos": "n.",
    "en_def": "a person who works in a factory",
    "cn_def": "工廠工人"
  },
  "steering wheel": {
    "pos": "n.",
    "en_def": "the wheel a driver turns to control a car's direction",
    "cn_def": "方向盤"
  },
  "extend": {
    "pos": "v.",
    "en_def": "to make something longer or larger",
    "cn_def": "延伸;擴大"
  },
  "reorganise": {
    "pos": "v.",
    "en_def": "to arrange something in a new way",
    "cn_def": "重新安排;改組"
  },
  "operate": {
    "pos": "v.",
    "en_def": "to make a machine work",
    "cn_def": "操作;運轉"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to start selling a new product",
    "cn_def": "推出;發行"
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
  "mechanise": {
    "pos": "v.",
    "en_def": "to start using machines to do work",
    "cn_def": "使機械化"
  },
  "locomotive": {
    "pos": "n.",
    "en_def": "the engine that pulls a train",
    "cn_def": "火車頭;機車"
  },
  "litigation": {
    "pos": "n.",
    "en_def": "the process of taking a case to court",
    "cn_def": "訴訟"
  },
  "leap": {
    "pos": "n.",
    "en_def": "a sudden big change or improvement",
    "cn_def": "躍進;飛躍"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to bring something into use for the first time",
    "cn_def": "引進;推出"
  },
  "commercialise": {
    "pos": "v.",
    "en_def": "to make money from a product or idea by selling it",
    "cn_def": "使商業化"
  },
  "tennis racket": {
    "pos": "n.",
    "en_def": "a bat with strings used to hit a tennis ball",
    "cn_def": "網球拍"
  },
  "power loom": {
    "pos": "n.",
    "en_def": "a machine driven by power for weaving cloth",
    "cn_def": "動力織布機"
  },
  "bessemer process": {
    "pos": "n.phr.",
    "en_def": "a cheap way to make steel by blowing air through iron",
    "cn_def": "貝塞麥煉鋼法"
  }
};

const EXTRA_GLOSSES = {};
