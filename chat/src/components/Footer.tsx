import {Button, Flex, Image, Input, Space, Upload, UploadFile} from "antd";
import {PlusCircleOutlined, SendOutlined, SmileOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {useStore} from "@/zustand/store";
import {IMessageType} from "@/type/message.type";
import {CURRENT_USER} from "@/constant/const";
import {RcFile} from "antd/es/upload";




export const Footer:React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string[] | null>(null);
    const [value, setValue] = useState("")
    const {addMessage,setMessage} = useStore()

    const fileList: UploadFile<any>[] = imageUrl
        ? imageUrl.map((url, index) => ({
            uid: String(index),
            name: `image-${index}.jpg`,
            status: 'done',
            url: url,
        }))
        : [];

    const update = () => {
        if (typeof window !== 'undefined') {
            const storedMessages = localStorage.getItem('chatMessages');
            if (storedMessages) {
                setMessage(JSON.parse(storedMessages));
            }
        }
    }
    useEffect(() => {
        update()
    }, [addMessage, setMessage]);
    const sendMessage = () => {
        const newMessage:IMessageType = {
            id: Date.now(),
            user_id: CURRENT_USER,
            message: value,
            status: "read",
            files: imageUrl,
            date: Date.now()
        }
        const botMessage:IMessageType = {
            id: Date.now() + 1,
            user_id: 2,
            message: "HelloWorld!",
            status: "read",
            files: null,
            date: Date.now()
        }
        addMessage(newMessage)
        update()
        addMessage(botMessage)
        update()
        setImageUrl(null)
        setValue("")
    }
    const handleUpload = (files:RcFile[]) => {
        const urls:string[] = []
        files.map((item:any) => {
            const url = URL.createObjectURL(item.originFileObj);
            urls.push(url)
        })
        setImageUrl(urls)
        return false;
    };
    return(
        <>
            <Flex vertical>
                <Flex gap={"5px"}>
                    {imageUrl && imageUrl.map((item,index) => (
                        <Image key={index} src={item} alt="uploaded" width={100} />
                    ))
                    }
                </Flex>
                <Space.Compact
                    style={{
                        width: "100%"
                    }}
                >

                    <Button type="text">
                        <SmileOutlined />
                    </Button>
                    <Input onPressEnter={
                        value.length !== 0 ?
                            sendMessage : undefined
                    }
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                           placeholder="Start typing..."
                           variant="borderless" style={{
                        width: "100%"
                    }}>
                    </Input>
                    <Upload
                        fileList={fileList}
                        onChange={(files) => handleUpload(files.fileList as RcFile[])}
                        accept=".png,.jpg,.jpeg,.webp"
                        showUploadList={false}
                        maxCount={10}
                        multiple
                    >
                        <Button
                            type="text"
                            icon={<PlusCircleOutlined />}
                        >
                        </Button>
                    </Upload>
                    <Button
                        disabled={imageUrl !== null ? false : value.length === 0}
                        onClick={sendMessage}
                        type="text"
                    >
                        <SendOutlined style={
                            value.length !== 0 || imageUrl !== null ?
                                {
                                    color: "blue"
                                }:{}
                        }/>
                    </Button>
                </Space.Compact>
            </Flex>
        </>
    )
}