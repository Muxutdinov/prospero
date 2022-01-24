import React from 'react';
import ArticleHeader from '../components/ArticleHeader';
import HeadCenter from '../components/Header/HeadCenter';
import HeadTop from '../components/Header/HeadTop';
import Navbar from '../components/Header/Navbar';

const Article = () => {
  return <div>
    <HeadTop />
    <HeadCenter />
    <Navbar />
    <ArticleHeader />
  </div>;
};

export default Article;
