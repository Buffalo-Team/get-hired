import { useDispatch, useSelector } from 'react-redux';
import { clearUser, UserState, updateUser, userSelector } from '~/providers/redux/userSlice';

const useUserData = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const setUserData = (data: UserState) => {
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
