// Unit 9 Quiz Data: arrival – launch
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U9 - arrival – launch",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "到達",
    "en_def": "the act of coming to or reaching a place",
    "sentence": "The {{BLANK}} of the new manager was eagerly anticipated by the staff.",
    "cn": "員工們熱切期待著新經理的到來。"
  },
  {
    "word": "arrive in",
    "pos": "phr.",
    "cn_def": "到達某國某城市",
    "en_def": "to reach a country or city",
    "sentence": "She was excited to {{BLANK}} Paris for the first time.",
    "cn": "她很興奮第一次到達巴黎。"
  },
  {
    "word": "arrived at",
    "pos": "phr.",
    "cn_def": "到達某地",
    "en_def": "to reach a building or a particular place",
    "sentence": "After hours of driving, they finally {{BLANK}} their destination.",
    "cn": "經過幾小時的駕駛，他們終於到達了目的地。"
  },
  {
    "word": "century",
    "pos": "n.",
    "cn_def": "世紀",
    "en_def": "a period of one hundred years",
    "sentence": "Many consider the 20th {{BLANK}} to be one of the most eventful in history.",
    "cn": "許多人認為20世紀是歷史上最多事的一個世紀。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "事件",
    "en_def": "something that happens, especially something important or planned",
    "sentence": "The concert was the most talked-about {{BLANK}} of the year.",
    "cn": "這場音樂會是一年中最受關注的事件。"
  },
  {
    "word": "release the hostage",
    "pos": "phr.",
    "cn_def": "釋放人質",
    "en_def": "to set free a person who has been held prisoner",
    "sentence": "After negotiations, the kidnappers agreed to {{BLANK}}.",
    "cn": "經過談判，綁架者同意釋放人質。"
  },
  {
    "word": "release a single",
    "pos": "phr.",
    "cn_def": "發行單曲/視頻/產品",
    "en_def": "to make a song, film or product available for people to buy or see",
    "sentence": "The artist is set to {{BLANK}} next month.",
    "cn": "藝術家計劃下個月發行新單曲。"
  },
  {
    "word": "release exhaust",
    "pos": "phr.",
    "cn_def": "排放廢氣",
    "en_def": "to let waste gas out into the air",
    "sentence": "Factories that {{BLANK}} into the atmosphere contribute to air pollution.",
    "cn": "向大氣中排放廢氣的工廠導致空氣污染。"
  },
  {
    "word": "release stress",
    "pos": "phr.",
    "cn_def": "釋放壓力",
    "en_def": "to get rid of feelings of worry or tension",
    "sentence": "Meditation is a great way to {{BLANK}}.",
    "cn": "冥想是釋放壓力的好方法。"
  },
  {
    "word": "release",
    "pos": "n.",
    "cn_def": "釋放",
    "en_def": "the act of letting someone or something go free or making information known",
    "sentence": "The {{BLANK}} of new information surprised everyone.",
    "cn": "新信息的釋放讓每個人都感到驚訝。"
  },
  {
    "word": "release",
    "pos": "n.",
    "cn_def": "發行",
    "en_def": "the act of making a new song, film or product available to the public",
    "sentence": "The {{BLANK}} of the new album was a huge success.",
    "cn": "新專輯的發行取得了巨大成功。"
  },
  {
    "word": "mobile",
    "pos": "adj.",
    "cn_def": "移動的",
    "en_def": "able to move or be moved easily",
    "sentence": "With today's {{BLANK}} technology, working remotely has become easier.",
    "cn": "隨著今天的移動技術，遠程工作變得更加容易。"
  },
  {
    "word": "mobile device",
    "pos": "n.",
    "cn_def": "行動裝置",
    "en_def": "a small computer, such as a phone or tablet, that you can carry with you",
    "sentence": "Many people use a {{BLANK}} for daily tasks like emailing, browsing the web, and managing schedules.",
    "cn": "許多人使用行動裝置來處理日常任務，如發送電子郵件、瀏覽網頁和管理日程。"
  },
  {
    "word": "mobility",
    "pos": "n.",
    "cn_def": "移動性",
    "en_def": "the ability to move or travel easily from place to place",
    "sentence": "The city's {{BLANK}} options have been enhanced with new bike lanes.",
    "cn": "該市的移動性選項通過新的自行車道得到了提升。"
  },
  {
    "word": "automobile",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "a car",
    "sentence": "The {{BLANK}} industry has seen significant changes with the introduction of electric cars.",
    "cn": "隨著電動汽車的引入，汽車行業發生了重大變化。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引",
    "en_def": "to make people or animals interested and want to come closer",
    "sentence": "The bright colors of the flowers {{BLANK}} many bees and butterflies.",
    "cn": "花朵鮮豔的顏色吸引了許多蜜蜂和蝴蝶。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "吸引力",
    "en_def": "something interesting that people want to see or do",
    "sentence": "The city's main {{BLANK}} is its historic castle.",
    "cn": "這座城市的主要吸引力是它的歷史古堡。"
  },
  {
    "word": "tourist attraction",
    "pos": "phr.",
    "cn_def": "旅遊景點",
    "en_def": "a place of interest that many visitors come to see",
    "sentence": "The Eiffel Tower is a famous {{BLANK}} in Paris.",
    "cn": "艾菲爾鐵塔是巴黎著名的旅遊景點。"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "有吸引力的",
    "en_def": "pleasant to look at; interesting enough to want",
    "sentence": "The idea of a shorter workweek is {{BLANK}} to many people.",
    "cn": "縮短工作周的想法對許多人來說很有吸引力。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "吸引人的",
    "en_def": "attractive or interesting",
    "sentence": "The concept of living a minimalist lifestyle is {{BLANK}} to those who seek simplicity.",
    "cn": "對於追求簡約的人來說，過極簡生活方式的概念很吸引人。"
  },
  {
    "word": "folded",
    "pos": "v.",
    "cn_def": "折疊",
    "en_def": "to bend paper or cloth so that one part lies on top of another",
    "sentence": "After reading the newspaper, he {{BLANK}} it and put it back on the table.",
    "cn": "閱讀報紙後，他將其折疊起來放回桌上。"
  },
  {
    "word": "fold",
    "pos": "n.",
    "cn_def": "折痕",
    "en_def": "a line or mark made by bending paper or cloth",
    "sentence": "The {{BLANK}} in the paper indicates it has been in someone's pocket.",
    "cn": "紙上的折痕表明它曾放在某人的口袋裡。"
  },
  {
    "word": "folder",
    "pos": "n.",
    "cn_def": "文件夾",
    "en_def": "a cardboard or plastic cover for keeping papers together; a place for storing files on a computer",
    "sentence": "She organized her documents into a {{BLANK}} for easy access.",
    "cn": "她將文件整理到一個文件夾中，以便輕鬆訪問。"
  },
  {
    "word": "foldable",
    "pos": "adj.",
    "cn_def": "可摺疊的",
    "en_def": "that can be bent or closed to make it smaller",
    "sentence": "The {{BLANK}} bike can easily be stored in a small apartment.",
    "cn": "這款可摺疊自行車可以輕鬆存放在小公寓裡。"
  },
  {
    "word": "access",
    "pos": "v.",
    "cn_def": "存取",
    "en_def": "to open or get information, especially on a computer",
    "sentence": "Students can {{BLANK}} the online library resources from anywhere.",
    "cn": "學生可以在任何地方存取線上圖書館資源。"
  },
  {
    "word": "access",
    "pos": "n.",
    "cn_def": "途徑",
    "en_def": "a way of entering or reaching a place",
    "sentence": "The new road provides easier {{BLANK}} to the remote village.",
    "cn": "新道路為到達偏遠村莊提供了更容易的途徑。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "易接近的",
    "en_def": "easy to reach, enter or use",
    "sentence": "The museum is {{BLANK}} to wheelchair users.",
    "cn": "這家博物館對輪椅使用者來說是易於進入的。"
  },
  {
    "word": "predictable",
    "pos": "adj.",
    "cn_def": "可預測的",
    "en_def": "happening or behaving in a way that you expect",
    "sentence": "The outcome of the game was {{BLANK}} based on the team's performance.",
    "cn": "根據球隊的表現，比賽的結果是可預測的。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可用的",
    "en_def": "able to be used or obtained",
    "sentence": "The new model will be {{BLANK}} for purchase next month.",
    "cn": "新型號下個月將可供購買。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模型",
    "en_def": "a small copy of a building, vehicle or other object",
    "sentence": "The architect showed a {{BLANK}} of the proposed building.",
    "cn": "建築師展示了擬建建築的模型。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "機號型號",
    "en_def": "a particular type or design of a product such as a car or phone",
    "sentence": "The latest {{BLANK}} of the smartphone features several innovative upgrades.",
    "cn": "最新型號的智能手機具有多項創新升級。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模特兒",
    "en_def": "a person whose job is to wear and show clothes",
    "sentence": "The fashion {{BLANK}} walked down the runway with confidence.",
    "cn": "時尚模特兒充滿信心地走在伸展台上。"
  },
  {
    "word": "model",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy the way someone does something because you admire them",
    "sentence": "Young athletes often {{BLANK}} their techniques after famous sports stars.",
    "cn": "年輕運動員經常模仿著名運動明星的技巧。"
  },
  {
    "word": "model",
    "pos": "v.",
    "cn_def": "穿戴衣服展示",
    "en_def": "to wear clothes in order to show them to possible buyers",
    "sentence": "She will {{BLANK}} the designer's new collection at the fashion show.",
    "cn": "她將在時裝秀上展示設計師的新系列。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "便攜的",
    "en_def": "easy to carry or move",
    "sentence": "The {{BLANK}} charger is a convenient accessory for travelers.",
    "cn": "便攜式充電器是旅行者的方便配件。"
  },
  {
    "word": "portability",
    "pos": "n.",
    "cn_def": "便攜性",
    "en_def": "the quality of being easy to carry or move",
    "sentence": "The {{BLANK}} of the laptop makes it perfect for on-the-go use.",
    "cn": "筆記型電腦的便攜性使其非常適合在外使用。"
  },
  {
    "word": "importable",
    "pos": "adj.",
    "cn_def": "可進口的",
    "en_def": "that can be brought into a country from abroad",
    "sentence": "The company is looking for {{BLANK}} goods to expand its product range.",
    "cn": "該公司正在尋找可進口商品以擴展其產品範圍。"
  },
  {
    "word": "mass",
    "pos": "adj.",
    "cn_def": "大量的",
    "en_def": "involving or affecting a large number of people or things",
    "sentence": "The {{BLANK}} production of goods has become a hallmark of modern industry.",
    "cn": "大量生產商品已成為現代工業的標誌。"
  },
  {
    "word": "mass production of goods",
    "pos": "phr.",
    "cn_def": "大量生產產品",
    "en_def": "the making of large amounts of products in factories",
    "sentence": "The Industrial Revolution led to {{BLANK}}, which has significantly lowered the cost of manufacturing.",
    "cn": "工業革命帶來產品的大量生產，這顯著降低了製造成本。"
  },
  {
    "word": "mass rapid transportation",
    "pos": "phr.",
    "cn_def": "大眾快速交通",
    "en_def": "a city railway system that carries large numbers of people quickly",
    "sentence": "The city's {{BLANK}} system makes commuting easier for residents.",
    "cn": "該市的大眾快速交通系統使居民通勤更加容易。"
  },
  {
    "word": "Mass media",
    "pos": "phr.",
    "cn_def": "大眾媒體",
    "en_def": "newspapers, television, radio and the internet, which reach very large numbers of people",
    "sentence": "{{BLANK}} plays a crucial role in shaping public opinion.",
    "cn": "大眾媒體在塑造公眾輿論中發揮著關鍵作用。"
  },
  {
    "word": "a mass of",
    "pos": "phr.",
    "cn_def": "大量的",
    "en_def": "a large amount or number of something",
    "sentence": "The museum houses {{BLANK}} rare artifacts.",
    "cn": "博物館收藏著大量稀有文物。"
  },
  {
    "word": "mass",
    "pos": "n.",
    "cn_def": "質量",
    "en_def": "the amount of matter that an object contains",
    "sentence": "The {{BLANK}} of the planet is estimated to be six times that of Earth.",
    "cn": "該行星的質量估計是地球的六倍。"
  },
  {
    "word": "massive",
    "pos": "adj.",
    "cn_def": "巨大的",
    "en_def": "very large, heavy or powerful",
    "sentence": "The project requires a {{BLANK}} amount of resources and time.",
    "cn": "該項目需要大量的資源和時間。"
  },
  {
    "word": "production",
    "pos": "n.",
    "cn_def": "生產",
    "en_def": "the process of making or growing things in large amounts",
    "sentence": "The factory's {{BLANK}} levels have increased this year.",
    "cn": "工廠今年的生產水平有所提高。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "生產",
    "en_def": "to make or grow something",
    "sentence": "The region is known to {{BLANK}} the finest quality of wine.",
    "cn": "該地區以生產最優質的葡萄酒而聞名。"
  },
  {
    "word": "produce",
    "pos": "n.",
    "cn_def": "農產品",
    "en_def": "fresh fruit and vegetables grown on farms",
    "sentence": "Fresh {{BLANK}} is sold at the local farmers' market.",
    "cn": "新鮮農產品在當地農民市場上出售。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "生產力強的",
    "en_def": "producing a lot; getting good results",
    "sentence": "The team had a very {{BLANK}} meeting and resolved many issues.",
    "cn": "團隊進行了非常有成效的會議，解決了許多問題。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "the rate at which goods are produced or work is done",
    "sentence": "Improved technology can significantly increase {{BLANK}}.",
    "cn": "改進的技術可以顯著提高生產力。"
  },
  {
    "word": "product",
    "pos": "n.",
    "cn_def": "產品",
    "en_def": "something that is made to be sold",
    "sentence": "The company launched a new {{BLANK}} that quickly became popular.",
    "cn": "該公司推出了一款很快就變得流行的新產品。"
  },
  {
    "word": "producer",
    "pos": "n.",
    "cn_def": "生產者",
    "en_def": "a person or company that makes or grows something; a person in charge of making a film",
    "sentence": "The {{BLANK}} of the film received critical acclaim for their work.",
    "cn": "電影的製片人因其工作而獲得了影評人的好評。"
  },
  {
    "word": "manufactures",
    "pos": "v.",
    "cn_def": "製造",
    "en_def": "to make goods in large numbers in a factory",
    "sentence": "The company {{BLANK}} electronic components for various industries.",
    "cn": "該公司為各種行業製造電子零件。"
  },
  {
    "word": "manufacturer",
    "pos": "n.",
    "cn_def": "製造商",
    "en_def": "a company that makes goods in large numbers",
    "sentence": "The {{BLANK}} is known for its high-quality, durable products.",
    "cn": "這家製造商以其高品質、耐用的產品而聞名。"
  },
  {
    "word": "manufacturing",
    "pos": "n.",
    "cn_def": "製造業",
    "en_def": "the business of making goods in factories",
    "sentence": "The city's economy is heavily reliant on {{BLANK}}.",
    "cn": "這個城市的經濟在很大程度上依賴於製造業。"
  },
  {
    "word": "digital",
    "pos": "adj.",
    "cn_def": "數字的",
    "en_def": "using computer technology; showing information as numbers",
    "sentence": "The {{BLANK}} age has transformed how we store and access information.",
    "cn": "數字時代改變了我們存儲和訪問信息的方式。"
  },
  {
    "word": "digits",
    "pos": "n.",
    "cn_def": "數字",
    "en_def": "any of the numbers from 0 to 9",
    "sentence": "Please enter the last four {{BLANK}} of your social security number.",
    "cn": "請輸入您社會保險號的最後四位數字。"
  },
  {
    "word": "digital camera",
    "pos": "phr.",
    "cn_def": "數碼相機",
    "en_def": "a camera that stores pictures as electronic files, not on film",
    "sentence": "He captured stunning landscapes using his new {{BLANK}}.",
    "cn": "他用他的新數碼相機拍攝了令人驚嘆的風景。"
  },
  {
    "word": "display",
    "pos": "v.",
    "cn_def": "顯示",
    "en_def": "to show something so that people can see it",
    "sentence": "The exhibit will {{BLANK}} rare artifacts from ancient times.",
    "cn": "展覽將展示來自古代的稀有文物。"
  },
  {
    "word": "display",
    "pos": "n.",
    "cn_def": "顯示器",
    "en_def": "a screen that shows information; an arrangement of things for people to look at",
    "sentence": "The high-resolution {{BLANK}} of the device provides clear and vibrant images.",
    "cn": "詣彩的高解析度顯示器提供清晰而鮮豔的圖像。"
  },
  {
    "word": "on display",
    "pos": "phr.",
    "cn_def": "展示",
    "en_def": "put in a place where people can look at it",
    "sentence": "The museum has a new collection {{BLANK}} until the end of the month.",
    "cn": "博物館有一個新的系列展品將展出至月底。"
  },
  {
    "word": "exhibit",
    "pos": "v.",
    "cn_def": "展出",
    "en_def": "to show works of art or objects in public",
    "sentence": "The artist will {{BLANK}} her latest paintings at the gallery.",
    "cn": "藝術家將在畫廊展出她的最新畫作。"
  },
  {
    "word": "exhibit",
    "pos": "n.",
    "cn_def": "單一展品",
    "en_def": "an object that is shown in a museum or gallery",
    "sentence": "The {{BLANK}} includes rare manuscripts from the medieval period.",
    "cn": "展品包括中世紀時期的稀有手稿。"
  },
  {
    "word": "exhibit",
    "pos": "n.",
    "cn_def": "展覽",
    "en_def": "a public show of works of art or interesting objects",
    "sentence": "The museum's new {{BLANK}} on ancient Egypt has attracted thousands of visitors.",
    "cn": "博物館關於古埃及的新展覽吸引了成千上萬的遊客。"
  },
  {
    "word": "development",
    "pos": "n.",
    "cn_def": "發展",
    "en_def": "the process of growing, changing or becoming more advanced",
    "sentence": "The {{BLANK}} of new infrastructure has significantly improved the city's transport system.",
    "cn": "新基礎設施的發展顯著改善了城市的交通系統。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "發展",
    "en_def": "to grow or change into something bigger or more advanced; to create something new",
    "sentence": "Researchers are working to {{BLANK}} a new vaccine for the disease.",
    "cn": "研究人員正在努力研發這種疾病的新疫苗。"
  },
  {
    "word": "develop the film",
    "pos": "phr.",
    "cn_def": "衝洗膠片",
    "en_def": "to treat film with chemicals so that the photographs can be seen",
    "sentence": "In the darkroom, he learned how to {{BLANK}} manually.",
    "cn": "在暗房裡，他學會了如何手動衝洗膠片。"
  },
  {
    "word": "developer of the app",
    "pos": "phr.",
    "cn_def": "應用程式開發者",
    "en_def": "a person or company that designs and creates a computer program",
    "sentence": "The {{BLANK}} introduced several new features in the latest update.",
    "cn": "應用程式開發者在最新更新中引入了幾項新功能。"
  },
  {
    "word": "developing countries",
    "pos": "phr.",
    "cn_def": "發展中國家",
    "en_def": "a poorer country that is building up its industry and economy",
    "sentence": "Many {{BLANK}} face challenges in achieving sustainable economic growth.",
    "cn": "許多發展中國家面臨實現可持續經濟增長的挑戰。"
  },
  {
    "word": "Developed countries",
    "pos": "phr.",
    "cn_def": "已開發國家",
    "en_def": "a rich country with many industries and a high standard of living",
    "sentence": "{{BLANK}} often have more resources to invest in healthcare and education.",
    "cn": "發達國家通常有更多資源投入到醫療保健和教育中。"
  },
  {
    "word": "screen",
    "pos": "n.",
    "cn_def": "屏幕",
    "en_def": "the flat surface on a phone, computer or television where pictures and words appear",
    "sentence": "The latest model of the phone has a larger and clearer {{BLANK}}.",
    "cn": "手機的最新型號擁有更大更清晰的屏幕。"
  },
  {
    "word": "screen",
    "pos": "v.",
    "cn_def": "篩選",
    "en_def": "to check people or things to decide if they are suitable",
    "sentence": "The committee will {{BLANK}} all candidates before making a final decision.",
    "cn": "委員會將在做出最終決定之前篩選所有候選人。"
  },
  {
    "word": "screening",
    "pos": "n.",
    "cn_def": "篩查",
    "en_def": "a test to check people for a disease",
    "sentence": "The hospital offers free health {{BLANK}} for the community.",
    "cn": "醫院為社區提供免費健康篩查。"
  },
  {
    "word": "the big screen",
    "pos": "phr.",
    "cn_def": "大銀幕",
    "en_def": "the cinema; films shown in movie theaters",
    "sentence": "The movie is set to debut on {{BLANK}} next month.",
    "cn": "該電影計劃下個月在大銀幕上首映。"
  },
  {
    "word": "marriage",
    "pos": "n.",
    "cn_def": "婚姻",
    "en_def": "the legal relationship between two people who are husband and wife",
    "sentence": "Their {{BLANK}} was a celebration of love and commitment.",
    "cn": "他們的婚姻是對愛和承諾的慶祝。"
  },
  {
    "word": "marriage",
    "pos": "n.",
    "cn_def": "結合",
    "en_def": "a close combination of two different things",
    "sentence": "The dish is a {{BLANK}} of various flavors that blend harmoniously together.",
    "cn": "這道菜是各種口味的結合，融合得非常和諧。"
  },
  {
    "word": "marry",
    "pos": "v.",
    "cn_def": "結婚",
    "en_def": "to become someone's husband or wife",
    "sentence": "They plan to {{BLANK}} in a small wedding ceremony with close family and friends.",
    "cn": "他們計劃與親密的家人和朋友進行一個小型的儀式結婚。"
  },
  {
    "word": "married",
    "pos": "adj.",
    "cn_def": "已婚的",
    "en_def": "having a husband or wife",
    "sentence": "The {{BLANK}} couple moved into their new home last week after their wedding and honeymoon.",
    "cn": "這對已婚夫婦上週搬進了他們的新家，在他們婚禮和蜜月之後。"
  },
  {
    "word": "revolutionary",
    "pos": "adj.",
    "cn_def": "革命性的",
    "en_def": "involving a great or complete change",
    "sentence": "The scientist's {{BLANK}} discovery changed the field of medicine.",
    "cn": "這位科學家的革命性發現改變了醫學領域。"
  },
  {
    "word": "revolution",
    "pos": "n.",
    "cn_def": "革命",
    "en_def": "a great change in the way people live, work or think; an attempt to change a government by force",
    "sentence": "The industrial {{BLANK}} had a profound impact on society and the economy.",
    "cn": "工業革命對社會和經濟產生了深遠的影響。"
  },
  {
    "word": "revolve",
    "pos": "v.",
    "cn_def": "旋轉",
    "en_def": "to move in a circle around a central point",
    "sentence": "The planets {{BLANK}} around the sun in an elliptical orbit.",
    "cn": "行星沿著橢圓軌道繞太陽旋轉。"
  },
  {
    "word": "era",
    "pos": "n.",
    "cn_def": "時代",
    "en_def": "a period of time in history that is known for a particular event or quality",
    "sentence": "The discovery marked the beginning of a new {{BLANK}} in space exploration.",
    "cn": "這一發現標誌著太空探索新時代的開始。"
  },
  {
    "word": "technology",
    "pos": "n.",
    "cn_def": "技術",
    "en_def": "the use of scientific knowledge to make machines and solve practical problems",
    "sentence": "Advances in {{BLANK}} have greatly improved communication worldwide.",
    "cn": "技術的進步大大改善了全球通信。"
  },
  {
    "word": "technological",
    "pos": "adj.",
    "cn_def": "技術的",
    "en_def": "relating to technology",
    "sentence": "The {{BLANK}} advancements have made smart homes more accessible.",
    "cn": "技術進步使智能家居更加普及。"
  },
  {
    "word": "launch its newest beauty and skin care product line",
    "pos": "v.",
    "cn_def": "發行產品/單曲/專輯/影片",
    "en_def": "to make a new product, song or film available to the public for the first time",
    "sentence": "The cosmetics company is set to {{BLANK}} next week.",
    "cn": "該美妝公司計劃於下週推出其最新美容與護膚產品系列。"
  },
  {
    "word": "launch a campaign",
    "pos": "phr.",
    "cn_def": "發起活動",
    "en_def": "to start an organized series of activities to achieve an aim",
    "sentence": "The environmental organization will {{BLANK}} to raise public awareness of environmental conservation and sustainable development.",
    "cn": "該環保組織將發起一項活動，以提高人們對環境保護以及永續發展的意識。"
  },
  {
    "word": "launch a missile",
    "pos": "phr.",
    "cn_def": "發射導彈",
    "en_def": "to send a rocket or weapon into the air or into space",
    "sentence": "The military conducted a test to {{BLANK}} from the new defense system.",
    "cn": "軍方進行了一項測試，從新的防禦系統發射導彈。"
  },
  {
    "word": "launch",
    "pos": "n.",
    "cn_def": "啟動，發射",
    "en_def": "the act of starting something new or of sending a rocket into space",
    "sentence": "The {{BLANK}} of the test satellite was watched by millions around the world in real time.",
    "cn": "數百萬人在全球範圍內同步觀看了衛星的發射。"
  }
];

