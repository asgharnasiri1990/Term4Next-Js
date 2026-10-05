"use client"
import React, { useEffect, useState } from 'react'

const page = () => {

    const [products, setProducts] = useState<Product[]>([]);;
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState("all");

    type Product = {
        id: number;
        title: string;
        price: number;
        rating: number;
        thumbnail: string;
        tags: string;
        category: string;
    };

    useEffect(() => {

        const data = fetch("https://practice.amirm.me/todos").then(

            async (data) => {
                const body = await data.json();
                setLoading(false)
                setProducts(body.products)
            },
        )

    }, [])

    const filteredProducts =
        selectedItem === "all"
            ? products
            : products.filter((product) => product.category === selectedItem);

    const categories = [...new Set(
        products.map((product) => product.category)
    )];

    return (

        <div className='flex flex-col gap-5 p-10 bg-gray-900  '>

            <div className='flex items-center p-2 gap-2 border rounded ml-5 w-75 bg-white'>

                <span className='text-2xl font-bold '>Products : </span>

                <select name="prducts" id="select"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="flex items-center justify-center text-2xl"
                >
                    <option>All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

            </div>

            <div className='flex flex-wrap gap-1 justify-center text-xl'>

                {loading && (
                    <div className="flex justify-center items-center p-10">
                        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}


                {filteredProducts.map((product) => (
                    <>
                        <div key={product.id} className='flex flex-col items-center bg-white w-100 cursor-pointer'>

                            <img src={product.thumbnail} alt={product.title} className="h-48 object-contain" />

                            <div className='flex flex-col gap-1 items-baseline w-70'>
                                <span >{product.title}</span>
                                <span className='text-gray-500 '>{product.price} $</span>
                                <span className='text-gray-500 '>tag: {product.tags}</span>
                                <span className='text-gray-500 '>rating:{product.rating}</span>
                            </div>
                            
                        </div>
                    </>
                ))}
            </div>
        </div>

    )
}

export default page;