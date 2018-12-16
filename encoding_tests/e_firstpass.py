import codecs


with codecs.open("2017text.txt", "r", encoding="utf-8") as f:
    data = f.read()

with open("e_firstpassout.txt", 'w', encoding='utf-8') as d:
    d.write(data)

# >>> print type(text)
# <type 'unicode'>
# >>> print text.encode('utf-8')
# I don‘t like this

# >>> import codecs
# >>> f1 = codecs.open(file1, "r", "utf-8")
# >>> text = f1.read()
# >>> print type(text)
# <type 'unicode'>
# >>> print text.encode('utf-8')
# I don‘t like this