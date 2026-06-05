import RightSideBar from '@/components/Homepage/RightSideBar';
import NewsDetailsCard from '@/components/NewsDetailsPage/NewsDetailsCard';
import { getNewsById } from '@/lib/data';
import React from 'react';

export async function generateMetadata({ params }) {
  const {newsId}= await params;
  const news = await getNewsById(newsId);
 
  return {
    title: `${news.title} - Dragon News`,
    description: news.details,
  }
}


const newsDetailsPage = async({params}) => {
    const {newsId} = await params;
    const newsData = await getNewsById(newsId)

    return (
        <main className="grid grid-cols-12 gap-6 my-20">
            <NewsDetailsCard news={newsData} />
            <RightSideBar />
        </main>
    );
};

export default newsDetailsPage;