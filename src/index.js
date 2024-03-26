const cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' }
  ];
  
  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  
  window.addEventListener('load', (event) => {
    let html = '';
  
    memoryGame.cards.forEach((pic) => {
      html += `
        <div class="card" data-card-name="${pic.name}">
          <div class="back" name="${pic.img}"></div>
          <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
        </div>
      `;
    });
  
  
    document.querySelector('#memory-board').innerHTML = html;
  
  
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => {
  
  
        memoryGame.pickedCards.push(card)
  
        card.classList.add('turned');
  
        if (memoryGame.pickedCards.length === 2) {
          const card1Name = memoryGame.pickedCards[0].dataset.cardName;
          const card2Name = memoryGame.pickedCards[1].dataset.cardName;
  
          const ifPair = memoryGame.checkIfPair(card1Name, card2Name);
  
     
          if (ifPair) {
  
            memoryGame.pickedCards = []
  
  
          } else {
  
            setTimeout(() => {
  
              memoryGame.pickedCards.forEach((eachCard) =>
                eachCard.classList.remove('turned')
              );
  
              memoryGame.pickedCards = []
            }, 1000);
  
          }
  
        }
  
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
        document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
  
        const finishedGame = memoryGame.checkIfFinished()
  
        if (finishedGame) {
  
          console.log('Game Over')
  
        }
      });
    });
  });