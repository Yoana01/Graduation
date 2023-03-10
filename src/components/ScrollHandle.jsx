import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandle ({ children})  {

        const { pathname, hash } = useLocation()

        const handleScroll = () => {

            const element = document.getElementById(hash.replace("#", ""));

            setTimeout(() => {
                window.scrollTo({
                    behavior: element ? "smooth" : "auto",
                    top: element ? element.offsetTop : 0
                });
            }, 100);
        };

        useEffect(() => {
            handleScroll()
        }, [pathname, hash])

        return children
    }

export default ScrollHandle