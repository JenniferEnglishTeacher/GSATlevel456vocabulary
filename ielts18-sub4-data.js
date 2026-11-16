// Topic 18 Subunit 4 Quiz Data: Forest Ecology & Management 森林生態與經營
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T18 S04 - Forest Ecology & Management 森林生態與經營",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "forestry",
    "pos": "n.",
    "cn_def": "林業",
    "en_def": "the science and work of looking after forests",
    "sentence": "My uncle has worked in {{BLANK}} for thirty years, and his job is to decide which trees can be cut and which must be protected.",
    "cn": "我叔叔從事林業三十年了,他的工作是決定哪些樹可以砍、哪些必須保護。"
  },
  {
    "word": "forester",
    "pos": "n.",
    "cn_def": "林務員",
    "en_def": "a person whose job is to look after a forest",
    "sentence": "The {{BLANK}} checks the trees every month, and he reports any signs of disease to the forestry office.",
    "cn": "林務員每個月檢查樹木,並把任何生病的跡象回報給林務局。"
  },
  {
    "word": "sawmill",
    "pos": "n.",
    "cn_def": "鋸木廠",
    "en_def": "a factory where logs are cut into boards",
    "sentence": "The logs are taken by truck to the {{BLANK}}, and there they are cut into boards for building houses.",
    "cn": "原木由卡車載到鋸木廠,在那裡被鋸成蓋房子用的木板。"
  },
  {
    "word": "lumber",
    "pos": "n.",
    "cn_def": "木材;木料",
    "en_def": "wood that has been cut into boards",
    "sentence": "The price of {{BLANK}} rose sharply last year, so many families decided to delay building their new homes.",
    "cn": "去年木材價格急劇上漲,所以許多家庭決定延後建造新家。"
  },
  {
    "word": "clear-cutting",
    "pos": "n.",
    "cn_def": "皆伐",
    "en_def": "cutting down all the trees in an area at once",
    "sentence": "{{BLANK}} is cheap for timber companies, but it leaves the hillside bare, so heavy rain can wash the soil away.",
    "cn": "皆伐對木材公司來說很便宜,但它讓山坡光禿禿的,所以大雨可能把土壤沖走。"
  },
  {
    "word": "selective logging",
    "pos": "n.phr.",
    "cn_def": "擇伐",
    "en_def": "cutting down only some chosen trees in a forest",
    "sentence": "With {{BLANK}}, workers remove only certain trees, so the forest can recover much more quickly.",
    "cn": "採用擇伐時,工人只移除特定的樹,所以森林能恢復得快得多。"
  },
  {
    "word": "afforestation",
    "pos": "n.",
    "cn_def": "造林",
    "en_def": "planting trees on land that had no forest before",
    "sentence": "The government started an {{BLANK}} project on the dry hills, and after ten years the area is green again.",
    "cn": "政府在乾旱的山丘上開始了一項造林計畫,十年後這個地區又變綠了。"
  },
  {
    "word": "tree planting",
    "pos": "n.phr.",
    "cn_def": "植樹",
    "en_def": "the activity of putting young trees into the ground",
    "sentence": "The company organised a {{BLANK}} day for its staff, and they planted five hundred trees along the river.",
    "cn": "公司為員工舉辦了一天的植樹活動,他們沿著河岸種了五百棵樹。"
  },
  {
    "word": "firebreak",
    "pos": "n.",
    "cn_def": "防火線",
    "en_def": "a strip of cleared land that stops a fire from spreading",
    "sentence": "The workers cut a wide {{BLANK}} through the forest, so the fire could not reach the village on the other side.",
    "cn": "工人在森林中開出一條寬闊的防火線,所以大火無法蔓延到另一邊的村莊。"
  },
  {
    "word": "controlled burn",
    "pos": "n.phr.",
    "cn_def": "計畫性燃燒;控制焚燒",
    "en_def": "a small fire started on purpose to remove dry plants",
    "sentence": "Firefighters carried out a {{BLANK}} in spring, because removing dry grass early helps prevent huge fires in summer.",
    "cn": "消防員在春天進行了計畫性燃燒,因為提早清除乾草有助於預防夏天發生大火。"
  },
  {
    "word": "forest fire",
    "pos": "n.phr.",
    "cn_def": "森林火災",
    "en_def": "a fire that burns a large area of forest",
    "sentence": "A careless camper caused a {{BLANK}} last summer, and it burned for five days before firefighters could stop it.",
    "cn": "去年夏天一名粗心的露營者引發了一場森林火災,燒了五天消防員才撲滅。"
  },
  {
    "word": "bushfire",
    "pos": "n.",
    "cn_def": "叢林大火",
    "en_def": "a large fire in wild land, especially in Australia",
    "sentence": "The {{BLANK}} spread quickly because of the strong wind, so thousands of people had to leave their homes.",
    "cn": "叢林大火因為強風而迅速蔓延,所以數千人必須離開家園。"
  },
  {
    "word": "ember",
    "pos": "n.",
    "cn_def": "餘燼;火星",
    "en_def": "a small piece of burning wood from a fire",
    "sentence": "The wind carried burning {{BLANK}} over the river, and they started new fires on the other side.",
    "cn": "風把燃燒的火星吹過河,在對岸引發了新的火災。"
  },
  {
    "word": "deadwood",
    "pos": "n.",
    "cn_def": "枯木",
    "en_def": "dead trees and branches in a forest",
    "sentence": "Some people think {{BLANK}} should be removed, but it actually provides homes for insects, birds and fungi.",
    "cn": "有些人認為枯木應該被清除,但它其實為昆蟲、鳥類和真菌提供了棲身之所。"
  },
  {
    "word": "decomposer",
    "pos": "n.",
    "cn_def": "分解者",
    "en_def": "a living thing that breaks down dead plants and animals",
    "sentence": "Fungi and worms are important {{BLANK}}, because they turn dead leaves into food for new plants.",
    "cn": "真菌和蚯蚓是重要的分解者,因為它們把枯葉轉化為新植物的養分。"
  },
  {
    "word": "humus",
    "pos": "n.",
    "cn_def": "腐植質",
    "en_def": "dark rich soil made from dead leaves and plants",
    "sentence": "The soil in the old forest is full of {{BLANK}}, so it is dark, soft and very good for growing plants.",
    "cn": "老森林的土壤富含腐植質,所以它又黑又軟,非常適合種植物。"
  },
  {
    "word": "nutrient cycle",
    "pos": "n.phr.",
    "cn_def": "養分循環",
    "en_def": "the way nutrients move between soil, plants and animals",
    "sentence": "When leaves fall and rot, the {{BLANK}} continues, and their minerals return to the soil for other plants to use.",
    "cn": "當葉子落下並腐爛時,養分循環便持續進行,其中的礦物質回到土壤供其他植物使用。"
  },
  {
    "word": "carbon sequestration",
    "pos": "n.phr.",
    "cn_def": "碳封存;固碳",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "sentence": "Forests play a big role in {{BLANK}}, so cutting them down makes climate change worse.",
    "cn": "森林在碳封存中扮演重要角色,所以砍伐森林會讓氣候變遷更嚴重。"
  },
  {
    "word": "mycorrhizal network",
    "pos": "n.phr.",
    "cn_def": "菌根網絡",
    "en_def": "underground fungi that connect the roots of trees",
    "sentence": "Scientists have found that trees share sugar through a {{BLANK}} under the ground, so older trees can help young ones.",
    "cn": "科學家發現樹木透過地下的菌根網絡分享糖分,所以老樹能幫助小樹。"
  },
  {
    "word": "canopy gap",
    "pos": "n.phr.",
    "cn_def": "林冠孔隙",
    "en_def": "an opening in the top layer of a forest",
    "sentence": "When an old tree falls, it leaves a {{BLANK}}, and sunlight reaches the ground so young trees can grow.",
    "cn": "當一棵老樹倒下時,會留下一個林冠孔隙,陽光照到地面,小樹便能生長。"
  },
  {
    "word": "ecological succession",
    "pos": "n.phr.",
    "cn_def": "生態演替",
    "en_def": "the slow change in plants and animals in a place over time",
    "sentence": "After the volcano erupted, scientists watched {{BLANK}} as grass, then bushes and finally trees covered the land.",
    "cn": "火山爆發後,科學家觀察到生態演替的過程,先是草,再來是灌木,最後是樹木覆蓋了這片土地。"
  },
  {
    "word": "pioneer species",
    "pos": "n.phr.",
    "cn_def": "先驅物種",
    "en_def": "the first plants to grow on empty or damaged land",
    "sentence": "Mosses and grasses are often {{BLANK}}, because they can grow on bare rock and slowly create soil.",
    "cn": "苔蘚和草通常是先驅物種,因為它們能在裸露的岩石上生長,並慢慢形成土壤。"
  },
  {
    "word": "tree cover",
    "pos": "n.phr.",
    "cn_def": "樹木覆蓋",
    "en_def": "the area of land covered by trees",
    "sentence": "Satellite photos show that {{BLANK}} in the region has dropped by twenty percent, so experts are worried about floods.",
    "cn": "衛星照片顯示該地區的樹木覆蓋下降了百分之二十,所以專家擔心會發生洪水。"
  },
  {
    "word": "agroforestry",
    "pos": "n.",
    "cn_def": "農林混作",
    "en_def": "growing trees and crops together on the same farm",
    "sentence": "Coffee farmers in the mountains use {{BLANK}}, so their coffee plants grow under tall trees that give shade and protect the soil.",
    "cn": "山區的咖啡農採用農林混作,所以他們的咖啡樹長在提供遮蔭、保護土壤的高大樹木下。"
  },
  {
    "word": "woodpecker",
    "pos": "n.",
    "cn_def": "啄木鳥",
    "en_def": "a bird that makes holes in trees with its beak",
    "sentence": "We heard a loud knocking sound in the forest, and our guide said it was a {{BLANK}} looking for insects in the bark.",
    "cn": "我們在森林裡聽到很大的敲擊聲,嚮導說那是一隻啄木鳥在樹皮裡找昆蟲。"
  },
  {
    "word": "squirrel",
    "pos": "n.",
    "cn_def": "松鼠",
    "en_def": "a small animal with a bushy tail that lives in trees",
    "sentence": "A {{BLANK}} ran down the tree and took the bread from my hand, so I was surprised by how brave it was.",
    "cn": "一隻松鼠從樹上跑下來拿走我手中的麵包,所以我很驚訝牠竟然這麼大膽。"
  },
  {
    "word": "owl",
    "pos": "n.",
    "cn_def": "貓頭鷹",
    "en_def": "a bird with large eyes that hunts at night",
    "sentence": "An {{BLANK}} lives in the old tree behind the temple, and you can hear it calling after dark.",
    "cn": "一隻貓頭鷹住在寺廟後面的老樹上,天黑後你可以聽到牠的叫聲。"
  },
  {
    "word": "deer",
    "pos": "n.",
    "cn_def": "鹿",
    "en_def": "a large animal with long legs; the males have antlers",
    "sentence": "Too many {{BLANK}} live in the forest now, so they eat most of the young trees before they can grow tall.",
    "cn": "現在森林裡住了太多鹿,所以牠們在小樹長高之前就把大部分小樹吃掉了。"
  },
  {
    "word": "bark beetle",
    "pos": "n.phr.",
    "cn_def": "小蠹蟲;樹皮甲蟲",
    "en_def": "a small insect that lives under tree bark and can kill trees",
    "sentence": "Warmer winters have helped the {{BLANK}} spread, and millions of pine trees in North America have died.",
    "cn": "較溫暖的冬天幫助了樹皮甲蟲的擴散,北美有數百萬棵松樹因此死亡。"
  },
  {
    "word": "firewood",
    "pos": "n.",
    "cn_def": "柴火;木柴",
    "en_def": "wood that is cut and burned for heat or cooking",
    "sentence": "In some poor villages, families still collect {{BLANK}} every day, so the nearby forests are slowly disappearing.",
    "cn": "在一些貧窮的村莊,家家戶戶仍每天撿拾柴火,所以附近的森林正在慢慢消失。"
  },
  {
    "word": "wood pulp",
    "pos": "n.phr.",
    "cn_def": "木漿",
    "en_def": "soft wet wood fibres used to make paper",
    "sentence": "Most paper is made from {{BLANK}}, so recycling paper means fewer trees need to be cut down.",
    "cn": "大多數紙是用木漿做的,所以回收紙張意味著需要砍伐的樹木變少。"
  },
  {
    "word": "resin",
    "pos": "n.",
    "cn_def": "樹脂",
    "en_def": "a sticky substance made by some trees",
    "sentence": "Pine trees produce sticky {{BLANK}} when they are cut, and this protects the wound from insects and disease.",
    "cn": "松樹被割傷時會分泌黏稠的樹脂,這能保護傷口免受昆蟲和疾病侵害。"
  },
  {
    "word": "cork",
    "pos": "n.",
    "cn_def": "軟木",
    "en_def": "light bark from a special oak tree",
    "sentence": "Wine bottles are often closed with {{BLANK}}, and the bark is taken from the trees without killing them.",
    "cn": "酒瓶常用軟木塞封口,而且樹皮是在不殺死樹的情況下取下的。"
  }
];

