/************  Header bg Reveal *************/

const headerBg = () => {
    const header = document.querySelector('.header-js');

    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            header.classList.add('bg-reveal');
        } else {
            header.classList.remove('bg-reveal');
        }
    })
}
headerBg();

/************  Auto Typing *************/

const autoTyping = () => {
    const text = document.querySelector('.auto-typing');

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Yassine"
        }, 0);
        setTimeout(() => {
            text.textContent = "Developer"
        }, 4000);
    }
    textLoad();
    setInterval(textLoad, 8000);

}
autoTyping();