// Lesson 27 Quiz Data: Aviation, Public Transit & Highway Infrastructure
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "捷進GEPT初級 Lesson 27 - Aviation, Public Transit & Highway Infrastructure",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "aircraft",
    "pos": "n.",
    "cn_def": "航空器；飛機",
    "en_def": "any airplane, helicopter, or flying machine (pl. aircraft)",
    "sentence": "The international airport ordered fifteen modern commercial {{BLANK}} to meet the rising demand for overseas travel.",
    "cn": "該國際機場訂購了十五架現代商用航空器，以滿足日益增長的出境旅遊需求。"
  },
  {
    "word": "airline",
    "pos": "n.",
    "cn_def": "航空公司",
    "en_def": "a company that provides regular flights for passengers or cargo",
    "sentence": "Our family booked discounted round-trip tickets through a reputable budget {{BLANK}}, and the customer service was surprisingly good.",
    "cn": "我們全家透過一家聲譽良好的廉價航空公司訂購了折扣來回機票，其客戶服務出乎意料地好。"
  },
  {
    "word": "flight",
    "pos": "n.",
    "cn_def": "航班；飛行",
    "en_def": "a journey made through the air, especially in an airplane",
    "sentence": "Because severe stormy weather hit Tokyo, our direct afternoon {{BLANK}} was delayed on the airport runway for two hours.",
    "cn": "因為嚴重暴風雨襲擊東京，我們下午的直飛航班在機場跑道上延誤了兩個小時。"
  },
  {
    "word": "plane",
    "pos": "n.",
    "cn_def": "飛機",
    "en_def": "an airplane; a powered flying vehicle with fixed wings",
    "sentence": "The passengers fastened their seatbelts tightly as the heavy passenger {{BLANK}} accelerated rapidly down the runway.",
    "cn": "當這架沉重的大型客運飛機在跑道上快速加速時，機上乘客緊緊繫上了安全帶。"
  },
  {
    "word": "helicopter",
    "pos": "n.",
    "cn_def": "直升機",
    "en_def": "an aircraft that derives lift from rotating overhead blades",
    "sentence": "A rescue {{BLANK}} hovered steadily above the raging river to lift stranded mountain hikers into the cabin safely.",
    "cn": "一架救援直升機在洶湧的河流上方平穩盤旋，將受困的山區登山客安全吊起進入機艙。"
  },
  {
    "word": "MRT",
    "pos": "n.",
    "cn_def": "捷運；大眾捷運系統",
    "en_def": "Mass Rapid Transit; the metropolitan subway and elevated train system",
    "sentence": "Commuters in Taipei prefer taking the punctual {{BLANK}} during rush hours because city street traffic is often gridlocked.",
    "cn": "台北的通勤族在尖峰時段更喜歡搭乘準時的捷運，因為市區街道交通經常嚴重堵塞。"
  },
  {
    "word": "subway",
    "pos": "n.",
    "cn_def": "地下鐵；地鐵",
    "en_def": "an underground railway system in a city",
    "sentence": "During our winter holiday in New York, we bought a weekly pass to ride the underground {{BLANK}} across Manhattan easily.",
    "cn": "在紐約度寒假期間，我們買了一張週票，方便搭乘地下地鐵暢行曼哈頓。"
  },
  {
    "word": "highway",
    "pos": "n.",
    "cn_def": "公路；高速公路",
    "en_def": "a main public road, especially connecting major cities",
    "sentence": "Long-distance truck drivers usually travel along the national {{BLANK}} late at night when the roadway is clear of traffic.",
    "cn": "長途卡車司機通常在深夜路面車流稀少時，沿著國道高速公路行駛。"
  },
  {
    "word": "overpass",
    "pos": "n.",
    "cn_def": "天橋；陸橋；高架道",
    "en_def": "a bridge that carries one road or path above another road",
    "sentence": "Pedestrians are encouraged to walk across the elevated {{BLANK}} to cross the dangerous ten-lane avenue safely.",
    "cn": "政府鼓勵行人走上高架天橋，以安全穿越這條危險的十線道大馬路。"
  },
  {
    "word": "underpass",
    "pos": "n.",
    "cn_def": "地下道；地下車道",
    "en_def": "a tunnel or sunken roadway allowing vehicles or pedestrians to pass beneath",
    "sentence": "Because the heavy monsoon storm flooded the low-lying {{BLANK}}, city traffic police closed the road to prevent accidents.",
    "cn": "因為強烈的季風暴雨淹沒了低窪的地下道，市區交通警察封閉了道路以防止意外發生。"
  }
];

