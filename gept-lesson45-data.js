// Lesson 45 Quiz Data: Armed Forces, Warfare & National Defense
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 45 - Armed Forces, Warfare & National Defense",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "military",
    "pos": "adj. / n.",
    "cn_def": "軍事的；軍隊",
    "en_def": "relating to the armed forces; soldiers collectively",
    "sentence": "All young citizens in that country must complete one year of compulsory {{BLANK}} service after high school.",
    "cn": "該國的所有年輕公民在高中畢業後都必須完成一年的義務軍事服役。"
  },
  {
    "word": "soldier",
    "pos": "n.",
    "cn_def": "軍人；士兵",
    "en_def": "a person who serves in an army",
    "sentence": "The brave young {{BLANK}} guarded the mountain post all night despite the freezing blizzard and strong wind.",
    "cn": "儘管遭遇嚴寒的暴風雪與強風，那位英勇的年輕士兵依然整夜守衛著哨所。"
  },
  {
    "word": "enemy",
    "pos": "n.",
    "cn_def": "敵人；敵軍",
    "en_def": "a person, group, or country that fights against another",
    "sentence": "The patrol unit moved quietly through the dense forest, making sure that no {{BLANK}} forces were hiding nearby.",
    "cn": "巡邏隊在茂密的森林中悄悄行進，確保附近沒有隱藏任何敵軍部隊。"
  },
  {
    "word": "bomb",
    "pos": "n. / v.",
    "cn_def": "炸彈；轟炸",
    "en_def": "an explosive weapon; to attack with explosives",
    "sentence": "The police evacuated the busy train station immediately after finding a suspicious package suspected of being a {{BLANK}}.",
    "cn": "在發現一個疑似炸彈的可疑包裹後，警方立即疏散了繁忙的火車站。"
  },
  {
    "word": "gun",
    "pos": "n.",
    "cn_def": "槍；手槍；步槍",
    "en_def": "a weapon that shoots bullets or shells",
    "sentence": "Strict firearm laws prevent ordinary citizens from carrying a concealed {{BLANK}} in crowded public shopping centers.",
    "cn": "嚴格的槍枝法律防止普通公民在擁擠的公共購物中心攜帶隱蔽手槍。"
  },
  {
    "word": "weapon",
    "pos": "n.",
    "cn_def": "武器；兵器",
    "en_def": "any object used for fighting, attacking, or defense",
    "sentence": "Security officers at the international airport use modern scanners to detect any dangerous concealed {{BLANK}}.",
    "cn": "國際機場的安檢人員使用現代掃描器檢測任何隱藏的危險武器。"
  },
  {
    "word": "attack",
    "pos": "v. / n.",
    "cn_def": "攻擊；襲擊；進攻",
    "en_def": "to try to hurt or defeat using force; an assault",
    "sentence": "The enemy troops launched a sudden air {{BLANK}} on the harbor before dawn, damaging several transport ships.",
    "cn": "敵軍在黎明前對港口發動了突然的空中襲擊，損壞了數艘運輸船。"
  },
  {
    "word": "fight",
    "pos": "v. / n.",
    "cn_def": "作戰；打鬥；奮鬥",
    "en_def": "to use force against an opponent (fight / fought / fought)",
    "sentence": "Civil rights leaders {{BLANK}} tirelessly for racial equality, inspiring millions of people across the continent.",
    "cn": "民權領袖們為種族平等不知疲倦地奮鬥，激勵了整個大陸的數百萬人。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利；獲勝",
    "en_def": "success in winning a contest, war, or struggle",
    "sentence": "After months of intense political campaigning, the candidate celebrated her decisive {{BLANK}} in the election.",
    "cn": "經過數月激烈的政治競選，該候選人慶祝了她在選舉中的決定性勝利。"
  },
  {
    "word": "freedom",
    "pos": "n.",
    "cn_def": "自由；獨立",
    "en_def": "the power or right to act, speak, or think without hindrance",
    "sentence": "Democratic societies value {{BLANK}} of speech as one of the most fundamental constitutional principles.",
    "cn": "民主社會將言論自由視為最基本的憲法原則之一。"
  }
];

