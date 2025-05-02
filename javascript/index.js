let keys = "QWERTYUIOPASDFGHJKLZXCVBNM";
let cpms=[];
let hd=false;
let guesses=[];
let tries=6;
let infine=false;
function judge(){
    for (let i = 0; i < keys.length; i++) {
        let num=0;
        for(let j=0;j<guess.length;j++)
        {
            if(guess[j]==keys[i])num++;
        }
        if(num<hasright[keys[i]]) {
            return "At least "+hasright[keys[i]].toString()+" \""+keys[i]+"\""+(hasright[keys[i]]==1?"":"s");
        }
    }
    for (let i = 0; i < guess.length; i++) {
        let num=0;
        for(let j=0;j<guess.length;j++)
        {
            if(guess[j]==guess[i])num++;
        }
        if(num>hasright[guess[i]]&&maxxx[guess[i]]) {
            if(hasright[guess[i]]==0)return "No \""+guess[i]+"\""
            else return "At most "+hasright[guess[i]].toString()+" \""+guess[i]+"\""+(hasright[guess[i]]==1?"":"s");
        }
        if(hasn[i].includes(guess[i])) {
            return (i+1).toString()+((i+1)%10==1?"st":(i+1)%10==2?"nd":(i+1)%10==3?"rd":"th")+" is not \""+guess[i]+"\""
        }
        for(let j=0;j<has[i].length;j++) {
            if(has[i][j]!=guess[i])return (i+1).toString()+((i+1)%10==1?"st":(i+1)%10==2?"nd":(i+1)%10==3?"rd":"th")+" is \""+has[i][j]+"\""
        }
    }
    return "accept";
}
function judge2() {
    for (let k = 0; k < guesses.length; k++) {
        let result = '0'.repeat(costom?length2:length);
        for (let i = 0; i < (costom?length2:length); i++) {
            if (guesses[k][0][i] === guess[i]) 
            {
                if(result[i]==='1') 
                for (let j = i+1; j < guess.length; j++) {
                    if (guesses[k][0][j] === guess[i] && result[j] === '0') {
                        result = result.substring(0, j) + '1' + result.substring(j + 1);
                        break;
                    }
                }
                result = result.substring(0, i) + '2' + result.substring(i + 1);
            }
            else for (let j = 0; j < guess.length; j++) {
                if (guesses[k][0][j] === guess[i] && result[j] === '0') {
                    result = result.substring(0, j) + '1' + result.substring(j + 1);
                    break;
                }
            }
        }
        let grr=0;
        let yee=0;
        for(let i=0;i<result.length;i++) {
            if(result[i]==1)yee++;
            else if(result[i]==2)grr++;
        }
        if(grr!=guesses[k][1])return (guesses[k][1].toString()==0?"No green in ":(guesses[k][1].toString()+(guesses[k][1].toString()==1?" green in ":" greens in ")))+(k+1).toString()+((k+1)%10==1?"st":(k+1)%10==2?"nd":(k+1)%10==3?"rd":"th")+" guess";
        if(yee!=guesses[k][2])return (guesses[k][2].toString()==0?"No yellow in ":(guesses[k][2].toString()+(guesses[k][2].toString()==1?" yellow in ":" yellows in ")))+(k+1).toString()+((k+1)%10==1?"st":(k+1)%10==2?"nd":(k+1)%10==3?"rd":"th")+" guess";
    }
    return "accept";
}
let strict = false;
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        cpms.forEach(element => clearTimeout(element));
        cpms=[];
        document.getElementById('cpd').style.color='#4B4';
        document.getElementById('cpd').textContent='Link copied!';
        document.getElementById('cpd').style.opacity=1;
        document.getElementById('cpd2').style.color='#4B4';
        document.getElementById('cpd2').style.left='39px';
        document.getElementById('cpd2').textContent='Link copied!';
        document.getElementById('cpd2').style.opacity=1;
        cpms.push(setTimeout(()=>{document.getElementById('cpd').style.opacity = '0';document.getElementById('cpd2').style.opacity = '0';},1000));
        return navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (!successful) {
                cpms.forEach(element => clearTimeout(element));
                cpms=[];
                document.getElementById('cpd').style.color='#f77';
                document.getElementById('cpd').textContent='Copy failed!';
                document.getElementById('cpd').style.opacity=1;
                document.getElementById('cpd2').style.color='#f77';
                document.getElementById('cpd2').style.left='39px';
                document.getElementById('cpd2').textContent='Copy failed!';
                document.getElementById('cpd2').style.opacity=1;
                cpms.push(setTimeout(()=> {document.getElementById('cpd').style.opacity = '0';document.getElementById('cpd2').style.opacity = '0';},1000));
            }
            else
            {
                cpms.forEach(element => clearTimeout(element));
                cpms=[];
                document.getElementById('cpd').style.color='#4B4';
                document.getElementById('cpd').textContent='Link copied!';
                document.getElementById('cpd').style.opacity=1;
                document.getElementById('cpd2').style.color='#4B4';
                document.getElementById('cpd2').style.left='39px';
                document.getElementById('cpd2').textContent='Link copied!';
                document.getElementById('cpd2').style.opacity=1;
                cpms.push(setTimeout(()=> {document.getElementById('cpd').style.opacity = '0';document.getElementById('cpd2').style.opacity = '0';},1000));
            }
        } catch (err) {
            cpms.forEach(element => clearTimeout(element));
            cpms=[];
            document.getElementById('cpd').style.color='#f77';
            document.getElementById('cpd').textContent='Copy failed!';
            document.getElementById('cpd').style.opacity=1;
            document.getElementById('cpd2').style.color='#f77';
            document.getElementById('cpd2').style.left='39px';
            document.getElementById('cpd2').textContent='Copy failed!';
            document.getElementById('cpd2').style.opacity=1;
            cpms.push(setTimeout(()=> {document.getElementById('cpd').style.opacity = '0';document.getElementById('cpd2').style.opacity = '0';},1000));
        }
        document.body.removeChild(textArea);
    }
}
function copylink() {
    copyToClipboard(window.location.origin + window.location.pathname + "?"+encode62(targetWord));
}
function generateOptions() {
    var container = document.getElementById('options-container');
    container.innerHTML = '';
    for (var i = 4; i <= 11; i++) {
        var div = document.createElement('div');
        div.className = 'option';
        div.textContent = i;
        div.dataset.value = i;
        div.dataset.disabled = "false";
        div.addEventListener('click', function() {
            selectOption(this);
        });
        if (i === length) {
            div.classList.add('selected');
        }
        container.appendChild(div);
    }
    var options_ = document.querySelectorAll('.option');
    if(hd==true) {
        options_.forEach(function(option) {
            if(parseInt(option.dataset.value)===10||parseInt(option.dataset.value)===11)
                option.dataset.disabled="true";
        });
    }
    else {
        options_.forEach(function(option) {
            if(parseInt(option.dataset.value)===10||parseInt(option.dataset.value)===11)
                option.dataset.disabled="false";
        });
    }
}
let costom = false;
let circl = false;
let use_mini = false;
let length = 5;
let see = true;
let lastWord = {};
function saveToCookie() {
    localStorage.setItem('length', length);
    localStorage.setItem('use_mini', use_mini);
    localStorage.setItem('see', see);
    localStorage.setItem('circl', circl);
    localStorage.setItem('strict', strict);
    localStorage.setItem('hd', hd);
    localStorage.setItem('infine', infine);
    localStorage.setItem('lastWord',JSON.stringify(lastWord));
}
function loadFromCookie() {
    length = localStorage.getItem('length') == null ? 5 : parseInt(localStorage.getItem('length'));
    use_mini = localStorage.getItem('use_mini') == null ? false : localStorage.getItem('use_mini') === 'true';
    see = localStorage.getItem('see') == null ? true : localStorage.getItem('see') === 'true';
    circl = localStorage.getItem('circl') == null ? false : localStorage.getItem('circl') === 'true';
    strict = localStorage.getItem('strict') == null ? false : localStorage.getItem('strict') === 'true';
    hd = localStorage.getItem('hd') == null ? false : localStorage.getItem('hd') === 'true';
    infine = localStorage.getItem('infine') == null ? false : localStorage.getItem('infine') === 'true';
    lastWord = localStorage.getItem('lastWord') == null ? {} : JSON.parse(localStorage.getItem('lastWord'));
}
loadFromCookie();
function stringToUniqueNumber(str) {
    let num = 0n;
    for (let i = 0; i < str.length; i++) {
        num = num * 256n + BigInt(str.charCodeAt(i));
    }
    return num;
}
const BASE62_CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const BASE62_RADIX = BASE62_CHARACTERS.length;
function base62Encode(num) {
    let result = '';
    while (num > 0) {
        result = BASE62_CHARACTERS[num % BigInt(BASE62_RADIX)] + result;
        num = num / BigInt(BASE62_RADIX);
    }
    return result;
}
function base62Decode(str) {
    let result = 0n;
    for (let i = 0; i < str.length; i++) {
        result = result * BigInt(BASE62_RADIX) + BigInt(BASE62_CHARACTERS.indexOf(str[i]));
    }
    return result;
}
function uniqueNumberToString(num) {
    let str = '';
    while (num > 0) {
        str = String.fromCharCode(Number(num % 256n)) + str;
        num = num / 256n;
    }
    return str;
}
function encode62(str) {
    return  base62Encode(stringToUniqueNumber(str));
}
function decode62(str) {
    return  uniqueNumberToString(base62Decode(str));
}
if(see) {
    document.getElementById('see').className="fa fa-eye-slash";
    document.getElementById('see').style.left="335px";
    document.getElementById('input').type = 'text';
}
else {
    document.getElementById('see').className="fa fa-eye";
    document.getElementById('see').style.left="336px";
    document.getElementById('input').type = 'password';
}
function selectOption(selectedDiv) {
    var options = document.querySelectorAll('.option');
    options.forEach(function(option) {
        option.classList.remove('selected');
    });
    selectedDiv.classList.add('selected');
    length = parseInt(selectedDiv.dataset.value);
    saveToCookie();
    costom = false;
    history.pushState(null, '', window.location.pathname);
    isWin = false;
    let target = [];
    if(use_mini) target = mini_words[length];
    else target = words[length];
    const randomIndex = Math.floor(Math.random() * target.length);
    targetWord = target[randomIndex][0].toUpperCase();
    let contain = document.getElementById('answerWord');
    contain.innerHTML = '';
    Tile = [];
    for (var i = 0; i < targetWord.length; i++) {
        var div = document.createElement('div');
        div.textContent = targetWord[i];
        div.className = 'Tile';
        Tile.push(div);
        contain.appendChild(div);
    }
    document.getElementById('answerMean').textContent = target[randomIndex][1];
    currentRow = 0;
    currentTile = 0;
    guess = '';
    messages = [];
    document.getElementById('buttons').style.display = 'flex';
    document.getElementById('win').style.visibility = 'hidden';
    document.getElementById('win').style.opacity = '0';
    document.getElementById('lost').style.visibility = 'hidden';
    document.getElementById('lost').style.opacity = '0';
    document.getElementById('cant').style.visibility = 'hidden';
    document.getElementById('cant').style.opacity = '0';
    createBoard();
    createKeyboard();
}
document.getElementById('easy').checked=use_mini;
document.getElementById('circle').checked=circl;
document.getElementById('strict').checked=strict;
document.getElementById('hard').checked=hd;
document.getElementById('infine').checked=infine;
var switches = document.querySelectorAll('.switch input[type="checkbox"]');
switches.forEach(function(switchElement) {
    switchElement.addEventListener('change', function(event) {
        var switchId = event.target.id;
        var switchState = event.target.checked;
        if (switchId === 'easy') {
            use_mini = switchState;
            saveToCookie();
        }
        if (switchId === 'circle') {
            circl = switchState;
            saveToCookie();
        }
        if (switchId === 'strict') {
            strict = switchState;
            saveToCookie();
        }
        if (switchId === 'infine') {
            infine = switchState;
            saveToCookie();
        }
        if (switchId === 'hard') {
            hd = switchState;
            var options = document.querySelectorAll('.option');
            if(switchState==true) {
            saveToCookie();    options.forEach(function(option) {
                    if(parseInt(option.dataset.value)===10||parseInt(option.dataset.value)===11)
                        option.dataset.disabled="true";
                });
            }
            else {
                options.forEach(function(option) {
                    if(parseInt(option.dataset.value)===10||parseInt(option.dataset.value)===11)
                        option.dataset.disabled="false";
                });
            }
            if(switchState==true&&(length==10||length==11)) {
                let number=9;
                length=number;
                options.forEach(function(option) {
                    option.classList.remove('selected');
                    if (parseInt(option.dataset.value)===number)option.classList.add('selected');
                });
            }
            
        }
        costom = false;
        history.pushState(null, '', window.location.pathname);
        isWin = false;
        let target = [];
        if(use_mini) target = mini_words[length];
        else target = words[length];
        const randomIndex = Math.floor(Math.random() * target.length);
        targetWord = target[randomIndex][0].toUpperCase();
        let contain = document.getElementById('answerWord');
        contain.innerHTML = '';
        Tile = [];
        for (var i = 0; i < targetWord.length; i++) {
            var div = document.createElement('div');
            div.textContent = targetWord[i];
            div.className = 'Tile';
            Tile.push(div);
            contain.appendChild(div);
        }
        document.getElementById('answerMean').textContent = target[randomIndex][1];
        currentRow = 0;
        currentTile = 0;
        guess = '';
        messages = [];
        document.getElementById('buttons').style.display = 'flex';
        document.getElementById('win').style.visibility = 'hidden';
        document.getElementById('win').style.opacity = '0';
        document.getElementById('lost').style.visibility = 'hidden';
        document.getElementById('lost').style.opacity = '0';
        document.getElementById('cant').style.visibility = 'hidden';
        document.getElementById('cant').style.opacity = '0';
        createBoard();
        createKeyboard();
    });
});
const keyboardLayout = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    '\u232bZXCVBNM\u21b5'
];
let isWin = false;
let currentRow = 0;
let currentTile = 0;
let guess = '';
let messages = [];
let Tile = [];
document.getElementById('RedoPopup').addEventListener('click', () => {
    costom = false;
    history.pushState(null, '', window.location.pathname);
    init();
});
document.getElementById('see').addEventListener('click', () => {
    if(document.getElementById('see').className==="fa fa-eye") {
        document.getElementById('see').className="fa fa-eye-slash";
        document.getElementById('see').style.left="335px";
        document.getElementById('input').type = 'text';
        see=true;
        saveToCookie();
    }
    else if(document.getElementById('see').className==="fa fa-eye-slash") {
        document.getElementById('see').className="fa fa-eye";
        document.getElementById('see').style.left="336px";
        document.getElementById('input').type = 'password';
        see=false;
        saveToCookie();
    }
});
document.getElementById('Share').addEventListener('click', () => {
    copylink();
});
document.getElementById('Copy').addEventListener('click', () => {
    var word = document.getElementById('input').value.toUpperCase();
    var exist = false;
    for (let i = 4; i < 12; i++) {
        if(ext_words[i].includes(word)) {
            exist=true;
            break;
        }
    }
    if(exist) copyToClipboard(window.location.origin + window.location.pathname + "?"+encode62(word));
    else {
        cpms.forEach(element => clearTimeout(element));
        cpms=[];
        document.getElementById('cpd2').style.color='#f77';
        document.getElementById('cpd2').style.left='37px';
        document.getElementById('cpd2').textContent='Invalid word!';
        document.getElementById('cpd2').style.opacity=1;
        cpms.push(setTimeout(()=> {document.getElementById('cpd2').style.opacity = '0';},1000));
            
    }
});
document.getElementById('reDo').addEventListener('click', () => {costom = false;history.pushState(null, '', window.location.pathname);init()});
window.addEventListener('resize', () => {
    document.getElementById('set').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)})`;
    document.getElementById('ans').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)})`;
    document.getElementById('top').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)}) translateY(${10*Math.min(window.innerHeight/747,window.innerWidth/848)}px)`;
});
document.getElementById('set').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)})`;
document.getElementById('ans').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)})`;
document.getElementById('top').style.transform = `scale(${Math.min(window.innerHeight/747,window.innerWidth/848)}) translateY(${10*Math.min(window.innerHeight/747,window.innerWidth/848)}px)`;
document.getElementById('giveUp').addEventListener('click', () => {
    currentRow = tries;
    if (isWin) {
        const result = document.getElementById('win');
        result.style.visibility = 'visible';
        result.style.opacity = '1';
    }
    else if (currentRow == tries) {
        const result = document.getElementById('lost');
        result.style.visibility = 'visible';
        result.style.opacity = '1';
    }
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('overlay').style.opacity = '1';
    if (document.getElementById('answerMean').clientHeight > 41) {
        document.getElementById('answerMean').style.textAlign = "left";
    }
    else {
        document.getElementById('answerMean').style.textAlign = "center";
    }
});
document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('settinglay').style.visibility = 'visible';
    document.getElementById('settinglay').style.opacity = '1';
});
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(()=> {document.getElementById('overlay').style.visibility = 'hidden';},200)
});
document.getElementById('closeSetting').addEventListener('click', () => {
    document.getElementById('settinglay').style.opacity = '0';
    setTimeout(()=> {document.getElementById('settinglay').style.visibility = 'hidden';},200)
});
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < tries; i++) {
        const row = document.createElement('div');
        row.className = 'board-row';
        row.style.marginLeft = '10px';
         row.style.marginRight = '10px';
        for (let j = 0; j < (costom?length2:length); j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
        if(hd) {
            const green = document.createElement('div');
            green.className = 'tile';
            green.style.backgroundColor = '#dde';
            green.style.border = '2px solid #dde';
            row.appendChild(green);
            const yellow = document.createElement('div');
            yellow.className = 'tile';
            yellow.style.backgroundColor = '#dde';
            yellow.style.border = '2px solid #dde';
            row.appendChild(yellow);
        }
        board.appendChild(row);
    }
}
let hasright={};
let hasalright={};
let maxxx={};
let has=[];
let hasn=[];
for (let i = 0; i < keys.length; i++) {
    hasright[keys[i]] = 0;
    hasalright[keys[i]] = 0;
    maxxx[keys[i]] = false;
}
function countLetter(str, o, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter && o[i] === '1') {
        count++;
        }
    }
    return count;
}
function handleSubmit() {
    if (currentTile < (costom?length2:length)) {
        const mess = document.getElementById('cant');
        messages.forEach(element => clearTimeout(element));
        messages=[];
        mess.style.color='#f77';
        mess.textContent='To short!';
        mess.style.visibility = 'visible';
        mess.style.opacity = '1';
        messages.push(setTimeout(()=> {
            mess.style.opacity = '0';
            messages.push(setTimeout(()=> {mess.style.visibility = 'hidden';},200));
        },1000));
        return;
    }
    
    if (!(ext_words[costom?length2:length].includes(guess)))
    {
        const mess = document.getElementById('cant');
        messages.forEach(element => clearTimeout(element));
        messages=[];
        mess.style.color='#f77';
        mess.textContent='Word not found!';
        mess.style.visibility = 'visible';
        mess.style.opacity = '1';
        messages.push(setTimeout(()=> {
            mess.style.opacity = '0';
            messages.push(setTimeout(()=> {mess.style.visibility = 'hidden';},200))
        },1000));
        return;
    }
    if(strict) {
        let jd=hd?judge2():judge();
        if(jd!="accept") {
            const mess = document.getElementById('cant');
            messages.forEach(element => clearTimeout(element));
            messages=[];
            mess.style.color='#f77';
            mess.textContent=jd+"!";
            mess.style.visibility = 'visible';
            mess.style.opacity = '1';
            messages.push(setTimeout(()=> {
                mess.style.opacity = '0';
                messages.push(setTimeout(()=> {mess.style.visibility = 'hidden';},200));
            },1000));
            return;
        }
    }
    if (currentRow < tries||infine) {
        let result = '0'.repeat(costom?length2:length);
        for (let i = 0; i < (costom?length2:length); i++) {
            if (guess[i] === targetWord[i]) 
            {
                if(result[i]==='1') 
                for (let j = i+1; j < guess.length; j++) {
                    if (guess[j] === targetWord[i] && result[j] === '0') {
                        result = result.substring(0, j) + '1' + result.substring(j + 1);
                        break;
                    }
                }
                result = result.substring(0, i) + '2' + result.substring(i + 1);
            }
            else for (let j = 0; j < guess.length; j++) {
                if (guess[j] === targetWord[i] && result[j] === '0') {
                    result = result.substring(0, j) + '1' + result.substring(j + 1);
                    break;
                }
            }
        }
        if (result === '2'.repeat(costom?length2:length)) {
            isWin = true;
        }
        const rows = document.querySelectorAll('.board-row');
        const tiles = rows[currentRow].querySelectorAll('.tile');
        if(hd)
        {
            let grr=0;
            let yee=0;
            for(let i=0;i<result.length;i++) {
                if(result[i]==1)yee++;
                else if(result[i]==2)grr++;
            }
            guesses.push([guess,grr,yee]);
            tiles[result.length].style.color = '#f8f8ff';
            tiles[result.length].style.backgroundColor = '#4b4';
            tiles[result.length].style.border = '2px solid #4b4';
            tiles[result.length].textContent=grr;
            tiles[result.length+1].style.color = '#f8f8ff';
            tiles[result.length+1].style.backgroundColor = '#ec3';
            tiles[result.length+1].style.border = '2px solid #ec3';
            tiles[result.length+1].textContent=yee;
        }
        for (let i = 0; i < (costom?length2:length); i++) {
            const key = document.getElementById(guess[i]);
            let num = countLetter(guess, result, guess[i]);
            if (result[i] === '0') {
                hasn[i].push(guess[i]);
                maxxx[guess[i]]=true;
                if(!hd) {
                    tiles[i].style.color = '#f8f8ff';
                    tiles[i].style.backgroundColor = '#aac';
                    tiles[i].style.border = '2px solid #aac';
                    if (key.className === 'keys key') {
                        key.className = 'keys gy-key';
                    }
                }
            }
            else if (result[i] === '2') {
                if(!(has[i].includes(guess[i])))hasalright[guess[i]]+=1;
                if(num+hasalright[guess[i]]>hasright[guess[i]]) {
                    hasright[guess[i]]=num+hasalright[guess[i]];
                }
                has[i].push(guess[i]);
                Tile[i].className = 'grTile';
                if(!hd) {
                    tiles[i].style.color = '#f8f8ff';
                    tiles[i].style.backgroundColor = '#4b4';
                    tiles[i].style.border = '2px solid #4b4';
                    key.className = 'keys gr-key';
                }
                if(hasright[guess[i]]>1) {
                    key.setAttribute('data-after-content', hasright[guess[i]]);
                }
            }
            else {
                hasn[i].push(guess[i]);
                if(num+hasalright[guess[i]]>hasright[guess[i]]) {
                    hasright[guess[i]]=num+hasalright[guess[i]];
                }
                num=hasright[guess[i]]-hasalright[guess[i]];
                for (let j = 0; j < (costom?length2:length); j++) {
                    if (num > 0 && Tile[j].textContent === guess[i] && Tile[j].className != 'grTile') {
                        Tile[j].className = 'yeTile';
                        num--;
                    }
                    else {
                        if(Tile[j].textContent === guess[i]&&Tile[j].className==='yeTile')Tile[j].className = 'Tile';
                    }
                }
                if(!hd) {
                    tiles[i].style.color = '#f8f8ff';
                    tiles[i].style.backgroundColor = '#ec3';
                    tiles[i].style.border = '2px solid #ec3';
                    if (key.className != 'keys gr-key') {
                        key.className = 'keys ye-key';
                    }
                }
                if(hasright[guess[i]]>1) {
                    key.setAttribute('data-after-content', hasright[guess[i]]);
                }
            }
        }
        guess = '';
        currentTile = 0;
        currentRow++;
        if (isWin) {
            const result = document.getElementById('win');
            result.style.visibility = 'visible';
            result.style.opacity = '1';
            setTimeout(()=> {
                document.getElementById('overlay').style.visibility = 'visible';
                document.getElementById('overlay').style.opacity = '1';
                if (document.getElementById('answerMean').clientHeight > 41) {
                    document.getElementById('answerMean').style.textAlign = "left";
                }
                else {
                    document.getElementById('answerMean').style.textAlign = "center";
                }
            },200);
        }
        else if (currentRow >= tries) {
            if(infine) {
                const board = document.getElementById('board');
                const row = document.createElement('div');
                row.className = 'board-row';
                row.style.marginLeft = '10px';
                row.style.marginRight = '10px';
                for (let j = 0; j < (costom?length2:length); j++) {
                    const tile = document.createElement('div');
                    tile.className = 'tile';
                    row.appendChild(tile);
                }
                if(hd) {
                    const green = document.createElement('div');
                    green.className = 'tile';
                    green.style.backgroundColor = '#dde';
                    green.style.border = '2px solid #dde';
                    row.appendChild(green);
                    const yellow = document.createElement('div');
                    yellow.className = 'tile';
                    yellow.style.backgroundColor = '#dde';
                    yellow.style.border = '2px solid #dde';
                    row.appendChild(yellow);
                }
                board.appendChild(row);
                row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            else {
                const result = document.getElementById('lost');
                result.style.visibility = 'visible';
                result.style.opacity = '1';
                setTimeout(()=> {
                    document.getElementById('overlay').style.visibility = 'visible';
                    document.getElementById('overlay').style.opacity = '1';
                    if (document.getElementById('answerMean').clientHeight > 41) {
                        document.getElementById('answerMean').style.textAlign = "left";
                    }
                    else {
                        document.getElementById('answerMean').style.textAlign = "center";
                    }
                },200);
            }
        }
    }
}
function updateTile(key) {
    if (isWin) return;
    if(!infine)if (currentRow == tries && key != '\u21b5') return;
    const rows = document.querySelectorAll('.board-row');
    const tiles = rows[currentRow].querySelectorAll('.tile');
    if (key === '\u232b') {
        if (currentTile > 0) {
            guess = guess.slice(0, -1);
            currentTile--;
            tiles[currentTile].textContent = '';
        }
    }
    else if (key === '\u21b5') {
        handleSubmit();
    }
    else {
        if (currentTile < (costom?length2:length)) {
            guess += key;
            tiles[currentTile].textContent = key;
            currentTile++;
        }
    }
}
function createKeyboard() {
    const board = document.getElementById('keyboard');
    board.innerHTML = '';
    for (let i = 0; i < keyboardLayout.length; i++) {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        for (let j = 0; j < keyboardLayout[i].length; j++) {
            const char = keyboardLayout[i][j];
            const key = document.createElement('div');
            key.className = char === '\u232b' ? 'keys bs-key' : char === '\u21b5' ? 'keys et-key' : 'keys key';
            key.setAttribute('data-after-content', '');
            if (char === '\u232b') {
                const icon = document.createElement('i');
                icon.className = 'fa fa-backspace';
                key.appendChild(icon);
            }
            else
            {
                key.textContent = char === '\u21b5' ? 'Enter' : char;
            }
            key.id = char;
            key.addEventListener('click', () => updateTile(char));
            row.appendChild(key);
        }
        board.appendChild(row);
    }
    for (let i = 0; i < keys.length; i++) {
        hasright[keys[i]] = 0;
        hasalright[keys[i]] = 0;
        maxxx[keys[i]]=false;
    }
    has=[];
    hasn=[];
    guesses=[];
    for (let i = 0; i < (costom?length2:length); i++) {
        has.push([]);
        hasn.push([]);
    }
    if(circl&&lastWord[costom?length2:length]!=undefined) {
        for (var i = 0; i < (costom?length2:length); i++) {
            updateTile(lastWord[costom?length2:length][i].toUpperCase());
        }
        updateTile('\u21b5');
    }
    lastWord[costom?length2:length]=targetWord;
    saveToCookie();
}
var queryString = window.location.search.substring(1);
let targetWord = 'TRACE';
let length2 = 4;
function init(part=false) {
    generateOptions();
    document.getElementById('overlay').opacity = '0';
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('settinglay').opacity = '0';
    document.getElementById('settinglay').style.visibility = 'hidden';
    isWin = false;
    if (!part) {
        let target = [];
        if(!costom)
        {
            if(use_mini) target = mini_words[length];
            else target = words[length];
            const randomIndex = Math.floor(Math.random() * target.length);
            targetWord = target[randomIndex][0].toUpperCase();
            document.getElementById('answerMean').textContent = target[randomIndex][1];
        }
        else
        {
            document.getElementById('answerMean').textContent = meaning[targetWord]===undefined?"暂无译义":meaning[targetWord];
        }
        let contain = document.getElementById('answerWord');
        contain.innerHTML = '';
        Tile = [];
        for (var i = 0; i < targetWord.length; i++) {
            var div = document.createElement('div');
            div.textContent = targetWord[i];
            div.className = 'Tile';
            Tile.push(div);
            contain.appendChild(div);
        }
    }
    currentRow = 0;
    currentTile = 0;
    guess = '';
    messages = [];
    document.getElementById('buttons').style.display = 'flex';
    document.getElementById('win').style.visibility = 'hidden';
    document.getElementById('win').style.opacity = '0';
    document.getElementById('lost').style.visibility = 'hidden';
    document.getElementById('lost').style.opacity = '0';
    document.getElementById('cant').style.visibility = 'hidden';
    document.getElementById('cant').style.opacity = '0';
    createBoard();
    createKeyboard();
}
if (queryString != '')
{
    let word_=decode62(queryString);
    if (/^[A-Z]+$/.test(word_)) {
        targetWord = word_;
        length2 = targetWord.length;
        costom = true;
    }
    else {
        history.pushState(null, '', window.location.pathname);
    }
}
else {
    history.pushState(null, '', window.location.pathname);
}
init();
var options_ = document.querySelectorAll('.option');
if(hd==true&&(length==10||length==11)) {
    let number=9;
    length=number;
    options_.forEach(function(option) {
        option.classList.remove('selected');
        if (parseInt(option.dataset.value)===number)option.classList.add('selected');
    });
}
saveToCookie();
document.addEventListener('keydown', (e) => {
    if ((e.key.match(/^[a-z]$/i) || (e.key === 'Backspace'&& !e.shiftKey) || (e.key === 'Enter'&& !e.shiftKey)) && !e.ctrlKey && !e.altKey && document.getElementById('settinglay').style.visibility != "visible") {
        event.preventDefault();
        const key = e.key === 'Backspace' ? '\u232b' : e.key === 'Enter' ? '\u21b5' : e.key.toUpperCase();
        updateTile(key);
    }
    else if ((e.key.match(/^[4-9]$/i)||e.key ==='a'||e.key ==='b') && !e.ctrlKey && !e.altKey && !e.shiftKey && document.activeElement!=document.getElementById('input')) {
        event.preventDefault();
        var number=e.key ==='a'?10:e.key ==='b'?11:parseInt(e.key);
        if(!hd||(e.key !='a'&&e.key !='b'))
        {
        if(document.getElementById('settinglay').style.visibility === "visible") {
            document.getElementById('nn').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            length=number;
            var options = document.querySelectorAll('.option');
            options.forEach(function(option) {
                option.classList.remove('selected');
                if (parseInt(option.dataset.value)===number)option.classList.add('selected');
            });
            saveToCookie();
            costom = false;
            history.pushState(null, '', window.location.pathname);
            isWin = false;
            let target = [];
            if(use_mini) target = mini_words[length];
            else target = words[length];
            const randomIndex = Math.floor(Math.random() * target.length);
            targetWord = target[randomIndex][0].toUpperCase();
            let contain = document.getElementById('answerWord');
            contain.innerHTML = '';
            Tile = [];
            for (var i = 0; i < targetWord.length; i++) {
                var div = document.createElement('div');
                div.textContent = targetWord[i];
                div.className = 'Tile';
                Tile.push(div);
                contain.appendChild(div);
            }
            document.getElementById('answerMean').textContent = target[randomIndex][1];
            currentRow = 0;
            currentTile = 0;
            guess = '';
            messages = [];
            document.getElementById('buttons').style.display = 'flex';
            document.getElementById('win').style.visibility = 'hidden';
            document.getElementById('win').style.opacity = '0';
            document.getElementById('lost').style.visibility = 'hidden';
            document.getElementById('lost').style.opacity = '0';
            document.getElementById('cant').style.visibility = 'hidden';
            document.getElementById('cant').style.opacity = '0';
            createBoard();
            createKeyboard();
        }
    }
    }
    else if(event.ctrlKey) {
        if(e.key === 'r') {
            event.preventDefault();
            costom = false;
            history.pushState(null, '', window.location.pathname);
            init(); 
        }
        if(e.key === 's') {
            event.preventDefault();
            if(document.getElementById('overlay').style.visibility === "visible") {
                copylink();
            }
            else if(document.getElementById('input') === document.activeElement) {
                document.getElementById('input').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                if(document.getElementById('see').className==="fa fa-eye") {
                    document.getElementById('see').className="fa fa-eye-slash";
                    document.getElementById('see').style.left="335px";
                    document.getElementById('input').type = 'text';
                    see=true;
                    saveToCookie();
                }
                else if(document.getElementById('see').className==="fa fa-eye-slash") {
                    document.getElementById('see').className="fa fa-eye";
                    document.getElementById('see').style.left="336px";
                    document.getElementById('input').type = 'password';
                    see=false;
                    saveToCookie();
                }
            }
            else if(document.getElementById('settinglay').style.visibility === "visible"&&document.getElementById('input') != document.activeElement)
            {
                document.getElementById('ns').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                if(document.getElementById('strict').checked) {
                    document.getElementById('strict').checked=false;
                    saveToCookie();
                }
                else {
                    document.getElementById('strict').checked=true;
                    saveToCookie();
                }
            } 
            else {
                document.getElementById('settinglay').style.visibility = 'visible';
                document.getElementById('settinglay').style.opacity = '1';
            }
        }
        if(e.key === 'a') {
            event.preventDefault();
            if(document.getElementById('settinglay').style.visibility != "visible") {
                currentRow = tries;
                if (isWin) {
                    const result = document.getElementById('win');
                    result.style.visibility = 'visible';
                    result.style.opacity = '1';
                }
                else if (currentRow == tries) {
                    const result = document.getElementById('lost');
                    result.style.visibility = 'visible';
                    result.style.opacity = '1';
                }
                document.getElementById('overlay').style.visibility = 'visible';
                document.getElementById('overlay').style.opacity = '1';
                if (document.getElementById('answerMean').clientHeight > 41) {
                    document.getElementById('answerMean').style.textAlign = "left";
                }
                else {
                    document.getElementById('answerMean').style.textAlign = "center";
                }
            }
        }
        if(e.key === 'f') {
            event.preventDefault();
            if(document.getElementById('settinglay').style.visibility === "visible"&&document.getElementById('input') != document.activeElement)
            {
                document.getElementById('nf').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                if(document.getElementById('easy').checked) {
                    document.getElementById('easy').checked=false;
                    saveToCookie();
                }
                else {
                    document.getElementById('easy').checked=true;
                    saveToCookie();
                }
            }
        }
        if(e.key === 'c')
        {
            event.preventDefault();
            if(document.getElementById('settinglay').style.visibility === "visible"&&document.getElementById('input') != document.activeElement)
            {
                document.getElementById('nc').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                if(document.getElementById('circle').checked) {
                    document.getElementById('circle').checked=false;
                    saveToCookie();
                }
                else {
                    document.getElementById('circle').checked=true;
                    saveToCookie();
                }
            }
        }
        if(e.key === 'h')
        {
            event.preventDefault();
            if(document.getElementById('settinglay').style.visibility === "visible"&&document.getElementById('input') != document.activeElement)
            {
                document.getElementById('nh').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                if(document.getElementById('hard').checked) {
                    document.getElementById('hard').checked=false;
                    saveToCookie();
                }
                else {
                    document.getElementById('hard').checked=true;
                    saveToCookie();
                }
            }
        }
        if(e.key === 'i')
            {
                event.preventDefault();
                if(document.getElementById('settinglay').style.visibility === "visible"&&document.getElementById('input') != document.activeElement)
                {
                    document.getElementById('ni').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    if(document.getElementById('infine').checked) {
                        document.getElementById('infine').checked=false;
                        saveToCookie();
                    }
                    else {
                        document.getElementById('infine').checked=true;
                        saveToCookie();
                    }
                }
            }
        if(e.key === 'v')
        {
            if(document.getElementById('settinglay').style.visibility != "visible")
            {
                event.preventDefault();
                navigator.clipboard.readText()
                .then(text => {
                    if(text.startsWith(window.location.origin + window.location.pathname+"?"))
                    {
                        queryString=text.substring(text.indexOf("?")+1);
                        if (queryString != '')
                        {
                            let word_=decode62(queryString);
                            if (/^[A-Z]+$/.test(word_))
                            {
                                targetWord = word_;
                                length2 = targetWord.length;
                                costom = true;
                                history.pushState(null, '', text);
                            }
                            else
                            {
                                costom = false;
                                history.pushState(null, '', window.location.pathname);
                            }
                        }
                        init();
                    }
                    else if(text.startsWith(window.location.origin + window.location.pathname)) {
                        costom = false;
                        history.pushState(null, '', window.location.pathname);
                        init();
                    }
                    else {
                        costom = false;
                        history.pushState(null, '', window.location.pathname);
                        init();
                        const mess = document.getElementById('cant');
                        messages.forEach(element => clearTimeout(element));
                        messages=[];
                        mess.style.color='#f77';
                        mess.textContent='Invalid url!';
                        mess.style.visibility = 'visible';
                        mess.style.opacity = '1';
                        messages.push(setTimeout(()=> {
                            mess.style.opacity = '0';
                            messages.push(setTimeout(()=> {mess.style.visibility = 'hidden';},200));
                        },1000));
                    }
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                });
            }
        }
    }
    else if(e.keyCode === 27 && !e.ctrlKey && !e.altKey && !e.shiftKey)
    {
        event.preventDefault();
        if(document.getElementById('overlay').style.visibility === "visible")
        {
            document.getElementById('overlay').style.opacity = '0';
            setTimeout(()=> {document.getElementById('overlay').style.visibility = 'hidden';},200)
        }
        else if(document.getElementById('settinglay').style.visibility === "visible")
        {
            document.getElementById('settinglay').style.opacity = '0';
            setTimeout(()=> {document.getElementById('settinglay').style.visibility = 'hidden';},200)
        }
    }
    else if(e.keyCode === 9 && !e.ctrlKey && !e.altKey && !e.shiftKey)
    {
        event.preventDefault();
        if(document.getElementById('settinglay').style.visibility === "visible")
        {
            if(document.getElementById('input') === document.activeElement) {
                document.getElementById('input').blur();
            }
            else {
                document.getElementById('input').focus();
                document.getElementById('Copy').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
    else if(e.key === ' ' && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        event.preventDefault();
    }
    else if(e.key === 'Enter' && !e.ctrlKey && !e.altKey && !e.shiftKey)
    {
        event.preventDefault();
        if(document.getElementById('input') === document.activeElement)
        {
            document.getElementById('Copy').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            var word = document.getElementById('input').value.toUpperCase();
            var exist = false;
                for (let i = 4; i < 12; i++) {
                if(ext_words[i].includes(word)) {
                    exist=true;
                    break;
                }
            }
            if(exist) copyToClipboard(window.location.origin + window.location.pathname + "?"+encode62(word));
            else {
                cpms.forEach(element => clearTimeout(element));
                cpms=[];
                document.getElementById('cpd2').style.color='#f77';
                document.getElementById('cpd2').style.left='37px';
                document.getElementById('cpd2').textContent='Invalid word!';
                document.getElementById('cpd2').style.opacity=1;
                cpms.push(setTimeout(()=> {document.getElementById('cpd2').style.opacity = '0';},1000));
            
            }
        }
    }
});