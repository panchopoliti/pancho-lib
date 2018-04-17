'use strict';

(function (root) {

  function post(fileLocation, JSONData) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('POST', fileLocation);
      var formattedJsonData = JSON.stringify(JSONData);

      request.onload = function () {

        if (request.status === 200 && request.readyState === 4) {
          resolve();
        } else {
          reject();
        }
      };

      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      request.send(formattedJsonData);
    });
  }

  function del(fileLocation, elemToDelete) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.open('DELETE', fileLocation);
      request.onload = function () {

        if (request.status === 200 && request.readyState === 4) {
          resolve(elemToDelete);
        } else {
          reject();
        }
      };

      request.send();
    });
  }

  function put(fileLocation, JSONData) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      var formattedJsonData = JSON.stringify(JSONData);

      request.open('PUT', fileLocation);
      request.onload = function () {

        if (request.status === 200 && request.readyState === 4) {
          resolve();
        } else {
          reject();
        }
      };

      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      request.send(formattedJsonData);
    });
  }

  function get(fileLocation) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', fileLocation);
      request.onload = function () {

        if (request.status === 200 && request.readyState === 4) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.statusText);
        }
      };

      request.send();
    });
  }

  root.serverFunctions = {
    post: post,
    put: put,
    get: get,
    del: del
  };
})(window);