"use client";

import { useParams } from "next/navigation";

const Slug = () => {
    const params = useParams();
    const res = params?.slug;
    return <div>{res}</div>;
};

export default Slug;
