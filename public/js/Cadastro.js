
const form = document.querySelector('form');
console.log(form);


form.addEventListener('change',(event)=>{
    
})

const inputs = document.querySelectorAll('.register-box .content .form .input-group input');
console.log(inputs);

inputs.forEach((input)=>{
input.addEventListener('focus',handleFocusInput);
input.addEventListener('blur',handleBlurInput);

})
function handleBlurInput(event){
    const input = event.target;
    const label = input.closest('.input-group').querySelector('label');

    if(input.value.length > 0){
        return;
    }

    label.classList.remove('is-focused');

}
function handleFocusInput(event){
   const input = event.target;

   const label = input.closest('.input-group').querySelector('label');


   label.classList.add('is-focused');
}

const showPassword = document.querySelector(".input-group .showPassword");
showPassword.addEventListener("click", handleShowPassword);

function handleShowPassword(event)
{
    const showPassword = event.target;
    const input = showPassword.closest(".input-group").querySelector("input");

    if(showPassword.classList.contains("eye"))
    {
        input.type = "password";
        showPassword.classList.remove("eye");
        showPassword.classList.add("eye-closed");
    } else {
        input.type = "text";
        showPassword.classList.add("eye");
        showPassword.classList.remove("eye-closed");
    }
}
