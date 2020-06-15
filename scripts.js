const questions = [
    {
        question: `На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?`,
        answers: {
            'right': `6,3 млн рублей`,
            'wrong1': `1 млн рублей`,
            'wrong2': `50 млн рублей`,
            'wrong3': `Не оштрафовал, а объявил выговор`
        },
        descriptions: {
            0: `<span class="for-bold">Верно.</span> Проверка <a href='https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target="_blank">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
            1: `<span class="for-bold">Нет, немного больше: 6,3 млн рублей.</span> Проверка <a href='https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target="_blank">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
            2: `<span class="for-bold">Нет, гораздо меньше: 6,3 млн рублей.</span> Проверка <a href='https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target="_blank">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
            3: `<span class="for-bold">Нет, всё же оштрафовал на 6,3 млн рублей.</span> Проверка <a href='https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target="_blank">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`
        }
    },
    {
        question: `Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?`,
        answers: {
            'right': `Она оказалась огнеопасной`,
            'wrong1': `Дети играли ею в футбол и разбивали окна`,
            'wrong2': `Она постоянно скатывалась с полок`,
            'wrong3': `Её никто не покупал`
        },
        descriptions: {
            0: `Да, бутылка благодаря своей форме призмы фокусировала свет так, что он <a href='https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target="_blank">воспламенял</a> окружающие предметы.`,
            1: `Нет, дело в её форме призмы — она фокусировала свет так, что он <a href='https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target="_blank">воспламенял</a> окружающие предметы.`,
            2: `Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так, что он <a href='https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target="_blank"> воспламенял </a> окружающие предметы.`,
            3: `Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так, что он <a href='https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target="_blank"> воспламенял </a> окружающие предметы..`
        }
    },
    {
        question: `Сколько денег потеряли основатели WhatsApp после ухода из  Facebook ?`,
        answers: {
            'right': `Они лишились акций на $1, 3 млрд`,
            'wrong1': `Они не только лишились акций на $1, 3 млрд и выплатили штрафы на $100 млн`,
            'wrong2': `Ничего не лишились, к моменту ухода они уже получили всё вознаграждение`,
            'wrong3': `Ничего не лишились, но получили иски за нарушение коммерческой тайны`
        },
        descriptions: {
            0: `Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href='https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target="_blank"> конфликта </a> с руководством.`,
            1: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href='https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target="_blank"> конфликта </a> с руководством, но штрафы никто не выплачивал.`,
            2: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href='https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target="_blank"> конфликта </a> с руководством.`,
            3: `Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href='https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target="_blank"> конфликта </a> с руководством — но коммерческую тайну пока никто не нарушил.`
        }
    },
    {
        question: `В какой скандал угодила компания «Газелькин» в июне 2018 года ?`,
        answers: {
            'right': `Предложила клиентам вызвать «водителей - славян» за дополнительную плату`,
            'wrong1': `Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»`,
            'wrong2': `Грузчики разбили антикварный шкаф стоимостью 163 млн рублей`,
            'wrong3': `Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ`
        },
        descriptions: {
            0: `Компания дала клиентам <a href='https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target="_blank"> возможность </a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
            1: `Было пару раз, <a href='https://twitter.com/foolsbridge/status/986935782287003649' target="_blank"> но не в июне </a>. На самом деле компания дала клиентам <a href='https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target="_blank"> возможность </a> выбрать водителя славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык».`,
            2: `О таком случае не сообщалось, но зато компания дала клиентам <a href='https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target="_blank"> возможность </a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
            3: `О таком случае не сообщалось, но зато компания дала клиентам <a href='https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target="_blank"> возможность </a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`
        }
    },
    {
        question: `Простой вопрос для передышки.До какого порога правительство собирается повысить НДС`,
        answers: {
            'right': `20 %`,
            'wrong1': `19 %`,
            'wrong2': `21 %`,
            'wrong3': `Никто не собирается повышать НДС, зато повысят НДФЛ`
        },
        descriptions: {
            0: `Да, НДС <a href='https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target="_blank"> собираются </a> повысить с 18% до 20%. Кстати, <a href='https://vc.ru/38891-nds-20' target="_blank"> вот чем </a> это грозит`,
            1: `Нет, всё же именно НДС <a href='https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target="_blank"> собираются </a> повысить с 18% до 20%. Кстати, <a href='https://vc.ru/38891-nds-20' target="_blank"> вот чем </a> это грозит`,
            2: `Нет, НДС <a href='https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target="_blank"> собираются </a> повысить с 18% до 20%. Кстати, <a href='https://vc.ru/38891-nds-20' target="_blank"> вот чем </a> это грозит`,
            3: `Нет, всё же именно НДС <a href='https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target="_blank"> собираются </a> повысить с 18% до 20%. Кстати, <a href='https://vc.ru/38891-nds-20' target="_blank"> вот чем </a> это грозит`
        }
    },
    {
        question: `Чем займётся Герман Клименко после ухода с поста советника президента по интернету ?`,
        answers: {
            'right': `Проектами в сфере цифровой медицины`,
            'wrong1': `Станет разрабатывать собственный мессенджер`,
            'wrong2': `Будет советником по медицине`,
            'wrong3': `Отправится в кругосветное путешествие`
        },
        descriptions: {
            0: `<a href='https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target="_blank"> Верно </a>`,
            1: `Это вполне возможно, но сперва он <a href='https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target="_blank"> планирует </a> заниматься проектами в сфере цифровой медицины.`,
            2: `Нет, он <a href='https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target="_blank"> планирует </a> заниматься собственными проектами в сфере цифровой медицины.`,
            3: `Он <a href='https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target="_blank"> планирует </a> заниматься собственными проектами в сфере цифровой медицины.`
        }
    },
    {
        question: `Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс - дизайна»?`,
        answers: {
            'right': `Экспресс - дизайн не логотипов, а предметов — за 300 тысяч рублей`,
            'wrong1': `Сервис экспресс - маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог`,
            'wrong2': `Экспресс - доставку обедов в офис`,
            'wrong3': `Создание визиток за 50 тысяч рублей`
        },
        descriptions: {
            0: `Да, и заказчик точно так же <a href='https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target="_blank"> обязан </a> принять первый предложенный вариант.`,
            1: `Речь об экспресс-дизайне предметов, и заказчик точно так же <a href='https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target="_blank"> обязан </a> принять первый предложенный вариант.`,
            2: `Речь об экспресс-дизайне предметов, и заказчик точно так же <a href='https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target="_blank"> обязан </a> принять первый предложенный вариант.`,
            3: `Речь об экспресс-дизайне предметов, и заказчик точно так же <a href='https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target="_blank"> обязан </a> принять первый предложенный вариант`
        }
    },
    {
        question: `Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ - 2018 ?`,
        answers: {
            'right': `Это стыдно — нанимать людей, которыми нужно управлять`,
            'wrong1': `Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»`,
            'wrong2': `Чтобы быть предпринимателем, не нужно никакого образования`,
            'wrong3': `Предприниматели должны быть звёздами и элитой общества`
        },
        descriptions: {
            0: `Вопрос был с подвохом: все эти фразы прозвучали в <a href='https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target="_blank"> интервью </a>.`,
            1: `Вопрос был с подвохом: все эти фразы прозвучали в <a href='https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target="_blank"> интервью </a>.`,
            2: `Вопрос был с подвохом: все эти фразы прозвучали в <a href='https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target="_blank"> интервью </a>.`,
            3: `Вопрос был с подвохом: все эти фразы прозвучали в <a href='https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target="_blank"> интервью </a>.`
        }
    },
];

