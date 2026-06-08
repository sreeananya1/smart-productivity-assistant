(function () {
    // If a timer already exists, don't inject again
    if (document.getElementById('eyeBreakTimer')) return;

    const popup = document.createElement('div');
    popup.id = 'eyeBreakTimer';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.padding = '30px';
    popup.style.borderRadius = '12px';
    popup.style.zIndex = '999999';
    popup.style.textAlign = 'center';
    popup.style.fontSize = '18px';
    popup.style.fontFamily = 'sans-serif';
    popup.innerHTML = `
        <div style="text-align: right;">
            <button id="closeTimerBtn" style="background:none;border:none;color:white;font-size:20px;cursor:pointer;">✕</button>
        </div>
        <h2>Time for a Break!</h2>
        <p id="countdown">20</p>
        <p>Look at something 20 feet away for 20 seconds.</p>
    `;

    document.body.appendChild(popup);

    let seconds = 20;
    const countdownEl = document.getElementById('countdown');

    const interval = setInterval(() => {
        seconds--;
        countdownEl.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(interval);
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
        }
    }, 1000);

    document.getElementById('closeTimerBtn').addEventListener('click', () => {
        clearInterval(interval);
        if (document.body.contains(popup)) {
            document.body.removeChild(popup);
        }
    });
})();
