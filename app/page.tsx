import Image from 'next/image';
import EmojiParticle from '../components/emoji-particles';
import AudioPlayer from '../components/audio-player';
import { Twitter, Linkedin, Globe, Mail } from 'lucide-react';
import Vid from '../components/vid';
import { MovingBorder } from '../components/moving-border';
import { Button } from '../components/moving-border';

export default function Home() {
  return (
    <EmojiParticle>
      <div
        className="flex flex-row items-center justify-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 particle-container">
          <section>
            <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
              <div className="text-center items-center justify-center">
                <Button>
                  <div className="flex sm:flex-row flex-col items-center justify-center">
                    <div className="flex justify-center py-6">
                      <Image
                        src="/psycho.jpg"
                        alt="Psycho Image"
                        width={250}
                        height={400}
                        className="rounded-3xl"
                      />{' '}
                    </div>
                    <div className="flex sm:flex-row ">
                      <div className="relative sm:ml-[-30px] mr-[-20px] mt-2 mx-2">
                        {' '}
                        <AudioPlayer src="/music.mp3" />
                      </div>
                      <h1 className="text-2xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance w-72	">
                        Why you should hire me as your intern
                      </h1>
                    </div>
                  </div>
                </Button>

                <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
                  I don&apos;t know exactly what you guys need, but one thing
                  I&apos;d say is I&apos;ll make myself useful
                </p>
                <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
                  <Vid />
                </div>
                <dl className="grid grid-cols-1 gap-6 mt-24 lg:grid-cols-3 text-balance">
                  <div>
                    <dt className="font-medium text-gray-900">
                      Jack of all trades
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-gray-500">
                      I&apos;m both technical and can communicate well.
                      I&apos;ve done sales and development work in the past, so
                      I&apos;m well versed in both.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">I learn fast</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      I love dabbling in new devleoper tooling and building new
                      projects. When I&apos;m not, I&apos;m either with friends,
                      family, or focusing on my health.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      I pull all nighters
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      I did this website, presentation, and video in one day.
                      That said, I&apos;m always to willing to put in the dirty
                      work and make sure it&apos;s done right.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10">
                  Presentation
                </h1>
                <text className=" mx-auto mt-4 text-base font-medium text-gray-500 text-balance w-3/4 mb-10 text-center items-center justify-center">
                  I go over why I want to be an intern, my past, and suggestions
                  on what I might do at Antimetal.
                </text>
              </div>
              <iframe
                src="https://docs.google.com/presentation/d/1MAA_6Hf9m6a-4yuoJgcvUN5nn2PEFINDAUxQqguQXwA/embed?start=false&loop=false&delayms=3000"
                width="70%"
                height="500px"
              ></iframe>
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10 items-center justify-center text-center">
                I will be in New York indefinitely!{' '}
              </h1>
            </div>
            <div className="my-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-4 text-center">
                My Contact Information
              </h2>
              <ul className="grid grid-cols-2 gap-4 list-none text-center">
                <a
                  href="https://twitter.com/alexdphan"
                  className="text-black hover:underline"
                >
                  <li className="flex flex-col items-center justify-center bg-gray-100 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                    <span className="mb-2">
                      <Twitter />
                    </span>
                    Twitter: alexdphan
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexanderdphan/"
                  className="text-black hover:underline"
                >
                  <li className="flex flex-col items-center justify-center bg-gray-100 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                    <span className="mb-2">
                      <Linkedin />
                    </span>
                    LinkedIn: alexanderdphan
                  </li>
                </a>
                <a
                  href="https://www.alexdphan.com"
                  className="text-black hover:underline"
                >
                  <li className="flex flex-col items-center justify-center bg-gray-100 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                    <span className="mb-2">
                      <Globe />
                    </span>
                    Personal Website: alexdphan.com
                  </li>
                </a>
                <a
                  href="mailto:alexphan0515@gmail.com"
                  className="text-black hover:underline"
                >
                  <li className="flex flex-col items-center justify-center bg-gray-100 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                    <span className="mb-2">
                      <Mail />
                    </span>
                    Email: alexphan0515@gmail.com
                  </li>
                </a>
              </ul>
            </div>
            <div className="my-8 flex flex-col items-center justify-center">
              <text className=" mx-auto mt-4 text-base font-medium text-black text-balance w-3/4 mb-5 text-center items-center justify-center">
                I saw Antimetal just start a running club, so here&apos;s my
                Strava as well :D
              </text>
              <ul className="grid grid-rows-1 grid-cols-1 gap-4 list-none text-center">
                <a
                  href="https://strava.app.link/4FXd9r1E2Ib"
                  className="text-black hover:underline"
                >
                  <li className="flex flex-col items-center justify-center bg-gray-100 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                    <span className="mb-2">
                      <Image
                        src="/strava.jpg"
                        alt="Strava"
                        width={30}
                        height={30}
                      />
                    </span>
                    Strava: Alex Phan
                  </li>
                </a>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mb-10">
                Resume
              </h1>
              <iframe
                src="https://drive.google.com/file/d/1ufJlFcS1cZtF4EhCMqvtrv0MPrlXDSBK/preview"
                width="50%"
                height="850px"
              ></iframe>
            </div>
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10 items-center justify-center text-center">
              Hope we chat soon!{' '}
            </h1>
          </section>
        </main>
      </div>
    </EmojiParticle>
  );
}
