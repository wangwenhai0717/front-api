/**
 * @see https://umijs.org/docs/max/access#access
 * */
import {InitialState} from "@/typings";

export default function access(initialState: InitialState | undefined) {
  const {loginUser} = initialState ?? {};
  return {
    canAdmin: loginUser && loginUser.userRole === 'admin',
  };
}
