"use client";

import { API_URL } from "@/constants";
import { MatchDetails, Player } from "@/types/types";
import { useState } from "react";

export default function MatchClient({ matchDetails }: { matchDetails: MatchDetails }) {
    const [match, setMatch] = useState(matchDetails);
    const [loading, setLoading] = useState<boolean>(false);

    async function handleChange(
        type:
            | 0
            | 1
            | 2
            | 3
            | 4
            | 6
            | "wicket"
            | "wide"
            | "noball+bye"
            | "noball+runs"
            | "bye+overthrow"
            | "runs+overthrow"
            | "noball+legbye"
    ) {
        try {
            setLoading(true);
            const data = await fetch(`${API_URL}/match/update-match`, {
                method: "POST",
                body: JSON.stringify({
                    matchId: match?.match?._id,
                    bowler: match?.match?.innings?.scoreDetails?.bowler?._id,
                    striker: match?.match?.innings?.scoreDetails?.batsman?._id,
                    type,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const newMatch = await data?.json();
            setMatch(newMatch);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-start justify-center">
            <div className="w-full h-full max-h-full flex flex-row items-start justify-center">
                <div className="w-4/6 flex flex-col items-center justify-center border p-6 max-h-screen overflow-y-auto">
                    <div className="w-full grid grid-cols-4 gap-4 max-w-lg my-6">
                        <div className="rounded p-3 col-span-2 flex flex-col items-center justify-between gap-1">
                            <p>Striker</p>
                            <p>{match?.match?.innings?.scoreDetails?.batsman?.name}</p>
                        </div>
                        <div className="rounded p-3 col-span-2 flex flex-col items-center justify-between gap-1">
                            <p>Non striker</p>
                            <p>{match?.match?.innings?.scoreDetails?.nonStriker?.name}</p>
                        </div>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(0)}
                            className="border border-black rounded p-4"
                        >
                            0
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(1)}
                            className="border border-black rounded p-4"
                        >
                            1
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(2)}
                            className="border border-black rounded p-4"
                        >
                            2
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(3)}
                            className="border border-black rounded p-4"
                        >
                            3
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(4)}
                            className="border border-black rounded p-4"
                        >
                            4
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange(6)}
                            className="border border-black rounded p-4"
                        >
                            6
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("wicket")}
                            className="border border-black rounded p-4 col-span-2"
                        >
                            Wicket
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("wide")}
                            className="border border-black rounded p-4 col-span-2"
                        >
                            Wide
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("noball+bye")}
                            className="border border-black rounded p-4 col-span-2"
                        >
                            Noball + bye
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("noball+runs")}
                            className="border border-black rounded p-4 col-span-2"
                        >
                            Noball + runs
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("bye+overthrow")}
                            className="border border-black rounded p-4 col-span-2"
                        >
                            Bye + overthrow
                        </button>
                        <button
                            disabled={loading}
                            onClick={() => handleChange("runs+overthrow")}
                            className="border border-black rounded p-4 col-span-4"
                        >
                            Runs + overthrow
                        </button>
                    </div>
                    <div className="w-full h-full">
                        {match.deliveries && (
                            <div className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto">
                                <p>ball by ball commentary</p>
                                {match?.deliveries.length > 0 ? (
                                    <>
                                        {match.deliveries.map((delivery) => (
                                            <p key={delivery._id}>
                                                Ball {delivery.ballNumber} - {delivery.type} -{" "}
                                                {delivery.runsExcludingExtras} runs - {delivery.extras}{" "}
                                                extras - {delivery.isWicket ? "1" : "0"} wicket
                                            </p>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <p>No deliveries yet</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-2/6 flex flex-col border max-h-screen overflow-y-auto">
                    <div className="flex flex-col p-6 border">
                        <p className="text-2xl">{match?.match?.battingTeam?.name}</p>
                        <div className="w-full flex flex-row gap-2">
                            <p>{match?.match?.innings?.scoreDetails?.runs} runs</p>
                            <p>{match?.match?.innings?.scoreDetails?.wickets} wickets</p>
                            <p>{match?.match?.innings?.overs} overs</p>
                            <p>{match?.match?.innings?.ballsYetPlayed} balls</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 border gap-4">
                        <p className="text-xl">Batsmen</p>
                        <div className="w-full flex flex-col gap-2">
                            {match?.match?.battingTeam?.players?.map((player: Player) => (
                                <div key={player?._id}>
                                    <p>
                                        {player?.name} - {player?.batting?.runs} runs in{" "}
                                        {player?.batting?.ballsFaced} balls
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-xl">Bowler</p>
                        <div className="w-full flex flex-col gap-2">
                            {match?.match?.fieldingTeam?.players?.map((player: Player) => (
                                <div key={player?._id}>
                                    <p>
                                        {player?.name} - {player?.bowling?.wickets} wickets
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
