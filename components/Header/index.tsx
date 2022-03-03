import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="
    sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
    text-primary-content
    "
    >
      <nav className="navbar w-full">
        <div className="flex flex-1 gap-1 lg:gap-2">
          <Link passHref={false} href="/">
            <div className="flex flex-row items-center h-full cursor-pointer">
              <div className="px-[9px] mt-[3px]">
                <svg
                  className="w-[1.875rem] h-[1.875rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M209,66.15V65a27,27,0,0,0-27-26.85H74.09a27,27,0,0,0-27,27,9,9,0,0,0,0,18V177.4h-18a9,9,0,1,0,0,18H52.05l15.14,19.06a9,9,0,0,0,7,3.4H181.88a9,9,0,0,0,7-3.37L204.2,195.4h22.63a9,9,0,0,0,0-18h-18V85.33a17.48,17.48,0,0,1,9,15.24V128a9,9,0,0,0,18,0V100.57A35.55,35.55,0,0,0,209,66.15ZM65.13,83.09H190.88V177.4H65.13Zm9-26.95H182a9,9,0,0,1,9,8.93v0H65.13A9,9,0,0,1,74.09,56.14Zm4.49,143.72L75,195.4H181.13l-3.57,4.46Z"
                    data-name="Layer 1"
                  />
                </svg>
              </div>

              <h1 className="font-extrabold m-0 text-3xl">
                <span className="font-bold lowercase">coffee</span>
                <span className="text-base-content font-bold">phin.</span>
              </h1>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
