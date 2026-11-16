// Topic 13 Subunit 8 Quiz Data: Academic Words 學術單字 1 (analysis – initial)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S08 - Academic Words 學術單字 1 (analysis – initial)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something to understand it",
    "sentence": "The lab's {{BLANK}} of the bones showed that the animal was young, so it probably died before it could have babies.",
    "cn": "實驗室對骨頭的分析顯示這隻動物很年輕，所以牠很可能在生育之前就死了。"
  },
  {
    "word": "prediction",
    "pos": "n.",
    "cn_def": "預測",
    "en_def": "a statement about what will happen",
    "sentence": "Darwin made a {{BLANK}} about a moth with a very long tongue, and scientists finally found it forty years later.",
    "cn": "達爾文對一種舌頭極長的蛾做出了預測，而科學家終於在四十年後找到了牠。"
  },
  {
    "word": "approximation",
    "pos": "n.",
    "cn_def": "近似值；概算",
    "en_def": "a number or idea that is close but not exact",
    "sentence": "Six million years is only an {{BLANK}}, because scientists cannot know exactly when humans and chimps split.",
    "cn": "六百萬年只是一個近似值，因為科學家無法確切知道人類和黑猩猩是何時分開的。"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "cn_def": "專注",
    "en_def": "to give all your attention to something",
    "sentence": "The cat seemed to {{BLANK}} completely on the mouse hole, and it did not move for almost an hour.",
    "cn": "那隻貓似乎完全專注在老鼠洞上，而且牠幾乎一個小時都沒有動。"
  },
  {
    "word": "essence",
    "pos": "n.",
    "cn_def": "本質；精髓",
    "en_def": "the most important basic quality of something",
    "sentence": "The {{BLANK}} of Darwin's idea is simple, but it took him more than twenty years to publish it.",
    "cn": "達爾文想法的本質很簡單，但他花了二十多年才把它發表出來。"
  },
  {
    "word": "activate",
    "pos": "v.",
    "cn_def": "啟動；活化",
    "en_def": "to make something start working",
    "sentence": "Sunlight can {{BLANK}} certain genes in your skin, so your skin becomes darker after a summer holiday.",
    "cn": "陽光能活化你皮膚中的某些基因，所以暑假過後你的皮膚會變得比較黑。"
  },
  {
    "word": "capture",
    "pos": "v.",
    "cn_def": "捕捉",
    "en_def": "to catch an animal or person",
    "sentence": "The team used soft nets to {{BLANK}} the birds, and they released them after putting small rings on their legs.",
    "cn": "研究團隊用柔軟的網子捕捉鳥類，並在牠們腳上套上小環後把牠們放走。"
  },
  {
    "word": "circumstantial",
    "pos": "adj.",
    "cn_def": "間接的；旁證的",
    "en_def": "suggesting something but not proving it directly",
    "sentence": "The evidence against the dog was only {{BLANK}}, because nobody actually saw it eat the cake.",
    "cn": "對那隻狗不利的證據只是間接的，因為沒有人真的看見牠吃了蛋糕。"
  },
  {
    "word": "conditional",
    "pos": "adj.",
    "cn_def": "有條件的",
    "en_def": "depending on something else happening",
    "sentence": "The monkey's help was {{BLANK}}, so it only shared food with monkeys that had shared with it before.",
    "cn": "那隻猴子的幫忙是有條件的，所以牠只和以前跟牠分享過食物的猴子分享。"
  },
  {
    "word": "contextual",
    "pos": "adj.",
    "cn_def": "情境的；與上下文有關的",
    "en_def": "depending on the situation around something",
    "sentence": "Students used {{BLANK}} clues to guess the meaning of \"gene pool\", and most of them guessed correctly.",
    "cn": "學生利用上下文的線索猜出「基因庫」的意思，而大多數人都猜對了。"
  },
  {
    "word": "debunk",
    "pos": "v.",
    "cn_def": "揭穿；駁斥",
    "en_def": "to show that a popular belief is false",
    "sentence": "Our teacher wanted to {{BLANK}} the myth that goldfish only remember things for three seconds, so she showed us a study.",
    "cn": "我們老師想要駁斥金魚只有三秒記憶的迷思，所以她給我們看了一項研究。"
  },
  {
    "word": "exterminate",
    "pos": "v.",
    "cn_def": "撲滅；滅絕",
    "en_def": "to kill all of a group of animals",
    "sentence": "The city decided to {{BLANK}} the rats near the market, but some people asked for a kinder solution.",
    "cn": "市政府決定撲滅市場附近的老鼠，但有些人要求更溫和的解決辦法。"
  },
  {
    "word": "foreshadow",
    "pos": "v.",
    "cn_def": "預示",
    "en_def": "to show signs of something that will happen later",
    "sentence": "Small changes in the birds' songs may {{BLANK}} the birth of a new species, although it could take thousands of years.",
    "cn": "鳥鳴中的小變化可能預示一個新物種的誕生，雖然這可能需要數千年。"
  },
  {
    "word": "implicate",
    "pos": "v.",
    "cn_def": "牽涉；顯示與…有關",
    "en_def": "to show that something is involved in a problem",
    "sentence": "The study seemed to {{BLANK}} one gene in the disease, but the scientists said more tests were needed.",
    "cn": "這項研究似乎顯示一個基因與這種疾病有關，但科學家說還需要更多測試。"
  },
  {
    "word": "interfere",
    "pos": "v.",
    "cn_def": "干擾",
    "en_def": "to get involved and cause problems",
    "sentence": "Tourists should not {{BLANK}} with nesting turtles, because bright lights and noise can scare them back into the sea.",
    "cn": "遊客不應該干擾正在築巢的海龜，因為強光和噪音會把牠們嚇回海裡。"
  },
  {
    "word": "intertwine",
    "pos": "v.",
    "cn_def": "交織；緊密相連",
    "en_def": "to twist or link closely together",
    "sentence": "Genes and environment {{BLANK}} in complex ways, so it is hard to say which one matters more.",
    "cn": "基因和環境以複雜的方式交織在一起，所以很難說哪一個更重要。"
  },
  {
    "word": "invalidate",
    "pos": "v.",
    "cn_def": "使無效；推翻",
    "en_def": "to show that something is not correct",
    "sentence": "One mistake in the data could {{BLANK}} the whole study, so the scientists checked every number twice.",
    "cn": "資料中的一個錯誤就可能推翻整個研究，所以科學家把每個數字都檢查了兩次。"
  },
  {
    "word": "moderate",
    "pos": "adj.",
    "cn_def": "適度的；中等的",
    "en_def": "not too much and not too little",
    "sentence": "The plants grew best at {{BLANK}} temperatures, but they died quickly when the greenhouse became too hot.",
    "cn": "這些植物在適度的溫度下長得最好，但當溫室變得太熱時它們很快就死了。"
  },
  {
    "word": "neutralise",
    "pos": "v.",
    "cn_def": "中和；使失效",
    "en_def": "to stop something from having an effect",
    "sentence": "Some animals such as the mongoose can {{BLANK}} snake poison, so they can eat snakes without getting sick.",
    "cn": "有些像獴這樣的動物能中和蛇毒，所以牠們可以吃蛇而不會生病。"
  },
  {
    "word": "reaffirm",
    "pos": "v.",
    "cn_def": "重申；再次確認",
    "en_def": "to say again that something is true",
    "sentence": "The new fossils {{BLANK}} the idea that birds came from dinosaurs, and few scientists now doubt it.",
    "cn": "新的化石再次確認了鳥類來自恐龍的觀點，而現在很少有科學家懷疑這一點。"
  },
  {
    "word": "sever",
    "pos": "v.",
    "cn_def": "切斷",
    "en_def": "to cut or break completely",
    "sentence": "The new highway may {{BLANK}} the path that the frogs use every spring, so the city built small tunnels under the road.",
    "cn": "新的高速公路可能會切斷青蛙每年春天使用的路徑，所以市政府在路下方建造了小隧道。"
  },
  {
    "word": "shed",
    "pos": "v.",
    "cn_def": "脫落；蛻（皮）",
    "en_def": "to lose skin, hair or leaves naturally",
    "sentence": "Snakes {{BLANK}} their skin several times a year, and you can sometimes find the old skin in the grass.",
    "cn": "蛇每年會蛻皮好幾次，而你有時可以在草叢裡找到舊的蛇皮。"
  },
  {
    "word": "stabilise",
    "pos": "v.",
    "cn_def": "穩定下來",
    "en_def": "to become steady and stop changing",
    "sentence": "The number of deer began to {{BLANK}} after wolves returned, and the forest plants slowly grew back.",
    "cn": "狼回來之後鹿的數量開始穩定下來，而森林裡的植物也慢慢長了回來。"
  },
  {
    "word": "symbolise",
    "pos": "v.",
    "cn_def": "象徵",
    "en_def": "to be a sign of an idea",
    "sentence": "In many cultures, the owl is used to {{BLANK}} wisdom, although owls are not cleverer than many other birds.",
    "cn": "在許多文化中，貓頭鷹被用來象徵智慧，雖然貓頭鷹並沒有比許多其他鳥類更聰明。"
  },
  {
    "word": "initial",
    "pos": "adj.",
    "cn_def": "最初的",
    "en_def": "happening at the beginning",
    "sentence": "The {{BLANK}} results looked exciting, but later tests showed that the gene had only a small effect.",
    "cn": "最初的結果看起來令人興奮，但後來的測試顯示這個基因只有很小的影響。"
  }
];

