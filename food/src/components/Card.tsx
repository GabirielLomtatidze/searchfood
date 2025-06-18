import { useState, useEffect } from "react"

// https://www.themealdb.com/api/json/v1/1/search.php?s=



export default function Card() {

    const [products, setproduct] = useState<any[]>([])


    const GetProduct = async () => {

        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data: any = await response.json();
        setproduct(data.meals);
        
    }

    useEffect(() => {
        GetProduct();
    }, [])

    return (
        <>
            {products.map((prod: any) => (
                <div key={prod.idMeal} className="card">
                    <h2>{prod.strMeal}</h2>
                    <img src={prod.strMealThumb} alt={prod.strMeal} className="card_img"/>
                    <p><strong>Category:</strong> {prod.strCategory}</p>
                    <p><strong>Area:</strong> {prod.strArea}</p>
                    <button className="card_button">Add to Wish List</button>
                </div>
            ))}
        </>
    )

}