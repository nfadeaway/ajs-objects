export default function getSpecAttacks(character) {
  const attacksArray = [];
  for (const specialAttack of character.special) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = specialAttack;
    attacksArray.push({
      id,
      name,
      icon,
      description,
    });
  }
  return attacksArray;
}
