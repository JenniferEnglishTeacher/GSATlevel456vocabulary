// Unit 8 Quiz Data: withdraw – roll one's eyes
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U8 - withdraw – roll one's eyes",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "withdraw",
    "pos": "v.",
    "cn_def": "提款；撤回；退出",
    "en_def": "to take back, remove, or move away from a place or situation",
    "sentence": "Robert decided to {{BLANK}} his bid on the house after finding serious structural problems.",
    "cn": "在發現嚴重的結構問題後，羅伯特決定撤回他對這棟房子的出價。"
  },
  {
    "word": "withdrawal",
    "pos": "n.",
    "cn_def": "提領；撤退；收回",
    "en_def": "the act of taking back or removing something, or taking money from a bank",
    "sentence": "The bank charges a small fee for every {{BLANK}} you make from an international ATM.",
    "cn": "銀行會對您從國際自動提款機進行的每次提款收取少許費用。"
  },
  {
    "word": "withdraw from",
    "pos": "phr.",
    "cn_def": "退出（學校、比賽等）",
    "en_def": "to officially stop participating in a competition, organization, or activity",
    "sentence": "The tennis champion had to {{BLANK}} the tournament due to a sudden knee injury.",
    "cn": "這位網球冠軍因突發的膝蓋傷勢而不得不退出這場錦標賽。"
  },
  {
    "word": "admission",
    "pos": "n.",
    "cn_def": "入場許可；承認；入學",
    "en_def": "the act of agreeing that something is true, or permission to enter a place",
    "sentence": "You need to be 18 to gain {{BLANK}} to this movie because of its violent content.",
    "cn": "由於這部電影含有暴力內容，你必須滿十八歲才能獲得入場許可。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "承認；准許進入",
    "en_def": "to agree that something is true, especially unwillingly",
    "sentence": "Although he didn't want to tell the truth, he had to {{BLANK}} that he made a mistake.",
    "cn": "雖然他不想說出實話，但他不得不承認自己犯了個錯誤。"
  },
  {
    "word": "adjust to",
    "pos": "v.",
    "cn_def": "調整；適應（環境）",
    "en_def": "to change something slightly to make it fit or work better in a new situation",
    "sentence": "It took the international student several months to {{BLANK}} the cold winter weather.",
    "cn": "這位留學生花了幾個月的時間才適應了寒冷的冬季氣候。"
  },
  {
    "word": "adjustment",
    "pos": "n.",
    "cn_def": "調整；適應",
    "en_def": "a small change made to something in order to correct or improve it",
    "sentence": "The employees will go through a period of {{BLANK}} while the new management takes over.",
    "cn": "在新管理層接管期間，員工們將會經歷一段適應期。"
  },
  {
    "word": "adapt to",
    "pos": "phr.",
    "cn_def": "適應...",
    "en_def": "to change one's behavior, routines, or ideas in order to deal successfully with a new situation",
    "sentence": "The newly recruited technology consultants had to {{BLANK}} the fast-paced corporate environment within a few weeks.",
    "cn": "新招募的科技顧問必須在幾週內適應快節奏的公司環境。"
  },
  {
    "word": "adaptation",
    "pos": "n.",
    "cn_def": "（生物學的）適應；適應特徵",
    "en_def": "a dynamic process or physical characteristic that helps an organism survive and reproduce in its environment",
    "sentence": "The biology professor thoroughly explained how evolutionary {{BLANK}} helps rare desert organisms conserve scarce water resources.",
    "cn": "生物學教授詳細解釋了演化上的適應如何幫助罕見的沙漠生物保存稀缺的水資源。"
  },
  {
    "word": "adapted",
    "pos": "adj.",
    "cn_def": "改編的（劇本/作品）",
    "en_def": "modified, rewritten, or altered from an original book or play to make it suitable for a film or stage script",
    "sentence": "The historical drama series is {{BLANK}} from a brilliant award-winning novel written by a prominent local author.",
    "cn": "這部歷史劇集是改編自一位當地著名作家所寫的精彩得獎小說。"
  },
  {
    "word": "based on",
    "pos": "phr.",
    "cn_def": "根據...；基於...",
    "en_def": "utilizing a specific fact, idea, or foundational event as the core ground for something",
    "sentence": "The experienced consultant designed a customizable learning platform {{BLANK}} the students' specific tech preferences.",
    "cn": "這位經驗豐富的顧問根據學生們特定的科技偏好，設計了一個客製化的學習平台。"
  },
  {
    "word": "According to",
    "pos": "phr.",
    "cn_def": "根據...；依照...",
    "en_def": "as stated, reported, or indicated by a particular person, authoritative source, or rule",
    "sentence": "{{BLANK}} the latest financial report, the manufacturing sector exported massive manufactured goods last quarter.",
    "cn": "根據最新的財務報告，製造業上季出口了大量的工業製品。"
  },
  {
    "word": "compared to",
    "pos": "phr.",
    "cn_def": "與...相比",
    "en_def": "examined or evaluated in contrast with another entity to note the relative differences",
    "sentence": "The annual revenue of our technology corporation increased significantly this year {{BLANK}} that of last year.",
    "cn": "與去年相比，我們科技公司今年的年度營收顯著增加。"
  },
  {
    "word": "Judging from",
    "pos": "phr.",
    "cn_def": "從...來看；根據...來判斷",
    "en_def": "forming an opinion or making a logical conclusion based on specific evidence or appearance",
    "sentence": "{{BLANK}} his athletic performance during the training session, the athlete is eager to win the championship.",
    "cn": "從他在訓練期間的運動表現來看，這位運動員非常渴望贏得冠軍。"
  },
  {
    "word": "normal",
    "pos": "adj.",
    "cn_def": "正常的；一般的",
    "en_def": "ordinary or expected; conforming to a standard or regular pattern",
    "sentence": "It was just a {{BLANK}} day at the office until he heard the terrifying scream from down the hall.",
    "cn": "直到他聽到走廊盡頭傳來恐怖的尖叫聲，這本來只是辦公室裡普通的一天。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "異常的；不正常的",
    "en_def": "different from what is usual or expected, typically in a way that is worrying",
    "sentence": "The medical tests showed {{BLANK}} results, so the doctor ordered a series of further examinations.",
    "cn": "醫療檢查顯示出異常的結果，因此醫生安排了一系列進一步的檢查。"
  },
  {
    "word": "Under normal circumstances",
    "pos": "phr.",
    "cn_def": "在正常情況下",
    "en_def": "in ordinary conditions or situations without unexpected events",
    "sentence": "{{BLANK}} I would not need you to help me, but this project is too urgent.",
    "cn": "在正常情況下我是不需要你來幫我的，但這個專案實在太緊急了。"
  },
  {
    "word": "normally",
    "pos": "adv.",
    "cn_def": "通常；正常地",
    "en_def": "usually or in a regular, ordinary way",
    "sentence": "The train {{BLANK}} arrives on time, but today it was delayed by the heavy snowstorm.",
    "cn": "火車通常都會準時抵達，但今天因為暴風雪而延誤了。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "異常的；反常的",
    "en_def": "deviating from what is normal, usual, or expected, typically in a way that is undesirable",
    "sentence": "The automated monitoring system immediately detected an {{BLANK}} temperature spike inside the primary database server.",
    "cn": "自動化監控系統立刻在主要資料庫伺服器內部偵測到異常的溫度飆升。"
  },
  {
    "word": "anomaly",
    "pos": "n.",
    "cn_def": "異常事物；不正常現象",
    "en_def": "something that deviates from what is standard, normal, or expected; an irregularity",
    "sentence": "The senior financial analyst noticed a strange {{BLANK}} in the corporation's annual revenue records last night.",
    "cn": "資深財務分析師昨晚在公司的年度營收紀錄中注意到一個奇怪的異常現象。"
  },
  {
    "word": "canons",
    "pos": "n.",
    "cn_def": "大砲",
    "en_def": "a large, powerful gun fixed to two wheels, used in old warfare",
    "sentence": "Old {{BLANK}} were placed all around the outside of the castle to protect it from attackers.",
    "cn": "古老的大砲被安置在城堡周圍的各個角落，以保護它免受攻擊者的傷害。"
  },
  {
    "word": "cannonball",
    "pos": "n.",
    "cn_def": "砲彈",
    "en_def": "a round metal or stone ball fired from a cannon",
    "sentence": "The museum displays a heavy iron {{BLANK}} that was found near the battlefield.",
    "cn": "這家博物館展示了一枚在戰場附近被發現的沉重鐵製砲彈。"
  },
  {
    "word": "worthy of",
    "pos": "adj.",
    "cn_def": "值得的；配得上...的",
    "en_def": "deserving effort, attention, or respect",
    "sentence": "Eric is {{BLANK}} being elected president of our class because he always helps others.",
    "cn": "艾瑞克配得上被選為我們班的班長，因為他總是幫助別人。"
  },
  {
    "word": "worth",
    "pos": "adj.",
    "cn_def": "值得；價值...",
    "en_def": "having a particular value, especially in terms of money or importance",
    "sentence": "This car is {{BLANK}} one million NT dollars, but the owner refuses to sell it.",
    "cn": "這輛車價值一百萬新台幣，但車主拒絕將它出售。"
  },
  {
    "word": "worth",
    "pos": "phr.",
    "cn_def": "值得（做某事）",
    "en_def": "deserving to be treated or processed in a specific active way",
    "sentence": "This book is {{BLANK}} reading because it offers valuable insights into modern history.",
    "cn": "這本書非常值得一讀，因為它對現代歷史提供了珍貴的見解。"
  },
  {
    "word": "worthwhile",
    "pos": "adj.",
    "cn_def": "值得花時間/金錢的",
    "en_def": "useful, important, or rewarding enough to be worth the time or money spent",
    "sentence": "Volunteering at the local hospital is a {{BLANK}} experience that will change your perspective.",
    "cn": "在當地醫院擔任志工是一段值得付出的經歷，它會改變你的觀點。"
  },
  {
    "word": "noteworthy",
    "pos": "adj.",
    "cn_def": "值得注意的；顯著的",
    "en_def": "deserving to be noticed or to receive attention because of being important",
    "sentence": "There are several {{BLANK}} changes in the new policy that every employee should study carefully.",
    "cn": "新政策中有幾處值得注意的改變，每位員工都應該仔細研究。"
  },
  {
    "word": "trustworthy",
    "pos": "adj.",
    "cn_def": "值得信賴的；可靠的",
    "en_def": "able to be relied on as honest or truthful",
    "sentence": "You can share your secrets with her because she is a very {{BLANK}} person.",
    "cn": "你可以和她分享你的祕密，因為她是一個非常值得信賴的人。"
  },
  {
    "word": "contested",
    "pos": "v.",
    "cn_def": "爭奪；對...提出質疑",
    "en_def": "to formally object to a statement, decision, or the ownership of something",
    "sentence": "The two countries {{BLANK}} ownership of the trade route for more than three decades.",
    "cn": "這兩個國家對這條貿易路線的所有權爭奪了三十多年。"
  },
  {
    "word": "contest",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "a competition to do better than other people, usually judged by experts",
    "sentence": "Sandra desperately wanted to win the beauty {{BLANK}} to launch her professional modeling career.",
    "cn": "珊卓極渴望贏得這場選美比賽，以展開她的專業模特兒生涯。"
  },
  {
    "word": "contestant",
    "pos": "n.",
    "cn_def": "參賽者",
    "en_def": "a person who takes part in a contest or competition",
    "sentence": "Each {{BLANK}} will have three minutes to present their project to the panel of judges.",
    "cn": "每位參賽者將有三分鐘的時間向評審團簡報他們的專案。"
  },
  {
    "word": "revived",
    "pos": "v.",
    "cn_def": "使復甦；使再度流行",
    "en_def": "to bring something back to life, health, existence, or popularity",
    "sentence": "The successful film {{BLANK}} interest in traditional handicrafts among young generations.",
    "cn": "這部成功的電影在年輕一代中，重新激發了對傳統手工藝的興趣。"
  },
  {
    "word": "revival",
    "pos": "n.",
    "cn_def": "復興；復甦；再現",
    "en_def": "an improvement in the condition or popularity of something",
    "sentence": "The city center is experiencing an economic {{BLANK}} after the opening of the new shopping mall.",
    "cn": "在新購物中心開幕後，市中心正經歷著一場經濟復甦。"
  },
  {
    "word": "captured",
    "pos": "v.",
    "cn_def": "捕捉；捕獲；佔領",
    "en_def": "to catch a person or animal, or to take distinct control of a place",
    "sentence": "The experienced doctors {{BLANK}} the sick bear safely and treated its deep wounds.",
    "cn": "經驗豐富的醫生們安全地捕獲了這隻生病的熊，並治療了牠的深層傷口。"
  },
  {
    "word": "captured the children's imagination",
    "pos": "phr.",
    "cn_def": "擄獲某人的想像力；吸引住某人",
    "en_def": "to interpret or stimulate someone's creative thoughts strongly",
    "sentence": "The creative short story {{BLANK}} during the afternoon library reading session.",
    "cn": "這篇有創意的短篇故事在下午的圖書館閱讀時間裡，擄獲了孩子們的想像力。"
  },
  {
    "word": "scholar",
    "pos": "n.",
    "cn_def": "學者",
    "en_def": "a person who studies an academic subject and knows a lot about it",
    "sentence": "The elderly professor is a visiting {{BLANK}} from a prestigious university in England.",
    "cn": "這位年長的教授是一位來自英國知名學府的訪問學者。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的",
    "en_def": "relating to schools, colleges, and universities, or to connected study",
    "sentence": "The university offers high {{BLANK}} standards and excellent research facilities for its students.",
    "cn": "這所大學為其學生提供高水準的學術規格與優秀的研究設施。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金",
    "en_def": "an amount of money given by a school or organization to pay for studies",
    "sentence": "She received a full {{BLANK}} to study medicine because of her outstanding high school grades.",
    "cn": "由於她優秀的高中成績，她獲得了全額獎學金來攻讀醫學。"
  },
  {
    "word": "scholarly",
    "pos": "adj.",
    "cn_def": "學術性的；博學的",
    "en_def": "containing a lot of deep knowledge, or typical of a serious scholar",
    "sentence": "The journal published a {{BLANK}} article that analyzed the social impact of the industrial revolution.",
    "cn": "這家期刊發表了一篇學術性文章，分析了工業革命所帶來的社會影響。"
  },
  {
    "word": "excel",
    "pos": "adj.",
    "cn_def": "藝術的；有藝術天分的",
    "en_def": "relating to art, or showing skill and imagination in creating beautiful things",
    "sentence": "The {{BLANK}} bowl is meant to be looked at, not to be used as a soup bowl.",
    "cn": "這個具有藝術感的碗是用來觀賞的，而不是用來當作湯碗使用的。"
  },
  {
    "word": "artistic talent",
    "pos": "n.",
    "cn_def": "藝術天分",
    "en_def": "natural ability to create good art, music, or literature",
    "sentence": "Cynthia has no {{BLANK}} at all, but she is very good with financial numbers.",
    "cn": "辛西亞完全沒有藝術天分，但她對財務數字非常拿手。"
  },
  {
    "word": "distinct",
    "pos": "adj.",
    "cn_def": "明顯不同的；清晰的",
    "en_def": "clearly noticeable, separate, or different from others",
    "sentence": "The two species of birds have {{BLANK}} singing patterns that help scientists identify them.",
    "cn": "這兩種鳥類有著明顯不同的鳴叫模式，這有助於科學家們辨識牠們。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "榮譽；優秀；區別",
    "en_def": "a difference between similar things, or an award given for high quality",
    "sentence": "The hard-working student earned a {{BLANK}} for her well-written essay on environmental protection.",
    "cn": "這位努力的學生因其撰寫優秀的環保論文而獲得了榮譽嘉獎。"
  },
  {
    "word": "distinctive",
    "pos": "adj.",
    "cn_def": "有特色的；獨特的",
    "en_def": "having a special feature that makes something easily recognizable",
    "sentence": "The coffee shop is famous for its {{BLANK}} aroma that attracts customers from blocks away.",
    "cn": "這家咖啡廳以其獨特的香氣而聞名，吸引了數個街區外的顧客。"
  },
  {
    "word": "excels in",
    "pos": "v.",
    "cn_def": "擅長；勝過他人",
    "en_def": "to be exceptionally good at or proficient in an activity or subject",
    "sentence": "The young girl {{BLANK}} mathematics and often wins national school competitions.",
    "cn": "這個年輕女孩非常擅長數學，經常在全國學校比賽中獲獎。"
  },
  {
    "word": "sculptor",
    "pos": "n.",
    "cn_def": "雕刻家",
    "en_def": "an artist who creates three-dimensional shapes out of stone, wood, or metal",
    "sentence": "The innovative {{BLANK}} incorporates many different materials like glass and metal into his works.",
    "cn": "這位創新的雕刻家將許多不同的材料（如玻璃和金屬）融入他的作品中。"
  },
  {
    "word": "sculpture",
    "pos": "n.",
    "cn_def": "雕塑品",
    "en_def": "a three-dimensional work of art made by carving or molding material",
    "sentence": "They placed a large marble {{BLANK}} of a horse in the center of the garden.",
    "cn": "他們在花園中央放置了一座大型的大理石馬匹雕塑。"
  },
  {
    "word": "sportsman",
    "pos": "n.",
    "cn_def": "運動員",
    "en_def": "a person who takes part in sports, especially as a professional",
    "sentence": "He has been a keen {{BLANK}} all his life, playing soccer and tennis every weekend.",
    "cn": "他一生都是個熱衷的運動員，每個週末都會踢足球和打網球。"
  },
  {
    "word": "sportsmanship",
    "pos": "n.",
    "cn_def": "運動員精神；風度",
    "en_def": "fair and generous behavior or treatment of others in a sports contest",
    "sentence": "Showing good {{BLANK}} means shaking hands with your opponent after you lose a match.",
    "cn": "展現良好的運動員風度意味著在輸掉比賽後與你的對手握手。"
  },
  {
    "word": "athlete",
    "pos": "n.",
    "cn_def": "運動員",
    "en_def": "a person who is proficient in sports and other forms of physical exercise",
    "sentence": "The dedicated {{BLANK}} trained for hours daily to prepare for the upcoming international sports meet.",
    "cn": "這位敬業的運動員每天訓練數小時，為即將到來的國際運動會做準備。"
  },
  {
    "word": "athletic",
    "pos": "adj.",
    "cn_def": "運動的；體育的；強壯的",
    "en_def": "physically strong, fit, and active, or relating to sports and athletes",
    "sentence": "The school board decided to invest more revenue into upgrading the stadium's {{BLANK}} facilities this year.",
    "cn": "學校董事會決定今年投入更多營收來升級體育場的體育設施。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；聯賽",
    "en_def": "a series of contests between a number of competitors, who compete for an overall prize",
    "sentence": "Thousands of excited fans gathered at the central stadium to watch the final football {{BLANK}}.",
    "cn": "數千名興奮的球迷聚集在中央體育場，觀看這場最終的足球錦標賽。"
  },
  {
    "word": "champion",
    "pos": "n.",
    "cn_def": "冠軍",
    "en_def": "a person, team, or animal that has won a contest or competition, especially in sports",
    "sentence": "The humble tennis player thanked her supportive coach after officially becoming the regional {{BLANK}} last night.",
    "cn": "這位謙遜的網球選手在昨晚正式成為區域冠軍後，向給予支持的教練表示感謝。"
  },
  {
    "word": "championship",
    "pos": "n.",
    "cn_def": "冠軍賽；冠軍稱號",
    "en_def": "a high-level contest held to determine the overall winner or champion of a sport",
    "sentence": "The engineering team won the national robotics {{BLANK}} after presenting their highly innovative automated device.",
    "cn": "這支工程團隊在展示了他們高度創新的自動化裝置後，贏得了全國機器人冠軍賽。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭；比賽",
    "en_def": "to try to be more successful than others in a game, business, or contest",
    "sentence": "Most professional athletes will not {{BLANK}} without warming up thoroughly first.",
    "cn": "大多數專業運動員在沒有先進行徹底的暖身之前，是不會參加比賽的。"
  },
  {
    "word": "competeed for",
    "pos": "phr.",
    "cn_def": "爭奪...",
    "en_def": "to try to win or achieve a specific prize, position, or reward against others",
    "sentence": "The two young businessmen {{BLANK}} the position of regional sales manager.",
    "cn": "這兩位年輕的商人爭奪著區域銷售經理的職位。"
  },
  {
    "word": "compete with",
    "pos": "phr.",
    "cn_def": "與...競爭",
    "en_def": "to struggle against a specific rival or opponent to achieve a goal",
    "sentence": "Our small company has to {{BLANK}} large international corporations in the market.",
    "cn": "我們的小公司在市場上必須與大型的國際企業進行競爭。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "競爭；比賽",
    "en_def": "an organized event in which people try to win, or the act of competing",
    "sentence": "The local school hosted a chess {{BLANK}} that attracted students from all over the city.",
    "cn": "當地學校舉辦了一場西洋棋比賽，吸引了來自全市各地的學生。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "競爭激烈的；好勝的",
    "en_def": "involving competition, or having a strong desire to win or be successful",
    "sentence": "This university is highly {{BLANK}} since it doesn't accept many international students.",
    "cn": "這所大學的競爭非常激烈，因為它不接受太多國際學生。"
  },
  {
    "word": "competitors",
    "pos": "n.",
    "cn_def": "競爭者；對手",
    "en_def": "a person, team, or company that takes part in a commercial or sports competition",
    "sentence": "Ten {{BLANK}} will swim against each时 other in the final race tomorrow morning.",
    "cn": "十名競爭者將在明天早上的決賽中彼此進行游泳比賽。"
  },
  {
    "word": "contest",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "a competition, game, or speech match in which people try to win a specific prize",
    "sentence": "The prominent technology corporation sponsored a national programming {{BLANK}} to discover young engineering talents.",
    "cn": "這家著名的科技公司贊助了一項全國程式設計比賽，以發掘年輕的工程人才。"
  },
  {
    "word": "contestant",
    "pos": "n.",
    "cn_def": "參賽者；競爭者",
    "en_def": "a person who takes part in a game, competition, or contest to strive for victory",
    "sentence": "Every single {{BLANK}} in the speech competition received customizable feedback from the supportive coordinator.",
    "cn": "演講比賽中的每一位參賽者都從給予支持的協調員那裡獲得了客製化的回饋。"
  },
  {
    "word": "hover",
    "pos": "v.",
    "cn_def": "盤旋",
    "en_def": "to stay in one place in the air, flying without moving forward",
    "sentence": "Some small insects can {{BLANK}} in the air, while others have to keep moving forward.",
    "cn": "一些小昆蟲可以在空中盤旋，而其他昆蟲則必須不斷向前移動。"
  },
  {
    "word": "hovered over",
    "pos": "phr.",
    "cn_def": "在...上空盤旋",
    "en_def": "to stay suspended in the air directly above a specific object or area",
    "sentence": "The rescue helicopter {{BLANK}} the exact area where the young diver went missing.",
    "cn": "救援直升機在年輕潛水員失蹤的確切區域上空盤旋。"
  },
  {
    "word": "crater",
    "pos": "n.",
    "cn_def": "火山口；隕石坑",
    "en_def": "a large, bowl-shaped cavity in the ground or on the surface of a planet",
    "sentence": "The heavy meteorite left an immense {{BLANK}} where it struck the rocky ground centuries ago.",
    "cn": "這顆沉重的隕石在數個世紀前撞擊岩石地面處留下了一個巨大的隕石坑。"
  },
  {
    "word": "establish",
    "pos": "v.",
    "cn_def": "建立；設立",
    "en_def": "to start a company, organization, or system that will continue for a long time",
    "sentence": "The successful entrepreneur plans to {{BLANK}} a new research foundation next year.",
    "cn": "這位成功的企業家計劃明年成立一個全新的研究基金會。"
  },
  {
    "word": "established",
    "pos": "adj.",
    "cn_def": "既定的；確立的；著名的",
    "en_def": "generally accepted or familiar, having existed for a long period of time",
    "sentence": "The {{BLANK}} medical community is beginning to study the benefits of traditional herbal medicine.",
    "cn": "著名的醫學界正開始研究傳統草藥醫學的好處。"
  },
  {
    "word": "sprint",
    "pos": "n.",
    "cn_def": "短跑；衝刺",
    "en_def": "a short, fast race in which everyone runs or swims at maximum speed",
    "sentence": "Jason had the fastest time on the track team for the 100-meter {{BLANK}}.",
    "cn": "傑森在田徑隊的一百公尺短跑中擁有最快的紀錄。"
  },
  {
    "word": "sprint",
    "pos": "v.",
    "cn_def": "疾跑；全力衝刺",
    "en_def": "to run or swim a short distance as fast as possible",
    "sentence": "The commuter had to {{BLANK}} down the platform to catch the last train before it left.",
    "cn": "為了趕上最後一班列車離開，通勤族不得不沿著月台全力衝刺。"
  },
  {
    "word": "sprinter",
    "pos": "n.",
    "cn_def": "短跑選手",
    "en_def": "an athlete who races in short, high-speed running or swimming events",
    "sentence": "The Olympic {{BLANK}} trained for four hours every single day to improve his start technique.",
    "cn": "這位奧運短跑選手每天訓練四個小時，以改良他的起跑技術。"
  },
  {
    "word": "tug of war",
    "pos": "n.",
    "cn_def": "拔河比賽",
    "en_def": "a game in which two teams pull at opposite ends of a rope",
    "sentence": "The company organized a {{BLANK}} during the annual sports day to build teamwork.",
    "cn": "公司在年度運動會期間舉辦了一場拔河比賽，以建立團隊合作。"
  },
  {
    "word": "roll her eyes",
    "pos": "phr.",
    "cn_def": "翻白眼",
    "en_def": "to move one's eyes upwards to express annoyance, boredom, or disbelief",
    "sentence": "The teacher could only {{BLANK}} when the student gave the same old excuse for being late.",
    "cn": "當學生為遲到給出同樣的舊藉口時，老師只能無奈地翻白眼。"
  }
];

