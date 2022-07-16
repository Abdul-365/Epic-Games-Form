
// Dropdown 

const dropdown = document.querySelector('.dropdown');
const searchCountry = dropdown.querySelector('#search-country');
const dropdownContent = dropdown.querySelector('.dropdown-content');
const noOptions = dropdown.querySelector('.no-options');
const icon = dropdown.querySelector('.icon');
const i = dropdown.querySelector('i');
const countryList = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan (Province of China)",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
let lastSelectedCountry = searchCountry.value;

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

countryList.forEach((country) => {
    const option = document.createElement('li');
    option.textContent = country;
    option.role = 'option';
    dropdownContent.appendChild(option);
})

const options = Array.from(dropdownContent.querySelectorAll('li'));
options.forEach(option => {
    option.addEventListener('click', (e) => {
        lastSelectedCountry = option.textContent;
        searchCountry.focus();
        searchCountry.addEventListener('blur', blurred);
        searchCountry.blur();
        e.stopPropagation();
    })
})

dropdownContent.addEventListener('mouseover', () => {
    searchCountry.removeEventListener('blur', blurred);
})
dropdownContent.addEventListener('mouseout', () => {
    searchCountry.addEventListener('blur', blurred);
})
dropdownContent.addEventListener('click', () => {
    searchCountry.focus();
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

icon.addEventListener('mouseover', () => {
    focused = document.activeElement;
})
icon.addEventListener('click', () => {
    if (searchCountry !== focused)
        searchCountry.focus();    
    else searchCountry.blur();
    focused = document.activeElement;
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