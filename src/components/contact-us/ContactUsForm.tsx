import useInput from "../../hooks/use-input";
import Button from "../shared/Button";
import { FORM_TYPE } from "./constants";
import Input from "../shared/form/Input";
import TextField from "../shared/form/TextField";
import ContactUsSuccess from "../modal/ContactUsSuccess";
import { useState } from "react";

const ContactUsForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const name = useInput((value: string) => value.trim() !== '');
  const email = useInput((value: string) => value.includes('@'));
  const phone = useInput((value: string) => (/^\d*$/).test(value) && value.trim() !== '');
  const message = useInput((value: string) => value.trim() !== '');

  let formIsValid = false;

  if (name.isValid && email.isValid && phone.isValid && message.isValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.isValid || !email.isValid || !phone.isValid || !message.isValid) {
      return;
    }

    name.reset();
    email.reset();
    phone.reset();
    message.reset();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const nameInputClasses = name.hasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = email.hasError
    ? 'form-control invalid'
    : 'form-control';

  const phoneInputClasses = phone.hasError
    ? 'form-control invalid'
    : 'form-control';

  const messageInputClasses = message.hasError
    ? 'form-control invalid'
    : 'form-control';

  return(
    <div className="bg-neutral-100 py-12 px-8">
      <div>
        <h3 className="title-3">Kritik & Saran</h3>
        <div className="mt-8">
          <form onSubmit={formSubmissionHandler}>
            <div className="flex flex-col gap-4">
              <Input type={FORM_TYPE['name']} placeholder="Nama" class={nameInputClasses} {...name} />
              <Input type={FORM_TYPE['email']} placeholder="Email" class={emailInputClasses} {...email} />
              <Input type={FORM_TYPE['phone']} placeholder="Nomor Handphone" class={phoneInputClasses} {...phone} />
              <TextField type={FORM_TYPE['message']} placeholder="Pesan Anda" class={messageInputClasses} {...message} />
              <div className="flex justify-center">
                <Button text="Kirim Pesan" size="large" disabled={!formIsValid} />
              </div>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <ContactUsSuccess isOpen={isModalOpen} handleClose={handleCloseModal} />}
    </div>
  );
}

export default ContactUsForm;