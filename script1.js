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
    inStock: true
  },
  {
    id: 1,
    path: './assets/images/milestones/first_to_train_someone.png',
    inStock: true
  },
  {
    id: 2,
    path: './assets/images/milestones/first_billboard_placed.png',
    inStock: true
  },
  {
    id: 3,
    path: './assets/images/milestones/first_to_throw_away_drink_food.png',
    inStock: true
  },
  {
    id: 4,
    path: './assets/images/milestones/first_burger_produced.png',
    inStock: true
  },
  {
    id: 5,
    path: './assets/images/milestones/first_burger_marketed.png',
    inStock: true
  },
  {
    id: 6,
    path: './assets/images/milestones/first_waitress_played.png',
    inStock: true
  },
  {
    id: 7,
    path: './assets/images/milestones/first_pizza_produced.png',
    inStock: true
  },
  {
    id: 8,
    path: './assets/images/milestones/first_pizza_marketed.png',
    inStock: true
  },
  {
    id: 9,
    path: './assets/images/milestones/first_to_have_$20.png',
    inStock: true
  },
  {
    id: 10,
    path: './assets/images/milestones/first_errand_boy_played.png',
    inStock: true
  },
  {
    id: 11,
    path: './assets/images/milestones/first_drink_marketed.png',
    inStock: true
  },
  {
    id: 12,
    path: './assets/images/milestones/first_to_have_$100.png',
    inStock: true
  },
  {
    id: 13,
    path: './assets/images/milestones/first_cart_operator_played.png',
    inStock: true
  },
  {
    id: 14,
    path: './assets/images/milestones/first_airplane_campaign.png',
    inStock: true
  },
  {
    id: 15,
    path: './assets/images/milestones/first_to_lower_prices.png',
    inStock: true
  },
  {
    id: 16,
    path: './assets/images/milestones/first_to_pay_$20_or_more_in_salaries.png',
    inStock: true
  },
  {
    id: 17,
    path: './assets/images/milestones/first_radio_campaign.png',
    inStock: true
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const employeeCardContainer = document.getElementById('employee-card-container');
  const milestoneCardContainer = document.getElementById('milestone-card-container');

  const toggleStockOverlay = (event, card) => {
    console.log('running');
    card.overlayElement.style.display = !card.inStock ? 'none' : 'flex';
    card.inStock = !card.inStock;
  }

  employeeCards.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'employee-single-card-container';

    const cardImgContainer = document.createElement('div');
    cardImgContainer.className = 'employee-card-img-container';

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', card.path);
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

    cardImgContainer.append(cardImg);

    employeeCardContainer.append(cardContainer);
  })

  milestoneCards.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'milestone-single-card-container';

    const cardImgContainer = document.createElement('div');
    cardImgContainer.className = 'milestone-card-img-container';

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', card.path);
    cardImg.className = 'milestone-card-img';

    const cardStockOverlay = document.createElement('div');
    cardStockOverlay.className = 'milestone-card-stock-overlay'

    const cardStockOverlayText = document.createElement('p');
    cardStockOverlayText.innerText = 'Out of Stock';
    cardStockOverlayText.className = 'milestone-card-stock-overlay-text'

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

    cardImgContainer.append(cardImg);

    milestoneCardContainer.append(cardContainer);
  })
});