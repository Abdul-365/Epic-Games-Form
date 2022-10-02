
// Dropdown 

const dropdown = document.querySelector('.dropdown');
const searchCountry = dropdown.querySelector('#search-country');
const dropdownContent = dropdown.querySelector('.dropdown-content');
const noOptions = dropdown.querySelector('.no-options');
const icon = dropdown.querySelector('.icon');
const i = dropdown.querySelector('i');
let lastSelectedCountry = searchCountry.value;

fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((json) => displayResults(json))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));

function displayResults(countryList) {
    countryArr = [];
    countryList.forEach(item => {
        countryArr.push(item.name.common);
    })
    countryArr.sort();
    countryArr.forEach((country) => {
        const option = document.createElement('li');
        option.textContent = country;
        option.role = 'option';
        dropdownContent.appendChild(option);
    })
}

searchCountry.addEventListener('focus', () => {
    Array.from(dropdown.querySelectorAll('li')).forEach(item => {
        item.style.display = 'list-item';
    })
    noOptions.style.display = 'none';
    searchCountry.style.borderColor = 'white';
    dropdownContent.style.display = 'block';
    i.style.transform = 'rotate(180deg)';
})
var blurred = function() {
    searchCountry.value = lastSelectedCountry;
    searchCountry.style.borderColor = '';
    dropdownContent.style.display = '';
    i.style.transform = 'rotate(0deg)';
}
searchCountry.addEventListener('blur', blurred);

dropdownContent.addEventListener('click', (e) => {
    if (e.target.role !== 'option') {
        searchCountry.focus();
        return;
    }
    lastSelectedCountry = e.target.textContent;
    searchCountry.focus();
    searchCountry.addEventListener('blur', blurred);
    searchCountry.blur();
})
dropdownContent.addEventListener('mouseover', () => {
    searchCountry.removeEventListener('blur', blurred);
})
dropdownContent.addEventListener('mouseout', () => {
    searchCountry.addEventListener('blur', blurred);
})

searchCountry.addEventListener('keyup', () => {
    let input = searchCountry.value;
    input = input.toLowerCase();
    let x = dropdownContent.querySelectorAll('li');
    let found = false;
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
            found = true;
        }
    }
    if (found === false)
        noOptions.style.display = 'block';
    else noOptions.style.display = 'none';
})

var checkFocused = function () {
    focused = document.activeElement;
}
icon.addEventListener('mouseover', checkFocused)

icon.addEventListener('click', () => {
    icon.removeEventListener('mouseover', checkFocused)
    if (searchCountry !== focused)
        searchCountry.focus();    
    else searchCountry.blur();
    focused = document.activeElement;
    icon.addEventListener('mouseover', checkFocused)
})

// Input Boxes

document.querySelectorAll('.box input')
    .forEach(item => {
        const placeholder = item.parentNode.querySelector('.placeholder');
        const validity = item.parentNode.querySelector('.validity');
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

const email = document.querySelector('#email');
email.addEventListener('blur', () => {
    const validit = email.parentNode.querySelector('.validity');
    if (email.value !== '') {
        if (email.validity.valid) {
            validit.value = '';
        } else {
            validit.textContent = 'Invalid format';
            validit.style.visibility = 'visible';
            email.style.borderColor = 'rgb(204, 41, 41)';
        }
    }
})

const password = document.querySelector('#password');
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

const eye = document.querySelector('.eye');
const on = eye.querySelector('.on');
const off = eye.querySelector('.off');
eye.addEventListener('click', () => {
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

// Checkboxes 

const checkbox = document.querySelector('#terms-checkbox');
const acceptance = document.querySelector('.acceptance');
document.querySelector('#terms-cond')
    .addEventListener('click', () => {
        if (!checkbox.checked) {
            acceptance.style.display = 'flex';
        } else {
            acceptance.style.display = '';
        }
    })

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
        if (!checkbox.checked) {
            foundInvalid = true;
            acceptance.style.display = 'flex';
        }
        if (password.value.includes(' '))
            foundInvalid = true;
        if (foundInvalid == true) {
            e.preventDefault();
        }
    })