// Topic 13 Subunit 5 Quiz Data: Genetic Technology & Medicine 基因科技與醫學
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S05 - Genetic Technology & Medicine 基因科技與醫學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "CRISPR",
    "pos": "n.",
    "cn_def": "基因剪刀CRISPR",
    "en_def": "a tool that lets scientists cut and change DNA",
    "sentence": "Scientists used {{BLANK}} to remove a disease gene from mice, and the treated mice stayed healthy.",
    "cn": "科學家使用基因剪刀CRISPR從老鼠身上移除一個致病基因，而接受治療的老鼠保持健康。"
  },
  {
    "word": "gene therapy",
    "pos": "n.phr.",
    "cn_def": "基因療法",
    "en_def": "treating illness by changing a patient's genes",
    "sentence": "The boy could not see well since birth, but {{BLANK}} improved his sight, and now he can read books.",
    "cn": "這個男孩從出生起視力就不好，但基因療法改善了他的視力，現在他可以讀書了。"
  },
  {
    "word": "paternity test",
    "pos": "n.phr.",
    "cn_def": "親子鑑定",
    "en_def": "a DNA test to find out who a child's father is",
    "sentence": "The court asked for a {{BLANK}}, because the man said he was not the child's father.",
    "cn": "法院要求進行親子鑑定，因為那名男子說他不是孩子的父親。"
  },
  {
    "word": "forensic",
    "pos": "adj.",
    "cn_def": "鑑識的",
    "en_def": "using science to help solve crimes",
    "sentence": "The {{BLANK}} team found a single hair at the scene, and its DNA led them to the thief.",
    "cn": "鑑識的小組在現場發現了一根頭髮，而它的DNA帶領他們找到了小偷。"
  },
  {
    "word": "transgenic",
    "pos": "adj.",
    "cn_def": "基因轉殖的",
    "en_def": "having genes added from another species",
    "sentence": "The lab created {{BLANK}} goats that produce a useful medicine in their milk, so patients can get it more cheaply.",
    "cn": "實驗室培育出基因轉殖的山羊，牠們的奶中含有一種有用的藥物，所以病人能更便宜地取得。"
  },
  {
    "word": "designer baby",
    "pos": "n.phr.",
    "cn_def": "訂製嬰兒",
    "en_def": "a baby whose genes are chosen or changed by parents",
    "sentence": "Many people worry about the idea of a {{BLANK}}, because rich parents might choose intelligence or good looks for their children.",
    "cn": "許多人擔心訂製嬰兒的想法，因為有錢的父母可能會為孩子挑選聰明才智或好看的外表。"
  },
  {
    "word": "bioethics",
    "pos": "n.",
    "cn_def": "生命倫理學",
    "en_def": "the study of right and wrong in medicine and biology",
    "sentence": "Our class debated gene editing in a {{BLANK}} lesson, and most students felt it should only be used to cure disease.",
    "cn": "我們班在一堂生命倫理學課上辯論基因編輯，而大多數學生認為它只應該被用來治療疾病。"
  },
  {
    "word": "precision medicine",
    "pos": "n.phr.",
    "cn_def": "精準醫療",
    "en_def": "treatment planned for a person's own genes",
    "sentence": "{{BLANK}} lets doctors choose the right cancer drug for each patient, so the treatment works better and causes fewer problems.",
    "cn": "精準醫療讓醫生能為每位病人選擇合適的抗癌藥物，所以治療效果更好，產生的問題也更少。"
  },
  {
    "word": "insulin",
    "pos": "n.",
    "cn_def": "胰島素",
    "en_def": "a hormone that controls sugar in the blood",
    "sentence": "Today, bacteria are used to make human {{BLANK}}, so it is much cheaper than it was fifty years ago.",
    "cn": "今天人們利用細菌來製造人類胰島素，所以它比五十年前便宜得多。"
  },
  {
    "word": "pharmaceutical",
    "pos": "adj.",
    "cn_def": "製藥的",
    "en_def": "relating to making and selling medicines",
    "sentence": "A large {{BLANK}} company paid for the research, but the scientists promised to share their results with everyone.",
    "cn": "一家大型製藥的公司資助了這項研究，但科學家承諾會與所有人分享他們的研究結果。"
  },
  {
    "word": "clinical trial",
    "pos": "n.phr.",
    "cn_def": "臨床試驗",
    "en_def": "a test of a new treatment on volunteers",
    "sentence": "My aunt joined a {{BLANK}} for a new medicine, and the nurses checked her health every week.",
    "cn": "我阿姨參加了一項新藥的臨床試驗，而護理師每週都檢查她的健康狀況。"
  },
  {
    "word": "test tube",
    "pos": "n.phr.",
    "cn_def": "試管",
    "en_def": "a thin glass tube used in science labs",
    "sentence": "The student carefully poured the blue liquid into a {{BLANK}}, and then she added two drops of acid.",
    "cn": "那位學生小心地把藍色液體倒進試管，然後她加了兩滴酸液。"
  },
  {
    "word": "IVF",
    "pos": "n.",
    "cn_def": "試管嬰兒療程",
    "en_def": "a method of joining egg and sperm outside the body",
    "sentence": "The couple tried for years to have a baby, so they finally chose {{BLANK}}, and their daughter was born last spring.",
    "cn": "這對夫妻多年來一直想要孩子，所以他們最後選擇了試管嬰兒療程，而他們的女兒在去年春天出生。"
  },
  {
    "word": "donor",
    "pos": "n.",
    "cn_def": "捐贈者",
    "en_def": "a person who gives blood or body parts to help others",
    "sentence": "My father is a blood {{BLANK}}, and he visits the blood centre every few months to help patients.",
    "cn": "我爸爸是一位捐血者，而他每隔幾個月就會去捐血中心幫助病人。"
  },
  {
    "word": "bone marrow",
    "pos": "n.phr.",
    "cn_def": "骨髓",
    "en_def": "the soft tissue inside bones that makes blood",
    "sentence": "The girl needed new {{BLANK}}, and luckily a stranger with a matching type agreed to help her.",
    "cn": "那個女孩需要新的骨髓，幸運的是一位配型相符的陌生人同意幫助她。"
  },
  {
    "word": "biobank",
    "pos": "n.",
    "cn_def": "生物資料庫",
    "en_def": "a store of blood and DNA samples for research",
    "sentence": "Thousands of volunteers gave samples to the national {{BLANK}}, so scientists can study which genes are linked to illness.",
    "cn": "數千名志願者把樣本提供給國家生物資料庫，好讓科學家研究哪些基因和疾病有關。"
  },
  {
    "word": "de-extinction",
    "pos": "n.",
    "cn_def": "復活滅絕物種",
    "en_def": "bringing an extinct animal back to life",
    "sentence": "Some companies are working on {{BLANK}}, but critics say we should protect living animals first.",
    "cn": "有些公司正在研究復活滅絕物種，但批評者說我們應該先保護現存的動物。"
  },
  {
    "word": "gene drive",
    "pos": "n.phr.",
    "cn_def": "基因驅動",
    "en_def": "a method to spread a gene quickly through a population",
    "sentence": "Scientists hope a {{BLANK}} could stop mosquitoes from carrying malaria, but releasing them into the wild is risky.",
    "cn": "科學家希望基因驅動能阻止蚊子傳播瘧疾，但把牠們釋放到野外是有風險的。"
  },
  {
    "word": "pest-resistant",
    "pos": "adj.",
    "cn_def": "抗蟲害的",
    "en_def": "not easily damaged by insects",
    "sentence": "The farmer planted a {{BLANK}} type of corn, so he did not need to spray as many chemicals.",
    "cn": "那位農夫種了一種抗蟲害的玉米，所以他不需要噴灑那麼多化學藥劑。"
  },
  {
    "word": "golden rice",
    "pos": "n.phr.",
    "cn_def": "黃金米",
    "en_def": "rice changed to contain more vitamin A",
    "sentence": "{{BLANK}} was created to help poor children get vitamin A, but some groups still oppose it.",
    "cn": "黃金米是為了幫助貧窮兒童獲得維生素A而研發的，但有些團體仍然反對它。"
  },
  {
    "word": "fluorescent",
    "pos": "adj.",
    "cn_def": "螢光的",
    "en_def": "giving off bright light under special lamps",
    "sentence": "Scientists added a jellyfish gene to the fish, and now they look {{BLANK}} green under blue light.",
    "cn": "科學家把一個水母基因加進魚的體內，而現在牠們在藍光下看起來是螢光的綠色。"
  },
  {
    "word": "glow-in-the-dark",
    "pos": "adj.",
    "cn_def": "夜光的",
    "en_def": "shining in darkness",
    "sentence": "My little brother loves his {{BLANK}} stickers, and he puts them on his ceiling so he can see stars at night.",
    "cn": "我弟弟很喜歡他的夜光的貼紙，而他把它們貼在天花板上，這樣晚上就能看到星星。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "medical care for an illness or injury",
    "sentence": "The new {{BLANK}} is expensive, but the government will pay for it because it can save many lives.",
    "cn": "這種新治療很昂貴，但政府會支付費用，因為它能拯救許多生命。"
  },
  {
    "word": "spit",
    "pos": "v.",
    "cn_def": "吐（口水）",
    "en_def": "to force liquid out of your mouth",
    "sentence": "For the ancestry kit, I {{BLANK}} into a small tube, and a month later I got a report about my family's roots.",
    "cn": "為了做祖源檢測組，我吐口水到一根小管子裡，一個月後我收到了一份關於我家族根源的報告。",
    "answer": "spat",
    "alts": [
      "spit"
    ]
  },
  {
    "word": "kit",
    "pos": "n.",
    "cn_def": "套組；工具包",
    "en_def": "a set of things packed together for a task",
    "sentence": "You can buy a DNA testing {{BLANK}} online, but experts say the health results are not always accurate.",
    "cn": "你可以在網路上買到DNA檢測套組，但專家說健康方面的結果不一定準確。"
  },
  {
    "word": "biomedical",
    "pos": "adj.",
    "cn_def": "生物醫學的",
    "en_def": "relating to biology and medicine",
    "sentence": "Taiwan has invested heavily in {{BLANK}} research, and many young scientists now work on new cancer treatments.",
    "cn": "台灣大量投資於生物醫學的研究，現在許多年輕科學家致力於新的癌症治療。"
  }
];

