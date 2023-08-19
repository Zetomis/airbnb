import "./globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
    title: "Airbnb",
    description: "Airbnb Clone",
};

const font = Nunito({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
