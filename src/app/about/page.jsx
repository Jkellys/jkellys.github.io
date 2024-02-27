import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.svg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Jonathan Kelly. I live in Nanaimo.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Jonathan Kelly
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I live in Nanaimo BC, where i have lived for most of my life. I
              started programming in University when I tried out a course and
              have been hooked ever since. I’ve worked on a wide range of
              projects, from websites to python applications. Besides
              programming I have also had a passion for sailing and the
              community that surrounds it.
            </p>
            <p>
              I started programming in University and have been hooked ever
              since. I have always love building things and working in a team
              and I found software development fulfills both these passions.
              I’ve worked on a wide range of projects, from websites to python
              applications, and I’m always looking for new challenges.
            </p>
            <p>
              My sailing career started when I was 11 years old and I have been
              hooked ever since. I was introduced to sailing at the local yacht
              club during there summer camps. Then I started racing the local
              dinghy fleet and competing at the BC summer games. There I placed
              second and later that year won the BC circuit. After that while I
              was attending the university of Victoria I started to compete in
              the 49er class. I competed in this class for 5 years traveling to
              Australia and Europe to race against the best sailors in the
              world. I have since retired from the 49er class and have started
              to coach the local sailing team in Nanaimo.
            </p>
            <p>
              Right now most of my work is with React js, tailwind css, and
              Firebase. As I have found this tech stack to be best suited for my
              clients needs. I am always looking to learn new things and am open
              to new opportunities. If you have a project you would like to
              discuss, feel free to reach out.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/Jkellys"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jonathankelly@hotmail.ca"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jonathankelly@hotmail.ca
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
