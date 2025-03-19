import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, BarChart2, Clock, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Market Masters",
  description:
    "Learn about the Market Masters platform and the team behind it.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About <span className="text-indigo-400">Market Masters</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Building the next generation of market analysis tools for Web3 traders
        </p>
      </div>

      <div className="mb-20 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Our Mission
            </h2>
            <p className="mb-6 text-zinc-400">
              At Market Masters, we're on a mission to democratize market
              intelligence. We believe that sophisticated trading analytics
              shouldn't be available only to whales and institutions, but to
              everyone in the Web3 ecosystem.
            </p>
            <p className="text-zinc-400">
              By combining real-time data, powerful analytics, and an intuitive
              user experience, we're enabling traders of all levels to make more
              informed decisions in the fast-paced world of crypto trading.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80">
              <Image
                src="/images/about-image.webp"
                alt="Market Masters Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <BarChart2 className="h-10 w-10 text-indigo-400" />,
              title: "Advanced Analytics",
              description:
                "Real-time data analysis and visualization of market movements and trader behavior.",
            },
            {
              icon: <Clock className="h-10 w-10 text-indigo-400" />,
              title: "Speed & Performance",
              description:
                "Lightning-fast interfaces with minimal latency for time-critical trading decisions.",
            },
            {
              icon: <Users className="h-10 w-10 text-indigo-400" />,
              title: "Community Focus",
              description:
                "Built by traders, for traders, with continuous feedback from our community.",
            },
            {
              icon: <Award className="h-10 w-10 text-indigo-400" />,
              title: "Transparency",
              description:
                "Open metrics and clear methodologies that you can trust for your trading strategy.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-700"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-indigo-800 bg-indigo-900/20 p-8 text-center lg:p-12">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to master the market?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-zinc-300">
          Join thousands of traders who are using Market Masters to gain an edge
          in crypto trading.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="mt-20 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-white">Get In Touch</h2>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
          Have questions or want to learn more about Market Masters? We'd love
          to hear from you!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-indigo-600 bg-transparent px-6 py-3 text-base font-medium text-indigo-400 transition-colors hover:bg-indigo-600/10 focus:outline-none"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
