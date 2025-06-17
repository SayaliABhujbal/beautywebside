'use client';
import { useRouter } from "next/navigation";
import NavBar from "../Layout/navBar"
import Image from "next/image";

export default function Service() {
 const router=useRouter()
const handleRedirect = (card: { image: string; title: string; Price: string }) => {
  router.push(`/serviceDetails?title=${encodeURIComponent(card.title)}&image=${encodeURIComponent(card.image)}&price=${encodeURIComponent(card.Price)}`);
};

  const cards = [
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Facial Treatment" ,Price:"200"},
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Hair Styling",Price:"200" },
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Makeup",Price:"200" },
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Nail Art" ,Price:"200"},
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Massage" ,Price:"200"},
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Spa",Price:"200" },
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Bridal Package",Price:"200" },
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Hair Coloring",Price:"200" },
  { image: "/Images/pexels-karolina-grabowska-4735936.jpg", title: "Eyebrow Shaping",Price:"200" }
];

  return (
    <>
    <div className="container">
        <section>
        <NavBar></NavBar>
        </section>
        <section className="d-flex justify-content-center">
            <p style={{fontSize:"5.5rem"}}> All services page</p>
        </section>
        <section style={{ marginLeft: "20px",marginRight:"20px" }}>
       <div className="row row-cols-1 row-cols-md-3 g-4">
  {cards.map((card, index) => (
    <div
      className="col"
      key={index}
      onClick={ ()=>handleRedirect(card)}
    >
      <div className="card">
        <Image
          src={card.image}
          alt={card.title}
          width={400}
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
        </div>
      </div>
    </div>
  ))}
</div>

        </section>
    
    </div>
    </>
  );
  }
