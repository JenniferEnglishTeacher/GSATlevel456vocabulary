// Topic 20 Quiz Data: Art 藝術
// Source word list: https://www.examword.com/group-topic/art — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T20 - Art 藝術",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aesthetic",
    "pos": "n.",
    "cn_def": "美感；美學風格",
    "en_def": "a particular style or idea of what is beautiful",
    "sentence": "A: The new café near our office is always full, even though its coffee costs more than the shops around it, so why do so many people go there? B: Customers love its simple Japanese {{BLANK}}, with wooden tables, soft lights, and plants everywhere, so they enjoy taking photos and sharing them online.",
    "cn": "A：我們辦公室附近那家新咖啡廳總是客滿，雖然咖啡比附近店家貴，為什麼那麼多人去？ B：顧客很喜歡它簡約的日式【美學風格】，有木頭桌、柔和的燈光，到處都是植物，所以他們喜歡拍照並上傳網路分享。"
  },
  {
    "word": "composition",
    "pos": "n.",
    "cn_def": "構圖；（作品的）組成",
    "en_def": "the way the parts of a picture or piece of music are arranged",
    "sentence": "A: The photographer took hundreds of pictures of our new product yesterday, but the marketing manager only chose three of them for the brochure, so why did she pick those? B: She said their {{BLANK}} was the best, because the product is in the center, the background is simple, and the light falls nicely on the logo.",
    "cn": "A：攝影師昨天幫我們的新產品拍了好幾百張照片，但行銷經理只選了三張放進手冊，她為什麼選那幾張？ B：她說那幾張的【構圖】最好，因為產品位於中央、背景簡單，光線也很好地打在商標上。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和諧；協調",
    "en_def": "a pleasant mix of colors, sounds, or parts that go well together",
    "sentence": "A: The interior designer used blue, green, and light gray in our new meeting rooms, and everyone says the rooms feel very relaxing, so how did she choose those colors? B: She said these colors work in {{BLANK}} with each other and with the view of the park, so people feel calm during long meetings.",
    "cn": "A：室內設計師在我們新會議室用了藍色、綠色和淺灰色，大家都說房間感覺很放鬆，她是怎麼選這些顏色的？ B：她說這些顏色彼此之間以及和公園景色都很【和諧】，所以大家在長時間開會時會覺得平靜。"
  },
  {
    "word": "texture",
    "pos": "n.",
    "cn_def": "質地；紋理",
    "en_def": "the way a surface feels when you touch it",
    "sentence": "A: The furniture company sent us two kinds of fabric for the new sofas in the hotel lobby, and both are the same color, so which one should we choose? B: I prefer the one with the soft {{BLANK}}, because guests will sit on these sofas for a long time while they wait, and it feels warm and comfortable.",
    "cn": "A：家具公司寄給我們兩種用在飯店大廳新沙發的布料，顏色都一樣，我們該選哪一種？ B：我比較喜歡【質地】柔軟的那一種，因為客人等候時會在沙發上坐很久，而那種布摸起來溫暖又舒服。"
  },
  {
    "word": "palette",
    "pos": "n.",
    "cn_def": "色調；調色盤",
    "en_def": "the range of colors an artist or designer uses",
    "sentence": "A: The new logo for our tea company looks very bright and modern, but some older customers say it does not feel like our brand anymore, so what can we do? B: The designer can try a softer color {{BLANK}}, such as light green and warm brown, which reminds people of fresh tea leaves and our long history.",
    "cn": "A：我們茶葉公司的新商標看起來非常鮮豔又現代，但有些老顧客說感覺不像我們的品牌了，我們能怎麼做？ B：設計師可以試試比較柔和的【色調】，例如淺綠和暖棕色，讓人聯想到新鮮茶葉和我們悠久的歷史。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏",
    "en_def": "a regular, repeated pattern of sounds or movements",
    "sentence": "A: The video for our new running shoes looks great, but the manager says it feels a little slow and boring, so how can we make it more exciting? B: We can add music with a strong {{BLANK}}, and then cut the video so that each step of the runners matches the beat of the drums.",
    "cn": "A：我們新跑鞋的影片看起來很棒，但經理說感覺有點慢又無聊，我們要怎麼讓它更刺激？ B：我們可以加上【節奏】強烈的音樂，然後剪輯影片，讓跑者的每一步都配合鼓聲的節拍。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比",
    "en_def": "a clear difference between two things, such as colors",
    "sentence": "A: Many customers say they cannot read the price tags in our store from far away, especially older people, so what is wrong with the design? B: The problem is the low {{BLANK}} between the light yellow letters and the white background, so we should print the prices in dark blue instead.",
    "cn": "A：很多顧客說他們從遠處看不清楚我們店裡的價格標籤，尤其是年長者，設計出了什麼問題？ B：問題在於淡黃色字和白色背景之間的【對比】太低，所以我們應該改用深藍色印價格。"
  },
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表達；表現",
    "en_def": "the showing of a feeling or idea through words, art, or the face",
    "sentence": "A: Our company is paying for an art class for staff every Friday evening, but some people say they cannot draw at all, so should they still join? B: Yes, they should, because the teacher says the class is about personal {{BLANK}}, not perfect drawing, and it is a great way to relax after work.",
    "cn": "A：公司每週五晚上出錢讓員工上美術課，但有些人說他們完全不會畫畫，他們還該參加嗎？ B：應該，因為老師說這堂課重點在於個人的【表達】，不是畫得完美，而且這是下班後放鬆的好方法。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "啟發；激勵",
    "en_def": "to give someone the idea or wish to do something",
    "sentence": "A: Why did the design team visit the old temples and night markets in Tainan last week, when they are supposed to be designing our new packaging? B: The manager hoped the trip would {{BLANK}} them with new ideas, because she wants the packaging to show the colors and culture of southern Taiwan.",
    "cn": "A：設計團隊應該在設計我們的新包裝，為什麼上週跑去台南參觀老廟和夜市？ B：經理希望這趟旅程能【啟發】他們新的點子，因為她想讓包裝呈現南台灣的色彩和文化。"
  },
  {
    "word": "abstract",
    "pos": "adj.",
    "cn_def": "抽象的",
    "en_def": "not showing people or things in a realistic way, but using shapes and colors",
    "sentence": "A: The bank bought a large painting for the main lobby, but it only has circles and lines in red and black, and some customers ask what it means. B: It is an {{BLANK}} painting, so it does not show any real objects, and the artist says each person can find their own meaning in the shapes.",
    "cn": "A：銀行買了一幅大畫掛在主大廳，但畫裡只有紅色和黑色的圓圈和線條，有些顧客問那是什麼意思。 B：那是一幅【抽象】畫，所以不呈現任何真實的物體，畫家說每個人都可以在這些形狀中找到自己的意義。"
  },
  {
    "word": "melody",
    "pos": "n.",
    "cn_def": "旋律",
    "en_def": "the main tune in a piece of music",
    "sentence": "A: Our new TV advertisement is finished, but the manager wants people to remember our brand after they hear the music only once, so what should we do? B: We should use a short and simple {{BLANK}} that people can easily hum, and play it again at the end when our logo appears.",
    "cn": "A：我們的新電視廣告完成了，但經理希望人們只聽過一次音樂就能記住我們的品牌，我們該怎麼做？ B：我們應該使用簡短好記、讓人容易哼唱的【旋律】，並在最後商標出現時再播放一次。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "基調；語氣",
    "en_def": "the general feeling or style of something, such as writing or music",
    "sentence": "A: The poster for our charity concert looks very dark, and the music group thinks it may scare away families with children, so how should we change it? B: Let's use brighter colors and a happier photo, so the poster has a warm and friendly {{BLANK}} that matches the cheerful music of the concert.",
    "cn": "A：我們慈善音樂會的海報看起來很陰暗，樂團認為可能會嚇跑有小孩的家庭，我們該怎麼修改？ B：我們用比較明亮的顏色和比較歡樂的照片吧，讓海報有溫暖友善的【基調】，搭配音樂會歡快的音樂。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a pleasing arrangement in which no part looks too strong or heavy",
    "sentence": "A: The new website for our hotel has many large pictures on the left side and only a small block of text on the right, so does it look good to you? B: Not really, because the page has no {{BLANK}}, so we should make the pictures smaller and give the text more space on the right side.",
    "cn": "A：我們飯店的新網站左邊有很多大張圖片，右邊只有一小塊文字，你覺得好看嗎？ B：不太好看，因為頁面缺乏【平衡】，我們應該把圖片縮小，讓右邊的文字有更多空間。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "充滿活力的；動感的",
    "en_def": "full of energy and movement",
    "sentence": "A: The sports company wants its new advertisement to look exciting and powerful, but our first version shows the athletes just standing and smiling, so what should we change? B: We need more {{BLANK}} shots of the athletes jumping and running, with fast camera movement and bright lights, so the advertisement feels full of energy.",
    "cn": "A：那家運動公司希望新廣告看起來刺激又有力量，但我們的第一版只拍運動員站著微笑，我們該改什麼？ B：我們需要更多運動員跳躍和奔跑的【動感】鏡頭，加上快速的鏡頭移動和明亮的燈光，讓廣告充滿活力。"
  },
  {
    "word": "form",
    "pos": "n.",
    "cn_def": "形式；形狀",
    "en_def": "the shape of something, or a type of art",
    "sentence": "A: Our company wants to add some art to the garden in front of the new office building, but we cannot decide between paintings, photographs, and other ideas, so what do you suggest? B: I think a large metal sculpture is the best {{BLANK}} of art for a garden, because it can stay outside in the rain and the sun.",
    "cn": "A：我們公司想在新辦公大樓前的花園增添一些藝術品，但我們在畫作、攝影和其他點子之間猶豫不決，你有什麼建議？ B：我認為大型金屬雕塑是最適合花園的藝術【形式】，因為它可以在雨天和大太陽下放在戶外。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興演出；臨時發揮",
    "en_def": "to make up music, words, or actions without planning",
    "sentence": "A: The band at our company dinner lost their song sheets in the taxi, and they are supposed to start playing in ten minutes, so are they going to cancel the show? B: No, the band leader says they will {{BLANK}} for the first part of the evening, and their manager is bringing new copies from the studio.",
    "cn": "A：公司晚宴的樂團把樂譜掉在計程車上了，他們再十分鐘就要開始演奏，表演會取消嗎？ B：不會，樂團團長說晚會前半段他們會【即興演奏】，他們的經理正從錄音室帶新的樂譜過來。"
  },
  {
    "word": "mood",
    "pos": "n.",
    "cn_def": "氛圍；情緒",
    "en_def": "the feeling that a place, picture, or piece of music gives you",
    "sentence": "A: The owner of the new restaurant wants guests to feel relaxed and stay longer at dinner, but the room still feels cold and too bright, so what can we change? B: We can create a warm {{BLANK}} with soft yellow lights, quiet jazz music, and a few paintings of the countryside on the walls.",
    "cn": "A：新餐廳的老闆希望客人用晚餐時感到放鬆並待久一點，但空間還是感覺冰冷又太亮，我們能改什麼？ B：我們可以用柔和的黃色燈光、輕柔的爵士樂，再加上幾幅鄉村風景畫掛在牆上，營造溫暖的【氛圍】。"
  },
  {
    "word": "motif",
    "pos": "n.",
    "cn_def": "圖案；主題（重複出現的元素）",
    "en_def": "a shape or idea that is repeated in a design or work of art",
    "sentence": "A: The new uniforms for our hotel staff look nice, but the manager feels they do not show anything special about our hotel, so how can we improve them? B: We could add a small flower {{BLANK}} from our hotel logo on the collar and the pockets, so every uniform clearly matches the style of the building.",
    "cn": "A：我們飯店員工的新制服看起來不錯，但經理覺得無法展現我們飯店的特色，我們要怎麼改進？ B：我們可以在領口和口袋加上飯店商標中的小花【圖案】，讓每件制服都明顯和建築風格相配。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "詮釋；解讀",
    "en_def": "to explain or understand the meaning of something",
    "sentence": "A: Our art gallery is showing modern paintings this month, and many visitors say they do not understand them at all, so how can we help them? B: We can hire a guide to help visitors {{BLANK}} each painting, and we can also put short notes beside the paintings in both Chinese and English.",
    "cn": "A：我們美術館這個月展出現代畫作，很多參觀者說完全看不懂，我們要怎麼幫助他們？ B：我們可以聘請導覽員幫助參觀者【解讀】每一幅畫，也可以在畫作旁放上中英文的簡短說明。"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "cn_def": "畫布；油畫",
    "en_def": "a strong cloth that artists paint on, or a painting on it",
    "sentence": "A: The artist we hired is going to paint a large picture of the city for our new office lobby, so how big will the finished painting be? B: She is using a {{BLANK}} that is three meters wide, so we will need to clear the wall near the entrance and ask the building manager for a special light.",
    "cn": "A：我們聘請的畫家要為新辦公室大廳畫一幅大型城市畫作，完成的畫會有多大？ B：她用的【畫布】有三公尺寬，所以我們需要清空入口附近的牆面，並請大樓管理員裝一盞特別的燈。"
  },
  {
    "word": "lyrical",
    "pos": "adj.",
    "cn_def": "抒情的；如詩般的",
    "en_def": "expressing feelings in a beautiful, song-like way",
    "sentence": "A: The hotel wants to play some music in the lobby in the evening, but the guests did not like the loud pop songs we tried last week, so what should we play now? B: Try some soft and {{BLANK}} piano music, because it sounds beautiful and emotional, and guests can still talk quietly while they wait.",
    "cn": "A：飯店想在晚上的大廳播放一些音樂，但客人不喜歡我們上週試的大聲流行歌曲，現在該播什麼？ B：試試輕柔又【抒情】的鋼琴音樂，因為它聽起來優美又感人，客人等候時也還能小聲交談。"
  },
  {
    "word": "vivid",
    "pos": "adj.",
    "cn_def": "鮮豔的；生動的",
    "en_def": "very bright and strong (colors) or very clear (descriptions)",
    "sentence": "A: Our travel agency's brochure for Hualien uses gray and pale photos, and very few customers have booked that tour, so how can we make it more attractive? B: We should use {{BLANK}} pictures of the blue sea and the green mountains, because bright colors make people want to visit a place right away.",
    "cn": "A：我們旅行社的花蓮手冊用的是灰暗又淡的照片，很少顧客報名那個行程，要怎麼讓它更吸引人？ B：我們應該使用藍色大海和翠綠山脈的【鮮豔】照片，因為明亮的色彩會讓人想立刻去那個地方。"
  },
  {
    "word": "craft",
    "pos": "n.",
    "cn_def": "工藝；手藝",
    "en_def": "a skill of making things by hand, or the things made",
    "sentence": "A: Our company wants to give special gifts to our overseas clients this year, but we do not want to buy the usual cheap souvenirs from the airport, so do you have ideas? B: We could buy local bamboo {{BLANK}} from a small workshop in Nantou, because each piece is handmade and shows a traditional skill from Taiwan.",
    "cn": "A：公司今年想送特別的禮物給海外客戶，但不想買機場那種常見的便宜紀念品，你有什麼點子嗎？ B：我們可以向南投一間小工坊購買當地的竹【工藝】品，因為每件都是手工製作，展現台灣的傳統技藝。"
  },
  {
    "word": "symbolism",
    "pos": "n.",
    "cn_def": "象徵手法；象徵意義",
    "en_def": "the use of images or objects to represent ideas",
    "sentence": "A: The new poster for our bank shows a small tree growing out of a pile of coins, and some customers are asking why it looks like that, so what does it mean? B: The {{BLANK}} is simple, because the tree shows that your savings can grow slowly but strongly over time if you keep them in our bank.",
    "cn": "A：我們銀行的新海報畫著一棵從一堆硬幣中長出來的小樹，有些顧客在問為什麼長那樣，那是什麼意思？ B：它的【象徵意義】很簡單，那棵樹代表只要把存款放在我們銀行，你的儲蓄就能隨著時間慢慢穩健地成長。"
  },
  {
    "word": "tempo",
    "pos": "n.",
    "cn_def": "（音樂的）速度；節拍",
    "en_def": "the speed of a piece of music",
    "sentence": "A: The fitness center wants new music for its morning exercise class, but the members say the current songs are too slow to keep them moving, so what should we choose? B: Choose songs with a faster {{BLANK}}, about one hundred and thirty beats per minute, because quick music helps people move and work harder.",
    "cn": "A：健身中心想為早上的運動課換新音樂，但會員說目前的歌太慢，沒辦法讓他們一直動，該選什麼？ B：選擇【速度】較快的歌，大約每分鐘一百三十拍，因為快節奏的音樂能幫助人們動起來、更賣力運動。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿態",
    "en_def": "a movement of the hands or body that shows a meaning or feeling",
    "sentence": "A: The dancer in our new advertisement only moves her hands slowly at the end, but the client says that last moment is the most important part, so why is that? B: Her final {{BLANK}} looks like she is opening a door, and it shows that our company opens new chances for young people.",
    "cn": "A：我們新廣告裡的舞者在最後只是慢慢地移動雙手，但客戶說最後那一刻是最重要的部分，為什麼？ B：她最後的【手勢】看起來像是在打開一扇門，表示我們公司為年輕人開啟新的機會。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at making new and original things or ideas",
    "sentence": "A: Our sales of the new juice are lower than we expected, and the old advertisements have not worked well with young people, so who should we ask for help? B: We should hire a more {{BLANK}} advertising team, because they can make fun short videos and new ideas that young people want to share online.",
    "cn": "A：我們新果汁的銷量比預期低，以前的廣告對年輕人效果不好，我們該找誰幫忙？ B：我們應該聘請一個更有【創意】的廣告團隊，因為他們能做出有趣的短影片和年輕人想上網分享的新點子。"
  },
  {
    "word": "nuance",
    "pos": "n.",
    "cn_def": "細微差別",
    "en_def": "a very small difference in color, meaning, or feeling",
    "sentence": "A: The translation of our English advertisement into Japanese is finished, but the manager in Tokyo says it sounds a little strange, so what is the problem? B: The translator missed a small {{BLANK}} in the slogan, because the Japanese word sounds too serious, while the English one sounds friendly and light.",
    "cn": "A：我們英文廣告的日文翻譯完成了，但東京的經理說聽起來有點奇怪，問題在哪裡？ B：譯者漏掉了標語中一個【細微差別】，因為日文用字聽起來太嚴肅，而英文的則聽起來親切又輕鬆。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "relating to seeing or things that you can see",
    "sentence": "A: Our sales presentation has twenty slides full of long sentences and numbers, and the clients looked bored last time, so how can we make it better? B: Let's add more {{BLANK}} information, such as charts, photos, and simple icons, because people understand and remember pictures much faster than long text.",
    "cn": "A：我們的業務簡報有二十張投影片，都塞滿長句和數字，上次客戶看起來很無聊，我們要怎麼改善？ B：我們多加一些【視覺】資訊吧，像是圖表、照片和簡單的圖示，因為人們理解和記住圖片的速度比長篇文字快得多。"
  },
  {
    "word": "perform",
    "pos": "v.",
    "cn_def": "表演；演出",
    "en_def": "to play music, dance, or act in front of an audience",
    "sentence": "A: The company's year-end party is in three weeks, and the manager wants some entertainment after dinner, so has anyone offered to do something? B: Yes, five people from the accounting department will {{BLANK}} a traditional dance, and they have been practicing every evening after work in the meeting room.",
    "cn": "A：公司尾牙再三週就到了，經理希望晚餐後有些表演節目，有人自願要做什麼嗎？ B：有，會計部的五個人要【表演】一支傳統舞蹈，他們每天下班後都在會議室裡練習。"
  }
];

