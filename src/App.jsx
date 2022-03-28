import React, { useState } from 'react';
import CategoriesButtons from './components/categoriesbuttons/CategoriesButtons';
import MenuList from './components/menulist/MenuList';
import menu from './data/data';
import './App.css';

const allCategories = ['All', ...new Set(menu.map(item => item.category))];

const App = () => {
    
    const [menuItems, setMenuItems] = useState(menu);
    const [activeCategory, setActiveCategory] = useState('');

    const filterItems = (category) => {
        setActiveCategory(category);

        if(category === 'All') { //Return all the menu
            setMenuItems(menu);
            return;
        }
        //Return only the ones that match the category
        const filteredFood = menu.filter(food => food.category === category);
        setMenuItems(filteredFood);
    }

    return (
        <>
        <main className='main-section'>
            <h1>Food Menu</h1>
            <CategoriesButtons categories={allCategories} activeCategory={activeCategory} filterItems={filterItems}/>
            <MenuList menu={menuItems}/>
        </main>
        </>
    )
}

export default App;