const MCQS = [
  {
    "q": "The ______ of the new manager was eagerly anticipated by the staff.",
    "options": [
      "arrival",
      "display",
      "marriage",
      "event"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "She was excited to ______ Paris for the first time.",
    "options": [
      "launch a campaign",
      "Mass media",
      "arrive in",
      "Developed countries"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "After hours of driving, they finally ______ their destination.",
    "options": [
      "arrive in",
      "Developed countries",
      "release exhaust",
      "arrived at"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Many consider the 20th ______ to be one of the most eventful in history.",
    "options": [
      "product",
      "century",
      "exhibit",
      "mobile device"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The concert was the most talked-about ______ of the year.",
    "options": [
      "century",
      "release",
      "event",
      "launch"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "After negotiations, the kidnappers agreed to ______.",
    "options": [
      "release the hostage",
      "developing countries",
      "release a single",
      "the big screen"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The artist is set to ______ next month.",
    "options": [
      "a mass of",
      "mass rapid transportation",
      "arrive in",
      "release a single"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Factories that ______ into the atmosphere contribute to air pollution.",
    "options": [
      "developing countries",
      "release exhaust",
      "launch a missile",
      "tourist attraction"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Meditation is a great way to ______.",
    "options": [
      "release stress",
      "arrived at",
      "develop the film",
      "digital camera"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The ______ of new information surprised everyone.",
    "options": [
      "digits",
      "manufacturer",
      "release",
      "arrival"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ______ of the new album was a huge success.",
    "options": [
      "access",
      "release",
      "screen",
      "display"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "With today's ______ technology, working remotely has become easier.",
    "options": [
      "predictable",
      "married",
      "massive",
      "mobile"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Many people use a ______ for daily tasks like emailing, browsing the web, and managing schedules.",
    "options": [
      "technology",
      "automobile",
      "mobile device",
      "event"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The city's ______ options have been enhanced with new bike lanes.",
    "options": [
      "portability",
      "automobile",
      "technology",
      "mobility"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The ______ industry has seen significant changes with the introduction of electric cars.",
    "options": [
      "product",
      "automobile",
      "century",
      "manufacturing"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The bright colors of the flowers ______ many bees and butterflies.",
    "options": [
      "attract",
      "display",
      "develop",
      "manufactures"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The city's main ______ is its historic castle.",
    "options": [
      "marriage",
      "screen",
      "producer",
      "attraction"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The Eiffel Tower is a famous ______ in Paris.",
    "options": [
      "arrived at",
      "tourist attraction",
      "on display",
      "release the hostage"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The idea of a shorter workweek is ______ to many people.",
    "options": [
      "mass",
      "mobile",
      "attractive",
      "appealing"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The concept of living a minimalist lifestyle is ______ to those who seek simplicity.",
    "options": [
      "appealing",
      "available",
      "revolutionary",
      "massive"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "After reading the newspaper, he ______ it and put it back on the table.",
    "options": [
      "marry",
      "folded",
      "display",
      "launch its newest beauty and skin care product line"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The ______ in the paper indicates it has been in someone's pocket.",
    "options": [
      "technology",
      "folder",
      "access",
      "fold"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "She organized her documents into a ______ for easy access.",
    "options": [
      "folder",
      "release",
      "screening",
      "era"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The ______ bike can easily be stored in a small apartment.",
    "options": [
      "technological",
      "mobile",
      "foldable",
      "digital"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Students can ______ the online library resources from anywhere.",
    "options": [
      "exhibit",
      "access",
      "manufactures",
      "folded"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The new road provides easier ______ to the remote village.",
    "options": [
      "access",
      "product",
      "producer",
      "production"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The museum is ______ to wheelchair users.",
    "options": [
      "married",
      "importable",
      "available",
      "accessible"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The outcome of the game was ______ based on the team's performance.",
    "options": [
      "appealing",
      "portable",
      "predictable",
      "importable"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The new model will be ______ for purchase next month.",
    "options": [
      "productive",
      "available",
      "accessible",
      "importable"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The architect showed a ______ of the proposed building.",
    "options": [
      "technology",
      "produce",
      "model",
      "era"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The latest ______ of the smartphone features several innovative upgrades.",
    "options": [
      "model",
      "revolution",
      "screen",
      "productivity"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The fashion ______ walked down the runway with confidence.",
    "options": [
      "manufacturing",
      "event",
      "folder",
      "model"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Young athletes often ______ their techniques after famous sports stars.",
    "options": [
      "attract",
      "marry",
      "model",
      "launch its newest beauty and skin care product line"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "She will ______ the designer's new collection at the fashion show.",
    "options": [
      "launch its newest beauty and skin care product line",
      "model",
      "exhibit",
      "folded"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The ______ charger is a convenient accessory for travelers.",
    "options": [
      "portable",
      "massive",
      "importable",
      "accessible"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The ______ of the laptop makes it perfect for on-the-go use.",
    "options": [
      "fold",
      "mass",
      "produce",
      "portability"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "The company is looking for ______ goods to expand its product range.",
    "options": [
      "attractive",
      "importable",
      "portable",
      "mass"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "The ______ production of goods has become a hallmark of modern industry.",
    "options": [
      "technological",
      "mobile",
      "available",
      "mass"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The Industrial Revolution led to ______, which has significantly lowered the cost of manufacturing.",
    "options": [
      "mass production of goods",
      "release stress",
      "release exhaust",
      "the big screen"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The city's ______ system makes commuting easier for residents.",
    "options": [
      "developing countries",
      "the big screen",
      "mass rapid transportation",
      "Mass media"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "______ plays a crucial role in shaping public opinion.",
    "options": [
      "arrived at",
      "Mass media",
      "release stress",
      "launch a campaign"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "The museum houses ______ rare artifacts.",
    "options": [
      "launch a campaign",
      "mass production of goods",
      "release the hostage",
      "a mass of"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The ______ of the planet is estimated to be six times that of Earth.",
    "options": [
      "folder",
      "attraction",
      "mass",
      "digits"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "The project requires a ______ amount of resources and time.",
    "options": [
      "massive",
      "mass",
      "revolutionary",
      "available"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "The factory's ______ levels have increased this year.",
    "options": [
      "screening",
      "production",
      "manufacturing",
      "display"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The region is known to ______ the finest quality of wine.",
    "options": [
      "access",
      "revolve",
      "produce",
      "develop"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "Fresh ______ is sold at the local farmers' market.",
    "options": [
      "produce",
      "producer",
      "screen",
      "arrival"
    ],
    "answer": 0,
    "vocabIndex": 46
  },
  {
    "q": "The team had a very ______ meeting and resolved many issues.",
    "options": [
      "married",
      "foldable",
      "attractive",
      "productive"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "Improved technology can significantly increase ______.",
    "options": [
      "portability",
      "productivity",
      "automobile",
      "century"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "The company launched a new ______ that quickly became popular.",
    "options": [
      "access",
      "portability",
      "mass",
      "product"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "The ______ of the film received critical acclaim for their work.",
    "options": [
      "mobility",
      "exhibit",
      "producer",
      "revolution"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "The company ______ electronic components for various industries.",
    "options": [
      "manufactures",
      "access",
      "marry",
      "model"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The ______ is known for its high-quality, durable products.",
    "options": [
      "arrival",
      "attraction",
      "access",
      "manufacturer"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The city's economy is heavily reliant on ______.",
    "options": [
      "event",
      "manufacturing",
      "producer",
      "manufacturer"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The ______ age has transformed how we store and access information.",
    "options": [
      "married",
      "revolutionary",
      "digital",
      "importable"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "Please enter the last four ______ of your social security number.",
    "options": [
      "digits",
      "produce",
      "exhibit",
      "technology"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "He captured stunning landscapes using his new ______.",
    "options": [
      "tourist attraction",
      "developer of the app",
      "release stress",
      "digital camera"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "The exhibit will ______ rare artifacts from ancient times.",
    "options": [
      "model",
      "access",
      "display",
      "manufactures"
    ],
    "answer": 2,
    "vocabIndex": 57
  },
  {
    "q": "The high-resolution ______ of the device provides clear and vibrant images.",
    "options": [
      "display",
      "productivity",
      "portability",
      "automobile"
    ],
    "answer": 0,
    "vocabIndex": 58
  },
  {
    "q": "The museum has a new collection ______ until the end of the month.",
    "options": [
      "a mass of",
      "on display",
      "develop the film",
      "digital camera"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "The artist will ______ her latest paintings at the gallery.",
    "options": [
      "exhibit",
      "manufactures",
      "develop",
      "access"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "The ______ includes rare manuscripts from the medieval period.",
    "options": [
      "display",
      "launch",
      "century",
      "exhibit"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "The museum's new ______ on ancient Egypt has attracted thousands of visitors.",
    "options": [
      "arrival",
      "screen",
      "exhibit",
      "mobile device"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The ______ of new infrastructure has significantly improved the city's transport system.",
    "options": [
      "automobile",
      "development",
      "launch",
      "century"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "Researchers are working to ______ a new vaccine for the disease.",
    "options": [
      "marry",
      "access",
      "develop",
      "produce"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "In the darkroom, he learned how to ______ manually.",
    "options": [
      "develop the film",
      "digital camera",
      "tourist attraction",
      "release exhaust"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "The ______ introduced several new features in the latest update.",
    "options": [
      "release stress",
      "mass rapid transportation",
      "on display",
      "developer of the app"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "Many ______ face challenges in achieving sustainable economic growth.",
    "options": [
      "release stress",
      "developing countries",
      "digital camera",
      "a mass of"
    ],
    "answer": 1,
    "vocabIndex": 67
  },
  {
    "q": "______ often have more resources to invest in healthcare and education.",
    "options": [
      "developer of the app",
      "mass production of goods",
      "Developed countries",
      "arrived at"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "The latest model of the phone has a larger and clearer ______.",
    "options": [
      "producer",
      "portability",
      "launch",
      "screen"
    ],
    "answer": 3,
    "vocabIndex": 69
  },
  {
    "q": "The committee will ______ all candidates before making a final decision.",
    "options": [
      "screen",
      "produce",
      "display",
      "marry"
    ],
    "answer": 0,
    "vocabIndex": 70
  },
  {
    "q": "The hospital offers free health ______ for the community.",
    "options": [
      "marriage",
      "screening",
      "access",
      "development"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "The movie is set to debut on ______ next month.",
    "options": [
      "launch a missile",
      "arrive in",
      "Developed countries",
      "the big screen"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "Their ______ was a celebration of love and commitment.",
    "options": [
      "marriage",
      "automobile",
      "development",
      "producer"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "The dish is a ______ of various flavors that blend harmoniously together.",
    "options": [
      "digits",
      "exhibit",
      "marriage",
      "release"
    ],
    "answer": 2,
    "vocabIndex": 74
  },
  {
    "q": "They plan to ______ in a small wedding ceremony with close family and friends.",
    "options": [
      "display",
      "marry",
      "model",
      "develop"
    ],
    "answer": 1,
    "vocabIndex": 75
  },
  {
    "q": "The ______ couple moved into their new home last week after their wedding and honeymoon.",
    "options": [
      "married",
      "accessible",
      "attractive",
      "mobile"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "The scientist's ______ discovery changed the field of medicine.",
    "options": [
      "married",
      "accessible",
      "revolutionary",
      "foldable"
    ],
    "answer": 2,
    "vocabIndex": 77
  },
  {
    "q": "The industrial ______ had a profound impact on society and the economy.",
    "options": [
      "production",
      "revolution",
      "arrival",
      "attraction"
    ],
    "answer": 1,
    "vocabIndex": 78
  },
  {
    "q": "The planets ______ around the sun in an elliptical orbit.",
    "options": [
      "model",
      "develop",
      "marry",
      "revolve"
    ],
    "answer": 3,
    "vocabIndex": 79
  },
  {
    "q": "The discovery marked the beginning of a new ______ in space exploration.",
    "options": [
      "mass",
      "era",
      "manufacturer",
      "arrival"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "Advances in ______ have greatly improved communication worldwide.",
    "options": [
      "manufacturing",
      "event",
      "technology",
      "producer"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "The ______ advancements have made smart homes more accessible.",
    "options": [
      "technological",
      "mobile",
      "predictable",
      "importable"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "The cosmetics company is set to ______ next week.",
    "options": [
      "manufactures",
      "exhibit",
      "screen",
      "launch its newest beauty and skin care product line"
    ],
    "answer": 3,
    "vocabIndex": 83
  },
  {
    "q": "The environmental organization will ______ to raise public awareness of environmental conservation and sustainable development.",
    "options": [
      "Developed countries",
      "launch a campaign",
      "the big screen",
      "launch a missile"
    ],
    "answer": 1,
    "vocabIndex": 84
  },
  {
    "q": "The military conducted a test to ______ from the new defense system.",
    "options": [
      "on display",
      "a mass of",
      "arrive in",
      "launch a missile"
    ],
    "answer": 3,
    "vocabIndex": 85
  },
  {
    "q": "The ______ of the test satellite was watched by millions around the world in real time.",
    "options": [
      "launch",
      "production",
      "screening",
      "mobility"
    ],
    "answer": 0,
    "vocabIndex": 86
  }
];

const LOOKUP = {
  "arrival": {
    "pos": "n.",
    "en_def": "the act of coming to or reaching a place",
    "cn_def": "到達",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of coming to or reaching a place",
        "cn_def": "到達"
      }
    ]
  },
  "arrive in": {
    "pos": "phr.",
    "en_def": "to reach a country or city",
    "cn_def": "到達某國某城市",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reach a country or city",
        "cn_def": "到達某國某城市"
      }
    ]
  },
  "arrive in country/city": {
    "pos": "phr.",
    "en_def": "to reach a country or city",
    "cn_def": "到達某國某城市",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reach a country or city",
        "cn_def": "到達某國某城市"
      }
    ]
  },
  "arrive at": {
    "pos": "phr.",
    "en_def": "to reach a building or a particular place",
    "cn_def": "到達某地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reach a building or a particular place",
        "cn_def": "到達某地"
      }
    ]
  },
  "arrived at": {
    "pos": "phr.",
    "en_def": "to reach a building or a particular place",
    "cn_def": "到達某地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to reach a building or a particular place",
        "cn_def": "到達某地"
      }
    ]
  },
  "the ...century": {
    "pos": "n.",
    "en_def": "a period of one hundred years",
    "cn_def": "世紀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of one hundred years",
        "cn_def": "世紀"
      }
    ]
  },
  "century": {
    "pos": "n.",
    "en_def": "a period of one hundred years",
    "cn_def": "世紀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of one hundred years",
        "cn_def": "世紀"
      }
    ]
  },
  "event": {
    "pos": "n.",
    "en_def": "something that happens, especially something important or planned",
    "cn_def": "事件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that happens, especially something important or planned",
        "cn_def": "事件"
      }
    ]
  },
  "release a hostage": {
    "pos": "phr.",
    "en_def": "to set free a person who has been held prisoner",
    "cn_def": "釋放人質",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to set free a person who has been held prisoner",
        "cn_def": "釋放人質"
      }
    ]
  },
  "release the hostage": {
    "pos": "phr.",
    "en_def": "to set free a person who has been held prisoner",
    "cn_def": "釋放人質",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to set free a person who has been held prisoner",
        "cn_def": "釋放人質"
      }
    ]
  },
  "release a single/video/product": {
    "pos": "phr.",
    "en_def": "to make a song, film or product available for people to buy or see",
    "cn_def": "發行單曲/視頻/產品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a song, film or product available for people to buy or see",
        "cn_def": "發行單曲/視頻/產品"
      }
    ]
  },
  "release a single": {
    "pos": "phr.",
    "en_def": "to make a song, film or product available for people to buy or see",
    "cn_def": "發行單曲/視頻/產品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a song, film or product available for people to buy or see",
        "cn_def": "發行單曲/視頻/產品"
      }
    ]
  },
  "release exhaust": {
    "pos": "phr.",
    "en_def": "to let waste gas out into the air",
    "cn_def": "排放廢氣",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to let waste gas out into the air",
        "cn_def": "排放廢氣"
      }
    ]
  },
  "release stress": {
    "pos": "phr.",
    "en_def": "to get rid of feelings of worry or tension",
    "cn_def": "釋放壓力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get rid of feelings of worry or tension",
        "cn_def": "釋放壓力"
      }
    ]
  },
  "release stress/ pressure": {
    "pos": "phr.",
    "en_def": "to get rid of feelings of worry or tension",
    "cn_def": "釋放壓力",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to get rid of feelings of worry or tension",
        "cn_def": "釋放壓力"
      }
    ]
  },
  "release": {
    "pos": "n.",
    "en_def": "the act of letting someone or something go free or making information known",
    "cn_def": "釋放",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of letting someone or something go free or making information known",
        "cn_def": "釋放"
      },
      {
        "pos": "n.",
        "en_def": "the act of making a new song, film or product available to the public",
        "cn_def": "發行"
      }
    ]
  },
  "mobile": {
    "pos": "adj.",
    "en_def": "able to move or be moved easily",
    "cn_def": "移動的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to move or be moved easily",
        "cn_def": "移動的"
      }
    ]
  },
  "mobile device / portable device": {
    "pos": "n.",
    "en_def": "a small computer, such as a phone or tablet, that you can carry with you",
    "cn_def": "行動裝置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small computer, such as a phone or tablet, that you can carry with you",
        "cn_def": "行動裝置"
      }
    ]
  },
  "mobile device": {
    "pos": "n.",
    "en_def": "a small computer, such as a phone or tablet, that you can carry with you",
    "cn_def": "行動裝置",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small computer, such as a phone or tablet, that you can carry with you",
        "cn_def": "行動裝置"
      }
    ]
  },
  "mobility": {
    "pos": "n.",
    "en_def": "the ability to move or travel easily from place to place",
    "cn_def": "移動性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to move or travel easily from place to place",
        "cn_def": "移動性"
      }
    ]
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a car",
        "cn_def": "汽車"
      }
    ]
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make people or animals interested and want to come closer",
    "cn_def": "吸引",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make people or animals interested and want to come closer",
        "cn_def": "吸引"
      }
    ]
  },
  "attraction": {
    "pos": "n.",
    "en_def": "something interesting that people want to see or do",
    "cn_def": "吸引力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something interesting that people want to see or do",
        "cn_def": "吸引力"
      }
    ]
  },
  "tourist attraction": {
    "pos": "phr.",
    "en_def": "a place of interest that many visitors come to see",
    "cn_def": "旅遊景點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place of interest that many visitors come to see",
        "cn_def": "旅遊景點"
      }
    ]
  },
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasant to look at; interesting enough to want",
    "cn_def": "有吸引力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasant to look at; interesting enough to want",
        "cn_def": "有吸引力的"
      }
    ]
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting",
    "cn_def": "吸引人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "attractive or interesting",
        "cn_def": "吸引人的"
      }
    ]
  },
  "fold": {
    "pos": "v.",
    "en_def": "to bend paper or cloth so that one part lies on top of another",
    "cn_def": "折疊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bend paper or cloth so that one part lies on top of another",
        "cn_def": "折疊"
      },
      {
        "pos": "n.",
        "en_def": "a line or mark made by bending paper or cloth",
        "cn_def": "折痕"
      }
    ]
  },
  "folded": {
    "pos": "v.",
    "en_def": "to bend paper or cloth so that one part lies on top of another",
    "cn_def": "折疊",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bend paper or cloth so that one part lies on top of another",
        "cn_def": "折疊"
      }
    ]
  },
  "folder": {
    "pos": "n.",
    "en_def": "a cardboard or plastic cover for keeping papers together; a place for storing files on a computer",
    "cn_def": "文件夾",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a cardboard or plastic cover for keeping papers together; a place for storing files on a computer",
        "cn_def": "文件夾"
      }
    ]
  },
  "foldable": {
    "pos": "adj.",
    "en_def": "that can be bent or closed to make it smaller",
    "cn_def": "可摺疊的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "that can be bent or closed to make it smaller",
        "cn_def": "可摺疊的"
      }
    ]
  },
  "access": {
    "pos": "v.",
    "en_def": "to open or get information, especially on a computer",
    "cn_def": "存取",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to open or get information, especially on a computer",
        "cn_def": "存取"
      },
      {
        "pos": "n.",
        "en_def": "a way of entering or reaching a place",
        "cn_def": "途徑"
      }
    ]
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, enter or use",
    "cn_def": "易接近的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to reach, enter or use",
        "cn_def": "易接近的"
      }
    ]
  },
  "predictable": {
    "pos": "adj.",
    "en_def": "happening or behaving in a way that you expect",
    "cn_def": "可預測的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or behaving in a way that you expect",
        "cn_def": "可預測的"
      }
    ]
  },
  "available": {
    "pos": "adj.",
    "en_def": "able to be used or obtained",
    "cn_def": "可用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be used or obtained",
        "cn_def": "可用的"
      }
    ]
  },
  "model": {
    "pos": "n.",
    "en_def": "a small copy of a building, vehicle or other object",
    "cn_def": "模型",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small copy of a building, vehicle or other object",
        "cn_def": "模型"
      },
      {
        "pos": "n.",
        "en_def": "a particular type or design of a product such as a car or phone",
        "cn_def": "機號型號"
      },
      {
        "pos": "n.",
        "en_def": "a person whose job is to wear and show clothes",
        "cn_def": "模特兒"
      },
      {
        "pos": "v.",
        "en_def": "to copy the way someone does something because you admire them",
        "cn_def": "模仿"
      },
      {
        "pos": "v.",
        "en_def": "to wear clothes in order to show them to possible buyers",
        "cn_def": "穿戴衣服展示"
      }
    ]
  },
  "portable": {
    "pos": "adj.",
    "en_def": "easy to carry or move",
    "cn_def": "便攜的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easy to carry or move",
        "cn_def": "便攜的"
      }
    ]
  },
  "portability": {
    "pos": "n.",
    "en_def": "the quality of being easy to carry or move",
    "cn_def": "便攜性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being easy to carry or move",
        "cn_def": "便攜性"
      }
    ]
  },
  "importable": {
    "pos": "adj.",
    "en_def": "that can be brought into a country from abroad",
    "cn_def": "可進口的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "that can be brought into a country from abroad",
        "cn_def": "可進口的"
      }
    ]
  },
  "mass": {
    "pos": "adj.",
    "en_def": "involving or affecting a large number of people or things",
    "cn_def": "大量的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving or affecting a large number of people or things",
        "cn_def": "大量的"
      },
      {
        "pos": "n.",
        "en_def": "the amount of matter that an object contains",
        "cn_def": "質量"
      }
    ]
  },
  "mass production of goods": {
    "pos": "phr.",
    "en_def": "the making of large amounts of products in factories",
    "cn_def": "大量生產產品",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the making of large amounts of products in factories",
        "cn_def": "大量生產產品"
      }
    ]
  },
  "mass rapid transportation": {
    "pos": "phr.",
    "en_def": "a city railway system that carries large numbers of people quickly",
    "cn_def": "大眾快速交通",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a city railway system that carries large numbers of people quickly",
        "cn_def": "大眾快速交通"
      }
    ]
  },
  "mass media": {
    "pos": "phr.",
    "en_def": "newspapers, television, radio and the internet, which reach very large numbers of people",
    "cn_def": "大眾媒體",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "newspapers, television, radio and the internet, which reach very large numbers of people",
        "cn_def": "大眾媒體"
      }
    ]
  },
  "a mass of": {
    "pos": "phr.",
    "en_def": "a large amount or number of something",
    "cn_def": "大量的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a large amount or number of something",
        "cn_def": "大量的"
      }
    ]
  },
  "massive": {
    "pos": "adj.",
    "en_def": "very large, heavy or powerful",
    "cn_def": "巨大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "very large, heavy or powerful",
        "cn_def": "巨大的"
      }
    ]
  },
  "production": {
    "pos": "n.",
    "en_def": "the process of making or growing things in large amounts",
    "cn_def": "生產",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of making or growing things in large amounts",
        "cn_def": "生產"
      }
    ]
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make or grow something",
    "cn_def": "生產",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or grow something",
        "cn_def": "生產"
      },
      {
        "pos": "n.",
        "en_def": "fresh fruit and vegetables grown on farms",
        "cn_def": "農產品"
      }
    ]
  },
  "productive": {
    "pos": "adj.",
    "en_def": "producing a lot; getting good results",
    "cn_def": "生產力強的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing a lot; getting good results",
        "cn_def": "生產力強的"
      }
    ]
  },
  "productivity": {
    "pos": "n.",
    "en_def": "the rate at which goods are produced or work is done",
    "cn_def": "生產力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the rate at which goods are produced or work is done",
        "cn_def": "生產力"
      }
    ]
  },
  "product": {
    "pos": "n.",
    "en_def": "something that is made to be sold",
    "cn_def": "產品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is made to be sold",
        "cn_def": "產品"
      }
    ]
  },
  "producer": {
    "pos": "n.",
    "en_def": "a person or company that makes or grows something; a person in charge of making a film",
    "cn_def": "生產者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or company that makes or grows something; a person in charge of making a film",
        "cn_def": "生產者"
      }
    ]
  },
  "manufacture": {
    "pos": "v.",
    "en_def": "to make goods in large numbers in a factory",
    "cn_def": "製造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make goods in large numbers in a factory",
        "cn_def": "製造"
      }
    ]
  },
  "manufactures": {
    "pos": "v.",
    "en_def": "to make goods in large numbers in a factory",
    "cn_def": "製造",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make goods in large numbers in a factory",
        "cn_def": "製造"
      }
    ]
  },
  "manufacturer": {
    "pos": "n.",
    "en_def": "a company that makes goods in large numbers",
    "cn_def": "製造商",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company that makes goods in large numbers",
        "cn_def": "製造商"
      }
    ]
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "the business of making goods in factories",
    "cn_def": "製造業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the business of making goods in factories",
        "cn_def": "製造業"
      }
    ]
  },
  "digital": {
    "pos": "adj.",
    "en_def": "using computer technology; showing information as numbers",
    "cn_def": "數字的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "using computer technology; showing information as numbers",
        "cn_def": "數字的"
      }
    ]
  },
  "digits": {
    "pos": "n.",
    "en_def": "any of the numbers from 0 to 9",
    "cn_def": "數字",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any of the numbers from 0 to 9",
        "cn_def": "數字"
      }
    ]
  },
  "digit": {
    "pos": "n.",
    "en_def": "any of the numbers from 0 to 9",
    "cn_def": "數字",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any of the numbers from 0 to 9",
        "cn_def": "數字"
      }
    ]
  },
  "digital camera": {
    "pos": "phr.",
    "en_def": "a camera that stores pictures as electronic files, not on film",
    "cn_def": "數碼相機",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a camera that stores pictures as electronic files, not on film",
        "cn_def": "數碼相機"
      }
    ]
  },
  "display": {
    "pos": "v.",
    "en_def": "to show something so that people can see it",
    "cn_def": "顯示",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show something so that people can see it",
        "cn_def": "顯示"
      },
      {
        "pos": "n.",
        "en_def": "a screen that shows information; an arrangement of things for people to look at",
        "cn_def": "顯示器"
      }
    ]
  },
  "on display": {
    "pos": "phr.",
    "en_def": "put in a place where people can look at it",
    "cn_def": "展示",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "put in a place where people can look at it",
        "cn_def": "展示"
      }
    ]
  },
  "exhibit": {
    "pos": "v.",
    "en_def": "to show works of art or objects in public",
    "cn_def": "展出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show works of art or objects in public",
        "cn_def": "展出"
      },
      {
        "pos": "n.",
        "en_def": "an object that is shown in a museum or gallery",
        "cn_def": "單一展品"
      },
      {
        "pos": "n.",
        "en_def": "a public show of works of art or interesting objects",
        "cn_def": "展覽"
      }
    ]
  },
  "exhibit / exhibition": {
    "pos": "n.",
    "en_def": "a public show of works of art or interesting objects",
    "cn_def": "展覽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a public show of works of art or interesting objects",
        "cn_def": "展覽"
      }
    ]
  },
  "development": {
    "pos": "n.",
    "en_def": "the process of growing, changing or becoming more advanced",
    "cn_def": "發展",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of growing, changing or becoming more advanced",
        "cn_def": "發展"
      }
    ]
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or change into something bigger or more advanced; to create something new",
    "cn_def": "發展",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to grow or change into something bigger or more advanced; to create something new",
        "cn_def": "發展"
      }
    ]
  },
  "develop the film": {
    "pos": "phr.",
    "en_def": "to treat film with chemicals so that the photographs can be seen",
    "cn_def": "衝洗膠片",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat film with chemicals so that the photographs can be seen",
        "cn_def": "衝洗膠片"
      }
    ]
  },
  "developer of the app": {
    "pos": "phr.",
    "en_def": "a person or company that designs and creates a computer program",
    "cn_def": "應用程式開發者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person or company that designs and creates a computer program",
        "cn_def": "應用程式開發者"
      }
    ]
  },
  "developer (of an app)": {
    "pos": "phr.",
    "en_def": "a person or company that designs and creates a computer program",
    "cn_def": "應用程式開發者",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person or company that designs and creates a computer program",
        "cn_def": "應用程式開發者"
      }
    ]
  },
  "developing country": {
    "pos": "phr.",
    "en_def": "a poorer country that is building up its industry and economy",
    "cn_def": "發展中國家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a poorer country that is building up its industry and economy",
        "cn_def": "發展中國家"
      }
    ]
  },
  "developing countries": {
    "pos": "phr.",
    "en_def": "a poorer country that is building up its industry and economy",
    "cn_def": "發展中國家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a poorer country that is building up its industry and economy",
        "cn_def": "發展中國家"
      }
    ]
  },
  "developed countries": {
    "pos": "phr.",
    "en_def": "a rich country with many industries and a high standard of living",
    "cn_def": "已開發國家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a rich country with many industries and a high standard of living",
        "cn_def": "已開發國家"
      }
    ]
  },
  "developed country": {
    "pos": "phr.",
    "en_def": "a rich country with many industries and a high standard of living",
    "cn_def": "已開發國家",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a rich country with many industries and a high standard of living",
        "cn_def": "已開發國家"
      }
    ]
  },
  "screen": {
    "pos": "n.",
    "en_def": "the flat surface on a phone, computer or television where pictures and words appear",
    "cn_def": "屏幕",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the flat surface on a phone, computer or television where pictures and words appear",
        "cn_def": "屏幕"
      },
      {
        "pos": "v.",
        "en_def": "to check people or things to decide if they are suitable",
        "cn_def": "篩選"
      }
    ]
  },
  "screening": {
    "pos": "n.",
    "en_def": "a test to check people for a disease",
    "cn_def": "篩查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a test to check people for a disease",
        "cn_def": "篩查"
      }
    ]
  },
  "the big screen": {
    "pos": "phr.",
    "en_def": "the cinema; films shown in movie theaters",
    "cn_def": "大銀幕",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the cinema; films shown in movie theaters",
        "cn_def": "大銀幕"
      }
    ]
  },
  "marriage": {
    "pos": "n.",
    "en_def": "the legal relationship between two people who are husband and wife",
    "cn_def": "婚姻",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the legal relationship between two people who are husband and wife",
        "cn_def": "婚姻"
      },
      {
        "pos": "n.",
        "en_def": "a close combination of two different things",
        "cn_def": "結合"
      }
    ]
  },
  "marriage / mixture": {
    "pos": "n.",
    "en_def": "a close combination of two different things",
    "cn_def": "結合",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a close combination of two different things",
        "cn_def": "結合"
      }
    ]
  },
  "marry": {
    "pos": "v.",
    "en_def": "to become someone's husband or wife",
    "cn_def": "結婚",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become someone's husband or wife",
        "cn_def": "結婚"
      }
    ]
  },
  "married": {
    "pos": "adj.",
    "en_def": "having a husband or wife",
    "cn_def": "已婚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a husband or wife",
        "cn_def": "已婚的"
      }
    ]
  },
  "revolutionary": {
    "pos": "adj.",
    "en_def": "involving a great or complete change",
    "cn_def": "革命性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving a great or complete change",
        "cn_def": "革命性的"
      }
    ]
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a great change in the way people live, work or think; an attempt to change a government by force",
    "cn_def": "革命",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a great change in the way people live, work or think; an attempt to change a government by force",
        "cn_def": "革命"
      }
    ]
  },
  "revolve": {
    "pos": "v.",
    "en_def": "to move in a circle around a central point",
    "cn_def": "旋轉",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to move in a circle around a central point",
        "cn_def": "旋轉"
      }
    ]
  },
  "era / period of time": {
    "pos": "n.",
    "en_def": "a period of time in history that is known for a particular event or quality",
    "cn_def": "時代",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of time in history that is known for a particular event or quality",
        "cn_def": "時代"
      }
    ]
  },
  "era": {
    "pos": "n.",
    "en_def": "a period of time in history that is known for a particular event or quality",
    "cn_def": "時代",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a period of time in history that is known for a particular event or quality",
        "cn_def": "時代"
      }
    ]
  },
  "technology": {
    "pos": "n.",
    "en_def": "the use of scientific knowledge to make machines and solve practical problems",
    "cn_def": "技術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the use of scientific knowledge to make machines and solve practical problems",
        "cn_def": "技術"
      }
    ]
  },
  "technological": {
    "pos": "adj.",
    "en_def": "relating to technology",
    "cn_def": "技術的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to technology",
        "cn_def": "技術的"
      }
    ]
  },
  "launch a product line / single/ album/ mv": {
    "pos": "v.",
    "en_def": "to make a new product, song or film available to the public for the first time",
    "cn_def": "發行產品/單曲/專輯/影片",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a new product, song or film available to the public for the first time",
        "cn_def": "發行產品/單曲/專輯/影片"
      }
    ]
  },
  "launch its newest beauty and skin care product line": {
    "pos": "v.",
    "en_def": "to make a new product, song or film available to the public for the first time",
    "cn_def": "發行產品/單曲/專輯/影片",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a new product, song or film available to the public for the first time",
        "cn_def": "發行產品/單曲/專輯/影片"
      }
    ]
  },
  "launch a campaign": {
    "pos": "phr.",
    "en_def": "to start an organized series of activities to achieve an aim",
    "cn_def": "發起活動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start an organized series of activities to achieve an aim",
        "cn_def": "發起活動"
      }
    ]
  },
  "launch a campaign/ movement/ program": {
    "pos": "phr.",
    "en_def": "to start an organized series of activities to achieve an aim",
    "cn_def": "發起活動",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to start an organized series of activities to achieve an aim",
        "cn_def": "發起活動"
      }
    ]
  },
  "launch a missile": {
    "pos": "phr.",
    "en_def": "to send a rocket or weapon into the air or into space",
    "cn_def": "發射導彈",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to send a rocket or weapon into the air or into space",
        "cn_def": "發射導彈"
      }
    ]
  },
  "launch a missile/ satellite": {
    "pos": "phr.",
    "en_def": "to send a rocket or weapon into the air or into space",
    "cn_def": "發射導彈",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to send a rocket or weapon into the air or into space",
        "cn_def": "發射導彈"
      }
    ]
  },
  "launch": {
    "pos": "n.",
    "en_def": "the act of starting something new or of sending a rocket into space",
    "cn_def": "啟動，發射",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of starting something new or of sending a rocket into space",
        "cn_def": "啟動，發射"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
