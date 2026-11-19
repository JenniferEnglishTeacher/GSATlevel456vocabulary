// Topic 430 Quiz Data: Voice 聲音
// Source word list: https://www.examword.com/group-topic/voice — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T430 - Voice 聲音",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "absolutely necessary",
    "sentence": "A: Our new customer service team starts taking calls on Monday, so what should they focus on during this week's training sessions? B: A calm and friendly speaking style is {{BLANK}} for phone work, so the trainer will have them practice greetings and record practice calls for feedback every afternoon.",
    "cn": "A：我們新的客服團隊星期一開始接電話，這週的訓練課程他們應該著重在什麼？ B：冷靜友善的說話方式對電話工作是【不可或缺的】，所以訓練師會讓他們練習問候語，並且每天下午錄下練習電話以取得回饋。"
  },
  {
    "word": "throaty",
    "pos": "adj.",
    "cn_def": "低沉沙啞的；喉音重的",
    "en_def": "low and rough, as if from the back of the throat",
    "sentence": "A: Why did the radio station choose Daniel to read the late-night jazz program instead of one of the younger announcers who applied last month? B: Listeners love his warm, {{BLANK}} way of speaking, and the producer believes it creates a relaxing mood for people driving home after long shifts.",
    "cn": "A：為什麼電台選了丹尼爾來主持深夜爵士節目，而不是上個月應徵的年輕播報員之一？ B：聽眾很喜歡他溫暖又【低沉沙啞】的說話方式，製作人認為這能為長時間輪班後開車回家的人營造放鬆的氛圍。"
  },
  {
    "word": "modulation",
    "pos": "n.",
    "cn_def": "（聲音的）抑揚頓挫；調節",
    "en_def": "change in the loudness, tone, or pitch of the voice",
    "sentence": "A: The audience seemed bored during my product presentation yesterday, even though the slides were clear and the information was useful, so what went wrong? B: You spoke at the same level the whole time, so the coach suggests practicing voice {{BLANK}} to make important points louder and slower.",
    "cn": "A：昨天我做產品簡報時觀眾似乎很無聊，雖然投影片很清楚、資訊也很有用，到底哪裡出了問題？ B：你從頭到尾都用同樣的音量說話，所以教練建議你練習聲音的【抑揚頓挫】，讓重點講得更大聲、更緩慢。"
  },
  {
    "word": "well-modulated",
    "pos": "adj.",
    "cn_def": "抑揚得宜的；音調悅耳的",
    "en_def": "pleasant to hear because it is well controlled",
    "sentence": "A: What kind of person is the hotel looking for to record the welcome message on the guest information line this spring? B: They want someone with a clear, {{BLANK}} voice who sounds professional but friendly, because thousands of international guests will hear the recording before they speak to staff.",
    "cn": "A：今年春天飯店在找什麼樣的人來錄製房客資訊專線的歡迎語？ B：他們想找一位聲音清晰、【抑揚得宜】、聽起來專業又親切的人，因為數千名國際房客在與員工通話前都會聽到這段錄音。"
  },
  {
    "word": "high-pitched",
    "pos": "adj.",
    "cn_def": "高音調的；尖聲的",
    "en_def": "very high in sound",
    "sentence": "A: Why did the technicians stop the printing machines on the second floor in the middle of the morning shift today? B: One of the operators heard a strange, {{BLANK}} noise coming from the motor, so the supervisor turned everything off until the repair company could check it safely.",
    "cn": "A：今天早班中途，技術人員為什麼讓二樓的印刷機停機？ B：一位操作員聽到馬達傳出奇怪的【高頻尖銳】聲音，所以主管把所有機器關掉，直到維修公司能安全地檢查為止。"
  },
  {
    "word": "low voice",
    "pos": "n.phr.",
    "cn_def": "低聲；低沉的嗓音",
    "en_def": "a quiet or deep way of speaking",
    "sentence": "A: How should we talk to patients in the waiting area while the doctor is meeting with a family in the next room? B: Please speak in a {{BLANK}} and keep phone calls short, because the walls are thin and we want everyone to feel comfortable and respected during their visit.",
    "cn": "A：醫生在隔壁房間和一個家庭會談時，我們該怎麼和候診區的病人說話？ B：請【低聲】說話並且盡量縮短電話時間，因為牆壁很薄，我們希望每個人在看診期間都感到舒適並受到尊重。"
  },
  {
    "word": "husky",
    "pos": "adj.",
    "cn_def": "沙啞的；略帶磁性的",
    "en_def": "low and slightly rough, often in an attractive way",
    "sentence": "A: You sound different on the phone today, Linda, so are you still planning to lead the client workshop in Taichung tomorrow afternoon? B: My voice is a little {{BLANK}} after cheering at my son's basketball game last night, but I'll drink warm tea and use a microphone tomorrow.",
    "cn": "A：琳達，妳今天在電話裡聽起來不太一樣，明天下午還打算在台中主持客戶研習會嗎？ B：昨晚在我兒子的籃球比賽替他加油之後，我的聲音有點【沙啞】，但我會喝溫茶，明天也會用麥克風。"
  },
  {
    "word": "shrill",
    "pos": "adj.",
    "cn_def": "尖銳刺耳的",
    "en_def": "very high, loud, and unpleasant",
    "sentence": "A: Why did everyone in the open office suddenly look up from their computers just before the lunch break started? B: The new fire alarm made a {{BLANK}} sound during a surprise test, and many people didn't know whether it was a real emergency or just the monthly safety check.",
    "cn": "A：午休開始前，開放式辦公室裡的每個人為什麼突然從電腦前抬起頭？ B：新的火災警報器在一次突擊測試中發出【尖銳刺耳】的聲音，很多人不知道這是真的緊急狀況，還是只是每月的安全檢查。"
  },
  {
    "word": "croaky",
    "pos": "adj.",
    "cn_def": "嘶啞的（像蛙叫般）",
    "en_def": "deep and rough, often because of a cold",
    "sentence": "A: Is Kevin well enough to give the sales report at the regional meeting, or should I ask someone else to prepare the slides today? B: He came to work with a bad cold and sounds very {{BLANK}}, so maybe Mia should present while Kevin answers questions by email afterward.",
    "cn": "A：凱文的狀況可以在區域會議上做業績報告嗎？還是我今天應該請別人準備投影片？ B：他帶著重感冒來上班，聲音聽起來非常【嘶啞】，所以也許應該讓米亞上台報告，凱文之後再用電子郵件回答問題。"
  },
  {
    "word": "gravelly",
    "pos": "adj.",
    "cn_def": "粗啞低沉的",
    "en_def": "rough and low, like the sound of small stones",
    "sentence": "A: Who did the advertising agency hire to narrate the new commercial for the outdoor equipment company that sells camping gear? B: They chose a retired mountain guide with a deep, {{BLANK}} voice, because the client wanted the ad to sound strong, honest, and full of real experience.",
    "cn": "A：廣告公司請了誰為那家販售露營裝備的戶外用品公司的新廣告配旁白？ B：他們選了一位聲音低沉【粗啞】的退休登山嚮導，因為客戶希望這支廣告聽起來有力、真誠，而且充滿真實的經驗。"
  },
  {
    "word": "wobbly",
    "pos": "adj.",
    "cn_def": "顫抖的；不穩的",
    "en_def": "shaking and not steady",
    "sentence": "A: Was the new intern nervous when she gave her first presentation to the department heads in the big conference room this morning? B: Her voice was a bit {{BLANK}} at the beginning, but after a few slides she relaxed, and the managers were impressed by her clear research and helpful charts.",
    "cn": "A：新來的實習生今天早上在大會議室第一次向各部門主管簡報時，她緊張嗎？ B：一開始她的聲音有點【顫抖】，但講了幾張投影片後她就放鬆了，主管們對她清楚的研究和實用的圖表印象深刻。"
  },
  {
    "word": "utter",
    "pos": "v.",
    "cn_def": "說出；發出（聲音）",
    "en_def": "to say something or make a sound",
    "sentence": "A: How did the audience react when the company president announced that the factory in the south would close next year? B: The room went completely quiet, and nobody seemed able to {{BLANK}} a single word until the human resources manager explained the support plan for workers.",
    "cn": "A：公司總裁宣布南部工廠明年要關閉時，聽眾有什麼反應？ B：整個房間完全安靜下來，似乎沒有人能【說出】一個字，直到人資經理說明了員工的協助方案。"
  },
  {
    "word": "enunciate",
    "pos": "v.",
    "cn_def": "清楚地發音",
    "en_def": "to say words clearly",
    "sentence": "A: What advice did the trainer give the new airport staff who make announcements about gate changes and flight delays? B: She told them to slow down and {{BLANK}} every flight number carefully, because travelers from many countries need to understand the information quickly in a noisy terminal.",
    "cn": "A：訓練師給負責廣播登機門變更與航班延誤的新進機場員工什麼建議？ B：她要他們放慢速度，仔細【清楚地念出】每個航班號碼，因為來自許多國家的旅客必須在吵雜的航廈裡迅速聽懂資訊。"
  },
  {
    "word": "mumble",
    "pos": "v.",
    "cn_def": "含糊地說；咕噥",
    "en_def": "to speak quietly and unclearly",
    "sentence": "A: Why did the client ask us to repeat the price several times during the video call with the Singapore office yesterday? B: Our sales assistant tended to {{BLANK}} when he felt nervous, and the poor internet connection made his words even harder to hear on the other side.",
    "cn": "A：昨天和新加坡辦公室視訊通話時，客戶為什麼要我們把價格重複好幾次？ B：我們的業務助理一緊張就會【含糊不清地說話】，再加上網路連線不好，對方就更難聽清楚他說的話了。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "明顯的；獨特的",
    "en_def": "clearly different or easy to notice",
    "sentence": "A: How were you able to tell that the caller wasn't really our bank manager, even though he knew your name and account type? B: Our manager has a {{BLANK}} Tainan accent, and this man sounded completely different, so I hung up and called the branch directly to check.",
    "cn": "A：雖然那個來電者知道你的名字和帳戶類型，你是怎麼分辨出他不是我們的銀行經理的？ B：我們經理有【明顯】的台南口音，這個人聽起來完全不一樣，所以我掛斷電話，直接打到分行確認。"
  },
  {
    "word": "puberty",
    "pos": "n.",
    "cn_def": "青春期",
    "en_def": "the time when a child's body changes into an adult's",
    "sentence": "A: Why is the children's choir looking for new members again, when it only held auditions at the community center last spring? B: Several older boys have reached {{BLANK}}, and their voices are changing, so the director needs younger singers for the high parts in the holiday concert.",
    "cn": "A：兒童合唱團去年春天才在社區中心辦過甄選，為什麼又在招募新成員？ B：好幾個年紀較大的男孩已經進入【青春期】，聲音正在改變，所以指揮需要年紀較小的歌手來唱節日音樂會裡的高音部分。"
  },
  {
    "word": "vocal cords",
    "pos": "n.phr.",
    "cn_def": "聲帶",
    "en_def": "the parts in the throat that make the voice",
    "sentence": "A: Why did the doctor tell our tour guide to stop working for a week after the busy holiday season ended last month? B: She had talked to large groups all day without a microphone, and her {{BLANK}} were badly strained, so she needed complete rest and plenty of water.",
    "cn": "A：上個月忙碌的假期旺季結束後，醫生為什麼要我們的導遊停工一週？ B：她一整天都沒用麥克風對著大型團體說話，她的【聲帶】嚴重拉傷，所以需要完全休息並多喝水。"
  },
  {
    "word": "silvery",
    "pos": "adj.",
    "cn_def": "清脆悅耳的；銀鈴般的",
    "en_def": "clear, soft, and pleasant, like a small bell",
    "sentence": "A: Who sang at the opening ceremony of the new shopping mall, and why were so many shoppers taking videos with their phones? B: A local student with a sweet, {{BLANK}} voice performed a famous folk song, and people stopped walking to listen before the stores opened their doors.",
    "cn": "A：新購物中心的開幕典禮上是誰唱歌？為什麼那麼多購物者都在用手機錄影？ B：一位聲音甜美、如【銀鈴般清脆】的本地學生演唱了一首有名的民謠，在商店開門前，人們都停下腳步聆聽。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "認出；辨識",
    "en_def": "to know someone or something because you have seen or heard it before",
    "sentence": "A: Did the receptionist know who was calling when Mr. Chen phoned the front desk from the airport late last night? B: Yes, she could {{BLANK}} his voice right away, because he has stayed at our hotel every month for years and always chats with the staff.",
    "cn": "A：陳先生昨晚很晚從機場打電話到櫃台時，接待員知道是誰打來的嗎？ B：知道，她馬上就【認出】他的聲音，因為他多年來每個月都住我們飯店，而且總是會和員工聊天。"
  },
  {
    "word": "awful",
    "pos": "adj.",
    "cn_def": "糟糕的；極差的",
    "en_def": "very bad or unpleasant",
    "sentence": "A: How was the sound at the outdoor music festival that our company sponsored in the park last weekend? B: Unfortunately, the speakers were {{BLANK}} near the food area, so the singers sounded broken, and several guests complained to our marketing team before leaving early.",
    "cn": "A：上週末我們公司在公園贊助的戶外音樂節音效如何？ B：很可惜，美食區附近的喇叭效果【糟透了】，歌手的聲音聽起來斷斷續續，好幾位來賓在提早離開前向我們行銷團隊抱怨。"
  },
  {
    "word": "sound waves",
    "pos": "n.phr.",
    "cn_def": "聲波",
    "en_def": "waves of energy that carry sound through air or water",
    "sentence": "A: Why does the conference hall have those soft panels on the walls and ceiling, when the room already looks so modern? B: The panels absorb {{BLANK}} so the speaker's voice doesn't echo, which helps people in the back rows hear every word during large business events.",
    "cn": "A：會議廳看起來已經很現代化了，為什麼牆壁和天花板還要裝那些軟墊板？ B：這些板子會吸收【聲波】，讓講者的聲音不會產生回音，這有助於大型商務活動時後排的人聽清楚每一個字。"
  },
  {
    "word": "skull",
    "pos": "n.",
    "cn_def": "頭骨；顱骨",
    "en_def": "the bone that forms the head",
    "sentence": "A: Why does my voice sound so strange when I listen to the recording of yesterday's online meeting with the new suppliers? B: When you speak, you hear your voice through the bones of your {{BLANK}}, so a recording often sounds higher and thinner than you expect.",
    "cn": "A：我聽昨天和新供應商線上會議的錄音時，為什麼我的聲音聽起來那麼奇怪？ B：你說話時是透過【頭骨】聽到自己的聲音，所以錄音聽起來常常比你預期的更高、更單薄。"
  },
  {
    "word": "set off",
    "pos": "v.phr.",
    "cn_def": "觸發；引發（警報）",
    "en_def": "to make an alarm or loud noise start",
    "sentence": "A: Why did security guards come running into the storage room while we were moving the old boxes this afternoon? B: Someone pushed the emergency door by mistake, and that was enough to {{BLANK}} the loud alarm, so the guards checked the room carefully before letting us continue.",
    "cn": "A：今天下午我們在搬舊箱子時，保全為什麼跑進儲藏室？ B：有人不小心推開了緊急出口的門，這就足以【觸發】刺耳的警報，所以保全仔細檢查了房間後才讓我們繼續工作。"
  },
  {
    "word": "elated",
    "pos": "adj.",
    "cn_def": "興高采烈的；欣喜若狂的",
    "en_def": "very happy and excited",
    "sentence": "A: How did the project team react when the client called to say they had won the large contract with the airline? B: Everyone was {{BLANK}}, and you could hear it in their voices as they shouted and cheered, so the manager ordered pizza for the whole office.",
    "cn": "A：客戶打電話來說他們拿下了航空公司的大合約時，專案團隊有什麼反應？ B：每個人都【欣喜若狂】，從他們歡呼叫喊的聲音中就聽得出來，於是經理為整個辦公室訂了披薩。"
  },
  {
    "word": "monotonous",
    "pos": "adj.",
    "cn_def": "單調乏味的",
    "en_def": "boring because it never changes",
    "sentence": "A: Why are so many employees skipping the online safety training videos that the company asked everyone to finish before December? B: The narrator speaks in a slow, {{BLANK}} tone for forty minutes, so people get sleepy and stop watching long before the important information appears.",
    "cn": "A：公司要求大家在十二月前看完的線上安全訓練影片，為什麼有那麼多員工都跳過不看？ B：旁白用緩慢又【單調】的語氣講了四十分鐘，所以大家很早就開始想睡，在重要資訊出現之前就不看了。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "吸引人的",
    "en_def": "attractive or interesting",
    "sentence": "A: Why did the marketing department decide to hire a professional voice actor for our new phone app instead of using a computer voice? B: Customers in our survey said a human voice was more {{BLANK}} and friendly, and they were more likely to keep using the app every day.",
    "cn": "A：行銷部為什麼決定請專業配音員為我們的新手機應用程式配音，而不用電腦語音？ B：我們調查中的顧客表示，人聲比較【吸引人】也比較親切，他們也更可能每天持續使用這個應用程式。"
  },
  {
    "word": "breathy",
    "pos": "adj.",
    "cn_def": "帶氣音的",
    "en_def": "with a lot of air heard in the voice",
    "sentence": "A: Why did the sound engineer ask the singer to step back from the microphone during the recording session for the coffee shop commercial? B: Her voice sounded too {{BLANK}} when she stood so close, and the extra air noise made it hard for listeners to understand the brand name.",
    "cn": "A：在錄製咖啡店廣告時，錄音師為什麼要歌手離麥克風遠一點？ B：她站得太近時聲音聽起來【氣音】太重，多餘的氣流聲讓聽眾很難聽清楚品牌名稱。"
  },
  {
    "word": "brittle",
    "pos": "adj.",
    "cn_def": "（聲音）尖細緊繃的",
    "en_def": "sounding sharp and tense, as if it might break",
    "sentence": "A: How did the manager sound when she called to tell the staff about the delayed shipment from the overseas factory this morning? B: Her voice sounded thin and {{BLANK}}, because the customers had already paid, and she was worried the delay would damage our relationship with them.",
    "cn": "A：經理今天早上打電話告訴員工海外工廠出貨延誤時，她的聲音聽起來如何？ B：她的聲音聽起來單薄又【緊繃】，因為顧客已經付款了，她擔心這次延誤會損害我們和他們的關係。"
  },
  {
    "word": "nasal",
    "pos": "adj.",
    "cn_def": "鼻音重的",
    "en_def": "sounding as if it comes through the nose",
    "sentence": "A: Why did the call center replace the old recorded message that customers hear before they can speak to an agent? B: Many callers said the speaker's voice was too {{BLANK}} and hard to listen to, so we recorded a new version with a clearer and warmer speaker.",
    "cn": "A：客服中心為什麼更換了顧客在跟客服人員通話前會聽到的舊錄音訊息？ B：許多來電者說那位說話者的聲音【鼻音】太重又不好聽，所以我們請了一位聲音更清晰溫暖的人錄了新版本。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "粗糙的；沙啞的",
    "en_def": "not smooth; slightly hoarse",
    "sentence": "A: Are you all right, Peter, because you sound different from usual during this morning's conference call with the Tokyo team? B: My voice is a bit {{BLANK}} because I gave three long tours of the factory yesterday, but I'll be fine after some hot tea and rest.",
    "cn": "A：彼得，你還好嗎？今天早上和東京團隊開電話會議時，你的聲音聽起來和平常不一樣。 B：我的聲音有點【沙啞】，因為昨天我帶了三趟很長的工廠導覽，不過喝點熱茶休息一下就會好了。"
  },
  {
    "word": "smoky",
    "pos": "adj.",
    "cn_def": "（嗓音）低沉迷人的",
    "en_def": "(of a voice) deep and slightly rough in an attractive way",
    "sentence": "A: What kind of singer did the hotel hire for the jazz evenings in the rooftop lounge this winter season? B: They found a talented local singer with a warm, {{BLANK}} voice, and guests say her slow songs make the lounge feel relaxing after a long day of meetings.",
    "cn": "A：飯店這個冬季為頂樓酒廊的爵士之夜請了什麼樣的歌手？ B：他們找到一位才華洋溢的本地歌手，她有溫暖又【低沉迷人】的嗓音，房客都說她的慢歌讓人在一整天的會議後能在酒廊裡放鬆。"
  },
  {
    "word": "wheezy",
    "pos": "adj.",
    "cn_def": "呼吸有喘鳴聲的",
    "en_def": "making a whistling sound when breathing",
    "sentence": "A: Why did the office manager decide to clean all the air filters and open the windows in the meeting rooms this week? B: Several staff members sounded {{BLANK}} after the dusty renovation work next door, so she wanted fresh air to make breathing easier for everyone.",
    "cn": "A：辦公室經理這週為什麼決定清潔所有空氣濾網，並打開會議室的窗戶？ B：隔壁滿是灰塵的裝修工程之後，好幾位員工呼吸時都有【喘鳴聲】，所以她希望有新鮮空氣讓大家呼吸更順暢。"
  },
  {
    "word": "embarrassing",
    "pos": "adj.",
    "cn_def": "令人尷尬的",
    "en_def": "making you feel shy or ashamed",
    "sentence": "A: Why did Jason turn red during the video conference with the board members from the head office yesterday afternoon? B: He forgot to mute his microphone, and everyone heard him singing loudly in the kitchen, which was very {{BLANK}} because the meeting was being recorded.",
    "cn": "A：昨天下午和總公司董事會成員開視訊會議時，傑森為什麼臉紅了？ B：他忘了把麥克風靜音，大家都聽到他在廚房大聲唱歌，這實在非常【令人尷尬】，因為那場會議正在錄影。"
  },
  {
    "word": "deeper",
    "pos": "adj.",
    "cn_def": "更低沉的",
    "en_def": "lower in sound (comparative of deep)",
    "sentence": "A: Why does the new announcer's voice sound different on the radio than it does when we talk with him in the office? B: The studio microphone makes his voice sound much {{BLANK}} and fuller, so listeners often imagine he is older and taller than he really is.",
    "cn": "A：新播報員在廣播裡的聲音為什麼聽起來和我們在辦公室跟他講話時不一樣？ B：錄音室的麥克風讓他的聲音聽起來【更低沉】、更飽滿，所以聽眾常以為他比實際上更年長、更高大。"
  },
  {
    "word": "crack",
    "pos": "v.",
    "cn_def": "（嗓音）破音；哽咽變調",
    "en_def": "(of a voice) to change suddenly in pitch, often from strong feeling",
    "sentence": "A: Was the retiring director able to finish his farewell speech at the company dinner last Friday evening? B: Yes, but his voice began to {{BLANK}} when he thanked the staff who had worked with him for thirty years, and many people in the room started crying too.",
    "cn": "A：即將退休的處長上週五晚上在公司晚宴上有把告別演說講完嗎？ B：有，但當他感謝和他共事了三十年的員工時，他的聲音開始【哽咽變調】，房間裡很多人也跟著哭了。"
  },
  {
    "word": "pick up",
    "pos": "v.phr.",
    "cn_def": "收到（聲音、訊號）",
    "en_def": "to hear or receive a sound, especially with equipment",
    "sentence": "A: Should we buy new microphones for the large meeting room before the international sales conference starts next month? B: Yes, the old ones don't {{BLANK}} quiet speakers at the far end of the table, so online participants often miss important questions and comments.",
    "cn": "A：下個月國際業務會議開始之前，我們該為大會議室買新麥克風嗎？ B：該，舊的麥克風【收不到】長桌遠端說話小聲的人的聲音，所以線上與會者常常漏掉重要的問題和意見。"
  }
];

