var konami = [38,38,40,40,37,39,37,39,66,65];
var index = 0; 

var Airhorn = function () {
    this.x = Math.random() * $(document).width();
    this.y = Math.random() * $(window).height();

    this.airhorn_number = Airhorn.numAirhorns;
    this.airhorn_id = "airhorn" + this.airhorn_number;
    Airhorn.numAirhorns++;

    this.elem = this.genElement();

};

Airhorn.prototype.dance = function() {
  console.log("Hello, I'm " + this.firstName);
};

Airhorn.prototype.genElement = function() {

    var image = document.createElement("IMG");
    image.alt = "dankness";
    image.setAttribute('class', 'airhorn');
    image.setAttribute('id', this.airhorn_id);
    image.src="/res/airhorn.png";

    $(image).css('top', this.y);
    $(image).css('left', this.x);

    return image;
};

Airhorn.numAirhorns = 0;


$(document).keydown(function(e){
    if(e.which == konami[index]){
        index++;
    }else{
        index = 0; 
    }

    if(index == konami.length){
        konami_entered();
        index = 0;
    }
}
);

function konami_entered(){
    ga('send', 'event', 'konami', 'konami_entered');
    $("body").addClass('comic-sans');
    clippy.load('Clippy', function(agent) {
        agent.show();
        agent.moveTo($(document).width()-400, 50);
        agent.speak("Looks like you're signing up for a hackathon, need any help?");
    });
    air_horns();
}
 function air_horns(){
    var audio = new Audio('/res/darude.mp3'); 
    audio.play();
    
    var airhorn = new Airhorn();
    $("body").append(airhorn.elem);
 }
