<?php

$driver = "mysql";
$host = "localhost";
$db_name = 'kirilmats_site';
$db_user = 'admin';
$db_pass = '1111';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
try{
$pdo = new PDO("$driver:host=$host;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);

session_start();
}catch(PDOException $e){
    die("Could not connect to database");
}

// Метод выполнения запроса QUERY (используется только тогда когда в запрос не передают переменных)
// возвращается объект класса PDO STATEMENT, сохраненный в переменную $result
// $result = $pdo->query('SELECT * FROM movies');

// while($row = $result->fetch(PDO::FETCH_ASSOC)){
//     echo ' Movie ' . $row['title'] . ' lasts ' . $row['duration'] . ' minutes <br>' ;
// } // при каждой итерации результат метода fetch помещается в переменную row как ассоциативный массив (ключ - значение) (FETCH_ASSOC)
// в случае если таблица (from db) не будет содержать строк для вывода переменной row будет присвоенно значене false и цикл прервется

// $row = $result->fetchALL(PDO::FETCH_ASSOC);
// echo '<pre>' ;
// var_dump($row);
// } - возвращает сразу все строки таблицы (from db) в виде многомерного массива

// Если в SQL запрос передается хотя бы 1 переменная, то этот запрос в обязательном порядке должен выполнятся только через
// подготовленные выражения
// $result2 = $pdo->query('SELECT * FROM users');
// while($row2 = $result2->fetch(PDO::FETCH_ASSOC)){
//     echo ' ID ' . $row2['id'] . ' login ' . $row2['login'] . ' password ' . $row2['password'] . '<br>' ;
// }
// Именованные плейсхолдеры
$sql = 'SELECT title FROM Movies WHERE duration = :duration';
$stmt = $pdo->prepare($sql);

$params = [':duration' => '125'];
$stmt->execute($params);

$row = $stmt->fetchALL(PDO::FETCH_ASSOC);

// Позиционные плейсхолдеры
$sql_pos = 'SELECT title FROM Movies WHERE duration = ?';
$stmt_pos = $pdo->prepare($sql_pos);

$stmt_pos->execute(['141']);

$row_pos = $stmt_pos->fetchALL(PDO::FETCH_ASSOC);

//XSS Protection - Против межсайтового скриптинга
$user_input = '<script>Some magic here</script>';
$safe_input = htmlentities($user_input);
//echo $safe_input;