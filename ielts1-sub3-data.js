// Topic 1 Subunit 3 Quiz Data: Generative AI & Digital Tools 生成式AI與數位工具
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T01 S03 - Generative AI & Digital Tools 生成式AI與數位工具",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chatbot",
    "pos": "n.",
    "cn_def": "聊天機器人",
    "en_def": "a computer program that talks with people using text or voice",
    "sentence": "When I had a question about my order late at night, a {{BLANK}} answered me at once, but it could not solve the problem.",
    "cn": "我深夜對訂單有疑問時,一個聊天機器人立刻回覆了我,但它沒辦法解決問題。"
  },
  {
    "word": "prompt",
    "pos": "n.",
    "cn_def": "提示詞;指令",
    "en_def": "the instruction or question you type into an AI tool",
    "sentence": "If you write a clear {{BLANK}} with details, the AI gives better answers, but a short vague question often gets a poor reply.",
    "cn": "如果你寫出清楚又有細節的提示詞,人工智慧會給出更好的答案,但簡短模糊的問題常常得到很差的回覆。"
  },
  {
    "word": "generative",
    "pos": "adj.",
    "cn_def": "生成式的",
    "en_def": "able to create new text, pictures or sound",
    "sentence": "{{BLANK}} AI can write a poem in seconds, but many teachers say students still need to learn how to write their own.",
    "cn": "生成式人工智慧能在幾秒內寫出一首詩,但許多老師說學生仍需要學會自己寫作。"
  },
  {
    "word": "deepfake",
    "pos": "n.",
    "cn_def": "深偽(影片)",
    "en_def": "a fake video or voice made by AI that looks real",
    "sentence": "A {{BLANK}} of a famous singer spread online last week, and many fans believed it until the singer posted a warning.",
    "cn": "上週一段知名歌手的深偽影片在網路上流傳,許多粉絲都信以為真,直到歌手發文警告。"
  },
  {
    "word": "assistant",
    "pos": "n.",
    "cn_def": "助理;助手",
    "en_def": "a person or program that helps someone do tasks",
    "sentence": "I ask the voice {{BLANK}} on my phone to set alarms and check the weather, so I rarely type these things myself.",
    "cn": "我請手機上的語音助理設定鬧鐘和查天氣,所以我很少自己輸入這些事。"
  },
  {
    "word": "translate",
    "pos": "v.",
    "cn_def": "翻譯",
    "en_def": "to change words into another language",
    "sentence": "Tourists can now {{BLANK}} menus by pointing their phone camera at them, so ordering food abroad is much easier.",
    "cn": "遊客現在只要把手機鏡頭對準菜單就能翻譯,所以在國外點餐容易多了。"
  },
  {
    "word": "summarise",
    "pos": "v.",
    "cn_def": "總結;摘要",
    "en_def": "to give the main points in a short form",
    "sentence": "My classmate asked an AI to {{BLANK}} the novel for her, but she failed the quiz because she missed important details.",
    "cn": "我同學請人工智慧幫她摘要那本小說,但她因為漏掉了重要細節而考不及格。"
  },
  {
    "word": "paraphrase",
    "pos": "v.",
    "cn_def": "改寫;換句話說",
    "en_def": "to say something again using different words",
    "sentence": "Students should {{BLANK}} ideas from websites in their own words, because copying sentences exactly counts as cheating.",
    "cn": "學生應該用自己的話改寫網站上的想法,因為一字不漏地抄句子算是作弊。"
  },
  {
    "word": "draft",
    "pos": "n.",
    "cn_def": "草稿",
    "en_def": "an early version of a piece of writing",
    "sentence": "The AI helped me write a first {{BLANK}} of my speech, but I changed most of it so that it sounded like me.",
    "cn": "人工智慧幫我寫出了演講稿的初版草稿,但我改了大部分內容,讓它聽起來像我自己。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯;修改",
    "en_def": "to correct and improve a piece of writing or a video",
    "sentence": "I usually {{BLANK}} my essays twice before I hand them in, and this year I also check the grammar with an online tool.",
    "cn": "我交作文前通常會修改兩次,今年我還會用線上工具檢查文法。"
  },
  {
    "word": "avatar",
    "pos": "n.",
    "cn_def": "虛擬化身;大頭貼",
    "en_def": "a picture or character that represents you online",
    "sentence": "In the online English class, each student chooses a cartoon {{BLANK}}, so shy learners feel more relaxed when they speak.",
    "cn": "在線上英文課中,每位學生都會選一個卡通虛擬化身,所以害羞的學習者說話時會比較放鬆。"
  },
  {
    "word": "app",
    "pos": "n.",
    "cn_def": "應用程式",
    "en_def": "a program you download onto a phone or tablet",
    "sentence": "I use a language-learning {{BLANK}} for ten minutes every morning, and it reminds me if I forget to practise.",
    "cn": "我每天早上用一個語言學習應用程式十分鐘,如果我忘了練習,它就會提醒我。"
  },
  {
    "word": "platform",
    "pos": "n.",
    "cn_def": "平台",
    "en_def": "a website or service where people share and use content",
    "sentence": "The video {{BLANK}} removed hundreds of fake AI videos, but new ones appeared almost as fast as they were deleted.",
    "cn": "這個影音平台刪除了數百支人工智慧假影片,但新的影片幾乎和被刪除的速度一樣快地冒出來。"
  },
  {
    "word": "download",
    "pos": "v.",
    "cn_def": "下載",
    "en_def": "to copy files from the internet onto your device",
    "sentence": "You can {{BLANK}} the lecture notes from the school website, so you do not need to copy everything from the board.",
    "cn": "你可以從學校網站下載上課講義,所以不需要把黑板上的東西全部抄下來。"
  },
  {
    "word": "upload",
    "pos": "v.",
    "cn_def": "上傳",
    "en_def": "to send files from your device to the internet",
    "sentence": "Please {{BLANK}} your project before midnight on Friday, because the system closes automatically after that.",
    "cn": "請在星期五午夜前上傳你的專題,因為系統在那之後會自動關閉。"
  },
  {
    "word": "browser",
    "pos": "n.",
    "cn_def": "瀏覽器",
    "en_def": "a program used to look at websites",
    "sentence": "My {{BLANK}} kept showing adverts for shoes I had searched for once, so I cleared my history to stop it.",
    "cn": "我的瀏覽器一直顯示我曾經搜尋過的鞋子廣告,所以我清除了瀏覽紀錄來阻止它。"
  },
  {
    "word": "subscription",
    "pos": "n.",
    "cn_def": "訂閱",
    "en_def": "money you pay regularly to use a service",
    "sentence": "The premium AI tool needs a monthly {{BLANK}}, but my school pays for it, so students can use it for free.",
    "cn": "進階版人工智慧工具需要每月訂閱,但學校幫我們付費,所以學生可以免費使用。"
  },
  {
    "word": "user",
    "pos": "n.",
    "cn_def": "使用者;用戶",
    "en_def": "a person who uses a product or service",
    "sentence": "The app now has over ten million {{BLANK}}s, but the company still has not explained how it stores their data.",
    "cn": "這個應用程式現在有超過一千萬名使用者,但公司仍未說明它如何儲存他們的資料。"
  },
  {
    "word": "customise",
    "pos": "v.",
    "cn_def": "客製化;自訂",
    "en_def": "to change something to suit your own needs",
    "sentence": "You can {{BLANK}} the learning app so it shows only the topics you need, and this saves a lot of revision time.",
    "cn": "你可以自訂這個學習應用程式,讓它只顯示你需要的主題,這能省下很多複習時間。"
  },
  {
    "word": "template",
    "pos": "n.",
    "cn_def": "範本;模板",
    "en_def": "a ready-made pattern you can use and fill in",
    "sentence": "The teacher gave us a {{BLANK}} for the lab report, so we only had to fill in our results and conclusions.",
    "cn": "老師給了我們一份實驗報告的範本,所以我們只需要填入結果和結論。"
  },
  {
    "word": "keyword",
    "pos": "n.",
    "cn_def": "關鍵字",
    "en_def": "an important word you type to search for information",
    "sentence": "If you type the right {{BLANK}}s into the search box, you will find useful articles much faster than by guessing.",
    "cn": "如果你在搜尋框輸入正確的關鍵字,會比亂猜更快找到有用的文章。"
  },
  {
    "word": "transcribe",
    "pos": "v.",
    "cn_def": "轉錄;謄寫",
    "en_def": "to write down exactly what someone says",
    "sentence": "The app can {{BLANK}} a whole lecture while the teacher is speaking, so students can read the notes again later.",
    "cn": "這個應用程式能在老師講課時轉錄整堂課,所以學生之後可以再讀一次筆記。"
  },
  {
    "word": "caption",
    "pos": "n.",
    "cn_def": "字幕;圖說",
    "en_def": "words on a screen that show what people are saying",
    "sentence": "I turn on the {{BLANK}}s when I watch English videos, because reading and listening together helps me understand more.",
    "cn": "我看英文影片時會打開字幕,因為邊讀邊聽能幫助我理解更多。"
  },
  {
    "word": "synthetic",
    "pos": "adj.",
    "cn_def": "合成的;人造的",
    "en_def": "made artificially, not natural or real",
    "sentence": "The radio advert used a {{BLANK}} voice made by AI, and most listeners could not tell that it was not a real person.",
    "cn": "那則廣播廣告使用了人工智慧製作的合成聲音,大多數聽眾都分辨不出那不是真人。"
  },
  {
    "word": "fake",
    "pos": "adj.",
    "cn_def": "假的;偽造的",
    "en_def": "not real, but made to look real",
    "sentence": "The photo of the flooded city looked shocking, but it was {{BLANK}}, so the news channel apologised for showing it.",
    "cn": "那張城市淹水的照片看起來很驚人,但它是假的,所以新聞台為播出這張照片道歉。"
  },
  {
    "word": "clone",
    "pos": "v.",
    "cn_def": "複製;仿製",
    "en_def": "to make an exact copy of something",
    "sentence": "Scammers can now {{BLANK}} a person's voice from a short video clip, so families should agree on a secret code word.",
    "cn": "詐騙集團現在能從一小段影片複製一個人的聲音,所以家人應該約定一個暗號。"
  },
  {
    "word": "mimic",
    "pos": "v.",
    "cn_def": "模仿",
    "en_def": "to copy the way someone talks or behaves",
    "sentence": "The AI can {{BLANK}} the writing style of famous authors, but critics say its stories still lack real feeling.",
    "cn": "人工智慧能模仿知名作家的寫作風格,但評論家說它的故事仍缺乏真實的情感。"
  },
  {
    "word": "realistic",
    "pos": "adj.",
    "cn_def": "逼真的;寫實的",
    "en_def": "looking or seeming very real",
    "sentence": "AI pictures have become so {{BLANK}} that many people cannot tell them apart from real photos, which worries journalists.",
    "cn": "人工智慧圖片已變得非常逼真,以至於許多人無法把它們和真實照片區分開來,這讓記者們很擔心。"
  }
];

