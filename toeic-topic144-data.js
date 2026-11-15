// Topic 144 Quiz Data: Flowers 花卉
// Source word list: https://www.examword.com/group-topic/flowers — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T144 - Flowers 花卉",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "blossom",
    "pos": "n.",
    "cn_def": "（果樹的）花；花朵",
    "en_def": "a flower on a tree or bush, especially in spring",
    "sentence": "A: Why is the hotel's garden café so busy this week, and why are so many guests taking photos near the entrance? B: The cherry trees by the front gate are covered in pink {{BLANK}} right now, so visitors come early in the morning to enjoy the view before the petals start falling next week.",
    "cn": "A：為什麼飯店的花園咖啡廳這週這麼忙，而且為什麼這麼多客人在入口附近拍照？ B：前門旁的櫻花樹現在開滿了粉紅色的【花朵】，所以遊客一大早就來欣賞美景，趕在下週花瓣開始飄落之前。"
  },
  {
    "word": "petal",
    "pos": "n.",
    "cn_def": "花瓣",
    "en_def": "one of the soft colored parts of a flower",
    "sentence": "A: Did the wedding planner finally decide how to make the dinner tables look special for Saturday's reception at the hotel? B: Yes, she will place one red rose {{BLANK}} on every guest's napkin, so she has ordered three large boxes from the flower market and will keep them cool in the fridge until Saturday morning.",
    "cn": "A：婚禮策劃師最後決定好要怎麼讓週六飯店喜宴的餐桌看起來特別了嗎？ B：決定了，她會在每位賓客的餐巾上放一片紅玫瑰【花瓣】，所以她從花市訂了三大箱，並會放在冰箱裡保持冰涼直到週六早上。"
  },
  {
    "word": "stem",
    "pos": "n.",
    "cn_def": "莖；花梗",
    "en_def": "the long thin part of a plant that holds the flower",
    "sentence": "A: Why do the flowers in the lobby always stay fresh for more than a week, while the ones in our office die after only two days? B: The hotel staff cut the end of each {{BLANK}} at an angle every morning and change the water, so the flowers can drink more easily and last much longer than ours do.",
    "cn": "A：為什麼大廳裡的花總是能保持新鮮超過一週，而我們辦公室的花只撐兩天就凋謝了？ B：飯店員工每天早上都會把每根【花莖】的末端斜切，並且換水，所以花能更容易吸水，也比我們的花持久得多。"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "cn_def": "葉子",
    "en_def": "one of the flat green parts of a plant",
    "sentence": "A: Is something wrong with the large plant next to the reception desk, or does it just need to be moved closer to the window? B: I noticed that almost every {{BLANK}} has turned yellow and dry at the edges, so I've asked the cleaning company to send someone from their plant care team to check it on Friday.",
    "cn": "A：櫃台旁那盆大型植物是出了什麼問題，還是只需要把它移到靠近窗戶的地方？ B：我注意到幾乎每一片【葉子】的邊緣都變黃變乾了，所以我已經請清潔公司派植物照護團隊的人週五來檢查。"
  },
  {
    "word": "bud",
    "pos": "n.",
    "cn_def": "花苞；芽",
    "en_def": "a small part of a plant that will open into a flower",
    "sentence": "A: Why did you buy roses that are still closed for the opening party, when the event is only three days away? B: The florist told me that if each {{BLANK}} is still tight when you buy it, the flowers will open slowly and look their best on the day of the event instead of dying early.",
    "cn": "A：開幕派對只剩三天了，為什麼你買的玫瑰還都是閉合的？ B：花店老闆告訴我，如果買的時候每個【花苞】都還很緊實，花就會慢慢綻放，在活動當天呈現最美的樣子，而不會太早凋謝。"
  },
  {
    "word": "bloom",
    "pos": "v.",
    "cn_def": "開花",
    "en_def": "to produce flowers; to open",
    "sentence": "A: When is the best time to bring our overseas clients to visit the famous plum farm in the mountains of Nantou? B: Most of the plum trees there {{BLANK}} in late January, so if we plan the trip for the last weekend of the month, the clients will see the whole hillside covered in white flowers.",
    "cn": "A：什麼時候帶海外客戶去參觀南投山區那座知名的梅園最好？ B：那裡大部分的梅樹在一月下旬【開花】，所以如果我們把行程安排在這個月的最後一個週末，客戶就能看到整片山坡覆蓋著白色的花朵。"
  },
  {
    "word": "fragrant",
    "pos": "adj.",
    "cn_def": "芳香的；香的",
    "en_def": "having a pleasant smell",
    "sentence": "A: Which flowers should we put in the hotel guest rooms, since several guests last month said the rooms smelled a little like cleaning products? B: Let's choose lilies or jasmine, because they are very {{BLANK}} and a small vase on each desk will make the whole room smell sweet and relaxing for our guests.",
    "cn": "A：既然上個月有幾位房客說房間聞起來有點像清潔用品，我們應該在飯店客房裡放什麼花？ B：我們選百合或茉莉吧，因為它們非常【芳香】，每張書桌上放一個小花瓶，就能讓整個房間對客人來說聞起來香甜又放鬆。"
  },
  {
    "word": "scent",
    "pos": "n.",
    "cn_def": "香味；氣味",
    "en_def": "a pleasant smell",
    "sentence": "A: Why does the new shopping mall smell so nice near the main entrance, even though there isn't any flower shop on the first floor? B: The marketing team installed machines that spread a light rose {{BLANK}} through the air, because they believe a pleasant smell makes customers relax and stay in the mall longer.",
    "cn": "A：為什麼新購物中心的主入口附近聞起來這麼香，即使一樓並沒有花店？ B：行銷團隊安裝了機器，在空氣中散發淡淡的玫瑰【香味】，因為他們相信宜人的氣味能讓顧客放鬆，並在商場待得更久。"
  },
  {
    "word": "bouquet",
    "pos": "n.",
    "cn_def": "花束",
    "en_def": "a bunch of flowers arranged nicely",
    "sentence": "A: What should we give Ms. Chen on her last day at the office after working with our company for more than twenty years? B: Everyone in the department has signed a card, and I have also ordered a large {{BLANK}} of her favorite yellow roses, which the shop will deliver to the meeting room at four o'clock.",
    "cn": "A：陳女士在我們公司服務了二十多年，她最後一天上班時我們應該送她什麼？ B：部門裡每個人都在卡片上簽了名，我也訂了一個用她最喜歡的黃玫瑰做成的大【花束】，花店會在四點鐘送到會議室。"
  },
  {
    "word": "arrangement",
    "pos": "n.",
    "cn_def": "插花；花藝擺設",
    "en_def": "flowers placed together in an attractive way",
    "sentence": "A: Why does the front desk look so different this morning, and who changed the decorations near the entrance over the weekend? B: The hotel hired a local artist to create a tall flower {{BLANK}} with orchids and green branches, and it will be replaced with a new design every Monday for the rest of the year.",
    "cn": "A：為什麼櫃台今天早上看起來這麼不一樣，週末是誰換了入口附近的裝飾？ B：飯店聘請了一位當地藝術家，用蘭花和綠色枝葉打造了一座高大的【插花作品】，而且今年剩下的時間每週一都會換上新的設計。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園",
    "en_def": "a piece of land where flowers or plants are grown",
    "sentence": "A: Where are we having the company's summer party this year, since the hotel ballroom is fully booked in July? B: The manager found a restaurant with a large {{BLANK}} full of roses and tall trees behind the building, so we can eat outside in the evening when the weather is cooler.",
    "cn": "A：既然飯店宴會廳七月都被訂滿了，今年公司的夏季派對要在哪裡舉辦？ B：經理找到一家餐廳，建築後方有一座種滿玫瑰和高大樹木的大【花園】，所以我們可以在天氣比較涼爽的傍晚在戶外用餐。"
  },
  {
    "word": "vase",
    "pos": "n.",
    "cn_def": "花瓶",
    "en_def": "a container for holding cut flowers",
    "sentence": "A: Where should I put the flowers that our clients sent us this morning to thank us for finishing their project early? B: There is a tall glass {{BLANK}} in the cupboard next to the kitchen sink, so fill it with cool water and place it on the reception desk where every visitor can see them.",
    "cn": "A：客戶今天早上送來感謝我們提早完成專案的花，我應該放在哪裡？ B：廚房水槽旁的櫥櫃裡有一個高的玻璃【花瓶】，裝滿冷水後把它放在接待櫃台上，讓每位訪客都能看到。"
  },
  {
    "word": "rose",
    "pos": "n.",
    "cn_def": "玫瑰",
    "en_def": "a flower with a sweet smell and thorns on its stem",
    "sentence": "A: What kind of flowers are customers buying most this week, and do we have enough stock for the holiday weekend? B: Since Valentine's Day is on Saturday, almost every customer wants a red {{BLANK}}, so I have asked our supplier to send two hundred more by Thursday afternoon at the latest.",
    "cn": "A：這週顧客最常買哪種花？我們有足夠的存貨應付節日週末嗎？ B：因為情人節在週六，幾乎每位顧客都想要一朵紅【玫瑰】，所以我已經請供應商最晚在週四下午前再送兩百朵過來。"
  },
  {
    "word": "tulip",
    "pos": "n.",
    "cn_def": "鬱金香",
    "en_def": "a bright cup-shaped spring flower, famous in the Netherlands",
    "sentence": "A: What did you enjoy most about your business trip to Amsterdam last April, apart from meeting the new suppliers? B: On my free afternoon, I visited a huge park where thousands of red and yellow {{BLANK}} flowers grew in long lines, and it was the most colorful place I have ever seen.",
    "cn": "A：除了和新供應商見面之外，去年四月去阿姆斯特丹出差，你最喜歡的是什麼？ B：在我空閒的那個下午，我參觀了一座大公園，那裡成千上萬朵紅色和黃色的【鬱金香】排成長長的一列列，那是我看過最繽紛的地方。"
  },
  {
    "word": "daisy",
    "pos": "n.",
    "cn_def": "雛菊",
    "en_def": "a small flower with white petals and a yellow center",
    "sentence": "A: Why did the café owner choose such simple flowers for the tables instead of expensive roses or orchids? B: She says a small white {{BLANK}} in a glass bottle matches the café's natural, relaxing style, and it is much cheaper, so she can replace the flowers every two days without spending too much.",
    "cn": "A：為什麼咖啡廳老闆選擇這麼簡單的花放在桌上，而不是昂貴的玫瑰或蘭花？ B：她說玻璃瓶裡的一朵小白【雛菊】和咖啡廳自然放鬆的風格很搭，而且便宜得多，所以她每兩天就能換一次花，又不必花太多錢。"
  },
  {
    "word": "lily",
    "pos": "n.",
    "cn_def": "百合",
    "en_def": "a large trumpet-shaped flower, often white",
    "sentence": "A: Why did the hotel manager ask us to remove all the white flowers from the dining room before the cat show guests arrive? B: She read that the {{BLANK}} is very dangerous for cats, even if they only touch the pollen, so she wants to make sure none of the animals get sick during the event.",
    "cn": "A：為什麼飯店經理要我們在貓展來賓抵達前，把餐廳裡所有白色的花都撤掉？ B：她讀到【百合】對貓非常危險，就算只碰到花粉也一樣，所以她想確保活動期間沒有任何動物生病。"
  },
  {
    "word": "orchid",
    "pos": "n.",
    "cn_def": "蘭花",
    "en_def": "an elegant flower with unusual shapes, often given as a gift",
    "sentence": "A: What gift should we send to our business partner who is opening a new office in Hsinchu next Monday? B: In Taiwan, a large potted {{BLANK}} is a popular gift for a new business because it looks elegant and lasts for months, so let's order one with a card from our CEO.",
    "cn": "A：我們的合作夥伴下週一要在新竹開新辦公室，我們應該送什麼禮物？ B：在台灣，大型盆栽【蘭花】是祝賀開業的熱門禮物，因為它看起來高雅又能維持好幾個月，所以我們訂一盆並附上執行長的卡片吧。"
  },
  {
    "word": "sunflower",
    "pos": "n.",
    "cn_def": "向日葵",
    "en_def": "a very tall plant with a large yellow flower",
    "sentence": "A: Why are so many families driving out to that farm near the coast this weekend, and is it worth taking our team there? B: The farm has a huge field where every tall yellow {{BLANK}} turns to face the sun, so it is a great place for group photos, and they also sell fresh ice cream and snacks.",
    "cn": "A：為什麼這週末這麼多家庭開車去海岸附近那座農場？值得帶我們團隊去嗎？ B：那座農場有一大片田地，每一株高大的黃色【向日葵】都會轉向太陽，所以很適合拍團體照，而且他們也賣新鮮的冰淇淋和點心。"
  },
  {
    "word": "wildflower",
    "pos": "n.",
    "cn_def": "野花",
    "en_def": "a flower that grows naturally, not planted by people",
    "sentence": "A: What did you see on the company hiking trip in the mountains last Saturday, since I had to stay home with a cold? B: The trail was lined with every kind of {{BLANK}} you can imagine, from tiny purple ones to bright orange ones, and our guide told us we must not pick any of them.",
    "cn": "A：上週六公司去山上健行你們看到了什麼？我因為感冒只好待在家。 B：步道兩旁開滿了各式各樣你想像得到的【野花】，從小小的紫色花到鮮豔的橘色花都有，而且導遊告訴我們一朵都不能摘。"
  },
  {
    "word": "colorful",
    "pos": "adj.",
    "cn_def": "色彩繽紛的",
    "en_def": "having many bright colors",
    "sentence": "A: How did the design team make the new lobby feel so welcoming after so many guests complained that it was dark and boring? B: They added large windows and filled the space with {{BLANK}} flowers in red, yellow, and purple, so now the area looks bright and cheerful even on rainy days.",
    "cn": "A：之前很多客人抱怨大廳又暗又無聊，設計團隊是怎麼讓新大廳變得這麼溫馨的？ B：他們加了大片窗戶，並在空間裡擺滿紅、黃、紫色的【色彩繽紛的】花朵，所以現在即使下雨天，這一區看起來也明亮又愉快。"
  },
  {
    "word": "delicate",
    "pos": "adj.",
    "cn_def": "嬌嫩的；易損的",
    "en_def": "easily damaged; needing careful handling",
    "sentence": "A: Why did the delivery driver ask us to sign a special form before he unloaded the boxes of flowers for the wedding? B: The orchids inside are very {{BLANK}} and can break if someone drops the boxes, so the company wants proof that they arrived in perfect condition before we carry them upstairs.",
    "cn": "A：為什麼送貨司機在卸下婚禮用的花箱之前，要我們簽一張特別的表格？ B：裡面的蘭花非常【嬌嫩】，如果有人把箱子摔落就可能折斷，所以公司希望在我們搬上樓之前，有證據證明花送達時狀況完好。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "新鮮的",
    "en_def": "recently picked; not old or dying",
    "sentence": "A: Why does the restaurant buy flowers from the market every Monday morning instead of ordering them once a month online? B: The owner believes that only {{BLANK}} flowers that were cut the same day can make the dining room look elegant, and old ones that start to droop give customers a bad impression.",
    "cn": "A：為什麼餐廳每週一早上都去市場買花，而不是一個月在網路上訂一次？ B：老闆認為只有當天剪下的【新鮮】花朵才能讓用餐區看起來高雅，而開始垂頭的舊花會給顧客不好的印象。"
  },
  {
    "word": "artificial",
    "pos": "adj.",
    "cn_def": "人造的；假的",
    "en_def": "made by people, not real",
    "sentence": "A: Why did the office manager replace the real plants in the meeting rooms with ones that look almost the same? B: Nobody had time to look after the real ones, so she bought {{BLANK}} flowers made of silk, which never need water and still look beautiful after many months.",
    "cn": "A：為什麼辦公室經理把會議室裡的真植物換成幾乎一模一樣的植物？ B：沒有人有時間照顧真的植物，所以她買了絲綢做的【人造】花，它們永遠不需要澆水，而且幾個月後看起來還是很漂亮。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make something look nicer by adding things to it",
    "sentence": "A: What are the plans for the company's twentieth anniversary dinner, and do you need any help from our department? B: We are going to {{BLANK}} the ballroom with white roses and small candles on every table, so it would be great if some of your staff could come early on Friday to help us.",
    "cn": "A：公司二十週年紀念晚宴的計畫是什麼？需要我們部門幫忙嗎？ B：我們打算用白玫瑰和每張桌上的小蠟燭來【裝飾】宴會廳，所以如果你們部門有些同事週五能早點來幫忙就太好了。"
  },
  {
    "word": "plant",
    "pos": "v.",
    "cn_def": "種植",
    "en_def": "to put seeds or young plants in the ground to grow",
    "sentence": "A: What is the new volunteer project that the human resources department announced in this morning's email to all staff? B: Next Saturday, employees can join a team to {{BLANK}} trees and flowers in the small park across the street, and the company will provide gloves, tools, lunch, and free T-shirts for everyone.",
    "cn": "A：人資部門今天早上寄給全體員工的信中宣布的新志工專案是什麼？ B：下週六，員工可以加入團隊，到對街的小公園【種植】樹木和花卉，公司會提供手套、工具、午餐，還有每人一件免費T恤。"
  },
  {
    "word": "water",
    "pos": "v.",
    "cn_def": "澆水",
    "en_def": "to give water to plants",
    "sentence": "A: Who will take care of the plants in the office while most of the team is away at the trade show in Tokyo next week? B: Ken is staying in Taipei, so he promised to {{BLANK}} them every other morning and move the small ones away from the window if the afternoon sun becomes too strong.",
    "cn": "A：下週大部分團隊成員去東京參加展覽時，誰會照顧辦公室的植物？ B：Ken會留在台北，所以他答應每隔一天早上幫它們【澆水】，如果下午陽光太強，也會把小盆栽從窗邊移開。"
  },
  {
    "word": "fertilize",
    "pos": "v.",
    "cn_def": "施肥",
    "en_def": "to add food to soil to help plants grow",
    "sentence": "A: Why are the flowers in the front garden of our building growing so slowly this year, even though we water them every day? B: The gardener said the soil has lost most of its nutrients, so he is going to {{BLANK}} it once a month, and the flowers should become stronger and healthier by early summer.",
    "cn": "A：為什麼我們大樓前花園的花今年長得這麼慢，即使我們每天都澆水？ B：園丁說土壤已經失去大部分的養分，所以他打算每個月【施肥】一次，到初夏時花應該會長得更強壯、更健康。"
  },
  {
    "word": "prune",
    "pos": "v.",
    "cn_def": "修剪（枝葉）",
    "en_def": "to cut off unwanted branches to help a plant grow",
    "sentence": "A: Why are the rose bushes in front of the hotel entrance so short now, when they were tall and full of flowers last month? B: The gardener had to {{BLANK}} them after the flowering season ended, because removing the old branches helps the plants grow stronger and produce even more flowers next spring.",
    "cn": "A：為什麼飯店入口前的玫瑰叢現在這麼矮，上個月明明還很高而且開滿了花？ B：花季結束後，園丁必須【修剪】它們，因為剪掉老枝能幫助植物長得更強壯，明年春天開出更多花。"
  },
  {
    "word": "wither",
    "pos": "v.",
    "cn_def": "枯萎；凋謝",
    "en_def": "to become dry and weak and start to die",
    "sentence": "A: Why do the flowers on the conference tables look so tired, when they were delivered fresh only this morning? B: The air conditioner broke down during lunch and the room became very hot, so the flowers began to {{BLANK}} quickly, and we need to replace them before the afternoon session starts.",
    "cn": "A：為什麼會議桌上的花看起來這麼沒精神，明明今天早上才剛送來很新鮮？ B：冷氣在午餐時間壞了，房間變得非常熱，所以花很快就開始【枯萎】，我們必須在下午的會議開始前把它們換掉。"
  },
  {
    "word": "perennial",
    "pos": "n.",
    "cn_def": "多年生植物",
    "en_def": "a plant that lives for more than two years",
    "sentence": "A: Why did the building manager choose different plants for the rooftop garden instead of the colorful flowers we had last year? B: She wants each {{BLANK}} to grow back every spring without being replanted, which will save the company money and time, because the old flowers died after only one season.",
    "cn": "A：為什麼大樓經理為屋頂花園選了不同的植物，而不是去年那些色彩繽紛的花？ B：她希望每一株【多年生植物】每年春天都能重新長出來而不必重新種植，這能幫公司省錢又省時間，因為舊的花只活一季就死了。"
  },
  {
    "word": "annual",
    "pos": "n.",
    "cn_def": "一年生植物",
    "en_def": "a plant that lives for only one year or season",
    "sentence": "A: Why do the gardeners at the city park replace all the flowers in the main flower beds at the beginning of every spring? B: Each plant there is an {{BLANK}}, which grows, flowers, and dies within one season, so the staff must buy new ones every year to keep the park looking bright.",
    "cn": "A：為什麼市立公園的園丁每年春天一開始都要把主花圃裡的花全部換掉？ B：那裡的每株植物都是【一年生植物】，在一季之內就發芽、開花、凋謝，所以工作人員每年都必須買新的，讓公園看起來明亮繽紛。"
  },
  {
    "word": "pollen",
    "pos": "n.",
    "cn_def": "花粉",
    "en_def": "a yellow powder in flowers that helps make seeds",
    "sentence": "A: Why does Linda always close the office windows and take medicine in March, even when the weather is warm and sunny? B: She has a strong allergy to the {{BLANK}} from the trees outside our building, so on sunny spring days she sneezes all morning unless she keeps the windows closed.",
    "cn": "A：為什麼Linda每年三月總是關上辦公室的窗戶並吃藥，即使天氣溫暖晴朗？ B：她對我們大樓外樹木的【花粉】嚴重過敏，所以在晴朗的春天，除非把窗戶關上，否則她整個早上都會打噴嚏。"
  },
  {
    "word": "nectar",
    "pos": "n.",
    "cn_def": "花蜜",
    "en_def": "the sweet liquid in flowers that bees collect",
    "sentence": "A: Why did the farm owner plant so many purple flowers around the edge of his fields, when he only sells honey and fruit? B: The bees collect sweet {{BLANK}} from those flowers to make honey, and while they fly from flower to flower, they also help his fruit trees produce a bigger harvest.",
    "cn": "A：為什麼農場主人在田地四周種了這麼多紫色的花，而他只賣蜂蜜和水果？ B：蜜蜂從那些花採集香甜的【花蜜】來釀蜂蜜，而牠們在花朵之間飛來飛去時，也幫助他的果樹結出更多果實。"
  },
  {
    "word": "florist",
    "pos": "n.",
    "cn_def": "花商；花藝師；花店",
    "en_def": "a person or shop that sells and arranges flowers",
    "sentence": "A: Who prepared the beautiful flowers for the grand opening of our new branch, and can we use the same company again next month? B: A local {{BLANK}} on Zhongshan Road made them, and she offers a ten percent discount to business customers who order flowers every month, so I'll call her this afternoon.",
    "cn": "A：我們新分店盛大開幕的漂亮花是誰準備的？下個月我們能再找同一家嗎？ B：是中山路上一位當地的【花藝師】做的，她給每月訂花的企業客戶九折優惠，所以我今天下午會打電話給她。"
  },
  {
    "word": "greenhouse",
    "pos": "n.",
    "cn_def": "溫室",
    "en_def": "a glass building where plants are grown",
    "sentence": "A: How can the farm sell fresh strawberries and roses in the middle of winter, when it is so cold outside? B: They grow everything inside a large glass {{BLANK}} that stays warm all year, and a computer controls the temperature and the light so the plants grow quickly even in January.",
    "cn": "A：外面這麼冷，為什麼那座農場在隆冬時節還能賣新鮮的草莓和玫瑰？ B：他們把所有作物都種在一座全年保持溫暖的大型玻璃【溫室】裡，並由電腦控制溫度和光線，所以即使在一月植物也長得很快。"
  }
];

