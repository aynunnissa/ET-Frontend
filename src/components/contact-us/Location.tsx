import Button from "../shared/Button";

const Location = () => {
  return(
    <div className="relative">
      <iframe title="et-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5190075141004!2d106.81843317504914!3d-6.195041193792628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5849ccc0371%3A0xb04ce66a7cb711d9!2sGrand%20Indonesia!5e0!3m2!1sen!2sid!4v1729232371042!5m2!1sen!2sid" width="100%" height="450" style={{ border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="absolute right-[50%] translate-x-1/2 bottom-[20px]">
        <Button text="Lokasi" size="large" />
      </div>
    </div>
  );
}

export default Location;