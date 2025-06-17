'use client';
import { useRouter } from "next/navigation";
import NavBar from "./Layout/navBar";
import Image from 'next/image'
import Footer from "./Layout/footer";

export default function Home() {
  const router=useRouter()
  const handleRedirect=()=>{
    router.push("/Services")
  }
  return (
    <>
    <div className="container">

    <NavBar></NavBar>
    <section className="d-flex justify-content-center">
    <p style={{ fontSize: "4.5rem", textAlign: "center" ,lineHeight:"1.2"}}>
  Welcome to the skin care <br />
  Your one stop solution<br />
  for Family
</p>

</section>
<section>
   <Image 
  src="/Images/pexels-karolina-grabowska-4735936.jpg" 
  alt="Beauty Set" 
  width={500} // Set a reasonable width
  height={800} // Set a reasonable height
  style={{ width: '100%' ,marginBottom:"20px"}} // CSS to make it responsive
 
/>
</section>

<section>
<div className="card mb-3" style={{ maxWidth:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image 
    src="/Images/make-up-cosmetics-pink-background_168508-616.avif" 
    alt="Makeup Cosmetics" 
    width={400} 
    height={300} 
  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</section>
<section className="d-flex justify-content-center">
  <button className="btn btn-warning mb-3" onClick={handleRedirect}>Book Service</button>
</section>

<section >
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image 
  src="/Images/beauty-set.jpg" 
  alt="Beauty Set" 
  width={800} // Set a reasonable width
  height={500} // Set a reasonable height
  style={{ width: '100%' }} // CSS to make it responsive
 
/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
  <Image 
  src="/Images/pexels-karolina-grabowska-4735936.jpg" 
  alt="Beauty Set" 
  width={800} // Set a reasonable width
  height={500} // Set a reasonable height
  style={{ width: '100%' }} // CSS to make it responsive
/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <Image 
  src="/Images/pexels-photo-3750640.jpeg" 
  alt="Beauty Set" 
  width={800} // Set a reasonable width
  height={500} // Set a reasonable height
  style={{ width: '100%'}} // CSS to make it responsive
/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
<section className="d-flex justify-content-center">
    <p style={{ fontSize: "4.0rem", textAlign: "center" ,lineHeight:"1.2"}}>
  Beauty Secrets and <br />
  Tips from our <br />
  pediatricians
</p>

</section>
<section className="mt-4 d-flex justify-content-center" >
<form className="row g-3">
  <div className="col-auto">
 
  <input className="form-control form-control-lg" type="text" placeholder="email@gmail.com" aria-label=".form-control-lg example"/>
  </div>

  <div className="col-auto">
    <button type="submit" className="btn btn-warning mb-3">Confirm identity</button>
  </div>
</form>
</section>
<section className="mt-4" style={{backgroundColor:"#581845",color:"white"}}>
<Footer ></Footer>
</section>
    </div>
    </>
  );
}
