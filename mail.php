<?php

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: POST' );
header( 'Access-Control-Allow-Headers: Authorization' );

require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['message']) && isset($_POST['phone'])) {

	$mail = new PHPMailer();
	
	$mail->IsSMTP();                                      // set mailer to use SMTP
	$mail->Host = "ssl://smtp.gmail.com";  // specify main and backup server
	$mail->SMTPAuth = true;     // turn on SMTP authentication
	$mail->Username = "thaismartinsweb@gmail.com";
	$mail->Password = base64_decode('dGhhdGhhMTQ=');
	$mail->Port = '465';
	
	$mail->From = $_POST['mail'];
	$mail->FromName = $_POST['name'];
	$mail->AddAddress('contato@thaismartins.rocks'); //recipient
	$mail->Subject = '[thaismartins.rocks] Contato do site';
	$mail->Body = "Name: " . $_POST['name'] . "\r\n\r\nTelefone: " . stripslashes($_POST['phone']) .  "\r\n\r\nEmail: " . stripslashes($_POST['mail']) . "\r\n\r\nMessage: " . stripslashes($_POST['message']);

	if(!$mail->send()) {
		$data = array('success' => false, 'message' => 'Erro ao enviar: ' . $mail->ErrorInfo);
		echo json_encode($data);
		exit;
	}

	$data = array('success' => true, 'message' => '');
	echo json_encode($data);
}