import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Title from "./Title";

const Navigation = styled.header`
  background-color: #3987e5;
  .topHeader {
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12%;
    @media (min-width: 1281px) {
      padding: 0 10%;
    }
    @media (max-width: 1280px) {
      padding: 0 8%;
    }
    @media (max-width: 1024px) {
      padding: 0 8%;
    }
    @media (max-width: 768px) {
      padding: 0 6%;
    }
    @media (max-width: 480px) {
      /*  */
    }
    @media (max-width: 414px) {
      font-size: 0.9rem;
    }

    .imgWrapper {
      /* padding-top: 0.2rem; */
      img {
      }
    }
    nav {
      ul {
        display: flex;
        /* padding-top: 1rem; */
        li {
          list-style: none;
          a {
            font-size: 0.9rem;
            padding-left: 3rem;
            @media (max-width: 480px) {
              padding-left: 2rem;
            }
            @media (max-width: 280px) {
              padding-left: 1rem;
              /* font-size: 0.8rem; */
            }
          }
        }
      }
    }
  }
`;

const MainNavigation = () => {
  return (
    <Navigation>
      <div className="topHeader">
        <div className="imgWrapper">
          <Link href="/">
            <a>
              {/* <Image src="/logo.png" height={49} width={140} alt="logo" /> */}
              <Image src="/logo.svg" height={44} width={126} alt="logo" />
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link href="/">
        <a>
          <Title />
        </a>
      </Link>
      {/* <Title /> */}
    </Navigation>
  );
};

export default MainNavigation;
