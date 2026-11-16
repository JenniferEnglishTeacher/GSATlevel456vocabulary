// Topic 2 Subunit 7 Quiz Data: People, Farming & Wildlife Conflict 人類、畜牧與野生動物衝突
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S07 - People, Farming & Wildlife Conflict 人類、畜牧與野生動物衝突",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "livestock",
    "pos": "n.",
    "cn_def": "家畜；牲畜",
    "en_def": "farm animals such as cows, sheep and goats",
    "sentence": "Wolves sometimes attack farmers' {{BLANK}} at night, so many farmers now use guard dogs to protect their sheep.",
    "cn": "狼有時會在夜裡攻擊農夫的家畜，所以許多農夫現在用護衛犬來保護他們的羊。"
  },
  {
    "word": "cattle",
    "pos": "n.",
    "cn_def": "牛（總稱）",
    "en_def": "cows and bulls kept on a farm",
    "sentence": "The farmer lost three {{BLANK}} to a lion last month, so he is now building a stronger fence around his farm.",
    "cn": "那位農夫上個月有三頭牛被獅子咬死，所以他現在正在農場周圍建造更堅固的圍籬。"
  },
  {
    "word": "herder",
    "pos": "n.",
    "cn_def": "牧民；牧人",
    "en_def": "a person who looks after a group of animals",
    "sentence": "The {{BLANK}} walks with his goats through the mountains every day, and he carries a whistle to scare away wild animals.",
    "cn": "那位牧民每天帶著他的山羊走過山區，並帶著一個哨子來嚇跑野生動物。"
  },
  {
    "word": "rancher",
    "pos": "n.",
    "cn_def": "牧場主人",
    "en_def": "a person who owns or runs a large cattle farm",
    "sentence": "The {{BLANK}} was angry when wolves returned to the area, but later he learned to protect his cows without killing them.",
    "cn": "當狼回到這個地區時，那位牧場主人很生氣，但後來他學會了在不殺狼的情況下保護他的牛。"
  },
  {
    "word": "farmland",
    "pos": "n.",
    "cn_def": "農地；農田",
    "en_def": "land used for growing crops or keeping animals",
    "sentence": "Much of the forest was turned into {{BLANK}} fifty years ago, so the leopard cats now live close to people.",
    "cn": "五十年前大部分的森林被改成了農地，所以石虎現在住得離人很近。"
  },
  {
    "word": "crop",
    "pos": "n.",
    "cn_def": "農作物",
    "en_def": "a plant grown on a farm for food",
    "sentence": "Elephants sometimes eat a whole field of {{BLANK}} in one night, so the farmers lose all the food they planned to sell.",
    "cn": "大象有時一個晚上就吃掉整片田的農作物，讓農夫們失去所有打算拿去賣的作物。"
  },
  {
    "word": "fence",
    "pos": "n.",
    "cn_def": "圍籬；柵欄",
    "en_def": "a wall made of wood or wire around a field",
    "sentence": "The villagers built an electric {{BLANK}} around their fields, but the clever elephants learned to push trees onto it.",
    "cn": "村民們在田地周圍建造了電圍籬，但聰明的大象學會了把樹推倒在上面。"
  },
  {
    "word": "shepherd",
    "pos": "n.",
    "cn_def": "牧羊人",
    "en_def": "a person who looks after sheep",
    "sentence": "The {{BLANK}} keeps his sheep inside a strong pen at night, because snow leopards often hunt in the area.",
    "cn": "那位牧羊人晚上把羊關在堅固的羊圈裡，因為雪豹常在那一帶獵食。"
  },
  {
    "word": "raid",
    "pos": "v.",
    "cn_def": "襲擊；搶奪",
    "en_def": "to attack a place suddenly to take things",
    "sentence": "Monkeys often {{BLANK}} the fruit farms in the mountains, and they can eat hundreds of bananas in a single afternoon.",
    "cn": "猴子常常襲擊山上的果園，牠們一個下午就能吃掉數百根香蕉。"
  },
  {
    "word": "retaliate",
    "pos": "v.",
    "cn_def": "報復",
    "en_def": "to hurt someone because they hurt you",
    "sentence": "When a tiger killed their cows, some villagers wanted to {{BLANK}}, but the rangers convinced them to wait for help.",
    "cn": "當老虎咬死他們的牛時，有些村民想要報復，但巡山員說服他們等待協助。"
  },
  {
    "word": "retaliation",
    "pos": "n.",
    "cn_def": "報復（行為）",
    "en_def": "action taken to hurt someone who hurt you",
    "sentence": "Many lions are killed in {{BLANK}} for attacks on cattle, so conservation groups pay farmers when they lose animals.",
    "cn": "許多獅子因為攻擊牛隻而遭到報復殺害，所以保育團體會在農民損失牲畜時給予賠償。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "補償；賠償金",
    "en_def": "money paid to someone for a loss",
    "sentence": "The government gives {{BLANK}} to farmers whose chickens are killed by leopard cats, so the farmers are less likely to hurt them.",
    "cn": "政府會給雞隻被石虎咬死的農民賠償金，所以農民比較不會傷害石虎。"
  },
  {
    "word": "coexist",
    "pos": "v.",
    "cn_def": "共存",
    "en_def": "to live together peacefully in the same place",
    "sentence": "People and bears can {{BLANK}} in the same mountains, but campers must keep their food in locked boxes.",
    "cn": "人類和熊可以在同一片山林中共存，但露營者必須把食物放在上鎖的箱子裡。"
  },
  {
    "word": "coexistence",
    "pos": "n.",
    "cn_def": "共存",
    "en_def": "the state of living together peacefully",
    "sentence": "Peaceful {{BLANK}} between farmers and elephants is possible, but it needs good planning and support from the government.",
    "cn": "農民與大象之間的和平共存是可能的，但這需要良好的規劃和政府的支持。"
  },
  {
    "word": "deter",
    "pos": "v.",
    "cn_def": "嚇阻；阻止",
    "en_def": "to stop something from happening by making it difficult",
    "sentence": "Farmers hang bright lights around their farms to {{BLANK}} lions at night, and the number of attacks has dropped a lot.",
    "cn": "農民在農場周圍掛上明亮的燈來在夜間嚇阻獅子，攻擊事件的數量因此大幅減少。"
  },
  {
    "word": "deterrent",
    "pos": "n.",
    "cn_def": "嚇阻物；威懾",
    "en_def": "something that makes people or animals not want to do something",
    "sentence": "Beehives along the fence are a good {{BLANK}} against elephants, because the large animals are afraid of bee stings.",
    "cn": "沿著圍籬設置的蜂箱是防範大象的好嚇阻物，因為這些大型動物害怕被蜜蜂叮咬。"
  },
  {
    "word": "trap",
    "pos": "n.",
    "cn_def": "陷阱；捕獸器",
    "en_def": "a device for catching animals",
    "sentence": "The researchers used a safe {{BLANK}} to catch the leopard cat, and they released it after putting on a GPS collar.",
    "cn": "研究人員用安全的捕獸器捕捉石虎，並在為牠戴上GPS項圈後將牠野放。"
  },
  {
    "word": "pest",
    "pos": "n.",
    "cn_def": "害蟲；有害動物",
    "en_def": "an insect or animal that damages crops or food",
    "sentence": "Some farmers see wild boars as a {{BLANK}}, because the boars destroy their vegetable gardens almost every night.",
    "cn": "有些農民把山豬視為有害動物，因為山豬幾乎每晚都破壞他們的菜園。"
  },
  {
    "word": "landowner",
    "pos": "n.",
    "cn_def": "地主",
    "en_def": "a person who owns land",
    "sentence": "The {{BLANK}} agreed to keep part of his forest untouched, so the rare birds living there would not lose their home.",
    "cn": "那位地主同意保留他一部分的森林不被開發，讓住在那裡的稀有鳥類不會失去家園。"
  },
  {
    "word": "villager",
    "pos": "n.",
    "cn_def": "村民",
    "en_def": "a person who lives in a village",
    "sentence": "Every {{BLANK}} was invited to the meeting about the new nature park, because the plan would change their daily lives.",
    "cn": "每一位村民都受邀參加有關新自然公園的會議，因為這項計畫將會改變他們的日常生活。"
  },
  {
    "word": "harvest",
    "pos": "n.",
    "cn_def": "收成；收穫",
    "en_def": "the time when crops are collected",
    "sentence": "Just before the {{BLANK}}, a group of monkeys came down from the mountain and ate most of the farmer's peaches.",
    "cn": "就在收成前，一群猴子從山上下來，吃掉了農夫大部分的桃子。"
  },
  {
    "word": "livelihood",
    "pos": "n.",
    "cn_def": "生計",
    "en_def": "the way someone earns money to live",
    "sentence": "Fishing is the main {{BLANK}} of the islanders, so they need to protect the sea if they want to keep their jobs.",
    "cn": "捕魚是島民主要的生計，所以如果他們想保住工作，就必須保護海洋。"
  },
  {
    "word": "poultry",
    "pos": "n.",
    "cn_def": "家禽",
    "en_def": "chickens, ducks and other farm birds",
    "sentence": "Leopard cats sometimes steal {{BLANK}} from farms, but some farmers now use stronger cages to keep their chickens safe.",
    "cn": "石虎有時會偷農場的家禽，但有些農民現在用更堅固的籠子來保護他們的雞。"
  },
  {
    "word": "hostile",
    "pos": "adj.",
    "cn_def": "敵對的；不友善的",
    "en_def": "unfriendly and ready to fight",
    "sentence": "Local people used to be {{BLANK}} towards the wolves, but their attitude changed when wolf tourism brought money to the town.",
    "cn": "當地人過去對狼抱持敵對的態度，但當賞狼旅遊為小鎮帶來收入後，他們的態度就改變了。"
  },
  {
    "word": "tolerate",
    "pos": "v.",
    "cn_def": "容忍；忍受",
    "en_def": "to accept something you do not like",
    "sentence": "Farmers are more willing to {{BLANK}} wild animals on their land when they receive help to protect their crops.",
    "cn": "當農民獲得保護農作物的協助時，他們更願意容忍野生動物出現在自己的土地上。"
  }
];

