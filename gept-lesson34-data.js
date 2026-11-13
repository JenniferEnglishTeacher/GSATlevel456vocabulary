// Lesson 34 Quiz Data: Insects, Small Creatures & Household Pets
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 34 - Insects, Small Creatures & Household Pets",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ant",
    "pos": "n.",
    "cn_def": "螞蟻",
    "en_def": "a tiny insect that lives in highly organized colonies underground",
    "sentence": "A long line of tiny black {{BLANK}}s worked together tirelessly to carry bread crumbs back to their underground nest.",
    "cn": "一長隊小黑螞蟻不知疲倦地齊心協力，把麵包屑搬回地下的蟻巢。"
  },
  {
    "word": "bug",
    "pos": "n. / v.",
    "cn_def": "小蟲；臭蟲；打擾",
    "en_def": "any small insect; an error in software; to annoy someone",
    "sentence": "During warm summer nights, many flying {{BLANK}}s gather around the porch light, so we keep the screen door shut.",
    "cn": "在溫暖的夏夜裡，許多飛蟲聚集在門廊燈周圍，所以我們把紗門緊閉。"
  },
  {
    "word": "butterfly",
    "pos": "n.",
    "cn_def": "蝴蝶",
    "en_def": "an insect with four large, usually brightly colored wings",
    "sentence": "A colorful {{BLANK}} landed gently on the blooming rose petal, fluttering its delicate wings in the morning sunshine.",
    "cn": "一隻五彩斑斕的蝴蝶輕輕停在盛開的玫瑰花瓣上，在晨光中輕輕拍動著嬌嫩的翅膀。"
  },
  {
    "word": "cockroach",
    "pos": "n.",
    "cn_def": "蟑螂",
    "en_def": "a large brown insect commonly found in houses and kitchens",
    "sentence": "When I switched on the kitchen light at midnight, an ugly brown {{BLANK}} scurried quickly behind the refrigerator.",
    "cn": "半夜我打開廚房電燈時，一隻難看的褐色蟑螂迅速竄到了冰箱後面躲藏。"
  },
  {
    "word": "insect",
    "pos": "n.",
    "cn_def": "昆蟲",
    "en_def": "a small creature with six legs and usually two pairs of wings",
    "sentence": "The biology teacher showed students how an {{BLANK}} breathes through tiny holes on the sides of its body.",
    "cn": "生物老師向學生們展示了一隻昆蟲如何透過身體兩側的微小氣孔來進行呼吸。"
  },
  {
    "word": "mosquito",
    "pos": "n.",
    "cn_def": "蚊子",
    "en_def": "a small flying insect that bites skin to drink blood",
    "sentence": "Remember to apply bug spray before walking near the swamp, or a hungry {{BLANK}} will bite your bare arms.",
    "cn": "走在沼澤附近前請記得噴防蚊液，否則飢餓的蚊子會叮咬你裸露的手臂。"
  },
  {
    "word": "snail",
    "pos": "n.",
    "cn_def": "蝸牛",
    "en_def": "a small soft creature with a spiral shell that moves slowly",
    "sentence": "After the afternoon rain shower, a little {{BLANK}} slid slowly across the wet garden wall leaving a shiny trail.",
    "cn": "午後陣雨過後，一隻小蝸牛在潮濕的花園圍牆上緩慢滑行，留下一道閃亮的黏液痕跡。"
  },
  {
    "word": "spider",
    "pos": "n.",
    "cn_def": "蜘蛛",
    "en_def": "an eight-legged creature that spins silk webs to catch prey",
    "sentence": "A patient {{BLANK}} spun an intricate circular web between two tree branches to catch flying flies for food.",
    "cn": "一隻有耐心的蜘蛛在兩根樹枝間織出了一張複雜精緻的圓形網，用來捕食飛蠅充飢。"
  },
  {
    "word": "kitten",
    "pos": "n.",
    "cn_def": "小貓；幼貓",
    "en_def": "a young baby cat",
    "sentence": "Our pet cat gave birth to four adorable {{BLANK}}s, and they spent all morning playing with a ball of wool.",
    "cn": "我們的寵物貓生下了四隻可愛的幼貓，牠們整個早晨都在玩一顆毛線球。"
  },
  {
    "word": "puppy",
    "pos": "n.",
    "cn_def": "小狗；幼犬",
    "en_def": "a young baby dog",
    "sentence": "For my brother's tenth birthday, grandfather brought home a fluffy golden retriever {{BLANK}} that wagged its tail happily.",
    "cn": "在弟弟十歲生日時，祖父帶回家一隻毛茸茸且開心搖著尾巴的黃金獵犬幼犬。"
  }
];

