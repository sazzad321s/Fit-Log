
import Image from "next/image";
import banner from "@/asset/banner.png";

const Hero = () => {
    return (
        <section className="mx-auto mt-6 w-full max-w-300 px-4">

            <div className="grid grid-cols-1 items-center gap-2 overflow-hidden rounded-2xl bg-[#222630] px-5 py-5 sm:px-8 sm:py-6 lg:grid-cols-2 lg:px-10 lg:py-6">

                {/* Left Content */}
                <div className="flex flex-col items-start">

                    <p className="text-xs font-semibold tracking-widest text-yellow-400 sm:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h2>

                    <p className="mt-2 max-w-lg text-xs leading-5 text-gray-300 sm:text-sm">
                        Fitlog is a dark, no-nonsense gym companion:
                        pick a lift, lock it into today&apos;s plan,
                        and watch the weeks add up.
                    </p>

                    <button
                        className="mt-4 rounded-lg bg-yellow-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-yellow-300 sm:text-sm"
                    >
                        BROWSE WORKOUTS
                    </button>

                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center lg:justify-end">

                    <Image
                        src={banner}
                        alt="Fitlog workout banner"
                        priority
                        className="h-auto w-full max-w-90 object-contain"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;