import { useState, useEffect } from "react";
import {sortBy} from 'lodash-es';
import { TeamMember } from "../types";
const url = "/.netlify/functions/team-roster";
const teamId = 12320;
export function TeamList() {
    const [teamList, setTeamList] = useState<TeamMember[]>([]);
    const loadData = async () => {
        const res = await fetch(`${url}?teamId=${teamId}`)
        const data: TeamMember[] = await res.json();
        setTeamList(sortBy(data, ['name']));
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <p>Team List:</p>
            <div>{teamList.length}</div>
            <ul>
                {teamList.map(t => {
                    return <li key={t.name}>{t.name}</li>
                })}
            </ul>

        </div>
    );
}
