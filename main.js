document.addEventListener("DOMContentLoaded", function() {

  const mainContainer = document.querySelector("main");
  const itemNumber = 10;
  const colorArray = ["black", "grey", "brown", "red", "orange", "yellow", "green", "blue"];
  let brushColor = "";

  for (let i = 0; i < itemNumber; i++) {
    let newRow = document.createElement("div");
    newRow.classList = "row";
    mainContainer.append(newRow); 
//pass variable newRow to createCells function
    createCells(newRow);
  }    

  function createCells(newRow) {
    for (let i = 0; i < itemNumber; i++) {
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
      newRow.append(newCell);
    }  
  }

  const paletteContainer = document.createElement("row");
  paletteContainer.classList.add("paletteContainer");
  mainContainer.append(paletteContainer);

  const currentColor = document.createElement("p");
  currentColor.classList.add("currentColor");
  currentColor.innerText = "Color Selected: "
  mainContainer.append(currentColor);

  const colorSelected = document.createElement("span");
  colorSelected.classList.add("colorSelected");
  colorSelected.innerText = "";
  currentColor.append(colorSelected);

  colorArray.forEach(color => {
    const brush = document.createElement("div");
    brush.classList.add("brush");
    brush.style.backgroundColor = color;
    //add attribute with color info to element
    brush.dataset.color = color;
    paletteContainer.append(brush);  
  });

  paletteContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("brush")) {
      brushColor = event.target.dataset.color;
      colorSelected.innerText = brushColor;
    }
  })  

  mainContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      event.target.style.backgroundColor = brushColor;
    }
  });

})