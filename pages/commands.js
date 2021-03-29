import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommandsList from "../components/CommandsList";

export default function Commands() {
  return (
    <>
      <div className="commands-list-section">
        <p className="is-size-4 mb-5 is-align-items-center">
          <span className="icon commands-list-icon">
            <FontAwesomeIcon icon={faTwitch} />
          </span>
          <span className="ml-5">Comandos del stream</span>
        </p>
        <CommandsList />
      </div>
    </>
  );
}
