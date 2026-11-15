// Topic 66 Quiz Data: Color 顏色
// Source word list: https://www.examword.com/group-topic/color — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T66 - Color 顏色",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hue",
    "pos": "n.",
    "cn_def": "色調；色彩",
    "en_def": "a color or a type of color",
    "sentence": "A: The client from the hotel chain said the lobby design looks a little cold, so what changes should we make before Thursday's presentation? B: I suggest we choose a warmer {{BLANK}} for the walls, maybe a soft orange, because guests usually feel more relaxed when the space looks friendly and inviting.",
    "cn": "A：連鎖飯店的客戶說大廳設計看起來有點冷冰冰，我們在週四簡報前應該做哪些修改？ B：我建議牆面選擇比較溫暖的【色調】，也許是柔和的橘色，因為空間看起來友善又吸引人時，客人通常會覺得比較放鬆。"
  },
  {
    "word": "shade",
    "pos": "n.",
    "cn_def": "（顏色的）深淺；色度",
    "en_def": "a lighter or darker form of a color",
    "sentence": "A: The printer delivered our new brochures this morning, but the logo looks different from the one on our website, doesn't it? B: You're right, the blue is a slightly darker {{BLANK}} than our official color, so I'll call the printing company and ask them to correct it before the trade fair next week.",
    "cn": "A：印刷廠今天早上送來我們的新手冊，但標誌看起來跟網站上的不一樣，對吧？ B：你說得對，這個藍色的【深淺】比我們的官方顏色稍微深一點，所以我會打電話給印刷公司，請他們在下週商展前修正。"
  },
  {
    "word": "tint",
    "pos": "n.",
    "cn_def": "淡色；（玻璃的）色膜",
    "en_def": "a light amount of color added to something",
    "sentence": "A: Our sales team often drives clients around the city in the summer, so is there anything we can do to keep the company cars from getting so hot? B: The garage on Fifth Street can add a light gray {{BLANK}} to the windows, which blocks much of the strong sunlight but still lets the driver see clearly.",
    "cn": "A：我們的業務團隊夏天常開車載客戶在市區跑，有什麼辦法能讓公司車不要那麼熱嗎？ B：第五街的修車廠可以在車窗加上淡灰色的【色膜】，能擋掉大部分強烈的陽光，但駕駛仍然看得很清楚。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "色調",
    "en_def": "the general quality of a color, such as how warm or dark it is",
    "sentence": "A: The photographer sent us the pictures for the new catalog, but the manager thinks they look too cold and serious, so what can we do? B: We can ask the designer to adjust the overall {{BLANK}} of the photos so the colors feel softer, because our furniture should look friendly and welcoming to families.",
    "cn": "A：攝影師把新型錄的照片寄來了，但經理覺得看起來太冷、太嚴肅，我們能怎麼做？ B：我們可以請設計師調整照片的整體【色調】，讓顏色感覺柔和一點，因為我們的家具應該讓家庭覺得親切又溫馨。"
  },
  {
    "word": "pigment",
    "pos": "n.",
    "cn_def": "色素；顏料",
    "en_def": "a substance that gives color to paint, ink, or skin",
    "sentence": "A: Why are the art supplies from the new factory so much more expensive than the ones we sold last year? B: The company now uses a natural {{BLANK}} made from plants and minerals in all its paints, which is safer for children, and many schools are happy to pay a little more for that.",
    "cn": "A：為什麼新工廠的美術用品比我們去年賣的貴那麼多？ B：這家公司現在所有的顏料都使用由植物和礦物製成的天然【色素】，對孩子比較安全，很多學校也願意為此多付一點錢。"
  },
  {
    "word": "dye",
    "pos": "n.",
    "cn_def": "染料",
    "en_def": "a substance used to change the color of cloth or hair",
    "sentence": "A: The fashion company wants to promote its new T-shirts as environmentally friendly, but what makes them different from the ones other brands sell? B: Each shirt is colored with a plant-based {{BLANK}} that uses less water and no harmful chemicals, so the factory doesn't pollute the river near the village.",
    "cn": "A：這家服飾公司想把新款T恤宣傳成環保產品，但它們和其他品牌賣的有什麼不同？ B：每件衣服都是用植物性的【染料】染色，用水較少也沒有有害化學物質，所以工廠不會污染村子附近的河川。"
  },
  {
    "word": "palette",
    "pos": "n.",
    "cn_def": "配色；調色盤",
    "en_def": "a set of colors chosen for a design; a board for mixing paint",
    "sentence": "A: The marketing director wants all of our posters, websites, and shopping bags to look like they belong to the same brand, so how should we plan the design? B: Let's choose a simple {{BLANK}} of four or five colors and use only those everywhere, so customers will recognize our products immediately.",
    "cn": "A：行銷總監希望我們所有的海報、網站和購物袋看起來都屬於同一個品牌，那我們該怎麼規劃設計？ B：我們挑一組四到五種顏色的簡單【配色】，並且到處都只用這些顏色，這樣顧客就能立刻認出我們的產品。"
  },
  {
    "word": "vivid",
    "pos": "adj.",
    "cn_def": "鮮豔的",
    "en_def": "very bright and strong (of colors)",
    "sentence": "A: Our new restaurant is on a busy street with many other shops, so how can we make sure people notice it when they walk past? B: We should paint the front door and the sign in {{BLANK}} red and yellow, because strong colors catch people's attention even from across the road.",
    "cn": "A：我們的新餐廳在一條有很多其他店家的熱鬧街上，要怎樣確保路人經過時會注意到它？ B：我們應該把大門和招牌漆成【鮮豔的】紅色和黃色，因為強烈的顏色即使隔著馬路也能吸引人們注意。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的；鮮亮的",
    "en_def": "strong, full of light, and easy to see",
    "sentence": "A: The children's hospital asked us to redesign the waiting room on the second floor, so what kind of colors do you think would work best? B: I'd use cheerful, {{BLANK}} colors like sunny yellow and sky blue, since young patients often feel nervous and a happy space can help them calm down.",
    "cn": "A：兒童醫院請我們重新設計二樓的候診室，你覺得哪種顏色最適合？ B：我會用開朗、【明亮的】顏色，像陽光黃和天空藍，因為小病人常會緊張，一個快樂的空間能幫助他們平靜下來。"
  },
  {
    "word": "pale",
    "pos": "adj.",
    "cn_def": "淡的；淺的；蒼白的",
    "en_def": "light in color; not strong",
    "sentence": "A: The new meeting room feels very small and crowded, even though only eight people usually sit in there, so what can we do without moving any walls? B: Painting the walls a {{BLANK}} green or light gray would make the room look bigger, especially if we also add a large mirror near the window.",
    "cn": "A：新的會議室感覺很小又很擠，雖然通常只有八個人坐在裡面，不拆牆的話我們能怎麼做？ B：把牆漆成【淺】綠色或淺灰色會讓房間看起來比較大，尤其是如果我們也在窗戶旁加一面大鏡子的話。"
  },
  {
    "word": "dark",
    "pos": "adj.",
    "cn_def": "深色的；暗的",
    "en_def": "close to black in color",
    "sentence": "A: The uniforms for our delivery drivers get dirty very quickly because they spend all day carrying boxes, so should we order different ones? B: Yes, I think {{BLANK}} blue or black uniforms would be more practical, because they hide dust and stains much better than the white shirts we have now.",
    "cn": "A：我們送貨司機的制服很快就髒了，因為他們整天都在搬箱子，我們應該訂不同的嗎？ B：是的，我覺得【深】藍色或黑色的制服比較實用，因為它們比我們現在的白襯衫更能遮住灰塵和污漬。"
  },
  {
    "word": "pastel",
    "pos": "adj.",
    "cn_def": "粉彩的；柔和淡色的",
    "en_def": "soft and light (of colors)",
    "sentence": "A: The bakery owner wants the packaging for her spring cookie collection to look gentle and sweet, so what do you recommend for the boxes? B: Soft {{BLANK}} colors such as light pink, mint green, and baby blue would be perfect, because they remind customers of flowers and the warm spring weather.",
    "cn": "A：烘焙坊老闆希望她春季餅乾系列的包裝看起來溫柔又甜美，你建議盒子用什麼？ B：柔和的【粉彩】色，例如淺粉紅、薄荷綠和嬰兒藍會很完美，因為它們會讓顧客聯想到花朵和溫暖的春天天氣。"
  },
  {
    "word": "neon",
    "pos": "adj.",
    "cn_def": "螢光的；霓虹的",
    "en_def": "extremely bright, as if giving off light",
    "sentence": "A: Our cycling club is going to ride along the coast road early in the morning, so what should members wear to stay safe in the traffic? B: Everyone should wear a {{BLANK}} yellow or orange vest, because drivers can see those very bright colors from far away, even when it's foggy.",
    "cn": "A：我們的自行車社要一大早沿著海岸公路騎車，社員該穿什麼才能在車流中保持安全？ B：每個人都應該穿【螢光】黃或橘色的背心，因為駕駛即使在起霧時也能從很遠的地方看到那些非常亮的顏色。"
  },
  {
    "word": "bold",
    "pos": "adj.",
    "cn_def": "醒目的；大膽的",
    "en_def": "strong and easy to notice",
    "sentence": "A: The sports drink company wants its new advertisement to feel exciting and full of energy, so which design should we show them first? B: Let's start with the version that uses {{BLANK}} red and black stripes, because those strong, confident colors match the young athletes in the photos very well.",
    "cn": "A：那家運動飲料公司希望新廣告感覺刺激又充滿活力，我們應該先給他們看哪個設計？ B：我們先從使用【醒目的】紅黑條紋的版本開始，因為那些強烈又有自信的顏色和照片中的年輕運動員非常搭。"
  },
  {
    "word": "muted",
    "pos": "adj.",
    "cn_def": "柔和的；不鮮豔的",
    "en_def": "soft and not bright",
    "sentence": "A: The law firm on the tenth floor wants its new office to look calm and serious for clients, so what kind of colors should we suggest? B: I'd recommend {{BLANK}} colors like soft gray, beige, and dusty blue, because bright colors might seem too playful for a professional legal office.",
    "cn": "A：十樓的律師事務所希望新辦公室給客戶沉穩、正式的感覺，我們該建議哪種顏色？ B：我會推薦【柔和的】顏色，像淺灰、米色和灰藍色，因為鮮豔的顏色對專業的法律事務所來說可能顯得太活潑。"
  },
  {
    "word": "warm",
    "pos": "adj.",
    "cn_def": "暖色的",
    "en_def": "(of colors) like red, orange, or yellow",
    "sentence": "A: Customers say our café feels a bit cold and empty in the evening, even though the food is good, so how can we change that feeling? B: We could use {{BLANK}} colors like orange and soft red on the walls and change the lights, so the space feels cozy and inviting at night.",
    "cn": "A：客人說我們咖啡館晚上感覺有點冷清，雖然食物很好吃，我們該怎麼改變這種感覺？ B：我們可以在牆上用橘色和柔和的紅色等【暖】色，並更換燈光，讓空間在晚上感覺舒適又吸引人。"
  },
  {
    "word": "cool",
    "pos": "adj.",
    "cn_def": "冷色的",
    "en_def": "(of colors) like blue or green",
    "sentence": "A: Our spa is opening a new relaxation room next month, and the owner wants guests to feel calm and peaceful the moment they enter, so what colors should we use? B: I'd choose {{BLANK}} colors such as light blue and soft green, because they remind people of water and nature.",
    "cn": "A：我們的水療中心下個月要開一間新的放鬆室，老闆希望客人一進門就感到平靜祥和，我們該用什麼顏色？ B：我會選擇淺藍和柔和的綠色等【冷】色系，因為它們會讓人聯想到水和大自然。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比",
    "en_def": "a clear difference between two colors or things",
    "sentence": "A: Some older customers have complained that the text on our website is hard to read, especially on their phones, so what should we fix first? B: We need more {{BLANK}} between the words and the background, so let's change the light gray text to black and keep the background white.",
    "cn": "A：有些年長的客人抱怨我們網站上的文字很難閱讀，尤其是在手機上，我們應該先修正什麼？ B：我們需要讓文字和背景之間有更多【對比】，所以把淺灰色的文字改成黑色，背景維持白色。"
  },
  {
    "word": "blend",
    "pos": "v.",
    "cn_def": "混合；融合",
    "en_def": "to mix together smoothly; to look like part of the surroundings",
    "sentence": "A: The new warehouse is next to a forest park, and some neighbors worried that it would look ugly from the walking trails, so what did the architects do? B: They painted the outside walls green and brown so the building would {{BLANK}} in with the trees, and now most visitors hardly notice it.",
    "cn": "A：新倉庫就在森林公園旁邊，有些鄰居擔心從步道看過去會很醜，建築師怎麼處理的？ B：他們把外牆漆成綠色和棕色，讓建築【融入】樹林中，現在大部分遊客幾乎不會注意到它。"
  },
  {
    "word": "fade",
    "pos": "v.",
    "cn_def": "褪色；變淡",
    "en_def": "to slowly lose color or brightness",
    "sentence": "A: The large banner outside our shop looked great when we hung it last spring, so why does it look so old and pale now? B: It has been in strong sunlight every afternoon for months, and cheap materials tend to {{BLANK}} quickly, so next time we should pay a little more for a sun-resistant one.",
    "cn": "A：我們店外面的大型布條去年春天掛上去時看起來很棒，為什麼現在看起來又舊又淡？ B：它好幾個月每天下午都曬在強烈的陽光下，而便宜的材料往往很快就會【褪色】，所以下次我們應該多花一點錢買抗曬的。"
  },
  {
    "word": "glow",
    "pos": "v.",
    "cn_def": "發光；發亮",
    "en_def": "to give out a soft, steady light",
    "sentence": "A: The hotel wants guests to find the emergency exits easily if the power suddenly goes off during the night, so what kind of signs should we install? B: We should buy special signs that {{BLANK}} in the dark for several hours, because they still work even when there is no electricity at all.",
    "cn": "A：飯店希望如果晚上突然停電，客人也能輕鬆找到緊急出口，我們應該安裝哪種標誌？ B：我們應該買能在黑暗中【發光】好幾個小時的特殊標誌，因為就算完全沒電也還能發揮作用。"
  },
  {
    "word": "sparkle",
    "pos": "v.",
    "cn_def": "閃閃發光",
    "en_def": "to shine with many small flashes of light",
    "sentence": "A: The jewelry store manager thinks the new diamond rings don't look as attractive in the window display as they did in the catalog, so what should we change? B: Let's add some small spotlights above the display, because diamonds {{BLANK}} much more when strong light hits them from different directions.",
    "cn": "A：珠寶店經理覺得新款鑽戒在櫥窗展示中不像在型錄裡那麼吸引人，我們該改什麼？ B：我們在展示櫃上方加一些小聚光燈吧，因為強光從不同方向照射時，鑽石會更加【閃閃發光】。"
  },
  {
    "word": "transparent",
    "pos": "adj.",
    "cn_def": "透明的",
    "en_def": "clear enough to see through",
    "sentence": "A: Customers keep asking whether our salads are fresh before they buy them, so how can we show them the quality more clearly at the counter? B: Let's switch to {{BLANK}} plastic boxes, so people can see the fresh vegetables inside without opening the lid, and they will feel more confident about buying them.",
    "cn": "A：客人在買沙拉前一直問是不是新鮮的，我們要怎麼在櫃檯更清楚地展現品質？ B：我們改用【透明的】塑膠盒吧，這樣大家不用打開蓋子就能看到裡面的新鮮蔬菜，買的時候也會更放心。"
  },
  {
    "word": "translucent",
    "pos": "adj.",
    "cn_def": "半透明的",
    "en_def": "letting some light through but not clear",
    "sentence": "A: The new office has glass walls around every meeting room, but some managers feel uncomfortable because everyone walking past can see exactly what they are doing, so any ideas? B: We could cover the glass with a {{BLANK}} film that still lets daylight in but makes the people inside look blurry from the hallway.",
    "cn": "A：新辦公室每間會議室周圍都是玻璃牆，但有些經理覺得不自在，因為每個經過的人都能清楚看到他們在做什麼，有什麼點子嗎？ B：我們可以在玻璃上貼一層【半透明的】膜，仍然能讓日光進來，但從走廊看裡面的人會變得模糊。"
  },
  {
    "word": "opaque",
    "pos": "adj.",
    "cn_def": "不透明的",
    "en_def": "not letting light through; impossible to see through",
    "sentence": "A: Our medicine bottles are currently made of clear plastic, but the lab report says sunlight can damage the pills inside, so what should we do about the packaging? B: We should switch to {{BLANK}} white bottles that block the light completely, even though they will cost the company a little more to produce.",
    "cn": "A：我們的藥瓶目前是用透明塑膠做的，但實驗室報告說陽光可能會損害裡面的藥丸，包裝該怎麼處理？ B：我們應該改用能完全阻擋光線的【不透明】白色瓶子，雖然公司的生產成本會稍微增加。"
  },
  {
    "word": "monochrome",
    "pos": "adj.",
    "cn_def": "單色的；黑白的",
    "en_def": "using only one color, or only black and white",
    "sentence": "A: The photography exhibition at the city gallery has received excellent reviews, so what makes it different from the other shows this year? B: All the photos are {{BLANK}}, using only black, white, and gray, and many visitors say the lack of color makes the faces and emotions in the pictures feel much stronger.",
    "cn": "A：市立美術館的攝影展得到極佳的評價，它和今年其他展覽有什麼不同？ B：所有照片都是【黑白單色的】，只用黑、白、灰，很多參觀者說缺少色彩反而讓照片中的臉孔和情感更加強烈。"
  },
  {
    "word": "multicolored",
    "pos": "adj.",
    "cn_def": "多色的；五顏六色的",
    "en_def": "having many different colors",
    "sentence": "A: The toy company asked us to design a new set of building blocks for young children, so what do you think will attract parents in the stores? B: A box of {{BLANK}} blocks in red, yellow, green, and blue would look fun on the shelf, and the different colors can also help kids learn while they play.",
    "cn": "A：玩具公司請我們為幼童設計一套新的積木，你覺得什麼會在店裡吸引家長？ B：一盒紅、黃、綠、藍的【五顏六色】積木放在架上看起來會很有趣，不同的顏色也能幫助孩子邊玩邊學習。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩繽紛的",
    "en_def": "full of bright colors",
    "sentence": "A: The night market downtown has become very popular with tourists from Japan and Korea, so what do visitors enjoy most when they walk around there? B: Most of them love the {{BLANK}} food stalls with their bright lights and signs, and they take hundreds of photos before they even start eating.",
    "cn": "A：市中心的夜市在日本和韓國遊客之間變得非常受歡迎，遊客在那裡逛的時候最喜歡什麼？ B：他們大多喜歡那些燈光和招牌明亮、【色彩繽紛的】小吃攤，甚至在開始吃之前就拍了好幾百張照片。"
  },
  {
    "word": "colorless",
    "pos": "adj.",
    "cn_def": "無色的",
    "en_def": "having no color",
    "sentence": "A: Some customers worry that our new cleaning spray might leave marks on their light carpets and white sofas, so what should we tell them? B: Please explain that the liquid is completely {{BLANK}} and has no dye in it, so it won't stain any fabric, even after many uses.",
    "cn": "A：有些客人擔心我們新的清潔噴霧可能會在他們的淺色地毯和白沙發上留下痕跡，我們該怎麼跟他們說？ B：請解釋這種液體完全【無色】，裡面也沒有染料，所以即使用了很多次也不會弄髒任何布料。"
  },
  {
    "word": "saturated",
    "pos": "adj.",
    "cn_def": "飽和的；濃烈的",
    "en_def": "(of colors) very strong and full",
    "sentence": "A: The photos for our travel brochure look a bit dull compared to the real beaches we visited, so can the designer improve them before we print? B: Yes, she can make the blues and greens more {{BLANK}} so the sea and trees look rich and deep, but she shouldn't go too far or they'll look fake.",
    "cn": "A：我們旅遊手冊的照片跟我們實際去過的海灘比起來有點黯淡，設計師能在印刷前改善嗎？ B：可以，她可以讓藍色和綠色更【飽和】，讓海和樹看起來濃郁深沉，但不能調過頭，不然會看起來很假。"
  },
  {
    "word": "gradient",
    "pos": "n.",
    "cn_def": "漸層",
    "en_def": "a slow change from one color to another",
    "sentence": "A: The new app's start screen looks too flat and boring compared with our competitors' apps, so what could the design team try this week? B: They could use a smooth {{BLANK}} that changes from deep purple at the top to light pink at the bottom, which would make the screen feel modern and lively.",
    "cn": "A：新應用程式的開始畫面和競爭對手的比起來太平淡無趣了，設計團隊這週可以試試什麼？ B：他們可以用一個從頂部深紫色到底部淺粉紅色的平順【漸層】，會讓畫面感覺現代又活潑。"
  },
  {
    "word": "iridescent",
    "pos": "adj.",
    "cn_def": "隨光變色的；彩虹色的",
    "en_def": "showing changing rainbow colors as the light moves",
    "sentence": "A: The cosmetics company wants its new perfume bottle to look special on the shelf next to dozens of other brands, so what material are they thinking about? B: They're testing an {{BLANK}} glass that shows different rainbow colors when customers turn it in the light, just like a soap bubble or a seashell.",
    "cn": "A：化妝品公司希望新的香水瓶在架上和幾十個其他品牌並列時看起來很特別，他們在考慮什麼材質？ B：他們在測試一種【隨光變幻彩虹色的】玻璃，當顧客在光線下轉動它時會呈現不同的顏色，就像肥皂泡或貝殼一樣。"
  },
  {
    "word": "neutral",
    "pos": "adj.",
    "cn_def": "中性色的",
    "en_def": "(of colors) not strong, such as beige, gray, or cream",
    "sentence": "A: We're furnishing twenty apartments for business travelers who usually stay for one or two months, so what color should we choose for the sofas and curtains? B: I think {{BLANK}} colors like beige, cream, and gray are the safest choice, because they match almost any style and most guests feel comfortable with them.",
    "cn": "A：我們要為通常停留一兩個月的商務旅客佈置二十間公寓，沙發和窗簾該選什麼顏色？ B：我認為米色、奶油色和灰色等【中性】色是最安全的選擇，因為它們幾乎能搭配任何風格，大部分客人也覺得很舒服。"
  },
  {
    "word": "pigmented",
    "pos": "adj.",
    "cn_def": "顯色的；色素飽滿的",
    "en_def": "having a lot of strong color",
    "sentence": "A: Our makeup customers often complain that cheap lipsticks need to be put on again and again during a long workday, so what should we say about the new product line? B: Tell them the new lipsticks are highly {{BLANK}}, so just one layer gives a rich color that lasts for eight hours without fading.",
    "cn": "A：我們的彩妝客人常抱怨便宜的口紅在漫長的工作日裡要一直補擦，關於新產品線我們該怎麼介紹？ B：告訴他們新口紅非常【顯色】，只要擦一層就能呈現濃郁的色彩，而且能持續八小時不褪色。"
  }
];

