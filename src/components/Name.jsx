const Name = ({ name, surname, age, opacity }) => {
  return (
    <div style={{ opacity: opacity }} className="name-container" >
      <h3 >
        {name} {surname}
      </h3>
      <h4>{age} years</h4>
    </div>
  )
}
export default Name;