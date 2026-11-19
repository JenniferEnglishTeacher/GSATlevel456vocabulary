// Topic 449 Quiz Data: Writing 寫作
// Source word list: https://www.examword.com/group-topic/writing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T449 - Writing 寫作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "author",
    "pos": "n.",
    "cn_def": "作者；作家",
    "en_def": "a person who writes a book or article",
    "sentence": "A: Who should we invite to give the opening talk at our company's annual sales conference in March, since the speaker we booked last year has already retired? B: Let's ask the {{BLANK}} of that popular book on customer service, because many of our staff have read it and would love to meet her in person.",
    "cn": "A：既然我們去年邀請的講者已經退休了，三月公司年度業務大會的開場演講要邀請誰呢？ B：我們去邀請那本熱門客服書籍的【作者】吧，因為很多同事都讀過那本書，也很想親自見見她。"
  },
  {
    "word": "text",
    "pos": "n.",
    "cn_def": "文字；文本；內文",
    "en_def": "the written words in a document, book, or message",
    "sentence": "A: The designer sent the new brochure for our hotel this morning, but did you notice anything wrong with the layout on the second page? B: Yes, the {{BLANK}} is too small for older guests to read easily, so I asked her to make the font larger and add more space between the photos.",
    "cn": "A：設計師今天早上寄來了我們飯店的新手冊，你有注意到第二頁的版面有什麼問題嗎？ B：有，那些【文字】太小了，年長的客人不容易閱讀，所以我請她把字體放大，並在照片之間多留一些空間。"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "cn_def": "句子",
    "en_def": "a group of words that expresses a complete thought",
    "sentence": "A: Could you look at the email I wrote to the new supplier before I send it this afternoon, because I'm worried it sounds a little rude? B: It looks fine overall, but the first {{BLANK}} is very long and confusing, so try splitting it into two shorter parts and starting with a polite greeting.",
    "cn": "A：我今天下午要寄信給新的供應商，寄出前你可以幫我看一下嗎？我擔心聽起來有點不禮貌。 B：整體看起來不錯，但第一個【句子】太長又讓人困惑，試著把它拆成兩個較短的部分，並用禮貌的問候語開頭。"
  },
  {
    "word": "paragraph",
    "pos": "n.",
    "cn_def": "段落",
    "en_def": "a part of a piece of writing that starts on a new line and deals with one idea",
    "sentence": "A: The manager said our proposal for the new training program was too long, so which part do you think we should cut before Friday's meeting? B: We could remove the third {{BLANK}} about the history of the company, since the directors already know that information and only want to see the costs and benefits.",
    "cn": "A：經理說我們的新訓練計畫提案太長了，你覺得在週五開會之前應該刪掉哪一部分？ B：我們可以刪掉關於公司歷史的第三個【段落】，因為董事們已經知道那些資訊，他們只想看成本和效益。"
  },
  {
    "word": "essay",
    "pos": "n.",
    "cn_def": "短文；論文；散文",
    "en_def": "a short piece of writing on one subject, often for a class or contest",
    "sentence": "A: Why has Kevin been staying late in the library every night this week instead of joining us for dinner after work? B: He is writing an {{BLANK}} for the company's scholarship program, and the winner will get free tuition for a business course at the university next year, so he really wants to do well.",
    "cn": "A：為什麼凱文這週每晚都待在圖書館到很晚，而不是下班後跟我們一起吃晚餐？ B：他正在為公司的獎學金計畫寫一篇【短文】，獲勝者明年可以免費上大學的商業課程，所以他非常想表現好。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章；報導",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "sentence": "A: How did so many new customers find out about our small bakery so quickly after we opened the second shop last month? B: A local newspaper printed a long {{BLANK}} about our homemade bread and friendly staff, and after that, people started lining up outside the door every morning before we even opened.",
    "cn": "A：上個月我們開了第二家店之後，怎麼會這麼快就有這麼多新顧客知道我們這家小麵包店？ B：當地一家報紙刊登了一篇關於我們手工麵包和親切員工的長篇【報導】，從那之後，每天早上還沒開門就有人在門外排隊了。"
  },
  {
    "word": "story",
    "pos": "n.",
    "cn_def": "故事；報導",
    "en_def": "a description of events, real or imagined, told to interest people",
    "sentence": "A: The marketing team wants a new video for our website, but what kind of message do you think will make customers trust our brand more? B: I think we should tell the {{BLANK}} of how our founder started the business in her small kitchen twenty years ago, because real experiences make people feel closer to a company.",
    "cn": "A：行銷團隊想為我們的網站拍一支新影片，你覺得什麼樣的訊息能讓顧客更信任我們的品牌？ B：我覺得我們應該講述創辦人二十年前如何在她的小廚房創業的【故事】，因為真實的經歷會讓人覺得和公司更親近。"
  },
  {
    "word": "draft",
    "pos": "n.",
    "cn_def": "草稿；初稿",
    "en_def": "an early version of a piece of writing that will be changed later",
    "sentence": "A: Have you finished the annual report that the board of directors asked for, because the deadline is next Tuesday and they need time to review it? B: Not completely, but I sent the first {{BLANK}} to my supervisor yesterday so she can give me comments before I add the final sales numbers.",
    "cn": "A：董事會要的年度報告你完成了嗎？截止日是下週二，他們需要時間審閱。 B：還沒完全完成，但我昨天已經把第一份【草稿】寄給主管了，這樣她就能在我加入最後的銷售數字之前給我意見。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯；修改",
    "en_def": "to correct and improve a piece of writing before it is used",
    "sentence": "A: The new product catalog is going to the printer on Thursday, but are you sure there are no mistakes in the prices and descriptions? B: Not yet, so I asked Linda to {{BLANK}} every page carefully tomorrow morning, because she has a sharp eye for small errors and worked in publishing for many years.",
    "cn": "A：新的產品目錄週四就要送印了，你確定價格和說明都沒有錯誤嗎？ B：還不確定，所以我請琳達明天早上仔細【編輯】每一頁，因為她很會發現小錯誤，而且在出版業工作了很多年。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修訂；修改",
    "en_def": "to change a piece of writing or a plan to make it better or more correct",
    "sentence": "A: The client called this morning and said our proposal does not match their new budget, so what should we do before the meeting next week? B: We need to {{BLANK}} the plan and lower some of the costs, especially for advertising, and then send them the updated version by Friday afternoon.",
    "cn": "A：客戶今天早上打電話來說我們的提案不符合他們新的預算，下週開會前我們該怎麼辦？ B：我們需要【修訂】計畫並降低部分成本，特別是廣告費，然後在週五下午之前把更新的版本寄給他們。"
  },
  {
    "word": "describe",
    "pos": "v.",
    "cn_def": "描述；形容",
    "en_def": "to say or write what someone or something is like",
    "sentence": "A: The police officer at the front desk asked me about the man who took my bag at the train station, but I was too nervous to remember much. B: Just try to {{BLANK}} his clothes, his height, and which direction he ran, because even small details can help them find him on the security cameras.",
    "cn": "A：櫃檯的警察問我在火車站拿走我包包的那個男人的事，但我當時太緊張了，記不太清楚。 B：試著【描述】他的衣服、身高和他往哪個方向跑就好，因為即使是小細節也能幫助他們在監視器畫面中找到他。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand by giving details or reasons",
    "sentence": "A: Several new employees seem confused about the new system for booking meeting rooms, and some of them double-booked the large room yesterday. B: I'll {{BLANK}} the steps again at the staff meeting tomorrow and also put a simple guide with pictures on the notice board next to the kitchen.",
    "cn": "A：好幾位新員工似乎對新的會議室預約系統感到困惑，昨天還有人重複預約了大會議室。 B：我明天會在員工會議上再【解釋】一次步驟，也會在茶水間旁的公告欄貼一份附圖的簡單指南。"
  },
  {
    "word": "express",
    "pos": "v.",
    "cn_def": "表達",
    "en_def": "to show a feeling or opinion in words or actions",
    "sentence": "A: Our biggest customer was very patient when their order arrived two weeks late, so how should we thank them for staying with us? B: The manager wants to send a handwritten card to {{BLANK}} our thanks, and we will also give them a discount on their next order as a small gift.",
    "cn": "A：我們最大的客戶在訂單晚了兩週才到貨時非常有耐心，我們該如何感謝他們繼續和我們合作呢？ B：經理想寄一張手寫卡片來【表達】我們的謝意，我們也會在他們下一筆訂單給予折扣作為小禮物。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "組織；整理；安排",
    "en_def": "to arrange ideas or things in a clear order",
    "sentence": "A: My presentation for the sales meeting has lots of useful information, but my coworkers said it was hard to follow, so what went wrong? B: You should {{BLANK}} your main points in a logical order, starting with the problem, then the solution, and finally the results, so the audience can follow you easily.",
    "cn": "A：我在業務會議上的簡報有很多有用的資訊，但同事說很難跟上，是哪裡出了問題？ B：你應該把主要論點按照合理的順序【組織】起來，先講問題，再講解決方法，最後講結果，這樣聽眾才容易跟上。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "撰寫；作（曲）",
    "en_def": "to write a letter, speech, or piece of music carefully",
    "sentence": "A: The CEO is traveling overseas this week, but who will write the message to staff about the office move before the holiday? B: She asked her assistant to {{BLANK}} a short email explaining the new address and the moving dates, and she will check it on her phone before it goes out on Monday.",
    "cn": "A：執行長這週在國外出差，那誰要在假期前寫關於辦公室搬遷的信給員工呢？ B：她請她的助理【撰寫】一封簡短的電子郵件，說明新地址和搬遷日期，她會在週一寄出前用手機檢查。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發表；公布",
    "en_def": "to print or put a book, article, or information online for the public",
    "sentence": "A: When will the results of our customer satisfaction survey be shared with the public, since many reporters have been calling the office about it? B: We plan to {{BLANK}} the full report on our website next Wednesday, after the directors approve it, and we will also send a summary to all the local newspapers.",
    "cn": "A：我們的顧客滿意度調查結果什麼時候會對外公開？很多記者一直打電話到辦公室詢問。 B：我們計畫在董事們核准後，於下週三在官網上【公布】完整報告，也會寄一份摘要給所有地方報社。"
  },
  {
    "word": "topic",
    "pos": "n.",
    "cn_def": "主題；話題",
    "en_def": "the subject that people talk or write about",
    "sentence": "A: The training team wants me to give a thirty-minute talk to new employees next month, but I have no idea what to talk about. B: Why don't you choose a {{BLANK}} you know well, like time management for busy salespeople, because you always finish your work early even when you have many clients?",
    "cn": "A：訓練團隊希望我下個月給新進員工做一場三十分鐘的演講，但我完全不知道要講什麼。 B：你何不選一個你很熟悉的【主題】，像是忙碌業務員的時間管理？因為即使客戶很多，你總是能提早完成工作。"
  },
  {
    "word": "idea",
    "pos": "n.",
    "cn_def": "想法；主意",
    "en_def": "a thought or plan about what to do",
    "sentence": "A: Sales of our coffee drinks have dropped during the hot summer months, so what can we do to bring more customers into the café? B: I have an {{BLANK}} about adding cold fruit teas to the menu and offering a free cookie with every large drink, which could attract students on their way home.",
    "cn": "A：炎熱的夏季月份我們的咖啡飲品銷量下降了，我們可以怎麼做來吸引更多顧客來咖啡廳？ B：我有一個【想法】，就是在菜單上加入冰水果茶，並且每杯大杯飲料送一塊免費餅乾，這可能會吸引放學回家的學生。"
  },
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "論點；論證；爭論",
    "en_def": "a reason or set of reasons you give to show that something is true or right",
    "sentence": "A: Do you think the directors will agree to let staff work from home two days a week, even though some of them prefer everyone in the office? B: I think so, because our {{BLANK}} is very strong: the survey shows that people finish more tasks at home and the company saves money on electricity.",
    "cn": "A：你覺得董事們會同意讓員工每週在家工作兩天嗎？儘管有些董事比較希望大家都在辦公室。 B：我覺得會，因為我們的【論點】很有力：調查顯示員工在家完成更多工作，公司也能節省電費。"
  },
  {
    "word": "example",
    "pos": "n.",
    "cn_def": "例子；範例",
    "en_def": "something that shows what other things of the same kind are like",
    "sentence": "A: I'm writing a report on how small shops can use social media, but my manager says it is too general and hard to understand. B: You should add a real {{BLANK}}, like the flower shop downtown that doubled its sales after posting daily photos online, so readers can see how it works in practice.",
    "cn": "A：我在寫一份關於小商店如何運用社群媒體的報告，但經理說內容太籠統、很難理解。 B：你應該加入一個真實的【例子】，像是市中心那家花店每天在網路上貼照片後業績翻倍，這樣讀者就能看到實際的做法。"
  },
  {
    "word": "grammar",
    "pos": "n.",
    "cn_def": "文法",
    "en_def": "the rules of how words are put together in a language",
    "sentence": "A: Our company is hiring a new person to answer emails from international customers, so what skills should we look for in the job interview? B: The person must have good {{BLANK}} and a polite writing style, because small mistakes in our messages can make customers think we are careless with their orders.",
    "cn": "A：我們公司要雇用一位新人來回覆國際客戶的電子郵件，面試時應該注重哪些能力？ B：這個人必須有良好的【文法】和禮貌的寫作風格，因為我們訊息中的小錯誤可能會讓客戶覺得我們處理訂單很粗心。"
  },
  {
    "word": "spelling",
    "pos": "n.",
    "cn_def": "拼字；拼寫",
    "en_def": "the way a word is written with the correct letters",
    "sentence": "A: Why did the printer call us about the new business cards that we ordered for the sales team last week? B: They noticed a problem with the {{BLANK}} of our manager's last name, so they stopped the job and asked us to confirm the correct letters before printing five hundred cards.",
    "cn": "A：為什麼印刷廠打電話來詢問我們上週為業務團隊訂的新名片？ B：他們注意到經理姓氏的【拼寫】有問題，所以暫停了印製，請我們在印五百張名片之前先確認正確的字母。"
  },
  {
    "word": "punctuation",
    "pos": "n.",
    "cn_def": "標點符號",
    "en_def": "marks such as commas and periods used in writing",
    "sentence": "A: The customer said our instruction manual is confusing, but the words themselves seem simple and easy to understand, don't they? B: Yes, but the {{BLANK}} is a mess, with missing commas and periods everywhere, so the long steps run together and people don't know where one action ends and the next begins.",
    "cn": "A：顧客說我們的使用說明書很難懂，但用字本身看起來很簡單、容易理解，不是嗎？ B：是的，但【標點符號】一團亂，到處都少了逗號和句號，所以長長的步驟全連在一起，大家不知道一個動作在哪裡結束、下一個從哪裡開始。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清楚的；清晰的",
    "en_def": "easy to understand or see",
    "sentence": "A: The new staff members keep asking the same questions about how to request vacation days, even though we sent them a long email last month. B: Maybe the instructions weren't {{BLANK}} enough, so let's make a short list with three simple steps and put it on the company website where everyone can find it.",
    "cn": "A：新員工一直在問同樣的請假申請問題，儘管我們上個月已經寄給他們一封很長的電子郵件。 B：也許說明不夠【清楚】，我們來做一份只有三個簡單步驟的清單，放在公司網站上讓大家都找得到。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；創造性的",
    "en_def": "having or using new and original ideas",
    "sentence": "A: We need a new name and slogan for our healthy snack line before the food fair in Taipei next month, but nobody on our team has a good suggestion. B: Let's hire a {{BLANK}} advertising agency that has worked with young brands, because they can think of fresh ideas that will attract shoppers at the fair.",
    "cn": "A：下個月台北食品展之前，我們需要為健康零食系列取新名字和標語，但團隊裡沒人有好建議。 B：我們請一家和年輕品牌合作過、很有【創意的】廣告公司吧，因為他們能想出吸引展場消費者的新點子。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "suitable for serious or official situations",
    "sentence": "A: I'm writing to the government office to ask about the license for our new restaurant, so can I use the same friendly style that I use with customers? B: No, you should use a {{BLANK}} style with full sentences and polite titles, because officials expect business letters to sound serious and respectful.",
    "cn": "A：我要寫信給政府機關詢問我們新餐廳的執照，我可以用和顧客說話時一樣親切的語氣嗎？ B：不行，你應該用【正式的】文體，寫完整的句子並使用禮貌的稱謂，因為官員期望商業信函聽起來嚴肅且尊重。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的；輕鬆的",
    "en_def": "relaxed and friendly, not serious or official",
    "sentence": "A: Should I wear a suit to the team lunch on Friday, since the new director will be there and I want to make a good impression? B: Not really, it's an {{BLANK}} event at a small café near the park, so most people will wear jeans and simple shirts, and the director just wants to chat with everyone.",
    "cn": "A：週五的團隊午餐我應該穿西裝嗎？新的主管會出席，我想留下好印象。 B：不太需要，那是在公園附近一家小咖啡廳舉辦的【非正式的】活動，大部分人會穿牛仔褲和簡單的襯衫，主管只是想和大家聊聊天。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；小心地",
    "en_def": "with attention so that you avoid mistakes",
    "sentence": "A: The lawyer sent us the new rental contract for the office building, and the landlord wants us to sign it by tomorrow afternoon. B: Please read every page {{BLANK}} before you sign anything, especially the part about extra fees, because last time we missed a rule about cleaning costs and paid much more than expected.",
    "cn": "A：律師寄來辦公大樓的新租約，房東希望我們明天下午前簽好。 B：在簽任何東西之前，請【仔細地】閱讀每一頁，特別是關於額外費用的部分，因為上次我們漏看了一條清潔費的規定，結果付了比預期多很多的錢。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see, hear, or understand",
    "sentence": "A: Many people at the back of the conference hall complained that they couldn't follow the speaker during this morning's session, so what happened? B: The microphone wasn't working well and she didn't speak {{BLANK}}, so I've asked the technician to check the sound system and give her a better microphone this afternoon.",
    "cn": "A：會議廳後方很多人抱怨聽不懂今天早上那場講者的內容，發生什麼事了？ B：麥克風不太好用，她也講得不夠【清楚】，所以我已經請技術人員檢查音響系統，下午給她一支比較好的麥克風。"
  },
  {
    "word": "effectively",
    "pos": "adv.",
    "cn_def": "有效地",
    "en_def": "in a way that produces the result you want",
    "sentence": "A: Our team keeps missing deadlines even though everyone works long hours, so do you know what the problem might be? B: I think we don't communicate {{BLANK}}, because people send too many long emails and important messages get lost, so maybe we should have a short meeting every morning instead.",
    "cn": "A：雖然大家都工作很長時間，我們團隊還是一直趕不上截止日，你知道問題可能出在哪裡嗎？ B：我覺得我們沒有【有效地】溝通，因為大家寄太多長篇電子郵件，重要訊息都被淹沒了，也許我們應該改成每天早上開個短會。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地；創造性地",
    "en_def": "in a way that uses new and original ideas",
    "sentence": "A: Our budget for the holiday advertising campaign was cut in half, so how can we still get people's attention without spending much money? B: We need to think {{BLANK}}, maybe by asking customers to share photos with our products online and giving small prizes, which costs little but spreads quickly on social media.",
    "cn": "A：我們節慶廣告活動的預算被砍了一半，要怎麼樣在不花太多錢的情況下仍然吸引大家的注意？ B：我們需要【有創意地】思考，也許請顧客在網路上分享使用我們產品的照片並送小獎品，這樣花費不多卻能在社群媒體上迅速傳開。"
  },
  {
    "word": "briefly",
    "pos": "adv.",
    "cn_def": "簡短地；短暫地",
    "en_def": "for a short time or in a few words",
    "sentence": "A: The meeting with the investors starts in ten minutes, and they only have half an hour, so how much time should I spend on our company history? B: Just talk about it {{BLANK}}, maybe for two minutes, and then move on to the new products and sales figures, because those are what they really want to hear.",
    "cn": "A：和投資人的會議十分鐘後開始，他們只有半小時，我該花多少時間介紹公司歷史？ B：【簡短地】說一下就好，大概兩分鐘，然後就進入新產品和銷售數字，因為那才是他們真正想聽的。"
  }
];

