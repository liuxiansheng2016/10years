 //创建模块，依赖ui.router模块
    var myApp = angular.module('myApp',['ui.router']);
    //在config中配置路由，注入$stateProvider,$urlRouterProvider两个服务
    myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        //      配置路由对应的页面url地址
      $stateProvider
        .state('1',{
          url:'', //默认页
          templateUrl:'1.html'
        })
        .state('2',{
          url:'/2',
          templateUrl:'2.html',
        })
     
    }]);
    //创建控制器
    myApp.controller('firstController', ['$scope','$http', function($scope,$http){

      //定义方法
      $scope.getData = function() {
        //get请求的快捷方式
        var promise = $http.get('data.json');
          promise.success(function(data) {
          alert('请求成功');
          $scope.data = data; 
           $('#show').fadeOut(1000);
        });

        promise.error(function() {
          alert('请求失败');
        });


 
      }

      
      $scope.getData();



 // $scope.data = [
 //            {
 //              target:'好好练字一百天',
 //              time:'2016年02月10日进行中',
 //              title:'每天临摹一张纸',
 //              p1:40,
 //              p2:80,
 //              p3:20
            
 //            },
 //           {
 //              target:'出去旅行',
 //              time:'2016年06月10日进行中',
 //              title:'去不曾到过的地方',
 //              p1:40, 
 //              p2:40, 
 //              p3:20
 //            },
 //            {
 //              target:'找个对象',
 //              time:'2017年7月10日之后中',
 //              title:'。。。。。',
 //              p1:40,
 //              p2:80,
 //              p3:20
          
 //            },
 //           {
 //              target:'给父母买个礼物',
 //              time:'第一个月的工资',
 //              title:'少花父母的钱',
 //              p1:40,
 //              p2:80,
 //              p3:20
 //            },
 //             {
 //              target:'学无止境',
 //              time:'2017年的开始',
 //              title:'好好学习天天向上',
 //              p1:40,
 //              p2:80,
 //              p3:20
 //            },
 //             {
 //              target:'去看看曾经',
 //              time:'2017年的开始',
 //              title:'相忘于江湖',
 //              p1:40,
 //              p2:80,
 //              p3:20
 //            },
 //             {
 //              target:'做一个完美的自己',
 //              time:'2017年的开始',
 //              title:'有很多的毛病',
 //              p1:40,
 //              p2:80,
 //              p3:20
          
 //            },
 //             {
 //              target:'成熟一点',
 //              time:'2017年的开始',
 //              title:'往事如过往，不复存在',
 //              p1:40,
 //              p2:80,
 //              p3:20
          
 //            },
 //             {
 //              target:'她说',
 //              time:'2017年的开始',
 //              title:'人生何处不相逢',
 //              p1:40,
 //              p2:80,
 //              p3:20
          
 //            },
            
 //        ];  
    }]);