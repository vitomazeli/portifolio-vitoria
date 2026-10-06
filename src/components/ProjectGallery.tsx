type ProjectGalleryProps = {
  title: string;
  images: string[];
};

function ProjectGallery({
  title,
  images,
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery">
      <span className="project-label">
        GALERIA
      </span>

      <h2>Projeto em funcionamento</h2>

      <div className="pg-grid">
        {images.map((image, index) => (
          <div
            className="pg-thumbnail"
            key={image}
          >
            <img
              src={image}
              alt={`${title} - screenshot ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;