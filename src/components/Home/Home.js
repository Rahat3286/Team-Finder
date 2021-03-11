import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Team Finder</h1>
            <div className="row">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;