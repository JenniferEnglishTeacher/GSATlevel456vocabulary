// Topic 13 Subunit 3 Quiz Data: Cells, DNA & Genes 細胞、DNA與基因
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S03 - Cells, DNA & Genes 細胞、DNA與基因",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cell",
    "pos": "n.",
    "cn_def": "細胞",
    "en_def": "the smallest living unit of a plant or animal",
    "sentence": "Every {{BLANK}} in your body contains instructions, and these instructions tell it whether to become skin, bone or blood.",
    "cn": "你身體裡的每一個細胞都含有指令，而這些指令告訴它要變成皮膚、骨頭還是血液。"
  },
  {
    "word": "nucleus",
    "pos": "n.",
    "cn_def": "細胞核",
    "en_def": "the centre of a cell that holds the DNA",
    "sentence": "We looked at onion cells under the microscope, and we could see a dark {{BLANK}} in the middle of each one.",
    "cn": "我們在顯微鏡下觀察洋蔥細胞，並能看見每個細胞中間都有一個深色的細胞核。"
  },
  {
    "word": "chromosome",
    "pos": "n.",
    "cn_def": "染色體",
    "en_def": "a thread-like structure in a cell that carries genes",
    "sentence": "Humans normally have 46 {{BLANK}} in each cell, and we receive half from our mother and half from our father.",
    "cn": "人類每個細胞通常有46條染色體，我們一半來自母親，一半來自父親。"
  },
  {
    "word": "gene",
    "pos": "n.",
    "cn_def": "基因",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "sentence": "Scientists found a {{BLANK}} that affects how tall people grow, but food and sleep also play an important role.",
    "cn": "科學家發現了一個會影響人們長多高的基因，但食物和睡眠也扮演重要的角色。"
  },
  {
    "word": "double helix",
    "pos": "n.phr.",
    "cn_def": "雙螺旋",
    "en_def": "the twisted ladder shape of DNA",
    "sentence": "Our class built a model of DNA with sweets and sticks, and it twisted into a {{BLANK}} just like the real thing.",
    "cn": "我們班用糖果和小棍子做了一個DNA模型，而它扭成了一個像真的一樣的雙螺旋。"
  },
  {
    "word": "base pair",
    "pos": "n.phr.",
    "cn_def": "鹼基對",
    "en_def": "two matching chemical units that form a step in DNA",
    "sentence": "Human DNA has about three billion {{BLANK}}, so reading the whole code took scientists many years.",
    "cn": "人類DNA大約有三十億個鹼基對，所以科學家花了許多年才讀完整個密碼。"
  },
  {
    "word": "molecule",
    "pos": "n.",
    "cn_def": "分子",
    "en_def": "the smallest unit of a substance made of atoms",
    "sentence": "DNA is a very long {{BLANK}}, but it is folded so tightly that it fits inside a tiny cell.",
    "cn": "DNA是一個非常長的分子，但它摺疊得非常緊密，所以能放進微小的細胞裡。"
  },
  {
    "word": "enzyme",
    "pos": "n.",
    "cn_def": "酵素",
    "en_def": "a substance in the body that speeds up chemical changes",
    "sentence": "Our saliva contains an {{BLANK}} that starts breaking down rice, so bread tastes sweeter if you chew it for a long time.",
    "cn": "我們的唾液含有一種會開始分解米飯的酵素，所以麵包嚼久了吃起來會比較甜。"
  },
  {
    "word": "cell division",
    "pos": "n.phr.",
    "cn_def": "細胞分裂",
    "en_def": "the process in which one cell splits into two",
    "sentence": "A cut on your finger heals quickly, because {{BLANK}} makes new skin cells to fill the gap.",
    "cn": "你手指上的傷口很快就會癒合，因為細胞分裂會產生新的皮膚細胞來填補缺口。"
  },
  {
    "word": "membrane",
    "pos": "n.",
    "cn_def": "薄膜",
    "en_def": "a thin layer that covers a cell",
    "sentence": "The cell {{BLANK}} works like a gate, and it decides which substances can enter or leave the cell.",
    "cn": "細胞薄膜就像一扇門，而它決定哪些物質可以進出細胞。"
  },
  {
    "word": "mitochondria",
    "pos": "n.",
    "cn_def": "粒線體",
    "en_def": "parts of a cell that make energy",
    "sentence": "Muscle cells contain many {{BLANK}}, because they need a lot of energy when we run or lift things.",
    "cn": "肌肉細胞含有許多粒線體，因為我們跑步或舉東西時它們需要大量能量。"
  },
  {
    "word": "RNA",
    "pos": "n.",
    "cn_def": "核糖核酸",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "sentence": "Some vaccines use {{BLANK}} to teach the body how to fight a virus, and this new method was developed very quickly.",
    "cn": "有些疫苗利用核糖核酸教導身體如何對抗病毒，而這種新方法發展得非常快。"
  },
  {
    "word": "sequencing",
    "pos": "n.",
    "cn_def": "定序",
    "en_def": "finding the exact order of units in DNA",
    "sentence": "DNA {{BLANK}} used to cost millions of dollars, but now a person's whole genome can be read for a few hundred.",
    "cn": "DNA定序過去要花數百萬美元，但現在一個人的全基因組只要幾百美元就能讀取。"
  },
  {
    "word": "amino acid",
    "pos": "n.phr.",
    "cn_def": "胺基酸",
    "en_def": "a small unit that joins with others to build proteins",
    "sentence": "Meat, beans and eggs give us every {{BLANK}} we need, so vegetarians must choose their food carefully.",
    "cn": "肉類、豆類和蛋提供我們所需的每一種胺基酸，所以素食者必須小心選擇食物。"
  },
  {
    "word": "egg cell",
    "pos": "n.phr.",
    "cn_def": "卵細胞",
    "en_def": "the female cell that can grow into a baby",
    "sentence": "An {{BLANK}} is one of the largest cells in the human body, and you can almost see it without a microscope.",
    "cn": "卵細胞是人體中最大的細胞之一，而你幾乎不用顯微鏡就能看見它。"
  },
  {
    "word": "fertilisation",
    "pos": "n.",
    "cn_def": "受精",
    "en_def": "when male and female cells join to start new life",
    "sentence": "Frogs lay their eggs in the water of ponds, and {{BLANK}} happens outside the mother's body there.",
    "cn": "青蛙把卵產在池塘的水中，而受精就在那裡、在母體之外發生。"
  },
  {
    "word": "embryo",
    "pos": "n.",
    "cn_def": "胚胎",
    "en_def": "an animal or human in the very early stage of growth",
    "sentence": "The chicken {{BLANK}} grows inside the egg for about three weeks, and then the chick breaks the shell.",
    "cn": "雞的胚胎在蛋裡生長大約三週，然後小雞就會啄破蛋殼。"
  },
  {
    "word": "stem cell",
    "pos": "n.phr.",
    "cn_def": "幹細胞",
    "en_def": "a basic cell that can become many types of cell",
    "sentence": "Doctors hope that {{BLANK}} can repair damaged hearts, but more research is needed before this treatment is safe.",
    "cn": "醫生希望幹細胞能修復受損的心臟，但在這種治療安全之前還需要更多研究。"
  },
  {
    "word": "tissue",
    "pos": "n.",
    "cn_def": "組織",
    "en_def": "a group of similar cells that work together",
    "sentence": "The scientist took a small piece of {{BLANK}} from the leaf, and she studied the cells under a microscope.",
    "cn": "科學家從葉子上取下一小片組織，並在顯微鏡下研究那些細胞。"
  },
  {
    "word": "organ",
    "pos": "n.",
    "cn_def": "器官",
    "en_def": "a body part such as the heart that does a special job",
    "sentence": "The skin is actually the largest {{BLANK}} of the human body, and it protects us from germs and heat.",
    "cn": "皮膚其實是人體最大的器官，而它保護我們免受細菌和高溫的傷害。"
  },
  {
    "word": "microbe",
    "pos": "n.",
    "cn_def": "微生物；細菌",
    "en_def": "a tiny living thing such as a bacterium",
    "sentence": "Yoghurt contains many friendly {{BLANK}}, and they help our stomachs digest the food we eat more easily.",
    "cn": "優格含有許多有益的微生物，而它們幫助我們的胃更容易消化我們吃下的食物。"
  },
  {
    "word": "biochemistry",
    "pos": "n.",
    "cn_def": "生物化學",
    "en_def": "the study of chemical processes in living things",
    "sentence": "She enjoyed both biology and chemistry at school, so she decided to study {{BLANK}} at university.",
    "cn": "她在學校時喜歡生物和化學兩科，所以她決定在大學主修生物化學。"
  },
  {
    "word": "geneticist",
    "pos": "n.",
    "cn_def": "遺傳學家",
    "en_def": "a scientist who studies genes",
    "sentence": "The {{BLANK}} explained the results to the family, and she said the baby's condition was not passed down from the parents.",
    "cn": "遺傳學家向這家人解釋了結果，並說寶寶的狀況並不是從父母遺傳下來的。"
  },
  {
    "word": "genetics",
    "pos": "n.",
    "cn_def": "遺傳學",
    "en_def": "the science of how features pass from parents to children",
    "sentence": "We studied {{BLANK}} this term, and now I understand why I have curly hair like my grandfather.",
    "cn": "我們這學期學了遺傳學，現在我明白為什麼我會像祖父一樣有一頭捲髮。"
  },
  {
    "word": "petri dish",
    "pos": "n.phr.",
    "cn_def": "培養皿",
    "en_def": "a small round dish used to grow germs in a lab",
    "sentence": "We put a little bread in a {{BLANK}}, and after a week a green mould had covered it.",
    "cn": "我們在培養皿裡放了一點麵包，而一週後綠色的黴菌已經把它覆蓋了。"
  },
  {
    "word": "saliva",
    "pos": "n.",
    "cn_def": "唾液",
    "en_def": "the liquid in your mouth",
    "sentence": "The test only needs a little {{BLANK}}, so you just spit into a small tube and send it to the lab.",
    "cn": "這項檢測只需要一點點唾液，所以你只要吐進一根小管子裡然後寄到實驗室。"
  },
  {
    "word": "cheek swab",
    "pos": "n.phr.",
    "cn_def": "口腔拭子",
    "en_def": "a cotton stick rubbed inside the mouth to collect cells",
    "sentence": "The police took a {{BLANK}} from each worker, because they wanted to compare their DNA with the evidence.",
    "cn": "警方從每位員工身上採集了口腔拭子，因為他們想把他們的DNA和證據作比對。"
  },
  {
    "word": "decode",
    "pos": "v.",
    "cn_def": "解碼；破譯",
    "en_def": "to find the meaning of a code",
    "sentence": "Scientists worked for thirteen years to {{BLANK}} the human genome, and they finally finished the project in 2003.",
    "cn": "科學家努力了十三年來解碼人類基因組，並終於在2003年完成這項計畫。"
  },
  {
    "word": "twin",
    "pos": "n.",
    "cn_def": "雙胞胎",
    "en_def": "one of two children born at the same time to the same mother",
    "sentence": "My friend is a {{BLANK}}, and even our teachers cannot tell her and her sister apart.",
    "cn": "我的朋友是雙胞胎之一，連我們的老師都分不出她和她的姐妹。"
  },
  {
    "word": "cellular",
    "pos": "adj.",
    "cn_def": "細胞的",
    "en_def": "relating to cells",
    "sentence": "Smoking causes damage at a {{BLANK}} level, so the harm starts long before a person notices any illness.",
    "cn": "吸菸會在細胞的層面造成傷害，所以傷害早在一個人察覺任何疾病之前就開始了。"
  },
  {
    "word": "fruit fly",
    "pos": "n.phr.",
    "cn_def": "果蠅",
    "en_def": "a tiny fly often used in genetics experiments",
    "sentence": "Scientists often study the {{BLANK}}, because it breeds very quickly and shares many genes with humans.",
    "cn": "科學家常常研究果蠅，因為牠繁殖得非常快，而且和人類有許多共同的基因。"
  },
  {
    "word": "lab rat",
    "pos": "n.phr.",
    "cn_def": "實驗鼠",
    "en_def": "a rat used for scientific experiments",
    "sentence": "The new medicine was first tested on a {{BLANK}}, but it must also be tested on human volunteers before it is sold.",
    "cn": "這種新藥先在實驗鼠身上做了測試，但在販售之前也必須在人類志願者身上測試。"
  }
];

