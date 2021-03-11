import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/teamDetail/${teamId}`;
        history.push(url);
    }


    return (
        <div className="col-md-4">
            <div className="card align-items-center m-2 p-2" style={{ maxWidth: "370px", maxHeight: "362px" }}>
                <img style={{ maxWidth: "130px", maxHeight: "130px" }} className="card-img-top" src={strTeamBadge} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center"> <b>{strTeam}</b> </h5>
                    <p className="card-text text-center">Sports type: {strSport}</p>
                    <button className="btn btn-primary" onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Team;