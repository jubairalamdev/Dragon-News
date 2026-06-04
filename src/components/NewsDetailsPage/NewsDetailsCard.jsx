import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='col-span-9'>
            <p className='text-xl font-bold text-gray-700'>
                Dragon News
            </p>
            <div className='p-5 space-y-5 rounded-lg border border-gray-100'>
                <Image 
                    src={news.image_url}
                    width={700}
                    height={400}
                    alt={news.title}
                    className='w-full rounded-lg'
                />
                <h2 className='text-2xl font-bold text-gray-700'>
                    {news.title}
                </h2>
                <p className='text-gray-600'>
                    {news.details}
                </p>
                <Link 
                    href={`/category/${news.category_id}`}
                    className='flex gap-2 items-center p-2 text-lg rounded-md w-fit text-white bg-[#D72050] '
                >
                    <FaArrowLeft />
                    All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;