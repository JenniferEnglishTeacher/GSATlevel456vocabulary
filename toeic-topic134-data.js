// Topic 134 Quiz Data: Family Member 家庭成員
// Source word list: https://www.examword.com/group-topic/family-member — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T134 - Family Member 家庭成員",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "parent",
    "pos": "n.",
    "cn_def": "父親或母親；家長",
    "en_def": "a mother or a father",
    "sentence": "A: Why is the school's open house starting at seven in the evening instead of during the afternoon this year? B: The principal moved it because almost every working {{BLANK}} told her that leaving the office early was too difficult, and she wants more families to meet the new teachers.",
    "cn": "A：今年學校的開放日為什麼從晚上七點開始，而不是在下午？ B：校長把它改了時間，因為幾乎每位上班的【家長】都告訴她提早下班太困難，而她希望有更多家庭能認識新老師。"
  },
  {
    "word": "father",
    "pos": "n.",
    "cn_def": "父親",
    "en_def": "a male parent",
    "sentence": "A: Is it true that Mr. Lin is taking two weeks off right after the big product launch next month? B: Yes, his wife is expecting their first baby in March, and the company gives every new {{BLANK}} paid leave so he can help at home during those busy first weeks.",
    "cn": "A：林先生下個月大型產品發表會一結束就要休假兩週，是真的嗎？ B：是的，他太太三月要生第一胎，而公司給每位新手【爸爸】有薪假，讓他能在最忙碌的頭幾週在家幫忙。"
  },
  {
    "word": "mother",
    "pos": "n.",
    "cn_def": "母親",
    "en_def": "a female parent",
    "sentence": "A: Why did Karen ask to work from home on Tuesdays and Thursdays starting next semester? B: She is a {{BLANK}} of three young kids, and since their school ends at noon on those days, she needs to pick them up and make lunch before her afternoon meetings.",
    "cn": "A：凱倫為什麼要求從下學期開始每週二和週四在家工作？ B：她是三個年幼孩子的【母親】，而因為孩子們的學校那兩天中午就放學，她需要在下午開會之前去接他們並準備午餐。"
  },
  {
    "word": "child",
    "pos": "n.",
    "cn_def": "小孩；子女",
    "en_def": "a young boy or girl; a son or daughter",
    "sentence": "A: Do we need to buy a full-price ticket for my nephew when we visit the science museum downtown this weekend? B: No, the museum lets each {{BLANK}} under twelve enter for half price on weekends, so you can save some money and spend it on lunch instead.",
    "cn": "A：這個週末我們去市中心的科學博物館時，需要幫我外甥買全票嗎？ B：不用，博物館週末讓每位十二歲以下的【兒童】半價入場，所以你可以省點錢，拿去吃午餐。"
  },
  {
    "word": "son",
    "pos": "n.",
    "cn_def": "兒子",
    "en_def": "a male child of a parent",
    "sentence": "A: Who is the young man helping the owner carry boxes into the bakery every morning before it opens? B: That is her {{BLANK}}, who just finished university, and he plans to take over the family business someday, so he is learning how to bake and manage the store.",
    "cn": "A：每天早上開店前幫老闆把箱子搬進麵包店的那位年輕人是誰？ B：那是她的【兒子】，他剛從大學畢業，打算有一天接手家族事業，所以正在學習烘焙和經營這家店。"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "cn_def": "女兒",
    "en_def": "a female child of a parent",
    "sentence": "A: Why is the manager leaving the office so early this Friday when we still have the monthly report to finish? B: Her {{BLANK}} is graduating from high school this afternoon, and she promised the girl months ago that she would be in the front row for the ceremony.",
    "cn": "A：這個週五我們還有月報要完成，經理為什麼這麼早就離開辦公室？ B：她的【女兒】今天下午高中畢業，而她好幾個月前就答應那個女孩會坐在第一排參加典禮。"
  },
  {
    "word": "sibling",
    "pos": "n.",
    "cn_def": "兄弟姊妹",
    "en_def": "a brother or a sister",
    "sentence": "A: Does the new employee form ask about family members other than a spouse and children for the health insurance plan? B: Yes, you can list one {{BLANK}} as an emergency contact, so if you have a brother or sister living nearby, please write down their name and phone number.",
    "cn": "A：新進員工表格的健康保險部分，除了配偶和子女之外還會詢問其他家人嗎？ B：會，你可以填寫一位【兄弟姊妹】作為緊急聯絡人，所以如果你有住在附近的兄弟或姊妹，請寫下他們的姓名和電話。"
  },
  {
    "word": "brother",
    "pos": "n.",
    "cn_def": "兄弟",
    "en_def": "a boy or man who has the same parents as you",
    "sentence": "A: How did you find such a reliable mechanic so quickly after your car broke down on the way to the client meeting? B: My older {{BLANK}} owns a small garage near the station, so I called him, and he sent his best worker to tow my car right away.",
    "cn": "A：你的車在去見客戶的路上拋錨後，你怎麼這麼快就找到可靠的修車師傅？ B：我【哥哥】在車站附近開了一家小修車廠，所以我打電話給他，他立刻派最好的員工來把我的車拖走。"
  },
  {
    "word": "sister",
    "pos": "n.",
    "cn_def": "姊妹",
    "en_def": "a girl or woman who has the same parents as you",
    "sentence": "A: Are you going to stay in a hotel when you travel to Tokyo for the trade show next month? B: No, my younger {{BLANK}} works for a design company there and has a spare room, so she invited me to stay with her and save the company some money.",
    "cn": "A：下個月你去東京參加商展時會住飯店嗎？ B：不會，我【妹妹】在那裡的一家設計公司上班，有一間空房，所以她邀我和她一起住，也替公司省點錢。"
  },
  {
    "word": "grandparent",
    "pos": "n.",
    "cn_def": "祖父母；外祖父母",
    "en_def": "the father or mother of your parent",
    "sentence": "A: Why are there so many older people with small children at the amusement park on a Wednesday morning? B: Many parents are at work during the week, so a {{BLANK}} often takes the kids out on school holidays, and the park offers cheaper tickets for seniors on weekdays.",
    "cn": "A：為什麼週三早上的遊樂園有這麼多老人帶著小孩？ B：許多父母平日都在上班，所以學校放假時常由【祖父母】帶孩子出門，而且遊樂園平日提供較便宜的敬老票。"
  },
  {
    "word": "grandfather",
    "pos": "n.",
    "cn_def": "祖父；外祖父",
    "en_def": "the father of your father or mother",
    "sentence": "A: How did you learn so much about fixing old clocks and watches before you started working at this repair shop? B: My {{BLANK}} was a watchmaker for forty years, and when I was a boy, I spent every summer vacation in his small store watching him repair them.",
    "cn": "A：你來這家修理店工作之前，怎麼會懂得這麼多修理舊時鐘和手錶的知識？ B：我【爺爺】當了四十年的鐘錶師傅，我小時候每個暑假都待在他的小店裡看他修理鐘錶。"
  },
  {
    "word": "grandmother",
    "pos": "n.",
    "cn_def": "祖母；外祖母",
    "en_def": "the mother of your father or mother",
    "sentence": "A: Your new restaurant's beef noodle soup is amazing, so where did you get such a special recipe? B: It came from my {{BLANK}}, who cooked it for the whole family every Lunar New Year, and before she passed away, she taught me every step and secret ingredient.",
    "cn": "A：你新餐廳的牛肉麵太棒了，你是從哪裡得到這麼特別的食譜的？ B：它來自我的【奶奶】，她每年農曆新年都會煮給全家人吃，在她過世之前，她教了我每個步驟和秘密食材。"
  },
  {
    "word": "relative",
    "pos": "n.",
    "cn_def": "親戚",
    "en_def": "a person in your family",
    "sentence": "A: Why are you taking a whole week of vacation in the middle of the busy season this year? B: A close {{BLANK}} of mine is getting married in Canada, and since my whole family is flying over for the wedding, I don't want to miss this rare chance to see everyone.",
    "cn": "A：今年你為什麼在旺季中間請了一整個星期的假？ B：我的一位近【親】要在加拿大結婚，既然我全家都要飛過去參加婚禮，我不想錯過這個難得能見到大家的機會。"
  },
  {
    "word": "cousin",
    "pos": "n.",
    "cn_def": "堂／表兄弟姊妹",
    "en_def": "the child of your aunt or uncle",
    "sentence": "A: Do you know anyone who could help us translate these product brochures into Japanese before the trade fair next week? B: My {{BLANK}} grew up in Osaka because her father, my uncle, worked there, so she speaks perfect Japanese and might do it for a reasonable price.",
    "cn": "A：你認識誰能在下週商展前幫我們把這些產品手冊翻譯成日文嗎？ B：我的【表姊】在大阪長大，因為她父親，也就是我舅舅，在那裡工作，所以她的日文非常好，也許能以合理的價格幫忙。"
  },
  {
    "word": "uncle",
    "pos": "n.",
    "cn_def": "叔叔；伯伯；舅舅；姑丈；姨丈",
    "en_def": "the brother of your father or mother, or your aunt's husband",
    "sentence": "A: How did you get such a good summer job at the shipping company when you were still a university student? B: My {{BLANK}}, who is my mother's older brother, worked there as a manager, so he told me about the opening and helped me prepare for the interview.",
    "cn": "A：你還是大學生的時候，怎麼能在那家貨運公司找到這麼好的暑期工作？ B：我的【舅舅】，也就是我母親的哥哥，在那裡當經理，所以他告訴我有職缺，還幫我準備面試。"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "cn_def": "阿姨；姑姑；嬸嬸；舅媽",
    "en_def": "the sister of your father or mother, or your uncle's wife",
    "sentence": "A: Who will take care of your children while you attend the three-day training course in Kaohsiung next week? B: My {{BLANK}}, who is my mother's younger sister, has just retired, so she offered to stay at our apartment and drive the kids to school every day.",
    "cn": "A：下週你去高雄參加三天的訓練課程時，誰來照顧你的孩子？ B：我的【阿姨】，也就是我母親的妹妹，剛退休，所以她主動提出要住在我們公寓，每天開車送孩子上學。"
  },
  {
    "word": "nephew",
    "pos": "n.",
    "cn_def": "姪子；外甥",
    "en_def": "the son of your brother or sister",
    "sentence": "A: Why did you buy so many toy cars at the department store during your lunch break today? B: My sister's little boy turns five on Saturday, and since he loves anything with wheels, I want to give my {{BLANK}} a big box of cars at his birthday party.",
    "cn": "A：你今天午休時為什麼在百貨公司買了那麼多玩具車？ B：我姊姊的小兒子週六滿五歲，而且他喜歡任何有輪子的東西，所以我想在他的生日派對上送我的【外甥】一大盒車子。"
  },
  {
    "word": "niece",
    "pos": "n.",
    "cn_def": "姪女；外甥女",
    "en_def": "the daughter of your brother or sister",
    "sentence": "A: Do you know anyone who might be interested in the summer internship we are offering in the marketing department? B: My brother's daughter is studying business at university, so I will tell my {{BLANK}} about the position tonight and ask her to send you her résumé.",
    "cn": "A：你知道有誰可能對我們行銷部提供的暑期實習有興趣嗎？ B：我哥哥的女兒正在大學念商科，所以我今晚會告訴我的【姪女】這個職缺，並請她把履歷寄給你。"
  },
  {
    "word": "spouse",
    "pos": "n.",
    "cn_def": "配偶",
    "en_def": "a husband or wife",
    "sentence": "A: Can employees bring a guest to the company's annual dinner at the hotel next month, or is it only for staff? B: Each employee may bring a {{BLANK}} to the dinner, so if you are married, please write your husband's or wife's name on the form by Friday.",
    "cn": "A：員工可以帶一位客人參加下個月在飯店舉行的公司年度晚宴嗎？還是只限員工？ B：每位員工可以帶【配偶】出席晚宴，所以如果你已婚，請在週五前把你先生或太太的名字寫在表格上。"
  },
  {
    "word": "husband",
    "pos": "n.",
    "cn_def": "丈夫",
    "en_def": "the man that a woman is married to",
    "sentence": "A: Why does Ms. Chen leave the office at exactly five o'clock every day, even when we are very busy? B: Her {{BLANK}} works night shifts at the hospital, so she has to get home before he leaves for work and their two young children are alone.",
    "cn": "A：為什麼陳小姐每天都準時五點離開辦公室，即使我們非常忙碌也一樣？ B：她的【先生】在醫院上夜班，所以她必須在他出門上班、留下兩個年幼的孩子獨自在家之前趕回家。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子",
    "en_def": "the woman that a man is married to",
    "sentence": "A: Is Mr. Huang going to move to the Singapore branch when his promotion begins next spring? B: He is still thinking about it, because his {{BLANK}} has a good job as a nurse here, and she would have to quit if the whole family moved abroad.",
    "cn": "A：黃先生明年春天升職後會調到新加坡分公司嗎？ B：他還在考慮，因為他的【太太】在這裡有一份很好的護理師工作，如果全家搬到國外，她就必須辭職。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "伴侶",
    "en_def": "the person you live with or are in a romantic relationship with",
    "sentence": "A: Do I have to be married to add someone to my company health insurance plan, or are there other options? B: No, the new policy covers a {{BLANK}} who has lived with you for at least one year, so you just need to show a shared rental contract.",
    "cn": "A：我一定要結婚才能把某人加入公司的健康保險嗎？還是有其他選擇？ B：不用，新政策涵蓋與你同住至少一年的【伴侶】，所以你只需出示一份共同的租屋契約。"
  },
  {
    "word": "stepfather",
    "pos": "n.",
    "cn_def": "繼父",
    "en_def": "the man who is married to your mother but is not your father",
    "sentence": "A: Who taught you how to run a small business before you opened this coffee shop across from the train station? B: My mother married again when I was ten, and my {{BLANK}} owned a restaurant, so I grew up helping him with orders, staff schedules, and money.",
    "cn": "A：在你開這間火車站對面的咖啡店之前，是誰教你如何經營小生意的？ B：我十歲時母親再婚，而我的【繼父】經營一家餐廳，所以我從小就幫他處理訂單、員工排班和帳務。"
  },
  {
    "word": "stepmother",
    "pos": "n.",
    "cn_def": "繼母",
    "en_def": "the woman who is married to your father but is not your mother",
    "sentence": "A: Your father remarried a few years ago, right, so how do you get along with his new wife these days? B: Very well, actually, because my {{BLANK}} is kind and patient, and she even helped me choose the right university and apply for my first job.",
    "cn": "A：你父親幾年前再婚了，對吧？那你最近和他的新太太相處得怎麼樣？ B：其實非常好，因為我的【繼母】既親切又有耐心，她甚至幫我選對了大學，還協助我申請第一份工作。"
  },
  {
    "word": "stepson",
    "pos": "n.",
    "cn_def": "繼子",
    "en_def": "the son of your husband or wife from an earlier relationship",
    "sentence": "A: Is the teenager working at the front desk this summer related to the hotel owner in some way? B: Yes, he is her {{BLANK}}, because she married his father last year, and the boy wanted some work experience before starting college in the fall.",
    "cn": "A：今年夏天在櫃檯工作的那位青少年跟飯店老闆有什麼關係嗎？ B：有，他是她的【繼子】，因為她去年嫁給了他的父親，而那個男孩想在秋天上大學前累積一些工作經驗。"
  },
  {
    "word": "stepdaughter",
    "pos": "n.",
    "cn_def": "繼女",
    "en_def": "the daughter of your husband or wife from an earlier relationship",
    "sentence": "A: Why did Mr. Wu take a day off in the middle of the week when we have so many orders to ship? B: His {{BLANK}}, the girl his wife had before they married, was performing in her first piano concert, and he did not want to disappoint her.",
    "cn": "A：我們有這麼多訂單要出貨，吳先生為什麼在週間請了一天假？ B：他的【繼女】，也就是他太太婚前所生的女孩，要舉行她的第一場鋼琴演奏會，他不想讓她失望。"
  },
  {
    "word": "in-law",
    "pos": "n.",
    "cn_def": "姻親",
    "en_def": "a relative of your husband or wife",
    "sentence": "A: Why are you so nervous about the dinner party at your house this Saturday evening? B: My wife's whole family is coming, and it is the first time I will cook for every {{BLANK}} at once, so I want the food and the house to be perfect.",
    "cn": "A：你為什麼對這週六晚上在你家舉辦的晚餐聚會這麼緊張？ B：我太太全家都要來，這是我第一次同時為所有【姻親】下廚，所以我希望食物和家裡都很完美。"
  },
  {
    "word": "father-in-law",
    "pos": "n.",
    "cn_def": "岳父；公公",
    "en_def": "the father of your husband or wife",
    "sentence": "A: How did you get such useful advice about buying your first apartment in the city? B: My wife's dad worked as a real estate agent for thirty years, so my {{BLANK}} looked at every contract with me and helped me avoid some very expensive mistakes.",
    "cn": "A：你買第一間市區公寓時，怎麼得到這麼有用的建議？ B：我太太的爸爸當了三十年房地產仲介，所以我的【岳父】陪我看過每份合約，幫我避免了一些非常昂貴的錯誤。"
  },
  {
    "word": "mother-in-law",
    "pos": "n.",
    "cn_def": "岳母；婆婆",
    "en_def": "the mother of your husband or wife",
    "sentence": "A: Who looks after your baby now that you have come back to the office after your maternity leave? B: My husband's mother lives just two blocks from us, so my {{BLANK}} takes care of the baby during the day, and we pick him up after work.",
    "cn": "A：你產假結束回到辦公室後，現在是誰在照顧你的寶寶？ B：我先生的母親就住在離我們兩條街的地方，所以白天由我【婆婆】照顧寶寶，我們下班後再去接他。"
  },
  {
    "word": "brother-in-law",
    "pos": "n.",
    "cn_def": "姊夫；妹夫；大伯；小叔；內兄；內弟",
    "en_def": "the brother of your husband or wife, or your sister's husband",
    "sentence": "A: Who designed the new website for your bakery, because it looks so professional and modern? B: My sister's husband is a web designer, so my {{BLANK}} built it for us during his free weekends and only asked for a few boxes of cakes in return.",
    "cn": "A：誰幫你的麵包店設計新網站的？它看起來好專業又好現代。 B：我姊姊的先生是網頁設計師，所以我的【姊夫】利用空閒的週末幫我們做的，而且只要了幾盒蛋糕作為回報。"
  },
  {
    "word": "sister-in-law",
    "pos": "n.",
    "cn_def": "嫂嫂；弟媳；大姑；小姑；姨子",
    "en_def": "the sister of your husband or wife, or your brother's wife",
    "sentence": "A: Who is the woman helping your brother serve customers at his noodle shop on weekends? B: That is his wife, my {{BLANK}}, and she used to work at a big hotel, so she knows how to keep customers happy even when the line is very long.",
    "cn": "A：週末在你哥哥麵店幫忙招呼客人的那位女士是誰？ B：那是他太太，也就是我的【嫂嫂】，她以前在大飯店工作，所以即使隊伍排得很長，她也知道怎麼讓客人保持愉快。"
  },
  {
    "word": "guardian",
    "pos": "n.",
    "cn_def": "監護人",
    "en_def": "a person who is legally responsible for a child",
    "sentence": "A: Can my fifteen-year-old nephew join the summer coding camp at the community center without his parents? B: Yes, but because he is under eighteen, a parent or legal {{BLANK}} must sign the permission form and give an emergency phone number before the first class.",
    "cn": "A：我十五歲的外甥可以在沒有父母陪同的情況下參加社區中心的暑期程式營嗎？ B：可以，但因為他未滿十八歲，必須在第一堂課前由父母或法定【監護人】簽署同意書並提供緊急聯絡電話。"
  },
  {
    "word": "ancestor",
    "pos": "n.",
    "cn_def": "祖先",
    "en_def": "a family member who lived a long time ago",
    "sentence": "A: Why are you flying to a small village in southern Italy for your vacation instead of going to Rome? B: I found out that my great-great-grandfather was born there, so I want to see the place where my {{BLANK}} lived and maybe find some old family records.",
    "cn": "A：你度假為什麼要飛去義大利南部的一個小村莊，而不是去羅馬？ B：我發現我的高祖父是在那裡出生的，所以我想看看我【祖先】住過的地方，也許還能找到一些舊的家族紀錄。"
  },
  {
    "word": "descendant",
    "pos": "n.",
    "cn_def": "後代；子孫",
    "en_def": "a person who comes from a family member who lived long ago",
    "sentence": "A: Why is the owner of this old tea company so famous in town, even though the shop is quite small? B: She is a direct {{BLANK}} of the man who started the company in 1890, and her family has run the same shop on this street for five generations.",
    "cn": "A：這家老茶行的老闆為什麼在鎮上這麼有名，即使店面很小？ B：她是1890年創立這家公司那位男士的直系【後代】，她的家族已經在這條街上經營同一家店五代了。"
  },
  {
    "word": "newlywed",
    "pos": "n.",
    "cn_def": "新婚者",
    "en_def": "a person who has just married",
    "sentence": "A: Why did the travel agency create a special package with ocean-view rooms and a private dinner on the beach? B: Many couples book trips right after their wedding, so the agency wants every {{BLANK}} to choose our island resort for a romantic honeymoon this year.",
    "cn": "A：旅行社為什麼推出包含海景房和海灘私人晚餐的特別套裝行程？ B：許多夫妻在婚禮後立刻預訂旅遊，所以旅行社希望今年每位【新婚者】都選擇我們的海島度假村度過浪漫的蜜月。"
  }
];

