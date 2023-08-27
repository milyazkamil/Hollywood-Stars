import FilterSvg from "./FilterSvg";

const Button = ({ title, handleClick, path, viewBox }) => {
  return (
    <div className="button-container">
      <button onClick={handleClick} className="filter-button" type="button">
        <span>
          <FilterSvg path={path} viewBox={viewBox} />
          <span>{title}</span>
        </span>
      </button>
    </div>
  )
}
export default Button;