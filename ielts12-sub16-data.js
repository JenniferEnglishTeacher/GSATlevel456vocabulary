// Topic 12 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T12 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "down to earth",
    "pos": "adj.phr.",
    "cn_def": "務實的；平易近人的",
    "en_def": "practical, sensible and friendly",
    "sentence": "The famous astronaut was very {{BLANK}}, and she happily answered every question the students asked her.",
    "cn": "那位知名太空人非常平易近人，而且她很樂意回答學生問她的每一個問題。"
  },
  {
    "word": "over the moon",
    "pos": "adj.phr.",
    "cn_def": "欣喜若狂",
    "en_def": "extremely happy",
    "sentence": "My brother was {{BLANK}} when he was accepted to study astronomy, so he called everyone in the family that night.",
    "cn": "我哥哥被錄取念天文學時欣喜若狂，所以他當晚打電話給家裡每一個人。"
  },
  {
    "word": "once in a blue moon",
    "pos": "phr.",
    "cn_def": "千載難逢；極少",
    "en_def": "very rarely",
    "sentence": "We see the Northern Lights in Taiwan only {{BLANK}}, so most people travel abroad to watch them.",
    "cn": "我們在臺灣極少能看到北極光，所以大多數人會出國去觀賞。"
  },
  {
    "word": "reach for the stars",
    "pos": "v.phr.",
    "cn_def": "追求遠大目標",
    "en_def": "to try to achieve something very difficult",
    "sentence": "Our teacher always tells us to {{BLANK}}, because she believes that hard work can make big dreams come true.",
    "cn": "我們老師總是告訴我們要追求遠大的目標，因為她相信努力能讓遠大的夢想成真。"
  },
  {
    "word": "the sky's the limit",
    "pos": "phr.",
    "cn_def": "前途無量；沒有極限",
    "en_def": "there is no limit to what can be achieved",
    "sentence": "You are talented and hardworking, so {{BLANK}} for your future in science.",
    "cn": "你有天分又努力，所以你在科學領域的未來前途無量。"
  },
  {
    "word": "light years ahead of",
    "pos": "adj.phr.",
    "cn_def": "遙遙領先",
    "en_def": "much more advanced than",
    "sentence": "The new space telescope is {{BLANK}} older models, and it has already found hundreds of new galaxies.",
    "cn": "新的太空望遠鏡比舊型號遙遙領先，而它已經發現了數百個新星系。"
  },
  {
    "word": "move heaven and earth",
    "pos": "v.phr.",
    "cn_def": "竭盡全力",
    "en_def": "to do everything possible to achieve something",
    "sentence": "The rescue teams {{BLANK}} to find survivors after the earthquake, and they worked for days without rest.",
    "cn": "地震後救援隊竭盡全力尋找倖存者，而他們好幾天不眠不休地工作。"
  },
  {
    "word": "on shaky ground",
    "pos": "adj.phr.",
    "cn_def": "基礎不穩；站不住腳",
    "en_def": "not based on strong facts or not certain",
    "sentence": "His argument was {{BLANK}}, because he had no real evidence that animals can predict earthquakes.",
    "cn": "他的論點站不住腳，因為他沒有真正的證據證明動物能預測地震。"
  },
  {
    "word": "it's not rocket science",
    "pos": "phr.",
    "cn_def": "這並不難懂",
    "en_def": "it is not difficult to understand",
    "sentence": "Packing an emergency kit is easy, and {{BLANK}}, so every family should prepare one this weekend.",
    "cn": "準備緊急避難包很容易，而且這並不難，所以每個家庭這個週末都應該準備一個。"
  },
  {
    "word": "out of this world",
    "pos": "adj.phr.",
    "cn_def": "好得不得了",
    "en_def": "extremely good",
    "sentence": "The view of the stars from the mountain was {{BLANK}}, and we stayed outside until midnight despite the cold.",
    "cn": "從山上看星星的景色好得不得了，而儘管很冷，我們仍在戶外待到午夜。"
  },
  {
    "word": "thank one's lucky stars",
    "pos": "v.phr.",
    "cn_def": "慶幸自己走運",
    "en_def": "to feel very grateful for good luck",
    "sentence": "We {{BLANK}} that nobody was hurt in the earthquake, because the old shop next door completely collapsed.",
    "cn": "我們慶幸自己很走運，地震中沒有人受傷，因為隔壁的老店完全倒塌了。"
  },
  {
    "word": "break new ground",
    "pos": "v.phr.",
    "cn_def": "開創新局；有所突破",
    "en_def": "to do something new that nobody has done before",
    "sentence": "The young scientists {{BLANK}} with their study of moon dust, and their work was published in a famous journal.",
    "cn": "那些年輕科學家以他們對月球塵土的研究開創了新局，而他們的成果發表在一本知名期刊上。"
  },
  {
    "word": "come back down to earth",
    "pos": "v.phr.",
    "cn_def": "回到現實",
    "en_def": "to return to normal life after an exciting time",
    "sentence": "After the amazing trip to the observatory, it was hard to {{BLANK}}, because we had a math test the next day.",
    "cn": "在天文臺的精彩旅程之後，很難回到現實，因為我們隔天有數學考試。"
  },
  {
    "word": "move mountains",
    "pos": "v.phr.",
    "cn_def": "移山倒海；成就不可能的事",
    "en_def": "to achieve something that seems impossible",
    "sentence": "With enough teamwork, a small group of students can {{BLANK}}, and our robot club proved this by winning the national prize.",
    "cn": "只要有足夠的團隊合作，一小群學生也能成就不可能的事，而我們的機器人社團贏得全國大獎證明了這一點。"
  },
  {
    "word": "rock solid",
    "pos": "adj.phr.",
    "cn_def": "堅如磐石；極其可靠",
    "en_def": "very strong, reliable and unlikely to fail",
    "sentence": "The scientists' evidence was {{BLANK}}, so even the most doubtful reviewers accepted their surprising conclusion.",
    "cn": "科學家的證據極其可靠，所以即使是最多疑的審查者也接受了他們令人驚訝的結論。"
  },
  {
    "word": "earth-shattering",
    "pos": "adj.",
    "cn_def": "驚天動地的",
    "en_def": "extremely important or shocking",
    "sentence": "The discovery of water on Mars was {{BLANK}} news, and it appeared on the front page of every newspaper.",
    "cn": "在火星上發現水是驚天動地的新聞，而它登上了每一份報紙的頭版。"
  },
  {
    "word": "blow one's top",
    "pos": "v.phr.",
    "cn_def": "勃然大怒",
    "en_def": "to suddenly become very angry",
    "sentence": "My dad {{BLANK}} when he saw the broken telescope, but he calmed down after my brother said sorry.",
    "cn": "我爸爸看到摔壞的望遠鏡時勃然大怒，但在我哥哥道歉後他就冷靜下來了。"
  },
  {
    "word": "the calm before the storm",
    "pos": "n.phr.",
    "cn_def": "暴風雨前的寧靜",
    "en_def": "a quiet period before trouble or great activity",
    "sentence": "The office was silent an hour before the launch, but everyone knew it was only {{BLANK}}.",
    "cn": "發射前一小時辦公室一片寂靜，但每個人都知道那只是暴風雨前的寧靜。"
  },
  {
    "word": "shake the foundations of",
    "pos": "v.phr.",
    "cn_def": "動搖……的根基",
    "en_def": "to seriously challenge basic ideas or systems",
    "sentence": "The new theory could {{BLANK}} modern physics, so many scientists are checking it very carefully.",
    "cn": "這個新理論可能會動搖現代物理學的根基，所以許多科學家正非常仔細地檢驗它。"
  },
  {
    "word": "the centre of the universe",
    "pos": "n.phr.",
    "cn_def": "宇宙的中心；自以為最重要",
    "en_def": "the most important person or thing (often used critically)",
    "sentence": "He acts as if he is {{BLANK}}, but his teammates are tired of his selfish attitude.",
    "cn": "他表現得好像自己是宇宙的中心，但他的隊友已經厭倦了他自私的態度。"
  }
];

