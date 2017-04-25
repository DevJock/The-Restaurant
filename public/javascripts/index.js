angular
    .module("application", ["ui.router", "ngResource"])
    .controller("aboutUsViewController", function ($scope, $http) {

    })
    .controller("navBarController", function ($scope, $http) {
        $http.get('/login/').then(function callBack(response) {
            if (response.data.uname) {
                $scope.currentUser = response.data.uname;
                $scope.signOutStatus = "Sign Out";
            }
            if ($scope.currentUser == "null") {
                $scope.currentUser = "Sign In";
                $scope.signOutStatus = "";
            }
        });

        $scope.signOutIfPossible = function () {
            $http.get("login/logout").then(function callBack(data) {
                if (data.data.code == 200) {
                    setTimeout(function () {
                        window.location = 'index.html'
                    }, 0);
                }
            });
        }

    });


//////--------------------------------------------------------
