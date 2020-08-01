import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroPage = ({history}) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if ( !hero ) {
      return <Redirect to='/'/>;
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
      if(history.length <= 2) {
          history.push('/');
      } else history.goBack();
  }

  return (
    <div className='row mt-5'>
        <div className='col-md-4'>
            <img 
                src={`../assets/heroes/${heroId}.jpg`}
                className='img-thumbnail animate__animated animate__fadeInLeft'
                alt={superhero}
            />
        </div>
        <div className='col-md-8 animate__animated animate__fadeIn'>
            <h3> {superhero} </h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    Alter Ego; <b> {alter_ego} </b>
                </li>
                <li className='list-group-item'>
                    Publisher: <b> {publisher} </b>
                </li><li className='list-group-item'>
                    First appearance: <b> {first_appearance} </b>
                </li>
            </ul>

            <h5>
                Characteres
            </h5>
            <p> {characters} </p>

            <button className='btn btn-outline-info'
            onClick={handleReturn}>
                Return
            </button>
        </div>
    </div>
  );
};