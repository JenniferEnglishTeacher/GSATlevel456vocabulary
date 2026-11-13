// Unit 1 Quiz Data: absent – asleep
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "國中小進階800字 U01 - absent – asleep",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "absent",
    "pos": "adj.",
    "cn_def": "缺席的，不在場的",
    "en_def": "not in a place where you should be",
    "sentence": "He was {{BLANK}} from the meeting yesterday.",
    "cn": "他昨天缺席了會議。"
  },
  {
    "word": "accept",
    "pos": "v.",
    "cn_def": "接受，同意",
    "en_def": "to say yes to something that is given or offered to you",
    "sentence": "She decided to {{BLANK}} the job offer.",
    "cn": "她決定接受這份工作。"
  },
  {
    "word": "act",
    "pos": "v.",
    "cn_def": "行動，扮演",
    "en_def": "to do something; to behave in a certain way",
    "sentence": "He always tries to {{BLANK}} cool.",
    "cn": "他總是試圖裝酷。"
  },
  {
    "word": "action",
    "pos": "n.",
    "cn_def": "行動，動作",
    "en_def": "something that you do; exciting things that happen in a movie",
    "sentence": "The movie is full of exciting {{BLANK}}.",
    "cn": "這部電影充滿了令人興奮的動作場面。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "活躍的，積極的",
    "en_def": "always busy doing things",
    "sentence": "She is very {{BLANK}} in the community.",
    "cn": "她在社區裡非常活躍。"
  },
  {
    "word": "activity",
    "pos": "n.",
    "cn_def": "活動",
    "en_def": "something that you do for fun or to learn",
    "sentence": "They planned a lot of fun {{BLANK}} for the camp.",
    "cn": "他們為營隊計劃了很多有趣的活動。"
  },
  {
    "word": "add",
    "pos": "v.",
    "cn_def": "添加，加上",
    "en_def": "to put one thing with another thing",
    "sentence": "Don't forget to {{BLANK}} sugar to the recipe.",
    "cn": "別忘了在食譜裡加糖。"
  },
  {
    "word": "address",
    "pos": "n.",
    "cn_def": "地址，演說",
    "en_def": "the number, street, and city where someone lives",
    "sentence": "Please send the letter to my new {{BLANK}}.",
    "cn": "請把信寄到我的新地址。"
  },
  {
    "word": "adult",
    "pos": "n.",
    "cn_def": "成人",
    "en_def": "a person who is not a child anymore",
    "sentence": "Only {{BLANK}} are allowed to watch this movie.",
    "cn": "只有成人才允許觀看這部電影。"
  },
  {
    "word": "advertisement",
    "pos": "n.",
    "cn_def": "廣告",
    "en_def": "a picture or short film that tries to make people buy something",
    "sentence": "I saw an interesting {{BLANK}} on TV.",
    "cn": "我在電視上看到一則有趣的廣告。"
  },
  {
    "word": "advice",
    "pos": "n.",
    "cn_def": "建議",
    "en_def": "words that tell someone what they should do",
    "sentence": "She gave me some good {{BLANK}}.",
    "cn": "她給了我一些好的建議。"
  },
  {
    "word": "advise",
    "pos": "v.",
    "cn_def": "建議",
    "en_def": "to tell someone what you think they should do",
    "sentence": "The doctor {{BLANK}} him to rest.",
    "cn": "醫生建議他休息。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to make a change in someone or something",
    "sentence": "The weather can {{BLANK}} your mood.",
    "cn": "天氣會影響你的心情。"
  },
  {
    "word": "against",
    "pos": "prep.",
    "cn_def": "反對，對抗",
    "en_def": "not agreeing with something",
    "sentence": "He is {{BLANK}} the new policy.",
    "cn": "他反對這項新政策。"
  },
  {
    "word": "aim",
    "pos": "v.",
    "cn_def": "瞄準，目標",
    "en_def": "to try or plan to do something",
    "sentence": "She {{BLANK}} to become a doctor.",
    "cn": "她的目標是成為一名醫生。"
  },
  {
    "word": "air conditioner",
    "pos": "n.",
    "cn_def": "冷氣機",
    "en_def": "a machine that makes a room cool",
    "sentence": "The {{BLANK}} is not working properly.",
    "cn": "冷氣機運作不正常。",
    "nblanks": 2
  },
  {
    "word": "airlines",
    "pos": "n.",
    "cn_def": "航空公司",
    "en_def": "a company that takes people to places by plane",
    "sentence": "She works for a major {{BLANK}}.",
    "cn": "她在一家大型航空公司工作。"
  },
  {
    "word": "alarm",
    "pos": "n.",
    "cn_def": "警報，鬧鐘",
    "en_def": "a clock or machine that makes a loud sound to wake or warn you",
    "sentence": "The {{BLANK}} woke me up at 6 AM.",
    "cn": "鬧鐘在早上六點把我叫醒。"
  },
  {
    "word": "album",
    "pos": "n.",
    "cn_def": "相簿，專輯",
    "en_def": "a book for keeping photos; a set of songs by one singer",
    "sentence": "He showed me his photo {{BLANK}}.",
    "cn": "他給我看了他的相簿。"
  },
  {
    "word": "alike",
    "pos": "adj./adv.",
    "cn_def": "相似的，一樣地",
    "en_def": "almost the same",
    "sentence": "The twins look {{BLANK}}.",
    "cn": "這對雙胞胎看起來很像。"
  },
  {
    "word": "asleep",
    "pos": "adj.",
    "cn_def": "睡著的",
    "en_def": "sleeping",
    "sentence": "The baby is finally {{BLANK}} in his crib.",
    "cn": "嬰兒終於在他的搖籃裡睡著了。"
  }
];

