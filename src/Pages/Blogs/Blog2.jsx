const Blog2 = () => {
  return (
    <div>
      <h1 className="text-lg text-Black font-semibold">What Is Express.js?</h1>

      <div className="space-y-2 text-sm text-Slate/80">
        <p>
          Express.js, sometimes also referred to as “Express,” is a minimalist,
          fast, and Sinatra-like Node.js backend framework that provides robust
          features and tools for developing scalable backend applications. It
          gives you the routing system and simplified features to extend the
          framework by developing more powerful components and parts depending
          on your application use cases.
        </p>
        <img
          className="w-full mb-4"
          src="https://img-c.udemycdn.com/course/750x422/4422780_304c_2.jpg"
          alt="Express Js"
        />
        <h1 className="text-lg text-Black font-semibold">
          Single-Page Applications
        </h1>
        <p>
          Single-Page Applications (SPAs) are the modern approach of application
          development in which the entire application is routed into a single
          index page. Express.js is an excellent framework for building an API
          that connects these SPA applications and consistently serves data.
          Some examples of Single Page Applications are Gmail, Google Maps,
          Airbnb, Netflix, Pinterest, Paypal, and many more. Companies are using
          SPAs to build a fluid, scalable experience.
        </p>
        <h1 className="text-lg text-Black font-semibold">
          Real-Time Collaboration Tools
        </h1>
        <p>
          Collaboration tools are here to ease the way businesses work and
          collaborate daily, and with Express.js, you can develop collaborative
          and real-time networking applications with ease. Also, the framework
          is used to develop real-time applications such as chat and dashboard
          applications, where it becomes straightforward to integrate WebSocket
          into the framework. Express.js handles the routing and middleware part
          of the process, allowing developers to concentrate on the vital
          business logic of these real-time features when developing live
          collaborative tools.
        </p>
        <h1 className="text-lg text-Black font-semibold">
          How Express.js Works
        </h1>
        <p>
          Since Express.js uses the client-server model to accept users’
          requests and send back responses to the client, how it works is not
          all that different from how other popular frameworks, such as Laravel,
          work themselves. When a user sends a request from their web browser by
          typing in a website address, the browser sends an HTTP request to the
          application/server (many applications created using Express.js are
          hosted somewhere in the cloud). The server will receive the request
          through one of its routes and process it using the controller that
          matches the requested route. After processing, the server will
          dispatch a response back to the client using HTTP since it’s a
          back-and-forth communication protocol. The response returned to the
          client could be standard text, a dynamic HTML page that the browser
          will process and display a beautiful web page, or JSON data that the
          frontend developers will handle to display information on the web
          page.
        </p>
      </div>
    </div>
  );
};

export default Blog2;
