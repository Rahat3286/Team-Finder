import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faFlag, faFutbol, faMars, faStadium } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './TeamDetail.css';
import male from '../image/female.png';
import female from '../image/male.png';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamId]);

    const teamDetailBodyStyle = {
        margin: 0,
        padding: 0,
        backgroundColor: "rgb(14, 11, 41)"
    }

    const teamSummaryStyle = {
        backgroundColor: "rgb(62,73,250)",
        fontFamily: "calibri",
        color: "white",
        borderRadius: "20px"
    }
    const teamDescriptionStyle = {
        fontSize: "20px",
        fontFamily: "calibri",
        color: "white"
    }

    return (
        <div style={teamDetailBodyStyle} className="container-fluid">
            <div className="col d-flex justify-content-center background-stadium-image">
                <img style={{height:"208px",width:"213px"}} className="img-fluid mt-5" src={teamDetails.strTeamBadge} alt="" />
            </div>
            {/* <img style={{width:"100%",height:"400px"}} src={teamDetails.strStadiumThumb} class="img-fluid" alt="Responsive image"></img> */}
            <div className="container pt-4">
                <div style={teamSummaryStyle} className="row mb-4">
                    <div className="col-md-6 pt-5">
                        <h2>{teamDetails.strTeam}</h2>
                        <h5><FontAwesomeIcon icon={faHistory}></FontAwesomeIcon> Founded: {teamDetails.intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>  Country: {teamDetails.strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>  Sports Type: {teamDetails.strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMars}></FontAwesomeIcon>  Gender : {teamDetails.strGender}</h5>
                    </div>
                    <div className="col-md-6 p-3">
                        <div>
                            {
                                teamDetails.strGender === 'Male' ? <img src={female} className="img-fluid" alt="female" /> : <img src={male} className="img-fluid" alt="male" />
                            }
                        </div>
                    </div>
                </div>
                <div style={teamDescriptionStyle} className="col-md-12">
                    <p> {teamDetails.strDescriptionEN} </p><br />
                    <p>{teamDetails.strStadiumDescription}</p>
                </div>
                <footer>
                    <div className="container team-description">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="social-icons d-flex justify-content-center align-items-center">
                                    <a id="facebook" href={`https://${teamDetails.strFacebook}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>}</a>
                                    <a id="twitter" href={`https://${teamDetails.strTwitter}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>}</a>
                                    <a id="instagram" href={`https://${teamDetails.strInstagram}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>}</a>
                                    <a id="youtube" href={`https://${teamDetails.strYoutube}`} target="_blank" rel="noreferrer">{<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default TeamDetail;

// <FontAwesomeIcon icon={faStadium }></FontAwesomeIcon>


