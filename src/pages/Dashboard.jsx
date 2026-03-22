import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import client from "../api/client"

function Dashboard() {
    const [leagues, setLeagues] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        client.get('/leagues/')
            .then(res => setLeagues(res.data))
            .catch(err => console.error(err))
    }, [])

    return(
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
            <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Leagues</h2>
                    <button
                        onClick={() => navigate(`/leagues/join`)}
                        className='bg-gray-700 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded transition'
                    >
                        + Join League
                    </button>
                    <button
                        onClick={() => navigate(`/leagues/create`)}
                        className='bg-green-500 hover:bg-green-400 text-black font-bold px-4 py-2 rounded transition'
                    >
                        + Create League
                    </button>
                </div>

                {leagues.length === 0 ? (
                    <p className="text-gray-400">No leagues yet. Create one to get started!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {leagues.map(league => (
                            <div
                                key={league.id}
                                onClick={() => navigate(`/leagues/${league.id}`)}
                                className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition"
                            >
                                <h3 className='text-xl font-bold text-green-400'>{league.name}</h3>
                                <p className='text-gray-400 mt-1'>{league.sport.toUpperCase()}</p>
                                <p className='text-gray-500 text-sm mt-2'>Max teams: {league.max_teams}</p>
                                <p className='text-gray-500 text-sm'>Invite code: <span className='text-green-400 font-mono'>{league.invite_code}</span></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Dashboard