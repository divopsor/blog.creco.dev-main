'use client';

import { Colors, ResponsivePage, Spacing } from '@divops-packages/blog-creco-dev';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <ResponsivePage
      mainBackgroundColor={Colors.Dark}
      subBackgroundColor={Colors.DeepDark}
      fontColor={Colors.SoftWhite}
      desktopPageWidth="840px"
    >
      <Spacing size={12} />
      <h1>Creco's Blog</h1>
      <Spacing size={60} />

      <ul>
        <li>
          <Link href="/post" className='clickable'>
            <h4>Post 보러가기</h4>
          </Link>
        </li>
        <Spacing size={20} />
        <li>
          <Link href="/ps" className='clickable'>
            <h4>Problem Solving 보러가기</h4>
          </Link>
        </li>
        <Spacing size={20} />
        <li>
          <Link href="/doodle" className='clickable'>
            <h4>낙서 보러가기</h4>
          </Link>
        </li>
      </ul>
    </ResponsivePage>
  )
};
