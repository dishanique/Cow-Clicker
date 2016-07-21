var clicks = 0;
    function clickME() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks; //getElementById() not getElementByID() Which you corrected in edit
 }
 