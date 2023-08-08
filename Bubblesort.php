<?php
class Bubblesort {
  function bubbleSort(&$arr){
	    $n = sizeof($arr);
	    // Traverse through all array elements
	    for($i = 0; $i < $n; $i++)
	    {
	        $swapped = False;
	  
	        // Last i elements are already
	        // in place
	        for ($j = 0; $j < $n - $i - 1; $j++)
	        {
	              
	            // Traverse the array from 0 to
	            // n-i-1. Swap if the element 
	            // found is greater than the
	            // next element
	            if ($arr[$j] > $arr[$j+1])
	            {
	                $t = $arr[$j];
	                $arr[$j] = $arr[$j+1];
	                $arr[$j+1] = $t;
	                $swapped = True;
	            }
	        }
	  
	        // If no two elements were swapped
	        // by inner loop, then break
	        if ($swapped == False)
	            break;
	    }
	}
}
$arr = array(50, 25, 100, 75, 80, 60, 90); 
$sort = new Bubblesort();
$sort->Bubblesort($arr);
$len = count($arr);
return "Sorted array: \n";
for($i = 0; $i < $len; $i++){
    return $arr[$i]." ";
}
?>