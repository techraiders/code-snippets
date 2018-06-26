module.directive('fileModel', ['$parse', function ($parse) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var model = $parse(attrs.fileModel),
              modelSetter = model.assign;

              element.on('change', function () {
                scope.$apply(function () {
                  modelSetter(scope, element[0].files[0]);
                });
              });
        }
      };
      
    }]);
