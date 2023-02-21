import Link from "next/link";
import Image from "next/image";
import {
  Contact,
  Container,
  Instagram,
  Links,
  Logo,
  SciContainer,
} from "./styles";

import FacebookLogo from "../../assets/facebook.png";
import InstagramLogo from "../../assets/instagram.png";
import GithubLogo from "../../assets/github.png";
import Gallerry1 from "../../assets/gallery_1.png";
import Gallerry2 from "../../assets/gallery_2.png";
import Gallerry3 from "../../assets/gallery_3.png";
import Gallerry4 from "../../assets/gallery_4.png";
import Gallerry5 from "../../assets/gallery_5.png";
import Gallerry6 from "../../assets/gallery_8.png";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <Container>
      <Logo>
        <h1>
          GYM <span>FIT</span>
        </h1>

        <p>
          ligula sed porta cursus, lectus ligula interdum tortor, vitae tempor
          leo eros lobortis ante. Integer semper, metus in tincidunt euismod.
        </p>
        <SciContainer>
          <div>
            <Link
              href="https://www.instagram.com/valmiralmeidadev/"
              target="_blank"
            >
              <Image src={InstagramLogo} alt="" />
            </Link>
            <Link
              href="https://www.facebook.com/valmir.almeida.5454/"
              target="_blank"
            >
              <Image src={FacebookLogo} alt="" />
            </Link>
            <Link href="https://github.com/valmir1227" target="_blank">
              <Image src={GithubLogo} alt="" />
            </Link>
          </div>
        </SciContainer>
      </Logo>

      <Links>
        <h3>Links</h3>
        <nav>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>

          <Link href="/courses">
            <li>Courses</li>
          </Link>
          <Link href="/schedule">
            <li>Schedule</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </nav>
      </Links>

      <Instagram>
        <Link
          href="https://www.instagram.com/valmiralmeidadev/"
          target="_blank"
        >
          <h3>Instagram</h3>
          <div className="grid-container">
            <Image src={Gallerry1} alt="" />
            <Image src={Gallerry2} alt="" />
            <Image src={Gallerry3} alt="" />
            <Image src={Gallerry4} alt="" />
            <Image src={Gallerry5} alt="" />
            <Image src={Gallerry6} alt="" />
            <Image src={Gallerry2} alt="" />
            <Image src={Gallerry3} alt="" />
            <Image src={Gallerry5} alt="" />
          </div>
        </Link>
      </Instagram>

      <Contact>
        <h3>CONTACT US</h3>
        <p>
          <BsTelephoneFill color="#EF6C09" size="16px" />{" "}
          <a href="tell">(33) 99111-3641</a>
        </p>
        <p>
          <MdEmail color="#EF6C09" size="16px" />{" "}
          <a href="mailto:almeidavalmir76@gmail.com">
            almeidavalmir76@gmail.com
          </a>
        </p>
        <p>
          <IoLocationSharp color="#EF6C09" size="16px" />{" "}
          <a>
            1011Santa Monica <br /> <br /> boulevard Los Angeles
          </a>
        </p>
      </Contact>
    </Container>
  );
}
