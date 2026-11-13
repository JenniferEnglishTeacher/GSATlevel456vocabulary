// Part 2 Quiz Data: glow – kidney
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 13-2 - glow – kidney",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "glow",
    "pos": "v.",
    "cn_def": "發光；容光煥發；發熱（動詞）",
    "en_def": "to give out steady light without a flame; to look radiant with health or joy",
    "sentence": "Tiny fireflies gathered around the quiet countryside lake and began to {{BLANK}} brightly in the dark summer night.",
    "cn": "小螢火蟲聚集在寂靜的鄉間湖泊旁，開始在黑夜中明亮地發光。"
  },
  {
    "word": "glow",
    "pos": "n.",
    "cn_def": "光芒；紅潤微光；喜悅自豪感（不可數/可數）",
    "en_def": "a steady light produced by heat or luminescence; a warm, cheerful feeling",
    "sentence": "After spending two weeks relaxing at the sunny seaside resort, Jessica had a lovely healthy {{BLANK}} on her skin.",
    "cn": "在陽光明媚的海濱度假村放鬆了兩週後，潔西卡的皮膚散發出迷人且健康的紅潤氣色。"
  },
  {
    "word": "glowing",
    "pos": "adj.",
    "cn_def": "極口讚譽的；熱烈稱讚的；發光的",
    "en_def": "expressing great praise or enthusiastic approval; brightly shining",
    "sentence": "The film critic wrote a {{BLANK}} review of the independent documentary, urging everyone to see it.",
    "cn": "影評人為這部獨立紀錄片寫了一篇極力稱讚的評論，力薦大家前去觀賞。"
  },
  {
    "word": "graduate",
    "pos": "v.",
    "cn_def": "畢業；取得學位（動詞，/ˈɡrædʒ.u.eɪt/）",
    "en_def": "to successfully complete an academic degree, course, or school",
    "sentence": "After studying civil engineering diligently for four long years, Mark will finally {{BLANK}} from university next June.",
    "cn": "在勤奮學習土木工程整整四年之後，馬克終於將在明年六月從大學畢業。"
  },
  {
    "word": "graduate",
    "pos": "n.",
    "cn_def": "大學畢業生；校友（名詞，/ˈɡrædʒ.u.ət/）",
    "en_def": "a person who has successfully completed a course of study or a school",
    "sentence": "After working in public education for two years, David decided to apply to {{BLANK}} school to pursue a master's degree.",
    "cn": "在公共教育界工作兩年後，大衛決定申請研究所以攻讀碩士學位。"
  },
  {
    "word": "graduation",
    "pos": "n.",
    "cn_def": "畢業典禮；畢業（不可數/可數）",
    "en_def": "the receiving or conferring of an academic degree or diploma; the ceremony",
    "sentence": "Proud parents and excited students gathered inside the grand university gymnasium for the annual {{BLANK}} ceremony.",
    "cn": "引以為傲的家長與興奮的學生們聚集在宏偉的大學體育館內參加年度畢業典禮。"
  },
  {
    "word": "hint",
    "pos": "n.",
    "cn_def": "暗示；提示；少許（可數）",
    "en_def": "a slight or indirect suggestion, indication, or small piece of advice",
    "sentence": "The trivia riddle was so complicated that nobody in the room could guess the answer until the host gave a helpful {{BLANK}}.",
    "cn": "那道冷知識謎題極為複雜，直到主持人給了一個有用的提示，房間裡才有人猜出答案。"
  },
  {
    "word": "hinted",
    "pos": "v.",
    "cn_def": "暗示；透露（動詞）",
    "en_def": "to suggest or indicate something indirectly without stating it openly",
    "sentence": "During the confidential press briefing, the cabinet minister {{BLANK}} at the possibility of a nationwide tax cut next spring.",
    "cn": "在機密新聞簡報會上，內閣部長暗示了明年春季可能在全國實施減稅。"
  },
  {
    "word": "icy",
    "pos": "adj.",
    "cn_def": "結冰的；冰冷的；冷淡刺骨的",
    "en_def": "covered with or consisting of ice; very cold in temperature or manner",
    "sentence": "Commuting by car this morning was extremely treacherous because freezing drizzle had turned the highway into an {{BLANK}} sheet.",
    "cn": "今天早晨開車通勤極具危險性，因為凍雨已將整條高速公路變成了一片結冰的滑面。"
  },
  {
    "word": "invent",
    "pos": "v.",
    "cn_def": "發明；創造；捏造（動詞）",
    "en_def": "to create or design something that has not existed before",
    "sentence": "Alexander Graham Bell is widely recognized for his brilliant work to {{BLANK}} the first practical working telephone.",
    "cn": "亞歷山大·格拉漢姆·貝爾因發明第一部實用電話的傑出貢獻而廣為人知。"
  },
  {
    "word": "invention",
    "pos": "n.",
    "cn_def": "發明；新發明之物（可數/不可數）",
    "en_def": "a new device, method, or process developed from study and experimentation",
    "sentence": "The revolutionary {{BLANK}} of the internet has completely transformed global business, education, and human communication.",
    "cn": "網際網路革命性的發明徹底改變了全球商業、教育與人際溝通。"
  },
  {
    "word": "inventor",
    "pos": "n.",
    "cn_def": "發明家；發明者（可數）",
    "en_def": "a person who invented a particular process or device or who invents things as an occupation",
    "sentence": "A talented young {{BLANK}} from Taiwan won the grand prize at the international science fair for her solar water purifier.",
    "cn": "一位來自台灣的才華洋溢年輕發明家因其太陽能淨水器在國際科學展覽會上榮獲特優大獎。"
  },
  {
    "word": "jealous",
    "pos": "adj.",
    "cn_def": "嫉妒的；吃醋的；羨慕的",
    "en_def": "feeling or showing envy of someone or their achievements and advantages",
    "sentence": "Rachel felt intensely {{BLANK}} of her coworker when she discovered that he had been promoted to senior director.",
    "cn": "當瑞秋發現同事被升職為資深總監時，她感到無比嫉妒。"
  },
  {
    "word": "jealousy",
    "pos": "n.",
    "cn_def": "嫉妒；吃醋（不可數/可數）",
    "en_def": "the state or feeling of being jealous; envious resentment",
    "sentence": "Destructive feelings of professional {{BLANK}} among the research scientists ruined their teamwork and delayed the clinical trial.",
    "cn": "研究科學家之間具破壞性的職場嫉妒摧毀了他們的團隊合作，並延誤了臨床試驗。"
  },
  {
    "word": "keyboard",
    "pos": "n.",
    "cn_def": "鍵盤；琴鍵樂器（可數）",
    "en_def": "a panel of keys that operate a computer or typewriter; a musical instrument with keys",
    "sentence": "To work efficiently in office software programs, it is very helpful to memorize common {{BLANK}} shortcuts for copying and pasting.",
    "cn": "為了在辦公軟體程式中高效工作，記住用於複製與貼上的常用鍵盤快捷鍵非常有幫助。"
  },
  {
    "word": "kidney",
    "pos": "n.",
    "cn_def": "腎臟；腰子（可數）",
    "en_def": "each of a pair of organs in the abdominal cavity of mammals, excreting urine",
    "sentence": "Doctors gently explained that the elderly patient would require regular dialysis until a compatible donor organ was found for a {{BLANK}} transplant.",
    "cn": "醫生親切地解釋，在找到相符的器官進行腎臟移植之前，該年長患者將需要定期洗腎。"
  }
];

