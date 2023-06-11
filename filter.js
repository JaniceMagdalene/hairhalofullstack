import { useState } from 'react';
import './filter.css';
import { useEffect } from 'react';

const imagess=[
  {id:'1',imageName:'men1.jpg',tag:'men'},
  {id:'2',imageName:'women1.jpg',tag:'women'},
  {id:'3',imageName:'test1.jpg',tag:'transgender'},
  {id:'4',imageName:'men4.jpg',tag:'men'},
  {id:'5',imageName:'women3.jpg',tag:'women'},
  {id:'6',imageName:'men3.png',tag:'men'},
  {id:'7',imageName:'women2.jpg',tag:'women'},
  {id:'8',imageName:'women4.jpg',tag:'women'},
  {id:'9',imageName:'test3.jpg',tag:'transgender'},
{id:'10',imageName:'men2.jpg',tag:'men'},
{id:'11',imageName:'test4.jpg',tag:'transgender'},
{id:'12',imageName:'men5.jpg',tag:'men'},
{id:'13',imageName:'women6.jpg',tag:'women'},
{id:'14',imageName:'men6.jpg',tag:'men'},
{id:'15',imageName:'women5.jpg',tag:'women'},
{id:'16',imageName:'test2.jpg',tag:'transgender'},

]
function Filter() {
  const [tag,setTag]=useState('women');
  const[filteredImages,setFilteredImages]=useState([]);

  useEffect(()=>{
    tag === 'all'? setFilteredImages(imagess): setFilteredImages(imagess.filter(image => image.tag === tag))
  },
  [tag]
  );
  return (
    <>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className="App" handleSetTag={setTag}>
      <div className='ta'>
      <TagButton name="all" handleSetTag={setTag}/>
      <TagButton name="men" handleSetTag={setTag}/>
      <TagButton name="women" handleSetTag={setTag}/>
      <TagButton name="transgender" handleSetTag={setTag}/>
      </div>
      <div className='jm'>
        {filteredImages.map(image=>
        <div key = {image.id} className='mj'>
          <img className = ' dj'src={`/imagess/${image.imageName}`} alt="logo"/>
        </div>
        
        )}
      </div>
    </div>
    
    </>
  );
}

const TagButton=({name,handleSetTag})=>{
  return <button className='tag' onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>;
};
export default Filter;
