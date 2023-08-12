const btn = document.getElementById('btn');
const img = document.getElementById('img');
function stopLoad(){
    document.querySelector("#loading").style.display = 'none';
    document.querySelector(".container").style.display = 'flex';
}
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
