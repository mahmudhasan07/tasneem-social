import NavBar from "@/Components/common/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import 'aos/dist/aos.css'; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar></NavBar>
                {children}
            <div>
                <Footer></Footer>
            </div>
        </main>
    );
}