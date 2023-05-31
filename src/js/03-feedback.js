// import throttle from "lodash.throttle";

const STORAGE_KEY_2 = "feedback-form-state";
const getPreviousInput = localStorage.getItem(STORAGE_KEY_2)
const form = document.querySelector(".feedback-form");
form.firstElementChild.lastElementChild.value = getPreviousInput;

function handelSubmit(e) {
    e.preventDefault();

    localStorage.setItem(STORAGE_KEY_2, e.target[0].value);

    // const both = {
    //     email: e.target[0].value,
    //     message: e.target[1].value,
    // };

    const email   = e.target[0].value;
    const message = e.target[1].value;
    
    console.log(email);
    console.log(message)
    form.reset()
};
form.addEventListener('submit', handelSubmit);
//console.log(getPreviousInput)
