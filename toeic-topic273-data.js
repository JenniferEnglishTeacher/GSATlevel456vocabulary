// Topic 273 Quiz Data: Pencil 鉛筆
// Source word list: https://www.examword.com/group-topic/pencil — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T273 - Pencil 鉛筆",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sketch",
    "pos": "n.",
    "cn_def": "素描；草圖",
    "en_def": "a quick, simple drawing",
    "sentence": "A: Why did the interior designer visit our office on Monday afternoon before the manager approved the new budget for the lobby? B: She wanted to show us a rough {{BLANK}} of the new reception area, so we could choose the colors, the furniture, and the lighting before the builders start next month.",
    "cn": "A：室內設計師為什麼在經理核准大廳新預算之前，於星期一下午來我們辦公室？ B：她想給我們看新接待區的粗略【草圖】，讓我們在下個月施工人員開工前挑選顏色、家具和燈光。"
  },
  {
    "word": "graphite",
    "pos": "n.",
    "cn_def": "石墨",
    "en_def": "the soft black material in the middle of a pencil",
    "sentence": "A: Why are the art supplies we ordered for the design team still sitting in the storage room instead of on their desks? B: The supplier sent the wrong pencils, because the {{BLANK}} inside them is too hard for drawing, so our assistant is returning the boxes and waiting for a softer kind.",
    "cn": "A：我們幫設計團隊訂的美術用品為什麼還放在儲藏室，而不是在他們桌上？ B：供應商送錯了鉛筆，因為裡面的【石墨】太硬不適合畫圖，所以我們的助理正在退回這些箱子，並等待較軟的款式。"
  },
  {
    "word": "plethora",
    "pos": "n.",
    "cn_def": "過多；大量",
    "en_def": "a very large amount of something, often more than you need",
    "sentence": "A: Did you find a good notebook and pen set for the new interns at the stationery store near the train station yesterday? B: Yes, but it took a long time, because the store offers a {{BLANK}} of choices, and I had to compare prices, colors, and quality before I finally picked the cheapest useful set.",
    "cn": "A：你昨天在火車站附近的文具店有幫新實習生找到好用的筆記本和筆組嗎？ B：有，但花了很久，因為那家店提供了【大量】選擇，我得比較價格、顏色和品質，最後才挑了最便宜又實用的一組。"
  },
  {
    "word": "precise",
    "pos": "adj.",
    "cn_def": "精確的",
    "en_def": "exact and correct in every detail",
    "sentence": "A: Why does the engineer always use a mechanical pencil when he draws plans for the new factory machines in his office? B: He says the thin lead helps him make {{BLANK}} lines, and even a small mistake of one millimeter could cause serious problems when the workers build the real parts later.",
    "cn": "A：工程師在辦公室畫新工廠機器的設計圖時，為什麼總是用自動鉛筆？ B：他說細的筆芯幫助他畫出【精確的】線條，即使只有一公釐的小錯誤，也可能在工人之後製作真正零件時造成嚴重問題。"
  },
  {
    "word": "alter",
    "pos": "v.",
    "cn_def": "修改；改變",
    "en_def": "to change something a little",
    "sentence": "A: Can we still make changes to the poster for the charity event, or has the printing company already started working on it? B: We can still {{BLANK}} the date and the time, because I only wrote the first version in pencil, but we must send the final copy to the printer before Friday morning.",
    "cn": "A：慈善活動的海報我們還能修改嗎？還是印刷公司已經開始處理了？ B：我們還能【更改】日期和時間，因為我第一版只用鉛筆寫，但我們必須在星期五早上前把定稿寄給印刷廠。"
  },
  {
    "word": "erase",
    "pos": "v.",
    "cn_def": "擦掉；清除",
    "en_def": "to remove writing or marks completely",
    "sentence": "A: Why did the teacher at the training center ask everyone to fill out the practice test in pencil instead of using a pen? B: She wanted the students to {{BLANK}} their wrong answers easily, so they could correct them after the group discussion without making the answer sheets look messy and hard to read.",
    "cn": "A：訓練中心的老師為什麼要大家用鉛筆而不是原子筆寫練習測驗？ B：她希望學員能輕鬆【擦掉】錯誤的答案，這樣在小組討論後就能更正，而不會讓答案卷看起來凌亂又難以閱讀。"
  },
  {
    "word": "rectify",
    "pos": "v.",
    "cn_def": "糾正；修正",
    "en_def": "to correct something that is wrong",
    "sentence": "A: What happened when the customer complained that the price on her receipt was different from the price on the shelf? B: The store manager apologized right away and promised to {{BLANK}} the error, so he gave her the difference in cash and asked a staff member to check every price tag in that aisle.",
    "cn": "A：那位顧客抱怨她收據上的價格和貨架上的不同時，發生了什麼事？ B：店經理立刻道歉並承諾【修正】這個錯誤，所以他用現金退還差額，並請一名員工檢查那條走道上的每張價格標籤。"
  },
  {
    "word": "satisfied",
    "pos": "adj.",
    "cn_def": "滿意的",
    "en_def": "happy because you got what you wanted",
    "sentence": "A: How did the client react when you showed her the pencil drawings for the new company logo at the meeting this morning? B: She looked very {{BLANK}} with the simple design, so she asked us to add some color and send her the final digital version by the end of next week.",
    "cn": "A：今天早上開會時你給客戶看新公司標誌的鉛筆草稿，她反應如何？ B：她對這個簡單的設計看起來非常【滿意】，所以她請我們加點顏色，並在下週末前寄給她最終的電子版本。"
  },
  {
    "word": "rewrite",
    "pos": "v.",
    "cn_def": "重寫；改寫",
    "en_def": "to write something again in a better way",
    "sentence": "A: Why are you still working on the product report so late in the evening when it was due this afternoon? B: My manager said the first part was too long and confusing for our overseas partners, so I need to {{BLANK}} it in simpler English before I send it to them tomorrow morning.",
    "cn": "A：產品報告今天下午就該交了，你為什麼這麼晚還在弄？ B：我的經理說第一部分對我們的海外夥伴來說太長又難懂，所以我必須在明天早上寄給他們之前，用更簡單的英文【重寫】。"
  },
  {
    "word": "exhibition",
    "pos": "n.",
    "cn_def": "展覽",
    "en_def": "a public show of art or products",
    "sentence": "A: Where are all the staff from the marketing department going this weekend, and why did they rent such a large truck? B: They are taking our new stationery products to an {{BLANK}} at the convention center downtown, where thousands of visitors and store owners will come to see the latest office supplies.",
    "cn": "A：行銷部的所有員工這個週末要去哪裡？他們為什麼租了這麼大的卡車？ B：他們要把我們的新文具產品帶到市中心會展中心的【展覽】，那裡會有成千上萬的參觀者和店家老闆來看最新的辦公用品。"
  },
  {
    "word": "delighted",
    "pos": "adj.",
    "cn_def": "高興的；欣喜的",
    "en_def": "very pleased and happy",
    "sentence": "A: Did you hear what the director said after the art school accepted our company's donation of pencils and sketchbooks last month? B: Yes, she said she was {{BLANK}} to support young artists in our city, and she plans to make the donation a yearly event because the students sent such kind thank-you letters.",
    "cn": "A：上個月美術學校接受我們公司捐贈的鉛筆和素描本後，你有聽到主管說了什麼嗎？ B：有，她說她很【高興】能支持我們城市的年輕藝術家，而且因為學生們寄來了很貼心的感謝信，她打算把這項捐贈變成每年的活動。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "展示；陳列",
    "en_def": "to put something where people can see it",
    "sentence": "A: Where should we put the new colored pencil sets that arrived from the factory this morning before the store opens at ten? B: Please {{BLANK}} them on the large table near the front entrance, because customers will notice them right away and many parents are shopping for school supplies this week.",
    "cn": "A：今天早上從工廠送來的新彩色鉛筆組，在十點開店前要放在哪裡？ B：請把它們【陳列】在前門入口附近的大桌子上，因為顧客會馬上注意到，而且這週有很多家長在買學校用品。"
  },
  {
    "word": "finicky",
    "pos": "adj.",
    "cn_def": "挑剔的；過分講究的",
    "en_def": "too worried about small details; hard to please",
    "sentence": "A: Why does the office manager always order the same expensive brand of pencils instead of buying cheaper ones from the supermarket? B: The chief designer is very {{BLANK}} about her tools, and she complains loudly if the lead breaks easily, so the manager decided it is simpler to keep her happy.",
    "cn": "A：辦公室經理為什麼總是訂同一個昂貴牌子的鉛筆，而不在超市買便宜的？ B：首席設計師對她的工具非常【挑剔】，如果筆芯容易斷她就會大聲抱怨，所以經理決定讓她開心比較簡單。"
  },
  {
    "word": "hassle",
    "pos": "n.",
    "cn_def": "麻煩",
    "en_def": "something annoying that causes trouble",
    "sentence": "A: Why did the accounting team switch from paper forms to an online system for travel expenses last spring? B: Filling in forms by hand and sending them to the main office was a real {{BLANK}}, because papers often got lost, and employees had to wait weeks for their money.",
    "cn": "A：會計團隊為什麼在去年春天把差旅費從紙本表格改成線上系統？ B：用手填表格再寄到總公司真的很【麻煩】，因為文件常常遺失，員工也得等好幾週才能拿到錢。"
  },
  {
    "word": "fountain pen",
    "pos": "n.phr.",
    "cn_def": "鋼筆",
    "en_def": "a pen that is filled with liquid ink",
    "sentence": "A: What gift did the staff choose for the sales director who is retiring at the end of this month after thirty years? B: We bought him an elegant {{BLANK}} with his name printed on it, because he always signed contracts by hand and said a good pen makes his writing look more professional.",
    "cn": "A：員工們為這個月底即將在服務三十年後退休的業務總監選了什麼禮物？ B：我們買了一支印有他名字的高雅【鋼筆】給他，因為他總是親手簽合約，還說好筆能讓他的字看起來更專業。"
  },
  {
    "word": "ink",
    "pos": "n.",
    "cn_def": "墨水",
    "en_def": "colored liquid used for writing or printing",
    "sentence": "A: Why can't we print the handouts for the training session this afternoon, when the printer was working fine yesterday? B: The machine has run out of black {{BLANK}}, and the supply store will not deliver new cartridges until tomorrow, so we should ask the office next door to help us.",
    "cn": "A：印表機昨天還好好的，為什麼今天下午沒辦法列印訓練課程的講義？ B：機器的黑色【墨水】用完了，而文具店要到明天才會送新墨水匣來，所以我們應該請隔壁辦公室幫忙。"
  },
  {
    "word": "spill",
    "pos": "v.",
    "cn_def": "灑出；濺出",
    "en_def": "to let liquid fall out of a container by accident",
    "sentence": "A: Why is the important sales contract covered in brown marks, and why does the manager look so upset this morning? B: Someone accidentally knocked a cup off the table during the meeting, so the coffee started to {{BLANK}} across the desk, and now we need to print a clean copy for the client.",
    "cn": "A：那份重要的銷售合約為什麼沾滿了褐色污漬？經理今天早上為什麼看起來這麼不高興？ B：開會時有人不小心把杯子從桌上撞落，咖啡開始【灑】得滿桌都是，現在我們必須為客戶列印一份乾淨的副本。"
  },
  {
    "word": "sharpen",
    "pos": "v.",
    "cn_def": "削尖；磨利",
    "en_def": "to make something sharp or pointed",
    "sentence": "A: What should the assistants prepare before the job applicants arrive for the written test in the meeting room at nine? B: Please {{BLANK}} all the pencils in the box, put two on every desk, and make sure there are enough erasers, because last time several people had to borrow from each other.",
    "cn": "A：應徵者九點到會議室參加筆試之前，助理們應該準備什麼？ B：請把盒子裡所有的鉛筆【削尖】，每張桌子放兩支，並確認有足夠的橡皮擦，因為上次有好幾個人得互相借用。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy and useful for your needs",
    "sentence": "A: Why do so many office workers in this building buy their stationery at the small shop on the ground floor? B: It is very {{BLANK}} because they can pick up pens, notebooks, and printer paper during their lunch break without walking to the big shopping mall across the busy street.",
    "cn": "A：這棟大樓裡為什麼有那麼多上班族在一樓的小店買文具？ B：那裡非常【方便】，因為他們可以在午休時買筆、筆記本和影印紙，不必走到忙碌街道對面的大型購物中心。"
  },
  {
    "word": "neat",
    "pos": "adj.",
    "cn_def": "整潔的；工整的",
    "en_def": "clean and well arranged; clear and careful",
    "sentence": "A: Why did the hotel manager choose Amy to write the welcome cards for the guests attending the international conference next week? B: Her handwriting is very {{BLANK}} and easy to read, and she always finishes her work carefully, so the manager believes the guests will feel welcome when they open the cards.",
    "cn": "A：飯店經理為什麼選艾咪為下週參加國際會議的賓客寫歡迎卡？ B：她的字跡非常【工整】且容易閱讀，而且她總是細心完成工作，所以經理相信賓客打開卡片時會感到備受歡迎。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整齊的；整潔的",
    "en_def": "with everything in its proper place",
    "sentence": "A: Why does the supervisor want everyone to clean their desks before they leave the office this Friday afternoon? B: Some important investors are visiting on Monday morning, and she wants the office to look {{BLANK}} and professional, so please put away loose papers, pencils, and coffee cups.",
    "cn": "A：主管為什麼要大家在這個星期五下午下班前清理桌面？ B：有一些重要的投資人星期一早上要來參觀，她希望辦公室看起來【整齊】又專業，所以請把散落的文件、鉛筆和咖啡杯收好。"
  },
  {
    "word": "afresh",
    "pos": "adv.",
    "cn_def": "重新",
    "en_def": "again, in a new way",
    "sentence": "A: What did the team decide to do after the customers said they did not like any of the three package designs? B: We agreed to throw away our old drawings and start {{BLANK}} with new ideas, so each designer will bring at least five fresh sketches to next Tuesday's meeting.",
    "cn": "A：顧客說三種包裝設計都不喜歡之後，團隊決定怎麼做？ B：我們同意丟掉舊的草圖，帶著新點子【重新】開始，所以每位設計師下週二開會時都要帶至少五張新草圖。"
  },
  {
    "word": "blunt",
    "pos": "adj.",
    "cn_def": "鈍的",
    "en_def": "not sharp",
    "sentence": "A: Why are the drawings from this morning's workshop so unclear and thick compared with the samples the instructor showed us? B: Most of the pencils we gave the participants were {{BLANK}}, and nobody had a sharpener, so the lines looked heavy, and the small details in the pictures disappeared.",
    "cn": "A：今天早上工作坊的畫作為什麼和講師給我們看的範例相比那麼模糊又粗糙？ B：我們發給參加者的鉛筆大多是【鈍的】，又沒有人有削鉛筆機，所以線條看起來很粗，畫中的小細節也都不見了。"
  },
  {
    "word": "anxious",
    "pos": "adj.",
    "cn_def": "焦慮的；擔心的",
    "en_def": "worried and nervous",
    "sentence": "A: Why does the new accountant look so nervous while she is waiting outside the director's office this afternoon? B: She is {{BLANK}} about her first quarterly report, because she found a few mistakes in the numbers yesterday and is not sure whether she corrected all of them in time.",
    "cn": "A：新來的會計師今天下午在主管辦公室外面等候時，為什麼看起來那麼緊張？ B：她對自己的第一份季報感到【焦慮】，因為她昨天在數字中發現幾個錯誤，不確定是否都及時更正了。"
  },
  {
    "word": "assurance",
    "pos": "n.",
    "cn_def": "保證；擔保",
    "en_def": "a promise that makes someone feel sure",
    "sentence": "A: Why did the school agree to buy all its pencils and notebooks from our company again this year instead of a cheaper supplier? B: Our sales manager gave the principal his personal {{BLANK}} that every order would arrive on time, and he also offered free replacement for any damaged products.",
    "cn": "A：學校今年為什麼又同意向我們公司購買所有鉛筆和筆記本，而不是找更便宜的供應商？ B：我們的業務經理親自向校長【保證】每筆訂單都會準時送達，而且他也提供任何損壞產品的免費更換。"
  },
  {
    "word": "astounded",
    "pos": "adj.",
    "cn_def": "震驚的；大吃一驚的",
    "en_def": "very surprised",
    "sentence": "A: How did the visitors react when they saw the huge portrait in the hotel lobby that was drawn only with ordinary pencils? B: They were {{BLANK}} by the amount of detail, and many of them took photos, because from a distance the picture looked exactly like a real black-and-white photograph.",
    "cn": "A：遊客看到飯店大廳那幅只用普通鉛筆畫的巨大肖像時，有什麼反應？ B：他們對其細節之多感到【震驚】，很多人都拍了照，因為從遠處看，這幅畫看起來就像一張真正的黑白照片。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修訂；修改",
    "en_def": "to change something to make it better or correct",
    "sentence": "A: Has the marketing team finished the brochure for the new office supplies, or are they still waiting for comments from the director? B: The director asked them to {{BLANK}} the price list and add more photos of the products, so the final version will probably be ready by Thursday afternoon.",
    "cn": "A：行銷團隊完成新辦公用品的手冊了嗎？還是還在等主管的意見？ B：主管要求他們【修訂】價目表並加入更多產品照片，所以最終版本大概週四下午會好。"
  },
  {
    "word": "privileged",
    "pos": "adj.",
    "cn_def": "榮幸的；享有特權的",
    "en_def": "lucky to have a special chance or honor",
    "sentence": "A: What did the young artist say in her speech when the company chose her pencil drawings for this year's calendar? B: She said she felt {{BLANK}} to work with such a famous brand, and she thanked her old art teacher, who gave her the first set of drawing pencils when she was nine.",
    "cn": "A：公司選用那位年輕藝術家的鉛筆畫作為今年的月曆時，她在致詞中說了什麼？ B：她說能和這麼有名的品牌合作感到很【榮幸】，並感謝她的老美術老師，老師在她九歲時送了她第一套繪圖鉛筆。"
  },
  {
    "word": "render",
    "pos": "v.",
    "cn_def": "描繪；呈現",
    "en_def": "to show something in a drawing or picture",
    "sentence": "A: Why did the architect spend the whole weekend at the office before the city planning meeting on Monday? B: She needed to {{BLANK}} the new shopping center in a detailed drawing, showing the trees, the parking area, and the glass entrance, so the committee could imagine the final building.",
    "cn": "A：建築師為什麼在星期一的都市計畫會議前整個週末都待在辦公室？ B：她需要用一幅詳細的圖【描繪】新的購物中心，畫出樹木、停車區和玻璃入口，讓委員會能想像最終的建築樣貌。"
  },
  {
    "word": "fade",
    "pos": "v.",
    "cn_def": "褪色；變淡",
    "en_def": "to slowly become lighter or less bright",
    "sentence": "A: Why did the museum staff move the old pencil drawings from the main hall into a darker room last month? B: The strong sunlight from the big windows was making the lines {{BLANK}}, and the experts warned that the drawings could become almost invisible within a few years.",
    "cn": "A：博物館員工上個月為什麼把舊的鉛筆畫從主展廳移到較暗的房間？ B：大窗戶照進來的強烈陽光讓線條漸漸【變淡】，專家警告這些畫可能在幾年內幾乎看不見。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "版面；佈局",
    "en_def": "the way things are arranged on a page or in a space",
    "sentence": "A: Why is the graphic designer drawing boxes and lines with a pencil before she starts working on the computer? B: She likes to plan the {{BLANK}} of the magazine page on paper first, deciding where the photos, titles, and advertisements will go, because it saves time when she builds the final version.",
    "cn": "A：平面設計師為什麼在開始用電腦工作前，先用鉛筆畫方框和線條？ B：她喜歡先在紙上規劃雜誌頁面的【版面】，決定照片、標題和廣告要放在哪裡，因為這樣在製作最終版本時能節省時間。"
  }
];

