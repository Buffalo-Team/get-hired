import { useDispatch, useSelector } from 'react-redux';
import { IUserState } from '~/@types/redux';
import { RootState } from '~/providers/redux/store';
import { clearUser, updateUser } from '~/providers/redux/userSlice';

const useUserData = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const setUserData = (data: IUserState) => {
    dispatch(updateUser(data));
  };

  const clearUserData = () => {
    dispatch(clearUser());
  };

  return {
    user,
    setUserData,
    clearUserData,
  };
};

export default useUserData;