const MCQS = [
  {
    "q": "Wolves sometimes attack farmers' _____ at night, so many farmers now use guard dogs to protect their sheep.",
    "options": [
      "emphasis",
      "livestock",
      "foundation",
      "motive"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The farmer lost three _____ to a lion last month, so he is now building a stronger fence around his farm.",
    "options": [
      "cattle",
      "poacher",
      "sanctuary",
      "collapse"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ walks with his goats through the mountains every day, and he carries a whistle to scare away wild animals.",
    "options": [
      "omnivore",
      "seizure",
      "layer",
      "herder"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The _____ was angry when wolves returned to the area, but later he learned to protect his cows without killing them.",
    "options": [
      "undergrowth",
      "issue",
      "rancher",
      "veterinarian"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Much of the forest was turned into _____ fifty years ago, so the leopard cats now live close to people.",
    "options": [
      "farmland",
      "phase",
      "portion",
      "criteria"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Elephants sometimes eat a whole field of _____ in one night, so the farmers lose all the food they planned to sell.",
    "options": [
      "site",
      "rhino",
      "crop",
      "horn"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The villagers built an electric _____ around their fields, but the clever elephants learned to push trees onto it.",
    "options": [
      "route",
      "fence",
      "aquarium",
      "site"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The _____ keeps his sheep inside a strong pen at night, because snow leopards often hunt in the area.",
    "options": [
      "target",
      "instinct",
      "policy",
      "shepherd"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Monkeys often _____ the fruit farms in the mountains, and they can eat hundreds of bananas in a single afternoon.",
    "options": [
      "raid",
      "inspect",
      "starve",
      "presume"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "When a tiger killed their cows, some villagers wanted to _____, but the rangers convinced them to wait for help.",
    "options": [
      "dwindle",
      "retaliate",
      "promote",
      "deny"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Many lions are killed in _____ for attacks on cattle, so conservation groups pay farmers when they lose animals.",
    "options": [
      "cycle",
      "snare",
      "retaliation",
      "ignorance"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The government gives _____ to farmers whose chickens are killed by leopard cats, so the farmers are less likely to hurt them.",
    "options": [
      "veterinarian",
      "phase",
      "layer",
      "compensation"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "People and bears can _____ in the same mountains, but campers must keep their food in locked boxes.",
    "options": [
      "convert",
      "dwindle",
      "coexist",
      "label"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Peaceful _____ between farmers and elephants is possible, but it needs good planning and support from the government.",
    "options": [
      "coexistence",
      "penalty",
      "duration",
      "restoration"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Farmers hang bright lights around their farms to _____ lions at night, and the number of attacks has dropped a lot.",
    "options": [
      "conceive",
      "cull",
      "sustain",
      "deter"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Beehives along the fence are a good _____ against elephants, because the large animals are afraid of bee stings.",
    "options": [
      "target",
      "deterrent",
      "outbreak",
      "welfare"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The researchers used a safe _____ to catch the leopard cat, and they released it after putting on a GPS collar.",
    "options": [
      "trap",
      "corridor",
      "habitat",
      "plastic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Some farmers see wild boars as a _____, because the boars destroy their vegetable gardens almost every night.",
    "options": [
      "species",
      "pest",
      "collar",
      "captivity"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The _____ agreed to keep part of his forest untouched, so the rare birds living there would not lose their home.",
    "options": [
      "quota",
      "issue",
      "landowner",
      "breeding"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Every _____ was invited to the meeting about the new nature park, because the plan would change their daily lives.",
    "options": [
      "encounter",
      "destruction",
      "campaign",
      "villager"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Just before the _____, a group of monkeys came down from the mountain and ate most of the farmer's peaches.",
    "options": [
      "core",
      "buffer",
      "harvest",
      "fauna"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Fishing is the main _____ of the islanders, so they need to protect the sea if they want to keep their jobs.",
    "options": [
      "tundra",
      "livelihood",
      "urbanisation",
      "duration"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Leopard cats sometimes steal _____ from farms, but some farmers now use stronger cages to keep their chickens safe.",
    "options": [
      "poultry",
      "ranger",
      "pollinator",
      "mammal"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Local people used to be _____ towards the wolves, but their attitude changed when wolf tourism brought money to the town.",
    "options": [
      "specific",
      "orphaned",
      "rare",
      "hostile"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Farmers are more willing to _____ wild animals on their land when they receive help to protect their crops.",
    "options": [
      "assess",
      "graze",
      "tolerate",
      "cease"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "livestock": {
    "pos": "n.",
    "en_def": "farm animals such as cows, sheep and goats",
    "cn_def": "家畜；牲畜"
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows and bulls kept on a farm",
    "cn_def": "牛（總稱）"
  },
  "herder": {
    "pos": "n.",
    "en_def": "a person who looks after a group of animals",
    "cn_def": "牧民；牧人"
  },
  "rancher": {
    "pos": "n.",
    "en_def": "a person who owns or runs a large cattle farm",
    "cn_def": "牧場主人"
  },
  "farmland": {
    "pos": "n.",
    "en_def": "land used for growing crops or keeping animals",
    "cn_def": "農地；農田"
  },
  "crop": {
    "pos": "n.",
    "en_def": "a plant grown on a farm for food",
    "cn_def": "農作物"
  },
  "fence": {
    "pos": "n.",
    "en_def": "a wall made of wood or wire around a field",
    "cn_def": "圍籬；柵欄"
  },
  "shepherd": {
    "pos": "n.",
    "en_def": "a person who looks after sheep",
    "cn_def": "牧羊人"
  },
  "raid": {
    "pos": "v.",
    "en_def": "to attack a place suddenly to take things",
    "cn_def": "襲擊；搶奪"
  },
  "retaliate": {
    "pos": "v.",
    "en_def": "to hurt someone because they hurt you",
    "cn_def": "報復"
  },
  "retaliation": {
    "pos": "n.",
    "en_def": "action taken to hurt someone who hurt you",
    "cn_def": "報復（行為）"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone for a loss",
    "cn_def": "補償；賠償金"
  },
  "coexist": {
    "pos": "v.",
    "en_def": "to live together peacefully in the same place",
    "cn_def": "共存"
  },
  "coexistence": {
    "pos": "n.",
    "en_def": "the state of living together peacefully",
    "cn_def": "共存"
  },
  "deter": {
    "pos": "v.",
    "en_def": "to stop something from happening by making it difficult",
    "cn_def": "嚇阻；阻止"
  },
  "deterrent": {
    "pos": "n.",
    "en_def": "something that makes people or animals not want to do something",
    "cn_def": "嚇阻物；威懾"
  },
  "trap": {
    "pos": "n.",
    "en_def": "a device for catching animals",
    "cn_def": "陷阱；捕獸器"
  },
  "pest": {
    "pos": "n.",
    "en_def": "an insect or animal that damages crops or food",
    "cn_def": "害蟲；有害動物"
  },
  "landowner": {
    "pos": "n.",
    "en_def": "a person who owns land",
    "cn_def": "地主"
  },
  "villager": {
    "pos": "n.",
    "en_def": "a person who lives in a village",
    "cn_def": "村民"
  },
  "harvest": {
    "pos": "n.",
    "en_def": "the time when crops are collected",
    "cn_def": "收成；收穫"
  },
  "livelihood": {
    "pos": "n.",
    "en_def": "the way someone earns money to live",
    "cn_def": "生計"
  },
  "poultry": {
    "pos": "n.",
    "en_def": "chickens, ducks and other farm birds",
    "cn_def": "家禽"
  },
  "hostile": {
    "pos": "adj.",
    "en_def": "unfriendly and ready to fight",
    "cn_def": "敵對的；不友善的"
  },
  "tolerate": {
    "pos": "v.",
    "en_def": "to accept something you do not like",
    "cn_def": "容忍；忍受"
  },
  "emphasis": {
    "pos": "n.",
    "en_def": "special importance given to something",
    "cn_def": "強調；重點"
  },
  "foundation": {
    "pos": "n.",
    "en_def": "an organisation that gives money to good causes",
    "cn_def": "基金會"
  },
  "motive": {
    "pos": "n.",
    "en_def": "the reason why someone does something",
    "cn_def": "動機"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "sanctuary": {
    "pos": "n.",
    "en_def": "a safe place where animals are protected",
    "cn_def": "保護區；庇護所"
  },
  "collapse": {
    "pos": "n.",
    "en_def": "a sudden failure or fall",
    "cn_def": "崩潰；瓦解"
  },
  "omnivore": {
    "pos": "n.",
    "en_def": "an animal that eats both plants and meat",
    "cn_def": "雜食性動物"
  },
  "seizure": {
    "pos": "n.",
    "en_def": "the act of taking illegal goods by force or law",
    "cn_def": "查獲；扣押"
  },
  "layer": {
    "pos": "n.",
    "en_def": "a level of something that lies over or under another",
    "cn_def": "層"
  },
  "undergrowth": {
    "pos": "n.",
    "en_def": "bushes and small plants growing under big trees",
    "cn_def": "矮樹叢；下層灌木"
  },
  "issue": {
    "pos": "n.",
    "en_def": "an important problem that people discuss",
    "cn_def": "議題；問題"
  },
  "veterinarian": {
    "pos": "n.",
    "en_def": "an animal doctor",
    "cn_def": "獸醫"
  },
  "phase": {
    "pos": "n.",
    "en_def": "a stage in a process",
    "cn_def": "階段"
  },
  "portion": {
    "pos": "n.",
    "en_def": "a part of something larger",
    "cn_def": "部分"
  },
  "criteria": {
    "pos": "n.",
    "en_def": "standards used to judge something",
    "cn_def": "標準；準則（複數）"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is or happens",
    "cn_def": "地點；場所"
  },
  "rhino": {
    "pos": "n.",
    "en_def": "a large heavy animal with one or two horns on its nose",
    "cn_def": "犀牛"
  },
  "horn": {
    "pos": "n.",
    "en_def": "a hard pointed part growing on an animal's head",
    "cn_def": "角"
  },
  "route": {
    "pos": "n.",
    "en_def": "the way from one place to another",
    "cn_def": "路線"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a building where people can see fish and sea animals",
    "cn_def": "水族館"
  },
  "target": {
    "pos": "n.",
    "en_def": "a goal you want to achieve",
    "cn_def": "目標"
  },
  "instinct": {
    "pos": "n.",
    "en_def": "a natural behaviour an animal does without learning",
    "cn_def": "本能"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a plan of action agreed by a government or group",
    "cn_def": "政策"
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully to check it",
    "cn_def": "檢查；視察"
  },
  "starve": {
    "pos": "v.",
    "en_def": "to suffer or die because there is no food",
    "cn_def": "挨餓；餓死"
  },
  "presume": {
    "pos": "v.",
    "en_def": "to think something is true without proof",
    "cn_def": "推測；假定"
  },
  "dwindle": {
    "pos": "v.",
    "en_def": "to become gradually smaller in number",
    "cn_def": "逐漸減少"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help something grow or become popular",
    "cn_def": "促進；推廣"
  },
  "deny": {
    "pos": "v.",
    "en_def": "to say that something is not true",
    "cn_def": "否認"
  },
  "cycle": {
    "pos": "n.",
    "en_def": "a series of events that happen again and again",
    "cn_def": "循環；週期"
  },
  "snare": {
    "pos": "n.",
    "en_def": "a trap made of wire for catching animals",
    "cn_def": "（捕獸的）套索；陷阱"
  },
  "ignorance": {
    "pos": "n.",
    "en_def": "lack of knowledge about something",
    "cn_def": "無知；不了解"
  },
  "convert": {
    "pos": "v.",
    "en_def": "to change something into a different form or use",
    "cn_def": "轉換；改變用途"
  },
  "label": {
    "pos": "v.",
    "en_def": "to describe someone or something with a word",
    "cn_def": "把……稱為；貼上標籤"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "a punishment for breaking a law",
    "cn_def": "處罰；刑罰"
  },
  "duration": {
    "pos": "n.",
    "en_def": "the length of time something lasts",
    "cn_def": "持續時間；期間"
  },
  "restoration": {
    "pos": "n.",
    "en_def": "the act of returning something to its earlier good condition",
    "cn_def": "復育；修復"
  },
  "conceive": {
    "pos": "v.",
    "en_def": "to think of a new idea or plan",
    "cn_def": "構想出；想出"
  },
  "cull": {
    "pos": "v.",
    "en_def": "to kill some animals to reduce their number",
    "cn_def": "撲殺；選擇性宰殺"
  },
  "sustain": {
    "pos": "v.",
    "en_def": "to keep something alive or continuing",
    "cn_def": "維持；支撐"
  },
  "outbreak": {
    "pos": "n.",
    "en_def": "the sudden start of a disease",
    "cn_def": "爆發"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health and happiness of people or animals",
    "cn_def": "福利；福祉"
  },
  "corridor": {
    "pos": "n.",
    "en_def": "a strip of land that connects two habitats",
    "cn_def": "（生態）廊道"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲地；棲息地"
  },
  "plastic": {
    "pos": "n.",
    "en_def": "a light material made from chemicals, used for bags and bottles",
    "cn_def": "塑膠"
  },
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same kind",
    "cn_def": "物種"
  },
  "collar": {
    "pos": "n.",
    "en_def": "a band put around an animal's neck",
    "cn_def": "項圈"
  },
  "captivity": {
    "pos": "n.",
    "en_def": "the state of being kept in a cage or zoo",
    "cn_def": "圈養；囚禁"
  },
  "quota": {
    "pos": "n.",
    "en_def": "a fixed limit on the number of something allowed",
    "cn_def": "配額；限額"
  },
  "breeding": {
    "pos": "n.",
    "en_def": "the process of animals producing young",
    "cn_def": "繁殖；育種"
  },
  "encounter": {
    "pos": "n.",
    "en_def": "a meeting that is unexpected",
    "cn_def": "偶遇；邂逅"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act of damaging something so badly it cannot be used",
    "cn_def": "破壞；毀滅"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned series of actions to achieve a goal",
    "cn_def": "運動；宣傳活動"
  },
  "core": {
    "pos": "n.",
    "en_def": "the most central or important part",
    "cn_def": "核心；中心部分"
  },
  "buffer": {
    "pos": "n.",
    "en_def": "an area that protects something from harm",
    "cn_def": "緩衝區"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals living in a particular area",
    "cn_def": "動物群；某地區的動物"
  },
  "tundra": {
    "pos": "n.",
    "en_def": "a cold, flat area with no trees near the Arctic",
    "cn_def": "凍原；苔原"
  },
  "urbanisation": {
    "pos": "n.",
    "en_def": "the growth of towns and cities",
    "cn_def": "都市化"
  },
  "ranger": {
    "pos": "n.",
    "en_def": "a person whose job is to protect a park or forest",
    "cn_def": "巡山員；保育巡查員"
  },
  "pollinator": {
    "pos": "n.",
    "en_def": "an insect or animal that carries pollen between flowers",
    "cn_def": "授粉者"
  },
  "mammal": {
    "pos": "n.",
    "en_def": "an animal that feeds its babies with milk",
    "cn_def": "哺乳動物"
  },
  "specific": {
    "pos": "adj.",
    "en_def": "exact and clear; particular",
    "cn_def": "特定的；明確的"
  },
  "orphaned": {
    "pos": "adj.",
    "en_def": "having lost its parents",
    "cn_def": "失去父母的；成為孤兒的"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的"
  },
  "assess": {
    "pos": "v.",
    "en_def": "to judge how good, bad or serious something is",
    "cn_def": "評估"
  },
  "graze": {
    "pos": "v.",
    "en_def": "to eat grass in a field",
    "cn_def": "吃草；放牧"
  },
  "cease": {
    "pos": "v.",
    "en_def": "to stop doing something",
    "cn_def": "停止"
  }
};

const EXTRA_GLOSSES = {};
