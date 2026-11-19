// Topic 400 Quiz Data: Thank You 感謝
// Source word list: https://www.examword.com/group-topic/thank-you — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T400 - Thank You 感謝",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "gratitude",
    "pos": "n.",
    "cn_def": "感激；感謝",
    "en_def": "the feeling of being thankful",
    "sentence": "A: The new interns stayed late every night last week to help us finish the annual sales report before the deadline, so how should we thank them properly? B: Let's take them out for lunch on Friday and give each of them a small card to show our {{BLANK}} for their hard work and positive attitude.",
    "cn": "A：新來的實習生上週每天晚上都留下來加班，幫我們在截止日前完成年度銷售報告，我們該怎麼好好謝謝他們？ B：我們星期五帶他們去吃午餐，並給每個人一張小卡片，表達我們對他們的努力和積極態度的【感激】。"
  },
  {
    "word": "appreciation",
    "pos": "n.",
    "cn_def": "感謝；感激",
    "en_def": "the feeling of thanks for something good",
    "sentence": "A: Our biggest client from Singapore just signed a three-year contract with us, and the manager wants to do something special for the team that worked on the deal. What do you suggest? B: She could hold a small dinner party at the hotel restaurant next week as a sign of {{BLANK}} for everyone's long hours and careful preparation.",
    "cn": "A：我們來自新加坡的最大客戶剛和我們簽了三年合約，經理想為負責這筆交易的團隊做點特別的事。你有什麼建議？ B：她可以下週在飯店餐廳辦個小型晚宴，作為對大家長時間工作和用心準備的【感謝】。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感謝；感激",
    "en_def": "to be thankful for something",
    "sentence": "A: I know you are very busy preparing for the trade show in Taichung, but could you check the product brochure for spelling mistakes before we send it to the printer this afternoon? B: Sure, I'll look at it right after my meeting, and I really {{BLANK}} that you gave me enough time to read it carefully.",
    "cn": "A：我知道你正忙著準備台中的商展，但你能在我們今天下午送印之前，幫忙檢查產品手冊的拼字錯誤嗎？ B：當然，我開完會就馬上看，也很【感謝】你給我足夠的時間仔細閱讀。"
  },
  {
    "word": "grateful",
    "pos": "adj.",
    "cn_def": "感激的",
    "en_def": "feeling thankful to someone",
    "sentence": "A: How did your first week at the new branch office go, and did anyone help you get used to the computer system and the daily routine there? B: It went well because my supervisor spent two whole afternoons showing me everything, and I am very {{BLANK}} to her for being so patient with all my questions.",
    "cn": "A：你在新分公司的第一週過得如何？有人幫你熟悉那裡的電腦系統和日常工作流程嗎？ B：很順利，因為我的主管花了整整兩個下午教我所有事情，我非常【感激】她如此耐心地回答我所有的問題。"
  },
  {
    "word": "thankful",
    "pos": "adj.",
    "cn_def": "感謝的；慶幸的",
    "en_def": "glad and relieved about something",
    "sentence": "A: I heard the heavy rain flooded the basement of your warehouse last night, so did you lose a lot of the stock that was stored down there? B: Luckily, most of the boxes were already moved upstairs yesterday afternoon, so we are {{BLANK}} that only a few cheap items were damaged by the water.",
    "cn": "A：我聽說昨晚的大雨淹了你們倉庫的地下室，存放在那裡的庫存損失很多嗎？ B：幸好大部分箱子昨天下午已經搬到樓上了，所以我們很【慶幸】只有幾樣便宜的物品被水弄壞。"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "cn_def": "承認；確認收到",
    "en_def": "to say that something is true or that you received it",
    "sentence": "A: The customer who complained about the late delivery is still very angry, and she says nobody from our company has contacted her since Monday. What should I do first? B: Call her this morning, {{BLANK}} that we made a mistake with her order, and then offer her free shipping on her next purchase to keep her as a customer.",
    "cn": "A：那位抱怨送貨延遲的客戶還是很生氣，她說從星期一以來公司都沒有人聯絡她。我該先做什麼？ B：今天早上打電話給她，【承認】我們在她的訂單上犯了錯，然後提供她下次購物免運費，以留住這位客戶。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "表揚；認可",
    "en_def": "public thanks or praise for something done",
    "sentence": "A: Why is everyone in the marketing department so excited today, and why are there flowers and balloons all over Linda's desk this morning? B: She received an award from the company president in {{BLANK}} of her successful advertising campaign, which helped increase our online sales by thirty percent last quarter.",
    "cn": "A：為什麼行銷部的每個人今天都這麼興奮？今天早上Linda的桌上為什麼到處都是花和氣球？ B：她獲得了公司總裁頒發的獎項，以【表彰】她成功的廣告活動，那次活動讓我們上一季的網路銷售增加了百分之三十。"
  },
  {
    "word": "praise",
    "pos": "n.",
    "cn_def": "讚美；稱讚",
    "en_def": "words that say someone or something is good",
    "sentence": "A: Did the hotel guests say anything about the new breakfast menu that the chef introduced at the beginning of this month? B: Yes, many guests wrote online reviews full of {{BLANK}} for the fresh fruit and homemade bread, so the manager plans to keep the menu and thank the kitchen staff at the next meeting.",
    "cn": "A：飯店客人對主廚這個月初推出的新早餐菜單有什麼評價嗎？ B：有，許多客人在網路上寫了充滿【讚美】的評論，稱讚新鮮水果和自製麵包，所以經理打算保留這份菜單，並在下次會議上感謝廚房員工。"
  },
  {
    "word": "compliment",
    "pos": "n.",
    "cn_def": "讚美；恭維",
    "en_def": "a nice thing you say about someone",
    "sentence": "A: You look really happy after the meeting with the visiting buyers from Japan, so did the product presentation go as well as you hoped? B: It went even better, because the head buyer paid me a {{BLANK}} on my clear explanation of the new features, and she asked for a price list for a large order.",
    "cn": "A：你和來訪的日本買家開完會後看起來很開心，產品簡報進行得和你期待的一樣順利嗎？ B：比預期還好，因為首席買家給了我【讚美】，稱讚我對新功能的解說很清楚，還向我索取大量訂購的價目表。"
  },
  {
    "word": "blessing",
    "pos": "n.",
    "cn_def": "幸事；恩賜",
    "en_def": "something lucky that helps you",
    "sentence": "A: Was it difficult to move the whole office to the new building during the busy holiday season, especially with so many orders to process? B: It was hard, but the extra workers from the moving company were a real {{BLANK}}, because they packed all the files and computers in one day without any problems.",
    "cn": "A：在忙碌的假期旺季把整間辦公室搬到新大樓困難嗎？尤其還有那麼多訂單要處理。 B：很辛苦，但搬家公司派來的額外人手真是一大【幸事】，因為他們一天內就把所有文件和電腦打包好，沒有出任何問題。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "功勞；讚揚",
    "en_def": "praise for something you did",
    "sentence": "A: The project was finished two weeks early and under budget, so the director wants to know who deserves the most thanks for this great result. B: Most of the {{BLANK}} should go to Kevin, because he organized the schedule, solved the supplier problems, and kept everyone on the team working together.",
    "cn": "A：這個專案提早兩週完成而且沒有超出預算，所以主任想知道誰最值得為這個好結果受到感謝。 B：大部分的【功勞】應該歸於Kevin，因為他安排了時程、解決了供應商的問題，並讓團隊每個人同心協力。"
  },
  {
    "word": "owe",
    "pos": "v.",
    "cn_def": "欠；應該給予",
    "en_def": "to need to give something back to someone",
    "sentence": "A: Thank you so much for covering my shift at the front desk last Saturday when my daughter suddenly got sick and I had to take her to the clinic. B: No problem at all, but you {{BLANK}} me a coffee now, and maybe you can help me when I go on vacation next month.",
    "cn": "A：非常謝謝你上週六在我女兒突然生病、我必須帶她去診所時，幫我代櫃台的班。 B：完全沒問題，不過你現在【欠】我一杯咖啡，也許下個月我去度假時你可以幫我代班。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達",
    "en_def": "to show a feeling in words or actions",
    "sentence": "A: Our partners in Germany helped us solve a serious shipping problem last month, so how can we thank them in a professional way? B: The manager should write a formal letter to {{BLANK}} our thanks for their quick help, and we could also send them a gift box of Taiwanese tea for their office.",
    "cn": "A：我們的德國合作夥伴上個月幫我們解決了一個嚴重的運送問題，我們該如何以專業的方式感謝他們？ B：經理應該寫一封正式信函來【表達】我們對他們迅速協助的謝意，我們也可以寄一盒台灣茶禮盒到他們的辦公室。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to answer or react to something",
    "sentence": "A: We received dozens of thank-you cards and emails from customers after our charity event last weekend, so should we answer every one of them? B: Yes, we should {{BLANK}} to each message within a week, because a short personal note shows that we value their kind words and their support for our company.",
    "cn": "A：上週末慈善活動後，我們收到了幾十張顧客寄來的感謝卡和電子郵件，我們應該每一封都回覆嗎？ B：是的，我們應該在一週內【回應】每則訊息，因為一張簡短的個人便條能表示我們重視他們的好話和對公司的支持。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆；答覆",
    "en_def": "to answer a letter, email or question",
    "sentence": "A: The supplier sent us a nice email to thank us for paying their invoice early, and they also offered a small discount on our next order. B: I'll {{BLANK}} to them this afternoon to accept the offer, and I will also mention that we are happy to continue working with them next year.",
    "cn": "A：供應商寄了一封很客氣的電子郵件，感謝我們提早支付他們的發票，還提供下次訂單的小折扣。 B：我今天下午會【回覆】他們接受這項優惠，也會提到我們很樂意明年繼續和他們合作。"
  },
  {
    "word": "return",
    "pos": "v.",
    "cn_def": "回報；回饋",
    "en_def": "to do the same kind thing back for someone",
    "sentence": "A: My neighbor helped me carry all the heavy boxes up to my new apartment on Sunday, and he would not take any money for his time. B: That was really nice of him, so maybe you could {{BLANK}} the favor by inviting him to dinner or helping him when he needs something done.",
    "cn": "A：我鄰居星期天幫我把所有重箱子搬上我的新公寓，而且他不肯收任何錢。 B：他真好，也許你可以邀請他吃晚餐，或在他需要幫忙時協助他，來【回報】這份人情。"
  },
  {
    "word": "kindness",
    "pos": "n.",
    "cn_def": "善意；仁慈",
    "en_def": "the quality of being kind and helpful",
    "sentence": "A: When my flight was cancelled in Tokyo last month, a hotel worker drove me to the airport early the next morning on her day off. B: That is amazing, and you should write a review on the hotel's website to thank her for her {{BLANK}}, because her manager will probably see it and reward her.",
    "cn": "A：上個月我在東京的班機被取消時，一位飯店員工在她休假日的隔天一大早開車載我去機場。 B：太了不起了，你應該在飯店網站上寫評論感謝她的【善意】，因為她的主管很可能會看到並獎勵她。"
  },
  {
    "word": "favor",
    "pos": "n.",
    "cn_def": "幫忙；恩惠",
    "en_def": "something kind you do to help someone",
    "sentence": "A: I have to leave the office early today for a dentist appointment, but the courier is supposed to bring an important package around four o'clock. B: I can do you a {{BLANK}} and sign for it, so don't worry, and I'll put the package on your desk before I go home tonight.",
    "cn": "A：我今天要提早離開辦公室去看牙醫，但快遞員大約四點應該會送來一個重要包裹。 B：我可以幫你一個【忙】替你簽收，別擔心，我今晚回家前會把包裹放在你桌上。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；支援",
    "en_def": "help and encouragement",
    "sentence": "A: The new branch in Kaohsiung had a difficult first year with very few customers, so how did the team manage to stay positive and keep going? B: The head office gave them strong {{BLANK}}, such as extra training, a bigger advertising budget, and regular visits from senior managers, and the staff are very thankful for it.",
    "cn": "A：高雄新分店第一年很艱難，顧客很少，團隊是怎麼保持積極並繼續撐下去的？ B：總公司給了他們強力的【支持】，例如額外的訓練、更多的廣告預算和高階主管的定期探訪，員工們對此非常感謝。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵",
    "en_def": "words or actions that give someone confidence",
    "sentence": "A: You gave a great speech at the conference yesterday, but you told me last month that you were very nervous about speaking in front of large groups. B: I was nervous, but my coworkers listened to me practice every day and gave me so much {{BLANK}} that I finally felt confident enough to do it.",
    "cn": "A：你昨天在研討會上的演講很棒，但你上個月告訴我你很害怕在一大群人面前說話。 B：我是很緊張，但我的同事每天聽我練習，給了我很多【鼓勵】，讓我終於有足夠的信心去做。"
  },
  {
    "word": "polite",
    "pos": "adj.",
    "cn_def": "有禮貌的",
    "en_def": "having good manners",
    "sentence": "A: Some of the new sales assistants forget to thank customers at the end of a purchase, and a few shoppers have complained about it this week. B: Let's remind them at tomorrow's morning meeting that it is always {{BLANK}} to smile, say thank you, and wish customers a nice day, even when the store is very busy.",
    "cn": "A：有些新來的銷售助理在顧客結帳後忘了道謝，這週已經有幾位顧客抱怨了。 B：我們在明天的晨會提醒他們，即使店裡很忙，微笑、道謝並祝顧客有美好的一天永遠是【有禮貌的】。"
  },
  {
    "word": "heartfelt",
    "pos": "adj.",
    "cn_def": "衷心的；真摯的",
    "en_def": "felt very strongly and truly",
    "sentence": "A: Mr. Chen is retiring after thirty years with the company, and the staff want to give him something more personal than a simple gift card. B: How about a photo album with a {{BLANK}} message from every employee, describing how he helped them grow and what they will remember most about working with him?",
    "cn": "A：陳先生在公司服務三十年後即將退休，員工們想送他比禮物卡更有心意的東西。 B：送一本相簿怎麼樣？裡面有每位員工寫的【衷心的】留言，描述他如何幫助他們成長，以及和他共事時最難忘的事。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠摯的",
    "en_def": "honest and really meant",
    "sentence": "A: I made a big mistake on the invoice I sent to our client yesterday, and I charged them twice for the same shipment by accident. B: Call them right away, offer your {{BLANK}} apologies, and promise to correct the invoice today, because clients usually forgive mistakes when you are honest and act quickly.",
    "cn": "A：我昨天寄給客戶的發票出了大錯，不小心把同一批貨收了兩次錢。 B：馬上打電話給他們，表達你【真誠的】歉意，並承諾今天更正發票，因為只要你誠實且迅速處理，客戶通常會原諒錯誤。"
  },
  {
    "word": "genuine",
    "pos": "adj.",
    "cn_def": "真正的；真心的",
    "en_def": "real and true, not pretended",
    "sentence": "A: Do you think the customers really liked our new coffee shop, or were they just being nice when they filled out the survey forms? B: I think their interest was {{BLANK}}, because many of them came back several times during the first month and brought their friends and coworkers with them.",
    "cn": "A：你覺得顧客是真的喜歡我們的新咖啡店，還是他們填問卷時只是出於客氣？ B：我認為他們的興趣是【真心的】，因為很多人在第一個月內回來了好幾次，還帶著朋友和同事一起來。"
  },
  {
    "word": "deeply",
    "pos": "adv.",
    "cn_def": "深深地；非常",
    "en_def": "very much; strongly",
    "sentence": "A: How did the staff react when the company decided to give everyone an extra day off and a bonus after the busy holiday season? B: Most of them were {{BLANK}} moved by the gesture, and several people wrote thank-you notes to the manager saying that they felt valued for the first time in years.",
    "cn": "A：公司決定在忙碌的假期旺季後給大家多放一天假並發獎金時，員工有什麼反應？ B：大部分人都【深深地】被這份心意感動，有幾個人寫了感謝函給經理，說他們多年來第一次覺得被重視。"
  },
  {
    "word": "truly",
    "pos": "adv.",
    "cn_def": "真正地；真的",
    "en_def": "really; very",
    "sentence": "A: The volunteers from the local university helped us set up the booth, hand out flyers, and answer visitors' questions at the food fair all weekend. B: We are {{BLANK}} lucky to have such helpful students, so let's write each of them a reference letter that they can use when they apply for jobs.",
    "cn": "A：當地大學的志工整個週末都在美食展幫我們搭攤位、發傳單和回答訪客的問題。 B：我們【真的】很幸運能有這麼熱心的學生，所以我們為他們每個人寫一封推薦信，讓他們找工作時可以用。"
  },
  {
    "word": "warmly",
    "pos": "adv.",
    "cn_def": "熱情地；親切地",
    "en_def": "in a friendly and kind way",
    "sentence": "A: How was your visit to the factory in Vietnam last week, and did the local managers take good care of you during your stay? B: They welcomed me very {{BLANK}} at the airport, took me to a famous restaurant for dinner, and spent two full days showing me every part of the production line.",
    "cn": "A：你上週去越南工廠參訪得如何？當地主管在你停留期間有好好照顧你嗎？ B：他們在機場非常【熱情地】迎接我，帶我去一家有名的餐廳吃晚餐，還花了整整兩天帶我看生產線的每個部分。"
  },
  {
    "word": "gracious",
    "pos": "adj.",
    "cn_def": "有風度的；親切有禮的",
    "en_def": "kind, polite and calm, even in a hard situation",
    "sentence": "A: Our team lost the bid for the shopping mall project to a smaller company, so how did our director react when she heard the news? B: She was very {{BLANK}} about it, congratulated the other company in a short email, and thanked our team for working so hard on the proposal anyway.",
    "cn": "A：我們團隊輸掉了購物中心專案的投標，被一家較小的公司拿走了，主任聽到消息時有什麼反應？ B：她對此非常【有風度】，在一封簡短的電子郵件中恭喜對方公司，並仍然感謝我們團隊為提案這麼努力。"
  },
  {
    "word": "indebted",
    "pos": "adj.",
    "cn_def": "感激的；受惠的",
    "en_def": "feeling very thankful because someone helped you a lot",
    "sentence": "A: I heard your former manager recommended you for this new position at headquarters, even though she was sad to lose you from her team. B: Yes, I am deeply {{BLANK}} to her, because she trained me for three years, gave me important projects, and always believed that I could become a leader.",
    "cn": "A：我聽說你以前的主管推薦你擔任總公司的這個新職位，即使她很捨不得你離開她的團隊。 B：是的，我非常【感激】她，因為她訓練了我三年、給我重要的專案，而且一直相信我能成為領導者。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮幸；榮譽",
    "en_def": "something that makes you proud and pleased",
    "sentence": "A: The hotel association invited our general manager to give the opening speech at its annual dinner in Taipei next month, didn't it? B: Yes, and she said it is a great {{BLANK}} to be chosen, so she is already preparing a speech to thank the guests and the hard-working staff in our industry.",
    "cn": "A：飯店公會邀請我們的總經理在下個月台北的年度晚宴上致開幕詞，對吧？ B：對，她說能被選上是莫大的【榮幸】，所以她已經在準備演講，要感謝來賓和我們業界辛勤工作的員工。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；敬意",
    "en_def": "polite and kind treatment that shows you value someone",
    "sentence": "A: Why do so many employees want to work in Mr. Lin's department, even though the workload there is usually much heavier than in other teams? B: He treats every worker with {{BLANK}}, listens carefully to their ideas, and always thanks them in public when they do a good job on a project.",
    "cn": "A：為什麼這麼多員工想在林先生的部門工作，即使那裡的工作量通常比其他團隊重得多？ B：他以【尊重】對待每位員工，仔細聆聽他們的想法，而且每當他們專案做得好時，總是公開感謝他們。"
  },
  {
    "word": "acknowledgment",
    "pos": "n.",
    "cn_def": "確認（收到）；致謝",
    "en_def": "a message saying that something was received",
    "sentence": "A: We sent the signed contract to the law firm by express mail on Tuesday, but nobody there has told us whether they received it. B: Let's call their office this morning and ask them to send us a written {{BLANK}} of receipt, so we have proof that the documents arrived safely.",
    "cn": "A：我們星期二用快遞把簽好的合約寄給律師事務所，但那邊還沒有人告訴我們是否收到了。 B：我們今天早上打電話到他們辦公室，請他們寄給我們一份書面的收件【確認】，這樣我們就有文件安全送達的證明。"
  }
];

