// Topic 283 Quiz Data: Photo 照片
// Source word list: https://www.examword.com/group-topic/photo — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T283 - Photo 照片",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something in good condition or stop it from being damaged",
    "sentence": "A: Our company is turning fifty next year, so how should we store the old black-and-white photos that the founder took of the first office? B: We should scan them and keep the originals in special acid-free boxes, because that is the best way to {{BLANK}} them for future employees and visitors.",
    "cn": "A：我們公司明年就要滿五十週年了，創辦人拍下第一間辦公室的那些老黑白照片，我們該怎麼存放呢？ B：我們應該把它們掃描起來，並把原件放進特製的無酸盒子裡，因為這是為未來的員工和訪客【保存】它們的最好方法。"
  },
  {
    "word": "establish",
    "pos": "v.",
    "cn_def": "建立；設立",
    "en_def": "to start or create something such as a company, system, or rule",
    "sentence": "A: Our marketing team keeps using different photo sizes and styles on the website, and customers say it looks confusing, so what should we do about it? B: I think we need to {{BLANK}} clear rules for all product pictures, including the background color and lighting, before the new catalog goes online next month.",
    "cn": "A：我們的行銷團隊在網站上一直使用不同尺寸和風格的照片，顧客說看起來很混亂，我們該怎麼辦？ B：我認為在下個月新型錄上線之前，我們需要為所有產品照片【建立】明確的規範，包括背景顏色和燈光。"
  },
  {
    "word": "randomly",
    "pos": "adv.",
    "cn_def": "隨機地；任意地",
    "en_def": "by chance, without any plan or pattern",
    "sentence": "A: How did the judges choose the winners of the employee photo contest when more than three hundred people sent in their pictures? B: First, they {{BLANK}} picked fifty photos from each department to keep things fair, and then they voted on the best ones during a long meeting on Friday afternoon.",
    "cn": "A：有三百多人寄來照片，評審是怎麼選出員工攝影比賽的得獎者的？ B：首先，為了公平起見，他們從每個部門【隨機地】挑出五十張照片，然後在星期五下午一場很長的會議中投票選出最好的作品。"
  },
  {
    "word": "obsess",
    "pos": "v.",
    "cn_def": "過度在意；著迷",
    "en_def": "to think about something too much, so you cannot stop",
    "sentence": "A: Why is the new designer still at his desk at nine o'clock at night, even though the brochure photos were approved this morning? B: He tends to {{BLANK}} over tiny details like shadows and colors, so he keeps editing the pictures again and again until he feels they are perfect for the client.",
    "cn": "A：手冊的照片今天早上就已經通過了，為什麼那位新設計師晚上九點還坐在辦公桌前？ B：他往往會對陰影和顏色這類小細節【過度在意】，所以他會一再修改照片，直到他覺得對客戶來說完美為止。"
  },
  {
    "word": "angle",
    "pos": "n.",
    "cn_def": "角度",
    "en_def": "the position or direction from which you look at or photograph something",
    "sentence": "A: The photos of our new hotel lobby look small and dark on the website, so can you tell me what went wrong during the shoot? B: The photographer stood too close to the front desk, so next time we should shoot from a higher {{BLANK}} near the stairs to show the whole bright, open space.",
    "cn": "A：我們新飯店大廳的照片在網站上看起來又小又暗，你能告訴我拍攝時出了什麼問題嗎？ B：攝影師站得離櫃台太近了，所以下次我們應該在樓梯附近從較高的【角度】拍攝，展現出整個明亮又開闊的空間。"
  },
  {
    "word": "messy",
    "pos": "adj.",
    "cn_def": "凌亂的；髒亂的",
    "en_def": "dirty or untidy",
    "sentence": "A: The photographer is coming at two o'clock to take pictures of our office for the company website, so is everything ready? B: Not yet, because the meeting room is still {{BLANK}} with empty coffee cups and piles of paper, so could you help me clean it up before she arrives?",
    "cn": "A：攝影師兩點要來拍我們辦公室的照片，放在公司網站上，一切都準備好了嗎？ B：還沒，因為會議室裡到處是空咖啡杯和成疊的紙張，還是很【凌亂】，你可以在她到之前幫我整理一下嗎？"
  },
  {
    "word": "unnecessary",
    "pos": "adj.",
    "cn_def": "不必要的",
    "en_def": "not needed",
    "sentence": "A: Should we hire a professional photographer for the small staff lunch next Friday, or can someone from our team just use a phone camera? B: Hiring a professional would be an {{BLANK}} expense for such a short, casual event, so let's ask Mia, because she takes great pictures with her phone.",
    "cn": "A：下週五的員工小型午餐，我們應該請專業攝影師，還是讓團隊裡的人用手機拍就好？ B：這麼短又輕鬆的活動，請專業攝影師會是一筆【不必要的】開銷，所以我們請蜜雅拍吧，她用手機就能拍出很棒的照片。"
  },
  {
    "word": "obsolete",
    "pos": "adj.",
    "cn_def": "過時的；淘汰的",
    "en_def": "no longer used because something newer and better exists",
    "sentence": "A: Why is the IT department collecting all the old digital cameras from the marketing office this week? B: Those cameras are {{BLANK}} now, since the company bought new smartphones that take better pictures, so the old ones will be donated to a local school next month.",
    "cn": "A：為什麼資訊部門這週要把行銷辦公室所有舊數位相機收走？ B：那些相機現在已經【過時】了，因為公司買了拍照效果更好的新智慧型手機，所以舊相機下個月會捐給當地一所學校。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "相簿",
    "en_def": "a book or online folder for keeping photos",
    "sentence": "A: What special gift are we giving Mr. Chen when he retires at the end of this month after thirty years with the company? B: We are making a photo {{BLANK}} with pictures from every year he worked here, and each team member will write a short thank-you message next to their favorite picture.",
    "cn": "A：陳先生在公司服務三十年，這個月底退休時，我們要送他什麼特別的禮物？ B：我們正在做一本照片【相簿】，裡面有他在這裡工作每一年的照片，而且每位團隊成員都會在自己最喜歡的照片旁寫一段簡短的感謝留言。"
  },
  {
    "word": "capture",
    "pos": "v.",
    "cn_def": "捕捉；拍下",
    "en_def": "to record something in a photo or film",
    "sentence": "A: Do you think we need a professional photographer for the product launch, or can our own staff take the pictures? B: We should hire a professional, because only an experienced photographer can {{BLANK}} the excitement of the crowd when the CEO shows the new phone on stage.",
    "cn": "A：你覺得產品發表會需要請專業攝影師嗎？還是我們自己的員工拍就好？ B：我們應該請專業的，因為只有經驗豐富的攝影師才能【捕捉】到執行長在台上展示新手機時群眾的興奮之情。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假定；以為",
    "en_def": "to think something is true without checking",
    "sentence": "A: Why didn't you bring your camera to the factory visit this morning when the client asked us to take photos of the production line? B: I'm sorry, because I didn't check with anyone, and I usually {{BLANK}} that clients bring their own photographer, just like they did at our last two visits.",
    "cn": "A：今天早上客戶要求我們拍生產線的照片，你為什麼沒有帶相機去工廠參觀？ B：很抱歉，因為我沒有跟任何人確認，而且我通常【以為】客戶會自己帶攝影師，就像我們前兩次參訪時那樣。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "畫廊；美術館",
    "en_def": "a room or building where art or photos are shown",
    "sentence": "A: Where is the photography exhibition about old Taipei that you mentioned at lunch yesterday, and how much are the tickets? B: It is at a small {{BLANK}} next to the train station, and entry is free for company employees if we show our staff cards at the front desk.",
    "cn": "A：你昨天午餐時提到的那個老台北攝影展在哪裡？票價多少？ B：在火車站旁邊一間小【畫廊】，公司員工只要在櫃台出示員工證就可以免費入場。"
  },
  {
    "word": "cherish",
    "pos": "v.",
    "cn_def": "珍惜；珍愛",
    "en_def": "to love something and care about it very much",
    "sentence": "A: Why does the manager keep that old, faded photo of the first team on her desk instead of using a new one? B: She says she will always {{BLANK}} the memory of those early days, when only five people worked together in a tiny room to build the company.",
    "cn": "A：為什麼經理把那張第一批團隊成員的褪色舊照片放在辦公桌上，而不換一張新的？ B：她說她會永遠【珍惜】那段早期日子的回憶，那時只有五個人在一個小房間裡一起打拼建立公司。"
  },
  {
    "word": "virtually",
    "pos": "adv.",
    "cn_def": "幾乎；實際上",
    "en_def": "almost completely",
    "sentence": "A: Did the heavy rain damage any of the photos that were stored in the basement of our old office building? B: Sadly, {{BLANK}} all of the pictures from the 1990s were ruined, so we will have to ask former employees whether they kept their own copies at home.",
    "cn": "A：大雨有沒有損壞存放在我們舊辦公大樓地下室的照片？ B：很遺憾，1990年代的照片【幾乎】全毀了，所以我們得問問以前的員工，看他們家裡有沒有留存自己的副本。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "large, with plenty of room",
    "sentence": "A: Why did the photographer choose the hotel ballroom instead of our office for the big team photo next Monday? B: Our office is too small for eighty people, but the ballroom is bright and {{BLANK}}, so everyone can stand together in three rows without anyone being hidden.",
    "cn": "A：為什麼攝影師選擇飯店宴會廳，而不是我們辦公室，來拍下週一的大合照？ B：我們辦公室對八十個人來說太小了，但宴會廳明亮又【寬敞】，所以每個人都能站成三排，不會有人被擋住。"
  },
  {
    "word": "ultimate",
    "pos": "adj.",
    "cn_def": "最終的；終極的",
    "en_def": "final and most important",
    "sentence": "A: We have spent a lot of money on new cameras and lighting for the online store this year, so what is the real purpose of all this? B: The {{BLANK}} goal is to show our products clearly enough that customers feel confident buying them without visiting a shop first.",
    "cn": "A：我們今年為網路商店的新相機和燈光花了很多錢，這一切真正的目的是什麼？ B：【最終】目標是把我們的產品展示得夠清楚，讓顧客不必先去實體店也能放心購買。"
  },
  {
    "word": "portrait",
    "pos": "n.",
    "cn_def": "肖像；人像照",
    "en_def": "a painting or photo of a person, especially the face",
    "sentence": "A: The new company website needs pictures of all the department heads, so how should we take them? B: Let's book a studio next Tuesday, and the photographer can take a formal {{BLANK}} of each manager against a plain white background, which will look neat and professional online.",
    "cn": "A：公司新網站需要所有部門主管的照片，我們該怎麼拍？ B：我們下週二預約一間攝影棚，攝影師可以在素白背景前為每位經理拍一張正式的【人像照】，放在網路上會看起來整齊又專業。"
  },
  {
    "word": "treasure",
    "pos": "v.",
    "cn_def": "珍視；珍藏",
    "en_def": "to value something very much and keep it carefully",
    "sentence": "A: Why did you spend so much time organizing the photos from our company trip to Japan last spring? B: Many of my colleagues told me they {{BLANK}} those pictures, because the trip was the first time our whole department had traveled abroad together, so I wanted to give everyone a nice copy.",
    "cn": "A：你為什麼花那麼多時間整理我們去年春天公司日本旅遊的照片？ B：很多同事告訴我他們很【珍視】那些照片，因為那次旅行是我們整個部門第一次一起出國，所以我想給每個人一份精美的副本。"
  },
  {
    "word": "spectacular",
    "pos": "adj.",
    "cn_def": "壯觀的；精彩的",
    "en_def": "very impressive and exciting to see",
    "sentence": "A: How was the view from the rooftop restaurant where we are holding the year-end party next month? B: It was absolutely {{BLANK}}, because you can see the whole city lit up at night, so I'm sure our guests will want to take lots of photos there.",
    "cn": "A：我們下個月要辦尾牙的那間頂樓餐廳，景色怎麼樣？ B：絕對【壯觀】，因為晚上可以看到整座城市燈火通明，所以我相信我們的客人一定會想在那裡拍很多照片。"
  },
  {
    "word": "passing",
    "pos": "adj.",
    "cn_def": "經過的；短暫的",
    "en_def": "going past a place; lasting only a short time",
    "sentence": "A: Why is the photo of our new store in the newspaper a little blurry on the left side? B: The photographer took it at the busy intersection during rush hour, and a {{BLANK}} bus moved into the picture just as she pressed the button, so part of the image is not clear.",
    "cn": "A：為什麼報紙上我們新店的照片左邊有點模糊？ B：攝影師是在尖峰時段繁忙的十字路口拍的，就在她按下快門時，一輛【經過的】公車開進了畫面，所以影像有一部分不清楚。"
  },
  {
    "word": "enlarge",
    "pos": "v.",
    "cn_def": "放大；擴大",
    "en_def": "to make something bigger",
    "sentence": "A: The group photo from the sales conference looks great, but it is too small to hang on the wall in the reception area, isn't it? B: You're right, so I'll ask the print shop downtown to {{BLANK}} it to poster size and put it in a wooden frame before our clients visit on Thursday.",
    "cn": "A：業務大會的團體照看起來很棒，但要掛在接待區的牆上太小了，對吧？ B：你說得對，所以我會請市中心的印刷店把它【放大】成海報尺寸，並在客戶星期四來訪前裝進木頭相框。"
  },
  {
    "word": "trim",
    "pos": "v.",
    "cn_def": "修剪；裁切",
    "en_def": "to cut a small amount off something to make it neat",
    "sentence": "A: The photo of our CEO for the annual report has too much empty sky above his head, so what do you suggest? B: We can {{BLANK}} the top part of the picture with the editing software, so that his face is closer to the center and the page looks more balanced.",
    "cn": "A：年報上執行長的照片頭頂上方有太多空白的天空，你有什麼建議？ B：我們可以用修圖軟體把照片上方【裁掉】一些，讓他的臉更靠近中間，頁面看起來也更平衡。"
  },
  {
    "word": "edge",
    "pos": "n.",
    "cn_def": "邊緣",
    "en_def": "the outer part or line of something",
    "sentence": "A: When I printed the brochure this morning, why was part of the manager's name missing from the bottom of the photo? B: The designer placed the name too close to the {{BLANK}} of the page, so the printer cut it off, and we need to move the text up a little before printing again.",
    "cn": "A：今天早上我印手冊時，為什麼照片下方經理的名字少了一部分？ B：設計師把名字放得太靠近頁面的【邊緣】，所以印表機把它切掉了，我們得先把文字往上移一點再重新列印。"
  },
  {
    "word": "breathtaking",
    "pos": "adj.",
    "cn_def": "令人嘆為觀止的；令人屏息的",
    "en_def": "extremely beautiful or exciting",
    "sentence": "A: Why did the tourism board choose that mountain photo for the cover of their new travel brochure? B: The picture shows a {{BLANK}} sunrise over the sea of clouds, and they believe it will make visitors want to book a trip to the area right away.",
    "cn": "A：觀光局為什麼選那張山景照片當新旅遊手冊的封面？ B：那張照片呈現了雲海上方【令人嘆為觀止的】日出，他們相信這會讓遊客想馬上預訂去那個地區的旅程。"
  },
  {
    "word": "depict",
    "pos": "v.",
    "cn_def": "描繪；描述",
    "en_def": "to show something in a picture or story",
    "sentence": "A: What kind of photos does the museum want for the exhibition about the history of our city's harbor? B: They want pictures that {{BLANK}} the daily life of the workers in the 1960s, such as fishermen repairing nets and families selling seafood at the busy morning market.",
    "cn": "A：博物館想要什麼樣的照片來辦我們城市港口歷史展？ B：他們想要能【描繪】1960年代工人日常生活的照片，例如漁夫修補漁網，以及家庭在熱鬧早市上賣海鮮的景象。"
  },
  {
    "word": "masterpiece",
    "pos": "n.",
    "cn_def": "傑作",
    "en_def": "an excellent piece of art; someone's best work",
    "sentence": "A: Have you seen the famous photo of the old fisherman that the hotel just hung in its main lobby? B: Yes, and many experts call it a {{BLANK}}, because the photographer waited three days on the beach for the perfect light before he finally took the picture.",
    "cn": "A：你看過飯店剛掛在大廳的那張著名老漁夫照片嗎？ B：看過，很多專家稱它為【傑作】，因為攝影師在海灘上等了三天，等到最完美的光線才終於拍下那張照片。"
  },
  {
    "word": "replicate",
    "pos": "v.",
    "cn_def": "複製；重現",
    "en_def": "to copy or repeat something exactly",
    "sentence": "A: The customers loved the bright, warm look of the product photos in our spring catalog, so can we use the same style for the summer one? B: Yes, but to {{BLANK}} that look, we will need to rent the same studio, use the same lights, and hire the same photographer again.",
    "cn": "A：顧客很喜歡我們春季型錄裡產品照明亮溫暖的風格，夏季型錄可以用同樣的風格嗎？ B：可以，但要【重現】那種風格，我們需要租同一間攝影棚、使用同樣的燈光，並再次請同一位攝影師。"
  },
  {
    "word": "straightforward",
    "pos": "adj.",
    "cn_def": "簡單的；直截了當的",
    "en_def": "easy to understand or do; simple",
    "sentence": "A: Is it hard to upload my profile photo to the new company directory, because I'm not very good with computers? B: Don't worry, the process is quite {{BLANK}}, since you just click the camera icon, choose a picture from your files, and press save.",
    "cn": "A：要把我的大頭照上傳到公司新的通訊錄很難嗎？因為我不太會用電腦。 B：別擔心，流程相當【簡單】，你只要點相機圖示，從檔案中選一張照片，然後按儲存就好。"
  },
  {
    "word": "fathom",
    "pos": "v.",
    "cn_def": "理解；弄懂",
    "en_def": "to understand something that is difficult or strange",
    "sentence": "A: Why does the client keep rejecting the photos for the new advertisement, even after we changed the lighting and the models three times? B: I still can't {{BLANK}} what they want, so I think we should arrange a video call and ask them to show us some examples they like.",
    "cn": "A：為什麼客戶一直退回新廣告的照片，即使我們已經換了三次燈光和模特兒？ B：我還是無法【理解】他們想要什麼，所以我認為我們應該安排一次視訊會議，請他們給我們看一些他們喜歡的範例。"
  }
];

