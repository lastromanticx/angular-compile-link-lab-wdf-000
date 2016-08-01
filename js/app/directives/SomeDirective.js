function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
    compile: function($element,$attrs){
      return {
        pre: function(scope,element,attrs){
          console.log(attrs)
        },
        post: function($scope,$element,$attrs){

        }
      };
    },
		link: function (scope, elem, attrs) {

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
