import React from "react";
import Card from "../components/Card";
import { SVG } from "../asset/svg/Svg";


const Services = () => {
  return (
    <section className="section2">
      <h2>Our services</h2>
      <p className="servicesText">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="servicesImg">
        <Card Img={SVG.Trafalgarsearch} />
        <Card Img={SVG.Trafalgaronlinepharmarmacy}/>
        <Card Img={SVG.Trafalgarconsultation}/>
        <Card Img={SVG.Trafalgardetailnote}/>
        <Card Img={}/>
        <Card Img={SVG.Trafalgartracking}/>
      </div>
      
    </section>
  );
};

export default Services;
