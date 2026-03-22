import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client  from "../api/client";
import Navbar from '../components/Navbar'

function LeagueDetail() {
    const { id } = useParams()
    const [league, setLeague] = useState(null)

    useEffect(() => {
        client.get(`/leagues/${id}`)
            .then(res => setLeague(res.data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <Navbar />
            <div className="p-8">
                {league ? (
                    <div className="bg-gray-800 p-6 rounded-lg max-w-lg">
                        <h2 className="text-3xl font-bold text-green-400 mb-4">{league.name}</h2>
                        <p className="text-gray-400">Sport: <span className="text-white">{league.sport.toUpperCase()}</span></p>
                        <p className="text-gray-400 mt-2">Max Teams: <span className="text-white">{league.max_teams}</span></p>
                        <p className="text-gray-400 mt-2">Invite Code: <span className="text-green-400 font-mono text-lg">{league.invite_code}</span></p>
                    </div>
                ) : (
                    <p className="text-gray-400">Loading...</p>
                )}
            </div>
        </div>
    )
}
export default LeagueDetail