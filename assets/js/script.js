
$(document).ready(function () {

  $(".saveBtn").on("click", function() {

    // get values
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    // save in localStorage
    localStorage.setItem(time, description);
  });





    function checHour() {
//  get current hour to make comparison 
 var currentHour = dayjs().hour();



 checkHour();
 setInterval(checkHour, 1000);




 }
        // display current day on page
    $("#currentDay").text(dayjs().format('dddd, MMMM, D'));







  
});

