// Topic 9 Subunit 8 Quiz Data: Academic Words 學術單字 1 (achieve – chemical)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S08 - Academic Words 學術單字 1 (achieve – chemical)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成;實現",
    "en_def": "to succeed in doing something after effort",
    "sentence": "Edison failed many times, but he finally {{BLANK}} his goal of making a light bulb that lasted for hours.",
    "cn": "愛迪生失敗了很多次,但他最終實現了做出能亮好幾個小時燈泡的目標。"
  },
  {
    "word": "administration",
    "pos": "n.",
    "cn_def": "行政;管理",
    "en_def": "the work of organising and running a business or government",
    "sentence": "The factory needed more office staff for {{BLANK}}, because it now had thousands of workers to pay.",
    "cn": "工廠需要更多辦公室人員負責行政,因為它現在有數千名工人要發薪水。"
  },
  {
    "word": "assistance",
    "pos": "n.",
    "cn_def": "協助;幫助",
    "en_def": "help or support",
    "sentence": "The old inventor needed {{BLANK}} to finish his last machine, so his daughter helped him every evening.",
    "cn": "年老的發明家需要協助來完成他的最後一台機器,所以他女兒每天晚上都幫他。"
  },
  {
    "word": "category",
    "pos": "n.",
    "cn_def": "類別;種類",
    "en_def": "a group of things that share the same features",
    "sentence": "The museum puts each invention into a {{BLANK}}, such as transport or communication, so visitors can find them easily.",
    "cn": "博物館把每項發明歸入一個類別,例如交通或通訊,讓參觀者容易找到。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區;群體",
    "en_def": "the people who live in one area",
    "sentence": "When the mine closed, the whole {{BLANK}} suffered, and many shops on the main street shut down.",
    "cn": "當礦坑關閉時,整個社區都受到影響,而大街上許多商店都關門了。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "connected with the art, ideas and customs of a society",
    "sentence": "Railways brought big {{BLANK}} changes, because people from different regions began to meet and share ideas.",
    "cn": "鐵路帶來了巨大的文化變遷,因為來自不同地區的人們開始相遇並交流想法。"
  },
  {
    "word": "institute",
    "pos": "n.",
    "cn_def": "研究所;學會",
    "en_def": "an organisation for research or education",
    "sentence": "She joined a research {{BLANK}} after university, and now she studies how batteries can store more energy.",
    "cn": "她大學畢業後加入了一個研究機構,而現在她研究電池如何儲存更多能量。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "期刊",
    "en_def": "a serious magazine about a subject, often science",
    "sentence": "The scientist published his results in a famous {{BLANK}}, and other researchers soon tested his ideas.",
    "cn": "那位科學家把研究結果發表在一份著名的期刊上,而其他研究者很快就測試了他的想法。"
  },
  {
    "word": "select",
    "pos": "v.",
    "cn_def": "挑選;選擇",
    "en_def": "to choose carefully from a group",
    "sentence": "The judges will {{BLANK}} the three best student inventions, and the winners will travel to the national fair.",
    "cn": "評審將挑選出三件最佳學生發明,而得獎者將前往參加全國展覽會。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論;意見",
    "en_def": "something you say or write to give an opinion",
    "sentence": "My teacher wrote a helpful {{BLANK}} on my report, so I added more facts about the steam engine.",
    "cn": "老師在我的報告上寫了一則有幫助的評語,所以我加入了更多關於蒸汽機的事實。"
  },
  {
    "word": "philosophy",
    "pos": "n.",
    "cn_def": "理念;哲學",
    "en_def": "a set of beliefs about how to live or work",
    "sentence": "The company's {{BLANK}} is to make simple products, and that is why its phones have so few buttons.",
    "cn": "這家公司的理念是製造簡單的產品,而這就是為什麼它的手機按鍵這麼少。"
  },
  {
    "word": "technology",
    "pos": "n.",
    "cn_def": "科技;技術",
    "en_def": "scientific knowledge used in practical ways",
    "sentence": "New {{BLANK}} changes how we work, but older people sometimes find it hard to keep up.",
    "cn": "新科技改變了我們工作的方式,但年長者有時覺得很難跟上。"
  },
  {
    "word": "access",
    "pos": "n.",
    "cn_def": "使用權;取得機會",
    "en_def": "the chance or right to use something",
    "sentence": "Poor families had no {{BLANK}} to clean water, so they often became sick from dirty wells.",
    "cn": "貧窮家庭無法取得乾淨的水,所以他們常因骯髒的井水而生病。"
  },
  {
    "word": "civil",
    "pos": "adj.",
    "cn_def": "公民的;民用的;土木(工程)的",
    "en_def": "connected with ordinary citizens or the government, not the army",
    "sentence": "The bridge was built by {{BLANK}} engineers, and it still carries heavy traffic after a hundred years.",
    "cn": "那座橋是由土木工程師建造的,而它在一百年後仍承載著繁忙的交通。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通;傳達",
    "en_def": "to share information with others",
    "sentence": "The telegraph helped people {{BLANK}} across countries, so business decisions could be made much faster.",
    "cn": "電報幫助人們跨國溝通,所以商業決策能做得快很多。"
  },
  {
    "word": "groundwork",
    "pos": "n.",
    "cn_def": "基礎;準備工作",
    "en_def": "early work that makes later progress possible",
    "sentence": "Early scientists laid the {{BLANK}} for modern electricity, so later inventors could build on their ideas.",
    "cn": "早期的科學家為現代電力打下了基礎,所以後來的發明家能在他們的想法上繼續發展。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "摘要;總結",
    "en_def": "a short statement of the main points",
    "sentence": "Please write a {{BLANK}} of the chapter in five sentences, and include the most important inventions.",
    "cn": "請用五個句子寫出這一章的摘要,並且包含最重要的發明。"
  },
  {
    "word": "academy",
    "pos": "n.",
    "cn_def": "學院;研究院",
    "en_def": "a school or society for special training or study",
    "sentence": "The Royal {{BLANK}} of Sciences gave him a medal, and his invention became famous across Europe.",
    "cn": "皇家科學院頒給他一枚獎章,而他的發明因此聞名全歐洲。"
  },
  {
    "word": "energy",
    "pos": "n.",
    "cn_def": "能源",
    "en_def": "power from sources like coal, oil or electricity",
    "sentence": "Coal was the main source of {{BLANK}} in the 1800s, but today we are trying to use cleaner sources.",
    "cn": "煤是1800年代主要的能源來源,但今天我們正嘗試使用更乾淨的來源。"
  },
  {
    "word": "liberal",
    "pos": "adj.",
    "cn_def": "自由主義的;開明的",
    "en_def": "supporting freedom and gradual social change",
    "sentence": "The {{BLANK}} politicians wanted to improve working conditions, but the factory owners fought against them.",
    "cn": "開明派政治人物想改善勞動條件,但工廠老闆們反對他們。"
  },
  {
    "word": "estate",
    "pos": "n.",
    "cn_def": "莊園;地產",
    "en_def": "a large area of land with a big house, owned by one person",
    "sentence": "The rich family owned a huge country {{BLANK}}, and they rarely visited the dirty factory towns.",
    "cn": "那個富有的家族擁有一座巨大的鄉間莊園,而他們很少造訪髒亂的工廠城鎮。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person with special knowledge or skill",
    "sentence": "We asked an {{BLANK}} to look at the old clock, and she said it was made in London in 1820.",
    "cn": "我們請一位專家看看這座老鐘,而她說它是1820年在倫敦製造的。"
  },
  {
    "word": "ministry",
    "pos": "n.",
    "cn_def": "(政府)部會",
    "en_def": "a government department",
    "sentence": "The {{BLANK}} of Transport plans to build a new railway line, but local farmers are against it.",
    "cn": "交通部計劃興建一條新鐵路線,但當地農民反對。"
  },
  {
    "word": "aid",
    "pos": "n.",
    "cn_def": "援助;救助",
    "en_def": "help, especially money or food given to people in need",
    "sentence": "The charity sent food {{BLANK}} to the miners' families, because the men had been on strike for weeks.",
    "cn": "慈善團體送了食物援助給礦工家庭,因為那些男人已經罷工好幾週了。"
  },
  {
    "word": "chemical",
    "pos": "n.",
    "cn_def": "化學物質;化學品",
    "en_def": "a substance made by or used in chemistry",
    "sentence": "The factory poured a dangerous {{BLANK}} into the river, and many fish died within a few days.",
    "cn": "工廠把一種危險的化學物質倒進河裡,而許多魚在幾天內就死了。"
  }
];

