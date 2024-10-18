import Location from "../../../components/contact-us/Location";
import SectionLayout from "../../../components/layout/Layout/SectionLayout";

const ContactUs = () => {
  return(
    <SectionLayout>
      <div className="flex flex-wrap gap-8">
        <div className="w-full sm:w-1/2 md:w-3/5">
          <Location />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactUs;