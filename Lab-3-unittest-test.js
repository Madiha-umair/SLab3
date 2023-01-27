//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========

function test_checkHumberId(valueIn, expected) {

    let result =  checkHumberId(valueIn);
     var result_msg;
    if (result== expected)
    {
        result_msg= "<span style = 'color:green';> XX PASSED XX </span>";
    }
    else{
        result_msg= "<span style = 'color:red';> XX Failed XX </span>";
    }
    let msg = "Value:" + valueIn + " |Result: " + result  + result_msg + "<br/>";

    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;
}


test_checkHumberId("n12345678", true);
test_checkHumberId("n00000000", true);
test_checkHumberId("N99999999", true);
test_checkHumberId("n23456789", true);
test_checkHumberId("N45345345", true);
//Boundry test
test_checkHumberId("n1234567", false);
test_checkHumberId("n12345678", true);
test_checkHumberId("n123456789", false);
//test to fail
test_checkHumberId("sdfsdfsdg", true);