const resultInfo = [
    {
        src: "./images/b2c01776f32ae3e8e501fc75f2401e8b52875d5a.png",
        description: "<h1>Мне больше<br> интересен футбол</h1>",
    },
    {
        src: "./images/814ab3c95e53dae4482929a645e19b7edb77b90d.png",
        description: "<h1>Читаю vc.ru <br>с экрана попутчика <br>в метро</h1>"
    },
    {
        src: "./images/b2c01776f32ae3e8e501fc75f2401e8b52875d5a.png",
        description: "<h1>Бизнес это интересно,<br>но где взять столько <br>времени?</h1>"
    },
    {
        src: "./images/260dd053cb23f9f75b60a4cf9a7ae60dbe279235.png",
        description: "<h1>Читаю vc.ru каждый<br> день, но работать <br>тоже нужно</h1>"
    },
    {
        src: "./images/a68747cce3712f750b40886842a8593a59c460ea.png",
        description: "<h1>Я работаю <br>в редакции vc.ru</h1>"
    }
]

let answerCounter = {
    currentQuestion: 1,
    rightAnswersCount: 0
}

const checkAnswer = () => {
    return document.querySelectorAll('.questions-block p.main-p-1')
        .forEach((elem, index) => {
            elem.addEventListener('click', processAnswer)
        })
}

const findQuestionAnswer = (answer, currentQuestion) => {
    const finder = questions.map((ques, index) => {
        if (ques.answers.right === answer && currentQuestion === index + 1) {
            return {
                isRight: true,
                question: ques.question,
                title: answer,
                desc: ques.descriptions[`${Object.values(ques.answers).indexOf(answer)}`]
            }
        } else if (currentQuestion === index + 1 && Object.values(ques.answers).includes(answer)) {
            return {
                isRight: false,
                question: ques.question,
                title: answer,
                desc: ques.descriptions[`${Object.values(ques.answers).indexOf(answer)}`]
            }
        }
    })
    return finder[currentQuestion - 1];
}

