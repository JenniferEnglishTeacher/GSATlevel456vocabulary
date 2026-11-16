// Topic 229 Quiz Data: Makeup 化妝
// Source word list: https://www.examword.com/group-topic/makeup — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T229 - Makeup 化妝",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cosmetics",
    "pos": "n.",
    "cn_def": "化妝品",
    "en_def": "products such as makeup that people put on the face or body",
    "sentence": "A: Our department store is planning a big holiday sale next month, so which floor do you think will attract the most shoppers? B: I think the {{BLANK}} counter on the first floor will be the busiest, because many customers like to buy lipstick and skin care sets as gifts.",
    "cn": "A：我們百貨公司下個月要辦大型假期特賣，你覺得哪一層樓會吸引最多購物者？ B：我認為一樓的【化妝品】專櫃會最忙，因為很多顧客喜歡買口紅和保養品組合當禮物。"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "cn_def": "粉底",
    "en_def": "a skin-colored cream put on the face before other makeup",
    "sentence": "A: The television studio lights are very bright this afternoon, so what should the makeup artist do before the manager's interview starts at three? B: She should put a thin layer of {{BLANK}} on his face first, so his skin looks even and doesn't shine under the strong lights.",
    "cn": "A：今天下午電視攝影棚的燈光非常亮，那在經理三點的訪問開始前，化妝師應該做什麼？ B：她應該先在他臉上上一層薄薄的【粉底】，這樣他的膚色看起來均勻，在強光下也不會反光。"
  },
  {
    "word": "concealer",
    "pos": "n.",
    "cn_def": "遮瑕膏",
    "en_def": "makeup used to hide dark circles or spots on the skin",
    "sentence": "A: I stayed up late finishing the sales report, and now I have dark circles under my eyes before our important client meeting, so what can I do quickly? B: Try a little {{BLANK}} under your eyes, and then gently pat it with your finger so nobody will notice how tired you are.",
    "cn": "A：我熬夜完成業績報告，現在在重要客戶會議前眼睛下面有黑眼圈，我能很快做什麼補救？ B：在眼睛下方擦一點【遮瑕膏】，然後用手指輕拍，這樣就沒人會注意到你有多累了。"
  },
  {
    "word": "powder",
    "pos": "n.",
    "cn_def": "蜜粉；粉",
    "en_def": "a fine dry makeup product used to stop the face from looking shiny",
    "sentence": "A: It's so hot and humid in Taipei this week, and my face always looks oily by lunchtime when I meet customers, so do you have any advice? B: Keep a small compact of {{BLANK}} in your bag, and use it after lunch to reduce the shine before your afternoon appointments.",
    "cn": "A：這週台北又熱又潮濕，我和客戶見面時臉到中午總是看起來油油的，你有什麼建議嗎？ B：在包包裡放一盒小的【蜜粉】，午餐後用它來減少油光，再去參加下午的約會。"
  },
  {
    "word": "blush",
    "pos": "n.",
    "cn_def": "腮紅",
    "en_def": "pink or red makeup put on the cheeks",
    "sentence": "A: The photographer said I look a little pale in the test photos for the company website, so how can I make my face look healthier before we try again? B: Add some pink {{BLANK}} to your cheeks, and smile while you put it on so the color stays in the right place.",
    "cn": "A：攝影師說我在公司網站的試拍照片中看起來有點蒼白，在重拍之前我要怎麼讓臉色看起來更健康？ B：在臉頰上加一點粉色【腮紅】，上妝時微笑，這樣顏色就會落在正確的位置。"
  },
  {
    "word": "bronzer",
    "pos": "n.",
    "cn_def": "修容粉；古銅粉",
    "en_def": "makeup that gives the skin a warm, sun-tanned look",
    "sentence": "A: Our summer advertising campaign is about beach holidays, so how will the makeup team make the models look like they have spent a week in the sun? B: They will brush some {{BLANK}} on the models' cheeks and foreheads, which gives the skin a warm, golden color without any real sunbathing.",
    "cn": "A：我們夏季的廣告活動主題是海灘假期，化妝團隊要怎麼讓模特兒看起來像在陽光下待了一週？ B：他們會在模特兒的臉頰和額頭刷上一些【古銅修容粉】，不必真的曬太陽就能讓皮膚呈現溫暖的金色。"
  },
  {
    "word": "highlighter",
    "pos": "n.",
    "cn_def": "打亮粉；亮采",
    "en_def": "shiny makeup used to make parts of the face look brighter",
    "sentence": "A: The evening award ceremony will be filmed for social media, so what product can help the speakers' faces look bright and fresh on camera? B: The makeup artist will use a little {{BLANK}} on their cheekbones and noses, because it catches the stage lights and makes everyone look more awake.",
    "cn": "A：晚上的頒獎典禮會拍攝放上社群媒體，有什麼產品能讓講者的臉在鏡頭前看起來明亮又有精神？ B：化妝師會在他們的顴骨和鼻樑上用一點【打亮粉】，因為它能反射舞台燈光，讓大家看起來更有精神。"
  },
  {
    "word": "eyeshadow",
    "pos": "n.",
    "cn_def": "眼影",
    "en_def": "colored makeup put on the eyelids",
    "sentence": "A: Our cosmetics shop is getting a new autumn product line next week, so which items should we put in the front window to attract young customers? B: Let's display the new {{BLANK}} in brown and gold colors, because many young women want to change the look of their eyes for the season.",
    "cn": "A：我們的化妝品店下週會進一批新的秋季產品，我們該把哪些商品放在前面的櫥窗吸引年輕顧客？ B：我們來展示新的棕色和金色【眼影】吧，因為很多年輕女性想配合季節改變眼妝。"
  },
  {
    "word": "eyeliner",
    "pos": "n.",
    "cn_def": "眼線筆；眼線液",
    "en_def": "makeup used to draw a line along the edge of the eyelids",
    "sentence": "A: The airline wants all cabin crew to have a neat and similar look during the long international flights, so what does the training manual say about eye makeup? B: It says staff should use a thin line of black or brown {{BLANK}} that still looks tidy after twelve hours.",
    "cn": "A：航空公司希望所有空服員在長途國際航班中都有整齊一致的外型，訓練手冊對眼妝有什麼規定？ B：上面說員工應該畫上細細的一條黑色或棕色【眼線】，即使過了十二個小時看起來依然整齊。"
  },
  {
    "word": "mascara",
    "pos": "n.",
    "cn_def": "睫毛膏",
    "en_def": "makeup used to make the eyelashes look darker and longer",
    "sentence": "A: I'm going to a business dinner straight after work tonight, and I only have five minutes to change my look, so what's the fastest thing to add? B: Just put on some {{BLANK}} to make your eyelashes darker and longer, and your eyes will look bigger and more awake right away.",
    "cn": "A：我今晚下班後要直接去參加商務晚餐，只有五分鐘可以改變造型，最快能加上什麼？ B：只要刷一點【睫毛膏】讓睫毛更黑更長，你的眼睛馬上就會看起來更大、更有精神。"
  },
  {
    "word": "lipstick",
    "pos": "n.",
    "cn_def": "口紅",
    "en_def": "colored makeup for the lips, usually in a small stick",
    "sentence": "A: Our sales of lip products dropped last quarter, so what new item could bring customers back to the cosmetics counter before Valentine's Day? B: We could launch a red {{BLANK}} in a gold case, which looks like a luxury gift and lasts for several hours on the lips.",
    "cn": "A：上一季我們唇部產品的銷量下滑，在情人節前有什麼新品能把顧客帶回化妝品專櫃？ B：我們可以推出一款裝在金色管身裡的紅色【口紅】，它看起來像奢華禮物，而且在唇上可以持久好幾個小時。"
  },
  {
    "word": "lip gloss",
    "pos": "n.phr.",
    "cn_def": "唇蜜",
    "en_def": "a shiny makeup product for the lips",
    "sentence": "A: Teenage customers often ask our staff for something cheap and shiny for their lips that doesn't look too heavy, so what should we recommend to them? B: Show them the clear {{BLANK}} near the cash register, because it adds a light shine and costs much less than our designer lipsticks.",
    "cn": "A：青少年顧客常問我們的店員有沒有便宜、亮亮又不會太厚重的唇部產品，我們該推薦什麼？ B：帶他們看收銀台附近的透明【唇蜜】，因為它能增添淡淡光澤，而且比我們的名牌口紅便宜得多。"
  },
  {
    "word": "lip balm",
    "pos": "n.phr.",
    "cn_def": "護唇膏",
    "en_def": "a cream that protects dry or cracked lips",
    "sentence": "A: The air in our office is very dry because the air conditioner runs all day, and my lips are cracking, so what should I keep on my desk? B: Keep a small stick of {{BLANK}} in your drawer and use it a few times a day, especially after drinking coffee or eating lunch.",
    "cn": "A：我們辦公室冷氣整天開著，空氣很乾，我的嘴唇都乾裂了，我該在桌上放什麼？ B：在抽屜裡放一支小的【護唇膏】，一天擦幾次，尤其是喝完咖啡或吃完午餐之後。"
  },
  {
    "word": "primer",
    "pos": "n.",
    "cn_def": "妝前乳；隔離霜",
    "en_def": "a product put on the skin before makeup to help it last longer",
    "sentence": "A: My makeup usually disappears by the middle of the afternoon during long trade show days, so how can I make it stay on until the evening? B: Use a {{BLANK}} on your clean skin before your foundation, because it creates a smooth base and helps the makeup last much longer.",
    "cn": "A：在漫長的商展日裡，我的妝通常到下午中段就掉光了，要怎麼讓它維持到晚上？ B：在擦粉底前，先在乾淨的皮膚上使用【妝前乳】，因為它能打造平滑的底，讓妝容維持得更久。"
  },
  {
    "word": "remover",
    "pos": "n.",
    "cn_def": "卸妝液；去除劑",
    "en_def": "a liquid or cream used to take off makeup",
    "sentence": "A: Our hotel guests sometimes complain that the white towels get dirty with makeup after one use, so what can housekeeping add to each bathroom to solve this? B: We could put a small bottle of makeup {{BLANK}} and some cotton pads beside the sink, so guests clean their faces before using the towels.",
    "cn": "A：我們飯店的客人有時抱怨白毛巾用一次就沾滿化妝品，房務部可以在每間浴室加什麼來解決這個問題？ B：我們可以在洗手台旁放一小瓶【卸妝液】和一些化妝棉，這樣客人會在用毛巾前先清潔臉部。"
  },
  {
    "word": "brush",
    "pos": "n.",
    "cn_def": "刷子；化妝刷",
    "en_def": "a tool with soft hairs used to put on makeup",
    "sentence": "A: Customers often ask why their powder looks heavy and uneven, even though they buy expensive products from our store, so what tool should we suggest? B: Suggest a soft, large {{BLANK}} for the powder, because using fingers often puts too much product on one area of the face.",
    "cn": "A：顧客常問為什麼他們在我們店買了昂貴的產品，蜜粉看起來還是厚重又不均勻，我們該建議什麼工具？ B：建議他們用一支柔軟的大【刷子】上蜜粉，因為用手指常常會在臉上某一處上太多產品。"
  },
  {
    "word": "sponge",
    "pos": "n.",
    "cn_def": "海綿；粉撲",
    "en_def": "a soft object used to spread makeup on the skin",
    "sentence": "A: The new trainees at our beauty counter are using their fingers to spread liquid foundation, and the results look streaky, so what should I teach them tomorrow? B: Show them how to use a damp {{BLANK}} and bounce it gently on the skin, which gives a much smoother and more natural finish.",
    "cn": "A：我們美妝專櫃的新進人員用手指推開粉底液，結果看起來一條一條的，我明天應該教他們什麼？ B：示範給他們看如何用濕的【海綿】在皮膚上輕輕按壓，這樣效果會更平滑自然。"
  },
  {
    "word": "palette",
    "pos": "n.",
    "cn_def": "眼影盤；彩妝盤",
    "en_def": "a flat case holding several colors of makeup",
    "sentence": "A: Many business travelers say they don't have enough space in their bags for lots of separate makeup products, so what could we sell them? B: We could sell a small {{BLANK}} with eight eyeshadow colors and a mirror, which fits easily in a carry-on bag and replaces many items.",
    "cn": "A：很多商務旅客說他們的包包沒有足夠空間放很多單獨的彩妝品，我們可以賣給他們什麼？ B：我們可以賣一個附鏡子、有八種眼影顏色的小【彩妝盤】，它很容易放進隨身行李，還能取代很多東西。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "色號；色調",
    "en_def": "one particular type of a color",
    "sentence": "A: A customer bought a foundation online last week, but she says it looks too dark on her face, so can she exchange it at our store? B: Yes, she can bring it back with the receipt, and our staff will help her test a lighter {{BLANK}} on her jawline before choosing.",
    "cn": "A：有位顧客上週在網路上買了粉底，但她說擦在臉上太暗，她可以來我們店裡換嗎？ B：可以，她可以帶著收據拿回來，我們的店員會先在她的下顎線試擦較淺的【色號】再讓她選擇。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "膚色；色調",
    "en_def": "the natural color of a person's skin",
    "sentence": "A: Our brand wants to sell foundation in more countries next year, so what do we need to change in the product range before we enter new markets? B: We need many more colors for every skin {{BLANK}}, from very light to very dark, so every customer can find a good match.",
    "cn": "A：我們品牌明年想在更多國家販售粉底，在進入新市場前我們的產品線需要改變什麼？ B：我們需要為每一種【膚色】準備更多顏色，從非常淺到非常深，讓每位顧客都能找到適合的。"
  },
  {
    "word": "blend",
    "pos": "v.",
    "cn_def": "推勻；混合",
    "en_def": "to mix colors together so there is no clear line between them",
    "sentence": "A: In the video tutorial for our new eyeshadow, the edges of the colors look very sharp, so what should the presenter do differently when we film again? B: She should {{BLANK}} the two colors softly with a clean brush, so they mix together and there's no hard line on the eyelid.",
    "cn": "A：在我們新眼影的教學影片中，顏色的邊緣看起來很明顯，重拍時示範者應該怎麼做不一樣？ B：她應該用乾淨的刷子輕輕把兩種顏色【推勻】，讓它們融合在一起，眼皮上就不會有明顯的線條。"
  },
  {
    "word": "apply",
    "pos": "v.",
    "cn_def": "塗抹；擦上",
    "en_def": "to put a cream or substance on a surface",
    "sentence": "A: Customers keep asking how much sunscreen they need under their makeup before going out at noon, so what should our staff tell them? B: Tell them to {{BLANK}} about a teaspoon to the whole face every morning, and to wait two minutes before putting on foundation.",
    "cn": "A：顧客一直問中午出門前妝底下需要擦多少防曬，我們的店員該怎麼告訴他們？ B：告訴他們每天早上整臉【塗抹】大約一茶匙的量，並且等兩分鐘再上粉底。"
  },
  {
    "word": "remove",
    "pos": "v.",
    "cn_def": "卸除；去除",
    "en_def": "to take something off",
    "sentence": "A: Some of our gym members go straight to exercise after work with their full makeup on, so what advice can the trainers give them about their skin? B: The trainers should suggest that they {{BLANK}} their makeup in the changing room before working out, because sweat and makeup together can block the skin.",
    "cn": "A：我們有些健身房會員下班後帶著全妝直接去運動，教練可以給他們什麼皮膚方面的建議？ B：教練應該建議他們運動前先在更衣室【卸】妝，因為汗水和化妝品混在一起會阻塞皮膚。"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "cn_def": "增強；突顯",
    "en_def": "to improve something or make it look better",
    "sentence": "A: The marketing director wants a natural look for the new brand ambassador in the photos, so how much makeup should the artist use on her? B: Just enough to {{BLANK}} her natural features, such as her eyes and cheekbones, without making her look like a different person.",
    "cn": "A：行銷總監希望新品牌大使在照片中呈現自然的樣子，化妝師應該在她臉上用多少妝？ B：剛好能【突顯】她天生的五官就好，例如眼睛和顴骨，而不會讓她看起來像另一個人。"
  },
  {
    "word": "smudge",
    "pos": "v.",
    "cn_def": "弄髒；暈開",
    "en_def": "to make makeup or ink messy by rubbing it",
    "sentence": "A: I usually wear eye makeup to work, but by four o'clock it always looks messy and dark under my eyes, so what's going wrong? B: You probably {{BLANK}} it when you rub your eyes at your computer, so try not to touch your face and choose a long-lasting formula.",
    "cn": "A：我上班通常會化眼妝，但到四點總是眼睛下方看起來又髒又黑，是哪裡出了問題？ B：你可能是在電腦前揉眼睛時把它【弄暈】了，所以試著別碰臉，並選擇持久型的配方。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not letting water in or not washed off by water",
    "sentence": "A: Our wedding planning company organizes many outdoor ceremonies in summer, and brides often cry during the vows, so what kind of mascara should our artists use? B: They should always use {{BLANK}} mascara, because it won't run down the bride's face when she cries or when it suddenly rains.",
    "cn": "A：我們婚禮企劃公司夏天會辦很多戶外典禮，新娘常在誓詞時哭，我們的化妝師該用哪種睫毛膏？ B：他們應該一律用【防水】睫毛膏，因為新娘哭的時候或突然下雨時，它都不會順著臉流下來。"
  },
  {
    "word": "matte",
    "pos": "adj.",
    "cn_def": "霧面的；無光澤的",
    "en_def": "not shiny",
    "sentence": "A: Customers with oily skin often complain that their face looks shiny in office photos, so which lipstick and foundation finish should we recommend? B: Recommend products with a {{BLANK}} finish, because they absorb oil and don't reflect the camera flash as much as shiny ones.",
    "cn": "A：油性肌膚的顧客常抱怨他們在辦公室照片中臉看起來油亮，我們應該推薦哪種質地的口紅和粉底？ B：推薦【霧面】質地的產品，因為它們能吸油，也不像亮面產品那樣反射相機閃光。"
  },
  {
    "word": "glossy",
    "pos": "adj.",
    "cn_def": "有光澤的；亮面的",
    "en_def": "smooth and shiny",
    "sentence": "A: The design team is choosing paper for our new beauty catalog, and they want the product photos to look bright and attractive, so which paper should they use? B: They should choose thick, {{BLANK}} paper, because the shiny surface makes the colors of the lipsticks and eyeshadows look rich.",
    "cn": "A：設計團隊正在為我們的新美妝型錄挑選紙張，他們希望產品照片看起來明亮又吸引人，該用哪種紙？ B：他們應該選厚的【亮面】紙，因為光亮的表面能讓口紅和眼影的顏色看起來很飽滿。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的",
    "en_def": "looking normal and not changed too much",
    "sentence": "A: Our company is hiring new receptionists, and the HR manager wants them to look friendly and professional at the front desk, so what makeup style suits the job? B: A light, {{BLANK}} look with soft colors suits the job best, because heavy makeup can seem too formal for greeting visitors.",
    "cn": "A：我們公司正在招聘新櫃檯接待員，人資經理希望他們在櫃檯看起來友善又專業，哪種妝容風格適合這份工作？ B：顏色柔和、清淡【自然】的妝容最適合，因為濃妝在接待訪客時可能顯得太正式。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "誇張的；引人注目的",
    "en_def": "very noticeable and exciting",
    "sentence": "A: The theater company needs makeup for its new show, and the audience will be sitting far from the stage, so how strong should the actors' makeup be? B: It should be quite {{BLANK}}, with dark eyeliner and bright lipstick, so people in the back rows can still see their faces clearly.",
    "cn": "A：劇團的新戲需要化妝，而觀眾會坐得離舞台很遠，演員的妝應該要多濃？ B：應該相當【誇張濃烈】，用深色眼線和鮮豔口紅，讓後排的人也能清楚看到他們的臉。"
  },
  {
    "word": "flawless",
    "pos": "adj.",
    "cn_def": "完美無瑕的",
    "en_def": "perfect, with no mistakes or marks",
    "sentence": "A: Our new foundation launch is next month, so what message should we use in the advertisements to show customers how good the product is? B: Let's say it gives {{BLANK}} skin that looks perfect all day, and show close-up photos of models with no spots or uneven areas.",
    "cn": "A：我們的新粉底下個月上市，廣告中應該用什麼訊息讓顧客知道產品有多好？ B：我們就說它能打造整天看起來完美的【無瑕】肌膚，並展示沒有斑點或不均勻處的模特兒特寫照片。"
  },
  {
    "word": "subtle",
    "pos": "adj.",
    "cn_def": "淡淡的；不明顯的",
    "en_def": "not strong or obvious",
    "sentence": "A: I'm meeting a conservative bank client tomorrow morning, and I don't want my makeup to take attention away from my presentation, so what colors should I wear? B: Choose {{BLANK}} colors like light brown and soft pink, so you look polished but the client focuses on your ideas.",
    "cn": "A：我明天早上要見一位保守的銀行客戶，我不希望妝容搶走簡報的焦點，我該用什麼顏色？ B：選擇淺棕色和淡粉色這類【低調柔和】的顏色，讓你看起來得體，但客戶會專注在你的想法上。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with a lot of attention to avoid mistakes",
    "sentence": "A: A customer had a skin reaction after trying a new cream at our counter last week, so how should our staff test products on customers from now on? B: They should {{BLANK}} read the ingredient list with the customer first, and then test a tiny amount on the back of her hand.",
    "cn": "A：上週有位顧客在我們專櫃試用新乳霜後皮膚過敏，從現在起我們的店員該如何讓顧客試用產品？ B：他們應該先和顧客一起【仔細地】閱讀成分表，然後在她的手背上試用極少量。"
  },
  {
    "word": "professionally",
    "pos": "adv.",
    "cn_def": "專業地",
    "en_def": "in a way that shows skill and training",
    "sentence": "A: The company photographer is coming on Friday to take new staff photos for our website, so should we just do our own makeup that morning? B: No, the manager has booked an artist, so everyone's makeup will be done {{BLANK}} in the meeting room before the photos are taken.",
    "cn": "A：公司攝影師週五要來幫我們拍網站用的新員工照，我們那天早上要自己化妝就好嗎？ B：不用，經理已經預約了化妝師，所以拍照前每個人都會在會議室由人【專業地】化好妝。"
  },
  {
    "word": "daily",
    "pos": "adv.",
    "cn_def": "每天地",
    "en_def": "every day",
    "sentence": "A: Our skin care consultant says many customers stop using their products after a week, so how can we help them keep a regular routine at home? B: We could send them a short reminder message and suggest they use the cream {{BLANK}}, both in the morning and before going to bed.",
    "cn": "A：我們的保養顧問說很多顧客用了一週就不再使用產品了，我們要怎麼幫他們在家維持固定的保養習慣？ B：我們可以傳簡短的提醒訊息給他們，並建議他們【每天】早上和睡前都使用這款乳霜。"
  }
];

