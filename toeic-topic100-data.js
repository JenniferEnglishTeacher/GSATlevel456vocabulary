// Topic 100 Quiz Data: Decoration 裝潢佈置
// Source word list: https://www.examword.com/group-topic/decoration — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T100 - Decoration 裝潢佈置",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "redesign",
    "pos": "v.",
    "cn_def": "重新設計",
    "en_def": "to plan and change the look or layout of something again",
    "sentence": "A: Our customers keep saying the waiting area in the bank looks old and dark, so what is the manager planning to do about it this year? B: She has hired an architect to {{BLANK}} the whole space, adding bright lights, softer chairs and a small coffee corner so that people feel more relaxed while they wait.",
    "cn": "A：客戶一直說銀行的等候區看起來又舊又暗，經理今年打算怎麼處理？ B：她請了一位建築師來【重新設計】整個空間，加入明亮的燈光、更柔軟的椅子和一個小咖啡角，讓人們等候時感覺更放鬆。"
  },
  {
    "word": "utilitarian",
    "pos": "adj.",
    "cn_def": "實用的；講求實效的",
    "en_def": "made to be useful and practical, not beautiful",
    "sentence": "A: Why does the new staff kitchen look so plain, with only metal shelves, white walls and simple plastic chairs instead of nice decorations? B: The building manager wanted a {{BLANK}} room that is easy to clean and cheap to repair, because hundreds of workers use it every day and things break quickly.",
    "cn": "A：新的員工廚房為什麼看起來這麼簡陋，只有金屬架、白牆和簡單的塑膠椅，而沒有漂亮的裝飾？ B：大樓經理想要一個好清潔、修理又便宜的【實用】空間，因為每天有數百名員工使用，東西很快就會壞。"
  },
  {
    "word": "style",
    "pos": "n.",
    "cn_def": "風格；樣式",
    "en_def": "a particular way something is designed or looks",
    "sentence": "A: The new hotel owner asked us to choose furniture for the lobby, but I'm not sure whether we should buy modern pieces or classic ones. B: Let's look at the building first, because the outside has old stone walls and tall windows, so a classic {{BLANK}} would probably match the guests' expectations better than bright plastic chairs.",
    "cn": "A：新飯店老闆請我們為大廳挑選家具，但我不確定該買現代款還是經典款。 B：我們先看看建築本身吧，外觀有古老的石牆和高窗，所以經典的【風格】可能比鮮豔的塑膠椅更符合客人的期待。"
  },
  {
    "word": "taste",
    "pos": "n.",
    "cn_def": "品味；鑑賞力",
    "en_def": "the ability to choose things that look good",
    "sentence": "A: Do you think the client will like the dark green walls and gold lamps that our team chose for her new restaurant downtown? B: I'm a little worried, because she told us during the first meeting that she has simple {{BLANK}} and prefers light colors, so we should prepare a second plan just in case.",
    "cn": "A：你覺得客戶會喜歡我們團隊為她市中心新餐廳挑選的深綠色牆面和金色燈具嗎？ B：我有點擔心，因為她在第一次開會時告訴我們，她的【品味】簡約、偏好淺色，所以我們應該準備第二套方案以防萬一。"
  },
  {
    "word": "measurement",
    "pos": "n.",
    "cn_def": "測量；尺寸",
    "en_def": "the size or length of something that you find by measuring",
    "sentence": "A: Can we order the new carpet for the conference room today, or do we need to wait until the designer visits again next week? B: We should wait, because the designer needs to take an exact {{BLANK}} of the floor first, and if the numbers are wrong, the store won't let us return the carpet.",
    "cn": "A：我們今天可以訂會議室的新地毯嗎，還是要等設計師下週再來？ B：我們應該等，因為設計師得先做精確的地板【測量】，如果數字錯了，店家不會讓我們退貨。"
  },
  {
    "word": "impetus",
    "pos": "n.",
    "cn_def": "動力；推動力",
    "en_def": "a reason or force that makes something happen",
    "sentence": "A: Why did the company finally decide to renovate the old office after talking about it for almost five years without doing anything? B: The {{BLANK}} came from a staff survey last spring, which showed that many employees felt tired and unhappy in the dark rooms, so the directors knew they had to act quickly.",
    "cn": "A：公司談了將近五年都沒有行動，為什麼最後決定翻修舊辦公室？ B：【動力】來自去年春天的員工調查，調查顯示許多員工在昏暗的房間裡感到疲倦和不快樂，所以董事們知道必須迅速採取行動。"
  },
  {
    "word": "comfort",
    "pos": "n.",
    "cn_def": "舒適；舒服",
    "en_def": "a pleasant, relaxed feeling with no pain or worry",
    "sentence": "A: Why are we spending so much money on new sofas and soft lights for the waiting room at the dental clinic this year? B: Many patients feel nervous before their treatment, so the clinic manager believes that their {{BLANK}} is very important, and a warm, relaxing room helps them feel calmer while they wait.",
    "cn": "A：今年我們為什麼要花這麼多錢為牙科診所的候診室添購新沙發和柔和燈光？ B：許多病患在治療前會感到緊張，所以診所經理認為他們的【舒適】非常重要，溫暖放鬆的空間能幫助他們在等候時比較冷靜。"
  },
  {
    "word": "slipcover",
    "pos": "n.",
    "cn_def": "（家具的）活動布套；沙發套",
    "en_def": "a cloth cover that fits over a sofa or chair and can be removed",
    "sentence": "A: The sofas in the hotel lounge have coffee stains all over them, but we don't have the budget to buy new ones this year, do we? B: No, but we can order a washable {{BLANK}} for each sofa, which costs much less, protects the old material and can be cleaned easily in the hotel laundry.",
    "cn": "A：飯店交誼廳的沙發上到處都是咖啡漬，但我們今年沒有預算買新的，對吧？ B：沒錯，不過我們可以為每張沙發訂一個可水洗的【沙發套】，便宜很多，又能保護舊布料，還能在飯店洗衣房輕鬆清洗。"
  },
  {
    "word": "capture",
    "pos": "v.",
    "cn_def": "捕捉；表現出",
    "en_def": "to show or express a feeling or quality well",
    "sentence": "A: What do you want the new lobby design to show visitors when they walk into our office building for the first time? B: We want it to {{BLANK}} the spirit of our company, so the designer is using bright colors, local art and plenty of plants to show that we are creative and friendly.",
    "cn": "A：訪客第一次走進我們的辦公大樓時，你希望新大廳的設計向他們展現什麼？ B：我們希望它能【捕捉】公司的精神，所以設計師使用鮮豔的色彩、在地藝術和大量植物，來展現我們有創意又友善。"
  },
  {
    "word": "variation",
    "pos": "n.",
    "cn_def": "變化；變化版本",
    "en_def": "a slightly different form or version of something",
    "sentence": "A: The client said she likes the blue design for the reception area, but she is worried it will feel too cold in winter. B: Then let's show her a {{BLANK}} of the same plan, with warmer wood colors and softer lighting, so she can compare both versions before she makes her final decision on Friday.",
    "cn": "A：客戶說她喜歡接待區的藍色設計，但擔心冬天會感覺太冷。 B：那我們就給她看同一方案的另一個【變化版本】，用比較溫暖的木頭色和更柔和的燈光，讓她在星期五做最後決定前可以比較兩個版本。"
  },
  {
    "word": "freshen",
    "pos": "v.",
    "cn_def": "使煥然一新；使清新",
    "en_def": "to make something look newer, cleaner or more attractive",
    "sentence": "A: The meeting room looks old and boring, but we only have a small budget and two days before the investors arrive, right? B: That's right, so we can {{BLANK}} up the room with a few green plants, new cushions and a coat of light paint instead of buying expensive new furniture.",
    "cn": "A：會議室看起來又舊又無聊，但我們預算不多，而且投資人兩天後就要來了，對吧？ B：對，所以我們可以用幾盆綠色植物、新靠墊和一層淺色油漆讓房間【煥然一新】，而不是買昂貴的新家具。"
  },
  {
    "word": "vibe",
    "pos": "n.",
    "cn_def": "氛圍；感覺",
    "en_def": "the feeling or mood that a place gives you",
    "sentence": "A: What kind of feeling should the new café near the university have, since most of the customers will be students and young office workers? B: The owner wants a relaxed and friendly {{BLANK}}, so the designer is adding soft music, wooden tables and big windows that let in lots of natural light during the day.",
    "cn": "A：大學附近的新咖啡廳應該營造什麼樣的感覺？因為大部分客人會是學生和年輕上班族。 B：老闆想要輕鬆友善的【氛圍】，所以設計師加入了輕柔的音樂、木頭桌子，以及白天能讓大量自然光進來的大窗戶。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "the opinion or feeling you get about someone or something",
    "sentence": "A: Why is the manager so worried about the old carpet and broken lamps in the reception area before Monday's meeting? B: Important clients are visiting us for the first time, and the reception area is the first thing they see, so she wants them to get a good {{BLANK}} of our company right away.",
    "cn": "A：經理為什麼在星期一的會議前這麼擔心接待區的舊地毯和壞掉的燈？ B：重要客戶第一次來拜訪，接待區是他們最先看到的地方，所以她希望他們馬上對我們公司留下好【印象】。"
  },
  {
    "word": "minimalism",
    "pos": "n.",
    "cn_def": "極簡主義",
    "en_def": "a way of designing that uses very few, simple things",
    "sentence": "A: Why does the new office have so few decorations, with only white walls, one long table and a single plant in the corner? B: The founder is a big fan of {{BLANK}}, and she believes that a simple space with fewer objects helps employees focus better and keeps the office easy to clean and organize.",
    "cn": "A：新辦公室為什麼只有白牆、一張長桌和角落一盆植物，裝飾這麼少？ B：創辦人非常喜歡【極簡主義】，她相信物品較少的簡單空間能幫助員工更專心，也讓辦公室容易清潔和整理。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old ways or styles that have existed for a long time",
    "sentence": "A: The hotel in Kyoto wants to update its guest rooms, but do they plan to make everything look modern like a city hotel? B: No, they want to keep the {{BLANK}} wooden doors and paper screens, because many foreign tourists choose the hotel because it shows the local culture and history.",
    "cn": "A：京都的那家飯店想翻新客房，他們打算把一切都改得像城市飯店一樣現代嗎？ B：不，他們想保留【傳統的】木門和紙屏風，因為很多外國遊客選擇這家飯店，正是因為它展現了當地的文化和歷史。"
  },
  {
    "word": "elaborate",
    "pos": "adj.",
    "cn_def": "精心製作的；複雜精緻的",
    "en_def": "having many small parts or details; carefully planned",
    "sentence": "A: Did you see the plans for the new ballroom at the hotel, with gold lamps, painted walls and carved columns everywhere? B: Yes, the design is very {{BLANK}}, and it will take the workers at least six months to finish, but the owner believes it will attract many rich couples who want luxury weddings.",
    "cn": "A：你看過飯店新宴會廳的設計圖嗎？到處都是金色燈具、彩繪牆面和雕刻柱子。 B：看過，設計非常【精緻複雜】，工人至少要六個月才能完成，但老闆相信它會吸引許多想辦豪華婚禮的有錢新人。"
  },
  {
    "word": "fancy",
    "pos": "adj.",
    "cn_def": "花俏的；高級的",
    "en_def": "expensive, decorated, or not simple",
    "sentence": "A: Should we buy expensive crystal lights and velvet chairs for the new staff break room on the third floor? B: I don't think we need anything {{BLANK}}, because employees just want a clean, quiet place to eat lunch and rest, so simple tables and soft chairs will be more than enough.",
    "cn": "A：我們應該為三樓新的員工休息室買昂貴的水晶燈和天鵝絨椅子嗎？ B：我覺得不需要任何【花俏的】東西，因為員工只想要一個乾淨安靜、能吃午餐和休息的地方，所以簡單的桌子和柔軟的椅子就綽綽有餘了。"
  },
  {
    "word": "molding",
    "pos": "n.",
    "cn_def": "（牆面或天花板的）裝飾線條；飾條",
    "en_def": "a decorative strip of wood or plaster along the edge of a wall or ceiling",
    "sentence": "A: The walls in the old meeting room look a little plain, but the manager doesn't want to change the paint color, does she? B: No, she likes the cream color, so we suggested adding white wooden {{BLANK}} along the top of the walls, which will make the room look more stylish without much cost.",
    "cn": "A：舊會議室的牆看起來有點單調，但經理不想換油漆顏色，對嗎？ B：對，她喜歡奶油色，所以我們建議沿著牆的上緣加裝白色木製【飾條】，不用花太多錢就能讓房間看起來更有格調。"
  },
  {
    "word": "flaw",
    "pos": "n.",
    "cn_def": "瑕疵；缺陷",
    "en_def": "a small mark or fault that makes something not perfect",
    "sentence": "A: Why did the store manager refuse to accept the new marble tables that arrived at the shop this morning? B: She checked each table carefully and found a small {{BLANK}} on the surface of almost every one, so she sent them back and asked the supplier to deliver perfect ones before the opening.",
    "cn": "A：店長今天早上為什麼拒收送到店裡的新大理石桌？ B：她仔細檢查了每張桌子，發現幾乎每張表面都有小【瑕疵】，所以她退貨並要求供應商在開幕前送來完美的桌子。"
  },
  {
    "word": "weary",
    "pos": "adj.",
    "cn_def": "厭倦的；疲倦的",
    "en_def": "tired, or bored with something after a long time",
    "sentence": "A: Why does the director want to change the colors and furniture in the main office after only three years? B: She said many employees feel {{BLANK}} of the gray walls and dark desks, and she hopes brighter colors and more plants will give everyone more energy during long working days.",
    "cn": "A：主管為什麼才過三年就想更換主辦公室的顏色和家具？ B：她說許多員工對灰色牆面和深色辦公桌感到【厭倦】，她希望更明亮的顏色和更多植物能讓大家在漫長的工作日裡更有活力。"
  },
  {
    "word": "illumination",
    "pos": "n.",
    "cn_def": "照明；光線",
    "en_def": "light, or the way a place is lit",
    "sentence": "A: The art gallery wants to show its new paintings next month, but the visitors complained that the rooms were too dark last time. B: Then we should improve the {{BLANK}} in every room by adding soft spotlights above each painting, so people can see the colors clearly without hurting their eyes.",
    "cn": "A：美術館下個月要展出新畫作，但上次參觀者抱怨展間太暗。 B：那我們應該在每個展間的每幅畫上方加裝柔和的聚光燈來改善【照明】，讓人們能清楚看到色彩，又不會傷眼睛。"
  },
  {
    "word": "contemporary",
    "pos": "adj.",
    "cn_def": "當代的；現代的",
    "en_def": "modern; belonging to the present time",
    "sentence": "A: The bank wants its new branch to attract young customers, so what kind of design did the architect suggest at yesterday's meeting? B: She suggested a {{BLANK}} look with glass walls, simple furniture and digital screens, because younger people usually prefer spaces that feel up-to-date rather than old-fashioned.",
    "cn": "A：銀行希望新分行能吸引年輕客戶，那建築師在昨天的會議上建議了什麼樣的設計？ B：她建議採用【當代的】風貌，有玻璃牆、簡約家具和數位螢幕，因為年輕人通常喜歡感覺新穎而非老派的空間。"
  },
  {
    "word": "futuristic",
    "pos": "adj.",
    "cn_def": "未來感的；未來派的",
    "en_def": "looking very modern, as if from the future",
    "sentence": "A: Have you seen the new showroom that the electric car company opened downtown last week? B: Yes, it has a very {{BLANK}} design, with silver walls, blue lights and robots that greet visitors at the door, so it really feels like walking into a science fiction movie set in the next century.",
    "cn": "A：你看過那家電動車公司上週在市中心開的新展示廳嗎？ B：看過，設計非常【有未來感】，有銀色牆面、藍色燈光，還有在門口迎接訪客的機器人，真的感覺像走進一部以下個世紀為背景的科幻電影。"
  },
  {
    "word": "redecoration",
    "pos": "n.",
    "cn_def": "重新裝潢；重新佈置",
    "en_def": "the work of painting and decorating a place again",
    "sentence": "A: Why is the hotel restaurant closed for the whole month of March, even though it is usually very busy in spring? B: The restaurant is closed for {{BLANK}}, because the owners are painting the walls, replacing the old curtains and buying new tables, and they want everything to look fresh before the summer season.",
    "cn": "A：飯店餐廳為什麼整個三月都不營業，明明春天通常很忙？ B：餐廳因【重新裝潢】而暫停營業，因為業主正在粉刷牆面、更換舊窗簾、購買新桌子，他們希望在夏季旺季前讓一切煥然一新。"
  },
  {
    "word": "drapes",
    "pos": "n.",
    "cn_def": "（厚重的）窗簾；簾幕",
    "en_def": "long, heavy curtains",
    "sentence": "A: The sunlight in the meeting room is so strong in the afternoon that nobody can see the slides on the screen clearly. B: I'll ask the office manager to order some heavy {{BLANK}} for the windows, so we can close them during presentations and open them again when we want natural light.",
    "cn": "A：會議室下午的陽光太強，沒人能看清楚螢幕上的投影片。 B：我會請辦公室經理為窗戶訂一些厚重的【窗簾】，這樣我們簡報時可以拉上，想要自然光時再拉開。"
  },
  {
    "word": "fabric",
    "pos": "n.",
    "cn_def": "布料；織物",
    "en_def": "cloth used for making clothes, curtains, or furniture covers",
    "sentence": "A: Which material should we choose for the new chairs in the hotel lobby, leather or something softer? B: I'd choose a strong {{BLANK}} that is easy to clean, because hundreds of guests sit in the lobby every day, and leather can get scratched quickly by bags and suitcases.",
    "cn": "A：飯店大廳的新椅子該選哪種材質，皮革還是更柔軟的東西？ B：我會選容易清潔的耐用【布料】，因為每天有數百位客人坐在大廳，皮革很容易被包包和行李箱刮傷。"
  },
  {
    "word": "elongated",
    "pos": "adj.",
    "cn_def": "加長的；狹長的",
    "en_def": "longer and thinner than usual",
    "sentence": "A: The meeting room is very long and narrow, so what kind of table do you think will fit best for our weekly team meetings? B: An {{BLANK}} oval table would be perfect, because it follows the shape of the room, leaves space to walk around, and lets twelve people sit together and see the screen.",
    "cn": "A：會議室又長又窄，你覺得什麼樣的桌子最適合我們每週的團隊會議？ B：【加長形的】橢圓桌會很完美，因為它順著房間的形狀，留有走動的空間，還能讓十二個人坐在一起看螢幕。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the top inside surface of a room",
    "sentence": "A: The new office feels a little dark and crowded, even though it has large windows and white walls, so what else can we do? B: We could paint the {{BLANK}} a very light color and hang a few simple lamps from it, because that will make the room look taller and much brighter.",
    "cn": "A：新辦公室雖然有大窗戶和白牆，還是感覺有點暗又擁擠，我們還能做什麼？ B：我們可以把【天花板】漆成很淺的顏色，再從上面吊幾盞簡單的燈，這樣房間會看起來更高也更明亮。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "令人耳目一新的；清新的",
    "en_def": "pleasantly new and different",
    "sentence": "A: What did the staff say about the new green walls and plants in the break room after the renovation was finished? B: Most of them said it was a {{BLANK}} change from the old gray room, and many people now enjoy spending their lunch break there instead of eating at their desks.",
    "cn": "A：翻修完成後，員工對休息室新的綠色牆面和植物有什麼看法？ B：大部分人說，和以前灰暗的房間相比，這是個【令人耳目一新的】改變，現在很多人喜歡在那裡度過午休，而不是在座位上吃飯。"
  },
  {
    "word": "exterior",
    "pos": "n.",
    "cn_def": "外部；外觀",
    "en_def": "the outside part of a building or object",
    "sentence": "A: The inside of our store looks great after the renovation, but why are customers still walking past without coming in? B: I think the {{BLANK}} of the building still looks old and dirty, so we should paint the front, clean the windows and add a bright new sign above the door.",
    "cn": "A：我們店內翻修後看起來很棒，但為什麼客人還是走過不進來？ B：我想是建築物的【外部】還是看起來又舊又髒，所以我們應該粉刷店面、清洗窗戶，並在門上方加一塊明亮的新招牌。"
  },
  {
    "word": "interior",
    "pos": "n.",
    "cn_def": "內部；室內",
    "en_def": "the inside part of a building or room",
    "sentence": "A: The new hotel looks very plain from the street, so why are so many travel magazines writing about it this month? B: The {{BLANK}} is what makes it special, because every guest room and hallway is decorated with local art, colorful tiles and handmade furniture from nearby villages.",
    "cn": "A：新飯店從街上看起來很平凡，為什麼這個月有這麼多旅遊雜誌報導它？ B：它的【內部】才是特別之處，因為每間客房和走廊都用在地藝術、彩色磁磚和附近村莊的手工家具裝飾。"
  },
  {
    "word": "appearance",
    "pos": "n.",
    "cn_def": "外觀；外表",
    "en_def": "the way someone or something looks",
    "sentence": "A: Why did the restaurant owner spend so much money changing the tables, lights and wall colors when the food was already popular? B: She knew that the {{BLANK}} of a restaurant matters as much as the menu, because customers often decide whether to come inside after a quick look through the front window.",
    "cn": "A：餐廳的餐點已經很受歡迎了，老闆為什麼還要花這麼多錢更換桌子、燈具和牆面顏色？ B：她知道餐廳的【外觀】和菜單一樣重要，因為客人常常從前窗快速看一眼後，就決定要不要進來。"
  },
  {
    "word": "preference",
    "pos": "n.",
    "cn_def": "偏好；喜好",
    "en_def": "a feeling that you like one thing more than another",
    "sentence": "A: Before we start choosing colors and furniture for the new manager's office, should we ask her what she likes? B: Yes, we should send her a short survey first, because she will work in that room every day, and her {{BLANK}} for light or dark colors will affect all our other choices.",
    "cn": "A：在我們開始為新經理的辦公室挑選顏色和家具之前，是否應該問問她喜歡什麼？ B：是的，我們應該先寄一份簡短的問卷給她，因為她每天都會在那個房間工作，她對淺色或深色的【偏好】會影響我們其他所有的選擇。"
  },
  {
    "word": "elegant",
    "pos": "adj.",
    "cn_def": "優雅的；高雅的",
    "en_def": "beautiful in a simple and graceful way",
    "sentence": "A: What did the guests say about the hotel's new wedding hall when they visited it for the first time last weekend? B: They loved it, and many of them said it looked simple but very {{BLANK}}, with soft white lights, tall windows, and beautiful flowers on every table near the stage.",
    "cn": "A：客人上週末第一次參觀飯店新的婚宴廳時，他們怎麼說？ B：他們很喜歡，很多人說它看起來簡約卻非常【優雅】，有柔和的白光、高大的窗戶，舞台附近每張桌上都有美麗的花。"
  }
];

