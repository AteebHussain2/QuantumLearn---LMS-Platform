'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { DarkModeToggle } from './DarkModeToggle'
import { Atom, BookMarkedIcon } from 'lucide-react';
import Link from 'next/link'
import { Button } from './ui/button';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <header className='fixed top-0 z-50 w-full bg-white/1 backdrop-blur-md border-b border-border'>
            <div className='container mx-auto px-4'>
                <div className='flex h-16 items-center justify-between gap-4'>
                    {/* Left */}
                    <div className='flex items-center gap-4'>
                        <Link
                            href={'/'}
                            prefetch={false}
                            className='flex items-center space-x-2 hover:opacity-90 transition-opacity'
                        >
                            <Atom className='w-6 h-6 text-primary' />
                            <span className='pb-1 text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent'>QuantumLearn</span>
                        </Link>

                        <SearchInput />
                    </div>

                    {/* Right */}
                    <div className='flex items-center space-x-2 md:space-x-4'>
                        <nav>
                            <SignedIn>
                                <Link
                                    prefetch={false}
                                    href="/my-courses"
                                    className="flex space—x—2 items—center text—sm font—medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md: rounded-md md:px-4 md:py-2"
                                >
                                    <BookMarkedIcon className=" w—4" />
                                    <span className="hidden md:block">My Courses</span>
                                </Link>
                            </SignedIn>
                        </nav>

                        <DarkModeToggle />

                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                        <SignedOut>
                            <SignInButton mode='modal'>
                                <Button className='variant-outline'>Sign In</Button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default Header