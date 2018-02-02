document.addEventListener('DOMContentLoaded', function () {
    //menu
    var companyLi = document.getElementById('companyLi');
    var hiddenUl = document.getElementById('hidenUl');
    //boxes info
    var infoBox = document.querySelectorAll('.image-info');
    var hideBox = document.querySelectorAll('.white-opacity');
    console.log(infoBox);
    //slider
    var imageTwo = document.querySelector('.img-two');
    var imageOne = document.querySelector('.img-one');
    var arrows = document.querySelectorAll('.arrow > a');


    //show hidden menu --- need to fix this mechanism ---
    companyLi.addEventListener('mouseenter', function () {
        hidenUl.classList.toggle('show');
    });

    hiddenUl.addEventListener('mouseleave', function () {
        hidenUl.classList.remove('show');
    });

    //hides info-box on chair picures
    for(var i = 0; i < infoBox.length-1;i++ ){
        infoBox[i].addEventListener('mouseenter',function () {
            this.firstElementChild.classList.add('hide-info');
        });
    }

    //show on mouse leave
    for(var i = 0; i < infoBox.length-1;i++ ){
        infoBox[i].addEventListener('mouseleave',function () {
            this.firstElementChild.classList.remove('hide-info');
        });
    }

    //slider
    for(var i = 0; i < arrows.length; i++){
        arrows[i].addEventListener('click', function () {
            if(imageTwo.classList.contains('hidden') ===true){
                imageTwo.classList.remove('hidden');
                imageOne.classList.add('hidden');
            }else{
                imageTwo.classList.add('hidden');
                imageOne.classList.remove('hidden');
            }
        })
    }


});