import React, {useState} from "react";
import {Card, Flex, Image, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {CURRENT_USER} from "@/constant/const";
import {IMessageType} from "@/type/message.type";
import {TimeMessage} from "@/components/TimeMessage";
import {MessageHeader} from "@/components/MessageHeader";
import {StatusMessage} from "@/components/StatusMessage";
import {useStore} from "@/zustand/store";

export const Message:React.FC<IMessageType> = ({user_id, message, status, date, id, files}) => {
    const [state, setState] = useState(message)
    const {deleteMessage, updateMessage} = useStore()
    const update = (value:string) => {
        setState(value)
        updateMessage(id,value)
    }

    return (
        <Card
            styles={
                user_id === CURRENT_USER ?
                    {
                        body: {
                            backgroundColor: "#007AFF",
                            color: "#fff",
                            borderRadius: "8px 0 8px 8px",
                        }
                    }:
                    {
                        body: {
                            backgroundColor: "#F2F2F7"
                        },
                    }
            }
        >
            <Flex gap="8px">
                <Flex vertical>
                    <MessageHeader id={user_id}/>
                    {
                        files !== null ?
                            files?.map((item) => (
                                <Image key={item} src={item} alt=""/>
                            ))
                        : <></>
                    }
                    <Typography.Paragraph
                        editable={
                            user_id === CURRENT_USER && message.length !== 0 ?
                            {
                                onChange: (value) => update(value),
                                icon: <EditOutlined style={{
                                    color: "#fff"
                                }}/>,
                                tooltip: "Редактировать"
                            } : false
                        }
                        copyable={
                            user_id === CURRENT_USER ?
                                {
                                    onCopy: () => deleteMessage(id),
                                    icon: <DeleteOutlined style={{
                                        color: "#fff"
                                    }}/>,
                                    tooltips: "Удалить"
                                } : false
                        }
                        style={user_id === CURRENT_USER ? {
                        color:"#fff",
                        marginBottom: "10px"
                    }: {
                        marginBottom: "10px"
                    }}>
                        {state}
                    </Typography.Paragraph>
                </Flex>
                <Flex align="flex-end">
                    <Flex align="center" gap="4px">
                        <TimeMessage id={user_id} data={date}/>
                        {
                            user_id === CURRENT_USER ?
                                <StatusMessage status={status}/>
                                : <></>
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}