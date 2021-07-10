import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="header-container">
    <div className="header-host is-hidden-mobile">
      <div className="host-info">
        <img
          src="/images/xabadu.png"
          alt="Avatar Xabadu"
          className="host-avatar"
        />
        <div className="host-name-social">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/xabadu">
            <h3 className="host-name">@xabadu</h3>
          </a>
        </div>
      </div>
    </div>
    <div className="header-logo">
      <Link href="/">
        <img src="/images/logo.png" alt="Logo Insert Code" />
      </Link>
    </div>
    <div className="header-host host-right is-hidden-mobile">
      <div className="host-info">
        <div className="host-name-social mr-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/arroadie"
          >
            <h3 className="host-name">@arroadie</h3>
          </a>
        </div>
        <img
          src="/images/thiago.png"
          alt="Avatar arroadie"
          className="host-avatar"
        />
      </div>
    </div>
  </header>
);

export default Header;
