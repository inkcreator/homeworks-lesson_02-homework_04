
const earphonesTabCardWrapper = document.querySelector('.earphones').querySelector(".tab__card-wrapper");
const sellersTabCardWrapper = document.querySelector('.sellers').querySelector(".tab__card-wrapper");

const sellersTabBtnWrapper = document.querySelector('.sellers').querySelector(".tab__btn-wrapper");

sellersTabBtnWrapper.addEventListener("click",(event) => {
  const target = event.target
  const ovalButtons = sellersTabBtnWrapper.querySelectorAll('button')
  ovalButtons.forEach(btn => {
    btn.classList.remove('active')
  })
  target.classList.add('active')
  
} )

const earphonesTabBtnWrapper = document.querySelector('.earphones').querySelector(".tab__btn-wrapper");

earphonesTabBtnWrapper.addEventListener("click",(event) => {
  const target = event.target
  const ovalButtons = earphonesTabBtnWrapper.querySelectorAll('button')
  ovalButtons.forEach(btn => {
    btn.classList.remove('active')
  })
  target.classList.add('active')
  
} )

const cardInfoList = [
  {
    cardTitle: "Наушники №1",
    reviews: 100,
    price: 322,
  },
  {
    cardTitle: "Наушники №2",
    reviews: 95,
    price: 182,
  },
  {
    cardTitle: "Наушники №3",
    reviews: 88,
    price: 123,
  },
];

function getCards(cardInfoList, elem) {
  const arr = cardInfoList.forEach(cardInfo => {
    const tab = `<div class="tab__card card">
        <div class="card__product">
          <img
            class="card__img"
            src="./assets/card__headphons.png"
            alt="card__headphons"
          />
          <div class="card__descr">
            <h4 class="card__text">${cardInfo.cardTitle}</h4>
            <div class="card__rating">
              <img src="./assets/red__star.svg" alt="rating" />
              <img src="./assets/red__star.svg" alt="rating" />
              <img src="./assets/red__star.svg" alt="rating" />
              <img src="./assets/red__star.svg" alt="rating" />
              <img src="./assets/red__star.svg" alt="rating" />
              <p class="card__rating-count">${cardInfo.reviews} Reviews</p>
            </div>
            <p class="card__price">$${cardInfo.price}</p>
          </div>
        </div>
        <button class="card__btn button-card">Add to cart</button>
        <div class="card__discount">
          <p>Save 60%</p>
        </div>
        </div>`;
    elem.insertAdjacentHTML("beforeend", tab);
  });
}
getCards(cardInfoList, sellersTabCardWrapper);

getCards(cardInfoList, earphonesTabCardWrapper);