document.addEventListener('DOMContentLoaded', function () {
    //menu
    var companyLi = document.getElementById('companyLi');
    var hiddenUl = document.getElementById('hidenUl');
    //boxes info
    var infoBox = document.querySelectorAll('.image-info');
    //slider
    var imageTwo = document.querySelector('.img-two');
    var imageOne = document.querySelector('.img-one');
    var arrows = document.querySelectorAll('.arrow > a');
    //form lists
    var listArrow = document.querySelectorAll('.list_arrow');
    var listPanel = document.querySelectorAll('.list_panel');
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
    //transport
    var trans = document.getElementById('transport');

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
    function slide() {
        if (imageTwo.classList.contains('hidden') === true) {
            imageTwo.classList.remove('hidden');
            imageOne.classList.add('hidden');
            //animation
            imageTwo.style.animation = 'anim2 5s forwards linear';
            imageOne.style.animation = 'none';
        } else {
            imageTwo.classList.add('hidden');
            imageOne.classList.remove('hidden');

            //animation
            imageTwo.style.animation = 'none';
            imageOne.style.animation = 'anim1 5s forwards linear';
        }
    }
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function () {
            slide();
        })
    }
    //dynamic automatic slide
    setInterval(slide, 5000);
    //form list chose options
    for (var i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show_me');
        })
    }
    //function for checking and seting order summary
    function checkAndSet(check) {
        if (check.parentElement.classList.contains('chair-title')) {
            nameTitle.innerText = check.innerText;
            valTitle.innerText = check.dataset.price;
        }
        if (check.parentElement.classList.contains('chair-color')) {
            nameColor.innerText = check.innerText;
            valColor.innerText = check.dataset.price;
        }
        if (check.parentElement.classList.contains('chair-pattern')) {
            namePattern.innerText = check.innerText;
            valPattern.innerText = check.dataset.price;
        }
    }
    function updateSum() {
        var panelRightChildren = document.querySelector('.panel_right').children;
        //if length <1 set text for 0;
        for (var i = 0; i < panelRightChildren.length; i++) {
            if (panelRightChildren[i].innerText.length < 1) {
                panelRightChildren[i].innerText = "0";
            }
        }
        //add all and set correct trans-value
        if (trans.checked === true) {
            nameTransport.innerText = "Transport";
            valTransport.innerText = trans.dataset.transportPrice;
            sumChair.innerText = parseFloat(valColor.innerText) + parseFloat(valPattern.innerText) + parseFloat(valTitle.innerText) + parseFloat(valTransport.innerText);
        } else {
            nameTransport.innerText = "";
            valTransport.innerText = "0";
            sumChair.innerText = parseFloat(valColor.innerText) + parseFloat(valPattern.innerText) + parseFloat(valTitle.innerText) - parseFloat(valTransport.innerText);
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
                //update sum
                updateSum();
            })
        }
    }
    //add event on transport checkbox
    trans.addEventListener('click', updateSum);
});