// Topic 47 Quiz Data: Celebrity 名人
// Source word list: https://www.examword.com/group-topic/celebrity — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T47 - Celebrity 名人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "impressed",
    "pos": "adj.",
    "cn_def": "印象深刻的",
    "en_def": "feeling admiration because of what someone did",
    "sentence": "A: How did the film director react when the young actress performed her scene in the rehearsal yesterday afternoon? B: He was so {{BLANK}} by her natural performance and clear voice that he offered her a bigger role in the movie, and he even called her agent before lunch.",
    "cn": "A：昨天下午排練時，那位年輕女演員演出她的那場戲，電影導演有什麼反應？ B：他對她自然的表演和清晰的聲音感到非常【印象深刻】，所以給了她電影中更重要的角色，甚至在午餐前就打電話給她的經紀人。"
  },
  {
    "word": "renowned",
    "pos": "adj.",
    "cn_def": "著名的；有名望的",
    "en_def": "famous and respected by many people",
    "sentence": "A: Who is giving the opening speech at the international food festival that our company is sponsoring next month in the convention center? B: A {{BLANK}} chef from Paris will speak about healthy cooking, and many restaurant owners have already bought tickets because they want to hear her advice in person.",
    "cn": "A：下個月我們公司在會議中心贊助的國際美食節，開幕演講由誰負責？ B：一位來自巴黎的【著名】主廚會談健康烹飪，很多餐廳老闆已經買了票，因為他們想親耳聽她的建議。"
  },
  {
    "word": "contribute",
    "pos": "v.",
    "cn_def": "貢獻；捐助",
    "en_def": "to give money, time, or ideas to help something",
    "sentence": "A: The famous singer visited the children's hospital last weekend, but did she just take photos with the patients and leave quickly? B: No, she promised to {{BLANK}} part of the money from her next concert tour to build a new playroom, and she also stayed for three hours to sing with the kids.",
    "cn": "A：那位知名歌手上週末去兒童醫院探訪，她是不是只和病人拍照就很快離開了？ B：不是，她承諾要把下一次巡迴演唱會的部分收入【捐助】出來蓋一間新的遊戲室，而且她還待了三個小時和孩子們一起唱歌。"
  },
  {
    "word": "prominent",
    "pos": "adj.",
    "cn_def": "重要的；著名的",
    "en_def": "important and well known",
    "sentence": "A: Why are so many reporters and photographers waiting outside the hotel lobby this morning, and should we warn our guests about the noise? B: A {{BLANK}} business leader from Singapore is staying here during the trade conference, so yes, please tell guests that the main entrance may be busy until noon.",
    "cn": "A：今天早上為什麼有這麼多記者和攝影師在飯店大廳外面等，我們要提醒客人會有噪音嗎？ B：一位來自新加坡的【知名】企業領袖在貿易會議期間住在這裡，所以是的，請告訴客人正門到中午之前可能都會很擁擠。"
  },
  {
    "word": "ingenuity",
    "pos": "n.",
    "cn_def": "獨創力；巧思",
    "en_def": "skill at thinking of new and clever ideas",
    "sentence": "A: The cooking show host only had a small kitchen and very few ingredients on today's episode, so how did she make such a beautiful dinner? B: Her {{BLANK}} really surprised everyone, because she turned leftover rice and a few vegetables into a colorful dish, and the audience clapped loudly when she finished.",
    "cn": "A：那位烹飪節目主持人今天這集只有一個小廚房和很少的食材，她怎麼做出這麼漂亮的晚餐？ B：她的【巧思】真的讓大家很驚訝，因為她把剩飯和幾樣蔬菜變成了一道色彩繽紛的菜，她做完時觀眾都大聲鼓掌。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "奉獻；專注投入",
    "en_def": "hard work and strong commitment to a goal",
    "sentence": "A: That famous tennis player has won so many tournaments over the past ten years, so what do you think is the secret of her long success? B: I think it is her {{BLANK}} to training, because she practices six hours every day, follows a strict diet, and never skips her morning run, even on holidays.",
    "cn": "A：那位知名網球選手過去十年贏了這麼多錦標賽，你覺得她長久成功的秘訣是什麼？ B：我認為是她對訓練的【投入】，因為她每天練習六小時、遵守嚴格的飲食，而且即使在假日也從不跳過晨跑。"
  },
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱情；熱忱",
    "en_def": "strong excitement and interest",
    "sentence": "A: The new host of our company's podcast has never worked in radio before, so are you worried about how listeners will react to her? B: Not at all, because her {{BLANK}} for technology is easy to hear in every episode, and the number of listeners has already doubled since she joined us in March.",
    "cn": "A：我們公司播客的新主持人以前從沒在廣播界工作過，你擔心聽眾對她的反應嗎？ B：一點也不，因為每一集都很容易聽出她對科技的【熱情】，而且自從她三月加入以來，聽眾人數已經增加了一倍。"
  },
  {
    "word": "lauded",
    "pos": "adj.",
    "cn_def": "備受讚揚的",
    "en_def": "highly praised in public",
    "sentence": "A: Is the new museum downtown worth visiting this weekend, or should I take my parents somewhere else when they come to Taipei? B: You should definitely go, because the museum was designed by a widely {{BLANK}} architect from Japan, and newspapers have praised its bright galleries and peaceful rooftop garden.",
    "cn": "A：市中心的新博物館這週末值得去嗎？還是我爸媽來台北時應該帶他們去別的地方？ B：你一定要去，因為那座博物館是由一位來自日本、廣受【讚揚】的建築師設計的，報紙都稱讚它明亮的展廳和寧靜的屋頂花園。"
  },
  {
    "word": "demeanor",
    "pos": "n.",
    "cn_def": "舉止；態度",
    "en_def": "the way a person looks and behaves",
    "sentence": "A: The actor was asked many difficult questions about his private life at the press conference, so did he become angry with the journalists? B: No, his calm and polite {{BLANK}} impressed everyone in the room, and he simply smiled and said he would rather talk about his new film.",
    "cn": "A：那位演員在記者會上被問了很多關於他私生活的困難問題，他有對記者發脾氣嗎？ B：沒有，他冷靜又有禮貌的【舉止】讓在場的每個人都印象深刻，他只是微笑著說他比較想談談他的新電影。"
  },
  {
    "word": "integrity",
    "pos": "n.",
    "cn_def": "正直；誠信",
    "en_def": "the quality of being honest and having strong morals",
    "sentence": "A: Why did the sports drink company choose that particular basketball player as the face of their new advertising campaign this year? B: They chose him mainly because of his {{BLANK}}, since he has always been honest with fans, refused money to lose games, and treated his teammates with respect.",
    "cn": "A：那家運動飲料公司今年為什麼選那位籃球員當新廣告活動的代言人？ B：他們主要是因為他的【正直】才選他，因為他一向對球迷誠實、拒絕收錢打假球，而且尊重他的隊友。"
  },
  {
    "word": "pursuit",
    "pos": "n.",
    "cn_def": "追求",
    "en_def": "the act of trying to get or achieve something",
    "sentence": "A: The famous pianist left her comfortable job at a bank when she was twenty-five, so wasn't her family worried about that decision? B: They were nervous at first, but they supported her {{BLANK}} of a music career, and now they travel with her to concerts in Europe every summer.",
    "cn": "A：那位知名鋼琴家二十五歲時辭去了銀行的安穩工作，她的家人不擔心那個決定嗎？ B：他們一開始很緊張，但他們支持她對音樂事業的【追求】，現在他們每年夏天都陪她到歐洲參加音樂會。"
  },
  {
    "word": "converted",
    "pos": "adj.",
    "cn_def": "改建的；改裝的",
    "en_def": "changed so it can be used for a different purpose",
    "sentence": "A: Where is the TV star planning to hold the launch party for her new clothing brand, since the hotels downtown are all fully booked? B: She rented a {{BLANK}} factory near the river that is now a stylish event space, and it has enough room for two hundred guests and a small stage.",
    "cn": "A：那位電視明星打算在哪裡舉辦她新服裝品牌的發表派對？市中心的飯店都已經被訂滿了。 B：她租了河邊一間【改建的】工廠，現在是一個時尚的活動場地，有足夠的空間容納兩百位賓客和一個小舞台。"
  },
  {
    "word": "representative",
    "pos": "n.",
    "cn_def": "代表；代理人",
    "en_def": "a person who speaks or acts for another person or group",
    "sentence": "A: The famous actor can't come to the charity dinner tonight because his flight from Los Angeles was delayed, so who will accept the award for him? B: His {{BLANK}} from the agency will come instead, and she will read a short thank-you message that he wrote on the plane this morning.",
    "cn": "A：那位知名演員因為從洛杉磯來的班機延誤，今晚無法出席慈善晚宴，誰會替他領獎？ B：他經紀公司的【代表】會代替他出席，她會朗讀一段他今天早上在飛機上寫的簡短感謝詞。"
  },
  {
    "word": "professionalism",
    "pos": "n.",
    "cn_def": "專業精神；專業素養",
    "en_def": "the high skill and good behavior expected of a worker",
    "sentence": "A: The singer's concert was delayed for an hour because of the heavy rain last night, so were the fans angry when she finally walked on stage? B: Some were upset, but her {{BLANK}} helped a lot, because she apologized sincerely, explained the safety problem clearly, and then sang three extra songs for free.",
    "cn": "A：昨晚因為大雨，那位歌手的演唱會延遲了一個小時，她最後上台時歌迷生氣嗎？ B：有些人不高興，但她的【專業精神】幫了很大的忙，因為她真誠地道歉、清楚說明安全問題，然後還免費多唱了三首歌。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely good; much better than others",
    "sentence": "A: Which employee is going to receive the special prize at the year-end party, since the managers met for a long time yesterday afternoon? B: They chose Linda from customer service, because her work this year was truly {{BLANK}}, and three of our biggest clients wrote letters to thank her personally.",
    "cn": "A：誰會在尾牙上拿到特別獎？經理們昨天下午開了很久的會。 B：他們選了客服部的琳達，因為她今年的工作表現真的很【傑出】，我們三位最大的客戶還親自寫信感謝她。"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏見；偏袒",
    "en_def": "an unfair preference for or against someone or something",
    "sentence": "A: Why did the TV station change the judges for the singing competition before the final round next Saturday night? B: Viewers complained about {{BLANK}}, because one judge was a close friend of a contestant, so the station replaced him to make sure every singer would be treated fairly.",
    "cn": "A：電視台為什麼在下週六晚上決賽前更換了歌唱比賽的評審？ B：觀眾抱怨有【偏袒】，因為其中一位評審是某位參賽者的好朋友，所以電視台換掉他，確保每位歌手都能被公平對待。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的",
    "en_def": "making people want to do or achieve something",
    "sentence": "A: What did you think of the talk by that famous mountain climber at the leadership workshop yesterday afternoon in the main hall? B: It was really {{BLANK}}, because she described how she reached the top after failing twice, and many of my coworkers said they now want to set bigger goals.",
    "cn": "A：你覺得昨天下午在大禮堂領導力工作坊上那位知名登山家的演講怎麼樣？ B：真的很【鼓舞人心】，因為她講述了自己失敗兩次後如何登頂，我很多同事都說他們現在想設定更遠大的目標。"
  },
  {
    "word": "stardom",
    "pos": "n.",
    "cn_def": "明星地位；成名",
    "en_def": "the state of being a very famous performer",
    "sentence": "A: That young actor worked as a waiter in a small restaurant only two years ago, so how did his life change so quickly? B: He rose to {{BLANK}} after his first movie became a huge hit online, and now fans follow him everywhere and companies pay him to advertise their products.",
    "cn": "A：那位年輕演員兩年前還在一家小餐廳當服務生，他的人生怎麼變化得這麼快？ B：他的第一部電影在網路上爆紅之後，他就一躍【成名】，現在粉絲到處跟著他，還有公司付錢請他代言產品。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；欣賞",
    "en_def": "to be thankful for something; to value something",
    "sentence": "A: The famous author spent two hours signing books for our customers on Saturday, so should we send her something to say thank you? B: Yes, let's send flowers and a card, because I'm sure she will {{BLANK}} the gesture, and we hope she will visit our bookstore again when her next novel comes out.",
    "cn": "A：那位知名作家星期六花了兩個小時幫我們的顧客簽書，我們要送她什麼東西表示感謝嗎？ B：好啊，我們送花和卡片吧，我相信她會【感激】這份心意，而且希望她下一本小說出版時能再來我們書店。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why are there so many people standing outside the shopping mall entrance this afternoon, and is something wrong with the building? B: Nothing is wrong, but people are {{BLANK}} because a popular movie star is filming a scene inside, and everyone wants to see who it is before the security guards close the doors.",
    "cn": "A：今天下午為什麼有這麼多人站在購物中心門口？大樓出了什麼問題嗎？ B：沒有問題，只是大家都很【好奇】，因為一位當紅電影明星正在裡面拍戲，每個人都想在保全關門前看看是誰。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "下定決心的；堅決的",
    "en_def": "having a strong wish to do something and not giving up",
    "sentence": "A: The famous swimmer hurt her shoulder badly last year, so does she really plan to compete in the national games again this summer? B: Yes, she is {{BLANK}} to win another gold medal, so she has been doing physical therapy every morning and training in the pool every evening for months.",
    "cn": "A：那位知名游泳選手去年肩膀受了重傷，她今年夏天真的打算再參加全國運動會嗎？ B：是的，她【下定決心】要再拿一面金牌，所以好幾個月來她每天早上做物理治療，每天晚上在泳池訓練。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "sentence": "A: Our new spokesperson used to be very shy when she was young, so how did she become such a confident speaker on television? B: She worked hard to {{BLANK}} her fear by joining a drama club in college, and she practiced speaking in front of small groups until she felt comfortable with large audiences.",
    "cn": "A：我們的新發言人小時候很害羞，她是怎麼變成在電視上這麼有自信的講者的？ B：她大學時參加戲劇社，努力【克服】她的恐懼，她練習在小團體面前說話，直到她面對大批觀眾也能感到自在。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "品格；性格",
    "en_def": "the qualities that make a person who they are",
    "sentence": "A: The hotel manager said the famous guest in room 801 was very kind to the cleaning staff, so is he always like that? B: Yes, people who know him say he has strong {{BLANK}}, because he treats everyone with the same respect, whether they are company presidents or waiters in a small café.",
    "cn": "A：飯店經理說801號房那位知名房客對清潔人員很友善，他一直都是這樣嗎？ B：是的，認識他的人都說他【品格】很好，因為不管對方是公司總裁還是小咖啡館的服務生，他都一樣尊重。"
  },
  {
    "word": "iconic",
    "pos": "adj.",
    "cn_def": "標誌性的；具代表性的",
    "en_def": "very famous and seen as a symbol of something",
    "sentence": "A: The tour group from Korea only has one free afternoon in Taipei next week, so which place should we take them to see? B: I think we should take them to Taipei 101, because it is the city's most {{BLANK}} building, and they can enjoy the view from the top and shop in the mall below.",
    "cn": "A：韓國旅行團下週在台北只有一個自由的下午，我們應該帶他們去看哪裡？ B：我覺得應該帶他們去台北101，因為那是這座城市最具【代表性】的建築，他們可以在頂樓欣賞風景，再到樓下的購物中心逛街。"
  },
  {
    "word": "adore",
    "pos": "v.",
    "cn_def": "非常喜愛；崇拜",
    "en_def": "to love and admire someone very much",
    "sentence": "A: Why is the toy company paying so much money to put that cartoon voice actor in its new television commercial this winter? B: Young children {{BLANK}} her because she voices their favorite rabbit character, so the marketing team believes parents will buy more toys when kids hear her voice.",
    "cn": "A：那家玩具公司為什麼要花這麼多錢，請那位卡通配音員拍今年冬天的新電視廣告？ B：小孩子都很【喜愛】她，因為她為他們最喜歡的兔子角色配音，所以行銷團隊相信孩子聽到她的聲音時，父母就會買更多玩具。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；讚賞",
    "en_def": "to respect and approve of someone or something",
    "sentence": "A: You have read every book written by that famous business leader, so what do you like most about him as a person? B: I really {{BLANK}} the way he started his company with almost no money, and even after becoming rich, he still spends weekends teaching free classes to young people.",
    "cn": "A：那位知名企業領袖寫的每本書你都讀過了，你最喜歡他這個人哪一點？ B：我真的很【欽佩】他幾乎沒有錢就創立了公司，而且即使變得富有之後，他週末仍然為年輕人免費上課。"
  },
  {
    "word": "ordeal",
    "pos": "n.",
    "cn_def": "苦難；痛苦的經歷",
    "en_def": "a very difficult and unpleasant experience",
    "sentence": "A: The famous travel blogger was stuck at the airport for two days because of the typhoon, so how is she feeling now that she is home? B: She is tired but fine, and she wrote a long post about the {{BLANK}}, describing how she slept on the floor and shared snacks with other passengers.",
    "cn": "A：那位知名旅遊部落客因為颱風被困在機場兩天，她現在回到家了，感覺怎麼樣？ B：她很累但還好，她寫了一篇長文描述這段【痛苦的經歷】，說她怎麼睡在地板上，還和其他旅客分享零食。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模特兒；模範",
    "en_def": "a person whose job is to wear clothes in photos or fashion shows; a good example to copy",
    "sentence": "A: The clothing company needs someone to wear the new winter jackets in next month's catalog, so have you found anyone yet? B: Yes, we hired a young {{BLANK}} from Tainan who has worked for several big brands, and the photo shoot will take place at the beach next Tuesday if the weather is good.",
    "cn": "A：服裝公司需要有人穿新款冬季夾克拍下個月的型錄，你們找到人了嗎？ B：找到了，我們聘請了一位來自台南的年輕【模特兒】，她曾為好幾個大品牌工作過，如果天氣好，下週二會在海邊拍照。"
  },
  {
    "word": "awesome",
    "pos": "adj.",
    "cn_def": "很棒的；令人驚嘆的",
    "en_def": "very good or impressive",
    "sentence": "A: How was the concert you went to with your coworkers on Friday night at the new stadium near the train station? B: It was absolutely {{BLANK}}, because the band played all their famous songs, the light show was amazing, and we even got a chance to take a photo with the drummer afterward.",
    "cn": "A：你星期五晚上和同事去火車站附近新體育館看的演唱會怎麼樣？ B：真的太【棒了】，因為樂團唱了所有的經典歌曲，燈光秀很精彩，我們之後甚至還有機會和鼓手合照。"
  }
];