const MCQS = [
  {
    "q": "Every _____ in your body contains instructions, and these instructions tell it whether to become skin, bone or blood.",
    "options": [
      "courtship",
      "cell",
      "fluke",
      "anthropomorphism"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "We looked at onion cells under the microscope, and we could see a dark _____ in the middle of each one.",
    "options": [
      "nucleus",
      "essence",
      "ethologist",
      "lookout"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Humans normally have 46 _____ in each cell, and we receive half from our mother and half from our father.",
    "options": [
      "treatment",
      "fluke",
      "chromosome",
      "inheritance"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Scientists found a _____ that affects how tall people grow, but food and sleep also play an important role.",
    "options": [
      "dimple",
      "narrative",
      "taxonomy",
      "gene"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our class built a model of DNA with sweets and sticks, and it twisted into a _____ just like the real thing.",
    "options": [
      "bone marrow",
      "double helix",
      "early humans",
      "pair bond"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Human DNA has about three billion _____, so reading the whole code took scientists many years.",
    "options": [
      "great ape",
      "body hair",
      "base pair",
      "precision medicine"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "DNA is a very long _____, but it is folded so tightly that it fits inside a tiny cell.",
    "options": [
      "counterexample",
      "de-extinction",
      "microorganism",
      "molecule"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our saliva contains an _____ that starts breaking down rice, so bread tastes sweeter if you chew it for a long time.",
    "options": [
      "enzyme",
      "chick",
      "coevolution",
      "exception"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "A cut on your finger heals quickly, because _____ makes new skin cells to fill the gap.",
    "options": [
      "natural selection",
      "mirror test",
      "common ancestor",
      "cell division"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The cell _____ works like a gate, and it decides which substances can enter or leave the cell.",
    "options": [
      "peacock",
      "mutation",
      "membrane",
      "continuum"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Muscle cells contain many _____, because they need a lot of energy when we run or lift things.",
    "options": [
      "mitochondria",
      "jawbone",
      "anthropology",
      "brood"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Some vaccines use _____ to teach the body how to fight a virus, and this new method was developed very quickly.",
    "options": [
      "subset",
      "RNA",
      "de-extinction",
      "serendipity"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "DNA _____ used to cost millions of dollars, but now a person's whole genome can be read for a few hundred.",
    "options": [
      "variant",
      "antenna",
      "sequencing",
      "plumage"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Meat, beans and eggs give us every _____ we need, so vegetarians must choose their food carefully.",
    "options": [
      "amino acid",
      "Homo sapiens",
      "gene therapy",
      "warning colours"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "An _____ is one of the largest cells in the human body, and you can almost see it without a microscope.",
    "options": [
      "learned behaviour",
      "egg cell",
      "selection pressure",
      "body language"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Frogs lay their eggs in the water of ponds, and _____ happens outside the mother's body there.",
    "options": [
      "analysis",
      "phenotype",
      "grooming",
      "fertilisation"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The chicken _____ grows inside the egg for about three weeks, and then the chick breaks the shell.",
    "options": [
      "superbug",
      "embryo",
      "chick",
      "birdsong"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Doctors hope that _____ can repair damaged hearts, but more research is needed before this treatment is safe.",
    "options": [
      "blood type",
      "vampire bat",
      "stem cell",
      "clinical trial"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The scientist took a small piece of _____ from the leaf, and she studied the cells under a microscope.",
    "options": [
      "tissue",
      "inquiry",
      "observer",
      "bioethics"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The skin is actually the largest _____ of the human body, and it protects us from germs and heat.",
    "options": [
      "fidelity",
      "naturalist",
      "counterexample",
      "organ"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Yoghurt contains many friendly _____, and they help our stomachs digest the food we eat more easily.",
    "options": [
      "evolution",
      "microbe",
      "freeloader",
      "birdsong"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "She enjoyed both biology and chemistry at school, so she decided to study _____ at university.",
    "options": [
      "fluke",
      "inclusion",
      "biochemistry",
      "analysis"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The _____ explained the results to the family, and she said the baby's condition was not passed down from the parents.",
    "options": [
      "geneticist",
      "epigenetics",
      "birthmark",
      "dimple"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "We studied _____ this term, and now I understand why I have curly hair like my grandfather.",
    "options": [
      "inquiry",
      "whisker",
      "hive",
      "genetics"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "We put a little bread in a _____, and after a week a green mould had covered it.",
    "options": [
      "kin selection",
      "alarm call",
      "petri dish",
      "golden rice"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The test only needs a little _____, so you just spit into a small tube and send it to the lab.",
    "options": [
      "treatment",
      "saliva",
      "evolution",
      "derivative"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The police took a _____ from each worker, because they wanted to compare their DNA with the evidence.",
    "options": [
      "vampire bat",
      "survival of the fittest",
      "bone marrow",
      "cheek swab"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Scientists worked for thirteen years to _____ the human genome, and they finally finished the project in 2003.",
    "options": [
      "decode",
      "infest",
      "crossbreed",
      "construe"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "My friend is a _____, and even our teachers cannot tell her and her sister apart.",
    "options": [
      "aggression",
      "toolmaking",
      "twin",
      "reflex"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Smoking causes damage at a _____ level, so the harm starts long before a person notices any illness.",
    "options": [
      "intelligent",
      "defensive",
      "left-handed",
      "cellular"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Scientists often study the _____, because it breeds very quickly and shares many genes with humans.",
    "options": [
      "body language",
      "fruit fly",
      "survival of the fittest",
      "birth defect"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The new medicine was first tested on a _____, but it must also be tested on human volunteers before it is sold.",
    "options": [
      "lab rat",
      "learned behaviour",
      "a chip off the old block",
      "peppered moth"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "cell": {
    "pos": "n.",
    "en_def": "the smallest living unit of a plant or animal",
    "cn_def": "細胞"
  },
  "nucleus": {
    "pos": "n.",
    "en_def": "the centre of a cell that holds the DNA",
    "cn_def": "細胞核"
  },
  "chromosome": {
    "pos": "n.",
    "en_def": "a thread-like structure in a cell that carries genes",
    "cn_def": "染色體"
  },
  "gene": {
    "pos": "n.",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "cn_def": "基因"
  },
  "double helix": {
    "pos": "n.phr.",
    "en_def": "the twisted ladder shape of DNA",
    "cn_def": "雙螺旋"
  },
  "base pair": {
    "pos": "n.phr.",
    "en_def": "two matching chemical units that form a step in DNA",
    "cn_def": "鹼基對"
  },
  "molecule": {
    "pos": "n.",
    "en_def": "the smallest unit of a substance made of atoms",
    "cn_def": "分子"
  },
  "enzyme": {
    "pos": "n.",
    "en_def": "a substance in the body that speeds up chemical changes",
    "cn_def": "酵素"
  },
  "cell division": {
    "pos": "n.phr.",
    "en_def": "the process in which one cell splits into two",
    "cn_def": "細胞分裂"
  },
  "membrane": {
    "pos": "n.",
    "en_def": "a thin layer that covers a cell",
    "cn_def": "薄膜"
  },
  "mitochondria": {
    "pos": "n.",
    "en_def": "parts of a cell that make energy",
    "cn_def": "粒線體"
  },
  "rna": {
    "pos": "n.",
    "en_def": "a molecule that helps turn DNA instructions into proteins",
    "cn_def": "核糖核酸"
  },
  "sequencing": {
    "pos": "n.",
    "en_def": "finding the exact order of units in DNA",
    "cn_def": "定序"
  },
  "amino acid": {
    "pos": "n.phr.",
    "en_def": "a small unit that joins with others to build proteins",
    "cn_def": "胺基酸"
  },
  "egg cell": {
    "pos": "n.phr.",
    "en_def": "the female cell that can grow into a baby",
    "cn_def": "卵細胞"
  },
  "fertilisation": {
    "pos": "n.",
    "en_def": "when male and female cells join to start new life",
    "cn_def": "受精"
  },
  "embryo": {
    "pos": "n.",
    "en_def": "an animal or human in the very early stage of growth",
    "cn_def": "胚胎"
  },
  "stem cell": {
    "pos": "n.phr.",
    "en_def": "a basic cell that can become many types of cell",
    "cn_def": "幹細胞"
  },
  "tissue": {
    "pos": "n.",
    "en_def": "a group of similar cells that work together",
    "cn_def": "組織"
  },
  "organ": {
    "pos": "n.",
    "en_def": "a body part such as the heart that does a special job",
    "cn_def": "器官"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "biochemistry": {
    "pos": "n.",
    "en_def": "the study of chemical processes in living things",
    "cn_def": "生物化學"
  },
  "geneticist": {
    "pos": "n.",
    "en_def": "a scientist who studies genes",
    "cn_def": "遺傳學家"
  },
  "genetics": {
    "pos": "n.",
    "en_def": "the science of how features pass from parents to children",
    "cn_def": "遺傳學"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "saliva": {
    "pos": "n.",
    "en_def": "the liquid in your mouth",
    "cn_def": "唾液"
  },
  "cheek swab": {
    "pos": "n.phr.",
    "en_def": "a cotton stick rubbed inside the mouth to collect cells",
    "cn_def": "口腔拭子"
  },
  "decode": {
    "pos": "v.",
    "en_def": "to find the meaning of a code",
    "cn_def": "解碼；破譯"
  },
  "twin": {
    "pos": "n.",
    "en_def": "one of two children born at the same time to the same mother",
    "cn_def": "雙胞胎"
  },
  "cellular": {
    "pos": "adj.",
    "en_def": "relating to cells",
    "cn_def": "細胞的"
  },
  "fruit fly": {
    "pos": "n.phr.",
    "en_def": "a tiny fly often used in genetics experiments",
    "cn_def": "果蠅"
  },
  "lab rat": {
    "pos": "n.phr.",
    "en_def": "a rat used for scientific experiments",
    "cn_def": "實驗鼠"
  },
  "courtship": {
    "pos": "n.",
    "en_def": "actions an animal uses to attract a partner",
    "cn_def": "求偶"
  },
  "fluke": {
    "pos": "n.",
    "en_def": "a lucky or unusual result that happens by chance",
    "cn_def": "僥倖；偶然"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "essence": {
    "pos": "n.",
    "en_def": "the most important basic quality of something",
    "cn_def": "本質；精髓"
  },
  "ethologist": {
    "pos": "n.",
    "en_def": "a scientist who studies animal behaviour",
    "cn_def": "動物行為學家"
  },
  "lookout": {
    "pos": "n.",
    "en_def": "an animal or person who watches for danger",
    "cn_def": "守望者；哨兵"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care for an illness or injury",
    "cn_def": "治療"
  },
  "inheritance": {
    "pos": "n.",
    "en_def": "features passed from parents to children",
    "cn_def": "遺傳"
  },
  "dimple": {
    "pos": "n.",
    "en_def": "a small hollow in the cheek when you smile",
    "cn_def": "酒窩"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or explanation of events",
    "cn_def": "敘事；說法"
  },
  "taxonomy": {
    "pos": "n.",
    "en_def": "the science of naming and grouping living things",
    "cn_def": "分類學"
  },
  "bone marrow": {
    "pos": "n.phr.",
    "en_def": "the soft tissue inside bones that makes blood",
    "cn_def": "骨髓"
  },
  "early humans": {
    "pos": "n.phr.",
    "en_def": "people who lived very long ago",
    "cn_def": "早期人類"
  },
  "pair bond": {
    "pos": "n.phr.",
    "en_def": "a strong long-term link between two partners",
    "cn_def": "配偶關係"
  },
  "great ape": {
    "pos": "n.phr.",
    "en_def": "a large primate such as a gorilla or chimpanzee",
    "cn_def": "大型猿類"
  },
  "body hair": {
    "pos": "n.phr.",
    "en_def": "the hair that grows on the body",
    "cn_def": "體毛"
  },
  "precision medicine": {
    "pos": "n.phr.",
    "en_def": "treatment planned for a person's own genes",
    "cn_def": "精準醫療"
  },
  "counterexample": {
    "pos": "n.",
    "en_def": "an example that shows a rule is not always true",
    "cn_def": "反例"
  },
  "de-extinction": {
    "pos": "n.",
    "en_def": "bringing an extinct animal back to life",
    "cn_def": "復活滅絕物種"
  },
  "microorganism": {
    "pos": "n.",
    "en_def": "a living thing too small to see without a microscope",
    "cn_def": "微生物"
  },
  "chick": {
    "pos": "n.",
    "en_def": "a baby bird",
    "cn_def": "雛鳥；小雞"
  },
  "coevolution": {
    "pos": "n.",
    "en_def": "when two species change over time because of each other",
    "cn_def": "共同演化"
  },
  "exception": {
    "pos": "n.",
    "en_def": "something that does not follow the usual rule",
    "cn_def": "例外"
  },
  "natural selection": {
    "pos": "n.phr.",
    "en_def": "process where living things best suited to their surroundings survive",
    "cn_def": "天擇"
  },
  "mirror test": {
    "pos": "n.phr.",
    "en_def": "a test to see if an animal recognises itself in a mirror",
    "cn_def": "鏡子測驗"
  },
  "common ancestor": {
    "pos": "n.phr.",
    "en_def": "an earlier species that two later species both came from",
    "cn_def": "共同祖先"
  },
  "peacock": {
    "pos": "n.",
    "en_def": "a male bird with a large, colourful tail",
    "cn_def": "雄孔雀"
  },
  "mutation": {
    "pos": "n.",
    "en_def": "a change in a gene",
    "cn_def": "突變"
  },
  "continuum": {
    "pos": "n.",
    "en_def": "a range where things change gradually",
    "cn_def": "連續體；連續的範圍"
  },
  "jawbone": {
    "pos": "n.",
    "en_def": "the bone that holds the lower teeth",
    "cn_def": "顎骨"
  },
  "anthropology": {
    "pos": "n.",
    "en_def": "the study of humans, their history and culture",
    "cn_def": "人類學"
  },
  "brood": {
    "pos": "n.",
    "en_def": "a group of young birds born at the same time",
    "cn_def": "一窩幼鳥"
  },
  "subset": {
    "pos": "n.",
    "en_def": "a smaller group within a larger group",
    "cn_def": "子集；一部分"
  },
  "serendipity": {
    "pos": "n.",
    "en_def": "finding something good by chance",
    "cn_def": "意外的好運；機緣巧合"
  },
  "variant": {
    "pos": "n.",
    "en_def": "a form of something that is slightly different",
    "cn_def": "變種；變體"
  },
  "antenna": {
    "pos": "n.",
    "en_def": "one of two long thin parts on an insect's head",
    "cn_def": "觸角"
  },
  "plumage": {
    "pos": "n.",
    "en_def": "a bird's feathers",
    "cn_def": "羽毛"
  },
  "homo sapiens": {
    "pos": "n.",
    "en_def": "the scientific name for modern humans",
    "cn_def": "智人"
  },
  "gene therapy": {
    "pos": "n.phr.",
    "en_def": "treating illness by changing a patient's genes",
    "cn_def": "基因療法"
  },
  "warning colours": {
    "pos": "n.phr.",
    "en_def": "bright colours that tell enemies an animal is dangerous",
    "cn_def": "警戒色"
  },
  "learned behaviour": {
    "pos": "n.phr.",
    "en_def": "an action an animal learns rather than is born with",
    "cn_def": "學習行為"
  },
  "selection pressure": {
    "pos": "n.phr.",
    "en_def": "a force in nature that affects which animals survive",
    "cn_def": "選擇壓力"
  },
  "body language": {
    "pos": "n.phr.",
    "en_def": "messages sent by the way you move or stand",
    "cn_def": "肢體語言"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "phenotype": {
    "pos": "n.",
    "en_def": "the features you can see, such as size or colour",
    "cn_def": "表現型"
  },
  "grooming": {
    "pos": "n.",
    "en_def": "cleaning another animal's fur",
    "cn_def": "理毛"
  },
  "superbug": {
    "pos": "n.",
    "en_def": "a germ that common medicines can no longer kill",
    "cn_def": "超級細菌"
  },
  "birdsong": {
    "pos": "n.",
    "en_def": "the musical sounds that birds make",
    "cn_def": "鳥鳴"
  },
  "blood type": {
    "pos": "n.phr.",
    "en_def": "the group your blood belongs to, such as A or O",
    "cn_def": "血型"
  },
  "vampire bat": {
    "pos": "n.phr.",
    "en_def": "a bat that feeds on the blood of animals",
    "cn_def": "吸血蝙蝠"
  },
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "inquiry": {
    "pos": "n.",
    "en_def": "an official question or investigation",
    "cn_def": "調查；詢問"
  },
  "observer": {
    "pos": "n.",
    "en_def": "a person who watches something carefully",
    "cn_def": "觀察者"
  },
  "bioethics": {
    "pos": "n.",
    "en_def": "the study of right and wrong in medicine and biology",
    "cn_def": "生命倫理學"
  },
  "fidelity": {
    "pos": "n.",
    "en_def": "loyalty to a partner",
    "cn_def": "忠誠"
  },
  "naturalist": {
    "pos": "n.",
    "en_def": "a person who studies plants and animals in nature",
    "cn_def": "博物學家"
  },
  "evolution": {
    "pos": "n.",
    "en_def": "slow change in living things over many generations",
    "cn_def": "演化"
  },
  "freeloader": {
    "pos": "n.",
    "en_def": "someone who takes help but gives nothing back",
    "cn_def": "搭便車者；白吃白喝者"
  },
  "inclusion": {
    "pos": "n.",
    "en_def": "adding someone or something to a group",
    "cn_def": "納入；包含"
  },
  "epigenetics": {
    "pos": "n.",
    "en_def": "the study of how lifestyle can switch genes on or off",
    "cn_def": "表觀遺傳學"
  },
  "birthmark": {
    "pos": "n.",
    "en_def": "a coloured mark on the skin from birth",
    "cn_def": "胎記"
  },
  "whisker": {
    "pos": "n.",
    "en_def": "one of the long stiff hairs near an animal's mouth",
    "cn_def": "鬍鬚"
  },
  "hive": {
    "pos": "n.",
    "en_def": "a home where bees live together",
    "cn_def": "蜂巢"
  },
  "kin selection": {
    "pos": "n.phr.",
    "en_def": "helping relatives so that shared genes survive",
    "cn_def": "親屬選擇"
  },
  "alarm call": {
    "pos": "n.phr.",
    "en_def": "a sound an animal makes to warn others of danger",
    "cn_def": "警戒叫聲"
  },
  "golden rice": {
    "pos": "n.phr.",
    "en_def": "rice changed to contain more vitamin A",
    "cn_def": "黃金米"
  },
  "derivative": {
    "pos": "n.",
    "en_def": "something developed from something else",
    "cn_def": "衍生物"
  },
  "survival of the fittest": {
    "pos": "n.phr.",
    "en_def": "the idea that the best-suited living things survive",
    "cn_def": "適者生存"
  },
  "infest": {
    "pos": "v.",
    "en_def": "(of insects or animals) to fill a place in large numbers",
    "cn_def": "大批出沒；侵擾"
  },
  "crossbreed": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "construe": {
    "pos": "v.",
    "en_def": "to understand something in a certain way",
    "cn_def": "理解；解讀"
  },
  "aggression": {
    "pos": "n.",
    "en_def": "angry or violent behaviour",
    "cn_def": "攻擊性"
  },
  "toolmaking": {
    "pos": "n.",
    "en_def": "the activity of making tools",
    "cn_def": "工具製作"
  },
  "reflex": {
    "pos": "n.",
    "en_def": "an automatic movement you do not think about",
    "cn_def": "反射動作"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "clever and able to learn quickly",
    "cn_def": "聰明的"
  },
  "defensive": {
    "pos": "adj.",
    "en_def": "protecting yourself from attack",
    "cn_def": "防禦性的"
  },
  "left-handed": {
    "pos": "adj.",
    "en_def": "using the left hand more easily than the right",
    "cn_def": "左撇子的"
  },
  "birth defect": {
    "pos": "n.phr.",
    "en_def": "a health problem that a baby is born with",
    "cn_def": "先天缺陷"
  },
  "a chip off the old block": {
    "pos": "n.phr.",
    "en_def": "a person who is very similar to a parent",
    "cn_def": "酷似父母的孩子"
  },
  "peppered moth": {
    "pos": "n.phr.",
    "en_def": "a moth that changed colour when cities became sooty",
    "cn_def": "樺尺蛾"
  }
};

const EXTRA_GLOSSES = {};
