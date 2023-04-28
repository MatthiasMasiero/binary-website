const buttonsContainer = document.getElementById('buttonsContainer');
const rows = [];

function init() {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        const row = document.createElement('div');
        row.classList.add('row');
        buttonsContainer.appendChild(row);
        rows.push([]);

        for (let i = 0; i < 8; i++) {
            const button = document.createElement('button');
            button.textContent = '0';
            button.dataset.state = '0';
            button.addEventListener('click', toggleButton);
            row.appendChild(button);
            rows[rowIndex].push(button);
        }
    }
}

function toggleButton(e) {
    const button = e.target;
    if (button.dataset.state === '0') {
        button.dataset.state = '1';
        button.textContent = '1';
    } else {
        button.dataset.state = '0';
        button.textContent = '0';
    }
    updateBackground();
}

function updateBackground() {
    const binaryValues = rows.map(row => row.map(button => button.dataset.state).join(''));
    const [r, g, b] = binaryValues.map(binary => parseInt(binary, 2));
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

init();
