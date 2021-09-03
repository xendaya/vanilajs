setInterval(showTime, 1000);

      function showTime(){
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        AMPM = 'AM'; 

      if(hr > 12) {
        hr -= 12;
        AMPM = "PM";
      }
      if(hr == 0) {
        hr = 12;
        AMPM = "AM";
      }

      hr = hr < 10 ? "0" + hr : hr;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let curentTime = hr + ":" + min + ":" + sec + AMPM; 

      document.getElementById('digital_clock').innerHTML = curentTime;

    }
    showTime();