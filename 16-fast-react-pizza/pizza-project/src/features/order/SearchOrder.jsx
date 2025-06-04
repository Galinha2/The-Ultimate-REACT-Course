import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) {
            return;
        }
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
        <form className="" onSubmit={ handleSubmit }>
            <input
            className="p-1 px-4 text-black transition-all bg-white rounded-full opacity-90 w-50 sm:focus:w-80 sm:w-64 focus:w-60"
            placeholder="Search Order #"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchOrder
