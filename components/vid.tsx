'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Video() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-[#DAFF00] px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]"
        >
          Watch my presentation
        </button>
        <text className=" mx-auto mt-4 text-base  text-gray-500 text-balance w-full mb-10 text-center items-center justify-center">
          Recommended watch in 1.5x!
        </text>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full p-6 overflow-hidden text-left align-middle transition-all transform bg-[#DAFF00] shadow-xl max-w-fit rounded-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/c_4ce6mBTSs"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="responsive-iframe"
                  ></iframe>

                  <style jsx>{`
                    .responsive-iframe {
                      width: 100%;
                      height: 200px; /* Default height */
                    }

                    @media (min-width: 768px) {
                      /* For tablets and above */
                      .responsive-iframe {
                        width: 600px;
                        height: 400px; /* Default height */
                      }
                    }

                    @media (min-width: 1024px) {
                      /* For desktops and above */
                      .responsive-iframe {
                        width: 600px;
                        height: 400px; /* Default height */
                      }
                    }
                  `}</style>
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
