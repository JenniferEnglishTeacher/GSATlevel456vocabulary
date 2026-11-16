// Topic 164 Quiz Data: Haircut 理髮
// Source word list: https://www.examword.com/group-topic/haircut — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T164 - Haircut 理髮",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hairdresser",
    "pos": "n.",
    "cn_def": "美髮師",
    "en_def": "a person whose job is to cut, wash and style hair",
    "sentence": "A: I have an important job interview at the bank next Monday morning, and my hair looks messy after the long summer holiday. Do you know a good salon near our office? B: Yes, my {{BLANK}} works at a small shop across from the train station, and she always listens carefully before she starts cutting.",
    "cn": "A：我下週一早上在銀行有個重要的工作面試，經過長長的暑假，我的頭髮看起來很亂。你知道我們辦公室附近有好的髮廊嗎？ B：知道，我的【美髮師】在火車站對面的一家小店工作，她開始剪之前總是會仔細聆聽。"
  },
  {
    "word": "barber",
    "pos": "n.",
    "cn_def": "理髮師（男士）",
    "en_def": "a person whose job is to cut men's hair and shave beards",
    "sentence": "A: Where does your grandfather usually go to get his short hair trimmed and his beard shaved before family events? B: He visits the same {{BLANK}} on Main Street every two weeks, because the old man who runs the shop gives a clean, simple cut and tells funny stories while he works.",
    "cn": "A：你爺爺在家族聚會前通常去哪裡修剪短髮、刮鬍子？ B：他每兩週都會去中山街上同一位【理髮師】那裡，因為經營那家店的老先生剪得乾淨俐落，工作時還會講好笑的故事。"
  },
  {
    "word": "fringe",
    "pos": "n.",
    "cn_def": "瀏海",
    "en_def": "hair cut short so that it hangs over the forehead",
    "sentence": "A: Our manager said the new photos for the staff ID cards must clearly show our eyebrows and eyes, but my hair keeps covering my face. What should I do? B: You could ask the stylist to trim your {{BLANK}} a little shorter, or simply pin it to the side with a small clip on the day the photos are taken.",
    "cn": "A：經理說員工證的新照片必須清楚露出眉毛和眼睛，可是我的頭髮一直遮住臉。我該怎麼辦？ B：你可以請設計師把你的【瀏海】修短一點，或者拍照當天用小髮夾把它夾到旁邊就好。"
  },
  {
    "word": "oftentimes",
    "pos": "adv.",
    "cn_def": "經常；時常",
    "en_def": "many times; often",
    "sentence": "A: Why do so many busy office workers choose to visit the hair salon during their lunch break instead of going on the weekend? B: {{BLANK}}, the salons near business districts offer quick thirty-minute services at lower prices on weekdays, so people can get a neat cut and still return to their desks on time.",
    "cn": "A：為什麼那麼多忙碌的上班族選擇在午休時間去髮廊，而不是週末去？ B：商業區附近的髮廊【經常】在平日提供價格較低的三十分鐘快剪服務，所以大家可以剪個整齊的髮型，還能準時回到座位。"
  },
  {
    "word": "hair colouring",
    "pos": "n.phr.",
    "cn_def": "染髮",
    "en_def": "changing the color of hair with a chemical product",
    "sentence": "A: The salon is offering a special discount this month, but I'm worried that changing my natural black hair to light brown might damage it. What do you think? B: Modern {{BLANK}} products are much gentler than before, but you should ask for a strand test first and use a good conditioner for several weeks afterwards.",
    "cn": "A：這家髮廊這個月有特別折扣，但我擔心把天生的黑髮換成淺棕色會傷髮質。你覺得呢？ B：現代的【染髮】產品比以前溫和很多，但你應該先要求做一小撮的測試，之後幾週也要用好的潤髮乳。"
  },
  {
    "word": "dye",
    "pos": "v.",
    "cn_def": "染（色）",
    "en_def": "to change the color of something, such as hair, using a special liquid",
    "sentence": "A: I noticed that the receptionist at our hotel came to work with bright purple hair yesterday. Is that allowed under the company's dress code? B: Actually, the hotel changed its rules last spring, so staff can now {{BLANK}} their hair any color they like as long as it looks neat and professional.",
    "cn": "A：我注意到我們飯店的櫃檯人員昨天頂著一頭亮紫色的頭髮來上班。公司的服裝規定允許這樣嗎？ B：其實飯店去年春天改了規定，所以現在員工可以把頭髮【染】成任何喜歡的顏色，只要看起來整齊又專業就好。"
  },
  {
    "word": "balayage",
    "pos": "n.",
    "cn_def": "手刷漸層挑染",
    "en_def": "a hair coloring method where lighter color is painted on by hand for a natural look",
    "sentence": "A: My sister wants a natural, sun-kissed look for her wedding in June, but she doesn't want strong lines when her hair grows out. What should she request? B: She should book a {{BLANK}} with an experienced colorist, because the lighter shades are painted on by hand and blend softly into her darker roots over time.",
    "cn": "A：我姊姊想在六月的婚禮上呈現自然、陽光親吻般的造型，但不希望頭髮長出來時有明顯的分界線。她該要求什麼？ B：她應該找經驗豐富的染髮師預約【手刷漸層挑染】，因為較淺的顏色是用手刷上去的，隨著時間會柔和地融入較深的髮根。"
  },
  {
    "word": "hair rebonding",
    "pos": "n.phr.",
    "cn_def": "離子燙；燙直",
    "en_def": "a chemical treatment that makes curly or wavy hair straight and smooth",
    "sentence": "A: My curly hair becomes very frizzy in Taipei's humid summer weather, and it takes me almost an hour to straighten it every morning before work. Any ideas? B: You might consider {{BLANK}}, a chemical treatment that makes hair straight and smooth for several months, although it is quite expensive and takes about four hours at the salon.",
    "cn": "A：在台北潮濕的夏天，我的捲髮會變得非常毛躁，每天上班前要花將近一個小時把它弄直。有什麼建議嗎？ B：你可以考慮【離子燙】，這是一種能讓頭髮直順好幾個月的化學療程，不過價格相當貴，而且在髮廊要花大約四個小時。"
  },
  {
    "word": "hairstyle",
    "pos": "n.",
    "cn_def": "髮型",
    "en_def": "the way in which someone's hair is cut and arranged",
    "sentence": "A: The marketing team is preparing a new advertisement for our shampoo, and the director wants the model to look fresh and modern. Do you have any suggestions? B: I think a short, layered {{BLANK}} with soft waves would look great on camera, and it would also show how shiny and healthy her hair is.",
    "cn": "A：行銷團隊正在為我們的洗髮精準備新廣告，導演希望模特兒看起來清新又現代。你有什麼建議嗎？ B：我覺得帶有柔和波浪的短層次【髮型】在鏡頭前會很好看，也能展現她的頭髮有多亮麗健康。"
  },
  {
    "word": "pixie cut",
    "pos": "n.phr.",
    "cn_def": "精靈短髮",
    "en_def": "a very short women's haircut, short at the back and sides",
    "sentence": "A: Have you seen the new receptionist? She cut off her long hair last weekend, and now it is very short around her ears and neck. B: Yes, she told me that a {{BLANK}} is much easier to manage when she jogs every morning, and she only needs about five minutes to get ready.",
    "cn": "A：你看到新來的櫃檯人員了嗎？她上週末剪掉了長髮，現在耳朵和脖子周圍都非常短。 B：看到了，她告訴我【精靈短髮】在她每天早上慢跑時好整理多了，而且她只需要大約五分鐘就能準備好。"
  },
  {
    "word": "ponytails",
    "pos": "n.",
    "cn_def": "馬尾",
    "en_def": "hair tied together at the back of the head so that it hangs down",
    "sentence": "A: Why do the kitchen staff at the new restaurant all wear their long hair tied back behind their heads during working hours? B: Wearing neat {{BLANK}} is required by the health inspectors, because it keeps hair away from the food and stops it from getting caught near the hot stoves.",
    "cn": "A：為什麼那家新餐廳的廚房員工上班時都把長髮綁在腦後？ B：衛生稽查員規定要綁整齊的【馬尾】，因為這樣可以讓頭髮遠離食物，也能避免頭髮在熱爐子附近被勾到。"
  },
  {
    "word": "crew cut",
    "pos": "n.phr.",
    "cn_def": "平頭；短寸頭",
    "en_def": "a very short haircut, usually for men or boys",
    "sentence": "A: My son is starting summer camp next week, and he will be swimming and playing football outdoors every day in the hot weather. B: Maybe you should take him to the barber for a {{BLANK}}, because very short hair dries quickly after swimming and keeps him cool during long afternoons in the sun.",
    "cn": "A：我兒子下週開始參加夏令營，他每天都會在炎熱的天氣裡游泳和在戶外踢足球。 B：也許你應該帶他去理髮店剪個【平頭】，因為很短的頭髮游泳後乾得快，在陽光下漫長的下午也能讓他保持涼爽。"
  },
  {
    "word": "pompadour",
    "pos": "n.",
    "cn_def": "飛機頭；龐畢度髮型",
    "en_def": "a hairstyle in which the hair is brushed up high and back from the forehead",
    "sentence": "A: The theater company is looking for a hairstylist for its new musical set in the 1950s. What kind of look do the male actors need? B: Most of them will wear a {{BLANK}}, with the hair brushed up high and back from the forehead, just like the famous rock singers of that time.",
    "cn": "A：劇團正在為以一九五〇年代為背景的新音樂劇找髮型師。男演員需要什麼樣的造型？ B：他們大多會梳【飛機頭】，把頭髮從額頭往上往後梳得高高的，就像那個年代著名的搖滾歌手一樣。"
  },
  {
    "word": "conventional",
    "pos": "adj.",
    "cn_def": "傳統的；保守的",
    "en_def": "following what is traditional or usual; not unusual",
    "sentence": "A: Our law firm is quite traditional, so I'm not sure whether I should get bright red highlights before I start my new job next month. B: It might be safer to choose a more {{BLANK}} style at first, and then you can try something bolder once you understand the office culture and your colleagues better.",
    "cn": "A：我們的律師事務所相當傳統，所以我不確定下個月開始新工作前該不該挑染亮紅色。 B：一開始選擇比較【保守的】造型可能比較安全，等你更了解辦公室文化和同事之後，再嘗試大膽一點的造型。"
  },
  {
    "word": "undeniably",
    "pos": "adv.",
    "cn_def": "無可否認地；確實",
    "en_def": "in a way that is clearly true and cannot be doubted",
    "sentence": "A: Do you think it was worth paying so much money for the famous stylist at that expensive salon downtown? B: It was {{BLANK}} expensive, but my hair has never looked this good, and several customers at the shop have already asked me for the name of the salon.",
    "cn": "A：你覺得花那麼多錢請市中心那家昂貴髮廊的知名設計師值得嗎？ B：【無可否認地】很貴，但我的頭髮從來沒有這麼好看過，而且店裡已經有好幾位客人問我那家髮廊的名字。"
  },
  {
    "word": "particular",
    "pos": "adj.",
    "cn_def": "講究的；挑剔的",
    "en_def": "caring a lot about small details and difficult to please",
    "sentence": "A: Why does Mr. Lin always wait for the same stylist, even when other staff members at the salon are free? B: He is very {{BLANK}} about how his hair looks, so he only trusts the stylist who has cut it for ten years and knows exactly what he likes.",
    "cn": "A：為什麼林先生總是等同一位設計師，即使髮廊其他員工有空也一樣？ B：他對自己的頭髮外觀非常【講究】，所以只信任幫他剪了十年、完全知道他喜好的那位設計師。"
  },
  {
    "word": "complement",
    "pos": "v.",
    "cn_def": "襯托；與……相配",
    "en_def": "to go well with something and make it look better",
    "sentence": "A: I have a round face, and I'm not sure which haircut would look best for my wedding photos next spring. B: A good stylist can choose a cut that will {{BLANK}} your face shape, for example longer layers around the cheeks, which make the face look slimmer in photographs.",
    "cn": "A：我是圓臉，不確定哪種髮型在明年春天的婚紗照裡最好看。 B：好的設計師能選擇【襯托】你臉型的剪法，例如在臉頰周圍剪較長的層次，在照片中能讓臉看起來更瘦。"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "cn_def": "暗沉的；無光澤的",
    "en_def": "not bright or shiny",
    "sentence": "A: My hair looks flat and has lost its shine since I started swimming at the company gym three times a week. What can I do? B: Chlorine in the pool can make hair dry and {{BLANK}}, so you should wear a swimming cap and use a deep conditioner after every swim.",
    "cn": "A：自從我開始每週三次在公司健身房游泳後，我的頭髮看起來很塌，也失去了光澤。我該怎麼辦？ B：泳池裡的氯會讓頭髮乾燥又【暗沉】，所以你應該戴泳帽，每次游完泳後都用深層護髮乳。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "令人神清氣爽的",
    "en_def": "making you feel less tired and full of energy again",
    "sentence": "A: How was your visit to the new salon near the office? You were away for nearly two hours during the afternoon. B: It was really {{BLANK}}, because the assistant gave me a long head massage with cool mint shampoo, and I felt full of energy when I went back to work.",
    "cn": "A：你去辦公室附近那家新髮廊感覺如何？你下午離開了將近兩個小時。 B：真的很【令人神清氣爽】，因為助理用清涼的薄荷洗髮精幫我做了很久的頭部按摩，我回去工作時覺得精神飽滿。"
  },
  {
    "word": "liberating",
    "pos": "adj.",
    "cn_def": "令人感到解放的；使人自由的",
    "en_def": "making you feel free from limits or worries",
    "sentence": "A: I heard that you finally cut off your long hair after keeping it for more than ten years. How do you feel about it? B: It feels surprisingly {{BLANK}}, because I no longer spend an hour drying it every night, and I feel free to try new styles and colors.",
    "cn": "A：聽說你留了十多年的長髮終於剪掉了。你感覺如何？ B：感覺出乎意料地【讓人解放】，因為我不用再每晚花一個小時吹乾頭髮，而且可以自由嘗試新造型和新顏色。"
  },
  {
    "word": "content",
    "pos": "adj.",
    "cn_def": "滿足的；滿意的",
    "en_def": "happy and satisfied with what you have",
    "sentence": "A: Are you going to try a new style when you visit the salon on Saturday, or will you keep the same look as usual? B: I'm quite {{BLANK}} with my current haircut, so I'll just ask the stylist to trim the ends and keep everything else the same.",
    "cn": "A：你星期六去髮廊時要嘗試新造型，還是維持平常的樣子？ B：我對目前的髮型相當【滿意】，所以只會請設計師修一下髮尾，其他都保持不變。"
  },
  {
    "word": "fitting",
    "pos": "adj.",
    "cn_def": "合適的；恰當的",
    "en_def": "suitable or right for a particular situation",
    "sentence": "A: For the company's fiftieth anniversary gala, the CEO wants all the hosts to look elegant and formal on stage. What styles should the salon prepare? B: Smart, simple updos would be the most {{BLANK}} choice for such a formal evening, and they will also look tidy in the photos for the annual report.",
    "cn": "A：在公司五十週年晚會上，執行長希望所有主持人在台上看起來優雅又正式。髮廊應該準備什麼造型？ B：俐落簡單的盤髮會是這種正式晚會最【合適的】選擇，而且在年報的照片裡看起來也會很整齊。"
  },
  {
    "word": "invest",
    "pos": "v.",
    "cn_def": "投資",
    "en_def": "to spend money, time or effort on something to get an advantage later",
    "sentence": "A: Why did your sister spend so much money on professional scissors and a training course last year? B: She decided to {{BLANK}} in her future career as a hairstylist, and now she cuts hair for many clients and plans to open her own salon next year.",
    "cn": "A：你姊姊去年為什麼花那麼多錢買專業剪刀和上培訓課程？ B：她決定為自己未來的髮型師職涯【投資】，現在她幫很多客人剪頭髮，並計劃明年開自己的髮廊。"
  }
];

