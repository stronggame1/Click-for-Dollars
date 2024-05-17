document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const earnButton = document.getElementById('earnButton');
    let balance = 0;

    earnButton.addEventListener('click', () => {
        balance += 10;
        balanceElement.textContent = balance;
    });
});
