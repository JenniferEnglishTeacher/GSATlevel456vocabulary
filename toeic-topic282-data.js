// Topic 282 Quiz Data: Phone Call 電話通話
// Source word list: https://www.examword.com/group-topic/phone-call — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T282 - Phone Call 電話通話",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "dial",
    "pos": "v.",
    "cn_def": "撥（電話號碼）",
    "en_def": "to press the numbers to make a phone call",
    "sentence": "A: I need to reach the hotel in Osaka about our team's booking, but my call keeps failing, so what am I doing wrong? B: When you call another country from the office, you have to {{BLANK}} zero first to get an outside line, and then add the country code before the hotel's number.",
    "cn": "A：我需要聯絡大阪的飯店確認我們團隊的訂房，但我的電話一直打不通，我哪裡做錯了？ B：從辦公室打國際電話時，你必須先【撥】零取得外線，然後在飯店號碼前加上國碼。"
  },
  {
    "word": "ring",
    "pos": "v.",
    "cn_def": "打電話給",
    "en_def": "to phone someone",
    "sentence": "A: Should I stay at my desk during lunch today, or is it all right if I go to the café across the street with the others? B: Please stay nearby, because the client from Singapore promised that she would {{BLANK}} us before one o'clock to confirm the final price of the order.",
    "cn": "A：我今天午餐時間應該待在座位上嗎，還是可以跟大家一起去對街的咖啡店？ B：請待在附近，因為新加坡的客戶答應一點前會【打電話給】我們確認訂單的最終價格。"
  },
  {
    "word": "answer",
    "pos": "v.",
    "cn_def": "接（電話）",
    "en_def": "to pick up the phone when it rings",
    "sentence": "A: Why did the customer complain that nobody at our service center picked up when he called yesterday afternoon? B: Two of our staff members were out sick, so there weren't enough people to {{BLANK}} the phones, and many callers had to wait more than fifteen minutes before giving up.",
    "cn": "A：為什麼那位顧客抱怨昨天下午他打來時我們服務中心沒人接？ B：我們有兩位員工請病假，所以人手不足無法【接聽】電話，許多來電者等了超過十五分鐘就放棄了。"
  },
  {
    "word": "hang up",
    "pos": "v.phr.",
    "cn_def": "掛斷電話",
    "en_def": "to end a phone call by putting down the phone",
    "sentence": "A: The caller from the bank asked for my account password, so what should I do if he phones again this evening? B: Real banks never ask for passwords over the phone, so you should just {{BLANK}} immediately, write down his number, and report the call to the bank's security department tomorrow morning.",
    "cn": "A：銀行打來的人要我的帳戶密碼，如果他今晚再打來我該怎麼辦？ B：真正的銀行絕不會在電話中索取密碼，所以你應該立刻【掛斷電話】，記下他的號碼，明天早上向銀行的安全部門報告這通電話。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "電話線路；專線",
    "en_def": "a telephone connection or number",
    "sentence": "A: I've been trying to reach the shipping company for an hour, but why do I keep hearing the same recorded message? B: Their customer service {{BLANK}} is extremely busy on Mondays because of weekend orders, so you might have better luck if you try again after three o'clock or send them an email instead.",
    "cn": "A：我試著聯絡貨運公司一個小時了，為什麼一直聽到同樣的錄音訊息？ B：因為週末的訂單，他們的客服【專線】週一非常忙碌，所以你下午三點以後再試或改寄電子郵件可能比較有機會。"
  },
  {
    "word": "busy",
    "pos": "adj.",
    "cn_def": "（電話）佔線的",
    "en_def": "(of a phone line) being used by someone else",
    "sentence": "A: Did you manage to speak to the supplier about the late delivery of the printer paper this morning? B: Not yet, because every time I called, the number was {{BLANK}}, so I think they are dealing with a lot of complaints, and I'll try again after the team meeting.",
    "cn": "A：你今天早上有跟供應商談到印表機紙張延遲送貨的事嗎？ B：還沒，因為每次我打過去都【佔線】，所以我想他們正在處理很多投訴，我會在團隊會議後再試一次。"
  },
  {
    "word": "voicemail",
    "pos": "n.",
    "cn_def": "語音留言",
    "en_def": "a recorded phone message left for someone",
    "sentence": "A: The sales manager is on a flight to London until tonight, so how can I tell her about the change in tomorrow's meeting time? B: Just leave a short {{BLANK}} on her mobile phone explaining the new time, and she will listen to it as soon as her plane lands and she turns her phone back on.",
    "cn": "A：業務經理今晚前都在飛往倫敦的班機上，我要怎麼告訴她明天會議時間改了？ B：只要在她的手機上留一則簡短的【語音留言】說明新時間，飛機一降落她開機後就會聽到。"
  },
  {
    "word": "missed call",
    "pos": "n.phr.",
    "cn_def": "未接來電",
    "en_def": "a phone call that you did not answer",
    "sentence": "A: Why did you leave the workshop in such a hurry right after the coffee break this afternoon? B: I noticed a {{BLANK}} from my son's school on my phone, and I was worried that something had happened to him, so I went outside to call the school office back right away.",
    "cn": "A：你今天下午咖啡休息後為什麼那麼匆忙離開研討會？ B：我注意到手機上有一通兒子學校打來的【未接來電】，我擔心他出了什麼事，所以馬上到外面回電給學校辦公室。"
  },
  {
    "word": "hold",
    "pos": "v.",
    "cn_def": "（電話）稍候；不掛斷",
    "en_def": "to wait on the phone until someone can speak to you",
    "sentence": "A: The customer wants to know whether the blue jacket is available in a larger size, but I'm not sure, so what should I tell her? B: Ask her politely to {{BLANK}} for a moment while you check the stock in the back room, and thank her for waiting when you come back to the phone.",
    "cn": "A：顧客想知道藍色夾克有沒有大一號的，但我不確定，我該怎麼跟她說？ B：禮貌地請她【稍候】一下，讓你去後面倉庫查庫存，回到電話上時要謝謝她的等候。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉接（電話）",
    "en_def": "to send a phone call to another person or phone",
    "sentence": "A: A customer just called about a problem with his bill, but I work in the sales department, so what should I do? B: Tell him you'll {{BLANK}} his call to the accounting team, give him their direct number in case he gets cut off, and make sure someone actually picks up before you put down the phone.",
    "cn": "A：有位顧客剛打來問他帳單的問題，但我在業務部，我該怎麼辦？ B：告訴他你會把他的電話【轉接】給會計組，給他會計組的直撥號碼以防斷線，並確認真的有人接起後再放下電話。"
  },
  {
    "word": "conference call",
    "pos": "n.phr.",
    "cn_def": "電話會議",
    "en_def": "a phone call in which several people in different places talk together",
    "sentence": "A: Our partners in Tokyo and Berlin can't fly here next week, so how are we going to discuss the new project budget with them? B: We can set up a {{BLANK}} on Thursday at a time that suits both cities, and everyone can join from their own office without spending money on expensive plane tickets.",
    "cn": "A：我們在東京和柏林的合作夥伴下週無法飛過來，我們要怎麼跟他們討論新專案的預算？ B：我們可以在週四安排一場兩個城市時間都方便的【電話會議】，每個人都可以在自己的辦公室加入，不必花錢買昂貴的機票。"
  },
  {
    "word": "speakerphone",
    "pos": "n.",
    "cn_def": "擴音電話；擴音功能",
    "en_def": "a phone setting that lets everyone in the room hear the call",
    "sentence": "A: Is it all right if the whole design team listens when the client calls about the new logo this afternoon? B: Sure, just put the call on {{BLANK}} in the meeting room so everyone can hear her comments, but remember to tell her at the start that other people are listening too.",
    "cn": "A：今天下午客戶打來談新標誌時，可以讓整個設計團隊一起聽嗎？ B：當然，只要在會議室把電話切成【擴音】讓大家都聽到她的意見，但記得一開始就告訴她還有其他人在聽。"
  },
  {
    "word": "mute",
    "pos": "v.",
    "cn_def": "使靜音",
    "en_def": "to turn off the sound of a microphone or phone",
    "sentence": "A: There's a lot of construction noise outside my apartment today, so will it be a problem during our online meeting with the clients? B: It should be fine if you {{BLANK}} your microphone whenever you aren't speaking, and only turn it back on when you need to give your report about the sales figures.",
    "cn": "A：今天我公寓外面施工很吵，跟客戶的線上會議會不會有問題？ B：只要你不說話時把麥克風【靜音】，需要報告銷售數字時再打開，應該就沒問題。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量",
    "en_def": "how loud a sound is",
    "sentence": "A: The customer on the phone keeps saying she can't hear me clearly, even though I'm speaking quite loudly, so what's wrong? B: The {{BLANK}} on your headset might be set too low after the system update this morning, so check the settings on your computer and turn it up before you continue the call.",
    "cn": "A：電話中的顧客一直說她聽不清楚我說話，雖然我已經講得蠻大聲了，是哪裡有問題？ B：今天早上系統更新後，你耳機的【音量】可能被調得太低了，所以繼續通話前先檢查電腦設定並把它調高。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "連線；（電話）接通",
    "en_def": "the link that lets phones or computers communicate",
    "sentence": "A: Why did the video call with the investors keep freezing and cutting off during the most important part of your presentation? B: The internet {{BLANK}} in the old meeting room is very weak, so next time we should use the new conference room on the fifth floor, which has much faster service.",
    "cn": "A：為什麼和投資人的視訊通話在你簡報最重要的部分一直卡住和斷線？ B：舊會議室的網路【連線】很弱，所以下次我們應該用五樓的新會議室，那裡的網路快多了。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "訊號",
    "en_def": "the radio waves that a mobile phone receives",
    "sentence": "A: Can I call you from the train on my way to the factory tomorrow to discuss the safety inspection report? B: It might be difficult, because the phone {{BLANK}} is very weak in the mountain tunnels along that route, so it would be better to call me after you arrive at the station.",
    "cn": "A：明天我去工廠的路上可以在火車上打給你討論安全檢查報告嗎？ B：可能有困難，因為那條路線沿途的山區隧道手機【訊號】很弱，所以你到車站後再打給我比較好。"
  },
  {
    "word": "operator",
    "pos": "n.",
    "cn_def": "接線生；總機人員",
    "en_def": "a person who connects phone calls at a switchboard",
    "sentence": "A: I'm trying to call the hotel guest in Room 512, but I don't know her direct number, so how can I reach her? B: Just call the hotel's main number and ask the {{BLANK}} to connect you to her room, and if she isn't there, you can leave a message at the front desk.",
    "cn": "A：我想打給住在512號房的飯店客人，但我不知道她的直撥號碼，我該怎麼聯絡她？ B：只要打飯店總機，請【接線生】幫你轉到她的房間，如果她不在，你可以在櫃台留言。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候語；招呼",
    "en_def": "the words you say when you first speak to someone",
    "sentence": "A: Our new receptionist sounds a little nervous on the phone, so what advice should we give her during her first week? B: We should teach her a short, friendly {{BLANK}} that includes the company name and her own name, and remind her to smile while she speaks, because callers can hear it.",
    "cn": "A：我們的新接待員在電話上聽起來有點緊張，她第一週我們該給她什麼建議？ B：我們應該教她一段包含公司名稱和她自己名字的簡短友善【問候語】，並提醒她說話時要微笑，因為來電者聽得出來。"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "cn_def": "介紹",
    "en_def": "to tell someone your name and who you are",
    "sentence": "A: I have to call a possible new customer this afternoon, but we've never met before, so how should I start the call? B: First, clearly {{BLANK}} yourself and the company, then explain who gave you her number, and finally ask whether she has a few minutes to talk about our office cleaning services.",
    "cn": "A：今天下午我要打給一位可能的新客戶，但我們從沒見過面，我該怎麼開始這通電話？ B：首先清楚地【介紹】你自己和公司，然後說明是誰給你她的號碼，最後問她是否有幾分鐘可以談談我們的辦公室清潔服務。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷",
    "en_def": "to stop someone while they are speaking",
    "sentence": "A: The customer was talking for ten minutes about his broken washing machine, so was it wrong that I stopped him to ask questions? B: It's better not to {{BLANK}} angry customers too early, because they feel ignored, so let them finish their story first and then ask your questions politely and calmly.",
    "cn": "A：那位顧客講他壞掉的洗衣機講了十分鐘，我打斷他問問題是不對的嗎？ B：最好不要太早【打斷】生氣的顧客，因為他們會覺得被忽視，所以先讓他們說完，再禮貌又冷靜地提出問題。"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "cn_def": "釐清；澄清",
    "en_def": "to make something clearer and easier to understand",
    "sentence": "A: The supplier said on the phone that the parts would arrive \"next week,\" but our production line needs them by Wednesday, so what should I do? B: Call him back and ask him to {{BLANK}} the exact delivery date, and if Wednesday isn't possible, we'll need to find another supplier quickly.",
    "cn": "A：供應商在電話上說零件「下週」會到，但我們的生產線週三前就需要，我該怎麼辦？ B：回電請他【釐清】確切的交貨日期，如果週三不可能，我們就得趕快找其他供應商。"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "cn_def": "確認",
    "en_def": "to say or check that something is true or will happen",
    "sentence": "A: Should I send an email to the dentist's office, or is it enough that I booked the appointment by phone yesterday? B: Many offices call patients a day early to {{BLANK}} the time, but since you're busy with the trade fair next week, it's safer to send a short email as well.",
    "cn": "A：我應該寄電子郵件給牙醫診所嗎，還是昨天電話預約就夠了？ B：很多診所會提前一天打電話給病人【確認】時間，但因為你下週忙著參加商展，再寄一封簡短的電子郵件比較保險。"
  },
  {
    "word": "apologize",
    "pos": "v.",
    "cn_def": "道歉",
    "en_def": "to say you are sorry",
    "sentence": "A: A customer just called to complain that her package arrived two days late and the box was damaged, so how should I handle it? B: First, sincerely {{BLANK}} for the trouble and listen carefully, then offer to send a replacement or give her a discount on her next order.",
    "cn": "A：有位顧客剛打來抱怨她的包裹晚了兩天到，而且盒子還破損了，我該怎麼處理？ B：首先誠心為造成的困擾【道歉】並仔細聆聽，然後提出寄送替換品或在她下次訂單打折。"
  },
  {
    "word": "request",
    "pos": "n.",
    "cn_def": "要求；請求",
    "en_def": "the act of politely asking for something",
    "sentence": "A: The customer called this morning asking for a copy of last month's invoice, so do I need to tell my manager first? B: No, that's a simple {{BLANK}} that you can handle yourself, so just email the invoice to her today and write a short note in the system about the call.",
    "cn": "A：那位顧客今天早上打來要上個月發票的副本，我需要先告訴經理嗎？ B：不用，那是個你可以自己處理的簡單【要求】，所以今天就把發票寄給她，並在系統裡簡短記錄這通電話。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應；回覆",
    "en_def": "to reply to someone",
    "sentence": "A: How quickly are we expected to return calls from customers who leave messages on the help line after office hours? B: Company policy says we must {{BLANK}} within one working day, so check the messages first thing every morning and call back the most serious cases before ten o'clock.",
    "cn": "A：顧客下班後在服務專線留言，我們應該多快回電？ B：公司政策規定我們必須在一個工作天內【回應】，所以每天早上第一件事就是檢查留言，並在十點前回電給最嚴重的情況。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話；談話",
    "en_def": "a talk between two or more people",
    "sentence": "A: Why does the training manager want us to take notes during every phone call with our customers this month? B: She wants us to write down the main points of each {{BLANK}}, so that if another staff member speaks to the same customer later, they will know exactly what was discussed before.",
    "cn": "A：為什麼訓練經理要我們這個月每通客戶電話都做筆記？ B：她要我們記下每次【對話】的重點，這樣之後如果其他員工跟同一位客戶談話，他們就會確切知道之前討論過什麼。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk about a subject in order to decide something",
    "sentence": "A: Have we decided whether to move the summer sales event from July to August, or are we still waiting for the director's opinion? B: We had a long {{BLANK}} about it during yesterday's conference call, but nobody could agree, so the director will make the final decision on Friday.",
    "cn": "A：我們決定要把夏季促銷活動從七月移到八月了嗎，還是還在等總監的意見？ B：昨天的電話會議上我們對此有過一番冗長的【討論】，但沒人能達成共識，所以總監會在週五做最後決定。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的",
    "en_def": "needing attention or action right away",
    "sentence": "A: The factory manager just called and said she needs to talk to you immediately, but you're in the middle of an interview, so what should I tell her? B: If it's really {{BLANK}}, like a safety problem or a broken machine, please interrupt me, but otherwise tell her I'll call back in twenty minutes.",
    "cn": "A：工廠經理剛打來說她需要馬上跟你談，但你正在面試中，我該怎麼跟她說？ B：如果真的很【緊急】，像是安全問題或機器故障，請打斷我，否則就告訴她我二十分鐘後回電。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skill and good manners expected at work",
    "sentence": "A: Is it okay to answer work calls on my personal phone when I'm working from home on Fridays? B: Yes, but make sure you sound {{BLANK}} by giving the company name when you pick up, and try to take calls in a quiet room away from your children and the television.",
    "cn": "A：週五在家工作時，我可以用私人手機接工作電話嗎？ B：可以，但接起電話時要報上公司名稱，聽起來要【專業】，而且盡量在遠離孩子和電視的安靜房間接電話。"
  },
  {
    "word": "polite",
    "pos": "adj.",
    "cn_def": "有禮貌的",
    "en_def": "having good manners and showing respect",
    "sentence": "A: A caller shouted at me today because his refund was late, and I nearly shouted back, so what should I do next time? B: Always stay calm and {{BLANK}}, even when callers are rude, because losing your temper only makes the situation worse, and you can always ask a supervisor to take over.",
    "cn": "A：今天有位來電者因為退款延遲對我大吼，我差點吼回去，下次我該怎麼做？ B：即使來電者很無禮，也要始終保持冷靜和【禮貌】，因為發脾氣只會讓情況更糟，而且你隨時可以請主管接手。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "語氣；聲調",
    "en_def": "the way your voice sounds, showing your feelings",
    "sentence": "A: The customer said I sounded unfriendly on the phone yesterday, but I only told her the facts about our return policy, so what went wrong? B: Sometimes your {{BLANK}} of voice matters more than your words, so try speaking a little more slowly and warmly, especially when you have to give customers bad news.",
    "cn": "A：那位顧客說我昨天在電話上聽起來不友善，但我只是告訴她我們退貨政策的事實，哪裡出錯了？ B：有時候你說話的【語氣】比內容更重要，所以試著講慢一點、溫和一點，尤其是要告訴顧客壞消息的時候。"
  },
  {
    "word": "echo",
    "pos": "n.",
    "cn_def": "回音",
    "en_def": "a sound that you hear again because it repeats",
    "sentence": "A: During the online meeting, why could I hear my own voice repeating a second after I spoke? B: That {{BLANK}} usually happens when someone has their speakers turned up too high near the microphone, so ask everyone to wear headphones, and the sound should become much clearer for the whole group.",
    "cn": "A：線上會議時，為什麼我說話後一秒會聽到自己的聲音重複？ B：那種【回音】通常是因為有人在麥克風附近把喇叭開得太大聲，所以請大家戴耳機，整個團隊的聲音應該就會清楚多了。"
  },
  {
    "word": "static",
    "pos": "n.",
    "cn_def": "（電話、收音機的）雜音",
    "en_def": "crackling noise on a phone line or radio",
    "sentence": "A: I could hardly understand what the delivery driver was saying when he called from the highway, so did you have the same problem? B: Yes, there was a lot of {{BLANK}} on the line, probably because of the storm, so I asked him to send the address by text message instead.",
    "cn": "A：送貨司機從高速公路打來時我幾乎聽不懂他在說什麼，你也有同樣的問題嗎？ B：有，電話裡有很多【雜音】，可能是因為暴風雨，所以我請他改用簡訊傳地址。"
  },
  {
    "word": "schedule",
    "pos": "v.",
    "cn_def": "安排；排定",
    "en_def": "to plan something for a certain time",
    "sentence": "A: The customer said on the phone that she wants to see our new office chairs in person before she places a large order, so what should I do? B: Please {{BLANK}} a visit to our showroom for her next week, and check with the sales manager which day he can be there to meet her.",
    "cn": "A：那位顧客在電話上說她想在下大筆訂單前親自看看我們的新辦公椅，我該怎麼做？ B：請替她【安排】下週參觀我們的展示間，並問業務經理哪一天他可以到場和她見面。"
  }
];

