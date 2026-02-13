const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// 1. The Runaway No Button
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = "fixed"; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The Yes Button Action
yesBtn.addEventListener('click', () => {
    // Change the card content
    document.querySelector('.card').innerHTML = `
        <img src="us.jpeg" alt="Our Photo" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; border: 4px solid #ff4081; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        <div id="typewriter" style="color: #d32f2f; font-size: 1.1rem; line-height: 1.6; text-align: left; font-family: 'Segoe UI', sans-serif; max-height: 300px; overflow-y: auto; padding: 10px;"></div>
        <p style="color: #ff4081; font-weight: bold; margin-top: 20px;">Forever Yours! ❤️</p>
    `;

    // Your heartfelt Message
    const message = "You are the best thing that ever happened to me. I love you bava love you soo much.........❤️ \n\n" + 
                    "Naku telusu nenu ante niku estam ani but appudu cheppaledu wait chesta nuvvu chepina antha varaku.🥹 " +
                    "The best supporter in my life. My stress booster nuvve kopam tepistav nuvve cool chestav babu.👩‍❤️‍👨 \n\n" +
                    "Life long thoduga vunta ani nammutuna bava ninnu anduku love chesano ala chesano eppatiki telidu but nachesav bava chala bava.❤️ \n\n" +
                    "May i can't buy you gift edi chala efforts petti chesa pandi niku nachutundhi ani anukuntuna.😘😘😘😘😘";

    let i = 0;
    const speed = 50; 
    const typewriterElement = document.getElementById("typewriter");

    function typeWriter() {
        if (i < message.length) {
            if (message.charAt(i) === "\n") {
                typewriterElement.innerHTML += "<br>";
            } else {
                typewriterElement.innerHTML += message.charAt(i);
            }
            i++;
            typewriterElement.scrollTop = typewriterElement.scrollHeight;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
    startHeartRain(); 
});

// 3. Heart Celebration Effect
function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart-drop");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.position = "fixed"; // Keep hearts on screen
        heart.style.top = "-5vh";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}