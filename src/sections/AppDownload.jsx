import app from "../assets/images/Appdownload/mobile.png";
import apple from "../assets/images/Appdownload/applestore.svg";
import googleplay from "../assets/images/Appdownload/googleplay.svg";
import background from "../assets/images/Appdownload/bg.png";

export default function AppDownload() {
  return (
    <section className="px-4 sm:px-8 lg:px-[120px] py-12 sm:py-16 lg:py-20">
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
            <h2 className="text-xl sm:text-2xl lg:text-[48px] leading-tight lg:leading-[48px] font-normal">
              Ready To Get Started?
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7">
              Download The App Now And Enjoy A Fast And Easy Experience
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              
              <button className="w-full sm:w-[200px] h-[56px] flex items-center gap-3 px-4 border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-primary transition">
                <img src={apple} alt="Apple" className="w-7 h-7" />
                <div className="text-left leading-tight">
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-semibold">Apple Store</p>
                </div>
              </button>

              <button className="w-full sm:w-[200px] h-[56px] flex items-center gap-3 px-4 border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-primary transition">
                <img src={googleplay} alt="Google Play" className="w-7 h-7" />
                <div className="text-left leading-tight">
                  <p className="text-xs">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </button>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={app}
              alt="App Download"
              className="w-[200px] sm:w-[260px] lg:w-[369px]"
            />
          </div>
        </div>

        <div className="absolute right-10 bottom-10 w-[200px] h-[200px] bg-orange-500/40 blur-[120px]" />
      </div>
    </section>
  );
}
