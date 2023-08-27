const FilterSvg = ({ path, viewBox }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      height="2em"
      width="2em"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path}></path>
    </svg>
    
  )
}
export default FilterSvg;