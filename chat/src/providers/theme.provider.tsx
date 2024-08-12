import React from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from "antd";

export const ThemeProvider:React.FC = ({children}) => {
    return (
        <AntdRegistry>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#007AFF",
                    },
                   components: {
                       Button: {
                           primaryColor: "#fff"
                       },
                       Badge: {
                           dotSize: 10,

                       },
                       Input: {
                           colorTextPlaceholder: "#666666"
                       }
                   }

                }}
            >
                {children}
            </ConfigProvider>
        </AntdRegistry>
    )
}