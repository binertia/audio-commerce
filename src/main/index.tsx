import BarMenu from "./element/BarMenu";
import BestGear from "./element/BestGear";
import Footer from "./element/Footer";
import Card from "./product/default/Card";
import Heroes from "./product/default/Heroes";

export default function MainPage() {
  return (
    <>
      <Heroes />
      <BarMenu />
      <Card />
      <BestGear />
      <Footer />
    </>
  );
}
