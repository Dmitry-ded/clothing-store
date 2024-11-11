import { useEffect } from 'react'
import Header from '../../components/header/Header'
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchProducts, selectProductData } from '../../redux/slices/productSlice';
import { selectFilterSearch } from '../../redux/slices/filterSlice';
import Skeleton from '../../components/skeleton/Skeleton';
import ProductBlock from '../../components/productBlock/ProductBlock';
import Footer from '../../components/footer/Footer';
import './catalog.css'

const Catalog = () => {

  const dispatch = useAppDispatch();
  const { products, status } = useSelector(selectProductData);
  const { searchValue } = useSelector(selectFilterSearch);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const skeletons = [...new Array(6)].map((_, index) => 
    <Skeleton key={index} />
  );

  const items = products.filter((el) => {
    if (el.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((el) => (<ProductBlock key={el.id} {...el}/>))

  return (
    <div>
      <div className='catalog-products-block'>
        {
          status === 'error'
          ?(<div>Произошла ошибка</div>)
          :
            (<>
              {
                status === 'loading'
                ? skeletons
                : items
              }
            </>)
        }
      </div>
    </div>
  )
}

export default Catalog;
