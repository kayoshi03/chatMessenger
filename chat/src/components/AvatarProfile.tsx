import {Avatar, Badge} from "antd";
import {User} from "@/data/user.data";
import React from "react";
import {IUserType} from "@/type/user.type";

export const AvatarProfile:React.FC = ({id}:number) => {
    const user = User.find((l:IUserType) => l.id === id)
    return(
        <Badge dot={user?.status === "online"} offset={[-6, 34]} status={user?.status === "online" ? "success" : "default"}>
            <Avatar src={user?.url} size="large">
                {user?.fullName}
            </Avatar>
        </Badge>
    )
}