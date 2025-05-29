import Navbar from "@/components/navbar"

export const metadata ={
    title: "faculty",
    description: "FHAS Faculty"
}

export default function FacultyLayout({children}){
   return(
     <div lang="en">
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
   )
}