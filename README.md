# ⏰ Neon Glow Digital Clock

This project is a simple, stylish digital clock implemented purely with **HTML**, **CSS**, and **JavaScript**. <br>It features a modern, segmented look with a vibrant cyan neon glow effect, displaying the current time (12-hour format with AM/PM) and the full date (Day, Date, Month, Year).

## 🚀 Features

  * **Real-Time Display:** Updates the time every second.
  * **12-Hour Format:** Displays hours, minutes, and seconds, along with AM/PM indicator.
  * **Full Date Display:** Shows the current day, date, month, and year.
  * **Neon Glow Effect:** Uses CSS `text-shadow` for a distinct, high-contrast digital neon aesthetic.
  * **Segmented Time Boxes:** Time components are enclosed in individual, glowing boxes for a retro digital feel.

## 🛠️ Technologies Used

  * **HTML5:** For the clock structure and elements.
  * **CSS3:** For styling, layout, and creating the neon glow effect.
  * **JavaScript (ES6):** For fetching the system time, formatting it, and updating the DOM elements.

## 📂 File Structure

```
neon-glow-clock/
├── index.html          (The main structure of the clock)
├── style.css           (The styling, including the neon effects)
└── script.js           (The clock logic and time updates)
```

## 📋 Installation and Setup

### 1\. Clone the repository

```bash
git clone [YOUR_REPOSITORY_URL]
cd neon-glow-clock
```

### 2\. View the Clock

This is a front-end only project, so no server is required.

  * Simply open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge).

## 💻 Code Overview

### `index.html` (Structure)

The HTML defines containers for the time and date, using specific IDs that the JavaScript targets:

```html
<div class="time">
  <div class="time-box" id="hours"></div>
  <div class="colon">:</div>
  <div class="time-box" id="minutes"></div>
  </div>
<div class="date-info">
  <div id="day"></div>
  </div>
```

### `style.css` (Visuals and Glow)

The CSS defines the dark background, centers the clock, and applies the glow, primarily using the `text-shadow` property on the `.time-box` elements:

```css
.time-box {
    /* ... formatting properties ... */
    text-shadow: 
      0 0 5px #00ffcc, 
      0 0 10px #00ffcc, 
      /* ... more shadow layers for intensity ... */
      0 0 50px #00ffcc;
}
```

### `script.js` (Logic)

The JavaScript contains the main function `updateTime()` which runs every second:

```javascript
function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    
    // Convert to 12-hour format and pad digits
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Update time elements
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    // ... update minutes, seconds, am/pm ...

    // Update date elements
    // ... logic to map numbers to names, then update day, date, month, year ...
}

setInterval(updateTime, 1000); // Run every 1 second
updateTime(); // Initial call
```

## ⚙️ Customization

### Changing the Neon Color

To change the primary neon color (currently a cyan `#00ffcc`), modify the color value across the following CSS selectors in `style.css`:

1.  **`.time-box`**: Change the color in all `text-shadow` values.
2.  **`.clock`**: Change the color in the `box-shadow` property.
3.  **`.date-info div`**: Change the color in the `text-shadow` property.

For example, to change it to **Electric Pink**, replace `#00ffcc` with `#ff00a6`.

### Changing the Font

The current CSS uses `font-family: 'Arial', sans-serif;`. For a better digital look, consider importing a monospace font like 'Share Tech Mono' (as suggested in the previous response) and updating the `font-family` property in the `body` selector.
