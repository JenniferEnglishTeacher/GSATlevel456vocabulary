// Topic 14 Subunit 5 Quiz Data: Fact-Checking & Media Literacy 事實查核與媒體素養
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T14 S05 - Fact-Checking & Media Literacy 事實查核與媒體素養",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fact-check",
    "pos": "v.",
    "cn_def": "查核事實",
    "en_def": "to make sure that information is correct",
    "sentence": "Before you share a shocking story, you should {{BLANK}} it on a reliable website, because many viral posts are false.",
    "cn": "在分享一則驚人的消息之前，你應該到可靠的網站查核事實，因為許多爆紅的貼文是假的。"
  },
  {
    "word": "fact-checker",
    "pos": "n.",
    "cn_def": "事實查核員；查核機構",
    "en_def": "a person or group that checks if claims are true",
    "sentence": "A {{BLANK}} found that the quote was invented, so the newspaper removed the article and apologised.",
    "cn": "一位事實查核員發現那句引言是捏造的，所以報社撤下文章並道歉。"
  },
  {
    "word": "media literacy",
    "pos": "n.phr.",
    "cn_def": "媒體素養",
    "en_def": "the ability to judge and understand news and media",
    "sentence": "Our school teaches {{BLANK}} in Year 10, so students learn how to recognise fake photos and misleading headlines.",
    "cn": "我們學校在十年級教媒體素養，所以學生學習如何辨認假照片和誤導性標題。"
  },
  {
    "word": "reverse image search",
    "pos": "n.phr.",
    "cn_def": "以圖搜圖；反向圖片搜尋",
    "en_def": "a search that finds where a picture first appeared",
    "sentence": "I did a {{BLANK}} on the photo, and I found that it was taken five years earlier in another country.",
    "cn": "我對那張照片做了以圖搜圖，發現它是五年前在另一個國家拍的。"
  },
  {
    "word": "citation",
    "pos": "n.",
    "cn_def": "引用；出處",
    "en_def": "a note showing where information came from",
    "sentence": "Wikipedia asks writers to add a {{BLANK}} for every fact, so readers can check the original source themselves.",
    "cn": "維基百科要求作者為每個事實加上出處，讓讀者可以自己查證原始來源。"
  },
  {
    "word": "cross-check",
    "pos": "v.",
    "cn_def": "交叉比對；交叉核對",
    "en_def": "to check information using a different source",
    "sentence": "Good reporters {{BLANK}} every claim with at least two sources, because one person might be mistaken or lying.",
    "cn": "優秀的記者會用至少兩個來源交叉核對每一項說法，因為一個人可能弄錯或說謊。"
  },
  {
    "word": "retraction",
    "pos": "n.",
    "cn_def": "撤回聲明；撤稿",
    "en_def": "a statement saying something published earlier was wrong",
    "sentence": "The magazine printed a {{BLANK}} the following week, but far fewer people saw it than the original false story.",
    "cn": "那本雜誌隔週刊登了撤回聲明，但看到的人比原本那則假報導少得多。"
  },
  {
    "word": "correction",
    "pos": "n.",
    "cn_def": "更正啟事；更正",
    "en_def": "a notice that fixes a mistake in a report",
    "sentence": "The website added a {{BLANK}} at the bottom of the article, because the date of the event had been wrong.",
    "cn": "那個網站在文章底部加上了更正啟事，因為活動日期寫錯了。"
  },
  {
    "word": "disclaimer",
    "pos": "n.",
    "cn_def": "免責聲明",
    "en_def": "a statement saying you are not responsible for something",
    "sentence": "The video had a {{BLANK}} saying it was for entertainment only, but many viewers still treated it as medical advice.",
    "cn": "那部影片有一則免責聲明說它僅供娛樂，但許多觀眾仍然把它當作醫療建議。"
  },
  {
    "word": "reputable",
    "pos": "adj.",
    "cn_def": "聲譽良好的；可信賴的",
    "en_def": "known to be honest and reliable",
    "sentence": "For your project, please use {{BLANK}} sources such as university websites, because blogs may contain personal opinions.",
    "cn": "做專題時請使用信譽良好的資料來源，例如大學網站，因為部落格可能包含個人意見。"
  },
  {
    "word": "authoritative",
    "pos": "adj.",
    "cn_def": "權威的；可信的",
    "en_def": "trusted because it comes from an expert",
    "sentence": "The health ministry's website is the most {{BLANK}} source of vaccine information, so I always check it first.",
    "cn": "衛福部的網站是疫苗資訊最權威的來源，所以我總是先查看它。"
  },
  {
    "word": "lateral reading",
    "pos": "n.phr.",
    "cn_def": "橫向閱讀",
    "en_def": "checking a site by reading what other sites say about it",
    "sentence": "Instead of staying on one website, try {{BLANK}}, because other sources can tell you whether that site is trustworthy.",
    "cn": "不要只停留在一個網站上，試試橫向閱讀，因為其他來源可以告訴你那個網站是否可信。"
  },
  {
    "word": "timestamp",
    "pos": "n.",
    "cn_def": "時間戳記",
    "en_def": "the date and time when something was posted or recorded",
    "sentence": "The {{BLANK}} on the video showed it was filmed in 2019, so it could not be from yesterday's storm.",
    "cn": "影片上的時間戳記顯示它是在 2019 年拍的，所以它不可能是昨天暴風雨的畫面。"
  },
  {
    "word": "metadata",
    "pos": "n.",
    "cn_def": "詮釋資料；後設資料",
    "en_def": "hidden information about a digital file",
    "sentence": "Experts studied the photo's {{BLANK}}, and they discovered the exact phone and date used to take it.",
    "cn": "專家研究了照片的詮釋資料，發現了拍攝時所用的手機型號與確切日期。"
  },
  {
    "word": "watermark",
    "pos": "n.",
    "cn_def": "浮水印",
    "en_def": "a faint logo on an image to show who owns it",
    "sentence": "The photographer adds a {{BLANK}} to every picture, so other websites cannot use her work without permission.",
    "cn": "那位攝影師在每張照片上都加浮水印，所以其他網站無法未經許可使用她的作品。"
  },
  {
    "word": "evidence-based",
    "pos": "adj.",
    "cn_def": "以證據為基礎的；實證的",
    "en_def": "based on facts from research",
    "sentence": "The doctor only gives {{BLANK}} advice, so she told us not to trust diet tips from random videos.",
    "cn": "那位醫生只給有實證根據的建議，所以她告訴我們不要相信隨便哪部影片裡的減肥秘訣。"
  },
  {
    "word": "moderator",
    "pos": "n.",
    "cn_def": "版主；內容審核員",
    "en_def": "a person who checks and controls posts in an online group",
    "sentence": "The forum {{BLANK}} deletes rude comments quickly, so the discussion usually stays friendly and helpful.",
    "cn": "那個論壇的版主很快就會刪除無禮的留言，所以討論通常保持友善且有幫助。"
  },
  {
    "word": "flag",
    "pos": "v.",
    "cn_def": "標記；檢舉",
    "en_def": "to mark something as possibly wrong or harmful",
    "sentence": "Users can {{BLANK}} posts that look false, and then the platform sends them to fact-checkers for review.",
    "cn": "使用者可以標記看起來不實的貼文，然後平台會把它們送交事實查核員審查。"
  },
  {
    "word": "takedown",
    "pos": "n.",
    "cn_def": "下架；移除",
    "en_def": "the removal of content from a website",
    "sentence": "After the singer complained, the website received a {{BLANK}} notice, so the stolen song was removed within hours.",
    "cn": "那位歌手投訴後，網站收到了下架通知，所以被盜用的歌曲在幾小時內就被移除了。"
  },
  {
    "word": "mistrust",
    "pos": "n.",
    "cn_def": "不信任；猜疑",
    "en_def": "a feeling that you cannot believe someone",
    "sentence": "Years of false promises have created deep {{BLANK}} of politicians, so many young people no longer bother to vote.",
    "cn": "多年來的虛假承諾造成了對政治人物深深的不信任，所以許多年輕人不再費心去投票。"
  },
  {
    "word": "trust",
    "pos": "n.",
    "cn_def": "信任",
    "en_def": "the belief that someone is honest and reliable",
    "sentence": "Once a news channel loses viewers' {{BLANK}}, it is very difficult to win back, even if it apologises.",
    "cn": "一家新聞台一旦失去觀眾的信任，即使道歉也很難再贏回來。"
  },
  {
    "word": "slant",
    "pos": "n.",
    "cn_def": "偏頗角度；傾向",
    "en_def": "a way of presenting news that favours one side",
    "sentence": "The article had a clear political {{BLANK}}, because it quoted only people who supported the new law.",
    "cn": "那篇文章有明顯的政治傾向，因為它只引用了支持新法的人的話。"
  },
  {
    "word": "loaded language",
    "pos": "n.phr.",
    "cn_def": "情緒性字眼；煽情用語",
    "en_def": "words chosen to create strong emotions",
    "sentence": "The report used {{BLANK}} like \"invasion\" and \"disaster\", so readers felt scared before they knew the facts.",
    "cn": "那篇報導使用了「入侵」和「災難」等情緒性字眼，所以讀者在了解事實之前就感到害怕。"
  }
];