const MCQS = [
  {
    "q": "The medicine must be stored in _____ bottles because light can damage it. Clear containers are not allowed in our pharmacy.",
    "options": [
      "transparent",
      "opaque",
      "colorful",
      "pastel"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Red, orange, and yellow are known as _____ colors. Restaurants often use them because they make guests feel cozy and hungry.",
    "options": [
      "cool",
      "transparent",
      "opaque",
      "warm"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Water is a _____ liquid, so a stain on the carpet is usually caused by something else. Check whether the guest spilled coffee or juice.",
    "options": [
      "colorless",
      "vivid",
      "multicolored",
      "saturated"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The salads are sold in _____ boxes so customers can see the fresh vegetables inside. Sales have increased since the new packaging arrived.",
    "options": [
      "opaque",
      "dark",
      "transparent",
      "monochrome"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Under the evening sun, the old stone bridge took on a golden _____. Tourists stopped to take pictures of the beautiful color.",
    "options": [
      "hue",
      "contrast",
      "dye",
      "palette"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The law office was decorated in _____ grays and beiges. The quiet colors give clients a feeling of calm and seriousness.",
    "options": [
      "neon",
      "vivid",
      "multicolored",
      "muted"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "These safety stickers _____ in the dark for up to eight hours. They help workers find the exits during a power cut.",
    "options": [
      "blend",
      "fade",
      "glow",
      "sparkle"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The night market is famous for its _____ food stalls and bright signs. Tourists love taking photos there after dark.",
    "options": [
      "colorless",
      "colorful",
      "pale",
      "muted"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Black text on a yellow background creates a strong _____. That is why many warning signs use these two colors.",
    "options": [
      "contrast",
      "pigment",
      "dye",
      "palette"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Beige, gray, and cream are _____ colors that match almost any furniture. That is why many hotels choose them for guest rooms.",
    "options": [
      "neon",
      "multicolored",
      "vivid",
      "neutral"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The sports brand used _____ red stripes to show energy and power. Its new advertisement attracted many young customers.",
    "options": [
      "muted",
      "pale",
      "bold",
      "colorless"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The customer asked for a lighter _____ of blue for her kitchen cabinets. The store mixed the paint again until she was satisfied.",
    "options": [
      "pigment",
      "shade",
      "contrast",
      "gradient"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The diamonds in the display _____ like tiny stars whenever customers move around the counter. The lights above the case make the effect even stronger.",
    "options": [
      "blend",
      "fade",
      "sparkle",
      "shrink"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The festival poster uses _____ reds and oranges that catch everyone's eye. People notice it from the other side of the street.",
    "options": [
      "vivid",
      "pale",
      "muted",
      "colorless"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Blue and green are called _____ colors because they remind us of water and trees. Many spas use them to help guests relax.",
    "options": [
      "warm",
      "cool",
      "opaque",
      "neon"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The factory switched to a plant-based _____ for its cotton shirts. This change reduced the amount of chemicals flowing into the river.",
    "options": [
      "contrast",
      "gradient",
      "palette",
      "dye"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The baby store decorated its windows in soft _____ shades of pink and yellow. The gentle colors suit the newborn clothing perfectly.",
    "options": [
      "neon",
      "pastel",
      "dark",
      "opaque"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The exhibition shows only _____ photographs in black and white. Visitors say the lack of color makes the images more powerful.",
    "options": [
      "multicolored",
      "saturated",
      "neon",
      "monochrome"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The brand uses a limited _____ of only three colors. This helps customers recognize its products quickly on crowded shelves.",
    "options": [
      "palette",
      "contrast",
      "dye",
      "gradient"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Most banks prefer _____ blue uniforms for their staff. The color looks serious and hides marks well during a long working day.",
    "options": [
      "neon",
      "transparent",
      "dark",
      "multicolored"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "This paint uses a natural _____ made from crushed minerals. As a result, its colors stay strong for many years.",
    "options": [
      "pigment",
      "contrast",
      "gradient",
      "palette"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Road workers wear _____ orange vests so drivers can see them easily. The bright color is visible even in heavy rain.",
    "options": [
      "pale",
      "neon",
      "muted",
      "colorless"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The new hotel was designed to _____ in with the old buildings around it. Its brick walls match the historic street perfectly.",
    "options": [
      "fade",
      "glow",
      "sparkle",
      "blend"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The designer made the blues in the travel photos more _____. Now the sea looks deep and rich, just like it does in real life.",
    "options": [
      "pale",
      "colorless",
      "saturated",
      "muted"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Her face turned _____ when she heard that the client had canceled the contract. She sat down quietly and said nothing for a minute.",
    "options": [
      "neon",
      "multicolored",
      "transparent",
      "pale"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The toy company produces _____ building blocks in red, yellow, green, and blue. Parents like the cheerful look of the boxes.",
    "options": [
      "colorless",
      "monochrome",
      "multicolored",
      "opaque"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The website header changes smoothly from blue to purple in a gentle _____. Visitors say the effect looks modern and professional.",
    "options": [
      "pigment",
      "gradient",
      "dye",
      "palette"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The kindergarten classroom is painted in cheerful, _____ colors. The children seem happier since the walls were changed last summer.",
    "options": [
      "bright",
      "muted",
      "colorless",
      "opaque"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Cheap curtains often _____ after a few months in strong sunlight. It is worth paying more for fabric that keeps its color.",
    "options": [
      "blend",
      "fade",
      "glow",
      "sparkle"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The photographer gave the wedding pictures a warm golden _____. The couple loved the gentle, romantic feeling of the final album.",
    "options": [
      "dye",
      "contrast",
      "palette",
      "tone"
    ],
    "answer": 3,
    "vocabIndex": 3
  }
];

const LOOKUP = {
  "hue": {
    "pos": "n.",
    "en_def": "a color or a type of color",
    "cn_def": "色調；色彩"
  },
  "shade": {
    "pos": "n.",
    "en_def": "a lighter or darker form of a color",
    "cn_def": "（顏色的）深淺；色度"
  },
  "tint": {
    "pos": "n.",
    "en_def": "a light amount of color added to something",
    "cn_def": "淡色；（玻璃的）色膜"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the general quality of a color, such as how warm or dark it is",
    "cn_def": "色調"
  },
  "pigment": {
    "pos": "n.",
    "en_def": "a substance that gives color to paint, ink, or skin",
    "cn_def": "色素；顏料"
  },
  "dye": {
    "pos": "n.",
    "en_def": "a substance used to change the color of cloth or hair",
    "cn_def": "染料"
  },
  "palette": {
    "pos": "n.",
    "en_def": "a set of colors chosen for a design; a board for mixing paint",
    "cn_def": "配色；調色盤"
  },
  "vivid": {
    "pos": "adj.",
    "en_def": "very bright and strong (of colors)",
    "cn_def": "鮮豔的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "strong, full of light, and easy to see",
    "cn_def": "明亮的；鮮亮的"
  },
  "pale": {
    "pos": "adj.",
    "en_def": "light in color; not strong",
    "cn_def": "淡的；淺的；蒼白的"
  },
  "dark": {
    "pos": "adj.",
    "en_def": "close to black in color",
    "cn_def": "深色的；暗的"
  },
  "pastel": {
    "pos": "adj.",
    "en_def": "soft and light (of colors)",
    "cn_def": "粉彩的；柔和淡色的"
  },
  "neon": {
    "pos": "adj.",
    "en_def": "extremely bright, as if giving off light",
    "cn_def": "螢光的；霓虹的"
  },
  "bold": {
    "pos": "adj.",
    "en_def": "strong and easy to notice",
    "cn_def": "醒目的；大膽的"
  },
  "muted": {
    "pos": "adj.",
    "en_def": "soft and not bright",
    "cn_def": "柔和的；不鮮豔的"
  },
  "warm": {
    "pos": "adj.",
    "en_def": "(of colors) like red, orange, or yellow",
    "cn_def": "暖色的"
  },
  "cool": {
    "pos": "adj.",
    "en_def": "(of colors) like blue or green",
    "cn_def": "冷色的"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two colors or things",
    "cn_def": "對比"
  },
  "blend": {
    "pos": "v.",
    "en_def": "to mix together smoothly; to look like part of the surroundings",
    "cn_def": "混合；融合"
  },
  "fade": {
    "pos": "v.",
    "en_def": "to slowly lose color or brightness",
    "cn_def": "褪色；變淡"
  },
  "glow": {
    "pos": "v.",
    "en_def": "to give out a soft, steady light",
    "cn_def": "發光；發亮"
  },
  "sparkle": {
    "pos": "v.",
    "en_def": "to shine with many small flashes of light",
    "cn_def": "閃閃發光"
  },
  "transparent": {
    "pos": "adj.",
    "en_def": "clear enough to see through",
    "cn_def": "透明的"
  },
  "translucent": {
    "pos": "adj.",
    "en_def": "letting some light through but not clear",
    "cn_def": "半透明的"
  },
  "opaque": {
    "pos": "adj.",
    "en_def": "not letting light through; impossible to see through",
    "cn_def": "不透明的"
  },
  "monochrome": {
    "pos": "adj.",
    "en_def": "using only one color, or only black and white",
    "cn_def": "單色的；黑白的"
  },
  "multicolored": {
    "pos": "adj.",
    "en_def": "having many different colors",
    "cn_def": "多色的；五顏六色的"
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "full of bright colors",
    "cn_def": "色彩繽紛的"
  },
  "colorless": {
    "pos": "adj.",
    "en_def": "having no color",
    "cn_def": "無色的"
  },
  "saturated": {
    "pos": "adj.",
    "en_def": "(of colors) very strong and full",
    "cn_def": "飽和的；濃烈的"
  },
  "gradient": {
    "pos": "n.",
    "en_def": "a slow change from one color to another",
    "cn_def": "漸層"
  },
  "iridescent": {
    "pos": "adj.",
    "en_def": "showing changing rainbow colors as the light moves",
    "cn_def": "隨光變色的；彩虹色的"
  },
  "neutral": {
    "pos": "adj.",
    "en_def": "(of colors) not strong, such as beige, gray, or cream",
    "cn_def": "中性色的"
  },
  "pigmented": {
    "pos": "adj.",
    "en_def": "having a lot of strong color",
    "cn_def": "顯色的；色素飽滿的"
  }
};

const EXTRA_GLOSSES = {};
