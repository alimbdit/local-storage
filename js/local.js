// level 2

// const fullName = {firstName:'Abraham', lastName:'Linkon'};
// const fullNameStringified = JSON.stringify(fullName);

// localStorage.setItem('fullName', fullNameStringified);


// level-3 

let count = 0;

const add = () => {
    const field = document.getElementById('field');
    const fieldText = field.innerText;
    let fieldTextInt = parseInt(fieldText);
    // count++;
    fieldTextInt++;
    
    // field.innerText = count;

    // saveToLocalStorage(count);
    displayCount(fieldTextInt);
    saveToLocalStorage(fieldTextInt);
    // loadFromLocalStorage(fieldTextInt);


}

const displayCount = ( fieldTextInt) => {
    const field = document.getElementById('field');
    field.innerText = fieldTextInt;
}

const getCount = () => {
    const storedCount = localStorage.getItem('count');
    let countInt = JSON.parse(storedCount);
    return countInt;
}


const saveToLocalStorage = (count) => {
    localStorage.setItem('count', count)
}

const loadFromLocalStorage = (count) => {
    const saveCount = getCount();
    displayCount(saveCount)

}

loadFromLocalStorage();