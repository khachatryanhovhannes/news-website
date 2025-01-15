import Link from "next/link";

export default function HomeLatestSmall() {
  return (
      <article
          className="w-full bg-white shadow-lg rounded-lg overflow-hidden bg-cover"
          style={{
              backgroundImage: "url('images/appleProduct.jpg')",
              aspectRatio: "3 / 2",
          }}
      >
          <div className="flex flex-col justify-between relative w-full h-full bg-black bg-opacity-50">
              <div className="right-0 pr-5 pt-2">
                  <p><Link href="https://google.com"/> #Apple #ARGlasses #AugmentedReality #Innovation #TechNews</p>
              </div>
              <div className="flex flex-col justify-between  p-2">
                  <div className="pb-2  border-2 rounded-lg text-xl text-center pt-2 ">
                      <p>Apple Unveils Next-Generation AR Glasses</p>
                  </div>
                  <div className="flex flex-row justify-between tracking-tight md:tracking-wide">
                      <p> Apple has announced its latest innovation: augmented reality (AR) glasses that seamlessly
                          integrate digital information into the physical world. These glasses feature a lightweight
                          design, high-resolution displays, and advanced sensors, aiming to revolutionize user
                          interaction with technology.</p>
                      <p className="border-2 h-8 rounded-lg mt-1">10.01.2025</p>
                  </div>
              </div>

          </div>

      </article>
  );
}
