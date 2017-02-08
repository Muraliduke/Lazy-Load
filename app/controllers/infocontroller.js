boxoffice.controller('infocontroller',function($scope,$location,$timeout){

$scope.pagechange=function(){
        $timeout(fun, 3000);
}

 
    var fun=function(){
        console.log("duke");
        $location.path('/confirm');
        
       
    }
    
})
