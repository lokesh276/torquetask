// import HomeProductCrt from "./HomeProductCrt";
import HalfSpeakerComponent from "./HalfSpeakerComponent";
import BestAudio from "./BestAudio";
import FixedFirstComponent from "./BrokenFirstComponent";
import NewProduct from "./NewProduct";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <div>
      <NewProduct />
      <ContactUs/>
      <HalfSpeakerComponent />
      <FixedFirstComponent />
      <BestAudio />
    </div>
  );
}
