function SortButton(props) {
  let buttonLabel;
  switch (props.name) {
    case "Alphabetical":
      buttonLabel = "Alphabet";
      break;
    case "Area":
      buttonLabel = "Area";
      break;
    case "PopulationAsc":
      buttonLabel = "Population (1-0)";
      break;
    case "PopulationDesc":
      buttonLabel = "Population (0-1)";
      break;
    default:
      buttonLabel = "sort";
  }

  return (
    <>
      <li>
        <button
          onClick={() => props.setSortBy(props.name)}
          type="button"
          className="control__li-butt"
          aria-pressed={props.isPressed}
        >
          {buttonLabel}
        </button>
      </li>
    </>
  );
}

export default SortButton;
