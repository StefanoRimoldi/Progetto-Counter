document.addEventListener("DOMContentLoaded", function() {
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const resetCounterButton = document.getElementById("resetButton");
    const addValueButton = document.getElementById("addValueButton");
    const counterElement = document.getElementById("counter");
    const counterTitle = document.getElementById("counterTitle");
    const initialValueInput = document.getElementById("initialValue");
    // New counters
    const addCounterButton = document.getElementById("addCounterButton");
    const countersContainer = document.getElementById("newCounterSection");
    
    let counter = 0;
    
    incrementButton.addEventListener("click", () => {
      counter++;
      counterElement.textContent = counter;
    });
    
    decrementButton.addEventListener("click", () => {
      counter--;
      counterElement.textContent = counter;
    });
    
    resetCounterButton.addEventListener("click", () => {
      counter = 0;
      counterElement.textContent = counter;
    });
    
    addValueButton.addEventListener("click", () => {
      const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));
      
      if (!isNaN(valueToAdd)) {
        counter += valueToAdd;
        counterElement.textContent = counter;
      }
    });
    
  
    
  // Per confermare inserimento del titolo del counter con Invio //  
  document.addEventListener("keydown", function(event) {
    const focusedElement = document.activeElement;
  
    
    if (focusedElement && focusedElement.classList.contains("title")) {
      if (event.key === "Enter") {
        event.preventDefault();
        focusedElement.blur();
      }
    }
  });
  
  document.addEventListener("focusin", function(event) {
    const focusedElement = event.target;
  
    
    if (focusedElement && focusedElement.classList.contains("title")) {
      focusedElement.classList.add("editing");
    }
  });
  
  document.addEventListener("focusout", function(event) {
    const focusedElement = event.target;
  
    
    if (focusedElement && focusedElement.classList.contains("title")) {
      focusedElement.classList.remove("editing");
    }
  });
  
    
    
    // Inserisce il nuovo counter //
    addCounterButton.addEventListener("click", () => {
      const newCounterDiv = document.createElement("div");
      
      // Crea la struttura del counter all'interno del div
      newCounterDiv.innerHTML = `
      <div>
      <div class='counter-title'>
      <h2 id="counterTitle" class='title' contenteditable="true">Counter Name</h2>
      <button id="addValueButton">Add Value</button>
      <button id="resetButton">Reset</button>
      <button id='deleteButton'>Delete</button>
      <input type="text" id="initialValue" style="display: none">
      </div>
      <div class="center-box">
      <div id="counter" contenteditable="false">0</div>
      </div>
      </div>
      <div class='button-base'>
      <button id='incrementButton'>+</button>
      <button id='decrementButton'>-</button>
      </div>
      `;
      
      
      // Aggiunge il nuovo contatore al contenitore
      newCounterSection.appendChild(newCounterDiv);
      
      const incrementButton = newCounterDiv.querySelector("#incrementButton");
      const decrementButton = newCounterDiv.querySelector("#decrementButton");
      const addValueButton = newCounterDiv.querySelector("#addValueButton");
      const resetCounterButton = newCounterDiv.querySelector("#resetButton");
      const counterElement = newCounterDiv.querySelector("#counter");
      const deleteButton = newCounterDiv.querySelector("#deleteButton");
      
      incrementButton.addEventListener("click", () => {
        const counterElement = newCounterDiv.querySelector("#counter");
        let currentValue = parseInt(counterElement.textContent);
        if (isNaN(currentValue)) {
          currentValue = 0;
        }
        currentValue++;
        counterElement.textContent = currentValue;
      });
      
      decrementButton.addEventListener("click", () => {
        const counterElement = newCounterDiv.querySelector("#counter");
        let currentValue = parseInt(counterElement.textContent);
        if (isNaN(currentValue)) {
          currentValue = 0;
        }
        currentValue--;
        counterElement.textContent = currentValue;
      });
      
      addValueButton.addEventListener("click", () => {
        const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));
        
        if (!isNaN(valueToAdd)) {
          counter += valueToAdd;
          counterElement.textContent = counter;
        }
      });
      
      resetCounterButton.addEventListener("click", () => {
        counter = 0;
        counterElement.textContent = counter;
      });
      
      deleteButton.addEventListener("click", () => {
        // Rimuove il contatore selezionato
        newCounterSection.removeChild(newCounterDiv);
      });
      
      
      newCounterDiv.addEventListener("keydown", (event) => {
        if (event.key === "Delete" || event.keyCode === 46) {
          
          newCounterSection.removeChild(newCounterDiv);
        }
      });
    });
  });
  
    
  