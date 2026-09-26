
import Image from "next/image";
import logo from "@/asset/logo.png";

const Footer = () => {
    return (
    <div className="border-t border-gray-800 mt-10">
        <footer className="mx-auto  w-full max-w-300 px-5 py-6 bottom-0">

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Fitlog logo"
                        width={35}
                        height={35}
                    />

                    <h2 className="text-xl font-bold text-white">
                        FITLOG
                    </h2>
                </div>


                <div className="text-center text-xs text-gray-400 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>

        </footer>
        </div>
    );
};

export default Footer;