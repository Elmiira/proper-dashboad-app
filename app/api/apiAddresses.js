import config from 'config';

export const AUTH_USER_API = `${config.backendBasURL.concat('/auth/login')}`;

export const FETCH_TENANTS_API = (page, pageSize) =>
  `${config.backendBasURL.concat(
    '/tenant/search',
  )}?page=${page}&pageSize=${pageSize}`;

export const ADD_TENANT_API = config.backendBasURL.concat('/tenant');

export const UPDATE_TENANT_API = tenantId =>
  `${config.backendBasURL.concat('/tenant/')}${tenantId}`;

export const DELETE_TENANT_API = tenantId =>
  `${config.backendBasURL.concat('/tenant/')}${tenantId}`;

export const DAWA_API = (street, houseNumber) =>
  `https://dawa.aws.dk/adgangsadresser?vejnavn=${street}&husnr=${houseNumber}&struktur=mini`;

export const DAWA_ADDRESS_API = id =>
  `https://dawa.aws.dk/adgangsadresser/${id}`
