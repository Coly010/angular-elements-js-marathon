angular.module('myApp.home').service('searchService', searchService);

searchService.$inject = ['$http'];

function searchService($http) {
  const search = async (searchTerm) => {
    const people = await $http
      .get(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then(({ data }) => data.results);
    const films = await $http
      .get(`https://swapi.dev/api/films/?search=${searchTerm}`)
      .then(({ data }) => data.results);
    const planets = await $http
      .get(`https://swapi.dev/api/planets/?search=${searchTerm}`)
      .then(({ data }) => data.results);
    const species = await $http
      .get(`https://swapi.dev/api/species/?search=${searchTerm}`)
      .then(({ data }) => data.results);
    const starships = await $http
      .get(`https://swapi.dev/api/starships/?search=${searchTerm}`)
      .then(({ data }) => data.results);
    const vehicles = await $http
      .get(`https://swapi.dev/api/vehicles/?search=${searchTerm}`)
      .then(({ data }) => data.results);

    return [
      ...people,
      ...films,
      ...planets,
      ...species,
      ...starships,
      ...vehicles,
    ];
  };

  return {
    search,
  };
}
