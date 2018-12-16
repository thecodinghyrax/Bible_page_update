from kivy.app import App
#kivy.require("1.10.1")

from kivy.uix.label import Label

class SimpleKivy(App):
    def build(self):
        return Label(text="Hello World!")

if __name__ == "__main__":
    SimpleKivy().run()

# This is going to need more research. There seems to be several requirments and they have changed 
# over the years. I haven't gotten this to work yet. 