// Unit 16 Quiz Data: moral – in a ... light
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U16 - moral – in a ... light",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "moral",
    "pos": "adj.",
    "cn_def": "道德的",
    "en_def": "relating to the principles of right and wrong behavior",
    "sentence": "Parents have a responsibility to provide clear {{BLANK}} guidance to their children.",
    "cn": "父母有責任為孩子提供清晰的道德指引。"
  },
  {
    "word": "morally",
    "pos": "adv.",
    "cn_def": "道德上地",
    "en_def": "in a way that relates to standards of good and bad behavior",
    "sentence": "It is {{BLANK}} wrong to spread rumors about other people behind their backs.",
    "cn": "在背後散播關於他人的謠言在道德上是錯誤的。"
  },
  {
    "word": "immoral",
    "pos": "adj.",
    "cn_def": "不道德的",
    "en_def": "violating accepted standards of right and wrong behavior; morally wrong",
    "sentence": "The dishonest businessman committed an {{BLANK}} act when he intentionally hid the serious defects of his product.",
    "cn": "這名不誠實的商人故意隱瞞產品的嚴重缺陷，犯下了不道德的行為。"
  },
  {
    "word": "immorally",
    "pos": "adv.",
    "cn_def": "不道德地",
    "en_def": "in a way that violates accepted standards of right and wrong behavior",
    "sentence": "The ruthless executive acted {{BLANK}} by exploiting underpaid factory workers to maximize corporate revenue.",
    "cn": "這位無情的高階主管透過剝削低薪的工廠工人來實現公司營收最大化，其行為相當不道德。"
  },
  {
    "word": "morality",
    "pos": "n.",
    "cn_def": "道德；道德觀",
    "en_def": "principles concerning the distinction between right and wrong behavior",
    "sentence": "The university lecture analyzed how recent modern technology developments have affected the {{BLANK}} of the young generation.",
    "cn": "這場大學講座分析了近代現代科技的發展如何影響了年輕一代的道德觀。"
  },
  {
    "word": "mortal",
    "pos": "adj.",
    "cn_def": "致命的；凡人的；不能永生的",
    "en_def": "causing death, or relating to human beings who cannot live forever",
    "sentence": "The ancient warrior received a {{BLANK}} wound during the rough battle and died shortly afterward in the cathedral.",
    "cn": "這位古代戰士在激烈的戰鬥中受了致命傷，不久後便在大教堂裡去世了。"
  },
  {
    "word": "immortal",
    "pos": "adj.",
    "cn_def": "長生不死的；不朽的",
    "en_def": "living forever; never dying or decaying; famous for all time",
    "sentence": "Traditional myths often feature {{BLANK}} gods who hover over the crater and control the rainfall of the region.",
    "cn": "傳統神話中經常以長生不老的神明為特色，祂們在隕石坑上空盤旋並控制該地區的降雨。"
  },
  {
    "word": "mortality",
    "pos": "n.",
    "cn_def": "生命的有限；死亡率",
    "en_def": "the state of being subject to death, or the number of deaths in a given period",
    "sentence": "Advanced medical technology has significantly reduced the infant {{BLANK}} rate in many developing countries worldwide.",
    "cn": "先進的醫療技術已顯著降低了全球許多開發中國家的嬰兒死亡率。"
  },
  {
    "word": "immortality",
    "pos": "n.",
    "cn_def": "長生不老；不朽的聲望",
    "en_def": "the ability to live forever, or eternal fame that lasts through generations",
    "sentence": "The innovative sculptor achieved artistic {{BLANK}} after creating a masterpiece that captured the entire nation's imagination.",
    "cn": "這位創新的雕刻家在創作了一幅擄獲全國想像力的傑作後，獲得了藝術上永恆的不朽。"
  },
  {
    "word": "lethal",
    "pos": "adj.",
    "cn_def": "致命的",
    "en_def": "sufficient to cause death; extremely harmful or destructive",
    "sentence": "Large manufacturing plants are banned from releasing {{BLANK}} toxic pollutants into local agricultural irrigation systems.",
    "cn": "大型製造工廠被禁止向當地農業灌溉系統中排放致命的有毒污染物。"
  },
  {
    "word": "fatal",
    "pos": "adj.",
    "cn_def": "致命的（常指招致失敗或死亡的結果）",
    "en_def": "causing death, or leading to failure or disaster due to an initial mistake",
    "sentence": "Overlooking the strict frameworks of cyber security proved to be a {{BLANK}} mistake for the international tech company.",
    "cn": "忽略嚴格的網路安全架構，對這家國際科技公司而言被證明是一個致命的錯誤。"
  },
  {
    "word": "fate",
    "pos": "n.",
    "cn_def": "命運",
    "en_def": "the development of events beyond a person's control, regarded as determined by a supernatural power",
    "sentence": "The tragic film tells a fascinating story of two romantic lovers who were separated by the cruelty of {{BLANK}}.",
    "cn": "這部悲劇電影講述了一個迷人的故事：兩位浪漫的戀人因命運的殘酷而被迫分離。"
  },
  {
    "word": "death toll",
    "pos": "n.",
    "cn_def": "死亡人數",
    "en_def": "the total number of people who are killed in an accident, war, or natural disaster",
    "sentence": "The government organized a thorough investigation to confirm the exact {{BLANK}} after the massive highway accident.",
    "cn": "在這起重大的公路事故發生後，政府組織了一次徹底的調查，以確認確切的死亡人數。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受；承認",
    "en_def": "to consent to receive something, or to agree that something is true",
    "sentence": "The hard-working student was thrilled to {{BLANK}} the scholarship from the prestigious university.",
    "cn": "這位努力的學生高興地接受了這所知名大學的獎金。"
  },
  {
    "word": "acceptance",
    "pos": "n.",
    "cn_def": "接受；接納",
    "en_def": "the action of consenting to receive or undertake something offered",
    "sentence": "Winning the international competition brought him wide {{BLANK}} as a talented modern sculptor.",
    "cn": "贏得國際比賽讓他作為一名才華橫溢的現代雕刻家獲得了廣泛的接納。"
  },
  {
    "word": "acceptable",
    "pos": "adj.",
    "cn_def": "可接受的；受歡迎的",
    "en_def": "considered to be satisfactory or socially allowed in a specific group",
    "sentence": "In the past, it wasn't socially {{BLANK}} for women to wear short skirts in public places.",
    "cn": "在過去，女性在公共場所穿短裙在社交上是不被接受的。"
  },
  {
    "word": "unacceptable",
    "pos": "adj.",
    "cn_def": "無法接受的",
    "en_def": "not acceptable; completely offensive or unsatisfactory",
    "sentence": "Using foul language toward your classmates during school hours is absolutely {{BLANK}}.",
    "cn": "在上課時間對同學使用粗俗語言是絕對無法接受的。"
  },
  {
    "word": "satisfy",
    "pos": "v.",
    "cn_def": "使滿足；使滿意；符合",
    "en_def": "to give someone what they want or need, or to make them feel content",
    "sentence": "The professional chef worked diligently to {{BLANK}} the distinct tastes of all the international guests.",
    "cn": "專業主廚勤奮工作，以滿足所有國際貴賓獨特的口味。"
  },
  {
    "word": "satisfied",
    "pos": "adj.",
    "cn_def": "感到滿意的；滿足的",
    "en_def": "feeling pleased or content because you have got what you wanted or needed",
    "sentence": "The conservative board members were thoroughly {{BLANK}} with the new automated platform's security features.",
    "cn": "保守的董事會成員對全新自動化平台的安全功能感到非常滿意。"
  },
  {
    "word": "be completely satisfied with",
    "pos": "phr.",
    "cn_def": "對...感到滿意",
    "en_def": "to feel content, pleased, or happy with a specific outcome, service, or object",
    "sentence": "You should never {{BLANK}} your current achievements if you want to pursue a higher milestone.",
    "cn": "如果你想追求更高的里程碑，你就絕對不該完全滿足於眼前的成就。"
  },
  {
    "word": "satisfying",
    "pos": "adj.",
    "cn_def": "令人滿意的；帶來滿足感的",
    "en_def": "giving pleasure, fulfillment, or satisfaction because it provides what you need",
    "sentence": "Teaching active adolescents can be a very demanding job, but it is also exceptionally {{BLANK}}.",
    "cn": "教導活潑的青少年可能是一項非常耗費精力的工作，但它同時也極其令人產生滿足感。"
  },
  {
    "word": "satisfactory",
    "pos": "adj.",
    "cn_def": "令人滿意的",
    "en_def": "fulfilling expectations or needs; acceptable though not exceptional",
    "sentence": "The technician gave a {{BLANK}} explanation for why the server room crashed yesterday.",
    "cn": "技術人員對於昨天伺服器房為何癱瘓給出了一個令人滿意的解釋。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意；滿足（名詞）",
    "en_def": "a pleasant feeling of contentment when you have achieved something or got what you wanted",
    "sentence": "The tech firm monitored customer {{BLANK}} thoroughly after launching its newly customized online platform.",
    "cn": "科技公司在推出全新客製化的線上平台後，徹底監測了客戶的滿意度。"
  },
  {
    "word": "to their satisfaction",
    "pos": "phr.",
    "cn_def": "令某人滿意地",
    "en_def": "in a way that makes a choice person feel completely pleased, content, or happy",
    "sentence": "The mechanics repaired the aircraft's engines {{BLANK}} before it was cleared for flight.",
    "cn": "機械師在飛機獲准飛行前，令某人滿意地修復了飛機的發動機。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "詮釋；口譯",
    "en_def": "to explain or understand the meaning of words or artistic evidence",
    "sentence": "Different critics might {{BLANK}} the symbolic meaning of this painting in distinct ways.",
    "cn": "不同的評論家可能會以截然不同的方式來詮釋這幅畫的象徵意義。"
  },
  {
    "word": "interpreter",
    "pos": "n.",
    "cn_def": "口譯員",
    "en_def": "a person whose job is to translate spoken words from one language into another",
    "sentence": "Without a reliable {{BLANK}} to translate the conversation, the trade negotiation would have failed completely.",
    "cn": "如果沒有一位可靠的口譯員來翻譯對話，這場貿易談判早就徹底失敗了。"
  },
  {
    "word": "interpretation",
    "pos": "n.",
    "cn_def": "詮釋；解讀；翻譯",
    "en_def": "an explanation or opinion of the meaning of another person's creative work",
    "sentence": "I'm not sure I agree with your {{BLANK}} of the main character in the classical novel.",
    "cn": "我不確定我是否同意你對這本經典小說中主角的詮釋。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear or easy to understand by describing it in detail",
    "sentence": "The technical engineer tried to {{BLANK}} the complex framework of the automated server to the board members.",
    "cn": "技術工程師試圖向董事會成員詳細解釋自動化伺服器的複雜架構。"
  },
  {
    "word": "explanation",
    "pos": "n.",
    "cn_def": "解釋；說明",
    "en_def": "a statement or account that makes something clear or easier to understand",
    "sentence": "The doctor offered a detailed {{BLANK}} of the complex framework of the upcoming medical treatment.",
    "cn": "醫生對即將進行的醫療程序的複雜架構提供了詳細的說明。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "畫插畫",
    "en_def": "to draw pictures for a book, magazine, or educational material",
    "sentence": "Jake is a talented professional artist who was hired to {{BLANK}} a fascinating new storybook for young children.",
    "cn": "傑克是一位才華橫溢的專業藝術家，被雇來為一本迷人的全新兒童故事書畫插畫。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "解說；闡明",
    "en_def": "to explain or clarify an idea clearly by providing examples, facts, or data",
    "sentence": "The professor used a series of recent market statistics to {{BLANK}} his theory regarding globalization.",
    "cn": "教授使用了一系列的近期市場統計數據，來解說他關於全球化發展的理論。"
  },
  {
    "word": "illustrator",
    "pos": "n.",
    "cn_def": "插畫家",
    "en_def": "a person who draws or creates pictures for books, magazines, or advertisements",
    "sentence": "The successful publisher signed a contract with a famous {{BLANK}} to design the customized cover for the novel.",
    "cn": "成功的出版社與一位著名的插畫家簽署了合約，為這部小說設計客製化的封面。"
  },
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "插圖；插畫",
    "en_def": "a picture, drawing, or diagram inside a book or publication used as decoration or explanation",
    "sentence": "The biology textbook features a detailed {{BLANK}} of the human cell structure for students to study thoroughly.",
    "cn": "這本生物教科書以人類細胞結構的詳細插圖為特色，供學生們徹底研究。"
  },
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "解說；實例說明",
    "en_def": "a story, example, or fact that is used to make a statement or idea clear",
    "sentence": "The manager's presentation served as a perfect {{BLANK}} of how the new strategy can minimize operational costs.",
    "cn": "經理的簡報成為了一個完美的解說，說明了新策略能如何將營運成本降到最低。"
  },
  {
    "word": "offense",
    "pos": "n.",
    "cn_def": "冒犯；得罪",
    "en_def": "a feeling of anger or displeasure caused by an offensive statement or action",
    "sentence": "She didn't mean to cause {{BLANK}} to anyone, but her direct way of speaking was always upsetting people.",
    "cn": "她並不是故意要冒犯任何人，但她直率的說話方式總是讓人生氣。"
  },
  {
    "word": "offensive",
    "pos": "adj.",
    "cn_def": "冒犯的；無禮的",
    "en_def": "causing someone to feel deeply hurt, angry, or insulted",
    "sentence": "The school strictly bans any clothing that features potentially {{BLANK}} language or artistic content.",
    "cn": "學校嚴格禁止任何帶有潛在冒犯性語言或藝術內容的服裝。"
  },
  {
    "word": "offended",
    "pos": "v.",
    "cn_def": "冒犯；觸怒",
    "en_def": "to cause someone to feel deeply hurt or angry by a rude action",
    "sentence": "I am truly sorry if my casual remarks {{BLANK}} your traditional values regarding marriage.",
    "cn": "如果 my 隨口的言論觸犯了您關於婚姻的傳統價值觀，我感到由衷抱歉。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "航程；航向；路線",
    "en_def": "the directional route or direction followed by a ship, aircraft, or storm",
    "sentence": "The captain wisely altered the ship's {{BLANK}} to avoid the dangerous storm approaching the regional coast.",
    "cn": "船長明智地改變了船隻的航程，以避開正在接近該地區海岸的危險暴風雨。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a series of systematic lectures or lessons in a particular academic subject",
    "sentence": "The university offers an intensive introductory {{BLANK}} for students who want to study globalization frameworks.",
    "cn": "這所大學為想要研究全球化架構的學生提供了一門密集的入門課程。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "一道菜",
    "en_def": "a distinct part of a meal served at one time, such as an appetizer or dessert",
    "sentence": "The gourmet dinner featured a magnificent three-{{BLANK}} meal paired with the finest international wines.",
    "cn": "這頓精緻的晚餐以豐盛的三道菜為特色，並搭配了頂級的國際美酒。"
  },
  {
    "word": "of course",
    "pos": "phr.",
    "cn_def": "當然",
    "en_def": "used to give a positive declaration or emphasize that something is completely true",
    "sentence": "If you complete your daily homework thoroughly, you will {{BLANK}} pass the academic examination easily.",
    "cn": "如果你徹底完成了每天的家庭作業，你當然能輕鬆通過這場學術考試。"
  },
  {
    "word": "coarse",
    "pos": "adj.",
    "cn_def": "粗糙的；粗俗的",
    "en_def": "rough or loose in texture or grain; rude or offensive in behavior",
    "sentence": "After years of living at the wild beach, Pete's skin had turned {{BLANK}} and brown.",
    "cn": "在荒野海灘生活多年後，皮特的皮膚變得粗糙且黝黑。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "粗糙的；粗略的",
    "en_def": "having an uneven or irregular surface; not smooth or gentle",
    "sentence": "The innovative sculptor prefers using {{BLANK}} marble because it gives the artwork a unique texture.",
    "cn": "這位創新的雕刻家更喜歡使用粗糙的大理石，因為它能賦予藝術品獨特的質感。"
  },
  {
    "word": "rough plan",
    "pos": "n.",
    "cn_def": "粗略的計劃；初步方案",
    "en_def": "a basic, preliminary layout or outline that is not yet completely detailed",
    "sentence": "The architect drafted a {{BLANK}} for the new school library before presenting the detailed blueprints.",
    "cn": "建築師在展示詳細藍圖之前，先為新的學校圖書館起草了一個初步方案。"
  },
  {
    "word": "rough idea",
    "pos": "n.",
    "cn_def": "粗略的想法；大概的概念",
    "en_def": "a general understanding or vague conception of a fact or situation",
    "sentence": "I only have a {{BLANK}} of how the complex database operates, so I need a detailed technical explanation.",
    "cn": "我對這個複雜的資料庫如何運作只有一個大概的概念，因此我需要詳細的技術說明。"
  },
  {
    "word": "roughly",
    "pos": "adv.",
    "cn_def": "大約地；粗略地",
    "en_def": "approximately; nearly but not completely exact in numbers or details",
    "sentence": "The international corporation spends {{BLANK}} fifty thousand US dollars every month on maintaining cyber security.",
    "cn": "這家國際公司每個月花費大約五萬美元來維護網路安全。"
  },
  {
    "word": "approximately",
    "pos": "adv.",
    "cn_def": "大約；大概",
    "en_def": "close to a particular number, measurement, or time, but not completely exact",
    "sentence": "The regional fresh vegetable market is located {{BLANK}} 23.7 kilometers from the central station.",
    "cn": "這個地區的新鮮蔬菜市場距離中央車站大約二十三點七公里。"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "cn_def": "艱難的；堅韌的；強硬的",
    "en_def": "difficult to deal with, severe, or physically strong and durable",
    "sentence": "Facing a sudden fiscal crisis was a {{BLANK}} challenge for the engineering firm's executive board members.",
    "cn": "面對突如其來的財政危機，對這家工程公司的執行董事會成員來說是一個艱難的挑戰。"
  },
  {
    "word": "have a tough time",
    "pos": "phr.",
    "cn_def": "經歷艱難的時光；過得很辛苦",
    "en_def": "to experience great difficulty, distress, or discomfort while performing a task",
    "sentence": "Many low-income wage earners {{BLANK}} coping with the rising inflation rate in big cities.",
    "cn": "許多低收入的工薪階層在應對大城市中不斷上升的通膨率時，日子過得很辛苦。"
  },
  {
    "word": "tough opponent",
    "pos": "n.",
    "cn_def": "強勁的對手",
    "en_def": "a highly skilled, strong, or competitive rival who is difficult to defeat",
    "sentence": "The national basketball team faced a {{BLANK}} in the final match, which made the game exceptionally intense.",
    "cn": "國家籃球隊在決賽中面對了一位強勁的對手，這讓比賽變得格外激烈。"
  },
  {
    "word": "tough question",
    "pos": "n.",
    "cn_def": "棘手的問題；難題",
    "en_def": "a highly complex problem or inquiry that requires deep thought to answer correctly",
    "sentence": "The political journalist asked the prime minister a {{BLANK}} regarding the controversial minimum wage law.",
    "cn": "這位政治記者向首相提出了一個關於具爭議性最低工資法案的棘手問題。"
  },
  {
    "word": "political",
    "pos": "adj.",
    "cn_def": "政治的",
    "en_def": "relating to the government, public affairs, or the state of a nation",
    "sentence": "The president clarified his position on {{BLANK}} reform during his live televised speech last night.",
    "cn": "總統在昨晚的電視直播演講中，闡明了他在政治改革上的立場。"
  },
  {
    "word": "politically",
    "pos": "adv.",
    "cn_def": "政治上地",
    "en_def": "in a way that relates to the government or public affairs of a nation",
    "sentence": "The conservative politician took a {{BLANK}} cautious approach to the controversial minimum wage law.",
    "cn": "這位保守的政治家對這項具爭議性的最低工資法案採取了在政治上較為謹慎的做法。"
  },
  {
    "word": "politics",
    "pos": "n.",
    "cn_def": "政治；政治學",
    "en_def": "the activities associated with the governance of a country or area",
    "sentence": "The young scholar decided to pursue a career in {{BLANK}} after graduating from law school.",
    "cn": "這位年輕的學者在法學院畢業後決定從事政治生涯。"
  },
  {
    "word": "politicians",
    "pos": "n.",
    "cn_def": "政治家；政客",
    "en_def": "a person who is professionally involved in politics, especially as an elected official",
    "sentence": "Wise {{BLANK}} should pay much more attention to essential environmental issues like pollution.",
    "cn": "明智的政治家應該更加關注污染等至關重要的環境議題。"
  },
  {
    "word": "political figure",
    "pos": "n.",
    "cn_def": "政治人物",
    "en_def": "a person who is well-known and influential in the arena of government and public affairs",
    "sentence": "The prime minister is a prominent {{BLANK}} who routinely gives live televised speeches to clarify tax laws.",
    "cn": "首相是一位著名的政治人物，他通常會透過電視直播演講來闡明稅法。"
  },
  {
    "word": "celebrity",
    "pos": "n.",
    "cn_def": "名人；明星",
    "en_def": "a famous person, especially in the entertainment, sports, or movie industry",
    "sentence": "The grand opening of the new luxury hotel attracted many a Hollywood {{BLANK}} and wealthy executive yesterday.",
    "cn": "昨天這家新豪華飯店的盛大開幕吸引了許多好萊塢名人與富有高階主管的參與。"
  },
  {
    "word": "celebrated",
    "pos": "adj.",
    "cn_def": "著名的；馳名的",
    "en_def": "famous, well-known, and highly praised for outstanding skills or achievements",
    "sentence": "The historic art gallery displays several unique masterpieces painted by the most {{BLANK}} French impressionists.",
    "cn": "這家歷史悠久的藝廊展示了幾幅由最著名的法國印象派畫家所創作的獨特傑作。"
  },
  {
    "word": "internet celebrity",
    "pos": "n.",
    "cn_def": "網路紅人（網紅）",
    "en_def": "a person who has become famous online, typically through videos or blogs",
    "sentence": "The creative teenager became an {{BLANK}} overnight after his customized gaming video went viral on the web.",
    "cn": "這位富有創意的青少年在自主設計的遊戲影片於網路上爆紅後，一夜之間成為了網路紅人。"
  },
  {
    "word": "social media influencer",
    "pos": "n.",
    "cn_def": "社群媒體網紅/影響者",
    "en_def": "a person with the ability to influence potential buyers of a product by promoting items on social media",
    "sentence": "The tech manufacturer signed a dynamic contract with a popular {{BLANK}} to advertise its new customizable smartphone.",
    "cn": "這家科技製造商與一位受歡迎的社群媒體網紅簽署了活力合約，以宣傳其新款客製化智慧型手機。"
  },
  {
    "word": "handicapped",
    "pos": "adj.",
    "cn_def": "殘障的；有障礙的",
    "en_def": "having a physical or mental condition that limits some regular movements",
    "sentence": "Andy is installing a concrete ramp so that {{BLANK}} customers can easily access his retail shop.",
    "cn": "安迪正在安裝一個混凝土坡道，以便有障礙的顧客可以輕鬆進入他的零售店。"
  },
  {
    "word": "disabled",
    "pos": "adj.",
    "cn_def": "殘障的；有身心障礙的",
    "en_def": "having a physical or mental condition that limits a person's movements, senses, or activities",
    "sentence": "The city council customized the public transportation framework to make it more accessible for {{BLANK}} citizens.",
    "cn": "市議會客製化了公共交通架構，使其更便於有身心障礙的市民使用。"
  },
  {
    "word": "aspect",
    "pos": "n.",
    "cn_def": "面向；方面",
    "en_def": "a particular part, feature, or characteristic of a complex matter",
    "sentence": "Talking to different customers politely is an important {{BLANK}} of a professional salesperson's job.",
    "cn": "禮貌地與不同的客戶交談是專業銷售人員工作中的一個重要面向。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點；視角；想法",
    "en_def": "a particular way of considering something; a point of view or mental outlook",
    "sentence": "Traveling to different countries can provide citizens with a completely new {{BLANK}} on global economic frameworks.",
    "cn": "到不同的國家旅遊可以為國民提供一個看待全球經濟架構的全新視角。"
  },
  {
    "word": "prospect",
    "pos": "n.",
    "cn_def": "前景；展望；可能性",
    "en_def": "the possibility or likelihood of some future event occurring successfully",
    "sentence": "The tech firm's excellent financial results significantly improved its {{BLANK}} of capturing a larger slice of the market.",
    "cn": "這家科技公司優異的財務業績，顯著提升了其獲取更大市場份額的可能性。"
  },
  {
    "word": "prospective",
    "pos": "adj.",
    "cn_def": "預期的；潛在的；未來的",
    "en_def": "expected or likely to happen in the future, or being a potential customer or student",
    "sentence": "The university organized a campus tour to welcome {{BLANK}} students and clarify its academic course requirements.",
    "cn": "這所大學組織了一次校園參觀，以歡迎潛在的學生並闡明其學術課程要求。"
  },
  {
    "word": "prospective customer",
    "pos": "n.",
    "cn_def": "潛在客戶",
    "en_def": "a person who is likely to buy a company's products or services in the near future",
    "sentence": "The experienced sales team sent customized email brochures to every {{BLANK}} to advertise the new software framework.",
    "cn": "經驗豐富的銷售團隊向每位潛在客戶發送了客製化的電子小冊子，以宣傳新的軟體架構。"
  },
  {
    "word": "target audience",
    "pos": "n.",
    "cn_def": "目標受眾；目標群體",
    "en_def": "the specific group of consumers most likely to want a company's product or service",
    "sentence": "The tech manufacturer designed its innovative ad campaign specifically to attract an adolescent {{BLANK}}.",
    "cn": "這家科技製造商特別設計了其創新的廣告活動，以吸引青少年的目標受眾。"
  },
  {
    "word": "appeared",
    "pos": "v.",
    "cn_def": "出現",
    "en_def": "to become visible; to come into sight or exist in a specific place",
    "sentence": "A rare ancient statue suddenly {{BLANK}} inside the dark cave, which left the research staff completely speechless.",
    "cn": "一尊罕見的古代雕像突然出現在黑暗的洞穴中，讓研究人員完全說不出話來。"
  },
  {
    "word": "appear",
    "pos": "v.",
    "cn_def": "似乎；好像",
    "en_def": "to give a choice impression of being significant; to seem to be true",
    "sentence": "The conservative board members {{BLANK}} to be thoroughly satisfied with the new automated platform's safety features.",
    "cn": "保守的董事會成員似乎對全新自動化平台的安全功能感到非常滿意。"
  },
  {
    "word": "appearance",
    "pos": "n.",
    "cn_def": "外表；外觀",
    "en_def": "the way that someone or something looks on the outside to others",
    "sentence": "Although she felt anxious before the recital, her outward {{BLANK}} was completely calm.",
    "cn": "儘管在獨奏會之前她感到焦慮，但她的外表看起來完全是平靜的。"
  },
  {
    "word": "disappear",
    "pos": "v.",
    "cn_def": "消失",
    "en_def": "to vanish from sight; to stop existing or being group available",
    "sentence": "Many traditional species will slowly {{BLANK}} from the regional forest if we do not enforce environmental protection laws.",
    "cn": "如果我們不執行環境保護法，許多傳統物種將會慢慢從該地區的森林中消失。"
  },
  {
    "word": "disappearance",
    "pos": "n.",
    "cn_def": "消失（名詞）",
    "en_def": "an unexpected event in which someone or something vanishes completely",
    "sentence": "Police investigators conducted a thorough study to solve the mysterious {{BLANK}} of the wealthy business executive.",
    "cn": "警方調查人員展開了一項徹底的研究，以解決這位富有企業高階主管的神秘失蹤案。"
  },
  {
    "word": "disgusted",
    "pos": "adj.",
    "cn_def": "感到噁心的；反感的",
    "en_def": "feeling strong disapproval, dislike, or nausea toward an offensive situation",
    "sentence": "Veronica was deeply {{BLANK}} with her classmate's nasty attitude and foul language during the seminar.",
    "cn": "維安妮卡對她同學在研討會期間惡劣的態度和粗俗的語言感到由衷反感。"
  },
  {
    "word": "disgusting",
    "pos": "adj.",
    "cn_def": "令人噁心的；糟糕的",
    "en_def": "extremely unpleasant, unacceptable, or offensive, causing strong dislike",
    "sentence": "Leaving a heap of dirty dishes in the kitchen sink for a week is absolutely {{BLANK}}.",
    "cn": "把一堆髒碗盤在廚房水槽裡放一個星期絕對是令人噁心的行為。"
  },
  {
    "word": "nasty",
    "pos": "adj.",
    "cn_def": "惡劣的；差勁的；下流的",
    "en_def": "highly unpleasant, offensive, or unkind in general behavior",
    "sentence": "Veronica's {{BLANK}} attitude and rude language usually made her traditional teachers quite upset.",
    "cn": "維安妮卡惡劣的態度和粗俗的語言通常會讓她傳統的老師們相當生氣。"
  },
  {
    "word": "please",
    "pos": "v.",
    "cn_def": "使高興；使滿意；取悅",
    "en_def": "to make someone feel happy, content, or thoroughly satisfied",
    "sentence": "The dedicated intern worked hard around the clock to {{BLANK}} the conservative manager and secure a permanent position.",
    "cn": "這位熱忱的實習生全天候地努力工作，以取悅保守的經理並獲得一份固定的永久職位。"
  },
  {
    "word": "pleased",
    "pos": "adj.",
    "cn_def": "感到高興的；滿意的",
    "en_def": "feeling happy, content, or satisfied with a specific situation or outcome",
    "sentence": "The board members were highly {{BLANK}} with the new automated platform because it successfully minimized data security risks.",
    "cn": "董事會成員對全新的自動化平台感到非常滿意，因為它成功地將資料安全風險降到最低。"
  },
  {
    "word": "delighted",
    "pos": "adj.",
    "cn_def": "感到欣喜的；非常高興的",
    "en_def": "exceptionally pleased or happy about a specific event, outcome, or piece of news",
    "sentence": "The talented illustrator was completely {{BLANK}} when the successful publisher signed a contract for her new customizable storybook.",
    "cn": "當成功的出版社為其全新的客製化故事書簽署合約時，這位才華橫溢的專業插畫家感到極其欣喜。"
  },
  {
    "word": "pleasant",
    "pos": "adj.",
    "cn_def": "令人愉快的；舒適的",
    "en_def": "giving a sense of happy satisfaction, enjoyment, or comfort",
    "sentence": "The family bakery was filled with the {{BLANK}} scent of freshly baked chocolate cakes.",
    "cn": "這家家族麵包店裡充滿了新鮮烘焙的巧克力蛋糕所散發出的怡人香氣。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "樂趣；喜悅；榮幸",
    "en_def": "a feeling of happy satisfaction, enjoyment, or contentment",
    "sentence": "It is a great {{BLANK}} to welcome the celebrated French impressionist to our historic art gallery tonight.",
    "cn": "今晚非常榮幸能歡迎這位著名的法國印象派畫家來到我們歷史悠久的藝廊。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "the continuous force weight applied against an object; mental stress or urgency",
    "sentence": "The supportive psychologist helped the intern analyze the intense {{BLANK}} she felt before the corporate presentation.",
    "cn": "给予支持的心理學家幫助實習生分析了她在公司簡報前所感受到的強烈壓力。"
  },
  {
    "word": "peer pressure",
    "pos": "n.",
    "cn_def": "同儕壓力",
    "en_def": "strong influence from members of one's matching peer group to behave in a specific way",
    "sentence": "Active adolescents can be highly susceptible to {{BLANK}}, which heavily shapes their behavioral routines and choices.",
    "cn": "活潑的青少年很容易受到同儕壓力的影響，這在很大程度上形塑了他們的行為常規與選擇。"
  },
  {
    "word": "press",
    "pos": "v.",
    "cn_def": "按；壓；逼迫",
    "en_def": "to push something firmly; to forcefully repetitive try to persuade someone to do an action",
    "sentence": "You should {{BLANK}} the automated safety button immediately if the computer server room encounters a technical accident.",
    "cn": "如果電腦伺服器房遭遇技術故障，您應該立刻按下自動安全按鈕。"
  },
  {
    "word": "press",
    "pos": "n.",
    "cn_def": "媒體；新聞界",
    "en_def": "newspapers, magazines, and news journalists blocks viewed as a single group",
    "sentence": "The prime minister routinely gives live televised speeches to clarify new tax regulations to the local {{BLANK}}.",
    "cn": "首相通常會透過電視直播演講來向當地媒體闡明新的稅收法規。"
  },
  {
    "word": "hateful",
    "pos": "adj.",
    "cn_def": "充滿恨意的；可惡的",
    "en_def": "expressing severe hatred, malice, or strong disapproval",
    "sentence": "The aggressive bully sent {{BLANK}} messages to his classmates through social media platforms.",
    "cn": "這名具攻擊性的惡霸透過社群媒體平台向他的同學發送了充滿恨意的訊息。"
  },
  {
    "word": "mocked",
    "pos": "v.",
    "cn_def": "嘲笑；嘲弄",
    "en_def": "to tease or laugh at someone in a cruel or unkind manner",
    "sentence": "Jan's classmates {{BLANK}} her new customized hairstyle, saying it looked strange and abnormal.",
    "cn": "簡的同學嘲笑她最新訂製的髮型，說這看起來很奇怪且異常。"
  },
  {
    "word": "mock",
    "pos": "adj.",
    "cn_def": "模擬的；假裝的",
    "en_def": "not authentic or real, but manufactured to look like the real object for practice",
    "sentence": "The high school students held a {{BLANK}} trial in their social studies class yesterday morning.",
    "cn": "高中生們昨天早上在他們的社會研究課上舉行了一場模擬審判。"
  },
  {
    "word": "mockery",
    "pos": "n.",
    "cn_def": "嘲笑；嘲弄；愚弄",
    "en_def": "cruel or unkind behavior or language that makes fun of someone or something",
    "sentence": "The aggressive bully's constant {{BLANK}} of his classmate's customized haircut deeply hurt the boy's feelings.",
    "cn": "這名具攻擊性的惡霸對他同學訂製髮型的持續嘲笑，深深傷害了那個男孩的感情。"
  },
  {
    "word": "mock test",
    "pos": "n.",
    "cn_def": "模擬測驗；模擬考",
    "en_def": "a preliminary examination taken for practice before a critical official exam",
    "sentence": "Diligent students should take a {{BLANK}} routinely to evaluate their progress before the actual SAT exam.",
    "cn": "努力的學生通常應該定期參加模擬測驗，以便在實際的 SAT 考試前評估自己的進度。"
  },
  {
    "word": "simulation",
    "pos": "n.",
    "cn_def": "模擬；情境模擬",
    "en_def": "the technique of duplicating the behavior of a real-world process or situation for practice",
    "sentence": "The tech manufacturer used an automated computer {{BLANK}} to monitor how the software framework reacts under extreme pressure.",
    "cn": "科技製造商使用自動化的電腦模擬，來監測軟體架構在極大壓力下的反應。"
  },
  {
    "word": "simulated",
    "pos": "adj.",
    "cn_def": "模擬的；仿效的",
    "en_def": "manufactured to look, feel, or behave like the real object for training or practice",
    "sentence": "The flight academy provides a {{BLANK}} environment where prospective pilots can practice landing during severe storms safely.",
    "cn": "飛行學院提供了一個模擬的環境，讓未來的飛行員可以安全地練習在強烈暴風雨中降落。"
  },
  {
    "word": "ridicule",
    "pos": "n.",
    "cn_def": "嘲弄；挖苦",
    "en_def": "the subjection of someone or something to contemptuous and dismissive language",
    "sentence": "The young artist's innovative sculptures faced severe {{BLANK}} from conservative critics.",
    "cn": "這位年輕藝術家的創新雕塑面臨著保守評論家的嚴重挖苦。"
  },
  {
    "word": "ridiculous",
    "pos": "adj.",
    "cn_def": "荒謬的；可笑的",
    "en_def": "deserving or inviting derision or mockery; completely absurd or unreasonable",
    "sentence": "It is absolutely {{BLANK}} to expect our understaffed team to complete the complex software framework in just two days.",
    "cn": "要求我們人手不足的團隊在短短兩天內完成複雜的軟體架構，這完全是荒謬的。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "種族",
    "en_def": "a group of people sharing the same culture, history, language, or physical ethnicity",
    "sentence": "The international human rights organization works diligently to eliminate discrimination based on {{BLANK}} or religion worldwide.",
    "cn": "國際人權組織勤奮工作，以消除全球範圍內基於種族或宗教的歧視。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "比賽",
    "en_def": "a competition of high speed; a group of people sharing a distinctive cultural heritage",
    "sentence": "Jason had the fastest time on the track team for the 100-meter sprint {{BLANK}}.",
    "cn": "傑森在田徑隊的一百公尺短跑比賽中擁有最快的紀錄。"
  },
  {
    "word": "racial",
    "pos": "adj.",
    "cn_def": "種族的",
    "en_def": "relating to a shared background, ethnicity, or genetic heritage",
    "sentence": "The national government guaranteed {{BLANK}} equality and human rights for all citizen groups.",
    "cn": "國家政府保證了所有公民群體的種族平等與人權。"
  },
  {
    "word": "racial discrimination",
    "pos": "n.",
    "cn_def": "種族歧視",
    "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
    "sentence": "The passage of the civil rights law made {{BLANK}} completely illegal in the United States.",
    "cn": "民權法的通過使得種族歧視在美國完全成為非法行為。"
  },
  {
    "word": "racially",
    "pos": "adv.",
    "cn_def": "在種族上",
    "en_def": "in a way that relates to shared background, ethnicity, or genetic heritage",
    "sentence": "The urban neighborhood is {{BLANK}} diverse, featuring families from many distinct countries.",
    "cn": "這個城市街區在種族上是多元的，居住著來自許多不同國家的家庭。"
  },
  {
    "word": "racism",
    "pos": "n.",
    "cn_def": "種族主義",
    "en_def": "prejudice, discrimination, or antagonism directed against someone of a different race",
    "sentence": "Many social organizations are launched to combat {{BLANK}} and promote cultural tolerance.",
    "cn": "許多社會組織的成立是為了與種族主義作鬥爭並促進文化包容力。"
  },
  {
    "word": "insulted",
    "pos": "v.",
    "cn_def": "侮辱；羞辱",
    "en_def": "to speak to or treat someone with disrespect or offensive language",
    "sentence": "Leroy {{BLANK}} Jessica by telling her that she has terrible taste in designer clothing.",
    "cn": "勒羅伊羞辱了傑西卡，告訴她她在設計師服裝方面的品味很差。"
  },
  {
    "word": "insult",
    "pos": "n.",
    "cn_def": "侮辱；無禮的話",
    "en_def": "a disrespectful or highly offensive remark or action that causes hurt feelings",
    "sentence": "Sam often takes his colleagues' constructive criticism as a personal {{BLANK}} and becomes upset.",
    "cn": "薩姆經常把同事建設性的批評視為個人侮辱，並因此感到不快。"
  },
  {
    "word": "add insult to injury",
    "pos": "phr.",
    "cn_def": "雪上加霜；傷口上灑鹽",
    "en_def": "to make a bad situation even worse by performing another offensive action",
    "sentence": "Her boss gave her more work, and to {{BLANK}}, he lowered her monthly salary.",
    "cn": "她的老闆給了她更多工作，而且雪上加霜的是，他還降低了她的月薪。"
  },
  {
    "word": "insulting",
    "pos": "adj.",
    "cn_def": "侮辱人的；無禮的",
    "en_def": "disrespectful or scornful deeply; causing a person to feel humiliated or degraded",
    "sentence": "The aggressive bully made several {{BLANK}} remarks about his classmate's customized haircut during the dynamic seminar.",
    "cn": "這名具攻擊性的惡霸在充滿活力的研討會期間，對他同學訂製的髮型發表了幾句侮辱人的言論。"
  },
  {
    "word": "offensive",
    "pos": "adj.",
    "cn_def": "冒犯的；得罪人的",
    "en_def": "causing someone to feel deeply hurt, upset, or angry due to a lack of morality",
    "sentence": "The private technology firm removed the controversial video advertisement because many potential customers found it highly {{BLANK}}.",
    "cn": "這家私人科技公司下架了具爭議性的影片廣告，因為許多潛在客戶覺得它非常具有冒犯性。"
  },
  {
    "word": "disrespectful",
    "pos": "adj.",
    "cn_def": "不敬的；無禮的",
    "en_def": "showing a distinct lack of respect, courtesy, or politeness toward someone or something",
    "sentence": "Leaving the international conference room while the celebrated researcher was delivering his presentation was viewed as highly {{BLANK}}.",
    "cn": "在著名的研究人員正在進行簡報時離開國際會議室，被視為是非常不敬的行為。"
  },
  {
    "word": "abuse",
    "pos": "n.",
    "cn_def": "虐待；辱罵",
    "en_def": "cruel, violent, or highly offensive treatment of a person or animal",
    "sentence": "The non-profit foundation works hard to protect domestic livestock from any severe {{BLANK}}.",
    "cn": "這家非營利基金會努力工作，以保護當地的家畜免受任何嚴重的虐待。"
  },
  {
    "word": "compliment",
    "pos": "n.",
    "cn_def": "稱讚；恭維",
    "en_def": "a polite expression of praise, admiration, or respect",
    "sentence": "The professional chef received a beautiful {{BLANK}} from the guests regarding his traditional cuisine.",
    "cn": "這位專業主廚收到了貴賓們對於他的傳統料理所給予的美好稱讚。"
  },
  {
    "word": "chairman",
    "pos": "n.",
    "cn_def": "主席",
    "en_def": "a person chosen to conduct and direct the proceedings of an official meeting",
    "sentence": "The dedicated {{BLANK}} began the corporate board meeting precisely on time yesterday afternoon.",
    "cn": "這位熱忱的主席在昨天下午準時開始了公司的董事會會議。"
  },
  {
    "word": "gender",
    "pos": "n.",
    "cn_def": "性別",
    "en_def": "the state of being male or female, typically expressed in relation to social structures",
    "sentence": "The job advertisement states that the tech company does not discriminate based on {{BLANK}}.",
    "cn": "這則招聘廣告指出，該科技公司不會根據性別進行歧視。"
  },
  {
    "word": "meaning",
    "pos": "n.",
    "cn_def": "意義；含義",
    "en_def": "what is intended to be expressed or understood by something",
    "sentence": "The scholar spent hours analyzing the precise {{BLANK}} of the ancient symbols in the temple.",
    "cn": "學者花了好幾個小時分析這座寺廟中古代符號的精準含義。"
  },
  {
    "word": "meaningful",
    "pos": "adj.",
    "cn_def": "有意義的；深遠的",
    "en_def": "having a serious, important, or useful quality or purpose; filled with significance",
    "sentence": "Participating in the financial investment summer camp provided the ambitious students with a highly {{BLANK}} experience.",
    "cn": "參與這場財務投資夏令營，為這些野心勃勃的學生們提供了一次高度有意義的經驗。"
  },
  {
    "word": "meaningless",
    "pos": "adj.",
    "cn_def": "毫無意義的",
    "en_def": "having no meaning, purpose, or real value; completely useless",
    "sentence": "Without a clear framework, collecting a large amount of raw data is completely {{BLANK}}.",
    "cn": "如果沒有一個清晰的框架，收集大量的原始數據是毫無意義的。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；言論；說話能力",
    "en_def": "a formal address or discourse delivered to an audience; the faculty of expressing thoughts",
    "sentence": "The politician gave an exceptional {{BLANK}} to clarify his position on the new tax regulations.",
    "cn": "這位政治家發表了一場精彩的演講，以闡明他在新稅收法規上的立場。"
  },
  {
    "word": "speechless",
    "pos": "adj.",
    "cn_def": "說不出話的",
    "en_def": "unable to speak temporarily due to great surprise, anger, or strong emotion",
    "sentence": "The innovative masterpiece painted by the young artist left the traditional critics completely {{BLANK}}.",
    "cn": "這位年輕藝術家所創作的創新傑作讓傳統評論家完全說不出話來。"
  },
  {
    "word": "thought",
    "pos": "n.",
    "cn_def": "想法；思想",
    "en_def": "an idea, opinion, or product of mental thinking present in the mind",
    "sentence": "The creative author wrote down every interesting {{BLANK}} that floated around in his consciousness.",
    "cn": "這位富有創意的作者寫下了在他意識中漂浮的每個有趣想法。"
  },
  {
    "word": "thoughtful",
    "pos": "adj.",
    "cn_def": "體貼的；深思熟慮的",
    "en_def": "showing consideration for the needs of other people, or showing careful deep thought",
    "sentence": "The supportive coordinator sent a {{BLANK}} gift to the understaffed engineering team to appreciate their hard work.",
    "cn": "這位給予支持的協調員向人手不足的工程團隊送了一份體貼的禮物，以感謝他們的辛勤工作。"
  },
  {
    "word": "thoughtless",
    "pos": "adj.",
    "cn_def": "粗心的；輕率的；不顧及他人的",
    "en_def": "showing a lack of care or consideration for other people's feelings",
    "sentence": "Leaving your wet boots in the narrow hallway was a {{BLANK}} action that almost caused an accident.",
    "cn": "把你的濕靴子留在狹窄的走廊裡是一種輕率的行為，差點引發了事故。"
  },
  {
    "word": "worth",
    "pos": "n.",
    "cn_def": "價值",
    "en_def": "the value or central importance of a person, object, or system",
    "sentence": "The collector carefully calculated the true monetary {{BLANK}} of the rare foreign coins.",
    "cn": "收藏家仔細計算了那些罕見外國錢幣的真正貨幣價值。"
  },
  {
    "word": "worth",
    "pos": "phr.",
    "cn_def": "值得...的（後接動名詞）",
    "en_def": "deserving to be treated or considered in a specific way due to its high value or importance",
    "sentence": "This unique historical cathedral is definitely {{BLANK}} visiting thoroughly if you travel to the regional zone.",
    "cn": "如果你前往該地區旅遊，這座獨特的歷史大教堂絕對非常值得徹底參觀。"
  },
  {
    "word": "worthy of",
    "pos": "adj phr.",
    "cn_def": "值得...的；配得上...的",
    "en_def": "deserving effort, attention, or respect based on specific qualities or standards",
    "sentence": "The innovative technology platform's strict data security framework is truly {{BLANK}} high praise from global investors.",
    "cn": "這款創新科技平台嚴格的資料安全架構，確實非常值得全球投資人的高度讚賞。"
  },
  {
    "word": "worthless",
    "pos": "adj.",
    "cn_def": "毫無價值的",
    "en_def": "having no financial value or practical use; completely useless",
    "sentence": "The old television monitor was deemed {{BLANK}} because its screen was thoroughly broken.",
    "cn": "這台舊電視顯示器被認為是毫無價值的，因為它的螢幕已經徹底損壞了。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發行",
    "en_def": "to officially prepare and issue a book, journal, or piece of music for public sale",
    "sentence": "The university press plans to {{BLANK}} a scholarly article regarding the industrial revolution next semester.",
    "cn": "大學出版社計劃在下學期發表一篇關於工業革命的學術文章。"
  },
  {
    "word": "publisher",
    "pos": "n.",
    "cn_def": "出版社；發行商",
    "en_def": "a person or company that prepares and issues books or journals for sale",
    "sentence": "The successful author signed a new contract with a major international {{BLANK}} yesterday morning.",
    "cn": "這位成功的作家昨天早上與一家重要的大型國際出版社簽署了一份新合約。"
  },
  {
    "word": "publications",
    "pos": "n.",
    "cn_def": "出版物；發行",
    "en_def": "the act of publishing a book or magazine, or the approved copy itself",
    "sentence": "Our magazine company puts out two to three high-quality {{BLANK}} per month for readers.",
    "cn": "我們雜誌社每個月為讀者推出兩到三本高品質的出版物。"
  },
  {
    "word": "publishing",
    "pos": "n.",
    "cn_def": "出版業",
    "en_def": "the business or profession of issuing printed materials or digital software",
    "sentence": "After graduating with a degree in literature, she got an exceptional job in {{BLANK}}.",
    "cn": "在獲得文學學位畢業後，她在出版業找到了一份極好的工作。"
  },
  {
    "word": "feminine",
    "pos": "adj.",
    "cn_def": "女性的；女性化的",
    "en_def": "having qualities or features traditionally associated with women",
    "sentence": "Many fashion people say that light pink is a very {{BLANK}} color choice for summer dresses.",
    "cn": "許多時尚界人士表示，淺粉色是夏季連身裙中非常女性化的顏色選擇。"
  },
  {
    "word": "masculine",
    "pos": "adj.",
    "cn_def": "男性的；男性化的",
    "en_def": "having qualities or features traditionally associated with men",
    "sentence": "The historic gym features architectural elements that give the building a bold, {{BLANK}} look.",
    "cn": "這座歷史悠久的健身房以建築元素為特色，賦予這棟建築大膽、男性化的外觀。"
  },
  {
    "word": "feminism",
    "pos": "n.",
    "cn_def": "女性主義",
    "en_def": "the advocacy of women's rights on the basis of the equality of the sexes",
    "sentence": "The university course analyzed the social impact of modern {{BLANK}} on political reform movements.",
    "cn": "這門大學課程分析了現代女性主義對政治改革運動的社會影響。"
  },
  {
    "word": "feminist",
    "pos": "n.",
    "cn_def": "女性主義者",
    "en_def": "a person who supports the advocacy of women's rights and equality",
    "sentence": "The dedicated {{BLANK}} organized a peaceful protest rally to demand equal pay regulations for women.",
    "cn": "這位熱忱的女性主義者組織了一場和平抗議集會，要求制定女性平等薪資的法規。"
  },
  {
    "word": "generations",
    "pos": "n.",
    "cn_def": "世代",
    "en_def": "all of the people born and living at about the same time within a family or society",
    "sentence": "Colin's family has lived securely in this agricultural village for six consecutive {{BLANK}}.",
    "cn": "科林的家族已在這座農業村莊裡安全地連續居住了六個世代。"
  },
  {
    "word": "from generation to generation",
    "pos": "phr.",
    "cn_def": "代代相傳",
    "en_def": "passed down through time from traditional parents to their children",
    "sentence": "This family farm was passed down {{BLANK}} in my family since 1895.",
    "cn": "這座家族農場自 1895 年以來在我們家族中代代相傳。"
  },
  {
    "word": "generate",
    "pos": "v.",
    "cn_def": "產生；發電；造成",
    "en_def": "to cause a status or emotion to arise, or to produce energy or cash",
    "sentence": "The innovative technology manufacturer uses solar power to {{BLANK}} clean electricity for the factory.",
    "cn": "這家創新的科技製造商利用太陽能為工廠產生乾淨的電力。"
  },
  {
    "word": "regeneration",
    "pos": "n.",
    "cn_def": "再生；復興",
    "en_def": "the process of renewing, restoring, or regrowing damaged structures or communities",
    "sentence": "The city center is experiencing a cultural {{BLANK}} after the opening of the art gallery.",
    "cn": "在藝術畫廊開幕後，市中心正經歷著一場文化復興。"
  },
  {
    "word": "prior",
    "pos": "adj.",
    "cn_def": "先前的；事前的",
    "en_def": "existing or coming before in time, order, or central importance",
    "sentence": "We were given absolutely no {{BLANK}} notice that the important board meeting time would be changed.",
    "cn": "我們完全沒有收到任何關於重要董事會會議時間將被更改的事前通知。"
  },
  {
    "word": "prior to",
    "pos": "phr.",
    "cn_def": "在...之前",
    "en_def": "happening or existing before a specific time, date, or event",
    "sentence": "The strict teacher asked the students if they had any questions {{BLANK}} the academic exam.",
    "cn": "這位嚴格的老師在學術考試之前詢問學生是否有任何問題。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項",
    "en_def": "the status of being established as most important on a list of goals",
    "sentence": "For the present moment, your first {{BLANK}} is to finish your daily homework notes thoroughly.",
    "cn": "對於目前而言，你的首要優先事項是徹底完成你每天的家庭作業筆記。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數",
    "en_def": "the greater number or part of a specific group, more than half",
    "sentence": "The {{BLANK}} of hard-working students start their college careers right after high school graduation.",
    "cn": "大多數努力的學生在高中畢業後就立刻開始了他們的大學學生生涯。"
  },
  {
    "word": "minority",
    "pos": "n.",
    "cn_def": "少數；少數民族",
    "en_def": "the smaller number or part of a group, less than half",
    "sentence": "The government launched new campaigns to protect the human rights of every {{BLANK}} group.",
    "cn": "政府發起了新的運動，以保護每個少數群體的人權。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的；重大的",
    "en_def": "important, serious, or significant in size, amount, or degree",
    "sentence": "Winning the international science competition was a {{BLANK}} milestone in her academic career path.",
    "cn": "在國際科學比賽中獲勝是她學術生涯道路上的一個重大里程碑。"
  },
  {
    "word": "commonplace",
    "pos": "adj.",
    "cn_def": "普遍的；司空見慣的",
    "en_def": "ordinary; happening frequently or seen regularly, not presenting any surprise",
    "sentence": "Temporary technical problems with new automated computer systems tend to be {{BLANK}}.",
    "cn": "全新自動化電腦系統的短暫技術問題往往是司空見慣的。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "罕見的；稀有的",
    "en_def": "not occurring frequently; exceptionally valuable because of being uncommon",
    "sentence": "The archaeologist discovered a {{BLANK}} ancient statue inside the dark cave painting room yesterday.",
    "cn": "考古學家昨天在黑暗的洞穴壁畫室內發現了一座罕見的古代雕像。"
  },
  {
    "word": "screamed",
    "pos": "v.",
    "cn_def": "尖叫；驚呼",
    "en_def": "to give a long, loud, piercing cry expressing extreme emotion or alarm",
    "sentence": "The excited boys {{BLANK}} loudly while riding the high-speed roller coaster at the amusement resort.",
    "cn": "興奮的男孩們在遊樂度假村乘坐高速雲霄飛車時大聲尖叫。"
  },
  {
    "word": "scream",
    "pos": "n.",
    "cn_def": "尖叫聲",
    "en_def": "a long, loud, piercing cry caused by surprise, fright, or deep distress",
    "sentence": "My nervous cousin let out a terrifying {{BLANK}} when a small bat flew directly at her face.",
    "cn": "當一隻小蝙蝠直接飛向她的臉時，我緊張的表姐發出了一聲恐怖的尖叫聲。"
  },
  {
    "word": "shriek",
    "pos": "n. v.",
    "cn_def": "尖叫聲 / 喊叫",
    "en_def": "a high-pitched pierce cry or a loud shout expressing strong emotion",
    "sentence": "We heard an unexpected {{BLANK}} from down the hallway, which caused everyone to feel alarmed.",
    "cn": "我們聽到走廊盡頭傳來一聲意料之外的尖叫聲，這讓每個人都感到驚恐。"
  },
  {
    "word": "permit",
    "pos": "v.",
    "cn_def": "允許；准許",
    "en_def": "to officially allow someone to perform an action or enter a place",
    "sentence": "The factory regulations do not {{BLANK}} visitors to enter the computer server room alone.",
    "cn": "工廠規定不准許訪客獨自進入電腦伺服器機房。"
  },
  {
    "word": "permission",
    "pos": "n.",
    "cn_def": "允許；許可",
    "en_def": "official approval to perform an action or enter a restricted area",
    "sentence": "Paul violated his girlfriend's personal privacy by reading her private email without asking for {{BLANK}}.",
    "cn": "保羅在沒有徵求允許的情況下閱讀了女友的私人郵件，侵犯了她的個人隱私。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "易於接近的；可使用的",
    "en_def": "able to be reached, entered, or used easily by choice people",
    "sentence": "The retail shop made its entrance easily {{BLANK}} to handicapped customers by building a concrete ramp.",
    "cn": "這家零售店透過建造混凝土坡道，使其入口易於讓有障礙的顧客接近。"
  },
  {
    "word": "intent",
    "pos": "n.",
    "cn_def": "意圖；目的",
    "en_def": "a clear purpose or intention, especially a legal determination to perform an action",
    "sentence": "The legal investigators established that the suspect had a criminal {{BLANK}} to commit financial fraud.",
    "cn": "法律調查人員認定，該嫌疑人具有實施財務詐欺的犯罪意圖。"
  },
  {
    "word": "intend",
    "pos": "v.",
    "cn_def": "想要；打算；計意",
    "en_def": "to have a plan, result, or purpose in mind when doing a specific action",
    "sentence": "The innovative technology firm did not {{BLANK}} to cause any panic when testing its new automated server framework.",
    "cn": "這家創新的科技公司在測試其全新的自動化伺服器架構時，並不想引發任何恐慌。"
  },
  {
    "word": "intends to",
    "pos": "phr.",
    "cn_def": "打算做...（後接原形動詞）",
    "en_def": "to plan or purpose to perform a specific action or achieve a milestone in the future",
    "sentence": "The supportive coordinator {{BLANK}} send a thoughtful gift to the understaffed engineering team tomorrow morning.",
    "cn": "這位給予支持的協調員打算明天上午向人手不足的工程團隊送出一份體貼的禮物。"
  },
  {
    "word": "intention",
    "pos": "n.",
    "cn_def": "意圖；打算",
    "en_def": "an aim, plan, or purpose that guides a person's conscious actions",
    "sentence": "Richard actually had no {{BLANK}} of attending the corporate promotional campaign party tonight.",
    "cn": "理查德今晚其實根本沒有打算參加公司的促銷活動派對。"
  },
  {
    "word": "intentional",
    "pos": "adj.",
    "cn_def": "有意的；故意的",
    "en_def": "deliberate; done on purpose rather than by an accidental mistake",
    "sentence": "The soccer player's foul was completely {{BLANK}}, so the referee heavily penalized him.",
    "cn": "這名足球運動員的犯規完全 food 故意的，因此裁判對他進行了重罰。"
  },
  {
    "word": "noble",
    "pos": "adj.",
    "cn_def": "高尚的",
    "en_def": "having or showing fine personal qualities or high moral principles; aristocratic",
    "sentence": "Tammy did a {{BLANK}} thing when she stopped the aggressive boys' fight on the school playground.",
    "cn": "當塔米阻止學校操場上具攻擊性的男孩們打架時，她做了一件高尚的事。"
  },
  {
    "word": "nobles",
    "pos": "n.",
    "cn_def": "貴族",
    "en_def": "a person of noble rank or aristocratic birth in a traditional society",
    "sentence": "The traditional king invited all the local {{BLANK}} to a magnificent feast inside the palace gallery.",
    "cn": "傳統的國王邀請了所有當地的貴族在宮殿畫廊內享用一場盛大的宴會。"
  },
  {
    "word": "discriminate",
    "pos": "v.",
    "cn_def": "歧視；區分",
    "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
    "sentence": "The tech company cannot {{BLANK}} on the grounds of age when hiring new automated platform programmers.",
    "cn": "這家科技公司在雇用新的自動化平台程式設計師時，不能以年齡為由進行歧視。"
  },
  {
    "word": "discriminate against",
    "pos": "phr.",
    "cn_def": "歧視某人",
    "en_def": "to treat a specific individual unfairly due to prejudice or bias",
    "sentence": "The new law ensures that large corporations do not {{BLANK}} Minority staff members.",
    "cn": "新法律確保了大型企業不會歧視少數族群的員工。"
  },
  {
    "word": "discrimination",
    "pos": "n.",
    "cn_def": "歧視",
    "en_def": "the unjust or prejudicial treatment of different categories of people or things",
    "sentence": "Most modern countries have strict laws preventing {{BLANK}} in corporate hiring practices.",
    "cn": "大多數現代國家都有嚴格的法律，來防止公司招聘實務中的歧視行為。"
  },
  {
    "word": "in a completely new light",
    "pos": "phr.",
    "cn_def": "以...的角度",
    "en_def": "viewing a situation or person from a particular perspective or interpretation",
    "sentence": "The innovative research presents the traditional theory {{BLANK}}.",
    "cn": "這項創新的研究以一個完全全新的角度呈現了傳統的理論。"
  }
];

