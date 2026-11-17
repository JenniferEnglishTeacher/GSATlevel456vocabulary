// Topic 340 Quiz Data: Salary 薪資
// Source word list: https://www.examword.com/group-topic/salary — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T340 - Salary 薪資",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wage",
    "pos": "n.",
    "cn_def": "工資；薪水",
    "en_def": "money paid to a worker for each hour, day or week",
    "sentence": "A: Why are so many young people applying for jobs at the new coffee chain downtown, even though the work is hard and the shifts are long? B: The company pays a much higher hourly {{BLANK}} than the other shops nearby, and it also offers free meals and flexible schedules for students.",
    "cn": "A：為什麼這麼多年輕人去應徵市中心那家新連鎖咖啡店的工作，即使工作辛苦、班又很長？ B：那家公司付的時薪【工資】比附近其他店高很多，而且還為學生提供免費餐點和彈性班表。"
  },
  {
    "word": "income",
    "pos": "n.",
    "cn_def": "收入；所得",
    "en_def": "money that a person or family gets regularly, from work or other sources",
    "sentence": "A: Have you and your husband decided whether to buy that apartment near the train station, or are you still worried about the monthly mortgage? B: We are waiting a little longer, because my new job starts in March and our household {{BLANK}} will be much higher after that, so the bank will approve a bigger loan.",
    "cn": "A：你和你先生決定要買火車站附近那間公寓了嗎，還是你們仍在擔心每月房貸？ B：我們還要再等一下，因為我的新工作三月開始，之後我們的家庭【收入】會高很多，銀行就會核准更高的貸款。"
  },
  {
    "word": "earnings",
    "pos": "n.",
    "cn_def": "收入；收益；盈餘",
    "en_def": "money that a person or company gets from work or business",
    "sentence": "A: Why did the share price of the electronics company jump so suddenly this morning, when everyone expected bad news after the factory fire? B: The company reported quarterly {{BLANK}} that were much better than analysts had predicted, mainly because its new smartphone sold extremely well in Asia and Europe.",
    "cn": "A：為什麼那家電子公司的股價今天早上突然大漲，大家原本預期工廠火災後會有壞消息？ B：該公司公布的季度【盈餘】比分析師預測的好很多，主要是因為它的新款智慧型手機在亞洲和歐洲賣得非常好。"
  },
  {
    "word": "pay",
    "pos": "n.",
    "cn_def": "薪資；報酬",
    "en_def": "money that you get for doing a job",
    "sentence": "A: Are you really thinking about leaving the bank after working there for almost ten years, even though you like your team so much? B: Yes, because a software company has offered me a position with much better {{BLANK}}, shorter working hours, and the chance to work from home two days a week.",
    "cn": "A：你真的在考慮離開那家銀行嗎？你在那裡工作將近十年了，而且你很喜歡你的團隊。 B：是的，因為一家軟體公司給了我一個職位，【薪資】好很多、工時較短，而且每週有兩天可以在家工作。"
  },
  {
    "word": "payment",
    "pos": "n.",
    "cn_def": "付款；支付金額",
    "en_def": "an amount of money that is paid, or the act of paying it",
    "sentence": "A: Why did the electricity company send me a warning letter yesterday, when I am sure I paid my bill last month as usual? B: The system shows that your {{BLANK}} arrived three days after the deadline, so a small late fee was added, but you can call customer service and ask them to remove it.",
    "cn": "A：為什麼電力公司昨天寄給我一封警告信？我確定上個月和平常一樣繳了帳單。 B：系統顯示你的【付款】比截止日期晚了三天才入帳，所以被加收了一小筆滯納金，不過你可以打電話給客服請他們取消。"
  },
  {
    "word": "bonus",
    "pos": "n.",
    "cn_def": "獎金；紅利",
    "en_def": "extra money added to normal pay, often as a reward",
    "sentence": "A: Everyone in the sales department looks so happy today, and I even saw the manager ordering cake for the whole team; what happened? B: The company had its best year ever, so every employee is getting a year-end {{BLANK}} equal to two months' salary, which will be paid before the Lunar New Year holiday.",
    "cn": "A：今天業務部的每個人看起來都好開心，我甚至看到經理幫整個團隊訂蛋糕，發生什麼事了？ B：公司創下有史以來最好的一年，所以每位員工都會拿到相當於兩個月薪水的年終【獎金】，會在農曆新年假期前發放。"
  },
  {
    "word": "commission",
    "pos": "n.",
    "cn_def": "佣金",
    "en_def": "money paid to a salesperson for each item sold, usually a percentage",
    "sentence": "A: Why does Kevin stay at the car dealership so late every evening, even after the showroom has closed and the other staff have gone home? B: His basic salary is quite low, but he gets a five percent {{BLANK}} on every car he sells, so he works hard to call customers and arrange test drives.",
    "cn": "A：為什麼凱文每天晚上都在汽車經銷商待到那麼晚，甚至在展示間關門、其他員工都回家之後？ B：他的底薪相當低，但他每賣出一輛車就能拿到百分之五的【佣金】，所以他很努力打電話給客戶並安排試駕。"
  },
  {
    "word": "allowance",
    "pos": "n.",
    "cn_def": "津貼；補助",
    "en_def": "an amount of money given regularly for a special purpose",
    "sentence": "A: Do I need to pay for my own hotel and meals when I visit our new client in Singapore next week, or will the company cover them? B: The company books your hotel directly, and you will also get a daily travel {{BLANK}} of sixty dollars for food and taxis, as long as you keep your receipts.",
    "cn": "A：我下週去新加坡拜訪新客戶時，需要自己付飯店和餐費嗎，還是公司會負擔？ B：公司會直接幫你訂飯店，你每天也會拿到六十美元的出差【津貼】用於餐費和計程車，只要你保留收據就行。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "福利；津貼",
    "en_def": "something extra, such as insurance or holidays, that a job gives you besides pay",
    "sentence": "A: The salary at the government office is lower than at the private company, so why did you finally choose to accept the government job? B: The best {{BLANK}} for me is the excellent health insurance for my whole family, and I also get more vacation days and a good pension when I retire.",
    "cn": "A：政府機關的薪水比私人公司低，那你最後為什麼選擇接受政府的工作？ B：對我來說最好的【福利】是全家都有很好的健康保險，而且我也有更多的假期，退休時還有不錯的退休金。"
  },
  {
    "word": "raise",
    "pos": "n.",
    "cn_def": "加薪",
    "en_def": "an increase in the amount of money you are paid for your job",
    "sentence": "A: You look nervous this morning; are you preparing for a difficult presentation, or is something else happening at work today? B: I have a meeting with my manager after lunch, and I plan to ask for a {{BLANK}} because I have taken on many new duties since our team leader left in spring.",
    "cn": "A：你今天早上看起來很緊張，你是在準備一場困難的簡報，還是今天工作上有其他事情？ B：我午餐後要和經理開會，我打算要求【加薪】，因為自從我們組長春天離職後，我接下了很多新的職責。"
  },
  {
    "word": "increase",
    "pos": "n.",
    "cn_def": "增加；提高",
    "en_def": "a rise in amount, number or level",
    "sentence": "A: Why are the factory workers holding a meeting in the parking lot instead of eating lunch in the cafeteria as usual? B: The managers have just announced a three percent {{BLANK}} in salaries for next year, but many workers think it is too small because prices for food and rent have gone up much more.",
    "cn": "A：為什麼工廠員工在停車場開會，而不是像平常一樣在員工餐廳吃午餐？ B：管理層剛宣布明年薪資【增加】百分之三，但許多員工認為太少了，因為食物和房租的價格漲得更多。"
  },
  {
    "word": "deduction",
    "pos": "n.",
    "cn_def": "扣除額；扣款",
    "en_def": "an amount of money taken away from a total, such as from pay",
    "sentence": "A: I don't understand why my salary this month is lower than usual, because I didn't take any days off or arrive late at all. B: There is a new {{BLANK}} on your pay slip for the staff pension plan, which started in October, so a small part of your salary now goes into your retirement account.",
    "cn": "A：我不懂為什麼我這個月的薪水比平常少，因為我完全沒有請假也沒有遲到。 B：你的薪資單上有一筆新的【扣款】是員工退休金計畫，從十月開始，所以你的薪水有一小部分現在會存進你的退休帳戶。"
  },
  {
    "word": "tax",
    "pos": "n.",
    "cn_def": "稅；稅金",
    "en_def": "money that people and companies must pay to the government",
    "sentence": "A: Why is the accounting office so busy this week, with people working late every night and ordering pizza for dinner? B: The deadline for filing income {{BLANK}} returns is next Friday, so our accountants are helping hundreds of clients check their documents and calculate how much they owe the government.",
    "cn": "A：為什麼會計事務所這週這麼忙，大家每天晚上都加班還訂披薩當晚餐？ B：所得【稅】申報的截止日期是下週五，所以我們的會計師正在幫數百位客戶核對文件，並計算他們欠政府多少錢。"
  },
  {
    "word": "gross pay",
    "pos": "n.phr.",
    "cn_def": "稅前薪資；總薪資",
    "en_def": "the total amount of money earned before taxes and other costs are taken away",
    "sentence": "A: The job advertisement says the position pays fifty thousand dollars a month, but is that the amount I will actually get in my bank account? B: No, that figure is your {{BLANK}}, so after income tax, health insurance, and pension costs are taken out, you will take home about forty-two thousand dollars.",
    "cn": "A：徵才廣告上說這個職位月薪五萬元，那是我實際會拿到存進銀行帳戶的金額嗎？ B：不是，那個數字是你的【稅前薪資】，所以扣掉所得稅、健保和退休金之後，你實際拿到大約四萬兩千元。"
  },
  {
    "word": "net pay",
    "pos": "n.phr.",
    "cn_def": "實領薪資；稅後薪資",
    "en_def": "the amount of money you actually receive after taxes and other costs are taken away",
    "sentence": "A: When you plan your monthly budget for rent, food, and savings, which salary figure do you use, the big one or the small one? B: I always use my {{BLANK}}, because that is the money that really arrives in my account after taxes and insurance, so I never spend more than I actually have.",
    "cn": "A：當你規劃每月房租、伙食和存款的預算時，你用哪個薪資數字，大的還是小的？ B：我都用我的【實領薪資】，因為那是扣完稅和保險後真正進入我帳戶的錢，這樣我就不會花超過我實際擁有的錢。"
  },
  {
    "word": "paycheck",
    "pos": "n.",
    "cn_def": "薪水支票；薪資",
    "en_def": "a check or payment of the money you earn from your job",
    "sentence": "A: You said you would join us for dinner at the new Italian restaurant on Friday, so why have you changed your mind? B: My first {{BLANK}} from the new job won't arrive until the end of the month, so I need to save money and cook at home for the next two weeks.",
    "cn": "A：你說過週五會和我們一起去那家新開的義大利餐廳吃晚餐，為什麼改變主意了？ B：我新工作的第一筆【薪水】要到月底才會入帳，所以接下來兩週我需要省錢在家煮飯。"
  },
  {
    "word": "payroll",
    "pos": "n.",
    "cn_def": "薪資名冊；薪資發放",
    "en_def": "the list of employees and the total money a company pays them",
    "sentence": "A: Why did all the staff receive their salaries two days late this month, and will it happen again next month? B: The company changed its {{BLANK}} system to new software, and there were some technical problems, but the accounting team has fixed them, so everyone will be paid on time from now on.",
    "cn": "A：為什麼這個月所有員工的薪水都晚了兩天，下個月還會再發生嗎？ B：公司把【薪資】發放系統換成新軟體，出了一些技術問題，但會計團隊已經修好了，所以從現在開始大家都會準時領到薪水。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "報酬；薪酬",
    "en_def": "money and other benefits that a worker receives for a job",
    "sentence": "A: How did the startup manage to hire such an experienced engineer from one of the biggest tech companies in the world? B: They offered a {{BLANK}} package that included a high salary, company shares, a relocation budget, and the freedom to work from anywhere, which was too attractive for him to refuse.",
    "cn": "A：那家新創公司是怎麼從全球最大的科技公司之一挖到這麼有經驗的工程師？ B：他們提供了一套【薪酬】方案，包含高薪、公司股份、搬遷費用，以及可以在任何地方工作的自由，這對他來說吸引力大到無法拒絕。"
  },
  {
    "word": "remuneration",
    "pos": "n.",
    "cn_def": "報酬；酬勞",
    "en_def": "money paid to someone for work or services (formal)",
    "sentence": "A: Did you read the report about the directors of the bank, and why are the shareholders so angry about it? B: The report showed that the total {{BLANK}} of the top five directors rose by forty percent last year, even though profits fell and hundreds of branch employees lost their jobs.",
    "cn": "A：你看了那份關於銀行董事的報告嗎？股東們為什麼對此這麼生氣？ B：報告顯示前五名董事的總【報酬】去年增加了百分之四十，即使利潤下滑，而且數百名分行員工失去了工作。"
  },
  {
    "word": "stipend",
    "pos": "n.",
    "cn_def": "津貼；助學金",
    "en_def": "a fixed amount of money paid regularly to an intern, student or trainee",
    "sentence": "A: Is the summer internship at the design company paid, or will you be working there for free just to gain experience? B: It is not a real salary, but each intern gets a small monthly {{BLANK}} to cover transportation and lunch, which is enough because I am still living with my parents.",
    "cn": "A：那家設計公司的暑期實習有薪水嗎，還是你只是為了累積經驗而免費去工作？ B：那不是真正的薪水，但每位實習生每月都會拿到一小筆【津貼】支付交通和午餐，這樣就夠了，因為我還跟爸媽住。"
  },
  {
    "word": "overtime",
    "pos": "n.",
    "cn_def": "加班；加班費",
    "en_def": "extra time worked after normal working hours, or the money paid for it",
    "sentence": "A: Why are the warehouse lights still on at ten o'clock at night, when everyone usually goes home at six? B: A big customer placed an urgent order, so the staff are working {{BLANK}} this week to pack and ship everything, and they will be paid one and a half times their normal hourly rate.",
    "cn": "A：為什麼倉庫的燈晚上十點還亮著？大家通常六點就回家了。 B：一位大客戶下了緊急訂單，所以員工這週都在【加班】打包並出貨，他們會拿到平常時薪的一點五倍。"
  },
  {
    "word": "minimum wage",
    "pos": "n.phr.",
    "cn_def": "最低工資",
    "en_def": "the lowest amount of pay per hour that employers are allowed to pay by law",
    "sentence": "A: Why are so many small restaurant owners talking about raising their menu prices early next year? B: The government has announced that the {{BLANK}} will go up by five percent in January, so they must pay their part-time staff more, and they need extra money to cover those higher costs.",
    "cn": "A：為什麼很多小餐廳老闆都在談論明年初要調漲菜單價格？ B：政府宣布【最低工資】一月將調漲百分之五，所以他們必須付兼職員工更多錢，也需要額外的收入來支付這些增加的成本。"
  },
  {
    "word": "livelihood",
    "pos": "n.",
    "cn_def": "生計；謀生之道",
    "en_def": "the way a person earns the money they need to live",
    "sentence": "A: Why are the fishermen in this small coastal town so worried about the new factory that is being built near the harbor? B: Fishing has been their only {{BLANK}} for generations, and they are afraid that pollution from the factory will kill the fish and leave their families with no way to survive.",
    "cn": "A：為什麼這個小海港鎮的漁民這麼擔心港口附近正在興建的新工廠？ B：捕魚世世代代都是他們唯一的【生計】，他們擔心工廠的污染會害死魚群，讓他們的家庭無以為生。"
  },
  {
    "word": "earn",
    "pos": "v.",
    "cn_def": "賺（錢）；賺取",
    "en_def": "to get money by working",
    "sentence": "A: Your daughter is still a university student, so how can she afford to travel to Japan with her friends this winter? B: She works at a bookstore every weekend and gives private English lessons in the evenings, so she can {{BLANK}} about fifteen thousand dollars a month and save most of it for the trip.",
    "cn": "A：你女兒還是大學生，她怎麼負擔得起今年冬天和朋友去日本旅行？ B：她每個週末在書店打工，晚上還教英文家教，所以每個月能【賺】大約一萬五千元，大部分都存起來當旅費。"
  },
  {
    "word": "receive",
    "pos": "v.",
    "cn_def": "收到；領取",
    "en_def": "to get something that is given or sent to you",
    "sentence": "A: When will the new employees get their company laptops and ID cards, because they need them to enter the building and log in to the system? B: They will {{BLANK}} everything on their first morning during the orientation session, and the IT staff will help them set up their email accounts before lunch.",
    "cn": "A：新員工什麼時候會拿到公司筆電和識別證？他們需要那些東西才能進大樓和登入系統。 B：他們會在第一天早上的新人訓練時【收到】所有東西，資訊部人員會在午餐前幫他們設定電子郵件帳號。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "協商；談判",
    "en_def": "to discuss something in order to reach an agreement",
    "sentence": "A: The company offered you the marketing manager position yesterday, so why haven't you signed the contract yet? B: I want to {{BLANK}} a higher starting salary first, because I have ten years of experience and the amount they offered is lower than what similar jobs in the city usually pay.",
    "cn": "A：公司昨天給了你行銷經理的職位，為什麼你還沒簽合約？ B：我想先【協商】更高的起薪，因為我有十年的經驗，他們開出的金額比城裡類似工作通常的薪水還低。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller or less in amount",
    "sentence": "A: Why did the airline announce that all managers will take a pay cut starting next month, when they just opened three new routes? B: Fuel prices have risen sharply, so the company decided to {{BLANK}} management salaries by ten percent instead of laying off pilots and cabin crew this year.",
    "cn": "A：為什麼航空公司宣布所有經理從下個月開始減薪？他們才剛開了三條新航線。 B：燃油價格急劇上漲，所以公司決定將管理階層的薪水【減少】百分之十，而不是在今年裁減機師和空服員。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "有競爭力的",
    "en_def": "as good as or better than others, especially in price or pay",
    "sentence": "A: How does your small company manage to hire such talented programmers when the big tech firms are also looking for people? B: We offer a {{BLANK}} salary that matches the big companies, and we also give our staff more freedom, interesting projects, and a friendly office where everyone knows each other.",
    "cn": "A：大型科技公司也在找人，你們這間小公司是如何聘到這麼有才華的程式設計師？ B：我們提供和大公司相當、具【競爭力】的薪水，也給員工更多自由、有趣的專案，以及一個大家彼此熟識的友善辦公室。"
  },
  {
    "word": "generous",
    "pos": "adj.",
    "cn_def": "慷慨的；優渥的",
    "en_def": "larger or more than is usual or expected",
    "sentence": "A: Why do so few employees ever leave that small family-owned hotel near the lake, even when bigger hotels offer them jobs? B: The owners are very {{BLANK}} with holiday bonuses and paid vacation days, and they treat every worker like a member of the family, so people feel happy staying there.",
    "cn": "A：為什麼那間湖邊的小型家族飯店很少有員工離職，即使大飯店提供工作給他們？ B：老闆在節日獎金和帶薪假上非常【慷慨】，而且把每位員工都當成家人看待，所以大家都很樂意留在那裡。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "not likely to change; steady",
    "sentence": "A: You were earning more money as a freelance designer, so why did you decide to take a full-time office job at the bank? B: My freelance income went up and down every month, and now that we have a baby, I want a {{BLANK}} salary so that we can plan our family budget more easily.",
    "cn": "A：你當自由接案設計師時賺得更多，為什麼決定到銀行做全職辦公室工作？ B：我接案的收入每個月起起伏伏，現在我們有了寶寶，我想要一份【穩定的】薪水，這樣我們能更輕鬆地規劃家庭預算。"
  },
  {
    "word": "annual",
    "pos": "adj.",
    "cn_def": "年度的；每年的",
    "en_def": "happening once every year; for one whole year",
    "sentence": "A: When will we find out whether our salaries are going up, because I heard that some departments have already received good news? B: Every employee has an {{BLANK}} performance review with their manager in December, and any salary changes are decided at that meeting and start from the first of January.",
    "cn": "A：我們什麼時候會知道薪水有沒有調漲？我聽說有些部門已經收到好消息了。 B：每位員工在十二月都會和主管進行【年度】績效考核，任何薪資調整都在那次會議決定，並從一月一日開始生效。"
  },
  {
    "word": "monthly",
    "pos": "adj.",
    "cn_def": "每月的",
    "en_def": "happening or paid once every month",
    "sentence": "A: Have you finished checking the department's spending for the past few weeks, because the finance director wants the report by Friday? B: Almost, but I am still waiting for the {{BLANK}} phone and internet bills, which usually arrive in the first week of each month, so I will send everything on Thursday.",
    "cn": "A：你檢查完部門過去幾週的支出了嗎？財務總監要在週五前拿到報告。 B：差不多了，但我還在等【每月的】電話和網路帳單，通常在每個月的第一週寄到，所以我週四會把所有資料寄出。"
  },
  {
    "word": "well-paid",
    "pos": "adj.",
    "cn_def": "薪水高的；高薪的",
    "en_def": "earning a lot of money for the work done",
    "sentence": "A: Why is your son studying so hard to become a pilot, when the training takes so many years and costs so much money? B: He has loved airplanes since he was a child, and pilots are usually very {{BLANK}}, so he believes the long training will be worth it in the end.",
    "cn": "A：為什麼你兒子這麼努力要成為機師？訓練要花好多年，又要花很多錢。 B：他從小就喜歡飛機，而且機師通常都是【高薪的】，所以他相信長時間的訓練最後會是值得的。"
  },
  {
    "word": "underpaid",
    "pos": "adj.",
    "cn_def": "薪水過低的",
    "en_def": "not paid enough for the work done",
    "sentence": "A: Why are so many nurses at the city hospital planning to quit and move to private clinics or jobs overseas? B: Most of them feel {{BLANK}} because they work long night shifts and care for too many patients, but their salaries have not gone up in five years.",
    "cn": "A：為什麼市立醫院有這麼多護理師打算離職，轉到私人診所或海外工作？ B：她們大多覺得自己【薪水過低】，因為她們要值很長的夜班、照顧太多病人，但薪水五年來都沒有調漲。"
  }
];

