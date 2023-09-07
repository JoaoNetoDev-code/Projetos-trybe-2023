export const fethExchange = async (inputValue) => {
    const response = (await fetch(`https://api.exchangerate.host/latest?base=${inputValue}`))
    const data = await response.json();
    const base = await data.base;
    if(base !== inputValue) {
        throw new Error('Moéda Digitada Não Existe!')
    }

    return data;
};
