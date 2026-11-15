// Topic 15 Quiz Data: Apology Letter 道歉信
// Source word list: https://www.examword.com/group-topic/apology-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T15 - Apology Letter 道歉信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "regret",
    "pos": "v.",
    "cn_def": "後悔；遺憾",
    "en_def": "to feel sorry about something you did or that happened",
    "sentence": "A: Have you finished the letter to the hotel guests whose wedding party was moved to a smaller room at the last minute? B: Almost, and I want the first line to say that we deeply {{BLANK}} the change, because the couple had planned the decorations for months and were very upset.",
    "cn": "A：你寫完給那些婚宴在最後一刻被移到較小廳的飯店客人的信了嗎？ B：快寫完了，我希望第一行就說明我們對這次的更動深感【遺憾】，因為那對新人花了好幾個月規劃佈置，他們非常難過。"
  },
  {
    "word": "mistake",
    "pos": "n.",
    "cn_def": "錯誤；失誤",
    "en_def": "something done wrong because of bad judgment or not paying attention",
    "sentence": "A: Why did the customer in Kaohsiung receive twenty boxes of printer paper when she only ordered two boxes for her small office? B: A new clerk in the warehouse made a {{BLANK}} when he typed the order, so we are sending a driver to collect the extra boxes this afternoon at no cost to her.",
    "cn": "A：為什麼高雄那位客戶的小辦公室只訂了兩箱影印紙，卻收到二十箱？ B：倉庫一位新來的職員在輸入訂單時犯了【錯誤】，所以我們今天下午會派司機去把多出來的箱子收回，她不需要負擔任何費用。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；差錯",
    "en_def": "a mistake, especially in numbers, writing or a system",
    "sentence": "A: I just noticed that our monthly electricity bill is three times higher than usual, even though the office was closed for a week. Should we call the power company? B: Yes, please call them today, because it is probably a billing {{BLANK}}, and they usually send a corrected bill within a few business days.",
    "cn": "A：我剛注意到我們這個月的電費帳單比平常高了三倍，可是辦公室明明關了一個星期。我們要打電話給電力公司嗎？ B：要，請今天就打給他們，因為這很可能是帳單【錯誤】，他們通常會在幾個工作天內寄來更正後的帳單。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "過錯；責任",
    "en_def": "responsibility for a mistake or problem",
    "sentence": "A: The client is angry that the brochures arrived with the wrong phone number printed on the back cover. Did our design team cause the problem? B: No, it wasn't our {{BLANK}}, because the client sent us the old number in their email, but we will still reprint the brochures quickly to keep a good relationship.",
    "cn": "A：客戶很生氣，因為送到的宣傳手冊封底印錯了電話號碼。是我們設計團隊造成的問題嗎？ B：不是，這不是我們的【過錯】，因為客戶在電子郵件裡給我們的是舊號碼，但為了維持良好的關係，我們還是會盡快重印手冊。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "the duty of dealing with something, or being the cause of a problem",
    "sentence": "A: The online store sent the wrong size of jackets to more than fifty customers last weekend. What should our apology email say to them? B: It should say clearly that we take full {{BLANK}} for the problem, and then offer each customer a free exchange and a discount code for their next order.",
    "cn": "A：上週末網路商店寄錯了五十多位顧客的夾克尺寸。我們的道歉信應該怎麼寫？ B：信中應該清楚說明我們對這個問題負起全部【責任】，然後提供每位顧客免費換貨，以及下次訂購可用的折扣碼。"
  },
  {
    "word": "inconvenience",
    "pos": "n.",
    "cn_def": "不便；麻煩",
    "en_def": "a problem that causes trouble or makes things less easy",
    "sentence": "A: The elevators in our building will be closed for repairs all day on Friday, and many visitors will have to use the stairs. Should we tell our clients ahead of time? B: Yes, let's send them a short notice today and apologize for any {{BLANK}}, especially to the older clients who have meetings on the tenth floor.",
    "cn": "A：我們大樓的電梯星期五整天都要停用維修，很多訪客將必須走樓梯。我們應該事先通知客戶嗎？ B：要，我們今天就寄一封簡短的通知給他們，並為造成的任何【不便】致歉，尤其是要在十樓開會的年長客戶。"
  },
  {
    "word": "trouble",
    "pos": "n.",
    "cn_def": "麻煩；困難",
    "en_def": "problems, difficulty or extra work",
    "sentence": "A: The supplier drove all the way from Taichung to replace the broken coffee machine in our break room this morning. Should we thank him in some way? B: Yes, I think we should write him a short note, because he went to a lot of {{BLANK}} to help us, even though his company was already busy with other orders.",
    "cn": "A：供應商今天早上大老遠從台中開車過來，替我們更換休息室裡壞掉的咖啡機。我們應該用某種方式謝謝他嗎？ B：應該，我覺得我們該寫張簡短的謝卡給他，因為他不怕【麻煩】、特地來幫我們，即使他們公司已經在忙其他訂單了。"
  },
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a time when something happens later than planned",
    "sentence": "A: The new laptops for the sales team were supposed to arrive on Monday, but they still haven't come. Did the shipping company give you any reason? B: They said the {{BLANK}} was caused by a typhoon that closed the port in Keelung for two days, and they expect the laptops to arrive by Thursday afternoon.",
    "cn": "A：業務團隊的新筆電原本應該星期一送到，但到現在還沒來。貨運公司有給你任何理由嗎？ B：他們說這次【延誤】是因為颱風讓基隆港關閉了兩天，他們預計筆電會在星期四下午前送達。"
  },
  {
    "word": "late",
    "pos": "adj.",
    "cn_def": "遲的；晚的",
    "en_def": "happening or arriving after the expected time",
    "sentence": "A: I'm writing an apology to the client because our monthly report reached her two days after the deadline. What else should I mention in the email? B: Explain that the report was {{BLANK}} because two team members were sick, and promise that next month's report will be sent at least one day early.",
    "cn": "A：我在寫道歉信給客戶，因為我們的月報比截止日期晚了兩天才送到她手上。電子郵件裡我還應該提到什麼？ B：說明報告之所以【遲交】是因為有兩位組員生病，並承諾下個月的報告至少會提早一天寄出。"
  },
  {
    "word": "misunderstanding",
    "pos": "n.",
    "cn_def": "誤會；誤解",
    "en_def": "a situation where people do not understand each other correctly",
    "sentence": "A: Mr. Wang thought our meeting was at ten in the morning, but the rest of us arrived at two in the afternoon. How did that happen? B: There was a {{BLANK}} about the time because the invitation used a twenty-four-hour clock, so I will call him today and set up a new meeting that suits his schedule.",
    "cn": "A：王先生以為我們的會議是早上十點，但我們其他人卻是下午兩點才到。怎麼會這樣？ B：因為邀請函使用二十四小時制，大家對時間產生了【誤會】，所以我今天會打電話給他，另外安排一個適合他行程的會議。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的",
    "en_def": "not paying enough attention, so mistakes happen",
    "sentence": "A: How did the hotel booking for our visitors from Japan get the dates wrong when they had already sent us all the details by email? B: I'm afraid I was {{BLANK}} when I copied the dates into the booking system, so I will contact the hotel right away and write a short apology to the visitors myself.",
    "cn": "A：日本訪客早就用電子郵件把所有細節寄給我們了，為什麼他們的飯店訂房日期還會弄錯？ B：恐怕是我把日期輸入訂房系統時太【粗心】了，所以我會馬上聯絡飯店，並親自寫一封簡短的道歉信給訪客。"
  },
  {
    "word": "unintentional",
    "pos": "adj.",
    "cn_def": "無心的；非故意的",
    "en_def": "not done on purpose",
    "sentence": "A: One of our customers says our newsletter shared her phone number with everyone on the mailing list. Is that true, and what should we tell her? B: Sadly, it is true, but the mistake was completely {{BLANK}}, because the software added a wrong column, so we should apologize and explain how we fixed the system.",
    "cn": "A：有位顧客說我們的電子報把她的電話號碼分享給了郵寄名單上的所有人。這是真的嗎？我們該怎麼跟她說？ B：很遺憾，這是真的，但這個錯誤完全是【無心的】，因為軟體多加了一個錯誤的欄位，所以我們應該向她道歉，並說明我們如何修正了系統。"
  },
  {
    "word": "sincere",
    "pos": "adj.",
    "cn_def": "真誠的；誠摯的",
    "en_def": "honest and really meant",
    "sentence": "A: Our regional manager wants to send flowers to the customer who fell on the wet floor in our store last week. Is that enough, or should we do more? B: Flowers are nice, but I think she would value a {{BLANK}} letter from the manager more, because it shows that someone really cares about what happened to her.",
    "cn": "A：我們的區經理想送花給上週在我們店裡濕滑地板上跌倒的那位顧客。這樣夠嗎？還是我們應該做更多？ B：送花很好，但我覺得她會更看重經理寫的一封【真誠的】信，因為那代表有人真正關心她發生了什麼事。"
  },
  {
    "word": "deeply",
    "pos": "adv.",
    "cn_def": "深深地；非常",
    "en_def": "very much; strongly",
    "sentence": "A: The restaurant served the wrong dish to one of our guests at the company dinner last night, and she had to wait almost an hour for her meal. Is she all right now? B: She is fine, but the owner was {{BLANK}} sorry, so he called her this morning and promised to give her a free dinner next week.",
    "cn": "A：昨晚公司聚餐時，餐廳把錯的菜端給我們一位客人，她等了將近一小時才吃到她的餐點。她現在還好嗎？ B：她沒事，但老闆【深深地】感到抱歉，所以他今天早上打電話給她，並承諾下週請她免費吃一頓晚餐。"
  },
  {
    "word": "truly",
    "pos": "adv.",
    "cn_def": "真心地；確實",
    "en_def": "really; in a real and honest way",
    "sentence": "A: Do you think the client will believe our apology after we missed the delivery date for the third time this year? B: She will only believe us if we are {{BLANK}} sorry and show it with action, so let's offer her free delivery for six months and give her a direct phone number for our manager.",
    "cn": "A：今年我們已經第三次錯過交貨日期了，你覺得客戶還會相信我們的道歉嗎？ B：只有我們【真心】感到抱歉並用行動證明，她才會相信我們，所以我們就提供她六個月的免運，並給她經理的直撥電話號碼吧。"
  },
  {
    "word": "wholeheartedly",
    "pos": "adv.",
    "cn_def": "全心全意地；由衷地",
    "en_def": "completely and with all your feelings",
    "sentence": "A: The staff at the branch office worked all weekend to fix the problem our mistake caused in their computer system. How should we thank them? B: Our director will visit them on Monday and {{BLANK}} apologize for the extra work, and she will also bring lunch for the whole team to show how grateful we are.",
    "cn": "A：分公司的員工整個週末都在加班，修復我們的錯誤在他們電腦系統中造成的問題。我們該如何感謝他們？ B：我們的主管星期一會去拜訪他們，【由衷地】為額外的工作致歉，她也會為整個團隊帶午餐過去，表達我們有多感激。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear by giving details or reasons",
    "sentence": "A: Several passengers missed their connecting flights because our airport shuttle broke down on the highway this morning. What should I write in the email to them? B: First, {{BLANK}} what happened to the shuttle and why it took so long to send another bus, and then tell them how we will pay for their new tickets.",
    "cn": "A：今天早上我們的機場接駁車在高速公路上拋錨，好幾位乘客錯過了轉機班機。我應該在給他們的電子郵件裡寫些什麼？ B：首先，【說明】接駁車發生了什麼事，以及為什麼花了那麼久才派另一輛巴士過去，然後告訴他們我們將如何支付他們的新機票。"
  },
  {
    "word": "reason",
    "pos": "n.",
    "cn_def": "原因；理由",
    "en_def": "a cause or explanation for something",
    "sentence": "A: Our biggest customer canceled the contract renewal meeting this morning without saying much. Do you know why she did that? B: She told me the main {{BLANK}} was our slow customer service last month, so I'm writing her a letter today to apologize and to show her the changes we have already made.",
    "cn": "A：我們最大的客戶今天早上取消了續約會議，也沒多說什麼。你知道她為什麼這麼做嗎？ B：她告訴我主要的【原因】是我們上個月的客服太慢，所以我今天會寫一封信給她，向她道歉，並讓她看看我們已經做出的改變。"
  },
  {
    "word": "situation",
    "pos": "n.",
    "cn_def": "情況；處境",
    "en_def": "the things that are happening at a certain time and place",
    "sentence": "A: The air conditioning in the conference hall stopped working during the product launch, and many guests left early because it was so hot. How should we handle this? B: Let's call each guest personally to explain the {{BLANK}}, apologize for the uncomfortable afternoon, and invite them to a private product demonstration next month.",
    "cn": "A：產品發表會期間會議廳的冷氣停止運轉，很多賓客因為太熱而提早離開。我們該怎麼處理？ B：我們親自打電話給每位賓客說明【情況】，為那個不舒服的下午道歉，並邀請他們參加下個月的私人產品展示會。"
  },
  {
    "word": "circumstance",
    "pos": "n.",
    "cn_def": "情況；狀況",
    "en_def": "a fact or condition that affects what happens",
    "sentence": "A: Why did the training workshop for new employees start an hour late this morning, and why did nobody tell us about the change? B: Because of a {{BLANK}} beyond our control, the trainer's train from Hsinchu was stopped for an hour, and the message to staff failed to send, so we will apologize to everyone today.",
    "cn": "A：為什麼今天早上的新進員工訓練課程晚了一小時才開始？為什麼都沒人通知我們這個變動？ B：由於我們無法控制的【狀況】，講師從新竹搭的火車停駛了一小時，而且發給員工的通知沒有成功寄出，所以我們今天會向大家道歉。"
  },
  {
    "word": "promise",
    "pos": "v.",
    "cn_def": "承諾；答應",
    "en_def": "to say that you will certainly do something",
    "sentence": "A: The customer who waited three weeks for her new sofa wants to know if her next order will also take that long. What should I tell her? B: Apologize again and {{BLANK}} that her next delivery will arrive within five days, but only say it if the warehouse manager agrees that it is possible.",
    "cn": "A：那位等了三週才收到新沙發的顧客想知道，她下一次訂購是否也要等那麼久。我該怎麼告訴她？ B：再次向她道歉，並【承諾】她下一次的貨會在五天內送達，但前提是倉庫經理同意這是做得到的才說。"
  },
  {
    "word": "assure",
    "pos": "v.",
    "cn_def": "向…保證；使放心",
    "en_def": "to tell someone something firmly so they feel less worried",
    "sentence": "A: The guests are worried after the fire alarm went off twice in the hotel last night, and some want to check out early. What should the front desk say? B: The staff should apologize for the noise and {{BLANK}} the guests that the building is safe, because the technician found that a faulty sensor caused both alarms.",
    "cn": "A：昨晚飯店的火災警報響了兩次，客人們都很擔心，有些人想提早退房。櫃台應該怎麼說？ B：員工應該為噪音道歉，並向客人【保證】大樓是安全的，因為技師發現兩次警報都是一個故障的感應器造成的。"
  },
  {
    "word": "guarantee",
    "pos": "v.",
    "cn_def": "保證；擔保",
    "en_def": "to promise firmly that something will happen or be done",
    "sentence": "A: Our client is upset because the posters for her concert were printed in the wrong colors. Can we print new ones in time for the event next Saturday? B: Yes, our print shop can work overtime, so we can {{BLANK}} that the new posters will be ready by Wednesday, and we won't charge her anything extra for them.",
    "cn": "A：我們的客戶很不高興，因為她音樂會的海報印錯了顏色。我們能在下星期六活動前及時印好新的嗎？ B：可以，我們的印刷廠可以加班，所以我們可以【保證】新海報會在星期三前完成，而且不會向她收取任何額外費用。"
  },
  {
    "word": "correct",
    "pos": "v.",
    "cn_def": "改正；更正",
    "en_def": "to make something right or remove the mistakes from it",
    "sentence": "A: The price list on our website still shows last year's prices, and three customers have already complained that they were charged more at checkout. What should we do? B: Ask the web team to {{BLANK}} the prices before noon today, and then send those three customers an apology and a refund for the difference.",
    "cn": "A：我們網站上的價目表還是去年的價格，已經有三位顧客抱怨結帳時被收了比較多錢。我們該怎麼做？ B：請網站團隊今天中午前【更正】價格，然後寄給那三位顧客道歉信，並退還差額。"
  },
  {
    "word": "fix",
    "pos": "v.",
    "cn_def": "修理；解決",
    "en_def": "to repair something or solve a problem",
    "sentence": "A: Customers keep calling because the payment page on our app shows an error message every time they try to pay by credit card. How long will it take? B: Our technicians think they can {{BLANK}} the problem by tonight, so let's post an apology on our homepage and tell customers to pay by bank transfer until then.",
    "cn": "A：顧客一直打電話來，因為他們每次想用信用卡付款時，我們應用程式的付款頁面都會出現錯誤訊息。要多久才能處理好？ B：我們的技術人員認為今晚就能【解決】這個問題，所以我們先在首頁公告致歉，並告訴顧客在那之前改用銀行轉帳付款。"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "cn_def": "解決",
    "en_def": "to find a solution to a problem or disagreement",
    "sentence": "A: The tenants on the fifth floor have complained for two weeks about the noise from the construction work next door. Has the building manager done anything yet? B: She met the construction company yesterday to {{BLANK}} the issue, and they agreed to start work after nine in the morning, so she is writing an apology letter to the tenants now.",
    "cn": "A：五樓的房客已經抱怨隔壁施工的噪音兩個星期了。大樓管理員做了什麼處理嗎？ B：她昨天和建設公司見面來【解決】這個問題，他們同意早上九點以後才開工，所以她現在正在寫道歉信給房客。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Our survey shows that many hotel guests were unhappy with the long wait at the front desk during the busy holiday season. What are we going to do about it? B: We plan to {{BLANK}} the check-in process by adding two more staff in the evenings and letting guests check in on our mobile app before they arrive.",
    "cn": "A：我們的調查顯示，許多住客對假期旺季時櫃台要等很久感到不滿。我們打算怎麼處理？ B：我們計劃在晚上增加兩名員工，並讓住客抵達前就能用我們的手機應用程式辦理入住，藉此【改善】入住流程。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "防止；預防",
    "en_def": "to stop something from happening",
    "sentence": "A: The client was angry when she found that her private files had been sent to the wrong company by email last Friday. What steps are we taking now? B: We have apologized to her, and we added a new check to our email system to {{BLANK}} the same thing from happening again in the future.",
    "cn": "A：那位客戶發現她的私人檔案上星期五被用電子郵件寄到錯誤的公司時非常生氣。我們現在採取了哪些措施？ B：我們已經向她道歉，並在電子郵件系統中新增了一道檢查程序，以【防止】同樣的事情將來再度發生。"
  },
  {
    "word": "ensure",
    "pos": "v.",
    "cn_def": "確保",
    "en_def": "to make certain that something happens",
    "sentence": "A: The conference organizers apologized because there weren't enough seats for all the guests at last year's event. Will this year be any different? B: Yes, they have booked a much larger hall and hired extra staff to {{BLANK}} that every guest has a seat and gets a copy of the program at the door.",
    "cn": "A：研討會主辦單位曾為去年活動座位不夠所有來賓坐而道歉。今年會有所不同嗎？ B：會，他們訂了一個大得多的會場，並多請了工作人員，以【確保】每位來賓都有座位，並在門口拿到一份議程表。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；感謝",
    "en_def": "to be grateful for something",
    "sentence": "A: How should I end the letter to the customer whose package was lost during our office move last month? She was very calm on the phone with me. B: You should say that we really {{BLANK}} her patience while we searched for the package, and that a replacement has already been sent by express mail.",
    "cn": "A：上個月我們辦公室搬遷時弄丟了一位顧客的包裹，給她的信我該怎麼結尾？她在電話中對我非常冷靜。 B：你應該說，我們在尋找包裹期間非常【感謝】她的耐心，而且替代品已經用快遞寄出了。"
  },
  {
    "word": "understanding",
    "pos": "n.",
    "cn_def": "體諒；諒解",
    "en_def": "kindness and patience shown when someone accepts a problem",
    "sentence": "A: The main road to our factory will be closed for a week, so all deliveries to our customers will be one or two days slower than usual. How should I finish the notice? B: End it by thanking customers for their {{BLANK}} and giving them the phone number of our service desk in case they have any urgent orders.",
    "cn": "A：通往我們工廠的主要道路將封閉一週，所以所有送給客戶的貨都會比平常慢一兩天。這份通知我該怎麼結尾？ B：最後感謝客戶的【體諒】，並提供我們服務台的電話號碼，以防他們有任何緊急訂單。"
  },
  {
    "word": "patience",
    "pos": "n.",
    "cn_def": "耐心",
    "en_def": "the ability to wait calmly without getting angry",
    "sentence": "A: Many passengers at the station have been waiting more than an hour for the train to Tainan because of a signal problem. What should we announce next? B: Announce that the trains will start running again in twenty minutes, apologize for the long wait, and thank the passengers for their {{BLANK}} during this difficult morning.",
    "cn": "A：因為號誌問題，車站裡很多旅客已經等前往台南的火車等了一個多小時。我們接下來該廣播什麼？ B：廣播說火車將在二十分鐘後恢復行駛，為長時間的等候致歉，並感謝旅客在這個辛苦的早上所展現的【耐心】。"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "cn_def": "原諒",
    "en_def": "to stop being angry with someone for something they did",
    "sentence": "A: I accidentally sent the meeting notes with the private salary details to the entire department this morning. Do you think my manager will be angry with me? B: She might be upset at first, but if you tell her the truth right away and help her deal with the problem, I'm sure she will {{BLANK}} you quickly.",
    "cn": "A：我今天早上不小心把附有私人薪資明細的會議紀錄寄給了整個部門。你覺得我的經理會對我生氣嗎？ B：她一開始可能會不高興，但如果你馬上跟她說實話，並幫她處理這個問題，我相信她很快就會【原諒】你。"
  },
  {
    "word": "forgiveness",
    "pos": "n.",
    "cn_def": "原諒；寬恕",
    "en_def": "the act of forgiving someone",
    "sentence": "A: Our team leader shouted at the new assistant in front of everyone during the busy sales meeting yesterday, and the assistant was very upset. Has he said anything since then? B: Yes, he went to her desk this morning, asked for her {{BLANK}}, and promised to talk to staff more calmly and privately when there is a problem.",
    "cn": "A：昨天在忙碌的業務會議上，我們組長當著大家的面對新來的助理大吼，助理非常難過。他之後有說什麼嗎？ B：有，他今天早上走到她的座位，請求她的【原諒】，並承諾以後有問題時會更冷靜、私下地和員工談。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受",
    "en_def": "to agree to take something that is offered",
    "sentence": "A: The hotel offered the guest a free night and dinner for two after the cleaning staff entered his room by mistake while he was sleeping. Did he say yes? B: At first he wanted a full refund, but after the manager called him personally, he decided to {{BLANK}} the apology and the free night.",
    "cn": "A：清潔人員在一位客人睡覺時誤闖他的房間，飯店事後招待他免費住一晚和兩人晚餐。他答應了嗎？ B：他一開始想要全額退款，但經理親自打電話給他之後，他決定【接受】道歉和免費住宿。"
  },
  {
    "word": "once again",
    "pos": "adv.phr.",
    "cn_def": "再一次；再次",
    "en_def": "one more time",
    "sentence": "A: I have finished the letter to the customers whose orders were canceled because of our computer system problem last week. How should I close it? B: Close it by saying that we apologize {{BLANK}} for the trouble, and remind them that their discount code can be used until the end of next month.",
    "cn": "A：給上週因電腦系統問題被取消訂單的顧客的信我寫完了。我該怎麼結尾？ B：最後說我們【再一次】為造成的麻煩致歉，並提醒他們折扣碼可以使用到下個月月底。"
  },
  {
    "word": "sincerely",
    "pos": "adv.",
    "cn_def": "真誠地；誠摯地",
    "en_def": "in an honest and real way; also used to end a formal letter",
    "sentence": "A: The airline canceled our flight to Singapore because of a technical problem, and we missed the first day of the trade fair. Has the airline said anything to us? B: Yes, they sent an email this morning saying they {{BLANK}} apologize, and they are offering each of us a voucher worth three hundred dollars for our next trip.",
    "cn": "A：航空公司因為技術問題取消了我們飛往新加坡的班機，我們錯過了商展的第一天。航空公司有跟我們說什麼嗎？ B：有，他們今天早上寄了一封電子郵件，說他們【誠摯地】致歉，並且提供我們每人一張價值三百美元的抵用券，供下次旅行使用。"
  },
  {
    "word": "immediately",
    "pos": "adv.",
    "cn_def": "立即；馬上",
    "en_def": "at once; without waiting",
    "sentence": "A: A customer just called to say that the milk she bought at our supermarket this morning had already gone bad when she opened it at home. What should we do? B: Ask her to come back with the receipt so we can refund her {{BLANK}}, and please also check every carton on that shelf before more customers buy it.",
    "cn": "A：一位顧客剛打電話來說，她今天早上在我們超市買的牛奶，回家打開時就已經壞了。我們該怎麼做？ B：請她帶收據回來，好讓我們【立即】退款給她，也請你在更多顧客購買之前檢查那個貨架上的每一盒牛奶。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: The online shop told me that my printer would be shipped on Monday, but it still hasn't left their warehouse after four days. Did they reply to my email? B: Yes, they apologized for the slow service and said the printer will be sent out very {{BLANK}}, probably tomorrow morning, along with a free box of ink cartridges.",
    "cn": "A：網路商店告訴我印表機會在星期一出貨，但四天過去了還沒離開他們的倉庫。他們回覆我的電子郵件了嗎？ B：回了，他們為服務太慢道歉，並說印表機【很快】就會寄出，大概明天早上，還會附送一盒免費的墨水匣。"
  },
  {
    "word": "attention",
    "pos": "n.",
    "cn_def": "注意；關注",
    "en_def": "the act of noticing or dealing with something",
    "sentence": "A: Who first noticed that the wrong delivery address was printed on all the shipping labels for our biggest customer's order? B: One of the drivers brought the problem to our {{BLANK}} before he left the warehouse, so we stopped the trucks in time and sent the customer an apology for the small delay.",
    "cn": "A：是誰最先發現我們最大客戶訂單的所有出貨標籤都印錯了送貨地址？ B：一位司機在離開倉庫前讓我們【注意】到了這個問題，所以我們及時攔下了卡車，並為小小的延誤向客戶道歉。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "a subject or situation that you must deal with",
    "sentence": "A: A customer wrote to our head office to say that a store clerk was rude to her when she tried to return a broken lamp. Who is handling the complaint? B: The regional manager is looking into the {{BLANK}} personally, and she plans to call the customer this afternoon to apologize and offer her a full refund.",
    "cn": "A：一位顧客寫信到我們總公司，說她想退回一盞壞掉的檯燈時，店員對她很無禮。誰在處理這件客訴？ B：區經理正親自調查這件【事情】，她打算今天下午打電話給這位顧客道歉，並提供全額退款。"
  },
  {
    "word": "response",
    "pos": "n.",
    "cn_def": "回應；回覆",
    "en_def": "an answer or reaction",
    "sentence": "A: Mr. Lin wrote to us last week to complain about the noise from our night deliveries, but nobody has answered him yet. Is that a problem? B: Yes, it is, because a slow {{BLANK}} can make an angry customer even angrier, so please send him a short apology and explain our new delivery hours today.",
    "cn": "A：林先生上週寫信給我們，抱怨我們夜間送貨的噪音，但到現在都還沒人回覆他。這會有問題嗎？ B：會，因為【回應】太慢會讓生氣的顧客更生氣，所以請你今天寄給他一封簡短的道歉信，並說明我們新的送貨時間。"
  }
];

