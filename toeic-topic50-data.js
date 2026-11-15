// Topic 50 Quiz Data: Changing Room 更衣室
// Source word list: https://www.examword.com/group-topic/changing-room — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T50 - Changing Room 更衣室",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fitting room",
    "pos": "n.",
    "cn_def": "試衣間",
    "en_def": "a small room in a shop where you try on clothes",
    "sentence": "A: I want to check whether these dark blue trousers suit me before I pay, but I can't see anywhere private in this busy department store, so where should I go? B: The {{BLANK}} is just behind the shoe section on the second floor, and a staff member there will give you a number card for each item you take in.",
    "cn": "A：我想在付款前看看這條深藍色褲子適不適合我，但在這間繁忙的百貨公司裡我看不到任何隱密的地方，我該去哪裡？ B：【試衣間】就在二樓鞋區的後面，那裡的工作人員會為你帶進去的每件衣物發一張號碼牌。"
  },
  {
    "word": "locker room",
    "pos": "n.",
    "cn_def": "（運動場所的）更衣室",
    "en_def": "a room where people change clothes before or after sports",
    "sentence": "A: After the company football match on Saturday afternoon, where can the players take a shower and get dressed before we all go out for dinner together? B: The sports center has a large {{BLANK}} next to the main field, with hot showers and plenty of space, so everyone can get ready there in about twenty minutes.",
    "cn": "A：週六下午公司足球賽結束後，球員們可以在哪裡沖澡換衣服，然後大家再一起去吃晚餐？ B：運動中心主球場旁邊有一間很大的【更衣室】，有熱水淋浴和充足的空間，所以大家大約二十分鐘就能在那裡準備好。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "置物櫃",
    "en_def": "a small cupboard with a lock for keeping your things safe",
    "sentence": "A: I'm going to the gym straight from the office tonight, but I'm worried about leaving my laptop and wallet somewhere unsafe while I exercise, so what do you suggest? B: Each member can rent a small {{BLANK}} with a key for just fifty dollars a month, and it is large enough for a laptop bag and a jacket.",
    "cn": "A：我今晚要從辦公室直接去健身房，但我擔心運動時把筆電和錢包放在不安全的地方，你有什麼建議？ B：每位會員每個月只要五十元就可以租一個附鑰匙的小【置物櫃】，空間大到可以放下筆電包和一件外套。"
  },
  {
    "word": "mirror",
    "pos": "n.",
    "cn_def": "鏡子",
    "en_def": "a piece of glass in which you can see yourself",
    "sentence": "A: The customers keep complaining that they cannot see how the clothes look from behind after they try them on, so how can we solve this problem cheaply? B: Let's put a tall {{BLANK}} on the back wall of each changing area, so people can turn around and check the whole outfit without asking a salesperson for help.",
    "cn": "A：顧客一直抱怨試穿後看不到衣服背面的樣子，我們要怎麼便宜地解決這個問題？ B：我們在每個更衣區的後牆裝一面高的【鏡子】，這樣大家可以轉身檢查整套服裝，不必請店員幫忙。"
  },
  {
    "word": "bench",
    "pos": "n.",
    "cn_def": "長凳",
    "en_def": "a long seat for two or more people",
    "sentence": "A: Some older customers have told us that they feel tired while they wait for their family members outside the changing rooms, so is there anything simple we can do? B: We could place a long wooden {{BLANK}} along the wall near the entrance, so they can sit down comfortably and keep an eye on the shopping bags.",
    "cn": "A：有些年長顧客告訴我們，他們在更衣室外等家人時覺得很累，有什麼簡單的方法可以改善嗎？ B：我們可以在入口附近沿著牆放一張長的木製【長凳】，讓他們可以舒服地坐著，同時看顧購物袋。"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "cn_def": "簾子；窗簾",
    "en_def": "a piece of cloth that hangs down to cover a window or an opening",
    "sentence": "A: One of the changing rooms in the women's section doesn't close properly anymore, and a customer felt uncomfortable using it this morning, so what exactly is wrong with it? B: The thick {{BLANK}} that covers the entrance is too short and keeps sliding open, so I have already ordered a longer one that should arrive on Thursday.",
    "cn": "A：女裝區有一間更衣室關不好了，今天早上有位顧客用起來覺得很不自在，到底是哪裡出了問題？ B：遮住入口的那條厚【簾子】太短，而且一直滑開，所以我已經訂了一條更長的，應該週四會到。"
  },
  {
    "word": "door",
    "pos": "n.",
    "cn_def": "門",
    "en_def": "the thing you open and close to go into a room",
    "sentence": "A: The new changing rooms look really modern, but I noticed that several customers had trouble locking themselves in while they were trying things on, so what is the issue? B: The lock on each {{BLANK}} is placed too high for shorter people to reach easily, so the builder will come back next week and move them lower.",
    "cn": "A：新的更衣室看起來很現代，但我注意到有好幾位顧客試穿時很難把自己鎖在裡面，問題出在哪裡？ B：每扇【門】上的鎖裝得太高，個子較矮的人不容易搆到，所以施工人員下週會回來把鎖裝低一點。"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "cn_def": "隱私",
    "en_def": "the state of being alone and not seen by other people",
    "sentence": "A: Why did the manager decide to replace all the old plastic panels in the changing area with solid wooden walls, even though it cost the store a lot of money? B: Many shoppers complained that people walking by could see inside, and she believes every customer deserves complete {{BLANK}} while trying on clothes.",
    "cn": "A：為什麼經理決定把更衣區所有的舊塑膠隔板換成實心木牆，即使這花了店裡很多錢？ B：許多顧客抱怨路過的人看得到裡面，而她認為每位顧客在試穿衣服時都應該享有完全的【隱私】。"
  },
  {
    "word": "clothes",
    "pos": "n.",
    "cn_def": "衣服",
    "en_def": "things you wear, such as shirts and trousers",
    "sentence": "A: The hotel staff change into their work uniforms when they arrive every morning, so where should they leave the things they wore on the way to work? B: There is a staff room on the basement level where everyone can hang their own {{BLANK}} on a rail and pick them up again at the end of the shift.",
    "cn": "A：飯店員工每天早上到班後會換上工作制服，那他們上班途中穿的東西要放在哪裡？ B：地下室有一間員工休息室，每個人都可以把自己的【衣服】掛在衣架桿上，下班時再拿回來。"
  },
  {
    "word": "outfit",
    "pos": "n.",
    "cn_def": "一套服裝",
    "en_def": "a set of clothes worn together",
    "sentence": "A: I have an important job interview at a bank next Tuesday, but I'm not sure what to wear, so could you come shopping with me this weekend? B: Of course, I think a dark jacket with matching trousers and simple shoes would make a smart and professional {{BLANK}}, and the mall downtown is having a sale.",
    "cn": "A：我下週二在一家銀行有個重要的面試，但我不確定要穿什麼，你這個週末可以陪我去逛街嗎？ B：當然，我覺得深色外套配上同色系長褲和簡單的鞋子，會是一套俐落又專業的【服裝】，而且市中心的購物中心正在特價。"
  },
  {
    "word": "try on",
    "pos": "v.phr.",
    "cn_def": "試穿",
    "en_def": "to put on clothes to see if they fit or look good",
    "sentence": "A: I really like the gray coat in the window, but this brand often makes its clothes a little small, so should I just buy it online to save time? B: I think you should {{BLANK}} the coat in the store first, because the changing rooms are free right now and you can return it easily if it feels wrong.",
    "cn": "A：我很喜歡櫥窗裡那件灰色大衣，但這個牌子的衣服常常偏小，我是不是直接在網路上買比較省時間？ B：我覺得你應該先在店裡【試穿】那件大衣，因為現在更衣室剛好沒人，而且如果覺得不對也很容易退貨。"
  },
  {
    "word": "change",
    "pos": "v.",
    "cn_def": "換（衣服）",
    "en_def": "to take off your clothes and put on different ones",
    "sentence": "A: Our client meeting finishes at five, and the charity dinner starts at six on the other side of the city, so will we have enough time to get ready? B: Yes, the hotel has agreed to give us a small room near the lobby, so we can quickly {{BLANK}} into our evening clothes there and take a taxi straight to the event.",
    "cn": "A：我們的客戶會議五點結束，而慈善晚宴六點在城市的另一頭開始，我們有足夠的時間準備嗎？ B：有，飯店同意在大廳附近給我們一間小房間，我們可以在那裡迅速【換】上晚禮服，然後直接搭計程車去會場。"
  },
  {
    "word": "size",
    "pos": "n.",
    "cn_def": "尺寸",
    "en_def": "how big or small something is, such as clothes or shoes",
    "sentence": "A: The blue shirt I ordered for the team photo is much too small around the shoulders, so do you think the store will let me exchange it? B: Yes, as long as you keep the receipt and the label, they will happily give you a larger {{BLANK}}, and they usually have extra stock in the back room.",
    "cn": "A：我為團體照訂的藍色襯衫肩膀太小了，你覺得店家會讓我換嗎？ B：會的，只要你保留收據和標籤，他們會很樂意給你大一號的【尺寸】，而且他們後面的倉庫通常有額外庫存。"
  },
  {
    "word": "fit",
    "pos": "v.",
    "cn_def": "合身",
    "en_def": "to be the right size and shape for someone",
    "sentence": "A: You bought those black trousers for the company dinner last month, so why haven't you worn them to the office yet? B: Unfortunately, they don't {{BLANK}} me well anymore because I've been eating so many snacks at my desk during busy weeks, so I'll take them to a tailor this weekend to have them made bigger.",
    "cn": "A：你上個月為了公司晚宴買了那條黑色長褲，為什麼還沒穿來辦公室？ B：可惜它已經不太【合身】了，因為忙碌的那幾週我在座位上吃了太多零食，所以這個週末我會拿去給裁縫改大一點。"
  },
  {
    "word": "tight",
    "pos": "adj.",
    "cn_def": "緊的",
    "en_def": "fitting your body very closely, often too closely",
    "sentence": "A: You look a little uncomfortable in that new suit, so is something wrong with it, or are you just nervous about giving the presentation this afternoon? B: To be honest, the jacket feels quite {{BLANK}} around my arms, so I can hardly lift them, and I should have tried a bigger one before I bought it.",
    "cn": "A：你穿那套新西裝看起來有點不自在，是衣服有問題，還是你只是對今天下午的簡報感到緊張？ B：老實說，這件外套的手臂部分感覺很【緊】，我幾乎舉不起手臂，我買之前應該先試穿大一號的。"
  },
  {
    "word": "loose",
    "pos": "adj.",
    "cn_def": "寬鬆的；鬆的",
    "en_def": "too big and not fitting closely",
    "sentence": "A: The new warehouse uniforms arrived this morning, but several workers say they are uncomfortable, so what seems to be the main problem with them? B: The trousers are so {{BLANK}} around the waist that people keep pulling them up while they carry boxes, which could be dangerous near the heavy machines.",
    "cn": "A：新的倉庫制服今天早上送到了，但有好幾位工人說穿起來不舒服，主要問題是什麼？ B：褲子腰部太【鬆】了，大家搬箱子時一直要把褲子往上拉，在重型機器附近可能很危險。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "making you feel relaxed, with no pain",
    "sentence": "A: Our team will be walking around the trade fair for about eight hours tomorrow, meeting suppliers and visiting booths, so what kind of shoes should I wear? B: Choose something soft and {{BLANK}} instead of your new leather shoes, because the halls are huge and your feet will hurt badly by lunchtime otherwise.",
    "cn": "A：我們團隊明天要在商展裡走大約八個小時，和供應商見面並參觀攤位，我該穿什麼鞋子？ B：選一雙柔軟又【舒適】的鞋，不要穿你的新皮鞋，因為展館很大，不然到午餐時間你的腳就會很痛。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: I'd like to buy a few shirts for my business trip, so do you think Saturday afternoon is a good time to visit the shopping mall near the station? B: I wouldn't go then, because the stores are always {{BLANK}} on weekends and you might wait twenty minutes for a changing room, so try a weekday evening instead.",
    "cn": "A：我想為出差買幾件襯衫，你覺得週六下午去車站附近的購物中心是好時機嗎？ B：我不會那時候去，因為週末店裡總是很【擁擠】，你可能要等二十分鐘才有更衣室，改在平日晚上去吧。"
  },
  {
    "word": "empty",
    "pos": "adj.",
    "cn_def": "空的",
    "en_def": "with no people or things inside",
    "sentence": "A: The staff changing room downstairs is usually full of people at eight in the morning, so when is the best time for me to use it before my shift? B: It is almost always {{BLANK}} around seven thirty, because most of the early workers have already gone upstairs and the others don't arrive until later.",
    "cn": "A：樓下的員工更衣室早上八點通常擠滿了人，我上班前什麼時候使用最好？ B：七點半左右那裡幾乎都是【空的】，因為大部分早班員工已經上樓了，其他人則要晚一點才會到。"
  },
  {
    "word": "clean",
    "pos": "adj.",
    "cn_def": "乾淨的",
    "en_def": "not dirty",
    "sentence": "A: A gym member wrote an angry online review saying that the shower area smelled bad last weekend, so how should we respond to make customers trust us again? B: Let's hire an extra cleaner for the weekends and promise that the changing area will be kept {{BLANK}} and dry at all times, then reply politely to the review.",
    "cn": "A：一位健身房會員在網路上寫了一則憤怒的評論，說上週末淋浴區很臭，我們該如何回應才能讓顧客重新信任我們？ B：我們週末多請一位清潔人員，並承諾更衣區隨時保持【乾淨】和乾燥，然後禮貌地回覆那則評論。"
  },
  {
    "word": "messy",
    "pos": "adj.",
    "cn_def": "凌亂的",
    "en_def": "untidy, with things in the wrong places",
    "sentence": "A: The store manager looked very unhappy after she checked the changing rooms at closing time yesterday, so did something go wrong during the evening shift? B: Yes, the rooms were really {{BLANK}}, with shirts and jeans lying on the floor everywhere, because nobody had time to collect them during the busy sale.",
    "cn": "A：店長昨天打烊時檢查完更衣室後看起來很不高興，晚班是不是出了什麼問題？ B：是的，那些房間真的很【凌亂】，到處都是丟在地上的襯衫和牛仔褲，因為在忙碌的特賣期間沒有人有時間收。"
  },
  {
    "word": "hook",
    "pos": "n.",
    "cn_def": "掛鉤",
    "en_def": "a curved piece of metal or plastic for hanging things on",
    "sentence": "A: Customers keep putting their coats and handbags on the floor of the changing rooms, which makes the area look dirty, so how can we improve this? B: We should fix a metal {{BLANK}} on the wall inside each room, so people have a proper place to hang their things while they are trying on clothes.",
    "cn": "A：顧客一直把外套和手提包放在更衣室地上，讓那裡看起來很髒，我們該如何改善？ B：我們應該在每間更衣室的牆上裝一個金屬【掛鉤】，讓大家試穿衣服時有適當的地方掛東西。"
  },
  {
    "word": "bag",
    "pos": "n.",
    "cn_def": "袋子；包包",
    "en_def": "a container for carrying things",
    "sentence": "A: I'm flying to Singapore for a two-day conference next week, and I don't want to wait at the airport for my luggage, so what should I bring? B: Just pack one small {{BLANK}} that fits in the overhead space, with two shirts, a pair of trousers, and your laptop, and you can walk straight out after landing.",
    "cn": "A：我下週要飛去新加坡參加為期兩天的會議，我不想在機場等行李，我該帶什麼？ B：只要帶一個能放進頭頂置物櫃的小【包包】，裝兩件襯衫、一條長褲和你的筆電，降落後就可以直接走出去。"
  },
  {
    "word": "shoes",
    "pos": "n.",
    "cn_def": "鞋子",
    "en_def": "things you wear on your feet",
    "sentence": "A: The office is installing new carpet throughout the meeting rooms this month, so is there any new rule that the staff should follow during that time? B: Yes, everyone must take off their outdoor {{BLANK}} at the entrance and wear the slippers provided, so the carpet will stay clean and won't get damaged.",
    "cn": "A：辦公室這個月要在所有會議室鋪新地毯，這段期間員工有什麼新規定要遵守嗎？ B：有，每個人在入口都必須脫掉外面穿的【鞋子】並換上提供的拖鞋，這樣地毯才能保持乾淨、不會損壞。"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "cn_def": "制服",
    "en_def": "special clothes that all workers or students of a group wear",
    "sentence": "A: I start my new job at the hotel reception desk on Monday morning, but nobody has told me what I'm supposed to wear on the first day, so do you know? B: The hotel will give you a dark green {{BLANK}} with your name badge, and you can pick it up from the staff office before your shift begins.",
    "cn": "A：我週一早上要開始在飯店櫃檯的新工作，但沒有人告訴我第一天應該穿什麼，你知道嗎？ B：飯店會給你一套深綠色的【制服】和名牌，你可以在上班前到員工辦公室領取。"
  },
  {
    "word": "sportswear",
    "pos": "n.",
    "cn_def": "運動服裝",
    "en_def": "clothes and shoes made for doing sports",
    "sentence": "A: Our company is organizing a team hiking day in the mountains next month, so should I wear my usual office clothes or something else? B: You'd better wear light {{BLANK}} and running shoes, because the trail is long and hot, and you'll want clothes that dry quickly when you sweat.",
    "cn": "A：我們公司下個月要在山上舉辦團隊健行日，我該穿平常的上班服裝還是別的？ B：你最好穿輕便的【運動服裝】和跑鞋，因為步道又長又熱，你會需要流汗時能快乾的衣服。"
  },
  {
    "word": "queue",
    "pos": "v.",
    "cn_def": "排隊",
    "en_def": "to wait in a line of people for your turn",
    "sentence": "A: The department store is having its biggest sale of the year this weekend, so how early should we arrive if we want to try on the discounted coats? B: We'll probably have to {{BLANK}} for at least half an hour outside the changing rooms, so let's get there right when the doors open at ten.",
    "cn": "A：百貨公司這個週末舉辦年度最大的特賣，如果我們想試穿打折的大衣，應該多早到？ B：我們可能得在更衣室外【排隊】至少半小時，所以我們十點一開門就到吧。"
  },
  {
    "word": "available",
    "pos": "adj.",
    "cn_def": "可用的；空出來的",
    "en_def": "free to be used",
    "sentence": "A: There are only three changing rooms in this small shop, and all of them seem to have people inside right now, so how will I know when it's my turn? B: The assistant will call you as soon as a room is {{BLANK}}, and in the meantime you can look at the new scarves near the front counter.",
    "cn": "A：這間小店只有三間更衣室，現在好像都有人在裡面，我怎麼知道什麼時候輪到我？ B：一有房間【空出來】，店員就會馬上叫你，在這期間你可以看看櫃檯附近的新圍巾。"
  },
  {
    "word": "sign",
    "pos": "n.",
    "cn_def": "標示；告示牌",
    "en_def": "a board with words or pictures that gives information",
    "sentence": "A: Some customers walked right past the changing rooms yesterday because they didn't know where they were, so how can we make them easier to find? B: Let's put a large {{BLANK}} with an arrow above the hallway near the escalator, so shoppers can see the way to the changing area from anywhere on the floor.",
    "cn": "A：昨天有些顧客直接走過了更衣室，因為他們不知道在哪裡，我們要怎麼讓它更容易被找到？ B：我們在手扶梯附近的走廊上方放一個大的箭頭【標示】，讓顧客在樓層任何地方都能看到往更衣區的路。"
  }
];

