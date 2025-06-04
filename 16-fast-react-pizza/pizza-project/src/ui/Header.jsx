import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header className="flex flex-col items-center justify-between gap-5 p-5 uppercase transition-all duration-300 bg-yellow-500 border-b sm:px-6 sm:flex-row">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>

            <SearchOrder />
            <span className="hidden sm:block">Henrique</span>
        </header>
    )
}

export default Header
