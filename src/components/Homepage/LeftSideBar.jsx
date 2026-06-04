import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className="col-span-3">
            <h4 className="text-xl text-gray-700 font-semibold">All Categories</h4>
            <ul className="list-none text-xl text-gray-400 font-medium my-5">
                {
                    categories.map(category =>
                        <li
                            className={`
                                    ${activeId === category.category_id && "bg-slate-200 text-gray-700"}
                                    rounded-lg
                                `}
                            key={category.category_id}>
                            <Link
                                href={`/category/${category.category_id}`}
                                className='py-4 px-5 block'
                            >
                                {category.category_name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;