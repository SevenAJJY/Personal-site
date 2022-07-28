/************  Style Switcher *************/

const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector('.js-style-switcher');
    const styleSwitcherToggler = document.querySelector('.js-style-switcher-toggler');

    styleSwitcherToggler.addEventListener('click', function() {
        styleSwitcher.classList.toggle('open');
        this.querySelector('i').classList.toggle("fa-times");
        this.querySelector('i').classList.toggle("fa-gear");
    });
}
styleSwitcherToggle();


/************  Theme Color *************/


const themeColor = () => {
    const hueSlider = document.querySelector('.js-hue-slider');
    const html = document.querySelector('html');

    const setHue = (value) => {
        html.style.setProperty('--hue', value);
        document.querySelector('.js-hue').textContent = value;
    }

    hueSlider.addEventListener("input", (e) => {
        setHue(e.target.value);
        window.localStorage.setItem('--HUE', e.target.value);
    });

    const slider = (value) => {
        hueSlider.value = value;
    }

    if (window.localStorage.getItem('--HUE') !== null) {
        setHue(window.localStorage.getItem('--HUE'));
        slider(window.localStorage.getItem('--HUE'));
    } else {
        const hue = getComputedStyle(html).getPropertyValue('--hue');
        setHue(hue);
        slider(hue.split(" ").join(""));
    }
}

themeColor();


/************  Theme Light & Dark Mode *************/

const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector('.js-dark-mode');

    const themeMode = () => {
        if (localStorage.getItem('theme-dark') !== "false") {
            document.body.classList.remove('t-dark');
        } else {
            document.body.classList.add('t-dark');
        }
    }

    darkModeCheckbox.addEventListener('click', function() {
        localStorage.setItem('theme-dark', this.checked);
        themeMode();
    });

    if (localStorage.getItem('theme-dark') !== null) {
        themeMode();
    }
    if (document.body.classList.contains('t-dark')) {
        darkModeCheckbox.checked = true;
    }
}

themeLightDark();