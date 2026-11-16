// Topic 21 Subunit 4 Quiz Data: Nuclear Power 核能
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T21 S04 - Nuclear Power 核能",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "nuclear power plant",
    "pos": "n.phr.",
    "cn_def": "核能發電廠",
    "en_def": "a power station that uses nuclear reactions",
    "sentence": "The last {{BLANK}} in Taiwan was shut down in 2025, but people are still debating whether to restart it.",
    "cn": "台灣最後一座核能發電廠在2025年停機，但人們仍在爭論是否要重新啟用。"
  },
  {
    "word": "nuclear reactor",
    "pos": "n.phr.",
    "cn_def": "核子反應爐",
    "en_def": "the machine in which nuclear energy is produced",
    "sentence": "The {{BLANK}} is kept inside a thick concrete building, so radiation cannot escape even if there is an accident.",
    "cn": "核子反應爐被安置在厚重的混凝土建築內，所以即使發生事故，輻射也無法外洩。"
  },
  {
    "word": "uranium",
    "pos": "n.",
    "cn_def": "鈾",
    "en_def": "a heavy metal used as fuel in nuclear power",
    "sentence": "Australia has large amounts of {{BLANK}}, and it sells this metal to countries that run nuclear power stations.",
    "cn": "澳洲擁有大量的鈾，並把這種金屬賣給經營核電廠的國家。"
  },
  {
    "word": "plutonium",
    "pos": "n.",
    "cn_def": "鈽",
    "en_def": "a dangerous metal made in nuclear reactors",
    "sentence": "{{BLANK}} can stay dangerous for thousands of years, so it must be stored under strict security.",
    "cn": "鈽可以維持危險性長達數千年，所以必須在嚴格的安全措施下儲存。"
  },
  {
    "word": "fission",
    "pos": "n.",
    "cn_def": "核分裂",
    "en_def": "the splitting of an atom, which releases energy",
    "sentence": "Nuclear power stations use {{BLANK}} to produce heat, and this heat turns water into steam that drives the turbines.",
    "cn": "核電廠利用核分裂產生熱能，而這些熱把水變成蒸汽來推動渦輪機。"
  },
  {
    "word": "nuclear waste",
    "pos": "n.phr.",
    "cn_def": "核廢料",
    "en_def": "dangerous material left after making nuclear power",
    "sentence": "Nobody wants to live near a store of {{BLANK}}, so finding a safe place to keep it is very difficult.",
    "cn": "沒有人想住在核廢料儲存場附近，所以要找到安全的存放地點非常困難。"
  },
  {
    "word": "radioactive",
    "pos": "adj.",
    "cn_def": "有放射性的",
    "en_def": "giving off harmful energy from atoms",
    "sentence": "The workers wore special suits because the area was {{BLANK}}, and they could only stay inside for a few minutes.",
    "cn": "工人們穿著特殊防護衣，因為這個區域具有放射性，他們只能在裡面待幾分鐘。"
  },
  {
    "word": "meltdown",
    "pos": "n.",
    "cn_def": "爐心熔毀",
    "en_def": "a serious accident when a nuclear reactor overheats",
    "sentence": "After the earthquake, there was a {{BLANK}} at the power station, and thousands of people had to leave their homes.",
    "cn": "地震之後，電廠發生了爐心熔毀，數千人必須離開家園。"
  },
  {
    "word": "nuclear accident",
    "pos": "n.phr.",
    "cn_def": "核子事故",
    "en_def": "an event that releases harmful radiation by mistake",
    "sentence": "The {{BLANK}} at Chernobyl happened in 1986, but the area around the plant is still mostly empty today.",
    "cn": "車諾比的核子事故發生在1986年，但電廠周圍的地區至今仍大多空無一人。"
  },
  {
    "word": "decommission",
    "pos": "v.",
    "cn_def": "除役",
    "en_def": "to officially stop using a large machine or plant",
    "sentence": "It will take about twenty years to {{BLANK}} the old reactor, because every part must be removed and cleaned carefully.",
    "cn": "除役這座舊反應爐大約需要二十年，因為每個部分都必須被小心拆除和清理。"
  },
  {
    "word": "spent fuel",
    "pos": "n.phr.",
    "cn_def": "用過核燃料",
    "en_def": "used nuclear fuel that is still very dangerous",
    "sentence": "The {{BLANK}} is kept in deep pools of water for years, because it is still very hot and radioactive.",
    "cn": "用過核燃料被存放在深水池中好幾年，因為它仍然非常燙而且具有放射性。"
  },
  {
    "word": "fuel rod",
    "pos": "n.phr.",
    "cn_def": "燃料棒",
    "en_def": "a long metal tube that holds nuclear fuel",
    "sentence": "Each {{BLANK}} inside the reactor is replaced after a few years, and the old ones must be stored safely.",
    "cn": "反應爐內的每一根燃料棒在幾年後就要更換，而舊的必須被安全存放。"
  },
  {
    "word": "coolant",
    "pos": "n.",
    "cn_def": "冷卻劑",
    "en_def": "a liquid used to stop a machine from getting too hot",
    "sentence": "The reactor must have a steady flow of {{BLANK}}, because without it the core would become dangerously hot very quickly.",
    "cn": "反應爐必須有穩定的冷卻劑流動，因為沒有它，爐心會非常快就變得危險地高溫。"
  },
  {
    "word": "cooling tower",
    "pos": "n.phr.",
    "cn_def": "冷卻塔",
    "en_def": "a tall round tower that releases heat from a power plant",
    "sentence": "People often think the white cloud above the {{BLANK}} is smoke, but it is actually just water vapour.",
    "cn": "人們常以為冷卻塔上方的白雲是煙，但其實那只是水蒸氣。"
  },
  {
    "word": "nuclear-free",
    "pos": "adj.",
    "cn_def": "非核的",
    "en_def": "having no nuclear power or weapons",
    "sentence": "Some citizens want a {{BLANK}} homeland, while others think nuclear power is necessary to reduce carbon emissions.",
    "cn": "有些市民想要非核家園，而另一些人則認為核能對減少碳排放是必要的。"
  },
  {
    "word": "radioactivity",
    "pos": "n.",
    "cn_def": "放射性；輻射能",
    "en_def": "the harmful energy given off by some materials",
    "sentence": "Scientists measured the {{BLANK}} in the soil after the accident, and they found that some farms were no longer safe.",
    "cn": "科學家在事故後測量土壤中的放射性，他們發現有些農場已經不再安全。"
  }
];

