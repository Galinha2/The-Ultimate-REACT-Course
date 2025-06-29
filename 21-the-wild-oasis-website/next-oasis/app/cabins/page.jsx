async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return (
        <div>
            <h1>Cabins page</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Page
