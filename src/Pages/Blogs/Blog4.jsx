const Blog4 = () => {
  return (
    <div>
      <h1 className="text-lg text-Black font-semibold">
        Job Nest Site Over View
      </h1>

      <div className="space-y-2 text-sm text-Slate/80">
        <p>
          Job Nest aims to connect employers and job seekers with a
          user-friendly platform. Standout features include detailed job
          listings, advanced search filters, a resume builder, and notification
          systems. Company profiles and a feedback mechanism enhance user
          experience. Prioritize mobile optimization, social media integration,
          and provide robust support with FAQs. Create a platform that is both
          functional and enjoyable for users.
        </p>
        <img
          className="w-full mb-4"
          src="https://i.ibb.co/tL6MFx3/SiteView.png"
          alt="Express Js"
        />
        <h1 className="text-lg text-Black font-semibold">Home Page:</h1>

        <p>In Home page, create a hero section, in this section i am using a background image, a title, short description and a search bar. Then, there have a tab table, for creating tab table i create 5 button and set each button onClick Function for get the category name. after clicking on button, button value set the url and find data in database. for data loading i am using Axios and for data manage using TanStack Query.</p>
        <h1 className="text-lg text-Black font-semibold">All Jobs:</h1>

        <p>All Job Posts section also have a header or hero section. but in this hero sections search bar i implement a search function, in search bar, i am using onchange function and if user input some text on search bar data will be loaded automatically. and then i am using a daisyUI table template for display the all jobs post. here user see a details button, after clicking on details button, user navigate to post details page and there have all details of clicking post. in job details page have a apply button, if user want to apply, then he/she can apply from here. there has three input field, first two auto field for user name and email, and last field for user cv. if user want to apply then user can submit after giving resume url. i am also create pagination system for loading data, every page showing 4 post.</p>
        <h1 className="text-lg text-Black font-semibold">Add Job:</h1>

        <p>Add job page for Company. if company want to post a job then they can here. it's simple way. if any company want to post a job then they can, but for add a job post they need to login first, when company post a job from add job page, the post will be add to all job post. here i am using axios for collecting data and save to mongoDB database.</p>
        <h1 className="text-lg text-Black font-semibold">Applied Job & My Jobs:</h1>

        <p>Applied Job and My Job page are Private route, these two routes are for only login user, if a user post some job job post then he can see those post in My Job Route. In every post have a update and delete Function. if user want to update his job post then he can update his post on clicking the update button and if he want to delete then he can delete post onClicking the Delete Button.And other is for applied Job Only, if user apply in job post then he can see here.</p>
      </div>
    </div>
  );
};

export default Blog4;
