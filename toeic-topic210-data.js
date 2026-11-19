// Topic 210 Quiz Data: Language 語言
// Source word list: https://www.examword.com/group-topic/language — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T210 - Language 語言",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的；有利的",
    "en_def": "helpful or good for someone",
    "sentence": "A: Our company is opening a new branch in Japan next spring, so do you think it is worth paying for Japanese lessons for the sales team this year? B: Yes, I think it would be very {{BLANK}}, because clients there feel more comfortable when our staff can greet them and explain products in their own language.",
    "cn": "A：我們公司明年春天要在日本開設新分公司，你覺得今年值得為業務團隊付費上日語課嗎？ B：是的，我認為那會非常【有益】，因為當我們的員工能用客戶自己的語言打招呼和介紹產品時，那裡的客戶會感到更自在。"
  },
  {
    "word": "bilingual",
    "pos": "adj.",
    "cn_def": "雙語的；能說兩種語言的",
    "en_def": "able to speak two languages well",
    "sentence": "A: The hotel manager said she needs a new receptionist before the international conference next month, so what kind of person is she looking for? B: She wants someone who is {{BLANK}} in English and Mandarin, because many guests from overseas will arrive late at night and need help checking in quickly.",
    "cn": "A：飯店經理說她在下個月的國際會議之前需要一位新的櫃檯接待員，那她在找什麼樣的人？ B：她想要一位英文和中文【雙語】流利的人，因為很多海外客人會在深夜抵達，需要協助快速辦理入住。"
  },
  {
    "word": "linguistic",
    "pos": "adj.",
    "cn_def": "語言的；語言學的",
    "en_def": "connected with language",
    "sentence": "A: Why did the marketing team decide to change the name of our new energy drink before selling it in South America? B: A local consultant found a {{BLANK}} problem with the original name, because in Spanish it sounded like a rude word, and that could have hurt our brand badly.",
    "cn": "A：為什麼行銷團隊決定在南美洲販售我們新的能量飲料之前更改名稱？ B：一位當地顧問發現原本的名稱有【語言上的】問題，因為它在西班牙文裡聽起來像一個粗魯的字，那可能會嚴重傷害我們的品牌。"
  },
  {
    "word": "linguist",
    "pos": "n.",
    "cn_def": "語言學家；通曉多種語言的人",
    "en_def": "a person who studies languages or speaks several languages",
    "sentence": "A: The publishing company wants to translate our training manual into five languages, but who will check that the meaning stays the same in every version? B: We have hired a professional {{BLANK}} who studies how languages work, and she will review each translation carefully before the books are printed in March.",
    "cn": "A：出版公司想把我們的訓練手冊翻譯成五種語言，但誰來確認每個版本的意思都保持一致？ B：我們聘請了一位研究語言運作方式的專業【語言學家】，她會在三月書籍付印前仔細審查每一份翻譯。"
  },
  {
    "word": "commercial",
    "pos": "adj.",
    "cn_def": "商業的；商務的",
    "en_def": "related to business and buying and selling",
    "sentence": "A: Our law firm is thinking about offering English classes for staff, but should the teacher focus on everyday conversation or something more specific? B: I think the classes should focus on {{BLANK}} English, such as writing contracts, negotiating prices, and answering business emails, because those are the tasks our lawyers do every day.",
    "cn": "A：我們律師事務所正考慮為員工開英文課，但老師應該著重日常會話還是更具體的內容？ B：我認為課程應該著重【商業】英文，例如撰寫合約、議價和回覆商務電子郵件，因為那些是我們律師每天要做的工作。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通；傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: The new engineers from Germany started working at our factory this week, so how are they getting along with the local workers on the production line? B: They still find it hard to {{BLANK}} with everyone clearly, so the supervisor has put up picture signs and arranged a translator for the morning meetings.",
    "cn": "A：從德國來的新工程師這週開始在我們工廠上班，他們和生產線上的本地員工相處得怎麼樣？ B：他們仍然覺得很難和大家清楚地【溝通】，所以主管貼了圖片標示，並為早上的會議安排了一位翻譯。"
  },
  {
    "word": "multitasking",
    "pos": "n.",
    "cn_def": "多工處理；同時做多件事",
    "en_def": "doing several jobs at the same time",
    "sentence": "A: The job advertisement for the front desk position says the person must be good at {{BLANK}}, but what does that really mean in a busy hotel? B: It means answering phone calls, checking guests in, and replying to emails in different languages at the same time without making careless mistakes during the evening rush.",
    "cn": "A：櫃檯職缺的徵才廣告說應徵者必須擅長【同時處理多項工作】，但在一間忙碌的飯店裡那到底是什麼意思？ B：意思是在晚上的尖峰時段，同時接電話、幫客人辦理入住，並用不同語言回覆電子郵件，而且不犯粗心的錯誤。"
  },
  {
    "word": "outperform",
    "pos": "v.",
    "cn_def": "表現優於；勝過",
    "en_def": "to do better than another person or thing",
    "sentence": "A: Have you seen the sales report for the third quarter, and did the new team in Singapore do as well as the managers expected? B: Yes, they managed to {{BLANK}} every other branch in the region, mainly because most of the staff speak three languages and can serve customers from many countries.",
    "cn": "A：你看過第三季的銷售報告了嗎？新加坡的新團隊表現是否如經理們預期的一樣好？ B：是的，他們成功【勝過】了該地區所有其他分公司，主要是因為大部分員工會說三種語言，能夠服務來自許多國家的客戶。"
  },
  {
    "word": "monolingual",
    "pos": "adj.",
    "cn_def": "單語的；只用一種語言的",
    "en_def": "using or speaking only one language",
    "sentence": "A: Should we buy a new dictionary for the translation department, or are the ones on the shelf good enough for the team? B: Most of the old ones are {{BLANK}} English dictionaries, which only explain words in English, so the translators really need a few bilingual ones for checking Chinese meanings quickly.",
    "cn": "A：我們應該為翻譯部門買新字典，還是架上的那些對團隊來說就夠用了？ B：大部分舊字典都是只用英文解釋單字的【單語】英文字典，所以翻譯人員真的需要幾本雙語字典，以便快速查核中文意思。"
  },
  {
    "word": "prioritize",
    "pos": "v.",
    "cn_def": "優先處理；排定優先順序",
    "en_def": "to decide which things are most important and do them first",
    "sentence": "A: I have so many tasks this week, including a French lesson, a client presentation, and two reports, so I really don't know where to start. B: You should {{BLANK}} the client presentation first, because it is due on Wednesday, and then you can study French in the evenings after the reports are finished.",
    "cn": "A：我這週有好多工作，包括一堂法文課、一場客戶簡報和兩份報告，我真的不知道該從哪裡開始。 B：你應該【優先處理】客戶簡報，因為它星期三就要交，然後在報告完成後，你可以在晚上讀法文。"
  },
  {
    "word": "minority",
    "pos": "n.",
    "cn_def": "少數；少數群體",
    "en_def": "a small part of a group",
    "sentence": "A: Why is the city government printing the new bus guide in several languages instead of only in English this year? B: Because a growing {{BLANK}} of residents speak Vietnamese or Thai at home, and officials want everyone to understand the new routes and ticket prices clearly.",
    "cn": "A：為什麼市政府今年要用好幾種語言印製新的公車指南，而不是只有英文？ B：因為有越來越多在家說越南語或泰語的【少數】居民，官員們希望每個人都能清楚了解新路線和票價。"
  },
  {
    "word": "inhibition",
    "pos": "n.",
    "cn_def": "拘束；壓抑；顧慮",
    "en_def": "a feeling that stops you from acting or speaking freely",
    "sentence": "A: Maria knows a lot of English grammar, so why does she stay so quiet during our weekly meetings with the overseas clients? B: She has a strong {{BLANK}} about speaking in front of others, because she worries about making mistakes, so the manager is going to give her small speaking tasks first.",
    "cn": "A：Maria懂很多英文文法，那她為什麼在我們每週和海外客戶的會議中都那麼安靜？ B：她對在別人面前說話有很強的【顧慮】，因為她擔心犯錯，所以經理打算先給她一些簡單的口說任務。"
  },
  {
    "word": "gain",
    "pos": "v.",
    "cn_def": "獲得；取得",
    "en_def": "to get something useful, such as skills or experience",
    "sentence": "A: Why did you decide to work at the Tokyo office for six months when you already had a good position here in Taipei? B: I wanted to {{BLANK}} real experience using Japanese with customers every day, and I believe this will help me get promoted to the international sales team next year.",
    "cn": "A：你在台北這裡已經有不錯的職位了，為什麼還決定到東京辦公室工作六個月？ B：我想【獲得】每天和客戶使用日語的實際經驗，而且我相信這會幫助我明年升到國際業務團隊。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫；遲疑",
    "en_def": "to pause before doing or saying something because you are unsure",
    "sentence": "A: I'm going to the trade fair in Seoul next week, but I'm worried because my Korean is still very basic and the schedule is busy. B: Don't {{BLANK}} to ask our local partner for help if you get lost, because he speaks good English and has promised to meet you at the airport.",
    "cn": "A：我下週要去首爾參加商展，但我很擔心，因為我的韓文還很基礎，而且行程很忙。 B：如果你迷路了，不要【猶豫】，去請我們的當地合作夥伴幫忙，因為他英文很好，而且已經答應會到機場接你。"
  },
  {
    "word": "equally",
    "pos": "adv.",
    "cn_def": "同樣地；相等地",
    "en_def": "in the same way or to the same degree",
    "sentence": "A: The training center offers both online and classroom English courses, so which one do you think is better for our busy staff? B: I think both are {{BLANK}} useful, because the online course is more flexible for people who travel, while the classroom course gives more chances to practice speaking with others.",
    "cn": "A：訓練中心提供線上和教室兩種英文課程，你認為哪一種比較適合我們忙碌的員工？ B：我認為兩者【同樣】有用，因為線上課程對經常出差的人比較有彈性，而教室課程則提供更多和別人練習口說的機會。"
  },
  {
    "word": "foremost",
    "pos": "adj.",
    "cn_def": "最重要的；首屈一指的",
    "en_def": "most important or best known",
    "sentence": "A: Who are we inviting to give the main speech at the language education conference in Kaohsiung this December? B: We have invited Dr. Lin, one of the {{BLANK}} experts on second language learning in Asia, and she has agreed to talk about new ways of teaching vocabulary to adults.",
    "cn": "A：今年十二月在高雄舉行的語言教育研討會，我們要邀請誰來做主題演講？ B：我們邀請了林博士，她是亞洲第二語言學習領域【首屈一指的】專家之一，而且她已經同意談談教成人學單字的新方法。"
  },
  {
    "word": "boast",
    "pos": "v.",
    "cn_def": "自誇；以…自豪；擁有",
    "en_def": "to proudly have or say something good",
    "sentence": "A: Why is that language school so popular with business people, even though its fees are higher than other schools in the area? B: The school can {{BLANK}} that ninety percent of its students pass the TOEIC test with a high score after only one semester, so many companies are happy to pay.",
    "cn": "A：為什麼那間語言學校這麼受上班族歡迎，即使它的學費比這區其他學校還高？ B：這間學校可以【自豪地說】，百分之九十的學生只上一學期就以高分通過多益考試，所以許多公司都樂意付費。"
  },
  {
    "word": "literature",
    "pos": "n.",
    "cn_def": "文學",
    "en_def": "books, poems, and plays, especially famous ones",
    "sentence": "A: I heard you are taking an evening class at the university, so is it a business course or something completely different? B: It's actually a course on English {{BLANK}}, and we read short stories and famous novels, which helps me learn new vocabulary and understand Western culture better.",
    "cn": "A：我聽說你在大學上夜間課程，那是商業課程還是完全不同的東西？ B：其實是一門英語【文學】課，我們讀短篇故事和著名小說，這幫助我學習新單字，也更了解西方文化。"
  },
  {
    "word": "interact",
    "pos": "v.",
    "cn_def": "互動；交流",
    "en_def": "to talk or work with other people",
    "sentence": "A: What is the best way for new employees from overseas to improve their Chinese while they are working at our Taichung office? B: They should {{BLANK}} with local coworkers as much as possible, for example by joining lunch groups or weekend activities, instead of only staying with people from their own country.",
    "cn": "A：在我們台中辦公室工作期間，海外來的新員工提升中文最好的方法是什麼？ B：他們應該盡可能和本地同事【互動】，例如參加午餐聚會或週末活動，而不是只和來自自己國家的人在一起。"
  },
  {
    "word": "native",
    "pos": "adj.",
    "cn_def": "本國的；母語的",
    "en_def": "connected with the place where you were born or the first language you learned",
    "sentence": "A: The company is looking for a new person to check all of our English product descriptions before they are posted online next month. B: The manager prefers a {{BLANK}} speaker of English, because small grammar mistakes on the website could make customers think our products are low quality.",
    "cn": "A：公司正在找一個新的人，在下個月上網公布之前檢查我們所有的英文產品說明。 B：經理比較想要以英文為【母語】的人，因為網站上的小文法錯誤可能會讓客戶覺得我們的產品品質不好。"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "cn_def": "努力應付；苦於",
    "en_def": "to try hard to deal with something difficult",
    "sentence": "A: How is the new sales assistant from Brazil doing in her first month, and does she understand the training sessions? B: She is very hardworking, but she still has to {{BLANK}} with technical words during meetings, so I have given her a list of common terms to study at home.",
    "cn": "A：從巴西來的新業務助理第一個月表現得怎麼樣？她聽得懂訓練課程嗎？ B：她非常努力，但她在會議中仍然【苦於】應付專業術語，所以我給了她一份常用術語的清單讓她在家讀。"
  },
  {
    "word": "subtitles",
    "pos": "n.",
    "cn_def": "字幕",
    "en_def": "words on the screen that translate what people say in a film or video",
    "sentence": "A: We are showing the new safety video to all factory workers tomorrow, but some of them don't understand English very well. B: Don't worry, the video department has already added Chinese {{BLANK}} at the bottom of the screen, so everyone can read along while they listen to the instructions.",
    "cn": "A：我們明天要給所有工廠員工播放新的安全影片，但有些人英文不太好。 B：別擔心，影片部門已經在螢幕下方加上了中文【字幕】，所以每個人都能一邊聽說明一邊看文字。"
  },
  {
    "word": "consideration",
    "pos": "n.",
    "cn_def": "考慮；斟酌",
    "en_def": "careful thought about something",
    "sentence": "A: Did the hiring committee choose a candidate for the export manager position yet, or are they still interviewing people this week? B: Not yet, but they are giving serious {{BLANK}} to the applicant who speaks Spanish, because the company plans to expand into Mexico and Chile next year.",
    "cn": "A：招聘委員會選好出口經理的人選了嗎？還是他們這週還在面試？ B：還沒，但他們正在認真【考慮】那位會說西班牙語的應徵者，因為公司計畫明年拓展到墨西哥和智利。"
  },
  {
    "word": "equip",
    "pos": "v.",
    "cn_def": "使具備；裝備",
    "en_def": "to give someone the tools or skills they need",
    "sentence": "A: Why is the company paying for an online language program for every employee in the customer service department this year? B: The goal is to {{BLANK}} our staff with the skills they need to answer calls from international customers, because the number of overseas orders has doubled since last summer.",
    "cn": "A：為什麼公司今年要為客服部門的每位員工支付線上語言課程？ B：目的是讓我們的員工【具備】接聽國際客戶電話所需的技能，因為自從去年夏天以來，海外訂單數量已經增加了一倍。"
  },
  {
    "word": "engaging",
    "pos": "adj.",
    "cn_def": "吸引人的；有趣的",
    "en_def": "interesting and attractive",
    "sentence": "A: Many of our employees stopped coming to the Friday English class after only two weeks, so what should we do to keep them interested? B: We should hire a teacher who can make the lessons more {{BLANK}}, perhaps by using games, role-plays, and real business situations instead of just reading from a textbook.",
    "cn": "A：我們很多員工只上了兩週就不再來星期五的英文課了，我們該怎麼做才能讓他們保持興趣？ B：我們應該聘請一位能讓課程更【吸引人】的老師，也許可以用遊戲、角色扮演和真實的商務情境，而不是只照著課本念。"
  },
  {
    "word": "compelling",
    "pos": "adj.",
    "cn_def": "令人信服的；引人入勝的",
    "en_def": "very convincing or interesting",
    "sentence": "A: The board members were not sure about spending money on language training, so how did you finally get them to agree to the plan? B: I showed them {{BLANK}} evidence from other companies, which proved that staff who speak a second language bring in more customers and make fewer communication mistakes.",
    "cn": "A：董事會成員對花錢在語言訓練上不太確定，你最後是怎麼讓他們同意這個計畫的？ B：我給他們看了其他公司【令人信服的】證據，證明會說第二語言的員工能帶來更多客戶，也比較少犯溝通上的錯誤。"
  },
  {
    "word": "baffle",
    "pos": "v.",
    "cn_def": "使困惑；難倒",
    "en_def": "to confuse someone completely",
    "sentence": "A: Why did so many customers call the help line after we released the new user manual for the coffee machine last week? B: The translation was so poor that it would {{BLANK}} anyone who tried to read it, so we are asking a professional translator to rewrite the whole thing quickly.",
    "cn": "A：為什麼上週我們發布咖啡機的新使用手冊後，有那麼多客戶打電話到客服專線？ B：翻譯差到任何試著閱讀它的人都會被【難倒】，所以我們正請一位專業翻譯人員盡快重寫整份手冊。"
  },
  {
    "word": "complicated",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "difficult to understand because it has many parts",
    "sentence": "A: Why are the new employees from India having so much trouble filling out the forms for their health insurance this month? B: The forms are written in very {{BLANK}} Chinese with many legal terms, so the human resources office is preparing a simple English version to help them finish on time.",
    "cn": "A：為什麼從印度來的新員工這個月填健保表格時遇到這麼多困難？ B：那些表格是用充滿法律術語、非常【複雜的】中文寫成的，所以人資辦公室正在準備一份簡單的英文版本，幫助他們準時完成。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙；阻礙",
    "en_def": "something that makes it difficult to do something",
    "sentence": "A: Our company wants to sell more products in France next year, but what is the biggest problem we need to solve first? B: The main {{BLANK}} is that few of our sales staff can speak French, so we plan to hire local agents and offer language classes to the current team.",
    "cn": "A：我們公司明年想在法國銷售更多產品，但我們首先需要解決的最大問題是什麼？ B：主要的【障礙】是我們的業務人員很少人會說法文，所以我們打算聘請當地代理商，並為現有團隊提供語言課程。"
  },
  {
    "word": "expose",
    "pos": "v.",
    "cn_def": "使接觸；使暴露",
    "en_def": "to let someone experience something new",
    "sentence": "A: How did your son learn to speak such good English before he even started elementary school? B: We tried to {{BLANK}} him to the language every day by playing English songs in the car, watching cartoons together, and talking with our American neighbors in the park on weekends.",
    "cn": "A：你兒子是怎麼在上小學之前就把英文說得這麼好的？ B：我們試著讓他每天【接觸】這個語言，像是在車上播放英文歌、一起看卡通，還有週末在公園和我們的美國鄰居聊天。"
  },
  {
    "word": "broaden",
    "pos": "v.",
    "cn_def": "拓展；擴大",
    "en_def": "to make something wider or bigger",
    "sentence": "A: Why did you accept the offer to work in the Madrid office for two years, since you'll be far away from your family? B: I believe living abroad will {{BLANK}} my view of the world, and learning Spanish will also open many new career opportunities for me when I return to Taiwan.",
    "cn": "A：既然你會離家人很遠，你為什麼接受到馬德里辦公室工作兩年的機會？ B：我相信住在國外會【拓展】我的世界觀，而且學西班牙文也會在我回台灣時為我開啟許多新的職涯機會。"
  },
  {
    "word": "fluently",
    "pos": "adv.",
    "cn_def": "流利地",
    "en_def": "speaking smoothly and easily, without stopping",
    "sentence": "A: The new marketing director from Canada seems very comfortable in our meetings, so how long has she been studying Chinese? B: She has lived in Taipei for almost ten years, so she can speak Chinese {{BLANK}} and even reads newspapers in Chinese every morning before coming to the office.",
    "cn": "A：從加拿大來的新行銷總監在我們的會議中看起來非常自在，她學中文多久了？ B：她在台北住了將近十年，所以她能【流利地】說中文，甚至每天早上進辦公室前都會讀中文報紙。"
  }
];

