import GoodsCard from './GoodsCard';
import '../styles/GoodsGallery.css';

const GoodsGallery = () => {
  const goods = [
    { id: 1, name: 'Смартфон', price: 12000, image: './img/smartphone.png' },
    { id: 2, name: 'Ноутбук', price: 35000, image: './img/laptop.png' },
    { id: 3, name: 'Навушники', price: 3000, image: './img/headphones.png' },
    { id: 4, name: 'Телевізор', price: 25000, image: './img/tv.png' },
    { id: 5, name: 'Камера', price: 15000, image: './img/camera.png' },
    { id: 6, name: 'Смарт-годинник', price: 8000, image: './img/smartwatch.png' },
  ];

  return (
    <div className='gallery'>
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default GoodsGallery;
