    /*burger button*/
    const burger = document.querySelector(".burgertoggle");
    const nav = document.querySelector(".navlinks");
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    //quick scroll

    const scrollBtn = document.getElementById("scrollTopBtn");

    // show button when scrolling
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // scroll to top on click
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });