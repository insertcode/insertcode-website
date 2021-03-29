import React from "react";
import Link from "next/link";
import {
  faTwitch,
  faYoutube,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Grid = () => (
  <div className="section-grid">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child box twitch-tile">
          <a href="https://twitch.tv/insertcode" target="_blank" rel="noopener">
            <p className="tile-title is-size-3">
              <span className="icon">
                <FontAwesomeIcon icon={faTwitch} />
              </span>
              <span className="ml-3">Twitch</span>
            </p>
            <p className="is-size-6">En vivo cada Jueves</p>
            <ul className="is-size-6 stream-times">
              <li>
                <span className="flags">🇨🇱🇦🇷🇧🇷🇺🇾</span>
                <span className="times">9 pm GMT-3</span>
              </li>
              <li>
                <span className="flags">🇨🇴🇪🇨🇵🇪</span>{" "}
                <span className="times">7 pm GMT-5</span>
              </li>
              <li>
                <span className="flags">🇧🇴🇵🇾🇻🇪</span>
                <span className="times">8 pm GMT-4</span>
              </li>
              <li>
                <span className="flags">🇲🇽</span>
                <span className="times">6 pm CST GMT-7</span>
              </li>
              <li>
                <span className="flags">🇪🇸</span>
                <span className="times">2 am GMT+2</span>
              </li>
              <li>
                <span className="flags">🇺🇸</span>
                <span className="times">5 pm PDT GMT-7</span>
              </li>
            </ul>
          </a>
        </article>
        <article className="tile is-child box discord-tile">
          <a
            href="https://discord.gg/xJaACbkDvJ"
            target="_blank"
            rel="noopener"
          >
            <p className="tile-title is-size-3">
              <span className="icon">
                <FontAwesomeIcon icon={faDiscord} />
              </span>
              <span className="ml-3">Discord</span>
            </p>
            <p className="is-size-6">Únete a la comunidad</p>
          </a>
        </article>
      </div>
      <div className="tile is-parent is-vertical">
        <article className="tile is-child box youtube-tile">
          <a
            href="https://www.youtube.com/channel/UCksPBdsbEKCcR_dUyTSENDw"
            target="_blank"
            rel="noopener"
          >
            <p className="tile-title is-size-3">
              <span className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span className="ml-3">YouTube</span>
            </p>
            <p className="is-size-6">Episodios anteriores</p>
          </a>
        </article>
        <article className="tile is-child box github-tile">
          <a
            href="https://github.com/insertcode"
            target="_blank"
            rel="noopener"
          >
            <p className="tile-title is-size-3">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span className="ml-3">GitHub</span>
            </p>
            <p className="is-size-6">Código y proyectos</p>
          </a>
        </article>
        <Link href="/commands">
          <article className="tile is-child notification is-warning commands-tile">
            <p className="tile-title is-size-3">
              <span className="icon">
                <FontAwesomeIcon icon={faExclamation} />
              </span>
              <span className="ml-3">Comandos</span>
            </p>
            <p className="is-size-6">Para usar en el stream</p>
          </article>
        </Link>
      </div>
    </div>
  </div>
);

export default Grid;
