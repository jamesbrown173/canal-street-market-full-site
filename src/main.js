const dashedBorderBox = document.querySelectorAll(".dashed-border-box");
const menuBarItem = document.querySelectorAll(".nav-main-item");
const sections = document.querySelectorAll(".main-section");
const whiteSection = document.querySelector(".welcome-section");
const blueSection = document.querySelector(".food-section");

const redSection = document.querySelector(".retail-section");
const yellowSection = document.querySelector(".community-section");

/*------------------------------------------------------------------------------------------------
Moving Border Effect
------------------------------------------------------------------------------------------------*/

// Function to handle mouseover event
const handleMouseOver = (element) => {
  element.classList.add("active-border-animation");
};

// Function to handle mouseout event
const handleMouseOut = (element) => {
  const computedStyle = getComputedStyle(element);
  const bgPosition = computedStyle.backgroundPosition;

  element.classList.remove("active-border-animation");
  element.style.backgroundPosition = bgPosition;

  const adjustedFinalPos = bgPosition // Why can use .split and .flatmap here
    .split(", ")
    .flatMap((pos) => pos.split(" "));

  // Adjust the positions
  adjustedFinalPos[0] = parseFloat(adjustedFinalPos[0]) + 30 + "px";
  adjustedFinalPos[2] = parseFloat(adjustedFinalPos[2]) - 30 + "px";
  adjustedFinalPos[5] = parseFloat(adjustedFinalPos[5]) - 30 + "px";
  adjustedFinalPos[7] = parseFloat(adjustedFinalPos[7]) + 30 + "px";

  const newBgPosition = adjustedFinalPos.reduce((acc, val, index) => {
    return acc + (index % 2 === 0 && index > 0 ? ", " : " ") + val;
  });

  document.documentElement.style.setProperty("--dashed-start-pos", bgPosition);
  document.documentElement.style.setProperty("--dashed-end-pos", newBgPosition);
};

// Add event listeners to each element
dashedBorderBox.forEach((element) => {
  element.addEventListener("mouseover", () => handleMouseOver(element));
  element.addEventListener("mouseout", () => handleMouseOut(element));
});

console.log("connected");

/*------------------------------------------------------------------------------------------------
-- Change Page and Adjust the width / location of the menu when navigating between pages
------------------------------------------------------------------------------------------------*/

// Step 1. On click of menu item load change the class of the selected item from hidden to flex removing others.

// Step 2. Animated the transiation of menu bar on click <--- I think do this first because it's hardest

// Function to handle menubar clicks
const handleMenuClick = (element) => {
  // Reset the menu bar styles
  menuBarItem.forEach((element) => {
    const textElements = element.querySelectorAll("p, span");
    textElements.forEach((textElement) => {
      textElement.classList.remove("hidden");
    });
    element.classList.remove("mr-auto");
  });

  // Expand the Menu bar
  element.classList.add("mr-auto");

  // Remove the Menu Text upon click
  const textElements = element.querySelectorAll("span, p");
  textElements.forEach((textElement) => {
    textElement.classList.add("hidden");
  });

  //Toggle the display of selected section
  let areaToToggle = element.classList[1];
  console.log(areaToToggle);
  if (areaToToggle == "left-logo") {
    whiteSection.classList.remove("hidden");
    whiteSection.classList.add("flex");

    blueSection.classList.remove("flex");
    blueSection.classList.add("hidden");

    redSection.classList.remove("flex");
    redSection.classList.add("hidden");

    yellowSection.classList.remove("flex");
    yellowSection.classList.add("hidden");
  }
  if (areaToToggle == "nav-main-food") {
    whiteSection.classList.remove("flex");
    whiteSection.classList.add("hidden");

    blueSection.classList.remove("hidden");
    blueSection.classList.add("flex");

    redSection.classList.remove("flex");
    redSection.classList.add("hidden");

    yellowSection.classList.remove("flex");
    yellowSection.classList.add("hidden");
  }
  if (areaToToggle == "nav-main-retail") {
    whiteSection.classList.remove("flex");
    whiteSection.classList.add("hidden");

    blueSection.classList.remove("flex");
    blueSection.classList.add("hidden");

    redSection.classList.remove("hidden");
    redSection.classList.add("flex");

    yellowSection.classList.remove("flex");
    yellowSection.classList.add("hidden");
  }
  if (areaToToggle == "nav-main-community") {
    whiteSection.classList.remove("flex");
    whiteSection.classList.add("hidden");

    blueSection.classList.remove("flex");
    blueSection.classList.add("hidden");

    redSection.classList.remove("flex");
    redSection.classList.add("hidden");

    yellowSection.classList.remove("hidden");
    yellowSection.classList.add("flex");
  }

  // Add fade-in or fade-out
};

menuBarItem.forEach((element) => {
  element.addEventListener("click", () => handleMenuClick(element));
});

// Step 3. Update the adress to the selected location