const MCQS = [
  {
    "q": "The fireflies began to ______ softly in the forest as the dark night fell.",
    "options": [
      "invent",
      "glow",
      "graduate",
      "hint"
    ],
    "answer": 1,
    "cn": "隨著黑夜降臨，螢火蟲開始在森林中輕柔地發光。",
    "vocabIndex": 0
  },
  {
    "q": "After studying hard for four years, my brother will ______ from college this summer.",
    "options": [
      "glow",
      "hint",
      "invent",
      "graduate"
    ],
    "answer": 3,
    "cn": "在辛勤讀書四年之後，我哥哥今年夏天將從大學畢業。",
    "vocabIndex": 3
  },
  {
    "q": "The riddle was too difficult, so the teacher decided to ______ at the right answer.",
    "options": [
      "hint",
      "graduate",
      "glow",
      "invent"
    ],
    "answer": 0,
    "cn": "這道謎語太難了，因此老師決定對正確答案稍加暗示。",
    "vocabIndex": 6
  },
  {
    "q": "Scientists are trying to ______ a new clean machine that uses solar power to clean water.",
    "options": [
      "glow",
      "graduate",
      "invent",
      "hint"
    ],
    "answer": 2,
    "cn": "科學家們正試圖發明一種利用太陽能淨水的新型環保機器。",
    "vocabIndex": 9
  },
  {
    "q": "The warm amber ______ of the fireplace made the living room feel very warm and cozy.",
    "options": [
      "glow",
      "graduate",
      "hint",
      "kidney"
    ],
    "answer": 0,
    "cn": "壁爐溫暖的琥珀色火光讓客廳顯得非常溫暖愜意。",
    "vocabIndex": 0
  },
  {
    "q": "Every high school ______ in our town was invited to attend the summer city picnic.",
    "options": [
      "keyboard",
      "kidney",
      "hint",
      "graduate"
    ],
    "answer": 3,
    "cn": "我們鎮上的每位高中畢業生都受邀參加夏季城市野餐會。",
    "vocabIndex": 3
  },
  {
    "q": "If you don't know the secret word in the game, you can ask for a helpful ______.",
    "options": [
      "kidney",
      "keyboard",
      "hint",
      "glow"
    ],
    "answer": 2,
    "cn": "如果你不知道遊戲中的祕密單字，你可以請求一個有用的提示。",
    "vocabIndex": 6
  },
  {
    "q": "I spilled sticky juice on my computer ______, so some of the letters will not type.",
    "options": [
      "glow",
      "keyboard",
      "graduate",
      "hint"
    ],
    "answer": 1,
    "cn": "我把黏黏的果汁灑在電腦鍵盤上，所以有些字母打不出來。",
    "vocabIndex": 14
  },
  {
    "q": "Doctors said the sick patient needed a healthy ______ from a kind donor to stay alive.",
    "options": [
      "glow",
      "keyboard",
      "hint",
      "kidney"
    ],
    "answer": 3,
    "cn": "醫生表示，該患病患者需要一顆來自熱心捐贈者的健康腎臟才能活下去。",
    "vocabIndex": 15
  },
  {
    "q": "The street was very dangerous this morning because the cold night made it completely ______.",
    "options": [
      "icy",
      "glowing",
      "jealous",
      "inventive"
    ],
    "answer": 0,
    "cn": "今天早上街道非常危險，因為寒冷的夜晚使路面完全結冰了。",
    "vocabIndex": 8
  },
  {
    "q": "Ken felt ______ when his little sister got a bigger scoop of ice cream than he did.",
    "options": [
      "icy",
      "glowing",
      "jealous",
      "graduate"
    ],
    "answer": 2,
    "cn": "當肯恩看到妹妹得到的一球冰淇淋比他的大時，他感到很吃醋嫉妒。",
    "vocabIndex": 12
  },
  {
    "q": "The movie critic wrote a ______ report praising the young actor's wonderful performance.",
    "options": [
      "icy",
      "glowing",
      "kidney",
      "jealous"
    ],
    "answer": 1,
    "cn": "影評人寫了一篇高度讚賞的報導，讚揚那位年輕演員的精彩表現。",
    "vocabIndex": 2
  },
  {
    "q": "Proud parents clapped their hands happily during their children's high school ______.",
    "options": [
      "jealousy",
      "invention",
      "graduation",
      "keyboard"
    ],
    "answer": 2,
    "cn": "引以為傲的父母在孩子的孩子高中畢業典禮上高興地鼓掌。",
    "vocabIndex": 5
  },
  {
    "q": "The ______ of the electric light bulb made it possible for people to read easily at night.",
    "options": [
      "invention",
      "graduation",
      "jealousy",
      "keyboard"
    ],
    "answer": 0,
    "cn": "電燈泡的發明使人們在夜間能輕鬆閱讀。",
    "vocabIndex": 10
  },
  {
    "q": "Feelings of ______ ruined the friendship between the two boys after only one won the prize.",
    "options": [
      "graduation",
      "jealousy",
      "invention",
      "keyboard"
    ],
    "answer": 1,
    "cn": "在只有一人得獎後，嫉妒情緒摧毀了這兩個男孩之間的友誼。",
    "vocabIndex": 13
  },
  {
    "q": "Thomas Edison was a great ______ who designed many useful modern tools and machines.",
    "options": [
      "keyboard",
      "graduate",
      "hint",
      "inventor"
    ],
    "answer": 3,
    "cn": "湯瑪斯·愛迪生是一位偉大的發明家，設計了許多實用的現代工具與機器。",
    "vocabIndex": 11
  },
  {
    "q": "The clever cat watched the little mouse from the dark corner with its eyes ______ bright.",
    "options": [
      "jealous",
      "icy",
      "glowing",
      "inventive"
    ],
    "answer": 2,
    "cn": "聰明的貓從黑暗的角落注視著小老鼠，眼睛閃爍著明亮的光芒。",
    "vocabIndex": 2
  },
  {
    "q": "Walking on the ______ bridge over the frozen lake was so slippery that we moved slowly.",
    "options": [
      "icy",
      "glowing",
      "jealous",
      "graduate"
    ],
    "answer": 0,
    "cn": "走在結冰湖泊上方的結冰滑溜的橋上太滑了，所以我們走得很慢。",
    "vocabIndex": 8
  },
  {
    "q": "You should not be ______ of your friend's new bicycle; be happy for him instead.",
    "options": [
      "icy",
      "glowing",
      "inventive",
      "jealous"
    ],
    "answer": 3,
    "cn": "你不該對你朋友的新自行車感到嫉妒羨慕；相反地，你應該為他高興。",
    "vocabIndex": 12
  },
  {
    "q": "The nurse told the tired doctor that his face looked pale and needed a healthy ______.",
    "options": [
      "hint",
      "glow",
      "keyboard",
      "kidney"
    ],
    "answer": 1,
    "cn": "護理師告訴那位疲倦的醫生，他的臉色看起來蒼白，需要有健康的紅潤氣色。",
    "vocabIndex": 0
  },
  {
    "q": "The young girl gave her best friend a bracelet as a special ______ before she moved away.",
    "options": [
      "keyboard shortcut",
      "kidney disease",
      "graduation present",
      "icy road"
    ],
    "answer": 2,
    "cn": "小女孩在她搬走之前，送給她最好的朋友一條手鍊作為特別的畢業禮物。",
    "vocabIndex": 5
  },
  {
    "q": "Be careful when driving over the bridge tonight because there may be an ______.",
    "options": [
      "graduation present",
      "icy road",
      "electronic keyboard",
      "kidney transplant"
    ],
    "answer": 1,
    "cn": "今晚開車過橋時要小心，因為可能會有結冰濕滑的道路。",
    "vocabIndex": 8
  },
  {
    "q": "My music teacher showed me how to play wonderful songs on her ______.",
    "options": [
      "kidney disease",
      "icy road",
      "graduation present",
      "electronic keyboard"
    ],
    "answer": 3,
    "cn": "我的音樂老師向我展示了如何在她的電子琴／電子鍵盤樂器上彈奏美妙的歌曲。",
    "vocabIndex": 14
  },
  {
    "q": "The hospital doctor said the sick patient would need a ______ from a family member.",
    "options": [
      "kidney transplant",
      "graduation present",
      "icy road",
      "keyboard shortcut"
    ],
    "answer": 0,
    "cn": "醫院醫生表示，那位生病的患者需要接受來自親屬的腎臟移植。",
    "vocabIndex": 15
  },
  {
    "q": "When David noticed the host checking his watch, he was smart enough to ______ and say goodbye.",
    "options": [
      "glow in the dark",
      "invent an excuse",
      "take a hint",
      "graduate from high school"
    ],
    "answer": 2,
    "cn": "當大衛注意到主人在看手錶時，他很識相地領會暗示並道別離開。",
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "glow": {
    "pos": "v.",
    "en_def": "to give out steady light without a flame; to look radiant with health or joy",
    "cn_def": "發光；容光煥發；發熱（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give out steady light without a flame; to look radiant with health or joy",
        "cn_def": "發光；容光煥發；發熱（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "a steady light produced by heat or luminescence; a warm, cheerful feeling",
        "cn_def": "光芒；紅潤微光；喜悅自豪感（不可數/可數）"
      }
    ]
  },
  "glowing": {
    "pos": "adj.",
    "en_def": "expressing great praise or enthusiastic approval; brightly shining",
    "cn_def": "極口讚譽的；熱烈稱讚的；發光的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expressing great praise or enthusiastic approval; brightly shining",
        "cn_def": "極口讚譽的；熱烈稱讚的；發光的"
      }
    ]
  },
  "graduate": {
    "pos": "v.",
    "en_def": "to successfully complete an academic degree, course, or school",
    "cn_def": "畢業；取得學位（動詞，/ˈɡrædʒ.u.eɪt/）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to successfully complete an academic degree, course, or school",
        "cn_def": "畢業；取得學位（動詞，/ˈɡrædʒ.u.eɪt/）"
      },
      {
        "pos": "n.",
        "en_def": "a person who has successfully completed a course of study or a school",
        "cn_def": "大學畢業生；校友（名詞，/ˈɡrædʒ.u.ət/）"
      }
    ]
  },
  "graduation": {
    "pos": "n.",
    "en_def": "the receiving or conferring of an academic degree or diploma; the ceremony",
    "cn_def": "畢業典禮；畢業（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the receiving or conferring of an academic degree or diploma; the ceremony",
        "cn_def": "畢業典禮；畢業（不可數/可數）"
      }
    ]
  },
  "hint": {
    "pos": "n.",
    "en_def": "a slight or indirect suggestion, indication, or small piece of advice",
    "cn_def": "暗示；提示；少許（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a slight or indirect suggestion, indication, or small piece of advice",
        "cn_def": "暗示；提示；少許（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to suggest or indicate something indirectly without stating it openly",
        "cn_def": "暗示；透露（動詞）"
      }
    ]
  },
  "hinted": {
    "pos": "v.",
    "en_def": "to suggest or indicate something indirectly without stating it openly",
    "cn_def": "暗示；透露（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to suggest or indicate something indirectly without stating it openly",
        "cn_def": "暗示；透露（動詞）"
      }
    ]
  },
  "icy": {
    "pos": "adj.",
    "en_def": "covered with or consisting of ice; very cold in temperature or manner",
    "cn_def": "結冰的；冰冷的；冷淡刺骨的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "covered with or consisting of ice; very cold in temperature or manner",
        "cn_def": "結冰的；冰冷的；冷淡刺骨的"
      }
    ]
  },
  "invent": {
    "pos": "v.",
    "en_def": "to create or design something that has not existed before",
    "cn_def": "發明；創造；捏造（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to create or design something that has not existed before",
        "cn_def": "發明；創造；捏造（動詞）"
      }
    ]
  },
  "invention": {
    "pos": "n.",
    "en_def": "a new device, method, or process developed from study and experimentation",
    "cn_def": "發明；新發明之物（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a new device, method, or process developed from study and experimentation",
        "cn_def": "發明；新發明之物（可數/不可數）"
      }
    ]
  },
  "inventor": {
    "pos": "n.",
    "en_def": "a person who invented a particular process or device or who invents things as an occupation",
    "cn_def": "發明家；發明者（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who invented a particular process or device or who invents things as an occupation",
        "cn_def": "發明家；發明者（可數）"
      }
    ]
  },
  "jealous": {
    "pos": "adj.",
    "en_def": "feeling or showing envy of someone or their achievements and advantages",
    "cn_def": "嫉妒的；吃醋的；羨慕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or showing envy of someone or their achievements and advantages",
        "cn_def": "嫉妒的；吃醋的；羨慕的"
      }
    ]
  },
  "jealousy": {
    "pos": "n.",
    "en_def": "the state or feeling of being jealous; envious resentment",
    "cn_def": "嫉妒；吃醋（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or feeling of being jealous; envious resentment",
        "cn_def": "嫉妒；吃醋（不可數/可數）"
      }
    ]
  },
  "keyboard": {
    "pos": "n.",
    "en_def": "a panel of keys that operate a computer or typewriter; a musical instrument with keys",
    "cn_def": "鍵盤；琴鍵樂器（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a panel of keys that operate a computer or typewriter; a musical instrument with keys",
        "cn_def": "鍵盤；琴鍵樂器（可數）"
      }
    ]
  },
  "kidney": {
    "pos": "n.",
    "en_def": "each of a pair of organs in the abdominal cavity of mammals, excreting urine",
    "cn_def": "腎臟；腰子（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "each of a pair of organs in the abdominal cavity of mammals, excreting urine",
        "cn_def": "腎臟；腰子（可數）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