const MCQS = [
  {
    "q": "My uncle has worked in _____ for thirty years, and his job is to decide which trees can be cut and which must be protected.",
    "options": [
      "inaccuracy",
      "sap",
      "fluidity",
      "forestry"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The _____ checks the trees every month, and he reports any signs of disease to the forestry office.",
    "options": [
      "chloroplast",
      "forester",
      "shrub",
      "stabilisation"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The logs are taken by truck to the _____, and there they are cut into boards for building houses.",
    "options": [
      "colonisation",
      "maple",
      "sawmill",
      "trunk"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The price of _____ rose sharply last year, so many families decided to delay building their new homes.",
    "options": [
      "lumber",
      "botany",
      "quarantine",
      "mediator"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "_____ is cheap for timber companies, but it leaves the hillside bare, so heavy rain can wash the soil away.",
    "options": [
      "overexploitation",
      "clear-cutting",
      "ignition",
      "clearing"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "With _____, workers remove only certain trees, so the forest can recover much more quickly.",
    "options": [
      "palm tree",
      "water purification",
      "wading bird",
      "selective logging"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The government started an _____ project on the dry hills, and after ten years the area is green again.",
    "options": [
      "afforestation",
      "arborist",
      "aphid",
      "bog"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The company organised a _____ day for its staff, and they planted five hundred trees along the river.",
    "options": [
      "temperate forest",
      "seed dispersal",
      "tree planting",
      "ash dieback"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The workers cut a wide _____ through the forest, so the fire could not reach the village on the other side.",
    "options": [
      "firebreak",
      "microclimate",
      "foliage",
      "calibration"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Firefighters carried out a _____ in spring, because removing dry grass early helps prevent huge fires in summer.",
    "options": [
      "alien species",
      "wading bird",
      "old-growth forest",
      "controlled burn"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "A careless camper caused a _____ last summer, and it burned for five days before firefighters could stop it.",
    "options": [
      "acid rain",
      "forest fire",
      "temperate forest",
      "tree nursery"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The _____ spread quickly because of the strong wind, so thousands of people had to leave their homes.",
    "options": [
      "stomata",
      "endangerment",
      "bushfire",
      "homogeneity"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The wind carried burning _____ over the river, and they started new fires on the other side.",
    "options": [
      "chloroplast",
      "ember",
      "bulb",
      "chronology"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Some people think _____ should be removed, but it actually provides homes for insects, birds and fungi.",
    "options": [
      "deadwood",
      "intensification",
      "heterogeneity",
      "descriptor"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Fungi and worms are important _____, because they turn dead leaves into food for new plants.",
    "options": [
      "applicability",
      "sedimentation",
      "subdivision",
      "decomposer"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The soil in the old forest is full of _____, so it is dark, soft and very good for growing plants.",
    "options": [
      "elm",
      "regrowth",
      "humus",
      "acorn"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "When leaves fall and rot, the _____ continues, and their minerals return to the soil for other plants to use.",
    "options": [
      "nutrient cycle",
      "boreal forest",
      "ash dieback",
      "flood control"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Forests play a big role in _____, so cutting them down makes climate change worse.",
    "options": [
      "the root cause",
      "carbon sequestration",
      "bird hide",
      "Ramsar Convention"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Scientists have found that trees share sugar through a _____ under the ground, so older trees can help young ones.",
    "options": [
      "alien species",
      "cloud forest",
      "mycorrhizal network",
      "flowering plant"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "When an old tree falls, it leaves a _____, and sunlight reaches the ground so young trees can grow.",
    "options": [
      "root hair",
      "temperate forest",
      "leaf litter",
      "canopy gap"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "After the volcano erupted, scientists watched _____ as grass, then bushes and finally trees covered the land.",
    "options": [
      "acid rain",
      "flood control",
      "ecological succession",
      "national park"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Mosses and grasses are often _____, because they can grow on bare rock and slowly create soil.",
    "options": [
      "water level",
      "acid rain",
      "cloud forest",
      "pioneer species"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Satellite photos show that _____ in the region has dropped by twenty percent, so experts are worried about floods.",
    "options": [
      "tree cover",
      "water lily",
      "botanical garden",
      "acid rain"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Coffee farmers in the mountains use _____, so their coffee plants grow under tall trees that give shade and protect the soil.",
    "options": [
      "phototropism",
      "agroforestry",
      "cedar",
      "sapling"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "We heard a loud knocking sound in the forest, and our guide said it was a _____ looking for insects in the bark.",
    "options": [
      "flux",
      "taiga",
      "woodpecker",
      "bud"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "A _____ ran down the tree and took the bread from my hand, so I was surprised by how brave it was.",
    "options": [
      "squirrel",
      "alleviation",
      "hedge",
      "oak"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "An _____ lives in the old tree behind the temple, and you can hear it calling after dark.",
    "options": [
      "heron",
      "owl",
      "alleviation",
      "eucalyptus"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Too many _____ live in the forest now, so they eat most of the young trees before they can grow tall.",
    "options": [
      "concordance",
      "cross-pollination",
      "dormancy",
      "deer"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Warmer winters have helped the _____ spread, and millions of pine trees in North America have died.",
    "options": [
      "bark beetle",
      "a thorn in one's side",
      "alien species",
      "growth ring"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "In some poor villages, families still collect _____ every day, so the nearby forests are slowly disappearing.",
    "options": [
      "fungus",
      "firewood",
      "interdependence",
      "stamen"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Most paper is made from _____, so recycling paper means fewer trees need to be cut down.",
    "options": [
      "water lily",
      "cell wall",
      "wood pulp",
      "reed bed"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Pine trees produce sticky _____ when they are cut, and this protects the wound from insects and disease.",
    "options": [
      "cone",
      "inaccuracy",
      "lotus",
      "resin"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Wine bottles are often closed with _____, and the bark is taken from the trees without killing them.",
    "options": [
      "riverbank",
      "creek",
      "cork",
      "catchment"
    ],
    "answer": 2,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "forestry": {
    "pos": "n.",
    "en_def": "the science and work of looking after forests",
    "cn_def": "林業"
  },
  "forester": {
    "pos": "n.",
    "en_def": "a person whose job is to look after a forest",
    "cn_def": "林務員"
  },
  "sawmill": {
    "pos": "n.",
    "en_def": "a factory where logs are cut into boards",
    "cn_def": "鋸木廠"
  },
  "lumber": {
    "pos": "n.",
    "en_def": "wood that has been cut into boards",
    "cn_def": "木材;木料"
  },
  "clear-cutting": {
    "pos": "n.",
    "en_def": "cutting down all the trees in an area at once",
    "cn_def": "皆伐"
  },
  "selective logging": {
    "pos": "n.phr.",
    "en_def": "cutting down only some chosen trees in a forest",
    "cn_def": "擇伐"
  },
  "afforestation": {
    "pos": "n.",
    "en_def": "planting trees on land that had no forest before",
    "cn_def": "造林"
  },
  "tree planting": {
    "pos": "n.phr.",
    "en_def": "the activity of putting young trees into the ground",
    "cn_def": "植樹"
  },
  "firebreak": {
    "pos": "n.",
    "en_def": "a strip of cleared land that stops a fire from spreading",
    "cn_def": "防火線"
  },
  "controlled burn": {
    "pos": "n.phr.",
    "en_def": "a small fire started on purpose to remove dry plants",
    "cn_def": "計畫性燃燒;控制焚燒"
  },
  "forest fire": {
    "pos": "n.phr.",
    "en_def": "a fire that burns a large area of forest",
    "cn_def": "森林火災"
  },
  "bushfire": {
    "pos": "n.",
    "en_def": "a large fire in wild land, especially in Australia",
    "cn_def": "叢林大火"
  },
  "ember": {
    "pos": "n.",
    "en_def": "a small piece of burning wood from a fire",
    "cn_def": "餘燼;火星"
  },
  "deadwood": {
    "pos": "n.",
    "en_def": "dead trees and branches in a forest",
    "cn_def": "枯木"
  },
  "decomposer": {
    "pos": "n.",
    "en_def": "a living thing that breaks down dead plants and animals",
    "cn_def": "分解者"
  },
  "humus": {
    "pos": "n.",
    "en_def": "dark rich soil made from dead leaves and plants",
    "cn_def": "腐植質"
  },
  "nutrient cycle": {
    "pos": "n.phr.",
    "en_def": "the way nutrients move between soil, plants and animals",
    "cn_def": "養分循環"
  },
  "carbon sequestration": {
    "pos": "n.phr.",
    "en_def": "storing carbon from the air in plants, soil or rocks",
    "cn_def": "碳封存;固碳"
  },
  "mycorrhizal network": {
    "pos": "n.phr.",
    "en_def": "underground fungi that connect the roots of trees",
    "cn_def": "菌根網絡"
  },
  "canopy gap": {
    "pos": "n.phr.",
    "en_def": "an opening in the top layer of a forest",
    "cn_def": "林冠孔隙"
  },
  "ecological succession": {
    "pos": "n.phr.",
    "en_def": "the slow change in plants and animals in a place over time",
    "cn_def": "生態演替"
  },
  "pioneer species": {
    "pos": "n.phr.",
    "en_def": "the first plants to grow on empty or damaged land",
    "cn_def": "先驅物種"
  },
  "tree cover": {
    "pos": "n.phr.",
    "en_def": "the area of land covered by trees",
    "cn_def": "樹木覆蓋"
  },
  "agroforestry": {
    "pos": "n.",
    "en_def": "growing trees and crops together on the same farm",
    "cn_def": "農林混作"
  },
  "woodpecker": {
    "pos": "n.",
    "en_def": "a bird that makes holes in trees with its beak",
    "cn_def": "啄木鳥"
  },
  "squirrel": {
    "pos": "n.",
    "en_def": "a small animal with a bushy tail that lives in trees",
    "cn_def": "松鼠"
  },
  "owl": {
    "pos": "n.",
    "en_def": "a bird with large eyes that hunts at night",
    "cn_def": "貓頭鷹"
  },
  "deer": {
    "pos": "n.",
    "en_def": "a large animal with long legs; the males have antlers",
    "cn_def": "鹿"
  },
  "bark beetle": {
    "pos": "n.phr.",
    "en_def": "a small insect that lives under tree bark and can kill trees",
    "cn_def": "小蠹蟲;樹皮甲蟲"
  },
  "firewood": {
    "pos": "n.",
    "en_def": "wood that is cut and burned for heat or cooking",
    "cn_def": "柴火;木柴"
  },
  "wood pulp": {
    "pos": "n.phr.",
    "en_def": "soft wet wood fibres used to make paper",
    "cn_def": "木漿"
  },
  "resin": {
    "pos": "n.",
    "en_def": "a sticky substance made by some trees",
    "cn_def": "樹脂"
  },
  "cork": {
    "pos": "n.",
    "en_def": "light bark from a special oak tree",
    "cn_def": "軟木"
  },
  "inaccuracy": {
    "pos": "n.",
    "en_def": "a mistake; not being exact",
    "cn_def": "不準確;錯誤"
  },
  "sap": {
    "pos": "n.",
    "en_def": "the liquid that carries food inside a plant",
    "cn_def": "樹液"
  },
  "fluidity": {
    "pos": "n.",
    "en_def": "the ability to change easily",
    "cn_def": "流動性;易變性"
  },
  "chloroplast": {
    "pos": "n.",
    "en_def": "a tiny part of a plant cell where photosynthesis happens",
    "cn_def": "葉綠體"
  },
  "shrub": {
    "pos": "n.",
    "en_def": "a small bush with several woody stems",
    "cn_def": "灌木"
  },
  "stabilisation": {
    "pos": "n.",
    "en_def": "making something steady and firm",
    "cn_def": "穩定化;穩固"
  },
  "colonisation": {
    "pos": "n.",
    "en_def": "when plants or animals move into and spread in a new area",
    "cn_def": "拓殖;移殖"
  },
  "maple": {
    "pos": "n.",
    "en_def": "a tree whose leaves turn red in autumn",
    "cn_def": "楓樹"
  },
  "trunk": {
    "pos": "n.",
    "en_def": "the thick main stem of a tree",
    "cn_def": "樹幹"
  },
  "botany": {
    "pos": "n.",
    "en_def": "the scientific study of plants",
    "cn_def": "植物學"
  },
  "quarantine": {
    "pos": "n.",
    "en_def": "a period when plants or animals are kept apart to stop disease",
    "cn_def": "檢疫;隔離"
  },
  "mediator": {
    "pos": "n.",
    "en_def": "a person who helps two sides reach an agreement",
    "cn_def": "調解人"
  },
  "overexploitation": {
    "pos": "n.",
    "en_def": "using a resource too much so that it runs out",
    "cn_def": "過度開發;過度利用"
  },
  "ignition": {
    "pos": "n.",
    "en_def": "the start of burning",
    "cn_def": "點燃;起火"
  },
  "clearing": {
    "pos": "n.",
    "en_def": "an open area in a forest with no trees",
    "cn_def": "林間空地"
  },
  "palm tree": {
    "pos": "n.phr.",
    "en_def": "a tall tree with large leaves at the top and no branches",
    "cn_def": "棕櫚樹"
  },
  "water purification": {
    "pos": "n.phr.",
    "en_def": "the process of making water clean",
    "cn_def": "水質淨化"
  },
  "wading bird": {
    "pos": "n.phr.",
    "en_def": "a bird with long legs that walks in shallow water",
    "cn_def": "涉禽"
  },
  "arborist": {
    "pos": "n.",
    "en_def": "an expert who cares for trees",
    "cn_def": "樹藝師"
  },
  "aphid": {
    "pos": "n.",
    "en_def": "a very small insect that sucks juice from plants",
    "cn_def": "蚜蟲"
  },
  "bog": {
    "pos": "n.",
    "en_def": "soft wet ground made of dead plants",
    "cn_def": "泥炭沼"
  },
  "temperate forest": {
    "pos": "n.phr.",
    "en_def": "a forest in a region with warm summers and cool winters",
    "cn_def": "溫帶森林"
  },
  "seed dispersal": {
    "pos": "n.phr.",
    "en_def": "the ways seeds are spread away from the parent plant",
    "cn_def": "種子傳播"
  },
  "ash dieback": {
    "pos": "n.phr.",
    "en_def": "a fungal disease that kills ash trees",
    "cn_def": "白蠟樹枯梢病"
  },
  "microclimate": {
    "pos": "n.",
    "en_def": "the weather conditions in a small area",
    "cn_def": "微氣候"
  },
  "foliage": {
    "pos": "n.",
    "en_def": "all the leaves of a plant or tree",
    "cn_def": "枝葉;葉子(總稱)"
  },
  "calibration": {
    "pos": "n.",
    "en_def": "adjusting an instrument so it measures correctly",
    "cn_def": "校準"
  },
  "alien species": {
    "pos": "n.phr.",
    "en_def": "a plant or animal brought from another place",
    "cn_def": "外來種"
  },
  "old-growth forest": {
    "pos": "n.phr.",
    "en_def": "a very old forest that has never been cut down",
    "cn_def": "原始林;老齡林"
  },
  "acid rain": {
    "pos": "n.phr.",
    "en_def": "rain made harmful by pollution in the air",
    "cn_def": "酸雨"
  },
  "tree nursery": {
    "pos": "n.phr.",
    "en_def": "a place where young trees are grown before planting",
    "cn_def": "苗圃"
  },
  "stomata": {
    "pos": "n.",
    "en_def": "tiny holes on a leaf that let gases in and out",
    "cn_def": "氣孔"
  },
  "endangerment": {
    "pos": "n.",
    "en_def": "putting something in danger",
    "cn_def": "危害;瀕危狀態"
  },
  "homogeneity": {
    "pos": "n.",
    "en_def": "the quality of being all the same",
    "cn_def": "同質性;均一性"
  },
  "bulb": {
    "pos": "n.",
    "en_def": "a round underground part from which some plants grow",
    "cn_def": "球莖"
  },
  "chronology": {
    "pos": "n.",
    "en_def": "the order in which events happened",
    "cn_def": "年表;時間順序"
  },
  "intensification": {
    "pos": "n.",
    "en_def": "becoming stronger or more extreme",
    "cn_def": "加劇;強化"
  },
  "heterogeneity": {
    "pos": "n.",
    "en_def": "the quality of being made of many different parts",
    "cn_def": "異質性;多樣性"
  },
  "descriptor": {
    "pos": "n.",
    "en_def": "a word or feature used to describe something",
    "cn_def": "描述詞;描述指標"
  },
  "applicability": {
    "pos": "n.",
    "en_def": "how useful or suitable something is in a situation",
    "cn_def": "適用性"
  },
  "sedimentation": {
    "pos": "n.",
    "en_def": "the process of sand and mud settling at the bottom of water",
    "cn_def": "沉積作用"
  },
  "subdivision": {
    "pos": "n.",
    "en_def": "dividing something into smaller parts",
    "cn_def": "再劃分;細分"
  },
  "elm": {
    "pos": "n.",
    "en_def": "a tall tree once common in Europe",
    "cn_def": "榆樹"
  },
  "regrowth": {
    "pos": "n.",
    "en_def": "new growth after something has been damaged or cut",
    "cn_def": "再生;重新生長"
  },
  "acorn": {
    "pos": "n.",
    "en_def": "the nut of an oak tree",
    "cn_def": "橡實"
  },
  "boreal forest": {
    "pos": "n.phr.",
    "en_def": "the huge cold forest in the far north of the world",
    "cn_def": "北方針葉林"
  },
  "flood control": {
    "pos": "n.phr.",
    "en_def": "ways of preventing or reducing floods",
    "cn_def": "防洪"
  },
  "the root cause": {
    "pos": "n.phr.",
    "en_def": "the main reason behind a problem",
    "cn_def": "根本原因"
  },
  "bird hide": {
    "pos": "n.phr.",
    "en_def": "a small hut where people watch birds without being seen",
    "cn_def": "賞鳥屋"
  },
  "ramsar convention": {
    "pos": "n.phr.",
    "en_def": "an international agreement to protect important wetlands",
    "cn_def": "拉姆薩公約(國際濕地公約)"
  },
  "cloud forest": {
    "pos": "n.phr.",
    "en_def": "a wet mountain forest often covered in cloud",
    "cn_def": "雲霧林"
  },
  "flowering plant": {
    "pos": "n.phr.",
    "en_def": "a plant that produces flowers and seeds",
    "cn_def": "開花植物"
  },
  "root hair": {
    "pos": "n.phr.",
    "en_def": "very thin hairs on a root that take in water",
    "cn_def": "根毛"
  },
  "leaf litter": {
    "pos": "n.phr.",
    "en_def": "dead leaves lying on the ground",
    "cn_def": "落葉層"
  },
  "national park": {
    "pos": "n.phr.",
    "en_def": "a large area of land protected by the government",
    "cn_def": "國家公園"
  },
  "water level": {
    "pos": "n.phr.",
    "en_def": "the height of the surface of water",
    "cn_def": "水位"
  },
  "water lily": {
    "pos": "n.phr.",
    "en_def": "a plant with large flat leaves that float on water",
    "cn_def": "睡蓮"
  },
  "botanical garden": {
    "pos": "n.phr.",
    "en_def": "a park where many kinds of plants are grown for study",
    "cn_def": "植物園"
  },
  "phototropism": {
    "pos": "n.",
    "en_def": "when a plant grows towards light",
    "cn_def": "向光性"
  },
  "cedar": {
    "pos": "n.",
    "en_def": "a large evergreen tree with sweet-smelling wood",
    "cn_def": "雪松;檜木"
  },
  "sapling": {
    "pos": "n.",
    "en_def": "a young tree",
    "cn_def": "小樹;幼樹"
  },
  "flux": {
    "pos": "n.",
    "en_def": "continuous change",
    "cn_def": "不斷變化;流動"
  },
  "taiga": {
    "pos": "n.",
    "en_def": "another name for the cold northern forest",
    "cn_def": "針葉林帶;泰加林"
  },
  "bud": {
    "pos": "n.",
    "en_def": "a small part on a plant that will open into a leaf or flower",
    "cn_def": "芽;花苞"
  },
  "alleviation": {
    "pos": "n.",
    "en_def": "making a problem or pain less severe",
    "cn_def": "緩解;減輕"
  },
  "hedge": {
    "pos": "n.",
    "en_def": "a row of bushes growing close together",
    "cn_def": "樹籬"
  },
  "oak": {
    "pos": "n.",
    "en_def": "a large tree with hard wood that produces acorns",
    "cn_def": "橡樹"
  },
  "heron": {
    "pos": "n.",
    "en_def": "a tall grey bird with long legs that catches fish",
    "cn_def": "鷺;蒼鷺"
  },
  "eucalyptus": {
    "pos": "n.",
    "en_def": "a tall Australian tree with oily, strong-smelling leaves",
    "cn_def": "尤加利樹"
  },
  "concordance": {
    "pos": "n.",
    "en_def": "agreement between things",
    "cn_def": "一致;吻合"
  },
  "cross-pollination": {
    "pos": "n.",
    "en_def": "when pollen moves from one plant to another plant",
    "cn_def": "異花授粉"
  },
  "dormancy": {
    "pos": "n.",
    "en_def": "a period when a seed or plant rests and does not grow",
    "cn_def": "休眠"
  },
  "a thorn in one's side": {
    "pos": "n.phr.",
    "en_def": "a person or thing that keeps causing trouble",
    "cn_def": "眼中釘;心頭之患"
  },
  "growth ring": {
    "pos": "n.phr.",
    "en_def": "a circle inside a tree trunk that shows one year of growth",
    "cn_def": "年輪"
  },
  "fungus": {
    "pos": "n.",
    "en_def": "a living thing such as a mushroom or mould",
    "cn_def": "真菌"
  },
  "interdependence": {
    "pos": "n.",
    "en_def": "when things depend on each other",
    "cn_def": "相互依存"
  },
  "stamen": {
    "pos": "n.",
    "en_def": "the male part of a flower that produces pollen",
    "cn_def": "雄蕊"
  },
  "cell wall": {
    "pos": "n.phr.",
    "en_def": "the strong outer layer around a plant cell",
    "cn_def": "細胞壁"
  },
  "reed bed": {
    "pos": "n.phr.",
    "en_def": "an area of water full of reeds",
    "cn_def": "蘆葦床;蘆葦叢"
  },
  "cone": {
    "pos": "n.",
    "en_def": "the hard brown fruit of a pine tree that holds seeds",
    "cn_def": "毬果"
  },
  "lotus": {
    "pos": "n.",
    "en_def": "a water plant with large pink or white flowers",
    "cn_def": "蓮花"
  },
  "riverbank": {
    "pos": "n.",
    "en_def": "the land along the side of a river",
    "cn_def": "河岸"
  },
  "creek": {
    "pos": "n.",
    "en_def": "a small river or stream",
    "cn_def": "溪流;小河"
  },
  "catchment": {
    "pos": "n.",
    "en_def": "the area from which rain flows into a river or lake",
    "cn_def": "集水區"
  }
};

const EXTRA_GLOSSES = {};
