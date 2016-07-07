"use strict";angular.module("issue").component("issue",{templateUrl:"partials/issue",controller:["$scope","$location","$http","$routeParams","$cacheFactory",function(e,s,t,c,o){o.get("session")?e.cache=o.get("session"):e.cache=o("session"),e.cache.get("user")||s.path("login"),e.logOut=function(){e.cache.put("user",null)},e.issue={id:c.issueId}}]});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlL2lzc3VlLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJGh0dHAiLCIkcm91dGVQYXJhbXMiLCIkY2FjaGVGYWN0b3J5IiwiZ2V0IiwiY2FjaGUiLCJwYXRoIiwibG9nT3V0IiwicHV0IiwiaXNzdWUiLCJpZCIsImlzc3VlSWQiXSwibWFwcGluZ3MiOiJBQUdBLFlBR0FBLFNBQ0FDLE9BQU8sU0FDUEMsVUFBVSxTQUNOQyxZQUFhLGlCQUNiQyxZQUFhLFNBQVMsWUFBWSxRQUFRLGVBQWUsZ0JBQ3JELFNBQXlCQyxFQUFPQyxFQUFVQyxFQUFNQyxFQUFhQyxHQUNyREEsRUFBY0MsSUFBSSxXQUlsQkwsRUFBT00sTUFBUUYsRUFBY0MsSUFBSSxXQUhqQ0wsRUFBT00sTUFBUUYsRUFBYyxXQUs3QkosRUFBT00sTUFBTUQsSUFBSSxTQUNqQkosRUFBVU0sS0FBSyxTQUduQlAsRUFBT1EsT0FBUyxXQUNaUixFQUFPTSxNQUFNRyxJQUFJLE9BQU8sT0FFNUJULEVBQU9VLE9BQVNDLEdBQUdSLEVBQWFTIiwiZmlsZSI6Imlzc3VlL2lzc3VlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3cmsyMjQgb24gNy83LzE2LlxuICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIFJlZ2lzdGVyIGBpc3N1ZWAgY29tcG9uZW50LCBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIGNvbnRyb2xsZXIgYW5kIHRlbXBsYXRlXG5hbmd1bGFyLlxubW9kdWxlKCdpc3N1ZScpLlxuY29tcG9uZW50KCdpc3N1ZScsIHtcbiAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2lzc3VlJyxcbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRsb2NhdGlvbicsJyRodHRwJywnJHJvdXRlUGFyYW1zJywnJGNhY2hlRmFjdG9yeScsXG4gICAgICAgIGZ1bmN0aW9uIGlzc3VlQ29udHJvbGxlcigkc2NvcGUsJGxvY2F0aW9uLCRodHRwLCRyb3V0ZVBhcmFtcywkY2FjaGVGYWN0b3J5KSB7XG4gICAgICAgICAgICBpZighJGNhY2hlRmFjdG9yeS5nZXQoJ3Nlc3Npb24nKSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhY2hlID0gJGNhY2hlRmFjdG9yeSgnc2Vzc2lvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhY2hlID0gJGNhY2hlRmFjdG9yeS5nZXQoJ3Nlc3Npb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCEkc2NvcGUuY2FjaGUuZ2V0KFwidXNlclwiKSl7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJ2xvZ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS5sb2dPdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhY2hlLnB1dChcInVzZXJcIixudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAkc2NvcGUuaXNzdWUgPSB7aWQ6JHJvdXRlUGFyYW1zLmlzc3VlSWR9O1xuICAgICAgICB9XG4gICAgXVxufSk7LyoqXG4gKiBDcmVhdGVkIGJ5IHdyazIyNCBvbiA3LzcvMTYuXG4gKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
