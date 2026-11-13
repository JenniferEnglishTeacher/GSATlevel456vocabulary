// Unit 6 Quiz Data: physician – overcome an adversity
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Basic U6 - physician – overcome an adversity",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "physician",
    "pos": "n.",
    "cn_def": "內科醫生",
    "en_def": "a medical doctor, especially one who has general skill.",
    "sentence": "Old people should always ask their {{BLANK}} before starting any kind of new and strenuous exercise routine.",
    "cn": "老年人在開始任何新的且劇烈的運動計畫之前，總是應該先詢問他們的內科醫生。"
  },
  {
    "word": "surgeon",
    "pos": "n.",
    "cn_def": "外科醫生",
    "en_def": "a medical practitioner qualified to practice surgery.",
    "sentence": "The highly skilled {{BLANK}} successfully completed the complex heart operation after standing in the operating room for ten hours.",
    "cn": "這位技術高超的外科醫生在手術室站了十個小時後，成功完成了複雜的心臟手術。"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "cn_def": "牙醫",
    "en_def": "a person qualified to treat the diseases and conditions that affect the teeth and gums.",
    "sentence": "You really need to visit the {{BLANK}} every six months to ensure that your teeth and gums remain perfectly healthy.",
    "cn": "你真的需要每六個月去看一次牙醫，以確保你的牙齒和牙齦保持完全健康。"
  },
  {
    "word": "surgery",
    "pos": "n.",
    "cn_def": "外科手術",
    "en_def": "medical treatment in which a doctor cuts open a person's body to repair or remove damaged parts",
    "sentence": "The head doctor told the patient that undergoing major {{BLANK}} was the only way to treat the illness safely.",
    "cn": "主治醫生告訴患者，接受重大外科手術是安全治療該疾病的唯一方法。"
  },
  {
    "word": "perform an operation",
    "pos": "v.",
    "cn_def": "動手術",
    "en_def": "do a specific procedure of cutting open a patient's body by a doctor to treat a medical condition",
    "sentence": "The professional medical team successfully {{BLANK}} for 3 hours on the patient's heart this morning.",
    "cn": "專業醫療團隊今天上午成功為患者的心臟進行了三個小時的手術。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "行動；任務",
    "en_def": "an organized activity, mission, or campaign involving a number of people, especially soldiers or police",
    "sentence": "The military commander organized a top-secret rescue {{BLANK}} to save the citizens trapped inside the remote zone.",
    "cn": "軍事指揮官組織了一次絕密的救援行動，以營救被困在偏遠地區內的公民。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "運營；運作",
    "en_def": "the ongoing factual processes, practical running, and day-to-day business management of a firm",
    "sentence": "The ambitious entrepreneur completely modernized the daily {{BLANK}} of the international corporation by deploying automated AI tools.",
    "cn": "這位雄心勃勃的企業家透過部署自動化人工智慧工具，徹底使這家國際公司的日常運營走向現代化。"
  },
  {
    "word": "entrepreneur",
    "pos": "n.",
    "cn_def": "企業家；創業家",
    "en_def": "a person who sets up a business or businesses, taking on financial risks in the hope of profit",
    "sentence": "Every young {{BLANK}} dreams of designing a customizable learning platform that can completely change the global educational landscape.",
    "cn": "每位年輕的企業家都夢想設計一個能夠徹底改變全球教育景觀的客製化學習平台。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "大企業；公司",
    "en_def": "a large company or group of companies authorized to act as a single entity and recognized as such in law",
    "sentence": "The international technology {{BLANK}} decided to fund a new business expansion project to attract additional wealthy investors.",
    "cn": "這家國際科技公司決定資助一項全新的業務擴展計畫，以吸引更多富有的投資者。"
  },
  {
    "word": "go smoothly",
    "pos": "phr.",
    "cn_def": "進展順利；順利進行",
    "en_def": "to progress or happen without any problems, unexpected difficulties, or sudden interruptions",
    "sentence": "Thanks to the manager's meticulous lesson planning and organization, the entire product testing phase did {{BLANK}}.",
    "cn": "幸虧經理細緻的計畫與組織，整個產品測試階段確實進展順利。"
  },
  {
    "word": "go badly",
    "pos": "phr.",
    "cn_def": "進行得不順利",
    "en_def": "to happen in a way that is not successful or causes problems.",
    "sentence": "Even when things would {{BLANK}} for him, Kevin always tried his best to remain optimistic and keep smiling.",
    "cn": "即使事情對他來說進行得不順利，凱文總是盡全力保持樂觀並繼續微笑。"
  },
  {
    "word": "badly needed",
    "pos": "phr.",
    "cn_def": "迫切需要",
    "en_def": "to require something very much or urgently.",
    "sentence": "The exhausted charity workers {{BLANK}} more volunteers to help distribute the food to the homeless people in the city.",
    "cn": "疲憊的慈善工作者迫切需要更多志工來幫忙發放食物給城市裡的無家可歸者。"
  },
  {
    "word": "harm",
    "pos": "v.",
    "cn_def": "傷害",
    "en_def": "cause physical injury, to injure.",
    "sentence": "Mean posts and comments of trolls {{BLANK}} the celebrity's reputation.",
    "cn": "酸民的尖酸刻薄的貼文漢留言傷害這個名人的名聲"
  },
  {
    "word": "harm",
    "pos": "n.",
    "cn_def": "傷害",
    "en_def": "physical injury, especially that which is deliberately inflicted; to injure.",
    "sentence": "My father was incredibly happy that there was no {{BLANK}} to his expensive new car after the severe thunderstorm.",
    "cn": "我父親非常高興，在嚴重的雷雨過後，他昂貴的新車沒有受到任何傷害。"
  },
  {
    "word": "do harm to",
    "pos": "phr.",
    "cn_def": "對...造成傷害",
    "en_def": "to cause physical or mental damage to someone or something.",
    "sentence": "The doctor warned that eating too much fast food and sugary snacks may eventually {{BLANK}} your stomach.",
    "cn": "醫生警告說，吃太多速食和含糖零食最終可能會對你的胃造成傷害。"
  },
  {
    "word": "done no harm to",
    "pos": "phr.",
    "cn_def": "不對...造成傷害",
    "en_def": "to be completely safe and cause no damage or injury.",
    "sentence": "I really don't know why Charles is so mad at me, because I have {{BLANK}} him whatsoever.",
    "cn": "我真的不知道查爾斯為什麼生我的氣，因為我根本沒有對他造成傷害。"
  },
  {
    "word": "do more harm than good",
    "pos": "phr.",
    "cn_def": "弊大於利",
    "en_def": "to be damaging and not helpful in a situation.",
    "sentence": "I honestly think that continually pressuring Jerry to get a summer job will probably {{BLANK}}.",
    "cn": "我老實認為，不斷向傑瑞施壓要他去找一份暑期工作可能會弊大於利。"
  },
  {
    "word": "harmful",
    "pos": "adj.",
    "cn_def": "有害的",
    "en_def": "causing or likely to cause harm.",
    "sentence": "Releasing these toxic chemicals into the local river is incredibly {{BLANK}} to the delicate ecosystem and the surrounding wildlife.",
    "cn": "將這些有毒化學物質排放到當地河流中，對脆弱的生態系統和周圍的野生動物是極其有害的。"
  },
  {
    "word": "harmless",
    "pos": "adj.",
    "cn_def": "無害的",
    "en_def": "not able or not likely to cause harm.",
    "sentence": "The large green snake might look incredibly frightening, but it is actually completely {{BLANK}} to humans and pets.",
    "cn": "這條大綠蛇看起來可能非常嚇人，但牠對人類和寵物其實是完全無害的。"
  },
  {
    "word": "shortage",
    "pos": "n.",
    "cn_def": "短缺",
    "en_def": "a state or situation in which something needed cannot be obtained in sufficient amounts.",
    "sentence": "Due to the changing climate, major cities all over the world have been experiencing serious water {{BLANK}} recently.",
    "cn": "由於氣候變遷，世界各地的主要城市最近一直經歷著嚴重的水資源短缺。"
  },
  {
    "word": "food shortage",
    "pos": "phr.",
    "cn_def": "糧食短缺",
    "en_def": "a situation where there is not enough food for people in a region.",
    "sentence": "The harsh winter drought destroyed most of the crops, leading to a terrible {{BLANK}} in the isolated farming village.",
    "cn": "嚴酷的冬季乾旱摧毀了大部分農作物，導致這個孤立的農村發生了可怕的糧食短缺。"
  },
  {
    "word": "a sudden shortage of",
    "pos": "phr.",
    "cn_def": "...的短缺",
    "en_def": "a lack of a specific item or resource.",
    "sentence": "There was {{BLANK}} cashiers working today, so Marshall had to wait in a very long line.",
    "cn": "今天收銀員突然短缺，所以馬歇爾得排非常長的隊。"
  },
  {
    "word": "short",
    "pos": "adj.",
    "cn_def": "短缺的；不足的",
    "en_def": "not having enough of something.",
    "sentence": "The hospital is severely {{BLANK}} of experienced nursing staff, making it difficult to properly care for all the sick patients.",
    "cn": "醫院嚴重短缺經驗豐富的護理人員，導致很難適當地照顧所有生病的病患。"
  },
  {
    "word": "fell short of",
    "pos": "phr.",
    "cn_def": "未達到；不符合",
    "en_def": "to fail to meet an expectation or standard.",
    "sentence": "The company's final yearly profits unfortunately {{BLANK}} the ambitious expectations that the rich investors had originally set.",
    "cn": "該公司最終的年度利潤不幸地未達到富有的投資者最初設定的雄心勃勃的期望。"
  },
  {
    "word": "swelled",
    "pos": "v.",
    "cn_def": "腫脹；增加",
    "en_def": "to become larger or rounder in size.",
    "sentence": "When Gina accidentally hurt her ankle during the game, it quickly {{BLANK}} to twice the normal size and turned purple.",
    "cn": "當吉娜在比賽中不小心弄傷腳踝時，它迅速腫脹到正常大小的兩倍並變成紫色。"
  },
  {
    "word": "swollen",
    "pos": "adj.",
    "cn_def": "腫大的",
    "en_def": "larger or rounder in size, typically as a result of an accumulation of fluid.",
    "sentence": "After hiking in the humid jungle for ten hours, my feet were incredibly sore and completely {{BLANK}} inside my boots.",
    "cn": "在潮濕的叢林裡徒步十個小時後，我的腳極度痠痛，且在靴子裡完全是腫大的。"
  },
  {
    "word": "swelling",
    "pos": "n.",
    "cn_def": "腫脹（處）",
    "en_def": "an abnormal enlargement of a part of the body.",
    "sentence": "You should immediately apply an ice pack to your injured knee to effectively reduce the painful {{BLANK}} before tomorrow.",
    "cn": "你應該立刻在受傷的膝蓋上敷冰袋，以在明天之前有效地減少痛苦的腫脹。"
  },
  {
    "word": "fluid",
    "pos": "n. / adj.",
    "cn_def": "液體；流暢的",
    "en_def": "a substance that has no fixed shape; able to flow easily.",
    "sentence": "The professional ballet dancers had to carefully move their bodies in a completely {{BLANK}} manner to match the classical music.",
    "cn": "專業的芭蕾舞者必須以完全流暢的方式小心地移動身體，以配合古典音樂。"
  },
  {
    "word": "body fluid",
    "pos": "phr.",
    "cn_def": "體液",
    "en_def": "liquids originating from inside the bodies of living humans.",
    "sentence": "Doctors must wear special protective gloves to prevent any dangerous contact with infected {{BLANK}} while treating the patients.",
    "cn": "醫生在治療病患時必須戴上特殊的防護手套，以防止與受感染的體液發生任何危險接觸。"
  },
  {
    "word": "fluid situation",
    "pos": "phr.",
    "cn_def": "不穩定的局勢",
    "en_def": "a situation that is changing or likely to change.",
    "sentence": "Because it is a highly {{BLANK}}, the company has not yet finalized its exact marketing strategy for the upcoming year.",
    "cn": "因為這是一個高度不穩定的局勢，該公司尚未最終確定其來年的確切行銷策略。"
  },
  {
    "word": "leaked",
    "pos": "v. / n.",
    "cn_def": "漏水；洩漏",
    "en_def": "to accidentally lose or admit contents; a hole through which contents escape.",
    "sentence": "The heavy rain constantly {{BLANK}} through the old wooden roof and eventually flooded Pam's small kitchen during the terrible storm.",
    "cn": "在可怕的風暴中，大雨不斷地從舊木屋頂漏水，並最終淹沒了潘的小廚房。"
  },
  {
    "word": "leak confidential financial information",
    "pos": "phr.",
    "cn_def": "洩漏資訊",
    "en_def": "to intentionally disclose secret or confidential information.",
    "sentence": "The angry former employee decided to anonymously {{BLANK}} to the press to severely damage the company's reputation.",
    "cn": "憤怒的前員工決定匿名向媒體洩漏機密財務資訊，以嚴重損害公司的聲譽。"
  },
  {
    "word": "lung",
    "pos": "n.",
    "cn_def": "肺臟",
    "en_def": "each of the pair of organs situated within the rib cage, consisting of elastic sacs.",
    "sentence": "It is a well-known biological fact that birds and mammals heavily rely on their {{BLANK}} to breathe the surrounding air.",
    "cn": "眾所周知的生物學事實是，鳥類和哺乳動物嚴重依賴牠們的肺臟來呼吸周圍的空氣。"
  },
  {
    "word": "at the top of their lungs",
    "pos": "phr.",
    "cn_def": "聲嘶力竭地",
    "en_def": "as loudly as one's voice will allow.",
    "sentence": "The terrified children on the fast roller coaster were excitedly screaming {{BLANK}} during the steep drop.",
    "cn": "快速雲霄飛車上受驚的孩子們在陡降時正興奮地聲嘶力竭地尖叫。"
  },
  {
    "word": "lung cancer",
    "pos": "phr.",
    "cn_def": "肺癌",
    "en_def": "a cancer that begins in the lungs and most often occurs in people who smoke.",
    "sentence": "The doctor firmly explained that years of heavy smoking had drastically increased the old man's risk of developing {{BLANK}}.",
    "cn": "醫生堅定地解釋說，多年的重度吸菸已急劇增加了這位老人罹患肺癌的風險。"
  },
  {
    "word": "kidney",
    "pos": "n.",
    "cn_def": "腎臟",
    "en_def": "each of a pair of organs in the abdominal cavity excreting urine.",
    "sentence": "Drinking enough fresh water every day is absolutely essential to ensure that your {{BLANK}} can properly filter toxins from your blood.",
    "cn": "每天喝足夠的清水對於確保你的腎臟能適當地過濾血液中的毒素是絕對必要的。"
  },
  {
    "word": "liver",
    "pos": "n.",
    "cn_def": "肝臟",
    "en_def": "a large lobed glandular organ in the abdomen of vertebrates, involved in many metabolic processes.",
    "sentence": "Consuming massive amounts of alcohol over many years will severely damage your {{BLANK}} and lead to potentially fatal health conditions.",
    "cn": "多年來消耗大量酒精將嚴重損害你的肝臟並導致潛在致命的健康狀況。"
  },
  {
    "word": "fatal",
    "pos": "adj.",
    "cn_def": "致命的",
    "en_def": "causing death.",
    "sentence": "Thankfully, Will's sudden and mysterious illness was not {{BLANK}}, and he completely recovered after spending just two weeks in the hospital.",
    "cn": "幸好，威爾突然且神秘的疾病不是致命的，他在醫院只待了兩週就完全康復了。"
  },
  {
    "word": "fatal error",
    "pos": "phr.",
    "cn_def": "致命的錯誤",
    "en_def": "a serious mistake that causes a complete failure.",
    "sentence": "The inexperienced pilot made a completely {{BLANK}} during the heavy storm, which directly caused the small airplane to crash into the mountain.",
    "cn": "缺乏經驗的飛行員在暴風雨中犯了一個完全致命的錯誤，直接導致小飛機撞上山。"
  },
  {
    "word": "death toll",
    "pos": "phr.",
    "cn_def": "死亡人數、死亡總數",
    "en_def": "The total number of people who die in an accident, war, or natural disaster.",
    "sentence": "After the powerful earthquake struck the island, rescue teams worked day and night, but the {{BLANK}} unfortunately continued to rise as more victims were found.",
    "cn": "在強震襲擊這座島嶼之後，救援隊日以繼夜地工作，但隨著發現更多罹難者，死亡人數不幸地持續上升。"
  },
  {
    "word": "mortality rate",
    "pos": "phr.",
    "cn_def": "死亡率",
    "en_def": "The number of deaths in a particular group of people or during a specific period of time.",
    "sentence": "Thanks to advanced medical technology and clean drinking water, the infant {{BLANK}} in this country has dropped significantly over the past twenty years.",
    "cn": "多虧了先進的醫療科技和乾淨的飲用水，這個國家的嬰兒死亡率在過去二十年裡顯著下降。"
  },
  {
    "word": "lethal",
    "pos": "adj.",
    "cn_def": "致命的",
    "en_def": "Able to cause death; extremely dangerous or deadly.",
    "sentence": "The chemical factory accidentally leaked a {{BLANK}} gas into the nearby village, forcing hundreds of residents to evacuate their homes immediately.",
    "cn": "這家化學工廠不小心將一種致命的氣體洩漏到附近的村莊，迫使數百名居民立刻撤離家園。"
  },
  {
    "word": "associate",
    "pos": "v.",
    "cn_def": "聯想；結交",
    "en_def": "to connect someone or something in your mind with someone or something else.",
    "sentence": "I don't think you should continue to {{BLANK}} with those aggressive people because they will constantly cause trouble for your career.",
    "cn": "我不認為你應該繼續與那些具攻擊性的人結交，因為他們會不斷地為你的職涯帶來麻煩。"
  },
  {
    "word": "associate eating cold ice cream with",
    "pos": "phr.",
    "cn_def": "把A和B聯想在一起",
    "en_def": "to make a mental connection between two things.",
    "sentence": "Many people would naturally {{BLANK}} the hot summer, but I personally love to eat it during winter too.",
    "cn": "許多人會自然地把吃冷冰淇淋和炎熱的夏天聯想在一起，但我個人在冬天也很喜歡吃。"
  },
  {
    "word": "is closely associated with",
    "pos": "adj.",
    "cn_def": "相關的",
    "en_def": "connected with something else.",
    "sentence": "Mitch actively wants to find a creative new job that {{BLANK}} modern interior design and architectural planning.",
    "cn": "米奇積極想找一份與現代室內設計和建築規劃密切相關的具創意的新工作。"
  },
  {
    "word": "association",
    "pos": "n.",
    "cn_def": "協會；聯想",
    "en_def": "a connection or cooperative link between people or organizations.",
    "sentence": "The historical neighborhood formed a strong community {{BLANK}} to ensure that the ancient buildings would be protected from greedy property developers.",
    "cn": "這個歷史悠久的社區成立了一個強大的社區協會，以確保古老建築免受貪婪房地產開發商的破壞。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "存款；押金；存放",
    "en_def": "a sum of money kept in a bank; to place or set down.",
    "sentence": "The determined gold miner searched tirelessly for an entire year before he finally found a massive {{BLANK}} of gold deep in the mountains.",
    "cn": "這位意志堅定的淘金者不知疲倦地尋找了整整一年，才終於在深山裡發現了巨大的黃金礦床（沉積）。"
  },
  {
    "word": "pay a very large deposit",
    "pos": "phr.",
    "cn_def": "付押金",
    "en_def": "to pay a sum of money as a first installment on a larger payment.",
    "sentence": "Steve unfortunately had to {{BLANK}} on the expensive sports car before the dealer would let him drive it home.",
    "cn": "史蒂夫不幸地必須為這輛昂貴的跑車付一大筆押金，然後經銷商才願意讓他把它開回家。"
  },
  {
    "word": "make a deposit",
    "pos": "phr.",
    "cn_def": "存錢",
    "en_def": "to put money into a bank account.",
    "sentence": "Tim generally spends half of the money he makes each month, and he goes to the local bank to {{BLANK}} with the other half.",
    "cn": "提姆通常會花掉他每個月賺的一半的錢，然後去當地銀行把另一半存起來。"
  },
  {
    "word": "deposit",
    "pos": "v.",
    "cn_def": "存款、存入",
    "en_def": "To put money into a bank account for safekeeping.",
    "sentence": "After receiving his first paycheck from the new company, Mark immediately went to the bank to {{BLANK}} the money into his savings account.",
    "cn": "在收到新公司的第一筆薪水後，馬克立刻去銀行把錢存入他的儲蓄帳戶。"
  },
  {
    "word": "withdraw money",
    "pos": "phr.",
    "cn_def": "提款、領錢",
    "en_def": "To take money out of a bank account.",
    "sentence": "Because the local night market only accepts cash, we need to find an ATM to {{BLANK}} before we go there to buy some delicious street food.",
    "cn": "因為當地的夜市只收現金，所以我們在去那裡買美味的街頭小吃之前，需要找一台自動提款機來領錢。"
  },
  {
    "word": "deposit",
    "pos": "v.",
    "cn_def": "使沉澱、沉積",
    "en_def": "To drop or leave a layer of a substance, like sand or mud, on a surface over time.",
    "sentence": "When the heavy rain finally stopped, the flooding river began to slow down and {{BLANK}} a thick layer of muddy sediment on the empty farmland.",
    "cn": "當大雨終於停歇時，氾濫的河水開始減緩，並在空曠的農田上沉積了一層厚厚的泥濘沉積物。"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "cn_def": "沉澱物、沉積物",
    "en_def": "A layer of a substance, such as rock, soil, or mud, that has been left naturally on a surface.",
    "sentence": "The geologists studied the thick mineral {{BLANK}} at the bottom of the ancient lake to learn more about the climate changes that happened millions of years ago.",
    "cn": "地質學家研究了古老湖底厚厚的礦物沉積物，以了解更多關於數百萬年前發生的氣候變遷。"
  },
  {
    "word": "mineral deposit",
    "pos": "phr.",
    "cn_def": "礦床",
    "en_def": "a concentration of naturally occurring solid material in the earth's crust.",
    "sentence": "The mining company heavily invested millions of dollars to extract the valuable {{BLANK}} that were discovered beneath the dense jungle.",
    "cn": "礦業公司投入數百萬美元來開採在茂密叢林下方發現的寶貴礦床。"
  },
  {
    "word": "fiber",
    "pos": "n.",
    "cn_def": "纖維",
    "en_def": "dietary material containing substances which are resistant to digestive enzymes.",
    "sentence": "Snacking regularly on fresh fruit and crunchy nuts is a highly effective way to get enough {{BLANK}} in your daily diet.",
    "cn": "規律地把新鮮水果和脆堅果當零食吃，是在你日常飲食中獲得足夠纖維的一種非常有效的方法。"
  },
  {
    "word": "dietary fiber",
    "pos": "phr.",
    "cn_def": "膳食纖維",
    "en_def": "the indigestible portion of food derived from plants.",
    "sentence": "Whole wheat bread naturally contains much more {{BLANK}} than perfectly white bread, making it a significantly healthier choice for lunch.",
    "cn": "全麥麵包天然含有的膳食纖維比完美的白麵包多得多，使其成為午餐明顯更健康的選擇。"
  },
  {
    "word": "calcium",
    "pos": "n.",
    "cn_def": "鈣",
    "en_def": "a white metallic chemical element that occurs naturally in bone and teeth.",
    "sentence": "Drinking fresh milk every morning is a fantastic way to ensure your growing bones receive enough essential {{BLANK}} to stay strong.",
    "cn": "每天早上喝鮮奶是確保你生長中的骨骼獲得足夠必需的鈣以保持強壯的絕佳方式。"
  },
  {
    "word": "protein",
    "pos": "n.",
    "cn_def": "蛋白質",
    "en_def": "a substance found in food that is necessary for the body to grow and be strong.",
    "sentence": "Chicken breast and hard-boiled eggs are excellent sources of lean {{BLANK}}, which is strictly required for building strong muscles after exercise.",
    "cn": "雞胸肉和水煮蛋是優質瘦蛋白質的極佳來源，這是在運動後建立強壯肌肉嚴格需要的。"
  },
  {
    "word": "minerals",
    "pos": "n.",
    "cn_def": "礦物質",
    "en_def": "a solid naturally occurring inorganic substance.",
    "sentence": "This incredibly pure natural spring water contains many healthy {{BLANK}} that are considered essential for maintaining an active human body.",
    "cn": "這種極度純淨的天然泉水含有許多健康的礦物質，這些礦物質被認為是維持活躍人體所必需的。"
  },
  {
    "word": "mineral water",
    "pos": "phr.",
    "cn_def": "礦泉水",
    "en_def": "water from a spring that contains dissolved minerals.",
    "sentence": "While dining at the expensive Italian restaurant, the fancy customers ordered an imported bottle of sparkling {{BLANK}} to pair with their rich meal.",
    "cn": "在昂貴的義大利餐廳用餐時，這些講究的顧客點了一瓶進口的氣泡礦泉水來搭配他們豐盛的一餐。"
  },
  {
    "word": "rich in minerals",
    "pos": "phr.",
    "cn_def": "富含礦物質",
    "en_def": "containing a lot of minerals.",
    "sentence": "The dark, fertile volcanic soil in this tropical region is incredibly {{BLANK}}, making it absolutely perfect for growing healthy coffee plants.",
    "cn": "這個熱帶地區黑暗肥沃的火山土壤極度富含礦物質，使其絕對適合種植健康的咖啡樹。"
  },
  {
    "word": "lightened",
    "pos": "v.",
    "cn_def": "減輕；變亮",
    "en_def": "to make or become lighter in weight, pressure, or severity.",
    "sentence": "The helpful teacher expertly {{BLANK}} the difficult math problem by slowly solving it step-by-step on the blackboard for her confused students.",
    "cn": "樂於助人的老師在黑板上為她困惑的學生一步步慢慢解題，巧妙地減輕（簡化）了這道困難的數學題。"
  },
  {
    "word": "lighten up",
    "pos": "phr.",
    "cn_def": "放輕鬆",
    "en_def": "to become more relaxed and less serious.",
    "sentence": "James really needs to {{BLANK}} and relax a little bit because he has been taking his busy office job far too seriously lately.",
    "cn": "詹姆斯真的需要放輕鬆一點，因為他最近把他繁忙的辦公室工作看得太過嚴肅了。"
  },
  {
    "word": "lighten the load",
    "pos": "phr.",
    "cn_def": "減輕負擔",
    "en_def": "to make a difficult situation easier to deal with.",
    "sentence": "Hiring a highly efficient assistant will quickly {{BLANK}} on the stressed manager and completely prevent him from quitting the company.",
    "cn": "僱用一位高效率的助理將迅速減輕這位壓力過大的經理的負擔，並完全防止他辭職。"
  },
  {
    "word": "lighten the mood",
    "pos": "phr.",
    "cn_def": "緩和氣氛",
    "en_def": "to make a situation less serious or tense.",
    "sentence": "When everyone was arguing in the hot conference room, Dave effectively told a funny joke to successfully {{BLANK}}.",
    "cn": "當大家在炎熱的會議室裡爭吵時，戴夫有效地講了一個好笑的笑話，成功地緩和了氣氛。"
  },
  {
    "word": "conclude",
    "pos": "v.",
    "cn_def": "結束；得出結論",
    "en_def": "to bring something to an end; to arrive at a judgment.",
    "sentence": "After carefully reviewing all the scientific evidence, the detective was forced to {{BLANK}} that the suspect was completely innocent of the terrible crime.",
    "cn": "在仔細審查所有科學證據後，偵探被迫得出結論，該嫌疑犯對這起可怕的罪行是完全無辜的。"
  },
  {
    "word": "conclusion",
    "pos": "n.",
    "cn_def": "結論",
    "en_def": "the end or finish of an event or process; a judgment or decision.",
    "sentence": "Thinking deeply about his future career, Ian finally reached the logical {{BLANK}} that he truly wanted to be an international commercial pilot.",
    "cn": "深入思考他未來的職涯，伊恩最終得出了合乎邏輯的結論，他真正想成為一名國際商業飛行員。"
  },
  {
    "word": "In conclusion",
    "pos": "phr.",
    "cn_def": "總而言之",
    "en_def": "lastly, to sum up.",
    "sentence": "{{BLANK}}, the environmental report clearly shows that we absolutely must reduce our daily carbon emissions to effectively save the beautiful planet.",
    "cn": "總而言之，這份環境報告清楚地顯示我們絕對必須減少日常碳排放量，以有效地拯救這顆美麗的星球。"
  },
  {
    "word": "reach the conclusion",
    "pos": "phr.",
    "cn_def": "得出結論",
    "en_def": "to make a decision or judgement after considering all the information.",
    "sentence": "It took the jury three long days of intense debate to finally {{BLANK}} that the businessman had stolen the money.",
    "cn": "陪審團花了漫長三天的激烈辯論，才終於得出該商人偷了錢的結論。"
  },
  {
    "word": "jump to conclusions",
    "pos": "phr.",
    "cn_def": "妄下定論",
    "en_def": "to guess the facts about a situation without having enough information.",
    "sentence": "You shouldn't blindly {{BLANK}} just because she was completely late for the meeting; she might have been stuck in bad traffic.",
    "cn": "你不應該只因為她開會完全遲到就盲目地妄下定論；她可能只是被困在糟糕的交通中。"
  },
  {
    "word": "modest",
    "pos": "adj.",
    "cn_def": "適度的",
    "en_def": "moderate in the amount.",
    "sentence": "Many top scientists deeply believe that developed countries have unfortunately only devoted {{BLANK}} resources to properly fighting global climate change.",
    "cn": "許多頂尖科學家深信，已開發國家不幸地只投入了適度的（少量的）資源來適當地對抗全球氣候變遷。"
  },
  {
    "word": "modestly",
    "pos": "adv.",
    "cn_def": "謙虛地",
    "en_def": "in a modest manner.",
    "sentence": "Despite winning the prestigious international award, the talented author {{BLANK}} stated that she simply couldn't have successfully done it without her brilliant editor.",
    "cn": "儘管贏得了著名的國際獎項，這位才華洋溢的作家謙虛地表示，如果沒有她傑出的編輯，她根本不可能成功做到。"
  },
  {
    "word": "modest",
    "pos": "adj.",
    "cn_def": "謙虛的；端莊的；適度的",
    "en_def": "humble in estimating one's own abilities or achievements, or relatively moderate in size",
    "sentence": "Despite winning the national programming championship, the {{BLANK}} engineer remained quiet about his exceptional tech skills.",
    "cn": "儘管贏得了全國程式設計冠軍賽，這位謙虛的工程師對自己卓越的科技才能依然保持低調。"
  },
  {
    "word": "modesty",
    "pos": "n.",
    "cn_def": "謙遜",
    "en_def": "the quality or state of being unassuming or moderate.",
    "sentence": "Her unbelievable {{BLANK}} prevents her from openly talking about her massive wealth, so most of her friends actually think she is quite poor.",
    "cn": "她令人難以置信的謙遜讓她無法公開談論她龐大的財富，所以她的大多數朋友其實都認為她相當窮。"
  },
  {
    "word": "moderate",
    "pos": "adj.",
    "cn_def": "中等的；適度的",
    "en_def": "average in amount, intensity, quality, or degree.",
    "sentence": "The experienced doctor strictly advised him to engage in {{BLANK}} exercise daily rather than violently pushing himself too hard at the heavy gym.",
    "cn": "經驗豐富的醫生嚴格建議他每天進行適度的運動，而不是在繁重的健身房裡猛烈地過度逼迫自己。"
  },
  {
    "word": "humble",
    "pos": "adj.",
    "cn_def": "謙卑的",
    "en_def": "having or showing a modest or low estimate of one's own importance.",
    "sentence": "Even though Jon is arguably the most famous actor in Hollywood, he remains a deeply {{BLANK}} and incredibly friendly person to all his fans.",
    "cn": "即使喬恩可以說是好萊塢最著名的演員，他對所有粉絲仍然是一個極度謙卑的且極其友善的人。"
  },
  {
    "word": "arrogant",
    "pos": "adj.",
    "cn_def": "傲慢的",
    "en_def": "having or revealing an exaggerated sense of one's own importance or abilities.",
    "sentence": "The highly successful businessman was so ridiculously {{BLANK}} that he absolutely refused to listen to anyone else's professional opinions during the important meeting.",
    "cn": "這位非常成功的商人是如此荒謬地傲慢的，以至於在重要會議期間他絕對拒絕聽取任何其他人的專業意見。"
  },
  {
    "word": "arrogance",
    "pos": "n.",
    "cn_def": "傲慢、自大",
    "en_def": "The quality of being unpleasantly proud and thinking you are more important than others.",
    "sentence": "Although Kenny is an extremely talented piano player, his constant {{BLANK}} often annoys his classmates and makes it difficult for him to make close friends.",
    "cn": "雖然肯尼是一位極具天賦的鋼琴家，但他揮之不去的傲慢常常惹惱班上同學，也讓他很難交到知心的朋友。"
  },
  {
    "word": "snob",
    "pos": "n.",
    "cn_def": "勢利鬼、愛慕虛榮的人",
    "en_def": "A person who admires people with high social positions and looks down on those who are lower.",
    "sentence": "Amanda is such a {{BLANK}} that she refuses to speak to anyone who doesn't wear expensive designer clothes or drive a luxury sports car.",
    "cn": "阿曼達是個不折不扣的勢利鬼，她拒絕與任何不穿昂貴名牌衣服或不開豪華跑車的人說話。"
  },
  {
    "word": "show off",
    "pos": "phr.",
    "cn_def": "炫耀、賣弄",
    "en_def": "To behave in a way that is intended to attract attention or admiration from other people.",
    "sentence": "Whenever Ryan gets a perfect score on a math test, he always tries to {{BLANK}} to everyone in the classroom, which really irritates his peers.",
    "cn": "每當萊恩在數學考試中獲得滿分時，他總是在教室裡向每個人炫耀，這真的很讓他的同儕反感。"
  },
  {
    "word": "boast about",
    "pos": "phr.",
    "cn_def": "自誇、誇耀",
    "en_def": "To speak too proudly about your own abilities, achievements, or possessions.",
    "sentence": "Our wealthy neighbor loves to {{BLANK}} his expensive trips abroad, but nobody likes to talk to him because he never listens to others.",
    "cn": "我們富裕的鄰居很喜歡誇耀他昂貴的國外旅行，但沒有人喜歡跟他聊天，因為他從不聽別人說話。"
  },
  {
    "word": "bragged about",
    "pos": "phr.",
    "cn_def": "吹噓...；誇耀...",
    "en_def": "to speak too proudly, boastfully, or with excessive satisfaction about one's achievements or possessions",
    "sentence": "The arrogant contestant continuously {{BLANK}} his athletic records to impress the media representatives.",
    "cn": "這位傲慢的參賽者不斷吹噓自己的運動紀錄，以給媒體代表留下深刻印象。"
  },
  {
    "word": "flaunt",
    "pos": "v.",
    "cn_def": "炫耀；張揚（動詞）",
    "en_def": "to display something ostentatiously or proudly in public to intentionally provoke envy or admiration",
    "sentence": "It is considered highly unprofessional to {{BLANK}} one's personal wealth or corporate revenue during a serious labor strike.",
    "cn": "在嚴肅的工會 strike 期間，炫耀個人財富或公司營收被視為高度不專業的行為。"
  },
  {
    "word": "flex",
    "pos": "v.",
    "cn_def": "炫耀、愛現（流行語）",
    "en_def": "To show off your looks, wealth, or achievements in a boastful way (informal slang).",
    "sentence": "Many teenagers like to {{BLANK}} on social media by posting pictures of their expensive sneakers, even though their parents paid for them.",
    "cn": "許多青少年喜歡在社群媒體上炫耀，發布他們昂貴球鞋的照片，即使這些鞋子是他們父母付錢買的。"
  },
  {
    "word": "irritate",
    "pos": "v.",
    "cn_def": "使發怒；使惱火；使過敏",
    "en_def": "to make someone feel annoyed, impatient, or angry, or to cause a part of the body to become sore",
    "sentence": "The loud construction noise from the commercial area outside would consistently {{BLANK}} the residents during their morning hours.",
    "cn": "外部商業區傳來的巨大施工噪音，在上午時段總是會使居民們感到惱火。"
  },
  {
    "word": "irritation",
    "pos": "n.",
    "cn_def": "惱怒；生氣；過敏不適",
    "en_def": "the state of feeling annoyed or impatient, or a painful soreness in a specific part of the body",
    "sentence": "The young entrepreneur expressed deep {{BLANK}} when the critical automated server framework suddenly stopped functioning.",
    "cn": "當關鍵的自動化伺服器架構突然停止運作時，這位年輕的企業家表達了深切的惱怒。"
  },
  {
    "word": "irritating",
    "pos": "adj.",
    "cn_def": "令人惱火的；討厭的",
    "en_def": "causing annoyance, impatience, or mild anger through repetitive or undesirable actions",
    "sentence": "Every student agreed that filling out the poorly designed research questionnaire was an exceptionally {{BLANK}} task.",
    "cn": "每個學生都同意，填寫那份設計不良的研究問卷是一項格外令人惱火的任務。"
  },
  {
    "word": "intimidate",
    "pos": "v.",
    "cn_def": "恐嚇；脅迫；嚇唬",
    "en_def": "to frighten or threaten someone, typically in order to force them to do what one wants",
    "sentence": "The aggressive gang attempted to {{BLANK}} the honest store owner into giving them a massive sum of money.",
    "cn": "那個具攻擊性的幫派企圖恐嚇這位誠實的店主，以強迫他給他們一大筆錢。"
  },
  {
    "word": "intimidating",
    "pos": "adj.",
    "cn_def": "令人緊張的；嚇人的",
    "en_def": "causing one to feel frightened, nervous, or lacking in confidence due to scale or nature",
    "sentence": "Moving away from a quiet suburb to start a new tech corporation in Taipei can be an {{BLANK}} experience.",
    "cn": "從寧靜的郊區搬走，並在台北創立一家新的科技大企業，可能會是一次令人緊張的經驗。"
  },
  {
    "word": "intimidation",
    "pos": "n.",
    "cn_def": "恐嚇；恫嚇；脅迫",
    "en_def": "the action of intentionally frightening or threatening someone to force submissive behavior",
    "sentence": "The unyielding dictator fiercely used military {{BLANK}} to crush any potential political opposition across the country.",
    "cn": "這位不屈服的獨裁者猛烈地利用軍事恐嚇，來鎮壓全國任何潛在的政治反對勢力。"
  },
  {
    "word": "attempt",
    "pos": "v.",
    "cn_def": "企圖；嘗試（動詞）",
    "en_def": "to make an effort to do, achieve, or complete a challenging task or scientific experiment",
    "sentence": "The medical research staff will {{BLANK}} to isolate the highly invasive bacterial species during the controlled laboratory experiment.",
    "cn": "醫療研究人員將在受控的實驗室實驗中，嘗試分離出這種高度侵入性的細菌物種。"
  },
  {
    "word": "attempt",
    "pos": "n.",
    "cn_def": "企圖；嘗試（名詞）",
    "en_def": "an act of trying to achieve or complete something difficult, often used with collocations like make an attempt",
    "sentence": "The young entrepreneur made a bold {{BLANK}} to modernize the daily operation of the traditional family corporation.",
    "cn": "這位年輕的企業家做出了一次大膽的嘗試，企圖使傳統家族大企業的日常運營走向現代化。"
  },
  {
    "word": "make an attempt to",
    "pos": "phr.",
    "cn_def": "試圖去...；嘗試去...",
    "en_def": "to systematically try or endeavor to do something, especially a challenging task or project",
    "sentence": "The dedicated medical staff will {{BLANK}} isolate the invasive bacterial species during the controlled laboratory experiment.",
    "cn": "盡責的醫療團隊將在受控的實驗室實驗中，嘗試分離出這種侵入性的細菌物種。"
  },
  {
    "word": "overdo",
    "pos": "v.",
    "cn_def": "做得過分；過度",
    "en_def": "to do, use, or carry to excess; exaggerate.",
    "sentence": "Expensive spices certainly add greatly to the delicious flavor of the hot soup, but you really shouldn't {{BLANK}} it or you'll ruin it entirely.",
    "cn": "昂貴的香料確實能大大增加熱湯的美味，但你真的不應該過度使用，否則你會徹底毀了它。"
  },
  {
    "word": "went too far",
    "pos": "phr.",
    "cn_def": "做得太過分",
    "en_def": "to exceed the limits of what is reasonable or acceptable.",
    "sentence": "I usually completely tolerate your silly jokes, but this time you truly {{BLANK}} by insulting my family members.",
    "cn": "我通常完全容忍你愚蠢的笑話，但這次你侮辱我的家人，真的做得太過分了。"
  },
  {
    "word": "overeat",
    "pos": "v.",
    "cn_def": "吃得過飽",
    "en_def": "to eat too much.",
    "sentence": "It is incredibly easy to accidentally {{BLANK}} when you are happily enjoying a massive holiday feast with your beloved family and closest friends.",
    "cn": "當你快樂地與深愛的家人和最親密的朋友享受一頓豐盛的節日大餐時，不小心吃得過飽是極其容易的事。"
  },
  {
    "word": "overuse",
    "pos": "v.",
    "cn_def": "過度使用",
    "en_def": "to use something too much or too often.",
    "sentence": "Doctors frequently warn that if you continuously {{BLANK}} antibiotics, the dangerous bacteria will quickly become highly resistant to the life-saving medicine.",
    "cn": "醫生經常警告，如果你持續過度使用抗生素，危險的細菌將很快對這種救命的藥物產生高度抗藥性。"
  },
  {
    "word": "overloaded",
    "pos": "v.",
    "cn_def": "超載；負荷過多",
    "en_def": "to load with too great a burden or cargo.",
    "sentence": "The ambitious manager completely {{BLANK}} the new employee with too many complex tasks, causing her to feel deeply stressed and constantly anxious.",
    "cn": "雄心勃勃的經理完全讓新員工負荷過多太多的複雜任務，導致她感到壓力極大且持續焦慮。"
  },
  {
    "word": "overweight",
    "pos": "adj.",
    "cn_def": "超重的",
    "en_def": "above a weight considered normal or desirable.",
    "sentence": "The veterinarian kindly informed us that our lazy dog is slightly {{BLANK}} and needs to start walking outside in the park much more often.",
    "cn": "獸醫親切地通知我們，我們懶惰的狗有點超重的，需要開始更常去公園外面散步。"
  },
  {
    "word": "overwhelm",
    "pos": "v.",
    "cn_def": "（數量、力量上）壓倒、使難以承受、使不知所措",
    "en_def": "To defeat someone completely, or to give someone too much of something to deal with.",
    "sentence": "The massive amount of customer complaints after the product launch threatens to {{BLANK}} the small support team, so the manager is hiring temporary workers.",
    "cn": "產品上市後大量的客戶投訴恐怕會壓倒這個小型的客服團隊，因此經理正在雇用臨時工。"
  },
  {
    "word": "was overwhelmed with",
    "pos": "phr.",
    "cn_def": "被大量（某物）淹沒、收到多到無法應付的（某物）",
    "en_def": "To receive or be faced with a huge number of physical things at once.",
    "sentence": "Following the celebrity's public announcement, the charity office {{BLANK}} hundreds of donation packages from supportive fans across the country.",
    "cn": "在該名人的公開聲明之後，慈善機構辦公室被來自全國支持粉絲的數百個捐贈包裹淹沒了。"
  },
  {
    "word": "is overwhelmed with workload",
    "pos": "phr.",
    "cn_def": "被工作量壓得喘不過氣、工作量大到無法負荷",
    "en_def": "To have too much work to do, causing stress or a feeling of being unable to cope.",
    "sentence": "Since two employees suddenly resigned last week, the remaining secretary {{BLANK}}, and she has to stay late every night to finish the reports.",
    "cn": "自從上週兩名員工突然辭職後，留下來的秘書被工作量壓得喘不過氣，她每天晚上都必須加班到很晚才能完成報告。"
  },
  {
    "word": "was overwhelmed with",
    "pos": "phr.",
    "cn_def": "內心充斥著（某種情緒）、被（某種情緒）淹沒",
    "en_def": "To feel a sudden, very strong emotion that is difficult to control.",
    "sentence": "When the young scientist won the prestigious international award, she {{BLANK}} joy and gave a tearful speech thanking her parents.",
    "cn": "當這名年輕的科學家贏得這項著名的國際獎項時，她心中充斥著喜悅，並發表了一段含淚感謝父母的演講。"
  },
  {
    "word": "overthrow",
    "pos": "v.",
    "cn_def": "推翻、打倒",
    "en_def": "To remove a leader or government from power by using force.",
    "sentence": "The rebel army managed to {{BLANK}} the cruel dictator after months of violent protests, and they immediately established a new democratic government.",
    "cn": "在數個月的暴力抗議之後，反叛軍成功推翻了殘暴的獨裁者，並立刻建立了一個新的民主政府。"
  },
  {
    "word": "overtake",
    "pos": "v.",
    "cn_def": "超車、超過、追上",
    "en_def": "To catch up with and pass someone or something moving in the same direction.",
    "sentence": "The professional racing driver managed to {{BLANK}} his rival on the final lap of the race, which surprised the audience and won him the championship.",
    "cn": "這位職業賽車手在比賽的最後一圈成功超過了他的對手，這讓觀眾非常驚訝，也為他贏得了冠軍。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服、戰勝",
    "en_def": "To successfully control or deal with a problem, feeling, or difficult situation.",
    "sentence": "If you want to speak English fluently, you must {{BLANK}} your fear of making mistakes and practice talking with native speakers as often as possible.",
    "cn": "如果你想流利地說英文，你必須克服對犯錯的恐懼，並儘可能經常與母語人士練習說話。"
  },
  {
    "word": "overcome a challenge",
    "pos": "phr.",
    "cn_def": "克服挑戰、戰勝挑戰",
    "en_def": "To successfully deal with a difficult task or situation that tests your abilities.",
    "sentence": "Although building a rocket required advanced technology, the young engineers managed to {{BLANK}} through teamwork and months of hard work.",
    "cn": "雖然建造火箭需要先進的科技，但這群年輕的工程師透過團隊合作和數個月的努力，成功克服了挑戰。"
  },
  {
    "word": "overcome a shortcoming",
    "pos": "phr.",
    "cn_def": "克服缺點、彌補不足",
    "en_def": "To successfully correct or improve a weakness or fault in your character or ability.",
    "sentence": "Recognizing that he was often late, Jerry worked hard to {{BLANK}} by setting multiple alarms on his phone every single night.",
    "cn": "意識到自己經常遲到後，傑瑞透過每天晚上在手機上設置多個鬧鐘，努力去克服這個缺點。"
  },
  {
    "word": "overcome a hardship",
    "pos": "phr.",
    "cn_def": "熬過困境、克服艱難",
    "en_def": "To successfully get through a period of severe suffering or difficult living conditions.",
    "sentence": "The poor family managed to {{BLANK}} of losing their home after the flood because the local community provided them with food and shelter.",
    "cn": "水災過後，這戶貧困的家庭成功熬過了失去家園的困境，因為當地社區為他們提供了食物和庇護所。"
  },
  {
    "word": "overcome an obstacle",
    "pos": "phr.",
    "cn_def": "克服障礙、跨越阻礙",
    "en_def": "To successfully deal with something that blocks your progress or makes it difficult to achieve a goal.",
    "sentence": "The lack of funding was a major problem, but the research team managed to {{BLANK}} by presenting their brilliant project to rich investors.",
    "cn": "缺乏資金是一個主要問題，但研究團隊透過向富有的投資人展示他們出色的專案，成功克服了這個障礙。"
  },
  {
    "word": "overcome an adversity",
    "pos": "phr.",
    "cn_def": "戰勝逆境、克服不幸",
    "en_def": "To successfully deal with a very difficult, unlucky, or unpleasant situation.",
    "sentence": "Having lost both legs in a terrible accident, the brave athlete managed to {{BLANK}} and eventually won a gold medal at the Paralympic Games.",
    "cn": "在一場可怕的事故中失去雙腿後，這位勇敢的運動員成功戰勝了逆境，並最終在帕拉林匹克運動會上贏得了金牌。"
  }
];

