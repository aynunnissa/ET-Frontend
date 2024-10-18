import ContactUsForm from "../../../components/contact-us/ContactUsForm";
import Location from "../../../components/contact-us/Location";
import SectionLayout from "../../../components/layout/Layout/SectionLayout";

const ContactUs = () => {
  return(
    <SectionLayout>
      <div className="flex flex-wrap gap-y-8 justify-between">
        <div className="w-full sm:w-[48%] md:w-[58%]">
          <Location />
        </div>
        <div className="w-full sm:w-[48%] md:w-[38%]">
          <ContactUsForm />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactUs;