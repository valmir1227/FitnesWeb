import Link from "next/link";
import { Button } from "./styles";

interface GlobalButtonProps {
  text: string;
  href: string;
}

export default function GlobalButton({
  text,
  href,
}: GlobalButtonProps) {
  return (
    <Link href={href}>
      <Button>{text}</Button>
    </Link>
  );
}
