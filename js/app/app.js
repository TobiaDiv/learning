angular.module("myApp",["ui.router","ngMaterial"])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("app",{
            url:"/app",
            views:{
                main:{
                    templateUrl:"templates/main.html",
                    controller:"appCtrl"
                }
            }
        })

        .state("app.home",{
            url:"/home",
            views:{
                sub:{
                    templateUrl:"templates/home.html",
                    controller:"homeCtrl"
                }
            }
        })
        .state("app.courses",{
            url:"/courses",
            views:{
                sub:{
                    templateUrl:"templates/courses.html",
                    controller:"coursesCtrl"
                }
            }
        })     

        .state("app.contact",{
            url:"/contact",
            views:{
                sub:{
                    templateUrl:"templates/contact.html",
                    controller:"contactCtrl"
                }
            }
        })

        .state("app.course",{
            url:"/course",
            views:{
                sub:{
                    templateUrl:"templates/course.html",
                    controller:"courseCtrl"
                }
            }
        })
    $urlRouterProvider.otherwise("/app/home")

})


