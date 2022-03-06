function switchfct() {
    var lampe = document.getElementById("leteint");
    var contact = document.getElementById("cetein"); 
    var myaudio = document.getElementById("switch");

    if (contact.src.indexOf("image/lampeoff.png")==-1) {
        lampe.src="image/lampeeteint.png";
        contact.src="image/lampeoff.png";
        myaudio.play();

    }
    else {
        lampe.src="image/lampeon.png";
        contact.src="image/lampeallume.png";
        myaudio.play();

    }
}