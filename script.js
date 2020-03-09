//moment("2019-06-04 15:35").isSame("2019-04-06", "hour"); - would return false, not the same
//isBefore, isAfter, isSameOrBefore

var availTimes = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]

var now = moment();
$("#today").text(now.format("dddd, MMMM Do YYYY"));

// $(".row").each(function(index) {
//     console.log( index + ": " + $( this ).text() );
// })


