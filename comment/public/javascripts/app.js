
angular.module('comment', [])
  .controller('MainCtrl', ['$scope','$http', controller]);

function controller($scope,$http){
  $scope.addComment = function() {
    if($scope.formContent === '') { return; }
    console.log("In addComment with "+$scope.formContent);
    $scope.create({
      title: $scope.formContent,
      upvotes: 0,
    });
    $scope.formContent = '';
  };

  $scope.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  };

  $scope.getAll = function() {
    return $http.get('/comments').success(function(data){
      angular.copy(data, $scope.comments);
    });
  };

  $scope.getAll();

  $scope.create = function(comment) {
    return $http.post('/comments', comment).success(function(data){
      $scope.comments.push(data);
    });
  }
}