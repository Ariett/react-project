export const setErrorMessage = (fieldName, message) => {
    let field = document.querySelector(`[name=${fieldName}]`);
    field.nextElementSibling.classList.add('form_error');
    field.nextElementSibling.innerHTML = message;
};

export const removeErrorMessage = (fieldName) => {
    let field = document.querySelector(`[name=${fieldName}]`);
    field.nextElementSibling.classList.remove('form_error');
    field.nextElementSibling.innerHTML = '';
};