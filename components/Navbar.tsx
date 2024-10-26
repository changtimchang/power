import Image from 'next/image'
import React from 'react'
import Logo from '@/public/assets/img/logo.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const Navbar = () => {
    return (
        <nav className='flex p-4 items-center justify-between'>
            <div >
                <Image className="w-[40px] mr-4" src={Logo} alt='' />
            </div>
            <div className="flex flex-grow items-center justify-center">
                <span className="mx-4"><a href="/company">회사소개</a> </span>
                <span className="mx-4"><a href="/business">비지니스</a></span>
                <span className="mx-4"><a href="/customer">고객문의</a></span>
            </div>
            <div className="bg-[#edf5ff] text-black overflow-hidden px-4 py-2 rounded-full">
                <DropdownMenu>
                    <DropdownMenuTrigger>계열사</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><a href="http://www.trinity-eng.co.kr/">트리니티엔지니어링</a>  </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar