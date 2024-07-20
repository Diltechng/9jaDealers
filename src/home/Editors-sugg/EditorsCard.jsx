import './editors-sugg.style.css'
const EditorsCard = () =>{
    const Details = [
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon'

        },
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon'

        },
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon'

        },
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon'

        },
        {
            id: 1,
            title: 'Audi',
            author: 'young jhon'

        }
    ]
    
    return(
        <>
        <h3 className='title w-100 text-success p-2'>Editors Picks</h3>
        <div className='edt-suggestions d-flex w-100 flex-nowrap justify-content-center align-content-center p-3'>
        {Details.map(({title, id, author}) =>(
      <div key={id} className='box m-3 shadow w-25 h-25'>
            {title}
            {author}
      </div>
        ))};
        </div>
      
      </>
    )
}
export default EditorsCard;