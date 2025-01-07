function updateTime() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const amPmElement = document.getElementById("am-pm");
  
    const currentTime = new Date();
  
    // Get hours, minutes, and seconds
    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  
    // Convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  
    // Update time
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    amPmElement.textContent = amPm;
  
    // Get day, date, month, and year
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[currentTime.getDay()];
    
    const date = currentTime.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[currentTime.getMonth()];
    const year = currentTime.getFullYear();
  
    // Update date info
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;
  }
  
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to display time immediately
  