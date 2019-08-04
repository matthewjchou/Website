function displayDate() {
    var  text = document.getElementById('date')
    text.textContent += new Date().toDateString();
}

function randomizeImage() {
    var random = generateRandom(1, 7);
    var img = document.getElementById('image');     
    console.log(random);
    img.src = `../resources/images/${random}.JPG`;
}

function generateRandom(min, max) {
    var randomNum = (Math.random() * (max - min)) + min;
    randomNum = Math.floor(randomNum);
    
    return randomNum;
}

function updatePage() {
    displayDate()
    randomizeImage()
}

updatePage();