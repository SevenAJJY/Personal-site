/************  animate on scroll *************/
window.addEventListener('load', () => {
    const preloader = document.querySelector('.js-preloader');
    preloader.classList.add('fade-out');

    setTimeout(() => {
        preloader.style.display = "none";
        /* animate on scroll */
        AOS.init();
    }, 600);


});

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
        setTimeout(() => {
            text.textContent = "Designer"
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);

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

/************  Contact Message Length *************/


const messageLength = () => {
    const textarea = document.querySelector('textarea');
    const inputBox = document.querySelector('.message');
    const signal_num = document.querySelector('.signal_num');

    textarea.addEventListener("keyup", () => {
        valLength = textarea.value.length;
        signal_num.textContent = valLength;
        inputBox.classList.add('active-l');

        valLength > 0 ? inputBox.classList.add('active-l') : inputBox.classList.remove('active-l');
        valLength > 100 ? inputBox.classList.add('error') : inputBox.classList.remove('error');

    });
}

messageLength();

/************  Contact Form validation *************/


const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const umessage = document.getElementById("umessage");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (checkInputs().length > 0) {
    //     e.preventDefault();
    // }
    checkInputs();
});

function checkInputs() {
    //formErrors
    let formErrors = [];

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const umessageValue = umessage.value.trim();

    if (fullNameValue === "") {
        formErrors.push("Full name cannot be Empty");
        setErrorFor(fullName, "Full name cannot be Empty");
    } else if (fullNameValue.length < 4) {
        formErrors.push("full name must be large than  4 chars");
        setErrorFor(fullName, "full name must be large than  4 chars");
    } else {
        setSuccessFor(fullName);
    }

    if (emailValue === "") {
        formErrors.push("email cannot be Empty");
        setErrorFor(email, "email cannot be Empty");
    } else if (!isEmail(emailValue)) {
        formErrors.push("Email is not valid!");
        setErrorFor(email, "Email is not valid!");
    } else {
        setSuccessFor(email);
    }

    if (subjectValue === "") {
        formErrors.push("Subject cannot be Empty");
        setErrorFor(subject, "Subject cannot be Empty");
    } else if (subjectValue.length < 4) {
        formErrors.push("Subject must be large than 4 chars");
        setErrorFor(subject, "Subject must be large than 4 chars");
    } else {
        setSuccessFor(subject);
    }

    if (umessageValue === "") {
        formErrors.push("Message cannot be Empty");
        setErrorFor(umessage, "Message cannot be Empty");
    } else if (umessageValue.length > 100) {
        formErrors.push("Message must be less than  100 chars");
        setErrorFor(umessage, "Message must be less than  100 chars");
    } else if (umessageValue.length < 30) {
        formErrors.push("Message must be large than 30 chars");
        setErrorFor(umessage, "Message must be large than 30 chars");
    } else {
        setSuccessFor(umessage);
    }
    return formErrors;
}

function setErrorFor(inputField, message) {
    const inputBox = inputField.parentElement;
    const small = inputBox.querySelector('small');
    small.textContent = message;
    if (inputBox.classList.contains('vfsxx')) {
        inputBox.classList.replace('vfsxx', 'vfexx');
    } else {
        inputBox.classList.add('vfexx')
    }
}

function setSuccessFor(inputField) {
    const inputBox = inputField.parentElement;
    if (inputBox.classList.contains('vfexx')) {
        inputBox.classList.replace('vfexx', 'vfsxx');
    } else {
        inputBox.classList.add('vfsxx');
    }

}

function isEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

/************  Navigation *************/

const navigation = () => {
    const navToggler = document.querySelector('.js-nav-toggler');
    const nav = document.querySelector('.js-nav');
    const navItems = nav.querySelectorAll('li');

    const navToggle = () => {
        nav.classList.toggle('open');
        navToggler.classList.toggle('active');
    }

    navToggler.addEventListener('click', navToggle);

    navItems.forEach((li) => {
        li.querySelector('a').addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                navToggle();
            }
        });
    });
}

navigation();