const MCQS = [
  {
    "q": "The museum keeps old letters in a cool, dark room. This helps _____ the paper so that it does not turn yellow or fall apart.",
    "options": [
      "preserve",
      "assume",
      "obsess",
      "fathom"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The two firms signed an agreement in Singapore last week. They plan to _____ a joint office in Taipei before the end of the year.",
    "options": [
      "depict",
      "fathom",
      "establish",
      "cherish"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "To keep the survey fair, the computer _____ chose two hundred customers from our database. Each of them received a short questionnaire by email.",
    "options": [
      "virtually",
      "randomly",
      "nervously",
      "generously"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Some new managers _____ over every small mistake their staff make. This habit can make employees nervous and less creative at work.",
    "options": [
      "enlarge",
      "replicate",
      "preserve",
      "obsess"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The architect asked the photographer to shoot the tower from a low _____. This made the building look even taller and more impressive.",
    "options": [
      "album",
      "gallery",
      "angle",
      "masterpiece"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please clean up the kitchen after the team lunch. It was so _____ yesterday that the cleaner complained to the office manager.",
    "options": [
      "messy",
      "ultimate",
      "passing",
      "straightforward"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The finance director cut several _____ costs from the budget. For example, the team will no longer pay for printed copies of every report.",
    "options": [
      "spacious",
      "breathtaking",
      "messy",
      "unnecessary"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our fax machines became _____ after the company switched to digital contracts. They will be removed from the office next week.",
    "options": [
      "spacious",
      "obsolete",
      "ultimate",
      "breathtaking"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "After the wedding, the couple received a beautiful photo _____ from their friends. It contained more than one hundred pictures from the ceremony.",
    "options": [
      "album",
      "angle",
      "edge",
      "masterpiece"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The security camera at the entrance can _____ clear images of every visitor. It records both day and night.",
    "options": [
      "cherish",
      "fathom",
      "capture",
      "obsess"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please do not _____ that every customer reads the instructions carefully. Our guide should explain each step in simple language with pictures.",
    "options": [
      "enlarge",
      "assume",
      "trim",
      "preserve"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new art _____ downtown will show paintings by local artists. It opens to the public next Saturday with free entry for everyone.",
    "options": [
      "album",
      "angle",
      "edge",
      "gallery"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many retired workers _____ the friendships they made during their years at the factory. They still meet for dinner every month.",
    "options": [
      "replicate",
      "enlarge",
      "cherish",
      "trim"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The new software update fixed _____ every problem that users had reported. Only one small error with printing still needs attention.",
    "options": [
      "virtually",
      "randomly",
      "rudely",
      "loudly"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The company moved to a more _____ office on the tenth floor. Now every employee has a large desk and there are three meeting rooms.",
    "options": [
      "obsolete",
      "unnecessary",
      "passing",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our team has many small targets this quarter. However, the _____ aim is to double online sales by the end of next year.",
    "options": [
      "messy",
      "ultimate",
      "obsolete",
      "passing"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The board hired a painter to create a _____ of the company founder. It now hangs in the main hallway beside the elevators.",
    "options": [
      "portrait",
      "angle",
      "edge",
      "album"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Grandparents often _____ the handmade cards their grandchildren give them. They keep these cards in a special box for many years.",
    "options": [
      "assume",
      "fathom",
      "treasure",
      "enlarge"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The fireworks show over the river was truly _____. Thousands of people stopped to watch and take photos with their phones.",
    "options": [
      "unnecessary",
      "spectacular",
      "obsolete",
      "straightforward"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The driver honked at a _____ cyclist who rode too close to the truck. Luckily, nobody was hurt and traffic kept moving.",
    "options": [
      "spacious",
      "obsolete",
      "ultimate",
      "passing"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The text on this map is too small to read easily. Could you _____ it on the copy machine before the meeting starts?",
    "options": [
      "cherish",
      "depict",
      "enlarge",
      "obsess"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The banner is a little too long for the stage. We need to _____ about ten centimeters from each end before the event.",
    "options": [
      "trim",
      "assume",
      "depict",
      "preserve"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please don't put your coffee cup so close to the _____ of the desk. It could easily fall and spill on the new carpet.",
    "options": [
      "album",
      "portrait",
      "masterpiece",
      "edge"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "From the top of the mountain, hikers can enjoy a _____ view of the coastline. Many visitors say it is the highlight of their trip.",
    "options": [
      "unnecessary",
      "breathtaking",
      "messy",
      "obsolete"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The museum's new mural will _____ the history of the town's tea farms. Local artists have been painting it since early spring.",
    "options": [
      "depict",
      "fathom",
      "assume",
      "obsess"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Critics agree that the director's latest film is a _____. It has already won several international awards for its story and photography.",
    "options": [
      "album",
      "edge",
      "masterpiece",
      "angle"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Other bakeries have tried to _____ our famous pineapple cake recipe. However, none of them has been able to match its flavor.",
    "options": [
      "cherish",
      "replicate",
      "fathom",
      "enlarge"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The refund process on our website is quite _____. Customers simply enter their order number and choose a reason from the list.",
    "options": [
      "spectacular",
      "obsolete",
      "spacious",
      "straightforward"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The engineers could not _____ why the machine kept stopping every hour. They finally called the manufacturer for technical support.",
    "options": [
      "cherish",
      "enlarge",
      "fathom",
      "preserve"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The photographer arrived early to _____ the sunrise over the harbor. Her pictures will appear on the cover of the city's tourism guide.",
    "options": [
      "capture",
      "assume",
      "obsess",
      "establish"
    ],
    "answer": 0,
    "vocabIndex": 9
  }
];

const LOOKUP = {
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in good condition or stop it from being damaged",
    "cn_def": "保存；保護"
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start or create something such as a company, system, or rule",
    "cn_def": "建立；設立"
  },
  "randomly": {
    "pos": "adv.",
    "en_def": "by chance, without any plan or pattern",
    "cn_def": "隨機地；任意地"
  },
  "obsess": {
    "pos": "v.",
    "en_def": "to think about something too much, so you cannot stop",
    "cn_def": "過度在意；著迷"
  },
  "angle": {
    "pos": "n.",
    "en_def": "the position or direction from which you look at or photograph something",
    "cn_def": "角度"
  },
  "messy": {
    "pos": "adj.",
    "en_def": "dirty or untidy",
    "cn_def": "凌亂的；髒亂的"
  },
  "unnecessary": {
    "pos": "adj.",
    "en_def": "not needed",
    "cn_def": "不必要的"
  },
  "obsolete": {
    "pos": "adj.",
    "en_def": "no longer used because something newer and better exists",
    "cn_def": "過時的；淘汰的"
  },
  "album": {
    "pos": "n.",
    "en_def": "a book or online folder for keeping photos",
    "cn_def": "相簿"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to record something in a photo or film",
    "cn_def": "捕捉；拍下"
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think something is true without checking",
    "cn_def": "假定；以為"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art or photos are shown",
    "cn_def": "畫廊；美術館"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love something and care about it very much",
    "cn_def": "珍惜；珍愛"
  },
  "virtually": {
    "pos": "adv.",
    "en_def": "almost completely",
    "cn_def": "幾乎；實際上"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "large, with plenty of room",
    "cn_def": "寬敞的"
  },
  "ultimate": {
    "pos": "adj.",
    "en_def": "final and most important",
    "cn_def": "最終的；終極的"
  },
  "portrait": {
    "pos": "n.",
    "en_def": "a painting or photo of a person, especially the face",
    "cn_def": "肖像；人像照"
  },
  "treasure": {
    "pos": "v.",
    "en_def": "to value something very much and keep it carefully",
    "cn_def": "珍視；珍藏"
  },
  "spectacular": {
    "pos": "adj.",
    "en_def": "very impressive and exciting to see",
    "cn_def": "壯觀的；精彩的"
  },
  "passing": {
    "pos": "adj.",
    "en_def": "going past a place; lasting only a short time",
    "cn_def": "經過的；短暫的"
  },
  "enlarge": {
    "pos": "v.",
    "en_def": "to make something bigger",
    "cn_def": "放大；擴大"
  },
  "trim": {
    "pos": "v.",
    "en_def": "to cut a small amount off something to make it neat",
    "cn_def": "修剪；裁切"
  },
  "edge": {
    "pos": "n.",
    "en_def": "the outer part or line of something",
    "cn_def": "邊緣"
  },
  "breathtaking": {
    "pos": "adj.",
    "en_def": "extremely beautiful or exciting",
    "cn_def": "令人嘆為觀止的；令人屏息的"
  },
  "depict": {
    "pos": "v.",
    "en_def": "to show something in a picture or story",
    "cn_def": "描繪；描述"
  },
  "masterpiece": {
    "pos": "n.",
    "en_def": "an excellent piece of art; someone's best work",
    "cn_def": "傑作"
  },
  "replicate": {
    "pos": "v.",
    "en_def": "to copy or repeat something exactly",
    "cn_def": "複製；重現"
  },
  "straightforward": {
    "pos": "adj.",
    "en_def": "easy to understand or do; simple",
    "cn_def": "簡單的；直截了當的"
  },
  "fathom": {
    "pos": "v.",
    "en_def": "to understand something that is difficult or strange",
    "cn_def": "理解；弄懂"
  }
};

const EXTRA_GLOSSES = {};
