document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const header = document.createElement('header');
  
  //STILE HEADER
  header.style.backgroundColor = '#191e24';
  header.style.borderBottom = '1px solid white';
  header.style.color = '#fff';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.padding = '10px 20px';
  header.style.flexDirection = 'row';
  header.style.position = 'sticky';
  header.style.top ='0';
  header.style.zIndex = '100';
  
  const navbarLeft = document.createElement('div');
  navbarLeft.classList.add('navbar-left');
  navbarLeft.style.flexGrow = '1';
  
  const buttonInfo = document.createElement('button');
  buttonInfo.id = 'buttonInfo';
  //STILE BUTTONINFO
  buttonInfo.style.backgroundImage = 'url("https://api.iconify.design/tdesign:info-circle.svg?color=%23888888")';
  buttonInfo.style.backgroundRepeat = 'no-repeat';
  buttonInfo.style.backgroundSize = 'contain';
  navbarLeft.appendChild(buttonInfo);
  
  const titleHeader = document.createElement('h1');
  titleHeader.textContent = 'QuickCounter';
  titleHeader.id = 'titleHeader';
  titleHeader.style.flexGrow = '2';
  titleHeader.style.textAlign = 'center';
  
  const navbarRight = document.createElement('div');
  navbarRight.classList.add('navbar-right');
  navbarRight.style.flexGrow = '1';
  
  const toggleNightModeButton = document.createElement('button');
  toggleNightModeButton.id = 'toggleIcon';
  //STILE BUTTONDARKMODE
  toggleNightModeButton.style.backgroundImage = 'url("https://api.iconify.design/akar-icons/sun-fill.svg?color=white")';
  toggleNightModeButton.style.backgroundRepeat = 'no-repeat';
  toggleNightModeButton.style.backgroundSize = 'contain';
  toggleNightModeButton.style.marginLeft = 'auto';
  navbarRight.appendChild(toggleNightModeButton);
  
  header.append(navbarLeft, titleHeader, navbarRight);
  
  container.appendChild(header);
  
  //FUNZIONAMENTO DARKMODE
  
  toggleNightModeButton.addEventListener("click", function() {
    document.body.classList.toggle("inverted-colors");
    
    let isNightMode = localStorage.getItem("nightMode") === "true";
    
    isNightMode = !isNightMode;
    localStorage.setItem("nightMode", isNightMode);
    
    if (isNightMode) {
      toggleNightModeButton.style.backgroundImage = 'url("https://api.iconify.design/ph/moon-fill.svg?color=white")';
    } else {
      toggleNightModeButton.style.backgroundImage = 'url("https://api.iconify.design/akar-icons/sun-fill.svg?color=white")';
    }
  });
  
  // SEZIONE COUNTER
  const counterSection = document.createElement('div');
  counterSection.classList.add('counterSection');
  counterSection.style.padding = '15px','15px','10px','10px';
  
  //SEZIONE TITOLO COUNTER E BOTTONI
  const counterTitle = document.createElement('div');
  counterTitle.classList.add('counterTitle');
  
  const title = document.createElement('h2');
  title.textContent = 'Counter Name';
  title.contentEditable = true;
  title.classList.add('title');
  
  const buttonAddValue = document.createElement('button');
  buttonAddValue.textContent = 'Add Value';
  buttonAddValue.id = 'addValueButton';
  
  const buttonReset = document.createElement('button');
  buttonReset.textContent = 'Reset';
  buttonReset.id = 'resetButton'
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.id = 'deleteButton';
  deleteButton.style.display = 'none';
  
  counterTitle.append(title, buttonAddValue, buttonReset, deleteButton);
  
  //COUNTER PREDEFINITO
  
  const counterNumber = document.createElement('div');
  counterNumber.id = 'counter';
  counterNumber.textContent = '0';
  counterNumber.classList.add('centerBox');
  
  const buttonBase = document.createElement('div');
  buttonBase.classList.add('buttonBase');
  
  const incrementButton = document.createElement('button');
  incrementButton.textContent = '+';
  incrementButton.id = 'incrementButton';
  
  const decrementButton = document.createElement('button');
  decrementButton.textContent = '-';
  decrementButton.id = 'decrementButton';
  
  buttonBase.append(incrementButton, decrementButton);
  
  counterSection.append(counterTitle, counterNumber, buttonBase);
  container.appendChild(counterSection);
  
  const counterElement = document.getElementById('counter');
  
  //FUNZIONAMENTO COUNTER
  let counter = 0;
  
  /* incrementButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
  });
  
  decrementButton.addEventListener("click", () => {
    counter--;
    counterElement.textContent = counter;
  }); */
  
  //FUNZIONAMENTO TASTO RESET
  buttonReset.addEventListener("click", () => {
    counter = 0;
    counterElement.textContent = counter;
  });
  
  //FUNZIONAMENTO TASTO ADD VALUE
  /* addValueButton.addEventListener("click", () => {
    const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));
    
    if (!isNaN(valueToAdd)) {
      counter += valueToAdd;
      counterElement.textContent = counter;
    }
  }); */
  
  //INSERIMENTO TESTO TITOLO TASTO INVIO
  document.addEventListener("keydown", function(event) {
    const focusedElement = document.activeElement;
    
    
    if (focusedElement && focusedElement.classList.contains("title")) {
      if (event.key === "Enter") {
        event.preventDefault();
        focusedElement.blur();
      }
    }
  });
  
  //SEZIONE NEW COUNTER
  const newCounterSection = document.createElement('div');
  newCounterSection.id = 'newCounterSection';
  
  const addCounterDiv = document.createElement('div');
  addCounterDiv.classList.add('add-counter');
  
  const addCounterButton = document.createElement('button');
  addCounterButton.textContent = 'Add New Counter';
  addCounterButton.classList.add('buttonAdd');
  addCounterButton.id = 'addCounterButton';
  
  addCounterDiv.appendChild(addCounterButton);
  newCounterSection.appendChild(addCounterDiv);
  
  container.appendChild(newCounterSection);
  
  //CLONA IL COUNTER
  let counterIndex = 0; //tiene il conto dei counter;
  
  addCounterButton.addEventListener("click", (event) => {
    event.stopPropagation();
    
    const clonedCounterSection = counterSection.cloneNode(true);
    const clonedCounterElement = clonedCounterSection.querySelector('#counter');
    //Imposta il nuovo contatore a zero
    clonedCounterElement.textContent = '0';
    //Imposta NOME Predefinito nuovo contatore;
    const defaultTitle = clonedCounterSection.querySelector('.counterTitle');
    const defaultCounterName = 'Counter Name';
    const title = defaultTitle.querySelector('.title');
    title.textContent = defaultCounterName;
    
    counterIndex++;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'deleteButton';
    
    deleteButton.addEventListener('click', () => {
      clonedCounterSection.remove();
    });
    
    const counterTitle = clonedCounterSection.querySelector('.counterTitle');
    counterTitle.append(deleteButton);
    
    //Per nascondere il button DELETE solo al primo counter
    if (counterIndex === 0) {
      deleteButton.style.display = 'none';
    }

    
    container.insertBefore(clonedCounterSection, newCounterSection);
  }); 

  //FUNZIONAMENTO COUNTER
  
  container.addEventListener("click", function(event) {
    const clickedElement = event.target;
    
    if (clickedElement.id === 'addCounterButton') {
      const clonedCounterSection = counterSection.cloneNode(true); //DUPLICA SEZIONE COUNTER
      container.insertBefore(clonedCounterSection, newCounterSection);
    }
    
    if (clickedElement.id === 'incrementButton') {
      const counterElement = clickedElement.parentNode.parentNode.querySelector('#counter');
      let counterValue = parseInt(counterElement.textContent);
      counterElement.textContent = ++counterValue;
    }
    
    if (clickedElement.id === 'decrementButton') {
      const counterElement = clickedElement.parentNode.parentNode.querySelector('#counter');
      let counterValue = parseInt(counterElement.textContent);
      counterElement.textContent = --counterValue;
    }
    
    if (clickedElement.id === 'resetButton') {
      const counterElement = clickedElement.parentNode.parentNode.querySelector('#counter');
      counterElement.textContent = '0';
    }
    
    if (clickedElement.id === 'addValueButton') {
      const counterElement = clickedElement.parentNode.parentNode.querySelector('#counter');
      const valueToAdd = parseInt(prompt("Inserisci il valore da aggiungere:"));
      
      if (!isNaN(valueToAdd)) {
        let counterValue = parseInt(counterElement.textContent);
        counterElement.textContent = counterValue + valueToAdd;
      }
    }
  });
  
  
  const newParagraph = document.createElement('div');
  newParagraph.id = 'newParagraph';
  newParagraph.style.display = 'none';
  
  const newContent = `
  <article>
  QuickCounter is a free online tool that you can use on your computer or mobile device.
  <br>This handy counter is suitable for any situation where you need to count people or objects.
  <h3>How to Use QuickCounter</h2>
  <ul>
  <li>All you need to do is click the <span><button class="buttonarticle">+</button></span> button to increase the count or <span><button class="buttonarticle">-</button></span> to decrease it.</li>
  <li>You can also change the name of each counter. Once you've entered the new name, you can confirm it by pressing the <span class="enterkey"><img src="https://api.iconify.design/icon-park-outline/enter-key.svg?color=white"></span> Enter key or by clicking outside of the input text.</li>
  <li>Adding an initial value with the <span><button class="addValue">Add Value</button></span> button allows you to start your count from a specific number.</li>
  <li>You can reset the count by using the <span><button class="addValue">Reset</button></span> button.</li>
  </ul>
  <br>When you access the website's homepage, you will find a single counter. You have the option to add as many counters as you want by clicking the <span><button class="addValue">Add New Counter</button></span> button.
  <br><br>
  <ul>
  <li>Added counters can be deleted using the <span><button class="addValue">Delete</button></span> button.</li>
  </ul>
  <br>This function is available only for counters added by the user; the default first counter does not have this feature.
  </article>
  `;
  
  newParagraph.innerHTML = newContent;
  container.insertBefore(newParagraph, newCounterSection.nextSibling);
  
  
  
  
  container.insertBefore(newParagraph, newCounterSection.nextSibling);
  
  buttonInfo.addEventListener('click', function() {
    const currentState = container.innerHTML;
    
    //NASCONDE COUNTERSECTION E NEWCOUNTERSECTION
    const counters = document.querySelectorAll('.counterSection');
    counters.forEach(counter => {
      counter.style.display = 'none';
    });
    
    newCounterSection.style.display = 'none';
    newParagraph.style.display = 'block';
    buttonInfo.style.display = 'none';
    
    //BACKBUTTON SOSTITUISCE IL BUTTONINFO
    const backButton = document.createElement('button');
    backButton.id = 'backButton';
    
    //TORNA ALLO STATO INIZIALE AL CLICK BACKBUTTON
    backButton.addEventListener('click', function() {
      counters.forEach(counter => {
        counter.style.display = 'block';
      });
      
      newCounterSection.style.display = 'block';
      newParagraph.style.display = 'none';
      
      navbarLeft.replaceChild(buttonInfo, backButton);
      buttonInfo.style.display = 'block';
    });
    
    navbarLeft.replaceChild(backButton, buttonInfo);
  });
  
});