const MCQS = [
  {
    "q": "The new shopping mall will open a large _____ section on the first floor. It will sell lipstick, perfume, and skin care products.",
    "options": [
      "cosmetics",
      "furniture",
      "electronics",
      "groceries"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The makeup artist spread a thin layer of _____ over the presenter's face. This made her skin tone look smooth and even.",
    "options": [
      "mascara",
      "foundation",
      "eyeliner",
      "lip balm"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Lin used a little _____ to cover the dark circles under her eyes. She wanted to look fresh for the job interview.",
    "options": [
      "eyeliner",
      "mascara",
      "concealer",
      "lip gloss"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "To stop his forehead from shining under the studio lights, the news anchor used some loose _____. The camera then showed no oily areas.",
    "options": [
      "lip balm",
      "remover",
      "mascara",
      "powder"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The model looked pale, so the artist added a touch of pink _____ to her cheeks. Her face immediately looked healthier and warmer.",
    "options": [
      "eyeliner",
      "blush",
      "primer",
      "remover"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "For the summer beach advertisement, the team brushed _____ onto the actors' faces. It gave their skin a warm, sun-tanned color.",
    "options": [
      "bronzer",
      "mascara",
      "lip balm",
      "eyeliner"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "A small amount of shiny _____ on the cheekbones can make a face look brighter. Many presenters use it before going on stage.",
    "options": [
      "remover",
      "lip balm",
      "concealer",
      "highlighter"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The store's best-selling _____ comes in twelve colors for the eyelids. Customers often buy the gold and brown shades together for parties.",
    "options": [
      "lip balm",
      "foundation",
      "eyeshadow",
      "powder"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Flight attendants are asked to draw a thin line of black _____ along their eyelids. The airline believes this looks neat and professional.",
    "options": [
      "eyeliner",
      "blush",
      "bronzer",
      "lip balm"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "This new _____ makes eyelashes look longer and thicker after just one coat. It also does not fall onto the cheeks during the day.",
    "options": [
      "blush",
      "foundation",
      "mascara",
      "primer"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The brand released a limited red _____ for Valentine's Day this year. It sold out within three days at most department stores in Taipei.",
    "options": [
      "eyeliner",
      "lipstick",
      "concealer",
      "bronzer"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Teenagers often prefer a clear, shiny _____ instead of a heavy lipstick. It is cheaper and adds a light shine to the lips.",
    "options": [
      "eyeliner",
      "concealer",
      "bronzer",
      "lip gloss"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Because the office air conditioner makes the air very dry, many employees keep _____ on their desks. It stops their lips from cracking.",
    "options": [
      "eyeshadow",
      "bronzer",
      "lip balm",
      "highlighter"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Put on a good _____ before your foundation if you have a long day ahead. It helps your makeup stay in place for many hours.",
    "options": [
      "primer",
      "remover",
      "lip gloss",
      "mascara"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The travel-sized _____ contains eight eyeshadow colors and a small mirror. Business travelers like it because it saves space in their luggage.",
    "options": [
      "sponge",
      "remover",
      "brush",
      "palette"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The foundation is available in twenty different colors for different skin types. Staff will help each customer find the right _____ before buying.",
    "options": [
      "sponge",
      "shade",
      "brush",
      "primer"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Use a clean brush to _____ the two eyeshadow colors together. There should be no hard line between them on the eyelid.",
    "options": [
      "blend",
      "remove",
      "smudge",
      "enhance"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ sunscreen to your face every morning before putting on any makeup. Wait two minutes so that it can absorb properly.",
    "options": [
      "remove",
      "smudge",
      "blend",
      "apply"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Doctors suggest that you always _____ your makeup completely before going to bed. Sleeping with it on can cause skin problems.",
    "options": [
      "apply",
      "blend",
      "remove",
      "enhance"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Good lighting in the photo studio can _____ the models' natural features. Then the artists do not need to use heavy makeup.",
    "options": [
      "smudge",
      "enhance",
      "remove",
      "blend"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Try not to rub your eyes while working at the computer. Touching your face can easily _____ your eyeliner and mascara.",
    "options": [
      "enhance",
      "apply",
      "blend",
      "smudge"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The bride wore _____ mascara during the outdoor ceremony. Even when it started raining, her eye makeup stayed perfectly in place.",
    "options": [
      "waterproof",
      "glossy",
      "dramatic",
      "subtle"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "People with oily skin often prefer a foundation with a _____ finish. It reduces shine and looks better in office photos.",
    "options": [
      "waterproof",
      "matte",
      "dramatic",
      "flawless"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new beauty catalog will be printed on thick, _____ paper. The shiny surface makes the product colors look bright and rich.",
    "options": [
      "waterproof",
      "subtle",
      "glossy",
      "natural"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "For job interviews, experts recommend a light and _____ makeup style. Heavy colors may distract the interviewer from what you are saying.",
    "options": [
      "dramatic",
      "waterproof",
      "glossy",
      "natural"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Stage actors usually wear very _____ makeup with dark eyeliner and bright lips. This helps people in the back rows see their faces.",
    "options": [
      "dramatic",
      "subtle",
      "natural",
      "flawless"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The advertisement promises _____ skin with no visible spots or marks. However, some customers say the results are not that perfect.",
    "options": [
      "waterproof",
      "glossy",
      "flawless",
      "subtle"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Ms. Chen chose _____ colors for her client meeting, such as soft pink and light brown. She wanted people to focus on her presentation.",
    "options": [
      "dramatic",
      "subtle",
      "glossy",
      "waterproof"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Customers with sensitive skin should _____ read the list of ingredients before buying. Some chemicals in cosmetics can cause skin reactions.",
    "options": [
      "daily",
      "professionally",
      "rarely",
      "carefully"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "All the speakers at the awards ceremony had their makeup done _____ backstage. The company hired three experienced artists for the evening.",
    "options": [
      "carefully",
      "daily",
      "professionally",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "cosmetics": {
    "pos": "n.",
    "en_def": "products such as makeup that people put on the face or body",
    "cn_def": "化妝品"
  },
  "foundation": {
    "pos": "n.",
    "en_def": "a skin-colored cream put on the face before other makeup",
    "cn_def": "粉底"
  },
  "concealer": {
    "pos": "n.",
    "en_def": "makeup used to hide dark circles or spots on the skin",
    "cn_def": "遮瑕膏"
  },
  "powder": {
    "pos": "n.",
    "en_def": "a fine dry makeup product used to stop the face from looking shiny",
    "cn_def": "蜜粉；粉"
  },
  "blush": {
    "pos": "n.",
    "en_def": "pink or red makeup put on the cheeks",
    "cn_def": "腮紅"
  },
  "bronzer": {
    "pos": "n.",
    "en_def": "makeup that gives the skin a warm, sun-tanned look",
    "cn_def": "修容粉；古銅粉"
  },
  "highlighter": {
    "pos": "n.",
    "en_def": "shiny makeup used to make parts of the face look brighter",
    "cn_def": "打亮粉；亮采"
  },
  "eyeshadow": {
    "pos": "n.",
    "en_def": "colored makeup put on the eyelids",
    "cn_def": "眼影"
  },
  "eyeliner": {
    "pos": "n.",
    "en_def": "makeup used to draw a line along the edge of the eyelids",
    "cn_def": "眼線筆；眼線液"
  },
  "mascara": {
    "pos": "n.",
    "en_def": "makeup used to make the eyelashes look darker and longer",
    "cn_def": "睫毛膏"
  },
  "lipstick": {
    "pos": "n.",
    "en_def": "colored makeup for the lips, usually in a small stick",
    "cn_def": "口紅"
  },
  "lip gloss": {
    "pos": "n.phr.",
    "en_def": "a shiny makeup product for the lips",
    "cn_def": "唇蜜"
  },
  "lip balm": {
    "pos": "n.phr.",
    "en_def": "a cream that protects dry or cracked lips",
    "cn_def": "護唇膏"
  },
  "primer": {
    "pos": "n.",
    "en_def": "a product put on the skin before makeup to help it last longer",
    "cn_def": "妝前乳；隔離霜"
  },
  "remover": {
    "pos": "n.",
    "en_def": "a liquid or cream used to take off makeup",
    "cn_def": "卸妝液；去除劑"
  },
  "brush": {
    "pos": "n.",
    "en_def": "a tool with soft hairs used to put on makeup",
    "cn_def": "刷子；化妝刷"
  },
  "sponge": {
    "pos": "n.",
    "en_def": "a soft object used to spread makeup on the skin",
    "cn_def": "海綿；粉撲"
  },
  "palette": {
    "pos": "n.",
    "en_def": "a flat case holding several colors of makeup",
    "cn_def": "眼影盤；彩妝盤"
  },
  "shade": {
    "pos": "n.",
    "en_def": "one particular type of a color",
    "cn_def": "色號；色調"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the natural color of a person's skin",
    "cn_def": "膚色；色調"
  },
  "blend": {
    "pos": "v.",
    "en_def": "to mix colors together so there is no clear line between them",
    "cn_def": "推勻；混合"
  },
  "apply": {
    "pos": "v.",
    "en_def": "to put a cream or substance on a surface",
    "cn_def": "塗抹；擦上"
  },
  "remove": {
    "pos": "v.",
    "en_def": "to take something off",
    "cn_def": "卸除；去除"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve something or make it look better",
    "cn_def": "增強；突顯"
  },
  "smudge": {
    "pos": "v.",
    "en_def": "to make makeup or ink messy by rubbing it",
    "cn_def": "弄髒；暈開"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not letting water in or not washed off by water",
    "cn_def": "防水的"
  },
  "matte": {
    "pos": "adj.",
    "en_def": "not shiny",
    "cn_def": "霧面的；無光澤的"
  },
  "glossy": {
    "pos": "adj.",
    "en_def": "smooth and shiny",
    "cn_def": "有光澤的；亮面的"
  },
  "natural": {
    "pos": "adj.",
    "en_def": "looking normal and not changed too much",
    "cn_def": "自然的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "very noticeable and exciting",
    "cn_def": "誇張的；引人注目的"
  },
  "flawless": {
    "pos": "adj.",
    "en_def": "perfect, with no mistakes or marks",
    "cn_def": "完美無瑕的"
  },
  "subtle": {
    "pos": "adj.",
    "en_def": "not strong or obvious",
    "cn_def": "淡淡的；不明顯的"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with a lot of attention to avoid mistakes",
    "cn_def": "小心地；仔細地"
  },
  "professionally": {
    "pos": "adv.",
    "en_def": "in a way that shows skill and training",
    "cn_def": "專業地"
  },
  "daily": {
    "pos": "adv.",
    "en_def": "every day",
    "cn_def": "每天地"
  }
};

const EXTRA_GLOSSES = {};
