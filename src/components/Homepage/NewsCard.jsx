import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-md transition hover:shadow-xl hover:-translate-y-2 rounded-xl p-1">
            <div className='bg-slate-100 p-3 rounded-xl justify-between flex'>
                <div className='flex gap-4 items-center '>
                    <Image
                        src={news.author?.img}
                        alt={news.author.name ? news.author.name : "Author Image"}
                        width={50}
                        height={50}
                        className='rounded-full' />
                    <div>
                        <h5 className='font-medium text-gray-800'>{news.author?.name}</h5>
                        <p className='text-gray-600 text-sm'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='text-2xl gap-2 flex items-center'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>

            <div className='p-4 space-y-3'>
                <div>
                    <h2 className="font-bold text-xl text-gray-700">{news.title}</h2>
                </div>
                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title ? news.title : "News Image"}
                        width={512}
                        height={512}
                        className='rounded-xl w-full' />
                </figure>
                <div>
                    <p className='text-gray-600 leading-7 line-clamp-4'>
                        {news?.details}
                    </p>
                    <Link className="font-bold my-2 text-[#FF8C47]" href={`/news/${news._id}`}>Read More</Link>
                </div>
                <div className='border-t border-gray-300 pt-4 flex justify-between items-center'>
                    <div className='flex text-[#FF8C47] text-xl gap-1 '>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4 className='ml-2 text-[16px] text-gray-500'>{news.rating.number}</h4>
                    </div>
                    <div className='flex text-gray-500 text-3xl gap-1 items-center'>
                        <IoMdEye />
                        <h4 className='ml-2 text-[16px] '>{news.rating.number}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;