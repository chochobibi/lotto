const generateBtn = document.getElementById('generate-btn');
const resultsContainer = document.getElementById('results-container');

function getNumberColorClass(number) {
    if (number <= 10) return 'color-yellow';
    if (number <= 20) return 'color-blue';
    if (number <= 30) return 'color-red';
    if (number <= 40) return 'color-gray';
    return 'color-green';
}

generateBtn.addEventListener('click', () => {
    resultsContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const numberSet = new Set();
        while (numberSet.size < 6) {
            numberSet.add(Math.floor(Math.random() * 45) + 1);
        }
        const sortedNumbers = Array.from(numberSet).sort((a, b) => a - b);

        const resultSetDiv = document.createElement('div');
        resultSetDiv.classList.add('result-set');
        resultSetDiv.style.animationDelay = `${i * 0.15}s`;

        for (let j = 0; j < sortedNumbers.length; j++) {
            const number = sortedNumbers[j];
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number', getNumberColorClass(number));
            numberDiv.textContent = number;
            numberDiv.style.animationDelay = `${(i * 0.15) + (j * 0.1)}s`;
            resultSetDiv.appendChild(numberDiv);
        }
        resultsContainer.appendChild(resultSetDiv);
    }
});