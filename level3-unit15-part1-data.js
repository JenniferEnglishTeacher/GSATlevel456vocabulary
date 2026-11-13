// Part 1 Quiz Data: anyhow – deepen
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "高中Level 3 (2001-3000字) Unit 15-1 - anyhow – deepen",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "anyhow",
    "pos": "adv.",
    "cn_def": "無論如何；不管怎樣；總之",
    "en_def": "anyway; in any case; used to indicate that something happens despite what has been said",
    "sentence": "I was not entirely sure how to solve the computer error, but I managed to get it working {{BLANK}} before the deadline.",
    "cn": "我不完全確定該如何解決電腦錯誤，但我還是在截止期限前無論如何／不管怎樣設法讓它恢復運轉了。"
  },
  {
    "word": "in any case",
    "pos": "phr.",
    "cn_def": "無論如何；不管怎樣；總之",
    "en_def": "whatever happens; at any rate; regardless of other circumstances",
    "sentence": "We might miss the early afternoon express train, but {{BLANK}} we will arrive in Taipei before sunset.",
    "cn": "我們可能會錯過午後較早的直達快車，但無論如何我們都會在日落前抵達台北。"
  },
  {
    "word": "awkward",
    "pos": "adj.",
    "cn_def": "尷尬的；笨拙的；不自然的",
    "en_def": "causing or feeling embarrassment; clumsy or difficult to deal with",
    "sentence": "Ben looks rather {{BLANK}} whenever he dances because he struggles to find the proper musical rhythm.",
    "cn": "每當班跳舞時他看起來都相當笨拙不自然，因為他很難跟上合適的音樂節奏。"
  },
  {
    "word": "awkwardness",
    "pos": "n.",
    "cn_def": "尷尬；笨拙；侷促不安（不可數）",
    "en_def": "the state of being awkward, clumsy, or socially uncomfortable",
    "sentence": "The cheerful host shared a funny personal joke to relieve the {{BLANK}} among the newly introduced wedding guests.",
    "cn": "風趣開朗的主持人分享了一則好笑的個人笑話，以緩解新結識的婚禮賓客之間的尷尬侷促。"
  },
  {
    "word": "bacteria",
    "pos": "n. pl.",
    "cn_def": "細菌（複數名詞，單數為 bacterium）",
    "en_def": "microscopic living organisms, usually single-celled, that can be found everywhere and can cause illness",
    "sentence": "Medical scientists concluded that the sudden severe disease outbreak was directly caused by harmful {{BLANK}} in the drinking water.",
    "cn": "醫學家得出結論，這場突如其來的嚴重疾病爆發是由飲用水中附帶的有害細菌直接引起的。"
  },
  {
    "word": "beneath",
    "pos": "prep./adv.",
    "cn_def": "在…下方；在…底下（介系詞／副詞）",
    "en_def": "extending or directly underneath; at a lower level or under the surface of",
    "sentence": "Vinnie's fluffy white cat likes to sleep peacefully on a warm wool towel {{BLANK}} the bed every winter afternoon.",
    "cn": "每到冬天的午後，文妮毛茸茸的白貓喜歡平靜地睡在床鋪底下溫暖的羊毛毛巾上。"
  },
  {
    "word": "bud",
    "pos": "n.",
    "cn_def": "芽；花蕾；苞（可數）",
    "en_def": "a small lateral or terminal protuberance on the stem of a plant that may develop into a flower or leaf",
    "sentence": "The intelligent teacher noticed bad cheating habits early and decided to nip the negative behavior in the {{BLANK}}.",
    "cn": "明智的老師很早就注意到了作弊的壞習慣，並決定將這種不良行為扼殺於萌芽階段／防微杜漸。"
  },
  {
    "word": "bud",
    "pos": "v.",
    "cn_def": "發芽；萌芽；開始發展（動詞）",
    "en_def": "to put forth or produce buds; to begin to grow or develop",
    "sentence": "When the freezing winter frost finally melts away, fruit trees across the sunny countryside begin to {{BLANK}} profusely.",
    "cn": "當酷寒的冬霜終於消融時，陽光明媚鄉間的果樹開始大量發芽／萌芽。"
  },
  {
    "word": "buzzing",
    "pos": "v.",
    "cn_def": "嗡嗡作響；嘁嘁喳喳；充滿興奮議論",
    "en_def": "to make a low, continuous humming sound; to be full of excitement or activity",
    "sentence": "A noisy winged insect was constantly {{BLANK}} in my ear while I tried to read my book under the tree.",
    "cn": "當我試著在樹下看書時，一隻吵鬧的有翅昆蟲不斷在我的耳邊嗡嗡作響。"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "cn_def": "嗡嗡聲；喧鬧聲；興奮狂熱（可數/不可數）",
    "en_def": "a low, continuous humming sound, or a feeling of excitement or vitality",
    "sentence": "We heard an unusual loud {{BLANK}} in the distance and soon saw a red rescue helicopter hovering above the trees.",
    "cn": "我們聽見遠處傳來一陣不尋常且巨大的嗡嗡喧鬧聲，不久便看見一架紅色救援直升機盤旋在樹林上方。"
  },
  {
    "word": "deed",
    "pos": "n.",
    "cn_def": "行徑；事蹟；善行；契約（可數）",
    "en_def": "an intentional action that is performed; an achievement or legal document",
    "sentence": "The brave firefighter was officially awarded a gold medal of honor for his courageous and heroic {{BLANK}}.",
    "cn": "那位勇敢的消防隊員因其英勇無畏的英勇事蹟而被正式授予榮譽金質獎章。"
  },
  {
    "word": "deepen",
    "pos": "v.",
    "cn_def": "加深；深化；變深（動詞）",
    "en_def": "to make or become deep or deeper; to intensify or strengthen",
    "sentence": "The city government decided to {{BLANK}} the muddy riverbed in order to prevent seasonal flooding during heavy typhoons.",
    "cn": "市政府決定加深泥濘的河床，以防止在強烈颱風期間發生季節性水災。"
  }
];

