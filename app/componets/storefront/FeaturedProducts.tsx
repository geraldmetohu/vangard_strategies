import { prisma } from "@/app/lib/db";
import { LoadingProductCart, ProductCard } from "./ProductCard";
import { Suspense } from "react";

async function getData() {
    const data = await prisma.product.findMany({
        where: {
            status: "published",
            isFeatured: true,
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 3,
        
    });
    return data;
    
}
export  function FeaturedProduct (){
    return (
        <>
            <h2 className="text-2xl font-extrabold tracking-tight">Featured Items</h2>
            <Suspense fallback={<LoadinGRows />} >
                <LoadFeaturedProducts />
            </Suspense>
        </>
    );
}

async function LoadFeaturedProducts() {
    const data = await getData();
    return (
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((item) => (
                    
                    <ProductCard key={item.id} item={item}/>
                ))}
            </div>
    )
}

function LoadinGRows() {
    return(
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <LoadingProductCart />
            <LoadingProductCart />
            <LoadingProductCart />
        </div>
    );
}