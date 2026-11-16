// Topic 139 Quiz Data: Fashionable Person 時髦的人
// Source word list: https://www.examword.com/group-topic/fashionable-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T139 - Fashionable Person 時髦的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fashionista",
    "pos": "n.",
    "cn_def": "時尚達人；熱愛時尚的人",
    "en_def": "a person who loves fashion and always wears the newest styles",
    "sentence": "A: Who should we ask to help choose the new uniforms for the hotel staff, since none of us really follows the latest clothing styles? B: Let's ask Grace from the marketing department, because she is a real {{BLANK}} who reads every fashion magazine and always knows which colors will be popular next season.",
    "cn": "A：既然我們沒有人真的在追最新的服裝款式，我們該請誰幫忙挑選飯店員工的新制服？ B：我們去問行銷部的葛瑞絲吧，因為她是真正的【時尚達人】，每本時尚雜誌都讀，而且總是知道下一季會流行哪些顏色。"
  },
  {
    "word": "trendsetter",
    "pos": "n.",
    "cn_def": "引領潮流的人；潮流先驅",
    "en_def": "a person who starts a new style that other people copy",
    "sentence": "A: Why did so many employees suddenly start wearing white sneakers with their business suits after the company holiday party last December? B: Our new sales director wore that look at the party, and because she is such a {{BLANK}}, half the office copied her style within a few weeks.",
    "cn": "A：為什麼去年十二月公司節慶派對之後，那麼多員工突然開始穿白色運動鞋搭配西裝？ B：我們的新業務總監在派對上穿了那樣的造型，而且因為她是如此【引領潮流的人】，幾週內辦公室有一半的人都模仿了她的風格。"
  },
  {
    "word": "stylist",
    "pos": "n.",
    "cn_def": "造型師",
    "en_def": "a person whose job is to choose clothes, hair or makeup for people",
    "sentence": "A: The magazine photo shoot for our new watch collection starts at nine tomorrow morning, so who will decide what the models should wear? B: The agency is sending an experienced {{BLANK}} who will bring several outfits, choose the right shoes, and make sure everything matches the colors of our brand.",
    "cn": "A：我們新手錶系列的雜誌拍攝明天早上九點開始，那麼誰來決定模特兒該穿什麼？ B：經紀公司會派一位經驗豐富的【造型師】，她會帶來好幾套服裝、挑選合適的鞋子，並確保一切都和我們品牌的顏色相配。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模特兒",
    "en_def": "a person who wears clothes in shows or photos to show them to buyers",
    "sentence": "A: How did the fashion show for our autumn jackets go last night, and did the buyers from the department stores seem interested in the designs? B: It went very well, and every {{BLANK}} walked down the runway confidently, so several buyers asked for price lists before the event even ended.",
    "cn": "A：昨晚我們秋季夾克的時裝秀進行得如何？百貨公司的採購人員看起來對這些設計有興趣嗎？ B：非常順利，每位【模特兒】都很有自信地走過伸展台，所以好幾位採購在活動還沒結束前就索取了價目表。"
  },
  {
    "word": "influencer",
    "pos": "n.",
    "cn_def": "網紅；有影響力的人",
    "en_def": "a person who affects what many people buy through social media",
    "sentence": "A: Our new skin cream has been in stores for two months, but sales are still low, so what do you think we should try next? B: We could pay a popular online {{BLANK}} with millions of followers to post a video about it, because young customers often trust these people more than traditional advertisements.",
    "cn": "A：我們的新款護膚霜已經上市兩個月了，但銷量仍然很低，你覺得我們接下來該嘗試什麼？ B：我們可以付費請一位擁有數百萬粉絲的熱門線上【網紅】發一支相關影片，因為年輕顧客往往比較信任這些人，而不是傳統廣告。"
  },
  {
    "word": "icon",
    "pos": "n.",
    "cn_def": "代表人物；偶像",
    "en_def": "a famous person who many people admire as a symbol of something",
    "sentence": "A: Why does the museum's new exhibition about clothing focus so much on one actress from the 1950s instead of including many different designers? B: Because she became a style {{BLANK}} whose simple black dresses and pearl necklaces are still copied by designers and shoppers all over the world today.",
    "cn": "A：為什麼博物館關於服裝的新展覽如此聚焦在一位1950年代的女演員身上，而不是納入許多不同的設計師？ B：因為她成為了時尚【代表人物】，她簡約的黑色洋裝和珍珠項鍊至今仍被世界各地的設計師和消費者模仿。"
  },
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人；明星",
    "en_def": "a famous person, especially in movies, music or sports",
    "sentence": "A: Why is there such a big crowd with cameras standing outside the entrance of the shopping mall this afternoon, blocking the sidewalk? B: A famous {{BLANK}} from a popular TV drama is opening a new clothing store there today, so hundreds of fans have been waiting since early morning to take pictures.",
    "cn": "A：為什麼今天下午購物中心入口外面站著一大群拿著相機的人，把人行道都擋住了？ B：一位熱門電視劇的知名【明星】今天要在那裡開一家新服飾店，所以數百名粉絲從一大早就在等著拍照。"
  },
  {
    "word": "designer",
    "pos": "n.",
    "cn_def": "設計師",
    "en_def": "a person whose job is to plan how clothes or products will look",
    "sentence": "A: The new winter coats look amazing, so who came up with the idea of using recycled fabric and such bright colors for the collection? B: Our young fashion {{BLANK}} spent three months drawing sketches and testing materials, and she wanted to show that warm clothing can also be friendly to the environment.",
    "cn": "A：新的冬季大衣看起來很棒，是誰想到在這個系列使用回收布料和如此鮮豔的顏色？ B：我們年輕的服裝【設計師】花了三個月畫草圖和測試材料，她想證明保暖的衣物也可以對環境友善。"
  },
  {
    "word": "well-dressed",
    "pos": "adj.",
    "cn_def": "衣著得體的；穿著講究的",
    "en_def": "wearing nice, suitable and attractive clothes",
    "sentence": "A: What kind of impression do you think the bank wants its employees to give when they meet important customers at the front counter? B: The managers want every employee to look {{BLANK}} and professional, so they provide clean suits and ask the staff to check their appearance before the branch opens.",
    "cn": "A：你認為銀行希望員工在櫃檯接待重要客戶時給人什麼樣的印象？ B：經理們希望每位員工看起來都【衣著得體】且專業，所以他們提供乾淨的西裝，並要求員工在分行開門前檢查自己的儀容。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "時髦的；有型的",
    "en_def": "fashionable and attractive in appearance",
    "sentence": "A: Have you seen the new uniforms that the airline introduced for its flight attendants this spring, and do passengers like them? B: Yes, they are much more {{BLANK}} than the old ones, with modern cuts and soft colors, and many passengers have even posted photos of them online.",
    "cn": "A：你看過航空公司今年春天為空服員推出的新制服嗎？乘客喜歡嗎？ B：看過，它們比舊制服【時髦】得多，有現代感的剪裁和柔和的顏色，許多乘客甚至還把照片貼到網路上。"
  },
  {
    "word": "trendy",
    "pos": "adj.",
    "cn_def": "流行的；時髦的",
    "en_def": "very fashionable and popular at the moment",
    "sentence": "A: Why did the owners decide to move their café from the quiet suburbs to the busy downtown area near the university last year? B: They wanted to attract young customers, so they chose a {{BLANK}} neighborhood full of art galleries and small boutiques where students and office workers like to spend their weekends.",
    "cn": "A：為什麼老闆們去年決定把咖啡館從安靜的郊區搬到大學附近熱鬧的市中心？ B：他們想吸引年輕顧客，所以選了一個【時髦】的街區，那裡有很多藝廊和小型精品店，是學生和上班族喜歡度過週末的地方。"
  },
  {
    "word": "chic",
    "pos": "adj.",
    "cn_def": "時髦雅緻的；別緻的",
    "en_def": "stylish and fashionable in a simple, attractive way",
    "sentence": "A: Where should we hold the dinner for our French business partners next week, since they are used to very nice restaurants in Paris? B: I suggest the {{BLANK}} little bistro on the top floor of the hotel, because it has simple but beautiful decorations, excellent wine, and a wonderful view of the city.",
    "cn": "A：下週我們該在哪裡宴請法國商業夥伴？畢竟他們習慣了巴黎非常好的餐廳。 B：我建議飯店頂樓那家【別緻】的小酒館，因為它的裝潢簡單卻美麗，有很棒的葡萄酒，還能欣賞城市的美景。"
  },
  {
    "word": "elegant",
    "pos": "adj.",
    "cn_def": "優雅的；高雅的",
    "en_def": "graceful and attractive in a simple, high-quality way",
    "sentence": "A: What should the guests wear to the company's fiftieth anniversary dinner at the grand hotel next Saturday evening? B: The invitation asks everyone to wear {{BLANK}} evening clothes, such as long dresses or dark suits, because the event will include a formal dinner, live music, and speeches from the founders.",
    "cn": "A：下週六晚上在大飯店舉辦的公司五十週年晚宴，賓客應該穿什麼？ B：邀請函要求大家穿著【高雅】的晚禮服，例如長禮服或深色西裝，因為活動將有正式晚宴、現場音樂和創辦人的致詞。"
  },
  {
    "word": "sophisticated",
    "pos": "adj.",
    "cn_def": "有品味的；世故老練的",
    "en_def": "having a lot of knowledge and good taste about fashion, culture or the world",
    "sentence": "A: Who is the main target customer for the expensive perfume we are launching in department stores across Asia next month? B: We are aiming at {{BLANK}} professionals in their thirties and forties who travel often, enjoy fine art and good restaurants, and are willing to pay more for quality.",
    "cn": "A：我們下個月要在亞洲各地百貨公司推出的昂貴香水，主要目標客群是誰？ B：我們鎖定三、四十歲【有品味的】專業人士，他們經常旅行、喜愛精緻藝術和好餐廳，而且願意為品質多花錢。"
  },
  {
    "word": "classy",
    "pos": "adj.",
    "cn_def": "有格調的；高級的",
    "en_def": "stylish and of high quality in a way that shows good taste",
    "sentence": "A: Did you enjoy the opening party for the new jewelry store on Main Street last Friday night, or was it too crowded? B: It was a very {{BLANK}} event with soft piano music, fresh flowers on every table, and guests in beautiful outfits, so I stayed much longer than I planned.",
    "cn": "A：你喜歡上週五晚上主街新珠寶店的開幕派對嗎？還是人太多了？ B：那是一場非常【有格調】的活動，有輕柔的鋼琴音樂、每張桌上都有鮮花，賓客們也都穿著漂亮的服裝，所以我待得比原本計畫的久很多。"
  },
  {
    "word": "fashion-conscious",
    "pos": "adj.",
    "cn_def": "注重時尚的",
    "en_def": "caring a lot about wearing fashionable clothes",
    "sentence": "A: Why did our clothing company decide to spend most of its advertising budget on social media this year instead of on television? B: Our research showed that {{BLANK}} young shoppers spend hours looking at outfits on their phones every day, so online ads are the best way to reach them.",
    "cn": "A：為什麼我們服飾公司今年決定把大部分廣告預算花在社群媒體上，而不是電視？ B：我們的研究顯示，【注重時尚的】年輕消費者每天花好幾個小時在手機上看穿搭，所以網路廣告是接觸他們的最佳方式。"
  },
  {
    "word": "tasteful",
    "pos": "adj.",
    "cn_def": "有品味的；雅緻的",
    "en_def": "attractive and showing good judgment about what is suitable",
    "sentence": "A: The hotel lobby looks so calm and expensive now, so what exactly did the interior decorators change during the renovation last month? B: They removed the bright posters and plastic plants and added {{BLANK}} decorations in soft gray and cream colors, including a few paintings and some fresh flowers.",
    "cn": "A：飯店大廳現在看起來好平靜又高級，室內設計師上個月整修時到底改了什麼？ B：他們拿掉了鮮豔的海報和塑膠植物，換上了柔和灰色和米色系的【雅緻】裝飾，包括幾幅畫和一些鮮花。"
  },
  {
    "word": "impeccable",
    "pos": "adj.",
    "cn_def": "完美無缺的；無可挑剔的",
    "en_def": "perfect, with no mistakes or problems at all",
    "sentence": "A: Why do so many international guests ask for the same waiter whenever they come back to eat at our restaurant? B: His manners and appearance are {{BLANK}}, because he always wears a perfectly pressed uniform, remembers every guest's name, and never makes a mistake with an order.",
    "cn": "A：為什麼那麼多國際賓客每次回到我們餐廳用餐時都指名同一位服務生？ B：他的禮儀和外表都【無可挑剔】，因為他總是穿著燙得筆挺的制服、記得每位客人的名字，而且點餐從不出錯。"
  },
  {
    "word": "polished",
    "pos": "adj.",
    "cn_def": "優雅得體的；精緻的",
    "en_def": "neat, smart and professional in appearance or manner",
    "sentence": "A: How did the new account manager manage to win the contract with the luxury hotel chain after only one meeting last week? B: She gave a {{BLANK}} presentation in a smart navy suit, answered every difficult question calmly, and showed the clients that our company pays close attention to details.",
    "cn": "A：新任客戶經理上週怎麼只開了一次會就拿下了那家豪華連鎖飯店的合約？ B：她穿著俐落的海軍藍套裝做了一場【精緻得體】的簡報，冷靜地回答每個困難的問題，並讓客戶看到我們公司非常注重細節。"
  },
  {
    "word": "glamorous",
    "pos": "adj.",
    "cn_def": "迷人的；光鮮亮麗的",
    "en_def": "attractive and exciting in a rich, special way",
    "sentence": "A: Is working for a famous fashion magazine as exciting as people think, with parties, travel, and celebrities every week? B: It looks {{BLANK}} from the outside, but most days we are actually sitting in the office until late at night, checking photos, writing articles, and meeting tight deadlines.",
    "cn": "A：在知名時尚雜誌工作真的像大家想的那麼刺激嗎？每週都有派對、旅行和名人？ B：從外面看起來很【光鮮亮麗】，但其實大部分的日子我們都坐在辦公室待到深夜，檢查照片、寫文章，趕緊迫的截稿期限。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的",
    "en_def": "feeling sure about your own abilities or appearance",
    "sentence": "A: You seemed very relaxed during the job interview at the design company yesterday, so how did you prepare for it? B: I practiced my answers with a friend for a week and bought a new suit that fits well, so I felt {{BLANK}} when I walked into the room.",
    "cn": "A：你昨天在設計公司面試時看起來很放鬆，你是怎麼準備的？ B：我跟朋友練習回答問題練了一個星期，還買了一套合身的新西裝，所以走進房間時我覺得很【有自信】。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "與眾不同的；有特色的",
    "en_def": "easy to recognize because it is special or different",
    "sentence": "A: How can customers recognize our handbags in a busy department store when so many brands sell similar products these days? B: Every bag has a {{BLANK}} gold buckle shaped like a small leaf, so shoppers can spot our brand from across the room, even without reading the label.",
    "cn": "A：現在那麼多品牌都賣類似的商品，顧客在熱鬧的百貨公司裡要怎麼認出我們的手提包？ B：每個包包都有一個【與眾不同】、形狀像小葉子的金色扣環，所以購物者即使不看標籤，從房間另一頭也能認出我們的品牌。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "原創的；新穎的",
    "en_def": "new and different from anything else; not copied",
    "sentence": "A: Why did the judges choose the student from the small art school as the winner of the national clothing design contest this year? B: Her collection was truly {{BLANK}}, because she made jackets from old maps and newspapers, and nobody on the panel had ever seen anything like that before.",
    "cn": "A：為什麼今年全國服裝設計比賽的評審選了那位來自小型藝術學校的學生為優勝者？ B：她的作品系列非常【原創】，因為她用舊地圖和報紙做成夾克，評審團裡沒有人以前看過類似的東西。"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "cn_def": "大膽的；醒目的",
    "en_def": "brave and not afraid to look different; strong and bright",
    "sentence": "A: Do you think it was a good idea for the new manager to wear a bright orange suit at her first meeting with the board of directors? B: It was a {{BLANK}} choice in such a conservative bank, but people remembered her immediately, and her confident speech made a very good impression.",
    "cn": "A：你覺得新經理在第一次和董事會開會時穿一套鮮橘色西裝是個好主意嗎？ B：在這麼保守的銀行裡那是個【大膽】的選擇，但大家立刻記住了她，而且她充滿自信的演講留下了非常好的印象。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "able to make new and interesting ideas or things",
    "sentence": "A: Our sales of sports shoes have dropped for three months in a row, so what does the marketing director want us to do? B: She wants the team to come up with {{BLANK}} ideas for a new campaign, such as a dance video challenge or a contest where customers design their own shoes.",
    "cn": "A：我們運動鞋的銷量已經連續三個月下滑，行銷總監要我們怎麼做？ B：她希望團隊想出【有創意的】新活動點子，例如舞蹈影片挑戰，或是讓顧客自己設計鞋子的比賽。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；新式的",
    "en_def": "using new styles, ideas or technology; not old-fashioned",
    "sentence": "A: Why does the company want to completely redesign its old shop in the city center when the building is still in good condition? B: The owners feel it looks old-fashioned, so they plan a {{BLANK}} interior with glass walls, bright lighting, and digital screens to attract younger shoppers.",
    "cn": "A：為什麼公司在市中心的老店建築狀況還很好時，就想要全面重新設計？ B：老闆們覺得它看起來很過時，所以他們計畫打造【現代】風格的室內空間，有玻璃牆、明亮的燈光和數位螢幕，以吸引較年輕的消費者。"
  },
  {
    "word": "vintage",
    "pos": "adj.",
    "cn_def": "復古的；古著的",
    "en_def": "old but of high quality and still attractive and fashionable",
    "sentence": "A: Where did you find that beautiful leather jacket you wore to the office party, because I have never seen one like it in the stores? B: I bought it at a {{BLANK}} clothing shop downtown that sells high-quality secondhand items from the 1970s, and it cost much less than a new one.",
    "cn": "A：你在辦公室派對上穿的那件漂亮皮夾克是在哪裡找到的？我從沒在店裡看過那樣的。 B：我是在市中心一家【古著】服飾店買的，那家店販售1970年代的高品質二手商品，而且比新的便宜很多。"
  },
  {
    "word": "coordinated",
    "pos": "adj.",
    "cn_def": "搭配協調的",
    "en_def": "matching well together in color or style",
    "sentence": "A: Why does everyone in the office ask Linda for advice whenever they need to buy clothes for an important event or meeting? B: Her outfits are always perfectly {{BLANK}}, with her shoes, scarf, and handbag matching in color, so people trust her taste and her honest opinions.",
    "cn": "A：為什麼辦公室裡大家每當需要為重要活動或會議買衣服時，都會向琳達請教？ B：她的穿著總是搭配得非常【協調】，鞋子、圍巾和手提包的顏色都相互呼應，所以大家信任她的品味和誠實的意見。"
  },
  {
    "word": "neatly",
    "pos": "adv.",
    "cn_def": "整齊地；整潔地",
    "en_def": "in a tidy, careful and organized way",
    "sentence": "A: The manager of the clothing store seemed unhappy this morning, so did something go wrong with the window display or the shelves? B: Some new staff members had left piles of sweaters on the tables, so she asked everyone to fold all the clothes {{BLANK}} before the store opened at ten.",
    "cn": "A：服飾店的經理今天早上看起來不太高興，是櫥窗陳列或貨架出了什麼問題嗎？ B：有些新員工把一堆毛衣留在桌上，所以她要求大家在十點開店前把所有衣服【整齊地】折好。"
  },
  {
    "word": "smartly",
    "pos": "adv.",
    "cn_def": "俐落地；體面地",
    "en_def": "in a neat, stylish and fashionable way",
    "sentence": "A: What should the new interns wear when they visit the client's headquarters with the senior team next Thursday afternoon? B: They should be {{BLANK}} dressed in dark suits and polished shoes, because this client is very traditional and first impressions will matter a lot for the contract.",
    "cn": "A：下週四下午新實習生和資深團隊一起拜訪客戶總部時應該穿什麼？ B：他們應該穿著深色西裝和擦亮的皮鞋，【體面地】打扮，因為這位客戶非常傳統，第一印象對合約會有很大的影響。"
  },
  {
    "word": "elegantly",
    "pos": "adv.",
    "cn_def": "優雅地；高雅地",
    "en_def": "in a graceful and attractive way",
    "sentence": "A: How did the hotel staff prepare the ballroom for the wedding reception that took place there last Saturday evening? B: They decorated the room {{BLANK}} with white roses, silver candles, and soft lights, and the bride's family said it looked even better than the photos in the brochure.",
    "cn": "A：飯店員工是怎麼為上週六晚上在宴會廳舉行的婚宴做準備的？ B：他們用白玫瑰、銀色蠟燭和柔和的燈光把會場佈置得很【高雅】，新娘的家人說看起來甚至比宣傳冊上的照片還要好。"
  },
  {
    "word": "stylishly",
    "pos": "adv.",
    "cn_def": "時髦地；有型地",
    "en_def": "in a fashionable and attractive way",
    "sentence": "A: Did the customers like the new uniforms that our restaurant staff started wearing at the beginning of this month? B: Yes, many customers said our waiters now look {{BLANK}} dressed in black shirts and gray aprons, and some even asked where they could buy the same aprons.",
    "cn": "A：顧客喜歡我們餐廳員工這個月初開始穿的新制服嗎？ B：喜歡，很多顧客說我們的服務生現在穿著黑襯衫和灰色圍裙，打扮得很【有型】，有些人甚至問哪裡可以買到同款圍裙。"
  },
  {
    "word": "dress well",
    "pos": "v.phr.",
    "cn_def": "穿著得體；穿得好看",
    "en_def": "to wear nice, suitable and attractive clothes",
    "sentence": "A: Do you have any advice for my brother, who has his first job interview at a large accounting firm in Taipei next Monday? B: He should {{BLANK}}, arrive fifteen minutes early, and bring extra copies of his résumé, because the interviewers will notice his appearance as soon as he enters the room.",
    "cn": "A：我弟弟下週一要去台北一家大型會計師事務所參加他的第一次面試，你有什麼建議嗎？ B：他應該【穿著得體】、提早十五分鐘到，並多帶幾份履歷，因為面試官在他一進房間就會注意到他的外表。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "搭配（服裝、顏色）",
    "en_def": "to choose clothes or colors that match well together",
    "sentence": "A: I bought a new green jacket for the company photo next week, but I am not sure what to wear with it. B: Try to {{BLANK}} it with a cream shirt and brown shoes, because those colors look natural together and will look good in the group picture outside the office.",
    "cn": "A：我為了下週的公司合照買了一件新的綠色夾克，但我不確定該搭配什麼。 B：試著用米色襯衫和棕色鞋子來【搭配】它，因為這些顏色放在一起看起來很自然，在辦公室外拍團體照時也會很好看。"
  },
  {
    "word": "accessorize",
    "pos": "v.",
    "cn_def": "用配件搭配；佩戴飾品",
    "en_def": "to add things like jewelry, belts or scarves to make clothes look better",
    "sentence": "A: I only packed one black dress for the three-day business trip to Singapore, so how can I make it look different every evening? B: You can {{BLANK}} it with a bright scarf one night, gold earrings the next, and a colorful belt on the last evening, and nobody will notice.",
    "cn": "A：去新加坡三天的出差我只帶了一件黑色洋裝，我要怎麼讓它每天晚上看起來都不一樣？ B：你可以第一晚用鮮豔的圍巾、第二晚用金耳環、最後一晚用彩色腰帶來【搭配】它，沒有人會發現的。"
  }
];

