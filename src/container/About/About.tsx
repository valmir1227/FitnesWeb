import Image from "next/image";
import GlobalButton from "../../components/Button/Button";
import aboutImg from "../../assets/about.png";
import { AboutContainer, ImageContainer, Text } from "./styles";

export default function About() {
  return (
    <AboutContainer>
      <Text>
        <h1>ABOUT GYMFIT</h1>
        <p>
          Cras at cursus lorem, ac blandit leo. Morbi pulvinar orci dui, vitae
          laoreet arcu ultricies at. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.tempus.
        </p>
        <p>
          Fusce dapibus pellentesque pharetra. Phasellus turpis nibh, sagittis
          quis sollicitudin eget, sollicitudin eget sem. Suspendisse sodales
          bibendum tellus in rhoncus. Quisque non pellentesque urna, at sodales
          est. In metus urna, cursus sed porttitor eu, faucibus pulvinar mi.
        </p>

        <GlobalButton href="/about" text="CONTACT US" />
      </Text>
      <ImageContainer>
        <Image src={aboutImg} alt="" />
      </ImageContainer>
    </AboutContainer>
  );
}
