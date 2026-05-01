
(function () {
    const isOpen = document.querySelector(".js__navopen");
    const isClose = document.querySelector(".js__navclose");
    const navigation = document.querySelector(".header");

    if (isOpen && navigation) {
        isOpen.addEventListener("click", (e) => {
            e.stopPropagation(); 
            navigation.classList.toggle("nav-active");
        });
    }

    if (isClose && navigation) {
        isClose.addEventListener("click", () => {
            navigation.classList.remove("nav-active");
        });
    }

    document.addEventListener("click", (event) => {
        const isClickInside = navigation.contains(event.target);
        const isClickOnButton = isOpen.contains(event.target);

        if (!isClickInside && !isClickOnButton) {
            navigation.classList.remove("nav-active");
        }
    });
})();