const MCQS = [
  {
    "q": "Clear communication is _____ when you handle angry customers. Our trainers will show you several useful phone techniques next week.",
    "options": [
      "essential",
      "monotonous",
      "awful",
      "embarrassing"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The famous actor gave a deep, _____ laugh during the interview. Fans said his low, warm sound was easy to recognize on the radio.",
    "options": [
      "shrill",
      "high-pitched",
      "throaty",
      "silvery"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Good speakers use voice _____ to keep their audience interested. They change their pitch and speed when they reach important points.",
    "options": [
      "puberty",
      "modulation",
      "skull",
      "vocal cords"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The machine in the warehouse began making a _____ noise like a whistle. The technician stopped it at once to check the motor.",
    "options": [
      "deeper",
      "husky",
      "throaty",
      "high-pitched"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Please speak in a _____ in the library study area. Other employees are reading reports and need a quiet place to concentrate.",
    "options": [
      "sound waves",
      "low voice",
      "vocal cords",
      "modulation"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The _____ ring of the old fire alarm hurt everyone's ears. The building manager plans to replace it with a softer model next month.",
    "options": [
      "shrill",
      "smoky",
      "husky",
      "gravelly"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "After a week with a bad cold, the receptionist sounded _____ on the phone. Callers could hardly understand her directions.",
    "options": [
      "elated",
      "silvery",
      "well-modulated",
      "croaky"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The tour guide had a deep, _____ voice from years of shouting outdoors. Visitors said he sounded like a rough old sailor.",
    "options": [
      "silvery",
      "high-pitched",
      "gravelly",
      "breathy"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The nervous trainee's voice was _____ at the start of her speech. After a few minutes, however, she spoke more steadily and confidently.",
    "options": [
      "wobbly",
      "distinct",
      "nasal",
      "smoky"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The shocked staff could not _____ a word after the announcement. Nobody had expected the company to close the branch so suddenly.",
    "options": [
      "recognize",
      "crack",
      "utter",
      "set off"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Announcers at the train station must _____ each platform number clearly. Many passengers are tourists who do not speak Chinese well.",
    "options": [
      "mumble",
      "enunciate",
      "crack",
      "set off"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please do not _____ when you answer customer calls. Speak slowly and clearly so that callers can understand every detail.",
    "options": [
      "recognize",
      "enunciate",
      "pick up",
      "mumble"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Each of our three machines makes a _____ sound when it starts. Workers can easily tell which model is running from across the room.",
    "options": [
      "monotonous",
      "distinct",
      "embarrassing",
      "wheezy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Boys' voices usually become lower during _____. The choir teacher often moves older students to a different singing group.",
    "options": [
      "puberty",
      "modulation",
      "skull",
      "sound waves"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Singers must protect their _____ by drinking water and resting. Shouting for long periods can seriously damage the voice.",
    "options": [
      "sound waves",
      "modulation",
      "puberty",
      "vocal cords"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The receptionist could _____ the client's voice right away. He had called the office every week for more than five years.",
    "options": [
      "utter",
      "mumble",
      "recognize",
      "enunciate"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The sound system at the conference was _____, so many guests left early. The organizers promised to hire a better company next year.",
    "options": [
      "awful",
      "appealing",
      "elated",
      "essential"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The soft wall panels absorb _____ and stop echoes in the hall. As a result, speakers can be heard clearly in every row.",
    "options": [
      "vocal cords",
      "puberty",
      "sound waves",
      "modulation"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "You hear your own voice through the bones of your _____. That is why a recording of your voice often sounds strange to you.",
    "options": [
      "puberty",
      "skull",
      "modulation",
      "sound waves"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Opening the emergency exit will _____ the alarm in the building. Please use the main entrance unless there is a real fire.",
    "options": [
      "pick up",
      "utter",
      "recognize",
      "set off"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The sales team was _____ when they heard about the record profits. Everyone cheered and celebrated with cake in the meeting room.",
    "options": [
      "monotonous",
      "elated",
      "croaky",
      "brittle"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The speaker talked in a slow, _____ tone for an hour. Several audience members fell asleep before the question period began.",
    "options": [
      "monotonous",
      "appealing",
      "elated",
      "distinct"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new advertisement features a warm and _____ voice. Customers say it makes them want to try the product right away.",
    "options": [
      "awful",
      "embarrassing",
      "wheezy",
      "appealing"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "When you have a blocked nose, your voice sounds _____. The singer canceled her concert until her cold was completely gone.",
    "options": [
      "elated",
      "silvery",
      "nasal",
      "essential"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Forgetting to mute your microphone during a meeting can be very _____. Always check your settings before joining an online call.",
    "options": [
      "embarrassing",
      "essential",
      "appealing",
      "elated"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The studio microphone makes the host's voice sound _____ and fuller. Listeners often think he is much older than he really is.",
    "options": [
      "shrill",
      "high-pitched",
      "deeper",
      "wobbly"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "His voice began to _____ with emotion during the farewell speech. Many coworkers in the room started to cry as well.",
    "options": [
      "utter",
      "crack",
      "recognize",
      "enunciate"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "This new microphone can _____ even quiet voices from across the room. It is perfect for large meetings with online participants.",
    "options": [
      "set off",
      "utter",
      "mumble",
      "pick up"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "After cheering at the game all night, Tom's voice was _____ the next morning. He drank warm tea before his important sales presentation.",
    "options": [
      "silvery",
      "husky",
      "well-modulated",
      "high-pitched"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The jazz singer at the hotel lounge has a warm, _____ voice. Guests love listening to her slow songs after long business meetings.",
    "options": [
      "smoky",
      "shrill",
      "wheezy",
      "croaky"
    ],
    "answer": 0,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "essential": {
    "pos": "adj.",
    "en_def": "absolutely necessary",
    "cn_def": "必要的；不可或缺的"
  },
  "throaty": {
    "pos": "adj.",
    "en_def": "low and rough, as if from the back of the throat",
    "cn_def": "低沉沙啞的；喉音重的"
  },
  "modulation": {
    "pos": "n.",
    "en_def": "change in the loudness, tone, or pitch of the voice",
    "cn_def": "（聲音的）抑揚頓挫；調節"
  },
  "well-modulated": {
    "pos": "adj.",
    "en_def": "pleasant to hear because it is well controlled",
    "cn_def": "抑揚得宜的；音調悅耳的"
  },
  "high-pitched": {
    "pos": "adj.",
    "en_def": "very high in sound",
    "cn_def": "高音調的；尖聲的"
  },
  "low voice": {
    "pos": "n.phr.",
    "en_def": "a quiet or deep way of speaking",
    "cn_def": "低聲；低沉的嗓音"
  },
  "husky": {
    "pos": "adj.",
    "en_def": "low and slightly rough, often in an attractive way",
    "cn_def": "沙啞的；略帶磁性的"
  },
  "shrill": {
    "pos": "adj.",
    "en_def": "very high, loud, and unpleasant",
    "cn_def": "尖銳刺耳的"
  },
  "croaky": {
    "pos": "adj.",
    "en_def": "deep and rough, often because of a cold",
    "cn_def": "嘶啞的（像蛙叫般）"
  },
  "gravelly": {
    "pos": "adj.",
    "en_def": "rough and low, like the sound of small stones",
    "cn_def": "粗啞低沉的"
  },
  "wobbly": {
    "pos": "adj.",
    "en_def": "shaking and not steady",
    "cn_def": "顫抖的；不穩的"
  },
  "utter": {
    "pos": "v.",
    "en_def": "to say something or make a sound",
    "cn_def": "說出；發出（聲音）"
  },
  "enunciate": {
    "pos": "v.",
    "en_def": "to say words clearly",
    "cn_def": "清楚地發音"
  },
  "mumble": {
    "pos": "v.",
    "en_def": "to speak quietly and unclearly",
    "cn_def": "含糊地說；咕噥"
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly different or easy to notice",
    "cn_def": "明顯的；獨特的"
  },
  "puberty": {
    "pos": "n.",
    "en_def": "the time when a child's body changes into an adult's",
    "cn_def": "青春期"
  },
  "vocal cords": {
    "pos": "n.phr.",
    "en_def": "the parts in the throat that make the voice",
    "cn_def": "聲帶"
  },
  "silvery": {
    "pos": "adj.",
    "en_def": "clear, soft, and pleasant, like a small bell",
    "cn_def": "清脆悅耳的；銀鈴般的"
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to know someone or something because you have seen or heard it before",
    "cn_def": "認出；辨識"
  },
  "awful": {
    "pos": "adj.",
    "en_def": "very bad or unpleasant",
    "cn_def": "糟糕的；極差的"
  },
  "sound waves": {
    "pos": "n.phr.",
    "en_def": "waves of energy that carry sound through air or water",
    "cn_def": "聲波"
  },
  "skull": {
    "pos": "n.",
    "en_def": "the bone that forms the head",
    "cn_def": "頭骨；顱骨"
  },
  "set off": {
    "pos": "v.phr.",
    "en_def": "to make an alarm or loud noise start",
    "cn_def": "觸發；引發（警報）"
  },
  "elated": {
    "pos": "adj.",
    "en_def": "very happy and excited",
    "cn_def": "興高采烈的；欣喜若狂的"
  },
  "monotonous": {
    "pos": "adj.",
    "en_def": "boring because it never changes",
    "cn_def": "單調乏味的"
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting",
    "cn_def": "吸引人的"
  },
  "breathy": {
    "pos": "adj.",
    "en_def": "with a lot of air heard in the voice",
    "cn_def": "帶氣音的"
  },
  "brittle": {
    "pos": "adj.",
    "en_def": "sounding sharp and tense, as if it might break",
    "cn_def": "（聲音）尖細緊繃的"
  },
  "nasal": {
    "pos": "adj.",
    "en_def": "sounding as if it comes through the nose",
    "cn_def": "鼻音重的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "not smooth; slightly hoarse",
    "cn_def": "粗糙的；沙啞的"
  },
  "smoky": {
    "pos": "adj.",
    "en_def": "(of a voice) deep and slightly rough in an attractive way",
    "cn_def": "（嗓音）低沉迷人的"
  },
  "wheezy": {
    "pos": "adj.",
    "en_def": "making a whistling sound when breathing",
    "cn_def": "呼吸有喘鳴聲的"
  },
  "embarrassing": {
    "pos": "adj.",
    "en_def": "making you feel shy or ashamed",
    "cn_def": "令人尷尬的"
  },
  "deeper": {
    "pos": "adj.",
    "en_def": "lower in sound (comparative of deep)",
    "cn_def": "更低沉的"
  },
  "crack": {
    "pos": "v.",
    "en_def": "(of a voice) to change suddenly in pitch, often from strong feeling",
    "cn_def": "（嗓音）破音；哽咽變調"
  },
  "pick up": {
    "pos": "v.phr.",
    "en_def": "to hear or receive a sound, especially with equipment",
    "cn_def": "收到（聲音、訊號）"
  }
};

const EXTRA_GLOSSES = {};
