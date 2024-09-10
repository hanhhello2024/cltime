let startTime;
let endTime;
let timer;
let chosenOption = '';

document.getElementById('startButton').addEventListener('click', function() {
    startTime = new Date().getTime();
    document.getElementById('stopButton').disabled = false;
    document.getElementById('chanButton').disabled = false;
    document.getElementById('leButton').disabled = false;
    document.getElementById('startButton').disabled = true;

    timer = setInterval(function() {
        const currentTime = (new Date().getTime() - startTime) / 1000;
        document.getElementById('timeDisplay').textContent = `Thời gian: ${currentTime.toFixed(3)} giây`;
    }, 10);
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(timer);
    endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000;
    document.getElementById('timeDisplay').textContent = `Thời gian: ${elapsedTime.toFixed(3)} giây`;

    if (chosenOption === '') {
        alert("Bạn phải chọn Chẵn hoặc Lẻ trước khi dừng!");
        return;
    }

    const result = Math.floor(elapsedTime * 1000) % 2 === 0 ? 'Chẵn' : 'Lẻ';

    if (result === chosenOption) {
        document.getElementById('result').textContent = `Kết quả: Thắng! (${result})`;
    } else {
        document.getElementById('result').textContent = `Kết quả: Thua! (${result})`;
    }

    resetGame();
});

document.getElementById('chanButton').addEventListener('click', function() {
    chosenOption = 'Chẵn';
    document.getElementById('chanButton').disabled = true;
    document.getElementById('leButton').disabled = true;
});

document.getElementById('leButton').addEventListener('click', function() {
    chosenOption = 'Lẻ';
    document.getElementById('chanButton').disabled = true;
    document.getElementById('leButton').disabled = true;
});

function resetGame() {
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('chanButton').disabled = true;
    document.getElementById('leButton').disabled = true;
    chosenOption = '';
}
