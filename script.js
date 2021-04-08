const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString);

const uname = urlParams.get('name')
name_ele = document.getElementById("uname")
name_ele.innerHTML = uname

const utext = urlParams.get('text')
text_ele = document.getElementById("utext")
text_ele.innerHTML = utext

const utype = urlParams.get('card')
type_ele = document.getElementById("utype")
// let cnt = None

const wishes = [
    'I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.',
    'Wishing you all the great things in life, hope this day will bring you an extra share of all that makes you happiest.',
    'They say you lose your memory as you grow older. I say forget about the past and live life to the fullest today. Start with cake. Happy birthday.',
    'On your special day, I wish you good luck. I hope this wonderful day will fill up your heart with joy and blessings.',
    'To someone who touches each life you enter, spreading joy to everyone you meet: may the love and happiness you share with others return to you tenfold. I wish you many more happiest of birthdays!'
]
const random = Math.floor(Math.random() * wishes.length);

if (utype === '1'){
    if (utext == null || utext == ""){
                text_ele.innerHTML = wishes[random]
    }
    
    cnt = `<img style="width:100%" src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"  alt="Birthday image">`
    // cnt = `<img style="width:100%" src="https://image.freepik.com/free-vector/surprise-theme-happy-birthday-card-illustration_1344-199.jpg"  alt="Birthday image">`
}
type_ele.innerHTML = cnt
