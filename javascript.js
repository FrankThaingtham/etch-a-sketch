// Select the body element
const body = document.body;

// Apply styles to body to center the grid but keep the button at the top
body.style.display = "flex";
body.style.flexDirection = "column"; // Stack elements vertically
body.style.alignItems = "center"; // Center horizontally
body.style.justifyContent = "flex-start"; // Keep button at the top
body.style.height = "100vh"; // Use full viewport height
body.style.margin = "0"; // Remove default margins

// Create a button
const button = document.createElement("button");
button.textContent = "Generate New Grid";
button.style.marginBottom = "20px"; // Add spacing below the button
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";

// Append the button to the body
body.appendChild(button);

// Create a container for the grid
const container = document.createElement("div");
container.setAttribute("id", "container");
container.style.display = "flex";
container.style.flexWrap = "wrap"; // Ensure proper wrapping
container.style.width = "960px"; // Keep the total grid size fixed
container.style.height = "960px";
container.style.border = "2px solid black"; // Optional for visibility
container.style.marginTop = "20px"; // Adds space between the button and the grid

// Append the container to the body
body.appendChild(container);

// Function to generate the grid
function generateGrid(size) {
    // Remove any existing grid before creating a new one
    container.innerHTML = "";

    // Calculate the size of each box to maintain 960px total width/height
    const boxSize = 960 / size + "px";

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");

        // Style each box
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.background = "blue";
        box.style.border = "1px solid black";
        box.style.boxSizing = "border-box"; // Ensures the box doesn't overflow

        // Add hover effect to change color
        box.addEventListener("mouseover", () => {
            box.style.background = "red";
        });

        // Append box to container
        container.appendChild(box);
    }
}

// Function to ask for grid size and regenerate grid
function newGrid() {
    let size = prompt("Enter the number of squares per side (max 100):");

    // Convert input to number and validate
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    // Generate new grid with the entered size
    generateGrid(size);
}

// Attach event listener to button
button.addEventListener("click", newGrid);

// Generate default grid (16x16)
generateGrid(16);