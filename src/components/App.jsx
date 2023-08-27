import { useState } from "react";
import { hollywoodStarts, filterButtons } from '../data';
import oscar from "../assets/images/oscar.png";
import ImageContainer from "./ImageContainer";
import Button from "./Button";

function App() {
  const [people, setPeople] = useState(hollywoodStarts);
  const [filterBarHight, setFilterBarHight] = useState('100px');
  const [filterBarBg, setFilterBarBg] = useState('transparent');

  //function names that filter images comes from the data array.
  const handleClickFunction = {
    filters: () => {
      setFilterBarBg(filterBarBg === 'transparent' ? '#535b61' : 'transparent');
      setFilterBarHight(filterBarHight === '100px' ? '630px' : '100px');
    },
    showAll: () => {
      const newArray = hollywoodStarts.filter((actor) => actor);
      setPeople(newArray);
    },
    filterMen: () => {
      const newArray = hollywoodStarts.filter(
        (actor) => actor.gender === 'male'
      );
      setPeople(newArray);
    },
    filterWomen: () => {
      const newArray = hollywoodStarts.filter(
        (actor) => actor.gender === 'female'
      );
      setPeople(newArray);
    },
    filterByAge: () => {
      const newArray = hollywoodStarts.slice().sort((a, b) => a.age - b.age);
      setPeople(newArray);
    },
    filterByName: () => {
      const newArray = hollywoodStarts
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      setPeople(newArray);
    },
    filterByPopularity: () => {
      const newArray = hollywoodStarts
        .slice()
        .sort((a, b) => b.popularity - a.popularity);
      setPeople(newArray);
    },
  }

  return (
    <>
      <section className="main-container">
        <div className="title-container">
          <h1>Hollywood Stars</h1>
          <img className="oscar" src={oscar} alt="oscar image" />
        </div>
        <div className="sub-container">
          <section className="filter-bar">
            <div
              className="filter-bar-buttons"
              style={{ height: filterBarHight, backgroundColor: filterBarBg }}
            >
              {
                filterButtons.map((button) => {
                  const { id, title, handleClick, viewBox, path } = button;
                  const onHandleClick = handleClickFunction[handleClick];
                  return (
                    <Button
                      key={id}
                      title={title}
                      handleClick={onHandleClick}
                      viewBox={viewBox}
                      path={path}
                    />
                  )
                })
              }
            </div>
          </section>
          <section className="gallery-section">
            {
              people.map((actor) => (
                <ImageContainer key={actor.id} {...actor} />
              ))
            }
          </section>
        </div>
      </section>
    </>
  )
}
export default App;
