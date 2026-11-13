// Unit 6 Quiz Data: alert – worm
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "4000 Essential Words Book 3 U06 - alert – worm",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "alert",
    "pos": "v.",
    "cn_def": "警告；提醒",
    "en_def": "to warn someone about a danger or problem",
    "sentence": "The loud bell will {{BLANK}} everyone in the building if there is a fire.",
    "cn": "如果發生火災，響亮的鈴聲會警告大樓裡的每個人。"
  },
  {
    "word": "broadcast",
    "pos": "n.",
    "cn_def": "廣播節目；播出",
    "en_def": "a program on television or radio",
    "sentence": "Millions of people watched the live {{BLANK}} of the final game on TV.",
    "cn": "數百萬人在電視上收看決賽的現場轉播。"
  },
  {
    "word": "bulletin",
    "pos": "n.",
    "cn_def": "公報；快報",
    "en_def": "a short news report on television or radio",
    "sentence": "The program was stopped for a special news {{BLANK}} about the earthquake.",
    "cn": "節目中斷，插播一則有關地震的特別新聞快報。"
  },
  {
    "word": "bump",
    "pos": "n.",
    "cn_def": "腫塊；隆起",
    "en_def": "a small raised area on the body or on a surface",
    "sentence": "He hit his head on the door and now has a big {{BLANK}} on it.",
    "cn": "他的頭撞到門，現在腫了一個大包。"
  },
  {
    "word": "chop",
    "pos": "v.",
    "cn_def": "砍；劈；切碎",
    "en_def": "to cut something into pieces with a knife or an ax",
    "sentence": "Please {{BLANK}} the onions and carrots into small pieces for the soup.",
    "cn": "請把洋蔥和紅蘿蔔切成小塊來煮湯。"
  },
  {
    "word": "closet",
    "pos": "n.",
    "cn_def": "壁櫥；衣櫥",
    "en_def": "a small room or tall cupboard where clothes are kept",
    "sentence": "She hung her new dresses in the {{BLANK}} and put her shoes on the floor.",
    "cn": "她把新洋裝掛進衣櫥，把鞋子放在地上。"
  },
  {
    "word": "console",
    "pos": "v.",
    "cn_def": "安慰",
    "en_def": "to make someone who is sad feel better",
    "sentence": "Nothing could {{BLANK}} the little boy after his dog died.",
    "cn": "小男孩的狗死後，沒有任何事能安慰他。"
  },
  {
    "word": "district",
    "pos": "n.",
    "cn_def": "區域；地區",
    "en_def": "a part of a city or country",
    "sentence": "He works in the business {{BLANK}}, where all the big banks are.",
    "cn": "他在商業區工作，所有大銀行都在那裡。"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "cn_def": "抽屜",
    "en_def": "a box that slides in and out of a desk or cupboard",
    "sentence": "I keep my socks in the top {{BLANK}} and my T-shirts in the bottom one.",
    "cn": "我把襪子放在最上層的抽屜，T恤放在最下層。"
  },
  {
    "word": "endure",
    "pos": "v.",
    "cn_def": "忍受；忍耐",
    "en_def": "to suffer something painful or hard for a long time",
    "sentence": "The soldiers had to {{BLANK}} cold, hunger, and fear during the long war.",
    "cn": "士兵們在漫長的戰爭中必須忍受寒冷、飢餓和恐懼。"
  },
  {
    "word": "execute",
    "pos": "v.",
    "cn_def": "處決；執行",
    "en_def": "to kill someone as a legal punishment; to carry out a plan",
    "sentence": "In the past, kings would {{BLANK}} people who tried to take their power.",
    "cn": "在過去，國王會處決企圖奪權的人。"
  },
  {
    "word": "grasp",
    "pos": "v.",
    "cn_def": "抓緊；握住",
    "en_def": "to take hold of something firmly",
    "sentence": "The baby reached out to {{BLANK}} her mother's finger with her tiny hand.",
    "cn": "嬰兒伸出小手抓住媽媽的手指。"
  },
  {
    "word": "rear",
    "pos": "n.",
    "cn_def": "後部；背面",
    "en_def": "the back part of something",
    "sentence": "Please get on at the front of the bus and get off at the {{BLANK}}.",
    "cn": "請從公車前門上車，後門下車。"
  },
  {
    "word": "senator",
    "pos": "n.",
    "cn_def": "參議員",
    "en_def": "a member of the group that makes laws in some countries",
    "sentence": "The {{BLANK}} gave a speech asking for a new law to protect clean water.",
    "cn": "參議員發表演說，要求制定保護乾淨水源的新法律。"
  },
  {
    "word": "skull",
    "pos": "n.",
    "cn_def": "頭骨；顱骨",
    "en_def": "the bones of the head",
    "sentence": "A helmet protects your {{BLANK}} if you fall off your motorcycle.",
    "cn": "如果你從機車上摔下來，安全帽能保護你的頭骨。"
  },
  {
    "word": "stir",
    "pos": "v.",
    "cn_def": "攪拌",
    "en_def": "to mix something by moving a spoon around in it",
    "sentence": "Add some sugar to your coffee and {{BLANK}} it with a spoon.",
    "cn": "在咖啡裡加點糖，然後用湯匙攪拌。"
  },
  {
    "word": "tap",
    "pos": "v.",
    "cn_def": "輕敲；輕拍",
    "en_def": "to hit something gently and quickly",
    "sentence": "I felt someone {{BLANK}} me on the shoulder, so I turned around.",
    "cn": "我感覺有人輕拍我的肩膀，於是轉過身。"
  },
  {
    "word": "tremendous",
    "pos": "adj.",
    "cn_def": "巨大的；極好的",
    "en_def": "very large or very great",
    "sentence": "The rocket took off with a {{BLANK}} noise that could be heard for miles.",
    "cn": "火箭伴隨著數英里外都聽得見的巨大聲響升空。"
  },
  {
    "word": "underneath",
    "pos": "prep.",
    "cn_def": "在...底下；在下面",
    "en_def": "directly under something",
    "sentence": "The cat was hiding {{BLANK}} the sofa and refused to come out.",
    "cn": "那隻貓躲在沙發底下，不肯出來。"
  },
  {
    "word": "worm",
    "pos": "n.",
    "cn_def": "蠕蟲；蟲",
    "en_def": "a small, long, thin animal with no legs that lives in the ground",
    "sentence": "The bird pulled a {{BLANK}} out of the ground and fed it to its babies.",
    "cn": "鳥從地裡拉出一條蟲，餵給牠的寶寶。"
  }
];

