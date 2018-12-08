from sys import argv

#Run this file on the origonal text document first before any other python files are ran!!!!

#This script will read in the file that is listed when ran (fileIn) and output a texptext.txt file with 
#all the non-Windows formatting characters removed/replaced.

#This allows you to run the script with the Script name <space> source file
script, fileIn, = argv

with open(fileIn, 'r', encoding="ascii", errors="surrogateescape") as f:
    data = f.read()

    #If a new goofy character is found, run this script on the file and look in the terminal output
    #for something like "\udce2". Then go to the text for that day and try to understand what the 
    #character was supposed to represent and add that "replace" code like below. 
    data = data.replace('\udce2\udc80\udc94', "-")
    data = data.replace('\udce2\udc80\udc93', "-")
    data = data.replace('\udce2\udc80\udc9c', '"')
    data = data.replace('\udce2\udc80\udc9d', '"')
    data = data.replace('\udce2\udc80\udc99', "\'")
    data = data.replace('\udcc2\udca0', ' ')
    data = data.replace('\udce2\udc80\udca8', ' ')
    data = data.replace('\udce2\udc80\udca0', '')
    data = data.replace('\udce2\udc80\udc98', "\'")
    data = data.replace('\"', '\\"')
   
    #Remove the next two when done - This allows you to search the output text for "\" and find 
    #the offending markings
    # data = data.replace('\n', '')
    # data = data.replace("\'", '')

    #Prints the "raw" data to the terminal output so you can look through it and find the marks that 
    #don't fit.
    print(repr(data))

with open('firstpassout.txt', 'w', encoding="ascii", errors="surrogateescape") as f:
    f.write(data)
