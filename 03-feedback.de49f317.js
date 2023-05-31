!function(){var e="feedback-form-state",t=localStorage.getItem(e),a=document.querySelector(".feedback-form");a.firstElementChild.lastElementChild.value=t,a.addEventListener("submit",(function(t){t.preventDefault(),localStorage.setItem(e,t.target[0].value);var l=t.target[0].value,o=t.target[1].value;console.log(l),console.log(o),a.reset()}))}();
//# sourceMappingURL=03-feedback.de49f317.js.map