const MCQS = [
  {
    "q": "The _____ of the new travel guide will sign copies at the bookstore on Saturday. Customers who buy the book will receive a free bookmark.",
    "options": [
      "author",
      "grammar",
      "punctuation",
      "paragraph"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please send the _____ for the website banner by Monday. The designer needs the exact words before she can finish the layout.",
    "options": [
      "author",
      "text",
      "argument",
      "topic"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Each _____ in the safety notice should be short and simple. Workers need to understand the rules quickly in an emergency.",
    "options": [
      "author",
      "grammar",
      "sentence",
      "spelling"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The second _____ of the letter explains the new refund policy. Customers should read it before returning any items to the store.",
    "options": [
      "author",
      "spelling",
      "grammar",
      "paragraph"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Applicants must submit a 500-word _____ about their career goals. The hiring committee will review all applications next week.",
    "options": [
      "punctuation",
      "essay",
      "grammar",
      "spelling"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The magazine printed a short _____ about our new eco-friendly packaging. Since then, online orders have increased by twenty percent.",
    "options": [
      "punctuation",
      "grammar",
      "spelling",
      "article"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "I have finished the first _____ of the speech for the opening ceremony. Could you read it and suggest some changes?",
    "options": [
      "draft",
      "punctuation",
      "grammar",
      "author"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Linda Chen will _____ the newsletter before it is sent to all employees. She always finds small mistakes that others miss.",
    "options": [
      "compose",
      "explain",
      "edit",
      "express"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "After hearing the client's feedback, we had to _____ our original design. The new version uses brighter colors and larger text.",
    "options": [
      "publish",
      "describe",
      "express",
      "revise"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "On the insurance form, please _____ exactly how the damage happened. Include the date, time, and location of the accident.",
    "options": [
      "publish",
      "describe",
      "compose",
      "organize"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The trainer will _____ how to use the new accounting software. Each session will last about two hours on Tuesday afternoon.",
    "options": [
      "explain",
      "publish",
      "compose",
      "express"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Many employees used the survey to _____ their concerns about the longer working hours. Management promised to respond within one week.",
    "options": [
      "publish",
      "organize",
      "edit",
      "express"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Before writing the proposal, _____ your ideas into three main sections. This will make the document easier for the directors to follow.",
    "options": [
      "publish",
      "express",
      "organize",
      "describe"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The assistant was asked to _____ a short thank-you letter to the conference speakers. It must be sent before the end of the week.",
    "options": [
      "compose",
      "explain",
      "describe",
      "organize"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The research team plans to _____ its findings in a medical journal next spring. The results could change how hospitals treat patients.",
    "options": [
      "express",
      "publish",
      "describe",
      "explain"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The main _____ of this year's conference is online marketing for small businesses. Over three hundred people have already registered.",
    "options": [
      "punctuation",
      "spelling",
      "topic",
      "grammar"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Mark came up with a great _____ for reducing paper use in the office. Everyone now shares documents through the company's online system.",
    "options": [
      "idea",
      "spelling",
      "punctuation",
      "grammar"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The manager presented a strong _____ for opening a branch in Kaohsiung. She showed that demand there has grown quickly.",
    "options": [
      "spelling",
      "punctuation",
      "paragraph",
      "argument"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The trainer gave an _____ of a polite complaint letter. New staff can use it as a model when they reply to customers.",
    "options": [
      "grammar",
      "example",
      "spelling",
      "punctuation"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The English course focuses on business vocabulary and basic _____. Students practice writing emails and reports every week.",
    "options": [
      "author",
      "idea",
      "grammar",
      "argument"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The software automatically checks the _____ of every word you type. However, you should still read your report again before sending it.",
    "options": [
      "author",
      "idea",
      "topic",
      "spelling"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Add the missing _____, such as commas and periods, before you print the menu. Otherwise the dishes and prices will look confusing.",
    "options": [
      "punctuation",
      "author",
      "idea",
      "argument"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The instructions on the box were very _____, so we assembled the shelves in twenty minutes. Nobody needed to call customer service.",
    "options": [
      "formal",
      "creative",
      "clear",
      "informal"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The company is looking for a _____ designer to develop fresh ideas for its packaging. Experience with young brands is preferred.",
    "options": [
      "informal",
      "creative",
      "clear",
      "formal"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Job applicants should wear _____ business clothes to the interview. Jeans and sneakers are not appropriate for this occasion.",
    "options": [
      "informal",
      "creative",
      "clear",
      "formal"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The weekly team meeting is quite _____, and staff often bring coffee and snacks. Anyone is welcome to share new ideas freely.",
    "options": [
      "formal",
      "clear",
      "informal",
      "creative"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Please check the shipping address _____ before you confirm the order. Wrong addresses cause delays and extra delivery costs.",
    "options": [
      "carefully",
      "creatively",
      "briefly",
      "clearly"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The price of each item should be shown _____ on the shelf. Customers get upset when they cannot see how much things cost.",
    "options": [
      "creatively",
      "clearly",
      "briefly",
      "effectively"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The new scheduling app helps our nurses manage their time more _____. Fewer shifts are now left without enough staff.",
    "options": [
      "briefly",
      "creatively",
      "clearly",
      "effectively"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The director spoke _____ at the start of the meeting and then handed it over to the sales team. Her talk lasted only three minutes.",
    "options": [
      "briefly",
      "creatively",
      "carefully",
      "clearly"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "author": {
    "pos": "n.",
    "en_def": "a person who writes a book or article",
    "cn_def": "作者；作家"
  },
  "text": {
    "pos": "n.",
    "en_def": "the written words in a document, book, or message",
    "cn_def": "文字；文本；內文"
  },
  "sentence": {
    "pos": "n.",
    "en_def": "a group of words that expresses a complete thought",
    "cn_def": "句子"
  },
  "paragraph": {
    "pos": "n.",
    "en_def": "a part of a piece of writing that starts on a new line and deals with one idea",
    "cn_def": "段落"
  },
  "essay": {
    "pos": "n.",
    "en_def": "a short piece of writing on one subject, often for a class or contest",
    "cn_def": "短文；論文；散文"
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "cn_def": "文章；報導"
  },
  "story": {
    "pos": "n.",
    "en_def": "a description of events, real or imagined, told to interest people",
    "cn_def": "故事；報導"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing that will be changed later",
    "cn_def": "草稿；初稿"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing before it is used",
    "cn_def": "編輯；修改"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change a piece of writing or a plan to make it better or more correct",
    "cn_def": "修訂；修改"
  },
  "describe": {
    "pos": "v.",
    "en_def": "to say or write what someone or something is like",
    "cn_def": "描述；形容"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand by giving details or reasons",
    "cn_def": "解釋；說明"
  },
  "express": {
    "pos": "v.",
    "en_def": "to show a feeling or opinion in words or actions",
    "cn_def": "表達"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange ideas or things in a clear order",
    "cn_def": "組織；整理；安排"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write a letter, speech, or piece of music carefully",
    "cn_def": "撰寫；作（曲）"
  },
  "publish": {
    "pos": "v.",
    "en_def": "to print or put a book, article, or information online for the public",
    "cn_def": "出版；發表；公布"
  },
  "topic": {
    "pos": "n.",
    "en_def": "the subject that people talk or write about",
    "cn_def": "主題；話題"
  },
  "idea": {
    "pos": "n.",
    "en_def": "a thought or plan about what to do",
    "cn_def": "想法；主意"
  },
  "argument": {
    "pos": "n.",
    "en_def": "a reason or set of reasons you give to show that something is true or right",
    "cn_def": "論點；論證；爭論"
  },
  "example": {
    "pos": "n.",
    "en_def": "something that shows what other things of the same kind are like",
    "cn_def": "例子；範例"
  },
  "grammar": {
    "pos": "n.",
    "en_def": "the rules of how words are put together in a language",
    "cn_def": "文法"
  },
  "spelling": {
    "pos": "n.",
    "en_def": "the way a word is written with the correct letters",
    "cn_def": "拼字；拼寫"
  },
  "punctuation": {
    "pos": "n.",
    "en_def": "marks such as commas and periods used in writing",
    "cn_def": "標點符號"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to understand or see",
    "cn_def": "清楚的；清晰的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "having or using new and original ideas",
    "cn_def": "有創意的；創造性的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "suitable for serious or official situations",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly, not serious or official",
    "cn_def": "非正式的；輕鬆的"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with attention so that you avoid mistakes",
    "cn_def": "仔細地；小心地"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see, hear, or understand",
    "cn_def": "清楚地"
  },
  "effectively": {
    "pos": "adv.",
    "en_def": "in a way that produces the result you want",
    "cn_def": "有效地"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and original ideas",
    "cn_def": "有創意地；創造性地"
  },
  "briefly": {
    "pos": "adv.",
    "en_def": "for a short time or in a few words",
    "cn_def": "簡短地；短暫地"
  }
};

const EXTRA_GLOSSES = {};
