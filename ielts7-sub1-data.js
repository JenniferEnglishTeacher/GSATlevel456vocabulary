// Topic 7 Subunit 1 Quiz Data: Robot Design & Parts 機器人設計與零件
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T07 S01 - Robot Design & Parts 機器人設計與零件",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "humanoid",
    "pos": "n.",
    "cn_def": "人形機器人",
    "en_def": "a robot that looks and moves like a person",
    "sentence": "The museum displayed a friendly {{BLANK}} that could walk and wave, so many children lined up to shake its hand.",
    "cn": "博物館展示了一個友善的人形機器人,它會走路和揮手,所以許多孩子排隊和它握手。"
  },
  {
    "word": "android",
    "pos": "n.",
    "cn_def": "仿生人;擬真機器人",
    "en_def": "a robot made to look very much like a human",
    "sentence": "In the film, the {{BLANK}} looked so much like a real woman that nobody noticed, but her eyes sometimes glowed blue.",
    "cn": "在電影中,那個仿生人看起來非常像真正的女人,沒有人察覺,但她的眼睛有時會發出藍光。"
  },
  {
    "word": "cyborg",
    "pos": "n.",
    "cn_def": "半機械人;生化人",
    "en_def": "a person whose body has machine parts added",
    "sentence": "My brother loves science fiction stories about a {{BLANK}} with a metal arm, and he dreams of building one someday.",
    "cn": "我哥哥很喜歡關於一個裝著金屬手臂的半機械人的科幻故事,而且他夢想有一天能自己造一個。"
  },
  {
    "word": "manipulator",
    "pos": "n.",
    "cn_def": "機械手臂;操作臂",
    "en_def": "a robot arm that picks up and moves objects",
    "sentence": "The factory installed a new {{BLANK}} that lifts heavy car doors, so workers no longer hurt their backs on the job.",
    "cn": "工廠安裝了一支新的機械手臂來舉起沉重的車門,所以工人在工作時不再傷到背部。"
  },
  {
    "word": "gripper",
    "pos": "n.",
    "cn_def": "夾爪;抓取器",
    "en_def": "the part of a robot that holds things",
    "sentence": "The soft rubber {{BLANK}} can pick up an egg without breaking it, and engineers are proud of this delicate design.",
    "cn": "這個柔軟的橡膠夾爪能拿起一顆蛋而不弄破,工程師們對這個精巧的設計感到自豪。"
  },
  {
    "word": "joint",
    "pos": "n.",
    "cn_def": "關節;接頭",
    "en_def": "a place where two parts connect and can bend",
    "sentence": "Each finger of the robot hand has three {{BLANK}}, so it can bend and hold a pen almost like a human hand.",
    "cn": "這隻機器手的每根手指都有三個關節,所以它能彎曲並幾乎像人手一樣握筆。"
  },
  {
    "word": "actuator",
    "pos": "n.",
    "cn_def": "致動器;驅動器",
    "en_def": "a part that makes a machine move",
    "sentence": "When the {{BLANK}} in the robot's knee stopped working, the robot could not climb the stairs, so the team replaced it.",
    "cn": "當機器人膝蓋裡的致動器停止運作時,它就無法爬樓梯,所以團隊更換了它。"
  },
  {
    "word": "gear",
    "pos": "n.",
    "cn_def": "齒輪",
    "en_def": "a wheel with teeth that turns other wheels",
    "sentence": "The old clock has many tiny {{BLANK}} inside, and they must turn together perfectly or the time will be wrong.",
    "cn": "這座老時鐘裡面有許多小齒輪,它們必須完美地一起轉動,否則時間就會不準。"
  },
  {
    "word": "lever",
    "pos": "n.",
    "cn_def": "操縱桿;槓桿",
    "en_def": "a bar you push or pull to control a machine",
    "sentence": "The driver pulled the {{BLANK}} to raise the robot's arm, but it moved too fast and almost hit the ceiling.",
    "cn": "駕駛員拉動操縱桿來升起機器人的手臂,但它移動得太快,差點撞到天花板。"
  },
  {
    "word": "hinge",
    "pos": "n.",
    "cn_def": "鉸鏈",
    "en_def": "a metal part that lets a door or lid swing",
    "sentence": "The robot's head moves on a strong {{BLANK}}, so it can nod and look down at people who talk to it.",
    "cn": "機器人的頭靠一個堅固的鉸鏈轉動,所以它能點頭並低頭看著和它說話的人。"
  },
  {
    "word": "axle",
    "pos": "n.",
    "cn_def": "車軸;輪軸",
    "en_def": "a rod that connects and turns two wheels",
    "sentence": "The delivery robot stopped in the middle of the road because its front {{BLANK}} broke, and a technician had to fix it.",
    "cn": "送貨機器人停在路中間,因為它的前車軸斷了,技術人員必須去修理它。"
  },
  {
    "word": "pulley",
    "pos": "n.",
    "cn_def": "滑輪",
    "en_def": "a wheel with a rope used to lift things",
    "sentence": "Builders used a {{BLANK}} to lift the heavy robot onto the stage, and the audience clapped when it arrived safely.",
    "cn": "工人用滑輪把沉重的機器人吊上舞台,當它安全抵達時觀眾都鼓掌了。"
  },
  {
    "word": "hydraulic",
    "pos": "adj.",
    "cn_def": "液壓的",
    "en_def": "moved by liquid that is pushed through pipes",
    "sentence": "The digger uses a {{BLANK}} arm to lift tons of soil, so one machine can do the work of twenty people.",
    "cn": "這台挖土機使用液壓手臂來舉起好幾噸的土,所以一台機器就能做二十個人的工作。"
  },
  {
    "word": "pneumatic",
    "pos": "adj.",
    "cn_def": "氣動的",
    "en_def": "powered by air that is pushed under pressure",
    "sentence": "The robot hand has {{BLANK}} muscles that fill with air, and this lets it hold soft fruit gently.",
    "cn": "這隻機器手有充氣的氣動肌肉,這讓它能輕柔地握住柔軟的水果。"
  },
  {
    "word": "wiring",
    "pos": "n.",
    "cn_def": "線路;配線",
    "en_def": "the system of wires inside a machine",
    "sentence": "After the flood, the {{BLANK}} inside the robot was wet and damaged, so the engineers had to replace every cable.",
    "cn": "水災過後,機器人內部的線路又濕又受損,所以工程師必須更換每一條電線。"
  },
  {
    "word": "cable",
    "pos": "n.",
    "cn_def": "電纜;纜線",
    "en_def": "a thick wire that carries electricity or signals",
    "sentence": "Please do not step on the black {{BLANK}} on the floor, because it sends power to the robot on the stage.",
    "cn": "請不要踩到地上那條黑色的電纜,因為它正把電力傳送給舞台上的機器人。"
  },
  {
    "word": "microcontroller",
    "pos": "n.",
    "cn_def": "微控制器",
    "en_def": "a very small computer that controls a device",
    "sentence": "Our class programmed a cheap {{BLANK}} to switch on a fan, and everyone cheered when the fan started spinning.",
    "cn": "我們班替一個便宜的微控制器寫程式來打開電風扇,當風扇開始轉動時大家都歡呼了。"
  },
  {
    "word": "lens",
    "pos": "n.",
    "cn_def": "鏡頭;透鏡",
    "en_def": "curved glass that helps a camera see clearly",
    "sentence": "The robot could not recognise faces because its camera {{BLANK}} was dirty, so I cleaned it with a soft cloth.",
    "cn": "機器人無法辨認臉孔,因為它的攝影機鏡頭髒了,所以我用軟布把它擦乾淨。"
  },
  {
    "word": "lidar",
    "pos": "n.",
    "cn_def": "光達;雷射雷達",
    "en_def": "a system that measures distance using laser light",
    "sentence": "Self-driving cars use {{BLANK}} to measure how far away other cars are, and this helps them avoid accidents in traffic.",
    "cn": "自動駕駛汽車使用光達來測量其他車輛有多遠,這幫助它們在車流中避免事故。"
  },
  {
    "word": "infrared",
    "pos": "adj.",
    "cn_def": "紅外線的",
    "en_def": "using light that people cannot see but feel as heat",
    "sentence": "The security robot has an {{BLANK}} camera, so it can see people in the dark when the lights are off.",
    "cn": "這台保全機器人有一台紅外線攝影機,所以在燈關掉時它也能在黑暗中看見人。"
  },
  {
    "word": "torque",
    "pos": "n.",
    "cn_def": "扭力;轉矩",
    "en_def": "the turning force of an engine or motor",
    "sentence": "This electric motor produces a lot of {{BLANK}}, so the small robot can push a heavy box across the floor.",
    "cn": "這個電動馬達產生很大的扭力,所以這台小機器人能把一個沉重的箱子推過地板。"
  },
  {
    "word": "lightweight",
    "pos": "adj.",
    "cn_def": "輕量的;重量輕的",
    "en_def": "not heavy; easy to carry",
    "sentence": "The new delivery drone is made from {{BLANK}} plastic, so it uses less battery and can fly much farther.",
    "cn": "新的送貨無人機是用輕量塑膠製成的,所以它耗電較少並且能飛得更遠。"
  },
  {
    "word": "alloy",
    "pos": "n.",
    "cn_def": "合金",
    "en_def": "a metal made by mixing two or more metals",
    "sentence": "The robot's body is made of a strong {{BLANK}}, so it does not break when it falls down during tests.",
    "cn": "這台機器人的機身是用堅固的合金製成的,所以它在測試中跌倒時不會損壞。"
  },
  {
    "word": "titanium",
    "pos": "n.",
    "cn_def": "鈦",
    "en_def": "a strong, light, silver-coloured metal",
    "sentence": "Engineers chose {{BLANK}} for the robot's legs because it is strong but light, although it is quite expensive.",
    "cn": "工程師為機器人的腿選擇了鈦,因為它堅固又輕,雖然它相當昂貴。"
  },
  {
    "word": "rechargeable",
    "pos": "adj.",
    "cn_def": "可充電的",
    "en_def": "able to be filled with electricity again",
    "sentence": "The toy robot runs on {{BLANK}} batteries, so we just plug it in at night instead of buying new ones.",
    "cn": "這個玩具機器人使用可充電的電池,所以我們晚上只要插上電,而不用買新電池。"
  },
  {
    "word": "exoskeleton",
    "pos": "n.",
    "cn_def": "外骨骼",
    "en_def": "a wearable frame that gives the body extra strength",
    "sentence": "The nurse wears a light {{BLANK}} when she lifts patients, so her back no longer hurts at the end of the day.",
    "cn": "這位護理師在抬病人時會穿上輕型外骨骼,所以她一天結束時背部不再疼痛。"
  },
  {
    "word": "limb",
    "pos": "n.",
    "cn_def": "肢體;四肢",
    "en_def": "an arm or a leg",
    "sentence": "The robot dog lost one {{BLANK}} in the fall, but it could still walk slowly on its other three legs.",
    "cn": "那隻機器狗在跌倒時失去了一條腿,但它仍然能用另外三條腿慢慢走路。"
  },
  {
    "word": "payload",
    "pos": "n.",
    "cn_def": "酬載;載重",
    "en_def": "the load that a vehicle or drone carries",
    "sentence": "The drone can carry a {{BLANK}} of five kilograms, so farmers use it to spread seeds over their fields.",
    "cn": "這架無人機能攜帶五公斤的載重,所以農夫用它在田地上撒種子。"
  },
  {
    "word": "blueprint",
    "pos": "n.",
    "cn_def": "藍圖;設計圖",
    "en_def": "a detailed plan or drawing for building something",
    "sentence": "The students studied the {{BLANK}} of the robot carefully, and then they built every part exactly as shown.",
    "cn": "學生們仔細研究了機器人的設計圖,然後他們完全照著圖示製作每一個零件。"
  },
  {
    "word": "dismantle",
    "pos": "v.",
    "cn_def": "拆解;拆卸",
    "en_def": "to take a machine apart into pieces",
    "sentence": "We had to {{BLANK}} the broken robot to find the problem, but putting it back together took the whole afternoon.",
    "cn": "我們必須拆解這台壞掉的機器人來找出問題,但把它重新組裝回去花了整個下午。"
  }
];

