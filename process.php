<?php

$link = mysql_connect("localhost", "mymaclab", "Welcome08!");
if (!$link) {
    die('{ "error" : "Could not connect to database"}' );
}

// make foo the current db
$db_selected = mysql_select_db('mymaclab_wedding', $link);
if (!$db_selected) {
    die('{ "error" : "Could not connect to database"}' );
}

$sql="INSERT INTO address (name, address, city, state, zipCode, country, email)
    VALUES
    ('$_POST[name]','$_POST[address]','$_POST[city]','$_POST[state]','$_POST[zipCode]','$_POST[country]','$_POST[email]')";

$check = "SELECT *
FROM `address`
WHERE name = '$_POST[name]'
&& city = '$_POST[city]'
&& state = '$_POST[state]'
&& zipCode = '$_POST[zipCode]'
&& country = '$_POST[country]'
&& address = '$_POST[address]'";

$result = mysql_query($check);


if(mysql_num_rows($result)==0){
    mysql_query($sql);
    die('{ "success" : "message sent"}');
}
    die('{ "duplicate" : "message sent"}');

?>
