import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let data;
  try {
    const body = await request.json();
    data = contactFormSchema.parse(body);
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid form data" },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to deliver contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your message right now. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