const MCQS = [
  {
    "q": "The factory pays its workers an hourly _____ of fifteen dollars. Staff who work night shifts receive an extra two dollars per hour.",
    "options": [
      "wage",
      "deduction",
      "payroll",
      "livelihood"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many families in the city now need a second source of _____. Rising rents have made it very hard to live on one salary.",
    "options": [
      "tax",
      "payroll",
      "income",
      "deduction"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please make the _____ for your monthly gym membership by the fifth of each month. Late fees will be added to accounts after that date.",
    "options": [
      "bonus",
      "payment",
      "livelihood",
      "overtime"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Every employee received a year-end _____ because the company had record profits. Most staff members used the extra money for holiday travel.",
    "options": [
      "deduction",
      "tax",
      "livelihood",
      "bonus"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Our sales staff earn a ten percent _____ on every car they sell. Their income therefore depends greatly on their monthly results.",
    "options": [
      "deduction",
      "livelihood",
      "commission",
      "payroll"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The company provides a daily travel _____ of fifty dollars for meals. Staff must keep their receipts when they go on business trips.",
    "options": [
      "allowance",
      "deduction",
      "payroll",
      "commission"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Free health insurance is the most popular _____ offered by our firm. Employees also enjoy two extra vacation days each year.",
    "options": [
      "deduction",
      "tax",
      "payroll",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "After three years of excellent work, Maria asked her manager for a pay _____. He agreed to discuss it during her performance review.",
    "options": [
      "deduction",
      "raise",
      "livelihood",
      "commission"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The _____ for the staff pension plan appears on every pay slip. It is taken out automatically before the money reaches your account.",
    "options": [
      "deduction",
      "bonus",
      "raise",
      "livelihood"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Workers in this country pay income _____ on everything they earn above a certain amount. The rate rises as people earn more money.",
    "options": [
      "bonus",
      "raise",
      "tax",
      "overtime"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Your _____ is the full amount you earn before any taxes are taken out. Most people actually take home much less than this figure.",
    "options": [
      "net pay",
      "gross pay",
      "minimum wage",
      "livelihood"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "After taxes and insurance were taken out, Tom's _____ was only two thousand dollars. He was surprised by how much smaller it was.",
    "options": [
      "gross pay",
      "minimum wage",
      "overtime",
      "net pay"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "New employees will receive their first _____ at the end of the month. The money will be sent directly to their bank accounts.",
    "options": [
      "deduction",
      "livelihood",
      "paycheck",
      "tax"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The accounting department handles the _____ for all four hundred employees. They make sure everyone is paid correctly and on time.",
    "options": [
      "payroll",
      "livelihood",
      "raise",
      "deduction"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new director's _____ package includes a high salary, a company car, and stock options. It is one of the best offers in the industry.",
    "options": [
      "deduction",
      "livelihood",
      "tax",
      "compensation"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Each intern receives a small monthly _____ to cover transportation and lunch. The program is mainly for learning rather than making money.",
    "options": [
      "deduction",
      "stipend",
      "tax",
      "payroll"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Factory staff worked _____ every evening last week to finish a large order. They were paid one and a half times their normal rate.",
    "options": [
      "overtime",
      "payroll",
      "livelihood",
      "commission"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The government plans to raise the _____ to two hundred dollars a day next year. Low-paid workers will gain the most from this change.",
    "options": [
      "net pay",
      "gross pay",
      "minimum wage",
      "livelihood"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Fishing has been the main _____ of people in this small coastal town for centuries. Many families still depend on the sea for their income.",
    "options": [
      "payroll",
      "livelihood",
      "deduction",
      "stipend"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Sales representatives can _____ up to five thousand dollars a month if they meet their targets. The best performers also win a trip abroad.",
    "options": [
      "reduce",
      "negotiate",
      "hire",
      "earn"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "All new employees will _____ a welcome package on their first day. It contains a company handbook, an ID card, and a laptop.",
    "options": [
      "earn",
      "negotiate",
      "receive",
      "reduce"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Before signing the contract, Lisa tried to _____ a higher starting salary with the HR manager. She explained her experience and skills clearly.",
    "options": [
      "negotiate",
      "receive",
      "earn",
      "reduce"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The company had to _____ staff salaries by ten percent during the recession. Managers promised to restore them once business improved.",
    "options": [
      "earn",
      "receive",
      "negotiate",
      "reduce"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "We offer a _____ salary that is higher than most companies in the region. This helps us attract talented engineers from around the country.",
    "options": [
      "underpaid",
      "competitive",
      "annual",
      "well-paid"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The firm is known for its _____ holiday bonuses, which are often worth two months' salary. Employees look forward to them every December.",
    "options": [
      "generous",
      "underpaid",
      "monthly",
      "stable"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Nina left her freelance work for an office job with a _____ income. She wanted to know exactly how much she would get every month.",
    "options": [
      "generous",
      "underpaid",
      "stable",
      "annual"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The company holds its _____ salary review every December. Each employee's pay is adjusted once a year based on performance.",
    "options": [
      "monthly",
      "annual",
      "underpaid",
      "generous"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Rent is the biggest part of my _____ budget. I pay it on the first day of every month, along with my phone bill.",
    "options": [
      "annual",
      "underpaid",
      "well-paid",
      "monthly"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Doctors and lawyers are usually _____ because their jobs require many years of training. They often earn much more than the average worker.",
    "options": [
      "underpaid",
      "monthly",
      "well-paid",
      "annual"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Many nurses feel _____ because their salaries do not match their long working hours. They are asking the hospital for fair pay.",
    "options": [
      "underpaid",
      "well-paid",
      "annual",
      "competitive"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "wage": {
    "pos": "n.",
    "en_def": "money paid to a worker for each hour, day or week",
    "cn_def": "工資；薪水"
  },
  "income": {
    "pos": "n.",
    "en_def": "money that a person or family gets regularly, from work or other sources",
    "cn_def": "收入；所得"
  },
  "earnings": {
    "pos": "n.",
    "en_def": "money that a person or company gets from work or business",
    "cn_def": "收入；收益；盈餘"
  },
  "pay": {
    "pos": "n.",
    "en_def": "money that you get for doing a job",
    "cn_def": "薪資；報酬"
  },
  "payment": {
    "pos": "n.",
    "en_def": "an amount of money that is paid, or the act of paying it",
    "cn_def": "付款；支付金額"
  },
  "bonus": {
    "pos": "n.",
    "en_def": "extra money added to normal pay, often as a reward",
    "cn_def": "獎金；紅利"
  },
  "commission": {
    "pos": "n.",
    "en_def": "money paid to a salesperson for each item sold, usually a percentage",
    "cn_def": "佣金"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "an amount of money given regularly for a special purpose",
    "cn_def": "津貼；補助"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "something extra, such as insurance or holidays, that a job gives you besides pay",
    "cn_def": "福利；津貼"
  },
  "raise": {
    "pos": "n.",
    "en_def": "an increase in the amount of money you are paid for your job",
    "cn_def": "加薪"
  },
  "increase": {
    "pos": "n.",
    "en_def": "a rise in amount, number or level",
    "cn_def": "增加；提高"
  },
  "deduction": {
    "pos": "n.",
    "en_def": "an amount of money taken away from a total, such as from pay",
    "cn_def": "扣除額；扣款"
  },
  "tax": {
    "pos": "n.",
    "en_def": "money that people and companies must pay to the government",
    "cn_def": "稅；稅金"
  },
  "gross pay": {
    "pos": "n.phr.",
    "en_def": "the total amount of money earned before taxes and other costs are taken away",
    "cn_def": "稅前薪資；總薪資"
  },
  "net pay": {
    "pos": "n.phr.",
    "en_def": "the amount of money you actually receive after taxes and other costs are taken away",
    "cn_def": "實領薪資；稅後薪資"
  },
  "paycheck": {
    "pos": "n.",
    "en_def": "a check or payment of the money you earn from your job",
    "cn_def": "薪水支票；薪資"
  },
  "payroll": {
    "pos": "n.",
    "en_def": "the list of employees and the total money a company pays them",
    "cn_def": "薪資名冊；薪資發放"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money and other benefits that a worker receives for a job",
    "cn_def": "報酬；薪酬"
  },
  "remuneration": {
    "pos": "n.",
    "en_def": "money paid to someone for work or services (formal)",
    "cn_def": "報酬；酬勞"
  },
  "stipend": {
    "pos": "n.",
    "en_def": "a fixed amount of money paid regularly to an intern, student or trainee",
    "cn_def": "津貼；助學金"
  },
  "overtime": {
    "pos": "n.",
    "en_def": "extra time worked after normal working hours, or the money paid for it",
    "cn_def": "加班；加班費"
  },
  "minimum wage": {
    "pos": "n.phr.",
    "en_def": "the lowest amount of pay per hour that employers are allowed to pay by law",
    "cn_def": "最低工資"
  },
  "livelihood": {
    "pos": "n.",
    "en_def": "the way a person earns the money they need to live",
    "cn_def": "生計；謀生之道"
  },
  "earn": {
    "pos": "v.",
    "en_def": "to get money by working",
    "cn_def": "賺（錢）；賺取"
  },
  "receive": {
    "pos": "v.",
    "en_def": "to get something that is given or sent to you",
    "cn_def": "收到；領取"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something in order to reach an agreement",
    "cn_def": "協商；談判"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller or less in amount",
    "cn_def": "減少；降低"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "as good as or better than others, especially in price or pay",
    "cn_def": "有競爭力的"
  },
  "generous": {
    "pos": "adj.",
    "en_def": "larger or more than is usual or expected",
    "cn_def": "慷慨的；優渥的"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "not likely to change; steady",
    "cn_def": "穩定的"
  },
  "annual": {
    "pos": "adj.",
    "en_def": "happening once every year; for one whole year",
    "cn_def": "年度的；每年的"
  },
  "monthly": {
    "pos": "adj.",
    "en_def": "happening or paid once every month",
    "cn_def": "每月的"
  },
  "well-paid": {
    "pos": "adj.",
    "en_def": "earning a lot of money for the work done",
    "cn_def": "薪水高的；高薪的"
  },
  "underpaid": {
    "pos": "adj.",
    "en_def": "not paid enough for the work done",
    "cn_def": "薪水過低的"
  }
};

const EXTRA_GLOSSES = {};
