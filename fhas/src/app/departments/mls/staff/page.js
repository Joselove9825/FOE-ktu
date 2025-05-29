"use client"
import Image from "next/image"
import { Mail, Phone, Award, BookOpen } from "lucide-react"

export default function StaffPage() {
  const department = [
  {
    "name": "Dr. Albert Adu-Sackey",
    "designation": "HOD (Medical Laboratory Science Department)",
    "contact": "0244440129",
    "email": "albert.adu-sackey@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Dr. Francis Abeku Ussher (MLS.D, FWAPCMLS)",
    "designation": "Lecturer",
    "contact": "0244685144",
    "email": "francis.ussher@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Kwame Adomako Kwabia",
    "designation": "Lecturer",
    "contact": "0247992150",
    "email": "kwamekwabia@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Seth Tenkorang Boateng",
    "designation": "Lecturer",
    "contact": "0244197733",
    "email": "seth.boateng@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Samuel Ameteppe",
    "designation": "Lecturer",
    "contact": "0244969598",
    "email": "delpierrons@yahoo.com",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Mark Appearing",
    "designation": "Lecturer",
    "contact": "0208735450",
    "email": "mark.appeaning@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Dr. Augustine Badu (MD)",
    "designation": "Assistant Lecturer",
    "contact": "0263062964",
    "email": "augduba@gmail.com",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Hubert Maxwell Antwi",
    "designation": "Assistant Lecturer",
    "contact": "0557017266",
    "email": "maxwell.antwi@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Aaron Siaw Kwakye",
    "designation": "Assistant Lecturer",
    "contact": "0544181372",
    "email": "aaron.kwakye@ktu.edu.gh",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Daniel Kobina Okwan",
    "designation": "Assistant Lecturer",
    "contact": "0546172487",
    "email": "",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Isaac Darban",
    "designation": "Prin. Lab. Technician",
    "contact": "0542413233",
    "email": "isaacdarban@gmail.com",
    "image": "/mls/default.png"
  },
  {
    "name": "Ms. Bertha Sena Odoom",
    "designation": "Prin. Lab. Technician",
    "contact": "0245517799",
    "email": "afisena7@gmail.com",
    "image": "/mls/default.png"
  },
  {
    "name": "Tawfeek Ahmed Amissah",
    "designation": "Senior Lab. Technician",
    "contact": "0547913222",
    "email": "amissahtawfeek0@gmail.com",
    "image": "/mls/default.png"
  },
  {
    "name": "Mr. Thomas Kuwornu",
    "designation": "Sur. Lab. Technician",
    "contact": "0242271895",
    "email": "Texasitne09@gmail.com",
    "image": "/mls/default.png"
  }
]

 const staff = [
    {
      name: "Maria Rodriguez",
      title: "Laboratory Manager",
      department: "Teaching Laboratories",
      email: "m.rodriguez@university.edu",
      phone: "(555) 123-4580",
    },
    {
      name: "James Wilson",
      title: "Research Technician",
      department: "Molecular Diagnostics Lab",
      email: "j.wilson@university.edu",
      phone: "(555) 123-4581",
    },
    {
      name: "Amanda Foster",
      title: "Administrative Coordinator",
      department: "Department Administration",
      email: "a.foster@university.edu",
      phone: "(555) 123-4582",
    },
    {
      name: "Kevin Brown",
      title: "IT Support Specialist",
      department: "Technology Services",
      email: "k.brown@university.edu",
      phone: "(555) 123-4583",
    },
  ]


    

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Meet Our Staff</h1>
          <p className="mt-2">Dedicated professionals committed to advancing biomedical engineering.</p>
        </div>
      </header>

      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Departmental Lecturers</h2>

          <div className="flex flex-1">
          <div id="faculty" className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {department.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src="/mls/default.png"
                    alt={`${member.name}'s profile`}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-gray-600">{member.designation}</p>
                  <p className="text-gray-700">{member.contact}</p>
                  {member.email && (
                    <p className="text-gray-700">
                      <strong>Email:</strong> {member.email}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

       

        <section id="administrative-staff" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Administrative Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Dr. Albert Adu-Sackey</h3>
              <p className="text-gray-600">Department HOD</p>
              <p className="text-gray-700">0244440129</p>
              <p className="text-gray-700"><strong>Email:</strong> albert.adu-sackey@ktu.edu.gh</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Unassigned</h3>
              <p className="text-gray-600">Financial Officer</p>
              <p className="text-gray-700"><strong>Email:</strong> Unknown</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Unassigned</h3>
              <p className="text-gray-600">Student Affairs Coordinator</p>
              <p className="text-gray-700"><strong>Email:</strong> Unknown</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
