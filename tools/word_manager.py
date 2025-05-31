import json
import code
import sys
def Read():
    global words,ext_words,mini_words,meaning
    try:
        with open(r'..\javascript\wordlist.js', 'r', encoding='utf-8') as file:
            content=file.read()
            words=json.loads(content[6:])
            print("[Info] Read wordlist.js to words!")
    except:
        print("[Error] Failed to read wordlist.js to words!")
    try:
        with open(r'..\javascript\extend_wordlist.js', 'r', encoding='utf-8') as file:
            content=file.read()
            ext_words=json.loads(content[10:])
            print("[Info] Read extend_wordlist.js to ext_words!")
    except:
        print("[Error] Failed to read extend_wordlist.js to ext_words!")
    try:
        with open(r'..\javascript\mini_wordlist.js', 'r', encoding='utf-8') as file:
            content=file.read()
            mini_words=json.loads(content[11:])
            print("[Info] Read mini_wordlist.js to mini_words!")
    except:
        print("[Error] Failed to read mini_wordlist.js to mini_words!")
    try:
        with open(r'..\javascript\word_meanings.js', 'r', encoding='utf-8') as file:
            content=file.read()
            meaning=json.loads(content[8:])
            print("[Info] Read word_meanings.js to meaning!")
    except:
        print("[Error] Failed to read word_meanings.js to meaning!")

def Add(word,mean=None,ext=True,std=False,mini=False):
    global words,ext_words,mini_words,meaning
    try:
        if isinstance(word,list):
            try:
                if mean is None:
                    for i in word:
                        Remove(i,None,ext,std,mini)
                else:
                    for i,j in zip(word,mean):
                        Remove(i,j,ext,std,mini)
                return
            except:
                print("[Error] Failed to analysis the list!")
        length=len(word)
        if ext:
            try:
                ext_words[str(length)].append(word.upper())
                print(f"[Info] Added word {word.upper()} to ext_words!")
            except:
                print(f"[Error] Failed to add word {word.upper()} to ext_words!")
        if std:
            try:
                words[str(length)].append(word.upper())
                print(f"[Info] Added word {word.upper()} to words!")
            except:
                print(f"[Error] Failed to add word {word.upper()} to words!")
        if mini:
            try:
                mini_words[str(length)].append(word.upper())
                print(f"[Info] Added word {word.upper()} to mini_words!")
            except:
                print(f"[Error] Failed to add word {word.upper()} to mini_words!")
        if mean is not None:
            try:
                meaning[word.upper()]=mean
                print(f"[Info] Set meaning \"{mean if len(mean)<=15 else mean[:12]+'...'}\" of word {word.upper()}!")
            except:
                print(f"[Error] Failed to set meaning \"{mean if len(mean)<=15 else mean[:12]+'...'}\" of word {word.upper()}!")
    except:
        print("[Error] Failed to add word due to an unknown reason!")
def AddExt(word,mean=None):
    Add(word,mean)
def AddStd(word,mean=None):
    Add(word,mean,std=True)
def AddMini(word,mean=None):
    Add(word,mean,std=True,mini=True)
def AddMean(word,mean):
    Add(word,mean,ext=False)
