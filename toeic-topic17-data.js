// Topic 17 Quiz Data: Application Letter 求職信
// Source word list: https://www.examword.com/group-topic/application-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T17 - Application Letter 求職信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位；職缺",
    "en_def": "a job in a company",
    "sentence": "A: I saw on the company website that the marketing department is hiring again this month, so do you know what kind of person they are looking for? B: Yes, the {{BLANK}} is for a sales assistant who can speak English and Japanese, and they want someone who can start working in early March.",
    "cn": "A：我在公司網站上看到行銷部這個月又在徵人，你知道他們在找什麼樣的人嗎？ B：知道，這個【職位】是業務助理，要會說英文和日文，而且他們希望對方能在三月初開始上班。"
  },
  {
    "word": "vacancy",
    "pos": "n.",
    "cn_def": "職缺；空缺",
    "en_def": "a job that is open and needs someone to fill it",
    "sentence": "A: Our receptionist is moving to Kaohsiung next month, and the front desk will be very busy without her, so what should we do now? B: I will ask the human resources office to post the {{BLANK}} online today, so we can start interviewing new people before she leaves the company.",
    "cn": "A：我們的櫃台接待員下個月要搬去高雄，沒有她櫃台會非常忙，我們現在該怎麼辦？ B：我會請人資部今天就把這個【職缺】公告在網路上，這樣我們就能在她離職前開始面試新人。"
  },
  {
    "word": "candidate",
    "pos": "n.",
    "cn_def": "候選人；應徵者",
    "en_def": "a person who is being considered for a job",
    "sentence": "A: We have interviewed six people for the office manager job this week, and all of them seemed friendly and well prepared, so who do you think we should choose? B: In my opinion, the best {{BLANK}} is Ms. Chen, because she has managed a busy office before and she answered every question clearly.",
    "cn": "A：這週我們為辦公室經理一職面試了六個人，他們看起來都很友善也準備充分，你覺得我們該選誰？ B：我認為最好的【候選人】是陳小姐，因為她以前管理過忙碌的辦公室，而且每個問題都回答得很清楚。"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "cn_def": "申請人；求職者",
    "en_def": "a person who formally asks for a job",
    "sentence": "A: The deadline for the designer job closed yesterday, and my inbox is completely full of emails from people who want the job, so how many did we receive? B: We got more than eighty letters, so each {{BLANK}} will first take a short online test before we invite the top ten for an interview.",
    "cn": "A：設計師職缺的截止日是昨天，我的收件匣塞滿了想要這份工作的人寄來的信，我們總共收到多少封？ B：我們收到八十多封信，所以每位【求職者】都會先做一個簡短的線上測驗，之後我們再邀請前十名來面試。"
  },
  {
    "word": "employer",
    "pos": "n.",
    "cn_def": "雇主",
    "en_def": "a person or company that pays people to work for them",
    "sentence": "A: I am writing my first job letter, and I am not sure whether I should talk about my part-time job at the coffee shop, so what do you think? B: You should mention it, because any future {{BLANK}} will be glad to know that you served customers politely and handled money carefully during busy weekends.",
    "cn": "A：我正在寫我的第一封求職信，不確定該不該提到我在咖啡店的兼職工作，你覺得呢？ B：你應該提，因為任何未來的【雇主】都會很高興知道你在忙碌的週末能禮貌地服務顧客並謹慎處理金錢。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷證明",
    "en_def": "an official record, like a degree, showing you have finished training",
    "sentence": "A: The job advertisement says the company wants an accountant, but I studied business, not accounting, at university, so should I still send my letter? B: You can try, but they will probably ask for a professional {{BLANK}}, so you might need to finish an accounting course first and then apply next year.",
    "cn": "A：這則徵才廣告說公司要找會計人員，但我大學念的是商業而不是會計，我還要寄求職信嗎？ B：你可以試試看，不過他們可能會要求專業【資格】，所以你也許需要先完成會計課程，明年再申請。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing a job for some time",
    "sentence": "A: This hotel is looking for a front desk supervisor, and I have worked at a hotel reception for five years, so how should I start my letter? B: Start by explaining your {{BLANK}} at the reception desk, because the manager will want to know that you have already handled guests, bookings, and complaints for many years.",
    "cn": "A：這家飯店在找櫃台主管，而我在飯店櫃台工作了五年，我的求職信該怎麼開頭？ B：先說明你在櫃台的【經驗】，因為經理會想知道你多年來已經處理過客人、訂房和客訴。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "the ability to do something well because you have practiced it",
    "sentence": "A: The new travel agency needs someone who can answer calls from foreign tourists, so is it a good idea to say that I speak three languages? B: Of course, because language is a very useful {{BLANK}} in that kind of job, and you should also mention that you can use booking software quickly.",
    "cn": "A：那家新的旅行社需要能接聽外國觀光客電話的人，在信裡說我會說三種語言是好主意嗎？ B：當然，因為語言在那種工作中是非常有用的【技能】，而且你也應該提到你能快速使用訂位軟體。"
  },
  {
    "word": "ability",
    "pos": "n.",
    "cn_def": "能力",
    "en_def": "the power or talent to do something",
    "sentence": "A: The manager of the call center told me she needs a new team leader before the busy holiday season, so what is the most important thing for her? B: She told me she wants someone with the {{BLANK}} to stay calm under pressure, because the team often handles hundreds of angry calls on a single day.",
    "cn": "A：客服中心經理告訴我，她需要在忙碌的假期旺季前找到新的組長，對她來說最重要的是什麼？ B：她跟我說她想找一個有【能力】在壓力下保持冷靜的人，因為這個團隊常常一天就要處理好幾百通憤怒的電話。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "優點；長處",
    "en_def": "a good quality or skill that someone has",
    "sentence": "A: In the interview tomorrow, they will probably ask me to describe myself, and I always get nervous about that question, so how should I answer it? B: Talk about one real {{BLANK}}, such as your careful planning, and then give an example of a project where your planning helped your team finish early.",
    "cn": "A：明天面試他們可能會要我描述自己，我每次遇到這個問題都很緊張，我該怎麼回答？ B：談一個真實的【優點】，例如你做事規劃仔細，然後舉一個你的規劃幫助團隊提早完成的專案例子。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育；學歷",
    "en_def": "the learning you get at school, college, or university",
    "sentence": "A: I finished high school in Tainan and then studied hotel management at a college in Taipei for four years, so where should I put this information? B: Put it in a short {{BLANK}} section under your work history, and list the name of each school, your main subject, and the year you finished.",
    "cn": "A：我在台南念完高中，之後在台北一所學院念了四年的飯店管理，這些資料該放在哪裡？ B：把它放在你工作經歷下面一個簡短的【學歷】欄位，列出每所學校的名稱、你的主修科目和畢業年份。"
  },
  {
    "word": "degree",
    "pos": "n.",
    "cn_def": "學位",
    "en_def": "the title a university gives you when you finish your studies",
    "sentence": "A: This engineering company only hires people who have finished university, and I will graduate this June, so can I apply for the job now? B: Yes, you can, but you should explain in your letter that you will receive your {{BLANK}} in June, and that you can start working right after that.",
    "cn": "A：這家工程公司只錄用大學畢業的人，而我今年六月才畢業，我現在可以應徵嗎？ B：可以，但你應該在信中說明你會在六月拿到【學位】，而且之後就能馬上開始上班。"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "cn_def": "證書；證照",
    "en_def": "an official paper that shows you have passed a test or finished a course",
    "sentence": "A: The job post says that all tour guides must pass the national guide test, and I passed it last spring, so how can I show that to them? B: You should scan your {{BLANK}} and include it with your email, so the manager can see your test result and the date immediately.",
    "cn": "A：這則職缺公告說所有導遊都必須通過國家導遊考試，而我去年春天考過了，我要怎麼向他們證明？ B：你應該把你的【證書】掃描起來，隨電子郵件一起寄出，這樣經理就能馬上看到你的考試結果和日期。"
  },
  {
    "word": "resume",
    "pos": "n.",
    "cn_def": "履歷",
    "en_def": "a short document listing your education and work history",
    "sentence": "A: My cousin wants to apply for a job at a bank, and she has only written a cover letter, so what else does she need to send? B: She also needs a one-page {{BLANK}} that shows her education, past jobs, and skills, because banks usually check that document before they read anything else.",
    "cn": "A：我表妹想應徵銀行的工作，她只寫了一封求職信，她還需要寄什麼？ B：她還需要一份一頁的【履歷】，列出她的學歷、過去的工作和技能，因為銀行通常會先看那份文件再看其他東西。"
  },
  {
    "word": "CV",
    "pos": "n.",
    "cn_def": "履歷（CV）",
    "en_def": "a document listing your education, work, and skills (curriculum vitae)",
    "sentence": "A: The British company I am applying to asked for a detailed list of my studies, research, and work history, so is that different from a normal job letter? B: Yes, that is your {{BLANK}}, and in the UK it is often two pages long, so you can include your research projects and conference talks there.",
    "cn": "A：我要應徵的那家英國公司要求一份詳細列出我的學業、研究和工作經歷的清單，這和一般的求職信不一樣嗎？ B：對，那是你的【履歷（CV）】，在英國通常有兩頁長，所以你可以把你的研究計畫和研討會發表都列在裡面。"
  },
  {
    "word": "attach",
    "pos": "v.",
    "cn_def": "附加（檔案）",
    "en_def": "to add a file to an email",
    "sentence": "A: I have finished my letter for the assistant manager job, and I am ready to send the email to the hotel, but what about my resume and photo? B: Before you click send, please {{BLANK}} both files and check that they open correctly, because many managers will not read an email without them.",
    "cn": "A：我已經寫好應徵副理職位的信，準備把電子郵件寄給飯店了，那我的履歷和照片呢？ B：按下寄出之前，請把兩個檔案都【附加】上去並確認能正常開啟，因為很多經理不會看缺少這些檔案的郵件。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "推薦人；介紹人",
    "en_def": "a person who can tell an employer about your work and character",
    "sentence": "A: The company has asked me for the name of someone who can talk about my work, and I am not sure who I should choose, so can you help? B: Your old supervisor at the bookstore would be a good {{BLANK}}, because she worked with you for three years and knows how hard you work.",
    "cn": "A：公司要我提供一個能談論我工作表現的人，我不確定該選誰，你能幫忙嗎？ B：你以前在書店的主管會是很好的【推薦人】，因為她和你共事了三年，知道你工作多努力。"
  },
  {
    "word": "recommendation",
    "pos": "n.",
    "cn_def": "推薦；推薦信",
    "en_def": "a statement that someone is good for a job",
    "sentence": "A: I am applying for a teaching job at an international school, and they want a letter from someone who has seen me teach, so who should I ask? B: Ask the head teacher at your current school for a {{BLANK}}, because a letter from a senior teacher will make your application much stronger.",
    "cn": "A：我正在應徵一所國際學校的教職，他們要一封看過我教學的人寫的信，我該找誰？ B：請你目前學校的主任幫你寫一封【推薦信】，因為資深老師寫的信會讓你的申請更有說服力。"
  },
  {
    "word": "interest",
    "pos": "n.",
    "cn_def": "興趣；關注",
    "en_def": "a feeling of wanting to know about or do something",
    "sentence": "A: I really want to work for this green energy company, but I do not have much experience yet, so what should I say in the first paragraph? B: Explain your strong {{BLANK}} in solar power, and mention the volunteer project where you helped install solar panels at a school last summer.",
    "cn": "A：我真的很想在這家綠能公司工作，但我還沒有太多經驗，第一段該寫什麼？ B：說明你對太陽能有濃厚的【興趣】，並提到去年夏天你在一所學校幫忙安裝太陽能板的志工計畫。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的；熱衷的",
    "en_def": "showing a lot of excitement and interest",
    "sentence": "A: My letter lists all my skills, but my friend said it sounds a little cold and boring, so how can I make it sound more friendly and positive? B: Add a sentence saying you are {{BLANK}} about the chance to work with their team, and explain why their products really excite you.",
    "cn": "A：我的信列出了我所有的技能，但我朋友說聽起來有點冷淡又無聊，我要怎麼讓它聽起來更友善、更正面？ B：加一句話說你對能和他們團隊共事的機會感到很【熱衷】，並說明為什麼他們的產品真的讓你很興奮。"
  },
  {
    "word": "motivated",
    "pos": "adj.",
    "cn_def": "有動力的；積極的",
    "en_def": "wanting to do something and willing to work hard for it",
    "sentence": "A: Our sales team lost two people last month, and the new targets for next year are much higher, so what kind of person should we hire now? B: We need a highly {{BLANK}} person who wants to meet targets, who does not give up easily, and who is happy to visit customers every day.",
    "cn": "A：我們的業務團隊上個月走了兩個人，而明年的新目標高很多，我們現在該聘請什麼樣的人？ B：我們需要一個非常【積極】的人，想要達成目標、不輕易放棄，而且樂意每天拜訪客戶。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責任的；可靠的",
    "en_def": "able to be trusted to do the right thing",
    "sentence": "A: The restaurant manager is going on vacation next month and needs someone to open the shop and count the money every morning, so who should do it? B: I think Kevin is the most {{BLANK}} worker here, because he always arrives early, locks the doors carefully, and never makes mistakes with the cash.",
    "cn": "A：餐廳經理下個月要去度假，需要有人每天早上開店並清點現金，該由誰來做？ B：我覺得凱文是這裡最【負責任】的員工，因為他總是早到、仔細鎖門，而且處理現金從不出錯。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的",
    "en_def": "able to be trusted to do something well every time",
    "sentence": "A: I want to show the shipping company that I can be trusted, but I have only had one job, so what is a good example to use in my letter? B: Write that you were a {{BLANK}} driver at the bakery for two years, and that you delivered every order on time, even during typhoons.",
    "cn": "A：我想向那家貨運公司證明我值得信任，但我只做過一份工作，信裡用什麼例子比較好？ B：寫你在麵包店當了兩年【可靠】的司機，每一張訂單都準時送達，連颱風天也一樣。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skills and polite manner expected at work",
    "sentence": "A: I usually write emails to my friends in a very casual way, with lots of short words and emojis, so is that fine for my job letter? B: No, you should use a more {{BLANK}} style, with complete sentences, a polite greeting, and a clear closing, because the manager will judge you by your writing.",
    "cn": "A：我平常寫信給朋友都很隨性，用很多簡短的字和表情符號，這種寫法用在求職信可以嗎？ B：不行，你應該用比較【專業】的風格，句子要完整、問候要禮貌、結尾要清楚，因為經理會從你的文字來評斷你。"
  },
  {
    "word": "teamwork",
    "pos": "n.",
    "cn_def": "團隊合作",
    "en_def": "working well together with other people",
    "sentence": "A: The job post says the company builds websites in small groups of four or five people, so what should I write about my last job? B: Describe how you planned the company trade show with three coworkers, because that example shows your {{BLANK}} and your ability to share tasks fairly.",
    "cn": "A：這則職缺公告說那家公司以四、五個人的小組來架設網站，我該怎麼寫我上一份工作？ B：描述你和三位同事一起籌劃公司商展的經過，因為這個例子展現你的【團隊合作】以及公平分工的能力。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通",
    "en_def": "the sharing of information with other people",
    "sentence": "A: This customer service job means talking to clients on the phone and writing emails all day, so what should I show them in my letter? B: Show them your strong {{BLANK}} skills, for example by explaining how you answered more than fifty customer questions a day in your last job.",
    "cn": "A：這份客服工作就是整天和客戶講電話、寫電子郵件，我該在信中向他們展現什麼？ B：展現你很強的【溝通】能力，例如說明你在上一份工作中一天回答超過五十個客戶的問題。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something good",
    "sentence": "A: I just finished my letter for the internship at the airline, and I want my last sentence to sound polite and thankful, so what can I write? B: You could write that you would welcome the {{BLANK}} to meet them in person, and that you hope to hear from them soon.",
    "cn": "A：我剛寫完應徵航空公司實習的信，希望最後一句聽起來有禮貌又帶著感謝，我可以怎麼寫？ B：你可以寫你很希望有【機會】和他們當面見面，並希望很快收到他們的消息。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職涯；事業",
    "en_def": "the jobs you do in your working life",
    "sentence": "A: I have worked as a bank teller for three years, but now I want to move into marketing, so how can I explain this change in my letter? B: Explain that you want to build a long-term {{BLANK}} in marketing, and show how your customer service at the bank taught you what clients really need.",
    "cn": "A：我當了三年的銀行櫃員，但現在想轉往行銷，我要怎麼在信中解釋這個轉變？ B：說明你想在行銷領域建立長期的【職涯】，並說明你在銀行的客服經驗如何讓你了解客戶真正的需求。"
  },
  {
    "word": "contribute",
    "pos": "v.",
    "cn_def": "貢獻",
    "en_def": "to give your ideas, time, or work to help something succeed",
    "sentence": "A: The manager asked in the advertisement what new people can bring to the team, but I am not sure how to answer that, so do you have any ideas? B: Write that you can {{BLANK}} your experience with social media, since their online sales are growing and they will need someone to manage their accounts.",
    "cn": "A：經理在廣告中問新人能為團隊帶來什麼，但我不確定該怎麼回答，你有什麼想法嗎？ B：寫你能【貢獻】你的社群媒體經驗，因為他們的網路銷售正在成長，會需要有人管理他們的帳號。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "發展；培養",
    "en_def": "to make something grow or become better",
    "sentence": "A: Why do you want to leave your job at the small shop and work for a large international company, even though you would earn almost the same salary? B: I want to {{BLANK}} my management skills, and a big company offers training courses and chances to lead larger teams in different countries.",
    "cn": "A：雖然薪水幾乎一樣，你為什麼想離開小店的工作，去大型國際公司上班？ B：我想【培養】我的管理能力，而大公司會提供培訓課程，也有機會在不同國家帶領更大的團隊。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習",
    "en_def": "to get knowledge or a skill by studying or practicing",
    "sentence": "A: I have never used the design software that this company uses, and I am worried that they will not hire me because of it, so what should I say? B: Tell them honestly that you are ready to {{BLANK}} new programs quickly, and mention that you taught yourself video editing in only two months.",
    "cn": "A：我從來沒用過這家公司使用的設計軟體，我擔心他們會因此不錄用我，我該怎麼說？ B：老實告訴他們你準備好快速【學習】新程式，並提到你只花兩個月就自學會了影片剪輯。"
  },
  {
    "word": "grow",
    "pos": "v.",
    "cn_def": "成長",
    "en_def": "to become bigger, better, or more skilled",
    "sentence": "A: The last question on the application form asks where I see myself in five years, and I do not want to sound too proud, so how should I answer? B: Say that you hope to {{BLANK}} with the company, take on more responsibility, and maybe lead a small team after a few years of hard work.",
    "cn": "A：申請表上最後一個問題問我五年後的自己在哪裡，我不想聽起來太驕傲，該怎麼回答？ B：說你希望能和公司一起【成長】，承擔更多責任，經過幾年努力後也許能帶領一個小團隊。"
  },
  {
    "word": "suitable",
    "pos": "adj.",
    "cn_def": "合適的；適合的",
    "en_def": "right or good for a particular job or purpose",
    "sentence": "A: We received a letter from a young man who has a law degree, but this job is for a graphic designer, so should we call him for an interview? B: I do not think he is {{BLANK}} for this job, but we can keep his letter, because our legal department may need an assistant next year.",
    "cn": "A：我們收到一位擁有法律學位的年輕人的信，但這個職缺是平面設計師，我們該打電話請他來面試嗎？ B：我不認為他【適合】這份工作，但我們可以留著他的信，因為我們的法務部明年可能需要助理。"
  },
  {
    "word": "qualified",
    "pos": "adj.",
    "cn_def": "合格的；具備資格的",
    "en_def": "having the right training or exams for a job",
    "sentence": "A: The hospital needs a new nurse for the night shift, and three people have applied this week, so can all of them start working right away? B: Only two of them are fully {{BLANK}}, because the third person has not passed the national nursing exam yet and cannot work alone at night.",
    "cn": "A：醫院需要一位新的夜班護理師，這週有三個人應徵，他們都能馬上開始上班嗎？ B：只有兩位完全【具備資格】，因為第三位還沒通過國家護理考試，不能獨自值夜班。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "有空的；可到職的",
    "en_def": "free to do something, such as start a job or meet someone",
    "sentence": "A: The manager wants to know when I can come in for the interview, but I am still working at my old job during the day, so what should I say? B: Tell her you are {{BLANK}} on weekday evenings after six o'clock or any time on Saturday, and ask which time is best for her.",
    "cn": "A：經理想知道我什麼時候能來面試，但我白天還在原本的公司上班，我該怎麼說？ B：告訴她你平日晚上六點以後或星期六任何時間都【有空】，並問她哪個時間最方便。"
  },
  {
    "word": "interview",
    "pos": "n.",
    "cn_def": "面試",
    "en_def": "a formal meeting where someone asks you questions to decide if you get a job",
    "sentence": "A: I just received an email from the hotel saying they liked my letter and my resume, so what is the next step in their hiring process? B: They will probably invite you to an {{BLANK}} next week, so you should prepare answers about your experience and practice speaking clearly in English.",
    "cn": "A：我剛收到飯店的電子郵件，說他們喜歡我的信和履歷，他們招聘流程的下一步是什麼？ B：他們下週可能會邀請你去【面試】，所以你應該準備好關於你經驗的回答，並練習清楚地用英文表達。"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "cn_def": "討論",
    "en_def": "to talk about something with someone",
    "sentence": "A: How should I end my letter so the manager feels that I really want to meet her, without sounding too pushy or impatient? B: Write that you would be happy to {{BLANK}} your experience and ideas in more detail at a meeting, and give your phone number so she can call you easily.",
    "cn": "A：我的信該怎麼結尾，才能讓經理覺得我真的想見她，又不會顯得太強勢或沒耐心？ B：寫你很樂意在會面時更詳細地【討論】你的經驗和想法，並附上你的電話號碼，讓她方便打給你。"
  },
  {
    "word": "consider",
    "pos": "v.",
    "cn_def": "考慮",
    "en_def": "to think carefully about something before deciding",
    "sentence": "A: I think my letter is almost ready, but the closing sentence feels too short, so what polite words can I use to thank the company? B: You can write \"Thank you for taking the time to {{BLANK}} my application,\" because it is polite and shows that you respect the manager's busy schedule.",
    "cn": "A：我覺得我的信快寫好了，但結尾那句感覺太短，我可以用什麼禮貌的話來感謝公司？ B：你可以寫「感謝您撥冗【考慮】我的申請」，因為這句話很有禮貌，也顯示你尊重經理忙碌的行程。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感謝；感激",
    "en_def": "to be thankful for something",
    "sentence": "A: The manager of the design studio replied to my letter within one day and gave me some helpful advice about my portfolio, so should I write back? B: Yes, write a short email saying you really {{BLANK}} her quick reply and her advice, and tell her you will send the new portfolio by Friday.",
    "cn": "A：設計工作室的經理一天內就回了我的信，還給我一些關於作品集的有用建議，我該回信嗎？ B：要，寫一封簡短的電子郵件說你很【感謝】她迅速回覆和她的建議，並告訴她你會在星期五前寄出新的作品集。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回覆；回應",
    "en_def": "an answer to a letter, email, or question",
    "sentence": "A: I sent my letter to the trading company two weeks ago, and nobody has called or emailed me since then, so is it rude to contact them again? B: It is not rude at all, so send a polite email asking about your application, because a quick {{BLANK}} is not always possible when they have many applicants.",
    "cn": "A：我兩週前把信寄給那家貿易公司，到現在都沒人打電話或寄信給我，再聯絡他們會不禮貌嗎？ B：一點也不會，寄一封有禮貌的信詢問你的申請狀況吧，因為應徵者很多時，他們不一定能很快【回覆】。"
  },
  {
    "word": "contact",
    "pos": "v.",
    "cn_def": "聯絡",
    "en_def": "to call, email, or write to someone",
    "sentence": "A: At the end of my letter, I want the manager to know how she can reach me quickly if she wants to set up a meeting, so what should I write? B: Write \"Please {{BLANK}} me at 0912-345-678 or by email at any time,\" and make sure the number and the address are correct.",
    "cn": "A：在信的最後，我想讓經理知道如果她想安排面談，要怎樣快速找到我，我該寫什麼？ B：寫「歡迎隨時撥打0912-345-678或以電子郵件與我【聯絡】」，並確認電話號碼和地址正確無誤。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: My letter is finished, but my teacher says the last line should sound hopeful and friendly, not like a demand, so how should I end it? B: You can write \"I look forward to hearing from you {{BLANK}},\" because almost every business letter in English uses this kind of hopeful closing sentence.",
    "cn": "A：我的信寫完了，但老師說最後一句應該聽起來充滿期待又友善，而不是像在要求，我該怎麼結尾？ B：你可以寫「期待【很快】收到您的消息」，因為幾乎每一封英文商業書信都會用這種帶著期待的結尾句。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "敬上（正式信件結尾用語）",
    "en_def": "used before your name at the end of a formal letter",
    "sentence": "A: I started my letter with \"Dear Ms. Wang\" because I know the manager's name from the website, so which closing phrase should I write before my name? B: Since you know her name, you should write \"Yours {{BLANK}},\" which is the most common polite ending for formal business letters in English.",
    "cn": "A：我的信是以「親愛的王小姐」開頭，因為我從網站上知道經理的名字，在我的名字前該用哪個結尾語？ B：既然你知道她的名字，就應該寫「Yours 【sincerely（謹啟）】」，這是英文正式商業書信最常見的禮貌結尾。"
  },
  {
    "word": "faithfully",
    "pos": "adv.",
    "cn_def": "敬上（英式正式信件，不知收件人姓名時用）",
    "en_def": "used at the end of a formal British letter when you do not know the person's name",
    "sentence": "A: The British company did not give the name of the hiring manager, so I started my letter with \"Dear Sir or Madam,\" and now I need an ending. B: In British English, when you do not know the person's name, you should finish with \"Yours {{BLANK}},\" and then sign your full name below it.",
    "cn": "A：那家英國公司沒有提供招聘經理的姓名，所以我的信以「敬啟者」開頭，現在我需要一個結尾。 B：在英式英文中，當你不知道對方姓名時，應該以「Yours 【faithfully（謹上）】」結尾，然後在下方簽上你的全名。"
  }
];

