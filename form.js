class Form{
    constructor(){}

  display(){
      var title=createElement('h2');
      title.html ("CAR RACING GAME");
      title.position(130,0);
      var input = createInput("name");
      var button = createButton('play');
      input.position(390,160);
      button.position(250,245);

      button.mousePressed(function(){
          input.hide();
          button.hide();
          var name = input.value();
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount);
        var greeting = createElement('h3')
        greeting.html("Hello "+name)
        greeting.position(130,180);
        
      });
  } 

}