def Remove(word,mean=True,ext=True,std=True,mini=True):
    global words,ext_words,mini_words,meaning
    try:
        if isinstance(word,list):
            try:
                for i in word:
                    Remove(i,mean,ext,std,mini)
                return
            except:
                print("[Error] Failed to analysis the list!")
        length=len(word)
        if ext:
            try:
                ext_words[str(length)].remove(word.upper())
                print(f"[Info] Romoved word {word.upper()} from ext_words!")
            except ValueError:
                print(f"[Warn] Word {word.upper()} does not exist in ext_words!")
            except:
                print(f"[Error] Failed to remove word {word.upper()} to mini_words!")
        if std:
            try:
                words[str(length)].remove(word.upper())
                print(f"[Info] Romoved word {word.upper()} from words!")
            except ValueError:
                print(f"[Warn] Word {word.upper()} does not exist in words!")
            except:
                print(f"[Error] Failed to remove word {word.upper()} to mini_words!")
        if mini:
            try:
                mini_words[str(length)].remove(word.upper())
                print(f"[Info] Romoved word {word.upper()} from mini_words!")
            except ValueError:
                print(f"[Warn] Word {word.upper()} does not exist in mini_words!")
            except:
                print(f"[Error] Failed to remove word {word.upper()} to mini_words!")
        if mean:
            try:
                mn=meaning[word.upper()]
                del meaning[word.upper()]
                print(f"[Info] Romoved meaning \"{mn if len(mn)<=15 else mn[:12]+'...'}\" of word {word.upper()}!")
            except KeyError:
                print(f"[Warn] Word {word.upper()} does not have a meaning!")
            except:
                print(f"[Error] Failed to romove meaning \"{mn if len(mn)<=15 else mn[:12]+'...'}\" of word {word.upper()}!")
    except:
        print("[Error] Failed to remove word due to an unknown reason!")
def RemoveExt(word):
    Add(word,mean=False,std=False,mini=False)
def RemoveStd(word):
    Add(word,ext=False,mean=False,mini=False)
def RemoveMini(word):
    Add(word,ext=False,std=False,mean=False)
def RemoveMean(word):
    Add(word,ext=False,std=False,mini=False)
def Write():
    try:
        with open(r'..\javascript\wordlist.js', 'w', encoding='utf-8') as file:
            file.write("words=")
            json.dump(words,file)
            print("[Info] Writed words to wordlist.js!")
    except:
        print("[Error] Failed to write words to wordlist.js!")
    try:
        with open(r'..\javascript\extend_wordlist.js', 'w', encoding='utf-8') as file:
            file.write("ext_words=")
            json.dump(ext_words,file)
            print("[Info] Writed ext_words to extend_wordlist.js!")
    except:
        print("[Error] Failed to write ext_words to extend_wordlist.js!")
    try:
        with open(r'..\javascript\mini_wordlist.js', 'w', encoding='utf-8') as file:
            file.write("mini_words=")
            json.dump(mini_words,file)
            print("[Info] Writed mini_words to mini_wordlist.js!")
    except:
        print("[Error] Failed to write mini_words to mini_wordlist.js!")
    try:
        with open(r'..\javascript\word_meanings.js', 'w', encoding='utf-8') as file:
            file.write("meaning=")
            json.dump(meaning,file,ensure_ascii=False)
            print("[Info] Writed meaning to word_meanings.js!")
    except:
        print("[Error] Failed to write meaning to word_meanings.js!")
def exit():
    Write()
    sys.exit()
Read()
methods={"Read":Read,"Add":Add,"AddExt":AddExt,"AddStd":AddStd,"AddMini":AddMini,"AddMean":AddMean,"Remove":Remove,
         "RemoveExt":RemoveExt,"RemoveStd":RemoveStd,"RemoveMini":RemoveMini,"RemoveMean":RemoveMean,"Write":Write,"exit":exit,
         "words":words,"ext_words":ext_words,"mini_words":mini_words,"meaning":meaning}
console=code.InteractiveConsole(locals=methods)
console.interact(banner="""
Methods:

    Read(),
    Add(word,mean=None,ext=True,std=False,mini=False),
    AddExt(word,mean=None),
    AddStd(word,mean=None),
    AddMini(word,mean=None),
    AddMean(word,mean),
    Remove(word,mean=True,ext=True,std=True,mini=True),
    RemoveExt(word),
    RemoveStd(word),
    RemoveMini(word),
    RemoveMean(word),
    Write()

Variables:
    words,
    ext_words,
    mini_words,
    meaning
                 
Type exit() to write and exit.
""")
   
