import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
    const { id } = useParams(); 

    const [productDetails, setProductDetails] = useState<any>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setProductDetails(data.meals[0]);
        };

        if (id) {
            fetchDetails();
        }
    }, [id]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details_page">
        <div className="details_content">
            <h1 className="meal_title">{productDetails.strMeal}</h1>
            <img className="meal_image" src={productDetails.strMealThumb} alt={productDetails.strMeal} />
            <div className="meal_info">
                <p><span className="category">Category:</span> {productDetails.strCategory}</p>
                <p><span className="area">Area:</span> {productDetails.strArea}</p>
            </div>
            <div className="meal_instructions">
                <p><strong>Instructions:</strong></p>
                <p>{productDetails.strInstructions}</p>
            </div>
        </div>
    </div>
    );
}
