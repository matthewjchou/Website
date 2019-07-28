function displayDate() {
    var  text = document.getElementById("date")
    text.textContent += new Date().toDateString();
}

function randomizeImage() {
    var random = generateRandom(0, 10);
    const execSync = require('child_process').execSync;
    const output = execSync('ls -1 /home/matt/Pictures/iPhone/DCIM/10${random}APPLE/ | grep -i jpg | wc -l', {encoding: 'utf-8'});
    document.write(output);
}

function generateRandom(min, max) {
    var randomNum = (Math.random() * (max - min)) + min;
    randomNum = Math.floor(randomNum);
    // var filePath = `/home/matt/Pictures/iPhone/${fileNum}/`;
    // document.write(filePath);
    return randomNum;
}

displayDate()