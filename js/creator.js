document.getElementById("myform").addEventListener("submit", 
    function(event){
        event.preventDefault();
        const cname = document.getElementById("cname").value
        const ctext = document.getElementById("ctext").value
        const ctype = document.getElementById("ctype").value
        const res = document.getElementById("resultlink")

        const enc_cname = encodeURI(window.btoa(cname))
        const enc_ctext = encodeURI(window.btoa(ctext))

        temp = window.location.origin + `/template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}`
            // temp = window.location.href + `template1.html?card=${ctype}&name=${enc_cname}&text=${enc_ctext}`
        res.value = temp
        

        // Generate QR code

        var qr = new QRious({
            level: 'M',
            padding: 25,
            size: 320,
            element: document.getElementById('qr'),
            value: temp
        });
    });

document.getElementById("copybtn").addEventListener("click", 
    function(event){
        const t = document.getElementById("resultlink")
        t.select()
        document.execCommand("copy");
        alert("URL copied");
    });