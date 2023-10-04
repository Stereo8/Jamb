export interface IColumn {
  getPlayableFields: () => string[];
  isPlayable: (field: string) => boolean;

  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  UP_ORDER: string[] | undefined;
  DOWN_ORDER: string[] | undefined;
}

class DownColumn implements IColumn {
  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  readonly DOWN_ORDER: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "max",
    "min",
    "kenta",
    "triling",
    "ful",
    "poker",
    "yamb",
  ];

  constructor() {
    for (const field of Object.keys(this.columnData)) {
      this.columnData[field] = null;
    }
  }

  getPlayableFields: () => string[] = () => {
    for (const field of this.DOWN_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  };
  isPlayable = (field: string) => {
    return field in this.getPlayableFields();
  };
}

class UpColumn implements IColumn {
  columnData: {
    1: number | null;
    2: number | null;
    3: number | null;
    4: number | null;
    5: number | null;
    6: number | null;
    max: number | null;
    min: number | null;
    kenta: number | null;
    triling: number | null;
    ful: number | null;
    poker: number | null;
    yamb: number | null;
  };
  readonly UP_ORDER: string[] = [
    "yamb",
    "poker",
    "ful",
    "triling",
    "kenta",
    "min",
    "max",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
  ];

  constructor() {
    for (const field of Object.keys(this.columnData)) {
      this.columnData[field] = null;
    }
  }

  getPlayableFields: () => string[] = () => {
    for (const field of this.UP_ORDER) {
      if (this.columnData[field] === null) return [field];
    }
    return [];
  };
  isPlayable = (field: string) => {
    return field in this.getPlayableFields();
  };
}