const MCQS = [
  {
    "q": "The lab's _____ of the bones showed that the animal was young, so it probably died before it could have babies.",
    "options": [
      "kit",
      "analysis",
      "possibility",
      "termite"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Darwin made a _____ about a moth with a very long tongue, and scientists finally found it forty years later.",
    "options": [
      "hive",
      "enzyme",
      "prediction",
      "peacock"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Six million years is only an _____, because scientists cannot know exactly when humans and chimps split.",
    "options": [
      "approximation",
      "existence",
      "evolution",
      "supposition"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The cat seemed to _____ completely on the mouse hole, and it did not move for almost an hour.",
    "options": [
      "nurse",
      "foresee",
      "distract",
      "concentrate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The _____ of Darwin's idea is simple, but it took him more than twenty years to publish it.",
    "options": [
      "subset",
      "essence",
      "biochemistry",
      "mitochondria"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Sunlight can _____ certain genes in your skin, so your skin becomes darker after a summer holiday.",
    "options": [
      "compete",
      "decode",
      "activate",
      "regard"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The team used soft nets to _____ the birds, and they released them after putting small rings on their legs.",
    "options": [
      "simplify",
      "purr",
      "elapse",
      "capture"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The evidence against the dog was only _____, because nobody actually saw it eat the cake.",
    "options": [
      "circumstantial",
      "single-celled",
      "irrefutable",
      "immutable"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The monkey's help was _____, so it only shared food with monkeys that had shared with it before.",
    "options": [
      "ancestral",
      "transgenic",
      "conditional",
      "vestigial"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Students used _____ clues to guess the meaning of \"gene pool\", and most of them guessed correctly.",
    "options": [
      "purebred",
      "contextual",
      "dog-eat-dog",
      "nimble"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our teacher wanted to _____ the myth that goldfish only remember things for three seconds, so she showed us a study.",
    "options": [
      "hiss",
      "simplify",
      "deceive",
      "debunk"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The city decided to _____ the rats near the market, but some people asked for a kinder solution.",
    "options": [
      "exterminate",
      "spit",
      "regard",
      "alternate"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Small changes in the birds' songs may _____ the birth of a new species, although it could take thousands of years.",
    "options": [
      "growl",
      "differ",
      "regard",
      "foreshadow"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The study seemed to _____ one gene in the disease, but the scientists said more tests were needed.",
    "options": [
      "hiss",
      "chirp",
      "implicate",
      "attract"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Tourists should not _____ with nesting turtles, because bright lights and noise can scare them back into the sea.",
    "options": [
      "interfere",
      "regard",
      "crossbreed",
      "infest"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Genes and environment _____ in complex ways, so it is hard to say which one matters more.",
    "options": [
      "alternate",
      "intertwine",
      "misinterpret",
      "hiss"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "One mistake in the data could _____ the whole study, so the scientists checked every number twice.",
    "options": [
      "invalidate",
      "interbreed",
      "possess",
      "wag"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The plants grew best at _____ temperatures, but they died quickly when the greenhouse became too hot.",
    "options": [
      "risky",
      "ancestral",
      "attuned",
      "moderate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Some animals such as the mongoose can _____ snake poison, so they can eat snakes without getting sick.",
    "options": [
      "recognise",
      "neutralise",
      "crossbreed",
      "duplicate"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new fossils _____ the idea that birds came from dinosaurs, and few scientists now doubt it.",
    "options": [
      "outcompete",
      "interbreed",
      "reaffirm",
      "mutate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new highway may _____ the path that the frogs use every spring, so the city built small tunnels under the road.",
    "options": [
      "sever",
      "determine",
      "attach",
      "attract"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Snakes _____ their skin several times a year, and you can sometimes find the old skin in the grass.",
    "options": [
      "secrete",
      "wag",
      "foresee",
      "shed"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The number of deer began to _____ after wolves returned, and the forest plants slowly grew back.",
    "options": [
      "determine",
      "stabilise",
      "spit",
      "growl"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "In many cultures, the owl is used to _____ wisdom, although owls are not cleverer than many other birds.",
    "options": [
      "secrete",
      "construe",
      "symbolise",
      "interbreed"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The _____ results looked exciting, but later tests showed that the gene had only a small effect.",
    "options": [
      "misleading",
      "initial",
      "biomedical",
      "attuned"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "prediction": {
    "pos": "n.",
    "en_def": "a statement about what will happen",
    "cn_def": "預測"
  },
  "approximation": {
    "pos": "n.",
    "en_def": "a number or idea that is close but not exact",
    "cn_def": "近似值；概算"
  },
  "concentrate": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專注"
  },
  "essence": {
    "pos": "n.",
    "en_def": "the most important basic quality of something",
    "cn_def": "本質；精髓"
  },
  "activate": {
    "pos": "v.",
    "en_def": "to make something start working",
    "cn_def": "啟動；活化"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to catch an animal or person",
    "cn_def": "捕捉"
  },
  "circumstantial": {
    "pos": "adj.",
    "en_def": "suggesting something but not proving it directly",
    "cn_def": "間接的；旁證的"
  },
  "conditional": {
    "pos": "adj.",
    "en_def": "depending on something else happening",
    "cn_def": "有條件的"
  },
  "contextual": {
    "pos": "adj.",
    "en_def": "depending on the situation around something",
    "cn_def": "情境的；與上下文有關的"
  },
  "debunk": {
    "pos": "v.",
    "en_def": "to show that a popular belief is false",
    "cn_def": "揭穿；駁斥"
  },
  "exterminate": {
    "pos": "v.",
    "en_def": "to kill all of a group of animals",
    "cn_def": "撲滅；滅絕"
  },
  "foreshadow": {
    "pos": "v.",
    "en_def": "to show signs of something that will happen later",
    "cn_def": "預示"
  },
  "implicate": {
    "pos": "v.",
    "en_def": "to show that something is involved in a problem",
    "cn_def": "牽涉；顯示與…有關"
  },
  "interfere": {
    "pos": "v.",
    "en_def": "to get involved and cause problems",
    "cn_def": "干擾"
  },
  "intertwine": {
    "pos": "v.",
    "en_def": "to twist or link closely together",
    "cn_def": "交織；緊密相連"
  },
  "invalidate": {
    "pos": "v.",
    "en_def": "to show that something is not correct",
    "cn_def": "使無效；推翻"
  },
  "moderate": {
    "pos": "adj.",
    "en_def": "not too much and not too little",
    "cn_def": "適度的；中等的"
  },
  "neutralise": {
    "pos": "v.",
    "en_def": "to stop something from having an effect",
    "cn_def": "中和；使失效"
  },
  "reaffirm": {
    "pos": "v.",
    "en_def": "to say again that something is true",
    "cn_def": "重申；再次確認"
  },
  "sever": {
    "pos": "v.",
    "en_def": "to cut or break completely",
    "cn_def": "切斷"
  },
  "shed": {
    "pos": "v.",
    "en_def": "to lose skin, hair or leaves naturally",
    "cn_def": "脫落；蛻（皮）"
  },
  "stabilise": {
    "pos": "v.",
    "en_def": "to become steady and stop changing",
    "cn_def": "穩定下來"
  },
  "symbolise": {
    "pos": "v.",
    "en_def": "to be a sign of an idea",
    "cn_def": "象徵"
  },
  "initial": {
    "pos": "adj.",
    "en_def": "happening at the beginning",
    "cn_def": "最初的"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of things packed together for a task",
    "cn_def": "套組；工具包"
  },
  "possibility": {
    "pos": "n.",
    "en_def": "something that might happen or be true",
    "cn_def": "可能性"
  },
  "termite": {
    "pos": "n.",
    "en_def": "a small insect that eats wood and lives in large groups",
    "cn_def": "白蟻"
  },
  "hive": {
    "pos": "n.",
    "en_def": "a home where bees live together",
    "cn_def": "蜂巢"
  },
  "enzyme": {
    "pos": "n.",
    "en_def": "a substance in the body that speeds up chemical changes",
    "cn_def": "酵素"
  },
  "peacock": {
    "pos": "n.",
    "en_def": "a male bird with a large, colourful tail",
    "cn_def": "雄孔雀"
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or alive",
    "cn_def": "存在"
  },
  "evolution": {
    "pos": "n.",
    "en_def": "slow change in living things over many generations",
    "cn_def": "演化"
  },
  "supposition": {
    "pos": "n.",
    "en_def": "an idea that is believed without proof",
    "cn_def": "推測；假定"
  },
  "nurse": {
    "pos": "v.",
    "en_def": "to feed a baby with milk from its mother",
    "cn_def": "哺乳"
  },
  "foresee": {
    "pos": "v.",
    "en_def": "to know that something will happen",
    "cn_def": "預見"
  },
  "distract": {
    "pos": "v.",
    "en_def": "to take someone's attention away",
    "cn_def": "使分心"
  },
  "subset": {
    "pos": "n.",
    "en_def": "a smaller group within a larger group",
    "cn_def": "子集；一部分"
  },
  "biochemistry": {
    "pos": "n.",
    "en_def": "the study of chemical processes in living things",
    "cn_def": "生物化學"
  },
  "mitochondria": {
    "pos": "n.",
    "en_def": "parts of a cell that make energy",
    "cn_def": "粒線體"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to win against others",
    "cn_def": "競爭"
  },
  "decode": {
    "pos": "v.",
    "en_def": "to find the meaning of a code",
    "cn_def": "解碼；破譯"
  },
  "regard": {
    "pos": "v.",
    "en_def": "to think of in a particular way",
    "cn_def": "視為；認為"
  },
  "simplify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "簡化"
  },
  "purr": {
    "pos": "v.",
    "en_def": "(of a cat) to make a soft, low sound when happy",
    "cn_def": "呼嚕叫"
  },
  "elapse": {
    "pos": "v.",
    "en_def": "(of time) to pass",
    "cn_def": "（時間）流逝"
  },
  "single-celled": {
    "pos": "adj.",
    "en_def": "made of only one cell",
    "cn_def": "單細胞的"
  },
  "irrefutable": {
    "pos": "adj.",
    "en_def": "impossible to prove wrong",
    "cn_def": "無可辯駁的"
  },
  "immutable": {
    "pos": "adj.",
    "en_def": "never changing",
    "cn_def": "不可改變的"
  },
  "ancestral": {
    "pos": "adj.",
    "en_def": "belonging to earlier family members or species",
    "cn_def": "祖先的"
  },
  "transgenic": {
    "pos": "adj.",
    "en_def": "having genes added from another species",
    "cn_def": "基因轉殖的"
  },
  "vestigial": {
    "pos": "adj.",
    "en_def": "still present in the body but no longer useful",
    "cn_def": "退化的；殘留的"
  },
  "purebred": {
    "pos": "adj.",
    "en_def": "having parents of the same breed",
    "cn_def": "純種的"
  },
  "dog-eat-dog": {
    "pos": "adj.",
    "en_def": "very competitive, where people harm others to succeed",
    "cn_def": "殘酷競爭的；弱肉強食的"
  },
  "nimble": {
    "pos": "adj.",
    "en_def": "able to move quickly and lightly",
    "cn_def": "敏捷的"
  },
  "hiss": {
    "pos": "v.",
    "en_def": "to make a sound like a long \"sss\"",
    "cn_def": "發出嘶嘶聲"
  },
  "deceive": {
    "pos": "v.",
    "en_def": "to make someone believe something false",
    "cn_def": "欺騙"
  },
  "spit": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "alternate": {
    "pos": "v.",
    "en_def": "to take turns or change between two things",
    "cn_def": "輪流；交替"
  },
  "growl": {
    "pos": "v.",
    "en_def": "to make a low, angry sound in the throat",
    "cn_def": "低吼"
  },
  "differ": {
    "pos": "v.",
    "en_def": "to be not the same",
    "cn_def": "不同"
  },
  "chirp": {
    "pos": "v.",
    "en_def": "(of a bird or insect) to make a short high sound",
    "cn_def": "啁啾；吱吱叫"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make something come closer",
    "cn_def": "吸引"
  },
  "crossbreed": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "infest": {
    "pos": "v.",
    "en_def": "(of insects or animals) to fill a place in large numbers",
    "cn_def": "大批出沒；侵擾"
  },
  "misinterpret": {
    "pos": "v.",
    "en_def": "to understand something wrongly",
    "cn_def": "誤解"
  },
  "interbreed": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "possess": {
    "pos": "v.",
    "en_def": "to have or own",
    "cn_def": "擁有"
  },
  "wag": {
    "pos": "v.",
    "en_def": "to move quickly from side to side",
    "cn_def": "搖動（尾巴）"
  },
  "risky": {
    "pos": "adj.",
    "en_def": "possibly dangerous",
    "cn_def": "有風險的"
  },
  "attuned": {
    "pos": "adj.",
    "en_def": "able to understand and react to something",
    "cn_def": "適應的；熟悉的"
  },
  "recognise": {
    "pos": "v.",
    "en_def": "to know someone or something you have seen before",
    "cn_def": "認出"
  },
  "duplicate": {
    "pos": "v.",
    "en_def": "to make an exact copy",
    "cn_def": "複製"
  },
  "outcompete": {
    "pos": "v.",
    "en_def": "to do better than others in getting food or space",
    "cn_def": "競爭勝過"
  },
  "mutate": {
    "pos": "v.",
    "en_def": "to change in form because of a gene change",
    "cn_def": "突變"
  },
  "determine": {
    "pos": "v.",
    "en_def": "to decide or find out exactly",
    "cn_def": "決定；確定"
  },
  "attach": {
    "pos": "v.",
    "en_def": "to fix or join one thing to another",
    "cn_def": "附著；貼上"
  },
  "secrete": {
    "pos": "v.",
    "en_def": "to produce a liquid inside the body",
    "cn_def": "分泌"
  },
  "construe": {
    "pos": "v.",
    "en_def": "to understand something in a certain way",
    "cn_def": "理解；解讀"
  },
  "misleading": {
    "pos": "adj.",
    "en_def": "giving the wrong idea",
    "cn_def": "誤導的"
  },
  "biomedical": {
    "pos": "adj.",
    "en_def": "relating to biology and medicine",
    "cn_def": "生物醫學的"
  }
};

const EXTRA_GLOSSES = {};
