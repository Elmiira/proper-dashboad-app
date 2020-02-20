import request from 'utils/request';
import {
  FETCH_TENANTS_API,
  UPDATE_TENANT_API,
  ADD_TENANT_API,
  DELETE_TENANT_API,
  DAWA_API,
  GET_ADDRESS,
} from './apiAddresses';

export function fetchTenant({ page, pageSize, query }) {
  const url = FETCH_TENANTS_API(page, pageSize);
  return request({
    method: 'POST',
    url: url,
    data: {
      query,
    },
  });
}

export function addTenant(newTenant) {
  return request({
    method: 'POST',
    url: ADD_TENANT_API,
    data: {
      ...newTenant,
    },
  });
}

export function updateTenant(tenantId, newTenant) {
  const url = UPDATE_TENANT_API(tenantId);
  return request({
    method: 'PUT',
    url: url,
    data: {
      ...newTenant,
    },
  });
}

export function deleteTenant(tenantId) {
  const url = DELETE_TENANT_API(tenantId);
  return request({
    method: 'DELETE',
    url: url,
  });
}

export function validateAddress(street, houseNumber) {
  const url = DAWA_API(street, houseNumber);
  return request({
    method: 'GET',
    url: url,
  });
}

export function getAddress(id) {
  const url = GET_ADDRESS(id);
  return request({
    method: 'GET',
    url: url,
  });
}
