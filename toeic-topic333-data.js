// Topic 333 Quiz Data: Returned Product 退貨
// Source word list: https://www.examword.com/group-topic/returned-product — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T333 - Returned Product 退貨",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "refund",
    "pos": "n.",
    "cn_def": "退款",
    "en_def": "money that is paid back to a customer",
    "sentence": "A: The customer who bought the coffee machine last week called again this morning, and she sounded very upset about the broken handle. What should I tell her? B: Tell her she can bring it back to any of our stores before Friday, and we will give her a full {{BLANK}} or a new machine.",
    "cn": "A：上週買咖啡機的那位顧客今天早上又打電話來了，她對把手壞掉這件事聽起來很不高興。我該怎麼跟她說？ B：告訴她週五以前可以把它拿到我們任何一家門市，我們會給她全額【退款】或換一台新機器。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "交換；更換",
    "en_def": "to give something back and get a different thing instead",
    "sentence": "A: My manager bought a jacket for the company trip, but it is too small for him, and the trip starts next Monday. Is there anything we can do? B: Yes, if he keeps the tags on, he can {{BLANK}} it for a larger size at the front counter without paying anything extra.",
    "cn": "A：我的經理為了公司旅遊買了一件外套，但對他來說太小了，而旅遊下週一就開始了。我們能做些什麼嗎？ B：可以，只要他保留標籤，就可以在前面的櫃台免費【更換】成大一號的尺寸。"
  },
  {
    "word": "replacement",
    "pos": "n.",
    "cn_def": "替換品；更換的東西",
    "en_def": "a new thing that is used instead of a broken or wrong one",
    "sentence": "A: The printer we ordered for the accounting office stopped working after only two days, and the team needs it to print the monthly reports. What did the supplier say? B: They apologized and promised to send a {{BLANK}} by express delivery, so it should arrive tomorrow before lunch.",
    "cn": "A：我們為會計辦公室訂的印表機只用了兩天就壞了，而團隊需要它來列印月報。供應商怎麼說？ B：他們道了歉，並承諾用快遞寄一台【替換品】過來，所以明天中午前應該就會送到。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保證書",
    "en_def": "a written promise that a company will repair or replace a product for a certain time",
    "sentence": "A: The screen on my new laptop went black yesterday while I was preparing slides for the sales meeting. Do I have to pay for the repair myself? B: No, you bought it only three months ago, so it is still under {{BLANK}}, and the store will fix it for free.",
    "cn": "A：我昨天在準備業務會議的投影片時，新筆電的螢幕突然變黑了。我得自己付修理費嗎？ B：不用，你才三個月前買的，所以還在【保固】期內，店家會免費幫你修好。"
  },
  {
    "word": "guarantee",
    "pos": "n.",
    "cn_def": "保證；擔保",
    "en_def": "a promise that something will be done or that money will be returned",
    "sentence": "A: Why are so many customers choosing our online shop instead of the big stores downtown, even though our prices are a little higher? B: I think it is because we offer a thirty-day money-back {{BLANK}}, so people feel safe trying our products without any risk.",
    "cn": "A：為什麼這麼多顧客選擇我們的網路商店，而不是市中心的大型商店，即使我們的價格稍微高一點？ B：我想是因為我們提供三十天退費【保證】，所以人們覺得試用我們的產品很安心，沒有任何風險。"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "cn_def": "收據；發票",
    "en_def": "a piece of paper that shows you have paid for something",
    "sentence": "A: A man at the service desk wants to return a pair of shoes he bought last weekend, but the box looks a little damaged. Can we accept them? B: Yes, as long as he can show us the {{BLANK}} with the date of purchase, we can take them back.",
    "cn": "A：服務台有位男士想退回上週末買的一雙鞋，但鞋盒看起來有點損壞。我們可以接受嗎？ B：可以，只要他能出示上面有購買日期的【收據】，我們就可以收回。"
  },
  {
    "word": "invoice",
    "pos": "n.",
    "cn_def": "發票；請款單",
    "en_def": "a document that lists goods or services and how much must be paid",
    "sentence": "A: The office supply company charged us for twenty chairs, but we sent five of them back because they were the wrong color. What should we do? B: Call their billing department and ask them to send us a corrected {{BLANK}} before we pay anything this month.",
    "cn": "A：辦公用品公司向我們收了二十張椅子的錢，但我們因為顏色不對退回了其中五張。我們該怎麼辦？ B：打電話給他們的帳務部門，請他們在我們這個月付款之前寄一份更正後的【請款單】給我們。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；規定",
    "en_def": "a set of rules that a company follows",
    "sentence": "A: A customer says he wants his money back for a blender he used for six weeks, and he is getting angry at the cashier. How should we handle it? B: Politely explain that our return {{BLANK}} only allows refunds within thirty days, but offer him a discount on his next purchase.",
    "cn": "A：有位顧客說他用了六週的果汁機想要退錢，而且他對收銀員越來越生氣。我們該怎麼處理？ B：禮貌地解釋我們的退貨【政策】只允許三十天內退款，但可以給他下次購物的折扣。"
  },
  {
    "word": "condition",
    "pos": "n.",
    "cn_def": "狀況；狀態",
    "en_def": "the state that something is in, such as new, used or broken",
    "sentence": "A: Can I return this lamp even though I opened the box and put it on my desk for a day? B: Yes, you can, but it must be in its original {{BLANK}}, which means there should be no scratches, and all of the parts and the instructions must be included.",
    "cn": "A：雖然我打開了盒子，還把這盞檯燈放在桌上用了一天，我還能退貨嗎？ B：可以，但它必須保持原本的【狀況】，也就是說不能有刮痕，而且所有零件和說明書都必須附上。"
  },
  {
    "word": "defective",
    "pos": "adj.",
    "cn_def": "有缺陷的；有瑕疵的",
    "en_def": "not made correctly or not working because of a mistake in production",
    "sentence": "A: Why did the factory stop sending the new phone chargers to the stores in the north this week? B: The quality team found that many of them were {{BLANK}} and could get too hot, so the company decided to check every box before shipping any more.",
    "cn": "A：為什麼工廠這週停止把新的手機充電器送到北部的門市？ B：品管團隊發現其中很多是【有瑕疵的】，可能會過熱，所以公司決定在出貨前檢查每一箱。"
  },
  {
    "word": "damaged",
    "pos": "adj.",
    "cn_def": "損壞的；受損的",
    "en_def": "harmed or broken, so it does not look or work as it should",
    "sentence": "A: The delivery driver just brought the new glasses for the restaurant, but I heard a strange noise when he put the boxes down. Should I sign for them? B: Open the boxes first, and if any glasses are {{BLANK}}, write it on the form and take photos before you sign.",
    "cn": "A：送貨司機剛把餐廳的新玻璃杯送來，但他放下箱子時我聽到奇怪的聲音。我該簽收嗎？ B：先打開箱子，如果有任何杯子是【損壞的】，就寫在表單上並拍照，然後再簽名。"
  },
  {
    "word": "faulty",
    "pos": "adj.",
    "cn_def": "有故障的；有毛病的",
    "en_def": "not working correctly",
    "sentence": "A: The air conditioner in the meeting room keeps turning off by itself, and we have an important visitor from Japan this afternoon. What is wrong with it? B: The technician said the remote control is {{BLANK}}, so he is bringing a new one from the store before lunch.",
    "cn": "A：會議室的冷氣一直自己關掉，而我們今天下午有一位從日本來的重要訪客。它到底怎麼了？ B：技術人員說是遙控器【有故障】，所以他會在午餐前從店裡帶一個新的過來。"
  },
  {
    "word": "unused",
    "pos": "adj.",
    "cn_def": "未使用過的；全新的",
    "en_def": "not used yet; still new",
    "sentence": "A: I bought two boxes of printer paper for the office party flyers, but we only needed one box in the end. Can I take the other box back? B: Sure, the store accepts returns of {{BLANK}} items for two weeks, so bring it back with the receipt this weekend.",
    "cn": "A：我為了辦公室派對的傳單買了兩箱影印紙，但最後只用了一箱。我可以把另一箱拿去退嗎？ B：當然，那家店兩週內接受【未使用過的】商品退貨，所以這個週末帶著收據拿去退吧。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原本的；原始的",
    "en_def": "the first one; the one that was there from the beginning",
    "sentence": "A: I want to send back the headphones I ordered online because the sound quality is not very good. Do I need to find a new box to ship them in? B: No, it is better to put them back in the {{BLANK}} box with all the cables, because the seller checks everything carefully.",
    "cn": "A：我想把網購的耳機退回去，因為音質不太好。我需要找一個新的箱子來寄嗎？ B：不用，最好把它和所有線材一起放回【原本的】盒子裡，因為賣家會仔細檢查所有東西。"
  },
  {
    "word": "packaging",
    "pos": "n.",
    "cn_def": "包裝；包裝材料",
    "en_def": "the boxes, bags and plastic used to wrap a product",
    "sentence": "A: Our customers keep complaining that the glass bottles break during delivery, and we lose money on every return. What can we do about it? B: We should use stronger {{BLANK}} with more paper and foam inside, even if it costs a little more to ship each order.",
    "cn": "A：我們的顧客一直抱怨玻璃瓶在運送途中破掉，而我們每次退貨都會虧錢。我們能怎麼做？ B：我們應該用更堅固、裡面有更多紙和泡棉的【包裝】，即使每筆訂單的運費會稍微貴一點。"
  },
  {
    "word": "return label",
    "pos": "n.phr.",
    "cn_def": "退貨標籤",
    "en_def": "a printed address sticker you put on a box to send a product back",
    "sentence": "A: I filled out the online form to send back the office chair, but I am not sure how to mail such a big box. What should I do next? B: The company will email you a free {{BLANK}}, so just print it, stick it on the box, and take it to the post office.",
    "cn": "A：我已經填好線上表單要退回辦公椅，但我不確定要怎麼寄這麼大的箱子。接下來我該怎麼做？ B：公司會用電子郵件寄給你一張免費的【退貨標籤】，你只要印出來貼在箱子上，然後拿到郵局就好。"
  },
  {
    "word": "shipping",
    "pos": "n.",
    "cn_def": "運送；運費",
    "en_def": "the act or cost of sending goods from one place to another",
    "sentence": "A: If I send back the boots I bought online last week because they do not fit, will I have to pay to mail them back? B: No, the store pays for return {{BLANK}} on all shoes, so you only need to pack them and drop the box at a convenience store.",
    "cn": "A：如果我因為尺寸不合把上週網購的靴子退回去，我需要付寄回的費用嗎？ B：不用，那家店所有鞋子的退貨【運費】都由店家負擔，所以你只要打包好，把箱子拿到便利商店就行了。"
  },
  {
    "word": "restock",
    "pos": "v.",
    "cn_def": "補貨；重新上架",
    "en_def": "to put new or returned goods back on the shelves",
    "sentence": "A: A lot of customers brought back the summer dresses after the sale ended last weekend, and the storeroom is full of boxes now. What should we do with them? B: Check each one carefully, and if it is clean and has its tags, {{BLANK}} it on the shelves before the store opens.",
    "cn": "A：上週末特賣結束後，很多顧客把夏季洋裝拿回來退，現在倉庫裡堆滿了箱子。我們該怎麼處理？ B：仔細檢查每一件，如果乾淨又有吊牌，就在開店前把它【重新上架】。"
  },
  {
    "word": "restocking fee",
    "pos": "n.phr.",
    "cn_def": "重新上架費；退貨手續費",
    "en_def": "money a store keeps when you return an item, to pay for its work",
    "sentence": "A: I returned the large television because it did not fit in our living room, but the store did not give me all of my money back. Why not? B: They charged a fifteen percent {{BLANK}} because the box had been opened, and that rule was printed on your receipt.",
    "cn": "A：我因為那台大電視放不進客廳而退貨，但店家沒有把錢全部退給我。為什麼？ B：因為箱子已經被打開過，他們收取了百分之十五的【重新上架費】，而這項規定就印在你的收據上。"
  },
  {
    "word": "customer service",
    "pos": "n.phr.",
    "cn_def": "客服；顧客服務",
    "en_def": "the department that helps buyers with questions and problems",
    "sentence": "A: The coffee maker I ordered for the staff kitchen arrived with a cracked glass pot, and I am not sure where to send it. Who should I talk to? B: Call {{BLANK}} at the number on the website, and they will tell you how to send it back for a new one.",
    "cn": "A：我為員工廚房訂購的咖啡機送來時玻璃壺裂了，我不確定該寄到哪裡。我應該找誰？ B：打網站上的電話給【客服】，他們會告訴你怎麼寄回去換一台新的。"
  },
  {
    "word": "complaint",
    "pos": "n.",
    "cn_def": "抱怨；投訴",
    "en_def": "a statement that you are unhappy about something",
    "sentence": "A: Why does the manager look so worried this morning, and why did she cancel the team lunch? B: A regular customer sent a long {{BLANK}} by email about the rude way a cashier treated him when he tried to return a jacket yesterday afternoon.",
    "cn": "A：為什麼經理今天早上看起來這麼擔心，還取消了團隊午餐？ B：一位常客寄了一封很長的電子郵件【投訴】，內容是關於昨天下午他想退一件外套時，收銀員對他態度很無禮。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；檢驗",
    "en_def": "a careful check to find any problems",
    "sentence": "A: How long will it take for my money to come back after I send the broken vacuum cleaner to your warehouse? B: After it arrives, our team will do a quick {{BLANK}} to make sure all the parts are there, and then the refund usually takes about five working days.",
    "cn": "A：我把壞掉的吸塵器寄到你們倉庫後，要多久才能拿回我的錢？ B：送達後，我們團隊會做一次快速的【檢查】，確認所有零件都在，之後退款通常需要大約五個工作天。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "批准；核准",
    "en_def": "permission or agreement from someone in charge",
    "sentence": "A: A customer wants to return an expensive camera that he bought almost two months ago, which is past our normal time limit. Can I accept it myself? B: No, you need the store manager's {{BLANK}} first, so please ask him to come to the counter before you do anything.",
    "cn": "A：有位顧客想退一台快兩個月前買的昂貴相機，已經超過我們一般的期限了。我可以自己接受嗎？ B：不行，你需要先得到店經理的【核准】，所以在你採取任何行動前，請他到櫃台來。"
  },
  {
    "word": "process",
    "pos": "v.",
    "cn_def": "處理；辦理",
    "en_def": "to deal with something officially in a series of steps",
    "sentence": "A: I sent back the broken phone case two weeks ago, but I still have not received my money. Is there a problem with my order? B: I am sorry for the wait; we have many returns after the holiday sale, but we will {{BLANK}} your refund by Friday at the latest.",
    "cn": "A：我兩週前寄回了壞掉的手機殼，但到現在還沒收到錢。我的訂單有問題嗎？ B：很抱歉讓您久等了；假日特賣後我們有很多退貨，但最晚週五前會【處理】好您的退款。"
  },
  {
    "word": "authorize",
    "pos": "v.",
    "cn_def": "授權；批准",
    "en_def": "to give official permission for something",
    "sentence": "A: The customer at counter three wants his money back in cash, but he paid by credit card last week. Can I do that for him? B: Only a supervisor can {{BLANK}} a cash refund for a card payment, so please call Ms. Lin from the office to help you.",
    "cn": "A：三號櫃台的顧客想要現金退款，但他上週是刷信用卡付款的。我可以幫他這樣做嗎？ B：只有主管能【授權】信用卡付款改以現金退款，所以請打電話請辦公室的林小姐來協助你。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "抵用金；購物額度",
    "en_def": "an amount of money you can use later in the same store instead of cash",
    "sentence": "A: I want to return this sweater because the color looks different from the online photo, but I lost the receipt. Can I still get anything? B: Without a receipt, we cannot give you cash, but we can give you store {{BLANK}} that you can use on anything in the shop.",
    "cn": "A：我想退這件毛衣，因為顏色看起來和網路上的照片不一樣，但我把收據弄丟了。我還能拿到什麼嗎？ B：沒有收據的話，我們無法退現金，但可以給您店內【抵用金】，可用來購買店裡任何商品。"
  },
  {
    "word": "dispute",
    "pos": "v.",
    "cn_def": "對……提出異議；爭議",
    "en_def": "to say officially that something is wrong and you do not agree with it",
    "sentence": "A: The online shop still charged my credit card for the desk I sent back last month, and they are not answering my emails. What can I do? B: You can call your bank and {{BLANK}} the charge, and they will usually hold the money until the problem is solved.",
    "cn": "A：那家網路商店仍然向我的信用卡收了上個月我退回的那張書桌的錢，而且他們都不回我的電子郵件。我能怎麼辦？ B：你可以打電話給銀行，對這筆款項【提出異議】，他們通常會暫扣這筆錢直到問題解決。"
  },
  {
    "word": "eligible",
    "pos": "adj.",
    "cn_def": "有資格的；符合條件的",
    "en_def": "allowed to do or get something because you meet the rules",
    "sentence": "A: I bought this blender during the big holiday sale, and now I want to send it back because it is too loud. Can I get my money back? B: Let me check, but sale items are usually {{BLANK}} for a refund only if they are returned within fourteen days.",
    "cn": "A：我在假日大特賣時買了這台果汁機，現在因為它太吵想退回。我能拿回我的錢嗎？ B：讓我查一下，不過特價商品通常只有在十四天內退回，才【有資格】退款。"
  },
  {
    "word": "deadline",
    "pos": "n.",
    "cn_def": "截止期限",
    "en_def": "the latest time or date by which something must be done",
    "sentence": "A: I am going on a business trip to Singapore for two weeks, but I still need to send back the camera bag I ordered. Is that a problem? B: Yes, the {{BLANK}} for returns is next Tuesday, so you should mail it before you leave for the airport.",
    "cn": "A：我要去新加坡出差兩週，但我還需要把訂購的相機包寄回去。這會有問題嗎？ B：會，退貨的【截止期限】是下週二，所以你應該在去機場之前把它寄出去。"
  },
  {
    "word": "claim",
    "pos": "n.",
    "cn_def": "索賠；申請",
    "en_def": "an official request for money or for something you have a right to",
    "sentence": "A: The washing machine we bought for the hotel laundry room broke after six months, and the repair will be very expensive. What should we do? B: Since it is still covered, we can make a warranty {{BLANK}} online and ask the company to pay for the repair.",
    "cn": "A：我們為飯店洗衣房買的洗衣機用了六個月就壞了，而修理費會非常貴。我們該怎麼辦？ B：既然它還在保固範圍內，我們可以上網提出保固【申請】，請公司支付修理費用。"
  },
  {
    "word": "compensation",
    "pos": "n.",
    "cn_def": "賠償；補償",
    "en_def": "money or something else given to someone because of a loss or problem",
    "sentence": "A: Our new sofa arrived three weeks late, and the delivery men also scratched our wooden floor when they carried it in. Will the store do anything? B: I called them this morning, and they offered us a hundred dollars as {{BLANK}} for the delay and the damage.",
    "cn": "A：我們的新沙發晚了三週才送到，而且送貨員搬進來時還刮傷了我們的木地板。店家會做些什麼嗎？ B：我今天早上打給他們了，他們提供一百美元作為延遲和損壞的【賠償】。"
  },
  {
    "word": "returnable",
    "pos": "adj.",
    "cn_def": "可退貨的；可退還的",
    "en_def": "able to be taken back to the store for money or another item",
    "sentence": "A: I am thinking about buying these expensive earrings as a birthday gift for my colleague, but I am not sure she will like the style. What do you think? B: Ask the salesclerk first, because jewelry is often not {{BLANK}} once it leaves the store, even with a receipt.",
    "cn": "A：我在考慮買這副昂貴的耳環當作同事的生日禮物，但不確定她會喜歡這個款式。你覺得呢？ B：先問問店員，因為珠寶一旦離開店裡通常就不【可退貨】，即使有收據也一樣。"
  }
];

