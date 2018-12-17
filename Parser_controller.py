import sys
import firstpass, secondpass, thirdpass, fourthpass




# Running the fistpass script
print('''\tThe goal of the firsspass script is to find and replace any special characters that are 
        used by mac\'s. This script will work for most cases out of the box. There are some situations
        where a character will be used that is not accounted for in this script or its being used in an
        odd manner. If you are still seeing the special character in the firstpassout.txt file, you will
        need to edit the source file manually. Simply open the source file in notepad and find the 
        offending character and delete/replace it. Then save the file and rerun this script.''')
print("Please note: The file name must start with the year, ie. 2017text..txt")
fileIn = input("What is the name of the source file to use? \n>>")
print("Would you like terminal output for the firstpass operation? ")
raw = input("Options: before, after, none (default is none)\n>>")
raw = raw.lower()
if raw == "before" or raw == "after":
    print("Please note: This will only be partial output of the file to see special characters (or not).")
try:
    firstpass.firstFunc(fileIn, raw)
    print("The firstpass script has finished.\n\n\n")
except FileNotFoundError as e:
    print(e)
    print("Possible causes for this error:")
    print("1. File name was not supplied.")
    print("2: File does not exist in the directory. It should be listed in the same folder as the firstpass.py file.")
    print("3: The file name was typed incorrectly")
    print("Please try again.")
    sys.exit()

# Running the secondpass script
leap = input("Is this for a leap year? (type yes or leave blank)\n>>")
leap = leap.lower()
try:
    secondpass.secondFunc(leap)
    print("The secondpass script has finished.\n\n\n")
except Exception as e:
    print("There was an error:")
    print(e)
    sys.exit()

# Running the thirdpass script
try:
    thirdpass.thirdFunc()
    print("The thirdpass script has finished.\n\n\n")
except Exception as e:
    print("There was an error:")
    print(e)
    sys.exit()

# Running the fourthpass script
try:
    year = fileIn[:4]
    fourthpass.fourthFunc(year)
    print("The fourthpass script has finished.\n\n\n")
except Exception as e:
    print("There was an error:")
    print(e)
    sys.exit()
