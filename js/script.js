import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    offset: 100,
});

document.addEventListener('DOMContentLoaded', function () {


    // When the user clicks the button, open the modal

    var modal = $("#myModal");
    $("#showModal").on("click", function (event) {
        modal.css("display", "flex");
    });

    var modalTwo = $(".modalTwo");
    $(".showModalTwo").on("click", function (event) {
        modalTwo.css("display", "flex");
    });
    var modalThree = $(".modalThree");
    $("#showModalThree").on("click", function (event) {
        console.log(event.target)
        modalThree.css("display", "flex");
    });

    // When the user clicks on <span> (x), close the modal
    $(".close-btn").on("click", function (event) {
        if (event.target.classList.contains('close-btn')) {
            modal.css("display", "none");
        }
    });
    $(".close-btnTwo").on("click", function (event) {
        if (event.target.classList.contains('close-btnTwo')) {
            modalTwo.css("display", "none");
        }
    });
    $(".close-btnThree").on("click", function (event) {
        if (event.target.classList.contains('close-btnThree')) {
            modalThree.css("display", "none");
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            modal.css("display", "none");
        } else if (event.target.classList.contains('modalTwo')) {
            modalTwo.css("display", "none")
        } else if (event.target.classList.contains('modalThree')) {
            modalThree.css("display", "none")
        }
    }
});



