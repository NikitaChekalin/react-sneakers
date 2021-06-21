import './App.scss';
// import plus from './img/plus.png'
import search from './img/search.png'
// import sneakers2 from './img/sneakers/2.jpg'
// import sneakers3 from './img/sneakers/3.jpg'
// import sneakers4 from './img/sneakers/4.jpg'
// import liked from './img/liked.svg'
import Card from './Components/Card'
import Header from './Components/Header'
import Drawer from './Components/Drawer'


const App = () => {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search__block">
          <img width={20} alt="Search..." src={search} className="search__photo" />
          <input placeholder="Пошук необхідної пари.." />
        </div>
        <h1 className="content__header">Всі кросівки</h1>
        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div >
  )
}
export default App;
