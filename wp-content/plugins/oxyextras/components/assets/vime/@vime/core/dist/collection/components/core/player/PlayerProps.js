import { en } from './lang/en';
export const initialState = {
  theme: undefined,
  paused: true,
  playing: false,
  duration: -1,
  currentProvider: undefined,
  mediaTitle: undefined,
  currentSrc: undefined,
  currentPoster: undefined,
  currentTime: 0,
  autoplay: false,
  attached: false,
  ready: false,
  playbackReady: false,
  loop: false,
  muted: false,
  buffered: 0,
  playbackRate: 1,
  playbackRates: [1],
  playbackQuality: undefined,
  playbackQualities: [],
  seeking: false,
  debug: false,
  playbackStarted: false,
  playbackEnded: false,
  buffering: false,
  controls: false,
  isControlsActive: false,
  errors: [],
  textTracks: undefined,
  volume: 50,
  isFullscreenActive: false,
  aspectRatio: '16:9',
  viewType: undefined,
  isAudioView: false,
  isVideoView: false,
  mediaType: undefined,
  isAudio: false,
  isVideo: false,
  isMobile: false,
  isTouch: false,
  isCaptionsActive: false,
  isSettingsActive: false,
  currentCaption: undefined,
  isLive: false,
  isPiPActive: false,
  autopause: true,
  playsinline: false,
  language: 'en',
  languages: ['en'],
  translations: { en },
  i18n: en,
};
const writableProps = new Set([
  'autoplay',
  'autopause',
  'aspectRatio',
  'controls',
  'theme',
  'debug',
  'paused',
  'currentTime',
  'language',
  'loop',
  'translations',
  'playbackQuality',
  'muted',
  'errors',
  'playbackRate',
  'playsinline',
  'volume',
  'isSettingsActive',
  'isCaptionsActive',
  'isControlsActive',
]);
export const isReadonlyProp = (prop) => !writableProps.has(prop);
export const isWritableProp = (prop) => writableProps.has(prop);
/**
 * Player properties that should be reset when the media is changed.
 */
const resetableProps = new Set([
  'paused',
  'currentTime',
  'duration',
  'buffered',
  'seeking',
  'playing',
  'buffering',
  'playbackReady',
  'mediaTitle',
  'currentSrc',
  'currentPoster',
  'playbackRate',
  'playbackRates',
  'playbackStarted',
  'playbackEnded',
  'playbackQuality',
  'playbackQualities',
  'textTracks',
  'mediaType',
  'isCaptionsActive',
]);
export const shouldPropResetOnMediaChange = (prop) => resetableProps.has(prop);
const providerWritableProps = new Set([
  'ready',
  'playing',
  'playbackReady',
  'playbackStarted',
  'playbackEnded',
  'seeking',
  'buffered',
  'buffering',
  'duration',
  'viewType',
  'mediaTitle',
  'mediaType',
  'textTracks',
  'currentSrc',
  'currentPoster',
  'playbackRates',
  'playbackQualities',
  'isPiPActive',
  'isFullscreenActive',
]);
export const isProviderWritableProp = (prop) => isWritableProp(prop) || providerWritableProps.has(prop);
const playerWritableProps = new Set([
  'currentCaption',
  'isMobile',
  'isTouch',
  'isCaptionsActive',
  'isFullscreenActive',
]);
export const isPlayerWritableProp = (prop) => isWritableProp(prop) || playerWritableProps.has(prop);
