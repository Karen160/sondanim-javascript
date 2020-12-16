<?php include('inc/head.php'); ?>
    <title>Tous les sondages sur Demon Slayer</title>
    <meta name="description" content="Répondez à ces sondages sur Demon Slayer pour gagner des points">
    </head>
<body onload="pop()">
    <header>
        <h1>Sond'Anim</h1>
        <?php include('inc/nav.php'); ?>
    </header>
    <main>
        <div id="popUp">
            <form>
                <h2>Quel est ton prénom ?</h2><br><br>
                <input type="text" name="prenom" placeholder="Prénom" id="prenomPop"><br>
                <input type="button" value="Envoyez" class="popBouton">
            </form>
        </div>
        <section demonTanjiro>
            <img class="fond" src="img/demonSlayer/clan.gif" alt="Les pourfendeurs de démon en train de courir">
            <h2 class="fondDev">Sondage Demon Slayer</h2>
            <div id="userName"></div>
            
            <form id="questions">
            </form>

            <form id="resultat">
            </form>
        </section>
    </main>
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/TweenMax.min.js"></script>
    <script type="text/javascript" src="js/monscript.js"></script> 
<?php include('inc/footer.php'); ?>