const processAnswer = e => {
    const rightAnswer = findQuestionAnswer(e.target.textContent.trim(), answerCounter.currentQuestion);
    setAnswerHTML(rightAnswer)
    updateCounter(rightAnswer)
}

const setAnswerHTML = answer => {
    document.querySelector("#second-block").style.display = "none";
    document.querySelector("#third-block").style.display = "flex";
    document.querySelector('.answer-block p.text-2').innerHTML = answer.desc;
    document.querySelector('.answer-block .main-h1-2').innerHTML = answer.question;
    document.querySelector('.answer-block p.main-p-2').innerHTML = answer.title;
    document.querySelector('.answer-block p.main-p-2').style.color = answer.isRight ? '#43a457' : '#E25A76';
    document.querySelector('.answer-block p.main-p-2').style.borderColor = answer.isRight ? '#43a457' : '#E25A76';
}

const setQuestionHTML = currentQuestion => {
    document.querySelector("#second-block").style.display = "block";
    document.querySelector("#third-block").style.display = "none";
    document.querySelector('.questions-block h1').innerHTML = currentQuestion.question;
    updateAnswers(currentQuestion.answers);
}

const showSingleResult = (index,needClass,imgWidth,imgHeight)=>{
    document.querySelector("#forth-block").style.display = "block";
    document.querySelector("#third-block").style.display = "none";
    document.querySelector('.football').innerHTML = resultInfo[index].description
    document.querySelector('.photo img').src = resultInfo[index].src
    document.querySelector('.thr4-8 p').textContent = `${answerCounter.rightAnswersCount} ` + document.querySelector('.thr4-8 p').textContent.split(" ").slice(1).join(" ")
    document.querySelector('.photo').classList.forEach(el => {
        if (el !== "photo") {
            document.querySelector('.photo').classList.remove(el)
        }
    })
    document.querySelector('.photo').classList.add(needClass)
    document.querySelector('.photo img').style.width = imgWidth
    document.querySelector('.photo img').style.height = imgHeight
}

const showResult = () => {
    document.querySelector("#forth-block").style.display = "block";
    document.querySelector("#third-block").style.display = "none";
    switch (answerCounter.rightAnswersCount) {
        case 0:
            showSingleResult(0,'firstImage','522.97px','436.67px')
            break;
        case 1:
            showSingleResult(0,'firstImage','522.97px','436.67px')
            break;
        case 2:
            showSingleResult(0,'firstImage','522.97px','436.67px')
            break;
        case 3:
            showSingleResult(1,'secondImage','320.29px','382.06px')
            break;
        case 4:
            showSingleResult(1,'secondImage','320.29px','382.06px')
            break;
        case 5:
            showSingleResult(2,'thirdImage','405.57px','262.38px')
            break;
        case 6:
            showSingleResult(2,'thirdImage','405.57px','262.38px')
            break;
        case 7:
            showSingleResult(3,'forthImage','390.8px','488.91px')
            break;
        case 8:
            showSingleResult(4,'fivethImage','592.23px','429.89pxx')
            break;
    }
}

const updateAnswers = answers => {
    document.querySelectorAll('.answers-block p').forEach((elem, index) => elem.textContent = Object.values(answers)[index])
}

const updateCounter = answer => {
    if (answer.isRight) {
        answerCounter.rightAnswersCount++
    }

    answerCounter.currentQuestion++
}

const processNextQuestion = () => {
    document.querySelector('.continue').addEventListener('click', getNextQuestion);
}

const processAgain = () => {
    document.querySelector('.again').addEventListener('click', goAgain);
}

const getNextQuestion = e => {
    if (answerCounter.currentQuestion <= questions.length) {
        setCounter(answerCounter.currentQuestion)
        setQuestionHTML(questions[answerCounter.currentQuestion - 1])
    } else {
        showResult()
    }
}

const goAgain = () => {
    document.querySelector("#first-block").style.display = "block";
    document.querySelector("#forth-block").style.display = "none";
    answerCounter.currentQuestion = 1;
    answerCounter.rightAnswersCount = 0
    setCounter(answerCounter.currentQuestion)

}

const setCounter = questionCounter => {
    document.querySelectorAll('.current-question').forEach(elem => elem.textContent = questionCounter);
}

processNextQuestion();
checkAnswer();
processAgain();

document.querySelector(".start").addEventListener('click', (e) => {
    document.querySelector("#first-block").style.display = "none";
    document.querySelector("#second-block").style.display = "flex";
    getNextQuestion()
})