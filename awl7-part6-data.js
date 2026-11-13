// Part 6 Quiz Data: release a song /album – survive
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "AWL Sublist 7 Part 6 - release a song /album – survive",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "release a song",
    "pos": "phr.",
    "cn_def": "發行歌曲/專輯",
    "en_def": "to make a song or album available",
    "sentence": "The band is excited to {{BLANK}} next month after a year of recording and production.",
    "cn": "樂隊很高興能在經過一年的錄音和製作後在下個月發行歌曲/專輯。"
  },
  {
    "word": "released",
    "pos": "adj.",
    "cn_def": "已發行的",
    "en_def": "made available to the public",
    "sentence": "The {{BLANK}} album received critical acclaim and topped the charts.",
    "cn": "已發行的專輯受到了好評並登上了排行榜。"
  },
  {
    "word": "release",
    "pos": "n.",
    "cn_def": "發行",
    "en_def": "the act of making something available",
    "sentence": "The {{BLANK}} of the software update was delayed due to some unexpected bugs.",
    "cn": "由於一些意外的錯誤，軟件更新的發行被延遲了。"
  },
  {
    "word": "reverse",
    "pos": "n.",
    "cn_def": "反轉",
    "en_def": "going backward",
    "sentence": "Driving in {{BLANK}} requires careful attention to avoid accidents.",
    "cn": "倒車時需要仔細注意以避免事故。"
  },
  {
    "word": "reverse",
    "pos": "v.",
    "cn_def": "反轉",
    "en_def": "to change something to the opposite",
    "sentence": "It's difficult to {{BLANK}} the effects of pollution on the environment.",
    "cn": "很難扭轉污染對環境的影響。"
  },
  {
    "word": "reversible",
    "pos": "adj.",
    "cn_def": "可逆的",
    "en_def": "able to be changed back",
    "sentence": "The damage to the ecosystem is not {{BLANK}} without immediate action.",
    "cn": "如果不立即採取行動，生態系統的損害是不可逆的。"
  },
  {
    "word": "irreversible",
    "pos": "adj.",
    "cn_def": "不可逆的",
    "en_def": "not able to be changed back",
    "sentence": "The decision could have {{BLANK}} consequences, so it should be considered carefully.",
    "cn": "這個決定可能會有不可逆的後果，所以應該仔細考慮。"
  },
  {
    "word": "simulate",
    "pos": "v.",
    "cn_def": "模擬",
    "en_def": "to copy how something real works",
    "sentence": "Engineers {{BLANK}} different scenarios to test the resilience of the structure.",
    "cn": "工程師模擬不同的情境以測試結構的恢復力。"
  },
  {
    "word": "simulated",
    "pos": "adj.",
    "cn_def": "模擬的",
    "en_def": "made to look like the real thing",
    "sentence": "The {{BLANK}} environment helps researchers study behavior in controlled settings.",
    "cn": "模擬環境幫助研究人員在受控設置中研究行為。"
  },
  {
    "word": "simulation",
    "pos": "n.",
    "cn_def": "模擬",
    "en_def": "a model or copy of a real situation",
    "sentence": "The {{BLANK}} allowed the team to predict potential outcomes before making a decision.",
    "cn": "模擬使團隊能夠在做出決定之前預測可能的結果。"
  },
  {
    "word": "sole",
    "pos": "adj.",
    "cn_def": "唯一的",
    "en_def": "only; the only one",
    "sentence": "She is the {{BLANK}} heir to the family fortune.",
    "cn": "她是家族財富的唯一繼承人。"
  },
  {
    "word": "solely",
    "pos": "adv.",
    "cn_def": "唯一地",
    "en_def": "only",
    "sentence": "The decision was based {{BLANK}} on the evidence presented.",
    "cn": "這個決定完全基於提供的證據。"
  },
  {
    "word": "somewhat",
    "pos": "adv.",
    "cn_def": "有些",
    "en_def": "a little; to some degree",
    "sentence": "The results were {{BLANK}} surprising given the lack of preparation.",
    "cn": "鑑於缺乏準備，結果有些令人驚訝。"
  },
  {
    "word": "submit",
    "pos": "v.",
    "cn_def": "提交",
    "en_def": "to give something in for a decision",
    "sentence": "Please {{BLANK}} your application by the deadline to be considered.",
    "cn": "請在截止日期前提交您的申請以供考慮。"
  },
  {
    "word": "submitted",
    "pos": "adj.",
    "cn_def": "已提交的",
    "en_def": "given in for a decision",
    "sentence": "The {{BLANK}} documents are under review by the committee.",
    "cn": "委員會正在審查已提交的文件。"
  },
  {
    "word": "submission",
    "pos": "n.",
    "cn_def": "提交",
    "en_def": "the act of giving something in",
    "sentence": "The deadline for {{BLANK}} of proposals is next Friday.",
    "cn": "提案提交的截止日期是下周五。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "getting what you want",
    "sentence": "Hard work and determination are key factors for {{BLANK}}.",
    "cn": "努力和決心是成功的關鍵因素。"
  },
  {
    "word": "succeed",
    "pos": "v.",
    "cn_def": "成功",
    "en_def": "to do what you tried to do",
    "sentence": "With enough effort, you can {{BLANK}} in achieving your goals.",
    "cn": "通過足夠的努力，您可以在實現目標方面取得成功。"
  },
  {
    "word": "succeed",
    "pos": "v.",
    "cn_def": "繼承",
    "en_def": "to take over a job after someone",
    "sentence": "She will {{BLANK}} her father as the CEO of the company.",
    "cn": "她將繼承她父親成為公司的首席執行官。"
  },
  {
    "word": "successive",
    "pos": "adj.",
    "cn_def": "連續的",
    "en_def": "following one after another",
    "sentence": "The team secured {{BLANK}} victories in the tournament.",
    "cn": "該隊在比賽中獲得了連續的勝利。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "having good results",
    "sentence": "The {{BLANK}} entrepreneur shared his journey and experiences in a recent interview.",
    "cn": "成功的企業家最近在一次訪談中分享了他的旅程和經歷。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "生存",
    "en_def": "to stay alive",
    "sentence": "It's remarkable how some plants can {{BLANK}} in extremely harsh climates.",
    "cn": "有些植物能在極其惡劣的氣候中生存，這真是令人驚奇。"
  }
];

