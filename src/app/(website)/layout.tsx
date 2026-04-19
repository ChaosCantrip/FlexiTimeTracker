import "@/styles/global/master.css";
import Header from "./Header";
import Footer from "./Footer";

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default function RootLayout({ children }: { children: React.ReactNode }) 
{
    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
