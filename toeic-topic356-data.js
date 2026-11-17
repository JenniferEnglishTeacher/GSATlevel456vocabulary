// Topic 356 Quiz Data: Sky 天空
// Source word list: https://www.examword.com/group-topic/sky — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T356 - Sky 天空",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sunset",
    "pos": "n.",
    "cn_def": "日落；夕陽",
    "en_def": "the time in the evening when the sun goes down and the sky changes color",
    "sentence": "A: What time should we start the outdoor dinner for our overseas clients on the hotel rooftop next Friday evening? B: Let's begin at six thirty, because the {{BLANK}} over the harbor is usually beautiful around then, and our guests can take photos before the waiters serve the main course.",
    "cn": "A：下週五晚上我們應該幾點開始在飯店頂樓為海外客戶舉辦戶外晚餐？ B：我們六點半開始吧，因為那時港口上方的【日落】通常很美，客人可以在服務生上主菜之前拍照。"
  },
  {
    "word": "magical",
    "pos": "adj.",
    "cn_def": "神奇的；夢幻般的",
    "en_def": "very beautiful and special, as if made by magic",
    "sentence": "A: How did the guests react to the lighting design at the company's year-end party in the hotel ballroom last night? B: Everyone said the room looked {{BLANK}} with thousands of tiny lights on the ceiling, and several managers asked for the designer's contact information for future events.",
    "cn": "A：昨晚在飯店宴會廳舉辦的公司尾牙上，賓客對燈光設計的反應如何？ B：大家都說天花板上有成千上萬的小燈，整個房間看起來【夢幻極了】，好幾位經理還索取了設計師的聯絡方式，以便日後的活動使用。"
  },
  {
    "word": "glimmer",
    "pos": "n.",
    "cn_def": "微光；一絲（希望等）",
    "en_def": "a weak, unsteady light; a small sign of something",
    "sentence": "A: Were the hikers on the company trip able to find their way back to the lodge after the sun went down? B: Yes, they were worried at first, but they finally saw a {{BLANK}} of light from the lodge's windows through the trees and followed it safely down the hill.",
    "cn": "A：太陽下山後，公司旅遊的健行者們有辦法找到回山屋的路嗎？ B：有，他們一開始很擔心，但最後透過樹林看見山屋窗戶透出的一道【微光】，便循著它安全地走下山。"
  },
  {
    "word": "endearing",
    "pos": "adj.",
    "cn_def": "討人喜愛的；惹人憐愛的",
    "en_def": "making people like or love someone or something",
    "sentence": "A: Why do so many customers keep coming back to the small café across from our office building every morning? B: The owner has an {{BLANK}} habit of drawing little clouds and stars on every coffee cup, and people find it so charming that they often share photos online.",
    "cn": "A：為什麼這麼多顧客每天早上一再光顧我們辦公大樓對面的小咖啡館？ B：老闆有一個【討人喜愛的】習慣，會在每個咖啡杯上畫小雲朵和星星，大家覺得很有魅力，常常把照片分享到網路上。"
  },
  {
    "word": "spectacular",
    "pos": "adj.",
    "cn_def": "壯觀的；令人嘆為觀止的",
    "en_def": "very impressive and exciting to see",
    "sentence": "A: Should we book the mountain hotel for the sales team's reward trip, even though it is more expensive than the one in town? B: I think so, because every room has a large balcony with a {{BLANK}} view of the night sky, and the team really deserves something special after such a successful year.",
    "cn": "A：雖然山上的飯店比市區的貴，我們還是要為業務團隊的獎勵旅遊訂那一間嗎？ B：我覺得要，因為每個房間都有大陽台，可以看到【壯觀的】夜空景色，而且團隊在這麼成功的一年之後，確實值得享受一些特別的東西。"
  },
  {
    "word": "mist",
    "pos": "n.",
    "cn_def": "霧；薄霧",
    "en_def": "a thin cloud of tiny water drops in the air near the ground",
    "sentence": "A: Why was the morning ferry to the island canceled, when the weather report said there would be no rain today? B: A thick {{BLANK}} covered the sea early this morning, so the captain could not see far enough to sail safely, but the company plans to restart the service at noon.",
    "cn": "A：既然氣象報告說今天不會下雨，為什麼早上去島上的渡輪取消了？ B：今天一早有一層濃厚的【霧】籠罩海面，船長看不夠遠，無法安全航行，不過公司打算中午恢復航班。"
  },
  {
    "word": "foggy",
    "pos": "adj.",
    "cn_def": "多霧的；起霧的",
    "en_def": "full of thick fog so that it is hard to see",
    "sentence": "A: Is the airport shuttle still leaving at seven tomorrow, or should I tell the visiting engineers to wait at the hotel? B: Tell them to wait, because the weather service says it will be very {{BLANK}} until about nine, and the driver doesn't want to drive on the coastal road when he can't see clearly.",
    "cn": "A：明天機場接駁車還是七點出發嗎？還是我應該請來訪的工程師們在飯店等？ B：請他們等一下，因為氣象局說到九點左右都會很【多霧】，司機不想在看不清楚的時候開沿海公路。"
  },
  {
    "word": "overcast",
    "pos": "adj.",
    "cn_def": "陰天的；多雲的",
    "en_def": "covered with gray clouds",
    "sentence": "A: Do you think we can still hold the company picnic in the park this Saturday, or should we rent the community hall instead? B: The forecast says the sky will be {{BLANK}} all day, but it probably won't rain, so we can keep the picnic outdoors and bring a few large umbrellas just in case.",
    "cn": "A：你覺得這週六我們還能在公園舉辦公司野餐嗎？還是應該改租社區活動中心？ B：預報說整天天空都會是【陰天】，但大概不會下雨，所以野餐可以照樣在戶外辦，再帶幾把大傘以防萬一。"
  },
  {
    "word": "hazy",
    "pos": "adj.",
    "cn_def": "霧濛濛的；朦朧的",
    "en_def": "not clear because of smoke, dust, or light mist in the air",
    "sentence": "A: Why can't we see the mountains from the conference room window today, when the view is usually so clear? B: Air pollution from the factories has made the sky very {{BLANK}} this week, so the city has advised people to stay indoors and wear masks if they must go outside.",
    "cn": "A：平常景色都很清楚，為什麼今天從會議室窗戶看不到山？ B：工廠排放的空氣污染讓這週的天空非常【霧濛濛】，所以市政府建議民眾待在室內，若必須外出要戴口罩。"
  },
  {
    "word": "obstruct",
    "pos": "v.",
    "cn_def": "阻擋；遮蔽；妨礙",
    "en_def": "to block something so that it cannot be seen or cannot move through",
    "sentence": "A: Why are the residents on the top floors complaining about the new office tower that is being built next to their apartment building? B: They say the tall building will {{BLANK}} their view of the sky and the river, and they are worried that their apartments will lose value once construction is finished.",
    "cn": "A：為什麼高樓層的住戶在抱怨他們公寓旁正在興建的新辦公大樓？ B：他們說那棟高樓會【遮擋】他們看天空和河流的視野，也擔心工程完工後公寓會貶值。"
  },
  {
    "word": "stunning",
    "pos": "adj.",
    "cn_def": "極美的；令人驚艷的",
    "en_def": "extremely beautiful or attractive",
    "sentence": "A: Did the photographer you hired for the hotel's new brochure send the pictures of the rooftop garden yet? B: Yes, she sent them this morning, and the photo of the garden under the colorful evening sky is absolutely {{BLANK}}, so I want to use it on the front cover.",
    "cn": "A：你為飯店新簡介請的攝影師把頂樓花園的照片寄來了嗎？ B：寄來了，她今天早上寄的，那張在彩色傍晚天空下的花園照片實在【美得驚人】，所以我想把它用在封面。"
  },
  {
    "word": "dreary",
    "pos": "adj.",
    "cn_def": "陰沉的；沉悶的",
    "en_def": "dull, gray, and making you feel sad or bored",
    "sentence": "A: How has the team's mood been since the long rainy season started and the project deadline was moved forward? B: Well, the gray and {{BLANK}} weather has made everyone feel tired, so I'm planning a small lunch party on Friday to cheer people up and celebrate our progress.",
    "cn": "A：自從漫長的雨季開始、專案截止日又提前之後，團隊的士氣如何？ B：嗯，灰暗又【陰沉】的天氣讓大家都覺得很疲憊，所以我打算週五辦個小型午餐聚會，讓大家打起精神，也慶祝我們的進度。"
  },
  {
    "word": "depressed",
    "pos": "adj.",
    "cn_def": "沮喪的；消沉的",
    "en_def": "feeling very sad and without hope or energy",
    "sentence": "A: Why does Mark look so tired and quiet in meetings lately, even though his sales numbers are still very good? B: He told me he has felt a bit {{BLANK}} since winter started because the sky is dark when he leaves home and dark again when he finishes work, so he rarely sees the sun.",
    "cn": "A：為什麼馬克最近開會時看起來這麼疲倦又安靜，即使他的業績還是很好？ B：他跟我說入冬以來他覺得有點【消沉】，因為他出門時天是黑的，下班時天又黑了，所以很少看到太陽。"
  }
];

