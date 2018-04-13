(function (root) {

  function post(fileLocation, JSONData) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('POST', fileLocation);
      const formattedJsonData = JSON.stringify(JSONData);

      request.onload = () => {

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
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open('DELETE', fileLocation);
      request.onload = () => {

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
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      const formattedJsonData = JSON.stringify(JSONData);

      request.open('PUT', fileLocation);
      request.onload = () => {

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
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', fileLocation);
      request.onload = () => {

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
    post,
    put,
    get,
    del,
  };
}(window));
