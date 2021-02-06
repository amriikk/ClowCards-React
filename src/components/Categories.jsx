import React from 'react';

const Categories = ({ categories, filterCards }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button
                        type='btn'
                        className='filter-btn'
                        key={index}
                        onClick={() => filterCards(category)}
                        >
                            {category}
                        </button>
                );
            })}
        </div>
    );
};

export default Categories;