<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Fibonacci Sequence</title>
</head>
<body>
<form method="post">
<input type="text" name="number" placeholder="Input a number from 1-20" required>
<input type="submit" name="getNum" value="Submit">
</form>
<?php
if(isset($_POST["getNum"])){
	$number = $_POST["number"];
	if($number > 20 || $number < 1){
		echo "Input numers only from 1 to 20";
	}
	else{
		Fibonacci($number-1);
	}
}
function Fibonacci($n){
    $num1 = 0;
    $num2 = 1;
  
    $counter = 0;
    echo "$num1, $num2";
    while ($counter < $n){
    	//echo $num1;
        $num3 = $num2 + $num1;
        echo ", ";
  		echo "$num3";
        $num1 = $num2;
        $num2 = $num3;
        $counter = $counter + 1;
    }
}
?>
</body>
</html>