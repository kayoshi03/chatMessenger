import React from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from "antd";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
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