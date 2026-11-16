// Topic 3 Subunit 14 Quiz Data: Academic Words 學術單字 7 (invoke – invariably)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T03 S14 - Academic Words 學術單字 7 (invoke – invariably)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "invoke",
    "pos": "v.",
    "cn_def": "援引;行使",
    "en_def": "to use a law or rule to support an action",
    "sentence": "The president {{BLANK}} emergency powers after the flood, so the army could help with rescue work at once.",
    "cn": "水災後總統行使緊急權力,讓軍隊能立刻協助救援工作。"
  },
  {
    "word": "mediate",
    "pos": "v.",
    "cn_def": "調解;斡旋",
    "en_def": "to help two sides reach an agreement",
    "sentence": "A local professor agreed to {{BLANK}} between the fishermen and the energy company, and both sides finally signed a deal.",
    "cn": "一位當地教授同意在漁民和能源公司之間調解,雙方最終簽署了協議。"
  },
  {
    "word": "regime",
    "pos": "n.",
    "cn_def": "體制;制度",
    "en_def": "a system of rules or government",
    "sentence": "The new tax {{BLANK}} rewards companies that pollute less, so many factories are buying cleaner machines.",
    "cn": "新的稅收制度獎勵污染較少的公司,所以許多工廠正在購買更乾淨的機器。"
  },
  {
    "word": "successor",
    "pos": "n.",
    "cn_def": "繼任者;後繼者",
    "en_def": "a person or thing that comes after another",
    "sentence": "The old agreement ended in 2020, and its {{BLANK}} sets stronger goals for every country.",
    "cn": "舊協議在2020年結束,而它的後繼協議為每個國家訂定了更強的目標。"
  },
  {
    "word": "unify",
    "pos": "v.",
    "cn_def": "統一;使團結",
    "en_def": "to bring people or things together",
    "sentence": "The flood helped to {{BLANK}} the community, because neighbours who had never spoken started to help each other.",
    "cn": "這場水災幫助團結了社區,因為從未交談過的鄰居開始互相幫忙。"
  },
  {
    "word": "sphere",
    "pos": "n.",
    "cn_def": "領域;範圍",
    "en_def": "an area of activity or interest",
    "sentence": "Climate change affects every {{BLANK}} of life, so it is discussed in science, business and even art classes.",
    "cn": "氣候變遷影響生活的每個領域,所以它在科學、商業,甚至藝術課中都會被討論。"
  },
  {
    "word": "qualitative",
    "pos": "adj.",
    "cn_def": "質性的;定性的",
    "en_def": "about quality rather than numbers",
    "sentence": "The team collected {{BLANK}} data by talking to farmers, because numbers alone could not show how they felt.",
    "cn": "團隊透過與農夫交談收集了質性資料,因為光靠數字無法呈現他們的感受。"
  },
  {
    "word": "thesis",
    "pos": "n.",
    "cn_def": "論文",
    "en_def": "a long piece of writing for a university degree",
    "sentence": "My cousin wrote her {{BLANK}} on heat in Taipei, and the city government used some of her ideas.",
    "cn": "我表姐寫了一篇關於台北高溫的論文,市政府採用了她的一些想法。"
  },
  {
    "word": "equate",
    "pos": "v.",
    "cn_def": "把…等同於",
    "en_def": "to think that two things are the same",
    "sentence": "Many people {{BLANK}} a warm winter with good weather, but it can actually harm crops and insects.",
    "cn": "許多人把暖冬等同於好天氣,但它其實可能傷害作物和昆蟲。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度",
    "en_def": "the way you think or feel about something",
    "sentence": "Public {{BLANK}} towards electric cars has changed, and now many young people say they will never buy a petrol car.",
    "cn": "大眾對電動車的態度已經改變,現在許多年輕人說他們永遠不會買汽油車。"
  },
  {
    "word": "availability",
    "pos": "n.",
    "cn_def": "可取得性;供應",
    "en_def": "how easy something is to get or use",
    "sentence": "The {{BLANK}} of clean water is falling in some regions, so people walk further every day to find it.",
    "cn": "某些地區乾淨水源的供應正在減少,所以人們每天要走更遠才能取得。"
  },
  {
    "word": "comprehend",
    "pos": "v.",
    "cn_def": "理解",
    "en_def": "to understand something fully",
    "sentence": "It is hard to {{BLANK}} how fast the ice is melting, so the scientist showed us photos taken ten years apart.",
    "cn": "很難理解冰融化的速度有多快,所以這位科學家給我們看了相隔十年拍攝的照片。"
  },
  {
    "word": "deem",
    "pos": "v.",
    "cn_def": "認為;視為",
    "en_def": "to consider or judge something in a certain way",
    "sentence": "The bridge was {{BLANK}} unsafe after the earthquake, so cars had to use a road ten kilometres away.",
    "cn": "地震後這座橋被認為不安全,所以汽車必須改走十公里外的道路。"
  },
  {
    "word": "discern",
    "pos": "v.",
    "cn_def": "察覺;辨別",
    "en_def": "to notice or understand something that is not obvious",
    "sentence": "It is difficult to {{BLANK}} a clear trend from one year of data, so researchers look at records over many decades.",
    "cn": "很難從一年的數據中察覺出明確的趨勢,所以研究人員會檢視數十年的紀錄。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成;達成",
    "en_def": "to succeed in doing something",
    "sentence": "The village {{BLANK}} its goal of using only solar power, and other towns are now asking how they did it.",
    "cn": "這個村莊達成了只使用太陽能的目標,其他城鎮現在都在詢問他們是怎麼做到的。"
  },
  {
    "word": "abate",
    "pos": "v.",
    "cn_def": "減弱;緩和",
    "en_def": "to become less strong",
    "sentence": "The rescue boats waited until the storm began to {{BLANK}}, and then they went out to find the missing fishermen.",
    "cn": "救援船等到暴風雨開始減弱,接著才出海搜尋失蹤的漁民。"
  },
  {
    "word": "hasten",
    "pos": "v.",
    "cn_def": "加速;促進",
    "en_def": "to make something happen sooner",
    "sentence": "The heat {{BLANK}} the melting of the glacier, so the river flooded villages downstream in July.",
    "cn": "高溫加速了冰河的融化,所以河水在七月淹沒了下游的村莊。"
  },
  {
    "word": "augment",
    "pos": "v.",
    "cn_def": "增加;擴大",
    "en_def": "to increase the size or value of something",
    "sentence": "The city will {{BLANK}} its water supply with rainwater tanks, because the reservoir alone is no longer enough.",
    "cn": "市政府將以雨水儲水槽來擴大供水量,因為光靠水庫已經不夠了。"
  },
  {
    "word": "erratic",
    "pos": "adj.",
    "cn_def": "不穩定的;無規律的",
    "en_def": "changing often in a way that cannot be predicted",
    "sentence": "The weather has become very {{BLANK}} in recent years, so farmers are not sure when to plant their seeds.",
    "cn": "近年來天氣變得非常不穩定,所以農夫不確定何時該播種。"
  },
  {
    "word": "volatile",
    "pos": "adj.",
    "cn_def": "多變的;不穩定的",
    "en_def": "likely to change suddenly",
    "sentence": "Oil prices are very {{BLANK}}, so countries that use more renewable energy are better protected from sudden changes.",
    "cn": "油價非常多變,所以使用較多可再生能源的國家較不受突然變化的影響。"
  },
  {
    "word": "intermittent",
    "pos": "adj.",
    "cn_def": "間歇性的",
    "en_def": "stopping and starting again",
    "sentence": "Wind and solar power are {{BLANK}}, so we need batteries to store energy for times without sun or wind.",
    "cn": "風力和太陽能是間歇性的,所以我們需要電池在沒有陽光或風的時候儲存能源。"
  },
  {
    "word": "sporadic",
    "pos": "adj.",
    "cn_def": "零星的;偶發的",
    "en_def": "happening only sometimes",
    "sentence": "There was only {{BLANK}} rain during the spring, so the reservoirs were nearly empty by June.",
    "cn": "春天只下了零星的雨,所以到六月時水庫幾乎見底。"
  },
  {
    "word": "prolonged",
    "pos": "adj.",
    "cn_def": "長期的;持久的",
    "en_def": "lasting for a long time",
    "sentence": "A {{BLANK}} drought dried up the rivers, and many farmers had to sell their animals.",
    "cn": "一場長期乾旱讓河川乾涸,許多農夫不得不賣掉他們的牲畜。"
  },
  {
    "word": "recurrent",
    "pos": "adj.",
    "cn_def": "反覆發生的",
    "en_def": "happening again and again",
    "sentence": "{{BLANK}} flooding has damaged the old market many times, so the shop owners finally agreed to move.",
    "cn": "反覆發生的淹水多次損壞了老市場,所以店家們最終同意搬遷。"
  },
  {
    "word": "invariably",
    "pos": "adv.",
    "cn_def": "總是;一律",
    "en_def": "always; every time",
    "sentence": "Heavy rain {{BLANK}} causes traffic jams in the city, so many people now work from home on stormy days.",
    "cn": "大雨總是造成市區交通堵塞,所以許多人現在在暴風雨的日子都在家工作。"
  }
];

