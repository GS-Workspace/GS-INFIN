'use client'

import Logo from '../../Icons/Logo'
import LinkButton from '../../UI/Link'
import { MotionDiv } from '../../UI/FramerMotion'
import { cn } from '@/lib/utils'
import MenuLinks from './MenuLinks'
import useNavAnimation from '@/lib/hooks/useNavAnimation'

const navData = {
  logo: 'Logo',
  links: [
    {
      text: 'Home',
      url: '#block-2'
    },
    {
      text: 'For Businesses',
      url: '/businesses'
    },
    {
      text: 'For Individuals',
      url: '/individuals'
    },
    {
      text: 'Marketing Efforts',
      url: '/marketing'
    },
    {
      text: 'Blog',
      url: '/blog'
    }
  ],
  linkButton: {
    text: 'Sign In',
    url: '/signin',
    color: 'primary'
  }
}

export type LinkType = {
  text: string
  url: string
}[]

const Navbar = () => {
  const { menuHeight, logoHeight, contactButtonWidth } = useNavAnimation()

  return (
    <div className="h-[150px]">
      <MotionDiv
        id="navigation"
        className="fixed z-50 flex w-full overflow-hidden bg-[#C1C1C1] px-[30px]"
        style={{ height: menuHeight }}
      >
        <div className="flex h-full w-full flex-row items-center">
          <MotionDiv
            style={{
              height: logoHeight
            }}
            className={cn('w-1/3 overflow-hidden')}
          >
            <Logo className={cn('h-full max-w-full [&_*]:hover:fill-white')} />
          </MotionDiv>
          <MenuLinks Links={navData.links} />
          <MotionDiv className="flex h-[60%] w-1/3 items-center justify-end">
            <MotionDiv
              className="flex h-[100%] items-start justify-end"
              style={{
                width: contactButtonWidth
              }}
            >
              <LinkButton
                link="/"
                variant="button"
                className="flex h-full w-full items-center justify-center py-2 text-xs uppercase"
              >
                Contact
              </LinkButton>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  )
}

export default Navbar