const MCQS = [
  {
    "q": "The last _____ in Taiwan was shut down in 2025, but people are still debating whether to restart it.",
    "options": [
      "nuclear power plant",
      "fuel cell",
      "green hydrogen",
      "peak demand"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ is kept inside a thick concrete building, so radiation cannot escape even if there is an accident.",
    "options": [
      "water shortage",
      "installed capacity",
      "nuclear reactor",
      "open-pit mine"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Australia has large amounts of _____, and it sells this metal to countries that run nuclear power stations.",
    "options": [
      "renewables",
      "uranium",
      "curtailment",
      "biodiesel"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "_____ can stay dangerous for thousands of years, so it must be stored under strict security.",
    "options": [
      "diamond",
      "sunlight",
      "absence",
      "plutonium"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Nuclear power stations use _____ to produce heat, and this heat turns water into steam that drives the turbines.",
    "options": [
      "fission",
      "platinum",
      "biodiesel",
      "reassessment"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Nobody wants to live near a store of _____, so finding a safe place to keep it is very difficult.",
    "options": [
      "peak oil",
      "resource curse",
      "power line",
      "nuclear waste"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The workers wore special suits because the area was _____, and they could only stay inside for a few minutes.",
    "options": [
      "diminished",
      "radioactive",
      "intergovernmental",
      "unexploited"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "After the earthquake, there was a _____ at the power station, and thousands of people had to leave their homes.",
    "options": [
      "commercialisation",
      "underinvestment",
      "meltdown",
      "platinum"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The _____ at Chernobyl happened in 1986, but the area around the plant is still mostly empty today.",
    "options": [
      "surge protector",
      "solar power",
      "charging station",
      "nuclear accident"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "It will take about twenty years to _____ the old reactor, because every part must be removed and cleaned carefully.",
    "options": [
      "decommission",
      "nationalise",
      "legislate",
      "electrify"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The _____ is kept in deep pools of water for years, because it is still very hot and radioactive.",
    "options": [
      "ore deposit",
      "oil crisis",
      "spent fuel",
      "green hydrogen"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Each _____ inside the reactor is replaced after a few years, and the old ones must be stored safely.",
    "options": [
      "energy efficiency",
      "fuel rod",
      "sand mining",
      "smart thermostat"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The reactor must have a steady flow of _____, because without it the core would become dangerously hot very quickly.",
    "options": [
      "mining",
      "lithium",
      "coolant",
      "blade"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "People often think the white cloud above the _____ is smoke, but it is actually just water vapour.",
    "options": [
      "scrap metal",
      "electric fan",
      "payback period",
      "cooling tower"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Some citizens want a _____ homeland, while others think nuclear power is necessary to reduce carbon emissions.",
    "options": [
      "uncertain",
      "nuclear-free",
      "heightened",
      "uncontrollable"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Scientists measured the _____ in the soil after the accident, and they found that some farms were no longer safe.",
    "options": [
      "radioactivity",
      "estimation",
      "baseload",
      "fracking"
    ],
    "answer": 0,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "nuclear power plant": {
    "pos": "n.phr.",
    "en_def": "a power station that uses nuclear reactions",
    "cn_def": "核能發電廠"
  },
  "nuclear reactor": {
    "pos": "n.phr.",
    "en_def": "the machine in which nuclear energy is produced",
    "cn_def": "核子反應爐"
  },
  "uranium": {
    "pos": "n.",
    "en_def": "a heavy metal used as fuel in nuclear power",
    "cn_def": "鈾"
  },
  "plutonium": {
    "pos": "n.",
    "en_def": "a dangerous metal made in nuclear reactors",
    "cn_def": "鈽"
  },
  "fission": {
    "pos": "n.",
    "en_def": "the splitting of an atom, which releases energy",
    "cn_def": "核分裂"
  },
  "nuclear waste": {
    "pos": "n.phr.",
    "en_def": "dangerous material left after making nuclear power",
    "cn_def": "核廢料"
  },
  "radioactive": {
    "pos": "adj.",
    "en_def": "giving off harmful energy from atoms",
    "cn_def": "有放射性的"
  },
  "meltdown": {
    "pos": "n.",
    "en_def": "a serious accident when a nuclear reactor overheats",
    "cn_def": "爐心熔毀"
  },
  "nuclear accident": {
    "pos": "n.phr.",
    "en_def": "an event that releases harmful radiation by mistake",
    "cn_def": "核子事故"
  },
  "decommission": {
    "pos": "v.",
    "en_def": "to officially stop using a large machine or plant",
    "cn_def": "除役"
  },
  "spent fuel": {
    "pos": "n.phr.",
    "en_def": "used nuclear fuel that is still very dangerous",
    "cn_def": "用過核燃料"
  },
  "fuel rod": {
    "pos": "n.phr.",
    "en_def": "a long metal tube that holds nuclear fuel",
    "cn_def": "燃料棒"
  },
  "coolant": {
    "pos": "n.",
    "en_def": "a liquid used to stop a machine from getting too hot",
    "cn_def": "冷卻劑"
  },
  "cooling tower": {
    "pos": "n.phr.",
    "en_def": "a tall round tower that releases heat from a power plant",
    "cn_def": "冷卻塔"
  },
  "nuclear-free": {
    "pos": "adj.",
    "en_def": "having no nuclear power or weapons",
    "cn_def": "非核的"
  },
  "radioactivity": {
    "pos": "n.",
    "en_def": "the harmful energy given off by some materials",
    "cn_def": "放射性；輻射能"
  },
  "fuel cell": {
    "pos": "n.phr.",
    "en_def": "a device that makes electricity from hydrogen and oxygen",
    "cn_def": "燃料電池"
  },
  "green hydrogen": {
    "pos": "n.phr.",
    "en_def": "hydrogen made using renewable electricity",
    "cn_def": "綠氫"
  },
  "peak demand": {
    "pos": "n.phr.",
    "en_def": "the time when people use the most electricity",
    "cn_def": "尖峰用電需求"
  },
  "water shortage": {
    "pos": "n.phr.",
    "en_def": "a situation when there is not enough water",
    "cn_def": "缺水"
  },
  "installed capacity": {
    "pos": "n.phr.",
    "en_def": "the maximum power that all machines can produce",
    "cn_def": "裝置容量"
  },
  "open-pit mine": {
    "pos": "n.phr.",
    "en_def": "a mine dug as a huge hole from the surface",
    "cn_def": "露天礦"
  },
  "renewables": {
    "pos": "n.",
    "en_def": "energy sources such as sun and wind that never run out",
    "cn_def": "再生能源"
  },
  "curtailment": {
    "pos": "n.",
    "en_def": "the act of reducing or limiting something",
    "cn_def": "削減；限制"
  },
  "biodiesel": {
    "pos": "n.",
    "en_def": "a fuel made from vegetable oil or animal fat",
    "cn_def": "生質柴油"
  },
  "diamond": {
    "pos": "n.",
    "en_def": "a very hard, clear and valuable stone",
    "cn_def": "鑽石"
  },
  "sunlight": {
    "pos": "n.",
    "en_def": "the light that comes from the sun",
    "cn_def": "陽光"
  },
  "absence": {
    "pos": "n.",
    "en_def": "the state of not being there",
    "cn_def": "缺乏；不在"
  },
  "platinum": {
    "pos": "n.",
    "en_def": "a rare and valuable silver-white metal",
    "cn_def": "鉑；白金"
  },
  "reassessment": {
    "pos": "n.",
    "en_def": "the act of judging something again",
    "cn_def": "重新評估"
  },
  "peak oil": {
    "pos": "n.phr.",
    "en_def": "the time when world oil production reaches its highest point",
    "cn_def": "石油產量頂峰"
  },
  "resource curse": {
    "pos": "n.phr.",
    "en_def": "when rich natural resources lead to poor development",
    "cn_def": "資源詛咒"
  },
  "power line": {
    "pos": "n.phr.",
    "en_def": "a wire that carries electricity over long distances",
    "cn_def": "電線；輸電線"
  },
  "diminished": {
    "pos": "adj.",
    "en_def": "made smaller or weaker",
    "cn_def": "減弱的"
  },
  "intergovernmental": {
    "pos": "adj.",
    "en_def": "between or involving several governments",
    "cn_def": "政府間的"
  },
  "unexploited": {
    "pos": "adj.",
    "en_def": "not yet used or developed",
    "cn_def": "未開發的"
  },
  "commercialisation": {
    "pos": "n.",
    "en_def": "turning an invention into a product that is sold",
    "cn_def": "商業化"
  },
  "underinvestment": {
    "pos": "n.",
    "en_def": "not spending enough money on something",
    "cn_def": "投資不足"
  },
  "surge protector": {
    "pos": "n.phr.",
    "en_def": "a device that protects machines from sudden strong electricity",
    "cn_def": "突波保護器"
  },
  "solar power": {
    "pos": "n.phr.",
    "en_def": "electricity made from sunlight",
    "cn_def": "太陽能發電"
  },
  "charging station": {
    "pos": "n.phr.",
    "en_def": "a place where electric cars can be charged",
    "cn_def": "充電站"
  },
  "nationalise": {
    "pos": "v.",
    "en_def": "to bring a private company under government control",
    "cn_def": "收歸國有"
  },
  "legislate": {
    "pos": "v.",
    "en_def": "to make laws",
    "cn_def": "立法"
  },
  "electrify": {
    "pos": "v.",
    "en_def": "to supply something with electricity",
    "cn_def": "使電氣化；供電給"
  },
  "ore deposit": {
    "pos": "n.phr.",
    "en_def": "a natural collection of rock containing useful metal",
    "cn_def": "礦床"
  },
  "oil crisis": {
    "pos": "n.phr.",
    "en_def": "a time when oil becomes very scarce and expensive",
    "cn_def": "石油危機"
  },
  "energy efficiency": {
    "pos": "n.phr.",
    "en_def": "using less energy to do the same job",
    "cn_def": "能源效率"
  },
  "sand mining": {
    "pos": "n.phr.",
    "en_def": "taking sand from rivers and beaches for building",
    "cn_def": "採砂"
  },
  "smart thermostat": {
    "pos": "n.phr.",
    "en_def": "a device that controls heating and learns your habits",
    "cn_def": "智慧溫控器"
  },
  "mining": {
    "pos": "n.",
    "en_def": "the work of digging minerals out of the ground",
    "cn_def": "採礦"
  },
  "lithium": {
    "pos": "n.",
    "en_def": "a light metal used in rechargeable batteries",
    "cn_def": "鋰"
  },
  "blade": {
    "pos": "n.",
    "en_def": "one of the long flat parts of a turbine that turns",
    "cn_def": "葉片"
  },
  "scrap metal": {
    "pos": "n.phr.",
    "en_def": "old metal that can be melted and used again",
    "cn_def": "廢金屬"
  },
  "electric fan": {
    "pos": "n.phr.",
    "en_def": "a machine with blades that moves air to cool you",
    "cn_def": "電風扇"
  },
  "payback period": {
    "pos": "n.phr.",
    "en_def": "the time it takes for savings to repay the cost",
    "cn_def": "回收期"
  },
  "uncertain": {
    "pos": "adj.",
    "en_def": "not known or not sure",
    "cn_def": "不確定的"
  },
  "heightened": {
    "pos": "adj.",
    "en_def": "made stronger or greater",
    "cn_def": "升高的；加強的"
  },
  "uncontrollable": {
    "pos": "adj.",
    "en_def": "impossible to control",
    "cn_def": "無法控制的"
  },
  "estimation": {
    "pos": "n.",
    "en_def": "a judgement of an amount without exact measuring",
    "cn_def": "估計"
  },
  "baseload": {
    "pos": "n.",
    "en_def": "the minimum amount of power needed all the time",
    "cn_def": "基載電力"
  },
  "fracking": {
    "pos": "n.",
    "en_def": "pumping water into rocks to break them and release gas",
    "cn_def": "水力壓裂法"
  }
};

const EXTRA_GLOSSES = {};