const MCQS = [
  {
    "q": "The president _____ emergency powers after the flood, so the army could help with rescue work at once.",
    "options": [
      "invoke",
      "prevail",
      "impede",
      "ratify"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "A local professor agreed to _____ between the fishermen and the energy company, and both sides finally signed a deal.",
    "options": [
      "manifest",
      "mediate",
      "undertake",
      "embody"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new tax _____ rewards companies that pollute less, so many factories are buying cleaner machines.",
    "options": [
      "metric",
      "Celsius",
      "regime",
      "delta"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The old agreement ended in 2020, and its _____ sets stronger goals for every country.",
    "options": [
      "clarity",
      "humidity",
      "frequency",
      "successor"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The flood helped to _____ the community, because neighbours who had never spoken started to help each other.",
    "options": [
      "magnify",
      "unify",
      "impede",
      "reiterate"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Climate change affects every _____ of life, so it is discussed in science, business and even art classes.",
    "options": [
      "sphere",
      "thermometer",
      "aerosol",
      "malaria"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The team collected _____ data by talking to farmers, because numbers alone could not show how they felt.",
    "options": [
      "low-lying",
      "feasible",
      "viable",
      "qualitative"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "My cousin wrote her _____ on heat in Taipei, and the city government used some of her ideas.",
    "options": [
      "clarity",
      "variability",
      "thesis",
      "adaptation"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Many people _____ a warm winter with good weather, but it can actually harm crops and insects.",
    "options": [
      "equate",
      "curb",
      "prioritise",
      "reconcile"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Public _____ towards electric cars has changed, and now many young people say they will never buy a petrol car.",
    "options": [
      "property",
      "migrant",
      "attitude",
      "fertiliser"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The _____ of clean water is falling in some regions, so people walk further every day to find it.",
    "options": [
      "landfill",
      "threshold",
      "tornado",
      "availability"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "It is hard to _____ how fast the ice is melting, so the scientist showed us photos taken ten years apart.",
    "options": [
      "jeopardise",
      "comprehend",
      "irrigate",
      "refute"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The bridge was _____ unsafe after the earthquake, so cars had to use a road ten kilometres away.",
    "options": [
      "calculate",
      "mobilise",
      "articulate",
      "deem"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "It is difficult to _____ a clear trend from one year of data, so researchers look at records over many decades.",
    "options": [
      "invest",
      "discern",
      "ratify",
      "flood"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The village _____ its goal of using only solar power, and other towns are now asking how they did it.",
    "options": [
      "deploy",
      "devastate",
      "accomplish",
      "proliferate"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The rescue boats waited until the storm began to _____, and then they went out to find the missing fishermen.",
    "options": [
      "abate",
      "flood",
      "exemplify",
      "enact"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The heat _____ the melting of the glacier, so the river flooded villages downstream in July.",
    "options": [
      "inundate",
      "hasten",
      "absorb",
      "manifest"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The city will _____ its water supply with rainwater tanks, because the reservoir alone is no longer enough.",
    "options": [
      "augment",
      "necessitate",
      "undertake",
      "jeopardise"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The weather has become very _____ in recent years, so farmers are not sure when to plant their seeds.",
    "options": [
      "heat-related",
      "imminent",
      "low-lying",
      "erratic"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Oil prices are very _____, so countries that use more renewable energy are better protected from sudden changes.",
    "options": [
      "arid",
      "aggregate",
      "volatile",
      "industrialised"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Wind and solar power are _____, so we need batteries to store energy for times without sun or wind.",
    "options": [
      "intermittent",
      "meticulous",
      "ambitious",
      "incremental"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "There was only _____ rain during the spring, so the reservoirs were nearly empty by June.",
    "options": [
      "orthodox",
      "viable",
      "sporadic",
      "unprecedented"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "A _____ drought dried up the rivers, and many farmers had to sell their animals.",
    "options": [
      "coastal",
      "median",
      "tidal",
      "prolonged"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "_____ flooding has damaged the old market many times, so the shop owners finally agreed to move.",
    "options": [
      "equitable",
      "recurrent",
      "torrential",
      "disproportionate"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Heavy rain _____ causes traffic jams in the city, so many people now work from home on stormy days.",
    "options": [
      "consistently",
      "substantially",
      "invariably",
      "respectively"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "invoke": {
    "pos": "v.",
    "en_def": "to use a law or rule to support an action",
    "cn_def": "援引;行使"
  },
  "mediate": {
    "pos": "v.",
    "en_def": "to help two sides reach an agreement",
    "cn_def": "調解;斡旋"
  },
  "regime": {
    "pos": "n.",
    "en_def": "a system of rules or government",
    "cn_def": "體制;制度"
  },
  "successor": {
    "pos": "n.",
    "en_def": "a person or thing that comes after another",
    "cn_def": "繼任者;後繼者"
  },
  "unify": {
    "pos": "v.",
    "en_def": "to bring people or things together",
    "cn_def": "統一;使團結"
  },
  "sphere": {
    "pos": "n.",
    "en_def": "an area of activity or interest",
    "cn_def": "領域;範圍"
  },
  "qualitative": {
    "pos": "adj.",
    "en_def": "about quality rather than numbers",
    "cn_def": "質性的;定性的"
  },
  "thesis": {
    "pos": "n.",
    "en_def": "a long piece of writing for a university degree",
    "cn_def": "論文"
  },
  "equate": {
    "pos": "v.",
    "en_def": "to think that two things are the same",
    "cn_def": "把…等同於"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think or feel about something",
    "cn_def": "態度"
  },
  "availability": {
    "pos": "n.",
    "en_def": "how easy something is to get or use",
    "cn_def": "可取得性;供應"
  },
  "comprehend": {
    "pos": "v.",
    "en_def": "to understand something fully",
    "cn_def": "理解"
  },
  "deem": {
    "pos": "v.",
    "en_def": "to consider or judge something in a certain way",
    "cn_def": "認為;視為"
  },
  "discern": {
    "pos": "v.",
    "en_def": "to notice or understand something that is not obvious",
    "cn_def": "察覺;辨別"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to succeed in doing something",
    "cn_def": "完成;達成"
  },
  "abate": {
    "pos": "v.",
    "en_def": "to become less strong",
    "cn_def": "減弱;緩和"
  },
  "hasten": {
    "pos": "v.",
    "en_def": "to make something happen sooner",
    "cn_def": "加速;促進"
  },
  "augment": {
    "pos": "v.",
    "en_def": "to increase the size or value of something",
    "cn_def": "增加;擴大"
  },
  "erratic": {
    "pos": "adj.",
    "en_def": "changing often in a way that cannot be predicted",
    "cn_def": "不穩定的;無規律的"
  },
  "volatile": {
    "pos": "adj.",
    "en_def": "likely to change suddenly",
    "cn_def": "多變的;不穩定的"
  },
  "intermittent": {
    "pos": "adj.",
    "en_def": "stopping and starting again",
    "cn_def": "間歇性的"
  },
  "sporadic": {
    "pos": "adj.",
    "en_def": "happening only sometimes",
    "cn_def": "零星的;偶發的"
  },
  "prolonged": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "長期的;持久的"
  },
  "recurrent": {
    "pos": "adj.",
    "en_def": "happening again and again",
    "cn_def": "反覆發生的"
  },
  "invariably": {
    "pos": "adv.",
    "en_def": "always; every time",
    "cn_def": "總是;一律"
  },
  "prevail": {
    "pos": "v.",
    "en_def": "to be common or most powerful at a certain time",
    "cn_def": "盛行;占上風"
  },
  "impede": {
    "pos": "v.",
    "en_def": "to slow down or block progress",
    "cn_def": "妨礙;阻止"
  },
  "ratify": {
    "pos": "v.",
    "en_def": "to make an agreement official by signing or voting",
    "cn_def": "正式批准"
  },
  "manifest": {
    "pos": "v.",
    "en_def": "to show something clearly",
    "cn_def": "顯現;表現"
  },
  "undertake": {
    "pos": "v.",
    "en_def": "to start doing a job or task",
    "cn_def": "承擔;進行"
  },
  "embody": {
    "pos": "v.",
    "en_def": "to be a clear example of an idea",
    "cn_def": "體現;代表"
  },
  "metric": {
    "pos": "n.",
    "en_def": "a way of measuring something",
    "cn_def": "指標;衡量標準"
  },
  "celsius": {
    "pos": "n.",
    "en_def": "a scale for measuring temperature where water freezes at 0",
    "cn_def": "攝氏"
  },
  "delta": {
    "pos": "n.",
    "en_def": "flat land where a river divides before entering the sea",
    "cn_def": "三角洲"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清楚;明確"
  },
  "humidity": {
    "pos": "n.",
    "en_def": "the amount of water in the air",
    "cn_def": "濕度"
  },
  "frequency": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "頻率"
  },
  "magnify": {
    "pos": "v.",
    "en_def": "to make something seem or become bigger",
    "cn_def": "擴大;放大"
  },
  "reiterate": {
    "pos": "v.",
    "en_def": "to say something again for emphasis",
    "cn_def": "重申"
  },
  "thermometer": {
    "pos": "n.",
    "en_def": "a tool that measures temperature",
    "cn_def": "溫度計"
  },
  "aerosol": {
    "pos": "n.",
    "en_def": "tiny drops or bits floating in the air",
    "cn_def": "氣溶膠;懸浮微粒"
  },
  "malaria": {
    "pos": "n.",
    "en_def": "a serious disease spread by mosquitoes",
    "cn_def": "瘧疾"
  },
  "low-lying": {
    "pos": "adj.",
    "en_def": "close to sea level",
    "cn_def": "地勢低窪的"
  },
  "feasible": {
    "pos": "adj.",
    "en_def": "possible and practical to do",
    "cn_def": "可行的"
  },
  "viable": {
    "pos": "adj.",
    "en_def": "able to work successfully",
    "cn_def": "可行的;能成功的"
  },
  "variability": {
    "pos": "n.",
    "en_def": "the quality of changing often",
    "cn_def": "變化性;變異性"
  },
  "adaptation": {
    "pos": "n.",
    "en_def": "a change made to deal with new conditions",
    "cn_def": "調適;適應"
  },
  "curb": {
    "pos": "v.",
    "en_def": "to control or limit something bad",
    "cn_def": "抑制;控制"
  },
  "prioritise": {
    "pos": "v.",
    "en_def": "to treat something as more important than other things",
    "cn_def": "優先處理"
  },
  "reconcile": {
    "pos": "v.",
    "en_def": "to find a way for two different ideas to exist together",
    "cn_def": "調和;使一致"
  },
  "property": {
    "pos": "n.",
    "en_def": "buildings and land that someone owns",
    "cn_def": "房地產;財產"
  },
  "migrant": {
    "pos": "n.",
    "en_def": "a person who moves to another place to find work or safety",
    "cn_def": "移民;移工"
  },
  "fertiliser": {
    "pos": "n.",
    "en_def": "a substance added to soil to help plants grow",
    "cn_def": "肥料"
  },
  "landfill": {
    "pos": "n.",
    "en_def": "a place where rubbish is buried in the ground",
    "cn_def": "垃圾掩埋場"
  },
  "threshold": {
    "pos": "n.",
    "en_def": "the level at which something starts to happen",
    "cn_def": "門檻;臨界點"
  },
  "tornado": {
    "pos": "n.",
    "en_def": "a narrow, spinning column of wind that destroys things",
    "cn_def": "龍捲風"
  },
  "jeopardise": {
    "pos": "v.",
    "en_def": "to put something in danger",
    "cn_def": "危及;使陷入危險"
  },
  "irrigate": {
    "pos": "v.",
    "en_def": "to supply water to land through pipes or channels",
    "cn_def": "灌溉"
  },
  "refute": {
    "pos": "v.",
    "en_def": "to prove that something is wrong",
    "cn_def": "駁斥;反駁"
  },
  "calculate": {
    "pos": "v.",
    "en_def": "to find an answer using numbers",
    "cn_def": "計算"
  },
  "mobilise": {
    "pos": "v.",
    "en_def": "to organise people or resources for action",
    "cn_def": "動員"
  },
  "articulate": {
    "pos": "v.",
    "en_def": "to express ideas clearly",
    "cn_def": "清楚表達"
  },
  "invest": {
    "pos": "v.",
    "en_def": "to put money into something to get a benefit later",
    "cn_def": "投資"
  },
  "flood": {
    "pos": "v.",
    "en_def": "to cover an area with water",
    "cn_def": "淹沒;淹水"
  },
  "deploy": {
    "pos": "v.",
    "en_def": "to put something into use or action",
    "cn_def": "部署;運用"
  },
  "devastate": {
    "pos": "v.",
    "en_def": "to destroy or damage something very badly",
    "cn_def": "摧毀;使荒廢"
  },
  "proliferate": {
    "pos": "v.",
    "en_def": "to increase quickly in number",
    "cn_def": "激增;迅速增加"
  },
  "exemplify": {
    "pos": "v.",
    "en_def": "to be a typical example of something",
    "cn_def": "作為…的典範"
  },
  "enact": {
    "pos": "v.",
    "en_def": "to make a law",
    "cn_def": "制定(法律);頒布"
  },
  "inundate": {
    "pos": "v.",
    "en_def": "to flood an area with water",
    "cn_def": "淹沒;泛濫"
  },
  "absorb": {
    "pos": "v.",
    "en_def": "to take in something such as liquid, heat or gas",
    "cn_def": "吸收"
  },
  "necessitate": {
    "pos": "v.",
    "en_def": "to make something necessary",
    "cn_def": "使成為必要"
  },
  "heat-related": {
    "pos": "adj.",
    "en_def": "caused by very hot weather",
    "cn_def": "與高溫相關的"
  },
  "imminent": {
    "pos": "adj.",
    "en_def": "going to happen very soon",
    "cn_def": "即將發生的;迫在眉睫的"
  },
  "arid": {
    "pos": "adj.",
    "en_def": "very dry with little rain",
    "cn_def": "乾旱的;乾燥的"
  },
  "aggregate": {
    "pos": "adj.",
    "en_def": "formed by adding together several amounts",
    "cn_def": "總計的;合計的"
  },
  "industrialised": {
    "pos": "adj.",
    "en_def": "having many factories and industries",
    "cn_def": "工業化的"
  },
  "meticulous": {
    "pos": "adj.",
    "en_def": "very careful about details",
    "cn_def": "一絲不苟的;細心的"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "needing a lot of effort to achieve",
    "cn_def": "雄心勃勃的;遠大的"
  },
  "incremental": {
    "pos": "adj.",
    "en_def": "happening in small steps",
    "cn_def": "逐步的;漸進的"
  },
  "orthodox": {
    "pos": "adj.",
    "en_def": "generally accepted as correct",
    "cn_def": "正統的;傳統的"
  },
  "unprecedented": {
    "pos": "adj.",
    "en_def": "never happened before",
    "cn_def": "前所未有的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the sea coast",
    "cn_def": "沿海的"
  },
  "median": {
    "pos": "adj.",
    "en_def": "in the middle of a set of numbers",
    "cn_def": "中位數的"
  },
  "tidal": {
    "pos": "adj.",
    "en_def": "connected with the rise and fall of the sea",
    "cn_def": "潮汐的"
  },
  "equitable": {
    "pos": "adj.",
    "en_def": "fair to everyone",
    "cn_def": "公平的;公正的"
  },
  "torrential": {
    "pos": "adj.",
    "en_def": "used to describe very heavy rain",
    "cn_def": "(雨)傾盆的;猛烈的"
  },
  "disproportionate": {
    "pos": "adj.",
    "en_def": "too large or too small compared with something else",
    "cn_def": "不成比例的"
  },
  "consistently": {
    "pos": "adv.",
    "en_def": "always in the same way",
    "cn_def": "一貫地;始終"
  },
  "substantially": {
    "pos": "adv.",
    "en_def": "by a large amount",
    "cn_def": "大幅地;相當多地"
  },
  "respectively": {
    "pos": "adv.",
    "en_def": "in the same order as the things just mentioned",
    "cn_def": "分別地"
  }
};

const EXTRA_GLOSSES = {};
