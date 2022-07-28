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

/************  Download CV *************/

const downloadCV = () => {
    let button = document.querySelector('.button');
    button.addEventListener('click', (e) => {
        button.classList.add('active-button');

        setTimeout(() => {
            let link = document.querySelector('.button-text');
            button.classList.remove('active-button');
            document.querySelector('.i-change').classList.replace('fa-cloud-arrow-down', 'fa-circle-check')
            link.innerText = 'Completed';
        }, 3000);
    });
}

downloadCV();

/************  Project Filter *************/
const projectsFilter = () => {
    const list = document.querySelectorAll(".list");
    const itemBox = document.querySelectorAll(".itemBox");

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('projects-filter-active');
            }
            this.classList.add('projects-filter-active');

            const dataFilter = this.getAttribute('data-filter');

            for (let k = 0; k < itemBox.length; k++) {
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');

                if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                    console.log(dataFilter == "all");
                    itemBox[k].classList.remove('hide');
                    itemBox[k].classList.add('active');
                }
            }
        });
    }
}

projectsFilter();