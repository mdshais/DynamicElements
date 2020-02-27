console.log("It Works!");

const firstBtn = document.createElement("button");
firstBtn.textContent = "Go";

const secondBtn = firstBtn.cloneNode(true);
secondBtn.textContent = "Lets Go";

const myImage = document.createElement('img');
myImage.src = "./cat.jpg";
myImage.alt = "Cute Cat";

myImage.addEventListener('click',function() {
    alert('Awesome mini project!');
})

secondBtn.addEventListener('click',function() {
    secondBtn.insertAdjacentElement('afterend',myImage);
    console.log('Inside second button');
    
})

firstBtn.addEventListener('click',function() {
    firstBtn.insertAdjacentElement('afterend',secondBtn);
    console.log('Inside first button');
    
})
document.body.appendChild(firstBtn);