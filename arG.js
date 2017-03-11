exports.aritGeo = function (arr){
if (arr.length===0){
	        return 0;
    }
    var d = arr[1] - arr[0];
    var r = arr[1] / arr[0];

    var aProg = 1;
    var gProg = 1;

    for(var i = 0; i < arr.length - 1; i++){
       if( arr[i + 1] - arr[i] !== d){
         aProg = 0;
       }
       if(arr[i + 1] /arr[i] !== r){
         gProg = 0;
       } 
      
    }

   if(aProg === 1){
    return "Arithmetic";
   }else if(gProg === 1){
      return"Geometric";  
    }else{
      return -1;
    }
}

  

