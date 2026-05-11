import React from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import LiquidButton from "./LiquidButton";
import { ABOUT_CONTENT } from "../data/about";

const iconMap: Record<string, any> = {
  Award,
  Users,
  Target,
  Lightbulb,
};

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({
  value,
  suffix = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const About: React.FC = () => {


  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-white transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {ABOUT_CONTENT.badge}
            </span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-zinc-950 uppercase italic">
              {ABOUT_CONTENT.title.main} <br />
              <span className="text-red-600 text-glow-red">
                {ABOUT_CONTENT.title.highlight}
              </span>
              <br />
              <span className="opacity-60">{ABOUT_CONTENT.title.suffix}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-xl">
              {ABOUT_CONTENT.description}
            </p>

            <div className="grid grid-cols-2 gap-12 mb-12">
              {ABOUT_CONTENT.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col relative group"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-red-600/0 group-hover:bg-red-600/50 transition-all duration-300"></div>
                  <span className="text-4xl md:text-6xl font-black text-zinc-950 mb-2 flex items-center gap-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.3em] leading-tight max-w-[120px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* <LiquidButton className="bg-red-600 !text-white hover:bg-red-700 h-16 px-10 rounded-2xl text-lg font-bold">
                            Elite Experience
                        </LiquidButton> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[800px]"
          >
            {/* 2-1 Grid Layout for Images */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full perspective-[2000px]">
              {/* Image 1: Top Left (Using 3rd Image Data) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  y: { duration: 0.8 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white group transition-all duration-300"
              >
                <img
                  src={ABOUT_CONTENT.images[2].url}
                  alt={ABOUT_CONTENT.images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 2: Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: { duration: 0.8, delay: 0.2 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white group transition-all duration-300"
              >
                <img
                  src={ABOUT_CONTENT.images[1].url}
                  alt={ABOUT_CONTENT.images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 3: Bottom Spanning Both (Using 1st Image Data) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.4 },
                  y: { duration: 0.8, delay: 0.4 }
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="relative col-span-2 rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] border-4 border-white group transition-all duration-300"
              >
                <img
                  src={ABOUT_CONTENT.images[0].url}
                  alt={ABOUT_CONTENT.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 bg-red-600 text-white w-32 h-32 flex items-center justify-center rounded-[40px] shadow-[0_20px_50px_rgba(239,68,68,0.4)] z-40 border-4 border-white backdrop-blur-md"
            >
              <div className="text-center">
                <p className="text-4xl font-black">
                  {ABOUT_CONTENT.floatingBadge.value}
                </p>
                <p className="text-[11px] font-black uppercase tracking-wider leading-none mt-1">
                  {ABOUT_CONTENT.floatingBadge.label.split(" ").join("\n")}
                </p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl z-0 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-zinc-200/50 rounded-full -z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CONTENT.pillars.map((item, i) => {
            const Icon = iconMap[item.icon];
            const number = (i + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -15,
                  backgroundColor: "rgba(239, 68, 68, 0.03)",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] border border-transparent transition-all duration-300 cursor-default flex flex-col group"
              >
                <div className="w-16 h-16 bg-[#ff5e5e] rounded-full flex items-center justify-center text-white mb-10 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-5xl font-bold text-transparent select-none opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ WebkitTextStroke: "1px #18181b" }}
                  >
                    {number}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
