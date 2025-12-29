import { useEffect } from "react";

const usenavHideShow = (ref) => {

    useEffect(() => {
        let lastScrollY = 0;
        const heandleclick = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {

                ref.current.className = "w-full sticky -top-20 border-b z-50 transition-top duration-1000 border-[#5f5f5f] bg-[#0000007d] h-16 backdrop-blur-4xl font-['inter','sans-serif'] flex items-center justify-between p-4 text-white "
            } else {
                ref.current.className = "w-full sticky top-0 border-b z-50 transition-top duration-1000 border-[#5f5f5f] bg-[#0000007d] h-16 backdrop-blur-4xl font-['inter','sans-serif'] flex items-center justify-between p-4 text-white "
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", heandleclick);

        return () => window.removeEventListener("scroll", heandleclick);
    }, []);
}
export default usenavHideShow