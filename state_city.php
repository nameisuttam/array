<td>State</td>
                        <td>
                            <select name="state" id="state">
                                <option disabled selected>select></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>

                        <td>
                            <select name="city" id="city">
                                <option value="" >select</option>
                                
                            </select>
                        </td>
                    </tr>
        </form>
        <script>
            $(document).ready(function(){
                function loadData(){
                    $.ajax({
                        url : "ajax_get_state.php",
                        type : "POST",
                        success : function(data){
                            $("#state").append(data);
                        }
                    });
                }
                loadData();
                $("#state").change(function(){
                    console.log("changeStte");
                    var id=$(this).find(":selected").val();
                    console.log(id);
                    $.ajax({
                        type:"POST",
                        url: "ajax_get_city.php",
                        data: {state_id:id},
                        success : function(data){
                           console.log(data);
                           $("#city").html(data);
                        }
                    });
                });
            });

          
<?php
/*
php
    include("config.php");

    $sql = "SELECT * FROM stud_state";
    $query = mysqli_query($conn,$sql);
    $str = "";

    while($row=mysqli_fetch_assoc($query)){
        $str .= "<option value=".$row['sid'].">".$row['statename']."</option>";
    }

    echo $
    $sql = "SELECT * FROM stud_city WHERE state={$_POST['state_id']}";
    $query = mysqli_query($conn, $sql);
    $str = "";
    echo "<option>--Select--</option>";
    while($row=mysqli_fetch_assoc($query)){
        $str .= "<option value=".$row['cid'].">".$row['cityname']."</option>";
    }
    
    echo $str;


    <td>State</td>
                <?php
                $sql_city = "SELECT * from states";
                $results = mysqli_query($connect, $sql_city);
                ?>
                <?php
                if ($results->num_rows > 0) {
                    $selects = mysqli_fetch_all($results, MYSQLI_ASSOC);
                }
                ?>
                <td>
                    <select name="state" id="state">
                        <option selected disabled>select state</option>
                        <?php
                        foreach ($selects as $select) { ?>
                            <option value="<?php echo $select['id']; ?>" <?php if (isset($state) && $state == $select['id']) {
                                                                                echo 'selected="selected"';
                                                                            } ?>><?php echo $select['state']; ?>
                            </option>
                        <?php
                        } ?>
                    </select>
                    {$_POST['state_id']}
                    */