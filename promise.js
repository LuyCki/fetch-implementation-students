fetch("http://localhost:3000/users")
  .then((request) => request.json())
  .then((users) => console.log(users));

// Simple fetch implementation with callbacks
function awesomeFetch(url, options, next, error) {
  let req = new XMLHttpRequest();

  req.onload = function () {
    if (req.status >= 200 && req.status < 300) {
      next(new Response(req.response, { status: req.status }));
    } else {
      error(new Error(req.statusText));
    }
  };

  req.onerror = function () {
    error(new Error("You need internet dummy"));
  };

  req.open(options.method || "GET", url);

  for (var header in options?.headers) {
    req.setRequestHeader(header, options.headers[header]);
  }

  req.send(options?.body);
}

awesomeFetch(
  "http://localhost:3000/users",
  async (request) => {
    const req = await request.json();
    console.log(req);
  },
  (err) => {
    console.log(err);
  }
);

// // Simple fetch implementation with Promises
function amazingFetch(url, options) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.onload = function () {
      if (req.status >= 200 && req.status < 300) {
        resolve(new Response(req.response, { status: req.status }));
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      reject(new Error("You need internet dummy"));
    };

    req.open(options?.method || "GET", url);

    for (var header in options?.headers) {
      req.setRequestHeader(header, options.headers[header]);
    }

    req.send(options?.body);
  });
}

amazingFetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Andreea" }),
})
  .then((request) => request.json())
  .then((users) => console.log(users))
  .catch((error) => console.log(error));

// Complex fetch implementation to be done :D
function amazingAwesomeFetch() {}