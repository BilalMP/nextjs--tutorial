"use client";

import { useRouter } from "next/navigation";

const RouterPage = () => {
    const router = useRouter();

    return <button onClick={() => router.push("/")}>Home</button>;
};

export default RouterPage;
