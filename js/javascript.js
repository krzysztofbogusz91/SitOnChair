document.addEventListener('DOMContentLoaded', function () {
    //menu
    var companyLi = document.getElementById('companyLi');
    var hiddenUl = document.getElementById('hidenUl');
    //boxes info
    var infoBox = document.querySelectorAll('.image-info');
    var hideBox = document.querySelectorAll('.white-opacity');
    //slider
    var imageTwo = document.querySelector('.img-two');
    var imageOne = document.querySelector('.img-one');
    var arrows = document.querySelectorAll('.arrow > a');
    //form lists
    var listArrow = document.querySelectorAll('.list_arrow');
    var listPanel = document.querySelectorAll('.list_panel');
    var listLabel = document.querySelectorAll('.list_label');

    //show names and prices
    var nameTitle = document.querySelector('.panel_left > .title');
    var nameColor = document.querySelector('.panel_left > .color');
    var namePattern = document.querySelector('.panel_left > .pattern');
    var nameTransport = document.querySelector('.panel_left > .transport');
    var valTitle = document.querySelector('.panel_right>.title');
    var valColor = document.querySelector('.panel_right > .color');
    var valPattern = document.querySelector('.panel_right > .pattern');
    var valTransport = document.querySelector('.panel_right > .transport');
    var sumChair = document.querySelector('.sum > strong');


    //show hidden menu --- need to fix this mechanism ---
    companyLi.addEventListener('mouseenter', function () {
        hidenUl.classList.toggle('show');
    });

    hiddenUl.addEventListener('mouseleave', function () {
        hidenUl.classList.remove('show');
    });

    //hides info-box on chair picures
    for (var i = 0; i < infoBox.length - 1; i++) {
        infoBox[i].addEventListener('mouseenter', function () {
            this.firstElementChild.classList.add('hide-info');
        });
    }

    //show on mouse leave
    for (var i = 0; i < infoBox.length - 1; i++) {
        infoBox[i].addEventListener('mouseleave', function () {
            this.firstElementChild.classList.remove('hide-info');
        });
    }

    //slider
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function () {
            if (imageTwo.classList.contains('hidden') === true) {
                imageTwo.classList.remove('hidden');
                imageOne.classList.add('hidden');
            } else {
                imageTwo.classList.add('hidden');
                imageOne.classList.remove('hidden');
            }
        })
    }

    //form list chose options
    for (var i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show_me');
        })
    }


    //function for checking and seting order summary
    function checkAndSet(check) {

        if(check.parentElement.classList.contains('chair-title')){
            nameTitle.innerText = check.innerText;
            valTitle.innerText = check.dataset.price;
            sumChair.innerText = parseFloat(sumChair.innerText) + parseFloat(valTitle.innerText);
        }
        if(check.parentElement.classList.contains('chair-color')){
            nameColor.innerText = check.innerText;
            valColor.innerText = check.dataset.price;
            sumChair.innerText = parseFloat(sumChair.innerText) + parseFloat(valColor.innerText);
        }
        if(check.parentElement.classList.contains('chair-pattern')){
            namePattern.innerText = check.innerText;
            valPattern.innerText = check.dataset.price;
            sumChair.innerText = parseFloat(sumChair.innerText) + parseFloat(valPattern.innerText);
        }

    }


    //sets chosen item from list in correct span;
    for (var i = 0; i < listPanel.length; i++) {
        var liElems = listPanel[i].children;
        for (var j = 0; j < liElems.length; j++) {
            liElems[j].addEventListener('click', function () {
                var listInput = this.parentElement.parentElement.firstElementChild;
                listInput.innerText = this.innerText;
                checkAndSet(this);
                listInput.style.color = '#222';
                listInput.nextElementSibling.nextElementSibling.classList.remove('show_me');
            })
        }

    }
    //add or subtract transport price and set text;
    var trans = document.getElementById('transport');
    trans.addEventListener('click',function () {

        if(trans.checked === true){
            nameTransport.innerText = "Transport";
            valTransport.innerText = trans.dataset.transportPrice;
            sumChair.innerText = parseFloat(sumChair.innerText) + parseFloat(valTransport.innerText);

        }else {
            nameTransport.innerText = "";
            valTransport.innerText = "";
            sumChair.innerText = parseFloat(sumChair.innerText) - parseFloat(trans.dataset.transportPrice);
        }
    });





});