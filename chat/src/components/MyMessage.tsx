import React, {useState} from "react";
import {IMessageType} from "@/type/message.type";
import useStore from "@/hooks/useStore";
import {useMessageStore} from "@/zustand/store";
import {Card, Flex, Image, Typography} from "antd";
import {MessageHeader} from "@/components/MessageHeader";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {TimeMessage} from "@/components/TimeMessage";
import {StatusMessage} from "@/components/StatusMessage";

const myMessage = {
    body: {
        backgroundColor: "#007AFF",
        color: "#fff",
        borderRadius: "8px 0 8px 8px",
    }
}
const textColorMy:React.CSSProperties = {
    color:"#fff",
    marginBottom: "10px"
}


export const MyMessage:React.FC<IMessageType> = ({user_id, message, status, date, id, files}) => {
    const [state, setState] = useState(message)
    const store = useStore(useMessageStore, (state) => state )
    const update = (value:string) => {
        setState(value)
        store?.updateMessage(id,value)
    }

    return (
        <Card
            styles={myMessage}
        >
            <Flex gap="8px">
                <Flex vertical>
                    <MessageHeader id={user_id}/>
                    {
                        files && files?.map((item) =>
                            <Image key={item} src={item} alt={"image"} />
                        )
                    }
                    <Typography.Paragraph
                        editable={
                            message.length !== 0 ?
                            {
                                onChange: (value) => update(value),
                                icon: <EditOutlined style={{
                                    color: "#fff"
                                }}/>,
                                tooltip: "Редактировать"
                            } : false
                        }
                        copyable={{
                            onCopy: () => store?.deleteMessage(id),
                            icon: <DeleteOutlined style={{
                                color: "#fff"
                            }}/>,
                            tooltips: "Удалить"
                        }}
                        style={textColorMy}
                    >
                        {state}
                    </Typography.Paragraph>
                </Flex>
                <Flex align="flex-end">
                    <Flex align="center" gap="4px">
                        <TimeMessage id={user_id} data={date}/>
                        <StatusMessage status={status}/>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}