const MCQS = [
  {
    "q": "Security guards at the concert entrance thoroughly searched every backpack to ensure nobody brought a dangerous ______ inside.",
    "options": [
      "victory",
      "weapon",
      "freedom",
      "soldier"
    ],
    "answer": 1,
    "cn": "演唱會入口處的保全人員徹底搜查了每個背包，以確保無人將危險武器帶入內部。 【選項解析】(A) weapon 武器  (B) victory 勝利  (C) freedom 自由  (D) soldier 士兵。dangerous weapon（危險武器）。",
    "vocabIndex": 5
  },
  {
    "q": "The air force fighter jets dropped precision-guided ______ on the enemy's ammunition warehouse during the raid.",
    "options": [
      "enemies",
      "soldiers",
      "bombs",
      "victories"
    ],
    "answer": 2,
    "cn": "空軍戰鬥機在空襲期間向敵方的彈藥庫投下了精確導引炸彈。 【選項解析】(A) bombs 炸彈  (B) soldiers 士兵  (C) enemies 敵人  (D) victories 勝利。投擲炸彈為 drop bombs。",
    "vocabIndex": 3
  },
  {
    "q": "Many brave ______ from our hometown received medals of honor for defending the country with great courage.",
    "options": [
      "soldiers",
      "weapons",
      "bombs",
      "attacks"
    ],
    "answer": 0,
    "cn": "來自我們家鄉的許多英勇軍人因以莫大的勇氣保衛國家而榮獲榮譽勳章。 【選項解析】(A) soldiers 士兵  (B) weapons 武器  (C) bombs 炸彈  (D) attacks 攻擊。保衛國家的戰士為 soldiers。",
    "vocabIndex": 1
  },
  {
    "q": "Nelson Mandela dedicated his entire life to the noble struggle for personal and political ______ in South Africa.",
    "options": [
      "attack",
      "weapon",
      "bomb",
      "freedom"
    ],
    "answer": 3,
    "cn": "納爾遜·曼德拉將他的一生奉獻給南非人民爭取個人與政治自由的崇高奮鬥。 【選項解析】(A) freedom 自由  (B) weapon 武器  (C) bomb 炸彈  (D) attack 襲擊。struggle for freedom（爭取自由）。",
    "vocabIndex": 9
  },
  {
    "q": "The army launched an unexpected ground ______ against the fortress, catching the defending forces completely by surprise.",
    "options": [
      "weapon",
      "freedom",
      "attack",
      "victory"
    ],
    "answer": 2,
    "cn": "陸軍對該堡壘發動了意想不到的地面進攻，令守軍措手不及。 【選項解析】(A) attack 進攻  (B) freedom 自由  (C) weapon 武器  (D) victory 勝利。launch ground attack（發動地面進攻）。",
    "vocabIndex": 6
  },
  {
    "q": "After years of military conflict, both governments signed a historic peace agreement to end the destructive ______.",
    "options": [
      "bomb",
      "weapon",
      "freedom",
      "fight"
    ],
    "answer": 3,
    "cn": "歷經多年的軍事衝突後，兩國政府簽署了一項歷史性的和平協議，以結束具毀滅性的戰鬥。 【選項解析】(A) fight 戰鬥  (B) weapon 武器  (C) freedom 自由  (D) bomb 炸彈。end the fight（終結戰鬥）。",
    "vocabIndex": 7
  },
  {
    "q": "The national team's stunning ______ against the reigning world champions caused wild celebrations in the capital.",
    "options": [
      "weapon",
      "victory",
      "bomb",
      "attack"
    ],
    "answer": 1,
    "cn": "國家隊擊敗衛冕世界冠軍的驚人勝利，在首都引發了狂歡慶祝。 【選項解析】(A) victory 勝利  (B) weapon 武器  (C) bomb 炸彈  (D) attack 襲擊。stunning victory（令人驚嘆的勝利）。",
    "vocabIndex": 8
  },
  {
    "q": "The patrol spotted a group of armed ______ soldiers creeping across the northern border under cover of night.",
    "options": [
      "enemy",
      "freedom",
      "victory",
      "weapon"
    ],
    "answer": 0,
    "cn": "巡邏隊發現一隊全副武裝的敵軍士兵在夜色掩護下潛越北部邊界。 【選項解析】(A) enemy 敵人的  (B) freedom 自由的  (C) victory 勝利的  (D) weapon 武器的。enemy soldiers（敵軍士兵）。",
    "vocabIndex": 2
  },
  {
    "q": "In some countries, high school graduates must complete two years of mandatory ______ training before entering college.",
    "options": [
      "lovely",
      "military",
      "unique",
      "selfish"
    ],
    "answer": 1,
    "cn": "在某些國家，高中畢業生在進入大學之前必須完成兩年的義務軍事訓練。 【選項解析】(A) military 軍事的  (B) lovely 可愛的  (C) unique 獨特的  (D) selfish 自私的。military training（軍事訓練）。",
    "vocabIndex": 0
  },
  {
    "q": "Police officers are required to keep their service ______ securely holstered whenever they patrol urban streets.",
    "options": [
      "guns",
      "bombs",
      "victories",
      "attacks"
    ],
    "answer": 0,
    "cn": "警官在市區街道巡邏時，必須將值勤配槍牢固地放在槍套中。 【選項解析】(A) guns 槍枝  (B) bombs 炸彈  (C) victories 勝利  (D) attacks 攻擊。service guns（值勤配槍）。",
    "vocabIndex": 4
  },
  {
    "q": "International humanitarian organizations condemned the brutal chemical ______ carried out on helpless civilian neighborhoods.",
    "options": [
      "soldier",
      "freedom",
      "victory",
      "attack"
    ],
    "answer": 3,
    "cn": "國際人道組織譴責了針對無助平民社區進行的殘酷化學武器襲擊。 【選項解析】(A) attack 襲擊  (B) freedom 自由  (C) victory 勝利  (D) soldier 士兵。chemical attack（化學武器攻擊）。",
    "vocabIndex": 6
  },
  {
    "q": "The courageous ______ risked his own life to carry his injured comrade back to the field hospital safely.",
    "options": [
      "bomb",
      "weapon",
      "soldier",
      "victory"
    ],
    "answer": 2,
    "cn": "英勇的士兵冒著生命危險，將受傷的戰友安全帶回野戰醫院。 【選項解析】(A) soldier 士兵  (B) weapon 武器  (C) bomb 炸彈  (D) victory 勝利。courageous soldier（英勇士兵）。",
    "vocabIndex": 1
  },
  {
    "q": "Winning independence allowed the newly established republic to enjoy religious and economic ______.",
    "options": [
      "weapon",
      "freedom",
      "bomb",
      "enemy"
    ],
    "answer": 1,
    "cn": "贏得獨立使這個新建立的共和國得以享有宗教與經濟自由。 【選項解析】(A) freedom 自由  (B) weapon 武器  (C) bomb 炸彈  (D) enemy 敵人。religious and economic freedom（宗教與經濟自由）。",
    "vocabIndex": 9
  },
  {
    "q": "Ancient Roman warriors fought bravely in battle using bronze swords and heavy iron shields as their primary ______.",
    "options": [
      "victories",
      "freedoms",
      "weapons",
      "soldiers"
    ],
    "answer": 2,
    "cn": "古羅馬戰士在戰鬥中英勇作戰，使用青銅劍和沉重的鐵盾作為他們的主要武器。 【選項解析】(A) weapons 武器  (B) freedoms 自由  (C) victories 勝利  (D) soldiers 士兵。primary weapons（主要武器）。",
    "vocabIndex": 5
  },
  {
    "q": "An unexploded World War II ______ was discovered beneath the construction site, forcing thousands of residents to evacuate.",
    "options": [
      "bomb",
      "soldier",
      "victory",
      "freedom"
    ],
    "answer": 0,
    "cn": "在建築工地地下發現了一枚二戰未爆彈，迫使數千名居民緊急疏散。 【選項解析】(A) bomb 炸彈  (B) soldier 士兵  (C) victory 勝利  (D) freedom 自由。unexploded bomb（未爆彈）。",
    "vocabIndex": 3
  },
  {
    "q": "The naval fleet scored a glorious ______ over the pirates, securing the vital international trade shipping lane.",
    "options": [
      "attack",
      "weapon",
      "bomb",
      "victory"
    ],
    "answer": 3,
    "cn": "海軍艦隊取得了對抗海盜的光榮勝利，保障了重要國際貿易航道的安全。 【選項解析】(A) victory 勝利  (B) weapon 武器  (C) bomb 炸彈  (D) attack 襲擊。glorious victory（光榮勝利）。",
    "vocabIndex": 8
  },
  {
    "q": "Both boxers agreed to ______ fairly according to international sports regulations without any illegal moves.",
    "options": [
      "fight",
      "attack",
      "shoot",
      "bomb"
    ],
    "answer": 0,
    "cn": "兩名拳擊手同意根據國際體育規則公平搏擊，不採取任何非法動作。 【選項解析】(A) fight 格鬥  (B) attack 襲擊  (C) shoot 射擊  (D) bomb 轟炸。boxers fight fairly（拳擊手公平競技）。",
    "vocabIndex": 7
  },
  {
    "q": "During the covert operation, the intelligence unit intercepted secret messages sent by the ______ commander.",
    "options": [
      "lovely",
      "enemy",
      "unique",
      "diligent"
    ],
    "answer": 1,
    "cn": "在秘密行動中，情報部隊截獲了敵方指揮官發送的機密訊息。 【選項解析】(A) enemy 敵方的  (B) lovely 美好的  (C) unique 獨特的  (D) diligent 勤奮的。enemy commander（敵方指揮官）。",
    "vocabIndex": 2
  },
  {
    "q": "Modern ______ technology includes advanced radar satellites, unmanned drones, and supersonic fighter jets.",
    "options": [
      "polite",
      "talkative",
      "slender",
      "military"
    ],
    "answer": 3,
    "cn": "現代軍事科技包括先進的雷達衛星、無人偵察機以及超音速戰鬥機。 【選項解析】(A) military 軍事的  (B) talkative 健談的  (C) slender 苗條的  (D) polite 有禮貌的。military technology（軍事科技）。",
    "vocabIndex": 0
  },
  {
    "q": "The bank robber pulled out a loaded ______ and ordered the terrified tellers to hand over all the cash.",
    "options": [
      "freedom",
      "victory",
      "gun",
      "attack"
    ],
    "answer": 2,
    "cn": "銀行搶匪拔出一把裝滿子彈的手槍，命令嚇壞的出納員交出所有現金。 【選項解析】(A) gun 槍枝  (B) victory 勝利  (C) freedom 自由  (D) attack 襲擊。loaded gun（裝滿子彈的槍）。",
    "vocabIndex": 4
  },
  {
    "q": "Defending our homeland against foreign ______ is the constitutional duty of every armed forces division.",
    "options": [
      "attack",
      "freedom",
      "victory",
      "soldier"
    ],
    "answer": 0,
    "cn": "保衛家園抵禦外來襲擊與侵犯，是各武裝部隊憲法賦予的職責。 【選項解析】(A) attack 攻擊  (B) freedom 自由  (C) victory 勝利  (D) soldier 士兵。foreign attack（外國侵犯）。",
    "vocabIndex": 6
  },
  {
    "q": "Without basic press ______, citizens cannot receive objective news about governmental affairs and decisions.",
    "options": [
      "weapon",
      "freedom",
      "bomb",
      "soldier"
    ],
    "answer": 1,
    "cn": "沒有基本的新聞自由，公民就無法接收到有關政府事務和決策的客觀新聞。 【選項解析】(A) freedom 自由  (B) weapon 武器  (C) bomb 炸彈  (D) soldier 士兵。press freedom（新聞自由）。",
    "vocabIndex": 9
  },
  {
    "q": "The military general was convinced that superior strategy rather than sheer numbers would guarantee their ultimate ______.",
    "options": [
      "bomb",
      "weapon",
      "victory",
      "enemy"
    ],
    "answer": 2,
    "cn": "這位陸軍將領深信，高超的戰略而非單純的人數才是確保最終勝利的關鍵。 【選項解析】(A) victory 勝利  (B) weapon 武器  (C) bomb 炸彈  (D) enemy 敵人。ultimate victory（最終勝利）。",
    "vocabIndex": 8
  },
  {
    "q": "The police officer noticed that the suspect was attempting to draw a concealed ______ from his jacket pocket.",
    "options": [
      "soldier",
      "freedom",
      "victory",
      "weapon"
    ],
    "answer": 3,
    "cn": "警官注意到該嫌疑人正試圖從夾克口袋中拔出一件隱蔽的危險武器。 【選項解析】(A) weapon 武器  (B) freedom 自由  (C) victory 勝利  (D) soldier 士兵。concealed weapon（隱蔽武器）。",
    "vocabIndex": 5
  },
  {
    "q": "Every injured ______ was treated with great care by dedicated nurses in the temporary medical tent.",
    "options": [
      "bomb",
      "weapon",
      "soldier",
      "attack"
    ],
    "answer": 2,
    "cn": "每一位受傷的士兵都在臨時醫療帳篷中受到了敬業護士的悉心照料。 【選項解析】(A) soldier 士兵  (B) weapon 武器  (C) bomb 炸彈  (D) attack 攻擊。injured soldier（傷兵）。",
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "military": {
    "pos": "adj. / n.",
    "en_def": "relating to the armed forces; soldiers collectively",
    "cn_def": "軍事的；軍隊",
    "combined": [
      {
        "pos": "adj. / n.",
        "en_def": "relating to the armed forces; soldiers collectively",
        "cn_def": "軍事的；軍隊"
      }
    ]
  },
  "soldier": {
    "pos": "n.",
    "en_def": "a person who serves in an army",
    "cn_def": "軍人；士兵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who serves in an army",
        "cn_def": "軍人；士兵"
      }
    ]
  },
  "enemy": {
    "pos": "n.",
    "en_def": "a person, group, or country that fights against another",
    "cn_def": "敵人；敵軍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, group, or country that fights against another",
        "cn_def": "敵人；敵軍"
      }
    ]
  },
  "bomb": {
    "pos": "n. / v.",
    "en_def": "an explosive weapon; to attack with explosives",
    "cn_def": "炸彈；轟炸",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "an explosive weapon; to attack with explosives",
        "cn_def": "炸彈；轟炸"
      }
    ]
  },
  "gun": {
    "pos": "n.",
    "en_def": "a weapon that shoots bullets or shells",
    "cn_def": "槍；手槍；步槍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a weapon that shoots bullets or shells",
        "cn_def": "槍；手槍；步槍"
      }
    ]
  },
  "weapon": {
    "pos": "n.",
    "en_def": "any object used for fighting, attacking, or defense",
    "cn_def": "武器；兵器",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any object used for fighting, attacking, or defense",
        "cn_def": "武器；兵器"
      }
    ]
  },
  "attack": {
    "pos": "v. / n.",
    "en_def": "to try to hurt or defeat using force; an assault",
    "cn_def": "攻擊；襲擊；進攻",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to try to hurt or defeat using force; an assault",
        "cn_def": "攻擊；襲擊；進攻"
      }
    ]
  },
  "fight": {
    "pos": "v. / n.",
    "en_def": "to use force against an opponent (fight / fought / fought)",
    "cn_def": "作戰；打鬥；奮鬥",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to use force against an opponent (fight / fought / fought)",
        "cn_def": "作戰；打鬥；奮鬥"
      }
    ]
  },
  "victory": {
    "pos": "n.",
    "en_def": "success in winning a contest, war, or struggle",
    "cn_def": "勝利；獲勝",
    "combined": [
      {
        "pos": "n.",
        "en_def": "success in winning a contest, war, or struggle",
        "cn_def": "勝利；獲勝"
      }
    ]
  },
  "freedom": {
    "pos": "n.",
    "en_def": "the power or right to act, speak, or think without hindrance",
    "cn_def": "自由；獨立",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the power or right to act, speak, or think without hindrance",
        "cn_def": "自由；獨立"
      }
    ]
  },
  "enemies": {
    "pos": "",
    "en_def": "",
    "cn_def": "敵人",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "敵人"
      }
    ]
  },
  "soldiers": {
    "pos": "",
    "en_def": "",
    "cn_def": "士兵",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "士兵"
      }
    ]
  },
  "bombs": {
    "pos": "",
    "en_def": "",
    "cn_def": "炸彈",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "炸彈"
      }
    ]
  },
  "victories": {
    "pos": "",
    "en_def": "",
    "cn_def": "勝利",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "勝利"
      }
    ]
  },
  "weapons": {
    "pos": "",
    "en_def": "",
    "cn_def": "武器",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "武器"
      }
    ]
  },
  "attacks": {
    "pos": "",
    "en_def": "",
    "cn_def": "攻擊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "攻擊"
      }
    ]
  },
  "lovely": {
    "pos": "",
    "en_def": "",
    "cn_def": "可愛的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "可愛的"
      }
    ]
  },
  "unique": {
    "pos": "",
    "en_def": "",
    "cn_def": "獨特的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "獨特的"
      }
    ]
  },
  "selfish": {
    "pos": "",
    "en_def": "",
    "cn_def": "自私的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "自私的"
      }
    ]
  },
  "guns": {
    "pos": "",
    "en_def": "",
    "cn_def": "槍枝",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "槍枝"
      }
    ]
  },
  "freedoms": {
    "pos": "",
    "en_def": "",
    "cn_def": "自由",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "自由"
      }
    ]
  },
  "shoot": {
    "pos": "",
    "en_def": "",
    "cn_def": "射擊",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "射擊"
      }
    ]
  },
  "diligent": {
    "pos": "",
    "en_def": "",
    "cn_def": "勤奮的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "勤奮的"
      }
    ]
  },
  "polite": {
    "pos": "",
    "en_def": "",
    "cn_def": "有禮貌的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "有禮貌的"
      }
    ]
  },
  "talkative": {
    "pos": "",
    "en_def": "",
    "cn_def": "健談的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "健談的"
      }
    ]
  },
  "slender": {
    "pos": "",
    "en_def": "",
    "cn_def": "苗條的",
    "combined": [
      {
        "pos": "",
        "en_def": "",
        "cn_def": "苗條的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
