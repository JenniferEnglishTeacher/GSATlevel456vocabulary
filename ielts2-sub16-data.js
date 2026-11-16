// Topic 2 Subunit 16 Quiz Data: Fixed Phrases & Collocations 固定片語與搭配詞
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T02 S16 - Fixed Phrases & Collocations 固定片語與搭配詞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "on the brink of extinction",
    "pos": "adj.phr.",
    "cn_def": "瀕臨滅絕",
    "en_def": "very close to disappearing forever",
    "sentence": "The vaquita porpoise is {{BLANK}}, because only about ten of them are left in the sea near Mexico.",
    "cn": "小頭鼠海豚瀕臨滅絕，因為墨西哥附近的海域只剩下大約十隻。"
  },
  {
    "word": "in the wild",
    "pos": "phr.",
    "cn_def": "在野外",
    "en_def": "living free in nature, not in a zoo",
    "sentence": "Pandas live for about twenty years {{BLANK}}, but they can live longer in zoos because they get medical care.",
    "cn": "貓熊在野外大約能活二十年，但在動物園裡因為能得到醫療照顧，所以可以活得更久。"
  },
  {
    "word": "food chain",
    "pos": "n.phr.",
    "cn_def": "食物鏈",
    "en_def": "the order in which animals eat other plants and animals",
    "sentence": "Sharks are at the top of the ocean {{BLANK}}, so when they disappear, the whole sea can become unbalanced.",
    "cn": "鯊魚位於海洋食物鏈的頂端，所以當牠們消失時，整個海洋都可能失去平衡。"
  },
  {
    "word": "natural habitat",
    "pos": "n.phr.",
    "cn_def": "自然棲地",
    "en_def": "the place where an animal normally lives in nature",
    "sentence": "The zoo tries to make the gorillas' home look like their {{BLANK}}, so it has planted tall trees and thick bushes.",
    "cn": "動物園試著讓大猩猩的家看起來像牠們的自然棲地，所以種了高大的樹木和茂密的灌木。"
  },
  {
    "word": "habitat loss",
    "pos": "n.phr.",
    "cn_def": "棲地喪失",
    "en_def": "the destruction of the places where animals live",
    "sentence": "{{BLANK}} is the biggest danger for orangutans, because their forests are being replaced by palm oil farms.",
    "cn": "棲地喪失是紅毛猩猩面臨的最大危險，因為牠們的森林正被棕櫚油農園取代。"
  },
  {
    "word": "climate change",
    "pos": "n.phr.",
    "cn_def": "氣候變遷",
    "en_def": "long-term changes in the Earth's weather and temperature",
    "sentence": "{{BLANK}} is making the sea warmer, so many corals are dying and fish are moving to cooler waters.",
    "cn": "氣候變遷正使海水變暖，所以許多珊瑚正在死亡，魚群也正移往較涼的水域。"
  },
  {
    "word": "keystone species",
    "pos": "n.phr.",
    "cn_def": "關鍵物種",
    "en_def": "an animal that many other species depend on",
    "sentence": "The sea otter is a {{BLANK}}, because it eats sea urchins that would otherwise destroy the kelp forests.",
    "cn": "海獺是一種關鍵物種，因為牠會吃掉海膽，否則海膽會摧毀海藻森林。"
  },
  {
    "word": "human-wildlife conflict",
    "pos": "n.phr.",
    "cn_def": "人與野生動物的衝突",
    "en_def": "problems that happen when people and wild animals meet",
    "sentence": "{{BLANK}} is growing in Kenya, because more farms are being built on land where elephants used to walk.",
    "cn": "人與野生動物的衝突在肯亞日益加劇，因為越來越多農場蓋在大象過去行走的土地上。"
  },
  {
    "word": "die out",
    "pos": "v.phr.",
    "cn_def": "絕跡；滅絕",
    "en_def": "to disappear completely",
    "sentence": "The dodo {{BLANK}} in the 1600s, because sailors hunted it and the animals they brought ate its eggs.",
    "cn": "渡渡鳥在十七世紀絕跡了，因為水手們獵捕牠，而他們帶來的動物則吃掉了牠的蛋。"
  },
  {
    "word": "wipe out",
    "pos": "v.phr.",
    "cn_def": "徹底消滅",
    "en_def": "to destroy or kill something completely",
    "sentence": "A single disease could {{BLANK}} the whole population of Tasmanian devils, so scientists keep some healthy ones on a safe island.",
    "cn": "單一種疾病就可能徹底消滅所有的袋獾，所以科學家把一些健康的袋獾養在一座安全的島上。"
  },
  {
    "word": "pose a threat to",
    "pos": "v.phr.",
    "cn_def": "對……構成威脅",
    "en_def": "to be a danger to something",
    "sentence": "Stray cats {{BLANK}} the small birds on the island, because they hunt them day and night.",
    "cn": "流浪貓對島上的小鳥構成威脅，因為牠們日夜都在獵捕鳥類。"
  },
  {
    "word": "make a comeback",
    "pos": "v.phr.",
    "cn_def": "捲土重來；重新出現",
    "en_def": "to become common or successful again",
    "sentence": "The bald eagle has {{BLANK}} in the United States, because the harmful pesticide DDT was banned in 1972.",
    "cn": "白頭海鵰已經在美國重新出現，因為有害的農藥DDT在1972年被禁用了。"
  },
  {
    "word": "strike a balance",
    "pos": "v.phr.",
    "cn_def": "取得平衡",
    "en_def": "to find a fair middle point between two things",
    "sentence": "The town is trying to {{BLANK}} between tourism and nature, so it limits the number of boats near the dolphins.",
    "cn": "小鎮正努力在觀光與自然之間取得平衡，所以限制了靠近海豚的船隻數量。"
  },
  {
    "word": "under threat",
    "pos": "phr.",
    "cn_def": "受到威脅",
    "en_def": "in danger of being harmed or destroyed",
    "sentence": "Many wetlands in Asia are {{BLANK}} from new buildings, so migrating birds are losing their resting places.",
    "cn": "亞洲許多濕地正受到新建築的威脅，所以遷徙的鳥類正逐漸失去牠們的休息地。"
  },
  {
    "word": "at risk of",
    "pos": "phr.",
    "cn_def": "有……的危險",
    "en_def": "likely to suffer something bad",
    "sentence": "Without help, the Formosan leopard cat is {{BLANK}} disappearing from Taiwan, so people must drive slowly on mountain roads.",
    "cn": "如果沒有協助，石虎有從台灣消失的危險，所以人們在山區道路上必須慢慢開車。"
  },
  {
    "word": "take action",
    "pos": "v.phr.",
    "cn_def": "採取行動",
    "en_def": "to do something to solve a problem",
    "sentence": "If we do not {{BLANK}} now, our children may only see tigers in books, so everyone should help in small ways.",
    "cn": "如果我們現在不採取行動，我們的孩子可能只能在書中看到老虎，所以每個人都應該盡一點小小的心力。"
  },
  {
    "word": "a drop in the ocean",
    "pos": "n.phr.",
    "cn_def": "杯水車薪；滄海一粟",
    "en_def": "a very small amount compared with what is needed",
    "sentence": "One beach clean-up may seem like {{BLANK}}, but if everyone joins in, the difference can be huge.",
    "cn": "一次淨灘看起來也許只是杯水車薪，但如果每個人都參與，差別就會非常大。"
  },
  {
    "word": "turn a blind eye to",
    "pos": "v.phr.",
    "cn_def": "視而不見；睜一隻眼閉一隻眼",
    "en_def": "to pretend not to notice something wrong",
    "sentence": "Some officers {{BLANK}} the illegal pet shops, so the animal trade continues in the city.",
    "cn": "有些官員對非法寵物店視而不見，所以動物交易在城市裡持續進行。"
  },
  {
    "word": "the balance of nature",
    "pos": "n.phr.",
    "cn_def": "自然平衡；生態平衡",
    "en_def": "the natural state in which plants and animals live together steadily",
    "sentence": "When wolves were removed from the park, {{BLANK}} was broken, and the deer ate too many young trees.",
    "cn": "當狼被移出公園後，生態平衡就被破壞了，鹿吃掉了太多小樹。"
  },
  {
    "word": "dead as a dodo",
    "pos": "adj.phr.",
    "cn_def": "徹底消失的；過時的",
    "en_def": "completely gone or no longer existing",
    "sentence": "If we keep cutting down the rainforest, many amazing animals will soon be {{BLANK}}, and we can never bring them back.",
    "cn": "如果我們持續砍伐雨林，許多令人驚嘆的動物很快就會徹底消失，而且我們再也無法讓牠們回來。"
  }
];

