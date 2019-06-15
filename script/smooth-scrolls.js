<<<<<<< HEAD
var anchorTags=document.querySelectorAll("#header-list a");
for (var i=0;i<anchorTags.length;i++){
    anchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        //prevent default to stop default behavior of anchor tags
    
        var targetSectionId= this.textContent.trim().toLowerCase();
        
        var str=targetSectionId;
        var targetDiv=document.getElementById(str);

        //scroller
        var targetDivCoordinates=targetDiv.getBoundingClientRect();
        var id=setInterval(function(){

            if(targetDivCoordinates.top<=0){
                
                clearInterval(id);
                return;
            }

            if(str=="contact" && targetDivCoordinates.top<=316){
                clearInterval(id);
                return;
            }

           
            window.scrollBy(0,50);  
            targetDivCoordinates=targetDiv.getBoundingClientRect();
           

        },20); 
    });
}
=======
(function(){
    var anchorTags=document.querySelectorAll("#header-list a");
    for (var i=0;i<anchorTags.length;i++){
        anchorTags[i].addEventListener('click',function(event){
            event.preventDefault();
            //prevent default to stop default behavior of anchor tags
        
            var targetSectionId= this.textContent.trim().toLowerCase();
            
            var str=targetSectionId;
            var targetDiv=document.getElementById(str);
    
            //scroller
            var targetDivCoordinates=targetDiv.getBoundingClientRect();
            var id=setInterval(function(){
    
                if(targetDivCoordinates.top<=0){
                    
                    clearInterval(id);
                    return;
                }
    
                if(str=="contact" && targetDivCoordinates.top<=316){
                    clearInterval(id);
                    return;
                }
    
               
                window.scrollBy(0,50);  
                targetDivCoordinates=targetDiv.getBoundingClientRect();
               
    
            },20); 
        });
    }
})();
>>>>>>> animations
