// Topic 13 Subunit 6 Quiz Data: Animal Behaviour & Communication 動物行為與溝通
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S06 - Animal Behaviour & Communication 動物行為與溝通",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ethology",
    "pos": "n.",
    "cn_def": "動物行為學",
    "en_def": "the scientific study of animal behaviour",
    "sentence": "She became interested in {{BLANK}} after watching birds in the park, and she now studies how crows solve puzzles.",
    "cn": "她在公園裡觀察鳥類之後對動物行為學產生了興趣，現在她研究烏鴉如何解決難題。"
  },
  {
    "word": "ethologist",
    "pos": "n.",
    "cn_def": "動物行為學家",
    "en_def": "a scientist who studies animal behaviour",
    "sentence": "The {{BLANK}} watched the wolves from a hidden hut, because she did not want her presence to change their behaviour.",
    "cn": "那位動物行為學家從一間隱蔽的小屋觀察狼群，因為她不希望自己的存在改變牠們的行為。"
  },
  {
    "word": "learned behaviour",
    "pos": "n.phr.",
    "cn_def": "學習行為",
    "en_def": "an action an animal learns rather than is born with",
    "sentence": "Opening milk bottles was a {{BLANK}} among some birds in Britain, and young birds copied it from older ones.",
    "cn": "在英國，打開牛奶瓶是某些鳥類的學習行為，而年輕的鳥從年長的鳥那裡模仿學會了。"
  },
  {
    "word": "imprinting",
    "pos": "n.",
    "cn_def": "銘印",
    "en_def": "a young animal's quick bond with the first thing it sees",
    "sentence": "Because of {{BLANK}}, the baby geese followed the scientist everywhere, and they treated him like their mother.",
    "cn": "由於銘印，小鵝到處跟著那位科學家，而且牠們把他當作媽媽。"
  },
  {
    "word": "conditioning",
    "pos": "n.",
    "cn_def": "制約",
    "en_def": "training by linking an action with a reward or result",
    "sentence": "My dog runs to the kitchen when she hears the fridge open, and this is a simple example of {{BLANK}}.",
    "cn": "我的狗一聽到冰箱打開就跑到廚房，而這是制約的一個簡單例子。"
  },
  {
    "word": "reflex",
    "pos": "n.",
    "cn_def": "反射動作",
    "en_def": "an automatic movement you do not think about",
    "sentence": "When the ball flew towards his face, he closed his eyes as a {{BLANK}}, and he did not even think about it.",
    "cn": "當球朝他的臉飛來時，他閉上眼睛作為反射動作，而他甚至沒有思考。"
  },
  {
    "word": "birdsong",
    "pos": "n.",
    "cn_def": "鳥鳴",
    "en_def": "the musical sounds that birds make",
    "sentence": "I wake up to {{BLANK}} every morning in spring, because the birds sing loudly to attract partners.",
    "cn": "春天每天早上我都在鳥鳴聲中醒來，因為鳥兒大聲歌唱來吸引伴侶。"
  },
  {
    "word": "chirp",
    "pos": "v.",
    "cn_def": "啁啾；吱吱叫",
    "en_def": "(of a bird or insect) to make a short high sound",
    "sentence": "The baby birds {{BLANK}} loudly whenever their mother returns, and the loudest one usually gets fed first.",
    "cn": "每當媽媽回來時，雛鳥就大聲吱吱叫，而叫得最大聲的那隻通常最先被餵食。"
  },
  {
    "word": "howl",
    "pos": "v.",
    "cn_def": "嚎叫",
    "en_def": "to make a long, loud crying sound",
    "sentence": "Wolves {{BLANK}} to call their pack together, and the sound can travel for many kilometres at night.",
    "cn": "狼嚎叫來召集狼群，而這種聲音在夜晚可以傳到好幾公里遠。"
  },
  {
    "word": "growl",
    "pos": "v.",
    "cn_def": "低吼",
    "en_def": "to make a low, angry sound in the throat",
    "sentence": "The dog began to {{BLANK}} when the stranger came near, so the man stepped back slowly.",
    "cn": "當陌生人靠近時，那隻狗開始低吼，所以那個人慢慢地往後退。"
  },
  {
    "word": "purr",
    "pos": "v.",
    "cn_def": "呼嚕叫",
    "en_def": "(of a cat) to make a soft, low sound when happy",
    "sentence": "My cat likes to {{BLANK}} on my lap in the evening, and the soft sound helps me relax after school.",
    "cn": "我的貓喜歡晚上在我腿上呼嚕叫，而那柔和的聲音幫助我放學後放鬆。"
  },
  {
    "word": "hiss",
    "pos": "v.",
    "cn_def": "發出嘶嘶聲",
    "en_def": "to make a sound like a long \"sss\"",
    "sentence": "The snake began to {{BLANK}} when we came close, so we quickly moved away from the rocks.",
    "cn": "當我們靠近時那條蛇開始發出嘶嘶聲，所以我們迅速離開那些岩石。"
  },
  {
    "word": "echolocation",
    "pos": "n.",
    "cn_def": "回聲定位",
    "en_def": "finding objects by sending out sounds and hearing echoes",
    "sentence": "Bats use {{BLANK}} to catch insects in the dark, so they can hunt even when there is no moonlight.",
    "cn": "蝙蝠利用回聲定位在黑暗中捕捉昆蟲，所以即使沒有月光牠們也能狩獵。"
  },
  {
    "word": "pheromone",
    "pos": "n.",
    "cn_def": "費洛蒙",
    "en_def": "a chemical an animal releases to send a message",
    "sentence": "Ants leave a {{BLANK}} trail on the ground, and other ants follow it to find the food.",
    "cn": "螞蟻在地上留下費洛蒙的足跡，而其他螞蟻會跟著它找到食物。"
  },
  {
    "word": "scent",
    "pos": "n.",
    "cn_def": "氣味",
    "en_def": "a smell, especially one left by an animal",
    "sentence": "The tiger rubs its face on trees to leave its {{BLANK}}, and other tigers know to stay away.",
    "cn": "老虎用臉磨蹭樹木留下牠的氣味，而其他老虎就知道要遠離。"
  },
  {
    "word": "body language",
    "pos": "n.phr.",
    "cn_def": "肢體語言",
    "en_def": "messages sent by the way you move or stand",
    "sentence": "A dog's {{BLANK}} tells you a lot, because a low tail and flat ears often mean it is afraid.",
    "cn": "一隻狗的肢體語言能告訴你很多事，因為低垂的尾巴和平貼的耳朵通常表示牠很害怕。"
  },
  {
    "word": "alarm call",
    "pos": "n.phr.",
    "cn_def": "警戒叫聲",
    "en_def": "a sound an animal makes to warn others of danger",
    "sentence": "When a monkey sees an eagle, it gives a special {{BLANK}}, and the whole group hides in the trees.",
    "cn": "當一隻猴子看見老鷹時，牠會發出特別的警戒叫聲，而整個群體就躲進樹裡。"
  },
  {
    "word": "waggle dance",
    "pos": "n.phr.",
    "cn_def": "搖擺舞",
    "en_def": "a dance bees do to show where food is",
    "sentence": "A honeybee performs a {{BLANK}} inside the hive, and the other bees learn the direction of the flowers.",
    "cn": "一隻蜜蜂在蜂巢內跳搖擺舞，而其他蜜蜂就知道花朵的方向。"
  },
  {
    "word": "whisker",
    "pos": "n.",
    "cn_def": "鬍鬚",
    "en_def": "one of the long stiff hairs near an animal's mouth",
    "sentence": "A cat uses each {{BLANK}} to measure narrow spaces, so you should never cut them off.",
    "cn": "貓用每一根鬍鬚來測量狹窄的空間，所以你絕對不應該把它們剪掉。"
  },
  {
    "word": "antenna",
    "pos": "n.",
    "cn_def": "觸角",
    "en_def": "one of two long thin parts on an insect's head",
    "sentence": "The ant touched the other ant with its {{BLANK}}, and in this way it could smell who belonged to its nest.",
    "cn": "那隻螞蟻用觸角碰觸另一隻螞蟻，而藉此牠能聞出誰屬於牠的蟻巢。"
  },
  {
    "word": "wag",
    "pos": "v.",
    "cn_def": "搖動（尾巴）",
    "en_def": "to move quickly from side to side",
    "sentence": "Dogs usually {{BLANK}} their tails when they are happy, but a stiff wagging tail can sometimes be a warning.",
    "cn": "狗開心時通常會搖動尾巴，但僵硬地搖尾巴有時可能是一種警告。"
  },
  {
    "word": "threat display",
    "pos": "n.phr.",
    "cn_def": "威嚇展示",
    "en_def": "actions an animal uses to scare an enemy",
    "sentence": "The cat arched its back and made its fur stand up in a {{BLANK}}, so the bigger dog decided to leave.",
    "cn": "那隻貓拱起背、讓毛豎起來做出威嚇展示，所以那隻較大的狗決定離開。"
  },
  {
    "word": "warning colours",
    "pos": "n.phr.",
    "cn_def": "警戒色",
    "en_def": "bright colours that tell enemies an animal is dangerous",
    "sentence": "Poison dart frogs have bright {{BLANK}}, so birds learn quickly that these frogs are not safe to eat.",
    "cn": "箭毒蛙有鮮豔的警戒色，所以鳥類很快就學會這些青蛙吃了不安全。"
  },
  {
    "word": "play dead",
    "pos": "v.phr.",
    "cn_def": "裝死",
    "en_def": "to lie still and pretend to be dead",
    "sentence": "When a fox comes near, the opossum may {{BLANK}}, and the fox often loses interest and walks away.",
    "cn": "當狐狸靠近時，負鼠可能會裝死，而狐狸常常失去興趣然後走開。"
  },
  {
    "word": "migratory",
    "pos": "adj.",
    "cn_def": "遷徙的",
    "en_def": "moving to another place each season",
    "sentence": "Taiwan is an important stop for many {{BLANK}} birds, and birdwatchers gather at the coast every autumn.",
    "cn": "台灣是許多遷徙的鳥類的重要中途站，而賞鳥人士每年秋天都聚集在海岸邊。"
  },
  {
    "word": "homing",
    "pos": "adj.",
    "cn_def": "歸巢的",
    "en_def": "able to find the way home from far away",
    "sentence": "People once used {{BLANK}} pigeons to carry messages, because the birds always returned to their own nests.",
    "cn": "人們曾經利用歸巢的鴿子傳遞訊息，因為這些鳥總會回到自己的巢。"
  },
  {
    "word": "feral",
    "pos": "adj.",
    "cn_def": "野化的",
    "en_def": "once tame but now living wild",
    "sentence": "Many {{BLANK}} cats live near the old market, and volunteers feed them and take them to the vet.",
    "cn": "許多野化的貓住在舊市場附近，而志工們餵養牠們並帶牠們去看獸醫。"
  },
  {
    "word": "tool use",
    "pos": "n.phr.",
    "cn_def": "工具使用",
    "en_def": "using objects to help get food or do tasks",
    "sentence": "Sea otters break shells with stones, and this {{BLANK}} shows that clever behaviour is not only found in apes.",
    "cn": "海獺用石頭敲開貝殼，而這種工具使用顯示聰明的行為不只出現在猿類身上。"
  },
  {
    "word": "mirror test",
    "pos": "n.phr.",
    "cn_def": "鏡子測驗",
    "en_def": "a test to see if an animal recognises itself in a mirror",
    "sentence": "Elephants and dolphins have passed the {{BLANK}}, so scientists believe they have some idea of who they are.",
    "cn": "大象和海豚都通過了鏡子測驗，所以科學家相信牠們對自己是誰有某種概念。"
  },
  {
    "word": "parrot",
    "pos": "n.",
    "cn_def": "鸚鵡",
    "en_def": "a colourful bird that can copy human speech",
    "sentence": "My neighbour's {{BLANK}} can say twenty words, and it always says hello when someone opens the door.",
    "cn": "我鄰居的鸚鵡會說二十個字，而且每當有人開門時牠都會打招呼。"
  }
];

