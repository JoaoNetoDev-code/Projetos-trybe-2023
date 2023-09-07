import Title from "./Title";
import ModuleDetails from "./ModuleDetails";
import { calculateAge } from "./calculateAge";

function HelloWorld() {
    const name = 'joão neto';
    const birth = '18/12/1998';
    const age = calculateAge(birth);

  return(
    <>
    <h1>{name}</h1>
    <p>{`Age ${age}`}</p>
    <Title/>
    <ModuleDetails/>
    </>
  )
}

export default HelloWorld;