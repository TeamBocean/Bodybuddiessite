// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init({
//     duration: 1000,
//     offset: 100,
// });

$(function(){

    var parent = $(".parent_div")


    // When the user clicks the button, open the modal

    var modal = $("#myModal");
    $("#showModal").on("click", function (event) {
        modal.css("display", "flex");
        $('.parent_div').css("filter", "blur(8px)")
    });

    var modalTwo = $(".modalTwo");
    $(".showModalTwo").on("click", function (event) {
        modalTwo.css("display", "flex");
        $('.parent_div').css("filter", "blur(8px)")
    });
    var modalThree = $(".modalThree");
    $("#showModalThree").on("click", function (event) {
        modalThree.css("display", "flex");
        $('.parent_div').css("filter", "blur(8px)")
    });

    // When the user clicks on <span> (x), close the modal
    $(".close-btn").on("click", function (event) {
        if (event.target.classList.contains('close-btn')) {
            modal.css("display", "none");
            $('.parent_div').css("filter", "none")
        }
    });
    $(".close-btnTwo").on("click", function (event) {
        if (event.target.classList.contains('close-btnTwo')) {
            modalTwo.css("display", "none");
            $('.parent_div').css("filter", "none")
        }
    });
    $(".close-btnThree").on("click", function (event) {
        if (event.target.classList.contains('close-btnThree')) {
            modalThree.css("display", "none");
            $('.parent_div').css("filter", "none")
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            modal.css("display", "none");
            $('.parent_div').css("filter", "none")
        } else if (event.target.classList.contains('modalTwo')) {
            modalTwo.css("display", "none")
            $('.parent_div').css("filter", "none")
        } else if (event.target.classList.contains('modalThree')) {
            modalThree.css("display", "none")
            $('.parent_div').css("filter", "none")
        }
    }
});



