const actionArea = document.getElementById('action-area');
const question = document.getElementById('question');

// 1. Falling Hearts Shower
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 300);

// 2. The "No" logic - Show Try Again button
function askAgain() {
    question.innerHTML = "Wait, did you misclick? <br>Let's try that one more time... 🥺";
    actionArea.innerHTML = `<button class="reset-btn" onclick="resetStage()">Try again 🥺</button>`;
}

// 3. Reset logic - Go back to first stage
function resetStage() {
    question.innerHTML = "Will you be my Valentine? ❤️";
    actionArea.innerHTML = `
        <button id="yes-btn" onclick="celebrate()">Yes!</button>
        <button id="no-btn" onclick="askAgain()">No</button>
    `;
}

// 4. Success logic - Flirty Response
function celebrate() {
    question.innerHTML = "My hbs and I only built a whole website as a 'joke'... <br>but I'm glad you're down to be my <br>favorite long-distance Valentine. 😉❤️";
    actionArea.innerHTML = ""; // Removes buttons

    // Victory Heart Burst
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
}
