document.addEventListener('DOMContentLoaded', () => {
    const omikujiResults = [
        '大吉',
        '中吉',
        '小吉',
        '吉',
        '末吉',
        '凶'
    ];

    const drawButton = document.getElementById('drawButton');
    const resultDiv = document.getElementById('result');

    drawButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * omikujiResults.length);
        const result = omikujiResults[randomIndex];
        resultDiv.textContent = `結果: ${result}`;
    });
});