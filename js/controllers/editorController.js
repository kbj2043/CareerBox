/**
 * Created by gimbyeongjin on 14. 10. 23..
 */
define([
    'jquery',
    'angular',
    'app',
    'directives/tmplDraggable',
    'directives/draggable',
    'services/SavePaper',
    'services/LoadPaper',
    'services/httpLogout',
    'services/memberCallback'
], function(
    $,
    ng,
    app
    ) {
    app.controller('editorController', ['$scope', '$http', 'httpLogout', 'serverURL', 'SavePaper', 'LoadPaper', 'memberCallback', function ($scope, $http, httpLogout, serverURL, SavePaper, LoadPaper, memberCallback) {
        //member
        $scope.errors = [];
        $scope.msgs = [];

        $( document ).ready(function() {
            console.log('ready');
            LoadPaper($http, function (data) {
                console.log(data.result);
                loadPaper(data.result);
            });
        });

        $scope.logout = function () {
            // 로그아웃 함수
            httpLogout($scope.callback);
        };

        $scope.callback = function(data){

            var href = "index.html";

            memberCallback($scope, data, href);

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

        function savePaper() {
            var itemArray = [];

            for (var i = 0; i < $scope.itemArray.length; i++) {
                itemArray.push($scope.itemArray[i].value);
            }

            return itemArray;
        }


        function loadElement(item){
            console.log(item);
            var text = "<div draggable id=\"text\" class=\"element\" _id="+item._id+" type=\"text\"><h3>text</h3></div>";
            var image = "<div draggable id=\"image\" class=\"element\" _id="+item._id+" type=\"image\"><h3>image</h3></div>";

            var addObj;
            if(item.type == 'text'){
                addObj = text;
            }else if(item.type == 'image'){
                addObj = image;
            }

            $('.template-area').append(addObj);

            $compile($('.template-area'))($scope);


        }

        function loadPaper(data){
            var itemArray = data;

            var item;
            for(var i = 0; i < itemArray.length; i++){
                item = itemArray[i];
                $scope.itemArray.push(item);
                loadElement(item);
            }
        }

        // Dropzone에 Drop 되었을 때, Item을 ItemArray에 추가하거나 변경함.
        $scope.pushElement = function (ui, addElement) {
            var _id = ui.draggable['0'].getAttribute("_id");
            if (_id == '-1') {
                addElement[0].setAttribute("type", ui.draggable['0'].getAttribute("id"));
                addElement[0].setAttribute("_id", $scope.itemIndex);
                var element = new Object();
                element.key = $scope.itemIndex;
                element.value = createItem($scope.itemIndex, addElement);
                $scope.itemArray.push(element);
                $scope.itemIndex++;
            } else {
                for (var i = 0; i < $scope.itemArray.length; i++) {
                    if (_id == $scope.itemArray[i].key) {
                        addElement[0].setAttribute("status", "edit");
                        $scope.itemArray[i].value = createItem(addElement);
                    }
                }
            }
        }

        function createItem(_id, obj){
            var item = new Object();
            item._id = _id;
            item.type = obj[0].getAttribute("type");
            item.pos = {x: obj.position().left, y: obj.position().top};
            item.size = {width: obj.width(), height: obj.height()};

            return item;
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