VER_INDEX = 0;
MUSIC_INDEX = 1;
NAME_INDEX = 2;
ID_INDEX = 3;
DISP_INDEX = 4;
DIFF_INDEX = 5; 
IN_VER_INDEX = 6;//バージョン内における番号


music_table = [
    //2nd, Substream
    [2,0, "RUGGED ASH†", "rugged_l", "RUG<br>GED†", "A", 0],
    
    //3rd
    [3,1, "era(nostalmix)(H)", "eranos", "era(n)<br>H", "H", 0],
    [3,2, "era(nostalmix)(A)", "eranos", "era(n)<br>A", "A", 1],
    
    //4th
    [3,3, "Holic", "holic", "Holic", "A", 2],
    [4,4, "DXY!(H)", "dxy", "DXY H", "H", 0],
    [4,5, "DXY!(A)", "dxy", "DXY A", "A", 1],
    [4,6, "era(step mix)", "erastep", "era(s)", "A", 2],
    [4,7, "minimalian", "mnmlian", "mini<br>malian", "A", 3],
    [4,8, "starmine", "starmine", "star<br>mine", "A", 4],
    [4,9, "SWEET LAB", "swtlab24", "SWEET<br>LAB", "A", 5],
    
    //5th
    [5,10, "QQQ", "qqq", "QQQ", "A", 0],
    
    //6th
    [6,11, "Colors(radio edit)", "colors", "Colors<br>radio", "A", 0],
    [6,12, "G2", "g2", "G2", "A", 1],
    [6,13, "NEMESIS", "nemesis", "NEME<br>SIS", "A", 2],
    [6,14, "route 80s", "r80s_emp", "route<br>80s", "A", 3],
    [6,15, "Summer Vacation(CU mix)", "summer", "S V<br>(CUmix)", "A", 4],
    
    //7th
    [7,16, "A",  "a_amuro",  "A", "A", 0],
    [7,17, "Cheer Train", "cheertra", "Cheer<br>Train", "A", 1],
    [7,18, "Spica", "spica", "Spica", "A", 2],
    [7,19, "stoic", "stoic", "Stoic", "A", 3],
    [7,20, "革命(H)", "_kakumei", "革命H", "H", 4],
    [7,21, "革命(A)", "_kakumei", "革命A", "A", 5],
    
    //8th
    [8,22, "murmur twins", "murmur", "murmur<br>twins", "A", 0],
    [8,23, "桜", "_sakura", "桜", "A", 1],
    
    //9th
    [9,24, "Karma", "karma", "Karma", "A", 0],
    [9,25, "lower world", "loworld", "lower<br>world", "A", 1],
    [9,26, "moon_child", "m_child", "moon<br>child", "A", 2],
    [9,27, "quasar", "quasar", "quasar", "A", 3],
    [9,28, "RISLIM-Remix-", "rislimr", "RISLIM<br>Remix", "A", 4],
    
    //10th
    [10,29, "GHOST REVIVAL", "ghost", "GHOST<br>REV", "A", 0],
    [10,30, "Innocent Walls", "innocent", "Walls", "A", 1],
    [10,31, "Love Is Eternity", "loveter", "Love<br>is E", "A", 2],
    [10,32, "No.13", "no13", "No.13", "A", 3],
    [10,33, "One More Lovely", "onemore", "OML", "A", 4],
    [10,34, "1st Samurai", "1samurai", "1st", "A", 5],
    [10,35, "雪月花", "_stgekka", "雪月花", "A", 6],
    
    //IIDX RED
    [11,36, "AA", "aa_amuro", "AA", "A", 0],
    [11,37, "BLOCKS", "blocks", "BLOCKS", "A", 1],
    [11,38, "FAKE TIME(H)", "faketime", "FAKE H", "H", 2],
    [11,39, "FAKE TIME(A)", "faketime", "FAKE A", "A", 3],
    [11,40, "GENOCIDE(H)", "genocide", "GENO H", "H", 4],
    [11,41, "GENOCIDE(A)", "genocide", "GENO A", "A", 5],
    [11,42, "gigadelic(H)", "gigadel", "giga H", "H", 6],
    [11,43, "gigadelic(A)", "gigadel", "giga A", "A", 7],
    [11,44, "RED ZONE†", "redzonel", "RED<br>ZONE†", "A", 8],
    [11,45, "Sphere", "sphere", "Sphere", "A", 9],
    [11,46, "spiral galaxy†", "spiral_l", "spiral†", "A", 10],
    [11,47, "ピアノ協奏曲第１番 蠍火", "_psasori", "蠍火", "A", 11],
    
    //HAPPY SKY
    [12,48, "garden", "gardenhs", "garden", "A", 0],
    [12,49, "INAZUMA", "inazuma", "INA<br>ZUMA", "A", 1],
    [12,50, "Little Little Princess†", "littlepl", "LLP†", "A", 2],
    [12,51, "SCREAM SQUAD", "sc_squad", "SCRM<br>SQUAD", "A", 3],
    //Twelfth Style† 4
    [12,52, "冥", "_mei", "冥", "A", 5],
    
    //DistorteD
    [13,53, "Concertino in Blue", "concert", "Concer<br>tino", "A", 0],
    [13,54, "CONTRACT", "contract", "CONT<br>RACT", "A", 1],
    [13,55, "CONTRACT†", "contracl", "CONT<br>RACT†", "A", 2],
    [13,56, "DUE TOMORROW", "due_tmrw", "DUE<br>TMROW", "A", 3],
    [13,57, "Ganymede", "ganymede", "Gany<br>mede", "A", 4],
    [13,58, "MINT", "mint", "MINT", "A", 5],
    [13,59, "tripping contact(teranoid&MC Natsack Remix)", "trip_mc", "trip<br>ping", "A", 6],
    [13,60, "waxing and wanding†", "waxing_l", "waxing†", "A", 7],
    [13,61, "華蝶風雪", "_kachofu", "華蝶風雪", "A", 8],
    [13,62, "カゴノトリ～弐式～", "_kagono", "カゴ<br>弐式", "A", 9],
    [13,63, "嘆きの樹", "_nageki", "嘆き<br>の樹", "A", 10],
    
    //GOLD
    [14,64, "Candy Galy", "candygal", "Candy<br>Galy", "A", 0],
    [14,65, "Fascination MAXX", "fas_maxx", "FaXX", "A", 1],
    //GRID KNIGHT†  2
    [14,66, "INORI", "inori", "INORI", "A", 3],
    [14,67, "KAMAITACHI", "kmitachi", "KAMA<br>ITACHI", "A", 4],
    [14,68, "KAMAITACHI†", "kmitachl", "KAMA<br>ITACHI†", "A", 5],
    [14,69, "LASER CRUSTER", "lcruster", "LASER", "A", 6],
    [14,70, "op.31 叙情", "op31jojo", "op.31<br>叙情", "A", 7],
    [14,71, "Sense 2007(H)", "sens2007", "Sense<br>H", "H", 8],
    [14,72, "Sense 2007(A)", "sens2007", "Sense<br>A", "A", 9],
    [14,73, "smile", "smile", "smile", "A", 10],
    [14,74, "snow storm", "snwstorm", "snow<br>storm", "A", 11],
    [14,75, "TRANOID", "tranoid", "TRANOID", "A", 12],
    [14,76, "VANESSA", "vanessa", "VANE<br>SSA", "A", 13],
    [14,77, "VANESSA†", "vanessal", "VANE<br>SSA†", "A", 14],
    [14,78, "電人、暁に斃れる。", "_fattack", "電人<br>暁", "A", 15],
    
    //DJ TROOPERS
    [15,79, "Anisakis-somatic mutation type Forza", "anisakis", "Ani<br>sakis", "A", 0],
    [15,80, "Be OK", "be_ok", "Be<br>OK", "A", 1],
    [15,81, "Blue Rain†", "bluerail", "Blue<br>Rain†", "A", 2],
    [15,82, "Do it!! Do it!!", "doit_emp", "Do it<br>Do it", "A", 3],
    [15,83, "four pieces of heaven", "fourpces", "four<br>pieces", "A", 4],
    [15,84, "ICARUS", "icarus", "ICA<br>RUS", "A", 5],
    [15,85, "ICARUS†", "icarusl", "ICA<br>RUS†", "A", 6],
    [15,86, "MENDES", "mendes", "MENDES", "A", 7],
    [15,87, "oratio", "oratio", "oratio", "A", 8],
    [15,88, "PARANOiA ～HADES～", "pr_hades", "PARA<br>HADES", "A", 9],
    [15,89, "satellite020712 from CODED ARMS", "sa2712ac", "sate<br>020712", "A", 10],
    [15,90, "State Of The Art", "sotart24", "State<br>Art", "A", 11],
    [15,91, "THE DEEP STRIKER†", "tdeepstl", "DEEP<br>STRKR†", "A", 12],
    [15,92, "TROOPERS", "troopers", "TROO<br>PERS", "A", 13],
    [15,93, "Ubertreffen†", "ubertrel", "Uber<br>treffen†", "A", 14],
    //Wanna Party† 15
    [15,94, "少年A", "_kid_a", "少年A", "A", 16],
    [15,95, "ミラージュレジデンス", "_m_resid", "ミラー<br>ジュ", "A", 17],
    
    //EMPRESS
    //B4U(BEMANI FOR YOU MIX)† 0
    [16,96, "Colorful Cookie", "cocookie", "Colorful<br>Cookie", "A", 1],
    [16,97, "Go Beyond!!", "gobeyond", "Go<br>Beyond", "A", 2],
    [16,98, "Kung-fu Empire†", "kungfu_l", "Kung-fu<br>Empire†", "A", 3],
    [16,99, "Y&Co. is dead or alive", "ycodoa25", "Y&Co<br>is doa", "A", 4],
    [16,100, "3y3s", "3y3s", "3y3s", "A", 5],
    [16,101, "卑弥呼", "_himiko", "卑弥呼", "A", 6],
    [16,102, "ミッドナイト堕天使", "_mdatn24", "ミッド<br>堕天使", "A", 7],
    [16,103, "凛として咲く花の如く†", "_rintosl", "凛咲<br>花如†", "A", 8],
    
    //SIRIUS
    // AIR RAID FROM THA UNDAGROUND† 0
    [17,104, "Almagest", "almag_ra", "Alma<br>gest", "A", 1],
    [17,105, "Bad Maniacs", "bmaniacs", "Bad<br>Maniacs", "A", 2],
    [17,106, "DOMINION", "dominion", "DOMI<br>NION", "A", 3],
    [17,107, "eRAseRmOToRpHAntOM", "ephantom", "eRAseR<br>mOTor", "A", 4],
    [17,108, "Evans", "evans", "Evans", "A", 5],
    [17,109, "EXUSIA", "exusia", "EXUSIA", "A", 6],
    [17,110, "G59", "g59", "G59", "A", 7],
    [17,111, "GALGALIM", "galgalim", "GAL<br>GALIM", "A", 8],
    [17,112, "GOLDEN CROSS", "goldcros", "GOLD<br>CROSS", "A", 9],
    [17,113, "quell～the seventh slave～", "quell", "quell", "A", 10],
    [17,114, "Raison d'etre～交差する宿命～", "raison", "Raison<br>d'etre", "A", 11],
    [17,115, "Red. by Full Metal Jacket", "red_fmj", "Red<br>Full", "A", 12],
    [17,116, "SOLID STATE SQUAD", "sssquad", "SOLID<br>STATE", "A", 13],
    [17,117, "SOLID STATE SQUAD†", "sssquadl", "SOLID<br>STATE†", "A", 14],
    [17,118, "ワルツ第17番 ト短調 大犬のワルツ", "_valse17", "大犬<br>ワルツ", "A", 15],
    
    //RESORT ANTHEM
    [18,119, "Broken", "brokenrb", "Broken", "A", 0],
    [18,120, "Dances with Snow Fairies", "dancwith", "Dances<br>Snow", "A", 1],
    [18,121, "ELECTRIC MASSIVE DIVER", "emassive", "MAS<br>SIVE", "A", 2],
    [18,122, "Kailua", "kailua", "Kailua", "A", 3],
    //New Castle Legions 4    
    [18,123, "PARADISE LOST", "paralost", "PARA<br>LOST", "A", 5],
    [18,124, "perditus†paradisus", "perditus", "p†p", "A", 6],
    [18,125, "reunion", "reunion", "reunion", "A", 7],
    [18,126, "SABER WING", "saberwng", "SABER<br>WING", "A", 8],
    [18,127, "sakura storm", "sakurast", "sakura<br>storm", "A", 9],
    [18,128, "Session 9-Chronicles-", "session9", "Session<br>9", "A", 10],
    [18,129, "SPECIAL SUMMER CAMPAIGN!", "ssc", "SMMR<br>CAMP", "A", 11],
    [18,130, "THE BLACK KNIGHT", "tbknight", "BLACK<br>KNIGHT", "A", 12],
    [18,131, "ZETA～素数の世界と超越者～", "zeta", "ZETA", "A", 13],
    [18,132, "黒髪乱れし修羅となりて", "_krokami", "黒髪<br>修羅", "A", 14],
    [18,133, "灼熱Beach Side Bunny", "_shakunt", "灼熱<br>BSB", "A", 15],
    [18,134, "旅人リラン", "_t_rerun", "旅人<br>リラン", "A", 16],
    
    //Lincle
    [19,135, "BLACK.by X-Cross Fade", "blackbyx", "BLACK<br>X", "A", 0],
    [19,136, "DIAVOLO", "diavolo", "DIA<br>VOLO", "A", 1],
    [19,137, "F", "f_amuro", "F", "A", 2],
    [19,138, "fffff", "fffff", "fffff", "A", 3],
    [19,139, "HAERETICUS", "haeretic", "HAERE<br>TICUS", "A", 4],
    [19,140, "Infinite cave", "inf_cave", "Inf<br>cave", "A", 5],
    [19,141, "NNRT", "nnrt", "NNRT", "A", 6],
    [19,142, "QUANTUM TELEPORTATION", "quantum", "QNTM<br>TELEPO", "A", 7],
    [19,143, "QUANTUM TELEPORTATION†", "quantuml", "QNTM<br>TELEPO†", "A", 8],
    [19,144, "quaver♪", "quaver", "quaver", "A", 9],
    [19,145, "Snake Stick", "snakestk", "Snake<br>Stick", "A", 10],
    [19,146, "The Limbo", "thelimbo", "The<br>Limbo", "A", 11],
    [19,147, "The Sampling Paradise", "t_sample", "Samp<br>Para", "A", 12],
    [19,148, "Todestrieb", "todestri", "Todest<br>rieb", "A", 13],
    [19,149, "WONDER WALKER", "w_walker", "WONDR<br>WALKR", "A", 14],
    [19,150, "YAKSHA", "yaksha", "YAKSHA", "A", 15],
    [19,151, "yellow head joe", "yheadjoe", "yellow<br>head", "A", 16],
    [19,152, "子供の落書き帳", "_kodomo", "子供<br>落書", "A", 17],
    [19,153, "君のハートにロックオン", "_klockon", "ロック<br>オン", "A", 18],
    [19,154, "恋する☆宇宙戦争っ!!", "_koisuru", "宇宙<br>戦争", "A", 19],
    [19,155, "聖人の塔", "_seijin", "聖人<br>の塔", "A", 20],
    [19,156, "天空の夜明け", "_tkyoake", "天空<br>夜明", "A", 21],
    
    //tricolo
    [20,157, "Confiserie", "confiser", "Confi<br>serie", "A", 0],
    [20,158, "DAY DREAM", "daydream", "DAY<br>DREAM", "A", 1],
    [20,159, "Devilz Staircase", "devilz_s", "Devilz<br>Stair", "A", 2],
    [20,160, "Elemental Creation", "elecreat", "Element<br>Creat", "A", 3],
    [20,161, "FLOWER", "flower", "FLO<br>WER", "A", 4],
    [20,162, "GAIA", "gaia", "GAIA", "A", 5],
    [20,163, "Hollywood Galaxy", "holywood", "Holly<br>wood", "A", 6],
    [20,164, "JOMANDA", "jomanda", "JOMANDA", "A", 7],
    [20,165, "Liberation", "liberatn", "Libe<br>ration", "A", 8],
    [20,166, "Little Star", "ltl_star", "Little<br>Star", "A", 9],
    [20,167, "neu", "neu", "neu", "A", 10],
    [20,168, "Plan 8", "plan8", "Plan<br>8", "A", 11],
    [20,169, "Proof of the existence", "proof_of", "Proof<br>exist", "A", 12],
    [20,170, "rumrum triplets", "rumrum", "rumrum<br>triple", "A", 13],
    [20,171, "Sol Cosine Job 2", "soljob2", "SCJ2", "A", 14],
    [20,172, "STULTI", "stulti", "STULTI", "A", 15],
    [20,173, "SYNC-ANTHEM", "sync_ant", "SYNC<br>ANTHM", "A", 16],
    [20,174, "Thor's Hammer", "thors_hm", "Thor's<br>Hmmr", "A", 17],
    [20,175, "Timepiece phase II", "tpiece_2", "Tpp<br>II", "A", 18],
    [20,176, "Timepiece phase II(CN Ver.)", "tpiececn", "Tpp<br>II CN", "A", 19],
    [20,177, "True Blue", "trueblue", "True<br>Blue", "A", 20],
    [20,178, "Valanga", "valanga", "Vala<br>nga", "A", 21],
    [20,179, "Zirkfied", "zirkfied", "Zirk<br>fied", "A", 22],
    [20,180, "アストライアの双皿", "_astraia", "双皿", "A", 23],
    [20,181, "カジノファイヤーことみちゃん", "_casino", "カジノ", "A", 24],
    [20,182, "龍と少女とデコヒーレンス†", "_decohel", "龍と<br>少女†", "A", 25],
    [20,183, "ΕΛΠΙΣ", "_elpis", "ΕΛΠΙΣ", "A", 26],
    [20,184, "狂イ咲ケ焔ノ華", "_kuruizk", "狂咲<br>焔華", "A", 27],
    [20,185, "キャトられe&恋はモ～モク", "_kyatora", "キャト<br>られ", "A", 28],
    [20,186, "†渚の小悪魔ラヴリィ～レイディオ†(IIDX EDIT)", "_nagisa", "渚<br>IIDX", "A", 29],
    [20,187, "音楽", "_ongaku", "音楽", "A", 30],
    [20,188, "シュレーディンガーの猫", "_schrcat", "シュレ<br>猫", "A", 31],
    [20,189, "即席！脳直★ミュージックシステム", "_sokseki", "即席<br>脳直", "A", 32],
    [20,190, "たまゆら", "_tamayra", "たま<br>ゆら", "A", 33],
    [20,191, "仮想空間の旅人たち†", "_travell", "仮想<br>空間†", "A", 34],
    [20,192, "トリカゴノ鳳凰", "_trikago", "トリ<br>カゴ", "A", 35],
    
    //SPADA
    [21,193, "Adularia", "adularia", "Adularia", "A", 0],
    [21,194, "Ancient Scapes", "ancients", "Ancient<br>Scapes", "A", 1],
    [21,195, "Ancient Scapes†LEGGENDARIA", "ancientl", "Ancient<br>Scapes†", "A", 2],
    [21,196, "BRAINSTORM", "brainstm", "BRAIN<br>STORM", "A", 3],
    [21,197, "Close the World feat.a☆ru", "closewld", "Close<br>World", "A", 4],
    [21,198, "Close the World feat.a☆ru†LEGGENDARIA", "closewdl", "Close<br>World†", "A", 5],
    [21,199, "DARK LEGACY", "darklgcy", "DARK<br>LEGACY", "A", 6],
    [21,200, "Elektrick U-Phoria", "euphoria", "U-<br>Phoria", "A", 7],
    [21,201, "Feel The Beat†LEGGENDARIA", "feelbetl", "Feel<br>Beat†", "A", 8],
    [21,202, "I will be back-オレは帰ってきた-", "iwilback", "I will<br>back", "A", 9],
    [21,203, "Idola", "idola", "Idora", "A", 10],
    [21,204, "Immortal", "immortal", "Im<br>mortal", "A", 11],
    [21,205, "INSOMNIA", "insomnia", "INSOM<br>NIA", "A", 12],
    [21,206, "invoker", "invoker", "invoker", "A", 13],
    [21,207, "invoker†LEGGENDARIA", "invokerl", "invoker<br>†", "A", 14],
    [21,208, "KAISER PHOENIX†", "kaiserpl", "KAISER<br>†", "A", 15],
    [21,209, "Last Dance", "lstdance", "Last<br>DANCE", "A", 16],
    [21,210, "PUNISHER", "punisher", "PUNI<br>SHER", "A", 17],
    [21,211, "ra'am", "raam", "ra'am", "A", 18],
    [21,212, "rainbow guitar weeps", "rbguitar", "rg<br>weeps", "A", 19],
    [21,213, "RIZING YOU UP", "rizingup", "RIZING<br>YOU UP", "A", 20],
    [21,214, "Sigmund", "sigmund", "Sig<br>mund", "A", 21],
    [21,215, "Sigmund†LEGGENDARIA", "sigmundl", "Sig<br>mund†", "A", 22],
    [21,216, "Unicorn tail", "unicorn", "Uni<br>corn", "A", 23],
    [21,217, "Verflucht", "verflcht", "Ver<br>flucht", "A", 24],
    [21,218, "Verflucht†LEGGENDARIA", "verflchl", "Ver<br>flucht†", "A", 25],
    [21,219, "VOX UP", "voxup_sp", "VOX<br>UP", "A", 26],
    [21,220, "バンブーソード・ガール", "_bamboos", "バン<br>ブー", "A", 27],
    [21,221, "煉獄のエルフェリア", "_elefthe", "煉獄", "A", 28],
    [21,222, "疾風迅雷", "_ltspeed", "疾風<br>迅雷", "A", 29],
    [21,223, "疾風迅雷†LEGGENDARIA", "_ltspedl", "疾風<br>迅雷†", "A", 30],
    [21,224, "IX", "_nine_ix", "IX", "A", 31],
    [21,225, "旋律のドグマ～Miserables～", "_s_dogma", "旋律<br>ドグマ", "A", 32],
    [21,226, "轟け！恋のビーンボール！！", "_todorok", "轟け", "A", 33],
    [21,227, "廿†", "_twentyl", "廿†", "A", 34],
    [21,228, "海神", "_wadatmi", "海神", "A", 35],
    
    //PENDUAL
    [22,229, "Beat Radiance†", "beatradl", "Beat<br>Rdnc†", "A", 0],
    [22,230, "Broken Sword", "brokensw", "Broken<br>Sword", "A", 1],
    [22,231, "CHRONO DIVER -NORNIR-†", "chrononl", "NORNIR†", "A", 2],
    [22,232, "Chrono Diver -PENDULUMs-", "chrono_p", "PEN<br>DULUMs", "A", 3],
    [22,233, "cinder", "cinder", "cinder", "A", 4],
    [22,234, "Cosmic Cat†", "cosmical", "Cosmic<br>Cat†", "A", 5],
    [22,235, "Despair of ELFERIA", "delferia", "Despair<br>ELFRA", "A", 6],
    [22,236, "EBONY & IVORY", "ebnyivry", "EBONY<br>&IVORY", "A", 7],
    [22,237, "EBONY & IVORY†", "ebnyivrl", "EBONY<br>&IVORY†", "A", 8],
    [22,238, "entelecheia", "entelech", "entele<br>cheia", "A", 9],
    [22,239, "fallen leaves -IIDX edition-", "faleaves", "fallen<br>leaves", "A", 10],
    [22,240, "FANTASTIC THREE", "fanthree", "FANTA<br>THREE", "A", 11],
    [22,241, "Flashes", "flashes", "Flashes", "A", 12],
    [22,242, "Gravigazer", "gravigzr", "Gravi<br>gazaer", "A", 13],
    [22,243, "Invitation from Mr.C", "invi_mrc", "Invi<br>Mr.C", "A", 14],
    [22,244, "Night sky", "nightsky", "Night<br>sky", "A", 15],
    [22,245, "Rave*it!! Rave*it!!", "rave_it", "Rave<br>*it!!", "A", 16],
    [22,246, "Reflux", "reflux", "Refulx", "A", 17],
    [22,247, "Say YEEEAHH", "say_yeah", "Say<br>YEEEAH", "A", 18],
    [22,248, "Shooting Fireball", "shootfir", "Shoot<br>Fireball", "A", 19],
    [22,249, "Sounds Of Summer", "sosummer", "Sousds<br>Summr", "A", 20],
    [22,250, "SpaceLand☆TOYBOX", "sptoybox", "Space<br>TOYBOX","A", 21],
    [22,251, "The Least 100sec", "t_100sec", "Least<br>100sec", "A", 22],
    [22,252, "TIEFSEE", "tiefsee", "TIEF<br>SEE", "A", 23],
    [22,253, "TOXIC VIBRATION", "toxicvib", "TOXIC<br>VIBRA", "A", 24],
    [22,254, "We're so Happy(P*Light Remix) IIDX ver.", "wesoh_pl", "We're<br>Happy", "A", 25],
    [22,255, "ZZ", "zz_amuro", "ZZ", "A", 26],
    [22,256, "表裏一体!?怪盗いいんちょの悩みe&", "_hyouri", "表裏<br>怪盗", "A", 27],
    [22,257, "共鳴遊戯の華", "_kyoumei", "共鳴<br>遊戯", "A", 28],
    [22,258, "リリーゼと炎龍レーヴァテイン", "_lilieze", "リリ<br>ーゼ", "A", 29],
    [22,259, "夏色DIARY - L.E.D.-G STYLE MIX -", "_ntdiary", "夏色<br>DIARY", "A", 30],
    [22,260, "鬼天", "_onigami", "鬼天", "A", 31],
    [22,261, "千年ノ理", "_sennen", "千年<br>ノ理", "A", 32],
    [22,262, "少年は空を辿る", "_soratad", "少年<br>空辿", "A", 33],
    [22,263, "それは花火のような恋", "_shanabi", "花火<br>恋", "A", 34],
    [22,264, "超青少年ノ為ノ超多幸ナ超古典的超舞曲", "_verycls", "超<br>青少年", "A", 35],
    [22,265, "超青少年ノ為ノ超多幸ナ超古典的超舞曲†", "_verycsl", "超<br>青少年†", "A", 36],
    [22,266, "Ｘ↑Ｘ↓", "_x7xl", "X↑X↓", "A", 37],
    
    //copula
    [23,267, "AO-1", "ao_1", "AO-1", "A", 0],
    [23,268, "Battle Train-IIDX Edition-", "btltrain", "Battle<br>Train", "A", 1],
    [23,269, "Blue Spring Express", "blspring", "Blue<br>Spring", "A", 2],
    [23,270, "chaos eater-IIDX edition-", "chaoseat", "chaos<br>eater", "A", 3],
    [23,271, "CODE1 revision1.0.1", "code_1", "CODE1", "A", 4],
    [23,272, "Devil's Gear", "dvlsgear", "Devils<br>Gear", "A", 5],
    [23,273, "DIAMOND CROSSING", "diacross", "DAMND<br>CRSSNG", "A", 6],
    [23,274, "Dynamite", "dynausao", "Dyna<br>mite", "A", 7],
    [23,275, "GET READY!!", "getready", "GET<br>READY", "A", 8],
    [23,276, "GOBBLE", "gobblecp", "GOBBLE", "H", 9],
    [23,277, "Godspeed", "godspeed", "God<br>speed", "A", 10],
    [23,278, "Grand Chariot", "gchariot", "Grnd<br>Chrot", "A", 11],
    [23,279, "Highcharge Divolt", "hicharge", "High<br>Divolt", "A", 12],
    [23,280, "M4K3 1T B0UNC3", "m4k3_1t", "M4K3<br>B0UNC3", "A", 13],
    [23,281, "Nightmare before oversleep", "nightbfr", "Night<br>mare", "A", 14],
    [23,282, "NINJA IS DEAD IIDX ver.", "ninja_dd", "NINJA<br>DEAD", "A", 15],
    [23,283, "NZM", "nzm", "NZM", "A", 16],
    [23,284, "POSSESSION", "posesion", "POSSE<br>SSION", "A", 17],
    [23,285, "refrain", "refrain", "ref<br>rain", "A", 18],
    [23,286, "STARLIGHT DANCEHALL†", "starltdl", "STAR<br>DANCE†", "A", 19],
    [23,287, "StrayedCatz", "strycatz", "Stryd<br>Catz", "A", 20],
    [23,288, "Triple Counter", "tripleco", "Triple<br>Counter", "A", 21],
    //Welcome† 22
    [23,289, "X", "x_amuro", "X", "A", 23],
    [23,290, "199024club -ReBounceKiller-", "199024cl", "199024<br>club", "A", 24],
    [23,291, "紫陽花 -AZISAI-", "_azisai", "紫陽花", "A", 25],
    [23,292, "駅猫のワルツ", "_ekineko", "駅猫<br>ワルツ", "A", 26],
    [23,293, "炸裂！イェーガー電光チョップ!!(JAEGER FINAL ATTACK)", "_jfinala", "炸裂<br>電光", "A", 27],
    [23,294, "めいさいアイドル☆あいむちゃん♪", "_meisai", "めい<br>さい", "A", 28],
    [23,295, "灼熱 Pt.2 Long Train Running", "_syaku_2", "灼熱<br>Pt.2", "A", 29],
    [23,296, "真 地獄超特急 -HELL or HELL-", "_sjigoku", "地獄<br>超特急", "A", 30],
    
    //SINOBUZ
    [24,297, "Amazing Mirage†", "amazingl", "Amzng<br>Mirgge†", "A", 0],
    [24,298, "Apocalypse", "apocalrf", "Apoca<br>lypse", "A", 1],
    [24,299, "BabeL ～Grand Story～", "babel_gs", "BabeL", "A", 2],
    [24,300, "Caterpillar", "caterpil", "Cater<br>pillar", "A", 3],
    [24,301, "DISAPPEAR feat. koyomin", "disapear", "DIS<br>APPERA", "A", 4],
    [24,302, "DORNWALD ～Junge～", "dornwald", "DORN<br>WALD", "A", 5],
    [24,303, "ECHIDNA", "echidna", "ECHI<br>DNA", "A", 6],
    [24,304, "FUZIN RIZIN", "fuznrizn", "FUZIN<br>RIZIN", "A", 7],
    [24,305, "Go Ahead!!", "goahead", "Go<br>Ahead", "A", 8],
    [24,306, "GuNGNiR", "gungnir", "GuN<br>GNiR", "A", 9],
    [24,307, "HADES", "hadesmnk", "HADES", "A", 10],
    [24,308, "Mare Nectaris", "marenect", "Nec<br>taris", "A", 11],
    [24,309, "OTENAMI Hurricane", "otenamih", "OTE<br>NANI", "A", 12],
    [24,310, "Quakes", "quakes", "Quakes", "A", 13],
    [24,311, "RAIN", "rain", "RAIN", "A", 14],
    [24,312, "Rave Cannon", "rvcannon", "Rave<br>Cannon", "A", 15],
    [24,313, "SEQUENCE CAT", "sequence", "SEQNCE<br>CAT", "A", 16],
    [24,314, "Shoot'Em All", "shoot_em", "Shoot<br>EmAll", "A", 17],
    [24,315, "Sky High", "skyhigh", "Sky<br>High", "A", 18],
    [24,316, "Snakey Kung-fu", "snkungfu", "Snakey", "A", 19],
    [24,317, "Summerlights(IIDX Edition)", "summerlt", "Smmr<br>lights", "A", 20],
    [24,318, "Super Rush", "superush", "Super<br>Rush", "A", 21],
    [24,319, "TOGAKUSHI", "togakusi", "TOGA<br>KUSHI", "A", 22],
    [24,320, "刃図羅", "_buzra", "刃図羅", "A", 23],
    [24,321, "童話回廊", "_dowakai", "童話<br>回廊", "A", 24],
    [24,322, "焔極OVERKILL", "_enkyoku", "焔極", "A", 25],
    [24,323, "焱影", "_hikage", "焱影", "A", 26],
    [24,324, "イザナミノナゲキ", "_izanami", "イザ<br>ナミ", "A", 27],
    [24,325, "九尾狐夜行", "_kyubi", "九尾<br>狐夜行", "A", 28],
    [24,326, "〆", "_shime", "〆", "A", 29],
    [24,327, "津軽雪", "_tgryuki", "津軽<br>雪", "A", 30],
    
    //CANNON BALLERS
    [25,328, "AA -rebuild-", "aa_rebld", "AA<br>rebld", "A", 0],
    [25,329, "ANCHOR", "anchor", "ANC<br>HOR", "A", 1],
    [25,330, "Antigravity", "antigrav", "Anti<br>grvity", "A", 2],
    [25,331, "Arca", "arca", "Arca", "A", 3],
    [25,332, "Boomy and The Boost", "booboost", "Boomy<br>Boost", "A", 4],
    [25,333, "DEADHEAT", "deadheat", "DEAD<br>HEAT", "A", 5],
    [25,334, "DEATH†ZIGOQ～怒りの高速爆走野郎～", "dthzigoq", "DEATH<br>ZIGOQ", "A", 6],
    [25,335, "DropZ-Line-", "dropz_ln", "DropZ<br>Line", "A", 7],
    [25,336, "Eine Haube ～聖地の果てにあるもの～", "einehaub", "Eine<br>Haube", "A", 8],
    [25,337, "EMERALDAS", "emeralds", "EMERAL<br>DAS", "A", 9],
    [25,338, "encounter", "encountr", "encou<br>nter", "A", 10],
    [25,339, "HYPE THE CORE", "hypecore", "HYPE<br>CORE", "A", 11],
    [25,340, "Illusionary Waterlily", "illuswtr", "Illusi<br>onary", "A", 12],
    [25,341, "Initiation", "initiatn", "Initi<br>ation", "A", 13],
    [25,342, "Life Is A Game ft.DD ナカタ Metal", "lifegame", "Life<br>ナカタ", "A", 14],
    [25,343, "Mira", "mira", "Mira", "A", 15],
    [25,344, "NITROUS CANNON", "nitrous", "NITO<br>ROUS", "A", 16],
    [25,345, "Papilio ulysses", "papilio", "Papi<br>lio", "A", 17],
    [25,346, "Persephone", "prsphone", "Perse<br>phone", "A", 18],
    [25,347, "Rampage", "rampage", "Ram<br>page", "A", 19],
    [25,348, "Raspberry Railgun", "rrailgun", "Rasp<br>berry", "A", 20],
    [25,349, "Slipstream", "slipstrm", "Slip<br>stream", "A", 21],
    [25,350, "The Chase", "thechase", "The<br>Chase", "A", 22],
    [25,351, "Usual Days-remix", "usualday", "Usual<br>Days", "A", 23],
    [25,352, "VOX RUSH", "vox_rush", "VOX<br>RUSH", "A", 24],
    [25,353, "Xperanza", "xperanza", "Xpe<br>ranza", "A", 25],
    [25,354, "255", "255_255", "255", "A", 26],
    [25,355, "シムルグの目醒め", "_simurgh", "シム<br>ルグ", "A", 27],
    [25,356, "神謳 -RESONANCE-", "_resonan", "神謳", "A", 28],
    [25,357, "東京神話", "_tksinwa", "東京<br>神話", "A", 29],
    
    //Rootage 投票戦楽曲のVer内INDEX未編集
    //Afterimage d'automne 0
    //Carmina 1
    //Carry Me Away 2
    [26,358, "Catch Our Fire!", "catchfir", "Catch<br>Fire!", "A", 3],
    [26,359, "dAuntl3ss", "dauntl3s", "dAunt<br>l3ss", "A", 4],
    [26,360, "Dr.Chemical & Killing Machine", "dr_chemi", "Dr.C<br>Killing", "A", 5],
    [26,361, "Drastic Dramatic", "drasticd", "Drast<br>Drama", "A", 6],
    //EVANESCENT 7
    //GENE 8
    [26,362, "GIGA THRASH", "gigathra", "GIGA<br>THRSH", "A", 9],
    //GO OVER WITH GLARE -ROOTAGE 26- 10
    //HARD BRAIN 11
    [26,363, "KILL EACH OTHER", "killeach", "KILL<br>EACH", "A", 12],
    [26,364, "L.F.O", "lfo", "L.F.O", "A", 13],
    [26,365, "Level One", "levelone", "Level<br>One", "A", 14],
    [26,366, "LOST TECHNOLOGIE", "losttech", "LOST<br>TCNNLG", "A", 15],
    //Mächö Mönky 16
    //Necroxis Girl 17
    //Night! Night! Night! 18
    //ONIGOROSHI 19
    [26,367, "Painful Fate", "painfate", "Pain<br>Fate", "A", 20],
    //Please Welcome Mr.C 21
    [26,368, "Red. by Jack Trance", "red_jack", "Red<br>Jack", "A", 22],
    //ruin of opals 23
    [26,369, "SIGMA", "sigma", "SIGMA", "A", 24],
    [26,370, "THE DAY OF JUBILATIONS", "t_jubila", "JUBI<br>LATION", "A", 25],
    [26,371, "The Rebellion of Sequencer", "t_rebeli", "Rbll<br>Sqcr", "A", 26],
    //Trill auf G 27
    //Unbelief 28
    //Visterhv 29
    //voltississimo 30
    [26,372, "Xlo", "xlo", "Xlo", "A", 31],
    //お菓子の王国 32
    //抱きしめてモナムール 33
    //Χ-DEN 34
    [26,373, "金野火織の金色提言", "_k_hiori", "金野<br>金色", "A", 35],
    //最小三倍完全数 36
    //泰東ノ翠霞 37
    
    


    //追加対応分
    //2019/04/22追加
    [14,374, "GRID KNIGHT†", "gknightl", "GRID<br>KNIGHT†", "A", 2],
    [18,375, "New Castle Legions", "nwcasl26", "New<br>Castle", "A", 4],
    [26,376, "Carmina", "carmina", "Carmina", "A", 0],
    [26,377, "Carry Me Away", "carryme", "Carry<br>MeAway", "A", 2],
    [26,378, "EVANESCENT", "evanscnt", "EVANESCENT", "A", 7],
    [26,379, "Mächö Mönky", "machomnk", "Mächö", "A", 16],
    [26,380, "Necroxis Girl", "necroxis", "Necro<br>Girl", "A", 17],
    [26,381, "Unbelief", "unbelief", "Un<br>belief", "A", 28],
    [26,382, "抱きしめてモナムール", "_dakismt", "モナ<br>ムール", "A", 33],
    [26,383, "Χ-DEN", "_kai_den", "Χ-DEN", "A", 34],
    
    //2019/07/12追加
    [16,384, "B4U(BEMANI FOR YOU MIX)†", "bemani4l", "B4U<br>(MIX)†", "A", 0],
    [23,385, "Welcome†", "welcomel", "Wel<br>come†", "A", 22],
    [26,386, "HARD BRAIN", "hrdbrain", "HARD<br>BRAIN", "A", 11],
    [26,387, "ONIGOROSHI", "onigoros", "ONI<br>GRSH", "A", 19],
    [26,388, "ruin of opals", "ruinopal", "ruin<br>opals", "A", 23],
    [26,389, "Visterhv", "visterhv", "Vister<br>hv", "A", 29],
    
    [15,390, "Wanna Party?†", "wnpartyl", "Wanna<br>Party†", "A", 15],
    [17,391, "AIR RAID FROM THA UNDAGROUND†", "airraidl", "AIR<br>RAID†", "A", 0],
    [26,392, "GENE", "gene", "GENE", "A", 8],
    
    //2019/08/09追加
    [26,393, "Night! Night! Night!", "nightx3", "Night!", "A", 18],
    [26,394, "Please Welcome Mr.C", "pls_mr_c", "PlWe<br>Mr.C", "A", 21],
    [26,395, "お菓子の王国", "_candykd", "お菓子", "A", 32],
    [26,396, "泰東ノ翠霞", "_taito26", "泰東<br>翠霞", "A", 37],
    
    [12,397, "Twelfth Style†", "twelfthl", "Twelfth<br>Style†", "A", 4],
    [26,398, "GO OVER WITH GLARE -ROOTAGE 26-", "go_glare", "GLARE<br>26", "A", 10],
    //2019/09/16追加
    [26,399, "Afterimage d'automne", "afterimg", "After<br>autom", "A", 0],
    [26,400, "Trill auf G", "trill_g", "Trill<br>auf G", "A", 27],
    [26,401, "voltississimo", "voltissi", "volti<br>ssissi", "A", 30],
    [26,402, "最小三倍完全数", "_saisho3", "最小<br>三倍", "A", 36]
    
    
];  //テーブルの最後尾と一つ前は要チェック

VER_NAME_INDEX = 2;

ver_table = [
    [2, 0, "Substream"],
    [3, 1, "3rd style"],
    [4, 2, "4th style"],
    [5, 3, "5th style"],
    [6, 4, "6th style"],
    [7, 5, "7th style"],
    [8, 6, "8th style"],
    [9, 7, "9th style"],
    [10, 8, "10th style"],
    [11, 9, "IIDX RED"],
    [12, 10, "HAPPY SKY"],
    [13, 11, "Distorted"],
    [14, 12, "GOLD"],
    [15, 13, "DJ TROOPERS"],
    [16, 14, "EMPRESS"],
    [17, 15, "SIRIUS"],
    [18, 16, "Resort Anthem"],
    [19, 17, "Lincle"],
    [20, 18, "tricolo"],
    [21, 19, "SPADA"],
    [22, 20, "PENDUAL"],
    [23, 21, "copula"],
    [24, 22, "SINOBUZ"],
    [25, 23, "CANNON BALLERS"],
    [26, 24, "Rootage"]
    //[27, 25, "HEROIC VERTH"]
];