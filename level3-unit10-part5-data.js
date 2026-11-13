// Part 5 Quiz Data: tourism – wise
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 10-5 - tourism – wise",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "tourism",
    "pos": "n.",
    "cn_def": "觀光業；旅遊業（不可數）",
    "en_def": "the commercial organization and operation of vacations and visits to places of interest",
    "sentence": "The tropical island nation relies heavily on international {{BLANK}} to support its economy and create local jobs.",
    "cn": "這個熱帶島國高度仰賴國際觀光業來支撐其經濟並創造當地就業機會。"
  },
  {
    "word": "tourists",
    "pos": "n.",
    "cn_def": "觀光客；遊客（可數）",
    "en_def": "a person who is traveling or visiting a place for pleasure",
    "sentence": "Thousands of foreign {{BLANK}} flock to the ancient Roman temple every day to take memorable photos.",
    "cn": "成千上萬的外國觀光客每天湧入古羅馬神廟拍攝難忘的照片。"
  },
  {
    "word": "tour",
    "pos": "n.",
    "cn_def": "旅行；巡迴演出；導覽（可數）",
    "en_def": "a journey for pleasure in which several different places are visited",
    "sentence": "We hired a knowledgeable local guide to take us on a fascinating historical {{BLANK}} of the old walled city.",
    "cn": "我們聘請了一位知識淵博的當地導遊，帶我們對這座古老的城牆城市進行了一次引人入勝的歷史導覽之旅。"
  },
  {
    "word": "tune",
    "pos": "n.",
    "cn_def": "曲調；旋律；和諧（可數/不可數）",
    "en_def": "a melody, especially one that is catchy and pleasing; state of being in harmony",
    "sentence": "An effective manager stays closely in {{BLANK}} with the needs and feelings of her frontline employees.",
    "cn": "一位有效率的經理始終與前線員工的需求和感受步調一致／密切共鳴。"
  },
  {
    "word": "tuned",
    "pos": "v.",
    "cn_def": "為（樂器）調音；收聽／收看（動詞）",
    "en_def": "to adjust a musical instrument to the correct pitch; to adjust a radio or TV to a frequency",
    "sentence": "Before stepping onto the stage for the concert, the violinist carefully {{BLANK}} her instrument to ensure perfect pitch.",
    "cn": "在登上舞台進行音樂會之前，小提琴家仔細地為她的樂器調音，以確保音準完美。"
  },
  {
    "word": "vocabulary",
    "pos": "n.",
    "cn_def": "字彙；詞彙量（可數/不可數）",
    "en_def": "the body of words used in a particular language or known to an individual",
    "sentence": "Reading high-quality English novels and news articles every day is the most effective way to expand your {{BLANK}}.",
    "cn": "每天閱讀優質的英語小說與新聞文章是擴充字彙量最有效的方法。"
  },
  {
    "word": "volleyball",
    "pos": "n.",
    "cn_def": "排球；排球運動（不可數/可數）",
    "en_def": "a team game in which a large ball is hit by hand over a high net",
    "sentence": "During our summer vacation in Kenting, we loved gathering on the golden sand to play beach {{BLANK}} with friends.",
    "cn": "在墾丁的暑假期間，我們喜歡聚集在金黃色的沙灘上與朋友們一同打沙灘排球。"
  },
  {
    "word": "wisdom",
    "pos": "n.",
    "cn_def": "智慧；見識；明智（不可數）",
    "en_def": "the quality of having experience, knowledge, and good judgment",
    "sentence": "Before making any major life decisions, you should seek the valuable words of {{BLANK}} from your experienced grandparents.",
    "cn": "在做出任何人生重大決定之前，你應該向經驗豐富的祖父母尋求寶貴的智慧之言。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "有智慧的；明智的；聰穎的",
    "en_def": "having or showing experience, knowledge, and good judgment",
    "sentence": "Investing a portion of your monthly income in a secure retirement fund is a very {{BLANK}} and sensible financial decision.",
    "cn": "將每月收入的一部分投資於安全的退休基金是一個非常明智的且合理的財務決定。"
  }
];

