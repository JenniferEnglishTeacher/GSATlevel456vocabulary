// Topic 13 Subunit 11 Quiz Data: Academic Words 學術單字 4 (statistically – recognise)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S11 - Academic Words 學術單字 4 (statistically – recognise)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "statistically",
    "pos": "adv.",
    "cn_def": "統計上",
    "en_def": "according to numbers and data",
    "sentence": "The difference between the two groups was not {{BLANK}} important, so the scientists could not support their idea.",
    "cn": "兩組之間的差異在統計上並不顯著，所以科學家無法支持他們的想法。"
  },
  {
    "word": "uniquely",
    "pos": "adv.",
    "cn_def": "獨特地",
    "en_def": "in a way that no other thing has",
    "sentence": "Humans are {{BLANK}} good at learning languages, but many animals also communicate in surprising ways.",
    "cn": "人類在學習語言方面獨特地擅長，但許多動物也以令人驚訝的方式溝通。"
  },
  {
    "word": "sharply",
    "pos": "adv.",
    "cn_def": "急劇地",
    "en_def": "suddenly and by a large amount",
    "sentence": "The number of bees fell {{BLANK}} last year, and farmers worried about their fruit trees.",
    "cn": "蜜蜂的數量去年急劇地下降，而農民們擔心他們的果樹。"
  },
  {
    "word": "drastically",
    "pos": "adv.",
    "cn_def": "大幅地；劇烈地",
    "en_def": "in a sudden and extreme way",
    "sentence": "The cost of reading DNA has fallen {{BLANK}}, so many hospitals can now test patients' genes.",
    "cn": "讀取DNA的成本已經大幅地下降，所以現在許多醫院都能檢測病人的基因。"
  },
  {
    "word": "conceptualise",
    "pos": "v.",
    "cn_def": "構想；概念化",
    "en_def": "to form an idea of something in your mind",
    "sentence": "It is hard to {{BLANK}} how long four billion years is, so our teacher compared Earth's history to a single day.",
    "cn": "很難構想四十億年有多長，所以我們老師把地球的歷史比喻成一天。"
  },
  {
    "word": "construe",
    "pos": "v.",
    "cn_def": "理解；解讀",
    "en_def": "to understand something in a certain way",
    "sentence": "People often {{BLANK}} a chimp's wide smile as happiness, but it usually means the animal is afraid.",
    "cn": "人們常常把黑猩猩咧嘴的笑容解讀為快樂，但那通常表示這隻動物很害怕。"
  },
  {
    "word": "deceive",
    "pos": "v.",
    "cn_def": "欺騙",
    "en_def": "to make someone believe something false",
    "sentence": "Some birds {{BLANK}} their enemies by pretending to have a broken wing, and they lead the danger away from the nest.",
    "cn": "有些鳥會假裝翅膀受傷來欺騙牠們的敵人，並把危險引離巢穴。"
  },
  {
    "word": "differ",
    "pos": "v.",
    "cn_def": "不同",
    "en_def": "to be not the same",
    "sentence": "Human DNA does not {{BLANK}} much from person to person, so we are all more alike than we think.",
    "cn": "人類的DNA在人與人之間並沒有太大的不同，所以我們彼此比自己想像的更相似。"
  },
  {
    "word": "disprove",
    "pos": "v.",
    "cn_def": "證明…是錯的",
    "en_def": "to show that something is not true",
    "sentence": "The experiment was designed to {{BLANK}} the old belief, and the results clearly showed that it was wrong.",
    "cn": "這個實驗是為了證明那個舊觀念是錯的而設計的，而結果清楚地顯示它確實錯了。"
  },
  {
    "word": "duplicate",
    "pos": "v.",
    "cn_def": "複製",
    "en_def": "to make an exact copy",
    "sentence": "Before a cell divides, it must {{BLANK}} its DNA, so each new cell gets a full set of instructions.",
    "cn": "細胞在分裂之前必須複製它的DNA，這樣每個新細胞才能得到一整套指令。"
  },
  {
    "word": "elapse",
    "pos": "v.",
    "cn_def": "（時間）流逝",
    "en_def": "(of time) to pass",
    "sentence": "Millions of years must {{BLANK}} before a new species forms, so we rarely see it happen in our lifetime.",
    "cn": "必須流逝數百萬年才會形成一個新物種，所以我們很少在一生中看到它發生。"
  },
  {
    "word": "enrich",
    "pos": "v.",
    "cn_def": "豐富；充實",
    "en_def": "to improve the quality of something",
    "sentence": "Zoos {{BLANK}} the lives of their animals with toys and puzzles, because bored animals can become stressed.",
    "cn": "動物園用玩具和益智遊戲來豐富動物的生活，因為無聊的動物會變得有壓力。"
  },
  {
    "word": "favour",
    "pos": "v.",
    "cn_def": "有利於；偏好",
    "en_def": "to give an advantage to",
    "sentence": "Cold weather tends to {{BLANK}} animals with thick fur, so mammals in the far north are usually furry.",
    "cn": "寒冷的天氣往往有利於毛皮厚的動物，所以極北地區的哺乳類通常都毛茸茸的。"
  },
  {
    "word": "infest",
    "pos": "v.",
    "cn_def": "大批出沒；侵擾",
    "en_def": "(of insects or animals) to fill a place in large numbers",
    "sentence": "Fleas can {{BLANK}} a house very quickly, so pet owners should check their animals regularly.",
    "cn": "跳蚤能很快地侵擾一間房子，所以寵物主人應該定期檢查他們的動物。"
  },
  {
    "word": "possess",
    "pos": "v.",
    "cn_def": "擁有",
    "en_def": "to have or own",
    "sentence": "Many birds {{BLANK}} a kind of compass in their eyes, and this helps them find their way across oceans.",
    "cn": "許多鳥類眼中擁有一種指南針，而這幫助牠們找到橫越海洋的路。"
  },
  {
    "word": "secrete",
    "pos": "v.",
    "cn_def": "分泌",
    "en_def": "to produce a liquid inside the body",
    "sentence": "Frogs {{BLANK}} a slimy liquid from their skin, and it keeps them wet and protects them from germs.",
    "cn": "青蛙從皮膚分泌一種黏滑的液體，而它能保持牠們濕潤並保護牠們免受細菌感染。"
  },
  {
    "word": "alternate",
    "pos": "v.",
    "cn_def": "輪流；交替",
    "en_def": "to take turns or change between two things",
    "sentence": "The two parent birds {{BLANK}} between sitting on the eggs and looking for food, so the eggs are never left cold.",
    "cn": "兩隻親鳥輪流孵蛋和尋找食物，所以蛋從來不會被留著變冷。"
  },
  {
    "word": "arouse",
    "pos": "v.",
    "cn_def": "引起；激起",
    "en_def": "to cause a feeling or reaction",
    "sentence": "The strange noise {{BLANK}} the dog's curiosity, so it walked slowly towards the bushes to find out more.",
    "cn": "那奇怪的聲音激起了狗的好奇心，所以牠慢慢走向灌木叢想一探究竟。"
  },
  {
    "word": "attach",
    "pos": "v.",
    "cn_def": "附著；貼上",
    "en_def": "to fix or join one thing to another",
    "sentence": "Scientists {{BLANK}} tiny trackers to the turtles' shells, and they can follow the animals across the ocean.",
    "cn": "科學家把小型追蹤器貼在海龜殼上，而他們就能追蹤這些動物橫越海洋。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引",
    "en_def": "to make something come closer",
    "sentence": "Male frogs sing loudly to {{BLANK}} females, but the noise can also bring hungry bats.",
    "cn": "雄蛙大聲鳴叫以吸引雌蛙，但這噪音也可能招來飢餓的蝙蝠。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭",
    "en_def": "to try to win against others",
    "sentence": "Young male deer {{BLANK}} for the attention of females, and the winners are usually the largest ones.",
    "cn": "年輕的雄鹿為了吸引雌鹿的注意而競爭，而勝利者通常是體型最大的。"
  },
  {
    "word": "determine",
    "pos": "v.",
    "cn_def": "決定；確定",
    "en_def": "to decide or find out exactly",
    "sentence": "In some turtles, the sand temperature can {{BLANK}} whether a baby is male or female.",
    "cn": "在某些海龜中，沙子的溫度能決定寶寶是雄性還是雌性。"
  },
  {
    "word": "distract",
    "pos": "v.",
    "cn_def": "使分心",
    "en_def": "to take someone's attention away",
    "sentence": "The mother bird flies around noisily to {{BLANK}} the cat, while her chicks hide quietly in the nest.",
    "cn": "母鳥吵鬧地四處飛來使那隻貓分心，而她的雛鳥安靜地躲在巢裡。"
  },
  {
    "word": "foresee",
    "pos": "v.",
    "cn_def": "預見",
    "en_def": "to know that something will happen",
    "sentence": "Few scientists could {{BLANK}} how quickly gene editing would develop, and now laws are struggling to keep up.",
    "cn": "很少有科學家能預見基因編輯會發展得這麼快，而現在法律正努力追趕。",
    "alts": [
      "foresaw",
      "foreseen"
    ]
  },
  {
    "word": "recognise",
    "pos": "v.",
    "cn_def": "認出",
    "en_def": "to know someone or something you have seen before",
    "sentence": "Sheep can {{BLANK}} the faces of other sheep, and they can remember them for up to two years.",
    "cn": "羊能認出其他羊的臉，而且牠們能記住長達兩年。"
  }
];

