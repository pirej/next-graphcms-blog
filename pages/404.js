import Image from "next/image";
import Link from "next/link";
import backImage from "../public/404.jpg";
import styled from "styled-components";

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #5b718c;
  }
  a {
    text-align: center;
    color: #3987e5;
    font-weight: 600;
  }
  .imgWpapper {
    display: flex;
    justify-content: center;
  }
`;

export default function NotFound() {
  return (
    <Styled404>
      <h1>Sorry, nothing to see here.</h1>
      <div className="imgWpapper">
        <Image
          src={backImage}
          width="1200"
          height="300"
          alt="404 - page not found"
        />
      </div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </Styled404>
  );
}
