'use strict';

angular
  .module('myApp.home', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'views/home/home.html',
        controller: ['$scope', 'searchService', homeCtrl],
        controllerAs: '$ctrl',
      });
    },
  ]);

function homeCtrl($scope, searchService) {
  var ctrl = this;

  ctrl.searchResults = [];
  ctrl.searching = false;

  ctrl.doSearch = async function (searchTerm) {
    if (searchTerm.trim() === '') {
      ctrl.searchResults = [];
      $scope.$digest();
      return;
    }

    ctrl.searching = true;
    ctrl.searchResults = [];
    ctrl.searchResults = await searchService.search(searchTerm);
    ctrl.searching = false;

    $scope.$digest();

    if (ctrl.searchResults.length > 0) {
      createSearchResults();
      $scope.$digest();
    }
  };

  function createSearchResults() {
    const resultsContainer = document.getElementById('results-container');
    for (const searchResult of ctrl.searchResults) {
      const divContainer = document.createElement('div');

      divContainer.classList.add('col-3');

      const result = document.createElement('search-result');
      result.searchData = searchResult;

      divContainer.appendChild(result);
      resultsContainer.appendChild(divContainer);
    }
  }
}
