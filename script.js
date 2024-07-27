let adviceCount=0;

async function getAdvice() {
    adviceCount++;
    const responce= await fetch('https://api.adviceslip.com/advice');
    const advice = await responce.json();
    document.getElementById('advice-container').textContent= advice.slip.advice;
    document.getElementById('advice-count').textContent= `you 've read ${adviceCount} pieces of advice today`;
    
}


