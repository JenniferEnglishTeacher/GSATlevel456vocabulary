// Lesson 18 Quiz Data: Furniture, Bedding & Bathroom Hardware
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 18 - Furniture, Bedding & Bathroom Hardware",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "長凳；長椅",
    "en_def": "a long seat for several people, typically made of wood or stone",
    "sentence": "The elderly couple sat quietly on a wooden park {{BLANK}} to rest and feed the pigeons under the oak tree.",
    "cn": "那對老夫婦靜靜地坐在公園木長椅上休息，並在橡樹下餵食鴿子。"
  },
  {
    "word": "armchair",
    "pos": "n.",
    "cn_def": "單人扶手沙發椅",
    "en_def": "a comfortable chair with supports for the arms",
    "sentence": "Grandfather settled into his leather {{BLANK}} with a cup of hot tea to read the evening newspaper.",
    "cn": "祖父坐在他的皮質單人扶手椅裡，喝著熱茶閱讀晚報。"
  },
  {
    "word": "pillow",
    "pos": "n.",
    "cn_def": "枕頭",
    "en_def": "a soft cushion used to support the head during sleep",
    "sentence": "I was so exhausted after hiking up the mountain that my eyes closed the moment my head touched the {{BLANK}}.",
    "cn": "登山健行後我筋疲力竭，以至於我的頭一碰到枕頭眼睛就閉上了。"
  },
  {
    "word": "sheet",
    "pos": "n.",
    "cn_def": "床單；一張薄紙/板",
    "en_def": "a large piece of cotton or linen used on a bed; a broad thin piece",
    "sentence": "Mother laundered the bed linen every Saturday morning and spread a clean white cotton {{BLANK}} across the mattress.",
    "cn": "母親每週六早晨洗滌寢具，並在床墊上鋪上一張乾淨的白色純棉床單。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "毛毯；厚毯子",
    "en_def": "a thick piece of woolen or warm material used as a bed covering",
    "sentence": "The mountain night was bitterly cold, so the camp counselor handed each student an extra wool {{BLANK}}.",
    "cn": "山裡的夜晚寒冷徹骨，所以營隊輔導員給每位學生分發了一條額外的羊毛毯。"
  },
  {
    "word": "sink",
    "pos": "n. / v.",
    "cn_def": "水槽；下沉；沉沒",
    "en_def": "a fixed basin with a water supply; to go down below surface",
    "sentence": "Before preparing dinner, the chef washed his hands with soap and cleaned the fresh vegetables in the kitchen {{BLANK}}.",
    "cn": "在準備晚餐前，廚師用肥皂洗手並在廚房水槽清洗新鮮蔬菜。"
  },
  {
    "word": "tub",
    "pos": "n.",
    "cn_def": "浴缸；桶",
    "en_def": "a wide, open container used especially for taking a bath",
    "sentence": "After running a twenty-kilometer race in the rain, Samuel soaked his sore muscles in a warm bath {{BLANK}}.",
    "cn": "在雨中跑完二十公里賽跑後，塞繆爾在溫暖的浴缸中浸泡舒緩痠痛的肌肉。"
  },
  {
    "word": "mirror",
    "pos": "n.",
    "cn_def": "鏡子",
    "en_def": "a reflective glass surface used for viewing one's appearance",
    "sentence": "The actor stood backstage in front of the illuminated dressing {{BLANK}} to make sure his costume was perfect.",
    "cn": "演員站在後台有照明的更衣梳妝鏡前，確保他的戲服完美無瑕。"
  },
  {
    "word": "faucet",
    "pos": "n.",
    "cn_def": "水龍頭",
    "en_def": "a device by which a flow of liquid from a pipe is controlled",
    "sentence": "To conserve water during the dry season, always remember to turn off the bathroom {{BLANK}} while brushing teeth.",
    "cn": "為了在乾季節約用水，刷牙時請務必記得關緊浴室水龍頭。"
  },
  {
    "word": "bucket",
    "pos": "n.",
    "cn_def": "提桶；水桶",
    "en_def": "a cylindrical vessel used for carrying liquids or materials",
    "sentence": "The janitor filled a yellow plastic {{BLANK}} with soapy water to mop the classroom hallway floor.",
    "cn": "工友在黃色塑膠水桶裡裝滿肥皂水，以拖洗教室走廊的地板。"
  }
];

