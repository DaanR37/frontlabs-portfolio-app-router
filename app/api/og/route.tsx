import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          // more styles here...
          backgroundImage: "url(https://frontlabs.nl/opengraph-image.png)",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
