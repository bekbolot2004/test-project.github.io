import SkillsSection from "./Components/SkillsSection";
import SliderProgramsSection from "./Components/SliderProgramsSection";
import StepSection from "./Components/StepSection";
import TrialSection from "./Components/TrialSection";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import WhatSayStudentsAbout from "./Components/WhatSayStudentsAbout";
import Works from "./Components/Works";
import SacrillClub from "./Components/SacrillClub";
import SliderBlock from "./Components/SliderBlock";

function App() {
  return (
    <>
      <StepSection/>
      <TrialSection/>
      <SkillsSection/>
      <SliderProgramsSection/>
      {/* <div className="flex flex-col items-center bg-center bg-cover mt-60" style={{backgroundImage: `url(${img})`, height: '2900px'}}>

      </div> */}
      <SacrillClub/>
      <Works/>
      <WhatSayStudentsAbout/>
      <SliderBlock/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default App;
