// Topic 234 Quiz Data: Media 媒體
// Source word list: https://www.examword.com/group-topic/media — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T234 - Media 媒體",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "journalism",
    "pos": "n.",
    "cn_def": "新聞業；新聞工作",
    "en_def": "the job of collecting and writing news for newspapers, TV, or websites",
    "sentence": "A: My nephew just graduated from university, and he keeps asking me which career would let him travel, meet interesting people, and write every day. B: He should think about {{BLANK}}, because a reporting job at a news website would give him all of that, although the hours can be long and stressful.",
    "cn": "A：我外甥剛從大學畢業，他一直問我哪種職業能讓他旅行、認識有趣的人，又能每天寫作。 B：他應該考慮【新聞工作】，因為在新聞網站當記者能給他這一切，雖然工時可能很長、壓力也大。"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "cn_def": "播送；廣播",
    "en_def": "to send out a program on TV or radio",
    "sentence": "A: The marketing director wants as many people as possible to see the opening of our new shopping mall on Saturday, so do you know if any TV stations are interested? B: Yes, a local station has agreed to {{BLANK}} the ceremony live at ten o'clock, and they will also show short clips during the evening news.",
    "cn": "A：行銷總監希望週六我們新購物中心開幕時能讓越多人看到越好，你知道有沒有電視台有興趣嗎？ B：有，一家地方電視台已同意在十點現場【播送】典禮，晚間新聞時也會播出短片。"
  },
  {
    "word": "press",
    "pos": "n.",
    "cn_def": "新聞界；媒體",
    "en_def": "newspapers, magazines, and the reporters who work for them",
    "sentence": "A: Our company is announcing the merger with the Japanese electronics firm next Tuesday, so how should we share the details with the public? B: We should hold a conference for the {{BLANK}} at the downtown hotel, so reporters from the major newspapers and magazines can ask our CEO questions directly.",
    "cn": "A：我們公司下週二要宣布與日本電子公司的合併案，我們該怎麼向大眾公布細節？ B：我們應該在市中心飯店為【新聞界】舉辦記者會，讓各大報章雜誌的記者可以直接向執行長提問。"
  },
  {
    "word": "news",
    "pos": "n.",
    "cn_def": "新聞；消息",
    "en_def": "information about recent events, especially on TV, radio, or online",
    "sentence": "A: I heard that the airport might close tomorrow because of the typhoon, but I'm not sure whether my flight to Tokyo will still leave on time. B: Keep checking the evening {{BLANK}} on TV and the airline's website, because they usually announce cancellations a few hours before the storm arrives.",
    "cn": "A：我聽說機場明天可能因颱風關閉，但我不確定我飛東京的班機是否還會準時起飛。 B：持續關注電視上的晚間【新聞】和航空公司網站，因為他們通常會在暴風雨來臨前幾小時宣布取消航班。"
  },
  {
    "word": "report",
    "pos": "v.",
    "cn_def": "報導",
    "en_def": "to tell people about an event, especially in a newspaper or on TV",
    "sentence": "A: Why are so many customers calling our hotline this morning to ask about the safety of our baby bottles? B: Several newspapers decided to {{BLANK}} a story about a factory problem yesterday, so we need to explain quickly that our products passed every government test.",
    "cn": "A：為什麼今天早上有這麼多顧客打熱線電話詢問我們奶瓶的安全性？ B：昨天有幾家報紙決定【報導】一則關於工廠問題的消息，所以我們必須盡快說明我們的產品通過了每一項政府檢驗。"
  },
  {
    "word": "coverage",
    "pos": "n.",
    "cn_def": "新聞報導",
    "en_def": "the way news is reported on TV, radio, or in newspapers",
    "sentence": "A: Did the charity concert we organized for the children's hospital get much attention from the newspapers and TV stations last weekend? B: Yes, the media {{BLANK}} was excellent, and three channels showed interviews with our volunteers, so donations have already doubled since Monday.",
    "cn": "A：我們上週末為兒童醫院舉辦的慈善音樂會有得到報紙和電視台的關注嗎？ B：有，媒體的【報導】非常好，有三個頻道播出了我們志工的訪問，所以從週一起捐款已經增加了一倍。"
  },
  {
    "word": "channel",
    "pos": "n.",
    "cn_def": "頻道",
    "en_def": "a television or radio station",
    "sentence": "A: My parents want to watch the baseball final tonight, but they don't know how to find the game on their new smart TV. B: Tell them to press the guide button and choose the sports {{BLANK}} on number forty-two, because that station has the rights to show the whole game live.",
    "cn": "A：我爸媽今晚想看棒球決賽，但他們不知道怎麼在新的智慧電視上找到比賽。 B：叫他們按節目表按鈕，選第四十二台的體育【頻道】，因為那家電視台擁有整場比賽的直播權。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or app that lets people share information or use services",
    "sentence": "A: We want to sell our handmade soaps to younger customers around the country, but we don't have enough money to open more shops. B: Then we should choose a popular online {{BLANK}} where young people already shop and share photos, and we can post short videos showing how the soaps are made.",
    "cn": "A：我們想把手工香皂賣給全國的年輕顧客，但我們沒有足夠的錢開更多店。 B：那我們應該選擇一個年輕人已經在購物和分享照片的熱門線上【平台】，我們可以發布展示香皂製作過程的短片。"
  },
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "廣播網；電視網",
    "en_def": "a group of TV or radio stations that share programs",
    "sentence": "A: Is it true that the cooking show your team produced will be shown in other countries next year? B: Yes, a large international {{BLANK}} bought the program last month, so stations in Japan, Korea, and Singapore will all show it with subtitles starting in March.",
    "cn": "A：你的團隊製作的烹飪節目明年會在其他國家播出，是真的嗎？ B：是的，一家大型國際【電視網】上個月買下了這個節目，所以日本、韓國和新加坡的電視台從三月開始都會播出附字幕的版本。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾；受眾",
    "en_def": "the people who watch, read, or listen to something",
    "sentence": "A: Before we design the posters for the new energy drink, shouldn't we decide who we really want to buy it? B: Definitely, our main {{BLANK}} is university students and young office workers, so the colors and slogans should feel fresh, active, and a little bit funny.",
    "cn": "A：在設計新能量飲料的海報之前，我們不是應該先決定真正想賣給誰嗎？ B：當然，我們的主要【受眾】是大學生和年輕上班族，所以顏色和標語應該給人新鮮、有活力又有點有趣的感覺。"
  },
  {
    "word": "viewer",
    "pos": "n.",
    "cn_def": "觀眾；收看者",
    "en_def": "a person who watches television or a video",
    "sentence": "A: The travel program we sponsor has been on TV for three months now, so how do we know if people are really watching it? B: The station told us that almost every {{BLANK}} who answered their online survey enjoyed the episode about Hualien, and many said they plan to visit soon.",
    "cn": "A：我們贊助的旅遊節目已經播出三個月了，我們怎麼知道大家是否真的有在看？ B：電視台告訴我們，幾乎每一位回答線上問卷的【觀眾】都喜歡花蓮那一集，很多人還說他們打算很快去玩。"
  },
  {
    "word": "listener",
    "pos": "n.",
    "cn_def": "聽眾",
    "en_def": "a person who listens to the radio or a podcast",
    "sentence": "A: Our bakery has been advertising on the morning radio show for two weeks, but do you think anyone has actually heard the ads? B: I'm sure they have, because yesterday a woman came in and said she was a regular {{BLANK}} who heard about our coupon while driving to work.",
    "cn": "A：我們的麵包店已經在早晨廣播節目打廣告兩週了，你覺得真的有人聽到廣告嗎？ B：我確定有，因為昨天有位女士進來，說她是固定的【聽眾】，在開車上班時聽到了我們的優惠券消息。"
  },
  {
    "word": "reader",
    "pos": "n.",
    "cn_def": "讀者",
    "en_def": "a person who reads a newspaper, magazine, or book",
    "sentence": "A: The editor wants to know why our monthly health magazine sold so many more copies this spring than it did last year. B: I think every {{BLANK}} loved the new section with simple recipes and exercise tips, because we received hundreds of thankful emails and letters about it.",
    "cn": "A：總編輯想知道為什麼我們的健康月刊今年春天比去年多賣了這麼多本。 B：我想每位【讀者】都很喜歡那個有簡單食譜和運動秘訣的新單元，因為我們收到了數百封相關的感謝電子郵件和信件。"
  },
  {
    "word": "headline",
    "pos": "n.",
    "cn_def": "標題；頭條",
    "en_def": "the title of a news story printed in large letters",
    "sentence": "A: The article about our company's new electric scooter is ready, but the editor says the title is too long and boring. B: Then let's write a short {{BLANK}} with strong words, such as 'Taipei Scooter Breaks Battery Record,' so readers will notice it immediately on the front page.",
    "cn": "A：關於我們公司新電動機車的文章已經準備好了，但編輯說標題太長又無聊。 B：那我們來寫一個用字有力的簡短【標題】，例如「台北機車打破電池紀錄」，讓讀者在頭版上一眼就注意到。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章",
    "en_def": "a piece of writing in a newspaper or magazine",
    "sentence": "A: A business magazine called this morning and asked if you could write something about how small companies can save energy in their offices. B: Sure, I can finish a short {{BLANK}} of about eight hundred words by Friday, and I'll include some useful tips from our own office.",
    "cn": "A：一家商業雜誌今天早上打電話來，問你能不能寫一些關於小公司如何在辦公室節能的內容。 B：當然，我可以在週五前完成一篇大約八百字的短【文章】，還會加入一些我們自己辦公室的實用秘訣。"
  },
  {
    "word": "editorial",
    "pos": "n.",
    "cn_def": "社論",
    "en_def": "a newspaper article that gives the editor's opinion",
    "sentence": "A: Did you see that the Daily Times criticized the city's plan to build a new parking garage next to the park? B: Yes, I read the {{BLANK}} this morning, and the editors argued that the money should be spent on better buses and bicycle lanes instead.",
    "cn": "A：你有看到《每日時報》批評市政府要在公園旁蓋新停車場的計畫嗎？ B：有，我今天早上讀了那篇【社論】，編輯們主張這筆錢應該改用在更好的公車和自行車道上。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a notice, picture, or short film that tries to sell something",
    "sentence": "A: We need more customers for our new English cram school, but we only have a small budget for marketing this month. B: Why don't we put a colorful {{BLANK}} in the local community newspaper, because many parents in this neighborhood still read it every weekend?",
    "cn": "A：我們新開的英文補習班需要更多學生，但這個月的行銷預算很少。 B：我們何不在地方社區報上刊登一則色彩鮮豔的【廣告】？因為這附近很多家長每個週末還是會看這份報紙。"
  },
  {
    "word": "publicity",
    "pos": "n.",
    "cn_def": "宣傳；公眾關注",
    "en_def": "attention from newspapers, TV, and the public",
    "sentence": "A: The famous singer agreed to perform at our store's opening, but isn't her fee much too expensive for a small company like ours? B: It is expensive, but the {{BLANK}} we'll get from TV stations and websites will be worth it, because thousands of people will learn our brand name overnight.",
    "cn": "A：那位知名歌手同意在我們店的開幕式上表演，但她的酬勞對我們這種小公司來說不是太貴了嗎？ B：是很貴，但我們從電視台和網站得到的【宣傳】效果會很值得，因為成千上萬的人一夜之間就會知道我們的品牌。"
  },
  {
    "word": "propaganda",
    "pos": "n.",
    "cn_def": "政治宣傳",
    "en_def": "information, often false, used to make people support a government or idea",
    "sentence": "A: In history class today, the students looked at old posters from the war, and many of them showed very strong messages. B: Those posters were {{BLANK}}, because the government used them to make citizens hate the enemy and support the war, even when the facts were not completely true.",
    "cn": "A：今天歷史課上，學生們看了戰時的舊海報，其中很多都有非常強烈的訊息。 B：那些海報是【政治宣傳】，因為政府用它們讓人民仇恨敵人並支持戰爭，即使事實並不完全真實。"
  },
  {
    "word": "censorship",
    "pos": "n.",
    "cn_def": "審查制度",
    "en_def": "the act of stopping people from seeing or hearing certain information",
    "sentence": "A: Why can't our marketing team post videos on that popular video site when we hold the trade fair in that country next spring? B: The government there has strict {{BLANK}} of foreign websites, so many sites are blocked, and we'll need to use local apps to reach customers.",
    "cn": "A：明年春天我們在那個國家參加貿易展時，為什麼我們行銷團隊不能在那個熱門影音網站上發布影片？ B：那裡的政府對外國網站有嚴格的【審查制度】，很多網站都被封鎖，所以我們必須用當地的應用程式來接觸顧客。"
  },
  {
    "word": "publication",
    "pos": "n.",
    "cn_def": "出版品；刊物",
    "en_def": "a book, magazine, or report that is printed and sold",
    "sentence": "A: Our research team finished the report on electric car batteries, so where do you think we should send it first? B: We should send it to a respected science {{BLANK}} that many engineers read, because getting printed there will help our company look more professional.",
    "cn": "A：我們研究團隊完成了電動車電池的報告，你覺得我們應該先投稿到哪裡？ B：我們應該投到一份許多工程師都會閱讀、備受尊敬的科學【刊物】，因為能刊登在那裡會讓我們公司看起來更專業。"
  },
  {
    "word": "content",
    "pos": "n.",
    "cn_def": "內容",
    "en_def": "the information, videos, or pictures on a website or show",
    "sentence": "A: Our company website gets lots of visitors, but most of them leave after only a few seconds, so what should we change? B: We need more interesting {{BLANK}}, such as short videos, customer stories, and helpful guides, because people stay longer when the pages answer their questions.",
    "cn": "A：我們公司網站有很多訪客，但大部分只停留幾秒鐘就離開，我們應該改變什麼？ B：我們需要更有趣的【內容】，例如短片、顧客故事和實用指南，因為當網頁能回答人們的問題時，他們會停留得更久。"
  },
  {
    "word": "source",
    "pos": "n.",
    "cn_def": "消息來源",
    "en_def": "a person or document that gives information",
    "sentence": "A: The reporter wrote that our company plans to close two factories next year, but the managers never announced anything like that. B: She probably heard it from an unreliable {{BLANK}}, so our public relations team should call the newspaper today and ask them to correct the story.",
    "cn": "A：那位記者寫說我們公司明年打算關閉兩間工廠，但經理們從來沒宣布過這種事。 B：她可能是從不可靠的【消息來源】聽來的，所以我們的公關團隊今天應該打電話給報社，請他們更正報導。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發表",
    "en_def": "to print a book, magazine, or article, or put it online",
    "sentence": "A: You've been writing that travel guide about the night markets of Taiwan for two years, so when can I finally buy a copy? B: My company plans to {{BLANK}} it next October, and there will also be an electronic version for readers who prefer using their phones.",
    "cn": "A：你寫那本台灣夜市旅遊指南已經兩年了，我什麼時候終於能買到一本？ B：我的公司計畫明年十月【出版】它，也會有電子版給喜歡用手機閱讀的讀者。"
  },
  {
    "word": "stream",
    "pos": "v.",
    "cn_def": "串流播放；線上直播",
    "en_def": "to send or watch video or music over the internet as it plays",
    "sentence": "A: Many of our overseas customers can't travel to Taipei for the product launch next month, so how can they still see it? B: We can {{BLANK}} the whole event on our website and social media pages, so people around the world can watch it live from their computers or phones.",
    "cn": "A：很多海外客戶下個月無法來台北參加產品發表會，他們要怎麼還是能看到？ B：我們可以在網站和社群頁面上【線上直播】整場活動，讓世界各地的人都能用電腦或手機即時觀看。"
  },
  {
    "word": "inform",
    "pos": "v.",
    "cn_def": "通知；告知",
    "en_def": "to tell someone facts or information officially",
    "sentence": "A: The elevator in our office building will be repaired all day on Thursday, so what should we do about the visitors coming for the job interviews? B: Please {{BLANK}} all the candidates by email today, and tell them to use the stairs or the service elevator near the back door.",
    "cn": "A：我們辦公大樓的電梯週四整天要維修，那來參加面試的訪客該怎麼辦？ B：請今天用電子郵件【通知】所有應徵者，告訴他們走樓梯或使用後門附近的貨梯。"
  },
  {
    "word": "influence",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to change how someone thinks or behaves",
    "sentence": "A: Why does our company pay young online stars so much money to talk about our skin care products in their videos? B: Because they can strongly {{BLANK}} what their fans buy, and many teenagers trust their opinions more than traditional TV commercials.",
    "cn": "A：為什麼我們公司要付這麼多錢給年輕網紅，讓他們在影片中談論我們的保養品？ B：因為他們能強烈【影響】粉絲買什麼，而且很多青少年比起傳統電視廣告更相信他們的意見。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數位的",
    "en_def": "using computers and the internet",
    "sentence": "A: Our sales of printed magazines have been falling every month, so what should we do to keep our readers? B: We should offer a {{BLANK}} version that people can read on their phones and tablets, and we could also add short videos and links that paper copies can't have.",
    "cn": "A：我們紙本雜誌的銷量每個月都在下滑，我們該怎麼做才能留住讀者？ B：我們應該提供可以在手機和平板上閱讀的【數位】版本，還可以加入紙本無法提供的短片和連結。"
  },
  {
    "word": "mainstream",
    "pos": "adj.",
    "cn_def": "主流的",
    "en_def": "accepted or used by most people",
    "sentence": "A: Ten years ago, very few people ordered groceries online, but now almost everyone in my office does it. B: That's true, online shopping has become completely {{BLANK}}, so even small supermarkets now need good websites and fast delivery to compete.",
    "cn": "A：十年前很少人在網路上訂購食品雜貨，但現在我辦公室幾乎每個人都這麼做。 B：沒錯，網路購物已經完全成為【主流】，所以現在就連小型超市也需要好的網站和快速配送才能競爭。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的",
    "en_def": "not controlled by a government or a large company",
    "sentence": "A: Why do you trust that small news website more than the big TV stations when you want to learn about local politics? B: It's an {{BLANK}} website that isn't owned by any political party or large company, so its reporters can write freely about problems in the city.",
    "cn": "A：你想了解地方政治時，為什麼比起大電視台更相信那個小新聞網站？ B：它是一個不屬於任何政黨或大公司的【獨立】網站，所以它的記者可以自由地報導城市裡的問題。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動式的",
    "en_def": "allowing people to take part or respond, not just watch",
    "sentence": "A: The museum wants more children to visit its new science exhibition this summer, so do you have any ideas? B: They could add {{BLANK}} touch screens where kids can answer quiz questions and build simple robots, because children learn better when they can do things themselves.",
    "cn": "A：博物館希望今年夏天有更多孩子來參觀新的科學展，你有什麼點子嗎？ B：他們可以增加【互動式】觸控螢幕，讓孩子回答測驗問題並組裝簡單的機器人，因為孩子親自動手時學得更好。"
  },
  {
    "word": "widely",
    "pos": "adv.",
    "cn_def": "廣泛地",
    "en_def": "by many people or in many places",
    "sentence": "A: Is the new tax rule for small online shops something that only experts care about, or should every shop owner learn about it? B: Every owner should learn about it, because the rule has been {{BLANK}} discussed on TV and online, and many customers are already asking us about price changes.",
    "cn": "A：小型網路商店的新稅務規定只有專家在意，還是每位店主都應該了解？ B：每位店主都應該了解，因為這項規定已經在電視和網路上被【廣泛地】討論，很多顧客已經在問我們價格變動的事。"
  },
  {
    "word": "instantly",
    "pos": "adv.",
    "cn_def": "立即地；馬上",
    "en_def": "immediately; without any delay",
    "sentence": "A: When our customers send questions through the new chat service on our website, how long do they usually have to wait? B: The smart system answers simple questions about delivery and returns almost {{BLANK}}, and harder problems are sent to a staff member within ten minutes.",
    "cn": "A：當顧客透過我們網站上的新聊天服務提問時，他們通常要等多久？ B：智慧系統幾乎能【立即】回答有關配送和退貨的簡單問題，較難的問題則會在十分鐘內轉給工作人員。"
  }
];

