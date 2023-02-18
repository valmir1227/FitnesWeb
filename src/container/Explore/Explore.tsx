import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import play from "../../assets/play.png";
import { Container } from "./styles";
import Image from "next/image";

export default function Explore() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <div>
        <>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="4-zjQvTDnbw"
            onClose={() => setOpen(false)}
          />

          <Image src={play} alt="play button" onClick={() => setOpen(true)} />
        </>
        <h1>EXPLORE FITNESS COMPLEX</h1>
        <p>Watch Now</p>
      </div>
    </Container>
  );
}