const MCQS = [
  {
    "q": "The hotel has an open _____ for a night manager. The person must be able to work late and handle guest problems.",
    "options": [
      "position",
      "career",
      "degree",
      "strength"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Since the head chef retired in May, there has been a _____ in the kitchen. The restaurant hopes to fill it before summer.",
    "options": [
      "certificate",
      "resume",
      "vacancy",
      "interest"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Mr. Lee was chosen as the final _____ for the job. The board will meet him one more time on Friday.",
    "options": [
      "employer",
      "candidate",
      "reference",
      "response"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Every _____ must complete the online form by June 10. Late forms will not be accepted by the hiring team.",
    "options": [
      "employer",
      "career",
      "opportunity",
      "applicant"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The factory is the largest _____ in the small town. Almost half of the local people work there in different jobs.",
    "options": [
      "candidate",
      "employer",
      "applicant",
      "position"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "A teaching _____ is required for this school position. Applicants without one will not be invited to the interview stage.",
    "options": [
      "interest",
      "strength",
      "qualification",
      "response"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "She has ten years of _____ in hotel sales. That is why the manager offered her the job so quickly.",
    "options": [
      "opportunity",
      "communication",
      "recommendation",
      "experience"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Speaking Japanese is a useful _____ for this travel company. Many of its customers come from Osaka and Tokyo.",
    "options": [
      "skill",
      "vacancy",
      "degree",
      "resume"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The job requires the _____ to solve problems quickly. Customers often call with urgent questions about their orders.",
    "options": [
      "reference",
      "ability",
      "education",
      "response"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "His greatest _____ is his careful attention to detail. He has never sent a report with a single mistake.",
    "options": [
      "vacancy",
      "contact",
      "strength",
      "career"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please list your _____ in the second part of the form. Include the names of your high school and university.",
    "options": [
      "education",
      "teamwork",
      "interest",
      "opportunity"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Ms. Hsu earned a _____ in engineering from a university in Tainan. She then worked for an electronics company.",
    "options": [
      "skill",
      "strength",
      "position",
      "degree"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mark received a _____ after completing the safety course. He must show it to his supervisor before using the machines.",
    "options": [
      "candidate",
      "vacancy",
      "certificate",
      "career"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please send a short _____ that lists your past jobs. It should not be longer than one page.",
    "options": [
      "resume",
      "employer",
      "ability",
      "career"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please _____ a recent photo to your email. The hiring team likes to remember each person after the interviews.",
    "options": [
      "consider",
      "grow",
      "learn",
      "attach"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Our manager wrote a letter of _____ for Amy. It helped her get a job at a large bank in Taipei.",
    "options": [
      "vacancy",
      "recommendation",
      "teamwork",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Thank you for your _____ in our company. We will review your letter and reply within two weeks.",
    "options": [
      "employer",
      "certificate",
      "degree",
      "interest"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The new staff members were _____ about the training trip. They asked many questions and took careful notes the whole time.",
    "options": [
      "qualified",
      "available",
      "enthusiastic",
      "suitable"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "We need a _____ employee to lock the store every night. The owner must be able to trust this person completely.",
    "options": [
      "enthusiastic",
      "responsible",
      "available",
      "motivated"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Our delivery service is fast and _____. Over the last year, ninety-nine percent of packages arrived on the promised day.",
    "options": [
      "reliable",
      "enthusiastic",
      "available",
      "motivated"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Good _____ is important in a busy kitchen. The cooks must work together closely to serve meals on time.",
    "options": [
      "certificate",
      "resume",
      "degree",
      "teamwork"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Moving to the Singapore office was a great _____ for Sam. He learned a lot and was promoted after one year.",
    "options": [
      "employer",
      "opportunity",
      "applicant",
      "reference"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Ms. Wang started her _____ as a junior clerk. Twenty years later, she became the president of the bank.",
    "options": [
      "certificate",
      "strength",
      "career",
      "response"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Every team member is expected to _____ ideas at the weekly meeting. The manager writes all of them on the board.",
    "options": [
      "contribute",
      "appreciate",
      "attach",
      "consider"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The company plans to _____ a training program for new managers. It will begin in the spring and last six weeks.",
    "options": [
      "attach",
      "contact",
      "appreciate",
      "develop"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "This room is not _____ for a large meeting. It has only eight chairs and no projector for presentations.",
    "options": [
      "enthusiastic",
      "suitable",
      "motivated",
      "responsible"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The manager is not _____ this afternoon. She will be at a client meeting until five o'clock.",
    "options": [
      "available",
      "enthusiastic",
      "suitable",
      "professional"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The board needs more time to _____ the offer. A final decision will be made at the end of the month.",
    "options": [
      "attach",
      "grow",
      "consider",
      "contact"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "We _____ your patience during the system update. The online store will be open again by nine o'clock tonight.",
    "options": [
      "contribute",
      "appreciate",
      "attach",
      "learn"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "If you have any questions about the job, please _____ our office. Our staff will reply within one business day.",
    "options": [
      "contact",
      "develop",
      "grow",
      "appreciate"
    ],
    "answer": 0,
    "vocabIndex": 40
  }
];

const LOOKUP = {
  "position": {
    "pos": "n.",
    "en_def": "a job in a company",
    "cn_def": "職位；職缺"
  },
  "vacancy": {
    "pos": "n.",
    "en_def": "a job that is open and needs someone to fill it",
    "cn_def": "職缺；空缺"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is being considered for a job",
    "cn_def": "候選人；應徵者"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who formally asks for a job",
    "cn_def": "申請人；求職者"
  },
  "employer": {
    "pos": "n.",
    "en_def": "a person or company that pays people to work for them",
    "cn_def": "雇主"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "an official record, like a degree, showing you have finished training",
    "cn_def": "資格；學歷證明"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing a job for some time",
    "cn_def": "經驗"
  },
  "skill": {
    "pos": "n.",
    "en_def": "the ability to do something well because you have practiced it",
    "cn_def": "技能；技巧"
  },
  "ability": {
    "pos": "n.",
    "en_def": "the power or talent to do something",
    "cn_def": "能力"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or skill that someone has",
    "cn_def": "優點；長處"
  },
  "education": {
    "pos": "n.",
    "en_def": "the learning you get at school, college, or university",
    "cn_def": "教育；學歷"
  },
  "degree": {
    "pos": "n.",
    "en_def": "the title a university gives you when you finish your studies",
    "cn_def": "學位"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official paper that shows you have passed a test or finished a course",
    "cn_def": "證書；證照"
  },
  "resume": {
    "pos": "n.",
    "en_def": "a short document listing your education and work history",
    "cn_def": "履歷"
  },
  "cv": {
    "pos": "n.",
    "en_def": "a document listing your education, work, and skills (curriculum vitae)",
    "cn_def": "履歷（CV）"
  },
  "attach": {
    "pos": "v.",
    "en_def": "to add a file to an email",
    "cn_def": "附加（檔案）"
  },
  "reference": {
    "pos": "n.",
    "en_def": "a person who can tell an employer about your work and character",
    "cn_def": "推薦人；介紹人"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a statement that someone is good for a job",
    "cn_def": "推薦；推薦信"
  },
  "interest": {
    "pos": "n.",
    "en_def": "a feeling of wanting to know about or do something",
    "cn_def": "興趣；關注"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing a lot of excitement and interest",
    "cn_def": "熱情的；熱衷的"
  },
  "motivated": {
    "pos": "adj.",
    "en_def": "wanting to do something and willing to work hard for it",
    "cn_def": "有動力的；積極的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "able to be trusted to do the right thing",
    "cn_def": "負責任的；可靠的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do something well every time",
    "cn_def": "可靠的；可信賴的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skills and polite manner expected at work",
    "cn_def": "專業的"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "working well together with other people",
    "cn_def": "團隊合作"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of information with other people",
    "cn_def": "溝通"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good",
    "cn_def": "機會"
  },
  "career": {
    "pos": "n.",
    "en_def": "the jobs you do in your working life",
    "cn_def": "職涯；事業"
  },
  "contribute": {
    "pos": "v.",
    "en_def": "to give your ideas, time, or work to help something succeed",
    "cn_def": "貢獻"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to make something grow or become better",
    "cn_def": "發展；培養"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a skill by studying or practicing",
    "cn_def": "學習"
  },
  "grow": {
    "pos": "v.",
    "en_def": "to become bigger, better, or more skilled",
    "cn_def": "成長"
  },
  "suitable": {
    "pos": "adj.",
    "en_def": "right or good for a particular job or purpose",
    "cn_def": "合適的；適合的"
  },
  "qualified": {
    "pos": "adj.",
    "en_def": "having the right training or exams for a job",
    "cn_def": "合格的；具備資格的"
  },
  "available": {
    "pos": "adj.",
    "en_def": "free to do something, such as start a job or meet someone",
    "cn_def": "有空的；可到職的"
  },
  "interview": {
    "pos": "n.",
    "en_def": "a formal meeting where someone asks you questions to decide if you get a job",
    "cn_def": "面試"
  },
  "discuss": {
    "pos": "v.",
    "en_def": "to talk about something with someone",
    "cn_def": "討論"
  },
  "consider": {
    "pos": "v.",
    "en_def": "to think carefully about something before deciding",
    "cn_def": "考慮"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感謝；感激"
  },
  "response": {
    "pos": "n.",
    "en_def": "an answer to a letter, email, or question",
    "cn_def": "回覆；回應"
  },
  "contact": {
    "pos": "v.",
    "en_def": "to call, email, or write to someone",
    "cn_def": "聯絡"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "used before your name at the end of a formal letter",
    "cn_def": "敬上（正式信件結尾用語）"
  },
  "faithfully": {
    "pos": "adv.",
    "en_def": "used at the end of a formal British letter when you do not know the person's name",
    "cn_def": "敬上（英式正式信件，不知收件人姓名時用）"
  }
};

const EXTRA_GLOSSES = {};
