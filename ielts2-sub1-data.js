// Topic 2 Subunit 1 Quiz Data: Species & Biodiversity 物種與生物多樣性
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S01 - Species & Biodiversity 物種與生物多樣性",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "species",
    "pos": "n.",
    "cn_def": "物種",
    "en_def": "a group of animals or plants of the same kind",
    "sentence": "Scientists discovered a new {{BLANK}} of frog in the mountains of Taiwan, and they are now studying how it survives the cold winters.",
    "cn": "科學家在台灣山區發現了一種新的青蛙物種，他們現在正在研究牠如何度過寒冷的冬天。"
  },
  {
    "word": "endangered",
    "pos": "adj.",
    "cn_def": "瀕臨絕種的",
    "en_def": "in danger of disappearing forever",
    "sentence": "The Formosan clouded leopard was once an {{BLANK}} animal in Taiwan, but sadly no one has seen one in the wild for many years.",
    "cn": "台灣雲豹曾經是台灣瀕臨絕種的動物，但遺憾的是，已經很多年沒有人在野外見過牠了。"
  },
  {
    "word": "extinct",
    "pos": "adj.",
    "cn_def": "絕種的",
    "en_def": "no longer existing anywhere in the world",
    "sentence": "Dinosaurs have been {{BLANK}} for about 66 million years, so we can only learn about them from fossils and bones.",
    "cn": "恐龍已經絕種大約六千六百萬年了，所以我們只能從化石和骨頭來認識牠們。"
  },
  {
    "word": "extinction",
    "pos": "n.",
    "cn_def": "滅絕",
    "en_def": "the situation when a species no longer exists",
    "sentence": "Many frogs around the world face {{BLANK}} because a deadly disease is spreading quickly, and scientists are racing to find a cure.",
    "cn": "世界各地許多青蛙正面臨滅絕，因為一種致命的疾病正在迅速擴散，而科學家們正爭分奪秒地尋找解藥。"
  },
  {
    "word": "biodiversity",
    "pos": "n.",
    "cn_def": "生物多樣性",
    "en_def": "the variety of plants and animals in one place",
    "sentence": "Coral reefs have amazing {{BLANK}} because thousands of fish and sea creatures live there, so protecting them is very important.",
    "cn": "珊瑚礁擁有驚人的生物多樣性，因為有成千上萬種魚類和海洋生物住在那裡，所以保護它們非常重要。"
  },
  {
    "word": "mammal",
    "pos": "n.",
    "cn_def": "哺乳動物",
    "en_def": "an animal that feeds its babies with milk",
    "sentence": "A whale looks like a giant fish, but it is actually a {{BLANK}} because it breathes air and feeds its babies with milk.",
    "cn": "鯨魚看起來像一條巨大的魚，但牠其實是一種哺乳動物，因為牠呼吸空氣並用乳汁餵養寶寶。"
  },
  {
    "word": "reptile",
    "pos": "n.",
    "cn_def": "爬蟲類動物",
    "en_def": "a cold-blooded animal with dry skin, like a snake",
    "sentence": "A turtle is a {{BLANK}} that lays its eggs on the beach, and the baby turtles must run to the sea after they hatch.",
    "cn": "烏龜是一種會在海灘上產卵的爬蟲類動物，而小海龜孵化後必須奔向大海。"
  },
  {
    "word": "amphibian",
    "pos": "n.",
    "cn_def": "兩棲動物",
    "en_def": "an animal that lives both in water and on land",
    "sentence": "A frog is an {{BLANK}} because it begins life in the water as a tadpole, but later it can also live on land.",
    "cn": "青蛙是一種兩棲動物，因為牠一開始以蝌蚪的形態生活在水中，但之後也能在陸地上生活。"
  },
  {
    "word": "primate",
    "pos": "n.",
    "cn_def": "靈長類動物",
    "en_def": "a group of animals that includes monkeys, apes and humans",
    "sentence": "The Formosan rock macaque is the only wild {{BLANK}} in Taiwan, and you can often see groups of them at Shoushan in Kaohsiung.",
    "cn": "台灣獼猴是台灣唯一的野生靈長類動物，你常常可以在高雄的壽山看到成群的牠們。"
  },
  {
    "word": "rodent",
    "pos": "n.",
    "cn_def": "囓齒動物",
    "en_def": "a small animal with sharp front teeth, like a mouse",
    "sentence": "A squirrel is a {{BLANK}} with strong front teeth, so it can easily break open hard nuts and seeds in the forest.",
    "cn": "松鼠是一種前齒很強壯的囓齒動物，所以牠能輕易地咬開森林裡堅硬的堅果和種子。"
  },
  {
    "word": "marsupial",
    "pos": "n.",
    "cn_def": "有袋動物",
    "en_def": "an animal that carries its baby in a pouch",
    "sentence": "The kangaroo is the most famous {{BLANK}} in Australia, and the mother carries her tiny baby in a pouch for several months.",
    "cn": "袋鼠是澳洲最有名的有袋動物，而母袋鼠會把小小的寶寶放在育兒袋裡好幾個月。"
  },
  {
    "word": "carnivore",
    "pos": "n.",
    "cn_def": "肉食性動物",
    "en_def": "an animal that eats meat",
    "sentence": "A lion is a {{BLANK}} that hunts zebras and other large animals, so it needs to eat a lot of meat to stay strong.",
    "cn": "獅子是一種會獵捕斑馬和其他大型動物的肉食性動物，所以牠需要吃大量的肉才能保持強壯。"
  },
  {
    "word": "herbivore",
    "pos": "n.",
    "cn_def": "草食性動物",
    "en_def": "an animal that eats only plants",
    "sentence": "The giant panda is mostly a {{BLANK}} because it eats bamboo almost all day, although it sometimes eats small animals too.",
    "cn": "大貓熊大多是草食性動物，因為牠幾乎整天都在吃竹子，雖然牠偶爾也會吃小動物。"
  },
  {
    "word": "omnivore",
    "pos": "n.",
    "cn_def": "雜食性動物",
    "en_def": "an animal that eats both plants and meat",
    "sentence": "A bear is an {{BLANK}} that eats fruit, insects and fish, so it can find food easily in different seasons.",
    "cn": "熊是一種會吃水果、昆蟲和魚的雜食性動物，所以牠在不同季節都能輕易找到食物。"
  },
  {
    "word": "predator",
    "pos": "n.",
    "cn_def": "掠食者",
    "en_def": "an animal that hunts and kills other animals",
    "sentence": "The eagle is a powerful {{BLANK}} in the sky, and small birds hide in the bushes whenever they see its shadow.",
    "cn": "老鷹是天空中強大的掠食者，每當小鳥看到牠的影子就會躲進灌木叢裡。"
  },
  {
    "word": "prey",
    "pos": "n.",
    "cn_def": "獵物",
    "en_def": "an animal that is hunted and eaten by another",
    "sentence": "Rabbits are common {{BLANK}} for foxes and owls, so they always stay alert and run quickly when they hear a strange noise.",
    "cn": "兔子是狐狸和貓頭鷹常見的獵物，所以牠們總是保持警覺，一聽到奇怪的聲音就會快速逃跑。"
  },
  {
    "word": "vertebrate",
    "pos": "n.",
    "cn_def": "脊椎動物",
    "en_def": "an animal that has a backbone",
    "sentence": "Fish, birds and humans are all {{BLANK}} because they have a backbone, but worms and jellyfish do not have one.",
    "cn": "魚、鳥和人類都是脊椎動物，因為牠們有脊椎骨，但蟲和水母則沒有。"
  },
  {
    "word": "invertebrate",
    "pos": "n.",
    "cn_def": "無脊椎動物",
    "en_def": "an animal without a backbone",
    "sentence": "An octopus is a clever {{BLANK}} that has no bones at all, so it can squeeze through very small holes.",
    "cn": "章魚是一種聰明的無脊椎動物，牠完全沒有骨頭，所以能擠過非常小的洞。"
  },
  {
    "word": "subspecies",
    "pos": "n.",
    "cn_def": "亞種",
    "en_def": "a smaller group within a species",
    "sentence": "The Formosan black bear is a {{BLANK}} of the Asian black bear, and it has a white V-shaped mark on its chest.",
    "cn": "台灣黑熊是亞洲黑熊的一個亞種，牠的胸前有一個白色的V字形斑紋。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生動植物",
    "en_def": "animals and plants that live in nature",
    "sentence": "Kenting National Park is full of {{BLANK}}, so visitors often see colourful birds, butterflies and even wild deer during their trip.",
    "cn": "墾丁國家公園充滿了野生動植物，所以遊客在旅途中常常能看見色彩繽紛的鳥、蝴蝶，甚至野鹿。"
  },
  {
    "word": "fauna",
    "pos": "n.",
    "cn_def": "動物群；某地區的動物",
    "en_def": "all the animals living in a particular area",
    "sentence": "The {{BLANK}} of Madagascar is very special because about ninety percent of its animals cannot be found anywhere else on Earth.",
    "cn": "馬達加斯加的動物群非常特別，因為那裡大約百分之九十的動物在地球上其他地方都找不到。"
  },
  {
    "word": "flora",
    "pos": "n.",
    "cn_def": "植物群；某地區的植物",
    "en_def": "all the plants growing in a particular area",
    "sentence": "The guide explained the local {{BLANK}} to us during the hike, and we learned that some flowers only bloom in high mountains.",
    "cn": "嚮導在健行途中向我們介紹當地的植物，我們得知有些花只在高山上開花。"
  },
  {
    "word": "organism",
    "pos": "n.",
    "cn_def": "生物；有機體",
    "en_def": "a living thing, such as a plant or animal",
    "sentence": "Even the smallest {{BLANK}} in a pond plays a role in nature, because bigger animals depend on it for food.",
    "cn": "即使是池塘中最小的生物在大自然中也扮演一個角色，因為較大的動物依賴牠作為食物。"
  },
  {
    "word": "specimen",
    "pos": "n.",
    "cn_def": "標本；樣本",
    "en_def": "an example of an animal or plant kept for study",
    "sentence": "The museum keeps a {{BLANK}} of an extinct bird in a glass box, so students can see what it looked like long ago.",
    "cn": "博物館把一隻已滅絕鳥類的標本保存在玻璃盒裡，讓學生們能看到牠很久以前的模樣。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的",
    "en_def": "not seen or found very often",
    "sentence": "The Mikado pheasant is a {{BLANK}} bird that lives only in Taiwan's high mountains, so photographers wait for hours to take its picture.",
    "cn": "帝雉是一種只生活在台灣高山的稀有鳥類，所以攝影師們會等上好幾個小時只為了拍到牠。"
  },
  {
    "word": "endemic",
    "pos": "adj.",
    "cn_def": "特有的",
    "en_def": "found naturally in only one place",
    "sentence": "The Taiwan blue magpie is {{BLANK}} to Taiwan, which means you cannot see this beautiful bird in the wild in any other country.",
    "cn": "台灣藍鵲是台灣特有的鳥類，這表示你在其他任何國家的野外都看不到這種美麗的鳥。"
  },
  {
    "word": "indigenous",
    "pos": "adj.",
    "cn_def": "原生的；本土的",
    "en_def": "belonging naturally to a place; original",
    "sentence": "Farmers planted {{BLANK}} trees along the river instead of foreign ones, because local birds and insects depend on them.",
    "cn": "農夫們沿著河岸種植原生樹木而不是外來樹種，因為當地的鳥類和昆蟲依賴它們生存。"
  },
  {
    "word": "nocturnal",
    "pos": "adj.",
    "cn_def": "夜行性的",
    "en_def": "active at night and sleeping during the day",
    "sentence": "Owls are {{BLANK}} birds that hunt mice in the dark, so you rarely see them flying around during the day.",
    "cn": "貓頭鷹是在黑暗中獵捕老鼠的夜行性鳥類，所以你很少在白天看到牠們飛來飛去。"
  },
  {
    "word": "flightless",
    "pos": "adj.",
    "cn_def": "不會飛的",
    "en_def": "not able to fly",
    "sentence": "The kakapo is a {{BLANK}} parrot from New Zealand, so it walks and climbs trees instead of flying away from danger.",
    "cn": "鴞鸚鵡是一種來自紐西蘭的不會飛的鸚鵡，所以牠遇到危險時是用走和爬樹的方式，而不是飛走。"
  },
  {
    "word": "pollinator",
    "pos": "n.",
    "cn_def": "授粉者",
    "en_def": "an insect or animal that carries pollen between flowers",
    "sentence": "The bee is an important {{BLANK}} for many fruit trees, so farmers worry when the number of bees goes down.",
    "cn": "蜜蜂是許多果樹重要的授粉者，所以當蜜蜂數量減少時，農夫們就會擔心。"
  }
];

