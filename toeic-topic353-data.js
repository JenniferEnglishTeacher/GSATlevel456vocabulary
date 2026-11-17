// Topic 353 Quiz Data: Singing 唱歌
// Source word list: https://www.examword.com/group-topic/singing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T353 - Singing 唱歌",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fond",
    "pos": "adj.",
    "cn_def": "喜愛的",
    "en_def": "liking someone or something very much",
    "sentence": "A: Why does Ms. Chen always volunteer to organize the music program at our company's year-end party, even though she is so busy with the sales reports? B: She has been {{BLANK}} of singing since she was a child, and she says preparing the show helps her relax after long days at the office.",
    "cn": "A：為什麼陳小姐總是自願籌辦公司尾牙的音樂節目，即使她忙著做業務報告？ B：她從小就【喜愛】唱歌，而且她說準備表演能幫助她在辦公室度過漫長的一天後放鬆。"
  },
  {
    "word": "tune",
    "pos": "n.",
    "cn_def": "曲調；旋律",
    "en_def": "a short piece of music; a melody",
    "sentence": "A: What was that song you were humming at your desk while we were waiting for the client to join the video meeting this afternoon? B: It was a catchy {{BLANK}} from the new coffee shop commercial, and I have not been able to get it out of my head since I heard it on the radio yesterday.",
    "cn": "A：今天下午我們等客戶加入視訊會議時，你在座位上哼的是什麼歌？ B：那是新咖啡店廣告裡一段朗朗上口的【曲調】，我昨天在收音機聽到之後就一直忘不掉。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏",
    "en_def": "a regular, repeated pattern of beats in music",
    "sentence": "A: Why did the dance instructor ask our team to practice the opening song again before the company anniversary show on Friday evening? B: Several of us kept clapping at the wrong time, so she wants everyone to follow the {{BLANK}} of the drums carefully until we can move together without looking at each other.",
    "cn": "A：為什麼舞蹈老師要我們團隊在週五晚上的公司週年表演前再練一次開場歌？ B：我們有幾個人一直在錯誤的時間拍手，所以她要大家仔細跟著鼓的【節奏】，直到我們不用看彼此也能一起動作。"
  },
  {
    "word": "tone-deaf",
    "pos": "adj.",
    "cn_def": "五音不全的；音痴的",
    "en_def": "not able to hear the difference between musical notes or sing in tune",
    "sentence": "A: Are you going to join the singing contest that the human resources department is holding for the holiday party next month? B: No, I am completely {{BLANK}}, so I would rather help with the decorations and the sound system than embarrass myself in front of the whole company and our guests.",
    "cn": "A：你要參加人資部為下個月節日派對舉辦的歌唱比賽嗎？ B：不，我完全【五音不全】，所以我寧可幫忙佈置和音響，也不要在全公司和來賓面前出糗。"
  },
  {
    "word": "pitch",
    "pos": "n.",
    "cn_def": "音高",
    "en_def": "how high or low a sound or voice is",
    "sentence": "A: Why did the music teacher stop the rehearsal so many times this morning before the parents arrived at the school hall? B: The younger students were singing a little too low, so she played the piano note again and again until they could find the correct {{BLANK}} and hold it steadily.",
    "cn": "A：為什麼音樂老師今天早上在家長到達學校禮堂前，讓排練停了那麼多次？ B：年紀較小的學生唱得有點太低，所以她一再彈那個鋼琴音，直到他們能找到正確的【音高】並穩穩維持住。"
  },
  {
    "word": "resonant",
    "pos": "adj.",
    "cn_def": "宏亮的；響亮的",
    "en_def": "deep, clear and continuing to sound for a long time",
    "sentence": "A: Why did the event organizer choose Mr. Lin to sing the national anthem at the opening ceremony of the trade fair tomorrow morning? B: He has a deep, {{BLANK}} voice that fills a large hall even without a microphone, and the organizer believes it will make a strong impression on the international visitors.",
    "cn": "A：為什麼活動主辦人選林先生在明天早上的商展開幕典禮上唱國歌？ B：他有低沉、【宏亮】的嗓音，即使不用麥克風也能充滿整個大廳，主辦人相信這會讓國際訪客留下深刻印象。"
  },
  {
    "word": "timbre",
    "pos": "n.",
    "cn_def": "音色",
    "en_def": "the special quality of a voice or instrument that makes it different from others",
    "sentence": "A: Why does the recording studio prefer to hire Grace for advertisements, even though several other singers charge much lower fees? B: The {{BLANK}} of her voice is warm and unusual, so listeners can recognize her immediately, and clients say their products sound more friendly and trustworthy when she sings about them.",
    "cn": "A：為什麼錄音室比較喜歡請Grace錄廣告，即使有好幾位其他歌手收費低很多？ B：她嗓音的【音色】溫暖又獨特，所以聽眾能立刻認出她，客戶說她演唱時他們的產品聽起來更親切可信。"
  },
  {
    "word": "convey",
    "pos": "v.",
    "cn_def": "傳達；表達",
    "en_def": "to express a feeling, idea or message so others understand it",
    "sentence": "A: What advice did the vocal coach give you before your performance at the charity concert for the local hospital last weekend? B: She told me that hitting every note is not enough, and that a good singer must {{BLANK}} real feelings through the words so that the audience feels the sadness or joy of the song.",
    "cn": "A：上週末你在為當地醫院舉辦的慈善音樂會演出前，聲樂教練給了你什麼建議？ B：她告訴我只唱準每個音是不夠的，好的歌手必須透過歌詞【傳達】真實的情感，讓觀眾感受到歌曲的悲傷或喜悅。"
  },
  {
    "word": "lyric",
    "pos": "n.",
    "cn_def": "歌詞",
    "en_def": "a line or the words of a song",
    "sentence": "A: Why did the marketing team change the jingle for our new energy drink after the meeting with the legal department on Tuesday? B: One {{BLANK}} in the second verse made a health promise that we cannot prove, so the songwriter rewrote that line before we record the final version next week.",
    "cn": "A：為什麼行銷團隊在週二和法務部開會後，更改了我們新能量飲料的廣告歌？ B：第二段主歌中有一句【歌詞】做出了我們無法證明的健康承諾，所以作詞人在我們下週錄製最終版本前改寫了那一句。"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "cn_def": "精神；士氣",
    "en_def": "a strong feeling of loyalty, energy or enthusiasm shared by a group",
    "sentence": "A: How did the staff choir manage to perform so well at the festival, even though half of the members had only joined three weeks earlier? B: Everyone practiced together during lunch breaks and encouraged each other, and that team {{BLANK}} helped the new members feel confident enough to sing in front of a large crowd.",
    "cn": "A：員工合唱團怎麼能在音樂節上表現得這麼好，即使有一半的成員三週前才加入？ B：大家利用午休一起練習並互相鼓勵，那種團隊【精神】讓新成員有足夠的信心在一大群人面前唱歌。"
  },
  {
    "word": "uplifting",
    "pos": "adj.",
    "cn_def": "振奮人心的；令人鼓舞的",
    "en_def": "making people feel happier and more hopeful",
    "sentence": "A: Which song should we play at the start of the annual sales meeting, when everyone is tired after the long flight from the branch offices? B: I suggest something cheerful and {{BLANK}}, because a positive melody will wake people up and put them in a good mood before the director presents the difficult numbers.",
    "cn": "A：年度業務會議開始時我們該播哪首歌？大家從各分公司搭長途飛機過來都很累。 B：我建議選一首歡樂又【振奮人心】的歌，因為正向的旋律能讓大家打起精神，在主管報告困難的數字前讓他們心情愉快。"
  },
  {
    "word": "rejuvenated",
    "pos": "adj.",
    "cn_def": "恢復活力的；煥然一新的",
    "en_def": "feeling full of energy and young again",
    "sentence": "A: You look much more energetic today than you did on Monday, when you were complaining about all the overtime work on the budget report. B: I went to a karaoke night with my old classmates yesterday, and after three hours of singing and laughing, I felt completely {{BLANK}} and ready to work again.",
    "cn": "A：你今天看起來比週一有精神多了，那天你還在抱怨預算報告的加班工作。 B：我昨天和老同學去唱卡拉OK，唱歌大笑了三個小時後，我覺得整個人【恢復活力】，又準備好工作了。"
  },
  {
    "word": "therapeutic",
    "pos": "adj.",
    "cn_def": "有療效的；療癒的",
    "en_def": "helping to heal the body or mind; making you feel better",
    "sentence": "A: Why has the hospital started a weekly singing group for patients who are recovering from long illnesses and surgeries? B: The doctors found that singing together is {{BLANK}}, because it improves breathing, reduces stress, and helps patients feel less lonely while they stay in the hospital for several weeks.",
    "cn": "A：為什麼醫院為從長期疾病和手術中康復的病人開設了每週的歌唱團體？ B：醫生發現一起唱歌具有【療癒效果】，因為它能改善呼吸、減輕壓力，並幫助住院數週的病人不那麼孤單。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂；娛樂表演",
    "en_def": "shows, music or activities that people enjoy watching or doing",
    "sentence": "A: Have you decided what kind of program we will provide for the guests at the hotel's grand opening dinner next Saturday night? B: Yes, we booked a jazz band and two local singers for the {{BLANK}}, and they will perform after the speeches while the guests are enjoying their dessert and coffee.",
    "cn": "A：你決定好下週六晚上飯店盛大開幕晚宴要為賓客安排什麼節目了嗎？ B：有，我們訂了一個爵士樂團和兩位本地歌手負責【娛樂表演】，他們會在致詞之後、賓客享用甜點和咖啡時演出。"
  },
  {
    "word": "pop",
    "pos": "n.",
    "cn_def": "流行音樂",
    "en_def": "modern popular music, usually with a strong beat and simple tunes",
    "sentence": "A: What kind of music do the customers in our new clothing store usually like to hear while they are shopping on weekends? B: Most of them are young students and office workers, so the manager plays the latest {{BLANK}} songs from the radio charts, and she says it keeps people in the store longer.",
    "cn": "A：我們新服飾店的顧客週末購物時通常喜歡聽什麼音樂？ B：他們大多是年輕學生和上班族，所以店長播放電台排行榜上最新的【流行】歌曲，她說這能讓客人在店裡待得更久。"
  },
  {
    "word": "harmonize",
    "pos": "v.",
    "cn_def": "和聲；協調",
    "en_def": "to sing or play different notes that sound pleasant together",
    "sentence": "A: Why does the choir director want the four new singers to stay after rehearsal on Thursday evening? B: They can sing the melody well on their own, but they still need to learn how to {{BLANK}} with the other voices, so the director will give them an extra hour of practice.",
    "cn": "A：為什麼合唱團指揮要四位新歌手週四晚上排練後留下來？ B：他們自己唱主旋律唱得很好，但他們還需要學習如何與其他聲部【和聲】，所以指揮會多給他們一小時練習。"
  },
  {
    "word": "audition",
    "pos": "n.",
    "cn_def": "試鏡；試唱",
    "en_def": "a short performance to test if someone is good enough for a role",
    "sentence": "A: Why are so many people waiting outside the theater on a weekday morning, and why do they all have numbers pinned to their shirts? B: The company is holding an {{BLANK}} for the lead singer in its new musical, and each person will have two minutes to perform a song in front of the director.",
    "cn": "A：為什麼平日早上有這麼多人在劇院外等候，而且他們的衣服上都別著號碼？ B：公司正在為新音樂劇的主唱舉辦【試鏡】，每個人會有兩分鐘在導演面前唱一首歌。"
  },
  {
    "word": "vocal",
    "pos": "adj.",
    "cn_def": "聲音的；嗓音的",
    "en_def": "connected with the voice",
    "sentence": "A: Why did the famous singer cancel the second half of her concert tour in Asia, even though most of the tickets had already been sold? B: Her doctor said that her {{BLANK}} cords were badly damaged from singing every night, so she needs at least two months of complete rest before she performs again.",
    "cn": "A：為什麼那位知名歌手取消了亞洲巡迴演唱會的後半段，即使大部分的票都已經賣出了？ B：她的醫生說她每晚唱歌導致【聲】帶嚴重受損，所以她再次演出前需要至少兩個月的完全休息。"
  },
  {
    "word": "choir",
    "pos": "n.",
    "cn_def": "合唱團",
    "en_def": "a group of people who sing together",
    "sentence": "A: How did you meet so many people from other departments so quickly after you joined the company in March? B: I joined the company {{BLANK}}, which practices every Wednesday after work, and singing with colleagues from accounting, marketing, and production helped me make friends all over the building.",
    "cn": "A：你三月進公司後，怎麼這麼快就認識了其他部門這麼多人？ B：我加入了公司的【合唱團】，每週三下班後練習，和會計、行銷、生產部門的同事一起唱歌讓我在整棟大樓都交到了朋友。"
  },
  {
    "word": "soloist",
    "pos": "n.",
    "cn_def": "獨唱者；獨奏者",
    "en_def": "a person who sings or plays music alone",
    "sentence": "A: Who will sing the first part of the song alone at the holiday concert before the rest of the group joins in? B: Our manager chose Amy as the {{BLANK}}, because she has the strongest voice in the team and she does not get nervous when she stands in front of a big audience.",
    "cn": "A：在節日音樂會上，其他人加入之前，誰會獨自唱這首歌的第一段？ B：我們經理選了Amy當【獨唱者】，因為她是團隊中聲音最有力的人，站在一大群觀眾面前也不會緊張。"
  },
  {
    "word": "fatigue",
    "pos": "n.",
    "cn_def": "疲勞；疲倦",
    "en_def": "great tiredness of the body or mind",
    "sentence": "A: Why does the vocal coach tell the singers to drink warm water and take short breaks between songs during long rehearsals? B: Singing for many hours without rest causes {{BLANK}} in the throat muscles, and if the singers ignore it, their voices may become weak before the important performance.",
    "cn": "A：為什麼聲樂教練要歌手們在長時間排練中喝溫水，並在歌曲之間短暫休息？ B：長時間唱歌不休息會造成喉嚨肌肉【疲勞】，如果歌手忽視它，他們的聲音可能在重要演出前變得虛弱。"
  },
  {
    "word": "enunciation",
    "pos": "n.",
    "cn_def": "咬字；發音清晰度",
    "en_def": "the way a person says words clearly",
    "sentence": "A: Why did the director ask the singers to read the words of the song slowly before they practiced the melody again? B: The audience at the last show complained that they could not understand the story, so the director wants clearer {{BLANK}} of every word, especially in the fast parts.",
    "cn": "A：為什麼導演要歌手們在再次練習旋律前，先慢慢唸一遍歌詞？ B：上一場的觀眾抱怨聽不懂故事，所以導演希望每個字的【咬字】都更清楚，特別是快的段落。"
  },
  {
    "word": "hoarse",
    "pos": "adj.",
    "cn_def": "沙啞的",
    "en_def": "sounding rough and low, often because of a sore throat",
    "sentence": "A: Why is Kevin whispering on the phone instead of speaking normally during the conference call with the overseas suppliers? B: He sang and shouted at the company karaoke party until midnight on Friday, and now his voice is so {{BLANK}} that he can hardly say a full sentence without coughing.",
    "cn": "A：為什麼Kevin在和海外供應商的電話會議中低聲說話，而不是正常講話？ B：他週五在公司卡拉OK派對上唱歌喊叫到午夜，現在他的聲音【沙啞】到幾乎無法不咳嗽地說完一句話。"
  },
  {
    "word": "shy",
    "pos": "adj.",
    "cn_def": "害羞的",
    "en_def": "nervous and uncomfortable with other people",
    "sentence": "A: Why didn't the new intern sing with everyone else at the welcome party, even though she told us she loves music? B: She is a little {{BLANK}} around people she does not know well, so she preferred to listen quietly this time, but she promised to join the next karaoke night.",
    "cn": "A：為什麼新來的實習生在迎新派對上沒有和大家一起唱歌，即使她跟我們說她很愛音樂？ B：她在不熟的人面前有點【害羞】，所以這次她寧可安靜地聽，但她答應下次卡拉OK之夜會參加。"
  },
  {
    "word": "emulate",
    "pos": "v.",
    "cn_def": "仿效；模仿",
    "en_def": "to try to be like someone you admire by copying them",
    "sentence": "A: How did the young singer in the hotel lounge become so popular with the guests in only a few months? B: She studied recordings of famous jazz singers every night and tried to {{BLANK}} their style, and now the guests say she sounds just like the stars from the old records.",
    "cn": "A：飯店酒廊那位年輕歌手怎麼能在短短幾個月內就這麼受客人歡迎？ B：她每晚研究著名爵士歌手的錄音並試著【仿效】他們的風格，現在客人都說她聽起來就像老唱片裡的明星。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕；紓解",
    "en_def": "to make pain, stress or a problem less serious",
    "sentence": "A: Why does the manager encourage employees to use the music room on the third floor during their lunch break? B: She believes that singing a few songs can {{BLANK}} the stress of a busy morning, and the staff seem calmer and more productive when they return to their desks in the afternoon.",
    "cn": "A：為什麼經理鼓勵員工在午休時間使用三樓的音樂室？ B：她相信唱幾首歌能【紓解】忙碌早晨的壓力，而員工下午回到座位時似乎也更冷靜、更有效率。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型；風格",
    "en_def": "a type or style of music, art or writing",
    "sentence": "A: Which type of music should we choose for the radio advertisement that will promote our new travel package to retired customers? B: Older listeners usually enjoy classic love songs, so I think that {{BLANK}} will attract their attention more than modern dance music or rap.",
    "cn": "A：我們該為向退休顧客推廣新旅遊套裝的電台廣告選哪一種音樂？ B：年長的聽眾通常喜歡經典情歌，所以我認為那種音樂【類型】會比現代舞曲或饒舌更能吸引他們的注意。"
  },
  {
    "word": "solitary",
    "pos": "adj.",
    "cn_def": "獨自的；獨處的",
    "en_def": "done alone or living alone, without other people",
    "sentence": "A: Why does the famous songwriter rent a small cabin in the mountains every winter instead of staying in her apartment in the city? B: She says she needs a quiet, {{BLANK}} life for a few weeks, away from phone calls and meetings, so that she can focus completely on writing new songs.",
    "cn": "A：為什麼那位知名詞曲作家每年冬天都在山上租一間小木屋，而不是待在城裡的公寓？ B：她說她需要過幾週安靜、【獨處】的生活，遠離電話和會議，才能完全專心寫新歌。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a special way of doing something that needs skill",
    "sentence": "A: Why did the singing school hire a voice expert from Japan to teach a special workshop for its teachers next month? B: The teachers want to learn a new {{BLANK}} for singing high notes safely, because many students hurt their throats when they try to reach notes that are too high for them.",
    "cn": "A：為什麼歌唱學校聘請了一位日本的聲音專家，下個月為老師們開設特別工作坊？ B：老師們想學一種安全唱高音的新【技巧】，因為很多學生試著唱太高的音時傷了喉嚨。"
  },
  {
    "word": "breathing",
    "pos": "n.",
    "cn_def": "呼吸",
    "en_def": "the action of taking air into and out of the lungs",
    "sentence": "A: What did you learn in your first lesson at the singing studio near the train station on Saturday morning? B: The teacher did not let us sing at all, and instead we spent the whole hour practicing deep {{BLANK}} from the stomach, because she said it controls everything about the voice.",
    "cn": "A：你週六早上在火車站附近的歌唱教室上第一堂課學到了什麼？ B：老師完全沒讓我們唱歌，而是整整一個小時練習從腹部深【呼吸】，因為她說這控制著聲音的一切。"
  },
  {
    "word": "posture",
    "pos": "n.",
    "cn_def": "姿勢",
    "en_def": "the way you hold your body when standing or sitting",
    "sentence": "A: Why did the music teacher ask the students to stand up straight and lift their chins before the recording session began? B: Good {{BLANK}} gives the lungs more space to fill with air, so the students can sing longer phrases and sound stronger on the recording.",
    "cn": "A：為什麼音樂老師在錄音開始前要學生站直並抬起下巴？ B：良好的【姿勢】讓肺部有更多空間充滿空氣，所以學生能唱更長的樂句，錄音聽起來也更有力。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "進步；改善",
    "en_def": "the act of becoming better, or a change that makes something better",
    "sentence": "A: How did the company choir do at the city competition this year compared with its poor result last spring? B: The judges noticed a big {{BLANK}} in our teamwork and our high notes, and we finished in third place, which made the general manager very proud of all of us.",
    "cn": "A：公司合唱團今年在市級比賽中的表現，和去年春天的糟糕成績相比如何？ B：評審注意到我們的團隊合作和高音有很大的【進步】，我們得了第三名，總經理為我們所有人感到非常驕傲。"
  }
];

