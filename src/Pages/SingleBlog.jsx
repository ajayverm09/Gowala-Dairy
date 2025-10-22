import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../Components/BlogsData";

const SingleBlog = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen mt-15 bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-[#7CBA30] mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="bg-[#7CBA30] text-white hover:bg-white border border-[#7CBA30] hover:text-[#7CBA30] px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br mt-15 from-green-50 to-orange-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                to="/"
                className="bg-[#7CBA30] text-white hover:bg-white border border-[#7CBA30] hover:text-[#7CBA30] transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/blogs"
                className="bg-[#7CBA30] text-white hover:bg-white border border-[#7CBA30] hover:text-[#7CBA30] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8 bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-green-50 px-3 py-1 rounded text-[#7CBA30] font-medium">
              {post.category}
            </span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
            <span className="mx-3">•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7CBA30] mb-6 font-serif">
            {post.title}
          </h1>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#7CBA30] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="ml-4">
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-500">Farm Expert</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Share Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h3 className="text-lg font-semibold text-[#7CBA30] mb-4">
            Share this article
          </h3>
          <div className="flex flex-wrap gap-4">
            {/* Facebook */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </button>

            {/* Twitter */}
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="hidden sm:inline">Twitter</span>
            </button>

            {/* WhatsApp */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-green-700 transition-colors">
                      <Link to={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center text-green-700 hover:text-green-600 font-medium text-lg group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SingleBlog;
