import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';

const Categories = () => {
  return (
    <div className="fixed top-24 text-right w-full">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none transition-transform duration-300 hover:bg-gray-700 hover:scale-105">
          Options
          <ChevronDownIcon className="size-4 fill-white/60 transition-transform duration-300 hover:scale-110" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-900 p-1 text-sm/6 text-white transition duration-200 ease-out transform scale-95 opacity-0 focus:outline-none data-[closed]:opacity-0 data-[closed]:scale-95 data-[open]:opacity-100 data-[open]:scale-100"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all duration-300 hover:bg-gray-700">
              <PencilIcon className="size-4 fill-white/30 transition-transform duration-300 group-hover:scale-110" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all duration-300 hover:bg-gray-700">
              <Square2StackIcon className="size-4 fill-white/30 transition-transform duration-300 group-hover:scale-110" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/10" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all duration-300 hover:bg-gray-700">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30 transition-transform duration-300 group-hover:scale-110" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition-all duration-300 hover:bg-gray-700">
              <TrashIcon className="size-4 fill-white/30 transition-transform duration-300 group-hover:scale-110" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Categories;
