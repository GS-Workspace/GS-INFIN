import { MotionDiv, MotionLi, MotionUl } from '@/components/UI/FramerMotion'
import LinkButton from '@/components/UI/Link'
import { cn } from '@/lib/utils'
import { LinkType } from './Navbar'
import useNavAnimation from '@/lib/hooks/useNavAnimation'

const MenuLinks = ({ Links }: { Links: LinkType[] }) => {
  const { gridNumValue, isScrollingUp, isFullyHorizontal } = useNavAnimation(
    Links.length
  )

  return (
    <MotionDiv
      className={cn('flex w-[38%] justify-end', {
        'justify-center': isFullyHorizontal
      })}
    >
      <MotionUl
        className={cn('grid w-full justify-end', {
          'justify-center': isFullyHorizontal
        })}
        style={{
          gridTemplateColumns: `repeat(${gridNumValue}, auto)`
        }}
        transition={{
          delayChildren: 0.5
        }}
      >
        {Links?.map((link, i) => (
          <MotionLi
            layout="preserve-aspect"
            transition={{
              type: 'spring',
              duration: 0.3,
              delay: isScrollingUp ? i * -1 : i * 0.1
            }}
            key={link.text}
            className={cn('ml-6 text-sm leading-[18px]', {
              'row-span-5': i + 1 < gridNumValue
            })}
          >
            <LinkButton link="/">{link.text}</LinkButton>
          </MotionLi>
        ))}
      </MotionUl>
    </MotionDiv>
  )
}

export default MenuLinks