const MCQS = [
  {
    "q": "Before the awards ceremony, Lisa booked an appointment with her favorite _____. She wanted someone she trusted to style her long hair.",
    "options": [
      "pompadour",
      "hairdresser",
      "fringe",
      "ponytails"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The hotel has opened a traditional _____ shop on the ground floor. Male guests can get a quick shave and haircut there.",
    "options": [
      "crew cut",
      "balayage",
      "fringe",
      "barber"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Her new _____ was cut straight across her forehead. It covered her eyebrows and made her look much younger in the photo.",
    "options": [
      "fringe",
      "barber",
      "hair rebonding",
      "pompadour"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Customers who visit the salon on weekday mornings _____ receive faster service. The stylists are much less busy before the lunch crowd arrives.",
    "options": [
      "rudely",
      "narrowly",
      "oftentimes",
      "loudly"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The salon now offers _____ with plant-based products. Customers can change from black to brown without strong chemical smells.",
    "options": [
      "crew cut",
      "barber",
      "fringe",
      "hair colouring"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Some young staff _____ their hair blue during the summer holidays. They return to a natural color before the busy season.",
    "options": [
      "invest",
      "dye",
      "complement",
      "borrow"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The colorist painted soft blond streaks by hand to create a natural _____. The lighter color blends gently into the darker roots.",
    "options": [
      "barber",
      "crew cut",
      "balayage",
      "hairdresser"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "After her _____ treatment, Amy's curly hair stayed straight and smooth for six months. She no longer needed a flat iron every morning.",
    "options": [
      "hair rebonding",
      "hairdresser",
      "pompadour",
      "fringe"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The news anchor appeared on screen with a bold new _____. Viewers wrote in to praise her short, modern look.",
    "options": [
      "barber",
      "hairstyle",
      "hairdresser",
      "hair rebonding"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The actress cut her long hair into a short _____ for the film. Her ears and neck were visible for the first time in years.",
    "options": [
      "pixie cut",
      "ponytails",
      "balayage",
      "barber"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The coach asked all the players with long hair to wear _____ during the match. Loose hair can block their view of the ball.",
    "options": [
      "fringe",
      "barber",
      "hair colouring",
      "ponytails"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The new soldiers all received a short _____ on their first day of training. The barbers finished each one in under five minutes.",
    "options": [
      "balayage",
      "hair colouring",
      "crew cut",
      "ponytails"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The singer brushed his hair high above his forehead in a classic _____. The style made him look like a rock star from the 1950s.",
    "options": [
      "pompadour",
      "crew cut",
      "fringe",
      "hairdresser"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The bank prefers employees to keep a neat, _____ appearance at work. Bright green hair is not considered suitable for meeting clients.",
    "options": [
      "liberating",
      "refreshing",
      "dull",
      "conventional"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The new salon is _____ the most popular in the neighborhood. Customers often wait over an hour for an appointment on weekends.",
    "options": [
      "carelessly",
      "undeniably",
      "slowly",
      "nervously"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "My grandfather is very _____ about his haircut. He always asks the barber to keep it exactly two centimeters long on top.",
    "options": [
      "liberating",
      "dull",
      "particular",
      "refreshing"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The stylist chose a warm brown color to _____ her skin tone. The result made her face look brighter and healthier.",
    "options": [
      "complement",
      "invest",
      "dye",
      "borrow"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Too much heat from hair dryers can make hair look dry and _____. Experts recommend using a lower setting and a protective spray.",
    "options": [
      "particular",
      "dull",
      "fitting",
      "content"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After a long flight, the hotel's scalp massage was truly _____. Guests said they felt relaxed and full of energy afterwards.",
    "options": [
      "conventional",
      "dull",
      "particular",
      "refreshing"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Cutting off her heavy long hair was a _____ experience for Jane. She felt free and light for the first time in years.",
    "options": [
      "conventional",
      "dull",
      "liberating",
      "particular"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Most customers were _____ with the quick, simple service. Few of them asked for extra treatments or expensive styling products.",
    "options": [
      "fitting",
      "content",
      "conventional",
      "dull"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A neat, simple updo is a _____ choice for a formal business dinner. It looks elegant without drawing too much attention.",
    "options": [
      "fitting",
      "dull",
      "content",
      "particular"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The salon owner decided to _____ in new chairs and better lighting. She hopes the changes will attract more customers next year.",
    "options": [
      "dye",
      "complement",
      "invest",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The hotel spa employs a professional _____ for guests attending weddings. She can create elegant styles for brides and their families.",
    "options": [
      "pixie cut",
      "balayage",
      "fringe",
      "hairdresser"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Every Saturday morning, my father visits the local _____ for a shave. He enjoys chatting with the other men waiting in line.",
    "options": [
      "barber",
      "ponytails",
      "hair colouring",
      "pompadour"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The theater staff will _____ the actor's hair gray for his role as an old king. The color will wash out after a few weeks.",
    "options": [
      "invest",
      "complement",
      "dye",
      "apologize"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The magazine article showed ten easy _____ ideas for busy working mothers. Each look takes less than five minutes to create.",
    "options": [
      "barber",
      "hairstyle",
      "hairdresser",
      "hair rebonding"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Although the company is quite _____, it now allows staff to wear colorful hair. Managers want employees to feel comfortable expressing themselves.",
    "options": [
      "refreshing",
      "liberating",
      "content",
      "conventional"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The light highlights _____ her green eyes perfectly. Several friends asked for the name of her colorist after the party.",
    "options": [
      "complement",
      "invest",
      "dye",
      "wander"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Visiting a quiet salon after a stressful week can be very _____. The calm music and gentle head massage help customers relax.",
    "options": [
      "conventional",
      "dull",
      "refreshing",
      "particular"
    ],
    "answer": 2,
    "vocabIndex": 18
  }
];

const LOOKUP = {
  "hairdresser": {
    "pos": "n.",
    "en_def": "a person whose job is to cut, wash and style hair",
    "cn_def": "美髮師"
  },
  "barber": {
    "pos": "n.",
    "en_def": "a person whose job is to cut men's hair and shave beards",
    "cn_def": "理髮師（男士）"
  },
  "fringe": {
    "pos": "n.",
    "en_def": "hair cut short so that it hangs over the forehead",
    "cn_def": "瀏海"
  },
  "oftentimes": {
    "pos": "adv.",
    "en_def": "many times; often",
    "cn_def": "經常；時常"
  },
  "hair colouring": {
    "pos": "n.phr.",
    "en_def": "changing the color of hair with a chemical product",
    "cn_def": "染髮"
  },
  "dye": {
    "pos": "v.",
    "en_def": "to change the color of something, such as hair, using a special liquid",
    "cn_def": "染（色）"
  },
  "balayage": {
    "pos": "n.",
    "en_def": "a hair coloring method where lighter color is painted on by hand for a natural look",
    "cn_def": "手刷漸層挑染"
  },
  "hair rebonding": {
    "pos": "n.phr.",
    "en_def": "a chemical treatment that makes curly or wavy hair straight and smooth",
    "cn_def": "離子燙；燙直"
  },
  "hairstyle": {
    "pos": "n.",
    "en_def": "the way in which someone's hair is cut and arranged",
    "cn_def": "髮型"
  },
  "pixie cut": {
    "pos": "n.phr.",
    "en_def": "a very short women's haircut, short at the back and sides",
    "cn_def": "精靈短髮"
  },
  "ponytails": {
    "pos": "n.",
    "en_def": "hair tied together at the back of the head so that it hangs down",
    "cn_def": "馬尾"
  },
  "crew cut": {
    "pos": "n.phr.",
    "en_def": "a very short haircut, usually for men or boys",
    "cn_def": "平頭；短寸頭"
  },
  "pompadour": {
    "pos": "n.",
    "en_def": "a hairstyle in which the hair is brushed up high and back from the forehead",
    "cn_def": "飛機頭；龐畢度髮型"
  },
  "conventional": {
    "pos": "adj.",
    "en_def": "following what is traditional or usual; not unusual",
    "cn_def": "傳統的；保守的"
  },
  "undeniably": {
    "pos": "adv.",
    "en_def": "in a way that is clearly true and cannot be doubted",
    "cn_def": "無可否認地；確實"
  },
  "particular": {
    "pos": "adj.",
    "en_def": "caring a lot about small details and difficult to please",
    "cn_def": "講究的；挑剔的"
  },
  "complement": {
    "pos": "v.",
    "en_def": "to go well with something and make it look better",
    "cn_def": "襯托；與……相配"
  },
  "dull": {
    "pos": "adj.",
    "en_def": "not bright or shiny",
    "cn_def": "暗沉的；無光澤的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel less tired and full of energy again",
    "cn_def": "令人神清氣爽的"
  },
  "liberating": {
    "pos": "adj.",
    "en_def": "making you feel free from limits or worries",
    "cn_def": "令人感到解放的；使人自由的"
  },
  "content": {
    "pos": "adj.",
    "en_def": "happy and satisfied with what you have",
    "cn_def": "滿足的；滿意的"
  },
  "fitting": {
    "pos": "adj.",
    "en_def": "suitable or right for a particular situation",
    "cn_def": "合適的；恰當的"
  },
  "invest": {
    "pos": "v.",
    "en_def": "to spend money, time or effort on something to get an advantage later",
    "cn_def": "投資"
  }
};

const EXTRA_GLOSSES = {};
