import Home from "@/components/Home";
import "server-only"
import { Suspense } from "react";

export default function Page() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Home />
        </Suspense>
    );
}
