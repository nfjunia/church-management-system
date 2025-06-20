import React from "react";

export default async function Page({ params }: { params: { cellId: string } }) {
  const { cellId } = await params;

  const Tablebody = [
    {
      id: 1,
      fullName: "Asare Tutu",
      phone: "0531942973",
      office: "Steward",
      email: "pastortutu@gmail.com",
      adress: "penkwaase",
      createdAt: "11/06/2025",
      gender: "male",
    },
    {
      id: 2,
      fullName: "Yaw Gideon",
      office: "Elder",
      phone: "0531942973",
      email: "nfjunia@gmail.com",
      adress: "penkwaase",
      createdAt: "7/08/2025",
      gender: "female",
    },
  ];
  const cell_leader = Tablebody.find(
    (leader) => leader.id === parseInt(cellId)
  );
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <h1>user name</h1>
      <p>{cell_leader?.fullName}</p>
    </div>
  );
}
