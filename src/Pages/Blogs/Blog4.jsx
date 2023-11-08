const Blog4 = () => {
  return (
    <div>
      <img
        className="w-full mb-4"
        src="https://i.ibb.co/tL6MFx3/SiteView.png"
        alt="Express Js"
      />
      <h1 className="text-lg text-Black font-semibold">What Is Next.js?</h1>

      <div className="space-y-2 text-sm text-Slate/80">
        <p>
          Next.js is an open-source web development React-based framework
          created by Vercel, which is famous for its unique features such as
          Server-side rendering and enhanced SEO. It has some additional
          features such as data fetching utilities, dynamic API routes,
        </p>

        <div className="tooltip tooltip-bottom" data-tip="Hello">
          <img src="asd" alt="sss" />
        </div>
      </div>
    </div>
  );
};

export default Blog4;