const MCQS = [
  {
    "q": "Edison failed many times, but he finally _____ his goal of making a light bulb that lasted for hours.",
    "options": [
      "found",
      "consume",
      "circulate",
      "achieve"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The factory needed more office staff for _____, because it now had thousands of workers to pay.",
    "options": [
      "barge",
      "administration",
      "artisan",
      "revolution"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The old inventor needed _____ to finish his last machine, so his daughter helped him every evening.",
    "options": [
      "assistance",
      "cholera",
      "metallurgy",
      "royalty"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The museum puts each invention into a _____, such as transport or communication, so visitors can find them easily.",
    "options": [
      "riot",
      "rivalry",
      "category",
      "girder"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "When the mine closed, the whole _____ suffered, and many shops on the main street shut down.",
    "options": [
      "community",
      "downturn",
      "enterprise",
      "imperialism"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Railways brought big _____ changes, because people from different regions began to meet and share ideas.",
    "options": [
      "geopolitical",
      "profitable",
      "state-of-the-art",
      "cultural"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "She joined a research _____ after university, and now she studies how batteries can store more energy.",
    "options": [
      "reputation",
      "institute",
      "automobile",
      "tycoon"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The scientist published his results in a famous _____, and other researchers soon tested his ideas.",
    "options": [
      "emancipation",
      "consumerism",
      "journal",
      "chemist"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The judges will _____ the three best student inventions, and the winners will travel to the national fair.",
    "options": [
      "outlaw",
      "import",
      "rust",
      "select"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "My teacher wrote a helpful _____ on my report, so I added more facts about the steam engine.",
    "options": [
      "emancipation",
      "comment",
      "modernity",
      "viaduct"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The company's _____ is to make simple products, and that is why its phones have so few buttons.",
    "options": [
      "virtue",
      "wire",
      "philosophy",
      "enterprise"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "New _____ changes how we work, but older people sometimes find it hard to keep up.",
    "options": [
      "technology",
      "mill",
      "discontent",
      "waste"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Poor families had no _____ to clean water, so they often became sick from dirty wells.",
    "options": [
      "voltage",
      "waste",
      "access",
      "girder"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The bridge was built by _____ engineers, and it still carries heavy traffic after a hundred years.",
    "options": [
      "definite",
      "civil",
      "grim",
      "applied"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The telegraph helped people _____ across countries, so business decisions could be made much faster.",
    "options": [
      "communicate",
      "restructure",
      "develop",
      "commercialise"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Early scientists laid the _____ for modern electricity, so later inventors could build on their ideas.",
    "options": [
      "girder",
      "rivalry",
      "trademark",
      "groundwork"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please write a _____ of the chapter in five sentences, and include the most important inventions.",
    "options": [
      "royalty",
      "summary",
      "reputation",
      "gravity"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The Royal _____ of Sciences gave him a medal, and his invention became famous across Europe.",
    "options": [
      "virtue",
      "revolution",
      "academy",
      "cylinder"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Coal was the main source of _____ in the 1800s, but today we are trying to use cleaner sources.",
    "options": [
      "energy",
      "wire",
      "engineering",
      "demand"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The _____ politicians wanted to improve working conditions, but the factory owners fought against them.",
    "options": [
      "transformative",
      "momentous",
      "classic",
      "liberal"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The rich family owned a huge country _____, and they rarely visited the dirty factory towns.",
    "options": [
      "pump",
      "estate",
      "tariff",
      "royalty"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "We asked an _____ to look at the old clock, and she said it was made in London in 1820.",
    "options": [
      "expert",
      "electricity",
      "commerce",
      "tycoon"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The _____ of Transport plans to build a new railway line, but local farmers are against it.",
    "options": [
      "consumerism",
      "telephone",
      "anvil",
      "ministry"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The charity sent food _____ to the miners' families, because the men had been on strike for weeks.",
    "options": [
      "riot",
      "sanitation",
      "aid",
      "inventor"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The factory poured a dangerous _____ into the river, and many fish died within a few days.",
    "options": [
      "chemical",
      "velocity",
      "chimney",
      "magnate"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing something after effort",
    "cn_def": "達成;實現"
  },
  "administration": {
    "pos": "n.",
    "en_def": "the work of organising and running a business or government",
    "cn_def": "行政;管理"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help or support",
    "cn_def": "協助;幫助"
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things that share the same features",
    "cn_def": "類別;種類"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區;群體"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "connected with the art, ideas and customs of a society",
    "cn_def": "文化的"
  },
  "institute": {
    "pos": "n.",
    "en_def": "an organisation for research or education",
    "cn_def": "研究所;學會"
  },
  "journal": {
    "pos": "n.",
    "en_def": "a serious magazine about a subject, often science",
    "cn_def": "期刊"
  },
  "select": {
    "pos": "v.",
    "en_def": "to choose carefully from a group",
    "cn_def": "挑選;選擇"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say or write to give an opinion",
    "cn_def": "評論;意見"
  },
  "philosophy": {
    "pos": "n.",
    "en_def": "a set of beliefs about how to live or work",
    "cn_def": "理念;哲學"
  },
  "technology": {
    "pos": "n.",
    "en_def": "scientific knowledge used in practical ways",
    "cn_def": "科技;技術"
  },
  "access": {
    "pos": "n.",
    "en_def": "the chance or right to use something",
    "cn_def": "使用權;取得機會"
  },
  "civil": {
    "pos": "adj.",
    "en_def": "connected with ordinary citizens or the government, not the army",
    "cn_def": "公民的;民用的;土木(工程)的"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information with others",
    "cn_def": "溝通;傳達"
  },
  "groundwork": {
    "pos": "n.",
    "en_def": "early work that makes later progress possible",
    "cn_def": "基礎;準備工作"
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "摘要;總結"
  },
  "academy": {
    "pos": "n.",
    "en_def": "a school or society for special training or study",
    "cn_def": "學院;研究院"
  },
  "energy": {
    "pos": "n.",
    "en_def": "power from sources like coal, oil or electricity",
    "cn_def": "能源"
  },
  "liberal": {
    "pos": "adj.",
    "en_def": "supporting freedom and gradual social change",
    "cn_def": "自由主義的;開明的"
  },
  "estate": {
    "pos": "n.",
    "en_def": "a large area of land with a big house, owned by one person",
    "cn_def": "莊園;地產"
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with special knowledge or skill",
    "cn_def": "專家"
  },
  "ministry": {
    "pos": "n.",
    "en_def": "a government department",
    "cn_def": "(政府)部會"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help, especially money or food given to people in need",
    "cn_def": "援助;救助"
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance made by or used in chemistry",
    "cn_def": "化學物質;化學品"
  },
  "found": {
    "pos": "v.",
    "en_def": "to start an organisation or company",
    "cn_def": "創立;建立"
  },
  "consume": {
    "pos": "v.",
    "en_def": "to use up fuel, energy or time",
    "cn_def": "消耗;耗費"
  },
  "circulate": {
    "pos": "v.",
    "en_def": "to move or pass around",
    "cn_def": "流通;傳閱"
  },
  "barge": {
    "pos": "n.",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "cn_def": "駁船"
  },
  "artisan": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a huge change in the way people live or work",
    "cn_def": "革命;重大變革"
  },
  "cholera": {
    "pos": "n.",
    "en_def": "a serious disease caused by dirty water",
    "cn_def": "霍亂"
  },
  "metallurgy": {
    "pos": "n.",
    "en_def": "the science of metals and how to use them",
    "cn_def": "冶金學"
  },
  "royalty": {
    "pos": "n.",
    "en_def": "money paid to an inventor or writer each time their work is used",
    "cn_def": "權利金;版稅"
  },
  "riot": {
    "pos": "n.",
    "en_def": "a violent protest by a crowd of people",
    "cn_def": "暴動"
  },
  "rivalry": {
    "pos": "n.",
    "en_def": "competition between people or groups",
    "cn_def": "競爭;對抗"
  },
  "girder": {
    "pos": "n.",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "cn_def": "大樑;鋼樑"
  },
  "downturn": {
    "pos": "n.",
    "en_def": "a fall in business or economic activity",
    "cn_def": "下滑;衰退"
  },
  "enterprise": {
    "pos": "n.",
    "en_def": "a business or company",
    "cn_def": "企業;事業"
  },
  "imperialism": {
    "pos": "n.",
    "en_def": "a system in which a powerful country controls others",
    "cn_def": "帝國主義"
  },
  "geopolitical": {
    "pos": "adj.",
    "en_def": "connected with how geography affects politics between countries",
    "cn_def": "地緣政治的"
  },
  "profitable": {
    "pos": "adj.",
    "en_def": "making a lot of money",
    "cn_def": "有利可圖的;賺錢的"
  },
  "state-of-the-art": {
    "pos": "adj.",
    "en_def": "using the newest and best technology",
    "cn_def": "最先進的"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion people have about someone or something",
    "cn_def": "聲譽;名聲"
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車"
  },
  "tycoon": {
    "pos": "n.",
    "en_def": "a very rich and powerful businessperson",
    "cn_def": "大亨;巨頭"
  },
  "emancipation": {
    "pos": "n.",
    "en_def": "the act of giving people freedom",
    "cn_def": "解放"
  },
  "consumerism": {
    "pos": "n.",
    "en_def": "the idea that buying lots of goods is good",
    "cn_def": "消費主義"
  },
  "chemist": {
    "pos": "n.",
    "en_def": "a scientist who studies substances and how they change",
    "cn_def": "化學家"
  },
  "outlaw": {
    "pos": "v.",
    "en_def": "to make something illegal",
    "cn_def": "宣布……為非法;禁止"
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring goods into a country from abroad",
    "cn_def": "進口"
  },
  "rust": {
    "pos": "v.",
    "en_def": "to become covered with a reddish layer when iron gets wet",
    "cn_def": "生鏽"
  },
  "modernity": {
    "pos": "n.",
    "en_def": "the quality of being modern",
    "cn_def": "現代性;現代化"
  },
  "viaduct": {
    "pos": "n.",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "cn_def": "高架橋"
  },
  "virtue": {
    "pos": "n.",
    "en_def": "a good quality in a person's character",
    "cn_def": "美德"
  },
  "wire": {
    "pos": "n.",
    "en_def": "a long thin piece of metal used to carry electricity",
    "cn_def": "電線;金屬線"
  },
  "mill": {
    "pos": "n.",
    "en_def": "a building with machines for making cloth or flour",
    "cn_def": "磨坊;紡織廠"
  },
  "discontent": {
    "pos": "n.",
    "en_def": "a feeling of being unhappy with a situation",
    "cn_def": "不滿;不平"
  },
  "waste": {
    "pos": "n.",
    "en_def": "material that is thrown away after use",
    "cn_def": "廢棄物;垃圾"
  },
  "voltage": {
    "pos": "n.",
    "en_def": "the force of an electric current, measured in volts",
    "cn_def": "電壓"
  },
  "definite": {
    "pos": "adj.",
    "en_def": "clear and certain",
    "cn_def": "明確的;肯定的"
  },
  "grim": {
    "pos": "adj.",
    "en_def": "unpleasant and depressing",
    "cn_def": "嚴酷的;陰沉的"
  },
  "applied": {
    "pos": "adj.",
    "en_def": "used in practical ways rather than just studied",
    "cn_def": "應用的"
  },
  "restructure": {
    "pos": "v.",
    "en_def": "to organise a company or system in a new way",
    "cn_def": "重組;改組"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to create or improve something over time",
    "cn_def": "開發;發展"
  },
  "commercialise": {
    "pos": "v.",
    "en_def": "to make money from a product or idea by selling it",
    "cn_def": "使商業化"
  },
  "trademark": {
    "pos": "n.",
    "en_def": "a name or sign that belongs to one company",
    "cn_def": "商標"
  },
  "gravity": {
    "pos": "n.",
    "en_def": "the force that pulls things towards the earth",
    "cn_def": "重力;地心引力"
  },
  "cylinder": {
    "pos": "n.",
    "en_def": "a tube-shaped part of an engine where a piston moves",
    "cn_def": "汽缸"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or wish of people to buy something",
    "cn_def": "需求"
  },
  "transformative": {
    "pos": "adj.",
    "en_def": "causing a great change",
    "cn_def": "具變革性的"
  },
  "momentous": {
    "pos": "adj.",
    "en_def": "very important, especially for the future",
    "cn_def": "極重要的;重大的"
  },
  "classic": {
    "pos": "adj.",
    "en_def": "very good and a typical example of its kind",
    "cn_def": "經典的"
  },
  "pump": {
    "pos": "n.",
    "en_def": "a machine that pushes liquid or air in or out",
    "cn_def": "幫浦;抽水機"
  },
  "tariff": {
    "pos": "n.",
    "en_def": "a tax on goods coming into a country",
    "cn_def": "關稅"
  },
  "electricity": {
    "pos": "n.",
    "en_def": "a form of energy used for light, heat and machines",
    "cn_def": "電;電力"
  },
  "commerce": {
    "pos": "n.",
    "en_def": "buying and selling, especially on a large scale",
    "cn_def": "商業;貿易"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a device for talking to someone far away",
    "cn_def": "電話"
  },
  "anvil": {
    "pos": "n.",
    "en_def": "a heavy iron block on which hot metal is hammered",
    "cn_def": "鐵砧"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "inventor": {
    "pos": "n.",
    "en_def": "a person who creates something new for the first time",
    "cn_def": "發明家"
  },
  "velocity": {
    "pos": "n.",
    "en_def": "the speed of something in a particular direction",
    "cn_def": "速度"
  },
  "chimney": {
    "pos": "n.",
    "en_def": "a tall pipe that carries smoke up and out of a building",
    "cn_def": "煙囪"
  },
  "magnate": {
    "pos": "n.",
    "en_def": "a rich and powerful person in a particular industry",
    "cn_def": "(某行業的)巨頭;大亨"
  }
};

const EXTRA_GLOSSES = {};
