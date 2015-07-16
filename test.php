<?php
/**
 * Created by PhpStorm.
 * User: Ahmed
 * Date: 13/07/15
 * Time: 22:28
 */
header('Content-Type: application/json');

$quotes_array = array("quotes"=> array(
                                array("naam"=>"X", "Quote"=>"Ik ben Wijnand", "date"=>date("Y-m-d H:i:s")),
                                array("naam"=>"TC", "Quote"=>"Ik ben Karlo", "date"=>date("Y-m-d H:i:s")),
                                array("naam"=>"TT", "Quote"=>"Ik ben Thomas", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"X", "Quote"=>"Ik ben Wijnand", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"TC", "Quote"=>"Ik ben Karlo", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"TT", "Quote"=>"Ik ben Thomas", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"X", "Quote"=>"Ik ben Wijnand", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"TC", "Quote"=>"Ik ben Karlo", "date"=>date("Y-m-d H:i:s")),
    array("naam"=>"TT", "Quote"=>"Ik ben Thomas", "date"=>date("Y-m-d H:i:s"))


)
);

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    echo file_get_contents("http://toaster.vdeute.com:8000/quotes?q=".urlencode($_POST['zoekwoord']));
}
else {
    echo file_get_contents("http://toaster.vdeute.com:8000/quotes");
}
//echo json_encode($quotes_array);

?>