import { BlockContentType } from '@/data/data'
import LinkButton from '../UI/Link'
import Image from 'next/image'
import AnimatedText from '../UI/AnimatedText'
import { formatNumber } from '@/lib/utils'

const DemoBlock = ({
  content,
  index
}: {
  content: BlockContentType
  index: number
}) => {
  const { title, images, linkButton, note } = content
  const formattedNumber = formatNumber(index + 1)
  return (
    <div className="relative flex h-full w-full items-center justify-center p-[30px]">
      <span className="absolute top-[30px] text-center text-sm font-medium">
        {formattedNumber}
      </span>
      <Image
        width={223}
        height={223}
        src={String(images?.[0])}
        alt=""
        className="absolute left-[30px] top-[30px]"
      />
      <Image
        width={223}
        height={223}
        priority
        src={String(images?.[1])}
        alt=""
        className="absolute bottom-[30px] right-[30px]"
      />
      <div className="flex flex-col items-center justify-center">
        <AnimatedText
          box="p"
          text={String(note)}
          className="mb-[20px] text-sm"
        />
        <AnimatedText
          box="h2"
          text={title}
          className="mb-[30px] w-[65%] text-center text-[120px] uppercase leading-[110px]"
        />
        <LinkButton
          color={linkButton?.color}
          className="text-xs font-medium uppercase"
          variant="button"
          link="/"
        >
          {linkButton?.text}
        </LinkButton>
      </div>
    </div>
  )
}

export default DemoBlock
