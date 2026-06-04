export const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

export const getNewsByCategoryId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}


export const getNewsById = async (newsId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
  const data = await res.json()
  const news = data.data[0]
  return news
}