const MCQS = [
  {
    "q": "Mia reads every style magazine and buys the newest shoes each season. Her coworkers call her the office _____ because she loves clothes so much.",
    "options": [
      "fashionista",
      "ancestor",
      "landlord",
      "referee"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Long before anyone else, the young director wore sneakers with suits to work. Now that look is everywhere, so many people see him as a _____.",
    "options": [
      "spectator",
      "trendsetter",
      "tenant",
      "cashier"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Before the photo shoot, a professional _____ chose the clothes and shoes for each actor. She also checked that every outfit matched the company colors.",
    "options": [
      "plumber",
      "auditor",
      "stylist",
      "referee"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new jackets will be shown on the runway by a famous _____ next Friday. Tickets for the fashion show sold out within two hours.",
    "options": [
      "landlord",
      "surgeon",
      "mechanic",
      "model"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The cosmetics company paid a popular online _____ to promote its new lipstick. Her video reached over two million followers in one weekend.",
    "options": [
      "plumber",
      "influencer",
      "janitor",
      "auditor"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The actress's simple black dress made her a style _____ for many decades. Designers around the world still copy her graceful look today.",
    "options": [
      "icon",
      "invoice",
      "receipt",
      "deadline"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Fans waited outside the hotel for hours to see the _____ arrive. Security guards kept the excited crowd behind a rope near the entrance.",
    "options": [
      "invoice",
      "cabinet",
      "warranty",
      "celebrity"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The young fashion _____ sketched fifty new dresses for the winter collection. Her team then chose the best twelve to produce in the factory.",
    "options": [
      "cashier",
      "passenger",
      "designer",
      "referee"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Staff at the front desk must always look _____ when they greet hotel guests. The company gives each employee two new uniforms every year.",
    "options": [
      "well-dressed",
      "broken",
      "overdue",
      "delayed"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The awards dinner was held in an _____ ballroom with crystal lights and silk curtains. Guests were asked to wear formal evening clothes.",
    "options": [
      "exhausted",
      "accidental",
      "elegant",
      "overdue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The new perfume ad targets _____ customers who enjoy fine art and expensive restaurants. It will run in luxury magazines starting next month.",
    "options": [
      "broken",
      "sophisticated",
      "frozen",
      "spicy"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Teenagers are very _____ and often buy the clothes they see on social media. Our sales team should focus on this young group.",
    "options": [
      "waterproof",
      "overdue",
      "bankrupt",
      "fashion-conscious"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The hotel lobby has simple, _____ decorations in soft colors. Guests often say it feels calm and expensive without being too showy.",
    "options": [
      "careless",
      "painful",
      "tasteful",
      "harmful"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The butler's manners were _____, and he never made a single mistake. The hotel owner praised his perfect service at the annual meeting.",
    "options": [
      "impeccable",
      "damaged",
      "rough",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The sales manager always presents a _____ image, with pressed shirts and shiny shoes. Clients trust her because she looks so professional.",
    "options": [
      "broken",
      "careless",
      "sleepy",
      "polished"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The film premiere was a _____ evening with red carpets, flashing cameras, and designer gowns. Reporters described it as the night of the year.",
    "options": [
      "rainy",
      "glamorous",
      "empty",
      "sleepy"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "After weeks of practice, Daniel felt _____ about his presentation to the board. He spoke clearly and answered every question without hesitation.",
    "options": [
      "confident",
      "absent",
      "broken",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The brand's handbags have a _____ gold logo that customers recognize instantly. This unique symbol helps the company stand out from its competitors.",
    "options": [
      "hidden",
      "broken",
      "ordinary",
      "distinctive"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The judges rewarded the student whose design was the most _____. Nobody had ever seen anything like her colorful paper jackets before.",
    "options": [
      "tired",
      "frequent",
      "original",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Wearing a bright red suit to a conservative bank interview is a _____ choice. Most applicants prefer to wear dark gray or navy blue.",
    "options": [
      "sleepy",
      "bold",
      "frozen",
      "hollow"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The marketing team needs _____ ideas for the new shoe campaign. The manager wants something fresh that nobody in the industry has tried yet.",
    "options": [
      "overdue",
      "damaged",
      "frozen",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The office was renovated with a _____ design, including glass walls and smart lighting. Employees love how up to date it feels now.",
    "options": [
      "modern",
      "ancient",
      "rusty",
      "broken"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Sara collects _____ handbags from the 1960s and 1970s. She finds most of them at old markets and secondhand shops around the city.",
    "options": [
      "brand-new",
      "vintage",
      "digital",
      "frozen"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The receptionist's scarf, shoes, and bag were perfectly _____ in shades of blue. Her colleagues often ask her for fashion advice.",
    "options": [
      "cancelled",
      "delayed",
      "coordinated",
      "damaged"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Please fold the shirts _____ before placing them on the display table. Customers do not like to see messy piles of clothes in the store.",
    "options": [
      "neatly",
      "loudly",
      "angrily",
      "rarely"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "All interns should come to the client meeting _____ dressed in suits and ties. First impressions are very important in this business.",
    "options": [
      "loudly",
      "lazily",
      "smartly",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The bride walked _____ down the aisle in a long silk gown. Every guest in the garden stood up and smiled at her.",
    "options": [
      "angrily",
      "rarely",
      "loudly",
      "elegantly"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "If you want to make a good first impression at a job interview, you should _____. A clean suit and neat hair show respect.",
    "options": [
      "give up",
      "dress well",
      "fall apart",
      "break down"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The stylist helped the actor _____ his tie with his pocket square. Matching colors made his whole outfit look more balanced.",
    "options": [
      "coordinate",
      "postpone",
      "delete",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "You can _____ a plain black dress with a bright scarf and gold earrings. Small items like these can completely change your look.",
    "options": [
      "refund",
      "postpone",
      "delete",
      "accessorize"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "fashionista": {
    "pos": "n.",
    "en_def": "a person who loves fashion and always wears the newest styles",
    "cn_def": "時尚達人；熱愛時尚的人"
  },
  "trendsetter": {
    "pos": "n.",
    "en_def": "a person who starts a new style that other people copy",
    "cn_def": "引領潮流的人；潮流先驅"
  },
  "stylist": {
    "pos": "n.",
    "en_def": "a person whose job is to choose clothes, hair or makeup for people",
    "cn_def": "造型師"
  },
  "model": {
    "pos": "n.",
    "en_def": "a person who wears clothes in shows or photos to show them to buyers",
    "cn_def": "模特兒"
  },
  "influencer": {
    "pos": "n.",
    "en_def": "a person who affects what many people buy through social media",
    "cn_def": "網紅；有影響力的人"
  },
  "icon": {
    "pos": "n.",
    "en_def": "a famous person who many people admire as a symbol of something",
    "cn_def": "代表人物；偶像"
  },
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in movies, music or sports",
    "cn_def": "名人；明星"
  },
  "designer": {
    "pos": "n.",
    "en_def": "a person whose job is to plan how clothes or products will look",
    "cn_def": "設計師"
  },
  "well-dressed": {
    "pos": "adj.",
    "en_def": "wearing nice, suitable and attractive clothes",
    "cn_def": "衣著得體的；穿著講究的"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "fashionable and attractive in appearance",
    "cn_def": "時髦的；有型的"
  },
  "trendy": {
    "pos": "adj.",
    "en_def": "very fashionable and popular at the moment",
    "cn_def": "流行的；時髦的"
  },
  "chic": {
    "pos": "adj.",
    "en_def": "stylish and fashionable in a simple, attractive way",
    "cn_def": "時髦雅緻的；別緻的"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "graceful and attractive in a simple, high-quality way",
    "cn_def": "優雅的；高雅的"
  },
  "sophisticated": {
    "pos": "adj.",
    "en_def": "having a lot of knowledge and good taste about fashion, culture or the world",
    "cn_def": "有品味的；世故老練的"
  },
  "classy": {
    "pos": "adj.",
    "en_def": "stylish and of high quality in a way that shows good taste",
    "cn_def": "有格調的；高級的"
  },
  "fashion-conscious": {
    "pos": "adj.",
    "en_def": "caring a lot about wearing fashionable clothes",
    "cn_def": "注重時尚的"
  },
  "tasteful": {
    "pos": "adj.",
    "en_def": "attractive and showing good judgment about what is suitable",
    "cn_def": "有品味的；雅緻的"
  },
  "impeccable": {
    "pos": "adj.",
    "en_def": "perfect, with no mistakes or problems at all",
    "cn_def": "完美無缺的；無可挑剔的"
  },
  "polished": {
    "pos": "adj.",
    "en_def": "neat, smart and professional in appearance or manner",
    "cn_def": "優雅得體的；精緻的"
  },
  "glamorous": {
    "pos": "adj.",
    "en_def": "attractive and exciting in a rich, special way",
    "cn_def": "迷人的；光鮮亮麗的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "feeling sure about your own abilities or appearance",
    "cn_def": "有自信的"
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "easy to recognize because it is special or different",
    "cn_def": "與眾不同的；有特色的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from anything else; not copied",
    "cn_def": "原創的；新穎的"
  },
  "bold": {
    "pos": "adj.",
    "en_def": "brave and not afraid to look different; strong and bright",
    "cn_def": "大膽的；醒目的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "able to make new and interesting ideas or things",
    "cn_def": "有創意的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "using new styles, ideas or technology; not old-fashioned",
    "cn_def": "現代的；新式的"
  },
  "vintage": {
    "pos": "adj.",
    "en_def": "old but of high quality and still attractive and fashionable",
    "cn_def": "復古的；古著的"
  },
  "coordinated": {
    "pos": "adj.",
    "en_def": "matching well together in color or style",
    "cn_def": "搭配協調的"
  },
  "neatly": {
    "pos": "adv.",
    "en_def": "in a tidy, careful and organized way",
    "cn_def": "整齊地；整潔地"
  },
  "smartly": {
    "pos": "adv.",
    "en_def": "in a neat, stylish and fashionable way",
    "cn_def": "俐落地；體面地"
  },
  "elegantly": {
    "pos": "adv.",
    "en_def": "in a graceful and attractive way",
    "cn_def": "優雅地；高雅地"
  },
  "stylishly": {
    "pos": "adv.",
    "en_def": "in a fashionable and attractive way",
    "cn_def": "時髦地；有型地"
  },
  "dress well": {
    "pos": "v.phr.",
    "en_def": "to wear nice, suitable and attractive clothes",
    "cn_def": "穿著得體；穿得好看"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to choose clothes or colors that match well together",
    "cn_def": "搭配（服裝、顏色）"
  },
  "accessorize": {
    "pos": "v.",
    "en_def": "to add things like jewelry, belts or scarves to make clothes look better",
    "cn_def": "用配件搭配；佩戴飾品"
  }
};

const EXTRA_GLOSSES = {};