const MCQS = [
  {
    "q": "Every April, the park is full of visitors taking photos. The cherry trees are covered in pink _____ for about two weeks.",
    "options": [
      "blossom",
      "vase",
      "florist",
      "greenhouse"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please do not touch the flowers in the display. If even one _____ falls off, the arrangement will look incomplete.",
    "options": [
      "florist",
      "petal",
      "greenhouse",
      "nectar"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Cut the end of each _____ before putting the roses in water. This helps the flowers drink and stay fresh longer.",
    "options": [
      "nectar",
      "scent",
      "stem",
      "florist"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The roses have not opened yet. Each tight green _____ should become a full flower in about three days.",
    "options": [
      "vase",
      "pollen",
      "scent",
      "bud"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Customers often stop in front of our shop. The sweet _____ of the jasmine near the door makes them curious.",
    "options": [
      "stem",
      "scent",
      "vase",
      "greenhouse"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "For her retirement party, the team gave Linda a large _____ of tulips. She carried the flowers home with a big smile.",
    "options": [
      "bouquet",
      "petal",
      "pollen",
      "greenhouse"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel hired an artist to design the lobby flowers. Each week, she creates a new _____ using seasonal plants.",
    "options": [
      "pollen",
      "petal",
      "nectar",
      "arrangement"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The restaurant has tables outside in a quiet _____. Guests can enjoy dinner among roses and fruit trees.",
    "options": [
      "bud",
      "petal",
      "garden",
      "pollen"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The flowers from our client arrived this morning. Please put them in a _____ with some cool water.",
    "options": [
      "vase",
      "bud",
      "petal",
      "scent"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "On Valentine's Day, the flower shop sells hundreds of them. A single red _____ is the most popular gift for couples.",
    "options": [
      "sunflower",
      "florist",
      "rose",
      "greenhouse"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "In Taiwan, people often send a potted _____ to celebrate a new business. The elegant flower can last for months.",
    "options": [
      "pollen",
      "orchid",
      "nectar",
      "petal"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The tall yellow _____ always turns its face toward the sun. Its seeds are also a popular healthy snack.",
    "options": [
      "rose",
      "orchid",
      "daisy",
      "sunflower"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "This plant does not need to be replaced every spring. As a _____, it grows back by itself year after year.",
    "options": [
      "annual",
      "florist",
      "perennial",
      "bouquet"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The flowers in the front bed die at the end of summer. Each _____ lives for only one season, so we buy new ones every year.",
    "options": [
      "perennial",
      "florist",
      "greenhouse",
      "annual"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Many people sneeze a lot in spring. The _____ from trees and grass fills the air on warm, windy days.",
    "options": [
      "pollen",
      "nectar",
      "vase",
      "bouquet"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Bees visit thousands of flowers every day. They drink the sweet _____ and carry it back to the hive to make honey.",
    "options": [
      "petal",
      "nectar",
      "stem",
      "vase"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "We ordered the wedding flowers from a local _____. She will deliver them to the hotel early on Saturday morning.",
    "options": [
      "greenhouse",
      "vase",
      "bud",
      "florist"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The farm grows tomatoes in a glass _____ all winter. The warm air inside protects the plants from the cold.",
    "options": [
      "florist",
      "greenhouse",
      "bouquet",
      "petal"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Jasmine is a popular choice for hotel rooms. Its _____ white flowers make the whole space smell sweet.",
    "options": [
      "artificial",
      "colorful",
      "fragrant",
      "delicate"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The old flower beds had only white flowers. The new ones are much more _____, with red, yellow, and purple blooms.",
    "options": [
      "colorful",
      "artificial",
      "delicate",
      "fragrant"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Please handle these orchids carefully. Their petals are very _____ and can tear if you touch them.",
    "options": [
      "colorful",
      "delicate",
      "fragrant",
      "fresh"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "These roses were cut from the farm only this morning. They are so _____ that the drops of dew are still on them.",
    "options": [
      "artificial",
      "colorful",
      "fresh",
      "fragrant"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Nobody in the office has time to water plants. The manager bought _____ flowers made of silk instead.",
    "options": [
      "fresh",
      "fragrant",
      "delicate",
      "artificial"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The plum trees in the mountains _____ in late January. Many tourists drive there to see the white flowers.",
    "options": [
      "bloom",
      "wither",
      "decorate",
      "plant"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The team will _____ the meeting room with balloons and flowers. The party for our new manager starts at five.",
    "options": [
      "wither",
      "bloom",
      "decorate",
      "prune"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Volunteers will _____ two hundred young trees along the river on Saturday. The city will provide all the tools.",
    "options": [
      "plant",
      "wither",
      "bloom",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Ken will _____ the office plants every other morning. Without enough moisture, they would dry out while we are away.",
    "options": [
      "wither",
      "water",
      "bloom",
      "decorate"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The soil in the garden has lost its nutrients. The gardener will _____ it once a month to help the flowers grow.",
    "options": [
      "wither",
      "bloom",
      "decorate",
      "fertilize"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The gardener will _____ the rose bushes in winter. Cutting off the old branches helps them grow stronger next year.",
    "options": [
      "prune",
      "wither",
      "bloom",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The air conditioner broke during the lunch break. In the hot room, the table flowers began to _____ quickly.",
    "options": [
      "prune",
      "fertilize",
      "wither",
      "decorate"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "blossom": {
    "pos": "n.",
    "en_def": "a flower on a tree or bush, especially in spring",
    "cn_def": "（果樹的）花；花朵"
  },
  "petal": {
    "pos": "n.",
    "en_def": "one of the soft colored parts of a flower",
    "cn_def": "花瓣"
  },
  "stem": {
    "pos": "n.",
    "en_def": "the long thin part of a plant that holds the flower",
    "cn_def": "莖；花梗"
  },
  "leaf": {
    "pos": "n.",
    "en_def": "one of the flat green parts of a plant",
    "cn_def": "葉子"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part of a plant that will open into a flower",
    "cn_def": "花苞；芽"
  },
  "bloom": {
    "pos": "v.",
    "en_def": "to produce flowers; to open",
    "cn_def": "開花"
  },
  "fragrant": {
    "pos": "adj.",
    "en_def": "having a pleasant smell",
    "cn_def": "芳香的；香的"
  },
  "scent": {
    "pos": "n.",
    "en_def": "a pleasant smell",
    "cn_def": "香味；氣味"
  },
  "bouquet": {
    "pos": "n.",
    "en_def": "a bunch of flowers arranged nicely",
    "cn_def": "花束"
  },
  "arrangement": {
    "pos": "n.",
    "en_def": "flowers placed together in an attractive way",
    "cn_def": "插花；花藝擺設"
  },
  "garden": {
    "pos": "n.",
    "en_def": "a piece of land where flowers or plants are grown",
    "cn_def": "花園"
  },
  "vase": {
    "pos": "n.",
    "en_def": "a container for holding cut flowers",
    "cn_def": "花瓶"
  },
  "rose": {
    "pos": "n.",
    "en_def": "a flower with a sweet smell and thorns on its stem",
    "cn_def": "玫瑰"
  },
  "tulip": {
    "pos": "n.",
    "en_def": "a bright cup-shaped spring flower, famous in the Netherlands",
    "cn_def": "鬱金香"
  },
  "daisy": {
    "pos": "n.",
    "en_def": "a small flower with white petals and a yellow center",
    "cn_def": "雛菊"
  },
  "lily": {
    "pos": "n.",
    "en_def": "a large trumpet-shaped flower, often white",
    "cn_def": "百合"
  },
  "orchid": {
    "pos": "n.",
    "en_def": "an elegant flower with unusual shapes, often given as a gift",
    "cn_def": "蘭花"
  },
  "sunflower": {
    "pos": "n.",
    "en_def": "a very tall plant with a large yellow flower",
    "cn_def": "向日葵"
  },
  "wildflower": {
    "pos": "n.",
    "en_def": "a flower that grows naturally, not planted by people",
    "cn_def": "野花"
  },
  "colorful": {
    "pos": "adj.",
    "en_def": "having many bright colors",
    "cn_def": "色彩繽紛的"
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily damaged; needing careful handling",
    "cn_def": "嬌嫩的；易損的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "recently picked; not old or dying",
    "cn_def": "新鮮的"
  },
  "artificial": {
    "pos": "adj.",
    "en_def": "made by people, not real",
    "cn_def": "人造的；假的"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make something look nicer by adding things to it",
    "cn_def": "裝飾；布置"
  },
  "plant": {
    "pos": "v.",
    "en_def": "to put seeds or young plants in the ground to grow",
    "cn_def": "種植"
  },
  "water": {
    "pos": "v.",
    "en_def": "to give water to plants",
    "cn_def": "澆水"
  },
  "fertilize": {
    "pos": "v.",
    "en_def": "to add food to soil to help plants grow",
    "cn_def": "施肥"
  },
  "prune": {
    "pos": "v.",
    "en_def": "to cut off unwanted branches to help a plant grow",
    "cn_def": "修剪（枝葉）"
  },
  "wither": {
    "pos": "v.",
    "en_def": "to become dry and weak and start to die",
    "cn_def": "枯萎；凋謝"
  },
  "perennial": {
    "pos": "n.",
    "en_def": "a plant that lives for more than two years",
    "cn_def": "多年生植物"
  },
  "annual": {
    "pos": "n.",
    "en_def": "a plant that lives for only one year or season",
    "cn_def": "一年生植物"
  },
  "pollen": {
    "pos": "n.",
    "en_def": "a yellow powder in flowers that helps make seeds",
    "cn_def": "花粉"
  },
  "nectar": {
    "pos": "n.",
    "en_def": "the sweet liquid in flowers that bees collect",
    "cn_def": "花蜜"
  },
  "florist": {
    "pos": "n.",
    "en_def": "a person or shop that sells and arranges flowers",
    "cn_def": "花商；花藝師；花店"
  },
  "greenhouse": {
    "pos": "n.",
    "en_def": "a glass building where plants are grown",
    "cn_def": "溫室"
  }
};

const EXTRA_GLOSSES = {};
