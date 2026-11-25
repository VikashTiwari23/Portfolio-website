import { useEffect, useRef, useState } from "react";
import { info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { Particles } from "./magicui/Particles";
import NeonGradientCard from "./magicui/neon-gradient-card-demo";

const About = () => {
  const dotsRef = useRef<any>(null);
  const trunkRef = useRef<any>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [profileImage, setProfileImage] = useState("VikashTiwari.jpeg");

  useEffect(() => {
    dotsRef.current = DOTS({
      el: "#bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x64ffda,
      backgroundColor: 0x112240,
      color2: 0x2064ff,
      showLines: false,
      size: 3,
      spacing: 20.0,
    });

    trunkRef.current = TRUNK({
      el: "#photo",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x64ffda,
      backgroundColor: 0x112240,
      spacing: 0.0,
      chaos: 4.0,
    });

    return () => {
      dotsRef.current?.destroy();
      trunkRef.current?.destroy();
    };
  }, []);
  return (
    <>
      <div
        id="about"
        className="flex relative px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16 xl:px-20 font-mono min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] overflow-hidden justify-between items-center scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24 xs-mx:flex-col-reverse xs-mx:!overflow-visible xs-mx:gap-4 md-mx:gap-4 lg-mx:gap-8"
      >
        <Particles className="absolute inset-0 -z-20"  quantity={1000} ease={80} color={"#64FFDA"} refresh />
        <div className="flex flex-col xs-mx:items-center xs-mx:text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full xs-mx:w-full">
          <div className="text-2xl sm:text-3xl md:text-4xl text-primaryColor">Hi, I am</div>
          <div className="!text-whiteColor font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {info.name}
          </div>
          <div className="text-whiteColor font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-wrap justify-center xs-mx:justify-center gap-2">
            I'm a&nbsp;
            <span className="text-primaryColor ">
              <Typewriter
                options={{
                  strings: info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-base sm:text-lg md:text-xl lg:text-2xl font-semibold my-4 md:my-8 w-full max-w-2xl xs-mx:text-center">
            {info.bio}
          </div>
          <div className="flex flex-wrap gap-4 justify-center xs-mx:justify-center">
            <Button
              onClick={open}
              color="#64FFDA"
              size="lg"
              className="!text-bgColor !w-fit rounded-full"
              variant="filled"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              href="Vikash_Tiwari_.pdf"
              download={info.name}
              color="#64FFDA"
              size="lg"
              className="!text-primaryColor !w-fit rounded-full"
              variant="outline"
            >
              Download
            </Button>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-full sm:w-[30%] md:w-[25%] lg:w-[20%] flex items-center justify-center"
        >
           <NeonGradientCard className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto aspect-square min-w-[200px] min-h-[200px] sm:min-w-[250px] sm:min-h-[250px] md:min-w-[280px] md:min-h-[280px] lg:min-w-[320px] lg:min-h-[320px] items-center justify-center text-center">
            <img
              className="w-full h-full rounded-full object-cover object-top"
              src={profileImage}
              alt="Vikash Tiwari"
              onError={() => setProfileImage("avatar.jpg")}
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
