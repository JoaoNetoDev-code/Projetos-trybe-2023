function ModuleDetails() {
  const allModules = ['fundamentos','Front-End', 'Back-End'];
  return(
    <>
    <p>{allModules[0]}</p>
    <p>{allModules[1]}</p>
    <p>{allModules[2]}</p>
    </>
  )
}

export default ModuleDetails;