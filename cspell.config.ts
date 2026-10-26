/** @format */

import { defineConfig, type CSpellSettings } from 'cspell';

const cSpellSettings: Readonly<CSpellSettings> = defineConfig({
  version: '0.2',
  language: 'en',
  readonly: true,
  description: 'gentlebobCSpell',

  useGitignore: true,
  enableGlobDot: true,
  caseSensitive: false,
  allowCompoundWords: true,
  validateDirectives: true,
  ignoreRandomStrings: true,

  dictionaries: [],
  ignorePaths: [
    '.git/gk',
    '.git/hooks',
    '.git/info',
    '.git/logs',
    '.git/objects',
    '.git/refs',
    '.git/config',
    '.git/description',
    '.git/FETCH_HEAD',
    '.git/HEAD',
    '.git/index',
    '.git/ORIG_HEAD',
    '.git/packed-refs'
  ],

  words: [
    // Words
    'untoggle',
    'untoggled',
    'unleveled',
    'relock',

    // Names
    'Mrewy',
    'anishathalye',

    // Extensions
    'esbenp',
    'anson',
    'eamodio',
    'dbaeumer',
    'joshbolduc',
    'kohler',
    'vsicons'
  ],
  ignoreWords: [
    // Other
    'nowoted',
    'fontin',
    'expees',
    'alch'
  ]
});

export default cSpellSettings;
