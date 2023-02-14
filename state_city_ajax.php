<?php

include 'connect.php';

$stateId = isset($_POST['id']) ? $_POST['id'] : 0;
$command = isset($_POST['get']) ? $_POST['get'] : "";

switch ($command) {
    case "city":
        $result1 = "<option>Select City</option>";
        $statement = "SELECT * FROM cities WHERE state_id=" . $stateId;
        $dt = mysqli_query($connect, $statement);

        while ($result = mysqli_fetch_array($dt)) {
            $result1 .= "<option value=" . $result['id'] . ">" . $result['city'] . "</option>";
        }
        echo $result1;
        break;
}

exit();

?>