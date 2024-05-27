def descMaker(title, desc, default):
    value_key = title.capitalize()
    descString = '{ "id": ' + title 
    + ', \n "name": ' + title + ', \n "description": ' + desc 
    + ', \n "optional": true, \n "type": "String", \n "value_key": ' + value_key + 
    ', \n "command-line-flag": --' +  title + ', \n "default-value": ' + default  
     + '}'
    return descString

f = open("helpOutput.txt","r")



#print(f.read())

text = f.read()

text = text.split("--")
text = text[29:]

print(text)