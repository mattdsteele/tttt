import { useState, useEffect } from "react";
import {sortBy} from 'lodash-es';
import { TeamMember } from "../types";
import { ListGroup } from "react-bootstrap";
const url = "/.netlify/functions/team-roster";
const teamId = 12320;
interface Props {
    handleClick: (member: TeamMember) => void;
}

export function TeamList(props: Props) {
    const {handleClick} = props
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
            <ListGroup>
                {teamList.map((t) => {
                    return (
                        <ListGroup.Item action key={t.name} onClick={(_) => handleClick(t)}>
                            {t.name}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
}
