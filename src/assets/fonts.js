import BeaufortforLOL from 'next/font/local';
import Mark_Pro_Bold from 'next/font/local';

export const beaufort = BeaufortforLOL({
  variable: '--font-beaufort',
  display: 'swap',
  src: [
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Heavy.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-LightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/BeaufortforLOL/BeaufortforLOL-HeavyItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
})

export const markpro = Mark_Pro_Bold({
  variable: '--font-markpro',
  display: 'swap',
  src: [
    {
      path: './fonts/MarkPro/Mark-Pro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})