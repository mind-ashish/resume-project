
//fetching things...........
var divs=document.querySelectorAll(".inner");  
//intial & final widths array for animation
var initialWidths=new Array(divs.length);
for (var i=0;i<initialWidths.length;i++){
    initialWidths[i]=0;  //intial width of every div =0.
}
var finalWidths=new Array(divs.length);  //final width of every div
for (var i=0;i<finalWidths.length;i++){
    finalWidths[i]=divs[i].getAttribute("data-width-of-bar");  
}

//animation fn.................
//animation: it takes intial width and final width of the ith div which is visible. , and the div itself 

//suppose ith div is now visible.
function animation(div,initialWidth,finalWidth){

    function stop(id){
        initialWidth++;
        if(initialWidth>=finalWidth){
            clearInterval(id);
        }
    }
    var id=setInterval(function(){
        div.style.width=initialWidth+"%";      
        stop(id);
    },10); 

}

// fn on scrolling.................................................
var doneOnce=new Array(divs.length);
for (let i=0;i<divs.length;i++){
    doneOnce[i]=false;  
}

function onScrolling(){
for(let i=0;i<divs.length;i++){
    let ithDiv=divs[i];
    let initialWidth=initialWidths[i];
    let finalWidth=finalWidths[i];
    let coordinate=ithDiv.getBoundingClientRect();
    
    if(coordinate.top < window.innerHeight){
        //if visible
        if(doneOnce[i]==false){
            animation(ithDiv,initialWidth,finalWidth);
            doneOnce[i]=true;
        }
    }else{
        //if not visible or shifted from visible to non visible.
        doneOnce[i]=false;
        initialWidth[i]=0;
    }
}
}


//eventlistener on window for scroll................................

window.addEventListener('scroll',onScrolling);
//call fn onscrolling on each scroll.
 




