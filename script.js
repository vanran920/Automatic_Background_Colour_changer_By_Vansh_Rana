//Generate a random color. 
let intervalId = null;
function randomColour()
{
    const hex = "0123456789ABCDEF";
    let val = "#";
    for(let i = 0; i<6; i++)
    {
        val+= hex[Math.floor(Math.random()*16)];
    }
    return val;
}

const colourrange = function (){
    if(!intervalId) // !intervalId means “if intervalId is falsy”.
    {
        intervalId = setInterval(changeBackgroundColor,1000);
    }
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = randomColour()
}





document.querySelector('#startBtn').addEventListener('click', colourrange)
document.querySelector('#stopBtn').addEventListener('click', function (){
    clearInterval(intervalId)
    intervalId = null;
})

// document.querySelector('#startBtn').addEventListener('click', colourrange);

// document.querySelector('#stopBtn').addEventListener('click', function () {
//     clearInterval(intervalId);
//     intervalId = null;
// });
