export default function Manifesto() {
  const demands = [
    {
      num: "01",
      html: `If the CJP comes in power, <strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">no Chief Justice shall be granted a Rajya Sabha seat</strong> as a post-retirement reward.`,
      as: `যদি চিজেপি ক্ষমতালৈ আহে, তেন্তে কোনো মুখ্য ন্যায়াধীশক অৱসৰৰ পিছত পুৰস্কাৰ হিচাপে ৰাজ্যসভাৰ আসন প্ৰদান কৰা নহ'ব।`
    },
    {
      num: "02",
      html: `If any legit vote is deleted, whether in a CJP or opposition-ruled state, the <strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">CEC shall be arrested under UAPA</strong>, as taking away voting rights of citizens is no less than terrorism.`,
      as: `যদি কোনো বৈধ ভোট বাতিল কৰা হয়, নিৰ্বাচন আয়ুক্তক (CEC) UAPA-ৰ অধীনত গ্ৰেপ্তাৰ কৰা হ'ব, কাৰণ ভোটাধিকাৰ কাঢ়ি নিয়াটো সন্ত্ৰাসবাদতকৈ কোনো গুণে কম নহয়।`
    },
    {
      num: "03",
      html: `<strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">Women shall receive 50% reservation, not 33%</strong>, without increasing the strength of Parliament. Additionally, <strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">50% of all Cabinet positions</strong> shall be reserved for women.`,
      as: `সংসদৰ আসন বৃদ্ধি নকৰাকৈ মহিলাসকলে ৩৩% নহয়, ৫০% সংৰক্ষণ লাভ কৰিব। ইয়াৰ উপৰিও সকলো কেবিনেট পদৰ ৫০% মহিলাৰ বাবে সংৰক্ষিত থাকিব।`
    },
    {
      num: "04",
      html: `All media houses owned by <strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">Ambani and Adani shall have their licences cancelled</strong> to make way for truly independent media. Bank accounts of Godi media anchors shall be investigated.`,
      as: `আম্বানী আৰু আদানীৰ সকলো সংবাদ প্ৰতিষ্ঠানৰ অনুজ্ঞাপত্ৰ বাতিল কৰি স্বতন্ত্ৰ মাধ্যমৰ বাবে পথ মুকলি কৰা হ'ব। গদী মিডিয়াৰ এংকৰসকলৰ বেংক একাউণ্টৰ তদন্ত কৰা হ'ব।`
    },
    {
      num: "05",
      html: `Any MLA or MP who defects from one party to another shall be <strong class="text-[#F4EBD7] font-bold bg-gradient-to-b from-transparent from-[62%] to-[#E0651E]/45 to-[62%] px-0.5">barred from contesting elections — and from holding any public office — for a period of 20 years</strong>.`,
      as: `যিকোনো বিধায়ক বা সাংসদ যিয়ে দলত্যাগ কৰে, তেওঁক ২০ বছৰৰ বাবে নিৰ্বাচনত অৱতীৰ্ণ হোৱাৰ পৰা আৰু যিকোনো ৰাজহুৱা পদবীত থকাৰ পৰা বাৰণ কৰা হ'ব।`
    }
  ];

  return (
    <section id="manifesto" className="bg-[#1A1108] text-[#F4EBD7] py-[80px] lg:py-[120px] border-b-2 border-[#1A1108] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-[200px] -left-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,#B84915,transparent_70%)] opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,#1F5A2E,transparent_70%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10">
        
        <header className="text-center mb-[72px]">
          <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#F0823A] mb-[22px]">
            THE FIVE DEMANDS
          </span>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-[#F4EBD7]">
            The Manifesto.
          </h2>
          <p className="font-sans text-[18px] leading-[1.55] text-white/80 max-w-[560px] mx-auto mt-6">
            Read it once. Read it twice. Then send it to someone who needs to read it.
          </p>
          <p className="font-sans text-[15.5px] leading-[1.55] text-white/60 max-w-[560px] mx-auto mt-2">
            এবাৰ পঢ়ক। দুবাৰ পঢ়ক। তাৰ পাছত যাক পঢ়োৱা প্ৰয়োজন, তেওঁলৈ পঠাওক।
          </p>
        </header>

        <ol className="list-none grid gap-0 max-w-[980px] mx-auto border-t border-[#F4EBD7]/20 relative z-10">
          {demands.map((demand, i) => (
            <li key={i} className="grid grid-cols-[70px_1fr] md:grid-cols-[140px_1fr] gap-[18px] md:gap-[36px] py-[36px] border-b border-[#F4EBD7]/20 items-start transition-all duration-250 hover:bg-[#E0651E]/10 px-0 hover:px-6 -mx-0 md:-mx-6 rounded-lg">
              <span className="font-display text-[44px] md:text-[88px] leading-[0.85] text-[#F0823A] tracking-[-0.02em]">
                {demand.num}
              </span>
              <div className="pt-2.5 md:pt-[16px] flex flex-col gap-2.5 md:gap-3">
                <p 
                  className="font-sans text-[16.5px] md:text-[21px] flex-1 leading-[1.5] text-[#F4EBD7]/90 font-normal"
                  dangerouslySetInnerHTML={{ __html: demand.html }}
                />
                <p className="font-sans text-[14.5px] md:text-[16px] leading-[1.55] text-white/50">
                  {demand.as}
                </p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