const MCQS = [
  {
    "q": "Please take no more than five items into the _____ at one time. A staff member will count your clothes before you enter.",
    "options": [
      "fitting room",
      "privacy",
      "size",
      "sportswear"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The swimming team showered and dressed in the _____ after practice. Then they met the coach outside to discuss Saturday's race.",
    "options": [
      "size",
      "mirror",
      "locker room",
      "hook"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Gym members should put their phones and wallets in a _____ before exercising. Each one has a key on a rubber wristband.",
    "options": [
      "sign",
      "locker",
      "privacy",
      "curtain"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Before walking into the interview, Mark checked his tie in the _____ by the elevator. He wanted to look neat and confident.",
    "options": [
      "bench",
      "size",
      "privacy",
      "mirror"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Visitors waiting for the bus can sit on the wooden _____ outside the main gate. It has room for about five people.",
    "options": [
      "bench",
      "curtain",
      "door",
      "mirror"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Please pull the _____ closed completely before you start changing. Other shoppers walk past these rooms all day.",
    "options": [
      "size",
      "shoes",
      "privacy",
      "curtain"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The fitting rooms now have a lock on every _____ instead of a curtain. Customers said they felt much safer this way.",
    "options": [
      "sportswear",
      "privacy",
      "door",
      "size"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The new screens give each patient more _____ while they speak with the nurse. Nobody in the waiting room can see or hear them.",
    "options": [
      "locker",
      "privacy",
      "bench",
      "hook"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Guests can have their dirty _____ washed by the hotel laundry service. The items are returned to their rooms by evening.",
    "options": [
      "privacy",
      "sign",
      "door",
      "clothes"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Julia wore a smart black _____ to the awards ceremony on Friday. Several colleagues asked where she had bought it.",
    "options": [
      "privacy",
      "outfit",
      "bench",
      "sign"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "This jacket comes in only one _____, so it may not suit everyone. Customers who need a larger one can order online.",
    "options": [
      "size",
      "hook",
      "curtain",
      "bench"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Hang your umbrella on the _____ behind the office door so it doesn't drip on the carpet. Thank you for keeping the floor dry.",
    "options": [
      "outfit",
      "size",
      "hook",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Shoppers are asked to leave any large _____ at the counter before entering the fitting area. Staff will return it when they come out.",
    "options": [
      "size",
      "privacy",
      "sportswear",
      "bag"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Please remove your _____ before entering the yoga studio. You can leave them on the rack beside the entrance.",
    "options": [
      "shoes",
      "bench",
      "size",
      "privacy"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "All delivery drivers must wear the company _____ while on duty. It includes a red shirt, a cap, and a jacket.",
    "options": [
      "bench",
      "size",
      "uniform",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The store's new line of _____ is popular with joggers and gym members. The shirts and shorts are light and dry quickly.",
    "options": [
      "mirror",
      "sportswear",
      "privacy",
      "sign"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "A large _____ near the escalator shows customers the way to the fitting rooms. It was put up after many people got lost.",
    "options": [
      "outfit",
      "size",
      "sign",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Before buying the boots, Tom decided to _____ both pairs to compare them. The left one felt better on his feet.",
    "options": [
      "try on",
      "change",
      "fit",
      "queue"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After cycling to work, Ben goes to the staff room to _____ out of his wet clothes. He keeps a dry shirt in his locker.",
    "options": [
      "try on",
      "queue",
      "fit",
      "change"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "These new boots _____ me perfectly, so I'll wear them on the hiking trip. They are neither too big nor too small.",
    "options": [
      "try on",
      "fit",
      "change",
      "queue"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "During the holiday sale, shoppers had to _____ for almost an hour to pay. The store has promised to open more registers next year.",
    "options": [
      "fit",
      "change",
      "try on",
      "queue"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "These shoes feel too _____ and hurt my toes after a short walk. I need to exchange them for a bigger size.",
    "options": [
      "tight",
      "available",
      "messy",
      "crowded"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Martin lost weight over the summer, so his old suit is now very _____ on him. He plans to have a tailor make it smaller.",
    "options": [
      "crowded",
      "loose",
      "available",
      "empty"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new office chairs are soft and _____, so staff can sit for hours without back pain. Everyone has thanked the manager for them.",
    "options": [
      "messy",
      "crowded",
      "comfortable",
      "empty"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The changing rooms were so _____ on Saturday that people waited in long lines. The store is adding four more rooms next month.",
    "options": [
      "loose",
      "crowded",
      "available",
      "clean"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The gym is usually _____ early on Sunday mornings, so you can use any machine you like. It gets busy after ten o'clock.",
    "options": [
      "empty",
      "tight",
      "messy",
      "loose"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Please keep the staff kitchen _____ by washing your cups after use. The cleaning team only comes in once a week.",
    "options": [
      "crowded",
      "loose",
      "clean",
      "tight"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "After the busy weekend sale, the fitting rooms were very _____, with clothes all over the floor. It took staff an hour to tidy them.",
    "options": [
      "available",
      "loose",
      "tight",
      "messy"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Sorry, there are no rooms _____ right now, but one should be free in five minutes. Please wait on the bench outside.",
    "options": [
      "loose",
      "available",
      "messy",
      "tight"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The store added two mirrors outside the _____ so shoppers can show friends their new looks. Inside, the space is quite small.",
    "options": [
      "sportswear",
      "size",
      "fitting room",
      "privacy"
    ],
    "answer": 2,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "fitting room": {
    "pos": "n.",
    "en_def": "a small room in a shop where you try on clothes",
    "cn_def": "試衣間"
  },
  "locker room": {
    "pos": "n.",
    "en_def": "a room where people change clothes before or after sports",
    "cn_def": "（運動場所的）更衣室"
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small cupboard with a lock for keeping your things safe",
    "cn_def": "置物櫃"
  },
  "mirror": {
    "pos": "n.",
    "en_def": "a piece of glass in which you can see yourself",
    "cn_def": "鏡子"
  },
  "bench": {
    "pos": "n.",
    "en_def": "a long seat for two or more people",
    "cn_def": "長凳"
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a piece of cloth that hangs down to cover a window or an opening",
    "cn_def": "簾子；窗簾"
  },
  "door": {
    "pos": "n.",
    "en_def": "the thing you open and close to go into a room",
    "cn_def": "門"
  },
  "privacy": {
    "pos": "n.",
    "en_def": "the state of being alone and not seen by other people",
    "cn_def": "隱私"
  },
  "clothes": {
    "pos": "n.",
    "en_def": "things you wear, such as shirts and trousers",
    "cn_def": "衣服"
  },
  "outfit": {
    "pos": "n.",
    "en_def": "a set of clothes worn together",
    "cn_def": "一套服裝"
  },
  "try on": {
    "pos": "v.phr.",
    "en_def": "to put on clothes to see if they fit or look good",
    "cn_def": "試穿"
  },
  "change": {
    "pos": "v.",
    "en_def": "to take off your clothes and put on different ones",
    "cn_def": "換（衣服）"
  },
  "size": {
    "pos": "n.",
    "en_def": "how big or small something is, such as clothes or shoes",
    "cn_def": "尺寸"
  },
  "fit": {
    "pos": "v.",
    "en_def": "to be the right size and shape for someone",
    "cn_def": "合身"
  },
  "tight": {
    "pos": "adj.",
    "en_def": "fitting your body very closely, often too closely",
    "cn_def": "緊的"
  },
  "loose": {
    "pos": "adj.",
    "en_def": "too big and not fitting closely",
    "cn_def": "寬鬆的；鬆的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel relaxed, with no pain",
    "cn_def": "舒適的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "empty": {
    "pos": "adj.",
    "en_def": "with no people or things inside",
    "cn_def": "空的"
  },
  "clean": {
    "pos": "adj.",
    "en_def": "not dirty",
    "cn_def": "乾淨的"
  },
  "messy": {
    "pos": "adj.",
    "en_def": "untidy, with things in the wrong places",
    "cn_def": "凌亂的"
  },
  "hook": {
    "pos": "n.",
    "en_def": "a curved piece of metal or plastic for hanging things on",
    "cn_def": "掛鉤"
  },
  "bag": {
    "pos": "n.",
    "en_def": "a container for carrying things",
    "cn_def": "袋子；包包"
  },
  "shoes": {
    "pos": "n.",
    "en_def": "things you wear on your feet",
    "cn_def": "鞋子"
  },
  "uniform": {
    "pos": "n.",
    "en_def": "special clothes that all workers or students of a group wear",
    "cn_def": "制服"
  },
  "sportswear": {
    "pos": "n.",
    "en_def": "clothes and shoes made for doing sports",
    "cn_def": "運動服裝"
  },
  "queue": {
    "pos": "v.",
    "en_def": "to wait in a line of people for your turn",
    "cn_def": "排隊"
  },
  "available": {
    "pos": "adj.",
    "en_def": "free to be used",
    "cn_def": "可用的；空出來的"
  },
  "sign": {
    "pos": "n.",
    "en_def": "a board with words or pictures that gives information",
    "cn_def": "標示；告示牌"
  }
};

const EXTRA_GLOSSES = {};
