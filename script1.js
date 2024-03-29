const employeeCards = [
  {
    id: 0,
    path: './assets/images/employees/waitress.png',
    inStock: true
  },
  {
    id: 1,
    path: './assets/images/employees/new_business_manager.png',
    inStock: true
  },
  {
    id: 2,
    path: './assets/images/employees/local_manager.png',
    inStock: true
  },
  {
    id: 3,
    path: './assets/images/employees/regional_manager.png',
    inStock: true
  },
  {
    id: 4,
    path: './assets/images/employees/cfo.png',
    inStock: true
  },
  {
    id: 5,
    path: './assets/images/employees/management_trainee.png',
    inStock: true
  },
  {
    id: 6,
    path: './assets/images/employees/junior_vice_president.png',
    inStock: true
  },
  {
    id: 7,
    path: './assets/images/employees/vice_president.png',
    inStock: true
  },
  {
    id: 8,
    path: './assets/images/employees/senior_vice_president.png',
    inStock: true
  },
  {
    id: 9,
    path: './assets/images/employees/executive_vice_president.png',
    inStock: true
  },
  {
    id: 10,
    path: './assets/images/employees/pricing_manager.png',
    inStock: true
  },
  {
    id: 11,
    path: './assets/images/employees/luxuries_manager.png',
    inStock: true
  },
  {
    id: 12,
    path: './assets/images/employees/discount_manager.png',
    inStock: true
  },
  {
    id: 13,
    path: './assets/images/employees/recruiting_girl.png',
    inStock: true
  },
  {
    id: 14,
    path: './assets/images/employees/recruiting_manager.png',
    inStock: true
  },
  {
    id: 15,
    path: './assets/images/employees/hr_director.png',
    inStock: true
  },
  {
    id: 16,
    path: './assets/images/employees/trainer.png',
    inStock: true
  },
  {
    id: 17,
    path: './assets/images/employees/coach.png',
    inStock: true
  },
  {
    id: 18,
    path: './assets/images/employees/guru.png',
    inStock: true
  },
  {
    id: 19,
    path: './assets/images/employees/errand_boy.png',
    inStock: true
  },
  {
    id: 20,
    path: './assets/images/employees/cart_operator.png',
    inStock: true
  },
  {
    id: 21,
    path: './assets/images/employees/truck_driver.png',
    inStock: true
  },
  {
    id: 22,
    path: './assets/images/employees/zeppelin_pilot.png',
    inStock: true
  },
  {
    id: 23,
    path: './assets/images/employees/marketing_trainee.png',
    inStock: true
  },
  {
    id: 24,
    path: './assets/images/employees/campaign_manager.png',
    inStock: true
  },
  {
    id: 25,
    path: './assets/images/employees/brand_manager.png',
    inStock: true
  },
  {
    id: 26,
    path: './assets/images/employees/brand_director.png',
    inStock: true
  },
  {
    id: 27,
    path: './assets/images/employees/kitchen_trainee.png',
    inStock: true
  },
  {
    id: 28,
    path: './assets/images/employees/burger_cook.png',
    inStock: true
  },
  {
    id: 29,
    path: './assets/images/employees/burger_chef.png',
    inStock: true
  },
  {
    id: 30,
    path: './assets/images/employees/pizza_cook.png',
    inStock: true
  },
  {
    id: 31,
    path: './assets/images/employees/pizza_chef.png',
    inStock: true
  },
]

