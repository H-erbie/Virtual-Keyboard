window.addEventListener('load', () => {
    keyboard.screen.value = '' // empty inbox when window loads
    keyboard.showKB();  //show the keyboard when clicked
    keyboard.hideKB(); //hide the keyboard when clicked
    keyboard.layout(); //keyboard layout
})




const keyboard = {
    KB : document.querySelector('.keyboard'),
    appContainer : document.querySelector('#app'),
    board : document.querySelector('.keys'),
    screen : document.querySelector('#input'),
    showKB : function(){
        this.screen.addEventListener('click', () => {
            this.KB.style.bottom = '0';
        })
    },
    hideKB: function(){
        
        this.appContainer.addEventListener('click', () => {
            this.KB.style.bottom = '-25rem';
        })
    },
    keys: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'bsp',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
        'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
        '?123', 'space', 'emj'
    ],
    symbols : [
            '!', '@', '#', '$', '^', '*', '(', ')', '_',
            '-', '+', '=', '{', '}', '[', ']', "/", '|',
            ':', ';', '"', "'", '<', '>', ',', '.', '?',  
        ],
    emojis: [
        '😀','😁','😂','🤣','😃','😄','😅','😆','😉',
        '😊','😋','😎','😍','😘','🥰','😗','😙','😚',
        '🙂','🤗','🤩','😗','😙','😚','🙂','🤗','🤩',
        '🤔','🤨','😐','😑','😶','🙄','😏','😣','😥',
        '😮','🤐','😯','😪','😫','🥱','😴','😌','😛',
        '😜','🤤','😒','😓','😔','😕','🙃','🤑','😲',
        '🙁','😖','😞','😟','😤','😢','😭','😦','😧',
        '😨','😩','🤯','😬','😰','😱','🥵','🥶','😳',
        '🤪','😵','🥴','😠','😡','🤬','😷','🤒','🤕',
        '🤮','🤧','😇','🥳','🥺','🤠','🤡','🤥','🤫',
        '🤭','🧐','🤓','😈','👿','👹','👺','💀', '👻',
        '👽','👾','🤖', '💩','😺'
    ],
    layout : function(){
        this.keys;
    
    this.keys.forEach( key => {
        let button = document.createElement('button');
        let brk = document.createElement('br'); 
        button.textContent = key;
        let BT = button.textContent;
        (BT == 'shift' || BT == 'enter' || BT == 'bsp' || BT == 'emj' || BT == '?123' || BT == 'abc') ? button.classList = 'key funKeys' :
         (BT == 'space') ? button.classList = 'key space' : button.classList = 'key char';
        for(let i = 0; i < 11; i++){
            if(button.textContent == i || button.textContent == 'bsp' || button.textContent == '?123' || button.textContent == 'emj' || button.textContent == ''){
                button.classList = 'key char tempChar';
            }

        }
        
        if (BT == 'bsp' || BT== 'p' || BT== 'enter' || BT == 'm'){
            this.board.appendChild(button);
            this.board.appendChild(brk);
        }
        else{
            this.board.appendChild(button);
        }
        
        button.addEventListener('click', () => {
            let chars = document.querySelectorAll('.char');
            
            this.keysFunctionality(button, chars, key) ;
        
        })


    });
    },
    //functional keys
    keysFunctionality : function(button, chars, key){
        let entries;        
        let backupKeys = [
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 32,
            33, 34, 35, 36, 37, 38
        ]
        if(button.textContent != 'shift' && button.textContent != 'enter' && button.textContent !=
        'bsp' && button.textContent != 'emj' && button.textContent != 'space' && button.textContent != '?123' && button.textContent != 'abc'){
           
           if(chars[11].classList == 'key char upper'){
            let makeCap = button.textContent.toUpperCase();
            this.screen.value += makeCap; 
           } 
           else{
            this.screen.value += button.textContent; 
           }
           
        }
        
        switch (key) {
            case 'shift':
                if(button.textContent == 'shift'){
                    chars.forEach(char => {
                      char.classList.toggle('upper');
                        })
                }           
                break;
            case 'space':
                this.screen.value += ' ';
                break;
            case 'enter':
                this.screen.value += '\n';
                break;
            case 'bsp':
                entries = this.screen.value.split('');
                entries.pop();
                this.screen.value = entries.join('');
                break;
            case '?123':
                let startNum = 11;
                let funKeys = document.querySelectorAll('.funKeys');
                   if(button.textContent == 'abc') {
                    button.textContent = '?123';
                    for(var i = 0; i < funKeys.length; i++){
                        if(funKeys[i].textContent == 'shift'){
                            funKeys[i].style.display = 'inline-block';
                        }
                    }
                    for(var i = 0; i < backupKeys.length; i++){
                    if(chars[startNum].classList == 'key char' ){
                         chars[startNum].textContent = this.keys[backupKeys[i]];
                        startNum ++;
                 } 
                }  
                    }
                else{
                    button.textContent = 'abc';
                    for(var i = 0; i < funKeys.length; i++){
                        if(funKeys[i].textContent == 'shift'){
                            funKeys[i].style.display = 'none';
                        }
                    }
                    for(var i = 0; i < this.symbols.length; i++){
                    if( chars[startNum].classList == 'key char'){
                        chars[startNum].textContent = this.symbols[i];
                    }
                    startNum ++;  
                } 
                }
                break;
            case 'emj':
                let emojiElementCon = document.querySelector('.emoji-con');
               emojiElementCon.classList.toggle('yesDisplay');
               if (emojiElementCon.classList == 'emoji-con yesDisplay'){
                for(let emoji in this.emojis){
                    let emojiElement = document.createElement('p');
                    
                    emojiElement.className = 'emoji';
                    emojiElement.textContent = this.emojis[emoji];
                    emojiElementCon.appendChild(emojiElement);
                    
                    emojiElement.addEventListener('click', () => {
                        this.screen.value += emojiElement.textContent;
                    });
                };
            }
            else{
                emojiElementCon.textContent = '';
            };
                break;
            default:
                break;
        }
    },
    
}

