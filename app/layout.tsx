import "./globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
    title: "Airbnb",
    description: "Airbnb Clone",
};

const font = Nunito({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
