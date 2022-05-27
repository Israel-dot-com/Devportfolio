import React from "react";
import "./Header.css";
import { MdMenu } from "react-icons/md";
import "../../assets/headerbg.jpg";
import Jermtheory from "../../assets/Jermtheory.svg";
const Header = () => {
  const [togglemenu, settogglemenu] = useState(false)
  return (
    <div className="app__bg app__section">
      <div className="nav__padding">
        <div className="navigationbar">
          <img src={Jermtheory} className="logo" alt="logo" />
          <nav>
            <ul className="nav__links">
              <li>
                <a id="Header" href="#Header">
                  Home
                </a>
              </li>
              <li>
                <a id="Work" href="#Work">
                  My work
                </a>
              </li>
              <li>
                <a id="About" href="About">
                  About me
                </a>
              </li>
            </ul>
          </nav>
          <div className="navbar-smallscreen">
          <MdMenu className="flex__center" fontSize={27} color="white" />
        </div>
          {/* <a className='buttonlink' href='#navbar'><button className='custom__button'>Download my portfolio</button></a> */}
        </div>
        
      </div>






















      {/* Header Begin */}

      <div className="header__content">
        <h1>Eze chiddinma</h1>
        <p>
          Hey guys, I guess you can call me Jerm, I'm a Computer Science student
          currently in my 3rd year. Been in the crypto space for a about some
          years now and currently looking to be part of some solid NFT
          communities. I build websites and looking to integrate my existing
          skills with web3. Truly excited to be a part of Ragnarok and
          particularly this early.
        </p>
      </div>
    </div>
  );
};

export default Header;
