// import throttle from "lodash.throttle";

const STORAGE_KEY_2 = "feedback-form-state";

const form = document.querySelector("feedback-form");

const but = document.getElementsByTagName("button");


function handelSubmit(e) {
    e.preventDefault()
    
    localStorage.setItem(STORAGE_KEY_2, e.target[0].value);
    const email = e.target[0].value;
    console.log(email)
    const message = e.target[1].value;
    console.log(message)
};

form.addEventListener('submit', handelSubmit)

console.log("jj")


