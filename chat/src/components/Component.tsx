'use client'
import {useCounterStore} from "@/providers/store.provider";
import {Button, Space} from "antd";

export const HomePage = () => {
    const { count, incrementCount, decrementCount } = useCounterStore(
        (state) => state,
    )

    return (
        <div>
            <Space direction={"vertical"}>
                Count: {count}
                <Button type="primary" onClick={() => void incrementCount()}>
                    Increment Count
                </Button>
                <Button type="default" onClick={() => void decrementCount()}>
                    Decrement Count
                </Button>
            </Space>

        </div>
    )
}