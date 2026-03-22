function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/auth/login'
    }

    return (
        <nav className='bg-gray-800 p-4 flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-green-400 items-left justify-top'>Fantasy Sports</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleLogout}>Join League</button>
            <a href="/players" className='text-gray-400 hover:text-white transition'>Players</a>
        </nav>
    )
}

export default Navbar