const btn = document.getElementById('btn');
const img = document.getElementById('img');

btn.addEventListener('click',toggleEyes);

function toggleEyes(){
    if(btn.textContent.includes('उघड'))
    {
        btn.textContent = "डोळे बंद कर ❤️dy..";
        img.src = "2.jpg";
    }
    else{
        btn.textContent = "डोळे उघड ❤️dy..";
        img.src = "1.jpg";
    }
}