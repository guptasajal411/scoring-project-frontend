import "server-only"
import { API_URL } from "@/constants";
import MatchClient from "./match/Match.client";

export default async function Match({ id }: { id: string }) {
    const data = await fetch(`${API_URL}/match/${id}`);
    if (!data.ok) return <p>An error occoured</p>
    const matchDetails = await data.json();
    return <div className="w-screen h-screen">
        <MatchClient matchDetails={matchDetails} />
    </div>
}