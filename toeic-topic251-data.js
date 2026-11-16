// Topic 251 Quiz Data: Musical Instruments 樂器
// Source word list: https://www.examword.com/group-topic/musical-instruments — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T251 - Musical Instruments 樂器",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "melody",
    "pos": "n.",
    "cn_def": "旋律",
    "en_def": "a series of musical notes that make a pleasing tune",
    "sentence": "A: Why does the new television commercial for our coffee shop feel so warm and welcoming, even though the actors hardly say anything at all? B: The marketing team hired a local composer who wrote a gentle {{BLANK}} on the piano, and it plays softly in the background while customers smile and chat.",
    "cn": "A：為什麼我們咖啡店的新電視廣告感覺這麼溫暖親切，即使演員幾乎什麼都沒說？ B：行銷團隊請了一位當地作曲家，用鋼琴寫了一段溫柔的【旋律】，在顧客微笑聊天時於背景輕柔地播放。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏",
    "en_def": "a regular, repeated pattern of sounds or movements",
    "sentence": "A: How did the new dance instructor at the community center manage to get so many office workers to join her evening classes this month? B: She plays popular songs with a strong, steady {{BLANK}}, so even beginners who feel nervous can follow the steps easily and enjoy the exercise after a long day.",
    "cn": "A：社區中心的新舞蹈老師是怎麼讓這麼多上班族這個月報名她的晚間課程的？ B：她播放有強烈、穩定【節奏】的流行歌曲，所以即使是緊張的初學者也能輕鬆跟上舞步，在漫長的一天後享受運動。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和聲；和諧",
    "en_def": "musical notes sung or played together that sound pleasant",
    "sentence": "A: What did the hotel guests think of the choir that performed in the lobby during the holiday party last Friday night? B: Many guests told the front desk staff that the singers' voices blended in perfect {{BLANK}}, and several people even asked whether the group could be booked for their own company events.",
    "cn": "A：飯店客人覺得上週五晚上假日派對期間在大廳表演的合唱團如何？ B：許多客人告訴櫃檯人員，歌手們的聲音融合成完美的【和聲】，甚至有幾個人詢問能否為自己公司的活動預約這個團體。"
  },
  {
    "word": "orchestra",
    "pos": "n.",
    "cn_def": "管弦樂團",
    "en_def": "a large group of musicians who play classical instruments together",
    "sentence": "A: Is the city hall still planning to hold a free concert in the park to celebrate its hundredth anniversary next month? B: Yes, the mayor confirmed that the national {{BLANK}} will perform there, with about sixty musicians, so the events team is arranging extra seating, security guards, and shuttle buses.",
    "cn": "A：市政府下個月還打算在公園舉辦免費音樂會慶祝百週年嗎？ B：是的，市長證實國家【管弦樂團】將在那裡演出，約有六十位音樂家，因此活動團隊正在安排額外的座位、保全人員和接駁車。"
  },
  {
    "word": "band",
    "pos": "n.",
    "cn_def": "樂團",
    "en_def": "a small group of musicians who play popular music together",
    "sentence": "A: Have you found any entertainment for the company's summer barbecue, or are we just going to play songs from a speaker again this year? B: I booked a local jazz {{BLANK}} with four members, and they agreed to play for two hours in the garden while employees enjoy the food and games.",
    "cn": "A：你找到公司夏季烤肉會的表演節目了嗎？還是今年又只是用喇叭放歌？ B：我預約了一個有四名成員的當地爵士【樂團】，他們同意在員工享用食物和玩遊戲時，在花園裡演奏兩個小時。"
  },
  {
    "word": "string",
    "pos": "n.",
    "cn_def": "弦",
    "en_def": "a thin wire or thread on an instrument that makes sound",
    "sentence": "A: Why did the guitarist suddenly stop playing in the middle of the song at the restaurant's opening night yesterday? B: One {{BLANK}} on his guitar broke while he was playing, so he had to replace it quickly backstage, and the manager apologized to the diners and offered them free drinks.",
    "cn": "A：為什麼昨天餐廳開幕夜時吉他手在歌曲中途突然停止演奏？ B：他演奏時吉他上的一根【弦】斷了，所以他必須在後台迅速更換，經理向用餐的客人道歉並招待他們免費飲料。"
  },
  {
    "word": "keyboard",
    "pos": "n.",
    "cn_def": "電子琴；鍵盤樂器",
    "en_def": "an electronic musical instrument with keys like a piano",
    "sentence": "A: Do you think the small conference room is big enough for the music workshop that the training department is organizing for new staff? B: It should be fine, because the teacher is only bringing an electronic {{BLANK}} and a few speakers, and the participants will sit in a circle around the table.",
    "cn": "A：你覺得那間小會議室夠大，可以容納訓練部門為新員工舉辦的音樂工作坊嗎？ B：應該沒問題，因為老師只會帶一台【電子琴】和幾個喇叭，參加者會圍著桌子坐成一圈。"
  },
  {
    "word": "drum",
    "pos": "n.",
    "cn_def": "鼓",
    "en_def": "a round instrument that you hit with sticks or your hands",
    "sentence": "A: What is that loud beating sound coming from the warehouse next to our office building every afternoon this week? B: The company that rents that space is filming a music video, and a young musician has been playing a huge {{BLANK}} for hours, so the building manager promised to talk to them.",
    "cn": "A：這週每天下午從我們辦公大樓隔壁倉庫傳來的響亮敲打聲是什麼？ B：租那個空間的公司正在拍音樂錄影帶，一位年輕樂手連續好幾個小時在打一面巨大的【鼓】，所以大樓管理員答應會去跟他們談談。"
  },
  {
    "word": "flute",
    "pos": "n.",
    "cn_def": "長笛",
    "en_def": "a long thin instrument that you hold sideways and blow across",
    "sentence": "A: Why is the marketing assistant leaving work early every Wednesday afternoon now, and does the manager know about it? B: Yes, the manager agreed, because she takes {{BLANK}} lessons at the music school across town, and she promised to finish her reports early and answer urgent emails from home.",
    "cn": "A：為什麼行銷助理現在每週三下午都提早下班，經理知道嗎？ B：知道，經理同意了，因為她在城市另一頭的音樂學校上【長笛】課，而且她保證會提早完成報告，並在家回覆緊急郵件。"
  },
  {
    "word": "violin",
    "pos": "n.",
    "cn_def": "小提琴",
    "en_def": "a small wooden instrument with four strings, played with a bow",
    "sentence": "A: How did the airline handle the passenger who wanted to bring a valuable musical instrument on board the crowded flight to Vienna? B: The flight attendant allowed her to keep the old {{BLANK}} in its case under the seat, because it was very expensive and might be damaged in the cargo area.",
    "cn": "A：航空公司如何處理那位想把貴重樂器帶上飛往維也納的客滿班機的乘客？ B：空服員允許她把那把舊【小提琴】放在琴盒裡並置於座位下方，因為它非常昂貴，放在貨艙可能會受損。"
  },
  {
    "word": "guitar",
    "pos": "n.",
    "cn_def": "吉他",
    "en_def": "an instrument with six strings that you play with your fingers",
    "sentence": "A: What kind of gift did the team finally choose for Mr. Lee, who is retiring next month after thirty years with the company? B: Since he loves playing folk songs at home on weekends, everyone shared the cost of a beautiful new {{BLANK}}, and we will give it to him at the farewell dinner.",
    "cn": "A：團隊最後為下個月即將在公司服務三十年後退休的李先生選了什麼禮物？ B：因為他喜歡週末在家彈民謠，大家一起分攤費用買了一把漂亮的新【吉他】，我們會在歡送晚宴上送給他。"
  },
  {
    "word": "piano",
    "pos": "n.",
    "cn_def": "鋼琴",
    "en_def": "a large instrument with black and white keys",
    "sentence": "A: Why is the hotel lobby so quiet this evening, when there is usually soft music in the background while guests check in? B: The pianist is sick today, and the grand {{BLANK}} is also being tuned by a technician, so the manager decided to play recorded music in the restaurant instead.",
    "cn": "A：為什麼今晚飯店大廳這麼安靜？平常客人辦理入住時背景總有輕柔的音樂。 B：鋼琴師今天生病了，而且平台【鋼琴】也正由技師調音，所以經理決定改在餐廳播放錄音音樂。"
  },
  {
    "word": "trumpet",
    "pos": "n.",
    "cn_def": "小號",
    "en_def": "a brass instrument that you blow into, with three buttons",
    "sentence": "A: What was that loud musical sound at the beginning of the sports company's product launch event in the stadium this morning? B: The organizers hired a musician to play the {{BLANK}} as the new running shoes appeared on stage, and the bright, powerful notes made the whole audience cheer and clap.",
    "cn": "A：今天早上那家運動公司在體育場的產品發表會一開始那個響亮的音樂聲是什麼？ B：主辦單位請了一位樂手在新跑鞋登台時吹奏【小號】，明亮有力的音符讓全場觀眾歡呼鼓掌。"
  },
  {
    "word": "cello",
    "pos": "n.",
    "cn_def": "大提琴",
    "en_def": "a large string instrument that you hold between your knees",
    "sentence": "A: Did the moving company have any trouble bringing your daughter's musical instruments into your new apartment on the tenth floor last weekend? B: The workers carried the {{BLANK}} up the stairs very carefully, because it was too big for the small elevator, and they wrapped it in thick blankets to protect it.",
    "cn": "A：搬家公司上週末把你女兒的樂器搬進你位於十樓的新公寓時有遇到什麼麻煩嗎？ B：工人非常小心地把【大提琴】從樓梯搬上去，因為它太大放不進小電梯，他們還用厚毯子包住它保護。"
  },
  {
    "word": "clarinet",
    "pos": "n.",
    "cn_def": "單簧管；豎笛",
    "en_def": "a black wooden instrument that you blow into",
    "sentence": "A: Why has the jazz club downtown become so popular with office workers on Friday nights during the past few months? B: A talented musician plays the {{BLANK}} there every week, and his smooth, relaxing style helps people forget about their stressful jobs while they enjoy dinner with friends.",
    "cn": "A：為什麼市中心那家爵士俱樂部過去幾個月在週五晚上變得這麼受上班族歡迎？ B：一位才華洋溢的樂手每週都在那裡吹奏【單簧管】，他流暢放鬆的風格讓人在和朋友享用晚餐時忘記工作壓力。"
  },
  {
    "word": "harp",
    "pos": "n.",
    "cn_def": "豎琴",
    "en_def": "a large instrument with many strings in a frame, played with the fingers",
    "sentence": "A: What kind of music did the couple choose for their wedding ceremony at the seaside hotel, and was it expensive to arrange? B: They hired a woman who plays the {{BLANK}}, and although the fee was quite high, the gentle sound was perfect for the outdoor ceremony and all the guests loved it.",
    "cn": "A：那對夫婦在海邊飯店的婚禮選了什麼樣的音樂？安排起來貴嗎？ B：他們請了一位彈奏【豎琴】的女士，雖然費用相當高，但輕柔的聲音非常適合戶外典禮，所有賓客都很喜歡。"
  },
  {
    "word": "percussion",
    "pos": "n.",
    "cn_def": "打擊樂器",
    "en_def": "instruments that you hit or shake, such as drums",
    "sentence": "A: Which section of the school orchestra needs the most new equipment, according to the music director's budget report this year? B: She says the {{BLANK}} section needs the most money, because several drums, cymbals, and bells are cracked or broken, and the students cannot practice properly for the spring concert.",
    "cn": "A：根據音樂總監今年的預算報告，學校管弦樂團哪一部分最需要新設備？ B：她說【打擊樂器】部分最需要經費，因為好幾面鼓、鈸和鈴都破裂或損壞了，學生無法好好為春季音樂會練習。"
  },
  {
    "word": "bow",
    "pos": "n.",
    "cn_def": "琴弓",
    "en_def": "a long stick with hair that you move across the strings",
    "sentence": "A: Why did the violinist look so worried before she walked onto the stage at the charity concert last night? B: She realized that the {{BLANK}} she normally uses was left in the taxi, so she had to borrow one from another musician just ten minutes before her performance started.",
    "cn": "A：為什麼小提琴手昨晚在慈善音樂會走上舞台前看起來那麼擔心？ B：她發現平常用的【琴弓】忘在計程車上了，所以她必須在演出開始前十分鐘向另一位樂手借一支。"
  },
  {
    "word": "tune",
    "pos": "n.",
    "cn_def": "曲調；曲子",
    "en_def": "a series of musical notes that form a song",
    "sentence": "A: Why does everyone in the sales department keep humming the same song while they work at their desks today? B: The new advertisement for our soft drink uses a very catchy {{BLANK}}, and after watching it several times in this morning's meeting, nobody can get it out of their heads.",
    "cn": "A：為什麼今天業務部的每個人都一邊在座位上工作，一邊哼著同一首歌？ B：我們汽水的新廣告用了一段非常朗朗上口的【曲調】，在今天早上的會議中看了好幾遍後，沒有人能把它從腦海中甩掉。"
  },
  {
    "word": "composer",
    "pos": "n.",
    "cn_def": "作曲家",
    "en_def": "a person who writes music",
    "sentence": "A: Who wrote the beautiful background music for the documentary about our company's history that was shown at the anniversary dinner? B: The film director hired a young {{BLANK}} from the local art university, and she created all the music in just three weeks, working closely with the editing team.",
    "cn": "A：在週年晚宴上播放的那部關於我們公司歷史的紀錄片，那段美麗的背景音樂是誰寫的？ B：電影導演請了當地藝術大學一位年輕的【作曲家】，她與剪輯團隊密切合作，只花了三週就完成了全部配樂。"
  },
  {
    "word": "conductor",
    "pos": "n.",
    "cn_def": "指揮",
    "en_def": "a person who stands in front of an orchestra and directs it",
    "sentence": "A: Why was the concert at the city music hall delayed by almost thirty minutes on Saturday evening? B: The {{BLANK}} was stuck in heavy traffic on his way from the airport, so the musicians had to wait on stage until he arrived, and the hall offered drinks to the waiting audience.",
    "cn": "A：為什麼週六晚上市立音樂廳的音樂會延遲了將近三十分鐘？ B：【指揮】從機場過來的路上被困在嚴重的車陣中，所以樂手們只好在台上等他抵達，音樂廳則招待等待的觀眾飲料。"
  },
  {
    "word": "solo",
    "pos": "n.",
    "cn_def": "獨奏；獨唱",
    "en_def": "a piece of music played or sung by one person alone",
    "sentence": "A: What was the most memorable part of the company's annual talent show, in your opinion, since you were one of the judges? B: I think it was when the accountant from the finance team played a short piano {{BLANK}}, because nobody knew she had such skill, and the whole room stood up and applauded.",
    "cn": "A：既然你是評審之一，你認為公司年度才藝表演最令人難忘的是哪一部分？ B：我認為是財務部的會計彈奏一段簡短的鋼琴【獨奏】的時候，因為沒有人知道她有這樣的技巧，全場都起立鼓掌。"
  },
  {
    "word": "ensemble",
    "pos": "n.",
    "cn_def": "合奏團；小型樂團",
    "en_def": "a small group of musicians who perform together",
    "sentence": "A: Is the art museum planning any special events to attract more visitors during the slow winter season this year? B: Yes, every Sunday afternoon a small {{BLANK}} of five musicians will play classical pieces in the main hall, and visitors can enjoy the music for free with a regular ticket.",
    "cn": "A：美術館今年有計畫舉辦任何特別活動，在冬季淡季吸引更多遊客嗎？ B：有，每週日下午會有一個由五位音樂家組成的小型【合奏團】在主廳演奏古典樂曲，遊客憑一般門票就能免費欣賞音樂。"
  },
  {
    "word": "acoustic",
    "pos": "adj.",
    "cn_def": "原聲的；不插電的",
    "en_def": "(of an instrument) not using electricity to make the sound louder",
    "sentence": "A: Why did the café owner decide to change the type of live music she offers on weekday evenings? B: Some customers complained that the electric guitars were too loud for conversation, so now she invites singers who play {{BLANK}} guitars, which creates a calmer, more relaxing atmosphere.",
    "cn": "A：為什麼咖啡館老闆決定改變平日晚上提供的現場音樂類型？ B：有些顧客抱怨電吉他太吵，無法交談，所以現在她邀請彈奏【原聲】吉他的歌手，營造出更平靜、放鬆的氣氛。"
  },
  {
    "word": "electric",
    "pos": "adj.",
    "cn_def": "電的；電動的",
    "en_def": "using electricity to make or increase sound",
    "sentence": "A: Why does the band need such a large truck and so much power equipment for their outdoor show in the park? B: Most of their instruments are {{BLANK}}, including two guitars and a bass, so they need generators, amplifiers, and long cables to produce enough sound for thousands of people.",
    "cn": "A：為什麼那個樂團的公園戶外表演需要這麼大的卡車和這麼多電力設備？ B：他們大部分的樂器都是【電子】的，包括兩把吉他和一把貝斯，所以他們需要發電機、擴音器和長電線，才能為數千人製造足夠的音量。"
  },
  {
    "word": "amplify",
    "pos": "v.",
    "cn_def": "擴大（聲音）",
    "en_def": "to make a sound louder, usually with electronic equipment",
    "sentence": "A: Will the speakers in the conference hall be powerful enough for the keynote presentation, since more than five hundred people have registered? B: The technicians will set up extra microphones to {{BLANK}} the speaker's voice, and they will test all the equipment tomorrow morning to make sure everyone can hear clearly.",
    "cn": "A：既然已有超過五百人報名，會議廳的喇叭夠力應付主題演講嗎？ B：技術人員會架設額外的麥克風來【放大】講者的聲音，他們明天早上也會測試所有設備，確保每個人都能聽得清楚。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something regularly to improve your skill",
    "sentence": "A: How did your son become such a good piano player in only two years, when he works such long hours at the bank? B: He wakes up early and makes time to {{BLANK}} for an hour every morning before work, and on weekends he takes lessons with an experienced teacher downtown.",
    "cn": "A：你兒子在銀行工作時間那麼長，怎麼只花兩年就成為這麼好的鋼琴手？ B：他每天上班前都早起，抽出一小時【練習】，週末還跟市中心一位經驗豐富的老師上課。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演；演出",
    "en_def": "to play music, sing, or act in front of an audience",
    "sentence": "A: Has the event planner confirmed which singer will entertain the guests at the hotel's grand opening celebration next Saturday? B: Yes, a famous jazz singer agreed to {{BLANK}} for one hour in the ballroom, and the hotel will also provide a buffet dinner and free parking for all the invited guests.",
    "cn": "A：活動策劃人確認下週六飯店盛大開幕慶祝會上將由哪位歌手為賓客表演了嗎？ B：確認了，一位知名爵士歌手同意在宴會廳【表演】一小時，飯店也會為所有受邀賓客提供自助晚餐和免費停車。"
  },
  {
    "word": "tempo",
    "pos": "n.",
    "cn_def": "速度；拍子",
    "en_def": "the speed at which music is played",
    "sentence": "A: Why did the fitness center change the music in the spinning class, which used to play slow songs from the eighties? B: Members said the old songs made them feel tired, so the instructor now chooses songs with a faster {{BLANK}}, which helps everyone pedal harder and stay energetic for the whole hour.",
    "cn": "A：為什麼健身中心改了飛輪課的音樂？以前都放八零年代的慢歌。 B：會員說舊歌讓他們覺得疲倦，所以教練現在挑選【速度】較快的歌曲，幫助大家更用力踩踏板，整整一小時都保持活力。"
  },
  {
    "word": "pitch",
    "pos": "n.",
    "cn_def": "音高",
    "en_def": "how high or low a sound is",
    "sentence": "A: Why did the music teacher ask the new choir members to sing alone in front of her before the first rehearsal? B: She wanted to check whether each singer could hold the correct {{BLANK}}, so she could place them in the right group, either with the high voices or the low voices.",
    "cn": "A：為什麼音樂老師在第一次排練前要求新合唱團員單獨在她面前唱歌？ B：她想確認每位歌手能否維持正確的【音高】，這樣才能把他們安排到正確的聲部，不論是高音組或低音組。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量",
    "en_def": "how loud a sound is",
    "sentence": "A: Could you please talk to the people in the next office, because their radio has been very loud since lunch time? B: Sure, I'll ask them politely to turn down the {{BLANK}}, since we have an important video call with our clients in Tokyo at three o'clock and need a quiet environment.",
    "cn": "A：可以請你跟隔壁辦公室的人說一下嗎？他們的收音機從午餐時間開始就很大聲。 B：當然，我會禮貌地請他們把【音量】調小，因為我們三點要和東京的客戶進行重要的視訊會議，需要安靜的環境。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "音階",
    "en_def": "a series of musical notes that go up or down in order",
    "sentence": "A: What do the beginners in the adult music class at the community center usually learn during their very first lesson? B: The teacher shows them how to sit correctly at the piano and play a simple {{BLANK}}, going up and down eight notes slowly, before they try any real songs.",
    "cn": "A：社區中心成人音樂班的初學者在第一堂課通常會學什麼？ B：老師會教他們如何正確地坐在鋼琴前，並彈奏一段簡單的【音階】，慢慢地上下彈八個音，然後才嘗試真正的歌曲。"
  },
  {
    "word": "rehearsal",
    "pos": "n.",
    "cn_def": "排練；彩排",
    "en_def": "a practice of a performance before the real show",
    "sentence": "A: Why do all the staff members of the theater need to stay late on Thursday evening, even though there is no show that night? B: The director has scheduled a full {{BLANK}} with costumes, lights, and music, so everyone can check every detail before the new musical opens to the public on Friday.",
    "cn": "A：為什麼劇院所有員工週四晚上都需要留下來加班，即使那天晚上沒有演出？ B：導演安排了一場有服裝、燈光和音樂的完整【彩排】，讓每個人都能在新音樂劇週五對外首演前檢查每個細節。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to a performance",
    "sentence": "A: How many people came to the free music festival in the central park that our company sponsored over the weekend? B: The organizers say the {{BLANK}} was over ten thousand people on Saturday alone, and our company logo appeared on every stage banner, so the marketing director is very pleased with the results.",
    "cn": "A：我們公司週末贊助的中央公園免費音樂節有多少人參加？ B：主辦單位說光是週六的【觀眾】就超過一萬人，而且我們公司的標誌出現在每個舞台的布條上，所以行銷總監對成果非常滿意。"
  },
  {
    "word": "concert",
    "pos": "n.",
    "cn_def": "音樂會；演唱會",
    "en_def": "a public performance of music",
    "sentence": "A: Why are so many of our employees asking to leave work early next Friday, according to the request forms you received? B: A popular rock group is holding a {{BLANK}} at the city stadium that evening, and many young staff members bought tickets months ago, so we need to plan the schedule carefully.",
    "cn": "A：根據你收到的申請表，為什麼有這麼多員工要求下週五提早下班？ B：一個受歡迎的搖滾團體那天晚上要在市立體育場舉辦【演唱會】，許多年輕員工幾個月前就買了票，所以我們需要仔細規劃班表。"
  }
];

