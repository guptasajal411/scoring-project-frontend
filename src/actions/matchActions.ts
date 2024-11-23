"use server"

import 'server-only'
import { API_URL } from '@/constants'
import { redirect } from 'next/navigation';

export async function startNewMatch() {
    const data = await fetch(`${API_URL}/match/new-match`, { method: "POST" });
    if (!data.ok) throw new Error("an error occoured");
    const match = await data.json();
    redirect(`/match/${match._id}`)
}