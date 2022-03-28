import React from 'react';
import './CategoriesButtons.css';

const CategoriesButtons = ({ categories, activeCategory, filterItems }) => {
    return (
        <div className='btns-container'>
            {categories.map((category, i) => {
                return (
                    <button 
                    key={i} 
                    className={activeCategory === category ? 'filter-btn active' : 'filter-btn'} 
                    onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })
            }
        </div>
    )
};

export default CategoriesButtons;