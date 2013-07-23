Services = angular.module('Services', ['ngResource']);

Services.factory('TotemFlows', ['$resource', function($resource){
	return $resource('/build/totem_flows/:totem_flow_id/', 
		{ 
			totem_flow_id: '@totem_flow_id'
		}
	);
}]);

Services.factory('TotemBlocks', ['$resource', function($resource){
	return $resource('/build/totem_flows/:totem_flow_id/totem_blocks/:totem_block_id', 
		{ 
			totem_flow_id: '@totem_flow_id',
			totem_block_id: '@totem_block_id' 
		});
}]);

Services.factory('Users', ['$resource', function($resource){
	return $resource('/users/getCurrentUser/:user_id',
	{
		user_id: '@user_id'
	},
	{
		getUser: {method: 'GET'},
		getUserTotemFlows: {method:'GET', isArray:true}
	});
}])

Services.factory('Signout', function(){
	return {
		signOut: function(){
			
		}
	}
});