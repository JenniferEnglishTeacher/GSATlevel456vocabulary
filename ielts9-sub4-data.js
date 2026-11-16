// Topic 9 Subunit 4 Quiz Data: Transport: Railways, Canals & Cars 交通運輸:鐵路、運河與汽車
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T09 S04 - Transport: Railways, Canals & Cars 交通運輸:鐵路、運河與汽車",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "railway",
    "pos": "n.",
    "cn_def": "鐵路",
    "en_def": "a system of tracks and trains for moving people and goods",
    "sentence": "The first public {{BLANK}} opened in 1825, and soon people could travel between cities in hours, not days.",
    "cn": "第一條公共鐵路在1825年開通,而很快人們就能在幾小時內而非幾天內往返城市。"
  },
  {
    "word": "locomotive",
    "pos": "n.",
    "cn_def": "火車頭;機車",
    "en_def": "the engine that pulls a train",
    "sentence": "The old steam {{BLANK}} is kept in the museum, and visitors can climb into the driver's cab.",
    "cn": "那輛老蒸汽火車頭保存在博物館裡,而參觀者可以爬進司機室。"
  },
  {
    "word": "steam train",
    "pos": "n.",
    "cn_def": "蒸汽火車",
    "en_def": "a train pulled by an engine that uses steam",
    "sentence": "We rode an old {{BLANK}} through the mountains, and the whistle echoed loudly across the valley.",
    "cn": "我們搭乘一列老蒸汽火車穿越山區,而汽笛聲在山谷間響亮地迴盪。"
  },
  {
    "word": "railway track",
    "pos": "n.",
    "cn_def": "鐵軌",
    "en_def": "the metal rails that trains run on",
    "sentence": "Never walk along the {{BLANK}}, because trains move faster than you think and cannot stop quickly.",
    "cn": "絕對不要沿著鐵軌走,因為火車行駛得比你想的快,而且無法很快停下來。"
  },
  {
    "word": "rail",
    "pos": "n.",
    "cn_def": "鐵路(運輸)",
    "en_def": "a train system; travel by train",
    "sentence": "Travelling by {{BLANK}} is better for the environment, so our school took the train to the science museum.",
    "cn": "搭鐵路旅行對環境比較好,所以我們學校搭火車去科學博物館。"
  },
  {
    "word": "carriage",
    "pos": "n.",
    "cn_def": "(火車)車廂",
    "en_def": "one of the separate parts of a train where people sit",
    "sentence": "The front {{BLANK}} was very crowded, so we walked to the back of the train and found empty seats.",
    "cn": "前面的車廂非常擠,所以我們走到火車後段並找到了空位。"
  },
  {
    "word": "wagon",
    "pos": "n.",
    "cn_def": "貨車車廂",
    "en_def": "a part of a train for carrying goods",
    "sentence": "Each {{BLANK}} was filled with coal, and the long train moved slowly towards the port.",
    "cn": "每一節貨車車廂都裝滿了煤,而那列長長的火車緩緩駛向港口。"
  },
  {
    "word": "station",
    "pos": "n.",
    "cn_def": "車站",
    "en_def": "a place where trains stop for passengers",
    "sentence": "We arrived at the {{BLANK}} ten minutes early, but the train was delayed because of heavy snow.",
    "cn": "我們提早十分鐘到達車站,但火車因為大雪而誤點了。"
  },
  {
    "word": "level crossing",
    "pos": "n.",
    "cn_def": "平交道",
    "en_def": "a place where a road crosses a railway line",
    "sentence": "The barriers came down at the {{BLANK}}, so all the cars waited while the train rushed past.",
    "cn": "平交道的柵欄放下來了,所以所有車子都在等待,而火車呼嘯而過。"
  },
  {
    "word": "passenger",
    "pos": "n.",
    "cn_def": "乘客",
    "en_def": "a person travelling in a vehicle who is not driving",
    "sentence": "Every {{BLANK}} must wear a seat belt on this bus, and the driver will not leave until everyone does.",
    "cn": "這輛公車上每位乘客都必須繫安全帶,而司機在所有人繫好前不會開車。"
  },
  {
    "word": "canal",
    "pos": "n.",
    "cn_def": "運河",
    "en_def": "a man-made river for boats",
    "sentence": "Before railways, factories sent goods along the {{BLANK}}, because boats could carry heavy loads cheaply.",
    "cn": "在鐵路出現之前,工廠沿著運河運送貨物,因為船隻能便宜地載運重物。"
  },
  {
    "word": "lock",
    "pos": "n.",
    "cn_def": "(運河)水閘;船閘",
    "en_def": "a section of a canal with gates to raise or lower boats",
    "sentence": "Our boat entered the {{BLANK}}, and the water slowly rose until we could continue up the hill.",
    "cn": "我們的船駛進船閘,而水慢慢上升,直到我們能繼續往山上航行。"
  },
  {
    "word": "barge",
    "pos": "n.",
    "cn_def": "駁船",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "sentence": "A horse pulled the heavy {{BLANK}} along the canal, and a boy walked beside it with a stick.",
    "cn": "一匹馬沿著運河拉著沉重的駁船,而一個男孩拿著棍子走在牠旁邊。"
  },
  {
    "word": "towpath",
    "pos": "n.",
    "cn_def": "(運河邊的)縴道",
    "en_def": "a path beside a canal where horses once pulled boats",
    "sentence": "Today people cycle along the old {{BLANK}}, but in the past it was used by horses pulling boats.",
    "cn": "現在人們沿著舊縴道騎腳踏車,但在過去它是給拉船的馬使用的。"
  },
  {
    "word": "steamship",
    "pos": "n.",
    "cn_def": "蒸汽船;輪船",
    "en_def": "a large ship driven by steam power",
    "sentence": "The {{BLANK}} crossed the Atlantic in two weeks, so letters and goods arrived much sooner than before.",
    "cn": "那艘蒸汽船兩週就橫越大西洋,所以信件和貨物比以前早得多送達。"
  },
  {
    "word": "paddle steamer",
    "pos": "n.",
    "cn_def": "明輪汽船",
    "en_def": "a steamboat moved by large turning wheels on its sides",
    "sentence": "We took a trip on an old {{BLANK}}, and the big wheels splashed loudly as we moved down the river.",
    "cn": "我們搭乘一艘老明輪汽船遊覽,而當我們順河而下時,大輪子嘩啦嘩啦地拍打著水。"
  },
  {
    "word": "horse-drawn",
    "pos": "adj.",
    "cn_def": "馬拉的",
    "en_def": "pulled by a horse",
    "sentence": "{{BLANK}} carts were common in big cities, but they made the streets dirty, noisy and very slow.",
    "cn": "馬拉的貨車在大城市很常見,但它們讓街道變得又髒、又吵、又非常緩慢。"
  },
  {
    "word": "automobile",
    "pos": "n.",
    "cn_def": "汽車",
    "en_def": "a car",
    "sentence": "Karl Benz built the first practical {{BLANK}} in 1885, and within fifty years cars had changed city life.",
    "cn": "卡爾·賓士在1885年製造出第一輛實用的汽車,而在五十年內汽車就改變了城市生活。"
  },
  {
    "word": "motor car",
    "pos": "n.",
    "cn_def": "汽車(舊稱)",
    "en_def": "an old-fashioned word for a car",
    "sentence": "My great-grandmother remembered the first {{BLANK}} in her village, and everyone ran outside to look at it.",
    "cn": "我曾祖母記得她村裡的第一輛汽車,而大家都跑出去看它。"
  },
  {
    "word": "steam car",
    "pos": "n.",
    "cn_def": "蒸汽汽車",
    "en_def": "a car that uses a steam engine",
    "sentence": "The {{BLANK}} was quiet and powerful, but it took too long to start on cold mornings.",
    "cn": "蒸汽汽車安靜又有力,但在寒冷的早晨要花太久時間才能啟動。"
  },
  {
    "word": "bicycle",
    "pos": "n.",
    "cn_def": "腳踏車",
    "en_def": "a vehicle with two wheels that you ride by pushing pedals",
    "sentence": "The {{BLANK}} gave working people cheap freedom, so they could visit the countryside on weekends.",
    "cn": "腳踏車給了勞工們便宜的自由,讓他們週末可以去鄉間遊玩。"
  },
  {
    "word": "tyre",
    "pos": "n.",
    "cn_def": "輪胎",
    "en_def": "a rubber ring filled with air around a wheel",
    "sentence": "I got a flat {{BLANK}} on the way to school, so I had to push my bike for the last two kilometres.",
    "cn": "我在上學途中輪胎爆了,所以最後兩公里我只好牽著腳踏車走。"
  },
  {
    "word": "chassis",
    "pos": "n.",
    "cn_def": "底盤;車架",
    "en_def": "the frame of a vehicle that holds the engine and body",
    "sentence": "The factory first builds the {{BLANK}}, and then workers add the engine, wheels and seats.",
    "cn": "工廠先打造底盤,然後工人們加上引擎、輪子和座椅。"
  },
  {
    "word": "steering wheel",
    "pos": "n.",
    "cn_def": "方向盤",
    "en_def": "the wheel a driver turns to control a car's direction",
    "sentence": "Early cars used a stick instead of a {{BLANK}}, so turning corners was quite difficult.",
    "cn": "早期汽車用一根桿子而不是方向盤,所以轉彎相當困難。"
  },
  {
    "word": "brake",
    "pos": "n.",
    "cn_def": "煞車",
    "en_def": "a part that makes a vehicle slow down or stop",
    "sentence": "The driver hit the {{BLANK}} when a dog ran into the road, and luckily nobody was hurt.",
    "cn": "一隻狗衝到馬路上時司機踩了煞車,而幸好沒有人受傷。"
  },
  {
    "word": "engine driver",
    "pos": "n.",
    "cn_def": "火車司機",
    "en_def": "a person who drives a train",
    "sentence": "The {{BLANK}} blew the whistle twice, and the children on the platform waved goodbye.",
    "cn": "火車司機鳴了兩次汽笛,而月台上的孩子們揮手道別。"
  },
  {
    "word": "conductor",
    "pos": "n.",
    "cn_def": "車掌;列車長",
    "en_def": "a person who checks tickets on a train or bus",
    "sentence": "The {{BLANK}} checked our tickets carefully, but he let my little brother travel for free.",
    "cn": "車掌仔細檢查我們的車票,但他讓我弟弟免費搭乘。"
  },
  {
    "word": "viaduct",
    "pos": "n.",
    "cn_def": "高架橋",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "sentence": "The train crossed a tall stone {{BLANK}}, and we could see the river far below our window.",
    "cn": "火車越過一座高高的石造高架橋,而我們從窗戶可以看到遠在下方的河流。"
  },
  {
    "word": "commuter",
    "pos": "n.",
    "cn_def": "通勤者",
    "en_def": "a person who travels some distance to work every day",
    "sentence": "My father is a daily {{BLANK}} who takes the 7:15 train into the city, and he reads the news on his phone during the trip.",
    "cn": "我爸爸是每天搭7點15分火車進城的通勤者,而他在車程中用手機看新聞。"
  }
];

