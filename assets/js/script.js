

$(document).ready(function () {

  $(".saveBtn").on("click", function() {

    // get values
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    // save in localStorage
    localStorage.setItem(time, description);
  });





    function checkHour() {
//  get current hour to make comparison 
 var currentHour = dayjs().hour();


 // go thru time blocks 
 $(".time-block").each(function() {

  var blockHour = parseInt($(this).attr("id").split("-")[1]);

  // compare time block to current time to put apropriate color in textarea

  if (blockHour< currentHour) {
    $(this).addClass("past");
  }

  else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
}

 checkHour();

 setInterval(checkHour, 1000);

// Get saved data from the localStorage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));





 
         // display current day on page
     $("#currentDay").text(dayjs().format('dddd, MMMM, D'));

// Noticed im having to refresh the page to make the color markers move on the hour change
// also when i put in more detail for the format of currentDay time. 

  
});

