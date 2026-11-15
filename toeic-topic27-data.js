// Topic 27 Quiz Data: Believing 信念
// Source word list: https://www.examword.com/group-topic/believing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T27 - Believing 信念",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；相信",
    "en_def": "an idea that you accept as true",
    "sentence": "A: Why did the new manager spend so much time talking with the team before she changed the weekly schedule at the office? B: It is her strong {{BLANK}} that workers do better when they understand the reasons for a change, so she always explains her plans clearly and listens to their questions first.",
    "cn": "A：為什麼新經理在更改辦公室的每週班表之前，花了那麼多時間和團隊談話？ B：她堅定的【信念】是，員工了解改變的原因時會表現得更好，所以她總是先清楚說明計畫並聽取他們的問題。"
  },
  {
    "word": "believer",
    "pos": "n.",
    "cn_def": "信奉者；深信…的人",
    "en_def": "a person who strongly thinks that something is good or true",
    "sentence": "A: Are you surprised that the head of the sales department now rides her bicycle to work every day, even when it rains in the morning? B: Not at all, because she has been a firm {{BLANK}} in healthy habits for years, and she often tells new staff that regular exercise helps her stay focused at meetings.",
    "cn": "A：業務部主管現在每天騎腳踏車上班，即使早上下雨也一樣，你會感到驚訝嗎？ B：一點也不，因為她多年來一直是健康習慣的堅定【信奉者】，她也常告訴新員工規律運動能幫助她在開會時保持專注。"
  },
  {
    "word": "trust",
    "pos": "v.",
    "cn_def": "信任；信賴",
    "en_def": "to believe that someone is honest or will do the right thing",
    "sentence": "A: Why did the director let the new assistant handle the important client meeting in Singapore by himself last week? B: She has worked with him on several difficult projects, and he always finishes his tasks carefully and on time, so she knows she can {{BLANK}} him with serious responsibilities.",
    "cn": "A：為什麼主任上週讓新助理獨自負責在新加坡的重要客戶會議？ B：她和他合作過好幾個困難的專案，他總是仔細又準時完成任務，所以她知道可以【信任】他、交付重大的責任。"
  },
  {
    "word": "faith",
    "pos": "n.",
    "cn_def": "信心；信任；信仰",
    "en_def": "strong trust in someone or something",
    "sentence": "A: The company lost money for two years in a row, so why are the investors still giving it more support this year? B: They have great {{BLANK}} in the new CEO because she turned around two other businesses before, and her plan to cut costs and open online stores looks very practical.",
    "cn": "A：這家公司連續兩年虧損，為什麼投資人今年還繼續給予更多支持？ B：他們對新任執行長很有【信心】，因為她之前曾讓另外兩家企業轉虧為盈，而且她削減成本和開設網路商店的計畫看起來非常務實。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "信心；自信",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: How did the new intern manage to give such a clear presentation to the board of directors without looking nervous at all? B: Her supervisor practiced with her several times during the week and gave her helpful advice, which built up her {{BLANK}} and helped her speak calmly in front of everyone.",
    "cn": "A：新來的實習生是怎麼在董事會面前做出這麼清楚的簡報，而且一點都不緊張？ B：她的主管那週陪她練習了好幾次，並給她有用的建議，這建立了她的【信心】，讓她能在大家面前冷靜地發言。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "說服；使相信",
    "en_def": "to make someone believe that something is true",
    "sentence": "A: The finance team was against the idea at first, so how did you get approval to buy new computers for the design department? B: I showed them a report on how much time the old machines were wasting every day, and that was enough to {{BLANK}} them that the purchase would save money.",
    "cn": "A：財務團隊起初反對這個想法，你是怎麼取得核准，為設計部門購買新電腦的？ B：我給他們看了一份報告，說明舊電腦每天浪費多少時間，這就足以【說服】他們相信這筆採購會省錢。"
  },
  {
    "word": "convinced",
    "pos": "adj.",
    "cn_def": "確信的；深信的",
    "en_def": "completely sure that something is true",
    "sentence": "A: Why does the marketing manager want to move most of our advertising money from newspapers to social media next year? B: After studying last year's sales numbers carefully, she is {{BLANK}} that younger customers find our products online, so she believes the change will bring in many more orders.",
    "cn": "A：為什麼行銷經理明年想把大部分廣告預算從報紙轉到社群媒體？ B：仔細研究去年的銷售數字後，她【確信】年輕顧客是在網路上找到我們的產品，所以她認為這項改變會帶來更多訂單。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "令人信服的",
    "en_def": "able to make people believe something is true",
    "sentence": "A: Did the hotel manager accept the guest's complaint about the noisy air conditioner, or did she refuse to give him a refund? B: He recorded the loud noise on his phone and showed her the video at the front desk, so his story was {{BLANK}} enough for her to return half of his payment.",
    "cn": "A：飯店經理有接受那位房客對冷氣噪音的投訴嗎？還是她拒絕退款給他？ B：他用手機錄下了很大的噪音，並在櫃台給她看影片，所以他的說法夠【令人信服】，她便退還了一半的費用。"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "cn_def": "懷疑；疑慮",
    "en_def": "a feeling of not being sure about something",
    "sentence": "A: Why hasn't the manager signed the agreement with the new supplier yet, since their prices are much lower than our current ones? B: She has some {{BLANK}} about whether such a small company can deliver large orders on time, so she wants to visit their factory before she makes a final decision.",
    "cn": "A：新供應商的價格比我們目前的低很多，為什麼經理還沒和他們簽約？ B：她對這麼小的公司能否準時交付大量訂單有些【疑慮】，所以她想在做最後決定之前先參觀他們的工廠。"
  },
  {
    "word": "uncertain",
    "pos": "adj.",
    "cn_def": "不確定的",
    "en_def": "not sure or not clearly known",
    "sentence": "A: Has the travel agency told you yet when your group can fly to Tokyo for the trade show next month? B: Not yet, because a big storm is moving toward Japan, and the schedule for flights out of Taipei is still {{BLANK}}, so they promised to call me as soon as they hear any news.",
    "cn": "A：旅行社告訴你了嗎？你們這團下個月什麼時候可以飛去東京參加商展？ B：還沒，因為一個大型暴風正往日本移動，從台北出發的航班時刻仍然【不確定】，所以他們答應一有消息就打電話給我。"
  },
  {
    "word": "certain",
    "pos": "adj.",
    "cn_def": "確定的；肯定的",
    "en_def": "completely sure",
    "sentence": "A: Should we order extra chairs for the company's annual dinner, or do you think the hall already has enough for all our guests? B: I called the event center this morning and checked the numbers twice, so I am {{BLANK}} they have two hundred chairs, which is more than enough for everyone we invited.",
    "cn": "A：我們應該為公司年度晚宴多訂一些椅子嗎？還是你覺得會場已經有足夠的椅子給所有賓客了？ B：我今天早上打電話給活動中心，也核對了兩次數字，所以我【確定】他們有兩百張椅子，對所有受邀的人來說綽綽有餘。"
  },
  {
    "word": "certainty",
    "pos": "n.",
    "cn_def": "確定；確信",
    "en_def": "the state of being completely sure",
    "sentence": "A: Can you tell the customer exactly when the repair team will arrive to fix the broken elevator in her office building? B: I can't say with {{BLANK}}, because the team is still working at another site downtown, but they usually finish by noon, so they should reach her building early in the afternoon.",
    "cn": "A：你能明確告訴客戶維修團隊何時會到她的辦公大樓修理故障的電梯嗎？ B：我無法【確定】地說，因為團隊還在市中心的另一個地點施工，但他們通常中午前會完成，所以應該在下午早些時候抵達她的大樓。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定；以為",
    "en_def": "to think something is true without checking it",
    "sentence": "A: Why did so many people arrive at the wrong meeting room on the third floor this morning? B: The room was changed late last night, and most of the staff didn't read the new email, so it was natural for them to {{BLANK}} that the meeting was still in the usual place, and they went there out of habit.",
    "cn": "A：為什麼今天早上有這麼多人跑錯到三樓的會議室？ B：會議室昨晚很晚才更改，大部分員工沒看到新的電子郵件，所以他們很自然地【以為】會議還在平常的地點，就習慣性地去了那裡。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設；設想",
    "en_def": "something you believe is true without proof",
    "sentence": "A: Why is the sales report for the new store so different from the numbers the planning team expected last spring? B: Their plan was based on the {{BLANK}} that many tourists would visit the area, but the new train station opened late, so far fewer shoppers came than they had hoped.",
    "cn": "A：為什麼新門市的銷售報告和規劃團隊去年春天預期的數字差這麼多？ B：他們的計畫是基於很多觀光客會來這個地區的【假設】，但新的火車站延後開通，所以來的購物者比他們希望的少很多。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "what you think or feel about something",
    "sentence": "A: Before we choose a design for the new company logo, should we ask the staff in the other branches what they think? B: Yes, I'd like to hear everyone's {{BLANK}} because they meet our customers every day, so I'll send a short online survey to all of our offices this afternoon.",
    "cn": "A：在我們選定公司新標誌的設計之前，應該問問其他分公司員工的想法嗎？ B：是的，我想聽聽每個人的【意見】，因為他們每天都接觸我們的顧客，所以我今天下午會寄一份簡短的線上問卷給我們所有的辦公室。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服；勸說",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "A: Our best engineer said she was going to leave for a job in Singapore, so is she really staying with us now? B: Yes, the director met her for lunch and offered her a team of her own and more flexible hours, which helped {{BLANK}} her to stay for at least another two years.",
    "cn": "A：我們最優秀的工程師說她要去新加坡工作，那她現在真的會留下來嗎？ B：是的，主任和她共進午餐，提供她一個自己的團隊和更彈性的工時，這幫助【說服】她至少再留兩年。"
  },
  {
    "word": "persuasion",
    "pos": "n.",
    "cn_def": "說服；勸說",
    "en_def": "the act of making someone agree with you",
    "sentence": "A: How did the hotel finally agree to give us a lower price for the conference rooms during the busy holiday season? B: It took a lot of {{BLANK}}, but our manager explained that we would book fifty guest rooms every year, so the hotel decided a long-term customer was worth the discount.",
    "cn": "A：飯店最後怎麼會同意在忙碌的假期旺季給我們會議室較低的價格？ B：花了很多【說服】的功夫，但我們經理說明我們每年都會訂五十間客房，所以飯店認為一位長期客戶值得這個折扣。"
  },
  {
    "word": "credible",
    "pos": "adj.",
    "cn_def": "可信的；可靠的",
    "en_def": "able to be believed or trusted",
    "sentence": "A: Why did the reporter call so many different people before she wrote her story about the factory closing next year? B: She wanted to make sure her information came from {{BLANK}} sources, such as company managers and city officials, because readers would complain if the news turned out to be wrong.",
    "cn": "A：為什麼那位記者在寫工廠明年關閉的報導之前，打電話給這麼多不同的人？ B：她想確保她的資訊來自【可靠的】消息來源，例如公司經理和市府官員，因為如果新聞內容錯誤，讀者會抱怨。"
  },
  {
    "word": "credibility",
    "pos": "n.",
    "cn_def": "可信度；信譽",
    "en_def": "the quality of being trusted and believed",
    "sentence": "A: Why is the company so worried about a small mistake in the price list it sent to customers last week? B: Several clients already noticed the wrong numbers, and if we don't correct them quickly and apologize, we could lose our {{BLANK}} with buyers who have trusted us for many years.",
    "cn": "A：為什麼公司這麼擔心上週寄給客戶的價目表裡的一個小錯誤？ B：好幾位客戶已經注意到錯誤的數字，如果我們不快點更正並道歉，可能會失去在多年來信任我們的買家心中的【信譽】。"
  },
  {
    "word": "skeptical",
    "pos": "adj.",
    "cn_def": "懷疑的；持懷疑態度的",
    "en_def": "having doubts that something is true or useful",
    "sentence": "A: Did the board members like the idea of letting all the staff work from home three days a week? B: Most of them were {{BLANK}} at first because they worried that people would work less, but the results from a small test group last month changed their minds completely.",
    "cn": "A：董事會成員喜歡讓所有員工每週在家工作三天的想法嗎？ B：他們大多數起初都抱持【懷疑】態度，因為擔心大家工作量會減少，但上個月一個小型測試小組的結果完全改變了他們的想法。"
  },
  {
    "word": "skepticism",
    "pos": "n.",
    "cn_def": "懷疑態度；質疑",
    "en_def": "an attitude of doubting that something is true",
    "sentence": "A: How did the customers react when the company said its new phone battery could last a full week without charging? B: Many people reacted with {{BLANK}} because other brands had made similar promises before, so the company invited reporters to test the phones themselves for seven days.",
    "cn": "A：公司宣稱新手機電池不用充電就能用整整一週時，顧客有什麼反應？ B：很多人以【懷疑】的態度回應，因為其他品牌以前也做過類似的承諾，所以公司邀請記者親自測試手機七天。"
  },
  {
    "word": "devotion",
    "pos": "n.",
    "cn_def": "奉獻；忠誠；熱愛",
    "en_def": "great love, care, or loyalty to someone or something",
    "sentence": "A: Why did the restaurant owner give the head chef a special award at the staff party on Friday night? B: He has worked there for twenty years, often staying late to train young cooks and test new dishes, so the owner wanted to thank him for his {{BLANK}} to the business.",
    "cn": "A：為什麼餐廳老闆在週五晚上的員工派對上頒給主廚一個特別獎？ B：他在那裡工作了二十年，常常留到很晚訓練年輕廚師和試做新菜，所以老闆想感謝他對這家店的【奉獻】。"
  },
  {
    "word": "loyal",
    "pos": "adj.",
    "cn_def": "忠誠的；忠實的",
    "en_def": "always supporting a person, company, or idea",
    "sentence": "A: Why does the small coffee shop near our office give free drinks to some customers on their birthdays? B: The owner wants to thank the people who come in almost every morning, because {{BLANK}} customers like them keep the shop busy even when the big chain store across the street has a sale.",
    "cn": "A：為什麼我們辦公室附近那家小咖啡店會在某些顧客生日時送免費飲料？ B：老闆想感謝那些幾乎每天早上都來的人，因為像他們這樣的【忠實】顧客，即使在對街的大型連鎖店打折時也讓店裡生意興隆。"
  },
  {
    "word": "loyalty",
    "pos": "n.",
    "cn_def": "忠誠；忠誠度",
    "en_def": "the quality of always supporting someone or something",
    "sentence": "A: Why did the supermarket start giving points to shoppers every time they buy groceries with their membership card? B: The managers hope the program will build customer {{BLANK}}, because people who collect points usually come back every week instead of trying the new store that opened nearby.",
    "cn": "A：為什麼超市開始在顧客每次用會員卡買雜貨時給他們點數？ B：經理們希望這個計畫能建立顧客【忠誠度】，因為收集點數的人通常每週都會回來，而不是去試試附近新開的商店。"
  },
  {
    "word": "commit",
    "pos": "v.",
    "cn_def": "承諾；致力於",
    "en_def": "to promise to give your time or effort to something",
    "sentence": "A: Is the new partner company really serious about working with us on the hospital building project next year? B: Yes, they are ready to {{BLANK}} to the full three-year plan, and they have already agreed to send ten engineers and share half of the costs for the design work.",
    "cn": "A：新的合作公司真的認真要在明年和我們合作醫院大樓專案嗎？ B：是的，他們準備好【承諾】投入完整的三年計畫，而且已經同意派十位工程師並分擔一半的設計費用。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise or strong decision to do something",
    "sentence": "A: Why did the customers choose our cleaning company again this year, even though another company offered them lower prices? B: They told us they valued our {{BLANK}} to quality, since our team always arrives on time, uses safe products, and fixes any problem within one day of a complaint.",
    "cn": "A：為什麼客戶今年又選擇了我們的清潔公司，即使另一家公司提供更低的價格？ B：他們告訴我們，他們重視我們對品質的【承諾】，因為我們的團隊總是準時抵達、使用安全的產品，並在接到投訴一天內解決任何問題。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受",
    "en_def": "to agree to take or receive something",
    "sentence": "A: Did the young designer decide to take the job offer from the advertising agency in Taichung, or is she still thinking about it? B: She plans to {{BLANK}} it tomorrow morning, because the salary is good, the office is close to her parents' home, and the team works on interesting international projects.",
    "cn": "A：那位年輕設計師決定要去台中那家廣告公司工作了嗎？還是她還在考慮？ B：她打算明天早上【接受】這份工作，因為薪水不錯、辦公室離她父母家很近，而且團隊做的都是有趣的國際專案。"
  },
  {
    "word": "acceptance",
    "pos": "n.",
    "cn_def": "接受；錄取；認可",
    "en_def": "the act of agreeing to take or approve something",
    "sentence": "A: Have we heard back from the conference organizers about the research paper our team sent them in September? B: Yes, we received a letter of {{BLANK}} this morning, so two of our engineers will fly to Berlin in March to present the results to experts from around the world.",
    "cn": "A：我們有收到研討會主辦單位關於我們團隊九月寄去的研究論文的回覆嗎？ B：有，我們今天早上收到了【接受】通知函，所以我們的兩位工程師三月會飛往柏林，向世界各地的專家發表研究成果。"
  },
  {
    "word": "conviction",
    "pos": "n.",
    "cn_def": "堅定的信念；確信",
    "en_def": "a strong belief or opinion",
    "sentence": "A: Why did the director spend so much of the company's budget on training programs during such a difficult year? B: It is her deep {{BLANK}} that skilled workers are the key to long-term success, so she would rather cut office costs than stop helping employees learn new skills.",
    "cn": "A：為什麼主任在這麼艱難的一年裡，把公司這麼多預算花在培訓課程上？ B：她深深【確信】，有技能的員工是長期成功的關鍵，所以她寧願削減辦公室開支，也不願停止幫助員工學習新技能。"
  },
  {
    "word": "devout",
    "pos": "adj.",
    "cn_def": "虔誠的",
    "en_def": "believing strongly in a religion and following its rules",
    "sentence": "A: Why did the hotel staff prepare a quiet prayer room and special meals for the group of visitors arriving from Indonesia next week? B: The travel agent told us that many of the guests are {{BLANK}} Muslims who pray several times a day, so we want them to feel comfortable and respected during their stay.",
    "cn": "A：為什麼飯店員工為下週從印尼來的旅客團準備了一間安靜的祈禱室和特別餐點？ B：旅行社告訴我們，許多客人是一天祈禱好幾次的【虔誠】穆斯林，所以我們希望他們在住宿期間感到舒適並受到尊重。"
  },
  {
    "word": "ideology",
    "pos": "n.",
    "cn_def": "意識形態；思想體系；理念",
    "en_def": "a set of ideas and beliefs that guide a group or a system",
    "sentence": "A: Why did the two business partners decide to end their company after working together successfully for more than ten years? B: Their management {{BLANK}} became very different, because one wanted fast growth and big profits while the other cared more about small shops, fair pay, and protecting the environment.",
    "cn": "A：為什麼那兩位事業夥伴在成功合作十多年後決定結束他們的公司？ B：他們的經營【理念】變得非常不同，因為一個想要快速成長和高利潤，另一個則更在意小商店、公平的薪資和保護環境。"
  }
];