const MCQS = [
  {
    "q": "The first public _____ opened in 1825, and soon people could travel between cities in hours, not days.",
    "options": [
      "mortality",
      "railway",
      "trade",
      "aid"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The old steam _____ is kept in the museum, and visitors can climb into the driver's cab.",
    "options": [
      "locomotive",
      "flywheel",
      "trademark",
      "capitalist"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "We rode an old _____ through the mountains, and the whistle echoed loudly across the valley.",
    "options": [
      "child labour",
      "mine shaft",
      "mill owner",
      "steam train"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Never walk along the _____, because trains move faster than you think and cannot stop quickly.",
    "options": [
      "consumer goods",
      "light bulb",
      "railway track",
      "interchangeable parts"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Travelling by _____ is better for the environment, so our school took the train to the science museum.",
    "options": [
      "grievance",
      "revolution",
      "rebellion",
      "rail"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The front _____ was very crowded, so we walked to the back of the train and found empty seats.",
    "options": [
      "fraction",
      "energy",
      "carriage",
      "weaver"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Each _____ was filled with coal, and the long train moved slowly towards the port.",
    "options": [
      "wagon",
      "discovery",
      "contraption",
      "girder"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "We arrived at the _____ ten minutes early, but the train was delayed because of heavy snow.",
    "options": [
      "composition",
      "station",
      "cylinder",
      "pickaxe"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The barriers came down at the _____, so all the cars waited while the train rushed past.",
    "options": [
      "level crossing",
      "the brainchild of",
      "population growth",
      "coal mine"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Every _____ must wear a seat belt on this bus, and the driver will not leave until everyone does.",
    "options": [
      "mishap",
      "passenger",
      "supply",
      "downside"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Before railways, factories sent goods along the _____, because boats could carry heavy loads cheaply.",
    "options": [
      "trailblazer",
      "magnetism",
      "canal",
      "tenement"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Our boat entered the _____, and the water slowly rose until we could continue up the hill.",
    "options": [
      "rate",
      "sweatshop",
      "watershed",
      "lock"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "A horse pulled the heavy _____ along the canal, and a boy walked beside it with a stick.",
    "options": [
      "barge",
      "furnace",
      "grievance",
      "horsepower"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Today people cycle along the old _____, but in the past it was used by horses pulling boats.",
    "options": [
      "workhouse",
      "towpath",
      "girder",
      "graphite"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The _____ crossed the Atlantic in two weeks, so letters and goods arrived much sooner than before.",
    "options": [
      "fame",
      "steelworks",
      "steamship",
      "vaccine"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "We took a trip on an old _____, and the big wheels splashed loudly as we moved down the river.",
    "options": [
      "safety lamp",
      "tennis racket",
      "printing press",
      "paddle steamer"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "_____ carts were common in big cities, but they made the streets dirty, noisy and very slow.",
    "options": [
      "horse-drawn",
      "classic",
      "striking",
      "contagious"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Karl Benz built the first practical _____ in 1885, and within fifty years cars had changed city life.",
    "options": [
      "litigation",
      "automobile",
      "fraud",
      "commerce"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "My great-grandmother remembered the first _____ in her village, and everyone ran outside to look at it.",
    "options": [
      "carbon fibre",
      "power loom",
      "raw material",
      "motor car"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The _____ was quiet and powerful, but it took too long to start on cold mornings.",
    "options": [
      "Morse code",
      "cast iron",
      "steam car",
      "mill owner"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ gave working people cheap freedom, so they could visit the countryside on weekends.",
    "options": [
      "bicycle",
      "estate",
      "invention",
      "journal"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "I got a flat _____ on the way to school, so I had to push my bike for the last two kilometres.",
    "options": [
      "virtue",
      "tyre",
      "simplicity",
      "signal"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The factory first builds the _____, and then workers add the engine, wheels and seats.",
    "options": [
      "rivalry",
      "imperialism",
      "chassis",
      "pickaxe"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Early cars used a stick instead of a _____, so turning corners was quite difficult.",
    "options": [
      "light bulb",
      "the daily grind",
      "mill owner",
      "steering wheel"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The driver hit the _____ when a dog ran into the road, and luckily nobody was hurt.",
    "options": [
      "gramophone",
      "figure",
      "brake",
      "uptake"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The _____ blew the whistle twice, and the children on the platform waved goodbye.",
    "options": [
      "finished goods",
      "spinning jenny",
      "interchangeable parts",
      "engine driver"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The _____ checked our tickets carefully, but he let my little brother travel for free.",
    "options": [
      "receiver",
      "conductor",
      "vaccine",
      "typewriter"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The train crossed a tall stone _____, and we could see the river far below our window.",
    "options": [
      "viaduct",
      "manufacturer",
      "assistance",
      "luxury"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "My father is a daily _____ who takes the 7:15 train into the city, and he reads the news on his phone during the trip.",
    "options": [
      "tunnel",
      "velocity",
      "commuter",
      "chimney"
    ],
    "answer": 2,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "railway": {
    "pos": "n.",
    "en_def": "a system of tracks and trains for moving people and goods",
    "cn_def": "鐵路"
  },
  "locomotive": {
    "pos": "n.",
    "en_def": "the engine that pulls a train",
    "cn_def": "火車頭;機車"
  },
  "steam train": {
    "pos": "n.",
    "en_def": "a train pulled by an engine that uses steam",
    "cn_def": "蒸汽火車"
  },
  "railway track": {
    "pos": "n.",
    "en_def": "the metal rails that trains run on",
    "cn_def": "鐵軌"
  },
  "rail": {
    "pos": "n.",
    "en_def": "a train system; travel by train",
    "cn_def": "鐵路(運輸)"
  },
  "carriage": {
    "pos": "n.",
    "en_def": "one of the separate parts of a train where people sit",
    "cn_def": "(火車)車廂"
  },
  "wagon": {
    "pos": "n.",
    "en_def": "a part of a train for carrying goods",
    "cn_def": "貨車車廂"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains stop for passengers",
    "cn_def": "車站"
  },
  "level crossing": {
    "pos": "n.",
    "en_def": "a place where a road crosses a railway line",
    "cn_def": "平交道"
  },
  "passenger": {
    "pos": "n.",
    "en_def": "a person travelling in a vehicle who is not driving",
    "cn_def": "乘客"
  },
  "canal": {
    "pos": "n.",
    "en_def": "a man-made river for boats",
    "cn_def": "運河"
  },
  "lock": {
    "pos": "n.",
    "en_def": "a section of a canal with gates to raise or lower boats",
    "cn_def": "(運河)水閘;船閘"
  },
  "barge": {
    "pos": "n.",
    "en_def": "a long flat boat for carrying goods on rivers or canals",
    "cn_def": "駁船"
  },
  "towpath": {
    "pos": "n.",
    "en_def": "a path beside a canal where horses once pulled boats",
    "cn_def": "(運河邊的)縴道"
  },
  "steamship": {
    "pos": "n.",
    "en_def": "a large ship driven by steam power",
    "cn_def": "蒸汽船;輪船"
  },
  "paddle steamer": {
    "pos": "n.",
    "en_def": "a steamboat moved by large turning wheels on its sides",
    "cn_def": "明輪汽船"
  },
  "horse-drawn": {
    "pos": "adj.",
    "en_def": "pulled by a horse",
    "cn_def": "馬拉的"
  },
  "automobile": {
    "pos": "n.",
    "en_def": "a car",
    "cn_def": "汽車"
  },
  "motor car": {
    "pos": "n.",
    "en_def": "an old-fashioned word for a car",
    "cn_def": "汽車(舊稱)"
  },
  "steam car": {
    "pos": "n.",
    "en_def": "a car that uses a steam engine",
    "cn_def": "蒸汽汽車"
  },
  "bicycle": {
    "pos": "n.",
    "en_def": "a vehicle with two wheels that you ride by pushing pedals",
    "cn_def": "腳踏車"
  },
  "tyre": {
    "pos": "n.",
    "en_def": "a rubber ring filled with air around a wheel",
    "cn_def": "輪胎"
  },
  "chassis": {
    "pos": "n.",
    "en_def": "the frame of a vehicle that holds the engine and body",
    "cn_def": "底盤;車架"
  },
  "steering wheel": {
    "pos": "n.",
    "en_def": "the wheel a driver turns to control a car's direction",
    "cn_def": "方向盤"
  },
  "brake": {
    "pos": "n.",
    "en_def": "a part that makes a vehicle slow down or stop",
    "cn_def": "煞車"
  },
  "engine driver": {
    "pos": "n.",
    "en_def": "a person who drives a train",
    "cn_def": "火車司機"
  },
  "conductor": {
    "pos": "n.",
    "en_def": "a person who checks tickets on a train or bus",
    "cn_def": "車掌;列車長"
  },
  "viaduct": {
    "pos": "n.",
    "en_def": "a long high bridge that carries a road or railway across a valley",
    "cn_def": "高架橋"
  },
  "commuter": {
    "pos": "n.",
    "en_def": "a person who travels some distance to work every day",
    "cn_def": "通勤者"
  },
  "mortality": {
    "pos": "n.",
    "en_def": "the number of deaths in a group",
    "cn_def": "死亡率"
  },
  "trade": {
    "pos": "n.",
    "en_def": "the buying and selling of goods",
    "cn_def": "貿易"
  },
  "aid": {
    "pos": "n.",
    "en_def": "help, especially money or food given to people in need",
    "cn_def": "援助;救助"
  },
  "flywheel": {
    "pos": "n.",
    "en_def": "a heavy wheel that keeps a machine turning smoothly",
    "cn_def": "飛輪"
  },
  "trademark": {
    "pos": "n.",
    "en_def": "a name or sign that belongs to one company",
    "cn_def": "商標"
  },
  "capitalist": {
    "pos": "n.",
    "en_def": "a person who uses money to own businesses and make profit",
    "cn_def": "資本家"
  },
  "child labour": {
    "pos": "n.",
    "en_def": "the use of children as workers",
    "cn_def": "童工"
  },
  "mine shaft": {
    "pos": "n.",
    "en_def": "a deep hole going down into a mine",
    "cn_def": "礦井"
  },
  "mill owner": {
    "pos": "n.",
    "en_def": "a person who owns a factory or mill",
    "cn_def": "工廠主;磨坊主"
  },
  "consumer goods": {
    "pos": "n.",
    "en_def": "products that people buy for their own use",
    "cn_def": "消費品"
  },
  "light bulb": {
    "pos": "n.",
    "en_def": "a glass object that gives light when electricity passes through",
    "cn_def": "燈泡"
  },
  "interchangeable parts": {
    "pos": "n.phr.",
    "en_def": "identical parts that can replace each other easily",
    "cn_def": "可互換零件"
  },
  "grievance": {
    "pos": "n.",
    "en_def": "a reason to complain about unfair treatment",
    "cn_def": "不滿;怨言"
  },
  "revolution": {
    "pos": "n.",
    "en_def": "a huge change in the way people live or work",
    "cn_def": "革命;重大變革"
  },
  "rebellion": {
    "pos": "n.",
    "en_def": "an organised fight against people in power",
    "cn_def": "叛亂;反抗"
  },
  "fraction": {
    "pos": "n.",
    "en_def": "a small part of something",
    "cn_def": "一小部分"
  },
  "energy": {
    "pos": "n.",
    "en_def": "power from sources like coal, oil or electricity",
    "cn_def": "能源"
  },
  "weaver": {
    "pos": "n.",
    "en_def": "a person who makes cloth by crossing threads on a loom",
    "cn_def": "織工;織布工"
  },
  "discovery": {
    "pos": "n.",
    "en_def": "the act of finding something that was not known before",
    "cn_def": "發現"
  },
  "contraption": {
    "pos": "n.",
    "en_def": "a strange or complicated machine or device",
    "cn_def": "奇怪的裝置"
  },
  "girder": {
    "pos": "n.",
    "en_def": "a long strong metal beam that supports a building or bridge",
    "cn_def": "大樑;鋼樑"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the parts or substances that something is made of",
    "cn_def": "成分;組成"
  },
  "cylinder": {
    "pos": "n.",
    "en_def": "a tube-shaped part of an engine where a piston moves",
    "cn_def": "汽缸"
  },
  "pickaxe": {
    "pos": "n.",
    "en_def": "a heavy tool with a pointed metal head for breaking rock",
    "cn_def": "鶴嘴鋤;十字鎬"
  },
  "the brainchild of": {
    "pos": "n.phr.",
    "en_def": "an idea or invention created by a particular person",
    "cn_def": "……的心血結晶"
  },
  "population growth": {
    "pos": "n.",
    "en_def": "an increase in the number of people",
    "cn_def": "人口成長"
  },
  "coal mine": {
    "pos": "n.",
    "en_def": "a place underground where coal is dug out",
    "cn_def": "煤礦"
  },
  "mishap": {
    "pos": "n.",
    "en_def": "a small accident or bad luck",
    "cn_def": "小意外;不幸事故"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is available to use",
    "cn_def": "供應;供給"
  },
  "downside": {
    "pos": "n.",
    "en_def": "a disadvantage",
    "cn_def": "缺點;壞處"
  },
  "trailblazer": {
    "pos": "n.",
    "en_def": "a person who is the first to do something new",
    "cn_def": "開拓者;先驅"
  },
  "magnetism": {
    "pos": "n.",
    "en_def": "the force that magnets produce",
    "cn_def": "磁性;磁力"
  },
  "tenement": {
    "pos": "n.",
    "en_def": "a large old building divided into small flats for poor families",
    "cn_def": "廉價公寓;出租公寓"
  },
  "rate": {
    "pos": "n.",
    "en_def": "the speed or frequency of something",
    "cn_def": "速度;比率"
  },
  "sweatshop": {
    "pos": "n.",
    "en_def": "a factory where people work long hours for very low pay",
    "cn_def": "血汗工廠"
  },
  "watershed": {
    "pos": "n.",
    "en_def": "an event that marks a very important change",
    "cn_def": "分水嶺;轉折點"
  },
  "furnace": {
    "pos": "n.",
    "en_def": "a very hot enclosed fire used to heat or melt things",
    "cn_def": "熔爐;火爐"
  },
  "horsepower": {
    "pos": "n.",
    "en_def": "a unit for measuring the power of an engine",
    "cn_def": "馬力"
  },
  "workhouse": {
    "pos": "n.",
    "en_def": "a place where very poor people lived and worked in the past",
    "cn_def": "濟貧院;救濟院"
  },
  "graphite": {
    "pos": "n.",
    "en_def": "a soft black form of carbon used in pencils and sports equipment",
    "cn_def": "石墨"
  },
  "fame": {
    "pos": "n.",
    "en_def": "the state of being known by many people",
    "cn_def": "名聲;名氣"
  },
  "steelworks": {
    "pos": "n.",
    "en_def": "a factory where steel is made",
    "cn_def": "鋼鐵廠"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance that protects people from a disease",
    "cn_def": "疫苗"
  },
  "safety lamp": {
    "pos": "n.",
    "en_def": "a special lamp that will not light gas in a mine",
    "cn_def": "安全燈"
  },
  "tennis racket": {
    "pos": "n.",
    "en_def": "a bat with strings used to hit a tennis ball",
    "cn_def": "網球拍"
  },
  "printing press": {
    "pos": "n.",
    "en_def": "a machine for printing books and newspapers",
    "cn_def": "印刷機"
  },
  "classic": {
    "pos": "adj.",
    "en_def": "very good and a typical example of its kind",
    "cn_def": "經典的"
  },
  "striking": {
    "pos": "adj.",
    "en_def": "very noticeable or unusual",
    "cn_def": "顯著的;引人注目的"
  },
  "contagious": {
    "pos": "adj.",
    "en_def": "spreading easily from one person to another",
    "cn_def": "傳染性的"
  },
  "litigation": {
    "pos": "n.",
    "en_def": "the process of taking a case to court",
    "cn_def": "訴訟"
  },
  "fraud": {
    "pos": "n.",
    "en_def": "the crime of tricking people to get money",
    "cn_def": "詐欺"
  },
  "commerce": {
    "pos": "n.",
    "en_def": "buying and selling, especially on a large scale",
    "cn_def": "商業;貿易"
  },
  "carbon fibre": {
    "pos": "n.",
    "en_def": "a very strong light material made from thin threads of carbon",
    "cn_def": "碳纖維"
  },
  "power loom": {
    "pos": "n.",
    "en_def": "a machine driven by power for weaving cloth",
    "cn_def": "動力織布機"
  },
  "raw material": {
    "pos": "n.",
    "en_def": "a natural substance used to make products",
    "cn_def": "原料"
  },
  "morse code": {
    "pos": "n.",
    "en_def": "a code of short and long signals for letters",
    "cn_def": "摩斯密碼"
  },
  "cast iron": {
    "pos": "n.",
    "en_def": "hard iron that is shaped by pouring it into a mould",
    "cn_def": "鑄鐵"
  },
  "estate": {
    "pos": "n.",
    "en_def": "a large area of land with a big house, owned by one person",
    "cn_def": "莊園;地產"
  },
  "invention": {
    "pos": "n.",
    "en_def": "something new that someone has made or designed",
    "cn_def": "發明;發明物"
  },
  "journal": {
    "pos": "n.",
    "en_def": "a serious magazine about a subject, often science",
    "cn_def": "期刊"
  },
  "virtue": {
    "pos": "n.",
    "en_def": "a good quality in a person's character",
    "cn_def": "美德"
  },
  "simplicity": {
    "pos": "n.",
    "en_def": "the quality of being easy to understand or use",
    "cn_def": "簡單;簡潔"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, light or wave that carries information",
    "cn_def": "訊號;信號"
  },
  "rivalry": {
    "pos": "n.",
    "en_def": "competition between people or groups",
    "cn_def": "競爭;對抗"
  },
  "imperialism": {
    "pos": "n.",
    "en_def": "a system in which a powerful country controls others",
    "cn_def": "帝國主義"
  },
  "the daily grind": {
    "pos": "n.phr.",
    "en_def": "boring and tiring work that you do every day",
    "cn_def": "日復一日的苦差事"
  },
  "gramophone": {
    "pos": "n.",
    "en_def": "an old machine that plays music from flat discs",
    "cn_def": "唱機;留聲機"
  },
  "figure": {
    "pos": "n.",
    "en_def": "a number, especially in official information",
    "cn_def": "數字;數據"
  },
  "uptake": {
    "pos": "n.",
    "en_def": "the rate at which people start using something",
    "cn_def": "採用率;接受程度"
  },
  "finished goods": {
    "pos": "n.",
    "en_def": "products that are ready to be sold",
    "cn_def": "成品"
  },
  "spinning jenny": {
    "pos": "n.",
    "en_def": "an early machine that spun many threads at once",
    "cn_def": "珍妮紡紗機"
  },
  "receiver": {
    "pos": "n.",
    "en_def": "the part of a telephone you hold to your ear",
    "cn_def": "聽筒;接收器"
  },
  "typewriter": {
    "pos": "n.",
    "en_def": "a machine with keys for printing letters onto paper",
    "cn_def": "打字機"
  },
  "manufacturer": {
    "pos": "n.",
    "en_def": "a company that makes goods in large amounts",
    "cn_def": "製造商"
  },
  "assistance": {
    "pos": "n.",
    "en_def": "help or support",
    "cn_def": "協助;幫助"
  },
  "luxury": {
    "pos": "n.",
    "en_def": "something expensive that you enjoy but do not need",
    "cn_def": "奢侈品"
  },
  "tunnel": {
    "pos": "n.",
    "en_def": "a long passage under the ground",
    "cn_def": "隧道;坑道"
  },
  "velocity": {
    "pos": "n.",
    "en_def": "the speed of something in a particular direction",
    "cn_def": "速度"
  },
  "chimney": {
    "pos": "n.",
    "en_def": "a tall pipe that carries smoke up and out of a building",
    "cn_def": "煙囪"
  }
};

const EXTRA_GLOSSES = {};
