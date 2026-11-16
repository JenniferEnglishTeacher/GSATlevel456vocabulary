// Topic 198 Quiz Data: Interpreter 口譯員
// Source word list: https://www.examword.com/group-topic/interpreter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T198 - Interpreter 口譯員",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "口譯",
    "en_def": "the act of changing spoken words into another language",
    "sentence": "A: Our Japanese partners are visiting the factory next Tuesday, but most of our engineers cannot speak Japanese at all, so how will we talk with them? B: I have already booked a professional company to provide {{BLANK}} during the meeting, so everyone can ask questions and understand the answers clearly.",
    "cn": "A：我們的日本合作夥伴下週二要來參觀工廠，但我們大多數的工程師完全不會說日文，我們要怎麼和他們溝通？ B：我已經預約了一家專業公司在會議期間提供【口譯】服務，這樣每個人都能清楚地提問和理解答案。"
  },
  {
    "word": "translate",
    "pos": "v.",
    "cn_def": "翻譯",
    "en_def": "to change words into another language",
    "sentence": "A: The new safety manual for the Vietnamese workers arrives tomorrow, but it is only written in English, so what should we do before the training begins? B: Could you ask Linda in the human resources office to {{BLANK}} the most important pages into Vietnamese, because she grew up in Hanoi and knows the factory well?",
    "cn": "A：給越南員工的新安全手冊明天會到，但它只有英文版，在訓練開始前我們該怎麼做？ B：你可以請人資部的琳達把最重要的幾頁【翻譯】成越南文嗎？因為她在河內長大，而且很了解工廠。"
  },
  {
    "word": "translation",
    "pos": "n.",
    "cn_def": "翻譯；譯文",
    "en_def": "words that have been changed into another language",
    "sentence": "A: Why did the Spanish customers look so confused when they read the product brochure that we sent to them last month? B: The company we hired used a cheap computer program, and the {{BLANK}} was full of strange mistakes, so we are paying a native speaker to rewrite it this week.",
    "cn": "A：為什麼西班牙客戶讀了我們上個月寄給他們的產品手冊後，看起來那麼困惑？ B：我們僱用的公司用了一個便宜的電腦程式，【譯文】裡充滿奇怪的錯誤，所以我們這週要付錢請母語人士重寫。"
  },
  {
    "word": "bilingual",
    "pos": "adj.",
    "cn_def": "雙語的",
    "en_def": "able to speak two languages well",
    "sentence": "A: We are opening a new branch office in Montreal next spring, so what kind of staff should we look for at the reception desk? B: Since many visitors there speak French and others speak English, we should hire {{BLANK}} receptionists who can greet every customer politely and answer phone calls in both languages.",
    "cn": "A：我們明年春天要在蒙特婁開新的分公司，接待櫃台應該找什麼樣的員工？ B：因為那裡很多訪客說法語，其他人說英語，我們應該僱用【雙語的】接待員，能用兩種語言有禮貌地招呼每位客人並接聽電話。"
  },
  {
    "word": "multilingual",
    "pos": "adj.",
    "cn_def": "多語的",
    "en_def": "using or speaking many languages",
    "sentence": "A: Our online store now gets orders from Germany, Korea, and Brazil, but customers often complain that they cannot read our help pages, so what can we do? B: The marketing team is building a {{BLANK}} website that will show information in six languages, and it should be ready before the holiday shopping season starts in November.",
    "cn": "A：我們的網路商店現在收到來自德國、韓國和巴西的訂單，但顧客常抱怨看不懂我們的說明頁面，我們能怎麼做？ B：行銷團隊正在建置一個【多語的】網站，會以六種語言顯示資訊，應該會在十一月假期購物季開始前完成。"
  },
  {
    "word": "fluency",
    "pos": "n.",
    "cn_def": "流利；流暢",
    "en_def": "the ability to speak a language easily and well",
    "sentence": "A: Why did the manager choose Kevin to lead the sales trip to Tokyo instead of Mark, who has worked here for much longer? B: Kevin lived in Japan for five years, and his {{BLANK}} in Japanese means he can chat easily with clients at dinner and handle difficult questions without a translator.",
    "cn": "A：為什麼經理選凱文帶領去東京的業務出差，而不是在這裡工作更久的馬克？ B：凱文在日本住了五年，他日語【流利】，代表他能在晚餐時輕鬆地和客戶聊天，並且不需翻譯就能處理困難的問題。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確性",
    "en_def": "the quality of being correct with no mistakes",
    "sentence": "A: The lawyers want the Korean version of the supplier contract by Friday, so can we just use the free online translation tool to save time? B: I would rather not, because every number and date in the contract is important, and {{BLANK}} matters much more than speed when a small mistake could cost us thousands of dollars.",
    "cn": "A：律師們要在週五前拿到供應商合約的韓文版，我們可以直接用免費線上翻譯工具來節省時間嗎？ B：我寧可不要，因為合約中每個數字和日期都很重要，而且一個小錯誤可能讓我們損失數千美元，所以【準確性】比速度重要得多。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；清楚",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: The visitors from our Italian office said yesterday's presentation was hard to follow, so what should our speaker change before the next session this afternoon? B: She should speak more slowly, use shorter sentences, and show simple pictures on the slides, because {{BLANK}} is the most important thing when the audience is listening in a second language.",
    "cn": "A：義大利分公司的訪客說昨天的簡報很難跟上，我們的講者在今天下午下一場之前應該改什麼？ B：她應該講慢一點、用短一點的句子，並在投影片上放簡單的圖片，因為當聽眾用第二語言聆聽時，【清晰】是最重要的。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "上下文；背景",
    "en_def": "the words or situation around something that help explain its meaning",
    "sentence": "A: The word \"bank\" appears three times in this financial report, so how will the new translator know whether it means a business or the side of a river? B: She will read the whole paragraph first, because the {{BLANK}} around each word usually shows the correct meaning, especially in reports about money and investments.",
    "cn": "A：「bank」這個字在這份財務報告中出現了三次，新來的譯者要怎麼知道它是指銀行還是河岸？ B：她會先讀整段文字，因為每個字周圍的【上下文】通常會顯示正確的意思，特別是在關於金錢和投資的報告中。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "語氣；口吻",
    "en_def": "the feeling that a voice or piece of writing shows",
    "sentence": "A: The interpreter repeated the client's words correctly during the call, so why did our sales director still feel that something went wrong? B: The client sounded angry and disappointed, but the interpreter used a cheerful {{BLANK}}, so our director did not realize how serious the problem with the late shipment really was.",
    "cn": "A：口譯員在通話中正確地重複了客戶的話，為什麼我們的業務總監還是覺得哪裡出了問題？ B：客戶聽起來既生氣又失望，但口譯員用了愉快的【語氣】，所以總監沒有意識到延遲出貨的問題到底有多嚴重。"
  },
  {
    "word": "dialect",
    "pos": "n.",
    "cn_def": "方言",
    "en_def": "a form of a language spoken in one area",
    "sentence": "A: The new farmers in the southern region are joining our supply program next month, but will our staff from the city understand them during the training? B: Many of them speak a local {{BLANK}} that is quite different from the standard language, so we have invited a guide from their village to help explain things.",
    "cn": "A：南部地區的新農民下個月要加入我們的供貨計畫，我們城市來的員工在訓練時聽得懂他們說話嗎？ B：他們很多人說一種和標準語言相當不同的當地【方言】，所以我們已邀請他們村裡的一位嚮導來幫忙解釋。"
  },
  {
    "word": "accent",
    "pos": "n.",
    "cn_def": "口音",
    "en_def": "the way a person pronounces words, often showing where they are from",
    "sentence": "A: Our customers sometimes say the new call center staff are hard to understand on the phone, so should we send them to extra classes? B: Their grammar is excellent, but some of them have a strong {{BLANK}}, so a short pronunciation course could help callers follow them more easily and reduce complaints.",
    "cn": "A：我們的客戶有時說新的客服中心人員在電話中很難聽懂，我們應該送他們去上額外的課嗎？ B：他們的文法很好，但有些人【口音】很重，所以一個短期發音課程能幫助來電者更容易聽懂，並減少抱怨。"
  },
  {
    "word": "simultaneous",
    "pos": "adj.",
    "cn_def": "同步的；同時的",
    "en_def": "happening at the same time",
    "sentence": "A: The international conference has speakers from five countries, so how will the guests understand each speech without waiting for long breaks after every sentence? B: Each guest will wear headphones and hear {{BLANK}} interpretation, which means the interpreters speak at the same time as the speaker from small booths at the back of the hall.",
    "cn": "A：這場國際研討會有來自五個國家的講者，來賓要怎麼在不必每句話後長時間等待的情況下聽懂每場演講？ B：每位來賓會戴上耳機收聽【同步】口譯，也就是口譯員在會場後方的小隔間裡與講者同時說話。"
  },
  {
    "word": "consecutive",
    "pos": "adj.",
    "cn_def": "逐步的；連續的",
    "en_def": "done after the speaker stops; following one after another",
    "sentence": "A: The factory tour for the Thai buyers is quite small, so do we really need to rent expensive headphones and booths for the interpreter? B: No, she can provide {{BLANK}} interpretation, so the manager will stop after every few sentences and wait while she repeats his explanation in Thai for the group.",
    "cn": "A：給泰國買家的工廠導覽規模很小，我們真的需要為口譯員租昂貴的耳機和隔間嗎？ B：不用，她可以提供【逐步】口譯，所以經理每講幾句就會停下來，等她為團體用泰文重複他的說明。"
  },
  {
    "word": "whispering",
    "pos": "n.",
    "cn_def": "耳語口譯",
    "en_def": "interpreting very quietly into one listener's ear",
    "sentence": "A: Only the new Spanish board member does not speak English, so how can she follow the discussion without disturbing the other directors at the meeting? B: The interpreter will sit right next to her and use {{BLANK}}, speaking very softly into her ear so the others can continue the meeting without noise.",
    "cn": "A：只有新來的西班牙籍董事不會說英文，她要怎麼在不打擾其他董事的情況下跟上會議討論？ B：口譯員會坐在她旁邊使用【耳語口譯】，在她耳邊非常小聲地說，讓其他人能在沒有噪音的情況下繼續開會。"
  },
  {
    "word": "note-taking",
    "pos": "n.",
    "cn_def": "做筆記",
    "en_def": "writing down short notes while listening",
    "sentence": "A: How does the interpreter remember all the numbers and names when the speaker talks for three or four minutes without stopping? B: She learned a special system of {{BLANK}} during her training, using short symbols and arrows, so she can write down key points quickly and repeat them correctly.",
    "cn": "A：當講者連續講三、四分鐘不停時，口譯員要怎麼記住所有數字和名字？ B：她在受訓時學了一套特別的【做筆記】方法，使用簡短的符號和箭頭，所以她能快速記下重點並正確地重述。"
  },
  {
    "word": "terminology",
    "pos": "n.",
    "cn_def": "術語；專門用語",
    "en_def": "the special words used in a subject or job",
    "sentence": "A: Our interpreter is excellent at business meetings, but will she be able to handle the medical conference at the hospital next week? B: She has asked for the doctors' slides early, because medical {{BLANK}} is very specific, and she wants to learn the correct names of diseases and treatments before the event.",
    "cn": "A：我們的口譯員在商務會議上表現很好，但她能應付下週在醫院的醫學研討會嗎？ B：她已要求提早拿到醫生們的投影片，因為醫學【術語】非常專門，她想在活動前學會疾病和治療的正確名稱。"
  },
  {
    "word": "idiom",
    "pos": "n.",
    "cn_def": "慣用語；成語",
    "en_def": "a group of words whose meaning is different from the single words",
    "sentence": "A: Why did the German visitors look so puzzled when our director said the new project was \"a piece of cake\" during the lunch meeting? B: That {{BLANK}} cannot be translated word for word, so they probably imagined real cake, and the interpreter should have explained that it simply means the job is easy.",
    "cn": "A：為什麼我們總監在午餐會議上說新專案是「a piece of cake」時，德國訪客看起來那麼困惑？ B：那個【慣用語】不能逐字翻譯，所以他們大概想像成真的蛋糕，口譯員應該解釋它只是表示這工作很簡單。"
  },
  {
    "word": "paraphrase",
    "pos": "v.",
    "cn_def": "改述；換句話說",
    "en_def": "to say something again using different words",
    "sentence": "A: The engineer's explanation of the new machine was very long and technical, so how did the interpreter make it clear for the customers from Indonesia? B: She decided to {{BLANK}} the difficult parts in simple words, keeping the main meaning the same, so the customers understood how the machine works without feeling confused.",
    "cn": "A：工程師對新機器的說明又長又專業，口譯員是怎麼讓印尼客戶聽懂的？ B：她決定用簡單的字詞【改述】困難的部分，保留主要意思不變，所以客戶在不感到困惑的情況下理解了機器如何運作。"
  },
  {
    "word": "rephrase",
    "pos": "v.",
    "cn_def": "重新措辭；換種說法",
    "en_def": "to say or write something again in a different way",
    "sentence": "A: The French client didn't understand my question about the payment schedule, and he just smiled and nodded, so what should I do on our next call? B: Try to {{BLANK}} your question using shorter and easier words, and then ask him to repeat the dates, so you can be sure he understood the agreement.",
    "cn": "A：法國客戶沒聽懂我關於付款時程的問題，他只是微笑點頭，下次通話我該怎麼做？ B：試著用更短、更簡單的字【重新措辭】你的問題，然後請他重複日期，這樣你才能確定他理解了協議內容。"
  },
  {
    "word": "summarize",
    "pos": "v.",
    "cn_def": "總結；概述",
    "en_def": "to give the main points in a short way",
    "sentence": "A: The meeting with the Chinese suppliers lasted almost three hours, but the general manager only arrived at the end, so how can we update him quickly? B: The interpreter will {{BLANK}} the main decisions in a short report this evening, including the new prices, delivery dates, and the quality checks both sides agreed on.",
    "cn": "A：和中國供應商的會議持續了將近三小時，但總經理最後才到，我們要怎麼快速向他報告？ B：口譯員今晚會在一份簡短報告中【總結】主要決定，包括新價格、交貨日期以及雙方同意的品質檢查。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶力",
    "en_def": "the ability to remember things",
    "sentence": "A: How was the interpreter able to repeat the chairman's long speech with every number and name correct, even though she didn't write anything down? B: She has an amazing {{BLANK}}, and she practices every morning by listening to news reports and repeating them aloud, which helps her hold a lot of information.",
    "cn": "A：口譯員怎麼能在沒寫下任何東西的情況下，正確地重述董事長的長篇演說，連每個數字和名字都對？ B：她有驚人的【記憶力】，而且她每天早上都會練習聽新聞報導並大聲重複，這幫助她記住大量資訊。"
  },
  {
    "word": "listening",
    "pos": "n.",
    "cn_def": "聆聽；聽力",
    "en_def": "the act of paying attention to sounds or speech",
    "sentence": "A: Our company wants to send two staff members to the interpreter course in Singapore, so which skill does the course focus on in the first month? B: It focuses mostly on {{BLANK}}, because interpreters must understand every word, accent, and feeling clearly before they can turn the message into another language.",
    "cn": "A：公司想派兩位員工去新加坡上口譯課程，課程第一個月著重哪項技能？ B：主要著重在【聆聽】，因為口譯員必須清楚理解每個字、口音和情緒，才能把訊息轉換成另一種語言。"
  },
  {
    "word": "comprehension",
    "pos": "n.",
    "cn_def": "理解力",
    "en_def": "the ability to understand something",
    "sentence": "A: Before we hire someone to join our interpreting team, how do we test whether they truly understand difficult business speeches? B: Each applicant listens to a recorded meeting and then answers questions about it, and this {{BLANK}} test shows us how much they really understood in the time given.",
    "cn": "A：在僱用人加入我們的口譯團隊之前，我們要怎麼測試他們是否真正聽懂困難的商業演說？ B：每位應徵者會聽一段錄好的會議，然後回答相關問題，這項【理解力】測驗能讓我們看出他們在限定時間內真正懂了多少。"
  },
  {
    "word": "neutral",
    "pos": "adj.",
    "cn_def": "中立的",
    "en_def": "not supporting either side",
    "sentence": "A: The two companies are arguing about who should pay for the damaged goods, so should our interpreter try to help our side win the discussion? B: No, an interpreter must stay completely {{BLANK}}, which means repeating each person's words fairly without adding opinions or choosing sides, even when the meeting becomes tense.",
    "cn": "A：兩家公司正在爭論誰應該負擔損壞貨物的費用，我們的口譯員應該試著幫我們這邊贏得討論嗎？ B：不，口譯員必須保持完全【中立】，也就是公平地重述每個人的話，不加入意見或選邊站，即使會議氣氛變得緊張也一樣。"
  },
  {
    "word": "confidentiality",
    "pos": "n.",
    "cn_def": "保密",
    "en_def": "keeping information secret and private",
    "sentence": "A: The interpreter will hear all the details about our plan to buy the smaller company next year, so how can we be sure she won't tell anyone? B: She signed a {{BLANK}} agreement before the meeting, and professional interpreters are trained to keep everything they hear private, so our secret plan is safe.",
    "cn": "A：口譯員會聽到我們明年收購那家較小公司計畫的所有細節，我們怎麼確定她不會告訴任何人？ B：她在會議前簽了【保密】協議，而專業口譯員都受過訓練，會將聽到的一切保持私密，所以我們的秘密計畫是安全的。"
  },
  {
    "word": "ethics",
    "pos": "n.",
    "cn_def": "倫理；道德規範",
    "en_def": "rules about what is right and wrong in a job",
    "sentence": "A: A client offered our interpreter a large gift if she would change some words to make the other company look bad, so what did she do? B: She refused politely and reported it to her manager, because professional {{BLANK}} require interpreters to be honest, fair, and loyal to the true meaning of every message.",
    "cn": "A：一位客戶提出，如果我們的口譯員願意改動一些字眼讓另一家公司難堪，就送她一份大禮，她怎麼做？ B：她禮貌地拒絕並向主管報告，因為職業【倫理】要求口譯員誠實、公正，並忠於每個訊息的真實意思。"
  },
  {
    "word": "mediator",
    "pos": "n.",
    "cn_def": "調解人；中間人",
    "en_def": "a person who helps two sides agree",
    "sentence": "A: The talks between the workers' group and the factory owners have stopped again, so who will help the two sides agree on new working hours? B: The city has sent an experienced {{BLANK}} who will listen to both groups, explain each side's concerns calmly, and guide them toward a fair solution next week.",
    "cn": "A：工人團體和工廠老闆之間的談判又停止了，誰來幫助雙方就新的工作時間達成共識？ B：市政府派了一位經驗豐富的【調解人】，他會聆聽雙方意見、冷靜地說明各方的顧慮，並在下週引導他們找到公平的解決方案。"
  },
  {
    "word": "cultural",
    "pos": "adj.",
    "cn_def": "文化的",
    "en_def": "related to the customs and beliefs of a group of people",
    "sentence": "A: Our interpreter told us not to give the Chinese clients clocks as gifts at the opening ceremony, so why did she say that? B: There is an important {{BLANK}} reason, because in Chinese a clock sounds like a word about death, and good interpreters explain these customs as well as the language.",
    "cn": "A：我們的口譯員告訴我們不要在開幕典禮上送時鐘給中國客戶，她為什麼這麼說？ B：這有一個重要的【文化】原因，因為在中文裡「送鐘」聽起來像和死亡有關的詞，好的口譯員除了語言還會解釋這些習俗。"
  },
  {
    "word": "register",
    "pos": "n.",
    "cn_def": "語域（語言的正式程度）",
    "en_def": "the level of formal or informal language used in a situation",
    "sentence": "A: The interpreter used very casual words when she spoke for our president at the formal dinner, so why were some guests surprised? B: She chose the wrong {{BLANK}}, because a formal event needs polite and serious language, while casual words are better for friendly chats between coworkers in the office.",
    "cn": "A：口譯員在正式晚宴上為我們總裁發言時用了很隨便的字詞，為什麼有些來賓感到驚訝？ B：她用錯了【語域】，因為正式場合需要禮貌又嚴肅的語言，而隨便的字詞比較適合同事在辦公室裡友善地聊天。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how well someone did something",
    "sentence": "A: The interpreting agency wants to know how the new interpreter did at our sales conference last week, so what should I tell them? B: Please give them honest {{BLANK}}: the guests loved her clear voice, but she was sometimes slow with numbers, so she could improve that with more practice.",
    "cn": "A：口譯公司想知道新口譯員上週在我們業務大會的表現，我該怎麼告訴他們？ B：請給他們誠實的【回饋】：來賓很喜歡她清晰的聲音，但她有時處理數字較慢，所以她可以多加練習來改善。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "培訓；訓練",
    "en_def": "the process of learning the skills for a job",
    "sentence": "A: How long does it take for a bilingual person to become a conference interpreter who can work at large international events? B: Most people need at least two years of serious {{BLANK}} at a language school, where they practice listening, speaking, and note-taking every day with experienced teachers.",
    "cn": "A：一個雙語人士要多久才能成為能在大型國際活動工作的會議口譯員？ B：大多數人需要在語言學校接受至少兩年認真的【培訓】，每天和經驗豐富的老師練習聽、說和做筆記。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "doing something again and again to get better",
    "sentence": "A: The new interpreter is nervous about her first big job at the trade fair next month, so what can she do to feel more prepared? B: She needs plenty of {{BLANK}}, so she should listen to recorded speeches about the industry every evening and interpret them aloud while her coach checks her mistakes.",
    "cn": "A：新的口譯員對下個月在商展的第一份大型工作感到緊張，她能做什麼讓自己準備得更充分？ B：她需要大量【練習】，所以她應該每天晚上聽與該產業相關的錄音演講，並在教練檢查錯誤時大聲口譯。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "having the skills and training of a trained worker",
    "sentence": "A: Should we ask Tom from the sales team to interpret during the contract talks with the Korean buyers, since he studied Korean in college? B: I think we should hire a {{BLANK}} interpreter instead, because these talks are very important and we need someone with real experience, special training, and a good reputation.",
    "cn": "A：既然湯姆大學時學過韓文，我們應該請業務部的他在和韓國買家的合約談判中擔任口譯嗎？ B：我認為我們應該改請一位【專業的】口譯員，因為這些談判非常重要，我們需要真正有經驗、受過特殊訓練且聲譽良好的人。"
  }
];