const MCQS = [
  {
    "q": "The investors were deeply _____ by the young founder's clear presentation. They agreed to fund her company the same afternoon.",
    "options": [
      "impressed",
      "curious",
      "iconic",
      "converted"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The hotel restaurant hired a _____ chef who has cooked for presidents and kings. Reservations are now full for three months.",
    "options": [
      "curious",
      "determined",
      "renowned",
      "converted"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "All employees are encouraged to _____ ideas for the new office design. Suggestions can be sent to the HR department by Friday.",
    "options": [
      "adore",
      "contribute",
      "overcome",
      "admire"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The conference will feature several _____ speakers from the banking industry. Their names appear on the front page of the program.",
    "options": [
      "curious",
      "impressed",
      "converted",
      "prominent"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The engineers showed great _____ by building a working cooling system from spare parts. Their manager praised their creative thinking.",
    "options": [
      "bias",
      "ordeal",
      "ingenuity",
      "stardom"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Mr. Chen received an award for his thirty years of _____ to the company. He rarely missed a single day of work.",
    "options": [
      "dedication",
      "bias",
      "ordeal",
      "demeanor"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new intern's _____ for the project was clear from the first day. She volunteered to stay late and help the design team.",
    "options": [
      "bias",
      "ordeal",
      "stardom",
      "enthusiasm"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The highly _____ novel has won three international prizes this year. Bookstores across the country are struggling to keep it in stock.",
    "options": [
      "curious",
      "lauded",
      "impressed",
      "converted"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The receptionist's friendly _____ makes visitors feel welcome as soon as they walk in. Many clients mention her in their feedback forms.",
    "options": [
      "bias",
      "stardom",
      "pursuit",
      "demeanor"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The accountant was promoted because of her _____ and careful work. She has never tried to hide a mistake from her manager.",
    "options": [
      "stardom",
      "integrity",
      "ordeal",
      "bias"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Many young workers move to big cities in _____ of better jobs. Rent, however, can take half of their monthly salary.",
    "options": [
      "pursuit",
      "ordeal",
      "bias",
      "demeanor"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The startup moved into a _____ warehouse that used to store rice. The old building now has bright offices and a rooftop café.",
    "options": [
      "curious",
      "impressed",
      "converted",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Please call our customer service _____ if your order has not arrived within five days. The line is open from 9 a.m. to 6 p.m.",
    "options": [
      "character",
      "representative",
      "ordeal",
      "stardom"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The client praised the team's _____ during the difficult negotiation. Everyone stayed calm, prepared well, and respected the deadlines.",
    "options": [
      "stardom",
      "ordeal",
      "bias",
      "professionalism"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Sales at the Kaohsiung branch were _____ last quarter, rising by forty percent. The branch manager will receive a large bonus.",
    "options": [
      "curious",
      "converted",
      "outstanding",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The company uses a blind review process to reduce _____ in hiring. Managers cannot see the names or photos of applicants.",
    "options": [
      "bias",
      "ordeal",
      "stardom",
      "dedication"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The CEO's speech at the annual meeting was truly _____. Many employees left the room feeling motivated and full of new ideas.",
    "options": [
      "curious",
      "converted",
      "inspiring",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The singer rose to _____ after her video was shared millions of times online. Today she performs in large stadiums around Asia.",
    "options": [
      "stardom",
      "ordeal",
      "bias",
      "integrity"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "We greatly _____ your patience while our website is under repair. All orders placed this week will receive free shipping.",
    "options": [
      "overcome",
      "contribute",
      "adore",
      "appreciate"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Customers were _____ about the new coffee machine in the lobby. Several of them asked the staff how it worked.",
    "options": [
      "renowned",
      "curious",
      "iconic",
      "converted"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The project leader is _____ to finish the report before the deadline. She has asked two coworkers to help her this weekend.",
    "options": [
      "determined",
      "iconic",
      "renowned",
      "converted"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The new airline had to _____ many problems during its first year. Rising fuel prices and staff shortages were the biggest ones.",
    "options": [
      "adore",
      "appreciate",
      "overcome",
      "admire"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Employers often judge a candidate's _____ by checking references from former managers. Honesty and reliability are considered very important.",
    "options": [
      "stardom",
      "character",
      "ordeal",
      "pursuit"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company's red logo has become _____ around the world. People recognize it immediately, even without seeing the brand name.",
    "options": [
      "curious",
      "impressed",
      "determined",
      "iconic"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Children _____ the cartoon panda and hug the stuffed toy version everywhere they go. Sales of the toy doubled last quarter.",
    "options": [
      "overcome",
      "adore",
      "contribute",
      "appreciate"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Staff members _____ the director's courage in speaking honestly to the board. She defended the team even when it was risky.",
    "options": [
      "overcome",
      "contribute",
      "adore",
      "admire"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The passengers described the twelve-hour delay as a terrible _____. The airline offered them free meals and hotel rooms.",
    "options": [
      "stardom",
      "integrity",
      "ordeal",
      "enthusiasm"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The fashion brand hired a famous _____ to wear its new spring collection. The photos will appear in magazines next month.",
    "options": [
      "model",
      "ordeal",
      "bias",
      "pursuit"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Our team-building trip to Hualien was _____. Everyone enjoyed the river rafting and still talks about it every day.",
    "options": [
      "curious",
      "converted",
      "determined",
      "awesome"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Investors trust the bank because of its long history of _____. It has never been involved in a financial scandal.",
    "options": [
      "stardom",
      "integrity",
      "ordeal",
      "enthusiasm"
    ],
    "answer": 1,
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "impressed": {
    "pos": "adj.",
    "en_def": "feeling admiration because of what someone did",
    "cn_def": "印象深刻的"
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "famous and respected by many people",
    "cn_def": "著名的；有名望的"
  },
  "contribute": {
    "pos": "v.",
    "en_def": "to give money, time, or ideas to help something",
    "cn_def": "貢獻；捐助"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known",
    "cn_def": "重要的；著名的"
  },
  "ingenuity": {
    "pos": "n.",
    "en_def": "skill at thinking of new and clever ideas",
    "cn_def": "獨創力；巧思"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "hard work and strong commitment to a goal",
    "cn_def": "奉獻；專注投入"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "strong excitement and interest",
    "cn_def": "熱情；熱忱"
  },
  "lauded": {
    "pos": "adj.",
    "en_def": "highly praised in public",
    "cn_def": "備受讚揚的"
  },
  "demeanor": {
    "pos": "n.",
    "en_def": "the way a person looks and behaves",
    "cn_def": "舉止；態度"
  },
  "integrity": {
    "pos": "n.",
    "en_def": "the quality of being honest and having strong morals",
    "cn_def": "正直；誠信"
  },
  "pursuit": {
    "pos": "n.",
    "en_def": "the act of trying to get or achieve something",
    "cn_def": "追求"
  },
  "converted": {
    "pos": "adj.",
    "en_def": "changed so it can be used for a different purpose",
    "cn_def": "改建的；改裝的"
  },
  "representative": {
    "pos": "n.",
    "en_def": "a person who speaks or acts for another person or group",
    "cn_def": "代表；代理人"
  },
  "professionalism": {
    "pos": "n.",
    "en_def": "the high skill and good behavior expected of a worker",
    "cn_def": "專業精神；專業素養"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good; much better than others",
    "cn_def": "傑出的；出色的"
  },
  "bias": {
    "pos": "n.",
    "en_def": "an unfair preference for or against someone or something",
    "cn_def": "偏見；偏袒"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making people want to do or achieve something",
    "cn_def": "鼓舞人心的"
  },
  "stardom": {
    "pos": "n.",
    "en_def": "the state of being a very famous performer",
    "cn_def": "明星地位；成名"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something; to value something",
    "cn_def": "感激；欣賞"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having a strong wish to do something and not giving up",
    "cn_def": "下定決心的；堅決的"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a problem or difficulty",
    "cn_def": "克服"
  },
  "character": {
    "pos": "n.",
    "en_def": "the qualities that make a person who they are",
    "cn_def": "品格；性格"
  },
  "iconic": {
    "pos": "adj.",
    "en_def": "very famous and seen as a symbol of something",
    "cn_def": "標誌性的；具代表性的"
  },
  "adore": {
    "pos": "v.",
    "en_def": "to love and admire someone very much",
    "cn_def": "非常喜愛；崇拜"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to respect and approve of someone or something",
    "cn_def": "欽佩；讚賞"
  },
  "ordeal": {
    "pos": "n.",
    "en_def": "a very difficult and unpleasant experience",
    "cn_def": "苦難；痛苦的經歷"
  },
  "model": {
    "pos": "n.",
    "en_def": "a person whose job is to wear clothes in photos or fashion shows; a good example to copy",
    "cn_def": "模特兒；模範"
  },
  "awesome": {
    "pos": "adj.",
    "en_def": "very good or impressive",
    "cn_def": "很棒的；令人驚嘆的"
  }
};

const EXTRA_GLOSSES = {};
