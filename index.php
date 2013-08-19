<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <title>Seth & Chloe</title>
        <link rel="stylesheet" href="style/style.css" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script>
        $(function(){
            $('h1').animate({
                opacity:1
            },'slow', function(){
                $('.comingSoon').animate({
                    opacity:1
                },'slow',function(){
                    $('h2').animate({
                        opacity:1
                    },'slow');
                });
            })
        });
        
        </script>
    </head>
    <body>
        <h1>Seth & Chloe</h1>
        <div class="comingSoon"></div>
        <h2>Coming Soon</h2>
        <h3>Give us yo' email, son!</h3>
        <form action="process.php" method="post" target="_blank">
            <input type="text" name ="name" placeholder="Name" /><br />
            <input type="text" name ="address" placeholder="Address"/><br />
            <input type="text" name ="city" placeholder="City"/><br />
            <input type="text" name ="state" placeholder="State"/><br />
            <input type="text" name ="zipCode" placeholder="Zip Code"/><br />
            <input type="text" name ="country" placeholder="Country"/><br />
            <input type="text" name ="email" placeholder="Email"/><br />
            <input type="submit">
        </form>
    </body>
</html>