const MCQS = [
  {
    "q": "The architect drew a quick _____ of the lobby during the meeting. Later, she turned it into a detailed computer design.",
    "options": [
      "sketch",
      "hassle",
      "ink",
      "assurance"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our new pencils use high-quality _____ that does not break easily. Artists say the lines are dark and smooth.",
    "options": [
      "exhibition",
      "graphite",
      "hassle",
      "assurance"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Job seekers can choose from a _____ of positions on the website. There are more than five thousand new openings this month.",
    "options": [
      "sketch",
      "layout",
      "plethora",
      "hassle"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please give the factory _____ measurements for the new desks. Even a small mistake will make them too large for the room.",
    "options": [
      "anxious",
      "delighted",
      "finicky",
      "precise"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The tailor can _____ your suit before the ceremony on Saturday. He will make the jacket a little shorter.",
    "options": [
      "alter",
      "spill",
      "fade",
      "sharpen"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ the old schedule from the whiteboard after the meeting. The cleaning staff will need a clean board tomorrow.",
    "options": [
      "spill",
      "erase",
      "render",
      "sharpen"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The bank promised to _____ the billing error within three days. Customers who were charged twice will receive a full refund.",
    "options": [
      "fade",
      "spill",
      "rectify",
      "sharpen"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Most customers were _____ with the quick delivery service. The online survey showed that ninety percent would order again.",
    "options": [
      "blunt",
      "precise",
      "finicky",
      "satisfied"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The editor asked me to _____ the introduction of my article. She thought the first paragraph was too long and boring.",
    "options": [
      "rewrite",
      "spill",
      "fade",
      "sharpen"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The museum will hold an _____ of modern pencil drawings next month. Tickets are free for students and senior citizens.",
    "options": [
      "hassle",
      "exhibition",
      "assurance",
      "graphite"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "We are _____ to announce that our company won the design award. The ceremony will take place next Friday evening.",
    "options": [
      "blunt",
      "finicky",
      "delighted",
      "tidy"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The bakery will _____ its new holiday cakes in the front window. Customers can order them online starting next Monday.",
    "options": [
      "erase",
      "fade",
      "spill",
      "display"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our new client is very _____ about small details in the contract. She checks every word and asks many questions.",
    "options": [
      "finicky",
      "convenient",
      "blunt",
      "neat"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Renewing a passport online saves you the _____ of waiting in long lines. The whole process takes about ten minutes.",
    "options": [
      "layout",
      "hassle",
      "ink",
      "exhibition"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The president signed the agreement with a gold _____ at the ceremony. It was a gift from the city mayor.",
    "options": [
      "exhibition",
      "layout",
      "fountain pen",
      "hassle"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The printer is out of black _____ again this week. Please order new cartridges from the supplier before Friday.",
    "options": [
      "hassle",
      "layout",
      "assurance",
      "ink"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please be careful not to _____ coffee on the new carpet in the lobby. Cleaning it would cost the company a lot of money.",
    "options": [
      "spill",
      "rectify",
      "revise",
      "alter"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Before the written exam begins, please _____ your pencils at the back of the room. Pens are not allowed during the test.",
    "options": [
      "rectify",
      "sharpen",
      "render",
      "revise"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The hotel is in a _____ location near the train station. Guests can walk to the convention center in five minutes.",
    "options": [
      "anxious",
      "finicky",
      "convenient",
      "astounded"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Applicants should fill out the form in clear and _____ handwriting. Forms that are difficult to read will be returned.",
    "options": [
      "anxious",
      "astounded",
      "blunt",
      "neat"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The manager asked staff to keep the kitchen _____ at all times. Dirty dishes must not be left in the sink.",
    "options": [
      "tidy",
      "anxious",
      "privileged",
      "astounded"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "This knife is too _____ to cut the bread properly. Could you bring a sharper one from the kitchen drawer?",
    "options": [
      "delighted",
      "blunt",
      "satisfied",
      "privileged"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Many employees feel _____ about the company's plan to move overseas. The director will answer their questions at Friday's meeting.",
    "options": [
      "convenient",
      "precise",
      "anxious",
      "tidy"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The supplier gave us an _____ that the parts would arrive on time. Unfortunately, the shipment was delayed for two weeks.",
    "options": [
      "exhibition",
      "ink",
      "hassle",
      "assurance"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The audience was _____ by the young pianist's amazing performance. Nobody expected such skill from a twelve-year-old student.",
    "options": [
      "astounded",
      "convenient",
      "tidy",
      "precise"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The finance team must _____ the budget after the sales results came in. The new numbers are much lower than expected.",
    "options": [
      "spill",
      "revise",
      "fade",
      "sharpen"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "I feel _____ to speak at this international conference today. Thank you all for coming from so many different countries.",
    "options": [
      "blunt",
      "precise",
      "privileged",
      "finicky"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The designer used special software to _____ the building in three dimensions. Clients could see every room before construction began.",
    "options": [
      "spill",
      "erase",
      "sharpen",
      "render"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Keep these posters away from direct sunlight. Otherwise, the bright colors will slowly _____ over the summer.",
    "options": [
      "fade",
      "rectify",
      "sharpen",
      "erase"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The new office _____ gives each team its own meeting space. Employees say it is much easier to work together now.",
    "options": [
      "hassle",
      "layout",
      "ink",
      "graphite"
    ],
    "answer": 1,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "sketch": {
    "pos": "n.",
    "en_def": "a quick, simple drawing",
    "cn_def": "素描；草圖"
  },
  "graphite": {
    "pos": "n.",
    "en_def": "the soft black material in the middle of a pencil",
    "cn_def": "石墨"
  },
  "plethora": {
    "pos": "n.",
    "en_def": "a very large amount of something, often more than you need",
    "cn_def": "過多；大量"
  },
  "precise": {
    "pos": "adj.",
    "en_def": "exact and correct in every detail",
    "cn_def": "精確的"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something a little",
    "cn_def": "修改；改變"
  },
  "erase": {
    "pos": "v.",
    "en_def": "to remove writing or marks completely",
    "cn_def": "擦掉；清除"
  },
  "rectify": {
    "pos": "v.",
    "en_def": "to correct something that is wrong",
    "cn_def": "糾正；修正"
  },
  "satisfied": {
    "pos": "adj.",
    "en_def": "happy because you got what you wanted",
    "cn_def": "滿意的"
  },
  "rewrite": {
    "pos": "v.",
    "en_def": "to write something again in a better way",
    "cn_def": "重寫；改寫"
  },
  "exhibition": {
    "pos": "n.",
    "en_def": "a public show of art or products",
    "cn_def": "展覽"
  },
  "delighted": {
    "pos": "adj.",
    "en_def": "very pleased and happy",
    "cn_def": "高興的；欣喜的"
  },
  "display": {
    "pos": "v.",
    "en_def": "to put something where people can see it",
    "cn_def": "展示；陳列"
  },
  "finicky": {
    "pos": "adj.",
    "en_def": "too worried about small details; hard to please",
    "cn_def": "挑剔的；過分講究的"
  },
  "hassle": {
    "pos": "n.",
    "en_def": "something annoying that causes trouble",
    "cn_def": "麻煩"
  },
  "fountain pen": {
    "pos": "n.phr.",
    "en_def": "a pen that is filled with liquid ink",
    "cn_def": "鋼筆"
  },
  "ink": {
    "pos": "n.",
    "en_def": "colored liquid used for writing or printing",
    "cn_def": "墨水"
  },
  "spill": {
    "pos": "v.",
    "en_def": "to let liquid fall out of a container by accident",
    "cn_def": "灑出；濺出"
  },
  "sharpen": {
    "pos": "v.",
    "en_def": "to make something sharp or pointed",
    "cn_def": "削尖；磨利"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and useful for your needs",
    "cn_def": "方便的"
  },
  "neat": {
    "pos": "adj.",
    "en_def": "clean and well arranged; clear and careful",
    "cn_def": "整潔的；工整的"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "with everything in its proper place",
    "cn_def": "整齊的；整潔的"
  },
  "afresh": {
    "pos": "adv.",
    "en_def": "again, in a new way",
    "cn_def": "重新"
  },
  "blunt": {
    "pos": "adj.",
    "en_def": "not sharp",
    "cn_def": "鈍的"
  },
  "anxious": {
    "pos": "adj.",
    "en_def": "worried and nervous",
    "cn_def": "焦慮的；擔心的"
  },
  "assurance": {
    "pos": "n.",
    "en_def": "a promise that makes someone feel sure",
    "cn_def": "保證；擔保"
  },
  "astounded": {
    "pos": "adj.",
    "en_def": "very surprised",
    "cn_def": "震驚的；大吃一驚的"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or correct",
    "cn_def": "修訂；修改"
  },
  "privileged": {
    "pos": "adj.",
    "en_def": "lucky to have a special chance or honor",
    "cn_def": "榮幸的；享有特權的"
  },
  "render": {
    "pos": "v.",
    "en_def": "to show something in a drawing or picture",
    "cn_def": "描繪；呈現"
  },
  "fade": {
    "pos": "v.",
    "en_def": "to slowly become lighter or less bright",
    "cn_def": "褪色；變淡"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way things are arranged on a page or in a space",
    "cn_def": "版面；佈局"
  }
};

const EXTRA_GLOSSES = {};
