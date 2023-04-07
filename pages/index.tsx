import { useState, useEffect } from "react";
import { FaTwitter,FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import NextHeadSeo from 'next-head-seo';

export default function Home() {
  const defaulttext = "ツイッター君";

  const [text, setText] = useState(defaulttext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const { query } = useRouter();

  useEffect(() => {
    if (query.text && typeof query.text === "string") {
      setText(query.text);
    }
  }, [query]);

  return (
    <div className="bg-[#edf8ff]">
      <NextHeadSeo
      title="おにまいロゴジェネレーター"
      description="ツイッター君はおしまい！"
      canonical="https://oshimai.vercel.app"
      og={{
        title: "ツイッター君はおしまい！",
        image: "https://oshimai.vercel.app/og.png",
      }}
    />
    <a href="https://github.com/yutakobayashidev/oshimai"  className="flex justify-end">
      <FaGithub className="text-4xl mr-6 mt-6" />
    </a>
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-center mb-10 md:text-8xl text-4xl">
            {text ? (
              <>
                <div className="md:mb-7 mb-4">
                  <span className="text-[#926453]">{text}</span>
                  <span className="text-[#74aec4]">は</span>
                </div>
                <span className="text-[#926453]">お</span>
                <span className="text-[#f18386]">し</span>
                <span className="text-[#926453]">ま</span>
                <span className="text-[#f18386]">い</span>
                <span className="text-[#926453]">！</span>
              </>
            ) : (
              <>
                <div className="mb-7">
                  <span className="text-[#926453]">{defaulttext}</span>
                  <span className="text-[#74aec4]">は</span>
                </div>
                <span className="text-[#926453]">お</span>
                <span className="text-[#f18386]">し</span>
                <span className="text-[#926453]">ま</span>
                <span className="text-[#f18386]">い</span>
                <span className="text-[#926453]">！</span>
              </>
            )}
          </h1>
          <div className="flex items-center justify-center">
            <input
              className="mr-4 resize-none rounded-md border-2 border-gray-100 bg-gray-50 px-4 py-2"
              placeholder={defaulttext}
              value={text}
              onChange={handleChange}
            />
            <div>はおしまい！</div>
          </div>
          <a
            href={
              text
                ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(text+ "はおしまい！")}`
                : `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaulttext + "はおしまい！")}`
            }
            className="text-white mt-10 font-bold text-lg mb-5 bg-[#1da1f2] inline-flex rounded-full items-center py-2 px-4"
          >
            <FaTwitter className="mr-2 text-" />
            Twitterでシェア
          </a>
        </div>
      </div>
    </div>
  );
}