const MCQS = [
  {
    "q": "Guests who wish to make an international call from their rooms must _____ nine first. The hotel will add the charge to their final bill.",
    "options": [
      "dial",
      "confirm",
      "transfer",
      "apologize"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The courier promised to _____ the reception desk when he arrives at the building. Someone will then come down to sign for the package.",
    "options": [
      "mute",
      "ring",
      "clarify",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Staff at the front desk should _____ every incoming call within three rings. Callers who wait too long often hang up in frustration.",
    "options": [
      "introduce",
      "apologize",
      "answer",
      "dial"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "If the caller becomes abusive, employees are allowed to politely end the conversation and _____. They should then report the incident to a supervisor.",
    "options": [
      "introduce",
      "clarify",
      "respond",
      "hang up"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All of our agents are currently helping other customers. Please stay on the _____, and your call will be answered in the order received.",
    "options": [
      "tone",
      "line",
      "greeting",
      "discussion"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "I tried to reach the travel agency three times this morning. Each time, the number was _____, so I finally sent them an email.",
    "options": [
      "polite",
      "professional",
      "urgent",
      "busy"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The director is out of the office until Thursday afternoon. Please leave a _____ with your name and number, and she will return your call.",
    "options": [
      "voicemail",
      "connection",
      "tone",
      "operator"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "After the meeting, Kevin noticed a _____ from an unknown number on his phone. He called back and learned that he had won a contract.",
    "options": [
      "speakerphone",
      "greeting",
      "missed call",
      "discussion"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The agent asked me to _____ for a few minutes while she checked my order. Soft music played until she came back on the line.",
    "options": [
      "hold",
      "dial",
      "interrupt",
      "introduce"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The receptionist could not answer the technical question herself. She offered to _____ the caller to an engineer in the support department.",
    "options": [
      "apologize",
      "transfer",
      "mute",
      "ring"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Because the managers work in three different countries, they hold a _____ every Monday morning. Each person joins from his or her own office.",
    "options": [
      "missed call",
      "voicemail",
      "conference call",
      "greeting"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Please put the call on _____ so that everyone in the meeting room can hear. The client wants to speak to the whole team.",
    "options": [
      "operator",
      "request",
      "tone",
      "speakerphone"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "During the online seminar, please _____ your microphone when you are not speaking. Background noise makes it hard for others to listen.",
    "options": [
      "confirm",
      "mute",
      "transfer",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The video kept freezing during the interview because of a poor internet _____. We had to finish the conversation by phone instead.",
    "options": [
      "greeting",
      "operator",
      "request",
      "connection"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "If you do not know the extension number, press zero to speak with the _____. She will connect you to the right person.",
    "options": [
      "operator",
      "voicemail",
      "line",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "New call center staff learn a standard _____ to use at the start of every call. It includes the company name and the employee's name.",
    "options": [
      "discussion",
      "connection",
      "greeting",
      "request"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "When you call a new client for the first time, always _____ yourself clearly. Then explain the purpose of your call in one or two sentences.",
    "options": [
      "introduce",
      "transfer",
      "hold",
      "mute"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "It is rude to _____ a customer while she is still explaining her problem. Let her finish speaking before you ask any questions.",
    "options": [
      "confirm",
      "interrupt",
      "dial",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The instructions from the supplier were confusing, so I called to ask him to _____ them. He explained each step slowly and carefully.",
    "options": [
      "apologize",
      "ring",
      "clarify",
      "mute"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Please call the restaurant the day before to _____ your reservation. Tables that are not reconfirmed may be given to other guests.",
    "options": [
      "interrupt",
      "introduce",
      "dial",
      "confirm"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The manager called the customer personally to _____ for the shipping delay. He also offered free delivery on her next order.",
    "options": [
      "respond",
      "apologize",
      "clarify",
      "dial"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The caller made a _____ for a copy of his latest bill. The clerk promised to email it to him before the end of the day.",
    "options": [
      "greeting",
      "tone",
      "line",
      "request"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our support team tries to _____ to every voicemail within twenty-four hours. Customers appreciate quick replies, even when the problem is not yet solved.",
    "options": [
      "respond",
      "hold",
      "clarify",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "I had a long phone _____ with the landlord about repairing the heater. He finally agreed to send a technician on Friday.",
    "options": [
      "operator",
      "voicemail",
      "conversation",
      "connection"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "After a lively _____ during the conference call, the team agreed to delay the product launch. The new date will be announced next week.",
    "options": [
      "discussion",
      "greeting",
      "voicemail",
      "tone"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Please call me on my mobile only if the matter is _____. For anything else, an email will be fine until I return.",
    "options": [
      "busy",
      "urgent",
      "polite",
      "professional"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The company hired a _____ trainer to improve its staff's telephone skills. She has taught customer service courses for over fifteen years.",
    "options": [
      "urgent",
      "busy",
      "professional",
      "nervous"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Even when callers become angry, our agents must remain calm and _____. Shouting back only makes the situation worse.",
    "options": [
      "urgent",
      "busy",
      "empty",
      "polite"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Customers can often hear frustration in an agent's _____ of voice. Speaking slowly and warmly helps keep the conversation friendly.",
    "options": [
      "line",
      "tone",
      "signal",
      "request"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The sales manager asked me to _____ a call with the new client for Tuesday afternoon. I sent everyone an invitation with the dial-in number.",
    "options": [
      "interrupt",
      "apologize",
      "mute",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "dial": {
    "pos": "v.",
    "en_def": "to press the numbers to make a phone call",
    "cn_def": "撥（電話號碼）"
  },
  "ring": {
    "pos": "v.",
    "en_def": "to phone someone",
    "cn_def": "打電話給"
  },
  "answer": {
    "pos": "v.",
    "en_def": "to pick up the phone when it rings",
    "cn_def": "接（電話）"
  },
  "hang up": {
    "pos": "v.phr.",
    "en_def": "to end a phone call by putting down the phone",
    "cn_def": "掛斷電話"
  },
  "line": {
    "pos": "n.",
    "en_def": "a telephone connection or number",
    "cn_def": "電話線路；專線"
  },
  "busy": {
    "pos": "adj.",
    "en_def": "(of a phone line) being used by someone else",
    "cn_def": "（電話）佔線的"
  },
  "voicemail": {
    "pos": "n.",
    "en_def": "a recorded phone message left for someone",
    "cn_def": "語音留言"
  },
  "missed call": {
    "pos": "n.phr.",
    "en_def": "a phone call that you did not answer",
    "cn_def": "未接來電"
  },
  "hold": {
    "pos": "v.",
    "en_def": "to wait on the phone until someone can speak to you",
    "cn_def": "（電話）稍候；不掛斷"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to send a phone call to another person or phone",
    "cn_def": "轉接（電話）"
  },
  "conference call": {
    "pos": "n.phr.",
    "en_def": "a phone call in which several people in different places talk together",
    "cn_def": "電話會議"
  },
  "speakerphone": {
    "pos": "n.",
    "en_def": "a phone setting that lets everyone in the room hear the call",
    "cn_def": "擴音電話；擴音功能"
  },
  "mute": {
    "pos": "v.",
    "en_def": "to turn off the sound of a microphone or phone",
    "cn_def": "使靜音"
  },
  "volume": {
    "pos": "n.",
    "en_def": "how loud a sound is",
    "cn_def": "音量"
  },
  "connection": {
    "pos": "n.",
    "en_def": "the link that lets phones or computers communicate",
    "cn_def": "連線；（電話）接通"
  },
  "signal": {
    "pos": "n.",
    "en_def": "the radio waves that a mobile phone receives",
    "cn_def": "訊號"
  },
  "operator": {
    "pos": "n.",
    "en_def": "a person who connects phone calls at a switchboard",
    "cn_def": "接線生；總機人員"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "the words you say when you first speak to someone",
    "cn_def": "問候語；招呼"
  },
  "introduce": {
    "pos": "v.",
    "en_def": "to tell someone your name and who you are",
    "cn_def": "介紹"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop someone while they are speaking",
    "cn_def": "打斷"
  },
  "clarify": {
    "pos": "v.",
    "en_def": "to make something clearer and easier to understand",
    "cn_def": "釐清；澄清"
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or check that something is true or will happen",
    "cn_def": "確認"
  },
  "apologize": {
    "pos": "v.",
    "en_def": "to say you are sorry",
    "cn_def": "道歉"
  },
  "request": {
    "pos": "n.",
    "en_def": "the act of politely asking for something",
    "cn_def": "要求；請求"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to reply to someone",
    "cn_def": "回應；回覆"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話；談話"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk about a subject in order to decide something",
    "cn_def": "討論"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "needing attention or action right away",
    "cn_def": "緊急的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skill and good manners expected at work",
    "cn_def": "專業的"
  },
  "polite": {
    "pos": "adj.",
    "en_def": "having good manners and showing respect",
    "cn_def": "有禮貌的"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the way your voice sounds, showing your feelings",
    "cn_def": "語氣；聲調"
  },
  "echo": {
    "pos": "n.",
    "en_def": "a sound that you hear again because it repeats",
    "cn_def": "回音"
  },
  "static": {
    "pos": "n.",
    "en_def": "crackling noise on a phone line or radio",
    "cn_def": "（電話、收音機的）雜音"
  },
  "schedule": {
    "pos": "v.",
    "en_def": "to plan something for a certain time",
    "cn_def": "安排；排定"
  }
};

const EXTRA_GLOSSES = {};
