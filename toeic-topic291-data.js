// Topic 291 Quiz Data: Poem 詩
// Source word list: https://www.examword.com/group-topic/poem — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T291 - Poem 詩",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "poetry",
    "pos": "n.",
    "cn_def": "詩歌；詩",
    "en_def": "writing in the form of poems",
    "sentence": "A: Our bookstore is planning a special event for the community next month, so what kind of activity do you think will attract the most customers on a Saturday afternoon? B: I think a {{BLANK}} reading would work well, because many local writers want to share their poems, and parents can bring their children to listen.",
    "cn": "A：我們書店計劃下個月為社區舉辦一場特別活動，你認為哪一種活動在週六下午最能吸引顧客？ B：我覺得【詩歌】朗讀會會很不錯，因為許多當地作家想分享他們的詩作，家長也可以帶孩子來聆聽。"
  },
  {
    "word": "poet",
    "pos": "n.",
    "cn_def": "詩人",
    "en_def": "a person who writes poems",
    "sentence": "A: The marketing team wants a short, beautiful message for our new tea packaging, but nobody in the office feels creative enough to write it, so who should we contact? B: Let's hire a local {{BLANK}} who has published several books, because she can write a few warm lines that will make customers remember our brand.",
    "cn": "A：行銷團隊想為我們的新茶包裝寫一段簡短又優美的文字，但辦公室裡沒有人覺得自己有足夠的創意，我們該聯絡誰？ B：我們請一位出過好幾本書的在地【詩人】吧，因為她能寫出幾句溫暖的詩句，讓顧客記住我們的品牌。"
  },
  {
    "word": "verse",
    "pos": "n.",
    "cn_def": "詩句；韻文",
    "en_def": "words written as a poem; a short poem",
    "sentence": "A: The greeting card company sent us samples for the holiday season, but I'm not sure which design we should order for our clients this year. B: I prefer the blue card with the short {{BLANK}} inside, because the words about friendship and hope sound warm, and our clients usually keep cards like that on their desks.",
    "cn": "A：賀卡公司寄來了節日季的樣品，但我不確定今年我們該為客戶訂哪一款設計。 B：我比較喜歡裡面印有簡短【詩句】的藍色卡片，因為那些關於友誼和希望的文字聽起來很溫暖，而且我們的客戶通常會把那樣的卡片放在桌上。"
  },
  {
    "word": "stanza",
    "pos": "n.",
    "cn_def": "詩節",
    "en_def": "a group of lines that forms one part of a poem",
    "sentence": "A: You read your poem at the company's annual dinner last night, so why did you suddenly stop in the middle and look at your notes for so long? B: I forgot the words of the third {{BLANK}}, which describes our team's first year together, so I had to check my paper before I could continue to the end.",
    "cn": "A：你昨晚在公司年度晚宴上朗讀了你的詩，為什麼突然在中間停下來，看筆記看了那麼久？ B：我忘了第三【詩節】的內容，那一段描寫我們團隊共同度過的第一年，所以我得先看一下稿子才能繼續念到最後。"
  },
  {
    "word": "rhyme",
    "pos": "v.",
    "cn_def": "押韻",
    "en_def": "to end with the same sound as another word",
    "sentence": "A: The radio station asked us to create a catchy jingle for our new juice, so what makes a short advertising song easy for listeners to remember? B: The last words of each line should {{BLANK}}, like sun and fun, because people enjoy repeating similar sounds, and they will sing it while shopping at the supermarket.",
    "cn": "A：電台請我們為新果汁創作一首朗朗上口的廣告歌，什麼樣的短廣告歌最容易讓聽眾記住？ B：每一句最後的字應該要【押韻】，像 sun 和 fun，因為人們喜歡重複相似的聲音，他們在超市購物時就會跟著唱。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏；韻律",
    "en_def": "a regular pattern of sounds or beats",
    "sentence": "A: When you practice reading the poem for tomorrow's school ceremony, why do you keep tapping your hand on the desk while you speak? B: Tapping helps me feel the {{BLANK}} of the words, so I don't read too fast when I get nervous, and the audience can enjoy the regular beat of each line.",
    "cn": "A：你練習明天學校典禮要朗讀的詩時，為什麼一邊念一邊不停地用手拍桌子？ B：拍手能幫我感受文字的【節奏】，這樣我緊張時就不會念得太快，觀眾也能欣賞每一行規律的拍子。"
  },
  {
    "word": "meter",
    "pos": "n.",
    "cn_def": "格律；韻律",
    "en_def": "the pattern of strong and weak sounds in lines of a poem",
    "sentence": "A: Our literature club is studying classic English poems this month, so why does the teacher ask us to count the strong and weak sounds in every line? B: She wants us to understand the {{BLANK}} of the poem, because the pattern of stressed syllables shows how the poet wanted the lines to be read aloud.",
    "cn": "A：我們的文學社這個月在研讀經典英文詩，為什麼老師要我們數每一行的重音和輕音？ B：她希望我們了解這首詩的【格律】，因為重音音節的模式能顯示詩人希望這些詩句如何被朗讀。"
  },
  {
    "word": "imagery",
    "pos": "n.",
    "cn_def": "意象",
    "en_def": "words that create pictures in the reader's mind",
    "sentence": "A: The travel agency wants a short poem for its new brochure about Taiwan's east coast, so what should the writer focus on to make readers want to visit? B: The poem needs strong {{BLANK}}, such as blue waves, green mountains, and the smell of the sea, so that readers can picture the beautiful scenery in their minds.",
    "cn": "A：旅行社想在介紹台灣東海岸的新手冊裡放一首短詩，作者應該著重什麼，才能讓讀者想去旅遊？ B：這首詩需要鮮明的【意象】，例如藍色的海浪、翠綠的山巒和大海的氣味，讓讀者能在腦海中想像那美麗的風景。"
  },
  {
    "word": "metaphor",
    "pos": "n.",
    "cn_def": "隱喻；暗喻",
    "en_def": "saying one thing is another thing to show they are alike",
    "sentence": "A: In his speech at the sales meeting, our manager said that our team is a family, but we obviously aren't related, so what did he mean? B: He was using a {{BLANK}} to show that we support each other like family members, and he hoped the new staff would feel welcome and work together closely.",
    "cn": "A：經理在業務會議的演講中說我們團隊是一家人，但我們顯然沒有血緣關係，他是什麼意思？ B：他是在用【隱喻】表示我們像家人一樣互相支持，他希望新同事感到受歡迎並且緊密合作。"
  },
  {
    "word": "simile",
    "pos": "n.",
    "cn_def": "明喻",
    "en_def": "a comparison using \"like\" or \"as\"",
    "sentence": "A: The copywriter wrote that our new sofa is as soft as a cloud, and the director loves it, but why is that sentence so effective in an advertisement? B: It is a {{BLANK}}, which compares two different things with as or like, so customers can quickly imagine how comfortable the sofa feels before they visit the store.",
    "cn": "A：文案寫手寫說我們的新沙發「像雲一樣柔軟」，主管很喜歡，但為什麼這句話在廣告裡這麼有效？ B：這是一個【明喻】，用 as 或 like 來比較兩個不同的東西，讓顧客在到店之前就能很快想像沙發坐起來有多舒服。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "象徵；符號",
    "en_def": "a thing that represents an idea",
    "sentence": "A: Why did the poet put a white dove in almost every poem in her new book, even though most of the poems are about city life and office workers? B: The dove is a {{BLANK}} of peace and freedom, so she uses it to show that busy people still hope for a calm and quiet life.",
    "cn": "A：為什麼那位詩人在她新書裡幾乎每一首詩都放了一隻白鴿，即使大部分的詩都是關於城市生活和上班族？ B：鴿子是和平與自由的【象徵】，所以她用它來表達忙碌的人們仍然渴望平靜安穩的生活。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main idea or subject of a piece of writing",
    "sentence": "A: The company is holding a poetry contest for all employees this spring, so do we have to write about any special subject, or can we choose anything we like? B: The {{BLANK}} this year is teamwork, so every poem should describe how colleagues help each other, and the winner will receive a gift card and a small trophy.",
    "cn": "A：公司今年春天要為全體員工舉辦詩歌比賽，我們一定要寫某個特定題目，還是可以自由選擇？ B：今年的【主題】是團隊合作，所以每首詩都應該描寫同事之間如何互相幫忙，優勝者會得到一張禮券和一座小獎盃。"
  },
  {
    "word": "tone",
    "pos": "n.",
    "cn_def": "語氣；口吻",
    "en_def": "the attitude or feeling a writer shows",
    "sentence": "A: I read the poem you wrote for Mr. Chen's retirement party, and it seems quite sad, so do you think we should change anything before Friday? B: Yes, let's make the {{BLANK}} lighter and more cheerful, because he is excited about traveling with his wife, and the guests should laugh and celebrate rather than cry.",
    "cn": "A：我讀了你為陳先生退休派對寫的詩，感覺蠻悲傷的，你覺得星期五之前我們應該修改一些地方嗎？ B：好，我們把【語氣】改得輕鬆愉快一點吧，因為他很期待和太太一起去旅行，賓客應該要歡笑慶祝而不是哭泣。"
  },
  {
    "word": "mood",
    "pos": "n.",
    "cn_def": "氛圍；情緒",
    "en_def": "the feeling a poem or place gives you",
    "sentence": "A: The café owner asked us to choose a poem to print on the wall near the window, so which one do you think customers will enjoy most? B: I'd choose the one about rainy afternoons and warm coffee, because it creates a relaxed and peaceful {{BLANK}} that matches the soft music and comfortable chairs in the shop.",
    "cn": "A：咖啡館老闆請我們選一首詩印在靠窗的牆上，你覺得顧客會最喜歡哪一首？ B：我會選那首關於下雨午後和熱咖啡的詩，因為它營造出輕鬆平靜的【氛圍】，和店裡柔和的音樂與舒適的椅子很搭。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "（詩的）一行",
    "en_def": "one row of words in a poem",
    "sentence": "A: The poster for our charity concert looks great, but which part of the poem should we print in large letters at the top of the page? B: Let's use the first {{BLANK}}, Every small hand can help, because it is short, easy to read from far away, and clearly explains why people should donate.",
    "cn": "A：我們慈善音樂會的海報看起來很棒，但我們應該把詩的哪一部分用大字印在頁面最上方？ B：我們用第一【行】「每一雙小手都能幫忙」吧，因為它簡短、從遠處也容易閱讀，而且清楚說明了人們為什麼應該捐款。"
  },
  {
    "word": "free verse",
    "pos": "n.phr.",
    "cn_def": "自由詩",
    "en_def": "poetry with no fixed rhyme or regular beat",
    "sentence": "A: My students always complain that writing poems is too difficult because they can't find words with the same ending sounds, so how can I help them? B: Let them try {{BLANK}}, which has no fixed rhyme or regular beat, so they can focus on their ideas and feelings without worrying about strict rules.",
    "cn": "A：我的學生總是抱怨寫詩太難，因為找不到結尾音相同的字，我該怎麼幫助他們？ B：讓他們試試【自由詩】，它沒有固定的韻腳或規律的節拍，這樣他們就能專注在想法與感受上，不用擔心嚴格的規則。"
  },
  {
    "word": "sonnet",
    "pos": "n.",
    "cn_def": "十四行詩",
    "en_def": "a poem with fourteen lines and a fixed rhyme pattern",
    "sentence": "A: For our wedding anniversary, I want to give my wife a poem in a classic style, but I don't know which form is traditional for love poems. B: You could write a {{BLANK}}, which has fourteen lines and was popular with Shakespeare, so it will feel romantic, and you can frame it with a photo from your wedding.",
    "cn": "A：結婚紀念日時，我想送太太一首古典風格的詩，但我不知道哪一種形式是傳統的情詩。 B：你可以寫一首【十四行詩】，它有十四行，是莎士比亞很喜歡的形式，所以會感覺很浪漫，你還可以把它和你們的婚紗照一起裱框。"
  },
  {
    "word": "haiku",
    "pos": "n.",
    "cn_def": "俳句",
    "en_def": "a short Japanese poem with three lines",
    "sentence": "A: The Japanese restaurant next to our office is printing a short poem on each menu, but why are the poems only three lines long? B: Each one is a {{BLANK}}, a traditional Japanese form with five, seven, and five syllables, and the owner thinks the simple style matches the fresh, light food he serves.",
    "cn": "A：我們辦公室隔壁的日本料理店在每份菜單上都印了一首短詩，但為什麼這些詩都只有三行？ B：每一首都是【俳句】，一種傳統的日本詩體，音節是五、七、五，老闆覺得這種簡潔的風格很搭他供應的新鮮清淡料理。"
  },
  {
    "word": "alliteration",
    "pos": "n.",
    "cn_def": "頭韻",
    "en_def": "using the same first sound in several words close together",
    "sentence": "A: Our new slogan, Fresh Fruit, Fast Delivery, got great feedback from customers in the survey, but why do people remember it so easily? B: It uses {{BLANK}}, because several words start with the same f sound, so the phrase is fun to say and stays in people's minds after they see the ad.",
    "cn": "A：我們的新標語「Fresh Fruit, Fast Delivery」在問卷調查中得到顧客很好的回饋，但為什麼大家這麼容易記住它？ B：它使用了【頭韻】，因為好幾個字都以相同的 f 音開頭，所以這句話念起來很有趣，人們看過廣告後就會記在心裡。"
  },
  {
    "word": "assonance",
    "pos": "n.",
    "cn_def": "母音韻；諧母音",
    "en_def": "repeating the same vowel sound in nearby words",
    "sentence": "A: In the poem we discussed at the book club last night, the words rain, gray, and late sound so pleasant together, but they don't fully rhyme, do they? B: That's right, the poet uses {{BLANK}}, which repeats the same vowel sound inside nearby words, so the lines feel smooth and musical when you read them aloud.",
    "cn": "A：我們昨晚在讀書會討論的那首詩裡，rain、gray 和 late 這些字放在一起聽起來好悅耳，但它們並不完全押韻，對吧？ B：沒錯，詩人用了【母音韻】，在相鄰的字裡重複相同的母音，所以大聲朗讀時詩句感覺流暢又有音樂性。"
  },
  {
    "word": "personification",
    "pos": "n.",
    "cn_def": "擬人法",
    "en_def": "giving human qualities to objects or animals",
    "sentence": "A: In the children's book our company is publishing, the writer says the old bus sighs and complains every morning, but buses can't really speak, can they? B: It's {{BLANK}}, which gives human actions and feelings to an object, so young readers find the story more fun and feel closer to the characters.",
    "cn": "A：在我們公司要出版的童書裡，作者說那輛老公車每天早上都會嘆氣和抱怨，但公車其實不會說話，不是嗎？ B：這是【擬人法】，把人類的動作和情感賦予物體，讓小讀者覺得故事更有趣，也覺得和角色更親近。"
  },
  {
    "word": "speaker",
    "pos": "n.",
    "cn_def": "（詩中的）說話者",
    "en_def": "the voice or person talking in a poem",
    "sentence": "A: The poem in our English textbook is written as I, so does that mean the author is talking about his own life and his own family? B: Not always, because the {{BLANK}} of a poem can be an imaginary person, such as a lonely soldier or an old fisherman, created by the writer to tell the story.",
    "cn": "A：我們英文課本裡的那首詩是用「我」來寫的，那是不是表示作者在講他自己的人生和家人？ B：不一定，因為詩中的【說話者】可能是一個虛構的人物，例如一位孤單的士兵或一位老漁夫，是作者創造出來講述故事的。"
  },
  {
    "word": "narrative",
    "pos": "n.",
    "cn_def": "敘事；敘述",
    "en_def": "a story or a description of events in order",
    "sentence": "A: Our museum wants a long poem for the opening of the new history exhibition, so should it describe feelings or tell what happened in the past? B: I think it should be a clear {{BLANK}} that follows the town's story from the first farmers to the modern factories, so visitors can understand the events in order.",
    "cn": "A：我們博物館想為新的歷史展開幕準備一首長詩，它應該描寫情感，還是講述過去發生的事？ B：我認為應該是一段清楚的【敘事】，從最早的農民一路講到現代的工廠，讓參觀者能依序了解這些事件。"
  },
  {
    "word": "lyric",
    "pos": "adj.",
    "cn_def": "抒情的",
    "en_def": "expressing personal feelings, often like a song",
    "sentence": "A: The singer we hired for the hotel's Valentine's Day dinner wants to read a poem between songs, so what type of poem would suit the evening? B: A short {{BLANK}} poem about love and personal feelings would be perfect, because guests are celebrating with their partners and want something gentle and emotional.",
    "cn": "A：我們為飯店情人節晚餐請來的歌手想在歌曲之間朗讀一首詩，哪一類的詩適合那個晚上？ B：一首關於愛情與個人情感的簡短【抒情】詩會很完美，因為賓客正與伴侶一起慶祝，他們想要溫柔又感性的內容。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的",
    "en_def": "exciting and full of strong action or feeling, like a play",
    "sentence": "A: The actors at the community theater will perform a poem on stage next weekend, so how will they make it exciting for the audience? B: They'll give a {{BLANK}} reading with loud voices, strong gestures, and changing lights, so the poem feels like a short play and keeps everyone's attention until the end.",
    "cn": "A：社區劇場的演員下週末要在舞台上演出一首詩，他們要怎麼讓觀眾覺得精彩？ B：他們會用宏亮的聲音、強烈的手勢和變換的燈光做一場【戲劇性的】朗讀，讓這首詩像一齣短劇，從頭到尾吸引所有人的注意力。"
  },
  {
    "word": "recite",
    "pos": "v.",
    "cn_def": "背誦；朗誦",
    "en_def": "to say a poem or text aloud from memory",
    "sentence": "A: Our school's English festival is next Friday, and my daughter has been practicing in her room every night, so what is she going to do on stage? B: She will {{BLANK}} a famous poem from memory in front of three hundred students and parents, so she wants to say every word clearly without looking at any notes.",
    "cn": "A：我們學校的英語節是下週五，我女兒每天晚上都在房間裡練習，她上台要做什麼？ B：她要在三百位學生和家長面前憑記憶【背誦】一首著名的詩，所以她希望不看任何筆記也能清楚說出每一個字。"
  },
  {
    "word": "compose",
    "pos": "v.",
    "cn_def": "創作；作（詩、曲）",
    "en_def": "to write a poem, song, or piece of music",
    "sentence": "A: The CEO is giving a speech at the company's twentieth anniversary, and she wants to end it with something personal, so what has she decided to do? B: She plans to {{BLANK}} a short poem herself about the company's early days in a small office, and her assistant will help her check the words before the event.",
    "cn": "A：執行長要在公司二十週年慶上致詞，她想用個人化的方式結尾，她決定怎麼做？ B：她打算親自【創作】一首短詩，寫公司早期在小辦公室的日子，她的助理會在活動前幫她檢查用字。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發表",
    "en_def": "to print a book or text and make it available to the public",
    "sentence": "A: You've been writing poems on your blog for three years, and so many readers leave kind comments, so have you thought about printing a real book? B: Yes, a small company in Taichung has offered to {{BLANK}} my first collection next spring, so I'm busy choosing the best fifty poems and editing them carefully.",
    "cn": "A：你在部落格上寫詩已經三年了，有那麼多讀者留下友善的留言，你有考慮過印成一本真正的書嗎？ B：有，台中一家小公司提議明年春天【出版】我的第一本詩集，所以我正忙著挑選最好的五十首詩並仔細編修。"
  },
  {
    "word": "anthology",
    "pos": "n.",
    "cn_def": "選集；文集",
    "en_def": "a book of poems or stories by different writers",
    "sentence": "A: I'm looking for a gift for my English teacher, and she loves reading poems from many different writers, so what would you recommend from this bookstore? B: This {{BLANK}} of modern poetry would be a great choice, because it includes poems by over eighty poets from around the world, and the cover is beautifully designed.",
    "cn": "A：我在找送給英文老師的禮物，她很喜歡讀許多不同作家的詩，你會推薦這家書店的哪一本？ B：這本現代詩【選集】會是很好的選擇，因為它收錄了全世界八十多位詩人的作品，而且封面設計得很漂亮。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構",
    "en_def": "the way the parts of something are arranged",
    "sentence": "A: The editor returned my poem with many notes, and she said the ideas are good, but the order of the stanzas seems confusing, so what should I change? B: You need to improve the {{BLANK}} by placing the parts in a logical order, starting with the problem, then the struggle, and finally the hopeful ending.",
    "cn": "A：編輯退回了我的詩並附上許多註記，她說想法很好，但詩節的順序似乎很混亂，我該修改什麼？ B：你需要改善【結構】，把各個部分按照合理的順序排列，先寫問題，接著是掙扎，最後是充滿希望的結尾。"
  },
  {
    "word": "figurative",
    "pos": "adj.",
    "cn_def": "比喻性的",
    "en_def": "not using words in their basic, literal meaning",
    "sentence": "A: When our manager said the new project was a mountain to climb, some of the new interns looked worried and asked if we were going hiking, so what should I tell them? B: Explain that he was using {{BLANK}} language, which means the words are not meant literally, and he just wanted to say the work would be difficult.",
    "cn": "A：經理說新專案是「一座要攀登的高山」時，有些新實習生看起來很擔心，還問我們是不是要去爬山，我該怎麼跟他們說？ B：跟他們解釋他用的是【比喻性的】語言，意思是這些字不是照字面理解的，他只是想說這項工作會很困難。"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情感；情緒",
    "en_def": "a strong feeling such as love, anger, or sadness",
    "sentence": "A: The poem that won first prize in the city's writing contest is very short, so why did the judges choose it over the longer, more detailed entries? B: The judges said it expressed deep {{BLANK}} about losing a grandmother, and many people in the audience felt sad and even cried when the writer read it aloud.",
    "cn": "A：在市政府寫作比賽中得到第一名的那首詩非常短，為什麼評審選它，而不是那些更長、更詳細的作品？ B：評審說它表達了失去祖母的深刻【情感】，作者大聲朗讀時，許多觀眾都感到難過，甚至哭了。"
  }
];

