import NavbarMls from "@/components/navbar_mls"

export const metadata = {
    title: "BIomedical Engineering",
    description: "The department of biomedical engineering KTU"
}

export default function MLSLayout({children}){
    return(
    <div lang="en">
        <div>
            <NavbarMls/>
            {children}
        </div>
    </div>
    )
}