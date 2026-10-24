"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";

interface Category {
    id: number;
    slug: string;
    name: string
}
interface Product {
    id: number
    slug: string
    name: string
    description: string
    price: number
    stock: number
    inStock: boolean
    image: string
    category: Category
    created_at: string

}




const Page = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch("https://practice.amirm.me/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data.data)
            })


    }, [])



    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
                {products.map((product) => (
                    <div key={product.id}
                        className='flex flex-col text-xl items-center hover:bg-gray-700 transition-colors duration-800 bg-gray-800 gap-9 justify-center p-5 border-[#FF5C00] border rounded-xl cursor-pointer'>
                        <div>
                            <Image
                                src={`https://practice.amirm.me${product.image}`}
                                alt={product.name}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p >{product.name}</p>
                            <p >{product.slug}</p>
                            <p className='text-gray-400 text-[16px]'> {product.price.toLocaleString("en-US")} $</p>

                            {product.inStock ? <p className='text-green-500'>Available</p> : <p className='text-red-500'>Unavailable</p>}
                        </div>
                    </div>
                ))}
            </div>




        </>
    )
}

export default Page;