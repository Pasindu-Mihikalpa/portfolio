import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const BlogLinkWrapper = ({ isAvailable, destination, target, children }) => {
  if (isAvailable) {
    return (
      <a href={destination} target={target} rel="noopener noreferrer" className="block h-full">
        {children}
      </a>
    );
  }
  return (
    <Link to={destination} className="block h-full">
      {children}
    </Link>
  );
};

BlogLinkWrapper.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  destination: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const BlogCard = ({ blog }) => {
  const isAvailable = blog.status === 'active';
  const destination = isAvailable ? blog.link : '/coming-soon';
  const target = isAvailable ? "_blank" : "_self";

  return (
    <BlogLinkWrapper isAvailable={isAvailable} destination={destination} target={target}>
      <div className="bg-dark-card p-8 rounded-xl border border-[#222] hover:border-gold transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
        
        <div className="text-gray-500 text-sm mb-4 group-hover:text-gold transition-colors">
          {blog.date}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
          {blog.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 grow">
          {blog.excerpt}
        </p>

        <div className="flex items-center text-white font-medium group-hover:text-gold transition-colors">
          {isAvailable ? "Read Article" : "Coming Soon"} 
          <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
        </div>

      </div>
    </BlogLinkWrapper>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    status: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;