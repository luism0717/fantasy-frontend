function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return (
        <nav className='bg-gray-800 p-4 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-green-400 items-left justify-top'>Fantasy Sports</h1>
            <a href="/leagues/join" className='text-gray-400 hover:text-white transition'>Join League</a>
            <a href="/players" className='text-gray-400 hover:text-white transition'>Players</a>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Navbar
