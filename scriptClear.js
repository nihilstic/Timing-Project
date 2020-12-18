const today = new Date()
const MorningStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30, 0).getTime();
const MorningEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30, 0).getTime();
const AftnStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 00, 0).getTime();
const AftnEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 00, 0).getTime();

var limite;
if (today.getTime() > MorningStart && today.getTime() < MorningEnd) {limite = MorningEnd;}
if (today.getTime() > AftnStart && today.getTime() < AftnEnd) {limite = AftnEnd;}
if (undefined != limite) {
  var timer = setInterval(function () {
    var currentTime = new Date();
    var current = currentTime.getTime();
    var distance = limite - current;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

	  if (distance < 0) {
        clearInterval(timer);
        document.getElementById("counter").innerHTML = "not at work";
      }
   }, 1000);
}
