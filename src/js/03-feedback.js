import throttle from "lodash.throttle";
const STORAGE_KEY_2 = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

// Load saved form data from localStorage
loadFormData();

// Save form data on input change
form.addEventListener('input', throttle((saveFormData) , 1000));
form.addEventListener('submit', handleSubmit);

function saveFormData() {
  const formData = new FormData(form);
  const serializedData = JSON.stringify(Object.fromEntries(formData.entries()));
  localStorage.setItem(STORAGE_KEY_2, serializedData);
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY_2);

  if (savedData) {
      const parsedData = JSON.parse(savedData);
      
  for (const [name, value] of Object.entries(parsedData)) {
        
      if (form.elements[name]) {
          form.elements[name].value = value;
          console.log(form.elements[name].value)
      }
    }
  }
}

function handleSubmit(e) {
    e.preventDefault(); 

    localStorage.clear(STORAGE_KEY_2);
    
    console.log(localStorage.getItem(STORAGE_KEY_2));

    form.reset();
}


