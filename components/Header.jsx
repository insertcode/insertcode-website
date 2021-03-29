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
          <h3 className="host-name">Fernando</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/xabadu"
            className="host-twitter is-size5"
          >
            @xabadu
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
          <h3 className="host-name">Thiago</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/arroadie"
            className="host-twitter is-size5"
          >
            @arroadie
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
