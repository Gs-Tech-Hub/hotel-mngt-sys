export default function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>gallery</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure><img src={`/images/gallery${num}.jpg`} alt="#"/></figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
