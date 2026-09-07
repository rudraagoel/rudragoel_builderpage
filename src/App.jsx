
import { useState, useEffect, useRef } from 'react'


function InSight({ children, className = "" }) {
  const ref = useRef(null);
  const [isInSight, setIsInSight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInSight(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${isInSight ? '' : 'opacity-0'}`}>
      {typeof children === 'function' ? children(isInSight) : children}
    </div>
  );
}


function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-16 lg:px-24 space-y-32">

      <InSight>
        {(isInSight) => (
          <section
            id="AboutMe"
            className={`${isInSight ? 'animate-fade-up animate-delay-100' : ''} flex flex-col md:flex-row items-center md:items-start justify-between gap-16 max-w-7xl mx-auto`}
          >
            <div className="w-full md:w-[55%]">
              <span className="text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase">
                Introduction
              </span>

              <h1 className="font-bebas text-7xl md:text-8xl tracking-wide leading-none mt-2">
                ABOUT ME
              </h1>

              <div className="w-16 h-1 bg-amber-400 mt-6 mb-6" />

              <p className="font-sourcesans text-3xl md:text-4xl tracking-wide leading-tight">
                Hello, I'm Rudra Goel.
              </p>

              <p className="font-sourcesans text-xl md:text-2xl text-gray-300 tracking-wide leading-relaxed mt-6">
                I started programming at 9, now 14.
                <br />
                I've started my Hack Club journey a few weeks ago in September 2026,
                and it has been a great experience so far! Looking forward to more!
                <br />
                While now being a Hack Clubber, I'm a developer for a while now.
                I've also done a GDG Hackathon in July 2026.
                <br/>
                Also, here's a little something I've built previously in Hack Club Stardance, It's not much but.. all I have to show right now haha:
                <br />
                <a
                  href="https://hcbstardance-newtablayout.vercel.app/"
                  className="underline text-amber-400"
                >
                  Click to open: Hack Club New Tab Layout
                </a>
              </p>
            </div>

            <div className="flex justify-center md:justify-end shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border border-amber-400/40 scale-105" />
                <img
                  src="../RG_Logo_GIF_01.gif"
                  alt="Rudra Goel"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10"
                />
              </div>
            </div>
          </section>
        )}
      </InSight>


      <InSight>
        {(isInSight) => (
          <section
            id="Development"
            className={`${isInSight ? 'animate-jump-in animate-ease-linear animate-delay-100' : ''} max-w-7xl mx-auto`}
          >
            <span className="text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase">
              Development
            </span>

            <h1 className="font-bebas text-7xl md:text-8xl tracking-wide leading-none mt-2">
              TOOLS
            </h1>

            <div className="w-16 h-1 bg-amber-400 mt-6 mb-10" />

            <div className="grid md:grid-cols-2 gap-12">

              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  LANGUAGES
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'PostgreSQL',
                    'JavaScript',
                    'Python',
                    'Go',
                    'C#',
                  ].map((language) => (
                    <span
                      key={language}
                      className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-lg text-gray-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>


              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  FRAMEWORKS & SOFTWARE
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'UEFN',
                    'UE5',
                    'Unity',
                    'ReactJS',
                    'TailwindCSS',
                    'FastAPI',
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-lg text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}
      </InSight>


      <InSight>
        {(isInSight) => (
          <section
            id="CONTACT"
            className={`${isInSight ? 'animate-wiggle animate-ease-linear animate-delay-100' : ''} max-w-7xl mx-auto`}
          >
            <span className="text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase">
              CONTACT
            </span>

            <h1 className="font-bebas text-7xl md:text-8xl tracking-wide leading-none mt-2">
              Get in Touch!
            </h1>

            <div className="w-16 h-1 bg-amber-400 mt-6 mb-10" />

            <div className="grid md:grid-cols-2 gap-12">

              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  My Links
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Github', url: 'https://github.com/rudraagoel' },
                    { name: 'Discord @r.anonymous ', url: '' },
                    { name: 'Slack', url: 'https://hackclub.enterprise.slack.com/team/U0B7X61EPKR' },
                    { name: 'Instagram', url: 'https://instagram.com/rudraagoel12' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-lg text-gray-200 transition-colors hover:bg-white/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>


              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  REACH ME DIRECTLY!
                </p>

                <div className="flex flex-wrap gap-3">
                  <p className="font-sourcesans">
                    Send me an email : rudraagoel@outlook.com
                    <br />
                    <a
                      href="https://t.me/rudragoyel"
                      className="font-sourcesans underline text-amber-400"
                    >
                      Send a telegram!
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}
      </InSight>


      <InSight>
        {(isInSight) => (
          <section
            id="Favourites"
            className={`${isInSight ? 'animate-fade-in animate-ease-linear animate-delay-100' : ''} max-w-7xl mx-auto`}
          >
            <span className="text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase">
              My Favourite
            </span>

            <h1 className="font-bebas text-7xl md:text-8xl tracking-wide leading-none mt-2">
            </h1>

            <div className="w-16 h-1 bg-amber-400 mt-6 mb-10" />

            <div className="grid md:grid-cols-2 gap-12">

              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  Favourite Quotes
                </p>

                <div className="flex flex-wrap gap-3">
                  <p className="font-sourcesans">

                    "Let's go invent tomorrow instead of worrying about what happened yesterday." - Steve Jobs

                    <br/>

                    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." — Oprah Winfrey

                    <br/>

                    "Do what you can, with what you have, where you are." — Theodore Roosevelt

                    <br/>

                    "It’s not how much we have, but how much we enjoy, that makes happiness." — Charles Spurgeon

                  </p>
                </div>
              </div>


              <div className="border border-white/10 rounded-2xl p-8 bg-white/3">
                <p className="font-bebas text-3xl tracking-wide text-white mb-6">
                  Favourite GIFs
                </p>

                <div className="flex flex-wrap gap-3">
                  <img
                    className='w-80 h-50 hover:animate-pulse'
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJvZmt6cnIxZnBzZ3loM2twbHg2Nmk4YzdxZ3I0YzFhMXl3dzJxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif"
                    alt="Favourite GIF"
                  />

                  <img
                     className='w-80 h-50 hover:animate-pulse'
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazd3ZjhudjdrbXhqbWVmODMxemkzMWptNTJuN2cxcHg0Z2I5OTkweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/umYMU8G2ixG5mJBDo5/giphy.gif"
                    alt="Favourite GIF"
                  />

                  <img
                  className='w-80 h-50 hover:animate-pulse '
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWtwd3BiYm5hZDVucHZsbGM0MzhvNzBrNW1xZzRyYjNqaGNydHUzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GQty4dYXeVkOeMzqVx/giphy.gif"
                    alt="Favourite GIF"
                  />

                </div>
              </div>

            </div>
          </section>
        )}
      </InSight>


      {/* Currently Building */}

      <InSight>
        {(isInSight) => (
          <div
            className={`${isInSight ? 'animate-jump-in animate-ease-linear animate-delay-100' : ''} group rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Currently Building
              </span>

              <span className="text-xs text-white/40">
                35%
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white">
                🛠️ Synks
              </h3>

              <p className="mt-2 text-sm text-white/50">
                AI-powered unified communication
              </p>
            </div>

            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full w-[35%] rounded-full bg-white transition-all duration-700 group-hover:w-[37%]"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 animate-pulse animate-delay-100 rounded-full bg-green-400" />
              In development
            </div>
          </div>
        )}
      </InSight>


      {/* Currently Listening To */}

      <InSight>
        {(isInSight) => (
          <div
            className={`${isInSight ? 'animate-jump-in animate-ease-linear animate-delay-100' : ''} group rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5`}
          >

            {/* Header */}

            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Currently Listening To
              </span>

              <span className="text-xs text-white/30">
                ♪
              </span>
            </div>


            {/* Song */}

            <div className="flex items-center gap-4">

              {/* Album Art */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://i1.sndcdn.com/artworks-f9Y5onysBhzcsnVJ-ESSxNQ-t1080x1080.jpg"
                  alt="Animals album art"
                />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-xl font-semibold text-white">
                  Animals
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Maroon 5
                </p>
              </div>

            </div>


            {/* Progress */}

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-[10px] text-white/30">
                <span>3:21</span>
                <span>3:51</span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-white transition-all duration-700 group-hover:w-[92%]" />
              </div>
            </div>


            {/* Bottom */}

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2 text-xs text-white/40">
                <span className="h-2 w-2 animate-pulse animate-delay-100 rounded-full bg-green-400" />
                ON REPEAT
              </div>


              {/* Mini visualizer */}

              <div className="flex h-4 items-end gap-0.5">
                <span className="h-2 w-0.5 animate-pulse rounded-full bg-white/40 animate-delay-100" />
                <span className="h-4 w-0.5 animate-pulse rounded-full bg-white/40 animate-delay-100" />
                <span className="h-3 w-0.5 animate-pulse rounded-full bg-white/40 animate-delay-100" />
                <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-white/40 animate-delay-100" />
                <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-white/40 animate-delay-150" />
              </div>

            </div>

          </div>
        )}
      </InSight>


      {/* Timezone */}

      <InSight>
        {(isInSight) => (
          <div
            className={`${isInSight ? 'animate-jump-in animate-ease-linear animate-delay-100' : ''} group rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5`}
          >

            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Timezone
              </span>

              <span className="text-lg">
                🌍
              </span>
            </div>


            <h3 className="text-2xl font-semibold text-white">
              New Delhi
            </h3>

            <p className="mt-1 text-sm text-white/40">
              Asia / Kolkata
            </p>


            <div className="mt-6">
              <p className="text-4xl font-semibold tracking-tight text-white">
                {currentTime.toLocaleTimeString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>

              <p className="mt-2 text-xs text-white/40">
                UTC +5:30
              </p>
            </div>


            <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 animate-pulse animate-delay-100 rounded-full bg-green-400" />
              LIVE
            </div>

          </div>
        )}
      </InSight>

    </div>
  )
}


export default App