const MCQS = [
  {
    "q": "The warehouse office has metal desks and bare concrete floors. Its _____ design focuses on function rather than beauty.",
    "options": [
      "utilitarian",
      "weary",
      "elegant",
      "fancy"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The new manager wants every branch to look the same. All offices must follow one simple _____ chosen by the head office.",
    "options": [
      "impetus",
      "style",
      "flaw",
      "ceiling"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Mr. Lin chose the artwork for the lobby himself. Everyone agrees that he has excellent _____ in paintings and furniture.",
    "options": [
      "measurement",
      "molding",
      "taste",
      "drapes"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Please check the size of the window carefully. One wrong _____ means the new blinds will not fit properly.",
    "options": [
      "vibe",
      "taste",
      "impetus",
      "measurement"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Complaints from customers about the old lobby gave the owners a strong _____ to renovate. Work started two weeks later.",
    "options": [
      "slipcover",
      "impetus",
      "ceiling",
      "fabric"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The theater replaced all its hard seats last summer. Visitors can now enjoy the show in greater _____ than before.",
    "options": [
      "comfort",
      "flaw",
      "molding",
      "measurement"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Our cat scratched the old armchair badly. Instead of buying a new chair, we put a cotton _____ over it.",
    "options": [
      "impetus",
      "vibe",
      "illumination",
      "slipcover"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The designer showed us three plans for the lobby. Each _____ used the same furniture but different wall colors.",
    "options": [
      "flaw",
      "ceiling",
      "variation",
      "comfort"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The bookstore café plays soft jazz and has warm lamps. Customers say it has a cozy _____ that makes them stay longer.",
    "options": [
      "vibe",
      "measurement",
      "molding",
      "slipcover"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Visitors notice the reception area before anything else. A clean, bright space creates a positive _____ of the whole company.",
    "options": [
      "ceiling",
      "measurement",
      "impression",
      "fabric"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The architect removed most of the furniture and decorations. Her love of _____ means every room has only a few simple objects.",
    "options": [
      "illumination",
      "minimalism",
      "molding",
      "measurement"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The restaurant serves old family recipes. Its _____ decor includes wooden beams, paper lanterns and hand-painted bowls.",
    "options": [
      "futuristic",
      "utilitarian",
      "weary",
      "traditional"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The palace hall is covered with gold patterns and detailed paintings. Its _____ decoration took artists ten years to finish.",
    "options": [
      "utilitarian",
      "weary",
      "elaborate",
      "elongated"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "We don't need an expensive hotel for the training. A simple room is fine, so there is no need for anything _____.",
    "options": [
      "fancy",
      "weary",
      "elongated",
      "utilitarian"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The carpenter is fixing the decorative strip where the wall meets the ceiling. Part of the old _____ cracked during the earthquake.",
    "options": [
      "vibe",
      "impetus",
      "preference",
      "molding"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Please inspect every tile before installation. Even one small _____ in the surface can spoil the look of the floor.",
    "options": [
      "vibe",
      "flaw",
      "preference",
      "comfort"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "After ten years in the same gray office, the staff grew _____ of it. They asked for brighter colors and new furniture.",
    "options": [
      "elegant",
      "fancy",
      "contemporary",
      "weary"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The old warehouse had only a few small windows. The architects added skylights to provide better _____ for the workers.",
    "options": [
      "taste",
      "illumination",
      "slipcover",
      "impetus"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The museum displays art made by living artists. Its _____ building, with glass walls and steel beams, matches the modern collection.",
    "options": [
      "contemporary",
      "traditional",
      "weary",
      "elongated"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The robot café looks like a spaceship from a film. Its _____ design attracts many young tourists every weekend.",
    "options": [
      "traditional",
      "weary",
      "futuristic",
      "utilitarian"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The hotel will paint all the rooms and replace the carpets in May. During the _____, guests will stay at our sister hotel.",
    "options": [
      "impetus",
      "redecoration",
      "comfort",
      "minimalism"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The afternoon sun was too bright for the presentation. The assistant closed the heavy _____ so everyone could see the screen.",
    "options": [
      "ceiling",
      "impression",
      "vibe",
      "drapes"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The upholstery shop offers many materials for sofas. Customers can choose a soft _____ such as cotton, linen or velvet.",
    "options": [
      "impetus",
      "measurement",
      "fabric",
      "flaw"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The conference room is long and narrow. Tables with _____ shapes fit the space better than round ones.",
    "options": [
      "elongated",
      "weary",
      "refreshing",
      "utilitarian"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The new office has very tall walls. Workers need a long ladder to change the light bulbs on the _____.",
    "options": [
      "fabric",
      "slipcover",
      "ceiling",
      "impression"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "After months of dark winter colors, the spring decorations were a _____ change. Staff loved the bright yellow flowers in the lobby.",
    "options": [
      "weary",
      "refreshing",
      "elongated",
      "utilitarian"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "From the street, the old bank building looks plain. However, its _____ is full of marble columns and beautiful paintings.",
    "options": [
      "interior",
      "measurement",
      "slipcover",
      "impetus"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The shop owner cleaned the windows and painted the front door. These changes greatly improved the _____ of the store.",
    "options": [
      "impetus",
      "measurement",
      "minimalism",
      "appearance"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "We asked each employee to choose a desk color. Most people showed a clear _____ for light wood over dark wood.",
    "options": [
      "ceiling",
      "preference",
      "molding",
      "flaw"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The wedding hall is decorated with white roses and crystal lamps. Guests often describe it as simple but very _____.",
    "options": [
      "weary",
      "elongated",
      "elegant",
      "utilitarian"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "redesign": {
    "pos": "v.",
    "en_def": "to plan and change the look or layout of something again",
    "cn_def": "重新設計"
  },
  "utilitarian": {
    "pos": "adj.",
    "en_def": "made to be useful and practical, not beautiful",
    "cn_def": "實用的；講求實效的"
  },
  "style": {
    "pos": "n.",
    "en_def": "a particular way something is designed or looks",
    "cn_def": "風格；樣式"
  },
  "taste": {
    "pos": "n.",
    "en_def": "the ability to choose things that look good",
    "cn_def": "品味；鑑賞力"
  },
  "measurement": {
    "pos": "n.",
    "en_def": "the size or length of something that you find by measuring",
    "cn_def": "測量；尺寸"
  },
  "impetus": {
    "pos": "n.",
    "en_def": "a reason or force that makes something happen",
    "cn_def": "動力；推動力"
  },
  "comfort": {
    "pos": "n.",
    "en_def": "a pleasant, relaxed feeling with no pain or worry",
    "cn_def": "舒適；舒服"
  },
  "slipcover": {
    "pos": "n.",
    "en_def": "a cloth cover that fits over a sofa or chair and can be removed",
    "cn_def": "（家具的）活動布套；沙發套"
  },
  "capture": {
    "pos": "v.",
    "en_def": "to show or express a feeling or quality well",
    "cn_def": "捕捉；表現出"
  },
  "variation": {
    "pos": "n.",
    "en_def": "a slightly different form or version of something",
    "cn_def": "變化；變化版本"
  },
  "freshen": {
    "pos": "v.",
    "en_def": "to make something look newer, cleaner or more attractive",
    "cn_def": "使煥然一新；使清新"
  },
  "vibe": {
    "pos": "n.",
    "en_def": "the feeling or mood that a place gives you",
    "cn_def": "氛圍；感覺"
  },
  "impression": {
    "pos": "n.",
    "en_def": "the opinion or feeling you get about someone or something",
    "cn_def": "印象"
  },
  "minimalism": {
    "pos": "n.",
    "en_def": "a way of designing that uses very few, simple things",
    "cn_def": "極簡主義"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following old ways or styles that have existed for a long time",
    "cn_def": "傳統的"
  },
  "elaborate": {
    "pos": "adj.",
    "en_def": "having many small parts or details; carefully planned",
    "cn_def": "精心製作的；複雜精緻的"
  },
  "fancy": {
    "pos": "adj.",
    "en_def": "expensive, decorated, or not simple",
    "cn_def": "花俏的；高級的"
  },
  "molding": {
    "pos": "n.",
    "en_def": "a decorative strip of wood or plaster along the edge of a wall or ceiling",
    "cn_def": "（牆面或天花板的）裝飾線條；飾條"
  },
  "flaw": {
    "pos": "n.",
    "en_def": "a small mark or fault that makes something not perfect",
    "cn_def": "瑕疵；缺陷"
  },
  "weary": {
    "pos": "adj.",
    "en_def": "tired, or bored with something after a long time",
    "cn_def": "厭倦的；疲倦的"
  },
  "illumination": {
    "pos": "n.",
    "en_def": "light, or the way a place is lit",
    "cn_def": "照明；光線"
  },
  "contemporary": {
    "pos": "adj.",
    "en_def": "modern; belonging to the present time",
    "cn_def": "當代的；現代的"
  },
  "futuristic": {
    "pos": "adj.",
    "en_def": "looking very modern, as if from the future",
    "cn_def": "未來感的；未來派的"
  },
  "redecoration": {
    "pos": "n.",
    "en_def": "the work of painting and decorating a place again",
    "cn_def": "重新裝潢；重新佈置"
  },
  "drapes": {
    "pos": "n.",
    "en_def": "long, heavy curtains",
    "cn_def": "（厚重的）窗簾；簾幕"
  },
  "fabric": {
    "pos": "n.",
    "en_def": "cloth used for making clothes, curtains, or furniture covers",
    "cn_def": "布料；織物"
  },
  "elongated": {
    "pos": "adj.",
    "en_def": "longer and thinner than usual",
    "cn_def": "加長的；狹長的"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the top inside surface of a room",
    "cn_def": "天花板"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "pleasantly new and different",
    "cn_def": "令人耳目一新的；清新的"
  },
  "exterior": {
    "pos": "n.",
    "en_def": "the outside part of a building or object",
    "cn_def": "外部；外觀"
  },
  "interior": {
    "pos": "n.",
    "en_def": "the inside part of a building or room",
    "cn_def": "內部；室內"
  },
  "appearance": {
    "pos": "n.",
    "en_def": "the way someone or something looks",
    "cn_def": "外觀；外表"
  },
  "preference": {
    "pos": "n.",
    "en_def": "a feeling that you like one thing more than another",
    "cn_def": "偏好；喜好"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "beautiful in a simple and graceful way",
    "cn_def": "優雅的；高雅的"
  }
};

const EXTRA_GLOSSES = {};
