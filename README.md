# Serverless E-Card-Generator

Generate E-Cards (Birthday wish, Anniversary, Thank you cards, etc) and send them to your loved ones with a Shared Link or a QR code.

<p><a href="https://ronik22.github.io/E-Card-Generator/" target="_blank">Click here to Generate a Card</a></p>

## How to use?

1. Enter name of the person to whom you want to send the card
2. Provide the text you want to write on the card
3. Click `See templates` and select a template
4. On selecting, a link and a QR code will be generated
5. Share the link or the QR code

## Add New Card Cover Images:

1. Add new image into the folder of your choice inside `res` folder. You can also make a new folder.
2. Follow the numeric order and also name your image after a number. Then add the path to `path.js` file. In here, `cardPicPaths` is in JSON format.

**Example 1:** Adding an image named `2.png` under `anniversary` folder looks like this

        ...
        "anniversary": {
            "img":{
                "1": "../res/anniversary/1.png",
                "2": "../res/anniversary/2.png"
            },
            "title":"Happy Anniversary"
        },
        ...

**Example 2:** 

        ...
        ,
        "your_new_folder_name": {
            "img":{
                "1": "../res/your_new_folder_name/1.png"
            },
            "title":"your_new_title_for_card"
        }
