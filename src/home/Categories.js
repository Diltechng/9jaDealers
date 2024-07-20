
import car from './Categories/images/car.png';
import house from './Categories/images/house.png';
import autopart from './Categories/images/autopart.png';
import bikes from './Categories/images/bikes.png';
import interior from './Categories/images/interior.png';
import exterior from './Categories/images/exterior.png';
import './Categories/category.style.css';
const Categories = () =>{
  const cat = [
    {
      id : 1,
      title: 'Cars',
      image: car
    },
    {
      id: 2,
      title: 'Bikes',
      image: bikes
    },
    {
      id: 3,
      title: 'Auto Part',
      image: autopart
    },
    {
      id: 4,
      title: 'Real Estate',
      image: house
    },
    {
      id: 5,
      title: 'House Interior',
      image: interior
    },
    {
      id: 6,
      title: 'House Exterior',
      image: exterior
    }
  ]

  return (
    <div className='categories d-flex w-100 flex-wrap justify-content-center align-content-center p-3'>
    <h3 className='title w-100 text-success p-2'>Categories</h3>
       {cat.map(({title, id, image })=>(
        <>
  <div className='category-box rounded d-flex flex-wrap justify-content-center shadow bg-light h-75 m-2' key={id}>
  <h5 className='cat-name text-success'>{title}</h5>
  <img src={image} alt={title} className='cat-img rounded w-100 d-flex'/>
    
  </div>
  </>
       ))}
  </div>
  )
}
export default Categories