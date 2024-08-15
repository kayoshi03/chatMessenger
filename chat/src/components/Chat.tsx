'use client'
import React, {useState} from "react";
import {WechatOutlined} from "@ant-design/icons";
import {Drawer, Flex, FloatButton} from "antd";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Data} from "@/components/Data";
import {AvatarProfile} from "@/components/AvatarProfile";
import {CURRENT_USER} from "@/constant/const";
import {Message} from "@/components/Message";
import useStore from "@/hooks/useStore";
import {useMessageStore} from "@/zustand/store";
import {IMessageType} from "@/type/message.type";
import {MyMessage} from "@/components/MyMessage";

const styles = {
    wrapper: {
        maxWidth: "656px",
        width: "100%"
    },
    header: {
        padding: "17px 24px 15px 13px"
    }
}

export const Chat:React.FC = () => {
    const [open, setOpen] = useState(true)
    const message = useStore(useMessageStore, (state) => state.message)
    const filterChat = message?.sort(( a,b) => a.id - b.id)

    const openChantChange = () => {
        setOpen(!open)
    }
    return (
        <>
            <FloatButton
                shape={"circle"}
                type={"primary"}
                icon={<WechatOutlined />}
                onClick={openChantChange}
            />
            <Drawer
                open={open}
                closeIcon={null}
                title={<Header close={openChantChange}/>}
                footer={<Footer/>}
                onClose={openChantChange}
                styles={styles}
            >
                <Flex gap={30} vertical >
                    <Data/>
                    {
                        filterChat?.map((item:IMessageType) => (
                            <Flex
                                className={item.user_id === CURRENT_USER ? "my" : ""}
                                gap={10}
                                key={item.id}
                            >
                                {
                                    item.user_id === CURRENT_USER ?
                                        <></> :
                                        <AvatarProfile
                                            id={item.user_id}
                                        />
                                }
                                {
                                    item.user_id === CURRENT_USER ?
                                        <MyMessage
                                            id={item.id}
                                            user_id={item.user_id}
                                            message={item.message}
                                            status={item.status}
                                            files={item.files}
                                            date={item.date}
                                        />
                                        :
                                        <Message
                                            files={item.files}
                                            message={item.message}
                                            user_id={item.user_id}
                                            id={item.id}
                                            status={item.status}
                                            date={item.date}
                                        />
                                }
                            </Flex>
                        ))
                    }
                </Flex>
            </Drawer>
        </>

    )
}