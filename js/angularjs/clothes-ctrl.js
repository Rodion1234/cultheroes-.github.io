app.controller('ClothesCtrl', ['$scope', function ($scope) {
    $scope.manBody = [];
    $scope.manLeg = [];
    $scope.manFootwear = [];

    $scope.womanBody = [];
    $scope.womanLeg = [];
    $scope.womanFootwear = [];

    $scope.childrenBody = [];
    $scope.childrenLeg = [];
    $scope.childrenFootwear = [];

    $scope.allBody = [];
    $scope.allLeg = [];
    $scope.allFootwear = [];

//    $scope.hide = true;
     
    $scope.hide = function(id){
        
        var index = $scope.allBody.findIndex(x => x.id === id);
        if($scope.allBody[index].hide===true){
            $scope.allBody[index].hide=false;
        }else $scope.allBody[index].hide=true;
    };

    var categoriMan = function () {

        manClothes.forEach(m => {
            //man
            if (m.categori == "body" && m.gender == "m") {
                $scope.manBody.push(m);
            }
            if (m.categori == "leg" && m.gender == "m") {
                $scope.manLeg.push(m);
            }
            if (m.categori == "footwear" && m.gender == "m") {
                $scope.manFootwear.push(m);
            }
            //woman
            if (m.categori == "body" && m.gender == "w") {
                $scope.womanBody.push(m);
            }
            if (m.categori == "leg" && m.gender == "w") {
                $scope.womanLeg.push(m);
            }
            if (m.categori == "footwear" && m.gender == "w") {
                $scope.womanFootwear.push(m);
            }
            //children
            if (m.categori == "body" && m.gender == "c") {
                $scope.childrenBody.push(m);
            }
            if (m.categori == "leg" && m.gender == "c") {
                $scope.childrenLeg.push(m);
            }
            if (m.categori == "footwear" && m.gender == "c") {
                $scope.childrenFootwear.push(m);
            }



        });
        $scope.allBody = $scope.manBody.concat($scope.womanBody).concat($scope.childrenBody);
        $scope.allLeg = $scope.manLeg.concat($scope.womanLeg).concat($scope.childrenLeg);

        $scope.allFootwear = $scope.manFootwear.concat($scope.womanFootwear).concat($scope.childrenFootwear);
    };
    categoriMan();


}]);
