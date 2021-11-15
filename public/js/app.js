
window.onload = (event) => {
    handlerClick();
    console.log('page is fully loaded');
};
const handlerClick = () => {
    var checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0, n = checkBox.length; i < n; i++) {


        if (checkBox[i].checked == true) {
            // console.log('true')
            div = document.getElementsByClassName('borderCheckbox');
            div[i].style.opacity = "1";



        } else {
            // console.log('false')
            div[i].style.opacity = "0.5";

        }


    }




}




$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
