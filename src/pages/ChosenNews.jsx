import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AlbumHero from "../assets/Hero-Images/chosen-hero.webp";

const ChosenNews = () => {
  const { newsName } = useParams();
  const location = useLocation();
  const { newsImage, text, date, time } = location.state;

  return (
    <div>
      <img src={AlbumHero} alt="" className="h-40 lg:h-56 xl:h-auto" />
      <div className="w-full xl:w-[1224px] mx-auto py-16 xl:py-20 flex flex-col px-4 sm:px-8 xl:px-0">
        <motion.div
          className="pb-16 xl:pb-20 xl:ml-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="text-[32px] font-bold">{newsName}</h4>
          <p className="pt-2 font-Roboto opacity-80">{text}</p>
          <p className="pt-2 font-Roboto opacity-80">Niqvist</p>
          <p className="flex gap-1 font-Roboto opacity-80">
            <span>{date}</span>
            <span>&#183;</span>
            <span>{time}</span>
          </p>
        </motion.div>
        <motion.img
          src={newsImage}
          alt=""
          className="w-full mx-auto xl:w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        <div className="w-full pt-8 mx-auto xl:pb-20 xl:pt-20 xl:w-2/3">
          <motion.p
            className="pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            When it comes to blogs, you want to make sure that you’re not too
            general in your body copy. If you’re thinking about a content
            marketing strategy, the better you tailor your content to your
            audience, the better engagement you will get. Having a niche helps,
            because that way you can really narrow down your content.
          </motion.p>
          <motion.p
            className="pb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            How you’re marketing your blog is another thing that’s important to
            remember when you’re starting out with your blog. While it takes a
            while to start dominating the search engines and search results,
            introducing a mailing list to announce the newest blog post is a
            great idea to drive traffic to your website and blog.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h6 className="pb-2 h6-style">THIS IS A SUB-HEADING</h6>
            <p className="pb-8">
              Harness the power of social media, too: not only can you easily
              talk back and forth with your audience, but it’s also a great tool
              for marketing.
            </p>
            <p className="pb-12">
              When you’re setting up your social media accounts, check that you
              can use the same or a very similar version of your website’s
              domain as your account handle. This will make it easier for your
              audience to remember you, no matter which platform you’re using.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h6 className="pb-2 h6-style">THIS IS A SUB-HEADING</h6>
            <p className="pb-12">
              Your blog posts are a great way to communicate what happens behind
              the scenes of your business to people who follow your brand and
              buy your products. It's also a good space to share insights and
              expertise on how to get the most out of your products or to simply
              share tips and tricks on how to succeed more broadly in the niche
              that you're in.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h6 className="pb-2 h6-style">THIS IS A SUB-HEADING</h6>
            <p className="pb-8">
              To start, simply pick a topic and start brainstorming different
              headlines around it. Once you can pinpoint the main ideas that you
              want to cover in your blog posts, you can start thinking about
              what the keywords for each would be. If you're new to this, think
              about what people would be typing to Google if they were to search
              for your blog post.
            </p>
            <p>
              Use an AI Writer if you're stuck for words when you get writing,
              and to top your blog post off, it's fun to make use of blog title
              generators to come up with a unique yet eye-catching title.
              Because the better your blog post title is, the more likely you
              are to grab the visitor's attention and get them to read on.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChosenNews;
