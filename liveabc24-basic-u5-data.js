// Unit 5 Quiz Data: tame – increasing
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U5 - tame – increasing",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tame",
    "pos": "adj.",
    "cn_def": "馴化的；溫順的",
    "en_def": "(of an animal) not wild; not afraid of people",
    "sentence": "The {{BLANK}} lion in the zoo allowed children to pet and interact with it, which demonstrates its gentle nature.",
    "cn": "在動物園中的馴化獅子允許孩子們撫摸和互動，而這展示了它溫馴的天性。"
  },
  {
    "word": "tame",
    "pos": "v.",
    "cn_def": "馴化；馴服",
    "en_def": "to train a wild animal to live with or obey people",
    "sentence": "It took several months to {{BLANK}} the wild horse and make it suitable for riding.",
    "cn": "需要花好幾個月的時間來馴服這匹野馬，使其適合騎乘。"
  },
  {
    "word": "previous",
    "pos": "adj.",
    "cn_def": "以前的；先前的",
    "en_def": "happening or existing before now or before something else",
    "sentence": "Her {{BLANK}} experience as a teacher provided valuable insights for her new role as a school principal.",
    "cn": "她以前作為(as)教師的經驗為她新的角色——學校校長——提供了有價值的見解。"
  },
  {
    "word": "a grave situation",
    "pos": "adj.",
    "cn_def": "嚴重（的）局勢；嚴峻（的）情況",
    "en_def": "a very serious and worrying state of affairs",
    "sentence": "The pandemic has created a {{BLANK}}, and we must take immediate action to address it.",
    "cn": "這場大流行已經造成了一個嚴重的局勢，我們必須立即采取行動加以應對。"
  },
  {
    "word": "grave",
    "pos": "n.",
    "cn_def": "墳墓",
    "en_def": "a place in the ground where a dead person is buried",
    "sentence": "We visited the {{BLANK}} of our ancestors to pay our respects and honor their memory.",
    "cn": "我們參拜了我們祖先的墳墓，以表示尊敬和紀念他們。"
  },
  {
    "word": "graveyard",
    "pos": "n.",
    "cn_def": "墓地",
    "en_def": "an area of land where dead people are buried",
    "sentence": "The old {{BLANK}} was overgrown with ivy, which gives it a hauntingly beautiful appearance.",
    "cn": "這座老墓地被常春藤覆蓋，這使它看起來既令人不安又美麗。"
  },
  {
    "word": "bury",
    "pos": "v.",
    "cn_def": "埋葬；掩埋",
    "en_def": "to put a dead body or an object in the ground and cover it",
    "sentence": "We have decided to {{BLANK}} our beloved pet in the backyard so that we can visit its resting place whenever we want.",
    "cn": "我們決定把我們親愛的寵物埋在後院，這樣我們隨時都能去探望它的安息之地。"
  },
  {
    "word": "burial",
    "pos": "n.",
    "cn_def": "埋葬",
    "en_def": "the act or ceremony of putting a dead body in the ground",
    "sentence": "The {{BLANK}} ceremony was a solemn and emotional event, as friends and family gathered to say their final goodbyes.",
    "cn": "埋葬儀式是一個莊嚴而感人的場合，當朋友和家人聚集在一起致上道別之意。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "雜誌刊物",
    "en_def": "a serious magazine about a particular subject or profession",
    "sentence": "Her research essay was published in a prestigious scientific {{BLANK}}, which highlights her groundbreaking research findings.",
    "cn": "她的研究論文被發表在一本著名的科學雜誌中，這彰顯了她的開創性研究成果。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "日記",
    "en_def": "a written record of what you do, see or think each day",
    "sentence": "She faithfully wrote in her {{BLANK}} every night, which documents her thoughts and experiences.",
    "cn": "她每晚都忠實地寫下她的日記，記錄下她的思想和經歷。"
  },
  {
    "word": "journalist",
    "pos": "n.",
    "cn_def": "新聞記者；記者",
    "en_def": "a person who writes or reports news for newspapers, television or websites",
    "sentence": "The {{BLANK}} uncovered corruption within the government, which led to a national scandal.",
    "cn": "記者揭露了政府內部的腐敗行為，這引發了一場全國性的醜聞。"
  },
  {
    "word": "keep a journal",
    "pos": "phr.",
    "cn_def": "寫日誌、記錄心得",
    "en_def": "to write regularly about your experiences and thoughts",
    "sentence": "During his travels across Asia, he decided to {{BLANK}} to capture his daily thoughts and experiences.",
    "cn": "在他橫跨亞洲的旅行中，他決定寫日誌來記錄每天的想法與經驗。"
  },
  {
    "word": "keeping a diary",
    "pos": "phr.",
    "cn_def": "寫日記 (通常較私密)",
    "en_def": "to write each day about your private life and feelings",
    "sentence": "She has been {{BLANK}} since she was ten years old, writing in it every night before bed.",
    "cn": "她從十歲起就一直寫日記，每晚睡前都會在裡面寫字。"
  },
  {
    "word": "journalism",
    "pos": "n.",
    "cn_def": "新聞業、新聞工作",
    "en_def": "the work of collecting and reporting news",
    "sentence": "He decided to study {{BLANK}} at university because he wanted to report on international conflicts.",
    "cn": "他決定在大學攻讀新聞學，因為他想報導國際衝突。"
  },
  {
    "word": "sensational journalism",
    "pos": "phr.",
    "cn_def": "煽情新聞、八卦新聞",
    "en_def": "news reporting that tries to shock or excite people rather than inform them",
    "sentence": "Many critics argue that {{BLANK}} focuses too much on scandals rather than important social issues.",
    "cn": "許多評論家認為，煽情新聞過度關注醜聞，而非重要的社會議題。"
  },
  {
    "word": "suggested",
    "pos": "v.",
    "cn_def": "建議；提議",
    "en_def": "to offer an idea or plan for someone to think about",
    "sentence": "She {{BLANK}} that a few changes to the project (should) be made to make it more efficient and cost-effective.",
    "cn": "她提議對項目計劃進行一些修改，以使其更加高效和具有成本效益。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "建議；提議",
    "en_def": "an idea or plan that you offer for someone to think about",
    "sentence": "He made a {{BLANK}} to improve office productivity, and his suggestion was accepted by the team members.",
    "cn": "他提出一個提高辦公室生產力的建議被團隊成員接受。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "暗示、顯示、建議",
    "en_def": "to show indirectly that something is true or likely",
    "sentence": "The dark clouds in the sky {{BLANK}} that a heavy storm is approaching.",
    "cn": "天上的烏雲暗示著一場強烈的風暴即將來臨。"
  },
  {
    "word": "suggestion",
    "pos": "n.",
    "cn_def": "暗示、建議",
    "en_def": "a slight sign or hint of something",
    "sentence": "There was a slight {{BLANK}} of disappointment in her voice, even though she tried to smile to cover her neagtive emotion.",
    "cn": "她的聲音中仍帶有一絲失望的暗示，儘管她試著微笑去掩飾他的負面情緒。"
  },
  {
    "word": "relation",
    "pos": "n.",
    "cn_def": "關聯性",
    "en_def": "the way in which two things are connected",
    "sentence": "The {{BLANK}} between these two events is not immediately clear, but further investigation may reveal a connection.",
    "cn": "這兩個事件之間的關係並不立即清楚，但進一步的調查可能會揭示一種聯繫。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係；關聯",
    "en_def": "the way two people or things are connected or behave toward each other",
    "sentence": "He has built a close {{BLANK}} with his teammates, which helps them overcome numerous challenges in life.",
    "cn": "他和隊友建立起了密切的關係，這幫助他們克服了生活中的眾多挑戰。"
  },
  {
    "word": "relative",
    "pos": "adj.",
    "cn_def": "相對的；相關的",
    "en_def": "considered in comparison with something else; connected with a subject",
    "sentence": "The {{BLANK}} humidity in this region makes it a comfortable place to live.",
    "cn": "這個地區的相對濕度使其成為一個舒適的居住地。"
  },
  {
    "word": "relatives",
    "pos": "n.",
    "cn_def": "親戚；相關的人或事物",
    "en_def": "a member of your family",
    "sentence": "Many {{BLANK}} came to the family reunion, including my cousins, aunts, and uncles.",
    "cn": "許多親戚參加了家庭團聚，包括表兄弟、姑姑和叔叔。"
  },
  {
    "word": "be related to",
    "pos": "phr.",
    "cn_def": "與...有關；與...有親戚關係",
    "en_def": "to be connected with something; to belong to the same family",
    "sentence": "The discovery of the ancient artifact may {{BLANK}} the history of this region.",
    "cn": "這個古代文物的發現可能與這個地區的歷史有關。"
  },
  {
    "word": "are associated with",
    "pos": "phr.",
    "cn_def": "與...有關聯",
    "en_def": "to be connected with something in people's minds or in fact",
    "sentence": "Many health risks {{BLANK}} smoking, including heart disease and various types of cancer.",
    "cn": "許多健康風險與吸菸有關聯，包括心臟病和各類癌症。"
  },
  {
    "word": "be connected to",
    "pos": "phr.",
    "cn_def": "與...有連結/關係",
    "en_def": "to be joined or linked to something or someone",
    "sentence": "The detective found evidence that the suspect might {{BLANK}} the local criminal gang.",
    "cn": "偵探發現證據顯示嫌犯可能與當地的犯罪集團有關係。 偵探發現證據顯示嫌犯可能與當地的犯罪集團有關係。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study of a subject to discover new facts",
    "sentence": "The {{BLANK}} (which is) conducted by the team requires months of data collection and analysis to draw meaningful conclusions.",
    "cn": "團隊進行的研究需要數月的數據收集和分析，以得出有意義的結論。"
  },
  {
    "word": "researcher",
    "pos": "n.",
    "cn_def": "研究人員；調查者",
    "en_def": "a person who studies a subject carefully to find new facts",
    "sentence": "The {{BLANK}} was awarded a grant to further investigate the effects of climate change on the local ecosystem.",
    "cn": "研究人員獲得了一筆資助金，以進一步研究氣候變化對當地生態系統的影響。"
  },
  {
    "word": "suspect",
    "pos": "v.",
    "cn_def": "懷疑；猜想",
    "en_def": "to think that something is probably true or that someone is probably guilty",
    "sentence": "The detective began to {{BLANK}} foul play when he noticed inconsistencies in the witness's statement.",
    "cn": "探長開始懷疑有不正當行為，當他注意到證人的陳述中存在不一致之處。"
  },
  {
    "word": "suspect",
    "pos": "n.",
    "cn_def": "嫌疑犯；可疑者",
    "en_def": "a person who is thought to have done something wrong",
    "sentence": "The police questioned the {{BLANK}} but didn't have enough evidence to arrest him or charge him of any crime.",
    "cn": "警方盤問了這名嫌疑犯，但沒有足夠的證據進行逮捕或起訴他任何罪刑。"
  },
  {
    "word": "discovery",
    "pos": "n.",
    "cn_def": "發現；發現物",
    "en_def": "the act of finding something for the first time; a thing that is found",
    "sentence": "The {{BLANK}} of a rare fossil in the desert was a significant breakthrough in biology.",
    "cn": "在沙漠中發現一個罕見的化石在古生物學上是一個重大的突破。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現；找到",
    "en_def": "to find or learn something for the first time",
    "sentence": "In the comic One Piece, the explorer is determined to {{BLANK}} a hidden treasure (which is) rumored to be buried on the island.",
    "cn": "在海賊王這個漫畫中，這位探險家決心要發現據說埋藏在這個島上的隱藏寶藏。"
  },
  {
    "word": "confirmed",
    "pos": "v.",
    "cn_def": "確認；證實",
    "en_def": "to say or show that something is definitely true",
    "sentence": "The lab results {{BLANK}} that the patient had a rare genetic condition.",
    "cn": "實驗室的結果證實了患者患有一種罕見的遺傳病。"
  },
  {
    "word": "confirmation",
    "pos": "n.",
    "cn_def": "確認；證實",
    "en_def": "a statement or proof that something is true or certain",
    "sentence": "The official {{BLANK}} of the election results brought an end to the months-long uncertainty.",
    "cn": "選舉結果的官方確認結束了長達數月的不確定性。"
  },
  {
    "word": "arise",
    "pos": "v.",
    "cn_def": "出現；發生",
    "en_def": "(of a problem or situation) to begin to exist or appear",
    "sentence": "Unexpected challenges can {{BLANK}} during a complex project, which requires quick problem-solving.",
    "cn": "在複雜的企劃案中，意想不到的挑戰可能會出現，需要快速解決問題。"
  },
  {
    "word": "arise from",
    "pos": "phr.",
    "cn_def": "由...引起；起源於...=result from",
    "en_def": "to happen as a result of something",
    "sentence": "Many environmental problems {{BLANK}} human activities and industrialization.",
    "cn": "許多環境問題起源於人類活動和工業化。"
  },
  {
    "word": "attract",
    "pos": "v.",
    "cn_def": "吸引；引起興趣",
    "en_def": "to make people interested and want to come or take part",
    "sentence": "The colorful artworks on display at the gallery are designed to {{BLANK}} visitors and spark their curiosity.",
    "cn": "畫廊展示的多彩藝術品旨在吸引訪客，激發他們的好奇心。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "吸引；吸引力",
    "en_def": "the quality of being interesting or pleasant; a place people want to visit",
    "sentence": "The famous theme park is a major tourist {{BLANK}}, which draws visitors from around the world.",
    "cn": "這個著名的主題公園是一個主要的旅遊景點，吸引來自世界各地的遊客。"
  },
  {
    "word": "attractive",
    "pos": "adj.",
    "cn_def": "有吸引力的；迷人的",
    "en_def": "pleasant to look at; interesting enough to want",
    "sentence": "Her {{BLANK}} smile and friendly personality made her instantly likable to everyone she met.",
    "cn": "她迷人的微笑和友好的個性使她在遇到的每個人中都受歡迎。"
  },
  {
    "word": "tourist attraction",
    "pos": "phr.",
    "cn_def": "觀光景點",
    "en_def": "a place of interest that many visitors come to see",
    "sentence": "The Eiffel Tower is a world-famous {{BLANK}} that draws millions of visitors to Paris every year.",
    "cn": "艾菲爾鐵塔是一個世界聞名的觀光景點，每年吸引數百萬遊客來到巴黎。"
  },
  {
    "word": "tourist destination",
    "pos": "phr.",
    "cn_def": "觀光勝地、目的地",
    "en_def": "a place that many people travel to for a holiday",
    "sentence": "Taiwan has become a popular {{BLANK}} for food lovers, thanks to its vibrant night markets.",
    "cn": "台灣已成為深受美食愛好者歡迎的觀光勝地，這要歸功於其充滿活力的夜市。"
  },
  {
    "word": "scenic spot",
    "pos": "phr.",
    "cn_def": "風景區、景點",
    "en_def": "a place known for its beautiful natural views",
    "sentence": "Sun Moon Lake is a beautiful {{BLANK}} known for its breathtaking views and calm waters.",
    "cn": "日月潭是一個美麗的風景區，以其壯麗的景色和平靜的湖水聞名。"
  },
  {
    "word": "rapid",
    "pos": "adj.",
    "cn_def": "迅速的；快速的",
    "en_def": "happening or moving very quickly",
    "sentence": "The {{BLANK}} growth of the tech industry has led to a high demand for skilled professionals.",
    "cn": "科技行業的迅速增長導致了對熟練專業人士的高需求。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少；降低",
    "en_def": "to make something smaller in size, amount or price",
    "sentence": "To {{BLANK}} energy consumption, it's essential to use energy-efficient appliances and practices.",
    "cn": "為了減少能源消耗，使用節能電器和做法很重要。"
  },
  {
    "word": "reduction",
    "pos": "n.",
    "cn_def": "減少；降低",
    "en_def": "a decrease in the amount or size of something",
    "sentence": "The government's policy has led to a significant {{BLANK}} in greenhouse gas emissions, which was a significant environmental achievement.",
    "cn": "政府的政策導致了溫室氣體排放大幅減少，這是一個重大的環境成就。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加；提高",
    "en_def": "to become or make something larger in amount or number",
    "sentence": "To meet the growing demand, the company has decided to {{BLANK}} production capacity by investing in new equipment.",
    "cn": "為了滿足不斷增長的需求，該公司決定藉由投資新設備來增加生產能力。"
  },
  {
    "word": "increase",
    "pos": "n.",
    "cn_def": "增加；提高",
    "en_def": "a rise in the amount or number of something",
    "sentence": "The {{BLANK}} in sales revenue was a positive sign for the company's financial health.",
    "cn": "銷售收入的增加是公司財務健康的一個積極信號。"
  },
  {
    "word": "increasing",
    "pos": "adj.",
    "cn_def": "增加的；不斷增加的",
    "en_def": "becoming greater in amount or number",
    "sentence": "The {{BLANK}} demand for renewable energy sources is driving innovation in the green technology sector.",
    "cn": "對可再生能源的不斷增加的需求推動了綠色技術行業的創新。"
  }
];