const MCQS = [
  {
    "q": "The hospital received a large donation from a former patient. She wrote that the gift was a sign of her _____ to the nurses.",
    "options": [
      "gratitude",
      "credit",
      "honor",
      "favor"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "All guests at the year-end party received a small gift box. The company gave it in _____ of their loyal business this year.",
    "options": [
      "kindness",
      "encouragement",
      "appreciation",
      "blessing"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Thank you for sending the updated price list so quickly. We _____ your help with this urgent order from our Osaka office.",
    "options": [
      "owe",
      "appreciate",
      "reply",
      "respond"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The new employee was _____ for the chance to attend the training course in Singapore. She thanked her manager in a short email.",
    "options": [
      "polite",
      "genuine",
      "gracious",
      "grateful"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Nobody was hurt when the fire alarm went off in the factory. The workers were _____ that the emergency exits were clearly marked.",
    "options": [
      "sincere",
      "heartfelt",
      "thankful",
      "polite"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ receipt of this email by the end of the day. We need to know that the new safety rules have reached every department.",
    "options": [
      "acknowledge",
      "express",
      "respond",
      "owe"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The engineer received a gold medal at the annual meeting. It was given in _____ of her twenty years of excellent service.",
    "options": [
      "kindness",
      "compliment",
      "blessing",
      "recognition"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The critic's review was full of _____ for the new restaurant's seafood dishes. Bookings doubled in the week after it was published.",
    "options": [
      "credit",
      "praise",
      "favor",
      "acknowledgment"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A customer paid the waiter a _____ on his excellent service. The manager later shared the comment with the whole team.",
    "options": [
      "compliment",
      "credit",
      "respect",
      "support"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The sales manager refused to take all the _____ for the record profits. She said the success belonged to her whole team.",
    "options": [
      "honor",
      "kindness",
      "credit",
      "support"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "You helped me finish the report on time last night. I _____ you lunch, so let me know which restaurant you prefer.",
    "options": [
      "return",
      "owe",
      "reply",
      "express"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The mayor gave a short speech at the ceremony. He wanted to _____ his thanks to all the volunteers who cleaned the beach.",
    "options": [
      "owe",
      "reply",
      "respond",
      "express"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our customer service team tries to _____ to every complaint within twenty-four hours. Quick answers help us keep our customers happy.",
    "options": [
      "owe",
      "express",
      "respond",
      "appreciate"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "I am still waiting for the supplier to _____ to my email about the delivery date. I will call their office if I hear nothing today.",
    "options": [
      "reply",
      "owe",
      "express",
      "acknowledge"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Our neighbor's company lent us their meeting room last month. We would like to _____ the favor by inviting their staff to our event.",
    "options": [
      "owe",
      "reply",
      "express",
      "return"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The hotel staff showed great _____ to the tourists who lost their luggage. They gave them free toiletries and fresh clothes.",
    "options": [
      "credit",
      "kindness",
      "compliment",
      "acknowledgment"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Could you do me a _____ and send these samples to the client? I have to leave early for a meeting downtown.",
    "options": [
      "favor",
      "credit",
      "praise",
      "compliment"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The charity could not have opened the new shelter without financial _____ from local businesses. Many companies donated money and building materials.",
    "options": [
      "honor",
      "compliment",
      "support",
      "kindness"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The coach's words of _____ helped the nervous players stay calm before the final. They went on to win the game by two points.",
    "options": [
      "acknowledgment",
      "encouragement",
      "credit",
      "recognition"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Even when customers are rude, our staff must remain calm and _____. Good manners always leave a better impression of the company.",
    "options": [
      "indebted",
      "heartfelt",
      "grateful",
      "polite"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please accept our _____ apologies for the delay in shipping your order. We will refund the delivery fee in full.",
    "options": [
      "indebted",
      "thankful",
      "sincere",
      "gracious"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The bag sold at the market looked expensive, but it was not a _____ designer product. The police later found many fake copies.",
    "options": [
      "genuine",
      "polite",
      "grateful",
      "thankful"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The custom of writing thank-you notes is _____ rooted in our company culture. New staff learn it during their first week.",
    "options": [
      "warmly",
      "politely",
      "loudly",
      "deeply"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new product launch was a _____ remarkable success for the company. Sales in the first week were three times higher than expected.",
    "options": [
      "deeply",
      "truly",
      "warmly",
      "politely"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The visiting buyers were _____ welcomed by the factory manager at the gate. She then gave them a tour of the production line.",
    "options": [
      "warmly",
      "deeply",
      "lately",
      "partly"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The losing candidate gave a _____ speech after the election results were announced. She congratulated the winner and thanked her supporters.",
    "options": [
      "indebted",
      "thankful",
      "gracious",
      "grateful"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The small company is _____ to its first investor for years of financial help. Without her money, it would have closed in 2020.",
    "options": [
      "genuine",
      "indebted",
      "sincere",
      "heartfelt"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "It is a great _____ to welcome the president of our partner company today. Please join me in giving him a warm round of applause.",
    "options": [
      "credit",
      "favor",
      "kindness",
      "honor"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Employees should treat their coworkers with _____, whatever their position in the company. Rude behavior will not be accepted in this office.",
    "options": [
      "credit",
      "praise",
      "respect",
      "acknowledgment"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The bank sent a letter of _____ after it received our loan application. The letter said a decision would be made within ten days.",
    "options": [
      "acknowledgment",
      "kindness",
      "encouragement",
      "blessing"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "gratitude": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感激；感謝"
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "the feeling of thanks for something good",
    "cn_def": "感謝；感激"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感謝；感激"
  },
  "grateful": {
    "pos": "adj.",
    "en_def": "feeling thankful to someone",
    "cn_def": "感激的"
  },
  "thankful": {
    "pos": "adj.",
    "en_def": "glad and relieved about something",
    "cn_def": "感謝的；慶幸的"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to say that something is true or that you received it",
    "cn_def": "承認；確認收到"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "public thanks or praise for something done",
    "cn_def": "表揚；認可"
  },
  "praise": {
    "pos": "n.",
    "en_def": "words that say someone or something is good",
    "cn_def": "讚美；稱讚"
  },
  "compliment": {
    "pos": "n.",
    "en_def": "a nice thing you say about someone",
    "cn_def": "讚美；恭維"
  },
  "blessing": {
    "pos": "n.",
    "en_def": "something lucky that helps you",
    "cn_def": "幸事；恩賜"
  },
  "credit": {
    "pos": "n.",
    "en_def": "praise for something you did",
    "cn_def": "功勞；讚揚"
  },
  "owe": {
    "pos": "v.",
    "en_def": "to need to give something back to someone",
    "cn_def": "欠；應該給予"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling in words or actions",
    "cn_def": "表達"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to answer or react to something",
    "cn_def": "回應；回覆"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer a letter, email or question",
    "cn_def": "回覆；答覆"
  },
  "return": {
    "pos": "v.",
    "en_def": "to do the same kind thing back for someone",
    "cn_def": "回報；回饋"
  },
  "kindness": {
    "pos": "n.",
    "en_def": "the quality of being kind and helpful",
    "cn_def": "善意；仁慈"
  },
  "favor": {
    "pos": "n.",
    "en_def": "something kind you do to help someone",
    "cn_def": "幫忙；恩惠"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement",
    "cn_def": "支持；支援"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence",
    "cn_def": "鼓勵"
  },
  "polite": {
    "pos": "adj.",
    "en_def": "having good manners",
    "cn_def": "有禮貌的"
  },
  "heartfelt": {
    "pos": "adj.",
    "en_def": "felt very strongly and truly",
    "cn_def": "衷心的；真摯的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and really meant",
    "cn_def": "真誠的；誠摯的"
  },
  "genuine": {
    "pos": "adj.",
    "en_def": "real and true, not pretended",
    "cn_def": "真正的；真心的"
  },
  "deeply": {
    "pos": "adv.",
    "en_def": "very much; strongly",
    "cn_def": "深深地；非常"
  },
  "truly": {
    "pos": "adv.",
    "en_def": "really; very",
    "cn_def": "真正地；真的"
  },
  "warmly": {
    "pos": "adv.",
    "en_def": "in a friendly and kind way",
    "cn_def": "熱情地；親切地"
  },
  "gracious": {
    "pos": "adj.",
    "en_def": "kind, polite and calm, even in a hard situation",
    "cn_def": "有風度的；親切有禮的"
  },
  "indebted": {
    "pos": "adj.",
    "en_def": "feeling very thankful because someone helped you a lot",
    "cn_def": "感激的；受惠的"
  },
  "honor": {
    "pos": "n.",
    "en_def": "something that makes you proud and pleased",
    "cn_def": "榮幸；榮譽"
  },
  "respect": {
    "pos": "n.",
    "en_def": "polite and kind treatment that shows you value someone",
    "cn_def": "尊重；敬意"
  },
  "acknowledgment": {
    "pos": "n.",
    "en_def": "a message saying that something was received",
    "cn_def": "確認（收到）；致謝"
  }
};

const EXTRA_GLOSSES = {};
