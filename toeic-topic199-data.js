// Topic 199 Quiz Data: Interview 面試
// Source word list: https://www.examword.com/group-topic/interview — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T199 - Interview 面試",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "candidate",
    "pos": "n.",
    "cn_def": "候選人；應徵者",
    "en_def": "a person who is being considered for a job",
    "sentence": "A: How many people are coming in for the sales manager interviews this afternoon, and do you know who will meet them first at the front desk? B: We have four people on the list, but the strongest {{BLANK}} is a woman from Kaohsiung who managed a team of twenty at her last company, so the director wants to meet her first.",
    "cn": "A：今天下午有多少人要來參加業務經理的面試，你知道誰會先在櫃台接待他們嗎？ B：名單上有四個人，不過最強的【候選人】是一位來自高雄的女士，她在上一家公司管理過二十人的團隊，所以主管想先見她。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work for them",
    "sentence": "A: Why did you decide to leave the bank after working there for almost six years, even though the pay was quite good? B: My last {{BLANK}} did not offer any training or chances to move up, so I started looking for a company that would help me grow and learn new things every year.",
    "cn": "A：你在那家銀行工作了將近六年，薪水也相當不錯，為什麼決定離職呢？ B：我上一個【雇主】不提供任何訓練或升遷機會，所以我開始尋找一家能幫助我每年成長、學習新事物的公司。"
  },
  {
    "word": "interviewer",
    "pos": "n.",
    "cn_def": "面試官",
    "en_def": "the person who asks the questions in an interview",
    "sentence": "A: Did you feel comfortable during your meeting at the design company yesterday, or were the questions too difficult for you to handle? B: The {{BLANK}} was very friendly and smiled a lot, so I relaxed after a few minutes and was able to talk clearly about my past projects and my future goals.",
    "cn": "A：你昨天在那家設計公司面談時覺得自在嗎？還是問題對你來說太難應付了？ B：【面試官】非常友善，常常微笑，所以幾分鐘後我就放鬆下來，能清楚地談論我過去的專案和未來的目標。"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "cn_def": "申請人；求職者",
    "en_def": "a person who formally asks for a job",
    "sentence": "A: Has the human resources team finished reading all the forms for the new receptionist job that we posted online last week? B: Not yet, because almost two hundred people sent in forms, and every {{BLANK}} must be checked carefully before we choose ten people to invite for a meeting next Monday.",
    "cn": "A：人資團隊看完我們上週在網路上張貼的新櫃台接待人員職缺的所有表格了嗎？ B：還沒，因為將近兩百人寄來了表格，每一位【申請人】都必須仔細審核，我們才能選出十個人在下週一來面談。"
  },
  {
    "word": "resume",
    "pos": "n.",
    "cn_def": "履歷",
    "en_def": "a short document listing your education and work history",
    "sentence": "A: What should I do before I send my documents to the hotel group that is hiring new managers in Taipei this month? B: You should update your {{BLANK}} with your latest job and your language test scores, and make sure it fits on one page so the busy hiring team can read it quickly.",
    "cn": "A：這個月有一家飯店集團在台北招募新經理，我寄出文件前應該做些什麼？ B：你應該把最新的工作和語言測驗成績更新到你的【履歷】上，並確保它只有一頁，讓忙碌的招聘團隊能很快看完。"
  },
  {
    "word": "cv",
    "pos": "n.",
    "cn_def": "履歷表（CV）",
    "en_def": "a full document describing your education, skills, and work history (curriculum vitae)",
    "sentence": "A: The international company in Singapore asked me to send more details about my background, so what kind of document should I prepare for them? B: They probably want a full {{BLANK}}, which is longer than a one-page summary and lists your education, research, awards, and every job you have held, so you should start writing it this weekend.",
    "cn": "A：新加坡那家跨國公司要我寄更多關於我背景的資料，我應該準備什麼樣的文件給他們？ B：他們可能想要一份完整的【履歷表（CV）】，它比一頁的摘要長，會列出你的學歷、研究、獎項和你做過的每份工作，所以你這個週末就該開始寫了。"
  },
  {
    "word": "application",
    "pos": "n.",
    "cn_def": "申請（書）；應徵",
    "en_def": "a formal written request for a job",
    "sentence": "A: Is it too late to apply for the marketing assistant job that I saw on the company website on Sunday night? B: No, you still have time, because the deadline is Friday at five, but you must complete the online {{BLANK}} and upload a recent photo and two reference letters before then.",
    "cn": "A：我星期天晚上在公司網站上看到的行銷助理職缺，現在申請會太晚嗎？ B：不會，你還有時間，因為截止時間是星期五五點，但你必須在那之前完成線上【申請表】，並上傳一張近照和兩封推薦信。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證照",
    "en_def": "a skill, degree, or certificate that makes you suitable for a job",
    "sentence": "A: Do you think I have a good chance of getting the accounting job, even though I only graduated from university last year? B: Yes, because your professional {{BLANK}} in accounting is exactly what the company needs, and they said they are happy to train new graduates who are willing to learn quickly.",
    "cn": "A：雖然我去年才大學畢業，你覺得我有很大機會得到那份會計工作嗎？ B：有，因為你在會計方面的專業【資格】正是公司需要的，而且他們說很樂意培訓願意快速學習的新鮮人。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing a job over time",
    "sentence": "A: What did the hiring manager ask you about when you met her at the restaurant chain's main office downtown this morning? B: She mostly wanted to know about my {{BLANK}} in customer service, so I described the three years I spent working at a busy hotel and how I handled difficult guests calmly.",
    "cn": "A：今天早上你在市中心那家連鎖餐廳總部見到招聘經理時，她問了你什麼？ B：她主要想了解我在客戶服務方面的【經驗】，所以我描述了我在一家忙碌飯店工作的三年，以及我如何冷靜地處理難搞的客人。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "sentence": "A: Besides speaking English well, what else should I mention when the company asks why they should choose me for the job? B: You should talk about one special {{BLANK}} that makes you different, such as your ability to build simple websites, because the team needs someone who can update their online store without help.",
    "cn": "A：除了英文說得好之外，當公司問為什麼應該選我做這份工作時，我還應該提到什麼？ B：你應該談談一項讓你與眾不同的特殊【技能】，例如你會架設簡單網站的能力，因為團隊需要一個能獨立更新網路商店的人。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "優點；長處",
    "en_def": "a good quality or ability that a person has",
    "sentence": "A: The interviewer at the travel agency asked me what I do best, but I wasn't sure how to reply without sounding proud, so what should I say next time? B: Just choose one real {{BLANK}}, like staying calm under pressure, and give a short example of a time when it helped your team finish a big project on schedule.",
    "cn": "A：旅行社的面試官問我最擅長什麼，但我不確定怎麼回答才不會聽起來很自大，下次我應該怎麼說？ B：只要選一個真實的【優點】，例如在壓力下保持冷靜，再舉一個簡短的例子，說明它如何幫助你的團隊準時完成一個大型專案。"
  },
  {
    "word": "weakness",
    "pos": "n.",
    "cn_def": "缺點；弱點",
    "en_def": "a fault or a part of your ability that is not strong",
    "sentence": "A: What is the best way to reply when an employer asks me to describe something I am not good at during a job interview? B: Talk honestly about a small {{BLANK}}, such as being shy in big meetings, and then explain the steps you are taking to improve, like joining a public speaking class every Thursday evening.",
    "cn": "A：在求職面試中，雇主要我描述自己不擅長的事情時，最好的回應方式是什麼？ B：誠實地談一個小【缺點】，例如在大型會議中會害羞，然後說明你正在採取哪些步驟來改進，比如每週四晚上參加演講課。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: How did your second interview with the software company go, and did you feel more relaxed than you did the first time? B: It went much better, because I had practiced with my sister all weekend, so I spoke with more {{BLANK}} and looked the managers in the eye when I described my projects.",
    "cn": "A：你和那家軟體公司的第二次面試進行得如何？你覺得比第一次更放鬆嗎？ B：好多了，因為我整個週末都和姐姐練習，所以我說話更有【自信】，在描述我的專案時也能直視經理們的眼睛。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張的",
    "en_def": "worried and a little afraid about something that will happen",
    "sentence": "A: You look pale and you keep checking your watch, so is everything all right before your big meeting with the bank director? B: I always feel {{BLANK}} before important interviews because I worry that I will forget what to say, so I am taking deep breaths and reading my notes one more time.",
    "cn": "A：你臉色蒼白又一直看手錶，在和銀行主管的重要會面之前一切都還好嗎？ B：重要的面試前我總是很【緊張】，因為我擔心會忘記要說什麼，所以我正在深呼吸，並且再讀一次我的筆記。"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "cn_def": "準備",
    "en_def": "to get ready for something",
    "sentence": "A: The interview at the airline is on Wednesday morning, so what do you think I should do during the next two days? B: You should {{BLANK}} by reading about the company's history and recent news online, and you should also choose your clothes tonight so you won't have to worry about them later.",
    "cn": "A：航空公司的面試在星期三早上，你覺得接下來兩天我應該做什麼？ B：你應該上網閱讀公司的歷史和近期新聞來做【準備】，而且你今晚也應該把衣服挑好，這樣之後就不用擔心了。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to become better at it",
    "sentence": "A: I get really anxious when I have to talk about myself in English, so how can I feel more comfortable before my interview next week? B: Ask a friend to play the role of the manager, and {{BLANK}} common interview questions with her every evening until you can reply smoothly without looking at your notes.",
    "cn": "A：要用英文談論自己時我會非常焦慮，在下週面試之前我要怎樣才能比較自在？ B：請一位朋友扮演經理的角色，每天晚上和她【練習】常見的面試問題，直到你不看筆記也能流暢回答為止。"
  },
  {
    "word": "question",
    "pos": "n.",
    "cn_def": "問題",
    "en_def": "something that you ask in order to get information",
    "sentence": "A: At the end of the meeting, the director asked if I wanted to know anything about the job, but I couldn't think of anything, so was that a big mistake? B: It wasn't terrible, but next time prepare at least one {{BLANK}} about the team or the training program, because asking something thoughtful shows that you are truly interested in working there.",
    "cn": "A：會面結束時，主管問我是否想了解這份工作的任何事，但我什麼都想不出來，這是很大的錯誤嗎？ B：不算太糟，但下次至少準備一個關於團隊或培訓計畫的【問題】，因為提出有深度的提問能顯示你真的很有興趣在那裡工作。"
  },
  {
    "word": "answer",
    "pos": "n.",
    "cn_def": "回答；答案",
    "en_def": "something you say in reply to a question",
    "sentence": "A: When the manager asked why I wanted to leave my current job, I talked for almost five minutes, so do you think that was too long? B: Probably, because a good {{BLANK}} in an interview should be clear and short, so try to explain your main reason in about one minute and then stop talking.",
    "cn": "A：經理問我為什麼想離開目前的工作時，我講了將近五分鐘，你覺得太長了嗎？ B：可能是，因為面試中好的【回答】應該清楚又簡短，所以試著在一分鐘左右說明你的主要原因，然後就停下來。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell someone your name and some information about yourself or another person",
    "sentence": "A: What should I say first when I walk into the meeting room and see three managers sitting at the table waiting for me? B: Smile, shake hands if they offer, and briefly {{BLANK}} yourself by giving your name, your current job, and one sentence about why this position interests you.",
    "cn": "A：當我走進會議室，看到三位經理坐在桌前等我時，我應該先說什麼？ B：微笑，如果他們伸出手就和他們握手，然後簡短地【介紹】自己，說出你的名字、目前的工作，以及一句關於你為何對這個職位感興趣的話。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear by giving details or reasons",
    "sentence": "A: There is a one-year gap on my resume because I took care of my grandmother, so will the employer think that is a problem? B: Not if you {{BLANK}} the situation honestly and calmly, and then tell them about the online courses you finished during that year to keep your skills up to date.",
    "cn": "A：我的履歷上有一年的空白期，因為我在照顧我的祖母，雇主會覺得那是個問題嗎？ B：只要你誠實而冷靜地【說明】情況，然後告訴他們你在那一年完成的線上課程，讓你的技能保持最新，就不會。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with other people",
    "sentence": "A: When is the right time to talk about pay and holidays, since I don't want the company to think I only care about money? B: It is usually better to {{BLANK}} those details during the second meeting, after the managers have shown that they are seriously interested in offering you the job.",
    "cn": "A：什麼時候談薪水和假期比較恰當？因為我不想讓公司覺得我只在乎錢。 B：通常最好在第二次面談時再【討論】那些細節，等經理們已經表現出他們認真考慮給你這份工作之後。"
  },
  {
    "word": "hire",
    "pos": "v.",
    "cn_def": "雇用",
    "en_def": "to give someone a job",
    "sentence": "A: Why is the restaurant on the corner putting signs in all its windows and posting ads on social media this week? B: They are opening a second branch next month, so they need to {{BLANK}} about fifteen new cooks and servers quickly, and they are holding open interviews every afternoon until Friday.",
    "cn": "A：轉角那家餐廳這週為什麼在所有窗戶貼告示，還在社群媒體上刊登廣告？ B：他們下個月要開第二家分店，所以需要盡快【雇用】大約十五名新廚師和服務生，而且他們每天下午都舉辦開放面試，一直到星期五。"
  },
  {
    "word": "recruit",
    "pos": "v.",
    "cn_def": "招募",
    "en_def": "to find new people to join a company or organization",
    "sentence": "A: Our team has been short of engineers for months, so what is the company planning to do about it this year? B: The HR department will visit three universities in the spring to {{BLANK}} talented graduates, and they will also offer a bonus to employees who recommend friends for open jobs.",
    "cn": "A：我們團隊好幾個月來都缺工程師，公司今年打算怎麼處理？ B：人資部門春天會去三所大學【招募】有才華的畢業生，也會給推薦朋友應徵空缺的員工發放獎金。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位",
    "en_def": "a job in a company",
    "sentence": "A: I saw that the pharmacy downtown is looking for a new team member, but do you know whether the job is full-time or part-time? B: The {{BLANK}} is full-time with weekend shifts, and the person they choose will be responsible for ordering supplies and training the two new assistants who start in January.",
    "cn": "A：我看到市中心那家藥局在找新的團隊成員，你知道那份工作是全職還是兼職嗎？ B：那個【職位】是全職，需要週末輪班，被選上的人將負責訂購用品，並培訓一月開始上班的兩位新助理。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水",
    "en_def": "money that you receive every month for your job",
    "sentence": "A: The company offered me the job this morning, but I'm not sure whether I should accept the pay they mentioned, so what do you think? B: Before you accept, compare the monthly {{BLANK}} with similar jobs in Taipei, and if it is lower, politely ask whether there is room to raise it a little.",
    "cn": "A：公司今天早上錄取了我，但我不確定是否該接受他們提出的待遇，你覺得呢？ B：在接受之前，把每月【薪水】和台北類似的工作比較一下，如果比較低，就禮貌地詢問是否有提高一點的空間。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "福利",
    "en_def": "something extra a company gives workers besides pay, such as insurance",
    "sentence": "A: Why did you choose the smaller company even though the bigger one offered you slightly more money each month? B: The smaller company gives every worker free health checks, flexible hours, and an extra week of holiday each year, and I think the extra time off is the best {{BLANK}} for my family.",
    "cn": "A：雖然那家大公司每個月給你的錢稍微多一點，你為什麼選擇了那家小公司？ B：那家小公司提供每位員工免費健康檢查、彈性工時，以及每年多一週的假期，我覺得多出來的休假對我的家人來說是最好的【福利】。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skill and behavior expected of someone at work",
    "sentence": "A: What kind of email should I send to the company if I need to change the time of my interview because of a doctor's appointment? B: Write a short and {{BLANK}} message that apologizes, explains the reason briefly, and suggests two other times, and avoid using emojis or very casual words like \"hey.\"",
    "cn": "A：如果因為看醫生需要更改面試時間，我應該寄什麼樣的電子郵件給公司？ B：寫一封簡短又【專業】的信，表達歉意、簡單說明原因並提出另外兩個時間，避免使用表情符號或像「嘿」這樣很隨意的字。"
  },
  {
    "word": "appearance",
    "pos": "n.",
    "cn_def": "外表；儀容",
    "en_def": "the way someone looks, including clothes and hair",
    "sentence": "A: Do I really need to wear a suit to the interview at the law firm, or would a nice shirt and trousers be good enough? B: For a law firm, your {{BLANK}} is very important, so wear a dark suit and clean shoes and keep your hair neat, because clients expect the staff to look serious and reliable.",
    "cn": "A：去律師事務所面試我真的需要穿西裝嗎？還是一件好看的襯衫和長褲就夠了？ B：對律師事務所來說，你的【儀容】非常重要，所以要穿深色西裝、乾淨的鞋子，頭髮也要整齊，因為客戶期待員工看起來嚴肅又可靠。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的",
    "en_def": "arriving or doing something at the expected time; not late",
    "sentence": "A: The interview starts at nine, but the office is across the city and the traffic is often terrible in the morning, so when should I leave home? B: Leave before seven thirty, because being {{BLANK}} is the first thing managers notice, and it is better to wait in a café nearby than to rush in five minutes late.",
    "cn": "A：面試九點開始，但辦公室在城市另一頭，早上交通常常很糟，我應該幾點出門？ B：七點半前出門，因為【準時】是經理們最先注意到的事，在附近咖啡店等總比遲到五分鐘匆忙衝進去好。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度",
    "en_def": "the way you think and feel about something, shown in how you behave",
    "sentence": "A: Why did the manager choose the young man with less experience instead of the woman who had worked in sales for ten years? B: She said his positive {{BLANK}} impressed everyone, because he was eager to learn, polite to the receptionist, and excited about the company's plans for the next five years.",
    "cn": "A：為什麼經理選了那位經驗較少的年輕人，而不是那位做了十年業務的女士？ B：她說他積極的【態度】讓大家印象深刻，因為他渴望學習、對櫃檯人員很有禮貌，而且對公司未來五年的計畫充滿熱忱。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something",
    "sentence": "A: Why are you so excited about the job at the shipping company, since the pay is about the same as what you earn now? B: It is a great {{BLANK}} to work with international clients and travel to Japan twice a year, which will help me improve my language skills and build my career.",
    "cn": "A：那家航運公司的工作薪水和你現在差不多，你為什麼對它那麼興奮？ B：這是一個能和國際客戶合作、每年去日本出差兩次的大好【機會】，能幫助我提升語言能力並發展我的職涯。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how well or badly someone has done something",
    "sentence": "A: I didn't get the job at the hotel, but I'd like to know what I could have done better, so is it okay to contact them again? B: Yes, you can write a polite email asking for {{BLANK}} on your interview, and many managers are happy to give a few helpful comments that you can use next time.",
    "cn": "A：我沒有得到那家飯店的工作，但我想知道自己哪裡可以做得更好，再聯絡他們可以嗎？ B：可以，你可以寫一封禮貌的電子郵件，請他們針對你的面試給予【回饋】，很多經理都很樂意提供一些下次可以參考的有用意見。"
  },
  {
    "word": "follow up",
    "pos": "v.phr.",
    "cn_def": "後續追蹤；跟進",
    "en_def": "to contact someone again to continue or check on something",
    "sentence": "A: It has been ten days since my interview at the bank, and nobody has contacted me yet, so should I just keep waiting? B: You should {{BLANK}} with a short, friendly email to the hiring manager, thanking her again for her time and asking politely whether they have made a choice yet.",
    "cn": "A：我在銀行面試已經過了十天，還沒有人聯絡我，我應該就繼續等嗎？ B：你應該寄一封簡短友善的電子郵件給招聘經理來【跟進】，再次感謝她撥出時間，並禮貌地詢問他們是否已經做出選擇。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "the opinion or feeling you have about someone after meeting them",
    "sentence": "A: Why do career coaches always say that the first few minutes of an interview are so important for job seekers? B: Because managers often form a strong {{BLANK}} of you very quickly, so a warm smile, a firm handshake, and clean clothes can make them see you positively for the rest of the meeting.",
    "cn": "A：為什麼職涯教練總是說面試的前幾分鐘對求職者那麼重要？ B：因為經理們常常很快就對你形成強烈的【印象】，所以溫暖的微笑、有力的握手和整潔的衣著能讓他們在剩下的會面中都正面地看待你。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "適合的",
    "en_def": "right or appropriate for a particular person, purpose, or situation",
    "sentence": "A: The manager interviewed six people for the warehouse supervisor job, so has she decided who she wants to hire yet? B: She thinks Mr. Lin is the most {{BLANK}} person because he has managed large storage areas before, he can drive a forklift, and he is happy to work night shifts.",
    "cn": "A：經理為倉庫主管的職位面試了六個人，她決定好要雇用誰了嗎？ B：她認為林先生是最【適合】的人，因為他以前管理過大型倉儲區、會開堆高機，而且很樂意上夜班。"
  },
  {
    "word": "decision",
    "pos": "n.",
    "cn_def": "決定",
    "en_def": "a choice that you make after thinking about it",
    "sentence": "A: The company interviewed me twice last week, so when do you think they will tell me whether I got the job or not? B: The HR assistant said the managers will make a final {{BLANK}} after they meet the last two people on Thursday, so you should hear from them by email early next week.",
    "cn": "A：公司上週面試了我兩次，你覺得他們什麼時候會告訴我有沒有得到這份工作？ B：人資助理說經理們星期四見完最後兩個人之後就會做出最終【決定】，所以你下週初應該會收到他們的電子郵件。"
  }
];

