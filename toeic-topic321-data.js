// Topic 321 Quiz Data: Recommend 推薦
// Source word list: https://www.examword.com/group-topic/recommend — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T321 - Recommend 推薦",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；建議",
    "en_def": "advice that something or someone is good or suitable",
    "sentence": "A: Our team is meeting an important client from Tokyo next Friday evening, and I have no idea which restaurant near the office would impress her. B: My {{BLANK}} is the small Italian place on Fifth Street, because the food is excellent, the service is fast, and it is quiet enough for business talk.",
    "cn": "A：我們團隊下週五晚上要和一位來自東京的重要客戶見面，我完全不知道辦公室附近哪家餐廳能讓她留下好印象。 B：我的【推薦】是第五街那家小義大利餐廳，因為那裡的餐點很棒、服務迅速，而且夠安靜，適合談公事。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議；提議",
    "en_def": "to give an idea for someone to think about",
    "sentence": "A: The printer on the third floor keeps breaking down, and the sales team cannot print their contracts before the meeting with the bank this afternoon. B: I would {{BLANK}} that they send the files to the copy center downstairs, because it is open all day and usually finishes large orders within an hour.",
    "cn": "A：三樓的印表機一直故障，業務團隊沒辦法在今天下午和銀行開會前把合約印出來。 B：我會【建議】他們把檔案傳到樓下的影印中心，因為那裡整天營業，而且大量訂單通常一小時內就能完成。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "建議；提議",
    "en_def": "an idea or plan that someone offers",
    "sentence": "A: Did the director accept any of the ideas that the staff wrote on the cards at last week's meeting about improving the break room? B: Yes, she liked the {{BLANK}} to add a second coffee machine and a few comfortable chairs, so the changes will be finished before the end of the month.",
    "cn": "A：上週關於改善休息室的會議上，員工寫在卡片上的點子，主任有採納任何一個嗎？ B：有，她很喜歡加裝第二台咖啡機和幾張舒適椅子的【建議】，所以這些改變會在月底前完成。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "勸告；建議",
    "en_def": "to tell someone what you think they should do",
    "sentence": "A: I am planning to drive to the airport tomorrow morning to meet our new partner, but I heard there will be a lot of road construction downtown. B: In that case, I would {{BLANK}} you to leave at least an hour early and take the train, because the highway is often blocked during rush hour.",
    "cn": "A：我打算明天早上開車去機場接我們的新合作夥伴，但我聽說市中心會有很多道路施工。 B：這樣的話，我會【勸】你至少提早一小時出發並改搭火車，因為交通尖峰時段高速公路常常塞住。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "忠告；建議",
    "en_def": "an opinion about what someone should do",
    "sentence": "A: I have two job offers, one from a large bank downtown and one from a small design company near my home, and I cannot decide which one to take. B: My {{BLANK}} is to think about which job will help you learn the most in the next few years, not just which one pays more.",
    "cn": "A：我有兩個工作機會，一個是市中心的大銀行，另一個是我家附近的小設計公司，我無法決定要選哪一個。 B：我的【建議】是想想未來幾年哪份工作能讓你學到最多，而不是只看哪份薪水比較高。"
  },
  {
    "word": "propose",
    "pos": "v.",
    "cn_def": "提議；提出",
    "en_def": "to formally suggest a plan or idea for others to consider",
    "sentence": "A: The marketing budget for next year is much smaller than this year's, so how are we going to reach new customers in the southern region? B: At Monday's meeting, I plan to {{BLANK}} that we spend less on television ads and more on social media, because it costs less and reaches younger buyers.",
    "cn": "A：明年的行銷預算比今年少很多，那我們要怎麼接觸南部地區的新客戶？ B：在週一的會議上，我打算【提議】我們減少電視廣告的花費，把更多錢投入社群媒體，因為成本較低又能接觸到年輕買家。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "提案；建議書",
    "en_def": "a formal plan or suggestion, often written",
    "sentence": "A: Have you heard back from the city council about our plan to build a small park next to the new shopping center on Main Street? B: Not yet, but the officer said they will review our {{BLANK}} carefully next week and tell us whether we need to change the design or the budget.",
    "cn": "A：關於我們在主街新購物中心旁蓋小公園的計畫，市議會回覆你了嗎？ B：還沒有，不過承辦人員說他們下週會仔細審查我們的【提案】，然後告訴我們是否需要修改設計或預算。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "公開支持；為（產品）代言",
    "en_def": "to say publicly that you support a person, product or plan",
    "sentence": "A: Why did the sales of our new running shoes suddenly go up so quickly last month, even though we did not lower the price at all? B: A famous marathon runner agreed to {{BLANK}} the shoes in a series of online videos, so many young customers decided to try them after watching her.",
    "cn": "A：為什麼我們的新款跑鞋上個月銷量突然急速上升，即使我們完全沒有降價？ B：一位知名的馬拉松選手同意在一系列網路影片中為這款鞋【代言】，所以很多年輕顧客看了她的影片後決定試穿。"
  },
  {
    "word": "endorsement",
    "pos": "n.",
    "cn_def": "支持；背書；代言",
    "en_def": "public support or approval, especially from a well-known person",
    "sentence": "A: The new energy drink is selling well in Taipei, but do you think it will be popular in other cities where nobody knows our brand yet? B: I think so, because we just got an {{BLANK}} from a popular basketball player, and his fans across the country trust his opinions about health and sports products.",
    "cn": "A：新的能量飲料在台北賣得很好，但你覺得在其他還沒人認識我們品牌的城市也會受歡迎嗎？ B：我想會，因為我們剛獲得一位人氣籃球選手的【代言】，而全國的球迷都很信任他對健康和運動產品的看法。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵；激勵",
    "en_def": "to give someone confidence or hope to do something",
    "sentence": "A: Many of our new employees are too shy to share their ideas during the weekly team meetings, and I am not sure how to help them. B: You could {{BLANK}} them by asking easy questions first and thanking them for every answer, so they slowly feel more comfortable speaking in front of others.",
    "cn": "A：我們很多新進員工在每週團隊會議上都太害羞，不敢分享想法，我不確定該怎麼幫助他們。 B：你可以先問一些簡單的問題並感謝他們的每個回答來【鼓勵】他們，這樣他們會慢慢更自在地在別人面前發言。"
  },
  {
    "word": "encouragement",
    "pos": "n.",
    "cn_def": "鼓勵；激勵",
    "en_def": "words or actions that give someone confidence or hope",
    "sentence": "A: How did you manage to finish the long accounting course at night while working full-time at the hotel and taking care of your two children? B: It was really hard, but my supervisor gave me a lot of {{BLANK}} and let me leave early on exam days, so I never thought about giving up.",
    "cn": "A：你一邊在飯店全職工作、一邊照顧兩個孩子，是怎麼完成那門漫長的夜間會計課程的？ B：真的很辛苦，但我的主管給了我很多【鼓勵】，考試那幾天還讓我提早下班，所以我從沒想過要放棄。"
  },
  {
    "word": "urge",
    "pos": "v.",
    "cn_def": "力勸；敦促",
    "en_def": "to strongly ask someone to do something",
    "sentence": "A: The storm is supposed to hit the city tomorrow afternoon, so should we still open the store and ask everyone to come in as usual? B: No, the manager will {{BLANK}} all staff to stay home and work online, because the trains may stop running and the roads could be dangerous.",
    "cn": "A：暴風雨預計明天下午會襲擊城市，我們還要照常開店並要大家來上班嗎？ B：不用，經理會【力勸】所有員工待在家線上工作，因為火車可能停駛，道路也可能很危險。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服；勸服",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "A: Our biggest customer wants to cancel their contract because they found a cheaper supplier, so what can we do to keep their business? B: Let's invite their manager to lunch and try to {{BLANK}} him to stay by offering faster delivery and a small discount on large orders next year.",
    "cn": "A：我們最大的客戶想取消合約，因為他們找到更便宜的供應商，我們能做什麼來留住他們的生意？ B：我們邀請他們的經理吃午餐，並試著提供更快的出貨速度和明年大量訂單的小折扣來【說服】他留下。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people believe or do something",
    "sentence": "A: Why did the bank decide to lend money to that small coffee company instead of to the larger restaurant group that also applied last month? B: The owner gave a very {{BLANK}} presentation with clear numbers and real customer stories, so the loan officers believed her business would grow quickly.",
    "cn": "A：為什麼銀行決定把錢借給那間小咖啡公司，而不是上個月也提出申請的大型餐飲集團？ B：那位老闆做了一場非常【有說服力的】簡報，有清楚的數字和真實的顧客故事，所以放款專員相信她的事業會快速成長。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "宣傳；推銷；促進",
    "en_def": "to help sell a product by advertising it",
    "sentence": "A: We are opening our new bakery next month, but there are already three other bakeries on the same street, so how can we get people's attention? B: We could {{BLANK}} our fresh bread by giving out free samples at the train station every morning and posting short cooking videos online.",
    "cn": "A：我們下個月要開新烘焙坊，但同一條街上已經有三家烘焙店了，我們要怎麼吸引大家的注意？ B：我們可以每天早上在火車站發送免費試吃品，並在網路上發布簡短的烘焙影片，來【宣傳】我們的新鮮麵包。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "促銷；宣傳活動",
    "en_def": "activities such as ads or special prices to help sell something",
    "sentence": "A: Why is the shopping mall so crowded this weekend, even though it is not a holiday and the weather is not very nice? B: Many stores are running a special {{BLANK}} with half-price shoes and free gifts for every customer who spends more than two thousand dollars.",
    "cn": "A：為什麼購物中心這個週末這麼擁擠？今天又不是假日，天氣也不太好。 B：許多店家正在舉辦特別【促銷活動】，鞋子半價，而且每位消費超過兩千元的顧客都能獲得免費贈品。"
  },
  {
    "word": "approve",
    "pos": "v.",
    "cn_def": "批准；核准",
    "en_def": "to officially agree to a plan or request",
    "sentence": "A: I want to buy three new laptops for the design team before the big project starts, but I don't know who has to sign the purchase form. B: The finance manager must {{BLANK}} any order over fifty thousand dollars, so send her the price list and a short reason as soon as possible.",
    "cn": "A：我想在大型專案開始前幫設計團隊買三台新筆電，但我不知道採購單要由誰簽核。 B：任何超過五萬元的訂單都必須由財務經理【批准】，所以請盡快把價格表和簡短理由寄給她。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "批准；認可",
    "en_def": "official permission or agreement",
    "sentence": "A: The new menu looks great, so can we start using it in all of our restaurants from next Monday? B: Not yet, because we still need {{BLANK}} from the head office in Singapore, and they usually take about a week to check the prices and the food safety details.",
    "cn": "A：新菜單看起來很棒，我們可以從下週一開始在所有分店使用嗎？ B：還不行，因為我們還需要新加坡總部的【核准】，而他們通常要花大約一週來檢查價格和食品安全細節。"
  },
  {
    "word": "prefer",
    "pos": "v.",
    "cn_def": "較喜歡；寧可",
    "en_def": "to like one thing more than another",
    "sentence": "A: Would you like to have the training session in the large meeting room on Friday morning, or should we hold it online so people can join from home? B: Most of the staff {{BLANK}} to meet in person, because they find it easier to ask questions and practice the new software together.",
    "cn": "A：你想把培訓課程安排在週五早上的大會議室，還是我們改在線上舉行，讓大家可以在家參加？ B：大多數員工【比較喜歡】面對面，因為他們覺得這樣比較容易提問，也能一起練習新軟體。"
  },
  {
    "word": "preference",
    "pos": "n.",
    "cn_def": "偏好；喜好",
    "en_def": "a feeling of liking one thing more than another",
    "sentence": "A: When we book the hotel for the conference guests next month, should we choose rooms near the airport or in the city center? B: Let's send everyone a short email and ask about their {{BLANK}}, because some people arrive late at night while others want to go shopping after the meetings.",
    "cn": "A：下個月幫研討會來賓訂飯店時，我們應該選機場附近還是市中心的房間？ B：我們寄一封簡短的電子郵件問問大家的【偏好】，因為有些人深夜才抵達，而有些人想在會議結束後去購物。"
  },
  {
    "word": "advocate",
    "pos": "v.",
    "cn_def": "提倡；擁護",
    "en_def": "to publicly support an idea or way of doing things",
    "sentence": "A: Why does the new human resources director keep talking about flexible working hours at every meeting with the department managers? B: She has always tried to {{BLANK}} a better balance between work and family life, and she believes happier employees will stay longer and work harder.",
    "cn": "A：為什麼新的人資總監在每次和部門經理開會時都一直談到彈性工時？ B：她一直以來都在【提倡】工作與家庭生活之間更好的平衡，而且她相信比較快樂的員工會待得更久、工作更努力。"
  },
  {
    "word": "nominate",
    "pos": "v.",
    "cn_def": "提名；推舉",
    "en_def": "to officially suggest someone for a job, prize or position",
    "sentence": "A: The company is giving an award to the best team leader this year, and the managers must choose one person from each department. B: I am going to {{BLANK}} Lisa from customer service, because she trained six new workers and helped her team answer every complaint within one day.",
    "cn": "A：公司今年要頒獎給最佳團隊領導人，各部門經理必須各選出一個人。 B：我打算【提名】客服部的麗莎，因為她訓練了六位新員工，還幫助她的團隊在一天內回覆每一則客訴。"
  },
  {
    "word": "nomination",
    "pos": "n.",
    "cn_def": "提名",
    "en_def": "the act of officially suggesting someone for a prize or position",
    "sentence": "A: Is it true that our small design company has a chance to win the national award for the best new office building this year? B: Yes, we received a {{BLANK}} last week for the library project, and the winners will be announced at a big dinner in Taipei next month.",
    "cn": "A：我們這間小設計公司今年真的有機會贏得全國最佳新辦公大樓獎嗎？ B：是的，我們上週以圖書館專案獲得【提名】，得獎名單會在下個月台北的一場盛大晚宴上公布。"
  },
  {
    "word": "vouch",
    "pos": "v.",
    "cn_def": "擔保；保證",
    "en_def": "to say that you know someone is honest or that something is true or good",
    "sentence": "A: We are thinking about hiring a new cleaning company for the office building, but we have never worked with them before and don't know if they are reliable. B: I can {{BLANK}} for them, because they have cleaned my sister's restaurant for three years and have never been late or broken anything.",
    "cn": "A：我們正考慮為辦公大樓聘請一家新的清潔公司，但我們以前從沒和他們合作過，不知道他們是否可靠。 B：我可以為他們【擔保】，因為他們已經幫我姊姊的餐廳打掃三年了，從來沒遲到過，也沒弄壞過任何東西。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；支援",
    "en_def": "to agree with and help a person or plan",
    "sentence": "A: Do you think the other department heads will agree with our plan to move the warehouse closer to the port before next summer? B: I think most of them will {{BLANK}} the idea, because shipping costs have gone up a lot this year and a new location could save us money.",
    "cn": "A：你覺得其他部門主管會同意我們在明年夏天前把倉庫遷到靠近港口的計畫嗎？ B：我想他們大多數人會【支持】這個想法，因為今年運費漲了很多，新地點可以幫我們省錢。"
  },
  {
    "word": "favorable",
    "pos": "adj.",
    "cn_def": "有利的；贊同的",
    "en_def": "showing approval or giving an advantage",
    "sentence": "A: How did the customers react to the new mobile app that we launched last month for ordering lunch from our restaurants? B: Most of the reviews have been {{BLANK}}, and people especially like how quickly they can pay, although a few users asked for more payment options.",
    "cn": "A：我們上個月推出可以向我們餐廳訂午餐的新手機應用程式，顧客反應如何？ B：大部分的評論都是【正面贊同的】，大家特別喜歡付款很快，不過有少數使用者希望能有更多付款方式。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "good, hopeful, or showing agreement",
    "sentence": "A: Our first meeting with the new investors from Hong Kong went on for three hours, so how do you think they feel about our plan? B: I think their response was very {{BLANK}}, because they asked many questions about next year and even invited us to visit their office in December.",
    "cn": "A：我們和香港新投資人的第一次會議開了三個小時，你覺得他們對我們的計畫看法如何？ B：我覺得他們的反應非常【正面】，因為他們問了很多關於明年的問題，甚至邀請我們十二月去參觀他們的辦公室。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；突顯",
    "en_def": "to make people notice something important",
    "sentence": "A: The new manager will only have ten minutes to look at our report before her meeting with the president tomorrow morning. B: Then we should {{BLANK}} the three most important results on the first page, so she can quickly see how much our sales grew in Asia this year.",
    "cn": "A：新經理明天早上和總裁開會前只有十分鐘可以看我們的報告。 B：那我們應該在第一頁【強調】最重要的三項結果，讓她能很快看出我們今年在亞洲的銷售成長了多少。"
  },
  {
    "word": "refer",
    "pos": "v.",
    "cn_def": "轉介；介紹",
    "en_def": "to send someone to another person or place for help",
    "sentence": "A: A customer called this morning asking about a large order for five hundred chairs, but I only handle small online orders, so I wasn't sure what to say. B: Next time, please {{BLANK}} that kind of customer to Mr. Chen in the sales department, because he manages all the business accounts.",
    "cn": "A：今天早上有位顧客打電話詢問五百張椅子的大訂單，但我只負責小型網路訂單，所以不知道該說什麼。 B：下次請把那類顧客【轉介】給業務部的陳先生，因為所有企業客戶都是由他負責。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "推薦信；推薦人",
    "en_def": "a letter or statement about someone's character and ability",
    "sentence": "A: The hotel wants to hire me as an assistant manager, but they asked for a letter from someone who knows my work well before they make a final decision. B: I'll be happy to write you a {{BLANK}}, because you have worked hard at our front desk for four years and our guests always praise you.",
    "cn": "A：那家飯店想聘我當副理，但他們在做最後決定前，要求一封熟悉我工作表現的人寫的信。 B：我很樂意幫你寫一封【推薦信】，因為你在我們櫃檯認真工作了四年，客人總是稱讚你。"
  },
  {
    "word": "commend",
    "pos": "v.",
    "cn_def": "稱讚；表揚",
    "en_def": "to praise someone formally or publicly",
    "sentence": "A: The fire alarm went off during the conference yesterday, but all two hundred guests left the building safely in less than five minutes. B: The general manager wants to {{BLANK}} the security team at Friday's staff meeting, because they stayed calm and guided everyone to the exits so quickly.",
    "cn": "A：昨天研討會期間火災警報響了，但兩百位來賓全都在五分鐘內安全離開了大樓。 B：總經理想在週五的員工大會上【表揚】保全團隊，因為他們保持冷靜，而且很快就引導大家走到出口。"
  },
  {
    "word": "approval rating",
    "pos": "n.phr.",
    "cn_def": "支持度；滿意度評分",
    "en_def": "a number showing how many people like a leader or service",
    "sentence": "A: The city's new mayor has only been in office for six months, so do people in town think she is doing a good job so far? B: Her {{BLANK}} rose to seventy percent last month after she fixed the bus system and opened two new parks near the business district.",
    "cn": "A：市府的新市長才上任六個月，鎮上的人覺得她目前做得好嗎？ B：她在改善公車系統並在商業區附近開放兩座新公園後，上個月的【支持度】上升到百分之七十。"
  }
];

