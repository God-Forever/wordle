import json
import code
import sys
def Read():
    global words,ext_words,mini_words,meaning
    with open(r'..\javascript\wordlist.js', 'r', encoding='utf-8') as file:
        content=file.read()
        words=json.loads(content[6:])
    with open(r'..\javascript\extend_wordlist.js', 'r', encoding='utf-8') as file:
        content=file.read()
        ext_words=json.loads(content[10:])
    with open(r'..\javascript\mini_wordlist.js', 'r', encoding='utf-8') as file:
        content=file.read()
        mini_words=json.loads(content[11:])
    with open(r'..\javascript\word_meanings.js', 'r', encoding='utf-8') as file:
        content=file.read()
        meaning=json.loads(content[8:])
def Add(word,mean=None,ext=True,std=False,mini=False):
    global words,ext_words,mini_words,meaning
    if isinstance(word,list):
        if mean is None:
            for i in word:
                Remove(i,None,ext,std,mini)
        else:
            for i,j in zip(word,mean):
                Remove(i,j,ext,std,mini)
        return
    length=len(word)
    if ext:
        ext_words[str(length)].append(word.upper())
    if std:
        words[str(length)].append(word.upper())
    if mini:
        mini_words[str(length)].append(word.upper())
    if mean is not None:
        meaning[word.upper()]=mean
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
    if isinstance(word,list):
        for i in word:
            Remove(i,mean,ext,std,mini)
        return
    length=len(word)
    if ext:
        try:
            ext_words[str(length)].remove(word.upper())
        except ValueError:
            pass
    if std:
        try:
            words[str(length)].remove(word.upper())
        except ValueError:
            pass
    if mini:
        try:
            mini_words[str(length)].remove(word.upper())
        except ValueError:
            pass
    if mean:
        try:
            del meaning[word.upper()]
        except KeyError:
            pass
def RemoveExt(word):
    Add(word,mean=False,std=False,mini=False)
def RemoveStd(word):
    Add(word,ext=False,mean=False,mini=False)
def RemoveMini(word):
    Add(word,ext=False,std=False,mean=False)
def RemoveMean(word):
    Add(word,ext=False,std=False,mini=False)
def Write():
    with open(r'..\javascript\wordlist.js', 'w', encoding='utf-8') as file:
        file.write("words=")
        json.dump(words,file)
    with open(r'..\javascript\extend_wordlist.js', 'w', encoding='utf-8') as file:
        file.write("ext_words=")
        json.dump(ext_words,file)
    with open(r'..\javascript\mini_wordlist.js', 'w', encoding='utf-8') as file:
        file.write("mini_words=")
        json.dump(mini_words,file)
    with open(r'..\javascript\word_meanings.js', 'w', encoding='utf-8') as file:
        file.write("meaning=")
        json.dump(meaning,file,ensure_ascii=False)
def exit():
    Write()
    sys.exit()
Read()
console=code.InteractiveConsole(locals=globals())
console.interact(banner="""
All methods:

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
    
Type help() to call Python's help utility, and type exit() to write and exit.
""")
   
