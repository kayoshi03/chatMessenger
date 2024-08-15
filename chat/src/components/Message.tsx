import React from "react";
import {Card, Flex, Image, Typography} from "antd";
import {IMessageType} from "@/type/message.type";
import {TimeMessage} from "@/components/TimeMessage";
import {MessageHeader} from "@/components/MessageHeader";

const defaultMessage = {
    body: {
        backgroundColor: "#F2F2F7"
    },
}
const textColorDefault:React.CSSProperties = {
    marginBottom: "10px"
}

export const Message:React.FC<IMessageType> = ({user_id, message, date, files}) => {
    return (
        <Card
            styles={defaultMessage}
        >
            <Flex gap="8px">
                <Flex vertical>
                    <MessageHeader id={user_id}/>
                    {
                        files && files?.map((item) => (
                                <Image key={item} src={item} alt=""/>
                            ))
                    }
                    <Typography.Paragraph
                        editable={false}
                        copyable={false}
                        style={textColorDefault}
                    >
                        {message}
                    </Typography.Paragraph>
                </Flex>
                <Flex align="flex-end">
                    <Flex align="center" gap="4px">
                        <TimeMessage id={user_id} data={date}/>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}