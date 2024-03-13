/**
 * this type for registration / authentication
*/
export interface ICreate {
  wallet: number;
}

/**
 * this type for confirmation (check sms validation)
*/
export interface IPatch {
  code: number;
  confirmationId: string;
}

/**
 * this type for refresh token
*/
export interface IUpdate {
  refreshToken: string;
}


/**
 * this type for response confirmation (check sms validation)
*/

export interface IResponsePatch {
  confirmation: string;
  refreshIn: Date;
}

/**
 * this type for response 200ok auth
*/
export interface IResponseCreate {
  token: string;
  refreshToken: string;
  expiresIn: number;
}