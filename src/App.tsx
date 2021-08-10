import React from 'react'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

const Container = tw.div`
  w-screen h-screen
  flex flex-col
  bg-gray-800 overflow-hidden
  items-center justify-center
`

const Text = tw(motion.h1)`
  text-3xl font-extrabold
  tracking-widest uppercase
  text-gray-100
`

const SubText = tw(Text)`text-xl font-medium tracking-wide`

const Title = tw(SubText)`text-sm`

const Image = tw(motion.img)`object-center rounded-full shadow-xl border-4`

const Link = tw.a`transform hover:scale-110`

const IconList = tw.div`flex justify-center items-center text-gray-100`

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#f7fafc"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
  </svg>
)

const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#f7fafc"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
  </svg>
)

const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#f7fafc"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
)

const LinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#f7fafc"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="8" y1="11" x2="8" y2="16" />
    <line x1="8" y1="8" x2="8" y2="8.01" />
    <line x1="12" y1="16" x2="12" y2="11" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
)

const Email = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="#f7fafc"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="4" />
    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
  </svg>
)

const links = [
  {
    title: 'Facebook',
    Icon: Facebook,
    link: 'https://facebook.com/joseederangojr',
  },
  {
    title: 'Twitter',
    Icon: Twitter,
    link: 'https://twitter.com/joseederangojr',
  },
  {
    title: 'Github',
    Icon: Github,
    link: 'https://github.com/joseederangojr',
  },
  {
    title: 'LinkedIn',
    Icon: LinkedIn,
    link: 'https://linkedin.com/in/joseederangojr',
  },
  {
    title: 'Email',
    Icon: Email,
    link: 'mailto:joseederangojr@gmail.com',
  },
]

function App() {
  return (
    <Container>
      <Image
        src="https://github.com/joseederangojr.png"
        width="300"
        height="300"
        initial={{ opacity: 0, scale: 0, rotate: 360 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
      />
      <Text initial={{ opacity: 0, y: 250 }} animate={{ opacity: 1, y: 0 }}>
        Jose Ederango Jr.
      </Text>
      <SubText initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        Building quality software
      </SubText>
      <Title initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        Software Engineer &mdash;{' '}
        <a
          href="https://developer.manulife.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manulife Business Processing Services
        </a>
      </Title>
      <IconList>
        {links.map(({ Icon, title, link }) => (
          <Link
            key={title}
            title={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </Link>
        ))}
      </IconList>
    </Container>
  )
}

export default App
