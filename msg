<?php
include 'connect.php';
?>
<style></style>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <title>Employee details</title>
</head>

<body class="center3">
    <p>
        <a class="text2" href="display_form.php">Display Data</a>
        &nbsp;&nbsp;&nbsp;
        <a class="text2" href="search.php">Search Data</a>
        &nbsp;&nbsp;&nbsp;
        <a class="text2" href="soft_delete.php">Soft Delete</a>
    </p>
    <h2><u class="text2">Employee Details Insert Using Ajax</u></h2>
    <p class="error" id="msg"></p>
    <form id="userForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <table>
            <tr>
                <td>First Name</td>
                <td><input type="text" name="fname" id="fname" <?php echo $fname; ?>><span class="error">* <?php echo $fname; ?></span>
                </td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td><input type="text" name="lname" id="lname"><span class="error">* <?php echo $lname; ?></span></td>
            </tr>
            <tr>
                <td>Email ID</td>
                <td><input type="email" name="email" id="email"><span class="error">* <?php echo $email; ?></span></td>
            </tr>
            <tr>
                <td>Mobile</td>
                <td><input type="mobile" name="mobile" id="mobile"><span class="error">* <?php echo $mobile; ?></span></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><textarea name="address" col="30" rows="4" id="address"></textarea>
                    <span class="error">* <?php echo $address; ?></span>
                </td>
            </tr>
            <tr>
                <td>gender</td>
                <td><input type="radio" name="gender" value="male" id="gender[]">Male
                    <input type="radio" name="gender" value="female" id="gender[]">Female
                    <input type="radio" name="gender" value="other" id="gender[]">Other
                    <span class="error">* <?php echo $gender; ?></span>
                </td>
            </tr>
            <tr>
                <td>Hobbies</td>
                <td><input type="checkbox" name="hobbie[]" value="cricket" id="hobbie1">Cricket
                    <input type="checkbox" name="hobbie[]" value="football" id="hobbie2">Football
                    <input type="checkbox" name="hobbie[]" value="reading" id="hobbie3">Reading
                    <input type="checkbox" name="hobbie[]" value="programming" id="hobbie4">Programming
                    <span class="error">* <?php echo $alldata; ?></span>
                </td>
            </tr>
            <tr>
                <td>Designation</td>
                <td>
                    <?php
                    $sql_desig = "SELECT * FROM `department`";
                    ?>

                    <select name="designation" id="designation">
                        <option selected disabled hidden>Select designation</option>
                        <?php
                        $query = mysqli_query($connect, $sql_desig);
                        while ($row = mysqli_fetch_array($query)) { ?>
                            <option value="<?php echo $row['id']; ?>"><?php echo $row['designation']; ?></option>
                        <?php
                        } ?>
                    </select>
                    <span class="error">* <?php echo $designation; ?></span>
                </td>
            <tr>
                <td>Salary</td>
                <td><input type="text" name="salary" id="salary"><span class="error">* <?php echo $salary; ?></span></td>
            </tr>
            <tr>
            <tr>
                <td>State</td>
                <td>
                    <select name="state" id="state">
                        <option selected disabled hidden><a class="text2">Select state</a></option>
                    </select>
                    <span class="error">* <?php echo $state; ?></span>
                </td>
            </tr>
            <tr>
                <td>City</td>
                <td>
                    <select id="city" name="city" id="city">
                        <option selected disabled hidden><a class="text2">Select City</a></option>
                    </select>
                    <span class="error">* <?php echo $city; ?></span>
                </td>
            </tr>
            <tr>
                <td>Joining Date</td>
                <td><input type="date" name="joining" id="joining"><span class="error">*<?php echo $row['joining'] ?></span></td>
            </tr>
        </table>
        </br><br><br>
        <button class="button" type="submit" name="submit" value="Submit">Submit</button>
    </form>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="ajax-script.js"></script>
</body>
