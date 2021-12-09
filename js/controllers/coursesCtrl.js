angular.module("myApp")

.controller("coursesCtrl",function($scope,$rootScope){
    $rootScope.courses=
    [
        {name:"English",img:'img/veden.webp',price:299.99,type:"img/lang.jpg",like:4},
        {name:"Arabic",img:'img/veda.webp',price:649.99,type:"img/lang.jpg",like:7},
        {name:"French",img:'img/vedf.webp',price:499.99,type:"img/lang.jpg",like:9},
        {name:"Japanese",img:'img/vedj.webp',price:799.99,type:"img/lang.jpg",like:6},
        {name:"Botany",img:'img/vedb.webp',price:899.99,type:"img/bio.jpg",like:7},
        {name:"Biochemistry",img:'img/vedb2.webp',price:1249.99,type:"img/bio.jpg",like:8},
        {name:"Ecology",img:'img/vede.webp',price:499.99,type:"img/bio.jpg",like:4},
        {name:"Physiology",img:'img/vedp.webp',price:899.99,type:"img/bio.jpg",like:5},
        {name:"Games Divoloping",img:'img/vedg.webp',price:379.99,type:"img/soft.jpg",like:10},
        {name:"Web Divoloping",img:'img/vedw.webp',price:599.99,type:"img/soft.jpg",like:9},
        {name:"Mobile Divolping",img:'img/vedm.webp',price:389.99,type:"img/soft.jpg",like:3},
        {name:"Desktop Divoloping",img:'img/vedd.webp',price:429.99,type:"img/soft.jpg",like:7},
    ]

    $rootScope.ev=function(event){
    event.preventDefault()
    }

    $rootScope.card = 0;

    $scope.cardP = function(){
    $rootScope.card++
    }

    $scope.inc = function(index){
    $scope.courses[index].like++
    }

    $scope.mini = function(index){
        if($scope.courses[0][index].like==0){
        $scope.courses[0][index].like = 0
        }
        else if($scope.courses[1][index].like==0){
        $scope.courses[1][index].like
        }
        else{
        $scope.courses[0][index].like--
        $scope.courses[1][index].like--
        }
    }

    $rootScope.send=function(course){
        $rootScope.img=course.img
        $rootScope.name=course.name
        $rootScope.type=course.type
        $rootScope.price=course.price
        
    }
})