const MCQS = [
  {
    "q": "The museum displayed a friendly _____ that could walk and wave, so many children lined up to shake its hand.",
    "options": [
      "humanoid",
      "court",
      "landmark",
      "parity"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "In the film, the _____ looked so much like a real woman that nobody noticed, but her eyes sometimes glowed blue.",
    "options": [
      "fault",
      "android",
      "landmark",
      "patent"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "My brother loves science fiction stories about a _____ with a metal arm, and he dreams of building one someday.",
    "options": [
      "pinnacle",
      "analytics",
      "waiter",
      "cyborg"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The factory installed a new _____ that lifts heavy car doors, so workers no longer hurt their backs on the job.",
    "options": [
      "demise",
      "asset",
      "manipulator",
      "jobseeker"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The soft rubber _____ can pick up an egg without breaking it, and engineers are proud of this delicate design.",
    "options": [
      "gripper",
      "advancement",
      "self-checkout",
      "headcount"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Each finger of the robot hand has three _____, so it can bend and hold a pen almost like a human hand.",
    "options": [
      "barcode",
      "opponent",
      "joint",
      "parity"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "When the _____ in the robot's knee stopped working, the robot could not climb the stairs, so the team replaced it.",
    "options": [
      "replay",
      "friction",
      "hospitality",
      "actuator"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The old clock has many tiny _____ inside, and they must turn together perfectly or the time will be wrong.",
    "options": [
      "ruling",
      "gear",
      "parity",
      "finance"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The driver pulled the _____ to raise the robot's arm, but it moved too fast and almost hit the ceiling.",
    "options": [
      "lever",
      "opponent",
      "workplace",
      "headcount"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The robot's head moves on a strong _____, so it can nod and look down at people who talk to it.",
    "options": [
      "autopilot",
      "hinge",
      "analytics",
      "appliance"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The delivery robot stopped in the middle of the road because its front _____ broke, and a technician had to fix it.",
    "options": [
      "precaution",
      "turnover",
      "receptionist",
      "axle"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Builders used a _____ to lift the heavy robot onto the stage, and the audience clapped when it arrived safely.",
    "options": [
      "asset",
      "forum",
      "pulley",
      "engineer"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The digger uses a _____ arm to lift tons of soil, so one machine can do the work of twenty people.",
    "options": [
      "inferior",
      "hydraulic",
      "technical",
      "unmanned"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The robot hand has _____ muscles that fill with air, and this lets it hold soft fruit gently.",
    "options": [
      "wholesale",
      "mechanical",
      "self-aware",
      "pneumatic"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "After the flood, the _____ inside the robot was wet and damaged, so the engineers had to replace every cable.",
    "options": [
      "realm",
      "finance",
      "wiring",
      "backlash"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Please do not step on the black _____ on the floor, because it sends power to the robot on the stage.",
    "options": [
      "cable",
      "lawnmower",
      "stakeholder",
      "touchscreen"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Our class programmed a cheap _____ to switch on a fan, and everyone cheered when the fan started spinning.",
    "options": [
      "backlash",
      "defect",
      "hallmark",
      "microcontroller"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The robot could not recognise faces because its camera _____ was dirty, so I cleaned it with a soft cloth.",
    "options": [
      "lens",
      "hurdle",
      "environment",
      "touchscreen"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Self-driving cars use _____ to measure how far away other cars are, and this helps them avoid accidents in traffic.",
    "options": [
      "scanner",
      "lidar",
      "sportsmanship",
      "ruling"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The security robot has an _____ camera, so it can see people in the dark when the lights are off.",
    "options": [
      "superior",
      "sizeable",
      "infrared",
      "commercial"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "This electric motor produces a lot of _____, so the small robot can push a heavy box across the floor.",
    "options": [
      "environment",
      "torque",
      "viewpoint",
      "patent"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new delivery drone is made from _____ plastic, so it uses less battery and can fly much farther.",
    "options": [
      "alarming",
      "military",
      "lightweight",
      "sizeable"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The robot's body is made of a strong _____, so it does not break when it falls down during tests.",
    "options": [
      "GPS",
      "proposition",
      "design",
      "alloy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Engineers chose _____ for the robot's legs because it is strong but light, although it is quite expensive.",
    "options": [
      "titanium",
      "coach",
      "autopilot",
      "ruling"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The toy robot runs on _____ batteries, so we just plug it in at night instead of buying new ones.",
    "options": [
      "customary",
      "unmanned",
      "delicate",
      "rechargeable"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The nurse wears a light _____ when she lifts patients, so her back no longer hurts at the end of the day.",
    "options": [
      "viewpoint",
      "autopilot",
      "exoskeleton",
      "replay"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The robot dog lost one _____ in the fall, but it could still walk slowly on its other three legs.",
    "options": [
      "championship",
      "limb",
      "machinery",
      "workstation"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The drone can carry a _____ of five kilograms, so farmers use it to spread seeds over their fields.",
    "options": [
      "payload",
      "agenda",
      "vehicle",
      "GPS"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The students studied the _____ of the robot carefully, and then they built every part exactly as shown.",
    "options": [
      "cashier",
      "crane",
      "blueprint",
      "payroll"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "We had to _____ the broken robot to find the problem, but putting it back together took the whole afternoon.",
    "options": [
      "sacrifice",
      "forbid",
      "embed",
      "dismantle"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "humanoid": {
    "pos": "n.",
    "en_def": "a robot that looks and moves like a person",
    "cn_def": "人形機器人"
  },
  "android": {
    "pos": "n.",
    "en_def": "a robot made to look very much like a human",
    "cn_def": "仿生人;擬真機器人"
  },
  "cyborg": {
    "pos": "n.",
    "en_def": "a person whose body has machine parts added",
    "cn_def": "半機械人;生化人"
  },
  "manipulator": {
    "pos": "n.",
    "en_def": "a robot arm that picks up and moves objects",
    "cn_def": "機械手臂;操作臂"
  },
  "gripper": {
    "pos": "n.",
    "en_def": "the part of a robot that holds things",
    "cn_def": "夾爪;抓取器"
  },
  "joint": {
    "pos": "n.",
    "en_def": "a place where two parts connect and can bend",
    "cn_def": "關節;接頭"
  },
  "actuator": {
    "pos": "n.",
    "en_def": "a part that makes a machine move",
    "cn_def": "致動器;驅動器"
  },
  "gear": {
    "pos": "n.",
    "en_def": "a wheel with teeth that turns other wheels",
    "cn_def": "齒輪"
  },
  "lever": {
    "pos": "n.",
    "en_def": "a bar you push or pull to control a machine",
    "cn_def": "操縱桿;槓桿"
  },
  "hinge": {
    "pos": "n.",
    "en_def": "a metal part that lets a door or lid swing",
    "cn_def": "鉸鏈"
  },
  "axle": {
    "pos": "n.",
    "en_def": "a rod that connects and turns two wheels",
    "cn_def": "車軸;輪軸"
  },
  "pulley": {
    "pos": "n.",
    "en_def": "a wheel with a rope used to lift things",
    "cn_def": "滑輪"
  },
  "hydraulic": {
    "pos": "adj.",
    "en_def": "moved by liquid that is pushed through pipes",
    "cn_def": "液壓的"
  },
  "pneumatic": {
    "pos": "adj.",
    "en_def": "powered by air that is pushed under pressure",
    "cn_def": "氣動的"
  },
  "wiring": {
    "pos": "n.",
    "en_def": "the system of wires inside a machine",
    "cn_def": "線路;配線"
  },
  "cable": {
    "pos": "n.",
    "en_def": "a thick wire that carries electricity or signals",
    "cn_def": "電纜;纜線"
  },
  "microcontroller": {
    "pos": "n.",
    "en_def": "a very small computer that controls a device",
    "cn_def": "微控制器"
  },
  "lens": {
    "pos": "n.",
    "en_def": "curved glass that helps a camera see clearly",
    "cn_def": "鏡頭;透鏡"
  },
  "lidar": {
    "pos": "n.",
    "en_def": "a system that measures distance using laser light",
    "cn_def": "光達;雷射雷達"
  },
  "infrared": {
    "pos": "adj.",
    "en_def": "using light that people cannot see but feel as heat",
    "cn_def": "紅外線的"
  },
  "torque": {
    "pos": "n.",
    "en_def": "the turning force of an engine or motor",
    "cn_def": "扭力;轉矩"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy; easy to carry",
    "cn_def": "輕量的;重量輕的"
  },
  "alloy": {
    "pos": "n.",
    "en_def": "a metal made by mixing two or more metals",
    "cn_def": "合金"
  },
  "titanium": {
    "pos": "n.",
    "en_def": "a strong, light, silver-coloured metal",
    "cn_def": "鈦"
  },
  "rechargeable": {
    "pos": "adj.",
    "en_def": "able to be filled with electricity again",
    "cn_def": "可充電的"
  },
  "exoskeleton": {
    "pos": "n.",
    "en_def": "a wearable frame that gives the body extra strength",
    "cn_def": "外骨骼"
  },
  "limb": {
    "pos": "n.",
    "en_def": "an arm or a leg",
    "cn_def": "肢體;四肢"
  },
  "payload": {
    "pos": "n.",
    "en_def": "the load that a vehicle or drone carries",
    "cn_def": "酬載;載重"
  },
  "blueprint": {
    "pos": "n.",
    "en_def": "a detailed plan or drawing for building something",
    "cn_def": "藍圖;設計圖"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine apart into pieces",
    "cn_def": "拆解;拆卸"
  },
  "court": {
    "pos": "n.",
    "en_def": "an area marked for playing tennis or basketball",
    "cn_def": "球場(網球、籃球等)"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "an important event or step in development",
    "cn_def": "里程碑;地標"
  },
  "parity": {
    "pos": "n.",
    "en_def": "the state of being equal",
    "cn_def": "平等;同等"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or problem",
    "cn_def": "過錯;責任"
  },
  "patent": {
    "pos": "n.",
    "en_def": "an official right to be the only one to make an invention",
    "cn_def": "專利"
  },
  "pinnacle": {
    "pos": "n.",
    "en_def": "the highest point of achievement",
    "cn_def": "巔峰;頂點"
  },
  "analytics": {
    "pos": "n.",
    "en_def": "the study of data to find useful patterns",
    "cn_def": "數據分析"
  },
  "waiter": {
    "pos": "n.",
    "en_def": "a person who serves food in a restaurant",
    "cn_def": "服務生"
  },
  "demise": {
    "pos": "n.",
    "en_def": "the end or failure of something",
    "cn_def": "消亡;倒閉"
  },
  "asset": {
    "pos": "n.",
    "en_def": "something or someone that is useful and valuable",
    "cn_def": "資產;寶貴的人或物"
  },
  "jobseeker": {
    "pos": "n.",
    "en_def": "a person who is looking for a job",
    "cn_def": "求職者"
  },
  "advancement": {
    "pos": "n.",
    "en_def": "progress or development in something",
    "cn_def": "進步;發展"
  },
  "self-checkout": {
    "pos": "n.",
    "en_def": "a machine where shoppers pay without a cashier",
    "cn_def": "自助結帳機"
  },
  "headcount": {
    "pos": "n.",
    "en_def": "the total number of people employed",
    "cn_def": "員工人數"
  },
  "barcode": {
    "pos": "n.",
    "en_def": "a pattern of lines that a machine can read",
    "cn_def": "條碼"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "the person or team you play against",
    "cn_def": "對手"
  },
  "replay": {
    "pos": "n.",
    "en_def": "a recording of part of a game shown again",
    "cn_def": "重播"
  },
  "friction": {
    "pos": "n.",
    "en_def": "disagreement between people; or rubbing between surfaces",
    "cn_def": "摩擦;衝突"
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "the business of hotels, restaurants and serving guests",
    "cn_def": "餐旅業;款待"
  },
  "ruling": {
    "pos": "n.",
    "en_def": "an official decision",
    "cn_def": "裁決;判決"
  },
  "finance": {
    "pos": "n.",
    "en_def": "money, or the management of money",
    "cn_def": "資金;財務"
  },
  "workplace": {
    "pos": "n.",
    "en_def": "the place where people do their jobs",
    "cn_def": "工作場所;職場"
  },
  "autopilot": {
    "pos": "n.",
    "en_def": "a system that flies a plane or drives a car automatically",
    "cn_def": "自動駕駛(系統)"
  },
  "appliance": {
    "pos": "n.",
    "en_def": "a machine used in the home, like a fridge",
    "cn_def": "家電;家用電器"
  },
  "precaution": {
    "pos": "n.",
    "en_def": "something done to prevent harm in the future",
    "cn_def": "預防措施"
  },
  "turnover": {
    "pos": "n.",
    "en_def": "the rate at which workers leave and are replaced",
    "cn_def": "人員流動率;營業額"
  },
  "receptionist": {
    "pos": "n.",
    "en_def": "a person who greets visitors at a front desk",
    "cn_def": "接待員;櫃台人員"
  },
  "forum": {
    "pos": "n.",
    "en_def": "a meeting or website where people discuss ideas",
    "cn_def": "論壇"
  },
  "engineer": {
    "pos": "n.",
    "en_def": "a person who designs and builds machines",
    "cn_def": "工程師"
  },
  "inferior": {
    "pos": "adj.",
    "en_def": "lower in quality than others",
    "cn_def": "較差的;次等的"
  },
  "technical": {
    "pos": "adj.",
    "en_def": "connected with practical skills or machines",
    "cn_def": "技術的"
  },
  "unmanned": {
    "pos": "adj.",
    "en_def": "operating without a person on board",
    "cn_def": "無人駕駛的;無人操作的"
  },
  "wholesale": {
    "pos": "adj.",
    "en_def": "happening on a very large scale, affecting many things",
    "cn_def": "全面的;大規模的"
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "operated by machinery; connected with machines",
    "cn_def": "機械的"
  },
  "self-aware": {
    "pos": "adj.",
    "en_def": "knowing that you exist and understanding your own feelings",
    "cn_def": "有自我意識的"
  },
  "realm": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範疇"
  },
  "backlash": {
    "pos": "n.",
    "en_def": "a strong negative reaction from many people",
    "cn_def": "強烈反彈"
  },
  "lawnmower": {
    "pos": "n.",
    "en_def": "a machine for cutting grass",
    "cn_def": "割草機"
  },
  "stakeholder": {
    "pos": "n.",
    "en_def": "a person or group affected by a decision",
    "cn_def": "利害關係人"
  },
  "touchscreen": {
    "pos": "n.",
    "en_def": "a screen you control by touching it",
    "cn_def": "觸控螢幕"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a fault or mistake in something that was made",
    "cn_def": "瑕疵;缺陷"
  },
  "hallmark": {
    "pos": "n.",
    "en_def": "a typical feature that shows what something is like",
    "cn_def": "特點;標誌"
  },
  "hurdle": {
    "pos": "n.",
    "en_def": "a problem you must solve before you can make progress",
    "cn_def": "障礙;難關"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the conditions and surroundings where something works",
    "cn_def": "環境"
  },
  "scanner": {
    "pos": "n.",
    "en_def": "a machine that reads codes or makes pictures of things",
    "cn_def": "掃描器"
  },
  "sportsmanship": {
    "pos": "n.",
    "en_def": "fair and polite behaviour when playing sports",
    "cn_def": "運動家精神"
  },
  "superior": {
    "pos": "adj.",
    "en_def": "better than others in quality",
    "cn_def": "較優的;優越的"
  },
  "sizeable": {
    "pos": "adj.",
    "en_def": "fairly large",
    "cn_def": "相當大的"
  },
  "commercial": {
    "pos": "adj.",
    "en_def": "connected with buying, selling and making money",
    "cn_def": "商業的"
  },
  "viewpoint": {
    "pos": "n.",
    "en_def": "a particular way of thinking about something",
    "cn_def": "觀點;看法"
  },
  "alarming": {
    "pos": "adj.",
    "en_def": "causing worry or fear",
    "cn_def": "令人擔憂的"
  },
  "military": {
    "pos": "adj.",
    "en_def": "connected with soldiers or the armed forces",
    "cn_def": "軍事的"
  },
  "gps": {
    "pos": "n.",
    "en_def": "a system that uses satellites to show your location",
    "cn_def": "全球定位系統"
  },
  "proposition": {
    "pos": "n.",
    "en_def": "an idea, offer or plan to consider",
    "cn_def": "提議;主張"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and made",
    "cn_def": "設計"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains a sports team or player",
    "cn_def": "教練"
  },
  "customary": {
    "pos": "adj.",
    "en_def": "usual or traditional in a situation",
    "cn_def": "慣例的;習慣的"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily broken or damaged; needing care",
    "cn_def": "脆弱的;精細的"
  },
  "championship": {
    "pos": "n.",
    "en_def": "a competition to find the best player or team",
    "cn_def": "冠軍賽;錦標賽"
  },
  "machinery": {
    "pos": "n.",
    "en_def": "machines in general, especially large ones",
    "cn_def": "機械;機器(總稱)"
  },
  "workstation": {
    "pos": "n.",
    "en_def": "the place where a worker or machine does a job",
    "cn_def": "工作站;工作台"
  },
  "agenda": {
    "pos": "n.",
    "en_def": "a list of things to discuss or plans to carry out",
    "cn_def": "議程;待辦事項"
  },
  "vehicle": {
    "pos": "n.",
    "en_def": "a machine that carries people or goods, like a car",
    "cn_def": "車輛;交通工具"
  },
  "cashier": {
    "pos": "n.",
    "en_def": "a person who takes money in a shop",
    "cn_def": "收銀員"
  },
  "crane": {
    "pos": "n.",
    "en_def": "a tall machine for lifting very heavy objects",
    "cn_def": "起重機;吊車"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of workers a company pays, or the money paid",
    "cn_def": "薪資名冊;薪資總額"
  },
  "sacrifice": {
    "pos": "v.",
    "en_def": "to give up something valuable for something more important",
    "cn_def": "犧牲"
  },
  "forbid": {
    "pos": "v.",
    "en_def": "to say that someone must not do something",
    "cn_def": "禁止"
  },
  "embed": {
    "pos": "v.",
    "en_def": "to fix something firmly inside something else",
    "cn_def": "嵌入"
  }
};

const EXTRA_GLOSSES = {};
