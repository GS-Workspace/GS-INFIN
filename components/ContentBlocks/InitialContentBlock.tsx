import AnimatedText from '../UI/AnimatedText'
import CursorEffect from '../UI/CursorEffect'
import ParagraphBlock from './ParagraphBlock'

const InitialContentBlock = () => {
  return (
    <>
      <CursorEffect />
      <div className="mt-[64px] flex flex-row gap-12 pl-[30px]">
        <div className="w-1/3">
          <AnimatedText
            text="Why choose the INFIN"
            box="h2"
            className="!leading-[80px]"
            isHero
          />
        </div>
        <div className="w-2/3">
          <ParagraphBlock
            heading="The old way"
            isHero
            paragraph={[
              'Workers compete with their peers for recognition from bosses who also don’t like this dynamic.'
            ]}
            image="/images/initial_1.png"
            type="default"
            className="[&_h4]:w-[15%] [&_p]:w-[70%]"
          />
          <ParagraphBlock
            heading="The INFIN way"
            isHero
            image="/images/initial_2.png"
            paragraph={[
              'Colleagues dynamically observe and rank each other’s contributions in a confidential, anonymous manner. The INFIN then calculates ownable, individual value and automatically distributes peer-reviewed recognition and rewards (while giving execs a clear picture of individual ROI).'
            ]}
            type="default"
            className="[&_h4]:w-[15%] [&_p]:w-[70%]"
          />
        </div>
      </div>
    </>
  )
}

export default InitialContentBlock