const MCQS = [
  {
    "q": "She became interested in _____ after watching birds in the park, and she now studies how crows solve puzzles.",
    "options": [
      "carrier",
      "analysis",
      "ethology",
      "embryo"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The _____ watched the wolves from a hidden hut, because she did not want her presence to change their behaviour.",
    "options": [
      "ethologist",
      "subset",
      "spine",
      "hive"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Opening milk bottles was a _____ among some birds in Britain, and young birds copied it from older ones.",
    "options": [
      "gene therapy",
      "parental care",
      "petri dish",
      "learned behaviour"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Because of _____, the baby geese followed the scientist everywhere, and they treated him like their mother.",
    "options": [
      "inquiry",
      "imprinting",
      "agent",
      "Neanderthal"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "My dog runs to the kitchen when she hears the fridge open, and this is a simple example of _____.",
    "options": [
      "conditioning",
      "scepticism",
      "detection",
      "exception"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "When the ball flew towards his face, he closed his eyes as a _____, and he did not even think about it.",
    "options": [
      "pack",
      "anthropology",
      "reflex",
      "fertilisation"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "I wake up to _____ every morning in spring, because the birds sing loudly to attract partners.",
    "options": [
      "superbug",
      "birdsong",
      "approximation",
      "collaboration"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The baby birds _____ loudly whenever their mother returns, and the loudest one usually gets fed first.",
    "options": [
      "conceptualise",
      "duplicate",
      "regard",
      "chirp"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Wolves _____ to call their pack together, and the sound can travel for many kilometres at night.",
    "options": [
      "howl",
      "crossbreed",
      "spit",
      "stabilise"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The dog began to _____ when the stranger came near, so the man stepped back slowly.",
    "options": [
      "reaffirm",
      "relate",
      "determine",
      "growl"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "My cat likes to _____ on my lap in the evening, and the soft sound helps me relax after school.",
    "options": [
      "exterminate",
      "relate",
      "purr",
      "regard"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The snake began to _____ when we came close, so we quickly moved away from the rocks.",
    "options": [
      "stabilise",
      "hiss",
      "arouse",
      "sever"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Bats use _____ to catch insects in the dark, so they can hunt even when there is no moonlight.",
    "options": [
      "grooming",
      "gene",
      "hive",
      "echolocation"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Ants leave a _____ trail on the ground, and other ants follow it to find the food.",
    "options": [
      "pheromone",
      "tolerance",
      "aggression",
      "hive"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The tiger rubs its face on trees to leave its _____, and other tigers know to stay away.",
    "options": [
      "bearing",
      "scent",
      "anthropomorphism",
      "detection"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "A dog's _____ tells you a lot, because a low tail and flat ears often mean it is afraid.",
    "options": [
      "bone marrow",
      "petri dish",
      "body language",
      "double helix"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "When a monkey sees an eagle, it gives a special _____, and the whole group hides in the trees.",
    "options": [
      "precision medicine",
      "clinical trial",
      "early humans",
      "alarm call"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "A honeybee performs a _____ inside the hive, and the other bees learn the direction of the flowers.",
    "options": [
      "waggle dance",
      "missing link",
      "early humans",
      "parental care"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "A cat uses each _____ to measure narrow spaces, so you should never cut them off.",
    "options": [
      "microbe",
      "whisker",
      "consciousness",
      "RNA"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The ant touched the other ant with its _____, and in this way it could smell who belonged to its nest.",
    "options": [
      "microorganism",
      "anthropologist",
      "antenna",
      "existence"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Dogs usually _____ their tails when they are happy, but a stiff wagging tail can sometimes be a warning.",
    "options": [
      "outcompete",
      "wag",
      "activate",
      "decode"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The cat arched its back and made its fur stand up in a _____, so the bigger dog decided to leave.",
    "options": [
      "body hair",
      "gene therapy",
      "pecking order",
      "threat display"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Poison dart frogs have bright _____, so birds learn quickly that these frogs are not safe to eat.",
    "options": [
      "early humans",
      "blood type",
      "warning colours",
      "birth defect"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "When a fox comes near, the opossum may _____, and the fox often loses interest and walks away.",
    "options": [
      "play dead",
      "let the cat out of the bag",
      "cry wolf",
      "pass on"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Taiwan is an important stop for many _____ birds, and birdwatchers gather at the coast every autumn.",
    "options": [
      "efficient",
      "migratory",
      "immune",
      "heritable"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "People once used _____ pigeons to carry messages, because the birds always returned to their own nests.",
    "options": [
      "irrelevant",
      "instinctive",
      "diagnostic",
      "homing"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Many _____ cats live near the old market, and volunteers feed them and take them to the vet.",
    "options": [
      "feral",
      "dog-eat-dog",
      "inadequate",
      "deleterious"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Sea otters break shells with stones, and this _____ shows that clever behaviour is not only found in apes.",
    "options": [
      "biological parent",
      "lab rat",
      "tool use",
      "the lion's share"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Elephants and dolphins have passed the _____, so scientists believe they have some idea of who they are.",
    "options": [
      "clinical trial",
      "mirror test",
      "petri dish",
      "Homo sapiens"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "My neighbour's _____ can say twenty words, and it always says hello when someone opens the door.",
    "options": [
      "inheritance",
      "brood",
      "parrot",
      "experimentation"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "ethology": {
    "pos": "n.",
    "en_def": "the scientific study of animal behaviour",
    "cn_def": "動物行為學"
  },
  "ethologist": {
    "pos": "n.",
    "en_def": "a scientist who studies animal behaviour",
    "cn_def": "動物行為學家"
  },
  "learned behaviour": {
    "pos": "n.phr.",
    "en_def": "an action an animal learns rather than is born with",
    "cn_def": "學習行為"
  },
  "imprinting": {
    "pos": "n.",
    "en_def": "a young animal's quick bond with the first thing it sees",
    "cn_def": "銘印"
  },
  "conditioning": {
    "pos": "n.",
    "en_def": "training by linking an action with a reward or result",
    "cn_def": "制約"
  },
  "reflex": {
    "pos": "n.",
    "en_def": "an automatic movement you do not think about",
    "cn_def": "反射動作"
  },
  "birdsong": {
    "pos": "n.",
    "en_def": "the musical sounds that birds make",
    "cn_def": "鳥鳴"
  },
  "chirp": {
    "pos": "v.",
    "en_def": "(of a bird or insect) to make a short high sound",
    "cn_def": "啁啾；吱吱叫"
  },
  "howl": {
    "pos": "v.",
    "en_def": "to make a long, loud crying sound",
    "cn_def": "嚎叫"
  },
  "growl": {
    "pos": "v.",
    "en_def": "to make a low, angry sound in the throat",
    "cn_def": "低吼"
  },
  "purr": {
    "pos": "v.",
    "en_def": "(of a cat) to make a soft, low sound when happy",
    "cn_def": "呼嚕叫"
  },
  "hiss": {
    "pos": "v.",
    "en_def": "to make a sound like a long \"sss\"",
    "cn_def": "發出嘶嘶聲"
  },
  "echolocation": {
    "pos": "n.",
    "en_def": "finding objects by sending out sounds and hearing echoes",
    "cn_def": "回聲定位"
  },
  "pheromone": {
    "pos": "n.",
    "en_def": "a chemical an animal releases to send a message",
    "cn_def": "費洛蒙"
  },
  "scent": {
    "pos": "n.",
    "en_def": "a smell, especially one left by an animal",
    "cn_def": "氣味"
  },
  "body language": {
    "pos": "n.phr.",
    "en_def": "messages sent by the way you move or stand",
    "cn_def": "肢體語言"
  },
  "alarm call": {
    "pos": "n.phr.",
    "en_def": "a sound an animal makes to warn others of danger",
    "cn_def": "警戒叫聲"
  },
  "waggle dance": {
    "pos": "n.phr.",
    "en_def": "a dance bees do to show where food is",
    "cn_def": "搖擺舞"
  },
  "whisker": {
    "pos": "n.",
    "en_def": "one of the long stiff hairs near an animal's mouth",
    "cn_def": "鬍鬚"
  },
  "antenna": {
    "pos": "n.",
    "en_def": "one of two long thin parts on an insect's head",
    "cn_def": "觸角"
  },
  "wag": {
    "pos": "v.",
    "en_def": "to move quickly from side to side",
    "cn_def": "搖動（尾巴）"
  },
  "threat display": {
    "pos": "n.phr.",
    "en_def": "actions an animal uses to scare an enemy",
    "cn_def": "威嚇展示"
  },
  "warning colours": {
    "pos": "n.phr.",
    "en_def": "bright colours that tell enemies an animal is dangerous",
    "cn_def": "警戒色"
  },
  "play dead": {
    "pos": "v.phr.",
    "en_def": "to lie still and pretend to be dead",
    "cn_def": "裝死"
  },
  "migratory": {
    "pos": "adj.",
    "en_def": "moving to another place each season",
    "cn_def": "遷徙的"
  },
  "homing": {
    "pos": "adj.",
    "en_def": "able to find the way home from far away",
    "cn_def": "歸巢的"
  },
  "feral": {
    "pos": "adj.",
    "en_def": "once tame but now living wild",
    "cn_def": "野化的"
  },
  "tool use": {
    "pos": "n.phr.",
    "en_def": "using objects to help get food or do tasks",
    "cn_def": "工具使用"
  },
  "mirror test": {
    "pos": "n.phr.",
    "en_def": "a test to see if an animal recognises itself in a mirror",
    "cn_def": "鏡子測驗"
  },
  "parrot": {
    "pos": "n.",
    "en_def": "a colourful bird that can copy human speech",
    "cn_def": "鸚鵡"
  },
  "carrier": {
    "pos": "n.",
    "en_def": "a person who has a gene but does not show its effect",
    "cn_def": "帶原者；攜帶者"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "embryo": {
    "pos": "n.",
    "en_def": "an animal or human in the very early stage of growth",
    "cn_def": "胚胎"
  },
  "subset": {
    "pos": "n.",
    "en_def": "a smaller group within a larger group",
    "cn_def": "子集；一部分"
  },
  "spine": {
    "pos": "n.",
    "en_def": "the row of bones down the middle of your back",
    "cn_def": "脊椎"
  },
  "hive": {
    "pos": "n.",
    "en_def": "a home where bees live together",
    "cn_def": "蜂巢"
  },
  "gene therapy": {
    "pos": "n.phr.",
    "en_def": "treating illness by changing a patient's genes",
    "cn_def": "基因療法"
  },
  "parental care": {
    "pos": "n.phr.",
    "en_def": "the ways parents look after their young",
    "cn_def": "親代照顧"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "inquiry": {
    "pos": "n.",
    "en_def": "an official question or investigation",
    "cn_def": "調查；詢問"
  },
  "agent": {
    "pos": "n.",
    "en_def": "something that causes an effect",
    "cn_def": "媒介；作用物"
  },
  "neanderthal": {
    "pos": "n.",
    "en_def": "an early human who lived in Europe and Asia",
    "cn_def": "尼安德塔人"
  },
  "scepticism": {
    "pos": "n.",
    "en_def": "doubt about whether something is true",
    "cn_def": "懷疑態度"
  },
  "detection": {
    "pos": "n.",
    "en_def": "the act of finding or noticing something",
    "cn_def": "偵測；發現"
  },
  "exception": {
    "pos": "n.",
    "en_def": "something that does not follow the usual rule",
    "cn_def": "例外"
  },
  "pack": {
    "pos": "n.",
    "en_def": "a group of wolves or wild dogs",
    "cn_def": "（狼）群"
  },
  "anthropology": {
    "pos": "n.",
    "en_def": "the study of humans, their history and culture",
    "cn_def": "人類學"
  },
  "fertilisation": {
    "pos": "n.",
    "en_def": "when male and female cells join to start new life",
    "cn_def": "受精"
  },
  "superbug": {
    "pos": "n.",
    "en_def": "a germ that common medicines can no longer kill",
    "cn_def": "超級細菌"
  },
  "approximation": {
    "pos": "n.",
    "en_def": "a number or idea that is close but not exact",
    "cn_def": "近似值；概算"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "working together with others",
    "cn_def": "合作"
  },
  "conceptualise": {
    "pos": "v.",
    "en_def": "to form an idea of something in your mind",
    "cn_def": "構想；概念化"
  },
  "duplicate": {
    "pos": "v.",
    "en_def": "to make an exact copy",
    "cn_def": "複製"
  },
  "regard": {
    "pos": "v.",
    "en_def": "to think of in a particular way",
    "cn_def": "視為；認為"
  },
  "crossbreed": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "spit": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "stabilise": {
    "pos": "v.",
    "en_def": "to become steady and stop changing",
    "cn_def": "穩定下來"
  },
  "reaffirm": {
    "pos": "v.",
    "en_def": "to say again that something is true",
    "cn_def": "重申；再次確認"
  },
  "relate": {
    "pos": "v.",
    "en_def": "to find or show a connection",
    "cn_def": "有關聯；與…相關"
  },
  "determine": {
    "pos": "v.",
    "en_def": "to decide or find out exactly",
    "cn_def": "決定；確定"
  },
  "exterminate": {
    "pos": "v.",
    "en_def": "to kill all of a group of animals",
    "cn_def": "撲滅；滅絕"
  },
  "arouse": {
    "pos": "v.",
    "en_def": "to cause a feeling or reaction",
    "cn_def": "引起；激起"
  },
  "sever": {
    "pos": "v.",
    "en_def": "to cut or break completely",
    "cn_def": "切斷"
  },
  "grooming": {
    "pos": "n.",
    "en_def": "cleaning another animal's fur",
    "cn_def": "理毛"
  },
  "gene": {
    "pos": "n.",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "cn_def": "基因"
  },
  "tolerance": {
    "pos": "n.",
    "en_def": "the ability to accept or survive something",
    "cn_def": "耐受力；容忍"
  },
  "aggression": {
    "pos": "n.",
    "en_def": "angry or violent behaviour",
    "cn_def": "攻擊性"
  },
  "bearing": {
    "pos": "n.",
    "en_def": "influence or connection",
    "cn_def": "關係；影響"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "bone marrow": {
    "pos": "n.phr.",
    "en_def": "the soft tissue inside bones that makes blood",
    "cn_def": "骨髓"
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
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "missing link": {
    "pos": "n.phr.",
    "en_def": "a fossil that connects two groups of living things",
    "cn_def": "缺失的環節"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "consciousness": {
    "pos": "n.",
    "en_def": "being awake and aware of yourself",
    "cn_def": "意識"
  },
  "rna": {
    "pos": "n.",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "cn_def": "核糖核酸"
  },
  "microorganism": {
    "pos": "n.",
    "en_def": "a living thing too small to see without a microscope",
    "cn_def": "微生物"
  },
  "anthropologist": {
    "pos": "n.",
    "en_def": "a person who studies human societies and cultures",
    "cn_def": "人類學家"
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or alive",
    "cn_def": "存在"
  },
  "outcompete": {
    "pos": "v.",
    "en_def": "to do better than others in getting food or space",
    "cn_def": "競爭勝過"
  },
  "activate": {
    "pos": "v.",
    "en_def": "to make something start working",
    "cn_def": "啟動；活化"
  },
  "decode": {
    "pos": "v.",
    "en_def": "to find the meaning of a code",
    "cn_def": "解碼；破譯"
  },
  "body hair": {
    "pos": "n.phr.",
    "en_def": "the hair that grows on the body",
    "cn_def": "體毛"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "blood type": {
    "pos": "n.phr.",
    "en_def": "the group your blood belongs to, such as A or O",
    "cn_def": "血型"
  },
  "birth defect": {
    "pos": "n.phr.",
    "en_def": "a health problem that a baby is born with",
    "cn_def": "先天缺陷"
  },
  "let the cat out of the bag": {
    "pos": "v.phr.",
    "en_def": "to tell a secret by mistake",
    "cn_def": "洩露祕密"
  },
  "cry wolf": {
    "pos": "v.phr.",
    "en_def": "to give a false warning so people stop believing you",
    "cn_def": "謊報危險；放羊的孩子"
  },
  "pass on": {
    "pos": "v.phr.",
    "en_def": "to give something to children or the next generation",
    "cn_def": "傳給；遺傳給"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "not able to be affected by a disease",
    "cn_def": "免疫的"
  },
  "heritable": {
    "pos": "adj.",
    "en_def": "able to be passed from parent to child",
    "cn_def": "可遺傳的"
  },
  "irrelevant": {
    "pos": "adj.",
    "en_def": "not connected to the subject",
    "cn_def": "無關的"
  },
  "instinctive": {
    "pos": "adj.",
    "en_def": "done naturally without learning",
    "cn_def": "本能的"
  },
  "diagnostic": {
    "pos": "adj.",
    "en_def": "used to find out what illness someone has",
    "cn_def": "診斷的"
  },
  "dog-eat-dog": {
    "pos": "adj.",
    "en_def": "very competitive, where people harm others to succeed",
    "cn_def": "殘酷競爭的；弱肉強食的"
  },
  "inadequate": {
    "pos": "adj.",
    "en_def": "not good enough",
    "cn_def": "不足的；不充分的"
  },
  "deleterious": {
    "pos": "adj.",
    "en_def": "causing harm",
    "cn_def": "有害的"
  },
  "biological parent": {
    "pos": "n.phr.",
    "en_def": "the parent who gave you your genes",
    "cn_def": "親生父母"
  },
  "lab rat": {
    "pos": "n.phr.",
    "en_def": "a rat used for scientific experiments",
    "cn_def": "實驗鼠"
  },
  "the lion's share": {
    "pos": "n.phr.",
    "en_def": "the largest part of something",
    "cn_def": "最大的一份"
  },
  "homo sapiens": {
    "pos": "n.",
    "en_def": "the scientific name for modern humans",
    "cn_def": "智人"
  },
  "inheritance": {
    "pos": "n.",
    "en_def": "features passed from parents to children",
    "cn_def": "遺傳"
  },
  "brood": {
    "pos": "n.",
    "en_def": "a group of young birds born at the same time",
    "cn_def": "一窩幼鳥"
  },
  "experimentation": {
    "pos": "n.",
    "en_def": "the process of trying new ideas in tests",
    "cn_def": "實驗"
  }
};

const EXTRA_GLOSSES = {};
