export type AboutValue = {
  title: string;
  description: string;
};

export type AboutWhatWeDoItem = {
  label: string;
  image: string;
  alt: string;
};

export type AboutContent = {
  mission: {
    titleLines: string[];
    tagline: string;
    heroImage: string;
    heroAlt: string;
  };
  valuesSectionTitle: string;
  values: AboutValue[];
  whatWeDoSectionTitle: string;
  whatWeDo: AboutWhatWeDoItem[];
  sponsor: {
    image: string;
    imageAlt: string;
    heading: string;
    body: string;
    buttonLabel: string;
  };
};
