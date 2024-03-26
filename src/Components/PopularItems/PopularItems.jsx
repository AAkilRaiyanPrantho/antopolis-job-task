import './PopularItems.css'

const PopularItems = () => {
    return (
        <div className="Popular">
            <h1 className="poppins-bold" style={{ color: "#3F3F3F" }}>Our Popular <span style={{ color: "#F72D57" }}>Categories</span></h1>
            <div style={{display: 'flex'}}>
              <div className='Categories'><button>Pizzas</button></div>  
              <div className='Categories'><button>Burgers</button></div>  
              <div className='Categories'><button>Salads</button></div>  
              <div className='Categories'><button>Combos</button></div>  
            </div>
        </div>
    );
};

export default PopularItems;