// Topic 227 Quiz Data: Machine 機器
// Source word list: https://www.examword.com/group-topic/machine — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T227 - Machine 機器",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "engine",
    "pos": "n.",
    "cn_def": "引擎；發動機",
    "en_def": "the part of a vehicle or machine that produces power to make it move",
    "sentence": "A: The delivery van made a loud noise on the highway this morning, so should we still send it to the customer in Taoyuan this afternoon? B: No, let's take it to the garage first, because the mechanic said the {{BLANK}} might overheat again if we drive it that far without checking the oil.",
    "cn": "A：今天早上送貨車在高速公路上發出很大的噪音，那我們今天下午還要把它開去桃園的客戶那裡嗎？ B：不，我們先把它送去修車廠吧，因為技師說如果我們沒檢查機油就開那麼遠，【引擎】可能會再次過熱。"
  },
  {
    "word": "motor",
    "pos": "n.",
    "cn_def": "馬達；發動機",
    "en_def": "a machine part that uses electricity or fuel to make something turn or move",
    "sentence": "A: The electric fan in the meeting room suddenly stopped turning during the presentation, so do you know what went wrong with it? B: The technician checked it after lunch and told me the small {{BLANK}} inside had burned out, so we need to order a replacement part from the supplier this week.",
    "cn": "A：會議室裡的電風扇在簡報時突然停止轉動，你知道它出了什麼問題嗎？ B：技術人員午餐後檢查過了，他告訴我裡面的小【馬達】燒壞了，所以我們這週需要向供應商訂購替換零件。"
  },
  {
    "word": "gear",
    "pos": "n.",
    "cn_def": "齒輪；排檔",
    "en_def": "a part of a machine or bicycle that controls speed and power; one of its settings",
    "sentence": "A: When I tried to ride the company bicycle to the post office, the pedals felt really heavy going up the hill, so is something broken? B: Nothing is broken; you just need to change to a lower {{BLANK}} before you climb, and then pedaling will feel much easier on your legs.",
    "cn": "A：我試著騎公司的腳踏車去郵局時，上坡時踏板感覺好重，是有什麼東西壞了嗎？ B：沒有壞；你只需要在爬坡前換到比較低的【檔位】，這樣踩起來腿就會輕鬆很多。"
  },
  {
    "word": "mechanism",
    "pos": "n.",
    "cn_def": "機械裝置；機制",
    "en_def": "a set of moving parts in a machine that does a certain job",
    "sentence": "A: The front door of our office building keeps staying open after people walk through it, which lets cold air into the lobby, so who should we call? B: Please contact the building manager, because the closing {{BLANK}} at the top of the door probably needs to be adjusted or replaced by a repair worker.",
    "cn": "A：我們辦公大樓的前門在有人走過後一直保持開著，讓冷空氣吹進大廳，我們該打電話給誰？ B：請聯絡大樓管理員，因為門頂端的關門【裝置】可能需要由維修人員調整或更換。"
  },
  {
    "word": "device",
    "pos": "n.",
    "cn_def": "裝置；設備",
    "en_def": "a small machine or tool made for a special purpose",
    "sentence": "A: Our sales team keeps losing important notes during client visits, so do you have any suggestions for keeping everything organized while they travel? B: We could give each salesperson a small tablet or another mobile {{BLANK}}, so they can save their notes online and share them with the office right after each meeting.",
    "cn": "A：我們的業務團隊在拜訪客戶時一直弄丟重要的筆記，你有什麼建議能讓他們出差時把東西整理好嗎？ B：我們可以給每位業務一台小平板或其他行動【裝置】，這樣他們就能把筆記存在網路上，並在每次會議後馬上分享給辦公室。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "something you hold in your hand to help you do a job, such as a hammer",
    "sentence": "A: The shelves in the new storage room are a little loose, and I'm worried the boxes might fall on someone, so can you help me fix them? B: Sure, I'll bring the right {{BLANK}} from my desk drawer after lunch, and we can tighten all the screws together before the afternoon delivery arrives.",
    "cn": "A：新儲藏室裡的架子有點鬆，我擔心箱子可能會掉下來砸到人，你可以幫我修一下嗎？ B：當然，我午餐後會從我的抽屜拿合適的【工具】過來，我們可以在下午的貨送到之前一起把所有螺絲鎖緊。"
  },
  {
    "word": "automation",
    "pos": "n.",
    "cn_def": "自動化",
    "en_def": "the use of machines and computers to do work instead of people",
    "sentence": "A: Our factory workers spend hours packing the same boxes every day, and they often feel tired and bored, so is there a better way to handle this? B: The manager is planning to introduce more {{BLANK}} next year, so machines will do the repeated packing while staff focus on checking quality and solving problems.",
    "cn": "A：我們的工廠員工每天花好幾個小時包裝同樣的箱子，他們常常覺得又累又無聊，有更好的方法來處理嗎？ B：經理打算明年導入更多【自動化】，這樣機器會負責重複的包裝工作，而員工就能專心檢查品質和解決問題。"
  },
  {
    "word": "robot",
    "pos": "n.",
    "cn_def": "機器人",
    "en_def": "a machine that can move and do tasks automatically",
    "sentence": "A: I heard the hotel near the airport has started using new technology to deliver towels and snacks to guests' rooms, is that true? B: Yes, a small {{BLANK}} now carries items up in the elevator and calls the room phone when it arrives, which saves the front desk staff a lot of time during busy evenings.",
    "cn": "A：我聽說機場附近的飯店開始用新科技把毛巾和點心送到客人的房間，是真的嗎？ B：是的，現在有一台小型【機器人】會搭電梯把物品送上去，抵達時會打房間電話通知，這在忙碌的晚上為櫃檯人員省下很多時間。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備；器材",
    "en_def": "the machines and tools needed for a particular activity or job",
    "sentence": "A: The new branch office is opening next Monday, but are the desks and computers ready for the staff to use on their first day? B: Most of the furniture arrived yesterday, but the office {{BLANK}}, including the printers and projectors, will be delivered and set up by the supplier on Friday afternoon.",
    "cn": "A：新的分公司下週一開幕，桌子和電腦都準備好讓員工第一天使用了嗎？ B：大部分家具昨天已經送到，但辦公【設備】，包括印表機和投影機，會由供應商在週五下午送來並安裝好。"
  },
  {
    "word": "apparatus",
    "pos": "n.",
    "cn_def": "儀器；器械；裝置",
    "en_def": "a set of equipment or machines used for a scientific or technical purpose",
    "sentence": "A: The science museum wants our company to help with its new exhibition for students, so what exactly do they need from our engineering team? B: They would like us to build a simple {{BLANK}} that shows how water power can produce electricity, so children can press a button and watch it work safely.",
    "cn": "A：科學博物館希望我們公司協助他們為學生辦的新展覽，他們到底需要我們的工程團隊做什麼？ B：他們希望我們製作一個簡單的【裝置】，展示水力如何產生電力，讓孩子們可以按下按鈕，安全地看它運作。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "儀器；器具",
    "en_def": "a tool used for measuring or for careful technical or medical work",
    "sentence": "A: The laboratory results from last week look strange, and the numbers are much higher than usual, so do you think someone made a mistake? B: It's possible that the measuring {{BLANK}} wasn't set correctly, so let's ask the lab assistant to check it carefully before we send any report to the client.",
    "cn": "A：上週的實驗室結果看起來很奇怪，數字比平常高很多，你認為是有人出錯了嗎？ B：有可能是測量【儀器】沒有設定正確，所以在我們寄任何報告給客戶之前，先請實驗室助理仔細檢查一下。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "零件；組件",
    "en_def": "one of the parts that make up a machine or system",
    "sentence": "A: Why did the factory stop producing the new coffee machines this week when we have so many orders waiting from retailers? B: One important electronic {{BLANK}} from our supplier in Japan was delayed by the storm, so we can't finish building the machines until the shipment arrives at the port.",
    "cn": "A：我們有這麼多零售商的訂單在等，為什麼工廠這週停止生產新的咖啡機？ B：我們日本供應商的一個重要電子【零件】因為暴風雨延誤了，所以在貨物抵達港口之前，我們無法完成機器的組裝。"
  },
  {
    "word": "assembly",
    "pos": "n.",
    "cn_def": "組裝；裝配",
    "en_def": "the process of putting the parts of something together",
    "sentence": "A: The furniture we ordered for the waiting room arrived in flat boxes this morning, so do we need to put everything together ourselves? B: The store includes free {{BLANK}} with large orders, so two workers will come on Thursday to build the chairs and tables and take away all the packaging.",
    "cn": "A：我們為等候室訂的家具今天早上以扁平箱送到了，我們需要自己把所有東西組起來嗎？ B：這家店大量訂購會附贈免費【組裝】，所以週四會有兩位工人來組裝椅子和桌子，並把所有包裝材料帶走。"
  },
  {
    "word": "circuit",
    "pos": "n.",
    "cn_def": "電路；線路",
    "en_def": "the complete path that electricity flows around",
    "sentence": "A: Every time we turn on the heater and the coffee maker at the same time, all the lights in the kitchen go off, so what is causing this? B: The electrician thinks the {{BLANK}} can't handle that much power at once, so he suggested we use the heater in another room for now.",
    "cn": "A：每次我們同時打開暖氣機和咖啡機，廚房所有的燈就會熄滅，是什麼原因造成的？ B：電工認為這個【電路】無法一次承受那麼多電力，所以他建議我們暫時在另一個房間使用暖氣機。"
  },
  {
    "word": "panel",
    "pos": "n.",
    "cn_def": "面板；儀表板",
    "en_def": "a flat board on a machine with buttons, switches, or screens to control it",
    "sentence": "A: The new printer keeps showing a red light, but I can't find the instructions anywhere, so do you know how to fix the problem? B: Look at the control {{BLANK}} on the right side, where you can press the menu button and read the error message that explains what is wrong.",
    "cn": "A：新的印表機一直亮紅燈，但我到處都找不到說明書，你知道怎麼解決這個問題嗎？ B：看看右邊的控制【面板】，你可以在那裡按選單鍵，讀取說明問題所在的錯誤訊息。"
  },
  {
    "word": "switch",
    "pos": "n.",
    "cn_def": "開關",
    "en_def": "a small button or lever that turns electricity or a machine on or off",
    "sentence": "A: I'm the last person leaving the office tonight, so is there anything special I should do before I lock the front door and go home? B: Please turn off the main light {{BLANK}} next to the door, and make sure all the computers are shut down, because the building manager wants to save electricity.",
    "cn": "A：我今晚是最後一個離開辦公室的人，在我鎖前門回家之前，有什麼特別要做的事嗎？ B：請關掉門旁邊的主電燈【開關】，並確認所有電腦都已關機，因為大樓管理員想要節省用電。"
  },
  {
    "word": "lever",
    "pos": "n.",
    "cn_def": "操縱桿；槓桿",
    "en_def": "a handle or bar that you push or pull to operate a machine",
    "sentence": "A: The paper cutter in the copy room looks a bit dangerous, so how can I use it safely when I prepare the handouts for tomorrow's training? B: Keep your fingers away from the blade, and pull the long {{BLANK}} down slowly with one hand while you hold the stack of paper flat with the other.",
    "cn": "A：影印室裡的裁紙機看起來有點危險，我準備明天培訓的講義時要怎麼安全地使用它？ B：手指要遠離刀片，用一隻手慢慢拉下長長的【操縱桿】，同時用另一隻手把那疊紙壓平。"
  },
  {
    "word": "valve",
    "pos": "n.",
    "cn_def": "閥門；活門",
    "en_def": "a part that opens or closes to control the flow of liquid or gas through a pipe",
    "sentence": "A: There is water dripping under the sink in the staff kitchen, and the floor is getting wet, so what should we do before the plumber arrives? B: Turn the small {{BLANK}} under the sink to the right to stop the water supply, and then put a bucket there and tell everyone to be careful.",
    "cn": "A：員工廚房的水槽下面在滴水，地板越來越濕，在水電工到之前我們該怎麼辦？ B：把水槽下面的小【閥門】往右轉來關掉水源，然後在那裡放一個水桶，並提醒大家小心。"
  },
  {
    "word": "piston",
    "pos": "n.",
    "cn_def": "活塞",
    "en_def": "a part inside an engine that moves up and down to produce power",
    "sentence": "A: The mechanic called about our company truck, so did he explain why the engine was making that strange knocking sound last week? B: He said one {{BLANK}} inside the engine was damaged and wasn't moving up and down smoothly, so the repair will take three days and cost more than we expected.",
    "cn": "A：技師打電話來說明我們公司卡車的狀況，他有解釋為什麼上週引擎發出那種奇怪的敲擊聲嗎？ B：他說引擎裡有一個【活塞】損壞了，上下移動不順，所以修理需要三天，費用也比我們預期的高。"
  },
  {
    "word": "turbine",
    "pos": "n.",
    "cn_def": "渦輪機；發電機",
    "en_def": "a machine with blades that are turned by wind, water, or steam to make power",
    "sentence": "A: Our client wants to reduce its electricity costs at the new factory by the sea, so what kind of green energy would you recommend for that location? B: Because the area is very windy most of the year, a wind {{BLANK}} could produce a lot of power and help the company lower its monthly bills.",
    "cn": "A：我們的客戶想降低海邊新工廠的電費，你會推薦那個地點使用哪種綠色能源？ B：因為那個地區一年中大部分時間風都很大，風力【發電機】可以產生大量電力，幫助公司降低每月的帳單。"
  },
  {
    "word": "compressor",
    "pos": "n.",
    "cn_def": "壓縮機",
    "en_def": "a machine that presses air or gas into a smaller space, used in air conditioners and tools",
    "sentence": "A: The air conditioner in the conference room is running, but the air feels warm, and our visitors are arriving in an hour, so what's wrong? B: The repair worker said the {{BLANK}} isn't working properly, so it can't cool the air, and he is bringing a new part this afternoon.",
    "cn": "A：會議室的冷氣有在運轉，但吹出來的風是溫的，我們的訪客一小時後就要到了，是哪裡出問題？ B：維修人員說【壓縮機】運作不正常，所以無法讓空氣變冷，他今天下午會帶新的零件過來。"
  },
  {
    "word": "conveyor",
    "pos": "n.",
    "cn_def": "輸送帶；輸送機",
    "en_def": "a moving belt that carries things from one place to another in a factory or building",
    "sentence": "A: How do the packages move from the loading area to the sorting room so quickly at the new warehouse I visited last week? B: They travel on a long {{BLANK}} belt that runs through the building, so workers don't need to carry heavy boxes and can sort many more orders every hour.",
    "cn": "A：我上週參觀的新倉庫裡，包裹是怎麼那麼快從裝卸區移到分揀室的？ B：它們在一條貫穿整棟建築的長【輸送】帶上移動，所以員工不需要搬重箱子，每小時也能分揀更多訂單。"
  },
  {
    "word": "calibration",
    "pos": "n.",
    "cn_def": "校準；校正",
    "en_def": "the act of checking and adjusting a machine so that it measures correctly",
    "sentence": "A: The digital scales in our shipping department are showing different weights for the same box, which is causing problems with delivery fees, so what should we do? B: We should arrange a {{BLANK}} check with the service company this week, so all the scales give accurate readings before the busy holiday season begins.",
    "cn": "A：我們出貨部門的電子秤對同一個箱子顯示不同的重量，造成運費出問題，我們該怎麼辦？ B：我們應該在這週跟服務公司安排一次【校準】檢查，讓所有的秤在忙碌的假期季節開始前都能給出準確的讀數。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "the work of keeping a machine or building in good condition",
    "sentence": "A: The elevator in our building stopped between floors twice last month, and some employees are now afraid to use it, so what is the landlord doing? B: He has signed a contract with a new company that will provide regular {{BLANK}} every month, so small problems can be found and fixed early.",
    "cn": "A：我們大樓的電梯上個月有兩次卡在樓層之間，現在有些員工不敢搭了，房東採取了什麼措施？ B：他已經和一家新公司簽約，每個月提供定期【維修保養】，這樣小問題就能及早發現並修好。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "操作；運轉",
    "en_def": "the way a machine works or is used; the state of working",
    "sentence": "A: Before the new packing machine starts running next week, will the staff need any training, or is it simple enough to use right away? B: The supplier will give a two-hour lesson on the safe {{BLANK}} of the machine, so everyone understands how to start it, stop it, and handle problems.",
    "cn": "A：新的包裝機下週開始運轉之前，員工需要接受訓練嗎？還是它簡單到可以馬上使用？ B：供應商會提供兩小時的機器安全【操作】課程，讓每個人都了解如何啟動、停止它以及處理問題。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率；效能",
    "en_def": "the ability to do work well without wasting time, energy, or money",
    "sentence": "A: Our electricity bill has gone up a lot this year, and the finance manager wants to cut costs, so do you have any ideas? B: We could replace the old air conditioners with newer models that have higher energy {{BLANK}}, because they use less power while keeping the office just as cool.",
    "cn": "A：我們今年的電費漲了很多，財務經理想要削減成本，你有什麼想法嗎？ B：我們可以把舊冷氣換成能源【效率】更高的新機型，因為它們用電較少，同時還能讓辦公室保持一樣涼爽。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "the amount of work that a person, machine, or company produces",
    "sentence": "A: Since we installed the new printing machines in the factory last spring, have you noticed any real changes in how much the team can produce each day? B: Yes, our {{BLANK}} has increased by about twenty percent, because the machines work faster and the workers no longer need to stop for repairs so often.",
    "cn": "A：自從去年春天我們在工廠安裝了新的印刷機，你有注意到團隊每天的產量有任何實際變化嗎？ B：有，我們的【生產力】提高了大約百分之二十，因為機器運作得更快，員工也不再需要那麼常停下來修理。"
  },
  {
    "word": "precision",
    "pos": "n.",
    "cn_def": "精確；精準",
    "en_def": "the quality of being very exact and correct",
    "sentence": "A: Why does our company buy cutting machines from that German supplier when cheaper models are available from local manufacturers? B: Our products need to be cut with great {{BLANK}}, and the German machines make very exact cuts, so we waste less material and our customers receive fewer damaged parts.",
    "cn": "A：本地製造商有更便宜的機型，為什麼我們公司要向那家德國供應商買切割機？ B：我們的產品需要以非常高的【精準度】切割，而德國的機器切得非常精確，所以我們浪費的材料較少，客戶收到的損壞零件也比較少。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的；持久的",
    "en_def": "strong and able to last a long time without breaking",
    "sentence": "A: We need new chairs for the factory break room, but the old ones broke within a year, so what kind should we order this time? B: Let's choose a more {{BLANK}} model made of strong metal, because workers use the room all day, and we don't want to replace the chairs again soon.",
    "cn": "A：工廠休息室需要新椅子，但舊的那批不到一年就壞了，這次我們該訂哪一種？ B：我們選一款用堅固金屬製成、更【耐用】的款式吧，因為員工整天都在使用那個房間，我們不想很快又要換椅子。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "便於攜帶的；手提式的",
    "en_def": "light and small enough to be carried easily",
    "sentence": "A: Our trainers travel to different branch offices every month, and carrying a heavy projector is really difficult for them, so is there a better option? B: We could buy a small {{BLANK}} projector that fits in a laptop bag, so they can carry it easily on the train and set it up in any meeting room.",
    "cn": "A：我們的培訓講師每個月都要去不同的分公司，帶著笨重的投影機對他們來說真的很辛苦，有更好的選擇嗎？ B：我們可以買一台放得進筆電包的小型【攜帶式】投影機，這樣他們搭火車時就能輕鬆攜帶，並在任何會議室架設。"
  },
  {
    "word": "automated",
    "pos": "adj.",
    "cn_def": "自動化的",
    "en_def": "operated by machines or computers instead of people",
    "sentence": "A: Customers keep complaining that they wait too long on the phone just to check their order status, so how can we solve this problem? B: We could set up an {{BLANK}} phone system that gives order information right away, so our staff can spend more time helping customers with difficult questions.",
    "cn": "A：客戶一直抱怨他們只是要查詢訂單狀態就要在電話上等太久，我們要怎麼解決這個問題？ B：我們可以設置一套【自動化】電話系統，立即提供訂單資訊，這樣我們的員工就能花更多時間幫助有困難問題的客戶。"
  },
  {
    "word": "mechanical",
    "pos": "adj.",
    "cn_def": "機械的",
    "en_def": "relating to machines or their moving parts",
    "sentence": "A: The old elevator in the warehouse stopped suddenly yesterday afternoon, so was it caused by a power cut or something else? B: The repair company said it was a {{BLANK}} problem with one of the moving parts, not the electricity, so they need to replace the worn cable before anyone uses it again.",
    "cn": "A：倉庫裡的舊電梯昨天下午突然停了，是停電造成的還是其他原因？ B：維修公司說那是其中一個活動零件的【機械】問題，不是電力問題，所以在任何人再次使用之前，他們需要更換磨損的纜線。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computer technology; showing information as numbers or electronic data",
    "sentence": "A: Our clinic still keeps all patient records in paper files, which take up a whole room, so is there a way to save space? B: We could change to a {{BLANK}} filing system and scan the old records, so the staff can find information on the computer in seconds and we can use the room for something else.",
    "cn": "A：我們診所仍然把所有病歷存放在紙本檔案裡，占滿了一整個房間，有辦法節省空間嗎？ B：我們可以改用【數位】歸檔系統並掃描舊的紀錄，這樣員工幾秒鐘就能在電腦上找到資料，那個房間也可以拿來做別的用途。"
  },
  {
    "word": "manually",
    "pos": "adv.",
    "cn_def": "手動地；用手",
    "en_def": "by hand, not using a machine or automatic system",
    "sentence": "A: The automatic door at the main entrance isn't opening this morning, and visitors are waiting outside, so what should the security guard do? B: Until the technician arrives, he can open the door {{BLANK}} by pulling the handle on the side, and he should also put a sign there to explain the problem.",
    "cn": "A：今天早上正門的自動門打不開，訪客都在外面等，警衛應該怎麼做？ B：在技術人員到達之前，他可以拉側邊的把手【手動】開門，並且應該在那裡放一個告示來說明這個問題。"
  }
];

