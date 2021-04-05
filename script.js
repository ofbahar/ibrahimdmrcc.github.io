

function hide(){

	const image = document.querySelector('img');
	if(image.style.display == 'none'){
		image.style.display = 'block'
	}else{

		image.style.display = 'none';
	}

}

function change() 
{
    var elem = document.getElementById("textDiv");
    if (elem.innerHTML =="Resim Yüklendi") elem.innerHTML = "Resim Yüklenmedi";
    else elem.innerHTML = "Resim Yüklendi";
}

const button = document.querySelector('button');
button.addEventListener('click',onClick);


