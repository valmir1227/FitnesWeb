import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import GlobalButton from "../Button/Button";
import { Head, Mobile } from "./styles";
import { useEffect, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import NavLink from "components/NavLink/NavLink";

export default function Header() {
  const [winSize, setWinSize] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setWinSize(window.innerWidth);
    window.addEventListener("resize", () => setWinSize(window.innerWidth));
  }, []);

  return (
    <div>
      {winSize > 850 ? (
        <Head>
          <h1>
            GYM <span>FIT</span>
          </h1>
          <nav>
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/courses" text="Courses" />
            <NavLink href="/schedule" text="Schedule" />
            <NavLink href="/blog" text="Blog" />
            <NavLink href="/trainers" text="Trainers" />
          </nav>
        </Head>
      ) : (
        <Mobile>
          <h1>
            GYM <span>FIT</span>
          </h1>
          <div>
            {toggleMenu && (
              <nav>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/about">
                  <li>About us</li>
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
                <Link href="/trainers">
                  <li>Trainers</li>
                </Link>
              </nav>
            )}

            {toggleMenu ? (
              <AiOutlineClose
                size="30px"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <AiOutlineAlignLeft
                size="30px"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
          </div>
        </Mobile>
      )}
    </div>
  );
}
