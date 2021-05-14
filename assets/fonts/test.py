
import os

for root, dirs, files in os.walk("."):
    for filename in files:
        filename = filename[:-4]
        if (' ' in filename ==True):
            filename = filename[:filename[filename.find(" ")]] + "_" + filename[:filename[filename.find(" ")+1]]
            print("ahla")
        print(f'export const {filename} = require("../assets/icons/{filename}.png");')
