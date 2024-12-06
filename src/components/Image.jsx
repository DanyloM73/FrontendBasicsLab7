import { useState } from 'react';
import '../styles/Image.css';

function Image() {
  const [images, setImages] = useState([
    { id: Date.now(), src: './img/zhytomyr.jpg', width: 600 },
  ]);

  const addImage = () => {
    setImages((prev) => [
      ...prev,
      { id: Date.now(), src: './img/zhytomyr.jpg', width: 600 },
    ]);
  };

  const increaseImage = (id) => {
    if (id === undefined) return;
    setImages((prev) =>
      prev.map((img) =>
        img.id === id
          ? { ...img, width: Math.min(img.width + 200, 1000) } 
          : img
      )
    );
  };

  const decreaseImage = (id) => {
    if (id === undefined) return;
    setImages((prev) =>
      prev.map((img) =>
        img.id === id
          ? { ...img, width: Math.max(img.width - 200, 200) } 
          : img
      )
    );
  };

  const removeImage = (id) => {
    if (id === undefined) return;
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div id="imageContainer">
        {images.map((img) => (
          <a
            key={img.id}
            href="https://zt-rada.gov.ua/"
            className="img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img.src}
              alt="Фото міста Житомир"
              className="photo-img"
              style={{ width: img.width }}
            />
          </a>
        ))}
      </div>

      <div className="button-container">
        <button onClick={addImage}>Додати зображення</button>
        <button
          onClick={() => {
            if (images.length > 0) increaseImage(images[images.length - 1].id);
          }}
        >
          Збільшити зображення
        </button>
        <button
          onClick={() => {
            if (images.length > 0) decreaseImage(images[images.length - 1].id);
          }}
        >
          Зменшити зображення
        </button>
        <button
          onClick={() => {
            if (images.length > 0) removeImage(images[images.length - 1].id);
          }}
        >
          Видалити зображення
        </button>
      </div>
    </div>
  );
};

export default Image;
