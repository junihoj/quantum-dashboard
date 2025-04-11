import { z } from "zod";

export const accountSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  occupation: z.enum(["ENGINEER", "DESIGNER", "DOCTOR", "TEACHER", "OTHER"]),
});

export type AccountSchema = z.infer<typeof accountSchema>;
