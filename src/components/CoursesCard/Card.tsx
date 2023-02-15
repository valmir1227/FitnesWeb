import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import styled from "styled-components";
import { Container, Text } from "./styles";

interface CardProps {
  image: StaticImageData;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: CardProps) {
  return (
    <Container>
      <div className="image">
        <Image src={image} alt="" />
      </div>
      <Text>
        <h2>{text}</h2>
        <p>{title}</p>
        <Link href="/">
          Read more <RiArrowDropRightLine size="27px" />
        </Link>
      </Text>
    </Container>
  );
}
