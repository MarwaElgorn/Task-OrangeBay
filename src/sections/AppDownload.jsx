import app from "../assets/images/Appdownload/mobile.png";
import apple from "../assets/images/Appdownload/applestore.svg";
import googleplay from "../assets/images/Appdownload/googleplay.svg";
import background from "../assets/images/Appdownload/bg.png";

export default function AppDownload() {
  return (
    <section
      aria-labelledby="app-download-title"
      className="px-4 sm:px-8 lg:px-[120px] py-12 sm:py-16 lg:py-20"
    >
      <div
        className="relative overflow-hidden rounded-3xl text-white min-h-[420px]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 sm:px-8 lg:px-[120px] py-10">
          <div className="max-w-xl">
            <h2
              id="app-download-title"
              className="text-xl sm:text-2xl lg:text-[48px] leading-tight lg:leading-[48px] font-normal"
            >
              Ready To Get Started?
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7">
              Download the app and enjoy a fast and easy booking experience.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                aria-label="Download Omarina app from Apple App Store"
                className="w-full sm:w-[200px] h-[56px] flex items-center gap-3 px-4 border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-primary transition"
              >
                <img src={apple} alt="Apple App Store" className="w-7 h-7" />
                <div className="text-left leading-tight">
                  <span className="text-xs">Download on the</span>
                  <span className="block text-base font-semibold">
                    Apple Store
                  </span>
                </div>
              </a>

              <a
                href="#"
                aria-label="Download Omarina app from Google Play Store"
                className="w-full sm:w-[200px] h-[56px] flex items-center gap-3 px-4 border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-primary transition"
              >
                <img src={googleplay} alt="Google Play Store" className="w-7 h-7" />
                <div className="text-left leading-tight">
                  <span className="text-xs">Get it on</span>
                  <span className="block text-base font-semibold">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={app}
              alt="Omarina mobile app preview"
              className="w-[200px] sm:w-[260px] lg:w-[369px]"
              loading="lazy"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute right-10 bottom-10 w-[200px] h-[200px] bg-orange-500/40 blur-[120px]"
        />
      </div>
    </section>
  );
}