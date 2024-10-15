import Nav from './Nav'


const Item = () => {
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [promotion, setPromotion] = useState('')
  
  useEffect(() => {
    setImg(sessionStorage.getItem('img'))
    setName(sessionStorage.getItem('name'))
    setPrice(sessionStorage.getItem('price'))
    setPromotion(sessionStorage.getItem('promotion'))
  },[])
  return (
    <>
      <Nav/>
      <div id='parentItem'>
        <div id='leftItem'>
          <img src={img}/>  
        </div>
        <div id='rightItem'>
          <h1>Detail</h1>
          <h3>name: {name}</h3>
          <h3>price: {price}$</h3>
          {promotion > 0 ? (
            <h3>promotion: <span>{promotion}</span>%</h3>
          ) : (
            <h3></h3>
          )}
        </div>
      </div>
    </>
  );
}
 
export default Item;

