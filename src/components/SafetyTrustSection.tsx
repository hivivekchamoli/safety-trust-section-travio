export default function SafetyTrustSection() {
  const features = [
    { title: "Verified Profiles", icon: "/icons/safety-trust/verified-profiles.png", color: "bg-[#DAEBFE]" },
    { title: "Safety Check-ins", icon: "/icons/safety-trust/luggage.png", color: "bg-[#FFECD5]" },
    { title: "AI-Based Compatibility & Moderation", icon: "/icons/safety-trust/ai-compatibility.png", color: "bg-[#FCE6F2]" },
    { title: 'Emergency Assistance or "Travel Buddy" Mode', icon: "/icons/safety-trust/emergency-assistance.png", color: "bg-[#DAFDE7]" },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Safety &amp; Trust
          </h2>

          <div className="mt-3 h-[5px] w-72 mx-auto rounded-full bg-gradient-to-r from-[#07B1CE] to-[#1D4350] shadow-md shadow-blue-300/30" />

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-500 mx-auto">
            Experience travel like never before with features designed for modern explorers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">

          {/* Features */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-16 place-items-center md:gap-x-[160px]">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-5 w-48"
              >
                <div
                  className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                </div>

                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight whitespace-normal sm:whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-[350px] h-[400px] overflow-hidden rounded-[100px_0px_100px_0px]">
              <img
                src="/icons/safety-trust/lake.jpg"
                alt="Lake Image"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}