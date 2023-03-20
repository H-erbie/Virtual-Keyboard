
window.addEventListener('load', () => {
    keyBoard();
});

keyBoard = () => {
    let chars = [];
    const vars = { 
        input : document.getElementById('input'),
        keyboard : document.getElementById('keyboard'),
        keys : document.querySelectorAll('.key'),
        app : document.getElementById('app'),
        del : document.querySelector('.del'),
        caps : document.querySelector('.caps'),
        space : document.querySelector('.space'),
        emoji : document.querySelector('.emoji'),
        emoj : document.querySelector('.emojis'),
        emojis : document.querySelectorAll('.emo'),
        numSym : document.querySelector('.num-sym'),
        goToAlphas : document.querySelector('.alphabets'),
        goToSymbs : document.querySelector('.symbols')
    }
    vars.input.value = '';
    vars.input.onclick = function(){
    vars.keyboard.style.height = '25rem';
}
vars.app.onclick = function(){
    vars.keyboard.style.height = '0';
}

vars.keys.forEach(key => {
    key.addEventListener('click', () => {
        vars.input.value += key.innerText;
        chars = input.value.split('');
        console.log(chars);
    })
})
for(let emoj in vars.emojis){
    vars.emojis[emoj].onclick = () => {
        vars.input.value += `${vars.emojis[emoj].textContent}`
    }
} 

vars.del.addEventListener('click', () => {
    chars.pop();
    vars.input.value = chars.join('')
})

vars.caps.addEventListener('click', () => {
    vars.keys.forEach(key => {
        key.classList.toggle('upper');
})
    })

vars.space.addEventListener('click', () => {
    chars.push(' ');
    vars.input.value = chars.join('');   
})

vars.numSym.addEventListener('click', () => {
    if(vars.numSym.textContent == 'abc'){
        vars.numSym.textContent = '?123';
    }
    else{
        if(vars.keys[0].className == 'upper'){
            vars.numSym.textContent = 'ABC';
        }
        else{
            vars.numSym.textContent = 'abc';
        }
    }
    vars.goToAlphas.classList.toggle('alphh');
    vars.goToSymbs.classList.toggle('flexx');
    
})


vars.emoji.addEventListener('click', () => vars.emoj.classList.toggle('dis') )
}

