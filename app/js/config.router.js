app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
$urlRouterProvider
    .otherwise('/app');
$stateProvider
    //登录页
    .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        resolve: {
            deps: ['$ocLazyLoad',
                function( $ocLazyLoad ){
                    return $ocLazyLoad.load(['js/controllers/loginController.js']);
                }]
        }
    })

    //首页
    .state('app', {
        url: '/app',
        templateUrl: 'tpl/home.html'
    })
}]);