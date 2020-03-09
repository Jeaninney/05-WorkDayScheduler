//moment("2019-06-04 15:35").isSame("2019-04-06", "hour"); - would return false, not the same
//isBefore, isAfter, isSameOrBefore

//past is .bg-dark
//present is .bg-warning
//future is .bg-success
$(function () {
var availTimes = [9,10,11,12,13,14,15,16,17]

var now = moment();
$("#today").text(now.format("dddd, MMMM Do YYYY"));

var currenthour = now.format("H");

function init(){

    $(".hourblocktext").each(function (index) {
        var thisvalue = $(this).attr("value");
        console.log(thisvalue);
        console.log(currenthour);
        //this if will make the block of time that matches the current hour yellow
        if (currenthour == thisvalue) {
            console.log("We have a match.");
            console.log($(this).attr("class"));
            $(this).addClass("bg-warning");
            console.log($(this).attr("class"));
        }
        //this will make time blocks in the past turn dark grey
        else if (currenthour < thisvalue) {
            $(this).addClass("bg-success");
        }
        //this will make time blocks in the future green
        else {
            $(this).addClass("bg-dark");
        }
       
        // $(".hourblocktext").text = localStorage.getItem()

    } )
}
init();
// $(".hourblock").on ("click", function (event) {
//     event.preventDefault;
//     // alert(this).text;
//     // console.log( index + ": " + $( this ).text() );
//     var storedEvent = localStorage.getItem((this).val)
// })

})