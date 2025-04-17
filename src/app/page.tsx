"use client";

export default function Home() {

  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <h1 className="uppercase text-3xl">
        Digital Mental Health Interventions and Wellness
      </h1>
      <h2 className="text-xl">
        Find your calm, anonymously. Explore deeper, personally
      </h2>
      <p className="xl:w-[40%]">
        Discover a safe and anonymous space to explore mental health resources
        and begin your wellness journey. When you are ready for deeper insights
        and personalized guidance and unlock the pro version to connect your
        unique challenges with tailored information, all while maintaining the
        privacy you value
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10">
        {/* Card 1 - YouTube */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl">
          <iframe
            className="w-full rounded-lg"
            height="240"
            src="https://www.youtube.com/embed/kCQim9VrnDY"
            title="Dr. Laurie Santos' 5 Favorite Coping Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Dr. Laurie Santos' 5 Favorite Coping Tips</h3>
        </div>

        {/* Card 2 - YouTube */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="240"
            src="https://www.youtube.com/embed/kCQim9VrnDY"
            title="Dr. Laurie Santos' 5 Favorite Coping Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Dr. Laurie Santos' 5 Favorite Coping Tips</h3>
        </div>

        {/* Card 3 - Apple Podcast */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="175"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017"
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Facing Horrific Family Trauma & Finding Joy After Divorce</h3>
        </div>

        {/* Card 4 - Apple Podcast */}
        <div className="w-full max-w-[400px] flex flex-col text-center xl:shadow-xl xl:shadow-blue-300 hover:shadow-lg hover:shadow-green-500 p-4 rounded-xl bg-white">
          <iframe
            className="w-full rounded-lg"
            height="175"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/436-facing-horrific-family-trauma-finding-joy-after/id1094120819?i=1000703163017"
          ></iframe>
          <h3 className="mt-2 text-lg font-semibold">Facing Horrific Family Trauma & Finding Joy After Divorce</h3>
        </div>
      </div>

    </div>
  );
}
