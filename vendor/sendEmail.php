<?php
    $nev = $_POST["nev"];
    $email = $_POST["email"];
    $targy = $_POST["targy"];
    $uzenet = $_POST["uzenet"];

    require "vendor/autoload.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);

    $mail -> isSMTP();
    $mail ->SMTPAuth = true;

    $mail ->Host = "smtp.gmail.com";
    $mail ->Port = 587;

    /*$mail -> Username = ;
    $mail ->Password = ;*/

    $mail ->setFrom($email, $nev);
    $mail ->addAddress($email, $nev);

    $mail ->Subject = $targy;
    $mail->Body = $uzenet;

    $mail-> send();

    echo "email sent";

?>