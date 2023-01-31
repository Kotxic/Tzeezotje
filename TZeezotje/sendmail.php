<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8'
    $mail->setLanguage ('ru', 'phpmailer/language/')
    $mail->IsHtml(true);

    $mail-> setForm('nesterov.d.c@mail.ru', 'Дмитрий Нестеров')
    $mail->addAddress('oleg-aleksandrovich-1995@mail.ru')
    $mail->Subject = "ТЕст"

    if (trim(!empty($_POST['input__FIO']))){
        $body.='<p><strong>ФИО:</strong>' .$_POST['input__FIO'].'</p>';
    }
    if (trim(!empty($_POST['input__FIO']))){
        $body.='<p><strong>ТЕлефон:</strong>' .$_POST['input__tel'].'</p>';
    }
    if (trim(!empty($_POST['input__FIO']))){
        $body.='<p><strong>Дата:</strong>' .$_POST['input__data'].'</p>';
    }
    if (trim(!empty($_POST['input__FIO']))){
        $body.='<p><strong>Количество:</strong>' .$_POST['input__size'].'</p>';
    }

    $mail->body=$body;

    if(!mail->send()){
        $message='Ошибка';
    }
    $response=['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);
    ?>