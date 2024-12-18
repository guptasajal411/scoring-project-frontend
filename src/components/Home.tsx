import "server-only"
import { API_URL } from "@/constants"
import Link from "next/link"
import { startNewMatch } from "@/actions/matchActions"
import Form from "next/form"

export default async function Home() {
    const data = await fetch(`${API_URL}/match`)
    if (!data.ok) throw new Error("An error occoured")
    const match = await data.json()

    return <div className="w-screen h-screen flex flex-row items-center justify-center gap-4">
        <Form action={startNewMatch} className="p-6">
            <button type="submit">Start new match</button>
        </Form>
        <div className="p-6">
            <p>current score: {match.match.innings.scoreDetails.runs} R / {match.match.innings.scoreDetails.wickets} W
            </p>
            <Link href={`/match/${match.match._id}`}>Go to current match { }</Link>
        </div>
    </div>
}