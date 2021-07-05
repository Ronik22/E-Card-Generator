const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cardDATA = JSON.parse(cardPicPaths);
const innerTitle = document.getElementById("chead")
const name_ele = document.getElementById("uname")
const text_ele = document.getElementById("utext")
const type_ele = document.getElementById("utype")

const uname = decodeURI(window.atob(urlParams.get('name'))); 
const utext = decodeURI(window.atob(urlParams.get('text')));
const utype = urlParams.get('card')
const utempl = urlParams.get('templ')

const clist = Object.values(cardDATA[utype]["img"])
const getInnerTitle = cardDATA[utype]["title"]
name_ele.innerHTML = uname


innerTitle.innerText = getInnerTitle
text_ele.innerHTML = utext
const cnt = `<img style="width:100%" src="${clist[utempl]}"  alt="${getInnerTitle}">`

type_ele.innerHTML = cnt
