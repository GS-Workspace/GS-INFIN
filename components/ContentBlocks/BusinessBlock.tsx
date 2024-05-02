import ParagraphBlock from './ParagraphBlock'
import { BlockContentType } from '@/data/data'
import { cn, formatNumber } from '@/lib/utils'
import LinkButton from '../UI/Link'
import ImageParallax from '../UI/ImageParallax'
import { MotionValue } from 'framer-motion'
import AnimatedText from '../UI/AnimatedText'

const BusinessBlock = ({
  content,
  index,
  scale
}: {
  content: BlockContentType
  index: number
  scale: MotionValue<number>
}) => {
  const { paragaphContents, title, image, linkButton, direction } = content
  const formattedNumber = formatNumber(index + 1)

  return (
    <article
      className={cn('flex h-full flex-row p-[30px]', {
        'flex-row-reverse gap-[30px] pr-0': direction === 'Left'
      })}
    >
      <div className="flex w-[70%] flex-col gap-10">
        <span className="text-sm font-medium">{formattedNumber}</span>
        <AnimatedText text={title} className="w-[80%]" box="h2" />
        {paragaphContents?.map((paragraph) => (
          <ParagraphBlock
            type={paragraph.type}
            key={paragraph.id}
            heading={paragraph?.title}
            paragraph={paragraph.content}
          />
        ))}
      </div>
      {image && (
        <div className="h-content relative flex w-[30%] items-start rounded-[20px]">
          <div className="relative">
            <ImageParallax
              scale={scale}
              src={image}
              alt="business image"
              quality={70}
            />
            {linkButton?.url && (
              <LinkButton
                link={linkButton?.url}
                color={linkButton?.color}
                textColor={linkButton?.textColor}
                className={cn(
                  'absolute bottom-3 left-0 right-0 mx-auto flex w-[calc(100%-24px)] items-center justify-center text-sm font-bold'
                )}
                variant="button"
              >
                {linkButton?.text}
              </LinkButton>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

export default BusinessBlock
