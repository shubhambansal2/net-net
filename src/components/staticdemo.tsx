import image1 from '@/../public/homepagephone1.png';
// import image2 from '@/../public/homepagephone2.png';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const StaticDemo = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 my-4">
          <div className="imageContainer">
          <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem>
              <Image src={image1} alt="Empower conversations"  className="h-42 w-42 md:h-50 md:w-50" priority={true} />
            </CardItem>
          </CardBody>
        </CardContainer>
          </div>
            <div className={"imageContainer"}>
              {/* Add icons here */}
            </div>
          </div>
      );
    };
    
export default StaticDemo;