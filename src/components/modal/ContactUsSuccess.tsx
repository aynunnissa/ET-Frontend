import Button from "../shared/Button";
import SendIcon from "../../assets/icons/send.svg";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

interface IProps {
  isOpen: boolean,
  handleClose: () => void
}

const ContactUsSuccess = ({ isOpen, handleClose }: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return(
    createPortal(
      <div className="fixed z-50 left-0 right-0 bottom-0 top-0">
        <div className="bg-neutral-main absolute left-0 z-100 right-0 bottom-0 top-0 opacity-50"></div>
        <div className="flex items-center h-full">
          <div className="relative w-full px-24 py-24 flex justify-center bg-white" ref={modalRef}>
            <div className="w-full md:w-[55%] flex flex-col items-center gap-8 text-center">
              <Button isIconBtn isRounded icon={SendIcon} altText="successfully send message" />
              <h3 className="title-3">Terima kasih!</h3>
              <p className="headline font-medium">Semua kritik dan saran yang Anda kirimkan akan menjadi masukan bagi kami untuk menjadikan Eratani lebih baik lagi.</p>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}

export default ContactUsSuccess;