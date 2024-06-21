// Service
import createHttp from "./http";

// Types
import { Student } from "@/types";

// Constants
import { ROUTES } from "@/constants";

const http = createHttp({
  baseURL: `${import.meta.env.VITE_STUDENT_API}/${ROUTES.STUDENT}`,
});

export const getAllStudentDetails = async (path: string): Promise<Student[]> =>
  (await http.get<Student[]>(path)).data;

export const createOrUpdateStudent = async (
  data: Student,
): Promise<Student> => {
  if (data.id === "") {
    const dataWithDate: Student = {
      ...data,
      dateOfAdmission: Date.now(),
    };
    return (await http.post<Student, Student>("", dataWithDate)).data;
  }

  return (await http.put<Student>("", data)).data;
};
