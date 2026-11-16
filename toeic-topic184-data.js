// Topic 184 Quiz Data: Idol 偶像
// Source word list: https://www.examword.com/group-topic/idol — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T184 - Idol 偶像",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人",
    "en_def": "a famous person, especially in entertainment",
    "sentence": "A: Why is there such a long line of people with cameras outside the new shopping mall on Main Street this afternoon? B: A famous {{BLANK}} from a popular cooking show is opening her own bakery there today, so hundreds of shoppers came early to take photos and get free samples.",
    "cn": "A：今天下午為什麼主街新購物中心外面有這麼長一排拿著相機的人？ B：一位來自熱門烹飪節目的知名【名人】今天在那裡開設她自己的烘焙坊，所以數百名購物者提早來拍照並領取免費試吃品。"
  },
  {
    "word": "star",
    "pos": "n.",
    "cn_def": "明星",
    "en_def": "a very famous performer, such as an actor or singer",
    "sentence": "A: Do you know why the marketing team decided to spend so much of this year's budget on the new television commercial? B: They hired a well-known movie {{BLANK}} to appear in it, and they believe her fans will buy our sports drinks after seeing her use them at the gym.",
    "cn": "A：你知道為什麼行銷團隊決定把今年這麼多預算花在新的電視廣告上嗎？ B：他們請了一位知名的電影【明星】來拍廣告，他們相信她的粉絲看到她在健身房喝我們的運動飲料後就會購買。"
  },
  {
    "word": "icon",
    "pos": "n.",
    "cn_def": "代表人物；偶像",
    "en_def": "a famous person or thing that represents an idea or style",
    "sentence": "A: Why did the company choose that older singer for the anniversary campaign instead of someone younger and more modern? B: She is a fashion {{BLANK}} whom people of every age recognize immediately, and the managers think her classic image will remind customers that our brand has been trusted for fifty years.",
    "cn": "A：為什麼公司週年活動選了那位資深歌手，而不是更年輕、更現代的人？ B：她是各個年齡層的人都能立刻認出的時尚【代表人物】，主管們認為她經典的形象能提醒顧客，我們的品牌已經受到信賴五十年了。"
  },
  {
    "word": "hero",
    "pos": "n.",
    "cn_def": "英雄",
    "en_def": "a person admired for being brave or doing something great",
    "sentence": "A: Did you hear what happened at the train station near our office during the fire alarm yesterday evening? B: Yes, a young cleaner helped an elderly passenger out of the building before the firefighters arrived, and now everyone in the neighborhood calls him a local {{BLANK}} and wants to thank him.",
    "cn": "A：你有聽說昨天傍晚火警警報響起時，我們辦公室附近的火車站發生了什麼事嗎？ B：有，一位年輕的清潔工在消防員抵達前幫助一位年長的乘客離開建築物，現在整個社區的人都稱他是當地的【英雄】，想要感謝他。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose good behavior others copy",
    "sentence": "A: Why does the training department want Ms. Lin to speak to all the new employees during their first week at the company? B: She started as a part-time assistant and became a department manager in eight years, so she is a great {{BLANK}} for young workers who want to grow their careers here.",
    "cn": "A：為什麼訓練部門希望林小姐在新進員工到職的第一週對他們演講？ B：她從兼職助理做起，八年內成為部門經理，所以對想在這裡發展職涯的年輕員工來說，她是絕佳的【榜樣】。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響；影響力",
    "en_def": "the power to change what people think or do",
    "sentence": "A: Why are so many teenagers suddenly buying that expensive brand of running shoes at our downtown store this month? B: A popular singer wore them in her latest music video, and her {{BLANK}} on young shoppers is so strong that the shoes sold out in just three days.",
    "cn": "A：為什麼這個月突然有這麼多青少年在我們市中心的店購買那個昂貴品牌的跑鞋？ B：一位受歡迎的歌手在她最新的音樂影片中穿了那雙鞋，她對年輕消費者的【影響力】非常強大，所以那雙鞋三天內就賣光了。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感；啟發",
    "en_def": "someone or something that gives you new ideas or the wish to do something",
    "sentence": "A: Where did the designer get the idea for the colorful new logo that everyone in the meeting liked so much this morning? B: She said her favorite painter was the main {{BLANK}}, because she visited his exhibition last weekend and loved how he used bright colors to show happy feelings.",
    "cn": "A：設計師是從哪裡得到今天早上會議中大家都很喜歡的那個繽紛新標誌的點子？ B：她說她最喜愛的畫家是主要的【靈感來源】，因為她上週末去看了他的展覽，很喜歡他用明亮色彩表現快樂情緒的方式。"
  },
  {
    "word": "fan",
    "pos": "n.",
    "cn_def": "粉絲；迷",
    "en_def": "a person who likes a famous person, team, or band very much",
    "sentence": "A: Why are you leaving work early on Friday when we still have so many reports to finish before the end of the month? B: I am a huge {{BLANK}} of that rock band, and I bought tickets to their concert six months ago, but I promise to finish my reports on Thursday night.",
    "cn": "A：月底前我們還有這麼多報告要完成，你為什麼星期五要提早下班？ B：我是那個搖滾樂團的超級【粉絲】，六個月前就買了他們演唱會的票，但我保證星期四晚上會把報告完成。"
  },
  {
    "word": "fandom",
    "pos": "n.",
    "cn_def": "粉絲群；粉絲圈",
    "en_def": "all the fans of a person, group, or show as a community",
    "sentence": "A: Why does our marketing manager spend so much time reading online forums about that Korean pop group? B: The group's {{BLANK}} is very active on social media, and if those loyal fans like our new phone case design, they will share it with millions of people around the world for free.",
    "cn": "A：為什麼我們的行銷經理花這麼多時間看那個韓國流行團體的網路論壇？ B：那個團體的【粉絲群】在社群媒體上非常活躍，如果那些忠實粉絲喜歡我們新的手機殼設計，他們就會免費分享給全世界數百萬人。"
  },
  {
    "word": "supporter",
    "pos": "n.",
    "cn_def": "支持者",
    "en_def": "a person who helps or likes a person, group, or idea",
    "sentence": "A: How did the small bookstore on Park Road manage to stay open after the rent increased so much last year? B: One loyal {{BLANK}} who had shopped there for twenty years organized a fundraising event, and many neighbors donated money and bought books to help the owner pay the bills.",
    "cn": "A：公園路上那家小書店在去年房租大漲之後，是怎麼繼續營業的？ B：一位在那裡購物二十年的忠實【支持者】籌辦了一場募款活動，許多鄰居捐錢並買書，幫助老闆支付帳單。"
  },
  {
    "word": "follower",
    "pos": "n.",
    "cn_def": "追蹤者；追隨者",
    "en_def": "a person who follows someone, especially on social media",
    "sentence": "A: Why did the restaurant invite that young food blogger to try the new menu before it opens to the public next week? B: She posts reviews every day, and nearly every {{BLANK}} of her popular account visits the places she recommends, so one good post could bring us hundreds of new customers.",
    "cn": "A：為什麼餐廳在下週對外開放前，邀請那位年輕的美食部落客來試吃新菜單？ B：她每天發布評論，幾乎她熱門帳號的每一位【追蹤者】都會去她推薦的地方，所以一篇好評就可能為我們帶來數百位新顧客。"
  },
  {
    "word": "admire",
    "pos": "v.",
    "cn_def": "欽佩；欣賞",
    "en_def": "to like and respect someone very much",
    "sentence": "A: Why do you always talk about your old manager from the hotel where you worked before joining our company? B: I really {{BLANK}} the way she stayed calm during busy holidays and treated every guest and employee kindly, so I try to follow her example when I lead my own team now.",
    "cn": "A：你為什麼總是談到你加入我們公司之前在飯店工作時的前主管？ B：我真的很【欣賞】她在忙碌的假期仍保持冷靜，並且親切對待每位客人和員工，所以現在我帶領自己的團隊時，都努力以她為榜樣。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊敬；尊重",
    "en_def": "to have a good opinion of someone because of their qualities",
    "sentence": "A: Why does everyone in the factory listen so carefully whenever the old engineer gives advice during the morning meetings? B: The workers {{BLANK}} him because he has solved difficult machine problems for over thirty years and always explains things patiently to new staff who make mistakes.",
    "cn": "A：為什麼每當那位資深工程師在晨會上給建議時，工廠裡的每個人都聽得那麼仔細？ B：工人們都很【尊敬】他，因為他三十多年來解決過許多困難的機器問題，而且總是耐心地向犯錯的新員工解釋。"
  },
  {
    "word": "praise",
    "pos": "v.",
    "cn_def": "稱讚；讚揚",
    "en_def": "to say that someone or something is very good",
    "sentence": "A: What did the director say about the charity concert that our team organized at the city park last weekend? B: She plans to {{BLANK}} everyone at Monday's meeting, because the event raised more money than expected and many local newspapers wrote positive stories about our company.",
    "cn": "A：主任對我們團隊上週末在市立公園舉辦的慈善音樂會有什麼看法？ B：她打算在星期一的會議上【稱讚】每個人，因為活動募得的款項比預期多，而且許多地方報紙都寫了關於我們公司的正面報導。"
  },
  {
    "word": "idolize",
    "pos": "v.",
    "cn_def": "崇拜；把…當偶像",
    "en_def": "to admire someone so much that you think they are perfect",
    "sentence": "A: Why does your younger brother practice basketball for four hours every day, even during the cold winter holidays? B: He has started to {{BLANK}} a famous professional player from Taiwan, so he watches all of her games online and dreams of playing in a big international league one day.",
    "cn": "A：為什麼你弟弟每天練習籃球四小時，即使是寒冷的寒假也一樣？ B：他開始【崇拜】一位來自台灣的知名職業球員，所以他在網路上看她所有的比賽，夢想有一天能在大型國際聯賽打球。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "宣傳；推廣",
    "en_def": "to help sell a product or make it well known through advertising",
    "sentence": "A: Why is that well-known actor visiting our headquarters next Tuesday instead of filming his new movie? B: He signed a contract to {{BLANK}} our new line of electric scooters, so he will record videos in our showroom and talk with reporters about why he enjoys riding them to work.",
    "cn": "A：為什麼那位知名演員下週二要來我們總部，而不是去拍他的新電影？ B：他簽了合約要【宣傳】我們新的電動機車系列，所以他會在我們的展示間錄影，並和記者聊聊他為什麼喜歡騎它們上班。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone the confidence or support to do something",
    "sentence": "A: How can we get more employees to join the volunteer program at the children's hospital this year? B: We could invite a popular athlete to visit the office and {{BLANK}} staff to take part, because many people will listen if someone they admire explains how meaningful the work is.",
    "cn": "A：今年我們要怎麼讓更多員工參加兒童醫院的志工計畫？ B：我們可以邀請一位受歡迎的運動員來辦公室【鼓勵】員工參加，因為如果由他們欣賞的人來說明這份工作多有意義，很多人都會聽。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why are so many customers asking about the blue jacket in the front window of our clothing store? B: It became very {{BLANK}} after a young singer wore the same style in her latest music video, so we have already ordered three hundred more from the factory.",
    "cn": "A：為什麼有這麼多顧客在詢問我們服飾店前面櫥窗裡的那件藍色夾克？ B：在一位年輕歌手於她最新的音樂影片中穿了同款之後，它就變得非常【受歡迎】，所以我們已經向工廠多訂了三百件。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的；著名的",
    "en_def": "known by very many people",
    "sentence": "A: Why did the hotel manager ask the staff to clean the lobby twice this afternoon and prepare extra security guards? B: A {{BLANK}} football player is checking in tonight with his family, and the manager expects many reporters and excited fans to wait outside the main entrance.",
    "cn": "A：為什麼飯店經理要員工今天下午把大廳打掃兩次，並準備額外的保全人員？ B：一位【知名的】足球員今晚要和家人入住，經理預期會有許多記者和興奮的粉絲在正門外等候。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的；有天分的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: Who will design the posters for the company's music festival this summer, since our usual designer is on vacation? B: We hired a very {{BLANK}} art student from the local university, and her sample drawings were so creative that the whole planning committee agreed to give her the job immediately.",
    "cn": "A：既然我們平常合作的設計師在休假，今年夏天公司音樂節的海報要由誰設計？ B：我們請了一位非常【有才華的】當地大學藝術系學生，她的樣稿很有創意，整個籌備委員會都同意立刻把這份工作交給她。"
  },
  {
    "word": "charismatic",
    "pos": "adj.",
    "cn_def": "有魅力的；有領袖氣質的",
    "en_def": "having a strong, attractive personality that makes people like and follow you",
    "sentence": "A: Why did the board choose Mr. Chen as the new spokesperson for our company's environmental campaign? B: He is warm, confident, and {{BLANK}}, so when he speaks at press conferences, people pay attention, trust his message, and want to learn more about our recycling program.",
    "cn": "A：為什麼董事會選擇陳先生擔任我們公司環保活動的新發言人？ B：他溫暖、自信又【有魅力】，所以當他在記者會上發言時，大家都會專心聽、相信他傳達的訊息，並想進一步了解我們的回收計畫。"
  },
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "having the power to change what people think or do",
    "sentence": "A: Why is the publishing company so excited that the TV host mentioned our new cookbook on her morning program? B: She is one of the most {{BLANK}} people in the food industry, and whenever she recommends a book, thousands of viewers order it online on the same day.",
    "cn": "A：為什麼出版社對那位電視主持人在她的晨間節目中提到我們的新食譜這麼興奮？ B：她是食品業最【有影響力的】人之一，每當她推薦一本書，就有數千名觀眾當天上網訂購。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "時髦的；有型的",
    "en_def": "fashionable and attractive",
    "sentence": "A: What did the customers say about the new uniforms that our airline introduced for flight attendants last month? B: Most passengers think they look modern and {{BLANK}}, and several fashion magazines even wrote articles comparing the bright red design to clothes worn by famous models.",
    "cn": "A：顧客對我們航空公司上個月為空服員推出的新制服有什麼看法？ B：大部分乘客覺得它們看起來現代又【時髦】，還有幾本時尚雜誌寫文章，把那亮紅色的設計和知名模特兒穿的衣服相比較。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "投入的；專注的",
    "en_def": "working very hard because you care about something",
    "sentence": "A: How did that singer stay so successful for more than thirty years while many other artists disappeared quickly? B: She is extremely {{BLANK}} to her work, practicing every morning, writing new songs constantly, and always arriving early to rehearsals, so her fans trust her to give an excellent show.",
    "cn": "A：在許多其他藝人很快消失的情況下，那位歌手是怎麼成功三十多年的？ B：她對工作極為【投入】，每天早上練習、不斷創作新歌，排練時也總是提早到，所以她的粉絲相信她一定會帶來精彩的演出。"
  },
  {
    "word": "loyally",
    "pos": "adv.",
    "cn_def": "忠誠地；忠實地",
    "en_def": "in a way that keeps supporting someone for a long time",
    "sentence": "A: Why does that small coffee shop still have so many customers even though a big chain store opened across the street? B: Many local people have {{BLANK}} supported the owner for fifteen years because he remembers everyone's names, and they say his friendly service is worth more than cheaper prices.",
    "cn": "A：為什麼那家小咖啡店對面開了大型連鎖店，卻仍然有這麼多顧客？ B：許多當地人十五年來一直【忠實地】支持老闆，因為他記得每個人的名字，他們說他親切的服務比更便宜的價格更有價值。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by many people or in many places",
    "sentence": "A: Why do you think the young actress was chosen to be the face of the new tourism campaign for Taiwan? B: She is {{BLANK}} known in Japan and Korea because of her popular TV dramas, so the tourism bureau hopes travelers from those countries will want to visit the places she shows.",
    "cn": "A：你覺得為什麼那位年輕女演員被選為台灣新觀光宣傳活動的代言人？ B：因為她受歡迎的電視劇，她在日本和韓國【廣為】人知，所以觀光局希望那些國家的旅客會想去她介紹的地方。"
  },
  {
    "word": "passionately",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "with very strong feelings",
    "sentence": "A: Why did so many people stay after the conference to talk with the speaker from the environmental group? B: She spoke so {{BLANK}} about protecting the ocean, sharing photos and personal stories from her diving trips, that many guests wanted to ask how their companies could help.",
    "cn": "A：為什麼會議結束後有這麼多人留下來和那位環保團體的講者交談？ B：她如此【熱情地】談論保護海洋，分享她潛水旅行的照片和親身經歷，讓許多來賓想問他們的公司可以怎麼幫忙。"
  },
  {
    "word": "openly",
    "pos": "adv.",
    "cn_def": "坦率地；公開地",
    "en_def": "honestly, without hiding your feelings or opinions",
    "sentence": "A: Why has the famous tennis player become so popular with office workers who usually don't watch sports? B: She talks {{BLANK}} in interviews about feeling stressed and tired, so many busy employees feel she understands their daily problems and find her honest words very comforting.",
    "cn": "A：為什麼那位知名網球選手會這麼受到平常不看運動比賽的上班族歡迎？ B：她在訪談中【坦率地】談論自己感到壓力和疲累，所以許多忙碌的員工覺得她了解他們每天的煩惱，並覺得她真誠的話語很令人安慰。"
  },
  {
    "word": "publicly",
    "pos": "adv.",
    "cn_def": "公開地",
    "en_def": "in a way that everyone can see or hear",
    "sentence": "A: Did the singer ever explain why she canceled her concert at the stadium last weekend at such short notice? B: Yes, she {{BLANK}} apologized to her fans on her website this morning and promised that everyone who bought a ticket will get a full refund and a free ticket to her next show.",
    "cn": "A：那位歌手有解釋為什麼她臨時取消上週末在體育場的演唱會嗎？ B：有，她今天早上在網站上【公開】向粉絲道歉，並承諾每位買票的人都會得到全額退款以及她下一場演出的免費門票。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good that you succeed in doing after hard work",
    "sentence": "A: Why is the team having a special dinner at the Italian restaurant downtown on Friday evening? B: Our manager wants to celebrate a great {{BLANK}}, because we finished the difficult airport project two weeks early and the client said it was the best work they had ever seen.",
    "cn": "A：為什麼團隊星期五晚上要在市中心的義大利餐廳舉辦特別晚餐？ B：我們經理想慶祝一項了不起的【成就】，因為我們提早兩週完成了困難的機場專案，客戶還說那是他們看過最好的作品。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表演；演出",
    "en_def": "a show in which someone sings, acts, or plays music",
    "sentence": "A: How was the concert at the city hall last night that your company sponsored for the local children's charity? B: The band gave an amazing {{BLANK}} that lasted almost three hours, and the audience was so excited that people stood up and sang along to every song until the very end.",
    "cn": "A：你們公司昨晚為當地兒童慈善機構贊助的市政廳音樂會怎麼樣？ B：樂團帶來了一場將近三小時的精彩【演出】，觀眾非常興奮，大家站起來跟著唱每一首歌，直到最後。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯",
    "en_def": "the job or series of jobs a person does during their working life",
    "sentence": "A: Why did the famous baseball player visit our sports equipment company for a meeting with the marketing director? B: He is retiring next year after a long {{BLANK}}, and he wants to start a new business selling gloves and bats designed for children who are just beginning to play.",
    "cn": "A：為什麼那位知名棒球選手要來我們運動用品公司和行銷總監開會？ B：他在漫長的【職業生涯】之後明年要退休了，他想創業販售專為剛開始打球的孩子設計的手套和球棒。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "表彰；肯定",
    "en_def": "public praise and thanks for someone's work",
    "sentence": "A: Why was the old designer invited to the award ceremony at the convention center next month? B: She will receive special {{BLANK}} for her forty years of work creating beautiful posters for movies, and many young designers who learned from her plan to attend and give speeches.",
    "cn": "A：為什麼那位資深設計師受邀參加下個月在會議中心舉行的頒獎典禮？ B：她將因四十年來為電影創作精美海報而獲得特別【表彰】，許多曾向她學習的年輕設計師也打算出席並致詞。"
  },
  {
    "word": "legacy",
    "pos": "n.",
    "cn_def": "遺產；留下的影響",
    "en_def": "something good that a person leaves behind for the future",
    "sentence": "A: Why is the company building a new music school in the old factory building near the river? B: The founder loved music, and his children want to protect his {{BLANK}} by giving young people from poor families the chance to learn instruments for free after school.",
    "cn": "A：為什麼公司要在河邊的舊工廠建築裡蓋一所新的音樂學校？ B：創辦人熱愛音樂，他的孩子們想藉由讓清寒家庭的年輕人放學後免費學習樂器，來守護他留下的【精神遺產】。"
  }
];

