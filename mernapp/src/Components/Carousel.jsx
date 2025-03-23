import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"style={{objectFit: "contain !important"}}>
  <div className="carousel-inner" id = "carousel">
  <nav class="navbar navbar-light bg-light">
  
</nav>

    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3FLNtyx3HfDscSKr8rTbGWq8jSHQkZ5e2w&s" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aQHcMa9qgDUgF3iK690SYzKFrEOdd-F7hQ&s" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX74nE4faLUMLc31cL-7hDSXs-2iAKtYIOkw&s" className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div> 
  )
}
