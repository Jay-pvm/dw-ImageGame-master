declare interface IGameWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'GameWebPartStrings' {
  const strings: IGameWebPartStrings;
  export = strings;
}
