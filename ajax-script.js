//insert validation data
$(document).on('submit', '#userForm', function (e) {
    e.preventDefault();

    $.ajax({
        method: "POST",
        url: "ajax_validation.php",
        data: $(this).serialize(),
        success: function (data) {
            $('#msg').html(data);
            $('#userForm').find('input')
            // .val('')
        }
    });
});

//update validation data
$(document).ready(function () {
    $('#update').click(function (event) {
        event.preventDefault();
        $.ajax({
            url: "update_validation.php",
            method: "POST",
            data: $('form').serialize(),
            dataType: "text",
            success: function (strMessage) {
                $('#message').text(strMessage)
            }
        })
    })
});

//delete data
$(document).on('click', '.delete', function () {
    var id_value = $(this).attr('id');
    $.ajax({
        type: "GET",
        url: 'delete.php',
        method: "POST",
        data: { id: id_value },
        success: function (data) {
            $('#msg').html(data);
            console.log("successfully deleted");
            jQuery("#data_" + id_value).hide()
        }
    })
});
//soft delete
$(document).on('click', '.softDelete', function () {
    var id_value = $(this).attr('id');
    $.ajax({
        type: "GET",
        url: 'soft_delete_data.php',
        method: "POST",
        data: { id: id_value },
        success: function (data) {
            $('#msg').html(data);
            console.log("successfully deleted");
            jQuery("#data_" + id_value).hide()
            // $('#msg').html(data);
            // $('#table-data').load('soft_delete_form.php');
        }
    })
});
//Designation dropdown
$(document).ready(function () {
    $.ajax({
        url: "designation_ajax.php",
        type: "POST",
        success: function (data) {
            $("#designation").append(data);
            var designation_id = $("#designation_val_id").val();
            $("#designation").val(designation_id);
            console.log("data");
        }
    });
});

//state dropdown 
$(document).ready(function () {
    // var state = $('#state')
    $.ajax({
        url: "state_ajax.php",
        type: "POST",
        success: function (data) {
            $("#state").append(data);
            $("#state").find();
            jQuery("#state_val_id").val();
            var state_id = $("#state_val_id").val();   
            $("#state").val(state_id);
        }
    });
});
//city dropdown
$(document).ready(function () {
    // var state = $('#state')
    $.ajax({
        url: "city_ajax.php",
        type: "POST",
        success: function (data) {
            $("#city").append(data);
            $("#city").find();
            jQuery("#city_val_id").val();
            var city_id = $("#city_val_id").val();   
            $("#city").val(city_id);
        }
    });
});

//city_state dependent
$(document).ready(function () {

    $('#state').change(function () {
        loadCity($(this).find(':selected').val())
    })


});

function loadState() {
    $.ajax({
        type: "POST",
        url: "state_city_ajax.php",
        data: "get=state"
    }).done(function (result) {

        $(result).each(function () {
            $("#state").append($(result));
        })
    });
}

function loadCity(stateId) {
    $("#city").children().remove()
    $.ajax({
        type: "POST",
        url: "state_city_ajax.php",
        data: "get=city&id=" + stateId
    }).done(function (result) {

        $("#city").append($(result));

    });
}


loadState();

/*
$(document).ready(function () {
    $("form").submit((event) => {
      event.preventDefault();
  
      var fname = $("#fname").val();
      var lname = $("#lname").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
      var address = $("#address").val();
      var gender = $("input[name='gender']:checked").val()
        var hobbies = $("input[name='hobbie[]']:checked").val()
        // var hobbies = new Array();
        // $('input[name="hobbies"]:checked').each(function() {
        // 	hobbies.push(this.value);
        // })
      var designation = $("#designation").val();
      var salary = $("#salary").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var joining = $("#joining").val();
  
      $.post(
        "ajax_validation.php",
        {
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          address: address,
          gender: gender,
          hobbies: hobbies,
          designation: designation,
          salary: salary,
          state: state,
          city: city,
          joining: joining,
        },
        (data) => {
          $("#msg").html(data);
          $("#userForm").find("input");
        }
      );
    });
  });
  */
/*
$(document).on('click', '.edit', function () {
    var id_value = $(this).attr('id');
    $.ajax({
        url: 'update_validation.php',
        method: "POST",
        data: { id: id_value },
        success: function (res) {
            //parsing data from json to object
            var data = $.parseJSON(res);
            $('#fname').val(data.fname);
            $('#lname').val(data.lname);
            $('#mobile').val(data.mobile);
            $('#address').val(data.address);
            $('#gender').val(data.gender);
            $('#hobbies').val(data.hobbies);
            $('#designation').val(data.designation);
            $('#salary').val(data.salary);
            $('#state').val(data.state);
            $('#city').val(data.city);
            $('#id').val(data.id);
            $('#updateForm').text("Update Data").attr('id', "update").attr('type', '');
        }
    })
});
// //update
$(document).on('click', ".update", function (e) {
    e.preventDefault();
    var data = {
        id: $('#id').val(),
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        mobile: $('#mobile').val(),
        address: $('#address').val(),
        gender: $('#gender').val(),
        hobbies: $('#hobbies').val(),
        designation: $('#designation').val(),
        salary: $('#salary').val(),
        state: $('#state').val(),
        city: $('#city').val(),
    }
$.ajax({
    url: 'display.php',
    method: "POST",
        data: data,
        success: function (res) {
            $('#fname').val('');
            $('#lname').val('');
            $('#mobile').val('');
            $('#address').val('');
            $('#gender').val('');
            $('#hobbies').val('');
            $('#designation').val('');
            $('#salary').val('');
            $('#state').val('');
            $('#city').val('');
            $('#updateForm').text("Save Data").attr('id', "formbtn").attr('type', 'submit');
            load_data();
        }
    })
});
*/