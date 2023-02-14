<?php
include 'connect.php';
    $sql = "SELECT * FROM cities";
    $query = mysqli_query($connect, $sql);
    $dt = "";
    echo "<option>Select state</option>";
    while($row=mysqli_fetch_assoc($query)){
    $dt .= "<option value=".$row['id'].">".$row['city']."</option>";
    }

    echo $dt;

?>