const milestoneCards = [
  {
    id: 0,
    path: './assets/images/milestones/first_to_hire_3_people_in_1_turn.png',
    assignedMarkers: []
  },
  {
    id: 1,
    path: './assets/images/milestones/first_to_train_someone.png',
    assignedMarkers: []
  },
  {
    id: 2,
    path: './assets/images/milestones/first_billboard_placed.png',
    assignedMarkers: []
  },
  {
    id: 3,
    path: './assets/images/milestones/first_to_throw_away_drink_food.png',
    assignedMarkers: []
  },
  {
    id: 4,
    path: './assets/images/milestones/first_burger_produced.png',
    assignedMarkers: []
  },
  {
    id: 5,
    path: './assets/images/milestones/first_burger_marketed.png',
    assignedMarkers: []
  },
  {
    id: 6,
    path: './assets/images/milestones/first_waitress_played.png',
    assignedMarkers: []
  },
  {
    id: 7,
    path: './assets/images/milestones/first_pizza_produced.png',
    assignedMarkers: []
  },
  {
    id: 8,
    path: './assets/images/milestones/first_pizza_marketed.png',
    assignedMarkers: []
  },
  {
    id: 9,
    path: './assets/images/milestones/first_to_have_$20.png',
    assignedMarkers: []
  },
  {
    id: 10,
    path: './assets/images/milestones/first_errand_boy_played.png',
    assignedMarkers: []
  },
  {
    id: 11,
    path: './assets/images/milestones/first_drink_marketed.png',
    assignedMarkers: []
  },
  {
    id: 12,
    path: './assets/images/milestones/first_to_have_$100.png',
    assignedMarkers: []
  },
  {
    id: 13,
    path: './assets/images/milestones/first_cart_operator_played.png',
    assignedMarkers: []
  },
  {
    id: 14,
    path: './assets/images/milestones/first_airplane_campaign.png',
    assignedMarkers: []
  },
  {
    id: 15,
    path: './assets/images/milestones/first_to_lower_prices.png',
    assignedMarkers: []
  },
  {
    id: 16,
    path: './assets/images/milestones/first_to_pay_$20_or_more_in_salaries.png',
    assignedMarkers: []
  },
  {
    id: 17,
    path: './assets/images/milestones/first_radio_campaign.png',
    assignedMarkers: []
  },
]

const initialPlayerSetups = [
  {
    players: 2,
    exmployee1xCardsUsed: 1,
    billboardsRemoved: '#12, #15, #16',
    mapSize: '3x3'
  },
  {
    players: 3,
    exmployee1xCardsUsed: 1,
    billboardsRemoved: '#15, #16',
    mapSize: '3x4'
  },
  {
    players: 4,
    exmployee1xCardsUsed: 2,
    billboardsRemoved: '#16',
    mapSize: '4x4'
  },
  {
    players: 5,
    exmployee1xCardsUsed: 3,
    billboardsRemoved: 'None',
    mapSize: '5x4'
  }
]

const playerMarkers = [
  './assets/images/playerMarkers/fried_geese_and_donkey.png',
  './assets/images/playerMarkers/golden_duck_diner.png',
  './assets/images/playerMarkers/santa_maria_pizza.png',
  './assets/images/playerMarkers/xango_blues_bar.png',
  './assets/images/playerMarkers/gluttony_inc_burgers.png'
]

