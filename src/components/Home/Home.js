import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);

    const homeStyle={
        margin: 0,
        padding:0,
        backgroundColor: "rgb(14, 11, 41)"
    }

    return (
        <div style={homeStyle} className="container-fluid">
            <div className="container-fluid background-image mb-4"><span>Team Finder</span></div>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;