import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

export async function sendEmail(
  data: ContactData,
  reset: UseFormReset<ContactData>
) {
  const { name, email, message } = data;

  const endpoint = "/api/email";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  const response = await res.json();
  if (response?.message) {
    reset();
    toast.success(response.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    return response.message;
  } else {
    return "Message not sent, please try again";
  }
}
