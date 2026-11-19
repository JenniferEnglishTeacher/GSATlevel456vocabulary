// Topic 402 Quiz Data: Theater 劇院
// Source word list: https://www.examword.com/group-topic/theater — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T402 - Theater 劇院",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area in a theater where people perform",
    "sentence": "A: Why did the event manager ask all the speakers to arrive an hour early for tonight's company award ceremony at the city theater? B: She wants each speaker to walk across the {{BLANK}} once, check the microphones, and practice where to stand so that nobody looks confused in front of three hundred guests.",
    "cn": "A：為什麼活動經理要求所有講者提早一小時抵達今晚在市立劇院舉行的公司頒獎典禮？ B：她希望每位講者先走過【舞台】一次、檢查麥克風，並練習站的位置，這樣才不會有人在三百位賓客面前看起來不知所措。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾",
    "en_def": "the people who watch or listen to a show",
    "sentence": "A: How did the opening night of your theater group's new play go yesterday, and were you happy with the number of people who came? B: It went very well, because the {{BLANK}} laughed at almost every joke, and many of them stayed after the show to ask the actors questions about the story.",
    "cn": "A：你們劇團新戲昨天的首演夜進行得如何？你對來的人數滿意嗎？ B：非常順利，因為【觀眾】幾乎每個笑話都笑了，而且很多人在演出結束後留下來問演員關於故事的問題。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "演員",
    "en_def": "a person who performs in plays, films, or TV shows",
    "sentence": "A: Why is the theater company spending so much money on advertising this month when sales are usually slow in winter? B: They hired a famous {{BLANK}} from a popular TV series to play the main role, and the manager believes his name will bring in many new customers who rarely go to the theater.",
    "cn": "A：為什麼劇團這個月在廣告上花這麼多錢，冬天的銷售通常不是很差嗎？ B：他們請了一位知名電視劇的【演員】來演主角，經理相信他的名氣會吸引許多很少去看戲的新客人。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman who performs in plays, films, or TV shows",
    "sentence": "A: Have you heard who will play the role of the company president in the new office comedy that opens at the Grand Theater next month? B: Yes, a young {{BLANK}} who won an award last year got the part, and the director says she is perfect because she can be both serious and very funny.",
    "cn": "A：你聽說誰會在下個月於大劇院上演的新辦公室喜劇中飾演公司總裁嗎？ B：聽說了，去年得獎的一位年輕【女演員】拿到了這個角色，導演說她非常適合，因為她既能嚴肅又能非常搞笑。"
  },
  {
    "word": "director",
    "pos": "n.",
    "cn_def": "導演",
    "en_def": "the person who tells the actors what to do in a play or film",
    "sentence": "A: Why did the actors stay at the theater until almost midnight even though their rehearsal was supposed to end at nine? B: The {{BLANK}} was not satisfied with the final scene, so she asked everyone to try it in several different ways until the ending felt more natural and exciting.",
    "cn": "A：為什麼演員們待在劇院到將近午夜，排練不是應該九點結束嗎？ B：【導演】對最後一場戲不滿意，所以她要大家用好幾種不同方式嘗試，直到結局感覺更自然、更精彩為止。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "劇本",
    "en_def": "the written words of a play, film, or show",
    "sentence": "A: Did the writer send us the final version of the play yet, because the actors need to start learning their lines this week? B: She emailed the {{BLANK}} this morning, so I printed twenty copies for the cast and highlighted each person's lines to save time at our first meeting.",
    "cn": "A：作家把這齣戲的最終版本寄給我們了嗎？因為演員們這週得開始背台詞了。 B：她今天早上用電子郵件寄來了【劇本】，所以我幫演員們印了二十份，並把每個人的台詞標出來，以節省我們第一次開會的時間。"
  },
  {
    "word": "rehearsal",
    "pos": "n.",
    "cn_def": "排練；彩排",
    "en_def": "a practice of a play or show before the real performance",
    "sentence": "A: Can I book the large meeting room on Thursday evening for our company's year-end show, or is someone else already using it? B: The HR team has already reserved it, but you can use the training room for your {{BLANK}}, because it is big enough for everyone to practice the dances and songs.",
    "cn": "A：我可以預訂週四晚上的大會議室給我們公司的尾牙表演用嗎？還是已經有人在用了？ B：人資團隊已經預訂了，不過你們可以用訓練室來【排練】，因為那裡夠大，大家都能練習舞蹈和歌曲。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "戲服；服裝",
    "en_def": "special clothes an actor wears in a show",
    "sentence": "A: Why are the actors in the year-end show so worried about Friday, when they already know all of their lines and songs? B: The {{BLANK}} for the main character is still being made by the tailor, and if it does not fit well, she will have to change her dance movements at the last minute.",
    "cn": "A：為什麼尾牙表演的演員們這麼擔心週五，他們不是已經記熟所有台詞和歌曲了嗎？ B：主角的【戲服】還在裁縫那裡製作中，如果不合身，她就得在最後一刻改變舞蹈動作。"
  },
  {
    "word": "prop",
    "pos": "n.",
    "cn_def": "道具",
    "en_def": "an object that actors use on stage during a show",
    "sentence": "A: What happened during the second half of the show, because the audience suddenly started laughing during a very serious moment? B: An important {{BLANK}}, a fake telephone, fell off the table and broke into pieces, so the actor had to pretend to call his boss with a banana instead.",
    "cn": "A：表演下半場發生了什麼事？在一個非常嚴肅的時刻觀眾突然開始大笑。 B：一個重要的【道具】——一支假電話——從桌上掉下來摔成碎片，所以演員只好改用香蕉假裝打電話給他的老闆。"
  },
  {
    "word": "set",
    "pos": "n.",
    "cn_def": "布景",
    "en_def": "the scenery and furniture on a stage for a play",
    "sentence": "A: How long will it take the crew to get the theater ready for the new musical after the current show finishes on Sunday night? B: They need about three days to build the {{BLANK}}, because it includes a large train station, two moving walls, and a staircase that the dancers will use.",
    "cn": "A：本週日晚上目前的演出結束後，工作人員需要多久才能讓劇院為新音樂劇準備就緒？ B：他們大約需要三天來搭建【布景】，因為它包括一座大型火車站、兩面可移動的牆，以及舞者會使用的樓梯。"
  },
  {
    "word": "lighting",
    "pos": "n.",
    "cn_def": "燈光；照明",
    "en_def": "the lights used to light a stage or room",
    "sentence": "A: Why did the photographers complain after the product launch at the theater, even though the presentation itself was a great success? B: The {{BLANK}} on the stage was too dark and too blue, so most of their pictures of the new phone looked unclear, and the marketing team had to hire them again.",
    "cn": "A：為什麼攝影師在劇院的產品發表會後抱怨，雖然發表會本身非常成功？ B：舞台上的【燈光】太暗而且太藍，所以他們拍的新手機照片大多看起來不清楚，行銷團隊只好再請他們一次。"
  },
  {
    "word": "soundtrack",
    "pos": "n.",
    "cn_def": "原聲帶；配樂",
    "en_def": "the music from a film, show, or musical",
    "sentence": "A: Why is the gift shop at the theater so busy today, when the show doesn't start until eight o'clock this evening? B: The {{BLANK}} of the musical was released on CD this morning, and many fans want to buy a copy before the performance so that they can ask the singers to sign it.",
    "cn": "A：為什麼劇院的禮品店今天這麼忙，演出不是今晚八點才開始嗎？ B：這齣音樂劇的【原聲帶】今天早上發行了CD，很多粉絲想在演出前買一張，好請歌手們簽名。"
  },
  {
    "word": "backstage",
    "pos": "adv.",
    "cn_def": "在後台",
    "en_def": "in the area behind the stage that the audience cannot see",
    "sentence": "A: Could you tell me where the speakers should wait before they give their talks at the conference in the theater tomorrow afternoon? B: They should wait {{BLANK}} in the small room behind the curtain, where we will provide water, snacks, and a TV screen so they can watch the other presentations.",
    "cn": "A：可以告訴我明天下午在劇院舉行的研討會上，講者在演講前應該在哪裡等候嗎？ B：他們應該在【後台】布幕後面的小房間等候，我們會在那裡提供水、點心和電視螢幕，讓他們可以觀看其他簡報。"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "cn_def": "布幕；幕",
    "en_def": "a large cloth that hangs in front of a stage",
    "sentence": "A: Why did the manager tell all the late guests to wait in the lobby instead of letting them find their seats right away? B: The {{BLANK}} had already gone up and the first scene had started, so she asked them to wait until the short break to avoid disturbing the actors and other guests.",
    "cn": "A：為什麼經理要所有遲到的客人在大廳等候，而不是讓他們立刻找座位？ B：【幕】已經升起，第一場戲也開始了，所以她請他們等到短暫休息時再進場，以免打擾演員和其他客人。"
  },
  {
    "word": "applause",
    "pos": "n.",
    "cn_def": "掌聲",
    "en_def": "the sound of people clapping to show they enjoyed something",
    "sentence": "A: How did the guests react when our CEO finished her speech about the company's plans for the next five years at the theater? B: There was loud {{BLANK}} for almost two minutes, and many employees stood up because they were excited about the new branches and the higher bonuses she announced.",
    "cn": "A：我們執行長在劇院講完公司未來五年計畫的演說後，來賓有什麼反應？ B：響起了將近兩分鐘熱烈的【掌聲】，很多員工站了起來，因為他們對她宣布的新分公司和更高的獎金感到興奮。"
  },
  {
    "word": "ticket",
    "pos": "n.",
    "cn_def": "票；入場券",
    "en_def": "a piece of paper or e-record that lets you enter a show",
    "sentence": "A: Are you still planning to take your clients to see the new musical downtown on Saturday evening after the business dinner? B: Yes, but I couldn't buy a {{BLANK}} online because the website kept crashing, so I'm going to the box office during lunch to buy four seats near the front.",
    "cn": "A：你還打算週六晚上商務晚餐後帶客戶去市區看新的音樂劇嗎？ B：是的，但因為網站一直當機，我沒辦法在網路上買【票】，所以我午餐時間要去售票處買四個前排的座位。"
  },
  {
    "word": "balcony",
    "pos": "n.",
    "cn_def": "樓座；包廂",
    "en_def": "the upper level of seats in a theater",
    "sentence": "A: Why did you choose seats so far away from the stage when we have a big budget for entertaining our guests from Japan? B: The seats in the first row of the {{BLANK}} actually give the best view of the whole stage, and our guests told me they prefer watching the dancers from above.",
    "cn": "A：我們招待日本客人的預算很多，為什麼你選了離舞台那麼遠的座位？ B：【樓座】第一排的座位其實能看到整個舞台最好的視野，而且我們的客人告訴我，他們比較喜歡從上方觀賞舞者。"
  },
  {
    "word": "aisle",
    "pos": "n.",
    "cn_def": "走道",
    "en_def": "a narrow path between rows of seats",
    "sentence": "A: Do you know why the theater manager asked us to move our bags before the show started this evening? B: Some of our bags were left in the {{BLANK}} between the rows of seats, and she said people could trip and fall if they walked there in the dark during the performance.",
    "cn": "A：你知道為什麼今晚演出開始前劇院經理要我們把包包移開嗎？ B：我們有些包包放在座位排與排之間的【走道】上，她說如果有人在演出時摸黑走過去可能會絆倒。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "中場休息",
    "en_def": "a short break between two parts of a show",
    "sentence": "A: Will we have enough time to buy drinks and visit the restroom during the long musical tonight, or should we go before it begins? B: Don't worry, there is a twenty-minute {{BLANK}} between the first and second halves, so we can easily get coffee at the bar and talk about the story.",
    "cn": "A：今晚這齣很長的音樂劇中，我們有足夠時間買飲料和上洗手間嗎？還是應該在開演前先去？ B：別擔心，上下半場之間有二十分鐘的【中場休息】，所以我們可以輕鬆地在吧台買咖啡並聊聊劇情。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "一場戲；場景",
    "en_def": "one short part of a play or film in one place",
    "sentence": "A: Which part of the play did your clients enjoy most last night, since you said they were talking about it during dinner? B: They loved the {{BLANK}} in which the young employee finally tells his strict boss the truth, because it reminded them of real situations in their own offices.",
    "cn": "A：你的客戶昨晚最喜歡這齣戲的哪個部分？你說他們晚餐時一直在談論它。 B：他們很喜歡年輕員工終於對嚴格老闆說出真相的那【一場戲】，因為那讓他們想起自己辦公室裡的真實情況。"
  },
  {
    "word": "act",
    "pos": "n.",
    "cn_def": "（戲劇的）幕",
    "en_def": "one of the main parts that a play is divided into",
    "sentence": "A: What time will the play finish tonight, because I need to catch the last train home after the company's theater night? B: The second {{BLANK}} usually ends at about ten thirty, so you will have enough time to walk to the station if you leave quickly after the final song.",
    "cn": "A：今晚的戲幾點結束？公司劇院之夜後我需要趕最後一班火車回家。 B：第二【幕】通常大約十點半結束，所以如果你在最後一首歌後趕快離開，就有足夠的時間走到車站。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對白；對話",
    "en_def": "the words that characters say to each other",
    "sentence": "A: Why did many audience members say the new comedy was boring, even though the actors and costumes were excellent? B: The {{BLANK}} between the characters was too long and not very funny, so people lost interest and started checking their phones during the middle of the show.",
    "cn": "A：為什麼很多觀眾說這齣新喜劇很無聊，雖然演員和戲服都很棒？ B：角色之間的【對白】太長而且不太好笑，所以人們失去了興趣，在演出中段開始看手機。"
  },
  {
    "word": "monologue",
    "pos": "n.",
    "cn_def": "獨白",
    "en_def": "a long speech by one actor alone",
    "sentence": "A: Why is the lead actor practicing alone in the empty meeting room every lunch break this week? B: He has a five-minute {{BLANK}} in the final scene, where he speaks to the audience by himself, and he is afraid he will forget the words without the other actors to help him.",
    "cn": "A：為什麼這週男主角每天午休都獨自在空的會議室裡練習？ B：他在最後一場戲有一段五分鐘的【獨白】，要自己一個人對觀眾說話，他擔心沒有其他演員幫忙會忘詞。"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "cn_def": "喜劇",
    "en_def": "a funny play, film, or show that makes people laugh",
    "sentence": "A: What kind of show should we choose for the staff party next month, since everyone has been so stressed about the busy season? B: I think a light {{BLANK}} would be best, because people need to laugh and relax after working long hours, and a sad story might make them feel even more tired.",
    "cn": "A：下個月的員工派對我們該選什麼樣的表演？大家最近都因為旺季壓力很大。 B：我覺得輕鬆的【喜劇】最好，因為大家長時間工作後需要笑一笑、放鬆一下，悲傷的故事可能會讓他們覺得更累。"
  },
  {
    "word": "tragedy",
    "pos": "n.",
    "cn_def": "悲劇",
    "en_def": "a serious play with a sad ending",
    "sentence": "A: Why were so many people crying when they came out of the theater, even though the actors were smiling and waving at the end? B: The play is a famous {{BLANK}} about a family business that loses everything, and the ending, where the old father dies alone, is very sad and moving.",
    "cn": "A：為什麼這麼多人走出劇院時都在哭，雖然演員們在結尾時微笑揮手？ B：這齣戲是一部著名的【悲劇】，講述一個失去一切的家族企業，而年老父親孤獨死去的結局非常悲傷感人。"
  },
  {
    "word": "musical",
    "pos": "n.",
    "cn_def": "音樂劇",
    "en_def": "a play or film with a lot of singing and dancing",
    "sentence": "A: Is it true that the theater downtown will be closed for three months, and do you know what they are planning to show after it reopens? B: Yes, they are repairing the roof, and after that they will present a new {{BLANK}} with more than twenty songs, a big band, and dancers from Broadway.",
    "cn": "A：市區的劇院真的要關閉三個月嗎？你知道它重新開放後計畫上演什麼嗎？ B：是的，他們正在修理屋頂，之後會推出一部新【音樂劇】，有二十多首歌、大型樂隊，還有來自百老匯的舞者。"
  },
  {
    "word": "drama",
    "pos": "n.",
    "cn_def": "戲劇",
    "en_def": "the art of acting and performing plays",
    "sentence": "A: Why did your company decide to send all the new sales staff to an acting class on Saturday mornings? B: The trainer believes that {{BLANK}} exercises can help shy employees speak more clearly, use their bodies with confidence, and understand how customers feel during difficult conversations.",
    "cn": "A：為什麼你們公司決定讓所有新業務人員週六早上去上表演課？ B：培訓師相信【戲劇】練習可以幫助害羞的員工說話更清楚、更有自信地運用肢體，並了解客戶在困難對話中的感受。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "演出；表演",
    "en_def": "a show of a play, music, or dance in front of people",
    "sentence": "A: Why did the theater office call every customer who bought seats for Friday night's show? B: The main singer became sick on Thursday, so the {{BLANK}} was moved to next Wednesday, and the staff wanted to offer everyone a new date or a full refund before they traveled to the theater.",
    "cn": "A：為什麼劇院辦公室打電話給每位買了週五晚場座位的客人？ B：主唱週四生病了，所以【演出】改到下週三，工作人員想在大家前往劇院之前，提供每個人新的日期或全額退款。"
  },
  {
    "word": "premiere",
    "pos": "n.",
    "cn_def": "首演；首映",
    "en_def": "the first public show of a new play or film",
    "sentence": "A: Why is the hotel next to the theater fully booked this weekend, when it is usually quiet at this time of year? B: The {{BLANK}} of a new play by a famous writer is on Saturday night, and many reporters, critics, and celebrities are coming from other cities to see it first.",
    "cn": "A：為什麼劇院旁邊的飯店這個週末全部客滿，每年這個時候通常很冷清？ B：一位知名作家新劇的【首演】在週六晚上，很多記者、評論家和名人從其他城市過來搶先觀賞。"
  },
  {
    "word": "cast",
    "pos": "n.",
    "cn_def": "演員陣容；全體演員",
    "en_def": "all the actors in a play or film",
    "sentence": "A: Why does the theater company want to rent a large restaurant after the last show next Sunday? B: The director wants to thank the whole {{BLANK}} for their hard work, so all the actors and actresses, plus their families, are invited to a dinner with speeches and small gifts.",
    "cn": "A：為什麼劇團想在下週日最後一場演出後租一間大餐廳？ B：導演想感謝【全體演員】的辛勞，所以所有男女演員及其家人都受邀參加有致詞和小禮物的晚宴。"
  },
  {
    "word": "crew",
    "pos": "n.",
    "cn_def": "工作人員",
    "en_def": "a group of people who work together behind the scenes",
    "sentence": "A: Who is responsible for moving the heavy furniture and changing the lights between scenes during the show at our company event? B: The stage {{BLANK}} handles all of that, and they wear black clothes so that the audience cannot see them easily when they work quickly in the dark between scenes.",
    "cn": "A：我們公司活動的演出中，誰負責在換場之間搬動沉重的家具和更換燈光？ B：舞台【工作人員】負責所有這些事，他們穿黑色衣服，這樣在換場時於黑暗中快速工作，觀眾就不容易看到他們。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "聚光燈",
    "en_def": "a strong light that shines on one person or place",
    "sentence": "A: How will the audience know which speaker to look at when the hall goes dark at the start of the award ceremony? B: A bright {{BLANK}} will shine on the host as she walks to the center of the stage, and then it will follow each winner as they come up to receive their prizes.",
    "cn": "A：頒獎典禮一開始大廳變暗時，觀眾怎麼知道要看哪位講者？ B：當主持人走到舞台中央時，一盞明亮的【聚光燈】會照在她身上，然後會跟著每位得獎者上台領獎。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；引人注目的",
    "en_def": "exciting and surprising; easy to notice",
    "sentence": "A: Why did all the employees start talking excitedly after the company's presentation at the theater ended this morning? B: The CEO made a {{BLANK}} entrance by riding onto the stage on an electric scooter, and then she announced that every staff member would get a new laptop next month.",
    "cn": "A：為什麼今天早上公司在劇院的發表會結束後，所有員工都興奮地討論起來？ B：執行長騎著電動滑板車上台，來了個【戲劇性的】登場，然後宣布每位員工下個月都會拿到一台新筆電。"
  },
  {
    "word": "live",
    "pos": "adj.",
    "cn_def": "現場的",
    "en_def": "happening in front of people at the same time, not recorded",
    "sentence": "A: Why are seats for this weekend's concert in the theater so expensive compared with the movie version shown in cinemas last year? B: This time it is a {{BLANK}} show with real singers and a full orchestra on stage, so the organizers have to pay many more people than a cinema does.",
    "cn": "A：為什麼這週末劇院演唱會的座位，比去年電影院放映的電影版貴這麼多？ B：這次是有真人歌手和完整管弦樂團在台上的【現場】演出，所以主辦單位要付錢給的人比電影院多得多。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "改編",
    "en_def": "to change a book or story so it can be a play or film",
    "sentence": "A: Why does the theater company want to buy the rights to that best-selling business novel about a small coffee shop? B: They plan to {{BLANK}} the book into a two-hour play for the stage, and they think office workers will enjoy the story because it is about building a company from nothing.",
    "cn": "A：為什麼劇團想買下那本關於一家小咖啡店的暢銷商業小說的版權？ B：他們計畫把這本書【改編】成兩小時的舞台劇，他們認為上班族會喜歡這個故事，因為它講的是白手起家創業。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興表演；即興發揮",
    "en_def": "to perform or speak without preparing first",
    "sentence": "A: What did the actors do when the lights suddenly went off in the middle of the show last Friday night? B: They had to {{BLANK}} for almost ten minutes, telling jokes and singing simple songs in the dark until the technicians fixed the problem and the play could continue.",
    "cn": "A：上週五晚上演出中途燈光突然熄滅時，演員們怎麼做？ B：他們不得不【即興表演】將近十分鐘，在黑暗中講笑話、唱簡單的歌，直到技術人員修好問題，戲才能繼續。"
  }
];

