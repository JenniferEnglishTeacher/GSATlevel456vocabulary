// Unit 1 Quiz Data: disorder – highly productive
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 3-5 Advanced U1 - disorder – highly productive",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "disorder",
    "pos": "n.",
    "cn_def": "失調；疾病",
    "en_def": "an illness or condition that disrupts normal physical or mental functions.",
    "sentence": "Because of her highly unusual sleeping {{BLANK}}, Sarah usually struggles to stay awake during long afternoon meetings.",
    "cn": "因為她極其不尋常的睡眠失調，莎拉通常在漫長的下午會議中努力保持清醒。"
  },
  {
    "word": "anxiety disorder",
    "pos": "phr.",
    "cn_def": "焦慮症",
    "en_def": "a mental health condition characterized by feelings of worry or fear.",
    "sentence": "After suffering from a severe {{BLANK}} for years, the young woman finally sought professional medical help.",
    "cn": "在患有嚴重的焦慮症多年後，這位年輕女子終於尋求了專業的醫療協助。"
  },
  {
    "word": "eating disorder",
    "pos": "phr.",
    "cn_def": "飲食失調",
    "en_def": "a psychological illness characterized by abnormal or disturbed eating habits.",
    "sentence": "The incredibly worried parents noticed their teenage daughter was secretly battling a dangerous {{BLANK}}.",
    "cn": "極度憂心的父母注意到他們正值青春期的女兒正秘密地與危險的飲食失調搏鬥。"
  },
  {
    "word": "mental disorder",
    "pos": "phr.",
    "cn_def": "精神疾病",
    "en_def": "a wide range of mental health conditions that affect mood, thinking and behavior.",
    "sentence": "The experienced psychologist carefully explained that this specific {{BLANK}} is surprisingly common among highly stressed workers.",
    "cn": "經驗豐富的心理學家仔細解釋說，這種特定的精神疾病在壓力極大的工人中令人驚訝地常見。"
  },
  {
    "word": "in perfect order",
    "pos": "phr.",
    "cn_def": "以..的順序",
    "en_def": "the arrangement or disposition of people or things in relation to each other.",
    "sentence": "The strict teacher strictly demanded that all the messy desks be placed {{BLANK}} before the students left.",
    "cn": "嚴格的老師嚴格要求在學生離開前，所有雜亂的桌子都必須擺放得井然有秩序。"
  },
  {
    "word": "robust",
    "pos": "adj.",
    "cn_def": "強健的；穩固的",
    "en_def": "strong and healthy; vigorous.",
    "sentence": "Despite the terrible global economic crisis, the completely {{BLANK}} company surprisingly continued to increase its annual profits.",
    "cn": "儘管面臨可怕的全球經濟危機，這家完全穩固的公司令人驚訝地繼續增加其年度利潤。"
  },
  {
    "word": "vigorous",
    "pos": "adj.",
    "cn_def": "充滿活力的",
    "en_def": "strong, healthy, and full of energy.",
    "sentence": "The highly energetic and healthy athlete completely enjoys a {{BLANK}} workout early every single morning before breakfast.",
    "cn": "這位極具活力且健康的運動員完全享受每天清晨早餐前一次充滿活力的鍛鍊。"
  },
  {
    "word": "fragile",
    "pos": "adj.",
    "cn_def": "脆弱的",
    "en_def": "easily broken or damaged.",
    "sentence": "You must absolutely handle that incredibly {{BLANK}} glass vase with great care so you do not accidentally break it.",
    "cn": "你絕對必須非常小心地處理那個極其脆弱的玻璃花瓶，以免你不小心打破它。"
  },
  {
    "word": "fragility",
    "pos": "n.",
    "cn_def": "脆弱性",
    "en_def": "the quality of being easily broken or damaged.",
    "sentence": "The shocking collapse of the old building clearly demonstrated the terrifying {{BLANK}} of such ancient wooden structures.",
    "cn": "舊建築令人震驚的倒塌清楚地展示了這種古老木造結構可怕的脆弱性。"
  },
  {
    "word": "highly fragile",
    "pos": "phr.",
    "cn_def": "高度脆弱的",
    "en_def": "very easily broken, damaged, or destroyed.",
    "sentence": "Because his physical condition was still {{BLANK}} after the major surgery, he couldn't leave the hospital yet.",
    "cn": "因為在經歷大手術後他的身體狀況仍然是高度脆弱的，他還不能離開醫院。"
  },
  {
    "word": "delicate",
    "pos": "adj.",
    "cn_def": "精緻的；易碎的",
    "en_def": "easily broken or damaged; fragile.",
    "sentence": "The chef skillfully added a very {{BLANK}} blend of rare spices to completely elevate the flavor of the hot soup.",
    "cn": "主廚技巧熟練地加入了一種非常精緻的稀有香料混合物，以完全提升熱湯的風味。"
  },
  {
    "word": "delicacy",
    "pos": "n. [C]",
    "cn_def": "佳餚、珍饈、美食",
    "en_def": "A rare, expensive, or high-quality food item that is considered very special to eat.",
    "sentence": "Grilled Wagyu beef is considered a rare {{BLANK}} that many international tourists love to try when visiting Japan.",
    "cn": "烤和牛被視為一種珍貴的佳餚（美食），許多國際觀光客造訪日本時都喜歡品嚐。"
  },
  {
    "word": "susceptible",
    "pos": "adj.",
    "cn_def": "易受影響的；易受感染的",
    "en_def": "likely or liable to be influenced or harmed by a particular thing.",
    "sentence": "Since the young child does not eat enough healthy vegetables, he is heavily {{BLANK}} to catching the winter flu.",
    "cn": "因為這個幼童沒有吃足夠的健康蔬菜，他極易受感染的染上冬季流感。"
  },
  {
    "word": "unsusceptible",
    "pos": "adj.",
    "cn_def": "不易受影響的",
    "en_def": "not likely or liable to be influenced or harmed.",
    "sentence": "Thanks to the newly developed medical vaccine, the healthy patients are now largely {{BLANK}} to the dangerous virus.",
    "cn": "多虧了新開發的醫療疫苗，健康的病患現在很大程度上對這種危險病毒是不易受影響的。"
  },
  {
    "word": "be much more susceptible to",
    "pos": "phr.",
    "cn_def": "易受...影響/感染",
    "en_def": "to be easily affected, influenced, or harmed by something.",
    "sentence": "Older people with weak hearts tend to {{BLANK}} dangerous health problems during freezing weather.",
    "cn": "心臟衰弱的老年人在嚴寒天氣中往往易受危險健康問題的影響得多。"
  },
  {
    "word": "susceptible to",
    "pos": "v. phr.",
    "cn_def": "易受…影響的、易感（染）的、脆弱的",
    "en_def": "Easily influenced, harmed, or affected by a specific disease, chemical, or situation.",
    "sentence": "Elderly people and young children are often more {{BLANK}} catching severe seasonal flu during the cold winter.",
    "cn": "年長者和幼童在寒冷的冬天通常更容易感染（易受…影響）嚴重的季節性流感。"
  },
  {
    "word": "vulnerable",
    "pos": "adj.",
    "cn_def": "脆弱的；易受傷的",
    "en_def": "susceptible to physical or emotional attack or harm.",
    "sentence": "The completely destroyed city walls left the terrified citizens totally {{BLANK}} to a sudden attack by the angry enemy.",
    "cn": "被徹底摧毀的城牆讓驚恐的市民在面對憤怒敵人的突然攻擊時完全是脆弱的（易受傷的）。"
  },
  {
    "word": "vulnerable to",
    "pos": "v. phr.",
    "cn_def": "易受…傷害的、脆弱的、易受攻擊的",
    "en_def": "Weak and easily hurt, damaged, or attacked physically, emotionally, or systematically.",
    "sentence": "Without a secure password and firewall protection, the online database is highly {{BLANK}} cyberattacks.",
    "cn": "如果沒有安全的密碼與防火牆保護，該線上資料庫將非常容易受到網路攻擊（脆弱的）。"
  },
  {
    "word": "subject to",
    "pos": "v. phr.",
    "cn_def": "易遭受…的、受…支配的、取決於…",
    "en_def": "Likely to experience, suffer, or be affected by something, or depending on something to happen.",
    "sentence": "All international passengers arriving at the airport are {{BLANK}} a strict security check by law enforcement.",
    "cn": "根據法律，所有抵達機場的國際旅客都必須接受（受到）嚴格的安全檢查。"
  },
  {
    "word": "subject to change",
    "pos": "v. phr.",
    "cn_def": "可能會有所變動、以…為準（視情況調整）",
    "en_def": "Not final; likely to be modified, updated, or altered depending on the situation or new rules.",
    "sentence": "The schedule for the summer vocabulary camp is {{BLANK}} depending on the weather conditions.",
    "cn": "夏季單字營的行程表可能會根據天氣狀況有所變動。"
  },
  {
    "word": "mental",
    "pos": "adj.",
    "cn_def": "心理的；精神的",
    "en_def": "relating to the mind.",
    "sentence": "The highly experienced doctor repeatedly emphasized that maintaining good {{BLANK}} health is just as important as physical fitness.",
    "cn": "經驗豐富的醫生反覆強調，保持良好的心理的健康與身體健康一樣重要。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "心理上地",
    "en_def": "in a manner relating to the mind.",
    "sentence": "After completely failing the difficult exam, the exhausted student understandably felt physically and {{BLANK}} defeated by the terrible experience.",
    "cn": "在完全沒有通過困難的考試後，筋疲力盡的學生可以理解地感到身體和心理上地被這次可怕的經歷所擊敗。"
  },
  {
    "word": "mentality",
    "pos": "n.",
    "cn_def": "心態",
    "en_def": "the characteristic attitude of mind or way of thinking of a person or group.",
    "sentence": "If you want to survive in this highly competitive business world, you must actively adopt a strong winning {{BLANK}}.",
    "cn": "如果你想在這個競爭高度激烈的商業世界中生存下來，你必須積極採取一種強烈的致勝心態。"
  },
  {
    "word": "mental health",
    "pos": "phr.",
    "cn_def": "心理健康",
    "en_def": "a person's condition with regard to their psychological and emotional well-being.",
    "sentence": "The modern hospital recently opened a brand new department specifically dedicated to improving the {{BLANK}} of local teenagers.",
    "cn": "現代醫院最近開設了一個全新部門，專門致力於改善當地青少年的心理健康。"
  },
  {
    "word": "physical",
    "pos": "adj.",
    "cn_def": "身體的",
    "en_def": "relating to the body as opposed to the mind.",
    "sentence": "Engaging in rigorous daily exercise is absolutely necessary for properly maintaining your overall excellent {{BLANK}} health and strength.",
    "cn": "參與嚴格的日常運動對於適當地保持你整體極佳的身體的健康和力量是絕對必要的。"
  },
  {
    "word": "diagnose",
    "pos": "v.",
    "cn_def": "診斷",
    "en_def": "to identify the nature of an illness or other problem by examination of the symptoms.",
    "sentence": "The professional doctor was finally able to correctly {{BLANK}} the strange illness after carefully reviewing all the test results.",
    "cn": "專業醫生在仔細審查所有檢查結果後，終於能夠正確地診斷出這種奇怪的疾病。"
  },
  {
    "word": "was officially diagnosed with",
    "pos": "phr.",
    "cn_def": "被診斷出患有...",
    "en_def": "to be told by a doctor that you have a particular illness.",
    "sentence": "Poor Alan was tragically absolutely shocked when he {{BLANK}} advanced type two diabetes last month.",
    "cn": "可憐的艾倫在上個月被正式診斷出患有晚期第二型糖尿病時，悲慘地感到絕對震驚。"
  },
  {
    "word": "diagnosis",
    "pos": "n.",
    "cn_def": "診斷結果",
    "en_def": "the identification of the nature of an illness or other problem by examination of the symptoms.",
    "sentence": "The deeply worried parents waited anxiously for several long hours before the specialist finally delivered a clear medical {{BLANK}}.",
    "cn": "深感憂慮的父母焦急地等待了幾個漫長的小時，專科醫生才終於給出明確的醫療診斷結果。"
  },
  {
    "word": "diagnostic",
    "pos": "adj.",
    "cn_def": "診斷的",
    "en_def": "concerned with the diagnosis of illness or other problems.",
    "sentence": "The hospital recently purchased several highly expensive {{BLANK}} machines to help doctors quickly identify rare and complex diseases.",
    "cn": "醫院最近購買了幾台極其昂貴的診斷的機器，以幫助醫生快速識別罕見且複雜的疾病。"
  },
  {
    "word": "misdiagnose",
    "pos": "v.",
    "cn_def": "誤診",
    "en_def": "to diagnose incorrectly.",
    "sentence": "If a careless doctor happens to completely {{BLANK}} a serious illness, the patient could suffer from totally incorrect treatments.",
    "cn": "如果粗心的醫生碰巧完全誤診了一種嚴重的疾病，病患可能會遭受完全錯誤的治療。"
  },
  {
    "word": "cripple",
    "pos": "v.",
    "cn_def": "使嚴重損害；使殘廢",
    "en_def": "to cause severe and disabling damage to.",
    "sentence": "The completely unexpected and highly destructive global pandemic heavily managed to {{BLANK}} the entire international travel industry perfectly.",
    "cn": "完全出乎意料且極具破壞性的全球疫情，重重地設法完美使整個國際旅遊業嚴重損害。"
  },
  {
    "word": "disable",
    "pos": "v.",
    "cn_def": "使失去能力",
    "en_def": "to limit the movements, senses, or activities of someone.",
    "sentence": "The highly skilled computer technician had to urgently {{BLANK}} the dangerous virus before it could destroy the office network.",
    "cn": "技術高超的電腦技術人員必須緊急使危險的病毒失去能力（失效），以免它摧毀辦公室網路。"
  },
  {
    "word": "crippling",
    "pos": "adj.",
    "cn_def": "造成嚴重損害的",
    "en_def": "causing a severe and almost insuperable problem.",
    "sentence": "The sudden financial disaster unfortunately dealt a completely {{BLANK}} blow to all the struggling small business owners in town.",
    "cn": "突發的金融災難不幸地對鎮上所有苦苦掙扎的小企業主造成了完全造成嚴重損害的打擊。"
  },
  {
    "word": "crippled",
    "pos": "adj.",
    "cn_def": "殘廢的；嚴重受損的",
    "en_def": "severely damaged or malfunctioning.",
    "sentence": "The completely brave but highly unfortunate soldier was sadly left permanently {{BLANK}} by the terrible injuries he deeply suffered.",
    "cn": "這位完全勇敢但極度不幸的士兵，可悲地因他深切遭受的可怕傷害而永久地留下殘廢的。"
  },
  {
    "word": "normally",
    "pos": "adv.",
    "cn_def": "通常地",
    "en_def": "under normal or usual conditions; as a rule.",
    "sentence": "Those beautifully bright red ladybugs {{BLANK}} live for about one year, but some can surprisingly survive much longer.",
    "cn": "那些美麗明亮的紅色瓢蟲通常地存活約一年，但有些令人驚訝地可以活得長得多。"
  },
  {
    "word": "normal",
    "pos": "adj.",
    "cn_def": "正常的",
    "en_def": "conforming to a standard; usual, typical, or expected.",
    "sentence": "Feeling completely anxious before a major public presentation is an entirely {{BLANK}} human reaction that everyone experiences sometimes.",
    "cn": "在重大公開演講前感到完全焦慮，是一種完全正常的人類反應，每個人有時都會經歷。"
  },
  {
    "word": "norm",
    "pos": "n.",
    "cn_def": "常態；規範",
    "en_def": "something that is usual, typical, or standard.",
    "sentence": "Working comfortably from home using a computer has rapidly become the accepted {{BLANK}} for many modern office employees.",
    "cn": "使用電腦舒適地在家工作，已迅速成為許多現代辦公室員工所接受的常態。"
  },
  {
    "word": "abnormal",
    "pos": "adj.",
    "cn_def": "不正常的",
    "en_def": "deviating from what is normal or usual.",
    "sentence": "The careful doctor noticed a highly {{BLANK}} heartbeat during the routine physical examination and immediately ordered more medical tests.",
    "cn": "仔細的醫生在例行身體檢查中注意到高度不正常的心跳，並立即安排了更多醫學檢查。"
  },
  {
    "word": "abnormality",
    "pos": "n.",
    "cn_def": "異常",
    "en_def": "an abnormal feature, characteristic, or occurrence.",
    "sentence": "The detailed blood test perfectly revealed a slight {{BLANK}} that might effectively explain why the patient feels constantly tired.",
    "cn": "詳細的血液檢查完美地揭示了輕微的異常，這可能有效地解釋為什麼病患經常感到疲倦。"
  },
  {
    "word": "torment",
    "pos": "n.",
    "cn_def": "折磨；痛苦",
    "en_def": "severe physical or mental suffering.",
    "sentence": "The massive amount of money won in court could not entirely undo the years of terrible {{BLANK}} she suffered.",
    "cn": "在法庭上贏得的巨額金錢，無法完全消除她所遭受的多年可怕折磨。"
  },
  {
    "word": "tormented",
    "pos": "v.",
    "cn_def": "折磨",
    "en_def": "to cause to experience severe mental or physical suffering.",
    "sentence": "The angry and completely uncontrollable young girl constantly {{BLANK}} her exhausted mother with her incredibly bad and selfish behavior.",
    "cn": "憤怒且完全無法控制的年輕女孩，不斷用她極度糟糕且自私的行為折磨她筋疲力盡的母親。"
  },
  {
    "word": "torture",
    "pos": "n. / v.",
    "cn_def": "拷問；折磨",
    "en_def": "the action or practice of inflicting severe pain on someone.",
    "sentence": "Having to patiently sit through that incredibly boring three-hour meeting felt like absolute {{BLANK}} to everyone in the room.",
    "cn": "必須耐心地坐著聽完那場極度無聊的三小時會議，對房間裡的每個人來說感覺就像絕對的折磨（拷問）。"
  },
  {
    "word": "agony",
    "pos": "n.",
    "cn_def": "極度痛苦",
    "en_def": "extreme physical or mental suffering.",
    "sentence": "The heavily injured athlete collapsed onto the green grass and loudly cried out in absolute {{BLANK}} after breaking his leg.",
    "cn": "受重傷的運動員倒在綠草地上，在摔斷腿後在絕對的極度痛苦中大聲哭喊。"
  },
  {
    "word": "tormentor",
    "pos": "n.",
    "cn_def": "折磨者",
    "en_def": "a person who inflicts severe mental or physical suffering on someone.",
    "sentence": "The brave young boy finally decided to confidently stand up to the cruel {{BLANK}} who had bullied him for years.",
    "cn": "勇敢的年輕男孩終於決定自信地挺身對抗那個欺負了他多年的殘酷折磨者。"
  },
  {
    "word": "symptom",
    "pos": "n.",
    "cn_def": "症狀",
    "en_def": "a physical or mental feature which is regarded as indicating a condition of disease.",
    "sentence": "An incredibly sore throat and a deeply persistent cough are highly common {{BLANK}} of a terrible and dangerous cold.",
    "cn": "極度疼痛的喉嚨和深深持續的咳嗽，是可怕且危險感冒的高度常見症狀。"
  },
  {
    "word": "symptomatic",
    "pos": "adj.",
    "cn_def": "有症狀的",
    "en_def": "serving as a symptom or sign, especially of something undesirable.",
    "sentence": "Because the patient is heavily {{BLANK}}, he must strictly stay in his hospital room to avoid infecting other people.",
    "cn": "因為病患是重度有症狀的，他必須嚴格留在他的病房內，以避免傳染給其他人。"
  },
  {
    "word": "asymptomatic",
    "pos": "adj.",
    "cn_def": "無症狀的",
    "en_def": "producing or showing no symptoms.",
    "sentence": "Even if you are completely {{BLANK}}, you can still unknowingly spread the dangerous virus to your highly vulnerable grandparents.",
    "cn": "即使你是完全無症狀的，你仍然可能在不知不覺中將危險病毒傳播給你極度脆弱的祖父母。"
  },
  {
    "word": "relieve the painful symptoms",
    "pos": "phr.",
    "cn_def": "緩解症狀",
    "en_def": "to make the signs of an illness less severe.",
    "sentence": "The friendly pharmacist strongly suggested this specific medicine to effectively {{BLANK}} of your severe winter cold.",
    "cn": "友善的藥劑師強烈建議使用這種特定的藥物，以有效地緩解你嚴重的冬季感冒帶來的痛苦症狀。"
  },
  {
    "word": "common symptom",
    "pos": "phr.",
    "cn_def": "常見症狀",
    "en_def": "a frequently occurring sign of an illness.",
    "sentence": "A sudden loss of taste is a highly {{BLANK}} that often indicates you have caught that particular dangerous virus.",
    "cn": "突然失去味覺是一種高度常見症狀，通常表示你感染了那種特定的危險病毒。"
  },
  {
    "word": "doom",
    "pos": "n. / v.",
    "cn_def": "厄運；注定失敗",
    "en_def": "death, destruction, or some other terrible fate; to condemn to certain destruction or death.",
    "sentence": "When the terrified villagers suddenly saw the massive volcano violently erupting, they instantly knew that terrible {{BLANK}} was near.",
    "cn": "當驚恐的村民突然看到巨大的火山猛烈爆發時，他們立刻知道可怕的厄運即將來臨。"
  },
  {
    "word": "doomed",
    "pos": "adj.",
    "cn_def": "注定失敗的",
    "en_def": "likely to have an unfortunate and inescapable outcome; ill-fated.",
    "sentence": "Because of extremely poor management and terrible financial decisions, the struggling company was completely {{BLANK}} from the very beginning.",
    "cn": "由於極度糟糕的管理和可怕的財務決策，這家苦苦掙扎的公司從一開始就完全是注定失敗的。"
  },
  {
    "word": "doom and gloom",
    "pos": "phr.",
    "cn_def": "悲觀失望",
    "en_def": "a general feeling of pessimism or despondency.",
    "sentence": "Despite all the unexpected problems faced this difficult year, it is not all {{BLANK}} for the successful car maker.",
    "cn": "儘管在這個困難的一年面臨所有意想不到的問題，對這家成功的汽車製造商來說，並非一切都是悲觀失望。"
  },
  {
    "word": "impending doom",
    "pos": "phr.",
    "cn_def": "迫在眉睫的災難/厄運",
    "en_def": "an approaching disaster or terrible fate.",
    "sentence": "As the incredibly dark and heavy storm clouds quickly gathered, a terrifying sense of {{BLANK}} completely filled the quiet town.",
    "cn": "隨著極其黑暗厚重的風暴雲迅速聚集，一種可怕的迫在眉睫的厄運感完全充滿了這個安靜的小鎮。"
  },
  {
    "word": "spell doom",
    "pos": "phr.",
    "cn_def": "意味著毀滅/失敗",
    "en_def": "to suggest or guarantee a very bad outcome.",
    "sentence": "The completely unexpected lack of regular rain this summer could eventually {{BLANK}} for all the hardworking local farmers.",
    "cn": "今年夏天完全出乎意料地缺乏規律的降雨，最終可能會對所有辛勤工作的當地農民意味著毀滅（失敗）。"
  },
  {
    "word": "triggered",
    "pos": "v.",
    "cn_def": "引發",
    "en_def": "to cause an event or situation to happen or exist.",
    "sentence": "The massive and completely terrifying earthquake instantly {{BLANK}} a highly destructive landslide that completely ruined the small mountain village.",
    "cn": "巨大且完全可怕的地震瞬間引發了一場極具破壞性的山崩，徹底毀了這個山區小村莊。"
  },
  {
    "word": "trigger",
    "pos": "n.",
    "cn_def": "誘因；扳機",
    "en_def": "an event or circumstance that is the cause of a particular action, process, or situation.",
    "sentence": "If you genuinely want to easily quit smoking, you should definitely quickly learn the emotional {{BLANK}} that cause your bad habit.",
    "cn": "如果你真心想輕鬆戒菸，你絕對應該迅速了解導致你壞習慣的情感誘因。"
  },
  {
    "word": "triggered",
    "pos": "adj.",
    "cn_def": "被觸發的",
    "en_def": "caused to happen or exist.",
    "sentence": "The beautifully designed and highly sensitive alarm system is easily {{BLANK}} by absolutely any slight movement near the heavy front door.",
    "cn": "設計精美且高度敏感的警報系統，很容易被厚重前門附近的絕對任何輕微移動所觸發。"
  },
  {
    "word": "triggering",
    "pos": "adj.",
    "cn_def": "引起負面情緒的",
    "en_def": "causing a strong emotional reaction, typically one related to a past trauma.",
    "sentence": "Reading that highly detailed news article about the terrible car accident was incredibly {{BLANK}} for the completely traumatized young victim.",
    "cn": "閱讀那篇關於可怕車禍的高度詳細新聞文章，對完全受到創傷的年輕受害者來說是極度引起負面情緒的。"
  },
  {
    "word": "pull the trigger",
    "pos": "phr.",
    "cn_def": "做出最後決定（扣下扳機）",
    "en_def": "to commit to a course of action.",
    "sentence": "The confident manager finally decided to safely {{BLANK}} on the highly expensive new marketing project after months of careful planning.",
    "cn": "在幾個月的仔細規劃後，充滿自信的經理終於決定安全地對這個極其昂貴的新行銷專案做出最後決定（扣下扳機）。"
  },
  {
    "word": "intensified",
    "pos": "v.",
    "cn_def": "增強；加劇",
    "en_def": "to become or make more intense.",
    "sentence": "As the dangerous forest fire rapidly {{BLANK}}, the brave firefighters aggressively ordered absolutely everyone to quickly move far away from it.",
    "cn": "隨著危險的森林大火迅速加劇，勇敢的消防員積極地命令絕對每個人迅速遠離它。"
  },
  {
    "word": "intense",
    "pos": "adj.",
    "cn_def": "強烈的",
    "en_def": "of extreme force, degree, or strength.",
    "sentence": "The exhausted runners had to survive {{BLANK}} heat during the difficult and long summer marathon.",
    "cn": "筋疲力盡的跑者必須在困難且極長夏季馬拉松期間，小心地在強烈的高溫中生存下來。"
  },
  {
    "word": "intensity",
    "pos": "n.",
    "cn_def": "強度；強烈",
    "en_def": "the measurable amount of a property, such as force, brightness, or a magnetic field.",
    "sentence": "The terrifying {{BLANK}} of the sudden storm completely frightened all the quiet local residents who were safely sleeping inside.",
    "cn": "突發風暴可怕的強度（強烈），完全嚇壞了所有安全地在室內睡覺的安靜當地居民。"
  },
  {
    "word": "intensely",
    "pos": "adv.",
    "cn_def": "激烈地",
    "en_def": "with extreme force or strength.",
    "sentence": "The two highly competitive sports teams {{BLANK}} battled each other for the shiny golden championship trophy until the very last second.",
    "cn": "兩支競爭高度激烈的運動隊伍激烈地互相戰鬥，爭奪閃亮的金色冠軍獎盃，直到最後一秒。"
  },
  {
    "word": "intensification",
    "pos": "n.",
    "cn_def": "強化；加劇",
    "en_def": "the action of making or becoming more intense.",
    "sentence": "The rapid {{BLANK}} of the military conflict completely worried all the international leaders who deeply wanted to maintain global peace.",
    "cn": "軍事衝突快速的加劇完全讓所有深切希望維持全球和平的國際領導人感到擔憂。"
  },
  {
    "word": "induce",
    "pos": "v.",
    "cn_def": "引起；導致",
    "en_def": "to succeed in persuading or influencing someone to do something; to bring on or give rise to.",
    "sentence": "The special medicine I was given safely helped {{BLANK}} deep sleep, and I happily ended up completely resting for ten hours.",
    "cn": "我被給予的特殊藥物安全地幫助引起深度睡眠，我快樂地最終完全休息了十個小時。"
  },
  {
    "word": "inducement",
    "pos": "n.",
    "cn_def": "誘因；動機",
    "en_def": "a thing that persuades or influences someone to do something.",
    "sentence": "The generous company offered a massive cash {{BLANK}} to successfully attract highly skilled new workers to join their growing team.",
    "cn": "慷慨的公司提供了巨額的現金誘因，以成功吸引技術高超的新員工加入他們成長中的團隊。"
  },
  {
    "word": "induced",
    "pos": "adj.",
    "cn_def": "引起的",
    "en_def": "brought about or caused.",
    "sentence": "Because the patient was completely unable to sleep naturally, he was safely placed in a medically {{BLANK}} coma for two entire days.",
    "cn": "因為病患完全無法自然入睡，他被安全地置於醫學引起的昏迷狀態整整兩天。"
  },
  {
    "word": "induce sleep",
    "pos": "phr.",
    "cn_def": "引起睡眠",
    "en_def": "to cause someone to fall asleep.",
    "sentence": "Because the strong allergy medicine has a clear tendency to {{BLANK}}, you really shouldn't safely drive your car after taking it.",
    "cn": "因為強效過敏藥有明顯的引起睡眠傾向，你服用後真的不應該安全地駕駛你的車。"
  },
  {
    "word": "induced vomiting",
    "pos": "phr.",
    "cn_def": "催吐",
    "en_def": "to cause someone to empty the contents of the stomach through the mouth.",
    "sentence": "The experienced vet quickly {{BLANK}} to successfully save the foolish dog after it accidentally ate the highly toxic wild plant.",
    "cn": "經驗豐富的獸醫迅速催吐，以成功拯救那隻不小心吃了劇毒野生植物的愚蠢狗。"
  },
  {
    "word": "panic",
    "pos": "n. / v.",
    "cn_def": "恐慌；驚慌",
    "en_def": "sudden uncontrollable fear or anxiety; to feel sudden uncontrollable fear.",
    "sentence": "The unprepared students were in an absolute {{BLANK}} as they desperately tried to get their complex science project finished perfectly on time.",
    "cn": "毫無準備的學生處於絕對的恐慌之中，因為他們拚命地試圖完美準時地完成複雜的科學專案。"
  },
  {
    "word": "panicky",
    "pos": "adj.",
    "cn_def": "恐慌的",
    "en_def": "feeling or characterized by panic.",
    "sentence": "The deeply {{BLANK}} crowd desperately rushed towards the narrow exit doors when they suddenly heard the terrifying loud explosion in the dark.",
    "cn": "當深深恐慌的群眾在黑暗中突然聽到可怕巨大的爆炸聲時，他們拚命地衝向狹窄的出口門。"
  },
  {
    "word": "in a panic",
    "pos": "phr.",
    "cn_def": "驚慌失措地",
    "en_def": "in a state of sudden, overwhelming fear.",
    "sentence": "Realizing he had completely forgotten his important passport, the nervous traveler frantically searched his messy bedroom {{BLANK}}.",
    "cn": "意識到他完全忘記了重要的護照，緊張的旅客在他雜亂的臥室裡驚慌失措地瘋狂尋找。"
  },
  {
    "word": "panic attack",
    "pos": "phr.",
    "cn_def": "恐慌症發作",
    "en_def": "a sudden feeling of acute and disabling anxiety.",
    "sentence": "The highly anxious young woman tragically suffered a severe {{BLANK}} right before giving her major speech to the huge audience.",
    "cn": "這位極度焦慮的年輕女子在向廣大觀眾發表重要演講前，悲慘地遭受了嚴重的恐慌症發作。"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "cn_def": "反應",
    "en_def": "an action performed or a feeling experienced in response to a situation or event.",
    "sentence": "What was Leo's initial {{BLANK}} when you finally told him the incredibly surprising news about the sudden and highly complex company merger?",
    "cn": "當你終於告訴李奧關於突然且高度複雜的公司合併這個極其令人驚訝的消息時，他最初的反應是什麼？"
  },
  {
    "word": "react",
    "pos": "v.",
    "cn_def": "反應",
    "en_def": "to respond or behave in a particular way in response to something.",
    "sentence": "It is important to observe how the volatile chemicals {{BLANK}} when they are finally mixed together.",
    "cn": "仔細觀察揮發性的化學物質在最終混合在一起時究竟如何反應，是重要的。"
  },
  {
    "word": "reactive",
    "pos": "adj.",
    "cn_def": "反應的；活性的",
    "en_def": "showing a response to a stimulus.",
    "sentence": "The {{BLANK}} substance must be stored in a dark and cool room to prevent any dangerous explosions.",
    "cn": "這種活性的物質必須仔細地儲存在黑暗涼爽的房間裡，以防止任何危險的爆炸。"
  },
  {
    "word": "overreact",
    "pos": "v.",
    "cn_def": "反應過度",
    "en_def": "to respond more emotionally or forcibly than is justified.",
    "sentence": "Please try your best not to aggressively {{BLANK}} to his incredibly harsh criticism, as he is just having a truly terrible day.",
    "cn": "請盡你最大的努力不要對他極其嚴厲的批評積極地反應過度，因為他只是經歷了真正糟糕的一天。"
  },
  {
    "word": "chain reaction",
    "pos": "phr.",
    "cn_def": "連鎖反應",
    "en_def": "a series of events, each caused by the previous one.",
    "sentence": "The sudden and completely unexpected collapse of the massive local bank immediately caused a terrifying {{BLANK}} throughout the entire global economy.",
    "cn": "龐大當地銀行突然且完全出乎意料的倒塌，立刻在整個全球經濟中引起了可怕的連鎖反應。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "關鍵的",
    "en_def": "decisive or critical, especially in the success or failure of something.",
    "sentence": "The diligent police detectives eventually found a highly {{BLANK}} piece of hidden evidence at the completely messy and totally dark crime scene.",
    "cn": "勤奮的警探最終在完全雜亂且完全黑暗的犯罪現場找到了一件高度關鍵的隱藏證據。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "關鍵的；批評的",
    "en_def": "expressing adverse or disapproving comments or judgments; having a decisive or crucial importance.",
    "sentence": "The knowledgeable doctor carefully explained that it is absolutely {{BLANK}} that the fragile young patient receives plenty of rest after the surgery.",
    "cn": "知識淵博的醫生仔細解釋說，脆弱的年輕病患在手術後獲得充足的休息是絕對關鍵的。"
  },
  {
    "word": "crucially",
    "pos": "adv.",
    "cn_def": "關鍵地",
    "en_def": "with decisive or vital importance.",
    "sentence": "The brand new safety protocol is {{BLANK}} important for completely preventing any future accidents in this highly dangerous and busy chemical factory.",
    "cn": "全新的安全協議對於徹底防止這家高度危險且繁忙的化學工廠未來發生任何事故是關鍵地重要。"
  },
  {
    "word": "play a crucial role",
    "pos": "phr.",
    "cn_def": "扮演關鍵角色",
    "en_def": "to have a very important part in something.",
    "sentence": "Healthy and completely fresh green vegetables {{BLANK}} in effectively maintaining an excellent and highly balanced daily diet.",
    "cn": "健康且完全新鮮的綠色蔬菜在有效地維持極佳且高度均衡的日常飲食中扮演關鍵角色。"
  },
  {
    "word": "crucial decision",
    "pos": "phr.",
    "cn_def": "關鍵決定",
    "en_def": "a very important choice.",
    "sentence": "The highly ambitious young manager finally had to make a completely {{BLANK}} regarding the highly uncertain future of the struggling business.",
    "cn": "極具雄心的年輕經理最終不得不對這家苦苦掙扎企業高度不確定的未來做出完全關鍵決定。"
  },
  {
    "word": "affordable",
    "pos": "adj.",
    "cn_def": "負擔得起的",
    "en_def": "inexpensive; reasonably priced.",
    "sentence": "After searching carefully for several long months, we finally found a highly {{BLANK}} home in a remarkably safe and totally quiet neighborhood.",
    "cn": "在仔細尋找了幾個月後，我們終於在一個非常安全且完全安靜的社區裡找到了一棟高度負擔得起的房子。"
  },
  {
    "word": "afford",
    "pos": "v.",
    "cn_def": "負擔得起",
    "en_def": "to have enough money to pay for.",
    "sentence": "Because the long international flights are currently much too expensive, our large family simply cannot {{BLANK}} to travel to beautiful Europe this year.",
    "cn": "因為長途國際航班目前太昂貴了，我們這個大家庭今年根本負擔不起去美麗的歐洲旅行。"
  },
  {
    "word": "affordability",
    "pos": "n.",
    "cn_def": "負擔能力",
    "en_def": "the state of being cheap enough for people to be able to buy.",
    "sentence": "The sudden and complete lack of housing {{BLANK}} in the completely crowded modern city is a truly massive financial problem for young people.",
    "cn": "完全擁擠的現代城市突然且完全缺乏住房負擔能力，對年輕人來說是一個真正巨大的財務問題。"
  },
  {
    "word": "unaffordable",
    "pos": "adj.",
    "cn_def": "負擔不起的",
    "en_def": "too expensive to be afforded by the average person.",
    "sentence": "The highly luxurious new sports car is completely {{BLANK}} for the completely average young worker who only earns a highly modest monthly salary.",
    "cn": "這輛極度豪華的新跑車，對於只賺取非常微薄月薪的完全普通年輕工人來說是完全負擔不起的。"
  },
  {
    "word": "highly affordable",
    "pos": "phr.",
    "cn_def": "非常負擔得起的",
    "en_def": "very inexpensive or reasonably priced.",
    "sentence": "The brand new local restaurant conveniently serves absolutely delicious and {{BLANK}} food that completely satisfies all the extremely hungry college students.",
    "cn": "這家全新的當地餐廳方便地提供絕對美味且非常負擔得起的食物，完全滿足了所有極度飢餓的大學生。"
  },
  {
    "word": "stabilize",
    "pos": "v.",
    "cn_def": "使穩定",
    "en_def": "to make or become unlikely to change, fail, or decline.",
    "sentence": "The deeply worried government's desperate financial efforts to quickly {{BLANK}} the completely struggling national economy have unfortunately completely failed so far.",
    "cn": "深感憂慮的政府為迅速使完全苦苦掙扎的國家經濟穩定而做出的絕望財務努力，不幸地至今完全失敗了。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "not likely to give way or overturn; firmly fixed.",
    "sentence": "The completely relieved doctor happily reported that the injured young patient's physical condition is finally entirely {{BLANK}} after the incredibly long surgery.",
    "cn": "完全鬆了一口氣的醫生高興地報告說，受傷年輕病患的身體狀況在經歷了極其漫長的手術後終於完全穩定的。"
  },
  {
    "word": "unstable",
    "pos": "adj.",
    "cn_def": "不穩定的",
    "en_def": "prone to change, fail, or give way; not stable.",
    "sentence": "Because the old broken wooden chair is highly {{BLANK}}, you should definitely avoid standing on it to successfully reach the high shelf.",
    "cn": "因為這把破舊木椅高度不穩定的，你絕對應該避免站在上面以成功夠到高處的架子。"
  },
  {
    "word": "stability",
    "pos": "n.",
    "cn_def": "穩定（性）",
    "en_def": "the state of being stable.",
    "sentence": "Many hardworking older people actively seek absolute financial {{BLANK}} so they can comfortably retire without constantly worrying about their daily living expenses.",
    "cn": "許多辛勤工作的年長者積極尋求絕對的財務穩定（性），以便他們能舒適地退休，而不用不斷擔心他們的日常開銷。"
  },
  {
    "word": "instability",
    "pos": "n.",
    "cn_def": "不穩定（性）",
    "en_def": "tendency to unpredictable behavior or erratic changes of mood.",
    "sentence": "The sudden and completely unexpected political {{BLANK}} in the developing country heavily discouraged foreign investors from completely funding any brand new local projects.",
    "cn": "這個開發中國家突然且完全出乎意料的政治不穩定（性），重重地阻礙了外國投資者完全資助任何全新的當地專案。"
  },
  {
    "word": "thrive",
    "pos": "v.",
    "cn_def": "茁壯成長；繁榮",
    "en_def": "to grow or develop well or vigorously.",
    "sentence": "It is extremely difficult for a brand new small business to successfully {{BLANK}} in the currently highly competitive and deeply challenging economic climate.",
    "cn": "對於一家全新的小型企業來說，在目前競爭高度激烈且極具挑戰性的經濟環境中成功繁榮是極其困難的。"
  },
  {
    "word": "flourishing",
    "pos": "adj.",
    "cn_def": "繁榮的",
    "en_def": "developing rapidly and successfully; thriving.",
    "sentence": "With plenty of bright sunlight and completely clean water, the delicate tropical plants are completely {{BLANK}} beautifully in your brand new backyard garden.",
    "cn": "有了充足明亮的陽光和完全乾淨的水，這些精緻的熱帶植物正在你全新的後院花園裡美麗地完全繁榮的（茁壯成長）。"
  },
  {
    "word": "thriving",
    "pos": "adj.",
    "cn_def": "繁榮的",
    "en_def": "prosperous and growing; flourishing.",
    "sentence": "The incredibly {{BLANK}} international tourist industry reliably provides millions of highly essential jobs for the completely hardworking local residents of the beautiful island.",
    "cn": "這個極其繁榮的國際旅遊業可靠地為這座美麗島嶼上完全辛勤工作的當地居民提供了數以百萬計的高度重要工作。"
  },
  {
    "word": "thrive on",
    "pos": "phr.",
    "cn_def": "喜歡；在...中茁壯成長",
    "en_def": "to grow, develop, or be successful in a particular environment or situation.",
    "sentence": "The highly ambitious young extreme sports enthusiast seems to completely {{BLANK}} intense danger and pure excitement during his highly dangerous professional competitions.",
    "cn": "這位極具雄心的年輕極限運動愛好者，似乎在他高度危險的職業比賽中完全喜歡（在...中茁壯成長）強烈的危險和純粹的刺激。"
  },
  {
    "word": "thrive in",
    "pos": "phr.",
    "cn_def": "在...中茁壯成長",
    "en_def": "to flourish in a specific setting.",
    "sentence": "These incredibly beautiful and highly delicate rare flowers naturally {{BLANK}} completely warm and exceptionally humid tropical environments far away from the city.",
    "cn": "這些極其美麗且高度精緻的稀有花朵，天生就能在遠離城市的完全溫暖且異常潮濕的熱帶環境中茁壯成長。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "多產的；有生產力的",
    "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
    "sentence": "Only highly skilled workers who are consistently very {{BLANK}} get successfully hired at this incredibly demanding and totally modern international software company.",
    "cn": "只有始終非常有生產力的高技能工人，才能成功受僱於這家要求極高且完全現代化的國際軟體公司。"
  },
  {
    "word": "productively",
    "pos": "adv.",
    "cn_def": "有生產力地",
    "en_def": "in a way that produces large amounts of goods or achieves a significant result.",
    "sentence": "If you successfully learn to manage your extremely limited daily time {{BLANK}}, you will easily finish absolutely all your difficult tasks before the deadline.",
    "cn": "如果你成功學會有生產力地管理你極其有限的日常時間，你將能輕鬆在截止日期前完成絕對所有困難的任務。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "the state or quality of producing something.",
    "sentence": "The strict office manager constantly heavily complains that the overall {{BLANK}} in the deeply busy office significantly drops during the incredibly hot summer months.",
    "cn": "嚴格的辦公室經理不斷強烈抱怨，在極度炎熱的夏季月份，繁忙辦公室的整體生產力會顯著下降。"
  },
  {
    "word": "unproductive",
    "pos": "adj.",
    "cn_def": "無生產力的",
    "en_def": "not producing or able to produce large amounts of goods, crops, or other commodities.",
    "sentence": "Spending several long hours lazily scrolling through highly addictive social media is a completely {{BLANK}} way to completely waste your precious quiet evening.",
    "cn": "花費數個漫長的小時懶洋洋地滑高度令人上癮的社群媒體，是一種完全無生產力的方式，徹底浪費了你寶貴安靜的夜晚。"
  },
  {
    "word": "highly productive",
    "pos": "phr.",
    "cn_def": "高度有生產力的",
    "en_def": "extremely efficient and yielding good results.",
    "sentence": "The incredibly energetic and totally creative work team had a {{BLANK}} morning and completely finished the massive office project two whole days early.",
    "cn": "這支極其充滿活力且完全富有創意的團隊度過了一個高度有生產力的早晨，並提前整整兩天完全完成了這個龐大的辦公室專案。"
  }
];