const MCQS = [
  {
    "q": "Regular conversation practice with coworkers can be very _____ for new staff. It helps them feel more confident during client meetings.",
    "options": [
      "beneficial",
      "monolingual",
      "complicated",
      "native"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The airline is hiring _____ flight attendants for its new route to Tokyo. Applicants must speak both English and Japanese well.",
    "options": [
      "compelling",
      "bilingual",
      "complicated",
      "beneficial"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The translator noticed several _____ errors in the brochure before it was printed. Some verbs were used in the wrong tense.",
    "options": [
      "engaging",
      "monolingual",
      "linguistic",
      "compelling"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The museum asked a _____ to study the old letters written in an ancient language. She explained the meaning of each word to visitors.",
    "options": [
      "minority",
      "obstacle",
      "literature",
      "linguist"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The new shopping mall is in the city's main _____ district. Many banks and offices are located on the same street.",
    "options": [
      "native",
      "commercial",
      "bilingual",
      "engaging"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Managers should _____ clearly with their teams when plans change. Otherwise, employees may feel confused about their daily tasks.",
    "options": [
      "communicate",
      "boast",
      "outperform",
      "broaden"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The receptionist is excellent at _____ during busy mornings. She answers calls, greets visitors, and sorts the mail at once.",
    "options": [
      "consideration",
      "inhibition",
      "literature",
      "multitasking"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our new laptop is expected to _____ all competing models in battery life. It can run for twenty hours on a single charge.",
    "options": [
      "equip",
      "expose",
      "outperform",
      "hesitate"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Most of the tourists in the group were _____ and spoke only Korean. The tour guide had to translate every announcement for them.",
    "options": [
      "monolingual",
      "compelling",
      "engaging",
      "beneficial"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "With so many orders arriving this week, we must _____ the urgent ones. Customers who paid for express delivery will be served first.",
    "options": [
      "baffle",
      "boast",
      "prioritize",
      "hesitate"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Only a small _____ of the staff voted against the new schedule. Most employees were happy to start work an hour earlier.",
    "options": [
      "linguist",
      "minority",
      "obstacle",
      "subtitles"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Role-play activities help shy learners lose their _____ about speaking English. After a few weeks, they join group discussions more freely.",
    "options": [
      "consideration",
      "minority",
      "literature",
      "inhibition"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Interns at our firm _____ valuable experience by working on real projects. Many of them are offered full-time jobs afterward.",
    "options": [
      "baffle",
      "hesitate",
      "gain",
      "boast"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please do not _____ to contact our support team if the software stops working. We are available twenty-four hours a day.",
    "options": [
      "hesitate",
      "prioritize",
      "equip",
      "outperform"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The bonus will be divided _____ among the five members of the project team. Each person will receive the same amount.",
    "options": [
      "fluently",
      "rarely",
      "slightly",
      "equally"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Professor Chen is one of the _____ experts on Asian trade law. Governments often ask her for advice on new agreements.",
    "options": [
      "native",
      "foremost",
      "monolingual",
      "complicated"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new hotel can _____ a rooftop pool and three award-winning restaurants. It is already fully booked for the holiday season.",
    "options": [
      "boast",
      "hesitate",
      "interact",
      "communicate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The bookstore has expanded its section of classic _____ this year. Customers can now find novels and poems from over twenty countries.",
    "options": [
      "inhibition",
      "multitasking",
      "literature",
      "consideration"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Sales staff must _____ politely with every customer who enters the store. A friendly greeting often leads to a purchase.",
    "options": [
      "outperform",
      "broaden",
      "equip",
      "interact"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Sofia returned to her _____ country after working in Taiwan for five years. She now manages our office in Madrid.",
    "options": [
      "commercial",
      "native",
      "compelling",
      "beneficial"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Many small shops _____ to compete with large online stores. Some have started offering free delivery to keep their customers.",
    "options": [
      "boast",
      "baffle",
      "struggle",
      "expose"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The training videos now include English _____ for international staff. Viewers can read the words at the bottom of the screen.",
    "options": [
      "subtitles",
      "literature",
      "minority",
      "inhibition"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After careful _____, the board decided to delay the opening of the new branch. The market conditions were not good enough.",
    "options": [
      "obstacle",
      "consideration",
      "minority",
      "literature"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company plans to _____ every meeting room with a large screen and video camera. This will make online conferences much easier.",
    "options": [
      "expose",
      "broaden",
      "baffle",
      "equip"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The speaker's talk was so _____ that nobody looked at their phones. Everyone stayed afterward to ask questions.",
    "options": [
      "engaging",
      "monolingual",
      "commercial",
      "bilingual"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The lawyer presented _____ evidence that the contract had been broken. As a result, the judge ruled in favor of our company.",
    "options": [
      "monolingual",
      "bilingual",
      "native",
      "compelling"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The new tax rules are so _____ that many small businesses hire accountants. Filling out the forms alone can take several days.",
    "options": [
      "engaging",
      "bilingual",
      "complicated",
      "beneficial"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Heavy traffic was the biggest _____ to getting the goods delivered on time. The driver arrived two hours after the store opened.",
    "options": [
      "linguist",
      "obstacle",
      "subtitles",
      "consideration"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The firm hopes to _____ its customer base by opening stores in smaller cities. It also plans to sell more products online.",
    "options": [
      "broaden",
      "hesitate",
      "baffle",
      "interact"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Applicants for the tour guide position must speak English _____. They will lead groups of foreign visitors around the city every day.",
    "options": [
      "equally",
      "barely",
      "fluently",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "beneficial": {
    "pos": "adj.",
    "en_def": "helpful or good for someone",
    "cn_def": "有益的；有利的"
  },
  "bilingual": {
    "pos": "adj.",
    "en_def": "able to speak two languages well",
    "cn_def": "雙語的；能說兩種語言的"
  },
  "linguistic": {
    "pos": "adj.",
    "en_def": "connected with language",
    "cn_def": "語言的；語言學的"
  },
  "linguist": {
    "pos": "n.",
    "en_def": "a person who studies languages or speaks several languages",
    "cn_def": "語言學家；通曉多種語言的人"
  },
  "commercial": {
    "pos": "adj.",
    "en_def": "related to business and buying and selling",
    "cn_def": "商業的；商務的"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通；傳達"
  },
  "multitasking": {
    "pos": "n.",
    "en_def": "doing several jobs at the same time",
    "cn_def": "多工處理；同時做多件事"
  },
  "outperform": {
    "pos": "v.",
    "en_def": "to do better than another person or thing",
    "cn_def": "表現優於；勝過"
  },
  "monolingual": {
    "pos": "adj.",
    "en_def": "using or speaking only one language",
    "cn_def": "單語的；只用一種語言的"
  },
  "prioritize": {
    "pos": "v.",
    "en_def": "to decide which things are most important and do them first",
    "cn_def": "優先處理；排定優先順序"
  },
  "minority": {
    "pos": "n.",
    "en_def": "a small part of a group",
    "cn_def": "少數；少數群體"
  },
  "inhibition": {
    "pos": "n.",
    "en_def": "a feeling that stops you from acting or speaking freely",
    "cn_def": "拘束；壓抑；顧慮"
  },
  "gain": {
    "pos": "v.",
    "en_def": "to get something useful, such as skills or experience",
    "cn_def": "獲得；取得"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to pause before doing or saying something because you are unsure",
    "cn_def": "猶豫；遲疑"
  },
  "equally": {
    "pos": "adv.",
    "en_def": "in the same way or to the same degree",
    "cn_def": "同樣地；相等地"
  },
  "foremost": {
    "pos": "adj.",
    "en_def": "most important or best known",
    "cn_def": "最重要的；首屈一指的"
  },
  "boast": {
    "pos": "v.",
    "en_def": "to proudly have or say something good",
    "cn_def": "自誇；以…自豪；擁有"
  },
  "literature": {
    "pos": "n.",
    "en_def": "books, poems, and plays, especially famous ones",
    "cn_def": "文學"
  },
  "interact": {
    "pos": "v.",
    "en_def": "to talk or work with other people",
    "cn_def": "互動；交流"
  },
  "native": {
    "pos": "adj.",
    "en_def": "connected with the place where you were born or the first language you learned",
    "cn_def": "本國的；母語的"
  },
  "struggle": {
    "pos": "v.",
    "en_def": "to try hard to deal with something difficult",
    "cn_def": "努力應付；苦於"
  },
  "subtitles": {
    "pos": "n.",
    "en_def": "words on the screen that translate what people say in a film or video",
    "cn_def": "字幕"
  },
  "consideration": {
    "pos": "n.",
    "en_def": "careful thought about something",
    "cn_def": "考慮；斟酌"
  },
  "equip": {
    "pos": "v.",
    "en_def": "to give someone the tools or skills they need",
    "cn_def": "使具備；裝備"
  },
  "engaging": {
    "pos": "adj.",
    "en_def": "interesting and attractive",
    "cn_def": "吸引人的；有趣的"
  },
  "compelling": {
    "pos": "adj.",
    "en_def": "very convincing or interesting",
    "cn_def": "令人信服的；引人入勝的"
  },
  "baffle": {
    "pos": "v.",
    "en_def": "to confuse someone completely",
    "cn_def": "使困惑；難倒"
  },
  "complicated": {
    "pos": "adj.",
    "en_def": "difficult to understand because it has many parts",
    "cn_def": "複雜的"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that makes it difficult to do something",
    "cn_def": "障礙；阻礙"
  },
  "expose": {
    "pos": "v.",
    "en_def": "to let someone experience something new",
    "cn_def": "使接觸；使暴露"
  },
  "broaden": {
    "pos": "v.",
    "en_def": "to make something wider or bigger",
    "cn_def": "拓展；擴大"
  },
  "fluently": {
    "pos": "adv.",
    "en_def": "speaking smoothly and easily, without stopping",
    "cn_def": "流利地"
  }
};

const EXTRA_GLOSSES = {};
