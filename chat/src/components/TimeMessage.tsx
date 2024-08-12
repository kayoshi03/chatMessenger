import React from "react";
import {Flex, Typography} from "antd";
import {CURRENT_USER} from "@/constant/const";
import dayjs from "dayjs";

export const TimeMessage:React.FC = ({id, data}:number) => {
    const convertData = dayjs(data).format("hh:mm A")
    return (
        <Typography
            style={
                id === CURRENT_USER ?
                    {
                        width: "max-content",
                        fontSize: "12px",
                        fontWeight: "100",
                        color: "#fff"
                    }
                    :{
                        width: "max-content",
                        fontSize: "12px",
                        fontWeight: "100",
                        color: "#666668"
                    }
            }
        >
            {convertData}
        </Typography>
    )
}