document.getElementsByClassName(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",e.target[0].value);const t=e.target[0].value;console.log(t);const o=e.target[1].value;console.log(o)})),console.log("jj");
//# sourceMappingURL=03-feedback.8439abac.js.map
