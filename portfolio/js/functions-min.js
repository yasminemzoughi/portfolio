function submitForm() {
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var textArea = document.querySelector('textarea[name="text"]');
  
    var isNameValid = nameInput.value.length >= 6;
    var isEmailValid = emailInput.value.trim() !== "";
    var isTextAreaValid = textArea.value.trim() !== "";
  
    if (isNameValid && isEmailValid && isTextAreaValid) {
      alert("Form submitted!");
    } else {
      alert("Please fill out the form correctly.");
    }
}
