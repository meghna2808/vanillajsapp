const span1 = document.getElementById("score1");
const span2 = document.getElementById("score2");
const gamenumber = document.getElementById("gamenumber");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const reset = document.getElementById("reset");
const okBtn=document.getElementById("ok");
const input=document.getElementById("input-tag");

button1.addEventListener('click', () => {
    const score1 = parseInt(span1.innerText) + 1;
    span1.innerText = `${score1}`;
    if (score1 == gamenumber.value) {
        span1.classList.add("winner");
        span2.classList.add("loser");
        button1.disabled = true;
        button2.disabled = true;
        gamenumber.disabled = true;
        return;
    }
})


button2.addEventListener('click', () => {
    const score2 = parseInt(span2.innerText) + 1;
    span2.innerText = score2;
    if (score2 == gamenumber.value) {
        span2.classList.add("winner");
        span1.classList.add("loser");
        button1.disabled = true;
        button2.disabled = true;
        gamenumber.disabled = true;
        return;
    }
})
reset.addEventListener('click', () => {
    button1.disabled = false;
    button2.disabled = false;
    gamenumber.disabled = false;
    span1.innerText = 0;
    span2.innerText = 0;
    span1.classList.remove("winner");
    span1.classList.remove("loser");
    span2.classList.remove("loser");
    span2.classList.remove("winner");
    return;
})

const okayClick = () =>{
    alert(input.value);
}
okBtn.addEventListener('click',okayClick);