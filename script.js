document.addEventListener("DOMContentLoaded", () => {
    let draggedElement = null; // Store the dragged element

    document.querySelectorAll(".image").forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target; // Set the dragged element
            e.dataTransfer.effectAllowed = "move"; // Set effect
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allow dropping
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement && draggedElement !== e.target) {
                // Swap background images
                let tempBg = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = tempBg;
            }
        });
    });
});
