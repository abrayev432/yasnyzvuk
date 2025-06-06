import { useState } from "react";
import { Calendar, Megaphone, Brain, Heart, Headphones, Ear, Volume2, AlertTriangle, Users, Wrench, ClipboardList, Music, ShieldCheck, HelpCircle, UserCheck, Stethoscope, Settings, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const newsItems = [
  {
    id: 20,
    title: "Функция шумоподавления в слуховом аппарате",
    description: "Шумоподавление – одна из важнейших функций в слуховых аппаратах. Зачем она нужна и для кого предназначена читайте в статье.",
    fullContent: `
      <p>Шумоподавление — одна из важнейших функций в слуховых аппаратах. Она помогает контролировать уровень громкости фонового шума, который окружает пользователя во многих акустических ситуациях. Подобный низкочастотный шум зачастую мешает воспринимать речь собеседника и другие важные высокочастотные звуки.</p>
      
      <h3>Для кого необходима функция шумоподавления</h3>
      <p>Для активных людей, которые часто бывают в шумных местах и на различных общественных мероприятиях, наличие программы шумоподавления в слуховом аппарате является просто необходимым. Без неё невозможно обеспечить комфортное общение в кафе, на улице, на концерте или вокзале.</p>
      
      <h3>Как работает шумоподавление</h3>
      <p>Главная задача функции шумоподавления — гасить различные виды шумов, сохраняя при этом максимальный комфорт восприятия речи. Алгоритм использует передовые программные модели для снижения уровня громкости шума.</p>
      
      <h3>Настройка функции</h3>
      <p>Функция шумоподавления присутствует практически во всех современных цифровых программируемых слуховых аппаратах и настраивается специалистом по слухопротезированию индивидуально под потерю слуха человека.</p>
    `,
    date: "5 июня 2025",
    icon: VolumeX,
    category: "Технологии",
    image: "/lovable-uploads/8c875790-b8cd-433b-81e4-1355bb501144.png"
  },
  {
    id: 19,
    title: "Уход за слуховыми аппаратами",
    description: "Правильный уход за слуховыми аппаратами продлевает срок их службы и обеспечивает качественную работу. Рассказываем о важных правилах ежедневного ухода.",
    fullContent: `
      <p>Правильный уход за слуховыми аппаратами продлевает срок их службы и обеспечивает качественную работу. Соблюдение простых правил поможет вам получить максимальную пользу от вашего устройства.</p>
      
      <h3>Ежедневный уход</h3>
      <ol>
        <li><strong>Вечерняя процедура:</strong> Каждый вечер снимаем аппараты, протираем их сухой тряпочкой, открываем батарейный отсек и убираем на ночь в коробочку.</li>
      </ol>
      
      <h3>Еженедельный уход</h3>
      <ol start="2">
        <li><strong>Сушка аппаратов:</strong> Три раза в неделю сушим аппараты в специальной сушке с силикагелем. Для этого вынимаем батарейку и окунаем аппараты в сушку с шариками.</li>
      </ol>
      
      <h3>Замена батареек</h3>
      <ol start="3">
        <li><strong>Регулярная замена:</strong> Каждые 12 дней меняем батарейки.</li>
        <li><strong>Правильная установка:</strong> Батарейку вставлять плюсом к верху. Гладкая сторона — это плюсовая клемма, устанавливаем гладкой стороной кверху.</li>
      </ol>
      
      <h3>Важные предостережения</h3>
      <ol start="5">
        <li><strong>Защита от повреждений:</strong> Аппараты не ронять и не мочить.</li>
      </ol>
      
      <p>Соблюдение этих простых правил поможет вашим слуховым аппаратам работать долго и эффективно, обеспечивая вам комфортное использование на протяжении всего срока службы.</p>
    `,
    date: "4 июня 2025",
    icon: Settings,
    category: "Уход",
  },
  {
    id: 18,
    title: "Слепок уха: что это и зачем он нужен",
    description: "Снятие слепка уха — несложная и безболезненная процедура. Что она из себя представляет и зачем проводится, разбираем в этой статье.",
    fullContent: `
      <p>Снятие слепка уха представляет собой несложную и безболезненную процедуру, которая обязательно должна выполняться только квалифицированным специалистом. Данный процесс позволяет добиться формы изделия, в точности повторяющей оригинальный рельеф слухового канала человека.</p>
      
      <h3>Цели снятия слепка ушного прохода</h3>
      <p>Среди главных целей снятия слепка ушного прохода можно назвать:</p>
      <ul>
        <li>изготовление индивидуального ушного вкладыша;</li>
        <li>изготовление внутриушного или внутриканального слухового аппарата;</li>
        <li>изготовление беруши;</li>
        <li>изготовление персональных наушников.</li>
      </ul>
      
      <h3>Противопоказания</h3>
      <p>Важными противопоказаниями к снятию слепка уха является наличие в слуховом канале воспалительных процессов, серной пробки или инородных тел. Поэтому перед проведением данной процедуры специалист с помощью отоскопа проверяет состояние ушного прохода.</p>
      
      <p>Если при первичном осмотре обнаружится одна из вышеперечисленных проблем, снятие слепка уха придется отложить до выздоровления или полного устранения причины. Если же противопоказаний к проведению процедуры не выявлено, то смело можно приступать.</p>
      
      <h3>Как проходит снятие слепка</h3>
      <p>Для начала специалист устанавливает в ухо пациента тампон, который защищает барабанную перепонку от возможных повреждений. Затем слуховой проход полностью заполняется слепочной массой. Важно, чтобы материал плотно прилегал к стенкам слухового канала. Так модель получится максимально точной. После застывания слепочной массы материал аккуратно извлекают из прохода.</p>
      
      <p>Таким образом, по полученному слепку уха можно изготавливать индивидуальные вкладыши, слуховые аппараты, беруши и даже персональные наушники. Подобные изделия обладают максимальным уровнем шумоизоляции, комфортны при ношении и удобны в использовании.</p>
    `,
    date: "3 июня 2025",
    icon: Stethoscope,
    category: "Процедуры",
    image: "/lovable-uploads/a95ce0f8-374c-46a0-945b-846f96dde3e6.png"
  },
  {
    id: 17,
    title: "Можно ли подобрать слуховой аппарат без присутствия пациента?",
    description: "Специалисты центров «Аудиале» нередко сталкиваются с таким вопросом. Что же делать, если нет возможности привезти пациента на подбор в центр?",
    fullContent: `
      <p>«Можно ли подобрать слуховой аппарат без присутствия пациента?» — специалисты центров «Аудиале» нередко сталкиваются с таким вопросом. Как правило, в подобных случаях речь идёт о подборе устройства для людей с ограниченными возможностями или для пожилых людей, которым сложно передвигаться.</p>
      
      <h3>Что важно знать о подборе слухового аппарата?</h3>
      <p>Прежде всего нужно понимать, что слуховой аппарат подбирается индивидуально под потерю слуха конкретного человека. Именно поэтому при подборе крайне желательно присутствие самого пациента с тугоухостью. Кроме того, при личном присутствии человек может примерить разные модели и выбрать наиболее удобное устройство с максимально комфортным звучанием.</p>
      
      <h3>Как происходит подбор слухового аппарата в центрах «Аудиале»?</h3>
      <ol>
        <li>Прежде всего клиенту проводится тест слуха, чтобы понять степень тугоухости и ее особенности.</li>
        <li>Далее по результатам проверки специалист подбирает несколько моделей, наиболее подходящих по состоянию слуха человека, его образу жизни, пожеланиям и примерному бюджету.</li>
        <li>Примерка различных моделей аппаратов. Здесь все зависит от субъективных ощущений пациента.</li>
        <li>Выбор пациентом понравившейся модели слухового аппарата.</li>
        <li>Индивидуальная настройка по потере слуха. Большинство современных слуховых аппаратов являются цифровыми. Их настройка производится на компьютере с помощью выставления определенных параметров и их корректировки. В данном процессе важную роль играют ощущения пациента. Настройка заканчивается только когда пациент полностью доволен звучанием.</li>
      </ol>
      
      <p>Таким образом, присутствие человека, которому подбирается слуховой аппарат, является практически незаменимым фактором для правильного выбора устройства и дальнейшего комфортного пользования.</p>
      
      <h3>Что делать, если нет возможности привезти пациента на подбор в центр?</h3>
      
      <h4>Вариант 1</h4>
      <p>Если ранее уже проводилась диагностика слуха, можно принести ее результаты в центр. Специалист постарается подобрать аппарат и сделать настройку, максимально удовлетворяющую аудиограмме. <strong>Важно!</strong> Состояние слуха пациента может поменяться с момента проведения последней диагностики. Поэтому вероятнее всего придется приходить несколько раз на поднастройку аппарата.</p>
      
      <h4>Вариант 2</h4>
      <p>В сети центров «Аудиале» действует услуга «выезд сотрудника на дом». В рамках которой специалист центра вместе с оборудованием и рядом моделей слуховых аппаратов приезжает к пациенту, подбирает подходящее устройство и настраивает его. Услуга платная. Стоимость и возможность выезда сотрудника необходимо уточнять у специалиста центра в вашем городе.</p>
    `,
    date: "2 июня 2025",
    icon: UserCheck,
    category: "Подбор",
    image: "/lovable-uploads/9444e69a-e266-440f-8f90-f030d7d2bc1e.png"
  },
  {
    id: 16,
    title: "Топ-6 ошибок при первых признаках потери слуха",
    description: "Многие люди при первых подозрениях на потерю слуха совершают ряд ошибок, которые могут привести только к дальнейшему усугублению проблемы.",
    fullContent: `
      <p>Многие люди при первых подозрениях на потерю слуха совершают ряд ошибок, которые могут привести только к дальнейшему усугублению проблемы. Что точно нельзя делать при снижении слуха, разбираем в статье.</p>
      
      <p>Давайте обсудим, что точно нельзя делать при снижении слуха.</p>
      
      <h3>1. Затягивать с походом к врачу</h3>
      <p>При первых симптомах тугоухости следует незамедлительно обратиться к профильному специалисту для диагностики состояния слуха. По результатам аудиограммы врач точно сможет сказать, действительно ли присутствует снижение слуха или же беспокоящие признаки – это симптомы какого-то другого заболевания. Важно понимать реальную картину, так как тугоухость при отсутствии должного внимания чаще всего прогрессирует. И в дальнейшем может потребоваться более серьезное и дорогостоящее лечение.</p>
      
      <h3>2. Пить «волшебные» таблетки для восстановления слуха</h3>
      <p>Слух может временно снижаться при отите и других подобных заболеваниях. В этом случае пациентам прописывают противовоспалительные препараты. Но лекарства для восстановления слуха при тугоухости нет. Потеря слуха лечится только методом слухопротезирования для компенсации утраченных частот.</p>
      
      <h3>3. Делать гимнастику и прочие массажи ушной раковины</h3>
      <p>В сети Интернет распространены различные гимнастики и массажи ушной раковины для восстановления слуха. Однако никаких научных доказательств того, что подобные методики работают, на данный момент не найдено. Как правило, такими спорными процедурами занимаются неквалифицированные организации и шарлатаны. Пациент с тугоухостью рискует не только потерять деньги и драгоценное время, но и усугубить свою потерю слуха при неаккуратном проведении сеанса.</p>
      
      <h3>4. Заниматься самолечением и пользоваться «проверенными» народными средствами для восстановления слуха</h3>
      <p>Обращаясь к народной медицине, важно понимать, что тугоухость – это не простуда. Сама по себе потеря слуха не проходит. Эффект плацебо при лечении тугоухости тоже не работает. Народная медицина основана на рецептах, которые кому-то когда-то возможно помогли. При этом никто не берет в учёт результаты анализов больного, общую клиническую картину, а также сопутствующие и хронические заболевания. Эффективность народных методов для восстановления слуха не подтверждена никакими исследованиями а, соответственно, их нельзя считать безопасными. Увлекаясь народной медициной при попытках вылечить тугоухость, больной рискует не просто усугубить свою потерю слуха, но и обострить имеющиеся хронические заболевания, получить новые болезни, инфекции или отравления.</p>
      
      <h3>5. Обращаться к сомнительным специалистам</h3>
      <p>При снижении слуха важно обращаться именно к грамотному специалисту. Как уже писали выше, неквалифицированный специалист может ещё больше навредить пациенту, поставив неверный диагноз, подобрав неподходящий слуховой аппарат или при проведении какой-либо процедуры. При выборе специалиста следует обращать внимание на образование и опыт.</p>
      
      <h3>6. Приобретать усилители слуха</h3>
      <p>Ранее мы уже много раз рассказывали про опасность усилителей слуха. Хотим лишь снова подчеркнуть, что за счёт постоянного усиления громкости на всех частотах эти устройства не могут помочь при лечении тугоухости. При длительной эксплуатации они только еще больше снижают слух пациента. Кроме того, усилители слуха не являются медицинским прибором и, соответственно, не проходят должной сертификации.</p>
    `,
    date: "1 июня 2025",
    icon: AlertTriangle,
    category: "Ошибки",
    image: "/lovable-uploads/1b8a6d73-51c4-4253-b33d-602638ee9e5c.png"
  },
  {
    id: 15,
    title: "Может ли слуховой аппарат ухудшить слух?",
    description: "Среди людей с потерей слуха существует много мифов о слуховых аппаратах и слухопротезировании в целом.",
    fullContent: `
      <p>Среди людей с потерей слуха существует много мифов о слуховых аппаратах и слухопротезировании в целом. Одно из самых распространенных заблуждений звучит так «а что, если слуховой аппарат еще больше испортит мне слух и сделает инвалидом». Специалисты в наших центрах часто слышат от посетителей подобные опасения. Может ли слуховой аппарат действительно сделать слух еще хуже? Давайте разберёмся.</p>
      
      <p>Прежде всего, важно понимать, что если слух уже снизился, то без должной компенсации утраченных частот потеря слуха скорее всего будет усугубляться. Кроме того, чем больше снижен слух, тем менее активно в коре головного мозга задействуются слуховые центры. Длительное отсутствие «стимуляции» этих центров чревато преждевременной деменцией. Именно поэтому при серьезном снижении слуха не просто желательно, а обязательно слухопротезирование.</p>
      
      <p>В реальности же ещё больше снизить слух могут только усилители звука. Неопытные люди с тугоухостью зачастую именно их путают со слуховыми аппаратами. Про разницу между этими устройствами мы уже писали ранее. Если коротко, то усилители звука представляют собой приборы, которые просто одинаково усиливают звуки на всех частотах: и где это усиление необходимо, и где оно совсем не нужно. Слишком высокий уровень громкости тех частот, которые человек с тугоухостью всё ещё слышит хорошо, приводит к ещё большей потере слуха. Кроме того, усилители слуха не являются медицинским изделием и, соответственно, не проходят должной сертификации.</p>
      
      <p>Главная функция слуховых аппаратов заключается в усилении именно утраченных частот! При этом сохраняя максимальный комфорт, качество и естественность звучания. Важно! Только правильно подобранные и настроенные грамотным специалистом слуховые аппараты могут обеспечить хороший, здоровый слух и защитить от преждевременной деменции.</p>
    `,
    date: "31 мая 2025",
    icon: HelpCircle,
    category: "Мифы",
    image: "/lovable-uploads/8439cfc8-195b-4e26-a2bf-676781937fdf.png"
  },
  {
    id: 14,
    title: "Маскировка тиннитуса в слуховых аппаратах",
    description: "Функция маскировки тиннитуса присутствует в большинстве современных слуховых аппаратах.",
    fullContent: `
      <p>Функция маскировки тиннитуса присутствует в большинстве современных слуховых аппаратах. Зачем она нужна и по какому принципу работает, рассказываем в статье.</p>
      
      <p>Тиннитус – это субъективное восприятие звука при отсутствии внешнего акустического сигнала. Простыми словами, это когда человек слышит шум, звон, гул или другие звуки в ушах или голове, которые не имеют внешнего источника.</p>
      
      <p>Современные слуховые аппараты оснащены специальными программами для маскировки тиннитуса. Эти программы генерируют мягкие, успокаивающие звуки, которые помогают отвлечь внимание от неприятного шума в ушах.</p>
      
      <p>Принцип работы функции маскировки основан на том, что мозг фокусируется на более приятных и контролируемых звуках, постепенно "забывая" о тиннитусе.</p>
    `,
    date: "30 мая 2025",
    icon: ShieldCheck,
    category: "Технологии",
    image: "/lovable-uploads/16096fcf-f14e-464d-beff-570450d6e9e4.png"
  },
  {
    id: 13,
    title: "Людвиг ван Бетховен: великий композитор несмотря ни на что",
    description: "Один из величайших немецких композиторов Людвиг ван Бетховен страдал от проблем со слухом.",
    fullContent: `
      <p>Один из величайших немецких композиторов Людвиг ван Бетховен страдал от проблем со слухом. Но это не помешало гению добиться всемирного признания.</p>
      
      <p>Потеря слуха у Бетховена началась в возрасте около 26 лет и прогрессировала на протяжении всей его жизни. К концу жизни композитор практически полностью оглох.</p>
      
      <p>Несмотря на это, именно в период прогрессирующей тугоухости Бетховен создал свои самые знаменитые произведения, включая Девятую симфонию.</p>
      
      <p>История Бетховена показывает, что потеря слуха не является препятствием для полноценной и творческой жизни.</p>
    `,
    date: "30 мая 2025",
    icon: Music,
    category: "История",
    image: "/lovable-uploads/58cf8f91-8f04-4e4d-b1c6-773eb4991132.png"
  },
  {
    id: 12,
    title: "Как правильно адаптироваться к слуховому аппарату",
    description: "Продолжаем цикл статей о важности процесса адаптации в начале пользования слуховым аппаратом.",
    fullContent: `
      <p>Продолжаем цикл статей о важности процесса адаптации в начале пользования слуховым аппаратом. Сегодня расскажем о рекомендациях и упражнениях для успешного прохождения первого месяца адаптации.</p>
      
      <h3>Первая неделя</h3>
      <p>Носите слуховой аппарат по 2-3 часа в день в тихой домашней обстановке. Привыкайте к собственному голосу и бытовым звукам.</p>
      
      <h3>Вторая неделя</h3>
      <p>Увеличьте время ношения до 4-6 часов. Начните выходить на улицу в слуховом аппарате.</p>
      
      <h3>Третья неделя</h3>
      <p>Носите аппарат 6-8 часов. Пробуйте общаться с близкими людьми.</p>
      
      <h3>Четвертая неделя</h3>
      <p>Постепенно увеличивайте время до полного дня. Посещайте общественные места.</p>
    `,
    date: "30 мая 2025",
    icon: ClipboardList,
    category: "Адаптация",
    image: "/lovable-uploads/c69b5560-6404-49da-b181-d7588da3e016.png"
  },
  {
    id: 11,
    title: "Загрязнение слухового аппарата ушной серой. Что делать?",
    description: "Зачастую в слуховом аппарате ухудшается качество звучания без видимой на то причины.",
    fullContent: `
      <p>Зачастую в слуховом аппарате ухудшается качество звучания без видимой на то причины. Со временем любой пользователь может столкнуться с данной проблемой. Чаще всего причиной такого затруднения становится загрязнение элементов слухового аппарата ушной серой.</p>
      
      <h3>Признаки загрязнения</h3>
      <ul>
        <li>Снижение громкости звука</li>
        <li>Искажение звучания</li>
        <li>Появление свиста</li>
        <li>Периодические отключения</li>
      </ul>
      
      <h3>Профилактика</h3>
      <p>Регулярная чистка слухового аппарата специальными средствами поможет избежать серьезных загрязнений.</p>
      
      <h3>Что делать при загрязнении</h3>
      <p>Обратитесь к специалисту для профессиональной чистки. Не пытайтесь чистить аппарат самостоятельно острыми предметами.</p>
    `,
    date: "30 мая 2025",
    icon: Wrench,
    category: "Обслуживание",
    image: "/lovable-uploads/01a568af-59bd-4ab2-91b0-727dee08183c.png"
  },
  {
    id: 10,
    title: "Бинауральное слухопротезирование: что это и в каких случаях необходимо",
    description: "Что представляет собой метод бинаурального слухопротезирования, в каких случаях он необходим, а в каких противопоказан читайте в этой статье.",
    fullContent: `
      <p>Что представляет собой метод бинаурального слухопротезирования, в каких случаях он необходим, а в каких противопоказан читайте в этой статье.</p>
      
      <h3>Что такое бинауральное слухопротезирование</h3>
      <p>Бинауральное слухопротезирование — это использование двух слуховых аппаратов одновременно, по одному на каждое ухо.</p>
      
      <h3>Преимущества</h3>
      <ul>
        <li>Лучшее понимание речи в шуме</li>
        <li>Определение направления звука</li>
        <li>Более естественное звучание</li>
        <li>Снижение усталости от прослушивания</li>
      </ul>
      
      <h3>Показания</h3>
      <p>Бинауральное протезирование рекомендуется при двусторонней потере слуха.</p>
    `,
    date: "30 мая 2025",
    icon: Headphones,
    category: "Технологии",
    image: "/lovable-uploads/38ee5e38-602d-45ae-8ee4-ea16bcb0520f.png"
  },
  {
    id: 9,
    title: "А ты в группе риска?",
    description: "Кто относится к группе риска по развитию тугоухости и какие профилактические меры следует соблюдать для предотвращения данного заболевания, рассказываем в статье.",
    fullContent: `
      <p>Кто относится к группе риска по развитию тугоухости и какие профилактические меры следует соблюдать для предотвращения данного заболевания, рассказываем в статье.</p>
      
      <h3>Группы риска</h3>
      <ul>
        <li>Люди старше 60 лет</li>
        <li>Работники шумных производств</li>
        <li>Музыканты и звукорежиссеры</li>
        <li>Люди с наследственной предрасположенностью</li>
        <li>Пациенты с сахарным диабетом</li>
        <li>Курильщики</li>
      </ul>
      
      <h3>Меры профилактики</h3>
      <p>Используйте средства защиты слуха в шумной обстановке, ограничьте громкость при прослушивании музыки, регулярно проходите проверку слуха.</p>
    `,
    date: "30 мая 2025",
    icon: Users,
    category: "Профилактика"
  },
  {
    id: 8,
    title: "7 привычек, которые испортят слух к 40 годам",
    description: "У каждого из нас есть ряд обыденных действий, которые мы привыкли выполнять регулярно.",
    fullContent: `
      <p>У каждого из нас есть ряд обыденных действий, которые мы привыкли выполнять регулярно. Некоторые тянутся еще из далёкого детства, а некоторые – вошли в привычку совсем недавно. Узнайте, от каких привычек лучше отказаться, чтобы сохранить здоровый слух.</p>
      
      <h3>7 вредных привычек:</h3>
      <ol>
        <li>Прослушивание музыки в наушниках на большой громкости</li>
        <li>Частое использование ватных палочек для чистки ушей</li>
        <li>Игнорирование средств защиты слуха в шумных местах</li>
        <li>Курение</li>
        <li>Самолечение ушных инфекций</li>
        <li>Длительное пребывание в шумной обстановке без перерывов</li>
        <li>Игнорирование первых признаков потери слуха</li>
      </ol>
      
      <p>Каждая из этих привычек может нанести серьезный вред вашему слуху.</p>
    `,
    date: "29 мая 2025",
    icon: AlertTriangle,
    category: "Здоровье",
    image: "/lovable-uploads/614f5aec-485f-41bb-b9b9-3b9747b92494.png"
  },
  {
    id: 7,
    title: "Современные слуховые аппараты: технологии будущего уже сегодня",
    description: "Узнайте о революционных функциях современных слуховых аппаратов: от беспроводной связи до искусственного интеллекта.",
    fullContent: `
      <p>Узнайте о революционных функциях современных слуховых аппаратов: от беспроводной связи до искусственного интеллекта, которые делают жизнь людей с нарушениями слуха более комфортной и полноценной.</p>
      
      <h3>Современные технологии в слуховых аппаратах:</h3>
      
      <h4>Bluetooth-подключение</h4>
      <p>Прямая передача звука с телефона, телевизора и других устройств.</p>
      
      <h4>Искусственный интеллект</h4>
      <p>Автоматическое распознавание акустической обстановки и настройка под неё.</p>
      
      <h4>Шумоподавление</h4>
      <p>Интеллектуальное подавление фонового шума для лучшего понимания речи.</p>
      
      <h4>Перезаряжаемые батареи</h4>
      <p>Удобные зарядные станции избавляют от необходимости менять батарейки.</p>
    `,
    date: "28 мая 2025",
    icon: Volume2,
    category: "Технологии"
  },
  {
    id: 6,
    title: "Слуховые аппараты: возвращение в мир звуков",
    description: "Слух – одно из важнейших чувств, позволяющее нам общаться, наслаждаться музыкой, ощущать безопасность и просто полноценно жить.",
    fullContent: `
      <p>Слух – одно из важнейших чувств, позволяющее нам общаться, наслаждаться музыкой, ощущать безопасность и просто полноценно жить. Потеря слуха, к сожалению, затрагивает миллионы людей по всему миру, значительно снижая качество их жизни.</p>
      
      <h3>Важность своевременного обращения</h3>
      <p>Чем раньше человек обратится за помощью при потере слуха, тем лучше будет результат слухопротезирования.</p>
      
      <h3>Современные решения</h3>
      <p>Сегодняшние слуховые аппараты кардинально отличаются от устройств прошлого поколения. Они компактны, эстетичны и обладают множеством функций.</p>
      
      <h3>Качество жизни</h3>
      <p>Правильно подобранный слуховой аппарат позволяет вернуться к полноценной социальной жизни, продолжить карьеру и наслаждаться общением с близкими.</p>
    `,
    date: "27 мая 2025",
    icon: Ear,
    category: "Образование"
  },
  {
    id: 2,
    title: "Верни радость звука",
    description: "Новая программа реабилитации слуха для людей с нарушениями слуха. Индивидуальный подход и современные технологии.",
    fullContent: `
      <p>Новая программа реабилитации слуха для людей с нарушениями слуха. Индивидуальный подход и современные технологии.</p>
      
      <h3>Что включает программа:</h3>
      <ul>
        <li>Комплексная диагностика слуха</li>
        <li>Индивидуальный подбор слухового аппарата</li>
        <li>Период адаптации с поддержкой специалиста</li>
        <li>Обучение использованию устройства</li>
        <li>Регулярные контрольные визиты</li>
      </ul>
      
      <p>Программа разработана с учетом современных международных стандартов реабилитации слуха.</p>
    `,
    date: "15 мая 2025",
    icon: Megaphone,
    category: "Программа"
  },
  {
    id: 4,
    title: "Искусственный интеллект в слуховых аппаратах: революция в области аудиологии",
    description: "Современные слуховые аппараты с ИИ автоматически адаптируются к окружающей среде.",
    fullContent: `
      <p>Современные слуховые аппараты с ИИ автоматически адаптируются к окружающей среде, фильтруют шум и улучшают качество звука в режиме реального времени.</p>
      
      <h3>Возможности ИИ в слуховых аппаратах:</h3>
      
      <h4>Автоматическое распознавание обстановки</h4>
      <p>Устройство самостоятельно определяет, находитесь ли вы в ресторане, на улице, дома или в офисе, и соответственно настраивает параметры.</p>
      
      <h4>Машинное обучение</h4>
      <p>Аппарат учится на ваших предпочтениях и со временем становится более точным в настройках.</p>
      
      <h4>Подавление шума в реальном времени</h4>
      <p>ИИ мгновенно анализирует звуковую картину и выделяет важные звуки, подавляя ненужный шум.</p>
    `,
    date: "24 мая 2025",
    icon: Brain,
    category: "Технологии"
  },
  {
    id: 5,
    title: "Связь между потерей слуха и здоровьем сердца: новые исследования",
    description: "Ученые обнаружили прямую связь между нарушениями слуха и сердечно-сосудистыми заболеваниями.",
    fullContent: `
      <p>Ученые обнаружили прямую связь между нарушениями слуха и сердечно-сосудистыми заболеваниями. Своевременное лечение потери слуха может снизить риск развития болезней сердца.</p>
      
      <h3>Результаты исследований</h3>
      <p>Крупномасштабные исследования показали, что люди с потерей слуха имеют на 54% выше риск развития сердечно-сосудистых заболеваний.</p>
      
      <h3>Возможные причины связи</h3>
      <ul>
        <li>Общие факторы риска (возраст, диабет, курение)</li>
        <li>Снижение физической активности из-за потери слуха</li>
        <li>Социальная изоляция и стресс</li>
        <li>Воспалительные процессы</li>
      </ul>
      
      <h3>Рекомендации</h3>
      <p>Регулярная проверка слуха должна стать частью комплексной заботы о здоровье, особенно для людей старше 50 лет.</p>
    `,
    date: "24 мая 2025",
    icon: Heart,
    category: "Здоровье"
  }
];

const NewsArticle = ({ article }: { article: typeof newsItems[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      {article.image && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
            <article.icon className="h-5 w-5 text-brand" />
          </div>
          <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {article.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {article.description}
        </p>
        
        {article.fullContent && (
          <>
            {isExpanded && (
              <div 
                className="prose prose-sm max-w-none text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: article.fullContent }}
              />
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center gap-2 text-brand hover:text-brand/80"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Скрыть
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Читать далее
                </>
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости и статьи</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Читайте наши статьи о слуховых аппаратах, новых технологиях и здоровье слуха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((article) => (
            <NewsArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
