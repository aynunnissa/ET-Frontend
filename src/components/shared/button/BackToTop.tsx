import { useState, useEffect } from "react";
import Button from "../Button";
import ChevronUpIcon from "../../../assets/icons/chevron-up.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-[50px] right-[50px] z-20">
          <Button 
            handleClick={scrollToTop}
            isIconBtn 
            isRounded 
            icon={ChevronUpIcon}
          />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
