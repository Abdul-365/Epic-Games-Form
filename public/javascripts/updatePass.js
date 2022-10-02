
// Input Boxes

document.querySelectorAll('.box input')
    .forEach(item => {
        const placeholder = item.parentNode.querySelector('.placeholder');
        const validity = item.parentNode.querySelector('.validity');
        if (item.value !== '') {
            placeholder.style.top = '11px';
            placeholder.style.fontSize = '12px';
            validity.style.visibility = 'hidden';
            item.style.borderColor = '';
        }
        item.addEventListener('blur', () => {
            if (item.value !== '') {
                placeholder.style.top = '11px';
                placeholder.style.fontSize = '12px';
                validity.style.visibility = 'hidden';
                item.style.borderColor = '';
            } else {
                validity.textContent = 'Required';
                validity.style.visibility = 'visible';
                item.style.borderColor = 'rgb(204, 41, 41)';
                placeholder.style.top = '';
                placeholder.style.fontSize = '';
            }
        })
        item.addEventListener('focus', () => {
            item.style.borderColor = 'white';
            validity.style.visibility = 'hidden';
        })
    })

document.querySelectorAll('.password') 
    .forEach(password => {
        password.addEventListener('blur', () => {
            const validit = password.parentNode.querySelector('.validity');
            if (password.value !== '') {
                if (password.validity.valid && !password.value.includes(' ')) {
                    validit.value = '';
                }
                else if (password.value.includes(' ')) {
                    validit.textContent = 'Invalid Format';
                    validit.style.visibility = 'visible';
                    password.style.borderColor = 'rgb(204, 41, 41)';
                } 
                else {
                    validit.textContent = 'Too short';
                    validit.style.visibility = 'visible';
                    password.style.borderColor = 'rgb(204, 41, 41)';
                }
            }
        })
        const eye = password.parentNode.querySelector('.eye');
            eye.addEventListener('click', () => {
                const on = eye.querySelector('.on');
                const off = eye.querySelector('.off');
                if (password.type === 'password') {
                    password.type = 'text';
                    off.style.display = 'none';
                    on.style.display = 'block';
                } else {
                    password.type = 'password';
                    off.style.display = 'block';
                    on.style.display = 'none';
                }
            })
    });

let passMatch = validit.getAttribute('pass');
if (passMatch == 'false') {
    validit.textContent = 'Incorrect Password';
    validit.style.visibility = 'visible';
    password.style.borderColor = 'rgb(204, 41, 41)';
}

// Form submission

document.querySelector('form')
    .addEventListener('submit', (e) => {
        const inputs = document.querySelectorAll('.text-boxes input');
        var foundInvalid = false;
        for (const input of inputs) {
            if (!input.validity.valid) {
                foundInvalid = true;
                if (input.value == '') {
                    const validity = input.parentNode.querySelector('.validity');
                    validity.textContent = 'Required';
                    validity.style.visibility = 'visible';
                    input.style.borderColor = 'rgb(204, 41, 41)';
                }
            }
        }
        if (password.value.includes(' '))
            foundInvalid = true;
        if (foundInvalid == true) {
            e.preventDefault();
        }
    })