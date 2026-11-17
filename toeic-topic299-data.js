// Topic 299 Quiz Data: Power Off 斷電關機
// Source word list: https://www.examword.com/group-topic/power-off — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T299 - Power Off 斷電關機",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "shutdown",
    "pos": "n.",
    "cn_def": "關閉；停機",
    "en_def": "the act of turning off a machine or closing a system completely",
    "sentence": "A: Why can't anyone in the accounting department open the payroll system this afternoon, even though the salaries must be sent out by Friday? B: The IT team announced a planned {{BLANK}} of all the main servers from two to five o'clock so they can install important security updates safely.",
    "cn": "A：為什麼會計部門今天下午沒有人能打開薪資系統，即使薪水必須在星期五前發出去？ B：資訊團隊宣布從兩點到五點將所有主要伺服器進行計畫性的【停機】，這樣他們才能安全地安裝重要的安全更新。"
  },
  {
    "word": "switch off",
    "pos": "v.phr.",
    "cn_def": "關掉（電源、燈）",
    "en_def": "to stop a light or machine by using a switch",
    "sentence": "A: The building manager sent an email saying our electricity bill went up by twenty percent last month, so what should we do in our office? B: Please remember to {{BLANK}} the lights, the printers, and the coffee machine before you leave each evening, especially on Fridays before the long weekend.",
    "cn": "A：大樓管理員寄了一封電子郵件說我們上個月的電費漲了百分之二十，那我們辦公室該怎麼做？ B：請記得每天傍晚離開前【關掉】燈、印表機和咖啡機，尤其是在長週末前的星期五。"
  },
  {
    "word": "turn off",
    "pos": "v.phr.",
    "cn_def": "關閉；關掉",
    "en_def": "to stop a machine, light, or supply of water or gas from working",
    "sentence": "A: The guests in the meeting room are complaining that they can't hear the speaker clearly because of a loud noise, so do you know what is causing it? B: The old air conditioner is very noisy, so could you {{BLANK}} it for an hour and open the windows instead until the presentation is over?",
    "cn": "A：會議室裡的客人抱怨因為有很大的噪音，他們聽不清楚講者說話，你知道是什麼造成的嗎？ B：那台舊冷氣非常吵，所以你可以把它【關掉】一個小時，改開窗戶，直到簡報結束嗎？"
  },
  {
    "word": "blackout",
    "pos": "n.",
    "cn_def": "停電；大停電",
    "en_def": "a period when there is no electricity in an area",
    "sentence": "A: Why did the supermarket throw away so much frozen food and ice cream this morning, and will they get money back from the insurance company? B: There was a {{BLANK}} across the whole neighborhood last night after the storm, so the freezers were off for about eight hours and everything melted.",
    "cn": "A：為什麼超市今天早上丟掉了這麼多冷凍食品和冰淇淋，他們能從保險公司拿回錢嗎？ B：昨晚暴風雨過後整個社區發生【停電】，所以冷凍櫃關了大約八個小時，所有東西都融化了。"
  },
  {
    "word": "outage",
    "pos": "n.",
    "cn_def": "（電力、網路等）中斷",
    "en_def": "a time when a service such as electricity, water, or the internet is not available",
    "sentence": "A: Our online customers say they couldn't place any orders on our website yesterday afternoon, so did something go wrong with our system? B: Yes, our hosting company had a three-hour {{BLANK}} because of a problem at their data center, and they have promised to give us a discount next month.",
    "cn": "A：我們的網路客戶說他們昨天下午無法在我們的網站上下任何訂單，我們的系統出了什麼問題嗎？ B：是的，我們的主機公司因為資料中心的問題發生了三個小時的【服務中斷】，他們已經答應下個月給我們折扣。"
  },
  {
    "word": "disconnect",
    "pos": "v.",
    "cn_def": "切斷；斷開連接",
    "en_def": "to separate something from a power supply or network",
    "sentence": "A: The technician is coming tomorrow morning to repair the broken copy machine on the third floor, so is there anything we need to prepare before he arrives? B: Yes, please {{BLANK}} the machine from the main electricity supply and the office network tonight, so he can start working safely as soon as he gets here.",
    "cn": "A：技術人員明天早上要來修理三樓壞掉的影印機，在他到達之前我們需要準備什麼嗎？ B：需要，今晚請把機器從主電源和辦公室網路【斷開】，這樣他一到就能安全地開始工作。"
  },
  {
    "word": "cut off",
    "pos": "v.phr.",
    "cn_def": "切斷（供應）",
    "en_def": "to stop the supply of something such as electricity, gas, or water",
    "sentence": "A: Why is the restaurant on the corner closed today, when it's usually so busy with office workers at lunchtime? B: The owner forgot to pay several bills, so the power company decided to {{BLANK}} their electricity until the full amount is paid, which might take a few days.",
    "cn": "A：為什麼轉角那家餐廳今天沒開，它午餐時間通常都擠滿上班族？ B：老闆忘了繳好幾張帳單，所以電力公司決定【切斷】他們的電力，直到全額繳清為止，這可能要花上幾天。"
  },
  {
    "word": "deactivate",
    "pos": "v.",
    "cn_def": "停用；解除（裝置）",
    "en_def": "to make a system or device stop working",
    "sentence": "A: The cleaning staff need to enter the warehouse at six o'clock this evening, but won't the security alarm go off as soon as they open the door? B: Don't worry, the security guard will {{BLANK}} the alarm system for two hours and turn it back on after the cleaners have finished and left.",
    "cn": "A：清潔人員今天傍晚六點需要進入倉庫，但他們一開門保全警報不就會響了嗎？ B：別擔心，警衛會將警報系統【解除】兩個小時，等清潔人員完成工作離開後再重新啟動。"
  },
  {
    "word": "disable",
    "pos": "v.",
    "cn_def": "停用；使失效",
    "en_def": "to stop a function or feature from working",
    "sentence": "A: Our sales team keeps getting annoying pop-up messages on their laptops during client presentations, which looks very unprofessional, so can you help? B: Sure, I can {{BLANK}} the automatic update notifications on every laptop this afternoon, so the screens will stay clean while they are meeting with customers.",
    "cn": "A：我們的業務團隊在客戶簡報時筆電上一直跳出惱人的視窗訊息，看起來很不專業，你能幫忙嗎？ B：當然，我今天下午可以把每台筆電的自動更新通知【停用】，這樣他們和客戶開會時螢幕就會保持乾淨。"
  },
  {
    "word": "standby",
    "pos": "n.",
    "cn_def": "待機（狀態）",
    "en_def": "a state in which a machine is not fully off and can start again quickly",
    "sentence": "A: The television in the hotel lobby still uses electricity at night even when nobody is watching it, so why is the red light always on? B: It goes into {{BLANK}} instead of turning off completely, so it can start faster in the morning, but the manager wants to change that setting to save money.",
    "cn": "A：飯店大廳的電視即使晚上沒有人看還是會耗電，為什麼紅燈總是亮著？ B：它會進入【待機】狀態而不是完全關機，這樣早上可以更快啟動，但經理想更改這個設定來省錢。"
  },
  {
    "word": "sleep mode",
    "pos": "n.phr.",
    "cn_def": "睡眠模式",
    "en_def": "a low-power setting in which a computer stops most activity but keeps your work open",
    "sentence": "A: My computer screen goes black every time I leave my desk for a short coffee break, and I have to type my password again, so is something broken? B: No, the company set every computer to enter {{BLANK}} after ten minutes without use, which saves energy and protects private information.",
    "cn": "A：每次我離開座位去短暫喝杯咖啡，電腦螢幕就變黑，而且我得重新輸入密碼，是什麼東西壞了嗎？ B：不是，公司把每台電腦設定為閒置十分鐘後進入【睡眠模式】，這樣可以節省能源並保護私人資訊。"
  },
  {
    "word": "hibernate",
    "pos": "v.",
    "cn_def": "（電腦）休眠",
    "en_def": "(of a computer) to save all open work and turn off almost completely",
    "sentence": "A: I have to fly to Singapore for a sales conference tomorrow, and I don't want to close all of my documents and websites tonight, so what should I do? B: Just let your laptop {{BLANK}}, because it will save everything you have open and use almost no battery until you start it again at the airport.",
    "cn": "A：我明天要飛去新加坡參加業務會議，今晚我不想把所有文件和網頁都關掉，該怎麼辦？ B：讓你的筆電【休眠】就好，因為它會儲存你開著的所有東西，而且在你到機場重新開機之前幾乎不耗電。"
  },
  {
    "word": "restart",
    "pos": "v.",
    "cn_def": "重新啟動",
    "en_def": "to start something again after it has stopped",
    "sentence": "A: The new accounting software was installed on my computer this morning, but it keeps showing an error message whenever I try to open a report, so what should I do? B: You need to {{BLANK}} your computer first so the installation can be completed, and then the program should work properly.",
    "cn": "A：新的會計軟體今天早上已經安裝在我的電腦上，但每次我想打開報表時它就一直顯示錯誤訊息，我該怎麼辦？ B：你需要先【重新啟動】電腦，讓安裝完成，然後程式應該就能正常運作了。"
  },
  {
    "word": "reboot",
    "pos": "v.",
    "cn_def": "重新開機",
    "en_def": "to turn a computer or system off and then on again",
    "sentence": "A: The cash registers at the front of the store have frozen and a long line of customers is waiting, so is there anything quick we can try? B: Ask the cashiers to {{BLANK}} each machine by holding the power button for ten seconds, and if that doesn't help, call the technical support number right away.",
    "cn": "A：店門口的收銀機當機了，有一長排客人在等，有什麼我們可以快速嘗試的辦法嗎？ B：請收銀員按住電源鍵十秒鐘把每台機器【重新開機】，如果沒用，就立刻打技術支援電話。"
  },
  {
    "word": "trip",
    "pos": "v.",
    "cn_def": "（斷路器）跳電；跳脫",
    "en_def": "(of a safety switch) to turn off the electricity suddenly because there is a problem",
    "sentence": "A: Why did all the lights in the kitchen go out when the chef turned on the new oven and the dishwasher at the same time? B: Using too many powerful machines together can make the circuit breaker {{BLANK}}, so we should ask an electrician to check whether the kitchen needs a stronger electrical system.",
    "cn": "A：為什麼主廚同時打開新烤箱和洗碗機時，廚房所有的燈都熄了？ B：同時使用太多高功率的機器會讓斷路器【跳電】，所以我們應該請電工檢查廚房是否需要更強的電力系統。"
  },
  {
    "word": "breaker",
    "pos": "n.",
    "cn_def": "斷路器",
    "en_def": "a safety switch that turns off electricity automatically when there is too much current",
    "sentence": "A: Half of the computers in the design department suddenly lost power while the other half are still working, so who should we call for help? B: First, check the {{BLANK}} box in the storage room next to the elevator, because one of the switches has probably turned off, and you can push it back up yourself.",
    "cn": "A：設計部有一半的電腦突然斷電，另一半還在運作，我們該找誰幫忙？ B：先去檢查電梯旁儲藏室裡的【斷路器】箱，因為大概是其中一個開關跳掉了，你可以自己把它推回去。"
  },
  {
    "word": "fuse",
    "pos": "n.",
    "cn_def": "保險絲",
    "en_def": "a small safety part that breaks and stops the electricity if there is too much current",
    "sentence": "A: The old electric heater in the waiting room stopped working this morning, even though it is plugged in and the switch is on, so do we need to buy a new one? B: Not yet, because the {{BLANK}} inside the plug has probably blown, and replacing it costs only a few dollars at the hardware store.",
    "cn": "A：等候室那台舊電暖器今天早上不動了，雖然插頭插著而且開關也開著，我們需要買新的嗎？ B：還不用，因為插頭裡的【保險絲】大概燒斷了，在五金行換一個只要幾塊錢。"
  },
  {
    "word": "unplug",
    "pos": "v.",
    "cn_def": "拔掉插頭",
    "en_def": "to remove a plug from an electric socket",
    "sentence": "A: The weather report says a strong typhoon with heavy lightning will hit Taipei tonight, so how can we protect the expensive equipment in our office? B: Before everyone goes home, please {{BLANK}} the computers, printers, and television sets from the wall so that the lightning can't damage them.",
    "cn": "A：氣象報告說今晚會有伴隨強烈雷電的颱風侵襲台北，我們要怎麼保護辦公室裡昂貴的設備？ B：大家回家前，請把電腦、印表機和電視從牆上【拔掉插頭】，這樣閃電就不會損壞它們。"
  },
  {
    "word": "plug out",
    "pos": "v.phr.",
    "cn_def": "拔掉插頭（非正式說法）",
    "en_def": "to remove a plug from a power socket (informal; usually 'unplug')",
    "sentence": "A: The cleaner wants to use the vacuum machine in the meeting room, but every power socket is already taken by laptops and phone chargers, so what should she do? B: She can {{BLANK}} the old radio near the window, because nobody has used it for months and it only wastes electricity.",
    "cn": "A：清潔人員想在會議室用吸塵器，但每個插座都已經被筆電和手機充電器佔滿了，她該怎麼辦？ B：她可以把窗邊那台舊收音機的【插頭拔掉】，因為已經好幾個月沒人用了，它只是在浪費電。"
  },
  {
    "word": "isolate",
    "pos": "v.",
    "cn_def": "隔離；使（電路）分離",
    "en_def": "to separate a machine or area from the power supply so that it is safe to work on",
    "sentence": "A: The maintenance team needs to repair the broken lift at the shopping mall this weekend, so how can they make sure nobody gets an electric shock? B: Their supervisor will {{BLANK}} the lift from the main power supply and put a warning sign on the control panel before anyone touches the wires.",
    "cn": "A：維修團隊這個週末需要修理購物中心壞掉的電梯，他們要如何確保沒有人觸電？ B：他們的主管會先把電梯從主電源【隔離】，並在控制面板上放一個警告標示，然後才讓任何人碰電線。"
  },
  {
    "word": "ground",
    "pos": "v.",
    "cn_def": "使接地",
    "en_def": "to connect electrical equipment to the earth so that it is safe",
    "sentence": "A: Several workers in the factory have felt small electric shocks when they touch the metal frame of the new packing machine, so is it safe to keep using it? B: No, we should stop using it until an electrician comes to {{BLANK}} the machine properly, because the problem could become much more dangerous.",
    "cn": "A：工廠裡好幾位工人碰到新包裝機的金屬框架時都感覺到輕微觸電，繼續使用安全嗎？ B：不安全，我們應該停用，直到電工來把機器妥善【接地】，因為這個問題可能會變得危險得多。"
  },
  {
    "word": "surge",
    "pos": "n.",
    "cn_def": "突波；電壓突增",
    "en_def": "a sudden, short increase in electrical power",
    "sentence": "A: Why did three computers and the office printer all stop working at the same moment during yesterday's thunderstorm? B: Lightning hit a power line near our building and caused a {{BLANK}} of electricity, which damaged the machines that were not protected, so we need to replace some parts this week.",
    "cn": "A：為什麼在昨天的雷雨中，三台電腦和辦公室的印表機同時都不能用了？ B：閃電擊中我們大樓附近的電線，造成電流【突波】，損壞了那些沒有保護的機器，所以我們這週需要更換一些零件。"
  },
  {
    "word": "surge protector",
    "pos": "n.phr.",
    "cn_def": "突波保護器；防雷擊延長線",
    "en_def": "a device that protects electronic equipment from sudden increases in electricity",
    "sentence": "A: We just bought five expensive new computers for the design team, so what can we do to keep them safe during the summer storm season? B: Connect each one to a {{BLANK}} instead of plugging it straight into the wall, because it will block any sudden rise in electricity.",
    "cn": "A：我們剛為設計團隊買了五台昂貴的新電腦，在夏季暴風雨季節我們可以怎麼保護它們？ B：把每一台接到【突波保護器】上，而不是直接插到牆上，因為它會擋住任何突然升高的電流。"
  },
  {
    "word": "cool down",
    "pos": "v.phr.",
    "cn_def": "冷卻；降溫",
    "en_def": "to become less hot, or to make something less hot",
    "sentence": "A: The projector in the training room turned itself off in the middle of my presentation and won't start again, so did I break it? B: No, it just got too hot after running for four hours, so let it {{BLANK}} for about twenty minutes before you turn it on again.",
    "cn": "A：訓練教室裡的投影機在我簡報到一半時自己關機了，而且無法再開啟，是我弄壞了嗎？ B：不是，它只是連續運轉四個小時後太熱了，所以讓它【冷卻】大約二十分鐘後再開機。"
  },
  {
    "word": "offline",
    "pos": "adj.",
    "cn_def": "離線的；未連線的",
    "en_def": "not connected to the internet or a computer network",
    "sentence": "A: Why can't customers book tables through our restaurant's mobile app this morning, when it usually works perfectly? B: Our booking system is {{BLANK}} while the technicians move our data to a new server, so please take reservations by phone until it comes back at noon.",
    "cn": "A：為什麼今天早上客人無法透過我們餐廳的手機應用程式訂位，它平常都運作得很好？ B：技術人員正在把我們的資料轉移到新伺服器，所以訂位系統是【離線的】，中午恢復之前請用電話接受訂位。"
  },
  {
    "word": "inactive",
    "pos": "adj.",
    "cn_def": "不活動的；未使用的",
    "en_def": "not working or not being used",
    "sentence": "A: The finance manager asked me why we are still paying for forty software accounts when we have only thirty employees, so do you know the reason? B: About ten accounts belonged to staff who left last year, and they have been {{BLANK}} for months, so we should close them to save money.",
    "cn": "A：財務經理問我，為什麼我們只有三十名員工卻還在付四十個軟體帳號的費用，你知道原因嗎？ B：大約十個帳號屬於去年離職的員工，它們已經好幾個月【沒有使用】了，所以我們應該把它們關閉以節省開支。"
  },
  {
    "word": "dead",
    "pos": "adj.",
    "cn_def": "（電池）沒電的；（機器）不能運作的",
    "en_def": "(of a battery or machine) having no power left; not working",
    "sentence": "A: I tried to call the client from the train to say I would be late for our meeting, but nothing happened when I pressed the screen, so what went wrong? B: Your phone battery was completely {{BLANK}} because you forgot to charge it last night, so you should carry a power bank when you travel for work.",
    "cn": "A：我在火車上想打電話給客戶說我開會會遲到，但我按螢幕卻沒有任何反應，是哪裡出了問題？ B：你的手機電池完全【沒電】了，因為你昨晚忘了充電，所以出差時應該帶一個行動電源。"
  },
  {
    "word": "drain",
    "pos": "v.",
    "cn_def": "耗盡（電力）",
    "en_def": "to use up the power in a battery",
    "sentence": "A: My new company phone needs to be charged three times a day, even though I mostly use it only for emails and short calls, so is the battery faulty? B: Probably not, because apps that run in the background, like maps and video, can {{BLANK}} the battery very quickly, so try closing them when you don't need them.",
    "cn": "A：我的新公司手機一天需要充三次電，雖然我大多只用來收發電子郵件和講短電話，是電池有問題嗎？ B：大概不是，因為在背景執行的應用程式，例如地圖和影片，會很快【耗盡】電池電力，所以不需要時試著把它們關掉。"
  },
  {
    "word": "battery low",
    "pos": "phr.",
    "cn_def": "電量不足（警示）",
    "en_def": "a warning that a device has very little power left",
    "sentence": "A: Why did the wireless microphone stop working right in the middle of the manager's speech at the annual dinner, and why didn't anyone notice earlier? B: A small {{BLANK}} warning had been flashing on the microphone for an hour, but the technician was busy with the lights and forgot to change it.",
    "cn": "A：為什麼無線麥克風在尾牙晚宴上經理致詞到一半時突然不能用了，而且之前怎麼都沒有人注意到？ B：麥克風上一個小小的【電量不足】警示已經閃了一個小時，但技術人員忙著處理燈光，忘了換電池。"
  },
  {
    "word": "power down",
    "pos": "v.phr.",
    "cn_def": "關機；斷電",
    "en_def": "to turn off a machine or system in the correct way",
    "sentence": "A: The airline staff asked all passengers on the flight to Tokyo to put their laptops and tablets away, so do I need to do anything else with my devices? B: Yes, during takeoff and landing you should {{BLANK}} any large electronic devices completely and keep them in your bag until the plane reaches a safe height.",
    "cn": "A：航空公司人員要求所有飛往東京的乘客把筆電和平板收起來，我的裝置還需要做什麼嗎？ B：是的，在起飛和降落期間，你應該把大型電子裝置完全【關機】，並放在包包裡，直到飛機到達安全的高度。"
  },
  {
    "word": "cut power",
    "pos": "v.phr.",
    "cn_def": "切斷電源",
    "en_def": "to stop the electricity supply to something",
    "sentence": "A: The workers will replace the old wiring on the fifth floor of our office building this Saturday, so will the other floors still have electricity? B: The building manager says they will only {{BLANK}} to the fifth floor from eight to noon, so the elevators and the other offices will work normally.",
    "cn": "A：工人們這週六要更換我們辦公大樓五樓的舊電線，其他樓層還會有電嗎？ B：大樓管理員說他們只會在八點到中午對五樓【切斷電源】，所以電梯和其他辦公室都會正常運作。"
  },
  {
    "word": "pull the plug",
    "pos": "v.phr.",
    "cn_def": "喊停；停止（計畫）",
    "en_def": "to stop a project or activity, often by stopping its money (idiom)",
    "sentence": "A: What happened to the plan to open a second coffee shop near the train station, which everyone in the company was so excited about last spring? B: The investors decided to {{BLANK}} on the project after the rent in that area doubled, so we will focus on improving our first shop instead.",
    "cn": "A：去年春天公司每個人都很興奮的那個在火車站附近開第二家咖啡店的計畫怎麼了？ B：那一帶的租金漲了一倍之後，投資人決定對這個計畫【喊停】，所以我們改為專注於改善第一家店。"
  },
  {
    "word": "fail",
    "pos": "v.",
    "cn_def": "故障；失靈",
    "en_def": "to stop working correctly",
    "sentence": "A: Why does the hospital spend so much money every year on the large generator in the basement when the city's electricity is usually very reliable? B: In case the main power supply happens to {{BLANK}} during an operation, the generator starts within seconds, so doctors and patients stay safe.",
    "cn": "A：為什麼醫院每年要花那麼多錢在地下室的大型發電機上，城市的電力通常非常可靠啊？ B：萬一主電源在手術中剛好【故障】，發電機會在幾秒內啟動，讓醫生和病人都保持安全。"
  },
  {
    "word": "emergency stop",
    "pos": "n.phr.",
    "cn_def": "緊急停止（按鈕）",
    "en_def": "a button or action that stops a machine immediately in a dangerous situation",
    "sentence": "A: A new worker's sleeve got caught in the moving belt of the packing machine this morning, so how did the supervisor manage to help him so quickly? B: She hit the red {{BLANK}} button on the wall right away, so the whole production line shut off in a second and he wasn't hurt.",
    "cn": "A：今天早上一位新員工的袖子被包裝機的輸送帶捲住，主管是怎麼這麼快就幫到他的？ B：她立刻按下牆上的紅色【緊急停止】按鈕，所以整條生產線在一秒內就停了下來，他沒有受傷。"
  }
];

