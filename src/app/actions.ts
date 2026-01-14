"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const city = formData.get("city") as string;
  const phone = formData.get("phone") as string;
  const date = formData.get("date") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "Yana Photo <info@yanaphoto.ru>",
      to: ["kastyukevichyana00@gmail.com"],
      subject: `Новая заявка: ${name}`,
      text: `
        Имя: ${name}
        Город: ${city}
        Телефон: ${phone}
        Дата: ${date}
        Сообщение: ${message}
      `,
    });

    if (error) {
      return { success: false, error };
    }
    console.log("Email sent successfully, ID:", data?.id);
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}