const MCQS = [
  {
    "q": "Vinnie's fluffy little kitten likes to sleep on a soft rug ______ the warm dining table.",
    "options": [
      "beneath",
      "bacteria",
      "bud",
      "deed"
    ],
    "answer": 0,
    "cn": "文妮毛茸茸的小貓喜歡睡在溫暖餐桌下方的柔軟地毯上。",
    "vocabIndex": 5
  },
  {
    "q": "The brave police officer received a special medal for his heroic ______ during the fire rescue.",
    "options": [
      "bacteria",
      "buzz",
      "bud",
      "deed"
    ],
    "answer": 3,
    "cn": "那位勇敢的警官因在火災救援中的英勇事蹟而獲得了一枚特別獎章。",
    "vocabIndex": 10
  },
  {
    "q": "Doctors warned citizens to boil their water because dangerous ______ were found in the lake.",
    "options": [
      "deeds",
      "buds",
      "bacteria",
      "buzzes"
    ],
    "answer": 2,
    "cn": "醫生警告市民要煮沸飲用水，因為在湖水中發現了危險的細菌。",
    "vocabIndex": 4
  },
  {
    "q": "In early spring, tiny green flower ______ appear on the branches before they open into blossoms.",
    "options": [
      "deeds",
      "buds",
      "bacteria",
      "buzzes"
    ],
    "answer": 1,
    "cn": "在初春時節，微小的綠色花蕾會在盛開成花朵之前出現在樹枝上。"
  },
  {
    "q": "We heard a loud mechanical ______ coming from the refrigerator and knew something was broken.",
    "options": [
      "bud",
      "deed",
      "buzz",
      "bacteria"
    ],
    "answer": 2,
    "cn": "我們聽見從冰箱傳來巨大的機械嗡嗡聲，便知道有東西壞掉了。",
    "vocabIndex": 8
  },
  {
    "q": "The polite girl felt a deep sense of ______ when she accidentally dropped her plate at the banquet.",
    "options": [
      "awkwardness",
      "bacteria",
      "bud",
      "deed"
    ],
    "answer": 0,
    "cn": "那位有禮貌的女孩在宴會上不小心打翻盤子時，感到深深的尷尬與窘迫。",
    "vocabIndex": 3
  },
  {
    "q": "There are billions of microscopic ______ living in human soil that help decompose dry leaves.",
    "options": [
      "deeds",
      "buds",
      "buzzes",
      "bacteria"
    ],
    "answer": 3,
    "cn": "有數十億微小的細菌生活在土壤中，協助分解乾枯的落葉。",
    "vocabIndex": 4
  },
  {
    "q": "Doing one kind ______ every single day is a wonderful habit that makes the world friendlier.",
    "options": [
      "bacteria",
      "deed",
      "buzz",
      "bud"
    ],
    "answer": 1,
    "cn": "每天做一件親切的善行是一個能讓世界更加友善的美好習慣。",
    "vocabIndex": 10
  },
  {
    "q": "The new comedy film created a tremendous media ______ that attracted thousands of movie fans.",
    "options": [
      "bacteria",
      "deed",
      "bud",
      "buzz"
    ],
    "answer": 3,
    "cn": "這部新喜劇電影引發了巨大的媒體熱議轟動，吸引了數千名影迷。",
    "vocabIndex": 8
  },
  {
    "q": "After the snow melted, the gardener noticed fresh rose ______ starting to grow on the stems.",
    "options": [
      "deeds",
      "buds",
      "bacteria",
      "buzzes"
    ],
    "answer": 1,
    "cn": "積雪融化後，園丁注意到新鮮的玫瑰花蕾開始在花莖上生長。"
  },
  {
    "q": "There was an ______ pause in the meeting when nobody knew the answer to the boss's question.",
    "options": [
      "awkward",
      "deep",
      "buzzing",
      "budding"
    ],
    "answer": 0,
    "cn": "當沒有人知道老闆問題的答案時，會議中出現了一段尷尬難堪的停頓。",
    "vocabIndex": 2
  },
  {
    "q": "The young boy felt very ______ wearing a formal tuxedo suit to his friend's casual birthday party.",
    "options": [
      "deep",
      "budding",
      "awkward",
      "bacterial"
    ],
    "answer": 2,
    "cn": "那個年輕男孩穿著正式燕尾服去參加朋友的休閒生日派對，感到非常尷尬彆扭。",
    "vocabIndex": 2
  },
  {
    "q": "The dancer's stiff and ______ movements showed that she had not practiced the new routine enough.",
    "options": [
      "awkward",
      "deep",
      "budding",
      "bacterial"
    ],
    "answer": 0,
    "cn": "那位舞者僵硬而笨拙不自然的動作顯示出她對這套新舞步練習不足。",
    "vocabIndex": 2
  },
  {
    "q": "A persistent bee began to ______ around our table while we were eating sweet watermelon.",
    "options": [
      "bud",
      "deepen",
      "deed",
      "buzz"
    ],
    "answer": 3,
    "cn": "當我們正在吃甜西瓜時，一隻惱人的蜜蜂開始在我們的桌子周圍嗡嗡盤旋。",
    "vocabIndex": 8
  },
  {
    "q": "Workers had to ______ the narrow drainage ditch so that heavy rainwater could flow away quickly.",
    "options": [
      "buzz",
      "bud",
      "deepen",
      "deed"
    ],
    "answer": 2,
    "cn": "工人們必須加深狹窄的排水溝，以便大量雨水能迅速排走。",
    "vocabIndex": 11
  },
  {
    "q": "As spring temperatures gradually warm up, the fruit trees in our grandfather's yard start to ______.",
    "options": [
      "deepen",
      "bud",
      "awkward",
      "buzz"
    ],
    "answer": 1,
    "cn": "隨著春季氣溫逐漸回暖，我們祖父院子裡的果樹開始發芽／萌芽。",
    "vocabIndex": 6
  },
  {
    "q": "Sharing honest personal thoughts with each other will surely ______ your friendship over time.",
    "options": [
      "deepen",
      "buzz",
      "bud",
      "deed"
    ],
    "answer": 0,
    "cn": "隨著時間推移，彼此分享真誠的個人想法肯定會加深／深化你們的友誼。",
    "vocabIndex": 11
  },
  {
    "q": "The students' smartphones were ______ with notifications after the exciting school dance was announced.",
    "options": [
      "budding",
      "deepening",
      "buzzing",
      "deeding"
    ],
    "answer": 2,
    "cn": "在公布了令人振奮的學校舞會後，學生們的智慧型手機通知震動響個不停。",
    "vocabIndex": 8
  },
  {
    "q": "I had never baked bread before, but I decided to try following the cookbook instructions ______.",
    "options": [
      "shortly",
      "deeply",
      "awkwardly",
      "anyhow"
    ],
    "answer": 3,
    "cn": "我以前從未烤過麵包，但我決定無論如何／不管怎樣還是照著食譜說明試試看。",
    "vocabIndex": 0
  },
  {
    "q": "It was getting dark and cold, but the hikers decided to continue up the rocky path ______.",
    "options": [
      "shortly",
      "anyhow",
      "deeply",
      "awkwardly"
    ],
    "answer": 1,
    "cn": "天色漸漸變暗且冷了起來，但登山客們決定無論如何還是繼續沿著岩石小徑前進。",
    "vocabIndex": 0
  },
  {
    "q": "The old treasure chest had been hidden ______ the wooden floorboards for over two centuries.",
    "options": [
      "awkward",
      "anyhow",
      "beneath",
      "shortly"
    ],
    "answer": 2,
    "cn": "那座古老的藏寶箱已經被隱藏在木地板下方超過兩個世紀之久了。",
    "vocabIndex": 5
  },
  {
    "q": "A smart detective decided to ______ the illegal scam before innocent people lost their money.",
    "options": [
      "nip it in the bud",
      "feel awkward",
      "buzz with rumors",
      "do a good deed"
    ],
    "answer": 0,
    "cn": "一位聰明的偵探決定在無辜民眾損失金錢之前，將這起非法詐騙扼殺於萌芽階段／防微杜漸。",
    "vocabIndex": 6
  },
  {
    "q": "The entire cafeteria was ______ after students heard that classes might be cancelled tomorrow.",
    "options": [
      "nipped in the bud",
      "buzzing with rumors",
      "in any case",
      "doing a good deed"
    ],
    "answer": 1,
    "cn": "在學生們聽說明天可能會停課之後，整個學生餐廳傳聞沸沸揚揚／充滿熱烈討論。",
    "vocabIndex": 8
  },
  {
    "q": "We might miss the early flight, but ______ we will definitely attend the dinner celebration.",
    "options": [
      "nip in the bud",
      "buzzing with rumors",
      "awkward silence",
      "in any case"
    ],
    "answer": 3,
    "cn": "我們可能會錯過早班飛機，但無論如何我們都一定會參加晚宴慶祝活動。",
    "vocabIndex": 1
  },
  {
    "q": "After Mark made an inappropriate joke, a sudden ______ fell over the crowded dinner table.",
    "options": [
      "awkward silence",
      "in any case",
      "harmful bacteria",
      "nip in the bud"
    ],
    "answer": 0,
    "cn": "在馬克開了一個不恰當的玩笑後，擁擠的餐桌上頓時陷入了一陣尷尬的沉默。",
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "anyhow": {
    "pos": "adv.",
    "en_def": "anyway; in any case; used to indicate that something happens despite what has been said",
    "cn_def": "無論如何；不管怎樣；總之",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "anyway; in any case; used to indicate that something happens despite what has been said",
        "cn_def": "無論如何；不管怎樣；總之"
      }
    ]
  },
  "in any case": {
    "pos": "phr.",
    "en_def": "whatever happens; at any rate; regardless of other circumstances",
    "cn_def": "無論如何；不管怎樣；總之",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "whatever happens; at any rate; regardless of other circumstances",
        "cn_def": "無論如何；不管怎樣；總之"
      }
    ]
  },
  "awkward": {
    "pos": "adj.",
    "en_def": "causing or feeling embarrassment; clumsy or difficult to deal with",
    "cn_def": "尷尬的；笨拙的；不自然的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing or feeling embarrassment; clumsy or difficult to deal with",
        "cn_def": "尷尬的；笨拙的；不自然的"
      }
    ]
  },
  "awkwardness": {
    "pos": "n.",
    "en_def": "the state of being awkward, clumsy, or socially uncomfortable",
    "cn_def": "尷尬；笨拙；侷促不安（不可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being awkward, clumsy, or socially uncomfortable",
        "cn_def": "尷尬；笨拙；侷促不安（不可數）"
      }
    ]
  },
  "bacteria": {
    "pos": "n. pl.",
    "en_def": "microscopic living organisms, usually single-celled, that can be found everywhere and can cause illness",
    "cn_def": "細菌（複數名詞，單數為 bacterium）",
    "combined": [
      {
        "pos": "n. pl.",
        "en_def": "microscopic living organisms, usually single-celled, that can be found everywhere and can cause illness",
        "cn_def": "細菌（複數名詞，單數為 bacterium）"
      }
    ]
  },
  "beneath": {
    "pos": "prep./adv.",
    "en_def": "extending or directly underneath; at a lower level or under the surface of",
    "cn_def": "在…下方；在…底下（介系詞／副詞）",
    "combined": [
      {
        "pos": "prep./adv.",
        "en_def": "extending or directly underneath; at a lower level or under the surface of",
        "cn_def": "在…下方；在…底下（介系詞／副詞）"
      }
    ]
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small lateral or terminal protuberance on the stem of a plant that may develop into a flower or leaf",
    "cn_def": "芽；花蕾；苞（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a small lateral or terminal protuberance on the stem of a plant that may develop into a flower or leaf",
        "cn_def": "芽；花蕾；苞（可數）"
      },
      {
        "pos": "v.",
        "en_def": "to put forth or produce buds; to begin to grow or develop",
        "cn_def": "發芽；萌芽；開始發展（動詞）"
      }
    ]
  },
  "buzz": {
    "pos": "v.",
    "en_def": "to make a low, continuous humming sound; to be full of excitement or activity",
    "cn_def": "嗡嗡作響；嘁嘁喳喳；充滿興奮議論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a low, continuous humming sound; to be full of excitement or activity",
        "cn_def": "嗡嗡作響；嘁嘁喳喳；充滿興奮議論"
      },
      {
        "pos": "n.",
        "en_def": "a low, continuous humming sound, or a feeling of excitement or vitality",
        "cn_def": "嗡嗡聲；喧鬧聲；興奮狂熱（可數/不可數）"
      }
    ]
  },
  "buzzing": {
    "pos": "v.",
    "en_def": "to make a low, continuous humming sound; to be full of excitement or activity",
    "cn_def": "嗡嗡作響；嘁嘁喳喳；充滿興奮議論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make a low, continuous humming sound; to be full of excitement or activity",
        "cn_def": "嗡嗡作響；嘁嘁喳喳；充滿興奮議論"
      }
    ]
  },
  "deed": {
    "pos": "n.",
    "en_def": "an intentional action that is performed; an achievement or legal document",
    "cn_def": "行徑；事蹟；善行；契約（可數）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an intentional action that is performed; an achievement or legal document",
        "cn_def": "行徑；事蹟；善行；契約（可數）"
      }
    ]
  },
  "deepen": {
    "pos": "v.",
    "en_def": "to make or become deep or deeper; to intensify or strengthen",
    "cn_def": "加深；深化；變深（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become deep or deeper; to intensify or strengthen",
        "cn_def": "加深；深化；變深（動詞）"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
