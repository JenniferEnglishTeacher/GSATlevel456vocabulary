// Topic 111 Quiz Data: Drawing 繪畫
// Source word list: https://www.examword.com/group-topic/drawing — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T111 - Drawing 繪畫",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "插圖；圖解",
    "en_def": "a picture drawn for a book, magazine or advertisement",
    "sentence": "A: The publisher wants the cover of the new children's cookbook finished by the end of the month, but our designer is still on vacation. B: Don't worry, I have already contacted a freelance artist who can draw a colorful {{BLANK}} of a family cooking together, and she promised to send us the first sketch by Friday.",
    "cn": "A：出版社希望新的兒童食譜封面在月底前完成，但我們的設計師還在休假。 B：別擔心，我已經聯絡了一位自由接案的畫家，她可以畫一幅一家人一起做飯的彩色【插圖】，而且她答應星期五前把第一版草圖寄給我們。"
  },
  {
    "word": "portrait",
    "pos": "n.",
    "cn_def": "肖像；畫像",
    "en_def": "a painting, drawing or photo of a person, especially the face",
    "sentence": "A: The bank is celebrating its fiftieth anniversary next month, and the board would like to give the retiring chairman a special gift. B: How about hiring a local artist to draw a {{BLANK}} of him in his office? We could hang it in the main lobby so that customers and staff can remember everything he did for the company.",
    "cn": "A：銀行下個月要慶祝成立五十週年，董事會想送即將退休的董事長一份特別的禮物。 B：請一位當地畫家畫一幅他在辦公室裡的【肖像】如何？我們可以把它掛在大廳，讓顧客和員工記得他為公司所做的一切。"
  },
  {
    "word": "cartoon",
    "pos": "n.",
    "cn_def": "漫畫；卡通",
    "en_def": "a funny drawing, often in a newspaper or magazine",
    "sentence": "A: Our monthly newsletter is full of long reports about sales figures, and I'm afraid most employees stop reading after the first page. B: Why don't we add a small {{BLANK}} on the back page each month? If it shows a funny moment from office life, people will look forward to the next issue and may read the other articles too.",
    "cn": "A：我們的月刊裡全是關於銷售數字的冗長報告，我擔心大部分員工讀完第一頁就不看了。 B：我們何不每個月在封底加一則小【漫畫】？如果它呈現辦公室生活中的有趣時刻，大家就會期待下一期，或許也會讀其他文章。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "色調；（顏色的）深淺",
    "en_def": "a particular darkness or lightness of a color",
    "sentence": "A: The client said the blue in our new logo looks too bright on the website, and she wants something that feels calmer and more professional. B: I understand, so I'll try a darker {{BLANK}} of blue this afternoon and send her three different versions, because it is easier for clients to choose when they can compare them side by side.",
    "cn": "A：客戶說我們新標誌的藍色在網站上看起來太亮了，她想要感覺更沉穩、更專業的顏色。 B：我明白，所以我今天下午會試一種較深的藍色【色調】，並寄給她三個不同的版本，因為客戶能並排比較時比較容易做選擇。"
  },
  {
    "word": "shading",
    "pos": "n.",
    "cn_def": "（繪畫的）明暗處理；陰影",
    "en_def": "the use of darker marks in a drawing to show shadow or depth",
    "sentence": "A: I drew this coffee cup for the café's new menu, but my manager says it still looks flat and a little boring. B: You should add some {{BLANK}} on the right side, where the light doesn't reach, because darker areas will make the cup look round and give the whole picture a more realistic feeling.",
    "cn": "A：我為咖啡館的新菜單畫了這個咖啡杯，但我的經理說它看起來還是很平面，有點無趣。 B：你應該在光線照不到的右側加一些【明暗陰影】，因為較暗的區域會讓杯子看起來是圓的，讓整張圖更有真實感。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "線；線條",
    "en_def": "a long thin mark made with a pen or pencil",
    "sentence": "A: The new trainees in our design department keep asking how they can improve their sketches of buildings and furniture quickly. B: Tell them to practice drawing a straight {{BLANK}} without a ruler for ten minutes every morning, since steady hands are the base of every good sketch, and they will notice a big difference after a few weeks.",
    "cn": "A：我們設計部門的新進受訓人員一直問要怎麼快速改善他們的建築和家具素描。 B：叫他們每天早上花十分鐘練習不用尺畫直【線】，因為穩定的手是每張好素描的基礎，幾週後他們就會發現很大的差別。"
  },
  {
    "word": "stroke",
    "pos": "n.",
    "cn_def": "一筆；筆畫",
    "en_def": "a single movement of a pen or brush, or the mark it makes",
    "sentence": "A: The calligraphy teacher at the community center said my characters look messy, but I'm not sure what I'm doing wrong. B: She probably means you are moving the brush too quickly, so try to finish each {{BLANK}} slowly and with the same pressure, and remember to let the ink dry before you start the next character.",
    "cn": "A：社區中心的書法老師說我的字看起來很亂，但我不確定自己哪裡做錯了。 B：她大概是指你運筆太快了，所以試著慢慢地用相同的力道完成每一【筆】，而且記得在寫下一個字之前讓墨水乾掉。"
  },
  {
    "word": "contour",
    "pos": "n.",
    "cn_def": "輪廓；外形",
    "en_def": "the outer edge or shape of something",
    "sentence": "A: The architecture firm asked us to make a simple map for the new hiking trail, but they don't need every small feature of the area. B: Then we should only draw the {{BLANK}} of the hills and the river, because visitors mainly want to see the shape of the land and the easiest path to the top.",
    "cn": "A：建築事務所請我們為新的健行步道製作一張簡單的地圖，但他們不需要該區域的每個小地物。 B：那我們就只畫山丘和河流的【輪廓】，因為遊客主要是想看地形的樣子以及通往山頂最容易的路線。"
  },
  {
    "word": "composition",
    "pos": "n.",
    "cn_def": "構圖；（畫面的）布局",
    "en_def": "the way the parts of a picture are arranged",
    "sentence": "A: The photo of our new office building for the annual report looks nice, but something about it feels unbalanced to me. B: I agree, because the building is right in the corner while the empty sky takes up most of the space, so let's improve the {{BLANK}} by moving the building closer to the center of the picture.",
    "cn": "A：年報裡我們新辦公大樓的照片看起來不錯，但我覺得有點不平衡。 B：我同意，因為大樓擠在角落，而空蕩蕩的天空卻佔了大部分空間，所以我們把大樓移到靠近畫面中央的地方來改善【構圖】吧。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "透視法",
    "en_def": "a way of drawing that makes things look near or far, as in real life",
    "sentence": "A: The drawings of the new shopping mall look strange, because the people in the back are as large as the people in the front. B: That's because the junior designer hasn't learned to use {{BLANK}} correctly yet, so I'll show him how objects should become smaller as they get farther away, which will make the space look much deeper.",
    "cn": "A：新購物中心的圖看起來很奇怪，因為後面的人和前面的人一樣大。 B：那是因為那位初級設計師還沒學會正確運用【透視法】，所以我會教他物體離得越遠應該畫得越小，這樣空間看起來就會更有深度。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "the correct size of one part compared with another",
    "sentence": "A: Our art teacher says the hands in my portrait drawing are too big, but I measured everything carefully before I started. B: Maybe you measured each part on its own, so try comparing the size of the hand with the face, because getting the {{BLANK}} right is more important than drawing every small wrinkle or fingernail.",
    "cn": "A：我們的美術老師說我畫的人像裡手太大了，但我開始畫之前每個地方都仔細量過了。 B：也許你是把每個部位分開量的，試著把手的大小和臉做比較，因為把【比例】畫對比畫出每一條小皺紋或指甲更重要。"
  },
  {
    "word": "detail",
    "pos": "n.",
    "cn_def": "細節",
    "en_def": "a small part or fact of something",
    "sentence": "A: The marketing team loved the first draft of the poster, but they asked whether we could make the product look more attractive. B: Sure, I'll add more {{BLANK}} to the watch in the center, such as the tiny numbers and the silver buttons on the side, so customers can see how carefully it was made.",
    "cn": "A：行銷團隊很喜歡海報的初稿，但他們問我們能不能讓產品看起來更吸引人。 B：當然，我會為中間的手錶加上更多【細節】，像是細小的數字和側面的銀色按鈕，讓顧客能看出它做工有多精細。"
  },
  {
    "word": "texture",
    "pos": "n.",
    "cn_def": "質地；紋理",
    "en_def": "the way a surface feels or looks, such as rough or smooth",
    "sentence": "A: The furniture company wants our drawings of their new wooden tables to look as real as possible in the online catalog. B: In that case, I'll use soft pencils to show the {{BLANK}} of the wood, including the natural patterns and small marks, so that customers can almost feel the surface just by looking at the picture.",
    "cn": "A：家具公司希望我們為他們新木桌畫的圖在線上型錄裡看起來越真實越好。 B：這樣的話，我會用軟鉛筆表現木頭的【紋理】，包括天然的花紋和細小的痕跡，讓顧客光看圖片就幾乎能感覺到桌面的觸感。"
  },
  {
    "word": "medium",
    "pos": "n.",
    "cn_def": "（藝術創作的）媒材",
    "en_def": "the material an artist uses, such as paint or pencil",
    "sentence": "A: I'm signing up for the evening art class at the community college, but I can't decide between the painting course and the drawing course. B: If you are a beginner, I suggest you start with pencil, because it is a cheap and simple {{BLANK}}, and you can easily fix your mistakes while you are still learning the basics.",
    "cn": "A：我要報名社區大學的晚間美術課，但我無法決定要選繪畫課還是素描課。 B：如果你是初學者，我建議你從鉛筆開始，因為它是便宜又簡單的【媒材】，而且你在學基礎時可以輕易修正錯誤。"
  },
  {
    "word": "pencil",
    "pos": "n.",
    "cn_def": "鉛筆",
    "en_def": "a thin tool with a gray or colored center, used for writing or drawing",
    "sentence": "A: Our office supplies order is due tomorrow, and the architects on the third floor have asked for something new for their early sketches. B: Then please order a good mechanical {{BLANK}} for each of them, along with extra leads and erasers, because they like to sketch their ideas quickly by hand before they move to the computer.",
    "cn": "A：我們的辦公用品訂單明天截止，三樓的建築師們要求為他們的初步草圖準備一些新東西。 B：那就請幫他們每人訂一支好的自動【鉛筆】，再加上額外的筆芯和橡皮擦，因為他們喜歡在用電腦之前先快速手繪構想。"
  },
  {
    "word": "charcoal",
    "pos": "n.",
    "cn_def": "炭筆；木炭",
    "en_def": "a black stick of burned wood used for drawing",
    "sentence": "A: The art class tomorrow is about drawing faces, and the teacher told us to bring something that makes very dark, soft marks. B: Then you should buy a stick of {{BLANK}} at the art shop near the station, but remember to bring some wet tissues too, because it will easily make your hands and clothes black.",
    "cn": "A：明天的美術課是畫臉部，老師叫我們帶可以畫出很深、很柔和痕跡的東西。 B：那你應該去車站附近的美術用品店買一根【炭筆】，但記得也要帶些濕紙巾，因為它很容易把你的手和衣服弄黑。"
  },
  {
    "word": "ink",
    "pos": "n.",
    "cn_def": "墨水；油墨",
    "en_def": "a colored liquid used for writing, drawing or printing",
    "sentence": "A: The printer in the design studio keeps producing pale, gray pages, and we have to send the final brochure to the client this afternoon. B: It's probably running out of black {{BLANK}}, so I'll replace the cartridge right away, and if that doesn't work, we can print the brochure at the copy shop across the street.",
    "cn": "A：設計工作室的印表機一直印出淡淡的灰色頁面，而我們今天下午必須把最終版手冊寄給客戶。 B：它大概是黑色【墨水】快用完了，所以我馬上換匣，如果那樣還不行，我們可以到對街的影印店印手冊。"
  },
  {
    "word": "marker",
    "pos": "n.",
    "cn_def": "麥克筆；記號筆",
    "en_def": "a pen with a thick tip, used for writing on boards or drawing",
    "sentence": "A: During tomorrow's brainstorming meeting, I want everyone to write their ideas on the whiteboard so the whole team can see them. B: Good idea, but most of the pens in the meeting room have dried up, so I'll bring a new {{BLANK}} in each color from the supply cabinet before the meeting starts at nine.",
    "cn": "A：明天的腦力激盪會議上，我希望每個人都把點子寫在白板上，讓整個團隊都看得到。 B：好主意，但會議室裡大部分的筆都乾掉了，所以我會在九點開會前從用品櫃拿每種顏色各一支新的【麥克筆】過來。"
  },
  {
    "word": "brush",
    "pos": "n.",
    "cn_def": "畫筆；刷子",
    "en_def": "a tool with hairs on a handle, used for painting",
    "sentence": "A: My watercolor paintings always look messy at the edges, even though I buy expensive paints from the art store. B: The paint may not be the problem, so try using a smaller {{BLANK}} with soft hair for the edges, because a thin tip gives you much better control when you are painting small areas.",
    "cn": "A：我的水彩畫邊緣看起來總是很亂，雖然我都在美術用品店買昂貴的顏料。 B：問題可能不在顏料，所以畫邊緣時試著用一支軟毛的小【畫筆】，因為細的筆尖在畫小區域時能讓你控制得好得多。"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "cn_def": "畫布",
    "en_def": "strong cloth that artists paint on",
    "sentence": "A: The hotel manager wants a large painting of the harbor for the wall behind the reception desk, about two meters wide. B: Then I'll need to order a special {{BLANK}} from the art supplier, because the ones they keep in the store are too small, and it may take a week to arrive.",
    "cn": "A：飯店經理想在櫃台後面的牆上掛一幅大約兩公尺寬的港口大畫。 B：那我需要向美術用品供應商訂購一塊特製的【畫布】，因為他們店裡的太小了，而且可能要一週才會到貨。"
  },
  {
    "word": "paper",
    "pos": "n.",
    "cn_def": "紙；紙張",
    "en_def": "thin material made from wood, used for writing, drawing or printing",
    "sentence": "A: The students in the Saturday drawing class complained that their pencil sketches look gray and dirty after only a few minutes. B: That's because the cheap {{BLANK}} we bought is too smooth and thin, so next month I'll order a thicker kind that is made for drawing and can hold the pencil marks better.",
    "cn": "A：星期六素描班的學生抱怨他們的鉛筆素描才幾分鐘就看起來灰灰髒髒的。 B：那是因為我們買的便宜【紙張】太光滑又太薄，所以下個月我會訂一種專門用來畫圖、較厚而且更能留住鉛筆痕跡的款式。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的；準確的",
    "en_def": "exact and correct in every small part",
    "sentence": "A: The engineers need the drawings of the new machine part by Monday, and they said even a small mistake could cause problems in the factory. B: In that case, we must use a computer program instead of drawing by hand, because the measurements have to be {{BLANK}} down to the last millimeter, and the software can check them for us.",
    "cn": "A：工程師們星期一前需要新機械零件的圖，他們說即使是小錯誤也可能在工廠造成問題。 B：這樣的話，我們必須用電腦程式而不是手繪，因為尺寸必須【精確】到最後一毫米，而且軟體可以幫我們檢查。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "粗略的；草擬的",
    "en_def": "not finished or exact; done quickly as a first try",
    "sentence": "A: The client wants to see our ideas for the new restaurant sign tomorrow morning, but we haven't finished any of the final designs yet. B: That's fine, because at this stage we only need to show her a few {{BLANK}} sketches, and once she chooses the one she likes, we can spend next week adding color and other finishing touches.",
    "cn": "A：客戶明天早上想看我們對新餐廳招牌的構想，但我們還沒完成任何最終設計。 B：沒關係，因為這個階段我們只需要給她看幾張【粗略的】草圖，等她選出喜歡的那一張，我們下週再花時間上色並做其他最後的修飾。"
  },
  {
    "word": "realistic",
    "pos": "adj.",
    "cn_def": "寫實的；逼真的",
    "en_def": "showing things as they really are",
    "sentence": "A: The real estate agency wants pictures of the apartments before they are built, so buyers can imagine living there. B: Then we'll create very {{BLANK}} drawings with sunlight coming through the windows and furniture in every room, because buyers are more likely to sign a contract when the home looks like a real place.",
    "cn": "A：房地產仲介希望在公寓蓋好之前就有圖片，讓買家能想像住在那裡的樣子。 B：那我們就畫非常【寫實的】圖，畫出陽光從窗戶照進來、每個房間都擺好家具，因為當房子看起來像真實的地方時，買家比較可能簽約。"
  },
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "using shapes and colors instead of showing real people or things",
    "sentence": "A: The new lobby looks a bit empty, and the CEO asked me to find some art that won't distract visitors or feel too old-fashioned. B: How about a few {{BLANK}} paintings with simple shapes and soft colors? They feel modern and calm, and since they don't show any particular people or places, they suit almost any business.",
    "cn": "A：新大廳看起來有點空，執行長要我找一些不會讓訪客分心、也不會顯得太老派的藝術品。 B：幾幅有簡單形狀和柔和色彩的【抽象】畫如何？它們感覺現代又沉穩，而且因為沒有描繪特定的人或地方，幾乎適合任何企業。"
  },
  {
    "word": "artistic",
    "pos": "adj.",
    "cn_def": "有藝術天分的；藝術的",
    "en_def": "having or showing skill in art",
    "sentence": "A: We're looking for someone to design the store's window displays for the holiday season, but nobody on the sales team has any experience. B: Actually, Mia in accounting is very {{BLANK}}, and she spends her weekends painting and taking photos, so why don't we ask her to share a few ideas at Thursday's meeting?",
    "cn": "A：我們在找人設計店裡節慶季節的櫥窗陳列，但業務團隊裡沒有人有經驗。 B：其實會計部的米亞很有【藝術天分】，她週末都在畫畫和拍照，我們何不請她在星期四的會議上分享一些想法？"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；有創造力的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Our advertisements for the new juice brand look almost the same as our competitors', and sales have been slow since the launch. B: We need a more {{BLANK}} approach, so let's invite a few young designers to a workshop next week and let them try some unusual ideas, such as drawing the fruit as cartoon characters.",
    "cn": "A：我們新果汁品牌的廣告看起來和競爭對手的幾乎一樣，而且上市以來銷售一直很慢。 B：我們需要更【有創意的】做法，所以下週邀請幾位年輕設計師來參加工作坊，讓他們嘗試一些不尋常的點子，例如把水果畫成卡通人物。"
  },
  {
    "word": "render",
    "pos": "v.",
    "cn_def": "描繪；（用電腦）繪製呈現",
    "en_def": "to draw or show something in a particular way, often using a computer",
    "sentence": "A: The architects need images of the new library for the city council meeting, and they want people to see how it will look at night. B: Our team can {{BLANK}} the building with its lights on and a dark blue sky behind it, but the computer will need several hours to finish each image, so please give us until Thursday.",
    "cn": "A：建築師們需要新圖書館的圖像給市議會開會用，他們想讓大家看到它晚上的樣子。 B：我們團隊可以把建築【繪製呈現】成燈火通明、背景是深藍夜空的樣子，但電腦完成每張圖需要好幾個小時，所以請給我們到星期四的時間。"
  },
  {
    "word": "trace",
    "pos": "v.",
    "cn_def": "描摹；描繪",
    "en_def": "to copy a picture by drawing over its lines through thin paper",
    "sentence": "A: The children at our summer art camp find it very hard to draw animals, and some of them get upset and want to give up. B: Let them {{BLANK}} simple pictures from a book first by placing thin sheets over the page, because copying the outlines helps them learn the shapes, and later they can try drawing on their own.",
    "cn": "A：我們暑期美術營的孩子們覺得畫動物很難，有些人會沮喪想放棄。 B：先讓他們把薄紙放在書頁上【描摹】簡單的圖，因為描出輪廓能幫助他們學會形狀，之後他們就能試著自己畫。"
  },
  {
    "word": "erase",
    "pos": "v.",
    "cn_def": "擦掉；抹去",
    "en_def": "to remove marks, especially pencil marks",
    "sentence": "A: I made a mistake on the floor plan I drew for the client, and the meeting starts in less than twenty minutes. B: Don't panic, because you drew it in pencil, so you can simply {{BLANK}} the wrong wall with a soft rubber and draw it again in the right place before she arrives.",
    "cn": "A：我為客戶畫的平面圖出錯了，而會議不到二十分鐘就要開始。 B：別慌，因為你是用鉛筆畫的，所以你只要用軟橡皮擦把畫錯的牆【擦掉】，在她到之前重新畫在正確的位置就好。"
  }
];