const MCQS = [
  {
    "q": "A dedicated colony of industrious ______ walked in a straight line across the kitchen counter toward the sugar jar.",
    "options": [
      "spiders",
      "snails",
      "ants",
      "puppies"
    ],
    "answer": 2,
    "cn": "一大群辛勤工作的螞蟻在廚房流理台上排成一條筆直的隊伍，朝著糖罐走去。 【選項解析】(A) ants 螞蟻  (B) snails 蝸牛  (C) spiders 蜘蛛  (D) puppies 小狗。colony of ants（蟻群）。",
    "vocabIndex": 0
  },
  {
    "q": "Because it carries a heavy spiral shell on its back, the garden ______ moves at an exceptionally slow pace.",
    "options": [
      "snail",
      "kitten",
      "mosquito",
      "butterfly"
    ],
    "answer": 0,
    "cn": "因為背上揹著沉重堅硬的螺旋外殼，花園蝸牛總是以格外緩慢的步調移動行進。 【選項解析】(A) kitten 幼貓  (B) snail 蝸牛  (C) mosquito 蚊子  (D) butterfly 蝴蝶。spiral shell on back, exceptionally slow（背螺旋殼且速度極慢）。",
    "vocabIndex": 6
  },
  {
    "q": "The eight-legged garden ______ sat motionless at the center of its web, waiting for an unsuspecting fly to arrive.",
    "options": [
      "puppy",
      "cockroach",
      "ant",
      "spider"
    ],
    "answer": 3,
    "cn": "這隻八隻腳的花園蜘蛛在蛛網中央紋絲不動地坐著，靜靜等待毫無防備的飛蠅到來。 【選項解析】(A) puppy 幼犬  (B) cockroach 蟑螂  (C) spider 蜘蛛  (D) ant 螞蟻。eight-legged, center of web（八隻腳且在網中央）。",
    "vocabIndex": 7
  },
  {
    "q": "When we opened the pet carrier, an adorable golden ______ stepped out hesitantly and barked softly at our family.",
    "options": [
      "insect",
      "puppy",
      "snail",
      "bug"
    ],
    "answer": 1,
    "cn": "當我們打開寵物提籃時，一隻可愛的金色小狗猶豫地走了出來，對著我們全家輕輕汪汪叫。 【選項解析】(A) insect 昆蟲  (B) bug 蟲子  (C) snail 蝸牛  (D) puppy 幼犬。barked softly（輕柔地吠叫）可知為小狗 puppy。",
    "vocabIndex": 9
  },
  {
    "q": "A sleeping ginger ______ curled up comfortably in a warm basket beside the fireplace and purred gently all evening.",
    "options": [
      "mosquito",
      "butterfly",
      "cockroach",
      "kitten"
    ],
    "answer": 3,
    "cn": "一隻正在睡覺的橘色小貓在壁爐旁溫暖的籃子裡舒服地蜷縮著，整晚發出溫柔的呼嚕聲。 【選項解析】(A) kitten 小貓  (B) butterfly 蝴蝶  (C) cockroach 蟑螂  (D) mosquito 蚊子。purred gently（發出呼嚕聲）為貓咪特徵。",
    "vocabIndex": 8
  },
  {
    "q": "In the sunny botanical garden, a magnificent yellow ______ fluttered effortlessly from one lavender flower to another.",
    "options": [
      "snail",
      "butterfly",
      "spider",
      "puppy"
    ],
    "answer": 1,
    "cn": "在陽光明媚的植物園裡，一隻美麗絢麗的黃色蝴蝶毫不費力地從一朵薰衣草花朵翩翩飛到另一朵。 【選項解析】(A) snail 蝸牛  (B) butterfly 蝴蝶  (C) spider 蜘蛛  (D) puppy 幼犬。fluttered from flower to flower（在花朵間翩翩飛舞）。",
    "vocabIndex": 2
  },
  {
    "q": "Standing pools of stagnant rainwater provide ideal breeding grounds where each female ______ can lay hundreds of eggs.",
    "options": [
      "kitten",
      "ant",
      "mosquito",
      "bug"
    ],
    "answer": 2,
    "cn": "積存不流動的雨水水窪提供了極佳的繁殖溫床，每隻母蚊子都能在其中產下數百顆卵。 【選項解析】(A) kitten 小貓  (B) ant 螞蟻  (C) mosquito 蚊子  (D) bug 蟲子。standing pools of rainwater breed mosquitoes（積水滋生蚊子）。",
    "vocabIndex": 5
  },
  {
    "q": "If you leave dirty greasy food dishes in the sink overnight, an unwelcome kitchen ______ will certainly come out to feed.",
    "options": [
      "cockroach",
      "snail",
      "spider",
      "puppy"
    ],
    "answer": 0,
    "cn": "如果你將油膩骯髒的餐盤留在水槽裡過夜，不受歡迎的廚房蟑螂肯定會大搖大擺出來覓食。 【選項解析】(A) puppy 小狗  (B) snail 蝸牛  (C) spider 蜘蛛  (D) cockroach 蟑螂。kitchen cockroach（廚房蟑螂）。",
    "vocabIndex": 3
  },
  {
    "q": "In general, every adult ______ has three main body parts and six legs, which clearly distinguishes it from a spider.",
    "options": [
      "snail",
      "kitten",
      "puppy",
      "insect"
    ],
    "answer": 3,
    "cn": "一般而言，每隻成年昆蟲都具備三個主要身體部分與六隻腳，這明顯將其與蜘蛛區隔開來。 【選項解析】(A) insect 昆蟲  (B) kitten 小貓  (C) puppy 小狗  (D) snail 蝸牛。three body parts, six legs（三段身體、六隻腳）是昆蟲定義。",
    "vocabIndex": 4
  },
  {
    "q": "Keep the screen windows tightly closed at dusk, or a persistent summer ______ will fly inside and buzz near your ear.",
    "options": [
      "bug",
      "kitten",
      "puppy",
      "snail"
    ],
    "answer": 0,
    "cn": "黃昏時務必將紗窗緊緊關閉，否則頑固的夏季飛蟲會飛進室內並在你的耳邊嗡嗡作響。 【選項解析】(A) kitten 小貓  (B) bug 飛蟲  (C) puppy 小狗  (D) snail 蝸牛。flying bug buzzes near ear（飛蟲在耳邊嗡嗡叫）。",
    "vocabIndex": 1
  },
  {
    "q": "After stepping outside in the damp grass after the rain, I almost stepped on a little ______ crawling along the path.",
    "options": [
      "puppy",
      "snail",
      "spider",
      "mosquito"
    ],
    "answer": 1,
    "cn": "雨後走到潮濕草地上時，我差點踩到了一隻正沿著小徑緩慢爬行的小蝸牛。 【選項解析】(A) puppy 小狗  (B) spider 蜘蛛  (C) snail 蝸牛  (D) mosquito 蚊子。damp grass after rain, crawling slowly（雨後草地爬行的小蝸牛）。",
    "vocabIndex": 6
  },
  {
    "q": "The mother dog lovingly washed each newborn ______ with her warm tongue until its soft fur was completely clean.",
    "options": [
      "kitten",
      "butterfly",
      "puppy",
      "cockroach"
    ],
    "answer": 2,
    "cn": "狗媽媽用溫暖的舌頭慈愛地為每一隻初生的小狗清理身體，直到牠們柔嫩的絨毛徹底乾淨。 【選項解析】(A) kitten 小貓  (B) butterfly 蝴蝶  (C) cockroach 蟑螂  (D) puppy 幼犬。mother dog cleans newborn puppy（母狗舔舐初生幼犬）。",
    "vocabIndex": 9
  },
  {
    "q": "The sweet honey spilled on the wooden porch attracted hundreds of red ______ within less than twenty minutes.",
    "options": [
      "ants",
      "snails",
      "spiders",
      "puppies"
    ],
    "answer": 0,
    "cn": "灑在木門廊上的甜蜂蜜，在不到二十分鐘的時間內就招引來了數以百計的紅火蟻/紅螞蟻。 【選項解析】(A) ants 螞蟻  (B) snails 蝸牛  (C) spiders 蜘蛛  (D) puppies 小狗。honey attracts ants（蜂蜜吸引螞蟻）。",
    "vocabIndex": 0
  },
  {
    "q": "A fluffy white ______ with bright blue eyes chased a falling autumn leaf across the living room carpet playfully.",
    "options": [
      "cockroach",
      "mosquito",
      "bug",
      "kitten"
    ],
    "answer": 3,
    "cn": "一隻擁有明亮藍色眼睛的毛茸茸白色小貓，在客廳地毯上頑皮地追逐著一片飄落的秋葉。 【選項解析】(A) cockroach 蟑螂  (B) kitten 小貓  (C) bug 蟲子  (D) mosquito 蚊子。fluffy kitten chases leaf（毛茸茸小貓追落葉）。",
    "vocabIndex": 8
  },
  {
    "q": "Ron has an intense fear of ______ and screamed loudly when he saw a hairy one crawling up the bathroom wall.",
    "options": [
      "butterflies",
      "snails",
      "spiders",
      "puppies"
    ],
    "answer": 2,
    "cn": "榮恩對蜘蛛懷有強烈的恐懼症，當他看到一隻多毛的蜘蛛正沿著浴室牆壁向上爬時不禁大聲尖叫。 【選項解析】(A) butterflies 蝴蝶  (B) snails 蝸牛  (C) spiders 蜘蛛  (D) puppies 小狗。fear of spiders（怕蜘蛛，符合哈利波特原著情節）。",
    "vocabIndex": 7
  },
  {
    "q": "Turn off the bright lights in the tent, or every flying ______ in the campsite will swarm directly toward our faces.",
    "options": [
      "puppy",
      "insect",
      "kitten",
      "snail"
    ],
    "answer": 1,
    "cn": "把帳篷裡的明亮照明關掉，否則營地裡的所有飛蟲都會直奔著我們的臉龐蜂擁而來。 【選項解析】(A) puppy 小狗  (B) snail 蝸牛  (C) kitten 小貓  (D) insect 昆蟲。flying insect swarms toward light（飛蟲撲向光源）。",
    "vocabIndex": 4
  },
  {
    "q": "That nasty ______ gave me an itchy red bite on my left ankle while I was reading a book on the patio yesterday.",
    "options": [
      "mosquito",
      "snail",
      "puppy",
      "butterfly"
    ],
    "answer": 0,
    "cn": "昨天當我在露台看書時，那隻可惡的蚊子在我左腳踝上狠狠叮咬了一口，奇癢無比。 【選項解析】(A) mosquito 蚊子  (B) snail 蝸牛  (C) puppy 小狗  (D) butterfly 蝴蝶。itchy red bite on ankle（腳踝被叮出紅腫發癢的包）。",
    "vocabIndex": 5
  },
  {
    "q": "When my sister opened the old cardboard box in the damp basement, a giant ______ ran out from beneath the newspapers.",
    "options": [
      "butterfly",
      "kitten",
      "puppy",
      "cockroach"
    ],
    "answer": 3,
    "cn": "當我姐姐打開潮濕地下室裡的舊紙箱時，一隻巨大的蟑螂立刻從報紙底下竄了出來。 【選項解析】(A) butterfly 蝴蝶  (B) cockroach 蟑螂  (C) puppy 小狗  (D) kitten 小貓。damp basement, giant cockroach（地下室竄出大蟑螂）。",
    "vocabIndex": 3
  },
  {
    "q": "Before transforming into a graceful flying ______, the creature spends its early life as a leaf-eating caterpillar.",
    "options": [
      "spider",
      "butterfly",
      "snail",
      "mosquito"
    ],
    "answer": 1,
    "cn": "在蛻變成為一隻優雅翩翩飛舞的蝴蝶之前，這個生物生命早期是一隻啃食樹葉的毛毛蟲。 【選項解析】(A) spider 蜘蛛  (B) snail 蝸牛  (C) butterfly 蝴蝶  (D) mosquito 蚊子。transforms from caterpillar into butterfly（毛毛蟲變蝴蝶）。",
    "vocabIndex": 2
  },
  {
    "q": "The software engineer stayed at the computer terminal until midnight trying to track down a critical programming ______.",
    "options": [
      "puppy",
      "kitten",
      "bug",
      "snail"
    ],
    "answer": 2,
    "cn": "軟體工程師一直留在電腦終端機前工作到半夜，試圖追蹤找出一個關鍵的程式錯誤漏洞。 【選項解析】(A) puppy 小狗  (B) kitten 小貓  (C) snail 蝸牛  (D) bug 程式錯誤。programming bug（軟體臭蟲/錯誤）。",
    "vocabIndex": 1
  },
  {
    "q": "The curious little boy used a magnifying glass to inspect the head and antennae of a tiny worker ______ on the pavement.",
    "options": [
      "snail",
      "spider",
      "puppy",
      "ant"
    ],
    "answer": 3,
    "cn": "好奇的小男孩拿著放大鏡，仔細觀察人行道上一隻小工蟻的頭部與觸角結構。 【選項解析】(A) ant 螞蟻  (B) spider 蜘蛛  (C) puppy 小狗  (D) snail 蝸牛。worker ant（工蟻）。",
    "vocabIndex": 0
  },
  {
    "q": "The pet shelter launched a campaign encouraging families to adopt an energetic rescue ______ instead of buying one.",
    "options": [
      "mosquito",
      "cockroach",
      "puppy",
      "bug"
    ],
    "answer": 2,
    "cn": "動物收容所發起了一項宣導活動，鼓勵各個家庭領養充滿活力的流浪收容幼犬以代替購買。 【選項解析】(A) mosquito 蚊子  (B) puppy 幼犬  (C) cockroach 蟑螂  (D) bug 蟲子。adopt a rescue puppy（領養救援幼犬）。",
    "vocabIndex": 9
  },
  {
    "q": "The silver track on the stone walkway showed where a slimy ______ had traveled slowly during the misty morning hours.",
    "options": [
      "puppy",
      "snail",
      "kitten",
      "spider"
    ],
    "answer": 1,
    "cn": "石板步道上留下的一道銀色黏液痕跡，顯示出一隻黏糊糊的蝸牛在晨霧繚繞的清晨曾緩慢爬過。 【選項解析】(A) puppy 小狗  (B) kitten 小貓  (C) snail 蝸牛  (D) spider 蜘蛛。silver track of slimy snail（蝸牛走過的銀白黏液痕跡）。",
    "vocabIndex": 6
  },
  {
    "q": "The clever mother cat carried each fragile newborn ______ one by one by the scruff of their necks to a safer dry box.",
    "options": [
      "kitten",
      "mosquito",
      "bug",
      "cockroach"
    ],
    "answer": 0,
    "cn": "聰明的母貓用嘴叼起脆弱初生小貓頸部的皮，一隻一隻地將牠們搬移到更安全乾燥的箱子裡。 【選項解析】(A) cockroach 蟑螂  (B) mosquito 蚊子  (C) bug 蟲子  (D) kitten 幼貓。mother cat moves newborn kitten（母貓搬動小貓）。",
    "vocabIndex": 8
  },
  {
    "q": "A hungry garden ______ constructed an invisible web between two tomato plants, trapping small garden pests.",
    "options": [
      "puppy",
      "spider",
      "kitten",
      "snail"
    ],
    "answer": 1,
    "cn": "一隻飢餓的花園蜘蛛在兩株番茄植物之間織出了一張隱形蛛網，用來誘捕小型花園害蟲。 【選項解析】(A) spider 蜘蛛  (B) puppy 小狗  (C) kitten 小貓  (D) snail 蝸牛。spider constructed web（蜘蛛結網）。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "ant": {
    "pos": "n.",
    "en_def": "a tiny insect that lives in highly organized colonies underground",
    "cn_def": "螞蟻",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tiny insect that lives in highly organized colonies underground",
        "cn_def": "螞蟻"
      }
    ]
  },
  "bug": {
    "pos": "n. / v.",
    "en_def": "any small insect; an error in software; to annoy someone",
    "cn_def": "小蟲；臭蟲；打擾",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "any small insect; an error in software; to annoy someone",
        "cn_def": "小蟲；臭蟲；打擾"
      }
    ]
  },
  "butterfly": {
    "pos": "n.",
    "en_def": "an insect with four large, usually brightly colored wings",
    "cn_def": "蝴蝶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an insect with four large, usually brightly colored wings",
        "cn_def": "蝴蝶"
      }
    ]
  },
  "cockroach": {
    "pos": "n.",
    "en_def": "a large brown insect commonly found in houses and kitchens",
    "cn_def": "蟑螂",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large brown insect commonly found in houses and kitchens",
        "cn_def": "蟑螂"
      }
    ]
  },
  "insect": {
    "pos": "n.",
    "en_def": "a small creature with six legs and usually two pairs of wings",
    "cn_def": "昆蟲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small creature with six legs and usually two pairs of wings",
        "cn_def": "昆蟲"
      }
    ]
  },
  "mosquito": {
    "pos": "n.",
    "en_def": "a small flying insect that bites skin to drink blood",
    "cn_def": "蚊子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small flying insect that bites skin to drink blood",
        "cn_def": "蚊子"
      }
    ]
  },
  "snail": {
    "pos": "n.",
    "en_def": "a small soft creature with a spiral shell that moves slowly",
    "cn_def": "蝸牛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small soft creature with a spiral shell that moves slowly",
        "cn_def": "蝸牛"
      }
    ]
  },
  "spider": {
    "pos": "n.",
    "en_def": "an eight-legged creature that spins silk webs to catch prey",
    "cn_def": "蜘蛛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an eight-legged creature that spins silk webs to catch prey",
        "cn_def": "蜘蛛"
      }
    ]
  },
  "kitten": {
    "pos": "n.",
    "en_def": "a young baby cat",
    "cn_def": "小貓；幼貓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a young baby cat",
        "cn_def": "小貓；幼貓"
      }
    ]
  },
  "puppy": {
    "pos": "n.",
    "en_def": "a young baby dog",
    "cn_def": "小狗；幼犬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a young baby dog",
        "cn_def": "小狗；幼犬"
      }
    ]
  },
  "spiders": {
    "pos": "",
    "en_def": "",
    "cn_def": "蜘蛛",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蜘蛛"
      }
    ]
  },
  "snails": {
    "pos": "",
    "en_def": "",
    "cn_def": "蝸牛",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蝸牛"
      }
    ]
  },
  "ants": {
    "pos": "",
    "en_def": "",
    "cn_def": "螞蟻",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "螞蟻"
      }
    ]
  },
  "puppies": {
    "pos": "",
    "en_def": "",
    "cn_def": "小狗",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "小狗"
      }
    ]
  },
  "butterflies": {
    "pos": "",
    "en_def": "",
    "cn_def": "蝴蝶",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蝴蝶"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
