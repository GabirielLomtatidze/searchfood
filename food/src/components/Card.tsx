import { useState, useEffect } from "react"

// https://www.themealdb.com/api/json/v1/1/search.php?s=



export default function Card() {

    const [product, setproduct] = useState<any[]>([])


    const GetProduct = async () => {

        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await response.json();
        setproduct(data)

        console.log(data);

    }

    useEffect(() => {
        GetProduct();
    }, [])

    return (
        <>

        </>
    )

}