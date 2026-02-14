const actionArea = document.getElementById('action-area');
const question = document.getElementById('question');
const socialArea = document.getElementById('social-area');

// 1. Falling Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 300);

// 2. No Button Logic
function askAgain() {
    question.innerHTML = "Wait, did you misclick? <br>Let's try that one more time... 🥺";
    actionArea.innerHTML = `<button class="reset-btn" onclick="resetStage()">Try again 🥺</button>`;
}

function resetStage() {
    question.innerHTML = "Will you be my Valentine? ❤️";
    actionArea.innerHTML = `
        <button id="yes-btn" onclick="celebrate()">Yes!</button>
        <button id="no-btn" onclick="askAgain()">No</button>
    `;
}

// 3. Yes Button Logic (Updated Message)
function celebrate() {
    question.innerHTML = "my hbs and I only built a whole website as a 'joke'... <br>but still, I'm glad you're down to be my Valentine. 😉❤️";
    
    actionArea.style.display = "none";
    socialArea.style.display = "block";

    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 50);
    }
}
