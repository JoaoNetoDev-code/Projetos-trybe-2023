const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonTurn = (object) => {
    const danoBase = object.strength
    const danoCausado = Math.round(Math.random() * (danoBase - 15) + 15);

    return danoCausado;
  };

  const warriorTurn = (object) => {
    const danoBase = object.strength;
    const multplicadorDeDano = object.strength * object.weaponDmg;
    const danoCausado = Math.round(Math.random() * (multplicadorDeDano - danoBase) + danoBase);

    return danoCausado;
  };

  const mageTurn = (object) => {
    const mageMane = object.mana;
    const danoBase = object.intelligence;
    const multplicadorDeDano = object.intelligence * 2;

    const danoCausado = Math.round(Math.random() * (multplicadorDeDano - danoBase) + danoBase);

     if (mageMane < 15) { danoCausado = 'Não possui mana suficiente'};

    const statusDoturno = {damage:danoCausado, mana:15};

  return statusDoturno;
};

const gameActions = {
    // Crie as HOFs neste objeto.
    
    mageAction: (mageTurn) => {
        const mageStatus = mageTurn(mage);
        mage.damage = mageStatus.damage;
        mage.mana -= mageStatus.mana;
        dragon.healthPoints -= mage.damage;
    },

    warriorAction: (warriorTurn) => {
        const warriorDamage = warriorTurn(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warrior.damage;
    },

    dragonAction: (dragonTurn) => {
        const dragonDamage = dragonTurn(dragon);
        dragon.damage = dragonDamage;
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    
    turnResults: () => battleMembers,
};

  gameActions.warriorAction(warriorTurn);
  gameActions.mageAction(mageTurn);
  gameActions.dragonAction(dragonTurn);
  console.log(gameActions.turnResults());