
"use client"

import { useState } from "react"

export default function MatchClient({ matchDetails }: { matchDetails: any }) {
    const [match, setMatch] = useState(matchDetails);
    const [loading, setLoading] = useState<boolean>(false);

    return <div className="w-screen h-screen flex flex-col items-start justify-center">
        <div className="w-full h-full max-h-full flex flex-row items-start justify-center">
            <div className="w-4/6 flex flex-col items-center justify-center border p-6">
                <p>Commentary buttons</p>
                <div className="w-full grid grid-cols-4 gap-4 max-w-lg my-6">
                    <div className="rounded p-3 col-span-2 flex flex-col items-center justify-between gap-1">
                        <p>Striker</p>
                        <select defaultValue={match.match.innings.scoreDetails.batsman._id} className="w-full"
                        // onChange={handleChange}
                        >
                            {match.match.battingTeam.players.map((player: any) => (
                                <option key={player._id} value={player._id}>
                                    {player.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="rounded p-3 col-span-2 flex flex-col items-center justify-between gap-1">
                        <p>Non striker</p>
                        <select defaultValue={match.match.innings.scoreDetails.nonStriker._id} className="w-full"
                        // onChange={handleChange}
                        >
                            {match.match.battingTeam.players.map((player: any) => (
                                <option key={player._id} value={player._id}>
                                    {player.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button disabled={loading} className="border border-black rounded p-4">0</button>
                    <button disabled={loading} className="border border-black rounded p-4">1</button>
                    <button disabled={loading} className="border border-black rounded p-4">2</button>
                    <button disabled={loading} className="border border-black rounded p-4">3</button>
                    <button disabled={loading} className="border border-black rounded p-4">4</button>
                    <button disabled={loading} className="border border-black rounded p-4">6</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-2">Wicket</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-2">Wide</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-2">Noball</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-2">Bye</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-2">Legbye</button>
                    <button disabled={loading} className="border border-black rounded p-4 col-span-4">New ball</button>
                </div>
                <div className="w-full h-full">
                    <div className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto">
                        <p>ball by ball commentary</p>
                    </div>
                </div>
            </div>
            <div className="w-2/6 flex flex-col border max-h-screen overflow-y-auto">
                <div className="flex flex-col p-6 border">
                    <p className="text-2xl">{match.match.battingTeam.name}</p>
                    <div className="w-full flex flex-row gap-2">
                        <p>{match.match.innings.scoreDetails.runs} runs</p>
                        <p>{match.match.innings.scoreDetails.wickets} wickets</p>
                        <p>{match.match.innings.overs} overs</p>
                        <p>{match.match.innings.ballsYetPlayed} balls</p>
                    </div>
                </div>
                <div className="flex flex-col p-6 border gap-4">
                    <p className="text-xl">batsmen</p>
                    <div className="w-full flex flex-col gap-2">
                        {match.match.battingTeam.players.map((player: any) => <div key={player._id}>
                            <p>{player.name} - {player.batting.runs} runs in {player.batting.ballsFaced} balls</p>
                        </div>)}
                    </div>
                    <p className="text-xl">bowler</p>
                    <div className="w-full flex flex-col gap-2">
                        {match.match.fieldingTeam.players.map((player: any) => <div key={player._id}>
                            <p>{player.name} - {player.bowling.wickets} wickets in {player.bowling.overs} overs</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}