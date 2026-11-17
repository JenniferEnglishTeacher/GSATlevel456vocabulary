// Topic 355 Quiz Data: Skill 技能
// Source word list: https://www.examword.com/group-topic/skill — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T355 - Skill 技能",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ability",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the power or skill to do something",
    "sentence": "A: Why did the hiring team choose Linda for the new sales position when several other candidates had more years in the industry? B: They were impressed by her {{BLANK}} to explain complicated products in simple language, and they believe she will quickly win the trust of our overseas customers.",
    "cn": "A：為什麼招聘團隊選擇琳達擔任新的業務職位，明明其他幾位應徵者在這個產業的年資更久？ B：他們對她用簡單的語言解釋複雜產品的【能力】印象深刻，並相信她很快就能贏得海外客戶的信任。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天分；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Who designed the colorful posters for the company's anniversary party, since everyone in the lobby keeps asking about them? B: Kevin from the accounting department made them during his lunch breaks, and nobody knew he had such a {{BLANK}} for drawing until the marketing manager saw his sketches last month.",
    "cn": "A：公司週年派對那些色彩繽紛的海報是誰設計的？大廳裡每個人都一直在問。 B：是會計部的凱文利用午休時間做的，直到上個月行銷經理看到他的素描之前，沒人知道他有這樣的繪畫【天分】。"
  },
  {
    "word": "competence",
    "pos": "n.",
    "cn_def": "能力；勝任",
    "en_def": "the ability to do a job well enough",
    "sentence": "A: Why does every new nurse at the clinic have to complete a practical test before working the night shift alone? B: The director wants to check each person's {{BLANK}} in handling emergencies, because patients' safety depends on staff who can stay calm and make the right decisions quickly.",
    "cn": "A：為什麼診所的每位新護理師在單獨值夜班之前都必須完成實作測驗？ B：主任想確認每個人處理緊急狀況的【能力】，因為病人的安全取決於能保持冷靜並迅速做出正確決定的員工。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "有能力的；能勝任的",
    "en_def": "able to do something well enough",
    "sentence": "A: Are you worried about leaving the new assistant in charge of the front desk while you attend the conference in Tokyo next week? B: Not really, because she has already handled several busy weekends on her own, and she is a {{BLANK}} worker who knows exactly what to do when guests complain.",
    "cn": "A：你下週去東京參加會議時，讓新助理負責櫃檯，你會擔心嗎？ B：不太會，因為她已經獨自處理過好幾個忙碌的週末，而且她是一位【能幹的】員工，客人抱怨時她完全知道該怎麼做。"
  },
  {
    "word": "proficiency",
    "pos": "n.",
    "cn_def": "熟練；精通",
    "en_def": "a high level of skill in something",
    "sentence": "A: What do applicants need to provide if they want to work at our customer service center in Singapore? B: Besides a résumé and two references, they must show a certificate of {{BLANK}} in English, because most callers are international travelers who need clear and polite answers on the phone.",
    "cn": "A：應徵者如果想在我們新加坡的客服中心工作，需要提供什麼？ B：除了履歷和兩份推薦信之外，他們還必須出示英語【能力】證書，因為大部分來電者都是國際旅客，需要在電話中得到清楚又有禮貌的答覆。"
  },
  {
    "word": "proficient",
    "pos": "adj.",
    "cn_def": "熟練的；精通的",
    "en_def": "very skilled at something",
    "sentence": "A: Why did the IT manager ask Tom to lead the training session on the new accounting software next Monday? B: Tom has used the program at his previous company for three years, so he is very {{BLANK}} with it and can answer almost any question the staff might have.",
    "cn": "A：為什麼資訊經理請湯姆主持下週一新會計軟體的訓練課程？ B：湯姆在前一家公司用這個程式用了三年，所以他用得非常【熟練】，幾乎能回答員工可能提出的任何問題。"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "cn_def": "專業知識；專長",
    "en_def": "special knowledge or skill in a field",
    "sentence": "A: Why is the company paying an outside consultant when our own team already knows a lot about the overseas market? B: Our team understands the customers well, but we need his {{BLANK}} in international tax law, because one small mistake in the contracts could cost us a huge amount of money.",
    "cn": "A：我們自己的團隊已經很了解海外市場了，為什麼公司還要花錢請外部顧問？ B：我們的團隊很了解客戶，但我們需要他在國際稅法方面的【專業知識】，因為合約上一個小錯誤就可能讓我們損失一大筆錢。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person with special knowledge or skill",
    "sentence": "A: Who is going to speak at the safety seminar for the warehouse staff on Thursday afternoon? B: We have invited an {{BLANK}} on fire prevention from the city fire department, and she will show everyone how to use the extinguishers and plan the fastest escape routes from the building.",
    "cn": "A：星期四下午為倉庫員工舉辦的安全研討會由誰來演講？ B：我們邀請了市消防局的一位防火【專家】，她會示範如何使用滅火器，並規劃從大樓逃生的最快路線。"
  },
  {
    "word": "master",
    "pos": "v.",
    "cn_def": "精通；掌握",
    "en_def": "to learn how to do something very well",
    "sentence": "A: How long did it take you to learn all the functions of the new booking system at the hotel? B: It took me nearly two months to {{BLANK}} it completely, because the system has many hidden settings for group reservations, but now I can finish a large booking in just a few minutes.",
    "cn": "A：你花了多久才學會飯店新訂房系統的所有功能？ B：我花了將近兩個月才完全【精通】它，因為系統裡有很多團體訂房的隱藏設定，但現在我只要幾分鐘就能完成一筆大型訂單。"
  },
  {
    "word": "mastery",
    "pos": "n.",
    "cn_def": "精通；熟練掌握",
    "en_def": "great skill or full knowledge of something",
    "sentence": "A: What made the guest chef's cooking demonstration at the food fair so popular with the visitors yesterday? B: Everyone was amazed by his {{BLANK}} of traditional knife techniques, since he cut vegetables into perfect thin slices while he was chatting with the audience and telling funny stories about his restaurant.",
    "cn": "A：昨天美食展上那位客座主廚的烹飪示範為什麼那麼受參觀者歡迎？ B：大家都對他傳統刀工的【精湛造詣】感到驚嘆，因為他一邊和觀眾聊天、講餐廳的趣事，一邊把蔬菜切成完美的薄片。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "培養；發展",
    "en_def": "to make something grow or become better",
    "sentence": "A: Why does the company send junior staff to those weekend workshops in Taichung every few months? B: The managers want young employees to {{BLANK}} their presentation skills early, so that they can speak confidently in front of clients when they are promoted to bigger roles in the future.",
    "cn": "A：為什麼公司每隔幾個月就派資淺員工去台中參加那些週末工作坊？ B：主管們希望年輕員工及早【培養】簡報技巧，這樣將來升到更重要的職位時，他們就能自信地在客戶面前發言。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；提升",
    "en_def": "to make something better",
    "sentence": "A: Is there anything I can do to get a higher score on the TOEIC listening section before my job interview in March? B: You should listen to English news podcasts on your way to work every day, because it will help you {{BLANK}} your understanding of different accents and fast speakers.",
    "cn": "A：在三月的工作面試前，我有什麼辦法能在多益聽力部分拿到更高的分數嗎？ B：你應該每天上班途中聽英語新聞播客，因為這能幫助你【提升】對不同口音和說話快的人的理解力。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to get better",
    "sentence": "A: How do you stay so calm when you give speeches to hundreds of people at the annual shareholders' meeting? B: I {{BLANK}} my speech in front of a mirror every evening for at least a week, and I also ask my colleagues to listen and point out any parts that sound unclear.",
    "cn": "A：你在年度股東大會上對數百人演講時，怎麼能保持那麼冷靜？ B：我至少會連續一週每天晚上對著鏡子【練習】演講，還會請同事聽聽看，指出任何聽起來不清楚的部分。"
  },
  {
    "word": "train",
    "pos": "v.",
    "cn_def": "訓練；培訓",
    "en_def": "to teach someone the skills for a job",
    "sentence": "A: Who will show the new cashiers how to use the card machines before the store opens on Saturday? B: The supervisor will {{BLANK}} them on Friday afternoon, and she will also explain how to handle refunds, because the weekend sale always brings long lines and many difficult customers.",
    "cn": "A：週六開店前，誰會教新收銀員怎麼使用刷卡機？ B：主管會在星期五下午【訓練】他們，她也會說明如何處理退款，因為週末特賣總是會帶來大排長龍和許多難搞的客人。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練；培訓",
    "en_def": "the process of learning skills for a job",
    "sentence": "A: Do new flight attendants start working on international flights right after they are hired by the airline? B: No, they first complete eight weeks of {{BLANK}} at the airline's center near the airport, where they learn first aid, safety rules, and how to serve meals to passengers politely.",
    "cn": "A：新空服員一被航空公司錄取就開始飛國際航線嗎？ B：不是，他們會先在機場附近的航空公司中心完成八週的【培訓】，學習急救、安全規定，以及如何有禮貌地為乘客送餐。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill gained from doing something",
    "sentence": "A: Why did the restaurant owner hire the older chef instead of the young graduate with the excellent cooking school grades? B: The older chef has fifteen years of {{BLANK}} running busy hotel kitchens, so she knows how to manage a team and serve two hundred guests without delays.",
    "cn": "A：為什麼餐廳老闆聘用了那位年長的廚師，而不是烹飪學校成績優異的年輕畢業生？ B：那位年長的廚師有十五年經營繁忙飯店廚房的【經驗】，所以她知道如何管理團隊，並且能毫不延誤地為兩百位客人上菜。"
  },
  {
    "word": "qualified",
    "pos": "adj.",
    "cn_def": "有資格的；合格的",
    "en_def": "having the right training or certificates for a job",
    "sentence": "A: Can our office manager fix the electrical problem in the meeting room herself, or should we call someone? B: We should call a professional, because only a {{BLANK}} electrician is allowed to repair the wiring in this building, and the insurance company will not pay if something goes wrong.",
    "cn": "A：我們的辦公室經理可以自己修理會議室的電路問題嗎？還是我們應該找人來？ B：我們應該找專業人員，因為這棟大樓只允許【合格的】電工修理線路，萬一出了問題，保險公司也不會理賠。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的",
    "en_def": "having the ability to do something",
    "sentence": "A: Are you sure the new intern can organize the client dinner by herself while the rest of the team is in Hong Kong? B: Yes, she is very {{BLANK}}, and last month she planned the whole product launch party, including the menu, the music, and the guest list, without any help.",
    "cn": "A：團隊其他人都在香港的時候，你確定新實習生能自己安排客戶晚宴嗎？ B：是的，她非常【有能力】，上個月她在沒有任何幫助的情況下策劃了整個產品發表派對，包括菜單、音樂和賓客名單。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應",
    "en_def": "to change in order to fit a new situation",
    "sentence": "A: How is your sister doing at her new job in Germany, since she moved there without speaking much German? B: She found it hard at first, but she is learning to {{BLANK}} to the new culture, and her colleagues invite her to lunch every day so she can practice the language.",
    "cn": "A：你姊姊在德國的新工作怎麼樣？她搬去那裡時德語說得不多。 B：她一開始覺得很困難，但她正在學著【適應】新的文化，而且同事每天都邀她一起吃午餐，好讓她練習語言。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得；習得",
    "en_def": "to get or learn something",
    "sentence": "A: Why are so many employees signing up for the evening data analysis course offered by the local university? B: The company will pay the full cost, and everyone knows that people who {{BLANK}} new digital skills this year will have a better chance of promotion when the new department opens.",
    "cn": "A：為什麼這麼多員工報名當地大學開設的夜間數據分析課程？ B：公司會支付全部費用，而且大家都知道，今年【習得】新數位技能的人，在新部門成立時會有更好的升遷機會。"
  },
  {
    "word": "apply",
    "pos": "v.",
    "cn_def": "應用；運用",
    "en_def": "to use knowledge or a skill in a real situation",
    "sentence": "A: Did the sales team find the negotiation workshop useful, or was it just another boring day in the training room? B: It was really useful, and two of them already managed to {{BLANK}} what they learned during a meeting with a difficult supplier, so they got a much better price.",
    "cn": "A：業務團隊覺得那場談判工作坊有用嗎？還是只是在訓練教室裡又無聊的一天？ B：真的很有用，他們當中已經有兩個人在和一家難搞的供應商開會時【運用】了所學，因此談到了好得多的價格。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a special way of doing something",
    "sentence": "A: How did the new photographer make our products look so bright and attractive in the online catalog? B: She used a special lighting {{BLANK}} that removes shadows from the background, and she also took each picture from several angles so that customers can see every detail clearly.",
    "cn": "A：新攝影師是怎麼讓我們的產品在線上型錄裡看起來那麼明亮又吸引人的？ B：她用了一種能去除背景陰影的特殊打光【技巧】，而且她還從好幾個角度拍攝每張照片，讓顧客能清楚看到每個細節。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a careful plan to reach a goal",
    "sentence": "A: What is the marketing department planning to do about the drop in sales among young customers this year? B: They have created a new {{BLANK}} that focuses on short videos and social media ads, and they hope it will bring younger shoppers back to our stores before the holiday season.",
    "cn": "A：今年年輕顧客的銷售下滑，行銷部打算怎麼做？ B：他們制定了一套專注於短影片和社群媒體廣告的新【策略】，希望在假期季節前把年輕購物者帶回我們的店裡。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的；善於應變的",
    "en_def": "good at finding clever ways to solve problems",
    "sentence": "A: How did the event coordinator manage to continue the outdoor wedding when it suddenly started raining heavily? B: She was very {{BLANK}}, and within twenty minutes she borrowed large tents from a nearby hotel and moved all the tables and flowers under them without disturbing the guests.",
    "cn": "A：突然下起大雨時，活動協調人是怎麼讓戶外婚禮繼續進行的？ B：她非常【足智多謀】，二十分鐘內就向附近飯店借來大型帳篷，在不打擾賓客的情況下把所有桌子和花都搬到帳篷下。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at making new and original ideas",
    "sentence": "A: Why did the toy company hire so many young designers from the art university this year? B: The company needs {{BLANK}} people who can invent fun new games for children, because parents are tired of seeing the same old products in every store at the mall.",
    "cn": "A：今年這家玩具公司為什麼從藝術大學聘請了這麼多年輕設計師？ B：公司需要能為孩子發明有趣新遊戲的【有創意的】人才，因為家長已經厭倦了在購物中心每家店都看到同樣的老產品。"
  },
  {
    "word": "analytical",
    "pos": "adj.",
    "cn_def": "善於分析的",
    "en_def": "good at studying information carefully to understand it",
    "sentence": "A: What kind of person is the finance department looking for to replace the accountant who is retiring next month? B: They want someone with strong {{BLANK}} skills who can study large sets of sales numbers, find unusual patterns, and explain the results clearly to the managers.",
    "cn": "A：財務部在找什麼樣的人來接替下個月退休的會計師？ B：他們想找一位具備強大【分析】能力的人，能研究大量的銷售數據、找出不尋常的模式，並把結果清楚地向主管說明。"
  },
  {
    "word": "leadership",
    "pos": "n.",
    "cn_def": "領導能力；領導",
    "en_def": "the ability to guide and direct a group",
    "sentence": "A: Why was Mr. Chen chosen to manage the new branch office in Kaohsiung instead of someone from headquarters? B: He showed excellent {{BLANK}} when the factory had serious problems last year, and his team trusted him to make good decisions during that difficult time.",
    "cn": "A：為什麼選陳先生去管理高雄的新分公司，而不是總公司的人？ B：去年工廠出現嚴重問題時，他展現了出色的【領導能力】，他的團隊也信任他能在那段困難時期做出好的決定。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with others",
    "sentence": "A: How did your small design firm finish such a large project for the airport in only three months? B: We decided to {{BLANK}} with an engineering company in Tainan, so each team worked on the parts it knew best, and we shared progress reports every Friday afternoon.",
    "cn": "A：你們的小型設計公司是怎麼在短短三個月內完成機場那麼大的專案的？ B：我們決定與台南一家工程公司【合作】，讓每個團隊負責自己最擅長的部分，並在每週五下午分享進度報告。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通",
    "en_def": "the sharing of information between people",
    "sentence": "A: Why do the managers in the Taipei and London offices hold a video meeting every Monday morning? B: Good {{BLANK}} between the two offices is very important, because if one team does not know about a change in the schedule, the whole shipment to Europe may be delayed.",
    "cn": "A：為什麼台北和倫敦辦公室的經理們每週一早上都要開視訊會議？ B：兩個辦公室之間良好的【溝通】非常重要，因為如果一個團隊不知道時程變動，整批運往歐洲的貨物都可能延誤。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信；信心",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: Your presentation to the investors was wonderful, but weren't you nervous about speaking to such an important group? B: I was a little nervous, but after practicing the slides with my manager many times, I had enough {{BLANK}} to answer their difficult questions without reading my notes.",
    "cn": "A：你對投資人的簡報非常精彩，但你對著這麼重要的一群人說話不緊張嗎？ B：我有一點緊張，但和經理反覆演練投影片很多次之後，我有足夠的【自信】不看筆記就回答他們困難的問題。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: Why has the warehouse been able to send out so many more orders since the beginning of this month? B: The new manager introduced a more {{BLANK}} system for packing boxes, so workers no longer walk back and forth across the building, and each order is ready in half the time.",
    "cn": "A：從這個月初開始，倉庫為什麼能寄出多那麼多訂單？ B：新經理引進了一套更【有效率的】包裝系統，所以員工不必再在整棟建築裡來回走動，每筆訂單只需一半的時間就能準備好。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確性",
    "en_def": "the quality of being correct and exact",
    "sentence": "A: Why does the bank ask two different clerks to check every international payment before it is sent? B: The bank cares a lot about {{BLANK}}, because even one wrong number in an account code can send a customer's money to the wrong country and cause serious trouble.",
    "cn": "A：為什麼銀行在每筆國際匯款送出前都要兩位不同的行員核對？ B：銀行非常重視【準確性】，因為帳戶代碼中即使只錯一個數字，都可能把客戶的錢匯到錯誤的國家，造成嚴重的麻煩。"
  },
  {
    "word": "dexterity",
    "pos": "n.",
    "cn_def": "靈巧；手巧",
    "en_def": "skill in using your hands quickly and well",
    "sentence": "A: Why does the watch factory give every job applicant a short test with tiny screws and tools before the interview? B: Workers on the assembly line need excellent {{BLANK}}, because they must put very small parts together quickly without dropping or damaging anything during a long shift.",
    "cn": "A：為什麼鐘錶工廠在面試前會讓每位應徵者用小螺絲和工具做簡短測驗？ B：生產線上的工人需要極佳的手部【靈巧度】，因為他們必須在長時間的輪班中迅速組裝非常小的零件，而且不能掉落或損壞任何東西。"
  }
];

