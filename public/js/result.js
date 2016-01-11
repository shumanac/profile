var app = angular.module('resultapp', []);

app.controller('resultcontroler', function ($scope, $http, $interval) {


    $interval(refreshvalue, 5000);

    $scope.smile1Amount = 0;
    $scope.smile2Amount = 0;
    $scope.smile3Amount = 0;
    $scope.smile4Amount = 0;
    $scope.smile5Amount = 0;

    $scope.smile1Amounttemp;
    $scope.smile2Amounttemp;
    $scope.smile3Amounttemp;
    $scope.smile4Amounttemp;
    $scope.smile5Amounttemp;





    function refreshvalue() {

        $scope.smile1Amounttemp = 0;
        $scope.smile2Amounttemp = 0;
        $scope.smile3Amounttemp = 0;
        $scope.smile4Amounttemp = 0;
        $scope.smile5Amounttemp = 0;


        $http.get('/savedata').success(function (response) {

            $scope.allresult = response;
            $scope.totalvote = response.length;


            for (var i = 0; i < response.length; i++) {
                //console.log(response[i].smilevalue);

                if (response[i].smilevalue == 1) {

                    $scope.smile1Amounttemp++;

                    if ($scope.smile1Amounttemp > $scope.smile1Amount) {
                        $scope.smile1Amount = $scope.smile1Amounttemp;
                    }
                }
                if (response[i].smilevalue == 2) {
                    $scope.smile2Amounttemp++;

                    if ($scope.smile2Amounttemp > $scope.smile2Amount) {
                        $scope.smile2Amount = $scope.smile2Amounttemp;
                    }
                }
                if (response[i].smilevalue == 3) {
                    $scope.smile3Amounttemp++;

                    if ($scope.smile3Amounttemp > $scope.smile3Amount) {
                        $scope.smile3Amount = $scope.smile3Amounttemp;
                    }
                }
                if (response[i].smilevalue == 4) {
                    $scope.smile4Amounttemp++;

                    if ($scope.smile4Amounttemp > $scope.smile1Amount) {
                        $scope.smile4Amount = $scope.smile4Amounttemp;
                    }
                }
                if (response[i].smilevalue == 5) {
                    $scope.smile5Amounttemp++;

                    if ($scope.smile5Amounttemp > $scope.smile5Amount) {
                        $scope.smile5Amount = $scope.smile5Amounttemp;
                    }
                }

            }


        });
    };





});