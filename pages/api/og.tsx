import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#edf8ff",
        }}
      >
        <div tw="flex flex-col text-8xl font-bold text-center">
          <div tw="flex mb-10">
            <span tw="text-[#926453]">aaa</span>
            <span tw="text-[#74aec4]">は</span>
          </div>
        </div>
        <span tw="text-[#926453]">お</span>
        <span tw="text-[#f18386]">し</span>
        <span tw="text-[#926453]">ま</span>
        <span tw="text-[#f18386]">い</span>
        <span tw="text-[#926453]">！</span>
      </div>
    )
  );
}