const MCQS = [
  {
    "q": "After three rounds of interviews, the committee finally chose the strongest _____. She will start as sales director in March.",
    "options": [
      "candidate",
      "salary",
      "feedback",
      "decision"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many workers left the factory because their _____ refused to pay overtime. The company is now struggling to fill the empty jobs.",
    "options": [
      "applicant",
      "employer",
      "interviewer",
      "candidate"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The _____ asked each candidate the same five questions. Later, she compared their responses to decide who should move to the next round.",
    "options": [
      "applicant",
      "weakness",
      "interviewer",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Each _____ must submit the online form by Friday. Late forms will not be considered for the summer internship program.",
    "options": [
      "interviewer",
      "employer",
      "salary",
      "applicant"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please attach your _____ to the email with your work history listed. The hiring team prefers documents no longer than one page.",
    "options": [
      "resume",
      "attitude",
      "confidence",
      "weakness"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The _____ deadline for the graphic designer job is next Monday. Forms received after that date will be returned without review.",
    "options": [
      "attitude",
      "impression",
      "application",
      "strength"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "A teaching license is the most important _____ for this job. Applicants without one will not be invited to an interview.",
    "options": [
      "impression",
      "qualification",
      "attitude",
      "feedback"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The job requires at least five years of _____ in hotel management. Applicants who have worked fewer years should not apply.",
    "options": [
      "confidence",
      "salary",
      "benefit",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Fast typing is a useful _____ for anyone who wants an office job. Many companies test it during the hiring process.",
    "options": [
      "salary",
      "decision",
      "skill",
      "impression"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "When asked about her greatest _____, Lisa mentioned her ability to solve problems quickly. The manager was clearly impressed by her example.",
    "options": [
      "strength",
      "salary",
      "application",
      "position"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Tom admitted that public speaking is his biggest _____. He has joined an evening class to improve in this area.",
    "options": [
      "benefit",
      "opportunity",
      "salary",
      "weakness"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Practicing with a friend helped Maria speak with more _____ during the interview. She no longer felt shy in front of the managers.",
    "options": [
      "appearance",
      "confidence",
      "salary",
      "position"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Many first-time job seekers feel _____ before an interview. Taking deep breaths can help them stay calm and focused.",
    "options": [
      "nervous",
      "punctual",
      "suitable",
      "professional"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Candidates should _____ for the interview by researching the company's products. Doing so shows real interest in the job.",
    "options": [
      "hire",
      "recruit",
      "prepare",
      "discuss"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Jenny likes to _____ answering common questions in front of a mirror. This habit helps her sound natural in real interviews.",
    "options": [
      "hire",
      "recruit",
      "follow up",
      "practice"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "I asked one final _____ about the training program before leaving. The interviewer seemed pleased that I was curious.",
    "options": [
      "salary",
      "question",
      "resume",
      "weakness"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Please _____ yourself briefly at the start of the meeting. Tell us your name, your current role, and your career goals.",
    "options": [
      "hire",
      "recruit",
      "introduce",
      "follow up"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Applicants should clearly _____ any gaps in their employment history. Honest reasons usually make a better impression than silence.",
    "options": [
      "explain",
      "hire",
      "introduce",
      "recruit"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The manager wanted to _____ the salary and working hours during the second meeting. Both sides agreed on the terms quickly.",
    "options": [
      "introduce",
      "recruit",
      "hire",
      "discuss"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The bakery plans to _____ three more workers before the holiday season. Sales usually double in December.",
    "options": [
      "prepare",
      "hire",
      "explain",
      "discuss"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The company will visit local universities to _____ talented graduates for its new research team. Interested students can meet the managers at the career fair.",
    "options": [
      "recruit",
      "explain",
      "practice",
      "discuss"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The marketing manager _____ has been empty since June. The company hopes to fill it before the new product launch.",
    "options": [
      "attitude",
      "weakness",
      "feedback",
      "position"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The starting _____ for this job is 40,000 dollars per month. Employees also receive a bonus at the end of each year.",
    "options": [
      "attitude",
      "impression",
      "salary",
      "weakness"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Free health insurance is one _____ that all full-time employees receive. Many workers say it is the main reason they stay.",
    "options": [
      "weakness",
      "benefit",
      "attitude",
      "appearance"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Employees must keep a _____ attitude when dealing with difficult customers. Shouting or arguing is never acceptable in our store.",
    "options": [
      "nervous",
      "punctual",
      "careless",
      "professional"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Staff at the front desk should pay attention to their _____. Clean uniforms and neat hair help create a good image for guests.",
    "options": [
      "appearance",
      "salary",
      "decision",
      "cv"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Our manager values staff who are always _____. Anyone who arrives late more than twice a month will receive a warning.",
    "options": [
      "nervous",
      "suitable",
      "punctual",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "After each interview, the HR team sends candidates useful _____ on their performance. Many applicants use these comments to improve.",
    "options": [
      "salary",
      "feedback",
      "position",
      "decision"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Arriving early and dressing neatly can help you make a good first _____. Managers often decide quickly whether they like a candidate.",
    "options": [
      "salary",
      "benefit",
      "weakness",
      "impression"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The board will make a final _____ about the new director next week. All candidates will be informed by phone.",
    "options": [
      "decision",
      "appearance",
      "weakness",
      "attitude"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is being considered for a job",
    "cn_def": "候選人；應徵者"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work for them",
    "cn_def": "雇主"
  },
  "interviewer": {
    "pos": "n.",
    "en_def": "the person who asks the questions in an interview",
    "cn_def": "面試官"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who formally asks for a job",
    "cn_def": "申請人；求職者"
  },
  "resume": {
    "pos": "n.",
    "en_def": "a short document listing your education and work history",
    "cn_def": "履歷"
  },
  "cv": {
    "pos": "n.",
    "en_def": "a full document describing your education, skills, and work history (curriculum vitae)",
    "cn_def": "履歷表（CV）"
  },
  "application": {
    "pos": "n.",
    "en_def": "a formal written request for a job",
    "cn_def": "申請（書）；應徵"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "a skill, degree, or certificate that makes you suitable for a job",
    "cn_def": "資格；學歷證照"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing a job over time",
    "cn_def": "經驗"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have learned and practiced it",
    "cn_def": "技能"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that a person has",
    "cn_def": "優點；長處"
  },
  "weakness": {
    "pos": "n.",
    "en_def": "a fault or a part of your ability that is not strong",
    "cn_def": "缺點；弱點"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "自信"
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "worried and a little afraid about something that will happen",
    "cn_def": "緊張的"
  },
  "prepare": {
    "pos": "v.",
    "en_def": "to get ready for something",
    "cn_def": "準備"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again and again to become better at it",
    "cn_def": "練習"
  },
  "question": {
    "pos": "n.",
    "en_def": "something that you ask in order to get information",
    "cn_def": "問題"
  },
  "answer": {
    "pos": "n.",
    "en_def": "something you say in reply to a question",
    "cn_def": "回答；答案"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell someone your name and some information about yourself or another person",
    "cn_def": "介紹"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear by giving details or reasons",
    "cn_def": "解釋；說明"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with other people",
    "cn_def": "討論"
  },
  "hire": {
    "pos": "v.",
    "en_def": "to give someone a job",
    "cn_def": "雇用"
  },
  "recruit": {
    "pos": "v.",
    "en_def": "to find new people to join a company or organization",
    "cn_def": "招募"
  },
  "position": {
    "pos": "n.",
    "en_def": "a job in a company",
    "cn_def": "職位"
  },
  "salary": {
    "pos": "n.",
    "en_def": "money that you receive every month for your job",
    "cn_def": "薪水"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "something extra a company gives workers besides pay, such as insurance",
    "cn_def": "福利"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skill and behavior expected of someone at work",
    "cn_def": "專業的"
  },
  "appearance": {
    "pos": "n.",
    "en_def": "the way someone looks, including clothes and hair",
    "cn_def": "外表；儀容"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the expected time; not late",
    "cn_def": "準時的"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think and feel about something, shown in how you behave",
    "cn_def": "態度"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something",
    "cn_def": "機會"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well or badly someone has done something",
    "cn_def": "回饋；意見"
  },
  "follow up": {
    "pos": "v.phr.",
    "en_def": "to contact someone again to continue or check on something",
    "cn_def": "後續追蹤；跟進"
  },
  "impression": {
    "pos": "n.",
    "en_def": "the opinion or feeling you have about someone after meeting them",
    "cn_def": "印象"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or appropriate for a particular person, purpose, or situation",
    "cn_def": "適合的"
  },
  "decision": {
    "pos": "n.",
    "en_def": "a choice that you make after thinking about it",
    "cn_def": "決定"
  }
};

const EXTRA_GLOSSES = {};