const MCQS = [
  {
    "q": "Our receptionist is very _____ of classical music. She often plays quiet piano songs in the lobby before the office opens.",
    "options": [
      "fond",
      "hoarse",
      "solitary",
      "resonant"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new radio jingle has a simple _____ that customers can easily remember. Sales of the snack doubled after the advertisement started.",
    "options": [
      "posture",
      "fatigue",
      "tune",
      "audition"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The drummer set a steady _____ for the parade. All the marching staff members stepped together without missing a beat.",
    "options": [
      "lyric",
      "rhythm",
      "genre",
      "enunciation"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Before the concert, the band tuned every guitar to the same _____. Otherwise, the instruments would have sounded unpleasant together.",
    "options": [
      "choir",
      "spirit",
      "posture",
      "pitch"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new conference hall has excellent sound. Even a quiet speaker sounds rich and _____ there without a microphone.",
    "options": [
      "shy",
      "solitary",
      "resonant",
      "rejuvenated"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The advertisement uses a slow song to _____ a feeling of trust. The agency believes music can send a message faster than words.",
    "options": [
      "convey",
      "relieve",
      "emulate",
      "harmonize"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The client asked the songwriter to change one _____ in the chorus. The original line mentioned a competitor's product by name.",
    "options": [
      "rhythm",
      "soloist",
      "fatigue",
      "lyric"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The sales team sang together at the end of every training camp. The manager said it built a strong team _____.",
    "options": [
      "pitch",
      "spirit",
      "genre",
      "timbre"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The hospital plays _____ songs in the waiting room every morning. Patients say the cheerful music makes them feel more hopeful.",
    "options": [
      "uplifting",
      "hoarse",
      "tone-deaf",
      "shy"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After a weekend of singing and hiking at the lake, Linda returned to work feeling _____. She finished the delayed report on Monday.",
    "options": [
      "tone-deaf",
      "resonant",
      "rejuvenated",
      "solitary"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The clinic offers music classes for elderly patients. Doctors say group singing has a _____ effect on both memory and mood.",
    "options": [
      "shy",
      "therapeutic",
      "hoarse",
      "solitary"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The hotel provides live _____ in the lobby bar every Friday night. A local band performs popular songs from eight until eleven.",
    "options": [
      "enunciation",
      "fatigue",
      "improvement",
      "entertainment"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The coffee shop plays the latest _____ songs from the radio charts. Younger customers say the music makes the place feel lively.",
    "options": [
      "choir",
      "posture",
      "pop",
      "breathing"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The two new singers practiced for weeks to _____ with the rest of the group. Their voices now blend perfectly during the chorus.",
    "options": [
      "harmonize",
      "relieve",
      "convey",
      "emulate"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "More than two hundred people attended the _____ for the theme park's new musical. Only five singers will be chosen for the show.",
    "options": [
      "posture",
      "fatigue",
      "lyric",
      "audition"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The singer canceled her show because of a _____ injury. Her doctor told her not to sing for at least a month.",
    "options": [
      "uplifting",
      "vocal",
      "therapeutic",
      "shy"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The company _____ will sing holiday songs in the lobby next Friday. All employees are welcome to join the rehearsals after work.",
    "options": [
      "choir",
      "genre",
      "tune",
      "rhythm"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The _____ sang the first verse alone before the other members joined her. Her clear voice silenced the whole room.",
    "options": [
      "audition",
      "genre",
      "soloist",
      "timbre"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Singing for six hours a day can cause serious vocal _____. Professional singers usually rest their voices between long rehearsals.",
    "options": [
      "improvement",
      "fatigue",
      "entertainment",
      "lyric"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The judges praised the contestant's clear _____ of every word. Even in the fastest part of the song, the audience understood the story.",
    "options": [
      "fatigue",
      "posture",
      "spirit",
      "enunciation"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "After cheering at the company sports day all afternoon, Peter's voice was _____. He could barely speak during the next morning's meeting.",
    "options": [
      "uplifting",
      "resonant",
      "hoarse",
      "therapeutic"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The new intern was too _____ to sing at the welcome party. She preferred to sit quietly in the corner and listen.",
    "options": [
      "shy",
      "resonant",
      "vocal",
      "uplifting"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Many young singers try to _____ the style of famous stars. However, the best performers eventually develop a voice of their own.",
    "options": [
      "relieve",
      "harmonize",
      "convey",
      "emulate"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Many office workers sing karaoke on Friday nights to _____ stress. It helps them relax after a long and busy week.",
    "options": [
      "emulate",
      "relieve",
      "harmonize",
      "convey"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Jazz is the restaurant owner's favorite music _____. He hires a different jazz singer to perform there every weekend.",
    "options": [
      "genre",
      "pitch",
      "lyric",
      "posture"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The songwriter spends a _____ month in the mountains every year. Without visitors or phone calls, she can focus on new music.",
    "options": [
      "hoarse",
      "vocal",
      "solitary",
      "tone-deaf"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The workshop teaches a safe _____ for reaching high notes. Many singers damage their voices because they push too hard.",
    "options": [
      "choir",
      "technique",
      "lyric",
      "entertainment"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Deep _____ from the stomach helps singers hold long notes. The coach asks every student to practice it for ten minutes daily.",
    "options": [
      "posture",
      "timbre",
      "audition",
      "breathing"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Standing up straight is important for singers on stage. Good _____ lets the lungs fill with more air.",
    "options": [
      "fatigue",
      "genre",
      "posture",
      "tune"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The choir's latest recording shows a clear _____ over last year's album. Critics praised the stronger harmonies and cleaner high notes.",
    "options": [
      "improvement",
      "fatigue",
      "entertainment",
      "audition"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "fond": {
    "pos": "adj.",
    "en_def": "liking someone or something very much",
    "cn_def": "喜愛的"
  },
  "tune": {
    "pos": "n.",
    "en_def": "a short piece of music; a melody",
    "cn_def": "曲調；旋律"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular, repeated pattern of beats in music",
    "cn_def": "節奏"
  },
  "tone-deaf": {
    "pos": "adj.",
    "en_def": "not able to hear the difference between musical notes or sing in tune",
    "cn_def": "五音不全的；音痴的"
  },
  "pitch": {
    "pos": "n.",
    "en_def": "how high or low a sound or voice is",
    "cn_def": "音高"
  },
  "resonant": {
    "pos": "adj.",
    "en_def": "deep, clear and continuing to sound for a long time",
    "cn_def": "宏亮的；響亮的"
  },
  "timbre": {
    "pos": "n.",
    "en_def": "the special quality of a voice or instrument that makes it different from others",
    "cn_def": "音色"
  },
  "convey": {
    "pos": "v.",
    "en_def": "to express a feeling, idea or message so others understand it",
    "cn_def": "傳達；表達"
  },
  "lyric": {
    "pos": "n.",
    "en_def": "a line or the words of a song",
    "cn_def": "歌詞"
  },
  "spirit": {
    "pos": "n.",
    "en_def": "a strong feeling of loyalty, energy or enthusiasm shared by a group",
    "cn_def": "精神；士氣"
  },
  "uplifting": {
    "pos": "adj.",
    "en_def": "making people feel happier and more hopeful",
    "cn_def": "振奮人心的；令人鼓舞的"
  },
  "rejuvenated": {
    "pos": "adj.",
    "en_def": "feeling full of energy and young again",
    "cn_def": "恢復活力的；煥然一新的"
  },
  "therapeutic": {
    "pos": "adj.",
    "en_def": "helping to heal the body or mind; making you feel better",
    "cn_def": "有療效的；療癒的"
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "shows, music or activities that people enjoy watching or doing",
    "cn_def": "娛樂；娛樂表演"
  },
  "pop": {
    "pos": "n.",
    "en_def": "modern popular music, usually with a strong beat and simple tunes",
    "cn_def": "流行音樂"
  },
  "harmonize": {
    "pos": "v.",
    "en_def": "to sing or play different notes that sound pleasant together",
    "cn_def": "和聲；協調"
  },
  "audition": {
    "pos": "n.",
    "en_def": "a short performance to test if someone is good enough for a role",
    "cn_def": "試鏡；試唱"
  },
  "vocal": {
    "pos": "adj.",
    "en_def": "connected with the voice",
    "cn_def": "聲音的；嗓音的"
  },
  "choir": {
    "pos": "n.",
    "en_def": "a group of people who sing together",
    "cn_def": "合唱團"
  },
  "soloist": {
    "pos": "n.",
    "en_def": "a person who sings or plays music alone",
    "cn_def": "獨唱者；獨奏者"
  },
  "fatigue": {
    "pos": "n.",
    "en_def": "great tiredness of the body or mind",
    "cn_def": "疲勞；疲倦"
  },
  "enunciation": {
    "pos": "n.",
    "en_def": "the way a person says words clearly",
    "cn_def": "咬字；發音清晰度"
  },
  "hoarse": {
    "pos": "adj.",
    "en_def": "sounding rough and low, often because of a sore throat",
    "cn_def": "沙啞的"
  },
  "shy": {
    "pos": "adj.",
    "en_def": "nervous and uncomfortable with other people",
    "cn_def": "害羞的"
  },
  "emulate": {
    "pos": "v.",
    "en_def": "to try to be like someone you admire by copying them",
    "cn_def": "仿效；模仿"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain, stress or a problem less serious",
    "cn_def": "減輕；紓解"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type or style of music, art or writing",
    "cn_def": "類型；風格"
  },
  "solitary": {
    "pos": "adj.",
    "en_def": "done alone or living alone, without other people",
    "cn_def": "獨自的；獨處的"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something that needs skill",
    "cn_def": "技巧；技術"
  },
  "breathing": {
    "pos": "n.",
    "en_def": "the action of taking air into and out of the lungs",
    "cn_def": "呼吸"
  },
  "posture": {
    "pos": "n.",
    "en_def": "the way you hold your body when standing or sitting",
    "cn_def": "姿勢"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "the act of becoming better, or a change that makes something better",
    "cn_def": "進步；改善"
  }
};

const EXTRA_GLOSSES = {};
