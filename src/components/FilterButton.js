function FilterButton(props) {
  return (
    <>
      <li>
        <button
          onClick={() => props.setFilter(props.name)}
          type="button"
          className="control__li-butt"
          aria-pressed={props.isPressed}
        >
          {props.name}
        </button>
      </li>
    </>
  );
}

export default FilterButton;
