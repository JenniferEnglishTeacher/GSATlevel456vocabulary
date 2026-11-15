// Topic 19 Quiz Data: Argument 爭論
// Source word list: https://www.examword.com/group-topic/argument — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T19 - Argument 爭論",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dispute",
    "pos": "n.",
    "cn_def": "糾紛；爭議",
    "en_def": "a serious disagreement, often between groups or companies",
    "sentence": "A: Why hasn't the shipping company delivered our new office furniture yet, even though we paid for it two months ago and they promised it last week? B: There is a {{BLANK}} between them and the factory about the final price, and the lawyers say it may take another month before they agree on anything.",
    "cn": "A：我們兩個月前就付了錢，他們也承諾上週送達，為什麼貨運公司到現在還沒送來新的辦公家具？ B：他們和工廠之間對最終價格有【糾紛】，律師說可能還要一個月他們才能達成任何共識。"
  },
  {
    "word": "quarrel",
    "pos": "n.",
    "cn_def": "爭吵；口角",
    "en_def": "an angry argument between people who know each other",
    "sentence": "A: Why are Tom and Kevin sitting so far apart in the meeting room today, when they usually work together on every project and eat lunch together? B: They had a small {{BLANK}} yesterday about who should present the report to the director, and now they are both too proud to say sorry first.",
    "cn": "A：湯姆和凱文平常每個專案都一起做、也一起吃午餐，為什麼今天在會議室坐得那麼遠？ B：他們昨天為了誰該向主任報告而起了小【口角】，現在兩個人都太驕傲，不肯先道歉。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a situation where people strongly disagree or want different things",
    "sentence": "A: The sales team wants to lower our prices to win more customers, but the finance team says we will lose money, so what is the manager going to do? B: She will meet both teams on Friday to solve this {{BLANK}}, because the company cannot plan next year's budget until everyone agrees on the prices.",
    "cn": "A：業務團隊想降價來爭取更多客戶，但財務團隊說我們會賠錢，經理打算怎麼做？ B：她星期五會和兩個團隊開會解決這個【衝突】，因為在大家對價格達成共識之前，公司沒辦法規劃明年的預算。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論；討論",
    "en_def": "a discussion in which people give different opinions on a subject",
    "sentence": "A: The board members spent almost three hours yesterday talking about whether we should open a new factory in Vietnam, so did they decide anything at last? B: Not yet, because the {{BLANK}} is still going on, and some members think the costs are too high while others believe the cheaper workers will help us grow.",
    "cn": "A：董事會成員昨天花了將近三個小時談論我們是否該在越南開新工廠，他們最後有做出決定嗎？ B：還沒有，因為這場【辯論】還在進行中，有些成員認為成本太高，有些則相信較便宜的人力能幫助我們成長。"
  },
  {
    "word": "clash",
    "pos": "n.",
    "cn_def": "衝突；交鋒",
    "en_def": "a short, strong disagreement or fight",
    "sentence": "A: I heard there was a lot of shouting in the warehouse this morning, and some workers stopped working for almost an hour, so what happened down there? B: There was a {{BLANK}} between the night shift and the morning shift about who left the loading area so messy, but the supervisor calmed everyone down.",
    "cn": "A：我聽說今天早上倉庫裡吵得很兇，有些工人停工了將近一個小時，那裡發生了什麼事？ B：夜班和早班為了誰把裝貨區弄得那麼亂起了【衝突】，不過主管讓大家都冷靜下來了。"
  },
  {
    "word": "disagree",
    "pos": "v.",
    "cn_def": "不同意；意見不合",
    "en_def": "to have a different opinion from someone",
    "sentence": "A: The manager suggested moving our weekly team meeting from Monday morning to Friday afternoon, so what do you think about her new plan? B: I {{BLANK}} with her, because many people leave early on Fridays to visit their families, and they would probably miss important news about the week ahead.",
    "cn": "A：經理建議把每週的團隊會議從星期一早上改到星期五下午，你覺得她的新計畫怎麼樣？ B：我【不同意】她的看法，因為很多人星期五會提早離開去探望家人，他們可能會錯過下週的重要消息。"
  },
  {
    "word": "argue",
    "pos": "v.",
    "cn_def": "爭論；爭吵",
    "en_def": "to speak angrily with someone because you disagree",
    "sentence": "A: The two designers were talking very loudly in the meeting room after lunch, and I could hear them from my desk, so is everything all right? B: They often {{BLANK}} about colors and fonts when a deadline is close, but they always find a good solution and stay friends after the project is finished.",
    "cn": "A：兩位設計師午餐後在會議室裡講話很大聲，我在座位上都聽得到，一切都還好嗎？ B：截止日快到時，他們常常為了顏色和字體【爭論】，但他們總能找到好的解決方法，專案結束後也依然是朋友。"
  },
  {
    "word": "contest",
    "pos": "v.",
    "cn_def": "對…提出異議；爭辯",
    "en_def": "to formally say that a decision or result is wrong",
    "sentence": "A: The city government fined our restaurant for putting tables on the sidewalk, but we have a permit that allows us to do that, so what should we do? B: We should {{BLANK}} the fine by sending a copy of our permit to the city office, and our lawyer can help us write a formal letter.",
    "cn": "A：市政府因為我們餐廳在人行道上擺桌子而開罰，但我們有允許這麼做的許可證，該怎麼辦？ B：我們應該把許可證影本寄到市政府來對罰單【提出異議】，我們的律師可以幫忙寫正式的信函。"
  },
  {
    "word": "oppose",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with a plan and try to stop it",
    "sentence": "A: The company wants to build a large parking lot behind our office, but that would mean cutting down all the old trees there, so how do people feel about it? B: Many staff members {{BLANK}} the plan, because they enjoy eating lunch under those trees, and they have already signed a letter to the director.",
    "cn": "A：公司想在我們辦公室後面蓋一座大型停車場，但這表示要砍掉那裡所有的老樹，大家覺得怎麼樣？ B：很多員工【反對】這個計畫，因為他們喜歡在那些樹下吃午餐，而且已經聯名寫信給主任了。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；客訴",
    "en_def": "a statement that you are unhappy about something",
    "sentence": "A: A customer called this morning and said that her new washing machine was delivered with a broken door, and she sounded very upset, so what did you do? B: I wrote down her {{BLANK}} in our system and promised that a technician would visit her home tomorrow to replace the door for free.",
    "cn": "A：今天早上有位顧客打電話說她的新洗衣機送到時門是壞的，她聽起來很不高興，你怎麼處理？ B：我把她的【客訴】記錄在系統裡，並承諾明天會有技術人員到她家免費更換洗衣機門。"
  },
  {
    "word": "accusation",
    "pos": "n.",
    "cn_def": "指控；指責",
    "en_def": "a statement saying that someone has done something wrong",
    "sentence": "A: Our new supplier says that our company copied their product design, and they have sent an angry email to our president, so is this a serious problem? B: It is serious, but the {{BLANK}} is not true, because we have drawings that show our designers finished the design two years before theirs.",
    "cn": "A：我們的新供應商說我們公司抄襲他們的產品設計，還寄了一封很生氣的信給我們總裁，這是嚴重的問題嗎？ B：是很嚴重，但這項【指控】不是真的，因為我們有設計圖可以證明我們的設計師比他們早兩年完成設計。"
  },
  {
    "word": "blame",
    "pos": "v.",
    "cn_def": "責怪；歸咎",
    "en_def": "to say that someone is responsible for something bad",
    "sentence": "A: The project was finished three weeks late, and the client is very unhappy with us, so whose fault was it in the end? B: It is not fair to {{BLANK}} only one person, because the supplier was late, the designs changed twice, and our team was also too small.",
    "cn": "A：這個專案晚了三週才完成，客戶對我們非常不滿，最後到底是誰的錯？ B：只【責怪】一個人並不公平，因為供應商延誤、設計改了兩次，我們的團隊人手也太少。"
  },
  {
    "word": "criticism",
    "pos": "n.",
    "cn_def": "批評",
    "en_def": "words that say what is bad or wrong about something",
    "sentence": "A: The director said many negative things about my marketing plan in front of everyone at the meeting today, and I felt quite embarrassed. B: Try not to take the {{BLANK}} personally, because she wants the plan to succeed, and her comments about the budget could make your next version much stronger.",
    "cn": "A：主任今天在會議上當著大家的面對我的行銷計畫說了很多負面的話，我覺得很難堪。 B：試著不要把這些【批評】當成針對你個人，因為她希望這個計畫成功，她對預算的意見可能會讓你的下一版更有力。"
  },
  {
    "word": "tension",
    "pos": "n.",
    "cn_def": "緊張（關係）",
    "en_def": "a feeling of worry and anger between people",
    "sentence": "A: Since the company announced it might close one of the two branches, the people in our office seem very quiet and nervous, so have you noticed it too? B: Yes, there is a lot of {{BLANK}} between the two branches now, because everyone is worried about losing their job and nobody wants to share information.",
    "cn": "A：自從公司宣布可能要關閉兩間分公司中的一間，我們辦公室的人似乎都很安靜又緊張，你也注意到了嗎？ B：有，現在兩間分公司之間的【緊張關係】很嚴重，因為大家都擔心丟了工作，沒有人願意分享資訊。"
  },
  {
    "word": "hostility",
    "pos": "n.",
    "cn_def": "敵意",
    "en_def": "unfriendly and angry feelings or behavior",
    "sentence": "A: When the new manager from headquarters came to visit our factory, many workers would not even say hello to her, so why were they so unfriendly? B: There is some {{BLANK}} toward headquarters because they cut everyone's bonus last year, and the workers still feel that nobody listened to them.",
    "cn": "A：總部的新經理來參觀我們工廠時，很多工人連招呼都不跟她打，他們為什麼那麼不友善？ B：大家對總部有些【敵意】，因為他們去年削減了每個人的獎金，工人們到現在仍覺得沒有人聽他們的意見。"
  },
  {
    "word": "anger",
    "pos": "n.",
    "cn_def": "憤怒；怒氣",
    "en_def": "a strong feeling you have when something is unfair or wrong",
    "sentence": "A: The passengers at Gate 12 have been waiting for over four hours because of the delay, and some of them are now shouting at the airline staff, so what should we do? B: We should offer them free meals and a clear update right away, because that will help reduce their {{BLANK}} while the engineers fix the plane.",
    "cn": "A：12號登機門的乘客因為班機延誤已經等了四個多小時，有些人現在正對航空公司人員大吼，我們該怎麼辦？ B：我們應該馬上提供免費餐點和清楚的最新消息，因為在工程師修理飛機時，這能幫助緩和他們的【怒氣】。"
  },
  {
    "word": "frustration",
    "pos": "n.",
    "cn_def": "挫折感；沮喪",
    "en_def": "the feeling of being upset because you cannot do what you want",
    "sentence": "A: The new computer system crashes almost every afternoon, and our team cannot finish the orders on time, so what did people say at the meeting? B: Many people talked about their {{BLANK}} with the system, and the manager promised to ask the IT company to fix the problem by the end of the week.",
    "cn": "A：新的電腦系統幾乎每天下午都當機，我們團隊沒辦法準時完成訂單，會議上大家說了什麼？ B：很多人談到他們對這套系統的【挫折感】，經理承諾會請資訊公司在這週結束前解決問題。"
  },
  {
    "word": "escalate",
    "pos": "v.",
    "cn_def": "升級；惡化",
    "en_def": "to become more serious or worse",
    "sentence": "A: The customer who complained about the late delivery is now threatening to post bad reviews online and call a lawyer, so how should we deal with him? B: We must act quickly before the situation can {{BLANK}} any further, so please call him today, say sorry, and offer him a full refund.",
    "cn": "A：那位抱怨送貨延誤的客戶現在威脅要上網留負評並找律師，我們該怎麼處理他？ B：我們必須在情況進一步【惡化】之前趕快行動，所以請你今天打給他、向他道歉，並提供全額退款。"
  },
  {
    "word": "provoke",
    "pos": "v.",
    "cn_def": "激起；挑釁",
    "en_def": "to cause a strong, often angry reaction",
    "sentence": "A: The company is planning to send an email that says all workers must work on Saturdays next month without extra pay, so do you think that is a good idea? B: No, that email will surely {{BLANK}} a lot of anger among the staff, so the managers should explain the reason and offer extra days off instead.",
    "cn": "A：公司打算寄一封電子郵件，說所有員工下個月星期六都得上班而且沒有加班費，你覺得這是好主意嗎？ B：不是，那封信一定會【激起】員工很大的怒氣，所以主管們應該說明原因，並改為提供額外的休假。"
  },
  {
    "word": "defend",
    "pos": "v.",
    "cn_def": "為…辯護；捍衛",
    "en_def": "to speak in support of someone or something that is criticized",
    "sentence": "A: At the meeting yesterday, the director said our new advertisement was too expensive and not very creative, so did anyone say anything about it? B: Yes, Linda stood up to {{BLANK}} the advertisement, and she showed charts proving that it brought in twice as many new customers as last year's one.",
    "cn": "A：昨天會議上主任說我們的新廣告太貴又不夠有創意，有人對此表示什麼嗎？ B：有，琳達站起來為這支廣告【辯護】，並拿出圖表證明它帶來的新客戶是去年那支的兩倍。"
  },
  {
    "word": "justify",
    "pos": "v.",
    "cn_def": "證明…有理；為…辯解",
    "en_def": "to give a good reason for something",
    "sentence": "A: The finance manager wants to know why our department spent so much money on taxis and hotels last month, so what should I tell her? B: You need to {{BLANK}} each cost with receipts and a short note, for example that the client meetings in Taichung ended late and there were no trains.",
    "cn": "A：財務經理想知道我們部門上個月為什麼花了那麼多錢在計程車和飯店上，我該怎麼跟她說？ B：你需要用收據和簡短說明來【證明】每一筆費用是合理的，例如在台中的客戶會議結束得很晚，已經沒有火車了。"
  },
  {
    "word": "assert",
    "pos": "v.",
    "cn_def": "斷言；堅稱",
    "en_def": "to say something firmly and with confidence",
    "sentence": "A: The client says our team made a mistake in the contract and wants us to pay for the extra costs, but our lawyer read it carefully, so what does she think? B: She continues to {{BLANK}} that the contract is completely correct, and she has prepared a letter that explains each section clearly for the client.",
    "cn": "A：客戶說我們團隊在合約中犯了錯，要我們負擔額外費用，但我們的律師仔細讀過了，她怎麼看？ B：她依然【堅稱】合約完全正確，並準備了一封信，為客戶清楚說明每一個條款。"
  },
  {
    "word": "counter",
    "pos": "v.",
    "cn_def": "反駁；回應",
    "en_def": "to answer an argument by giving a different opinion",
    "sentence": "A: During the negotiation, the buyer said our prices were much higher than the prices of other suppliers in Asia, so how did our sales manager respond to that? B: She was able to {{BLANK}} his point by showing that our products last twice as long and come with a free five-year service plan.",
    "cn": "A：談判時，買方說我們的價格比亞洲其他供應商高出許多，我們的業務經理是怎麼回應的？ B：她拿出證據說明我們的產品耐用度是兩倍，還附贈五年免費維修方案，成功【反駁】了他的論點。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；折衷",
    "en_def": "an agreement in which each side gives up something it wants",
    "sentence": "A: The workers want a ten percent pay raise, but the company says it can only afford three percent this year, so is there any way to end this disagreement? B: I think a {{BLANK}} is possible, such as a six percent raise with two extra days off, because both sides really want to avoid a strike.",
    "cn": "A：工人想加薪百分之十，但公司說今年只負擔得起百分之三，有沒有辦法結束這個分歧？ B：我認為可能找到【折衷】方案，例如加薪百分之六再多兩天假，因為雙方都真的想避免罷工。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "解決（方法）",
    "en_def": "the act of solving a problem or ending a disagreement",
    "sentence": "A: The two companies have been arguing about the unpaid bill for almost six months, and the lawyers' fees are getting very expensive, so is there any good news yet? B: Yes, they finally found a {{BLANK}} yesterday, and they agreed to share the cost equally and continue working together on the new project.",
    "cn": "A：兩家公司為了這筆未付帳款爭執將近六個月，律師費越來越貴，有任何好消息了嗎？ B：有，他們昨天終於找到了【解決方法】，同意平均分擔費用並繼續合作新專案。"
  },
  {
    "word": "reconcile",
    "pos": "v.",
    "cn_def": "和解；使和好",
    "en_def": "to become friendly with someone again after an argument",
    "sentence": "A: The two founders of the company stopped speaking to each other last year after a big argument about money, so is it true that they are working together again? B: Yes, a close friend helped them {{BLANK}} last month, and now they are planning to open a new store in Taichung together next spring.",
    "cn": "A：公司的兩位創辦人去年為了錢大吵一架後就不跟對方說話了，聽說他們又一起合作了，是真的嗎？ B：是的，上個月一位好友幫他們【和解】，現在他們正計畫明年春天一起在台中開一家新店。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；協商",
    "en_def": "to discuss something in order to reach an agreement",
    "sentence": "A: The rent for our office will go up by twenty percent next year, and our budget is already very tight, so do we have to accept the new price? B: Not necessarily, because the manager plans to {{BLANK}} with the owner next week and ask for a smaller increase if we sign a five-year contract.",
    "cn": "A：我們辦公室的租金明年要漲百分之二十，我們的預算已經很緊了，我們一定要接受新價格嗎？ B：不一定，因為經理打算下週和房東【協商】，如果我們簽五年約，就請他少漲一點。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的；平靜的",
    "en_def": "quiet and not angry or nervous",
    "sentence": "A: A very angry customer is standing at the front desk and shouting about his missing package, and the new receptionist looks scared, so what should she do? B: She should stay {{BLANK}}, speak slowly and politely, and then call the delivery company to find out where the package is right now.",
    "cn": "A：一位非常生氣的顧客站在櫃台大吼他遺失的包裹，新來的接待員看起來很害怕，她該怎麼做？ B：她應該保持【冷靜】，慢慢地、有禮貌地說話，然後打電話給貨運公司查出包裹現在在哪裡。"
  },
  {
    "word": "heated",
    "pos": "adj.",
    "cn_def": "激烈的；激動的",
    "en_def": "full of angry and excited feelings",
    "sentence": "A: The meeting about the new working hours went on for three hours yesterday, and I heard people were shouting, so was it really that bad? B: It was a very {{BLANK}} discussion, because many parents on the team cannot start work at seven, but in the end, the manager agreed to change the plan.",
    "cn": "A：昨天關於新工作時間的會議開了三個小時，我聽說有人在大吼，真的那麼糟嗎？ B：那是一場非常【激烈】的討論，因為團隊裡很多家長沒辦法七點開始上班，不過最後經理同意修改計畫。"
  },
  {
    "word": "verbal",
    "pos": "adj.",
    "cn_def": "口頭的；言語的",
    "en_def": "spoken, not written",
    "sentence": "A: The supplier says we agreed to pay a higher price on the phone last month, but I cannot find that agreement in any of our emails, so is it real? B: It was only a {{BLANK}} agreement, so we should ask them to send everything in writing before we pay any extra money.",
    "cn": "A：供應商說我們上個月在電話中同意支付更高的價格，但我在任何電子郵件中都找不到這項協議，這是真的嗎？ B：那只是【口頭】協議，所以在我們支付任何額外款項之前，應該請他們把所有內容以書面寄來。"
  },
  {
    "word": "hostile",
    "pos": "adj.",
    "cn_def": "有敵意的；不友善的",
    "en_def": "very unfriendly and ready to argue",
    "sentence": "A: The local people at the town meeting did not seem to like our plan for the new shopping mall, and some of them were shouting, so how did it go? B: The crowd was quite {{BLANK}} at first, but after we explained the new jobs and the free parking, many of them started to listen.",
    "cn": "A：鎮民大會上當地居民似乎不喜歡我們新購物中心的計畫，有些人還在大吼，結果怎麼樣？ B：一開始群眾相當【有敵意】，但在我們說明會有新工作和免費停車之後，很多人開始願意聽了。"
  },
  {
    "word": "peacefully",
    "pos": "adv.",
    "cn_def": "和平地；平靜地",
    "en_def": "in a calm way without fighting or arguing",
    "sentence": "A: Our two neighbors in the office building have argued about the shared parking spaces for months, and the building manager is tired of it, so what happened today? B: They finally sat down together and solved the problem {{BLANK}}, and now each company has five spaces with its name painted on the ground.",
    "cn": "A：我們辦公大樓的兩個鄰居為了共用停車位吵了好幾個月，大樓管理員也受夠了，今天發生了什麼事？ B：他們終於坐下來，【和平地】解決了問題，現在每家公司都有五個地上漆著公司名稱的車位。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "公開地；坦率地",
    "en_def": "in an honest way, without hiding anything",
    "sentence": "A: Many people on our team are unhappy about the new schedule, but nobody says anything at meetings because they are worried about the boss, so what can we do? B: The boss should invite everyone to talk {{BLANK}} about their concerns, and promise that no one will get into trouble for sharing an honest opinion.",
    "cn": "A：我們團隊很多人對新的排班不滿，但開會時沒人敢說話，因為他們擔心老闆，我們能怎麼辦？ B：老闆應該邀請大家【坦率地】說出他們的顧慮，並承諾沒有人會因為說出真心話而惹上麻煩。"
  }
];

