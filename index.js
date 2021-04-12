var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function butonGoster(kontrol) {
    var x = document.getElementById("start-button");
    console.log(kontrol)
   	if(kontrol == 1)
        x.style.display = "inline-block";
    else
    	x.style.display = "none";
    
}

//gerekli verilerin alinmasi
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //bir global degisken

button.onclick = () => {
    input.click(); //butona tiklandiginda inputa tiklanmis olacak
}

input.addEventListener("change", function () {
    //dosya secme islemi yapiliyor
    file = this.files[0];
    dropArea.classList.add("active");
    butonGoster(1);
    showFile(); //fonksiyon cagiriliyor
});


//kullanici dosya ile surukle birak alani icinde ise
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //buton kullanimini engelliyor
    dropArea.classList.add("active"); //border kesikli cizgi olmaktan cikiyor
    dragText.textContent = "Bırak";
});

//kullanici surukle biraktan ayrilirsa
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Sürükle Bırak";
});

//kullanici dosyayi surukle birak alanina birakirsa
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //buton kullanimini engelliyor
    //yuklenen dosyalardan sadece 0. indisi seciyoruz.
    file = event.dataTransfer.files[0];
    butonGoster(1);
    showFile(); //fonksiyon cagiriliyor
});

function showFile() {
    let fileType = file.type; //yuklenen dosya tipi aliniyor
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) { //kullanici bir gorsel secti ise
        let fileReader = new FileReader(); //filereadin objesi olusturuluyor
        fileReader.onload = () => {
            let fileURL = fileReader.result; //fileUrl degiskenine yuklenen dosya kaynagi atanýyor.
            let imgTag = `<img src="${fileURL}" alt="">`; //bir img tagi olusuturuluyor ve src ozelligine secilen dosya kaynagi atanýyor.
            dropArea.innerHTML = imgTag; //olusturulan img tagi surukle birak alanýna ekleniyor.
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Seçtiğiniz görsel resim değil!");
        butonGoster(0);
        dropArea.classList.remove("active");
        dragText.textContent = "Sürükle Bırak";
    }
}
