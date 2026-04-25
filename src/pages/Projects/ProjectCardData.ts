import upverterImage from "../../assets/projects/upverter.jpg";
import smeImage from "../../assets/projects/sme.png";
import bobImage from "../../assets/projects/bob.jpg";
import quasarImage from "../../assets/projects/quasar.jpg";
import synsImage from "../../assets/projects/syns.jpg";
import chronoImage from "../../assets/projects/chrono.jpg";
import sunchargedImage from "../../assets/projects/suncharged.jpg";

export type ProjectCardData = {
  title: string;
  description: string;
  date: string;
  image: string;
  imageOverflowClass?: string;
};

export const featuredProject: ProjectCardData = {
  title: "Upverter Innovation for Environmental Change",
  date: "FALL 2021",
  image: upverterImage,
  description:
    "Six NETS student teams represented UCSD in the Upverter PCBeTheChange Challenge in Fall 2021, tasked with designing an environmental solution using modular PCB design software and the Arduino Portenta H7. Team PCBrilliance advanced to the final round with their Stingray Voltage Detection concept, addressing increased stingray incidents in San Diego.",
};

export const pastProjects: ProjectCardData[] = [
  {
    title: "SME Digital Manufacturing Challenge",
    date: "WINTER 2020 - 2021",
    image: smeImage,
    imageOverflowClass: "h-[140%] w-[140%]",
    description:
      "In this nationwide competition, NETS represented UCSD and received honorable mention for its conceptual product design on vacuum flasks for cold supply chains using additive manufacturing.",
  },
  {
    title: "Bane Of Bio-Organisms (B.O.B)",
    date: "SUMMER 2020",
    image: bobImage,
    description:
      "NETS members competed in the 2020 Micron UV Robot Design Challenge and built B.O.B., an open-source UV disinfection robot with complete documentation published on Hackster.",
  },
  {
    title: "QUASAR: Quantum and Simulation with Applied Research through Mach-Zehnder Interferometry",
    date: "SUMMER 2020",
    image: quasarImage,
    description:
      "Built and explored interferometric experiments using a Mach-Zehnder setup, emphasizing reliable progress despite limited access to dedicated optics lab space.",
  },
  {
    title: "Synthetic Nanofiber Skin (SyNS): A Hands-On Approach to Tissue Engineering in Nano-Biomedicine",
    date: "SUMMER 2020",
    image: synsImage,
    description:
      "Developed prototype wound dressings using biomaterials and iterated formulations based on basic performance testing.",
  },
  {
    title: "Chrono Lithos: Development of a Low-Cost Bench-Top Photolithography Platform for Rapid Prototyping Microfabrication",
    date: "SUMMER 2020",
    image: chronoImage,
    description:
      "Built accessible fabrication tooling to support rapid prototyping, starting with a student-built spin coater.",
  },
  {
    title: "SunCharged: A Portable Solar-Powered Charging Device with Rechargeable Battery Storage",
    date: "SUMMER 2020",
    image: sunchargedImage,
    description:
      "Supported teams building and testing a solar-battery charging platform through standardized kit-based development.",
  },
];
