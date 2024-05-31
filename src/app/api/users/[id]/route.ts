import { getUser, updateUserProfile } from "@/database/services/users";
import { updateUserSchema } from "@/database/services/users/types";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const payload = await request.json();
    const isValid = updateUserSchema.parse(payload);
    if (!isValid) {
      return new Response(JSON.stringify({ message: "error", data: isValid }), {
        status: 400,
      });
    }
    const response = updateUserProfile(params.id, payload);
    return new Response(
      JSON.stringify({ message: "success", data: response }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "error" }), {
      status: 500,
    });
  }
}

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const response = await getUser(params.id);
    console.log({ response });
    return new Response(
      JSON.stringify({ message: "success", data: response }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "error" }), {
      status: 500,
    });
  }
}
