/**
 * @module quiz.js
 * @author Nathanaël Grondin
 * @author Mathieu Marcotte
 * @copyright 2018
 */

/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
function validerQuestion(noQuestion, choixUtilisateur)
{
	var isRightAnswer = false;
	if(questionsQuiz[noQuestion][1] == choixUtilisateur)
	{
		isRightAnswer = true;
	}
	return isRightAnswer;
}

/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	return totalPointage ++;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
	ajouterPoint();
	return totalPointage;
}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	var finDeLaPartie = false;
	var finTableauQuestion = MAX_QUESTIONS - 1;
	if(questionCourante == finTableauQuestion){
		finDeLaPartie = true;
	}
	return finDeLaPartie;
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
	return questionCourante ++;
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	var bonneReponse = questionsQuiz[noQuestion][1];
	return bonneReponse;
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix(noQuestion)
{
	var tableauReponse = [
		questionsQuiz[noQuestion][3],
		questionsQuiz[noQuestion][4],
		questionsQuiz[noQuestion][5],
		questionsQuiz[noQuestion][6],
	];
	return tableauReponse;
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
	var afficher = document.getElementById("texteReponse").innerText = obtenirBonneReponse(noQuestion);
	return afficher;
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
	document.getElementById("totalPoints").innerText = totalPointage;
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */
function majTotalQuestion()
{
	document.getElementById("noQuestionCourante").innerText = (questionCourante + 1);
}

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */
function majTexteChoix(noQuestion)
{
	var tableauReponse = obtenirChoix(noQuestion);
	document.getElementById("txtChoix0").innerText = tableauReponse[0];
	document.getElementById("txtChoix1").innerText = tableauReponse[1];
	document.getElementById("txtChoix2").innerText = tableauReponse[2];
	document.getElementById("txtChoix3").innerText = tableauReponse[3];
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	var txt = document.getElementById("texteQuestion");
	txt.innerHTML = questionsQuiz[noQuestion][0];

	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant une le numéro de la question courante.
 */
function majNoQuestionCourant()
{	
	document.getElementById("noQuestionCourante").innerText = (questionCourante + 1);
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
	//Pit-être
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
	var progression = questionCourante / MAX_QUESTIONS * 100;
	document.getElementById("barreProgression").style.width = progression + "%";
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
	majPointage();
	majTotalQuestion();
	majTexteChoix(questionCourante);
	majTexteQuestion(questionCourante);
	majNoQuestionCourant();
	majProgression();
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et activer le bouton Valider.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
	//Peut-être
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	document.getElementById("boiteQuestion").style = "none";
	document.getElementById("resumeQuestion").style = "block";
}

function afficherBoiteMauvaiseReponse(noQuestion)
{
	document.getElementById("texteReponse").innerText = questionsQuiz[noQuestion][POS_REPONSE] + " et non " + questionsQuiz[noQuestion][reponseUtilisateur];
	document.getElementById("lienPlusInfos").href = questionsQuiz[noQuestion][2];
	document.getElementById("lienPlusInfos").innerText = questionsQuiz[noQuestion][2];

	$('#modalReponse').modal();
}