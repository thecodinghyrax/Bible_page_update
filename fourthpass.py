import json

books_of_the_bible = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation']


with open("thirdpassout.json") as json_file:  
    data = json.load(json_file)


def split_verse(current_line):
    #Lists every day name from the days_of_the_week list
    for book in books_of_the_bible:
        #Tries to match each day name to the first 10 letters of the line
        try:
            if book in current_line[-30:]:
                #split_current_line = current_line.split(book)
                index = current_line.find(book)
                line_text = current_line[:index]
                verse_line = current_line[index:]
                line_list_value = [line_text, verse_line]
                # print(type(line_list_value))
                # print(str(line_list_value))
                
        except TypeError:
            pass  
    return line_list_value


def split_five_entires():
    #Lists every day object
    for day in data["myObj"]:
        #Lists every line for that day
        for line in data["myObj"][day]:
            if data["myObj"][day][line] == 5:
                #Line 1 - changes the text line to a list with text
                line1 = []
                line1.append(data["myObj"][day]["line1"])
                data["myObj"][day]["line1"] = line1
                #line 2 is unchanged

                #Line 3 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line3"] = split_verse(data["myObj"][day]["line3"])
                #Line 4 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line4"] = split_verse(data["myObj"][day]["line4"])
                #Line 5 - changes the text line to a list with text
                line5 = []
                line5.append(data["myObj"][day]["line5"])
                data["myObj"][day]["line5"] = line5

def split_six_entires():
    #Lists every day object
    for day in data["myObj"]:
        #Lists every line for that day
        for line in data["myObj"][day]:
            if data["myObj"][day][line] == 6:
                #Line 1 - changes the text line to a list with text
                line1 = []
                line1.append(data["myObj"][day]["line1"])
                data["myObj"][day]["line1"] = line1
                #Line 2 - changes the text line to a list with text
                line2 = []
                line2.append(data["myObj"][day]["line2"])
                data["myObj"][day]["line2"] = line2
                #line 3 is unchanged

                #Line 4 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line4"] = split_verse(data["myObj"][day]["line4"])
                #Line 5 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line5"] = split_verse(data["myObj"][day]["line5"])
                #Line 6 - changes the text line to a list with text
                line6 = []
                line6.append(data["myObj"][day]["line6"])
                data["myObj"][day]["line6"] = line6



def split_seven_entires():
    #Lists every day object
    for day in data["myObj"]:
        #Lists every line for that day
        for line in data["myObj"][day]:
            if data["myObj"][day][line] == 7:
                #Line 1 - changes the text line to a list with text
                line1 = []
                line1.append(data["myObj"][day]["line1"])
                data["myObj"][day]["line1"] = line1
                #Line 2 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line2"] = data["myObj"][day]["line2"].replace("Watchword for the Week - ", "")
                data["myObj"][day]["line2"] = split_verse(data["myObj"][day]["line2"])
                #Line 3 - changes the text line to a list with text
                line3 = []
                line3.append(data["myObj"][day]["line3"])
                data["myObj"][day]["line3"] = line3
                #line 4 is unchanged

                #Line 5 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line5"] = split_verse(data["myObj"][day]["line5"])
                #Line 6 - looks for verse at end and splits the line to a list
                data["myObj"][day]["line6"] = split_verse(data["myObj"][day]["line6"])
                #Line 7 - changes the text line to a list with text
                line7 = []
                line7.append(data["myObj"][day]["line7"])
                data["myObj"][day]["line7"] = line7

def split_eight_entires():
    #Lists every day object
    for day in data["myObj"]:
        #Lists every line for that day
        for line in data["myObj"][day]:
            if data["myObj"][day][line] == 8:
                #Line 1 - changes the text line to a list with text
                line1 = []
                line1.append(data["myObj"][day]["line1"])
                data["myObj"][day]["line1"] = line1
                #Line 2 - looks for verse at end and splits the line to a list
                line2 = data["myObj"][day]["line2"].split(" - ")
                verseList = split_verse(line2[1])
                line2[1] = verseList[0]
                line2.append(verseList[1])
                print("Verse list is : %s" % verseList)
                print("line2 is : %s" % line2)
                print(type(verseList))
              
                data["myObj"][day]["line2"] = line2
                # data["myObj"][day]["line2"] = list(line2[0]) + verseList
                #Line 3 - changes the text line to a list with text
                # line3 = []
                # line3.append(data["myObj"][day]["line3"])
                # data["myObj"][day]["line3"] = line3
                # #line 4 is unchanged

                # #Line 5 - looks for verse at end and splits the line to a list
                # data["myObj"][day]["line5"] = split_verse(data["myObj"][day]["line5"])
                # #Line 6 - looks for verse at end and splits the line to a list
                # data["myObj"][day]["line6"] = split_verse(data["myObj"][day]["line6"])
                # #Line 7 - changes the text line to a list with text
                # line7 = []
                # line7.append(data["myObj"][day]["line7"])
                # data["myObj"][day]["line7"] = line7

split_five_entires()
split_six_entires()
split_seven_entires()
split_eight_entires()
print("Fourthpass is complete")
with open("final2017.json", 'w') as json_out:  
    json.dump(data, json_out)