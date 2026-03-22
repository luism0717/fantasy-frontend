import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import client from "../api/client"

function Players() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        client.get(`/players/`)
            .then(res => setPlayers(res.data))
            .catch(err => console.error(err))
    }, [])

return (
    <div className='bg-gray-900 min-h-screen text-white'>
        <Navbar />
        <div className='p-8'>
            <h2 className='text-2xl font-bold mb-8'>Players</h2>
            {players.length === 0 ? (
                <p className='text-gray-400'>No players found.</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {players.map(player => (
                        // Build a card for each player here
                        // Show player.name, player.position, player.nfl_team
                            <div
                                key={player.id}
                                className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700 transition"
                            >
                                <h3 className='text-xl font-bold text-green-400'>{player.name}</h3>
                                <p className='text-gray-400 mt-1'>{player.position}</p>
                                <p className='text-gray-500 text-sm mt-2'>{player.nfl_team}</p>
                            </div>                        
                    ))}
                </div>
            )}
        </div>
    </div>
)
}
export default Players