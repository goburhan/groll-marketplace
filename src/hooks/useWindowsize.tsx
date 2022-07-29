import { useEffect, useState } from "react";

export const WindowSize = () => {
  const [isMobilee, setIsMobilee] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 567) {
      setIsMobilee(true);
      setIsDesktop(false);
    } else if (window.innerWidth > 700) {
      setIsDesktop(true);
      setIsMobilee(false);
    }
  }, []);

  useEffect(() => {
    const HandleResize = () => {
      if (window.innerWidth > 567) {
        setIsDesktop(true);
        setIsMobilee(false);
      } else if (window.innerWidth < 566) {
        setIsMobilee(true);
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", HandleResize);

    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  }, []);

  return isMobilee;
};
