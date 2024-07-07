// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** add POST /api/interface/add */
export async function addUsingPost(
  body: API.InterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/interface/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/interface/delete */
export async function deleteUsingPost(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/interface/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getInterfaceInfoById GET /api/interface/get */
export async function getInterfaceInfoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInterfaceInfo_>('/api/interface/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** invokeInterfaceInfo POST /api/interface/invoke */
export async function invokeInterfaceInfoUsingPost(
  body: API.InterfaceInfoInvokeRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseObject_>('/api/interface/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listInterfaceInfoByPage GET /api/interface/list/page */
export async function listInterfaceInfoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listInterfaceInfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageInterfaceInfo_>('/api/interface/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** onLine POST /api/interface/online */
export async function onLineUsingPost(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/interface/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** unLine POST /api/interface/unline */
export async function unLineUsingPost(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/interface/unline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** update POST /api/interface/update */
export async function updateUsingPost(
  body: API.InterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interface/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