const MCQS = [
  {
    "q": "The loud bell will ______ everyone in the building if there is a fire.",
    "options": [
      "stir",
      "grasp",
      "alert",
      "execute"
    ],
    "answer": 2,
    "cn": "如果發生火災，響亮的鈴聲會警告大樓裡的每個人。",
    "vocabIndex": 0
  },
  {
    "q": "Millions of people watched the live ______ of the final game on TV.",
    "options": [
      "worm",
      "rear",
      "drawer",
      "broadcast"
    ],
    "answer": 3,
    "cn": "數百萬人在電視上收看決賽的現場轉播。",
    "vocabIndex": 1
  },
  {
    "q": "The program was stopped for a special news ______ about the earthquake.",
    "options": [
      "closet",
      "bulletin",
      "rear",
      "bump"
    ],
    "answer": 1,
    "cn": "節目中斷，插播一則有關地震的特別新聞快報。",
    "vocabIndex": 2
  },
  {
    "q": "He hit his head on the door and now has a big ______ on it.",
    "options": [
      "bump",
      "senator",
      "rear",
      "closet"
    ],
    "answer": 0,
    "cn": "他的頭撞到門，現在腫了一個大包。",
    "vocabIndex": 3
  },
  {
    "q": "Please ______ the onions and carrots into small pieces for the soup.",
    "options": [
      "endure",
      "chop",
      "console",
      "execute"
    ],
    "answer": 1,
    "cn": "請把洋蔥和紅蘿蔔切成小塊來煮湯。",
    "vocabIndex": 4
  },
  {
    "q": "She hung her new dresses in the ______ and put her shoes on the floor.",
    "options": [
      "worm",
      "rear",
      "bulletin",
      "closet"
    ],
    "answer": 3,
    "cn": "她把新洋裝掛進衣櫥，把鞋子放在地上。",
    "vocabIndex": 5
  },
  {
    "q": "Nothing could ______ the little boy after his dog died.",
    "options": [
      "grasp",
      "alert",
      "console",
      "execute"
    ],
    "answer": 2,
    "cn": "小男孩的狗死後，沒有任何事能安慰他。",
    "vocabIndex": 6
  },
  {
    "q": "He works in the business ______, where all the big banks are.",
    "options": [
      "district",
      "worm",
      "rear",
      "senator"
    ],
    "answer": 0,
    "cn": "他在商業區工作，所有大銀行都在那裡。",
    "vocabIndex": 7
  },
  {
    "q": "I keep my socks in the top ______ and my T-shirts in the bottom one.",
    "options": [
      "bump",
      "senator",
      "rear",
      "drawer"
    ],
    "answer": 3,
    "cn": "我把襪子放在最上層的抽屜，T恤放在最下層。",
    "vocabIndex": 8
  },
  {
    "q": "The soldiers had to ______ cold, hunger, and fear during the long war.",
    "options": [
      "tap",
      "endure",
      "execute",
      "console"
    ],
    "answer": 1,
    "cn": "士兵們在漫長的戰爭中必須忍受寒冷、飢餓和恐懼。",
    "vocabIndex": 9
  },
  {
    "q": "In the past, kings would ______ people who tried to take their power.",
    "options": [
      "execute",
      "endure",
      "alert",
      "grasp"
    ],
    "answer": 0,
    "cn": "在過去，國王會處決企圖奪權的人。",
    "vocabIndex": 10
  },
  {
    "q": "The baby reached out to ______ her mother's finger with her tiny hand.",
    "options": [
      "console",
      "execute",
      "grasp",
      "endure"
    ],
    "answer": 2,
    "cn": "嬰兒伸出小手抓住媽媽的手指。",
    "vocabIndex": 11
  },
  {
    "q": "Please get on at the front of the bus and get off at the ______.",
    "options": [
      "broadcast",
      "rear",
      "senator",
      "bump"
    ],
    "answer": 1,
    "cn": "請從公車前門上車，後門下車。",
    "vocabIndex": 12
  },
  {
    "q": "The ______ gave a speech asking for a new law to protect clean water.",
    "options": [
      "closet",
      "district",
      "senator",
      "skull"
    ],
    "answer": 2,
    "cn": "參議員發表演說，要求制定保護乾淨水源的新法律。",
    "vocabIndex": 13
  },
  {
    "q": "A helmet protects your ______ if you fall off your motorcycle.",
    "options": [
      "broadcast",
      "worm",
      "closet",
      "skull"
    ],
    "answer": 3,
    "cn": "如果你從機車上摔下來，安全帽能保護你的頭骨。",
    "vocabIndex": 14
  },
  {
    "q": "Add some sugar to your coffee and ______ it with a spoon.",
    "options": [
      "stir",
      "execute",
      "endure",
      "chop"
    ],
    "answer": 0,
    "cn": "在咖啡裡加點糖，然後用湯匙攪拌。",
    "vocabIndex": 15
  },
  {
    "q": "I felt someone ______ me on the shoulder, so I turned around.",
    "options": [
      "alert",
      "chop",
      "tap",
      "endure"
    ],
    "answer": 2,
    "cn": "我感覺有人輕拍我的肩膀，於是轉過身。",
    "vocabIndex": 16
  },
  {
    "q": "The rocket took off with a ______ noise that could be heard for miles.",
    "options": [
      "tremendous",
      "elegant",
      "overweight",
      "wicked"
    ],
    "answer": 0,
    "cn": "火箭伴隨著數英里外都聽得見的巨大聲響升空。",
    "vocabIndex": 17
  },
  {
    "q": "The cat was hiding ______ the sofa and refused to come out.",
    "options": [
      "beneath",
      "underneath",
      "via",
      "aboard"
    ],
    "answer": 1,
    "cn": "那隻貓躲在沙發底下，不肯出來。",
    "vocabIndex": 18
  },
  {
    "q": "The bird pulled a ______ out of the ground and fed it to its babies.",
    "options": [
      "bulletin",
      "broadcast",
      "drawer",
      "worm"
    ],
    "answer": 3,
    "cn": "鳥從地裡拉出一條蟲，餵給牠的寶寶。",
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "wicked": {
    "pos": "adj.",
    "en_def": "very bad or evil",
    "cn_def": "邪惡的；缺德的"
  },
  "alert": {
    "pos": "v.",
    "en_def": "to warn someone about a danger or problem",
    "cn_def": "警告；提醒"
  },
  "broadcast": {
    "pos": "n.",
    "en_def": "a program on television or radio",
    "cn_def": "廣播節目；播出"
  },
  "bulletin": {
    "pos": "n.",
    "en_def": "a short news report on television or radio",
    "cn_def": "公報；快報"
  },
  "bump": {
    "pos": "n.",
    "en_def": "a small raised area on the body or on a surface",
    "cn_def": "腫塊；隆起"
  },
  "chop": {
    "pos": "v.",
    "en_def": "to cut something into pieces with a knife or an ax",
    "cn_def": "砍；劈；切碎"
  },
  "closet": {
    "pos": "n.",
    "en_def": "a small room or tall cupboard where clothes are kept",
    "cn_def": "壁櫥；衣櫥"
  },
  "console": {
    "pos": "v.",
    "en_def": "to make someone who is sad feel better",
    "cn_def": "安慰"
  },
  "district": {
    "pos": "n.",
    "en_def": "a part of a city or country",
    "cn_def": "區域；地區"
  },
  "drawer": {
    "pos": "n.",
    "en_def": "a box that slides in and out of a desk or cupboard",
    "cn_def": "抽屜"
  },
  "endure": {
    "pos": "v.",
    "en_def": "to suffer something painful or hard for a long time",
    "cn_def": "忍受；忍耐"
  },
  "execute": {
    "pos": "v.",
    "en_def": "to kill someone as a legal punishment; to carry out a plan",
    "cn_def": "處決；執行"
  },
  "grasp": {
    "pos": "v.",
    "en_def": "to take hold of something firmly",
    "cn_def": "抓緊；握住"
  },
  "rear": {
    "pos": "n.",
    "en_def": "the back part of something",
    "cn_def": "後部；背面"
  },
  "senator": {
    "pos": "n.",
    "en_def": "a member of the group that makes laws in some countries",
    "cn_def": "參議員"
  },
  "skull": {
    "pos": "n.",
    "en_def": "the bones of the head",
    "cn_def": "頭骨；顱骨"
  },
  "stir": {
    "pos": "v.",
    "en_def": "to mix something by moving a spoon around in it",
    "cn_def": "攪拌"
  },
  "tap": {
    "pos": "v.",
    "en_def": "to hit something gently and quickly",
    "cn_def": "輕敲；輕拍"
  },
  "tremendous": {
    "pos": "adj.",
    "en_def": "very large or very great",
    "cn_def": "巨大的；極好的"
  },
  "underneath": {
    "pos": "prep.",
    "en_def": "directly under something",
    "cn_def": "在...底下；在下面"
  },
  "worm": {
    "pos": "n.",
    "en_def": "a small, long, thin animal with no legs that lives in the ground",
    "cn_def": "蠕蟲；蟲"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "too heavy or fat",
    "cn_def": "超重的；過胖的"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "beautiful and graceful in a simple way",
    "cn_def": "優雅的；高雅的"
  },
  "aboard": {
    "pos": "prep.",
    "en_def": "on or onto a ship, plane, bus, or train",
    "cn_def": "在(船；飛機；車)上"
  },
  "beneath": {
    "pos": "prep.",
    "en_def": "under or below something",
    "cn_def": "在...之下"
  },
  "via": {
    "pos": "prep.",
    "en_def": "by way of a place; by means of",
    "cn_def": "經由；透過"
  }
};

const EXTRA_GLOSSES = {};