const MCQS = [
  {
    "q": "Technicians at the air base conducted thorough maintenance on each military ______ before morning training drills began.",
    "options": [
      "aircraft",
      "overpass",
      "subway",
      "underpass"
    ],
    "answer": 0,
    "cn": "空軍基地的技術人員在晨間訓練演習開始前，對每架軍用航空器進行了徹底維修。 【選項解析】(A) overpass 天橋 (B) aircraft 航空器 (C) subway 地鐵 (D) underpass 地下道。military aircraft（軍用飛機/航空器）。",
    "vocabIndex": 0
  },
  {
    "q": "The national ______ expanded its flight network by opening five new direct routes to major European capitals.",
    "options": [
      "highway",
      "underpass",
      "overpass",
      "airline"
    ],
    "answer": 3,
    "cn": "這家國家航空公司透過開通五條直飛歐洲主要首都的新航線，擴大了其航線網絡。 【選項解析】(A) airline 航空公司 (B) underpass (C) overpass (D) highway。開通直飛航線的企業為 airline。",
    "vocabIndex": 1
  },
  {
    "q": "The captain announced that our transatlantic ______ would land thirty minutes ahead of schedule due to strong tailwinds.",
    "options": [
      "underpass",
      "flight",
      "highway",
      "overpass"
    ],
    "answer": 1,
    "cn": "機長廣播宣布由於強勁順風，我們的跨大西洋航班將提前三十分鐘降落。 【選項解析】(A) underpass (B) highway (C) flight 航班 (D) overpass。transatlantic flight（跨大西洋航班）。",
    "vocabIndex": 2
  },
  {
    "q": "As the cargo ______ touched down smoothly on the concrete runway, the cabin crew breathed a sigh of relief.",
    "options": [
      "subway",
      "MRT",
      "plane",
      "overpass"
    ],
    "answer": 2,
    "cn": "當貨運飛機平穩降落在混凝土跑道上時，機組人員鬆了一口氣。 【選項解析】(A) subway (B) plane 飛機 (C) MRT (D) overpass。cargo plane 指貨運飛機。",
    "vocabIndex": 3
  },
  {
    "q": "The emergency medical service dispatched a rescue ______ to evacuate the critically injured hiker from the canyon.",
    "options": [
      "helicopter",
      "airline",
      "underpass",
      "highway"
    ],
    "answer": 0,
    "cn": "緊急醫療服務派遣了一架救援直升機，從峽谷中疏散受重傷的登山客。 【選項解析】(A) underpass (B) airline (C) helicopter 直升機 (D) highway。rescue helicopter（搜救直升機）。",
    "vocabIndex": 4
  },
  {
    "q": "In urban Taiwan, riding the air-conditioned ______ is widely considered the most convenient way to travel around town.",
    "options": [
      "overpass",
      "highway",
      "plane",
      "MRT"
    ],
    "answer": 3,
    "cn": "在台灣市區，搭乘配備冷氣的大眾捷運被普遍認為是周遊城市最方便的方式。 【選項解析】(A) MRT 捷運 (B) highway (C) plane (D) overpass。都會區冷氣大眾運輸工具指 MRT。",
    "vocabIndex": 5
  },
  {
    "q": "Travelers navigating through London can easily reach any district by following colorful maps inside the ______ system.",
    "options": [
      "airline",
      "helicopter",
      "subway",
      "overpass"
    ],
    "answer": 2,
    "cn": "遊覽倫敦的旅客只要跟隨地鐵系統內色彩豐富的地圖，就能輕鬆到達任何區域。 【選項解析】(A) airline (B) subway 地鐵 (C) helicopter (D) overpass。London subway / underground 指地鐵。",
    "vocabIndex": 6
  },
  {
    "q": "The government widened the coastal ______ from two lanes to four lanes to accommodate heavy weekend tourist traffic.",
    "options": [
      "flight",
      "highway",
      "aircraft",
      "underpass"
    ],
    "answer": 1,
    "cn": "政府將沿海公路從雙向兩線拓寬為四線道，以容納週末繁忙的觀光車流。 【選項解析】(A) flight (B) underpass (C) aircraft (D) highway 公路。拓寬車道容納車流指 coastal highway。",
    "vocabIndex": 7
  },
  {
    "q": "To avoid crossing the speeding expressway on foot, workers climbed the concrete ______ to reach the factory opposite.",
    "options": [
      "plane",
      "airline",
      "overpass",
      "flight"
    ],
    "answer": 2,
    "cn": "為了避免徒步穿越車速飛快的快速道路，工人們登上混凝土天橋以前往對面的工廠。 【選項解析】(A) overpass 天橋 (B) airline (C) plane (D) flight。跨越道路之陸橋為 pedestrian overpass。",
    "vocabIndex": 8
  },
  {
    "q": "Drainage pumps were installed at the entrance of the pedestrian ______ to prevent rainwater from accumulating during typhoons.",
    "options": [
      "helicopter",
      "underpass",
      "aircraft",
      "airline"
    ],
    "answer": 1,
    "cn": "行人地下道入口處安裝了排水抽水機，以防颱風期間雨水積聚成災。 【選項解析】(A) helicopter (B) underpass 地下道 (C) aircraft (D) airline。pedestrian underpass 指行人地下道。",
    "vocabIndex": 9
  },
  {
    "q": "Aerospace engineers designed an experimental ______ powered entirely by solar batteries and ultra-light materials.",
    "options": [
      "aircraft",
      "subway",
      "underpass",
      "highway"
    ],
    "answer": 0,
    "cn": "航太工程師設計了一架完全由太陽能電池和超輕材料驅動的實驗性航空器。 【選項解析】(A) underpass (B) subway (C) aircraft 航空器 (D) highway。experimental aircraft 指實驗飛行器。",
    "vocabIndex": 0
  },
  {
    "q": "Because the budget ______ charges extra fees for checked baggage, many backpackers travel with just one carry-on bag.",
    "options": [
      "underpass",
      "overpass",
      "MRT",
      "airline"
    ],
    "answer": 3,
    "cn": "因為廉價航空公司對托運行李收取額外費用，許多背包客只攜帶一件隨身行李出行。 【選項解析】(A) airline 航空公司 (B) overpass (C) MRT (D) underpass。budget airline（廉價航空公司）。",
    "vocabIndex": 1
  },
  {
    "q": "Passengers were advised to confirm their international ______ status online before traveling to the airport terminal.",
    "options": [
      "highway",
      "overpass",
      "flight",
      "underpass"
    ],
    "answer": 2,
    "cn": "旅客被建議在前往機場航廈之前，先上網確認他們的國際航班狀態。 【選項解析】(A) highway (B) overpass (C) flight 航班 (D) underpass。international flight status（國際航班動態）。",
    "vocabIndex": 2
  },
  {
    "q": "The twin-engine passenger ______ climbed above the gray rain clouds into bright and steady sunshine.",
    "options": [
      "underpass",
      "overpass",
      "subway",
      "plane"
    ],
    "answer": 3,
    "cn": "這架雙引擎客機爬升穿過灰色雨雲，進入陽光明媚平穩的雲層上方。 【選項解析】(A) underpass (B) plane 飛機 (C) subway (D) overpass。twin-engine passenger plane（雙引擎客機）。",
    "vocabIndex": 3
  },
  {
    "q": "The traffic surveillance ______ broadcast live video of the highway collision to the police command center.",
    "options": [
      "helicopter",
      "subway",
      "underpass",
      "airline"
    ],
    "answer": 0,
    "cn": "交通監控直升機將公路相撞事故的現場畫面即時傳輸到警方指揮中心。 【選項解析】(A) airline (B) subway (C) underpass (D) helicopter 直升機。surveillance helicopter（監控直升機）。",
    "vocabIndex": 4
  },
  {
    "q": "Students tapped their contactless smartcards at the automatic ticket gate to enter the crowded ______ platform.",
    "options": [
      "highway",
      "MRT",
      "aircraft",
      "overpass"
    ],
    "answer": 1,
    "cn": "學生在自動驗票閘門感應非接觸式晶片智慧卡，走進擁擠的捷運月台。 【選項解析】(A) MRT 捷運 (B) highway (C) aircraft (D) overpass。crowded MRT platform（擁擠的捷運月台）。",
    "vocabIndex": 5
  },
  {
    "q": "Street performers often play guitars and harmonicas near the bustling exits of the underground ______ station.",
    "options": [
      "highway",
      "helicopter",
      "airline",
      "subway"
    ],
    "answer": 3,
    "cn": "街頭藝人經常在繁忙的地下地鐵站出口附近彈吉他吹口琴。 【選項解析】(A) highway (B) helicopter (C) subway 地鐵 (D) airline。underground subway station（地下地鐵站）。",
    "vocabIndex": 6
  },
  {
    "q": "Long lines of automobiles crept forward slowly along the interstate ______ during the holiday weekend rush.",
    "options": [
      "underpass",
      "flight",
      "highway",
      "aircraft"
    ],
    "answer": 2,
    "cn": "在假日週末的高峰期，長長的汽車隊伍在州際高速公路上緩慢向前蠕動。 【選項解析】(A) underpass (B) flight (C) aircraft (D) highway 高速公路。interstate highway（州際公路）。",
    "vocabIndex": 7
  },
  {
    "q": "Urban planners built an illuminated pedestrian ______ across the boulevard so students could reach the library safely.",
    "options": [
      "airline",
      "overpass",
      "helicopter",
      "plane"
    ],
    "answer": 1,
    "cn": "都市規劃人員在大道上方建造了一座有照明設施的行人天橋，以便學生能安全前往圖書館。 【選項解析】(A) overpass 天橋 (B) airline (C) helicopter (D) plane。illuminated pedestrian overpass。",
    "vocabIndex": 8
  },
  {
    "q": "City maintenance workers cleared leaves and trash from the storm drains inside the vehicle ______ after midnight.",
    "options": [
      "underpass",
      "aircraft",
      "flight",
      "airline"
    ],
    "answer": 0,
    "cn": "市政維護人員在午夜過後清理了車行地下道內雨水落水管中的樹葉和垃圾。 【選項解析】(A) aircraft (B) underpass 地下道 (C) flight (D) airline。vehicle underpass（車行地下道）。",
    "vocabIndex": 9
  },
  {
    "q": "The carrier transports perishable seafood worldwide using refrigerated containers loaded onto heavy cargo ______.",
    "options": [
      "subways",
      "highways",
      "aircraft",
      "underpasses"
    ],
    "answer": 2,
    "cn": "該承運商利用裝載到大型貨運航空器上的冷藏貨櫃，向全球運送易腐海鮮。 【選項解析】(A) subways (B) highways (C) aircraft 航空器 (D) underpasses。heavy cargo aircraft（大型貨機）。",
    "vocabIndex": 0
  },
  {
    "q": "Customer loyalty programs run by this global ______ reward frequent flyers with free upgrades and lounge passes.",
    "options": [
      "highway",
      "overpass",
      "underpass",
      "airline"
    ],
    "answer": 3,
    "cn": "這家全球航空公司營運的客戶忠誠計劃，以免費升等和貴賓室使用券獎勵常客。 【選項解析】(A) airline 航空公司 (B) overpass (C) underpass (D) highway。global airline loyalty program。",
    "vocabIndex": 1
  },
  {
    "q": "Due to unexpected mechanical trouble on engine number two, the long-distance ______ made an emergency landing.",
    "options": [
      "flight",
      "overpass",
      "highway",
      "underpass"
    ],
    "answer": 0,
    "cn": "由於二號發動機發生意外機械故障，該長途航班進行了緊急降落。 【選項解析】(A) underpass (B) overpass (C) highway (D) flight 航班。long-distance flight（長途航班）。",
    "vocabIndex": 2
  },
  {
    "q": "The young boy looked out the bedroom window with excitement, pointing up at a silver ______ soaring in the blue sky.",
    "options": [
      "subway",
      "plane",
      "underpass",
      "overpass"
    ],
    "answer": 1,
    "cn": "小男孩興奮地望向臥室窗外，用手指著天空中一架翱翔在藍天裡的銀色飛機。 【選項解析】(A) subway (B) plane 飛機 (C) underpass (D) overpass。soaring in the sky 表 plane 飛機。",
    "vocabIndex": 3
  },
  {
    "q": "During wildfire operations, a heavy water-dropping ______ refilled its tank from a nearby mountain reservoir.",
    "options": [
      "highway",
      "underpass",
      "helicopter",
      "MRT"
    ],
    "answer": 2,
    "cn": "在森林野火撲滅作業中，一架重型灑水直升機從附近的山區水庫補充了水箱水槽。 【選項解析】(A) highway (B) underpass (C) helicopter 直升機 (D) MRT。water-dropping helicopter（灑水滅火直升機）。",
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "aircraft": {
    "pos": "n.",
    "en_def": "any airplane, helicopter, or flying machine (pl. aircraft)",
    "cn_def": "航空器；飛機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "any airplane, helicopter, or flying machine (pl. aircraft)",
        "cn_def": "航空器；飛機"
      }
    ]
  },
  "airline": {
    "pos": "n.",
    "en_def": "a company that provides regular flights for passengers or cargo",
    "cn_def": "航空公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a company that provides regular flights for passengers or cargo",
        "cn_def": "航空公司"
      }
    ]
  },
  "flight": {
    "pos": "n.",
    "en_def": "a journey made through the air, especially in an airplane",
    "cn_def": "航班；飛行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a journey made through the air, especially in an airplane",
        "cn_def": "航班；飛行"
      }
    ]
  },
  "plane": {
    "pos": "n.",
    "en_def": "an airplane; a powered flying vehicle with fixed wings",
    "cn_def": "飛機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an airplane; a powered flying vehicle with fixed wings",
        "cn_def": "飛機"
      }
    ]
  },
  "helicopter": {
    "pos": "n.",
    "en_def": "an aircraft that derives lift from rotating overhead blades",
    "cn_def": "直升機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an aircraft that derives lift from rotating overhead blades",
        "cn_def": "直升機"
      }
    ]
  },
  "mrt": {
    "pos": "n.",
    "en_def": "Mass Rapid Transit; the metropolitan subway and elevated train system",
    "cn_def": "捷運；大眾捷運系統",
    "combined": [
      {
        "pos": "n.",
        "en_def": "Mass Rapid Transit; the metropolitan subway and elevated train system",
        "cn_def": "捷運；大眾捷運系統"
      }
    ]
  },
  "subway": {
    "pos": "n.",
    "en_def": "an underground railway system in a city",
    "cn_def": "地下鐵；地鐵",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an underground railway system in a city",
        "cn_def": "地下鐵；地鐵"
      }
    ]
  },
  "highway": {
    "pos": "n.",
    "en_def": "a main public road, especially connecting major cities",
    "cn_def": "公路；高速公路",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a main public road, especially connecting major cities",
        "cn_def": "公路；高速公路"
      }
    ]
  },
  "overpass": {
    "pos": "n.",
    "en_def": "a bridge that carries one road or path above another road",
    "cn_def": "天橋；陸橋；高架道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a bridge that carries one road or path above another road",
        "cn_def": "天橋；陸橋；高架道"
      }
    ]
  },
  "underpass": {
    "pos": "n.",
    "en_def": "a tunnel or sunken roadway allowing vehicles or pedestrians to pass beneath",
    "cn_def": "地下道；地下車道",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a tunnel or sunken roadway allowing vehicles or pedestrians to pass beneath",
        "cn_def": "地下道；地下車道"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
