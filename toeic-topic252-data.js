// Topic 252 Quiz Data: Name 名字
// Source word list: https://www.examword.com/group-topic/name — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T252 - Name 名字",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "surname",
    "pos": "n.",
    "cn_def": "姓氏",
    "en_def": "a family name; your last name",
    "sentence": "A: The receptionist at the clinic said she could not find my appointment, even though I booked it online last Friday. What do you think went wrong? B: She probably searched by your first name only, so ask her to check the system again using your {{BLANK}}, because the records are sorted by family name.",
    "cn": "A：診所的櫃台人員說她找不到我的預約，即使我上週五已經在網路上預約了。你覺得是哪裡出了問題？ B：她可能只用你的名字搜尋，所以請她用你的【姓氏】再查一次系統，因為紀錄是依照姓氏排序的。"
  },
  {
    "word": "given name",
    "pos": "n.phr.",
    "cn_def": "名字（非姓氏）",
    "en_def": "the first name a person gets at birth, not the family name",
    "sentence": "A: When I fill out this visa application for the business trip to Japan, should I write my English name or my Chinese name in the first box? B: You should write your {{BLANK}} exactly as it appears in your passport, and then put your family name in the second box, or the embassy might reject the form.",
    "cn": "A：我填寫這份去日本出差的簽證申請表時，第一格應該寫英文名字還是中文名字？ B：你應該照護照上的寫法填上你的【名字】，然後在第二格填上你的姓氏，否則大使館可能會退件。"
  },
  {
    "word": "nickname",
    "pos": "n.",
    "cn_def": "綽號；暱稱",
    "en_def": "an informal name that friends use for someone",
    "sentence": "A: Why does everyone in the sales department call the new manager \"Speedy\" instead of using his real name during meetings? B: It is a friendly {{BLANK}} his old team gave him because he always answers client emails within ten minutes, and he actually likes it, so nobody thinks it is rude.",
    "cn": "A：為什麼業務部的每個人在開會時都叫新經理「快手」，而不是叫他的本名？ B：那是他以前的團隊給他取的友善【綽號】，因為他總是在十分鐘內回覆客戶的電子郵件，而且他其實很喜歡，所以沒有人覺得那不禮貌。"
  },
  {
    "word": "alias",
    "pos": "n.",
    "cn_def": "化名；別名",
    "en_def": "a false or different name that someone uses",
    "sentence": "A: The security team said someone tried to log in to our customer database last night from an unknown account. Do they know who it was yet? B: Not yet, because the person used an {{BLANK}} instead of a real name, so the IT staff are now checking the computer address and the time of each login attempt.",
    "cn": "A：資安團隊說昨晚有人用不明帳號試圖登入我們的客戶資料庫。他們知道是誰了嗎？ B：還不知道，因為那個人用了一個【化名】而不是真名，所以資訊部門人員現在正在檢查電腦位址和每次登入嘗試的時間。"
  },
  {
    "word": "pseudonym",
    "pos": "n.",
    "cn_def": "筆名；假名",
    "en_def": "a false name that a writer uses instead of a real name",
    "sentence": "A: I really enjoyed the travel book you lent me, but I could not find any information about the author on the publisher's website. Who is she? B: She is actually a famous journalist who writes under a {{BLANK}}, because she wants to keep her private life separate from her work at the newspaper.",
    "cn": "A：我很喜歡你借我的那本旅遊書，但我在出版社網站上找不到任何關於作者的資訊。她是誰？ B：她其實是一位有名的記者，用【筆名】寫作，因為她想把私生活和報社的工作分開。"
  },
  {
    "word": "title",
    "pos": "n.",
    "cn_def": "頭銜；職稱；標題",
    "en_def": "a word that shows a person's job or position, such as Dr. or Manager",
    "sentence": "A: The new business cards arrived this morning, but I think the printing company made a mistake on mine. Can you take a look? B: Yes, your job {{BLANK}} says \"Sales Assistant\" instead of \"Sales Manager,\" so we should phone the printer today and ask them to reprint the whole box before the trade show next week.",
    "cn": "A：新名片今天早上送到了，但我覺得印刷公司把我的印錯了。你可以幫我看一下嗎？ B：對，你的【職稱】寫的是「業務助理」而不是「業務經理」，所以我們今天應該打電話給印刷廠，請他們在下週商展前把整盒重印。"
  },
  {
    "word": "initial",
    "pos": "n.",
    "cn_def": "（姓名的）首字母",
    "en_def": "the first letter of a name",
    "sentence": "A: The bank says the name on my application does not match the name on my passport, but I spelled everything correctly. What could the problem be? B: Your passport shows your middle {{BLANK}}, the letter \"J,\" after your first name, so you need to add it to the form and send it back to the bank by Thursday.",
    "cn": "A：銀行說我申請書上的名字和護照上的不符，但我每個字都拼對了。問題可能出在哪裡？ B：你的護照在名字後面有中間名的【首字母】，也就是字母「J」，所以你需要把它加到表格上，並在星期四前寄回銀行。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分",
    "en_def": "who a person is",
    "sentence": "A: The hotel front desk will not give me a new key card for my room because I left my wallet in the conference hall. What should I do? B: Show them your company badge and the booking email on your phone, which should be enough to prove your {{BLANK}} until you can get your wallet back.",
    "cn": "A：飯店櫃台不肯給我新的房卡，因為我把錢包留在會議廳了。我該怎麼辦？ B：給他們看你的公司識別證和手機上的訂房電子郵件，這應該足以證明你的【身分】，直到你拿回錢包為止。"
  },
  {
    "word": "signature",
    "pos": "n.",
    "cn_def": "簽名",
    "en_def": "your name written by you in your own special way",
    "sentence": "A: The supplier says they cannot ship our order of office chairs this week. Did they explain what the problem is with the contract we sent? B: Yes, they said the contract is missing the director's {{BLANK}} on the last page, so I will ask her to sign it this afternoon and scan it back to them right away.",
    "cn": "A：供應商說他們這週無法出貨我們訂的辦公椅。他們有說明我們寄過去的合約有什麼問題嗎？ B：有，他們說合約最後一頁缺少主任的【簽名】，所以我會請她今天下午簽好，然後馬上掃描傳回給他們。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤",
    "en_def": "a small piece of paper on something that gives information about it",
    "sentence": "A: The warehouse staff keep sending the wrong boxes to our customers in Kaohsiung. Do you know why this keeps happening every week? B: I think the printer is making the address on each shipping {{BLANK}} too small and unclear, so the workers cannot read the customer names correctly when they pack the orders in a hurry.",
    "cn": "A：倉庫人員一直把錯的箱子寄給我們在高雄的客戶。你知道為什麼每週都發生這種事嗎？ B：我想是印表機把每張貨運【標籤】上的地址印得太小又不清楚，所以工人們在匆忙包裝訂單時無法正確讀出客戶的名字。"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "cn_def": "名聲；聲譽",
    "en_def": "the opinion that people have about someone or something",
    "sentence": "A: Why did the board choose that small design company for our new website when there were cheaper options from bigger firms? B: The company has an excellent {{BLANK}} for finishing projects on time, and several of our partners said their customer service was much better than anyone else's in the city.",
    "cn": "A：既然有大公司提供更便宜的選擇，董事會為什麼選那家小設計公司做我們的新網站？ B：那家公司以準時完成專案而享有極佳的【聲譽】，而且我們好幾個合作夥伴都說他們的客服比城裡任何一家都好得多。"
  },
  {
    "word": "fame",
    "pos": "n.",
    "cn_def": "名氣；名聲",
    "en_def": "the state of being known by many people",
    "sentence": "A: The young chef who won that TV cooking contest still works in our small restaurant downtown. Isn't she planning to open her own place? B: Not yet, because she says sudden {{BLANK}} can be stressful, so she wants to learn more about managing staff and costs before she takes such a big risk.",
    "cn": "A：那位贏得電視烹飪比賽的年輕主廚還在我們市中心的小餐廳工作。她不打算自己開店嗎？ B：還沒有，因為她說突如其來的【名氣】可能會帶來壓力，所以她想在冒這麼大的風險之前，多學一些管理員工和成本的知識。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a name that a company gives to its products",
    "sentence": "A: Our customers keep asking for coffee beans from the new local farm instead of the imported ones. Should we change our supplier next month? B: I think we should, since that {{BLANK}} is becoming very popular with young office workers, and offering it in our café could bring in more customers during the busy lunch hours.",
    "cn": "A：我們的顧客一直要求買新的本地農場咖啡豆，而不是進口的。我們下個月應該更換供應商嗎？ B：我覺得應該，因為那個【品牌】在年輕上班族之間越來越受歡迎，在我們咖啡館提供它，可能會在忙碌的午餐時段吸引更多顧客。"
  },
  {
    "word": "register",
    "pos": "v.",
    "cn_def": "登記；註冊；報名",
    "en_def": "to put your name on an official list",
    "sentence": "A: I heard the company is offering a free English writing workshop for staff next month. How can I join it? B: You need to {{BLANK}} on the training website before Friday, because there are only twenty seats, and the human resources department will send a confirmation email to everyone who gets a place.",
    "cn": "A：我聽說公司下個月要為員工開免費的英文寫作工作坊。我要怎麼參加？ B：你需要在星期五前在訓練網站上【報名登記】，因為只有二十個名額，人資部會寄確認信給每位取得名額的人。"
  },
  {
    "word": "rename",
    "pos": "v.",
    "cn_def": "重新命名；改名",
    "en_def": "to give something a new name",
    "sentence": "A: The marketing team thinks our new energy drink is not selling well because people cannot remember what it is called. What do they suggest? B: They want to {{BLANK}} the product with a shorter, catchier word before the summer campaign starts, and they will test three possible choices with customers in our Taipei stores next week.",
    "cn": "A：行銷團隊認為我們的新能量飲料賣得不好，是因為大家記不住它叫什麼。他們有什麼建議？ B：他們想在夏季宣傳活動開始前，用一個更短、更好記的詞為產品【重新命名】，下週會在我們台北的門市找顧客測試三個可能的選項。"
  },
  {
    "word": "identify",
    "pos": "v.",
    "cn_def": "辨認；識別；找出",
    "en_def": "to recognize and say who or what someone or something is",
    "sentence": "A: A customer left a black laptop bag in the meeting room after the training session yesterday afternoon. Do we know who owns it? B: We could not {{BLANK}} the owner at first, but the receptionist found a business card inside the front pocket, so she is phoning the person right now to arrange a pickup time.",
    "cn": "A：昨天下午訓練課程結束後，有位客戶把一個黑色筆電包留在會議室。我們知道是誰的嗎？ B：我們一開始無法【辨識】出主人，但櫃台人員在前面口袋找到一張名片，所以她現在正打電話給那個人安排取件時間。"
  },
  {
    "word": "call",
    "pos": "v.",
    "cn_def": "稱呼；叫做",
    "en_def": "to give someone a name; to use a certain name for someone",
    "sentence": "A: Our new Australian colleague seemed a little uncomfortable when I said \"Mr. Thompson\" during the meeting this morning. Did I do something wrong? B: Not really, but he told me that people in his office back home usually use first names, so he would like everyone here to {{BLANK}} him David.",
    "cn": "A：今天早上開會時我叫我們新來的澳洲同事「湯普森先生」，他好像有點不自在。我做錯了什麼嗎？ B：也不算，但他告訴我，他家鄉的辦公室裡大家通常直呼名字，所以他希望這裡的每個人都【叫】他大衛。"
  },
  {
    "word": "spell",
    "pos": "v.",
    "cn_def": "拼寫；拼字",
    "en_def": "to say or write the letters of a word in the correct order",
    "sentence": "A: The man phoning from the shipping company has a very unusual family name, and I am worried I will write it down incorrectly in the system. What should I do? B: Just politely ask him to {{BLANK}} it for you letter by letter, then read it back to him before you save the information and end the conversation.",
    "cn": "A：貨運公司打來的那位先生姓氏很少見，我擔心我會在系統裡寫錯。我該怎麼辦？ B：就禮貌地請他一個字母一個字母【拼】給你聽，然後在儲存資料、結束通話前再唸一遍給他確認。"
  },
  {
    "word": "pronunciation",
    "pos": "n.",
    "cn_def": "發音",
    "en_def": "the way a word or name is said",
    "sentence": "A: I have to introduce our guest speaker from Poland at the conference tomorrow, but I am not sure how to say her last name. Any ideas? B: You should email her assistant today and ask for the correct {{BLANK}}, because guests usually feel more respected when the host says their name the right way.",
    "cn": "A：我明天要在研討會上介紹我們來自波蘭的特邀講者，但我不確定她的姓怎麼唸。有什麼建議嗎？ B：你應該今天寄電子郵件問她的助理正確的【發音】，因為主持人把名字唸對時，來賓通常會覺得更受尊重。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "suitable for serious or official situations",
    "sentence": "A: I am writing my first email to the new client in Germany, and I do not know whether to start with \"Hi Thomas\" or something else. What do you think? B: For the first message, it is better to use a more {{BLANK}} greeting like \"Dear Mr. Weber,\" and then you can change your style later if he writes back in a relaxed way.",
    "cn": "A：我正在寫第一封電子郵件給德國的新客戶，不知道該用「嗨，湯瑪斯」開頭還是別的方式。你覺得呢？ B：第一封信最好用比較【正式】的問候語，例如「親愛的韋伯先生」，之後如果他回信語氣輕鬆，你再調整你的風格。"
  },
  {
    "word": "informal",
    "pos": "adj.",
    "cn_def": "非正式的",
    "en_def": "relaxed and friendly; not official",
    "sentence": "A: The team leader invited all of us to a dinner on Friday evening to welcome the new interns. Do we need to wear suits to the restaurant? B: No, it is just an {{BLANK}} get-together at a small Italian place near the office, so jeans and a nice shirt are perfectly fine, and everyone will use first names.",
    "cn": "A：組長邀請我們全部人星期五晚上去吃晚餐，歡迎新來的實習生。我們需要穿西裝去餐廳嗎？ B：不用，那只是在辦公室附近一家小義大利餐廳的【非正式】聚會，所以穿牛仔褲和一件好看的襯衫就可以了，而且大家都會直呼名字。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的；獨一無二的",
    "en_def": "being the only one of its kind",
    "sentence": "A: Why does the online system keep saying my new account cannot be created when I type in the user name I want? B: Every user name has to be {{BLANK}}, so someone else is probably already using that one, and you will need to add some numbers or choose a different word before you try again.",
    "cn": "A：為什麼我輸入想要的使用者名稱時，線上系統一直說無法建立新帳號？ B：每個使用者名稱都必須是【獨一無二】的，所以可能已經有別人在用那個名稱了，你需要加一些數字或換個字之後再試一次。"
  },
  {
    "word": "common",
    "pos": "adj.",
    "cn_def": "常見的；普通的",
    "en_def": "happening often or found in many places",
    "sentence": "A: The new hotel receptionist mixed up two guests' reservations last night and gave one of them the wrong room. How did that happen? B: Both guests had the same family name, Chen, which is very {{BLANK}} in Taiwan, so she should have checked their phone numbers or passport details before she gave out the keys.",
    "cn": "A：新的飯店櫃台人員昨晚把兩位客人的訂房搞混，給了其中一位錯的房間。怎麼會這樣？ B：兩位客人都姓陳，這在台灣非常【常見】，所以她在給鑰匙之前應該先核對他們的電話號碼或護照資料。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "法律的；合法的；法定的",
    "en_def": "connected with the law; official according to the law",
    "sentence": "A: When I changed my last name after getting married, I updated my bank account, but do I also need to tell the human resources department? B: Yes, you should, because your {{BLANK}} name must match the one on your tax documents and work contract, or the company could have problems paying your salary next month.",
    "cn": "A：我結婚後改了姓，已經更新了銀行帳戶，但我也需要告訴人資部嗎？ B：需要，因為你的【法定】姓名必須和你的稅務文件及工作合約上的一致，否則公司下個月發薪水可能會有問題。"
  },
  {
    "word": "maiden name",
    "pos": "n.phr.",
    "cn_def": "娘家姓；婚前姓氏",
    "en_def": "a woman's family name before she got married",
    "sentence": "A: The bank is asking for my mother's family name before she got married as a security question. Why do they need that information? B: Many banks use your mother's {{BLANK}} to check your identity on the phone, because it is information that strangers are unlikely to know, so it helps protect your account.",
    "cn": "A：銀行要我提供我母親婚前的姓氏作為安全問題。他們為什麼需要那個資訊？ B：很多銀行在電話中會用你母親的【娘家姓】來核對你的身分，因為那是陌生人不太可能知道的資訊，所以有助於保護你的帳戶。"
  },
  {
    "word": "full name",
    "pos": "n.phr.",
    "cn_def": "全名",
    "en_def": "all the parts of a person's name",
    "sentence": "A: I am preparing the name badges for the international conference this weekend. Should I print only first names, or do people need more information? B: Please print each guest's {{BLANK}} in large letters and their company underneath, because many visitors will want to exchange business cards and remember who they met.",
    "cn": "A：我正在準備這週末國際研討會的名牌。我應該只印名字，還是大家需要更多資訊？ B：請用大字印出每位來賓的【全名】，並在下面印上他們的公司名稱，因為很多訪客會想交換名片並記住他們見過的人。"
  },
  {
    "word": "stage name",
    "pos": "n.phr.",
    "cn_def": "藝名",
    "en_def": "a name that a performer uses instead of their real name",
    "sentence": "A: The singer we hired for the company's year-end party has a short, catchy name on all the posters. Is that what is written on her contract too? B: No, she performs under a {{BLANK}}, so the contract and the payment form must use her real name, which the event agency already sent to our accounting department.",
    "cn": "A：我們為公司尾牙請的歌手在所有海報上都有一個簡短好記的名字。她的合約上也是寫那個名字嗎？ B：不是，她是用【藝名】表演，所以合約和付款單必須用她的本名，活動公司已經把本名寄給我們的會計部了。"
  },
  {
    "word": "mention",
    "pos": "v.",
    "cn_def": "提到；提及",
    "en_def": "to speak or write about something briefly",
    "sentence": "A: The client seemed really happy with our presentation, but she asked who designed the new logo. Did you tell her about Lisa's work? B: Yes, I made sure to {{BLANK}} Lisa by name at the end of the meeting, because she worked late every night last week to finish the designs.",
    "cn": "A：客戶似乎對我們的簡報非常滿意，但她問新標誌是誰設計的。你有跟她說麗莎的作品嗎？ B：有，我在會議結束時特別指名【提到】麗莎，因為她上週每天都加班到很晚才完成那些設計。"
  },
  {
    "word": "honor",
    "pos": "v.",
    "cn_def": "表揚；向……致敬",
    "en_def": "to show public respect for someone",
    "sentence": "A: Our founder retired last year after thirty years with the company. Is the board planning anything special for her at the anniversary event? B: Yes, they will {{BLANK}} her by naming the new training center after her, and there will be a short video about her career before the dinner starts.",
    "cn": "A：我們的創辦人在公司服務三十年後於去年退休了。董事會打算在週年活動上為她安排什麼特別的嗎？ B：有，他們將以她的名字為新訓練中心命名來【表揚】她，晚宴開始前還會播放一段關於她職業生涯的短片。"
  },
  {
    "word": "anonymous",
    "pos": "adj.",
    "cn_def": "匿名的",
    "en_def": "with a name that is not known or not given",
    "sentence": "A: The manager says she received a complaint about the noise in the open office, but she will not tell us who sent it. Is that fair? B: The survey system is completely {{BLANK}}, so even she does not know who wrote it, and that helps staff share honest opinions without worrying about problems with coworkers.",
    "cn": "A：經理說她收到一則關於開放式辦公室噪音的抱怨，但她不肯告訴我們是誰寄的。這樣公平嗎？ B：那個問卷系統是完全【匿名】的，所以連她也不知道是誰寫的，這有助於員工分享真實的意見，而不必擔心和同事之間產生問題。"
  },
  {
    "word": "familiar",
    "pos": "adj.",
    "cn_def": "熟悉的；眼熟的",
    "en_def": "known to you because you have seen or heard it before",
    "sentence": "A: The man who just walked into the lobby looks like someone I met at the trade fair in Singapore last spring. Do you know him? B: His face looks {{BLANK}} to me too, but I cannot remember his name, so let's check the visitor list at the reception desk before we go over and say hello.",
    "cn": "A：剛走進大廳的那位男士看起來像我去年春天在新加坡商展遇過的人。你認識他嗎？ B：我也覺得他的臉很【眼熟】，但我想不起他的名字，所以在過去打招呼之前，我們先去櫃台查一下訪客名單吧。"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "cn_def": "認出；認得",
    "en_def": "to know who someone is because you have seen them before",
    "sentence": "A: Did you see the actress who came into our bookstore this afternoon to buy some magazines and a few travel guides? B: I did, but I did not {{BLANK}} her at first because she was wearing sunglasses and a big hat, and she paid with a card under a different name.",
    "cn": "A：你有看到今天下午來我們書店買幾本雜誌和旅遊指南的那位女演員嗎？ B：有，但我一開始沒【認出】她，因為她戴著太陽眼鏡和大帽子，而且她用另一個名字的卡付款。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "推薦信；參考；提及",
    "en_def": "a letter or statement about a person's character and ability, usually for a new job",
    "sentence": "A: I am applying for the assistant manager position at the hotel downtown, and they want a letter from a former boss. Can you help me? B: Of course, I would be happy to write you a {{BLANK}}, since you trained many new staff members here and always handled difficult guests calmly and professionally.",
    "cn": "A：我正在應徵市中心那家飯店的副理職位，他們需要一封前上司寫的信。你可以幫我嗎？ B：當然，我很樂意幫你寫一封【推薦信】，因為你在這裡訓練了許多新員工，而且總是冷靜又專業地處理難搞的客人。"
  },
  {
    "word": "credit",
    "pos": "n.",
    "cn_def": "功勞；讚揚",
    "en_def": "praise or recognition for something good that you did",
    "sentence": "A: The new advertising campaign was a big success, and sales went up twenty percent last month. Who came up with the main idea? B: Most of the {{BLANK}} should go to Kevin from the design team, because he suggested using real customers in the videos instead of famous actors, which saved us a lot of money.",
    "cn": "A：新的廣告活動非常成功，上個月銷售成長了百分之二十。主要的點子是誰想出來的？ B：大部分的【功勞】應該歸於設計團隊的凱文，因為他建議在影片中使用真實顧客，而不是知名演員，這幫我們省了很多錢。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell people each other's names when they meet for the first time",
    "sentence": "A: The new marketing director starts on Monday, and I am not sure she knows anyone in the office yet. Should we do something to welcome her? B: Yes, I think you should {{BLANK}} her to each department during the morning tour, and then we can have a small lunch together so people can get to know her.",
    "cn": "A：新的行銷總監星期一上任，我不確定她在辦公室裡是否已經認識任何人。我們應該做些什麼來歡迎她嗎？ B：應該，我覺得你應該在早上的參觀行程中把她【介紹】給各個部門，然後我們可以一起吃個簡單的午餐，讓大家認識她。"
  },
  {
    "word": "mispronounce",
    "pos": "v.",
    "cn_def": "唸錯；發音錯誤",
    "en_def": "to say a word or name in the wrong way",
    "sentence": "A: I felt really embarrassed during this morning's video call because I said the Vietnamese client's name wrong twice in front of my manager. Should I apologize? B: A short apology by email would be kind, but don't worry too much, because many people {{BLANK}} foreign names the first time, and the client probably understood that it was an honest mistake.",
    "cn": "A：今天早上的視訊會議中，我在經理面前把那位越南客戶的名字唸錯了兩次，覺得好尷尬。我應該道歉嗎？ B：寄一封簡短的道歉信會很貼心，但不用太擔心，因為很多人第一次都會把外國名字【唸錯】，客戶大概也明白那只是無心之過。"
  },
  {
    "word": "abbreviation",
    "pos": "n.",
    "cn_def": "縮寫",
    "en_def": "a short form of a word or name",
    "sentence": "A: In the report from the head office, I keep seeing the letters \"HR\" and \"R&D,\" but I am new here and do not understand them. What do they mean? B: Each one is an {{BLANK}}, so \"HR\" stands for Human Resources and \"R&D\" means Research and Development, and you will find a full list in the employee handbook.",
    "cn": "A：在總公司的報告裡，我一直看到「HR」和「R&D」這些字母，但我是新來的，看不懂。它們是什麼意思？ B：每一個都是【縮寫】，所以「HR」代表人力資源，「R&D」是研究與開發的意思，你可以在員工手冊裡找到完整的清單。"
  }
];

