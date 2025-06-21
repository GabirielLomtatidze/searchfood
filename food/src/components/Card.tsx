import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
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


    const navigate = useNavigate();


    const details = (id: string) => {
        navigate(`/details/${id}`);
    }


    const [saveWish, setSaveWish] = useState<string[]>([])

    const addInWishlist = (meal: string) => {

        if (saveWish.includes(meal)) {
            alert("already added")
        } else {

            setSaveWish((prevWish) => [...prevWish, meal]);
        }


        console.log(saveWish);
        
    }




    return (
        <>
            {products.map((prod: any, index: number,) => (
                <div key={prod.idMeal} className="card">
                    <h2>{prod.strMeal}</h2>
                    <img src={prod.strMealThumb} alt={prod.strMeal} className="card_img" onClick={() => details(prod.idMeal)} />
                    <p><strong>Category:</strong> {prod.strCategory}</p>
                    <p><strong>Area:</strong> {prod.strArea}</p>
                    <button className="card_button" onClick={() => addInWishlist(prod.idMeal)}>Add to Wish List</button>
                </div>
            ))}

        </>
    )

}