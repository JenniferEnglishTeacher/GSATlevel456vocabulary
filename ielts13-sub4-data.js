// Topic 13 Subunit 4 Quiz Data: Inheritance & Genetic Variation 遺傳與基因變異
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T13 S04 - Inheritance & Genetic Variation 遺傳與基因變異",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inheritance",
    "pos": "n.",
    "cn_def": "遺傳",
    "en_def": "features passed from parents to children",
    "sentence": "Curly hair in our family is a clear case of {{BLANK}}, because my mother, my grandmother and I all have it.",
    "cn": "我們家的捲髮是遺傳的明顯例子，因為我媽媽、我外婆和我都有捲髮。"
  },
  {
    "word": "mutation",
    "pos": "n.",
    "cn_def": "突變",
    "en_def": "a change in a gene",
    "sentence": "A small {{BLANK}} in one gene gave the cat six toes on each paw, and her kittens had extra toes too.",
    "cn": "一個基因的小突變讓這隻貓每隻腳掌都有六根趾頭，而牠的小貓也有多出來的趾頭。"
  },
  {
    "word": "mutate",
    "pos": "v.",
    "cn_def": "突變",
    "en_def": "to change in form because of a gene change",
    "sentence": "Flu viruses {{BLANK}} quickly every single year, so many people need a new vaccine each autumn.",
    "cn": "流感病毒每一年都快速突變，所以許多人每年秋天都需要接種新疫苗。"
  },
  {
    "word": "recessive",
    "pos": "adj.",
    "cn_def": "隱性的",
    "en_def": "only shown when a child gets the same gene from both parents",
    "sentence": "Blue eyes are caused by a {{BLANK}} gene, so two brown-eyed parents can still have a blue-eyed baby.",
    "cn": "藍眼睛是由隱性的基因造成的，所以兩個棕眼睛的父母仍然可能生下藍眼睛的寶寶。"
  },
  {
    "word": "genotype",
    "pos": "n.",
    "cn_def": "基因型",
    "en_def": "the set of genes a living thing has",
    "sentence": "Two plants may look the same, but they can have a different {{BLANK}}, so their seeds may grow differently.",
    "cn": "兩株植物可能看起來一樣，但它們可能有不同的基因型，所以它們的種子可能長得不一樣。"
  },
  {
    "word": "phenotype",
    "pos": "n.",
    "cn_def": "表現型",
    "en_def": "the features you can see, such as size or colour",
    "sentence": "A person's {{BLANK}} includes height and hair colour, and it depends on both genes and lifestyle.",
    "cn": "一個人的表現型包括身高和髮色，而它取決於基因和生活方式兩者。"
  },
  {
    "word": "carrier",
    "pos": "n.",
    "cn_def": "帶原者；攜帶者",
    "en_def": "a person who has a gene but does not show its effect",
    "sentence": "My uncle is a {{BLANK}} of the gene, but he is healthy, so the doctor told him to tell his children.",
    "cn": "我舅舅是這個基因的攜帶者，但他很健康，所以醫生要他告訴他的孩子們。"
  },
  {
    "word": "gene pool",
    "pos": "n.phr.",
    "cn_def": "基因庫",
    "en_def": "all the genes in a group of animals or people",
    "sentence": "The small island population has a limited {{BLANK}}, so the zoo brought in new animals from other places.",
    "cn": "這個小島族群的基因庫很有限，所以動物園從其他地方引進了新的動物。"
  },
  {
    "word": "inbreeding",
    "pos": "n.",
    "cn_def": "近親繁殖",
    "en_def": "breeding between closely related animals",
    "sentence": "Many purebred dogs suffer from health problems, because years of {{BLANK}} have made their genes too similar.",
    "cn": "許多純種狗受健康問題所苦，因為多年的近親繁殖讓牠們的基因太過相似。"
  },
  {
    "word": "eye colour",
    "pos": "n.phr.",
    "cn_def": "眼睛顏色",
    "en_def": "the colour of the coloured part of the eye",
    "sentence": "Most babies in Taiwan are born with dark eyes, but {{BLANK}} can change during the first year in some children.",
    "cn": "台灣大多數嬰兒出生時是深色眼睛，但有些孩子的眼睛顏色在第一年內可能會改變。"
  },
  {
    "word": "freckle",
    "pos": "n.",
    "cn_def": "雀斑",
    "en_def": "a small brown spot on the skin",
    "sentence": "She has many {{BLANK}} on her nose like her father, and they get darker when she spends time in the sun.",
    "cn": "她的鼻子上有很多雀斑，跟她爸爸一樣，而且她曬太陽時雀斑會變得更深。"
  },
  {
    "word": "dimple",
    "pos": "n.",
    "cn_def": "酒窩",
    "en_def": "a small hollow in the cheek when you smile",
    "sentence": "Everyone in the family has a {{BLANK}} in the left cheek, so people can easily guess that we are related.",
    "cn": "家裡每個人的左臉頰都有一個酒窩，所以人們很容易猜到我們是一家人。"
  },
  {
    "word": "left-handed",
    "pos": "adj.",
    "cn_def": "左撇子的",
    "en_def": "using the left hand more easily than the right",
    "sentence": "Both of my parents are {{BLANK}}, so it was not surprising that I also write with my left hand.",
    "cn": "我的父母都是左撇子的，所以我也用左手寫字並不令人意外。"
  },
  {
    "word": "birth defect",
    "pos": "n.phr.",
    "cn_def": "先天缺陷",
    "en_def": "a health problem that a baby is born with",
    "sentence": "Doctors advise pregnant women to take certain vitamins, because they lower the risk of a {{BLANK}}.",
    "cn": "醫生建議孕婦服用某些維生素，因為它們能降低先天缺陷的風險。"
  },
  {
    "word": "congenital",
    "pos": "adj.",
    "cn_def": "先天的",
    "en_def": "present from birth",
    "sentence": "The puppy had a {{BLANK}} heart problem, but the vet performed an operation and it now runs around happily.",
    "cn": "那隻小狗有先天的心臟問題，但獸醫為牠動了手術，現在牠開心地到處跑。"
  },
  {
    "word": "blood type",
    "pos": "n.phr.",
    "cn_def": "血型",
    "en_def": "the group your blood belongs to, such as A or O",
    "sentence": "Your {{BLANK}} is passed down from your parents, so a family's types can help doctors find a match.",
    "cn": "你的血型是從父母遺傳下來的，所以一個家庭的血型可以幫助醫生找到配對。"
  },
  {
    "word": "pedigree",
    "pos": "n.",
    "cn_def": "血統證明；系譜",
    "en_def": "the recorded family history of an animal",
    "sentence": "The breeder showed us the puppy's {{BLANK}}, and it listed the dog's parents and grandparents.",
    "cn": "繁殖者給我們看了小狗的血統證明，而上面列出了這隻狗的父母和祖父母。"
  },
  {
    "word": "purebred",
    "pos": "adj.",
    "cn_def": "純種的",
    "en_def": "having parents of the same breed",
    "sentence": "A {{BLANK}} cat can be very expensive, but shelter cats are often healthier and cost much less.",
    "cn": "一隻純種的貓可能非常昂貴，但收容所的貓往往更健康，花費也少得多。"
  },
  {
    "word": "crossbreed",
    "pos": "v.",
    "cn_def": "雜交育種",
    "en_def": "to mix two breeds to make a new type",
    "sentence": "Farmers {{BLANK}} two kinds of rice, and the new type grows well in dry weather.",
    "cn": "農民把兩種稻米雜交育種，而新品種在乾燥的天氣中長得很好。",
    "answer": "crossbred",
    "alts": [
      "crossbreed"
    ]
  },
  {
    "word": "upbringing",
    "pos": "n.",
    "cn_def": "教養；成長環境",
    "en_def": "the way a child is cared for and taught at home",
    "sentence": "Twins who grow up apart can be very similar, but their {{BLANK}} still shapes their habits and interests.",
    "cn": "分開長大的雙胞胎可能非常相似，但他們的成長環境仍會塑造他們的習慣和興趣。"
  },
  {
    "word": "epigenetics",
    "pos": "n.",
    "cn_def": "表觀遺傳學",
    "en_def": "the study of how lifestyle can switch genes on or off",
    "sentence": "{{BLANK}} shows that stress and diet can affect how our genes work, although the DNA itself does not change.",
    "cn": "表觀遺傳學顯示壓力和飲食會影響我們的基因如何運作，雖然DNA本身並沒有改變。"
  },
  {
    "word": "fraternal",
    "pos": "adj.",
    "cn_def": "異卵的",
    "en_def": "(of twins) from two different eggs",
    "sentence": "My brother and I are {{BLANK}} twins, so we look quite different and we were born ten minutes apart.",
    "cn": "我哥哥和我是異卵的雙胞胎，所以我們長得很不一樣，而且出生時間相差十分鐘。"
  },
  {
    "word": "sibling",
    "pos": "n.",
    "cn_def": "兄弟姊妹",
    "en_def": "a brother or sister",
    "sentence": "Each {{BLANK}} in my family has a different hobby, although we all grew up in the same small apartment.",
    "cn": "我家的每個兄弟姊妹都有不同的嗜好，雖然我們都在同一間小公寓長大。"
  },
  {
    "word": "biological parent",
    "pos": "n.phr.",
    "cn_def": "親生父母",
    "en_def": "the parent who gave you your genes",
    "sentence": "Adopted children sometimes want to find their {{BLANK}}, because they are curious about their family history.",
    "cn": "被收養的孩子有時想找到他們的親生父母，因為他們對自己的家族史感到好奇。"
  },
  {
    "word": "gene expression",
    "pos": "n.phr.",
    "cn_def": "基因表現",
    "en_def": "how strongly a gene is turned on in a cell",
    "sentence": "Exercise can change {{BLANK}} in muscle cells, so regular training helps the body build stronger muscles.",
    "cn": "運動可以改變肌肉細胞中的基因表現，所以規律訓練能幫助身體練出更強壯的肌肉。"
  },
  {
    "word": "heritable",
    "pos": "adj.",
    "cn_def": "可遺傳的",
    "en_def": "able to be passed from parent to child",
    "sentence": "Height is highly {{BLANK}}, but children today are taller than their grandparents because they eat better food.",
    "cn": "身高是高度可遺傳的，但今天的孩子比他們的祖父母高，因為他們吃得更好。"
  },
  {
    "word": "birthmark",
    "pos": "n.",
    "cn_def": "胎記",
    "en_def": "a coloured mark on the skin from birth",
    "sentence": "The baby has a small red {{BLANK}} on her arm, but the doctor said it will fade as she grows.",
    "cn": "寶寶的手臂上有一個小小的紅色胎記，但醫生說它會隨著她長大而變淡。"
  },
  {
    "word": "colour blindness",
    "pos": "n.phr.",
    "cn_def": "色盲",
    "en_def": "being unable to see some colours clearly",
    "sentence": "{{BLANK}} is much more common in boys, because the gene for it is carried on the X chromosome.",
    "cn": "色盲在男孩中常見得多，因為與它相關的基因位於X染色體上。"
  }
];