const MCQS = [
  {
    "q": "The hotel's clean, modern _____ attracts many young travelers. Its rooms appear often in photos on social media.",
    "options": [
      "melody",
      "tempo",
      "aesthetic",
      "gesture"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The photographer changed the _____ of the picture several times. She wanted the new phone to stand out in the center.",
    "options": [
      "composition",
      "tempo",
      "melody",
      "craft"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The colors of the new office work in perfect _____. Visitors often say the space feels calm and welcoming.",
    "options": [
      "gesture",
      "tempo",
      "canvas",
      "harmony"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "This paper has a rough _____ that customers enjoy touching. It is used for our most expensive wedding cards.",
    "options": [
      "melody",
      "texture",
      "tempo",
      "gesture"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The designer chose a _____ of soft blues and greens for the hospital. These colors help patients feel relaxed.",
    "options": [
      "melody",
      "tempo",
      "gesture",
      "palette"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The workers on the line move to a steady _____. Each box is packed and closed every ten seconds.",
    "options": [
      "palette",
      "canvas",
      "rhythm",
      "texture"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The black letters on the yellow sign create a strong _____. Drivers can read it clearly even at night.",
    "options": [
      "melody",
      "contrast",
      "tempo",
      "gesture"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Dance is a powerful form of _____ for many people. It lets them show feelings that are hard to put into words.",
    "options": [
      "expression",
      "palette",
      "canvas",
      "texture"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The speaker's story about starting a small business may _____ young listeners. Some might open their own shops one day.",
    "options": [
      "interpret",
      "inspire",
      "improvise",
      "perform"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The lobby has a large _____ painting with only circles and lines. It does not show any real people or objects.",
    "options": [
      "lyrical",
      "visual",
      "abstract",
      "creative"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company's new song has a simple _____ that is easy to remember. Many customers hum it after watching the ad.",
    "options": [
      "canvas",
      "texture",
      "palette",
      "melody"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The manager's email had a friendly _____. She thanked the team warmly before asking for their reports.",
    "options": [
      "tone",
      "canvas",
      "tempo",
      "motif"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The website design needs better _____. Right now, the left side is crowded while the right side is almost empty.",
    "options": [
      "melody",
      "balance",
      "tempo",
      "gesture"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The advertising agency is known for its _____ and exciting videos. Its ads are full of movement and energy.",
    "options": [
      "abstract",
      "lyrical",
      "dynamic",
      "visual"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Photography is a popular _____ of art among young people. Most of them take pictures with their phones every day.",
    "options": [
      "form",
      "melody",
      "tempo",
      "nuance"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "When the slides stopped working, the speaker had to _____. She told stories from her own career instead.",
    "options": [
      "interpret",
      "inspire",
      "perform",
      "improvise"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Soft lights and quiet music create a relaxing _____ in the spa. Guests often fall asleep during their massages.",
    "options": [
      "mood",
      "canvas",
      "tempo",
      "motif"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "A wave _____ appears on every product of the surf shop. It helps customers recognize the brand quickly.",
    "options": [
      "tempo",
      "motif",
      "harmony",
      "nuance"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Different readers may _____ the poem in different ways. The teacher encourages students to share their own ideas.",
    "options": [
      "improvise",
      "perform",
      "inspire",
      "interpret"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The artist painted the city view on a large _____. The finished work now hangs in the bank's main lobby.",
    "options": [
      "melody",
      "tempo",
      "canvas",
      "nuance"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The singer is famous for her soft, _____ songs about love and home. Her concerts are always quiet and emotional.",
    "options": [
      "dynamic",
      "visual",
      "abstract",
      "lyrical"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The brochure uses _____ photos of the beach and sky. The bright colors make customers want to book a trip.",
    "options": [
      "vivid",
      "lyrical",
      "abstract",
      "visual"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The market sells local _____ such as baskets and pottery. All items are made by hand in nearby villages.",
    "options": [
      "melody",
      "craft",
      "tempo",
      "nuance"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The white bird in the logo is an example of _____. It represents peace and the company's care for people.",
    "options": [
      "tempo",
      "melody",
      "symbolism",
      "texture"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The band slowed down the _____ for the last song. The softer music helped the evening end calmly.",
    "options": [
      "canvas",
      "palette",
      "texture",
      "tempo"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Opening the door for a guest is a small but kind _____. It shows good manners and respect.",
    "options": [
      "gesture",
      "tempo",
      "palette",
      "melody"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "We need a _____ person to design the new advertising campaign. The ideas must be fresh and original.",
    "options": [
      "lyrical",
      "abstract",
      "creative",
      "visual"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "A good translator notices every _____ of meaning. A single word can change how customers feel about a product.",
    "options": [
      "canvas",
      "nuance",
      "tempo",
      "palette"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Charts and photos add _____ information to the report. Readers can understand the sales trends at a quick glance.",
    "options": [
      "lyrical",
      "abstract",
      "visual",
      "vivid"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "A local orchestra will _____ at the company's anniversary party. They will play popular songs and classical pieces.",
    "options": [
      "interpret",
      "perform",
      "inspire",
      "improvise"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "aesthetic": {
    "pos": "n.",
    "en_def": "a particular style or idea of what is beautiful",
    "cn_def": "美感；美學風格"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the way the parts of a picture or piece of music are arranged",
    "cn_def": "構圖；（作品的）組成"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "a pleasant mix of colors, sounds, or parts that go well together",
    "cn_def": "和諧；協調"
  },
  "texture": {
    "pos": "n.",
    "en_def": "the way a surface feels when you touch it",
    "cn_def": "質地；紋理"
  },
  "palette": {
    "pos": "n.",
    "en_def": "the range of colors an artist or designer uses",
    "cn_def": "色調；調色盤"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular, repeated pattern of sounds or movements",
    "cn_def": "節奏"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two things, such as colors",
    "cn_def": "對比"
  },
  "expression": {
    "pos": "n.",
    "en_def": "the showing of a feeling or idea through words, art, or the face",
    "cn_def": "表達；表現"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the idea or wish to do something",
    "cn_def": "啟發；激勵"
  },
  "abstract": {
    "pos": "adj.",
    "en_def": "not showing people or things in a realistic way, but using shapes and colors",
    "cn_def": "抽象的"
  },
  "melody": {
    "pos": "n.",
    "en_def": "the main tune in a piece of music",
    "cn_def": "旋律"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the general feeling or style of something, such as writing or music",
    "cn_def": "基調；語氣"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a pleasing arrangement in which no part looks too strong or heavy",
    "cn_def": "平衡"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and movement",
    "cn_def": "充滿活力的；動感的"
  },
  "form": {
    "pos": "n.",
    "en_def": "the shape of something, or a type of art",
    "cn_def": "形式；形狀"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to make up music, words, or actions without planning",
    "cn_def": "即興演出；臨時發揮"
  },
  "mood": {
    "pos": "n.",
    "en_def": "the feeling that a place, picture, or piece of music gives you",
    "cn_def": "氛圍；情緒"
  },
  "motif": {
    "pos": "n.",
    "en_def": "a shape or idea that is repeated in a design or work of art",
    "cn_def": "圖案；主題（重複出現的元素）"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "詮釋；解讀"
  },
  "canvas": {
    "pos": "n.",
    "en_def": "a strong cloth that artists paint on, or a painting on it",
    "cn_def": "畫布；油畫"
  },
  "lyrical": {
    "pos": "adj.",
    "en_def": "expressing feelings in a beautiful, song-like way",
    "cn_def": "抒情的；如詩般的"
  },
  "vivid": {
    "pos": "adj.",
    "en_def": "very bright and strong (colors) or very clear (descriptions)",
    "cn_def": "鮮豔的；生動的"
  },
  "craft": {
    "pos": "n.",
    "en_def": "a skill of making things by hand, or the things made",
    "cn_def": "工藝；手藝"
  },
  "symbolism": {
    "pos": "n.",
    "en_def": "the use of images or objects to represent ideas",
    "cn_def": "象徵手法；象徵意義"
  },
  "tempo": {
    "pos": "n.",
    "en_def": "the speed of a piece of music",
    "cn_def": "（音樂的）速度；節拍"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hands or body that shows a meaning or feeling",
    "cn_def": "手勢；姿態"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and original things or ideas",
    "cn_def": "有創意的"
  },
  "nuance": {
    "pos": "n.",
    "en_def": "a very small difference in color, meaning, or feeling",
    "cn_def": "細微差別"
  },
  "visual": {
    "pos": "adj.",
    "en_def": "relating to seeing or things that you can see",
    "cn_def": "視覺的"
  },
  "perform": {
    "pos": "v.",
    "en_def": "to play music, dance, or act in front of an audience",
    "cn_def": "表演；演出"
  }
};

const EXTRA_GLOSSES = {};
