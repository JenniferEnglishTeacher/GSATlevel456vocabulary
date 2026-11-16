// Topic 13 Subunit 2 Quiz Data: Human Evolution & Our Relatives 人類演化與近親
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S02 - Human Evolution & Our Relatives 人類演化與近親",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hominid",
    "pos": "n.",
    "cn_def": "人科動物",
    "en_def": "a member of the group including humans and great apes",
    "sentence": "The team discovered the teeth of an early {{BLANK}} in a cave, and they believe it lived about two million years ago.",
    "cn": "研究團隊在一個洞穴中發現了一個早期人科動物的牙齒，他們相信牠生活在大約兩百萬年前。"
  },
  {
    "word": "Homo sapiens",
    "pos": "n.",
    "cn_def": "智人",
    "en_def": "the scientific name for modern humans",
    "sentence": "{{BLANK}} first appeared in Africa, and over thousands of years our species spread to every continent.",
    "cn": "智人最早出現在非洲，而經過數千年，我們這個物種擴散到了每一個大陸。"
  },
  {
    "word": "Neanderthal",
    "pos": "n.",
    "cn_def": "尼安德塔人",
    "en_def": "an early human who lived in Europe and Asia",
    "sentence": "Many people today carry a little {{BLANK}} DNA, because our ancestors met and had children with them long ago.",
    "cn": "現今許多人身上帶有一點尼安德塔人的DNA，因為我們的祖先很久以前曾與他們相遇並生下孩子。"
  },
  {
    "word": "great ape",
    "pos": "n.phr.",
    "cn_def": "大型猿類",
    "en_def": "a large primate such as a gorilla or chimpanzee",
    "sentence": "The zoo built a large forest area for every {{BLANK}}, because these clever animals need space to climb and explore.",
    "cn": "動物園為每一隻大型猿類建造了大片森林區，因為這些聰明的動物需要空間攀爬和探索。"
  },
  {
    "word": "chimpanzee",
    "pos": "n.",
    "cn_def": "黑猩猩",
    "en_def": "an African ape that is closely related to humans",
    "sentence": "Jane Goodall watched a {{BLANK}} use a stick to catch termites, and this showed that animals can make tools too.",
    "cn": "珍古德看見一隻黑猩猩用樹枝捕捉白蟻，而這顯示動物也會製作工具。"
  },
  {
    "word": "gorilla",
    "pos": "n.",
    "cn_def": "大猩猩",
    "en_def": "the largest ape, living in African forests",
    "sentence": "The silverback {{BLANK}} looked scary, but he was very gentle with the babies in his family.",
    "cn": "那隻銀背大猩猩看起來很可怕，但他對家族裡的寶寶非常溫柔。"
  },
  {
    "word": "orangutan",
    "pos": "n.",
    "cn_def": "紅毛猩猩",
    "en_def": "a red-haired ape from Borneo and Sumatra",
    "sentence": "The young {{BLANK}} stays with its mother for about eight years, and she teaches it which fruits are safe to eat.",
    "cn": "年幼的紅毛猩猩會和媽媽待在一起大約八年，而媽媽會教牠哪些水果可以安全食用。"
  },
  {
    "word": "bonobo",
    "pos": "n.",
    "cn_def": "巴諾布猿",
    "en_def": "a peaceful ape closely related to the chimpanzee",
    "sentence": "A {{BLANK}} group usually solves fights by sharing food and hugging, so scientists call them the peaceful apes.",
    "cn": "巴諾布猿群體通常以分享食物和擁抱來解決爭吵，所以科學家稱牠們為和平的猿類。"
  },
  {
    "word": "bipedal",
    "pos": "adj.",
    "cn_def": "雙足行走的",
    "en_def": "walking on two legs",
    "sentence": "Our early ancestors became {{BLANK}} on the open grasslands, and walking upright left their hands free to carry food.",
    "cn": "我們早期的祖先在開闊的草原上變成雙足行走的，而直立行走讓他們的雙手能空出來搬運食物。"
  },
  {
    "word": "upright",
    "pos": "adj.",
    "cn_def": "直立的",
    "en_def": "standing straight up",
    "sentence": "Bears can stand {{BLANK}} for a short time, but they usually walk on four legs when they look for food.",
    "cn": "熊可以短時間直立站著，但牠們找食物時通常用四條腿走路。"
  },
  {
    "word": "posture",
    "pos": "n.",
    "cn_def": "姿勢",
    "en_def": "the way you hold your body",
    "sentence": "Sitting at a desk for hours is bad for your {{BLANK}}, and doctors say our spines evolved for walking, not sitting.",
    "cn": "在書桌前坐好幾個小時對你的姿勢不好，醫生說我們的脊椎是為了走路而演化的，而不是為了坐著。"
  },
  {
    "word": "opposable thumb",
    "pos": "n.phr.",
    "cn_def": "可對握的拇指",
    "en_def": "a thumb that can touch the other fingers",
    "sentence": "We can hold a pencil and open a jar easily, because we have an {{BLANK}} that works with our other fingers.",
    "cn": "我們能輕鬆握筆和打開罐子，因為我們有一根能與其他手指配合的可對握的拇指。"
  },
  {
    "word": "toolmaking",
    "pos": "n.",
    "cn_def": "工具製作",
    "en_def": "the activity of making tools",
    "sentence": "Early {{BLANK}} began with simple sharp stones, but over time people learned to make spears, needles and fishing hooks.",
    "cn": "早期的工具製作從簡單的尖銳石頭開始，但隨著時間推移，人們學會了製作矛、針和魚鉤。"
  },
  {
    "word": "early humans",
    "pos": "n.phr.",
    "cn_def": "早期人類",
    "en_def": "people who lived very long ago",
    "sentence": "{{BLANK}} learned to control fire, and cooking their food gave them more energy for their growing brains.",
    "cn": "早期人類學會了控制火，而烹煮食物讓他們有更多能量供應逐漸變大的大腦。"
  },
  {
    "word": "interbreed",
    "pos": "v.",
    "cn_def": "雜交繁殖",
    "en_def": "to produce young with a different group or species",
    "sentence": "Modern humans and Neanderthals {{BLANK}} in the past, so traces of their DNA still exist in many people today.",
    "cn": "現代人類和尼安德塔人過去曾雜交繁殖，所以他們DNA的痕跡至今仍存在於許多人身上。",
    "answer": "interbred",
    "alts": [
      "interbreed"
    ]
  },
  {
    "word": "skeletal",
    "pos": "adj.",
    "cn_def": "骨骼的",
    "en_def": "relating to the bones of a body",
    "sentence": "The doctor studied the {{BLANK}} remains carefully, and she found that the person had walked long distances every day.",
    "cn": "這位醫生仔細研究了這些骨骼的遺骸，並發現這個人生前每天都走很長的路。"
  },
  {
    "word": "jawbone",
    "pos": "n.",
    "cn_def": "顎骨",
    "en_def": "the bone that holds the lower teeth",
    "sentence": "The ancient {{BLANK}} was small and had worn teeth, so scientists guessed the person ate tough plants.",
    "cn": "這塊古老的顎骨很小，牙齒也磨損了，所以科學家推測這個人吃的是堅韌的植物。"
  },
  {
    "word": "spine",
    "pos": "n.",
    "cn_def": "脊椎",
    "en_def": "the row of bones down the middle of your back",
    "sentence": "Our {{BLANK}} has an S-shape that helps us walk on two legs, but it also explains why so many adults get back pain.",
    "cn": "我們的脊椎呈S形，幫助我們用雙腿走路，但這也解釋了為什麼這麼多成年人會背痛。"
  },
  {
    "word": "primatologist",
    "pos": "n.",
    "cn_def": "靈長類動物學家",
    "en_def": "a scientist who studies monkeys and apes",
    "sentence": "The {{BLANK}} lived in the rainforest for two years, and she learned to recognise every monkey by its face.",
    "cn": "那位靈長類動物學家在雨林裡住了兩年，而她學會了從臉認出每一隻猴子。"
  },
  {
    "word": "anthropologist",
    "pos": "n.",
    "cn_def": "人類學家",
    "en_def": "a person who studies human societies and cultures",
    "sentence": "An {{BLANK}} visited the mountain village to study its traditions, and the villagers taught her their old songs.",
    "cn": "一位人類學家到山村研究當地的傳統，而村民教她唱他們古老的歌謠。"
  },
  {
    "word": "anthropology",
    "pos": "n.",
    "cn_def": "人類學",
    "en_def": "the study of humans, their history and culture",
    "sentence": "My sister is studying {{BLANK}} at university, because she wants to understand how people lived thousands of years ago.",
    "cn": "我姐姐在大學主修人類學，因為她想了解人們數千年前是如何生活的。"
  },
  {
    "word": "body hair",
    "pos": "n.phr.",
    "cn_def": "體毛",
    "en_def": "the hair that grows on the body",
    "sentence": "Humans lost most of their {{BLANK}} over time, and some scientists think this helped them stay cool while running.",
    "cn": "人類隨著時間失去了大部分的體毛，而有些科學家認為這幫助他們在奔跑時保持涼爽。"
  }
];

