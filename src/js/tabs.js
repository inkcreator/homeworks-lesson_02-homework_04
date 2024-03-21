
const earphonesTabCardWrapper = document.querySelector('.earphones').querySelector(".tab__card-wrapper");
const sellersTabCardWrapper = document.querySelector('.sellers').querySelector(".tab__card-wrapper");

const sellersTabBtnWrapper = document.querySelector('.sellers').querySelector(".tab__btn-wrapper");



const cardInfoTopPicksList = [{
  cardTitle: "Беcпроводные наушники №1",
  reviews:100,
  price:32,
},{
  cardTitle: "Беcпроводные наушники №2",
  reviews:130,
  price:95,
},{
  cardTitle: "Беcпроводные наушники №3",
  reviews:88,
  price:123,
}]
const cardInfoWatchesList = [{
  cardTitle: "Беcпроводные наушники №456",
  reviews:100,
  price:32,
},{
  cardTitle: "Беcпроводные наушники №981",
  reviews:130,
  price:95,
},{
  cardTitle: "Беcпроводные наушники №330",
  reviews:88,
  price:123,
}]

function getCards(cardInfoList, elem) {
  const arr = cardInfoList.forEach(cardInfo => {
    const tab = `<div class="tab__card card">
        <div class="card__product">
          <img
            class="card__img"
            src="/src/assets/card__headphons.png"
            alt="card__headphons"
          />
          <div class="card__descr">
            <h4 class="card__text">${cardInfo.cardTitle}</h4>
            <div class="card__rating">
              <img src="/src/assets/red__star.svg" alt="rating" />
              <img src="/src/assets/red__star.svg" alt="rating" />
              <img src="/src/assets/red__star.svg" alt="rating" />
              <img src="/src/assets/red__star.svg" alt="rating" />
              <img src="/src/assets/red__star.svg" alt="rating" />
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
sellersTabBtnWrapper.addEventListener("click",(event)=>{
  const target = event.target
  const emptyWrapper = document.createElement('div')
  emptyWrapper.classList.add('tab__card-wrapper')
  

  const ovalButtons = sellersTabBtnWrapper.querySelectorAll('button')
  ovalButtons.forEach(btn =>{
      btn.classList.remove('active')

  })
  target.classList.add('active')
  if(target.innerText == "Top Picks"){  
      getCards(cardInfoTopPicksList,sellersTabCardWrapper)
  }else{ 
      getCards(cardInfoWatchesList,sellersTabCardWrapper,false)
  }
  
})
getCards(cardInfoTopPicksList,sellersTabCardWrapper)