// Topic 13 Subunit 13 Quiz Data: Academic Words 學術單字 6 (observer – gradually)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S13 - Academic Words 學術單字 6 (observer – gradually)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "observer",
    "pos": "n.",
    "cn_def": "觀察者",
    "en_def": "a person who watches something carefully",
    "sentence": "A careful {{BLANK}} will notice that each crow has a slightly different call, so you can tell them apart.",
    "cn": "一位細心的觀察者會注意到每隻烏鴉的叫聲都略有不同，所以你可以分辨牠們。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；提議",
    "en_def": "a plan or idea that is suggested",
    "sentence": "The government rejected the {{BLANK}} to edit the genes of mosquitoes, because many citizens were worried.",
    "cn": "政府否決了編輯蚊子基因的提案，因為許多市民感到擔憂。"
  },
  {
    "word": "query",
    "pos": "n.",
    "cn_def": "疑問；詢問",
    "en_def": "a question",
    "sentence": "If you have a {{BLANK}} about your DNA test results, you can email the company, and a genetic adviser will reply.",
    "cn": "如果你對DNA檢測結果有疑問，可以寫電子郵件給公司，而一位遺傳顧問會回覆你。"
  },
  {
    "word": "supposition",
    "pos": "n.",
    "cn_def": "推測；假定",
    "en_def": "an idea that is believed without proof",
    "sentence": "The idea that dinosaurs were grey was only a {{BLANK}}, but new fossils show that some had colourful feathers.",
    "cn": "恐龍是灰色的這個想法只是推測，但新的化石顯示有些恐龍有色彩繽紛的羽毛。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "受試者；研究對象",
    "en_def": "a person or animal used in a study",
    "sentence": "Each {{BLANK}} in the study wore a sleep tracker, and the scientists compared their results with their genes.",
    "cn": "研究中的每位受試者都戴著睡眠追蹤器，而科學家把他們的結果和基因作比較。"
  },
  {
    "word": "fluke",
    "pos": "n.",
    "cn_def": "僥倖；偶然",
    "en_def": "a lucky or unusual result that happens by chance",
    "sentence": "At first, the scientists thought the clever bird was a {{BLANK}}, but other birds soon learned the same trick.",
    "cn": "起初科學家認為那隻聰明的鳥只是偶然，但其他鳥很快也學會了同樣的把戲。"
  },
  {
    "word": "abnormality",
    "pos": "n.",
    "cn_def": "異常",
    "en_def": "something that is not usual, often a health problem",
    "sentence": "The scan showed a small {{BLANK}} in the baby's heart, but the doctor said it would probably heal by itself.",
    "cn": "掃描顯示寶寶的心臟有一個小異常，但醫生說它可能會自行癒合。"
  },
  {
    "word": "agent",
    "pos": "n.",
    "cn_def": "媒介；作用物",
    "en_def": "something that causes an effect",
    "sentence": "Mosquitoes are the main {{BLANK}} that spreads the disease, so the town cleaned all the standing water.",
    "cn": "蚊子是傳播這種疾病的主要媒介，所以這個城鎮清除了所有的積水。"
  },
  {
    "word": "aggression",
    "pos": "n.",
    "cn_def": "攻擊性",
    "en_def": "angry or violent behaviour",
    "sentence": "Male birds show more {{BLANK}} in spring, because they must protect their area from other males.",
    "cn": "雄鳥在春天表現出更強的攻擊性，因為牠們必須保護自己的地盤不受其他雄鳥侵犯。"
  },
  {
    "word": "behavioural",
    "pos": "adj.",
    "cn_def": "行為的",
    "en_def": "relating to how a person or animal acts",
    "sentence": "The dog had several {{BLANK}} problems, so the family hired a trainer to help it feel calm.",
    "cn": "那隻狗有幾個行為的問題，所以這家人請了一位訓練師幫助牠平靜下來。"
  },
  {
    "word": "biologically",
    "pos": "adv.",
    "cn_def": "生物學上",
    "en_def": "in a way relating to living things",
    "sentence": "Humans are {{BLANK}} very similar to chimps, but our language and culture make us very different.",
    "cn": "人類在生物學上和黑猩猩非常相似，但我們的語言和文化讓我們非常不同。"
  },
  {
    "word": "certainty",
    "pos": "n.",
    "cn_def": "確定性；把握",
    "en_def": "the state of being completely sure",
    "sentence": "Scientists cannot say with {{BLANK}} why the dinosaurs had feathers, but warmth and display are likely reasons.",
    "cn": "科學家無法確定恐龍為什麼有羽毛，但保暖和展示可能是原因。"
  },
  {
    "word": "commonly",
    "pos": "adv.",
    "cn_def": "普遍地；通常",
    "en_def": "usually or by many people",
    "sentence": "The fruit fly is {{BLANK}} used in genetics labs, because it is cheap and breeds every two weeks.",
    "cn": "果蠅普遍地被用於遺傳學實驗室，因為牠便宜而且每兩週就繁殖一次。"
  },
  {
    "word": "consciousness",
    "pos": "n.",
    "cn_def": "意識",
    "en_def": "being awake and aware of yourself",
    "sentence": "Scientists still argue about animal {{BLANK}}, but most agree that dogs and apes have feelings.",
    "cn": "科學家仍在爭論動物的意識，但大多數人同意狗和猿類有情感。"
  },
  {
    "word": "descriptive",
    "pos": "adj.",
    "cn_def": "描述性的",
    "en_def": "describing what something is like",
    "sentence": "Her first report was mainly {{BLANK}}, so it explained what the monkeys did but not why they did it.",
    "cn": "她的第一份報告主要是描述性的，所以它解釋了猴子做了什麼，但沒有解釋為什麼。"
  },
  {
    "word": "detection",
    "pos": "n.",
    "cn_def": "偵測；發現",
    "en_def": "the act of finding or noticing something",
    "sentence": "Early {{BLANK}} of a genetic disease can help a baby, because doctors can start treatment right away.",
    "cn": "遺傳疾病的早期發現能幫助嬰兒，因為醫生可以立即開始治療。"
  },
  {
    "word": "diagnostic",
    "pos": "adj.",
    "cn_def": "診斷的",
    "en_def": "used to find out what illness someone has",
    "sentence": "The hospital bought new {{BLANK}} equipment, so patients no longer wait weeks for their test results.",
    "cn": "醫院購買了新的診斷的設備，所以病人不再需要等好幾週才拿到檢查結果。"
  },
  {
    "word": "effectively",
    "pos": "adv.",
    "cn_def": "有效地",
    "en_def": "in a way that works well",
    "sentence": "The new drug works {{BLANK}} against the virus, but it is still too expensive for many patients.",
    "cn": "這種新藥能有效地對抗病毒，但對許多病人來說仍然太貴。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or energy",
    "sentence": "Penguins are very {{BLANK}} swimmers, so they can travel long distances while using little energy.",
    "cn": "企鵝是非常有效率的泳者，所以牠們能消耗很少的能量游很長的距離。"
  },
  {
    "word": "entirely",
    "pos": "adv.",
    "cn_def": "完全地",
    "en_def": "completely",
    "sentence": "Koalas eat almost {{BLANK}} eucalyptus leaves, so they cannot survive where those trees do not grow.",
    "cn": "無尾熊幾乎完全以尤加利樹葉為食，所以牠們無法在沒有這種樹的地方生存。"
  },
  {
    "word": "environmental",
    "pos": "adj.",
    "cn_def": "環境的",
    "en_def": "relating to the natural world and surroundings",
    "sentence": "Some illnesses come from genes, but others are caused by {{BLANK}} factors like dirty air.",
    "cn": "有些疾病來自基因，但其他疾病是由像髒空氣這樣的環境的因素所造成的。"
  },
  {
    "word": "equally",
    "pos": "adv.",
    "cn_def": "同樣地；平等地",
    "en_def": "to the same degree",
    "sentence": "The mother and father penguins share the work {{BLANK}}, and they take turns keeping the egg warm.",
    "cn": "企鵝爸爸和媽媽平等地分擔工作，而且牠們輪流讓蛋保持溫暖。"
  },
  {
    "word": "existence",
    "pos": "n.",
    "cn_def": "存在",
    "en_def": "the state of being real or alive",
    "sentence": "Scientists doubted the {{BLANK}} of the giant squid for years, until someone finally filmed one in 2004.",
    "cn": "科學家多年來一直懷疑大王魷的存在，直到2004年終於有人拍到了一隻。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "迷人的；極有趣的",
    "en_def": "extremely interesting",
    "sentence": "The way birds find their way home is {{BLANK}}, and scientists are still not sure how they do it.",
    "cn": "鳥類找到回家路的方式是極有趣的，而科學家仍然不確定牠們是怎麼做到的。"
  },
  {
    "word": "gradually",
    "pos": "adv.",
    "cn_def": "逐漸地",
    "en_def": "slowly over time",
    "sentence": "The puppy {{BLANK}} learned to trust the new family, and after a month it slept happily on the sofa.",
    "cn": "那隻小狗逐漸地學會信任新家人，而一個月後牠快樂地睡在沙發上。"
  }
];

