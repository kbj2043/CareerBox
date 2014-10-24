/**
 * Created by gimbyeongjin on 14. 10. 23..
 */
define([
    'jquery',
    'angular',
    'app',
    'directives/draggable',
    'services/SavePaper',
    'services/DealWithMemberReturn',
    'services/httpLogout'
], function(
    $,
    ng,
    app
    ) {
    app.controller('editorController', ['$scope', '$http', 'httpLogout', 'serverURL', 'DealWithMemberReturn', 'SavePaper', function ($scope, $http, httpLogout, serverURL, DealWithMemberReturn, SavePaper) {
        //member
        $scope.errors = [];
        $scope.msgs = [];

        $scope.logout = function () {
            // 로그아웃 함수
            httpLogout($scope.callback);
        };

        $scope.callback = function(data){
            DealWithMemberReturn($scope, data, "index.html");
        };

        $scope.itemArray = [];
        $scope.itemIndex = 1;


        $scope.save = function () {

            var data = JSON.stringify({items: getItemDao()});
            SavePaper($http, data, function (resultCode) {
                console.log(resultCode);
                if (resultCode == 000) {
                    alert('Success');
                } else if (resultCode === 001) {
                    alert('Invalid Arguments');
                } else if (resultCode === 002){
                    alert('Not Login');
                    // login 페이지로 이동
                }
            });
        }

        function getItemDao() {
            var itemDaoArray = [];

            var obj;
            for (var i = 0; i < $scope.itemArray.length; i++) {
                obj = $scope.itemArray[i].value;

                var itemDao = new Object();
                itemDao._id = $scope.itemArray[i].key;
                itemDao.type = obj[0].getAttribute("type");
                itemDao.pos = {x: obj.position().left, y: obj.position().top};
                itemDao.size = {width: obj.width(), height: obj.height()};

                itemDaoArray.push(itemDao);
            }

            return itemDaoArray;
        }

        $scope.pushElement = function (ui, addElement) {
            var idx = ui.draggable['0'].getAttribute("idx");
            if (idx == -1) {
                addElement[0].setAttribute("type", ui.draggable['0'].getAttribute("id"));
                addElement[0].setAttribute("idx", $scope.itemIndex);
                var item = new Object();
                item.key = $scope.itemIndex;
                item.value = addElement;
                $scope.itemArray.push(item);
                $scope.itemIndex++;
            } else {
                for (var i = 0; i < $scope.itemArray.length; i++) {
                    if (idx == $scope.itemArray[i].key) {
                        $scope.itemArray[i].value = addElement;
                    }
                }
            }
        }

        //This makes an element Droppable
        $('.template-area').droppable({
            activeClass: "drop-area",
            drop: function (e, ui) {            // 드롭될 경우
                var addElement = ui.helper.clone(); // 객체의 복사된 개체를 addElement에 복사
                ui.helper.remove();                 // 객체의 복사된 개체를 삭제

                addElement.draggable({              // addElement를 재정의
                    helper: 'original',             // 복사하지 않음.
                    cursor: 'move',                 //
                    tolerance: 'fit',               //
                    containment: this            // 엘레먼트 내에서만 움직일 수 있다.
                });

                addElement.appendTo(this);       // addElement를 엘레먼트내에 추가

                $scope.pushElement(ui, addElement);
            }
        });
    }]);
});