import dayjs from "dayjs";

const useFormattedFunctions = () => {

    const formattedDate = (value: string): string => {
        const formattedValue = value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '$1/$2')
            .replace(/\/(\d{2})(\d)/, '/$1/$2')
            .slice(0, 10);

        if (formattedValue.length < 10) {
            return formattedValue;
        }
        const [day, month, year] = formattedValue.split('/');
        const date = dayjs(`${year}-${month}-${day}`);
        const finalDate = date.format("DD/MM/YYYY");
        return finalDate;
    }

    const formattedHour = (value: string): string => {
        const formmatedValue = value
        .replace(/\D/g, '')  
        .replace(/(\d{2})(\d{0,2})/, '$1:$2')  
        .slice(0,5)
        if (formmatedValue.length < 5) {
            return formmatedValue;
        };

        if(formmatedValue.length > 5){
            return 'Hora inválida';
        }

        const [HH, mm] = formmatedValue.split(':').map(Number);

        if (HH >= 0 && HH && HH < 24 && mm >= 0 && mm < 60) {
            return formmatedValue;
        }


        return 'Hora inválida';
    }

    return {
        formattedDate,
        formattedHour,
    }
}

export { useFormattedFunctions };