const MCQS = [
  {
    "q": "The band is excited to ______ next month after a year of recording and production.",
    "options": [
      "differ from",
      "release a song/album",
      "be disposed to V",
      "be equipped with"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The ______ album received critical acclaim and topped the charts.",
    "options": [
      "released",
      "visible",
      "inserted",
      "definite"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The ______ of the software update was delayed due to some unexpected bugs.",
    "options": [
      "founder",
      "intervention",
      "confirmation",
      "release"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Driving in ______ requires careful attention to avoid accidents.",
    "options": [
      "disposal",
      "conversion",
      "reverse",
      "quote"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "It's difficult to ______ the effects of pollution on the environment.",
    "options": [
      "survive",
      "reverse",
      "publish",
      "aid"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The damage to the ecosystem is not ______ without immediate action.",
    "options": [
      "converted",
      "simulated",
      "reversible",
      "published"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The decision could have ______ consequences, so it should be considered carefully.",
    "options": [
      "finite",
      "contrary",
      "converted",
      "irreversible"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Engineers ______ different scenarios to test the resilience of the structure.",
    "options": [
      "simulate",
      "guarantee",
      "differentiate",
      "succeed"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The ______ environment helps researchers study behavior in controlled settings.",
    "options": [
      "classical",
      "submitted",
      "ultimate",
      "simulated"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The ______ allowed the team to predict potential outcomes before making a decision.",
    "options": [
      "file",
      "simulation",
      "success",
      "phenomenon"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "She is the ______ heir to the family fortune.",
    "options": [
      "sole",
      "well-equipped",
      "guaranteed",
      "published"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The decision was based ______ on the evidence presented.",
    "options": [
      "somewhat",
      "globally",
      "solely",
      "ultimately"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The results were ______ surprising given the lack of preparation.",
    "options": [
      "globally",
      "somewhat",
      "solely",
      "foundation"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please ______ your application by the deadline to be considered.",
    "options": [
      "reverse",
      "equip",
      "submit",
      "convert"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ documents are under review by the committee.",
    "options": [
      "submitted",
      "innovative",
      "irreversible",
      "eliminated"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The deadline for ______ of proposals is next Friday.",
    "options": [
      "medium",
      "volunteer",
      "file",
      "submission"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Hard work and determination are key factors for ______.",
    "options": [
      "success",
      "dynamic",
      "submission",
      "transmission"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "With enough effort, you can ______ in achieving your goals.",
    "options": [
      "innovate",
      "eliminate",
      "succeed",
      "quote"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "She will ______ her father as the CEO of the company.",
    "options": [
      "simulate",
      "succeed",
      "aid",
      "quote"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The team secured ______ victories in the tournament.",
    "options": [
      "prohibited",
      "eliminated",
      "definite",
      "successive"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The ______ entrepreneur shared his journey and experiences in a recent interview.",
    "options": [
      "successive",
      "voluntary",
      "successful",
      "hierarchical"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "It's remarkable how some plants can ______ in extremely harsh climates.",
    "options": [
      "advocate",
      "extract",
      "eliminate",
      "survive"
    ],
    "answer": 3,
    "vocabIndex": 21
  }
];

const LOOKUP = {
  "release a song": {
    "pos": "phr.",
    "en_def": "to make a song or album available",
    "cn_def": "發行歌曲/專輯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a song or album available",
        "cn_def": "發行歌曲/專輯"
      }
    ]
  },
  "release a song /album": {
    "pos": "phr.",
    "en_def": "to make a song or album available",
    "cn_def": "發行歌曲/專輯",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to make a song or album available",
        "cn_def": "發行歌曲/專輯"
      }
    ]
  },
  "released": {
    "pos": "adj.",
    "en_def": "made available to the public",
    "cn_def": "已發行的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made available to the public",
        "cn_def": "已發行的"
      }
    ]
  },
  "release": {
    "pos": "n.",
    "en_def": "the act of making something available",
    "cn_def": "發行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of making something available",
        "cn_def": "發行"
      }
    ]
  },
  "reverse": {
    "pos": "n.",
    "en_def": "going backward",
    "cn_def": "反轉",
    "combined": [
      {
        "pos": "n.",
        "en_def": "going backward",
        "cn_def": "反轉"
      },
      {
        "pos": "v.",
        "en_def": "to change something to the opposite",
        "cn_def": "反轉"
      }
    ]
  },
  "reversible": {
    "pos": "adj.",
    "en_def": "able to be changed back",
    "cn_def": "可逆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "able to be changed back",
        "cn_def": "可逆的"
      }
    ]
  },
  "irreversible": {
    "pos": "adj.",
    "en_def": "not able to be changed back",
    "cn_def": "不可逆的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able to be changed back",
        "cn_def": "不可逆的"
      }
    ]
  },
  "simulate": {
    "pos": "v.",
    "en_def": "to copy how something real works",
    "cn_def": "模擬",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to copy how something real works",
        "cn_def": "模擬"
      }
    ]
  },
  "simulated": {
    "pos": "adj.",
    "en_def": "made to look like the real thing",
    "cn_def": "模擬的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "made to look like the real thing",
        "cn_def": "模擬的"
      }
    ]
  },
  "simulation": {
    "pos": "n.",
    "en_def": "a model or copy of a real situation",
    "cn_def": "模擬",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a model or copy of a real situation",
        "cn_def": "模擬"
      }
    ]
  },
  "sole": {
    "pos": "adj.",
    "en_def": "only; the only one",
    "cn_def": "唯一的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "only; the only one",
        "cn_def": "唯一的"
      }
    ]
  },
  "solely": {
    "pos": "adv.",
    "en_def": "only",
    "cn_def": "唯一地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "only",
        "cn_def": "唯一地"
      }
    ]
  },
  "somewhat": {
    "pos": "adv.",
    "en_def": "a little; to some degree",
    "cn_def": "有些",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "a little; to some degree",
        "cn_def": "有些"
      }
    ]
  },
  "submit": {
    "pos": "v.",
    "en_def": "to give something in for a decision",
    "cn_def": "提交",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give something in for a decision",
        "cn_def": "提交"
      }
    ]
  },
  "submitted": {
    "pos": "adj.",
    "en_def": "given in for a decision",
    "cn_def": "已提交的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "given in for a decision",
        "cn_def": "已提交的"
      }
    ]
  },
  "submission": {
    "pos": "n.",
    "en_def": "the act of giving something in",
    "cn_def": "提交",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the act of giving something in",
        "cn_def": "提交"
      }
    ]
  },
  "success": {
    "pos": "n.",
    "en_def": "getting what you want",
    "cn_def": "成功",
    "combined": [
      {
        "pos": "n.",
        "en_def": "getting what you want",
        "cn_def": "成功"
      }
    ]
  },
  "succeed": {
    "pos": "v.",
    "en_def": "to do what you tried to do",
    "cn_def": "成功",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to do what you tried to do",
        "cn_def": "成功"
      },
      {
        "pos": "v.",
        "en_def": "to take over a job after someone",
        "cn_def": "繼承"
      }
    ]
  },
  "successive": {
    "pos": "adj.",
    "en_def": "following one after another",
    "cn_def": "連續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "following one after another",
        "cn_def": "連續的"
      }
    ]
  },
  "successful": {
    "pos": "adj.",
    "en_def": "having good results",
    "cn_def": "成功的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "having good results",
        "cn_def": "成功的"
      }
    ]
  },
  "survive": {
    "pos": "v.",
    "en_def": "to stay alive",
    "cn_def": "生存",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stay alive",
        "cn_def": "生存"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
