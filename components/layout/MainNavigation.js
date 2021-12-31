import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  height: 4rem;
  /* background-color: teal; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  .imgWrapper {
    img {
      /* background-color: red; */
    }
  }
  nav {
    ul {
      display: flex;

      li {
        list-style: none;
        a {
          /* color: red; */
          padding-left: 3rem;
        }
      }
    }
  }
`;

const MainNavigation = () => {
  return (
    <Navigation>
      <div className="imgWrapper">
        <Link href="/">
          <a>
            <Image src="/logo.png" height={44} width={126} alt="logo" />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
};

export default MainNavigation;