const MCQS = [
  {
    "q": "The library hosts a _____ night every Thursday evening. Local writers read their poems aloud while guests enjoy free tea and cookies.",
    "options": [
      "poetry",
      "rhythm",
      "symbol",
      "metaphor"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The famous _____ signed copies of her new book at the bookstore on Saturday. Over two hundred fans waited patiently to meet her.",
    "options": [
      "stanza",
      "poet",
      "verse",
      "haiku"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Each birthday card from our company includes a short _____ written by our design team. Customers often say the warm words make the cards special.",
    "options": [
      "speaker",
      "poet",
      "verse",
      "mood"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The poem has four parts, and each _____ contains exactly four lines. The final one describes the poet's return to her hometown.",
    "options": [
      "rhythm",
      "tone",
      "imagery",
      "stanza"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Children's songs are easy to remember because the last words of each line usually _____. For example, the word cat goes well with hat.",
    "options": [
      "recite",
      "rhyme",
      "compose",
      "publish"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The drummer kept a steady _____ while the poet read her work on stage. The regular beat helped the audience follow every line.",
    "options": [
      "rhythm",
      "metaphor",
      "anthology",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The travel brochure uses rich _____ to describe the island's golden beaches and green hills. Readers can easily picture the scenery in their minds.",
    "options": [
      "speaker",
      "sonnet",
      "haiku",
      "imagery"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "When the manager called the busy office a beehive, he was using a _____. He meant that everyone was working hard together.",
    "options": [
      "stanza",
      "poet",
      "metaphor",
      "haiku"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The ad describes the new pillow as soft as a cloud. This _____ helps customers imagine how comfortable the pillow feels.",
    "options": [
      "simile",
      "stanza",
      "anthology",
      "rhythm"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "In many cultures, the white dove is a _____ of peace. Our charity chose it for its new logo for that reason.",
    "options": [
      "poet",
      "stanza",
      "symbol",
      "sonnet"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The _____ of this year's company writing contest is customer service. All entries must describe a positive experience with a client.",
    "options": [
      "speaker",
      "theme",
      "haiku",
      "rhythm"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Please use a friendly and polite _____ when you read the welcome poem to new employees. We want everyone to feel comfortable on their first day.",
    "options": [
      "stanza",
      "anthology",
      "sonnet",
      "tone"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Soft lighting and quiet piano music created a calm _____ at the poetry reading. Many guests closed their eyes and relaxed.",
    "options": [
      "verse",
      "poet",
      "mood",
      "structure"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The opening _____ of the poem was printed on the front of the T-shirts. The short sentence quickly became popular among students.",
    "options": [
      "line",
      "poet",
      "emotion",
      "mood"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Unlike traditional poems, _____ does not follow fixed rhyme patterns. Many young writers like it because it gives them more freedom.",
    "options": [
      "sonnet",
      "alliteration",
      "imagery",
      "free verse"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "A _____ is a poem with fourteen lines and a fixed rhyme pattern. Shakespeare wrote more than one hundred and fifty of them.",
    "options": [
      "haiku",
      "sonnet",
      "anthology",
      "stanza"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The Japanese restaurant prints a short _____ on every menu. Each poem has only three lines and describes one of the seasons.",
    "options": [
      "haiku",
      "sonnet",
      "anthology",
      "metaphor"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The slogan Big Brand Bargains uses _____. Three words begin with the same sound, so customers remember the phrase easily.",
    "options": [
      "personification",
      "imagery",
      "structure",
      "alliteration"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The writer says the old printer groans every morning, giving it human feelings. This _____ makes the office story fun to read.",
    "options": [
      "alliteration",
      "rhythm",
      "personification",
      "anthology"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The _____ in this poem is an old fisherman, not the author herself. He describes his long and difficult life on the sea.",
    "options": [
      "anthology",
      "speaker",
      "stanza",
      "meter"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The poem is a clear _____ that tells the town's history from beginning to end. Visitors read it as they walk through the hall.",
    "options": [
      "symbol",
      "simile",
      "tone",
      "narrative"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "She enjoys _____ poetry because it expresses personal feelings such as love and sadness. She reads a few poems every night before bed.",
    "options": [
      "lyric",
      "industrial",
      "portable",
      "obedient"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The actors gave a _____ reading of the poem with loud voices and strong gestures. The audience clapped loudly at the end.",
    "options": [
      "portable",
      "dramatic",
      "organic",
      "obsolete"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Each student must _____ a short poem from memory at the English festival. Teachers will give prizes for clear pronunciation.",
    "options": [
      "publish",
      "rhyme",
      "recite",
      "prune"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The CEO took two weeks to _____ a poem for the company's anniversary dinner. She wrote and rewrote every line herself.",
    "options": [
      "compose",
      "recite",
      "rhyme",
      "adopt"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The small press plans to _____ her first book of poems next spring. Copies will be sold in bookstores across Taiwan.",
    "options": [
      "recite",
      "rhyme",
      "publish",
      "groom"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "This _____ includes poems by more than eighty writers from around the world. It is a popular gift for students and teachers.",
    "options": [
      "stanza",
      "haiku",
      "simile",
      "anthology"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The editor suggested changing the _____ of the poem by moving the last stanza to the beginning. The new order makes the story clearer.",
    "options": [
      "poet",
      "structure",
      "symbol",
      "emotion"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "When people say it is raining cats and dogs, they are using _____ language. The words should not be understood literally.",
    "options": [
      "portable",
      "organic",
      "obedient",
      "figurative"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The poem expressed such strong _____ that many listeners began to cry. The writer was describing the day her father passed away.",
    "options": [
      "emotion",
      "structure",
      "meter",
      "anthology"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "poetry": {
    "pos": "n.",
    "en_def": "writing in the form of poems",
    "cn_def": "詩歌；詩"
  },
  "poet": {
    "pos": "n.",
    "en_def": "a person who writes poems",
    "cn_def": "詩人"
  },
  "verse": {
    "pos": "n.",
    "en_def": "words written as a poem; a short poem",
    "cn_def": "詩句；韻文"
  },
  "stanza": {
    "pos": "n.",
    "en_def": "a group of lines that forms one part of a poem",
    "cn_def": "詩節"
  },
  "rhyme": {
    "pos": "v.",
    "en_def": "to end with the same sound as another word",
    "cn_def": "押韻"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular pattern of sounds or beats",
    "cn_def": "節奏；韻律"
  },
  "meter": {
    "pos": "n.",
    "en_def": "the pattern of strong and weak sounds in lines of a poem",
    "cn_def": "格律；韻律"
  },
  "imagery": {
    "pos": "n.",
    "en_def": "words that create pictures in the reader's mind",
    "cn_def": "意象"
  },
  "metaphor": {
    "pos": "n.",
    "en_def": "saying one thing is another thing to show they are alike",
    "cn_def": "隱喻；暗喻"
  },
  "simile": {
    "pos": "n.",
    "en_def": "a comparison using \"like\" or \"as\"",
    "cn_def": "明喻"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a thing that represents an idea",
    "cn_def": "象徵；符號"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main idea or subject of a piece of writing",
    "cn_def": "主題"
  },
  "tone": {
    "pos": "n.",
    "en_def": "the attitude or feeling a writer shows",
    "cn_def": "語氣；口吻"
  },
  "mood": {
    "pos": "n.",
    "en_def": "the feeling a poem or place gives you",
    "cn_def": "氛圍；情緒"
  },
  "line": {
    "pos": "n.",
    "en_def": "one row of words in a poem",
    "cn_def": "（詩的）一行"
  },
  "free verse": {
    "pos": "n.phr.",
    "en_def": "poetry with no fixed rhyme or regular beat",
    "cn_def": "自由詩"
  },
  "sonnet": {
    "pos": "n.",
    "en_def": "a poem with fourteen lines and a fixed rhyme pattern",
    "cn_def": "十四行詩"
  },
  "haiku": {
    "pos": "n.",
    "en_def": "a short Japanese poem with three lines",
    "cn_def": "俳句"
  },
  "alliteration": {
    "pos": "n.",
    "en_def": "using the same first sound in several words close together",
    "cn_def": "頭韻"
  },
  "assonance": {
    "pos": "n.",
    "en_def": "repeating the same vowel sound in nearby words",
    "cn_def": "母音韻；諧母音"
  },
  "personification": {
    "pos": "n.",
    "en_def": "giving human qualities to objects or animals",
    "cn_def": "擬人法"
  },
  "speaker": {
    "pos": "n.",
    "en_def": "the voice or person talking in a poem",
    "cn_def": "（詩中的）說話者"
  },
  "narrative": {
    "pos": "n.",
    "en_def": "a story or a description of events in order",
    "cn_def": "敘事；敘述"
  },
  "lyric": {
    "pos": "adj.",
    "en_def": "expressing personal feelings, often like a song",
    "cn_def": "抒情的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "exciting and full of strong action or feeling, like a play",
    "cn_def": "戲劇性的"
  },
  "recite": {
    "pos": "v.",
    "en_def": "to say a poem or text aloud from memory",
    "cn_def": "背誦；朗誦"
  },
  "compose": {
    "pos": "v.",
    "en_def": "to write a poem, song, or piece of music",
    "cn_def": "創作；作（詩、曲）"
  },
  "publish": {
    "pos": "v.",
    "en_def": "to print a book or text and make it available to the public",
    "cn_def": "出版；發表"
  },
  "anthology": {
    "pos": "n.",
    "en_def": "a book of poems or stories by different writers",
    "cn_def": "選集；文集"
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are arranged",
    "cn_def": "結構"
  },
  "figurative": {
    "pos": "adj.",
    "en_def": "not using words in their basic, literal meaning",
    "cn_def": "比喻性的"
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as love, anger, or sadness",
    "cn_def": "情感；情緒"
  }
};

const EXTRA_GLOSSES = {};