const MCQS = [
  {
    "q": "Robert decided to ______ his bid on the house after finding serious structural problems.",
    "options": [
      "Judging from",
      "withdraw",
      "compared to",
      "Under normal circumstances"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The bank charges a small fee for every ______ you make from an international ATM.",
    "options": [
      "sprint",
      "champion",
      "contestant",
      "withdrawal"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The tennis champion had to ______ the tournament due to a sudden knee injury.",
    "options": [
      "withdraw from",
      "artistic talent",
      "based on",
      "tug of war"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "You need to be 18 to gain ______ to this movie because of its violent content.",
    "options": [
      "adaptation",
      "revival",
      "admission",
      "tournament"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Although he didn't want to tell the truth, he had to ______ that he made a mistake.",
    "options": [
      "admit",
      "tug of war",
      "based on",
      "roll her eyes"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "It took the international student several months to ______ the cold winter weather.",
    "options": [
      "compete with",
      "tug of war",
      "adjust to",
      "captured the children's imagination"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The employees will go through a period of ______ while the new management takes over.",
    "options": [
      "championship",
      "adjustment",
      "crater",
      "tournament"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The newly recruited technology consultants had to ______ the fast-paced corporate environment within a few weeks.",
    "options": [
      "admit",
      "worthy of",
      "tug of war",
      "adapt to"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The biology professor thoroughly explained how evolutionary ______ helps rare desert organisms conserve scarce water resources.",
    "options": [
      "cannonball",
      "sculpture",
      "adaptation",
      "canons"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The historical drama series is ______ from a brilliant award-winning novel written by a prominent local author.",
    "options": [
      "athletic",
      "adapted",
      "distinct",
      "worthwhile"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The experienced consultant designed a customizable learning platform ______ the students' specific tech preferences.",
    "options": [
      "based on",
      "Under normal circumstances",
      "roll her eyes",
      "tug of war"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "______ the latest financial report, the manufacturing sector exported massive manufactured goods last quarter.",
    "options": [
      "tug of war",
      "compared to",
      "adjust to",
      "According to"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The annual revenue of our technology corporation increased significantly this year ______ that of last year.",
    "options": [
      "adjust to",
      "compared to",
      "worth",
      "hovered over"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "______ his athletic performance during the training session, the athlete is eager to win the championship.",
    "options": [
      "competeed for",
      "artistic talent",
      "compared to",
      "Judging from"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "It was just a ______ day at the office until he heard the terrifying scream from down the hall.",
    "options": [
      "established",
      "distinct",
      "normal",
      "academic"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The medical tests showed ______ results, so the doctor ordered a series of further examinations.",
    "options": [
      "abnormal",
      "academic",
      "athletic",
      "distinctive"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "______ I would not need you to help me, but this project is too urgent.",
    "options": [
      "hovered over",
      "Under normal circumstances",
      "excels in",
      "worth"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The train ______ arrives on time, but today it was delayed by the heavy snowstorm.",
    "options": [
      "scholarship",
      "based on",
      "withdraw from",
      "normally"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The automated monitoring system immediately detected an ______ temperature spike inside the primary database server.",
    "options": [
      "abnormal",
      "trustworthy",
      "academic",
      "competitive"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The senior financial analyst noticed a strange ______ in the corporation's annual revenue records last night.",
    "options": [
      "tournament",
      "scholarship",
      "anomaly",
      "withdrawal"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Old ______ were placed all around the outside of the castle to protect it from attackers.",
    "options": [
      "adaptation",
      "canons",
      "championship",
      "anomaly"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The museum displays a heavy iron ______ that was found near the battlefield.",
    "options": [
      "championship",
      "withdrawal",
      "cannonball",
      "sculptor"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Eric is ______ being elected president of our class because he always helps others.",
    "options": [
      "worthy of",
      "worth",
      "competeed for",
      "admit"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "This car is ______ one million NT dollars, but the owner refuses to sell it.",
    "options": [
      "noteworthy",
      "established",
      "adapted",
      "worth"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "This book is ______ reading because it offers valuable insights into modern history.",
    "options": [
      "tug of war",
      "worth",
      "According to",
      "adjust to"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Volunteering at the local hospital is a ______ experience that will change your perspective.",
    "options": [
      "established",
      "distinctive",
      "worthwhile",
      "adapted"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "There are several ______ changes in the new policy that every employee should study carefully.",
    "options": [
      "noteworthy",
      "distinct",
      "scholarly",
      "trustworthy"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "You can share your secrets with her because she is a very ______ person.",
    "options": [
      "excel",
      "scholarly",
      "adapted",
      "trustworthy"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The two countries ______ ownership of the trade route for more than three decades.",
    "options": [
      "contested",
      "compete",
      "hover",
      "revived"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Sandra desperately wanted to win the beauty ______ to launch her professional modeling career.",
    "options": [
      "competition",
      "adjustment",
      "contestant",
      "contest"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Each ______ will have three minutes to present their project to the panel of judges.",
    "options": [
      "crater",
      "contestant",
      "sportsmanship",
      "cannonball"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The successful film ______ interest in traditional handicrafts among young generations.",
    "options": [
      "establish",
      "contested",
      "revived",
      "hover"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The city center is experiencing an economic ______ after the opening of the new shopping mall.",
    "options": [
      "sprint",
      "anomaly",
      "champion",
      "revival"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The experienced doctors ______ the sick bear safely and treated its deep wounds.",
    "options": [
      "sprint",
      "establish",
      "captured",
      "compete"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The creative short story ______ during the afternoon library reading session.",
    "options": [
      "worth",
      "captured the children's imagination",
      "worthy of",
      "excels in"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "The elderly professor is a visiting ______ from a prestigious university in England.",
    "options": [
      "scholar",
      "sportsmanship",
      "cannonball",
      "crater"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The university offers high ______ standards and excellent research facilities for its students.",
    "options": [
      "normal",
      "academic",
      "competitive",
      "distinct"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "She received a full ______ to study medicine because of her outstanding high school grades.",
    "options": [
      "cannonball",
      "adjustment",
      "withdrawal",
      "scholarship"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The journal published a ______ article that analyzed the social impact of the industrial revolution.",
    "options": [
      "distinctive",
      "worth",
      "scholarly",
      "noteworthy"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "The ______ bowl is meant to be looked at, not to be used as a soup bowl.",
    "options": [
      "excel",
      "worth",
      "academic",
      "scholarly"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "Cynthia has no ______ at all, but she is very good with financial numbers.",
    "options": [
      "withdraw",
      "adjust to",
      "According to",
      "artistic talent"
    ],
    "answer": 3,
    "vocabIndex": 40
  },
  {
    "q": "The two species of birds have ______ singing patterns that help scientists identify them.",
    "options": [
      "distinct",
      "excel",
      "abnormal",
      "noteworthy"
    ],
    "answer": 0,
    "vocabIndex": 41
  },
  {
    "q": "The hard-working student earned a ______ for her well-written essay on environmental protection.",
    "options": [
      "scholar",
      "crater",
      "distinction",
      "adaptation"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "The coffee shop is famous for its ______ aroma that attracts customers from blocks away.",
    "options": [
      "academic",
      "distinctive",
      "worth",
      "noteworthy"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The young girl ______ mathematics and often wins national school competitions.",
    "options": [
      "withdraw",
      "worth",
      "excels in",
      "Judging from"
    ],
    "answer": 2,
    "vocabIndex": 44
  },
  {
    "q": "The innovative ______ incorporates many different materials like glass and metal into his works.",
    "options": [
      "sculptor",
      "sportsmanship",
      "sculpture",
      "scholar"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "They placed a large marble ______ of a horse in the center of the garden.",
    "options": [
      "distinction",
      "sculpture",
      "adaptation",
      "canons"
    ],
    "answer": 1,
    "vocabIndex": 46
  },
  {
    "q": "He has been a keen ______ all his life, playing soccer and tennis every weekend.",
    "options": [
      "distinction",
      "athlete",
      "sprint",
      "sportsman"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "Showing good ______ means shaking hands with your opponent after you lose a match.",
    "options": [
      "sportsmanship",
      "sprint",
      "cannonball",
      "scholarship"
    ],
    "answer": 0,
    "vocabIndex": 48
  },
  {
    "q": "The dedicated ______ trained for hours daily to prepare for the upcoming international sports meet.",
    "options": [
      "revival",
      "competition",
      "athlete",
      "distinction"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "The school board decided to invest more revenue into upgrading the stadium's ______ facilities this year.",
    "options": [
      "trustworthy",
      "athletic",
      "scholarly",
      "established"
    ],
    "answer": 1,
    "vocabIndex": 50
  },
  {
    "q": "Thousands of excited fans gathered at the central stadium to watch the final football ______.",
    "options": [
      "sportsman",
      "cannonball",
      "competitors",
      "tournament"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "The humble tennis player thanked her supportive coach after officially becoming the regional ______ last night.",
    "options": [
      "champion",
      "sprint",
      "scholarship",
      "scholar"
    ],
    "answer": 0,
    "vocabIndex": 52
  },
  {
    "q": "The engineering team won the national robotics ______ after presenting their highly innovative automated device.",
    "options": [
      "adaptation",
      "sprint",
      "championship",
      "canons"
    ],
    "answer": 2,
    "vocabIndex": 53
  },
  {
    "q": "Most professional athletes will not ______ without warming up thoroughly first.",
    "options": [
      "establish",
      "revived",
      "contested",
      "compete"
    ],
    "answer": 3,
    "vocabIndex": 54
  },
  {
    "q": "The two young businessmen ______ the position of regional sales manager.",
    "options": [
      "compared to",
      "competeed for",
      "According to",
      "adjust to"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "Our small company has to ______ large international corporations in the market.",
    "options": [
      "compete with",
      "excels in",
      "adapt to",
      "Judging from"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "The local school hosted a chess ______ that attracted students from all over the city.",
    "options": [
      "scholar",
      "anomaly",
      "admission",
      "competition"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "This university is highly ______ since it doesn't accept many international students.",
    "options": [
      "worth",
      "competitive",
      "established",
      "abnormal"
    ],
    "answer": 1,
    "vocabIndex": 58
  },
  {
    "q": "Ten ______ will swim against each时 other in the final race tomorrow morning.",
    "options": [
      "contest",
      "championship",
      "competitors",
      "sportsmanship"
    ],
    "answer": 2,
    "vocabIndex": 59
  },
  {
    "q": "The prominent technology corporation sponsored a national programming ______ to discover young engineering talents.",
    "options": [
      "adaptation",
      "contestant",
      "crater",
      "contest"
    ],
    "answer": 3,
    "vocabIndex": 60
  },
  {
    "q": "Every single ______ in the speech competition received customizable feedback from the supportive coordinator.",
    "options": [
      "admission",
      "contestant",
      "canons",
      "contest"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "Some small insects can ______ in the air, while others have to keep moving forward.",
    "options": [
      "captured",
      "establish",
      "hover",
      "compete"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The rescue helicopter ______ the exact area where the young diver went missing.",
    "options": [
      "hovered over",
      "withdraw",
      "Under normal circumstances",
      "captured the children's imagination"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "The heavy meteorite left an immense ______ where it struck the rocky ground centuries ago.",
    "options": [
      "adaptation",
      "crater",
      "anomaly",
      "competition"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "The successful entrepreneur plans to ______ a new research foundation next year.",
    "options": [
      "compete",
      "hover",
      "contested",
      "establish"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "The ______ medical community is beginning to study the benefits of traditional herbal medicine.",
    "options": [
      "noteworthy",
      "normal",
      "established",
      "athletic"
    ],
    "answer": 2,
    "vocabIndex": 66
  },
  {
    "q": "Jason had the fastest time on the track team for the 100-meter ______.",
    "options": [
      "sprint",
      "contestant",
      "anomaly",
      "championship"
    ],
    "answer": 0,
    "vocabIndex": 67
  },
  {
    "q": "The commuter had to ______ down the platform to catch the last train before it left.",
    "options": [
      "establish",
      "hover",
      "sprint",
      "captured"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "The Olympic ______ trained for four hours every single day to improve his start technique.",
    "options": [
      "sprinter",
      "adjustment",
      "championship",
      "admission"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "The company organized a ______ during the annual sports day to build teamwork.",
    "options": [
      "adapt to",
      "excels in",
      "adjust to",
      "tug of war"
    ],
    "answer": 3,
    "vocabIndex": 70
  },
  {
    "q": "The teacher could only ______ when the student gave the same old excuse for being late.",
    "options": [
      "tug of war",
      "roll her eyes",
      "admit",
      "adapt to"
    ],
    "answer": 1,
    "vocabIndex": 71
  }
];

const LOOKUP = {
  "withdraw": {
    "pos": "v.",
    "en_def": "to take back, remove, or move away from a place or situation",
    "cn_def": "提款；撤回；退出",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to take back, remove, or move away from a place or situation",
        "cn_def": "提款；撤回；退出"
      }
    ]
  },
  "withdrawal": {
    "pos": "n.",
    "en_def": "the act of taking back or removing something, or taking money from a bank",
    "cn_def": "提領；撤退；收回",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of taking back or removing something, or taking money from a bank",
        "cn_def": "提領；撤退；收回"
      }
    ]
  },
  "withdraw from": {
    "pos": "phr.",
    "en_def": "to officially stop participating in a competition, organization, or activity",
    "cn_def": "退出（學校、比賽等）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to officially stop participating in a competition, organization, or activity",
        "cn_def": "退出（學校、比賽等）"
      }
    ]
  },
  "admission": {
    "pos": "n.",
    "en_def": "the act of agreeing that something is true, or permission to enter a place",
    "cn_def": "入場許可；承認；入學",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of agreeing that something is true, or permission to enter a place",
        "cn_def": "入場許可；承認；入學"
      }
    ]
  },
  "admit": {
    "pos": "v.",
    "en_def": "to agree that something is true, especially unwillingly",
    "cn_def": "承認；准許進入",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to agree that something is true, especially unwillingly",
        "cn_def": "承認；准許進入"
      }
    ]
  },
  "adjust to": {
    "pos": "v.",
    "en_def": "to change something slightly to make it fit or work better in a new situation",
    "cn_def": "調整；適應（環境）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to change something slightly to make it fit or work better in a new situation",
        "cn_def": "調整；適應（環境）"
      }
    ]
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change made to something in order to correct or improve it",
    "cn_def": "調整；適應",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small change made to something in order to correct or improve it",
        "cn_def": "調整；適應"
      }
    ]
  },
  "adapt to": {
    "pos": "phr.",
    "en_def": "to change one's behavior, routines, or ideas in order to deal successfully with a new situation",
    "cn_def": "適應...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to change one's behavior, routines, or ideas in order to deal successfully with a new situation",
        "cn_def": "適應..."
      }
    ]
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a dynamic process or physical characteristic that helps an organism survive and reproduce in its environment",
    "cn_def": "（生物學的）適應；適應特徵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a dynamic process or physical characteristic that helps an organism survive and reproduce in its environment",
        "cn_def": "（生物學的）適應；適應特徵"
      }
    ]
  },
  "adapted": {
    "pos": "adj.",
    "en_def": "modified, rewritten, or altered from an original book or play to make it suitable for a film or stage script",
    "cn_def": "改編的（劇本/作品）",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "modified, rewritten, or altered from an original book or play to make it suitable for a film or stage script",
        "cn_def": "改編的（劇本/作品）"
      }
    ]
  },
  "based on": {
    "pos": "phr.",
    "en_def": "utilizing a specific fact, idea, or foundational event as the core ground for something",
    "cn_def": "根據...；基於...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "utilizing a specific fact, idea, or foundational event as the core ground for something",
        "cn_def": "根據...；基於..."
      }
    ]
  },
  "according to": {
    "pos": "phr.",
    "en_def": "as stated, reported, or indicated by a particular person, authoritative source, or rule",
    "cn_def": "根據...；依照...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as stated, reported, or indicated by a particular person, authoritative source, or rule",
        "cn_def": "根據...；依照..."
      }
    ]
  },
  "compared to": {
    "pos": "phr.",
    "en_def": "examined or evaluated in contrast with another entity to note the relative differences",
    "cn_def": "與...相比",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "examined or evaluated in contrast with another entity to note the relative differences",
        "cn_def": "與...相比"
      }
    ]
  },
  "judging from": {
    "pos": "phr.",
    "en_def": "forming an opinion or making a logical conclusion based on specific evidence or appearance",
    "cn_def": "從...來看；根據...來判斷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "forming an opinion or making a logical conclusion based on specific evidence or appearance",
        "cn_def": "從...來看；根據...來判斷"
      }
    ]
  },
  "normal": {
    "pos": "adj.",
    "en_def": "ordinary or expected; conforming to a standard or regular pattern",
    "cn_def": "正常的；一般的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "ordinary or expected; conforming to a standard or regular pattern",
        "cn_def": "正常的；一般的"
      }
    ]
  },
  "abnormal": {
    "pos": "adj.",
    "en_def": "different from what is usual or expected, typically in a way that is worrying",
    "cn_def": "異常的；不正常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "different from what is usual or expected, typically in a way that is worrying",
        "cn_def": "異常的；不正常的"
      },
      {
        "pos": "adj.",
        "en_def": "deviating from what is normal, usual, or expected, typically in a way that is undesirable",
        "cn_def": "異常的；反常的"
      }
    ]
  },
  "under normal circumstances": {
    "pos": "phr.",
    "en_def": "in ordinary conditions or situations without unexpected events",
    "cn_def": "在正常情況下",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in ordinary conditions or situations without unexpected events",
        "cn_def": "在正常情況下"
      }
    ]
  },
  "normally": {
    "pos": "adv.",
    "en_def": "usually or in a regular, ordinary way",
    "cn_def": "通常；正常地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "usually or in a regular, ordinary way",
        "cn_def": "通常；正常地"
      }
    ]
  },
  "anomaly": {
    "pos": "n.",
    "en_def": "something that deviates from what is standard, normal, or expected; an irregularity",
    "cn_def": "異常事物；不正常現象",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that deviates from what is standard, normal, or expected; an irregularity",
        "cn_def": "異常事物；不正常現象"
      }
    ]
  },
  "canon": {
    "pos": "n.",
    "en_def": "a large, powerful gun fixed to two wheels, used in old warfare",
    "cn_def": "大砲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, powerful gun fixed to two wheels, used in old warfare",
        "cn_def": "大砲"
      }
    ]
  },
  "canons": {
    "pos": "n.",
    "en_def": "a large, powerful gun fixed to two wheels, used in old warfare",
    "cn_def": "大砲",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, powerful gun fixed to two wheels, used in old warfare",
        "cn_def": "大砲"
      }
    ]
  },
  "cannonball": {
    "pos": "n.",
    "en_def": "a round metal or stone ball fired from a cannon",
    "cn_def": "砲彈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a round metal or stone ball fired from a cannon",
        "cn_def": "砲彈"
      }
    ]
  },
  "worthy of": {
    "pos": "adj.",
    "en_def": "deserving effort, attention, or respect",
    "cn_def": "值得的；配得上...的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deserving effort, attention, or respect",
        "cn_def": "值得的；配得上...的"
      }
    ]
  },
  "worth": {
    "pos": "adj.",
    "en_def": "having a particular value, especially in terms of money or importance",
    "cn_def": "值得；價值...",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a particular value, especially in terms of money or importance",
        "cn_def": "值得；價值..."
      },
      {
        "pos": "phr.",
        "en_def": "deserving to be treated or processed in a specific active way",
        "cn_def": "值得（做某事）"
      }
    ]
  },
  "is worth v-ing": {
    "pos": "phr.",
    "en_def": "deserving to be treated or processed in a specific active way",
    "cn_def": "值得（做某事）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "deserving to be treated or processed in a specific active way",
        "cn_def": "值得（做某事）"
      }
    ]
  },
  "worthwhile": {
    "pos": "adj.",
    "en_def": "useful, important, or rewarding enough to be worth the time or money spent",
    "cn_def": "值得花時間/金錢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "useful, important, or rewarding enough to be worth the time or money spent",
        "cn_def": "值得花時間/金錢的"
      }
    ]
  },
  "noteworthy": {
    "pos": "adj.",
    "en_def": "deserving to be noticed or to receive attention because of being important",
    "cn_def": "值得注意的；顯著的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deserving to be noticed or to receive attention because of being important",
        "cn_def": "值得注意的；顯著的"
      }
    ]
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be relied on as honest or truthful",
    "cn_def": "值得信賴的；可靠的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be relied on as honest or truthful",
        "cn_def": "值得信賴的；可靠的"
      }
    ]
  },
  "contested": {
    "pos": "v.",
    "en_def": "to formally object to a statement, decision, or the ownership of something",
    "cn_def": "爭奪；對...提出質疑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally object to a statement, decision, or the ownership of something",
        "cn_def": "爭奪；對...提出質疑"
      }
    ]
  },
  "contest": {
    "pos": "v.",
    "en_def": "to formally object to a statement, decision, or the ownership of something",
    "cn_def": "爭奪；對...提出質疑",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to formally object to a statement, decision, or the ownership of something",
        "cn_def": "爭奪；對...提出質疑"
      },
      {
        "pos": "n.",
        "en_def": "a competition to do better than other people, usually judged by experts",
        "cn_def": "比賽；競賽"
      },
      {
        "pos": "n.",
        "en_def": "a competition, game, or speech match in which people try to win a specific prize",
        "cn_def": "比賽；競賽"
      }
    ]
  },
  "contestant": {
    "pos": "n.",
    "en_def": "a person who takes part in a contest or competition",
    "cn_def": "參賽者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in a contest or competition",
        "cn_def": "參賽者"
      },
      {
        "pos": "n.",
        "en_def": "a person who takes part in a game, competition, or contest to strive for victory",
        "cn_def": "參賽者；競爭者"
      }
    ]
  },
  "revive": {
    "pos": "v.",
    "en_def": "to bring something back to life, health, existence, or popularity",
    "cn_def": "使復甦；使再度流行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something back to life, health, existence, or popularity",
        "cn_def": "使復甦；使再度流行"
      }
    ]
  },
  "revived": {
    "pos": "v.",
    "en_def": "to bring something back to life, health, existence, or popularity",
    "cn_def": "使復甦；使再度流行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something back to life, health, existence, or popularity",
        "cn_def": "使復甦；使再度流行"
      }
    ]
  },
  "revival": {
    "pos": "n.",
    "en_def": "an improvement in the condition or popularity of something",
    "cn_def": "復興；復甦；再現",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an improvement in the condition or popularity of something",
        "cn_def": "復興；復甦；再現"
      }
    ]
  },
  "captured": {
    "pos": "v.",
    "en_def": "to catch a person or animal, or to take distinct control of a place",
    "cn_def": "捕捉；捕獲；佔領",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to catch a person or animal, or to take distinct control of a place",
        "cn_def": "捕捉；捕獲；佔領"
      }
    ]
  },
  "capture": {
    "pos": "v.",
    "en_def": "to catch a person or animal, or to take distinct control of a place",
    "cn_def": "捕捉；捕獲；佔領",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to catch a person or animal, or to take distinct control of a place",
        "cn_def": "捕捉；捕獲；佔領"
      }
    ]
  },
  "captured the children's imagination": {
    "pos": "phr.",
    "en_def": "to interpret or stimulate someone's creative thoughts strongly",
    "cn_def": "擄獲某人的想像力；吸引住某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to interpret or stimulate someone's creative thoughts strongly",
        "cn_def": "擄獲某人的想像力；吸引住某人"
      }
    ]
  },
  "capture somebody's imagination": {
    "pos": "phr.",
    "en_def": "to interpret or stimulate someone's creative thoughts strongly",
    "cn_def": "擄獲某人的想像力；吸引住某人",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to interpret or stimulate someone's creative thoughts strongly",
        "cn_def": "擄獲某人的想像力；吸引住某人"
      }
    ]
  },
  "scholar": {
    "pos": "n.",
    "en_def": "a person who studies an academic subject and knows a lot about it",
    "cn_def": "學者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who studies an academic subject and knows a lot about it",
        "cn_def": "學者"
      }
    ]
  },
  "academic": {
    "pos": "adj.",
    "en_def": "relating to schools, colleges, and universities, or to connected study",
    "cn_def": "學術的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to schools, colleges, and universities, or to connected study",
        "cn_def": "學術的"
      }
    ]
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "an amount of money given by a school or organization to pay for studies",
    "cn_def": "獎學金",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an amount of money given by a school or organization to pay for studies",
        "cn_def": "獎學金"
      }
    ]
  },
  "scholarly": {
    "pos": "adj.",
    "en_def": "containing a lot of deep knowledge, or typical of a serious scholar",
    "cn_def": "學術性的；博學的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "containing a lot of deep knowledge, or typical of a serious scholar",
        "cn_def": "學術性的；博學的"
      }
    ]
  },
  "excel": {
    "pos": "adj.",
    "en_def": "relating to art, or showing skill and imagination in creating beautiful things",
    "cn_def": "藝術的；有藝術天分的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to art, or showing skill and imagination in creating beautiful things",
        "cn_def": "藝術的；有藝術天分的"
      }
    ]
  },
  "artistic talent": {
    "pos": "n.",
    "en_def": "natural ability to create good art, music, or literature",
    "cn_def": "藝術天分",
    "combined": [
      {
        "pos": "n.",
        "en_def": "natural ability to create good art, music, or literature",
        "cn_def": "藝術天分"
      }
    ]
  },
  "distinct": {
    "pos": "adj.",
    "en_def": "clearly noticeable, separate, or different from others",
    "cn_def": "明顯不同的；清晰的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "clearly noticeable, separate, or different from others",
        "cn_def": "明顯不同的；清晰的"
      }
    ]
  },
  "distinction": {
    "pos": "n.",
    "en_def": "a difference between similar things, or an award given for high quality",
    "cn_def": "榮譽；優秀；區別",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a difference between similar things, or an award given for high quality",
        "cn_def": "榮譽；優秀；區別"
      }
    ]
  },
  "distinctive": {
    "pos": "adj.",
    "en_def": "having a special feature that makes something easily recognizable",
    "cn_def": "有特色的；獨特的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having a special feature that makes something easily recognizable",
        "cn_def": "有特色的；獨特的"
      }
    ]
  },
  "excels in": {
    "pos": "v.",
    "en_def": "to be exceptionally good at or proficient in an activity or subject",
    "cn_def": "擅長；勝過他人",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be exceptionally good at or proficient in an activity or subject",
        "cn_def": "擅長；勝過他人"
      }
    ]
  },
  "excel in": {
    "pos": "v.",
    "en_def": "to be exceptionally good at or proficient in an activity or subject",
    "cn_def": "擅長；勝過他人",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to be exceptionally good at or proficient in an activity or subject",
        "cn_def": "擅長；勝過他人"
      }
    ]
  },
  "sculptor": {
    "pos": "n.",
    "en_def": "an artist who creates three-dimensional shapes out of stone, wood, or metal",
    "cn_def": "雕刻家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an artist who creates three-dimensional shapes out of stone, wood, or metal",
        "cn_def": "雕刻家"
      }
    ]
  },
  "sculpture": {
    "pos": "n.",
    "en_def": "a three-dimensional work of art made by carving or molding material",
    "cn_def": "雕塑品",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a three-dimensional work of art made by carving or molding material",
        "cn_def": "雕塑品"
      }
    ]
  },
  "sportsman": {
    "pos": "n.",
    "en_def": "a person who takes part in sports, especially as a professional",
    "cn_def": "運動員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who takes part in sports, especially as a professional",
        "cn_def": "運動員"
      }
    ]
  },
  "sportsmanship": {
    "pos": "n.",
    "en_def": "fair and generous behavior or treatment of others in a sports contest",
    "cn_def": "運動員精神；風度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "fair and generous behavior or treatment of others in a sports contest",
        "cn_def": "運動員精神；風度"
      }
    ]
  },
  "athlete": {
    "pos": "n.",
    "en_def": "a person who is proficient in sports and other forms of physical exercise",
    "cn_def": "運動員",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is proficient in sports and other forms of physical exercise",
        "cn_def": "運動員"
      }
    ]
  },
  "athletic": {
    "pos": "adj.",
    "en_def": "physically strong, fit, and active, or relating to sports and athletes",
    "cn_def": "運動的；體育的；強壯的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "physically strong, fit, and active, or relating to sports and athletes",
        "cn_def": "運動的；體育的；強壯的"
      }
    ]
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a series of contests between a number of competitors, who compete for an overall prize",
    "cn_def": "錦標賽；聯賽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a series of contests between a number of competitors, who compete for an overall prize",
        "cn_def": "錦標賽；聯賽"
      }
    ]
  },
  "champion": {
    "pos": "n.",
    "en_def": "a person, team, or animal that has won a contest or competition, especially in sports",
    "cn_def": "冠軍",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, team, or animal that has won a contest or competition, especially in sports",
        "cn_def": "冠軍"
      }
    ]
  },
  "championship": {
    "pos": "n.",
    "en_def": "a high-level contest held to determine the overall winner or champion of a sport",
    "cn_def": "冠軍賽；冠軍稱號",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a high-level contest held to determine the overall winner or champion of a sport",
        "cn_def": "冠軍賽；冠軍稱號"
      }
    ]
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to be more successful than others in a game, business, or contest",
    "cn_def": "競爭；比賽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to try to be more successful than others in a game, business, or contest",
        "cn_def": "競爭；比賽"
      }
    ]
  },
  "competeed for": {
    "pos": "phr.",
    "en_def": "to try to win or achieve a specific prize, position, or reward against others",
    "cn_def": "爭奪...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to win or achieve a specific prize, position, or reward against others",
        "cn_def": "爭奪..."
      }
    ]
  },
  "compete for": {
    "pos": "phr.",
    "en_def": "to try to win or achieve a specific prize, position, or reward against others",
    "cn_def": "爭奪...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to try to win or achieve a specific prize, position, or reward against others",
        "cn_def": "爭奪..."
      }
    ]
  },
  "compete with": {
    "pos": "phr.",
    "en_def": "to struggle against a specific rival or opponent to achieve a goal",
    "cn_def": "與...競爭",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to struggle against a specific rival or opponent to achieve a goal",
        "cn_def": "與...競爭"
      }
    ]
  },
  "compete with / against": {
    "pos": "phr.",
    "en_def": "to struggle against a specific rival or opponent to achieve a goal",
    "cn_def": "與...競爭",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to struggle against a specific rival or opponent to achieve a goal",
        "cn_def": "與...競爭"
      }
    ]
  },
  "competition": {
    "pos": "n.",
    "en_def": "an organized event in which people try to win, or the act of competing",
    "cn_def": "競爭；比賽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized event in which people try to win, or the act of competing",
        "cn_def": "競爭；比賽"
      }
    ]
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "involving competition, or having a strong desire to win or be successful",
    "cn_def": "競爭激烈的；好勝的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving competition, or having a strong desire to win or be successful",
        "cn_def": "競爭激烈的；好勝的"
      }
    ]
  },
  "competitors": {
    "pos": "n.",
    "en_def": "a person, team, or company that takes part in a commercial or sports competition",
    "cn_def": "競爭者；對手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, team, or company that takes part in a commercial or sports competition",
        "cn_def": "競爭者；對手"
      }
    ]
  },
  "competitor": {
    "pos": "n.",
    "en_def": "a person, team, or company that takes part in a commercial or sports competition",
    "cn_def": "競爭者；對手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person, team, or company that takes part in a commercial or sports competition",
        "cn_def": "競爭者；對手"
      }
    ]
  },
  "hover": {
    "pos": "v.",
    "en_def": "to stay in one place in the air, flying without moving forward",
    "cn_def": "盤旋",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stay in one place in the air, flying without moving forward",
        "cn_def": "盤旋"
      }
    ]
  },
  "hovered over": {
    "pos": "phr.",
    "en_def": "to stay suspended in the air directly above a specific object or area",
    "cn_def": "在...上空盤旋",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stay suspended in the air directly above a specific object or area",
        "cn_def": "在...上空盤旋"
      }
    ]
  },
  "hover over": {
    "pos": "phr.",
    "en_def": "to stay suspended in the air directly above a specific object or area",
    "cn_def": "在...上空盤旋",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to stay suspended in the air directly above a specific object or area",
        "cn_def": "在...上空盤旋"
      }
    ]
  },
  "crater": {
    "pos": "n.",
    "en_def": "a large, bowl-shaped cavity in the ground or on the surface of a planet",
    "cn_def": "火山口；隕石坑",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large, bowl-shaped cavity in the ground or on the surface of a planet",
        "cn_def": "火山口；隕石坑"
      }
    ]
  },
  "establish": {
    "pos": "v.",
    "en_def": "to start a company, organization, or system that will continue for a long time",
    "cn_def": "建立；設立",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to start a company, organization, or system that will continue for a long time",
        "cn_def": "建立；設立"
      }
    ]
  },
  "established": {
    "pos": "adj.",
    "en_def": "generally accepted or familiar, having existed for a long period of time",
    "cn_def": "既定的；確立的；著名的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "generally accepted or familiar, having existed for a long period of time",
        "cn_def": "既定的；確立的；著名的"
      }
    ]
  },
  "sprint": {
    "pos": "n.",
    "en_def": "a short, fast race in which everyone runs or swims at maximum speed",
    "cn_def": "短跑；衝刺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short, fast race in which everyone runs or swims at maximum speed",
        "cn_def": "短跑；衝刺"
      },
      {
        "pos": "v.",
        "en_def": "to run or swim a short distance as fast as possible",
        "cn_def": "疾跑；全力衝刺"
      }
    ]
  },
  "sprinter": {
    "pos": "n.",
    "en_def": "an athlete who races in short, high-speed running or swimming events",
    "cn_def": "短跑選手",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an athlete who races in short, high-speed running or swimming events",
        "cn_def": "短跑選手"
      }
    ]
  },
  "tug of war": {
    "pos": "n.",
    "en_def": "a game in which two teams pull at opposite ends of a rope",
    "cn_def": "拔河比賽",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a game in which two teams pull at opposite ends of a rope",
        "cn_def": "拔河比賽"
      }
    ]
  },
  "roll one's eyes": {
    "pos": "phr.",
    "en_def": "to move one's eyes upwards to express annoyance, boredom, or disbelief",
    "cn_def": "翻白眼",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to move one's eyes upwards to express annoyance, boredom, or disbelief",
        "cn_def": "翻白眼"
      }
    ]
  },
  "roll her eyes": {
    "pos": "phr.",
    "en_def": "to move one's eyes upwards to express annoyance, boredom, or disbelief",
    "cn_def": "翻白眼",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to move one's eyes upwards to express annoyance, boredom, or disbelief",
        "cn_def": "翻白眼"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
