export interface RadioStation {
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  country: string;
  countrycode: string;
  state: string;
  language: string[];
  tags: string[];
  codec: string;
  bitrate: number;
  votes: number;
  clickcount: number;
  lastcheckok: number;
  lastchecktime: string;
  geo_lat?: number;
  geo_long?: number;
}

export interface RadioState {
  isPlaying: boolean;
  currentStation: RadioStation | null;
  volume: number;
  isLoading: boolean;
  isPowered: boolean;
}

export interface Country {
  code: string;
  name: string;
}
