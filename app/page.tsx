import Image from 'next/image';
import EmojiParticle from '../components/emoji-particles';
import AudioPlayer from '../components/audio-player';
import { Twitter, Linkedin, Globe, Mail, Github } from 'lucide-react';
import Vid from '../components/vid';
import { MovingBorder } from '../components/moving-border';
import { Button } from '../components/moving-border';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  return (
    <EmojiParticle>
      <div
        className="flex flex-row items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <main className="flex min-h-screen flex-col items-center justify-between sm:p-20 p-4 particle-container">
          <section>
            <div className="px-8 py-8 mx-auto md:px-12 lg:px-32 max-w-7xl">
              <div className="text-center justify-center">
                {/* Button is just the rounded border styling */}
                <Button>
                  <div className="flex sm:flex-row flex-col items-center justify-center sm:space-x-8">
                    <div className="flex justify-center py-6 sm:py-0">
                      <Image
                        src="/psycho.jpg"
                        alt="Psycho Image"
                        width={250}
                        height={400}
                        className="rounded-3xl w-full"
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col items-center justify-center ">
                      <div className="sm:mb-0 items-center justify-center">
                        <AudioPlayer src="/music.mp3" />
                      </div>
                      <h1 className=" sm:text-4xl lg:text-4xl xl:text-5xl text-xl font-semibold tracking-tighter text-gray-900 text-balance text-center sm:text-center mb-4 lg:mg-6 ">
                        Why you should hire me as your intern
                      </h1>
                    </div>
                  </div>
                </Button>

                <p className="w-full mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
                  I don&apos;t know exactly what you guys need, but one thing
                  I&apos;d say is I&apos;ll make myself useful ¯\_(ツ)_/¯
                </p>
                <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
                  <Vid />
                </div>
                <div>
                  <dl className="grid grid-cols-1 gap-6 sm:mt-16 mt-24 lg:grid-cols-3 text-balance sm:mb-10">
                    <div>
                      <dt className="font-medium text-gray-900">
                        I do the dirty work
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        I&apos;m always to willing to put in the effort and make
                        sure things are done well and efficiently (Ex: I made
                        this whole thing in a day).
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">
                        I learn fast
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        I love dabbling in new developer tooling and building
                        new projects. When I&apos;m not, I&apos;m either with
                        friends, family, or focusing on my own health.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">
                        Jack of all trades
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        I&apos;m both technical and can communicate well.
                        I&apos;ve done sales and development work in the past,
                        so I&apos;m well versed in both.
                      </dd>
                    </div>
                  </dl>
                </div>
                <Accordion
                  collapsible
                  className="w-full sm:max-w-screen mt-6"
                  type="single"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why should we hire you?</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-center w-full">
                      <div className="flex flex-col items-start">
                        <p className="mb-4 text-start">
                          I like building too!!! I also like tackling the
                          unknown, and I&apos;m always up for any challenge.
                        </p>
                        <div className="flex justify-center w-full">
                          <Image
                            src="/build.png"
                            alt="Building"
                            width={450}
                            height={200}
                            className="rounded-3xl"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-start">
                      What are your strengths and weaknesses as a developer?
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-start">
                      <p className="mb-4 text-start">
                        I&apos;d say a good strength of mine is the ability to
                        be wrong and taking responsiblity. I&apos;d be
                        comfortable with admitting my faults and be open to
                        constructive feedback.
                        <br />
                        <br />A weakness of mine is that I&apos;m not the
                        fastest at learning and I tend to overthink a lot
                        (working on it). In the end, however, I always make
                        progress and move forward.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-start">
                      How do you stay updated with the latest web development
                      trends?
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-start">
                      <p className="mb-4 text-start">
                        I&apos;m fortunate to have a network of friends in
                        startups and venture capital. Their insights and
                        feedback keep me informed about the latest trends in
                        tech!
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="text-start">
                    <AccordionTrigger className="text-start">
                      Do you want to be an engineering intern or a BD intern?{' '}
                    </AccordionTrigger>
                    <AccordionContent className="w-full">
                      <p className="mb-4 text-start">
                        I&apos;d be extremely happy to be an engineering intern.
                        <br />
                        <br />
                        However, I can also take on a BD role as well. I like to
                        help people and I&apos;m pushing myself to do more /
                        acquire more skills. You can judge based on my projects
                        here:{' '}
                        <a
                          href="https://www.alexdphan.com/projects"
                          className="text-black hover:underline bg-[#DAFF00]"
                        >
                          alexdphan.com/projects
                        </a>
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      So... What do you do in your free time?{' '}
                    </AccordionTrigger>
                    <AccordionContent className="w-full">
                      <p className="mb-4 text-start">
                        I literally just start building interesting projects. I
                        have a list of ideas in my notes and refer to them.
                        <br />
                        <br />
                        It&apos;s pretty much all I do in my free time. I also
                        like lifting weights, running, and finding time to hang
                        with friends/family (need to improve on spending more
                        time w/ friends though..)
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>When can you start?</AccordionTrigger>
                    <AccordionContent className="w-full">
                      <p className="mb-4 text-start">asap</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <EmojiParticle>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10">
                    Presentation
                  </h1>
                  <text className=" mx-auto mt-4 text-base font-medium text-gray-500 text-balance w-3/4 mb-10 text-center items-center justify-center">
                    I go over why I want to be an intern, my past, and
                    suggestions on what I might do at Antimetal.
                  </text>
                </div>
                <iframe
                  src="https://docs.google.com/presentation/d/1MAA_6Hf9m6a-4yuoJgcvUN5nn2PEFINDAUxQqguQXwA/embed?start=false&loop=false&delayms=3000"
                  width="70%"
                  height="500px"
                ></iframe>

                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10 items-center justify-center text-center">
                  I will be in NYC indefinitely!{' '}
                </h1>
                <text className=" mx-auto mt-2 text-base font-medium text-gray-500 text-balance w-3/4 text-center items-center justify-center">
                  Hacking projects, attending tech events, and connecting with
                  others.
                </text>
              </div>

              <div className="mt-6 mb-2 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  My Contact Information:
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
                      <span className="mb-2 ">
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
                <text className=" mx-auto mt-2 text-base font-medium text-black text-balance w-3/4 mb-5 text-center items-center justify-center">
                  I saw Antimetal just started a{' '}
                  <a
                    href="https://x.com/shreyasaiyer/status/1782856266383003857"
                    className="text-black hover:underline bg-[#DAFF00]"
                  >
                    running club
                  </a>{' '}
                  (I run as well!), so here&apos;s my Strava:
                </text>
                <ul className="grid grid-rows-1 grid-cols-1 gap-4 list-none text-center ">
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
            </EmojiParticle>
            <EmojiParticle>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 ">
                  Resume / CV
                </h1>
                <text className=" mx-auto mt-2 text-base font-medium text-gray-500 text-balance w-3/4 text-center items-center justify-center mb-6">
                  More info about me
                </text>
                <iframe
                  src="https://drive.google.com/file/d/1ufJlFcS1cZtF4EhCMqvtrv0MPrlXDSBK/preview"
                  width="50%"
                  height="850px"
                ></iframe>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 mt-10 items-center justify-center text-center">
                  Hope we chat soon!{' '}
                </h1>
                <text className=" mx-auto mt-2 text-base font-medium text-gray-500 text-balance w-3/4 text-center items-center justify-center">
                  Thanks for making it to the end.
                </text>
              </div>
              <div className="my-8 flex flex-col items-center justify-center">
                <text className=" mx-auto mt-4 text-base font-medium text-black text-balance w-3/4 mb-5 text-center items-center justify-center">
                  Here is the Github repo for this website.
                </text>
                <ul className="grid grid-rows-1 grid-cols-1 gap-4 list-none text-center">
                  <a
                    href="https://github.com/alexdphan/why-hire-me-antimetal"
                    className="text-black hover:underline"
                  >
                    <li className="flex flex-col items-center justify-center text-blue-500 p-3 border rounded-lg hover:bg-[#DAFF00] transition-colors border-opacity-50 shadow h-32 text-sm sm:text-md">
                      <span className="mb-2">
                        <Github />
                      </span>
                      Github: alexdphan/why-hire-me-antimetal
                    </li>
                  </a>
                </ul>
              </div>
            </EmojiParticle>
          </section>
        </main>
      </div>
    </EmojiParticle>
  );
}
