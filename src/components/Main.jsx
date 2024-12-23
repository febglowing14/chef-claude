export default function main() {
    const ingredients =["orange","apple","promogranate"]

    const list =ingredients.map(x =>(
        <li>{x}</li>
    ))
    return (
        <main>
            <form id="box">
                <input type="text" placeholder="Search..." />
                <button className="buttons"> + Add ingredients</button>
            </form>
            <ul>
            {list}
            </ul>
        </main>
    )
    
}