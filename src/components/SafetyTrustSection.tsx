export default function SafetyTrustSection() {
  const features = [
    { title: "Verified Profiles", icon: "/icons/safety-trust/verified-profiles.png", bg: "bg-[#e3f0ff]" },
    { title: "Safety Check-ins", icon: "/icons/safety-trust/luggage.png", bg: "bg-[#ffe9c8]" },
    { title: "AI-Based Compatibility & Moderation", icon: "/icons/safety-trust/ai-compatibility.png", bg: "bg-[#ffe6f0]" },
    { title: `Emergency Assistance or "Travel Buddy" Mode`, icon: "/icons/safety-trust/emergency-assistance.png", bg: "bg-[#e3ffe9]" }
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center gap-10 px-6 md:px-14 lg:px-24">


      <div className="text-center space-y-3">
        <h2 className="text-4xl font-semibold text-[#1c3b57]">Safety & Trust</h2>
        <div className="mt-3 h-[5px] w-72 mx-auto rounded-full bg-gradient-to-r from-[#07B1CE] to-[#1D4350] shadow-md shadow-blue-300/30"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Experience travel like never before with features designed for modern explorers.
        </p>
      </div>


      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[1600px] gap-20">


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-56 gap-y-14 ml-[2px] self-center">

          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 group">


              <div
                className={`w-36 h-36 ${feature.bg} rounded-full shadow-md 
                flex items-center justify-center transition-all duration-300 
                group-hover:scale-110 group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-125"
                />
              </div>

              <p className="text-base font-medium text-[#1c3b57] whitespace-nowrap">
                {feature.title}
              </p>
            </div>
          ))}

        </div>

        {/* IMAGE */}
        <div className="hidden md:flex">
          <div className="relative w-[460px] h-[550px] mr-[60px] overflow-hidden rounded-[110px_0px_110px_0px] shadow-xl">
            <img
              src="/icons/safety-trust/lake.jpg"
              alt="Lake Image"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
