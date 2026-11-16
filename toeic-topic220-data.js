// Topic 220 Quiz Data: Life 生活；生命
// Source word list: https://www.examword.com/group-topic/life — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T220 - Life 生活；生命",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "boring",
    "pos": "adj.",
    "cn_def": "無聊的",
    "en_def": "not interesting; dull",
    "sentence": "A: How was the three-hour training session about the new accounting software that you attended at the head office yesterday afternoon? B: To be honest, it was quite {{BLANK}}, because the trainer just read every slide aloud and never gave us a chance to practice on the computers ourselves.",
    "cn": "A：你昨天下午在總公司參加的那場三小時新會計軟體訓練課程怎麼樣？ B：老實說，相當【無聊】，因為講師只是把每張投影片念出來，從來沒給我們機會自己在電腦上練習。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的",
    "en_def": "different from usual and more important",
    "sentence": "A: Why did the manager book a private room at the Italian restaurant downtown for Friday evening instead of ordering lunch at the office as usual? B: It's a {{BLANK}} dinner to celebrate Ms. Lin's twenty years with the company, so she wanted everyone to enjoy a relaxed meal together after work.",
    "cn": "A：經理為什麼在市中心的義大利餐廳訂了週五晚上的包廂，而不是像平常一樣在辦公室訂午餐？ B：那是一場慶祝林小姐在公司服務二十年的【特別】晚餐，所以她希望大家下班後能一起輕鬆用餐。"
  },
  {
    "word": "limitation",
    "pos": "n.",
    "cn_def": "限制",
    "en_def": "something that controls or reduces what is possible",
    "sentence": "A: Can our small design team really finish the complete website, the mobile app, and the printed brochures for the client before the end of next month? B: We should be honest about our {{BLANK}}, because with only three designers and a tight budget, we can probably deliver the website first and the other items later.",
    "cn": "A：我們這個小型設計團隊真的能在下個月底前為客戶完成整個網站、手機應用程式和印刷手冊嗎？ B：我們應該坦白自己的【限制】，因為只有三位設計師又預算吃緊，我們大概只能先交網站，其他項目晚點再交。"
  },
  {
    "word": "hectic",
    "pos": "adj.",
    "cn_def": "忙亂的；繁忙的",
    "en_def": "very busy and full of activity",
    "sentence": "A: You look exhausted this afternoon, so has the week been busy since the sales conference was moved forward to Thursday? B: Yes, it has been really {{BLANK}}, because I've been answering client calls, booking hotel rooms, and preparing the presentation slides all at the same time without a proper lunch break.",
    "cn": "A：你今天下午看起來好累，自從業務會議提前到週四之後，這週是不是很忙？ B：是啊，真的很【忙亂】，因為我同時要接客戶電話、訂飯店房間、準備簡報投影片，連好好吃個午餐的時間都沒有。"
  },
  {
    "word": "tiny",
    "pos": "adj.",
    "cn_def": "極小的",
    "en_def": "very small",
    "sentence": "A: Did you find a good apartment near the office after visiting all those places with the real estate agent last weekend? B: Not yet, because most of the places in the city center were {{BLANK}}, with a bedroom barely big enough for a bed, and the rent was still far too expensive for me.",
    "cn": "A：你上週末跟房仲看了那麼多地方，有找到離公司近的好公寓嗎？ B：還沒有，因為市中心大部分的房子都【很小】，臥室幾乎只放得下一張床，而且租金對我來說還是太貴了。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "享受；喜愛",
    "en_def": "to get pleasure from something",
    "sentence": "A: How are you finding your new position in the marketing department now that you have been there for almost three months? B: I really {{BLANK}} working with the creative team, because everyone shares ideas openly during meetings and my manager always gives helpful feedback on my reports.",
    "cn": "A：你在行銷部門快三個月了，覺得新職位怎麼樣？ B：我真的很【喜歡】和創意團隊一起工作，因為大家開會時都會坦率分享想法，而且我的主管總是對我的報告給予有用的回饋。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "具挑戰性的",
    "en_def": "difficult in a way that tests your ability",
    "sentence": "A: Why did you decide to leave your comfortable office job and accept the overseas project position in Vietnam that HR offered you last week? B: I wanted a more {{BLANK}} role, because managing a new factory team in another country will push me to learn new skills and grow as a leader.",
    "cn": "A：你為什麼決定離開舒適的辦公室工作，接受人資上週提供的越南海外專案職位？ B：我想要一個更【具挑戰性】的角色，因為在另一個國家管理新的工廠團隊會逼我學習新技能，並成長為一位領導者。"
  },
  {
    "word": "exciting",
    "pos": "adj.",
    "cn_def": "令人興奮的",
    "en_def": "making you feel happy and full of energy",
    "sentence": "A: Have you heard any news about the product launch event that the company is planning for our new electric scooter next spring? B: Yes, it sounds really {{BLANK}}, because they are inviting famous online reviewers, holding test rides in the park, and streaming the whole event live for customers around the world.",
    "cn": "A：你有聽說公司明年春天為我們新電動機車規劃的產品發表會的消息嗎？ B：有啊，聽起來真的很【令人興奮】，因為他們要邀請知名網路評論家、在公園舉辦試乘，還要為全世界的顧客直播整場活動。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "信心；自信",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: You were so nervous before your first presentation to the board of directors, so how do you feel about speaking in public now? B: I have much more {{BLANK}} now, because I practiced every week with my coach and received positive comments from my colleagues after the last two meetings.",
    "cn": "A：你第一次向董事會簡報前非常緊張，那你現在對公開演講感覺如何？ B：我現在有【信心】多了，因為我每週都和教練練習，而且最近兩次會議後同事們都給了我正面的評價。"
  },
  {
    "word": "optimism",
    "pos": "n.",
    "cn_def": "樂觀",
    "en_def": "the feeling that good things will happen",
    "sentence": "A: Sales dropped a little last quarter, so why does the CEO still seem so cheerful whenever she talks about next year's plans? B: Her {{BLANK}} comes from the strong orders we received from new overseas clients this month, and she believes the new product line will bring customers back by summer.",
    "cn": "A：上一季業績稍微下滑，為什麼執行長每次談到明年的計畫時還是那麼開心？ B：她的【樂觀】來自這個月新的海外客戶下的大量訂單，而且她相信新的產品線會在夏天前把顧客吸引回來。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的",
    "en_def": "special and easy to remember",
    "sentence": "A: What was the best part of the company trip to Hualien that the welfare committee organized for all the staff last month? B: The most {{BLANK}} moment was watching the sunrise over the ocean together, because even the busiest managers relaxed, took photos, and chatted with everyone like old friends.",
    "cn": "A：上個月福委會為全體員工舉辦的花蓮員工旅遊，最棒的部分是什麼？ B：最【難忘】的時刻是大家一起看海上日出，因為連最忙的主管都放鬆下來，拍照並像老朋友一樣和大家聊天。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；有生產力的",
    "en_def": "getting a lot done; producing good results",
    "sentence": "A: Did the planning meeting with the suppliers go well this morning, or do we need to arrange another discussion next week? B: It was very {{BLANK}}, because we agreed on new delivery dates, solved the packaging problem, and even found a way to reduce shipping costs by ten percent.",
    "cn": "A：今天早上和供應商的規劃會議順利嗎？還是我們下週需要再安排一次討論？ B：非常【有成效】，因為我們談妥了新的交貨日期、解決了包裝問題，甚至找到方法把運費降低百分之十。"
  },
  {
    "word": "companion",
    "pos": "n.",
    "cn_def": "同伴；伴侶",
    "en_def": "a person or animal you spend time with",
    "sentence": "A: Your grandmother has been living alone since your grandfather passed away, so how is she managing in the countryside these days? B: She adopted a small dog from the animal shelter last spring, and it has become a wonderful {{BLANK}} who keeps her company on long walks and quiet evenings at home.",
    "cn": "A：你祖父過世後你祖母一直獨居，她最近在鄉下過得怎麼樣？ B：她去年春天從動物收容所領養了一隻小狗，牠成了很棒的【伴侶】，陪她長途散步，也陪她在家度過安靜的夜晚。"
  },
  {
    "word": "suburban",
    "pos": "adj.",
    "cn_def": "郊區的",
    "en_def": "relating to the area just outside a city",
    "sentence": "A: Why did your family decide to move out of the busy downtown area after renting an apartment there for almost ten years? B: We bought a house in a quiet {{BLANK}} neighborhood with a garden and good schools nearby, and the train still gets me to the office in about forty minutes.",
    "cn": "A：你們家在繁忙的市中心租公寓將近十年，為什麼決定搬走？ B：我們在安靜的【郊區】社區買了一棟有花園的房子，附近還有好學校，而且搭火車到公司也只要大約四十分鐘。"
  },
  {
    "word": "enthralling",
    "pos": "adj.",
    "cn_def": "迷人的；扣人心弦的",
    "en_def": "so interesting that it holds all your attention",
    "sentence": "A: Did you finish the novel about the young engineer who built a business in Silicon Valley that I lent you before the holidays? B: Yes, I found it absolutely {{BLANK}}, because the story was so exciting that I kept reading on the train and almost missed my stop twice.",
    "cn": "A：你看完我放假前借你那本關於年輕工程師在矽谷創業的小說了嗎？ B：看完了，我覺得它非常【扣人心弦】，故事精采到我在火車上一直讀，還差點兩次坐過站。"
  },
  {
    "word": "inquisitive",
    "pos": "adj.",
    "cn_def": "好奇的；好問的",
    "en_def": "wanting to learn and asking many questions",
    "sentence": "A: How is the new intern doing in the research department now that she has finished her first two weeks with your team? B: She is very {{BLANK}} and asks thoughtful questions about every process, which is great, because she often helps us notice problems that the rest of us had stopped seeing.",
    "cn": "A：新實習生在研究部門和你們團隊共事滿兩週了，她表現得怎麼樣？ B：她非常【好問】，對每個流程都會提出有深度的問題，這很棒，因為她常幫我們注意到大家早已忽略的問題。"
  },
  {
    "word": "extraordinary",
    "pos": "adj.",
    "cn_def": "非凡的；特別的",
    "en_def": "very unusual or much better than normal",
    "sentence": "A: Why did the board give Mr. Chen the Employee of the Year award at the annual dinner, even though he only joined the company two years ago? B: He made an {{BLANK}} effort during the factory fire last spring, staying overnight to protect the equipment and helping every worker get home safely.",
    "cn": "A：陳先生才進公司兩年，董事會為什麼在尾牙上頒給他年度最佳員工獎？ B：去年春天工廠失火時，他付出了【非凡】的努力，整夜留守保護設備，並幫助每位員工平安回家。"
  },
  {
    "word": "fulfill",
    "pos": "v.",
    "cn_def": "實現；履行",
    "en_def": "to make something you hoped for happen; to do what is required",
    "sentence": "A: You often talk about opening your own coffee shop someday, so are you still saving money for that plan while working here? B: Yes, I hope to {{BLANK}} that dream within five years, so I'm taking a weekend business course and learning how to roast beans from a friend who owns a café.",
    "cn": "A：你常說有一天要開自己的咖啡店，你在這裡工作時還在為那個計畫存錢嗎？ B：是的，我希望在五年內【實現】那個夢想，所以我正在上週末的商業課程，並向一位開咖啡館的朋友學烘豆。"
  },
  {
    "word": "break down",
    "pos": "v.phr.",
    "cn_def": "崩潰；（機器）故障",
    "en_def": "to lose control of your feelings; (of a machine) to stop working",
    "sentence": "A: I heard that Kevin left the meeting suddenly yesterday afternoon, so is everything all right with him and his family? B: He has been under a lot of stress caring for his sick father while working overtime, and he was afraid he might {{BLANK}} in front of everyone, so he took a short walk outside.",
    "cn": "A：我聽說Kevin昨天下午突然離開會議，他和他的家人都還好嗎？ B：他一邊加班一邊照顧生病的父親，壓力很大，他怕自己會在大家面前【崩潰】，所以就出去散了一下步。"
  },
  {
    "word": "manageable",
    "pos": "adj.",
    "cn_def": "可應付的；可處理的",
    "en_def": "possible to deal with or control",
    "sentence": "A: Your workload looked impossible last month, so how are things now that the department hired two new assistants to help you? B: It's much more {{BLANK}} now, because they handle the daily emails and filing, which leaves me enough time to focus on the important client reports and still leave on time.",
    "cn": "A：你上個月的工作量看起來多到不可能完成，現在部門請了兩位新助理幫你，情況怎麼樣？ B：現在【可應付】多了，因為他們處理每天的電子郵件和歸檔，讓我有足夠時間專心做重要的客戶報告，還能準時下班。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the reason or desire to do something",
    "sentence": "A: Many employees seem tired lately, so how can we encourage the sales team to keep working hard during the slow winter months? B: A small bonus for reaching monthly targets could give them extra {{BLANK}}, and we could also celebrate the top sellers at the monthly meeting to show our appreciation.",
    "cn": "A：最近很多員工看起來很累，我們要怎麼鼓勵業務團隊在淡季的冬天繼續努力？ B：達成每月目標就給一點小獎金，可以給他們額外的【動力】，我們也可以在月會上表揚業績最好的人，表達我們的感謝。"
  },
  {
    "word": "sustain",
    "pos": "v.",
    "cn_def": "維持；持續",
    "en_def": "to keep something going over time",
    "sentence": "A: Our online store doubled its sales after the television advertisement, but can we keep growing like this for the rest of the year? B: It will be hard to {{BLANK}} that growth without more warehouse staff, so I suggest hiring part-time workers and improving our delivery system before the holiday season begins.",
    "cn": "A：我們的網路商店在電視廣告後業績翻倍，但我們今年剩下的時間能繼續這樣成長嗎？ B：沒有更多倉庫人員的話，很難【維持】那樣的成長，所以我建議在假期旺季開始前雇用兼職人員並改善配送系統。"
  },
  {
    "word": "consistently",
    "pos": "adv.",
    "cn_def": "一貫地；始終",
    "en_def": "always in the same good way",
    "sentence": "A: Why did the hotel chain choose our cleaning company again when its contract ended, even though other companies offered lower prices? B: Their manager said our team has {{BLANK}} delivered excellent service for five years, with clean rooms, quick responses to complaints, and no missed appointments at any of their branches.",
    "cn": "A：雖然其他公司報價比較低，為什麼那家連鎖飯店合約到期後還是再次選擇我們的清潔公司？ B：他們的經理說我們團隊五年來【始終】提供優質服務，房間乾淨、客訴回應迅速，而且在他們任何一間分店都沒有錯過預約。"
  },
  {
    "word": "tangible",
    "pos": "adj.",
    "cn_def": "實際的；有形的",
    "en_def": "real and able to be seen or measured",
    "sentence": "A: The new training program has been running for six months now, so has the director seen any real improvement in the customer service team? B: Yes, there are {{BLANK}} results, because customer complaints have fallen by thirty percent and our satisfaction scores in the latest online survey are the highest they have ever been.",
    "cn": "A：新的培訓計畫已經實施六個月了，主管有看到客服團隊有任何真正的進步嗎？ B：有的，有【實際的】成果，因為客訴減少了百分之三十，而且我們在最新線上調查的滿意度分數是有史以來最高的。"
  },
  {
    "word": "symbolic",
    "pos": "adj.",
    "cn_def": "象徵性的",
    "en_def": "representing an important idea or feeling",
    "sentence": "A: Why does the company plant a tree in the garden outside the main entrance every time a new branch office opens overseas? B: It's a {{BLANK}} gesture that represents steady growth and long-term commitment, and the founder started the tradition when the first branch opened in Japan twenty years ago.",
    "cn": "A：為什麼公司每次在海外開設新分公司，都會在正門外的花園種一棵樹？ B：那是一個【象徵性的】舉動，代表穩定成長和長期承諾，創辦人在二十年前第一家分公司於日本開幕時開始了這個傳統。"
  },
  {
    "word": "experiment",
    "pos": "v.",
    "cn_def": "實驗；嘗試",
    "en_def": "to try new ideas or methods to see what happens",
    "sentence": "A: The café has served the same menu for years, so why are you suddenly offering new drinks like lavender tea and sesame lattes this month? B: We decided to {{BLANK}} with seasonal flavors to attract younger customers, and if the new drinks sell well, we will keep them on the menu permanently.",
    "cn": "A：這家咖啡館多年來都是同樣的菜單，為什麼這個月突然推出薰衣草茶和芝麻拿鐵這些新飲品？ B：我們決定【嘗試】季節性口味來吸引年輕顧客，如果新飲品賣得好，我們就會把它們永久放在菜單上。"
  },
  {
    "word": "slightly",
    "pos": "adv.",
    "cn_def": "稍微；略微",
    "en_def": "a little",
    "sentence": "A: Did the printing company send the final price for the five thousand brochures we need for the trade show next month? B: Yes, but it's {{BLANK}} higher than last year's quote because paper costs have gone up, so we may need to ask the finance department for a little extra money.",
    "cn": "A：印刷公司寄來我們下個月商展需要的五千份手冊最終價格了嗎？ B：寄來了，但因為紙價上漲，比去年的報價【稍微】高一點，所以我們可能需要向財務部多申請一點錢。"
  },
  {
    "word": "stick",
    "pos": "v.",
    "cn_def": "堅持；遵守",
    "en_def": "to continue doing or following something (stick to)",
    "sentence": "A: You've tried so many diets and exercise plans this year, so what are you doing differently with the new program from the gym? B: This time I plan to {{BLANK}} to a simple routine of walking after work and cooking healthy meals, because small habits are easier to keep than strict rules.",
    "cn": "A：你今年試過好多種飲食和運動計畫，這次健身房的新課程你有什麼不同的做法？ B：這次我打算【堅持】一個簡單的習慣，就是下班後散步和煮健康的餐點，因為小習慣比嚴格的規定更容易維持。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現優異",
    "en_def": "to be very good at something",
    "sentence": "A: Why did the HR manager move Amy from accounting to the sales department after only one year with the company? B: She noticed that Amy seemed to {{BLANK}} at talking with clients during trade shows, and her friendly personality and strong product knowledge make her perfect for building customer relationships.",
    "cn": "A：Amy才進公司一年，人資經理為什麼把她從會計部調到業務部？ B：她注意到Amy在商展上似乎很【擅長】與客戶交談，而且她友善的個性和豐富的產品知識，非常適合建立客戶關係。"
  },
  {
    "word": "inevitable",
    "pos": "adj.",
    "cn_def": "不可避免的",
    "en_def": "certain to happen and impossible to avoid",
    "sentence": "A: The company is installing new software in every department next month, so do you think employees will complain about the changes at first? B: Some confusion is {{BLANK}} with any big change, so we have planned several training sessions and prepared a simple guide to help everyone learn the system quickly.",
    "cn": "A：公司下個月要在每個部門安裝新軟體，你覺得員工一開始會抱怨這些改變嗎？ B：任何重大改變都【不可避免】會有些混亂，所以我們安排了幾場訓練課程，並準備了簡單的指南，幫助大家快速學會這個系統。"
  },
  {
    "word": "commit",
    "pos": "v.",
    "cn_def": "承諾；致力於",
    "en_def": "to promise to give your time or effort to something",
    "sentence": "A: The volunteer program at the children's hospital needs helpers every Saturday morning, so are you planning to sign up this year? B: I'd love to help, but I can't {{BLANK}} to every weekend because I sometimes travel for work, so I'll ask the organizer whether I can volunteer twice a month instead.",
    "cn": "A：兒童醫院的志工計畫每週六早上都需要幫手，你今年打算報名嗎？ B：我很想幫忙，但我沒辦法【承諾】每個週末都去，因為我有時要出差，所以我會問問主辦人能不能改成每個月當兩次志工。"
  },
  {
    "word": "subsequent",
    "pos": "adj.",
    "cn_def": "隨後的；後續的",
    "en_def": "coming after something else",
    "sentence": "A: Will the first meeting with the new client in Singapore include the whole project team, or just the senior managers this time? B: Only the managers will attend the first meeting, but the designers and engineers will join the {{BLANK}} meetings once the budget and the main schedule have been approved by both sides.",
    "cn": "A：和新加坡新客戶的第一次會議會包括整個專案團隊，還是這次只有高階主管？ B：第一次會議只有主管參加，但一旦雙方核准了預算和主要時程，設計師和工程師就會加入【後續的】會議。"
  },
  {
    "word": "dependent",
    "pos": "adj.",
    "cn_def": "依賴的",
    "en_def": "needing someone or something to survive or succeed",
    "sentence": "A: Why is the factory trying to find new suppliers in Thailand and Vietnam when our current supplier has always been reliable? B: We are too {{BLANK}} on a single company for our parts, so if they have a problem with production or shipping, our whole assembly line could stop for weeks.",
    "cn": "A：我們目前的供應商一直很可靠，為什麼工廠還要在泰國和越南找新的供應商？ B：我們的零件太【依賴】單一公司了，所以如果他們在生產或運送上出問題，我們整條組裝線可能會停擺好幾週。"
  }
];

