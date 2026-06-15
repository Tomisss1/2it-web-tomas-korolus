document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons .btn");
    const cards = document.querySelectorAll("#monsters-grid .card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Odstranit aktivní třídu ze všech tlačítek a nastavit aria-pressed na false
            buttons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });

            // 2. Aktivovat kliknuté tlačítko
            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            const filterValue = button.getAttribute("data-filter");

            // 3. Filtrování karet
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    card.classList.remove("hidden"); // Ukáže kartu
                } else {
                    card.classList.add("hidden"); // Skryje kartu pomocí tvé CSS třídy
                }
            });
        });
    });
});