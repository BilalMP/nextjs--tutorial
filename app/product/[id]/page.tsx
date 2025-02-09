"use client";

import { useParams } from "next/navigation";

const ProductPageId = () => {
    const params = useParams();

    return (
        <div>
            ProductPageId
            <br />
            {params?.id}
        </div>
    );
};

export default ProductPageId;
