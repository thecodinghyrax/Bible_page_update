import json

#Run this file third after firstpass.py and secondpass.py has been ran!!!

#sourceFile should = ft2017.json

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

with open("secondpassout.json") as json_file:  
    data = json.load(json_file)

#Finds lines that start with a day 
list_of_days = []
#Lists every day object
for day in data["myObj"]:
    #Lists every line in the day object
    for line in data["myObj"][day]:
        #Lists every day name from the days_of_the_week list
        for day_name in days_of_the_week:
            #Tries to match each day name to the first 10 letters of the line
            try:
                if day_name in data["myObj"][day][line][:10]:
                    split_line = data["myObj"][day][line]
                    split_line = split_line.split(' - ')

                    print ("The first split_line is")
                    print(str(split_line))

                    data["myObj"][day][line] = split_line.pop(0)
                    split_line = split_line[0].split("; ")

                    print("Splitline is ")
                    print(str(split_line))

                    line_number = int(line[-1]) + 1
                    next_line_number = line[:4] + str(line_number)
                    next_line = data["myObj"][day][next_line_number]
                    next_line = next_line.split("; ")
                    next_line = split_line + next_line
                    data["myObj"][day][next_line_number] = next_line

                    # print(data["myObj"][day][line])
                    # print(data["myObj"][day][next_line_number])

                    
            except TypeError:
                pass

with open("thirdpassout.json", 'w') as json_out:  
    json.dump(data, json_out)
