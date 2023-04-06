// variable to use in the functions
var currentdayEl = $("#currentDay");
var currentTime = dayjs();
var presentTime = dayjs().format("HH");
// first function to use the save button and save it to local storage. 
$(".saveBtn").click(function () {
  var userInput = $(this).siblings("textarea").val();
  var timeBlockId = $(this).parent().attr("id");
  localStorage.setItem(timeBlockId, userInput);
  console.log();
});
// Next function to set the date time formated to the header. 
function start() {

  var now = dayjs().format("ddd, MMMM D, YYYY hh:mm");
  currentdayEl.text(now);
  // The next function is what will change the color of the block depending on the hour. 
  $(".time-block").each(function (i, obj) {
   
    var elementTime = parseInt($(obj).data("militarytime"));
    var presentTimeInt = parseInt(presentTime);
    // console.log(elementTime, presentTimeInt)
    if (elementTime > presentTimeInt) {
      $(obj).addClass("future");
      $(obj).removeClass("past");
      $(obj).removeClass("present");
    } else if (elementTime === presentTimeInt) {
      $(obj).addClass("present");
      $(obj).removeClass("past");
      $(obj).removeClass("future");
    } else {
      $(obj).addClass("past");
      $(obj).removeClass("future");
      $(obj).removeClass("present");
    }
  });
  // Then added each id class to find the child element and save it to local storage.
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-1").children(".description").val(localStorage.getItem("hour-1"));
  $("#hour-2").children(".description").val(localStorage.getItem("hour-2"));
  $("#hour-3").children(".description").val(localStorage.getItem("hour-3"));
  $("#hour-4").children(".description").val(localStorage.getItem("hour-4"));
  $("#hour-5").children(".description").val(localStorage.getItem("hour-5"));
};

start()
