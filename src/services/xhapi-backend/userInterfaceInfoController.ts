// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addInterface POST /api/interfaceInfo/add */
export async function addInterfaceUsingPost(
  body: API.UserInterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/interfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteInterface POST /api/interfaceInfo/delete */
export async function deleteInterfaceUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getInterfaceInfoById GET /api/interfaceInfo/get */
export async function getInterfaceInfoByIdUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceInfoByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo_>('/api/interfaceInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listInterfaceInfoByPage GET /api/interfaceInfo/list/page */
export async function listInterfaceInfoByPageUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listInterfaceInfoByPageUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfo_>('/api/interfaceInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateInterface POST /api/interfaceInfo/update */
export async function updateInterfaceUsingPost(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
