// Topic 13 Subunit 12 Quiz Data: Academic Words 學術單字 5 (regard – experimentation)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S12 - Academic Words 學術單字 5 (regard – experimentation)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "regard",
    "pos": "v.",
    "cn_def": "視為；認為",
    "en_def": "to think of in a particular way",
    "sentence": "Many farmers {{BLANK}} crows as pests, but scientists see them as some of the cleverest birds on Earth.",
    "cn": "許多農民把烏鴉視為害鳥，但科學家把牠們看作地球上最聰明的鳥類之一。"
  },
  {
    "word": "relate",
    "pos": "v.",
    "cn_def": "有關聯；與…相關",
    "en_def": "to find or show a connection",
    "sentence": "Scientists are trying to {{BLANK}} certain genes to sleep habits, because some people need much less sleep than others.",
    "cn": "科學家正試著把某些基因與睡眠習慣相關聯，因為有些人需要的睡眠比別人少得多。"
  },
  {
    "word": "simplify",
    "pos": "v.",
    "cn_def": "簡化",
    "en_def": "to make something easier to understand",
    "sentence": "The teacher tried to {{BLANK}} the topic of DNA, so she compared it to a recipe book in a kitchen.",
    "cn": "老師試著簡化DNA這個主題，所以她把它比喻成廚房裡的食譜書。"
  },
  {
    "word": "anthropomorphism",
    "pos": "n.",
    "cn_def": "擬人化",
    "en_def": "giving human feelings to animals or objects",
    "sentence": "Saying your dog feels guilty may be {{BLANK}}, because it might simply be reacting to your angry voice.",
    "cn": "說你的狗感到內疚可能是擬人化，因為牠可能只是對你生氣的聲音做出反應。"
  },
  {
    "word": "immutable",
    "pos": "adj.",
    "cn_def": "不可改變的",
    "en_def": "never changing",
    "sentence": "Our genes are not completely {{BLANK}}, because small mutations happen almost every time our cells divide.",
    "cn": "我們的基因並非完全不可改變的，因為幾乎每次我們的細胞分裂時都會發生小突變。"
  },
  {
    "word": "inadequate",
    "pos": "adj.",
    "cn_def": "不足的；不充分的",
    "en_def": "not good enough",
    "sentence": "The cage was {{BLANK}} for such a large bird, so the rescue centre moved it to an outdoor area.",
    "cn": "那個籠子對這麼大的鳥來說是不足的，所以救援中心把牠移到戶外區域。"
  },
  {
    "word": "inconspicuous",
    "pos": "adj.",
    "cn_def": "不顯眼的",
    "en_def": "not easily seen or noticed",
    "sentence": "Female ducks are brown and {{BLANK}}, so they can sit on their nests without being seen by foxes.",
    "cn": "雌鴨是褐色而且不顯眼的，所以牠們能坐在巢上而不被狐狸看見。"
  },
  {
    "word": "indistinguishable",
    "pos": "adj.",
    "cn_def": "無法區分的",
    "en_def": "impossible to tell apart",
    "sentence": "The two species of mosquito are almost {{BLANK}}, but only one of them carries the disease.",
    "cn": "這兩種蚊子幾乎是無法區分的，但只有其中一種會傳播疾病。"
  },
  {
    "word": "irrefutable",
    "pos": "adj.",
    "cn_def": "無可辯駁的",
    "en_def": "impossible to prove wrong",
    "sentence": "The DNA evidence was {{BLANK}}, so the man finally admitted that he was the child's father.",
    "cn": "DNA證據是無可辯駁的，所以那名男子最終承認他是孩子的父親。"
  },
  {
    "word": "misinterpret",
    "pos": "v.",
    "cn_def": "誤解",
    "en_def": "to understand something wrongly",
    "sentence": "Many people {{BLANK}} a cat's slow blink as sleepiness, but it is actually a friendly sign of trust.",
    "cn": "許多人把貓緩慢的眨眼誤解為想睡覺，但它其實是一種表示信任的友善訊號。"
  },
  {
    "word": "misleading",
    "pos": "adj.",
    "cn_def": "誤導的",
    "en_def": "giving the wrong idea",
    "sentence": "The headline \"Scientists find the gene for intelligence\" was {{BLANK}}, because hundreds of genes affect how we think.",
    "cn": "「科學家找到智力基因」這個標題是誤導的，因為有數百個基因會影響我們如何思考。"
  },
  {
    "word": "observational",
    "pos": "adj.",
    "cn_def": "觀察性的",
    "en_def": "based on watching rather than experiments",
    "sentence": "Most of her work is {{BLANK}}, so she spends long hours in the forest and rarely does tests in a lab.",
    "cn": "她大部分的研究是觀察性的，所以她在森林裡待很長的時間，很少在實驗室做測試。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people believe something",
    "sentence": "Darwin's arguments were very {{BLANK}}, because he supported every idea with hundreds of careful examples.",
    "cn": "達爾文的論點非常有說服力，因為他用數百個仔細的例子來支持每一個想法。"
  },
  {
    "word": "predetermined",
    "pos": "adj.",
    "cn_def": "預先決定的",
    "en_def": "decided in advance",
    "sentence": "Your future is not {{BLANK}} by your genes, because choices about food, sleep and exercise also matter.",
    "cn": "你的未來並不是由基因預先決定的，因為對飲食、睡眠和運動的選擇也很重要。"
  },
  {
    "word": "provocative",
    "pos": "adj.",
    "cn_def": "引起爭議的；挑釁的",
    "en_def": "causing strong reactions or arguments",
    "sentence": "The professor asked a {{BLANK}} question about designer babies, and the class argued about it for the whole hour.",
    "cn": "教授問了一個關於訂製嬰兒的引起爭議的問題，而全班為此爭論了整整一個小時。"
  },
  {
    "word": "reproducible",
    "pos": "adj.",
    "cn_def": "可重複驗證的",
    "en_def": "able to be repeated with the same results",
    "sentence": "Good results should be {{BLANK}}, so other labs must get the same answer when they repeat the test.",
    "cn": "好的研究結果應該是可重複驗證的，所以其他實驗室重做測試時必須得到相同的答案。"
  },
  {
    "word": "spurious",
    "pos": "adj.",
    "cn_def": "虛假的；似是而非的",
    "en_def": "false, although it seems true",
    "sentence": "The link between ice cream sales and shark attacks is {{BLANK}}, because both simply increase in hot weather.",
    "cn": "冰淇淋銷量和鯊魚攻擊之間的關聯是似是而非的，因為兩者只是都在炎熱天氣時增加。"
  },
  {
    "word": "unambiguous",
    "pos": "adj.",
    "cn_def": "明確的",
    "en_def": "clear, with only one meaning",
    "sentence": "The bee's dance sends an {{BLANK}} message, so the other bees fly straight to the right flowers.",
    "cn": "蜜蜂的舞蹈傳達出明確的訊息，所以其他蜜蜂會直接飛往正確的花朵。"
  },
  {
    "word": "undisputed",
    "pos": "adj.",
    "cn_def": "無可爭議的",
    "en_def": "accepted by everyone",
    "sentence": "The lion is the {{BLANK}} leader of the group, but younger males may challenge him when he grows old.",
    "cn": "這隻獅子是群體中無可爭議的首領，但當他變老時年輕的雄獅可能會挑戰他。"
  },
  {
    "word": "unsubstantiated",
    "pos": "adj.",
    "cn_def": "未經證實的",
    "en_def": "not supported by evidence",
    "sentence": "The claim that the pill makes children smarter is {{BLANK}}, so parents should not waste their money on it.",
    "cn": "那種藥丸能讓孩子變聰明的說法是未經證實的，所以父母不應該把錢浪費在上面。"
  },
  {
    "word": "untested",
    "pos": "adj.",
    "cn_def": "未經測試的",
    "en_def": "not yet tried or checked",
    "sentence": "The new treatment is still {{BLANK}} on humans, so doctors cannot promise that it will be safe.",
    "cn": "這種新療法在人類身上仍未經測試，所以醫生無法保證它是安全的。"
  },
  {
    "word": "well-documented",
    "pos": "adj.",
    "cn_def": "有充分記錄的",
    "en_def": "recorded clearly in many reports",
    "sentence": "The friendship between elephants is {{BLANK}}, and many videos show them helping each other in trouble.",
    "cn": "大象之間的友誼是有充分記錄的，而許多影片顯示牠們在困境中互相幫助。"
  },
  {
    "word": "continuum",
    "pos": "n.",
    "cn_def": "連續體；連續的範圍",
    "en_def": "a range where things change gradually",
    "sentence": "Intelligence is not a simple yes or no, because animals lie along a {{BLANK}} from simple to very clever.",
    "cn": "智力並不是簡單的有或沒有，因為動物分布在從簡單到非常聰明的連續的範圍上。"
  },
  {
    "word": "counterexample",
    "pos": "n.",
    "cn_def": "反例",
    "en_def": "an example that shows a rule is not always true",
    "sentence": "The teacher said all mammals give birth to live young, but a student gave the platypus as a {{BLANK}}.",
    "cn": "老師說所有哺乳類動物都是胎生的，但一位學生舉出鴨嘴獸作為反例。"
  },
  {
    "word": "experimentation",
    "pos": "n.",
    "cn_def": "實驗",
    "en_def": "the process of trying new ideas in tests",
    "sentence": "After years of {{BLANK}}, the team found a safe way to grow skin in the lab, and burn patients now benefit.",
    "cn": "經過多年的實驗，研究團隊找到了在實驗室中安全培養皮膚的方法，而燒燙傷病人如今因此受益。"
  }
];

