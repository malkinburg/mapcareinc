import { NextResponse } from "next/server";
import { applicationFormSchema } from "@/lib/schemas";
import { sendApplicationEmail } from "@/lib/email";
import { positions } from "@/data/positions";

export async function POST(request: Request) {
  let data;
  try {
    const body = await request.json();
    data = applicationFormSchema.parse(body);
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid application data" },
      { status: 400 }
    );
  }

  try {
    const positionTitle = positions.find((p) => p.id === data.positionId)?.title;
    await sendApplicationEmail(data, positionTitle);
    return NextResponse.json(
      { success: true, message: "Application received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to deliver application submission:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your application right now. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
