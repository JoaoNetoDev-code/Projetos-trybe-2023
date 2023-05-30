export const fethExchange = async (inputValue) => {
    const response = (await fetch(`https://api.exchangerate.host/latest?base=${inputValue}`))
    const data = await response.json();
    return data;
}