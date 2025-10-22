import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../Components/BlogsData';
import { Home } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const BlogCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        {post.featured && (
          <span className="absolute top-4 right-4 bg-[#7CBA30] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="bg-green-50 px-2 py-1 rounded text-[#7CBA30] font-medium">
            {post.category}
          </span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#7CBA30] transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#7CBA30] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="bg-white text-[#7CBA30] hover:text-white hover:bg-[#7CBA30] font-medium text-sm flex items-center group"
          >
            Read More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-hidden mt-15 bg-gradient-to-br from-green-50 to-orange-50">
      {/* Hero Section with Background Image */}
      <header
        className="relative py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://labartisan.net/demo/gowala/assets/css/bg-images/page-header1.jpg')`,
        }}
      >
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-serif">
            From Our Farm to Your Table
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md mb-6">
            Discover stories, tips, and insights from our dairy farm. Learn about sustainable farming, 
            animal welfare, and the journey of our fresh dairy products.
          </p>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center text-white text-sm md:text-base">
            <Link
              to="/"
              className="flex items-center hover:text-[#7CBA30] transition-colors"
            >
              <Home className="w-5 h-5 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#7CBA30]">Blog</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
          {/* Mobile View - Dropdown and Search */}
          <div className="md:hidden">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#7CBA30] focus:border-[#7CBA30]"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  <span className="block truncate">{selectedCategory}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                {categoryDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                    {categories.map(category => (
                      <li
                        key={category}
                        className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50"
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryDropdownOpen(false);
                        }}
                      >
                        <span className={`block truncate ${selectedCategory === category ? 'font-medium' : 'font-normal'}`}>
                          {category}
                        </span>
                        {selectedCategory === category ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <svg className="h-5 w-5 text-[#7CBA30]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop View - Category Buttons and Search */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#7CBA30] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBA30] w-full md:w-64"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && !searchTerm && featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#7CBA30] mb-6 flex items-center">
              <span className="mr-2">⭐</span> Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold text-[#7CBA30] mb-6">
            {selectedCategory === 'All' && !searchTerm ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-[#7CBA30] to-[#2c4e02] rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">🐄 Stay Updated with Farm News</h3>
          <p className="mb-6 text-green-100">Get the latest articles, farm updates, and exclusive offers delivered to your inbox.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-white ring ring-white focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
            />
            <button className="bg-white text-[#7CBA30] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;