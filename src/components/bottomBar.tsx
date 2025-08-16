import React from 'react';

interface BottomBarProps {
  items?: {
    id: string;
    label: string;
    icon?: React.ReactNode; 
    href?: string;
    onClick?: () => void; 
  }[];
}

const BottomBar: React.FC<BottomBarProps> = ({ items }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-md mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {items ? (
          items.map((item) => (
            <div key={item.id} className="flex-1 text-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.icon && <span className="inline-block mr-1">{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.icon && <span className="inline-block mr-1">{item.icon}</span>}
                  {item.label}
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No items to display.</p>
        )}
      </div>
    </div>
  );
};

export default BottomBar;