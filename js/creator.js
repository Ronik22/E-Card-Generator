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

    if (ctype == "1"){

        const bday = [
            'https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png',
            'https://image.freepik.com/free-vector/surprise-theme-happy-birthday-card-illustration_1344-199.jpg',
        ]

        for(a=0; a < bday.length; ++a){
        chosen += `
            <div class="col">
                <div class="card h-100">
                    <img src="${bday[a]}" class="card-img-top" alt="card">
                    <div class="card-body">
                        <h4>Card ${a}</h4><br>
                        <a onclick="selectCard(${a})" class="btn btn-warning" >Select this</a>
                    </div>
                </div>
            </div> `
        }
        frame.innerHTML = chosen
    }
}

function selectCard(no){
    const templ = no
    const cname = document.getElementById("cname").value
    const ctext = document.getElementById("ctext").value
    const ctype = document.getElementById("ctype").value
    const res = document.getElementById("resultlink")

    const enc_cname = encodeURI(window.btoa(cname))
    const enc_ctext = encodeURI(window.btoa(ctext))

    temp = window.location.origin + `/template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}&templ=${templ}`    // for local
    // temp = window.location.href + `template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}&templ=${templ}`    // for github
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