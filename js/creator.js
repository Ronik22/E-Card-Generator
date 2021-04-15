document.getElementById("copybtn").addEventListener("click", 
    function(event){
        const t = document.getElementById("resultlink")
        t.select()
        document.execCommand("copy");
        alert("URL copied");
    });


function genCards(){
    const ctype = document.getElementById("ctype").value
    let chosen = ``
    const frame = document.getElementsByClassName("gen-card")[0]

    let clist = []

    if (ctype == "1"){
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
    }
    else if (ctype == "6"){
        clist = [
            './res/thankyou/1.png',
            './res/thankyou/2.png',
            './res/thankyou/3.png',
            './res/thankyou/4.png',
            './res/thankyou/5.png',
        ]
    }
    else if (ctype == "7"){
        clist = [
            './res/anniversary/1.png',
            './res/anniversary/2.png',
            './res/anniversary/3.png',
        ]
    }

    for(a=0; a < clist.length; ++a){
        chosen += `
            <div class="col">
                <div class="card h-100">
                    <img src="${clist[a]}" class="card-img-top" alt="card">
                    <div class="card-body">
                        <h4>Card ${a}</h4><br>
                        <a onclick="selectCard(${a})" class="btn btn-warning" >Select this</a>
                    </div>
                </div>
            </div> `
    }
    frame.innerHTML = chosen
}

function selectCard(no){
    const templ = no
    const cname = document.getElementById("cname").value
    const ctext = document.getElementById("ctext").value
    const ctype = document.getElementById("ctype").value
    const res = document.getElementById("resultlink")

    const enc_cname = encodeURI(window.btoa(cname))
    const enc_ctext = encodeURI(window.btoa(ctext))

    // temp = window.location.origin + `/template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}&templ=${templ}`    // for local
    temp = window.location.href + `template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}&templ=${templ}`    // for github
    res.value = temp
    

    // Generate QR code

    var qr = new QRious({
        level: 'M',
        padding: 25,
        size: 320,
        element: document.getElementById('qr'),
        value: temp
    });

    document.getElementById("msg").innerText = `Card ${templ} is Selected. Send the link or the QR Code to the person`
}



// const bdaywishes = [
//     'I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.',
//     'Wishing you all the great things in life, hope this day will bring you an extra share of all that makes you happiest.',
//     'They say you lose your memory as you grow older. I say forget about the past and live life to the fullest today. Start with cake. Happy birthday.',
//     'On your special day, I wish you good luck. I hope this wonderful day will fill up your heart with joy and blessings.',
//     'To someone who touches each life you enter, spreading joy to everyone you meet: may the love and happiness you share with others return to you tenfold. I wish you many more happiest of birthdays!'
// ]
// const random = Math.floor(Math.random() * bdaywishes.length);