const MCQS = [
  {
    "q": "Ms. Wang chose this supplier on the _____ of a trusted colleague. She has been very happy with their service so far.",
    "options": [
      "recommendation",
      "promotion",
      "nomination",
      "preference"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The consultant will _____ several ways to cut costs at tomorrow's meeting. Managers should bring their department budgets.",
    "options": [
      "prefer",
      "suggest",
      "vouch",
      "refer"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Thank you for your helpful _____ about the new website. We have already added a search bar to the home page.",
    "options": [
      "endorsement",
      "nomination",
      "suggestion",
      "approval rating"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our lawyers strongly _____ against signing the contract before Friday. They still need time to check every page.",
    "options": [
      "nominate",
      "commend",
      "highlight",
      "advise"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Before you invest any money, ask a financial planner for _____. A professional can explain the risks clearly.",
    "options": [
      "encouragement",
      "advice",
      "promotion",
      "nomination"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The finance director will _____ a new travel policy at the board meeting. It would reduce the cost of business trips.",
    "options": [
      "propose",
      "vouch",
      "prefer",
      "commend"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The committee rejected the first _____ because it was too expensive. Our team must submit a revised plan by Monday.",
    "options": [
      "preference",
      "endorsement",
      "encouragement",
      "proposal"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Several famous athletes have agreed to _____ our new sports drink. Their photos will appear in every advertisement.",
    "options": [
      "refer",
      "urge",
      "endorse",
      "vouch"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The new hotel received a strong _____ from a popular travel writer. Bookings doubled within two weeks of her article.",
    "options": [
      "endorsement",
      "approval rating",
      "suggestion",
      "nomination"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Managers should _____ employees to share ideas during meetings. Good ideas often come from new staff members.",
    "options": [
      "prefer",
      "encourage",
      "approve",
      "refer"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The new interns need a lot of _____ during their first month. A few kind words can make them more confident.",
    "options": [
      "recommendation",
      "promotion",
      "encouragement",
      "reference"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Officials _____ all drivers to avoid the coastal highway tonight. Heavy rain has caused several small landslides.",
    "options": [
      "prefer",
      "endorse",
      "nominate",
      "urge"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The sales team failed to _____ the client to sign a longer contract. She wanted to compare other offers first.",
    "options": [
      "approve",
      "persuade",
      "nominate",
      "highlight"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Her report was clear and _____, so the board agreed to her plan. Everyone was impressed by the data she collected.",
    "options": [
      "persuasive",
      "eligible",
      "punctual",
      "reluctant"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company hired a marketing agency to _____ its new line of kitchen products. The campaign will start online next week.",
    "options": [
      "vouch",
      "advise",
      "refer",
      "promote"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The supermarket's two-for-one _____ ends this Sunday. Customers can save money on drinks and snacks until then.",
    "options": [
      "proposal",
      "nomination",
      "promotion",
      "advice"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The city council voted to _____ the plans for the new sports center. Construction will begin early next spring.",
    "options": [
      "approve",
      "advise",
      "urge",
      "vouch"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "All travel expenses require written _____ from a department head. Please attach your receipts to the request form.",
    "options": [
      "suggestion",
      "approval",
      "encouragement",
      "preference"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Many guests _____ rooms on higher floors because they are quieter. We charge a little more for those rooms.",
    "options": [
      "advocate",
      "nominate",
      "prefer",
      "commend"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Please tell the event planner about any food _____ before Friday. Vegetarian and seafood meals are both available.",
    "options": [
      "proposal",
      "promotion",
      "nomination",
      "preference"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Health experts _____ shorter working hours to reduce stress. Some companies are already testing a four-day week.",
    "options": [
      "prefer",
      "advocate",
      "vouch",
      "refer"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Each department may _____ one employee for the annual service award. The winners will be announced in December.",
    "options": [
      "nominate",
      "advise",
      "persuade",
      "highlight"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Mr. Lin's _____ for the board was accepted by the shareholders. He will start his new role next month.",
    "options": [
      "preference",
      "reference",
      "advice",
      "nomination"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "I can _____ for Ms. Park's honesty and hard work. She managed our accounts for six years without a single mistake.",
    "options": [
      "suggest",
      "approve",
      "vouch",
      "urge"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Customer reviews of the new phone have been mostly _____. Buyers especially like its long battery life.",
    "options": [
      "favorable",
      "persuasive",
      "eligible",
      "grateful"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Your presentation should _____ the main benefits of the product. Busy clients will not read every detail.",
    "options": [
      "nominate",
      "highlight",
      "vouch",
      "advocate"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "If the problem continues, the help desk will _____ you to a senior technician. He can usually fix it remotely.",
    "options": [
      "urge",
      "prefer",
      "refer",
      "commend"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Applicants must include a _____ from a previous employer. The letter should describe their skills and attitude.",
    "options": [
      "promotion",
      "preference",
      "suggestion",
      "reference"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The mayor will _____ the volunteers for cleaning the beach. More than three hundred people joined the event last weekend.",
    "options": [
      "advise",
      "commend",
      "prefer",
      "propose"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The airline's _____ rose after it improved its on-time record. Passengers gave it much higher scores this year.",
    "options": [
      "approval rating",
      "endorsement",
      "recommendation",
      "nomination"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "recommendation": {
    "pos": "n.",
    "en_def": "advice that something or someone is good or suitable",
    "cn_def": "推薦；建議"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to give an idea for someone to think about",
    "cn_def": "建議；提議"
  },
  "suggestion": {
    "pos": "n.",
    "en_def": "an idea or plan that someone offers",
    "cn_def": "建議；提議"
  },
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "勸告；建議"
  },
  "advice": {
    "pos": "n.",
    "en_def": "an opinion about what someone should do",
    "cn_def": "忠告；建議"
  },
  "propose": {
    "pos": "v.",
    "en_def": "to formally suggest a plan or idea for others to consider",
    "cn_def": "提議；提出"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a formal plan or suggestion, often written",
    "cn_def": "提案；建議書"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to say publicly that you support a person, product or plan",
    "cn_def": "公開支持；為（產品）代言"
  },
  "endorsement": {
    "pos": "n.",
    "en_def": "public support or approval, especially from a well-known person",
    "cn_def": "支持；背書；代言"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or hope to do something",
    "cn_def": "鼓勵；激勵"
  },
  "encouragement": {
    "pos": "n.",
    "en_def": "words or actions that give someone confidence or hope",
    "cn_def": "鼓勵；激勵"
  },
  "urge": {
    "pos": "v.",
    "en_def": "to strongly ask someone to do something",
    "cn_def": "力勸；敦促"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服；勸服"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people believe or do something",
    "cn_def": "有說服力的"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help sell a product by advertising it",
    "cn_def": "宣傳；推銷；促進"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "activities such as ads or special prices to help sell something",
    "cn_def": "促銷；宣傳活動"
  },
  "approve": {
    "pos": "v.",
    "en_def": "to officially agree to a plan or request",
    "cn_def": "批准；核准"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission or agreement",
    "cn_def": "批准；認可"
  },
  "prefer": {
    "pos": "v.",
    "en_def": "to like one thing more than another",
    "cn_def": "較喜歡；寧可"
  },
  "preference": {
    "pos": "n.",
    "en_def": "a feeling of liking one thing more than another",
    "cn_def": "偏好；喜好"
  },
  "advocate": {
    "pos": "v.",
    "en_def": "to publicly support an idea or way of doing things",
    "cn_def": "提倡；擁護"
  },
  "nominate": {
    "pos": "v.",
    "en_def": "to officially suggest someone for a job, prize or position",
    "cn_def": "提名；推舉"
  },
  "nomination": {
    "pos": "n.",
    "en_def": "the act of officially suggesting someone for a prize or position",
    "cn_def": "提名"
  },
  "vouch": {
    "pos": "v.",
    "en_def": "to say that you know someone is honest or that something is true or good",
    "cn_def": "擔保；保證"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with and help a person or plan",
    "cn_def": "支持；支援"
  },
  "favorable": {
    "pos": "adj.",
    "en_def": "showing approval or giving an advantage",
    "cn_def": "有利的；贊同的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good, hopeful, or showing agreement",
    "cn_def": "正面的；積極的"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make people notice something important",
    "cn_def": "強調；突顯"
  },
  "refer": {
    "pos": "v.",
    "en_def": "to send someone to another person or place for help",
    "cn_def": "轉介；介紹"
  },
  "reference": {
    "pos": "n.",
    "en_def": "a letter or statement about someone's character and ability",
    "cn_def": "推薦信；推薦人"
  },
  "commend": {
    "pos": "v.",
    "en_def": "to praise someone formally or publicly",
    "cn_def": "稱讚；表揚"
  },
  "approval rating": {
    "pos": "n.phr.",
    "en_def": "a number showing how many people like a leader or service",
    "cn_def": "支持度；滿意度評分"
  }
};

const EXTRA_GLOSSES = {};
