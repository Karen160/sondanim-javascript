var nbClick = 0;
var tot = 0;
var tot100 = 0;
var reponseUser;
var form;
var person;
var name;
var score;
var questionDisplay;

//Constante où sont stockés les questions, les réponses et les points pour chaque sondage
const Sondage = {
    questions : [
        {title : "Prêt à démarrer le test ?"},

        {title : "Est ce que Tanjiro Kamado va devenir un démon ?", 
            answers : [
                {choice : "oui, il va devenir un démon", isRight : false},
                {choice : "non, impossible qu'il en devienne un", isRight : true},
            ],
            points : 5,
        },

        {title : "Tanjiro pourra-t-il maitriser le souffle du feu ?", 
            answers : [
                {choice : "oui, puisque son père le maitrisait", isRight : true},
                {choice : "non, c'est mieux le souffle de l'eau", isRight : false},
            ],
            points : 8,
        },

        {title : "Tanjiro va-t-il tuer Mizan ? ", 
            answers : [
                {choice : "oui, il va venger sa famille !", isRight : true},
                {choice : "non, impossible", isRight : false},
            ],
            points : 7,
        },

        {title : "Zenitsu va-t-il prendre conscience de sa force ?", 
            answers : [
                {choice : "oui, il le faut !", isRight : false},
                {choice : "non, il va continuer à dormir", isRight : true},
            ],
            points : 5,
        },

        {title : "Est ce que Zenitsu et Nezuko vont sortir ensemble ?", 
            answers : [
                {choice : "oui, ils feront un beau couple", isRight : false},
                {choice : "non, quel horreur !", isRight : true},
            ],
            points : 5,
        },

        {title : "Nezuko va-t-elle perdre le contrôle et manger des humains ?", 
            answers : [
                {choice : "oui, c'est pas un démon pour rien", isRight : false},
                {choice : "non, elle sait se maitriser", isRight : true},
            ],
            points : 6,
        },

        {title : "Est-ce que Tanjiro va se battre contre ses coéquipiers ?", 
            answers : [
                {choice : "oui, Inosuke va encore le défier", isRight : false},
                {choice : "non, ils sont coéquipiers quand même", isRight : true},
            ],
            points : 4,
        },
    ]
}

//Affiche la pop up
setTimeout(function pop(){
    $('#popUp').css('display','block')
}, 1000);

//Ferme la pop up et affiche le prénom du user
$('.popBouton').click(function(){
    form = document.querySelector("#popUp form");
    person = form.elements.prenom.value; 
    $('#popUp').css('display', 'none');

    name = ("<h4 class='fondDev'>Bonne chance " + person + " !</h4>");
    document.getElementById("userName").innerHTML = name;
});

//Affiche la premère question pour démarrer les sondages
questionDisplay = ('<p style="text-align:center; margin-left:0; margin-right:0; font-size:2em">' + Sondage.questions[0].title + '</p><input onclick="clickButton()" type="button" value="Commencer"></input');
document.getElementById("questions").innerHTML = questionDisplay;

//Lorsque l'user clique sur le bouton "Envoyez"
function clickButton(){
    //Enregistre la réponse
    reponseUser = $('input[name=reponse' + nbClick + ']:checked').val(); 
    nbClick++;

    // Défilement autre question
    if(nbClick<Sondage.questions.length){ 
        $('#questions').css('display', 'none');
        $('#questions').fadeToggle("slow");
        questionDisplay = ('<h3>' + Sondage.questions[nbClick].title + '<span>' + nbClick + '/' + (Sondage.questions.length - 1) + '</span></h3><br><br><label>Choix de réponses possibles :</label> <br><br> <p><input type="radio" name="reponse' + nbClick + '" value="0" checked> ' + Sondage.questions[nbClick].answers[0].choice + '<br><br><input type="radio" name="reponse' + nbClick + '" value="1"> ' + Sondage.questions[nbClick].answers[1].choice + '</p><input onclick="clickButton()" type="button" value="Envoyer"></input');
        document.getElementById("questions").innerHTML = questionDisplay;   
    
    //Affichage du résultat final
    }else{ 
        $('#questions').css('display', 'none');
        $('#resultat').fadeToggle("slow");
        $('#resultat').css('display','block');
    }

    //Calcule des points cummulés
    if(Sondage.questions[nbClick-1].answers[reponseUser].isRight === true){
        tot = tot + (Sondage.questions[nbClick-1].points); 
        name = ("<h4 class='fondDev' style='background-color:green'>Bonne réponse " + person + " ! <br> + " + Sondage.questions[nbClick-1].points + " points");
        document.getElementById("userName").innerHTML = name;
    }else{
        name = ("<h4 class='fondDev' style='background-color:red'>Mauvaise réponse " + person + " ! <br> + 0 point");
        document.getElementById("userName").innerHTML = name;
    }

    //Création de la page des résultats
    if(nbClick>= Sondage.questions.length){
        tot100 = tot*(2.5);
        $("#userName").css("display", "none");
        score = ("<h3>Résultats</h3><h2>Bravo " + person + " ! <br> Vous venez de finir tous les sondages de Demon Slayer.<br><br>Vous avez obtenu<br>" + tot +" points soit un score de " + tot100 + "/100</h2><br>");
        document.getElementById("resultat").innerHTML = score;
    }
}