const MCQS = [
  {
    "q": "She studied _____ at university because she wanted to become a reporter. Now she works for a business newspaper in Taipei.",
    "options": [
      "journalism",
      "accounting",
      "engineering",
      "architecture"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The station will _____ the president's speech live at eight o'clock tonight. It will also be available online tomorrow morning.",
    "options": [
      "print",
      "delete",
      "broadcast",
      "purchase"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The company will hold a _____ conference on Monday afternoon. Reporters from several newspapers have already confirmed that they will attend.",
    "options": [
      "budget",
      "press",
      "staff",
      "sales"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "I heard the _____ about the factory fire on the radio this morning. Fortunately, none of the workers were hurt.",
    "options": [
      "recipe",
      "receipt",
      "invoice",
      "news"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Several journalists arrived to _____ on the opening of the new train station. Their stories appeared in the evening papers.",
    "options": [
      "report",
      "vote",
      "apply",
      "depend"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The charity event received extensive media _____ last weekend. As a result, donations increased sharply the following week.",
    "options": [
      "payment",
      "coverage",
      "shortage",
      "delivery"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "If you want to watch the tennis final, switch to the sports _____. The match begins at nine o'clock tonight.",
    "options": [
      "counter",
      "drawer",
      "pocket",
      "channel"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The bakery started selling its cakes on a popular online _____. Its orders have tripled since the beginning of the year.",
    "options": [
      "parking",
      "ceiling",
      "platform",
      "warehouse"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The cooking program was bought by a major television _____. It will be shown in five Asian countries next year.",
    "options": [
      "pharmacy",
      "network",
      "factory",
      "landlord"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The advertising campaign is designed for a young _____. Most of the people it targets are between eighteen and twenty-five.",
    "options": [
      "audience",
      "landlord",
      "supplier",
      "employer"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Each _____ who completes the online survey will receive a discount coupon. The station hopes to learn which programs people enjoy most.",
    "options": [
      "supplier",
      "tenant",
      "viewer",
      "patient"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The radio host thanked every _____ who called in during the program. Many of them shared stories about their first jobs.",
    "options": [
      "passenger",
      "customer",
      "tenant",
      "listener"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The magazine sent a free gift to every _____ who renewed a subscription early. The offer ended on the last day of March.",
    "options": [
      "driver",
      "reader",
      "guest",
      "patient"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The story about the merger made the front-page _____ of every major newspaper. Investors reacted quickly when markets opened that morning.",
    "options": [
      "headline",
      "receipt",
      "schedule",
      "warranty"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Mr. Lin wrote an _____ about saving energy for a business magazine. It will be published in the October issue.",
    "options": [
      "invoice",
      "appointment",
      "elevator",
      "article"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The newspaper's _____ criticized the city's plan to raise bus fares. The editors argued that the decision would hurt students.",
    "options": [
      "receipt",
      "menu",
      "editorial",
      "label"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The language school placed an _____ in the local newspaper. Within a week, more than fifty parents had called to ask about classes.",
    "options": [
      "advertisement",
      "umbrella",
      "elevator",
      "envelope"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The famous actor's visit brought the small café a lot of _____. Its name appeared on dozens of websites the next day.",
    "options": [
      "furniture",
      "equipment",
      "luggage",
      "publicity"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "During the war, the government used posters as a form of _____. The images were designed to make citizens support the army.",
    "options": [
      "furniture",
      "propaganda",
      "insurance",
      "nutrition"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Many journalists protested against the new rules on _____. They said the government should not control what newspapers can print.",
    "options": [
      "recycling",
      "parking",
      "censorship",
      "catering"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Our research report was accepted for _____ in a respected science journal. It will appear in next month's issue.",
    "options": [
      "parking",
      "renovation",
      "refund",
      "publication"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The website needs more useful _____ to keep visitors interested. Short videos and customer stories would be good additions.",
    "options": [
      "content",
      "furniture",
      "parking",
      "weather"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The reporter refused to name the _____ of her information. She said the person could lose their job if identified.",
    "options": [
      "discount",
      "tenant",
      "source",
      "receipt"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The company plans to _____ its annual report online next Friday. Printed copies will be mailed to shareholders soon afterward.",
    "options": [
      "borrow",
      "publish",
      "repair",
      "rent"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "We will _____ the product launch live on our website. Customers around the world can watch it on their phones.",
    "options": [
      "bake",
      "fold",
      "park",
      "stream"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Please _____ all employees that the office will be closed on Friday. The air conditioning system is being replaced that day.",
    "options": [
      "borrow",
      "inform",
      "repair",
      "arrive"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Online reviews strongly _____ what many shoppers decide to buy. Therefore, the store responds quickly to every customer comment.",
    "options": [
      "influence",
      "arrive",
      "sleep",
      "depart"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Sales of the printed magazine have dropped, so the publisher launched a _____ edition. Readers can now download each issue to their tablets.",
    "options": [
      "wooden",
      "frozen",
      "digital",
      "cotton"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Electric scooters have become _____ in Taipei over the past few years. You can now see them on almost every street.",
    "options": [
      "fragile",
      "hungry",
      "sleepy",
      "mainstream"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The museum added several _____ displays for young visitors. Children can touch the screens and answer simple quiz questions.",
    "options": [
      "hungry",
      "interactive",
      "sleepy",
      "jealous"
    ],
    "answer": 1,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "journalism": {
    "pos": "n.",
    "en_def": "the job of collecting and writing news for newspapers, TV, or websites",
    "cn_def": "新聞業；新聞工作"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a program on TV or radio",
    "cn_def": "播送；廣播"
  },
  "press": {
    "pos": "n.",
    "en_def": "newspapers, magazines, and the reporters who work for them",
    "cn_def": "新聞界；媒體"
  },
  "news": {
    "pos": "n.",
    "en_def": "information about recent events, especially on TV, radio, or online",
    "cn_def": "新聞；消息"
  },
  "report": {
    "pos": "v.",
    "en_def": "to tell people about an event, especially in a newspaper or on TV",
    "cn_def": "報導"
  },
  "coverage": {
    "pos": "n.",
    "en_def": "the way news is reported on TV, radio, or in newspapers",
    "cn_def": "新聞報導"
  },
  "channel": {
    "pos": "n.",
    "en_def": "a television or radio station",
    "cn_def": "頻道"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or app that lets people share information or use services",
    "cn_def": "平台"
  },
  "network": {
    "pos": "n.",
    "en_def": "a group of TV or radio stations that share programs",
    "cn_def": "廣播網；電視網"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch, read, or listen to something",
    "cn_def": "觀眾；聽眾；受眾"
  },
  "viewer": {
    "pos": "n.",
    "en_def": "a person who watches television or a video",
    "cn_def": "觀眾；收看者"
  },
  "listener": {
    "pos": "n.",
    "en_def": "a person who listens to the radio or a podcast",
    "cn_def": "聽眾"
  },
  "reader": {
    "pos": "n.",
    "en_def": "a person who reads a newspaper, magazine, or book",
    "cn_def": "讀者"
  },
  "headline": {
    "pos": "n.",
    "en_def": "the title of a news story printed in large letters",
    "cn_def": "標題；頭條"
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing in a newspaper or magazine",
    "cn_def": "文章"
  },
  "editorial": {
    "pos": "n.",
    "en_def": "a newspaper article that gives the editor's opinion",
    "cn_def": "社論"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a notice, picture, or short film that tries to sell something",
    "cn_def": "廣告"
  },
  "publicity": {
    "pos": "n.",
    "en_def": "attention from newspapers, TV, and the public",
    "cn_def": "宣傳；公眾關注"
  },
  "propaganda": {
    "pos": "n.",
    "en_def": "information, often false, used to make people support a government or idea",
    "cn_def": "政治宣傳"
  },
  "censorship": {
    "pos": "n.",
    "en_def": "the act of stopping people from seeing or hearing certain information",
    "cn_def": "審查制度"
  },
  "publication": {
    "pos": "n.",
    "en_def": "a book, magazine, or report that is printed and sold",
    "cn_def": "出版品；刊物"
  },
  "content": {
    "pos": "n.",
    "en_def": "the information, videos, or pictures on a website or show",
    "cn_def": "內容"
  },
  "source": {
    "pos": "n.",
    "en_def": "a person or document that gives information",
    "cn_def": "消息來源"
  },
  "publish": {
    "pos": "v.",
    "en_def": "to print a book, magazine, or article, or put it online",
    "cn_def": "出版；發表"
  },
  "stream": {
    "pos": "v.",
    "en_def": "to send or watch video or music over the internet as it plays",
    "cn_def": "串流播放；線上直播"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone facts or information officially",
    "cn_def": "通知；告知"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to change how someone thinks or behaves",
    "cn_def": "影響"
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computers and the internet",
    "cn_def": "數位的"
  },
  "mainstream": {
    "pos": "adj.",
    "en_def": "accepted or used by most people",
    "cn_def": "主流的"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "not controlled by a government or a large company",
    "cn_def": "獨立的"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "allowing people to take part or respond, not just watch",
    "cn_def": "互動式的"
  },
  "widely": {
    "pos": "adv.",
    "en_def": "by many people or in many places",
    "cn_def": "廣泛地"
  },
  "instantly": {
    "pos": "adv.",
    "en_def": "immediately; without any delay",
    "cn_def": "立即地；馬上"
  }
};

const EXTRA_GLOSSES = {};
