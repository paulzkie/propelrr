<?php
include ("connectdb.php");
if($_POST["event"]=="exists"){
    $table = $_POST["table"];
    $col = $_POST["col"];
    $id = $_POST["id"];
    $stmt = $conn->prepare("SELECT * FROM ".$table." where ".$col." = ?");
    $stmt->execute([$id]); 
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if(!$row){
        echo "0";
    }else{
        echo "1";
    }
}
else if($_POST["event"]=="insert"){
    $table = $_POST["table"];
    $full_name = $_POST["full_name"];
    $email =  $_POST["email"];
    $phone =  $_POST["phone"];
    $birthday =  $_POST["birthday"];
    $gender =  $_POST["gender"];
    $address = $_POST["address"];
    $age = $_POST["age"];
    //echo $table.$full_name.$email.$phone.$birthday.$gender;
    try{
        $sql = "INSERT INTO ".$table."(name, age, gender,birthday,address,contact,email) VALUES (?,?,?,?,?,?,?)";
        $stmt= $conn->prepare($sql);
        $stmt->execute([$full_name, $age, $gender, $birthday, $address, $phone,$email]);
        $msg = array('stat' => 1, 'msg' => 'Successfully registered!');
        echo json_encode($msg);
    }
    catch(PDOException $e){
        //echo $sql . "<br>" . $e->getMessage();
        $msg = array('stat' => 0, 'msg' => $sql . "<br>" . $e->getMessage());
        echo json_encode($msg);
    }
}
?>