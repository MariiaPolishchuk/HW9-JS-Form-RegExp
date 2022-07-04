const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('#myInput');
const list = document.querySelector('.list')
const mainForm = document.querySelector('#mainForm');

wrapper.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
    let element = event.target;

    switch (action) {
        case 'add-item':
            addItem();
            break;
        case 'remove-item':
            removeItem(element);
            break;
        case 'state-toggle':
            stateToggle(element);
            break;
    }
});

input.addEventListener('input', (event) => {
    verivication(event.target.value);
});

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

mainForm.addEventListener('reset', (event) => {
    event.preventDefault();
})

function addItem() {
    const liItem = document.createElement('li');
    liItem.dataset.action = 'state-toggle';
    if (verivication(input.value) && input.value) {
        liItem.innerHTML = `${input.value} <button class="btn btn-remove" data-action="remove-item" title="Remove">-</button>`;
        list.append(liItem);
        input.value = '';
    }

    return false;
}


function removeItem(elem) {
    if (confirm('Are you sure?')) {
        elem.closest('li').remove();
    } 
}

function stateToggle(elem) {
    elem.classList.toggle('done');
}



function verivication(str) {
    const regExp = /^[a-zA-Z0-9]{2,25}$/g;
    let result = regExp.test(str);

    if (!result && str) {
        mainForm.classList.add('invalid');
    } else {
        mainForm.classList.remove('invalid');
    }
    return result;
}


