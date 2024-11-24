import "server-only"
import { API_URL } from "@/constants";

export default async function Match({ id }: { id: string }) {
    const data = await fetch(`${API_URL}/match/${id}`);
    if (!data.ok) return <p>An error occoured</p>
    const matchDetails = await data.json();
    return <div>
        <p>{JSON.stringify(matchDetails)}</p>
    </div>
}