const MCQS = [
  {
    "q": "The mechanic replaced the oil before the long trip. He said the _____ would run more smoothly and use less fuel.",
    "options": [
      "engine",
      "conveyor",
      "panel",
      "circuit"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new ceiling fan has a quiet electric _____. It runs all night without disturbing guests in the hotel rooms.",
    "options": [
      "lever",
      "valve",
      "motor",
      "gear"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "When driving up the steep mountain road, shift into a lower _____. This will protect the engine and keep the truck under control.",
    "options": [
      "valve",
      "gear",
      "switch",
      "robot"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please turn off every electronic _____ before the flight takes off. Phones and laptops may be used again after landing.",
    "options": [
      "turbine",
      "lever",
      "piston",
      "device"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "A good project management app is a useful _____ for busy teams. It helps everyone track deadlines and share files easily.",
    "options": [
      "piston",
      "valve",
      "tool",
      "turbine"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Factory _____ has reduced the need for workers to do repeated tasks by hand. Machines now pack and label most of the boxes.",
    "options": [
      "automation",
      "calibration",
      "precision",
      "maintenance"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The warehouse uses a small _____ to carry boxes between shelves. It moves on its own and never needs a lunch break.",
    "options": [
      "valve",
      "lever",
      "circuit",
      "robot"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The gym bought new exercise _____ for its members this spring. The treadmills and bikes will arrive next Tuesday.",
    "options": [
      "efficiency",
      "equipment",
      "maintenance",
      "precision"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Doctors must clean every medical _____ carefully after each use. This simple step helps prevent infections in the clinic.",
    "options": [
      "instrument",
      "efficiency",
      "productivity",
      "calibration"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The laptop was delayed because one key _____ was missing from the shipment. The supplier promised to send it by Friday.",
    "options": [
      "efficiency",
      "operation",
      "component",
      "productivity"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The bookshelf comes with clear instructions for easy _____. Most customers can put it together in less than thirty minutes.",
    "options": [
      "precision",
      "assembly",
      "efficiency",
      "productivity"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The lights went out because of a short _____ in the kitchen. An electrician will check the wiring tomorrow morning.",
    "options": [
      "gear",
      "turbine",
      "lever",
      "circuit"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "To change the printer settings, press the menu button on the control _____. A list of options will appear on the screen.",
    "options": [
      "piston",
      "turbine",
      "panel",
      "gear"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Before leaving the office, please flip the light _____ next to the door. We are trying to save electricity this year.",
    "options": [
      "switch",
      "piston",
      "turbine",
      "compressor"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The plumber closed the main water _____ before repairing the pipe. This stopped water from flooding the basement.",
    "options": [
      "gear",
      "robot",
      "turbine",
      "valve"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The company built a wind _____ near the coast last year. It now produces enough power for the whole factory.",
    "options": [
      "lever",
      "turbine",
      "valve",
      "piston"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The repair worker said the air conditioner's _____ was broken. That is why the unit blows warm air instead of cool air.",
    "options": [
      "compressor",
      "lever",
      "robot",
      "panel"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Packages move through the sorting center on a long _____ belt. Workers stand beside it and check each label.",
    "options": [
      "valve",
      "piston",
      "conveyor",
      "gear"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The lab sends its scales for _____ twice a year. This makes sure every measurement stays accurate and reliable.",
    "options": [
      "productivity",
      "calibration",
      "efficiency",
      "automation"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The elevator will be closed on Saturday for routine _____. Please use the stairs or the elevator in the east building.",
    "options": [
      "precision",
      "productivity",
      "efficiency",
      "maintenance"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new packing machine has been in _____ since early March. It has already doubled our daily output.",
    "options": [
      "precision",
      "calibration",
      "operation",
      "efficiency"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "These new air conditioners have high energy _____. They keep the office cool while using much less electricity.",
    "options": [
      "efficiency",
      "assembly",
      "automation",
      "operation"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The manager hopes the new software will improve team _____. Staff should be able to finish more work in less time.",
    "options": [
      "calibration",
      "assembly",
      "maintenance",
      "productivity"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The surgeon's tools must cut with great _____. Even a tiny mistake could cause serious harm to the patient.",
    "options": [
      "maintenance",
      "precision",
      "automation",
      "assembly"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Our hiking boots are made from _____ leather that lasts for many years. Customers often wear the same pair for a decade.",
    "options": [
      "durable",
      "automated",
      "digital",
      "mechanical"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "This _____ speaker is light enough to carry in a backpack. It is perfect for outdoor company events and picnics.",
    "options": [
      "mechanical",
      "automated",
      "portable",
      "stationary"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Customers can now pay their bills through the _____ phone system any time. They no longer need to wait for a human agent.",
    "options": [
      "durable",
      "automated",
      "mechanical",
      "portable"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The train was delayed for an hour because of a _____ problem with the brakes. Engineers fixed the worn part quickly.",
    "options": [
      "portable",
      "durable",
      "digital",
      "mechanical"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The museum now offers a _____ version of its guidebook. Visitors can download it to their phones for free.",
    "options": [
      "mechanical",
      "durable",
      "digital",
      "automated"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "When the power went out, staff had to open the garage door _____. It took two people to lift it.",
    "options": [
      "manually",
      "automatically",
      "digitally",
      "electrically"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "engine": {
    "pos": "n.",
    "en_def": "the part of a vehicle or machine that produces power to make it move",
    "cn_def": "引擎；發動機"
  },
  "motor": {
    "pos": "n.",
    "en_def": "a machine part that uses electricity or fuel to make something turn or move",
    "cn_def": "馬達；發動機"
  },
  "gear": {
    "pos": "n.",
    "en_def": "a part of a machine or bicycle that controls speed and power; one of its settings",
    "cn_def": "齒輪；排檔"
  },
  "mechanism": {
    "pos": "n.",
    "en_def": "a set of moving parts in a machine that does a certain job",
    "cn_def": "機械裝置；機制"
  },
  "device": {
    "pos": "n.",
    "en_def": "a small machine or tool made for a special purpose",
    "cn_def": "裝置；設備"
  },
  "tool": {
    "pos": "n.",
    "en_def": "something you hold in your hand to help you do a job, such as a hammer",
    "cn_def": "工具"
  },
  "automation": {
    "pos": "n.",
    "en_def": "the use of machines and computers to do work instead of people",
    "cn_def": "自動化"
  },
  "robot": {
    "pos": "n.",
    "en_def": "a machine that can move and do tasks automatically",
    "cn_def": "機器人"
  },
  "equipment": {
    "pos": "n.",
    "en_def": "the machines and tools needed for a particular activity or job",
    "cn_def": "設備；器材"
  },
  "apparatus": {
    "pos": "n.",
    "en_def": "a set of equipment or machines used for a scientific or technical purpose",
    "cn_def": "儀器；器械；裝置"
  },
  "instrument": {
    "pos": "n.",
    "en_def": "a tool used for measuring or for careful technical or medical work",
    "cn_def": "儀器；器具"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that make up a machine or system",
    "cn_def": "零件；組件"
  },
  "assembly": {
    "pos": "n.",
    "en_def": "the process of putting the parts of something together",
    "cn_def": "組裝；裝配"
  },
  "circuit": {
    "pos": "n.",
    "en_def": "the complete path that electricity flows around",
    "cn_def": "電路；線路"
  },
  "panel": {
    "pos": "n.",
    "en_def": "a flat board on a machine with buttons, switches, or screens to control it",
    "cn_def": "面板；儀表板"
  },
  "switch": {
    "pos": "n.",
    "en_def": "a small button or lever that turns electricity or a machine on or off",
    "cn_def": "開關"
  },
  "lever": {
    "pos": "n.",
    "en_def": "a handle or bar that you push or pull to operate a machine",
    "cn_def": "操縱桿；槓桿"
  },
  "valve": {
    "pos": "n.",
    "en_def": "a part that opens or closes to control the flow of liquid or gas through a pipe",
    "cn_def": "閥門；活門"
  },
  "piston": {
    "pos": "n.",
    "en_def": "a part inside an engine that moves up and down to produce power",
    "cn_def": "活塞"
  },
  "turbine": {
    "pos": "n.",
    "en_def": "a machine with blades that are turned by wind, water, or steam to make power",
    "cn_def": "渦輪機；發電機"
  },
  "compressor": {
    "pos": "n.",
    "en_def": "a machine that presses air or gas into a smaller space, used in air conditioners and tools",
    "cn_def": "壓縮機"
  },
  "conveyor": {
    "pos": "n.",
    "en_def": "a moving belt that carries things from one place to another in a factory or building",
    "cn_def": "輸送帶；輸送機"
  },
  "calibration": {
    "pos": "n.",
    "en_def": "the act of checking and adjusting a machine so that it measures correctly",
    "cn_def": "校準；校正"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping a machine or building in good condition",
    "cn_def": "維修；保養"
  },
  "operation": {
    "pos": "n.",
    "en_def": "the way a machine works or is used; the state of working",
    "cn_def": "操作；運轉"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the ability to do work well without wasting time, energy, or money",
    "cn_def": "效率；效能"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "the amount of work that a person, machine, or company produces",
    "cn_def": "生產力"
  },
  "precision": {
    "pos": "n.",
    "en_def": "the quality of being very exact and correct",
    "cn_def": "精確；精準"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "strong and able to last a long time without breaking",
    "cn_def": "耐用的；持久的"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "light and small enough to be carried easily",
    "cn_def": "便於攜帶的；手提式的"
  },
  "automated": {
    "pos": "adj.",
    "en_def": "operated by machines or computers instead of people",
    "cn_def": "自動化的"
  },
  "mechanical": {
    "pos": "adj.",
    "en_def": "relating to machines or their moving parts",
    "cn_def": "機械的"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology; showing information as numbers or electronic data",
    "cn_def": "數位的"
  },
  "manually": {
    "pos": "adv.",
    "en_def": "by hand, not using a machine or automatic system",
    "cn_def": "手動地；用手"
  }
};

const EXTRA_GLOSSES = {};
