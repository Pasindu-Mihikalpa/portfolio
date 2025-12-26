import { blogs } from '../data/blogs';
import BlogCard from '../components/cards/BlogCard';
import { ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Blog() {
  const scrollingBlogs = [...blogs, ...blogs, ...blogs];

  return (
    <div className="py-12 mb-12 animate-fade-in-up">
      <div className="container px-6 mx-auto">
        
        {/* Page Header */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white uppercase md:text-5xl">
            Blog & Articles
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold tracking-widest text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20 whitespace-nowrap">
            LATEST NEWS
          </span>
        </div>

        {/* Horizontal Scrolling Blog Cards */}
        <div className="relative w-full py-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#050A15] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#050A15] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-8 animate-marquee pause-on-hover">
            {scrollingBlogs.map((blog, index) => (
              <div key={`${blog.id}-${index}`} className="w-[350px] md:w-[450px] flex-shrink-0">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        {/* External Blog Link */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" href="https://medium.com/@pmihikalpa2022">
            Visit Main Blog <ExternalLink size={20} />
          </Button>
        </div>

      </div>
    </div>
  );
}