const MCQS = [
  {
    "q": "The keynote speaker walked onto the _____ just after the lights dimmed. Everyone in the hall became quiet and listened.",
    "options": [
      "stage",
      "script",
      "applause",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ clapped loudly when the final song ended. Many people stood up and asked the singers to perform once more.",
    "options": [
      "script",
      "prop",
      "audience",
      "interval"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The _____ asked the actors to repeat the last scene three times. She wanted the ending to feel more natural for viewers.",
    "options": [
      "soundtrack",
      "director",
      "balcony",
      "costume"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Each actor received a copy of the _____ two weeks before rehearsals began. They were asked to learn all their lines by Friday.",
    "options": [
      "spotlight",
      "aisle",
      "applause",
      "script"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The final _____ will take place on Thursday afternoon in the main hall. All performers must arrive by two o'clock in full costume.",
    "options": [
      "soundtrack",
      "prop",
      "rehearsal",
      "aisle"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The tailor is still sewing the main character's _____ for the company show. It must be finished before the dress rehearsal on Friday.",
    "options": [
      "costume",
      "aisle",
      "dialogue",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "A fake telephone was the most important _____ in the second scene. When it broke, the actor had to use his hand instead.",
    "options": [
      "audience",
      "premiere",
      "interval",
      "prop"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The crew needs three days to build the _____ for the new musical. It includes a train station and two moving walls.",
    "options": [
      "applause",
      "set",
      "dialogue",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The photographers complained that the _____ on stage was too dark. Most of their pictures of the new product were unclear.",
    "options": [
      "lighting",
      "applause",
      "dialogue",
      "premiere"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Late guests must wait in the lobby once the _____ goes up. They may enter the hall during the short break.",
    "options": [
      "script",
      "crew",
      "curtain",
      "comedy"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The CEO's speech was followed by loud _____ from the employees. Many of them stood up and cheered for the new bonus plan.",
    "options": [
      "costume",
      "applause",
      "interval",
      "script"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Please show your _____ to the staff at the entrance. You may print it at home or display it on your phone.",
    "options": [
      "monologue",
      "curtain",
      "tragedy",
      "ticket"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please do not leave bags in the _____ between the rows of seats. Guests could trip over them in the dark.",
    "options": [
      "soundtrack",
      "comedy",
      "aisle",
      "premiere"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "There will be a twenty-minute _____ between the two halves of the show. Drinks and snacks will be sold in the lobby.",
    "options": [
      "interval",
      "spotlight",
      "costume",
      "script"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The opening _____ shows a busy office on a Monday morning. Many viewers said it reminded them of their own workplaces.",
    "options": [
      "crew",
      "aisle",
      "applause",
      "scene"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Critics said the _____ between the two main characters sounded natural and funny. The writer spent months listening to real office conversations.",
    "options": [
      "balcony",
      "dialogue",
      "crew",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "In the final scene, the lead actor delivers a five-minute _____ alone on stage. He speaks directly to the audience about his regrets.",
    "options": [
      "monologue",
      "aisle",
      "balcony",
      "curtain"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The staff voted for a light _____ for the year-end party. After a stressful season, everyone wanted to laugh and relax.",
    "options": [
      "interval",
      "aisle",
      "comedy",
      "crew"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The play is a famous _____ about a family business that loses everything. Many audience members were crying when they left the theater.",
    "options": [
      "soundtrack",
      "tragedy",
      "balcony",
      "aisle"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The new _____ features more than twenty songs and a large band. Its soundtrack will be released on CD next month.",
    "options": [
      "crew",
      "aisle",
      "applause",
      "musical"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Friday night's _____ has been moved to next Wednesday because the lead singer is ill. Ticket holders may request a full refund.",
    "options": [
      "balcony",
      "costume",
      "performance",
      "script"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Many reporters and critics attended the _____ of the new play on Saturday night. It was the first time the show was presented publicly.",
    "options": [
      "premiere",
      "aisle",
      "prop",
      "costume"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The director thanked the whole _____ for their hard work after the final show. Every actor received a small gift and a card.",
    "options": [
      "aisle",
      "script",
      "curtain",
      "cast"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The stage _____ changed the furniture quickly between scenes. They wore black clothes so the audience could not see them.",
    "options": [
      "applause",
      "crew",
      "soundtrack",
      "dialogue"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "A bright _____ followed each winner as they walked to the stage. The rest of the hall remained completely dark.",
    "options": [
      "spotlight",
      "dialogue",
      "interval",
      "script"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The CEO made a _____ entrance by riding onto the stage on a scooter. Employees are still talking about it today.",
    "options": [
      "absent",
      "crowded",
      "dramatic",
      "empty"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The concert will be a _____ show with real singers and a full orchestra. It will not be a recording shown on a screen.",
    "options": [
      "absent",
      "live",
      "empty",
      "rare"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The theater company plans to _____ the best-selling novel into a two-hour stage play. Rehearsals will begin next spring.",
    "options": [
      "improvise",
      "attend",
      "clap",
      "adapt"
    ],
    "answer": 3,
    "vocabIndex": 34
  },
  {
    "q": "When the lights went off, the actors had to _____ for ten minutes. They told jokes until the technicians fixed the problem.",
    "options": [
      "purchase",
      "register",
      "improvise",
      "translate"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "The _____ of the musical was released on CD this morning. Fans lined up to buy copies and get them signed by the singers.",
    "options": [
      "soundtrack",
      "aisle",
      "crew",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 11
  }
];

const LOOKUP = {
  "stage": {
    "pos": "n.",
    "en_def": "the raised area in a theater where people perform",
    "cn_def": "舞台"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a show",
    "cn_def": "觀眾"
  },
  "actor": {
    "pos": "n.",
    "en_def": "a person who performs in plays, films, or TV shows",
    "cn_def": "演員"
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman who performs in plays, films, or TV shows",
    "cn_def": "女演員"
  },
  "director": {
    "pos": "n.",
    "en_def": "the person who tells the actors what to do in a play or film",
    "cn_def": "導演"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words of a play, film, or show",
    "cn_def": "劇本"
  },
  "rehearsal": {
    "pos": "n.",
    "en_def": "a practice of a play or show before the real performance",
    "cn_def": "排練；彩排"
  },
  "costume": {
    "pos": "n.",
    "en_def": "special clothes an actor wears in a show",
    "cn_def": "戲服；服裝"
  },
  "prop": {
    "pos": "n.",
    "en_def": "an object that actors use on stage during a show",
    "cn_def": "道具"
  },
  "set": {
    "pos": "n.",
    "en_def": "the scenery and furniture on a stage for a play",
    "cn_def": "布景"
  },
  "lighting": {
    "pos": "n.",
    "en_def": "the lights used to light a stage or room",
    "cn_def": "燈光；照明"
  },
  "soundtrack": {
    "pos": "n.",
    "en_def": "the music from a film, show, or musical",
    "cn_def": "原聲帶；配樂"
  },
  "backstage": {
    "pos": "adv.",
    "en_def": "in the area behind the stage that the audience cannot see",
    "cn_def": "在後台"
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a large cloth that hangs in front of a stage",
    "cn_def": "布幕；幕"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping to show they enjoyed something",
    "cn_def": "掌聲"
  },
  "ticket": {
    "pos": "n.",
    "en_def": "a piece of paper or e-record that lets you enter a show",
    "cn_def": "票；入場券"
  },
  "balcony": {
    "pos": "n.",
    "en_def": "the upper level of seats in a theater",
    "cn_def": "樓座；包廂"
  },
  "aisle": {
    "pos": "n.",
    "en_def": "a narrow path between rows of seats",
    "cn_def": "走道"
  },
  "interval": {
    "pos": "n.",
    "en_def": "a short break between two parts of a show",
    "cn_def": "中場休息"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one short part of a play or film in one place",
    "cn_def": "一場戲；場景"
  },
  "act": {
    "pos": "n.",
    "en_def": "one of the main parts that a play is divided into",
    "cn_def": "（戲劇的）幕"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "the words that characters say to each other",
    "cn_def": "對白；對話"
  },
  "monologue": {
    "pos": "n.",
    "en_def": "a long speech by one actor alone",
    "cn_def": "獨白"
  },
  "comedy": {
    "pos": "n.",
    "en_def": "a funny play, film, or show that makes people laugh",
    "cn_def": "喜劇"
  },
  "tragedy": {
    "pos": "n.",
    "en_def": "a serious play with a sad ending",
    "cn_def": "悲劇"
  },
  "musical": {
    "pos": "n.",
    "en_def": "a play or film with a lot of singing and dancing",
    "cn_def": "音樂劇"
  },
  "drama": {
    "pos": "n.",
    "en_def": "the art of acting and performing plays",
    "cn_def": "戲劇"
  },
  "performance": {
    "pos": "n.",
    "en_def": "a show of a play, music, or dance in front of people",
    "cn_def": "演出；表演"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public show of a new play or film",
    "cn_def": "首演；首映"
  },
  "cast": {
    "pos": "n.",
    "en_def": "all the actors in a play or film",
    "cn_def": "演員陣容；全體演員"
  },
  "crew": {
    "pos": "n.",
    "en_def": "a group of people who work together behind the scenes",
    "cn_def": "工作人員"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light that shines on one person or place",
    "cn_def": "聚光燈"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "exciting and surprising; easy to notice",
    "cn_def": "戲劇性的；引人注目的"
  },
  "live": {
    "pos": "adj.",
    "en_def": "happening in front of people at the same time, not recorded",
    "cn_def": "現場的"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change a book or story so it can be a play or film",
    "cn_def": "改編"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to perform or speak without preparing first",
    "cn_def": "即興表演；即興發揮"
  }
};

const EXTRA_GLOSSES = {};
