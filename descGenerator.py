def descMaker(title, desc, default):
    value_key = title.upper()
    descString = '{\n "id": "' + title + '", \n "name": "' + title + '", \n "description": "' + desc  + '", \n "optional": true, \n "type": "String", \n "value-key": "[' + value_key + ']", \n "command-line-flag": "--' +  title + '", \n "default-value": "' + default  + '"\n}, \n'
    return descString

f = open("helpOutputAnalysis.txt","r")
#clear output file
open('outputAnalysis.txt', 'w').close()
outputs = open("outputAnalysis.txt", "a")

cmdline = ''


text = f.read()

text = text.split("--")
# text = text[29:]

outputs.write("{\n")

for command in text:
    
    testText = command.split('\n')
    firstDesc = testText[0].split("  ")
    title = firstDesc[0].split(" ")[0]
    firstDesc = firstDesc[0].split("  ")

 
    if len(testText) > 2:
        desc =  ' '.join(testText[1:-3])
    else:
        desc =  ''
    desc = desc.replace("  ", "")
    
    defText = ""
    for defn in testText:
        if "default:" in defn:
            defText = "".join(defn)
            defText = defText.replace("  ", "")
            defText = defText[defText.index(":") + 2: defText.index(")")]
        

    description = descMaker(title, desc, defText)
    value_key = title.upper()
    cmdline += '[' + value_key + '] '
    outputs.write(description)
outputs.write('}')
print(cmdline)