const MCQS = [
  {
    "q": "The cosmetics company paid a well-known _____ to appear in its new advertisement. Sales rose by twenty percent within one month.",
    "options": [
      "celebrity",
      "achievement",
      "legacy",
      "recognition"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The director hopes the new film will make the young actress a big _____. She has already received offers from several Hollywood studios.",
    "options": [
      "career",
      "star",
      "influence",
      "performance"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The actress's black dress made her a fashion _____ for decades. Designers around the world still copy her simple and elegant style.",
    "options": [
      "legacy",
      "achievement",
      "icon",
      "fan"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The bus driver became a local _____ after he stopped the vehicle safely during the storm. The city mayor gave him a special award.",
    "options": [
      "career",
      "performance",
      "influence",
      "hero"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our branch manager works hard and treats every customer politely. She is a positive _____ for the new employees.",
    "options": [
      "fandom",
      "legacy",
      "role model",
      "achievement"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Social media stars have a strong _____ on what teenagers buy. Many brands now pay them to post photos of their products.",
    "options": [
      "influence",
      "career",
      "recognition",
      "legacy"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The architect said the old temples of Kyoto were her main source of _____. Her new hotel design uses wood and quiet gardens.",
    "options": [
      "fandom",
      "career",
      "celebrity",
      "inspiration"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "My manager is a huge _____ of that jazz singer. He has bought tickets to every one of her concerts in Taipei.",
    "options": [
      "icon",
      "fan",
      "legacy",
      "career"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The travel blogger gained one new _____ every minute after her video went viral. Hotels soon contacted her about advertising deals.",
    "options": [
      "follower",
      "achievement",
      "legacy",
      "recognition"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Many young engineers _____ the founder for building the company from a small garage. Her story is told at every training session.",
    "options": [
      "promote",
      "admire",
      "encourage",
      "deny"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Good managers _____ the opinions of their team members, even when they disagree. This helps everyone feel valued at work.",
    "options": [
      "idolize",
      "promote",
      "respect",
      "encourage"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The CEO took a moment to _____ the sales team for their excellent results. Each member also received a bonus in December.",
    "options": [
      "idolize",
      "encourage",
      "deny",
      "praise"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The famous chef was hired to _____ the new line of kitchen knives on television. His cooking show reaches millions of viewers.",
    "options": [
      "admire",
      "respect",
      "promote",
      "idolize"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our department wants to _____ employees to share new ideas at the monthly meeting. The best suggestion will receive a small prize.",
    "options": [
      "encourage",
      "admire",
      "respect",
      "praise"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new smartwatch is especially _____ with young professionals who exercise after work. The store sold out within a week.",
    "options": [
      "dedicated",
      "talented",
      "charismatic",
      "popular"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "This small town is _____ for its fresh seafood and colorful night market. Thousands of tourists visit every weekend in summer.",
    "options": [
      "stylish",
      "famous",
      "dedicated",
      "talented"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Our new intern is very _____ at drawing and painting. The manager asked her to design the posters for the summer festival.",
    "options": [
      "talented",
      "popular",
      "influential",
      "stylish"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The new team leader is so _____ that people naturally follow her ideas. Her confident voice and warm smile attract everyone in meetings.",
    "options": [
      "shy",
      "charismatic",
      "stylish",
      "silent"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The magazine named her one of the most _____ business leaders in Asia. Her decisions affect thousands of companies across the region.",
    "options": [
      "stylish",
      "shy",
      "influential",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The hotel lobby has a _____ modern design with black marble and soft lighting. Many guests take photos there before checking in.",
    "options": [
      "dedicated",
      "talented",
      "influential",
      "stylish"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The nurse has been _____ to caring for elderly patients for thirty years. The hospital gave her an award last week.",
    "options": [
      "popular",
      "famous",
      "dedicated",
      "talented"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Many customers have _____ supported the family bakery since it opened in 1985. They still come every morning for fresh bread.",
    "options": [
      "loyally",
      "rudely",
      "rarely",
      "nervously"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The singer's songs are _____ played on radio stations across Asia. Even people who don't speak Chinese can sing her famous chorus.",
    "options": [
      "loyally",
      "passionately",
      "openly",
      "widely"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The young founder spoke _____ about her dream of reducing plastic waste. Several investors were moved and offered to fund her company.",
    "options": [
      "widely",
      "passionately",
      "loyally",
      "lazily"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The company _____ thanked its volunteers during the televised award ceremony. Their names also appeared in the local newspaper.",
    "options": [
      "publicly",
      "loyally",
      "widely",
      "secretly"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Winning the national design award was a great _____ for our small team. The manager celebrated by taking everyone to dinner.",
    "options": [
      "fandom",
      "achievement",
      "follower",
      "icon"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The pianist gave an outstanding _____ at the concert hall last night. The audience stood and clapped for five minutes.",
    "options": [
      "career",
      "legacy",
      "performance",
      "follower"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "After a long _____ in banking, my uncle decided to open a small cafe. He says serving coffee makes him much happier.",
    "options": [
      "performance",
      "legacy",
      "fandom",
      "career"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The volunteers received official _____ from the city government for their hard work. Each person was given a certificate and a medal.",
    "options": [
      "fandom",
      "celebrity",
      "recognition",
      "follower"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The founder left a lasting _____ of kindness and honest service. Today the company still donates part of its profits to schools.",
    "options": [
      "legacy",
      "fandom",
      "follower",
      "celebrity"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in entertainment",
    "cn_def": "名人"
  },
  "star": {
    "pos": "n.",
    "en_def": "a very famous performer, such as an actor or singer",
    "cn_def": "明星"
  },
  "icon": {
    "pos": "n.",
    "en_def": "a famous person or thing that represents an idea or style",
    "cn_def": "代表人物；偶像"
  },
  "hero": {
    "pos": "n.",
    "en_def": "a person admired for being brave or doing something great",
    "cn_def": "英雄"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose good behavior others copy",
    "cn_def": "榜樣；模範"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change what people think or do",
    "cn_def": "影響；影響力"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "someone or something that gives you new ideas or the wish to do something",
    "cn_def": "靈感；啟發"
  },
  "fan": {
    "pos": "n.",
    "en_def": "a person who likes a famous person, team, or band very much",
    "cn_def": "粉絲；迷"
  },
  "fandom": {
    "pos": "n.",
    "en_def": "all the fans of a person, group, or show as a community",
    "cn_def": "粉絲群；粉絲圈"
  },
  "supporter": {
    "pos": "n.",
    "en_def": "a person who helps or likes a person, group, or idea",
    "cn_def": "支持者"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who follows someone, especially on social media",
    "cn_def": "追蹤者；追隨者"
  },
  "admire": {
    "pos": "v.",
    "en_def": "to like and respect someone very much",
    "cn_def": "欽佩；欣賞"
  },
  "respect": {
    "pos": "v.",
    "en_def": "to have a good opinion of someone because of their qualities",
    "cn_def": "尊敬；尊重"
  },
  "praise": {
    "pos": "v.",
    "en_def": "to say that someone or something is very good",
    "cn_def": "稱讚；讚揚"
  },
  "idolize": {
    "pos": "v.",
    "en_def": "to admire someone so much that you think they are perfect",
    "cn_def": "崇拜；把…當偶像"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help sell a product or make it well known through advertising",
    "cn_def": "宣傳；推廣"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone the confidence or support to do something",
    "cn_def": "鼓勵"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by very many people",
    "cn_def": "有名的；著名的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的；有天分的"
  },
  "charismatic": {
    "pos": "adj.",
    "en_def": "having a strong, attractive personality that makes people like and follow you",
    "cn_def": "有魅力的；有領袖氣質的"
  },
  "influential": {
    "pos": "adj.",
    "en_def": "having the power to change what people think or do",
    "cn_def": "有影響力的"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "fashionable and attractive",
    "cn_def": "時髦的；有型的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working very hard because you care about something",
    "cn_def": "投入的；專注的"
  },
  "loyally": {
    "pos": "adv.",
    "en_def": "in a way that keeps supporting someone for a long time",
    "cn_def": "忠誠地；忠實地"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by many people or in many places",
    "cn_def": "廣泛地"
  },
  "passionately": {
    "pos": "adv.",
    "en_def": "with very strong feelings",
    "cn_def": "熱情地；熱烈地"
  },
  "openly": {
    "pos": "adv.",
    "en_def": "honestly, without hiding your feelings or opinions",
    "cn_def": "坦率地；公開地"
  },
  "publicly": {
    "pos": "adv.",
    "en_def": "in a way that everyone can see or hear",
    "cn_def": "公開地"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after hard work",
    "cn_def": "成就"
  },
  "performance": {
    "pos": "n.",
    "en_def": "a show in which someone sings, acts, or plays music",
    "cn_def": "表演；演出"
  },
  "career": {
    "pos": "n.",
    "en_def": "the job or series of jobs a person does during their working life",
    "cn_def": "職業生涯"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "public praise and thanks for someone's work",
    "cn_def": "表彰；肯定"
  },
  "legacy": {
    "pos": "n.",
    "en_def": "something good that a person leaves behind for the future",
    "cn_def": "遺產；留下的影響"
  }
};

const EXTRA_GLOSSES = {};
