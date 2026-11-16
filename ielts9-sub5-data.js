// Topic 9 Subunit 5 Quiz Data: Inventors, Inventions & Science 發明家、發明與科學
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S05 - Inventors, Inventions & Science 發明家、發明與科學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inventor",
    "pos": "n.",
    "cn_def": "發明家",
    "en_def": "a person who creates something new for the first time",
    "sentence": "Thomas Edison was a famous {{BLANK}}, but he worked with a large team of skilled assistants.",
    "cn": "湯瑪斯·愛迪生是一位著名的發明家,但他和一大群熟練的助手一起工作。"
  },
  {
    "word": "invention",
    "pos": "n.",
    "cn_def": "發明;發明物",
    "en_def": "something new that someone has made or designed",
    "sentence": "The printing press was an important {{BLANK}}, because it let ideas spread quickly across Europe.",
    "cn": "印刷機是一項重要的發明,因為它讓思想迅速在歐洲傳播。"
  },
  {
    "word": "invent",
    "pos": "v.",
    "cn_def": "發明",
    "en_def": "to make or design something that did not exist before",
    "sentence": "Alexander Graham Bell {{BLANK}} the telephone in 1876, and soon people could talk across long distances.",
    "cn": "亞歷山大·格拉漢姆·貝爾在1876年發明了電話,而很快人們就能遠距離交談。"
  },
  {
    "word": "ingenious",
    "pos": "adj.",
    "cn_def": "巧妙的;有創意的",
    "en_def": "very clever and original",
    "sentence": "My brother found an {{BLANK}} way to water his plants while we were away, and none of them died.",
    "cn": "我哥哥想到一個巧妙的方法在我們外出時幫植物澆水,而沒有一株枯死。"
  },
  {
    "word": "tinker",
    "pos": "v.",
    "cn_def": "修補;擺弄",
    "en_def": "to try to repair or improve something by small changes",
    "sentence": "He loves to {{BLANK}} with old radios in the garage, and sometimes he makes them work again.",
    "cn": "他喜歡在車庫裡擺弄舊收音機,而有時候他能讓它們重新運作。"
  },
  {
    "word": "trial",
    "pos": "n.",
    "cn_def": "試驗;試用",
    "en_def": "a test to see if something works well",
    "sentence": "The new engine failed its first {{BLANK}}, but the engineers fixed the problem within a week.",
    "cn": "新引擎第一次試驗失敗了,但工程師們在一週內就解決了問題。"
  },
  {
    "word": "experiment",
    "pos": "n.",
    "cn_def": "實驗",
    "en_def": "a scientific test to find out something",
    "sentence": "We did a simple {{BLANK}} in class with magnets, and everyone was surprised by the results.",
    "cn": "我們在課堂上用磁鐵做了一個簡單的實驗,而大家都對結果感到驚訝。"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "cn_def": "技師;修車工",
    "en_def": "a person who repairs engines and machines",
    "sentence": "The {{BLANK}} found the problem quickly, but he needed two days to order the right part.",
    "cn": "技師很快就找到了問題,但他需要兩天來訂購正確的零件。"
  },
  {
    "word": "engineering",
    "pos": "n.",
    "cn_def": "工程(學)",
    "en_def": "the work of designing and building machines, roads and bridges",
    "sentence": "She wants to study {{BLANK}} at university, because she loves solving problems and building things.",
    "cn": "她想在大學唸工程,因為她熱愛解決問題和動手做東西。"
  },
  {
    "word": "physicist",
    "pos": "n.",
    "cn_def": "物理學家",
    "en_def": "a scientist who studies energy, force and matter",
    "sentence": "The {{BLANK}} explained how electricity works, and the audience finally understood why lights switch on.",
    "cn": "那位物理學家解釋了電是怎麼運作的,而觀眾終於明白燈為什麼會亮。"
  },
  {
    "word": "chemist",
    "pos": "n.",
    "cn_def": "化學家",
    "en_def": "a scientist who studies substances and how they change",
    "sentence": "A young {{BLANK}} discovered the first artificial dye by accident, and it made him very rich.",
    "cn": "一位年輕的化學家意外發現了第一種人工染料,而它讓他變得非常富有。"
  },
  {
    "word": "discovery",
    "pos": "n.",
    "cn_def": "發現",
    "en_def": "the act of finding something that was not known before",
    "sentence": "The {{BLANK}} of electricity changed everyday life, but it took many years to reach ordinary homes.",
    "cn": "電的發現改變了日常生活,但它花了很多年才進入一般家庭。"
  },
  {
    "word": "innovator",
    "pos": "n.",
    "cn_def": "創新者",
    "en_def": "a person who introduces new ideas or methods",
    "sentence": "Steve Jobs is often called an {{BLANK}}, although many people helped him create his famous products.",
    "cn": "史蒂夫·賈伯斯常被稱為創新者,雖然有很多人幫他打造出那些知名產品。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改進;改善",
    "en_def": "a change that makes something better",
    "sentence": "Watt's {{BLANK}} to the steam engine saved coal, so factory owners were eager to buy his machines.",
    "cn": "瓦特對蒸汽機的改進節省了煤,所以工廠老闆們都急著買他的機器。"
  },
  {
    "word": "contraption",
    "pos": "n.",
    "cn_def": "奇怪的裝置",
    "en_def": "a strange or complicated machine or device",
    "sentence": "My little sister built a funny {{BLANK}} from boxes and string, and it actually feeds the cat.",
    "cn": "我妹妹用箱子和繩子做了一個好笑的奇怪裝置,而它居然真的能餵貓。"
  },
  {
    "word": "gizmo",
    "pos": "n.",
    "cn_def": "小玩意兒;小裝置",
    "en_def": "a small clever device (informal)",
    "sentence": "Dad bought a new kitchen {{BLANK}} that peels apples, but we still prefer using a knife.",
    "cn": "爸爸買了一個能削蘋果皮的新廚房小玩意兒,但我們還是比較喜歡用刀子。"
  },
  {
    "word": "imitation",
    "pos": "n.",
    "cn_def": "仿製品;模仿",
    "en_def": "a copy of something",
    "sentence": "The shop sold a cheap {{BLANK}} of the famous watch, but it stopped working after a month.",
    "cn": "那家店賣那款名錶的便宜仿製品,但它一個月後就壞了。"
  },
  {
    "word": "royalty",
    "pos": "n.",
    "cn_def": "權利金;版稅",
    "en_def": "money paid to an inventor or writer each time their work is used",
    "sentence": "The inventor received a {{BLANK}} for every machine sold, so he earned money for many years.",
    "cn": "發明家每賣出一台機器就收到一筆權利金,所以他好多年都持續有收入。"
  },
  {
    "word": "trademark",
    "pos": "n.",
    "cn_def": "商標",
    "en_def": "a name or sign that belongs to one company",
    "sentence": "The company protected its {{BLANK}} carefully, because the name was famous all over the world.",
    "cn": "那家公司小心保護它的商標,因為那個名稱聞名全世界。"
  },
  {
    "word": "sponsor",
    "pos": "n.",
    "cn_def": "贊助者;贊助商",
    "en_def": "a person or company that gives money to support something",
    "sentence": "The young inventor found a rich {{BLANK}}, so he could finally build a full-size model of his machine.",
    "cn": "那位年輕發明家找到一位富有的贊助者,所以他終於能打造機器的實物大小模型。"
  },
  {
    "word": "backer",
    "pos": "n.",
    "cn_def": "資助者;支持者",
    "en_def": "someone who supports a project with money",
    "sentence": "The project failed when its main {{BLANK}} pulled out, and the workshop had to close.",
    "cn": "當主要資助者撤資時那個計畫就失敗了,而工作坊也不得不關門。"
  },
  {
    "word": "exhibition",
    "pos": "n.",
    "cn_def": "展覽",
    "en_def": "a public show of objects or works",
    "sentence": "The Great {{BLANK}} of 1851 showed amazing new machines, and six million people came to see them.",
    "cn": "1851年的萬國博覽會展出了驚人的新機器,而有六百萬人前來參觀。"
  },
  {
    "word": "demonstration",
    "pos": "n.",
    "cn_def": "示範;展示",
    "en_def": "showing how something works",
    "sentence": "The inventor gave a {{BLANK}} of his new telephone, and the crowd cheered when they heard his voice.",
    "cn": "發明家為他的新電話做了一場示範,而當群眾聽到他的聲音時都歡呼起來。"
  },
  {
    "word": "world's fair",
    "pos": "n.",
    "cn_def": "世界博覽會",
    "en_def": "a large international exhibition of new products and ideas",
    "sentence": "The Eiffel Tower was built for a {{BLANK}} in 1889, but it later became a symbol of Paris.",
    "cn": "艾菲爾鐵塔是為1889年的世界博覽會而建造的,但後來它成為了巴黎的象徵。"
  },
  {
    "word": "inventive",
    "pos": "adj.",
    "cn_def": "有創造力的",
    "en_def": "good at thinking of new ideas",
    "sentence": "Our science teacher is very {{BLANK}}, and she often turns rubbish into tools for our experiments.",
    "cn": "我們的自然老師非常有創造力,而她常把垃圾變成我們做實驗的工具。"
  },
  {
    "word": "sketch",
    "pos": "n.",
    "cn_def": "草圖;素描",
    "en_def": "a quick simple drawing",
    "sentence": "Leonardo da Vinci made a {{BLANK}} of a flying machine, but nobody could build it at that time.",
    "cn": "李奧納多·達文西畫了一張飛行機器的草圖,但當時沒有人能把它造出來。"
  },
  {
    "word": "magnet",
    "pos": "n.",
    "cn_def": "磁鐵",
    "en_def": "a piece of metal that pulls iron towards it",
    "sentence": "I keep my shopping list on the fridge with a {{BLANK}}, so I never forget it when I go out.",
    "cn": "我用磁鐵把購物清單貼在冰箱上,所以我出門時從不會忘記。"
  },
  {
    "word": "magnetism",
    "pos": "n.",
    "cn_def": "磁性;磁力",
    "en_def": "the force that magnets produce",
    "sentence": "Scientists studied {{BLANK}} and electricity together in the 1820s, and their work led to the first electric motors.",
    "cn": "科學家們在1820年代一起研究磁力和電,而他們的成果催生了第一批電動馬達。"
  },
  {
    "word": "wire",
    "pos": "n.",
    "cn_def": "電線;金屬線",
    "en_def": "a long thin piece of metal used to carry electricity",
    "sentence": "The lamp stopped working because a {{BLANK}} was loose, so my dad fixed it with a screwdriver.",
    "cn": "這盞燈不亮了是因為一條電線鬆了,所以我爸用螺絲起子修好了它。"
  }
];

