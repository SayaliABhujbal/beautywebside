'use client'
import { useState } from "react";
import NavBar from "../Layout/navBar";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'; // For month/week/day views
import timeGridPlugin from '@fullcalendar/timegrid'; // For time-based views
import interactionPlugin from '@fullcalendar/interaction'; // For drag and drop, date click

export default function serviceDetails(){
  const[selectedTab,setSelectedTab]=useState('Service Details');
  const tabs=["Service Details","Schedule","Booking"];

  const searchParams=useSearchParams();
  const title=searchParams.get("title");
  const image=searchParams.get("image");
  const price=searchParams.get("price");
const handleDateClick = (info:any) => {
    alert(`Date clicked: ${info.dateStr}`);
  };
   const renderContent = () => {
    
    switch (selectedTab) {
      case "Service Details":
        return (
          <div>
            <Image src={image||""} alt={title ||" "} width="300" height="300"></Image>
            <h2>{title}</h2>
            <p>Price:${price}</p>
          </div>
        );
      case "Schedule":
        return  <div style={{ maxWidth: "400px", fontSize: "0.8rem" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={[
          { title: 'Event 1', date: '2025-06-10' },
          { title: 'Event 2', date: '2025-06-15' },
        ]}
        dateClick={handleDateClick}
      />
    </div>
      case "Booking":
        return <p>This is the Booking content.</p>;
      default:
        return <p>Select a tab to view content.</p>;
    }
  };

return(<>
 <section>
        <NavBar></NavBar>
        </section>
         <section className="d-flex justify-content-center">
            <p style={{fontSize:"4.0rem"}}> {selectedTab}</p>
        </section>
        <section>
            <div className="container">
  <div className="row row-cols-2 row-cols-lg-3">
    {tabs.map((tab)=>(     
      <div className="col" key={tab}>
                <div
                  className="p-3 border"
                  style={{
                    backgroundColor: selectedTab === tab ? "#900C3F" : "#581845",
                    color: "white",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </div>
              </div>))}
  </div>
</div>
        </section>
         <section className="mt-4 d-flex justify-content-center">
        <div className="border p-4" style={{ width: "85%", backgroundColor: "#f8f9fa" }}>
          {renderContent()}
        </div>
      </section>
</>)
}