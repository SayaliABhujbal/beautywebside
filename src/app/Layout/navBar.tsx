'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const router=useRouter()
  const handleRedirect=()=>{
    router.push("/Signin")
  }
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/app">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" href="/Services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="/Blogs">Blogs</Link>
        </li>
       
      </ul>
    </div>
    <div className="d-flex ms-auto">
          <button className="btn btn-warning" type="button" onClick={handleRedirect}>SignIn</button>
        </div>
  </div>
   
</nav>
  );
}