const MCQS = [
  {
    "q": "The children's book contains a colorful _____ on every page. The artist spent two years finishing all of the pictures.",
    "options": [
      "canvas",
      "contour",
      "marker",
      "illustration"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The company hired a painter to create a _____ of its founder. It now hangs in the main hallway near the elevators.",
    "options": [
      "portrait",
      "texture",
      "stroke",
      "medium"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Every Sunday, the newspaper prints a funny _____ about office life. Many readers say it is the first thing they look at.",
    "options": [
      "canvas",
      "contour",
      "cartoon",
      "proportion"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The designer chose a lighter _____ of green for the company's new uniforms. The staff agreed it looked fresher than the old color.",
    "options": [
      "stroke",
      "shade",
      "contour",
      "canvas"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Without any _____, the drawing of the apple looked completely flat. The teacher showed the students how to add darker areas.",
    "options": [
      "canvas",
      "portrait",
      "shading",
      "marker"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Please sign your name on the dotted _____ at the bottom of the form. Then return it to the front desk.",
    "options": [
      "line",
      "stroke",
      "brush",
      "canvas"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The famous artist painted the bird with a single _____ of her brush. Visitors at the gallery were amazed by her skill.",
    "options": [
      "contour",
      "stroke",
      "paper",
      "texture"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The hiking map shows the _____ of the mountains with thin brown lines. Hikers can use it to see how steep the trail is.",
    "options": [
      "portrait",
      "cartoon",
      "marker",
      "contour"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The judges praised the photo for its excellent _____. Every object was placed in exactly the right part of the frame.",
    "options": [
      "composition",
      "charcoal",
      "pencil",
      "ink"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The architect used _____ to make the hallway in the drawing look very long. The far end appears much smaller than the front.",
    "options": [
      "charcoal",
      "canvas",
      "cartoon",
      "perspective"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The head in your drawing is too large compared with the body. Try to keep everything in _____ next time.",
    "options": [
      "texture",
      "illustration",
      "proportion",
      "medium"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The jeweler checked every small _____ of the ring before it was shipped. The customer had paid a lot for the special design.",
    "options": [
      "canvas",
      "detail",
      "brush",
      "cartoon"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "This fabric has a soft, smooth _____ that customers love. It is used in all of our most popular sofas.",
    "options": [
      "texture",
      "perspective",
      "portrait",
      "stroke"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Watercolor is the artist's favorite _____ because it dries quickly. She also enjoys working with colored pencils on weekends.",
    "options": [
      "contour",
      "cartoon",
      "medium",
      "proportion"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Please bring a soft _____ to the drawing test so you can fix mistakes easily. Pens are not allowed in the exam room.",
    "options": [
      "ink",
      "canvas",
      "composition",
      "pencil"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The artist drew the sketch with a stick of black _____. Her fingers were covered in dark dust by the end of the class.",
    "options": [
      "paper",
      "charcoal",
      "canvas",
      "texture"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The office printer has run out of black _____ again. Please order three new cartridges from the supplier today.",
    "options": [
      "canvas",
      "charcoal",
      "ink",
      "paper"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The whiteboard _____ in the meeting room has dried up. Could you bring a new one from the supply cabinet?",
    "options": [
      "canvas",
      "marker",
      "charcoal",
      "portrait"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Clean your paint _____ with warm water after each class. If the paint dries on the hairs, it will be hard to use again.",
    "options": [
      "brush",
      "canvas",
      "pencil",
      "marker"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The painter stretched a large piece of _____ over a wooden frame. She plans to paint a view of the harbor on it.",
    "options": [
      "charcoal",
      "ink",
      "pencil",
      "canvas"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Our department uses too much _____ for printing reports. From next month, all documents should be shared by email instead.",
    "options": [
      "canvas",
      "charcoal",
      "paper",
      "brush"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The engineer's drawings must be very _____ because the parts are tiny. Even a small mistake could cause the machine to fail.",
    "options": [
      "rough",
      "precise",
      "abstract",
      "artistic"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "This is only a _____ sketch of the new logo. We will add the colors and final details after the client approves it.",
    "options": [
      "rough",
      "precise",
      "realistic",
      "artistic"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The fruit in the painting looks so _____ that people want to pick it up. The artist spent months on every small detail.",
    "options": [
      "abstract",
      "rough",
      "creative",
      "realistic"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The gallery's new show features _____ art made of simple shapes and bright colors. None of the paintings show real people or places.",
    "options": [
      "abstract",
      "realistic",
      "precise",
      "rough"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Ken has always been very _____ and loves painting in his free time. He hopes to become a professional designer one day.",
    "options": [
      "precise",
      "rough",
      "artistic",
      "abstract"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The marketing team needs more _____ ideas for the new campaign. The last advertisement was too similar to our competitor's.",
    "options": [
      "rough",
      "creative",
      "precise",
      "realistic"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The software can _____ a 3D image of the building in about an hour. The architects will show it to the client tomorrow.",
    "options": [
      "trace",
      "erase",
      "shade",
      "render"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Students were asked to _____ the outline of the map using thin paper. Then they colored each country by hand.",
    "options": [
      "render",
      "trace",
      "erase",
      "shade"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "If you make a mistake on the form, please _____ it completely with a rubber. Do not use correction fluid on this document.",
    "options": [
      "erase",
      "render",
      "trace",
      "shade"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "illustration": {
    "pos": "n.",
    "en_def": "a picture drawn for a book, magazine or advertisement",
    "cn_def": "插圖；圖解"
  },
  "portrait": {
    "pos": "n.",
    "en_def": "a painting, drawing or photo of a person, especially the face",
    "cn_def": "肖像；畫像"
  },
  "cartoon": {
    "pos": "n.",
    "en_def": "a funny drawing, often in a newspaper or magazine",
    "cn_def": "漫畫；卡通"
  },
  "shade": {
    "pos": "n.",
    "en_def": "a particular darkness or lightness of a color",
    "cn_def": "色調；（顏色的）深淺"
  },
  "shading": {
    "pos": "n.",
    "en_def": "the use of darker marks in a drawing to show shadow or depth",
    "cn_def": "（繪畫的）明暗處理；陰影"
  },
  "line": {
    "pos": "n.",
    "en_def": "a long thin mark made with a pen or pencil",
    "cn_def": "線；線條"
  },
  "stroke": {
    "pos": "n.",
    "en_def": "a single movement of a pen or brush, or the mark it makes",
    "cn_def": "一筆；筆畫"
  },
  "contour": {
    "pos": "n.",
    "en_def": "the outer edge or shape of something",
    "cn_def": "輪廓；外形"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the way the parts of a picture are arranged",
    "cn_def": "構圖；（畫面的）布局"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of drawing that makes things look near or far, as in real life",
    "cn_def": "透視法"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "the correct size of one part compared with another",
    "cn_def": "比例"
  },
  "detail": {
    "pos": "n.",
    "en_def": "a small part or fact of something",
    "cn_def": "細節"
  },
  "texture": {
    "pos": "n.",
    "en_def": "the way a surface feels or looks, such as rough or smooth",
    "cn_def": "質地；紋理"
  },
  "medium": {
    "pos": "n.",
    "en_def": "the material an artist uses, such as paint or pencil",
    "cn_def": "（藝術創作的）媒材"
  },
  "pencil": {
    "pos": "n.",
    "en_def": "a thin tool with a gray or colored center, used for writing or drawing",
    "cn_def": "鉛筆"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "a black stick of burned wood used for drawing",
    "cn_def": "炭筆；木炭"
  },
  "ink": {
    "pos": "n.",
    "en_def": "a colored liquid used for writing, drawing or printing",
    "cn_def": "墨水；油墨"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a pen with a thick tip, used for writing on boards or drawing",
    "cn_def": "麥克筆；記號筆"
  },
  "brush": {
    "pos": "n.",
    "en_def": "a tool with hairs on a handle, used for painting",
    "cn_def": "畫筆；刷子"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "strong cloth that artists paint on",
    "cn_def": "畫布"
  },
  "paper": {
    "pos": "n.",
    "en_def": "thin material made from wood, used for writing, drawing or printing",
    "cn_def": "紙；紙張"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and correct in every small part",
    "cn_def": "精確的；準確的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "not finished or exact; done quickly as a first try",
    "cn_def": "粗略的；草擬的"
  },
  "realistic": {
    "pos": "adj.",
    "en_def": "showing things as they really are",
    "cn_def": "寫實的；逼真的"
  },
  "abstract": {
    "pos": "adj.",
    "en_def": "using shapes and colors instead of showing real people or things",
    "cn_def": "抽象的"
  },
  "artistic": {
    "pos": "adj.",
    "en_def": "having or showing skill in art",
    "cn_def": "有藝術天分的；藝術的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的；有創造力的"
  },
  "render": {
    "pos": "v.",
    "en_def": "to draw or show something in a particular way, often using a computer",
    "cn_def": "描繪；（用電腦）繪製呈現"
  },
  "trace": {
    "pos": "v.",
    "en_def": "to copy a picture by drawing over its lines through thin paper",
    "cn_def": "描摹；描繪"
  },
  "erase": {
    "pos": "v.",
    "en_def": "to remove marks, especially pencil marks",
    "cn_def": "擦掉；抹去"
  }
};

const EXTRA_GLOSSES = {};
