$(document).ready(function () {
    let timeLeft = 5 * 60; // 5 minutes in seconds
  
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const formattedTime = 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (seconds < 10 ? '0' : '') + seconds;
  
      $('#timer').text(formattedTime);
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        $('#buyNow').prop('disabled', true);
        $('#buyNow').text('Deal Expired');
      }
  
      timeLeft--;
    }
  
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to show 05:00 immediately
  });
  