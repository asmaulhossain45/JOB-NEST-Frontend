const Blog3 = () => {
  return (
    <div>
      <img
        className="w-full mb-4"
        src="https://teacode.io/wp-content/uploads/2022/06/Copy-of-AWS-Amplify-blog-compress.png"
        alt="Express Js"
      />
      <h1 className="text-lg text-Black font-semibold">What Is Next.js?</h1>

      <div className="space-y-2 text-sm text-Slate/80">
        <p>
          Next.js is an open-source web development React-based framework
          created by Vercel, which is famous for its unique features such as
          Server-side rendering and enhanced SEO. It has some additional
          features such as data fetching utilities, dynamic API routes,
          optimized builds, etc. It is a framework built upon React, Webpack,
          and Babel. A traditional react application is rendered client-side
          whereas a Next.js application is used to create production-ready web
          applications. Learning Next.js requires knowledge of basic React and
          Web Development. The most popular use of Next.js is in making Landing
          pages and marketing websites. Also if we want our webpage to rank
          better on searches the inbuilt features of Next.js provide support for
          that functions.
        </p>
        <h1 className="text-lg text-Black font-semibold">Why Next.js:</h1>
        <p>
          You would be wondering if Next.js require some basic knowledge of
          React and React is a popular front-end JavaScript library then why do
          we have to learn this not to go only with React.js? The main reason is
          that Next.js has big advantages over React.js, it fixes some common
          problems that arise in React development. React does not have built-in
          routing capabilities which means we have to depend on third-party
          libraries or build our own routing solution and Next.js solved our
          problem of routing.
        </p>
        <p>
          One of the biggest problems with React is that it’s a client-side
          library, which means it renders the UI on the client browser and this
          may lead to slow rendering and results in slower page loading time,
          which is not good for SEO and Next.js solves this problem by providing
          server-side rendering out of the box and many more problems solutions
          it problems. These are the main reasons to choose Next.js.
        </p>
        <h1 className="text-lg text-Black font-semibold">
          Features of Next.js:
        </h1>
        <ul className="list-inside list-disc">
          <li>
            <span className="font-semibold text-Black">
              Hot Code Reloading:
            </span>{" "}
            It automatically reloads the application when changes in the code
            get saved it is also known as fast refresh.
          </li>
          <li>
            <span className="font-semibold text-Black">
              Automatic Code Splitting:
            </span>{" "}
            With this feature, every import in the code gets bundled and served
            with each page. It means that unnecessary code never gets loaded on
            the page. If there is an import in a specific page then other pages
            do not include that library this makes our application lightweight.
          </li>
          <li>
            <span className="font-semibold text-Black">
              Ecosystem Compatibility:
            </span>{" "}
            Compatible with JavaScript, Node, and React. This makes it the first
            choice of many developers.
          </li>
          <li>
            <span className="font-semibold text-Black">Server Rendering:</span>{" "}
            Easily render React component on the server before sending HTML to
            the client. This feature helps in improving SEO as load speed is a
            crucial factor when pages ranking is decided
          </li>
          <li>
            <span className="font-semibold text-Black">Styled-JSX:</span>{" "}
            Styled-JSX allows you to write CSS directly inside JavaScript code.
            This solves confusion caused by maintaining multiple stylesheets
          </li>
          <li>
            <span className="font-semibold text-Black">
              Automatic Routing:{" "}
            </span>{" "}
            The files inside the pages directory are automatically mapped and
            does not require additional coding
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog3;