const MCQS = [
  {
    "q": "The two companies are in a _____ over the unpaid bill. Their lawyers will meet next week to discuss it.",
    "options": [
      "anger",
      "dispute",
      "frustration",
      "tension"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Jenny had a small _____ with her coworker about the office temperature. They made up the next morning over coffee.",
    "options": [
      "resolution",
      "compromise",
      "criticism",
      "quarrel"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "A _____ between the two managers slowed down the project. Each of them wanted to use a different supplier.",
    "options": [
      "resolution",
      "compromise",
      "conflict",
      "frustration"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The city council will hold a public _____ on the new bus routes. Residents may share their views for three minutes each.",
    "options": [
      "debate",
      "hostility",
      "anger",
      "accusation"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Many employees _____ with the new dress code. They say it is too strict for a hot summer.",
    "options": [
      "negotiate",
      "disagree",
      "reconcile",
      "escalate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The two partners often _____ about money. However, they always agree on how to treat their customers.",
    "options": [
      "argue",
      "justify",
      "defend",
      "contest"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company plans to _____ the court's decision. Its lawyers believe the judge made a serious mistake.",
    "options": [
      "reconcile",
      "provoke",
      "disagree",
      "contest"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Local farmers _____ the plan to build a factory near the river. They fear it will pollute their fields.",
    "options": [
      "disagree",
      "argue",
      "oppose",
      "reconcile"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The hotel received a _____ about the noisy air conditioner. The manager moved the guest to a quieter room.",
    "options": [
      "resolution",
      "compromise",
      "debate",
      "complaint"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The manager denied the _____ that he had lied about the sales figures. He showed the original reports to the board.",
    "options": [
      "compromise",
      "accusation",
      "resolution",
      "tension"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please do not _____ the new staff for the delay. The system error was not their fault at all.",
    "options": [
      "blame",
      "negotiate",
      "reconcile",
      "assert"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The new website received a lot of _____ from users. Many said it was difficult to find the contact page.",
    "options": [
      "compromise",
      "resolution",
      "criticism",
      "hostility"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "There has been _____ in the office since the job cuts were announced. People are nervous about their future.",
    "options": [
      "tension",
      "complaint",
      "resolution",
      "debate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The customers' _____ grew as the flight was delayed again. Several of them demanded to speak to a manager.",
    "options": [
      "compromise",
      "resolution",
      "frustration",
      "criticism"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "If the problem is not solved soon, it could _____ into a legal case. Both sides want to avoid that.",
    "options": [
      "reconcile",
      "escalate",
      "justify",
      "defend"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The rude comment was meant to _____ the speaker. However, she stayed calm and continued her presentation.",
    "options": [
      "reconcile",
      "justify",
      "negotiate",
      "provoke"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The manager had to _____ her team's decision at the board meeting. She explained why they chose the cheaper supplier.",
    "options": [
      "provoke",
      "defend",
      "escalate",
      "oppose"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "It is hard to _____ such a high price for a basic phone. Most competitors sell similar models for half the cost.",
    "options": [
      "provoke",
      "escalate",
      "argue",
      "justify"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "After a long meeting, the two sides reached a _____. Each agreed to pay half of the repair costs.",
    "options": [
      "complaint",
      "criticism",
      "compromise",
      "quarrel"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The union is hoping for a quick _____ to the pay dispute. Workers want to return to their jobs soon.",
    "options": [
      "resolution",
      "complaint",
      "hostility",
      "accusation"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "A mutual friend helped the two business partners _____. They had not spoken for over a year.",
    "options": [
      "oppose",
      "reconcile",
      "provoke",
      "escalate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Our purchasing manager will _____ a new contract with the supplier. She hopes to get a lower price this year.",
    "options": [
      "disagree",
      "provoke",
      "negotiate",
      "escalate"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Please stay _____ during the fire drill. Walk slowly to the nearest exit and wait outside in the parking lot.",
    "options": [
      "heated",
      "hostile",
      "verbal",
      "calm"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The meeting turned into a _____ argument about the budget. The chairperson had to stop it for ten minutes.",
    "options": [
      "heated",
      "calm",
      "verbal",
      "hostile"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "He received a _____ warning from his supervisor for being late. A written warning will follow if it happens again.",
    "options": [
      "heated",
      "hostile",
      "verbal",
      "calm"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The workers were _____ toward the new owners at first. They worried that the owners would close the factory.",
    "options": [
      "hostile",
      "calm",
      "verbal",
      "heated"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The protest ended _____ in the afternoon. The police reported no injuries and no damage to the buildings.",
    "options": [
      "openly",
      "peacefully",
      "heated",
      "hostile"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The CEO spoke _____ about the company's problems at the meeting. Employees were thankful for her honesty.",
    "options": [
      "peacefully",
      "verbal",
      "calm",
      "openly"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The rude email caused real _____ among the staff. Several people asked the manager to make the writer apologize.",
    "options": [
      "compromise",
      "resolution",
      "anger",
      "debate"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The lawyer will _____ that her client is innocent. She has strong evidence from three witnesses.",
    "options": [
      "reconcile",
      "escalate",
      "provoke",
      "assert"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "dispute": {
    "pos": "n.",
    "en_def": "a serious disagreement, often between groups or companies",
    "cn_def": "糾紛；爭議"
  },
  "quarrel": {
    "pos": "n.",
    "en_def": "an angry argument between people who know each other",
    "cn_def": "爭吵；口角"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a situation where people strongly disagree or want different things",
    "cn_def": "衝突"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a discussion in which people give different opinions on a subject",
    "cn_def": "辯論；討論"
  },
  "clash": {
    "pos": "n.",
    "en_def": "a short, strong disagreement or fight",
    "cn_def": "衝突；交鋒"
  },
  "disagree": {
    "pos": "v.",
    "en_def": "to have a different opinion from someone",
    "cn_def": "不同意；意見不合"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to speak angrily with someone because you disagree",
    "cn_def": "爭論；爭吵"
  },
  "contest": {
    "pos": "v.",
    "en_def": "to formally say that a decision or result is wrong",
    "cn_def": "對…提出異議；爭辯"
  },
  "oppose": {
    "pos": "v.",
    "en_def": "to disagree with a plan and try to stop it",
    "cn_def": "反對"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that you are unhappy about something",
    "cn_def": "抱怨；客訴"
  },
  "accusation": {
    "pos": "n.",
    "en_def": "a statement saying that someone has done something wrong",
    "cn_def": "指控；指責"
  },
  "blame": {
    "pos": "v.",
    "en_def": "to say that someone is responsible for something bad",
    "cn_def": "責怪；歸咎"
  },
  "criticism": {
    "pos": "n.",
    "en_def": "words that say what is bad or wrong about something",
    "cn_def": "批評"
  },
  "tension": {
    "pos": "n.",
    "en_def": "a feeling of worry and anger between people",
    "cn_def": "緊張（關係）"
  },
  "hostility": {
    "pos": "n.",
    "en_def": "unfriendly and angry feelings or behavior",
    "cn_def": "敵意"
  },
  "anger": {
    "pos": "n.",
    "en_def": "a strong feeling you have when something is unfair or wrong",
    "cn_def": "憤怒；怒氣"
  },
  "frustration": {
    "pos": "n.",
    "en_def": "the feeling of being upset because you cannot do what you want",
    "cn_def": "挫折感；沮喪"
  },
  "escalate": {
    "pos": "v.",
    "en_def": "to become more serious or worse",
    "cn_def": "升級；惡化"
  },
  "provoke": {
    "pos": "v.",
    "en_def": "to cause a strong, often angry reaction",
    "cn_def": "激起；挑釁"
  },
  "defend": {
    "pos": "v.",
    "en_def": "to speak in support of someone or something that is criticized",
    "cn_def": "為…辯護；捍衛"
  },
  "justify": {
    "pos": "v.",
    "en_def": "to give a good reason for something",
    "cn_def": "證明…有理；為…辯解"
  },
  "assert": {
    "pos": "v.",
    "en_def": "to say something firmly and with confidence",
    "cn_def": "斷言；堅稱"
  },
  "counter": {
    "pos": "v.",
    "en_def": "to answer an argument by giving a different opinion",
    "cn_def": "反駁；回應"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement in which each side gives up something it wants",
    "cn_def": "妥協；折衷"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "the act of solving a problem or ending a disagreement",
    "cn_def": "解決（方法）"
  },
  "reconcile": {
    "pos": "v.",
    "en_def": "to become friendly with someone again after an argument",
    "cn_def": "和解；使和好"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something in order to reach an agreement",
    "cn_def": "談判；協商"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "quiet and not angry or nervous",
    "cn_def": "冷靜的；平靜的"
  },
  "heated": {
    "pos": "adj.",
    "en_def": "full of angry and excited feelings",
    "cn_def": "激烈的；激動的"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "spoken, not written",
    "cn_def": "口頭的；言語的"
  },
  "hostile": {
    "pos": "adj.",
    "en_def": "very unfriendly and ready to argue",
    "cn_def": "有敵意的；不友善的"
  },
  "peacefully": {
    "pos": "adv.",
    "en_def": "in a calm way without fighting or arguing",
    "cn_def": "和平地；平靜地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "in an honest way, without hiding anything",
    "cn_def": "公開地；坦率地"
  }
};

const EXTRA_GLOSSES = {};
