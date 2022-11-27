import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// Create client-side Magic instance
const createMagic = (key:any) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic:any = createMagic('pk_live_B347CD3C1B7B0AC8');
