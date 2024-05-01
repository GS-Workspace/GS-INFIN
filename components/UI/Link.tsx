import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

const LinkButton = ({
  children,
  variant = 'default',
  className,
  link,
  color,
  textColor
}: Readonly<{
  children: React.ReactNode
  link: string
  variant?: 'default' | 'button'
  className?: string
  color?: string
  textColor?: string
}>) => {
  const linkVariants = cva('', {
    variants: {
      variant: {
        default: '',
        button:
          'py-[38px] px-[56px] rounded-[129px] flex border border-[#121212]/[.16]'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  })

  return (
    <Link
      href={link}
      style={{
        backgroundColor: color,
        color: textColor
      }}
      className={cn(linkVariants({ variant }), className)}
    >
      {children}
    </Link>
  )
}

export default LinkButton