const MCQS = [
  {
    "q": "Old people should always ask their ______ before starting any kind of new and strenuous exercise routine.",
    "options": [
      "modesty",
      "irritation",
      "minerals",
      "physician"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The highly skilled ______ successfully completed the complex heart operation after standing in the operating room for ten hours.",
    "options": [
      "swelling",
      "irritation",
      "surgeon",
      "attempt"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "You really need to visit the ______ every six months to ensure that your teeth and gums remain perfectly healthy.",
    "options": [
      "shortage",
      "dentist",
      "swelling",
      "minerals"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The head doctor told the patient that undergoing major ______ was the only way to treat the illness safely.",
    "options": [
      "surgery",
      "deposit",
      "leaked",
      "modesty"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The professional medical team successfully ______ for 3 hours on the patient's heart this morning.",
    "options": [
      "make a deposit",
      "overcome an adversity",
      "overcome an obstacle",
      "perform an operation"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The military commander organized a top-secret rescue ______ to save the citizens trapped inside the remote zone.",
    "options": [
      "attempt",
      "entrepreneur",
      "operation",
      "shortage"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The ambitious entrepreneur completely modernized the daily ______ of the international corporation by deploying automated AI tools.",
    "options": [
      "operation",
      "arrogance",
      "shortage",
      "minerals"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Every young ______ dreams of designing a customizable learning platform that can completely change the global educational landscape.",
    "options": [
      "deposit",
      "entrepreneur",
      "harm",
      "dentist"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The international technology ______ decided to fund a new business expansion project to attract additional wealthy investors.",
    "options": [
      "corporation",
      "leaked",
      "swelling",
      "irritation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Thanks to the manager's meticulous lesson planning and organization, the entire product testing phase did ______.",
    "options": [
      "dietary fiber",
      "go smoothly",
      "do harm to",
      "lighten the mood"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Even when things would ______ for him, Kevin always tried his best to remain optimistic and keep smiling.",
    "options": [
      "pay a very large deposit",
      "boast about",
      "go badly",
      "perform an operation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The exhausted charity workers ______ more volunteers to help distribute the food to the homeless people in the city.",
    "options": [
      "associate eating cold ice cream with",
      "overcome a hardship",
      "overcome an adversity",
      "badly needed"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mean posts and comments of trolls ______ the celebrity's reputation.",
    "options": [
      "flaunt",
      "harm",
      "overcome",
      "conclude"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "My father was incredibly happy that there was no ______ to his expensive new car after the severe thunderstorm.",
    "options": [
      "swelling",
      "surgeon",
      "irritation",
      "harm"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The doctor warned that eating too much fast food and sugary snacks may eventually ______ your stomach.",
    "options": [
      "do harm to",
      "a sudden shortage of",
      "badly needed",
      "pay a very large deposit"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "I really don't know why Charles is so mad at me, because I have ______ him whatsoever.",
    "options": [
      "overcome a hardship",
      "lung cancer",
      "done no harm to",
      "mineral deposit"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "I honestly think that continually pressuring Jerry to get a summer job will probably ______.",
    "options": [
      "associate eating cold ice cream with",
      "done no harm to",
      "is overwhelmed with workload",
      "do more harm than good"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Releasing these toxic chemicals into the local river is incredibly ______ to the delicate ecosystem and the surrounding wildlife.",
    "options": [
      "fatal",
      "harmful",
      "harmless",
      "irritating"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The large green snake might look incredibly frightening, but it is actually completely ______ to humans and pets.",
    "options": [
      "fluid",
      "moderate",
      "harmless",
      "intimidating"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Due to the changing climate, major cities all over the world have been experiencing serious water ______ recently.",
    "options": [
      "shortage",
      "intimidation",
      "attempt",
      "calcium"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The harsh winter drought destroyed most of the crops, leading to a terrible ______ in the isolated farming village.",
    "options": [
      "boast about",
      "food shortage",
      "In conclusion",
      "dietary fiber"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "There was ______ cashiers working today, so Marshall had to wait in a very long line.",
    "options": [
      "overcome an obstacle",
      "perform an operation",
      "go smoothly",
      "a sudden shortage of"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The hospital is severely ______ of experienced nursing staff, making it difficult to properly care for all the sick patients.",
    "options": [
      "short",
      "fluid",
      "moderate",
      "harmful"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The company's final yearly profits unfortunately ______ the ambitious expectations that the rich investors had originally set.",
    "options": [
      "is overwhelmed with workload",
      "do more harm than good",
      "fell short of",
      "overcome a shortcoming"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "When Gina accidentally hurt her ankle during the game, it quickly ______ to twice the normal size and turned purple.",
    "options": [
      "jump to conclusions",
      "swelled",
      "fluid situation",
      "was overwhelmed with"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After hiking in the humid jungle for ten hours, my feet were incredibly sore and completely ______ inside my boots.",
    "options": [
      "swollen",
      "moderate",
      "modest",
      "overweight"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "You should immediately apply an ice pack to your injured knee to effectively reduce the painful ______ before tomorrow.",
    "options": [
      "lung",
      "kidney",
      "swelling",
      "conclusion"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The professional ballet dancers had to carefully move their bodies in a completely ______ manner to match the classical music.",
    "options": [
      "harmless",
      "arrogant",
      "modest",
      "fluid"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Doctors must wear special protective gloves to prevent any dangerous contact with infected ______ while treating the patients.",
    "options": [
      "body fluid",
      "overcome a challenge",
      "bragged about",
      "was overwhelmed with"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Because it is a highly ______, the company has not yet finalized its exact marketing strategy for the upcoming year.",
    "options": [
      "at the top of their lungs",
      "overcome a challenge",
      "lighten up",
      "fluid situation"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The heavy rain constantly ______ through the old wooden roof and eventually flooded Pam's small kitchen during the terrible storm.",
    "options": [
      "entrepreneur",
      "leaked",
      "conclusion",
      "dentist"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The angry former employee decided to anonymously ______ to the press to severely damage the company's reputation.",
    "options": [
      "a sudden shortage of",
      "do more harm than good",
      "leak confidential financial information",
      "withdraw money"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "It is a well-known biological fact that birds and mammals heavily rely on their ______ to breathe the surrounding air.",
    "options": [
      "fiber",
      "physician",
      "irritation",
      "lung"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The terrified children on the fast roller coaster were excitedly screaming ______ during the steep drop.",
    "options": [
      "at the top of their lungs",
      "rich in minerals",
      "leak confidential financial information",
      "body fluid"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The doctor firmly explained that years of heavy smoking had drastically increased the old man's risk of developing ______.",
    "options": [
      "went too far",
      "at the top of their lungs",
      "lung cancer",
      "make a deposit"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Drinking enough fresh water every day is absolutely essential to ensure that your ______ can properly filter toxins from your blood.",
    "options": [
      "operation",
      "kidney",
      "liver",
      "surgeon"
    ],
    "answer": 1,
    "vocabIndex": 35
  },
  {
    "q": "Consuming massive amounts of alcohol over many years will severely damage your ______ and lead to potentially fatal health conditions.",
    "options": [
      "liver",
      "intimidation",
      "association",
      "leaked"
    ],
    "answer": 0,
    "vocabIndex": 36
  },
  {
    "q": "Thankfully, Will's sudden and mysterious illness was not ______, and he completely recovered after spending just two weeks in the hospital.",
    "options": [
      "swollen",
      "fatal",
      "lethal",
      "intimidating"
    ],
    "answer": 1,
    "vocabIndex": 37
  },
  {
    "q": "The inexperienced pilot made a completely ______ during the heavy storm, which directly caused the small airplane to crash into the mountain.",
    "options": [
      "overcome a challenge",
      "pay a very large deposit",
      "fatal error",
      "go badly"
    ],
    "answer": 2,
    "vocabIndex": 38
  },
  {
    "q": "After the powerful earthquake struck the island, rescue teams worked day and night, but the ______ unfortunately continued to rise as more victims were found.",
    "options": [
      "dietary fiber",
      "mortality rate",
      "mineral deposit",
      "death toll"
    ],
    "answer": 3,
    "vocabIndex": 39
  },
  {
    "q": "Thanks to advanced medical technology and clean drinking water, the infant ______ in this country has dropped significantly over the past twenty years.",
    "options": [
      "mortality rate",
      "go smoothly",
      "fluid situation",
      "show off"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "The chemical factory accidentally leaked a ______ gas into the nearby village, forcing hundreds of residents to evacuate their homes immediately.",
    "options": [
      "irritating",
      "lethal",
      "intimidating",
      "short"
    ],
    "answer": 1,
    "vocabIndex": 41
  },
  {
    "q": "I don't think you should continue to ______ with those aggressive people because they will constantly cause trouble for your career.",
    "options": [
      "harm",
      "overwhelm",
      "associate",
      "flex"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "Many people would naturally ______ the hot summer, but I personally love to eat it during winter too.",
    "options": [
      "show off",
      "was overwhelmed with",
      "at the top of their lungs",
      "associate eating cold ice cream with"
    ],
    "answer": 3,
    "vocabIndex": 43
  },
  {
    "q": "Mitch actively wants to find a creative new job that ______ modern interior design and architectural planning.",
    "options": [
      "jump to conclusions",
      "is closely associated with",
      "at the top of their lungs",
      "overcome an obstacle"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The historical neighborhood formed a strong community ______ to ensure that the ancient buildings would be protected from greedy property developers.",
    "options": [
      "association",
      "modesty",
      "entrepreneur",
      "leaked"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "The determined gold miner searched tirelessly for an entire year before he finally found a massive ______ of gold deep in the mountains.",
    "options": [
      "kidney",
      "swelling",
      "deposit",
      "intimidation"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "Steve unfortunately had to ______ on the expensive sports car before the dealer would let him drive it home.",
    "options": [
      "a sudden shortage of",
      "overcome an obstacle",
      "do harm to",
      "pay a very large deposit"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "Tim generally spends half of the money he makes each month, and he goes to the local bank to ______ with the other half.",
    "options": [
      "a sudden shortage of",
      "make a deposit",
      "was overwhelmed with",
      "at the top of their lungs"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "After receiving his first paycheck from the new company, Mark immediately went to the bank to ______ the money into his savings account.",
    "options": [
      "harm",
      "overwhelm",
      "irritate",
      "deposit"
    ],
    "answer": 3,
    "vocabIndex": 49
  },
  {
    "q": "Because the local night market only accepts cash, we need to find an ATM to ______ before we go there to buy some delicious street food.",
    "options": [
      "overcome a hardship",
      "food shortage",
      "withdraw money",
      "go smoothly"
    ],
    "answer": 2,
    "vocabIndex": 50
  },
  {
    "q": "When the heavy rain finally stopped, the flooding river began to slow down and ______ a thick layer of muddy sediment on the empty farmland.",
    "options": [
      "deposit",
      "conclude",
      "intimidate",
      "associate"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "The geologists studied the thick mineral ______ at the bottom of the ancient lake to learn more about the climate changes that happened millions of years ago.",
    "options": [
      "minerals",
      "irritation",
      "deposit",
      "leaked"
    ],
    "answer": 2,
    "vocabIndex": 52
  },
  {
    "q": "The mining company heavily invested millions of dollars to extract the valuable ______ that were discovered beneath the dense jungle.",
    "options": [
      "reach the conclusion",
      "mineral deposit",
      "body fluid",
      "dietary fiber"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "Snacking regularly on fresh fruit and crunchy nuts is a highly effective way to get enough ______ in your daily diet.",
    "options": [
      "fiber",
      "minerals",
      "association",
      "intimidation"
    ],
    "answer": 0,
    "vocabIndex": 54
  },
  {
    "q": "Whole wheat bread naturally contains much more ______ than perfectly white bread, making it a significantly healthier choice for lunch.",
    "options": [
      "pay a very large deposit",
      "lighten up",
      "do more harm than good",
      "dietary fiber"
    ],
    "answer": 3,
    "vocabIndex": 55
  },
  {
    "q": "Drinking fresh milk every morning is a fantastic way to ensure your growing bones receive enough essential ______ to stay strong.",
    "options": [
      "calcium",
      "surgeon",
      "swelling",
      "entrepreneur"
    ],
    "answer": 0,
    "vocabIndex": 56
  },
  {
    "q": "Chicken breast and hard-boiled eggs are excellent sources of lean ______, which is strictly required for building strong muscles after exercise.",
    "options": [
      "attempt",
      "leaked",
      "operation",
      "protein"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "This incredibly pure natural spring water contains many healthy ______ that are considered essential for maintaining an active human body.",
    "options": [
      "corporation",
      "attempt",
      "minerals",
      "leaked"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "While dining at the expensive Italian restaurant, the fancy customers ordered an imported bottle of sparkling ______ to pair with their rich meal.",
    "options": [
      "go badly",
      "mineral water",
      "is closely associated with",
      "associate eating cold ice cream with"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "The dark, fertile volcanic soil in this tropical region is incredibly ______, making it absolutely perfect for growing healthy coffee plants.",
    "options": [
      "mineral deposit",
      "lung cancer",
      "rich in minerals",
      "boast about"
    ],
    "answer": 2,
    "vocabIndex": 60
  },
  {
    "q": "The helpful teacher expertly ______ the difficult math problem by slowly solving it step-by-step on the blackboard for her confused students.",
    "options": [
      "associate",
      "lightened",
      "irritate",
      "flaunt"
    ],
    "answer": 1,
    "vocabIndex": 61
  },
  {
    "q": "James really needs to ______ and relax a little bit because he has been taking his busy office job far too seriously lately.",
    "options": [
      "fluid situation",
      "go smoothly",
      "mortality rate",
      "lighten up"
    ],
    "answer": 3,
    "vocabIndex": 62
  },
  {
    "q": "Hiring a highly efficient assistant will quickly ______ on the stressed manager and completely prevent him from quitting the company.",
    "options": [
      "lighten the load",
      "a sudden shortage of",
      "perform an operation",
      "lighten up"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "When everyone was arguing in the hot conference room, Dave effectively told a funny joke to successfully ______.",
    "options": [
      "make a deposit",
      "lighten the mood",
      "fatal error",
      "lighten the load"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "After carefully reviewing all the scientific evidence, the detective was forced to ______ that the suspect was completely innocent of the terrible crime.",
    "options": [
      "conclude",
      "overwhelm",
      "overeat",
      "flaunt"
    ],
    "answer": 0,
    "vocabIndex": 65
  },
  {
    "q": "Thinking deeply about his future career, Ian finally reached the logical ______ that he truly wanted to be an international commercial pilot.",
    "options": [
      "shortage",
      "deposit",
      "fiber",
      "conclusion"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "______, the environmental report clearly shows that we absolutely must reduce our daily carbon emissions to effectively save the beautiful planet.",
    "options": [
      "a sudden shortage of",
      "overcome a challenge",
      "In conclusion",
      "food shortage"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "It took the jury three long days of intense debate to finally ______ that the businessman had stolen the money.",
    "options": [
      "reach the conclusion",
      "lighten the load",
      "fatal error",
      "mineral deposit"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "You shouldn't blindly ______ just because she was completely late for the meeting; she might have been stuck in bad traffic.",
    "options": [
      "is overwhelmed with workload",
      "mortality rate",
      "jump to conclusions",
      "badly needed"
    ],
    "answer": 2,
    "vocabIndex": 69
  },
  {
    "q": "Many top scientists deeply believe that developed countries have unfortunately only devoted ______ resources to properly fighting global climate change.",
    "options": [
      "moderate",
      "modest",
      "humble",
      "overweight"
    ],
    "answer": 1,
    "vocabIndex": 70
  },
  {
    "q": "Despite winning the prestigious international award, the talented author ______ stated that she simply couldn't have successfully done it without her brilliant editor.",
    "options": [
      "pay a very large deposit",
      "conclude",
      "entrepreneur",
      "modestly"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "Despite winning the national programming championship, the ______ engineer remained quiet about his exceptional tech skills.",
    "options": [
      "overweight",
      "modest",
      "swollen",
      "fatal"
    ],
    "answer": 1,
    "vocabIndex": 72
  },
  {
    "q": "Her unbelievable ______ prevents her from openly talking about her massive wealth, so most of her friends actually think she is quite poor.",
    "options": [
      "surgery",
      "conclusion",
      "modesty",
      "intimidation"
    ],
    "answer": 2,
    "vocabIndex": 73
  },
  {
    "q": "The experienced doctor strictly advised him to engage in ______ exercise daily rather than violently pushing himself too hard at the heavy gym.",
    "options": [
      "moderate",
      "fatal",
      "irritating",
      "arrogant"
    ],
    "answer": 0,
    "vocabIndex": 74
  },
  {
    "q": "Even though Jon is arguably the most famous actor in Hollywood, he remains a deeply ______ and incredibly friendly person to all his fans.",
    "options": [
      "fatal",
      "lethal",
      "irritating",
      "humble"
    ],
    "answer": 3,
    "vocabIndex": 75
  },
  {
    "q": "The highly successful businessman was so ridiculously ______ that he absolutely refused to listen to anyone else's professional opinions during the important meeting.",
    "options": [
      "arrogant",
      "fluid",
      "irritating",
      "harmless"
    ],
    "answer": 0,
    "vocabIndex": 76
  },
  {
    "q": "Although Kenny is an extremely talented piano player, his constant ______ often annoys his classmates and makes it difficult for him to make close friends.",
    "options": [
      "lung",
      "harm",
      "calcium",
      "arrogance"
    ],
    "answer": 3,
    "vocabIndex": 77
  },
  {
    "q": "Amanda is such a ______ that she refuses to speak to anyone who doesn't wear expensive designer clothes or drive a luxury sports car.",
    "options": [
      "modesty",
      "liver",
      "snob",
      "operation"
    ],
    "answer": 2,
    "vocabIndex": 78
  },
  {
    "q": "Whenever Ryan gets a perfect score on a math test, he always tries to ______ to everyone in the classroom, which really irritates his peers.",
    "options": [
      "associate eating cold ice cream with",
      "show off",
      "lighten the mood",
      "overcome a challenge"
    ],
    "answer": 1,
    "vocabIndex": 79
  },
  {
    "q": "Our wealthy neighbor loves to ______ his expensive trips abroad, but nobody likes to talk to him because he never listens to others.",
    "options": [
      "boast about",
      "fluid situation",
      "go badly",
      "a sudden shortage of"
    ],
    "answer": 0,
    "vocabIndex": 80
  },
  {
    "q": "The arrogant contestant continuously ______ his athletic records to impress the media representatives.",
    "options": [
      "lighten the load",
      "make an attempt to",
      "fell short of",
      "bragged about"
    ],
    "answer": 3,
    "vocabIndex": 81
  },
  {
    "q": "It is considered highly unprofessional to ______ one's personal wealth or corporate revenue during a serious labor strike.",
    "options": [
      "overeat",
      "flaunt",
      "intimidate",
      "overuse"
    ],
    "answer": 1,
    "vocabIndex": 82
  },
  {
    "q": "Many teenagers like to ______ on social media by posting pictures of their expensive sneakers, even though their parents paid for them.",
    "options": [
      "overdo",
      "associate",
      "flex",
      "harm"
    ],
    "answer": 2,
    "vocabIndex": 83
  },
  {
    "q": "The loud construction noise from the commercial area outside would consistently ______ the residents during their morning hours.",
    "options": [
      "overcome",
      "flex",
      "overdo",
      "irritate"
    ],
    "answer": 3,
    "vocabIndex": 84
  },
  {
    "q": "The young entrepreneur expressed deep ______ when the critical automated server framework suddenly stopped functioning.",
    "options": [
      "shortage",
      "irritation",
      "corporation",
      "harm"
    ],
    "answer": 1,
    "vocabIndex": 85
  },
  {
    "q": "Every student agreed that filling out the poorly designed research questionnaire was an exceptionally ______ task.",
    "options": [
      "irritating",
      "humble",
      "moderate",
      "lethal"
    ],
    "answer": 0,
    "vocabIndex": 86
  },
  {
    "q": "The aggressive gang attempted to ______ the honest store owner into giving them a massive sum of money.",
    "options": [
      "overtake",
      "overthrow",
      "intimidate",
      "overdo"
    ],
    "answer": 2,
    "vocabIndex": 87
  },
  {
    "q": "Moving away from a quiet suburb to start a new tech corporation in Taipei can be an ______ experience.",
    "options": [
      "modest",
      "intimidating",
      "harmless",
      "swollen"
    ],
    "answer": 1,
    "vocabIndex": 88
  },
  {
    "q": "The unyielding dictator fiercely used military ______ to crush any potential political opposition across the country.",
    "options": [
      "harm",
      "leaked",
      "fiber",
      "intimidation"
    ],
    "answer": 3,
    "vocabIndex": 89
  },
  {
    "q": "The medical research staff will ______ to isolate the highly invasive bacterial species during the controlled laboratory experiment.",
    "options": [
      "attempt",
      "overeat",
      "overuse",
      "overwhelm"
    ],
    "answer": 0,
    "vocabIndex": 90
  },
  {
    "q": "The young entrepreneur made a bold ______ to modernize the daily operation of the traditional family corporation.",
    "options": [
      "entrepreneur",
      "corporation",
      "attempt",
      "irritation"
    ],
    "answer": 2,
    "vocabIndex": 91
  },
  {
    "q": "The dedicated medical staff will ______ isolate the invasive bacterial species during the controlled laboratory experiment.",
    "options": [
      "overcome an adversity",
      "leak confidential financial information",
      "fluid situation",
      "make an attempt to"
    ],
    "answer": 3,
    "vocabIndex": 92
  },
  {
    "q": "Expensive spices certainly add greatly to the delicious flavor of the hot soup, but you really shouldn't ______ it or you'll ruin it entirely.",
    "options": [
      "flaunt",
      "overtake",
      "overdo",
      "overcome"
    ],
    "answer": 2,
    "vocabIndex": 93
  },
  {
    "q": "I usually completely tolerate your silly jokes, but this time you truly ______ by insulting my family members.",
    "options": [
      "go smoothly",
      "went too far",
      "do more harm than good",
      "done no harm to"
    ],
    "answer": 1,
    "vocabIndex": 94
  },
  {
    "q": "It is incredibly easy to accidentally ______ when you are happily enjoying a massive holiday feast with your beloved family and closest friends.",
    "options": [
      "overeat",
      "associate",
      "conclude",
      "overtake"
    ],
    "answer": 0,
    "vocabIndex": 95
  },
  {
    "q": "Doctors frequently warn that if you continuously ______ antibiotics, the dangerous bacteria will quickly become highly resistant to the life-saving medicine.",
    "options": [
      "intimidate",
      "overuse",
      "lightened",
      "deposit"
    ],
    "answer": 1,
    "vocabIndex": 96
  },
  {
    "q": "The ambitious manager completely ______ the new employee with too many complex tasks, causing her to feel deeply stressed and constantly anxious.",
    "options": [
      "overloaded",
      "associate",
      "attempt",
      "flex"
    ],
    "answer": 0,
    "vocabIndex": 97
  },
  {
    "q": "The veterinarian kindly informed us that our lazy dog is slightly ______ and needs to start walking outside in the park much more often.",
    "options": [
      "short",
      "irritating",
      "modest",
      "overweight"
    ],
    "answer": 3,
    "vocabIndex": 98
  },
  {
    "q": "The massive amount of customer complaints after the product launch threatens to ______ the small support team, so the manager is hiring temporary workers.",
    "options": [
      "harm",
      "overloaded",
      "overwhelm",
      "deposit"
    ],
    "answer": 2,
    "vocabIndex": 99
  },
  {
    "q": "Following the celebrity's public announcement, the charity office ______ hundreds of donation packages from supportive fans across the country.",
    "options": [
      "lighten the mood",
      "was overwhelmed with",
      "dietary fiber",
      "make a deposit"
    ],
    "answer": 1,
    "vocabIndex": 100
  },
  {
    "q": "Since two employees suddenly resigned last week, the remaining secretary ______, and she has to stay late every night to finish the reports.",
    "options": [
      "is overwhelmed with workload",
      "done no harm to",
      "was overwhelmed with",
      "went too far"
    ],
    "answer": 0,
    "vocabIndex": 101
  },
  {
    "q": "When the young scientist won the prestigious international award, she ______ joy and gave a tearful speech thanking her parents.",
    "options": [
      "make an attempt to",
      "show off",
      "overcome a hardship",
      "was overwhelmed with"
    ],
    "answer": 3,
    "vocabIndex": 102
  },
  {
    "q": "The rebel army managed to ______ the cruel dictator after months of violent protests, and they immediately established a new democratic government.",
    "options": [
      "overtake",
      "overdo",
      "overthrow",
      "irritate"
    ],
    "answer": 2,
    "vocabIndex": 103
  },
  {
    "q": "The professional racing driver managed to ______ his rival on the final lap of the race, which surprised the audience and won him the championship.",
    "options": [
      "overeat",
      "overtake",
      "overuse",
      "overthrow"
    ],
    "answer": 1,
    "vocabIndex": 104
  },
  {
    "q": "If you want to speak English fluently, you must ______ your fear of making mistakes and practice talking with native speakers as often as possible.",
    "options": [
      "overcome",
      "intimidate",
      "overdo",
      "flaunt"
    ],
    "answer": 0,
    "vocabIndex": 105
  },
  {
    "q": "Although building a rocket required advanced technology, the young engineers managed to ______ through teamwork and months of hard work.",
    "options": [
      "went too far",
      "overcome a shortcoming",
      "overcome a challenge",
      "overcome an adversity"
    ],
    "answer": 2,
    "vocabIndex": 106
  },
  {
    "q": "Recognizing that he was often late, Jerry worked hard to ______ by setting multiple alarms on his phone every single night.",
    "options": [
      "go badly",
      "leak confidential financial information",
      "associate eating cold ice cream with",
      "overcome a shortcoming"
    ],
    "answer": 3,
    "vocabIndex": 107
  },
  {
    "q": "The poor family managed to ______ of losing their home after the flood because the local community provided them with food and shelter.",
    "options": [
      "dietary fiber",
      "fatal error",
      "overcome a hardship",
      "overcome an adversity"
    ],
    "answer": 2,
    "vocabIndex": 108
  },
  {
    "q": "The lack of funding was a major problem, but the research team managed to ______ by presenting their brilliant project to rich investors.",
    "options": [
      "overcome a hardship",
      "overcome an obstacle",
      "fatal error",
      "a sudden shortage of"
    ],
    "answer": 1,
    "vocabIndex": 109
  },
  {
    "q": "Having lost both legs in a terrible accident, the brave athlete managed to ______ and eventually won a gold medal at the Paralympic Games.",
    "options": [
      "overcome an adversity",
      "In conclusion",
      "lighten the mood",
      "do harm to"
    ],
    "answer": 0,
    "vocabIndex": 110
  }
];

const LOOKUP = {
  "physician": {
    "pos": "n.",
    "en_def": "a medical doctor, especially one who has general skill.",
    "cn_def": "內科醫生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medical doctor, especially one who has general skill.",
        "cn_def": "內科醫生"
      }
    ]
  },
  "surgeon": {
    "pos": "n.",
    "en_def": "a medical practitioner qualified to practice surgery.",
    "cn_def": "外科醫生",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a medical practitioner qualified to practice surgery.",
        "cn_def": "外科醫生"
      }
    ]
  },
  "dentist": {
    "pos": "n.",
    "en_def": "a person qualified to treat the diseases and conditions that affect the teeth and gums.",
    "cn_def": "牙醫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person qualified to treat the diseases and conditions that affect the teeth and gums.",
        "cn_def": "牙醫"
      }
    ]
  },
  "surgery": {
    "pos": "n.",
    "en_def": "medical treatment in which a doctor cuts open a person's body to repair or remove damaged parts",
    "cn_def": "外科手術",
    "combined": [
      {
        "pos": "n.",
        "en_def": "medical treatment in which a doctor cuts open a person's body to repair or remove damaged parts",
        "cn_def": "外科手術"
      }
    ]
  },
  "perform an operation": {
    "pos": "v.",
    "en_def": "do a specific procedure of cutting open a patient's body by a doctor to treat a medical condition",
    "cn_def": "動手術",
    "combined": [
      {
        "pos": "v.",
        "en_def": "do a specific procedure of cutting open a patient's body by a doctor to treat a medical condition",
        "cn_def": "動手術"
      }
    ]
  },
  "operation": {
    "pos": "n.",
    "en_def": "an organized activity, mission, or campaign involving a number of people, especially soldiers or police",
    "cn_def": "行動；任務",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an organized activity, mission, or campaign involving a number of people, especially soldiers or police",
        "cn_def": "行動；任務"
      },
      {
        "pos": "n.",
        "en_def": "the ongoing factual processes, practical running, and day-to-day business management of a firm",
        "cn_def": "運營；運作"
      }
    ]
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who sets up a business or businesses, taking on financial risks in the hope of profit",
    "cn_def": "企業家；創業家",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who sets up a business or businesses, taking on financial risks in the hope of profit",
        "cn_def": "企業家；創業家"
      }
    ]
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company or group of companies authorized to act as a single entity and recognized as such in law",
    "cn_def": "大企業；公司",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large company or group of companies authorized to act as a single entity and recognized as such in law",
        "cn_def": "大企業；公司"
      }
    ]
  },
  "go smoothly": {
    "pos": "phr.",
    "en_def": "to progress or happen without any problems, unexpected difficulties, or sudden interruptions",
    "cn_def": "進展順利；順利進行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to progress or happen without any problems, unexpected difficulties, or sudden interruptions",
        "cn_def": "進展順利；順利進行"
      }
    ]
  },
  "go badly": {
    "pos": "phr.",
    "en_def": "to happen in a way that is not successful or causes problems.",
    "cn_def": "進行得不順利",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to happen in a way that is not successful or causes problems.",
        "cn_def": "進行得不順利"
      }
    ]
  },
  "need badly": {
    "pos": "phr.",
    "en_def": "to require something very much or urgently.",
    "cn_def": "迫切需要",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to require something very much or urgently.",
        "cn_def": "迫切需要"
      }
    ]
  },
  "badly needed": {
    "pos": "phr.",
    "en_def": "to require something very much or urgently.",
    "cn_def": "迫切需要",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to require something very much or urgently.",
        "cn_def": "迫切需要"
      }
    ]
  },
  "harm": {
    "pos": "v.",
    "en_def": "cause physical injury, to injure.",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "v.",
        "en_def": "cause physical injury, to injure.",
        "cn_def": "傷害"
      },
      {
        "pos": "n.",
        "en_def": "physical injury, especially that which is deliberately inflicted; to injure.",
        "cn_def": "傷害"
      }
    ]
  },
  "do harm to": {
    "pos": "phr.",
    "en_def": "to cause physical or mental damage to someone or something.",
    "cn_def": "對...造成傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause physical or mental damage to someone or something.",
        "cn_def": "對...造成傷害"
      }
    ]
  },
  "done no harm to": {
    "pos": "phr.",
    "en_def": "to be completely safe and cause no damage or injury.",
    "cn_def": "不對...造成傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be completely safe and cause no damage or injury.",
        "cn_def": "不對...造成傷害"
      }
    ]
  },
  "do no harm to": {
    "pos": "phr.",
    "en_def": "to be completely safe and cause no damage or injury.",
    "cn_def": "不對...造成傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be completely safe and cause no damage or injury.",
        "cn_def": "不對...造成傷害"
      }
    ]
  },
  "do more harm than good": {
    "pos": "phr.",
    "en_def": "to be damaging and not helpful in a situation.",
    "cn_def": "弊大於利",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be damaging and not helpful in a situation.",
        "cn_def": "弊大於利"
      }
    ]
  },
  "harmful": {
    "pos": "adj.",
    "en_def": "causing or likely to cause harm.",
    "cn_def": "有害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing or likely to cause harm.",
        "cn_def": "有害的"
      }
    ]
  },
  "harmless": {
    "pos": "adj.",
    "en_def": "not able or not likely to cause harm.",
    "cn_def": "無害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able or not likely to cause harm.",
        "cn_def": "無害的"
      }
    ]
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a state or situation in which something needed cannot be obtained in sufficient amounts.",
    "cn_def": "短缺",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a state or situation in which something needed cannot be obtained in sufficient amounts.",
        "cn_def": "短缺"
      }
    ]
  },
  "food shortage": {
    "pos": "phr.",
    "en_def": "a situation where there is not enough food for people in a region.",
    "cn_def": "糧食短缺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a situation where there is not enough food for people in a region.",
        "cn_def": "糧食短缺"
      }
    ]
  },
  "a shortage of": {
    "pos": "phr.",
    "en_def": "a lack of a specific item or resource.",
    "cn_def": "...的短缺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a lack of a specific item or resource.",
        "cn_def": "...的短缺"
      }
    ]
  },
  "a sudden shortage of": {
    "pos": "phr.",
    "en_def": "a lack of a specific item or resource.",
    "cn_def": "...的短缺",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a lack of a specific item or resource.",
        "cn_def": "...的短缺"
      }
    ]
  },
  "short": {
    "pos": "adj.",
    "en_def": "not having enough of something.",
    "cn_def": "短缺的；不足的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not having enough of something.",
        "cn_def": "短缺的；不足的"
      }
    ]
  },
  "fall short of": {
    "pos": "phr.",
    "en_def": "to fail to meet an expectation or standard.",
    "cn_def": "未達到；不符合",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to fail to meet an expectation or standard.",
        "cn_def": "未達到；不符合"
      }
    ]
  },
  "fell short of": {
    "pos": "phr.",
    "en_def": "to fail to meet an expectation or standard.",
    "cn_def": "未達到；不符合",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to fail to meet an expectation or standard.",
        "cn_def": "未達到；不符合"
      }
    ]
  },
  "swell": {
    "pos": "v.",
    "en_def": "to become larger or rounder in size.",
    "cn_def": "腫脹；增加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become larger or rounder in size.",
        "cn_def": "腫脹；增加"
      }
    ]
  },
  "swelled": {
    "pos": "v.",
    "en_def": "to become larger or rounder in size.",
    "cn_def": "腫脹；增加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become larger or rounder in size.",
        "cn_def": "腫脹；增加"
      }
    ]
  },
  "swollen": {
    "pos": "adj.",
    "en_def": "larger or rounder in size, typically as a result of an accumulation of fluid.",
    "cn_def": "腫大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "larger or rounder in size, typically as a result of an accumulation of fluid.",
        "cn_def": "腫大的"
      }
    ]
  },
  "swelling": {
    "pos": "n.",
    "en_def": "an abnormal enlargement of a part of the body.",
    "cn_def": "腫脹（處）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an abnormal enlargement of a part of the body.",
        "cn_def": "腫脹（處）"
      }
    ]
  },
  "fluid": {
    "pos": "n. / adj.",
    "en_def": "a substance that has no fixed shape; able to flow easily.",
    "cn_def": "液體；流暢的",
    "combined": [
      {
        "pos": "n. / adj.",
        "en_def": "a substance that has no fixed shape; able to flow easily.",
        "cn_def": "液體；流暢的"
      }
    ]
  },
  "body fluid": {
    "pos": "phr.",
    "en_def": "liquids originating from inside the bodies of living humans.",
    "cn_def": "體液",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "liquids originating from inside the bodies of living humans.",
        "cn_def": "體液"
      }
    ]
  },
  "fluid situation": {
    "pos": "phr.",
    "en_def": "a situation that is changing or likely to change.",
    "cn_def": "不穩定的局勢",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a situation that is changing or likely to change.",
        "cn_def": "不穩定的局勢"
      }
    ]
  },
  "leaked": {
    "pos": "v. / n.",
    "en_def": "to accidentally lose or admit contents; a hole through which contents escape.",
    "cn_def": "漏水；洩漏",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to accidentally lose or admit contents; a hole through which contents escape.",
        "cn_def": "漏水；洩漏"
      }
    ]
  },
  "leak": {
    "pos": "v. / n.",
    "en_def": "to accidentally lose or admit contents; a hole through which contents escape.",
    "cn_def": "漏水；洩漏",
    "combined": [
      {
        "pos": "v. / n.",
        "en_def": "to accidentally lose or admit contents; a hole through which contents escape.",
        "cn_def": "漏水；洩漏"
      }
    ]
  },
  "leak information": {
    "pos": "phr.",
    "en_def": "to intentionally disclose secret or confidential information.",
    "cn_def": "洩漏資訊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally disclose secret or confidential information.",
        "cn_def": "洩漏資訊"
      }
    ]
  },
  "leak confidential financial information": {
    "pos": "phr.",
    "en_def": "to intentionally disclose secret or confidential information.",
    "cn_def": "洩漏資訊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to intentionally disclose secret or confidential information.",
        "cn_def": "洩漏資訊"
      }
    ]
  },
  "lung": {
    "pos": "n.",
    "en_def": "each of the pair of organs situated within the rib cage, consisting of elastic sacs.",
    "cn_def": "肺臟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "each of the pair of organs situated within the rib cage, consisting of elastic sacs.",
        "cn_def": "肺臟"
      }
    ]
  },
  "at the top of their lungs": {
    "pos": "phr.",
    "en_def": "as loudly as one's voice will allow.",
    "cn_def": "聲嘶力竭地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as loudly as one's voice will allow.",
        "cn_def": "聲嘶力竭地"
      }
    ]
  },
  "at the top of one's lungs": {
    "pos": "phr.",
    "en_def": "as loudly as one's voice will allow.",
    "cn_def": "聲嘶力竭地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "as loudly as one's voice will allow.",
        "cn_def": "聲嘶力竭地"
      }
    ]
  },
  "lung cancer": {
    "pos": "phr.",
    "en_def": "a cancer that begins in the lungs and most often occurs in people who smoke.",
    "cn_def": "肺癌",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a cancer that begins in the lungs and most often occurs in people who smoke.",
        "cn_def": "肺癌"
      }
    ]
  },
  "kidney": {
    "pos": "n.",
    "en_def": "each of a pair of organs in the abdominal cavity excreting urine.",
    "cn_def": "腎臟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "each of a pair of organs in the abdominal cavity excreting urine.",
        "cn_def": "腎臟"
      }
    ]
  },
  "liver": {
    "pos": "n.",
    "en_def": "a large lobed glandular organ in the abdomen of vertebrates, involved in many metabolic processes.",
    "cn_def": "肝臟",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a large lobed glandular organ in the abdomen of vertebrates, involved in many metabolic processes.",
        "cn_def": "肝臟"
      }
    ]
  },
  "fatal": {
    "pos": "adj.",
    "en_def": "causing death.",
    "cn_def": "致命的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing death.",
        "cn_def": "致命的"
      }
    ]
  },
  "fatal error": {
    "pos": "phr.",
    "en_def": "a serious mistake that causes a complete failure.",
    "cn_def": "致命的錯誤",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a serious mistake that causes a complete failure.",
        "cn_def": "致命的錯誤"
      }
    ]
  },
  "death toll": {
    "pos": "phr.",
    "en_def": "The total number of people who die in an accident, war, or natural disaster.",
    "cn_def": "死亡人數、死亡總數",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The total number of people who die in an accident, war, or natural disaster.",
        "cn_def": "死亡人數、死亡總數"
      }
    ]
  },
  "mortality rate": {
    "pos": "phr.",
    "en_def": "The number of deaths in a particular group of people or during a specific period of time.",
    "cn_def": "死亡率",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "The number of deaths in a particular group of people or during a specific period of time.",
        "cn_def": "死亡率"
      }
    ]
  },
  "lethal": {
    "pos": "adj.",
    "en_def": "Able to cause death; extremely dangerous or deadly.",
    "cn_def": "致命的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "Able to cause death; extremely dangerous or deadly.",
        "cn_def": "致命的"
      }
    ]
  },
  "associate": {
    "pos": "v.",
    "en_def": "to connect someone or something in your mind with someone or something else.",
    "cn_def": "聯想；結交",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to connect someone or something in your mind with someone or something else.",
        "cn_def": "聯想；結交"
      }
    ]
  },
  "associate eating cold ice cream with": {
    "pos": "phr.",
    "en_def": "to make a mental connection between two things.",
    "cn_def": "把A和B聯想在一起",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a mental connection between two things.",
        "cn_def": "把A和B聯想在一起"
      }
    ]
  },
  "associate ..with..": {
    "pos": "phr.",
    "en_def": "to make a mental connection between two things.",
    "cn_def": "把A和B聯想在一起",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a mental connection between two things.",
        "cn_def": "把A和B聯想在一起"
      }
    ]
  },
  "be associated with": {
    "pos": "adj.",
    "en_def": "connected with something else.",
    "cn_def": "相關的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "connected with something else.",
        "cn_def": "相關的"
      }
    ]
  },
  "is closely associated with": {
    "pos": "adj.",
    "en_def": "connected with something else.",
    "cn_def": "相關的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "connected with something else.",
        "cn_def": "相關的"
      }
    ]
  },
  "association": {
    "pos": "n.",
    "en_def": "a connection or cooperative link between people or organizations.",
    "cn_def": "協會；聯想",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a connection or cooperative link between people or organizations.",
        "cn_def": "協會；聯想"
      }
    ]
  },
  "deposit": {
    "pos": "n.",
    "en_def": "a sum of money kept in a bank; to place or set down.",
    "cn_def": "存款；押金；存放",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a sum of money kept in a bank; to place or set down.",
        "cn_def": "存款；押金；存放"
      },
      {
        "pos": "v.",
        "en_def": "To put money into a bank account for safekeeping.",
        "cn_def": "存款、存入"
      },
      {
        "pos": "v.",
        "en_def": "To drop or leave a layer of a substance, like sand or mud, on a surface over time.",
        "cn_def": "使沉澱、沉積"
      },
      {
        "pos": "n.",
        "en_def": "A layer of a substance, such as rock, soil, or mud, that has been left naturally on a surface.",
        "cn_def": "沉澱物、沉積物"
      }
    ]
  },
  "pay a very large deposit": {
    "pos": "phr.",
    "en_def": "to pay a sum of money as a first installment on a larger payment.",
    "cn_def": "付押金",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to pay a sum of money as a first installment on a larger payment.",
        "cn_def": "付押金"
      }
    ]
  },
  "pay a deposit": {
    "pos": "phr.",
    "en_def": "to pay a sum of money as a first installment on a larger payment.",
    "cn_def": "付押金",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to pay a sum of money as a first installment on a larger payment.",
        "cn_def": "付押金"
      }
    ]
  },
  "make a deposit": {
    "pos": "phr.",
    "en_def": "to put money into a bank account.",
    "cn_def": "存錢",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to put money into a bank account.",
        "cn_def": "存錢"
      }
    ]
  },
  "withdraw money": {
    "pos": "phr.",
    "en_def": "To take money out of a bank account.",
    "cn_def": "提款、領錢",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To take money out of a bank account.",
        "cn_def": "提款、領錢"
      }
    ]
  },
  "mineral deposit": {
    "pos": "phr.",
    "en_def": "a concentration of naturally occurring solid material in the earth's crust.",
    "cn_def": "礦床",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a concentration of naturally occurring solid material in the earth's crust.",
        "cn_def": "礦床"
      }
    ]
  },
  "fiber": {
    "pos": "n.",
    "en_def": "dietary material containing substances which are resistant to digestive enzymes.",
    "cn_def": "纖維",
    "combined": [
      {
        "pos": "n.",
        "en_def": "dietary material containing substances which are resistant to digestive enzymes.",
        "cn_def": "纖維"
      }
    ]
  },
  "dietary fiber": {
    "pos": "phr.",
    "en_def": "the indigestible portion of food derived from plants.",
    "cn_def": "膳食纖維",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the indigestible portion of food derived from plants.",
        "cn_def": "膳食纖維"
      }
    ]
  },
  "calcium": {
    "pos": "n.",
    "en_def": "a white metallic chemical element that occurs naturally in bone and teeth.",
    "cn_def": "鈣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a white metallic chemical element that occurs naturally in bone and teeth.",
        "cn_def": "鈣"
      }
    ]
  },
  "protein": {
    "pos": "n.",
    "en_def": "a substance found in food that is necessary for the body to grow and be strong.",
    "cn_def": "蛋白質",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a substance found in food that is necessary for the body to grow and be strong.",
        "cn_def": "蛋白質"
      }
    ]
  },
  "mineral": {
    "pos": "n.",
    "en_def": "a solid naturally occurring inorganic substance.",
    "cn_def": "礦物質",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a solid naturally occurring inorganic substance.",
        "cn_def": "礦物質"
      }
    ]
  },
  "minerals": {
    "pos": "n.",
    "en_def": "a solid naturally occurring inorganic substance.",
    "cn_def": "礦物質",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a solid naturally occurring inorganic substance.",
        "cn_def": "礦物質"
      }
    ]
  },
  "mineral water": {
    "pos": "phr.",
    "en_def": "water from a spring that contains dissolved minerals.",
    "cn_def": "礦泉水",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "water from a spring that contains dissolved minerals.",
        "cn_def": "礦泉水"
      }
    ]
  },
  "rich in minerals": {
    "pos": "phr.",
    "en_def": "containing a lot of minerals.",
    "cn_def": "富含礦物質",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "containing a lot of minerals.",
        "cn_def": "富含礦物質"
      }
    ]
  },
  "lighten": {
    "pos": "v.",
    "en_def": "to make or become lighter in weight, pressure, or severity.",
    "cn_def": "減輕；變亮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become lighter in weight, pressure, or severity.",
        "cn_def": "減輕；變亮"
      }
    ]
  },
  "lightened": {
    "pos": "v.",
    "en_def": "to make or become lighter in weight, pressure, or severity.",
    "cn_def": "減輕；變亮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become lighter in weight, pressure, or severity.",
        "cn_def": "減輕；變亮"
      }
    ]
  },
  "lighten up": {
    "pos": "phr.",
    "en_def": "to become more relaxed and less serious.",
    "cn_def": "放輕鬆",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to become more relaxed and less serious.",
        "cn_def": "放輕鬆"
      }
    ]
  },
  "lighten the load": {
    "pos": "phr.",
    "en_def": "to make a difficult situation easier to deal with.",
    "cn_def": "減輕負擔",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a difficult situation easier to deal with.",
        "cn_def": "減輕負擔"
      }
    ]
  },
  "lighten the mood": {
    "pos": "phr.",
    "en_def": "to make a situation less serious or tense.",
    "cn_def": "緩和氣氛",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a situation less serious or tense.",
        "cn_def": "緩和氣氛"
      }
    ]
  },
  "conclude": {
    "pos": "v.",
    "en_def": "to bring something to an end; to arrive at a judgment.",
    "cn_def": "結束；得出結論",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to bring something to an end; to arrive at a judgment.",
        "cn_def": "結束；得出結論"
      }
    ]
  },
  "conclusion": {
    "pos": "n.",
    "en_def": "the end or finish of an event or process; a judgment or decision.",
    "cn_def": "結論",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the end or finish of an event or process; a judgment or decision.",
        "cn_def": "結論"
      }
    ]
  },
  "in conclusion": {
    "pos": "phr.",
    "en_def": "lastly, to sum up.",
    "cn_def": "總而言之",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "lastly, to sum up.",
        "cn_def": "總而言之"
      }
    ]
  },
  "reach the conclusion": {
    "pos": "phr.",
    "en_def": "to make a decision or judgement after considering all the information.",
    "cn_def": "得出結論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a decision or judgement after considering all the information.",
        "cn_def": "得出結論"
      }
    ]
  },
  "jump to conclusions": {
    "pos": "phr.",
    "en_def": "to guess the facts about a situation without having enough information.",
    "cn_def": "妄下定論",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to guess the facts about a situation without having enough information.",
        "cn_def": "妄下定論"
      }
    ]
  },
  "modest": {
    "pos": "adj.",
    "en_def": "moderate in the amount.",
    "cn_def": "適度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "moderate in the amount.",
        "cn_def": "適度的"
      },
      {
        "pos": "adj.",
        "en_def": "humble in estimating one's own abilities or achievements, or relatively moderate in size",
        "cn_def": "謙虛的；端莊的；適度的"
      }
    ]
  },
  "modestly": {
    "pos": "adv.",
    "en_def": "in a modest manner.",
    "cn_def": "謙虛地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a modest manner.",
        "cn_def": "謙虛地"
      }
    ]
  },
  "modesty": {
    "pos": "n.",
    "en_def": "the quality or state of being unassuming or moderate.",
    "cn_def": "謙遜",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality or state of being unassuming or moderate.",
        "cn_def": "謙遜"
      }
    ]
  },
  "moderate": {
    "pos": "adj.",
    "en_def": "average in amount, intensity, quality, or degree.",
    "cn_def": "中等的；適度的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "average in amount, intensity, quality, or degree.",
        "cn_def": "中等的；適度的"
      }
    ]
  },
  "humble": {
    "pos": "adj.",
    "en_def": "having or showing a modest or low estimate of one's own importance.",
    "cn_def": "謙卑的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or showing a modest or low estimate of one's own importance.",
        "cn_def": "謙卑的"
      }
    ]
  },
  "arrogant": {
    "pos": "adj.",
    "en_def": "having or revealing an exaggerated sense of one's own importance or abilities.",
    "cn_def": "傲慢的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having or revealing an exaggerated sense of one's own importance or abilities.",
        "cn_def": "傲慢的"
      }
    ]
  },
  "arrogance": {
    "pos": "n.",
    "en_def": "The quality of being unpleasantly proud and thinking you are more important than others.",
    "cn_def": "傲慢、自大",
    "combined": [
      {
        "pos": "n.",
        "en_def": "The quality of being unpleasantly proud and thinking you are more important than others.",
        "cn_def": "傲慢、自大"
      }
    ]
  },
  "snob": {
    "pos": "n.",
    "en_def": "A person who admires people with high social positions and looks down on those who are lower.",
    "cn_def": "勢利鬼、愛慕虛榮的人",
    "combined": [
      {
        "pos": "n.",
        "en_def": "A person who admires people with high social positions and looks down on those who are lower.",
        "cn_def": "勢利鬼、愛慕虛榮的人"
      }
    ]
  },
  "show off": {
    "pos": "phr.",
    "en_def": "To behave in a way that is intended to attract attention or admiration from other people.",
    "cn_def": "炫耀、賣弄",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To behave in a way that is intended to attract attention or admiration from other people.",
        "cn_def": "炫耀、賣弄"
      }
    ]
  },
  "boast about": {
    "pos": "phr.",
    "en_def": "To speak too proudly about your own abilities, achievements, or possessions.",
    "cn_def": "自誇、誇耀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To speak too proudly about your own abilities, achievements, or possessions.",
        "cn_def": "自誇、誇耀"
      }
    ]
  },
  "bragged about": {
    "pos": "phr.",
    "en_def": "to speak too proudly, boastfully, or with excessive satisfaction about one's achievements or possessions",
    "cn_def": "吹噓...；誇耀...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to speak too proudly, boastfully, or with excessive satisfaction about one's achievements or possessions",
        "cn_def": "吹噓...；誇耀..."
      }
    ]
  },
  "brag about": {
    "pos": "phr.",
    "en_def": "to speak too proudly, boastfully, or with excessive satisfaction about one's achievements or possessions",
    "cn_def": "吹噓...；誇耀...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to speak too proudly, boastfully, or with excessive satisfaction about one's achievements or possessions",
        "cn_def": "吹噓...；誇耀..."
      }
    ]
  },
  "flaunt": {
    "pos": "v.",
    "en_def": "to display something ostentatiously or proudly in public to intentionally provoke envy or admiration",
    "cn_def": "炫耀；張揚（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to display something ostentatiously or proudly in public to intentionally provoke envy or admiration",
        "cn_def": "炫耀；張揚（動詞）"
      }
    ]
  },
  "flex": {
    "pos": "v.",
    "en_def": "To show off your looks, wealth, or achievements in a boastful way (informal slang).",
    "cn_def": "炫耀、愛現（流行語）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To show off your looks, wealth, or achievements in a boastful way (informal slang).",
        "cn_def": "炫耀、愛現（流行語）"
      }
    ]
  },
  "irritate": {
    "pos": "v.",
    "en_def": "to make someone feel annoyed, impatient, or angry, or to cause a part of the body to become sore",
    "cn_def": "使發怒；使惱火；使過敏",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make someone feel annoyed, impatient, or angry, or to cause a part of the body to become sore",
        "cn_def": "使發怒；使惱火；使過敏"
      }
    ]
  },
  "irritation": {
    "pos": "n.",
    "en_def": "the state of feeling annoyed or impatient, or a painful soreness in a specific part of the body",
    "cn_def": "惱怒；生氣；過敏不適",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of feeling annoyed or impatient, or a painful soreness in a specific part of the body",
        "cn_def": "惱怒；生氣；過敏不適"
      }
    ]
  },
  "irritating": {
    "pos": "adj.",
    "en_def": "causing annoyance, impatience, or mild anger through repetitive or undesirable actions",
    "cn_def": "令人惱火的；討厭的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing annoyance, impatience, or mild anger through repetitive or undesirable actions",
        "cn_def": "令人惱火的；討厭的"
      }
    ]
  },
  "intimidate": {
    "pos": "v.",
    "en_def": "to frighten or threaten someone, typically in order to force them to do what one wants",
    "cn_def": "恐嚇；脅迫；嚇唬",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to frighten or threaten someone, typically in order to force them to do what one wants",
        "cn_def": "恐嚇；脅迫；嚇唬"
      }
    ]
  },
  "intimidating": {
    "pos": "adj.",
    "en_def": "causing one to feel frightened, nervous, or lacking in confidence due to scale or nature",
    "cn_def": "令人緊張的；嚇人的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing one to feel frightened, nervous, or lacking in confidence due to scale or nature",
        "cn_def": "令人緊張的；嚇人的"
      }
    ]
  },
  "intimidation": {
    "pos": "n.",
    "en_def": "the action of intentionally frightening or threatening someone to force submissive behavior",
    "cn_def": "恐嚇；恫嚇；脅迫",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of intentionally frightening or threatening someone to force submissive behavior",
        "cn_def": "恐嚇；恫嚇；脅迫"
      }
    ]
  },
  "attempt": {
    "pos": "v.",
    "en_def": "to make an effort to do, achieve, or complete a challenging task or scientific experiment",
    "cn_def": "企圖；嘗試（動詞）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make an effort to do, achieve, or complete a challenging task or scientific experiment",
        "cn_def": "企圖；嘗試（動詞）"
      },
      {
        "pos": "n.",
        "en_def": "an act of trying to achieve or complete something difficult, often used with collocations like make an attempt",
        "cn_def": "企圖；嘗試（名詞）"
      }
    ]
  },
  "make an attempt to": {
    "pos": "phr.",
    "en_def": "to systematically try or endeavor to do something, especially a challenging task or project",
    "cn_def": "試圖去...；嘗試去...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to systematically try or endeavor to do something, especially a challenging task or project",
        "cn_def": "試圖去...；嘗試去..."
      }
    ]
  },
  "overdo": {
    "pos": "v.",
    "en_def": "to do, use, or carry to excess; exaggerate.",
    "cn_def": "做得過分；過度",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to do, use, or carry to excess; exaggerate.",
        "cn_def": "做得過分；過度"
      }
    ]
  },
  "went too far": {
    "pos": "phr.",
    "en_def": "to exceed the limits of what is reasonable or acceptable.",
    "cn_def": "做得太過分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to exceed the limits of what is reasonable or acceptable.",
        "cn_def": "做得太過分"
      }
    ]
  },
  "go too far": {
    "pos": "phr.",
    "en_def": "to exceed the limits of what is reasonable or acceptable.",
    "cn_def": "做得太過分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to exceed the limits of what is reasonable or acceptable.",
        "cn_def": "做得太過分"
      }
    ]
  },
  "overeat": {
    "pos": "v.",
    "en_def": "to eat too much.",
    "cn_def": "吃得過飽",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to eat too much.",
        "cn_def": "吃得過飽"
      }
    ]
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much or too often.",
    "cn_def": "過度使用",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to use something too much or too often.",
        "cn_def": "過度使用"
      }
    ]
  },
  "overloaded": {
    "pos": "v.",
    "en_def": "to load with too great a burden or cargo.",
    "cn_def": "超載；負荷過多",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to load with too great a burden or cargo.",
        "cn_def": "超載；負荷過多"
      }
    ]
  },
  "overload": {
    "pos": "v.",
    "en_def": "to load with too great a burden or cargo.",
    "cn_def": "超載；負荷過多",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to load with too great a burden or cargo.",
        "cn_def": "超載；負荷過多"
      }
    ]
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "above a weight considered normal or desirable.",
    "cn_def": "超重的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "above a weight considered normal or desirable.",
        "cn_def": "超重的"
      }
    ]
  },
  "overwhelm": {
    "pos": "v.",
    "en_def": "To defeat someone completely, or to give someone too much of something to deal with.",
    "cn_def": "（數量、力量上）壓倒、使難以承受、使不知所措",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To defeat someone completely, or to give someone too much of something to deal with.",
        "cn_def": "（數量、力量上）壓倒、使難以承受、使不知所措"
      }
    ]
  },
  "be overwhelmed with": {
    "pos": "phr.",
    "en_def": "To receive or be faced with a huge number of physical things at once.",
    "cn_def": "被大量（某物）淹沒、收到多到無法應付的（某物）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To receive or be faced with a huge number of physical things at once.",
        "cn_def": "被大量（某物）淹沒、收到多到無法應付的（某物）"
      },
      {
        "pos": "phr.",
        "en_def": "To feel a sudden, very strong emotion that is difficult to control.",
        "cn_def": "內心充斥著（某種情緒）、被（某種情緒）淹沒"
      }
    ]
  },
  "was overwhelmed with": {
    "pos": "phr.",
    "en_def": "To receive or be faced with a huge number of physical things at once.",
    "cn_def": "被大量（某物）淹沒、收到多到無法應付的（某物）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To receive or be faced with a huge number of physical things at once.",
        "cn_def": "被大量（某物）淹沒、收到多到無法應付的（某物）"
      },
      {
        "pos": "phr.",
        "en_def": "To feel a sudden, very strong emotion that is difficult to control.",
        "cn_def": "內心充斥著（某種情緒）、被（某種情緒）淹沒"
      }
    ]
  },
  "be overwhelmed with workload": {
    "pos": "phr.",
    "en_def": "To have too much work to do, causing stress or a feeling of being unable to cope.",
    "cn_def": "被工作量壓得喘不過氣、工作量大到無法負荷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have too much work to do, causing stress or a feeling of being unable to cope.",
        "cn_def": "被工作量壓得喘不過氣、工作量大到無法負荷"
      }
    ]
  },
  "is overwhelmed with workload": {
    "pos": "phr.",
    "en_def": "To have too much work to do, causing stress or a feeling of being unable to cope.",
    "cn_def": "被工作量壓得喘不過氣、工作量大到無法負荷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To have too much work to do, causing stress or a feeling of being unable to cope.",
        "cn_def": "被工作量壓得喘不過氣、工作量大到無法負荷"
      }
    ]
  },
  "overthrow": {
    "pos": "v.",
    "en_def": "To remove a leader or government from power by using force.",
    "cn_def": "推翻、打倒",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To remove a leader or government from power by using force.",
        "cn_def": "推翻、打倒"
      }
    ]
  },
  "overtake": {
    "pos": "v.",
    "en_def": "To catch up with and pass someone or something moving in the same direction.",
    "cn_def": "超車、超過、追上",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To catch up with and pass someone or something moving in the same direction.",
        "cn_def": "超車、超過、追上"
      }
    ]
  },
  "overcome": {
    "pos": "v.",
    "en_def": "To successfully control or deal with a problem, feeling, or difficult situation.",
    "cn_def": "克服、戰勝",
    "combined": [
      {
        "pos": "v.",
        "en_def": "To successfully control or deal with a problem, feeling, or difficult situation.",
        "cn_def": "克服、戰勝"
      }
    ]
  },
  "overcome a challenge": {
    "pos": "phr.",
    "en_def": "To successfully deal with a difficult task or situation that tests your abilities.",
    "cn_def": "克服挑戰、戰勝挑戰",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully deal with a difficult task or situation that tests your abilities.",
        "cn_def": "克服挑戰、戰勝挑戰"
      }
    ]
  },
  "overcome a shortcoming": {
    "pos": "phr.",
    "en_def": "To successfully correct or improve a weakness or fault in your character or ability.",
    "cn_def": "克服缺點、彌補不足",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully correct or improve a weakness or fault in your character or ability.",
        "cn_def": "克服缺點、彌補不足"
      }
    ]
  },
  "overcome a hardship": {
    "pos": "phr.",
    "en_def": "To successfully get through a period of severe suffering or difficult living conditions.",
    "cn_def": "熬過困境、克服艱難",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully get through a period of severe suffering or difficult living conditions.",
        "cn_def": "熬過困境、克服艱難"
      }
    ]
  },
  "overcome an obstacle": {
    "pos": "phr.",
    "en_def": "To successfully deal with something that blocks your progress or makes it difficult to achieve a goal.",
    "cn_def": "克服障礙、跨越阻礙",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully deal with something that blocks your progress or makes it difficult to achieve a goal.",
        "cn_def": "克服障礙、跨越阻礙"
      }
    ]
  },
  "overcome an adversity": {
    "pos": "phr.",
    "en_def": "To successfully deal with a very difficult, unlucky, or unpleasant situation.",
    "cn_def": "戰勝逆境、克服不幸",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "To successfully deal with a very difficult, unlucky, or unpleasant situation.",
        "cn_def": "戰勝逆境、克服不幸"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
