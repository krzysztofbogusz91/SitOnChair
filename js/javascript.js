document.addEventListener('DOMContentLoaded', function () {
    //menu
    var companyLi = document.getElementById('companyLi');
    var hiddenUl = document.getElementById('hidenUl');
    //boxes info
    var infoBox = document.querySelectorAll('.image-info');
    var hideBox = document.querySelectorAll('.white-opacity');
    console.log(infoBox);

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


});