const MCQS = [
  {
    "q": "The famous astronaut was very _____, and she happily answered every question the students asked her.",
    "options": [
      "over the moon",
      "on shaky ground",
      "rock solid",
      "down to earth"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "My brother was _____ when he was accepted to study astronomy, so he called everyone in the family that night.",
    "options": [
      "out of this world",
      "over the moon",
      "down to earth",
      "on shaky ground"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "We see the Northern Lights in Taiwan only _____, so most people travel abroad to watch them.",
    "options": [
      "once in a blue moon",
      "geologic time scale",
      "reach for the stars",
      "fossil record"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Our teacher always tells us to _____, because she believes that hard work can make big dreams come true.",
    "options": [
      "blow one's top",
      "break new ground",
      "reach for the stars",
      "move mountains"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "You are talented and hardworking, so _____ for your future in science.",
    "options": [
      "geologic time scale",
      "the sky's the limit",
      "topographic map",
      "asteroid impact"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new space telescope is _____ older models, and it has already found hundreds of new galaxies.",
    "options": [
      "light years ahead of",
      "down to earth",
      "over the moon",
      "rock solid"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The rescue teams _____ to find survivors after the earthquake, and they worked for days without rest.",
    "options": [
      "shake the foundations of",
      "come back down to earth",
      "break new ground",
      "move heaven and earth"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "His argument was _____, because he had no real evidence that animals can predict earthquakes.",
    "options": [
      "over the moon",
      "light years ahead of",
      "on shaky ground",
      "out of this world"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Packing an emergency kit is easy, and _____, so every family should prepare one this weekend.",
    "options": [
      "over the moon",
      "move heaven and earth",
      "solar wind",
      "it's not rocket science"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The view of the stars from the mountain was _____, and we stayed outside until midnight despite the cold.",
    "options": [
      "rock solid",
      "over the moon",
      "out of this world",
      "on shaky ground"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "We _____ that nobody was hurt in the earthquake, because the old shop next door completely collapsed.",
    "options": [
      "reach for the stars",
      "thank one's lucky stars",
      "break new ground",
      "move mountains"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The young scientists _____ with their study of moon dust, and their work was published in a famous journal.",
    "options": [
      "break new ground",
      "come back down to earth",
      "thank one's lucky stars",
      "shake the foundations of"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After the amazing trip to the observatory, it was hard to _____, because we had a math test the next day.",
    "options": [
      "break new ground",
      "blow one's top",
      "shake the foundations of",
      "come back down to earth"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "With enough teamwork, a small group of students can _____, and our robot club proved this by winning the national prize.",
    "options": [
      "thank one's lucky stars",
      "move mountains",
      "come back down to earth",
      "break new ground"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The scientists' evidence was _____, so even the most doubtful reviewers accepted their surprising conclusion.",
    "options": [
      "over the moon",
      "out of this world",
      "rock solid",
      "on shaky ground"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The discovery of water on Mars was _____ news, and it appeared on the front page of every newspaper.",
    "options": [
      "earth-shattering",
      "undetected",
      "supplementary",
      "dramatic"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "My dad _____ when he saw the broken telescope, but he calmed down after my brother said sorry.",
    "options": [
      "reach for the stars",
      "move heaven and earth",
      "move mountains",
      "blow one's top"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The office was silent an hour before the launch, but everyone knew it was only _____.",
    "options": [
      "the calm before the storm",
      "evacuation drill",
      "shooting star",
      "space tourism"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new theory could _____ modern physics, so many scientists are checking it very carefully.",
    "options": [
      "break new ground",
      "shake the foundations of",
      "move heaven and earth",
      "thank one's lucky stars"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "He acts as if he is _____, but his teammates are tired of his selfish attitude.",
    "options": [
      "solar eclipse",
      "mission control",
      "the centre of the universe",
      "rocky planet"
    ],
    "answer": 2,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "down to earth": {
    "pos": "adj.phr.",
    "en_def": "practical, sensible and friendly",
    "cn_def": "務實的；平易近人的"
  },
  "over the moon": {
    "pos": "adj.phr.",
    "en_def": "extremely happy",
    "cn_def": "欣喜若狂"
  },
  "once in a blue moon": {
    "pos": "phr.",
    "en_def": "very rarely",
    "cn_def": "千載難逢；極少"
  },
  "reach for the stars": {
    "pos": "v.phr.",
    "en_def": "to try to achieve something very difficult",
    "cn_def": "追求遠大目標"
  },
  "the sky's the limit": {
    "pos": "phr.",
    "en_def": "there is no limit to what can be achieved",
    "cn_def": "前途無量；沒有極限"
  },
  "light years ahead of": {
    "pos": "adj.phr.",
    "en_def": "much more advanced than",
    "cn_def": "遙遙領先"
  },
  "move heaven and earth": {
    "pos": "v.phr.",
    "en_def": "to do everything possible to achieve something",
    "cn_def": "竭盡全力"
  },
  "on shaky ground": {
    "pos": "adj.phr.",
    "en_def": "not based on strong facts or not certain",
    "cn_def": "基礎不穩；站不住腳"
  },
  "it's not rocket science": {
    "pos": "phr.",
    "en_def": "it is not difficult to understand",
    "cn_def": "這並不難懂"
  },
  "out of this world": {
    "pos": "adj.phr.",
    "en_def": "extremely good",
    "cn_def": "好得不得了"
  },
  "thank one's lucky stars": {
    "pos": "v.phr.",
    "en_def": "to feel very grateful for good luck",
    "cn_def": "慶幸自己走運"
  },
  "break new ground": {
    "pos": "v.phr.",
    "en_def": "to do something new that nobody has done before",
    "cn_def": "開創新局；有所突破"
  },
  "come back down to earth": {
    "pos": "v.phr.",
    "en_def": "to return to normal life after an exciting time",
    "cn_def": "回到現實"
  },
  "move mountains": {
    "pos": "v.phr.",
    "en_def": "to achieve something that seems impossible",
    "cn_def": "移山倒海；成就不可能的事"
  },
  "rock solid": {
    "pos": "adj.phr.",
    "en_def": "very strong, reliable and unlikely to fail",
    "cn_def": "堅如磐石；極其可靠"
  },
  "earth-shattering": {
    "pos": "adj.",
    "en_def": "extremely important or shocking",
    "cn_def": "驚天動地的"
  },
  "blow one's top": {
    "pos": "v.phr.",
    "en_def": "to suddenly become very angry",
    "cn_def": "勃然大怒"
  },
  "the calm before the storm": {
    "pos": "n.phr.",
    "en_def": "a quiet period before trouble or great activity",
    "cn_def": "暴風雨前的寧靜"
  },
  "shake the foundations of": {
    "pos": "v.phr.",
    "en_def": "to seriously challenge basic ideas or systems",
    "cn_def": "動搖……的根基"
  },
  "the centre of the universe": {
    "pos": "n.phr.",
    "en_def": "the most important person or thing (often used critically)",
    "cn_def": "宇宙的中心；自以為最重要"
  },
  "geologic time scale": {
    "pos": "n.phr.",
    "en_def": "a system that divides Earth's long history into periods",
    "cn_def": "地質年代表"
  },
  "fossil record": {
    "pos": "n.phr.",
    "en_def": "all the fossils found and what they tell us about past life",
    "cn_def": "化石紀錄"
  },
  "topographic map": {
    "pos": "n.phr.",
    "en_def": "a map that shows the height and shape of the land",
    "cn_def": "地形圖"
  },
  "asteroid impact": {
    "pos": "n.phr.",
    "en_def": "when a space rock hits a planet",
    "cn_def": "小行星撞擊"
  },
  "solar wind": {
    "pos": "n.phr.",
    "en_def": "a stream of particles flowing out from the sun",
    "cn_def": "太陽風"
  },
  "undetected": {
    "pos": "adj.",
    "en_def": "not noticed or discovered",
    "cn_def": "未被察覺的"
  },
  "supplementary": {
    "pos": "adj.",
    "en_def": "added to something to make it complete",
    "cn_def": "補充的"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very noticeable",
    "cn_def": "劇烈的；戲劇性的"
  },
  "evacuation drill": {
    "pos": "n.phr.",
    "en_def": "a practice of leaving a building quickly in an emergency",
    "cn_def": "疏散演練"
  },
  "shooting star": {
    "pos": "n.phr.",
    "en_def": "an everyday name for a meteor",
    "cn_def": "流星（口語）"
  },
  "space tourism": {
    "pos": "n.phr.",
    "en_def": "travelling to space for fun as a paying passenger",
    "cn_def": "太空旅遊"
  },
  "solar eclipse": {
    "pos": "n.phr.",
    "en_def": "when the moon blocks the sun's light from Earth",
    "cn_def": "日蝕"
  },
  "mission control": {
    "pos": "n.phr.",
    "en_def": "the team on Earth that guides a space flight",
    "cn_def": "任務控制中心"
  },
  "rocky planet": {
    "pos": "n.phr.",
    "en_def": "a planet with a hard surface made of rock and metal",
    "cn_def": "岩質行星"
  }
};

const EXTRA_GLOSSES = {};
