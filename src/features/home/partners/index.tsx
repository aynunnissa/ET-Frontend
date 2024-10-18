import SectionLayout from "../../../components/layout/Layout/SectionLayout";
import BULOGImg from "../../../assets/images/BULOG.webp";
import MDBTImg from "../../../assets/images/MDBT.webp";
import PIPanganImg from "../../../assets/images/PI Pangan.webp";

const PartnersSection = () => {
  return(
    <SectionLayout>
        <div className="w-full lg:w-[60%] mx-auto">
          <h2 className="title-1 text-primary-500">Mitra Kami</h2>
        </div>
        <div className="flex items-center gap-8 mt-8 md:mt-16">
          <div className="w-1/3">
            <img 
              src={BULOGImg}
              alt="BULOG"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3">
            <img 
              src={PIPanganImg}
              alt="Pupuk Indonesia Pangan"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3">
            <img 
              src={MDBTImg}
              alt="PT Mitra Desa Bersama Tempuran"
              className="w-full h-auto"
            />
          </div>
        </div>
    </SectionLayout>
  );
}

export default PartnersSection;