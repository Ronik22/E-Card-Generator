const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const uname = decodeURI(window.atob(urlParams.get('name'))); 
name_ele = document.getElementById("uname")
name_ele.innerHTML = uname

const utext = decodeURI(window.atob(urlParams.get('text')));
text_ele = document.getElementById("utext")

const utype = urlParams.get('card')
type_ele = document.getElementById("utype")

const utempl = urlParams.get('templ')


if (utype === '1'){
    document.getElementsByClassName("chead")[0].innerText = "Happy Birthday"

    clist = [
        './res/birthday/1.png',
        './res/birthday/2.png',
        './res/birthday/3.png',
        './res/birthday/4.png',
        './res/birthday/5.png',
        './res/birthday/6.png',
        './res/birthday/7.png',
        './res/birthday/8.png',
        './res/birthday/9.png',
    ]

    text_ele.innerHTML = utext
    cnt = `<img style="width:100%" src="${clist[utempl]}"  alt="Birthday image">`
}

if (utype === '6'){
    document.getElementsByClassName("chead")[0].innerText = "Thank You"

    clist = [
        './res/thankyou/1.png',
        './res/thankyou/2.png',
        './res/thankyou/3.png',
        './res/thankyou/4.png',
        './res/thankyou/5.png',
    ]

    text_ele.innerHTML = utext
    cnt = `<img style="width:100%" src="${clist[utempl]}"  alt="Thank You">`
}

if (utype === '7'){
    document.getElementsByClassName("chead")[0].innerText = "Happy Anniversary"

    clist = [
        './res/anniversary/1.png',
        './res/anniversary/2.png',
        './res/anniversary/3.png',
    ]

    text_ele.innerHTML = utext
    cnt = `<img style="width:100%" src="${clist[utempl]}"  alt="Anniversary">`
}


type_ele.innerHTML = cnt
