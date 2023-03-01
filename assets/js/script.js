
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




 // }
        // display current day on page
    $("#currentDay").text(dayjs().format('dddd, MMMM, D'));







  
});

