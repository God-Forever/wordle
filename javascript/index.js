let keys = "QWERTYUIOPASDFGHJKLZXCVBNM";
let cpms = [];
let hd = false;
let guesses = [];
let tries = 6;
let infine = false;
let isLost = false;
function judge() {
  for (let i = 0; i < keys.length; i++) {
    let num = 0;
    for (let j = 0; j < guess.length; j++) {
      if (guess[j] == keys[i]) num++;
    }
    if (num < hasright[keys[i]]) {
      return (
        "At least " +
        hasright[keys[i]].toString() +
        ' "' +
        keys[i] +
        '"' +
        (hasright[keys[i]] == 1 ? "" : "s")
      );
    }
  }
  for (let i = 0; i < guess.length; i++) {
    let num = 0;
    for (let j = 0; j < guess.length; j++) {
      if (guess[j] == guess[i]) num++;
    }
    if (num > hasright[guess[i]] && maxxx[guess[i]]) {
      if (hasright[guess[i]] == 0) return 'No "' + guess[i] + '"';
      else
        return (
          "At most " +
          hasright[guess[i]].toString() +
          ' "' +
          guess[i] +
          '"' +
          (hasright[guess[i]] == 1 ? "" : "s")
        );
    }
    if (hasn[i].includes(guess[i])) {
      return (
        (i + 1).toString() +
        ((i + 1) % 10 == 1
          ? "st"
          : (i + 1) % 10 == 2
          ? "nd"
          : (i + 1) % 10 == 3
          ? "rd"
          : "th") +
        ' is not "' +
        guess[i] +
        '"'
      );
    }
    for (let j = 0; j < has[i].length; j++) {
      if (has[i][j] != guess[i])
        return (
          (i + 1).toString() +
          ((i + 1) % 10 == 1
            ? "st"
            : (i + 1) % 10 == 2
            ? "nd"
            : (i + 1) % 10 == 3
            ? "rd"
            : "th") +
          ' is "' +
          has[i][j] +
          '"'
        );
    }
  }
  return "accept";
}
function judge2() {
  for (let k = 0; k < guesses.length; k++) {
    let result = "0".repeat(length);
    for (let i = 0; i < length; i++) {
      if (guesses[k][0][i] === guess[i]) {
        if (result[i] === "1")
          for (let j = i + 1; j < guess.length; j++) {
            if (guesses[k][0][j] === guess[i] && result[j] === "0") {
              result = result.substring(0, j) + "1" + result.substring(j + 1);
              break;
            }
          }
        result = result.substring(0, i) + "2" + result.substring(i + 1);
      } else
        for (let j = 0; j < guess.length; j++) {
          if (guesses[k][0][j] === guess[i] && result[j] === "0") {
            result = result.substring(0, j) + "1" + result.substring(j + 1);
            break;
          }
        }
    }
    let grr = 0;
    let yee = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] == 1) yee++;
      else if (result[i] == 2) grr++;
    }
    if (grr != guesses[k][1])
      return (
        (guesses[k][1] == 0
          ? "No green in "
          : guesses[k][1].toString() +
            (guesses[k][1] == 1 ? " green in " : " greens in ")) +
        (k + 1).toString() +
        ((k + 1) % 10 == 1
          ? "st"
          : (k + 1) % 10 == 2
          ? "nd"
          : (k + 1) % 10 == 3
          ? "rd"
          : "th") +
        " guess"
      );
    if (yee != guesses[k][2])
      return (
        (guesses[k][2] == 0
          ? "No yellow in "
          : guesses[k][2].toString() +
            (guesses[k][2] == 1 ? " yellow in " : " yellows in ")) +
        (k + 1).toString() +
        ((k + 1) % 10 == 1
          ? "st"
          : (k + 1) % 10 == 2
          ? "nd"
          : (k + 1) % 10 == 3
          ? "rd"
          : "th") +
        " guess"
      );
  }
  return "accept";
}
let strict = false;
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    cpms.forEach((element) => clearTimeout(element));
    cpms = [];
    document.getElementById("cpd").style.color = "#4B4";
    document.getElementById("cpd").textContent = "Link copied!";
    document.getElementById("cpd").style.opacity = 1;
    document.getElementById("cpd2").style.color = "#4B4";
    document.getElementById("cpd2").style.left = "39px";
    document.getElementById("cpd2").textContent = "Link copied!";
    document.getElementById("cpd2").style.opacity = 1;
    cpms.push(
      setTimeout(() => {
        document.getElementById("cpd").style.opacity = "0";
        document.getElementById("cpd2").style.opacity = "0";
      }, 1000)
    );
    return navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (!successful) {
        cpms.forEach((element) => clearTimeout(element));
        cpms = [];
        document.getElementById("cpd").style.color = "#f77";
        document.getElementById("cpd").textContent = "Copy failed!";
        document.getElementById("cpd").style.opacity = 1;
        document.getElementById("cpd2").style.color = "#f77";
        document.getElementById("cpd2").style.left = "39px";
        document.getElementById("cpd2").textContent = "Copy failed!";
        document.getElementById("cpd2").style.opacity = 1;
        cpms.push(
          setTimeout(() => {
            document.getElementById("cpd").style.opacity = "0";
            document.getElementById("cpd2").style.opacity = "0";
          }, 1000)
        );
      } else {
        cpms.forEach((element) => clearTimeout(element));
        cpms = [];
        document.getElementById("cpd").style.color = "#4B4";
        document.getElementById("cpd").textContent = "Link copied!";
        document.getElementById("cpd").style.opacity = 1;
        document.getElementById("cpd2").style.color = "#4B4";
        document.getElementById("cpd2").style.left = "39px";
        document.getElementById("cpd2").textContent = "Link copied!";
        document.getElementById("cpd2").style.opacity = 1;
        cpms.push(
          setTimeout(() => {
            document.getElementById("cpd").style.opacity = "0";
            document.getElementById("cpd2").style.opacity = "0";
          }, 1000)
        );
      }
    } catch (err) {
      cpms.forEach((element) => clearTimeout(element));
      cpms = [];
      document.getElementById("cpd").style.color = "#f77";
      document.getElementById("cpd").textContent = "Copy failed!";
      document.getElementById("cpd").style.opacity = 1;
      document.getElementById("cpd2").style.color = "#f77";
      document.getElementById("cpd2").style.left = "39px";
      document.getElementById("cpd2").textContent = "Copy failed!";
      document.getElementById("cpd2").style.opacity = 1;
      cpms.push(
        setTimeout(() => {
          document.getElementById("cpd").style.opacity = "0";
          document.getElementById("cpd2").style.opacity = "0";
        }, 1000)
      );
    }
    document.body.removeChild(textArea);
  }
}
function generateShare() {
  var share =
    window.location.origin +
    window.location.pathname +
    "?" +
    encode62(targetWord) +
    "\n";
  if (isWin)
    share +=
      "I  guessed this word in " +
      currentRow +
      (currentRow == 1 ? " try!" : " tries!") +
      "\n\n";
  else share += "This word is so hard to guess!\n\n";
  const rows = document.querySelectorAll(".board-row");
  for (let i = 0; i < currentRow; i++) {
    const tiles = rows[i].querySelectorAll(".tile");
    for (let j = 0; j < length; j++) {
      if (
        tiles[j].style.backgroundColor == "rgb(68, 187, 68)" &&
        tiles[j].style.opacity != 0.6
      )
        share += "\ud83d\udfe9";
      else if (
        tiles[j].style.backgroundColor == "rgb(238, 204, 51)" &&
        tiles[j].style.opacity != 0.6
      )
        share += "\ud83d\udfe8";
      else share += "\u2b1c";
    }
    share += "\n";
  }
  share += "\n";
  share += "Game Modes on: ";
  if (use_mini) share += "Familiar Mode, ";
  if (circl) share += "Circle Mode, ";
  if (strict) share += "Strict Mode, ";
  if (hd) share += "Hard Mode, ";
  if (infine) share += "Infinity Mode, ";
  if (share[share.length - 2] != ",") share += "None, ";
  share = share.substring(0, share.length - 2);
  share += "\n\n";
  share +=
    "Can you guess this word?\nJust paste this text into the browser to play with me!";
  return share;
}
function generateOptions() {
  var container = document.getElementById("options-container");
  container.innerHTML = "";
  for (var i = 4; i <= 11; i++) {
    var div = document.createElement("div");
    div.className = "option";
    div.textContent = i;
    div.dataset.value = i;
    div.dataset.disabled = "false";
    div.addEventListener("click", function () {
      selectOption(this);
    });
    if (i === length) {
      div.classList.add("selected");
    }
    container.appendChild(div);
  }
  var options_ = document.querySelectorAll(".option");
  if (hd == true) {
    options_.forEach(function (option) {
      if (
        parseInt(option.dataset.value) === 9 ||
        parseInt(option.dataset.value) === 10 ||
        parseInt(option.dataset.value) === 11
      )
        option.dataset.disabled = "true";
    });
  } else {
    options_.forEach(function (option) {
      if (
        parseInt(option.dataset.value) === 9 ||
        parseInt(option.dataset.value) === 10 ||
        parseInt(option.dataset.value) === 11
      )
        option.dataset.disabled = "false";
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
  localStorage.setItem("length", length);
  localStorage.setItem("use_mini", use_mini);
  localStorage.setItem("see", see);
  localStorage.setItem("circl", circl);
  localStorage.setItem("strict", strict);
  localStorage.setItem("hd", hd);
  localStorage.setItem("infine", infine);
  localStorage.setItem("lastWord", JSON.stringify(lastWord));
}
function loadFromCookie() {
  length =
    localStorage.getItem("length") == null
      ? 5
      : parseInt(localStorage.getItem("length"));
  use_mini =
    localStorage.getItem("use_mini") == null
      ? false
      : localStorage.getItem("use_mini") === "true";
  see =
    localStorage.getItem("see") == null
      ? true
      : localStorage.getItem("see") === "true";
  circl =
    localStorage.getItem("circl") == null
      ? false
      : localStorage.getItem("circl") === "true";
  strict =
    localStorage.getItem("strict") == null
      ? false
      : localStorage.getItem("strict") === "true";
  hd =
    localStorage.getItem("hd") == null
      ? false
      : localStorage.getItem("hd") === "true";
  infine =
    localStorage.getItem("infine") == null
      ? false
      : localStorage.getItem("infine") === "true";
  lastWord =
    localStorage.getItem("lastWord") == null
      ? {}
      : JSON.parse(localStorage.getItem("lastWord"));
}
loadFromCookie();
function stringToUniqueNumber(str) {
  let num = 0n;
  for (let i = 0; i < str.length; i++) {
    num = num * 256n + BigInt(str.charCodeAt(i));
  }
  return num;
}
const BASE62_CHARACTERS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const BASE62_RADIX = BASE62_CHARACTERS.length;
function base62Encode(num) {
  let result = "";
  while (num > 0) {
    result = BASE62_CHARACTERS[num % BigInt(BASE62_RADIX)] + result;
    num = num / BigInt(BASE62_RADIX);
  }
  return result;
}
function base62Decode(str) {
  let result = 0n;
  for (let i = 0; i < str.length; i++) {
    result =
      result * BigInt(BASE62_RADIX) + BigInt(BASE62_CHARACTERS.indexOf(str[i]));
  }
  return result;
}
function uniqueNumberToString(num) {
  let str = "";
  while (num > 0) {
    str = String.fromCharCode(Number(num % 256n)) + str;
    num = num / 256n;
  }
  return str;
}
function encode62(str) {
  return base62Encode(stringToUniqueNumber(str));
}
function decode62(str) {
  return uniqueNumberToString(base62Decode(str));
}
if (see) {
  document.getElementById("see").className = "fa fa-eye-slash";
  document.getElementById("see").style.left = "335px";
  document.getElementById("input").type = "text";
} else {
  document.getElementById("see").className = "fa fa-eye";
  document.getElementById("see").style.left = "336px";
  document.getElementById("input").type = "password";
}
function selectOption(selectedDiv) {
  var options = document.querySelectorAll(".option");
  options.forEach(function (option) {
    option.classList.remove("selected");
  });
  selectedDiv.classList.add("selected");
  length = parseInt(selectedDiv.dataset.value);
  saveToCookie();
  costom = false;
  history.pushState(null, "", window.location.pathname);
  isWin = false;
  let target = [];
  if (use_mini) target = mini_words[length];
  else target = words[length];
  const randomIndex = Math.floor(Math.random() * target.length);
  targetWord = target[randomIndex].toUpperCase();
  let contain = document.getElementById("answerWord");
  contain.innerHTML = "";
  Tile = [];
  for (var i = 0; i < targetWord.length; i++) {
    var div = document.createElement("div");
    div.textContent = targetWord[i];
    div.className = "Tile";
    Tile.push(div);
    contain.appendChild(div);
  }
  document.getElementById("answerMean").textContent =
    meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
  currentRow = 0;
  currentTile = 0;
  guess = "";
  messages = [];
  document.getElementById("buttons").style.display = "flex";
  document.getElementById("win").style.visibility = "hidden";
  document.getElementById("win").style.opacity = "0";
  document.getElementById("lost").style.visibility = "hidden";
  document.getElementById("lost").style.opacity = "0";
  document.getElementById("cant").style.visibility = "hidden";
  document.getElementById("cant").style.opacity = "0";
  createBoard();
  createKeyboard();
}
document.getElementById("easy").checked = use_mini;
document.getElementById("circle").checked = circl;
document.getElementById("strict").checked = strict;
document.getElementById("hard").checked = hd;
document.getElementById("infine").checked = infine;
var switches = document.querySelectorAll('.switch input[type="checkbox"]');
function chg(switchId,switchState) {
  if (switchId === "easy") {
    use_mini = switchState;
    saveToCookie();
  }
  if (switchId === "circle") {
    circl = switchState;
    saveToCookie();
  }
  if (switchId === "strict") {
    strict = switchState;
    saveToCookie();
  }
  if (switchId === "infine") {
    infine = switchState;
    saveToCookie();
  }
  if (switchId === "hard") {
    hd = switchState;
    var options = document.querySelectorAll(".option");
    if (switchState == true) {
      saveToCookie();
      options.forEach(function (option) {
        if (
          parseInt(option.dataset.value) === 9 ||
          parseInt(option.dataset.value) === 10 ||
          parseInt(option.dataset.value) === 11
        )
          option.dataset.disabled = "true";
      });
    } else {
      options.forEach(function (option) {
        if (
          parseInt(option.dataset.value) === 9 ||
          parseInt(option.dataset.value) === 10 ||
          parseInt(option.dataset.value) === 11
        )
          option.dataset.disabled = "false";
      });
    }
    if (switchState == true && (length == 9 ||length == 10 || length == 11)) {
      let number = 8;
      length = number;
      options.forEach(function (option) {
        option.classList.remove("selected");
        if (
          parseInt(option.dataset.value) === 8
        )
          option.classList.add("selected");
      });
    }
  }
  costom = false;
  history.pushState(null, "", window.location.pathname);
  isWin = false;
  let target = [];
  if (use_mini) target = mini_words[length];
  else target = words[length];
  const randomIndex = Math.floor(Math.random() * target.length);
  targetWord = target[randomIndex].toUpperCase();
  let contain = document.getElementById("answerWord");
  contain.innerHTML = "";
  Tile = [];
  for (var i = 0; i < targetWord.length; i++) {
    var div = document.createElement("div");
    div.textContent = targetWord[i];
    div.className = "Tile";
    Tile.push(div);
    contain.appendChild(div);
  }
  document.getElementById("answerMean").textContent =
    meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
  currentRow = 0;
  currentTile = 0;
  guess = "";
  messages = [];
  document.getElementById("buttons").style.display = "flex";
  document.getElementById("win").style.visibility = "hidden";
  document.getElementById("win").style.opacity = "0";
  document.getElementById("lost").style.visibility = "hidden";
  document.getElementById("lost").style.opacity = "0";
  document.getElementById("cant").style.visibility = "hidden";
  document.getElementById("cant").style.opacity = "0";
  createBoard();
  createKeyboard();
}
switches.forEach(function (switchElement) {
  switchElement.addEventListener("change", function (event) {
    var switchId = event.target.id;
    var switchState = event.target.checked;
    if (switchId === "easy") {
      use_mini = switchState;
      saveToCookie();
    }
    if (switchId === "circle") {
      circl = switchState;
      saveToCookie();
    }
    if (switchId === "strict") {
      strict = switchState;
      saveToCookie();
    }
    if (switchId === "infine") {
      infine = switchState;
      saveToCookie();
    }
    if (switchId === "hard") {
      hd = switchState;
      var options = document.querySelectorAll(".option");
      if (switchState == true) {
        saveToCookie();
        options.forEach(function (option) {
          if (
            parseInt(option.dataset.value) === 9 ||
            parseInt(option.dataset.value) === 10 ||
            parseInt(option.dataset.value) === 11
          )
            option.dataset.disabled = "true";
        });
      } else {
        options.forEach(function (option) {
          if (
            parseInt(option.dataset.value) === 9 ||
            parseInt(option.dataset.value) === 10 ||
            parseInt(option.dataset.value) === 11
          )
            option.dataset.disabled = "false";
        });
      }
      if (switchState == true && (length == 9 ||length == 10 || length == 11)) {
        let number = 8;
        length = number;
        options.forEach(function (option) {
          option.classList.remove("selected");
          if (
            parseInt(option.dataset.value) === 8
          )
            option.classList.add("selected");
        });
      }
    }
    costom = false;
    history.pushState(null, "", window.location.pathname);
    isWin = false;
    let target = [];
    if (use_mini) target = mini_words[length];
    else target = words[length];
    const randomIndex = Math.floor(Math.random() * target.length);
    targetWord = target[randomIndex].toUpperCase();
    let contain = document.getElementById("answerWord");
    contain.innerHTML = "";
    Tile = [];
    for (var i = 0; i < targetWord.length; i++) {
      var div = document.createElement("div");
      div.textContent = targetWord[i];
      div.className = "Tile";
      Tile.push(div);
      contain.appendChild(div);
    }
    document.getElementById("answerMean").textContent =
      meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
    currentRow = 0;
    currentTile = 0;
    guess = "";
    messages = [];
    document.getElementById("buttons").style.display = "flex";
    document.getElementById("win").style.visibility = "hidden";
    document.getElementById("win").style.opacity = "0";
    document.getElementById("lost").style.visibility = "hidden";
    document.getElementById("lost").style.opacity = "0";
    document.getElementById("cant").style.visibility = "hidden";
    document.getElementById("cant").style.opacity = "0";
    createBoard();
    createKeyboard();
  });
});
const keyboardLayout = ["QWERTYUIOP", "ASDFGHJKL", "\u232bZXCVBNM\u21b5"];
let isWin = false;
let currentRow = 0;
let currentTile = 0;
let guess = "";
let messages = [];
let Tile = [];
document.getElementById("RedoPopup").addEventListener("click", () => {
  costom = false;
  history.pushState(null, "", window.location.pathname);
  init();
});
document.getElementById("see").addEventListener("click", () => {
  if (document.getElementById("see").className === "fa fa-eye") {
    document.getElementById("see").className = "fa fa-eye-slash";
    document.getElementById("see").style.left = "335px";
    document.getElementById("input").type = "text";
    see = true;
    saveToCookie();
  } else if (document.getElementById("see").className === "fa fa-eye-slash") {
    document.getElementById("see").className = "fa fa-eye";
    document.getElementById("see").style.left = "336px";
    document.getElementById("input").type = "password";
    see = false;
    saveToCookie();
  }
});
document.getElementById("Share").addEventListener("click", () => {
  copyToClipboard(generateShare());
});
document.getElementById("Copy").addEventListener("click", () => {
  var word = document.getElementById("input").value.toUpperCase();
  var exist = false;
  for (let i = 4; i < 12; i++) {
    if (ext_words[i].includes(word)) {
      exist = true;
      break;
    }
  }
  if (exist)
    copyToClipboard(
      window.location.origin + window.location.pathname + "?" + encode62(word)
    );
  else {
    cpms.forEach((element) => clearTimeout(element));
    cpms = [];
    document.getElementById("cpd2").style.color = "#f77";
    document.getElementById("cpd2").style.left = "34px";
    document.getElementById("cpd2").textContent = "Invalid word!";
    document.getElementById("cpd2").style.opacity = 1;
    cpms.push(
      setTimeout(() => {
        document.getElementById("cpd2").style.opacity = "0";
      }, 1000)
    );
  }
});
document.getElementById("reDo").addEventListener("click", () => {
  costom = false;
  history.pushState(null, "", window.location.pathname);
  init();
});
window.addEventListener("resize", () => {
  var menu = document.getElementById("contextMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  document.getElementById("set").style.transform = `scale(${Math.min(
    window.innerHeight / 747,
    window.innerWidth / 848
  )})`;
  document.getElementById("ans").style.transform = `scale(${Math.min(
    window.innerHeight / 747,
    window.innerWidth / 848
  )})`;
  document.getElementById("top").style.transform = `scale(${Math.min(
    window.innerHeight / 747,
    window.innerWidth / 848
  )}) translateY(${
    10 * Math.min(window.innerHeight / 747, window.innerWidth / 848)
  }px)`;
});
document.getElementById("set").style.transform = `scale(${Math.min(
  window.innerHeight / 747,
  window.innerWidth / 848
)})`;
document.getElementById("ans").style.transform = `scale(${Math.min(
  window.innerHeight / 747,
  window.innerWidth / 848
)})`;
document.getElementById("top").style.transform = `scale(${Math.min(
  window.innerHeight / 747,
  window.innerWidth / 848
)}) translateY(${
  10 * Math.min(window.innerHeight / 747, window.innerWidth / 848)
}px)`;
document.getElementById("giveUp").addEventListener("click", () => {
  isLost = true;
  if (isWin) {
    const result = document.getElementById("win");
    result.style.visibility = "visible";
    result.style.opacity = "1";
    if (hd) resubmit();
  } else {
    const result = document.getElementById("lost");
    result.style.visibility = "visible";
    result.style.opacity = "1";
    if (hd) resubmit();
  }
  document.getElementById("overlay").style.visibility = "visible";
  document.getElementById("overlay").style.opacity = "1";
  if (document.getElementById("answerMean").clientHeight > 41) {
    document.getElementById("answerMean").style.textAlign = "left";
  } else {
    document.getElementById("answerMean").style.textAlign = "center";
  }
});
document.getElementById("settingsBtn").addEventListener("click", () => {
  document.getElementById("settinglay").style.visibility = "visible";
  document.getElementById("settinglay").style.opacity = "1";
});
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("overlay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("overlay").style.visibility = "hidden";
  }, 200);
});
document.getElementById("closeSetting").addEventListener("click", () => {
  document.getElementById("settinglay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("settinglay").style.visibility = "hidden";
  }, 200);
});
function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  for (let i = 0; i < tries; i++) {
    const row = document.createElement("div");
    row.className = "board-row";
    row.style.marginLeft = "10px";
    row.style.marginRight = "10px";
    for (let j = 0; j < length; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      row.appendChild(tile);
    }
    if (hd) {
      const green = document.createElement("div");
      green.className = "tile";
      green.style.marginLeft = "30px";
      green.style.backgroundColor = "#dde";
      green.style.border = "2px solid #dde";
      row.appendChild(green);
      const yellow = document.createElement("div");
      yellow.className = "tile";
      yellow.style.backgroundColor = "#dde";
      yellow.style.border = "2px solid #dde";
      row.appendChild(yellow);
    }
    board.appendChild(row);
  }
}
let hasright = {};
let hasalright = {};
let maxxx = {};
let has = [];
let hasn = [];
for (let i = 0; i < keys.length; i++) {
  hasright[keys[i]] = 0;
  hasalright[keys[i]] = 0;
  maxxx[keys[i]] = false;
}
function countLetter(str, o, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter && o[i] === "1") {
      count++;
    }
  }
  return count;
}
function countLetter2(str, o, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter && o[i] === "2") {
      count++;
    }
  }
  return count;
}
function resubmit() {
  for (let k = 0; k < guesses.length; k++) {
    let result = "0".repeat(length);
    for (let i = 0; i < length; i++) {
      if (guesses[k][0][i] === targetWord[i]) {
        if (result[i] === "1")
          for (let j = i + 1; j < guesses[k][0].length; j++) {
            if (guesses[k][0][j] === targetWord[i] && result[j] === "0") {
              result = result.substring(0, j) + "1" + result.substring(j + 1);
              break;
            }
          }
        result = result.substring(0, i) + "2" + result.substring(i + 1);
      } else
        for (let j = 0; j < guesses[k][0].length; j++) {
          if (guesses[k][0][j] === targetWord[i] && result[j] === "0") {
            result = result.substring(0, j) + "1" + result.substring(j + 1);
            break;
          }
        }
    }
    const rows = document.querySelectorAll(".board-row");
    const tiles = rows[k].querySelectorAll(".tile");
    for (let i = 0; i < length; i++) {
      const key = document.getElementById(guesses[k][0][i]);
      if (result[i] === "0") {
        tiles[i].style.color = "#f8f8ff";
        tiles[i].style.backgroundColor = "#aac";
        tiles[i].style.border = "2px solid #aac";
        tiles[i].style.opacity = 1;
        if (key.className === "keys key") {
          key.className = "keys gy-key";
          key.style.opacity = 1;
        }
      } else if (result[i] === "2") {
        tiles[i].style.color = "#f8f8ff";
        tiles[i].style.backgroundColor = "#4b4";
        tiles[i].style.border = "2px solid #4b4";
        tiles[i].style.opacity = 1;
        key.className = "keys gr-key";
        key.style.opacity = 1;
      } else {
        tiles[i].style.color = "#f8f8ff";
        tiles[i].style.backgroundColor = "#ec3";
        tiles[i].style.border = "2px solid #ec3";
        tiles[i].style.opacity = 1;
        if (key.className != "keys gr-key") {
          key.className = "keys ye-key";
          key.style.opacity = 1;
        }
      }
    }
  }
}
function handleSubmit() {
  if (currentTile < length) {
    const mess = document.getElementById("cant");
    messages.forEach((element) => clearTimeout(element));
    messages = [];
    mess.style.color = "#f77";
    mess.textContent = "To short!";
    mess.style.visibility = "visible";
    mess.style.opacity = "1";
    messages.push(
      setTimeout(() => {
        mess.style.opacity = "0";
        messages.push(
          setTimeout(() => {
            mess.style.visibility = "hidden";
          }, 200)
        );
      }, 1000)
    );
    return;
  }

  if (!ext_words[length].includes(guess)) {
    const mess = document.getElementById("cant");
    messages.forEach((element) => clearTimeout(element));
    messages = [];
    mess.style.color = "#f77";
    mess.textContent = "Word not found!";
    mess.style.visibility = "visible";
    mess.style.opacity = "1";
    messages.push(
      setTimeout(() => {
        mess.style.opacity = "0";
        messages.push(
          setTimeout(() => {
            mess.style.visibility = "hidden";
          }, 200)
        );
      }, 1000)
    );
    return;
  }
  if (strict) {
    let jd = hd ? judge2() : judge();
    if (jd != "accept") {
      const mess = document.getElementById("cant");
      messages.forEach((element) => clearTimeout(element));
      messages = [];
      mess.style.color = "#f77";
      mess.textContent = jd + "!";
      mess.style.visibility = "visible";
      mess.style.opacity = "1";
      messages.push(
        setTimeout(() => {
          mess.style.opacity = "0";
          messages.push(
            setTimeout(() => {
              mess.style.visibility = "hidden";
            }, 200)
          );
        }, 1000)
      );
      return;
    }
  }
  if (currentRow < tries || infine) {
    let result = "0".repeat(length);
    for (let i = 0; i < length; i++) {
      if (guess[i] === targetWord[i]) {
        if (result[i] === "1")
          for (let j = i + 1; j < guess.length; j++) {
            if (guess[j] === targetWord[i] && result[j] === "0") {
              result = result.substring(0, j) + "1" + result.substring(j + 1);
              break;
            }
          }
        result = result.substring(0, i) + "2" + result.substring(i + 1);
      } else
        for (let j = 0; j < guess.length; j++) {
          if (guess[j] === targetWord[i] && result[j] === "0") {
            result = result.substring(0, j) + "1" + result.substring(j + 1);
            break;
          }
        }
    }
    if (result === "2".repeat(length)) {
      isWin = true;
    }
    let canshow = result === "0".repeat(length);
    const rows = document.querySelectorAll(".board-row");
    const tiles = rows[currentRow].querySelectorAll(".tile");
    if (hd) {
      let grr = 0;
      let yee = 0;
      for (let i = 0; i < result.length; i++) {
        if (result[i] == 1) yee++;
        else if (result[i] == 2) grr++;
      }
      guesses.push([guess, grr, yee]);
      tiles[result.length].style.color = "#f8f8ff";
      tiles[result.length].style.backgroundColor = "#4b4";
      tiles[result.length].style.border = "2px solid #4b4";
      tiles[result.length].textContent = grr;
      tiles[result.length + 1].style.color = "#f8f8ff";
      tiles[result.length + 1].style.backgroundColor = "#ec3";
      tiles[result.length + 1].style.border = "2px solid #ec3";
      tiles[result.length + 1].textContent = yee;
    }
    for (let i = 0; i < length; i++) {
      const key = document.getElementById(guess[i]);
      let num = countLetter(guess, result, guess[i]);
      let num2 = countLetter2(guess, result, guess[i]);
      if (hd && !canshow) {
        tiles[i].id = "tile" + idd.toString();
        idd++;
        tiles[i].addEventListener("contextmenu", function (event) {
          event.preventDefault();
          var menu = document.getElementById("contextMenu");
          menu.style.display = "block";
          var x = event.pageX;
          var y = event.pageY;
          var menuWidth = menu.offsetWidth;
          var menuHeight = menu.offsetHeight;
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          if (x + menuWidth > windowWidth) x = windowWidth - menuWidth;
          if (y + menuHeight > windowHeight) y = windowHeight - menuHeight;
          menu.style.left = x + "px";
          menu.style.top = y + "px";
          menu.dataset.id = event.target.id;
        });
      }
      if (result[i] === "0") {
        hasn[i].push(guess[i]);
        maxxx[guess[i]] = true;
        if (!hd) {
          tiles[i].style.color = "#f8f8ff";
          tiles[i].style.backgroundColor = "#aac";
          tiles[i].style.border = "2px solid #aac";
          if (key.className === "keys key" || key.style.opacity == 0.6) {
            key.className = "keys gy-key";
            key.style.opacity = 1;
          }
        } else if (canshow) {
          tiles[i].style.color = "#f8f8ff";
          tiles[i].style.backgroundColor = "#aac";
          tiles[i].style.border = "2px solid #aac";
          if (key.className === "keys key" || key.style.opacity == 0.6) {
            key.className = "keys gy-key";
            key.style.opacity = 1;
          }
        }
      } else if (result[i] === "2") {
        if (!has[i].includes(guess[i])) hasalright[guess[i]] += 1;
        if (num + num2 > hasright[guess[i]]) {
          hasright[guess[i]] = num + num2;
        }
        if (hasalright[guess[i]] > hasright[guess[i]]) {
          hasright[guess[i]] = hasalright[guess[i]];
        }
        has[i].push(guess[i]);
        Tile[i].className = "grTile";
        if (!hd) {
          tiles[i].style.color = "#f8f8ff";
          tiles[i].style.backgroundColor = "#4b4";
          tiles[i].style.border = "2px solid #4b4";
          key.className = "keys gr-key";
          key.style.opacity = 1;
          if (hasright[guess[i]] > 1) {
            key.setAttribute("data-after-content", hasright[guess[i]]);
          }
        }
      } else {
        hasn[i].push(guess[i]);
        if (num + num2 > hasright[guess[i]]) {
          hasright[guess[i]] = num + num2;
        }
        if (hasalright[guess[i]] > hasright[guess[i]]) {
          hasright[guess[i]] = hasalright[guess[i]];
        }
        num = hasright[guess[i]] - hasalright[guess[i]];
        for (let j = 0; j < length; j++) {
          if (
            num > 0 &&
            Tile[j].textContent === guess[i] &&
            Tile[j].className != "grTile"
          ) {
            Tile[j].className = "yeTile";
            num--;
          } else {
            if (
              Tile[j].textContent === guess[i] &&
              Tile[j].className === "yeTile"
            )
              Tile[j].className = "Tile";
          }
        }
        if (!hd) {
          tiles[i].style.color = "#f8f8ff";
          tiles[i].style.backgroundColor = "#ec3";
          tiles[i].style.border = "2px solid #ec3";
          if (key.className != "keys gr-key") {
            key.className = "keys ye-key";
            key.style.opacity = 1;
          }
          if (hasright[guess[i]] > 1) {
            key.setAttribute("data-after-content", hasright[guess[i]]);
          }
        }
      }
    }
    guess = "";
    currentTile = 0;
    currentRow++;
    if (isWin) {
      const result = document.getElementById("win");
      result.style.visibility = "visible";
      result.style.opacity = "1";
      if (hd) resubmit();
      setTimeout(() => {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("overlay").style.opacity = "1";
        if (document.getElementById("answerMean").clientHeight > 41) {
          document.getElementById("answerMean").style.textAlign = "left";
        } else {
          document.getElementById("answerMean").style.textAlign = "center";
        }
      }, 200);
    } else if (currentRow >= tries) {
      if (infine && !isLost) {
        const board = document.getElementById("board");
        const row = document.createElement("div");
        row.className = "board-row";
        row.style.marginLeft = "10px";
        row.style.marginRight = "10px";
        for (let j = 0; j < length; j++) {
          const tile = document.createElement("div");
          tile.className = "tile";
          row.appendChild(tile);
        }
        if (hd) {
          const green = document.createElement("div");
          green.className = "tile";
          green.style.marginLeft = "30px";
          green.style.backgroundColor = "#dde";
          green.style.border = "2px solid #dde";
          row.appendChild(green);
          const yellow = document.createElement("div");
          yellow.className = "tile";
          yellow.style.backgroundColor = "#dde";
          yellow.style.border = "2px solid #dde";
          row.appendChild(yellow);
        }
        board.appendChild(row);
        row.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        const result = document.getElementById("lost");
        result.style.visibility = "visible";
        result.style.opacity = "1";
        resubmit();
        setTimeout(() => {
          document.getElementById("overlay").style.visibility = "visible";
          document.getElementById("overlay").style.opacity = "1";
          if (document.getElementById("answerMean").clientHeight > 41) {
            document.getElementById("answerMean").style.textAlign = "left";
          } else {
            document.getElementById("answerMean").style.textAlign = "center";
          }
        }, 200);
      }
    }
  }
}
document.addEventListener("click", function (event) {
  var menu = document.getElementById("contextMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
});
function updateTile(key) {
  if (isWin) return;
  if (!infine) if (currentRow == tries && key != "\u21b5") return;
  if (isLost) return;
  const rows = document.querySelectorAll(".board-row");
  const tiles = rows[currentRow].querySelectorAll(".tile");
  if (key === "\u232b") {
    if (currentTile > 0) {
      guess = guess.slice(0, -1);
      currentTile--;
      tiles[currentTile].textContent = "";
    }
  } else if (key === "\u21b5") {
    handleSubmit();
  } else {
    if (currentTile < length) {
      guess += key;
      tiles[currentTile].textContent = key;
      currentTile++;
    }
  }
}
var menuItems = document
  .getElementById("contextMenu")
  .getElementsByTagName("li");
menuItems[0].addEventListener("click", function () {
  const div = document.getElementById(
    document.getElementById("contextMenu").dataset.id
  );
  if (
    div.className == "keys key" ||
    (div.className.startsWith("keys") && div.style.opacity == 0.6)
  ) {
    div.className = "keys gr-key";
    div.style.opacity = 0.6;
  } else if (div.className == "tile") {
    div.style.color = "#f8f8ff";
    div.style.backgroundColor = "#4b4";
    div.style.border = "2px solid #4b4";
    div.style.opacity = 0.6;
  }
});
menuItems[1].addEventListener("click", function () {
  const div = document.getElementById(
    document.getElementById("contextMenu").dataset.id
  );
  if (
    div.className == "keys key" ||
    (div.className.startsWith("keys") && div.style.opacity == 0.6)
  ) {
    div.className = "keys ye-key";
    div.style.opacity = 0.6;
  } else if (div.className == "tile") {
    div.style.color = "#f8f8ff";
    div.style.backgroundColor = "#ec3";
    div.style.border = "2px solid #ec3";
    div.style.opacity = 0.6;
  }
});
menuItems[2].addEventListener("click", function () {
  const div = document.getElementById(
    document.getElementById("contextMenu").dataset.id
  );
  if (
    div.className == "keys key" ||
    (div.className.startsWith("keys") && div.style.opacity == 0.6)
  ) {
    div.className = "keys gy-key";
    div.style.opacity = 0.6;
  } else if (div.className == "tile") {
    div.style.color = "#f8f8ff";
    div.style.backgroundColor = "#aac";
    div.style.border = "2px solid #aac";
    div.style.opacity = 0.6;
  }
});
menuItems[3].addEventListener("click", function () {
  const div = document.getElementById(
    document.getElementById("contextMenu").dataset.id
  );
  if (
    div.className == "keys key" ||
    (div.className.startsWith("keys") && div.style.opacity == 0.6)
  ) {
    div.className = "keys key";
    div.style.opacity = 1;
  } else if (div.className == "tile") {
    div.style.color = "#334";
    div.style.backgroundColor = "#eef";
    div.style.border = "2px solid #d3d6da";
    div.style.opacity = 1;
  }
});
function createKeyboard() {
  const board = document.getElementById("keyboard");
  board.innerHTML = "";
  for (let i = 0; i < keyboardLayout.length; i++) {
    const row = document.createElement("div");
    row.className = "keyboard-row";
    for (let j = 0; j < keyboardLayout[i].length; j++) {
      const char = keyboardLayout[i][j];
      const key = document.createElement("div");
      key.className =
        char === "\u232b"
          ? "keys bs-key"
          : char === "\u21b5"
          ? "keys et-key"
          : "keys key";
      key.setAttribute("data-after-content", "");
      if (char === "\u232b") {
        const icon = document.createElement("i");
        icon.className = "fa fa-backspace";
        key.appendChild(icon);
      } else {
        key.textContent = char === "\u21b5" ? "Enter" : char;
      }
      key.id = char;
      if (char != "\u232b" && char != "\u21b5") {
        key.addEventListener("contextmenu", function (event) {
          event.preventDefault();
          if (
            !(
              event.target.className == "keys key" ||
              event.target.style.opacity == 0.6
            )
          )
            return;
          var menu = document.getElementById("contextMenu");
          menu.style.display = "block";
          var x = event.pageX;
          var y = event.pageY;
          var menuWidth = menu.offsetWidth;
          var menuHeight = menu.offsetHeight;
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          if (x + menuWidth > windowWidth) x = windowWidth - menuWidth;
          if (y + menuHeight > windowHeight) y = windowHeight - menuHeight;
          menu.style.left = x + "px";
          menu.style.top = y + "px";
          menu.dataset.id = event.target.id;
        });
      }
      key.addEventListener("click", () => updateTile(char));
      row.appendChild(key);
    }
    board.appendChild(row);
  }
  for (let i = 0; i < keys.length; i++) {
    hasright[keys[i]] = 0;
    hasalright[keys[i]] = 0;
    maxxx[keys[i]] = false;
  }
  has = [];
  hasn = [];
  guesses = [];
  idd = 0;
  isLost = false;
  for (let i = 0; i < length; i++) {
    has.push([]);
    hasn.push([]);
  }
  if (circl && lastWord[length] != undefined) {
    for (var i = 0; i < length; i++) {
      updateTile(lastWord[length][i].toUpperCase());
    }
    updateTile("\u21b5");
  }
  lastWord[length] = targetWord;
  saveToCookie();
}
let idd = 0;
var queryString = window.location.search.substring(1);
let targetWord = "TRACE";
function init() {
  generateOptions();
  document.getElementById("overlay").opacity = "0";
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("settinglay").opacity = "0";
  document.getElementById("settinglay").style.visibility = "hidden";
  isWin = false;
  let target = [];
  if (!costom) {
    if (use_mini) target = mini_words[length];
    else target = words[length];
    const randomIndex = Math.floor(Math.random() * target.length);
    targetWord = target[randomIndex].toUpperCase();
    document.getElementById("answerMean").textContent =
      meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
  } else {
    document.getElementById("answerMean").textContent =
      meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
  }
  let contain = document.getElementById("answerWord");
  contain.innerHTML = "";
  Tile = [];
  for (var i = 0; i < targetWord.length; i++) {
    var div = document.createElement("div");
    div.textContent = targetWord[i];
    div.className = "Tile";
    Tile.push(div);
    contain.appendChild(div);
  }
  currentRow = 0;
  currentTile = 0;
  guess = "";
  messages = [];
  document.getElementById("buttons").style.display = "flex";
  document.getElementById("win").style.visibility = "hidden";
  document.getElementById("win").style.opacity = "0";
  document.getElementById("lost").style.visibility = "hidden";
  document.getElementById("lost").style.opacity = "0";
  document.getElementById("cant").style.visibility = "hidden";
  document.getElementById("cant").style.opacity = "0";
  createBoard();
  createKeyboard();
}
if (queryString != "") {
  let qu2 =
    queryString.indexOf("\n") != -1
      ? queryString.substring(0, queryString.indexOf("\n") - 1)
      : queryString.indexOf("%20") != -1
      ? queryString.substring(0, queryString.indexOf("%20"))
      : queryString.indexOf(" ") != -1
      ? queryString.substring(0, queryString.indexOf(" "))
      : queryString;
  let word_ = decode62(qu2);
  if (/^[A-Z]+$/.test(word_)) {
    history.pushState(null, "", window.location.pathname + "?" + qu2);
    targetWord = word_;
    length = targetWord.length;
    costom = true;
    if (queryString.indexOf("Game Modes on: ") != -1) {
      let modes = queryString.substring(
        queryString.indexOf("Game Modes on: "),
        queryString.indexOf("Can you guess this word?")
      );
      if (modes.indexOf("Familiar") != -1) use_mini = true;
      else use_mini = false;
      if (modes.indexOf("Circle") != -1) circl = true;
      else circl = false;
      if (modes.indexOf("Strict") != -1) strict = true;
      else strict = false;
      if (modes.indexOf("Hard") != -1) hd = true;
      else hd = false;
      if (modes.indexOf("Infinity") != -1) infine = true;
      else infine = false;
      document.getElementById("easy").checked = use_mini;
      document.getElementById("circle").checked = circl;
      document.getElementById("strict").checked = strict;
      document.getElementById("hard").checked = hd;
      document.getElementById("infine").checked = infine;
      saveToCookie();
    } else if (queryString.indexOf("Game%20Modes%20on:%20") != -1) {
      let modes = queryString.substring(
        queryString.indexOf("Game%20Modes%20on:%20"),
        queryString.indexOf("Can%20you%20guess%20this%20word?")
      );
      if (modes.indexOf("Familiar") != -1) use_mini = true;
      else use_mini = false;
      if (modes.indexOf("Circle") != -1) circl = true;
      else circl = false;
      if (modes.indexOf("Strict") != -1) strict = true;
      else strict = false;
      if (modes.indexOf("Hard") != -1) hd = true;
      else hd = false;
      if (modes.indexOf("Infinity") != -1) infine = true;
      else infine = false;
      document.getElementById("easy").checked = use_mini;
      document.getElementById("circle").checked = circl;
      document.getElementById("strict").checked = strict;
      document.getElementById("hard").checked = hd;
      document.getElementById("infine").checked = infine;
      saveToCookie();
    }
  } else {
    history.pushState(null, "", window.location.pathname);
  }
} else {
  history.pushState(null, "", window.location.pathname);
}
init();
var options_ = document.querySelectorAll(".option");
if (hd == true && (length == 10 || length == 11 || length == 9)) {
  let number = 8;
  length = number;
  options_.forEach(function (option) {
    option.classList.remove("selected");
    if (parseInt(option.dataset.value) === number)
      option.classList.add("selected");
  });
}
saveToCookie();
document.getElementById("Github").addEventListener("click", () => {
  window
    .open(
      "https://github.com/God-Forever/wordle",
      "_blank",
      "noopener noreferrer"
    )
    .focus();
});
document.addEventListener("contextmenu", function (event) {
  var menu = document.getElementById("contextMenu");
  if (
    !(
      event.target.className == "keys key" || event.target.style.opacity == 0.6
    ) &&
    menu.style.display === "block"
  ) {
    menu.style.display = "none";
  }
});
document.getElementById("Paste").addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      if (
        text.startsWith(window.location.origin + window.location.pathname + "?")
      ) {
        queryString = text.substring(text.indexOf("?") + 1);
        if (queryString != "") {
          let qu2 =
            queryString.indexOf("\n") != -1
              ? queryString.substring(0, queryString.indexOf("\n") - 1)
              : queryString.indexOf("%20") != -1
              ? queryString.substring(0, queryString.indexOf("%20"))
              : queryString.indexOf(" ") != -1
              ? queryString.substring(0, queryString.indexOf(" "))
              : queryString;
          let word_ = decode62(qu2);
          if (/^[A-Z]+$/.test(word_)) {
            targetWord = word_;
            length = targetWord.length;
            costom = true;
            history.pushState(null, "", window.location.pathname + "?" + qu2);
            if (queryString.indexOf("Game Modes on: ") != -1) {
              let modes = queryString.substring(
                queryString.indexOf("Game Modes on: "),
                queryString.indexOf("Can you guess this word?")
              );
              if (modes.indexOf("Familiar") != -1) use_mini = true;
              else use_mini = false;
              if (modes.indexOf("Circle") != -1) circl = true;
              else circl = false;
              if (modes.indexOf("Strict") != -1) strict = true;
              else strict = false;
              if (modes.indexOf("Hard") != -1) hd = true;
              else hd = false;
              if (modes.indexOf("Infinity") != -1) infine = true;
              else infine = false;
              document.getElementById("easy").checked = use_mini;
              document.getElementById("circle").checked = circl;
              document.getElementById("strict").checked = strict;
              document.getElementById("hard").checked = hd;
              document.getElementById("infine").checked = infine;
              saveToCookie();
            } else if (queryString.indexOf("Game%20Modes%20on:%20") != -1) {
              let modes = queryString.substring(
                queryString.indexOf("Game%20Modes%20on:%20"),
                queryString.indexOf("Can%20you%20guess%20this%20word?")
              );
              if (modes.indexOf("Familiar") != -1) use_mini = true;
              else use_mini = false;
              if (modes.indexOf("Circle") != -1) circl = true;
              else circl = false;
              if (modes.indexOf("Strict") != -1) strict = true;
              else strict = false;
              if (modes.indexOf("Hard") != -1) hd = true;
              else hd = false;
              if (modes.indexOf("Infinity") != -1) infine = true;
              else infine = false;
              document.getElementById("easy").checked = use_mini;
              document.getElementById("circle").checked = circl;
              document.getElementById("strict").checked = strict;
              document.getElementById("hard").checked = hd;
              document.getElementById("infine").checked = infine;
              saveToCookie();
            }
          } else {
            costom = false;
            history.pushState(null, "", window.location.pathname);
          }
        }
        init();
      } else if (
        text.startsWith(window.location.origin + window.location.pathname)
      ) {
        costom = false;
        history.pushState(null, "", window.location.pathname);
        init();
      } else {
        costom = false;
        history.pushState(null, "", window.location.pathname);
        init();
        const mess = document.getElementById("cant");
        messages.forEach((element) => clearTimeout(element));
        messages = [];
        mess.style.color = "#f77";
        mess.textContent = "Invalid url!";
        mess.style.visibility = "visible";
        mess.style.opacity = "1";
        messages.push(
          setTimeout(() => {
            mess.style.opacity = "0";
            messages.push(
              setTimeout(() => {
                mess.style.visibility = "hidden";
              }, 200)
            );
          }, 1000)
        );
      }
    })
    .catch((err) => {
      console.error("Failed to read clipboard contents: ", err);
    });
});
document.addEventListener("keydown", (e) => {
  var menu = document.getElementById("contextMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  if (
    ((e.key.match(/^[a-z]$/i) && !e.shiftKey) ||
      (e.key === "Backspace" && !e.shiftKey) ||
      (e.key === "Enter" && !e.shiftKey)) &&
    !e.ctrlKey &&
    !e.altKey &&
    document.getElementById("settinglay").style.visibility != "visible"
  ) {
    event.preventDefault();
    const key =
      e.key === "Backspace"
        ? "\u232b"
        : e.key === "Enter"
        ? "\u21b5"
        : e.key.toUpperCase();
    updateTile(key);
  } else if (
    e.key.match(/^[a-z]$/i) &&
    e.shiftKey &&
    !e.ctrlKey &&
    !e.altKey &&
    document.getElementById("settinglay").style.visibility != "visible"
  ) {
    event.preventDefault();
    const div = document.getElementById(e.key.toUpperCase());
    if (div.className == "keys key") {
      div.className = "keys gr-key";
      div.style.opacity = 0.6;
    } else if (div.className == "keys gr-key" && div.style.opacity == 0.6) {
      div.className = "keys ye-key";
      div.style.opacity = 0.6;
    } else if (div.className == "keys ye-key" && div.style.opacity == 0.6) {
      div.className = "keys gy-key";
      div.style.opacity = 0.6;
    } else if (div.className == "keys gy-key" && div.style.opacity == 0.6) {
      div.className = "keys key";
      div.style.opacity = 1;
    }
  } else if (
    (e.key.match(/^[4-9]$/i) || e.key === "a" || e.key === "b") &&
    !e.ctrlKey &&
    !e.altKey &&
    !e.shiftKey &&
    document.activeElement != document.getElementById("input")
  ) {
    event.preventDefault();
    var number = e.key === "a" ? 10 : e.key === "b" ? 11 : parseInt(e.key);
    if (!hd || (e.key != "9" && e.key != "a" && e.key != "b")) {
      if (
        document.getElementById("settinglay").style.visibility === "visible"
      ) {
        document
          .getElementById("nn")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        length = number;
        var options = document.querySelectorAll(".option");
        options.forEach(function (option) {
          option.classList.remove("selected");
          if (parseInt(option.dataset.value) === number)
            option.classList.add("selected");
        });
        saveToCookie();
        costom = false;
        history.pushState(null, "", window.location.pathname);
        isWin = false;
        let target = [];
        if (use_mini) target = mini_words[length];
        else target = words[length];
        const randomIndex = Math.floor(Math.random() * target.length);
        targetWord = target[randomIndex].toUpperCase();
        let contain = document.getElementById("answerWord");
        contain.innerHTML = "";
        Tile = [];
        for (var i = 0; i < targetWord.length; i++) {
          var div = document.createElement("div");
          div.textContent = targetWord[i];
          div.className = "Tile";
          Tile.push(div);
          contain.appendChild(div);
        }
        document.getElementById("answerMean").textContent =
          meaning[targetWord] === undefined ? "暂无译义" : meaning[targetWord];
        currentRow = 0;
        currentTile = 0;
        guess = "";
        messages = [];
        document.getElementById("buttons").style.display = "flex";
        document.getElementById("win").style.visibility = "hidden";
        document.getElementById("win").style.opacity = "0";
        document.getElementById("lost").style.visibility = "hidden";
        document.getElementById("lost").style.opacity = "0";
        document.getElementById("cant").style.visibility = "hidden";
        document.getElementById("cant").style.opacity = "0";
        createBoard();
        createKeyboard();
      }
    }
  } else if (event.ctrlKey) {
    if (e.key === "r") {
      event.preventDefault();
      costom = false;
      history.pushState(null, "", window.location.pathname);
      init();
    }
    if (e.key === "s") {
      event.preventDefault();
      if (document.getElementById("overlay").style.visibility === "visible") {
        copyToClipboard(generateShare());
      } else if (document.getElementById("input") === document.activeElement) {
        document
          .getElementById("input")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("see").className === "fa fa-eye") {
          document.getElementById("see").className = "fa fa-eye-slash";
          document.getElementById("see").style.left = "335px";
          document.getElementById("input").type = "text";
          see = true;
          saveToCookie();
        } else if (
          document.getElementById("see").className === "fa fa-eye-slash"
        ) {
          document.getElementById("see").className = "fa fa-eye";
          document.getElementById("see").style.left = "336px";
          document.getElementById("input").type = "password";
          see = false;
          saveToCookie();
        }
      } else if (
        document.getElementById("settinglay").style.visibility === "visible" &&
        document.getElementById("input") != document.activeElement
      ) {
        document
          .getElementById("ns")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("strict").checked) {
          document.getElementById("strict").checked = false;
          chg("strict",false);
        } else {
          document.getElementById("strict").checked = true;
          chg("strict",true);
        }
      } else {
        document.getElementById("settinglay").style.visibility = "visible";
        document.getElementById("settinglay").style.opacity = "1";
      }
    }
    if (e.key === "a") {
      event.preventDefault();
      if (document.getElementById("settinglay").style.visibility != "visible") {
        isLost = true;
        if (isWin) {
          const result = document.getElementById("win");
          result.style.visibility = "visible";
          result.style.opacity = "1";
          if (hd) resubmit();
        } else {
          const result = document.getElementById("lost");
          result.style.visibility = "visible";
          result.style.opacity = "1";
          if (hd) resubmit();
        }
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("overlay").style.opacity = "1";
        if (document.getElementById("answerMean").clientHeight > 41) {
          document.getElementById("answerMean").style.textAlign = "left";
        } else {
          document.getElementById("answerMean").style.textAlign = "center";
        }
      }
    }
    if (e.key === "f") {
      event.preventDefault();
      if (
        document.getElementById("settinglay").style.visibility === "visible" &&
        document.getElementById("input") != document.activeElement
      ) {
        document
          .getElementById("nf")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("easy").checked) {
          document.getElementById("easy").checked = false;
          chg("easy",false);
        } else {
          document.getElementById("easy").checked = true;
          chg("easy",true);
        }
      }
    }
    if (e.key === "c") {
      event.preventDefault();
      if (
        document.getElementById("settinglay").style.visibility === "visible" &&
        document.getElementById("input") != document.activeElement
      ) {
        document
          .getElementById("nc")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("circle").checked) {
          document.getElementById("circle").checked = false;
          chg("circle",false);
        } else {
          document.getElementById("circle").checked = true;
          chg("circle",true);
        }
      }
    }
    if (e.key === "h") {
      event.preventDefault();
      if (
        document.getElementById("settinglay").style.visibility === "visible" &&
        document.getElementById("input") != document.activeElement
      ) {
        document
          .getElementById("nh")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("hard").checked) {
          document.getElementById("hard").checked = false;
          chg("hard",false);
        } else {
          document.getElementById("hard").checked = true;
          chg("hard",true);
        }
      }
    }
    if (e.key === "i") {
      event.preventDefault();
      if (
        document.getElementById("settinglay").style.visibility === "visible" &&
        document.getElementById("input") != document.activeElement
      ) {
        document
          .getElementById("ni")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (document.getElementById("infine").checked) {
          document.getElementById("infine").checked = false;
          chg("infine",false);
        } else {
          document.getElementById("infine").checked = true;
          chg("infine",true);
        }
      }
    }
    if (e.key === "g") {
      event.preventDefault();
      if (document.getElementById("settinglay").style.visibility != "visible") {
        window
          .open(
            "https://github.com/God-Forever/wordle",
            "_blank",
            "noopener noreferrer"
          )
          .focus();
      }
    }
    if (e.key === "v") {
      if (document.getElementById("settinglay").style.visibility != "visible") {
        event.preventDefault();
        navigator.clipboard
          .readText()
          .then((text) => {
            if (
              text.startsWith(
                window.location.origin + window.location.pathname + "?"
              )
            ) {
              queryString = text.substring(text.indexOf("?") + 1);
              if (queryString != "") {
                let qu2 =
                  queryString.indexOf("\n") != -1
                    ? queryString.substring(0, queryString.indexOf("\n") - 1)
                    : queryString.indexOf("%20") != -1
                    ? queryString.substring(0, queryString.indexOf("%20"))
                    : queryString.indexOf(" ") != -1
                    ? queryString.substring(0, queryString.indexOf(" "))
                    : queryString;
                let word_ = decode62(qu2);
                if (/^[A-Z]+$/.test(word_)) {
                  targetWord = word_;
                  length = targetWord.length;
                  costom = true;
                  history.pushState(
                    null,
                    "",
                    window.location.pathname + "?" + qu2
                  );
                  if (queryString.indexOf("Game Modes on: ") != -1) {
                    let modes = queryString.substring(
                      queryString.indexOf("Game Modes on: "),
                      queryString.indexOf("Can you guess this word?")
                    );
                    if (modes.indexOf("Familiar") != -1) use_mini = true;
                    else use_mini = false;
                    if (modes.indexOf("Circle") != -1) circl = true;
                    else circl = false;
                    if (modes.indexOf("Strict") != -1) strict = true;
                    else strict = false;
                    if (modes.indexOf("Hard") != -1) hd = true;
                    else hd = false;
                    if (modes.indexOf("Infinity") != -1) infine = true;
                    else infine = false;
                    document.getElementById("easy").checked = use_mini;
                    document.getElementById("circle").checked = circl;
                    document.getElementById("strict").checked = strict;
                    document.getElementById("hard").checked = hd;
                    document.getElementById("infine").checked = infine;
                    saveToCookie();
                  } else if (
                    queryString.indexOf("Game%20Modes%20on:%20") != -1
                  ) {
                    let modes = queryString.substring(
                      queryString.indexOf("Game%20Modes%20on:%20"),
                      queryString.indexOf("Can%20you%20guess%20this%20word?")
                    );
                    if (modes.indexOf("Familiar") != -1) use_mini = true;
                    else use_mini = false;
                    if (modes.indexOf("Circle") != -1) circl = true;
                    else circl = false;
                    if (modes.indexOf("Strict") != -1) strict = true;
                    else strict = false;
                    if (modes.indexOf("Hard") != -1) hd = true;
                    else hd = false;
                    if (modes.indexOf("Infinity") != -1) infine = true;
                    else infine = false;
                    document.getElementById("easy").checked = use_mini;
                    document.getElementById("circle").checked = circl;
                    document.getElementById("strict").checked = strict;
                    document.getElementById("hard").checked = hd;
                    document.getElementById("infine").checked = infine;
                    saveToCookie();
                  }
                } else {
                  costom = false;
                  history.pushState(null, "", window.location.pathname);
                }
              }
              init();
            } else if (
              text.startsWith(window.location.origin + window.location.pathname)
            ) {
              costom = false;
              history.pushState(null, "", window.location.pathname);
              init();
            } else {
              costom = false;
              history.pushState(null, "", window.location.pathname);
              init();
              const mess = document.getElementById("cant");
              messages.forEach((element) => clearTimeout(element));
              messages = [];
              mess.style.color = "#f77";
              mess.textContent = "Invalid url!";
              mess.style.visibility = "visible";
              mess.style.opacity = "1";
              messages.push(
                setTimeout(() => {
                  mess.style.opacity = "0";
                  messages.push(
                    setTimeout(() => {
                      mess.style.visibility = "hidden";
                    }, 200)
                  );
                }, 1000)
              );
            }
          })
          .catch((err) => {
            console.error("Failed to read clipboard contents: ", err);
          });
      }
    }
  } else if (e.keyCode === 27 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
    event.preventDefault();
    if (document.getElementById("overlay").style.visibility === "visible") {
      document.getElementById("overlay").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("overlay").style.visibility = "hidden";
      }, 200);
    } else if (
      document.getElementById("settinglay").style.visibility === "visible"
    ) {
      document.getElementById("settinglay").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("settinglay").style.visibility = "hidden";
      }, 200);
    }
  } else if (e.keyCode === 9 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
    event.preventDefault();
    if (document.getElementById("settinglay").style.visibility === "visible") {
      if (document.getElementById("input") === document.activeElement) {
        document.getElementById("input").blur();
      } else {
        document.getElementById("input").focus();
        document
          .getElementById("Copy")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  } else if (e.key === " " && !e.ctrlKey && !e.altKey && !e.shiftKey) {
    event.preventDefault();
  } else if (e.key === "Enter" && !e.ctrlKey && !e.altKey && !e.shiftKey) {
    event.preventDefault();
    if (document.getElementById("input") === document.activeElement) {
      document
        .getElementById("Copy")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
      var word = document.getElementById("input").value.toUpperCase();
      var exist = false;
      for (let i = 4; i < 12; i++) {
        if (ext_words[i].includes(word)) {
          exist = true;
          break;
        }
      }
      if (exist)
        copyToClipboard(
          window.location.origin +
            window.location.pathname +
            "?" +
            encode62(word)
        );
      else {
        cpms.forEach((element) => clearTimeout(element));
        cpms = [];
        document.getElementById("cpd2").style.color = "#f77";
        document.getElementById("cpd2").style.left = "34px";
        document.getElementById("cpd2").textContent = "Invalid word!";
        document.getElementById("cpd2").style.opacity = 1;
        cpms.push(
          setTimeout(() => {
            document.getElementById("cpd2").style.opacity = "0";
          }, 1000)
        );
      }
    }
  }
});