document.addEventListener("DOMContentLoaded", () => {
  const employeeCardContainer = document.getElementById('employee-card-container');
  const milestoneCardContainer = document.getElementById('milestone-card-container');
  const setupButton = document.getElementById('start-setup-button');
  const playerStartSetup = document.getElementById('player-start-setup-id');
  const playerCountInput = document.getElementById('player-count-input');
  const setupManagerContainer = document.getElementById('setup-manager-id');
  const svgRenderContainer = document.getElementById('svg-render-container');

  const selectedChains = [];

  const toggleStockOverlay = (event, card) => {
    console.log('running');
    card.overlayElement.style.display = !card.inStock ? 'none' : 'flex';
    card.inStock = !card.inStock;
  }

  const renderEmployeeCardStartLine = (start, end) => {
    const cardLineContainer = document.createElement('div');
    if (start === 13) {
      cardLineContainer.className = 'recruiting-girl-line-container';
    } else {
      cardLineContainer.className = 'card-line-container';
    }

    for (let i = start; i < end; i++) {
      let card = employeeCards[i];

      const cardContainer = document.createElement('div');
      cardContainer.className = 'employee-single-card-container';

      if (i === 16) {
        cardContainer.id = 'trainer-card'
      }

      if (i === 30) {
        cardContainer.id = 'pizza-cook-card'
      }

      const cardImgContainer = document.createElement('div');
      cardImgContainer.className = 'employee-card-img-container';

      const cardImg = document.createElement('img');
      cardImg.setAttribute('src', card.path);
      cardImg.setAttribute('draggable', 'false');
      cardImg.className = 'employee-card-img';

      const cardStockOverlay = document.createElement('div');
      cardStockOverlay.className = 'employee-card-stock-overlay'

      const cardStockOverlayText = document.createElement('p');
      cardStockOverlayText.innerText = 'Out of Stock';
      cardStockOverlayText.className = 'employee-card-stock-overlay-text'

      card.overlayElement = cardStockOverlay;

      cardImgContainer.addEventListener('click', (event) => {
        toggleStockOverlay(event, card);
      })

      cardStockOverlay.addEventListener('click', (event) => {
        toggleStockOverlay(event, card);
      })

      cardStockOverlay.append(cardStockOverlayText);

      cardContainer.append(cardImgContainer);
      cardContainer.append(cardStockOverlay);

      card.renderElement = cardContainer;

      cardImgContainer.append(cardImg);

      cardLineContainer.append(cardContainer);
    }

    employeeCardContainer.append(cardLineContainer);
  }

  const renderEmployeeCardes = () => {
    renderEmployeeCardStartLine(0, 5)
    renderEmployeeCardStartLine(5, 10)
    renderEmployeeCardStartLine(10, 13)
    renderEmployeeCardStartLine(13, 16)
    renderEmployeeCardStartLine(16, 19)
    renderEmployeeCardStartLine(19, 23)
    renderEmployeeCardStartLine(23, 27)
    renderEmployeeCardStartLine(27, 30)
    renderEmployeeCardStartLine(30, 32)
  }

  const renderMilestoneCards = () => {
    milestoneCards.forEach(card => {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'milestone-single-card-container';
  
      const cardImgContainer = document.createElement('div');
      cardImgContainer.className = 'milestone-card-img-container';
  
      const cardImg = document.createElement('img');
      cardImg.setAttribute('src', card.path);
      cardImg.setAttribute('draggable', 'false');
      cardImg.className = 'milestone-card-img';

      const markerHolder = document.createElement('div');
      markerHolder.className = 'marker-holder';

      markerHolder.addEventListener('dragover', (e) => e.preventDefault());
      markerHolder.addEventListener('drop', (e) =>drop(e, card));
  
      cardContainer.append(cardImgContainer);
      cardContainer.append(markerHolder);
  
      cardImgContainer.append(cardImg);
  
      milestoneCardContainer.append(cardContainer);
    })
  }

  const startSetup = () => {
    setupButton.addEventListener("click", initializeSetup);
  }

  const initializeSetup = () => {
    if (playerCountInput.value && parseInt(playerCountInput.value) > 1 && parseInt(playerCountInput.value) < 6) {
      playerStartSetup.style.display = 'none';

      const selectPlayersContainer = document.createElement('div');
      selectPlayersContainer.className = 'select-players-container';
      selectPlayersContainer.id = 'select-players-container-id';

      const selectPlayersText = document.createElement('p');
      selectPlayersText.className = 'select-players-text'
      selectPlayersText.innerText = `Please select the ${playerCountInput.value} ` +
        `restaurant chains you'll be playing with`;

      const playerMarkersContainer = document.createElement('div');
      playerMarkersContainer.className = 'player-markers-container'

      playerMarkers.forEach((marker, index) => {
        let markerContainer = document.createElement('div');

        let markerImg = document.createElement('img');
        markerImg.setAttribute('src', marker);
        markerImg.setAttribute('draggable', 'false');
        markerImg.className = 'player-marker-image'

        markerImg.addEventListener('click', () => selectMarker(index, markerImg, parseInt(playerCountInput.value)))

        markerContainer.append(markerImg);
        playerMarkersContainer.append(markerContainer);
      })

      const doneButton = document.createElement('button');
      doneButton.innerText = 'Done';
      doneButton.className = 'done-button';

      doneButton.addEventListener('click', () => finishSetup(parseInt(playerCountInput.value)));

      selectPlayersContainer.append(selectPlayersText);
      selectPlayersContainer.append(playerMarkersContainer);
      selectPlayersContainer.append(doneButton);
      setupManagerContainer.append(selectPlayersContainer);
    }
  }

  const selectMarker = (id, el, playerCount) => {
    if (selectedChains.includes(id)) {
      selectedChains.splice(selectedChains.indexOf(id), 1);
      el.style.border = 'none';
    } else {
      if (selectedChains.length < playerCount) {
        selectedChains.push(id);
        el.style.border = '2px solid green';
      }
    }
  }

  const finishSetup = (playerCount) => {
    if (selectedChains.length === playerCount) {
      selectedChains.sort();

      const setupObj = initialPlayerSetups.find(obj => obj.players === playerCount);

      const afterSetupContainer = document.createElement('div');

      const infoSetupContainer = document.createElement('div');
      infoSetupContainer.className = 'info-setup-container';

      const infoSetupText = document.createElement('h2');
      infoSetupText.innerText = 'Setup';
      infoSetupText.className = 'info-setup-text';

      const infoContainer = document.createElement('div');

      const playersInfo = document.createElement('p');
      playersInfo.innerText = `Number of Players: ${setupObj.players}`
      playersInfo.className = 'info';

      const exmployee1xCardsUsedInfo = document.createElement('p');
      exmployee1xCardsUsedInfo.innerText = `1x Employee Cards Used: ${setupObj.exmployee1xCardsUsed}`;
      exmployee1xCardsUsedInfo.className = 'info';

      const billboardsRemovedInfo = document.createElement('p');
      billboardsRemovedInfo.innerText = `Billboards Removed: ${setupObj.billboardsRemoved}`;
      billboardsRemovedInfo.className = 'info';

      const mapSizeInfo = document.createElement('p');
      mapSizeInfo.innerText = `Map Size: ${setupObj.mapSize}`;
      mapSizeInfo.className = 'info';

      const selectPlayersContainer = document.getElementById('select-players-container-id');
      selectPlayersContainer.style.display = 'none';

      const currentChainsContainer = document.createElement('div');
      currentChainsContainer.className='current-chains-container'
  
      const currentChainsText = document.createElement('h2');
      currentChainsText.innerText = 'Player Chains';
      currentChainsText.className = 'current-chains-text'
  
      const currentChainMarkers = document.createElement('div');
      currentChainMarkers.className = 'current-chain-marker-container';
  
      selectedChains.forEach(id => {
        let markerContainer = document.createElement('div');
  
        let markerImg = document.createElement('img');
        markerImg.setAttribute('src', playerMarkers[id]);
        markerImg.setAttribute('draggable', 'false');
        markerImg.className = 'finish-marker-image'
  
        markerContainer.append(markerImg);

        switch (id) {
          case 0:
            markerContainer.id = 'fried-geese-and-donkey-id';
            break;
          case 1:
            markerContainer.id = 'golden-duck-diner-id';
            break;
          case 2:
            markerContainer.id = 'santa-maria-pizza-id';
            break;
          case 3:
            markerContainer.id = 'xango-blues-bar-id';
            break;
          case 4:
            markerContainer.id = 'gluttony-inc-burgers-id';
            break;
        }
        
        markerContainer.setAttribute('draggable', 'true');
        markerContainer.addEventListener('dragstart', (e) => drag(e))

        currentChainMarkers.append(markerContainer);
      });

      const bankContainer = document.createElement('div');
      bankContainer.className = 'bank-container';

      const bankTitle = document.createElement('h2');
      bankTitle.innerText = 'Player Bank';
      bankTitle.className = 'bank-title';

      const bankInputContainer = document.createElement('div');
      bankInputContainer.className = 'bank-input-container';

      const bankInputLabel = document.createElement('label');
      bankInputLabel.innerText = 'Change Amount';
      bankInputLabel.className = 'bank-input-label';
      bankInputLabel.setAttribute('for', 'bank-input-box');

      const bankInputBox = document.createElement('input');
      bankInputBox.id = 'bank-input-box';
      bankInputBox.setAttribute('type', 'number');

      const bankInputButton = document.createElement('button');
      bankInputButton.className = 'bank-input-button';
      bankInputButton.innerText = 'Change';

      bankInputButton.addEventListener('click', changeBankAmount);

      const bankAmount = document.createElement('p');
      bankAmount.innerText = 'Bank Amount: $0';
      bankAmount.id = 'bank-amount';

      bankInputContainer.append(bankInputLabel);
      bankInputContainer.append(bankInputBox);
      bankInputContainer.append(bankInputButton);

      bankContainer.append(bankTitle);
      bankContainer.append(bankInputContainer);
      bankContainer.append(bankAmount);

      infoContainer.append(playersInfo);
      infoContainer.append(exmployee1xCardsUsedInfo);
      infoContainer.append(billboardsRemovedInfo);
      infoContainer.append(mapSizeInfo);
      infoSetupContainer.append(infoSetupText);
      infoSetupContainer.append(infoContainer);
  
      currentChainsContainer.append(currentChainsText);
      currentChainsContainer.append(currentChainMarkers);

      afterSetupContainer.append(infoSetupContainer);
      afterSetupContainer.append(currentChainsContainer);
      afterSetupContainer.append(bankContainer);

      setupManagerContainer.append(afterSetupContainer);
    }
  }

  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  }

  const drop = (e, card) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    if (!card.assignedMarkers.includes(data)) {
      let markerClone = document.getElementById(data).cloneNode(true)
      let container = e.target

      markerClone.className = 'assigned-marker-clone'
      markerClone.addEventListener('click', (e) => {
        card.assignedMarkers.splice(card.assignedMarkers.indexOf(data), 1);
        markerClone.remove();
      })

      container.append(markerClone);
      card.assignedMarkers.push(data);
    }
  }

  const changeBankAmount = () => {
    const bankInput = document.getElementById('bank-input-box').value;
    if (bankInput) {
      document.getElementById('bank-amount').innerText = `Bank Amount: $${bankInput}`;
    }
  }

  const getOffset = el => {
    let _x = 0;
    let _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  const renderSvgLineSet = (startingIndex, indexArray) => {
    const startingRenderedEl = employeeCards[startingIndex].renderElement;

    // let startRect = startingRenderedEl.getBoundingClientRect();
    let startRect = getOffset(startingRenderedEl);

    let startX = startRect.left + startingRenderedEl.clientWidth;
    let startY = startRect.top + (startingRenderedEl.clientHeight / 2);

    for (let i = 0; i < indexArray.length; i++) {
      let renderedElement = employeeCards[indexArray[i]].renderElement;

      // let rect = renderedElement.getBoundingClientRect()
      let rect = getOffset(renderedElement);
      let elX = rect.left;
      let elY = rect.top + (renderedElement.clientHeight / 2);

      let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

      line.setAttribute('stroke-width', '2px')
      line.setAttribute('stroke', 'black');
      line.setAttribute('x1', startX);
      line.setAttribute('y1', startY);
      line.setAttribute('x2', elX);
      line.setAttribute('y2', elY);

      line.classList = 'svg-line';

      svgRenderContainer.append(line);
    }
  }

  const renderAllSvgLines = () => {
    renderSvgLineSet(5, [1, 6, 11]);
    renderSvgLineSet(6, [2, 7, 12, 14, 17]);
    renderSvgLineSet(7, [3, 8, 18]);
    renderSvgLineSet(8, [4, 9, 15]);
    renderSvgLineSet(19, [20]);
    renderSvgLineSet(20, [21]);
    renderSvgLineSet(21, [22]);
    renderSvgLineSet(23, [24]);
    renderSvgLineSet(24, [25]);
    renderSvgLineSet(25, [26]);
    renderSvgLineSet(27, [28, 30]);
    renderSvgLineSet(28, [29]);
    renderSvgLineSet(30, [31]);
  }

  renderEmployeeCardes();

  renderMilestoneCards();

  startSetup();

  renderAllSvgLines();
});