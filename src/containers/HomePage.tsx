'use client';

import { Colors, ResponsivePage, Spacing } from '@divops-packages/blog-creco-dev';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Divider } from '../components/Divider';

export const HomePage = () => {
  return (
    <ResponsivePage
      mainBackgroundColor={Colors.Dark}
      subBackgroundColor={Colors.DeepDark}
      fontColor={Colors.SoftWhite}
      desktopPageWidth="840px"
    >
      <Header>
        <Logo />
      </Header>

      {/*  필요 없는 부분 제거 */}

      {/* <Spacing size={20} />

      <p style={{ fontSize: '60px', fontWeight: 'bold' }}>Welcome</p> */}

      {/* <Spacing size={14} />

      <p style={{ fontSize: '20px', color: 'grey', fontWeight: 'light' }}>Creco</p> */}

      {/* <Spacing size={20} /> */}

      <Divider />

      <Spacing size={40} />

      <ul>
        <li>
          <Link href="/post" className='clickable'>
            <h2>Post</h2>
          </Link>
        </li>
        <Spacing size={60} />
        <li>
          <Link href="/coffee-chat" className='clickable'>
            <h3>FEConf2024 커피챗 신청하러가기</h3>
          </Link>
        </li>
      </ul>
    </ResponsivePage>
  )
};
