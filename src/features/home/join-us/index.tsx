import SectionLayout from "../../../components/layout/Layout/SectionLayout";
import Button from "../../../components/shared/Button";
import WhatsappIcon from "../../../assets/icons/whatsapp.svg";

const JoinUsSection = () => {
  return(
    <SectionLayout>
      <div>
        <div className="w-[70%] mx-auto">
          <h2 className="title-1 text-primary-500">Ingin Menjadi Bagian dari Kami?</h2>
        </div>
        <div className="w-full lg:w-[60%] mx-auto mt-12">
          <p className="title-2 font-normal">
            Bersama kami membangun pertanian Indonesia karena Eratani <span className="bg-secondary-main font-bold">#SelaluAdaUntukPetani</span>
          </p>
          <div className="flex justify-center mt-12">
            <Button primary text="Hubungi Kami" leftIcon={WhatsappIcon} />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default JoinUsSection;