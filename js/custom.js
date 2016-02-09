var konami = [38,38,40,40,37,39,37,39,66,65];
var index = 0; 

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
    $("body").addClass('comic-sans');
    clippy.load('Clippy', function(agent) {
        agent.show();
        agent.moveTo($(document).width()-400, 50);
        agent.speak("Looks like you're signing up for a hackathon, need any help?");
    });
}