const MCQS = [
  {
    "q": "Linda was promoted because of her _____ to solve problems quickly. Her manager now trusts her with the most difficult clients.",
    "options": [
      "ability",
      "accuracy",
      "dexterity",
      "communication"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The young designer has a natural _____ for choosing colors. Her first poster for the store became very popular with customers.",
    "options": [
      "training",
      "leadership",
      "talent",
      "accuracy"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new manager is fully _____ to lead the project without help. She has run three similar projects at her last company.",
    "options": [
      "creative",
      "competent",
      "analytical",
      "efficient"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Applicants must show _____ in Japanese for this sales position. Most of our clients are companies based in Osaka and Tokyo.",
    "options": [
      "leadership",
      "confidence",
      "strategy",
      "proficiency"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The consultant's _____ in international tax law saved the company a lot of money. Many firms now ask for her advice.",
    "options": [
      "dexterity",
      "communication",
      "expertise",
      "leadership"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The museum invited a leading _____ on ancient coins to examine its collection. He confirmed that most of the coins were real.",
    "options": [
      "expert",
      "strategy",
      "talent",
      "training"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "It takes most new employees about a month to _____ the ordering software. After that, they can process orders without any help.",
    "options": [
      "collaborate",
      "train",
      "practice",
      "master"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The workshop helps staff _____ better time management skills. Many participants say they now finish their work much earlier.",
    "options": [
      "collaborate",
      "develop",
      "adapt",
      "attend"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The hotel offered free breakfast to _____ customer satisfaction scores. Online reviews became much more positive within two months.",
    "options": [
      "improve",
      "acquire",
      "collaborate",
      "master"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Musicians usually _____ for several hours a day before a big concert. The orchestra rehearses together every evening this week.",
    "options": [
      "acquire",
      "master",
      "practice",
      "apply"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The airline will _____ forty new pilots at its center this year. Each pilot must complete six months of lessons before flying.",
    "options": [
      "adapt",
      "train",
      "collaborate",
      "apply"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "All new staff receive two weeks of _____ before they meet customers. They learn about the products and the store's return policy.",
    "options": [
      "dexterity",
      "mastery",
      "strategy",
      "training"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The job requires at least three years of _____ in hotel management. Applicants without this background will not be invited for an interview.",
    "options": [
      "accuracy",
      "dexterity",
      "experience",
      "talent"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Only _____ technicians are allowed to repair the elevators in this building. They must hold a valid government license.",
    "options": [
      "qualified",
      "creative",
      "analytical",
      "resourceful"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new software is _____ of handling thousands of orders at once. It will save the warehouse a lot of time.",
    "options": [
      "efficient",
      "creative",
      "analytical",
      "capable"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Employees who move overseas need time to _____ to a new working culture. The company offers language classes to help them settle in.",
    "options": [
      "acquire",
      "adapt",
      "master",
      "apply"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Interns can _____ valuable skills by working on real projects with senior staff. Many of them are offered full-time jobs later.",
    "options": [
      "acquire",
      "collaborate",
      "adapt",
      "train"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The engineers will _____ the new safety rules to every factory in Asia. The changes will take effect on the first of May.",
    "options": [
      "collaborate",
      "master",
      "apply",
      "practice"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The chef showed the staff a new _____ for cutting fish quickly and safely. Everyone in the kitchen tried it the next morning.",
    "options": [
      "leadership",
      "technique",
      "accuracy",
      "confidence"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The company's new marketing _____ focuses on social media and short online videos. Sales to young customers have already started to rise.",
    "options": [
      "dexterity",
      "proficiency",
      "talent",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "When the delivery truck broke down, the _____ driver borrowed a van from a nearby shop. All the packages still arrived on time.",
    "options": [
      "analytical",
      "proficient",
      "resourceful",
      "academic"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The advertising agency is looking for _____ writers who can invent fresh slogans. Applicants must send three original ideas with their résumé.",
    "options": [
      "creative",
      "analytical",
      "efficient",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The job requires strong _____ skills to study sales data and find patterns. Experience with spreadsheet software is also necessary.",
    "options": [
      "resourceful",
      "qualified",
      "capable",
      "analytical"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Anna showed strong _____ by guiding her team through the difficult product launch. She was promoted to department manager in June.",
    "options": [
      "dexterity",
      "leadership",
      "accuracy",
      "proficiency"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Our design team will _____ with engineers from Germany on the new car model. Both groups will meet online every Wednesday.",
    "options": [
      "collaborate",
      "acquire",
      "master",
      "apply"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Clear _____ between the sales and production teams prevents costly mistakes. The two departments now share a weekly progress report.",
    "options": [
      "dexterity",
      "expertise",
      "communication",
      "mastery"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "After months of practice, Daniel gained the _____ to speak in front of large audiences. He now leads the monthly staff meeting.",
    "options": [
      "dexterity",
      "confidence",
      "accuracy",
      "training"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The new machines are more _____ and use thirty percent less electricity. The factory expects to save money on energy bills.",
    "options": [
      "creative",
      "qualified",
      "analytical",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Please check the _____ of all figures in the report before sending it to the client. Even a small error could damage our reputation.",
    "options": [
      "dexterity",
      "leadership",
      "accuracy",
      "talent"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Surgeons need great manual _____ to perform delicate operations. They often practice on models before working with real patients.",
    "options": [
      "dexterity",
      "strategy",
      "communication",
      "leadership"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "ability": {
    "pos": "n.",
    "en_def": "the power or skill to do something",
    "cn_def": "能力"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分；才能"
  },
  "competence": {
    "pos": "n.",
    "en_def": "the ability to do a job well enough",
    "cn_def": "能力；勝任"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "able to do something well enough",
    "cn_def": "有能力的；能勝任的"
  },
  "proficiency": {
    "pos": "n.",
    "en_def": "a high level of skill in something",
    "cn_def": "熟練；精通"
  },
  "proficient": {
    "pos": "adj.",
    "en_def": "very skilled at something",
    "cn_def": "熟練的；精通的"
  },
  "expertise": {
    "pos": "n.",
    "en_def": "special knowledge or skill in a field",
    "cn_def": "專業知識；專長"
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with special knowledge or skill",
    "cn_def": "專家"
  },
  "master": {
    "pos": "v.",
    "en_def": "to learn how to do something very well",
    "cn_def": "精通；掌握"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or full knowledge of something",
    "cn_def": "精通；熟練掌握"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to make something grow or become better",
    "cn_def": "培養；發展"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；提升"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again and again to get better",
    "cn_def": "練習"
  },
  "train": {
    "pos": "v.",
    "en_def": "to teach someone the skills for a job",
    "cn_def": "訓練；培訓"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of learning skills for a job",
    "cn_def": "訓練；培訓"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill gained from doing something",
    "cn_def": "經驗"
  },
  "qualified": {
    "pos": "adj.",
    "en_def": "having the right training or certificates for a job",
    "cn_def": "有資格的；合格的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something",
    "cn_def": "有能力的"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change in order to fit a new situation",
    "cn_def": "適應"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or learn something",
    "cn_def": "獲得；習得"
  },
  "apply": {
    "pos": "v.",
    "en_def": "to use knowledge or a skill in a real situation",
    "cn_def": "應用；運用"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something",
    "cn_def": "技巧；技術"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan to reach a goal",
    "cn_def": "策略"
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "good at finding clever ways to solve problems",
    "cn_def": "足智多謀的；善於應變的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and original ideas",
    "cn_def": "有創意的"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "good at studying information carefully to understand it",
    "cn_def": "善於分析的"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to guide and direct a group",
    "cn_def": "領導能力；領導"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others",
    "cn_def": "合作"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of information between people",
    "cn_def": "溝通"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "自信；信心"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct and exact",
    "cn_def": "準確性"
  },
  "dexterity": {
    "pos": "n.",
    "en_def": "skill in using your hands quickly and well",
    "cn_def": "靈巧；手巧"
  }
};

const EXTRA_GLOSSES = {};