const MCQS = [
  {
    "q": "The factory will close for a two-day _____ next week. Engineers need time to inspect every machine on the production line.",
    "options": [
      "shutdown",
      "surge",
      "fuse",
      "standby"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please _____ the lights in the conference room after the meeting. The company wants to reduce its electricity costs this year.",
    "options": [
      "cool down",
      "switch off",
      "pull the plug",
      "cut power"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Please _____ the water when you finish washing your hands. The building is trying to save water during the dry season.",
    "options": [
      "cool down",
      "power down",
      "turn off",
      "plug out"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The storm caused a citywide _____ that lasted until morning. Many residents had to use candles and flashlights for the whole night.",
    "options": [
      "breaker",
      "fuse",
      "standby",
      "blackout"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our internet provider apologized for yesterday's service _____. Customers will receive a small discount on next month's bill.",
    "options": [
      "outage",
      "surge",
      "fuse",
      "breaker"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Before you clean the inside of the printer, _____ it from the power supply. This will protect you from an electric shock.",
    "options": [
      "restart",
      "disconnect",
      "reboot",
      "fail"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The water company will _____ the supply to our building on Sunday morning. Workers need to repair a broken pipe under the street.",
    "options": [
      "cool down",
      "power down",
      "cut off",
      "pull the plug"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The guard forgot to _____ the alarm before opening the warehouse door. The loud siren woke up everyone living nearby.",
    "options": [
      "reboot",
      "fail",
      "drain",
      "deactivate"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "For privacy, you can _____ the camera on your company laptop. Go to the settings menu and click the switch next to it.",
    "options": [
      "disable",
      "reboot",
      "drain",
      "trip"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The television uses a little electricity even when it is on _____. Turn it off at the wall socket to save more energy.",
    "options": [
      "outage",
      "standby",
      "surge",
      "breaker"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Your laptop will go into _____ after ten minutes without use. Just press any key to wake it up again.",
    "options": [
      "surge protector",
      "emergency stop",
      "sleep mode",
      "power cable"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "After the software update is installed, you must _____ your computer. The new features will not work until you do this.",
    "options": [
      "drain",
      "trip",
      "isolate",
      "restart"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The technician had to _____ the frozen server twice this morning. After the second try, the website finally came back online.",
    "options": [
      "reboot",
      "drain",
      "ground",
      "fail"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Using the heater and the kettle at the same time may _____ the circuit breaker. Then the whole kitchen will lose electricity.",
    "options": [
      "drain",
      "trip",
      "ground",
      "hibernate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "When the lights went out, the manager checked the circuit _____ in the basement. One switch had turned off, so she pushed it back.",
    "options": [
      "outage",
      "standby",
      "breaker",
      "blackout"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The old toaster stopped working because a _____ inside the plug had blown. Replacing it took the repairman only five minutes.",
    "options": [
      "surge",
      "standby",
      "shutdown",
      "fuse"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Please _____ your phone charger when it is not in use. Leaving it in the wall socket wastes a small amount of electricity.",
    "options": [
      "unplug",
      "reboot",
      "trip",
      "hibernate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Electricians must _____ the machine from the power supply before any repairs. This rule keeps them safe from dangerous electric shocks.",
    "options": [
      "reboot",
      "isolate",
      "drain",
      "hibernate"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "A sudden power _____ during the storm damaged two office computers. The IT team is now replacing their broken parts.",
    "options": [
      "standby",
      "breaker",
      "surge",
      "fuse"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Plug the new printer into a _____ instead of the wall socket. It will block sudden increases in electricity during storms.",
    "options": [
      "sleep mode",
      "emergency stop",
      "screen saver",
      "surge protector"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The projector became very hot after five hours of use. Let it _____ for twenty minutes before you turn it on again.",
    "options": [
      "cool down",
      "cut off",
      "pull the plug",
      "cut power"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The booking website will be _____ from midnight to four in the morning for maintenance. Customers can still make reservations by phone.",
    "options": [
      "dead",
      "offline",
      "portable",
      "fragrant"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Accounts that remain _____ for more than six months will be closed automatically. Please log in at least once to keep your account.",
    "options": [
      "dead",
      "portable",
      "inactive",
      "spacious"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "My phone battery was completely _____, so I couldn't call the client. I should have charged it before leaving the office.",
    "options": [
      "offline",
      "spacious",
      "portable",
      "dead"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Running video apps in the background can quickly _____ your phone's battery. Close them when you are not using them.",
    "options": [
      "drain",
      "trip",
      "isolate",
      "reboot"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Before the flight takes off, passengers must _____ their laptops completely. Phones may stay on if they are in airplane mode.",
    "options": [
      "cool down",
      "power down",
      "cut off",
      "pull the plug"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The electric company will _____ to the whole street for two hours. Workers are replacing an old line near the station.",
    "options": [
      "cool down",
      "switch off",
      "cut power",
      "pull the plug"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The company decided to _____ on the failing project after six months. It had lost too much money and attracted few customers.",
    "options": [
      "cool down",
      "cut power",
      "switch off",
      "pull the plug"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "If the main power supply should _____ during an operation, the hospital generator starts at once. Patients will stay safe and calm.",
    "options": [
      "fail",
      "drain",
      "isolate",
      "reboot"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The worker pressed the red _____ button when the belt caught his sleeve. The machine shut off immediately and nobody was hurt.",
    "options": [
      "sleep mode",
      "emergency stop",
      "surge protector",
      "screen saver"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "shutdown": {
    "pos": "n.",
    "en_def": "the act of turning off a machine or closing a system completely",
    "cn_def": "關閉；停機"
  },
  "switch off": {
    "pos": "v.phr.",
    "en_def": "to stop a light or machine by using a switch",
    "cn_def": "關掉（電源、燈）"
  },
  "turn off": {
    "pos": "v.phr.",
    "en_def": "to stop a machine, light, or supply of water or gas from working",
    "cn_def": "關閉；關掉"
  },
  "blackout": {
    "pos": "n.",
    "en_def": "a period when there is no electricity in an area",
    "cn_def": "停電；大停電"
  },
  "outage": {
    "pos": "n.",
    "en_def": "a time when a service such as electricity, water, or the internet is not available",
    "cn_def": "（電力、網路等）中斷"
  },
  "disconnect": {
    "pos": "v.",
    "en_def": "to separate something from a power supply or network",
    "cn_def": "切斷；斷開連接"
  },
  "cut off": {
    "pos": "v.phr.",
    "en_def": "to stop the supply of something such as electricity, gas, or water",
    "cn_def": "切斷（供應）"
  },
  "deactivate": {
    "pos": "v.",
    "en_def": "to make a system or device stop working",
    "cn_def": "停用；解除（裝置）"
  },
  "disable": {
    "pos": "v.",
    "en_def": "to stop a function or feature from working",
    "cn_def": "停用；使失效"
  },
  "standby": {
    "pos": "n.",
    "en_def": "a state in which a machine is not fully off and can start again quickly",
    "cn_def": "待機（狀態）"
  },
  "sleep mode": {
    "pos": "n.phr.",
    "en_def": "a low-power setting in which a computer stops most activity but keeps your work open",
    "cn_def": "睡眠模式"
  },
  "hibernate": {
    "pos": "v.",
    "en_def": "(of a computer) to save all open work and turn off almost completely",
    "cn_def": "（電腦）休眠"
  },
  "restart": {
    "pos": "v.",
    "en_def": "to start something again after it has stopped",
    "cn_def": "重新啟動"
  },
  "reboot": {
    "pos": "v.",
    "en_def": "to turn a computer or system off and then on again",
    "cn_def": "重新開機"
  },
  "trip": {
    "pos": "v.",
    "en_def": "(of a safety switch) to turn off the electricity suddenly because there is a problem",
    "cn_def": "（斷路器）跳電；跳脫"
  },
  "breaker": {
    "pos": "n.",
    "en_def": "a safety switch that turns off electricity automatically when there is too much current",
    "cn_def": "斷路器"
  },
  "fuse": {
    "pos": "n.",
    "en_def": "a small safety part that breaks and stops the electricity if there is too much current",
    "cn_def": "保險絲"
  },
  "unplug": {
    "pos": "v.",
    "en_def": "to remove a plug from an electric socket",
    "cn_def": "拔掉插頭"
  },
  "plug out": {
    "pos": "v.phr.",
    "en_def": "to remove a plug from a power socket (informal; usually 'unplug')",
    "cn_def": "拔掉插頭（非正式說法）"
  },
  "isolate": {
    "pos": "v.",
    "en_def": "to separate a machine or area from the power supply so that it is safe to work on",
    "cn_def": "隔離；使（電路）分離"
  },
  "ground": {
    "pos": "v.",
    "en_def": "to connect electrical equipment to the earth so that it is safe",
    "cn_def": "使接地"
  },
  "surge": {
    "pos": "n.",
    "en_def": "a sudden, short increase in electrical power",
    "cn_def": "突波；電壓突增"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects electronic equipment from sudden increases in electricity",
    "cn_def": "突波保護器；防雷擊延長線"
  },
  "cool down": {
    "pos": "v.phr.",
    "en_def": "to become less hot, or to make something less hot",
    "cn_def": "冷卻；降溫"
  },
  "offline": {
    "pos": "adj.",
    "en_def": "not connected to the internet or a computer network",
    "cn_def": "離線的；未連線的"
  },
  "inactive": {
    "pos": "adj.",
    "en_def": "not working or not being used",
    "cn_def": "不活動的；未使用的"
  },
  "dead": {
    "pos": "adj.",
    "en_def": "(of a battery or machine) having no power left; not working",
    "cn_def": "（電池）沒電的；（機器）不能運作的"
  },
  "drain": {
    "pos": "v.",
    "en_def": "to use up the power in a battery",
    "cn_def": "耗盡（電力）"
  },
  "battery low": {
    "pos": "phr.",
    "en_def": "a warning that a device has very little power left",
    "cn_def": "電量不足（警示）"
  },
  "power down": {
    "pos": "v.phr.",
    "en_def": "to turn off a machine or system in the correct way",
    "cn_def": "關機；斷電"
  },
  "cut power": {
    "pos": "v.phr.",
    "en_def": "to stop the electricity supply to something",
    "cn_def": "切斷電源"
  },
  "pull the plug": {
    "pos": "v.phr.",
    "en_def": "to stop a project or activity, often by stopping its money (idiom)",
    "cn_def": "喊停；停止（計畫）"
  },
  "fail": {
    "pos": "v.",
    "en_def": "to stop working correctly",
    "cn_def": "故障；失靈"
  },
  "emergency stop": {
    "pos": "n.phr.",
    "en_def": "a button or action that stops a machine immediately in a dangerous situation",
    "cn_def": "緊急停止（按鈕）"
  }
};

const EXTRA_GLOSSES = {};