const MCQS = [
  {
    "q": "Please write your _____ first on the application form. The airline lists all passengers by family name, not by first name.",
    "options": [
      "surname",
      "signature",
      "label",
      "reputation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Everyone in the warehouse calls Tom 'Big T' instead of his real name. The _____ started as a joke at last year's company picnic.",
    "options": [
      "signature",
      "abbreviation",
      "nickname",
      "reputation"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please update your job _____ on the company website after your promotion. Clients should know that you are now the regional sales manager.",
    "options": [
      "label",
      "title",
      "brand",
      "credit"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "All visitors must show a photo ID at the front desk. The guards need to confirm each person's _____ before giving out a visitor pass.",
    "options": [
      "reputation",
      "pronunciation",
      "fame",
      "identity"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The contract is not valid without the director's _____. Please ask her to sign the last page before the courier arrives at four.",
    "options": [
      "reputation",
      "credit",
      "signature",
      "label"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The hotel has an excellent _____ for friendly service. Many guests write positive reviews and return again every year.",
    "options": [
      "reputation",
      "identity",
      "signature",
      "pronunciation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The young singer rose to _____ after her video was shared millions of times online. Now she performs at large concerts across Asia.",
    "options": [
      "identity",
      "label",
      "reference",
      "fame"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our customers trust this coffee _____ because the quality is always high. We plan to order more of its products next quarter.",
    "options": [
      "alias",
      "brand",
      "title",
      "initial"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Employees who want to join the free workshop must _____ online by Friday. Seats are limited to twenty people.",
    "options": [
      "register",
      "rename",
      "spell",
      "mispronounce"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The marketing team decided to _____ the energy drink before the summer campaign. Customers found the old name too long to remember.",
    "options": [
      "register",
      "spell",
      "rename",
      "identify"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Our new colleague from Australia prefers to use first names. He asked everyone to _____ him David instead of using his family name.",
    "options": [
      "spell",
      "register",
      "mention",
      "call"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The caller had an unusual family name. The receptionist politely asked him to _____ it letter by letter.",
    "options": [
      "register",
      "spell",
      "rename",
      "honor"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Before the conference, the host checked the correct _____ of each speaker's name. She did not want to embarrass any of the guests.",
    "options": [
      "signature",
      "identity",
      "pronunciation",
      "reputation"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Please use a _____ greeting such as 'Dear Professor Lee' in your first email to a new client. You can be more relaxed later.",
    "options": [
      "formal",
      "familiar",
      "anonymous",
      "unique"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Friday's welcome dinner will be quite _____, so you do not need to wear a suit. Jeans and a nice shirt are fine.",
    "options": [
      "legal",
      "informal",
      "anonymous",
      "familiar"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Every user name in the system must be _____. If someone else already uses the name you choose, please try a different one.",
    "options": [
      "formal",
      "legal",
      "familiar",
      "unique"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Chen is a very _____ family name in Taiwan. As a result, the hotel staff always check guests' phone numbers too.",
    "options": [
      "common",
      "anonymous",
      "formal",
      "legal"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Your _____ name must match the one on your tax documents. Please inform HR if you changed it after getting married.",
    "options": [
      "anonymous",
      "informal",
      "familiar",
      "legal"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Many banks ask for your mother's _____ as a security question. It is information that strangers are unlikely to know.",
    "options": [
      "stage name",
      "pseudonym",
      "maiden name",
      "signature"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Please print your _____ in capital letters on the badge form. Include both your first name and your family name.",
    "options": [
      "maiden name",
      "full name",
      "stage name",
      "nickname"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The singer performs under a _____, but the payment contract must show her real name. The agency has already sent it to us.",
    "options": [
      "maiden name",
      "full name",
      "given name",
      "stage name"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "During the meeting, the director made sure to _____ Lisa by name. She wanted everyone to know who designed the new logo.",
    "options": [
      "mention",
      "spell",
      "register",
      "rename"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The board will _____ our founder at the anniversary dinner. They are naming the new training center after her.",
    "options": [
      "spell",
      "register",
      "honor",
      "identify"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The staff survey is completely _____, so managers cannot see who wrote each comment. This helps employees share honest opinions.",
    "options": [
      "formal",
      "anonymous",
      "familiar",
      "common"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The man in the lobby looks _____, but I cannot remember his name. I think we met at last year's trade fair.",
    "options": [
      "anonymous",
      "legal",
      "formal",
      "familiar"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "My former manager agreed to write a _____ for my job application. She will describe my skills and work experience.",
    "options": [
      "label",
      "brand",
      "reference",
      "title"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The design team deserves most of the _____ for the successful campaign. Their creative videos helped sales rise by twenty percent.",
    "options": [
      "credit",
      "label",
      "identity",
      "signature"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Please _____ the new marketing director to each department during the morning tour. She does not know anyone here yet.",
    "options": [
      "spell",
      "introduce",
      "register",
      "rename"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Many people _____ foreign names the first time they see them. Asking the person how to say it is always polite.",
    "options": [
      "register",
      "rename",
      "honor",
      "mispronounce"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "'HR' is a common _____ for Human Resources. You can find a full list of these short forms in the employee handbook.",
    "options": [
      "abbreviation",
      "signature",
      "pseudonym",
      "reputation"
    ],
    "answer": 0,
    "vocabIndex": 36
  }
];

const LOOKUP = {
  "surname": {
    "pos": "n.",
    "en_def": "a family name; your last name",
    "cn_def": "姓氏"
  },
  "given name": {
    "pos": "n.phr.",
    "en_def": "the first name a person gets at birth, not the family name",
    "cn_def": "名字（非姓氏）"
  },
  "nickname": {
    "pos": "n.",
    "en_def": "an informal name that friends use for someone",
    "cn_def": "綽號；暱稱"
  },
  "alias": {
    "pos": "n.",
    "en_def": "a false or different name that someone uses",
    "cn_def": "化名；別名"
  },
  "pseudonym": {
    "pos": "n.",
    "en_def": "a false name that a writer uses instead of a real name",
    "cn_def": "筆名；假名"
  },
  "title": {
    "pos": "n.",
    "en_def": "a word that shows a person's job or position, such as Dr. or Manager",
    "cn_def": "頭銜；職稱；標題"
  },
  "initial": {
    "pos": "n.",
    "en_def": "the first letter of a name",
    "cn_def": "（姓名的）首字母"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who a person is",
    "cn_def": "身分"
  },
  "signature": {
    "pos": "n.",
    "en_def": "your name written by you in your own special way",
    "cn_def": "簽名"
  },
  "label": {
    "pos": "n.",
    "en_def": "a small piece of paper on something that gives information about it",
    "cn_def": "標籤"
  },
  "reputation": {
    "pos": "n.",
    "en_def": "the opinion that people have about someone or something",
    "cn_def": "名聲；聲譽"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名氣；名聲"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a name that a company gives to its products",
    "cn_def": "品牌"
  },
  "register": {
    "pos": "v.",
    "en_def": "to put your name on an official list",
    "cn_def": "登記；註冊；報名"
  },
  "rename": {
    "pos": "v.",
    "en_def": "to give something a new name",
    "cn_def": "重新命名；改名"
  },
  "identify": {
    "pos": "v.",
    "en_def": "to recognize and say who or what someone or something is",
    "cn_def": "辨認；識別；找出"
  },
  "call": {
    "pos": "v.",
    "en_def": "to give someone a name; to use a certain name for someone",
    "cn_def": "稱呼；叫做"
  },
  "spell": {
    "pos": "v.",
    "en_def": "to say or write the letters of a word in the correct order",
    "cn_def": "拼寫；拼字"
  },
  "pronunciation": {
    "pos": "n.",
    "en_def": "the way a word or name is said",
    "cn_def": "發音"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "suitable for serious or official situations",
    "cn_def": "正式的"
  },
  "informal": {
    "pos": "adj.",
    "en_def": "relaxed and friendly; not official",
    "cn_def": "非正式的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨特的；獨一無二的"
  },
  "common": {
    "pos": "adj.",
    "en_def": "happening often or found in many places",
    "cn_def": "常見的；普通的"
  },
  "legal": {
    "pos": "adj.",
    "en_def": "connected with the law; official according to the law",
    "cn_def": "法律的；合法的；法定的"
  },
  "maiden name": {
    "pos": "n.phr.",
    "en_def": "a woman's family name before she got married",
    "cn_def": "娘家姓；婚前姓氏"
  },
  "full name": {
    "pos": "n.phr.",
    "en_def": "all the parts of a person's name",
    "cn_def": "全名"
  },
  "stage name": {
    "pos": "n.phr.",
    "en_def": "a name that a performer uses instead of their real name",
    "cn_def": "藝名"
  },
  "mention": {
    "pos": "v.",
    "en_def": "to speak or write about something briefly",
    "cn_def": "提到；提及"
  },
  "honor": {
    "pos": "v.",
    "en_def": "to show public respect for someone",
    "cn_def": "表揚；向……致敬"
  },
  "anonymous": {
    "pos": "adj.",
    "en_def": "with a name that is not known or not given",
    "cn_def": "匿名的"
  },
  "familiar": {
    "pos": "adj.",
    "en_def": "known to you because you have seen or heard it before",
    "cn_def": "熟悉的；眼熟的"
  },
  "recognize": {
    "pos": "v.",
    "en_def": "to know who someone is because you have seen them before",
    "cn_def": "認出；認得"
  },
  "reference": {
    "pos": "n.",
    "en_def": "a letter or statement about a person's character and ability, usually for a new job",
    "cn_def": "推薦信；參考；提及"
  },
  "credit": {
    "pos": "n.",
    "en_def": "praise or recognition for something good that you did",
    "cn_def": "功勞；讚揚"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell people each other's names when they meet for the first time",
    "cn_def": "介紹"
  },
  "mispronounce": {
    "pos": "v.",
    "en_def": "to say a word or name in the wrong way",
    "cn_def": "唸錯；發音錯誤"
  },
  "abbreviation": {
    "pos": "n.",
    "en_def": "a short form of a word or name",
    "cn_def": "縮寫"
  }
};

const EXTRA_GLOSSES = {};