const MCQS = [
  {
    "q": "I typed the wrong price on the invoice yesterday. I am sorry for the _____ and will send a corrected copy today.",
    "options": [
      "patience",
      "forgiveness",
      "attention",
      "mistake"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "We _____ to inform you that the training session has been canceled. A new date will be announced next week.",
    "options": [
      "ensure",
      "accept",
      "regret",
      "forgive"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The report had many spelling mistakes because the writer was _____. The manager asked him to check his work more carefully.",
    "options": [
      "careless",
      "sincere",
      "late",
      "unintentional"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The water pipe in the kitchen broke this morning. Please call the repair company _____ before the floor is damaged.",
    "options": [
      "wholeheartedly",
      "immediately",
      "sincerely",
      "deeply"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The parking lot will be closed for painting on Saturday. We apologize for any _____ this may cause our visitors.",
    "options": [
      "patience",
      "attention",
      "response",
      "inconvenience"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Many clients are worried about the new payment system. Our manager will _____ them that their information is completely safe.",
    "options": [
      "prevent",
      "forgive",
      "assure",
      "regret"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Please accept our _____ apologies for the noise last night. The hotel will give you a free breakfast this morning.",
    "options": [
      "sincere",
      "unintentional",
      "careless",
      "late"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Heavy snow closed the airport for six hours. Passengers waiting for the flight to Tokyo were told the _____ could last all night.",
    "options": [
      "patience",
      "delay",
      "fault",
      "forgiveness"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The bakery owner was _____ sorry that the wedding cake arrived late. She offered the couple a full refund the next day.",
    "options": [
      "deeply",
      "soon",
      "immediately",
      "wholeheartedly"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The driver hit our parked van while backing up. He admitted the accident was his _____ and paid for the repairs.",
    "options": [
      "attention",
      "patience",
      "understanding",
      "fault"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The customer did not understand why her order was canceled. Please call her and _____ the reason in simple words.",
    "options": [
      "forgive",
      "explain",
      "appreciate",
      "accept"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our company takes full _____ for the damaged goods. We will replace every broken item at no extra cost.",
    "options": [
      "attention",
      "forgiveness",
      "responsibility",
      "patience"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The computer deleted the files on its own because of a power failure. The loss of data was completely _____.",
    "options": [
      "unintentional",
      "careless",
      "late",
      "sincere"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our new courier service is very reliable. We _____ that every package will arrive within two business days or you get your money back.",
    "options": [
      "forgive",
      "explain",
      "regret",
      "guarantee"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The client thought the price included delivery, but it did not. We called her to clear up the _____ right away.",
    "options": [
      "patience",
      "misunderstanding",
      "attention",
      "forgiveness"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The monthly rent payment was _____ because of a bank holiday. The landlord kindly agreed not to charge an extra fee.",
    "options": [
      "unintentional",
      "sincere",
      "late",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The two departments disagree about the new schedule. The director will meet both teams on Friday to _____ the problem.",
    "options": [
      "assure",
      "resolve",
      "forgive",
      "regret"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The concert was canceled because of an unexpected _____. The singer's flight could not land due to the storm.",
    "options": [
      "forgiveness",
      "attention",
      "patience",
      "circumstance"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Our staff believe _____ in giving every customer excellent service. They put their hearts into helping people every day.",
    "options": [
      "wholeheartedly",
      "soon",
      "once again",
      "immediately"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Our phone lines are very busy this morning. Thank you for your _____ while you wait for the next available agent.",
    "options": [
      "forgiveness",
      "delay",
      "patience",
      "fault"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The factory installed new safety fences around the machines last month. They help _____ workers from getting hurt on the job.",
    "options": [
      "regret",
      "forgive",
      "explain",
      "prevent"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "After missing the important client dinner, Tom felt terrible. He sent the client a gift and asked for her _____.",
    "options": [
      "forgiveness",
      "inconvenience",
      "circumstance",
      "delay"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Please check all the figures twice before you send the report. We must _____ that there are no mistakes this time.",
    "options": [
      "explain",
      "ensure",
      "forgive",
      "regret"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Thank you very much for your patience in this matter. Yours _____, Daniel Chen, Customer Service Manager.",
    "options": [
      "soon",
      "deeply",
      "sincerely",
      "immediately"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "The restaurant offered the unhappy guest a free dessert. Luckily, he decided to _____ the offer and stay for the rest of the evening.",
    "options": [
      "accept",
      "explain",
      "prevent",
      "regret"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "We sent the supplier three emails about the missing parts. We are still waiting for a _____ from their sales team.",
    "options": [
      "patience",
      "response",
      "forgiveness",
      "fault"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "Thank you for bringing this problem to our _____. We will look into it and contact you within two days.",
    "options": [
      "forgiveness",
      "delay",
      "fault",
      "attention"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "We know the road work outside our store is noisy. We truly _____ your understanding during these two weeks.",
    "options": [
      "resolve",
      "prevent",
      "appreciate",
      "guarantee"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Mary forgot to send the invitations for the party. She hoped her boss would _____ her for the mistake.",
    "options": [
      "forgive",
      "explain",
      "prevent",
      "ensure"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The bank found a small _____ in our monthly statement. It had charged us twice for the same payment.",
    "options": [
      "response",
      "forgiveness",
      "patience",
      "error"
    ],
    "answer": 3,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "regret": {
    "pos": "v.",
    "en_def": "to feel sorry about something you did or that happened",
    "cn_def": "後悔；遺憾"
  },
  "mistake": {
    "pos": "n.",
    "en_def": "something done wrong because of bad judgment or not paying attention",
    "cn_def": "錯誤；失誤"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake, especially in numbers, writing or a system",
    "cn_def": "錯誤；差錯"
  },
  "fault": {
    "pos": "n.",
    "en_def": "responsibility for a mistake or problem",
    "cn_def": "過錯；責任"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "the duty of dealing with something, or being the cause of a problem",
    "cn_def": "責任"
  },
  "inconvenience": {
    "pos": "n.",
    "en_def": "a problem that causes trouble or makes things less easy",
    "cn_def": "不便；麻煩"
  },
  "trouble": {
    "pos": "n.",
    "en_def": "problems, difficulty or extra work",
    "cn_def": "麻煩；困難"
  },
  "delay": {
    "pos": "n.",
    "en_def": "a time when something happens later than planned",
    "cn_def": "延誤；耽擱"
  },
  "late": {
    "pos": "adj.",
    "en_def": "happening or arriving after the expected time",
    "cn_def": "遲的；晚的"
  },
  "misunderstanding": {
    "pos": "n.",
    "en_def": "a situation where people do not understand each other correctly",
    "cn_def": "誤會；誤解"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not paying enough attention, so mistakes happen",
    "cn_def": "粗心的"
  },
  "unintentional": {
    "pos": "adj.",
    "en_def": "not done on purpose",
    "cn_def": "無心的；非故意的"
  },
  "sincere": {
    "pos": "adj.",
    "en_def": "honest and really meant",
    "cn_def": "真誠的；誠摯的"
  },
  "deeply": {
    "pos": "adv.",
    "en_def": "very much; strongly",
    "cn_def": "深深地；非常"
  },
  "truly": {
    "pos": "adv.",
    "en_def": "really; in a real and honest way",
    "cn_def": "真心地；確實"
  },
  "wholeheartedly": {
    "pos": "adv.",
    "en_def": "completely and with all your feelings",
    "cn_def": "全心全意地；由衷地"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear by giving details or reasons",
    "cn_def": "解釋；說明"
  },
  "reason": {
    "pos": "n.",
    "en_def": "a cause or explanation for something",
    "cn_def": "原因；理由"
  },
  "situation": {
    "pos": "n.",
    "en_def": "the things that are happening at a certain time and place",
    "cn_def": "情況；處境"
  },
  "circumstance": {
    "pos": "n.",
    "en_def": "a fact or condition that affects what happens",
    "cn_def": "情況；狀況"
  },
  "promise": {
    "pos": "v.",
    "en_def": "to say that you will certainly do something",
    "cn_def": "承諾；答應"
  },
  "assure": {
    "pos": "v.",
    "en_def": "to tell someone something firmly so they feel less worried",
    "cn_def": "向…保證；使放心"
  },
  "guarantee": {
    "pos": "v.",
    "en_def": "to promise firmly that something will happen or be done",
    "cn_def": "保證；擔保"
  },
  "correct": {
    "pos": "v.",
    "en_def": "to make something right or remove the mistakes from it",
    "cn_def": "改正；更正"
  },
  "fix": {
    "pos": "v.",
    "en_def": "to repair something or solve a problem",
    "cn_def": "修理；解決"
  },
  "resolve": {
    "pos": "v.",
    "en_def": "to find a solution to a problem or disagreement",
    "cn_def": "解決"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to stop something from happening",
    "cn_def": "防止；預防"
  },
  "ensure": {
    "pos": "v.",
    "en_def": "to make certain that something happens",
    "cn_def": "確保"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be grateful for something",
    "cn_def": "感激；感謝"
  },
  "understanding": {
    "pos": "n.",
    "en_def": "kindness and patience shown when someone accepts a problem",
    "cn_def": "體諒；諒解"
  },
  "patience": {
    "pos": "n.",
    "en_def": "the ability to wait calmly without getting angry",
    "cn_def": "耐心"
  },
  "forgive": {
    "pos": "v.",
    "en_def": "to stop being angry with someone for something they did",
    "cn_def": "原諒"
  },
  "forgiveness": {
    "pos": "n.",
    "en_def": "the act of forgiving someone",
    "cn_def": "原諒；寬恕"
  },
  "accept": {
    "pos": "v.",
    "en_def": "to agree to take something that is offered",
    "cn_def": "接受"
  },
  "once again": {
    "pos": "adv.phr.",
    "en_def": "one more time",
    "cn_def": "再一次；再次"
  },
  "sincerely": {
    "pos": "adv.",
    "en_def": "in an honest and real way; also used to end a formal letter",
    "cn_def": "真誠地；誠摯地"
  },
  "immediately": {
    "pos": "adv.",
    "en_def": "at once; without waiting",
    "cn_def": "立即；馬上"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "attention": {
    "pos": "n.",
    "en_def": "the act of noticing or dealing with something",
    "cn_def": "注意；關注"
  },
  "matter": {
    "pos": "n.",
    "en_def": "a subject or situation that you must deal with",
    "cn_def": "事情；問題"
  },
  "response": {
    "pos": "n.",
    "en_def": "an answer or reaction",
    "cn_def": "回應；回覆"
  }
};

const EXTRA_GLOSSES = {};
