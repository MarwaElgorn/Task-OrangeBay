import app from "../assets/images/Appdownload/mobile.png";
import apple from "../assets/images/Appdownload/applestore.svg";
import googleplay from "../assets/images/Appdownload/googleplay.svg";
import background from "../assets/images/Appdownload/bg.png";

export default function AppDownload() {
  return (
    <section className="px-4 sm:px-8 lg:px-[120px] py-20">
      <div
        className="relative overflow-hidden rounded-3xl text-white min-h-[420px]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-[120px]  py-11">
          <div className="max-w-xl ]">
            <h2
              className="
                text-2xl
                sm:text-3xl
                lg:text-[48px]
                leading-[48px]
                 font-normal
                capitalize
              "
            >
              Ready To Get Started?
            </h2>

            <p className="mt-4  font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] capitalize text-white">
              Download The App Now And Enjoy A Fast And Easy Experience
            </p>

            <div className="mt-8 flex gap-4">
              <button
                className="
    w-[220px]
    h-[67px]
    flex
    items-center
    gap-4
    px-4
    border
    border-white
    rounded-lg
    text-white
    bg-transparent
  "
              >
                <img src={apple} alt="Apple" className="w-8 h-8" />

                <div className="text-left leading-tight">
                  <p className="text-xs font-poppins font-normal">
                    Download on the
                  </p>
                  <p className="text-lg font-poppins font-semibold">
                    Apple Store
                  </p>
                </div>
              </button>

              <button
                className="
    w-[220px]
    h-[67px]
    flex
    items-center
    gap-4
    px-4
    border
    border-white
    rounded-lg
    text-white
    bg-transparent
  "
              >
                <img src={googleplay} alt="Google Play" className="w-8 h-8" />

                <div className="text-left leading-tight">
                  <p className="text-xs font-poppins font-normal">Get in on</p>
                  <p className="text-lg font-poppins font-semibold">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="relative  flex justify-center lg:justify-end">
            <img
              src={app}
              alt="App Download"
              className="w-[220px] lg:w-[369px] "
            />
          </div>
        </div>

        <div className="absolute right-24 bottom-20 w-[300px] h-[300px] bg-orange-500/40 blur-[140px]" />
      </div>
    </section>
  );
}
