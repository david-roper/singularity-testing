def descMaker(title, desc, default):
    value_key = title.upper()
    descString = '{ "id": ' + title + ', \n "name": ' + title + ', \n "description": ' + desc  + ', \n "optional": true, \n "type": "String", \n "value_key": [' + value_key + '], \n "command-line-flag": --' +  title + ', \n "default-value": ' + default  + '\n}, \n'
    return descString

f = open("helpOutput.txt","r")
open('output.txt', 'w').close()
outputs = open("output.txt", "a")


#print(f.read())

text = f.read()

text = text.split("--")
text = text[29:]

outputs.write("{\n")

for command in text:
    
    testText = command.split('\n')
    firstDesc = testText[0].split("  ")
    title = firstDesc[0].split(" ")[0]
    firstDesc = firstDesc[0].split("  ")

    print(testText[0:-1])
    print(len(testText))
    if len(testText) > 2:
        desc =  ' '.join(testText[1:-3])
    else:
        desc =  ' '.join(testText[0])
    desc = desc.replace("  ", "")
    
    defText = ""
    for defn in testText:
        if "default:" in defn:
            defText = "".join(defn)
            defText = defText.replace("  ", "")
            defText = defText[defText.index(":") + 1: defText.index(")")]
        

    description = descMaker(title, desc, defText)
    outputs.write(description)
outputs.write('}')


