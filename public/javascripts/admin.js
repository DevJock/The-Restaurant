angular
    .module("application", ["ui.router", "ngResource"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("admin", {
                url: "/admin.html",
                views: {
                    form: {
                        templateUrl: "pages/default.html"
                    }
                }
            })
            .state(
                "foodItem", {
                    url: "/admin.html",
                    form: {
                        main: {
                            templateUrl: "pages/imageUpload.html.html"
                        }
                    }
                }
            )
        $locationProvider.html5Mode(true);
    })
    .controller("adminViewController", function ($scope, $http) {

    })
       
    .controller("navBarController", function ($scope, $http) {
        $http.get('/login/').then(function callBack(response) {
            if (response.data.uname) {
                $scope.currentUser = response.data.uname;
            }
            if ($scope.currentUser == "null") {
                $scope.currentUser = "Sign In";
            }
        });
    });





    $(document).ready(function() {
    var brand = document.getElementById('logo-id');
    brand.className = 'attachment_upload';
    brand.onchange = function() {
        document.getElementById('fakeUploadLogo').value = this.value.substring(12);
    };
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
                $('.img-preview').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#logo-id").change(function() {
        readURL(this);
    });
});