const MCQS = [
  {
    "q": "The founder started the charity with one simple idea. She holds the _____ that every child deserves a good education.",
    "options": [
      "acceptance",
      "skepticism",
      "belief",
      "loyalty"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The manager is leaving for a two-week trip abroad. She can _____ her assistant to handle all urgent calls carefully.",
    "options": [
      "assume",
      "commit",
      "accept",
      "trust"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Sales fell sharply last quarter, but the investors still support the CEO. They have strong _____ in her new plan for growth.",
    "options": [
      "skepticism",
      "faith",
      "opinion",
      "acceptance"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "After three months of English lessons, Mr. Lin speaks much better at meetings. His _____ has grown, and he now leads calls with overseas clients.",
    "options": [
      "confidence",
      "ideology",
      "doubt",
      "assumption"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The sales report shows strong results in every region. These numbers should _____ the board that the new strategy is working.",
    "options": [
      "assume",
      "convince",
      "accept",
      "trust"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The lawyer studied every page of the contract last night. She is _____ that the supplier broke the agreement.",
    "options": [
      "loyal",
      "devout",
      "convinced",
      "credible"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The engineer gave clear examples and real test data in his talk. His explanation was so _____ that everyone voted for his design.",
    "options": [
      "convincing",
      "uncertain",
      "skeptical",
      "devout"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The weather forecast shows heavy rain all weekend. There is some _____ about whether the outdoor company picnic will go ahead.",
    "options": [
      "credibility",
      "devotion",
      "loyalty",
      "doubt"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The airline has not announced a new schedule yet. Our arrival time in Seoul is still _____ because of the storm.",
    "options": [
      "loyal",
      "uncertain",
      "convincing",
      "devout"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "I checked the hotel booking twice this morning. I am _____ that our rooms are reserved for Friday and Saturday.",
    "options": [
      "devout",
      "loyal",
      "certain",
      "credible"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The builders could not give an exact date. Nobody can say with _____ when the new clinic will open to patients.",
    "options": [
      "loyalty",
      "devotion",
      "ideology",
      "certainty"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The email did not mention a dress code for the dinner. Most guests will _____ that business clothes are fine.",
    "options": [
      "assume",
      "trust",
      "persuade",
      "commit"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The budget was based on stable fuel prices. Unfortunately, that _____ was wrong, and shipping costs rose by twenty percent.",
    "options": [
      "devotion",
      "persuasion",
      "loyalty",
      "assumption"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Before buying new office chairs, the manager asked the staff. She wanted each person's honest _____ about comfort and price.",
    "options": [
      "opinion",
      "ideology",
      "devotion",
      "certainty"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The new phone has many useful features. The sales staff will try to _____ customers to buy the more expensive model.",
    "options": [
      "assume",
      "accept",
      "persuade",
      "commit"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The client did not want to change suppliers at first. After weeks of gentle _____, she finally agreed to try our service.",
    "options": [
      "skepticism",
      "persuasion",
      "certainty",
      "ideology"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Readers trust this magazine because of its careful research. Its reporters only use _____ sources such as official reports and experts.",
    "options": [
      "devout",
      "uncertain",
      "credible",
      "skeptical"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company printed the wrong prices in its catalog twice this year. These mistakes have hurt its _____ with long-time buyers.",
    "options": [
      "assumption",
      "credibility",
      "conviction",
      "devotion"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The manager has heard many big promises from software sellers before. She is _____ about claims that the new program will double sales.",
    "options": [
      "loyal",
      "devout",
      "convincing",
      "skeptical"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The advertisement says the cream removes wrinkles in one day. Many shoppers have reacted to this claim with _____.",
    "options": [
      "skepticism",
      "loyalty",
      "commitment",
      "devotion"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Ms. Chen has cared for the hotel garden for thirty years. The owner praised her _____ to the job at the staff party.",
    "options": [
      "assumption",
      "devotion",
      "doubt",
      "skepticism"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Mr. Park has bought his coffee at the same shop for ten years. He is one of its most _____ customers.",
    "options": [
      "skeptical",
      "uncertain",
      "credible",
      "loyal"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The airline gives free upgrades to frequent travelers. This rewards program is designed to build customer _____ over many years.",
    "options": [
      "loyalty",
      "assumption",
      "skepticism",
      "doubt"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The new partner has agreed to the project budget. Both companies will _____ to a three-year contract next month.",
    "options": [
      "convince",
      "persuade",
      "commit",
      "assume"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Our factory checks every product twice before shipping. This shows our strong _____ to quality and customer safety.",
    "options": [
      "commitment",
      "skepticism",
      "assumption",
      "doubt"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The hotel offered Mr. Lee a manager position in Kaohsiung. He plans to _____ the offer because the salary is excellent.",
    "options": [
      "persuade",
      "assume",
      "convince",
      "accept"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The university sent Amy an email last Friday. It was a letter of _____ for its international business program.",
    "options": [
      "ideology",
      "acceptance",
      "devotion",
      "skepticism"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The CEO spoke about the new environmental plan with great _____. Everyone could see that she truly believed in it.",
    "options": [
      "doubt",
      "skepticism",
      "conviction",
      "assumption"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Mrs. Wang is a _____ Buddhist who visits the temple every morning. She never eats meat, even at business dinners.",
    "options": [
      "skeptical",
      "uncertain",
      "convincing",
      "devout"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The two political parties have very different ideas about taxes. Their _____ shapes how they plan to spend public money.",
    "options": [
      "acceptance",
      "doubt",
      "ideology",
      "certainty"
    ],
    "answer": 2,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "belief": {
    "pos": "n.",
    "en_def": "an idea that you accept as true",
    "cn_def": "信念；相信"
  },
  "believer": {
    "pos": "n.",
    "en_def": "a person who strongly thinks that something is good or true",
    "cn_def": "信奉者；深信…的人"
  },
  "trust": {
    "pos": "v.",
    "en_def": "to believe that someone is honest or will do the right thing",
    "cn_def": "信任；信賴"
  },
  "faith": {
    "pos": "n.",
    "en_def": "strong trust in someone or something",
    "cn_def": "信心；信任；信仰"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "信心；自信"
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe that something is true",
    "cn_def": "說服；使相信"
  },
  "convinced": {
    "pos": "adj.",
    "en_def": "completely sure that something is true",
    "cn_def": "確信的；深信的"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "able to make people believe something is true",
    "cn_def": "令人信服的"
  },
  "doubt": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "懷疑；疑慮"
  },
  "uncertain": {
    "pos": "adj.",
    "en_def": "not sure or not clearly known",
    "cn_def": "不確定的"
  },
  "certain": {
    "pos": "adj.",
    "en_def": "completely sure",
    "cn_def": "確定的；肯定的"
  },
  "certainty": {
    "pos": "n.",
    "en_def": "the state of being completely sure",
    "cn_def": "確定；確信"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without checking it",
    "cn_def": "假定；以為"
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "假設；設想"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what you think or feel about something",
    "cn_def": "意見；看法"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服；勸說"
  },
  "persuasion": {
    "pos": "n.",
    "en_def": "the act of making someone agree with you",
    "cn_def": "說服；勸說"
  },
  "credible": {
    "pos": "adj.",
    "en_def": "able to be believed or trusted",
    "cn_def": "可信的；可靠的"
  },
  "credibility": {
    "pos": "n.",
    "en_def": "the quality of being trusted and believed",
    "cn_def": "可信度；信譽"
  },
  "skeptical": {
    "pos": "adj.",
    "en_def": "having doubts that something is true or useful",
    "cn_def": "懷疑的；持懷疑態度的"
  },
  "skepticism": {
    "pos": "n.",
    "en_def": "an attitude of doubting that something is true",
    "cn_def": "懷疑態度；質疑"
  },
  "devotion": {
    "pos": "n.",
    "en_def": "great love, care, or loyalty to someone or something",
    "cn_def": "奉獻；忠誠；熱愛"
  },
  "loyal": {
    "pos": "adj.",
    "en_def": "always supporting a person, company, or idea",
    "cn_def": "忠誠的；忠實的"
  },
  "loyalty": {
    "pos": "n.",
    "en_def": "the quality of always supporting someone or something",
    "cn_def": "忠誠；忠誠度"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to give your time or effort to something",
    "cn_def": "承諾；致力於"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise or strong decision to do something",
    "cn_def": "承諾；投入"
  },
  "accept": {
    "pos": "v.",
    "en_def": "to agree to take or receive something",
    "cn_def": "接受"
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the act of agreeing to take or approve something",
    "cn_def": "接受；錄取；認可"
  },
  "conviction": {
    "pos": "n.",
    "en_def": "a strong belief or opinion",
    "cn_def": "堅定的信念；確信"
  },
  "devout": {
    "pos": "adj.",
    "en_def": "believing strongly in a religion and following its rules",
    "cn_def": "虔誠的"
  },
  "ideology": {
    "pos": "n.",
    "en_def": "a set of ideas and beliefs that guide a group or a system",
    "cn_def": "意識形態；思想體系；理念"
  }
};

const EXTRA_GLOSSES = {};