const MCQS = [
  {
    "q": "The difference between the two groups was not _____ important, so the scientists could not support their idea.",
    "options": [
      "intentionally",
      "rarely",
      "equally",
      "statistically"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Humans are _____ good at learning languages, but many animals also communicate in surprising ways.",
    "options": [
      "equally",
      "uniquely",
      "inherently",
      "collectively"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The number of bees fell _____ last year, and farmers worried about their fruit trees.",
    "options": [
      "sharply",
      "frequently",
      "mutually",
      "subsequently"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The cost of reading DNA has fallen _____, so many hospitals can now test patients' genes.",
    "options": [
      "mutually",
      "frequently",
      "drastically",
      "effectively"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It is hard to _____ how long four billion years is, so our teacher compared Earth's history to a single day.",
    "options": [
      "conceptualise",
      "purr",
      "reaffirm",
      "misinterpret"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "People often _____ a chimp's wide smile as happiness, but it usually means the animal is afraid.",
    "options": [
      "mutate",
      "symbolise",
      "spit",
      "construe"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Some birds _____ their enemies by pretending to have a broken wing, and they lead the danger away from the nest.",
    "options": [
      "howl",
      "invalidate",
      "deceive",
      "outcompete"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Human DNA does not _____ much from person to person, so we are all more alike than we think.",
    "options": [
      "misinterpret",
      "differ",
      "regard",
      "interbreed"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The experiment was designed to _____ the old belief, and the results clearly showed that it was wrong.",
    "options": [
      "concentrate",
      "nurse",
      "disprove",
      "interfere"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Before a cell divides, it must _____ its DNA, so each new cell gets a full set of instructions.",
    "options": [
      "duplicate",
      "neutralise",
      "crossbreed",
      "wag"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Millions of years must _____ before a new species forms, so we rarely see it happen in our lifetime.",
    "options": [
      "decode",
      "exterminate",
      "capture",
      "elapse"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Zoos _____ the lives of their animals with toys and puzzles, because bored animals can become stressed.",
    "options": [
      "misinterpret",
      "enrich",
      "symbolise",
      "spit"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Cold weather tends to _____ animals with thick fur, so mammals in the far north are usually furry.",
    "options": [
      "favour",
      "simplify",
      "shed",
      "howl"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Fleas can _____ a house very quickly, so pet owners should check their animals regularly.",
    "options": [
      "growl",
      "infest",
      "hiss",
      "sever"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Many birds _____ a kind of compass in their eyes, and this helps them find their way across oceans.",
    "options": [
      "reaffirm",
      "capture",
      "possess",
      "purr"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Frogs _____ a slimy liquid from their skin, and it keeps them wet and protects them from germs.",
    "options": [
      "stabilise",
      "decode",
      "mutate",
      "secrete"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The two parent birds _____ between sitting on the eggs and looking for food, so the eggs are never left cold.",
    "options": [
      "stabilise",
      "alternate",
      "interbreed",
      "howl"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The strange noise _____ the dog's curiosity, so it walked slowly towards the bushes to find out more.",
    "options": [
      "growl",
      "purr",
      "arouse",
      "exterminate"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Scientists _____ tiny trackers to the turtles' shells, and they can follow the animals across the ocean.",
    "options": [
      "attach",
      "crossbreed",
      "nurse",
      "interfere"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Male frogs sing loudly to _____ females, but the noise can also bring hungry bats.",
    "options": [
      "nurse",
      "activate",
      "growl",
      "attract"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Young male deer _____ for the attention of females, and the winners are usually the largest ones.",
    "options": [
      "concentrate",
      "compete",
      "relate",
      "simplify"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "In some turtles, the sand temperature can _____ whether a baby is male or female.",
    "options": [
      "determine",
      "decode",
      "outcompete",
      "invalidate"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The mother bird flies around noisily to _____ the cat, while her chicks hide quietly in the nest.",
    "options": [
      "spit",
      "howl",
      "distract",
      "neutralise"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Few scientists could _____ how quickly gene editing would develop, and now laws are struggling to keep up.",
    "options": [
      "wag",
      "simplify",
      "sever",
      "foresee"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Sheep can _____ the faces of other sheep, and they can remember them for up to two years.",
    "options": [
      "neutralise",
      "recognise",
      "implicate",
      "exterminate"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "statistically": {
    "pos": "adv.",
    "en_def": "according to numbers and data",
    "cn_def": "統計上"
  },
  "uniquely": {
    "pos": "adv.",
    "en_def": "in a way that no other thing has",
    "cn_def": "獨特地"
  },
  "sharply": {
    "pos": "adv.",
    "en_def": "suddenly and by a large amount",
    "cn_def": "急劇地"
  },
  "drastically": {
    "pos": "adv.",
    "en_def": "in a sudden and extreme way",
    "cn_def": "大幅地；劇烈地"
  },
  "conceptualise": {
    "pos": "v.",
    "en_def": "to form an idea of something in your mind",
    "cn_def": "構想；概念化"
  },
  "construe": {
    "pos": "v.",
    "en_def": "to understand something in a certain way",
    "cn_def": "理解；解讀"
  },
  "deceive": {
    "pos": "v.",
    "en_def": "to make someone believe something false",
    "cn_def": "欺騙"
  },
  "differ": {
    "pos": "v.",
    "en_def": "to be not the same",
    "cn_def": "不同"
  },
  "disprove": {
    "pos": "v.",
    "en_def": "to show that something is not true",
    "cn_def": "證明…是錯的"
  },
  "duplicate": {
    "pos": "v.",
    "en_def": "to make an exact copy",
    "cn_def": "複製"
  },
  "elapse": {
    "pos": "v.",
    "en_def": "(of time) to pass",
    "cn_def": "（時間）流逝"
  },
  "enrich": {
    "pos": "v.",
    "en_def": "to improve the quality of something",
    "cn_def": "豐富；充實"
  },
  "favour": {
    "pos": "v.",
    "en_def": "to give an advantage to",
    "cn_def": "有利於；偏好"
  },
  "infest": {
    "pos": "v.",
    "en_def": "(of insects or animals) to fill a place in large numbers",
    "cn_def": "大批出沒；侵擾"
  },
  "possess": {
    "pos": "v.",
    "en_def": "to have or own",
    "cn_def": "擁有"
  },
  "secrete": {
    "pos": "v.",
    "en_def": "to produce a liquid inside the body",
    "cn_def": "分泌"
  },
  "alternate": {
    "pos": "v.",
    "en_def": "to take turns or change between two things",
    "cn_def": "輪流；交替"
  },
  "arouse": {
    "pos": "v.",
    "en_def": "to cause a feeling or reaction",
    "cn_def": "引起；激起"
  },
  "attach": {
    "pos": "v.",
    "en_def": "to fix or join one thing to another",
    "cn_def": "附著；貼上"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make something come closer",
    "cn_def": "吸引"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to win against others",
    "cn_def": "競爭"
  },
  "determine": {
    "pos": "v.",
    "en_def": "to decide or find out exactly",
    "cn_def": "決定；確定"
  },
  "distract": {
    "pos": "v.",
    "en_def": "to take someone's attention away",
    "cn_def": "使分心"
  },
  "foresee": {
    "pos": "v.",
    "en_def": "to know that something will happen",
    "cn_def": "預見"
  },
  "recognise": {
    "pos": "v.",
    "en_def": "to know someone or something you have seen before",
    "cn_def": "認出"
  },
  "intentionally": {
    "pos": "adv.",
    "en_def": "on purpose",
    "cn_def": "故意地"
  },
  "rarely": {
    "pos": "adv.",
    "en_def": "not often",
    "cn_def": "很少"
  },
  "equally": {
    "pos": "adv.",
    "en_def": "to the same degree",
    "cn_def": "同樣地；平等地"
  },
  "inherently": {
    "pos": "adv.",
    "en_def": "as a basic, natural part of something",
    "cn_def": "本質上；天生地"
  },
  "collectively": {
    "pos": "adv.",
    "en_def": "as a group",
    "cn_def": "集體地"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often",
    "cn_def": "經常"
  },
  "mutually": {
    "pos": "adv.",
    "en_def": "in a way that helps or affects both sides",
    "cn_def": "互相地"
  },
  "subsequently": {
    "pos": "adv.",
    "en_def": "after something else happened",
    "cn_def": "隨後"
  },
  "effectively": {
    "pos": "adv.",
    "en_def": "in a way that works well",
    "cn_def": "有效地"
  },
  "purr": {
    "pos": "v.",
    "en_def": "(of a cat) to make a soft, low sound when happy",
    "cn_def": "呼嚕叫"
  },
  "reaffirm": {
    "pos": "v.",
    "en_def": "to say again that something is true",
    "cn_def": "重申；再次確認"
  },
  "misinterpret": {
    "pos": "v.",
    "en_def": "to understand something wrongly",
    "cn_def": "誤解"
  },
  "mutate": {
    "pos": "v.",
    "en_def": "to change in form because of a gene change",
    "cn_def": "突變"
  },
  "symbolise": {
    "pos": "v.",
    "en_def": "to be a sign of an idea",
    "cn_def": "象徵"
  },
  "spit": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "howl": {
    "pos": "v.",
    "en_def": "to make a long, loud crying sound",
    "cn_def": "嚎叫"
  },
  "invalidate": {
    "pos": "v.",
    "en_def": "to show that something is not correct",
    "cn_def": "使無效；推翻"
  },
  "outcompete": {
    "pos": "v.",
    "en_def": "to do better than others in getting food or space",
    "cn_def": "競爭勝過"
  },
  "regard": {
    "pos": "v.",
    "en_def": "to think of in a particular way",
    "cn_def": "視為；認為"
  },
  "interbreed": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專注"
  },
  "nurse": {
    "pos": "v.",
    "en_def": "to feed a baby with milk from its mother",
    "cn_def": "哺乳"
  },
  "interfere": {
    "pos": "v.",
    "en_def": "to get involved and cause problems",
    "cn_def": "干擾"
  },
  "neutralise": {
    "pos": "v.",
    "en_def": "to stop something from having an effect",
    "cn_def": "中和；使失效"
  },
  "crossbreed": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "wag": {
    "pos": "v.",
    "en_def": "to move quickly from side to side",
    "cn_def": "搖動（尾巴）"
  },
  "decode": {
    "pos": "v.",
    "en_def": "to find the meaning of a code",
    "cn_def": "解碼；破譯"
  },
  "exterminate": {
    "pos": "v.",
    "en_def": "to kill all of a group of animals",
    "cn_def": "撲滅；滅絕"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to catch an animal or person",
    "cn_def": "捕捉"
  },
  "simplify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "簡化"
  },
  "shed": {
    "pos": "v.",
    "en_def": "to lose skin, hair or leaves naturally",
    "cn_def": "脫落；蛻（皮）"
  },
  "growl": {
    "pos": "v.",
    "en_def": "to make a low, angry sound in the throat",
    "cn_def": "低吼"
  },
  "hiss": {
    "pos": "v.",
    "en_def": "to make a sound like a long \"sss\"",
    "cn_def": "發出嘶嘶聲"
  },
  "sever": {
    "pos": "v.",
    "en_def": "to cut or break completely",
    "cn_def": "切斷"
  },
  "stabilise": {
    "pos": "v.",
    "en_def": "to become steady and stop changing",
    "cn_def": "穩定下來"
  },
  "activate": {
    "pos": "v.",
    "en_def": "to make something start working",
    "cn_def": "啟動；活化"
  },
  "relate": {
    "pos": "v.",
    "en_def": "to find or show a connection",
    "cn_def": "有關聯；與…相關"
  },
  "implicate": {
    "pos": "v.",
    "en_def": "to show that something is involved in a problem",
    "cn_def": "牽涉；顯示與…有關"
  }
};

const EXTRA_GLOSSES = {};
