// Unit 16 Quiz Data: similar – economic depression
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U16 - similar – economic depression",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "similar",
    "pos": "adj.",
    "cn_def": "相似的、類似的",
    "en_def": "sharing matching features but not completely identical.",
    "sentence": "The two sisters have very {{BLANK}} tastes in music, often recommending the same songs to each other without knowing it.",
    "cn": "這對姐妹在音樂品味上非常相似，常常在不知情的情況下向對方推薦相同的歌曲。"
  },
  {
    "word": "similarity",
    "pos": "n.",
    "cn_def": "相似處、類似點",
    "en_def": "a specific matching point shared between distinct items.",
    "sentence": "Despite growing up in different cities, the two friends found a surprising {{BLANK}} in their childhood experiences.",
    "cn": "儘管在不同的城市長大，這兩位朋友在童年經歷中發現了令人驚訝的相似之處。"
  },
  {
    "word": "is similar to",
    "pos": "phr.",
    "cn_def": "A與B相似",
    "en_def": "one object looks or behaves like a separate counterpart.",
    "sentence": "This new smartphone {{BLANK}} the previous model in design, but it has a much faster processor inside.",
    "cn": "這款新智慧型手機在設計上與舊款相似，但內部處理器速度快得多。"
  },
  {
    "word": "are similar in",
    "pos": "phr.",
    "cn_def": "在…方面相似",
    "en_def": "sharing matching metrics within an explicit category.",
    "sentence": "The two proposals {{BLANK}} budget requirements but differ greatly in their overall approach to the problem.",
    "cn": "這兩個提案在預算要求方面相似，但在解決問題的整體方法上差異很大。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "流行、時尚",
    "en_def": "a specific style of clothes popular at a certain time.",
    "sentence": "She has always been interested in {{BLANK}} and dreams of one day designing her own clothing line for young women.",
    "cn": "她一直對時尚感興趣，夢想有一天能為年輕女性設計自己的服裝系列。"
  },
  {
    "word": "fashion",
    "pos": "n.",
    "cn_def": "方式、樣子",
    "en_def": "a particular way or manner of doing something.",
    "sentence": "He completed every task in a systematic {{BLANK}}, carefully checking each step before moving on to the next one.",
    "cn": "他以系統化的方式完成每項任務，在進行下一步之前仔細檢查每個步驟。"
  },
  {
    "word": "fashionable",
    "pos": "adj.",
    "cn_def": "時髦的、流行的",
    "en_def": "following the newest trendy styles cleanly.",
    "sentence": "The new café quickly became very {{BLANK}} among young people because of its stylish interior design and creative menu.",
    "cn": "這家新咖啡館因其時尚的室內設計和創意菜單，迅速在年輕人中成為非常流行的地方。"
  },
  {
    "word": "old-fashioned",
    "pos": "adj.",
    "cn_def": "過時的、老式的",
    "en_def": "no longer modern or popular; using historic setups.",
    "sentence": "Some people think that writing letters by hand is {{BLANK}}, but others find it more personal and meaningful than email.",
    "cn": "有些人認為手寫信件是過時的，但其他人覺得它比電子郵件更個人化、更有意義。"
  },
  {
    "word": "in a peaceful fashion",
    "pos": "phr.",
    "cn_def": "以和平的方式",
    "en_def": "completing a protest or meeting with zero violence.",
    "sentence": "The residents expressed their concerns about the new road {{BLANK}}, gathering quietly outside the town hall.",
    "cn": "居民們以和平的方式表達他們對新道路的擔憂，安靜地聚集在市政廳外面。"
  },
  {
    "word": "investigating",
    "pos": "v.",
    "cn_def": "調查、審查",
    "en_def": "to carefully examine a crime or problem to find facts.",
    "sentence": "Journalists spent six months {{BLANK}} the company's financial records before publishing their report on the fraud.",
    "cn": "記者花了六個月調查該公司的財務記錄，然後才發表關於詐欺的報告。"
  },
  {
    "word": "investigation",
    "pos": "n.",
    "cn_def": "調查",
    "en_def": "the official systematic check to find a hidden answer.",
    "sentence": "The police launched a full {{BLANK}} into the cause of the fire, interviewing dozens of witnesses over several weeks.",
    "cn": "警方對火災原因展開全面調查，在幾週內採訪了數十名目擊者。"
  },
  {
    "word": "investigator",
    "pos": "n.",
    "cn_def": "調查員、偵探",
    "en_def": "a detective or agent handling fact-finding tasks.",
    "sentence": "The private {{BLANK}} was hired by the insurance company to look into the suspicious circumstances of the claim.",
    "cn": "保險公司聘請了私人調查員，調查這起索賠案的可疑情況。"
  },
  {
    "word": "launch an investigation",
    "pos": "phr.",
    "cn_def": "展開調查",
    "en_def": "to officially start a deep background check on a case.",
    "sentence": "The government decided to {{BLANK}} into the safety standards used at the construction site after the accident.",
    "cn": "政府決定在事故後對建築工地的安全標準展開調查。"
  },
  {
    "word": "bare",
    "pos": "adj.",
    "cn_def": "赤裸的、空無一物的",
    "en_def": "without any clothes, coverage, or decorations.",
    "sentence": "The apartment walls were completely {{BLANK}} when they moved in, so they spent the weekend hanging photos and artwork.",
    "cn": "他們搬進來時，公寓的牆壁完全空無一物，所以他們花了整個週末掛照片和藝術品。"
  },
  {
    "word": "bare feet",
    "pos": "phr.",
    "cn_def": "赤腳、光腳",
    "en_def": "feet without socks or shoes on walking surfaces.",
    "sentence": "She walked across the cool grass on {{BLANK}} and enjoyed the sensation of the dew between her toes.",
    "cn": "她赤腳走過涼爽的草地，享受著露水在腳趾間的感覺。"
  },
  {
    "word": "bare arms",
    "pos": "phr.",
    "cn_def": "裸露的手臂",
    "en_def": "limbs unprotected by shirt sleeves in cold air.",
    "sentence": "She regretted wearing short sleeves because the air conditioning left her {{BLANK}} covered in goosebumps.",
    "cn": "她後悔穿了短袖，因為空調讓她裸露的手臂起了雞皮疙瘩。"
  },
  {
    "word": "naked",
    "pos": "adj.",
    "cn_def": "裸體的、赤裸的",
    "en_def": "fully without clothing garments; in a natural state.",
    "sentence": "The wildlife photographer captured a rare image of a {{BLANK}} mole rat, an unusual species that has almost no fur at all.",
    "cn": "這位野生動物攝影師拍下了一張裸鼴鼠的罕見照片，這是一種幾乎沒有毛的不尋常物種。"
  },
  {
    "word": "grin",
    "pos": "n.",
    "cn_def": "露齒的笑、大大的微笑",
    "en_def": "a wide, broad smile showcasing high happiness.",
    "sentence": "A wide {{BLANK}} spread across his face when he opened his birthday card and found the concert tickets tucked inside.",
    "cn": "當他打開生日卡，發現裡面夾著音樂會門票時，他臉上露出了大大的笑容。"
  },
  {
    "word": "grinned",
    "pos": "v.",
    "cn_def": "露齒而笑",
    "en_def": "to smile widely, often showing your teeth.",
    "sentence": "She {{BLANK}} from ear to ear when she heard that she had been selected for the lead role in the school play.",
    "cn": "當她聽說自己被選為學校戲劇的主角時，她咧嘴笑得合不攏嘴。"
  },
  {
    "word": "big grin",
    "pos": "phr.",
    "cn_def": "大大的微笑",
    "en_def": "a massive facial reflection suggesting fine news.",
    "sentence": "He walked into the room with a {{BLANK}} on his face, and everyone immediately knew he had good news to share.",
    "cn": "他帶著大大的微笑走進房間，每個人立刻就知道他有好消息要分享。"
  },
  {
    "word": "laugh",
    "pos": "v.",
    "cn_def": "笑、嘲笑",
    "en_def": "to make sounds showing amusement or mockery.",
    "sentence": "The comedian's timing was perfect, and the audience began to {{BLANK}} uncontrollably from the very first minute of the show.",
    "cn": "喜劇演員的時機掌握得恰到好處，觀眾從演出的第一分鐘開始就忍不住大笑。"
  },
  {
    "word": "smile",
    "pos": "v.",
    "cn_def": "微笑",
    "en_def": "turning up the corners of the mouth silently.",
    "sentence": "She gave a warm {{BLANK}} to the nervous new student and invited her to sit at the same lunch table with her friends.",
    "cn": "她對緊張的新同學報以溫暖的微笑，並邀請她坐在同一張午餐桌旁。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into the lungs and send it out again.",
    "sentence": "She stepped outside the crowded room to {{BLANK}} some fresh air and calm herself down before her big presentation.",
    "cn": "她走出擁擠的房間，呼吸一些新鮮空氣，在大型演講前讓自己冷靜下來。"
  },
  {
    "word": "breath",
    "pos": "n.",
    "cn_def": "呼吸、氣息（名詞）",
    "en_def": "the actual air taken in or blown out during respiration.",
    "sentence": "He was so out of {{BLANK}} after climbing the steep stairs that he had to stop on the landing to rest for a moment.",
    "cn": "他爬完陡峭的樓梯後氣喘吁吁，不得不在樓梯平台上停下來休息片刻。"
  },
  {
    "word": "take a deep breath",
    "pos": "phr.",
    "cn_def": "深呼吸",
    "en_def": "filling lungs completely to calm down an upset mind.",
    "sentence": "The teacher advised students to {{BLANK}} before starting the exam to help them feel less nervous.",
    "cn": "老師建議學生在開始考試前深呼吸，幫助他們感到不那麼緊張。"
  },
  {
    "word": "hold her breath",
    "pos": "phr.",
    "cn_def": "憋氣、屏息",
    "en_def": "deliberately stopping respiration under water channels.",
    "sentence": "She learned to {{BLANK}} for over a minute during swimming lessons, which impressed her instructor greatly.",
    "cn": "她在游泳課上學會了憋氣超過一分鐘，這讓她的教練印象深刻。"
  },
  {
    "word": "tickled",
    "pos": "v.",
    "cn_def": "搔癢、使發癢",
    "en_def": "to touch someone lightly to make them laugh or wiggle.",
    "sentence": "The father gently {{BLANK}} his baby daughter on the tummy, and she burst into the most adorable giggling laughter.",
    "cn": "父親輕輕地搔癢他的小女兒的肚子，她爆發出最可愛的咯咯笑聲。"
  },
  {
    "word": "pitch",
    "pos": "n.",
    "cn_def": "音高",
    "en_def": "the high or low level of a musical sound or voice.",
    "sentence": "The soprano hit an incredibly high {{BLANK}} in the final chorus that filled the entire concert hall with vibrating sound.",
    "cn": "女高音在最後的合唱中達到了令人難以置信的高音，整個音樂廳都充滿了震動的聲音。"
  },
  {
    "word": "pitch",
    "pos": "v.",
    "cn_def": "投（球）",
    "en_def": "to throw a sports ball toward a player with a bat.",
    "sentence": "The veteran player stepped up to {{BLANK}} the ball in the final inning, determined to strike the batter out.",
    "cn": "這位老將球員在最後一局走上前投球，決心讓打者三振出局。"
  },
  {
    "word": "high pitch",
    "pos": "phr.",
    "cn_def": "高音、高音調",
    "en_def": "a sharp voice tone triggered by extreme nervousness.",
    "sentence": "Her voice rose to an unusually {{BLANK}} when she realized her wallet was missing from her bag on the subway.",
    "cn": "當她在地鐵上意識到錢包從包包裡不見了時，她的聲音變得異常高亢。"
  },
  {
    "word": "pitcher",
    "pos": "n.",
    "cn_def": "投手",
    "en_def": "the central baseball player who throws toward home base.",
    "sentence": "The {{BLANK}} threw a perfect game last night, striking out nine batters and allowing zero hits throughout the entire match.",
    "cn": "這位投手昨晚投出了完美比賽，三振了九名打者，整場比賽沒有讓對方打出任何安打。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度、看法",
    "en_def": "a settled way of thinking or feeling about an object.",
    "sentence": "Her positive {{BLANK}} toward challenges inspired her teammates to keep working hard even when things became very difficult.",
    "cn": "她對挑戰的積極態度激勵了隊友們，即使事情變得非常困難時也要繼續努力工作。"
  },
  {
    "word": "positive attitude",
    "pos": "phr.",
    "cn_def": "積極的態度",
    "en_def": "a hopeful mind layout that keeps co-workers happy.",
    "sentence": "Keeping a {{BLANK}} even during setbacks is one of the most important qualities of successful leaders.",
    "cn": "即使在挫折時期保持積極的態度，是成功領導者最重要的品質之一。"
  },
  {
    "word": "attitude toward",
    "pos": "phr.",
    "cn_def": "對…的態度",
    "en_def": "an individual's explicit psychological stance on a topic.",
    "sentence": "Society's {{BLANK}} mental health has changed significantly over the past decade, with more people seeking help.",
    "cn": "過去十年來，社會對心理健康的態度發生了顯著變化，越來越多的人尋求幫助。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力、緊張",
    "en_def": "great worry or mental strain caused by a tough job.",
    "sentence": "She found that regular exercise helped her manage {{BLANK}} much more effectively than any other method she had tried.",
    "cn": "她發現規律運動比她嘗試過的任何其他方法都更能有效幫助她管理壓力。"
  },
  {
    "word": "stressed",
    "pos": "v.",
    "cn_def": "強調、使緊張",
    "en_def": "to emphasize a point; to cause worry to a peer.",
    "sentence": "The coach {{BLANK}} the importance of warming up properly before every training session to avoid muscle injuries.",
    "cn": "教練強調了在每次訓練課前適當熱身的重要性，以避免肌肉損傷。"
  },
  {
    "word": "stressful",
    "pos": "adj.",
    "cn_def": "壓力很大的",
    "en_def": "causing a huge wave of ongoing anxiety and worry.",
    "sentence": "Working in the emergency department is incredibly {{BLANK}}, but the nurses and doctors say it is also very rewarding.",
    "cn": "在急診部門工作壓力非常大，但護士和醫生表示這也非常有成就感。"
  },
  {
    "word": "stressed out",
    "pos": "phr.",
    "cn_def": "壓力過大的、筋疲力竭的",
    "en_def": "feeling completely crushed by taking on excess duties.",
    "sentence": "She was completely {{BLANK}} after juggling three deadlines at once and barely slept for two days.",
    "cn": "在同時應付三個截止日期後，她壓力過大，幾乎兩天沒睡。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a heavy physical or social load pushing against you.",
    "sentence": "Students often feel enormous {{BLANK}} during exam season, especially when parents have high expectations of their results.",
    "cn": "學生在考試季節常常感到巨大的壓力，尤其是當父母對他們的成績有很高期望時。"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "cn_def": "庇護所、避難處",
    "en_def": "a building structure providing safety from wind or harm.",
    "sentence": "The hikers found a small wooden {{BLANK}} near the top of the mountain and waited there until the storm had passed.",
    "cn": "登山者在山頂附近找到一個小木屋庇護所，在那裡等待暴風雨過去。"
  },
  {
    "word": "animal shelter",
    "pos": "phr.",
    "cn_def": "動物收容所",
    "en_def": "a temporary home keeping lost dogs safe before adoption.",
    "sentence": "She adopted her dog from the local {{BLANK}} and gave him a loving home after he had been there for months.",
    "cn": "她從當地動物收容所領養了她的狗，在牠在那裡待了幾個月後給了牠一個充滿愛的家。"
  },
  {
    "word": "take shelter",
    "pos": "phr.",
    "cn_def": "避難、尋求庇護",
    "en_def": "entering a secure room to avoid a violent storm track.",
    "sentence": "When the typhoon warning was issued, residents were advised to {{BLANK}} and stay indoors until it had passed.",
    "cn": "颱風警報發布後，居民被建議避難並待在室內，直到颱風過去。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的、平靜的",
    "en_def": "peaceful, quiet, and not showing any panic or worry.",
    "sentence": "Despite the chaos around her, she remained completely {{BLANK}} and gave clear instructions to everyone in the room.",
    "cn": "儘管周圍一片混亂，她仍然保持完全冷靜，並向房間裡的每個人發出清晰的指示。"
  },
  {
    "word": "calm",
    "pos": "v.",
    "cn_def": "使平靜、使鎮定",
    "en_def": "to make a wild animal or panicked peer peaceful.",
    "sentence": "The nurse spoke in a soft, gentle voice to {{BLANK}} the anxious child before the doctor came in to examine him.",
    "cn": "醫生進來檢查之前，護士用柔和溫和的聲音讓焦慮的孩子平靜下來。"
  },
  {
    "word": "calm down",
    "pos": "phr.",
    "cn_def": "冷靜下來、鎮定下來",
    "en_def": "taking a minute to lower heart rates after bad news.",
    "sentence": "She took several deep breaths to {{BLANK}} after the argument and then went back to have a rational conversation.",
    "cn": "爭論後她深呼吸幾次讓自己冷靜下來，然後回去進行理性的對話。"
  },
  {
    "word": "calm lake",
    "pos": "phr.",
    "cn_def": "平靜的湖面",
    "en_def": "a flat water surface tracking zero waves or wind.",
    "sentence": "The kayakers set off early in the morning when the {{BLANK}} was perfectly still and reflected the sunrise.",
    "cn": "皮划艇運動員在清晨出發，那時平靜的湖面完全靜止，映照著日出。"
  },
  {
    "word": "still",
    "pos": "adj.",
    "cn_def": "靜止的、一動不動的",
    "en_def": "completely stationary; tracking zero movements.",
    "sentence": "The deer froze and stood completely {{BLANK}} when it heard the snap of a twig nearby in the quiet forest.",
    "cn": "鹿在安靜的森林中聽到附近樹枝折斷的聲音時，僵住了，完全一動不動地站著。"
  },
  {
    "word": "stay still",
    "pos": "phr.",
    "cn_def": "保持不動",
    "en_def": "a medical reminder telling patients to stop wiggling.",
    "sentence": "The technician asked the patient to {{BLANK}} during the scan so that the images would come out clearly.",
    "cn": "技術員要求病人在掃描期間保持不動，以便圖像能清晰地呈現。"
  },
  {
    "word": "bond",
    "pos": "n.",
    "cn_def": "情感紐帶、緊密關係",
    "en_def": "a close connection or deep friendship linking peers.",
    "sentence": "The shared experience of studying abroad created a strong {{BLANK}} between the students that lasted for many years.",
    "cn": "在國外學習的共同經歷在學生之間建立了持久多年的強烈情感紐帶。"
  },
  {
    "word": "bond",
    "pos": "v.",
    "cn_def": "建立關係、黏合",
    "en_def": "to develop a close link; to glue objects together.",
    "sentence": "The team went on a weekend retreat to {{BLANK}} and get to know each other better before the big project began.",
    "cn": "團隊在大型項目開始前進行了週末靜修，以建立關係並更好地相互了解。"
  },
  {
    "word": "strong bond",
    "pos": "phr.",
    "cn_def": "緊密的關係",
    "en_def": "an unbreakable connection with a best family peer.",
    "sentence": "The twins shared a {{BLANK}} that meant they always seemed to know what the other one was thinking.",
    "cn": "這對雙胞胎分享著一種緊密的關係，這意味著他們似乎總是知道對方在想什麼。"
  },
  {
    "word": "bonding",
    "pos": "n.",
    "cn_def": "培養感情、凝聚力",
    "en_def": "the active process of developing closeness with pets.",
    "sentence": "The puppy {{BLANK}} programme at the hospital allowed patients to interact with dogs and reduce their anxiety.",
    "cn": "醫院的幼犬培養感情計劃讓病人與狗互動，減少他們的焦慮。"
  },
  {
    "word": "seek",
    "pos": "v.",
    "cn_def": "尋找、尋求",
    "en_def": "to search for or try to find a specialized entry.",
    "sentence": "Many young graduates {{BLANK}} opportunities abroad because they believe it will broaden their career prospects significantly.",
    "cn": "許多年輕畢業生在海外尋求機會，因為他們相信這將大幅拓寬他們的職業前景。"
  },
  {
    "word": "seek to",
    "pos": "phr.",
    "cn_def": "試圖去…、力圖",
    "en_def": "trying hard to encourage students to read for fun.",
    "sentence": "The new library programme {{BLANK}} make reading more enjoyable for children by hosting weekly storytelling events.",
    "cn": "新的圖書館計劃力圖通過每週舉辦說故事活動，讓孩子們更享受閱讀。"
  },
  {
    "word": "seek help",
    "pos": "phr.",
    "cn_def": "尋求幫助",
    "en_def": "calling an expert to claim support during a crisis.",
    "sentence": "It takes courage to {{BLANK}} when you are struggling mentally, but it is always the right thing to do.",
    "cn": "當你在心理上掙扎時尋求幫助需要勇氣，但這始終是正確的事情。"
  },
  {
    "word": "depression",
    "pos": "n.",
    "cn_def": "憂鬱症、沮喪",
    "en_def": "a psychological state of deep sadness and low energy.",
    "sentence": "Many people suffer from {{BLANK}} in silence because they are afraid of being judged or misunderstood by others.",
    "cn": "許多人默默遭受憂鬱症的折磨，因為他們害怕被別人評判或誤解。"
  },
  {
    "word": "depress",
    "pos": "v.",
    "cn_def": "使沮喪、使憂鬱",
    "en_def": "to make someone feel sad, tired, or helpless.",
    "sentence": "The constant grey skies and cold rain during November always seemed to {{BLANK}} her and drain her of energy.",
    "cn": "十一月持續的陰天和冷雨似乎總是讓她感到沮喪，消耗她的精力。"
  },
  {
    "word": "depressed",
    "pos": "adj.",
    "cn_def": "感到沮喪的、憂鬱的",
    "en_def": "experiencing an ongoing mental low due to failure.",
    "sentence": "He felt deeply {{BLANK}} after losing his job and found it hard to get out of bed or engage with everyday life.",
    "cn": "失業後他感到深深的沮喪，很難從床上起來或投入日常生活。"
  },
  {
    "word": "economic depression",
    "pos": "phr.",
    "cn_def": "經濟大蕭條",
    "en_def": "a severe historical era tracking zero corporate trades.",
    "sentence": "The {{BLANK}} of the 1930s caused widespread unemployment and poverty across many countries worldwide.",
    "cn": "1930年代的經濟大蕭條在全球許多國家造成了普遍的失業和貧困。"
  }
];

