import { formatDistanceToNow, parseISO } from "date-fns";

interface  TimeAgoProps {
    timestamp: string
}


export function TimeAgo({timestamp}: TimeAgoProps){
    let timeAgo = '';
    if(timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }
    return(
        <time>
            &nbsp; <i>{timeAgo}</i>
        </time>
    )
}