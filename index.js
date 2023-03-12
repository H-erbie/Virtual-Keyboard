const input = document.getElementById('input'),
    keyboard = document.getElementById('keyboard'),
    keys = document.querySelectorAll('.key'),
    app = document.getElementById('app'),
    del = document.querySelector('.del'),
    caps = document.querySelector('.caps'),
    space = document.querySelector('.space'),
    emoji = document.querySelector('.emoji'),
    emoj = document.querySelector('.emojis'),
    emojis = document.querySelectorAll('.emo'),
    numSym = document.querySelector('.num-sym');

let chars = [];


input.onclick = function(){
    keyboard.style.height = '25rem';
    
}
app.onclick = function(){
    keyboard.style.height = '0';
}

keys.forEach(key => {
    key.addEventListener('click', () => {
        input.value += key.innerText;
        chars = input.value.split('');
        console.log(chars);
    })
})
for(let emoj in emojis){
    emojis[emoj].onclick = () => {
        input.value += emojis[emoj].textContent
    }
} 

del.addEventListener('click', () => {
    chars.pop();
    input.value = chars.join('')
})

caps.addEventListener('click', () => {
    keys.forEach(key => {
        key.classList.toggle('upper');
})
    })

space.addEventListener('click', () => {
    chars.push(' ');
    input.value = chars.join('');   
})

numSym.addEventListener('click', () => {
    
    numSym.classList.toggle('num-sym::after')
})
emoji.addEventListener('click', () => emoj.classList.toggle('dis') )



