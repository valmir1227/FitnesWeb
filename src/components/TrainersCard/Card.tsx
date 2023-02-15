import Image from "next/image";
import Link from "next/link";
import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import tikTokLogo from "../../assets/tik-tok.png";
import { Container, Profile, SocialMedia } from "./styles";

interface CardProps {
  name: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  role: string;
  image: string;
  description: string;
}

export default function Card({
  name,
  instagram,
  facebook,
  tiktok,
  role,
  image,
  description,
}: CardProps) {
  return (
    <Container>
      <Profile>
        <div className="image">
          <Image src={image} alt="asa" width={360} height={450} />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{role}</span>
          <SocialMedia>
            <Link href={instagram} target="_blank">
              <Image src={instagramLogo} alt="logo instagram " />
            </Link>

            <Link href={facebook} target="_blank">
              <Image src={facebookLogo} alt="logo facebook" />
            </Link>

            <Link href={tiktok} target="_blank">
              <Image src={tikTokLogo} alt="logo tiktok" />
            </Link>
          </SocialMedia>
        </div>
      </Profile>
    </Container>
  );
}
