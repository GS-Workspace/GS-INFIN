import Logo from '../Icons/Logo'
import ThinkSeb from '../Icons/ThinkSeb'

const Footer = () => {
  return (
    <div className="flex flex-col p-[30px]">
      <div className="mb-[300px] flex h-1/2 items-start justify-between gap-[90px]">
        <span className="w-[25%] pr-[40px] text-base opacity-[40%]">
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </span>
        <div className="flex flex-grow flex-row justify-between gap-[80px]">
          <div className="w-1/5">
            <h3 className="mb-4 text-xs opacity-[40%]">Pages</h3>
            <ul className="flex flex-col [&_li]:text-sm">
              <li>Home</li>
              <li>For Businesses</li>
              <li>For Individuals</li>
              <li>Blog</li>
              <li>Marketing Efforts</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="mb-4 text-xs opacity-[40%]">For Business</h3>
            <ul className="flex flex-col [&_li]:text-sm">
              <li>Label link1</li>
              <li>Label link2</li>
              <li>Label link3</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="mb-4 text-xs opacity-[40%]">For Individuals</h3>
            <ul className="flex flex-col [&_li]:text-sm">
              <li>Label link1</li>
              <li>Label link2</li>
              <li>Label link3</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="mb-4 text-xs opacity-[40%]">Contact</h3>
            <ul className="flex flex-col [&_li]:text-sm">
              <li>421-273-0427</li>
              <li>info@theinfin.com</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="mb-4 text-xs opacity-[40%]">Social Media</h3>
            <ul className="flex flex-col [&_li]:text-sm">
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Logo width={1380} height={240} />
        <span className="absolute bottom-0 flex flex-row items-center gap-[10px] text-xs">
          <ThinkSeb />
          <span className="opacity-[40%]">© 2024 • Curated by</span>
          <span className="font-bold">ThinkSeb</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
