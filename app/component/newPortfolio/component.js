
define([
    'app',
    '../deletePortfolioMedal/component',
    '../createPortfolioMedal/component',
    '../modifyPortfolioMedal/component',
    '../../js/services/getPortfolioList'
], function (app, deletePortfolioMedal, createPortfolioMedal, modifyPortfolioMedal) {

//    {
//        _id: 서버에서 지정,
//        title: String,
//        pages: Array,
//        data: Date
//    }

    app.controller('newPortfolioController',['$scope', '$http', '$window', '$modal', 'getPortfolioList', function ($scope, $http, $window, $modal, getPortfolioList) {

        // 포트폴리오 목록 변수
        $scope.portfolios = [];

        // 콜백 함수
        $scope.callback = function (data) {
            var stateText;
            // Error
            if(data.returnCode == 'error'){
                stateText = "서버와의 연결이 되지 않았습니다.";
                alert(stateText);
            }
            // Success
            else if (data.returnCode == '000') {
                // 성공 메세지
                stateText = "성공하였습니다.";

                $scope.portfolios = data;
            }
            // Invalid Arguments
            else if (data.returnCode == '001') {
                // 오류 발생 메세지
                stateText = "오류 발생";
                alert(stateText);
            }
            // Not Login
            else if (data.returnCode == '002') {
                // 로그인 안됬다. 메세지
                stateText = "로그인이 안되어있습니다.";
                alert(stateText);
            }
            console.log(stateText);
        };

        // 포트폴리오 리스트 가져오기 함수
        $scope.getPortfolioList = function() {
            getPortfolioList($http, $scope.callback);
        }

        $scope.getPortfolioList();    // 함수 실행

        // 더미 데이터
        $scope.portfolios = [
            { _id: 'danger', title: 'pofo#1', description : 'description1', data: 'date', pages: []},
            { _id: 'danger', title: 'pofo#2', description : 'description2', data: 'date', pages: []}
        ];

        // 포트폴리오 삭제 함수
        $scope.deletePortfolio = function (index) {
            var modalInstance = $modal.open(deletePortfolioMedal);
            modalInstance.result.then(function () {
                // OK
                $scope.portfolios.splice(index, 1);
            }, function () {
                // Cancel
                console.log('Modal dismissed at: ' + new Date());
            });
        };

        // 포트폴리오 생성 함수
        $scope.createPortfolio = function() {
            var modalInstance = $modal.open(createPortfolioMedal);
            modalInstance.result.then(function (portfolio) {
                // OK
                $scope.portfolios.push(portfolio);
                console.log(portfolio.pages.length + ", des : " + portfolio.description);
            }, function () {
                // Cancel
                console.log('Modal dismissed at: ' + new Date());
            });
        }

        // 포트폴리오 정보 변경 함수
        $scope.modifyPortfolio = function(index) {
            var modalInstance = $modal.open(modifyPortfolioMedal);
            modalInstance.result.then(function (portfolio) {
                // OK
                $scope.portfolios[index].title = portfolio.title;
                $scope.portfolios[index].description = portfolio.description;
            }, function () {
                // Cancel
                console.log('Modal dismissed at: ' + new Date());
            });

        }

        // 포트폴리오 에디터 이동 함수
        $scope.goToPortfolioEditor = function (index) {
            var href = 'portfolioEditor.html';
            $window.location.href = href;

            // $scope.portfolios[index]를 에디터에 전달해야함
        }

    }]);

    app.directive('newPortfolio', function () {
        return {
            restrict: 'E',
            templateUrl: require.toUrl('component/newPortfolio/template.html'),
            controller: 'newPortfolioController'
        };
    });

});