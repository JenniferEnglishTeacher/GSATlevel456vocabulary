// Topic 65 Quiz Data: Collection 收藏
// Source word list: https://www.examword.com/group-topic/collection — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T65 - Collection 收藏",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "collector",
    "pos": "n.",
    "cn_def": "收藏家",
    "en_def": "a person who collects things as a hobby or business",
    "sentence": "A: The auction house is expecting a big crowd on Saturday, so who do you think will bid on the old Japanese stamps from the 1920s? B: A wealthy {{BLANK}} from Singapore has already called twice to ask about them, and she said she is willing to pay much more than the starting price.",
    "cn": "A：拍賣行預計週六會有很多人來，你覺得誰會競標那些1920年代的日本舊郵票？ B：一位來自新加坡的富有【收藏家】已經打了兩次電話來詢問，她說她願意出比起標價高很多的價錢。"
  },
  {
    "word": "collectible",
    "pos": "n.",
    "cn_def": "收藏品",
    "en_def": "an object that people collect because it is valuable or interesting",
    "sentence": "A: I noticed that the toy company is producing only five thousand of the new robot figures this year, so why are customers lining up outside the shop before it even opens? B: Many fans see each figure as a {{BLANK}} that will become more valuable over time, so they want to buy one before they sell out.",
    "cn": "A：我注意到那家玩具公司今年新的機器人公仔只生產五千個，為什麼顧客在店還沒開門前就在外面排隊？ B：很多粉絲把每個公仔都看成一件會隨著時間越來越值錢的【收藏品】，所以想在賣完之前買一個。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好",
    "en_def": "an activity you enjoy doing in your free time",
    "sentence": "A: You always look so relaxed when you come back to the office on Monday mornings, so what do you usually do on the weekends? B: My favorite {{BLANK}} is collecting old vinyl records, so I spend most Saturdays visiting second-hand shops and markets around the city to look for rare albums.",
    "cn": "A：你每週一早上回到辦公室時總是看起來很放鬆，你週末通常都做些什麼？ B：我最喜歡的【嗜好】是收集舊黑膠唱片，所以大部分的週六我都會去城市各處的二手店和市集尋找稀有的專輯。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的",
    "en_def": "not common; not found or seen very often",
    "sentence": "A: Why did the museum decide to put extra security guards in the new exhibition hall when the show opened last week? B: The hall contains several {{BLANK}} coins from ancient Rome, and since only a few of them exist anywhere in the world, the museum cannot risk losing even one.",
    "cn": "A：上週展覽開幕時，博物館為什麼決定在新展廳增派保全人員？ B：展廳裡有幾枚來自古羅馬的【稀有】硬幣，而且全世界僅存幾枚，所以博物館連一枚都不能冒險遺失。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "貴重的；值錢的",
    "en_def": "worth a lot of money",
    "sentence": "A: My grandfather left me a box of old watches when he moved into the care home, but I have no idea whether they are worth anything at all. B: You should take them to a professional dealer, because some of those older Swiss models can be very {{BLANK}} if they still work properly.",
    "cn": "A：我祖父搬進安養院時留給我一盒舊手錶，但我完全不知道它們值不值錢。 B：你應該把它們拿給專業的經銷商看，因為有些較舊的瑞士錶款如果還能正常運作，可能非常【貴重】。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨一無二的",
    "en_def": "being the only one of its kind",
    "sentence": "A: Why is the gallery asking such a high price for that small painted plate in the corner of the front window? B: The artist made it by hand for a royal wedding in 1890, and because there is no other piece like it, the owner says it is completely {{BLANK}}.",
    "cn": "A：為什麼畫廊對櫥窗角落那個小彩繪盤子開那麼高的價錢？ B：那是藝術家在1890年為一場皇室婚禮手工製作的，因為沒有其他作品和它一樣，老闆說它完全是【獨一無二的】。"
  },
  {
    "word": "antique",
    "pos": "adj.",
    "cn_def": "古董的",
    "en_def": "old and valuable, usually more than 100 years old",
    "sentence": "A: The new hotel lobby looks very elegant, so did the designer buy all of this furniture from a modern store in Taipei? B: No, she found most of the {{BLANK}} chairs and tables at a market in France, and some of them were made more than a hundred and fifty years ago.",
    "cn": "A：新飯店的大廳看起來非常優雅，設計師是在台北的現代家具店買這些家具的嗎？ B：不是，她大部分的【古董】桌椅都是在法國的市集找到的，有些甚至是一百五十多年前做的。"
  },
  {
    "word": "souvenir",
    "pos": "n.",
    "cn_def": "紀念品",
    "en_def": "something you buy or keep to remember a place or event",
    "sentence": "A: Did you have enough free time to look around Kyoto after the sales conference finished on Thursday afternoon? B: Yes, I walked through the old streets for two hours and bought a small paper fan as a {{BLANK}} for my daughter, who loves anything traditional from Japan.",
    "cn": "A：週四下午業務會議結束後，你有足夠的空閒時間逛逛京都嗎？ B：有，我在古老的街道上走了兩個小時，還買了一把小紙扇當作【紀念品】送給我女兒，她很喜歡日本的傳統東西。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "相簿；集郵冊",
    "en_def": "a book with empty pages for keeping photos or stamps",
    "sentence": "A: Where should we keep all the photos from the company's twentieth anniversary party so that visitors can look at them? B: Let's print the best ones and put them in a large leather {{BLANK}} on the table in the reception area, so guests can enjoy them while they wait.",
    "cn": "A：公司二十週年派對的照片應該放在哪裡，讓訪客可以看？ B：我們把最好的照片印出來，放進接待區桌上的一本大皮革【相簿】裡，這樣客人等候時就可以欣賞。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "展示；陳列",
    "en_def": "to put something where people can see it",
    "sentence": "A: The shop owner just received a large box of hand-painted model trains from Germany, so where is she planning to put them? B: She wants to {{BLANK}} them in the big glass cabinet near the entrance, because customers walking past on the street will notice them right away.",
    "cn": "A：店主剛收到一大箱來自德國的手繪模型火車，她打算把它們放在哪裡？ B：她想把它們【展示】在入口附近的大玻璃櫃裡，因為走在街上的顧客馬上就會注意到。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；安排",
    "en_def": "to arrange things in a clear order",
    "sentence": "A: Your stamp collection has grown so much since last year, but how do you find a particular stamp when you need it? B: Every Sunday evening I {{BLANK}} the new ones by country and year in separate folders, so I can find anything within a minute or two.",
    "cn": "A：你的郵票收藏從去年到現在增加了好多，你需要某張郵票時要怎麼找到它？ B：每個週日晚上，我都會把新的郵票依國家和年份【整理】到不同的資料夾裡，所以我一兩分鐘內就能找到任何一張。"
  },
  {
    "word": "sort",
    "pos": "v.",
    "cn_def": "分類",
    "en_def": "to put things into groups by type, size, date, etc.",
    "sentence": "A: The library received hundreds of old postcards from a local family last week, so what are the volunteers doing with them now? B: They are helping the staff {{BLANK}} the cards into different boxes by city and decade before the library scans them and puts them online.",
    "cn": "A：圖書館上週收到當地一戶人家捐的數百張舊明信片，志工們現在在做什麼？ B：他們正在幫工作人員把明信片按城市和年代【分類】到不同的箱子裡，之後圖書館會掃描並放上網。"
  },
  {
    "word": "series",
    "pos": "n.",
    "cn_def": "系列",
    "en_def": "a group of similar things that come one after another",
    "sentence": "A: Why do so many people come to the bookstore early on the first Friday of every month? B: That is the day the publisher releases the next comic in a popular {{BLANK}} about a young detective, and fans want to complete their sets as quickly as possible.",
    "cn": "A：為什麼每個月第一個週五都有那麼多人一早就來書店？ B：那天出版社會發行一套熱門少年偵探【系列】漫畫的下一集，粉絲們想盡快把整套收齊。"
  },
  {
    "word": "edition",
    "pos": "n.",
    "cn_def": "版本",
    "en_def": "one form or printing of a book, coin, etc.",
    "sentence": "A: That old copy of the novel on your office shelf looks quite ordinary, so why are you so careful when anyone touches it? B: It is a first {{BLANK}} that was printed in 1952, and a book dealer told me it could be worth about three thousand dollars today.",
    "cn": "A：你辦公室書架上那本舊小說看起來很普通，為什麼有人碰它時你都那麼小心？ B：那是1952年印刷的初【版】，一位書商告訴我它今天可能值三千美元左右。"
  },
  {
    "word": "limited",
    "pos": "adj.",
    "cn_def": "限量的；有限的",
    "en_def": "small in number or amount",
    "sentence": "A: Should we order the new anniversary mugs for our clients now, or can we wait until the end of the month? B: We should order them today, because the company is producing only a {{BLANK}} number of them, and the sales manager said they will probably sell out by next week.",
    "cn": "A：我們應該現在就為客戶訂購新的週年紀念馬克杯，還是可以等到月底？ B：我們今天就該訂，因為公司只生產【有限】的數量，業務經理說下週大概就會賣完。"
  },
  {
    "word": "trade",
    "pos": "v.",
    "cn_def": "交換；交易",
    "en_def": "to give something and receive something else in return",
    "sentence": "A: My son has two copies of the same baseball card, but he is still missing the famous pitcher from Tainan. B: He could bring the extra card to the club meeting on Saturday and {{BLANK}} it with another member who might have the pitcher card he wants.",
    "cn": "A：我兒子有兩張一樣的棒球卡，但他還缺那位來自台南的知名投手。 B：他可以把多的那張卡帶去週六的社團聚會，跟另一位可能有他想要的投手卡的成員【交換】。"
  },
  {
    "word": "swap",
    "pos": "v.",
    "cn_def": "交換；調換",
    "en_def": "to exchange one thing for another",
    "sentence": "A: I bought a blue team scarf at the stadium, but my wife says she really prefers the red one that you got. B: That's no problem, because I actually like blue better, so we can {{BLANK}} scarves tomorrow when we meet for lunch near the office.",
    "cn": "A：我在體育場買了一條藍色球隊圍巾，但我太太說她其實比較喜歡你買的那條紅色的。 B：沒問題，因為我其實比較喜歡藍色，所以明天我們在辦公室附近吃午餐時可以【交換】圍巾。"
  },
  {
    "word": "duplicate",
    "pos": "n.",
    "cn_def": "複本；重複品",
    "en_def": "an exact copy of something",
    "sentence": "A: When we checked the shipment of old coins this morning, why did you put two of them aside in a separate envelope? B: Each of those coins was a {{BLANK}} of one that we already have in the museum, so we plan to sell them to raise money for repairs.",
    "cn": "A：今天早上我們檢查那批舊硬幣時，你為什麼把其中兩枚另外放進一個信封裡？ B：那兩枚都是博物館已經有的硬幣的【重複品】，所以我們打算把它們賣掉來籌措修繕經費。"
  },
  {
    "word": "complete",
    "pos": "adj.",
    "cn_def": "完整的",
    "en_def": "having all the parts; with nothing missing",
    "sentence": "A: Your uncle has been buying those small model cars for almost thirty years, so is he still looking for more of them? B: He finally has a {{BLANK}} set of all the racing cars made in the 1960s, so now he only wants to keep them in good shape.",
    "cn": "A：你叔叔買那些小模型車已經將近三十年了，他還在找更多嗎？ B：他終於擁有1960年代所有賽車的【完整】一套，所以現在他只想把它們保持在良好狀態。"
  },
  {
    "word": "set",
    "pos": "n.",
    "cn_def": "一套；一組",
    "en_def": "a group of things that belong together",
    "sentence": "A: What gift should we give the retiring manager, since she loves drinking tea with her friends every afternoon? B: I saw a beautiful {{BLANK}} of hand-painted teacups and a matching pot at the department store, and I think she would really enjoy using them.",
    "cn": "A：我們應該送即將退休的經理什麼禮物？她每天下午都喜歡和朋友喝茶。 B：我在百貨公司看到一【套】漂亮的手繪茶杯和配套茶壺，我想她一定會很喜歡用。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea of something",
    "sentence": "A: There are so many different stamps on the market, so how did you decide which ones to start collecting? B: I chose birds as my main {{BLANK}}, because I love nature, and now I have stamps showing birds from more than sixty different countries around the world.",
    "cn": "A：市面上有那麼多不同的郵票，你是怎麼決定要開始收集哪些的？ B：我選了鳥類當作我的主要【主題】，因為我熱愛大自然，現在我有來自全世界六十多個國家、印有鳥類的郵票。"
  },
  {
    "word": "catalog",
    "pos": "n.",
    "cn_def": "目錄",
    "en_def": "a list of items for sale, often with pictures and prices",
    "sentence": "A: How can customers check which antique maps are available before they travel all the way to our shop? B: We send them an online {{BLANK}} every month that shows a photo, a short description, and the price of each map that we currently have in the store.",
    "cn": "A：顧客要怎麼在大老遠來我們店之前，先查看有哪些古地圖可以買？ B：我們每個月會寄給他們一份線上【目錄】，裡面有店內目前每張地圖的照片、簡短描述和價格。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存",
    "en_def": "to keep something in good condition",
    "sentence": "A: Why does the museum keep the lights so dim in the room where the old letters and newspapers are shown? B: Strong light damages old paper very quickly, so the staff use soft lighting to {{BLANK}} the documents for the many future visitors and researchers who will come.",
    "cn": "A：為什麼博物館展示舊信件和報紙的展間燈光那麼暗？ B：強光會很快損壞舊紙張，所以工作人員用柔和的燈光來【保存】這些文件，留給未來許多會來的參觀者和研究人員。"
  },
  {
    "word": "condition",
    "pos": "n.",
    "cn_def": "狀況；狀態",
    "en_def": "the state that something is in",
    "sentence": "A: The seller is asking eight hundred dollars for that old comic book, which seems like a lot of money to me. B: The price is high because the book is in excellent {{BLANK}}, with no torn pages or stains, even though it was printed more than sixty years ago.",
    "cn": "A：賣家那本舊漫畫開價八百美元，我覺得這好像很貴。 B：價格高是因為那本書的【狀況】極佳，沒有任何撕破的頁面或汙漬，儘管它是六十多年前印的。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲藏；存放",
    "en_def": "the keeping of things in a special place until they are needed",
    "sentence": "A: Our office is moving to a smaller building next month, so what will we do with all the old files and sample products? B: The company has rented a {{BLANK}} unit near the airport, so we can keep everything there safely until we decide what to throw away.",
    "cn": "A：我們辦公室下個月要搬到比較小的大樓，那些舊檔案和樣品要怎麼處理？ B：公司在機場附近租了一個【儲藏】空間，所以在我們決定要丟掉什麼之前，可以把所有東西安全地放在那裡。"
  },
  {
    "word": "case",
    "pos": "n.",
    "cn_def": "盒子；箱子",
    "en_def": "a box or container for keeping or protecting things",
    "sentence": "A: I'm worried that the old silver coins will get scratched when we carry them to the trade show in Kaohsiung next week. B: Don't worry, because I bought a hard plastic {{BLANK}} with soft padding inside, so each coin will stay safe during the trip.",
    "cn": "A：我擔心下週把那些舊銀幣帶去高雄商展時會被刮傷。 B：別擔心，我買了一個內有柔軟襯墊的硬塑膠【盒子】，所以每枚硬幣在路上都會很安全。"
  },
  {
    "word": "exhibit",
    "pos": "v.",
    "cn_def": "展出",
    "en_def": "to show something to the public, especially in a museum or gallery",
    "sentence": "A: The city art museum has been closed for two months, so do you know when it will open again to the public? B: It reopens next Monday, and it will {{BLANK}} more than two hundred old toys from a famous private collection for the first time ever.",
    "cn": "A：市立美術館已經關閉兩個月了，你知道什麼時候會重新對外開放嗎？ B：下週一重新開放，而且會首次【展出】來自一個知名私人收藏的兩百多件古老玩具。"
  },
  {
    "word": "curious",
    "pos": "adj.",
    "cn_def": "好奇的",
    "en_def": "wanting to know or learn about something",
    "sentence": "A: Why did so many visitors stop at the small table in the corner of the exhibition hall this morning? B: The old machine on that table makes a strange sound when you turn the handle, so people were {{BLANK}} and wanted to find out what it was used for.",
    "cn": "A：今天早上為什麼那麼多參觀者在展覽廳角落的小桌子前停下來？ B：那張桌上的舊機器在你轉動把手時會發出奇怪的聲音，所以大家都很【好奇】，想知道它是用來做什麼的。"
  },
  {
    "word": "passion",
    "pos": "n.",
    "cn_def": "熱愛；熱情",
    "en_def": "a very strong interest in or love for something",
    "sentence": "A: Your manager seems to know a lot about old cameras, so has she always been interested in photography? B: Yes, her {{BLANK}} for cameras started when her father gave her one for her tenth birthday, and now she owns more than three hundred of them.",
    "cn": "A：你的經理似乎很懂舊相機，她一直都對攝影有興趣嗎？ B：是的，她對相機的【熱愛】始於她十歲生日時父親送她一台相機，現在她擁有三百多台。"
  },
  {
    "word": "expand",
    "pos": "v.",
    "cn_def": "擴大；擴展",
    "en_def": "to become larger or make something larger",
    "sentence": "A: The small shop that sells old records has become very popular with young people over the past year, hasn't it? B: Yes, and the owner plans to {{BLANK}} the store next spring by renting the empty space next door, so she can add a listening area.",
    "cn": "A：那家賣舊唱片的小店在過去一年很受年輕人歡迎，不是嗎？ B：是的，老闆打算明年春天租下隔壁的空店面來【擴大】店面，這樣她就能增加一個試聽區。"
  },
  {
    "word": "search",
    "pos": "v.",
    "cn_def": "搜尋；尋找",
    "en_def": "to look carefully for something",
    "sentence": "A: How did you finally find that rare postcard of the old train station that you had wanted for so many years? B: I used to {{BLANK}} online auction sites every night after work, and last month someone in Canada listed exactly the card I needed.",
    "cn": "A：你最後是怎麼找到那張你想要了好多年的舊火車站稀有明信片的？ B：我以前每天下班後都會【搜尋】網路拍賣網站，上個月加拿大有人剛好刊登了我需要的那張明信片。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現",
    "en_def": "to find something for the first time",
    "sentence": "A: Is it true that the workers found something interesting while they were repairing the roof of the old bank building? B: Yes, they were surprised to {{BLANK}} a metal box full of old coins and letters hidden under the floor of the attic last Tuesday.",
    "cn": "A：工人們在修理舊銀行大樓屋頂時找到了有趣的東西，是真的嗎？ B：是的，上週二他們驚訝地在閣樓地板下【發現】一個裝滿舊硬幣和信件的金屬盒。"
  },
  {
    "word": "treasure",
    "pos": "n.",
    "cn_def": "珍寶；寶物",
    "en_def": "something that is very valuable or special to someone",
    "sentence": "A: Why does your grandmother keep that old wooden box on the top shelf where nobody else can reach it? B: Inside it are letters my grandfather wrote to her during the war, and for her, they are the greatest {{BLANK}} she owns, more precious than any jewelry.",
    "cn": "A：你祖母為什麼把那個舊木盒放在沒人搆得到的最上層架子上？ B：裡面是我祖父在戰爭期間寫給她的信，對她來說，那是她擁有最珍貴的【珍寶】，比任何珠寶都寶貴。"
  },
  {
    "word": "enthusiast",
    "pos": "n.",
    "cn_def": "愛好者；熱衷者",
    "en_def": "a person who is very interested in a particular activity",
    "sentence": "A: Who is the man in the green jacket talking to the museum guide about the old steam engines? B: He is a railway {{BLANK}} from Australia who travels around the world every year to visit train museums and take photos of historic locomotives.",
    "cn": "A：那個穿綠色夾克、正在和博物館導覽員談論舊蒸汽火車頭的男子是誰？ B：他是一位來自澳洲的鐵道【愛好者】，每年都環遊世界參觀火車博物館，並拍攝歷史悠久的火車頭。"
  }
];

