<?php
require_once "Bubblesort.php";
class Output_Bubblesort{
	function __construct(){
	}

	function callBubblesort(){
		$classBubblesort = new Bubblesort();
		$arr = array(50, 25, 100, 75, 80, 60, 90); 
		$classBubblesort->bubbleSort($arr);
		$len = count($arr);
		echo "Sorted array: \n";
		for($i = 0; $i < $len; $i++){
		    echo $arr[$i]." ";
		}
	}
}
   $output = new Output_Bubblesort();
   $output->callBubblesort();
?>