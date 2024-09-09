import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavItems = () => (
	<>
		<Link to="/#features" className="text-gray-600 hover:text-gray-900">
			Features
		</Link>
		<Link to="/#pricing" className="text-gray-600 hover:text-gray-900">
			Pricing
		</Link>
		<Link to="/#about" className="text-gray-600 hover:text-gray-900">
			About
		</Link>
		<Link to="/#contact" className="text-gray-600 hover:text-gray-900">
			Contact
		</Link>
		<Link to="/sign-up" className="text-gray-600 hover:text-gray-900">
			Register
		</Link>
	</>
);

const Header: React.FC = () => {
	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link to="#">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto sm:h-10" src="/placeholder.svg?height=40&width=40" alt="" />
						</Link>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-gray-400">
									<span className="sr-only">Open menu</span>
									<Menu className="h-6 w-6" aria-hidden="true" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<nav className="flex flex-col space-y-4 mt-8">
									<NavItems />
								</nav>
							</SheetContent>
						</Sheet>
					</div>
					<nav className="hidden md:flex space-x-10">
						<NavItems />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;