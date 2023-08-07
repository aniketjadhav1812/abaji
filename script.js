const btn = document.getElementById('btn');
const img = document.getElementById('img');

btn.addEventListener('click',toggleEyes);

function toggleEyes(){
    if(btn.textContent.includes('उघड'))
    {
        btn.textContent = "डोळे बंद कर लवड्या.";
        img.src = "2.jpg";
    }
    else{
        btn.textContent = "डोळे उघड लवड्या.";
        img.src = "1.jpg";
    }
}