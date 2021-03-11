import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './TeamDetail.css';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamId]);

    return (
        <div className="container">
            <div className="card" style={{ maxWidth: "18rem" }}>
                {/* { CONDITIONAL FORMATTING
                    teamDetails.strGender === 'Male' ? <img src={male} alt="male" /> : <img src={female} alt="female"/>
                } */}
                <img src={teamDetails.strTeamBadge} alt="" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h2>{teamDetails.strTeam}</h2>
                    <h5><FontAwesomeIcon icon={faHistory}></FontAwesomeIcon> Founded: {teamDetails.intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>  Country: {teamDetails.strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>  Sports Type: {teamDetails.strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars}></FontAwesomeIcon>  Gender : {teamDetails.strGender}</h5>
                </div>
                <div className="card col-md-6" style={{maxWidth:"18rem"}}>
                    <img src={teamDetails.strTeamFanart1} alt=""/>
                </div>
            </div>
            
            <p> <b>{teamDetails.strDescriptionEN}</b> </p>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="social-icons d-flex justify-content-center align-items-center">
                            <a id="facebook" href={`https://${teamDetails.strFacebook}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>}</a>
                            <a id="twitter" href={`https://${teamDetails.strtwitter}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>}</a>
                            <a id="instagram" href={`https://${teamDetails.strInstagram}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>}</a>
                            <a id="youtube" href={`https://${teamDetails.stryoutube}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;

// <FontAwesomeIcon icon={faTwitter }></FontAwesomeIcon>