const MCQS = [
  {
    "q": "Scientists used _____ to remove a disease gene from mice, and the treated mice stayed healthy.",
    "options": [
      "finch",
      "CRISPR",
      "genetics",
      "essence"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The boy could not see well since birth, but _____ improved his sight, and now he can read books.",
    "options": [
      "alpha male",
      "convergent evolution",
      "a chip off the old block",
      "gene therapy"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The court asked for a _____, because the man said he was not the child's father.",
    "options": [
      "paternity test",
      "convergent evolution",
      "missing link",
      "pair bond"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The _____ team found a single hair at the scene, and its DNA led them to the thief.",
    "options": [
      "well-documented",
      "showy",
      "forensic",
      "predetermined"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The lab created _____ goats that produce a useful medicine in their milk, so patients can get it more cheaply.",
    "options": [
      "faulty",
      "transgenic",
      "irrelevant",
      "risky"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Many people worry about the idea of a _____, because rich parents might choose intelligence or good looks for their children.",
    "options": [
      "designer baby",
      "the lion's share",
      "pair bond",
      "pecking order"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our class debated gene editing in a _____ lesson, and most students felt it should only be used to cure disease.",
    "options": [
      "serendipity",
      "archetype",
      "bioethics",
      "anthropologist"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "_____ lets doctors choose the right cancer drug for each patient, so the treatment works better and causes fewer problems.",
    "options": [
      "birth defect",
      "body language",
      "early humans",
      "precision medicine"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Today, bacteria are used to make human _____, so it is much cheaper than it was fifty years ago.",
    "options": [
      "mutation",
      "insulin",
      "derivative",
      "biologist"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "A large _____ company paid for the research, but the scientists promised to share their results with everyone.",
    "options": [
      "deficient",
      "recessive",
      "pharmaceutical",
      "unreliable"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My aunt joined a _____ for a new medicine, and the nurses checked her health every week.",
    "options": [
      "petri dish",
      "pair bond",
      "common ancestor",
      "clinical trial"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The student carefully poured the blue liquid into a _____, and then she added two drops of acid.",
    "options": [
      "test tube",
      "early humans",
      "worker ant",
      "tool use"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The couple tried for years to have a baby, so they finally chose _____, and their daughter was born last spring.",
    "options": [
      "RNA",
      "query",
      "organ",
      "IVF"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "My father is a blood _____, and he visits the blood centre every few months to help patients.",
    "options": [
      "misunderstanding",
      "posture",
      "donor",
      "sibling"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The girl needed new _____, and luckily a stranger with a matching type agreed to help her.",
    "options": [
      "alarm call",
      "bone marrow",
      "arms race",
      "peppered moth"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Thousands of volunteers gave samples to the national _____, so scientists can study which genes are linked to illness.",
    "options": [
      "biobank",
      "narrative",
      "rebuttal",
      "courtship"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Some companies are working on _____, but critics say we should protect living animals first.",
    "options": [
      "orangutan",
      "sequencing",
      "de-extinction",
      "variant"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Scientists hope a _____ could stop mosquitoes from carrying malaria, but releasing them into the wild is risky.",
    "options": [
      "opposable thumb",
      "gene drive",
      "pair bond",
      "division of labour"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The farmer planted a _____ type of corn, so he did not need to spray as many chemicals.",
    "options": [
      "pest-resistant",
      "suitable",
      "alert",
      "problematic"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "_____ was created to help poor children get vitamin A, but some groups still oppose it.",
    "options": [
      "queen bee",
      "a chip off the old block",
      "natural selection",
      "golden rice"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Scientists added a jellyfish gene to the fish, and now they look _____ green under blue light.",
    "options": [
      "circumstantial",
      "placid",
      "fluorescent",
      "homing"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "My little brother loves his _____ stickers, and he puts them on his ceiling so he can see stars at night.",
    "options": [
      "glow-in-the-dark",
      "behavioural",
      "conditional",
      "selfless"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The new _____ is expensive, but the government will pay for it because it can save many lives.",
    "options": [
      "grooming",
      "treatment",
      "chick",
      "Neanderthal"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "For the ancestry kit, I _____ into a small tube, and a month later I got a report about my family's roots.",
    "options": [
      "wag",
      "relate",
      "interbreed",
      "spat"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "You can buy a DNA testing _____ online, but experts say the health results are not always accurate.",
    "options": [
      "subset",
      "kit",
      "ethology",
      "geneticist"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Taiwan has invested heavily in _____ research, and many young scientists now work on new cancer treatments.",
    "options": [
      "behavioural",
      "supportive",
      "biomedical",
      "observant"
    ],
    "answer": 2,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "crispr": {
    "pos": "n.",
    "en_def": "a tool that lets scientists cut and change DNA",
    "cn_def": "基因剪刀CRISPR"
  },
  "gene therapy": {
    "pos": "n.phr.",
    "en_def": "treating illness by changing a patient's genes",
    "cn_def": "基因療法"
  },
  "paternity test": {
    "pos": "n.phr.",
    "en_def": "a DNA test to find out who a child's father is",
    "cn_def": "親子鑑定"
  },
  "forensic": {
    "pos": "adj.",
    "en_def": "using science to help solve crimes",
    "cn_def": "鑑識的"
  },
  "transgenic": {
    "pos": "adj.",
    "en_def": "having genes added from another species",
    "cn_def": "基因轉殖的"
  },
  "designer baby": {
    "pos": "n.phr.",
    "en_def": "a baby whose genes are chosen or changed by parents",
    "cn_def": "訂製嬰兒"
  },
  "bioethics": {
    "pos": "n.",
    "en_def": "the study of right and wrong in medicine and biology",
    "cn_def": "生命倫理學"
  },
  "precision medicine": {
    "pos": "n.phr.",
    "en_def": "treatment planned for a person's own genes",
    "cn_def": "精準醫療"
  },
  "insulin": {
    "pos": "n.",
    "en_def": "a hormone that controls sugar in the blood",
    "cn_def": "胰島素"
  },
  "pharmaceutical": {
    "pos": "adj.",
    "en_def": "relating to making and selling medicines",
    "cn_def": "製藥的"
  },
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "test tube": {
    "pos": "n.phr.",
    "en_def": "a thin glass tube used in science labs",
    "cn_def": "試管"
  },
  "ivf": {
    "pos": "n.",
    "en_def": "a method of joining egg and sperm outside the body",
    "cn_def": "試管嬰兒療程"
  },
  "donor": {
    "pos": "n.",
    "en_def": "a person who gives blood or body parts to help others",
    "cn_def": "捐贈者"
  },
  "bone marrow": {
    "pos": "n.phr.",
    "en_def": "the soft tissue inside bones that makes blood",
    "cn_def": "骨髓"
  },
  "biobank": {
    "pos": "n.",
    "en_def": "a store of blood and DNA samples for research",
    "cn_def": "生物資料庫"
  },
  "de-extinction": {
    "pos": "n.",
    "en_def": "bringing an extinct animal back to life",
    "cn_def": "復活滅絕物種"
  },
  "gene drive": {
    "pos": "n.phr.",
    "en_def": "a method to spread a gene quickly through a population",
    "cn_def": "基因驅動"
  },
  "pest-resistant": {
    "pos": "adj.",
    "en_def": "not easily damaged by insects",
    "cn_def": "抗蟲害的"
  },
  "golden rice": {
    "pos": "n.phr.",
    "en_def": "rice changed to contain more vitamin A",
    "cn_def": "黃金米"
  },
  "fluorescent": {
    "pos": "adj.",
    "en_def": "giving off bright light under special lamps",
    "cn_def": "螢光的"
  },
  "glow-in-the-dark": {
    "pos": "adj.",
    "en_def": "shining in darkness",
    "cn_def": "夜光的"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care for an illness or injury",
    "cn_def": "治療"
  },
  "spit": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "spat": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of things packed together for a task",
    "cn_def": "套組；工具包"
  },
  "biomedical": {
    "pos": "adj.",
    "en_def": "relating to biology and medicine",
    "cn_def": "生物醫學的"
  },
  "finch": {
    "pos": "n.",
    "en_def": "a small bird with a short, strong beak",
    "cn_def": "雀鳥"
  },
  "genetics": {
    "pos": "n.",
    "en_def": "the science of how features pass from parents to children",
    "cn_def": "遺傳學"
  },
  "essence": {
    "pos": "n.",
    "en_def": "the most important basic quality of something",
    "cn_def": "本質；精髓"
  },
  "alpha male": {
    "pos": "n.phr.",
    "en_def": "the most powerful male in a group",
    "cn_def": "首領雄性"
  },
  "convergent evolution": {
    "pos": "n.phr.",
    "en_def": "when unrelated animals develop similar features",
    "cn_def": "趨同演化"
  },
  "a chip off the old block": {
    "pos": "n.phr.",
    "en_def": "a person who is very similar to a parent",
    "cn_def": "酷似父母的孩子"
  },
  "missing link": {
    "pos": "n.phr.",
    "en_def": "a fossil that connects two groups of living things",
    "cn_def": "缺失的環節"
  },
  "pair bond": {
    "pos": "n.phr.",
    "en_def": "a strong long-term link between two partners",
    "cn_def": "配偶關係"
  },
  "well-documented": {
    "pos": "adj.",
    "en_def": "recorded clearly in many reports",
    "cn_def": "有充分記錄的"
  },
  "showy": {
    "pos": "adj.",
    "en_def": "bright and designed to attract attention",
    "cn_def": "華麗的；引人注目的"
  },
  "predetermined": {
    "pos": "adj.",
    "en_def": "decided in advance",
    "cn_def": "預先決定的"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly",
    "cn_def": "有缺陷的；故障的"
  },
  "irrelevant": {
    "pos": "adj.",
    "en_def": "not connected to the subject",
    "cn_def": "無關的"
  },
  "risky": {
    "pos": "adj.",
    "en_def": "possibly dangerous",
    "cn_def": "有風險的"
  },
  "the lion's share": {
    "pos": "n.phr.",
    "en_def": "the largest part of something",
    "cn_def": "最大的一份"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "serendipity": {
    "pos": "n.",
    "en_def": "finding something good by chance",
    "cn_def": "意外的好運；機緣巧合"
  },
  "archetype": {
    "pos": "n.",
    "en_def": "a perfect typical example of something",
    "cn_def": "典型；原型"
  },
  "anthropologist": {
    "pos": "n.",
    "en_def": "a person who studies human societies and cultures",
    "cn_def": "人類學家"
  },
  "birth defect": {
    "pos": "n.phr.",
    "en_def": "a health problem that a baby is born with",
    "cn_def": "先天缺陷"
  },
  "body language": {
    "pos": "n.phr.",
    "en_def": "messages sent by the way you move or stand",
    "cn_def": "肢體語言"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "mutation": {
    "pos": "n.",
    "en_def": "a change in a gene",
    "cn_def": "突變"
  },
  "derivative": {
    "pos": "n.",
    "en_def": "something developed from something else",
    "cn_def": "衍生物"
  },
  "biologist": {
    "pos": "n.",
    "en_def": "a scientist who studies living things",
    "cn_def": "生物學家"
  },
  "deficient": {
    "pos": "adj.",
    "en_def": "not having enough of something",
    "cn_def": "缺乏的"
  },
  "recessive": {
    "pos": "adj.",
    "en_def": "only shown when a child gets the same gene from both parents",
    "cn_def": "隱性的"
  },
  "unreliable": {
    "pos": "adj.",
    "en_def": "not able to be trusted",
    "cn_def": "不可靠的"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "common ancestor": {
    "pos": "n.phr.",
    "en_def": "an earlier species that two later species both came from",
    "cn_def": "共同祖先"
  },
  "worker ant": {
    "pos": "n.phr.",
    "en_def": "an ant that collects food and builds the nest",
    "cn_def": "工蟻"
  },
  "tool use": {
    "pos": "n.phr.",
    "en_def": "using objects to help get food or do tasks",
    "cn_def": "工具使用"
  },
  "rna": {
    "pos": "n.",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "cn_def": "核糖核酸"
  },
  "query": {
    "pos": "n.",
    "en_def": "a question",
    "cn_def": "疑問；詢問"
  },
  "organ": {
    "pos": "n.",
    "en_def": "a body part such as the heart that does a special job",
    "cn_def": "器官"
  },
  "misunderstanding": {
    "pos": "n.",
    "en_def": "a failure to understand correctly",
    "cn_def": "誤會；誤解"
  },
  "posture": {
    "pos": "n.",
    "en_def": "the way you hold your body",
    "cn_def": "姿勢"
  },
  "sibling": {
    "pos": "n.",
    "en_def": "a brother or sister",
    "cn_def": "兄弟姊妹"
  },
  "alarm call": {
    "pos": "n.phr.",
    "en_def": "a sound an animal makes to warn others of danger",
    "cn_def": "警戒叫聲"
  },
  "arms race": {
    "pos": "n.phr.",
    "en_def": "a contest where each side keeps improving to beat the other",
    "cn_def": "軍備競賽"
  },
  "peppered moth": {
    "pos": "n.phr.",
    "en_def": "a moth that changed colour when cities became sooty",
    "cn_def": "樺尺蛾"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or explanation of events",
    "cn_def": "敘事；說法"
  },
  "rebuttal": {
    "pos": "n.",
    "en_def": "an answer that shows something is wrong",
    "cn_def": "反駁"
  },
  "courtship": {
    "pos": "n.",
    "en_def": "actions an animal uses to attract a partner",
    "cn_def": "求偶"
  },
  "orangutan": {
    "pos": "n.",
    "en_def": "a red-haired ape from Borneo and Sumatra",
    "cn_def": "紅毛猩猩"
  },
  "sequencing": {
    "pos": "n.",
    "en_def": "finding the exact order of units in DNA",
    "cn_def": "定序"
  },
  "variant": {
    "pos": "n.",
    "en_def": "a form of something that is slightly different",
    "cn_def": "變種；變體"
  },
  "opposable thumb": {
    "pos": "n.phr.",
    "en_def": "a thumb that can touch the other fingers",
    "cn_def": "可對握的拇指"
  },
  "division of labour": {
    "pos": "n.phr.",
    "en_def": "splitting work so each member does a different job",
    "cn_def": "分工"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right for a purpose",
    "cn_def": "合適的"
  },
  "alert": {
    "pos": "adj.",
    "en_def": "quick to notice danger",
    "cn_def": "警覺的"
  },
  "problematic": {
    "pos": "adj.",
    "en_def": "full of difficulties",
    "cn_def": "有問題的；棘手的"
  },
  "queen bee": {
    "pos": "n.phr.",
    "en_def": "the only female bee in a hive that lays eggs",
    "cn_def": "蜂后"
  },
  "natural selection": {
    "pos": "n.phr.",
    "en_def": "process where living things best suited to their surroundings survive",
    "cn_def": "天擇"
  },
  "circumstantial": {
    "pos": "adj.",
    "en_def": "suggesting something but not proving it directly",
    "cn_def": "間接的；旁證的"
  },
  "placid": {
    "pos": "adj.",
    "en_def": "calm and not easily upset",
    "cn_def": "平靜的；溫和的"
  },
  "homing": {
    "pos": "adj.",
    "en_def": "able to find the way home from far away",
    "cn_def": "歸巢的"
  },
  "behavioural": {
    "pos": "adj.",
    "en_def": "relating to how a person or animal acts",
    "cn_def": "行為的"
  },
  "conditional": {
    "pos": "adj.",
    "en_def": "depending on something else happening",
    "cn_def": "有條件的"
  },
  "selfless": {
    "pos": "adj.",
    "en_def": "caring more about others than yourself",
    "cn_def": "無私的"
  },
  "grooming": {
    "pos": "n.",
    "en_def": "cleaning another animal's fur",
    "cn_def": "理毛"
  },
  "chick": {
    "pos": "n.",
    "en_def": "a baby bird",
    "cn_def": "雛鳥；小雞"
  },
  "neanderthal": {
    "pos": "n.",
    "en_def": "an early human who lived in Europe and Asia",
    "cn_def": "尼安德塔人"
  },
  "wag": {
    "pos": "v.",
    "en_def": "to move quickly from side to side",
    "cn_def": "搖動（尾巴）"
  },
  "relate": {
    "pos": "v.",
    "en_def": "to find or show a connection",
    "cn_def": "有關聯；與…相關"
  },
  "interbreed": {
    "pos": "v.",
    "en_def": "to produce young with a different group or species",
    "cn_def": "雜交繁殖"
  },
  "subset": {
    "pos": "n.",
    "en_def": "a smaller group within a larger group",
    "cn_def": "子集；一部分"
  },
  "ethology": {
    "pos": "n.",
    "en_def": "the scientific study of animal behaviour",
    "cn_def": "動物行為學"
  },
  "geneticist": {
    "pos": "n.",
    "en_def": "a scientist who studies genes",
    "cn_def": "遺傳學家"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的"
  },
  "observant": {
    "pos": "adj.",
    "en_def": "good at noticing things",
    "cn_def": "觀察力敏銳的"
  }
};

const EXTRA_GLOSSES = {};
