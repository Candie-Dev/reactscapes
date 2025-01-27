import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const TestDropdown = () => {
  return (
    <div className="p-4">
      <Menu>
        <MenuButton className="bg-white text-black px-4 py-2 rounded-md">
          SORT BY
          <ChevronDownIcon className="inline-block w-5 h-5 ml-2" />
        </MenuButton>
        <MenuItems className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
          <MenuItem>
            {({ active }) => (
              <button className={`${active ? 'bg-blue-500 text-white' : 'text-black'} px-4 py-2 w-full text-left`}>
                Edit
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button className={`${active ? 'bg-blue-500 text-white' : 'text-black'} px-4 py-2 w-full text-left`}>
                Delete
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default TestDropdown;