const MCQS = [
  {
    "q": "A careful _____ will notice that each crow has a slightly different call, so you can tell them apart.",
    "options": [
      "birthmark",
      "observer",
      "proclivity",
      "CRISPR"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The government rejected the _____ to edit the genes of mosquitoes, because many citizens were worried.",
    "options": [
      "pod",
      "clutch",
      "hominid",
      "proposal"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "If you have a _____ about your DNA test results, you can email the company, and a genetic adviser will reply.",
    "options": [
      "query",
      "microbe",
      "beak",
      "biochemistry"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The idea that dinosaurs were grey was only a _____, but new fossils show that some had colourful feathers.",
    "options": [
      "biochemistry",
      "nucleus",
      "supposition",
      "freckle"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Each _____ in the study wore a sleep tracker, and the scientists compared their results with their genes.",
    "options": [
      "analysis",
      "CRISPR",
      "birthmark",
      "subject"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "At first, the scientists thought the clever bird was a _____, but other birds soon learned the same trick.",
    "options": [
      "fluke",
      "termite",
      "counterexample",
      "sequencing"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The scan showed a small _____ in the baby's heart, but the doctor said it would probably heal by itself.",
    "options": [
      "pod",
      "abnormality",
      "birthmark",
      "whisker"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Mosquitoes are the main _____ that spreads the disease, so the town cleaned all the standing water.",
    "options": [
      "fidelity",
      "biochemistry",
      "agent",
      "finch"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Male birds show more _____ in spring, because they must protect their area from other males.",
    "options": [
      "aggression",
      "rebuttal",
      "jawbone",
      "experimentation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The dog had several _____ problems, so the family hired a trainer to help it feel calm.",
    "options": [
      "faulty",
      "imprecise",
      "behavioural",
      "unexpected"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Humans are _____ very similar to chimps, but our language and culture make us very different.",
    "options": [
      "socially",
      "partly",
      "frequently",
      "biologically"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Scientists cannot say with _____ why the dinosaurs had feathers, but warmth and display are likely reasons.",
    "options": [
      "giraffe",
      "certainty",
      "conditioning",
      "twin"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The fruit fly is _____ used in genetics labs, because it is cheap and breeds every two weeks.",
    "options": [
      "frequently",
      "collectively",
      "widely",
      "commonly"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Scientists still argue about animal _____, but most agree that dogs and apes have feelings.",
    "options": [
      "consciousness",
      "lookout",
      "orangutan",
      "finch"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Her first report was mainly _____, so it explained what the monkeys did but not why they did it.",
    "options": [
      "influential",
      "descriptive",
      "advantageous",
      "drug-resistant"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Early _____ of a genetic disease can help a baby, because doctors can start treatment right away.",
    "options": [
      "inbreeding",
      "carrier",
      "detection",
      "anthropologist"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The hospital bought new _____ equipment, so patients no longer wait weeks for their test results.",
    "options": [
      "diagnostic",
      "single-celled",
      "glow-in-the-dark",
      "transgenic"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new drug works _____ against the virus, but it is still too expensive for many patients.",
    "options": [
      "potentially",
      "subsequently",
      "sharply",
      "effectively"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Penguins are very _____ swimmers, so they can travel long distances while using little energy.",
    "options": [
      "monogamous",
      "efficient",
      "intelligent",
      "valuable"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Koalas eat almost _____ eucalyptus leaves, so they cannot survive where those trees do not grow.",
    "options": [
      "sharply",
      "partly",
      "entirely",
      "potentially"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Some illnesses come from genes, but others are caused by _____ factors like dirty air.",
    "options": [
      "illogical",
      "environmental",
      "restrictive",
      "feral"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The mother and father penguins share the work _____, and they take turns keeping the egg warm.",
    "options": [
      "collectively",
      "socially",
      "equally",
      "sharply"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Scientists doubted the _____ of the giant squid for years, until someone finally filmed one in 2004.",
    "options": [
      "toolmaking",
      "bearing",
      "pod",
      "existence"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The way birds find their way home is _____, and scientists are still not sure how they do it.",
    "options": [
      "fascinating",
      "showy",
      "selfless",
      "indistinguishable"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The puppy _____ learned to trust the new family, and after a month it slept happily on the sofa.",
    "options": [
      "originally",
      "gradually",
      "partly",
      "inherently"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "observer": {
    "pos": "n.",
    "en_def": "a person who watches something carefully",
    "cn_def": "觀察者"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a plan or idea that is suggested",
    "cn_def": "提案；提議"
  },
  "query": {
    "pos": "n.",
    "en_def": "a question",
    "cn_def": "疑問；詢問"
  },
  "supposition": {
    "pos": "n.",
    "en_def": "an idea that is believed without proof",
    "cn_def": "推測；假定"
  },
  "subject": {
    "pos": "n.",
    "en_def": "a person or animal used in a study",
    "cn_def": "受試者；研究對象"
  },
  "fluke": {
    "pos": "n.",
    "en_def": "a lucky or unusual result that happens by chance",
    "cn_def": "僥倖；偶然"
  },
  "abnormality": {
    "pos": "n.",
    "en_def": "something that is not usual, often a health problem",
    "cn_def": "異常"
  },
  "agent": {
    "pos": "n.",
    "en_def": "something that causes an effect",
    "cn_def": "媒介；作用物"
  },
  "aggression": {
    "pos": "n.",
    "en_def": "angry or violent behaviour",
    "cn_def": "攻擊性"
  },
  "behavioural": {
    "pos": "adj.",
    "en_def": "relating to how a person or animal acts",
    "cn_def": "行為的"
  },
  "biologically": {
    "pos": "adv.",
    "en_def": "in a way relating to living things",
    "cn_def": "生物學上"
  },
  "certainty": {
    "pos": "n.",
    "en_def": "the state of being completely sure",
    "cn_def": "確定性；把握"
  },
  "commonly": {
    "pos": "adv.",
    "en_def": "usually or by many people",
    "cn_def": "普遍地；通常"
  },
  "consciousness": {
    "pos": "n.",
    "en_def": "being awake and aware of yourself",
    "cn_def": "意識"
  },
  "descriptive": {
    "pos": "adj.",
    "en_def": "describing what something is like",
    "cn_def": "描述性的"
  },
  "detection": {
    "pos": "n.",
    "en_def": "the act of finding or noticing something",
    "cn_def": "偵測；發現"
  },
  "diagnostic": {
    "pos": "adj.",
    "en_def": "used to find out what illness someone has",
    "cn_def": "診斷的"
  },
  "effectively": {
    "pos": "adv.",
    "en_def": "in a way that works well",
    "cn_def": "有效地"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or energy",
    "cn_def": "有效率的"
  },
  "entirely": {
    "pos": "adv.",
    "en_def": "completely",
    "cn_def": "完全地"
  },
  "environmental": {
    "pos": "adj.",
    "en_def": "relating to the natural world and surroundings",
    "cn_def": "環境的"
  },
  "equally": {
    "pos": "adv.",
    "en_def": "to the same degree",
    "cn_def": "同樣地；平等地"
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or alive",
    "cn_def": "存在"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "迷人的；極有趣的"
  },
  "gradually": {
    "pos": "adv.",
    "en_def": "slowly over time",
    "cn_def": "逐漸地"
  },
  "birthmark": {
    "pos": "n.",
    "en_def": "a coloured mark on the skin from birth",
    "cn_def": "胎記"
  },
  "proclivity": {
    "pos": "n.",
    "en_def": "a natural tendency to do something",
    "cn_def": "傾向；癖好"
  },
  "crispr": {
    "pos": "n.",
    "en_def": "a tool that lets scientists cut and change DNA",
    "cn_def": "基因剪刀CRISPR"
  },
  "pod": {
    "pos": "n.",
    "en_def": "a group of whales or dolphins",
    "cn_def": "（鯨豚）群"
  },
  "clutch": {
    "pos": "n.",
    "en_def": "a group of eggs laid at one time",
    "cn_def": "一窩蛋"
  },
  "hominid": {
    "pos": "n.",
    "en_def": "a member of the group including humans and great apes",
    "cn_def": "人科動物"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "beak": {
    "pos": "n.",
    "en_def": "the hard, pointed mouth of a bird",
    "cn_def": "鳥喙"
  },
  "biochemistry": {
    "pos": "n.",
    "en_def": "the study of chemical processes in living things",
    "cn_def": "生物化學"
  },
  "nucleus": {
    "pos": "n.",
    "en_def": "the centre of a cell that holds the DNA",
    "cn_def": "細胞核"
  },
  "freckle": {
    "pos": "n.",
    "en_def": "a small brown spot on the skin",
    "cn_def": "雀斑"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "termite": {
    "pos": "n.",
    "en_def": "a small insect that eats wood and lives in large groups",
    "cn_def": "白蟻"
  },
  "counterexample": {
    "pos": "n.",
    "en_def": "an example that shows a rule is not always true",
    "cn_def": "反例"
  },
  "sequencing": {
    "pos": "n.",
    "en_def": "finding the exact order of units in DNA",
    "cn_def": "定序"
  },
  "whisker": {
    "pos": "n.",
    "en_def": "one of the long stiff hairs near an animal's mouth",
    "cn_def": "鬍鬚"
  },
  "fidelity": {
    "pos": "n.",
    "en_def": "loyalty to a partner",
    "cn_def": "忠誠"
  },
  "finch": {
    "pos": "n.",
    "en_def": "a small bird with a short, strong beak",
    "cn_def": "雀鳥"
  },
  "rebuttal": {
    "pos": "n.",
    "en_def": "an answer that shows something is wrong",
    "cn_def": "反駁"
  },
  "jawbone": {
    "pos": "n.",
    "en_def": "the bone that holds the lower teeth",
    "cn_def": "顎骨"
  },
  "experimentation": {
    "pos": "n.",
    "en_def": "the process of trying new ideas in tests",
    "cn_def": "實驗"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly",
    "cn_def": "有缺陷的；故障的"
  },
  "imprecise": {
    "pos": "adj.",
    "en_def": "not exact",
    "cn_def": "不精確的"
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "surprising and not planned",
    "cn_def": "出乎意料的"
  },
  "socially": {
    "pos": "adv.",
    "en_def": "in a way that relates to living in groups",
    "cn_def": "社交上"
  },
  "partly": {
    "pos": "adv.",
    "en_def": "to some degree, but not completely",
    "cn_def": "部分地"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often",
    "cn_def": "經常"
  },
  "giraffe": {
    "pos": "n.",
    "en_def": "a tall African animal with a very long neck",
    "cn_def": "長頸鹿"
  },
  "conditioning": {
    "pos": "n.",
    "en_def": "training by linking an action with a reward or result",
    "cn_def": "制約"
  },
  "twin": {
    "pos": "n.",
    "en_def": "one of two children born at the same time to the same mother",
    "cn_def": "雙胞胎"
  },
  "collectively": {
    "pos": "adv.",
    "en_def": "as a group",
    "cn_def": "集體地"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by many people or in many places",
    "cn_def": "廣泛地"
  },
  "lookout": {
    "pos": "n.",
    "en_def": "an animal or person who watches for danger",
    "cn_def": "守望者；哨兵"
  },
  "orangutan": {
    "pos": "n.",
    "en_def": "a red-haired ape from Borneo and Sumatra",
    "cn_def": "紅毛猩猩"
  },
  "influential": {
    "pos": "adj.",
    "en_def": "having a strong effect on others",
    "cn_def": "有影響力的"
  },
  "advantageous": {
    "pos": "adj.",
    "en_def": "helpful and giving a better chance of success",
    "cn_def": "有利的"
  },
  "drug-resistant": {
    "pos": "adj.",
    "en_def": "not affected by medicines that once worked",
    "cn_def": "抗藥性的"
  },
  "inbreeding": {
    "pos": "n.",
    "en_def": "breeding between closely related animals",
    "cn_def": "近親繁殖"
  },
  "carrier": {
    "pos": "n.",
    "en_def": "a person who has a gene but does not show its effect",
    "cn_def": "帶原者；攜帶者"
  },
  "anthropologist": {
    "pos": "n.",
    "en_def": "a person who studies human societies and cultures",
    "cn_def": "人類學家"
  },
  "single-celled": {
    "pos": "adj.",
    "en_def": "made of only one cell",
    "cn_def": "單細胞的"
  },
  "glow-in-the-dark": {
    "pos": "adj.",
    "en_def": "shining in darkness",
    "cn_def": "夜光的"
  },
  "transgenic": {
    "pos": "adj.",
    "en_def": "having genes added from another species",
    "cn_def": "基因轉殖的"
  },
  "potentially": {
    "pos": "adv.",
    "en_def": "possibly in the future",
    "cn_def": "潛在地；可能"
  },
  "subsequently": {
    "pos": "adv.",
    "en_def": "after something else happened",
    "cn_def": "隨後"
  },
  "sharply": {
    "pos": "adv.",
    "en_def": "suddenly and by a large amount",
    "cn_def": "急劇地"
  },
  "monogamous": {
    "pos": "adj.",
    "en_def": "having only one partner",
    "cn_def": "一夫一妻制的"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "clever and able to learn quickly",
    "cn_def": "聰明的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important",
    "cn_def": "有價值的；寶貴的"
  },
  "illogical": {
    "pos": "adj.",
    "en_def": "not sensible or reasonable",
    "cn_def": "不合邏輯的"
  },
  "restrictive": {
    "pos": "adj.",
    "en_def": "limiting what people can do",
    "cn_def": "限制性的"
  },
  "feral": {
    "pos": "adj.",
    "en_def": "once tame but now living wild",
    "cn_def": "野化的"
  },
  "toolmaking": {
    "pos": "n.",
    "en_def": "the activity of making tools",
    "cn_def": "工具製作"
  },
  "bearing": {
    "pos": "n.",
    "en_def": "influence or connection",
    "cn_def": "關係；影響"
  },
  "showy": {
    "pos": "adj.",
    "en_def": "bright and designed to attract attention",
    "cn_def": "華麗的；引人注目的"
  },
  "selfless": {
    "pos": "adj.",
    "en_def": "caring more about others than yourself",
    "cn_def": "無私的"
  },
  "indistinguishable": {
    "pos": "adj.",
    "en_def": "impossible to tell apart",
    "cn_def": "無法區分的"
  },
  "originally": {
    "pos": "adv.",
    "en_def": "at first",
    "cn_def": "起初；原本"
  },
  "inherently": {
    "pos": "adv.",
    "en_def": "as a basic, natural part of something",
    "cn_def": "本質上；天生地"
  }
};

const EXTRA_GLOSSES = {};
