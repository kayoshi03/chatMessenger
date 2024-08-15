import React from "react";
import {Space, Typography} from "antd";
import dayjs from "dayjs";

const display:React.CSSProperties = {
    position: "sticky",
    top: "0",
    zIndex: "10000",
    width: "-webkit-fill-available",
    justifyContent: "center"
}
const typographyParagraph:React.CSSProperties = {
    fontSize: "12px",
    color: "#666666",
    textAlign: "center",
    padding: "4px 8px",
    backgroundColor: "#fff",
    borderRadius: "8px"
}

export const Data:React.FC = () => {
    const data = dayjs()
    return(
        <Space
            style={display}
        >
            <Typography.Paragraph
                style={typographyParagraph}
            >
                {
                    data.format('DD/MM/YYYY')
                }
            </Typography.Paragraph>
        </Space>
    )
}