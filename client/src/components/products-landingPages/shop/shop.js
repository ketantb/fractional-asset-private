import "./shop.css";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const ShopPage = () => {
  return (
    <>
      <div className="shop-page-wrapper">
        <div className="bg-image"></div>
        <DLBrochure />
        <HowItWorksSteps />
      </div>
    </>
  );
};

export default ShopPage;
