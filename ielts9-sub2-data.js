// Topic 9 Subunit 2 Quiz Data: Factories, Mills & Textiles 工廠、磨坊與紡織
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S02 - Factories, Mills & Textiles 工廠、磨坊與紡織",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "factory",
    "pos": "n.",
    "cn_def": "工廠",
    "en_def": "a building where goods are made in large numbers by machines",
    "sentence": "My aunt works in a shoe {{BLANK}} near the harbour, and she often has to work late before the holidays.",
    "cn": "我阿姨在港口附近的一家鞋子工廠工作,而假期前她經常得加班。"
  },
  {
    "word": "mill",
    "pos": "n.",
    "cn_def": "磨坊;紡織廠",
    "en_def": "a building with machines for making cloth or flour",
    "sentence": "The cotton {{BLANK}} employed over a thousand people, but the noise of the machines was almost unbearable.",
    "cn": "那家棉紡廠雇用了一千多人,但機器的噪音幾乎令人無法忍受。"
  },
  {
    "word": "cotton",
    "pos": "n.",
    "cn_def": "棉花;棉",
    "en_def": "a soft white plant fibre used to make cloth",
    "sentence": "Britain imported huge amounts of raw {{BLANK}}, and its factories turned it into cheap cloth for the world.",
    "cn": "英國進口了大量的原棉,而它的工廠把棉花製成便宜的布料賣到全世界。"
  },
  {
    "word": "wool",
    "pos": "n.",
    "cn_def": "羊毛",
    "en_def": "the soft hair of sheep, used to make cloth",
    "sentence": "My grandmother knitted me a scarf from thick {{BLANK}}, and it keeps me warm on cold winter mornings.",
    "cn": "我奶奶用厚厚的羊毛為我織了一條圍巾,而它讓我在寒冷的冬天早晨保持溫暖。"
  },
  {
    "word": "spinning wheel",
    "pos": "n.",
    "cn_def": "紡車",
    "en_def": "a simple machine for making thread at home",
    "sentence": "Before factories, women made thread at home on a {{BLANK}}, but it took many hours to make enough.",
    "cn": "在工廠出現之前,婦女們在家用紡車紡線,但要花好幾個小時才能做出足夠的線。"
  },
  {
    "word": "spinning jenny",
    "pos": "n.",
    "cn_def": "珍妮紡紗機",
    "en_def": "an early machine that spun many threads at once",
    "sentence": "The {{BLANK}} could spin eight threads at once, so one worker could do the job of eight people.",
    "cn": "珍妮紡紗機一次可以紡八條線,所以一個工人就能做八個人的工作。"
  },
  {
    "word": "power loom",
    "pos": "n.",
    "cn_def": "動力織布機",
    "en_def": "a machine driven by power for weaving cloth",
    "sentence": "The {{BLANK}} wove cloth much faster than hand weavers, and many of them lost their jobs.",
    "cn": "動力織布機織布比手工織工快得多,而他們之中許多人因此失業。"
  },
  {
    "word": "yarn",
    "pos": "n.",
    "cn_def": "紗線;毛線",
    "en_def": "long thread used for knitting or weaving",
    "sentence": "She bought some bright red {{BLANK}} at the market, and she plans to knit a hat for her little brother.",
    "cn": "她在市場買了一些鮮紅色的毛線,而她打算為弟弟織一頂帽子。"
  },
  {
    "word": "thread",
    "pos": "n.",
    "cn_def": "線",
    "en_def": "a long thin string of cotton or other material used for sewing",
    "sentence": "The button on my coat fell off, so my mother sewed it back on with some black {{BLANK}}.",
    "cn": "我外套上的鈕扣掉了,所以我媽媽用一些黑色的線把它縫回去。"
  },
  {
    "word": "spindle",
    "pos": "n.",
    "cn_def": "紡錘;錠子",
    "en_def": "a thin rod on which thread is wound when it is spun",
    "sentence": "Each machine had hundreds of {{BLANK}} turning at once, and children had to fix the broken threads quickly.",
    "cn": "每台機器上有數百個錠子同時轉動,而孩子們必須迅速接好斷掉的線。"
  },
  {
    "word": "cloth",
    "pos": "n.",
    "cn_def": "布;布料",
    "en_def": "material made by weaving cotton, wool or other fibres",
    "sentence": "The tailor measured me carefully, and then he cut the dark blue {{BLANK}} to make my school uniform.",
    "cn": "裁縫仔細幫我量尺寸,然後他剪裁深藍色的布料來做我的校服。"
  },
  {
    "word": "garment",
    "pos": "n.",
    "cn_def": "衣服;服裝",
    "en_def": "a piece of clothing",
    "sentence": "Every {{BLANK}} in this shop is made from recycled material, but the prices are still quite reasonable.",
    "cn": "這家店的每一件衣服都是用回收材料做的,但價格仍相當合理。"
  },
  {
    "word": "sewing machine",
    "pos": "n.",
    "cn_def": "縫紉機",
    "en_def": "a machine for joining cloth with thread",
    "sentence": "My mum bought an old {{BLANK}} online, and now she makes curtains and bags for the whole family.",
    "cn": "我媽媽在網路上買了一台舊縫紉機,而現在她為全家人做窗簾和袋子。"
  },
  {
    "word": "weaver",
    "pos": "n.",
    "cn_def": "織工;織布工",
    "en_def": "a person who makes cloth by crossing threads on a loom",
    "sentence": "The village {{BLANK}} worked at home for centuries, but factory machines soon took away their income.",
    "cn": "村裡的織工幾世紀以來都在家工作,但工廠的機器很快就奪走了他們的收入。"
  },
  {
    "word": "cottage industry",
    "pos": "n.phr.",
    "cn_def": "家庭手工業",
    "en_def": "work done by people in their own homes",
    "sentence": "Making lace was once a {{BLANK}} in this area, and many families earned extra money from it.",
    "cn": "製作蕾絲曾經是這個地區的家庭手工業,而許多家庭藉此賺取額外收入。"
  },
  {
    "word": "workshop",
    "pos": "n.",
    "cn_def": "工作坊;作坊",
    "en_def": "a room or building where things are made or repaired",
    "sentence": "Grandpa spends every afternoon in his {{BLANK}}, and he has built three wooden chairs this year.",
    "cn": "爺爺每天下午都待在他的工作坊裡,而他今年已經做了三張木椅。"
  },
  {
    "word": "foreman",
    "pos": "n.",
    "cn_def": "工頭;領班",
    "en_def": "a worker who is in charge of a group of other workers",
    "sentence": "The {{BLANK}} shouted at the boys to work faster, but they were too tired after twelve hours.",
    "cn": "工頭對著男孩們大吼要他們做快一點,但工作十二小時後他們已經太累了。"
  },
  {
    "word": "mechanise",
    "pos": "v.",
    "cn_def": "使機械化",
    "en_def": "to start using machines to do work",
    "sentence": "Farmers began to {{BLANK}} their work in the 1800s, so fewer people were needed in the fields.",
    "cn": "農民在1800年代開始讓工作機械化,所以田裡需要的人手變少了。"
  },
  {
    "word": "mechanisation",
    "pos": "n.",
    "cn_def": "機械化",
    "en_def": "the use of machines to replace human or animal work",
    "sentence": "{{BLANK}} made cloth much cheaper, but it also caused many skilled workers to lose their jobs.",
    "cn": "機械化讓布料便宜很多,但也導致許多熟練工人失去工作。"
  },
  {
    "word": "mill owner",
    "pos": "n.",
    "cn_def": "工廠主;磨坊主",
    "en_def": "a person who owns a factory or mill",
    "sentence": "The rich {{BLANK}} built houses for his workers, while other owners did not care where workers lived.",
    "cn": "那位富有的工廠主為他的工人蓋了房子,而其他工廠主並不在乎工人住在哪裡。"
  },
  {
    "word": "raw material",
    "pos": "n.",
    "cn_def": "原料",
    "en_def": "a natural substance used to make products",
    "sentence": "Cotton was the main {{BLANK}} for the mills, so ships brought it across the ocean every week.",
    "cn": "棉花是工廠的主要原料,所以船隻每週都把它運過大洋。"
  },
  {
    "word": "finished goods",
    "pos": "n.",
    "cn_def": "成品",
    "en_def": "products that are ready to be sold",
    "sentence": "The factory turned cotton into {{BLANK}}, and trains carried them to shops all over the country.",
    "cn": "工廠把棉花變成成品,而火車把它們運到全國各地的商店。"
  },
  {
    "word": "manufacturer",
    "pos": "n.",
    "cn_def": "製造商",
    "en_def": "a company that makes goods in large amounts",
    "sentence": "This toy {{BLANK}} moved its factory to another country, because the costs there were much lower.",
    "cn": "這家玩具製造商把工廠遷到另一個國家,因為那裡的成本低得多。"
  },
  {
    "word": "workbench",
    "pos": "n.",
    "cn_def": "工作檯",
    "en_def": "a strong table used for making or repairing things",
    "sentence": "He laid all the clock parts on the {{BLANK}}, and he slowly put them back together one by one.",
    "cn": "他把所有的時鐘零件攤在工作檯上,然後慢慢地一個一個把它們組裝回去。"
  },
  {
    "word": "artisan",
    "pos": "n.",
    "cn_def": "工匠;手藝人",
    "en_def": "a skilled person who makes things by hand",
    "sentence": "This market sells bread from a local {{BLANK}}, and people queue early because it sells out fast.",
    "cn": "這個市場販售當地一位手藝人做的麵包,而人們很早就排隊,因為很快就賣光了。"
  },
  {
    "word": "handmade",
    "pos": "adj.",
    "cn_def": "手工製作的",
    "en_def": "made by hand, not by machine",
    "sentence": "Her {{BLANK}} pottery is more expensive than factory cups, but every piece has its own special pattern.",
    "cn": "她手工製作的陶器比工廠做的杯子貴,但每一件都有自己獨特的圖案。"
  },
  {
    "word": "machine-made",
    "pos": "adj.",
    "cn_def": "機器製造的",
    "en_def": "produced by a machine, not by hand",
    "sentence": "{{BLANK}} socks were much cheaper than knitted ones, so poor families could finally afford new clothes.",
    "cn": "機器製造的襪子比手織的便宜很多,所以貧窮的家庭終於買得起新衣服。"
  },
  {
    "word": "cotton gin",
    "pos": "n.",
    "cn_def": "軋棉機",
    "en_def": "a machine that separates cotton fibres from seeds",
    "sentence": "The {{BLANK}} cleaned cotton very quickly, but sadly it also increased the demand for slave labour.",
    "cn": "軋棉機能很快地清理棉花,但可悲的是它也增加了對奴隸勞動的需求。"
  },
  {
    "word": "interchangeable parts",
    "pos": "n.phr.",
    "cn_def": "可互換零件",
    "en_def": "identical parts that can replace each other easily",
    "sentence": "Guns made with {{BLANK}} were easy to repair, because a broken piece could simply be swapped.",
    "cn": "用可互換零件製造的槍很容易修理,因為壞掉的零件只要直接換掉就好。"
  }
];

