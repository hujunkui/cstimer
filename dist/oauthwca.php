<?php

require 'WcaOauth.php';

$applicationId = '5invv3kNxqo2R9GFgtbLPJGulEaMgJtI6m9ELqzCxK8';
$applicationSecret = 'TK5txx3z6J84NoHR6PogyBbtmI_I-eDAm2qZWp71sm0';
$csTimerTokenSalt = '0000000000000000000000000000000000000000000000000000000000000000';

$validUrlRe = '/^(https?:\/\/([^\/]*\.)?hjk666\.cn\/(new\/|src\/)?(timer\.php)?)(\?.*)?$/i';
$matches = array();

if (preg_match($validUrlRe, $_SERVER['HTTP_REFERER'], $matches) == 0) {
	exit;
}
$timerUrl = $matches[1];

$wca = new WcaOauth(array(
	'applicationId' => $applicationId,
	'applicationSecret' => $applicationSecret,
	'redirectUri' => $timerUrl,
	'scope' => 'public'
));

if(isset($_REQUEST["code"]) && !empty($_REQUEST["code"])) {
	try {
		$wca->fetchAccessToken($_REQUEST['code']);
		$user = $wca->getUser();
		print json_encode(array(
			'access_token' => $wca->getAccessToken(),
			'wca_me' => $user,
			'cstimer_token' => hash('sha256', $csTimerTokenSalt . $user->id)
		));
	} catch (Exception $e) {
		echo $e->getMessage();
		exit;
	}
}