const MCQS = [
  {
    "q": "The two sisters have very ______ tastes in music, often recommending the same songs to each other without knowing it.",
    "options": [
      "similar",
      "old-fashioned",
      "depressed",
      "calm"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Despite growing up in different cities, the two friends found a surprising ______ in their childhood experiences.",
    "options": [
      "stress",
      "similarity",
      "grin",
      "attitude"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "This new smartphone ______ the previous model in design, but it has a much faster processor inside.",
    "options": [
      "seek to",
      "in a peaceful fashion",
      "bare feet",
      "is similar to"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The two proposals ______ budget requirements but differ greatly in their overall approach to the problem.",
    "options": [
      "in a peaceful fashion",
      "economic depression",
      "are similar in",
      "launch an investigation"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "She has always been interested in ______ and dreams of one day designing her own clothing line for young women.",
    "options": [
      "fashion",
      "grin",
      "investigation",
      "depression"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "He completed every task in a systematic ______, carefully checking each step before moving on to the next one.",
    "options": [
      "grin",
      "shelter",
      "pressure",
      "fashion"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The new café quickly became very ______ among young people because of its stylish interior design and creative menu.",
    "options": [
      "bare",
      "naked",
      "fashionable",
      "old-fashioned"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Some people think that writing letters by hand is ______, but others find it more personal and meaningful than email.",
    "options": [
      "fashionable",
      "old-fashioned",
      "bare",
      "still"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The residents expressed their concerns about the new road ______, gathering quietly outside the town hall.",
    "options": [
      "in a peaceful fashion",
      "calm lake",
      "launch an investigation",
      "seek help"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Journalists spent six months ______ the company's financial records before publishing their report on the fraud.",
    "options": [
      "stressed",
      "investigating",
      "depress",
      "tickled"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The police launched a full ______ into the cause of the fire, interviewing dozens of witnesses over several weeks.",
    "options": [
      "pressure",
      "breath",
      "fashion",
      "investigation"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The private ______ was hired by the insurance company to look into the suspicious circumstances of the claim.",
    "options": [
      "grin",
      "fashion",
      "investigator",
      "depression"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The government decided to ______ into the safety standards used at the construction site after the accident.",
    "options": [
      "launch an investigation",
      "is similar to",
      "high pitch",
      "big grin"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The apartment walls were completely ______ when they moved in, so they spent the weekend hanging photos and artwork.",
    "options": [
      "naked",
      "calm",
      "bare",
      "stressful"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "She walked across the cool grass on ______ and enjoyed the sensation of the dew between her toes.",
    "options": [
      "high pitch",
      "positive attitude",
      "are similar in",
      "bare feet"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "She regretted wearing short sleeves because the air conditioning left her ______ covered in goosebumps.",
    "options": [
      "stressed out",
      "bare arms",
      "take a deep breath",
      "seek to"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The wildlife photographer captured a rare image of a ______ mole rat, an unusual species that has almost no fur at all.",
    "options": [
      "stressful",
      "still",
      "naked",
      "calm"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "A wide ______ spread across his face when he opened his birthday card and found the concert tickets tucked inside.",
    "options": [
      "grin",
      "pressure",
      "pitcher",
      "similarity"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "She ______ from ear to ear when she heard that she had been selected for the lead role in the school play.",
    "options": [
      "calm",
      "bond",
      "breathe",
      "grinned"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "He walked into the room with a ______ on his face, and everyone immediately knew he had good news to share.",
    "options": [
      "bare arms",
      "big grin",
      "take shelter",
      "stressed out"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The comedian's timing was perfect, and the audience began to ______ uncontrollably from the very first minute of the show.",
    "options": [
      "calm",
      "smile",
      "tickled",
      "laugh"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "She gave a warm ______ to the nervous new student and invited her to sit at the same lunch table with her friends.",
    "options": [
      "seek",
      "grinned",
      "smile",
      "depress"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "She stepped outside the crowded room to ______ some fresh air and calm herself down before her big presentation.",
    "options": [
      "breathe",
      "depress",
      "investigating",
      "grinned"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "He was so out of ______ after climbing the steep stairs that he had to stop on the landing to rest for a moment.",
    "options": [
      "depression",
      "breath",
      "bonding",
      "grin"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The teacher advised students to ______ before starting the exam to help them feel less nervous.",
    "options": [
      "stressed out",
      "calm down",
      "hold her breath",
      "take a deep breath"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "She learned to ______ for over a minute during swimming lessons, which impressed her instructor greatly.",
    "options": [
      "hold her breath",
      "stay still",
      "economic depression",
      "take shelter"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The father gently ______ his baby daughter on the tummy, and she burst into the most adorable giggling laughter.",
    "options": [
      "grinned",
      "pitch",
      "tickled",
      "breathe"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The soprano hit an incredibly high ______ in the final chorus that filled the entire concert hall with vibrating sound.",
    "options": [
      "depression",
      "pitch",
      "bonding",
      "fashion"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The veteran player stepped up to ______ the ball in the final inning, determined to strike the batter out.",
    "options": [
      "smile",
      "tickled",
      "pitch",
      "stressed"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Her voice rose to an unusually ______ when she realized her wallet was missing from her bag on the subway.",
    "options": [
      "high pitch",
      "is similar to",
      "take shelter",
      "calm down"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The ______ threw a perfect game last night, striking out nine batters and allowing zero hits throughout the entire match.",
    "options": [
      "breath",
      "pitcher",
      "attitude",
      "investigator"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Her positive ______ toward challenges inspired her teammates to keep working hard even when things became very difficult.",
    "options": [
      "fashion",
      "stress",
      "bonding",
      "attitude"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Keeping a ______ even during setbacks is one of the most important qualities of successful leaders.",
    "options": [
      "positive attitude",
      "bare arms",
      "launch an investigation",
      "calm down"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Society's ______ mental health has changed significantly over the past decade, with more people seeking help.",
    "options": [
      "high pitch",
      "in a peaceful fashion",
      "attitude toward",
      "seek help"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "She found that regular exercise helped her manage ______ much more effectively than any other method she had tried.",
    "options": [
      "attitude",
      "investigation",
      "bond",
      "stress"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "The coach ______ the importance of warming up properly before every training session to avoid muscle injuries.",
    "options": [
      "grinned",
      "stressed",
      "tickled",
      "depress"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "Working in the emergency department is incredibly ______, but the nurses and doctors say it is also very rewarding.",
    "options": [
      "still",
      "fashionable",
      "stressful",
      "old-fashioned"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "She was completely ______ after juggling three deadlines at once and barely slept for two days.",
    "options": [
      "stressed out",
      "take shelter",
      "calm down",
      "is similar to"
    ],
    "answer": 0,
    "vocabIndex": 37
  },
  {
    "q": "Students often feel enormous ______ during exam season, especially when parents have high expectations of their results.",
    "options": [
      "grin",
      "shelter",
      "investigation",
      "pressure"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "The hikers found a small wooden ______ near the top of the mountain and waited there until the storm had passed.",
    "options": [
      "pitcher",
      "shelter",
      "stress",
      "attitude"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "She adopted her dog from the local ______ and gave him a loving home after he had been there for months.",
    "options": [
      "in a peaceful fashion",
      "attitude toward",
      "animal shelter",
      "calm lake"
    ],
    "answer": 2,
    "vocabIndex": 40
  },
  {
    "q": "When the typhoon warning was issued, residents were advised to ______ and stay indoors until it had passed.",
    "options": [
      "take shelter",
      "seek help",
      "take a deep breath",
      "calm down"
    ],
    "answer": 0,
    "vocabIndex": 41
  },
  {
    "q": "Despite the chaos around her, she remained completely ______ and gave clear instructions to everyone in the room.",
    "options": [
      "still",
      "calm",
      "old-fashioned",
      "stressful"
    ],
    "answer": 1,
    "vocabIndex": 42
  },
  {
    "q": "The nurse spoke in a soft, gentle voice to ______ the anxious child before the doctor came in to examine him.",
    "options": [
      "laugh",
      "bond",
      "investigating",
      "calm"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "She took several deep breaths to ______ after the argument and then went back to have a rational conversation.",
    "options": [
      "calm down",
      "high pitch",
      "are similar in",
      "hold her breath"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "The kayakers set off early in the morning when the ______ was perfectly still and reflected the sunrise.",
    "options": [
      "seek help",
      "attitude toward",
      "big grin",
      "calm lake"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "The deer froze and stood completely ______ when it heard the snap of a twig nearby in the quiet forest.",
    "options": [
      "stressful",
      "still",
      "old-fashioned",
      "fashionable"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "The technician asked the patient to ______ during the scan so that the images would come out clearly.",
    "options": [
      "calm down",
      "hold her breath",
      "stay still",
      "attitude toward"
    ],
    "answer": 2,
    "vocabIndex": 47
  },
  {
    "q": "The shared experience of studying abroad created a strong ______ between the students that lasted for many years.",
    "options": [
      "pitcher",
      "fashion",
      "investigation",
      "bond"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "The team went on a weekend retreat to ______ and get to know each other better before the big project began.",
    "options": [
      "pitch",
      "bond",
      "laugh",
      "investigating"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The twins shared a ______ that meant they always seemed to know what the other one was thinking.",
    "options": [
      "are similar in",
      "seek to",
      "strong bond",
      "stay still"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The puppy ______ programme at the hospital allowed patients to interact with dogs and reduce their anxiety.",
    "options": [
      "bonding",
      "stress",
      "attitude",
      "breath"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "Many young graduates ______ opportunities abroad because they believe it will broaden their career prospects significantly.",
    "options": [
      "pitch",
      "tickled",
      "laugh",
      "seek"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The new library programme ______ make reading more enjoyable for children by hosting weekly storytelling events.",
    "options": [
      "calm lake",
      "take shelter",
      "seek to",
      "bare feet"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "It takes courage to ______ when you are struggling mentally, but it is always the right thing to do.",
    "options": [
      "seek help",
      "hold her breath",
      "bare feet",
      "stay still"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "Many people suffer from ______ in silence because they are afraid of being judged or misunderstood by others.",
    "options": [
      "pitcher",
      "depression",
      "attitude",
      "shelter"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "The constant grey skies and cold rain during November always seemed to ______ her and drain her of energy.",
    "options": [
      "depress",
      "laugh",
      "bond",
      "calm"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "He felt deeply ______ after losing his job and found it hard to get out of bed or engage with everyday life.",
    "options": [
      "fashionable",
      "depressed",
      "similar",
      "still"
    ],
    "answer": 1,
    "vocabIndex": 57
  },
  {
    "q": "The ______ of the 1930s caused widespread unemployment and poverty across many countries worldwide.",
    "options": [
      "stressed out",
      "is similar to",
      "seek to",
      "economic depression"
    ],
    "answer": 3,
    "vocabIndex": 58
  }
];

const LOOKUP = {
  "similar": {
    "pos": "adj.",
    "en_def": "sharing matching features but not completely identical.",
    "cn_def": "相似的、類似的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sharing matching features but not completely identical.",
        "cn_def": "相似的、類似的"
      }
    ]
  },
  "similarity": {
    "pos": "n.",
    "en_def": "a specific matching point shared between distinct items.",
    "cn_def": "相似處、類似點",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific matching point shared between distinct items.",
        "cn_def": "相似處、類似點"
      }
    ]
  },
  "a is similar to b": {
    "pos": "phr.",
    "en_def": "one object looks or behaves like a separate counterpart.",
    "cn_def": "A與B相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "one object looks or behaves like a separate counterpart.",
        "cn_def": "A與B相似"
      }
    ]
  },
  "is similar to": {
    "pos": "phr.",
    "en_def": "one object looks or behaves like a separate counterpart.",
    "cn_def": "A與B相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "one object looks or behaves like a separate counterpart.",
        "cn_def": "A與B相似"
      }
    ]
  },
  "be similar in": {
    "pos": "phr.",
    "en_def": "sharing matching metrics within an explicit category.",
    "cn_def": "在…方面相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "sharing matching metrics within an explicit category.",
        "cn_def": "在…方面相似"
      }
    ]
  },
  "are similar in": {
    "pos": "phr.",
    "en_def": "sharing matching metrics within an explicit category.",
    "cn_def": "在…方面相似",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "sharing matching metrics within an explicit category.",
        "cn_def": "在…方面相似"
      }
    ]
  },
  "fashion": {
    "pos": "n.",
    "en_def": "a specific style of clothes popular at a certain time.",
    "cn_def": "流行、時尚",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a specific style of clothes popular at a certain time.",
        "cn_def": "流行、時尚"
      },
      {
        "pos": "n.",
        "en_def": "a particular way or manner of doing something.",
        "cn_def": "方式、樣子"
      }
    ]
  },
  "fashionable": {
    "pos": "adj.",
    "en_def": "following the newest trendy styles cleanly.",
    "cn_def": "時髦的、流行的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "following the newest trendy styles cleanly.",
        "cn_def": "時髦的、流行的"
      }
    ]
  },
  "old-fashioned": {
    "pos": "adj.",
    "en_def": "no longer modern or popular; using historic setups.",
    "cn_def": "過時的、老式的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "no longer modern or popular; using historic setups.",
        "cn_def": "過時的、老式的"
      }
    ]
  },
  "in a peaceful fashion": {
    "pos": "phr.",
    "en_def": "completing a protest or meeting with zero violence.",
    "cn_def": "以和平的方式",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "completing a protest or meeting with zero violence.",
        "cn_def": "以和平的方式"
      }
    ]
  },
  "investigating": {
    "pos": "v.",
    "en_def": "to carefully examine a crime or problem to find facts.",
    "cn_def": "調查、審查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carefully examine a crime or problem to find facts.",
        "cn_def": "調查、審查"
      }
    ]
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to carefully examine a crime or problem to find facts.",
    "cn_def": "調查、審查",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to carefully examine a crime or problem to find facts.",
        "cn_def": "調查、審查"
      }
    ]
  },
  "investigation": {
    "pos": "n.",
    "en_def": "the official systematic check to find a hidden answer.",
    "cn_def": "調查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the official systematic check to find a hidden answer.",
        "cn_def": "調查"
      }
    ]
  },
  "investigator": {
    "pos": "n.",
    "en_def": "a detective or agent handling fact-finding tasks.",
    "cn_def": "調查員、偵探",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a detective or agent handling fact-finding tasks.",
        "cn_def": "調查員、偵探"
      }
    ]
  },
  "launch an investigation": {
    "pos": "phr.",
    "en_def": "to officially start a deep background check on a case.",
    "cn_def": "展開調查",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially start a deep background check on a case.",
        "cn_def": "展開調查"
      }
    ]
  },
  "bare": {
    "pos": "adj.",
    "en_def": "without any clothes, coverage, or decorations.",
    "cn_def": "赤裸的、空無一物的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "without any clothes, coverage, or decorations.",
        "cn_def": "赤裸的、空無一物的"
      }
    ]
  },
  "bare feet": {
    "pos": "phr.",
    "en_def": "feet without socks or shoes on walking surfaces.",
    "cn_def": "赤腳、光腳",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feet without socks or shoes on walking surfaces.",
        "cn_def": "赤腳、光腳"
      }
    ]
  },
  "bare arms": {
    "pos": "phr.",
    "en_def": "limbs unprotected by shirt sleeves in cold air.",
    "cn_def": "裸露的手臂",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "limbs unprotected by shirt sleeves in cold air.",
        "cn_def": "裸露的手臂"
      }
    ]
  },
  "naked": {
    "pos": "adj.",
    "en_def": "fully without clothing garments; in a natural state.",
    "cn_def": "裸體的、赤裸的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fully without clothing garments; in a natural state.",
        "cn_def": "裸體的、赤裸的"
      }
    ]
  },
  "grin": {
    "pos": "n.",
    "en_def": "a wide, broad smile showcasing high happiness.",
    "cn_def": "露齒的笑、大大的微笑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a wide, broad smile showcasing high happiness.",
        "cn_def": "露齒的笑、大大的微笑"
      }
    ]
  },
  "grin / grinned / grinned": {
    "pos": "v.",
    "en_def": "to smile widely, often showing your teeth.",
    "cn_def": "露齒而笑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to smile widely, often showing your teeth.",
        "cn_def": "露齒而笑"
      }
    ]
  },
  "grinned": {
    "pos": "v.",
    "en_def": "to smile widely, often showing your teeth.",
    "cn_def": "露齒而笑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to smile widely, often showing your teeth.",
        "cn_def": "露齒而笑"
      }
    ]
  },
  "big grin": {
    "pos": "phr.",
    "en_def": "a massive facial reflection suggesting fine news.",
    "cn_def": "大大的微笑",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a massive facial reflection suggesting fine news.",
        "cn_def": "大大的微笑"
      }
    ]
  },
  "laugh": {
    "pos": "v.",
    "en_def": "to make sounds showing amusement or mockery.",
    "cn_def": "笑、嘲笑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make sounds showing amusement or mockery.",
        "cn_def": "笑、嘲笑"
      }
    ]
  },
  "smile": {
    "pos": "v.",
    "en_def": "turning up the corners of the mouth silently.",
    "cn_def": "微笑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "turning up the corners of the mouth silently.",
        "cn_def": "微笑"
      }
    ]
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into the lungs and send it out again.",
    "cn_def": "呼吸",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take air into the lungs and send it out again.",
        "cn_def": "呼吸"
      }
    ]
  },
  "breath": {
    "pos": "n.",
    "en_def": "the actual air taken in or blown out during respiration.",
    "cn_def": "呼吸、氣息（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the actual air taken in or blown out during respiration.",
        "cn_def": "呼吸、氣息（名詞）"
      }
    ]
  },
  "take a deep breath": {
    "pos": "phr.",
    "en_def": "filling lungs completely to calm down an upset mind.",
    "cn_def": "深呼吸",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "filling lungs completely to calm down an upset mind.",
        "cn_def": "深呼吸"
      }
    ]
  },
  "hold her breath": {
    "pos": "phr.",
    "en_def": "deliberately stopping respiration under water channels.",
    "cn_def": "憋氣、屏息",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "deliberately stopping respiration under water channels.",
        "cn_def": "憋氣、屏息"
      }
    ]
  },
  "hold one's breath": {
    "pos": "phr.",
    "en_def": "deliberately stopping respiration under water channels.",
    "cn_def": "憋氣、屏息",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "deliberately stopping respiration under water channels.",
        "cn_def": "憋氣、屏息"
      }
    ]
  },
  "tickled": {
    "pos": "v.",
    "en_def": "to touch someone lightly to make them laugh or wiggle.",
    "cn_def": "搔癢、使發癢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to touch someone lightly to make them laugh or wiggle.",
        "cn_def": "搔癢、使發癢"
      }
    ]
  },
  "tickle": {
    "pos": "v.",
    "en_def": "to touch someone lightly to make them laugh or wiggle.",
    "cn_def": "搔癢、使發癢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to touch someone lightly to make them laugh or wiggle.",
        "cn_def": "搔癢、使發癢"
      }
    ]
  },
  "pitch": {
    "pos": "n.",
    "en_def": "the high or low level of a musical sound or voice.",
    "cn_def": "音高",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the high or low level of a musical sound or voice.",
        "cn_def": "音高"
      },
      {
        "pos": "v.",
        "en_def": "to throw a sports ball toward a player with a bat.",
        "cn_def": "投（球）"
      }
    ]
  },
  "high pitch": {
    "pos": "phr.",
    "en_def": "a sharp voice tone triggered by extreme nervousness.",
    "cn_def": "高音、高音調",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sharp voice tone triggered by extreme nervousness.",
        "cn_def": "高音、高音調"
      }
    ]
  },
  "pitcher": {
    "pos": "n.",
    "en_def": "the central baseball player who throws toward home base.",
    "cn_def": "投手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the central baseball player who throws toward home base.",
        "cn_def": "投手"
      }
    ]
  },
  "attitude": {
    "pos": "n.",
    "en_def": "a settled way of thinking or feeling about an object.",
    "cn_def": "態度、看法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a settled way of thinking or feeling about an object.",
        "cn_def": "態度、看法"
      }
    ]
  },
  "positive attitude": {
    "pos": "phr.",
    "en_def": "a hopeful mind layout that keeps co-workers happy.",
    "cn_def": "積極的態度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a hopeful mind layout that keeps co-workers happy.",
        "cn_def": "積極的態度"
      }
    ]
  },
  "attitude toward": {
    "pos": "phr.",
    "en_def": "an individual's explicit psychological stance on a topic.",
    "cn_def": "對…的態度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an individual's explicit psychological stance on a topic.",
        "cn_def": "對…的態度"
      }
    ]
  },
  "stress": {
    "pos": "n.",
    "en_def": "great worry or mental strain caused by a tough job.",
    "cn_def": "壓力、緊張",
    "combined": [
      {
        "pos": "n.",
        "en_def": "great worry or mental strain caused by a tough job.",
        "cn_def": "壓力、緊張"
      },
      {
        "pos": "v.",
        "en_def": "to emphasize a point; to cause worry to a peer.",
        "cn_def": "強調、使緊張"
      }
    ]
  },
  "stressed": {
    "pos": "v.",
    "en_def": "to emphasize a point; to cause worry to a peer.",
    "cn_def": "強調、使緊張",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to emphasize a point; to cause worry to a peer.",
        "cn_def": "強調、使緊張"
      }
    ]
  },
  "stressful": {
    "pos": "adj.",
    "en_def": "causing a huge wave of ongoing anxiety and worry.",
    "cn_def": "壓力很大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing a huge wave of ongoing anxiety and worry.",
        "cn_def": "壓力很大的"
      }
    ]
  },
  "be stressed out": {
    "pos": "phr.",
    "en_def": "feeling completely crushed by taking on excess duties.",
    "cn_def": "壓力過大的、筋疲力竭的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feeling completely crushed by taking on excess duties.",
        "cn_def": "壓力過大的、筋疲力竭的"
      }
    ]
  },
  "stressed out": {
    "pos": "phr.",
    "en_def": "feeling completely crushed by taking on excess duties.",
    "cn_def": "壓力過大的、筋疲力竭的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "feeling completely crushed by taking on excess duties.",
        "cn_def": "壓力過大的、筋疲力竭的"
      }
    ]
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a heavy physical or social load pushing against you.",
    "cn_def": "壓力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a heavy physical or social load pushing against you.",
        "cn_def": "壓力"
      }
    ]
  },
  "shelter": {
    "pos": "n.",
    "en_def": "a building structure providing safety from wind or harm.",
    "cn_def": "庇護所、避難處",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building structure providing safety from wind or harm.",
        "cn_def": "庇護所、避難處"
      }
    ]
  },
  "animal shelter": {
    "pos": "phr.",
    "en_def": "a temporary home keeping lost dogs safe before adoption.",
    "cn_def": "動物收容所",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a temporary home keeping lost dogs safe before adoption.",
        "cn_def": "動物收容所"
      }
    ]
  },
  "take shelter": {
    "pos": "phr.",
    "en_def": "entering a secure room to avoid a violent storm track.",
    "cn_def": "避難、尋求庇護",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "entering a secure room to avoid a violent storm track.",
        "cn_def": "避難、尋求庇護"
      }
    ]
  },
  "calm": {
    "pos": "adj.",
    "en_def": "peaceful, quiet, and not showing any panic or worry.",
    "cn_def": "冷靜的、平靜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "peaceful, quiet, and not showing any panic or worry.",
        "cn_def": "冷靜的、平靜的"
      },
      {
        "pos": "v.",
        "en_def": "to make a wild animal or panicked peer peaceful.",
        "cn_def": "使平靜、使鎮定"
      }
    ]
  },
  "calm down": {
    "pos": "phr.",
    "en_def": "taking a minute to lower heart rates after bad news.",
    "cn_def": "冷靜下來、鎮定下來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "taking a minute to lower heart rates after bad news.",
        "cn_def": "冷靜下來、鎮定下來"
      }
    ]
  },
  "calm lake": {
    "pos": "phr.",
    "en_def": "a flat water surface tracking zero waves or wind.",
    "cn_def": "平靜的湖面",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a flat water surface tracking zero waves or wind.",
        "cn_def": "平靜的湖面"
      }
    ]
  },
  "still": {
    "pos": "adj.",
    "en_def": "completely stationary; tracking zero movements.",
    "cn_def": "靜止的、一動不動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely stationary; tracking zero movements.",
        "cn_def": "靜止的、一動不動的"
      }
    ]
  },
  "stay still": {
    "pos": "phr.",
    "en_def": "a medical reminder telling patients to stop wiggling.",
    "cn_def": "保持不動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a medical reminder telling patients to stop wiggling.",
        "cn_def": "保持不動"
      }
    ]
  },
  "bond": {
    "pos": "n.",
    "en_def": "a close connection or deep friendship linking peers.",
    "cn_def": "情感紐帶、緊密關係",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a close connection or deep friendship linking peers.",
        "cn_def": "情感紐帶、緊密關係"
      },
      {
        "pos": "v.",
        "en_def": "to develop a close link; to glue objects together.",
        "cn_def": "建立關係、黏合"
      }
    ]
  },
  "strong bond": {
    "pos": "phr.",
    "en_def": "an unbreakable connection with a best family peer.",
    "cn_def": "緊密的關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an unbreakable connection with a best family peer.",
        "cn_def": "緊密的關係"
      }
    ]
  },
  "bonding": {
    "pos": "n.",
    "en_def": "the active process of developing closeness with pets.",
    "cn_def": "培養感情、凝聚力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the active process of developing closeness with pets.",
        "cn_def": "培養感情、凝聚力"
      }
    ]
  },
  "seek": {
    "pos": "v.",
    "en_def": "to search for or try to find a specialized entry.",
    "cn_def": "尋找、尋求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to search for or try to find a specialized entry.",
        "cn_def": "尋找、尋求"
      }
    ]
  },
  "seek / sought / sought": {
    "pos": "v.",
    "en_def": "to search for or try to find a specialized entry.",
    "cn_def": "尋找、尋求",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to search for or try to find a specialized entry.",
        "cn_def": "尋找、尋求"
      }
    ]
  },
  "seek to": {
    "pos": "phr.",
    "en_def": "trying hard to encourage students to read for fun.",
    "cn_def": "試圖去…、力圖",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "trying hard to encourage students to read for fun.",
        "cn_def": "試圖去…、力圖"
      }
    ]
  },
  "seek help": {
    "pos": "phr.",
    "en_def": "calling an expert to claim support during a crisis.",
    "cn_def": "尋求幫助",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "calling an expert to claim support during a crisis.",
        "cn_def": "尋求幫助"
      }
    ]
  },
  "depression": {
    "pos": "n.",
    "en_def": "a psychological state of deep sadness and low energy.",
    "cn_def": "憂鬱症、沮喪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a psychological state of deep sadness and low energy.",
        "cn_def": "憂鬱症、沮喪"
      }
    ]
  },
  "depress": {
    "pos": "v.",
    "en_def": "to make someone feel sad, tired, or helpless.",
    "cn_def": "使沮喪、使憂鬱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel sad, tired, or helpless.",
        "cn_def": "使沮喪、使憂鬱"
      }
    ]
  },
  "depressed": {
    "pos": "adj.",
    "en_def": "experiencing an ongoing mental low due to failure.",
    "cn_def": "感到沮喪的、憂鬱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "experiencing an ongoing mental low due to failure.",
        "cn_def": "感到沮喪的、憂鬱的"
      }
    ]
  },
  "economic depression": {
    "pos": "phr.",
    "en_def": "a severe historical era tracking zero corporate trades.",
    "cn_def": "經濟大蕭條",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a severe historical era tracking zero corporate trades.",
        "cn_def": "經濟大蕭條"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
