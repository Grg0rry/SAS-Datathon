(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    var dday = new Date("April 1, 2022 23:59:59").getTime();
    x = setInterval(function() {    
        var now = new Date().getTime();
        var distance = dday - now;
        
        //Display Results
        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("days").innerText = 0,
            document.getElementById("hours").innerText = 0,
            document.getElementById("minutes").innerText = 0,
            document.getElementById("seconds").innerText = 0;
            clearInterval(x);
        }
          //seconds
        }, 0)
    }());
