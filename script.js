// ====== СЦЕНАРИЙ ======
const story = [
  // ==========================================
  // СЦЕНА 1
  // ==========================================
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Поздняя ночь.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "За окном льёт дождь — злой, хлёсткий, бьющий в стекло сотнями мелких кулачков.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Ветер воет в щелях старого дерева, и кажется, что кто-то скребётся снаружи, пытаясь попасть внутрь.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Комната на бедном постоялом дворе тесная, как гроб.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Огонь давно погас от сквозняка, и холод пробирается под одежду.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Но хуже всего — запах:", inline: false },
    { text: "кровь, густая и ржавая,", inline: true },
    { text: "дешёвый табак вперемешку с гниющим деревом", inline: true },
    { text: "и сырость, которая будто въелась в стены.", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-black.png', right: null, speaker: null, paragraphs: [
    { text: "Одна фигура сидит на краю кровати, сжимая бок.", inline: false },
    { text: "Рана глубокая, рваная, кровь всё ещё сочится, пачкая простыни.", inline: true },
    { text: "Ткань пропиталась насквозь — тяжёлая, липкая. Посмотрев на неё, становится понятно: если не остановить кровь сейчас, к утру он просто не проснётся.", inline: true },
    { text: "Фигуру знобит — мелкая, противная дрожь пробирает до костей, и он стискивает зубы, чтобы они не стучали.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-black.png', right: null, speaker: null, paragraphs: [
    { text: "Пальцы на левой руке немеют.", inline: true },
    { text: "Он смотрит на них и не может понять, шевелятся ли они ещё:", inline: false },
    { text: "пробует сжать руку в кулак, но она не слушается.", inline: true },
    { text: "Пальцы просто висят, как чужие, и потому фигура лишь медленно выдыхает сквозь зубы.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-black.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "Другой силуэт стоит у окна, спиной ко всему. Его пальцы вцепились в подоконник, побелели в костяшках.", inline: false },
    { text: "В комнате висит тишина, которую никто не хочет прерывать, кроме разящей молнии снаружи.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-black.png', right: 'images/desmond-black.png', speaker: null, sound: 'steps', paragraphs: [
    { text: "За дверью, в коридоре, слышатся тяжёлые, размеренные шаги, — оба силуэта замирают.", inline: false },
    { text: "Та, что у окна, медленно поворачивает голову к двери и поднимает руку в готовности.", inline: false },
    { text: "Раненая же перестаёт дышать, прислушиваясь.", inline: false },
    { text: "Шаги приближаются... тяжело, вязко, будто кто-то тащит за собой груз.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-black.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "...и проходят мимо, стихая в конце коридора.", inline: false },
    { text: "Стоящая фигура беззвучно выдыхает, расслабив руку.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-black.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "Наконец, человек у окна говорит — тихо, не оборачиваясь, глядя на дождь.", inline: false },
    { text: "— Ты знал, что там ловушка.", inline: false },
    { text: "Я сказал тебе.", inline: true },
    { text: "Я, блять, сказал тебе.", inline: true },
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "Раненый морщится, у него пересохло во рту, язык липнет к нёбу.", inline: false },
    { text: "Он сглатывает — это получается с трудом, — горло саднит, будто он наглотался песка.", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "— Знал.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-black.png', speaker: null, paragraphs: [
    { text: "Человек у окна медленно поворачивается.", inline: false },
    { text: "Его голос остаётся ровным — и от этого хуже:", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-angry.png', speaker: 'desmond', paragraphs: [
    { text: "— И всё равно пошёл.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-angry.png', speaker: 'yusen', paragraphs: [
    { text: "— Он бы ушёл.", inline: false },
    { text: "Голос раненого звучит глухо, будто через силу.", inline: false },
    { text: "— Ты видел, какой у него был план. Если бы я не задержал его, он бы...", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-angry.png', speaker: 'desmond', paragraphs: [
    { text: "— Что?", inline: false },
    { text: "Перебивает стоящий у окна, делая шаг вперёд. Половица скрипит под его сапогом.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'desmond', shake: true, paragraphs: [
    { text: "— Сбежал?", inline: false },
    { text: "Убил нас?", inline: true },
    { text: "Или ты просто не смог удержать свои сабли в ножнах, когда запахло кровью?", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: null, paragraphs: [
    { text: "Раненый вскидывает голову.", inline: false },
    { text: "Его рука на боку сжимается — пальцы впиваются в кожу вокруг раны, и по простыне расползается свежее пятно.", inline: false },
    { text: "Он открывает рот, чтобы ответить, но внезапно кашляет — коротко, сухо, и на губах остаётся солоноватый привкус крови... тут же сплевывает на пол и вытирает рот тыльной стороной ладони.", inline: false },
    { text: "На ней остаётся багровый мазок.", inline: false },
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'yusen', paragraphs: [
    { text: "— Ты сейчас серьёзно?", inline: false },
    { text: "Голос хриплый, но злой. В нём прорезается сталь, которой не было мгновением раньше.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'yusen', paragraphs: [
    { text: "— Я прикрывал твою спину, пока ты плевал заклинаниями, Дезмонд.", inline: false },
    { text: "Или ты забыл, кто вытащил тебя из-под завала?", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "Человек у окна молчит.", inline: false },
    { text: "Его челюсти сжаты так, что желваки гуляют под кожей.", inline: true }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Он делает шаг вперёд — и опускается на колени перед кроватью.", inline: false },
    { text: "Пальцы касаются раны — грубо, без предупреждения. Раненый дёргается, сдерживая стон, и его рука непроизвольно тянется к запястью Дезмонда, сжимает его.", inline: false },
    { text: "Хватка у Дезмонда твёрдая.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "— Не дергайся.", inline: false },
    { text: "В голосе целителя слышится странная смесь угрозы и заботы.", inline: false },
    { text: "— Или мне привязать тебя к кровати?", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Раненый медленно поднимает руку, кладёт её на затылок Дезмонда и притягивает ближе — так, что их лбы почти соприкасаются.", inline: false },
    { text: "Пальцы на затылке Дезмонда невольно дрожат, комкают короткие волосы, перебирают их, пока грудь второго пропускает новый виток сбитого дыхания.", inline: false },
    { text: "От него пахнет дождём, железом и... стерильностью. Всем тем, что всегда сбивает Юсэна с толку.", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: 'images/yusen-hurt.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— Попробуй.", inline: false }
  ]},

  // --- НОВЫЙ ЭКРАН С ИЛЛЮСТРАЦИЕЙ (CG) ---
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sfx: 'meat', paragraphs: [
    { text: "Целитель не отстраняется, но его пальцы прилегают к ранам и начинают светиться тусклым алым… только он не спешит, а заставляет раненого чувствовать каждую секунду.", inline: false }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sfx: 'meat', paragraphs: [
    { text: "Свет идёт из-под кожи — не снаружи, а будто пробивается сквозь неё, как угли под пеплом.", inline: false }  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sfx: 'meat', paragraphs: [
    { text: "Пальцы Дезмонда холодные, но там, где они касаются, кожа горит. ", inline: false },
    { text: "Не жжёт — тянет, как будто кто-то схватил его изнутри и начал стягивать края раны грубыми нитками. ", inline: true }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sound: 'heal', paragraphs: [
    { text: "...и Юсэн всё чувствует", inline: false, sfx: 'meat' }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sound: 'heal', paragraphs: [
    { text: "Как плоть срастается вновь, как она расходится, где нужно, и нарастает слоями, собираясь в новое полотно, как кожа тянется и обволакивает рану, скрывая. ", inline: false },
    { text: "Влажно, тягуче, по-живому. Как будто кто-то месит сырое мясо прямо у него под рёбрами.", inline: false }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sound: 'heal', paragraphs: [
    { text: "Его мутит, и он отводит взгляд.", inline: false },
    { text: "Только легче не становится.", inline: false }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, sound: 'heal', paragraphs: [
    { text: "Карномант невозмутим в своей работе.", inline: false },
    { text: "Его губы беззвучно шевелятся — то ли молитва, то ли заклинание, но ассасин не разбирает слов.", inline: false },
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [ 
    { text: "Юсэн просто держится за его запястье и считает секунды между ударами собственного сердца.", inline: false },
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Голос жреца падает до шёпота почти нежного.", inline: false }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: 'desmond', cgMode: true, paragraphs: [
    { text: "— Я не могу тебя терять, Юсэн. Понимаешь?", inline: false },
    { text: "Не потому что ты — ценный ресурс ордена, и не потому что без тебя задание провалится. А потому что...", inline: true }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Губы дрогнули, когда жрец замолк.", inline: false }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "— …если это случится, я найду тебя.", inline: false },
    { text: "Где бы ты ни был.", inline: true },
    { text: "В какой бы форме ни возродился.", inline: true },
    { text: "И ты пожалеешь, что оставил меня.", inline: true }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: 'yusen', cgMode: true, paragraphs: [
    { text: "Раненый медленно выдыхает — и это почти смешок.", inline: false },
    { text: "Но в этом смехе слышится не только боль, но и облегчение, будто сказанное — именно те слова, что должны были прозвучать.", inline: true }
  ]},
  { bg: 'images/scene-1.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "— Взаимно, жрец. Взаимно.", inline: false }
  ]},

  // --- ВОЗВРАЩАЕМСЯ К ОБЫЧНОМУ ФОНУ И СПРАЙТАМ ---
  { bg: 'images/bg-room.png', left: null, right: null, cgMode:true, speaker: null, paragraphs: [
    { text: "Целитель отстраняется, позволяя ладоням остыть от магии плоти.", inline: false },
    { text: "Его руки дрожат — но не от злости… впрочем, когда он это признает, злость всё-таки подступает к нему. Однако он возвращается к работе.", inline: false }
  ]},

  // ==========================================
  // ПЕРЕХОД
  // ==========================================
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode:true, paragraphs: [
    { text: "Ночь близится к концу. Дождь стихает, оставляя за собой лишь сырость и тишину. ", inline: false }
  ]},
  { bg: 'images/bg-room.png', left: null, right: null, speaker: null, cgMode:true, paragraphs: [
    { text: "Юсэн отрывает руку от бока — там больше нет раны, а только тонкий белый шрам, который останется с ним до возвращения на Илизмагорти.", inline: false },
    { text: "Значит, пора двигаться дальше.", inline: false }
  ]},

  // ==========================================
  // СЦЕНА 2
  // ==========================================
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, transition: 'zoom', cgMode: true, paragraphs: [
    { text: "Узкий коридор подземелья был неприветлив ни к своим хозяевам, ни к ищущим их.", inline: false },
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [    
    { text: "Зажжённые неизвестным факелы на стенах отбрасывают длинные, дрожащие тени.", inline: false },
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Огонь шипит, пожирая воздух, и от этого дышать становится ещё труднее.", inline: false },
    { text: "Над головами висит тяжёлая смесь запахов: горелой смолы, мокрого камня и сладковатого запаха тления, который тянется откуда-то из глубины.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Эхо шагов отражается от сырых каменных стен, и кажется, что за спиной кто-то идёт, хотя там только темнота.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Где-то позади остались тела культистов, пытавшихся остановить делающих свою работу ассасинов.", inline: false },
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Но те были слишком слабы, а другие — достаточно сильны, чтобы грязным ударом или мимолётным заклинанием оборвать жизни помех на пути к цели.", inline: false },
      ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Кровь на их клинках ещё не успела высохнуть, а на подошвах сапог она оставляла липкие следы, которые тянулись за ними, как нить Ариадны.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Сейчас важно одно: Его враг ещё не повержен, и это нужно исправить в кратчайший срок.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "Юсэн бесшумно шагает впереди, сливаясь с тенями; Дезмонд следует за ним, с большим трудом приглушая свой увесистый шаг.", inline: false },
    { text: "Расстояние между ними кажется больше, чем есть на самом деле.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "— Ты слишком близко к стенам.", inline: false },
    { text: "Тихо говорит жрец, но его голос всё равно расходится эхом по стенам коридора.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— А ты слишком громко дышишь.", inline: false },
    { text: "Не оборачиваясь, отвечает ассасин с раздражением, которое даже не пытается скрыть.", inline: false },
    { text: "— Хочешь, чтобы нас услышали?", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "— Хочу, чтобы ты не подставился под первый же удар.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— Я не подставляюсь.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Дезмонд ускоряется, чтобы нагнать любовника, — и теперь они идут плечом к плечу.", inline: false },
    { text: "Его локоть задевает чужой локоть; он не отстраняется.", inline: false },
    { text: "Юсэн чувствует тепло чужого плеча даже сквозь плотную ткань и металл доспехов. И, вопреки всему, это тепло раздражает его сильнее, чем должен бы.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Шаги ассасинов сливаются в шум — тяжёлый, хаотичный и… будто каждый пытается обогнать другого.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "— Ты работаешь так, будто тебе плевать, выйдешь ли ты отсюда живым.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— А ты так, будто тебе плевать, выйду ли я живым вместе с тобой.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: null, shake: true, stopSteps: true, paragraphs: [
    { text: "Дезмонд резко останавливается.", inline: false },
    { text: "Его сапог скрежещет по камню; рука дёргается к поясу привычным рывком. На секунду кажется, будто он сейчас ударит, не предупредив даже себя самого.", inline: false },
    { text: "Юсэн делает ещё два шага и замирает, будто наткнувшись на невидимую стену.", inline: false },
    { text: "Поворачивается всем телом, и в коридоре становится тихо — звучит лишь далёкое капанье воды где-то в глубине.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'desmond', stopSteps: true, paragraphs: [
    { text: "— Что ты сказал?", inline: false },
    { text: "В голосе Дезмонда мелькнула сталь, острая, как сабли богомола.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'yusen', stopSteps: true, paragraphs: [
    { text: "— То, что слышал.", inline: false },
    { text: "Юсэн держит руки свободно, вдоль тела, — ни одна не тянется к сабле, — а после складывает их на груди.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'yusen', stopSteps: true, paragraphs: [
    { text: "— Ты хочешь, чтобы я был осторожнее? Тогда перестань смотреть на меня так, будто уже хоронишь.", inline: false }
  ]},
  
  // --- НОВЫЙ ЭКРАН С ИЛЛЮСТРАЦИЕЙ ---
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [
    { text: "Шаг — всего один шаг — делает Дезмонд и замирает на месте.", inline: false },
    { text: "Но в этом шаге больше угрозы, чем в каждом слове, что бы он мог сказать.", inline: true },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [ 
    { text: "Его голос становится ниже, тише, и от этого — страшнее.", inline: false },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [ 
    { text: "— Я смотрю на тебя так, потому что знаю, чем это заканчивается.", inline: false },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [ 
    { text: "— Чем?", inline: false },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [
    { text: "— Твоей кровью не на моих руках.", inline: false }
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [
    { text: "Дезмонд не отступает. Его лицо кажется высеченным из камня, но в синих глазах — пламя.", inline: false },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [
    { text: "То самое, что разгорается, когда они делят постель.", inline: false },
    { text: "Или делят битву, где враги друг другу, а не третьему.", inline: true },
  ]},
  { bg: 'images/scene-2.png', left: null, right: null, speaker: null, cgMode: true, stopSteps: true, music: 'tension', paragraphs: [
    { text: "Неподконтрольное. Слишком человеческое для того, кто давно перестал им быть; слишком зависимое от биения живого сердца — сердца, которого в этом человеке, кажется, уже нет.", inline: false }
  ]},
  
  // --- ВОЗВРАЩАЕМ СЦЕНУ (Спрайты на месте, окно нормальное) ---
  { bg: 'images/bg-corridor.png', left: 'images/yusen-calm.png', right: 'images/desmond-vulnerable.png', transition: true, speaker: 'yusen', stopSteps: true, music: 'tension', paragraphs: [
    { text: "Юсэн долго молчит, смотрит на Дезмонда так, будто видит его впервые… и медленно отводит взгляд.", inline: false },
    { text: "Его рука опускается на рукоять сабли — не сжимает, просто лежит.", inline: false },
    { text: "Мгновения спустя его губы выдыхают холод.", inline: false },
    { text: "— Тогда, может, тебе стоит найти кого-то, кто будет осторожнее.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, stopSteps: true, music: 'tension', paragraphs: [
    { text: "Жрец замирает в неподвижной стойке.", inline: false },
    { text: "Его челюсти сжаты так, что желваки гуляют под кожей.", inline: false },
    { text: "Он смотрит на Юсэна ещё секунду", inline: false },
    { text: ", две", inline: true },
    { text: ", три…", inline: true },
    { text: "Затем отворачивается и идёт дальше, не оборачиваясь. Его шаг теперь тяжелее — или это эхо.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, steps: 'desmond', music: 'tension', paragraphs: [
    { text: "Юсэн остаётся позади, окружённый прерываемой только шагами жреца, собственным дыханием и далёкими каплями воды тишиной.", inline: false },
    { text: "Его пальцы всё ещё лежат на рукояти сабли.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: 'desmond', paragraphs: [
    { text: "— Иди вперёд, ассасин.", inline: false },
    { text: "Звучит голос, которым жрец несёт службу Ачаекеку.", inline: false }
  ]},
  { bg: 'images/bg-corridor.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Перехватив сабли двумя руками, Юсэн снова вырывается вперёд их шеренги.", inline: false },
    { text: "Цель первостепенна, и она близко.", inline: false }
  ]},

  // ==========================================
  // ПЕРЕХОД
  // ==========================================
  { bg: 'images/bg-corridor.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Коридор заканчивается. Впереди — тяжёлые двери, за которыми ждёт последний зал.", inline: false }
  ]},

        // ==========================================
  // СЦЕНА 3
  // ==========================================
  { bg: 'images/bg-hall.png', left: null, right: null, speaker: null, cgMode: true, transition: 'flash', paragraphs: [
    { text: "Торжественный зал с высокими потолками только что принял последнее торжество — в честь гибели самопровозглашенных Многих Очей Богов.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [  
    { text: "Кровь захлестнула пол и стены хаотичными узорами.", inline: false },
    { text: "Она ещё не успела свернуться, собираясь в лужи, и под подошвами сапог растекалась тягучей, тёмной массой.", inline: true }
  ]},
  { bg: 'images/bg-hall.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [   
    { text: "Тело цели — окруженное верными слугами, уже остывающее, изувеченное до беспамятства мечом и магией — лежит в центре, раскинув руки, будто пыталось ухватиться за воздух в последний раз.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [   
    { text: "Факелы на стенах горят ровно, но их свет кажется тусклым, будто сам воздух пропитался смертью.", inline: false }
  ]},
  
  // --- ВОТ ЗДЕСЬ УБРАН CG-MODE, ЧТОБЫ ПОЯВИЛИСЬ ШИПЫ ---
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Два красных богомола стоят в нескольких футах друг от друга, отвернувшись.", inline: false },
    { text: "Оба ранены, оба тяжело дышат, и на обоих — чужая кровь, тёмная, уже подсохшая.", inline: false },
    { text: "Адреналин ещё гуляет по венам, и руки дрожат — не от усталости, а от того, что битва ещё не отпустила.", inline: false }
  ]}, 
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Пальцы сжимают рукояти сабель так крепко, что кожа на суставах натянулась, потрескалась, и кажется, что если разжать их сейчас — оружие просто упадёт на камень.", inline: false },
    { text: "Юсэн слышит собственное сердце чётче мыслей: оно бьётся где-то в горле, тяжело и часто, заглушая тишину.", inline: false }
  ]}, 
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Он смотрит на спину Дезмонда — широкую, затянутую в чёрный доспех, с багровыми бликами от факелов, — и кажется, что он стоит неподвижной статуей.", inline: false },
    { text: "Но ассасин знает, как тяжело вздымаются его плечи, как он пытается выровнять дыхание, чтобы никто не заметил, насколько ему больно.", inline: false }
  ]}, 
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: 'yusen', sound: 'fall', paragraphs: [
    { text: "Юсэн первым нарушает повисшую тишину.", inline: false },
    { text: "Он вытирает одну саблю о полу своего плаща, а другую, разломавшуюся в пылу сражения, бросает на пол — глухо, с металлическим звоном того, что осталось от лезвия у рукояти.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— Ты собираешься стоять здесь всю ночь?", inline: false },
    { text: "Хрипло обращается богомол за спину, покончив с саблями.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-calm.png', speaker: null, paragraphs: [
    { text: "Кажется, будто жрец не услышал вопроса, — так был неподвижен.", inline: false },
    { text: "Но опустошенный, растерянный — совсем не его — взгляд сказал больше, чем полагалось словам.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-calm.png', right: 'images/desmond-vulnerable.png', speaker: 'desmond', paragraphs: [
    { text: "— Ты сказал «найди кого-то, кто будет осторожнее».", inline: false },
    { text: "Больше это не рабочий голос жреца; он легче, привычнее, но даже в нём слышится что-то опасное.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-vulnerable.png', speaker: 'yusen', paragraphs: [
    { text: "Юсэн медленно выпрямляется, разворачивается покрытым багровыми пятнами лицом к партнёру.", inline: false },
    { text: "— Сказал.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-vulnerable.png', speaker: 'desmond', paragraphs: [
    { text: "— И ты думаешь, я пойду искать?", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-vulnerable.png', speaker: null, paragraphs: [
    { text: "По залу прошёл сквозняк — задел факелы, и те дрогнули взволнованно. Тени заметались по стенам, на секунду искажая лицо Дезмонда до неузнаваемости.", inline: false },
    { text: "Юсэн делает шаг вперёд, сокращая расстояние.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-calm.png', speaker: 'yusen', paragraphs: [
    { text: "— Я думаю, ты слишком упрям, чтобы искать кого-то другого.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: null, paragraphs: [
    { text: "Дезмонд поступает так же — приближается.", inline: false },
    { text: "Теперь он рядом, смотрит свысока, его грудь заметно вздымается, а взгляд выдаёт, что он зол.", inline: false },
    { text: "Но голос остаётся ровен и твёрд, как верная сталь.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-stubborn.png', right: 'images/desmond-angry.png', speaker: 'desmond', paragraphs: [
    { text: "— Ты прав. Я не буду искать.", inline: false }
  ]},

  // --- НОВЫЙ ЭКРАН: ВКЛЮЧАЕТСЯ АРТ (scene-3.png) ---
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, shake: true, sound: 'heartbeat', music: 'end', paragraphs: [
    { text: "— ...", inline: false },  
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Ассасин не успевает вздохнуть, когда Дезмонд хватает его за ворот, поднимает, притягивает к себе и впивается в губы — грубо, почти жестоко.", inline: false },
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Дезмонд вжимается так, что зубы лязгают о зубы, металл доспехов скрежещет, а пальцы на вороте трещат по швам.", inline: false },  
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Он дышит через нос, резко, шумно, не желая отрываться ни на секунду.", inline: false },  
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "И ассасин, не теряясь, отвечает с той же яростью: кусает, царапает, толкает любовника, но держит его за плечи, на кончиках ног подтягиваясь, чтобы продлить поцелуй.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Ведь этот подонок, Дезмонд, никогда не гнёт спину.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Они отнимаются друг от друга, сливаются снова, и каждый раз — это одновременно и борьба, и ласка.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Язык Дезмонда скользит по чужим зубам, грубо, требовательно, будто пытается достать до горла, и Юсэн отвечает тем же — кусает за губу, чувствуя, как на языке растекается солоноватый привкус железа.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, sound: 'heartbeat', cgMode: true, paragraphs: [
    { text: "Кровь смешивается со слюной, и теперь они на вкус одинаковы.", inline: false }
  ]},

  // --- ДИАЛОГ НА ФОНЕ АРТА ---
  { bg: 'images/scene-3.png', left: null, right: null, speaker: 'desmond', cgMode: true, shake: true, paragraphs: [
    { text: "— Я ненавижу тебя.", inline: false },  
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Выдыхает Дезмонд между поцелуями, и его голос вибрирует от напряжения, сбитого дыхания.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: 'yusen', cgMode: true, paragraphs: [
    { text: "— Взаимно.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Коротко, хрипло, по-злому смеётся Юсэн.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "...но смех прерывается — жрец по-животному страстно впивается зубами в чужую шею.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Боль простреливает до плеча, и Юсэн издаёт звук, не стон, а низкое, гортанное рычание.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Пальцы вцепляются в волосы Дезмонда, тянут назад, заставляя посмотреть в глаза.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Юсэн ничего не говорит — просто смотрит тяжело, исподлобья, будто пытается найти в чужом лице ответ на вопрос, который не задавал.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Зрачки его жреца расширились, запылали огнём — тем, божественным, что откликается только в двух случаях. И сейчас — первый.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Его руки скользят по спине ассасина, по шрамам, по старым рубцам, которые он знает наизусть.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Юсэн отвечает тем же — грубо, нетерпеливо, будто пытается содрать с него кожу... что, впрочем, недалеко от правды.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Дыхание двух богомолов сбивается, становится хриплым, влажным; губы обоих на вкус одинаковы — на них смешались железо и соль, не то кровь, не то пот.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Стоит открыть рот, чтобы сказать или просто вдохнуть воздуха в грудь, — и целитель закрывает этот рот поцелуем, жадностью срывая с губ все слова.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Язык скользит по зубам, по нёбу, не давая передохнуть.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Слова не нужны. Не сейчас.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, shake: true, paragraphs: [
    { text: "Два силуэта падают на пол, грохоча бронёй, — прямо там, рядом с телом, в крови и пепле.", inline: false },
      ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, shake: true, paragraphs: [
    { text: "Юсэн бьётся спиной о каменные плиты, и из лёгких выбивает воздух. Боль вспыхивает в старых ушибах, но он даже не успевает простонать — сверху уже наваливается тяжесть, придавливает к полу, не даёт шевельнуться.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Камень холодный под лопатками, кровь липнет к коже, но они не замечают: в этой грязной, жестокой ласке им не до мелочей.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Пальцы Дезмонда находят застёжку на чужом доспехе, дёргают, и металл с глухим лязгом падает на камень.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Каждый слой ткани, который удаётся стянуть, открывает новую порцию шрамов, старых и свежих.", inline: false },
    { text: "Дезмонд касается их губами, языком, будто пытается покрыть собой каждую отметину на этом теле.", inline: true }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Дезмонд прижимает Юсэна к полу, вдавливая в камень, и Юсэн выгибается навстречу — не покорно, а с вызовом, с той же злостью, с которой дрался.", inline: false },
    ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Ногтями царапает кожу — ими же до того сорвав живую броню, — оставляя красные полосы.", inline: false },    ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Он чувствует, как под его пальцами напрягаются мышцы чужой спины, как Дезмонд вздрагивает, и это пьянит не хуже вина.", inline: false }
  ]},
  { bg: 'images/scene-3.png', left: null, right: null, speaker: null, cgMode: true, paragraphs: [
    { text: "Свет факелов дрожит на стенах, пока тени двух тел сливаются в одну… и шевелятся, дышат, сражаются.", inline: false }
  ]},
  
  // --- ВОЗВРАЩАЕМСЯ К ОБЫЧНОМУ ФОНУ И СПРАЙТАМ --
  { bg: 'images/bg-hall.png', left: null, right: null, speaker: null, transition: true, cgMode: true, music: 'end', paragraphs: [
    { text: "…Вскоре огонь на стенах потух — или это они перестали его замечать. С губ обоих сорвались последние стоны, и зал погрузился в тишину.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Пол был усеян телами, и теперь на нём лежало ещё двое.", inline: false },
    { text: "Юсэн, лежа на боку, склонил голову на плечо Дезмонда.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Его дыхание всё ещё не восстановилось — рваное, хриплое, оно согревает чужую ключицу.", inline: false },
    { text: "Под длинным ухом билось сердце, и оно билось ровнее, чем должно было. Будто оно наконец позволило себе выдохнуть.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Их пальцы переплетены — грязные, окровавленные, но скованы в костный замок.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Дезмонд смотрит на их руки: на кровь, которая уже начала подсыхать, и на чужие пальцы, которые держат его собственные... будто боится, что отвернется, — и этот мираж развеется.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'yusen', music: 'end', paragraphs: [
    { text: "— Я не уйду.", inline: false },
    { text: "Шепчет Юсэн в плечо.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Дезмонд молчит.", inline: false },
    { text: "Затем его рука на секунду сжимается в кулак — и расслабляется. Он прижимает Юсэна ближе, почти незаметно.", inline: false },
    { text: "Это означало одно:", inline: false },
    { text: "я тоже буду здесь.", inline: true }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'desmond', music: 'end', paragraphs: [
    { text: "— Я знаю.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Где-то далеко капает вода, отсчитывая минуты покоя, что убийцы разрешили себе.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'desmond', music: 'end', paragraphs: [
    { text: "— Это нас погубит.", inline: false },
    { text: "Едва слышно... не просто говорит, констатирует Дезмонд, сомкнув руку крепче.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'yusen', music: 'end', paragraphs: [
    { text: "— Ты знаешь, что мы говорим смерти.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Дезмонд поворачивает голову.", inline: false },
    { text: "Юсэн смотрит в потолок, но его губы кривятся в слабой, усталой, нежной усмешке.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'yusen', music: 'end', paragraphs: [
    { text: "— Не сегодня...", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: 'desmond', music: 'end', paragraphs: [
    { text: "— Не сегодня.", inline: false },
    { text: "Эхом отзывается Дезмонд.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Юсэн медленно выдыхает — и это почти смешок.", inline: false },
    { text: "Он поворачивает голову, ищет губами плечо Дезмонда — не целует, просто прижимается,", inline: true },
    { text: "— Не сегодня.", inline: false }
  ]},
  { bg: 'images/bg-hall.png', left: 'images/yusen-relaxed.png', right: 'images/desmond-relaxed.png', speaker: null, music: 'end', paragraphs: [
    { text: "Дезмонд смотрит на их руки грязные, окровавленные, переплетённые,", inline: false },
    { text: "на кровь, которая уже начала подсыхать,", inline: true },
    { text: "на чужие пальцы, которые держат его собственные.", inline: true },
    { text: "...И касается костяшек губами.", inline: false }
  ]}
];

// ====== ЛОГИКА ======
let screenIndex = 0; 
let sentenceIndex = 0; 
let isTyping = false; 
let typingTimeout;    
let history = [];
let pendingFirstParagraph = null;
let isTransitioning = false;
let currentBgSound = null;

const bgEl = document.getElementById('background');
const leftEl = document.getElementById('sprite-left');
const rightEl = document.getElementById('sprite-right');
const bgLeftEl = document.getElementById('bg-left');
const bgRightEl = document.getElementById('bg-right');
const dialogueEl = document.getElementById('dialogue');
const storyPanel = document.getElementById('story-panel');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');

const sounds = {
  rain: document.getElementById('bg-rain'),
  cave: document.getElementById('bg-cave'),
  scene2: document.getElementById('bg-scene2'),
  scene3: document.getElementById('bg-scene3'),
  end: document.getElementById('bg-end'),
  fall: document.getElementById('sfx-fall'),
  heartbeat: document.getElementById('sfx-heartbeat'),
  steps: document.getElementById('sfx-steps'),
  heal: document.getElementById('sfx-heal'),
  meat: document.getElementById('sfx-meat'),
  steps2: document.getElementById('bg-steps'),
  stepsDesmond: document.getElementById('bg-steps-desmond'),
  tension: document.getElementById('bg-tension'),
};

// ====== ТЕКСТ ======
function removeAllCursors() {
  const cursors = dialogueEl.querySelectorAll('.cursor');
  cursors.forEach(cursor => cursor.remove());
}

function typeWriter(text, element, i = 0, speed = 25) {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1);
    isTyping = true;
    typingTimeout = setTimeout(() => typeWriter(text, element, i + 1, speed), speed); 
  } else {
    element.innerHTML = text + '<span class="cursor"></span>';
    isTyping = false;
  }
}

function renderUpToParagraph(targetSentence, animate = false) {
  const screen = story[screenIndex];
  dialogueEl.innerHTML = '';

  for (let i = 0; i <= targetSentence; i++) {
    const p = screen.paragraphs[i];
    if (!p) break;

    if (p.sfx && i === 0 && animate) playSfx(p.sfx);

    if (p.inline && i > 0) {
      const lastDiv = dialogueEl.lastElementChild;
      if (lastDiv) {
        lastDiv.appendChild(document.createTextNode(' '));
        const span = document.createElement('span');
        if (animate) {
          typeWriter(p.text, span, 0, 25);
        } else {
          span.textContent = p.text;
        }
        lastDiv.appendChild(span);
      }
    } else {
      const div = document.createElement('div');
      if (p.text.trim().startsWith('—')) div.classList.add('dialogue-line');
      div.classList.add('text-fade-in');
      div.style.marginBottom = p.inline ? '0' : '15px';
      dialogueEl.appendChild(div);

      if (animate) {
        typeWriter(p.text, div, 0, 25);
      } else {
        div.textContent = p.text;
      }
    }
    sentenceIndex = i;
  }

  const lastDiv = dialogueEl.lastElementChild;
  if (lastDiv && !animate) {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    lastDiv.appendChild(cursor);
  }
}

// ====== ПЕРЕХОД ======
function fadeTransition(callback) {
  const overlay = document.getElementById('overlay');
  const bg = document.getElementById('background');

  isTransitioning = true;

  overlay.style.transition = 'background-color 0.8s ease';
  overlay.style.backgroundColor = 'rgba(0,0,0,1)';

  setTimeout(() => {
    callback();

    setTimeout(() => {
      overlay.style.backgroundColor = 'transparent';

      bg.classList.remove('bg-fade-in');
      void bg.offsetWidth;
      bg.classList.add('bg-fade-in');

      storyPanel.classList.remove('text-fade-in-panel');
      void storyPanel.offsetWidth;
      storyPanel.classList.add('text-fade-in-panel');

      setTimeout(() => {
        overlay.style.transition = '';
        overlay.style.backgroundColor = '';
      }, 1000);

      isTransitioning = false;

      if (pendingFirstParagraph) {
        const { text, el } = pendingFirstParagraph;
        pendingFirstParagraph = null;
        typeWriter(text, el, 0, 25);
      }
    }, 300);
  }, 800);
}

// ====== ЭКРАН ======
function showScreen(sIndex) {
  const screen = story[sIndex];
  
  if (!screen) {
    // 1. Скрываем игровую панель
    storyPanel.classList.add('hidden');
    
    // 2. Мгновенно делаем экран черным
    const overlay = document.getElementById('overlay');
    overlay.style.transition = 'none';
    overlay.style.backgroundColor = '#000';
    
    // 3. Показываем финальный экран (он уже под черным занавесом)
    endScreen.classList.remove('hidden');
    
    // 4. Ждем полсекунды и плавно убираем черноту
    setTimeout(() => {
      overlay.style.transition = 'background-color 2.5s ease'; // 2.5 секунды на проявление
      overlay.style.backgroundColor = 'transparent';
      
      // Чистим стили через 3 секунды
      setTimeout(() => {
        overlay.style.transition = '';
        overlay.style.backgroundColor = '';
      }, 3000);
    }, 500);
    
    return;
  }
  

  // 1. CG
  if (screen.cgMode) {
    storyPanel.classList.add('cg-layout');
  } else {
    storyPanel.classList.remove('cg-layout');
  }

  // Движение для иллюстрации в 3 сцене (scene-3.png)
  if (screen.bg && screen.bg.includes('scene-3')) {
    bgEl.classList.add('cg-drift');
  } else {
    bgEl.classList.remove('cg-drift');
  }

  // 2. Тряска
  if (screen.shake) {
    const appEl = document.getElementById('app');
    appEl.classList.remove('screen-shake');
    setTimeout(() => appEl.classList.add('screen-shake'), 10);
  }

  // 3. Фон
  if (screen.bg) {
    bgEl.style.backgroundImage = `url('${screen.bg}')`;
  }

  // 4. Левый спрайт
  if ('left' in screen) {
    if (screen.left && !screen.cgMode) {
      if (leftEl.getAttribute('src') !== screen.left) {
        leftEl.style.opacity = '0';
        bgLeftEl.classList.remove('active-bg');
        setTimeout(() => {
          leftEl.src = screen.left;
          leftEl.style.opacity = '1';
        }, 200);
      }
      
      leftEl.classList.remove('hidden');
      bgLeftEl.classList.remove('hidden');
      bgLeftEl.src = 'images/bg-yusen.png';
      setTimeout(() => bgLeftEl.classList.add('active-bg'), 50);
      
    } else {
      leftEl.classList.add('hidden');
      bgLeftEl.classList.remove('active-bg');
    }
  }

  // 5. Правый спрайт
  if ('right' in screen) {
    if (screen.right && !screen.cgMode) {
      if (rightEl.getAttribute('src') !== screen.right) {
        rightEl.style.opacity = '0';
        bgRightEl.classList.remove('active-bg');
        setTimeout(() => {
          rightEl.src = screen.right;
          rightEl.style.opacity = '1';
        }, 200);
      }
      
      rightEl.classList.remove('hidden');
      bgRightEl.classList.remove('hidden');
      bgRightEl.src = 'images/bg-desmond.png';
      setTimeout(() => bgRightEl.classList.add('active-bg'), 50);
      
    } else {
      rightEl.classList.add('hidden');
      bgRightEl.classList.remove('active-bg');
    }
  }

  // 6. Подсветка говорящего
  if (screen.speaker === 'yusen') {
    leftEl.classList.add('active');
    leftEl.classList.remove('dimmed');
    rightEl.classList.add('dimmed');
    rightEl.classList.remove('active');
  } else if (screen.speaker === 'desmond') {
    rightEl.classList.add('active');
    rightEl.classList.remove('dimmed');
    leftEl.classList.add('dimmed');
    leftEl.classList.remove('active');
  } else {
    leftEl.classList.remove('active', 'dimmed');
    rightEl.classList.remove('active', 'dimmed');
  }

  // 7. Фоновый звук
  if (screen.music) {
    playBgSound(screen.music);
  } else if (screen.bg) {
    if (screen.bg.includes('bg-room')) {
      playBgSound('rain');
    } else if (screen.bg.includes('bg-corridor')) {
      playBgSound('scene2');
    } else if (screen.bg.includes('bg-hall')) {
      playBgSound('scene3');
    }
  }
  

  // 8. Шаги
  const isCorridor = screen.bg && screen.bg.includes('bg-corridor');
  let stepsToPlay = null;
  if (isCorridor && !screen.stopSteps) {
    if (screen.steps === 'desmond') {
      stepsToPlay = 'stepsDesmond';
    } else if (screen.steps !== false) {
      stepsToPlay = 'steps2';
    }
  }
  ['steps2', 'stepsDesmond'].forEach(key => {
    if (key !== stepsToPlay && !sounds[key].paused) sounds[key].pause();
  });
  if (stepsToPlay && sounds[stepsToPlay].paused) {
    sounds[stepsToPlay].volume = 0.25;
    sounds[stepsToPlay].play().catch(() => {});
  }

  // 9. Короткие звуки
  if (screen.sound) playSfx(screen.sound);

   // 10. Текст
  if (!window.__restoring) {
    dialogueEl.innerHTML = '';
    sentenceIndex = 0;
    
    // Если это самый первый экран игры, ждем 1 секунду, 
    // чтобы игрок увидел комнату до того, как побежит текст
    if (sIndex === 0) {
      setTimeout(() => {
        renderUpToParagraph(0, true);
      }, 1000);
    } else {
      renderUpToParagraph(0, true);
    }
  }
}

function showScreenNoHistory(sIndex) {
  window.__restoring = true;
  showScreen(sIndex);
  window.__restoring = false;
}

// ====== ДВИЖЕНИЕ ======
function next() {
  const screen = story[screenIndex];

  if (isTyping) {
    clearTimeout(typingTimeout);
    const lastDiv = dialogueEl.lastElementChild;
    if (lastDiv) {
      removeAllCursors();
      const lastSpan = lastDiv.querySelector('span:last-child');
      if (lastSpan) {
        lastSpan.innerHTML = screen.paragraphs[sentenceIndex].text + '<span class="cursor"></span>';
      } else {
        lastDiv.innerHTML = screen.paragraphs[sentenceIndex].text + '<span class="cursor"></span>';
      }
    }
    isTyping = false;
    return;
  }

  // Пуш истории
  const last = history[history.length - 1];
  if (!last || last.screen !== screenIndex || last.sentence !== sentenceIndex) {
    history.push({ screen: screenIndex, sentence: sentenceIndex });
    if (history.length > 200) history.shift();
  }

  if (sentenceIndex < screen.paragraphs.length - 1) {
    removeAllCursors();
    sentenceIndex++;
    
    const newParagraph = screen.paragraphs[sentenceIndex];
    if (newParagraph.sfx) playSfx(newParagraph.sfx);
    
    if (newParagraph.inline) {
      const lastDiv = dialogueEl.lastElementChild;
      const oldCursor = lastDiv.querySelector('.cursor');
      if (oldCursor) oldCursor.remove();
      
      lastDiv.appendChild(document.createTextNode(' '));
      const tempSpan = document.createElement('span');
      lastDiv.appendChild(tempSpan);
      
      typeWriter(newParagraph.text, tempSpan, 0, 25);
    } else {
      const tempDiv = document.createElement('div');
      if (newParagraph.text.trim().startsWith('—')) tempDiv.classList.add('dialogue-line');
      tempDiv.classList.add('text-fade-in');
      tempDiv.style.marginBottom = '15px';
      dialogueEl.appendChild(tempDiv);
      typeWriter(newParagraph.text, tempDiv, 0, 25);
    }

  } else {
    const nextScreen = story[screenIndex + 1];
    if (nextScreen && nextScreen.transition) {
      fadeTransition(() => {
        screenIndex++;
        showScreen(screenIndex);
      });
    } else {
      screenIndex++;
      showScreen(screenIndex);
    }
  }
}

function goBack() {
  if (history.length === 0) return;

  clearTimeout(typingTimeout);
  isTyping = false;
  pendingFirstParagraph = null;

  const prev = history.pop();
  screenIndex = prev.screen;
  sentenceIndex = prev.sentence;

  const wasTransitioning = isTransitioning;
  isTransitioning = false;

  showScreenNoHistory(screenIndex);
  renderUpToParagraph(prev.sentence);

  isTransitioning = wasTransitioning;
}

// ====== ЗВУК ======
function playBgSound(soundId) {
  const target = sounds[soundId];
  if (!target) return;

  if (currentBgSound === soundId && !target.paused) return;

  Object.keys(sounds).forEach(key => {
    const s = sounds[key];
    if (s && s.loop) s.pause();
  });

  // Настраиваем громкость в зависимости от звука
  if (soundId === 'rain') {
    target.volume = 0.15; // Дождь играет тихо на фоне
  } else {
    target.volume = 0.4;  // Остальные звуки (коридор, зал, финал) — громче
  }

  target.play().catch(() => console.log("Кликните по экрану, чтобы включить звук"));
  currentBgSound = soundId;
}

function playSfx(soundId) {
  if (sounds[soundId]) {
    sounds[soundId].currentTime = 0;
    sounds[soundId].volume = 0.3;
    sounds[soundId].play().catch(() => console.log("Кликните по экрану..."));
  }
}

// ====== СОБЫТИЯ ======
startBtn.addEventListener('click', () => {
  // 1. Прячем стартовый экран
  startScreen.classList.add('hidden');
  
  // 2. Делаем экран игры видимым, но пока невидимым для глаз (прозрачным)
  storyPanel.classList.remove('hidden');
  storyPanel.style.opacity = '0';
  
  // 3. Запускаем игру
  screenIndex = 0;
  sentenceIndex = 0;
  history = [];
  showScreen(screenIndex);
  
  // 4. Запускаем звук с нуля
  sounds.rain.volume = 0;
  sounds.rain.play().catch(() => {});
  
  // 5. Используем #overlay как занавес (он уже есть в HTML и CSS)
  const overlay = document.getElementById('overlay');
  overlay.style.transition = 'none'; // Мгновенно делаем его черным
  overlay.style.backgroundColor = '#000';
  
  // 6. Через 0.5 секунды начинаем плавно открывать занавес
  setTimeout(() => {
    // Включаем плавность
    overlay.style.transition = 'background-color 2s ease, opacity 2s ease';
    overlay.style.backgroundColor = 'transparent'; // Занавес тает
    
    // Показываем панель с текстом
    storyPanel.style.transition = 'opacity 1.5s ease';
    storyPanel.style.opacity = '1';
    
    // Плавно поднимаем громкость дождя
    let vol = 0;
    const fadeAudio = setInterval(() => {
      if (vol < 0.15) { // <-- ИЗМЕНИЛИ
        vol += 0.005;   // Уменьшили шаг, чтобы нарастало плавнее
        sounds.rain.volume = Math.min(vol, 0.15); // <-- ИЗМЕНИЛИ
      } else {
        clearInterval(fadeAudio);
      }
    }, 50);
  }, 500);
});

document.getElementById('app').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') return; 
  if (!storyPanel.classList.contains('hidden')) {
    next();
  }
});

document.getElementById('app').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  if (!storyPanel.classList.contains('hidden')) {
    goBack();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    if (!storyPanel.classList.contains('hidden')) next();
  }
});


function jumpTo(idx) {
  clearTimeout(typingTimeout);
  isTyping = false;
  screenIndex = idx;
  sentenceIndex = 0;
  history = [];
  currentBgSound = null;
  sounds.steps2.pause();
  sounds.steps2.currentTime = 0;

  startScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  storyPanel.classList.remove('hidden');

  showScreen(screenIndex);
}

document.querySelectorAll('#debug-panel button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const idx = parseInt(btn.dataset.jump, 10);
    jumpTo(idx);
  });
});