const MCQS = [
  {
    "q": "The conference will include guests from Brazil and Japan. The organizers have hired a company to provide _____ services for all the speeches.",
    "options": [
      "interpretation",
      "ethics",
      "dialect",
      "memory"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our website is only available in English right now. We plan to _____ all product pages into Spanish before the end of the year.",
    "options": [
      "practice",
      "summarize",
      "translate",
      "attend"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The Japanese _____ of the user manual contained several mistakes. The company hired an expert to correct it before printing more copies.",
    "options": [
      "accent",
      "translation",
      "mediator",
      "fluency"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hotel is looking for _____ receptionists who speak both English and Korean. Applicants should send their resumes by Friday.",
    "options": [
      "neutral",
      "cultural",
      "simultaneous",
      "bilingual"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our support center serves customers in twelve countries. We need a _____ team that can answer questions in many different languages.",
    "options": [
      "neutral",
      "consecutive",
      "multilingual",
      "simultaneous"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Daniel was hired because of his _____ in German. He can discuss contracts with clients in Berlin without any help.",
    "options": [
      "fluency",
      "confidentiality",
      "terminology",
      "mediator"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Financial reports must be checked carefully before they are sent to investors. Even small errors can reduce the _____ of the information.",
    "options": [
      "fluency",
      "dialect",
      "idiom",
      "accuracy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The manager rewrote the instructions in simple language. She wanted to improve their _____ so that every new worker could follow them.",
    "options": [
      "confidentiality",
      "clarity",
      "dialect",
      "accent"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Some words have more than one meaning. Translators must look at the _____ of each sentence to choose the correct one.",
    "options": [
      "context",
      "accent",
      "mediator",
      "ethics"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The customer service agent spoke in a calm and friendly _____ of voice. The angry caller soon relaxed and explained the problem.",
    "options": [
      "dialect",
      "idiom",
      "tone",
      "memory"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The villagers in the mountain area speak a local _____ that city visitors find hard to understand. A guide will help the tour group.",
    "options": [
      "mediator",
      "dialect",
      "feedback",
      "terminology"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Sarah grew up in Scotland, so she speaks English with a strong _____. Some callers ask her to repeat herself on the phone.",
    "options": [
      "context",
      "ethics",
      "comprehension",
      "accent"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The summit uses headphones and booths at the back of the hall. Delegates can hear _____ interpretation while each speaker is still talking.",
    "options": [
      "consecutive",
      "neutral",
      "simultaneous",
      "cultural"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "At the small factory tour, the manager paused after every few sentences. The interpreter then provided _____ interpretation for the visiting buyers.",
    "options": [
      "consecutive",
      "simultaneous",
      "bilingual",
      "neutral"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The new interpreter studied legal _____ for weeks before the trial. She wanted to know the exact English words for every court term.",
    "options": [
      "fluency",
      "comprehension",
      "feedback",
      "terminology"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The phrase \"break the ice\" is a common English _____. It means to start a friendly conversation with people you do not know.",
    "options": [
      "accent",
      "idiom",
      "mediator",
      "context"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The speaker's explanation was very technical and long. The interpreter had to _____ it in simple words so the audience could follow.",
    "options": [
      "paraphrase",
      "practice",
      "register",
      "delay"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The client looked confused after hearing my question about the deadline. I tried to _____ it using shorter and easier words.",
    "options": [
      "practice",
      "register",
      "rephrase",
      "hire"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The meeting lasted three hours, but the director arrived late. Please _____ the main decisions for her in a short email.",
    "options": [
      "practice",
      "summarize",
      "register",
      "hire"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Interpreters need an excellent _____ because they must remember long sentences, names, and numbers. Many of them do special exercises every day.",
    "options": [
      "accent",
      "dialect",
      "mediator",
      "memory"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "All applicants for the interpreter position must take a listening _____ test. It checks how well they understand recorded business conversations.",
    "options": [
      "confidentiality",
      "mediator",
      "comprehension",
      "dialect"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "During the tense negotiation, the interpreter stayed completely _____. She did not take sides or add her own opinions to the discussion.",
    "options": [
      "neutral",
      "multilingual",
      "simultaneous",
      "cultural"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "All visitors to the research lab must sign a _____ agreement. They cannot share any information about the new products.",
    "options": [
      "fluency",
      "comprehension",
      "accuracy",
      "confidentiality"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company has a strict code of _____ for all employees. Accepting expensive gifts from suppliers is not allowed.",
    "options": [
      "dialect",
      "ethics",
      "accent",
      "memory"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The union and the factory owners could not agree on wages. The government sent a _____ to help both sides reach a fair deal.",
    "options": [
      "mediator",
      "dialect",
      "idiom",
      "accent"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Before working in Japan, our staff attend a seminar on _____ differences. They learn about local customs like bowing and exchanging business cards.",
    "options": [
      "neutral",
      "consecutive",
      "cultural",
      "simultaneous"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "After each training session, participants fill out a short form. Their _____ helps the trainers improve the course for the next group.",
    "options": [
      "dialect",
      "feedback",
      "idiom",
      "accent"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "New interpreters receive two weeks of _____ before they work at real events. They practice with experienced coaches every day.",
    "options": [
      "accent",
      "mediator",
      "idiom",
      "training"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Becoming a good interpreter takes a lot of _____. Many students repeat news reports aloud for an hour every morning.",
    "options": [
      "idiom",
      "dialect",
      "practice",
      "accent"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "This contract is too important to trust to a volunteer. We should hire a _____ interpreter with many years of experience.",
    "options": [
      "professional",
      "cultural",
      "consecutive",
      "neutral"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "interpretation": {
    "pos": "n.",
    "en_def": "the act of changing spoken words into another language",
    "cn_def": "口譯"
  },
  "translate": {
    "pos": "v.",
    "en_def": "to change words into another language",
    "cn_def": "翻譯"
  },
  "translation": {
    "pos": "n.",
    "en_def": "words that have been changed into another language",
    "cn_def": "翻譯；譯文"
  },
  "bilingual": {
    "pos": "adj.",
    "en_def": "able to speak two languages well",
    "cn_def": "雙語的"
  },
  "multilingual": {
    "pos": "adj.",
    "en_def": "using or speaking many languages",
    "cn_def": "多語的"
  },
  "fluency": {
    "pos": "n.",
    "en_def": "the ability to speak a language easily and well",
    "cn_def": "流利；流暢"
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct with no mistakes",
    "cn_def": "準確性"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；清楚"
  },
  "context": {
    "pos": "n.",
    "en_def": "the words or situation around something that help explain its meaning",
    "cn_def": "上下文；背景"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the feeling that a voice or piece of writing shows",
    "cn_def": "語氣；口吻"
  },
  "dialect": {
    "pos": "n.",
    "en_def": "a form of a language spoken in one area",
    "cn_def": "方言"
  },
  "accent": {
    "pos": "n.",
    "en_def": "the way a person pronounces words, often showing where they are from",
    "cn_def": "口音"
  },
  "simultaneous": {
    "pos": "adj.",
    "en_def": "happening at the same time",
    "cn_def": "同步的；同時的"
  },
  "consecutive": {
    "pos": "adj.",
    "en_def": "done after the speaker stops; following one after another",
    "cn_def": "逐步的；連續的"
  },
  "whispering": {
    "pos": "n.",
    "en_def": "interpreting very quietly into one listener's ear",
    "cn_def": "耳語口譯"
  },
  "note-taking": {
    "pos": "n.",
    "en_def": "writing down short notes while listening",
    "cn_def": "做筆記"
  },
  "terminology": {
    "pos": "n.",
    "en_def": "the special words used in a subject or job",
    "cn_def": "術語；專門用語"
  },
  "idiom": {
    "pos": "n.",
    "en_def": "a group of words whose meaning is different from the single words",
    "cn_def": "慣用語；成語"
  },
  "paraphrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "改述；換句話說"
  },
  "rephrase": {
    "pos": "v.",
    "en_def": "to say or write something again in a different way",
    "cn_def": "重新措辭；換種說法"
  },
  "summarize": {
    "pos": "v.",
    "en_def": "to give the main points in a short way",
    "cn_def": "總結；概述"
  },
  "memory": {
    "pos": "n.",
    "en_def": "the ability to remember things",
    "cn_def": "記憶力"
  },
  "listening": {
    "pos": "n.",
    "en_def": "the act of paying attention to sounds or speech",
    "cn_def": "聆聽；聽力"
  },
  "comprehension": {
    "pos": "n.",
    "en_def": "the ability to understand something",
    "cn_def": "理解力"
  },
  "neutral": {
    "pos": "adj.",
    "en_def": "not supporting either side",
    "cn_def": "中立的"
  },
  "confidentiality": {
    "pos": "n.",
    "en_def": "keeping information secret and private",
    "cn_def": "保密"
  },
  "ethics": {
    "pos": "n.",
    "en_def": "rules about what is right and wrong in a job",
    "cn_def": "倫理；道德規範"
  },
  "mediator": {
    "pos": "n.",
    "en_def": "a person who helps two sides agree",
    "cn_def": "調解人；中間人"
  },
  "cultural": {
    "pos": "adj.",
    "en_def": "related to the customs and beliefs of a group of people",
    "cn_def": "文化的"
  },
  "register": {
    "pos": "n.",
    "en_def": "the level of formal or informal language used in a situation",
    "cn_def": "語域（語言的正式程度）"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how well someone did something",
    "cn_def": "回饋；意見"
  },
  "training": {
    "pos": "n.",
    "en_def": "the process of learning the skills for a job",
    "cn_def": "培訓；訓練"
  },
  "practice": {
    "pos": "n.",
    "en_def": "doing something again and again to get better",
    "cn_def": "練習"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "having the skills and training of a trained worker",
    "cn_def": "專業的"
  }
};

const EXTRA_GLOSSES = {};