const MCQS = [
  {
    "q": "Before you share a shocking story, you should _____ it on a reliable website, because many viral posts are false.",
    "options": [
      "livestream",
      "hijack",
      "monetise",
      "fact-check"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "A _____ found that the quote was invented, so the newspaper removed the article and apologised.",
    "options": [
      "eyewitness",
      "allegation",
      "fact-checker",
      "newscast"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our school teaches _____ in Year 10, so students learn how to recognise fake photos and misleading headlines.",
    "options": [
      "troll farm",
      "media literacy",
      "pop-up ad",
      "social media"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "I did a _____ on the photo, and I found that it was taken five years earlier in another country.",
    "options": [
      "reverse image search",
      "product placement",
      "content creator",
      "talk show"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Wikipedia asks writers to add a _____ for every fact, so readers can check the original source themselves.",
    "options": [
      "hashtag",
      "hype",
      "citation",
      "misnomer"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Good reporters _____ every claim with at least two sources, because one person might be mistaken or lying.",
    "options": [
      "cross-check",
      "eschew",
      "profess",
      "foment"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The magazine printed a _____ the following week, but far fewer people saw it than the original false story.",
    "options": [
      "billboard",
      "acronym",
      "frenzy",
      "retraction"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The website added a _____ at the bottom of the article, because the date of the event had been wrong.",
    "options": [
      "documentary",
      "correction",
      "innuendo",
      "host"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The video had a _____ saying it was for entertainment only, but many viewers still treated it as medical advice.",
    "options": [
      "disclaimer",
      "newscast",
      "half-truth",
      "scoop"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "For your project, please use _____ sources such as university websites, because blogs may contain personal opinions.",
    "options": [
      "doctored",
      "vocal",
      "culpable",
      "reputable"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The health ministry's website is the most _____ source of vaccine information, so I always check it first.",
    "options": [
      "one-sided",
      "partisan",
      "authoritative",
      "verbal"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Instead of staying on one website, try _____, because other sources can tell you whether that site is trustworthy.",
    "options": [
      "talk show",
      "lateral reading",
      "spin doctor",
      "prime time"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The _____ on the video showed it was filmed in 2019, so it could not be from yesterday's storm.",
    "options": [
      "plurality",
      "studio",
      "timestamp",
      "platitude"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Experts studied the photo's _____, and they discovered the exact phone and date used to take it.",
    "options": [
      "scoop",
      "metadata",
      "hypocrisy",
      "speech"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The photographer adds a _____ to every picture, so other websites cannot use her work without permission.",
    "options": [
      "subtitle",
      "furore",
      "frenzy",
      "watermark"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The doctor only gives _____ advice, so she told us not to trust diet tips from random videos.",
    "options": [
      "evidence-based",
      "inflammatory",
      "emotive",
      "jaded"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The forum _____ deletes rude comments quickly, so the discussion usually stays friendly and helpful.",
    "options": [
      "disinformation",
      "libel",
      "moderator",
      "spokesperson"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Users can _____ posts that look false, and then the platform sends them to fact-checkers for review.",
    "options": [
      "flag",
      "monetise",
      "broadcast",
      "orchestrate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "After the singer complained, the website received a _____ notice, so the stolen song was removed within hours.",
    "options": [
      "advertiser",
      "takedown",
      "rumour",
      "billboard"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Years of false promises have created deep _____ of politicians, so many young people no longer bother to vote.",
    "options": [
      "parody",
      "paywall",
      "scoop",
      "mistrust"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Once a news channel loses viewers' _____, it is very difficult to win back, even if it apologises.",
    "options": [
      "speech",
      "brand",
      "trust",
      "outreach"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The article had a clear political _____, because it quoted only people who supported the new law.",
    "options": [
      "slant",
      "television",
      "hype",
      "detractor"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The report used _____ like \"invasion\" and \"disaster\", so readers felt scared before they knew the facts.",
    "options": [
      "mass media",
      "front page",
      "word of mouth",
      "loaded language"
    ],
    "answer": 3,
    "vocabIndex": 22
  }
];

const LOOKUP = {
  "fact-check": {
    "pos": "v.",
    "en_def": "to make sure that information is correct",
    "cn_def": "查核事實"
  },
  "fact-checker": {
    "pos": "n.",
    "en_def": "a person or group that checks if claims are true",
    "cn_def": "事實查核員；查核機構"
  },
  "media literacy": {
    "pos": "n.phr.",
    "en_def": "the ability to judge and understand news and media",
    "cn_def": "媒體素養"
  },
  "reverse image search": {
    "pos": "n.phr.",
    "en_def": "a search that finds where a picture first appeared",
    "cn_def": "以圖搜圖；反向圖片搜尋"
  },
  "citation": {
    "pos": "n.",
    "en_def": "a note showing where information came from",
    "cn_def": "引用；出處"
  },
  "cross-check": {
    "pos": "v.",
    "en_def": "to check information using a different source",
    "cn_def": "交叉比對；交叉核對"
  },
  "retraction": {
    "pos": "n.",
    "en_def": "a statement saying something published earlier was wrong",
    "cn_def": "撤回聲明；撤稿"
  },
  "correction": {
    "pos": "n.",
    "en_def": "a notice that fixes a mistake in a report",
    "cn_def": "更正啟事；更正"
  },
  "disclaimer": {
    "pos": "n.",
    "en_def": "a statement saying you are not responsible for something",
    "cn_def": "免責聲明"
  },
  "reputable": {
    "pos": "adj.",
    "en_def": "known to be honest and reliable",
    "cn_def": "聲譽良好的；可信賴的"
  },
  "authoritative": {
    "pos": "adj.",
    "en_def": "trusted because it comes from an expert",
    "cn_def": "權威的；可信的"
  },
  "lateral reading": {
    "pos": "n.phr.",
    "en_def": "checking a site by reading what other sites say about it",
    "cn_def": "橫向閱讀"
  },
  "timestamp": {
    "pos": "n.",
    "en_def": "the date and time when something was posted or recorded",
    "cn_def": "時間戳記"
  },
  "metadata": {
    "pos": "n.",
    "en_def": "hidden information about a digital file",
    "cn_def": "詮釋資料；後設資料"
  },
  "watermark": {
    "pos": "n.",
    "en_def": "a faint logo on an image to show who owns it",
    "cn_def": "浮水印"
  },
  "evidence-based": {
    "pos": "adj.",
    "en_def": "based on facts from research",
    "cn_def": "以證據為基礎的；實證的"
  },
  "moderator": {
    "pos": "n.",
    "en_def": "a person who checks and controls posts in an online group",
    "cn_def": "版主；內容審核員"
  },
  "flag": {
    "pos": "v.",
    "en_def": "to mark something as possibly wrong or harmful",
    "cn_def": "標記；檢舉"
  },
  "takedown": {
    "pos": "n.",
    "en_def": "the removal of content from a website",
    "cn_def": "下架；移除"
  },
  "mistrust": {
    "pos": "n.",
    "en_def": "a feeling that you cannot believe someone",
    "cn_def": "不信任；猜疑"
  },
  "trust": {
    "pos": "n.",
    "en_def": "the belief that someone is honest and reliable",
    "cn_def": "信任"
  },
  "slant": {
    "pos": "n.",
    "en_def": "a way of presenting news that favours one side",
    "cn_def": "偏頗角度；傾向"
  },
  "loaded language": {
    "pos": "n.phr.",
    "en_def": "words chosen to create strong emotions",
    "cn_def": "情緒性字眼；煽情用語"
  },
  "livestream": {
    "pos": "v.",
    "en_def": "to show video on the internet as it happens",
    "cn_def": "直播"
  },
  "hijack": {
    "pos": "v.",
    "en_def": "to take control of something for your own purposes",
    "cn_def": "劫持；挾持（議題）"
  },
  "monetise": {
    "pos": "v.",
    "en_def": "to earn money from something",
    "cn_def": "使獲利；變現"
  },
  "eyewitness": {
    "pos": "n.",
    "en_def": "a person who saw an event happen",
    "cn_def": "目擊者"
  },
  "allegation": {
    "pos": "n.",
    "en_def": "a claim that someone did something wrong, without proof yet",
    "cn_def": "指控；（未經證實的）說法"
  },
  "newscast": {
    "pos": "n.",
    "en_def": "a news programme on TV or radio",
    "cn_def": "新聞報導節目"
  },
  "troll farm": {
    "pos": "n.phr.",
    "en_def": "a group paid to post false or angry comments online",
    "cn_def": "網軍工廠"
  },
  "pop-up ad": {
    "pos": "n.phr.",
    "en_def": "an advert that suddenly appears in a new window online",
    "cn_def": "彈出式廣告"
  },
  "social media": {
    "pos": "n.phr.",
    "en_def": "websites and apps where people share content and talk",
    "cn_def": "社群媒體"
  },
  "product placement": {
    "pos": "n.phr.",
    "en_def": "showing a brand inside a film or show to advertise it",
    "cn_def": "置入性行銷"
  },
  "content creator": {
    "pos": "n.phr.",
    "en_def": "a person who makes videos, posts or other online material",
    "cn_def": "內容創作者"
  },
  "talk show": {
    "pos": "n.phr.",
    "en_def": "a programme where a host chats with guests",
    "cn_def": "脫口秀；談話節目"
  },
  "hashtag": {
    "pos": "n.",
    "en_def": "a word after the # sign used to group posts",
    "cn_def": "主題標籤；#標籤"
  },
  "hype": {
    "pos": "n.",
    "en_def": "exaggerated excitement and advertising about something",
    "cn_def": "炒作；大肆宣傳"
  },
  "misnomer": {
    "pos": "n.",
    "en_def": "a name that does not describe something correctly",
    "cn_def": "用詞不當；名不副實"
  },
  "eschew": {
    "pos": "v.",
    "en_def": "to avoid something on purpose",
    "cn_def": "刻意避開；避免"
  },
  "profess": {
    "pos": "v.",
    "en_def": "to claim something, often falsely",
    "cn_def": "聲稱；自稱"
  },
  "foment": {
    "pos": "v.",
    "en_def": "to cause trouble or violence",
    "cn_def": "煽動；挑起"
  },
  "billboard": {
    "pos": "n.",
    "en_def": "a very large outdoor sign for adverts",
    "cn_def": "廣告看板"
  },
  "acronym": {
    "pos": "n.",
    "en_def": "a word made from the first letters of other words",
    "cn_def": "首字母縮略字"
  },
  "frenzy": {
    "pos": "n.",
    "en_def": "a state of wild excitement",
    "cn_def": "狂熱；瘋狂"
  },
  "documentary": {
    "pos": "n.",
    "en_def": "a film or programme that gives facts about a real topic",
    "cn_def": "紀錄片"
  },
  "innuendo": {
    "pos": "n.",
    "en_def": "an indirect remark suggesting something bad",
    "cn_def": "含沙射影的話；影射"
  },
  "host": {
    "pos": "n.",
    "en_def": "the person who introduces a show and talks to guests",
    "cn_def": "主持人"
  },
  "half-truth": {
    "pos": "n.",
    "en_def": "a statement that is partly true but hides important facts",
    "cn_def": "半真半假的話"
  },
  "scoop": {
    "pos": "n.",
    "en_def": "an important story one newspaper reports first",
    "cn_def": "獨家新聞"
  },
  "doctored": {
    "pos": "adj.",
    "en_def": "changed in a dishonest way",
    "cn_def": "竄改過的；動過手腳的"
  },
  "vocal": {
    "pos": "adj.",
    "en_def": "expressing opinions strongly and publicly",
    "cn_def": "直言的；大聲疾呼的"
  },
  "culpable": {
    "pos": "adj.",
    "en_def": "deserving blame",
    "cn_def": "應受責備的；有罪責的"
  },
  "one-sided": {
    "pos": "adj.",
    "en_def": "showing only one point of view",
    "cn_def": "片面的；一面倒的"
  },
  "partisan": {
    "pos": "adj.",
    "en_def": "strongly supporting one political party",
    "cn_def": "偏袒某一黨派的"
  },
  "verbal": {
    "pos": "adj.",
    "en_def": "using spoken words",
    "cn_def": "口頭的；言語的"
  },
  "spin doctor": {
    "pos": "n.phr.",
    "en_def": "a person paid to make news look good for a politician",
    "cn_def": "公關操盤手；政治化妝師"
  },
  "prime time": {
    "pos": "n.phr.",
    "en_def": "the evening hours when most people watch TV",
    "cn_def": "黃金時段"
  },
  "plurality": {
    "pos": "n.",
    "en_def": "a large number of different things",
    "cn_def": "多元；多數"
  },
  "studio": {
    "pos": "n.",
    "en_def": "a room where TV, radio or music is recorded",
    "cn_def": "攝影棚；錄音室"
  },
  "platitude": {
    "pos": "n.",
    "en_def": "a statement that is too obvious and often used",
    "cn_def": "陳腔濫調；老生常談"
  },
  "hypocrisy": {
    "pos": "n.",
    "en_def": "saying one thing but doing the opposite",
    "cn_def": "虛偽；偽善"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to an audience",
    "cn_def": "演講；致詞"
  },
  "subtitle": {
    "pos": "n.",
    "en_def": "words at the bottom of the screen translating speech",
    "cn_def": "字幕"
  },
  "furore": {
    "pos": "n.",
    "en_def": "a sudden expression of public anger",
    "cn_def": "騷動；公憤"
  },
  "inflammatory": {
    "pos": "adj.",
    "en_def": "likely to make people angry or violent",
    "cn_def": "煽動性的；激起憤怒的"
  },
  "emotive": {
    "pos": "adj.",
    "en_def": "causing strong feelings",
    "cn_def": "引起強烈情感的"
  },
  "jaded": {
    "pos": "adj.",
    "en_def": "bored or tired because you have seen too much of something",
    "cn_def": "厭倦的；麻木的"
  },
  "disinformation": {
    "pos": "n.",
    "en_def": "false information spread on purpose to trick people",
    "cn_def": "蓄意造假的訊息；假訊息"
  },
  "libel": {
    "pos": "n.",
    "en_def": "false written statements that damage someone's reputation",
    "cn_def": "（書面）誹謗"
  },
  "spokesperson": {
    "pos": "n.",
    "en_def": "a person who speaks officially for a group",
    "cn_def": "發言人"
  },
  "broadcast": {
    "pos": "v.",
    "en_def": "to send out a programme on TV or radio",
    "cn_def": "播出；廣播"
  },
  "orchestrate": {
    "pos": "v.",
    "en_def": "to organise something carefully, often secretly",
    "cn_def": "精心策劃；暗中安排"
  },
  "advertiser": {
    "pos": "n.",
    "en_def": "a company that pays for adverts",
    "cn_def": "廣告主；廣告商"
  },
  "rumour": {
    "pos": "n.",
    "en_def": "a story passed between people that may not be true",
    "cn_def": "謠言；傳聞"
  },
  "parody": {
    "pos": "n.",
    "en_def": "a funny copy of something that exaggerates it",
    "cn_def": "模仿惡搞作品"
  },
  "paywall": {
    "pos": "n.",
    "en_def": "a system that makes you pay to read online articles",
    "cn_def": "付費牆"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a product name made by a particular company",
    "cn_def": "品牌"
  },
  "outreach": {
    "pos": "n.",
    "en_def": "efforts to give help or information to people",
    "cn_def": "推廣服務；外展活動"
  },
  "television": {
    "pos": "n.",
    "en_def": "a system or machine for watching programmes",
    "cn_def": "電視"
  },
  "detractor": {
    "pos": "n.",
    "en_def": "a person who criticises someone or something",
    "cn_def": "批評者；貶低者"
  },
  "mass media": {
    "pos": "n.phr.",
    "en_def": "TV, radio and newspapers that reach large numbers of people",
    "cn_def": "大眾傳播媒體"
  },
  "front page": {
    "pos": "n.phr.",
    "en_def": "the first page of a newspaper with the main news",
    "cn_def": "頭版"
  },
  "word of mouth": {
    "pos": "n.phr.",
    "en_def": "information passed from person to person by talking",
    "cn_def": "口耳相傳；口碑"
  }
};

const EXTRA_GLOSSES = {};
