import NavbarBiomed from "@/components/navbar_biomed"

export const metadata = {
    title: "BIomedical Engineering",
    description: "The department of biomedical engineering KTU"
}

export default function BiomedLayout({children}){
    return(
    <div lang="en">
        <div>
            <NavbarBiomed/>
            {children}
        </div>
    </div>
    )
}