const MCQS = [
  {
    "q": "The team discovered the teeth of an early _____ in a cave, and they believe it lived about two million years ago.",
    "options": [
      "RNA",
      "hominid",
      "scent",
      "proclivity"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "_____ first appeared in Africa, and over thousands of years our species spread to every continent.",
    "options": [
      "vampire bat",
      "convergent evolution",
      "selection pressure",
      "Homo sapiens"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Many people today carry a little _____ DNA, because our ancestors met and had children with them long ago.",
    "options": [
      "Neanderthal",
      "brood",
      "microbe",
      "birdsong"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The zoo built a large forest area for every _____, because these clever animals need space to climb and explore.",
    "options": [
      "selection pressure",
      "designer baby",
      "great ape",
      "vampire bat"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Jane Goodall watched a _____ use a stick to catch termites, and this showed that animals can make tools too.",
    "options": [
      "peacock",
      "chimpanzee",
      "narrative",
      "dimple"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The silverback _____ looked scary, but he was very gentle with the babies in his family.",
    "options": [
      "reflex",
      "abnormality",
      "gorilla",
      "manifestation"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The young _____ stays with its mother for about eight years, and she teaches it which fruits are safe to eat.",
    "options": [
      "orangutan",
      "descent",
      "pack",
      "analysis"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A _____ group usually solves fights by sharing food and hugging, so scientists call them the peaceful apes.",
    "options": [
      "scepticism",
      "naturalist",
      "analysis",
      "bonobo"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Our early ancestors became _____ on the open grasslands, and walking upright left their hands free to carry food.",
    "options": [
      "bipedal",
      "biomedical",
      "responsive",
      "purposeful"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Bears can stand _____ for a short time, but they usually walk on four legs when they look for food.",
    "options": [
      "fraternal",
      "upright",
      "ancestral",
      "attuned"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Sitting at a desk for hours is bad for your _____, and doctors say our spines evolved for walking, not sitting.",
    "options": [
      "enzyme",
      "fitness",
      "archetype",
      "posture"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "We can hold a pencil and open a jar easily, because we have an _____ that works with our other fingers.",
    "options": [
      "convergent evolution",
      "double helix",
      "opposable thumb",
      "precision medicine"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Early _____ began with simple sharp stones, but over time people learned to make spears, needles and fishing hooks.",
    "options": [
      "abnormality",
      "RNA",
      "observer",
      "toolmaking"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "_____ learned to control fire, and cooking their food gave them more energy for their growing brains.",
    "options": [
      "sexual selection",
      "early humans",
      "base pair",
      "convergent evolution"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Modern humans and Neanderthals _____ in the past, so traces of their DNA still exist in many people today.",
    "options": [
      "interbred",
      "exterminate",
      "conceptualise",
      "relate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The doctor studied the _____ remains carefully, and she found that the person had walked long distances every day.",
    "options": [
      "multicellular",
      "reclusive",
      "skeletal",
      "purebred"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The ancient _____ was small and had worn teeth, so scientists guessed the person ate tough plants.",
    "options": [
      "jawbone",
      "anthropomorphism",
      "plumage",
      "pack"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Our _____ has an S-shape that helps us walk on two legs, but it also explains why so many adults get back pain.",
    "options": [
      "mutation",
      "mitochondria",
      "spine",
      "cell"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The _____ lived in the rainforest for two years, and she learned to recognise every monkey by its face.",
    "options": [
      "coevolution",
      "primatologist",
      "genetics",
      "tissue"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "An _____ visited the mountain village to study its traditions, and the villagers taught her their old songs.",
    "options": [
      "biobank",
      "misunderstanding",
      "fidelity",
      "anthropologist"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "My sister is studying _____ at university, because she wants to understand how people lived thousands of years ago.",
    "options": [
      "donor",
      "fluke",
      "anthropology",
      "nucleus"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Humans lost most of their _____ over time, and some scientists think this helped them stay cool while running.",
    "options": [
      "gene therapy",
      "body hair",
      "sexual selection",
      "waggle dance"
    ],
    "answer": 1,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "hominid": {
    "pos": "n.",
    "en_def": "a member of the group including humans and great apes",
    "cn_def": "人科動物"
  },
  "homo sapiens": {
    "pos": "n.",
    "en_def": "the scientific name for modern humans",
    "cn_def": "智人"
  },
  "neanderthal": {
    "pos": "n.",
    "en_def": "an early human who lived in Europe and Asia",
    "cn_def": "尼安德塔人"
  },
  "great ape": {
    "pos": "n.phr.",
    "en_def": "a large primate such as a gorilla or chimpanzee",
    "cn_def": "大型猿類"
  },
  "chimpanzee": {
    "pos": "n.",
    "en_def": "an African ape that is closely related to humans",
    "cn_def": "黑猩猩"
  },
  "gorilla": {
    "pos": "n.",
    "en_def": "the largest ape, living in African forests",
    "cn_def": "大猩猩"
  },
  "orangutan": {
    "pos": "n.",
    "en_def": "a red-haired ape from Borneo and Sumatra",
    "cn_def": "紅毛猩猩"
  },
  "bonobo": {
    "pos": "n.",
    "en_def": "a peaceful ape closely related to the chimpanzee",
    "cn_def": "巴諾布猿"
  },
  "bipedal": {
    "pos": "adj.",
    "en_def": "walking on two legs",
    "cn_def": "雙足行走的"
  },
  "upright": {
    "pos": "adj.",
    "en_def": "standing straight up",
    "cn_def": "直立的"
  },
  "posture": {
    "pos": "n.",
    "en_def": "the way you hold your body",
    "cn_def": "姿勢"
  },
  "opposable thumb": {
    "pos": "n.phr.",
    "en_def": "a thumb that can touch the other fingers",
    "cn_def": "可對握的拇指"
  },
  "toolmaking": {
    "pos": "n.",
    "en_def": "the activity of making tools",
    "cn_def": "工具製作"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "interbreed": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "interbred": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "skeletal": {
    "pos": "adj.",
    "en_def": "relating to the bones of a body",
    "cn_def": "骨骼的"
  },
  "jawbone": {
    "pos": "n.",
    "en_def": "the bone that holds the lower teeth",
    "cn_def": "顎骨"
  },
  "spine": {
    "pos": "n.",
    "en_def": "the row of bones down the middle of your back",
    "cn_def": "脊椎"
  },
  "primatologist": {
    "pos": "n.",
    "en_def": "a scientist who studies monkeys and apes",
    "cn_def": "靈長類動物學家"
  },
  "anthropologist": {
    "pos": "n.",
    "en_def": "a person who studies human societies and cultures",
    "cn_def": "人類學家"
  },
  "anthropology": {
    "pos": "n.",
    "en_def": "the study of humans, their history and culture",
    "cn_def": "人類學"
  },
  "body hair": {
    "pos": "n.phr.",
    "en_def": "the hair that grows on the body",
    "cn_def": "體毛"
  },
  "rna": {
    "pos": "n.",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "cn_def": "核糖核酸"
  },
  "scent": {
    "pos": "n.",
    "en_def": "a smell, especially one left by an animal",
    "cn_def": "氣味"
  },
  "proclivity": {
    "pos": "n.",
    "en_def": "a natural tendency to do something",
    "cn_def": "傾向；癖好"
  },
  "vampire bat": {
    "pos": "n.phr.",
    "en_def": "a bat that feeds on the blood of animals",
    "cn_def": "吸血蝙蝠"
  },
  "convergent evolution": {
    "pos": "n.phr.",
    "en_def": "when unrelated animals develop similar features",
    "cn_def": "趨同演化"
  },
  "selection pressure": {
    "pos": "n.phr.",
    "en_def": "a force in nature that affects which animals survive",
    "cn_def": "選擇壓力"
  },
  "brood": {
    "pos": "n.",
    "en_def": "a group of young birds born at the same time",
    "cn_def": "一窩幼鳥"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "birdsong": {
    "pos": "n.",
    "en_def": "the musical sounds that birds make",
    "cn_def": "鳥鳴"
  },
  "designer baby": {
    "pos": "n.phr.",
    "en_def": "a baby whose genes are chosen or changed by parents",
    "cn_def": "訂製嬰兒"
  },
  "peacock": {
    "pos": "n.",
    "en_def": "a male bird with a large, colourful tail",
    "cn_def": "雄孔雀"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or explanation of events",
    "cn_def": "敘事；說法"
  },
  "dimple": {
    "pos": "n.",
    "en_def": "a small hollow in the cheek when you smile",
    "cn_def": "酒窩"
  },
  "reflex": {
    "pos": "n.",
    "en_def": "an automatic movement you do not think about",
    "cn_def": "反射動作"
  },
  "abnormality": {
    "pos": "n.",
    "en_def": "something that is not usual, often a health problem",
    "cn_def": "異常"
  },
  "manifestation": {
    "pos": "n.",
    "en_def": "a sign that shows something exists",
    "cn_def": "表現；顯現"
  },
  "descent": {
    "pos": "n.",
    "en_def": "coming from earlier family members or species",
    "cn_def": "血統；由來"
  },
  "pack": {
    "pos": "n.",
    "en_def": "a group of wolves or wild dogs",
    "cn_def": "（狼）群"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "scepticism": {
    "pos": "n.",
    "en_def": "doubt about whether something is true",
    "cn_def": "懷疑態度"
  },
  "naturalist": {
    "pos": "n.",
    "en_def": "a person who studies plants and animals in nature",
    "cn_def": "博物學家"
  },
  "biomedical": {
    "pos": "adj.",
    "en_def": "relating to biology and medicine",
    "cn_def": "生物醫學的"
  },
  "responsive": {
    "pos": "adj.",
    "en_def": "reacting quickly and positively",
    "cn_def": "反應靈敏的"
  },
  "purposeful": {
    "pos": "adj.",
    "en_def": "done with a clear aim",
    "cn_def": "有目的的"
  },
  "fraternal": {
    "pos": "adj.",
    "en_def": "(of twins) from two different eggs",
    "cn_def": "異卵的"
  },
  "ancestral": {
    "pos": "adj.",
    "en_def": "belonging to earlier family members or species",
    "cn_def": "祖先的"
  },
  "attuned": {
    "pos": "adj.",
    "en_def": "able to understand and react to something",
    "cn_def": "適應的；熟悉的"
  },
  "enzyme": {
    "pos": "n.",
    "en_def": "a substance in the body that speeds up chemical changes",
    "cn_def": "酵素"
  },
  "fitness": {
    "pos": "n.",
    "en_def": "how well a living thing survives and has young",
    "cn_def": "適存度"
  },
  "archetype": {
    "pos": "n.",
    "en_def": "a perfect typical example of something",
    "cn_def": "典型；原型"
  },
  "double helix": {
    "pos": "n.phr.",
    "en_def": "the twisted ladder shape of DNA",
    "cn_def": "雙螺旋"
  },
  "precision medicine": {
    "pos": "n.phr.",
    "en_def": "treatment planned for a person's own genes",
    "cn_def": "精準醫療"
  },
  "observer": {
    "pos": "n.",
    "en_def": "a person who watches something carefully",
    "cn_def": "觀察者"
  },
  "sexual selection": {
    "pos": "n.phr.",
    "en_def": "choosing mates by features such as bright colours or songs",
    "cn_def": "性擇"
  },
  "base pair": {
    "pos": "n.phr.",
    "en_def": "two matching chemical units that form a step in DNA",
    "cn_def": "鹼基對"
  },
  "exterminate": {
    "pos": "v.",
    "en_def": "to kill all of a group of animals",
    "cn_def": "撲滅；滅絕"
  },
  "conceptualise": {
    "pos": "v.",
    "en_def": "to form an idea of something in your mind",
    "cn_def": "構想；概念化"
  },
  "relate": {
    "pos": "v.",
    "en_def": "to find or show a connection",
    "cn_def": "有關聯；與…相關"
  },
  "multicellular": {
    "pos": "adj.",
    "en_def": "made of many cells working together",
    "cn_def": "多細胞的"
  },
  "reclusive": {
    "pos": "adj.",
    "en_def": "avoiding others and living alone",
    "cn_def": "隱居的；不喜交際的"
  },
  "purebred": {
    "pos": "adj.",
    "en_def": "having parents of the same breed",
    "cn_def": "純種的"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "plumage": {
    "pos": "n.",
    "en_def": "a bird's feathers",
    "cn_def": "羽毛"
  },
  "mutation": {
    "pos": "n.",
    "en_def": "a change in a gene",
    "cn_def": "突變"
  },
  "mitochondria": {
    "pos": "n.",
    "en_def": "parts of a cell that make energy",
    "cn_def": "粒線體"
  },
  "cell": {
    "pos": "n.",
    "en_def": "the smallest living unit of a plant or animal",
    "cn_def": "細胞"
  },
  "coevolution": {
    "pos": "n.",
    "en_def": "when two species change over time because of each other",
    "cn_def": "共同演化"
  },
  "genetics": {
    "pos": "n.",
    "en_def": "the science of how features pass from parents to children",
    "cn_def": "遺傳學"
  },
  "tissue": {
    "pos": "n.",
    "en_def": "a group of similar cells that work together",
    "cn_def": "組織"
  },
  "biobank": {
    "pos": "n.",
    "en_def": "a store of blood and DNA samples for research",
    "cn_def": "生物資料庫"
  },
  "misunderstanding": {
    "pos": "n.",
    "en_def": "a failure to understand correctly",
    "cn_def": "誤會；誤解"
  },
  "fidelity": {
    "pos": "n.",
    "en_def": "loyalty to a partner",
    "cn_def": "忠誠"
  },
  "donor": {
    "pos": "n.",
    "en_def": "a person who gives blood or body parts to help others",
    "cn_def": "捐贈者"
  },
  "fluke": {
    "pos": "n.",
    "en_def": "a lucky or unusual result that happens by chance",
    "cn_def": "僥倖；偶然"
  },
  "nucleus": {
    "pos": "n.",
    "en_def": "the centre of a cell that holds the DNA",
    "cn_def": "細胞核"
  },
  "gene therapy": {
    "pos": "n.phr.",
    "en_def": "treating illness by changing a patient's genes",
    "cn_def": "基因療法"
  },
  "waggle dance": {
    "pos": "n.phr.",
    "en_def": "a dance bees do to show where food is",
    "cn_def": "搖擺舞"
  }
};

const EXTRA_GLOSSES = {};
