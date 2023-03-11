const promptMessage = () => {
    const num = prompt('Give a number');
    const num2 = parseInt(num);

    alert(num2+200)
}


const showLocation = () => {
    const conf = confirm('Do you want to see location??')
    if(conf){
        console.log(window.location.href);
        alert(window.location.href);
    }
}