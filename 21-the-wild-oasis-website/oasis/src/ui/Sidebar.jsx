import Logo from './Logo.jsx'
import MainNav from './MainNav.jsx'

function Sidebar() {
    return (
        <div className="row-span-2 row-start-1 p-5 bg-white border-r border-cyan-50">
            <Logo />
            <MainNav />
        </div>
    )
}

export default Sidebar