const MCQS = [
  {
    "q": "Curly hair in our family is a clear case of _____, because my mother, my grandmother and I all have it.",
    "options": [
      "scepticism",
      "kit",
      "repertoire",
      "inheritance"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "A small _____ in one gene gave the cat six toes on each paw, and her kittens had extra toes too.",
    "options": [
      "speciation",
      "scent",
      "mutation",
      "termite"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Flu viruses _____ quickly every single year, so many people need a new vaccine each autumn.",
    "options": [
      "mutate",
      "exterminate",
      "sever",
      "spit"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Blue eyes are caused by a _____ gene, so two brown-eyed parents can still have a blue-eyed baby.",
    "options": [
      "nimble",
      "recessive",
      "emblematic",
      "well-documented"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Two plants may look the same, but they can have a different _____, so their seeds may grow differently.",
    "options": [
      "conclusion",
      "bioethics",
      "tolerance",
      "genotype"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A person's _____ includes height and hair colour, and it depends on both genes and lifestyle.",
    "options": [
      "phenotype",
      "swarm",
      "pack",
      "troop"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My uncle is a _____ of the gene, but he is healthy, so the doctor told him to tell his children.",
    "options": [
      "saliva",
      "carrier",
      "pack",
      "variant"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The small island population has a limited _____, so the zoo brought in new animals from other places.",
    "options": [
      "gene drive",
      "clinical trial",
      "gene pool",
      "alpha male"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Many purebred dogs suffer from health problems, because years of _____ have made their genes too similar.",
    "options": [
      "brood",
      "fluke",
      "saliva",
      "inbreeding"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Most babies in Taiwan are born with dark eyes, but _____ can change during the first year in some children.",
    "options": [
      "arms race",
      "eye colour",
      "gene drive",
      "missing link"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "She has many _____ on her nose like her father, and they get darker when she spends time in the sun.",
    "options": [
      "anthropomorphism",
      "brood",
      "freckle",
      "matriarch"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Everyone in the family has a _____ in the left cheek, so people can easily guess that we are related.",
    "options": [
      "dimple",
      "anatomy",
      "misunderstanding",
      "gorilla"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Both of my parents are _____, so it was not surprising that I also write with my left hand.",
    "options": [
      "unsubstantiated",
      "probable",
      "left-handed",
      "reclusive"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Doctors advise pregnant women to take certain vitamins, because they lower the risk of a _____.",
    "options": [
      "amino acid",
      "common ancestor",
      "pecking order",
      "birth defect"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The puppy had a _____ heart problem, but the vet performed an operation and it now runs around happily.",
    "options": [
      "congenital",
      "instinctive",
      "unreliable",
      "illogical"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Your _____ is passed down from your parents, so a family's types can help doctors find a match.",
    "options": [
      "sexual selection",
      "blood type",
      "selection pressure",
      "learned behaviour"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The breeder showed us the puppy's _____, and it listed the dog's parents and grandparents.",
    "options": [
      "spine",
      "biochemistry",
      "pedigree",
      "biologist"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "A _____ cat can be very expensive, but shelter cats are often healthier and cost much less.",
    "options": [
      "purebred",
      "immune",
      "genuine",
      "unreliable"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Farmers _____ two kinds of rice, and the new type grows well in dry weather.",
    "options": [
      "possess",
      "chirp",
      "exterminate",
      "crossbred"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Twins who grow up apart can be very similar, but their _____ still shapes their habits and interests.",
    "options": [
      "speciation",
      "upbringing",
      "microbe",
      "aggression"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "_____ shows that stress and diet can affect how our genes work, although the DNA itself does not change.",
    "options": [
      "naturalist",
      "biologist",
      "epigenetics",
      "antenna"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "My brother and I are _____ twins, so we look quite different and we were born ten minutes apart.",
    "options": [
      "fraternal",
      "reactive",
      "selfless",
      "spurious"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Each _____ in my family has a different hobby, although we all grew up in the same small apartment.",
    "options": [
      "gene",
      "pod",
      "existence",
      "sibling"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Adopted children sometimes want to find their _____, because they are curious about their family history.",
    "options": [
      "base pair",
      "biological parent",
      "common ancestor",
      "peppered moth"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Exercise can change _____ in muscle cells, so regular training helps the body build stronger muscles.",
    "options": [
      "gene expression",
      "petri dish",
      "paternity test",
      "lab rat"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Height is highly _____, but children today are taller than their grandparents because they eat better food.",
    "options": [
      "cellular",
      "inadequate",
      "heritable",
      "cooperative"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The baby has a small red _____ on her arm, but the doctor said it will fade as she grows.",
    "options": [
      "bearing",
      "reflex",
      "nucleus",
      "birthmark"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "_____ is much more common in boys, because the gene for it is carried on the X chromosome.",
    "options": [
      "egg cell",
      "colour blindness",
      "great ape",
      "alarm call"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "inheritance": {
    "pos": "n.",
    "en_def": "features passed from parents to children",
    "cn_def": "遺傳"
  },
  "mutation": {
    "pos": "n.",
    "en_def": "a change in a gene",
    "cn_def": "突變"
  },
  "mutate": {
    "pos": "v.",
    "en_def": "to change in form because of a gene change",
    "cn_def": "突變"
  },
  "recessive": {
    "pos": "adj.",
    "en_def": "only shown when a child gets the same gene from both parents",
    "cn_def": "隱性的"
  },
  "genotype": {
    "pos": "n.",
    "en_def": "the set of genes a living thing has",
    "cn_def": "基因型"
  },
  "phenotype": {
    "pos": "n.",
    "en_def": "the features you can see, such as size or colour",
    "cn_def": "表現型"
  },
  "carrier": {
    "pos": "n.",
    "en_def": "a person who has a gene but does not show its effect",
    "cn_def": "帶原者；攜帶者"
  },
  "gene pool": {
    "pos": "n.phr.",
    "en_def": "all the genes in a group of animals or people",
    "cn_def": "基因庫"
  },
  "inbreeding": {
    "pos": "n.",
    "en_def": "breeding between closely related animals",
    "cn_def": "近親繁殖"
  },
  "eye colour": {
    "pos": "n.phr.",
    "en_def": "the colour of the coloured part of the eye",
    "cn_def": "眼睛顏色"
  },
  "freckle": {
    "pos": "n.",
    "en_def": "a small brown spot on the skin",
    "cn_def": "雀斑"
  },
  "dimple": {
    "pos": "n.",
    "en_def": "a small hollow in the cheek when you smile",
    "cn_def": "酒窩"
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
  "congenital": {
    "pos": "adj.",
    "en_def": "present from birth",
    "cn_def": "先天的"
  },
  "blood type": {
    "pos": "n.phr.",
    "en_def": "the group your blood belongs to, such as A or O",
    "cn_def": "血型"
  },
  "pedigree": {
    "pos": "n.",
    "en_def": "the recorded family history of an animal",
    "cn_def": "血統證明；系譜"
  },
  "purebred": {
    "pos": "adj.",
    "en_def": "having parents of the same breed",
    "cn_def": "純種的"
  },
  "crossbred": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "crossbreed": {
    "pos": "v.",
    "en_def": "to mix two breeds to make a new type",
    "cn_def": "雜交育種"
  },
  "upbringing": {
    "pos": "n.",
    "en_def": "the way a child is cared for and taught at home",
    "cn_def": "教養；成長環境"
  },
  "epigenetics": {
    "pos": "n.",
    "en_def": "the study of how lifestyle can switch genes on or off",
    "cn_def": "表觀遺傳學"
  },
  "fraternal": {
    "pos": "adj.",
    "en_def": "(of twins) from two different eggs",
    "cn_def": "異卵的"
  },
  "sibling": {
    "pos": "n.",
    "en_def": "a brother or sister",
    "cn_def": "兄弟姊妹"
  },
  "biological parent": {
    "pos": "n.phr.",
    "en_def": "the parent who gave you your genes",
    "cn_def": "親生父母"
  },
  "gene expression": {
    "pos": "n.phr.",
    "en_def": "how strongly a gene is turned on in a cell",
    "cn_def": "基因表現"
  },
  "heritable": {
    "pos": "adj.",
    "en_def": "able to be passed from parent to child",
    "cn_def": "可遺傳的"
  },
  "birthmark": {
    "pos": "n.",
    "en_def": "a coloured mark on the skin from birth",
    "cn_def": "胎記"
  },
  "colour blindness": {
    "pos": "n.phr.",
    "en_def": "being unable to see some colours clearly",
    "cn_def": "色盲"
  },
  "scepticism": {
    "pos": "n.",
    "en_def": "doubt about whether something is true",
    "cn_def": "懷疑態度"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of things packed together for a task",
    "cn_def": "套組；工具包"
  },
  "repertoire": {
    "pos": "n.",
    "en_def": "all the things a person or animal can do",
    "cn_def": "全部本領；曲目"
  },
  "speciation": {
    "pos": "n.",
    "en_def": "the forming of a new and separate species",
    "cn_def": "物種形成"
  },
  "scent": {
    "pos": "n.",
    "en_def": "a smell, especially one left by an animal",
    "cn_def": "氣味"
  },
  "termite": {
    "pos": "n.",
    "en_def": "a small insect that eats wood and lives in large groups",
    "cn_def": "白蟻"
  },
  "exterminate": {
    "pos": "v.",
    "en_def": "to kill all of a group of animals",
    "cn_def": "撲滅；滅絕"
  },
  "sever": {
    "pos": "v.",
    "en_def": "to cut or break completely",
    "cn_def": "切斷"
  },
  "spit": {
    "pos": "v.",
    "en_def": "to force liquid out of your mouth",
    "cn_def": "吐（口水）"
  },
  "nimble": {
    "pos": "adj.",
    "en_def": "able to move quickly and lightly",
    "cn_def": "敏捷的"
  },
  "emblematic": {
    "pos": "adj.",
    "en_def": "being a typical symbol of something",
    "cn_def": "象徵性的；具代表性的"
  },
  "well-documented": {
    "pos": "adj.",
    "en_def": "recorded clearly in many reports",
    "cn_def": "有充分記錄的"
  },
  "conclusion": {
    "pos": "n.",
    "en_def": "a decision you reach after thinking",
    "cn_def": "結論"
  },
  "bioethics": {
    "pos": "n.",
    "en_def": "the study of right and wrong in medicine and biology",
    "cn_def": "生命倫理學"
  },
  "tolerance": {
    "pos": "n.",
    "en_def": "the ability to accept or survive something",
    "cn_def": "耐受力；容忍"
  },
  "swarm": {
    "pos": "n.",
    "en_def": "a large moving group of insects",
    "cn_def": "（昆蟲）一大群"
  },
  "pack": {
    "pos": "n.",
    "en_def": "a group of wolves or wild dogs",
    "cn_def": "（狼）群"
  },
  "troop": {
    "pos": "n.",
    "en_def": "a group of monkeys",
    "cn_def": "（猴）群"
  },
  "saliva": {
    "pos": "n.",
    "en_def": "the liquid in your mouth",
    "cn_def": "唾液"
  },
  "variant": {
    "pos": "n.",
    "en_def": "a form of something that is slightly different",
    "cn_def": "變種；變體"
  },
  "gene drive": {
    "pos": "n.phr.",
    "en_def": "a method to spread a gene quickly through a population",
    "cn_def": "基因驅動"
  },
  "clinical trial": {
    "pos": "n.phr.",
    "en_def": "a test of a new treatment on volunteers",
    "cn_def": "臨床試驗"
  },
  "alpha male": {
    "pos": "n.phr.",
    "en_def": "the most powerful male in a group",
    "cn_def": "首領雄性"
  },
  "brood": {
    "pos": "n.",
    "en_def": "a group of young birds born at the same time",
    "cn_def": "一窩幼鳥"
  },
  "fluke": {
    "pos": "n.",
    "en_def": "a lucky or unusual result that happens by chance",
    "cn_def": "僥倖；偶然"
  },
  "arms race": {
    "pos": "n.phr.",
    "en_def": "a contest where each side keeps improving to beat the other",
    "cn_def": "軍備競賽"
  },
  "missing link": {
    "pos": "n.phr.",
    "en_def": "a fossil that connects two groups of living things",
    "cn_def": "缺失的環節"
  },
  "anthropomorphism": {
    "pos": "n.",
    "en_def": "giving human feelings to animals or objects",
    "cn_def": "擬人化"
  },
  "matriarch": {
    "pos": "n.",
    "en_def": "an old female who leads a family group",
    "cn_def": "女族長"
  },
  "anatomy": {
    "pos": "n.",
    "en_def": "the structure of a body",
    "cn_def": "解剖構造；解剖學"
  },
  "misunderstanding": {
    "pos": "n.",
    "en_def": "a failure to understand correctly",
    "cn_def": "誤會；誤解"
  },
  "gorilla": {
    "pos": "n.",
    "en_def": "the largest ape, living in African forests",
    "cn_def": "大猩猩"
  },
  "unsubstantiated": {
    "pos": "adj.",
    "en_def": "not supported by evidence",
    "cn_def": "未經證實的"
  },
  "probable": {
    "pos": "adj.",
    "en_def": "likely to be true or to happen",
    "cn_def": "很可能的"
  },
  "reclusive": {
    "pos": "adj.",
    "en_def": "avoiding others and living alone",
    "cn_def": "隱居的；不喜交際的"
  },
  "amino acid": {
    "pos": "n.phr.",
    "en_def": "a small unit that joins with others to build proteins",
    "cn_def": "胺基酸"
  },
  "common ancestor": {
    "pos": "n.phr.",
    "en_def": "an earlier species that two later species both came from",
    "cn_def": "共同祖先"
  },
  "pecking order": {
    "pos": "n.phr.",
    "en_def": "the order of rank within a group",
    "cn_def": "啄序；等級次序"
  },
  "instinctive": {
    "pos": "adj.",
    "en_def": "done naturally without learning",
    "cn_def": "本能的"
  },
  "unreliable": {
    "pos": "adj.",
    "en_def": "not able to be trusted",
    "cn_def": "不可靠的"
  },
  "illogical": {
    "pos": "adj.",
    "en_def": "not sensible or reasonable",
    "cn_def": "不合邏輯的"
  },
  "sexual selection": {
    "pos": "n.phr.",
    "en_def": "choosing mates by features such as bright colours or songs",
    "cn_def": "性擇"
  },
  "selection pressure": {
    "pos": "n.phr.",
    "en_def": "a force in nature that affects which animals survive",
    "cn_def": "選擇壓力"
  },
  "learned behaviour": {
    "pos": "n.phr.",
    "en_def": "an action an animal learns rather than is born with",
    "cn_def": "學習行為"
  },
  "spine": {
    "pos": "n.",
    "en_def": "the row of bones down the middle of your back",
    "cn_def": "脊椎"
  },
  "biochemistry": {
    "pos": "n.",
    "en_def": "the study of chemical processes in living things",
    "cn_def": "生物化學"
  },
  "biologist": {
    "pos": "n.",
    "en_def": "a scientist who studies living things",
    "cn_def": "生物學家"
  },
  "immune": {
    "pos": "adj.",
    "en_def": "not able to be affected by a disease",
    "cn_def": "免疫的"
  },
  "genuine": {
    "pos": "adj.",
    "en_def": "real and true",
    "cn_def": "真正的"
  },
  "possess": {
    "pos": "v.",
    "en_def": "to have or own",
    "cn_def": "擁有"
  },
  "chirp": {
    "pos": "v.",
    "en_def": "(of a bird or insect) to make a short high sound",
    "cn_def": "啁啾；吱吱叫"
  },
  "microbe": {
    "pos": "n.",
    "en_def": "a tiny living thing such as a bacterium",
    "cn_def": "微生物；細菌"
  },
  "aggression": {
    "pos": "n.",
    "en_def": "angry or violent behaviour",
    "cn_def": "攻擊性"
  },
  "naturalist": {
    "pos": "n.",
    "en_def": "a person who studies plants and animals in nature",
    "cn_def": "博物學家"
  },
  "antenna": {
    "pos": "n.",
    "en_def": "one of two long thin parts on an insect's head",
    "cn_def": "觸角"
  },
  "reactive": {
    "pos": "adj.",
    "en_def": "acting in response to something rather than planning",
    "cn_def": "反應性的；易起反應的"
  },
  "selfless": {
    "pos": "adj.",
    "en_def": "caring more about others than yourself",
    "cn_def": "無私的"
  },
  "spurious": {
    "pos": "adj.",
    "en_def": "false, although it seems true",
    "cn_def": "虛假的；似是而非的"
  },
  "gene": {
    "pos": "n.",
    "en_def": "a part of DNA that controls a feature like eye colour",
    "cn_def": "基因"
  },
  "pod": {
    "pos": "n.",
    "en_def": "a group of whales or dolphins",
    "cn_def": "（鯨豚）群"
  },
  "existence": {
    "pos": "n.",
    "en_def": "the state of being real or alive",
    "cn_def": "存在"
  },
  "base pair": {
    "pos": "n.phr.",
    "en_def": "two matching chemical units that form a step in DNA",
    "cn_def": "鹼基對"
  },
  "peppered moth": {
    "pos": "n.phr.",
    "en_def": "a moth that changed colour when cities became sooty",
    "cn_def": "樺尺蛾"
  },
  "petri dish": {
    "pos": "n.phr.",
    "en_def": "a small round dish used to grow germs in a lab",
    "cn_def": "培養皿"
  },
  "paternity test": {
    "pos": "n.phr.",
    "en_def": "a DNA test to find out who a child's father is",
    "cn_def": "親子鑑定"
  },
  "lab rat": {
    "pos": "n.phr.",
    "en_def": "a rat used for scientific experiments",
    "cn_def": "實驗鼠"
  },
  "cellular": {
    "pos": "adj.",
    "en_def": "relating to cells",
    "cn_def": "細胞的"
  },
  "inadequate": {
    "pos": "adj.",
    "en_def": "not good enough",
    "cn_def": "不足的；不充分的"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "working together with others",
    "cn_def": "合作的"
  },
  "bearing": {
    "pos": "n.",
    "en_def": "influence or connection",
    "cn_def": "關係；影響"
  },
  "reflex": {
    "pos": "n.",
    "en_def": "an automatic movement you do not think about",
    "cn_def": "反射動作"
  },
  "nucleus": {
    "pos": "n.",
    "en_def": "the centre of a cell that holds the DNA",
    "cn_def": "細胞核"
  },
  "egg cell": {
    "pos": "n.phr.",
    "en_def": "the female cell that can grow into a baby",
    "cn_def": "卵細胞"
  },
  "great ape": {
    "pos": "n.phr.",
    "en_def": "a large primate such as a gorilla or chimpanzee",
    "cn_def": "大型猿類"
  },
  "alarm call": {
    "pos": "n.phr.",
    "en_def": "a sound an animal makes to warn others of danger",
    "cn_def": "警戒叫聲"
  }
};

const EXTRA_GLOSSES = {};