const MCQS = [
  {
    "q": "Scientists discovered a new _____ of frog in the mountains of Taiwan, and they are now studying how it survives the cold winters.",
    "options": [
      "horn",
      "rewilding",
      "trophy",
      "species"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The Formosan clouded leopard was once an _____ animal in Taiwan, but sadly no one has seen one in the wild for many years.",
    "options": [
      "dynamic",
      "endangered",
      "domestic",
      "obvious"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Dinosaurs have been _____ for about 66 million years, so we can only learn about them from fossils and bones.",
    "options": [
      "extinct",
      "eco-friendly",
      "ongoing",
      "overseas"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Many frogs around the world face _____ because a deadly disease is spreading quickly, and scientists are racing to find a cure.",
    "options": [
      "livestock",
      "ignorance",
      "extinction",
      "restoration"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Coral reefs have amazing _____ because thousands of fish and sea creatures live there, so protecting them is very important.",
    "options": [
      "biodiversity",
      "harvest",
      "insight",
      "petition"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "A whale looks like a giant fish, but it is actually a _____ because it breathes air and feeds its babies with milk.",
    "options": [
      "duration",
      "snare",
      "bond",
      "mammal"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "A turtle is a _____ that lays its eggs on the beach, and the baby turtles must run to the sea after they hatch.",
    "options": [
      "fragmentation",
      "coexistence",
      "reptile",
      "format"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "A frog is an _____ because it begins life in the water as a tadpole, but later it can also live on land.",
    "options": [
      "aquarium",
      "amphibian",
      "trafficking",
      "seizure"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The Formosan rock macaque is the only wild _____ in Taiwan, and you can often see groups of them at Shoushan in Kaohsiung.",
    "options": [
      "volunteer",
      "landowner",
      "deforestation",
      "primate"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "A squirrel is a _____ with strong front teeth, so it can easily break open hard nuts and seeds in the forest.",
    "options": [
      "livelihood",
      "rodent",
      "margin",
      "ranger"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The kangaroo is the most famous _____ in Australia, and the mother carries her tiny baby in a pouch for several months.",
    "options": [
      "marsupial",
      "hatchling",
      "penalty",
      "livestock"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "A lion is a _____ that hunts zebras and other large animals, so it needs to eat a lot of meat to stay strong.",
    "options": [
      "restoration",
      "ecology",
      "carnivore",
      "ecosystem"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The giant panda is mostly a _____ because it eats bamboo almost all day, although it sometimes eats small animals too.",
    "options": [
      "herbivore",
      "subsidy",
      "manual",
      "captivity"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "A bear is an _____ that eats fruit, insects and fish, so it can find food easily in different seasons.",
    "options": [
      "shepherd",
      "omnivore",
      "compensation",
      "crackdown"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The eagle is a powerful _____ in the sky, and small birds hide in the bushes whenever they see its shadow.",
    "options": [
      "quota",
      "subsidy",
      "predator",
      "destruction"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Rabbits are common _____ for foxes and owls, so they always stay alert and run quickly when they hear a strange noise.",
    "options": [
      "preservation",
      "habitat",
      "retaliation",
      "prey"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Fish, birds and humans are all _____ because they have a backbone, but worms and jellyfish do not have one.",
    "options": [
      "poacher",
      "vertebrate",
      "target",
      "duration"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "An octopus is a clever _____ that has no bones at all, so it can squeeze through very small holes.",
    "options": [
      "formula",
      "link",
      "substitute",
      "invertebrate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The Formosan black bear is a _____ of the Asian black bear, and it has a white V-shaped mark on its chest.",
    "options": [
      "subspecies",
      "trap",
      "litter",
      "rancher"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Kenting National Park is full of _____, so visitors often see colourful birds, butterflies and even wild deer during their trip.",
    "options": [
      "welfare",
      "tundra",
      "wildlife",
      "norm"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ of Madagascar is very special because about ninety percent of its animals cannot be found anywhere else on Earth.",
    "options": [
      "fauna",
      "portion",
      "plastic",
      "calf"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The guide explained the local _____ to us during the hike, and we learned that some flowers only bloom in high mountains.",
    "options": [
      "revenue",
      "nest",
      "flora",
      "livestock"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Even the smallest _____ in a pond plays a role in nature, because bigger animals depend on it for food.",
    "options": [
      "drought",
      "trafficker",
      "estuary",
      "organism"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The museum keeps a _____ of an extinct bird in a glass box, so students can see what it looked like long ago.",
    "options": [
      "zookeeper",
      "specimen",
      "habitat",
      "conservationist"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The Mikado pheasant is a _____ bird that lives only in Taiwan's high mountains, so photographers wait for hours to take its picture.",
    "options": [
      "stable",
      "rational",
      "rare",
      "reluctant"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The Taiwan blue magpie is _____ to Taiwan, which means you cannot see this beautiful bird in the wild in any other country.",
    "options": [
      "captive",
      "unique",
      "ongoing",
      "endemic"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Farmers planted _____ trees along the river instead of foreign ones, because local birds and insects depend on them.",
    "options": [
      "indigenous",
      "rigid",
      "dynamic",
      "mutual"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Owls are _____ birds that hunt mice in the dark, so you rarely see them flying around during the day.",
    "options": [
      "exotic",
      "nocturnal",
      "adjacent",
      "obvious"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The kakapo is a _____ parrot from New Zealand, so it walks and climbs trees instead of flying away from danger.",
    "options": [
      "visible",
      "obvious",
      "flightless",
      "flexible"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The bee is an important _____ for many fruit trees, so farmers worry when the number of bees goes down.",
    "options": [
      "threat",
      "cattle",
      "debris",
      "pollinator"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "species": {
    "pos": "n.",
    "en_def": "a group of animals or plants of the same kind",
    "cn_def": "物種"
  },
  "endangered": {
    "pos": "adj.",
    "en_def": "in danger of disappearing forever",
    "cn_def": "瀕臨絕種的"
  },
  "extinct": {
    "pos": "adj.",
    "en_def": "no longer existing anywhere in the world",
    "cn_def": "絕種的"
  },
  "extinction": {
    "pos": "n.",
    "en_def": "the situation when a species no longer exists",
    "cn_def": "滅絕"
  },
  "biodiversity": {
    "pos": "n.",
    "en_def": "the variety of plants and animals in one place",
    "cn_def": "生物多樣性"
  },
  "mammal": {
    "pos": "n.",
    "en_def": "an animal that feeds its babies with milk",
    "cn_def": "哺乳動物"
  },
  "reptile": {
    "pos": "n.",
    "en_def": "a cold-blooded animal with dry skin, like a snake",
    "cn_def": "爬蟲類動物"
  },
  "amphibian": {
    "pos": "n.",
    "en_def": "an animal that lives both in water and on land",
    "cn_def": "兩棲動物"
  },
  "primate": {
    "pos": "n.",
    "en_def": "a group of animals that includes monkeys, apes and humans",
    "cn_def": "靈長類動物"
  },
  "rodent": {
    "pos": "n.",
    "en_def": "a small animal with sharp front teeth, like a mouse",
    "cn_def": "囓齒動物"
  },
  "marsupial": {
    "pos": "n.",
    "en_def": "an animal that carries its baby in a pouch",
    "cn_def": "有袋動物"
  },
  "carnivore": {
    "pos": "n.",
    "en_def": "an animal that eats meat",
    "cn_def": "肉食性動物"
  },
  "herbivore": {
    "pos": "n.",
    "en_def": "an animal that eats only plants",
    "cn_def": "草食性動物"
  },
  "omnivore": {
    "pos": "n.",
    "en_def": "an animal that eats both plants and meat",
    "cn_def": "雜食性動物"
  },
  "predator": {
    "pos": "n.",
    "en_def": "an animal that hunts and kills other animals",
    "cn_def": "掠食者"
  },
  "prey": {
    "pos": "n.",
    "en_def": "an animal that is hunted and eaten by another",
    "cn_def": "獵物"
  },
  "vertebrate": {
    "pos": "n.",
    "en_def": "an animal that has a backbone",
    "cn_def": "脊椎動物"
  },
  "invertebrate": {
    "pos": "n.",
    "en_def": "an animal without a backbone",
    "cn_def": "無脊椎動物"
  },
  "subspecies": {
    "pos": "n.",
    "en_def": "a smaller group within a species",
    "cn_def": "亞種"
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "animals and plants that live in nature",
    "cn_def": "野生動植物"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals living in a particular area",
    "cn_def": "動物群；某地區的動物"
  },
  "flora": {
    "pos": "n.",
    "en_def": "all the plants growing in a particular area",
    "cn_def": "植物群；某地區的植物"
  },
  "organism": {
    "pos": "n.",
    "en_def": "a living thing, such as a plant or animal",
    "cn_def": "生物；有機體"
  },
  "specimen": {
    "pos": "n.",
    "en_def": "an example of an animal or plant kept for study",
    "cn_def": "標本；樣本"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not seen or found very often",
    "cn_def": "稀有的"
  },
  "endemic": {
    "pos": "adj.",
    "en_def": "found naturally in only one place",
    "cn_def": "特有的"
  },
  "indigenous": {
    "pos": "adj.",
    "en_def": "belonging naturally to a place; original",
    "cn_def": "原生的；本土的"
  },
  "nocturnal": {
    "pos": "adj.",
    "en_def": "active at night and sleeping during the day",
    "cn_def": "夜行性的"
  },
  "flightless": {
    "pos": "adj.",
    "en_def": "not able to fly",
    "cn_def": "不會飛的"
  },
  "pollinator": {
    "pos": "n.",
    "en_def": "an insect or animal that carries pollen between flowers",
    "cn_def": "授粉者"
  },
  "horn": {
    "pos": "n.",
    "en_def": "a hard pointed part growing on an animal's head",
    "cn_def": "角"
  },
  "rewilding": {
    "pos": "n.",
    "en_def": "returning land to its natural wild state",
    "cn_def": "野化；再野化"
  },
  "trophy": {
    "pos": "n.",
    "en_def": "part of a dead animal kept to show hunting success",
    "cn_def": "（狩獵）戰利品"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "always changing and full of energy",
    "cn_def": "動態的；充滿活力的"
  },
  "domestic": {
    "pos": "adj.",
    "en_def": "kept by people at home or on a farm; tame",
    "cn_def": "家養的；馴化的"
  },
  "obvious": {
    "pos": "adj.",
    "en_def": "easy to see or understand",
    "cn_def": "明顯的"
  },
  "eco-friendly": {
    "pos": "adj.",
    "en_def": "not harmful to the environment",
    "cn_def": "環保的；對環境友善的"
  },
  "ongoing": {
    "pos": "adj.",
    "en_def": "still happening; continuing",
    "cn_def": "進行中的；持續的"
  },
  "overseas": {
    "pos": "adj.",
    "en_def": "in or from another country across the sea",
    "cn_def": "海外的；國外的"
  },
  "livestock": {
    "pos": "n.",
    "en_def": "farm animals such as cows, sheep and goats",
    "cn_def": "家畜；牲畜"
  },
  "ignorance": {
    "pos": "n.",
    "en_def": "lack of knowledge about something",
    "cn_def": "無知；不了解"
  },
  "restoration": {
    "pos": "n.",
    "en_def": "the act of returning something to its earlier good condition",
    "cn_def": "復育；修復"
  },
  "harvest": {
    "pos": "n.",
    "en_def": "the time when crops are collected",
    "cn_def": "收成；收穫"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a deep and clear understanding of something",
    "cn_def": "洞察；深刻見解"
  },
  "petition": {
    "pos": "n.",
    "en_def": "a written request signed by many people",
    "cn_def": "請願書；連署"
  },
  "duration": {
    "pos": "n.",
    "en_def": "the length of time something lasts",
    "cn_def": "持續時間；期間"
  },
  "snare": {
    "pos": "n.",
    "en_def": "a trap made of wire for catching animals",
    "cn_def": "（捕獸的）套索；陷阱"
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection between people or animals",
    "cn_def": "聯繫；情感連結"
  },
  "fragmentation": {
    "pos": "n.",
    "en_def": "the breaking of a large area into small separate parts",
    "cn_def": "破碎化；分割"
  },
  "coexistence": {
    "pos": "n.",
    "en_def": "the state of living together peacefully",
    "cn_def": "共存"
  },
  "format": {
    "pos": "n.",
    "en_def": "the way something is arranged or presented",
    "cn_def": "格式；形式"
  },
  "aquarium": {
    "pos": "n.",
    "en_def": "a building where people can see fish and sea animals",
    "cn_def": "水族館"
  },
  "trafficking": {
    "pos": "n.",
    "en_def": "the illegal buying and selling of goods or animals",
    "cn_def": "非法交易；販運"
  },
  "seizure": {
    "pos": "n.",
    "en_def": "the act of taking illegal goods by force or law",
    "cn_def": "查獲；扣押"
  },
  "volunteer": {
    "pos": "n.",
    "en_def": "a person who works without being paid",
    "cn_def": "志工；義工"
  },
  "landowner": {
    "pos": "n.",
    "en_def": "a person who owns land",
    "cn_def": "地主"
  },
  "deforestation": {
    "pos": "n.",
    "en_def": "the cutting down of forests on a large scale",
    "cn_def": "森林砍伐"
  },
  "livelihood": {
    "pos": "n.",
    "en_def": "the way someone earns money to live",
    "cn_def": "生計"
  },
  "margin": {
    "pos": "n.",
    "en_def": "the edge of an area",
    "cn_def": "邊緣"
  },
  "ranger": {
    "pos": "n.",
    "en_def": "a person whose job is to protect a park or forest",
    "cn_def": "巡山員；保育巡查員"
  },
  "hatchling": {
    "pos": "n.",
    "en_def": "a baby animal that has just come out of its egg",
    "cn_def": "剛孵化的幼體"
  },
  "penalty": {
    "pos": "n.",
    "en_def": "a punishment for breaking a law",
    "cn_def": "處罰；刑罰"
  },
  "ecology": {
    "pos": "n.",
    "en_def": "the study of how living things relate to their environment",
    "cn_def": "生態學"
  },
  "ecosystem": {
    "pos": "n.",
    "en_def": "all the living things in an area and how they connect",
    "cn_def": "生態系統"
  },
  "subsidy": {
    "pos": "n.",
    "en_def": "money a government pays to help reduce costs",
    "cn_def": "補貼；津貼"
  },
  "manual": {
    "pos": "n.",
    "en_def": "a book that tells you how to do something",
    "cn_def": "手冊；指南"
  },
  "captivity": {
    "pos": "n.",
    "en_def": "the state of being kept in a cage or zoo",
    "cn_def": "圈養；囚禁"
  },
  "shepherd": {
    "pos": "n.",
    "en_def": "a person who looks after sheep",
    "cn_def": "牧羊人"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money paid to someone for a loss",
    "cn_def": "補償；賠償金"
  },
  "crackdown": {
    "pos": "n.",
    "en_def": "strong official action to stop illegal activity",
    "cn_def": "嚴厲打擊；取締"
  },
  "quota": {
    "pos": "n.",
    "en_def": "a fixed limit on the number of something allowed",
    "cn_def": "配額；限額"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act of damaging something so badly it cannot be used",
    "cn_def": "破壞；毀滅"
  },
  "preservation": {
    "pos": "n.",
    "en_def": "the act of keeping something safe from harm",
    "cn_def": "保存；保護"
  },
  "habitat": {
    "pos": "n.",
    "en_def": "the natural home of an animal or plant",
    "cn_def": "棲地；棲息地"
  },
  "retaliation": {
    "pos": "n.",
    "en_def": "action taken to hurt someone who hurt you",
    "cn_def": "報復（行為）"
  },
  "poacher": {
    "pos": "n.",
    "en_def": "a person who hunts animals illegally",
    "cn_def": "盜獵者"
  },
  "target": {
    "pos": "n.",
    "en_def": "a goal you want to achieve",
    "cn_def": "目標"
  },
  "formula": {
    "pos": "n.",
    "en_def": "a special mix of ingredients",
    "cn_def": "配方"
  },
  "link": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯；連結"
  },
  "substitute": {
    "pos": "n.",
    "en_def": "something used instead of another thing",
    "cn_def": "替代品"
  },
  "trap": {
    "pos": "n.",
    "en_def": "a device for catching animals",
    "cn_def": "陷阱；捕獸器"
  },
  "litter": {
    "pos": "n.",
    "en_def": "a group of baby animals born at the same time",
    "cn_def": "一窩（幼崽）"
  },
  "rancher": {
    "pos": "n.",
    "en_def": "a person who owns or runs a large cattle farm",
    "cn_def": "牧場主人"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health and happiness of people or animals",
    "cn_def": "福利；福祉"
  },
  "tundra": {
    "pos": "n.",
    "en_def": "a cold, flat area with no trees near the Arctic",
    "cn_def": "凍原；苔原"
  },
  "norm": {
    "pos": "n.",
    "en_def": "what is usual or expected",
    "cn_def": "常態；規範"
  },
  "portion": {
    "pos": "n.",
    "en_def": "a part of something larger",
    "cn_def": "部分"
  },
  "plastic": {
    "pos": "n.",
    "en_def": "a light material made from chemicals, used for bags and bottles",
    "cn_def": "塑膠"
  },
  "calf": {
    "pos": "n.",
    "en_def": "a young cow, elephant or whale",
    "cn_def": "幼崽（牛、象、鯨等）"
  },
  "revenue": {
    "pos": "n.",
    "en_def": "money that a business or government receives",
    "cn_def": "收入；營收"
  },
  "nest": {
    "pos": "n.",
    "en_def": "a home that birds build for their eggs",
    "cn_def": "巢；鳥巢"
  },
  "drought": {
    "pos": "n.",
    "en_def": "a long period with little or no rain",
    "cn_def": "乾旱"
  },
  "trafficker": {
    "pos": "n.",
    "en_def": "a person who buys and sells illegal goods",
    "cn_def": "非法販運者"
  },
  "estuary": {
    "pos": "n.",
    "en_def": "the wide part of a river where it meets the sea",
    "cn_def": "河口"
  },
  "zookeeper": {
    "pos": "n.",
    "en_def": "a person who looks after animals in a zoo",
    "cn_def": "動物園管理員；保育員"
  },
  "conservationist": {
    "pos": "n.",
    "en_def": "a person who works to protect nature",
    "cn_def": "保育人士"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "not changing much; steady",
    "cn_def": "穩定的"
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on clear thinking, not feelings",
    "cn_def": "理性的"
  },
  "reluctant": {
    "pos": "adj.",
    "en_def": "not willing to do something",
    "cn_def": "不情願的"
  },
  "captive": {
    "pos": "adj.",
    "en_def": "kept in a cage or enclosed area; not free",
    "cn_def": "圈養的；被捕獲的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "rigid": {
    "pos": "adj.",
    "en_def": "very strict and difficult to change",
    "cn_def": "嚴格的；死板的"
  },
  "mutual": {
    "pos": "adj.",
    "en_def": "shared by two or more people or animals",
    "cn_def": "互相的；共同的"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "from a faraway country; unusual and interesting",
    "cn_def": "外來的；奇特的"
  },
  "adjacent": {
    "pos": "adj.",
    "en_def": "next to or near something",
    "cn_def": "鄰近的；毗連的"
  },
  "visible": {
    "pos": "adj.",
    "en_def": "able to be seen",
    "cn_def": "看得見的；明顯的"
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily",
    "cn_def": "有彈性的；靈活的"
  },
  "threat": {
    "pos": "n.",
    "en_def": "something that may cause harm or danger",
    "cn_def": "威脅"
  },
  "cattle": {
    "pos": "n.",
    "en_def": "cows and bulls kept on a farm",
    "cn_def": "牛（總稱）"
  },
  "debris": {
    "pos": "n.",
    "en_def": "broken pieces of rubbish that are left behind",
    "cn_def": "碎片；殘骸；垃圾"
  }
};

const EXTRA_GLOSSES = {};
