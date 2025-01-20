import { z } from "zod";
import dayjs from "dayjs";

const MealSchema = z.object({
    name: z.string().min(3, `Nome inválido`),
    description: z.string().optional(),
    date: z.string().min(1, `Data inválida`),
    hour: z.string().min(1, `Hora inválida`),
    isPart: z.boolean({message: "Selecione uma opção"}),
});

export type MealProps = z.infer<typeof MealSchema>;

export {MealSchema};