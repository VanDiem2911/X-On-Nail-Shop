"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import siteContent from "@/data/site-content.json";
import { Star } from "lucide-react";


export default function HomePage() {
  const handmadeNails = productsData.slice(0, 6);
  const bestSellers = productsData.slice(6, 12);
  const reviews = siteContent.reviews || [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO VIDEO BANNER (16:9 ratio exactly as Flatsome) */}
      <section className="relative w-full overflow-hidden bg-black aspect-video max-h-[calc(100vh-125px)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          poster="/images/IMG_7101.JPG"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        >
          <source src="/videos/1K34PRO8E_DMCL0D.mp4" type="video/mp4" />
        </video>

        {/* 30% Dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Buttons at bottom (y90) */}
        <div className="absolute bottom-6 sm:bottom-12 inset-x-0 z-10 flex items-center justify-start max-w-7xl mx-auto px-6 sm:px-12 gap-3 sm:gap-4">
          <Link
            href="/shop"
            className="px-6 sm:px-8 py-2.5 sm:py-3.5 border-2 border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-colors shadow-lg"
          >
            SHOP NOW
          </Link>
          <a
            href="tel:+16892128888"
            className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg"
          >
            CALL NOW
          </a>
        </div>
      </section>

      {/* 2. THREE-VIDEO FEATURE ROW (Ratio 170% height as Flatsome) */}
      <section className="w-full bg-white py-4 sm:py-6">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1 */}
            <div className="relative aspect-[9/15.3] rounded-lg overflow-hidden bg-black shadow-sm pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                poster="/images/IMG_7098.JPG"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              >
                <source src="/videos/1K34PRO84_DMCL0D.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Card 2 */}
            <div className="relative aspect-[9/15.3] rounded-lg overflow-hidden bg-black shadow-sm pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                poster="/images/IMG_7099.JPG"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              >
                <source src="/videos/1K34PRO8K_DMCL0D.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Card 3 */}
            <div className="relative aspect-[9/15.3] rounded-lg overflow-hidden bg-black shadow-sm pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                poster="/images/IMG_7100.JPG"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              >
                <source src="/videos/1K34PRO84_DMCL0D.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: HANDMADE GRIP-X NAILS */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-gray-900 font-serif">
            HANDMADE GRIP-X NAILS
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {handmadeNails.map((prod) => (
            <div key={prod.id} className="group flex flex-col bg-white">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <Link href={`/product/${prod.slug}`}>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="py-3 text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide truncate">
                  <Link href={`/product/${prod.slug}`}>{prod.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                  {prod.price}
                </p>
                <div className="mt-2.5">
                  <Link
                    href={`/product/${prod.slug}`}
                    className="inline-block w-full py-2 border border-black hover:bg-black hover:text-white text-[11px] font-bold uppercase tracking-wider text-black rounded-sm transition-colors"
                  >
                    Select Options
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. SECTION: BEST SELLER */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-gray-900 font-serif">
            Best seller
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((prod, idx) => (
            <div key={prod.id} className="group flex flex-col bg-white">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                <span className="absolute top-2 left-2 z-10 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  {idx % 2 === 0 ? "17% OFF" : "25% OFF"}
                </span>
                <Link href={`/product/${prod.slug}`}>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="py-3 text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide truncate">
                  <Link href={`/product/${prod.slug}`}>{prod.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                  {prod.price}
                </p>
                <div className="mt-2.5">
                  <Link
                    href={`/product/${prod.slug}`}
                    className="inline-block w-full py-2 border border-black hover:bg-black hover:text-white text-[11px] font-bold uppercase tracking-wider text-black rounded-sm transition-colors"
                  >
                    Select Options
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SECTION: OUR REVIEWS (TrustIndex Google Widget) */}
      <section className="py-16 bg-neutral-50 border-t border-gray-100 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-gray-900 font-serif">
              Our Reviews
            </h1>
            <div className="flex items-center justify-center gap-1 mt-2">
              <span className="text-xs font-bold text-gray-800">EXCELLENT</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500">Based on Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((rev: { text: string; author: string; date: string }, idx: number) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-900">{rev.author}</span>
                  <span className="text-gray-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: SHOP US IRL */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative w-full">
          <Image
            src="/images/1-2.png"
            alt="Shop US GIRL"
            width={1024}
            height={460}
            priority
            className="w-full h-auto block"
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 flex items-start justify-end px-6 sm:px-12 md:px-16 lg:px-24 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pointer-events-none">
            <div className="text-right space-y-3 sm:space-y-4 pointer-events-auto max-w-md">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black font-serif">
                SHOP US GIRL
              </h2>
              <div>
                <a
                  href="https://www.google.com/maps/place/3168+Bill+Beck+Blvd,+Kissimmee,+FL+34744,+Hoa+K%E1%BB%B3/@28.3421851,-81.384924,96m/data=!3m1!1e3!4m6!3m5!1s0x88dd86f7f805bafd:0x719187b51bbcb7ff!8m2!3d28.3423066!4d-81.3845875!16s%2Fg%2F11bw40bzvw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md"
                >
                  FIND US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
