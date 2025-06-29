export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
  OTHER = 'O'
}

export function fullGender(gender: Gender): string {
  const genders: Record<Gender, string> = {
    [Gender.MALE]: 'Masculino',
    [Gender.FEMALE]: 'Feminino',
    [Gender.OTHER]: 'Outro',
  }

  return genders[gender];
}
