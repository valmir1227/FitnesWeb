import Image from "next/image";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import Container from "./styles";

import bannerUp from "../../assets/banner-up1.png";

export default function Home() {
  return (
    <Container>
      <div className="banner">
        <Image src={bannerUp} alt="" />
      </div>
      <div>
        <h1>
          BUILD <br /> YOUR BODY
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, eos
          doloribus aliquid facere nostrum excepturi assumenda est minima
          accusantium nobis sequi voluptate temporibus laboriosam autem soluta.
        </p>
        <Link href="/">
          Contact us <RiArrowDropRightLine size="27px" />
        </Link>
      </div>
    </Container>
  );
}
