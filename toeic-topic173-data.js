// Topic 173 Quiz Data: History 歷史
// Source word list: https://www.examword.com/group-topic/history — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T173 - History 歷史",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "autobiography",
    "pos": "n.",
    "cn_def": "自傳",
    "en_def": "a book a person writes about their own life",
    "sentence": "A: I heard the company's founder is publishing a book next month, so do you know what it will be about and whether employees can get a copy? B: It is his {{BLANK}}, which tells the history of how he started the business in a small garage, and every staff member will receive a free signed copy at the annual dinner.",
    "cn": "A：我聽說公司創辦人下個月要出書，你知道內容是關於什麼嗎？員工可以拿到一本嗎？ B：那是他的【自傳】，講述他如何在一間小車庫裡創業的歷史，每位員工都會在年度晚宴上收到一本免費的簽名書。"
  },
  {
    "word": "inspirational",
    "pos": "adj.",
    "cn_def": "鼓舞人心的",
    "en_def": "making people feel hopeful and want to do something",
    "sentence": "A: What did you think of the history professor who spoke at our training session yesterday afternoon, and would you invite her back for the new employees? B: Her talk about leaders who rebuilt their cities after the war was really {{BLANK}}, so I think the new staff would feel motivated and want to work harder after hearing it.",
    "cn": "A：你覺得昨天下午在我們培訓課上演講的那位歷史教授怎麼樣？你會再邀請她來為新進員工演講嗎？ B：她談到戰後重建城市的領袖們，內容真的很【鼓舞人心】，所以我想新員工聽完後會很有動力，想更努力工作。"
  },
  {
    "word": "obscure",
    "pos": "adj.",
    "cn_def": "鮮為人知的；不出名的",
    "en_def": "not well known",
    "sentence": "A: Why did the museum guide spend so long explaining that small painting in the corner, when most visitors wanted to see the famous pieces upstairs? B: The painter is quite {{BLANK}} and few people know his name today, but historians believe he trained many of the great artists whose works hang in the main hall.",
    "cn": "A：為什麼博物館導覽員花那麼久時間解說角落那幅小畫，而大部分遊客都想去樓上看有名的作品？ B：那位畫家相當【鮮為人知】，如今很少人知道他的名字，但歷史學家認為他訓練了許多作品掛在主展廳的偉大藝術家。"
  },
  {
    "word": "renowned",
    "pos": "adj.",
    "cn_def": "著名的；有聲望的",
    "en_def": "famous and admired by many people",
    "sentence": "A: Who is going to lead the walking tour of the old town for our overseas clients on Friday morning, and do they speak good English? B: We booked a {{BLANK}} local historian who has written several popular books about the area, and she has guided groups from many international companies for over twenty years.",
    "cn": "A：星期五早上誰要帶我們的海外客戶進行老城區徒步導覽？他們的英文好嗎？ B：我們預約了一位【著名的】當地歷史學家，她寫過好幾本關於這個地區的暢銷書，二十多年來帶過許多國際公司的團體。"
  },
  {
    "word": "memorize",
    "pos": "v.",
    "cn_def": "背熟；記住",
    "en_def": "to learn something so well that you can remember it exactly",
    "sentence": "A: How are you preparing for the presentation about our company's history at the shareholders' meeting next Tuesday, since you won't be allowed to use notes? B: I'm trying to {{BLANK}} all the important dates and numbers, so I practice in front of the mirror every evening after dinner until I can say everything without stopping.",
    "cn": "A：下星期二股東大會上要報告公司的歷史，而且你不能看筆記，你是怎麼準備的？ B：我正在努力【背熟】所有重要的日期和數字，所以我每天晚餐後都對著鏡子練習，直到可以一口氣說完為止。"
  },
  {
    "word": "tedious",
    "pos": "adj.",
    "cn_def": "冗長乏味的",
    "en_def": "long, boring and tiring",
    "sentence": "A: Why do you look so tired this afternoon, and did you finish sorting the old documents for the company archive that the manager asked about? B: Not yet, because checking thousands of yellow papers one by one is really {{BLANK}} work, and I still have about six boxes left to finish before the end of the week.",
    "cn": "A：你今天下午為什麼看起來這麼累？經理問的那批公司檔案室舊文件，你整理完了嗎？ B：還沒，因為一張一張檢查好幾千張發黃的紙真的是很【冗長乏味的】工作，而且週末前我還有大約六箱要完成。"
  },
  {
    "word": "dull",
    "pos": "adj.",
    "cn_def": "枯燥的；無聊的",
    "en_def": "not interesting or exciting",
    "sentence": "A: Did your team enjoy the history lecture that the human resources department organized for everyone last Thursday in the main conference room? B: Not really, because the speaker read from his slides in the same flat voice for two hours, so the talk was so {{BLANK}} that several people almost fell asleep in their chairs.",
    "cn": "A：你的團隊喜歡人資部上星期四在大會議室為大家安排的歷史講座嗎？ B：不太喜歡，因為講者用同樣平板的聲音照著投影片唸了兩個小時，講座【枯燥】到好幾個人差點在椅子上睡著。"
  },
  {
    "word": "despise",
    "pos": "v.",
    "cn_def": "鄙視；看不起",
    "en_def": "to dislike someone or something very much and have no respect for them",
    "sentence": "A: Why did your brother refuse the job offer at that big publishing company, even though the salary was much higher than what he earns now? B: He says he would {{BLANK}} himself if he worked for a company that changes history books to make powerful people look good, so he decided to stay at his small but honest office.",
    "cn": "A：你哥哥為什麼拒絕那家大出版社的工作，即使薪水比他現在賺的高很多？ B：他說如果他替一家為了讓有權勢的人好看而竄改歷史書的公司工作，他會【看不起】自己，所以他決定留在他那間規模小但誠實的公司。"
  },
  {
    "word": "glimpse",
    "pos": "n.",
    "cn_def": "一瞥；略見",
    "en_def": "a quick or brief look at something",
    "sentence": "A: Was the new exhibition at the city history museum worth visiting, or should I take my clients somewhere else when they come next weekend? B: It's definitely worth it, because the old photos and letters give visitors a rare {{BLANK}} of daily life in Taipei a hundred years ago, and the guided tour only takes about an hour.",
    "cn": "A：市立歷史博物館的新展覽值得參觀嗎？還是下週末客戶來時我應該帶他們去別的地方？ B：絕對值得，因為那些老照片和信件讓參觀者難得【一窺】一百年前台北的日常生活，而且導覽只需要大約一小時。"
  },
  {
    "word": "drop by",
    "pos": "v.phr.",
    "cn_def": "順道拜訪；順便去",
    "en_def": "to visit a place for a short time, often without planning",
    "sentence": "A: I'm going to the library downtown after lunch to borrow some books about local history, so do you need anything while I'm out of the office? B: Could you {{BLANK}} the post office on your way back and pick up the package of old maps that our supplier sent us yesterday, if it isn't too much trouble?",
    "cn": "A：午餐後我要去市中心的圖書館借一些關於本地歷史的書，我不在辦公室時你需要什麼嗎？ B：如果不太麻煩的話，你回來的路上可以【順道去】一下郵局，幫我拿供應商昨天寄給我們的那包舊地圖嗎？"
  },
  {
    "word": "recollect",
    "pos": "v.",
    "cn_def": "回想；記起",
    "en_def": "to remember something from the past",
    "sentence": "A: Do you know when the company first moved its headquarters to this building, because I need the exact year for the anniversary brochure we are printing? B: I can't {{BLANK}} the date myself, but the head of the accounting department has worked here for thirty years, so she should remember it clearly if you ask her.",
    "cn": "A：你知道公司是哪一年把總部搬到這棟大樓的嗎？我們要印的週年手冊需要確切的年份。 B：我自己【想不起來】那個日期，但會計部主管在這裡工作了三十年，如果你問她，她應該記得很清楚。"
  },
  {
    "word": "restricted",
    "pos": "adj.",
    "cn_def": "受限制的",
    "en_def": "limited or controlled by rules",
    "sentence": "A: Can our visitors from the head office take photos inside the old castle during the history tour we planned for them on Saturday morning? B: Photography is {{BLANK}} in some rooms because the ancient paintings are easily damaged by light, so please remind everyone to check the signs before they take out their cameras.",
    "cn": "A：我們為總公司訪客安排的星期六早上歷史導覽中，他們可以在古堡裡面拍照嗎？ B：有些房間的拍照是【受到限制的】，因為古畫很容易被光線損壞，所以請提醒大家拿出相機前先看清楚告示。"
  },
  {
    "word": "fascinated",
    "pos": "adj.",
    "cn_def": "著迷的",
    "en_def": "extremely interested in something",
    "sentence": "A: Why did your daughter want to spend her whole birthday at the history museum instead of going to the amusement park with her friends? B: She has been {{BLANK}} by ancient Egypt since her teacher showed the class a film about the pyramids, so she wanted to see the new mummy exhibition before it closes next month.",
    "cn": "A：你女兒為什麼想把整個生日都花在歷史博物館，而不是和朋友去遊樂園？ B：自從老師給全班看了一部關於金字塔的影片後，她就對古埃及【著迷】，所以她想在下個月閉展前去看新的木乃伊展覽。"
  },
  {
    "word": "curricular",
    "pos": "adj.",
    "cn_def": "課程的",
    "en_def": "connected with the subjects taught at a school or college",
    "sentence": "A: Why is the school asking parents to complete a survey about the history program before the start of the new semester in September? B: The principal is planning some {{BLANK}} changes, such as adding more local history lessons and museum visits, and she wants to know what families think before the final decision is made.",
    "cn": "A：學校為什麼要家長在九月新學期開始前填一份關於歷史課程的問卷？ B：校長正在規劃一些【課程】改革，例如增加更多本地歷史課和博物館參觀，她想在做最後決定前了解家長們的想法。"
  },
  {
    "word": "pursuit",
    "pos": "n.",
    "cn_def": "追求",
    "en_def": "the act of trying to get or achieve something",
    "sentence": "A: Why did your colleague leave his secure position at the bank last year, when everyone thought he would become a manager very soon? B: He decided to go back to university in {{BLANK}} of his dream of becoming a history teacher, and he says that he has never felt happier, even though he earns less now.",
    "cn": "A：你同事去年為什麼離開銀行的穩定職位？大家都以為他很快就會升經理。 B：他決定回到大學去【追求】成為歷史老師的夢想，他說雖然現在賺得比較少，但他從來沒有這麼快樂過。"
  },
  {
    "word": "hard-pressed",
    "pos": "adj.",
    "cn_def": "處境困難的；很難做到的",
    "en_def": "having great difficulty doing something, often because of lack of time or money",
    "sentence": "A: Can your team finish the research for the museum's history guide by Friday, since the printer needs the files early next week? B: We'll be {{BLANK}} to meet that deadline because two writers are sick and the library is closed for repairs, so could we possibly have three more days to complete everything properly?",
    "cn": "A：你的團隊能在星期五前完成博物館歷史導覽手冊的研究嗎？印刷廠下週初就需要檔案。 B：我們【很難】趕上那個截止日期，因為兩位作者生病了，圖書館也因整修而關閉，所以我們能不能再多三天把所有東西好好完成？"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱愛的；充滿熱情的",
    "en_def": "having very strong feelings of liking something",
    "sentence": "A: What kind of person are you looking for to lead the new tour program at the heritage center, and does experience matter most? B: Experience is useful, but we really want someone who is {{BLANK}} about local history, because visitors can tell when a guide truly loves the stories and enjoys sharing them with others.",
    "cn": "A：你們在找什麼樣的人來帶領文化資產中心的新導覽計畫？經驗是最重要的嗎？ B：經驗很有用，但我們真正想要的是一個【熱愛】本地歷史的人，因為遊客看得出來導覽員是否真心喜愛這些故事並樂於分享。"
  },
  {
    "word": "occurrence",
    "pos": "n.",
    "cn_def": "發生的事；事件",
    "en_def": "something that happens",
    "sentence": "A: Is it normal for the old train on the history tour route to break down, or should we look for a different way to take our guests? B: It's actually a rare {{BLANK}}, because the engine is checked every week, so I think we can keep the booking and just prepare a backup bus in case anything happens again.",
    "cn": "A：歷史導覽路線上的老火車拋錨是正常的嗎？還是我們應該找別的方式載客人？ B：那其實是很少見的【事】，因為引擎每週都會檢查，所以我想我們可以保留預訂，只要準備一輛備用巴士以防萬一。"
  },
  {
    "word": "prominent",
    "pos": "adj.",
    "cn_def": "傑出的；著名的",
    "en_def": "important and well known",
    "sentence": "A: Why is the city putting up a large statue in the square near our office building, and will the construction affect traffic during working hours? B: It honors a {{BLANK}} businessman who helped rebuild the area after the big fire in 1920, and the workers will only close the road at night, so traffic should be fine.",
    "cn": "A：市政府為什麼要在我們辦公大樓附近的廣場立一座大雕像？施工會影響上班時間的交通嗎？ B：那是為了紀念一位在1920年大火後幫助重建這一區的【傑出】商人，工人只會在晚上封路，所以交通應該沒問題。"
  },
  {
    "word": "frightened",
    "pos": "adj.",
    "cn_def": "害怕的；受驚的",
    "en_def": "feeling afraid",
    "sentence": "A: Why did the children on the school trip leave the old prison museum so quickly, when the teachers had planned a two-hour visit? B: Some of the younger students were {{BLANK}} by the dark cells and the sad stories about the prisoners, so the teachers decided to take everyone to the park nearby instead.",
    "cn": "A：校外教學的孩子們為什麼那麼快就離開了老監獄博物館？老師們原本計畫參觀兩小時。 B：有些年紀較小的學生被陰暗的牢房和關於囚犯的悲傷故事【嚇到】了，所以老師們決定改帶大家去附近的公園。"
  },
  {
    "word": "cherish",
    "pos": "v.",
    "cn_def": "珍惜；珍愛",
    "en_def": "to love and care for something that is important to you",
    "sentence": "A: Why does your grandmother keep that old wooden box on her desk, even though the lock is broken and the paint is coming off? B: It was a gift from her father before he moved overseas for work, so she will always {{BLANK}} it, and she keeps all of his letters and family photos inside it.",
    "cn": "A：你祖母為什麼把那個舊木盒放在書桌上？鎖已經壞了，油漆也在剝落。 B：那是她父親出國工作前送她的禮物，所以她會永遠【珍惜】它，她把父親所有的信和家庭照片都放在裡面。"
  },
  {
    "word": "genre",
    "pos": "n.",
    "cn_def": "類型；體裁",
    "en_def": "a type or style of book, film or music",
    "sentence": "A: Which kind of books sell best at your bookstore near the train station, because I'm thinking of opening a similar shop in my hometown? B: Historical fiction is our most popular {{BLANK}}, especially novels about life during the war, and many office workers buy them to read on the train on their way to work.",
    "cn": "A：你們火車站附近的書店哪一類書賣得最好？我正在考慮在家鄉開一家類似的店。 B：歷史小說是我們最受歡迎的【類型】，尤其是描寫戰爭時期生活的小說，很多上班族會買來在通勤的火車上看。"
  },
  {
    "word": "devour",
    "pos": "v.",
    "cn_def": "狼吞虎嚥；如飢似渴地讀",
    "en_def": "to read or eat something quickly and eagerly",
    "sentence": "A: Did you have time to read the history book about the Silk Road that I lent you before your business trip to Tokyo last week? B: Yes, it was so exciting that I could {{BLANK}} the whole thing during the long flight, and now I want to buy the second volume as soon as possible.",
    "cn": "A：上星期你去東京出差前我借你的那本絲路歷史書，你有時間看嗎？ B：有，那本書太精彩了，我在長途飛行中就把整本【一口氣讀完】，現在我想盡快買第二冊。"
  },
  {
    "word": "chunky",
    "pos": "adj.",
    "cn_def": "厚重的；矮胖的",
    "en_def": "thick and heavy",
    "sentence": "A: Should we buy the complete set of history encyclopedias for the office library, or is there a cheaper choice that would be easier to use? B: Those {{BLANK}} books are heavy and take up a whole shelf, so I suggest buying the online version instead, because employees can search it quickly from their own computers.",
    "cn": "A：我們應該為辦公室圖書室買整套歷史百科全書，還是有更便宜、更方便使用的選擇？ B：那些【厚重的】書很重又占滿一整層架子，所以我建議改買線上版，因為員工可以從自己的電腦快速搜尋。"
  },
  {
    "word": "loathe",
    "pos": "v.",
    "cn_def": "極討厭；厭惡",
    "en_def": "to hate something very much",
    "sentence": "A: Why didn't you sign up for the company history quiz next month, since the winner gets two free tickets to a concert? B: I {{BLANK}} memorizing dates and names because my school history tests always made me nervous, so I'd rather help organize the event and serve drinks to the players.",
    "cn": "A：你為什麼沒報名下個月的公司歷史問答比賽？冠軍可以得到兩張免費音樂會門票。 B：我【極討厭】背日期和人名，因為以前學校的歷史考試總讓我很緊張，所以我寧願幫忙籌辦活動、替參賽者送飲料。"
  },
  {
    "word": "bookshelf",
    "pos": "n.",
    "cn_def": "書架",
    "en_def": "a shelf or piece of furniture for holding books",
    "sentence": "A: Where should I put the new history books that we ordered for the reading corner in the staff lounge, because the table is already full? B: Please put them on the tall wooden {{BLANK}} next to the window, and try to arrange them by date so that people can easily find the period they want to read about.",
    "cn": "A：我們為員工休息室閱讀角訂的新歷史書要放在哪裡？桌子已經滿了。 B：請把它們放在窗邊那個高高的木製【書架】上，並盡量按年代排列，讓大家能輕鬆找到想讀的時期。"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "cn_def": "培養；建立",
    "en_def": "to develop a skill, feeling or relationship over time",
    "sentence": "A: How does your company help new employees understand its values, since many of them come from very different backgrounds and countries? B: We try to {{BLANK}} a strong sense of belonging by sharing the history of the company during training, and we also invite senior staff to tell stories about the early days.",
    "cn": "A：你們公司如何幫助新員工了解公司的價值觀？他們很多人來自非常不同的背景和國家。 B：我們在培訓時分享公司的歷史，藉此努力【培養】強烈的歸屬感，也會邀請資深員工講述創業初期的故事。"
  },
  {
    "word": "decisive",
    "pos": "adj.",
    "cn_def": "決定性的",
    "en_def": "very important for the final result",
    "sentence": "A: Why do historians think that the meeting between the two leaders in 1945 was so important for the region's economy after the war? B: It was a {{BLANK}} moment because they agreed to open the ports for trade, and within ten years the small fishing towns had grown into busy international business centers.",
    "cn": "A：為什麼歷史學家認為1945年兩位領袖的會面對該地區戰後經濟如此重要？ B：那是一個【決定性的】時刻，因為他們同意開放港口通商，十年內那些小漁村就發展成繁忙的國際商業中心。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；戰敗",
    "en_def": "the fact of losing a fight, game or competition",
    "sentence": "A: What is the story behind the old stone monument near the river, where many tourists stop to take pictures during the city tour? B: It marks the place where a small local army suffered a terrible {{BLANK}} in 1683, and every year the city holds a quiet ceremony there to remember the soldiers who died.",
    "cn": "A：河邊那座許多遊客在市區導覽時停下來拍照的古老石碑，背後有什麼故事？ B：它標示著1683年一支地方小軍隊慘遭【戰敗】的地點，每年市政府都會在那裡舉行簡單的儀式，紀念陣亡的士兵。"
  },
  {
    "word": "distorted",
    "pos": "adj.",
    "cn_def": "扭曲的；失真的",
    "en_def": "changed so that it is no longer true or accurate",
    "sentence": "A: Why did the publisher decide to stop selling that popular book about our town's history, even though it was selling very well? B: Several experts said the author gave a {{BLANK}} picture of the past by leaving out important facts, so the publisher decided to correct the mistakes before printing more copies.",
    "cn": "A：那本關於我們鎮歷史的熱門書明明賣得很好，出版社為什麼決定停售？ B：好幾位專家說作者遺漏了重要事實，呈現出【扭曲的】歷史樣貌，所以出版社決定先修正錯誤再加印。"
  },
  {
    "word": "irresponsible",
    "pos": "adj.",
    "cn_def": "不負責任的",
    "en_def": "not thinking enough about the results of your actions",
    "sentence": "A: Why was the building manager so angry when he heard about the plan to remove the old clock tower behind our office? B: He thinks it would be {{BLANK}} to destroy a part of the city's history just to build more parking spaces, and he has asked the local government to protect the tower.",
    "cn": "A：大樓管理員聽到要拆除我們辦公室後面那座老鐘樓的計畫時，為什麼這麼生氣？ B：他認為只為了蓋更多停車位就毀掉城市歷史的一部分是很【不負責任的】，他已經請地方政府保護那座鐘樓。"
  },
  {
    "word": "baffling",
    "pos": "adj.",
    "cn_def": "令人困惑的；難以理解的",
    "en_def": "impossible to understand or explain",
    "sentence": "A: Did the researchers ever find out who wrote those strange letters that were discovered in the basement of the old hotel last spring? B: Not yet, and the case is still {{BLANK}} to everyone, because the letters are written in a language that no expert at the university has been able to understand so far.",
    "cn": "A：研究人員查出去年春天在老飯店地下室發現的那些奇怪信件是誰寫的了嗎？ B：還沒有，這件事至今仍讓大家【困惑不解】，因為那些信是用一種大學裡沒有任何專家看得懂的語言寫的。"
  },
  {
    "word": "amaze",
    "pos": "v.",
    "cn_def": "使驚奇；使驚嘆",
    "en_def": "to surprise someone very much",
    "sentence": "A: Do you think our visitors from Germany will enjoy the trip to the old temple, or should we take them shopping in the city instead? B: The detailed wood carvings and the long history of the temple always {{BLANK}} foreign guests, so I'm sure they'll love it, and we can still go shopping in the evening.",
    "cn": "A：你覺得我們的德國訪客會喜歡去老廟參觀嗎？還是我們應該改帶他們去市區購物？ B：那座廟精細的木雕和悠久的歷史總是讓外國客人【驚嘆不已】，所以我確定他們會喜歡，晚上我們還是可以去購物。"
  },
  {
    "word": "keen",
    "pos": "adj.",
    "cn_def": "熱衷的；渴望的",
    "en_def": "very interested in something or eager to do it",
    "sentence": "A: Why does your new assistant always spend her lunch break reading in the corner of the café instead of chatting with the rest of the team? B: She is very {{BLANK}} on history and is reading a long series about the kings of England, but she's friendly and joins us for dinner on Fridays.",
    "cn": "A：你的新助理為什麼午休時總是在咖啡廳角落看書，而不是和團隊其他人聊天？ B：她非常【熱衷於】歷史，正在讀一套關於英格蘭國王的長篇系列，不過她很友善，星期五都會和我們一起吃晚餐。"
  },
  {
    "word": "hustle",
    "pos": "v.",
    "cn_def": "趕緊；匆忙行動",
    "en_def": "to move or work quickly and with energy",
    "sentence": "A: Why were the museum staff moving so quickly through the hall this morning, when the exhibition doesn't open to the public until next Monday? B: They had to {{BLANK}} to get everything ready before the mayor's private visit at noon, so they were hanging pictures and cleaning the floors as fast as they could.",
    "cn": "A：展覽下星期一才對外開放，為什麼博物館員工今天早上在大廳裡走得那麼急？ B：他們必須【趕緊】在市長中午私下參觀前把一切準備好，所以他們以最快的速度掛畫和清潔地板。"
  }
];

