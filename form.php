<?php

    // Тема сообщения
    $subject = 'Заявка с лендинга "Часы"';

    // Адрес отправителя
    $sender = 'opt@worldwideshop.ru';

    // Адрес получателя
    $to = 'Test@mail.com';

    // Получаемые поля
    $fields = array(
        'name' => 'Имя',
        'phone' => 'Телефон',
        'utm_source' => 'utm_source',
        'utm_medium' => 'utm_medium',
        'utm_term' => 'utm_term',
        'utm_content' => 'utm_content',
        'utm_campaign' => 'utm_campaign',
    );



    // Далее и ниже идёт сам код отправки

    header('Content-Type: text/html; charset=utf-8');

    $text = '';
	foreach ($_POST as $key => $value) {
		if (isset($fields[$key])) {
            $text .= '<b>' . $fields[$key] . '</b>: ' . $value . '<br>';
		}
	}
    $text = trim($text);
	if ($text === '') {
	    die('Не заполнены поля');
    }

    $subject = trim($subject);
    if ($subject === '') {
        $subject = 'Заявка с лендинга';
    }

    $sender = trim($sender);
    if ($sender === '') {
        $sender = $subject;
    }

	$to = trim($to);
    if ($to === '') {
        die('Не указан получатель');
    }

    $headers = '';
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: ' . $sender . "\r\n";

    if(mail($to, $subject, $text, $headers)) {
        die('Успешно отработано');
    } else {
        die('Ошибка сервера при отправке');
    }
