"use strict";
/*
 * Här bör du skapa en variabel som kan hålla 
 * reda på textnoden till paragrafen du håller 
 * på att skriva till
 */
 var currentText = null;
 
/*
 * Du bör också ha en variabel som håller reda på
 * hur många paragrafer du har satt ut, så att du
 * kan märka upp dem med klasserna even/odd
 */
var numParagraphs = 0;

/* 
 * Den här funktionen anropas då man trycker på en 
 * av knapparna med en bokstav, punkt, 
 * kommatecken eller mellanslag.
 *
 * Funktionsparametrar:
 * c - Variabel som innehåller ett tecken
 */
function addLetter(c)
{
	//Detta ska tas bort innan inlämning
	alert("Pressed letter: '"+c+"'");

	/*
	 * Här bör du kolla om din globala textnodsvariabel har ett värde,
	 * om den är null så anropar du addParagraph
	 */
	 if(currentText==null)
		 addParagraph();

	/*
	 * Här bör du lägga in tecknet c till den sparade textnoden
	 */
	 currentText.appendData(c);
}

/*
 * Den här funktionen anroas då man trycker
 * på Enter knappen
 */
function addParagraph() 
{
	//Detta ska tas bort innan inlämning
	alert("Add new paragraph");

	/*
	 * Här skapar du en ny paragraf med tillhörande textnod. 
	 * Textnoden sparar du undan till din globala textnodsvariabel.
	 */
	 var newParagraph = document.createElement("P");
	 currentText = document.createTextNode("");
	 newParagraph.appendChild(currentText);

	/*
	 * Sedan så lägger du till paragrafen till DOM trädet till 
	 * div-taggen som har id:t "output"
	 */
	 document.getElementById("output").appendChild(newParagraph);

	/*
	 * Du måste också märka upp paragrafen med klassen even/odd beroende
	 * på vad den föregående paragrafen märktes upp som
	 * (om detta är den första paragrafen så spelar det ingen roll
	 * vilken av even/odd som väljs)
	 */
	 newParagraph.className = ((numParagraphs++ & 1) == 1)?"odd":" even";
}

/*
 * Den här funktionen anropas när man trycker på länken "Räkna bokstäver".
 */
function countLetters()
{
	var count=0;

	/*
	 * Här räknar du antalet bokstäver (a-z) som finns 
	 * i den nuvarande paragrafen (dvs i din globala textnod).
	 * Antalet bokstäver sparar du till variabeln 'count'.
	 */
	 for (var i = currentText.data.length - 1; i >= 0; i--) {
	 	if(currentText.data[i].toLowerCase() != currentText.data[i].toUpperCase())
	 		count++;
	 }

	/*
	 * Sen avslutar vi med att returnera count variabeln
	 */
	return count;
}