const MCQS = [
  {
    "q": "The ______ lion in the zoo allowed children to pet and interact with it, which demonstrates its gentle nature.",
    "options": [
      "rapid",
      "tame",
      "relative",
      "previous"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "It took several months to ______ the wild horse and make it suitable for riding.",
    "options": [
      "bury",
      "increase",
      "arise",
      "tame"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Her ______ experience as a teacher provided valuable insights for her new role as a school principal.",
    "options": [
      "tame",
      "a grave situation",
      "previous",
      "relative"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The pandemic has created a ______, and we must take immediate action to address it.",
    "options": [
      "a grave situation",
      "tame",
      "relative",
      "previous"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "We visited the ______ of our ancestors to pay our respects and honor their memory.",
    "options": [
      "relation",
      "grave",
      "researcher",
      "confirmation"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The old ______ was overgrown with ivy, which gives it a hauntingly beautiful appearance.",
    "options": [
      "relationship",
      "journal",
      "graveyard",
      "attraction"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "We have decided to ______ our beloved pet in the backyard so that we can visit its resting place whenever we want.",
    "options": [
      "suspect",
      "confirmed",
      "increase",
      "bury"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The ______ ceremony was a solemn and emotional event, as friends and family gathered to say their final goodbyes.",
    "options": [
      "burial",
      "graveyard",
      "research",
      "journal"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Her research essay was published in a prestigious scientific ______, which highlights her groundbreaking research findings.",
    "options": [
      "suspect",
      "journalism",
      "researcher",
      "journal"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "She faithfully wrote in her ______ every night, which documents her thoughts and experiences.",
    "options": [
      "discovery",
      "graveyard",
      "journal",
      "relationship"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The ______ uncovered corruption within the government, which led to a national scandal.",
    "options": [
      "journalist",
      "relationship",
      "journalism",
      "journal"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "During his travels across Asia, he decided to ______ to capture his daily thoughts and experiences.",
    "options": [
      "arise from",
      "keep a journal",
      "tourist attraction",
      "be connected to"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "She has been ______ since she was ten years old, writing in it every night before bed.",
    "options": [
      "are associated with",
      "tourist attraction",
      "keeping a diary",
      "arise from"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "He decided to study ______ at university because he wanted to report on international conflicts.",
    "options": [
      "reduction",
      "suggestion",
      "researcher",
      "journalism"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Many critics argue that ______ focuses too much on scandals rather than important social issues.",
    "options": [
      "sensational journalism",
      "scenic spot",
      "keeping a diary",
      "are associated with"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "She ______ that a few changes to the project (should) be made to make it more efficient and cost-effective.",
    "options": [
      "attract",
      "suggested",
      "suspect",
      "arise"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "He made a ______ to improve office productivity, and his suggestion was accepted by the team members.",
    "options": [
      "attraction",
      "journal",
      "suggestion",
      "increase"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The dark clouds in the sky ______ that a heavy storm is approaching.",
    "options": [
      "suggest",
      "confirmed",
      "attract",
      "tame"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "There was a slight ______ of disappointment in her voice, even though she tried to smile to cover her neagtive emotion.",
    "options": [
      "grave",
      "suggestion",
      "reduction",
      "journalism"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The ______ between these two events is not immediately clear, but further investigation may reveal a connection.",
    "options": [
      "suggestion",
      "confirmation",
      "journalism",
      "relation"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "He has built a close ______ with his teammates, which helps them overcome numerous challenges in life.",
    "options": [
      "suspect",
      "relationship",
      "graveyard",
      "suggestion"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The ______ humidity in this region makes it a comfortable place to live.",
    "options": [
      "a grave situation",
      "rapid",
      "increasing",
      "relative"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Many ______ came to the family reunion, including my cousins, aunts, and uncles.",
    "options": [
      "relatives",
      "confirmation",
      "journalist",
      "suggestion"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The discovery of the ancient artifact may ______ the history of this region.",
    "options": [
      "sensational journalism",
      "arise from",
      "be related to",
      "tourist attraction"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Many health risks ______ smoking, including heart disease and various types of cancer.",
    "options": [
      "are associated with",
      "arise from",
      "tourist destination",
      "sensational journalism"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The detective found evidence that the suspect might ______ the local criminal gang.",
    "options": [
      "scenic spot",
      "tourist attraction",
      "be connected to",
      "tourist destination"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The ______ (which is) conducted by the team requires months of data collection and analysis to draw meaningful conclusions.",
    "options": [
      "researcher",
      "research",
      "confirmation",
      "increase"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The ______ was awarded a grant to further investigate the effects of climate change on the local ecosystem.",
    "options": [
      "graveyard",
      "discovery",
      "suggestion",
      "researcher"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The detective began to ______ foul play when he noticed inconsistencies in the witness's statement.",
    "options": [
      "confirmed",
      "arise",
      "suspect",
      "reduce"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The police questioned the ______ but didn't have enough evidence to arrest him or charge him of any crime.",
    "options": [
      "suspect",
      "journalist",
      "research",
      "researcher"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The ______ of a rare fossil in the desert was a significant breakthrough in biology.",
    "options": [
      "reduction",
      "research",
      "confirmation",
      "discovery"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "In the comic One Piece, the explorer is determined to ______ a hidden treasure (which is) rumored to be buried on the island.",
    "options": [
      "attract",
      "discover",
      "increase",
      "confirmed"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The lab results ______ that the patient had a rare genetic condition.",
    "options": [
      "arise",
      "suspect",
      "suggest",
      "confirmed"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The official ______ of the election results brought an end to the months-long uncertainty.",
    "options": [
      "reduction",
      "confirmation",
      "graveyard",
      "grave"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Unexpected challenges can ______ during a complex project, which requires quick problem-solving.",
    "options": [
      "suspect",
      "discover",
      "arise",
      "suggested"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Many environmental problems ______ human activities and industrialization.",
    "options": [
      "arise from",
      "be related to",
      "keeping a diary",
      "tourist destination"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The colorful artworks on display at the gallery are designed to ______ visitors and spark their curiosity.",
    "options": [
      "arise",
      "tame",
      "suggest",
      "attract"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "The famous theme park is a major tourist ______, which draws visitors from around the world.",
    "options": [
      "suspect",
      "researcher",
      "attraction",
      "graveyard"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Her ______ smile and friendly personality made her instantly likable to everyone she met.",
    "options": [
      "attractive",
      "tame",
      "previous",
      "relative"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The Eiffel Tower is a world-famous ______ that draws millions of visitors to Paris every year.",
    "options": [
      "keep a journal",
      "tourist attraction",
      "be related to",
      "be connected to"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "Taiwan has become a popular ______ for food lovers, thanks to its vibrant night markets.",
    "options": [
      "tourist destination",
      "be connected to",
      "sensational journalism",
      "arise from"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Sun Moon Lake is a beautiful ______ known for its breathtaking views and calm waters.",
    "options": [
      "be connected to",
      "scenic spot",
      "are associated with",
      "tourist destination"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "The ______ growth of the tech industry has led to a high demand for skilled professionals.",
    "options": [
      "tame",
      "a grave situation",
      "relative",
      "rapid"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "To ______ energy consumption, it's essential to use energy-efficient appliances and practices.",
    "options": [
      "suggested",
      "confirmed",
      "reduce",
      "tame"
    ],
    "answer": 2,
    "vocabIndex": 43
  },
  {
    "q": "The government's policy has led to a significant ______ in greenhouse gas emissions, which was a significant environmental achievement.",
    "options": [
      "burial",
      "reduction",
      "attraction",
      "journal"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "To meet the growing demand, the company has decided to ______ production capacity by investing in new equipment.",
    "options": [
      "increase",
      "reduce",
      "attract",
      "tame"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "The ______ in sales revenue was a positive sign for the company's financial health.",
    "options": [
      "journal",
      "graveyard",
      "attraction",
      "increase"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "The ______ demand for renewable energy sources is driving innovation in the green technology sector.",
    "options": [
      "attractive",
      "relative",
      "increasing",
      "previous"
    ],
    "answer": 2,
    "vocabIndex": 47
  }
];

const LOOKUP = {
  "tame": {
    "pos": "adj.",
    "en_def": "(of an animal) not wild; not afraid of people",
    "cn_def": "馴化的；溫順的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(of an animal) not wild; not afraid of people",
        "cn_def": "馴化的；溫順的"
      },
      {
        "pos": "v.",
        "en_def": "to train a wild animal to live with or obey people",
        "cn_def": "馴化；馴服"
      }
    ]
  },
  "previous": {
    "pos": "adj.",
    "en_def": "happening or existing before now or before something else",
    "cn_def": "以前的；先前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or existing before now or before something else",
        "cn_def": "以前的；先前的"
      }
    ]
  },
  "a grave situation": {
    "pos": "adj.",
    "en_def": "a very serious and worrying state of affairs",
    "cn_def": "嚴重（的）局勢；嚴峻（的）情況",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "a very serious and worrying state of affairs",
        "cn_def": "嚴重（的）局勢；嚴峻（的）情況"
      }
    ]
  },
  "grave": {
    "pos": "n.",
    "en_def": "a place in the ground where a dead person is buried",
    "cn_def": "墳墓",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a place in the ground where a dead person is buried",
        "cn_def": "墳墓"
      }
    ]
  },
  "graveyard": {
    "pos": "n.",
    "en_def": "an area of land where dead people are buried",
    "cn_def": "墓地",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an area of land where dead people are buried",
        "cn_def": "墓地"
      }
    ]
  },
  "bury": {
    "pos": "v.",
    "en_def": "to put a dead body or an object in the ground and cover it",
    "cn_def": "埋葬；掩埋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put a dead body or an object in the ground and cover it",
        "cn_def": "埋葬；掩埋"
      }
    ]
  },
  "burial": {
    "pos": "n.",
    "en_def": "the act or ceremony of putting a dead body in the ground",
    "cn_def": "埋葬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act or ceremony of putting a dead body in the ground",
        "cn_def": "埋葬"
      }
    ]
  },
  "journal": {
    "pos": "n.",
    "en_def": "a serious magazine about a particular subject or profession",
    "cn_def": "雜誌刊物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a serious magazine about a particular subject or profession",
        "cn_def": "雜誌刊物"
      },
      {
        "pos": "n.",
        "en_def": "a written record of what you do, see or think each day",
        "cn_def": "日記"
      }
    ]
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes or reports news for newspapers, television or websites",
    "cn_def": "新聞記者；記者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who writes or reports news for newspapers, television or websites",
        "cn_def": "新聞記者；記者"
      }
    ]
  },
  "keep a journal": {
    "pos": "phr.",
    "en_def": "to write regularly about your experiences and thoughts",
    "cn_def": "寫日誌、記錄心得",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to write regularly about your experiences and thoughts",
        "cn_def": "寫日誌、記錄心得"
      }
    ]
  },
  "keep a diary": {
    "pos": "phr.",
    "en_def": "to write each day about your private life and feelings",
    "cn_def": "寫日記 (通常較私密)",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to write each day about your private life and feelings",
        "cn_def": "寫日記 (通常較私密)"
      }
    ]
  },
  "keeping a diary": {
    "pos": "phr.",
    "en_def": "to write each day about your private life and feelings",
    "cn_def": "寫日記 (通常較私密)",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to write each day about your private life and feelings",
        "cn_def": "寫日記 (通常較私密)"
      }
    ]
  },
  "journalism": {
    "pos": "n.",
    "en_def": "the work of collecting and reporting news",
    "cn_def": "新聞業、新聞工作",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the work of collecting and reporting news",
        "cn_def": "新聞業、新聞工作"
      }
    ]
  },
  "sensational journalism": {
    "pos": "phr.",
    "en_def": "news reporting that tries to shock or excite people rather than inform them",
    "cn_def": "煽情新聞、八卦新聞",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "news reporting that tries to shock or excite people rather than inform them",
        "cn_def": "煽情新聞、八卦新聞"
      }
    ]
  },
  "suggested": {
    "pos": "v.",
    "en_def": "to offer an idea or plan for someone to think about",
    "cn_def": "建議；提議",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer an idea or plan for someone to think about",
        "cn_def": "建議；提議"
      }
    ]
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to offer an idea or plan for someone to think about",
    "cn_def": "建議；提議",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to offer an idea or plan for someone to think about",
        "cn_def": "建議；提議"
      },
      {
        "pos": "v.",
        "en_def": "to show indirectly that something is true or likely",
        "cn_def": "暗示、顯示、建議"
      }
    ]
  },
  "suggestion": {
    "pos": "n.",
    "en_def": "an idea or plan that you offer for someone to think about",
    "cn_def": "建議；提議",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea or plan that you offer for someone to think about",
        "cn_def": "建議；提議"
      },
      {
        "pos": "n.",
        "en_def": "a slight sign or hint of something",
        "cn_def": "暗示、建議"
      }
    ]
  },
  "relation": {
    "pos": "n.",
    "en_def": "the way in which two things are connected",
    "cn_def": "關聯性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way in which two things are connected",
        "cn_def": "關聯性"
      }
    ]
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way two people or things are connected or behave toward each other",
    "cn_def": "關係；關聯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way two people or things are connected or behave toward each other",
        "cn_def": "關係；關聯"
      }
    ]
  },
  "relative": {
    "pos": "adj.",
    "en_def": "considered in comparison with something else; connected with a subject",
    "cn_def": "相對的；相關的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "considered in comparison with something else; connected with a subject",
        "cn_def": "相對的；相關的"
      },
      {
        "pos": "n.",
        "en_def": "a member of your family",
        "cn_def": "親戚；相關的人或事物"
      }
    ]
  },
  "relatives": {
    "pos": "n.",
    "en_def": "a member of your family",
    "cn_def": "親戚；相關的人或事物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a member of your family",
        "cn_def": "親戚；相關的人或事物"
      }
    ]
  },
  "be related to": {
    "pos": "phr.",
    "en_def": "to be connected with something; to belong to the same family",
    "cn_def": "與...有關；與...有親戚關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be connected with something; to belong to the same family",
        "cn_def": "與...有關；與...有親戚關係"
      }
    ]
  },
  "are associated with": {
    "pos": "phr.",
    "en_def": "to be connected with something in people's minds or in fact",
    "cn_def": "與...有關聯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be connected with something in people's minds or in fact",
        "cn_def": "與...有關聯"
      }
    ]
  },
  "be associated with": {
    "pos": "phr.",
    "en_def": "to be connected with something in people's minds or in fact",
    "cn_def": "與...有關聯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be connected with something in people's minds or in fact",
        "cn_def": "與...有關聯"
      }
    ]
  },
  "be connected to": {
    "pos": "phr.",
    "en_def": "to be joined or linked to something or someone",
    "cn_def": "與...有連結/關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be joined or linked to something or someone",
        "cn_def": "與...有連結/關係"
      }
    ]
  },
  "be connected to/with": {
    "pos": "phr.",
    "en_def": "to be joined or linked to something or someone",
    "cn_def": "與...有連結/關係",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be joined or linked to something or someone",
        "cn_def": "與...有連結/關係"
      }
    ]
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study of a subject to discover new facts",
    "cn_def": "研究；調查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "careful study of a subject to discover new facts",
        "cn_def": "研究；調查"
      }
    ]
  },
  "researcher": {
    "pos": "n.",
    "en_def": "a person who studies a subject carefully to find new facts",
    "cn_def": "研究人員；調查者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who studies a subject carefully to find new facts",
        "cn_def": "研究人員；調查者"
      }
    ]
  },
  "suspect": {
    "pos": "v.",
    "en_def": "to think that something is probably true or that someone is probably guilty",
    "cn_def": "懷疑；猜想",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think that something is probably true or that someone is probably guilty",
        "cn_def": "懷疑；猜想"
      },
      {
        "pos": "n.",
        "en_def": "a person who is thought to have done something wrong",
        "cn_def": "嫌疑犯；可疑者"
      }
    ]
  },
  "discovery": {
    "pos": "n.",
    "en_def": "the act of finding something for the first time; a thing that is found",
    "cn_def": "發現；發現物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of finding something for the first time; a thing that is found",
        "cn_def": "發現；發現物"
      }
    ]
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find or learn something for the first time",
    "cn_def": "發現；找到",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find or learn something for the first time",
        "cn_def": "發現；找到"
      }
    ]
  },
  "confirmed": {
    "pos": "v.",
    "en_def": "to say or show that something is definitely true",
    "cn_def": "確認；證實",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say or show that something is definitely true",
        "cn_def": "確認；證實"
      }
    ]
  },
  "confirm": {
    "pos": "v.",
    "en_def": "to say or show that something is definitely true",
    "cn_def": "確認；證實",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to say or show that something is definitely true",
        "cn_def": "確認；證實"
      }
    ]
  },
  "confirmation": {
    "pos": "n.",
    "en_def": "a statement or proof that something is true or certain",
    "cn_def": "確認；證實",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement or proof that something is true or certain",
        "cn_def": "確認；證實"
      }
    ]
  },
  "arise": {
    "pos": "v.",
    "en_def": "(of a problem or situation) to begin to exist or appear",
    "cn_def": "出現；發生",
    "combined": [
      {
        "pos": "v.",
        "en_def": "(of a problem or situation) to begin to exist or appear",
        "cn_def": "出現；發生"
      }
    ]
  },
  "arise from": {
    "pos": "phr.",
    "en_def": "to happen as a result of something",
    "cn_def": "由...引起；起源於...=result from",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to happen as a result of something",
        "cn_def": "由...引起；起源於...=result from"
      }
    ]
  },
  "attract": {
    "pos": "v.",
    "en_def": "to make people interested and want to come or take part",
    "cn_def": "吸引；引起興趣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make people interested and want to come or take part",
        "cn_def": "吸引；引起興趣"
      }
    ]
  },
  "attraction": {
    "pos": "n.",
    "en_def": "the quality of being interesting or pleasant; a place people want to visit",
    "cn_def": "吸引；吸引力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being interesting or pleasant; a place people want to visit",
        "cn_def": "吸引；吸引力"
      }
    ]
  },
  "attractive": {
    "pos": "adj.",
    "en_def": "pleasant to look at; interesting enough to want",
    "cn_def": "有吸引力的；迷人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "pleasant to look at; interesting enough to want",
        "cn_def": "有吸引力的；迷人的"
      }
    ]
  },
  "tourist attraction": {
    "pos": "phr.",
    "en_def": "a place of interest that many visitors come to see",
    "cn_def": "觀光景點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place of interest that many visitors come to see",
        "cn_def": "觀光景點"
      }
    ]
  },
  "tourist destination": {
    "pos": "phr.",
    "en_def": "a place that many people travel to for a holiday",
    "cn_def": "觀光勝地、目的地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place that many people travel to for a holiday",
        "cn_def": "觀光勝地、目的地"
      }
    ]
  },
  "scenic spot": {
    "pos": "phr.",
    "en_def": "a place known for its beautiful natural views",
    "cn_def": "風景區、景點",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a place known for its beautiful natural views",
        "cn_def": "風景區、景點"
      }
    ]
  },
  "rapid": {
    "pos": "adj.",
    "en_def": "happening or moving very quickly",
    "cn_def": "迅速的；快速的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or moving very quickly",
        "cn_def": "迅速的；快速的"
      }
    ]
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller in size, amount or price",
    "cn_def": "減少；降低",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something smaller in size, amount or price",
        "cn_def": "減少；降低"
      }
    ]
  },
  "reduction in...": {
    "pos": "n.",
    "en_def": "a decrease in the amount or size of something",
    "cn_def": "減少；降低",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a decrease in the amount or size of something",
        "cn_def": "減少；降低"
      }
    ]
  },
  "reduction": {
    "pos": "n.",
    "en_def": "a decrease in the amount or size of something",
    "cn_def": "減少；降低",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a decrease in the amount or size of something",
        "cn_def": "減少；降低"
      }
    ]
  },
  "increase": {
    "pos": "v.",
    "en_def": "to become or make something larger in amount or number",
    "cn_def": "增加；提高",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something larger in amount or number",
        "cn_def": "增加；提高"
      },
      {
        "pos": "n.",
        "en_def": "a rise in the amount or number of something",
        "cn_def": "增加；提高"
      }
    ]
  },
  "the increase in": {
    "pos": "n.",
    "en_def": "a rise in the amount or number of something",
    "cn_def": "增加；提高",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rise in the amount or number of something",
        "cn_def": "增加；提高"
      }
    ]
  },
  "increasing": {
    "pos": "adj.",
    "en_def": "becoming greater in amount or number",
    "cn_def": "增加的；不斷增加的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "becoming greater in amount or number",
        "cn_def": "增加的；不斷增加的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
