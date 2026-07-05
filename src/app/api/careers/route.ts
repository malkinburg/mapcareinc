import { NextResponse } from "next/server";
import {
  applicationFormSchema,
  isAcceptedResume,
  RESUME_MAX_BYTES,
  RESUME_SIZE_MESSAGE,
  RESUME_TYPE_MESSAGE,
} from "@/lib/schemas";
import { sendApplicationEmail } from "@/lib/email";
import { positions } from "@/data/positions";

export async function POST(request: Request) {
  let data;
  let resumeFile: File;
  try {
    const formData = await request.formData();
    data = applicationFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      positionId: formData.get("positionId"),
      experience: formData.get("experience"),
      consent: formData.get("consent") === "true",
    });

    const resume = formData.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { success: false, message: "Please attach your resume" },
        { status: 400 }
      );
    }
    if (!isAcceptedResume(resume)) {
      return NextResponse.json(
        { success: false, message: RESUME_TYPE_MESSAGE },
        { status: 400 }
      );
    }
    if (resume.size > RESUME_MAX_BYTES) {
      return NextResponse.json(
        { success: false, message: RESUME_SIZE_MESSAGE },
        { status: 400 }
      );
    }
    resumeFile = resume;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid application data" },
      { status: 400 }
    );
  }

  try {
    const positionTitle = positions.find((p) => p.id === data.positionId)?.title;
    await sendApplicationEmail(data, positionTitle, {
      filename: resumeFile.name,
      content: Buffer.from(await resumeFile.arrayBuffer()),
    });
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
