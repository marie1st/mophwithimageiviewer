import react from 'react';


export function Dateformat(props) {
    const date_to_split = props.date.split("-");
    const day = date_to_split[2].split("T");
    const DD = day[0];
    const MM = date_to_split[1];
    const YYYY = date_to_split[0];
    const format = DD + "/" + MM + "/" + YYYY;


    return (
        <div>{format}</div>
    )
}

export default Dateformat;