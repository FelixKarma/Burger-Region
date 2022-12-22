<?php 
$fichier = $_GET["url"]; 
header('Content-Type: application/pdf'); 
header('Content-Disposition: attachment; filename="nom.pdf"');
$pdf = file_put_contents($temp, file_get_contents($fichier));
echo $pdf; 
?> 