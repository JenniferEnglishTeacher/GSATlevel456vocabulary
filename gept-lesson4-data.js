// Lesson 4 Quiz Data: Recovery, Medical Facilities & Spiritual Concepts
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 4 - Recovery, Medical Facilities & Spiritual Concepts",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "康復；恢復",
    "en_def": "to become healthy or well again after an illness or injury",
    "sentence": "After resting quietly at home for two weeks, Samuel began to {{BLANK}} from his chest infection, and he returned to school yesterday.",
    "cn": "在家安靜休養兩週後，塞繆爾開始從胸部感染中康復，並於昨天重返學校。"
  },
  {
    "word": "toothache",
    "pos": "n.",
    "cn_def": "牙痛",
    "en_def": "a sharp or dull pain in or near a tooth",
    "sentence": "Linda suffered from a terrible {{BLANK}} all night long, so she made an urgent appointment with her dentist early this morning.",
    "cn": "琳達整晚飽受劇烈牙痛之苦，所以她今天清晨緊急向牙醫師預約看診。"
  },
  {
    "word": "weight",
    "pos": "n.",
    "cn_def": "重量；體重",
    "en_def": "how heavy someone or something is; heaviness",
    "sentence": "Because my father wanted to control his body {{BLANK}}, he stopped drinking sugary sodas and started jogging every evening.",
    "cn": "因為我父親想要控制自己的體重，他不再喝含糖汽水並開始每天傍晚慢跑。"
  },
  {
    "word": "wound",
    "pos": "n. / v.",
    "cn_def": "傷口；傷害",
    "en_def": "an injury to the body, especially a cut or tear in the skin",
    "sentence": "The soldier received a deep bullet {{BLANK}} on his right arm during the battle, but field doctors bandaged it quickly.",
    "cn": "那名士兵在戰鬥中右臂受了嚴重的子彈傷口，但戰地醫生迅速為他進行了包紮。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a special vehicle used for taking sick or injured people to hospital",
    "sentence": "When the serious highway crash occurred, the police arrived immediately and called an {{BLANK}} to transport the injured driver.",
    "cn": "當這起嚴重的公路車禍發生時，警方立即趕到現場並呼叫救護車運送受傷的司機。"
  },
  {
    "word": "patient",
    "pos": "n. / adj.",
    "cn_def": "病人；有耐心的",
    "en_def": "a person receiving medical care; able to wait calmly",
    "sentence": "The elderly doctor was very gentle and {{BLANK}} with every young child who visited the hospital clinic.",
    "cn": "那位年邁的醫生對每一位來到醫院診所的小朋友都非常溫柔且有耐心。"
  },
  {
    "word": "homesick",
    "pos": "adj.",
    "cn_def": "想家的；思鄉的",
    "en_def": "sad because you are away from home and miss your family",
    "sentence": "During her first semester studying abroad in London, Emily felt deeply {{BLANK}} whenever she looked at family photographs.",
    "cn": "在倫敦留學的第一個學期裡，每當艾瑪看著家庭照片時，都感到深深的想家。"
  },
  {
    "word": "drugstore",
    "pos": "n.",
    "cn_def": "藥局；藥妝店",
    "en_def": "a shop where you can buy medicines, makeup, and daily items",
    "sentence": "Grandma asked me to walk over to the corner {{BLANK}} to pick up her blood pressure pills and some cotton pads.",
    "cn": "祖母叫我走到街角的藥局去幫她拿降血壓藥和一些化妝棉。"
  },
  {
    "word": "ghost",
    "pos": "n.",
    "cn_def": "鬼魂；幽靈",
    "en_def": "the spirit of a dead person that some people believe can appear",
    "sentence": "The children refused to enter the abandoned wooden mansion because an ancient legend claimed that a mysterious {{BLANK}} lived inside.",
    "cn": "孩子們拒絕進入那座廢棄的木製豪宅，因為一個古老的傳說聲稱裡面住著一個神秘的鬼魂。"
  },
  {
    "word": "god",
    "pos": "n.",
    "cn_def": "神；上帝",
    "en_def": "a superhuman being worshipped as having power over nature or human fortunes",
    "sentence": "The fishermen gathered at the coastal temple to pray to their {{BLANK}} for safe voyages and calm seas ahead.",
    "cn": "漁民們聚集在沿海的廟宇，向他們的神祈求航行平安與未來海面平靜。"
  }
];

