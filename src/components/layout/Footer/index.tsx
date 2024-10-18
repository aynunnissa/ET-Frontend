import FooterLogo from "../../../assets/images/footer-logo.webp";

const Footer = () => {
  return(
    <div className="bg-primary-main py-8 px-16">
      <div>
        <img src={FooterLogo} alt="Eratani Logo" />
      </div>
    </div>
  );
}

export default Footer;