const MCQS = [
  {
    "q": "Because of her highly unusual sleeping ______, Sarah usually struggles to stay awake during long afternoon meetings.",
    "options": [
      "delicacy",
      "instability",
      "abnormality",
      "disorder"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "After suffering from a severe ______ for years, the young woman finally sought professional medical help.",
    "options": [
      "induce sleep",
      "anxiety disorder",
      "mental disorder",
      "thrive on"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The incredibly worried parents noticed their teenage daughter was secretly battling a dangerous ______.",
    "options": [
      "eating disorder",
      "subject to change",
      "anxiety disorder",
      "highly affordable"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The experienced psychologist carefully explained that this specific ______ is surprisingly common among highly stressed workers.",
    "options": [
      "relieve the painful symptoms",
      "play a crucial role",
      "mental disorder",
      "impending doom"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The strict teacher strictly demanded that all the messy desks be placed ______ before the students left.",
    "options": [
      "highly fragile",
      "in perfect order",
      "induce sleep",
      "in a panic"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Despite the terrible global economic crisis, the completely ______ company surprisingly continued to increase its annual profits.",
    "options": [
      "robust",
      "unstable",
      "affordable",
      "mental"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The highly energetic and healthy athlete completely enjoys a ______ workout early every single morning before breakfast.",
    "options": [
      "induced",
      "physical",
      "symptomatic",
      "vigorous"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "You must absolutely handle that incredibly ______ glass vase with great care so you do not accidentally break it.",
    "options": [
      "delicate",
      "flourishing",
      "fragile",
      "symptomatic"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The shocking collapse of the old building clearly demonstrated the terrifying ______ of such ancient wooden structures.",
    "options": [
      "fragility",
      "productivity",
      "affordability",
      "abnormality"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Because his physical condition was still ______ after the major surgery, he couldn't leave the hospital yet.",
    "options": [
      "mental health",
      "highly fragile",
      "impending doom",
      "common symptom"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The chef skillfully added a very ______ blend of rare spices to completely elevate the flavor of the hot soup.",
    "options": [
      "doomed",
      "vigorous",
      "triggering",
      "delicate"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Grilled Wagyu beef is considered a rare ______ that many international tourists love to try when visiting Japan.",
    "options": [
      "tormentor",
      "abnormality",
      "delicacy",
      "disorder"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Since the young child does not eat enough healthy vegetables, he is heavily ______ to catching the winter flu.",
    "options": [
      "intense",
      "diagnostic",
      "abnormal",
      "susceptible"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Thanks to the newly developed medical vaccine, the healthy patients are now largely ______ to the dangerous virus.",
    "options": [
      "fragile",
      "unsusceptible",
      "susceptible",
      "mental"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Older people with weak hearts tend to ______ dangerous health problems during freezing weather.",
    "options": [
      "highly affordable",
      "mental disorder",
      "be much more susceptible to",
      "mental health"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Elderly people and young children are often more ______ catching severe seasonal flu during the cold winter.",
    "options": [
      "susceptible to",
      "was officially diagnosed with",
      "pull the trigger",
      "common symptom"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The completely destroyed city walls left the terrified citizens totally ______ to a sudden attack by the angry enemy.",
    "options": [
      "vigorous",
      "vulnerable",
      "robust",
      "productive"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Without a secure password and firewall protection, the online database is highly ______ cyberattacks.",
    "options": [
      "highly affordable",
      "induce sleep",
      "vulnerable to",
      "highly fragile"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "All international passengers arriving at the airport are ______ a strict security check by law enforcement.",
    "options": [
      "pull the trigger",
      "panic attack",
      "doom and gloom",
      "subject to"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The schedule for the summer vocabulary camp is ______ depending on the weather conditions.",
    "options": [
      "subject to change",
      "was officially diagnosed with",
      "relieve the painful symptoms",
      "doom and gloom"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The highly experienced doctor repeatedly emphasized that maintaining good ______ health is just as important as physical fitness.",
    "options": [
      "diagnostic",
      "mental",
      "susceptible",
      "induced"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "After completely failing the difficult exam, the exhausted student understandably felt physically and ______ defeated by the terrible experience.",
    "options": [
      "intensely",
      "productively",
      "crucially",
      "mentally"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "If you want to survive in this highly competitive business world, you must actively adopt a strong winning ______.",
    "options": [
      "mentality",
      "instability",
      "delicacy",
      "doom"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The modern hospital recently opened a brand new department specifically dedicated to improving the ______ of local teenagers.",
    "options": [
      "mental disorder",
      "impending doom",
      "mental health",
      "pull the trigger"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Engaging in rigorous daily exercise is absolutely necessary for properly maintaining your overall excellent ______ health and strength.",
    "options": [
      "vulnerable",
      "delicate",
      "asymptomatic",
      "physical"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The professional doctor was finally able to correctly ______ the strange illness after carefully reviewing all the test results.",
    "options": [
      "overreact",
      "diagnose",
      "intensified",
      "induce"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Poor Alan was tragically absolutely shocked when he ______ advanced type two diabetes last month.",
    "options": [
      "chain reaction",
      "highly fragile",
      "was officially diagnosed with",
      "in perfect order"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The deeply worried parents waited anxiously for several long hours before the specialist finally delivered a clear medical ______.",
    "options": [
      "diagnosis",
      "abnormality",
      "delicacy",
      "stability"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The hospital recently purchased several highly expensive ______ machines to help doctors quickly identify rare and complex diseases.",
    "options": [
      "fragile",
      "diagnostic",
      "vigorous",
      "crippling"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "If a careless doctor happens to completely ______ a serious illness, the patient could suffer from totally incorrect treatments.",
    "options": [
      "misdiagnose",
      "stabilize",
      "disable",
      "induce"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The completely unexpected and highly destructive global pandemic heavily managed to ______ the entire international travel industry perfectly.",
    "options": [
      "overreact",
      "disable",
      "misdiagnose",
      "cripple"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The highly skilled computer technician had to urgently ______ the dangerous virus before it could destroy the office network.",
    "options": [
      "stabilize",
      "cripple",
      "disable",
      "afford"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The sudden financial disaster unfortunately dealt a completely ______ blow to all the struggling small business owners in town.",
    "options": [
      "doomed",
      "crippling",
      "crucial",
      "susceptible"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The completely brave but highly unfortunate soldier was sadly left permanently ______ by the terrible injuries he deeply suffered.",
    "options": [
      "unsusceptible",
      "normal",
      "crippled",
      "abnormal"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Those beautifully bright red ladybugs ______ live for about one year, but some can surprisingly survive much longer.",
    "options": [
      "normally",
      "intensely",
      "productively",
      "crucially"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Feeling completely anxious before a major public presentation is an entirely ______ human reaction that everyone experiences sometimes.",
    "options": [
      "flourishing",
      "fragile",
      "crippling",
      "normal"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Working comfortably from home using a computer has rapidly become the accepted ______ for many modern office employees.",
    "options": [
      "inducement",
      "norm",
      "doom",
      "mentality"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "The careful doctor noticed a highly ______ heartbeat during the routine physical examination and immediately ordered more medical tests.",
    "options": [
      "vulnerable",
      "affordable",
      "triggered",
      "abnormal"
    ],
    "answer": 3,
    "vocabIndex": 37
  },
  {
    "q": "The detailed blood test perfectly revealed a slight ______ that might effectively explain why the patient feels constantly tired.",
    "options": [
      "abnormality",
      "torture",
      "norm",
      "doom"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "The massive amount of money won in court could not entirely undo the years of terrible ______ she suffered.",
    "options": [
      "stability",
      "diagnosis",
      "torment",
      "fragility"
    ],
    "answer": 2,
    "vocabIndex": 39
  },
  {
    "q": "The angry and completely uncontrollable young girl constantly ______ her exhausted mother with her incredibly bad and selfish behavior.",
    "options": [
      "tormented",
      "afford",
      "stabilize",
      "overreact"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Having to patiently sit through that incredibly boring three-hour meeting felt like absolute ______ to everyone in the room.",
    "options": [
      "delicacy",
      "agony",
      "torture",
      "inducement"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "The heavily injured athlete collapsed onto the green grass and loudly cried out in absolute ______ after breaking his leg.",
    "options": [
      "delicacy",
      "disorder",
      "stability",
      "agony"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "The brave young boy finally decided to confidently stand up to the cruel ______ who had bullied him for years.",
    "options": [
      "norm",
      "tormentor",
      "fragility",
      "reaction"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "An incredibly sore throat and a deeply persistent cough are highly common ______ of a terrible and dangerous cold.",
    "options": [
      "symptom",
      "disorder",
      "fragility",
      "reaction"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "Because the patient is heavily ______, he must strictly stay in his hospital room to avoid infecting other people.",
    "options": [
      "diagnostic",
      "symptomatic",
      "critical",
      "unproductive"
    ],
    "answer": 1,
    "vocabIndex": 45
  },
  {
    "q": "Even if you are completely ______, you can still unknowingly spread the dangerous virus to your highly vulnerable grandparents.",
    "options": [
      "thriving",
      "normal",
      "asymptomatic",
      "vigorous"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "The friendly pharmacist strongly suggested this specific medicine to effectively ______ of your severe winter cold.",
    "options": [
      "highly fragile",
      "panic attack",
      "induced vomiting",
      "relieve the painful symptoms"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "A sudden loss of taste is a highly ______ that often indicates you have caught that particular dangerous virus.",
    "options": [
      "relieve the painful symptoms",
      "highly fragile",
      "common symptom",
      "highly affordable"
    ],
    "answer": 2,
    "vocabIndex": 48
  },
  {
    "q": "When the terrified villagers suddenly saw the massive volcano violently erupting, they instantly knew that terrible ______ was near.",
    "options": [
      "disorder",
      "doom",
      "torment",
      "delicacy"
    ],
    "answer": 1,
    "vocabIndex": 49
  },
  {
    "q": "Because of extremely poor management and terrible financial decisions, the struggling company was completely ______ from the very beginning.",
    "options": [
      "productive",
      "vulnerable",
      "affordable",
      "doomed"
    ],
    "answer": 3,
    "vocabIndex": 50
  },
  {
    "q": "Despite all the unexpected problems faced this difficult year, it is not all ______ for the successful car maker.",
    "options": [
      "doom and gloom",
      "thrive on",
      "impending doom",
      "in perfect order"
    ],
    "answer": 0,
    "vocabIndex": 51
  },
  {
    "q": "As the incredibly dark and heavy storm clouds quickly gathered, a terrifying sense of ______ completely filled the quiet town.",
    "options": [
      "spell doom",
      "in perfect order",
      "induce sleep",
      "impending doom"
    ],
    "answer": 3,
    "vocabIndex": 52
  },
  {
    "q": "The completely unexpected lack of regular rain this summer could eventually ______ for all the hardworking local farmers.",
    "options": [
      "thrive in",
      "spell doom",
      "vulnerable to",
      "highly productive"
    ],
    "answer": 1,
    "vocabIndex": 53
  },
  {
    "q": "The massive and completely terrifying earthquake instantly ______ a highly destructive landslide that completely ruined the small mountain village.",
    "options": [
      "diagnose",
      "react",
      "triggered",
      "afford"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "If you genuinely want to easily quit smoking, you should definitely quickly learn the emotional ______ that cause your bad habit.",
    "options": [
      "trigger",
      "intensity",
      "inducement",
      "instability"
    ],
    "answer": 0,
    "vocabIndex": 55
  },
  {
    "q": "The beautifully designed and highly sensitive alarm system is easily ______ by absolutely any slight movement near the heavy front door.",
    "options": [
      "asymptomatic",
      "triggered",
      "crippled",
      "reactive"
    ],
    "answer": 1,
    "vocabIndex": 56
  },
  {
    "q": "Reading that highly detailed news article about the terrible car accident was incredibly ______ for the completely traumatized young victim.",
    "options": [
      "doomed",
      "fragile",
      "critical",
      "triggering"
    ],
    "answer": 3,
    "vocabIndex": 57
  },
  {
    "q": "The confident manager finally decided to safely ______ on the highly expensive new marketing project after months of careful planning.",
    "options": [
      "subject to",
      "play a crucial role",
      "pull the trigger",
      "anxiety disorder"
    ],
    "answer": 2,
    "vocabIndex": 58
  },
  {
    "q": "As the dangerous forest fire rapidly ______, the brave firefighters aggressively ordered absolutely everyone to quickly move far away from it.",
    "options": [
      "intensified",
      "react",
      "stabilize",
      "cripple"
    ],
    "answer": 0,
    "vocabIndex": 59
  },
  {
    "q": "The exhausted runners had to survive ______ heat during the difficult and long summer marathon.",
    "options": [
      "unproductive",
      "intense",
      "fragile",
      "doomed"
    ],
    "answer": 1,
    "vocabIndex": 60
  },
  {
    "q": "The terrifying ______ of the sudden storm completely frightened all the quiet local residents who were safely sleeping inside.",
    "options": [
      "panic",
      "inducement",
      "norm",
      "intensity"
    ],
    "answer": 3,
    "vocabIndex": 61
  },
  {
    "q": "The two highly competitive sports teams ______ battled each other for the shiny golden championship trophy until the very last second.",
    "options": [
      "productively",
      "mentally",
      "intensely",
      "normally"
    ],
    "answer": 2,
    "vocabIndex": 62
  },
  {
    "q": "The rapid ______ of the military conflict completely worried all the international leaders who deeply wanted to maintain global peace.",
    "options": [
      "intensification",
      "diagnosis",
      "delicacy",
      "inducement"
    ],
    "answer": 0,
    "vocabIndex": 63
  },
  {
    "q": "The special medicine I was given safely helped ______ deep sleep, and I happily ended up completely resting for ten hours.",
    "options": [
      "misdiagnose",
      "intensified",
      "induce",
      "afford"
    ],
    "answer": 2,
    "vocabIndex": 64
  },
  {
    "q": "The generous company offered a massive cash ______ to successfully attract highly skilled new workers to join their growing team.",
    "options": [
      "delicacy",
      "inducement",
      "affordability",
      "intensity"
    ],
    "answer": 1,
    "vocabIndex": 65
  },
  {
    "q": "Because the patient was completely unable to sleep naturally, he was safely placed in a medically ______ coma for two entire days.",
    "options": [
      "susceptible",
      "triggering",
      "critical",
      "induced"
    ],
    "answer": 3,
    "vocabIndex": 66
  },
  {
    "q": "Because the strong allergy medicine has a clear tendency to ______, you really shouldn't safely drive your car after taking it.",
    "options": [
      "induce sleep",
      "play a crucial role",
      "highly productive",
      "common symptom"
    ],
    "answer": 0,
    "vocabIndex": 67
  },
  {
    "q": "The experienced vet quickly ______ to successfully save the foolish dog after it accidentally ate the highly toxic wild plant.",
    "options": [
      "eating disorder",
      "induce sleep",
      "induced vomiting",
      "be much more susceptible to"
    ],
    "answer": 2,
    "vocabIndex": 68
  },
  {
    "q": "The unprepared students were in an absolute ______ as they desperately tried to get their complex science project finished perfectly on time.",
    "options": [
      "panic",
      "trigger",
      "fragility",
      "delicacy"
    ],
    "answer": 0,
    "vocabIndex": 69
  },
  {
    "q": "The deeply ______ crowd desperately rushed towards the narrow exit doors when they suddenly heard the terrifying loud explosion in the dark.",
    "options": [
      "asymptomatic",
      "unstable",
      "crippling",
      "panicky"
    ],
    "answer": 3,
    "vocabIndex": 70
  },
  {
    "q": "Realizing he had completely forgotten his important passport, the nervous traveler frantically searched his messy bedroom ______.",
    "options": [
      "spell doom",
      "in a panic",
      "relieve the painful symptoms",
      "doom and gloom"
    ],
    "answer": 1,
    "vocabIndex": 71
  },
  {
    "q": "The highly anxious young woman tragically suffered a severe ______ right before giving her major speech to the huge audience.",
    "options": [
      "induce sleep",
      "mental health",
      "common symptom",
      "panic attack"
    ],
    "answer": 3,
    "vocabIndex": 72
  },
  {
    "q": "What was Leo's initial ______ when you finally told him the incredibly surprising news about the sudden and highly complex company merger?",
    "options": [
      "reaction",
      "delicacy",
      "norm",
      "instability"
    ],
    "answer": 0,
    "vocabIndex": 73
  },
  {
    "q": "It is important to observe how the volatile chemicals ______ when they are finally mixed together.",
    "options": [
      "diagnose",
      "react",
      "disable",
      "induce"
    ],
    "answer": 1,
    "vocabIndex": 74
  },
  {
    "q": "The ______ substance must be stored in a dark and cool room to prevent any dangerous explosions.",
    "options": [
      "normal",
      "unstable",
      "reactive",
      "asymptomatic"
    ],
    "answer": 2,
    "vocabIndex": 75
  },
  {
    "q": "Please try your best not to aggressively ______ to his incredibly harsh criticism, as he is just having a truly terrible day.",
    "options": [
      "diagnose",
      "intensified",
      "disable",
      "overreact"
    ],
    "answer": 3,
    "vocabIndex": 76
  },
  {
    "q": "The sudden and completely unexpected collapse of the massive local bank immediately caused a terrifying ______ throughout the entire global economy.",
    "options": [
      "subject to",
      "chain reaction",
      "subject to change",
      "highly affordable"
    ],
    "answer": 1,
    "vocabIndex": 77
  },
  {
    "q": "The diligent police detectives eventually found a highly ______ piece of hidden evidence at the completely messy and totally dark crime scene.",
    "options": [
      "crucial",
      "panicky",
      "stable",
      "critical"
    ],
    "answer": 0,
    "vocabIndex": 78
  },
  {
    "q": "The knowledgeable doctor carefully explained that it is absolutely ______ that the fragile young patient receives plenty of rest after the surgery.",
    "options": [
      "panicky",
      "crucial",
      "critical",
      "vulnerable"
    ],
    "answer": 2,
    "vocabIndex": 79
  },
  {
    "q": "The brand new safety protocol is ______ important for completely preventing any future accidents in this highly dangerous and busy chemical factory.",
    "options": [
      "crucially",
      "intensely",
      "mentally",
      "normally"
    ],
    "answer": 0,
    "vocabIndex": 80
  },
  {
    "q": "Healthy and completely fresh green vegetables ______ in effectively maintaining an excellent and highly balanced daily diet.",
    "options": [
      "in a panic",
      "common symptom",
      "play a crucial role",
      "anxiety disorder"
    ],
    "answer": 2,
    "vocabIndex": 81
  },
  {
    "q": "The highly ambitious young manager finally had to make a completely ______ regarding the highly uncertain future of the struggling business.",
    "options": [
      "highly fragile",
      "crucial decision",
      "anxiety disorder",
      "panic attack"
    ],
    "answer": 1,
    "vocabIndex": 82
  },
  {
    "q": "After searching carefully for several long months, we finally found a highly ______ home in a remarkably safe and totally quiet neighborhood.",
    "options": [
      "unaffordable",
      "susceptible",
      "fragile",
      "affordable"
    ],
    "answer": 3,
    "vocabIndex": 83
  },
  {
    "q": "Because the long international flights are currently much too expensive, our large family simply cannot ______ to travel to beautiful Europe this year.",
    "options": [
      "tormented",
      "afford",
      "diagnose",
      "disable"
    ],
    "answer": 1,
    "vocabIndex": 84
  },
  {
    "q": "The sudden and complete lack of housing ______ in the completely crowded modern city is a truly massive financial problem for young people.",
    "options": [
      "stability",
      "intensification",
      "affordability",
      "norm"
    ],
    "answer": 2,
    "vocabIndex": 85
  },
  {
    "q": "The highly luxurious new sports car is completely ______ for the completely average young worker who only earns a highly modest monthly salary.",
    "options": [
      "unaffordable",
      "robust",
      "fragile",
      "crippled"
    ],
    "answer": 0,
    "vocabIndex": 86
  },
  {
    "q": "The brand new local restaurant conveniently serves absolutely delicious and ______ food that completely satisfies all the extremely hungry college students.",
    "options": [
      "pull the trigger",
      "in perfect order",
      "induced vomiting",
      "highly affordable"
    ],
    "answer": 3,
    "vocabIndex": 87
  },
  {
    "q": "The deeply worried government's desperate financial efforts to quickly ______ the completely struggling national economy have unfortunately completely failed so far.",
    "options": [
      "thrive",
      "stabilize",
      "disable",
      "induce"
    ],
    "answer": 1,
    "vocabIndex": 88
  },
  {
    "q": "The completely relieved doctor happily reported that the injured young patient's physical condition is finally entirely ______ after the incredibly long surgery.",
    "options": [
      "stable",
      "susceptible",
      "crippled",
      "triggering"
    ],
    "answer": 0,
    "vocabIndex": 89
  },
  {
    "q": "Because the old broken wooden chair is highly ______, you should definitely avoid standing on it to successfully reach the high shelf.",
    "options": [
      "robust",
      "physical",
      "unaffordable",
      "unstable"
    ],
    "answer": 3,
    "vocabIndex": 90
  },
  {
    "q": "Many hardworking older people actively seek absolute financial ______ so they can comfortably retire without constantly worrying about their daily living expenses.",
    "options": [
      "torture",
      "symptom",
      "stability",
      "instability"
    ],
    "answer": 2,
    "vocabIndex": 91
  },
  {
    "q": "The sudden and completely unexpected political ______ in the developing country heavily discouraged foreign investors from completely funding any brand new local projects.",
    "options": [
      "stability",
      "torment",
      "inducement",
      "instability"
    ],
    "answer": 3,
    "vocabIndex": 92
  },
  {
    "q": "It is extremely difficult for a brand new small business to successfully ______ in the currently highly competitive and deeply challenging economic climate.",
    "options": [
      "thrive",
      "misdiagnose",
      "overreact",
      "cripple"
    ],
    "answer": 0,
    "vocabIndex": 93
  },
  {
    "q": "With plenty of bright sunlight and completely clean water, the delicate tropical plants are completely ______ beautifully in your brand new backyard garden.",
    "options": [
      "reactive",
      "flourishing",
      "thriving",
      "triggered"
    ],
    "answer": 1,
    "vocabIndex": 94
  },
  {
    "q": "The incredibly ______ international tourist industry reliably provides millions of highly essential jobs for the completely hardworking local residents of the beautiful island.",
    "options": [
      "diagnostic",
      "critical",
      "thriving",
      "symptomatic"
    ],
    "answer": 2,
    "vocabIndex": 95
  },
  {
    "q": "The highly ambitious young extreme sports enthusiast seems to completely ______ intense danger and pure excitement during his highly dangerous professional competitions.",
    "options": [
      "play a crucial role",
      "thrive on",
      "induce sleep",
      "mental health"
    ],
    "answer": 1,
    "vocabIndex": 96
  },
  {
    "q": "These incredibly beautiful and highly delicate rare flowers naturally ______ completely warm and exceptionally humid tropical environments far away from the city.",
    "options": [
      "mental disorder",
      "play a crucial role",
      "induce sleep",
      "thrive in"
    ],
    "answer": 3,
    "vocabIndex": 97
  },
  {
    "q": "Only highly skilled workers who are consistently very ______ get successfully hired at this incredibly demanding and totally modern international software company.",
    "options": [
      "crippled",
      "triggered",
      "productive",
      "unsusceptible"
    ],
    "answer": 2,
    "vocabIndex": 98
  },
  {
    "q": "If you successfully learn to manage your extremely limited daily time ______, you will easily finish absolutely all your difficult tasks before the deadline.",
    "options": [
      "productively",
      "intensely",
      "mentally",
      "crucially"
    ],
    "answer": 0,
    "vocabIndex": 99
  },
  {
    "q": "The strict office manager constantly heavily complains that the overall ______ in the deeply busy office significantly drops during the incredibly hot summer months.",
    "options": [
      "trigger",
      "tormentor",
      "productivity",
      "reaction"
    ],
    "answer": 2,
    "vocabIndex": 100
  },
  {
    "q": "Spending several long hours lazily scrolling through highly addictive social media is a completely ______ way to completely waste your precious quiet evening.",
    "options": [
      "susceptible",
      "productive",
      "mental",
      "unproductive"
    ],
    "answer": 3,
    "vocabIndex": 101
  },
  {
    "q": "The incredibly energetic and totally creative work team had a ______ morning and completely finished the massive office project two whole days early.",
    "options": [
      "highly productive",
      "highly affordable",
      "crucial decision",
      "induce sleep"
    ],
    "answer": 0,
    "vocabIndex": 102
  }
];

const LOOKUP = {
  "disorder": {
    "pos": "n.",
    "en_def": "an illness or condition that disrupts normal physical or mental functions.",
    "cn_def": "失調；疾病",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an illness or condition that disrupts normal physical or mental functions.",
        "cn_def": "失調；疾病"
      }
    ]
  },
  "anxiety disorder": {
    "pos": "phr.",
    "en_def": "a mental health condition characterized by feelings of worry or fear.",
    "cn_def": "焦慮症",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a mental health condition characterized by feelings of worry or fear.",
        "cn_def": "焦慮症"
      }
    ]
  },
  "eating disorder": {
    "pos": "phr.",
    "en_def": "a psychological illness characterized by abnormal or disturbed eating habits.",
    "cn_def": "飲食失調",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a psychological illness characterized by abnormal or disturbed eating habits.",
        "cn_def": "飲食失調"
      }
    ]
  },
  "mental disorder": {
    "pos": "phr.",
    "en_def": "a wide range of mental health conditions that affect mood, thinking and behavior.",
    "cn_def": "精神疾病",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a wide range of mental health conditions that affect mood, thinking and behavior.",
        "cn_def": "精神疾病"
      }
    ]
  },
  "in perfect order": {
    "pos": "phr.",
    "en_def": "the arrangement or disposition of people or things in relation to each other.",
    "cn_def": "以..的順序",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the arrangement or disposition of people or things in relation to each other.",
        "cn_def": "以..的順序"
      }
    ]
  },
  "in ...order": {
    "pos": "phr.",
    "en_def": "the arrangement or disposition of people or things in relation to each other.",
    "cn_def": "以..的順序",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "the arrangement or disposition of people or things in relation to each other.",
        "cn_def": "以..的順序"
      }
    ]
  },
  "robust": {
    "pos": "adj.",
    "en_def": "strong and healthy; vigorous.",
    "cn_def": "強健的；穩固的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strong and healthy; vigorous.",
        "cn_def": "強健的；穩固的"
      }
    ]
  },
  "vigorous": {
    "pos": "adj.",
    "en_def": "strong, healthy, and full of energy.",
    "cn_def": "充滿活力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "strong, healthy, and full of energy.",
        "cn_def": "充滿活力的"
      }
    ]
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged.",
    "cn_def": "脆弱的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily broken or damaged.",
        "cn_def": "脆弱的"
      }
    ]
  },
  "fragility": {
    "pos": "n.",
    "en_def": "the quality of being easily broken or damaged.",
    "cn_def": "脆弱性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the quality of being easily broken or damaged.",
        "cn_def": "脆弱性"
      }
    ]
  },
  "highly fragile": {
    "pos": "phr.",
    "en_def": "very easily broken, damaged, or destroyed.",
    "cn_def": "高度脆弱的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very easily broken, damaged, or destroyed.",
        "cn_def": "高度脆弱的"
      }
    ]
  },
  "delicate": {
    "pos": "adj.",
    "en_def": "easily broken or damaged; fragile.",
    "cn_def": "精緻的；易碎的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "easily broken or damaged; fragile.",
        "cn_def": "精緻的；易碎的"
      }
    ]
  },
  "delicacy": {
    "pos": "n. [C]",
    "en_def": "A rare, expensive, or high-quality food item that is considered very special to eat.",
    "cn_def": "佳餚、珍饈、美食",
    "combined": [
      {
        "pos": "n. [C]",
        "en_def": "A rare, expensive, or high-quality food item that is considered very special to eat.",
        "cn_def": "佳餚、珍饈、美食"
      }
    ]
  },
  "susceptible": {
    "pos": "adj.",
    "en_def": "likely or liable to be influenced or harmed by a particular thing.",
    "cn_def": "易受影響的；易受感染的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "likely or liable to be influenced or harmed by a particular thing.",
        "cn_def": "易受影響的；易受感染的"
      }
    ]
  },
  "unsusceptible": {
    "pos": "adj.",
    "en_def": "not likely or liable to be influenced or harmed.",
    "cn_def": "不易受影響的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not likely or liable to be influenced or harmed.",
        "cn_def": "不易受影響的"
      }
    ]
  },
  "be much more susceptible to": {
    "pos": "phr.",
    "en_def": "to be easily affected, influenced, or harmed by something.",
    "cn_def": "易受...影響/感染",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily affected, influenced, or harmed by something.",
        "cn_def": "易受...影響/感染"
      }
    ]
  },
  "be susceptible to": {
    "pos": "phr.",
    "en_def": "to be easily affected, influenced, or harmed by something.",
    "cn_def": "易受...影響/感染",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be easily affected, influenced, or harmed by something.",
        "cn_def": "易受...影響/感染"
      },
      {
        "pos": "v. phr.",
        "en_def": "Easily influenced, harmed, or affected by a specific disease, chemical, or situation.",
        "cn_def": "易受…影響的、易感（染）的、脆弱的"
      }
    ]
  },
  "susceptible to": {
    "pos": "v. phr.",
    "en_def": "Easily influenced, harmed, or affected by a specific disease, chemical, or situation.",
    "cn_def": "易受…影響的、易感（染）的、脆弱的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Easily influenced, harmed, or affected by a specific disease, chemical, or situation.",
        "cn_def": "易受…影響的、易感（染）的、脆弱的"
      }
    ]
  },
  "vulnerable": {
    "pos": "adj.",
    "en_def": "susceptible to physical or emotional attack or harm.",
    "cn_def": "脆弱的；易受傷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "susceptible to physical or emotional attack or harm.",
        "cn_def": "脆弱的；易受傷的"
      }
    ]
  },
  "vulnerable to": {
    "pos": "v. phr.",
    "en_def": "Weak and easily hurt, damaged, or attacked physically, emotionally, or systematically.",
    "cn_def": "易受…傷害的、脆弱的、易受攻擊的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Weak and easily hurt, damaged, or attacked physically, emotionally, or systematically.",
        "cn_def": "易受…傷害的、脆弱的、易受攻擊的"
      }
    ]
  },
  "be vulnerable to": {
    "pos": "v. phr.",
    "en_def": "Weak and easily hurt, damaged, or attacked physically, emotionally, or systematically.",
    "cn_def": "易受…傷害的、脆弱的、易受攻擊的",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Weak and easily hurt, damaged, or attacked physically, emotionally, or systematically.",
        "cn_def": "易受…傷害的、脆弱的、易受攻擊的"
      }
    ]
  },
  "subject to": {
    "pos": "v. phr.",
    "en_def": "Likely to experience, suffer, or be affected by something, or depending on something to happen.",
    "cn_def": "易遭受…的、受…支配的、取決於…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Likely to experience, suffer, or be affected by something, or depending on something to happen.",
        "cn_def": "易遭受…的、受…支配的、取決於…"
      }
    ]
  },
  "be subject to": {
    "pos": "v. phr.",
    "en_def": "Likely to experience, suffer, or be affected by something, or depending on something to happen.",
    "cn_def": "易遭受…的、受…支配的、取決於…",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Likely to experience, suffer, or be affected by something, or depending on something to happen.",
        "cn_def": "易遭受…的、受…支配的、取決於…"
      }
    ]
  },
  "subject to change": {
    "pos": "v. phr.",
    "en_def": "Not final; likely to be modified, updated, or altered depending on the situation or new rules.",
    "cn_def": "可能會有所變動、以…為準（視情況調整）",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Not final; likely to be modified, updated, or altered depending on the situation or new rules.",
        "cn_def": "可能會有所變動、以…為準（視情況調整）"
      }
    ]
  },
  "be subject to change": {
    "pos": "v. phr.",
    "en_def": "Not final; likely to be modified, updated, or altered depending on the situation or new rules.",
    "cn_def": "可能會有所變動、以…為準（視情況調整）",
    "combined": [
      {
        "pos": "v. phr.",
        "en_def": "Not final; likely to be modified, updated, or altered depending on the situation or new rules.",
        "cn_def": "可能會有所變動、以…為準（視情況調整）"
      }
    ]
  },
  "mental": {
    "pos": "adj.",
    "en_def": "relating to the mind.",
    "cn_def": "心理的；精神的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the mind.",
        "cn_def": "心理的；精神的"
      }
    ]
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in a manner relating to the mind.",
    "cn_def": "心理上地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a manner relating to the mind.",
        "cn_def": "心理上地"
      }
    ]
  },
  "mentality": {
    "pos": "n.",
    "en_def": "the characteristic attitude of mind or way of thinking of a person or group.",
    "cn_def": "心態",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the characteristic attitude of mind or way of thinking of a person or group.",
        "cn_def": "心態"
      }
    ]
  },
  "mental health": {
    "pos": "phr.",
    "en_def": "a person's condition with regard to their psychological and emotional well-being.",
    "cn_def": "心理健康",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a person's condition with regard to their psychological and emotional well-being.",
        "cn_def": "心理健康"
      }
    ]
  },
  "physical": {
    "pos": "adj.",
    "en_def": "relating to the body as opposed to the mind.",
    "cn_def": "身體的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "relating to the body as opposed to the mind.",
        "cn_def": "身體的"
      }
    ]
  },
  "diagnose": {
    "pos": "v.",
    "en_def": "to identify the nature of an illness or other problem by examination of the symptoms.",
    "cn_def": "診斷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to identify the nature of an illness or other problem by examination of the symptoms.",
        "cn_def": "診斷"
      }
    ]
  },
  "be diagnosed with": {
    "pos": "phr.",
    "en_def": "to be told by a doctor that you have a particular illness.",
    "cn_def": "被診斷出患有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told by a doctor that you have a particular illness.",
        "cn_def": "被診斷出患有..."
      }
    ]
  },
  "was officially diagnosed with": {
    "pos": "phr.",
    "en_def": "to be told by a doctor that you have a particular illness.",
    "cn_def": "被診斷出患有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told by a doctor that you have a particular illness.",
        "cn_def": "被診斷出患有..."
      }
    ]
  },
  "diagnosis": {
    "pos": "n.",
    "en_def": "the identification of the nature of an illness or other problem by examination of the symptoms.",
    "cn_def": "診斷結果",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the identification of the nature of an illness or other problem by examination of the symptoms.",
        "cn_def": "診斷結果"
      }
    ]
  },
  "diagnostic": {
    "pos": "adj.",
    "en_def": "concerned with the diagnosis of illness or other problems.",
    "cn_def": "診斷的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "concerned with the diagnosis of illness or other problems.",
        "cn_def": "診斷的"
      }
    ]
  },
  "misdiagnose": {
    "pos": "v.",
    "en_def": "to diagnose incorrectly.",
    "cn_def": "誤診",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to diagnose incorrectly.",
        "cn_def": "誤診"
      }
    ]
  },
  "cripple": {
    "pos": "v.",
    "en_def": "to cause severe and disabling damage to.",
    "cn_def": "使嚴重損害；使殘廢",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause severe and disabling damage to.",
        "cn_def": "使嚴重損害；使殘廢"
      }
    ]
  },
  "disable": {
    "pos": "v.",
    "en_def": "to limit the movements, senses, or activities of someone.",
    "cn_def": "使失去能力",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to limit the movements, senses, or activities of someone.",
        "cn_def": "使失去能力"
      }
    ]
  },
  "crippling": {
    "pos": "adj.",
    "en_def": "causing a severe and almost insuperable problem.",
    "cn_def": "造成嚴重損害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing a severe and almost insuperable problem.",
        "cn_def": "造成嚴重損害的"
      }
    ]
  },
  "crippled": {
    "pos": "adj.",
    "en_def": "severely damaged or malfunctioning.",
    "cn_def": "殘廢的；嚴重受損的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "severely damaged or malfunctioning.",
        "cn_def": "殘廢的；嚴重受損的"
      }
    ]
  },
  "normally": {
    "pos": "adv.",
    "en_def": "under normal or usual conditions; as a rule.",
    "cn_def": "通常地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "under normal or usual conditions; as a rule.",
        "cn_def": "通常地"
      }
    ]
  },
  "normal": {
    "pos": "adj.",
    "en_def": "conforming to a standard; usual, typical, or expected.",
    "cn_def": "正常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "conforming to a standard; usual, typical, or expected.",
        "cn_def": "正常的"
      }
    ]
  },
  "norm": {
    "pos": "n.",
    "en_def": "something that is usual, typical, or standard.",
    "cn_def": "常態；規範",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something that is usual, typical, or standard.",
        "cn_def": "常態；規範"
      }
    ]
  },
  "abnormal": {
    "pos": "adj.",
    "en_def": "deviating from what is normal or usual.",
    "cn_def": "不正常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "deviating from what is normal or usual.",
        "cn_def": "不正常的"
      }
    ]
  },
  "abnormality": {
    "pos": "n.",
    "en_def": "an abnormal feature, characteristic, or occurrence.",
    "cn_def": "異常",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an abnormal feature, characteristic, or occurrence.",
        "cn_def": "異常"
      }
    ]
  },
  "torment": {
    "pos": "n.",
    "en_def": "severe physical or mental suffering.",
    "cn_def": "折磨；痛苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "severe physical or mental suffering.",
        "cn_def": "折磨；痛苦"
      },
      {
        "pos": "v.",
        "en_def": "to cause to experience severe mental or physical suffering.",
        "cn_def": "折磨"
      }
    ]
  },
  "tormented": {
    "pos": "v.",
    "en_def": "to cause to experience severe mental or physical suffering.",
    "cn_def": "折磨",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause to experience severe mental or physical suffering.",
        "cn_def": "折磨"
      }
    ]
  },
  "torture": {
    "pos": "n. / v.",
    "en_def": "the action or practice of inflicting severe pain on someone.",
    "cn_def": "拷問；折磨",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "the action or practice of inflicting severe pain on someone.",
        "cn_def": "拷問；折磨"
      }
    ]
  },
  "agony": {
    "pos": "n.",
    "en_def": "extreme physical or mental suffering.",
    "cn_def": "極度痛苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "extreme physical or mental suffering.",
        "cn_def": "極度痛苦"
      }
    ]
  },
  "tormentor": {
    "pos": "n.",
    "en_def": "a person who inflicts severe mental or physical suffering on someone.",
    "cn_def": "折磨者",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a person who inflicts severe mental or physical suffering on someone.",
        "cn_def": "折磨者"
      }
    ]
  },
  "symptom": {
    "pos": "n.",
    "en_def": "a physical or mental feature which is regarded as indicating a condition of disease.",
    "cn_def": "症狀",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a physical or mental feature which is regarded as indicating a condition of disease.",
        "cn_def": "症狀"
      }
    ]
  },
  "symptomatic": {
    "pos": "adj.",
    "en_def": "serving as a symptom or sign, especially of something undesirable.",
    "cn_def": "有症狀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "serving as a symptom or sign, especially of something undesirable.",
        "cn_def": "有症狀的"
      }
    ]
  },
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "producing or showing no symptoms.",
    "cn_def": "無症狀的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing or showing no symptoms.",
        "cn_def": "無症狀的"
      }
    ]
  },
  "relieve symptoms": {
    "pos": "phr.",
    "en_def": "to make the signs of an illness less severe.",
    "cn_def": "緩解症狀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make the signs of an illness less severe.",
        "cn_def": "緩解症狀"
      }
    ]
  },
  "relieve the painful symptoms": {
    "pos": "phr.",
    "en_def": "to make the signs of an illness less severe.",
    "cn_def": "緩解症狀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make the signs of an illness less severe.",
        "cn_def": "緩解症狀"
      }
    ]
  },
  "common symptom": {
    "pos": "phr.",
    "en_def": "a frequently occurring sign of an illness.",
    "cn_def": "常見症狀",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a frequently occurring sign of an illness.",
        "cn_def": "常見症狀"
      }
    ]
  },
  "doom": {
    "pos": "n. / v.",
    "en_def": "death, destruction, or some other terrible fate; to condemn to certain destruction or death.",
    "cn_def": "厄運；注定失敗",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "death, destruction, or some other terrible fate; to condemn to certain destruction or death.",
        "cn_def": "厄運；注定失敗"
      }
    ]
  },
  "doomed": {
    "pos": "adj.",
    "en_def": "likely to have an unfortunate and inescapable outcome; ill-fated.",
    "cn_def": "注定失敗的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "likely to have an unfortunate and inescapable outcome; ill-fated.",
        "cn_def": "注定失敗的"
      }
    ]
  },
  "doom and gloom": {
    "pos": "phr.",
    "en_def": "a general feeling of pessimism or despondency.",
    "cn_def": "悲觀失望",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a general feeling of pessimism or despondency.",
        "cn_def": "悲觀失望"
      }
    ]
  },
  "impending doom": {
    "pos": "phr.",
    "en_def": "an approaching disaster or terrible fate.",
    "cn_def": "迫在眉睫的災難/厄運",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an approaching disaster or terrible fate.",
        "cn_def": "迫在眉睫的災難/厄運"
      }
    ]
  },
  "spell doom": {
    "pos": "phr.",
    "en_def": "to suggest or guarantee a very bad outcome.",
    "cn_def": "意味著毀滅/失敗",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to suggest or guarantee a very bad outcome.",
        "cn_def": "意味著毀滅/失敗"
      }
    ]
  },
  "trigger": {
    "pos": "v.",
    "en_def": "to cause an event or situation to happen or exist.",
    "cn_def": "引發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause an event or situation to happen or exist.",
        "cn_def": "引發"
      },
      {
        "pos": "n.",
        "en_def": "an event or circumstance that is the cause of a particular action, process, or situation.",
        "cn_def": "誘因；扳機"
      }
    ]
  },
  "triggered": {
    "pos": "v.",
    "en_def": "to cause an event or situation to happen or exist.",
    "cn_def": "引發",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cause an event or situation to happen or exist.",
        "cn_def": "引發"
      },
      {
        "pos": "adj.",
        "en_def": "caused to happen or exist.",
        "cn_def": "被觸發的"
      }
    ]
  },
  "triggering": {
    "pos": "adj.",
    "en_def": "causing a strong emotional reaction, typically one related to a past trauma.",
    "cn_def": "引起負面情緒的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing a strong emotional reaction, typically one related to a past trauma.",
        "cn_def": "引起負面情緒的"
      }
    ]
  },
  "pull the trigger": {
    "pos": "phr.",
    "en_def": "to commit to a course of action.",
    "cn_def": "做出最後決定（扣下扳機）",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to commit to a course of action.",
        "cn_def": "做出最後決定（扣下扳機）"
      }
    ]
  },
  "intensify": {
    "pos": "v.",
    "en_def": "to become or make more intense.",
    "cn_def": "增強；加劇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make more intense.",
        "cn_def": "增強；加劇"
      }
    ]
  },
  "intensified": {
    "pos": "v.",
    "en_def": "to become or make more intense.",
    "cn_def": "增強；加劇",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make more intense.",
        "cn_def": "增強；加劇"
      }
    ]
  },
  "intense": {
    "pos": "adj.",
    "en_def": "of extreme force, degree, or strength.",
    "cn_def": "強烈的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "of extreme force, degree, or strength.",
        "cn_def": "強烈的"
      }
    ]
  },
  "intensity": {
    "pos": "n.",
    "en_def": "the measurable amount of a property, such as force, brightness, or a magnetic field.",
    "cn_def": "強度；強烈",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the measurable amount of a property, such as force, brightness, or a magnetic field.",
        "cn_def": "強度；強烈"
      }
    ]
  },
  "intensely": {
    "pos": "adv.",
    "en_def": "with extreme force or strength.",
    "cn_def": "激烈地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "with extreme force or strength.",
        "cn_def": "激烈地"
      }
    ]
  },
  "intensification": {
    "pos": "n.",
    "en_def": "the action of making or becoming more intense.",
    "cn_def": "強化；加劇",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the action of making or becoming more intense.",
        "cn_def": "強化；加劇"
      }
    ]
  },
  "induce": {
    "pos": "v.",
    "en_def": "to succeed in persuading or influencing someone to do something; to bring on or give rise to.",
    "cn_def": "引起；導致",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to succeed in persuading or influencing someone to do something; to bring on or give rise to.",
        "cn_def": "引起；導致"
      }
    ]
  },
  "inducement": {
    "pos": "n.",
    "en_def": "a thing that persuades or influences someone to do something.",
    "cn_def": "誘因；動機",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a thing that persuades or influences someone to do something.",
        "cn_def": "誘因；動機"
      }
    ]
  },
  "induced": {
    "pos": "adj.",
    "en_def": "brought about or caused.",
    "cn_def": "引起的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "brought about or caused.",
        "cn_def": "引起的"
      }
    ]
  },
  "induce sleep": {
    "pos": "phr.",
    "en_def": "to cause someone to fall asleep.",
    "cn_def": "引起睡眠",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to fall asleep.",
        "cn_def": "引起睡眠"
      }
    ]
  },
  "induced vomiting": {
    "pos": "phr.",
    "en_def": "to cause someone to empty the contents of the stomach through the mouth.",
    "cn_def": "催吐",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to empty the contents of the stomach through the mouth.",
        "cn_def": "催吐"
      }
    ]
  },
  "induce vomiting": {
    "pos": "phr.",
    "en_def": "to cause someone to empty the contents of the stomach through the mouth.",
    "cn_def": "催吐",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to cause someone to empty the contents of the stomach through the mouth.",
        "cn_def": "催吐"
      }
    ]
  },
  "panic": {
    "pos": "n. / v.",
    "en_def": "sudden uncontrollable fear or anxiety; to feel sudden uncontrollable fear.",
    "cn_def": "恐慌；驚慌",
    "combined": [
      {
        "pos": "n. / v.",
        "en_def": "sudden uncontrollable fear or anxiety; to feel sudden uncontrollable fear.",
        "cn_def": "恐慌；驚慌"
      }
    ]
  },
  "panicky": {
    "pos": "adj.",
    "en_def": "feeling or characterized by panic.",
    "cn_def": "恐慌的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "feeling or characterized by panic.",
        "cn_def": "恐慌的"
      }
    ]
  },
  "in a panic": {
    "pos": "phr.",
    "en_def": "in a state of sudden, overwhelming fear.",
    "cn_def": "驚慌失措地",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "in a state of sudden, overwhelming fear.",
        "cn_def": "驚慌失措地"
      }
    ]
  },
  "panic attack": {
    "pos": "phr.",
    "en_def": "a sudden feeling of acute and disabling anxiety.",
    "cn_def": "恐慌症發作",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sudden feeling of acute and disabling anxiety.",
        "cn_def": "恐慌症發作"
      }
    ]
  },
  "reaction": {
    "pos": "n.",
    "en_def": "an action performed or a feeling experienced in response to a situation or event.",
    "cn_def": "反應",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an action performed or a feeling experienced in response to a situation or event.",
        "cn_def": "反應"
      }
    ]
  },
  "react": {
    "pos": "v.",
    "en_def": "to respond or behave in a particular way in response to something.",
    "cn_def": "反應",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to respond or behave in a particular way in response to something.",
        "cn_def": "反應"
      }
    ]
  },
  "reactive": {
    "pos": "adj.",
    "en_def": "showing a response to a stimulus.",
    "cn_def": "反應的；活性的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "showing a response to a stimulus.",
        "cn_def": "反應的；活性的"
      }
    ]
  },
  "overreact": {
    "pos": "v.",
    "en_def": "to respond more emotionally or forcibly than is justified.",
    "cn_def": "反應過度",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to respond more emotionally or forcibly than is justified.",
        "cn_def": "反應過度"
      }
    ]
  },
  "chain reaction": {
    "pos": "phr.",
    "en_def": "a series of events, each caused by the previous one.",
    "cn_def": "連鎖反應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a series of events, each caused by the previous one.",
        "cn_def": "連鎖反應"
      }
    ]
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "decisive or critical, especially in the success or failure of something.",
    "cn_def": "關鍵的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "decisive or critical, especially in the success or failure of something.",
        "cn_def": "關鍵的"
      }
    ]
  },
  "critical": {
    "pos": "adj.",
    "en_def": "expressing adverse or disapproving comments or judgments; having a decisive or crucial importance.",
    "cn_def": "關鍵的；批評的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "expressing adverse or disapproving comments or judgments; having a decisive or crucial importance.",
        "cn_def": "關鍵的；批評的"
      }
    ]
  },
  "crucially": {
    "pos": "adv.",
    "en_def": "with decisive or vital importance.",
    "cn_def": "關鍵地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "with decisive or vital importance.",
        "cn_def": "關鍵地"
      }
    ]
  },
  "play a crucial role": {
    "pos": "phr.",
    "en_def": "to have a very important part in something.",
    "cn_def": "扮演關鍵角色",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have a very important part in something.",
        "cn_def": "扮演關鍵角色"
      }
    ]
  },
  "crucial decision": {
    "pos": "phr.",
    "en_def": "a very important choice.",
    "cn_def": "關鍵決定",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a very important choice.",
        "cn_def": "關鍵決定"
      }
    ]
  },
  "affordable": {
    "pos": "adj.",
    "en_def": "inexpensive; reasonably priced.",
    "cn_def": "負擔得起的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "inexpensive; reasonably priced.",
        "cn_def": "負擔得起的"
      }
    ]
  },
  "afford": {
    "pos": "v.",
    "en_def": "to have enough money to pay for.",
    "cn_def": "負擔得起",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to have enough money to pay for.",
        "cn_def": "負擔得起"
      }
    ]
  },
  "affordability": {
    "pos": "n.",
    "en_def": "the state of being cheap enough for people to be able to buy.",
    "cn_def": "負擔能力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being cheap enough for people to be able to buy.",
        "cn_def": "負擔能力"
      }
    ]
  },
  "unaffordable": {
    "pos": "adj.",
    "en_def": "too expensive to be afforded by the average person.",
    "cn_def": "負擔不起的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "too expensive to be afforded by the average person.",
        "cn_def": "負擔不起的"
      }
    ]
  },
  "highly affordable": {
    "pos": "phr.",
    "en_def": "very inexpensive or reasonably priced.",
    "cn_def": "非常負擔得起的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very inexpensive or reasonably priced.",
        "cn_def": "非常負擔得起的"
      }
    ]
  },
  "stabilize": {
    "pos": "v.",
    "en_def": "to make or become unlikely to change, fail, or decline.",
    "cn_def": "使穩定",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to make or become unlikely to change, fail, or decline.",
        "cn_def": "使穩定"
      }
    ]
  },
  "stable": {
    "pos": "adj.",
    "en_def": "not likely to give way or overturn; firmly fixed.",
    "cn_def": "穩定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not likely to give way or overturn; firmly fixed.",
        "cn_def": "穩定的"
      }
    ]
  },
  "unstable": {
    "pos": "adj.",
    "en_def": "prone to change, fail, or give way; not stable.",
    "cn_def": "不穩定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "prone to change, fail, or give way; not stable.",
        "cn_def": "不穩定的"
      }
    ]
  },
  "stability": {
    "pos": "n.",
    "en_def": "the state of being stable.",
    "cn_def": "穩定（性）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state of being stable.",
        "cn_def": "穩定（性）"
      }
    ]
  },
  "instability": {
    "pos": "n.",
    "en_def": "tendency to unpredictable behavior or erratic changes of mood.",
    "cn_def": "不穩定（性）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "tendency to unpredictable behavior or erratic changes of mood.",
        "cn_def": "不穩定（性）"
      }
    ]
  },
  "thrive": {
    "pos": "v.",
    "en_def": "to grow or develop well or vigorously.",
    "cn_def": "茁壯成長；繁榮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to grow or develop well or vigorously.",
        "cn_def": "茁壯成長；繁榮"
      }
    ]
  },
  "flourishing": {
    "pos": "adj.",
    "en_def": "developing rapidly and successfully; thriving.",
    "cn_def": "繁榮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "developing rapidly and successfully; thriving.",
        "cn_def": "繁榮的"
      }
    ]
  },
  "thriving": {
    "pos": "adj.",
    "en_def": "prosperous and growing; flourishing.",
    "cn_def": "繁榮的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "prosperous and growing; flourishing.",
        "cn_def": "繁榮的"
      }
    ]
  },
  "thrive on": {
    "pos": "phr.",
    "en_def": "to grow, develop, or be successful in a particular environment or situation.",
    "cn_def": "喜歡；在...中茁壯成長",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to grow, develop, or be successful in a particular environment or situation.",
        "cn_def": "喜歡；在...中茁壯成長"
      }
    ]
  },
  "thrive in": {
    "pos": "phr.",
    "en_def": "to flourish in a specific setting.",
    "cn_def": "在...中茁壯成長",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to flourish in a specific setting.",
        "cn_def": "在...中茁壯成長"
      }
    ]
  },
  "productive": {
    "pos": "adj.",
    "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
    "cn_def": "多產的；有生產力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "producing or able to produce large amounts of goods, crops, or other commodities.",
        "cn_def": "多產的；有生產力的"
      }
    ]
  },
  "productively": {
    "pos": "adv.",
    "en_def": "in a way that produces large amounts of goods or achieves a significant result.",
    "cn_def": "有生產力地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a way that produces large amounts of goods or achieves a significant result.",
        "cn_def": "有生產力地"
      }
    ]
  },
  "productivity": {
    "pos": "n.",
    "en_def": "the state or quality of producing something.",
    "cn_def": "生產力",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the state or quality of producing something.",
        "cn_def": "生產力"
      }
    ]
  },
  "unproductive": {
    "pos": "adj.",
    "en_def": "not producing or able to produce large amounts of goods, crops, or other commodities.",
    "cn_def": "無生產力的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not producing or able to produce large amounts of goods, crops, or other commodities.",
        "cn_def": "無生產力的"
      }
    ]
  },
  "highly productive": {
    "pos": "phr.",
    "en_def": "extremely efficient and yielding good results.",
    "cn_def": "高度有生產力的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "extremely efficient and yielding good results.",
        "cn_def": "高度有生產力的"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