const MCQS = [
  {
    "q": "Every _____ must attend the meeting with the teacher this Friday. The school will explain the new homework policy for all students.",
    "options": [
      "parent",
      "nephew",
      "ancestor",
      "stepson"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Mr. Park is excited because his wife just had a baby boy. He will take paternity leave as a new _____ next month.",
    "options": [
      "daughter",
      "niece",
      "father",
      "aunt"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company opened a nursing room for any new _____ returning to work. She can use it privately during her breaks.",
    "options": [
      "uncle",
      "mother",
      "nephew",
      "stepson"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Each ticket admits one adult and one _____ under the age of six. Older kids must buy their own tickets at the counter.",
    "options": [
      "husband",
      "spouse",
      "ancestor",
      "child"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mrs. Liu plans to retire next year. Her only _____ will take over the family bakery after he finishes his training.",
    "options": [
      "daughter",
      "niece",
      "son",
      "aunt"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The owner's _____ joined the firm last year after law school. She now handles all of the company's contracts.",
    "options": [
      "daughter",
      "nephew",
      "brother",
      "grandfather"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Jason has no brothers or sisters at all. As an only child, he never had to share his room with a _____.",
    "options": [
      "descendant",
      "newlywed",
      "guardian",
      "sibling"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "My older _____ runs a car repair shop near the station. He fixed my brakes for free last weekend.",
    "options": [
      "sister",
      "brother",
      "niece",
      "aunt"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Amy's younger _____ is visiting from Canada next week. Amy will show her around the city after work.",
    "options": [
      "sister",
      "uncle",
      "nephew",
      "brother"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "My _____ is turning eighty this year. Our whole family is planning a big birthday dinner for my mother's father.",
    "options": [
      "stepson",
      "nephew",
      "grandfather",
      "son"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The recipe for these cookies came from my _____. My father's mother baked them for us every winter holiday.",
    "options": [
      "aunt",
      "grandmother",
      "daughter",
      "niece"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Employees may take three days of leave when a close _____ passes away. Please inform your manager as early as possible.",
    "options": [
      "descendant",
      "newlywed",
      "guardian",
      "relative"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "My _____ is the daughter of my mother's sister. We grew up together and still meet for lunch every month.",
    "options": [
      "niece",
      "stepmother",
      "cousin",
      "aunt"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "My mother's brother is a successful chef in Taipei. My _____ helped me find my first job in a hotel kitchen.",
    "options": [
      "uncle",
      "aunt",
      "niece",
      "nephew"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My father's sister lives near the office. I often have dinner with my _____ after work on Wednesdays.",
    "options": [
      "uncle",
      "nephew",
      "grandfather",
      "aunt"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "My brother's son is studying engineering in Germany. My _____ will do his internship at our factory next summer.",
    "options": [
      "niece",
      "nephew",
      "aunt",
      "sister"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Employees may list a husband or wife as a dependent. Please write the name of your _____ on the insurance form.",
    "options": [
      "spouse",
      "descendant",
      "ancestor",
      "nephew"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Ms. Tsai's _____ will pick up the kids today. He finishes work early on Fridays, so she can stay late.",
    "options": [
      "wife",
      "aunt",
      "husband",
      "niece"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Mr. Ho cannot travel this month. His _____ is expecting their second baby, and he wants to stay with her.",
    "options": [
      "husband",
      "wife",
      "uncle",
      "nephew"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The apartment lease lists both names, Daniel and his long-term _____. They have lived together for five years but are not married.",
    "options": [
      "ancestor",
      "guardian",
      "descendant",
      "partner"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Lisa's mother married again when Lisa was twelve. Her _____ later paid for her university education.",
    "options": [
      "grandmother",
      "stepdaughter",
      "stepfather",
      "niece"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Since her husband's daughter moved in last month, Ms. Kao has a new _____. The girl is starting at the local high school.",
    "options": [
      "stepdaughter",
      "stepfather",
      "grandfather",
      "uncle"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Eric moved in with his wife's parents after the wedding. His _____ often asks him for help in the garden.",
    "options": [
      "niece",
      "sister",
      "daughter",
      "mother-in-law"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "My wife's dad is a retired accountant. My _____ checked our tax forms before we sent them to the government.",
    "options": [
      "mother-in-law",
      "father-in-law",
      "sister-in-law",
      "stepdaughter"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "My sister's husband works in sales at our biggest client. My _____ introduced me to his manager at the trade fair.",
    "options": [
      "brother-in-law",
      "sister-in-law",
      "mother-in-law",
      "stepmother"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "My brother's wife is a talented graphic designer. My _____ designed the new logo for our family restaurant.",
    "options": [
      "brother-in-law",
      "father-in-law",
      "sister-in-law",
      "stepson"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Students under eighteen need permission to join the trip. A parent or legal _____ must sign the form by Monday.",
    "options": [
      "newlywed",
      "guardian",
      "descendant",
      "ancestor"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Mark found an old photo of his great-great-grandfather in a museum. He was excited to learn more about his _____.",
    "options": [
      "nephew",
      "newlywed",
      "descendant",
      "ancestor"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The hotel's founder died more than a century ago. Today a direct _____ of his still manages the business.",
    "options": [
      "ancestor",
      "grandparent",
      "descendant",
      "newlywed"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The resort offers a free bottle of champagne to every _____. Couples must show their marriage certificate from the last three months.",
    "options": [
      "newlywed",
      "ancestor",
      "descendant",
      "guardian"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "parent": {
    "pos": "n.",
    "en_def": "a mother or a father",
    "cn_def": "父親或母親；家長"
  },
  "father": {
    "pos": "n.",
    "en_def": "a male parent",
    "cn_def": "父親"
  },
  "mother": {
    "pos": "n.",
    "en_def": "a female parent",
    "cn_def": "母親"
  },
  "child": {
    "pos": "n.",
    "en_def": "a young boy or girl; a son or daughter",
    "cn_def": "小孩；子女"
  },
  "son": {
    "pos": "n.",
    "en_def": "a male child of a parent",
    "cn_def": "兒子"
  },
  "daughter": {
    "pos": "n.",
    "en_def": "a female child of a parent",
    "cn_def": "女兒"
  },
  "sibling": {
    "pos": "n.",
    "en_def": "a brother or a sister",
    "cn_def": "兄弟姊妹"
  },
  "brother": {
    "pos": "n.",
    "en_def": "a boy or man who has the same parents as you",
    "cn_def": "兄弟"
  },
  "sister": {
    "pos": "n.",
    "en_def": "a girl or woman who has the same parents as you",
    "cn_def": "姊妹"
  },
  "grandparent": {
    "pos": "n.",
    "en_def": "the father or mother of your parent",
    "cn_def": "祖父母；外祖父母"
  },
  "grandfather": {
    "pos": "n.",
    "en_def": "the father of your father or mother",
    "cn_def": "祖父；外祖父"
  },
  "grandmother": {
    "pos": "n.",
    "en_def": "the mother of your father or mother",
    "cn_def": "祖母；外祖母"
  },
  "relative": {
    "pos": "n.",
    "en_def": "a person in your family",
    "cn_def": "親戚"
  },
  "cousin": {
    "pos": "n.",
    "en_def": "the child of your aunt or uncle",
    "cn_def": "堂／表兄弟姊妹"
  },
  "uncle": {
    "pos": "n.",
    "en_def": "the brother of your father or mother, or your aunt's husband",
    "cn_def": "叔叔；伯伯；舅舅；姑丈；姨丈"
  },
  "aunt": {
    "pos": "n.",
    "en_def": "the sister of your father or mother, or your uncle's wife",
    "cn_def": "阿姨；姑姑；嬸嬸；舅媽"
  },
  "nephew": {
    "pos": "n.",
    "en_def": "the son of your brother or sister",
    "cn_def": "姪子；外甥"
  },
  "niece": {
    "pos": "n.",
    "en_def": "the daughter of your brother or sister",
    "cn_def": "姪女；外甥女"
  },
  "spouse": {
    "pos": "n.",
    "en_def": "a husband or wife",
    "cn_def": "配偶"
  },
  "husband": {
    "pos": "n.",
    "en_def": "the man that a woman is married to",
    "cn_def": "丈夫"
  },
  "wife": {
    "pos": "n.",
    "en_def": "the woman that a man is married to",
    "cn_def": "妻子"
  },
  "partner": {
    "pos": "n.",
    "en_def": "the person you live with or are in a romantic relationship with",
    "cn_def": "伴侶"
  },
  "stepfather": {
    "pos": "n.",
    "en_def": "the man who is married to your mother but is not your father",
    "cn_def": "繼父"
  },
  "stepmother": {
    "pos": "n.",
    "en_def": "the woman who is married to your father but is not your mother",
    "cn_def": "繼母"
  },
  "stepson": {
    "pos": "n.",
    "en_def": "the son of your husband or wife from an earlier relationship",
    "cn_def": "繼子"
  },
  "stepdaughter": {
    "pos": "n.",
    "en_def": "the daughter of your husband or wife from an earlier relationship",
    "cn_def": "繼女"
  },
  "in-law": {
    "pos": "n.",
    "en_def": "a relative of your husband or wife",
    "cn_def": "姻親"
  },
  "father-in-law": {
    "pos": "n.",
    "en_def": "the father of your husband or wife",
    "cn_def": "岳父；公公"
  },
  "mother-in-law": {
    "pos": "n.",
    "en_def": "the mother of your husband or wife",
    "cn_def": "岳母；婆婆"
  },
  "brother-in-law": {
    "pos": "n.",
    "en_def": "the brother of your husband or wife, or your sister's husband",
    "cn_def": "姊夫；妹夫；大伯；小叔；內兄；內弟"
  },
  "sister-in-law": {
    "pos": "n.",
    "en_def": "the sister of your husband or wife, or your brother's wife",
    "cn_def": "嫂嫂；弟媳；大姑；小姑；姨子"
  },
  "guardian": {
    "pos": "n.",
    "en_def": "a person who is legally responsible for a child",
    "cn_def": "監護人"
  },
  "ancestor": {
    "pos": "n.",
    "en_def": "a family member who lived a long time ago",
    "cn_def": "祖先"
  },
  "descendant": {
    "pos": "n.",
    "en_def": "a person who comes from a family member who lived long ago",
    "cn_def": "後代；子孫"
  },
  "newlywed": {
    "pos": "n.",
    "en_def": "a person who has just married",
    "cn_def": "新婚者"
  }
};

const EXTRA_GLOSSES = {};
