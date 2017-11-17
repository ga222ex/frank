<?php
include 'ChromePhp.php';

$username = $_GET['username'];

ChromePhp::log('username: '.$_GET['username']);
ChromePhp::log('password: '.$_GET['password']);

function validate_username($username) {
	if (preg_match('/^[a-zA-Z0-9_]{3,16}$/', $username)) {
		return true;
	}
	return false;
}

if (validate_username($username)) {
	echo 'username validated in backend';
} else {
	echo 'username did not pass validation in backend';
}


// $localhost = 'gussi';
// $localhost2 = 'frank';
// $localhost3 = 'localhost';

// if ($host == $localhost || $host == $localhost2 || $host == $localhost3) {
// 	$domain = $localhost;
// 	$user = 'root';
// 	$pass = 'plattfisk';
// 	$db = 'test';
// 	$table = 'usernames';
// 	$col1 = 'username';
// }

?>