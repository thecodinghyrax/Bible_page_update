from os import remove

#Run this file second only after the firstpass.py file is ran!!!!

fI = open("firstpassout.txt", "r")
fO = open("secondpassout.json", "w")

day = 1
total_lines_for_this_day = 1
currentLine = "Place holder"
#setup the json file
fO.write('{\n"dayText" : {\n"1" : {\n')

def create_json_entry():
    global day
    global total_lines_for_this_day
    global currentLine
    currentLine = fI.readline()
    
    
    #print("From create_json_entry: currentLine is %r" %currentLine)
    if (currentLine == "\n"):
        # print("I found a new line. Passing")
        pass
    elif (currentLine == ""):
        day = (day + 100)#just to make it break
    else:
        currentLine = currentLine.rstrip()
        # print(currentLine[-5:])
        # print("The currentLine var is = {}" .format(currentLine))
        if (currentLine[-5:] == "Amen." or currentLine[-7:] == "Burial)" or currentLine[-5:] == "Amen!"):
            fO.write('"line')
            fO.write(str(total_lines_for_this_day))
            fO.write('" ' + ': "'  + currentLine + '", \n')
            fO.write('"line_count')
            fO.write('"' + ': ')
            #print("Total lines for the day = %s" %total_lines_for_this_day)
            fO.write('%d' % total_lines_for_this_day)
            fO.write(' \n')
            total_lines_for_this_day = 1
            # Writes the day counter and the Json : { characters
            day = (day + 1)
            if (day <= 365):
                fO.write('}, \n"' + str(day) + '" : { \n')
            total_lines_for_this_day = 1
        else:
            currentLine = currentLine.rstrip()
            fO.write('"line')
            fO.write(str(total_lines_for_this_day))
            #currentLine = currentLine.rstrip()
            fO.write('" ' + ': "' + currentLine + '", \n')
            total_lines_for_this_day += 1
    # else:
    #     day = (day +100) #just to make it break


while (day < 366):
    create_json_entry()
# while (currentLine != ""):
#     create_json_entry()
#Finish up Json file
fO.write(' }\n}\n}')
fI.close()
fO.close()