const MCQS = [
  {
    "q": "Parents have a responsibility to provide clear ______ guidance to their children.",
    "options": [
      "moral",
      "satisfied",
      "satisfactory",
      "noble"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "It is ______ wrong to spread rumors about other people behind their backs.",
    "options": [
      "racially",
      "morally",
      "roughly",
      "politically"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The dishonest businessman committed an ______ act when he intentionally hid the serious defects of his product.",
    "options": [
      "thoughtless",
      "lethal",
      "satisfied",
      "immoral"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The ruthless executive acted ______ by exploiting underpaid factory workers to maximize corporate revenue.",
    "options": [
      "morally",
      "racially",
      "immorally",
      "politically"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The university lecture analyzed how recent modern technology developments have affected the ______ of the young generation.",
    "options": [
      "morality",
      "politics",
      "explanation",
      "politicians"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The ancient warrior received a ______ wound during the rough battle and died shortly afterward in the cathedral.",
    "options": [
      "rough",
      "prior",
      "thoughtless",
      "mortal"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Traditional myths often feature ______ gods who hover over the crater and control the rainfall of the region.",
    "options": [
      "coarse",
      "hateful",
      "immortal",
      "satisfactory"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Advanced medical technology has significantly reduced the infant ______ rate in many developing countries worldwide.",
    "options": [
      "explanation",
      "mortality",
      "appearance",
      "perspective"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The innovative sculptor achieved artistic ______ after creating a masterpiece that captured the entire nation's imagination.",
    "options": [
      "compliment",
      "feminism",
      "immortality",
      "interpreter"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Large manufacturing plants are banned from releasing ______ toxic pollutants into local agricultural irrigation systems.",
    "options": [
      "lethal",
      "fatal",
      "simulated",
      "hateful"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Overlooking the strict frameworks of cyber security proved to be a ______ mistake for the international tech company.",
    "options": [
      "accessible",
      "fatal",
      "feminine",
      "prospective"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The tragic film tells a fascinating story of two romantic lovers who were separated by the cruelty of ______.",
    "options": [
      "appearance",
      "aspect",
      "explanation",
      "fate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The government organized a thorough investigation to confirm the exact ______ after the massive highway accident.",
    "options": [
      "internet celebrity",
      "be completely satisfied with",
      "death toll",
      "political figure"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The hard-working student was thrilled to ______ the scholarship from the prestigious university.",
    "options": [
      "explain",
      "appear",
      "mocked",
      "accept"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Winning the international competition brought him wide ______ as a talented modern sculptor.",
    "options": [
      "acceptance",
      "perspective",
      "prospect",
      "intent"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "In the past, it wasn't socially ______ for women to wear short skirts in public places.",
    "options": [
      "handicapped",
      "acceptable",
      "hateful",
      "commonplace"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Using foul language toward your classmates during school hours is absolutely ______.",
    "options": [
      "thoughtless",
      "disrespectful",
      "unacceptable",
      "immortal"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The professional chef worked diligently to ______ the distinct tastes of all the international guests.",
    "options": [
      "generate",
      "mocked",
      "interpret",
      "satisfy"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The conservative board members were thoroughly ______ with the new automated platform's security features.",
    "options": [
      "lethal",
      "satisfied",
      "prior",
      "racial"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "You should never ______ your current achievements if you want to pursue a higher milestone.",
    "options": [
      "be completely satisfied with",
      "worth",
      "intends to",
      "target audience"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Teaching active adolescents can be a very demanding job, but it is also exceptionally ______.",
    "options": [
      "acceptable",
      "satisfying",
      "racial",
      "coarse"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The technician gave a ______ explanation for why the server room crashed yesterday.",
    "options": [
      "satisfying",
      "feminine",
      "prior",
      "satisfactory"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The tech firm monitored customer ______ thoroughly after launching its newly customized online platform.",
    "options": [
      "majority",
      "speech",
      "satisfaction",
      "disappearance"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The mechanics repaired the aircraft's engines ______ before it was cleared for flight.",
    "options": [
      "to their satisfaction",
      "shriek",
      "from generation to generation",
      "of course"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Different critics might ______ the symbolic meaning of this painting in distinct ways.",
    "options": [
      "insulted",
      "interpret",
      "discriminate",
      "appeared"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Without a reliable ______ to translate the conversation, the trade negotiation would have failed completely.",
    "options": [
      "politics",
      "meaning",
      "gender",
      "interpreter"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "I'm not sure I agree with your ______ of the main character in the classical novel.",
    "options": [
      "interpretation",
      "publishing",
      "acceptance",
      "press"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The technical engineer tried to ______ the complex framework of the automated server to the board members.",
    "options": [
      "interpret",
      "satisfy",
      "explain",
      "mocked"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The doctor offered a detailed ______ of the complex framework of the upcoming medical treatment.",
    "options": [
      "race",
      "majority",
      "acceptance",
      "explanation"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Jake is a talented professional artist who was hired to ______ a fascinating new storybook for young children.",
    "options": [
      "generate",
      "illustrate",
      "screamed",
      "satisfy"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The professor used a series of recent market statistics to ______ his theory regarding globalization.",
    "options": [
      "illustrate",
      "intend",
      "appear",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The successful publisher signed a contract with a famous ______ to design the customized cover for the novel.",
    "options": [
      "speech",
      "meaning",
      "illustrator",
      "politics"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The biology textbook features a detailed ______ of the human cell structure for students to study thoroughly.",
    "options": [
      "illustration",
      "generations",
      "interpreter",
      "abuse"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The manager's presentation served as a perfect ______ of how the new strategy can minimize operational costs.",
    "options": [
      "appearance",
      "acceptance",
      "generations",
      "illustration"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "She didn't mean to cause ______ to anyone, but her direct way of speaking was always upsetting people.",
    "options": [
      "illustrator",
      "majority",
      "offense",
      "course"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "The school strictly bans any clothing that features potentially ______ language or artistic content.",
    "options": [
      "fatal",
      "offensive",
      "disabled",
      "disgusted"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "I am truly sorry if my casual remarks ______ your traditional values regarding marriage.",
    "options": [
      "offended",
      "please",
      "satisfy",
      "appeared"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "The captain wisely altered the ship's ______ to avoid the dangerous storm approaching the regional coast.",
    "options": [
      "mortality",
      "mockery",
      "publisher",
      "course"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The university offers an intensive introductory ______ for students who want to study globalization frameworks.",
    "options": [
      "illustrator",
      "course",
      "immortality",
      "mockery"
    ],
    "answer": 1,
    "vocabIndex": 38
  },
  {
    "q": "The gourmet dinner featured a magnificent three-______ meal paired with the finest international wines.",
    "options": [
      "thought",
      "racism",
      "course",
      "politicians"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "If you complete your daily homework thoroughly, you will ______ pass the academic examination easily.",
    "options": [
      "discriminate against",
      "of course",
      "shriek",
      "prospective customer"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "After years of living at the wild beach, Pete's skin had turned ______ and brown.",
    "options": [
      "insulting",
      "masculine",
      "political",
      "coarse"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "The innovative sculptor prefers using ______ marble because it gives the artwork a unique texture.",
    "options": [
      "fatal",
      "pleasant",
      "rough",
      "nasty"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "The architect drafted a ______ for the new school library before presenting the detailed blueprints.",
    "options": [
      "rough plan",
      "worthy of",
      "have a tough time",
      "add insult to injury"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "I only have a ______ of how the complex database operates, so I need a detailed technical explanation.",
    "options": [
      "political figure",
      "rough idea",
      "intends to",
      "internet celebrity"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The international corporation spends ______ fifty thousand US dollars every month on maintaining cyber security.",
    "options": [
      "politically",
      "approximately",
      "morally",
      "roughly"
    ],
    "answer": 3,
    "vocabIndex": 45
  },
  {
    "q": "The regional fresh vegetable market is located ______ 23.7 kilometers from the central station.",
    "options": [
      "roughly",
      "racially",
      "approximately",
      "morally"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "Facing a sudden fiscal crisis was a ______ challenge for the engineering firm's executive board members.",
    "options": [
      "tough",
      "insulting",
      "handicapped",
      "accessible"
    ],
    "answer": 0,
    "vocabIndex": 47
  },
  {
    "q": "Many low-income wage earners ______ coping with the rising inflation rate in big cities.",
    "options": [
      "mock test",
      "to their satisfaction",
      "rough plan",
      "have a tough time"
    ],
    "answer": 3,
    "vocabIndex": 48
  },
  {
    "q": "The national basketball team faced a ______ in the final match, which made the game exceptionally intense.",
    "options": [
      "target audience",
      "tough opponent",
      "rough plan",
      "death toll"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "The political journalist asked the prime minister a ______ regarding the controversial minimum wage law.",
    "options": [
      "tough question",
      "in a completely new light",
      "be completely satisfied with",
      "worthy of"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "The president clarified his position on ______ reform during his live televised speech last night.",
    "options": [
      "accessible",
      "feminine",
      "political",
      "meaningful"
    ],
    "answer": 2,
    "vocabIndex": 51
  },
  {
    "q": "The conservative politician took a ______ cautious approach to the controversial minimum wage law.",
    "options": [
      "approximately",
      "roughly",
      "morally",
      "politically"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The young scholar decided to pursue a career in ______ after graduating from law school.",
    "options": [
      "meaning",
      "insult",
      "politics",
      "illustrator"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "Wise ______ should pay much more attention to essential environmental issues like pollution.",
    "options": [
      "intention",
      "politicians",
      "prospect",
      "illustrator"
    ],
    "answer": 1,
    "vocabIndex": 54
  },
  {
    "q": "The prime minister is a prominent ______ who routinely gives live televised speeches to clarify tax laws.",
    "options": [
      "political figure",
      "worthy of",
      "racial discrimination",
      "add insult to injury"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The grand opening of the new luxury hotel attracted many a Hollywood ______ and wealthy executive yesterday.",
    "options": [
      "publishing",
      "minority",
      "offense",
      "celebrity"
    ],
    "answer": 3,
    "vocabIndex": 56
  },
  {
    "q": "The historic art gallery displays several unique masterpieces painted by the most ______ French impressionists.",
    "options": [
      "celebrated",
      "rare",
      "disabled",
      "fatal"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "The creative teenager became an ______ overnight after his customized gaming video went viral on the web.",
    "options": [
      "racial discrimination",
      "rough idea",
      "internet celebrity",
      "intends to"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "The tech manufacturer signed a dynamic contract with a popular ______ to advertise its new customizable smartphone.",
    "options": [
      "be completely satisfied with",
      "social media influencer",
      "mock test",
      "peer pressure"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "Andy is installing a concrete ramp so that ______ customers can easily access his retail shop.",
    "options": [
      "satisfactory",
      "insulting",
      "handicapped",
      "satisfying"
    ],
    "answer": 2,
    "vocabIndex": 60
  },
  {
    "q": "The city council customized the public transportation framework to make it more accessible for ______ citizens.",
    "options": [
      "disabled",
      "handicapped",
      "racial",
      "disrespectful"
    ],
    "answer": 0,
    "vocabIndex": 61
  },
  {
    "q": "Talking to different customers politely is an important ______ of a professional salesperson's job.",
    "options": [
      "scream",
      "morality",
      "race",
      "aspect"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "Traveling to different countries can provide citizens with a completely new ______ on global economic frameworks.",
    "options": [
      "nobles",
      "perspective",
      "priority",
      "mockery"
    ],
    "answer": 1,
    "vocabIndex": 63
  },
  {
    "q": "The tech firm's excellent financial results significantly improved its ______ of capturing a larger slice of the market.",
    "options": [
      "offense",
      "speech",
      "prospect",
      "scream"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "The university organized a campus tour to welcome ______ students and clarify its academic course requirements.",
    "options": [
      "noble",
      "major",
      "fatal",
      "prospective"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "The experienced sales team sent customized email brochures to every ______ to advertise the new software framework.",
    "options": [
      "prospective customer",
      "have a tough time",
      "prior to",
      "from generation to generation"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "The tech manufacturer designed its innovative ad campaign specifically to attract an adolescent ______.",
    "options": [
      "death toll",
      "target audience",
      "racial discrimination",
      "mock test"
    ],
    "answer": 1,
    "vocabIndex": 67
  },
  {
    "q": "A rare ancient statue suddenly ______ inside the dark cave, which left the research staff completely speechless.",
    "options": [
      "mocked",
      "illustrate",
      "press",
      "appeared"
    ],
    "answer": 3,
    "vocabIndex": 68
  },
  {
    "q": "The conservative board members ______ to be thoroughly satisfied with the new automated platform's safety features.",
    "options": [
      "publish",
      "appear",
      "press",
      "interpret"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "Although she felt anxious before the recital, her outward ______ was completely calm.",
    "options": [
      "thought",
      "press",
      "appearance",
      "offense"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "Many traditional species will slowly ______ from the regional forest if we do not enforce environmental protection laws.",
    "options": [
      "disappear",
      "explain",
      "mocked",
      "screamed"
    ],
    "answer": 0,
    "vocabIndex": 71
  },
  {
    "q": "Police investigators conducted a thorough study to solve the mysterious ______ of the wealthy business executive.",
    "options": [
      "mockery",
      "disappearance",
      "interpretation",
      "scream"
    ],
    "answer": 1,
    "vocabIndex": 72
  },
  {
    "q": "Veronica was deeply ______ with her classmate's nasty attitude and foul language during the seminar.",
    "options": [
      "immortal",
      "masculine",
      "immoral",
      "disgusted"
    ],
    "answer": 3,
    "vocabIndex": 73
  },
  {
    "q": "Leaving a heap of dirty dishes in the kitchen sink for a week is absolutely ______.",
    "options": [
      "meaningless",
      "mock",
      "disgusting",
      "fatal"
    ],
    "answer": 2,
    "vocabIndex": 74
  },
  {
    "q": "Veronica's ______ attitude and rude language usually made her traditional teachers quite upset.",
    "options": [
      "nasty",
      "ridiculous",
      "meaningful",
      "offensive"
    ],
    "answer": 0,
    "vocabIndex": 75
  },
  {
    "q": "The dedicated intern worked hard around the clock to ______ the conservative manager and secure a permanent position.",
    "options": [
      "intend",
      "please",
      "generate",
      "discriminate"
    ],
    "answer": 1,
    "vocabIndex": 76
  },
  {
    "q": "The board members were highly ______ with the new automated platform because it successfully minimized data security risks.",
    "options": [
      "feminine",
      "pleasant",
      "noble",
      "pleased"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "The talented illustrator was completely ______ when the successful publisher signed a contract for her new customizable storybook.",
    "options": [
      "disgusted",
      "intentional",
      "delighted",
      "speechless"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "The family bakery was filled with the ______ scent of freshly baked chocolate cakes.",
    "options": [
      "pleasant",
      "offensive",
      "masculine",
      "disgusting"
    ],
    "answer": 0,
    "vocabIndex": 79
  },
  {
    "q": "It is a great ______ to welcome the celebrated French impressionist to our historic art gallery tonight.",
    "options": [
      "satisfaction",
      "pleasure",
      "chairman",
      "mortality"
    ],
    "answer": 1,
    "vocabIndex": 80
  },
  {
    "q": "The supportive psychologist helped the intern analyze the intense ______ she felt before the corporate presentation.",
    "options": [
      "course",
      "politics",
      "minority",
      "pressure"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "Active adolescents can be highly susceptible to ______, which heavily shapes their behavioral routines and choices.",
    "options": [
      "peer pressure",
      "mock test",
      "rough plan",
      "death toll"
    ],
    "answer": 0,
    "vocabIndex": 82
  },
  {
    "q": "You should ______ the automated safety button immediately if the computer server room encounters a technical accident.",
    "options": [
      "intend",
      "mocked",
      "press",
      "generate"
    ],
    "answer": 2,
    "vocabIndex": 83
  },
  {
    "q": "The prime minister routinely gives live televised speeches to clarify new tax regulations to the local ______.",
    "options": [
      "celebrity",
      "mortality",
      "explanation",
      "press"
    ],
    "answer": 3,
    "vocabIndex": 84
  },
  {
    "q": "The aggressive bully sent ______ messages to his classmates through social media platforms.",
    "options": [
      "hateful",
      "tough",
      "pleasant",
      "political"
    ],
    "answer": 0,
    "vocabIndex": 85
  },
  {
    "q": "Jan's classmates ______ her new customized hairstyle, saying it looked strange and abnormal.",
    "options": [
      "appeared",
      "discriminate",
      "mocked",
      "insulted"
    ],
    "answer": 2,
    "vocabIndex": 86
  },
  {
    "q": "The high school students held a ______ trial in their social studies class yesterday morning.",
    "options": [
      "prospective",
      "mock",
      "acceptable",
      "disrespectful"
    ],
    "answer": 1,
    "vocabIndex": 87
  },
  {
    "q": "The aggressive bully's constant ______ of his classmate's customized haircut deeply hurt the boy's feelings.",
    "options": [
      "mockery",
      "immortality",
      "interpreter",
      "course"
    ],
    "answer": 0,
    "vocabIndex": 88
  },
  {
    "q": "Diligent students should take a ______ routinely to evaluate their progress before the actual SAT exam.",
    "options": [
      "social media influencer",
      "mock test",
      "be completely satisfied with",
      "worth"
    ],
    "answer": 1,
    "vocabIndex": 89
  },
  {
    "q": "The tech manufacturer used an automated computer ______ to monitor how the software framework reacts under extreme pressure.",
    "options": [
      "appearance",
      "disappearance",
      "pressure",
      "simulation"
    ],
    "answer": 3,
    "vocabIndex": 90
  },
  {
    "q": "The flight academy provides a ______ environment where prospective pilots can practice landing during severe storms safely.",
    "options": [
      "satisfied",
      "immoral",
      "simulated",
      "satisfactory"
    ],
    "answer": 2,
    "vocabIndex": 91
  },
  {
    "q": "The young artist's innovative sculptures faced severe ______ from conservative critics.",
    "options": [
      "generations",
      "ridicule",
      "intention",
      "publications"
    ],
    "answer": 1,
    "vocabIndex": 92
  },
  {
    "q": "It is absolutely ______ to expect our understaffed team to complete the complex software framework in just two days.",
    "options": [
      "prior",
      "acceptable",
      "ridiculous",
      "masculine"
    ],
    "answer": 2,
    "vocabIndex": 93
  },
  {
    "q": "The international human rights organization works diligently to eliminate discrimination based on ______ or religion worldwide.",
    "options": [
      "race",
      "acceptance",
      "priority",
      "press"
    ],
    "answer": 0,
    "vocabIndex": 94
  },
  {
    "q": "Jason had the fastest time on the track team for the 100-meter sprint ______.",
    "options": [
      "interpretation",
      "nobles",
      "intention",
      "race"
    ],
    "answer": 3,
    "vocabIndex": 95
  },
  {
    "q": "The national government guaranteed ______ equality and human rights for all citizen groups.",
    "options": [
      "racial",
      "accessible",
      "noble",
      "disgusted"
    ],
    "answer": 0,
    "vocabIndex": 96
  },
  {
    "q": "The passage of the civil rights law made ______ completely illegal in the United States.",
    "options": [
      "mock test",
      "racial discrimination",
      "intends to",
      "add insult to injury"
    ],
    "answer": 1,
    "vocabIndex": 97
  },
  {
    "q": "The urban neighborhood is ______ diverse, featuring families from many distinct countries.",
    "options": [
      "roughly",
      "approximately",
      "morally",
      "racially"
    ],
    "answer": 3,
    "vocabIndex": 98
  },
  {
    "q": "Many social organizations are launched to combat ______ and promote cultural tolerance.",
    "options": [
      "fate",
      "simulation",
      "racism",
      "mockery"
    ],
    "answer": 2,
    "vocabIndex": 99
  },
  {
    "q": "Leroy ______ Jessica by telling her that she has terrible taste in designer clothing.",
    "options": [
      "insulted",
      "appeared",
      "offended",
      "mocked"
    ],
    "answer": 0,
    "vocabIndex": 100
  },
  {
    "q": "Sam often takes his colleagues' constructive criticism as a personal ______ and becomes upset.",
    "options": [
      "disappearance",
      "minority",
      "insult",
      "feminism"
    ],
    "answer": 2,
    "vocabIndex": 101
  },
  {
    "q": "Her boss gave her more work, and to ______, he lowered her monthly salary.",
    "options": [
      "racial discrimination",
      "discriminate against",
      "death toll",
      "add insult to injury"
    ],
    "answer": 3,
    "vocabIndex": 102
  },
  {
    "q": "The aggressive bully made several ______ remarks about his classmate's customized haircut during the dynamic seminar.",
    "options": [
      "pleasant",
      "insulting",
      "worthless",
      "intentional"
    ],
    "answer": 1,
    "vocabIndex": 103
  },
  {
    "q": "The private technology firm removed the controversial video advertisement because many potential customers found it highly ______.",
    "options": [
      "satisfactory",
      "thoughtless",
      "rough",
      "offensive"
    ],
    "answer": 3,
    "vocabIndex": 104
  },
  {
    "q": "Leaving the international conference room while the celebrated researcher was delivering his presentation was viewed as highly ______.",
    "options": [
      "hateful",
      "disrespectful",
      "rough",
      "disabled"
    ],
    "answer": 1,
    "vocabIndex": 105
  },
  {
    "q": "The non-profit foundation works hard to protect domestic livestock from any severe ______.",
    "options": [
      "abuse",
      "interpretation",
      "majority",
      "racism"
    ],
    "answer": 0,
    "vocabIndex": 106
  },
  {
    "q": "The professional chef received a beautiful ______ from the guests regarding his traditional cuisine.",
    "options": [
      "simulation",
      "discrimination",
      "compliment",
      "speech"
    ],
    "answer": 2,
    "vocabIndex": 107
  },
  {
    "q": "The dedicated ______ began the corporate board meeting precisely on time yesterday afternoon.",
    "options": [
      "priority",
      "chairman",
      "illustration",
      "publications"
    ],
    "answer": 1,
    "vocabIndex": 108
  },
  {
    "q": "The job advertisement states that the tech company does not discriminate based on ______.",
    "options": [
      "explanation",
      "illustrator",
      "gender",
      "minority"
    ],
    "answer": 2,
    "vocabIndex": 109
  },
  {
    "q": "The scholar spent hours analyzing the precise ______ of the ancient symbols in the temple.",
    "options": [
      "publishing",
      "chairman",
      "illustrator",
      "meaning"
    ],
    "answer": 3,
    "vocabIndex": 110
  },
  {
    "q": "Participating in the financial investment summer camp provided the ambitious students with a highly ______ experience.",
    "options": [
      "meaningful",
      "thoughtful",
      "thoughtless",
      "coarse"
    ],
    "answer": 0,
    "vocabIndex": 111
  },
  {
    "q": "Without a clear framework, collecting a large amount of raw data is completely ______.",
    "options": [
      "mock",
      "meaningless",
      "hateful",
      "offensive"
    ],
    "answer": 1,
    "vocabIndex": 112
  },
  {
    "q": "The politician gave an exceptional ______ to clarify his position on the new tax regulations.",
    "options": [
      "speech",
      "acceptance",
      "feminism",
      "ridicule"
    ],
    "answer": 0,
    "vocabIndex": 113
  },
  {
    "q": "The innovative masterpiece painted by the young artist left the traditional critics completely ______.",
    "options": [
      "major",
      "mortal",
      "speechless",
      "prior"
    ],
    "answer": 2,
    "vocabIndex": 114
  },
  {
    "q": "The creative author wrote down every interesting ______ that floated around in his consciousness.",
    "options": [
      "nobles",
      "politics",
      "publications",
      "thought"
    ],
    "answer": 3,
    "vocabIndex": 115
  },
  {
    "q": "The supportive coordinator sent a ______ gift to the understaffed engineering team to appreciate their hard work.",
    "options": [
      "lethal",
      "pleased",
      "thoughtful",
      "rough"
    ],
    "answer": 2,
    "vocabIndex": 116
  },
  {
    "q": "Leaving your wet boots in the narrow hallway was a ______ action that almost caused an accident.",
    "options": [
      "thoughtless",
      "meaningless",
      "insulting",
      "handicapped"
    ],
    "answer": 0,
    "vocabIndex": 117
  },
  {
    "q": "The collector carefully calculated the true monetary ______ of the rare foreign coins.",
    "options": [
      "insult",
      "worth",
      "politicians",
      "interpreter"
    ],
    "answer": 1,
    "vocabIndex": 118
  },
  {
    "q": "This unique historical cathedral is definitely ______ visiting thoroughly if you travel to the regional zone.",
    "options": [
      "in a completely new light",
      "intends to",
      "racial discrimination",
      "worth"
    ],
    "answer": 3,
    "vocabIndex": 119
  },
  {
    "q": "The innovative technology platform's strict data security framework is truly ______ high praise from global investors.",
    "options": [
      "worthy of",
      "tough opponent",
      "of course",
      "add insult to injury"
    ],
    "answer": 0,
    "vocabIndex": 120
  },
  {
    "q": "The old television monitor was deemed ______ because its screen was thoroughly broken.",
    "options": [
      "disgusting",
      "acceptable",
      "disrespectful",
      "worthless"
    ],
    "answer": 3,
    "vocabIndex": 121
  },
  {
    "q": "The university press plans to ______ a scholarly article regarding the industrial revolution next semester.",
    "options": [
      "explain",
      "press",
      "publish",
      "accept"
    ],
    "answer": 2,
    "vocabIndex": 122
  },
  {
    "q": "The successful author signed a new contract with a major international ______ yesterday morning.",
    "options": [
      "immortality",
      "publisher",
      "priority",
      "satisfaction"
    ],
    "answer": 1,
    "vocabIndex": 123
  },
  {
    "q": "Our magazine company puts out two to three high-quality ______ per month for readers.",
    "options": [
      "publications",
      "discrimination",
      "intention",
      "mortality"
    ],
    "answer": 0,
    "vocabIndex": 124
  },
  {
    "q": "After graduating with a degree in literature, she got an exceptional job in ______.",
    "options": [
      "discrimination",
      "publishing",
      "compliment",
      "morality"
    ],
    "answer": 1,
    "vocabIndex": 125
  },
  {
    "q": "Many fashion people say that light pink is a very ______ color choice for summer dresses.",
    "options": [
      "pleased",
      "offensive",
      "feminine",
      "unacceptable"
    ],
    "answer": 2,
    "vocabIndex": 126
  },
  {
    "q": "The historic gym features architectural elements that give the building a bold, ______ look.",
    "options": [
      "mortal",
      "speechless",
      "intentional",
      "masculine"
    ],
    "answer": 3,
    "vocabIndex": 127
  },
  {
    "q": "The university course analyzed the social impact of modern ______ on political reform movements.",
    "options": [
      "feminism",
      "press",
      "abuse",
      "offense"
    ],
    "answer": 0,
    "vocabIndex": 128
  },
  {
    "q": "The dedicated ______ organized a peaceful protest rally to demand equal pay regulations for women.",
    "options": [
      "minority",
      "intent",
      "feminist",
      "politics"
    ],
    "answer": 2,
    "vocabIndex": 129
  },
  {
    "q": "Colin's family has lived securely in this agricultural village for six consecutive ______.",
    "options": [
      "discrimination",
      "permission",
      "priority",
      "generations"
    ],
    "answer": 3,
    "vocabIndex": 130
  },
  {
    "q": "This family farm was passed down ______ in my family since 1895.",
    "options": [
      "shriek",
      "from generation to generation",
      "in a completely new light",
      "have a tough time"
    ],
    "answer": 1,
    "vocabIndex": 131
  },
  {
    "q": "The innovative technology manufacturer uses solar power to ______ clean electricity for the factory.",
    "options": [
      "generate",
      "disappear",
      "publish",
      "discriminate"
    ],
    "answer": 0,
    "vocabIndex": 132
  },
  {
    "q": "The city center is experiencing a cultural ______ after the opening of the art gallery.",
    "options": [
      "interpretation",
      "prospect",
      "regeneration",
      "scream"
    ],
    "answer": 2,
    "vocabIndex": 133
  },
  {
    "q": "We were given absolutely no ______ notice that the important board meeting time would be changed.",
    "options": [
      "delighted",
      "tough",
      "thoughtless",
      "prior"
    ],
    "answer": 3,
    "vocabIndex": 134
  },
  {
    "q": "The strict teacher asked the students if they had any questions ______ the academic exam.",
    "options": [
      "target audience",
      "prior to",
      "shriek",
      "peer pressure"
    ],
    "answer": 1,
    "vocabIndex": 135
  },
  {
    "q": "For the present moment, your first ______ is to finish your daily homework notes thoroughly.",
    "options": [
      "offense",
      "prospect",
      "priority",
      "worth"
    ],
    "answer": 2,
    "vocabIndex": 136
  },
  {
    "q": "The ______ of hard-working students start their college careers right after high school graduation.",
    "options": [
      "majority",
      "explanation",
      "speech",
      "illustration"
    ],
    "answer": 0,
    "vocabIndex": 137
  },
  {
    "q": "The government launched new campaigns to protect the human rights of every ______ group.",
    "options": [
      "discrimination",
      "mortality",
      "race",
      "minority"
    ],
    "answer": 3,
    "vocabIndex": 138
  },
  {
    "q": "Winning the international science competition was a ______ milestone in her academic career path.",
    "options": [
      "offensive",
      "major",
      "intentional",
      "worthless"
    ],
    "answer": 1,
    "vocabIndex": 139
  },
  {
    "q": "Temporary technical problems with new automated computer systems tend to be ______.",
    "options": [
      "rare",
      "intentional",
      "speechless",
      "commonplace"
    ],
    "answer": 3,
    "vocabIndex": 140
  },
  {
    "q": "The archaeologist discovered a ______ ancient statue inside the dark cave painting room yesterday.",
    "options": [
      "ridiculous",
      "rare",
      "coarse",
      "speechless"
    ],
    "answer": 1,
    "vocabIndex": 141
  },
  {
    "q": "The excited boys ______ loudly while riding the high-speed roller coaster at the amusement resort.",
    "options": [
      "screamed",
      "generate",
      "publish",
      "please"
    ],
    "answer": 0,
    "vocabIndex": 142
  },
  {
    "q": "My nervous cousin let out a terrifying ______ when a small bat flew directly at her face.",
    "options": [
      "simulation",
      "racism",
      "scream",
      "mortality"
    ],
    "answer": 2,
    "vocabIndex": 143
  },
  {
    "q": "We heard an unexpected ______ from down the hallway, which caused everyone to feel alarmed.",
    "options": [
      "shriek",
      "intends to",
      "from generation to generation",
      "rough plan"
    ],
    "answer": 0,
    "vocabIndex": 144
  },
  {
    "q": "The factory regulations do not ______ visitors to enter the computer server room alone.",
    "options": [
      "to their satisfaction",
      "permit",
      "add insult to injury",
      "intends to"
    ],
    "answer": 1,
    "vocabIndex": 145
  },
  {
    "q": "Paul violated his girlfriend's personal privacy by reading her private email without asking for ______.",
    "options": [
      "publisher",
      "speech",
      "permission",
      "illustration"
    ],
    "answer": 2,
    "vocabIndex": 146
  },
  {
    "q": "The retail shop made its entrance easily ______ to handicapped customers by building a concrete ramp.",
    "options": [
      "coarse",
      "disgusted",
      "racial",
      "accessible"
    ],
    "answer": 3,
    "vocabIndex": 147
  },
  {
    "q": "The legal investigators established that the suspect had a criminal ______ to commit financial fraud.",
    "options": [
      "intent",
      "perspective",
      "insult",
      "acceptance"
    ],
    "answer": 0,
    "vocabIndex": 148
  },
  {
    "q": "The innovative technology firm did not ______ to cause any panic when testing its new automated server framework.",
    "options": [
      "press",
      "intend",
      "appear",
      "satisfy"
    ],
    "answer": 1,
    "vocabIndex": 149
  },
  {
    "q": "The supportive coordinator ______ send a thoughtful gift to the understaffed engineering team tomorrow morning.",
    "options": [
      "internet celebrity",
      "mock test",
      "intends to",
      "permit"
    ],
    "answer": 2,
    "vocabIndex": 150
  },
  {
    "q": "Richard actually had no ______ of attending the corporate promotional campaign party tonight.",
    "options": [
      "feminism",
      "celebrity",
      "explanation",
      "intention"
    ],
    "answer": 3,
    "vocabIndex": 151
  },
  {
    "q": "The soccer player's foul was completely ______, so the referee heavily penalized him.",
    "options": [
      "thoughtful",
      "ridiculous",
      "intentional",
      "coarse"
    ],
    "answer": 2,
    "vocabIndex": 152
  },
  {
    "q": "Tammy did a ______ thing when she stopped the aggressive boys' fight on the school playground.",
    "options": [
      "noble",
      "meaningful",
      "speechless",
      "commonplace"
    ],
    "answer": 0,
    "vocabIndex": 153
  },
  {
    "q": "The traditional king invited all the local ______ to a magnificent feast inside the palace gallery.",
    "options": [
      "press",
      "nobles",
      "majority",
      "priority"
    ],
    "answer": 1,
    "vocabIndex": 154
  },
  {
    "q": "The tech company cannot ______ on the grounds of age when hiring new automated platform programmers.",
    "options": [
      "press",
      "explain",
      "appeared",
      "discriminate"
    ],
    "answer": 3,
    "vocabIndex": 155
  },
  {
    "q": "The new law ensures that large corporations do not ______ Minority staff members.",
    "options": [
      "be completely satisfied with",
      "tough question",
      "discriminate against",
      "of course"
    ],
    "answer": 2,
    "vocabIndex": 156
  },
  {
    "q": "Most modern countries have strict laws preventing ______ in corporate hiring practices.",
    "options": [
      "discrimination",
      "chairman",
      "minority",
      "illustrator"
    ],
    "answer": 0,
    "vocabIndex": 157
  },
  {
    "q": "The innovative research presents the traditional theory ______.",
    "options": [
      "prior to",
      "intends to",
      "discriminate against",
      "in a completely new light"
    ],
    "answer": 3,
    "vocabIndex": 158
  }
];

const LOOKUP = {
  "moral": {
    "pos": "adj.",
    "en_def": "relating to the principles of right and wrong behavior",
    "cn_def": "道德的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the principles of right and wrong behavior",
        "cn_def": "道德的"
      }
    ]
  },
  "morally": {
    "pos": "adv.",
    "en_def": "in a way that relates to standards of good and bad behavior",
    "cn_def": "道德上地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to standards of good and bad behavior",
        "cn_def": "道德上地"
      }
    ]
  },
  "immoral": {
    "pos": "adj.",
    "en_def": "violating accepted standards of right and wrong behavior; morally wrong",
    "cn_def": "不道德的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "violating accepted standards of right and wrong behavior; morally wrong",
        "cn_def": "不道德的"
      }
    ]
  },
  "immorally": {
    "pos": "adv.",
    "en_def": "in a way that violates accepted standards of right and wrong behavior",
    "cn_def": "不道德地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that violates accepted standards of right and wrong behavior",
        "cn_def": "不道德地"
      }
    ]
  },
  "morality": {
    "pos": "n.",
    "en_def": "principles concerning the distinction between right and wrong behavior",
    "cn_def": "道德；道德觀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "principles concerning the distinction between right and wrong behavior",
        "cn_def": "道德；道德觀"
      }
    ]
  },
  "mortal": {
    "pos": "adj.",
    "en_def": "causing death, or relating to human beings who cannot live forever",
    "cn_def": "致命的；凡人的；不能永生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing death, or relating to human beings who cannot live forever",
        "cn_def": "致命的；凡人的；不能永生的"
      }
    ]
  },
  "immortal": {
    "pos": "adj.",
    "en_def": "living forever; never dying or decaying; famous for all time",
    "cn_def": "長生不死的；不朽的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "living forever; never dying or decaying; famous for all time",
        "cn_def": "長生不死的；不朽的"
      }
    ]
  },
  "mortality": {
    "pos": "n.",
    "en_def": "the state of being subject to death, or the number of deaths in a given period",
    "cn_def": "生命的有限；死亡率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being subject to death, or the number of deaths in a given period",
        "cn_def": "生命的有限；死亡率"
      }
    ]
  },
  "immortality": {
    "pos": "n.",
    "en_def": "the ability to live forever, or eternal fame that lasts through generations",
    "cn_def": "長生不老；不朽的聲望",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the ability to live forever, or eternal fame that lasts through generations",
        "cn_def": "長生不老；不朽的聲望"
      }
    ]
  },
  "lethal": {
    "pos": "adj.",
    "en_def": "sufficient to cause death; extremely harmful or destructive",
    "cn_def": "致命的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "sufficient to cause death; extremely harmful or destructive",
        "cn_def": "致命的"
      }
    ]
  },
  "fatal": {
    "pos": "adj.",
    "en_def": "causing death, or leading to failure or disaster due to an initial mistake",
    "cn_def": "致命的（常指招致失敗或死亡的結果）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing death, or leading to failure or disaster due to an initial mistake",
        "cn_def": "致命的（常指招致失敗或死亡的結果）"
      }
    ]
  },
  "fate": {
    "pos": "n.",
    "en_def": "the development of events beyond a person's control, regarded as determined by a supernatural power",
    "cn_def": "命運",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the development of events beyond a person's control, regarded as determined by a supernatural power",
        "cn_def": "命運"
      }
    ]
  },
  "death toll": {
    "pos": "n.",
    "en_def": "the total number of people who are killed in an accident, war, or natural disaster",
    "cn_def": "死亡人數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the total number of people who are killed in an accident, war, or natural disaster",
        "cn_def": "死亡人數"
      }
    ]
  },
  "accept": {
    "pos": "v.",
    "en_def": "to consent to receive something, or to agree that something is true",
    "cn_def": "接受；承認",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to consent to receive something, or to agree that something is true",
        "cn_def": "接受；承認"
      }
    ]
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the action of consenting to receive or undertake something offered",
    "cn_def": "接受；接納",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of consenting to receive or undertake something offered",
        "cn_def": "接受；接納"
      }
    ]
  },
  "acceptable": {
    "pos": "adj.",
    "en_def": "considered to be satisfactory or socially allowed in a specific group",
    "cn_def": "可接受的；受歡迎的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "considered to be satisfactory or socially allowed in a specific group",
        "cn_def": "可接受的；受歡迎的"
      }
    ]
  },
  "unacceptable": {
    "pos": "adj.",
    "en_def": "not acceptable; completely offensive or unsatisfactory",
    "cn_def": "無法接受的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not acceptable; completely offensive or unsatisfactory",
        "cn_def": "無法接受的"
      }
    ]
  },
  "satisfy": {
    "pos": "v.",
    "en_def": "to give someone what they want or need, or to make them feel content",
    "cn_def": "使滿足；使滿意；符合",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give someone what they want or need, or to make them feel content",
        "cn_def": "使滿足；使滿意；符合"
      }
    ]
  },
  "satisfied": {
    "pos": "adj.",
    "en_def": "feeling pleased or content because you have got what you wanted or needed",
    "cn_def": "感到滿意的；滿足的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling pleased or content because you have got what you wanted or needed",
        "cn_def": "感到滿意的；滿足的"
      }
    ]
  },
  "be completely satisfied with": {
    "pos": "phr.",
    "en_def": "to feel content, pleased, or happy with a specific outcome, service, or object",
    "cn_def": "對...感到滿意",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel content, pleased, or happy with a specific outcome, service, or object",
        "cn_def": "對...感到滿意"
      }
    ]
  },
  "be satisfied with": {
    "pos": "phr.",
    "en_def": "to feel content, pleased, or happy with a specific outcome, service, or object",
    "cn_def": "對...感到滿意",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to feel content, pleased, or happy with a specific outcome, service, or object",
        "cn_def": "對...感到滿意"
      }
    ]
  },
  "satisfying": {
    "pos": "adj.",
    "en_def": "giving pleasure, fulfillment, or satisfaction because it provides what you need",
    "cn_def": "令人滿意的；帶來滿足感的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving pleasure, fulfillment, or satisfaction because it provides what you need",
        "cn_def": "令人滿意的；帶來滿足感的"
      }
    ]
  },
  "satisfactory": {
    "pos": "adj.",
    "en_def": "fulfilling expectations or needs; acceptable though not exceptional",
    "cn_def": "令人滿意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "fulfilling expectations or needs; acceptable though not exceptional",
        "cn_def": "令人滿意的"
      }
    ]
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "a pleasant feeling of contentment when you have achieved something or got what you wanted",
    "cn_def": "滿意；滿足（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a pleasant feeling of contentment when you have achieved something or got what you wanted",
        "cn_def": "滿意；滿足（名詞）"
      }
    ]
  },
  "to one's satisfaction": {
    "pos": "phr.",
    "en_def": "in a way that makes a choice person feel completely pleased, content, or happy",
    "cn_def": "令某人滿意地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a way that makes a choice person feel completely pleased, content, or happy",
        "cn_def": "令某人滿意地"
      }
    ]
  },
  "to their satisfaction": {
    "pos": "phr.",
    "en_def": "in a way that makes a choice person feel completely pleased, content, or happy",
    "cn_def": "令某人滿意地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a way that makes a choice person feel completely pleased, content, or happy",
        "cn_def": "令某人滿意地"
      }
    ]
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of words or artistic evidence",
    "cn_def": "詮釋；口譯",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to explain or understand the meaning of words or artistic evidence",
        "cn_def": "詮釋；口譯"
      }
    ]
  },
  "interpreter": {
    "pos": "n.",
    "en_def": "a person whose job is to translate spoken words from one language into another",
    "cn_def": "口譯員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person whose job is to translate spoken words from one language into another",
        "cn_def": "口譯員"
      }
    ]
  },
  "interpretation": {
    "pos": "n.",
    "en_def": "an explanation or opinion of the meaning of another person's creative work",
    "cn_def": "詮釋；解讀；翻譯",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an explanation or opinion of the meaning of another person's creative work",
        "cn_def": "詮釋；解讀；翻譯"
      }
    ]
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear or easy to understand by describing it in detail",
    "cn_def": "解釋；說明",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make something clear or easy to understand by describing it in detail",
        "cn_def": "解釋；說明"
      }
    ]
  },
  "explanation": {
    "pos": "n.",
    "en_def": "a statement or account that makes something clear or easier to understand",
    "cn_def": "解釋；說明",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a statement or account that makes something clear or easier to understand",
        "cn_def": "解釋；說明"
      }
    ]
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to draw pictures for a book, magazine, or educational material",
    "cn_def": "畫插畫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to draw pictures for a book, magazine, or educational material",
        "cn_def": "畫插畫"
      },
      {
        "pos": "v.",
        "en_def": "to explain or clarify an idea clearly by providing examples, facts, or data",
        "cn_def": "解說；闡明"
      }
    ]
  },
  "illustrator": {
    "pos": "n.",
    "en_def": "a person who draws or creates pictures for books, magazines, or advertisements",
    "cn_def": "插畫家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who draws or creates pictures for books, magazines, or advertisements",
        "cn_def": "插畫家"
      }
    ]
  },
  "illustration": {
    "pos": "n.",
    "en_def": "a picture, drawing, or diagram inside a book or publication used as decoration or explanation",
    "cn_def": "插圖；插畫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a picture, drawing, or diagram inside a book or publication used as decoration or explanation",
        "cn_def": "插圖；插畫"
      },
      {
        "pos": "n.",
        "en_def": "a story, example, or fact that is used to make a statement or idea clear",
        "cn_def": "解說；實例說明"
      }
    ]
  },
  "offense": {
    "pos": "n.",
    "en_def": "a feeling of anger or displeasure caused by an offensive statement or action",
    "cn_def": "冒犯；得罪",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of anger or displeasure caused by an offensive statement or action",
        "cn_def": "冒犯；得罪"
      }
    ]
  },
  "offensive": {
    "pos": "adj.",
    "en_def": "causing someone to feel deeply hurt, angry, or insulted",
    "cn_def": "冒犯的；無禮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing someone to feel deeply hurt, angry, or insulted",
        "cn_def": "冒犯的；無禮的"
      },
      {
        "pos": "adj.",
        "en_def": "causing someone to feel deeply hurt, upset, or angry due to a lack of morality",
        "cn_def": "冒犯的；得罪人的"
      }
    ]
  },
  "offended": {
    "pos": "v.",
    "en_def": "to cause someone to feel deeply hurt or angry by a rude action",
    "cn_def": "冒犯；觸怒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to feel deeply hurt or angry by a rude action",
        "cn_def": "冒犯；觸怒"
      }
    ]
  },
  "offend": {
    "pos": "v.",
    "en_def": "to cause someone to feel deeply hurt or angry by a rude action",
    "cn_def": "冒犯；觸怒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause someone to feel deeply hurt or angry by a rude action",
        "cn_def": "冒犯；觸怒"
      }
    ]
  },
  "course": {
    "pos": "n.",
    "en_def": "the directional route or direction followed by a ship, aircraft, or storm",
    "cn_def": "航程；航向；路線",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the directional route or direction followed by a ship, aircraft, or storm",
        "cn_def": "航程；航向；路線"
      },
      {
        "pos": "n.",
        "en_def": "a series of systematic lectures or lessons in a particular academic subject",
        "cn_def": "課程"
      },
      {
        "pos": "n.",
        "en_def": "a distinct part of a meal served at one time, such as an appetizer or dessert",
        "cn_def": "一道菜"
      }
    ]
  },
  "of course": {
    "pos": "phr.",
    "en_def": "used to give a positive declaration or emphasize that something is completely true",
    "cn_def": "當然",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to give a positive declaration or emphasize that something is completely true",
        "cn_def": "當然"
      }
    ]
  },
  "coarse": {
    "pos": "adj.",
    "en_def": "rough or loose in texture or grain; rude or offensive in behavior",
    "cn_def": "粗糙的；粗俗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "rough or loose in texture or grain; rude or offensive in behavior",
        "cn_def": "粗糙的；粗俗的"
      }
    ]
  },
  "rough": {
    "pos": "adj.",
    "en_def": "having an uneven or irregular surface; not smooth or gentle",
    "cn_def": "粗糙的；粗略的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having an uneven or irregular surface; not smooth or gentle",
        "cn_def": "粗糙的；粗略的"
      }
    ]
  },
  "rough plan": {
    "pos": "n.",
    "en_def": "a basic, preliminary layout or outline that is not yet completely detailed",
    "cn_def": "粗略的計劃；初步方案",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a basic, preliminary layout or outline that is not yet completely detailed",
        "cn_def": "粗略的計劃；初步方案"
      }
    ]
  },
  "rough idea": {
    "pos": "n.",
    "en_def": "a general understanding or vague conception of a fact or situation",
    "cn_def": "粗略的想法；大概的概念",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a general understanding or vague conception of a fact or situation",
        "cn_def": "粗略的想法；大概的概念"
      }
    ]
  },
  "roughly": {
    "pos": "adv.",
    "en_def": "approximately; nearly but not completely exact in numbers or details",
    "cn_def": "大約地；粗略地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "approximately; nearly but not completely exact in numbers or details",
        "cn_def": "大約地；粗略地"
      }
    ]
  },
  "approximately": {
    "pos": "adv.",
    "en_def": "close to a particular number, measurement, or time, but not completely exact",
    "cn_def": "大約；大概",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "close to a particular number, measurement, or time, but not completely exact",
        "cn_def": "大約；大概"
      }
    ]
  },
  "tough": {
    "pos": "adj.",
    "en_def": "difficult to deal with, severe, or physically strong and durable",
    "cn_def": "艱難的；堅韌的；強硬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "difficult to deal with, severe, or physically strong and durable",
        "cn_def": "艱難的；堅韌的；強硬的"
      }
    ]
  },
  "have a tough time": {
    "pos": "phr.",
    "en_def": "to experience great difficulty, distress, or discomfort while performing a task",
    "cn_def": "經歷艱難的時光；過得很辛苦",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to experience great difficulty, distress, or discomfort while performing a task",
        "cn_def": "經歷艱難的時光；過得很辛苦"
      }
    ]
  },
  "tough opponent": {
    "pos": "n.",
    "en_def": "a highly skilled, strong, or competitive rival who is difficult to defeat",
    "cn_def": "強勁的對手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly skilled, strong, or competitive rival who is difficult to defeat",
        "cn_def": "強勁的對手"
      }
    ]
  },
  "tough question": {
    "pos": "n.",
    "en_def": "a highly complex problem or inquiry that requires deep thought to answer correctly",
    "cn_def": "棘手的問題；難題",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly complex problem or inquiry that requires deep thought to answer correctly",
        "cn_def": "棘手的問題；難題"
      }
    ]
  },
  "political": {
    "pos": "adj.",
    "en_def": "relating to the government, public affairs, or the state of a nation",
    "cn_def": "政治的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the government, public affairs, or the state of a nation",
        "cn_def": "政治的"
      }
    ]
  },
  "politically": {
    "pos": "adv.",
    "en_def": "in a way that relates to the government or public affairs of a nation",
    "cn_def": "政治上地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to the government or public affairs of a nation",
        "cn_def": "政治上地"
      }
    ]
  },
  "politics": {
    "pos": "n.",
    "en_def": "the activities associated with the governance of a country or area",
    "cn_def": "政治；政治學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the activities associated with the governance of a country or area",
        "cn_def": "政治；政治學"
      }
    ]
  },
  "politicians": {
    "pos": "n.",
    "en_def": "a person who is professionally involved in politics, especially as an elected official",
    "cn_def": "政治家；政客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is professionally involved in politics, especially as an elected official",
        "cn_def": "政治家；政客"
      }
    ]
  },
  "politician": {
    "pos": "n.",
    "en_def": "a person who is professionally involved in politics, especially as an elected official",
    "cn_def": "政治家；政客",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is professionally involved in politics, especially as an elected official",
        "cn_def": "政治家；政客"
      }
    ]
  },
  "political figure": {
    "pos": "n.",
    "en_def": "a person who is well-known and influential in the arena of government and public affairs",
    "cn_def": "政治人物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is well-known and influential in the arena of government and public affairs",
        "cn_def": "政治人物"
      }
    ]
  },
  "celebrity": {
    "pos": "n.",
    "en_def": "a famous person, especially in the entertainment, sports, or movie industry",
    "cn_def": "名人；明星",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a famous person, especially in the entertainment, sports, or movie industry",
        "cn_def": "名人；明星"
      }
    ]
  },
  "celebrated": {
    "pos": "adj.",
    "en_def": "famous, well-known, and highly praised for outstanding skills or achievements",
    "cn_def": "著名的；馳名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "famous, well-known, and highly praised for outstanding skills or achievements",
        "cn_def": "著名的；馳名的"
      }
    ]
  },
  "internet celebrity": {
    "pos": "n.",
    "en_def": "a person who has become famous online, typically through videos or blogs",
    "cn_def": "網路紅人（網紅）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who has become famous online, typically through videos or blogs",
        "cn_def": "網路紅人（網紅）"
      }
    ]
  },
  "social media influencer": {
    "pos": "n.",
    "en_def": "a person with the ability to influence potential buyers of a product by promoting items on social media",
    "cn_def": "社群媒體網紅/影響者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person with the ability to influence potential buyers of a product by promoting items on social media",
        "cn_def": "社群媒體網紅/影響者"
      }
    ]
  },
  "handicapped": {
    "pos": "adj.",
    "en_def": "having a physical or mental condition that limits some regular movements",
    "cn_def": "殘障的；有障礙的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a physical or mental condition that limits some regular movements",
        "cn_def": "殘障的；有障礙的"
      }
    ]
  },
  "disabled": {
    "pos": "adj.",
    "en_def": "having a physical or mental condition that limits a person's movements, senses, or activities",
    "cn_def": "殘障的；有身心障礙的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a physical or mental condition that limits a person's movements, senses, or activities",
        "cn_def": "殘障的；有身心障礙的"
      }
    ]
  },
  "aspect": {
    "pos": "n.",
    "en_def": "a particular part, feature, or characteristic of a complex matter",
    "cn_def": "面向；方面",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular part, feature, or characteristic of a complex matter",
        "cn_def": "面向；方面"
      }
    ]
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a particular way of considering something; a point of view or mental outlook",
    "cn_def": "觀點；視角；想法",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a particular way of considering something; a point of view or mental outlook",
        "cn_def": "觀點；視角；想法"
      }
    ]
  },
  "prospect": {
    "pos": "n.",
    "en_def": "the possibility or likelihood of some future event occurring successfully",
    "cn_def": "前景；展望；可能性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the possibility or likelihood of some future event occurring successfully",
        "cn_def": "前景；展望；可能性"
      }
    ]
  },
  "prospective": {
    "pos": "adj.",
    "en_def": "expected or likely to happen in the future, or being a potential customer or student",
    "cn_def": "預期的；潛在的；未來的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expected or likely to happen in the future, or being a potential customer or student",
        "cn_def": "預期的；潛在的；未來的"
      }
    ]
  },
  "prospective customer / potential customer": {
    "pos": "n.",
    "en_def": "a person who is likely to buy a company's products or services in the near future",
    "cn_def": "潛在客戶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is likely to buy a company's products or services in the near future",
        "cn_def": "潛在客戶"
      }
    ]
  },
  "prospective customer": {
    "pos": "n.",
    "en_def": "a person who is likely to buy a company's products or services in the near future",
    "cn_def": "潛在客戶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is likely to buy a company's products or services in the near future",
        "cn_def": "潛在客戶"
      }
    ]
  },
  "target audience": {
    "pos": "n.",
    "en_def": "the specific group of consumers most likely to want a company's product or service",
    "cn_def": "目標受眾；目標群體",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the specific group of consumers most likely to want a company's product or service",
        "cn_def": "目標受眾；目標群體"
      }
    ]
  },
  "appeared": {
    "pos": "v.",
    "en_def": "to become visible; to come into sight or exist in a specific place",
    "cn_def": "出現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become visible; to come into sight or exist in a specific place",
        "cn_def": "出現"
      }
    ]
  },
  "appear": {
    "pos": "v.",
    "en_def": "to become visible; to come into sight or exist in a specific place",
    "cn_def": "出現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become visible; to come into sight or exist in a specific place",
        "cn_def": "出現"
      },
      {
        "pos": "v.",
        "en_def": "to give a choice impression of being significant; to seem to be true",
        "cn_def": "似乎；好像"
      }
    ]
  },
  "appearance": {
    "pos": "n.",
    "en_def": "the way that someone or something looks on the outside to others",
    "cn_def": "外表；外觀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the way that someone or something looks on the outside to others",
        "cn_def": "外表；外觀"
      }
    ]
  },
  "disappear": {
    "pos": "v.",
    "en_def": "to vanish from sight; to stop existing or being group available",
    "cn_def": "消失",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to vanish from sight; to stop existing or being group available",
        "cn_def": "消失"
      }
    ]
  },
  "disappearance": {
    "pos": "n.",
    "en_def": "an unexpected event in which someone or something vanishes completely",
    "cn_def": "消失（名詞）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an unexpected event in which someone or something vanishes completely",
        "cn_def": "消失（名詞）"
      }
    ]
  },
  "disgusted": {
    "pos": "adj.",
    "en_def": "feeling strong disapproval, dislike, or nausea toward an offensive situation",
    "cn_def": "感到噁心的；反感的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling strong disapproval, dislike, or nausea toward an offensive situation",
        "cn_def": "感到噁心的；反感的"
      }
    ]
  },
  "disgusting": {
    "pos": "adj.",
    "en_def": "extremely unpleasant, unacceptable, or offensive, causing strong dislike",
    "cn_def": "令人噁心的；糟糕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "extremely unpleasant, unacceptable, or offensive, causing strong dislike",
        "cn_def": "令人噁心的；糟糕的"
      }
    ]
  },
  "nasty": {
    "pos": "adj.",
    "en_def": "highly unpleasant, offensive, or unkind in general behavior",
    "cn_def": "惡劣的；差勁的；下流的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly unpleasant, offensive, or unkind in general behavior",
        "cn_def": "惡劣的；差勁的；下流的"
      }
    ]
  },
  "please": {
    "pos": "v.",
    "en_def": "to make someone feel happy, content, or thoroughly satisfied",
    "cn_def": "使高興；使滿意；取悅",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel happy, content, or thoroughly satisfied",
        "cn_def": "使高興；使滿意；取悅"
      }
    ]
  },
  "pleased": {
    "pos": "adj.",
    "en_def": "feeling happy, content, or satisfied with a specific situation or outcome",
    "cn_def": "感到高興的；滿意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling happy, content, or satisfied with a specific situation or outcome",
        "cn_def": "感到高興的；滿意的"
      }
    ]
  },
  "delighted": {
    "pos": "adj.",
    "en_def": "exceptionally pleased or happy about a specific event, outcome, or piece of news",
    "cn_def": "感到欣喜的；非常高興的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "exceptionally pleased or happy about a specific event, outcome, or piece of news",
        "cn_def": "感到欣喜的；非常高興的"
      }
    ]
  },
  "pleasant": {
    "pos": "adj.",
    "en_def": "giving a sense of happy satisfaction, enjoyment, or comfort",
    "cn_def": "令人愉快的；舒適的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "giving a sense of happy satisfaction, enjoyment, or comfort",
        "cn_def": "令人愉快的；舒適的"
      }
    ]
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "a feeling of happy satisfaction, enjoyment, or contentment",
    "cn_def": "樂趣；喜悅；榮幸",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of happy satisfaction, enjoyment, or contentment",
        "cn_def": "樂趣；喜悅；榮幸"
      }
    ]
  },
  "pressure": {
    "pos": "n.",
    "en_def": "the continuous force weight applied against an object; mental stress or urgency",
    "cn_def": "壓力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the continuous force weight applied against an object; mental stress or urgency",
        "cn_def": "壓力"
      }
    ]
  },
  "peer pressure": {
    "pos": "n.",
    "en_def": "strong influence from members of one's matching peer group to behave in a specific way",
    "cn_def": "同儕壓力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "strong influence from members of one's matching peer group to behave in a specific way",
        "cn_def": "同儕壓力"
      }
    ]
  },
  "press": {
    "pos": "v.",
    "en_def": "to push something firmly; to forcefully repetitive try to persuade someone to do an action",
    "cn_def": "按；壓；逼迫",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to push something firmly; to forcefully repetitive try to persuade someone to do an action",
        "cn_def": "按；壓；逼迫"
      },
      {
        "pos": "n.",
        "en_def": "newspapers, magazines, and news journalists blocks viewed as a single group",
        "cn_def": "媒體；新聞界"
      }
    ]
  },
  "hateful": {
    "pos": "adj.",
    "en_def": "expressing severe hatred, malice, or strong disapproval",
    "cn_def": "充滿恨意的；可惡的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expressing severe hatred, malice, or strong disapproval",
        "cn_def": "充滿恨意的；可惡的"
      }
    ]
  },
  "mock": {
    "pos": "v.",
    "en_def": "to tease or laugh at someone in a cruel or unkind manner",
    "cn_def": "嘲笑；嘲弄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tease or laugh at someone in a cruel or unkind manner",
        "cn_def": "嘲笑；嘲弄"
      },
      {
        "pos": "adj.",
        "en_def": "not authentic or real, but manufactured to look like the real object for practice",
        "cn_def": "模擬的；假裝的"
      }
    ]
  },
  "mocked": {
    "pos": "v.",
    "en_def": "to tease or laugh at someone in a cruel or unkind manner",
    "cn_def": "嘲笑；嘲弄",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to tease or laugh at someone in a cruel or unkind manner",
        "cn_def": "嘲笑；嘲弄"
      }
    ]
  },
  "mockery": {
    "pos": "n.",
    "en_def": "cruel or unkind behavior or language that makes fun of someone or something",
    "cn_def": "嘲笑；嘲弄；愚弄",
    "combined": [
      {
        "pos": "n.",
        "en_def": "cruel or unkind behavior or language that makes fun of someone or something",
        "cn_def": "嘲笑；嘲弄；愚弄"
      }
    ]
  },
  "mock test": {
    "pos": "n.",
    "en_def": "a preliminary examination taken for practice before a critical official exam",
    "cn_def": "模擬測驗；模擬考",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a preliminary examination taken for practice before a critical official exam",
        "cn_def": "模擬測驗；模擬考"
      }
    ]
  },
  "simulation": {
    "pos": "n.",
    "en_def": "the technique of duplicating the behavior of a real-world process or situation for practice",
    "cn_def": "模擬；情境模擬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the technique of duplicating the behavior of a real-world process or situation for practice",
        "cn_def": "模擬；情境模擬"
      }
    ]
  },
  "simulated": {
    "pos": "adj.",
    "en_def": "manufactured to look, feel, or behave like the real object for training or practice",
    "cn_def": "模擬的；仿效的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "manufactured to look, feel, or behave like the real object for training or practice",
        "cn_def": "模擬的；仿效的"
      }
    ]
  },
  "ridicule": {
    "pos": "n.",
    "en_def": "the subjection of someone or something to contemptuous and dismissive language",
    "cn_def": "嘲弄；挖苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the subjection of someone or something to contemptuous and dismissive language",
        "cn_def": "嘲弄；挖苦"
      }
    ]
  },
  "ridiculous": {
    "pos": "adj.",
    "en_def": "deserving or inviting derision or mockery; completely absurd or unreasonable",
    "cn_def": "荒謬的；可笑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deserving or inviting derision or mockery; completely absurd or unreasonable",
        "cn_def": "荒謬的；可笑的"
      }
    ]
  },
  "race": {
    "pos": "n.",
    "en_def": "a group of people sharing the same culture, history, language, or physical ethnicity",
    "cn_def": "種族",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a group of people sharing the same culture, history, language, or physical ethnicity",
        "cn_def": "種族"
      },
      {
        "pos": "n.",
        "en_def": "a competition of high speed; a group of people sharing a distinctive cultural heritage",
        "cn_def": "比賽"
      }
    ]
  },
  "racial": {
    "pos": "adj.",
    "en_def": "relating to a shared background, ethnicity, or genetic heritage",
    "cn_def": "種族的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to a shared background, ethnicity, or genetic heritage",
        "cn_def": "種族的"
      }
    ]
  },
  "racial discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
    "cn_def": "種族歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "unfair treatment of a person or group based strictly on their ethnicity",
        "cn_def": "種族歧視"
      }
    ]
  },
  "racially": {
    "pos": "adv.",
    "en_def": "in a way that relates to shared background, ethnicity, or genetic heritage",
    "cn_def": "在種族上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that relates to shared background, ethnicity, or genetic heritage",
        "cn_def": "在種族上"
      }
    ]
  },
  "racism": {
    "pos": "n.",
    "en_def": "prejudice, discrimination, or antagonism directed against someone of a different race",
    "cn_def": "種族主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "prejudice, discrimination, or antagonism directed against someone of a different race",
        "cn_def": "種族主義"
      }
    ]
  },
  "insult": {
    "pos": "v.",
    "en_def": "to speak to or treat someone with disrespect or offensive language",
    "cn_def": "侮辱；羞辱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak to or treat someone with disrespect or offensive language",
        "cn_def": "侮辱；羞辱"
      },
      {
        "pos": "n.",
        "en_def": "a disrespectful or highly offensive remark or action that causes hurt feelings",
        "cn_def": "侮辱；無禮的話"
      }
    ]
  },
  "insulted": {
    "pos": "v.",
    "en_def": "to speak to or treat someone with disrespect or offensive language",
    "cn_def": "侮辱；羞辱",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to speak to or treat someone with disrespect or offensive language",
        "cn_def": "侮辱；羞辱"
      }
    ]
  },
  "add insult to injury": {
    "pos": "phr.",
    "en_def": "to make a bad situation even worse by performing another offensive action",
    "cn_def": "雪上加霜；傷口上灑鹽",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a bad situation even worse by performing another offensive action",
        "cn_def": "雪上加霜；傷口上灑鹽"
      }
    ]
  },
  "insulting": {
    "pos": "adj.",
    "en_def": "disrespectful or scornful deeply; causing a person to feel humiliated or degraded",
    "cn_def": "侮辱人的；無禮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "disrespectful or scornful deeply; causing a person to feel humiliated or degraded",
        "cn_def": "侮辱人的；無禮的"
      }
    ]
  },
  "disrespectful": {
    "pos": "adj.",
    "en_def": "showing a distinct lack of respect, courtesy, or politeness toward someone or something",
    "cn_def": "不敬的；無禮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a distinct lack of respect, courtesy, or politeness toward someone or something",
        "cn_def": "不敬的；無禮的"
      }
    ]
  },
  "abuse": {
    "pos": "n.",
    "en_def": "cruel, violent, or highly offensive treatment of a person or animal",
    "cn_def": "虐待；辱罵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "cruel, violent, or highly offensive treatment of a person or animal",
        "cn_def": "虐待；辱罵"
      }
    ]
  },
  "compliment": {
    "pos": "n.",
    "en_def": "a polite expression of praise, admiration, or respect",
    "cn_def": "稱讚；恭維",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a polite expression of praise, admiration, or respect",
        "cn_def": "稱讚；恭維"
      }
    ]
  },
  "chairman": {
    "pos": "n.",
    "en_def": "a person chosen to conduct and direct the proceedings of an official meeting",
    "cn_def": "主席",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person chosen to conduct and direct the proceedings of an official meeting",
        "cn_def": "主席"
      }
    ]
  },
  "gender": {
    "pos": "n.",
    "en_def": "the state of being male or female, typically expressed in relation to social structures",
    "cn_def": "性別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being male or female, typically expressed in relation to social structures",
        "cn_def": "性別"
      }
    ]
  },
  "meaning": {
    "pos": "n.",
    "en_def": "what is intended to be expressed or understood by something",
    "cn_def": "意義；含義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "what is intended to be expressed or understood by something",
        "cn_def": "意義；含義"
      }
    ]
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "having a serious, important, or useful quality or purpose; filled with significance",
    "cn_def": "有意義的；深遠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a serious, important, or useful quality or purpose; filled with significance",
        "cn_def": "有意義的；深遠的"
      }
    ]
  },
  "meaningless": {
    "pos": "adj.",
    "en_def": "having no meaning, purpose, or real value; completely useless",
    "cn_def": "毫無意義的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no meaning, purpose, or real value; completely useless",
        "cn_def": "毫無意義的"
      }
    ]
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal address or discourse delivered to an audience; the faculty of expressing thoughts",
    "cn_def": "演講；言論；說話能力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a formal address or discourse delivered to an audience; the faculty of expressing thoughts",
        "cn_def": "演講；言論；說話能力"
      }
    ]
  },
  "speechless": {
    "pos": "adj.",
    "en_def": "unable to speak temporarily due to great surprise, anger, or strong emotion",
    "cn_def": "說不出話的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "unable to speak temporarily due to great surprise, anger, or strong emotion",
        "cn_def": "說不出話的"
      }
    ]
  },
  "thought": {
    "pos": "n.",
    "en_def": "an idea, opinion, or product of mental thinking present in the mind",
    "cn_def": "想法；思想",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an idea, opinion, or product of mental thinking present in the mind",
        "cn_def": "想法；思想"
      }
    ]
  },
  "thoughtful": {
    "pos": "adj.",
    "en_def": "showing consideration for the needs of other people, or showing careful deep thought",
    "cn_def": "體貼的；深思熟慮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing consideration for the needs of other people, or showing careful deep thought",
        "cn_def": "體貼的；深思熟慮的"
      }
    ]
  },
  "thoughtless": {
    "pos": "adj.",
    "en_def": "showing a lack of care or consideration for other people's feelings",
    "cn_def": "粗心的；輕率的；不顧及他人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a lack of care or consideration for other people's feelings",
        "cn_def": "粗心的；輕率的；不顧及他人的"
      }
    ]
  },
  "worth": {
    "pos": "n.",
    "en_def": "the value or central importance of a person, object, or system",
    "cn_def": "價值",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the value or central importance of a person, object, or system",
        "cn_def": "價值"
      },
      {
        "pos": "phr.",
        "en_def": "deserving to be treated or considered in a specific way due to its high value or importance",
        "cn_def": "值得...的（後接動名詞）"
      }
    ]
  },
  "worth ving": {
    "pos": "phr.",
    "en_def": "deserving to be treated or considered in a specific way due to its high value or importance",
    "cn_def": "值得...的（後接動名詞）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "deserving to be treated or considered in a specific way due to its high value or importance",
        "cn_def": "值得...的（後接動名詞）"
      }
    ]
  },
  "worthy of": {
    "pos": "adj phr.",
    "en_def": "deserving effort, attention, or respect based on specific qualities or standards",
    "cn_def": "值得...的；配得上...的",
    "combined": [
      {
        "pos": "adj phr.",
        "en_def": "deserving effort, attention, or respect based on specific qualities or standards",
        "cn_def": "值得...的；配得上...的"
      }
    ]
  },
  "worthless": {
    "pos": "adj.",
    "en_def": "having no financial value or practical use; completely useless",
    "cn_def": "毫無價值的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having no financial value or practical use; completely useless",
        "cn_def": "毫無價值的"
      }
    ]
  },
  "publish": {
    "pos": "v.",
    "en_def": "to officially prepare and issue a book, journal, or piece of music for public sale",
    "cn_def": "出版；發行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially prepare and issue a book, journal, or piece of music for public sale",
        "cn_def": "出版；發行"
      }
    ]
  },
  "publisher": {
    "pos": "n.",
    "en_def": "a person or company that prepares and issues books or journals for sale",
    "cn_def": "出版社；發行商",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person or company that prepares and issues books or journals for sale",
        "cn_def": "出版社；發行商"
      }
    ]
  },
  "publication": {
    "pos": "n.",
    "en_def": "the act of publishing a book or magazine, or the approved copy itself",
    "cn_def": "出版物；發行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of publishing a book or magazine, or the approved copy itself",
        "cn_def": "出版物；發行"
      }
    ]
  },
  "publications": {
    "pos": "n.",
    "en_def": "the act of publishing a book or magazine, or the approved copy itself",
    "cn_def": "出版物；發行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of publishing a book or magazine, or the approved copy itself",
        "cn_def": "出版物；發行"
      }
    ]
  },
  "publishing": {
    "pos": "n.",
    "en_def": "the business or profession of issuing printed materials or digital software",
    "cn_def": "出版業",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the business or profession of issuing printed materials or digital software",
        "cn_def": "出版業"
      }
    ]
  },
  "feminine": {
    "pos": "adj.",
    "en_def": "having qualities or features traditionally associated with women",
    "cn_def": "女性的；女性化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having qualities or features traditionally associated with women",
        "cn_def": "女性的；女性化的"
      }
    ]
  },
  "masculine": {
    "pos": "adj.",
    "en_def": "having qualities or features traditionally associated with men",
    "cn_def": "男性的；男性化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having qualities or features traditionally associated with men",
        "cn_def": "男性的；男性化的"
      }
    ]
  },
  "feminism": {
    "pos": "n.",
    "en_def": "the advocacy of women's rights on the basis of the equality of the sexes",
    "cn_def": "女性主義",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the advocacy of women's rights on the basis of the equality of the sexes",
        "cn_def": "女性主義"
      }
    ]
  },
  "feminist": {
    "pos": "n.",
    "en_def": "a person who supports the advocacy of women's rights and equality",
    "cn_def": "女性主義者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who supports the advocacy of women's rights and equality",
        "cn_def": "女性主義者"
      }
    ]
  },
  "generation": {
    "pos": "n.",
    "en_def": "all of the people born and living at about the same time within a family or society",
    "cn_def": "世代",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all of the people born and living at about the same time within a family or society",
        "cn_def": "世代"
      }
    ]
  },
  "generations": {
    "pos": "n.",
    "en_def": "all of the people born and living at about the same time within a family or society",
    "cn_def": "世代",
    "combined": [
      {
        "pos": "n.",
        "en_def": "all of the people born and living at about the same time within a family or society",
        "cn_def": "世代"
      }
    ]
  },
  "from generation to generation": {
    "pos": "phr.",
    "en_def": "passed down through time from traditional parents to their children",
    "cn_def": "代代相傳",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "passed down through time from traditional parents to their children",
        "cn_def": "代代相傳"
      }
    ]
  },
  "generate": {
    "pos": "v.",
    "en_def": "to cause a status or emotion to arise, or to produce energy or cash",
    "cn_def": "產生；發電；造成",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause a status or emotion to arise, or to produce energy or cash",
        "cn_def": "產生；發電；造成"
      }
    ]
  },
  "regeneration": {
    "pos": "n.",
    "en_def": "the process of renewing, restoring, or regrowing damaged structures or communities",
    "cn_def": "再生；復興",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the process of renewing, restoring, or regrowing damaged structures or communities",
        "cn_def": "再生；復興"
      }
    ]
  },
  "prior": {
    "pos": "adj.",
    "en_def": "existing or coming before in time, order, or central importance",
    "cn_def": "先前的；事前的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "existing or coming before in time, order, or central importance",
        "cn_def": "先前的；事前的"
      }
    ]
  },
  "prior to": {
    "pos": "phr.",
    "en_def": "happening or existing before a specific time, date, or event",
    "cn_def": "在...之前",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "happening or existing before a specific time, date, or event",
        "cn_def": "在...之前"
      }
    ]
  },
  "priority": {
    "pos": "n.",
    "en_def": "the status of being established as most important on a list of goals",
    "cn_def": "優先事項",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the status of being established as most important on a list of goals",
        "cn_def": "優先事項"
      }
    ]
  },
  "majority": {
    "pos": "n.",
    "en_def": "the greater number or part of a specific group, more than half",
    "cn_def": "大多數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the greater number or part of a specific group, more than half",
        "cn_def": "大多數"
      }
    ]
  },
  "minority": {
    "pos": "n.",
    "en_def": "the smaller number or part of a group, less than half",
    "cn_def": "少數；少數民族",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the smaller number or part of a group, less than half",
        "cn_def": "少數；少數民族"
      }
    ]
  },
  "major": {
    "pos": "adj.",
    "en_def": "important, serious, or significant in size, amount, or degree",
    "cn_def": "主要的；重大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "important, serious, or significant in size, amount, or degree",
        "cn_def": "主要的；重大的"
      }
    ]
  },
  "commonplace": {
    "pos": "adj.",
    "en_def": "ordinary; happening frequently or seen regularly, not presenting any surprise",
    "cn_def": "普遍的；司空見慣的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ordinary; happening frequently or seen regularly, not presenting any surprise",
        "cn_def": "普遍的；司空見慣的"
      }
    ]
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not occurring frequently; exceptionally valuable because of being uncommon",
    "cn_def": "罕見的；稀有的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not occurring frequently; exceptionally valuable because of being uncommon",
        "cn_def": "罕見的；稀有的"
      }
    ]
  },
  "scream": {
    "pos": "v.",
    "en_def": "to give a long, loud, piercing cry expressing extreme emotion or alarm",
    "cn_def": "尖叫；驚呼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a long, loud, piercing cry expressing extreme emotion or alarm",
        "cn_def": "尖叫；驚呼"
      },
      {
        "pos": "n.",
        "en_def": "a long, loud, piercing cry caused by surprise, fright, or deep distress",
        "cn_def": "尖叫聲"
      }
    ]
  },
  "screamed": {
    "pos": "v.",
    "en_def": "to give a long, loud, piercing cry expressing extreme emotion or alarm",
    "cn_def": "尖叫；驚呼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a long, loud, piercing cry expressing extreme emotion or alarm",
        "cn_def": "尖叫；驚呼"
      }
    ]
  },
  "shriek": {
    "pos": "n. v.",
    "en_def": "a high-pitched pierce cry or a loud shout expressing strong emotion",
    "cn_def": "尖叫聲 / 喊叫",
    "combined": [
      {
        "pos": "n. v.",
        "en_def": "a high-pitched pierce cry or a loud shout expressing strong emotion",
        "cn_def": "尖叫聲 / 喊叫"
      }
    ]
  },
  "shriek / yell": {
    "pos": "n. v.",
    "en_def": "a high-pitched pierce cry or a loud shout expressing strong emotion",
    "cn_def": "尖叫聲 / 喊叫",
    "combined": [
      {
        "pos": "n. v.",
        "en_def": "a high-pitched pierce cry or a loud shout expressing strong emotion",
        "cn_def": "尖叫聲 / 喊叫"
      }
    ]
  },
  "permit": {
    "pos": "v.",
    "en_def": "to officially allow someone to perform an action or enter a place",
    "cn_def": "允許；准許",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to officially allow someone to perform an action or enter a place",
        "cn_def": "允許；准許"
      }
    ]
  },
  "permission": {
    "pos": "n.",
    "en_def": "official approval to perform an action or enter a restricted area",
    "cn_def": "允許；許可",
    "combined": [
      {
        "pos": "n.",
        "en_def": "official approval to perform an action or enter a restricted area",
        "cn_def": "允許；許可"
      }
    ]
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "able to be reached, entered, or used easily by choice people",
    "cn_def": "易於接近的；可使用的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be reached, entered, or used easily by choice people",
        "cn_def": "易於接近的；可使用的"
      }
    ]
  },
  "intent": {
    "pos": "n.",
    "en_def": "a clear purpose or intention, especially a legal determination to perform an action",
    "cn_def": "意圖；目的",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a clear purpose or intention, especially a legal determination to perform an action",
        "cn_def": "意圖；目的"
      }
    ]
  },
  "intend": {
    "pos": "v.",
    "en_def": "to have a plan, result, or purpose in mind when doing a specific action",
    "cn_def": "想要；打算；計意",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have a plan, result, or purpose in mind when doing a specific action",
        "cn_def": "想要；打算；計意"
      }
    ]
  },
  "intends to": {
    "pos": "phr.",
    "en_def": "to plan or purpose to perform a specific action or achieve a milestone in the future",
    "cn_def": "打算做...（後接原形動詞）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to plan or purpose to perform a specific action or achieve a milestone in the future",
        "cn_def": "打算做...（後接原形動詞）"
      }
    ]
  },
  "intend to v": {
    "pos": "phr.",
    "en_def": "to plan or purpose to perform a specific action or achieve a milestone in the future",
    "cn_def": "打算做...（後接原形動詞）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to plan or purpose to perform a specific action or achieve a milestone in the future",
        "cn_def": "打算做...（後接原形動詞）"
      }
    ]
  },
  "intention": {
    "pos": "n.",
    "en_def": "an aim, plan, or purpose that guides a person's conscious actions",
    "cn_def": "意圖；打算",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an aim, plan, or purpose that guides a person's conscious actions",
        "cn_def": "意圖；打算"
      }
    ]
  },
  "intentional": {
    "pos": "adj.",
    "en_def": "deliberate; done on purpose rather than by an accidental mistake",
    "cn_def": "有意的；故意的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deliberate; done on purpose rather than by an accidental mistake",
        "cn_def": "有意的；故意的"
      }
    ]
  },
  "noble": {
    "pos": "adj.",
    "en_def": "having or showing fine personal qualities or high moral principles; aristocratic",
    "cn_def": "高尚的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing fine personal qualities or high moral principles; aristocratic",
        "cn_def": "高尚的"
      },
      {
        "pos": "n.",
        "en_def": "a person of noble rank or aristocratic birth in a traditional society",
        "cn_def": "貴族"
      }
    ]
  },
  "nobles": {
    "pos": "n.",
    "en_def": "a person of noble rank or aristocratic birth in a traditional society",
    "cn_def": "貴族",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person of noble rank or aristocratic birth in a traditional society",
        "cn_def": "貴族"
      }
    ]
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
    "cn_def": "歧視；區分",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to treat a person or group unfairly based on their ethnicity, age, or gender",
        "cn_def": "歧視；區分"
      }
    ]
  },
  "discriminate against": {
    "pos": "phr.",
    "en_def": "to treat a specific individual unfairly due to prejudice or bias",
    "cn_def": "歧視某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat a specific individual unfairly due to prejudice or bias",
        "cn_def": "歧視某人"
      }
    ]
  },
  "discriminate against somebody": {
    "pos": "phr.",
    "en_def": "to treat a specific individual unfairly due to prejudice or bias",
    "cn_def": "歧視某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to treat a specific individual unfairly due to prejudice or bias",
        "cn_def": "歧視某人"
      }
    ]
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "the unjust or prejudicial treatment of different categories of people or things",
    "cn_def": "歧視",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the unjust or prejudicial treatment of different categories of people or things",
        "cn_def": "歧視"
      }
    ]
  },
  "in a ... light": {
    "pos": "phr.",
    "en_def": "viewing a situation or person from a particular perspective or interpretation",
    "cn_def": "以...的角度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "viewing a situation or person from a particular perspective or interpretation",
        "cn_def": "以...的角度"
      }
    ]
  },
  "in a completely new light": {
    "pos": "phr.",
    "en_def": "viewing a situation or person from a particular perspective or interpretation",
    "cn_def": "以...的角度",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "viewing a situation or person from a particular perspective or interpretation",
        "cn_def": "以...的角度"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