const MCQS = [
  {
    "q": "We rested our tired legs on a shaded stone ______ overlooking the botanical lotus pond.",
    "options": [
      "bench",
      "pillow",
      "faucet",
      "sink"
    ],
    "answer": 0,
    "cn": "我們在俯瞰植物園蓮花池的石長椅上休息疲憊的雙腿。 【選項解析】(A) bench 長凳  (B) pillow 枕頭  (C) faucet 水龍頭  (D) sink 水槽。戶外休息處為 stone bench。",
    "vocabIndex": 0
  },
  {
    "q": "The tired businessman collapsed into the soft velvet ______ by the fireplace and fell asleep.",
    "options": [
      "bucket",
      "tub",
      "armchair",
      "sheet"
    ],
    "answer": 2,
    "cn": "疲累的商人倒在壁爐旁柔軟的天鵝絨單人扶手椅裡睡著了。 【選項解析】(A) bucket 水桶  (B) armchair 扶手椅  (C) tub 浴缸  (D) sheet 床單。壁爐旁個人座椅為 velvet armchair。",
    "vocabIndex": 1
  },
  {
    "q": "Sleeping on an ergonomic feather ______ helps support your neck and prevents morning stiffness.",
    "options": [
      "faucet",
      "pillow",
      "bucket",
      "bench"
    ],
    "answer": 1,
    "cn": "睡在人體工學羽絨枕上有助於支撐頸部，防止晨起頸部僵硬。 【選項解析】(A) faucet 水龍頭  (B) bucket 水桶  (C) pillow 枕頭  (D) bench 長椅。頸部支撐寢具為 feather pillow。",
    "vocabIndex": 2
  },
  {
    "q": "Mother ironed the freshly washed linen ______ before tucking it neatly under the hotel mattress.",
    "options": [
      "sink",
      "armchair",
      "faucet",
      "sheet"
    ],
    "answer": 3,
    "cn": "母親熨燙了剛洗好的亞麻床單，然後整齊地塞入飯店床墊下。 【選項解析】(A) sink 水槽  (B) armchair 扶手椅  (C) faucet 水龍頭  (D) sheet 床單。鋪在床墊上的為 linen sheet。",
    "vocabIndex": 3
  },
  {
    "q": "When freezing blizzards hit the cabin, we wrapped ourselves in a thick knitted ______ on the couch.",
    "options": [
      "blanket",
      "sink",
      "bucket",
      "bench"
    ],
    "answer": 0,
    "cn": "當刺骨的暴風雪襲擊木屋時，我們在沙發上將自己裹在厚針織毯裡。 【選項解析】(A) blanket 毛毯  (B) sink 水槽  (C) bucket 水桶  (D) bench 長椅。禦寒裹身用 thick knitted blanket。",
    "vocabIndex": 4
  },
  {
    "q": "Please place all dirty plates and coffee mugs into the stainless steel kitchen ______ to be washed.",
    "options": [
      "armchair",
      "blanket",
      "sink",
      "pillow"
    ],
    "answer": 2,
    "cn": "請把所有髒盤子和咖啡杯放進廚房不鏽鋼水槽裡等待清洗。 【選項解析】(A) armchair 扶手椅  (B) sink 水槽  (C) blanket 毛毯  (D) pillow 枕頭。洗碗槽為 kitchen sink。",
    "vocabIndex": 5
  },
  {
    "q": "The mother filled the ceramic ______ with warm water and bubbles so her toddler could take a fun bath.",
    "options": [
      "bench",
      "tub",
      "sheet",
      "faucet"
    ],
    "answer": 1,
    "cn": "母親在陶瓷浴缸裡放滿溫水和泡泡，讓幼兒能洗個好玩的澡。 【選項解析】(A) bench 長椅  (B) sheet 床單  (C) tub 浴缸  (D) faucet 水龍頭。泡澡容器為 ceramic bath tub。",
    "vocabIndex": 6
  },
  {
    "q": "The girl looked at her reflection in the full-length bedroom ______ while trying on her prom dress.",
    "options": [
      "bucket",
      "blanket",
      "sink",
      "mirror"
    ],
    "answer": 3,
    "cn": "女孩試穿畢業舞會禮服時，看著臥室全身鏡中的自己倒影。 【選項解析】(A) bucket 水桶  (B) blanket 毛毯  (C) sink 水槽  (D) mirror 鏡子。全身穿衣鏡為 full-length mirror。",
    "vocabIndex": 7
  },
  {
    "q": "Call a plumber right away because the leaky chrome ______ in the guest bathroom has been dripping all night.",
    "options": [
      "blanket",
      "faucet",
      "sheet",
      "bench"
    ],
    "answer": 1,
    "cn": "立刻打電話叫水電工，因為客用浴室裡漏水的鉻合金水龍頭滴了一整晚。 【選項解析】(A) faucet 水龍頭  (B) blanket 毛毯  (C) sheet 床單  (D) bench 長椅。滴水的管件為 leaky faucet。",
    "vocabIndex": 8
  },
  {
    "q": "The firefighter carried a heavy metal ______ of sand to extinguish the small chemical flame.",
    "options": [
      "pillow",
      "armchair",
      "sheet",
      "bucket"
    ],
    "answer": 3,
    "cn": "消防隊員提著一金屬桶沙子，以撲滅微小的化學火焰。 【選項解析】(A) pillow 枕頭  (B) bucket 提桶  (C) sheet 床單  (D) armchair 扶手椅。提裝沙子用 metal bucket。",
    "vocabIndex": 9
  },
  {
    "q": "After hiking five miles through the forest, the couple sat down on a rustic wooden ______ to drink water.",
    "options": [
      "bench",
      "sink",
      "sheet",
      "faucet"
    ],
    "answer": 0,
    "cn": "在穿越森林健行五英里後，這對伴侶在一張質樸的木長椅上坐下喝水。 【選項解析】(A) sheet 床單  (B) sink 水槽  (C) bench 長凳  (D) faucet 水龍頭。健行休憩坐在 rustic wooden bench。",
    "vocabIndex": 0
  },
  {
    "q": "Grandmother enjoys knitting sweaters while sitting comfortably in her favorite reclining ______.",
    "options": [
      "bucket",
      "tub",
      "armchair",
      "pillow"
    ],
    "answer": 2,
    "cn": "祖母喜歡舒適地坐在她最喜歡的躺椅式單人扶手椅裡織毛衣。 【選項解析】(A) bucket 水桶  (B) tub 浴缸  (C) pillow 枕頭  (D) armchair 扶手椅。單人斜躺椅為 reclining armchair。",
    "vocabIndex": 1
  },
  {
    "q": "The little boy had a playful fight with his sister using a fluffy feather ______ on the bed.",
    "options": [
      "bench",
      "faucet",
      "sink",
      "pillow"
    ],
    "answer": 3,
    "cn": "小男孩在床上用蓬鬆的羽毛枕頭和他的妹妹展開了嬉戲打鬧。 【選項解析】(A) pillow 枕頭  (B) faucet 水龍頭  (C) sink 水槽  (D) bench 長椅。枕頭戰為 fluffy feather pillow fight。",
    "vocabIndex": 2
  },
  {
    "q": "The teacher handed each student a clean ______ of blank paper to write their creative poetry assignment.",
    "options": [
      "tub",
      "sheet",
      "armchair",
      "bucket"
    ],
    "answer": 1,
    "cn": "老師分發給每位學生一張乾淨的空白紙，供他們書寫創意詩歌作業。 【選項解析】(A) tub 桶  (B) sheet 一張紙  (C) armchair 扶手椅  (D) bucket 水桶。a clean sheet of blank paper（一張白紙）。",
    "vocabIndex": 3
  },
  {
    "q": "The homeless shelter collected hundreds of thermal ______ to distribute to people during the cold wave.",
    "options": [
      "blankets",
      "sinks",
      "faucets",
      "benches"
    ],
    "answer": 0,
    "cn": "遊民收容所募集了數百條保暖毯，準備在寒流期間分發給民眾。 【選項解析】(A) faucets 水龍頭  (B) sinks 水槽  (C) blankets 保暖毯  (D) benches 長椅。寒流發送物資為 thermal blankets。",
    "vocabIndex": 4
  },
  {
    "q": "Soap scum accumulated around the porcelain bathroom ______ because no one had cleaned it for weeks.",
    "options": [
      "armchair",
      "pillow",
      "sink",
      "sheet"
    ],
    "answer": 2,
    "cn": "陶瓷浴室水槽周圍積滿了肥皂垢，因為已經好幾週沒人清理了。 【選項解析】(A) armchair 扶手椅  (B) pillow 枕頭  (C) sheet 床單  (D) sink 洗手槽。浴室洗臉槽為 porcelain bathroom sink。",
    "vocabIndex": 5
  },
  {
    "q": "After a stressful day at the office, relaxing in a hot scented ______ helps relieve physical tension.",
    "options": [
      "bench",
      "tub",
      "faucet",
      "mirror"
    ],
    "answer": 1,
    "cn": "在辦公室度過充滿壓力的一天後，在熱香氛浴缸裡放鬆能舒緩身體緊繃。 【選項解析】(A) tub 浴缸  (B) bench 長凳  (C) faucet 水龍頭  (D) mirror 鏡子。泡香氛熱水澡在 hot scented tub。",
    "vocabIndex": 6
  },
  {
    "q": "The driver adjusted his rear-view ______ carefully before backing the minivan out of the tight driveway.",
    "options": [
      "mirror",
      "bucket",
      "blanket",
      "sheet"
    ],
    "answer": 0,
    "cn": "在將休旅車倒出狹窄車道前，駕駛仔細調整了他的車內後視鏡。 【選項解析】(A) bucket 水桶  (B) mirror 鏡子  (C) blanket 毛毯  (D) sheet 床單。後照鏡為 rear-view mirror。",
    "vocabIndex": 7
  },
  {
    "q": "Don't leave the garden ______ running while you answer the phone, or you will waste gallons of water.",
    "options": [
      "pillow",
      "armchair",
      "faucet",
      "sheet"
    ],
    "answer": 2,
    "cn": "接聽電話時不要讓花園水龍頭一直開著流水，否則會浪費數加侖水資源。 【選項解析】(A) pillow 枕頭  (B) armchair 扶手椅  (C) faucet 水龍頭  (D) sheet 床單。戶外龍頭為 garden faucet。",
    "vocabIndex": 8
  },
  {
    "q": "The little boy took his colorful plastic shovel and ______ to build sandcastles along the seaside beach.",
    "options": [
      "sheet",
      "mirror",
      "bench",
      "bucket"
    ],
    "answer": 3,
    "cn": "小男孩拿著他色彩繽紛的塑膠小鏟子和水桶，在海邊沙灘上建造沙堡。 【選項解析】(A) sheet 床單  (B) mirror 鏡子  (C) bench 長椅  (D) bucket 水桶。沙灘玩沙玩具為 shovel and bucket。",
    "vocabIndex": 9
  },
  {
    "q": "Tourists sat on the green park ______ to eat takeout sandwiches and enjoy the afternoon sunshine.",
    "options": [
      "bench",
      "faucet",
      "sink",
      "pillow"
    ],
    "answer": 0,
    "cn": "觀光客坐在綠色公園長椅上吃外帶三明治，享受午後陽光照拂。 【選項解析】(A) bench 長椅  (B) faucet 水龍頭  (C) sink 水槽  (D) pillow 枕頭。公園長椅為 green park bench。",
    "vocabIndex": 0
  },
  {
    "q": "Father rested his weary head against the cushioned back of the antique ______ and watched television.",
    "options": [
      "tub",
      "armchair",
      "bucket",
      "sheet"
    ],
    "answer": 1,
    "cn": "父親把疲憊的頭靠在古董單人沙發椅的軟墊靠背上看電視。 【選項解析】(A) tub 浴缸  (B) armchair 單人椅  (C) bucket 水桶  (D) sheet 床單。古董單人扶手沙發為 antique armchair。",
    "vocabIndex": 1
  },
  {
    "q": "If you wake up with neck pain every day, you probably need a firmer orthopedic ______.",
    "options": [
      "bucket",
      "faucet",
      "sink",
      "pillow"
    ],
    "answer": 3,
    "cn": "如果你每天醒來都脖子痛，你可能需要一個更堅挺的人體工學枕頭。 【選項解析】(A) bucket 水桶  (B) faucet 水龍頭  (C) pillow 枕頭  (D) sink 水槽。支撐頸椎的枕頭為 firmer orthopedic pillow。",
    "vocabIndex": 2
  },
  {
    "q": "Housekeeping staff at the resort replace the cotton bed ______ after each guest checks out of the room.",
    "options": [
      "faucet",
      "armchair",
      "sheet",
      "tub"
    ],
    "answer": 2,
    "cn": "度假村的房務人員在每位房客退房之後都會更換棉質床單。 【選項解析】(A) faucet 水龍頭  (B) armchair 扶手椅  (C) tub 浴缸  (D) sheet 床單。換洗床單為 cotton bed sheet。",
    "vocabIndex": 3
  },
  {
    "q": "Even during chilly autumn evenings, wrapping a warm fleece ______ over your legs keeps you cozy outdoors.",
    "options": [
      "sink",
      "blanket",
      "faucet",
      "mirror"
    ],
    "answer": 1,
    "cn": "即使在涼颼颼的秋日傍晚，在雙腿上披一條溫暖的刷毛毯能讓你在戶外保持舒適。 【選項解析】(A) blanket 毛毯  (B) sink 水槽  (C) faucet 水龍頭  (D) mirror 鏡子。蓋在腿上的保暖被為 warm fleece blanket。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "bench": {
    "pos": "n.",
    "en_def": "a long seat for several people, typically made of wood or stone",
    "cn_def": "長凳；長椅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a long seat for several people, typically made of wood or stone",
        "cn_def": "長凳；長椅"
      }
    ]
  },
  "armchair": {
    "pos": "n.",
    "en_def": "a comfortable chair with supports for the arms",
    "cn_def": "單人扶手沙發椅",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a comfortable chair with supports for the arms",
        "cn_def": "單人扶手沙發椅"
      }
    ]
  },
  "pillow": {
    "pos": "n.",
    "en_def": "a soft cushion used to support the head during sleep",
    "cn_def": "枕頭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a soft cushion used to support the head during sleep",
        "cn_def": "枕頭"
      }
    ]
  },
  "sheet": {
    "pos": "n.",
    "en_def": "a large piece of cotton or linen used on a bed; a broad thin piece",
    "cn_def": "床單；一張薄紙/板",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large piece of cotton or linen used on a bed; a broad thin piece",
        "cn_def": "床單；一張薄紙/板"
      }
    ]
  },
  "blanket": {
    "pos": "n.",
    "en_def": "a thick piece of woolen or warm material used as a bed covering",
    "cn_def": "毛毯；厚毯子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thick piece of woolen or warm material used as a bed covering",
        "cn_def": "毛毯；厚毯子"
      }
    ]
  },
  "sink": {
    "pos": "n. / v.",
    "en_def": "a fixed basin with a water supply; to go down below surface",
    "cn_def": "水槽；下沉；沉沒",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "a fixed basin with a water supply; to go down below surface",
        "cn_def": "水槽；下沉；沉沒"
      }
    ]
  },
  "tub": {
    "pos": "n.",
    "en_def": "a wide, open container used especially for taking a bath",
    "cn_def": "浴缸；桶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wide, open container used especially for taking a bath",
        "cn_def": "浴缸；桶"
      }
    ]
  },
  "mirror": {
    "pos": "n.",
    "en_def": "a reflective glass surface used for viewing one's appearance",
    "cn_def": "鏡子",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a reflective glass surface used for viewing one's appearance",
        "cn_def": "鏡子"
      }
    ]
  },
  "faucet": {
    "pos": "n.",
    "en_def": "a device by which a flow of liquid from a pipe is controlled",
    "cn_def": "水龍頭",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a device by which a flow of liquid from a pipe is controlled",
        "cn_def": "水龍頭"
      }
    ]
  },
  "bucket": {
    "pos": "n.",
    "en_def": "a cylindrical vessel used for carrying liquids or materials",
    "cn_def": "提桶；水桶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cylindrical vessel used for carrying liquids or materials",
        "cn_def": "提桶；水桶"
      }
    ]
  },
  "blankets": {
    "pos": "",
    "en_def": "",
    "cn_def": "保暖毯",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "保暖毯"
      }
    ]
  },
  "sinks": {
    "pos": "",
    "en_def": "",
    "cn_def": "水槽",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "水槽"
      }
    ]
  },
  "faucets": {
    "pos": "",
    "en_def": "",
    "cn_def": "水龍頭",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "水龍頭"
      }
    ]
  },
  "benches": {
    "pos": "",
    "en_def": "",
    "cn_def": "長椅",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "長椅"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
