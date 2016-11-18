(function() {
    if (!app.controllers) app.controllers = {};

    app.controllers.scrumboard = function($scope) {
        $scope.data = [{
            "title": "Card 1",
            "description": "description for card 1",
            "card_list": [{
                "id": 1,
                "name": "List 1"
            }, {
                "id": 2,
                "name": "List 2"
            }, {
                "id": 3,
                "name": "List 3"
            }],  
            "story_points": null,
            "business_value": null
        }, {
            "title": "Card 2",
            "description": "description for card 2",
            "card_list": [{
                "id": 1,
                "name": "List 1"
            }, {
                "id": 2,
                "name": "List 2"
            }, {
                "id": 3,
                "name": "List 3"
            }],
            "story_points": null,
            "business_value": null
        }, {
            "title": "Card 3",
            "description": "description for card 3",
            "card_list": [{
                "id": 1,
                "name": "List 1"
            }, {
                "id": 2,
                "name": "List 2"
            }, {
                "id": 3,
                "name": "List 3"
            }],
            "story_points": null,
            "business_value": null
        }, {
            "title": "Card 4",
            "description": "description for card 4",
            "card_list": [{
                "id": 1,
                "name": "List 1"
            }, {
                "id": 2,
                "name": "List 2"
            }, {
                "id": 3,
                "name": "List 3"
            }],
            "story_points": null,
            "business_value": null
        }]

        $scope.add = function(list, title){
            list.card_list.push({
                name : title
            });
        }
    };
}())
