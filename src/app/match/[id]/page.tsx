import "server-only"
import { Suspense } from "react";
import Match from "@/components/Match";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    return <Suspense fallback={<p>Loading...</p>}>
        <Match id={id} />
    </Suspense>
}