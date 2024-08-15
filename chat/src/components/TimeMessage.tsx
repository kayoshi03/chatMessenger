import React from "react";
import {Typography} from "antd";
import {CURRENT_USER} from "@/constant/const";
import dayjs from "dayjs";

interface ITimeMessage {
    id: number,
    data: number
}

const  myText:React.CSSProperties = {
    width: "max-content",
    fontSize: "12px",
    fontWeight: "100",
    color: "#fff"
}
const defaultText:React.CSSProperties = {
    width: "max-content",
    fontSize: "12px",
    fontWeight: "100",
    color: "#666668"
}

export const TimeMessage:React.FC<ITimeMessage> = ({id, data}) => {
    const convertData = dayjs(data).format("hh:mm A")
    return (
        <Typography
            style={
                id === CURRENT_USER ? myText : defaultText
            }
        >
            {convertData}
        </Typography>
    )
}