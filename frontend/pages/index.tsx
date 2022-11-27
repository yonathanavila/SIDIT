import Image from 'next/image'
import ConnectWallet from '../components/ConnetWallet';

export default function Home() {

  return (
    <div>
      <div className="isolate bg-dark">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#071e26"></stop>
                <stop offset="1" stopColor="#2596be"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav className="flex h-9 items-center justify-between" aria-label="Global">
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-8" height={500} width={500} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a href="#" className="font-semibold text-white-900 hover:text-white-900">Product</a>

                <a href="#" className="font-semibold text-white-900 hover:text-white-900">Features</a>

                <a href="#" className="font-semibold text-white-900 hover:text-white-900">Marketplace</a>

                <a href="#" className="font-semibold text-white-900 hover:text-white-900">Company</a>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                {/* <ConnectWallet /> */}
              </div>
            </nav>
            <div role="dialog" aria-modal="true">
              <div onFocus={() => true} className="fixed inset-0 z-10 overflow-y-auto bg-dark px-6 py-6 lg:hidden">
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <Image className="h-8" height={500} width={500} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                  </div>
                  <div className="flex">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white-500/10">
                    <div className="space-y-2 py-6">
                      <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white-900 hover:bg-white-400/10">Product</a>

                      <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white-900 hover:bg-white-400/10">Features</a>

                      <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white-900 hover:bg-white-400/10">Marketplace</a>

                      <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white-900 hover:bg-white-400/10">Company</a>
                    </div>
                    <div className="py-6">
                      <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white-900 hover:bg-white-400/10">Conectar Billetera</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-white-900/10 hover:ring-white-900/20">
                    <span className="text-dark-600">
                      Announcing our next round of funding. <a href="https://ethcolombia.clr.fund/#/projects/0x3db5a74e245220b6347acabb8f3dcc36396682001259bd7ac0859921f3aeb3b1" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">SIDIT PROTOCOL</h1>
                  <p className="mt-6 text-lg leading-8 text-white-600 sm:text-center">A decentralized solution for the digitalization of the Honduras Fire Fighter reporting system that encourages transparency and efficiency.</p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="#" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-dark shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                      Get started
                      <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
                    </a>
                    <a href="#" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-dark-900 ring-1 ring-dark-900/10 hover:ring-dark-900/20">
                      Live demo
                      <span className="text-dark-400" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                      <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#071e26"></stop>
                        <stop offset="1" stopColor="#2596be"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
