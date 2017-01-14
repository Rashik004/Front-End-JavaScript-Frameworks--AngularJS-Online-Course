

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
            console.log("hos na kere");
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.dishes = menuFactory.getDishes();

            $scope.select = function (setTab) {
                $scope.tab = setTab;

                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.toggleDetails = function () {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function ($scope) {

            $scope.feedback = { name: "", agree: false, email: "", rating: "", date: "" };
            $scope.Ratings = [1, 2, 3, 4, 5];
            $scope.invalidChannelSelection = false;
            $scope.data = new Date();

        }])

        .controller('FeedbackController', ['$scope', function ($scope) {

            $scope.sendFeedback = function () {

                console.log($scope.feedback);


                $scope.invalidChannelSelection = false;
                $scope.feedback = { name: "", agree: false, email: "" };
                $scope.commentForm.$setPristine();
                console.log($scope.feedback);

            };
        }])

        .controller('DishDetailController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

            var dish = menuFactory.getDishes();

            $scope.dish = menuFactory.getDish(3);

        }])

        .controller('DishCommentController', ['$scope', function ($scope) {


            $scope.submitComment = function () {
                var currentDate = new Date();
                var comment = {
                    rating: $scope.feedback.rating,
                    comment: $scope.feedback.comments,
                    author: $scope.feedback.name,
                    date: currentDate
                }
                //console.log(comment);
                $scope.dish.comments.push(comment);
                $scope.feedback = { name: "", agree: false, email: "" };
                $scope.commentForm.$setPristine();

            }
        }])

;
//console.log("dhur";)