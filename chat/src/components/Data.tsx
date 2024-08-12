import React from "react";
import {Space, Typography} from "antd";
import * as dayjs from "dayjs";

export const Data:React.FC = () => {
    const data = dayjs()
    return(
        <Space style={{
            position: "sticky",
            top: "0",
            zIndex: "10000",
            width: "-webkit-fill-available",
            justifyContent: "center"
        }}>
            <Typography style={{
                fontSize: "12px",
                color: "#666666",
                textAlign: "center",
                padding: "4px 8px",
                backgroundColor: "#fff",
                borderRadius: "8px"
            }}>
                {
                    data.format('DD/MM/YYYY')
                }
            </Typography>
        </Space>
    )
}