const MCQS = [
  {
    "q": "The tour boat leaves the pier at half past five. Passengers can enjoy dinner while watching the _____ turn the western sky orange and pink.",
    "options": [
      "sunset",
      "mist",
      "glimmer",
      "receipt"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The children's museum added a new star room last month. Visitors say lying under the glowing ceiling feels truly _____, like floating in space.",
    "options": [
      "dreary",
      "foggy",
      "magical",
      "depressed"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After months of falling sales, the new product brought a _____ of hope to the company. Managers believe profits may finally rise next quarter.",
    "options": [
      "mist",
      "glimmer",
      "sunset",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Customers love the hotel's elderly doorman because of his _____ habit of greeting every child with a small paper star. Many families mention him in reviews.",
    "options": [
      "overcast",
      "hazy",
      "foggy",
      "endearing"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The fireworks show at the harbor festival was truly _____. More than fifty thousand people gathered along the waterfront to watch it.",
    "options": [
      "overcast",
      "depressed",
      "spectacular",
      "foggy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Early in the morning, a light _____ rose from the lake behind the resort. It cleared away by nine, and guests could see the mountains.",
    "options": [
      "mist",
      "sunset",
      "glimmer",
      "ticket"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Several flights were delayed this morning because conditions at the airport were too _____. Pilots could not see the runway clearly until noon.",
    "options": [
      "endearing",
      "magical",
      "stunning",
      "foggy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The sky will remain _____ throughout the day, with thick gray clouds but little chance of rain. Temperatures should stay around twenty degrees.",
    "options": [
      "endearing",
      "overcast",
      "magical",
      "depressed"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Smoke from distant forest fires has left the city sky _____ and gray this week. Residents with breathing problems are advised to stay indoors.",
    "options": [
      "hazy",
      "endearing",
      "magical",
      "spectacular"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please do not park delivery vans in front of the loading dock. They _____ the entrance and prevent trucks from unloading goods.",
    "options": [
      "admire",
      "celebrate",
      "obstruct",
      "approve"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The new art gallery has a glass roof that offers a _____ view of the night sky. It has quickly become a popular spot for photographers.",
    "options": [
      "dreary",
      "depressed",
      "foggy",
      "stunning"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "After a week of cold rain and gray skies, the office felt dull and _____. The manager brought flowers and music to lift everyone's mood.",
    "options": [
      "spectacular",
      "dreary",
      "magical",
      "stunning"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Some employees feel _____ during the long winter months when they rarely see sunlight. The company now offers bright lamps and a free counseling service.",
    "options": [
      "overcast",
      "spectacular",
      "depressed",
      "endearing"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The rooftop restaurant is popular with couples. Most guests reserve window tables to watch the _____ as the sun slowly disappears into the ocean.",
    "options": [
      "sunset",
      "mist",
      "glimmer",
      "invoice"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The theme park's light parade creates a _____ atmosphere for families every night. Children dressed as princes and fairies dance along the main street.",
    "options": [
      "depressed",
      "magical",
      "overcast",
      "hazy"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The hikers walked through the dark forest for an hour. Finally, they saw a faint _____ of light from the cabin window ahead.",
    "options": [
      "sunset",
      "mist",
      "budget",
      "glimmer"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The bakery's new mascot is a small cloud with big eyes. Shoppers find its shy smile very _____ and buy many cloud cookies.",
    "options": [
      "endearing",
      "overcast",
      "foggy",
      "dreary"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Visitors to the observatory can enjoy a _____ display of shooting stars every August. Tickets for the event usually sell out within hours.",
    "options": [
      "dreary",
      "depressed",
      "spectacular",
      "foggy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The waterfall sends a cool _____ into the air, so visitors near the bridge often get wet. Please keep cameras inside waterproof bags.",
    "options": [
      "sunset",
      "mist",
      "glimmer",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Drivers should use their low beams on _____ mornings when it is difficult to see far ahead. High beams only reflect off the thick air.",
    "options": [
      "endearing",
      "stunning",
      "magical",
      "foggy"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Although the morning was _____, the clouds broke up after lunch. The outdoor team-building activities continued as planned under clear blue skies.",
    "options": [
      "endearing",
      "depressed",
      "overcast",
      "magical"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Because of heavy traffic pollution, the view from the observation deck was _____ today. Visitors could barely make out the outline of the distant hills.",
    "options": [
      "hazy",
      "endearing",
      "magical",
      "spectacular"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The city has asked the hotel to remove the large sign on its roof. Officials say it may _____ pilots' view of the nearby airport runway.",
    "options": [
      "celebrate",
      "deliver",
      "approve",
      "obstruct"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The bride chose the hilltop venue for its _____ views of the valley below. Guests took hundreds of photos during the outdoor ceremony.",
    "options": [
      "depressed",
      "stunning",
      "overcast",
      "dreary"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The old waiting room was a _____ space with gray walls and no windows. After the renovation, it is now bright, colorful, and comfortable.",
    "options": [
      "spectacular",
      "stunning",
      "dreary",
      "magical"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Kevin felt _____ after his proposal was rejected for the third time. His colleagues took him out for lunch to cheer him up.",
    "options": [
      "depressed",
      "overcast",
      "hazy",
      "endearing"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Boxes stored in the hallway can _____ the emergency exit. Please move all deliveries to the storage room before the fire inspection on Friday.",
    "options": [
      "attend",
      "obstruct",
      "publish",
      "hire"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Our evening cruise departs at six and returns after dark. The best time to take photos is during the _____, when the sky turns red.",
    "options": [
      "mist",
      "glimmer",
      "contract",
      "sunset"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The mountain road was covered in a thick morning _____, so the tour bus drove slowly. Guides told passengers the view would clear later.",
    "options": [
      "mist",
      "sunset",
      "glimmer",
      "salary"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The quarterly report showed a small _____ of improvement in customer satisfaction. However, managers agree that much more work is still needed.",
    "options": [
      "mist",
      "sunset",
      "glimmer",
      "method"
    ],
    "answer": 2,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "sunset": {
    "pos": "n.",
    "en_def": "the time in the evening when the sun goes down and the sky changes color",
    "cn_def": "日落；夕陽"
  },
  "magical": {
    "pos": "adj.",
    "en_def": "very beautiful and special, as if made by magic",
    "cn_def": "神奇的；夢幻般的"
  },
  "glimmer": {
    "pos": "n.",
    "en_def": "a weak, unsteady light; a small sign of something",
    "cn_def": "微光；一絲（希望等）"
  },
  "endearing": {
    "pos": "adj.",
    "en_def": "making people like or love someone or something",
    "cn_def": "討人喜愛的；惹人憐愛的"
  },
  "spectacular": {
    "pos": "adj.",
    "en_def": "very impressive and exciting to see",
    "cn_def": "壯觀的；令人嘆為觀止的"
  },
  "mist": {
    "pos": "n.",
    "en_def": "a thin cloud of tiny water drops in the air near the ground",
    "cn_def": "霧；薄霧"
  },
  "foggy": {
    "pos": "adj.",
    "en_def": "full of thick fog so that it is hard to see",
    "cn_def": "多霧的；起霧的"
  },
  "overcast": {
    "pos": "adj.",
    "en_def": "covered with gray clouds",
    "cn_def": "陰天的；多雲的"
  },
  "hazy": {
    "pos": "adj.",
    "en_def": "not clear because of smoke, dust, or light mist in the air",
    "cn_def": "霧濛濛的；朦朧的"
  },
  "obstruct": {
    "pos": "v.",
    "en_def": "to block something so that it cannot be seen or cannot move through",
    "cn_def": "阻擋；遮蔽；妨礙"
  },
  "stunning": {
    "pos": "adj.",
    "en_def": "extremely beautiful or attractive",
    "cn_def": "極美的；令人驚艷的"
  },
  "dreary": {
    "pos": "adj.",
    "en_def": "dull, gray, and making you feel sad or bored",
    "cn_def": "陰沉的；沉悶的"
  },
  "depressed": {
    "pos": "adj.",
    "en_def": "feeling very sad and without hope or energy",
    "cn_def": "沮喪的；消沉的"
  }
};

const EXTRA_GLOSSES = {};
