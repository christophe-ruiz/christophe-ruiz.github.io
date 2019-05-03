<?php

if(isset($_POST['submit'])){
    $moi = "christophe.ruiz@etu.univ-amu.fr"; // mon @mail
    $visiteur = $_POST['mail']; // @mail du visiteur

    $nom = $_POST['nom']; // contient le nom du visiteur

    $objet = utf8_decode($nom . " a envoyé un mail depuis le site!"); // objet de tous les mails
    $objet2 = "Copie de votre message"; // objet du mail retour

    $message = utf8_decode($nom . " vous a écrit:" . "\n\n" . $_POST['message']); // affiche le message écrit
    $message2 = utf8_decode("Voici une copie de votre message " . $nom . "\n\n" . $_POST['message']);

    $entete = utf8_decode("Venant de: " . $visiteur);
    $entete2 = utf8_decode("Venant de: " . $moi);

    if(!isset($visiteur) || trim($nom) == '' || trim($message) == '') //verification que les champs ne sont pas vides
    {
        header('Location: ../html/ChakalFautToutRemplir.html');
    }
    else{
        mail($moi,$objet,$message,$entete); // m'envoie le mail
        mail($visiteur,$objet2,$message2,$entete2); // envoie une copie du mail à l'envoyeur (mail retour)

        header('Location: ../html/mail_sent.html');
    }
}