const MCQS = [
  {
    "q": "The island has sunny beaches and green hills, so it relies on ______ for its economy.",
    "options": [
      "vocabulary",
      "volleyball",
      "tune",
      "tourism"
    ],
    "answer": 3,
    "cn": "這座島嶼擁有陽光普照的海灘與翠綠的山丘，因此依靠觀光業維持經濟。",
    "vocabIndex": 0
  },
  {
    "q": "Many foreign ______ visit the ancient temple every day to take beautiful pictures.",
    "options": [
      "tunes",
      "tourists",
      "volleyballs",
      "wisdoms"
    ],
    "answer": 1,
    "cn": "許多外國觀光客每天參觀古老的寺廟拍攝美麗的照片。",
    "vocabIndex": 1
  },
  {
    "q": "We joined a walking ______ of the historic old castle with an expert guide.",
    "options": [
      "tour",
      "tune",
      "wisdom",
      "volleyball"
    ],
    "answer": 0,
    "cn": "我們與一位專業導遊一起參加了一場歷史古堡的徒步導覽之旅。",
    "vocabIndex": 2
  },
  {
    "q": "The violinist played a cheerful ______ that made all the children in the hall smile.",
    "options": [
      "tour",
      "tourism",
      "tune",
      "vocabulary"
    ],
    "answer": 2,
    "cn": "小提琴家演奏了一首歡快的曲調，使大廳裡所有的孩子都露出了微笑。",
    "vocabIndex": 3
  },
  {
    "q": "Reading lots of English storybooks will help you expand your ______ quickly.",
    "options": [
      "tune",
      "tour",
      "tourism",
      "vocabulary"
    ],
    "answer": 3,
    "cn": "閱讀大量的英語故事書將幫助你迅速擴充你的字彙量。",
    "vocabIndex": 5
  },
  {
    "q": "After school on Fridays, students like to play ______ over the high net in the gym.",
    "options": [
      "volleyball",
      "tune",
      "wisdom",
      "tour"
    ],
    "answer": 0,
    "cn": "星期五放學後，學生們喜歡在體育館隔著高網打排球。",
    "vocabIndex": 6
  },
  {
    "q": "Grandpa has lived for eighty years and has a great deal of ______ about life.",
    "options": [
      "volleyball",
      "wisdom",
      "tour",
      "tune"
    ],
    "answer": 1,
    "cn": "爺爺生活了八十年，對人生有著豐富的智慧。",
    "vocabIndex": 7
  },
  {
    "q": "It was a very ______ decision to save part of your pocket money for future books.",
    "options": [
      "raw",
      "bitter",
      "wise",
      "cruel"
    ],
    "answer": 2,
    "cn": "把一部分零用錢存下來以便將來買書，是一個非常明智的決定。",
    "vocabIndex": 8
  },
  {
    "q": "Listen to the ______ words of your parents before you make an important choice.",
    "options": [
      "wise",
      "raw",
      "bloody",
      "solid"
    ],
    "answer": 0,
    "cn": "在你做出重大選擇之前，先聆聽父母充滿智慧的話語。",
    "vocabIndex": 8
  },
  {
    "q": "The guitarist turned the pegs carefully to ______ his acoustic guitar before playing.",
    "options": [
      "rob",
      "spoil",
      "tune",
      "swear"
    ],
    "answer": 2,
    "cn": "吉他手在彈奏前小心地轉動旋鈕為他的木吉他調音。",
    "vocabIndex": 3
  },
  {
    "q": "Millions of people ______ in every Sunday night to watch the famous singing contest.",
    "options": [
      "rob",
      "tune",
      "spoil",
      "swear"
    ],
    "answer": 1,
    "cn": "每週日晚上數百萬人收看／收聽（轉入頻道）那個著名的歌唱比賽。",
    "vocabIndex": 3
  },
  {
    "q": "The pianist stopped for a minute to ______ the piano keys before starting the show.",
    "options": [
      "swear",
      "rob",
      "spoil",
      "tune"
    ],
    "answer": 3,
    "cn": "鋼琴家在演出前停下一分鐘為鋼琴琴鍵調音。",
    "vocabIndex": 3
  },
  {
    "q": "The island government wants to promote ______ so that more hotels can open.",
    "options": [
      "tune",
      "volleyball",
      "tourism",
      "wisdom"
    ],
    "answer": 2,
    "cn": "島嶼政府希望推廣觀光業，以便開設更多飯店。",
    "vocabIndex": 0
  },
  {
    "q": "Two happy ______ asked me for directions to the national art museum.",
    "options": [
      "tourists",
      "tunes",
      "volleyballs",
      "wisdoms"
    ],
    "answer": 0,
    "cn": "兩位快樂的觀光客向我詢問前往國立歷史美術館的路線。",
    "vocabIndex": 1
  },
  {
    "q": "The rock band went on a three-month world ______ across ten different countries.",
    "options": [
      "tune",
      "tour",
      "vocabulary",
      "wisdom"
    ],
    "answer": 1,
    "cn": "這支搖滾樂團展開了為期三個月、跨越十個不同國家的世界巡迴演出。",
    "vocabIndex": 2
  },
  {
    "q": "Can you hum that funny ______ you heard on the cartoon this morning?",
    "options": [
      "tour",
      "volleyball",
      "tourism",
      "tune"
    ],
    "answer": 3,
    "cn": "你能哼唱你今天早晨在卡通裡聽到的那首有趣曲調嗎？",
    "vocabIndex": 3
  },
  {
    "q": "Our teacher gave us a list of twenty new ______ words to learn today.",
    "options": [
      "tune",
      "vocabulary",
      "tour",
      "wisdom"
    ],
    "answer": 1,
    "cn": "我們的老師給了我們一份包含二十個新字彙／單字的清單讓我們今天學習。",
    "vocabIndex": 5
  },
  {
    "q": "Throw the large yellow ______ over the net so your teammate can hit it.",
    "options": [
      "tour",
      "tune",
      "volleyball",
      "wisdom"
    ],
    "answer": 2,
    "cn": "將那顆黃色大排球拋過球網，好讓你的隊友可以擊球。",
    "vocabIndex": 6
  },
  {
    "q": "The old woman shared her deep ______ with the young students in the classroom.",
    "options": [
      "wisdom",
      "volleyball",
      "tune",
      "tour"
    ],
    "answer": 0,
    "cn": "那位老婦人在教室裡與年輕學子們分享了她深厚的智慧。",
    "vocabIndex": 7
  },
  {
    "q": "The old man was ______ enough to know that patience solves many hard problems.",
    "options": [
      "cruel",
      "raw",
      "bitter",
      "wise"
    ],
    "answer": 3,
    "cn": "那位老人足夠明智有智慧，知道耐心能解決許多棘手問題。",
    "vocabIndex": 8
  },
  {
    "q": "Grandma always gives us ______ advice whenever we face difficult choices.",
    "options": [
      "wise",
      "bloody",
      "raw",
      "solid"
    ],
    "answer": 0,
    "cn": "每當我們面臨困難抉擇時，祖母總是給予我們明智的建議。",
    "vocabIndex": 8
  },
  {
    "q": "Please ______ your violin before the concert starts so you do not play out of pitch.",
    "options": [
      "rob",
      "swear",
      "spoil",
      "tune"
    ],
    "answer": 3,
    "cn": "請在音樂會開始前為你的小提琴調音，這樣你才不會走音。",
    "vocabIndex": 3
  },
  {
    "q": "The old castle on the hill is the most popular ______ in the entire region.",
    "options": [
      "merry-go-round",
      "tourist attraction",
      "leap of faith",
      "daylight robbery"
    ],
    "answer": 1,
    "cn": "山丘上的古堡是整個地區最受歡迎的觀光景點。",
    "vocabIndex": 1
  },
  {
    "q": "Good leaders stay closely ______ with the feelings and needs of their people.",
    "options": [
      "fan the flames",
      "speak of the devil",
      "in tune with",
      "brave the elements"
    ],
    "answer": 2,
    "cn": "優秀的領導者與人民的感受及需求保持密切的步調一致／共鳴。",
    "vocabIndex": 3
  },
  {
    "q": "The old professor shared many valuable ______ with the graduating class.",
    "options": [
      "speed bumps",
      "pearls of wisdom",
      "bank robbers",
      "oak barrels"
    ],
    "answer": 1,
    "cn": "老教授與畢業班學生分享了許多寶貴的智慧結晶／至理名言。",
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "tourism": {
    "pos": "n.",
    "en_def": "the commercial organization and operation of vacations and visits to places of interest",
    "cn_def": "觀光業；旅遊業（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the commercial organization and operation of vacations and visits to places of interest",
        "cn_def": "觀光業；旅遊業（不可數）"
      }
    ]
  },
  "tourist": {
    "pos": "n.",
    "en_def": "a person who is traveling or visiting a place for pleasure",
    "cn_def": "觀光客；遊客（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is traveling or visiting a place for pleasure",
        "cn_def": "觀光客；遊客（可數）"
      }
    ]
  },
  "tourists": {
    "pos": "n.",
    "en_def": "a person who is traveling or visiting a place for pleasure",
    "cn_def": "觀光客；遊客（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who is traveling or visiting a place for pleasure",
        "cn_def": "觀光客；遊客（可數）"
      }
    ]
  },
  "tour": {
    "pos": "n.",
    "en_def": "a journey for pleasure in which several different places are visited",
    "cn_def": "旅行；巡迴演出；導覽（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a journey for pleasure in which several different places are visited",
        "cn_def": "旅行；巡迴演出；導覽（可數）"
      }
    ]
  },
  "tune": {
    "pos": "n.",
    "en_def": "a melody, especially one that is catchy and pleasing; state of being in harmony",
    "cn_def": "曲調；旋律；和諧（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a melody, especially one that is catchy and pleasing; state of being in harmony",
        "cn_def": "曲調；旋律；和諧（可數/不可數）"
      },
      {
        "pos": "v.",
        "en_def": "to adjust a musical instrument to the correct pitch; to adjust a radio or TV to a frequency",
        "cn_def": "為（樂器）調音；收聽／收看（動詞）"
      }
    ]
  },
  "tuned": {
    "pos": "v.",
    "en_def": "to adjust a musical instrument to the correct pitch; to adjust a radio or TV to a frequency",
    "cn_def": "為（樂器）調音；收聽／收看（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to adjust a musical instrument to the correct pitch; to adjust a radio or TV to a frequency",
        "cn_def": "為（樂器）調音；收聽／收看（動詞）"
      }
    ]
  },
  "vocabulary": {
    "pos": "n.",
    "en_def": "the body of words used in a particular language or known to an individual",
    "cn_def": "字彙；詞彙量（可數/不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the body of words used in a particular language or known to an individual",
        "cn_def": "字彙；詞彙量（可數/不可數）"
      }
    ]
  },
  "volleyball": {
    "pos": "n.",
    "en_def": "a team game in which a large ball is hit by hand over a high net",
    "cn_def": "排球；排球運動（不可數/可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a team game in which a large ball is hit by hand over a high net",
        "cn_def": "排球；排球運動（不可數/可數）"
      }
    ]
  },
  "wisdom": {
    "pos": "n.",
    "en_def": "the quality of having experience, knowledge, and good judgment",
    "cn_def": "智慧；見識；明智（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of having experience, knowledge, and good judgment",
        "cn_def": "智慧；見識；明智（不可數）"
      }
    ]
  },
  "wise": {
    "pos": "adj.",
    "en_def": "having or showing experience, knowledge, and good judgment",
    "cn_def": "有智慧的；明智的；聰穎的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing experience, knowledge, and good judgment",
        "cn_def": "有智慧的；明智的；聰穎的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
