import Navbar from "@/components/NavBar";


export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container max-w-[90rem] mx-auto px-[.6rem] py-4 flex flex-col items-center gap-4">
            <Navbar />
            {children}
        </div>
    )
}