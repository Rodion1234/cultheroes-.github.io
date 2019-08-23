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
    
    $scope.cart = [];

    $scope.addToCart = function(clothes){
//        if($scope.cart.co)
        $scope.cart.push(clothes);
//         $scope.$apply();
    }

    $scope.returnCart =function(){
        return $scope.cart;
    }
    $scope.hide = function (id, size) {

        var index = $scope.womanBody.findIndex(x => x.id === id);
        if (checkSize(index, $scope.womanBody, size))  return;

        var index = $scope.womanLeg.findIndex(x => x.id === id);
        if (checkSize(index, $scope.womanLeg, size))  return;

        var index = $scope.womanFootwear.findIndex(x => x.id === id);
        if (checkSize(index, $scope.womanFootwear, size))  return;

        var index = $scope.allBody.findIndex(x => x.id === id);
        if (checkSize(index, $scope.allBody, size))  return;

        var index = $scope.allLeg.findIndex(x => x.id === id);
        if (checkSize(index, $scope.allLeg, size))  return;

        var index = $scope.allFootwear.findIndex(x => x.id === id);
        if (checkSize(index, $scope.allFootwear, size))  return;

        var index = $scope.manBody.findIndex(x => x.id === id);
        if (checkSize(index, $scope.manBody, size))  return;

        var index = $scope.manLeg.findIndex(x => x.id === id);
        if (checkSize(index, $scope.manLeg, size))  return;

        var index = $scope.manFootwear.findIndex(x => x.id === id);
        if (checkSize(index, $scope.manFootwear, size))  return;

        var index = $scope.childrenBody.findIndex(x => x.id === id);
        if (checkSize(index, $scope.childrenBody, size))  return;

        var index = $scope.childrenLeg.findIndex(x => x.id === id);
        if (checkSize(index, $scope.childrenLeg, size))  return;

        var index = $scope.allFootwear.findIndex(x => x.id === id);
        if (checkSize(index, $scope.allFootwear, size))  return;

    };

    function checkSize(index, masClothes, size) {
        var flag = false;
        if (index > -1) {
            if (masClothes[index].hide === true) {
                masClothes[index].hide = false;
            } else masClothes[index].hide = true;
            if (typeof (size) != 'undefined') {
                masClothes[index].sizeNow = size;
            }
            flag = true;
        }
        return flag;
    }

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
//        $scope.cart = $scope.allLeg;
    };
    categoriMan();


}]);
