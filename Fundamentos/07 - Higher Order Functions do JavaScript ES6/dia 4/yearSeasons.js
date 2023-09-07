
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
  const {spring, summer, autumn, winter} = yearSeasons;
  const mesesEmUmAno = [...winter, ...spring, ...summer, ...autumn];
  console.log(mesesEmUmAno)

  const monteMesesDoAno = (...paramentro) => {
    const paramentros = paramentro.reduce((acc, curr) => acc.concat(curr), []);
    return paramentros;
  }
  monteMesesDoAno(winter, spring, summer, autumn);