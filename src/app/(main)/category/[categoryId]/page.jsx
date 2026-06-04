import LeftSideBar from '@/components/Homepage/LeftSideBar';
import NewsCard from '@/components/Homepage/NewsCard';
import RightSideBar from '@/components/Homepage/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';

const categoryPage = async({params}) => {
  
  const {categoryId} = await params;
  console.log(categoryId)

  const categories = await getCategories()
  // console.log(categories)

  const news = await getNewsByCategoryId(categoryId)
  // console.log(news)



    return (
        <main className="grid grid-cols-12 gap-6 my-20">
      
      <LeftSideBar categories={categories} activeId={categoryId} />

      <div className="col-span-6 space-y-4">
        
      {
        news.length > 0 
        ? news.map(n => 
          <NewsCard key={n._id} news={n} />
        )
        : <h3 className='text-center font-medium text-2xl text-gray-600'>No News were Found</h3>
      }



      </div>

      <RightSideBar />


    </main>
    );
};

export default categoryPage;