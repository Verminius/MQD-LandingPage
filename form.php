<?php

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$mensaje = "Mensaje enviado por " . $nombre . ",\r\n";
$mensaje .= "Enviado desde: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['message'] , " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ncortes@masquediseno.com.co';
$asunto = 'Mensaje desde Sitio Web';

mail($para, $asunto, utf8_decode($mensaje), $header)

header('Location:enviado.html');

?>