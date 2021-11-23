var phoneBorder = document.getElementById("brd");
var phoneNum = document.getElementById("phoneNum");
var phoneNum2 = document.getElementById("phoneNum2");
var phoneNum3 = document.getElementById("phoneNum3");
var codeNum = document.getElementById("codeNum");
var idType = document.getElementById("idType");
var idNum = document.getElementById("idNum");
var idType2 = document.getElementById("idType2");
var idNum2 = document.getElementById("idNum2");
var place = document.getElementById("place");
var apDate = document.getElementById("date");
var apTime = document.getElementById("time");
var place2 = document.getElementById("place2");
var apDate2 = document.getElementById("date2");
var apTime2 = document.getElementById("time2");
var place3 = document.getElementById("place3");
var errInfo = document.getElementById("errInfo");


function Resize() {
    phoneBorder.style.width = 0.9 * document.body.clientHeight / 2 + "px";
    phoneBorder.style.left = (document.body.clientWidth - parseInt(phoneBorder.style.width)) / 2 + "px";
}

function ChangePage(pageName) {
    if (pageName == "page5") {
        if (codeNum.value != "211123") {
            errInfo.style.display = "block";
            return;
        }
    } else if (pageName == "page6") {
        idNum2.value = idNum.value;
        idType2.value = idType.value;
        phoneNum3.value = phoneNum.value;
    } else if (pageName == "page8") {
        phoneNum2.value = phoneNum.value;
        place2.value = place.value;
        apDate2.value = apDate.value;
        apTime2.value = apTime.value;
    } else if (pageName == "page9") {
        place3.value = place.value;
    }


    var pages = document.querySelectorAll(".page");
    var targetPage = document.getElementById(pageName);
    [].forEach.call(pages, function(page) {
        page.classList.remove("active");
    })
    targetPage.classList.add("active");


}

function Code() {
    var info = document.getElementById("info");
    info.classList.add("active")
    setTimeout(function() { info.classList.remove("active") }, 5000);
}

window.onresize = function() {
    Resize();
};


Resize();