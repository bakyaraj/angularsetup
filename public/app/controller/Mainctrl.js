(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .controller('ExampleController', ExampleController);

    ExampleController.$inject = ['$scope','$http','$injector', 'fancytreeFactory'];

    function ExampleController($scope,$http,$injector, fancytreeFactory) {
        $http.get("test.json").then(function(response) {
            $scope.fancyData = response.data.data;
        });

        //Once i use this this response i am getting some error cause fancytreeFactory tree configuration differnt form json formate
        fancytreeFactory.setData([
            {title: "Node 1", key: "1"},
            {title: "Folder 2", key: "2", folder: true, children: [
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.2", key: "4"}
            ]},
                        {title: "Folder 2", key: "2", folder: true, children: [
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.2", key: "4"}
            ]}


        ], 'exampleFancytree');

        fancytreeFactory.setMethods({
            "select": function (event, data) {
                var ExampleService = $injector.get('ExampleService');
                var node = data.node;

                if (node.isSelected()) {
                    ExampleService.doSomething(node.title);
                } else {
                    ExampleService.doSomethingElse(node.title);
                }
            }
        }, 'exampleFancytree');
    }

})();

