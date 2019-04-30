app.controller('NotificationCtrl',function($scope,NotificationService,$location){

	console.log("Im inside Notification Controller");

	$scope.getMyNotifications=function(){

		NotificationService.getMyNotifications().
		then(function(response){

			console.log("fetched all the notifications");
			$scope.notifications=response.data;
			console.log($scope.notifications);

		},function(response){

			console.log(response.status)
			if(response.status==401)
				$location.path('/login')
		}
		)}

	$scope.updateNotification=function(){

		NotificationService.updateNotification().
		then(function(response){

			console.log('updated notification');
			$scope.getMyNotifications();

		},function(response){

			console.log('could not update');
			$scope.getMyNotifications();

		}
		)}

})
