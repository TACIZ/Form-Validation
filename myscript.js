// Subject          : INT222
// Author           : Ilan Zar
// Last Modified    : Aug 8, 2016

// ****************************************************************
// ** Function Name : validateForm()                             **
// **                                                            **
// ** Called from   : Event Handler  onsubmit                    **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function is called when the user tries to submit      **
// ** the form                                                   **
// ****************************************************************
function validateForm() {
   var errors = "";
   errors = validateFname(errors) + validateSname(errors) + DOB(errors) + email(errors) + Phone(errors) + HomeAdd(errors) + apart(errors) + city(errors) + province(errors) + postal(errors) + payment(errors) + income(errors) + years(errors) + code(errors)
+ PRPO(errors) + OR(errors) + CC(errors) + EC(errors);
       if (errors !== "") {
          showErrors(errors);
          return false;
       }
       else {
          clearShowErrors();
          return true;
       }
}
// ****************************************************************
// ** Function Name : showErrors(messages)                       **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function is called if there are errors                **
// **                                                            **
// ****************************************************************
function showErrors(messages) {

    document.getElementById("errorarea").innerHTML = messages;
}
// ****************************************************************
// ** Function Name : clearShowErrors()                          **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function is called if the clear button is clicked on  **
// **                                                            **
// ****************************************************************
function clearShowErrors() {
        document.getElementById("errorarea").innerHTML = " ";
        document.getElementById("fName").focus();
}
// ****************************************************************
// ** Function Name : validateFname(errors)                      **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the first name and returns any     **
// ** errors                                                     **
// ****************************************************************
function validateFname(errors) {
          var fname ="<mark>First Name</mark><br />";
          var om ="- ";
          var msgRulesf ="Please enter a minimum of four alphabetical characters. ";
          var blankf="You cannot leave the name field empty or with only blank characters. ";
          var notenoughf="You didn't enter enough characters for the first name. ";
          var nonalphaf="Only alphabetical characters are allowed for the first name. ";
          var HyphLocationf="You cannot have a hyphen reside in any of the first three letters of your first name, and cannot be the last character of your first name. ";
          var stringfName = document.getElementById("fName").value;
          stringfName = stringfName.trim();
          var Length =  stringfName.length;
          stringfName = stringfName.toUpperCase();
          var counterNAlpha = 0;
          var hyphcounter = 0;
          var onemsg = 0;
          for (var i = 0; i < Length; i++) {
              if (stringfName.charCodeAt(i) === 45) {
                  hyphcounter++;
              }
              if ((stringfName.charCodeAt(i) > 90) || (stringfName.charCodeAt(i) < 65) && (stringfName.charCodeAt(i) !== 45)) {
                  counterNAlpha++;
              }
          }
          if (Length === 0) {
              errors += blankf;
              onemsg++;
          }
          else if (Length > 0 && Length < 4) {
              if (counterNAlpha > 0 && onemsg === 0) {
                  errors += nonalphaf;
                  onemsg++;
              }
              else if (hyphcounter > 0 && onemsg === 0) {
                  errors += HyphLocationf;
                  onemsg++;
              }
              else if(onemsg === 0) {
                  errors += notenoughf;
                  onemsg++;
              }
          }
          else if (Length >= 4) {
              if (hyphcounter === 1 && onemsg === 0) {
                  if (stringfName.charCodeAt(Length - 1) === 45 || stringfName.charCodeAt(0) === 45 || stringfName.charCodeAt(1) === 45 || stringfName.charCodeAt(2) === 45) {
                      errors += HyphLocationf;
                      onemsg++;
                  }
              }
              else if (hyphcounter > 1 && onemsg === 0) {
                  errors += HyphLocationf;
                  onemsg++;
              }
              else if (counterNAlpha > 0 && onemsg === 0) {
                  errors += nonalphaf;
                  onemsg++;
              }
          }
     if (errors !== ""){
         errors = fname + om + errors + msgRulesf + "<br />";
     }
     else{
       document.getElementById("fName").value = document.getElementById("fName").value.toUpperCase();
     }
     return errors;
}
// ****************************************************************
// ** Function Name : validateSname(errors)                      **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the surname and returns any errors **
// **                                                            **
// ****************************************************************
function validateSname(errors) {
    var sname ="<mark>Surname</mark><br />";
    var om ="- ";
    var msgRules ="Please enter a minimum of four alphabetical characters. ";
    var blank="You cannot leave the surname field empty or with only blank characters. ";
    var notenough="You didn't enter enough characters for the surname. ";
    var nonalpha="Only alphabetical characters are allowed for the surname. ";
    var HyphLocation ="You can only have one hyphen and it cannot reside in any of the first three letters of your surname, and cannot be the last character of your surname. ";
    var AspoLocation ="You can only have one apostrophe and it cannot reside in any of the first three letters of your surname, and cannot be the last character of your surname. ";
    var HyphAspoLocation ="Your optional hyphen and apostrophe cannot be beside each other. ";
    var stringsName = document.getElementById("sName").value;
    stringsName = stringsName.trim();
    var Length =  stringsName.length;
    stringsName = stringsName.toUpperCase();
    var counterNAlpha = 0;
    var hyphcounter = 0;
    var aspocounter = 0;
    var onemsg = 0;
    for (var i = 0; i < Length; i++) {
        if (stringsName.charCodeAt(i) === 45) {
            hyphcounter++;
        }
        if (stringsName.charCodeAt(i) === 39) {
            aspocounter++;
        }
        if ((stringsName.charCodeAt(i) > 90) || (stringsName.charCodeAt(i) < 65)) {
            if ((stringsName.charCodeAt(i) !== 39) && (stringsName.charCodeAt(i) !== 45)) {
                counterNAlpha++;
            }
        }
    }
    if (Length === 0) {
        errors += blank;
        onemsg++;
    }
    else if (Length > 0 && Length < 5) {
        if (counterNAlpha > 0 && onemsg === 0) {
            errors += nonalpha;
            onemsg++;
        }
        else if (hyphcounter > 0 && onemsg === 0) {
            errors += HyphLocation;
            onemsg++;
        }
        else if (aspocounter > 0 && onemsg === 0) {
            errors += AspoLocation;
            onemsg++;
        }
        else if (aspocounter === 1 && hyphcounter === 1 && onemsg === 0) {
            if((stringsName.indexOf("\'")) - (stringsName.indexOf("-")) === -1 || (stringsName.indexOf("\'")) - (stringsName.indexOf("-")) === 1){
                errors += HyphAspoLocation;
                onemsg++;
            }
        }
        else if (onemsg === 0) {
            errors += notenough;
            onemsg++;
        }
    }
    else if (Length >= 5) {
        if (counterNAlpha > 0){
            errors += nonalpha;
            onemsg++;
        }
        if (aspocounter > 1) {
            errors += AspoLocation;
            onemsg++;
        }
        if (hyphcounter > 1) {
            errors += HyphLocation;
            onemsg++;
        }
        if (hyphcounter === 1) {
            if (stringsName.charCodeAt(Length - 1) === 45 || stringsName.charCodeAt(0) === 45 || stringsName.charCodeAt(1) === 45 || stringsName.charCodeAt(2) === 45 || stringsName.charCodeAt(3) === 45) {
                errors += HyphLocation;
                onemsg++;
            }
        }
        if (aspocounter === 1) {
            if (stringsName.charCodeAt(Length - 1) === 39 || stringsName.charCodeAt(0) === 39 || stringsName.charCodeAt(1) === 39 || stringsName.charCodeAt(2) === 39 || stringsName.charCodeAt(3) === 39) {
                errors += AspoLocation;
                onemsg++;
            }
        }
        if (aspocounter === 1 && hyphcounter === 1){
            if((stringsName.indexOf("\'")) - (stringsName.indexOf("-")) === -1 || (stringsName.indexOf("\'")) - (stringsName.indexOf("-")) === 1){
                errors += HyphAspoLocation;
                onemsg++;
            }
        }
    }
    if (errors !== ""){
        errors = sname + om + errors + msgRules + "<br />";
    }
    else{
      document.getElementById("sName").value = document.getElementById("sName").value.toUpperCase();
    }
    return errors;
}
// ****************************************************************
// ** Function Name : DOB(errors)                                **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the date of birth and returns any  **
// ** errors                                                     **
// ****************************************************************
function DOB(errors){
   var dobf ="<mark>Date of Birth</mark><br />";
   var om ="- ";
   var msgRulesd ="Please enter your date includes a three character month and a four character year. ";
   var emptyd="You cannot leave the Date of Birth field empty or with only blank characters. ";
   var notenoughd="You did not enter enough characters for the date. ";
   var invalidmonthd="You didn't enter a valid month. ";
   var stringDOB = document.getElementById("dob").value;
   stringDOB = stringDOB.trim();
   var Length = stringDOB.length;
   var sM = stringDOB.slice(0, 3);
   var stringY = stringDOB.slice(3, 7);
   sM = sM.toUpperCase();
   var validmonth = false;
   var index = 0;
   var onemsg = 0;
     if(Length === 0){
         errors += emptyd;
         onemsg++;
     }
     else if (Length > 0 && Length < 7 && onemsg === 0) {
         errors += notenoughd;
         onemsg++;
     }
     if(sM === "JAN" || sM === "FEB" || sM === "MAR" || sM === "APR" || sM === "MAY" || sM === "JUN" || sM === "JUL" || sM === "AUG" || sM === "SEP" || sM === "OCT" || sM === "NOV" || sM === "DEC" && Length !== 0){
       validmonth = true;
     }
     for(var k = 0; k < 4; k++){
       if(stringY.charCodeAt(k) < 47 || stringY.charCodeAt(k) > 58){
            index++;
       }
     }
     if (validmonth === false && index > 0 && Length !== 0 && onemsg === 0) {
         errors += "A value in the year is not a numeric character and the month you input is not valid. ";
         onemsg++;
     }
     else if (validmonth === false && index === 0 && Length !== 0 && onemsg === 0) {
         errors += invalidmonthd;
         onemsg++;
     }
     else if (validmonth === true && index > 0 && Length !== 0 && onemsg === 0) {
         errors += "A value in the year is not a numeric character. ";
         onemsg++;
     }
     else if (stringY > 2016 && Length !== 0 && onemsg === 0) {
         errors += "The year you entered is too high. ";
         onemsg++;
     }
     else if (stringY >= 1997 && stringY <= 2016 && Length !== 0 && onemsg === 0) {
         errors += "The year you entered is too low. ";
         onemsg++;
     }
     if (errors !== ""){
         errors = dobf + om + errors + msgRulesd + "<br />";
         onemsg++;
     }
   return errors;
}
// ****************************************************************
// ** Function Name : email(errors)                              **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the email and returns any errors   **
// **                                                            **
// ****************************************************************
function email(errors) {
    var ema = "<mark>Email</mark><br />";
    var om = "- ";
    var msgRulese = "Please enter a valid email with at least three characters in each part. ";
    var emptye = "You cannot leave the Email field empty or with only blank characters. ";
    var notenoughe = "You did not enter enough characters for the email. ";
    var p1ne = "You did not put enough characters in part1. ";
    var p2ne = "You did not put enough characters in part2. ";
    var p3ne = "You did not put a valid com or ca at the end of your email address. ";
    var insa = "You put too many ampersands. ";
    var insp = "You put too many periods. ";
    var nona = "You have invalid characters. ";
    var nolo = "Your ampersand/period is in the wrong location. ";
    var beside = "Your ampersand and period is beside each other. ";
    var invalidps = "You entered invalid characters in part1, part2 and part3. ";
    var stringEmail = document.getElementById("email").value;
    stringEmail = stringEmail.trim();
    stringEmail = stringEmail.toUpperCase();
    var Length = stringEmail.length;
    var amp = 0;
    var per = 0;
    var nonalpha = 0;
    var nonap1 = 0;
    var nonap2 = 0;
    var nonap3 = 0;
    var onemsg = 0;
    var lastindex = Length - 1;
    for (var i = 0; i < Length; i++) {
        if (stringEmail.charCodeAt(i) === 64) {
            amp++;
        }
        if (stringEmail.charCodeAt(i) === 46) {
            per++;
        }
        if ((stringEmail.charCodeAt(i) > 90 || stringEmail.charCodeAt(i) < 65) && (stringEmail.charCodeAt(i) < 48 || stringEmail.charCodeAt(i) > 57)) {
            if (stringEmail.charCodeAt(i) !== 64 && stringEmail.charCodeAt(i) !== 46) {
                nonalpha++;
            }
        }
    }
    if (Length === 0 && onemsg === 0) {
        errors += emptye;
        onemsg++;
    }
    else if (Length > 0 && Length < 10 && onemsg === 0) {
        errors += notenoughe;
        onemsg++;
    }
    for(var i = 0; i < Length; i++){
        if (stringEmail[i] === "@" && stringEmail[i + 1] === "." && onemsg === 0) {
            errors += beside;
            onemsg++;
        }
        else if (stringEmail[i] === "." && stringEmail[i + 1] === "@" && onemsg === 0) {
            errors += beside;
            onemsg++;
        }
    }
    if (((stringEmail[0] === "@") || (stringEmail[0] === ".") || (stringEmail[lastindex] === "@") || (stringEmail[lastindex] === ".") || (stringEmail[0] === ".") || (stringEmail[lastindex] === "@")) && onemsg === 0) {
        errors += nolo;
        onemsg++;
    }
    if (amp === 1 && per === 1 && onemsg === 0) {
        var strEm1 = stringEmail.split("@");
        var part1 = strEm1[0];
        var strEm2 = strEm1[1].split(".");
        var part2 = strEm2[0];
        var part3 = strEm2[1];
        for (var i = 0; i < part1.length; i++) {
            if ((part1.charCodeAt(i) > 90 || part1.charCodeAt(i) < 65) && (part1.charCodeAt(i) < 48 || part1.charCodeAt(i) > 57)) {
                if (part1.charCodeAt(i) !== 64 && part1.charCodeAt(i) !== 46) {
                    nonap1++;
                }
            }
        }
        for (var i = 0; i < part2.length; i++) {
            if ((part2.charCodeAt(i) > 90 || part2.charCodeAt(i) < 65) && (part2.charCodeAt(i) < 48 || part2.charCodeAt(i) > 57)) {
                if (part2.charCodeAt(i) !== 64 && part2.charCodeAt(i) !== 46) {
                    nonap2++;
                }
            }
        }
        for (var i = 0; i < part3.length; i++) {
            if ((part3.charCodeAt(i) > 90 || part3.charCodeAt(i) < 65) && (part3.charCodeAt(i) < 48 || part3.charCodeAt(i) > 57)) {
                if (part3.charCodeAt(i) !== 64 && part3.charCodeAt(i) !== 46) {
                    nonap3++;
                }
            }
        }
        if (nonap1 > 0 && nonap2 > 0 && nonap3 > 0 && onemsg === 0) {
            errors += invalidps;
            onemsg++;
        }
        if (part1.length < 3 && onemsg === 0) {
            errors += p1ne;
            onemsg++;
        }
        if (part2.length < 3 && onemsg === 0) {
            errors += p2ne;
            onemsg++;
        }
        if (part3 !== "CA" && part3 !== "COM" && onemsg === 0) {
            errors += p3ne;
            onemsg++;
        }
    }
    if (amp > 1 && onemsg === 0) {
        errors += insa;
        onemsg++;
    }
    else if (per > 1 && onemsg === 0) {
        errors += insp;
        onemsg++;
    }
    else if (nonalpha > 0 && onemsg === 0) {
        errors += nona;
        onemsg++;
    }
    if (errors !== "") {
        errors = ema + om + errors + msgRulese + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : Phone(errors)                              **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the phonenumber and returns any    **
// ** errors                                                     **
// ****************************************************************
function Phone(errors) {
    var emp = "<mark>Phone</mark><br />";
    var om = "- ";
    var msgRulesp = "Please enter a valid phonenumber seperated with hyphens. ";
    var emptyp = "You cannot leave the Phone field empty or with only blank characters. ";
    var notenoughp = "Not enough numbers for a valid phonenumber. ";
    var spaces = "You cannot seperate the numbers with spaces. ";
    var invalidp1 = "Your first digits are not 647 or 416. ";
    var notnumeric = "You values contain some non-numeric characters. ";
    var outofrange = "Your number is out of range. ";
    var stringPhone = document.getElementById("phone").value;
    stringPhone = stringPhone.trim();
    var Length = stringPhone.length;
    var alpha2 = 0;
    var alpha3 = 0;
    var p2ok = false;
    var p3ok = false;
    var spacen = false;
    var onemsg = 0;
    if (Length === 0) {
        errors += emptyp;
        onemsg++;
    }
    else if (Length > 0 && Length < 12 && onemsg === 0) {
        errors += notenoughp;
        onemsg++;
    }
    else if (stringPhone[3] === " " && stringPhone[7] === " " && onemsg === 0) {
        errors += spaces;
        onemsg++;
        spacen = true;
    }
    else if (Length !== 0 && spacen === false && onemsg === 0) {
        var part = stringPhone.split("-");
        var p1 = part[0];
        var p2 = part[1];
        var p3 = part[2];
        for (var i = 0; i < p2.length; i++) {
            if (p2.charCodeAt(i) < 48 || p2.charCodeAt(i) > 57) {
                alpha2++;
            }
        }
        for (var i = 0; i < p3.length; i++) {
            if (p3.charCodeAt(i) < 48 || p3.charCodeAt(i) > 57) {
                alpha3++;
            }
        }
        if (alpha3 !== 0 && onemsg === 0) {
            errors += notnumeric;
            onemsg++;
        }
        if (alpha2 !== 0 && onemsg === 0) {
            errors += notnumeric;
            onemsg++;
        }
        if (p1 !== "416" && p1 !== "647" && onemsg === 0) {
            errors += invalidp1;
            onemsg++;
        }
        if (p2[0] !== "2" && p2[0] !== "3" && p2[0] !== "4" && p2[0] !== "5" && p2 !== "600") {
            p2ok = true;
        }
        if (p2ok === true && onemsg === 0) {
            errors += outofrange;
            onemsg++;
        }
        if (((p3.length !== 4) || (p3 === "1000") || (p3[0] !== "1" && p3[0] !== "2" && p3[0] !== "3" && p3[0] !== "4" && p3[0] !== "5" && p3[0] !== "6" && p3[0] !== "7" && p3[0] !== "8" && p3[0] !== "9")) && onemsg === 0) {
            errors += outofrange;
            onemsg++;
        }
    }
    if (errors !== "") {
        errors = emp + om + errors + msgRulesp + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : HomeAdd(errors)                            **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Home Address and returns any   **
// ** errors                                                     **
// ****************************************************************
function HomeAdd(errors) {
    var emh = "<mark>Home Address</mark><br />";
    var om = "- ";
    var msgRulesh = "Please enter a valid Home Address with at least five alphabetic characters. ";
    var emptyh = "You cannot leave the Home Address field empty or with only blank characters. ";
    var notenoughh = "Not enough characters for a valid Home Address. ";
    var notalpha = "Not enough alphabetical characters, at least five please. ";
    var stringHome = document.getElementById("address").value;
    stringHome = stringHome.trim();
    stringHome = stringHome.toUpperCase();
    var Length = stringHome.length;
    var alpha = 0;
    var onemsg = 0;
    for (var i = 0; i < Length; i++) {
        if (stringHome.charCodeAt(i) > 64 && stringHome.charCodeAt(i) < 91) {
            alpha++;
        }
    }
    if (Length === 0) {
        errors += emptyh;
        onemsg++;
    }
    else if (Length > 0 && Length < 5 && onemsg === 0) {
        errors += notenoughh;
        onemsg++;
    }
    else if (alpha < 5 && onemsg === 0) {
        errors += notalpha;
        onemsg++;
    }
    if (errors !== "") {
        errors = emh + om + errors + msgRulesh + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : apart(errors)                              **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Apt. and returns any errors    **
// **                                                            **
// ****************************************************************
function apart(errors) {
    var emap = "<mark>Apt.</mark><br />";
    var om = "- ";
    var msgRulesap = "Please enter a valid Apt.(Optional) with at least one alphabet or one number. ";
    var question = "You are not allowed to enter a ? in your Apt. field. ";
    var stringApt = document.getElementById("apt").value;
    stringApt = stringApt.trim();
    stringApt = stringApt.toUpperCase();
    var Length = stringApt.length;
    var qincr = 0;

    for (var i = 0; i < Length; i++) {
        if (stringApt.charCodeAt(i) === 63) {
            qincr++;
        }
    }
    if (qincr > 0) {
        errors += question;
    }
    if (errors !== "") {
        errors = emap + om + errors + msgRulesap + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : city(errors)                               **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the City and returns any errors    **
// **                                                            **
// ****************************************************************
function city(errors) {
    var emc = "<mark>City</mark><br />";
    var om = "- ";
    var msgRulesc = "Please enter a valid City with at least five alphabetic characters in the beginning, one hyphen is allowed but not in the first five characters or at the end. ";
    var emptyc = "You cannot leave the City field empty or with only blank characters. ";
    var notenoughc = "Not enough characters for a valid City. ";
    var first5 = "The first five characters must be alphabetical. ";
    var nonalpha = "You cannot have non-alphabetical characters in your City. ";
    var hyphloc = "You cannot have a hyphen in the first five characters or at the end. ";
    var stringCity = document.getElementById("city").value;
    stringCity = stringCity.trim();
    stringCity = stringCity.toUpperCase();
    var Length = stringCity.length;
    var alpha5 = 0;
    var alpha = 0;
    var onemsg = 0;
    if (Length === 0) {
        errors += emptyc;
        onemsg++;
    }
    else if (Length > 0 && Length < 5 && onemsg === 0) {
        errors += notenoughc;
        onemsg++;
    }
    else if (Length === 5 && onemsg === 0) {
        for (var i = 0; i < 5; i++) {
            if (stringCity.charCodeAt(i) > 64 && stringCity.charCodeAt(i) < 91) {
                alpha5++;
            }
        }
        if (alpha5 !== 5 && onemsg === 0) {
            errors += first5;
            onemsg++;
        }
    }
    else if (Length > 5 && onemsg === 0) {
        for (var i = 0; i < Length; i++) {
            if ((stringCity.charCodeAt(i) < 65 || stringCity.charCodeAt(i) > 90) && stringCity.charCodeAt(i) !== 45) {
                alpha++;
            }
        }
        if (alpha !== 0 && onemsg === 0) {
            errors += nonalpha;
            onemsg++;
        }
    }
    if ((stringCity.charCodeAt(0) === 45 || stringCity.charCodeAt(1) === 45 || stringCity.charCodeAt(2) === 45 || stringCity.charCodeAt(3) === 45 || stringCity.charCodeAt(4) === 45 || stringCity.charCodeAt(Length - 1) === 45) && (onemsg === 0)) {
        errors += hyphloc;
        onemsg++;
    }
    if (errors !== "") {
        errors = emc + om + errors + msgRulesc + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : province(errors)                           **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the province and returns any       **
// ** errors                                                     **
// ****************************************************************
function province(errors) {
    var empr = "<mark>Province</mark><br />";
    var om = "- ";
    var msgRulespr = "Please select a province. ";
    var notchecked = "You havent selected a province. "
    var Length = document.application.province.length;
    var checked = false;
    for(var i = 0; i < Length; i++){
        if (document.application.province[i].selected === true) {
            checked = true;
        }
    }
    if (checked === false) {
        errors += notchecked;
    }
    if (errors !== "") {
        errors = empr + om + errors + msgRulespr + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : postal(errors)                             **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the postal code and returns any    **
// ** errors                                                     **
// ****************************************************************
function postal(errors) {
    var emppo = "<mark>Postal Code</mark><br />";
    var om = "- ";
    var msgRulespo = "Please enter a valid Postal Code with ANA NAN format. ";
    var notenoughpo = "You have not entered enough characters for a valid Postal Code. ";
    var emptypo = "You cannot leave the Postal Code empty or only with blank characters. ";
    var blankm = "You didn't leave a blank at position 4. ";
    var invalidform = "You did not enter a valid ANA NAN format. ";
    var invalidfirst = "Your first character is invalid. ";
    var invalidalpha = "You are not allowed to enter all alphabetical characters. ";
    var invalidlow = "You are not allowed to enter all lowercase alphabetical characters. ";
    var invalidnum = "You are not allowed to enter only numbers. ";
    var stringPostal = document.getElementById("postal").value;
    stringPostal = stringPostal.trim();
    var Length = stringPostal.length;
    var invalida = false;
    var invalidb = false;
    var alphacounter = 0;
    var numcounter = 0;
    var lowcounter = 0;
    var onemsg = 0;
    if (Length === 0) {
        errors += emptypo;
        onemsg++;
    }
    else if (Length > 0 && Length < 7 && onemsg === 0) {
        errors += notenoughpo;
        onemsg++;
    }
    else if (stringPostal.charCodeAt(3) !== 32 && Length !== 0 && onemsg === 0) {
        errors += blankm;
        onemsg++;
    }
    else if (Length === 7 && onemsg === 0) {
        for (var i = 0; i < Length; i++) {
            if ((stringPostal.charCodeAt(i) > 64 && stringPostal.charCodeAt(i) < 91) || (stringPostal.charCodeAt(i) > 96 && stringPostal.charCodeAt(i) < 123) && (stringPostal.charCodeAt(i) !== 32)) {
                alphacounter++;
            }
            if ((stringPostal.charCodeAt(i) > 47 && stringPostal.charCodeAt(i) < 58) && (stringPostal.charCodeAt(i) !== 32)) {
                numcounter++;
            }
            if ((stringPostal.charCodeAt(i) > 96 && stringPostal.charCodeAt(i) < 123) && (stringPostal.charCodeAt(i) !== 32)) {
                lowcounter++;
            }
        }
        if (alphacounter === 6 && lowcounter !== 6 && onemsg === 0) {
            errors += invalidalpha;
            onemsg++;
        }
        else if (lowcounter === 6 && onemsg === 0) {
            errors += invalidlow;
            onemsg++;
        }
        else if (numcounter === 6 && onemsg === 0) {
            errors += invalidnum;
            onemsg++;
        }
        if ((stringPostal.charCodeAt(0) < 65 || stringPostal.charCodeAt(0) > 90) || (stringPostal.charCodeAt(2) < 65 || stringPostal.charCodeAt(2) > 90) || (stringPostal.charCodeAt(5) < 65 || stringPostal.charCodeAt(5) > 90)){
            invalida = true;
        }
        if ((stringPostal.charCodeAt(1) < 48 || stringPostal.charCodeAt(1) > 57) || (stringPostal.charCodeAt(4) < 48 || stringPostal.charCodeAt(4) > 57) || (stringPostal.charCodeAt(6) < 48 || stringPostal.charCodeAt(6) > 57)) {
            invalidb = true;
        }
        if ((invalida === true || invalidb === true) && onemsg === 0) {
            errors += invalidform;
            onemsg++;
        }
        else if ((stringPostal.charCodeAt(0) === 68 || stringPostal.charCodeAt(0) === 70 || stringPostal.charCodeAt(0) === 73 || stringPostal.charCodeAt(0) === 79 || stringPostal.charCodeAt(0) === 81 || stringPostal.charCodeAt(0) === 85 ||
stringPostal.charCodeAt(0) ===
87 || stringPostal.charCodeAt(0) === 90) && (onemsg === 0)) {
            errors += invalidfirst;
            onemsg++;
        }
    }
    if (errors !== "") {
        errors = emppo + om + errors + msgRulespo + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : payment(errors)                            **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Monthly Payment and returns    **
// ** any errors                                                 **
// ****************************************************************
function payment(errors) {
    var emppay = "<mark>Monthly Payment</mark><br />";
    var om = "- ";
    var msgRulespay = "Please enter your Monthly Payment with only numeric characters. ";
    var emptypay = "You cannot leave the Monthly Payment field empty or only with blank characters. ";
    var nonnum = "You cannot enter characters that are not numeric. ";
    var notenoughpay = "You cannot enter a value that is less than 201. ";
    var stringPay = document.getElementById("payment").value;
    stringPay = stringPay.trim();
    var Length = stringPay.length;
    var numcounter = 0;

    if (Length === 0) {
        errors += emptypay;
    }
    if(Length > 0){
        for (var i = 0; i < Length; i++) {
             if (stringPay.charCodeAt(i) > 47 && stringPay.charCodeAt(i) < 58) {
                 numcounter++;
             }
        }
        if (stringPay[0] === "0" || stringPay[0] === "1" || stringPay === "200") {
            errors += notenoughpay;
        }
        if (numcounter !== Length) {
            errors += nonnum;
        }
    }
    if (errors !== "") {
        errors = emppay + om + errors + msgRulespay + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : income(errors)                             **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates Monthly Income and returns any     **
// ** errors                                                     **
// ****************************************************************
function income(errors) {
    var empin = "<mark>Monthly Income</mark><br />";
    var om = "- ";
    var msgRulesin = "Please enter your Monthly Income with only numeric characters. ";
    var emptyin = "You cannot leave the Monthly Income field empty or only with blank characters. ";
    var nonnumin = "You cannot enter characters that are not numeric. ";
    var same = "You cannot enter the same value for both Monthly Payment and Monthly Income. ";
    var notenoughin = "Your Monthly Income must be four times that of your Monthly Payment. ";
    var stringIn = document.getElementById("income").value;
    stringIn = stringIn.trim();
    var Length = stringIn.length;
    var stringCmp = document.getElementById("payment").value;
    var numc = 0;
    var fourtimes = eval(4 * stringCmp);
    var result = eval(fourtimes - stringIn);
    var onemsg = 0;
    if (Length === 0) {
        errors += emptyin;
        onemsg++;
    }
    else if (Length > 0 && onemsg === 0) {
        for (var i = 0; i < Length; i++) {
            if (stringIn.charCodeAt(i) > 47 && stringIn.charCodeAt(i) < 58) {
                numc++;
            }
        }
        if (numc !== Length && onemsg === 0) {
            errors += nonnumin;
            onemsg++;
        }
        else if (stringIn === stringCmp && numc === Length && onemsg === 0) {
            errors += same;
            onemsg++;
        }
        else if (result >= 0 && numc === Length && onemsg === 0) {
            errors += notenoughin;
            onemsg++;
        }
    }
    if (errors !== "") {
        errors = empin + om + errors + msgRulesin + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : years(errors)                              **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates Years at Current Location and      **
// ** returns any errors                                         **
// ****************************************************************
function years(errors) {
    var emy = "<mark>Years at Current Location</mark><br />";
    var om = "- ";
    var msgRulesy = "Please enter your Years at Current Location with only numeric characters. ";
    var emptyy = "You cannot leave the Years at Current Location field empty or only with blank characters. ";
    var nonnumy = "You cannot enter characters that are not numeric. ";
    var outofrangey = "Your number is out of range, valid numbers exist between 1 and 40. ";
    var stringYears = document.getElementById("currYears").value;
    stringYears = stringYears.trim();
    var Length = stringYears.length;
    var numy = 0;
    if (Length === 0) {
        errors += emptyy;
    }
    if (Length > 0) {
        for (var i = 0; i < Length; i++) {
            if (stringYears.charCodeAt(i) > 47 && stringYears.charCodeAt(i) < 58) {
                numy++;
            }
        }
        if (numy !== Length) {
            errors += nonnumy;
        }
        if (stringYears < 1 || stringYears > 40) {
            errors += outofrangey;
        }
    }
    if (errors !== "") {
        errors = emy + om + errors + msgRulesy + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : code(errors)                               **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates Pre-authorized Code and returns    **
// ** any errors                                                 **
// ****************************************************************
function code(errors) {
    var emc = "<mark>Pre-authorized Code</mark><br />";
    var om = "- ";
    var msgRulesc = "Please enter a valid Pre-authorized Code (optional), with the format NNN-NNNN. ";
    var notenoughc = "You did not enter enough characters, valid input is eight characters including one hyphen. ";
    var misshyph = "You are missing a hyphen for your fourth character. ";
    var lochyph = "You cannot have a hyphen anywhere except as your fourth character. ";
    var fnum = "There are character(s) in your first three digits that are not numeric. ";
    var lnum = "There are character(s) in your last four digits that are not numeric. ";
    var notsum = "The sum of your last four digits is not double the sum of your first three digits. ";
    var stringCode = document.getElementById("preCode").value;
    stringCode = stringCode.trim();
    var Length = stringCode.length;
    var numa = 0;
    var numb = 0;
    var invalidhyph = false;
    var onemsg = 0;
    if (Length > 0 && Length < 8) {
        errors += notenoughc;
        onemsg++;
    }
    else if (Length === 8 && onemsg === 0) {
        for (var i = 0; i < Length; i++) {
            if (i != 3) {
                if (stringCode.charCodeAt(i) === 45) {
                    invalidhyph = true;
                }
            }
        }
        if (invalidhyph === true && onemsg === 0) {
            errors += lochyph;
            onemsg++;
        }
        else if (stringCode.charCodeAt(3) !== 45 && onemsg === 0) {
            errors += misshyph;
            onemsg++;
        }
        else if (stringCode.charCodeAt(3) === 45 && invalidhyph === false && onemsg === 0) {
            var part = stringCode.split("-");
            var p1 = part[0];
            var p2 = part[1];
            for (var i = 0; i < p1.length; i++) {
                if(i === 0){
                  if (p1.charCodeAt(i) < 49 || p1.charCodeAt(i) > 57) {
                      numa++;
                  }
                }
                if(i !== 0){
                  if (p1.charCodeAt(i) < 48 || p1.charCodeAt(i) > 57) {
                      numa++;
                  }
                }
            }
            for (var i = 0; i < p2.length; i++) {
                if(i === 0){
                  if (p2.charCodeAt(i) < 49 || p2.charCodeAt(i) > 57) {
                      numb++;
                  }
                }
                if(i !== 0){
                  if (p2.charCodeAt(i) < 48 || p2.charCodeAt(i) > 57) {
                      numb++;
                  }
                }
            }
            if (numa !== 0 && onemsg === 0) {
                errors += fnum;
                onemsg++;
            }
            else if (numb !== 0 && onemsg === 0) {
                errors += lnum;
                onemsg++;
            }
            else if (numa === 0 && numb === 0 && onemsg === 0) {
              var part1 = eval(+p1[0] + +p1[1] + +p1[2]);
              var part2 = eval(+p2[0] + +p2[1] + +p2[2] + +p2[3]);
              part1 = eval(2 * part1);
              if (part1 !== part2) {
                  errors += notsum;
                  onemsg++;
              }
            }
        }
    }
    if (errors !== "") {
        errors = emc + om + errors + msgRulesc + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : PRPO(errors)                               **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the postal code and province       **
// ** relationship and returns any errors                        **
// ****************************************************************
function PRPO(errors) {
    var prpoerrors = postal(errors) + province(errors);
    if (errors === "") {

        var empp = "<mark>Postal Code and Province Relationship</mark><br />";
        var om = "- ";
        var msgRulespp = "Please make sure your Postal Code and Province are in the same region. ";
        var region = "Your Postal Code and Province do not indicate the same region. ";
        var stringPost = document.getElementById("postal").value;
        stringPost = stringPost.trim();
        var ProvLength = document.application.province.length;
        var sel = 100;
        var p = stringPost[0];

        for (var i = 0; i < ProvLength; i++) {
         if (document.application.province[i].selected === true) {
             sel = i;
         }
        }
        if (sel === 0 && p !== "T") {
            errors += region;
        }
        if (sel === 1 && p !== "V") {
            errors += region;
        }
        if (sel === 2 && p !== "R") {
            errors += region;
        }
        if (sel === 3 && p !== "E") {
            errors += region;
        }
        if (sel === 4 && p !== "A") {
            errors += region;
        }
        if (sel === 5 && p !== "B") {
            errors += region;
        }
        if (sel === 6 && (p !== "K" && p !== "L" && p !== "M" && p !== "N" && p !== "P")) {
            errors += region;
        }
        if (sel === 7 && p !== "C") {
            errors += region;
        }
        if (sel === 8 && (p !== "G" && p !== "H" && p !== "J")) {
            errors += region;
        }
        if (sel === 9 && p !== "S") {
            errors += region;
        }
        if (sel === 10 && p !== "X") {
            errors += region;
        }
        if (sel === 11 && p !== "X") {
            errors += region;
        }
        if (sel === 12 && p !== "Y") {
            errors += region;
        }
    }
    if (errors !== "") {
        errors = empp + om + errors + msgRulespp + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : OR(errors)                                 **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Own or Rent and returns any    **
// ** errors                                                     **
// ****************************************************************
function OR(errors) {
    var emor = "<mark>Own or Rent</mark><br />";
    var om = "- ";
    var msgRulesor = "Please select one of the boxes. ";
    var emptyor = "You cannot leave both boxes unchecked. ";
    var bothor = "You cannot leave  both boxes checked. ";
    var checkO = document.getElementById("s01").checked;
    var checkR = document.getElementById("s02").checked;
    if (checkO === true && checkR === true) {
        errors += bothor;
    }
    if (checkO === false && checkR === false) {
        errors += emptyor;
    }
    if (errors !== "") {
        errors = emor + om + errors + msgRulesor + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : CC(errors)                                 **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Credit Check and returns any   **
// ** errors                                                     **
// ****************************************************************
function CC(errors) {
    var emcc = "<mark>Credit Check</mark><br />";
    var om = "- ";
    var msgRulescc = "Please select one of the boxes. ";
    var emptycc = "You cannot leave both boxes unchecked. ";
    var bothcc = "You cannot leave  both boxes checked. ";
    var checkYC = document.getElementById("c01").checked;
    var checkNC = document.getElementById("c02").checked;
    if (checkYC === true && checkNC === true) {
        errors += bothcc;
    }
    if (checkYC === false && checkNC === false) {
        errors += emptycc;
    }
    if (errors !== "") {
        errors = emcc + om + errors + msgRulescc + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Name : EC(errors)                                 **
// **                                                            **
// ** Called from   : validateForm()                             **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function validates the Email Consent and returns any  **
// ** errors                                                     **
// ****************************************************************
function EC(errors) {
    var emec = "<mark>Email Consent</mark><br />";
    var om = "- ";
    var msgRulesec = "Please select one of the boxes. ";
    var emptyec = "You cannot leave both boxes unchecked. ";
    var checkYE = document.getElementById("m01").checked;
    var checkNE = document.getElementById("m02").checked;
    if (checkYE === false && checkNE === false) {
        errors += emptyec;
    }
    if (errors !== "") {
        errors = emec + om + errors + msgRulesec + "<br />";
    }
    return errors;
}
// ****************************************************************
// ** Function Names : checkbox1() checkbox2() checkbox3()       **
// **                  checkbox4()                               **
// ** Called from   : Event Handler onclick                      **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** These functions are called when the user clicks on a       **
// ** checkbox in the form and changes the other checkboxs in    **
// ** the field to unchecked                                     **
// ****************************************************************
function checkbox1() {
  if(document.getElementById("s01").checked === true){
    document.getElementById("s02").checked = false;
  }
  else{
    document.getElementById("s01").checked = false;
  }
}
function checkbox2() {
  if(document.getElementById("s02").checked === true){
    document.getElementById("s01").checked = false;
  }
  else{
    document.getElementById("s02").checked = false;
  }
}
function checkbox3() {
  if(document.getElementById("c01").checked === true){
    document.getElementById("c02").checked = false;
  }
  else{
    document.getElementById("c01").checked = false;
  }
}
function checkbox4() {
  if(document.getElementById("c02").checked === true){
    document.getElementById("c01").checked = false;
  }
  else{
    document.getElementById("c02").checked = false;
  }
}
// ****************************************************************
// ** Function Name : subdate()                                  **
// **                                                            **
// ** Called from   : script tags in HTML code                   **
// ****************************************************************
// ** Function Description                                       **
// ** ====================                                       **
// **                                                            **
// ** This function is called to show the current date           **
// **                                                            **
// ****************************************************************
function subdate() {
    var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var date = new Date();
    var curmon = date.getMonth();
    var curdate = "Submitted on : ";
    curdate += months[curmon];
    var curday = date.getDate();
    if (curday.length === 1) {
        curday = "0" + curday;
    }
    curdate += " " + curday + ",";
    var curyear = date.getFullYear();
    curdate += " " + curyear;
    document.write(curdate);
}
