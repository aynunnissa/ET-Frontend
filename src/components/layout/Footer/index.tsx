import FooterLogo from "../../../assets/images/footer-logo.webp";
import GlobeIcon from "../../../assets/icons/globe.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import TiktokIcon from "../../../assets/icons/tiktok.svg";
import YoutubeIcon from "../../../assets/icons/youtube.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";
import WhatsappIcon from "../../../assets/icons/whatsapp.svg";

const LanguageInfo = () => {
  return(
    <div className="flex items-center flex-wrap gap-4">
      <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={GlobeIcon} alt="Language" />
      <div className="flex flex-wrap gap-4">
        <span className="font-bold text-xs sm:text-lg border-b-4 border-b-secondary-main">IN</span>
        <span className="font-bold text-xs sm:text-lg">EN</span>
      </div>
    </div>
  )
}

const Footer = () => {
  return(
    <div className="bg-primary-main py-8 px-4 md:px-16">
      <div className="grid grid-cols-12 grid-flow-row gap-y-12 gap-x-4 sm:gap-x-8 xl:gap-x-20 text-xs md:text-base text-left text-white">
        <div className="col-span-7 md:col-span-12">
          <img className="w-[100px] md:w-[165px] h-auto" src={FooterLogo} alt="Eratani Logo" />
        </div>
        <div className="col-span-5 md:hidden flex items-center">
          <LanguageInfo />
        </div>
        <div className="col-span-7 md:col-span-3">
          <div>
            <p>Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870, Indonesia</p>
          </div>
          <div className="mt-6">
            <p className="mb-1">Email : info.eratani@eratani.co.id</p>
            <p>Telepon : +62 811 952 2577</p>
          </div>
        </div>
        <div className="col-span-5">
          <p className="font-bold text-lg">
            Menu
          </p>
          <div className="mt-2">
            <div className="flex flex-col gap-1">
              <a href="/">Tim Kami</a>
              <a href="/">Mitra Eratani</a>
              <a href="/">Tips & Berita Pertanian</a>
              <a href="/">Karir</a>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="h-full flex flex-col justify-between items-start md:items-center">
            <div className="hidden md:block">
              <LanguageInfo />
            </div>
            <div className="flex flex-wrap gap-8">
              <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={TiktokIcon} alt="Language" />
              <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={InstagramIcon} alt="Language" />
              <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={LinkedinIcon} alt="Language" />
              <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={YoutubeIcon} alt="Language" />
              <img className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]" src={WhatsappIcon} alt="Language" />
            </div>
          </div>
        </div>
        <div className="col-span-12 text-center">
          <p>Copyright © 2021 by PT Eratani Teknologi Nusantara</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;