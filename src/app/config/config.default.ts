import { Config } from './config.model';

export const defaultConfig: Config = {
  octoprint: {
    url: 'https://localhost:5000/api/',
    accessToken: '',
  },
  printer: {
    name: '',
    xySpeed: 150,
    zSpeed: 5,
    zBabystepGCode: 'M290 Z',
    defaultTemperatureFanSpeed: {
      hotend: 200,
      heatbed: 60,
      fan: 100,
    },
  },
  filament: {
    thickness: 1.75,
    density: 1.25,
    feedLength: 0,
    feedSpeed: 20,
    feedSpeedSlow: 3,
    purgeDistance: 30,
    useM600: false,
  },
  plugins: {
    displayLayerProgress: {
      enabled: true,
    },
    enclosure: {
      enabled: false,
      ambientSensorID: null,
      filament1SensorID: null,
      filament2SensorID: null,
    },
    filamentManager: {
      enabled: true,
    },
    preheatButton: {
      enabled: true,
    },
    printTimeGenius: {
      enabled: true,
    },
    psuControl: {
      enabled: false,
      turnOnPSUWhenExitingSleep: false,
    },
  },
  octodash: {
    customActions: [
      {
        icon: 'home',
        command: 'G28',
        color: '#dcdde1',
        confirm: false,
        exit: true,
      },
      {
        icon: 'ruler-vertical',
        command: 'G29',
        color: '#44bd32',
        confirm: false,
        exit: true,
      },
      {
        icon: 'fire-alt',
        command: 'M140 S50; M104 S185',
        color: '#e1b12c',
        confirm: false,
        exit: true,
      },
      {
        icon: 'snowflake',
        command: 'M140 S0; M104 S0',
        color: '#0097e6',
        confirm: false,
        exit: true,
      },
      {
        icon: 'redo-alt',
        command: '[!RELOAD]',
        color: '#7f8fa6',
        confirm: true,
        exit: false,
      },
      {
        icon: 'skull',
        command: '[!KILL]',
        color: '#e84118',
        confirm: true,
        exit: false,
      },
    ],
    fileSorting: {
      attribute: 'name',
      order: 'asc',
    },
    pollingInterval: 2000,
    touchscreen: true,
    turnScreenOffWhileSleeping: false,
    preferPreviewWhilePrinting: false,
    previewProgressCircle: false,
  },
};
