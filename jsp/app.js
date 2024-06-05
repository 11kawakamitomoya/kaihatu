document.addEventListener('DOMContentLoaded', () => {
    const omikujiResults = [
        '大吉',
        '中吉',
        '小吉',
        '吉',
        '末吉',
        '凶'
    ];

    let drawCount = 0;

    const drawButton = document.getElementById('drawButton');
    const resetButton = document.getElementById('resetButton');
    const resultDiv = document.getElementById('result');
    const counterDiv = document.getElementById('counter');

    drawButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * omikujiResults.length);
        const result = omikujiResults[randomIndex];
        resultDiv.textContent = `結果: ${result}`;
        drawCount++;
        counterDiv.textContent = `ボタンが押された回数: ${drawCount}`;
    });

    resetButton.addEventListener('click',() =>{
        drawCount = 0;
        resultDiv.textContent = '';
        counterDiv.textContent = 'ボタンが押された回数: 0';
    });
});