const MCQS = [
  {
    "q": "Many viewers found the two-hour webinar _____ because the speaker never changed slides. Next time, we will add short videos and polls.",
    "options": [
      "boring",
      "hectic",
      "tangible",
      "dependent"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel offers a _____ discount for guests who book three nights or more. This offer ends on December 31.",
    "options": [
      "inevitable",
      "special",
      "dependent",
      "suburban"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "One _____ of the current software is that only five users can log in at once. The IT team plans to upgrade it soon.",
    "options": [
      "companion",
      "optimism",
      "limitation",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "December is always a _____ month for the shipping department because of holiday orders. Extra staff are hired to handle the workload.",
    "options": [
      "tangible",
      "symbolic",
      "dependent",
      "hectic"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The startup began in a _____ office with just two desks and one printer. Today it employs more than two hundred people.",
    "options": [
      "inevitable",
      "tiny",
      "subsequent",
      "dependent"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Employees who _____ their work are usually more loyal to the company. That is why we invest in a pleasant workplace.",
    "options": [
      "enjoy",
      "sustain",
      "excel",
      "commit"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Opening a new branch overseas will be _____ because of language and legal differences. However, the board believes it is worth the effort.",
    "options": [
      "tiny",
      "suburban",
      "symbolic",
      "challenging"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The sales team received _____ news this morning about winning the company's largest contract ever. Everyone is invited to a celebration lunch.",
    "options": [
      "boring",
      "inevitable",
      "exciting",
      "dependent"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Regular feedback from supervisors helps new staff build _____ in their own abilities. It also reduces mistakes during their first few months.",
    "options": [
      "confidence",
      "limitation",
      "companion",
      "optimism"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Despite the slow economy, there is growing _____ among investors about the tourism industry. Hotel bookings for next year are already rising.",
    "options": [
      "companion",
      "limitation",
      "optimism",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company's tenth anniversary party was truly _____ thanks to the live band and fireworks. Staff are still sharing photos online.",
    "options": [
      "manageable",
      "memorable",
      "dependent",
      "subsequent"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Short daily meetings help the team stay focused and _____. Long meetings, on the other hand, often waste valuable working time.",
    "options": [
      "suburban",
      "tiny",
      "inevitable",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many retirees adopt a dog as a loyal _____ after their children move away. Local shelters report that older adopters are increasing.",
    "options": [
      "limitation",
      "optimism",
      "companion",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The company moved its warehouse to a _____ area where land is cheaper than downtown. Trucks can also avoid heavy city traffic.",
    "options": [
      "suburban",
      "symbolic",
      "inquisitive",
      "dependent"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Ms. Wu received a bonus for her _____ performance during the busy holiday season. She closed twice as many sales as anyone else.",
    "options": [
      "suburban",
      "extraordinary",
      "inevitable",
      "tiny"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The supplier could not _____ the large order on time because of a shortage of materials. We had to find another company quickly.",
    "options": [
      "excel",
      "stick",
      "experiment",
      "fulfill"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Please call the technician if the copier starts to _____ again. It has already stopped working three times this month.",
    "options": [
      "break down",
      "stick",
      "excel",
      "commit"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Breaking the big project into smaller tasks made the workload more _____ for everyone. As a result, the team finished a week early.",
    "options": [
      "inevitable",
      "symbolic",
      "manageable",
      "suburban"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Flexible working hours have increased staff _____ and reduced the number of sick days. Managers plan to continue the policy next year.",
    "options": [
      "limitation",
      "companion",
      "luggage",
      "motivation"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The restaurant cannot _____ its low prices if food costs keep rising. The owner may raise menu prices next month.",
    "options": [
      "excel",
      "sustain",
      "experiment",
      "enjoy"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Our delivery partner has _____ arrived on time for the past two years. We plan to renew the contract with them in January.",
    "options": [
      "slightly",
      "loudly",
      "consistently",
      "briefly"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Investors want to see _____ results, such as higher profits, before they provide more funding. Promises alone are not enough.",
    "options": [
      "symbolic",
      "suburban",
      "inquisitive",
      "tangible"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The chef likes to _____ with local ingredients when creating new dishes. Customers can try her latest creations every Friday.",
    "options": [
      "experiment",
      "commit",
      "sustain",
      "fulfill"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Ticket prices for the trade fair will rise _____ next year, from 500 to 550 dollars. Early registration still offers a small discount.",
    "options": [
      "consistently",
      "slightly",
      "loudly",
      "eagerly"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Please _____ to the agenda during the meeting so we can finish by noon. Other topics can be discussed later by email.",
    "options": [
      "excel",
      "fulfill",
      "experiment",
      "stick"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Trainees who _____ in the management course will be offered full-time positions. The course includes both classes and practical work.",
    "options": [
      "excel",
      "sustain",
      "fulfill",
      "stick"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Some delays are _____ when a building project depends on good weather. We have added two extra weeks to the schedule.",
    "options": [
      "enthralling",
      "inquisitive",
      "inevitable",
      "suburban"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "All new managers must _____ to a two-year training program before they lead a team. The program starts in March.",
    "options": [
      "excel",
      "commit",
      "sustain",
      "enjoy"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The first meeting will set the budget, and _____ meetings will focus on design details. Attendance at all sessions is required.",
    "options": [
      "subsequent",
      "inquisitive",
      "suburban",
      "tangible"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The farm is heavily _____ on weather conditions, so a dry summer can reduce profits. The owners are now installing a water system.",
    "options": [
      "productive",
      "memorable",
      "boring",
      "dependent"
    ],
    "answer": 3,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "boring": {
    "pos": "adj.",
    "en_def": "not interesting; dull",
    "cn_def": "無聊的"
  },
  "special": {
    "pos": "adj.",
    "en_def": "different from usual and more important",
    "cn_def": "特別的"
  },
  "limitation": {
    "pos": "n.",
    "en_def": "something that controls or reduces what is possible",
    "cn_def": "限制"
  },
  "hectic": {
    "pos": "adj.",
    "en_def": "very busy and full of activity",
    "cn_def": "忙亂的；繁忙的"
  },
  "tiny": {
    "pos": "adj.",
    "en_def": "very small",
    "cn_def": "極小的"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to get pleasure from something",
    "cn_def": "享受；喜愛"
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "difficult in a way that tests your ability",
    "cn_def": "具挑戰性的"
  },
  "exciting": {
    "pos": "adj.",
    "en_def": "making you feel happy and full of energy",
    "cn_def": "令人興奮的"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "信心；自信"
  },
  "optimism": {
    "pos": "n.",
    "en_def": "the feeling that good things will happen",
    "cn_def": "樂觀"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "special and easy to remember",
    "cn_def": "難忘的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot done; producing good results",
    "cn_def": "有成效的；有生產力的"
  },
  "companion": {
    "pos": "n.",
    "en_def": "a person or animal you spend time with",
    "cn_def": "同伴；伴侶"
  },
  "suburban": {
    "pos": "adj.",
    "en_def": "relating to the area just outside a city",
    "cn_def": "郊區的"
  },
  "enthralling": {
    "pos": "adj.",
    "en_def": "so interesting that it holds all your attention",
    "cn_def": "迷人的；扣人心弦的"
  },
  "inquisitive": {
    "pos": "adj.",
    "en_def": "wanting to learn and asking many questions",
    "cn_def": "好奇的；好問的"
  },
  "extraordinary": {
    "pos": "adj.",
    "en_def": "very unusual or much better than normal",
    "cn_def": "非凡的；特別的"
  },
  "fulfill": {
    "pos": "v.",
    "en_def": "to make something you hoped for happen; to do what is required",
    "cn_def": "實現；履行"
  },
  "break down": {
    "pos": "v.phr.",
    "en_def": "to lose control of your feelings; (of a machine) to stop working",
    "cn_def": "崩潰；（機器）故障"
  },
  "manageable": {
    "pos": "adj.",
    "en_def": "possible to deal with or control",
    "cn_def": "可應付的；可處理的"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the reason or desire to do something",
    "cn_def": "動機；動力"
  },
  "sustain": {
    "pos": "v.",
    "en_def": "to keep something going over time",
    "cn_def": "維持；持續"
  },
  "consistently": {
    "pos": "adv.",
    "en_def": "always in the same good way",
    "cn_def": "一貫地；始終"
  },
  "tangible": {
    "pos": "adj.",
    "en_def": "real and able to be seen or measured",
    "cn_def": "實際的；有形的"
  },
  "symbolic": {
    "pos": "adj.",
    "en_def": "representing an important idea or feeling",
    "cn_def": "象徵性的"
  },
  "experiment": {
    "pos": "v.",
    "en_def": "to try new ideas or methods to see what happens",
    "cn_def": "實驗；嘗試"
  },
  "slightly": {
    "pos": "adv.",
    "en_def": "a little",
    "cn_def": "稍微；略微"
  },
  "stick": {
    "pos": "v.",
    "en_def": "to continue doing or following something (stick to)",
    "cn_def": "堅持；遵守"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be very good at something",
    "cn_def": "擅長；表現優異"
  },
  "inevitable": {
    "pos": "adj.",
    "en_def": "certain to happen and impossible to avoid",
    "cn_def": "不可避免的"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to give your time or effort to something",
    "cn_def": "承諾；致力於"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "coming after something else",
    "cn_def": "隨後的；後續的"
  },
  "dependent": {
    "pos": "adj.",
    "en_def": "needing someone or something to survive or succeed",
    "cn_def": "依賴的"
  }
};

const EXTRA_GLOSSES = {};