const MCQS = [
  {
    "q": "When the cyclist collided with the delivery van, bystanders immediately dialed 119 to request an ______.",
    "options": [
      "ambulance",
      "drugstore",
      "toothache",
      "weight"
    ],
    "answer": 0,
    "cn": "當自行車騎士與送貨廂型車相撞時，旁觀者立即撥打119請求救護車支援。 【選項解析】(A) ambulance 救護車  (B) drugstore 藥局  (C) toothache 牙痛  (D) weight 重量。由 dialed 119 可知是呼叫 ambulance。",
    "vocabIndex": 4
  },
  {
    "q": "The nurse cleaned the dusty gravel out of the open ______ before applying antiseptic ointment and a fresh bandage.",
    "options": [
      "god",
      "patient",
      "wound",
      "ghost"
    ],
    "answer": 2,
    "cn": "護士在塗抹消毒藥膏和換上乾淨繃帶之前，先清理乾淨開放性傷口裡的砂石灰塵。 【選項解析】(A) god 神  (B) wound 傷口  (C) patient 病人  (D) ghost 鬼魂。open wound 指「開放性傷口」。",
    "vocabIndex": 3
  },
  {
    "q": "Eating sweet sticky candies right before bed without brushing often leads to severe cavities and a terrible ______.",
    "options": [
      "weight",
      "toothache",
      "ambulance",
      "wound"
    ],
    "answer": 1,
    "cn": "睡前吃甜黏的糖果而沒刷牙，常常導致嚴重的蛀牙和劇烈的牙痛。 【選項解析】(A) weight 體重  (B) toothache 牙痛  (C) ambulance 救護車  (D) wound 傷口。蛀牙引發 toothache。",
    "vocabIndex": 1
  },
  {
    "q": "The doctor reassured the family that with proper medication and rest, the patient would soon ______ completely.",
    "options": [
      "cough",
      "wound",
      "pray",
      "recover"
    ],
    "answer": 3,
    "cn": "醫生向家屬保證，只要給予適當的藥物和休息，病人很快就會完全康復。 【選項解析】(A) recover 康復  (B) wound 傷害  (C) pray 祈禱  (D) cough 咳嗽。recover completely 表示「完全康復」。",
    "vocabIndex": 0
  },
  {
    "q": "Living in a faraway foreign city for the first time often makes international college students feel quite ______.",
    "options": [
      "patient",
      "homesick",
      "healthy",
      "deaf"
    ],
    "answer": 1,
    "cn": "初次獨自生活在遙遠的異國城市，常常讓國際大學生感到非常想家。 【選項解析】(A) patient 有耐心的  (B) homesick 思鄉的  (C) healthy 健康的  (D) deaf 聾的。身處異鄉感到 homesick。",
    "vocabIndex": 6
  },
  {
    "q": "Please stop by the twenty-four-hour ______ on your way home to purchase cough syrup and band-aids for your brother.",
    "options": [
      "ghost",
      "ambulance",
      "weight",
      "drugstore"
    ],
    "answer": 3,
    "cn": "請在回家的路上順道去那家24小時藥局，為你弟弟買止咳糖漿和OK繃。 【選項解析】(A) ghost 鬼魂  (B) ambulance 救護車  (C) drugstore 藥局  (D) weight 體重。購買止咳糖漿的地方是 drugstore。",
    "vocabIndex": 7
  },
  {
    "q": "The heavy wooden box was loaded with metal tools, so its total ______ exceeded thirty kilograms.",
    "options": [
      "weight",
      "toothache",
      "patient",
      "wound"
    ],
    "answer": 0,
    "cn": "那個厚重的木箱裝滿了金屬工具，所以其總重量超過了三十公斤。 【選項解析】(A) wound 傷口  (B) toothache 牙痛  (C) patient 病人  (D) weight 重量。exceeded 30 kilograms 指重量（weight）。",
    "vocabIndex": 2
  },
  {
    "q": "In ancient mythologies, people believed that the storm was sent by an angry ______ to punish wicked citizens.",
    "options": [
      "ambulance",
      "ghost",
      "god",
      "patient"
    ],
    "answer": 2,
    "cn": "在古代神話中，人們相信這場暴風雨是一位憤怒的神派遣來懲罰邪惡市民的。 【選項解析】(A) god 神  (B) ghost 鬼魂  (C) ambulance 救護車  (D) patient 病人。古代神話中主宰自然的神為 god。",
    "vocabIndex": 9
  },
  {
    "q": "Old villagers whispered rumors that the dark tower on the cliff was haunted by the restless ______ of a forgotten sailor.",
    "options": [
      "weight",
      "ghost",
      "drugstore",
      "toothache"
    ],
    "answer": 1,
    "cn": "老村民們私下謠傳懸崖上的黑塔裡，遊蕩著一位被遺忘水手的焦躁鬼魂。 【選項解析】(A) weight 體重  (B) ghost 鬼魂  (C) drugstore 藥局  (D) toothache 牙痛。haunted by a ghost 表示鬧鬼。",
    "vocabIndex": 8
  },
  {
    "q": "A good elementary school teacher must remain extremely ______ when explaining complicated arithmetic to young beginners.",
    "options": [
      "homesick",
      "dizzy",
      "pale",
      "patient"
    ],
    "answer": 3,
    "cn": "優秀的小學老師在向初學者解釋複雜算術時，必須保持極大的耐心。 【選項解析】(A) homesick 想家的  (B) patient 有耐心的  (C) pale 蒼白的  (D) dizzy 頭暈的。面對初學兒童需保持 patient。",
    "vocabIndex": 5
  },
  {
    "q": "After the surgeon finished the four-hour operation, the recovering ______ was moved into the intensive care room.",
    "options": [
      "patient",
      "ambulance",
      "drugstore",
      "ghost"
    ],
    "answer": 0,
    "cn": "在外科醫生結束長達四小時的手術後，康復中的病人被轉移至加護病房。 【選項解析】(A) ambulance 救護車  (B) patient 病人  (C) drugstore 藥局  (D) ghost 鬼魂。接受手術住院的人為 patient。",
    "vocabIndex": 5
  },
  {
    "q": "The siren of the speeding ______ wailed loudly down the crowded avenue as drivers pulled over to let it pass.",
    "options": [
      "toothache",
      "drugstore",
      "ambulance",
      "weight"
    ],
    "answer": 2,
    "cn": "疾駛中的救護車鳴響警笛呼嘯穿過擁擠的大街，沿途司機紛紛靠邊讓行。 【選項解析】(A) ambulance 救護車  (B) drugstore 藥局  (C) toothache 牙痛  (D) weight 體重。鳴警笛且司機讓行的車輛為 ambulance。",
    "vocabIndex": 4
  },
  {
    "q": "It took Oliver almost six months of physical therapy to ______ full mobility in his fractured knee.",
    "options": [
      "tear",
      "recover",
      "skin",
      "cough"
    ],
    "answer": 1,
    "cn": "奧利佛花了將近六個月的物理治療，才使骨折的膝蓋完全恢復活動能力。 【選項解析】(A) recover 恢復  (B) tear 撕裂  (C) skin 擦破皮  (D) cough 咳嗽。recover full mobility 指「恢復完整活動能力」。",
    "vocabIndex": 0
  },
  {
    "q": "If you have a throbbing ______ that keeps you awake, you should avoid drinking ice water and visit the dentist immediately.",
    "options": [
      "weight",
      "ghost",
      "wound",
      "toothache"
    ],
    "answer": 3,
    "cn": "如果你有一陣陣令人難以入眠的跳痛牙痛，你應該避免喝冰水並立即去看牙醫。 【選項解析】(A) weight 體重  (B) toothache 牙痛  (C) wound 傷口  (D) ghost 鬼魂。看牙醫處理的問題是 toothache。",
    "vocabIndex": 1
  },
  {
    "q": "The soldier's combat ______ healed cleanly over the summer, but a faint pale scar remained visible on his cheek.",
    "options": [
      "ghost",
      "ambulance",
      "wound",
      "god"
    ],
    "answer": 2,
    "cn": "士兵的戰鬥傷口在夏天完全癒合了，但他臉頰上仍留下了一道淡淡的淺色疤痕。 【選項解析】(A) ghost 鬼魂  (B) ambulance 救護車  (C) wound 傷口  (D) god 神。combat wound 指「戰鬥傷口」。",
    "vocabIndex": 3
  },
  {
    "q": "Because Kevin gained too much ______ over the holidays, he decided to join a gym and reduce carbohydrate intake.",
    "options": [
      "weight",
      "toothache",
      "drugstore",
      "patient"
    ],
    "answer": 0,
    "cn": "因為凱文在假期中體重增加太多，他決定加入健身房並減少碳水化合物攝取。 【選項解析】(A) weight 體重  (B) toothache 牙痛  (C) drugstore 藥局  (D) patient 病人。gain weight 表示「體重增加」。",
    "vocabIndex": 2
  },
  {
    "q": "The pharmacist working behind the counter at the local ______ carefully checked the doctor's prescription before handing out the pills.",
    "options": [
      "ambulance",
      "wound",
      "ghost",
      "drugstore"
    ],
    "answer": 3,
    "cn": "在當地藥局櫃檯工作的藥劑師，在發放藥丸前仔細檢查了醫生的處方籤。 【選項解析】(A) ambulance 救護車  (B) drugstore 藥局  (C) ghost 鬼魂  (D) wound 傷口。配藥的地點為 drugstore。",
    "vocabIndex": 7
  },
  {
    "q": "Spending Christmas alone in a snowy dormitory made the exchange student feel terribly sad and ______.",
    "options": [
      "patient",
      "homesick",
      "deaf",
      "healthy"
    ],
    "answer": 1,
    "cn": "獨自在積雪的宿舍裡度過聖誕節，讓這位交換學生感到非常悲傷與想家。 【選項解析】(A) homesick 想家的  (B) patient 有耐心的  (C) deaf 聾的  (D) healthy 健康的。節日獨處易感到 homesick。",
    "vocabIndex": 6
  },
  {
    "q": "Before heading into the treacherous storm, the villagers knelt before their ancient ______ to ask for protection.",
    "options": [
      "god",
      "ghost",
      "patient",
      "weight"
    ],
    "answer": 0,
    "cn": "在進入危險的暴風雨前，村民們跪倒在古老的神明面前祈求保佑庇護。 【選項解析】(A) god 神  (B) ghost 鬼魂  (C) patient 病人  (D) weight 重量。向神明祈禱庇護，選 god。",
    "vocabIndex": 9
  },
  {
    "q": "Spooky tales about a white-robed ______ wandering the old cemetery at midnight kept children from walking near the gate.",
    "options": [
      "drugstore",
      "toothache",
      "ghost",
      "wound"
    ],
    "answer": 2,
    "cn": "關於午夜時分白袍幽靈在舊墓園徘徊的恐怖故事，讓孩子們不敢走近大門。 【選項解析】(A) drugstore 藥局  (B) toothache 牙痛  (C) ghost 幽靈  (D) wound 傷口。白袍徘徊的神秘身影為 ghost。",
    "vocabIndex": 8
  },
  {
    "q": "Dealing with difficult customers requires cashiers to stay calm, courteous, and remarkably ______ at all times.",
    "options": [
      "homesick",
      "pale",
      "dizzy",
      "patient"
    ],
    "answer": 3,
    "cn": "應對難纏的顧客要求收銀員始終保持冷靜、有禮貌且具備極佳的耐心。 【選項解析】(A) homesick 想家的  (B) patient 有耐心的  (C) dizzy 頭暈的  (D) pale 蒼白的。服務顧客需要 patient。",
    "vocabIndex": 5
  },
  {
    "q": "Paramedics rushed inside the wrecked building with a folding stretcher to carry the unconscious ______ outside.",
    "options": [
      "drugstore",
      "ghost",
      "patient",
      "god"
    ],
    "answer": 2,
    "cn": "急救人員帶著折疊擔架衝進倒塌的建築物中，將昏迷不醒的傷患抬到室外。 【選項解析】(A) drugstore 藥局  (B) patient 病患  (C) ghost 鬼魂  (D) god 神。擔架抬出的對象為 patient。",
    "vocabIndex": 5
  },
  {
    "q": "The athlete was thrilled to hear from the surgeon that his torn muscle would ______ in time for the championship match.",
    "options": [
      "recover",
      "wound",
      "tear",
      "cough"
    ],
    "answer": 0,
    "cn": "運動員高興地從外科醫生那裡得知，他撕裂的肌肉將及時康復以趕上冠軍賽。 【選項解析】(A) recover 康復  (B) wound 傷害  (C) tear 撕破  (D) cough 咳嗽。肌肉傷勢康復，選 recover。",
    "vocabIndex": 0
  },
  {
    "q": "The sudden explosion sent shattered glass flying everywhere, causing a deep bleeding ______ across the mechanic's forehead.",
    "options": [
      "weight",
      "wound",
      "toothache",
      "ambulance"
    ],
    "answer": 1,
    "cn": "突然的爆炸讓破碎玻璃四處飛濺，在技工的額頭上造成了一道深深流血的傷口。 【選項解析】(A) weight 重量  (B) wound 傷口  (C) toothache 牙痛  (D) ambulance 救護車。玻璃割傷為 bleeding wound。",
    "vocabIndex": 3
  },
  {
    "q": "Many ancient cultures built magnificent stone pyramids as sacred monuments dedicated to the sun ______.",
    "options": [
      "god",
      "ghost",
      "drugstore",
      "patient"
    ],
    "answer": 0,
    "cn": "許多古代文明建造了壯麗的石造金字塔，作為獻給太陽神的神聖紀念碑。 【選項解析】(A) god 神  (B) ghost 鬼魂  (C) drugstore 藥局  (D) patient 病患。sun god 指「太陽神」。",
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "recover": {
    "pos": "v.",
    "en_def": "to become healthy or well again after an illness or injury",
    "cn_def": "康復；恢復",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become healthy or well again after an illness or injury",
        "cn_def": "康復；恢復"
      }
    ]
  },
  "toothache": {
    "pos": "n.",
    "en_def": "a sharp or dull pain in or near a tooth",
    "cn_def": "牙痛",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sharp or dull pain in or near a tooth",
        "cn_def": "牙痛"
      }
    ]
  },
  "weight": {
    "pos": "n.",
    "en_def": "how heavy someone or something is; heaviness",
    "cn_def": "重量；體重",
    "combined": [
      {
        "pos": "n.",
        "en_def": "how heavy someone or something is; heaviness",
        "cn_def": "重量；體重"
      }
    ]
  },
  "wound": {
    "pos": "n. / v.",
    "en_def": "an injury to the body, especially a cut or tear in the skin",
    "cn_def": "傷口；傷害",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an injury to the body, especially a cut or tear in the skin",
        "cn_def": "傷口；傷害"
      }
    ]
  },
  "ambulance": {
    "pos": "n.",
    "en_def": "a special vehicle used for taking sick or injured people to hospital",
    "cn_def": "救護車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a special vehicle used for taking sick or injured people to hospital",
        "cn_def": "救護車"
      }
    ]
  },
  "patient": {
    "pos": "n. / adj.",
    "en_def": "a person receiving medical care; able to wait calmly",
    "cn_def": "病人；有耐心的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a person receiving medical care; able to wait calmly",
        "cn_def": "病人；有耐心的"
      }
    ]
  },
  "homesick": {
    "pos": "adj.",
    "en_def": "sad because you are away from home and miss your family",
    "cn_def": "想家的；思鄉的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sad because you are away from home and miss your family",
        "cn_def": "想家的；思鄉的"
      }
    ]
  },
  "drugstore": {
    "pos": "n.",
    "en_def": "a shop where you can buy medicines, makeup, and daily items",
    "cn_def": "藥局；藥妝店",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a shop where you can buy medicines, makeup, and daily items",
        "cn_def": "藥局；藥妝店"
      }
    ]
  },
  "ghost": {
    "pos": "n.",
    "en_def": "the spirit of a dead person that some people believe can appear",
    "cn_def": "鬼魂；幽靈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the spirit of a dead person that some people believe can appear",
        "cn_def": "鬼魂；幽靈"
      }
    ]
  },
  "god": {
    "pos": "n.",
    "en_def": "a superhuman being worshipped as having power over nature or human fortunes",
    "cn_def": "神；上帝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a superhuman being worshipped as having power over nature or human fortunes",
        "cn_def": "神；上帝"
      }
    ]
  },
  "cough": {
    "pos": "",
    "en_def": "",
    "cn_def": "咳嗽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "咳嗽"
      }
    ]
  },
  "pray": {
    "pos": "",
    "en_def": "",
    "cn_def": "祈禱",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "祈禱"
      }
    ]
  },
  "healthy": {
    "pos": "",
    "en_def": "",
    "cn_def": "健康的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "健康的"
      }
    ]
  },
  "deaf": {
    "pos": "",
    "en_def": "",
    "cn_def": "聾的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "聾的"
      }
    ]
  },
  "dizzy": {
    "pos": "",
    "en_def": "",
    "cn_def": "頭暈的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "頭暈的"
      }
    ]
  },
  "pale": {
    "pos": "",
    "en_def": "",
    "cn_def": "蒼白的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "蒼白的"
      }
    ]
  },
  "tear": {
    "pos": "",
    "en_def": "",
    "cn_def": "撕裂",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "撕裂"
      }
    ]
  },
  "skin": {
    "pos": "",
    "en_def": "",
    "cn_def": "擦破皮",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "擦破皮"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
