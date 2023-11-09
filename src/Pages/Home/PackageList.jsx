const PackageList = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="text-center">
        <h1 className="text-center text-Primary text-xl md:text-2xl lg:text-3xl font-bold">
          Buy Our Plans And Packages
        </h1>
        <p className="text-center font-semibold text-xs md:text-sm lg:text-lg text-Black/60 mb-3 md:mb-5 lg:mb-7 md:max-w-xl lg:max-w-2xl mx-auto">
          One of our jobs has some kind of flexibility option - such as
          telecommuting, a part-time schedule or a flexible or flextime
          schedule.
        </p>
      </div>
      <div className="space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-12">
        <div className="bg-BgPrimary text-center shadow-lg hover:shadow-Secondary duration-300">
          <div className="space-y-5 py-10 bg-Secondary">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-White">BASIC</h1>
            <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold text-White">
              <span className="text-Black text-3xl">$10</span> / 6 Days
            </h1>
          </div>

          <ul className="space-y-4 py-10 font-semibold text-Black/60">
            <li className="bg-Slate/5 py-2">1 Job Post</li>
            <li>E-mail Support</li>
            <li className="bg-Slate/5 py-2">Display for 10 days</li>
            <li>Pdf Download</li>
            <li className="bg-Slate/5 py-2">Support 24/7</li>
          </ul>
        </div>

        <div className="bg-BgPrimary text-center shadow-lg hover:shadow-Primary duration-300">
          <div className="space-y-5 py-10 bg-Primary">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-White">Standard</h1>
            <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold text-White">
              <span className="text-Black text-3xl">$55</span> / 24 Days
            </h1>
          </div>

          <ul className="space-y-4 py-10 font-semibold text-Black/60">
            <li className="bg-Slate/5 py-2">11 Job Post</li>
            <li>E-mail Support</li>
            <li className="bg-Slate/5 py-2">Display for 34 days</li>
            <li>Pdf Download</li>
            <li className="bg-Slate/5 py-2">Premium Support 24/7</li>
          </ul>
        </div>

        <div className="bg-BgPrimary text-center shadow-lg hover:shadow-Secondary duration-300">
          <div className="space-y-5 py-10 bg-Secondary">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-White">Diamond</h1>
            <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold text-White">
              <span className="text-Black text-3xl">$80</span> / 6 Days
            </h1>
          </div>

          <ul className="space-y-4 py-10 font-semibold text-Black/60">
            <li className="bg-Slate/5 py-2">44 Job Post</li>
            <li>E-mail Support</li>
            <li className="bg-Slate/5 py-2">Display for 70 days</li>
            <li>Pdf Download</li>
            <li className="bg-Slate/5 py-2">Premium Support 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackageList;
