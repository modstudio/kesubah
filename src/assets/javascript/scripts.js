const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (matchMedia('(prefers-color-scheme: dark)').matches){
  toggleSwitch.checked = true;
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Tooltip on mobile

// Define our viewportWidth variable
var viewportWidth;

// Set/update the viewportWidth value
var setViewportWidth = function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}
var el = document.querySelectorAll('sup');
// Log the viewport width into the console
var logWidth = function () {
  if (viewportWidth < 768) {
    el.forEach(
      (c) => c.onclick = (e) => {
        el.forEach(
          (c) => c.classList[e.target==c?'toggle':'remove']('active')
        )
      }
    )
    window.addEventListener('scroll', function() {
      el.forEach(function (element, index) {
        element.classList.remove('active');
      });
    });
  } else {
    return false
  }
}


// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function () {
  setViewportWidth();
  logWidth();
}, false);
