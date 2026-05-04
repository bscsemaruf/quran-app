export interface IAyah {
  surah: number;
  ayah: number;
  arabic: string;
  translation: string;
  globalNumber: number;
}

type TVerse = {
  start: string;
  end: string;
};
type TJuz = {
  index: string;
  verse: TVerse;
};

export interface ISurah {
  number: number;
  place: string;
  type: string;
  count: number;
  title: string;
  titleAr: string;
  juz: TJuz[];
  englishName: string;
  englishNameTranslation: string;
}
