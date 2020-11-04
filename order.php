<?php

if (isset($_SERVER['HTTP_X_REAL_IP']) && filter_var($_SERVER['HTTP_X_REAL_IP'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
    $userIp = $_SERVER['HTTP_X_REAL_IP'];
}
else {
    $userIp = $_SERVER['REMOTE_ADDR'];
}

$userAgent = !empty($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'API';
$referer = !empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : (!empty($_SERVER['HTTP_HOST']) ? ('http://' . $_SERVER['HTTP_HOST']) : '');

$subId1 = !empty($_POST['sub1']) ? $_POST['sub1'] : '';
$subId2 = !empty($_POST['sub2']) ? $_POST['sub2'] : '';
$subId3 = !empty($_POST['sub3']) ? $_POST['sub3'] : '';
$subId4 = !empty($_POST['sub4']) ? $_POST['sub4'] : '';
$subId5 = !empty($_POST['sub5']) ? $_POST['sub5'] : '';

$name = !empty($_POST['name']) ? $_POST['name'] : '';
$phone = !empty($_POST['phone']) ? $_POST['phone'] : '';

$infoData = [
    'country'    => null,               // страна доставки, если не будет передана - будет определена по IP адресу
    'fio'        => $name,              // Имя
    'phone'      => $phone,             // Телефон
    'user_ip'    => $userIp,            // ip пользователя
    'user_agent' => $userAgent,         // UserAgent пользователя
    'order_time' => time(),             // timestamp времени заказа
];


// id потока, например bakm
$flow = 'xa88';

// 5 субайди, например subid1:subid2:subid3:subid4:subid5 (не обязательно)
$subid = implode(':', [$subId1, $subId2, $subId3, $subId4, $subId5]);

// ключ
$key = 'f1f0b6395f4080ca15aa6db0a3cb5660dfa595f8482350';

// домен API
$domain = 'offerrum.com';

$result = file_get_contents(
    "https://api.{$domain}/webmaster/order/?key={$key}&flow={$flow}&subid={$subid}",
    false,
    stream_context_create(
        [
            'http' => [
                'method'  => 'POST',
                'content' => http_build_query($infoData),
                'header'  => "Content-Type: application/x-www-form-urlencoded\r\n" . "Referer: {$referer}\r\n",
            ],
        ]
    )
);

telegram($infoData, $domain);

function telegram($infoData, $domain) {
    $txt = '';

    $token = "691548401:AAE_DhfueMnLsI6KsYgliVXdVjtDebexqSI";
    $chat_id = "-1001491788138";

    $txt .= "[<b>" . 'Домен : ' . "</b> " . $domain . "] \n";

    foreach ($infoData as $key => $value) {
        $txt .= " [<b>" . $key . "</b> " . $value . "] \n";

    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

    if ($sendToTelegram) {
        header('Location: success.htm');
    } else{
        echo 'error telegram message';
    }
}

//function telegram($ip, $country, $site, $name, $phone, $utm)
//{
//    if (!empty($name) && !empty($phone)) {
//        include $_SERVER['DOCUMENT_ROOT'] . '/variable.php';
//        global $notification;
//
//        $token = "592725839:AAEnx9bKdkFaguM7R7BQRx6XoD2_n9NUqJg";
//        $chat_id = "-319587842";
//        //$txt = 'start text';
//        $arr = array(
//            'author' => $notification['author'],
//            'from' => $site,
//            'ip' => $ip,
//            'name' => $name,
//            'phone' => $phone,
//            'country' => $country
//        );
//        if (!empty($utm)) {
//            $arr['UTM`s'] = $utm;
//        }
//
//        foreach ($arr as $key => $value) {
//            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
//        };
//
//        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
//
//        //if($sendToTelegram){
//        //    echo 'success telegram message';
//        //}else{
//        //    echo 'error telegram message';
//        //}
//    }
//}

