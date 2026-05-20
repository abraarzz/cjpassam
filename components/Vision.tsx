import Image from "next/image";

export default function Vision() {
  return (
    <>
      <div className="bg-[#1A1108] text-[#F4EBD7] py-6 whitespace-nowrap overflow-hidden flex border-b-4 border-t-4 border-[#E0651E]">
        <div className="animate-marquee flex items-center gap-12 font-display text-[26px] md:text-[32px] tracking-[0.015em]">
          <span>TOGETHER WE SURVIVE</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span className="text-[#F0823A]">STRONGER TOGETHER</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span>UNITY · RESILIENCE · PROGRESS</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span className="text-[#F0823A]">YOU CANNOT SQUASH A MOVEMENT</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span>TOGETHER WE SURVIVE</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span className="text-[#F0823A]">STRONGER TOGETHER</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span>UNITY · RESILIENCE · PROGRESS</span><span className="text-[#2D7A45] text-[22px]">✦</span>
          <span className="text-[#F0823A]">YOU CANNOT SQUASH A MOVEMENT</span><span className="text-[#2D7A45] text-[22px]">✦</span>
        </div>
      </div>

      <section id="vision" className="py-[80px] lg:py-[110px] bg-gradient-to-b from-[#F4EBD7] to-[#EADFC4] border-b-2 border-[#1A1108] px-5 sm:px-8 lg:px-14">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-[80px] items-start">
          
          <div>
            <div className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#B84915] mb-[22px]">
              CHAPTER ONE
            </div>
            <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-[#1A1108] mb-6">
              Our Movement&apos;s<br />
              <em className="font-serif italic font-normal text-[#1F5A2E] tracking-[-0.01em]">Vision.</em>
            </h2>
            
            <p className="font-sans text-[18px] leading-[1.55] text-[#3A2A1C] max-w-[560px] mt-6">
              We are not here to set up another PM CARES, holiday in Davos on the taxpayer&apos;s salary slip, or rebrand corruption as &quot;strategic spending.&quot; We are here to ask — loudly, repeatedly, in writing — where the money went.
            </p>
            <p className="font-sans text-[15px] leading-[1.6] text-[#6A5440] max-w-[560px] mt-4">
              আমি ইয়াত আন এটা পিএম কেয়াৰ্ছ স্থাপন কৰিবলৈ, কৰদাতাৰ ধনেৰে ডাভছত ছুটী কটাবলৈ, বা দুৰ্নীতিক &quot;ৰণনীতিগত ব্যয়&quot; বুলি নতুন নাম দিবলৈ অহা নাই। আমি মাত্ৰ এইটো সুধিবলৈ আহিছোঁ — ডাঙৰকৈ, বাৰে বাৰে, আৰু লিখিতভাৱে — টকাবোৰ কলৈ গ’ল।
            </p>

            <div className="mt-10 border-2 border-[#1A1108] bg-[#F4EBD7] p-7 lg:p-8 shadow-[8px_8px_0_#1A1108] relative">
              <span className="inline-block font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#1F5A2E] bg-[#EADFC4] px-2.5 py-1 border border-[#1F5A2E] mb-4">
                OUR MISSION
              </span>
              <p className="font-sans text-[17px] leading-[1.6] text-[#3A2A1C] mb-3">
                Build a party for the young people who keep getting called lazy, chronically online, and — most recently — cockroaches. That&apos;s it. That&apos;s the mission. The rest is satire.
              </p>
              <p className="font-sans text-[14.5px] leading-[1.6] text-[#6A5440]">
                যিসকল যুৱক-যুৱতীক এলেহুৱা, সদায় অনলাইন থকা, আৰু — শেহতীয়াকৈ — ককৰোচ বুলি কোৱা হয়, তেওঁলোকৰ বাবে এটা দল গঠন কৰা। এইটোৱে আমাৰ লক্ষ্য। বাকীখিনি মাত্ৰ ব্যংগ।
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="border-2 border-[#1A1108] shadow-[5px_5px_0_#B84915,5px_5px_0_2px_#1A1108] lg:shadow-[10px_10px_0_#B84915,10px_10px_0_2px_#1A1108] bg-[#F4EBD7] overflow-hidden">
              <Image 
                src="https://i.ibb.co/BV4M4rjL/image.png"
                alt="Vision Rally"
                width={1024}
                height={1180}
                className="w-full h-auto aspect-[4/3] lg:aspect-auto lg:h-full object-cover block border-b-2 border-[#1A1108]"
                referrerPolicy="no-referrer"
              />
              <div className="flex justify-between p-3 lg:p-[12px_18px] font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C] bg-[#EADFC4]">
                <span>RALLY · THE PEOPLE&apos;S BANNER</span>
                <span>16 . 05 . 2026</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
