'user strict'


eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = "<span>Hello this is injected span tag</span>";
        $scope.boolValue=true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

        $scope.sortOrder="name";


        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1524085152,
            time: '10:30',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'LA'
            },
            imageUrl: '../app/img/angularjs-logo.png',
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Bob Smith",
                    duration: 1,
                    level: "Advanced",
                    abstract: "In this session you will learn the ins and outs of directives",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "John Doe",
                    duration: 2,
                    level: "Introductory",
                    abstract: "In this session we will look closer to scopes",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved controller",
                    creatorName: "John Doe",
                    duration: 4,
                    level: "Advanced",
                    abstract: "In this session you will learn about controllers",
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
          session.upVoteCount--;
        };

    }
);