const MCQS = [
  {
    "q": "The new speakers stopped working after one day. The store gave the customer a full _____ after checking his receipt.",
    "options": [
      "refund",
      "policy",
      "packaging",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "This jacket comes in five colors. You may _____ it for another color within ten days if you keep the tags.",
    "options": [
      "dispute",
      "exchange",
      "authorize",
      "restock"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Our technician cannot repair the broken scanner. The supplier has agreed to ship a _____ to our office this week.",
    "options": [
      "complaint",
      "receipt",
      "replacement",
      "deadline"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The microwave stopped heating after eight months. Luckily, the two-year _____ covers all repairs and parts.",
    "options": [
      "invoice",
      "shipping",
      "complaint",
      "warranty"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Every item in our catalog comes with a lifetime _____. If anything breaks, we will repair or replace it.",
    "options": [
      "packaging",
      "guarantee",
      "inspection",
      "deadline"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please keep your _____ in a safe place. You will need it to show the date of purchase for any return.",
    "options": [
      "receipt",
      "compensation",
      "approval",
      "condition"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Accounting found an error on the supplier's _____. We were charged for thirty laptops but received only twenty-five.",
    "options": [
      "warranty",
      "guarantee",
      "complaint",
      "invoice"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our store's return _____ is posted near every cash register. It explains which items can be returned and when.",
    "options": [
      "shipping",
      "credit",
      "policy",
      "claim"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The used car is ten years old. However, it is still in excellent _____ because the owner took good care of it.",
    "options": [
      "condition",
      "approval",
      "credit",
      "dispute"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The factory recalled all of the hair dryers. A _____ switch could cause them to overheat during use.",
    "options": [
      "unused",
      "eligible",
      "faulty",
      "returnable"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Several boxes were _____ when the truck hit a hole in the road. The driver reported the problem to the warehouse.",
    "options": [
      "eligible",
      "damaged",
      "unused",
      "original"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Thousands of _____ batteries were sent back to the manufacturer. They were made with a mistake in the production line.",
    "options": [
      "returnable",
      "original",
      "eligible",
      "defective"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The gift cards are still _____ and in their envelopes. The customer can return them for store credit before Friday.",
    "options": [
      "faulty",
      "damaged",
      "unused",
      "defective"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please return the speaker in its _____ box. Items sent in other boxes may take longer to inspect.",
    "options": [
      "original",
      "eligible",
      "faulty",
      "defective"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company switched to recycled paper for its _____. Customers praised the change because it reduces plastic waste.",
    "options": [
      "receipt",
      "approval",
      "deadline",
      "packaging"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Print the _____ attached to this email. Then attach it to the box and drop it off at any post office.",
    "options": [
      "restocking fee",
      "return label",
      "invoice",
      "warranty"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Orders over fifty dollars include free _____. Smaller orders cost five dollars to deliver anywhere in Taiwan.",
    "options": [
      "shipping",
      "policy",
      "condition",
      "inspection"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The warehouse staff will _____ the returned shirts tonight. They must be back on the shelves before the weekend sale.",
    "options": [
      "dispute",
      "exchange",
      "authorize",
      "restock"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Opened electronics may be returned within thirty days. A ten percent _____ will be taken from the refund amount.",
    "options": [
      "return label",
      "restocking fee",
      "customer service",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "If you have any questions about your order, please contact _____. Our staff are available twenty-four hours a day.",
    "options": [
      "return label",
      "restocking fee",
      "customer service",
      "warranty"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The hotel manager received a _____ about the noisy air conditioner. She moved the guest to a quieter room immediately.",
    "options": [
      "guarantee",
      "refund",
      "credit",
      "complaint"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Every returned laptop goes through a careful _____. Technicians check the screen, battery, and keyboard before giving a refund.",
    "options": [
      "inspection",
      "receipt",
      "compensation",
      "policy"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Refunds over five hundred dollars require the manager's _____. Please do not finish the return until she signs the form.",
    "options": [
      "packaging",
      "shipping",
      "approval",
      "condition"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Our online system can _____ up to two hundred returns per day. Most customers receive their money within a week.",
    "options": [
      "restock",
      "process",
      "dispute",
      "exchange"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Only the store manager can _____ returns without a receipt. Cashiers must call her before accepting such items.",
    "options": [
      "authorize",
      "restock",
      "exchange",
      "dispute"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The customer did not have a receipt for the shoes. Instead of cash, he received store _____ for the full amount.",
    "options": [
      "claim",
      "credit",
      "invoice",
      "complaint"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Mr. Chen decided to _____ the charge with his bank. The seller had never sent the refund for the returned printer.",
    "options": [
      "authorize",
      "process",
      "restock",
      "dispute"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Members of our rewards club are _____ for free returns. Other customers must pay a small shipping charge.",
    "options": [
      "faulty",
      "damaged",
      "eligible",
      "unused"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The _____ for returning holiday gifts has been extended to January 31. Customers now have more time to bring items back.",
    "options": [
      "guarantee",
      "deadline",
      "credit",
      "policy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The airline offered _____ to passengers whose bags were damaged. Each traveler received a travel voucher worth two hundred dollars.",
    "options": [
      "inspection",
      "approval",
      "packaging",
      "compensation"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "refund": {
    "pos": "n.",
    "en_def": "money that is paid back to a customer",
    "cn_def": "退款"
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something back and get a different thing instead",
    "cn_def": "交換；更換"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new thing that is used instead of a broken or wrong one",
    "cn_def": "替換品；更換的東西"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise that a company will repair or replace a product for a certain time",
    "cn_def": "保固；保證書"
  },
  "guarantee": {
    "pos": "n.",
    "en_def": "a promise that something will be done or that money will be returned",
    "cn_def": "保證；擔保"
  },
  "receipt": {
    "pos": "n.",
    "en_def": "a piece of paper that shows you have paid for something",
    "cn_def": "收據；發票"
  },
  "invoice": {
    "pos": "n.",
    "en_def": "a document that lists goods or services and how much must be paid",
    "cn_def": "發票；請款單"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of rules that a company follows",
    "cn_def": "政策；規定"
  },
  "condition": {
    "pos": "n.",
    "en_def": "the state that something is in, such as new, used or broken",
    "cn_def": "狀況；狀態"
  },
  "defective": {
    "pos": "adj.",
    "en_def": "not made correctly or not working because of a mistake in production",
    "cn_def": "有缺陷的；有瑕疵的"
  },
  "damaged": {
    "pos": "adj.",
    "en_def": "harmed or broken, so it does not look or work as it should",
    "cn_def": "損壞的；受損的"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly",
    "cn_def": "有故障的；有毛病的"
  },
  "unused": {
    "pos": "adj.",
    "en_def": "not used yet; still new",
    "cn_def": "未使用過的；全新的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "the first one; the one that was there from the beginning",
    "cn_def": "原本的；原始的"
  },
  "packaging": {
    "pos": "n.",
    "en_def": "the boxes, bags and plastic used to wrap a product",
    "cn_def": "包裝；包裝材料"
  },
  "return label": {
    "pos": "n.phr.",
    "en_def": "a printed address sticker you put on a box to send a product back",
    "cn_def": "退貨標籤"
  },
  "shipping": {
    "pos": "n.",
    "en_def": "the act or cost of sending goods from one place to another",
    "cn_def": "運送；運費"
  },
  "restock": {
    "pos": "v.",
    "en_def": "to put new or returned goods back on the shelves",
    "cn_def": "補貨；重新上架"
  },
  "restocking fee": {
    "pos": "n.phr.",
    "en_def": "money a store keeps when you return an item, to pay for its work",
    "cn_def": "重新上架費；退貨手續費"
  },
  "customer service": {
    "pos": "n.phr.",
    "en_def": "the department that helps buyers with questions and problems",
    "cn_def": "客服；顧客服務"
  },
  "complaint": {
    "pos": "n.",
    "en_def": "a statement that you are unhappy about something",
    "cn_def": "抱怨；投訴"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "a careful check to find any problems",
    "cn_def": "檢查；檢驗"
  },
  "approval": {
    "pos": "n.",
    "en_def": "permission or agreement from someone in charge",
    "cn_def": "批准；核准"
  },
  "process": {
    "pos": "v.",
    "en_def": "to deal with something officially in a series of steps",
    "cn_def": "處理；辦理"
  },
  "authorize": {
    "pos": "v.",
    "en_def": "to give official permission for something",
    "cn_def": "授權；批准"
  },
  "credit": {
    "pos": "n.",
    "en_def": "an amount of money you can use later in the same store instead of cash",
    "cn_def": "抵用金；購物額度"
  },
  "dispute": {
    "pos": "v.",
    "en_def": "to say officially that something is wrong and you do not agree with it",
    "cn_def": "對……提出異議；爭議"
  },
  "eligible": {
    "pos": "adj.",
    "en_def": "allowed to do or get something because you meet the rules",
    "cn_def": "有資格的；符合條件的"
  },
  "deadline": {
    "pos": "n.",
    "en_def": "the latest time or date by which something must be done",
    "cn_def": "截止期限"
  },
  "claim": {
    "pos": "n.",
    "en_def": "an official request for money or for something you have a right to",
    "cn_def": "索賠；申請"
  },
  "compensation": {
    "pos": "n.",
    "en_def": "money or something else given to someone because of a loss or problem",
    "cn_def": "賠償；補償"
  },
  "returnable": {
    "pos": "adj.",
    "en_def": "able to be taken back to the store for money or another item",
    "cn_def": "可退貨的；可退還的"
  }
};

const EXTRA_GLOSSES = {};