const MCQS = [
  {
    "q": "Many farmers _____ crows as pests, but scientists see them as some of the cleverest birds on Earth.",
    "options": [
      "chirp",
      "secrete",
      "attach",
      "regard"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Scientists are trying to _____ certain genes to sleep habits, because some people need much less sleep than others.",
    "options": [
      "distract",
      "reaffirm",
      "relate",
      "wag"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The teacher tried to _____ the topic of DNA, so she compared it to a recipe book in a kitchen.",
    "options": [
      "simplify",
      "interbreed",
      "compete",
      "sever"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Saying your dog feels guilty may be _____, because it might simply be reacting to your angry voice.",
    "options": [
      "plumage",
      "anthropomorphism",
      "RNA",
      "donor"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Our genes are not completely _____, because small mutations happen almost every time our cells divide.",
    "options": [
      "migratory",
      "glow-in-the-dark",
      "immutable",
      "limited"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The cage was _____ for such a large bird, so the rescue centre moved it to an outdoor area.",
    "options": [
      "inadequate",
      "independent",
      "problematic",
      "unusual"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Female ducks are brown and _____, so they can sit on their nests without being seen by foxes.",
    "options": [
      "biomedical",
      "environmental",
      "advantageous",
      "inconspicuous"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The two species of mosquito are almost _____, but only one of them carries the disease.",
    "options": [
      "gregarious",
      "indistinguishable",
      "faulty",
      "fraternal"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The DNA evidence was _____, so the man finally admitted that he was the child's father.",
    "options": [
      "initial",
      "skeletal",
      "irrefutable",
      "congenital"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Many people _____ a cat's slow blink as sleepiness, but it is actually a friendly sign of trust.",
    "options": [
      "attract",
      "misinterpret",
      "deceive",
      "infest"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The headline \"Scientists find the gene for intelligence\" was _____, because hundreds of genes affect how we think.",
    "options": [
      "submissive",
      "intelligent",
      "immune",
      "misleading"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Most of her work is _____, so she spends long hours in the forest and rarely does tests in a lab.",
    "options": [
      "observational",
      "independent",
      "feral",
      "problematic"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Darwin's arguments were very _____, because he supported every idea with hundreds of careful examples.",
    "options": [
      "reclusive",
      "purposeful",
      "persuasive",
      "selfless"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Your future is not _____ by your genes, because choices about food, sleep and exercise also matter.",
    "options": [
      "predetermined",
      "ineffective",
      "antagonistic",
      "gregarious"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The professor asked a _____ question about designer babies, and the class argued about it for the whole hour.",
    "options": [
      "environmental",
      "provocative",
      "intelligent",
      "left-handed"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Good results should be _____, so other labs must get the same answer when they repeat the test.",
    "options": [
      "transgenic",
      "dog-eat-dog",
      "diagnostic",
      "reproducible"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The link between ice cream sales and shark attacks is _____, because both simply increase in hot weather.",
    "options": [
      "efficient",
      "spurious",
      "selfless",
      "vestigial"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The bee's dance sends an _____ message, so the other bees fly straight to the right flowers.",
    "options": [
      "pharmaceutical",
      "attuned",
      "environmental",
      "unambiguous"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The lion is the _____ leader of the group, but younger males may challenge him when he grows old.",
    "options": [
      "undisputed",
      "partial",
      "uncommon",
      "primordial"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The claim that the pill makes children smarter is _____, so parents should not waste their money on it.",
    "options": [
      "docile",
      "submissive",
      "unsubstantiated",
      "harmless"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new treatment is still _____ on humans, so doctors cannot promise that it will be safe.",
    "options": [
      "untested",
      "partial",
      "bipedal",
      "congenital"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The friendship between elephants is _____, and many videos show them helping each other in trouble.",
    "options": [
      "left-handed",
      "well-documented",
      "responsive",
      "initial"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Intelligence is not a simple yes or no, because animals lie along a _____ from simple to very clever.",
    "options": [
      "manifestation",
      "speciation",
      "continuum",
      "molecule"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The teacher said all mammals give birth to live young, but a student gave the platypus as a _____.",
    "options": [
      "taxonomy",
      "imprinting",
      "meerkat",
      "counterexample"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "After years of _____, the team found a safe way to grow skin in the lab, and burn patients now benefit.",
    "options": [
      "twin",
      "saliva",
      "experimentation",
      "chromosome"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "regard": {
    "pos": "v.",
    "en_def": "to think of in a particular way",
    "cn_def": "視為；認為"
  },
  "relate": {
    "pos": "v.",
    "en_def": "to find or show a connection",
    "cn_def": "有關聯；與…相關"
  },
  "simplify": {
    "pos": "v.",
    "en_def": "to make something easier to understand",
    "cn_def": "簡化"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "immutable": {
    "pos": "adj.",
    "en_def": "never changing",
    "cn_def": "不可改變的"
  },
  "inadequate": {
    "pos": "adj.",
    "en_def": "not good enough",
    "cn_def": "不足的；不充分的"
  },
  "inconspicuous": {
    "pos": "adj.",
    "en_def": "not easily seen or noticed",
    "cn_def": "不顯眼的"
  },
  "indistinguishable": {
    "pos": "adj.",
    "en_def": "impossible to tell apart",
    "cn_def": "無法區分的"
  },
  "irrefutable": {
    "pos": "adj.",
    "en_def": "impossible to prove wrong",
    "cn_def": "無可辯駁的"
  },
  "misinterpret": {
    "pos": "v.",
    "en_def": "to understand something wrongly",
    "cn_def": "誤解"
  },
  "misleading": {
    "pos": "adj.",
    "en_def": "giving the wrong idea",
    "cn_def": "誤導的"
  },
  "observational": {
    "pos": "adj.",
    "en_def": "based on watching rather than experiments",
    "cn_def": "觀察性的"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people believe something",
    "cn_def": "有說服力的"
  },
  "predetermined": {
    "pos": "adj.",
    "en_def": "decided in advance",
    "cn_def": "預先決定的"
  },
  "provocative": {
    "pos": "adj.",
    "en_def": "causing strong reactions or arguments",
    "cn_def": "引起爭議的；挑釁的"
  },
  "reproducible": {
    "pos": "adj.",
    "en_def": "able to be repeated with the same results",
    "cn_def": "可重複驗證的"
  },
  "spurious": {
    "pos": "adj.",
    "en_def": "false, although it seems true",
    "cn_def": "虛假的；似是而非的"
  },
  "unambiguous": {
    "pos": "adj.",
    "en_def": "clear, with only one meaning",
    "cn_def": "明確的"
  },
  "undisputed": {
    "pos": "adj.",
    "en_def": "accepted by everyone",
    "cn_def": "無可爭議的"
  },
  "unsubstantiated": {
    "pos": "adj.",
    "en_def": "not supported by evidence",
    "cn_def": "未經證實的"
  },
  "untested": {
    "pos": "adj.",
    "en_def": "not yet tried or checked",
    "cn_def": "未經測試的"
  },
  "well-documented": {
    "pos": "adj.",
    "en_def": "recorded clearly in many reports",
    "cn_def": "有充分記錄的"
  },
  "continuum": {
    "pos": "n.",
    "en_def": "a range where things change gradually",
    "cn_def": "連續體；連續的範圍"
  },
  "counterexample": {
    "pos": "n.",
    "en_def": "an example that shows a rule is not always true",
    "cn_def": "反例"
  },
  "experimentation": {
    "pos": "n.",
    "en_def": "the process of trying new ideas in tests",
    "cn_def": "實驗"
  },
  "chirp": {
    "pos": "v.",
    "en_def": "(of a bird or insect) to make a short high sound",
    "cn_def": "啁啾；吱吱叫"
  },
  "secrete": {
    "pos": "v.",
    "en_def": "to produce a liquid inside the body",
    "cn_def": "分泌"
  },
  "attach": {
    "pos": "v.",
    "en_def": "to fix or join one thing to another",
    "cn_def": "附著；貼上"
  },
  "distract": {
    "pos": "v.",
    "en_def": "to take someone's attention away",
    "cn_def": "使分心"
  },
  "reaffirm": {
    "pos": "v.",
    "en_def": "to say again that something is true",
    "cn_def": "重申；再次確認"
  },
  "wag": {
    "pos": "v.",
    "en_def": "to move quickly from side to side",
    "cn_def": "搖動（尾巴）"
  },
  "interbreed": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to win against others",
    "cn_def": "競爭"
  },
  "sever": {
    "pos": "v.",
    "en_def": "to cut or break completely",
    "cn_def": "切斷"
  },
  "plumage": {
    "pos": "n.",
    "en_def": "a bird's feathers",
    "cn_def": "羽毛"
  },
  "rna": {
    "pos": "n.",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "cn_def": "核糖核酸"
  },
  "donor": {
    "pos": "n.",
    "en_def": "a person who gives blood or body parts to help others",
    "cn_def": "捐贈者"
  },
  "migratory": {
    "pos": "adj.",
    "en_def": "moving to another place each season",
    "cn_def": "遷徙的"
  },
  "glow-in-the-dark": {
    "pos": "adj.",
    "en_def": "shining in darkness",
    "cn_def": "夜光的"
  },
  "limited": {
    "pos": "adj.",
    "en_def": "small in amount or number",
    "cn_def": "有限的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "not needing help from others",
    "cn_def": "獨立的"
  },
  "problematic": {
    "pos": "adj.",
    "en_def": "full of difficulties",
    "cn_def": "有問題的；棘手的"
  },
  "unusual": {
    "pos": "adj.",
    "en_def": "different from what is normal",
    "cn_def": "不尋常的"
  },
  "biomedical": {
    "pos": "adj.",
    "en_def": "relating to biology and medicine",
    "cn_def": "生物醫學的"
  },
  "environmental": {
    "pos": "adj.",
    "en_def": "relating to the natural world and surroundings",
    "cn_def": "環境的"
  },
  "advantageous": {
    "pos": "adj.",
    "en_def": "helpful and giving a better chance of success",
    "cn_def": "有利的"
  },
  "gregarious": {
    "pos": "adj.",
    "en_def": "liking to be with others",
    "cn_def": "群居的；愛交際的"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly",
    "cn_def": "有缺陷的；故障的"
  },
  "fraternal": {
    "pos": "adj.",
    "en_def": "(of twins) from two different eggs",
    "cn_def": "異卵的"
  },
  "initial": {
    "pos": "adj.",
    "en_def": "happening at the beginning",
    "cn_def": "最初的"
  },
  "skeletal": {
    "pos": "adj.",
    "en_def": "relating to the bones of a body",
    "cn_def": "骨骼的"
  },
  "congenital": {
    "pos": "adj.",
    "en_def": "present from birth",
    "cn_def": "先天的"
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make something come closer",
    "cn_def": "吸引"
  },
  "deceive": {
    "pos": "v.",
    "en_def": "to make someone believe something false",
    "cn_def": "欺騙"
  },
  "infest": {
    "pos": "v.",
    "en_def": "(of insects or animals) to fill a place in large numbers",
    "cn_def": "大批出沒；侵擾"
  },
  "submissive": {
    "pos": "adj.",
    "en_def": "willing to obey others",
    "cn_def": "順從的"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "clever and able to learn quickly",
    "cn_def": "聰明的"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "not able to be affected by a disease",
    "cn_def": "免疫的"
  },
  "feral": {
    "pos": "adj.",
    "en_def": "once tame but now living wild",
    "cn_def": "野化的"
  },
  "reclusive": {
    "pos": "adj.",
    "en_def": "avoiding others and living alone",
    "cn_def": "隱居的；不喜交際的"
  },
  "purposeful": {
    "pos": "adj.",
    "en_def": "done with a clear aim",
    "cn_def": "有目的的"
  },
  "selfless": {
    "pos": "adj.",
    "en_def": "caring more about others than yourself",
    "cn_def": "無私的"
  },
  "ineffective": {
    "pos": "adj.",
    "en_def": "not producing the result you want",
    "cn_def": "無效的"
  },
  "antagonistic": {
    "pos": "adj.",
    "en_def": "showing strong opposition",
    "cn_def": "敵對的"
  },
  "left-handed": {
    "pos": "adj.",
    "en_def": "using the left hand more easily than the right",
    "cn_def": "左撇子的"
  },
  "transgenic": {
    "pos": "adj.",
    "en_def": "having genes added from another species",
    "cn_def": "基因轉殖的"
  },
  "dog-eat-dog": {
    "pos": "adj.",
    "en_def": "very competitive, where people harm others to succeed",
    "cn_def": "殘酷競爭的；弱肉強食的"
  },
  "diagnostic": {
    "pos": "adj.",
    "en_def": "used to find out what illness someone has",
    "cn_def": "診斷的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "vestigial": {
    "pos": "adj.",
    "en_def": "still present in the body but no longer useful",
    "cn_def": "退化的；殘留的"
  },
  "pharmaceutical": {
    "pos": "adj.",
    "en_def": "relating to making and selling medicines",
    "cn_def": "製藥的"
  },
  "attuned": {
    "pos": "adj.",
    "en_def": "able to understand and react to something",
    "cn_def": "適應的；熟悉的"
  },
  "partial": {
    "pos": "adj.",
    "en_def": "not complete",
    "cn_def": "部分的"
  },
  "uncommon": {
    "pos": "adj.",
    "en_def": "not happening often",
    "cn_def": "不常見的"
  },
  "primordial": {
    "pos": "adj.",
    "en_def": "existing at the very beginning of time",
    "cn_def": "原始的；最初的"
  },
  "docile": {
    "pos": "adj.",
    "en_def": "calm and easy to control",
    "cn_def": "溫馴的"
  },
  "harmless": {
    "pos": "adj.",
    "en_def": "not able to cause harm",
    "cn_def": "無害的"
  },
  "bipedal": {
    "pos": "adj.",
    "en_def": "walking on two legs",
    "cn_def": "雙足行走的"
  },
  "responsive": {
    "pos": "adj.",
    "en_def": "reacting quickly and positively",
    "cn_def": "反應靈敏的"
  },
  "manifestation": {
    "pos": "n.",
    "en_def": "a sign that shows something exists",
    "cn_def": "表現；顯現"
  },
  "speciation": {
    "pos": "n.",
    "en_def": "the forming of a new and separate species",
    "cn_def": "物種形成"
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance made of atoms",
    "cn_def": "分子"
  },
  "taxonomy": {
    "pos": "n.",
    "en_def": "the science of naming and grouping living things",
    "cn_def": "分類學"
  },
  "imprinting": {
    "pos": "n.",
    "en_def": "a young animal's quick bond with the first thing it sees",
    "cn_def": "銘印"
  },
  "meerkat": {
    "pos": "n.",
    "en_def": "a small African animal that stands on its back legs",
    "cn_def": "狐獴"
  },
  "twin": {
    "pos": "n.",
    "en_def": "one of two children born at the same time to the same mother",
    "cn_def": "雙胞胎"
  },
  "saliva": {
    "pos": "n.",
    "en_def": "the liquid in your mouth",
    "cn_def": "唾液"
  },
  "chromosome": {
    "pos": "n.",
    "en_def": "a thread-like structure in a cell that carries genes",
    "cn_def": "染色體"
  }
};

const EXTRA_GLOSSES = {};
