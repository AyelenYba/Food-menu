import React from 'react';
import './MenuList.css';

const MenuList = ({ menu }) => {
    return (
        <section className='menu-container'>
            {menu.map(food => {
                const {id, title, img, description, price} = food;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} width='200px' className='food-img'/>
                        <div className='title-price'>
                            <h4>{title}</h4>
                            <h4 className='food-price'>{price}</h4>
                        </div>
                        <div className='food-info'>
                            <p className='description'>{description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
};

export default MenuList;