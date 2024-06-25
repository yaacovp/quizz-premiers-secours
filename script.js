document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    const myQuestions = [
        {
            question: "Quelle est la première chose à faire en arrivant sur une scène d'accident ?",
            answers: {
                a: "Appeler les secours",
                b: "Vérifier la sécurité de la scène",
                c: "Commencer la réanimation"
            },
            correctAnswer: "b",
            explanation: "La première chose à faire est de vérifier la sécurité de la scène pour éviter tout danger supplémentaire."
        },
        {
            question: "Combien de compressions thoraciques et de ventilations constituent un cycle de massage cardiaque pour un adulte ?",
            answers: {
                a: "15 compressions et 2 ventilations",
                b: "30 compressions et 2 ventilations",
                c: "20 compressions et 2 ventilations"
            },
            correctAnswer: "b",
            explanation: "Pour un adulte, il faut effectuer 30 compressions suivies de 2 ventilations."
        },
        {
            question: "Que faut-il faire en cas de brûlure légère ?",
            answers: {
                a: "Appliquer de la glace",
                b: "Rincer à l'eau froide",
                c: "Appliquer du beurre"
            },
            correctAnswer: "b",
            explanation: "Rincer à l'eau froide permet de réduire la température de la brûlure et de soulager la douleur."
        },
        {
            question: "Quel est le numéro d'urgence pour les secours en France ?",
            answers: {
                a: "112",
                b: "911",
                c: "999"
            },
            correctAnswer: "a",
            explanation: "En France, le numéro d'urgence est le 112."
        },
        {
            question: "Quelle est la position correcte pour une personne inconsciente mais qui respire ?",
            answers: {
                a: "Position assise",
                b: "Position latérale de sécurité",
                c: "Position sur le dos"
            },
            correctAnswer: "b",
            explanation: "La position latérale de sécurité permet de maintenir les voies respiratoires ouvertes."
        },
        {
            question: "Que doit-on faire en cas de saignement abondant ?",
            answers: {
                a: "Appliquer un garrot immédiatement",
                b: "Comprimer la plaie avec un linge propre",
                c: "Laisser saigner pour nettoyer la plaie"
            },
            correctAnswer: "b",
            explanation: "Comprimer la plaie permet de réduire le saignement et de prévenir une perte de sang importante."
        },
        {
            question: "Quelle est la fréquence de compression thoracique recommandée pour un adulte lors d'un massage cardiaque' ?",
            answers: {
                a: "60 compressions par minute",
                b: "100-120 compressions par minute",
                c: "140 compressions par minute"
            },
            correctAnswer: "b",
            explanation: "La fréquence recommandée est de 100 à 120 compressions par minute pour une réanimation efficace."
        },
        {
            question: "Quel est le principal symptôme d'une crise cardiaque ?",
            answers: {
                a: "Douleur à l'abdomen",
                b: "Douleur à la poitrine",
                c: "Douleur au pied"
            },
            correctAnswer: "b",
            explanation: "La douleur à la poitrine est le principal symptôme d'une crise cardiaque."
        },
        {
            question: "Que faire si une personne est en train de s'étouffer et ne peut pas parler ?",
            answers: {
                a: "Donner des tapes dans le dos",
                b: "Pratiquer la manœuvre de Heimlich",
                c: "Donner de l'eau à boire"
            },
            correctAnswer: "b",
            explanation: "La manœuvre de Heimlich permet de dégager les voies respiratoires."
        },
        {
            question: "Quel est le premier signe d'un AVC (Accident Vasculaire Cérébral) ?",
            answers: {
                a: "Douleur dans les jambes",
                b: "Faiblesse soudaine d'un côté du corps",
                c: "Douleur à la poitrine"
            },
            correctAnswer: "b",
            explanation: "Une faiblesse soudaine d'un côté du corps est un signe précoce d'AVC."
        },
        {
            question: "Que doit-on faire en cas de fracture suspectée ?",
            answers: {
                a: "Mobiliser la partie blessée pour vérifier",
                b: "Immobiliser la partie blessée",
                c: "Appliquer de la chaleur"
            },
            correctAnswer: "b",
            explanation: "Il faut immobiliser la partie blessée pour éviter d'aggraver la fracture."
        },
        {
            question: "Quel est le meilleur moyen de vérifier la respiration d'une personne inconsciente ?",
            answers: {
                a: "Écouter la respiration",
                b: "Mettre un doigt sous son nez",
                c: "Observer si la poitrine se soulève"
            },
            correctAnswer: "c",
            explanation: "Observer si la poitrine se soulève est le moyen le plus fiable de vérifier la respiration."
        },
        {
            question: "Que faire si vous êtes témoin d'une crise d'épilepsie ?",
            answers: {
                a: "Immobiliser la personne",
                b: "Mettre quelque chose dans sa bouche",
                c: "Protéger la personne des objets qui l'entourent"
            },
            correctAnswer: "c",
            explanation: "Il faut protéger la personne des objets qui l'entourent pour éviter les blessures."
        },
        {
            question: "Quelle est la cause la plus fréquente d'arrêt cardiaque soudain chez l'adulte ?",
            answers: {
                a: "Asphyxie",
                b: "Problèmes cardiaques",
                c: "Traumatisme crânien"
            },
            correctAnswer: "b",
            explanation: "Les problèmes cardiaques sont la cause la plus fréquente d'arrêt cardiaque soudain chez l'adulte."
        },
        {
            question: "Que doit-on faire en cas de brûlure chimique ?",
            answers: {
                a: "Appliquer de l'huile",
                b: "Rincer abondamment à l'eau",
                c: "Couvrir avec un pansement sec"
            },
            correctAnswer: "b",
            explanation: "Il faut rincer abondamment à l'eau pour éliminer le produit chimique de la peau."
        },
        {
            question: "Que signifie RCP ?",
            answers: {
                a: "Réanimation Cardio-Pulmonaire",
                b: "Respiration Cardio-Pulmonaire",
                c: "Réanimation Cardio-Physiologique"
            },
            correctAnswer: "a",
            explanation: "RCP signifie Réanimation Cardio-Pulmonaire."
        },
        {
            question: "Que doit-on faire en cas de suspicion d'intoxication alimentaire ?",
            answers: {
                a: "Faire vomir la personne",
                b: "Appeler les secours",
                c: "Donner du lait à boire"
            },
            correctAnswer: "b",
            explanation: "Il faut appeler les secours pour obtenir des instructions spécifiques et des soins médicaux."
        },
        {
            question: "Quelle est la durée maximale pour laquelle vous devez appliquer de la pression directe sur une plaie saignante ?",
            answers: {
                a: "5 minutes",
                b: "Jusqu'à ce que le saignement s'arrête",
                c: "10 minutes"
            },
            correctAnswer: "b",
            explanation: "Vous devez appliquer de la pression jusqu'à ce que le saignement s'arrête pour éviter une perte de sang importante."
        },
        {
            question: "Que doit-on faire en cas d'entorse ?",
            answers: {
                a: "Appliquer de la chaleur",
                b: "Appliquer de la glace et immobiliser",
                c: "Faire des exercices pour réduire la douleur"
            },
            correctAnswer: "b",
            explanation: "Il faut appliquer de la glace pour réduire l'enflure et immobiliser pour éviter d'aggraver l'entorse."
        },
        {
            question: "Que faire en cas de piqûre de guêpe ?",
            answers: {
                a: "Retirer le dard avec une pince",
                b: "Appliquer de l'ammoniaque",
                c: "Surélever la zone piquée"
            },
            correctAnswer: "a",
            explanation: "Il faut retirer le dard avec une pince pour éviter que le venin ne continue à se répandre."
        },
        {
            question: "Que faut-il faire en cas de coup de chaleur ?",
            answers: {
                a: "Donner à boire de l'eau froide",
                b: "Couvrir la personne avec une couverture",
                c: "Laisser la personne se reposer"
            },
            correctAnswer: "a",
            explanation: "Donner à boire de l'eau froide aide à réduire la température corporelle en cas de coup de chaleur."
        },
        {
            question: "Que doit-on faire en cas de morsure de chien ?",
            answers: {
                a: "Laver la plaie à l'eau et au savon",
                b: "Appliquer un garrot",
                c: "Ne rien faire"
            },
            correctAnswer: "a",
            explanation: "Il faut laver la plaie à l'eau et au savon pour prévenir l'infection."
        },
        {
            question: "Quel est le premier réflexe en cas de choc électrique ?",
            answers: {
                a: "Toucher la personne pour la réconforter",
                b: "Couper le courant",
                c: "Appeler les secours"
            },
            correctAnswer: "b",
            explanation: "La première chose à faire est de couper le courant pour éviter tout danger supplémentaire."
        },
        {
            question: "Comment traiter une plaie ouverte ?",
            answers: {
                a: "Appliquer de l'alcool",
                b: "Nettoyer avec de l'eau et du savon",
                c: "Appliquer une pommade"
            },
            correctAnswer: "b",
            explanation: "Il faut nettoyer la plaie avec de l'eau et du savon pour prévenir l'infection."
        },
        {
            question: "Quelle est la bonne réaction en cas d'empoisonnement ?",
            answers: {
                a: "Faire vomir la personne",
                b: "Appeler un centre antipoison",
                c: "Donner du lait"
            },
            correctAnswer: "b",
            explanation: "Il faut appeler un centre antipoison pour obtenir des instructions spécifiques et des soins médicaux."
        },
        {
            question: "Que doit-on faire en cas de crampe musculaire ?",
            answers: {
                a: "Masser le muscle",
                b: "Appliquer de la chaleur",
                c: "Étirer doucement le muscle"
            },
            correctAnswer: "c",
            explanation: "Il faut étirer doucement le muscle pour soulager la crampe."
        },
        {
            question: "Quelle est la priorité en cas de blessure à la tête ?",
            answers: {
                a: "Faire boire de l'eau",
                b: "Surveiller l'état de conscience",
                c: "Appliquer une compresse froide"
            },
            correctAnswer: "b",
            explanation: "Il faut surveiller l'état de conscience pour détecter tout signe de traumatisme crânien."
        },
        {
            question: "Comment réagir en cas de piqûre d'abeille ?",
            answers: {
                a: "Appliquer de la glace",
                b: "Enlever le dard avec une carte",
                c: "Presser pour faire sortir le venin"
            },
            correctAnswer: "b",
            explanation: "Il faut enlever le dard avec une carte pour éviter de presser le venin plus profondément."
        },
        {
            question: "Que faire en cas d'évanouissement ?",
            answers: {
                a: "Secouer la personne",
                b: "Allonger la personne et surélever ses jambes",
                c: "Donner à boire"
            },
            correctAnswer: "b",
            explanation: "Il faut allonger la personne et surélever ses jambes pour favoriser le retour du sang au cerveau."
        }
    ];


    function getRandomQuestions(questions, num) {
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function buildQuiz() {
        const output = [];
        const selectedQuestions = getRandomQuestions(myQuestions, 10);

        selectedQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">
                    <span id="indicator${questionNumber}" class="indicator"></span>
                    ${questionNumber + 1}. ${currentQuestion.question}
                </div>
                <div class="answers">${answers.join('')}</div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        answerContainers.forEach((answerContainer, questionNumber) => {
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const indicator = document.getElementById(`indicator${questionNumber}`);
            const currentQuestion = myQuestions[questionNumber];

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                indicator.textContent = '✔';
                indicator.style.color = 'green';
                answerContainer.parentNode.classList.add('correct');
            } else {
                indicator.textContent = '✖';
                indicator.style.color = 'red';
                answerContainer.parentNode.classList.add('incorrect');
            }

            for (let letter in currentQuestion.answers) {
                const answerElement = answerContainer.querySelector(`input[value=${letter}]`).parentNode;
                if (letter === currentQuestion.correctAnswer) {
                    answerElement.style.color = 'green';
                    const tooltip = document.createElement('span');
                    tooltip.classList.add('tooltip', 'show-tooltip');
                    tooltip.innerHTML = `<span class="tooltip-icon">?</span><span class="tooltip-text">${currentQuestion.explanation}</span>`;
                    answerElement.appendChild(tooltip);
                } else {
                    answerElement.style.color = 'red';
                }
            }
        });

        resultsContainer.innerHTML = `${numCorrect} sur ${answerContainers.length} correct`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});