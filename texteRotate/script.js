const str ='test malp';
const text = document.getElementById("text");
window.onload =()=>{
    for(let i=0;i<str.length;i++){
        let span = document.createElement('span');
        span.innerText = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${i*11}deg)`;
    }
}