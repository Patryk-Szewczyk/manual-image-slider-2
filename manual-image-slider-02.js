// Image slider #2 | Auto ID node maker & Auto image group width maker & "Infinity" moves (- without if/else statement) 

const image_Group_Box = document.getElementById("imgGroup");
    

// Informacja o całkowitej liczbie znaczników <img />, z poniższą kalsąL
alert('Image slider has: ' + document.querySelectorAll('img.imageSlider-content-imgOverblock-imgGroup-image-proper').length + ' images.');



let image_Group_Box_Width;   // Musiałem wyjąć tą zmienną z funkcji, aby stała się zmienną globalną, dzięki czemu będzie można użyć jej poza funkcją

var create_Id_Triggers = (function() {

    let images = [];
    let image_Amount;
    //let a = -1;   // Wartość licznika indeksów tablicy
    let b = -1;   // Wartość licznika "kolejnych" obrazów
                // Liczba zdjęć:
    for (x = 0; x < document.querySelectorAll('img.imageSlider-content-imgOverblock-imgGroup-image-proper').length; x++) {   
        // Zmienna "x" może służyć także jako wartość licznika indeksów tablicy
        //a = a + 1;
        b = b + 1;
        images[x] = document.getElementById("image-" + [b] + "");   // Ostatni nawias "" nie jest potrzebny
    }
    
    image_Amount = images.length;
    image_Group_Box_Width = (900 * image_Amount);
    image_Group_Box.style.width = image_Group_Box_Width + "px";
    document.getElementById("helpfulImagesLenghtCounter").innerHTML = 'Liczba utworzonych odwołań do "id" obrazów: ' + image_Amount + ' - tylu obrazom utworzono odwołanie do "id"';

}());



// Ruszanie Image slider'em

const left_Arrow = document.getElementById("left-arrow");
const right_Arrow = document.getElementById("right-arrow");
const acces_NumberOf_Images = 4;   // U W A G A ! TUTAJ WPISZ LICZBĘ CAŁKOWITĄ OBRAZÓW, KTÓRYCH ŚCIEŻKI ZAPISAŁEĆ Z PLIKU ".html"!
                                   // Jak nazwa ostatniego obrazu wynosi np.: img_32, to dodaj 1 i wpisz do tej zmiennej (acces_NumberOf_Images).

let acces_Numb_Img_Counter = 0;
let image_Group_Box_Right = 0;

right_Arrow.addEventListener("click", function() {
    if (acces_Numb_Img_Counter < acces_NumberOf_Images) {
        acces_Numb_Img_Counter = acces_Numb_Img_Counter + 1;
        image_Group_Box_Right = image_Group_Box_Right + 900;
        image_Group_Box.style.right = image_Group_Box_Right + "px";
        //image_Group_Box.style.transitionDuration = 0.5 + "s";    // Kiedy nie możesz dopisać tekstowej wartości do wartości liczbowej, bo wyskakuje błąd,
                                                                   // rozdziel ją i dodaj w cudzysłowiu
    }
    else {
        acces_Numb_Img_Counter = acces_Numb_Img_Counter + 0;
        alert("Dalej nie ma obrazów!");
    }
    
});

left_Arrow.addEventListener("click", function() {
    if (acces_Numb_Img_Counter > 0) {
        acces_Numb_Img_Counter = acces_Numb_Img_Counter - 1;
        image_Group_Box_Right = image_Group_Box_Right - 900;
        image_Group_Box.style.right = image_Group_Box_Right + "px";
        //image_Group_Box.style.transitionDuration = 0.5 + "s";
    }
    else {
        acces_Numb_Img_Counter = acces_Numb_Img_Counter + 0;
        alert("Dalej nie ma obrazów!");
    }
});