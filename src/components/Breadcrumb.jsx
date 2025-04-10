'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaBoxOpen, FaThLarge, FaBuilding } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

const iconMap = {
  Dashboard: <FaThLarge className="text-gray-400 w-4 h-4" />,
  Nitendo: <FaBuilding className="text-gray-400 w-4 h-4" />,
  'New Murabaha Financing': <FaBoxOpen className="text-black w-4 h-4" />,
};

export const Breadcrumb = ({ breadcrumb = [], title = '' }) => {
  const pathname = usePathname();

  return (
      <div className="flex flex-col gap-1">
        {/* Title */}
        {title && <h2 className="text-2xl font-semibold text-black">{title}</h2>}

        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 gap-1">
          {breadcrumb.map(({ label, path }, index) => {
            const isLast = index === breadcrumb.length - 1;

            return (
                <Fragment key={index}>
                  {/* Icon and label */}
                  <div className={`flex items-center gap-1 ${isLast ? 'text-black font-medium' : ''}`}>
                    {iconMap[label] && <span>{iconMap[label]}</span>}
                    {isLast ? (
                        <span>{label}</span>
                    ) : (
                         <Link href={path} className="hover:underline">
                           {label}
                         </Link>
                     )}
                  </div>

                  {/* Chevron separator */}
                  {!isLast && <ChevronRight className="w-4 h-4 text-gray-400" />}
                </Fragment>
            );
          })}
        </div>
      </div>
  );
};

export default Breadcrumb;
