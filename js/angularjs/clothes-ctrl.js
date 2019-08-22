app.controller('ClothesCtrl',['$scope', function($scope) {
    $scope.man = [];
    $scope.woman = [];
    $scope.cildren = [];
    $scope.all = [];
    var categoriMan = function(){
        manClothes.forEach(m=>{
           if(m.categori == "body" && m.gender=="m"){
               $scope.man.push(m);
           } 
        });
    };
    categoriMan();

    
}]);
