export async function load() {

    const res = await fetch('http://127.0.0.1:5160/api/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1:5173'
        },
    });
    const categories = await res.json();
    console.log(categories)
    return{categories}
}