const MCQS = [
  {
    "q": "The vaquita porpoise is _____, because only about ten of them are left in the sea near Mexico.",
    "options": [
      "on the brink of extinction",
      "pose a threat to",
      "in the wild",
      "habitat loss"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Pandas live for about twenty years _____, but they can live longer in zoos because they get medical care.",
    "options": [
      "make a comeback",
      "take action",
      "in the wild",
      "turn a blind eye to"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sharks are at the top of the ocean _____, so when they disappear, the whole sea can become unbalanced.",
    "options": [
      "keystone species",
      "food chain",
      "human-wildlife conflict",
      "natural habitat"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The zoo tries to make the gorillas' home look like their _____, so it has planted tall trees and thick bushes.",
    "options": [
      "food chain",
      "keystone species",
      "human-wildlife conflict",
      "natural habitat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "_____ is the biggest danger for orangutans, because their forests are being replaced by palm oil farms.",
    "options": [
      "climate change",
      "the balance of nature",
      "habitat loss",
      "a drop in the ocean"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "_____ is making the sea warmer, so many corals are dying and fish are moving to cooler waters.",
    "options": [
      "climate change",
      "a drop in the ocean",
      "habitat loss",
      "keystone species"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The sea otter is a _____, because it eats sea urchins that would otherwise destroy the kelp forests.",
    "options": [
      "climate change",
      "keystone species",
      "food chain",
      "natural habitat"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "_____ is growing in Kenya, because more farms are being built on land where elephants used to walk.",
    "options": [
      "keystone species",
      "the balance of nature",
      "a drop in the ocean",
      "human-wildlife conflict"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The dodo _____ in the 1600s, because sailors hunted it and the animals they brought ate its eggs.",
    "options": [
      "take action",
      "die out",
      "strike a balance",
      "make a comeback"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "A single disease could _____ the whole population of Tasmanian devils, so scientists keep some healthy ones on a safe island.",
    "options": [
      "strike a balance",
      "take action",
      "wipe out",
      "make a comeback"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Stray cats _____ the small birds on the island, because they hunt them day and night.",
    "options": [
      "pose a threat to",
      "turn a blind eye to",
      "take action",
      "die out"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The bald eagle has _____ in the United States, because the harmful pesticide DDT was banned in 1972.",
    "options": [
      "wipe out",
      "die out",
      "take action",
      "make a comeback"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The town is trying to _____ between tourism and nature, so it limits the number of boats near the dolphins.",
    "options": [
      "strike a balance",
      "pose a threat to",
      "die out",
      "take action"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Many wetlands in Asia are _____ from new buildings, so migrating birds are losing their resting places.",
    "options": [
      "keystone species",
      "under threat",
      "the balance of nature",
      "food chain"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Without help, the Formosan leopard cat is _____ disappearing from Taiwan, so people must drive slowly on mountain roads.",
    "options": [
      "under threat",
      "wipe out",
      "in the wild",
      "at risk of"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "If we do not _____ now, our children may only see tigers in books, so everyone should help in small ways.",
    "options": [
      "die out",
      "strike a balance",
      "take action",
      "make a comeback"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "One beach clean-up may seem like _____, but if everyone joins in, the difference can be huge.",
    "options": [
      "climate change",
      "keystone species",
      "food chain",
      "a drop in the ocean"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Some officers _____ the illegal pet shops, so the animal trade continues in the city.",
    "options": [
      "take action",
      "die out",
      "turn a blind eye to",
      "wipe out"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "When wolves were removed from the park, _____ was broken, and the deer ate too many young trees.",
    "options": [
      "the balance of nature",
      "keystone species",
      "habitat loss",
      "human-wildlife conflict"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "If we keep cutting down the rainforest, many amazing animals will soon be _____, and we can never bring them back.",
    "options": [
      "under threat",
      "dead as a dodo",
      "wipe out",
      "habitat loss"
    ],
    "answer": 1,
    "vocabIndex": 19
  }
];

const LOOKUP = {
  "on the brink of extinction": {
    "pos": "adj.phr.",
    "en_def": "very close to disappearing forever",
    "cn_def": "瀕臨滅絕"
  },
  "in the wild": {
    "pos": "phr.",
    "en_def": "living free in nature, not in a zoo",
    "cn_def": "在野外"
  },
  "food chain": {
    "pos": "n.phr.",
    "en_def": "the order in which animals eat other plants and animals",
    "cn_def": "食物鏈"
  },
  "natural habitat": {
    "pos": "n.phr.",
    "en_def": "the place where an animal normally lives in nature",
    "cn_def": "自然棲地"
  },
  "habitat loss": {
    "pos": "n.phr.",
    "en_def": "the destruction of the places where animals live",
    "cn_def": "棲地喪失"
  },
  "climate change": {
    "pos": "n.phr.",
    "en_def": "long-term changes in the Earth's weather and temperature",
    "cn_def": "氣候變遷"
  },
  "keystone species": {
    "pos": "n.phr.",
    "en_def": "an animal that many other species depend on",
    "cn_def": "關鍵物種"
  },
  "human-wildlife conflict": {
    "pos": "n.phr.",
    "en_def": "problems that happen when people and wild animals meet",
    "cn_def": "人與野生動物的衝突"
  },
  "die out": {
    "pos": "v.phr.",
    "en_def": "to disappear completely",
    "cn_def": "絕跡；滅絕"
  },
  "wipe out": {
    "pos": "v.phr.",
    "en_def": "to destroy or kill something completely",
    "cn_def": "徹底消滅"
  },
  "pose a threat to": {
    "pos": "v.phr.",
    "en_def": "to be a danger to something",
    "cn_def": "對……構成威脅"
  },
  "make a comeback": {
    "pos": "v.phr.",
    "en_def": "to become common or successful again",
    "cn_def": "捲土重來；重新出現"
  },
  "strike a balance": {
    "pos": "v.phr.",
    "en_def": "to find a fair middle point between two things",
    "cn_def": "取得平衡"
  },
  "under threat": {
    "pos": "phr.",
    "en_def": "in danger of being harmed or destroyed",
    "cn_def": "受到威脅"
  },
  "at risk of": {
    "pos": "phr.",
    "en_def": "likely to suffer something bad",
    "cn_def": "有……的危險"
  },
  "take action": {
    "pos": "v.phr.",
    "en_def": "to do something to solve a problem",
    "cn_def": "採取行動"
  },
  "a drop in the ocean": {
    "pos": "n.phr.",
    "en_def": "a very small amount compared with what is needed",
    "cn_def": "杯水車薪；滄海一粟"
  },
  "turn a blind eye to": {
    "pos": "v.phr.",
    "en_def": "to pretend not to notice something wrong",
    "cn_def": "視而不見；睜一隻眼閉一隻眼"
  },
  "the balance of nature": {
    "pos": "n.phr.",
    "en_def": "the natural state in which plants and animals live together steadily",
    "cn_def": "自然平衡；生態平衡"
  },
  "dead as a dodo": {
    "pos": "adj.phr.",
    "en_def": "completely gone or no longer existing",
    "cn_def": "徹底消失的；過時的"
  }
};

const EXTRA_GLOSSES = {};
