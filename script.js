const envelope = document.getElementById('envelope');
const music = document.getElementById('loveMusic');
const textContainer = document.getElementById('message-text');
const sig = document.getElementById('sig');
const modal = document.getElementById('finalModal');

// Aapka Special Message
const message = "Baby tumhara pyaar aur tumhara prayer ki wajha se aaj mein yeh mukam tak pahunch paya hun baby mein sirf tumahri support ki wajha se aaj mrin yeh jagha pe pahuncha hun baby mere ghar pe itna sab tension...............tension  chal raha hai par tum mujhe strong banne ka himmat de rahe ho baby aage badhne ki rasta dikha rahe ho aur aur baby...............tum nahi hote toh mera kya hota baby...................Really I.........Love You....So.....So.....Much Baby............🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺I will never leave you baby I will stay with you till my last breath baby Even after that, I will pray to God and swear on truth and take birth for you To spend life with you baby Thank you for being my life partner baby This will always be my prayer to God that there should always be happiness on your face baby I love you so much baby🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺 ";

let opened = false;

envelope.addEventListener('click', () => {
    if (!opened) {
        opened = true;
        envelope.classList.add('open');
        music.play().catch(() => console.log("Music click ke baad start hoga"));
        
        // Start Magic Effects
        startHearts();
        
        // Typing Effect start after 1.2s
        setTimeout(() => {
            typeEffect(message, 0);
        }, 1200);
    }
});

function typeEffect(text, i) {
    if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        
        // Auto-scroll logic for long text
        const letterDiv = document.querySelector('.letter');
        letterDiv.scrollTop = letterDiv.scrollHeight;
        
        // Speed: 80ms (Bohat pyaari aur slow typing)
        setTimeout(() => typeEffect(text, i + 1), 160);
    } else {
        // Signature aur Modal
        sig.style.opacity = '1';
        setTimeout(() => {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('show'), 100);
        }, 3000);
    }
}

function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'transform 5s linear, opacity 5s';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 500);
}