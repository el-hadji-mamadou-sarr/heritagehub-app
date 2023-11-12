// src/utils/decodedPayload.ts

import { jwtDecode as originalJwtDecode, JwtDecodeOptions, JwtPayload } from "jwt-decode";

export function jwtNewDecode<T = JwtPayload>(
  token: string,
  options?: JwtDecodeOptions
): T {
  // Use the original jwtDecode to get the decoded payload
  const decodedToken = originalJwtDecode(token, options) as T & { user_id?: number , sub?:string};

  // Map 'user_id' to 'userId'
  if (decodedToken.user_id) {
    decodedToken.sub = decodedToken.user_id.toString();
  }

  return decodedToken;
}

// You can still import the original jwtDecode from this module
export { originalJwtDecode as jwtDecode };
