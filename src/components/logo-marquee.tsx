import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import image1 from '@/../public/integrationlogos/Langchain.png';
import image2 from '@/../public/integrationlogos/LlamaIndex.png';
import image3 from '@/../public/integrationlogos/MistralAI.png';
import image4 from '@/../public/integrationlogos/MongoDb.png';
import image5 from '@/../public/integrationlogos/Tailwind.png';
import image6 from '@/../public/integrationlogos/Heroku_logo.png';
import image7 from '@/../public/integrationlogos/reactjs_logo.png';

const photos = [
image1,
image2,
image3,
image4,
image5,
image6,
image7,
];

const Photo = styled.img`
  width: 180px;
  height: 35px;
    margin-right: 10px;
`;

const IntegrationLogos = () => (
  <div>
    <div style={{ height: 50 }}>
      <Marquee
        velocity={25}
        direction="rtl"
        scatterRandomly={false}
        resetAfterTries={100}
        onInit={() => {}}
        onFinish={() => {}}
      >
        {times(7, Number).map((i) => (
          <Photo key={i} src={photos[i].src} style={{ 
            marginLeft: "70px", }}  />
        ))}
      </Marquee>
    </div>
  </div>
);

export default IntegrationLogos;