const MCQS = [
  {
    "q": "The new phone advertisement uses a simple, pleasant _____ played on the piano. Many customers say they cannot stop humming it.",
    "options": [
      "melody",
      "audience",
      "volume",
      "rehearsal"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The aerobics instructor chose music with a steady _____ for the morning class. It helps participants move their feet at the same time.",
    "options": [
      "composer",
      "rhythm",
      "string",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The four singers practiced together for weeks before the company dinner. Their voices blended in perfect _____ during the final song.",
    "options": [
      "audience",
      "keyboard",
      "harmony",
      "rehearsal"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The city's symphony _____ includes more than eighty musicians. It will perform free outdoor concerts in the park every Sunday this summer.",
    "options": [
      "tempo",
      "melody",
      "pitch",
      "orchestra"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our marketing department hired a local jazz _____ for the product launch party. The four musicians will play for two hours in the lobby.",
    "options": [
      "tempo",
      "band",
      "pitch",
      "scale"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The guitarist had to stop playing when a _____ suddenly broke. He replaced it quickly and continued the show for the restaurant guests.",
    "options": [
      "audience",
      "conductor",
      "tempo",
      "string"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The training room has an electronic _____ with eighty-eight keys. Staff members may use it to practice during their lunch break.",
    "options": [
      "keyboard",
      "composer",
      "rhythm",
      "audience"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The young musician hit the large _____ with two wooden sticks. The loud beats could be heard from the parking lot.",
    "options": [
      "melody",
      "conductor",
      "drum",
      "scale"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "She tucked the _____ under her chin and lifted her bow. The audience became silent as soon as she began to play.",
    "options": [
      "violin",
      "drum",
      "piano",
      "composer"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "He strummed the six strings of his _____ while singing a folk song. The relaxed music suited the quiet café perfectly.",
    "options": [
      "drum",
      "guitar",
      "trumpet",
      "flute"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The hotel bought a grand _____ for its lobby last month. A pianist now plays it for guests every evening from six to nine.",
    "options": [
      "violin",
      "trumpet",
      "piano",
      "flute"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Drums, cymbals, and bells all belong to the _____ section. These instruments make sound when the players hit or shake them.",
    "options": [
      "melody",
      "harmony",
      "audience",
      "percussion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The violinist forgot her _____ in the taxi before the concert. She had to borrow one from another string player before going on stage.",
    "options": [
      "tempo",
      "bow",
      "audience",
      "scale"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The children in the waiting room kept humming a cheerful _____ from a cartoon. Their parents smiled because they recognized the song.",
    "options": [
      "conductor",
      "bow",
      "audience",
      "tune"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Mozart was a famous Austrian _____ who wrote more than six hundred pieces of music. Many orchestras still play his works today.",
    "options": [
      "composer",
      "audience",
      "ensemble",
      "rehearsal"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The _____ raised his baton, and the whole orchestra began to play. He guided the musicians with clear movements of his hands.",
    "options": [
      "audience",
      "tempo",
      "conductor",
      "string"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Most of the song was sung by the full choir. However, the lead singer performed a short _____ in the middle without any other voices.",
    "options": [
      "solo",
      "audience",
      "string",
      "pitch"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A small _____ of five musicians played classical pieces at the art museum. Visitors enjoyed the free music while walking through the galleries.",
    "options": [
      "tempo",
      "ensemble",
      "melody",
      "scale"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The café prefers _____ guitars because they do not need any electricity. Their soft natural sound is perfect for quiet conversation.",
    "options": [
      "electric",
      "digital",
      "acoustic",
      "noisy"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The band plugged their _____ guitars into large amplifiers before the outdoor show. Without power, these instruments would make very little sound.",
    "options": [
      "acoustic",
      "wooden",
      "classical",
      "electric"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The technicians set up microphones and speakers to _____ the singer's voice. Everyone in the large stadium could then hear her clearly.",
    "options": [
      "practice",
      "amplify",
      "perform",
      "compose"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Our receptionist plays the piano in a weekend band. She tries to _____ for thirty minutes every evening to improve her skills.",
    "options": [
      "amplify",
      "cancel",
      "applaud",
      "practice"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "A famous singer has agreed to _____ at the hotel's grand opening. She will sing five songs for the guests in the ballroom.",
    "options": [
      "perform",
      "amplify",
      "practice",
      "tune"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The fitness instructor chose songs with a fast _____ for the spinning class. The quick beat helps members pedal harder.",
    "options": [
      "audience",
      "string",
      "tempo",
      "composer"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The choir director checks whether each singer can hold the correct _____. Singers with high voices are placed in the soprano group.",
    "options": [
      "pitch",
      "audience",
      "ensemble",
      "composer"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Please turn down the _____ on your radio during office hours. Several employees have complained that the music is too loud.",
    "options": [
      "melody",
      "volume",
      "orchestra",
      "solo"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "In their first lesson, the students learned to play a simple _____ of eight notes. They moved slowly up and down the keyboard.",
    "options": [
      "audience",
      "conductor",
      "scale",
      "bow"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The actors will hold a full dress _____ on Thursday night. This final practice allows them to check costumes and lighting before opening night.",
    "options": [
      "audience",
      "tempo",
      "melody",
      "rehearsal"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "More than three thousand people attended the free concert in the park. The large _____ cheered loudly when the band appeared on stage.",
    "options": [
      "tempo",
      "audience",
      "melody",
      "scale"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Many employees bought tickets for the rock _____ at the city stadium on Friday night. Several of them asked to leave work early that day.",
    "options": [
      "tempo",
      "pitch",
      "bow",
      "concert"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "melody": {
    "pos": "n.",
    "en_def": "a series of musical notes that make a pleasing tune",
    "cn_def": "旋律"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular, repeated pattern of sounds or movements",
    "cn_def": "節奏"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "musical notes sung or played together that sound pleasant",
    "cn_def": "和聲；和諧"
  },
  "orchestra": {
    "pos": "n.",
    "en_def": "a large group of musicians who play classical instruments together",
    "cn_def": "管弦樂團"
  },
  "band": {
    "pos": "n.",
    "en_def": "a small group of musicians who play popular music together",
    "cn_def": "樂團"
  },
  "string": {
    "pos": "n.",
    "en_def": "a thin wire or thread on an instrument that makes sound",
    "cn_def": "弦"
  },
  "keyboard": {
    "pos": "n.",
    "en_def": "an electronic musical instrument with keys like a piano",
    "cn_def": "電子琴；鍵盤樂器"
  },
  "drum": {
    "pos": "n.",
    "en_def": "a round instrument that you hit with sticks or your hands",
    "cn_def": "鼓"
  },
  "flute": {
    "pos": "n.",
    "en_def": "a long thin instrument that you hold sideways and blow across",
    "cn_def": "長笛"
  },
  "violin": {
    "pos": "n.",
    "en_def": "a small wooden instrument with four strings, played with a bow",
    "cn_def": "小提琴"
  },
  "guitar": {
    "pos": "n.",
    "en_def": "an instrument with six strings that you play with your fingers",
    "cn_def": "吉他"
  },
  "piano": {
    "pos": "n.",
    "en_def": "a large instrument with black and white keys",
    "cn_def": "鋼琴"
  },
  "trumpet": {
    "pos": "n.",
    "en_def": "a brass instrument that you blow into, with three buttons",
    "cn_def": "小號"
  },
  "cello": {
    "pos": "n.",
    "en_def": "a large string instrument that you hold between your knees",
    "cn_def": "大提琴"
  },
  "clarinet": {
    "pos": "n.",
    "en_def": "a black wooden instrument that you blow into",
    "cn_def": "單簧管；豎笛"
  },
  "harp": {
    "pos": "n.",
    "en_def": "a large instrument with many strings in a frame, played with the fingers",
    "cn_def": "豎琴"
  },
  "percussion": {
    "pos": "n.",
    "en_def": "instruments that you hit or shake, such as drums",
    "cn_def": "打擊樂器"
  },
  "bow": {
    "pos": "n.",
    "en_def": "a long stick with hair that you move across the strings",
    "cn_def": "琴弓"
  },
  "tune": {
    "pos": "n.",
    "en_def": "a series of musical notes that form a song",
    "cn_def": "曲調；曲子"
  },
  "composer": {
    "pos": "n.",
    "en_def": "a person who writes music",
    "cn_def": "作曲家"
  },
  "conductor": {
    "pos": "n.",
    "en_def": "a person who stands in front of an orchestra and directs it",
    "cn_def": "指揮"
  },
  "solo": {
    "pos": "n.",
    "en_def": "a piece of music played or sung by one person alone",
    "cn_def": "獨奏；獨唱"
  },
  "ensemble": {
    "pos": "n.",
    "en_def": "a small group of musicians who perform together",
    "cn_def": "合奏團；小型樂團"
  },
  "acoustic": {
    "pos": "adj.",
    "en_def": "(of an instrument) not using electricity to make the sound louder",
    "cn_def": "原聲的；不插電的"
  },
  "electric": {
    "pos": "adj.",
    "en_def": "using electricity to make or increase sound",
    "cn_def": "電的；電動的"
  },
  "amplify": {
    "pos": "v.",
    "en_def": "to make a sound louder, usually with electronic equipment",
    "cn_def": "擴大（聲音）"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something regularly to improve your skill",
    "cn_def": "練習"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to play music, sing, or act in front of an audience",
    "cn_def": "表演；演出"
  },
  "tempo": {
    "pos": "n.",
    "en_def": "the speed at which music is played",
    "cn_def": "速度；拍子"
  },
  "pitch": {
    "pos": "n.",
    "en_def": "how high or low a sound is",
    "cn_def": "音高"
  },
  "volume": {
    "pos": "n.",
    "en_def": "how loud a sound is",
    "cn_def": "音量"
  },
  "scale": {
    "pos": "n.",
    "en_def": "a series of musical notes that go up or down in order",
    "cn_def": "音階"
  },
  "rehearsal": {
    "pos": "n.",
    "en_def": "a practice of a performance before the real show",
    "cn_def": "排練；彩排"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a performance",
    "cn_def": "觀眾；聽眾"
  },
  "concert": {
    "pos": "n.",
    "en_def": "a public performance of music",
    "cn_def": "音樂會；演唱會"
  }
};

const EXTRA_GLOSSES = {};
