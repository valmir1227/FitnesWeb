import Image from "next/image";
import Link from "next/link";
import { dateFormatter } from "utils/dateFormater";
import { Container, Text } from "./styles";
interface CardProps {
  image: string;
  publishDate: Date;
  title: string;
  content: string;
}

export default function Card({
  image,
  publishDate,
  title,
  content,
}: CardProps) {
  return (
    <Container>
      <Link href="/blog">
        <div>
          <Image src={image} alt="" width={500} height={500} />
        </div>

        <Text>
          <span>{dateFormatter.format(publishDate)}</span>
          <h3>{title}</h3>
          <p>{content}</p>
        </Text>
      </Link>
    </Container>
  );
}
