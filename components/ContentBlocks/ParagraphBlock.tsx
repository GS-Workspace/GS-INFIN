import { cn } from '@/lib/utils'
import Image from 'next/image'
import AnimatedText from '../UI/AnimatedText'

const ParagraphBlock = ({
  heading,
  paragraph,
  type,
  className,
  image
}: {
  heading?: string
  paragraph: string[]
  type?: string
  className?: string
  image?: string
}) => {
  const isList = type === 'list'

  return (
    <div
      className={cn(
        'flex flex-row items-start gap-12 border-t border-[#121212]/[.16] py-[30px] pr-[30px]',
        className
      )}
    >
      <AnimatedText
        className="w-[10%] text-xs leading-4 opacity-[40%]"
        text={String(heading)}
        box="h4"
      />
      <div className={cn('flex w-4/5 flex-wrap items-start justify-between')}>
        {paragraph.map((paragraph, i) => (
          <AnimatedText
            key={String(i)}
            className={cn({
              'w-1/2 pb-3 pr-[100px]': isList
            })}
            box="p"
            text={String(paragraph)}
          />
        ))}
      </div>
      {image && (
        <Image
          src={image}
          alt="paragraph image"
          quality={100}
          width={223}
          height={223}
        />
      )}
    </div>
  )
}

export default ParagraphBlock