const MCQS = [
  {
    "q": "When I had a question about my order late at night, a _____ answered me at once, but it could not solve the problem.",
    "options": [
      "chatbot",
      "oversight",
      "perspective",
      "workforce"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "If you write a clear _____ with details, the AI gives better answers, but a short vague question often gets a poor reply.",
    "options": [
      "trend",
      "prompt",
      "diversity",
      "resource"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "_____ AI can write a poem in seconds, but many teachers say students still need to learn how to write their own.",
    "options": [
      "convenient",
      "consistent",
      "generative",
      "appropriate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "A _____ of a famous singer spread online last week, and many fans believed it until the singer posted a warning.",
    "options": [
      "virus",
      "entrepreneur",
      "participant",
      "deepfake"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "I ask the voice _____ on my phone to set alarms and check the weather, so I rarely type these things myself.",
    "options": [
      "e-commerce",
      "assistant",
      "dependence",
      "premise"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Tourists can now _____ menus by pointing their phone camera at them, so ordering food abroad is much easier.",
    "options": [
      "translate",
      "benefit",
      "expand",
      "enforce"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My classmate asked an AI to _____ the novel for her, but she failed the quiz because she missed important details.",
    "options": [
      "implement",
      "interpret",
      "summarise",
      "concede"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Students should _____ ideas from websites in their own words, because copying sentences exactly counts as cheating.",
    "options": [
      "highlight",
      "imply",
      "upskill",
      "paraphrase"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The AI helped me write a first _____ of my speech, but I changed most of it so that it sounded like me.",
    "options": [
      "draft",
      "essay",
      "oversight",
      "companionship"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "I usually _____ my essays twice before I hand them in, and this year I also check the grammar with an online tool.",
    "options": [
      "expand",
      "interpret",
      "minimise",
      "edit"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "In the online English class, each student chooses a cartoon _____, so shy learners feel more relaxed when they speak.",
    "options": [
      "ramification",
      "avatar",
      "conflict",
      "domain"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "I use a language-learning _____ for ten minutes every morning, and it reminds me if I forget to practise.",
    "options": [
      "discrimination",
      "misinformation",
      "app",
      "lecture"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The video _____ removed hundreds of fake AI videos, but new ones appeared almost as fast as they were deleted.",
    "options": [
      "obstacle",
      "gadget",
      "accountability",
      "platform"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "You can _____ the lecture notes from the school website, so you do not need to copy everything from the board.",
    "options": [
      "contend",
      "enhance",
      "download",
      "acknowledge"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Please _____ your project before midnight on Friday, because the system closes automatically after that.",
    "options": [
      "upload",
      "outsource",
      "investigate",
      "automate"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "My _____ kept showing adverts for shoes I had searched for once, so I cleared my history to stop it.",
    "options": [
      "potential",
      "browser",
      "essay",
      "companionship"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The premium AI tool needs a monthly _____, but my school pays for it, so students can use it for free.",
    "options": [
      "fingerprint",
      "encryption",
      "obstacle",
      "subscription"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The app now has over ten million _____s, but the company still has not explained how it stores their data.",
    "options": [
      "infrastructure",
      "user",
      "likelihood",
      "phishing"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "You can _____ the learning app so it shows only the topics you need, and this saves a lot of revision time.",
    "options": [
      "customise",
      "address",
      "imply",
      "retrain"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The teacher gave us a _____ for the lab report, so we only had to fill in our results and conclusions.",
    "options": [
      "essay",
      "equivalent",
      "template",
      "prejudice"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "If you type the right _____s into the search box, you will find useful articles much faster than by guessing.",
    "options": [
      "keyword",
      "certificate",
      "uncertainty",
      "hacker"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The app can _____ a whole lecture while the teacher is speaking, so students can read the notes again later.",
    "options": [
      "alter",
      "manipulate",
      "retrain",
      "transcribe"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "I turn on the _____s when I watch English videos, because reading and listening together helps me understand more.",
    "options": [
      "limitation",
      "applicant",
      "caption",
      "authentication"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The radio advert used a _____ voice made by AI, and most listeners could not tell that it was not a real person.",
    "options": [
      "self-paced",
      "synthetic",
      "robotic",
      "essential"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The photo of the flooded city looked shocking, but it was _____, so the news channel apologised for showing it.",
    "options": [
      "primary",
      "sufficient",
      "fake",
      "scarce"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Scammers can now _____ a person's voice from a short video clip, so families should agree on a secret code word.",
    "options": [
      "clone",
      "discriminate",
      "validate",
      "install"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The AI can _____ the writing style of famous authors, but critics say its stories still lack real feeling.",
    "options": [
      "argue",
      "distinguish",
      "adopt",
      "mimic"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "AI pictures have become so _____ that many people cannot tell them apart from real photos, which worries journalists.",
    "options": [
      "objective",
      "realistic",
      "widespread",
      "subsequent"
    ],
    "answer": 1,
    "vocabIndex": 27
  }
];

const LOOKUP = {
  "chatbot": {
    "pos": "n.",
    "en_def": "a computer program that talks with people using text or voice",
    "cn_def": "聊天機器人"
  },
  "prompt": {
    "pos": "n.",
    "en_def": "the instruction or question you type into an AI tool",
    "cn_def": "提示詞;指令"
  },
  "generative": {
    "pos": "adj.",
    "en_def": "able to create new text, pictures or sound",
    "cn_def": "生成式的"
  },
  "deepfake": {
    "pos": "n.",
    "en_def": "a fake video or voice made by AI that looks real",
    "cn_def": "深偽(影片)"
  },
  "assistant": {
    "pos": "n.",
    "en_def": "a person or program that helps someone do tasks",
    "cn_def": "助理;助手"
  },
  "translate": {
    "pos": "v.",
    "en_def": "to change words into another language",
    "cn_def": "翻譯"
  },
  "summarise": {
    "pos": "v.",
    "en_def": "to give the main points in a short form",
    "cn_def": "總結;摘要"
  },
  "paraphrase": {
    "pos": "v.",
    "en_def": "to say something again using different words",
    "cn_def": "改寫;換句話說"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct and improve a piece of writing or a video",
    "cn_def": "編輯;修改"
  },
  "avatar": {
    "pos": "n.",
    "en_def": "a picture or character that represents you online",
    "cn_def": "虛擬化身;大頭貼"
  },
  "app": {
    "pos": "n.",
    "en_def": "a program you download onto a phone or tablet",
    "cn_def": "應用程式"
  },
  "platform": {
    "pos": "n.",
    "en_def": "a website or service where people share and use content",
    "cn_def": "平台"
  },
  "download": {
    "pos": "v.",
    "en_def": "to copy files from the internet onto your device",
    "cn_def": "下載"
  },
  "upload": {
    "pos": "v.",
    "en_def": "to send files from your device to the internet",
    "cn_def": "上傳"
  },
  "browser": {
    "pos": "n.",
    "en_def": "a program used to look at websites",
    "cn_def": "瀏覽器"
  },
  "subscription": {
    "pos": "n.",
    "en_def": "money you pay regularly to use a service",
    "cn_def": "訂閱"
  },
  "user": {
    "pos": "n.",
    "en_def": "a person who uses a product or service",
    "cn_def": "使用者;用戶"
  },
  "customise": {
    "pos": "v.",
    "en_def": "to change something to suit your own needs",
    "cn_def": "客製化;自訂"
  },
  "template": {
    "pos": "n.",
    "en_def": "a ready-made pattern you can use and fill in",
    "cn_def": "範本;模板"
  },
  "keyword": {
    "pos": "n.",
    "en_def": "an important word you type to search for information",
    "cn_def": "關鍵字"
  },
  "transcribe": {
    "pos": "v.",
    "en_def": "to write down exactly what someone says",
    "cn_def": "轉錄;謄寫"
  },
  "caption": {
    "pos": "n.",
    "en_def": "words on a screen that show what people are saying",
    "cn_def": "字幕;圖說"
  },
  "synthetic": {
    "pos": "adj.",
    "en_def": "made artificially, not natural or real",
    "cn_def": "合成的;人造的"
  },
  "fake": {
    "pos": "adj.",
    "en_def": "not real, but made to look real",
    "cn_def": "假的;偽造的"
  },
  "clone": {
    "pos": "v.",
    "en_def": "to make an exact copy of something",
    "cn_def": "複製;仿製"
  },
  "mimic": {
    "pos": "v.",
    "en_def": "to copy the way someone talks or behaves",
    "cn_def": "模仿"
  },
  "realistic": {
    "pos": "adj.",
    "en_def": "looking or seeming very real",
    "cn_def": "逼真的;寫實的"
  },
  "oversight": {
    "pos": "n.",
    "en_def": "the job of watching and checking that something is done properly",
    "cn_def": "監督"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a way of thinking about something",
    "cn_def": "觀點;角度"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the people who work in a company or country",
    "cn_def": "勞動力;全體員工"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which things are changing",
    "cn_def": "趨勢"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of many different people or things",
    "cn_def": "多樣性"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful such as money, materials or information",
    "cn_def": "資源"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy and saving you time or trouble",
    "cn_def": "方便的"
  },
  "consistent": {
    "pos": "adj.",
    "en_def": "always behaving or happening in the same way",
    "cn_def": "一致的;始終如一的"
  },
  "appropriate": {
    "pos": "adj.",
    "en_def": "suitable for a situation",
    "cn_def": "適當的;合適的"
  },
  "virus": {
    "pos": "n.",
    "en_def": "a program that copies itself and harms computers",
    "cn_def": "(電腦)病毒"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts their own business",
    "cn_def": "創業家;企業家"
  },
  "participant": {
    "pos": "n.",
    "en_def": "a person who takes part in an activity or study",
    "cn_def": "參與者"
  },
  "e-commerce": {
    "pos": "n.",
    "en_def": "buying and selling goods on the internet",
    "cn_def": "電子商務"
  },
  "dependence": {
    "pos": "n.",
    "en_def": "needing something so much that you cannot do without it",
    "cn_def": "依賴"
  },
  "premise": {
    "pos": "n.",
    "en_def": "an idea that an argument or plan is based on",
    "cn_def": "前提"
  },
  "benefit": {
    "pos": "v.",
    "en_def": "to get help or an advantage from something",
    "cn_def": "受益"
  },
  "expand": {
    "pos": "v.",
    "en_def": "to become or make bigger",
    "cn_def": "擴大;擴展"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure that people obey a rule or law",
    "cn_def": "執行;強制實施"
  },
  "implement": {
    "pos": "v.",
    "en_def": "to start using a plan or system",
    "cn_def": "實施;執行"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "解讀;詮釋"
  },
  "concede": {
    "pos": "v.",
    "en_def": "to admit, often unwillingly, that something is true",
    "cn_def": "(勉強)承認;讓步"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to draw attention to something important",
    "cn_def": "突顯;強調"
  },
  "imply": {
    "pos": "v.",
    "en_def": "to suggest something without saying it directly",
    "cn_def": "暗示;意味著"
  },
  "upskill": {
    "pos": "v.",
    "en_def": "to learn new skills to do your job better",
    "cn_def": "提升技能"
  },
  "essay": {
    "pos": "n.",
    "en_def": "a short piece of writing on a subject",
    "cn_def": "文章;作文"
  },
  "companionship": {
    "pos": "n.",
    "en_def": "the pleasure of having friendly company",
    "cn_def": "陪伴;友誼"
  },
  "minimise": {
    "pos": "v.",
    "en_def": "to make something as small as possible",
    "cn_def": "使減到最少"
  },
  "ramification": {
    "pos": "n.",
    "en_def": "a possible result of an action, often unexpected",
    "cn_def": "(意外的)後果;影響"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement",
    "cn_def": "衝突"
  },
  "domain": {
    "pos": "n.",
    "en_def": "an area of knowledge or activity",
    "cn_def": "領域"
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "unfair treatment of people because of who they are",
    "cn_def": "歧視"
  },
  "misinformation": {
    "pos": "n.",
    "en_def": "wrong information that is spread, often by mistake",
    "cn_def": "錯誤訊息"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a talk given to students on a subject",
    "cn_def": "講課;演講"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you from doing something",
    "cn_def": "障礙"
  },
  "gadget": {
    "pos": "n.",
    "en_def": "a small useful machine or tool",
    "cn_def": "小裝置;小玩意兒"
  },
  "accountability": {
    "pos": "n.",
    "en_def": "being responsible for decisions and their results",
    "cn_def": "問責;責任歸屬"
  },
  "contend": {
    "pos": "v.",
    "en_def": "to say that something is true in an argument",
    "cn_def": "主張;認為"
  },
  "enhance": {
    "pos": "v.",
    "en_def": "to improve the quality of something",
    "cn_def": "提升;增強"
  },
  "acknowledge": {
    "pos": "v.",
    "en_def": "to accept or admit that something is true",
    "cn_def": "承認"
  },
  "outsource": {
    "pos": "v.",
    "en_def": "to pay another company to do some of your work",
    "cn_def": "外包"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查"
  },
  "automate": {
    "pos": "v.",
    "en_def": "to make a machine or computer do a job without people",
    "cn_def": "使自動化"
  },
  "potential": {
    "pos": "n.",
    "en_def": "the possibility of developing or being useful in the future",
    "cn_def": "潛力;可能性"
  },
  "fingerprint": {
    "pos": "n.",
    "en_def": "the pattern of lines on the tip of your finger",
    "cn_def": "指紋"
  },
  "encryption": {
    "pos": "n.",
    "en_def": "changing data into a secret code so others cannot read it",
    "cn_def": "加密"
  },
  "infrastructure": {
    "pos": "n.",
    "en_def": "basic systems like roads, power and internet that a society needs",
    "cn_def": "基礎建設"
  },
  "likelihood": {
    "pos": "n.",
    "en_def": "how probable something is",
    "cn_def": "可能性"
  },
  "phishing": {
    "pos": "n.",
    "en_def": "fake messages that try to steal passwords or bank details",
    "cn_def": "網路釣魚"
  },
  "address": {
    "pos": "v.",
    "en_def": "to start dealing with a problem",
    "cn_def": "處理;應對"
  },
  "retrain": {
    "pos": "v.",
    "en_def": "to learn or teach new skills for a different job",
    "cn_def": "再培訓;重新訓練"
  },
  "equivalent": {
    "pos": "n.",
    "en_def": "something that has the same value or meaning",
    "cn_def": "相等物;同等的東西"
  },
  "prejudice": {
    "pos": "n.",
    "en_def": "an unfair opinion formed without enough knowledge",
    "cn_def": "偏見;成見"
  },
  "certificate": {
    "pos": "n.",
    "en_def": "an official paper that shows you completed a course",
    "cn_def": "證書"
  },
  "uncertainty": {
    "pos": "n.",
    "en_def": "a feeling of not being sure about something",
    "cn_def": "不確定性"
  },
  "hacker": {
    "pos": "n.",
    "en_def": "a person who breaks into computer systems",
    "cn_def": "駭客"
  },
  "alter": {
    "pos": "v.",
    "en_def": "to change something, usually slightly",
    "cn_def": "改變;修改"
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control people or facts in a dishonest way",
    "cn_def": "操弄;操縱"
  },
  "limitation": {
    "pos": "n.",
    "en_def": "a weakness or a point beyond which something cannot go",
    "cn_def": "局限;限制"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who applies for a job or place",
    "cn_def": "申請人;應徵者"
  },
  "authentication": {
    "pos": "n.",
    "en_def": "the process of proving who you are to a system",
    "cn_def": "身分驗證"
  },
  "self-paced": {
    "pos": "adj.",
    "en_def": "letting you learn at your own speed",
    "cn_def": "自主進度的"
  },
  "robotic": {
    "pos": "adj.",
    "en_def": "related to or like a robot",
    "cn_def": "機器人的;機械般的"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary",
    "cn_def": "必要的;不可或缺的"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important",
    "cn_def": "主要的"
  },
  "sufficient": {
    "pos": "adj.",
    "en_def": "enough for a particular purpose",
    "cn_def": "充足的;足夠的"
  },
  "scarce": {
    "pos": "adj.",
    "en_def": "not easy to find; not enough",
    "cn_def": "稀少的;缺乏的"
  },
  "discriminate": {
    "pos": "v.",
    "en_def": "to treat a person or group unfairly",
    "cn_def": "歧視"
  },
  "validate": {
    "pos": "v.",
    "en_def": "to prove that something is true or correct",
    "cn_def": "驗證;證實"
  },
  "install": {
    "pos": "v.",
    "en_def": "to put a program onto a computer or phone",
    "cn_def": "安裝"
  },
  "argue": {
    "pos": "v.",
    "en_def": "to give reasons to support an opinion",
    "cn_def": "主張;論證"
  },
  "distinguish": {
    "pos": "v.",
    "en_def": "to see the difference between things",
    "cn_def": "區分;辨別"
  },
  "adopt": {
    "pos": "v.",
    "en_def": "to start using a new idea or method",
    "cn_def": "採用"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "widespread": {
    "pos": "adj.",
    "en_def": "happening in many places or among many people",
    "cn_def": "普遍的;廣泛的"
  },
  "subsequent": {
    "pos": "adj.",
    "en_def": "happening after something else",
    "cn_def": "隨後的;後續的"
  }
};

const EXTRA_GLOSSES = {};
