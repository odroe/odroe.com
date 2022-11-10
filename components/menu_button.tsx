"use client"

import { Menu } from '@headlessui/react'
import Link from 'next/link';
import { navigation } from "./navigation";

export const MenuButton = () => {
  return (
    <Menu className="relative inline-block text-left ml-auto md:ml-0 lg:hidden" as="div">
      <Menu.Button className="relative" as="div">
        {({ open }) => (
          <div className="relative group" data-open={open ? 'true' : 'false'}>
            <div className="flex flex-col justify-between transform transition-all duration-300 group-data-[open=true]:-rotate-[45deg] origin-center w-6 aspect-square">
              <div className="bg-black dark:bg-white h-[4px] w-1/2 rounded transform transition-all duration-300 group-data-[open=true]:-rotate-90 group-data-[open=true]:h-[2px] origin-right delay-75 group-data-[open=true]:-translate-y-[1px]"></div>
              <div className="bg-black dark:bg-white h-[2px] rounded"></div>
              <div className="bg-black dark:bg-white h-[4px] w-1/2 rounded self-end transform transition-all duration-300 group-data-[open=true]:-rotate-90 group-data-[open=true]:h-[2px] origin-left delay-75 group-data-[open=true]:translate-y-[1px]"></div>
            </div>
          </div>
        )}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {navigation.map(({ name, href }) => (
          <Menu.Item key={href} as={Link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href={href}>
            {name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}