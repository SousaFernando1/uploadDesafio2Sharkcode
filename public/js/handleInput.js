const inputs = document.querySelectorAll(".login .input-group input");
const form = document.querySelector(".login");


form.addEventListener("change", handleSubmitForm);


function handleSubmitForm(event)
{
    const form = event.currentTarget;
    const inputs = form.querySelectorAll(".input-group input");
    const button = form.querySelector(".btn");

    let inputValue = [];

    for(const input of inputs)
    {
        const hasValue = input.value.length > 0;
        inputValue.push(hasValue);
    }

    if(inputValue.includes(false))
    {
        button.disabled = true;
    } else {
        button.disabled = false;
    }

}

console.log(inputs);

for(const input of inputs)
{
    input.addEventListener("focus", handleFocusInput);
    input.addEventListener("blur", handleBlurInput);
}

function  handleFocusInput(event)
{
    const input = event.target;
    const label = input.closest(".input-group").querySelector("label");
    label.classList.add("focus");
}

function handleBlurInput(event)
{
    const input = event.target;
    if(input.value.length > 0)
    {
        return;
    }
    const label = input.closest(".input-group").querySelector("label");
    label.classList.remove("focus");
}



const showPassword = document.querySelector(".login .input-group .show-password");
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
