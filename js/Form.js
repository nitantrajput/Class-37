class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Enter Your Name");
    this.button = createButton('Start');
    this.greeting = createElement('h3');
  }
  hide(){
    this.button.hide();
    this.greeting.hide();
    this.input.hide();
  }
  display(){
    //var title = createElement('h2')
    this.title.html("Multiplayer Car Racing Game");
    this.title.position(50, 0);
    
    //var input = createInput("Enter Your Name");
    //var button = createButton('Start');
    
    this.input.position(130, 160);
    this.button.position(250, 300);

    this.button.mousePressed(() =>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name);
      this.greeting.position(130, 160);
    });

  }
}