const MCQS = [
  {
    "q": "The retired CEO spent two years writing about his own life. His _____ will be on sale in bookstores next month.",
    "options": [
      "autobiography",
      "genre",
      "occurrence",
      "pursuit"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The guest speaker told how she built her company from nothing. Many employees felt motivated and found her story truly _____.",
    "options": [
      "restricted",
      "inspirational",
      "curricular",
      "chunky"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Few people have heard of the small village where the treaty was signed. It remains a fairly _____ place even to historians.",
    "options": [
      "renowned",
      "decisive",
      "obscure",
      "keen"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The museum hired a _____ architect to design its new wing. Her buildings have won awards in more than ten countries.",
    "options": [
      "frightened",
      "baffling",
      "tedious",
      "renowned"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "New tour guides must _____ the key dates of the city's history. They are not allowed to read from notes during tours.",
    "options": [
      "devour",
      "memorize",
      "cherish",
      "amaze"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Entering thousands of old records into the database by hand was _____. The team was relieved when new software finished the job.",
    "options": [
      "renowned",
      "keen",
      "prominent",
      "tedious"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The old diary offers a rare _____ into the life of a factory worker in 1900. Researchers have studied it for years.",
    "options": [
      "glimpse",
      "defeat",
      "genre",
      "bookshelf"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "If you are near the office this afternoon, please _____ my desk. I have the old photos you asked to borrow.",
    "options": [
      "recollect",
      "devour",
      "drop by",
      "loathe"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The witness could not _____ exactly where she had parked the car. She had to check the security camera footage.",
    "options": [
      "recollect",
      "amaze",
      "cultivate",
      "devour"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Access to the archive room is _____ to senior staff. Other employees must ask the manager for permission to enter.",
    "options": [
      "fascinated",
      "restricted",
      "passionate",
      "keen"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The visitors were _____ by the ancient coins on display. They asked the guide many questions about where they were found.",
    "options": [
      "restricted",
      "curricular",
      "fascinated",
      "distorted"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "She moved to London in _____ of a career in publishing. Within three years she was editing history books.",
    "options": [
      "glimpse",
      "defeat",
      "occurrence",
      "pursuit"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "With only two staff members, the shop was _____ to serve all the tourists. Many customers left without buying anything.",
    "options": [
      "renowned",
      "hard-pressed",
      "obscure",
      "chunky"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our new guide is _____ about local history. She often stays after the tour to answer questions from visitors.",
    "options": [
      "restricted",
      "chunky",
      "distorted",
      "passionate"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Power failures at the museum are a very rare _____. The building has its own generator for emergencies.",
    "options": [
      "occurrence",
      "pursuit",
      "autobiography",
      "bookshelf"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The statue of a _____ local businessman stands in front of the station. He paid for the town's first hospital.",
    "options": [
      "tedious",
      "frightened",
      "prominent",
      "baffling"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The child was _____ by the loud thunder during the night tour. Her parents held her hand until the storm passed.",
    "options": [
      "frightened",
      "renowned",
      "inspirational",
      "curricular"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "My grandmother still has the letters my grandfather wrote during the war. She will always _____ them.",
    "options": [
      "amaze",
      "cherish",
      "hustle",
      "cultivate"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Historical fiction is my favorite _____ of novel to read on weekends. I especially enjoy stories set in ancient China.",
    "options": [
      "pursuit",
      "defeat",
      "genre",
      "occurrence"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "My son loves to _____ adventure novels in a single evening. He has already read the whole series twice.",
    "options": [
      "loathe",
      "recollect",
      "cultivate",
      "devour"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many students _____ history classes that are only about dates. They prefer lessons that tell interesting stories.",
    "options": [
      "amaze",
      "loathe",
      "hustle",
      "recollect"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Please return the encyclopedia to the top of the _____ when you finish. Other people need it for their research.",
    "options": [
      "genre",
      "pursuit",
      "glimpse",
      "bookshelf"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company tries to _____ good relationships with local schools. It offers free museum tickets to students every year.",
    "options": [
      "cultivate",
      "despise",
      "memorize",
      "hustle"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The battle was a _____ moment in the country's history. After it, the war ended within a few weeks.",
    "options": [
      "tedious",
      "chunky",
      "decisive",
      "restricted"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The team's _____ in the final match disappointed its fans. However, the coach promised they would come back stronger next year.",
    "options": [
      "defeat",
      "pursuit",
      "glimpse",
      "genre"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The film gave a _____ picture of the past. Several historians complained that important facts had been changed.",
    "options": [
      "renowned",
      "distorted",
      "keen",
      "fascinated"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Leaving the museum doors unlocked overnight was _____. The security guard was given a warning by the manager.",
    "options": [
      "renowned",
      "curricular",
      "irresponsible",
      "chunky"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The disappearance of the ancient ship remains _____ to experts. No one can explain how it vanished without a trace.",
    "options": [
      "passionate",
      "chunky",
      "curricular",
      "baffling"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The detailed carvings in the old temple never fail to _____ visitors. Many people spend hours taking photos of them.",
    "options": [
      "cultivate",
      "amaze",
      "recollect",
      "loathe"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Our manager is very _____ on history and visits museums whenever he travels. He has been to over fifty countries.",
    "options": [
      "restricted",
      "obscure",
      "distorted",
      "keen"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "autobiography": {
    "pos": "n.",
    "en_def": "a book a person writes about their own life",
    "cn_def": "自傳"
  },
  "inspirational": {
    "pos": "adj.",
    "en_def": "making people feel hopeful and want to do something",
    "cn_def": "鼓舞人心的"
  },
  "obscure": {
    "pos": "adj.",
    "en_def": "not well known",
    "cn_def": "鮮為人知的；不出名的"
  },
  "renowned": {
    "pos": "adj.",
    "en_def": "famous and admired by many people",
    "cn_def": "著名的；有聲望的"
  },
  "memorize": {
    "pos": "v.",
    "en_def": "to learn something so well that you can remember it exactly",
    "cn_def": "背熟；記住"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "long, boring and tiring",
    "cn_def": "冗長乏味的"
  },
  "dull": {
    "pos": "adj.",
    "en_def": "not interesting or exciting",
    "cn_def": "枯燥的；無聊的"
  },
  "despise": {
    "pos": "v.",
    "en_def": "to dislike someone or something very much and have no respect for them",
    "cn_def": "鄙視；看不起"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick or brief look at something",
    "cn_def": "一瞥；略見"
  },
  "drop by": {
    "pos": "v.phr.",
    "en_def": "to visit a place for a short time, often without planning",
    "cn_def": "順道拜訪；順便去"
  },
  "recollect": {
    "pos": "v.",
    "en_def": "to remember something from the past",
    "cn_def": "回想；記起"
  },
  "restricted": {
    "pos": "adj.",
    "en_def": "limited or controlled by rules",
    "cn_def": "受限制的"
  },
  "fascinated": {
    "pos": "adj.",
    "en_def": "extremely interested in something",
    "cn_def": "著迷的"
  },
  "curricular": {
    "pos": "adj.",
    "en_def": "connected with the subjects taught at a school or college",
    "cn_def": "課程的"
  },
  "pursuit": {
    "pos": "n.",
    "en_def": "the act of trying to get or achieve something",
    "cn_def": "追求"
  },
  "hard-pressed": {
    "pos": "adj.",
    "en_def": "having great difficulty doing something, often because of lack of time or money",
    "cn_def": "處境困難的；很難做到的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong feelings of liking something",
    "cn_def": "熱愛的；充滿熱情的"
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "something that happens",
    "cn_def": "發生的事；事件"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known",
    "cn_def": "傑出的；著名的"
  },
  "frightened": {
    "pos": "adj.",
    "en_def": "feeling afraid",
    "cn_def": "害怕的；受驚的"
  },
  "cherish": {
    "pos": "v.",
    "en_def": "to love and care for something that is important to you",
    "cn_def": "珍惜；珍愛"
  },
  "genre": {
    "pos": "n.",
    "en_def": "a type or style of book, film or music",
    "cn_def": "類型；體裁"
  },
  "devour": {
    "pos": "v.",
    "en_def": "to read or eat something quickly and eagerly",
    "cn_def": "狼吞虎嚥；如飢似渴地讀"
  },
  "chunky": {
    "pos": "adj.",
    "en_def": "thick and heavy",
    "cn_def": "厚重的；矮胖的"
  },
  "loathe": {
    "pos": "v.",
    "en_def": "to hate something very much",
    "cn_def": "極討厭；厭惡"
  },
  "bookshelf": {
    "pos": "n.",
    "en_def": "a shelf or piece of furniture for holding books",
    "cn_def": "書架"
  },
  "cultivate": {
    "pos": "v.",
    "en_def": "to develop a skill, feeling or relationship over time",
    "cn_def": "培養；建立"
  },
  "decisive": {
    "pos": "adj.",
    "en_def": "very important for the final result",
    "cn_def": "決定性的"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "the fact of losing a fight, game or competition",
    "cn_def": "失敗；戰敗"
  },
  "distorted": {
    "pos": "adj.",
    "en_def": "changed so that it is no longer true or accurate",
    "cn_def": "扭曲的；失真的"
  },
  "irresponsible": {
    "pos": "adj.",
    "en_def": "not thinking enough about the results of your actions",
    "cn_def": "不負責任的"
  },
  "baffling": {
    "pos": "adj.",
    "en_def": "impossible to understand or explain",
    "cn_def": "令人困惑的；難以理解的"
  },
  "amaze": {
    "pos": "v.",
    "en_def": "to surprise someone very much",
    "cn_def": "使驚奇；使驚嘆"
  },
  "keen": {
    "pos": "adj.",
    "en_def": "very interested in something or eager to do it",
    "cn_def": "熱衷的；渴望的"
  },
  "hustle": {
    "pos": "v.",
    "en_def": "to move or work quickly and with energy",
    "cn_def": "趕緊；匆忙行動"
  }
};

const EXTRA_GLOSSES = {};