const MCQS = [
  {
    "q": "My aunt works in a shoe _____ near the harbour, and she often has to work late before the holidays.",
    "options": [
      "factory",
      "piston",
      "foundry",
      "downside"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The cotton _____ employed over a thousand people, but the noise of the machines was almost unbearable.",
    "options": [
      "railway",
      "congestion",
      "shareholder",
      "mill"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Britain imported huge amounts of raw _____, and its factories turned it into cheap cloth for the world.",
    "options": [
      "capitalist",
      "recreation",
      "cotton",
      "modernity"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "My grandmother knitted me a scarf from thick _____, and it keeps me warm on cold winter mornings.",
    "options": [
      "apprentice",
      "wool",
      "emergence",
      "conglomerate"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Before factories, women made thread at home on a _____, but it took many hours to make enough.",
    "options": [
      "factory worker",
      "intellectual property",
      "spinning wheel",
      "wrought iron"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The _____ could spin eight threads at once, so one worker could do the job of eight people.",
    "options": [
      "world's fair",
      "spinning jenny",
      "the best thing since sliced bread",
      "light bulb"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The _____ wove cloth much faster than hand weavers, and many of them lost their jobs.",
    "options": [
      "spark plug",
      "steam engine",
      "chimney sweep",
      "power loom"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "She bought some bright red _____ at the market, and she plans to knit a hat for her little brother.",
    "options": [
      "yarn",
      "signal",
      "steamship",
      "sanitation"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The button on my coat fell off, so my mother sewed it back on with some black _____.",
    "options": [
      "metallurgy",
      "compound",
      "suffrage",
      "thread"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Each machine had hundreds of _____ turning at once, and children had to fix the broken threads quickly.",
    "options": [
      "litigation",
      "spindle",
      "downside",
      "vaccine"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The tailor measured me carefully, and then he cut the dark blue _____ to make my school uniform.",
    "options": [
      "boiler",
      "turbine",
      "cloth",
      "piston"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Every _____ in this shop is made from recycled material, but the prices are still quite reasonable.",
    "options": [
      "garment",
      "experiment",
      "towpath",
      "tariff"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "My mum bought an old _____ online, and now she makes curtains and bags for the whole family.",
    "options": [
      "standard of living",
      "sewing machine",
      "cast iron",
      "tennis racket"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The village _____ worked at home for centuries, but factory machines soon took away their income.",
    "options": [
      "stethoscope",
      "tragedy",
      "weaver",
      "magnet"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Making lace was once a _____ in this area, and many families earned extra money from it.",
    "options": [
      "mine shaft",
      "water wheel",
      "carbon fibre",
      "cottage industry"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Grandpa spends every afternoon in his _____, and he has built three wooden chairs this year.",
    "options": [
      "workshop",
      "shareholder",
      "capitalism",
      "steel"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The _____ shouted at the boys to work faster, but they were too tired after twelve hours.",
    "options": [
      "capital",
      "engineering",
      "foreman",
      "signal"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Farmers began to _____ their work in the 1800s, so fewer people were needed in the fields.",
    "options": [
      "spread",
      "mechanise",
      "invent",
      "outlaw"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "_____ made cloth much cheaper, but it also caused many skilled workers to lose their jobs.",
    "options": [
      "mechanisation",
      "brilliance",
      "sketch",
      "congestion"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The rich _____ built houses for his workers, while other owners did not care where workers lived.",
    "options": [
      "working class",
      "factory worker",
      "spark plug",
      "mill owner"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Cotton was the main _____ for the mills, so ships brought it across the ocean every week.",
    "options": [
      "spark plug",
      "raw material",
      "cast iron",
      "standard of living"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The factory turned cotton into _____, and trains carried them to shops all over the country.",
    "options": [
      "finished goods",
      "safety lamp",
      "steam car",
      "Morse code"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "This toy _____ moved its factory to another country, because the costs there were much lower.",
    "options": [
      "impurity",
      "graphite",
      "manufacturer",
      "telephone"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "He laid all the clock parts on the _____, and he slowly put them back together one by one.",
    "options": [
      "pattern",
      "comment",
      "chemical",
      "workbench"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "This market sells bread from a local _____, and people queue early because it sells out fast.",
    "options": [
      "trailblazer",
      "artisan",
      "capitalism",
      "stethoscope"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Her _____ pottery is more expensive than factory cups, but every piece has its own special pattern.",
    "options": [
      "handmade",
      "populous",
      "harmful",
      "visionary"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "_____ socks were much cheaper than knitted ones, so poor families could finally afford new clothes.",
    "options": [
      "appalling",
      "cultural",
      "machine-made",
      "far-reaching"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The _____ cleaned cotton very quickly, but sadly it also increased the demand for slave labour.",
    "options": [
      "blast furnace",
      "spark plug",
      "coal mine",
      "cotton gin"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Guns made with _____ were easy to repair, because a broken piece could simply be swapped.",
    "options": [
      "middle class",
      "interchangeable parts",
      "canned food",
      "spark plug"
    ],
    "answer": 1,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "factory": {
    "pos": "n.",
    "en_def": "a building where goods are made in large numbers by machines",
    "cn_def": "工廠"
  },
  "mill": {
    "pos": "n.",
    "en_def": "a building with machines for making cloth or flour",
    "cn_def": "磨坊;紡織廠"
  },
  "cotton": {
    "pos": "n.",
    "en_def": "a soft white plant fibre used to make cloth",
    "cn_def": "棉花;棉"
  },
  "wool": {
    "pos": "n.",
    "en_def": "the soft hair of sheep, used to make cloth",
    "cn_def": "羊毛"
  },
  "spinning wheel": {
    "pos": "n.",
    "en_def": "a simple machine for making thread at home",
    "cn_def": "紡車"
  },
  "spinning jenny": {
    "pos": "n.",
    "en_def": "an early machine that spun many threads at once",
    "cn_def": "珍妮紡紗機"
  },
  "power loom": {
    "pos": "n.",
    "en_def": "a machine driven by power for weaving cloth",
    "cn_def": "動力織布機"
  },
  "yarn": {
    "pos": "n.",
    "en_def": "long thread used for knitting or weaving",
    "cn_def": "紗線;毛線"
  },
  "thread": {
    "pos": "n.",
    "en_def": "a long thin string of cotton or other material used for sewing",
    "cn_def": "線"
  },
  "spindle": {
    "pos": "n.",
    "en_def": "a thin rod on which thread is wound when it is spun",
    "cn_def": "紡錘;錠子"
  },
  "cloth": {
    "pos": "n.",
    "en_def": "material made by weaving cotton, wool or other fibres",
    "cn_def": "布;布料"
  },
  "garment": {
    "pos": "n.",
    "en_def": "a piece of clothing",
    "cn_def": "衣服;服裝"
  },
  "sewing machine": {
    "pos": "n.",
    "en_def": "a machine for joining cloth with thread",
    "cn_def": "縫紉機"
  },
  "weaver": {
    "pos": "n.",
    "en_def": "a person who makes cloth by crossing threads on a loom",
    "cn_def": "織工;織布工"
  },
  "cottage industry": {
    "pos": "n.phr.",
    "en_def": "work done by people in their own homes",
    "cn_def": "家庭手工業"
  },
  "workshop": {
    "pos": "n.",
    "en_def": "a room or building where things are made or repaired",
    "cn_def": "工作坊;作坊"
  },
  "foreman": {
    "pos": "n.",
    "en_def": "a worker who is in charge of a group of other workers",
    "cn_def": "工頭;領班"
  },
  "mechanise": {
    "pos": "v.",
    "en_def": "to start using machines to do work",
    "cn_def": "使機械化"
  },
  "mechanisation": {
    "pos": "n.",
    "en_def": "the use of machines to replace human or animal work",
    "cn_def": "機械化"
  },
  "mill owner": {
    "pos": "n.",
    "en_def": "a person who owns a factory or mill",
    "cn_def": "工廠主;磨坊主"
  },
  "raw material": {
    "pos": "n.",
    "en_def": "a natural substance used to make products",
    "cn_def": "原料"
  },
  "finished goods": {
    "pos": "n.",
    "en_def": "products that are ready to be sold",
    "cn_def": "成品"
  },
  "manufacturer": {
    "pos": "n.",
    "en_def": "a company that makes goods in large amounts",
    "cn_def": "製造商"
  },
  "workbench": {
    "pos": "n.",
    "en_def": "a strong table used for making or repairing things",
    "cn_def": "工作檯"
  },
  "artisan": {
    "pos": "n.",
    "en_def": "a skilled person who makes things by hand",
    "cn_def": "工匠;手藝人"
  },
  "handmade": {
    "pos": "adj.",
    "en_def": "made by hand, not by machine",
    "cn_def": "手工製作的"
  },
  "machine-made": {
    "pos": "adj.",
    "en_def": "produced by a machine, not by hand",
    "cn_def": "機器製造的"
  },
  "cotton gin": {
    "pos": "n.",
    "en_def": "a machine that separates cotton fibres from seeds",
    "cn_def": "軋棉機"
  },
  "interchangeable parts": {
    "pos": "n.phr.",
    "en_def": "identical parts that can replace each other easily",
    "cn_def": "可互換零件"
  },
  "piston": {
    "pos": "n.",
    "en_def": "a part that moves up and down inside a tube in an engine",
    "cn_def": "活塞"
  },
  "foundry": {
    "pos": "n.",
    "en_def": "a factory where metal is melted and shaped",
    "cn_def": "鑄造廠"
  },
  "downside": {
    "pos": "n.",
    "en_def": "a disadvantage",
    "cn_def": "缺點;壞處"
  },
  "railway": {
    "pos": "n.",
    "en_def": "a system of tracks and trains for moving people and goods",
    "cn_def": "鐵路"
  },
  "congestion": {
    "pos": "n.",
    "en_def": "too much traffic in one place",
    "cn_def": "擁擠;壅塞"
  },
  "shareholder": {
    "pos": "n.",
    "en_def": "a person who owns part of a company",
    "cn_def": "股東"
  },
  "capitalist": {
    "pos": "n.",
    "en_def": "a person who uses money to own businesses and make profit",
    "cn_def": "資本家"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities done for fun when you are not working",
    "cn_def": "娛樂;消遣"
  },
  "modernity": {
    "pos": "n.",
    "en_def": "the quality of being modern",
    "cn_def": "現代性;現代化"
  },
  "apprentice": {
    "pos": "n.",
    "en_def": "a young person learning a skill from an expert",
    "cn_def": "學徒"
  },
  "emergence": {
    "pos": "n.",
    "en_def": "the process of starting to exist or become known",
    "cn_def": "出現;興起"
  },
  "conglomerate": {
    "pos": "n.",
    "en_def": "a large company made of many different businesses",
    "cn_def": "企業集團"
  },
  "factory worker": {
    "pos": "n.",
    "en_def": "a person who works in a factory",
    "cn_def": "工廠工人"
  },
  "intellectual property": {
    "pos": "n.phr.",
    "en_def": "ideas and inventions that legally belong to their creator",
    "cn_def": "智慧財產"
  },
  "wrought iron": {
    "pos": "n.",
    "en_def": "iron that is heated and bent into shapes by hand",
    "cn_def": "鍛鐵;熟鐵"
  },
  "world's fair": {
    "pos": "n.",
    "en_def": "a large international exhibition of new products and ideas",
    "cn_def": "世界博覽會"
  },
  "the best thing since sliced bread": {
    "pos": "n.phr.",
    "en_def": "an excellent new invention or idea (humorous)",
    "cn_def": "最棒的新發明"
  },
  "light bulb": {
    "pos": "n.",
    "en_def": "a glass object that gives light when electricity passes through",
    "cn_def": "燈泡"
  },
  "spark plug": {
    "pos": "n.",
    "en_def": "a small part that makes a spark to light fuel in an engine",
    "cn_def": "火星塞"
  },
  "steam engine": {
    "pos": "n.",
    "en_def": "a machine that uses steam to make power",
    "cn_def": "蒸汽機"
  },
  "chimney sweep": {
    "pos": "n.",
    "en_def": "a person who cleans chimneys",
    "cn_def": "掃煙囪工人"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, light or wave that carries information",
    "cn_def": "訊號;信號"
  },
  "steamship": {
    "pos": "n.",
    "en_def": "a large ship driven by steam power",
    "cn_def": "蒸汽船;輪船"
  },
  "sanitation": {
    "pos": "n.",
    "en_def": "systems for clean water and removing waste",
    "cn_def": "衛生設施;公共衛生"
  },
  "metallurgy": {
    "pos": "n.",
    "en_def": "the science of metals and how to use them",
    "cn_def": "冶金學"
  },
  "compound": {
    "pos": "n.",
    "en_def": "a substance made of two or more elements",
    "cn_def": "化合物"
  },
  "suffrage": {
    "pos": "n.",
    "en_def": "the right to vote in elections",
    "cn_def": "選舉權;投票權"
  },
  "litigation": {
    "pos": "n.",
    "en_def": "the process of taking a case to court",
    "cn_def": "訴訟"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance that protects people from a disease",
    "cn_def": "疫苗"
  },
  "boiler": {
    "pos": "n.",
    "en_def": "a large container where water is heated into steam",
    "cn_def": "鍋爐"
  },
  "turbine": {
    "pos": "n.",
    "en_def": "a machine with blades that spin to produce power",
    "cn_def": "渦輪機"
  },
  "experiment": {
    "pos": "n.",
    "en_def": "a scientific test to find out something",
    "cn_def": "實驗"
  },
  "towpath": {
    "pos": "n.",
    "en_def": "a path beside a canal where horses once pulled boats",
    "cn_def": "(運河邊的)縴道"
  },
  "tariff": {
    "pos": "n.",
    "en_def": "a tax on goods coming into a country",
    "cn_def": "關稅"
  },
  "standard of living": {
    "pos": "n.phr.",
    "en_def": "how comfortable and wealthy people's lives are",
    "cn_def": "生活水準"
  },
  "cast iron": {
    "pos": "n.",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "cn_def": "鑄鐵"
  },
  "tennis racket": {
    "pos": "n.",
    "en_def": "a bat with strings used to hit a tennis ball",
    "cn_def": "網球拍"
  },
  "stethoscope": {
    "pos": "n.",
    "en_def": "a tool doctors use to listen to your heart and breathing",
    "cn_def": "聽診器"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a very sad event, often with death",
    "cn_def": "悲劇;慘劇"
  },
  "magnet": {
    "pos": "n.",
    "en_def": "a piece of metal that pulls iron towards it",
    "cn_def": "磁鐵"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "water wheel": {
    "pos": "n.",
    "en_def": "a large wheel turned by flowing water to power machines",
    "cn_def": "水車"
  },
  "carbon fibre": {
    "pos": "n.",
    "en_def": "a very strong light material made from thin threads of carbon",
    "cn_def": "碳纖維"
  },
  "capitalism": {
    "pos": "n.",
    "en_def": "an economic system based on private business and profit",
    "cn_def": "資本主義"
  },
  "steel": {
    "pos": "n.",
    "en_def": "a strong metal made from iron and carbon",
    "cn_def": "鋼"
  },
  "capital": {
    "pos": "n.",
    "en_def": "money used to start or grow a business",
    "cn_def": "資本;資金"
  },
  "engineering": {
    "pos": "n.",
    "en_def": "the work of designing and building machines, roads and bridges",
    "cn_def": "工程(學)"
  },
  "spread": {
    "pos": "v.",
    "en_def": "to move or reach a larger area",
    "cn_def": "擴散;傳播"
  },
  "invent": {
    "pos": "v.",
    "en_def": "to make or design something that did not exist before",
    "cn_def": "發明"
  },
  "outlaw": {
    "pos": "v.",
    "en_def": "to make something illegal",
    "cn_def": "宣布……為非法;禁止"
  },
  "brilliance": {
    "pos": "n.",
    "en_def": "great intelligence or skill",
    "cn_def": "才華;卓越"
  },
  "sketch": {
    "pos": "n.",
    "en_def": "a quick simple drawing",
    "cn_def": "草圖;素描"
  },
  "working class": {
    "pos": "n.",
    "en_def": "people who do physical or factory work for wages",
    "cn_def": "勞工階級"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "steam car": {
    "pos": "n.",
    "en_def": "a car that uses a steam engine",
    "cn_def": "蒸汽汽車"
  },
  "morse code": {
    "pos": "n.",
    "en_def": "a code of short and long signals for letters",
    "cn_def": "摩斯密碼"
  },
  "impurity": {
    "pos": "n.",
    "en_def": "an unwanted substance mixed into something",
    "cn_def": "雜質"
  },
  "graphite": {
    "pos": "n.",
    "en_def": "a soft black form of carbon used in pencils and sports equipment",
    "cn_def": "石墨"
  },
  "telephone": {
    "pos": "n.",
    "en_def": "a device for talking to someone far away",
    "cn_def": "電話"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a regular way in which something happens",
    "cn_def": "模式;規律"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say or write to give an opinion",
    "cn_def": "評論;意見"
  },
  "chemical": {
    "pos": "n.",
    "en_def": "a substance made by or used in chemistry",
    "cn_def": "化學物質;化學品"
  },
  "trailblazer": {
    "pos": "n.",
    "en_def": "a person who is the first to do something new",
    "cn_def": "開拓者;先驅"
  },
  "populous": {
    "pos": "adj.",
    "en_def": "having a large population",
    "cn_def": "人口稠密的"
  },
  "harmful": {
    "pos": "adj.",
    "en_def": "causing damage or injury",
    "cn_def": "有害的"
  },
  "visionary": {
    "pos": "adj.",
    "en_def": "having bold, original ideas about the future",
    "cn_def": "有遠見的"
  },
  "appalling": {
    "pos": "adj.",
    "en_def": "shockingly bad",
    "cn_def": "駭人的;極糟的"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "connected with the art, ideas and customs of a society",
    "cn_def": "文化的"
  },
  "far-reaching": {
    "pos": "adj.",
    "en_def": "having a big effect on many things",
    "cn_def": "影響深遠的"
  },
  "blast furnace": {
    "pos": "n.",
    "en_def": "a huge furnace where hot air helps melt iron from rock",
    "cn_def": "高爐;鼓風爐"
  },
  "coal mine": {
    "pos": "n.",
    "en_def": "a place underground where coal is dug out",
    "cn_def": "煤礦"
  },
  "middle class": {
    "pos": "n.",
    "en_def": "people with average income, such as teachers and shopkeepers",
    "cn_def": "中產階級"
  },
  "canned food": {
    "pos": "n.",
    "en_def": "food kept in sealed metal containers",
    "cn_def": "罐頭食品"
  }
};

const EXTRA_GLOSSES = {};