const MCQS = [
  {
    "q": "Tom was ______ from school yesterday because he had a bad cold. He stayed in bed all day and did not see his classmates.",
    "options": [
      "absent",
      "active",
      "asleep",
      "alike"
    ],
    "answer": 0,
    "cn": "他昨天缺席了會議。",
    "vocabIndex": 0
  },
  {
    "q": "Lisa was happy to ______ the invitation to Amy's birthday party. She said yes right away and bought a nice present.",
    "options": [
      "add",
      "affect",
      "accept",
      "advise"
    ],
    "answer": 2,
    "cn": "她決定接受這份工作。",
    "vocabIndex": 1
  },
  {
    "q": "Please ______ like a big boy at the restaurant tonight. Don't run around or shout, and say thank you to the waiter.",
    "options": [
      "add",
      "act",
      "aim",
      "accept"
    ],
    "answer": 1,
    "cn": "他總是試圖裝酷。",
    "vocabIndex": 2
  },
  {
    "q": "The fire was getting bigger, so the teacher took ______ right away. She led all the students out of the building in two minutes.",
    "options": [
      "advice",
      "address",
      "album",
      "action"
    ],
    "answer": 3,
    "cn": "這部電影充滿了令人興奮的動作場面。",
    "vocabIndex": 3
  },
  {
    "q": "Grandpa is eighty, but he is still very ______. He swims every morning, and he walks in the park every evening.",
    "options": [
      "absent",
      "asleep",
      "active",
      "alike"
    ],
    "answer": 2,
    "cn": "她在社區裡非常活躍。",
    "vocabIndex": 4
  },
  {
    "q": "The school has many ______ after class, like basketball, dancing, and painting. Students can choose the ones they like best.",
    "options": [
      "activities",
      "addresses",
      "adults",
      "alarms"
    ],
    "answer": 0,
    "cn": "他們為營隊計劃了很多有趣的活動。",
    "vocabIndex": 5
  },
  {
    "q": "The soup is not salty enough. Please ______ a little salt to it, and then taste it again.",
    "options": [
      "act",
      "add",
      "accept",
      "advise"
    ],
    "answer": 1,
    "cn": "別忘了在食譜裡加糖。",
    "vocabIndex": 6
  },
  {
    "q": "Please write your name and ______ on the envelope. Then the mailman will know where your house is.",
    "options": [
      "advice",
      "action",
      "alarm",
      "address"
    ],
    "answer": 3,
    "cn": "請把信寄到我的新地址。",
    "vocabIndex": 7
  },
  {
    "q": "This movie is only for ______. Children under eighteen cannot buy tickets or go into the theater.",
    "options": [
      "albums",
      "adults",
      "alarms",
      "activities"
    ],
    "answer": 1,
    "cn": "只有成人才允許觀看這部電影。",
    "vocabIndex": 8
  },
  {
    "q": "I saw an ______ for a new cellphone on TV last night. It made me want to buy one right away.",
    "options": [
      "adult",
      "address",
      "advertisement",
      "album"
    ],
    "answer": 2,
    "cn": "我在電視上看到一則有趣的廣告。",
    "vocabIndex": 9
  },
  {
    "q": "I didn't know which school to choose, so I asked my teacher for ______. She told me to visit both schools first.",
    "options": [
      "advice",
      "action",
      "activity",
      "alarm"
    ],
    "answer": 0,
    "cn": "她給了我一些好的建議。",
    "vocabIndex": 10
  },
  {
    "q": "I had a bad cough, so the doctor ______ me to drink more water and go to bed early every night.",
    "options": [
      "added",
      "acted",
      "aimed",
      "advised"
    ],
    "answer": 3,
    "cn": "醫生建議他休息。",
    "vocabIndex": 11
  },
  {
    "q": "Not getting enough sleep can ______ your health. You may feel tired all day and get sick more easily.",
    "options": [
      "accept",
      "affect",
      "advise",
      "add"
    ],
    "answer": 1,
    "cn": "天氣會影響你的心情。",
    "vocabIndex": 12
  },
  {
    "q": "Most students are ______ the new rule. They don't think it is fair, and they want the school to change it.",
    "options": [
      "against",
      "beyond",
      "plus",
      "minus"
    ],
    "answer": 0,
    "cn": "他反對這項新政策。",
    "vocabIndex": 13
  },
  {
    "q": "Lisa ______ to become a doctor. She studies hard every day because she wants to help sick people in the future.",
    "options": [
      "adds",
      "acts",
      "aims",
      "affects"
    ],
    "answer": 2,
    "cn": "她的目標是成為一名醫生。",
    "vocabIndex": 14
  },
  {
    "q": "It is so hot in this room. Could you turn on the ______, please? I can't study when I am this hot.",
    "options": [
      "alarm",
      "album",
      "advertisement",
      "air conditioner"
    ],
    "answer": 3,
    "cn": "冷氣機運作不正常。",
    "vocabIndex": 15
  },
  {
    "q": "My aunt works for an ______. She flies to Japan and Korea every week and takes care of the people on the plane.",
    "options": [
      "address",
      "album",
      "airline",
      "adult"
    ],
    "answer": 2,
    "cn": "她在一家大型航空公司工作。",
    "vocabIndex": 16
  },
  {
    "q": "I set the ______ for six o'clock, but I didn't hear it this morning. I got up at eight and was late for school.",
    "options": [
      "album",
      "address",
      "advice",
      "alarm"
    ],
    "answer": 3,
    "cn": "鬧鐘在早上六點把我叫醒。",
    "vocabIndex": 17
  },
  {
    "q": "This ______ is full of pictures of my family. Look, this is a photo of me when I was a baby.",
    "options": [
      "alarm",
      "album",
      "address",
      "advice"
    ],
    "answer": 1,
    "cn": "他給我看了他的相簿。",
    "vocabIndex": 18
  },
  {
    "q": "The two sisters look so much ______ that even their teachers can't tell who is who. They have the same eyes and hair.",
    "options": [
      "alike",
      "absent",
      "active",
      "asleep"
    ],
    "answer": 0,
    "cn": "這對雙胞胎看起來很像。",
    "vocabIndex": 19
  },
  {
    "q": "The baby is ______ in her bed now. Please be quiet and don't wake her up. She cried for two hours.",
    "options": [
      "absent",
      "asleep",
      "active",
      "alike"
    ],
    "answer": 1,
    "cn": "嬰兒終於在他的搖籃裡睡著了。",
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "absent": {
    "pos": "adj.",
    "en_def": "not in a place where you should be",
    "cn_def": "缺席的，不在場的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "always busy doing things",
    "cn_def": "活躍的，積極的"
  },
  "asleep": {
    "pos": "adj.",
    "en_def": "sleeping",
    "cn_def": "睡著的"
  },
  "alike": {
    "pos": "adj./adv.",
    "en_def": "almost the same",
    "cn_def": "相似的，一樣地"
  },
  "add": {
    "pos": "v.",
    "en_def": "to put one thing with another thing",
    "cn_def": "添加，加上"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to make a change in someone or something",
    "cn_def": "影響"
  },
  "accept": {
    "pos": "v.",
    "en_def": "to say yes to something that is given or offered to you",
    "cn_def": "接受，同意"
  },
  "advise": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議"
  },
  "act": {
    "pos": "v.",
    "en_def": "to do something; to behave in a certain way",
    "cn_def": "行動，扮演"
  },
  "aim": {
    "pos": "v.",
    "en_def": "to try or plan to do something",
    "cn_def": "瞄準，目標"
  },
  "advice": {
    "pos": "n.",
    "en_def": "words that tell someone what they should do",
    "cn_def": "建議"
  },
  "address": {
    "pos": "n.",
    "en_def": "the number, street, and city where someone lives",
    "cn_def": "地址，演說"
  },
  "album": {
    "pos": "n.",
    "en_def": "a book for keeping photos; a set of songs by one singer",
    "cn_def": "相簿，專輯"
  },
  "action": {
    "pos": "n.",
    "en_def": "something that you do; exciting things that happen in a movie",
    "cn_def": "行動，動作"
  },
  "activities": {
    "pos": "n.",
    "en_def": "something that you do for fun or to learn",
    "cn_def": "活動"
  },
  "addresses": {
    "pos": "n.",
    "en_def": "the number, street, and city where someone lives",
    "cn_def": "地址，演說"
  },
  "adults": {
    "pos": "n.",
    "en_def": "a person who is not a child anymore",
    "cn_def": "成人"
  },
  "alarms": {
    "pos": "n.",
    "en_def": "a clock or machine that makes a loud sound to wake or warn you",
    "cn_def": "警報，鬧鐘"
  },
  "alarm": {
    "pos": "n.",
    "en_def": "a clock or machine that makes a loud sound to wake or warn you",
    "cn_def": "警報，鬧鐘"
  },
  "albums": {
    "pos": "n.",
    "en_def": "a book for keeping photos; a set of songs by one singer",
    "cn_def": "相簿，專輯"
  },
  "adult": {
    "pos": "n.",
    "en_def": "a person who is not a child anymore",
    "cn_def": "成人"
  },
  "advertisement": {
    "pos": "n.",
    "en_def": "a picture or short film that tries to make people buy something",
    "cn_def": "廣告"
  },
  "activity": {
    "pos": "n.",
    "en_def": "something that you do for fun or to learn",
    "cn_def": "活動"
  },
  "added": {
    "pos": "v.",
    "en_def": "to put one thing with another thing",
    "cn_def": "添加，加上"
  },
  "acted": {
    "pos": "v.",
    "en_def": "to do something; to behave in a certain way",
    "cn_def": "行動，扮演"
  },
  "aimed": {
    "pos": "v.",
    "en_def": "to try or plan to do something",
    "cn_def": "瞄準，目標"
  },
  "advised": {
    "pos": "v.",
    "en_def": "to tell someone what you think they should do",
    "cn_def": "建議"
  },
  "against": {
    "pos": "prep.",
    "en_def": "not agreeing with something",
    "cn_def": "反對，對抗"
  },
  "beyond": {
    "pos": "prep.",
    "en_def": "on the far side of something",
    "cn_def": "超過，在...之外"
  },
  "plus": {
    "pos": "prep.",
    "en_def": "and also; added to",
    "cn_def": "加上，此外"
  },
  "minus": {
    "pos": "prep.",
    "en_def": "below zero; made smaller by a number",
    "cn_def": "減，負的"
  },
  "adds": {
    "pos": "v.",
    "en_def": "to put one thing with another thing",
    "cn_def": "添加，加上"
  },
  "acts": {
    "pos": "v.",
    "en_def": "to do something; to behave in a certain way",
    "cn_def": "行動，扮演"
  },
  "aims": {
    "pos": "v.",
    "en_def": "to try or plan to do something",
    "cn_def": "瞄準，目標"
  },
  "affects": {
    "pos": "v.",
    "en_def": "to make a change in someone or something",
    "cn_def": "影響"
  },
  "air conditioner": {
    "pos": "n.",
    "en_def": "a machine that makes a room cool",
    "cn_def": "冷氣機"
  },
  "airline": {
    "pos": "n.",
    "en_def": "a company that takes people to places by plane",
    "cn_def": "航空公司"
  }
};

const EXTRA_GLOSSES = {};