const MCQS = [
  {
    "q": "Thomas Edison was a famous _____, but he worked with a large team of skilled assistants.",
    "options": [
      "electricity",
      "inventor",
      "ministry",
      "capitalism"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The printing press was an important _____, because it let ideas spread quickly across Europe.",
    "options": [
      "garment",
      "virtue",
      "mechanisation",
      "invention"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Alexander Graham Bell _____ the telephone in 1876, and soon people could talk across long distances.",
    "options": [
      "launch",
      "found",
      "invent",
      "develop"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "My brother found an _____ way to water his plants while we were away, and none of them died.",
    "options": [
      "ingenious",
      "deplorable",
      "militant",
      "geopolitical"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "He loves to _____ with old radios in the garage, and sometimes he makes them work again.",
    "options": [
      "import",
      "multiply",
      "select",
      "tinker"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new engine failed its first _____, but the engineers fixed the problem within a week.",
    "options": [
      "impurity",
      "trial",
      "consumerism",
      "garment"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "We did a simple _____ in class with magnets, and everyone was surprised by the results.",
    "options": [
      "riot",
      "mould",
      "experiment",
      "access"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The _____ found the problem quickly, but he needed two days to order the right part.",
    "options": [
      "mechanic",
      "yarn",
      "garment",
      "composition"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "She wants to study _____ at university, because she loves solving problems and building things.",
    "options": [
      "escalator",
      "watershed",
      "penicillin",
      "engineering"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ explained how electricity works, and the audience finally understood why lights switch on.",
    "options": [
      "aid",
      "physicist",
      "uptake",
      "institute"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "A young _____ discovered the first artificial dye by accident, and it made him very rich.",
    "options": [
      "trailblazer",
      "ironworks",
      "chemist",
      "radio"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of electricity changed everyday life, but it took many years to reach ordinary homes.",
    "options": [
      "discovery",
      "benefactor",
      "voltage",
      "valve"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Steve Jobs is often called an _____, although many people helped him create his famous products.",
    "options": [
      "imperialism",
      "dividend",
      "innovator",
      "telegraph"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Watt's _____ to the steam engine saved coal, so factory owners were eager to buy his machines.",
    "options": [
      "administration",
      "commerce",
      "marketplace",
      "improvement"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "My little sister built a funny _____ from boxes and string, and it actually feeds the cat.",
    "options": [
      "contraption",
      "emancipation",
      "brake",
      "philanthropist"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Dad bought a new kitchen _____ that peels apples, but we still prefer using a knife.",
    "options": [
      "chemical",
      "gizmo",
      "pickaxe",
      "uptake"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The shop sold a cheap _____ of the famous watch, but it stopped working after a month.",
    "options": [
      "wool",
      "pump",
      "weaver",
      "imitation"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The inventor received a _____ for every machine sold, so he earned money for many years.",
    "options": [
      "royalty",
      "discontent",
      "journal",
      "strike"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The company protected its _____ carefully, because the name was famous all over the world.",
    "options": [
      "ore",
      "conglomerate",
      "trademark",
      "retail"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The young inventor found a rich _____, so he could finally build a full-size model of his machine.",
    "options": [
      "station",
      "sponsor",
      "expert",
      "suffrage"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The project failed when its main _____ pulled out, and the workshop had to close.",
    "options": [
      "tycoon",
      "ore",
      "counterargument",
      "backer"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The Great _____ of 1851 showed amazing new machines, and six million people came to see them.",
    "options": [
      "rail",
      "exhibition",
      "counterargument",
      "virtue"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The inventor gave a _____ of his new telephone, and the crowd cheered when they heard his voice.",
    "options": [
      "demonstration",
      "composition",
      "administration",
      "counterargument"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The Eiffel Tower was built for a _____ in 1889, but it later became a symbol of Paris.",
    "options": [
      "child labour",
      "safety lamp",
      "world's fair",
      "the best thing since sliced bread"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Our science teacher is very _____, and she often turns rubbish into tools for our experiments.",
    "options": [
      "inventive",
      "overcrowded",
      "state-of-the-art",
      "unconventional"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Leonardo da Vinci made a _____ of a flying machine, but nobody could build it at that time.",
    "options": [
      "girder",
      "thread",
      "sketch",
      "phonograph"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "I keep my shopping list on the fridge with a _____, so I never forget it when I go out.",
    "options": [
      "telephone",
      "escalator",
      "pickaxe",
      "magnet"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Scientists studied _____ and electricity together in the 1820s, and their work led to the first electric motors.",
    "options": [
      "sanitation",
      "magnetism",
      "comment",
      "by-product"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The lamp stopped working because a _____ was loose, so my dad fixed it with a screwdriver.",
    "options": [
      "tyre",
      "canal",
      "wire",
      "wagon"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "inventor": {
    "pos": "n.",
    "en_def": "a person who creates something new for the first time",
    "cn_def": "發明家"
  },
  "invention": {
    "pos": "n.",
    "en_def": "something new that someone has made or designed",
    "cn_def": "發明;發明物"
  },
  "invent": {
    "pos": "v.",
    "en_def": "to make or design something that did not exist before",
    "cn_def": "發明"
  },
  "ingenious": {
    "pos": "adj.",
    "en_def": "very clever and original",
    "cn_def": "巧妙的;有創意的"
  },
  "tinker": {
    "pos": "v.",
    "en_def": "to try to repair or improve something by small changes",
    "cn_def": "修補;擺弄"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a test to see if something works well",
    "cn_def": "試驗;試用"
  },
  "experiment": {
    "pos": "n.",
    "en_def": "a scientific test to find out something",
    "cn_def": "實驗"
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a person who repairs engines and machines",
    "cn_def": "技師;修車工"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "physicist": {
    "pos": "n.",
    "en_def": "a scientist who studies energy, force and matter",
    "cn_def": "物理學家"
  },
  "chemist": {
    "pos": "n.",
    "en_def": "a scientist who studies substances and how they change",
    "cn_def": "化學家"
  },
  "discovery": {
    "pos": "n.",
    "en_def": "the act of finding something that was not known before",
    "cn_def": "發現"
  },
  "innovator": {
    "pos": "n.",
    "en_def": "a person who introduces new ideas or methods",
    "cn_def": "創新者"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改進;改善"
  },
  "contraption": {
    "pos": "n.",
    "en_def": "a strange or complicated machine or device",
    "cn_def": "奇怪的裝置"
  },
  "gizmo": {
    "pos": "n.",
    "en_def": "a small clever device (informal)",
    "cn_def": "小玩意兒;小裝置"
  },
  "imitation": {
    "pos": "n.",
    "en_def": "a copy of something",
    "cn_def": "仿製品;模仿"
  },
  "royalty": {
    "pos": "n.",
    "en_def": "money paid to an inventor or writer each time their work is used",
    "cn_def": "權利金;版稅"
  },
  "trademark": {
    "pos": "n.",
    "en_def": "a name or sign that belongs to one company",
    "cn_def": "商標"
  },
  "sponsor": {
    "pos": "n.",
    "en_def": "a person or company that gives money to support something",
    "cn_def": "贊助者;贊助商"
  },
  "backer": {
    "pos": "n.",
    "en_def": "someone who supports a project with money",
    "cn_def": "資助者;支持者"
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public show of objects or works",
    "cn_def": "展覽"
  },
  "demonstration": {
    "pos": "n.",
    "en_def": "showing how something works",
    "cn_def": "示範;展示"
  },
  "world's fair": {
    "pos": "n.",
    "en_def": "a large international exhibition of new products and ideas",
    "cn_def": "世界博覽會"
  },
  "inventive": {
    "pos": "adj.",
    "en_def": "good at thinking of new ideas",
    "cn_def": "有創造力的"
  },
  "sketch": {
    "pos": "n.",
    "en_def": "a quick simple drawing",
    "cn_def": "草圖;素描"
  },
  "magnet": {
    "pos": "n.",
    "en_def": "a piece of metal that pulls iron towards it",
    "cn_def": "磁鐵"
  },
  "magnetism": {
    "pos": "n.",
    "en_def": "the force that magnets produce",
    "cn_def": "磁性;磁力"
  },
  "wire": {
    "pos": "n.",
    "en_def": "a long thin piece of metal used to carry electricity",
    "cn_def": "電線;金屬線"
  },
  "electricity": {
    "pos": "n.",
    "en_def": "a form of energy used for light, heat and machines",
    "cn_def": "電;電力"
  },
  "ministry": {
    "pos": "n.",
    "en_def": "a government department",
    "cn_def": "(政府)部會"
  },
  "capitalism": {
    "pos": "n.",
    "en_def": "an economic system based on private business and profit",
    "cn_def": "資本主義"
  },
  "garment": {
    "pos": "n.",
    "en_def": "a piece of clothing",
    "cn_def": "衣服;服裝"
  },
  "virtue": {
    "pos": "n.",
    "en_def": "a good quality in a person's character",
    "cn_def": "美德"
  },
  "mechanisation": {
    "pos": "n.",
    "en_def": "the use of machines to replace human or animal work",
    "cn_def": "機械化"
  },
  "launch": {
    "pos": "v.",
    "en_def": "to start selling a new product",
    "cn_def": "推出;發行"
  },
  "found": {
    "pos": "v.",
    "en_def": "to start an organisation or company",
    "cn_def": "創立;建立"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to create or improve something over time",
    "cn_def": "開發;發展"
  },
  "deplorable": {
    "pos": "adj.",
    "en_def": "very bad and deserving strong criticism",
    "cn_def": "可悲的;應受譴責的"
  },
  "militant": {
    "pos": "adj.",
    "en_def": "ready to use strong or violent action for a cause",
    "cn_def": "好戰的;激進的"
  },
  "geopolitical": {
    "pos": "adj.",
    "en_def": "connected with how geography affects politics between countries",
    "cn_def": "地緣政治的"
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring goods into a country from abroad",
    "cn_def": "進口"
  },
  "multiply": {
    "pos": "v.",
    "en_def": "to increase greatly in number",
    "cn_def": "成倍增加"
  },
  "select": {
    "pos": "v.",
    "en_def": "to choose carefully from a group",
    "cn_def": "挑選;選擇"
  },
  "impurity": {
    "pos": "n.",
    "en_def": "an unwanted substance mixed into something",
    "cn_def": "雜質"
  },
  "consumerism": {
    "pos": "n.",
    "en_def": "the idea that buying lots of goods is good",
    "cn_def": "消費主義"
  },
  "riot": {
    "pos": "n.",
    "en_def": "a violent protest by a crowd of people",
    "cn_def": "暴動"
  },
  "mould": {
    "pos": "n.",
    "en_def": "a hollow shape into which hot liquid is poured",
    "cn_def": "模具;鑄模"
  },
  "access": {
    "pos": "n.",
    "en_def": "the chance or right to use something",
    "cn_def": "使用權;取得機會"
  },
  "yarn": {
    "pos": "n.",
    "en_def": "long thread used for knitting or weaving",
    "cn_def": "紗線;毛線"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the parts or substances that something is made of",
    "cn_def": "成分;組成"
  },
  "escalator": {
    "pos": "n.",
    "en_def": "moving stairs",
    "cn_def": "手扶梯"
  },
  "watershed": {
    "pos": "n.",
    "en_def": "an event that marks a very important change",
    "cn_def": "分水嶺;轉折點"
  },
  "penicillin": {
    "pos": "n.",
    "en_def": "a medicine that kills bacteria",
    "cn_def": "盤尼西林;青黴素"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help, especially money or food given to people in need",
    "cn_def": "援助;救助"
  },
  "uptake": {
    "pos": "n.",
    "en_def": "the rate at which people start using something",
    "cn_def": "採用率;接受程度"
  },
  "institute": {
    "pos": "n.",
    "en_def": "an organisation for research or education",
    "cn_def": "研究所;學會"
  },
  "trailblazer": {
    "pos": "n.",
    "en_def": "a person who is the first to do something new",
    "cn_def": "開拓者;先驅"
  },
  "ironworks": {
    "pos": "n.",
    "en_def": "a factory where iron is made",
    "cn_def": "鐵工廠;煉鐵廠"
  },
  "radio": {
    "pos": "n.",
    "en_def": "a device that receives sound broadcasts",
    "cn_def": "收音機;廣播"
  },
  "benefactor": {
    "pos": "n.",
    "en_def": "a person who gives money to help others",
    "cn_def": "捐助者;恩人"
  },
  "voltage": {
    "pos": "n.",
    "en_def": "the force of an electric current, measured in volts",
    "cn_def": "電壓"
  },
  "valve": {
    "pos": "n.",
    "en_def": "a part that opens and closes to control gas or liquid",
    "cn_def": "閥門"
  },
  "imperialism": {
    "pos": "n.",
    "en_def": "a system in which a powerful country controls others",
    "cn_def": "帝國主義"
  },
  "dividend": {
    "pos": "n.",
    "en_def": "a share of a company's profit paid to its owners",
    "cn_def": "股利;股息"
  },
  "telegraph": {
    "pos": "n.",
    "en_def": "an old system for sending messages along wires using signals",
    "cn_def": "電報"
  },
  "administration": {
    "pos": "n.",
    "en_def": "the work of organising and running a business or government",
    "cn_def": "行政;管理"
  },
  "commerce": {
    "pos": "n.",
    "en_def": "buying and selling, especially on a large scale",
    "cn_def": "商業;貿易"
  },
  "marketplace": {
    "pos": "n.",
    "en_def": "the world of buying and selling",
    "cn_def": "市場"
  },
  "emancipation": {
    "pos": "n.",
    "en_def": "the act of giving people freedom",
    "cn_def": "解放"
  },
  "brake": {
    "pos": "n.",
    "en_def": "a part that makes a vehicle slow down or stop",
    "cn_def": "煞車"
  },
  "philanthropist": {
    "pos": "n.",
    "en_def": "a rich person who gives money to help people",
    "cn_def": "慈善家"
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance made by or used in chemistry",
    "cn_def": "化學物質;化學品"
  },
  "pickaxe": {
    "pos": "n.",
    "en_def": "a heavy tool with a pointed metal head for breaking rock",
    "cn_def": "鶴嘴鋤;十字鎬"
  },
  "wool": {
    "pos": "n.",
    "en_def": "the soft hair of sheep, used to make cloth",
    "cn_def": "羊毛"
  },
  "pump": {
    "pos": "n.",
    "en_def": "a machine that pushes liquid or air in or out",
    "cn_def": "幫浦;抽水機"
  },
  "weaver": {
    "pos": "n.",
    "en_def": "a person who makes cloth by crossing threads on a loom",
    "cn_def": "織工;織布工"
  },
  "discontent": {
    "pos": "n.",
    "en_def": "a feeling of being unhappy with a situation",
    "cn_def": "不滿;不平"
  },
  "journal": {
    "pos": "n.",
    "en_def": "a serious magazine about a subject, often science",
    "cn_def": "期刊"
  },
  "strike": {
    "pos": "n.",
    "en_def": "a time when workers stop working to protest",
    "cn_def": "罷工"
  },
  "ore": {
    "pos": "n.",
    "en_def": "rock from which metal can be taken",
    "cn_def": "礦石"
  },
  "conglomerate": {
    "pos": "n.",
    "en_def": "a large company made of many different businesses",
    "cn_def": "企業集團"
  },
  "retail": {
    "pos": "n.",
    "en_def": "the sale of goods to the public in shops",
    "cn_def": "零售"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains stop for passengers",
    "cn_def": "車站"
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with special knowledge or skill",
    "cn_def": "專家"
  },
  "suffrage": {
    "pos": "n.",
    "en_def": "the right to vote in elections",
    "cn_def": "選舉權;投票權"
  },
  "tycoon": {
    "pos": "n.",
    "en_def": "a very rich and powerful businessperson",
    "cn_def": "大亨;巨頭"
  },
  "counterargument": {
    "pos": "n.",
    "en_def": "an argument against another argument",
    "cn_def": "反論;反駁論點"
  },
  "rail": {
    "pos": "n.",
    "en_def": "a train system; travel by train",
    "cn_def": "鐵路(運輸)"
  },
  "child labour": {
    "pos": "n.",
    "en_def": "the use of children as workers",
    "cn_def": "童工"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "the best thing since sliced bread": {
    "pos": "n.phr.",
    "en_def": "an excellent new invention or idea (humorous)",
    "cn_def": "最棒的新發明"
  },
  "overcrowded": {
    "pos": "adj.",
    "en_def": "having too many people in a space",
    "cn_def": "過度擁擠的"
  },
  "state-of-the-art": {
    "pos": "adj.",
    "en_def": "using the newest and best technology",
    "cn_def": "最先進的"
  },
  "unconventional": {
    "pos": "adj.",
    "en_def": "very different from the usual way",
    "cn_def": "不落俗套的;非傳統的"
  },
  "girder": {
    "pos": "n.",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "cn_def": "大樑;鋼樑"
  },
  "thread": {
    "pos": "n.",
    "en_def": "a long thin string of cotton or other material used for sewing",
    "cn_def": "線"
  },
  "phonograph": {
    "pos": "n.",
    "en_def": "an early machine for recording and playing sound",
    "cn_def": "留聲機(早期)"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a device for talking to someone far away",
    "cn_def": "電話"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say or write to give an opinion",
    "cn_def": "評論;意見"
  },
  "by-product": {
    "pos": "n.",
    "en_def": "something extra produced while making something else",
    "cn_def": "副產品"
  },
  "tyre": {
    "pos": "n.",
    "en_def": "a rubber ring filled with air around a wheel",
    "cn_def": "輪胎"
  },
  "canal": {
    "pos": "n.",
    "en_def": "a man-made river for boats",
    "cn_def": "運河"
  },
  "wagon": {
    "pos": "n.",
    "en_def": "a part of a train for carrying goods",
    "cn_def": "貨車車廂"
  }
};

const EXTRA_GLOSSES = {};