const MCQS = [
  {
    "q": "The famous _____ donated his entire stamp collection to the city museum. He had been gathering stamps for more than fifty years.",
    "options": [
      "collector",
      "storage",
      "condition",
      "catalog"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Gardening became her favorite _____ after she retired from the bank. She now spends every weekend planting flowers in her backyard.",
    "options": [
      "edition",
      "catalog",
      "hobby",
      "duplicate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "This orchid is so _____ that only a few hundred plants grow in the wild. Visitors must not touch the flowers.",
    "options": [
      "curious",
      "rare",
      "complete",
      "antique"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Please keep your _____ items, such as jewelry and passports, in the hotel safe. The hotel is not responsible for lost property.",
    "options": [
      "complete",
      "curious",
      "limited",
      "valuable"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Each handmade bowl has a _____ pattern, so no two are exactly alike. Customers enjoy choosing their favorite design.",
    "options": [
      "unique",
      "curious",
      "complete",
      "limited"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The hotel lobby is decorated with a large _____ clock from the 1800s. Guests often stop to take photos of it.",
    "options": [
      "limited",
      "curious",
      "antique",
      "complete"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Tourists can buy a small _____ at the gift shop before leaving the castle. Popular items include key chains and postcards.",
    "options": [
      "condition",
      "theme",
      "passion",
      "souvenir"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Ms. Lin pasted the wedding photos into a white leather _____. She plans to give it to her daughter next month.",
    "options": [
      "condition",
      "album",
      "passion",
      "theme"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The bakery will _____ its new cakes in the front window this weekend. The manager hopes they will attract more customers.",
    "options": [
      "display",
      "swap",
      "expand",
      "search"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Please _____ these files alphabetically before the auditors arrive on Monday. They will need to find each document quickly.",
    "options": [
      "exhibit",
      "organize",
      "discover",
      "swap"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The publisher released the third book in its popular mystery _____ last month. Fans had waited two years for it.",
    "options": [
      "enthusiast",
      "treasure",
      "series",
      "storage"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The magazine's holiday _____ includes a special section on gift ideas. It will be available in stores next Friday.",
    "options": [
      "storage",
      "collector",
      "hobby",
      "edition"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Seats for the cooking class are _____, so please register early. Only twelve people can join each session.",
    "options": [
      "curious",
      "limited",
      "antique",
      "valuable"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Many countries _____ goods such as rice and oil with their neighbors. This business creates thousands of jobs.",
    "options": [
      "exhibit",
      "search",
      "trade",
      "preserve"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Could we _____ shifts next Tuesday? I have a dentist appointment in the morning and can work your evening shift instead.",
    "options": [
      "swap",
      "preserve",
      "discover",
      "display"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please make a _____ of this contract and keep it in your files. The original must be sent to our lawyer today.",
    "options": [
      "souvenir",
      "treasure",
      "passion",
      "duplicate"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The report is not _____ yet because two sales figures are still missing. Mr. Chen will finish it tomorrow.",
    "options": [
      "rare",
      "curious",
      "complete",
      "antique"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The _____ of this year's company dinner is the 1980s. Employees are encouraged to wear clothes from that decade.",
    "options": [
      "theme",
      "storage",
      "duplicate",
      "collector"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Customers can order furniture directly from our printed _____. Each page shows a photo, the size, and the price.",
    "options": [
      "hobby",
      "catalog",
      "enthusiast",
      "passion"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Freezing fresh fruit is a simple way to _____ it for several months. Many farmers use this method in summer.",
    "options": [
      "swap",
      "search",
      "exhibit",
      "preserve"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The used car is in excellent _____ and has very few kilometers on it. The dealer is offering it at a fair price.",
    "options": [
      "souvenir",
      "condition",
      "hobby",
      "series"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The warehouse provides cold _____ for fresh vegetables and meat. Products can stay there safely for up to three weeks.",
    "options": [
      "storage",
      "album",
      "theme",
      "enthusiast"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The gallery will _____ paintings by local artists throughout December. Admission is free for students and seniors.",
    "options": [
      "preserve",
      "expand",
      "exhibit",
      "search"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Children are naturally _____ about the world around them. They often ask many questions about how things work.",
    "options": [
      "valuable",
      "limited",
      "antique",
      "curious"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Mr. Wang has a real _____ for cooking and opened his own restaurant at fifty. He still creates every new dish himself.",
    "options": [
      "storage",
      "passion",
      "catalog",
      "duplicate"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The company plans to _____ its business into Southeast Asia next year. It will open three new offices in Vietnam.",
    "options": [
      "swap",
      "discover",
      "preserve",
      "expand"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Police officers will _____ the park for the missing dog this afternoon. Volunteers are welcome to help them.",
    "options": [
      "search",
      "preserve",
      "swap",
      "exhibit"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Scientists hope to _____ a cure for the disease within ten years. Their research is supported by a large grant.",
    "options": [
      "display",
      "swap",
      "discover",
      "organize"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The old diary is a family _____ that has been passed down for four generations. We keep it in a safe.",
    "options": [
      "catalog",
      "storage",
      "edition",
      "treasure"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "As a cycling _____, Ms. Park rides to work every day, even in the rain. She also joins races every spring.",
    "options": [
      "enthusiast",
      "catalog",
      "souvenir",
      "storage"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "collector": {
    "pos": "n.",
    "en_def": "a person who collects things as a hobby or business",
    "cn_def": "收藏家"
  },
  "collectible": {
    "pos": "n.",
    "en_def": "an object that people collect because it is valuable or interesting",
    "cn_def": "收藏品"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you enjoy doing in your free time",
    "cn_def": "嗜好"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not common; not found or seen very often",
    "cn_def": "稀有的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "worth a lot of money",
    "cn_def": "貴重的；值錢的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "being the only one of its kind",
    "cn_def": "獨一無二的"
  },
  "antique": {
    "pos": "adj.",
    "en_def": "old and valuable, usually more than 100 years old",
    "cn_def": "古董的"
  },
  "souvenir": {
    "pos": "n.",
    "en_def": "something you buy or keep to remember a place or event",
    "cn_def": "紀念品"
  },
  "album": {
    "pos": "n.",
    "en_def": "a book with empty pages for keeping photos or stamps",
    "cn_def": "相簿；集郵冊"
  },
  "display": {
    "pos": "v.",
    "en_def": "to put something where people can see it",
    "cn_def": "展示；陳列"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a clear order",
    "cn_def": "整理；安排"
  },
  "sort": {
    "pos": "v.",
    "en_def": "to put things into groups by type, size, date, etc.",
    "cn_def": "分類"
  },
  "series": {
    "pos": "n.",
    "en_def": "a group of similar things that come one after another",
    "cn_def": "系列"
  },
  "edition": {
    "pos": "n.",
    "en_def": "one form or printing of a book, coin, etc.",
    "cn_def": "版本"
  },
  "limited": {
    "pos": "adj.",
    "en_def": "small in number or amount",
    "cn_def": "限量的；有限的"
  },
  "trade": {
    "pos": "v.",
    "en_def": "to give something and receive something else in return",
    "cn_def": "交換；交易"
  },
  "swap": {
    "pos": "v.",
    "en_def": "to exchange one thing for another",
    "cn_def": "交換；調換"
  },
  "duplicate": {
    "pos": "n.",
    "en_def": "an exact copy of something",
    "cn_def": "複本；重複品"
  },
  "complete": {
    "pos": "adj.",
    "en_def": "having all the parts; with nothing missing",
    "cn_def": "完整的"
  },
  "set": {
    "pos": "n.",
    "en_def": "a group of things that belong together",
    "cn_def": "一套；一組"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea of something",
    "cn_def": "主題"
  },
  "catalog": {
    "pos": "n.",
    "en_def": "a list of items for sale, often with pictures and prices",
    "cn_def": "目錄"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "保存"
  },
  "condition": {
    "pos": "n.",
    "en_def": "the state that something is in",
    "cn_def": "狀況；狀態"
  },
  "storage": {
    "pos": "n.",
    "en_def": "the keeping of things in a special place until they are needed",
    "cn_def": "儲藏；存放"
  },
  "case": {
    "pos": "n.",
    "en_def": "a box or container for keeping or protecting things",
    "cn_def": "盒子；箱子"
  },
  "exhibit": {
    "pos": "v.",
    "en_def": "to show something to the public, especially in a museum or gallery",
    "cn_def": "展出"
  },
  "curious": {
    "pos": "adj.",
    "en_def": "wanting to know or learn about something",
    "cn_def": "好奇的"
  },
  "passion": {
    "pos": "n.",
    "en_def": "a very strong interest in or love for something",
    "cn_def": "熱愛；熱情"
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become larger or make something larger",
    "cn_def": "擴大；擴展"
  },
  "search": {
    "pos": "v.",
    "en_def": "to look carefully for something",
    "cn_def": "搜尋；尋找"
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find something for the first time",
    "cn_def": "發現"
  },
  "treasure": {
    "pos": "n.",
    "en_def": "something that is very valuable or special to someone",
    "cn_def": "珍寶；寶物"
  },
  "enthusiast": {
    "pos": "n.",
    "en_def": "a person who is very interested in a particular activity",
    "cn_def": "愛好者；熱衷者"
  }
};

const EXTRA_GLOSSES = {};
