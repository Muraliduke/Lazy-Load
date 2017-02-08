boxoffice.controller('confirmcontroller',function($scope,$timeout){

 $scope.myObj={
            
    "position": "fixed",
	"left": "0px",
	"top":"0px",
	"width": "100%",
	"height": "100%",
	"z-index": "9999",
	"background": "url(./images/Preloader_8.gif) center no-repeat #fff","opacity":"0.5"
        }
 console.log($scope.myObj)
  
    
var fun=function(){
       console.log("me");
    $scope.myObj.display="none";
        
   }

$timeout(fun, 3000);
})
