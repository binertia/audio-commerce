import BarMenu from "./element/BarMenu";
import BestGear from "./element/BestGear";
import Footer from "./element/Footer";
import Card from "./product/default/Card";

export default function MainPage() {
  return (
    <>
      <BarMenu />
      <Card />
      <BestGear />
      <Footer />
    </>
  );
}
