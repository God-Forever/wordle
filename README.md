# Wordle

### How to play wordle?

**Here are some basic rules of wordle:**

- You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.
- To start the game,  just enter any exist English word, then you'll get the feedback:
  - **Green** - A green letter means it is in the word and in the correct spot;
  - **Yellow** - A yellow letter means it is in the word but in the wrong spot; 
  - **Gray** - A gray letter means it is not in the target word at all.
- You will win if you succeed to get the answer in 6 tries, otherwise you will lose.

---

### How to start the game?

**There are 2 ways to start the game:**

1. **Play online** - Visit [Wordle (god-forever.github.io/wordle)](https://god-forever.github.io/wordle/ ) to play;

2. **Download the resources** - Download this repository, then you can start the game by open `index.html`.

---

### About our wordle game!

Our game features a simple and beautiful UI, convenient operation, and rich extended gameplay. **Here is an introduction to our game:**

- **Wordlist**

​	Determine whether the user input is a word using a wordlist containing 917270 (valid) words.

​	The answer in standard mode will be selected from a wordlist containing 86876 (valid) words.

- **Tiles**

  Words you input will be shown in the tiles. After you press the key `Enter`, tiles in the current line will be colored to reflect the accuracy of each letter.

- **Keyboard**

  We provide a virtual keyboard on the web UI. But also, you can use a physical keyboard to input words. 
  
  After you submit a word, the virtual keyboard will also be colored so that you can get hints about a certain letter.
  
- **Buttons**

  There are 3 buttons on the main interface, which are:
  
  - **Show answer (Answer)** - Show the answer to current round of the game, and if the game is not over yet, you will automatically lose;
  - **Replay** - Replay the game and reset the answer;
  - **Setting** - Set the length of the word, change the game mode and generate the game with custom word.

- **Answer**

  Click Answer or use the shortcut key `Ctrl+A` on the main interface to bring up the answer menu. The answer menu includes 2 parts, one shows you what the target word is, the other shows you what it mean in Chinese. 

  At the bottom of the menu, there are 2 buttons, one allows you to share the current word by copy a link (Shortcut key: `Ctrl+S`), another allows you to restart the game (Shortcut key: `Ctrl+R`. `Ctrl+R` on the main interface also leads to restart).

- **Setting**

  **Number of Letters** on the top allows you to change the length of the word (From 4 to 11) by click on the corresponding number. Also, press the corresponding number key can also realize this effect (The key `A` corresponding 10, and the key `B` corresponding 11).

  **Custom Word** at the bottom allows you to generate a link of a custom game with a custom answer. You should just input a word and click **Copy Link** (Shortcut key: `Enter` , only when the input box is focused) , then you can share the link to your friends to challenge them. You can also just input the word in front of your friends, which needs you to change the visibility of the input text (Shortcut key: `Ctrl+S` , only when the input box is focused) . You can press `Tab` to focus or unfocus the input box.

  The other options are various game modes, which you can also turn on or off by using the shortcut key `ctrl+<the first letter of the mode name>`. Here is their introductions:

  - **Familiar Mode** - The answer will be selected from a smaller wordlist of "The top 10000 words", which actually contains 6053 (valid) words. This mode will leads to an easier game;

  - **Circle Mode** - In this mode, the first try of each game will be filled with the answer from the previous game with the same word length;

  - **Strict Mode** - Players are required to input words that match all known information. For words that do not meet the requirements, they will not be accepted and feedbacks about first unmatched informations will be given to the player;

  - **Hard Mode** - In standard games, each color will be displayed in its corresponding position. However, in this mode, colors will not be displayed in their positions, but count of each color will be given at the end of each line. 

    Unusually, due to the different ways in presenting informations in Hard Mode, there will be special feedbacks in Strict Mode when Hard Mode is on.

    When Hard Mode is on, the length of the word will be limited to from 4 to 8;

  - **Infinity Mode** - You can have unlimited tries without losing. You can turn on this mode if the other modes you have turned on may be too difficult to succeed within six tries.

- **Load the share link**

  Directly visit the link obtained by clicking on **Share** or **Copy Link** will start a game with an answer depends on the link. Also, you can press `Ctrl+V` to load the share link without reload the page.

- **Annotation**

  You can mark by colors on the virtual keyboard by right clicking (Or long press on the mobile devices). You can also annotate on the submitted tiles if the **Hard Mode** is on.

---

### What you can do?

**All code in this repository is written by [God-Forever](https://github.com/God-Forever) (Also [God Forever](https://gitee.com/GodForever) on Gitee)**, and wordlists, icons and fonts in this repository are sourced from online resources. You **have** the allowence to:

- Play online;
- Download the resources to play offline;
- Based on obtaining consent, borrow some content and indicate the source.

You **have no** allowence to:

- Directly copy or plagiarize this repository;
- Copy code from the repository without permission for purposes other than playing.
