import React from "react";
import "./Header.css";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import "../../assets/headerbg.jpg";
import Jermtheory from "../../assets/Jermtheory.svg";
const Header = () => {
  const [togglemenu, settogglemenu] = React.useState(false);
  return (
    <div className="app__bg">
        <div className="navigationbar">
          <div className="navigationbarlogo">
            <img src={Jermtheory} className="logo" alt="logo" />
          </div>
          <ul className="nav__links">
            <li>
              <a className="p__font" href="#Header">
                Home
              </a>
            </li>
            <li>
              <a className="p__font" href="#Work">
                My work
              </a>
            </li>
            <li>
              <a className="p__font" href="About">
                About me
              </a>
            </li>
          </ul>
          <div className="navbar-smallscreen">
            <MdMenu
              className="flex__center"
              fontSize={27}
              color="white"
              onClick={() => settogglemenu(true)}
            />

            {togglemenu && (
              <div className="navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineClose
                  className="overlayclose"
                  color="white"
                  fontSize={27}
                  onClick={() => settogglemenu(false)}
                />
                <ul className="navbar-smallscreen_links">
                  <li>
                    <a className="p__font" href="#Header">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="p__font" href="#Work">
                      My work
                    </a>
                  </li>
                  <li>
                    <a className="p__font" href="About">
                      About me
                    </a>
                  </li>
                </ul>
              </div>
            )}
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
