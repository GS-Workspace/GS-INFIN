import { BlockContentType } from '@/data/data'
import { cn, formatNumber } from '@/lib/utils'
import AnimatedText from '../UI/AnimatedText'
import Image from 'next/image'

const ObjectiveBlock = ({
  content,
  index
}: {
  content: BlockContentType
  index: number
}) => {
  const { title, direction, notes } = content
  const formattedNumber = formatNumber(index + 1)

  return (
    <article
      className={cn('flex h-full flex-row p-[30px]', {
        'flex-row-reverse gap-[30px] pr-0': direction === 'Left'
      })}
      style={{
        color: content.textColor
      }}
    >
      <div className="flex">
        <div className="flex w-1/2 flex-col justify-between">
          <div className="flex w-[70%] flex-col gap-10">
            <span className="text-sm font-medium">{formattedNumber}</span>
            <AnimatedText
              text={title}
              className="w-[80%] text-[62px]"
              box="h2"
            />
          </div>
          <div className="w-1/2 pb-6">
            {notes?.map((note, i) => (
              <AnimatedText
                text={note}
                className="border-b py-6 text-[18px] text-sm opacity-[40%] last:border-0"
                box="p"
                key={note + i}
              />
            ))}
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-y-[53px]">
          {content.paragaphContents?.map((paragraph) => (
            <div key={paragraph.id} className="flex flex-col gap-y-6">
              <AnimatedText
                text={paragraph.content[0]}
                className="text-base"
                box="p"
              />
              <div className="flex items-center gap-x-3">
                <Image
                  src={String(paragraph.avatar?.url)}
                  alt=""
                  width={52}
                  height={52}
                />
                <div className="flex flex-col gap-y-1">
                  <span className="text-xl font-bold">
                    {paragraph.avatar?.name}
                  </span>
                  <span className="text-xs opacity-[40%]">
                    {paragraph.avatar?.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ObjectiveBlock
