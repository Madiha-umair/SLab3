//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function

 * 
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */


 function checkHumberId(idIn){
    
    let isHumberIdValid = false;
    var IdRange = /^(n|N)\d{8}$/;

    if (IdRange.test(idIn)){
        isHumberIdValid = true;
    }
    return isHumberIdValid;
}
 
