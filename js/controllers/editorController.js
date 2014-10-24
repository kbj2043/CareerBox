/**
 * Created by gimbyeongjin on 14. 10. 23..
 */
define([
    'jquery',
    'angular',
    'app',
    'directives/draggable',
    'directives/tmplDraggable',
    'services/SavePaper',
    'services/DealWithMemberReturn',
    'services/httpLogout'
], function(
    $,
    ng,
    app
    ) {
    app.controller('editorController', ['$scope', '$http', '$compile', 'httpLogout', 'serverURL', 'DealWithMemberReturn', 'SavePaper', function ($scope, $http, $compile, httpLogout, serverURL, DealWithMemberReturn, SavePaper) {
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

        $( document ).ready(function() {
            console.log('ready');
            getItemArray();
        });

        $scope.itemArray = [];
        $scope.itemIndex = 1;


        $scope.save = function () {

            var data = JSON.stringify({items: setItemArray()});
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

        function setItemArray() {
            var itemArray = [];

            var obj;
            for (var i = 0; i < $scope.itemArray.length; i++) {
                obj = $scope.itemArray[i].value;

                var item = new Object();
                item._id = $scope.itemArray[i].key;
                item.type = obj[0].getAttribute("type");
                item.pos = {x: obj.position().left, y: obj.position().top};
                item.size = {width: obj.width(), height: obj.height()};

                itemArray.push(item);
            }

            return itemArray;
        }


        function createElement(item){
            var text = "<div draggable id=\"text\" class=\"element\" idx="+item._id+"><h3>text</h3></div>";
            var image = "<div draggable id=\"image\" class=\"element\" idx="+item._id+"><h3>image</h3></div>";

            var addObj;
            if(item.type == 'text'){
                addObj = text;
            }else if(item.type == 'image'){
                addObj = image;
            }

            $('.template-area').append(addObj);

            $compile($('.template-area'))($scope);


        }

        function getItemArray(){
            var itemArray = [{"_id":1,"type":"text","pos":{"x":407,"y":130},"size":{"width":146,"height":146}},{"_id":2,"type":"image","pos":{"x":612,"y":120},"size":{"width":146,"height":146}}];

            for(var i = 0; i < itemArray.length; i++){
                createElement(itemArray[i]);
            }
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