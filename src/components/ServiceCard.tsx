// src/components/ServiceCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string; // optional emoji or icon name
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link
      to={link}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
    >
      <div className="flex items-center space-x-4 mb-4">
        {icon && (
          <span className="text-3xl bg-teal-100 text-teal-600 rounded-lg p-3">
            {icon}
          </span>
        )}
        <h3 className="text-xl font-semibold text-navy-900 group-hover:text-teal-600">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
