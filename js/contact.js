const setKey = (key, id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.setItem(key, inputFieldValue);
}


const removeKey = (key) => {
    localStorage.removeItem(key);
}

const resetAll = () => {
    localStorage.clear();
}

const getStored = () => {
    let send = {}
    const storedSend = localStorage.getItem('send')
    if(storedSend){
        send = JSON.parse(storedSend);
    }
    return send;
}

const sendObject = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');
    const storedSend = getStored();
    storedSend['name'] = name;
    storedSend['email'] = email;
    storedSend['message'] = message;
    
    const sortedSendStringified = JSON.stringify(storedSend)

    localStorage.setItem('send', sortedSendStringified)

    
}
