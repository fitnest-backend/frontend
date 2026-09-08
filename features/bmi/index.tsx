import Container from "@/components/common/Container";
import BmiCalculatorSection from "./sections/BmiCalculatorSection";
import BmiHeroSection from "./sections/BmiHeroSection";
import BmiTipsSection from "./sections/BmiTipsSection";

const BmiPage = () => {
  return (
    <div className="bg-page text-ink">
      <BmiHeroSection />
      <Container className="flex flex-col gap-6 pb-16 pt-8 md:pb-24">
        <BmiCalculatorSection />
        <BmiTipsSection />
      </Container>
    </div>
  );
};

export default BmiPage;
