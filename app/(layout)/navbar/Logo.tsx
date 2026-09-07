"use client";

import LogoImg from '@/public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";

const Logo = () => {
    const { locale } = useI18n();

    return (
        <div className="relative h-8 w-[84px] md:h-[38px] md:w-[110px]">
            <Link href={addLocaleToPathname("/", locale)}>
                <Image src={LogoImg} alt="Logo" fill priority sizes="(max-width: 768px) 84px, 110px" className='object-contain' />
            </Link>
        </div>
    )
}

export default Logo
