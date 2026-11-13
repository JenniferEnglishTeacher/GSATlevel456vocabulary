"""Hand-made corrections for LiveABC Level 2-4 (liveabc_convert.py --book=2-4), keyed by (level, unit, entry number in the unit, from 0).
ANSWERS   - the text that really fills the blank.   SENTENCES - (sentence with ____ blanks, Chinese) replacing an unusable source sentence."""
B = "basic"
U = "__________"
_A = {
    1: {15: "left a lasting impression on", 16: "make a good impression on", 31: "puzzled", 40: "lay", 41: "categories"},
    2: {4: "blood cells", 9: "goals"},
    3: {1: "stung", 2: "took the sting out", 5: "was in danger", 8: "poses a severe risk", 9: "poses a significant threat to", 24: "harsh weather conditions",
        25: "harsh comments", 27: "chemicals", 29: "properties", 30: "caused", 35: "solution to the problem", 47: "prevent children from"},
    4: {6: "crickets", 18: "rate", 36: "dying out"},
    5: {12: "keeping a diary", 17: "suggest", 22: "relatives", 25: "be connected to", 44: "reduction", 46: "increase"},
    6: {28: "building materials", 45: "chronic diseases"},
    7: {9: "cheer her up", 17: "In her spare time", 18: "spare you from", 29: "tourists", 34: "aimed at", 36: "reach her goal", 38: "a sense of community"},
    8: {2: "objects", 11: "a period of time"},
    9: {1: "arrive in", 2: "arrived at", 3: "century", 5: "release the hostage", 6: "release a single", 8: "release stress", 12: "mobile device", 20: "folded",
        55: "digits", 62: "exhibit", 66: "developer of the app", 67: "developing countries", 68: "Developed countries", 74: "marriage", 80: "era",
        83: "launch its newest beauty and skin care product line", 84: "launch a campaign", 85: "launch a missile"},
    10: {7: "fit", 9: "fitness", 20: "tell the truth", 28: "speed", 29: "effects", 31: "side effects", 39: "realized", 51: "sense of responsibility",
         52: "sense of humor", 53: "sense of achievement", 54: "sense of direction", 62: "blessing in disguise"},
    11: {14: "focus on", 26: "originates from", 28: "ranging from clothing to", 38: "been admitted to"},
    12: {24: "raged on", 28: "To his grief", 40: "feel like", 41: "feels like", 42: "wept", 46: "diagnosed"},
    13: {5: "is characteristic of", 6: "sparked", 13: "intensified", 31: "revisions", 34: "modifications", 39: "voiced", 43: "gives voice to",
         46: "voice your opinion", 52: "proved", 54: "commented", 56: "made a comment on", 57: "had no comment on", 60: "implications", 62: "interpreted",
         63: "interpretations"},
    14: {0: "amazed", 3: "crop", 5: "influence", 6: "influenced", 9: "human beings", 37: "places great emphasis on", 62: "on a diet"},
    15: {11: "creatures", 12: "creators", 17: "favor his younger son over", 19: "do a favor", 26: "rejected", 27: "declined", 28: "declined", 30: "put off",
         32: "sensed", 33: "sensitive to"},
    16: {8: "broaden", 22: "shift", 32: "review", 33: "spread rumors", 34: "delivered", 35: "delivering a speech", 37: "molecule", 38: "pheromones"},
    17: {23: "occasions", 31: "malfunction", 43: "demonstrators", 44: "scratched"},
    18: {41: "hardships"},
}
ANSWERS = {(B, u, i): a for u, d in _A.items() for i, a in d.items()}
# Advanced units (same keys: unit -> entry number from 0 -> the text that fills the blank)
_ADV = {
    1: {2: "dependence", 6: "imaginations", 46: "gadgets"},
    2: {5: "extras", 19: "tasks", 22: "dragging his feet", 32: "polish", 33: "nail polish", 37: "sets her apart", 45: "baggage", 49: "wrinkles"},
    3: {49: "burst", 50: "burst", 53: "burst into"},
    6: {15: "lost her appetite", 65: "admitted", 85: "met her match", 111: "upset", 122: "prefer", 123: "prefers to"},
    7: {38: "make up for", 56: "originate", 57: "originated in", 66: "had no desire to"},
    8: {2: "can't resist", 9: "differ", 20: "smoothed his shirt", 32: "unfold", 41: "pay attention to her", 49: "contents", 54: "to their hearts' content",
        66: "prefer", 96: "describe"},
    9: {15: "need"},
    10: {71: "was charged with"},
    12: {39: "delight"},
    13: {15: "came into existence", 34: "weave", 37: "shot", 38: "shoot", 39: "shot", 42: "shot up", 43: "shot down"},
    14: {4: "assured us that", 5: "assure them of", 13: "rely on", 59: "was guilty of"},
    15: {4: "reward", 43: "stole"},
    16: {18: "grinned", 21: "smile", 25: "hold her breath", 52: "seek"},
    17: {2: "turned out", 21: "musical instruments", 51: "change"},
    18: {19: "occurred to"},
}
ANSWERS.update({("advanced", u, i): a for u, d in _ADV.items() for i, a in d.items()})
CN = {}
SENTENCES = {
    (B, 2, 4): (f"White {U} {U} help the body fight infections.", "白血球幫助身體抵抗感染。"),
    (B, 3, 0): (f"The {U} from the bee was excruciating.", "被蜜蜂螫傷的刺痛讓人痛苦不堪。"),
    (B, 7, 9): (f"After a tough week, Sarah's friends decided to throw her a surprise party to {U} her {U} and bring a smile to her face.",
                "經過艱難的一周後，莎拉的朋友們決定為她舉辦一個驚喜派對，讓她振作起來並露出笑容。"),
    (B, 9, 83): (f"The cosmetics company is set to {U} its newest beauty and skin care {U} {U} next week.", "該美妝公司計劃於下週推出其最新美容與護膚產品系列。"),
    (B, 10, 20): (f"It's important to {U} {U} {U} in any situation, as honesty is the foundation of trust.", "在任何情況下說實話都很重要，因為誠實是信任的基礎。"),
    (B, 11, 15): (f"The cost of living can {U} significantly from one city to another, depending on local taxes and housing demands.",
                  "生活成本在不同城市之間可能會有顯著差異，這取決於當地的稅收和住房需求。"),
    (B, 11, 40): (f"His sudden {U} of guilt surprised everyone in the courtroom, as he had previously claimed total innocence.",
                  "他突然承認有罪讓法庭上的每個人都感到驚訝，因為他之前聲稱完全清白。"),
    (B, 15, 0): (f"He decided to {U} a large portion of his savings by investing in a volatile market.", "他決定冒險把大部分積蓄投資在波動的市場上。"),
    (B, 16, 37): (f"A water {U} is made of two hydrogen atoms and one oxygen atom.", "一個水分子由兩個氫原子和一個氧原子組成。"),
}
SENTENCES.update({
    ("advanced", 6, 122): (f"Most students in the survey {U} group discussions to individual presentations.", "調查中的大多數學生喜歡小組討論甚於個人演講。"),
    ("advanced", 6, 65): (f"Only students with a valid school ID will be {U} to the examination hall on the day of the final test.", '只有持有效學生證的學生才會在期末考試當天被准許進入考場。'),
    ("advanced", 7, 38): (f"Although the new employee lacked experience, her enthusiasm and hard work helped {U} {U} {U} her low efficiency in the early weeks.",
                          "雖然這位新員工缺乏經驗，但她的熱情和努力在最初幾週彌補了效率上的不足。"),
})
